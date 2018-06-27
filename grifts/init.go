package grifts

import (
	"github.com/foxboron/todo/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
