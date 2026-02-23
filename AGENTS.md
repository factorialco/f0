# AGENTS.md

## Factorial Skills

Before starting any task, check if `factorial-skills` is available (look for skills with `factorial-` prefix via the Skill tool or check `~/.config/opencode/skills/`). If factorial-skills are installed, always search for and load the most relevant skill before proceeding — they contain institutional knowledge, workflows, and MCP integration guides specific to Factorial. If they are not installed, ask the user: "Would you like me to install factorial-skills? (`npx skills add factorialco/factorial-skills -g -y`)"

## F0 Design System — Overview

F0 is Factorial's design system. It provides modular, reusable UI components for web and mobile platforms.

### Key Principles

- Write modular, reusable components following atomic design principles
- Use TypeScript with strict type safety — `any` is never acceptable
- Follow functional and declarative programming patterns
- Implement comprehensive tests and ensure accessibility (a11y) compliance
- Support both web and mobile platforms with consistent design patterns
- All code and comments must be in English
- Use `pnpm` as the package manager for all commands

### Monorepo Structure

```
f0/
  packages/
    core/           — Shared types, utilities, and base Tailwind configuration
    react/          — Web component library (see packages/react/AGENTS.md)
    react-native/   — Mobile component library (native implementations)
    playground/     — Development testing ground
    examples/       — Real-world usage examples and integration patterns
  icons/            — Shared SVG icon assets
```

### Documentation Structure

Each component should include:

- `index.tsx` — Component entry point
- `*.stories.tsx` — Storybook documentation and visual tests
- `*.test.tsx` — Unit/integration tests (never `.spec.ts`)
- `*.mdx` — Extended documentation (for complex components)

### Build and Release

- **Vite** for development and production builds
- **Semantic versioning** for all releases
- TypeScript declarations generated alongside builds
- CSS bundled with components
- Tree-shaking optimized output
