import { CardAvatarVariant } from "@/components/F0Card/components/CardAvatar"
import { CardMetadataProperty } from "@/components/F0Card/types"
import { IconType } from "@/components/F0Icon"
import { Variant } from "@/components/tags/F0TagStatus"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { KanbanOnCreate, KanbanOnMove } from "@/ui/Kanban/types"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { CollectionProps, SummariesDefinition } from "../../../types"

export type KanbanLaneDefinition = {
  id: string
  title: string
  variant?: Variant
}

export type KanbanVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  lanes: ReadonlyArray<KanbanLaneDefinition>
  title?: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => CardAvatarVariant
  metadata?: (
    record: Record
  ) => ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  onMove?: KanbanOnMove<Record>
  onCreate?: KanbanOnCreate
}

export type KanbanCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>
