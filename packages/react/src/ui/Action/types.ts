import { ReactNode } from "react"
import { ActionVariantProps } from "./internal-types"

export const actionButtonVariants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote",
] as const
export type ActionButtonVariant = (typeof actionButtonVariants)[number]

export const actionLinkVariants = ["link"] as const
export type ActionLinkVariant = (typeof actionLinkVariants)[number]

export const actionVariants = [
  ...actionButtonVariants,
  ...actionLinkVariants,
] as const
export type ActionVariant = (typeof actionVariants)[number]

export const actionSizes = ["sm", "md", "lg"] as const
export type ActionSize = (typeof actionSizes)[number]

export interface ActionCommonProps {
  /**
   * The children of the action.
   */
  children: ReactNode

  /**
   * The prepend of the action.
   */
  prepend?: ReactNode
  /**
   * The append of the action.
   */
  append?: ReactNode
  /**
   * The prepend outside (next to the button) of the action.
   */
  prependOutside?: ReactNode
  /**
   * The append outside of the action.
   */
  appendOutside?: ReactNode

  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void

  /**
   * The disabled state of the action.
   */
  disabled?: boolean
  /**
   * The loading state of the action.
   */
  loading?: boolean
  /**
   * The pressed state of the action.
   */
  pressed?: boolean

  /**
   * The class name of the action.
   */
  className?: string
  /**
   * The size of the action.
   */
  size?: ActionSize
  /**
   * The render mode.
   * @default "default"
   */
  mode?: "default" | "only"

  /**
   * The title of the action.
   */
  title?: string

  /**
   * make the left and right padding of the action smaller.
   */
  compact?: boolean

  /**
   * The aria label of the action.
   */
  "aria-label": string
}

export const buttonTypes = ["button", "submit", "reset"] as const
export type ButtonType = (typeof buttonTypes)[number]

export const navTargets = ["_blank", "_self", "_parent", "_top"] as const
export type NavTarget = (typeof navTargets)[number]

export type ActionProps = ActionCommonProps &
  ActionVariantProps &
  DataAttributes &
  // as link
  (| {
        href: string
        target?: NavTarget
      }
    // as button
    | {
        type?: ButtonType
        href?: never
        target?: never
      }
  )
