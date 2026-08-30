import { F0DataChartProps } from '../../types';
export interface DataChartEmptyStateProps {
    /** Headline text — the prominent message the user reads first. */
    content: string;
    /** Optional supporting copy shown below the headline. */
    description?: string;
    /**
     * @deprecated No longer used — the empty state renders text only. Remove the prop.
     * @removeIn 5.0.0
     * @migration https://github.com/factorialco/f0/blob/main/packages/react/docs/migrations/f0-datachart-emptystate-charttype-removal.md
     */
    chartType?: F0DataChartProps["type"];
}
export declare const DataChartEmptyState: import('../../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<DataChartEmptyStateProps & import('react').RefAttributes<HTMLDivElement>>>;
