import { VariantProps } from 'cva';
declare const spinnerVariants: (props?: ({
    size?: "small" | "large" | "medium" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}
declare function _Spinner({ size, className }: SpinnerProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
declare const Spinner: import('../../lib/data-testid').WithDataTestIdReturnType<typeof _Spinner>;
export { Spinner };
