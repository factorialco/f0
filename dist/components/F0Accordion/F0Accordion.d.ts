import { F0AccordionProps } from './types';
export type { F0AccordionItem, F0AccordionItemAction, F0AccordionItemDropdownAction, F0AccordionItemSegmentedControlAction, F0AccordionProps, } from './types';
/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export declare const F0Accordion: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0AccordionProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ items, }: import('./F0AccordionSkeleton').F0AccordionSkeletonProps) => import("react").JSX.Element;
}>;
