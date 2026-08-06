# F0 Components Dashboard

> Internal triage tool for the F0 component lifecycle.

A Vite + React app that scans every component in `packages/react/src/` and visualizes its state against the lifecycle criteria defined in [`components-maturity.mdx`](../react/docs/components-maturity.mdx) and [`definition-of-done.mdx`](../react/docs/definition-of-done.mdx).

It exists to support **Foundations**' lifecycle triage: identifying components that are mislabeled, undocumented, half-promoted, or candidates for deprecation.

## What it shows

- Per-component checklist against the Definition of Done.
- Declared maturity (folder + JSDoc + story tag) vs inferred maturity.
- Detected issues: zombies, contradictions, missing wrappers, deprecation hygiene.
- A heuristic suggestion for the correct maturity.

## Run it locally

```bash
pnpm install
pnpm --filter @factorialco/f0-components-dashboard dev
```

The `dev` script runs `scan` and `plan:ola1` first to regenerate the snapshot data, then opens the Vite app.

Available scripts:

| Script | What it does |
|---|---|
| `pnpm scan` | Walks `packages/react/src/` and writes `src/data/components.json`. |
| `pnpm plan:ola1` | Computes "Ola 1" of the audit (currently: bulk `experimental` tag application). |
| `pnpm dev` | Both of the above + Vite dev server. |
| `pnpm build` | Both of the above + production build. |

## Keep the snapshot fresh

The data files in `src/data/*.json` and any `patches/` output are **not committed** (`.gitignore`). They are regenerated locally.

Agents working on component stabilization must re-run `pnpm scan` after every fix and report the issue-count delta. Stale data is worse than no data.

## Status

The dashboard is **internal tooling**, not a published artifact. It complements:

- **`packages/react/docs/`** — source of truth for the lifecycle.
- **`packages/lifecycle-site/`** — pedagogical onboarding companion.
