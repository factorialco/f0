import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
declare const ScrollArea: import('react').ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    showBar?: boolean;
    viewportRef?: React.RefObject<HTMLDivElement>;
    onScrollTop?: () => void;
    onScrollBottom?: () => void;
    /**
     * The margin to add to the scroll area when the user is at the top or bottom of the scroll area.
     * @default 0
     */
    scrollMargin?: number;
} & import('react').RefAttributes<HTMLDivElement>>;
/** Internal static-enum variant: listbox options own focus, not the viewport. */
declare const NonFocusableScrollArea: import('react').ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    showBar?: boolean;
    viewportRef?: React.RefObject<HTMLDivElement>;
    onScrollTop?: () => void;
    onScrollBottom?: () => void;
    /**
     * The margin to add to the scroll area when the user is at the top or bottom of the scroll area.
     * @default 0
     */
    scrollMargin?: number;
} & import('react').RefAttributes<HTMLDivElement>>;
declare const ScrollBar: import('react').ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    showBar?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export { NonFocusableScrollArea, ScrollArea, ScrollBar };
