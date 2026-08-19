# Migrating from `OneFilterPicker` to `F0FilterPicker`

**Status:** deprecated in `v6.42.0` · removed in `v7.0.0` (no earlier than 90 days after deprecation)
**Owner:** `@factorialco/foundations` · questions in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403)

## What changed, in one line

> `OneFilterPicker` is renamed to `F0FilterPicker`. Same component, same props, same behavior — only the name changes, so that it satisfies the F0 naming convention the stable Definition of Done checks.

Nothing breaks on upgrade: `OneFilterPicker` still resolves, as a deprecated alias of `F0FilterPicker`, until `v7.0.0`.

## Finding every usage

```bash
# imports
rg "OneFilterPicker" frontend/src -l
# JSX call sites
rg "<OneFilterPicker" frontend/src --type tsx -l
# the props type, if referenced directly
rg "OneFilterPickerRootProps" frontend/src -l
```

At the time of writing, Factorial's frontend has 48 files importing the name and
30 JSX call sites.

## Mapping: `OneFilterPicker` → `F0FilterPicker`

| `OneFilterPicker`                                         | `F0FilterPicker`                                         |
| --------------------------------------------------------- | -------------------------------------------------------- |
| `import { OneFilterPicker } from "@factorialco/f0-react"` | `import { F0FilterPicker } from "@factorialco/f0-react"` |
| `<OneFilterPicker … />`                                   | `<F0FilterPicker … />`                                   |
| `OneFilterPickerRootProps<Definition>`                    | `F0FilterPickerRootProps<Definition>`                    |

No prop, type, or behavior changes. `FiltersDefinition`, `FiltersState`,
`PresetsDefinition`, and every `*FilterDefinition` type keep their names.

## Step by step

1. Update the import.

   ```tsx
   // before
   import { OneFilterPicker, FiltersDefinition } from "@factorialco/f0-react"
   // after
   import { F0FilterPicker, FiltersDefinition } from "@factorialco/f0-react"
   ```

2. Rename the JSX call sites.

   ```tsx
   // before
   <OneFilterPicker value={filters} filters={definition} onChange={setFilters} />
   // after
   <F0FilterPicker value={filters} filters={definition} onChange={setFilters} />
   ```

3. Rename `OneFilterPickerRootProps` if you reference the props type directly.

## Codemod

The rename is mechanical, so a find-and-replace over the two identifiers is
enough. There is no published `@factorialco/f0-codemod` package yet, so run it
with `sed`, after checking the diff:

```bash
rg -l "OneFilterPicker" frontend/src | xargs sed -i '' 's/OneFilterPicker/F0FilterPicker/g'
```

That single substitution also covers `OneFilterPickerRootProps`, since the old
name is a prefix of it. Review the diff before committing: the pattern is
specific enough that false positives are unlikely, but it does not know about
strings or comments.

## Running the migration at scale

To migrate many usages across a product, run the **`factorial-migrations`** skill
with this guide as the plan. It finds every usage with the patterns above, groups
files that share a backend resource, and dispatches one subagent per independent
unit.

## Verify

- [ ] `rg "OneFilterPicker" frontend/src` returns nothing.
- [ ] Type check passes (the props type rename is caught here if missed).
- [ ] Filter surfaces render and apply as before: chips, presets, Clear.
- [ ] Tests updated and green.

## Timeline

- **`v6.42.0`** — `F0FilterPicker` ships; `OneFilterPicker` marked `@deprecated`
  (the IDE warning points here).
- **`v7.0.0`** — `OneFilterPicker` removed. Migrate before upgrading past this
  version.

## Questions

Ask in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403) — tag the owner above.
