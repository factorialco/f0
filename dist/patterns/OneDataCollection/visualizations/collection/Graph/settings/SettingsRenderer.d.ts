import { RecordType } from '../../../../../../hooks/datasource';
import { SortingsDefinition } from '../../../../../../hooks/datasource/types/sortings.typings';
import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { GraphVisualizationOptions } from '../types';
export declare const SettingsRenderer: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition>(props: Readonly<GraphVisualizationOptions<R, Filters, Sortings>>) => import("react").JSX.Element | null;
