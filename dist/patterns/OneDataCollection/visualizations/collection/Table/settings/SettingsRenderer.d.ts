import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { SummariesDefinition } from '../../../../summary';
import { RecordType } from '../../../../../../hooks/datasource';
import { SortingsDefinition } from '../../../../../../hooks/datasource/types/sortings.typings';
import { TableVisualizationSettingsKey } from '../components/TableSettings';
import { TableVisualizationOptions } from '../types';
export declare const SettingsRenderer: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition>(props: Readonly<TableVisualizationOptions<R, Filters, Sortings, Summaries>> & {
    visualizationKey?: TableVisualizationSettingsKey;
}) => import("react").JSX.Element | null;
