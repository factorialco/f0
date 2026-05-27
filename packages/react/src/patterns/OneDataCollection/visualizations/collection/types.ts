import type {
  FiltersDefinition,
  PresetsDefinition,
} from "@/patterns/OneFilterPicker/types"

import { IconType } from "@/components/F0Icon"
import { OnSelectItemsCallback, RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"

import type { DataCollectionDataAdapter } from "../../hooks/useDataCollectionSource/types"
import type {
  GroupingDefinition,
  OnLoadDataCallback,
  OnLoadErrorCallback,
} from "../../types"
import type { CardVisualizationOptions } from "./Card"
import type { EditableTableVisualizationOptions } from "./EditableTable"
import type { GraphVisualizationOptions } from "./Graph"
import type { KanbanVisualizationOptions } from "./Kanban"
import type { TableVisualizationOptions } from "./Table"

import { DataCollectionSource } from "../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { ListVisualizationOptions } from "./List/types"

/**
 * Optional per-visualization filter and preset overrides.
 * When provided on a visualization, these override the global source filters/presets
 * for that specific view, and the view maintains its own independent filter state.
 *
 * @template Filters - The filters type extending FiltersDefinition
 */
export type VisualizationFilterOverrides<Filters extends FiltersDefinition> = {
  /** Override which filters are available when this visualization is active.
   *  If not provided, the global source filters are used.
   *  Can be a subset of the source filters definition. */
  filters?: Partial<Filters>
  /** Preset configuration used only when this visualization is active.
   *  These replace the global source presets for this visualization. */
  presets?: PresetsDefinition<Filters>
}

/**
 * Optional per-visualization data source override.
 *
 * When provided on a visualization, this completely replaces the collection's
 * top-level `source` while that visualization is active. The collection's
 * filter bar, search input, presets, CSV export, and bulk-action bar all
 * route to the override source instead.
 *
 * Mutually exclusive with `filters` / `presets` at the type level — a
 * visualization entry chooses one branch or the other. The filter branch
 * derives its rows from the top-level `source`; the source-override branch
 * supplies its own rows and is therefore incompatible with per-viz filter
 * overrides (those would have no source to apply against).
 *
 * @template R - The type of records produced by the override source
 * @template Filters - The filters definition the override source advertises
 * @template Sortings - The sortings definition the override source advertises
 * @template Summaries - The summaries definition the override source advertises
 * @template ItemActions - The item actions definition the override source advertises
 * @template NavigationFilters - The navigation filters definition the override source advertises
 * @template Grouping - The grouping definition the override source advertises
 */
export type VisualizationSourceOverride<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  /** Per-visualization data source override. When set, the collection chrome
   *  (filter bar, search, presets, CSV export, bulk-action bar) routes to
   *  this source while the visualization is active. */
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
}

/**
 * Per-visualization overrides — mutually exclusive union of:
 *
 *  - The **filter branch**: optional per-viz `filters` / `presets` that derive
 *    rows from the collection's top-level `source`. `source` is forbidden on
 *    this branch.
 *  - The **source-override branch**: a full per-viz `source` that replaces the
 *    top-level source while the viz is active. `filters` / `presets` are
 *    forbidden on this branch because they would have no source to apply
 *    against.
 *
 * Mutex is enforced at the type level via `never`, not at runtime.
 */
export type VisualizationOverrides<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> =
  | VisualizationFilterOverrides<Filters>
  | (VisualizationSourceOverride<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    > & { filters?: never; presets?: never })

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
export type Visualization<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> =
  | ({
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<R, Filters, Sortings>
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** Kanban-based visualization type */
      type: "kanban"
      /** Configuration options for kanban visualization */
      options: KanbanVisualizationOptions<R, Filters, Sortings>
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<R, Filters, Sortings, Summaries>
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** Editable table-based visualization type */
      type: "editableTable"
      /** Configuration options for editable table visualization */
      options: EditableTableVisualizationOptions<
        R,
        Filters,
        Sortings,
        Summaries
      >
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** List-based visualization type */
      type: "list"
      /** Configuration options for list visualization */
      options: ListVisualizationOptions<R, Filters, Sortings>
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** Graph-based visualization type */
      type: "graph"
      /** Configuration options for graph visualization */
      options: GraphVisualizationOptions<R, Filters, Sortings>
    } & VisualizationOverrides<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >)
  | ({
      /** Human-readable label for the visualization */
      label: string
      /** Icon to represent the visualization in UI */
      icon: IconType
      /** Custom visualization type */
      type: "custom"
      /** Custom component to render the visualization */
      component: (props: {
        onSelectItems: OnSelectItemsCallback<R, Filters>
        onLoadData: OnLoadDataCallback<R, Filters>
        onLoadError: OnLoadErrorCallback
        source: DataCollectionSource<
          R,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
      }) => JSX.Element
    } & VisualizationFilterOverrides<Filters>)

/**
 * Represents the type of visualization.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type VisualizationType = Visualization<
  any,
  any,
  any,
  any,
  any,
  any,
  any
>["type"]
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Props interface for components that support multiple visualizations.
 * Used to configure how data can be displayed in different formats.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 */
export type VisualizationProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Array of available visualization configurations */
  visualizations?: ReadonlyArray<
    Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
}

/**
 * Returns the custom visualization props based on the data collection source.
 *
 * @template Source - The data collection source
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

type InferRecord<S> = S extends {
  dataAdapter: DataCollectionDataAdapter<infer R, any, any>
}
  ? R
  : never

type InferFilters<S> = S extends {
  dataAdapter: DataCollectionDataAdapter<any, infer F, any>
}
  ? F
  : never

export type CustomVisualizationProps<
  Source extends { dataAdapter: DataCollectionDataAdapter<any, any, any> },
> = {
  onSelectItems: OnSelectItemsCallback<
    InferRecord<Source>,
    InferFilters<Source>
  >
  onLoadData: OnLoadDataCallback<InferRecord<Source>, InferFilters<Source>>
  onLoadError: OnLoadErrorCallback
  source: Source
}
/* eslint-enable @typescript-eslint/no-explicit-any */
