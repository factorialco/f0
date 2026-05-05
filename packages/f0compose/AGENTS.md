# AGENTS.md — packages/f0compose

This is the f0compose app: an isolated environment where designers and PMs
prototype Factorial screens using AI. It bundles its own skills under
`.opencode/skills/` and `.claude/skills/`, auto-installed on `pnpm install`.

## When you are running here

- Treat `f0-prototype` as the primary skill. Activate it on the first
  user message asking to design a screen.
- Pair every action with `f0-design` (DESIGN.md enforcement) and, for
  design quality reviews, `impeccable`.
- ALWAYS end your turn by giving the local URL of what you created
  (`http://localhost:5174/p/<slug>`).
- Be proactive: if the dev server isn't running, offer to start it
  (`pnpm dev` in the background) so the designer can see HMR in real
  time.

## Hard rules for prototypes

- `src/prototypes/<slug>/<Slug>.tsx` is the only place to write.
- Every prototype exports `meta` (typed `PrototypeMeta`) AND a default
  React component.
- The component returns ONLY the page body. The framework wraps it in
  `FactorialShell` (ApplicationFrame + canonical sidebar).
- Imports allowed: `react`, `react-dom`, `react-router-dom`,
  `@factorialco/f0-react`, `@factorialco/f0-core`, `@/fixtures`,
  `@/lib`, `@/prototypes`, relative paths. Anything else fails Vite.
- Tokens: only `f1-*`. Never raw colors.
- Mocks: only from `@/fixtures`. Never inline arrays of 4+ items
  passed to a data component.
- TypeScript strict. No `any`. No `as any`.

## Component quirks (the LLM forgets these)

- **F0Heading / F0Text** take `content` (string), NOT children.
- **F0Heading variant**: `"heading"` | `"heading-large"`.
- **F0Text variant**: `"body"` | `"small"` | `"label"` | `"description"` | `"code"` | `"inverse"`.
- **F0Alert** takes `title` + `description` (strings), no children.
- **Chip** (the `OneChip` folder exports `Chip`) only has `default` /
  `selected` variants — not semantic. Use Tailwind spans for status.
- **ApplicationFrame** is NEVER imported by prototypes. The framework
  adds it.

## Workflow

1. Discovery interview (4 questions).
2. Read `generated/blocks.json` for canonical seeds.
3. Read `generated/registry.json` before using ANY prop.
4. Write the prototype file with `meta` + default export.
5. Vite hot-reloads.
6. Run `pnpm check src/prototypes/<slug>` and `pnpm tsc`.
7. Tell the user the URL `http://localhost:5174/p/<slug>` and offer next
   iteration ideas.

## Don't

- Don't edit `vite.config.ts`, `tailwind.config`, `package.json`,
  `tsconfig.json`.
- Don't touch `src/shell/`, `src/catalog/`, `src/lib/` — those are
  framework code.
- Don't modify components in `packages/react/src/`.
- Don't end the turn without the local URL.
