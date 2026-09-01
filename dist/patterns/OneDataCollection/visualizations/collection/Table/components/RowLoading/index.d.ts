import { DataCollectionSource } from '../../../../../hooks/useDataCollectionSource';
import { ItemActionsDefinition } from '../../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../../summary';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../../hooks/datasource';
import { ChildrenPaginationInfo } from '../../../../../../../hooks/datasource/types/nested.typings';
import { RowProps } from '../Row';
export declare const DEFAULT_LOADING_ROWS_COUNT = 5;
export declare const RowLoading: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    rowRef: React.RefObject<HTMLTableRowElement>;
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    paginationInfo?: ChildrenPaginationInfo;
} & {
    ref?: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null;
    shouldHideBorder?: boolean;
}) => JSX.Element;
