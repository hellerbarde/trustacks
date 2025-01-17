package actions

import (
	"context"
	"fmt"
	"strings"

	"dagger.io/dagger"
	"github.com/mitchellh/mapstructure"
	"github.com/trustacks/trustacks/pkg/engine"
	"github.com/trustacks/trustacks/pkg/engine/rules"
	"github.com/trustacks/trustacks/pkg/plan"
)

var containerBuildAction = &plan.Action{
	Name:  "containerBuild",
	Image: func(_ *plan.Config) string { return "busybox" },
	Stage: plan.OnDemandStage,
	OutputArtifacts: []plan.Artifact{
		plan.ContainerImageArtifact,
	},
	Script: func(container *dagger.Container, _ map[string]interface{}, utils *plan.ActionUtilities) error {
		container = container.Directory("/src").DockerBuild()
		return utils.ExportContainer(container, plan.ContainerImageArtifact)
	},
}

var containerCopyAction = &plan.Action{
	Name:  "containerCopy",
	Image: func(_ *plan.Config) string { return "alpine" },
	Stage: plan.PackageStage,
	InputArtifacts: []plan.Artifact{
		plan.ContainerImageArtifact,
		plan.SemanticVersionArtifact,
	},
	Script: func(container *dagger.Container, inputs map[string]interface{}, utils *plan.ActionUtilities) error {
		var err error
		args := struct {
			CONTAINER_REGISTRY          string
			CONTAINER_REGISTRY_USERNAME string
			CONTAINER_REGISTRY_PASSWORD string
		}{}
		if err := mapstructure.Decode(inputs, &args); err != nil {
			return err
		}
		container, imageMount, err := utils.MountImage(container, plan.ContainerImageArtifact)
		if err != nil {
			return err
		}
		version := utils.GetConfig().Common.Version
		if version == "" {
			container, versionMount, err := utils.Mount(container, plan.SemanticVersionArtifact)
			if err != nil {
				return err
			}
			version, err = container.File(versionMount.Path("version")).Contents(context.Background())
			if err != nil {
				return err
			}
		}
		_, err = container.Import(container.File(imageMount.Path("image.tar"))).
			WithRegistryAuth(args.CONTAINER_REGISTRY, args.CONTAINER_REGISTRY_USERNAME, utils.SetSecret("registryPassword", args.CONTAINER_REGISTRY_PASSWORD)).
			Publish(context.Background(), fmt.Sprintf("%s:%s", args.CONTAINER_REGISTRY, strings.ReplaceAll(version, "\n", "")))
		if err != nil {
			return err
		}
		return err
	},
}

func init() {
	engine.RegisterAdmissionResolver(
		plan.ActionSpec{
			Name:        containerBuildAction.Name,
			DisplayName: "Container Build",
			Description: "Build a container image from the source Containerfile or Dockerfile.",
		},
		[]engine.Fact{rules.ContainerfileHasNoDependenciesFact},
		nil,
		nil,
	)
	plan.RegisterAction(containerBuildAction)

	engine.RegisterAdmissionResolver(
		plan.ActionSpec{
			Name:        containerCopyAction.Name,
			DisplayName: "Container Publish",
			Description: "Publish the container to a container registry.",
		},
		[]engine.Fact{rules.ContainerfileExistFact},
		nil,
		[]string{
			string(plan.ContainerRegistry),
			string(plan.ContainerRegistryUsername),
			string(plan.ContainerRegistryPassword),
		},
	)
	plan.RegisterAction(containerCopyAction)
}
