---
name: f0-move-component
description: Moves one or more components between src/ category folders (components, experimental, kits, patterns, lib, sds, ui) in packages/react. Updates all internal imports, adds a @deprecated re-export at the origin, and updates the destination barrel. Trigger when the user provides a table of component moves, asks to reorganize folders, or wants to restructure the Storybook sidebar.
---

# F0 Move Component

This skill reorganizes components across the `src/` category folders of `packages/react`. It processes a Markdown table of changes and, for each row:

1. Locates the component by its current Storybook `title`.
2. Moves the component folder to the new location.
3. Updates all internal import paths within `packages/react/src/`.
4. Adds a `@deprecated` re-export in the origin `exports.ts`.
5. Wires the component into the destination `exports.ts`.
6. Verifies with TypeScript and Vitest.

## When to Use

- Reorganizing components across category folders for a Storybook sidebar restructure.
- Moving a component from `experimental/` to a stable category.
- Moving a component from `components/` to `sds/`, `kits/`, `ui/`, or another category.
- Any batch folder-level component move within `packages/react/src/`.

## Category → Folder Mapping

| Storybook category value | `src/` path         | Entry-point barrel               |
| ------------------------ | ------------------- | -------------------------------- |
| `components`             | `src/components/`   | `src/components/exports.ts`      |
| `experimental`           | `src/experimental/` | `src/experimental/exports.ts`    |
| `kits`                   | `src/kits/`         | `src/kits/exports.ts`            |
| `patterns`               | `src/patterns/`     | `src/patterns/exports.ts`        |
| `lib`                    | `src/lib/`          | `src/lib/exports.ts`             |
| `sds`                    | `src/sds/`          | (no single exports.ts — see §5b) |
| `ui`                     | `src/ui/`           | (not publicly re-exported)       |

> **Note on `sds/`**: There is no single `sds/exports.ts`. Each SDS sub-domain has its own `exports.ts` (e.g., `sds/ai/exports.ts`, `sds/inbox/exports.ts`). When moving a component to `sds/`, determine the correct sub-domain folder and wire it there (or create a new one if needed).

> **Note on `ui/`**: Components in `src/ui/` are **not** publicly re-exported from `f0.ts`. Skip adding them to any public barrel. They are used only by other components via `@/ui/`.

## Input Format

The user must provide a Markdown table with these columns:

```markdown
| Story Title actual      | Destino          | Notas (opcional)           |
| ----------------------- | ---------------- | -------------------------- |
| Navigation/Tabs         | components       |                            |
| Experimental/Forms/Card | components/Forms | renombrar carpeta a F0Card |
| Information/Headers     | sds/profile      |                            |
| Widgets/Widget          | kits             |                            |
```

- **Story Title actual**: the exact `title:` string from the component's `.stories.tsx` file.
- **Destino**: one of the 7 category values from the table above. Can include a subfolder path (e.g., `components/Navigation`, `sds/profile`).
- **Notas**: optional free-form instructions (renaming, special handling, etc.).

## Prerequisites

```bash
# Install ts-exported-info if not already present
pnpm exec ts-exported-info --version || pnpm add -D ts-exported-info
```

## Step-by-Step Workflow

Copy this checklist into your working notes for each component row in the table.

```markdown
### <Component Name>

- [ ] Step 1: Capture origin exports
- [ ] Step 2: Locate component folder via story title
- [ ] Step 3: Move folder to destination
- [ ] Step 4: Update internal imports
- [ ] Step 5a: Add @deprecated re-export in origin exports.ts
- [ ] Step 5b: Wire component into destination exports.ts
- [ ] Step 6: Verify (TypeScript + Vitest)
```

---

### Step 1: Capture Origin Exports

Before touching anything, snapshot what the origin barrel currently exports. This ensures nothing is accidentally dropped.

```bash
# Replace <origin-exports-path> with the actual path, e.g.:
# packages/react/src/experimental/exports.ts
pnpm exec ts-exported-info packages/react/src/<origin-category>/exports.ts
```

Note the list of exported identifiers.

---

### Step 2: Locate the Component Folder

Search for the `.stories.tsx` file whose `title:` matches the **Story Title actual** column.

```bash
# Example: find the story file with title "Navigation/Tabs"
grep -r 'title:.*"Navigation/Tabs"' packages/react/src --include="*.stories.tsx" -l
```

From the matching file path, determine the **component root folder** — the nearest ancestor that contains an `index.ts` or `index.tsx`.

> For example, if the story is at `src/experimental/Navigation/Tabs/__stories__/Tabs.stories.tsx`, the component root is `src/experimental/Navigation/Tabs/`.

---

### Step 3: Move the Folder

Compute the destination path from the **Destino** column using the category→folder mapping above.

```bash
# Examples:
# Destino = "components"    → src/components/<ComponentName>/
# Destino = "components/Navigation" → src/components/Navigation/<ComponentName>/
# Destino = "sds/profile"  → src/sds/Profile/<ComponentName>/

mv packages/react/src/<origin-path>/<ComponentName>/ \
   packages/react/src/<destination-path>/<ComponentName>/
```

If the destination subfolder does not exist, create it:

```bash
mkdir -p packages/react/src/<destination-path>/
```

**Do not change the story `title:` field** inside `.stories.tsx` files — only the filesystem location changes.

---

### Step 4: Update Internal Imports

Find all files inside `packages/react/src/` that import from the old path and rewrite them to the new path.

```bash
# Dry-run: list all files importing from the old path
grep -r "from.*<old-relative-or-alias-path>" packages/react/src --include="*.ts" --include="*.tsx" -l
```

For each file found, update the import path. Common patterns to look for:

| Import style                                   | What to update                       |
| ---------------------------------------------- | ------------------------------------ |
| `@/experimental/Navigation/Tabs`               | → `@/<new-category>/<new-path>/Tabs` |
| `../../../experimental/Navigation/Tabs`        | → relative path to new location      |
| `../../Navigation/Tabs` (within same category) | → updated relative path              |

> Use `sed` or the Edit tool for each file. Prefer the Edit tool for precise replacements to avoid accidental changes.

**Also check these cross-cutting files:**

- `src/f0.ts`
- `src/experimental.ts`
- `src/kits.ts`
- `src/ai.ts`
- Any `exports.ts` in neighboring folders that explicitly imported from the old path

---

### Step 5a: Add @deprecated Re-export in Origin

In the **origin** `exports.ts` (e.g., `src/experimental/exports.ts`), replace the old direct export line with a deprecated re-export pointing to the new location.

**Pattern A — was `export * from "./ComponentPath"`:**

```typescript
/**
 * @deprecated <ComponentName> has moved to @/<new-category>/<ComponentName>. Import from there instead.
 */
export * from "../<new-category>/<ComponentName>"
```

**Pattern B — was a named/aliased export:**

```typescript
import {
  F0NewName,
  type F0NewNameProps,
} from "../<new-category>/<ComponentName>"

/**
 * @deprecated Use `import { F0NewName } from "@factorialco/f0-react"` instead.
 */
export { F0NewName as OldName, type F0NewNameProps as OldNameProps }
```

Choose the pattern that preserves the exact export names consumers depend on.

> **Do not remove the old export entirely** — doing so is a breaking change for any consumer importing from the old path via `@factorialco/f0-react` or `@factorialco/f0-react/experimental`.

---

### Step 5b: Wire Into Destination Barrel

Add the component to the destination `exports.ts`. Follow the existing patterns in that file:

**Simple re-export (most common for `components/`):**

```typescript
// In src/components/exports.ts — add alphabetically by component name
export * from "./<ComponentName>"
```

**With subfolder (e.g., `components/Navigation/`):**

```typescript
// In src/components/Navigation/exports.ts (create if needed)
export * from "./<ComponentName>"

// Then in src/components/exports.ts, ensure the subfolder is wired:
export * from "./Navigation/exports"
```

**For `kits/`:**

```typescript
// In src/kits/exports.ts
export * from "./<ComponentName>/exports" // or /index, check existing pattern
```

**For `sds/<subdomain>/`:**

```typescript
// In src/sds/<subdomain>/exports.ts (create if needed)
export * from "./<ComponentName>"

// Then ensure it is wired in src/components/exports.ts or src/f0.ts
// (check how other SDS components are wired — e.g., sds/TimeLine is in components/exports.ts)
```

**For `ui/`:**

Do NOT add to any public barrel. Components in `ui/` are internal primitives.

---

### Step 6: Verify

Run these checks in order. Fix any issues before marking the migration complete.

```bash
# From packages/react/

# 1. TypeScript — must produce zero errors
pnpm tsc

# 2. Verify export surface didn't shrink
pnpm exec ts-exported-info packages/react/src/<origin-category>/exports.ts
# Compare against the list captured in Step 1 — count must be equal or greater, no names dropped.

# 3. Run unit tests for the moved component
pnpm vitest run src/<new-path>/<ComponentName>

# 4. Check for circular dependencies
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts
```

If TypeScript errors appear:

- **Cannot find module** → a relative import in the moved folder still points to the old location; fix the path.
- **Module has no exported member** → the destination `exports.ts` is missing an export or the component was renamed.
- **Circular dependency** → the move created a cycle; re-evaluate the import relationships.

---

## Batch Processing

When the input table has multiple rows, process each row **sequentially** (not in parallel) to avoid conflicts in shared barrel files (`exports.ts`).

Recommended order when rows share the same origin category (e.g., multiple moves out of `experimental/`):

1. Run Steps 1–5b for all rows.
2. Run Step 6 (verify) once for all changes together.

This reduces the number of TypeScript check runs.

---

## What This Skill Does NOT Do

- **Does not change `title:` in story files** — the Storybook sidebar title is the user's responsibility.
- **Does not update imports outside `packages/react/`** — consumers in other packages (e.g., `factorial` app) must update their imports separately.
- **Does not rename component files** — only moves the folder. If the Notes column requests a rename, handle that as a separate manual step after moving.
- **Does not touch auto-generated files** — icons and type snapshots are out of scope.

---

## Examples

### Example 1: Move a single component from experimental to components

Input table:

| Story Title actual | Destino    | Notas |
| ------------------ | ---------- | ----- |
| Navigation/Tabs    | components |       |

Actions:

1. `grep -r 'title:.*"Navigation/Tabs"'` → found at `src/experimental/Navigation/Tabs/__stories__/Tabs.stories.tsx`
2. Component root: `src/experimental/Navigation/Tabs/`
3. `mv src/experimental/Navigation/Tabs/ src/components/Tabs/`
4. Update any import of `@/experimental/Navigation/Tabs` → `@/components/Tabs`
5. In `src/experimental/exports.ts`, replace `export * from "./Navigation/Tabs"` with:
   ```typescript
   /**
    * @deprecated Tabs has moved to @/components/Tabs. Import from there instead.
    */
   export * from "../components/Tabs"
   ```
6. In `src/components/exports.ts`, add: `export * from "./Tabs"`
7. Run `pnpm tsc` + `pnpm vitest run src/components/Tabs`

---

### Example 2: Move to a subfolder destination

Input table:

| Story Title actual | Destino               | Notas |
| ------------------ | --------------------- | ----- |
| Experimental/Tabs  | components/Navigation |       |

Actions:

- Destination path: `src/components/Navigation/Tabs/`
- Create `src/components/Navigation/` if it doesn't exist
- Wire: ensure `src/components/Navigation/exports.ts` exports `./Tabs`, and `src/components/exports.ts` exports `./Navigation/exports`

---

## References

- `packages/react/AGENTS.md` — folder structure, export rules, naming conventions
- `packages/react/.skills/f0-experimental-component-migration/SKILL.md` — related skill for experimental→stable promotions
- `packages/react/.scripts/check-cycle-dependencies.ts` — circular dependency checker
