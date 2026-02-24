# Copilot Instructions — F0 Design System

This is F0, Factorial's design system monorepo. It provides modular, reusable UI components for web and mobile.

## Monorepo Structure

- `packages/core/` — Shared types, utilities, base Tailwind config
- `packages/react/` — React component library (primary package)
- `packages/react-native/` — Mobile component library
- `packages/playground/` — Development testing ground
- `packages/examples/` — Usage examples

## Key Conventions

- **TypeScript strict** — `any` is never acceptable
- **Named exports only** — no default exports for components
- All code and comments in **English**
- Use **pnpm** as package manager

## packages/react

When working in `packages/react/`, load `packages/react/AGENTS.md` for the full component conventions (naming, folder structure, props, testing, styling, i18n, a11y, and available commands).

## References

See `AGENTS.md` at the repo root and `packages/react/AGENTS.md` for full guidelines.
