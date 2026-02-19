import type {
  PressableFeedbackProps,
  PressableFeedbackVariant,
} from "../PressableFeedback"
import type { IconType } from "../primitives/F0Icon/F0Icon.types"

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

/**
 * Button size types
 */
export const BUTTON_SIZES = ["sm", "md", "lg"] as const

export type ButtonSize = (typeof BUTTON_SIZES)[number]

/**
 * Internal props for the F0Button component
 * @private
 */
interface F0ButtonPropsInternal extends Omit<
  PressableFeedbackProps,
  "style" | "children" | "variant" | "disabled"
> {
  /**
   * Button text label (always required for accessibility)
   */
  label: string

  /**
   * Press handler. If it returns a Promise, the button auto-enters
   * loading state until the Promise resolves.
   */
  onPress?: () => void | Promise<unknown>

  /**
   * Button visual variant
   * @default "default"
   */
  variant?: ButtonVariant

  /**
   * Button size
   * @default "md"
   */
  size?: ButtonSize

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Loading state (disables the button and sets accessibilityState.busy).
   * Can be controlled by the host, or auto-managed when onPress returns a Promise.
   * @default false
   */
  loading?: boolean

  /**
   * Icon from F0Icon system
   */
  icon?: IconType

  /**
   * Emoji to display
   */
  emoji?: string

  /**
   * Hides the label text (icon-only mode).
   * Label is still used for accessibilityLabel.
   * @default false
   */
  hideLabel?: boolean

  /**
   * Makes icon-only buttons circular
   * @default false
   */
  round?: boolean

  /**
   * Shows a notification badge (outline variant only)
   * @default false
   */
  showBadge?: boolean

  /**
   * Makes button take full width of its container
   * @default false
   */
  fullWidth?: boolean

  /**
   * Accessibility hint for screen readers
   */
  accessibilityHint?: string

  /**
   * Test ID for testing
   */
  testID?: string

  /**
   * Press feedback animation style
   * @default "both"
   */
  feedback?: PressableFeedbackVariant

  /**
   * Internal use only - not exposed in public API
   * @private
   */
  className?: string
}

/**
 * Public props for the F0Button component.
 *
 * Note: `className` and `style` props are NOT available.
 * Use semantic props (variant, size, etc.) for styling.
 */
export type F0ButtonProps = Omit<F0ButtonPropsInternal, "className">
