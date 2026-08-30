import { VariantProps } from 'cva';
declare const boxVariants: (props?: ({
    overflow?: "hidden" | "auto" | undefined;
    paddingX?: "none" | "p-4" | "p-2" | "p-8" | "p-12" | "p-16" | undefined;
    maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
    height?: "auto" | "full" | undefined;
    width?: "auto" | "full" | undefined;
    paddingY?: "none" | "p-4" | "p-2" | "p-8" | "p-12" | "p-16" | undefined;
    basis?: "0" | undefined;
    inline?: boolean | undefined;
    justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
    alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
    grow?: boolean | undefined;
    shrink?: boolean | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export type BoxRef = HTMLDivElement;
export type BoxProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>;
export declare const FlexBox: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    overflow?: "hidden" | "auto" | undefined;
    paddingX?: "none" | "p-4" | "p-2" | "p-8" | "p-12" | "p-16" | undefined;
    maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
    height?: "auto" | "full" | undefined;
    width?: "auto" | "full" | undefined;
    paddingY?: "none" | "p-4" | "p-2" | "p-8" | "p-12" | "p-16" | undefined;
    basis?: "0" | undefined;
    inline?: boolean | undefined;
    justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
    alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
    grow?: boolean | undefined;
    shrink?: boolean | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string> & import('react').RefAttributes<HTMLDivElement>>;
export {};
