# Copilot Instructions — F0 Design System

This is F0, Factorial's design system monorepo. It provides modular, reusable UI components for web and mobile.

## Monorepo Structure

- `packages/core/` — Shared types, utilities, base Tailwind config
- `packages/react/` — React component library (primary package)
- `packages/one/` — Factorial's AI (One) related components
- `packages/react-native/` — Mobile component library (deprecated)
- `packages/playground/` — Development testing ground (deprecated)

## Key Conventions

- **TypeScript strict** — `any` is never acceptable
- All code and comments in **English**
- Use **pnpm** as package manager

## packages/react

When working in `packages/react/`, load `packages/react/AGENTS.md` for the full component conventions (naming, folder structure, props, testing, styling, i18n, a11y, and available commands).
