import { DataCollectionStorageFeaturesDefinition } from './types';
/**
 * Calculate the features to use for the data collection storage
 * @param features
 * @returns
 */
export declare const getFeatures: (features: DataCollectionStorageFeaturesDefinition | undefined) => ("search" | "filters" | "grouping" | "visualization" | "sortings" | "navigationFilters" | "visualizationFilters")[];
