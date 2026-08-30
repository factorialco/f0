import { GridItemHTMLElement, GridStackOptions } from 'gridstack';
import { default as React, PropsWithChildren } from 'react';
import { GridStackReactWidget } from '../F0GridStack';
interface GridStackProviderProps {
    children: React.ReactNode;
    options: GridStackOptions;
    onResizeStop?: (event: Event, el: GridItemHTMLElement) => void;
    onChange?: (widgets: GridStackReactWidget[]) => void;
    widgets?: GridStackReactWidget[];
    /** Toggle static mode imperatively via `gridStack.setStatic()`.
     *  Unlike putting `staticGrid` in options, this does NOT recreate the grid. */
    static?: boolean;
    /** Incrementing counter that forces all widget positions to match the
     *  current prop values. Used to reset positions on layout discard. */
    forcePositionSync?: number;
}
export declare function GridStackProvider({ children, options, onResizeStop, onChange, widgets, static: isStatic, forcePositionSync, }: PropsWithChildren<GridStackProviderProps>): React.JSX.Element;
export {};
