package actions

import (
	"context"

	"dagger.io/dagger"
	"github.com/trustacks/trustacks/pkg/engine"
	"github.com/trustacks/trustacks/pkg/engine/rules"
	"github.com/trustacks/trustacks/pkg/plan"
)

var golangTest = &plan.Action{
	Name:   "golangTest",
	Image:  func(_ *plan.Config) string { return "golang" },
	Stage:  plan.FeedbackStage,
	Caches: []string{"/go/pkg/mod"},
	Script: func(container *dagger.Container, _ map[string]interface{}, _ *plan.ActionUtilities) error {
		container = container.WithExec([]string{"go", "test", "./...", "-v", "-short", "-cover"})
		_, err := container.Stdout(context.Background())
		return err
	},
}

func init() {
	engine.RegisterPatternMatches([]engine.PatternMatch{
		{
			Kind:       engine.FilePatternMatch,
			Pattern:    "_test.go",
			Exclusions: &[]string{"testdata", "vendor"},
		},
	})
	engine.RegisterAdmissionResolver(
		plan.ActionSpec{
			Name:        golangTest.Name,
			DisplayName: "Golang Test",
			Description: "Run the test suite with go test.",
		},
		[]engine.Fact{rules.GolangTestsExistFact},
		nil,
		nil,
	)
	plan.RegisterAction(golangTest)
}
