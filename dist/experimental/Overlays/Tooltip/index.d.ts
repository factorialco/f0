import { default as React, ComponentProps } from 'react';
import { Shortcut } from '../../../ui/Shortcut';
/**
 * One bullet of a tooltip's list. The object form gets a semibold lead so a
 * list of named things (alerts, broken rules) reads as a list rather than a run
 * of sentences.
 */
export type TooltipListItem = string | {
    title: string;
    description?: string;
};
/**
 * The copy a tooltip shows. At least one of the three must be present — a
 * tooltip with nothing to say never opens.
 */
export type TooltipCopyProps = {
    label: string;
    description?: string;
    items?: TooltipListItem[];
} | {
    label?: string;
    description: string;
    items?: TooltipListItem[];
} | {
    label?: string;
    description?: string;
    items: TooltipListItem[];
};
type TooltipInternalProps = {
    children: React.ReactNode;
    shortcut?: ComponentProps<typeof Shortcut>["keys"];
    delay?: number;
    instant?: boolean;
    onOpen?: () => void;
} & TooltipCopyProps;
export declare function TooltipInternal({ label, description, items, children, shortcut, instant, delay, onOpen, }: TooltipInternalProps): React.JSX.Element;
declare const privateProps: readonly ["delay", "onOpen"];
export type TooltipProps = Omit<TooltipInternalProps, (typeof privateProps)[number]>;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Tooltip: import('../../../lib/data-testid').WithDataTestIdReturnType<(props: TooltipProps) => React.JSX.Element>;
export {};
