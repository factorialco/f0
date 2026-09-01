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
export declare const createInitialVisualizationSettings: () => VisualizationSettings;
