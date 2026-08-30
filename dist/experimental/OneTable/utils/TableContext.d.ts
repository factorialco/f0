interface TableContextValue {
    isScrolled: boolean;
    setIsScrolled: (value: boolean) => void;
    isScrolledRight: boolean;
    setIsScrolledRight: (value: boolean) => void;
}
export declare const TableContext: import('react').Context<TableContextValue | undefined>;
export declare function useTable(): TableContextValue;
export {};
