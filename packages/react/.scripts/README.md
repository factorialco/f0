# Cycle Dependency Checker

A static runtime-cycle ratchet for the React package.

## Overview

The checker parses every production TypeScript/JavaScript module under `src`,
resolves internal aliases and relative imports, and ignores type-only edges.
The six cycle groups inherited from `main` are recorded in
`runtime-cycle-baseline.json`; the check fails when a cycle gains files, when
known groups merge, or when a new group appears. Shrinking a known group passes.

## Quick Start

```bash
# Run the checker
pnpm --filter @factorialco/f0-react cycle-deps

# Get JSON output
pnpm --filter @factorialco/f0-react cycle-deps -- --json
```

## Pre-commit mode

```bash
./check-cycle-dependencies.ts --pre-commit
```

The git hook calls `--pre-commit`; the checker exits early when no staged React
source file changed. CI always runs the full graph.

## What to Do When New Cycles Are Detected

The output groups every file in each strongly connected component. Break the
runtime edge by extracting a dependency-neutral module, using a type-only
import where appropriate, or injecting the higher-level dependency.

## Exit Codes

- `0`: no new or enlarged runtime cycles
- `1`: a new/enlarged runtime cycle or an analysis error

## Technical Details

- **Parser**: TypeScript compiler API
- **Scope**: production `.ts`, `.tsx`, `.js`, `.jsx`, `.mts`, `.cts`, `.mjs`,
  and `.cjs` files under `src`
- **Edges**: emitted static imports and re-exports. Dynamic imports are excluded
  because they do not create eager module-evaluation cycles.
- **Algorithm**: Tarjan strongly connected components

## Related Documentation

- [Component Guidelines](../AGENTS.md)
- [Project Overview](../../AGENTS.md)
