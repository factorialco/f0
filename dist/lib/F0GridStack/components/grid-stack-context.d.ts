import { GridStack, GridStackOptions, GridStackWidget } from 'gridstack';
export type GridStackWidgetWithRequiredId = GridStackWidget & {
    id: Required<GridStackWidget>["id"];
};
export declare const GridStackContext: import('react').Context<{
    options: GridStackOptions;
    gridStack: GridStack | null;
    _gridStack: {
        value: GridStack | null;
        set: React.Dispatch<React.SetStateAction<GridStack | null>>;
    };
    _rawWidgetMetaMap: {
        value: Map<string, GridStackWidget>;
        set: React.Dispatch<React.SetStateAction<Map<string, GridStackWidget>>>;
    };
    _reactContentMap: {
        value: Map<string, React.ReactElement>;
        set: React.Dispatch<React.SetStateAction<Map<string, React.ReactElement>>>;
    };
} | null>;
export declare function useGridStackContext(): {
    options: GridStackOptions;
    gridStack: GridStack | null;
    _gridStack: {
        value: GridStack | null;
        set: React.Dispatch<React.SetStateAction<GridStack | null>>;
    };
    _rawWidgetMetaMap: {
        value: Map<string, GridStackWidget>;
        set: React.Dispatch<React.SetStateAction<Map<string, GridStackWidget>>>;
    };
    _reactContentMap: {
        value: Map<string, React.ReactElement>;
        set: React.Dispatch<React.SetStateAction<Map<string, React.ReactElement>>>;
    };
};
