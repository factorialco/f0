---
name: f0-move-component
description: Use when moving an F0 component from one Storybook section to another. Covers folder moves, deprecated re-exports for backward compatibility, and bulk import updates across the codebase.
---

# f0-move-component

> **PURPOSE**: Step-by-step instructions for moving a component between sections in the F0 design system (`packages/react/src/`), preserving backward compatibility and keeping all imports consistent.

---

## Storybook Sections Reference

All sections are registered in `packages/react/.storybook/main.ts` via `{ directory, titlePrefix }` entries.

| Source folder      | `titlePrefix`  | Notes                                        |
| ------------------ | -------------- | -------------------------------------------- |
| `src/components`   | `Components`   | All public F0 components                     |
| `src/patterns`     | `Patterns`     | —                                            |
| `src/kits`         | `Kits`         | —                                            |
| `src/experimental` | `Experimental` | Legacy only — do NOT add new components here |
| `src/layouts`      | `Layouts`      | Page layout components                       |
| `src/lib`          | `Library`      | Internal utilities and providers             |
| `src/hooks`        | `Library`      | Public exported hooks                        |
| `src/sds`          | `SDS`          | Satellite design systems                     |
| `src/examples`     | `Examples`     | Full-app example stories                     |
| `src/ui`           | `🔒 Internal`  | Radix/shadcn primitive wrappers — not public |

> If the destination section is **not** in this table, see [Adding a new section](#adding-a-new-section) before continuing.

---

## Workflow

### Step 1 — Move the entire folder

Move the component folder as-is. Do not rename anything inside it.

```bash
mv packages/react/src/<source>/<ComponentName> packages/react/src/<destination>/<ComponentName>
```

**Example** — moving `F0Button` from `components` to `kits`:

```bash
mv packages/react/src/components/F0Button packages/react/src/kits/F0Button
```

---

### Step 2 — Do NOT rename any story's `title` field

The `titlePrefix` in `main.ts` is prepended automatically by Storybook. The `title` field inside each `.stories.tsx` file only needs the component-relative path — **never the section name**.

```ts
// BEFORE move — lives in src/components/F0Button/__stories__/F0Button.stories.tsx
// Storybook renders it as: Components/F0Button
const meta: Meta<typeof F0Button> = {
  title: "F0Button",  // ← do not touch this
  ...
}

// AFTER move — now lives in src/kits/F0Button/__stories__/F0Button.stories.tsx
// Storybook renders it as: Kits/F0Button  ← section changes automatically
const meta: Meta<typeof F0Button> = {
  title: "F0Button",  // ← still unchanged
  ...
}
```

---

### Step 3 — Add a deprecated re-export in the source section's `exports.ts`

This preserves backward compatibility for any consumer importing from the old path.

Locate (or create) the `exports.ts` file at the **root of the source section folder** and add a `@deprecated` re-export pointing to the new location.

**Pattern:**

```ts
/** @deprecated <ComponentName> has moved to @/<destination>/<ComponentName>. Import from there instead. */
export * from "../<destination>/<ComponentName>"
```

**Example** — after moving `F0Button` from `components` to `kits`:

```ts
// packages/react/src/components/exports.ts
/** @deprecated F0Button has moved to @/kits/F0Button. Import from there instead. */
export * from "../kits/F0Button"
```

> If `exports.ts` does not exist in the source section, create it with only the deprecated re-export line above.

---

### Step 4 — Update all imports across the codebase

Replace every occurrence of the old import path with the new canonical path.

**Dry-run first** (lists affected files without modifying them):

```bash
grep -r "@/<source>/<ComponentName>" packages/react/src \
  --include="*.ts" --include="*.tsx" -l
```

**Apply the replacement:**

```bash
find packages/react/src -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i '' 's|@/<source>/<ComponentName>|@/<destination>/<ComponentName>|g' {} +
```

**Example** — updating imports after moving `F0Button` from `components` to `kits`:

```bash
# Dry-run
grep -r "@/components/F0Button" packages/react/src --include="*.ts" --include="*.tsx" -l

# Apply
find packages/react/src -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -exec sed -i '' 's|@/components/F0Button|@/kits/F0Button|g' {} +
```

> The deprecated re-export added in Step 3 means existing consumers outside `packages/react/src` (e.g., the Factorial app) continue to work unchanged until they migrate to the new path.

---

### Step 5 — Verify

Run all checks from `packages/react/`:

```bash
pnpm tsc        # type-check — catches broken imports
pnpm lint       # lint
pnpm vitest:ci  # unit tests
```

Fix any errors before committing.

---

## Checklist

Use this before opening a PR:

- [ ] Component folder moved to destination section
- [ ] No `title` field modified in any `.stories.tsx` file
- [ ] `@deprecated` re-export added to `src/<source>/exports.ts`
- [ ] Re-export uses `export * from "../<destination>/<ComponentName>"`
- [ ] All `@/<source>/<ComponentName>` imports updated to `@/<destination>/<ComponentName>`
- [ ] `pnpm tsc` passes with no errors
- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm vitest:ci` passes

---

## Adding a new section

If the destination folder is **not** registered in `main.ts`, add an entry to the `stories` array before moving any component:

```ts
// packages/react/.storybook/main.ts
stories: [
  // ... existing entries ...
  {
    directory: "../src/<new-folder>",
    titlePrefix: "<New Section Label>",
  },
],
```

Create the folder if it does not exist:

```bash
mkdir -p packages/react/src/<new-folder>
```

Then continue from Step 1.

---

## Real-world examples from the codebase

These existing deprecated re-exports follow the same pattern described above and can be used as reference:

```ts
// src/components/exports.ts
/** @deprecated UpsellingKit has moved to @/sds/UpsellingKit. Import from there instead. */
export * from "../sds/UpsellingKit/exports"

// src/experimental/exports.ts
/** @deprecated Banners has moved to @/sds/ai/Banners. Import from there instead. */
export * from "../sds/ai/Banners/exports"

// src/ai/exports.ts
/**
 * @deprecated This path is deprecated. Import from '@factorial/f0/sds/ai' instead.
 * This re-export will be removed in a future version.
 */
export * from "../sds/ai/exports"
```
