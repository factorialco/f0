# F0 Lifecycle Site

Visual companion to the F0 component lifecycle policies. It translates the long `.mdx` specifications into a navigable, scannable UI for the team.

## What it is

A small Vite + React app that renders:

1. **The flow** — interactive diagram (React Flow) of the 5 lifecycle phases.
2. **The phases** — cards summarizing goal, gates, owner and exit criteria of each phase.
3. **The maturity model** — Experimental → Stable → Deprecated.
4. **The rules** — process rules, lint rules, PR types.
5. **Quick reference** — triage outcomes, SLAs, deprecation rule, ownership.

## Source of truth

The site is a **view** over the specs. The canonical documents live in the repo:

- `packages/react/docs/definition-of-done.mdx`
- `packages/react/docs/components-maturity.mdx`
- `packages/react/docs/design-review.mdx`
- `packages/react/docs/contributions.mdx`
- `packages/react/docs/development/release-and-versioning.mdx`

When a spec changes, update the corresponding `src/data/*.ts` file and ship a new version of the site.

## Develop

```sh
pnpm install
pnpm --filter @factorialco/f0-lifecycle-site dev
```

Opens on http://localhost:5180.

## Build

```sh
pnpm --filter @factorialco/f0-lifecycle-site build
```

Output in `dist/`. Deploy to any static host (Vercel, Netlify, GitHub Pages).

## Roadmap

This site is **Tab 1 ("How we work")** of the broader Lifecycle Dashboard tracked in the Foundations technical backlog. **Tab 2 ("Current state")** — live data on the 242 components, promotion queue, deprecation countdown — will be added when the underlying telemetry lands.
