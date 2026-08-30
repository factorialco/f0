export declare function DropLaneReorder({ id, instanceId, getIndexById, onReorder, children, }: {
    id: string;
    instanceId: symbol;
    getIndexById: (id: string) => number;
    onReorder: (fromIndex: number, toIndex: number, sourceId: string) => void;
    children: React.ReactNode;
}): import("react").JSX.Element;
