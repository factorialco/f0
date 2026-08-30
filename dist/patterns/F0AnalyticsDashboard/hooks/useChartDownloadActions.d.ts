import { RefObject } from 'react';
import { DropdownItem } from '../../../experimental/Navigation/Dropdown';
import { DashboardChartConfig, DashboardChartData } from '../types';
interface UseChartDownloadActionsOptions {
    chartContainerRef: RefObject<HTMLDivElement | null>;
    chartConfig: DashboardChartConfig;
    data: DashboardChartData | undefined;
    title: string;
}
export declare function useChartDownloadActions({ chartContainerRef, chartConfig, data, title, }: UseChartDownloadActionsOptions): DropdownItem[];
export {};
