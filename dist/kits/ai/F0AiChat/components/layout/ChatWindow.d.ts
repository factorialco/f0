import { ReactNode } from 'react';
export declare const SidebarWindow: ({ children, visible, side, exitStyle, acceptsWidgetDrop, }: {
    children?: ReactNode;
    /** Overrides the context `open` as the mount condition — lets the frame
     * drive per-window visibility when chat and hosted content split edges. */
    visible?: boolean;
    /** Edge this window docks to. Defaults to the context `panelSide`. */
    side?: "left" | "right";
    /**
     * Exit animation. "shrink" is the regular close (width + fade). "hold"
     * keeps the window still while the main content slides over it — used for
     * the swap between the AI chat and hosted content on opposite edges, so
     * the panels feel like they were always there.
     */
    exitStyle?: "shrink" | "hold";
    /** Enables dashboard-widget quoting for the real chat/composer view only. */
    acceptsWidgetDrop?: boolean;
}) => import("react").JSX.Element;
