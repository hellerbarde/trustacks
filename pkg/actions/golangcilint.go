package actions

import (
	"context"
	"fmt"

	"dagger.io/dagger"
	"github.com/trustacks/trustacks/pkg/engine"
	"github.com/trustacks/trustacks/pkg/engine/rules"
	"github.com/trustacks/trustacks/pkg/plan"
)

var golangCILintRun = &plan.Action{
	Name:   "golangCILintRun",
	Image:  func(_ *plan.Config) string { return "golang:alpine" },
	Stage:  plan.FeedbackStage,
	Caches: []string{"/go/pkg/mod"},
	Script: func(container *dagger.Container, _ map[string]interface{}, _ *plan.ActionUtilities) error {
		golangciLintVersion := "v1.53.3"
		container = container.WithExec([]string{"apk", "add", "bash", "curl", "git"})
		container = container.WithExec([]string{
			"/bin/sh",
			"-c",
			fmt.Sprintf("curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin %s", golangciLintVersion),
		})
		container = container.WithExec([]string{"golangci-lint", "run"})
		_, err := container.Stdout(context.Background())
		return err
	},
}

func init() {
	engine.RegisterAdmissionResolver(
		plan.ActionSpec{
			Name:        golangCILintRun.Name,
			DisplayName: "GolangCILint Run",
			Description: "Lint the source with golangci-lint.",
		},
		[]engine.Fact{rules.GolangCILintConfigExistsFact},
		nil,
		nil,
	)
	plan.RegisterAction(golangCILintRun)
}
