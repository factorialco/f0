export interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
    hideTooltip?: boolean;
}
export declare const CategoryBarChart: (props: CategoryBarProps & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
