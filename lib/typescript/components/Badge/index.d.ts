import type { IconType } from "../primitives/F0Icon";
/**
 * @deprecated Use `F0_BADGE_VARIANTS` from `../F0Badge` instead.
 */
export declare const BADGE_TYPES: readonly ["neutral", "highlight", "positive", "critical", "warning"];
/**
 * @deprecated Use `F0BadgeVariant` from `../F0Badge` instead.
 */
export type BadgeType = (typeof BADGE_TYPES)[number];
/**
 * @deprecated Use `F0BadgeSize` from `../F0Badge` instead.
 */
export declare const BADGE_SIZES: readonly ["xs", "sm", "md", "lg"];
/**
 * @deprecated Use `F0BadgeSize` from `../F0Badge` instead.
 */
export type BadgeSize = (typeof BADGE_SIZES)[number];
/**
 * @deprecated Use `F0BadgeProps` from `../F0Badge` instead.
 * Migration: replace `type` with `variant`.
 */
export interface BadgeProps {
    icon: IconType;
    type?: BadgeType;
    size?: BadgeSize;
}
/**
 * @deprecated Use `F0Badge` from `../F0Badge` instead.
 * Migration: replace `type` with `variant`.
 */
export declare const Badge: ({ type, size, icon }: BadgeProps) => import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map