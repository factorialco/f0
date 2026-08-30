import { VariantProps } from 'cva';
import { ResponsiveStyleProps } from './utils/responsive';
declare const boxVariants: (props?: ({
    zIndex?: "0" | "auto" | "10" | "20" | "50" | "40" | "30" | undefined;
    boxShadow?: "none" | "lg" | "md" | "sm" | "xl" | undefined;
    divider?: "x" | "y" | undefined;
    dividerColor?: "info" | "bold" | "default" | "secondary" | "critical" | "warning" | "positive" | "promote" | "selected" | "critical-bold" | "info-bold" | "warning-bold" | "positive-bold" | "selected-bold" | undefined;
    overflow?: "hidden" | "auto" | "scroll" | "visible" | undefined;
    overflowX?: "hidden" | "auto" | "scroll" | "visible" | undefined;
    overflowY?: "hidden" | "auto" | "scroll" | "visible" | undefined;
    borderColor?: "info" | "bold" | "default" | "secondary" | "critical" | "warning" | "positive" | "promote" | "selected" | "critical-bold" | "info-bold" | "warning-bold" | "positive-bold" | "selected-bold" | undefined;
    border?: "none" | "default" | "thick" | undefined;
    borderTop?: "none" | "default" | "thick" | undefined;
    borderBottom?: "none" | "default" | "thick" | undefined;
    borderLeft?: "none" | "default" | "thick" | undefined;
    borderRight?: "none" | "default" | "thick" | undefined;
    borderRadius?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xs" | "2xl" | "full" | "3xl" | undefined;
    borderRadiusTopLeft?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xs" | "2xl" | "full" | "3xl" | undefined;
    borderRadiusTopRight?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xs" | "2xl" | "full" | "3xl" | undefined;
    borderRadiusBottomLeft?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xs" | "2xl" | "full" | "3xl" | undefined;
    borderRadiusBottomRight?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xs" | "2xl" | "full" | "3xl" | undefined;
    borderStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
    background?: "info" | "bold" | "secondary" | "inverse" | "critical" | "accent" | "warning" | "positive" | "promote" | "selected" | "critical-bold" | "transparent" | "overlay" | "primary" | "tertiary" | "inverse-secondary" | "accent-bold" | "info-bold" | "warning-bold" | "positive-bold" | "selected-secondary" | "selected-bold" | undefined;
    width?: import('./types').SizeToken | undefined;
    height?: import('./types').SizeToken | undefined;
    minWidth?: import('./types').SizeToken | undefined;
    minHeight?: import('./types').SizeToken | undefined;
    maxWidth?: import('./types').SizeToken | undefined;
    maxHeight?: import('./types').SizeToken | undefined;
    columns?: "1" | "2" | "3" | "4" | "none" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | undefined;
    rows?: "1" | "2" | "3" | "4" | "none" | "5" | "6" | undefined;
    colSpan?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full" | undefined;
    colStart?: "1" | "2" | "3" | "4" | "auto" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | undefined;
    rowSpan?: "1" | "2" | "3" | "4" | "5" | "6" | "full" | undefined;
    gap?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    alignItems?: "center" | "end" | "baseline" | "start" | "stretch" | undefined;
    justifyContent?: "center" | "end" | "start" | "between" | "stretch" | "around" | "evenly" | undefined;
    flexDirection?: "row" | "column" | "column-reverse" | "row-reverse" | undefined;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
    grow?: boolean | undefined;
    shrink?: boolean | undefined;
    margin?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginX?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginY?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginTop?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginBottom?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginLeft?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    marginRight?: "none" | "lg" | "md" | "sm" | "xs" | "auto" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    padding?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingX?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingY?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingTop?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingBottom?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingLeft?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    paddingRight?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    top?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    right?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    bottom?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    left?: "none" | "lg" | "md" | "sm" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | undefined;
    display?: "block" | "inline" | "flex" | "grid" | "inline-flex" | "none" | undefined;
    position?: "fixed" | "sticky" | "relative" | "static" | "absolute" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
type BoxVariantProps = VariantProps<typeof boxVariants>;
export interface F0BoxProps extends Omit<React.ComponentPropsWithoutRef<"div">, "display" | "width" | "height" | "border" | "className" | "style">, BoxVariantProps {
    /** Responsive overrides applied from the `sm` breakpoint (≥640px) */
    sm?: ResponsiveStyleProps;
    /** Responsive overrides applied from the `md` breakpoint (≥768px) */
    md?: ResponsiveStyleProps;
    /** Responsive overrides applied from the `lg` breakpoint (≥1024px) */
    lg?: ResponsiveStyleProps;
    /** Responsive overrides applied from the `xl` breakpoint (≥1280px) */
    xl?: ResponsiveStyleProps;
}
export declare const F0Box: import('react').ForwardRefExoticComponent<F0BoxProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
