import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../hooks/datasource';
import { TableCustomizationProps, TableVisualizationOptions } from './types';
import { ItemActionsDefinition } from '../../../item-actions';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { SummariesDefinition } from '../../../summary';
import { CollectionProps } from '../../../types';
export * from './settings/SettingsRenderer';
export declare const TableCollection: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ columns: originalColumns, source, frozenColumns, defaultExpanded, onSelectItems, onLoadData, onLoadError, allowColumnHiding, allowColumnReordering, lockedColumnIds, onLockedColumnIdsChange, referenceRowType, boldRootRows, headerGroups: headerGroupsOption, onHeaderGroupCollapsedChange, bordered, rowWrapper: RowWrapper, cellRenderer, showItemActions: showItemActionsProp, visualizationSettings, fromVisualization, summaryPlaceholder, }: CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, TableVisualizationOptions<R, Filters, Sortings, Summaries>> & TableCustomizationProps<R, Sortings, Summaries>) => import("react").JSX.Element;
