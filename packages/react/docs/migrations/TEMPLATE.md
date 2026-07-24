<!--
  Migration guide template.

  Copy this file to docs/migrations/f0-<old>-to-<new>.md, fill every section,
  and link it from the @migration JSDoc tag on the deprecated export.

  This guide IS the "migration plan" that the `factorial-migrations` skill
  consumes to migrate usages across a product: it discovers every usage, groups
  them by shared backend, and dispatches parallel migration units from the
  mapping tables below. So the more precise the mapping and the find-patterns,
  the more of the migration can be automated. Model it on the shipped example:
  `factorial-migrations/references/f0-forms-mapping.md`.

  See "Changing something already in use" in Release & Versioning for when a
  guide is required and who reviews it.
-->

# Migrating from `<OldName>` to `<NewName>`

**Status:** deprecated in `vX.Y.0` · removed in `v<major>.0.0` (no earlier than 90 days after deprecation)
**Owner:** `@factorialco/<team>` · questions in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403)

## What changed, in one line

> e.g. "`F0OldInput` is replaced by `F0TextInput`, which unifies text/number/password inputs under one API."

## Finding every usage

The patterns a migrator (or the `factorial-migrations` skill) uses to locate every affected file:

```bash
# imports
rg "from '.*<OldName>'" frontend/src --type ts --type tsx -l
# JSX / call sites
rg "<OldName" frontend/src --type tsx -l
# token / class references, if applicable
rg "<--f1-old-token>" frontend/src -l
```

_Optional — module-by-module priority so the migration can be sequenced (highest usage first):_

| Module | Usages | Priority |
| ------ | ------ | -------- |
| …      | …      | High     |

## Mapping: `<OldName>` → `<NewName>`

The heart of the guide. One row per import, prop, token, or method that changes. This table is what makes the migration mechanical.

| `<OldName>`                          | `<NewName>`                          |
| ------------------------------------ | ------------------------------------ |
| `import { F0OldName } from "@factorialco/f0"` | `import { F0NewName } from "@factorialco/f0"` |
| `<F0OldName variant="x" />`          | `<F0NewName kind="x" />`             |
| `oldProp`                            | `newProp` (or "removed — use …")     |
| `--f1-old-token`                     | `--f1-new-token`                     |

## Step by step

1. Update the import (see mapping).
2. Rename the changed props / tokens.

   ```tsx
   // before
   <F0OldName variant="primary" onlyIcon />
   // after
   <F0NewName kind="primary" iconOnly />
   ```

3. Re-check any custom styling or logic that referenced the old surface.

## Codemod (if available)

```bash
npx @factorialco/f0-codemod f0-<old>-to-<new> src/
```

> Provide a codemod when the change is mechanical (renames, prop moves). If it needs human judgment, say so and rely on the steps above + the mapping.

## Running the migration at scale

To migrate many usages across a product, don't do it by hand — run the **`factorial-migrations`** skill with this guide as the plan. It will find every usage (patterns above), group files that share a backend resource, and dispatch one subagent per independent unit. For F0 Forms / component conventions the subagents follow, they also load the **`factorial-f0`** skill.

## Verify

- [ ] All affected files migrated (re-run the find patterns — zero results for the old surface).
- [ ] Behavior unchanged: props, validation, states render as before.
- [ ] Server/error messages land on the right fields (for forms).
- [ ] Tests updated and green.

## Timeline

- **`vX.Y.0`** — `<NewName>` ships; `<OldName>` marked `@deprecated` (IDE warning points here).
- **`v<major>.0.0`** — `<OldName>` removed. Migrate before upgrading past this version.

## Questions

Ask in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403) — tag the owner above.
