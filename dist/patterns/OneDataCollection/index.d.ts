import { ReactElement } from 'react';
import { FiltersDefinition, RecordType, SortingsDefinition } from '../../hooks/datasource';
import { WithDataTestIdProps } from '../../lib/data-testid';
import { ItemActionsDefinition } from './item-actions';
import { NavigationFiltersDefinition } from './navigationFilters/types';
import { OneDataCollectionProps } from './OneDatacollection';
import { SummariesDefinition } from './summary';
import { GroupingDefinition } from './types';
export * from './navigationFilters/types';
export * from './OneDatacollection';
/**
 * Generic component type so consumers can use <OneDataCollection<T, R> />.
 * Preserves dataTestId and OneDataCollection
 */
type OneDataCollectionGeneric = <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: OneDataCollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & WithDataTestIdProps) => ReactElement | null;
export declare const OneDataCollection: OneDataCollectionGeneric;
