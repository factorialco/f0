import { assertType } from "vitest"

import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"

import type { DataCollectionSource } from "../hooks/useDataCollectionSource/types"
import type { ItemActionsDefinition } from "../item-actions"
import type { NavigationFiltersDefinition } from "../navigationFilters/types"
import type { SummariesDefinition } from "../summary"
import type { GroupingDefinition } from "../types"
import type { Visualization } from "../visualizations/collection/types"
import type { GraphVisualizationOptions } from "../visualizations/collection/Graph"
import type { TableVisualizationOptions } from "../visualizations/collection/Table"

/**
 * Type-level mutex tests for `VisualizationOverrides`.
 *
 * The discriminated union forbids combining a per-viz `source` with per-viz
 * `filters` or `presets` on the same visualization entry. We assert both
 * positive shapes (each branch alone compiles) and negative shapes (mixing
 * branches fails to compile, asserted via `@ts-expect-error`).
 *
 * Covered for both `type: "graph"` and `type: "table"` per spec.
 */

type Person = { id: string; name: string }

type Filters = FiltersDefinition
type Sortings = SortingsDefinition
type Summaries = SummariesDefinition
type Actions = ItemActionsDefinition<Person>
type NavFilters = NavigationFiltersDefinition
type Grouping = GroupingDefinition<Person>

type PersonViz = Visualization<
  Person,
  Filters,
  Sortings,
  Summaries,
  Actions,
  NavFilters,
  Grouping
>

type PersonSource = DataCollectionSource<
  Person,
  Filters,
  Sortings,
  Summaries,
  Actions,
  NavFilters,
  Grouping
>

// Placeholder values — we only care about type-level shape compatibility.
const overrideSource = {} as PersonSource
const tableOptions = {} as TableVisualizationOptions<
  Person,
  Filters,
  Sortings,
  Summaries
>
const graphOptions = {} as GraphVisualizationOptions<Person, Filters, Sortings>

test("graph viz — `source` alone is valid", () => {
  assertType<PersonViz>({
    type: "graph",
    options: graphOptions,
    source: overrideSource,
  })
})

test("graph viz — `filters` alone is valid", () => {
  assertType<PersonViz>({
    type: "graph",
    options: graphOptions,
    filters: {},
  })
})

test("graph viz — `presets` alone is valid", () => {
  assertType<PersonViz>({
    type: "graph",
    options: graphOptions,
    presets: [],
  })
})

test("graph viz — `source` + `filters` is rejected (mutex)", () => {
  assertType<PersonViz>({
    type: "graph",
    options: graphOptions,
    // @ts-expect-error — `source` cannot be combined with `filters` (mutex)
    source: overrideSource,
    filters: {},
  })
})

test("graph viz — `source` + `presets` is rejected (mutex)", () => {
  assertType<PersonViz>({
    type: "graph",
    options: graphOptions,
    // @ts-expect-error — `source` cannot be combined with `presets` (mutex)
    source: overrideSource,
    presets: [],
  })
})

test("table viz — `source` alone is valid", () => {
  assertType<PersonViz>({
    type: "table",
    options: tableOptions,
    source: overrideSource,
  })
})

test("table viz — `filters` alone is valid", () => {
  assertType<PersonViz>({
    type: "table",
    options: tableOptions,
    filters: {},
  })
})

test("table viz — `presets` alone is valid", () => {
  assertType<PersonViz>({
    type: "table",
    options: tableOptions,
    presets: [],
  })
})

test("table viz — `source` + `filters` is rejected (mutex)", () => {
  assertType<PersonViz>({
    type: "table",
    options: tableOptions,
    // @ts-expect-error — `source` cannot be combined with `filters` (mutex)
    source: overrideSource,
    filters: {},
  })
})

test("table viz — `source` + `presets` is rejected (mutex)", () => {
  assertType<PersonViz>({
    type: "table",
    options: tableOptions,
    // @ts-expect-error — `source` cannot be combined with `presets` (mutex)
    source: overrideSource,
    presets: [],
  })
})
