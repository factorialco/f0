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
For `packages/react-native/` conventions, see `packages/react-native/AGENTS.md`.

## Storybook MCP Server

The F0 Storybook exposes an MCP (Model Context Protocol) server that gives AI agents access to component documentation, stories, and testing tools.

### Available Toolsets

| Toolset  | Local dev | Published (Azure) | What it does                                                                 |
| -------- | --------- | ----------------- | ---------------------------------------------------------------------------- |
| **docs** | Yes       | Yes               | `list-all-documentation`, `get-documentation`, `get-documentation-for-story` |
| **dev**  | Yes       | No                | `get-storybook-story-instructions`, `preview-stories`                        |
| **test** | Yes       | No                | `run-story-tests`                                                            |

### Using the MCP tools

When working on UI components, use the Storybook MCP tools to access component knowledge before writing or modifying code:

- **Never hallucinate component properties.** Before using any prop on an F0 component, query `get-documentation` to check if the property exists.
- Query `list-all-documentation` to discover available components.
- Query `get-documentation` for a specific component to see all available props and example stories.
- Only use properties that are explicitly documented or shown in example stories.
- Use `get-storybook-story-instructions` to fetch current conventions for writing stories (local dev only).
- Check your work by running `run-story-tests` (local dev only).

### Connecting to the MCP Server

The repo includes a `.mcp.json` at the root that configures the local Storybook MCP server (`http://localhost:6006/mcp`). Most AI agents/editors that support MCP will auto-discover it.

**Local development** (all toolsets — docs, dev, test):

1. Start Storybook: `pnpm storybook dev` from `packages/react/`
2. The MCP endpoint is available at `http://localhost:6006/mcp`

**Remote / published** (docs toolset only):

The Azure Static Web Apps deployment also exposes `/mcp` with the docs toolset enabled. Use the published URL for read-only component documentation access without a local dev server.
