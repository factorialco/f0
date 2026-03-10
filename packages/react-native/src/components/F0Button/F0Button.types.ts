import type { IconType } from "../primitives/F0Icon"
import type {
  PressableFeedbackProps,
  PressableFeedbackVariant,
} from "../primitives/PressableFeedback"

/**
 * Button variant types
 */
export const BUTTON_VARIANTS = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]
export type F0ButtonVariant = ButtonVariant

/**
 * Button size types
 */
export const BUTTON_SIZES = ["sm", "md", "lg"] as const

export type ButtonSize = (typeof BUTTON_SIZES)[number]
export type F0ButtonSize = ButtonSize

/**
 * Props that are controlled by F0Button and must not be passed through.
 * This preserves F0Button press-state behavior and accessibility contract.
 */
const F0_BUTTON_CONTROLLED_PASSTHROUGH_PROPS = [
  "onPressIn",
  "onPressOut",
  "accessibilityLabel",
  "accessibilityRole",
  "accessibilityState",
] as const

export const F0_BUTTON_BANNED_PROPS = ["style", "className"] as const

export const F0_BUTTON_BLOCKED_FORWARD_PROPS = [
  ...F0_BUTTON_CONTROLLED_PASSTHROUGH_PROPS,
  ...F0_BUTTON_BANNED_PROPS,
] as const

interface F0ButtonPropsInternal extends Omit<
  PressableFeedbackProps,
  | "children"
  | "variant"
  | "disabled"
  | (typeof F0_BUTTON_CONTROLLED_PASSTHROUGH_PROPS)[number]
> {
  label: string
  onPress?: () => void | Promise<unknown>
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: IconType
  emoji?: string
  hideLabel?: boolean
  round?: boolean
  showBadge?: boolean
  fullWidth?: boolean
  accessibilityHint?: string
  testID?: string
  feedback?: PressableFeedbackVariant
}

/**
 * Public props for the F0Button component.
 *
 * Note: `className` and `style` props are NOT available.
 * Use semantic props (variant, size, etc.) for styling.
 */
export type F0ButtonProps = Omit<
  F0ButtonPropsInternal,
  (typeof F0_BUTTON_BANNED_PROPS)[number]
>
