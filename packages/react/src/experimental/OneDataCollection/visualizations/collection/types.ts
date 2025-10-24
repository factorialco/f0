import { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { OnSelectItemsCallback, RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import type { DataCollectionDataAdapter } from "../../hooks/useDataCollectionSource/types"
import { DataCollectionSource } from "../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import type {
  GroupingDefinition,
  OnLoadDataCallback,
  OnLoadErrorCallback,
} from "../../types"
import type { CardVisualizationOptions } from "./Card"
import type { KanbanVisualizationOptions } from "./Kanban"
import { ListVisualizationOptions } from "./List/types"
import type { TableVisualizationOptions } from "./Table"

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
  | {
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<R, Filters, Sortings>
    }
  | {
      /** Kanban-based visualization type */
      type: "kanban"
      /** Configuration options for kanban visualization */
      options: KanbanVisualizationOptions<R, Filters, Sortings>
    }
  | {
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<R, Filters, Sortings, Summaries>
    }
  | {
      /** List-based visualization type */
      type: "list"
      /** Configuration options for list visualization */
      options: ListVisualizationOptions<R, Filters, Sortings>
    }
  | {
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
    }

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
