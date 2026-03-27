import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { SvgProps } from "react-native-svg";
import type { Svg } from "react-native-svg";
import type { VariantProps } from "tailwind-variants";
import type { iconVariants } from "./F0Icon.styles";
/**
 * Icon component type - forward ref to SVG component with className support
 */
export type IconType = ForwardRefExoticComponent<SvgProps & RefAttributes<Svg> & {
    className?: string;
}>;
/**
 * Icon color variants derived from f0-icon-* tokens in src/styles/theme.css
 * Sync is enforced by F0Icon.tokens.spec.ts
 */
export declare const ICON_COLORS: readonly ["default", "secondary", "inverse", "bold", "critical", "critical-bold", "accent", "info", "warning", "positive", "promote", "selected", "selected-hover", "mood-super-negative", "mood-negative", "mood-neutral", "mood-positive", "mood-super-positive"];
export type IconColor = (typeof ICON_COLORS)[number];
/**
 * Public F0Icon props
 * Supports semantic color via `color` prop, with `className` as escape hatch.
 */
export interface F0IconProps extends Omit<SvgProps, "style"> {
    /**
     * Tailwind className for custom styling or color overrides.
     * Prefer the `color` prop for semantic icon colors.
     */
    className?: string;
    /**
     * Semantic icon color from the F0 design system
     * Maps to f0-icon-* tokens (e.g. color="critical" -> text-f0-icon-critical)
     */
    color?: IconColor;
    /**
     * Icon component to render (from icons directory)
     */
    icon: IconType;
    /**
     * Icon size variant
     * @default 'md'
     */
    size?: VariantProps<typeof iconVariants>["size"];
    /**
     * Test ID for testing
     */
    testID?: string;
}
//# sourceMappingURL=F0Icon.types.d.ts.map