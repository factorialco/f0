# Cycle Dependency Checker

A static runtime-cycle ratchet for the React package.

## Overview

The checker parses every production TypeScript/JavaScript module under `src`,
resolves internal aliases and relative imports, and ignores type-only edges.
The six cycle groups inherited from `main` are recorded in
`runtime-cycle-baseline.json`; the check fails whenever the current cycle groups
differ from that baseline. Update the baseline alongside any intentional change.

## Quick Start

```bash
# Run the checker
pnpm --filter @factorialco/f0-react cycle-deps

# Get JSON output
pnpm --filter @factorialco/f0-react cycle-deps -- --json
```

## Pre-commit mode

```bash
pnpm --filter @factorialco/f0-react cycle-deps -- --pre-commit
```

The git hook calls `--pre-commit`; the checker exits early when no staged React
source file changed. CI always runs the full graph.

## What to Do When New Cycles Are Detected

The output groups every file in each strongly connected component. Break the
runtime edge by extracting a dependency-neutral module, using a type-only
import where appropriate, or injecting the higher-level dependency.

## Exit Codes

- `0`: the runtime cycle baseline matches
- `1`: the runtime cycle baseline differs or the analysis fails

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
