import type { GestureResponderEvent } from "react-native";
import type { PressableFeedbackProps } from "../primitives/PressableFeedback";
/**
 * Link style variants.
 *
 * - `link`     — classic underlined link
 * - `unstyled` — plain text link without underline
 * - `mention`  — mention pill style
 */
export declare const F0_LINK_VARIANTS: readonly ["link", "unstyled", "mention"];
export type F0LinkVariant = (typeof F0_LINK_VARIANTS)[number];
/**
 * Link size variants aligned with the Figma component.
 */
export declare const F0_LINK_SIZES: readonly ["xs", "sm", "md"];
export type F0LinkSize = (typeof F0_LINK_SIZES)[number];
/**
 * Navigation targets kept for parity with web `F0Link`.
 */
export declare const F0_LINK_TARGETS: readonly ["_blank", "_self", "_parent", "_top"];
export type F0LinkTarget = (typeof F0_LINK_TARGETS)[number];
/**
 * Props controlled by `F0Link` and not forwardable to the primitive.
 */
declare const F0_LINK_CONTROLLED_PASSTHROUGH_PROPS: readonly ["onPressIn", "onPressOut", "accessibilityRole", "accessibilityState"];
export declare const F0_LINK_BANNED_PROPS: readonly ["style"];
export declare const F0_LINK_BLOCKED_FORWARD_PROPS: readonly ["onPressIn", "onPressOut", "accessibilityRole", "accessibilityState", "style"];
interface F0LinkPropsInternal extends Omit<PressableFeedbackProps, "children" | "variant" | "disabled" | (typeof F0_LINK_CONTROLLED_PASSTHROUGH_PROPS)[number]> {
    /**
     * Link content.
     */
    children: React.ReactNode;
    /**
     * Link variant.
     * @default "link"
     */
    variant?: F0LinkVariant;
    /**
     * Link size.
     * @default "md"
     */
    size?: F0LinkSize;
    /**
     * Optional destination URL.
     * When `onPress` is not provided, `F0Link` opens this URL via `Linking.openURL`.
     */
    href?: string;
    /**
     * Navigation target parity with web API.
     * In RN this affects external affordance only (`_blank` => external icon by default).
     */
    target?: F0LinkTarget;
    /**
     * Shows external-link icon and helps communicate external navigation.
     */
    external?: boolean;
    /**
     * Press callback. Receives the native gesture event. Supports async handlers.
     */
    onPress?: (event: GestureResponderEvent) => void | Promise<unknown>;
    /**
     * Stops event propagation before running `onPress`.
     * Kept for parity with web `F0Link`.
     */
    stopPropagation?: boolean;
    /**
     * Disables interaction and applies disabled visual state.
     */
    disabled?: boolean;
    /**
     * Tailwind classes for the outer container.
     * Use for layout and positioning only (e.g. `mt-4`, `self-center`, `flex-1`).
     * Typography and color are controlled by `variant`, `size`, and `disabled`.
     */
    className?: string;
    /**
     * Truncates text content after N lines.
     *
     * Note: the custom underline for `variant="link"` is rendered on the outer
     * wrapper, so it only appears beneath the last visible line. For multi-line
     * underlined links consider using `variant="unstyled"` with a custom decoration.
     */
    numberOfLines?: number;
}
/**
 * Public props for `F0Link`.
 */
export type F0LinkProps = Omit<F0LinkPropsInternal, (typeof F0_LINK_BANNED_PROPS)[number]>;
export {};
//# sourceMappingURL=F0Link.types.d.ts.map