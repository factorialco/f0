import type { TextColor } from "../primitives/F0Text";
import type { F0BannerLevel } from "./F0Banner.types";
export declare const bannerVariants: import("tailwind-variants").TVReturnType<{
    level: {
        info: string;
        warning: string;
        positive: string;
        critical: string;
    };
    variant: {
        global: string;
        inline: string;
    };
}, undefined, "w-full flex-row items-center gap-2 px-3 py-2", {
    level: {
        info: string;
        warning: string;
        positive: string;
        critical: string;
    };
    variant: {
        global: string;
        inline: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    level: {
        info: string;
        warning: string;
        positive: string;
        critical: string;
    };
    variant: {
        global: string;
        inline: string;
    };
}, undefined, "w-full flex-row items-center gap-2 px-3 py-2", unknown, unknown, undefined>>;
export declare const bannerInlineShadow: {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation?: undefined;
} | {
    elevation: number;
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
} | {
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
    elevation?: undefined;
};
export declare const F0_BANNER_TEXT_COLORS: Record<F0BannerLevel, TextColor>;
//# sourceMappingURL=F0Banner.styles.d.ts.map