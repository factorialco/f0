import { VariantProps } from 'cva';
export type ColumnNumber = 1 | 2 | 3 | 4 | 6;
export type PeekVariant = `peek${ColumnNumber}`;
export interface CarouselBreakpoints {
    default?: ColumnNumber;
    xs?: ColumnNumber;
    sm?: ColumnNumber;
    md?: ColumnNumber;
    lg?: ColumnNumber;
    xl?: ColumnNumber;
}
export declare const carouselItemVariants: (props?: ({
    peek?: boolean | undefined;
    default?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
    xs?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
    sm?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
    md?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
    lg?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
    xl?: 4 | 2 | 1 | 3 | 6 | "peek4" | "peek2" | "peek1" | "peek3" | "peek6" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export type CarouselItemVariants = VariantProps<typeof carouselItemVariants>;
