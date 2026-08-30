import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource/types';
import { GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { ListPropertyDefinition } from '../types';
type ListSkeletonProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
    count?: number;
    isInitialLoading?: boolean;
    className?: string;
};
/**
 * List Skeleton: Renders skeleton items for loading states
 */
export declare const ListSkeleton: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ source, fields, count, isInitialLoading, className, }: ListSkeletonProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => import("react").JSX.Element;
export {};
