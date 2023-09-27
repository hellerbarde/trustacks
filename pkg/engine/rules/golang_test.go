package rules

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGolangTestsExistRule(t *testing.T) {
	t.Run("GolangTestsExistFact is true", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		if err := os.WriteFile(filepath.Join(d, "package.json"), []byte(`{}`), 0744); err != nil {
			t.Fatal(err)
		}
		fact, err := golangTestExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.Equal(t, fact, GolangTestsExistFact)
	})

	t.Run("GolangTestsExistFact is false", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		fact, err := golangTestExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.NotEqual(t, fact, GolangTestsExistFact)
	})
}
