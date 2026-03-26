import type { IconType } from "../primitives/F0Icon";
import type { PressableFeedbackProps, PressableFeedbackVariant } from "../primitives/PressableFeedback";
/**
 * Button variant types
 */
export declare const BUTTON_VARIANTS: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type F0ButtonVariant = ButtonVariant;
/**
 * Button size types
 */
export declare const BUTTON_SIZES: readonly ["sm", "md", "lg"];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type F0ButtonSize = ButtonSize;
/**
 * Props that are controlled by F0Button and must not be passed through.
 * This preserves F0Button press-state behavior and accessibility contract.
 */
declare const F0_BUTTON_CONTROLLED_PASSTHROUGH_PROPS: readonly ["onPressIn", "onPressOut", "accessibilityLabel", "accessibilityRole", "accessibilityState"];
export declare const F0_BUTTON_BANNED_PROPS: readonly ["style", "className"];
export declare const F0_BUTTON_BLOCKED_FORWARD_PROPS: readonly ["onPressIn", "onPressOut", "accessibilityLabel", "accessibilityRole", "accessibilityState", "style", "className"];
interface F0ButtonPropsInternal extends Omit<PressableFeedbackProps, "children" | "variant" | "disabled" | (typeof F0_BUTTON_CONTROLLED_PASSTHROUGH_PROPS)[number]> {
    label: string;
    onPress?: () => void | Promise<unknown>;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    round?: boolean;
    showBadge?: boolean;
    fullWidth?: boolean;
    accessibilityHint?: string;
    testID?: string;
    feedback?: PressableFeedbackVariant;
}
/**
 * Public props for the F0Button component.
 *
 * Note: `className` and `style` props are NOT available.
 * Use semantic props (variant, size, etc.) for styling.
 */
export type F0ButtonProps = Omit<F0ButtonPropsInternal, (typeof F0_BUTTON_BANNED_PROPS)[number]>;
export {};
//# sourceMappingURL=F0Button.types.d.ts.map