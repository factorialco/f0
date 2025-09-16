import { IconType } from "../../../../components/F0Icon"
import type { FiltersDefinition } from "../../../../components/OneFilterPicker/types"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SortingsDefinition } from "../../sortings"
import { SummariesDefinition } from "../../summary"
import type {
  DataSource,
  GroupingDefinition,
  OnLoadDataCallback,
  OnLoadErrorCallback,
  OnSelectItemsCallback,
  RecordType,
} from "../../types"
import type { CardVisualizationOptions } from "./Card"
import type { KanbanVisualizationOptions } from "./Kanban"
import { ListVisualizationOptions } from "./List/types"
import type { TableVisualizationOptions } from "./Table"

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
export type Visualization<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> =
  | {
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<Record, Filters, Sortings>
    }
  | {
      /** Kanban-based visualization type */
      type: "kanban"
      /** Configuration options for kanban visualization */
      options: KanbanVisualizationOptions<Record, Filters, Sortings>
    }
  | {
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<Record, Filters, Sortings, Summaries>
    }
  | {
      /** List-based visualization type */
      type: "list"
      /** Configuration options for list visualization */
      options: ListVisualizationOptions<Record, Filters, Sortings>
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
        onSelectItems: OnSelectItemsCallback<Record, Filters>
        onLoadData: OnLoadDataCallback<Record, Filters>
        onLoadError: OnLoadErrorCallback
        source: DataSource<
          Record,
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
