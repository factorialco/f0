import { IconType } from "@/components/F0Icon"
import {
  ActionButtonVariant,
  ActionProps,
  ButtonType,
  NavTarget,
} from "@/ui/Action"

import { ButtonSize } from "./types"

export type { ButtonType }

export type ButtonInternalProps = Pick<
  ActionProps,
  | "size"
  | "disabled"
  | "className"
  | "pressed"
  | "compact"
  | "tooltip"
  | "fontSize"
> &
  DataAttributes & {
    /**
     * The aria-label of the button if not provided title or label will be used.
     */
    "aria-label"?: string
    /**
     * The variant of the button.
     */
    variant?: ActionButtonVariant
    /**
     * The filters'counter value to display.
     */
    counterValue?: number
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (
      event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void | Promise<unknown>
    /**
     * The title of the button.
     */
    title?: string
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: ButtonSize
    /**
     * @private
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean
    /**
     * @private
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean
    /**
     * @private
     * If true, the button will not automatically add a tooltip based on the hideLabel and label properties.
     */
    noAutoTooltip?: boolean
    /**
     * @private
     * If true, the button will not automatically add a title based label
     */
    noTitle?: boolean

    /**
     * @private
     * If true, the button will rotate the icon when the button is hovered.
     */
    iconRotate?: boolean

    /**
     * @private
     * The style of the button.
     */
    style?: React.CSSProperties
  } & ( // Target can only be used if href is provided
    | {
        /**
         * The URL to navigate to when the button is clicked.
         */
        href: string
        /**
         * The target to navigate to when the button is clicked.
         */
        target?: NavTarget
        type?: never
      }
    | {
        href?: never
        target?: never
        type?: ButtonType
      }
  )
