---
name: f0-design-system-introduction
description: Foundational guide for the f0 design system. Use this to understand the role of Storybook as a development workbench. Do not use this as the primary reference for component documentation; refer to the f0 documentation site instead.
---

# f0 Design System Introduction

The f0 design system utilizes Storybook as a development environment ("workbench") for building and testing components in isolation. It serves as a visual catalog rather than the authoritative documentation source.

## Workbench vs. Documentation

- **Storybook (Workbench)**: Used for isolated component development, state testing, and visual regression.
- **f0 Documentation Site**: The primary source of truth for component APIs, design guidelines, and business logic.

## Usage Guidelines

- **When to use**: Use this skill when onboarding to the f0 ecosystem or when needing to understand the development workflow for f0 components.
- **When not to use**: Do not use this as a reference for production implementation details or API specifications. Always verify against the official documentation site.

## Best Practices

- Use Storybook to explore component variants and interactive states during the design-to-code handoff.
- Ensure all components follow the atomic design principles established in the f0 ecosystem.
- Verify visual consistency across different viewports and themes using the Storybook toolbar.

## Related Skills

For specific component implementations and patterns within the f0 system, refer to the following:
- For core UI components, see the skill in ./references/ui-components.md
- For theme configuration and design tokens, see the skill in ./references/theme-provider.md
- For layout patterns and grids, see the skill in ./references/layout-system.md