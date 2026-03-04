---
name: f0-experimental-component-migration
description: Guide for migrating components from experimental to stable locations (components/, sds/, ui/). Trigger when the user wants to migrate, promote, or move an experimental component, or asks about deprecating experimental exports.
---

# Experimental Component Migration

This skill guides the migration of components from `src/experimental/` to stable locations (`src/components/`, `src/sds/`, or `src/ui/`) while preserving backward compatibility through deprecated exports.

## When to Use

- Promoting an experimental component to production status.
- Moving a component from `experimental/` to `components/`, `sds/`, or `ui/`.
- Deprecating experimental exports in favor of new stable paths.

## Prerequisites

- **ts-exported-info**: Use this tool to ensure no exports are dropped during migration.
  - Run via: `pnpm exec ts-exported-info <path-to-export-file>` (e.g., `packages/react/src/experimental/exports.ts`)
  - Use `--output json` for easier comparison if needed.

## Migration Workflow

Copy this checklist to track progress:

```markdown
- [ ] **Capture exports**: Run `ts-exported-info` on the experimental entry file to list all current exports.
- [ ] **Move & Structure**: Move component to target location and apply standard structure (index, F0Name, types, tests).
- [ ] **Wire stable**: Add new component to `src/components/exports.ts` (or appropriate stable barrel).
- [ ] **Deprecate**: Update experimental entry to re-export from new path with `@deprecated`.
- [ ] **Verify**: Run `ts-exported-info` again to confirm export surface matches exactly.
```

### Step 1: Capture Current Exports

Before moving anything, identify exactly what is exported to avoid breaking changes.

```bash
# Example
pnpm exec ts-exported-info packages/react/src/experimental/exports.ts
```

Note down the list of exported values and types.

### Step 2: Move and Restructure

Move the component to its new home (e.g., `src/components/F0NewName`). Follow the **F0 Component Patterns**:

1. **Structure**:
   - `index.tsx`: Entry point (exports only).
   - `F0Name.tsx`: Implementation (use `forwardRef`, remove `experimentalComponent` wrapper).
   - `types.ts`: Public types.
   - `__stories__/`: Storybook files.
   - `__tests__/`: Unit tests.
2. **Naming**: Ensure component name starts with `F0` (if applicable).
3. **Clean up**: Remove `experimentalComponent()` wrapper. Use simple re-export or `Component()` (for XRay) in `index.tsx`.

### Step 3: Wire Stable Exports

Add the component to the main stable export file (usually `packages/react/src/components/exports.ts`).

```typescript
// packages/react/src/components/exports.ts
export * from "./F0NewName"
```

### Step 4: Deprecate in Experimental

Go back to the experimental export file (e.g., `src/experimental/exports.ts` or sub-export) and replace the original export with a deprecated re-export. **You must preserve the original export names.**

#### Pattern A: Re-export entire module

Use this when the experimental file did `export * from "./OldPath"`.

```typescript
/**
 * @deprecated ComponentName has moved to @/components/F0NewName. Import from there instead.
 */
export * from "../components/F0NewName"
```

#### Pattern B: Named/Aliased exports

Use this when the experimental file had specific named exports or aliases that differ from the new names.

```typescript
import { F0NewName, type F0NewNameProps } from "../components/F0NewName"

/**
 * @deprecated Use `import { F0NewName } from "@factorialco/f0-react"` instead.
 */
export { F0NewName as OldName, type F0NewNameProps as OldNameProps }
```

### Step 5: Verify Export Surface

Run `ts-exported-info` again on the experimental file.

```bash
pnpm exec ts-exported-info packages/react/src/experimental/exports.ts
```

**Verification Criteria:**

- Total number of exports should match (or increase if new types were added, but never decrease).
- All original export names must still be present.
- All exports should now resolve to the new location.

## References

- See `packages/react/AGENTS.md` for folder structure rules.
- See `f0-component-patterns` skill for detailed component architecture.
