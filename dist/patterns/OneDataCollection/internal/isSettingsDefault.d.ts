import { DataCollectionSettings } from '../Settings/SettingsProvider';
/**
 * Builds the default `DataCollectionSettings` from the visualization registry —
 * the same shape produced by the settings provider on first mount. Used both as
 * the reset target and as the baseline for dirty detection.
 */
export declare const getDefaultDataCollectionSettings: () => DataCollectionSettings;
/**
 * Whether the settings for a single visualization match its registry default.
 * Mirrors the per-visualization comparison previously inlined in `Settings`.
 */
export declare const isVisualizationSettingsDefault: (settings: DataCollectionSettings, visualizationType: string | undefined) => boolean;
/**
 * Whether the whole settings object matches the registry defaults across every
 * visualization. Used for dirty detection against the baseline.
 */
export declare const isSettingsDefault: (settings: DataCollectionSettings) => boolean;
