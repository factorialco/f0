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
import { SummariesDefinition } from "../../types"
import { CardCollection, CardCollectionProps } from "./Card"
import { KanbanCollection, KanbanCollectionProps } from "./Kanban"
import { ListCollection, ListCollectionProps } from "./List"
import {
  TableCollection,
  TableCollectionProps,
  settings as tableSettings,
} from "./Table"

export type VisualizacionTypeDefinition<Props> = {
  render: (props: Props) => JSX.Element
  renderSettings?: (props: Props) => JSX.Element
  name: string
  icon: IconType
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
    >
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
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      Summaries extends SummariesDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: TableCollectionProps<
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
        <TableCollection<
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
    renderSettings: tableSettings,
  },
  list: {
    name: "List",
    icon: List,
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
