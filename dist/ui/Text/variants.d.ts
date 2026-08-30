import { VariantProps } from 'cva';
import { AsAllowedList } from './types';
export declare const textVariants: (props?: ({
    variant?: "info" | "small" | "body" | "code" | "label" | "description" | "inverse" | "critical" | "warning" | "positive" | "selected" | "heading" | "heading-large" | "label-input" | "warning-strong" | "critical-strong" | "positive-strong" | "info-strong" | undefined;
    align?: "center" | "left" | "right" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export type TextVariants = VariantProps<typeof textVariants>;
export type TextVariant = NonNullable<TextVariants["variant"]>;
export declare const defaultTag: Record<TextVariant, AsAllowedList>;
