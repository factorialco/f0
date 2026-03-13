import React from "react";
import { Svg, SvgProps } from "react-native-svg";
import { type VariantProps } from "tailwind-variants";
import { type IconType } from "../primitives/F0Icon";
declare const iconVariants: import("tailwind-variants").TVReturnType<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
}, undefined, "shrink-0", {
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
}, undefined, "shrink-0", unknown, unknown, undefined>>;
/**
 * @deprecated Use `F0IconProps` from `../primitives/F0Icon` instead.
 * Migration: Replace `IconProps` with `F0IconProps`.
 * `F0Icon` supports `icon`, `size`, `testID`, and `className`, and adds semantic `color` variants.
 */
export interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
    icon: IconType;
    testID?: string;
    className?: string;
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote";
    isPressed?: boolean;
}
/**
 * @deprecated Use F0Icon instead. This component will be removed in a future version.
 * Migration: Replace <Icon icon={X} /> with <F0Icon icon={X} />.
 * F0Icon supports the same `icon`, `size`, `testID`, and `className` props, plus semantic `color` variants.
 */
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Svg>>;
export {};
//# sourceMappingURL=index.d.ts.map