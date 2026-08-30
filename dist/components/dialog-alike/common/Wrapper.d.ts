import { DialogAlikeSize } from './types';
/**
 * The mode to use for the dialog.
 * @description If "auto", the dialog will be a sheet on small screens and a dialog on large screens.
 */
export type DialogMode = "sheet" | "dialog" | "auto";
/**
 * The position of the dialog.
 * @description The dialog will be displayed in the center of the screen by default.
 */
export type DialogPosition = "left" | "right" | "center";
export type DialogWrapperProps = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onClose: () => void;
    position: DialogPosition;
    /**
     * The children to render inside the dialog.
     */
    children: React.ReactNode;
    /**
     * Whether the dialog should be modal (only closable by clickiong the actions).
     * @default false
     */
    modal?: boolean;
    /**
     * The width of the dialog.
     * @default "md"
     */
    size?: DialogAlikeSize;
    /**
     * Whether the overlay should be shown.
     * @default true
     */
    showOverlay?: boolean;
    /**
     * Whether the dialog should have a full height.
     * @default false
     */
    fullHeight?: boolean;
    /**
     * Override the DOM element the dialog content is portaled into. When omitted,
     * the default target depends on `position` (center -> `#f0-overlay-root`,
     * side -> `#content`). Pass `null` to portal to `document.body`.
     */
    container?: HTMLElement | null;
    /**
     * Called with the content box's width in px whenever it changes (mount and on
     * resize), and with `0` once it unmounts. Lets a consumer react to the space
     * the dialog occupies — e.g. offsetting a graph so a node isn't hidden behind a
     * side drawer — without hard-coding the width. The slide-in animates a
     * transform, not the width, so the reported value is final from first paint.
     */
    onWidthChange?: (width: number) => void;
};
/**
 * This is a helper component to wrap the dialog content in a drawer or dialog component.
 * It is used to provide the context for the dialog and to handle the open and close state.
 * @param props
 * @returns
 */
export declare const DialogWrapper: ({ isOpen, onOpenChange, onClose, position, children, modal, showOverlay, size, fullHeight, container, onWidthChange, }: DialogWrapperProps) => import("react").JSX.Element;
