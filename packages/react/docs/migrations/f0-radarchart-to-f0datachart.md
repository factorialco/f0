# Migrating from `RadarChart` to `F0DataChart`

**Status:** deprecated in `v6.89.0` · removed in `v7.0.0` (no earlier than 90 days after deprecation)
**Owner:** `@factorialco/f0-devs` · questions in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403)

## What changed, in one line

> `RadarChart` — the last tagged component of the deprecated recharts-based `kits/Charts` kit — is replaced by `F0DataChart` with `type="radar"`, the echarts-based chart the rest of F0 already runs on.

## Finding every usage

```bash
# imports (main entry and the deprecated experimental entry)
rg "\bRadarChart\b" frontend/src -l
rg "RadarChartProps" frontend/src -l
# JSX call sites
rg "<RadarChart" frontend/src -l
```

`RadarChart` is exported from both `@factorialco/f0-react` and
`@factorialco/f0-react/dist/experimental`, so check imports from both.

Do not confuse it with `F0DataChart`'s own radar: a file already importing
`F0DataChart` and passing `type="radar"` is on the new surface and needs nothing.

## Mapping: `RadarChart` → `F0DataChart`

The two components model radar data along opposite axes. `RadarChart` keys values
**by series** inside each row (`data[].values[seriesKey]`); `F0DataChart` keys them
**by axis position** (`indicators[]` in order, each series carrying a parallel
`data: number[]`). Transposing that structure is the bulk of the migration.

| `RadarChart`                                         | `F0DataChart`                                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `import { RadarChart } from "@factorialco/f0-react"` | `import { F0DataChart } from "@factorialco/f0-react"`                             |
| `<RadarChart … />`                                   | `<F0DataChart type="radar" … />`                                                  |
| `dataConfig: { alice: { label: "Alice" } }`          | `series: [{ name: "Alice", data: [...] }]`                                        |
| `data: [{ label: "Communication", values: { … } }]`  | `indicators: [{ name: "Communication" }]`                                         |
| `data[i].values[key]`                                | `series[key].data[i]` (same index as the indicator)                               |
| `dataConfig[key].color`                              | `series[n].color` — must be a `ChartColorToken`                                   |
| `scaleMax`                                           | `indicators[n].max` (per axis, not global)                                        |
| `scaleMin`                                           | **removed** — radar axes always start at 0                                        |
| `aspect`                                             | **removed** — size the chart through its container                                |
| `defaultHiddenSeries`                                | **removed** — the legend starts fully visible                                     |
| —                                                    | `onLegendSelectionChange` reports live legend state (read-only)                   |
| —                                                    | `showArea`, `showLegend`, `showLabels`, `valueFormatter`, `tooltipValueFormatter` |

Types: `F0DataChartRadarProps`, `F0DataChartRadarIndicator`, `F0DataChartRadarSeries`
in `src/kits/F0DataChart/types.ts`. Live examples: Storybook → `F0DataChart/Radar`.

## Step by step

1. Swap the import and add `type="radar"`.
2. Transpose the data. Every key of `dataConfig` becomes one entry in `series`; every
   row of `data` becomes one entry in `indicators`, and its `values` are distributed
   into the series arrays at that row's index.

   ```tsx
   // before
   <RadarChart
     dataConfig={{ alice: { label: "Alice" }, bob: { label: "Bob" } }}
     data={[
       { label: "Communication", values: { alice: 80, bob: 65 } },
       { label: "Technical", values: { alice: 95, bob: 88 } },
     ]}
     scaleMax={100}
   />

   // after
   <F0DataChart
     type="radar"
     indicators={[
       { name: "Communication", max: 100 },
       { name: "Technical", max: 100 },
     ]}
     series={[
       { name: "Alice", data: [80, 95] },
       { name: "Bob", data: [65, 88] },
     ]}
   />
   ```

   The order of `series[n].data` must match the order of `indicators` exactly.
   A misaligned array is silently wrong, not a type error — this is the step to
   review by hand.

3. Replace `scaleMax` with a `max` on each indicator. Drop `scaleMin`: if your chart
   relied on a non-zero floor to spread values apart, the new chart will look flatter,
   and you should decide whether to rescale the data instead.
4. Drop `aspect` and size the chart from its wrapper.
5. Drop `defaultHiddenSeries`. If a series was hidden by default to reduce noise, either
   omit it from `series` or let the reader hide it with the legend.
6. Convert any `dataConfig[key].color` to `series[n].color`. The new prop only accepts
   F0 chart color tokens — a raw hex or CSS color will not type-check.

## Codemod (if available)

None. The transpose in step 2 and the three dropped props (`scaleMin`, `aspect`,
`defaultHiddenSeries`) each need a judgment call about how the chart should read,
so this migration is deliberately manual.

## Running the migration at scale

To migrate many usages across a product, don't do it by hand — run the
**`factorial-migrations`** skill with this guide as the plan. It will find every usage
(patterns above), group files that share a backend resource, and dispatch one subagent
per independent unit. For F0 component conventions the subagents follow, they also load
the **`factorial-f0`** skill.

## Verify

- [ ] All affected files migrated (re-run the find patterns — zero results for `RadarChart`).
- [ ] Each series' `data` array is aligned with `indicators`, index by index.
- [ ] Charts that used `scaleMin` still read correctly starting from 0.
- [ ] Colors resolve — no raw hex left in `series[n].color`.
- [ ] Tests and visual snapshots updated and green.

## Timeline

- **`v6.89.0`** — `RadarChart` marked `@deprecated` (IDE warning points here). `F0DataChart` already ships.
- **`v7.0.0`** — `RadarChart` and the rest of the `kits/Charts` kit removed. Migrate before upgrading past this version.

## Questions

Ask in [#f0-support](https://factorialteam.slack.com/archives/C082ZNKS403) — tag the owner above.
