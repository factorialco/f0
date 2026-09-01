import type { ReactNode } from "react";
import type { IconType } from "../primitives/F0Icon";
import type { TextColor } from "../primitives/F0Text";
/**
 * Supported semantic colors for `F0Tag.Dot`.
 */
export declare const dotTagColors: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
/**
 * Background/text token classes by alert level.
 */
export declare const f0TagAlertLevelClasses: {
    readonly info: "bg-f0-background-info text-f0-foreground-info";
    readonly warning: "bg-f0-background-warning text-f0-foreground-warning";
    readonly critical: "bg-f0-background-critical text-f0-foreground-critical";
    readonly positive: "bg-f0-background-positive text-f0-foreground-positive";
};
/**
 * Semantic text color mapping by alert level.
 */
export declare const f0TagAlertTextLevelColors: {
    readonly info: "info";
    readonly warning: "warning";
    readonly critical: "critical";
    readonly positive: "positive";
};
/**
 * Allowed alert levels.
 */
export type F0TagAlertLevel = keyof typeof f0TagAlertLevelClasses;
/**
 * Runtime list of alert levels.
 */
export declare const F0_TAG_ALERT_LEVELS: ReadonlyArray<F0TagAlertLevel>;
/**
 * Allowed status variants.
 */
export declare const F0_TAG_STATUS_VARIANTS: readonly ["neutral", "info", "positive", "warning", "critical"];
/**
 * Allowed status variant union.
 */
export type F0TagStatusVariant = (typeof F0_TAG_STATUS_VARIANTS)[number];
/**
 * Background/text token classes by status variant.
 */
export declare const f0TagStatusLevelClasses: {
    readonly neutral: "bg-f0-background-secondary text-f0-foreground-secondary";
    readonly info: "bg-f0-background-info text-f0-foreground-info";
    readonly positive: "bg-f0-background-positive text-f0-foreground-positive";
    readonly warning: "bg-f0-background-warning text-f0-foreground-warning";
    readonly critical: "bg-f0-background-critical text-f0-foreground-critical";
};
/**
 * Dot token classes by status variant.
 */
export declare const f0TagStatusDotClasses: {
    readonly neutral: "bg-f0-icon";
    readonly info: "bg-f0-icon-info";
    readonly positive: "bg-f0-icon-positive";
    readonly warning: "bg-f0-icon-warning";
    readonly critical: "bg-f0-icon-critical";
};
/**
 * `F0Tag.Dot` color union.
 */
export type F0TagDotColor = (typeof dotTagColors)[number];
/**
 * Shared low-level props used by `F0TagRoot`.
 */
export interface F0TagProps {
    left?: ReactNode;
    text?: string;
    right?: ReactNode;
    additionalAccessibleText?: string;
    info?: string;
    onPress?: () => void;
    className?: string;
    textClassName?: string;
    textColor?: TextColor;
    hint?: string;
    shape?: "rounded" | "square";
}
/**
 * Props for `F0Tag.Dot`.
 */
export type F0TagDotProps = {
    text: string;
    additionalAccessibleText?: string;
    info?: string;
} & ({
    color: F0TagDotColor;
} | {
    customColor: string;
});
/**
 * Props for `F0Tag.Raw`.
 */
export type F0TagRawProps = {
    text: string;
    additionalAccessibleText?: string;
    info?: string;
    noBorder?: boolean;
    className?: string;
} & ({
    icon: IconType;
    onlyIcon: true;
} | {
    icon?: IconType;
    onlyIcon?: boolean;
});
/**
 * Props for `F0Tag.Alert`.
 */
export interface F0TagAlertProps {
    text: string;
    level: F0TagAlertLevel;
    info?: string;
}
/**
 * Props for `F0Tag.Status`.
 */
export interface F0TagStatusProps {
    text: string;
    variant: F0TagStatusVariant;
    additionalAccessibleText?: string;
}
/**
 * Props for `F0Tag.Person`.
 */
export interface F0TagPersonProps {
    src?: string;
    name: string;
    deactivated?: boolean;
}
/**
 * Props for `F0Tag.Team`.
 */
export interface F0TagTeamProps {
    name: string;
    src?: string;
}
/**
 * Props for `F0Tag.Company`.
 */
export interface F0TagCompanyProps {
    name: string;
    src?: string;
}
/**
 * Supported balance semantic statuses.
 */
export declare const F0_TAG_BALANCE_STATUSES: readonly ["positive", "neutral", "negative"];
/**
 * Balance semantic status union.
 */
export type BalanceStatus = (typeof F0_TAG_BALANCE_STATUSES)[number];
/**
 * Props for `F0Tag.Balance`.
 */
export interface F0TagBalanceProps {
    invertStatus?: boolean;
    hint?: string;
    info?: string;
    nullText?: string;
    amount: F0TagNumericInput | null;
    percentage?: F0TagPercentageInput | null;
}
/**
 * Flexible numeric input for amount rendering.
 */
export type F0TagNumericInput = number | {
    value: number;
    decimalPlaces?: number;
    locale?: string;
    units?: string;
    unitsPosition?: "left" | "right";
};
/**
 * Flexible numeric input for percentage rendering.
 */
export type F0TagPercentageInput = number | {
    value: number;
    decimalPlaces?: number;
    locale?: string;
};
//# sourceMappingURL=F0Tag.types.d.ts.map