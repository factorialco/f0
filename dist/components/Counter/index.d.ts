import * as react_jsx_runtime from 'react/jsx-runtime';
import * as cva from 'cva';
import { VariantProps } from 'cva';

declare const counterContainerVariants: (props?: ({
    size?: "md" | "sm" | undefined;
    type?: "default" | "bold" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterContainerVariants>;
declare function Counter({ size, type, value, maxValue }: CounterProps): react_jsx_runtime.JSX.Element;

export { Counter };
