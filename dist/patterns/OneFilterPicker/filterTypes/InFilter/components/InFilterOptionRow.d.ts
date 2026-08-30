import { InFilterOptionItem } from '../types';
export type InFilterOptionRowProps<T extends string> = {
    option: InFilterOptionItem<T>;
    isSelected: boolean;
    onToggle: () => void;
    isCompactMode?: boolean;
    depth: number;
    onFilterChange?: (key: string, value: unknown) => void;
    allFiltersValue?: Record<string, unknown>;
    cacheKey: string;
    searchTerm: string;
    autoExpand: boolean;
};
export declare function InFilterOptionRow<T extends string>({ option, isSelected, onToggle, isCompactMode, depth, onFilterChange, allFiltersValue, cacheKey, searchTerm, autoExpand, }: InFilterOptionRowProps<T>): import("react").JSX.Element;
