import type { VariantProps } from "tailwind-variants";
import type { IconType } from "../primitives/F0Icon";
import { badgeSizeClasses, badgeVariantClasses, type badgeVariants } from "./F0Badge.styles";
export type F0BadgeVariant = keyof typeof badgeVariantClasses;
export declare const F0_BADGE_VARIANTS: ReadonlyArray<F0BadgeVariant>;
export type F0BadgeSize = keyof typeof badgeSizeClasses;
export declare const F0_BADGE_SIZES: ReadonlyArray<F0BadgeSize>;
export declare const F0_BADGE_ICON_SIZES: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};
export interface F0BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    variant?: F0BadgeVariant;
    size?: F0BadgeSize;
}
//# sourceMappingURL=F0Badge.types.d.ts.map