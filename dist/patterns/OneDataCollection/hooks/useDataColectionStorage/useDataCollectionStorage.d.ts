import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
import { DataCollectionStorageFeaturesDefinition, FeatureProviders } from './types';
type UseDataCollectionStorage = {
    storageReady: boolean;
};
/**
 * Gets and sets the data collection settings in storage
 * @param key - The storage key
 * @param featuresDef - The features definition
 * @param settings - The settings
 * @returns The settings in storage and the settings storage ready
 */
export declare const useDataCollectionStorage: <R extends RecordType, Grouping extends GroupingDefinition<R>, Sortings extends SortingsDefinition, Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition>(key: string | undefined, featuresDef: DataCollectionStorageFeaturesDefinition, featureProviders: FeatureProviders<R, Grouping, Sortings, Filters, NavigationFilters>, disabled?: boolean) => UseDataCollectionStorage;
export {};
