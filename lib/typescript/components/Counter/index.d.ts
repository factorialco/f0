import { type VariantProps } from "tailwind-variants";
declare const counterContainerVariants: import("tailwind-variants").TVReturnType<{
    size: {
        md: string;
        sm: string;
    };
    type: {
        default: string;
        selected: string;
        bold: string;
    };
}, undefined, "flex items-center justify-center rounded-xs grow-0 px-0.5", {
    size: {
        md: string;
        sm: string;
    };
    type: {
        default: string;
        selected: string;
        bold: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        md: string;
        sm: string;
    };
    type: {
        default: string;
        selected: string;
        bold: string;
    };
}, undefined, "flex items-center justify-center rounded-xs grow-0 px-0.5", unknown, unknown, undefined>>;
type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterContainerVariants>;
export declare function Counter({ size, type, value, maxValue }: CounterProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map