import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { VirtualItem } from '../index';
import * as SelectPrimitive from "./radix-ui";
/**
 * Select Content component
 */
type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    top?: ReactNode;
    bottom?: ReactNode;
    right?: ReactNode;
    emptyMessage?: string;
    emptyAction?: ReactNode;
    showLoadingIndicator?: boolean;
} & ({
    value?: string[];
    multiple: true;
} | {
    value?: string;
    multiple?: false;
});
type SelectContentWithItemsProps = Omit<SelectItemProps, "children"> & {
    items: VirtualItem[];
    children?: never;
};
type SelectContentWithChildrenProps = Omit<SelectItemProps, "children"> & {
    items?: never;
    children: ReactNode;
};
type SelectContentProps = (SelectContentWithItemsProps | SelectContentWithChildrenProps) & {
    onScrollBottom?: () => void;
    onScrollTop?: () => void;
    isLoadingMore?: boolean;
    isLoading?: boolean;
    forceMinHeight?: boolean;
    scrollMargin?: number;
    taller?: boolean;
    portalContainer?: HTMLElement | null;
    /**
     * When true, the dropdown sizes to its widest option (never narrower than
     * the trigger) instead of the default 20rem minimum. Useful for compact
     * value pickers like month/year selectors.
     */
    fitContentWidth?: boolean;
};
declare const SelectContent: import('react').ForwardRefExoticComponent<SelectContentProps & import('react').RefAttributes<HTMLDivElement>>;
export { SelectContent };
