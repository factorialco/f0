---
name: how-to-contribute
description: Guidelines for contributing to the F0 design system. Use when reporting bugs, making small fixes, proposing large enhancements, or creating new components to ensure compliance with system standards.
---

# How to Contribute to F0

This skill provides the procedural knowledge required to contribute to the F0 design system. It covers workflows ranging from reporting bugs to proposing entirely new components.

## Contribution Workflows

### 1. Reporting Issues
Use this workflow when identifying bugs, performance regressions, or unexpected behavior.
- **Action**: Provide as much context as possible, including reproduction steps, browser information, and screenshots.
- **Expectation**: Issues are reviewed, prioritized, and tagged. Do not resolve the issue until the bug is confirmed by the maintainers.

### 2. Small Enhancements and Fixes
Use for low-impact changes that do not break existing behavior or require extensive design overhauls.
- **Examples**: Code bug fixes, Figma library corrections, aligning names between code and Figma, documentation typos, or adding new icons.
- **Expectation**: These undergo a standard review. If a design review is needed, designers will be looped in, but the process is generally fast.
- **Related**: For Icon components, see the skill in ./references/icon.md.

### 3. Large Enhancements
Use for extending existing features or making major visual/code changes.
- **Examples**: Adding dismissibility or new positioning logic to an alert, or major visual refactors.
- **Expectation**: These require significant time. They must be reviewed across multiple disciplines: design, code, accessibility, and documentation.
- **Related**: For Alert components, see the skill in ./references/alert.md.

### 4. Proposing New Patterns or Components
Use when a required UI pattern or component does not exist in the current library and would be useful to multiple teams.
- **Criteria**: Proposals must demonstrate that the component is unique and provides broad utility.
- **Process**: Contact the team via the `#f0` Slack channel to initiate the proposal.
- **Expectation**: This is a high-effort process involving research, design, code implementation, and full documentation.

## Best Practices

- **Naming Alignment**: Always ensure that component and prop names match between the Figma library and the codebase.
- **Early Communication**: For any change larger than a small fix, engage with the team in the `#f0` channel before starting implementation.
- **Documentation**: Any enhancement to a component must be reflected in its corresponding documentation and Storybook stories.
- **Accessibility**: All large enhancements and new components must meet the system's accessibility standards.

## Related Skills
- For general component documentation patterns, see the skill in ./references/component-documentation.md.
- For design tokens and theme variables, see the skill in ./references/design-tokens.md.