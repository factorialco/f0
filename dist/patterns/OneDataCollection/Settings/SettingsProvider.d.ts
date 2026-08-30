import { default as React } from 'react';
import { EditableTableVisualizationSettings } from '../visualizations/collection/EditableTable/types';
import { GraphVisualizationSettings } from '../visualizations/collection/Graph/types';
import { TableVisualizationSettings } from '../visualizations/collection/Table/types';
export type VisualizationSettings = {
    table: TableVisualizationSettings;
    editableTable: EditableTableVisualizationSettings;
    list: Record<string, never>;
    card: Record<string, never>;
    kanban: Record<string, never>;
    graph: GraphVisualizationSettings;
};
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
