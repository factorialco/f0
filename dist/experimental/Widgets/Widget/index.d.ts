import { VariantProps } from 'cva';
import { default as React, ReactNode } from 'react';
import { F0ButtonProps } from '../../../components/F0Button';
import { IconType } from '../../../components/F0Icon';
import { StatusVariant } from '../../../components/tags/F0TagStatus';
import { DropdownItem } from '../../Navigation/Dropdown/internal.tsx';
export interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        info?: string;
        canBeBlurred?: boolean;
        /**
         * The way out of the widget: it makes the TITLE ITSELF the link — the title
         * with a chevron after it, one ghost-button-shaped target that lights up on
         * hover. Nothing sits in the header's top-right (that is the overflow menu's)
         * and nothing sits in the footer (that is `action`'s): the name of the widget
         * IS the way into it.
         */
        link?: {
            /**
             * What following it DOES, in words — "Go to Communities". The visible text
             * is the widget's title, so this is what a screen reader announces
             * instead: it names the DESTINATION, which a title alone cannot.
             */
            title: string;
            url?: string;
            onClick?: () => void;
            /** Defaults to the chevron. */
            icon?: IconType;
        };
        count?: number;
    };
    /** The card's footer button — its call to action. `neutral`/`sm` by default. */
    action?: F0ButtonProps;
    /**
     * Extra classes for the FOOTER row that `action` draws in. For content that
     * BLEEDS past the card's content box and wants the footer brought onto its
     * line — Home's row-based slots bleed 8px, which eats the gap above the footer
     * and offsets it from the rows (see `SlotWidget`). Spacing only; `F0Button`
     * takes no className of its own, so this is the seam for it.
     */
    footerClassName?: string;
    summaries?: Array<{
        label: string;
        value: string | number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
    alert?: string;
    status?: {
        text: string;
        variant: StatusVariant;
    };
    fullHeight?: boolean;
    /**
     * Shows a drag handle to the left of the title. The handle carries
     * `data-gs-handle`, so a gridstack board picks it up as its handle.
     */
    draggable?: boolean;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    /** Lifts the card while it is being dragged. */
    isDragging?: boolean;
    /** Marks the card as picked out — a selected tile on an editable board. */
    selected?: boolean;
    /** An "Ask One" AI button in the header. */
    AIButton?: () => void;
    /** An overflow menu at the header's right, beside `link`. */
    actions?: DropdownItem[];
    /**
     * THE WIDGET'S OWN CONTROLS, in the header's top-right: what the card is
     * currently showing (a scope switcher), or what you can do from it without
     * leaving the page ("New post"). They act on the WIDGET.
     *
     * They sit to the LEFT of the overflow menu, which keeps its corner — the menu
     * is where every widget's items live, and a control that moved depending on
     * whether a card had a menu would be a different control each time.
     *
     * Keep it to one or two `sm` controls. This row is the TITLE'S first, and the
     * title gives up its width to whatever is put beside it: three buttons here
     * and a narrow card has no name left.
     *
     * NOT the way out of the widget — that is `header.link`, drawn as the title
     * itself — and NOT its call to action, which is `action`, in the footer.
     */
    headerControls?: ReactNode;
}
export declare const useWidgetIsWide: () => boolean;
declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & (VariantProps<typeof skeletonVariants> | {
    height: "full";
});
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Widget: import('../../../lib/data-testid').WithDataTestIdReturnType<React.ForwardRefExoticComponent<WidgetProps & {
    children: ReactNode;
} & React.RefAttributes<HTMLDivElement>> & {
    Skeleton: React.ForwardRefExoticComponent<WidgetSkeletonProps & React.RefAttributes<HTMLDivElement>>;
}>;
export {};
