import { TOCItem } from '../../../experimental/Navigation/F0TableOfContent';
import { TableOfContentPopoverVariant } from '../internal-types';
interface CollapsedBarsProps {
    items: TOCItem[];
    activeItem?: string;
    className?: string;
    /** Alignment of the bars */
    align?: "left" | "right";
    /** Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds */
    variant?: TableOfContentPopoverVariant;
}
/**
 * CollapsedBars renders a minimized visual representation
 * of the menu items as horizontal bars with varying widths
 * based on hierarchy depth.
 */
export declare function CollapsedBars({ items, activeItem, className, align, variant, }: CollapsedBarsProps): import("react").JSX.Element;
export {};
