import type { ReactNode } from "react";
import type { F0ButtonProps } from "../F0Button";
export declare const F0_BANNER_LEVELS: readonly ["info", "warning", "positive", "critical"];
export type F0BannerLevel = (typeof F0_BANNER_LEVELS)[number];
export type F0BannerAction = Pick<F0ButtonProps, "label" | "onPress" | "loading" | "disabled">;
export interface F0BannerProps {
    /** Banner message. */
    message: string;
    /** Semantic level driving icon, colors, and background tint. */
    level: F0BannerLevel;
    /** Trailing link slot, e.g. `<F0Link size="sm" href="…">Learn more</F0Link>`. */
    link?: ReactNode;
    /** Trailing action button. */
    action?: F0BannerAction;
    /** Show a trailing loading spinner tinted to the level. @default false */
    loading?: boolean;
    /** Show a close button that self-removes the banner. Implied by `onDismiss`. @default false */
    dismissible?: boolean;
    /** Called after the user dismisses the banner. */
    onDismiss?: () => void;
    /** Accessible label for the dismiss button. @default "Dismiss" */
    dismissLabel?: string;
    /** Clamp the message to N lines. Defaults to unbounded (wraps). */
    numberOfLines?: number;
    /** Test ID for testing. */
    testID?: string;
}
//# sourceMappingURL=F0Banner.types.d.ts.map