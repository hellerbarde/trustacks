package rules

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPyProjectTomlExistsRule(t *testing.T) {
	t.Run("PyProjectTomlExistsFact is true", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		if err := os.WriteFile(filepath.Join(d, "pyproject.toml"), []byte(``), 0744); err != nil {
			t.Fatal(err)
		}
		fact, err := pyProjectTomlExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.Equal(t, fact, PyProjectTomlExistsFact)
	})

	t.Run("PyProjectTomlExistsFact is false", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		fact, err := pyProjectTomlExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.NotEqual(t, fact, PyProjectTomlExistsFact)
	})
}

func TestPipRequirementsExistsRule(t *testing.T) {
	t.Run("PipRequirementsExistsFact is true", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		if err := os.WriteFile(filepath.Join(d, "requirements.txt"), []byte(``), 0744); err != nil {
			t.Fatal(err)
		}
		fact, err := pipRequirementsExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.Equal(t, fact, PipRequirementsExistsFact)
	})

	t.Run("PipRequirementsExistsFact is false", func(t *testing.T) {
		d, err := os.MkdirTemp("", "test-src")
		if err != nil {
			t.Fatal(err)
		}
		defer os.RemoveAll(d)
		fact, err := pipRequirementsExistsRule(d, nil, nil)
		if err != nil {
			t.Fatal(err)
		}
		assert.NotEqual(t, fact, PipRequirementsExistsFact)
	})
}
