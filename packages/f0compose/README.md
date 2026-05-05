# f0compose

> Design Factorial screens with AI. No code knowledge needed. Just open
> opencode or Claude Code in this folder and chat.

f0compose is a self-contained app where designers and PMs prototype
Factorial pantallas using only the f0 design system. Replace Figma + Lovable
for both quick POCs and final designs — the output is real TSX an engineer
can lift directly to a feature branch.

---

## Quick start (3 commands)

From a fresh clone of the f0 repo:

```bash
# 1. Install dependencies (one time)
pnpm install

# 2. Open the f0compose folder
cd packages/f0compose

# 3. Start the preview
pnpm dev
```

Your browser opens at **http://localhost:5174/**. You'll see the catalog of
existing prototypes.

## Create your first prototype

In a second terminal, also inside `packages/f0compose/`:

```bash
opencode      # or `claude` for Claude Code
```

Then chat:

> *"Quiero prototipar la página de configuración de Payroll para administradores."*

The AI will:

1. Ask 4 short questions (module / similar to existing? / page or component? / audience).
2. Create a file under `src/prototypes/<slug>/<Slug>.tsx`.
3. Use only f0 components and curated mock data from `@/fixtures`.
4. Tell you the URL: **http://localhost:5174/p/<slug>**.

The browser updates automatically (HMR). Keep chatting to iterate:

> *"Hazlo más denso. Añade columna de status. Cambia el sidebar."*

## Share what you made

Each prototype has a stable URL (`/p/<slug>`). When CI deploys f0compose,
the deploy preview URL is the public share link.

```bash
git checkout -b prototype/<your-slug>
git add packages/f0compose/src/prototypes/<your-slug>
git commit -m "prototype: <your-slug>"
git push -u origin prototype/<your-slug>
gh pr create
```

The Storybook deploy preview hosts f0compose. Paste the
`<deploy-preview>/p/<slug>` URL in Slack or Notion.

## What's special about f0compose

- **Constrained to f0.** The Vite plugin blocks any import outside the f0
  design system. The skills enforce f1-* tokens and Factorial conventions.
- **Real fixtures.** 11 curated domains (employees, teams, payroll,
  time-off, ...) so prototypes never look empty.
- **Real shell.** Every prototype renders inside a Factorial-like sidebar
  (Payroll, Time off, People, Talent...). No more "is this admin or
  employee?" ambiguity.
- **Skills bundled.** `f0-prototype`, `f0-design`, and `impeccable` ship
  inside this folder under `.opencode/skills/` and `.claude/skills/`.
  No setup. Open the CLI here, the skills load automatically.

## Troubleshooting

**Port 5174 in use?** Vite picks the next free port. Watch the terminal output.

**Skills not loading?** Re-run `pnpm tsx scripts/install-skills.ts` from
`packages/f0compose/` to repopulate `.opencode/skills/` and `.claude/skills/`.

**TypeScript or lint errors?** Designers don't usually need to fix these —
they live in the LLM's working loop. If they're blocking you, paste the error
to the AI and ask it to fix.

**Prototype not appearing in catalog?** Verify your file:

- Lives at `src/prototypes/<slug>/<Pascal>.tsx`.
- Exports `meta` (typed `PrototypeMeta`) AND a `default` component.
- The `slug` in `meta` matches the folder name.

## For engineers

The TSX a designer commits is real and liftable:

- All imports from `@factorialco/f0-react` or `@/fixtures`.
- Strict TypeScript (no `any`).
- Tokens use `f1-*` Tailwind classes.
- Static check (`pnpm check`) verifies imports, types, tokens, props.

To use a prototype as a real feature reference:

1. Cherry-pick the prototype file to your feature branch.
2. Replace `@/fixtures` imports with real hooks/queries.
3. Add tests, translations, accessibility review.

## Contents

```
packages/f0compose/
├── DESIGN.md            ← Tokens, type scale, anti-patterns (read first)
├── AGENTS.md            ← Conventions for the AI agent
├── src/
│   ├── catalog/         ← Homepage (list of prototypes by category)
│   ├── shell/           ← FactorialShell (ApplicationFrame + sidebar)
│   ├── prototypes/      ← Designers create here
│   ├── fixtures/        ← Curated mocks (11 domains)
│   └── blocks/          ← Starter scenes the AI remixes
├── vendor/skills/       ← Source of truth: f0-prototype, f0-design, impeccable
├── .opencode/skills/    ← Auto-installed copy (gitignored)
├── .claude/skills/      ← Auto-installed copy (gitignored)
├── scripts/             ← Manifest, blocks, skill installer
├── checks/              ← Static analysis (pnpm check)
└── generated/           ← registry.json + manifest.compact.json + blocks.json (gitignored)
```

## Philosophy

1. **Output is code, not pixels.** What you ship is real TSX.
2. **Constraint > prompt.** A skill alone is not enough. Vite + AST checks
   are the hard guarantees.
3. **Mocks of quality.** A prototype without real-shaped data is a
   wireframe.
4. **Catalog over silos.** A designer can browse what others made and
   remix from there.
