import { IconType } from "@/components/F0Icon"
import { FiltersDefinition } from "@/components/OneFilterPicker"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { Kanban, List, Table } from "@/icons/app"

import { DataCollectionSettingsContextType } from "../../Settings/SettingsProvider"
import { SummariesDefinition } from "../../types"
import { CardCollection, CardCollectionProps } from "./Card"
import { KanbanCollection, KanbanCollectionProps } from "./Kanban"
import { ListCollection, ListCollectionProps } from "./List"
import {
  handleTableResetSettings,
  TableCollection,
  TableCollectionProps,
  SettingsRenderer as tableSettingsRenderer,
  TableVisualizationSettings,
} from "./Table"

export type VisualizacionTypeDefinition<
  Props,
  Settings = Record<string, never>,
> = {
  render: (props: Props) => JSX.Element
  name: string
  icon: IconType
  settings: {
    default: Settings
    renderer?: (props: Props) => JSX.Element | null
    resetHandler?: (settings: DataCollectionSettingsContextType) => void
  }
}

type CollectionVisualizations<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  table: VisualizacionTypeDefinition<
    TableCollectionProps<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >,
    TableVisualizationSettings
  >
  list: VisualizacionTypeDefinition<
    ListCollectionProps<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  card: VisualizacionTypeDefinition<
    CardCollectionProps<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  kanban: VisualizacionTypeDefinition<
    KanbanCollectionProps<
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

export const collectionVisualizations: CollectionVisualizations<
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<RecordType>,
  NavigationFiltersDefinition,
  GroupingDefinition<RecordType>
> = {
  table: {
    name: "Table",
    icon: Table,
    render: <
      R extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      Summaries extends SummariesDefinition,
      ItemActions extends ItemActionsDefinition<R>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<R>,
    >(
      props: TableCollectionProps<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <TableCollection<
          R,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
    settings: {
      renderer: tableSettingsRenderer,
      resetHandler: handleTableResetSettings,
      default: {},
    },
  },
  list: {
    name: "List",
    icon: List,
    settings: {
      default: {},
    },
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      Summaries extends SummariesDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: ListCollectionProps<
        Record,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <ListCollection<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
  card: {
    name: "Card",
    icon: Kanban,
    settings: {
      default: {},
    },
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      Summaries extends SummariesDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: CardCollectionProps<
        Record,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <CardCollection<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
  kanban: {
    name: "Kanban",
    icon: Kanban,
    settings: {
      default: {},
    },
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      Summaries extends SummariesDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: KanbanCollectionProps<
        Record,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <KanbanCollection<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
}
