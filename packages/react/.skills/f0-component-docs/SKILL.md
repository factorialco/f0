---
name: f0-component-docs
description: Storybook story and MDX documentation generation templates for F0 React components. Use when creating or updating component documentation, writing Storybook stories (index.stories.tsx), adding interaction tests (play functions), or writing MDX docs (index.mdx) for components in packages/react.
---

# F0 Component Docs

Generate Storybook stories and MDX documentation for F0 React components.

## Workflow

1. Read the component source and its subcomponents to understand props, variants, and behavior
2. Generate `__stories__/index.stories.tsx` — see [references/story-templates.md](references/story-templates.md)
3. Generate `__stories__/index.mdx` — see [references/mdx-templates.md](references/mdx-templates.md)
4. Verify stories render and interaction tests pass

## Story File (`index.stories.tsx`)

Use `satisfies Meta<typeof Component>` (not `as Meta`). Always include tags `["autodocs", "stable"]` or `["autodocs", "experimental"]`.

Required stories: **Default**, **variant stories** (one per significant prop variant), **edge cases**, and **Snapshot** (with `withSnapshot({})` for Chromatic).

For union type props, reference the component's exported const array in `argTypes.options`. Add `play` functions for interactive components.

Full patterns and examples: [references/story-templates.md](references/story-templates.md)

## MDX File (`index.mdx`)

Required sections: **Introduction** (Definition + Purpose), **Anatomy** (Canvas + Controls), **Guidelines** (Content + Design best practices with `DoDonts`).

Optional sections: **Variants** (only if significant variants exist), **Behavior** (for interactive components), **Layout**.

Write for both designers and developers. Use `Canvas of={...}` for all examples.

Full patterns and examples: [references/mdx-templates.md](references/mdx-templates.md)

## Quality Checklist

Before submitting:

- [ ] All required sections present (Introduction, Anatomy, Guidelines minimum)
- [ ] Code examples working and up to date
- [ ] Props fully documented
- [ ] Accessibility guidelines included
- [ ] Interactive examples working (play functions)
- [ ] Snapshot story exists with `withSnapshot({})`
- [ ] Story docs cover all component properties
