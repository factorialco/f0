interface SortableBlockItem {
    id: string;
    render: React.ReactNode;
}
export interface GroupMasonryProps {
    blocks: SortableBlockItem[];
    sortable?: boolean;
    onSort?: (items: React.ReactNode[]) => void;
    main?: boolean;
}
export declare const GroupMasonry: {
    ({ blocks, sortable: _sortable, onSort: _onSort, main, }: GroupMasonryProps): import("react").JSX.Element;
    displayName: string;
};
export {};
