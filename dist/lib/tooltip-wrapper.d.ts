import { ReactNode } from 'react';
import { TooltipListItem } from '../experimental/Overlays/Tooltip';
/**
 * Structured tooltip copy: a semibold title, a body paragraph and an optional
 * bulleted list. A plain string is the title alone, which is what every caller
 * passed before the structured form existed.
 */
export type TooltipContentValue = {
    title?: string;
    description?: string;
    items?: TooltipListItem[];
};
export type TooltipValue = string | TooltipContentValue;
export type { TooltipListItem };
/**
 * Flattens tooltip copy into a single string for hosts that expose it to
 * screen readers, which get no hover and so never see the tooltip itself.
 */
export declare const tooltipAccessibleText: (tooltip?: TooltipValue) => string | undefined;
interface TooltipWrapperProps {
    tooltip?: TooltipValue;
    children: ReactNode;
}
export declare const TooltipWrapper: React.FC<TooltipWrapperProps>;
