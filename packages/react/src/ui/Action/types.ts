import { HTMLAttributeAnchorTarget, ReactNode } from "react"

export const actionButtonVariants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote",
  "ai",
] as const
export type ActionButtonVariant = (typeof actionButtonVariants)[number]

export const actionLinkVariants = ["link", "unstyled", "mention"] as const
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
   * Tooltip
   */
  tooltip?: string | false
  /**
   * The variant of the action.
   */
  variant?: ActionVariant
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
  "aria-label"?: string

  /**
   * The tab index of the action.
   */
  tabIndex?: number

  /**
   * Mouse enter event handler.
   */
  onMouseEnter?: React.MouseEventHandler<HTMLElement>

  /**
   * Mouse leave event handler.
   */
  onMouseLeave?: React.MouseEventHandler<HTMLElement>
}

export const buttonTypes = ["button", "submit", "reset"] as const
export type ButtonType = (typeof buttonTypes)[number]

export const navTargets = ["_blank", "_self", "_parent", "_top"] as const

export type NavTarget = HTMLAttributeAnchorTarget

export type ActionBaseProps = ActionCommonProps & DataAttributes

export type ActionLinkProps = ActionBaseProps & {
  href: string
  target?: NavTarget
  rel?: string
  onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLAnchorElement>) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

export type ActionButtonProps = ActionBaseProps & {
  type?: ButtonType
  href?: never
  target?: never
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type ActionProps =
  | ActionLinkProps // as link
  | ActionButtonProps // as button
