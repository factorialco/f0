import { F0SelectItemObject } from '../types';
interface SelectionPreviewProps<T extends string> {
    items: F0SelectItemObject<T>[];
    onDeselect: (value: string) => void;
    allSelected?: boolean | "indeterminate";
    onLoadMore?: () => void;
    isLoadingMore?: boolean;
}
export declare function SelectionPreview<T extends string>({ items, onDeselect, allSelected, onLoadMore, isLoadingMore, }: SelectionPreviewProps<T>): import("react").JSX.Element;
export {};
