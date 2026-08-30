import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { ColorValue } from "react-native";
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
 * Runtime-blocked props that must not be forwarded to the underlying SVG.
 *
 * - `style` is banned from the public API for semantic consistency.
 * - Native `color` is controlled by `color`/`tintColor` and must not be
 *   forwardable via unsafe casts.
 */
export declare const F0_ICON_BLOCKED_FORWARD_PROPS: readonly ["style", "color"];
/**
 * Public F0Icon props
 * Supports semantic color via `color` prop, with `className` as escape hatch.
 */
export interface F0IconProps extends Omit<SvgProps, "style" | "color"> {
    /**
     * Tailwind className for custom styling or color overrides.
     * Prefer the `color` prop for semantic icon colors.
     */
    className?: string;
    /**
     * Semantic icon color from the F0 design system.
     * Maps to f0-icon-* tokens (e.g. color="critical" -> text-f0-icon-critical).
     * Ignored when `tintColor` is set.
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
    /**
     * Arbitrary runtime color for the icon, bypassing semantic tokens.
     * Accepts any React Native ColorValue (hex, rgb, hsl, named color, etc.).
     * When set, overrides both `color` and any text-* class from `className`.
     *
     * Use sparingly — prefer the semantic `color` prop for design-system colors.
     * This escape hatch exists for cases where icon color is determined at runtime
     * (e.g. backend-driven widget colors, user-customizable themes).
     *
     * @example
     * ```tsx
     * <F0Icon icon={Star} tintColor="#FF355E" />
     * <F0Icon icon={Star} tintColor={dynamicColor} size="lg" />
     * ```
     */
    tintColor?: ColorValue;
}
//# sourceMappingURL=F0Icon.types.d.ts.map