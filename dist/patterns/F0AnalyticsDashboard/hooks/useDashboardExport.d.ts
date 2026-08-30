import { FiltersDefinition, FiltersState } from '../../OneFilterPicker/types';
import { DashboardItem } from '../types';
interface UseDashboardExportOptions<Filters extends FiltersDefinition> {
    items: DashboardItem<Filters>[];
    filters: FiltersState<Filters>;
    filename?: string;
}
interface UseDashboardExportResult {
    exportAsExcel: () => Promise<void>;
    isExporting: boolean;
}
export declare function useDashboardExport<Filters extends FiltersDefinition>({ items, filters, filename, }: UseDashboardExportOptions<Filters>): UseDashboardExportResult;
export {};
