import { VariantProps } from 'cva';
declare const counterVariants: (props?: ({
    size?: "md" | "sm" | undefined;
    type?: "bold" | "selected" | "default" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterVariants>;
declare function _Counter({ size, type, value, maxValue }: CounterProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Counter: import('../../lib/data-testid').WithDataTestIdReturnType<typeof _Counter>;
export {};
