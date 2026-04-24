# Playground

Generated screen compositions produced by the [`screen-builder`](../.storybook/skills/screen-builder/SKILL.md) skill.

Stories under this folder are **not part of the F0 React library**. They exist to:

- Prototype real screens from product specs.
- Iterate on a composition before promoting any of its parts to a stable component.
- Visualise how F0 blocks combine to solve a concrete product problem.

## Conventions

- One folder per screen: `playground/<kebab-case-screen-name>/`.
- Story `title` always starts with `Playground/`.
- Each composition wraps the body in `ApplicationFrame` + `Navigation/Page`.
- All compositions follow the rules in [`docs/page-composition.mdx`](../docs/page-composition.mdx).

## Adding a screen

Use the `screen-builder` skill. It enforces the composition rules, queries the Storybook MCP for component documentation, and writes the story for you.
