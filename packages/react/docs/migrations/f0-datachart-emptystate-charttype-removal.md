# Migrating off `chartType` on the F0DataChart empty state

**Status:** deprecated in `v4.72.1` · removed in `v5.0.0` (no earlier than 90 days after deprecation)
**Owner:** `@factorialco/f0-devs` · questions in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403)

## What changed, in one line

> The `F0DataChart` empty state renders text only, so `chartType` — which
> selected the faded per-chart-type skeleton drawn behind the message — no
> longer affects anything and is deprecated on both `DataChartEmptyStateView`
> and `DataChartEmptyState`.

## Finding every usage

```bash
# JSX call sites that still pass the prop
rg "<DataChartEmptyStateView" frontend/src -l
rg "<DataChartEmptyState" frontend/src -l
# the prop itself, if it is threaded through a wrapper
rg "chartType" frontend/src -l
```

## Mapping

| Before                                                        | After                                        |
| ------------------------------------------------------------- | -------------------------------------------- |
| `<DataChartEmptyStateView chartType={type} emptyState={…} />` | `<DataChartEmptyStateView emptyState={…} />` |
| `<DataChartEmptyState chartType={type} content={…} />`        | `<DataChartEmptyState content={…} />`        |
| `chartType`                                                   | removed — no replacement                     |

## Step by step

1. Delete the `chartType` prop from the call site.

   ```tsx
   // before
   <DataChartEmptyStateView chartType="bar" emptyState={emptyState} />
   // after
   <DataChartEmptyStateView emptyState={emptyState} />
   ```

2. Drop any state, memo, or prop that existed only to compute the value passed
   to `chartType`.

There is no codemod — the change is a prop deletion with no replacement, so
step 1 is the whole migration.

## Verify

- [ ] Re-run the find patterns — zero results for `chartType` on these two components.
- [ ] Empty charts still render the centered "No data available" message.
- [ ] Tests updated and green.

## Timeline

- **`v4.72.1`** — empty state becomes text-only; `chartType` marked `@deprecated`
  and ignored at runtime (passing it is harmless).
- **`v5.0.0`** — `chartType` removed from both prop types. Migrate before
  upgrading past this version.

## Questions

Ask in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403) — tag the owner above.
