# Copilot Instructions — F0 Design System

This is F0, Factorial's design system monorepo. It provides modular, reusable UI components for web and mobile.

## Monorepo Structure

- `packages/core/` — Shared types, utilities, base Tailwind config
- `packages/one/` — Factorial AI (One) components
- `packages/react/` — React component library (primary package)
- `packages/react-native/` — Mobile component library
- `packages/playground/` — (deprecated)
- `packages/react-native-playground/` — (deprecated)

## Key Conventions

- **TypeScript strict** — `any` is never acceptable
- All code and comments in **English**
- Use **pnpm** as package manager

## packages/react

When working in `packages/react/`, load `packages/react/AGENTS.md` for the full component conventions (naming, folder structure, props, testing, styling, i18n, a11y, and available commands).

## Component lifecycle

Every new F0 component follows a 5-phase lifecycle (proposal → design → build → real use → promote). See [Definition of Done](../packages/react/docs/definition-of-done.mdx) and load the `f0-component-contribution` skill before building, or `f0-component-promotion` before promoting to stable.
