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
import type { GraphVisualizationOptions } from "./Graph/types"
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
export type VisualizationFilterOverrides<
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
> = {
  /** Override which filters are available when this visualization is active.
   *  If not provided, the global source filters are used.
   *  Can be a subset of the source filters definition. */
  filters?: Partial<Filters>
  /** Preset configuration used only when this visualization is active.
   *  These replace the global source presets for this visualization. */
  presets?: PresetsDefinition<Filters>
  /** Override which sortings are available when this visualization is active.
   *  If not provided, the global source sortings are used. Pass `{}` to hide the
   *  sort selector for views that don't support sorting (e.g. the org chart). */
  sortings?: Partial<Sortings>
}

/**
 * Optional per-visualization label override for built-in visualization types.
 * When omitted, the localized built-in label from
 * `i18n.collections.visualizations[type]` (e.g. "Table", "Graph") is used.
 *
 * Lets consumers rename the view switcher chip per instance, e.g. show "Org chart"
 * instead of "Graph" for employees, or "Teams" instead of "Table". The icon still
 * comes from the built-in registry for the visualization type.
 */
export type VisualizationLabelOverrides = {
  /** Custom label shown in the view switcher chip and Settings selector.
   *  Defaults to the localized built-in label for this visualization type. */
  label?: string
}

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
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
  | ({
      /** Kanban-based visualization type */
      type: "kanban"
      /** Configuration options for kanban visualization */
      options: KanbanVisualizationOptions<R, Filters, Sortings>
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
  | ({
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<R, Filters, Sortings, Summaries>
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
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
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
  | ({
      /** List-based visualization type */
      type: "list"
      /** Configuration options for list visualization */
      options: ListVisualizationOptions<R, Filters, Sortings>
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
  | ({
      /** Graph/org-chart-based visualization type */
      type: "graph"
      /** Configuration options for graph visualization */
      options: GraphVisualizationOptions<R, Filters, Sortings>
    } & VisualizationFilterOverrides<Filters, Sortings> &
      VisualizationLabelOverrides)
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
    } & VisualizationFilterOverrides<Filters, Sortings>)

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
