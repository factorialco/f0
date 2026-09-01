import { default as React } from 'react';
import { VisualizationSettings } from './visualizationSettings';
export type { VisualizationSettings } from './visualizationSettings';
export type DataCollectionSettings = {
    visualization: VisualizationSettings;
};
export interface DataCollectionSettingsContextType {
    setSettings: React.Dispatch<React.SetStateAction<DataCollectionSettings>>;
    settings: DataCollectionSettings;
    setVisualizationSettings: (key: keyof VisualizationSettings, settings: VisualizationSettings[keyof VisualizationSettings] | ((prev: VisualizationSettings[keyof VisualizationSettings]) => VisualizationSettings[keyof VisualizationSettings])) => void;
}
export declare const useDataCollectionSettings: () => DataCollectionSettingsContextType;
export declare const DataCollectionSettingsProvider: ({ children, }: {
    children: React.ReactNode;
}) => React.JSX.Element;
