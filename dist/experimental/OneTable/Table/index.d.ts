export interface TableProps {
    children: React.ReactNode;
    loading?: boolean;
    fixedHeader?: boolean;
}
declare function TableBase({ children, loading }: TableProps): import("react").JSX.Element;
interface TableSkeletonProps {
    /**
     * The number of columns to display in the skeleton loading state.
     * Each column will contain a loading placeholder.
     * @default 5
     */
    columns?: number;
}
declare function TableSkeleton({ columns }: TableSkeletonProps): import("react").JSX.Element;
export declare const OneTable: typeof TableBase & {
    Skeleton: typeof TableSkeleton;
};
export {};
