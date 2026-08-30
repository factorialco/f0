import { GridStackOptions, GridStackWidget } from 'gridstack';
export type GridStackReactOptions = Omit<GridStackOptions, "children">;
export type GridStackReactSize = {
    w: number;
    h: number;
};
export interface GridStackReactWidget extends Omit<GridStackWidget, "content" | "id"> {
    id: Required<GridStackWidget>["id"];
    allowedSizes?: GridStackReactSize[];
    content?: React.ReactElement;
    meta?: Record<string, unknown>;
    _originalContent?: React.ReactNode;
}
export interface F0GridStackProps {
    options: GridStackReactOptions;
    widgets: GridStackReactWidget[];
    onChange?: (widgets: GridStackReactWidget[]) => void;
    className?: string;
    /** Toggle static mode imperatively via `gridStack.setStatic()`.
     *  Unlike putting `staticGrid` in options, this does NOT recreate the grid. */
    static?: boolean;
    /** Incrementing counter that forces all widget positions to match props.
     *  Used to reset positions on layout discard. */
    forcePositionSync?: number;
}
export declare const F0GridStack: {
    ({ options, widgets, onChange, className, static: isStatic, forcePositionSync, }: F0GridStackProps): import("react").JSX.Element;
    displayName: string;
};
