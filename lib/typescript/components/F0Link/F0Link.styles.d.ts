import { type ViewStyle } from "react-native";
import type { IconColor } from "../primitives/F0Icon";
import type { TextColor, TypographyVariant } from "../primitives/F0Text";
import type { F0LinkSize } from "./F0Link.types";
export declare const f0LinkContainerVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        link: string;
        unstyled: string;
        mention: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, "flex-row items-center self-start gap-0.5", {
    variant: {
        link: string;
        unstyled: string;
        mention: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        link: string;
        unstyled: string;
        mention: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, "flex-row items-center self-start gap-0.5", unknown, unknown, undefined>>;
export declare const f0LinkUnderlineVariants: import("tailwind-variants").TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, "pb-[1px]", {
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
    pressed: {
        true: string;
        false: string;
    };
    focused: {
        true: string;
        false: string;
    };
}, undefined, "pb-[1px]", unknown, unknown, undefined>>;
export declare const F0_LINK_UNDERLINE_STYLE: ViewStyle;
export declare const F0_LINK_TEXT_VARIANT_BY_SIZE: Record<F0LinkSize, TypographyVariant>;
export declare const F0_LINK_TEXT_COLOR_BY_STATE: (disabled: boolean) => TextColor;
export declare const F0_LINK_ICON_SIZE_BY_SIZE: {
    readonly xs: "sm";
    readonly sm: "sm";
    readonly md: "sm";
};
export declare const F0_LINK_ICON_COLOR_BY_STATE: (disabled: boolean) => IconColor;
//# sourceMappingURL=F0Link.styles.d.ts.map