# AGENTS.md

## Factorial Skills

Before starting any task, check if `factorial-skills` is available (look for skills with `factorial-` prefix via the Skill tool or check `~/.config/opencode/skills/`). If factorial-skills are installed, always search for and load the most relevant skill before proceeding — they contain institutional knowledge, workflows, and MCP integration guides specific to Factorial. If they are not installed, ask the user: "Would you like me to install factorial-skills? (`npx skills add factorialco/factorial-skills -g -y`)"

## F0 Design System — Overview

F0 is Factorial's design system. It provides modular, reusable UI components for web and mobile platforms.

### Key Principles

- TypeScript strict — `any` is never acceptable
- All code and comments in English
- Use `pnpm` as the package manager

### Formatting

The project uses `oxfmt` configured via `.oxfmtrc.json` at the repo root. Key rules that affect code generation:

- **No semicolons** (`"semi": false`) — never add `;` at the end of lines
- Double quotes (`"singleQuote": false`)
- 2-space indentation
- Trailing commas where valid in ES5 (`"trailingComma": "es5"`)

### Monorepo Structure

```
f0/
  packages/
    core/                    — Shared types, utilities, base Tailwind config
    one/                     — Factorial AI (One) components
    react/                   — Web component library (see packages/react/AGENTS.md)
    react-native/            — Mobile component library
    playground/              — (deprecated)
    react-native-playground/ — (deprecated)
  icons/                     — Shared SVG icon assets
```

For `packages/react/` conventions, see `packages/react/AGENTS.md`.
