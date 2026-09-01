import { IconType } from '../../../../components/F0Icon';
import { FiltersDefinition } from '../../../OneFilterPicker';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
import { DataCollectionSettingsContextType } from '../../Settings/SettingsProvider';
import { SummariesDefinition } from '../../types';
import { CardCollectionProps } from './Card';
import { EditableTableCollectionProps } from './EditableTable';
import { EditableTableVisualizationSettings } from './EditableTable/types';
import { GraphCollectionProps } from './Graph';
import { GraphVisualizationSettings } from './Graph/settings/SettingsRenderer';
import { KanbanCollectionProps } from './Kanban';
import { ListCollectionProps } from './List';
import { TableCollectionProps, TableVisualizationSettings } from './Table';
export type VisualizacionTypeDefinition<Props, Settings = Record<string, never>> = {
    render: (props: Props) => JSX.Element;
    name: string;
    icon: IconType;
    settings: {
        default: Settings;
        renderer?: (props: Props) => JSX.Element | null;
        resetHandler?: (settings: DataCollectionSettingsContextType) => void;
    };
};
type CollectionVisualizations<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    table: VisualizacionTypeDefinition<TableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, TableVisualizationSettings>;
    editableTable: VisualizacionTypeDefinition<EditableTableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, EditableTableVisualizationSettings>;
    list: VisualizacionTypeDefinition<ListCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    card: VisualizacionTypeDefinition<CardCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    kanban: VisualizacionTypeDefinition<KanbanCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    graph: VisualizacionTypeDefinition<GraphCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, GraphVisualizationSettings>;
};
export declare const collectionVisualizations: CollectionVisualizations<RecordType, FiltersDefinition, SortingsDefinition, SummariesDefinition, ItemActionsDefinition<RecordType>, NavigationFiltersDefinition, GroupingDefinition<RecordType>>;
export {};
