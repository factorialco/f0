import { type VariantProps } from "tailwind-variants";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Svg, SvgProps } from "react-native-svg";
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
export interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
    icon: IconType;
    testID?: string;
    className?: string;
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote";
    isPressed?: boolean;
}
export type IconType = ForwardRefExoticComponent<SvgProps & RefAttributes<Svg> & {
    className?: string;
}>;
export declare function applyIconInterop(icon: IconType): (props: {
    className?: string | undefined;
    fontClassName?: string | undefined;
} & {
    colorClassName?: string | undefined;
} & Omit<SvgProps & React.RefAttributes<Svg> & {
    className?: string;
}, "ref"> & {
    ref?: ((instance: Svg | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<Svg> | null | undefined;
}) => React.ReactNode;
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Svg>>;
export {};
//# sourceMappingURL=index.d.ts.map