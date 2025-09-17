import { sizes, variants } from "@/ui/button"
import { ReactNode } from "react"
import { ActionVariantProps } from "./internal-types"

export const actionVariants = variants
export type ActionVariant = (typeof actionVariants)[number]

export const actionSizes = sizes
export type ActionSize = (typeof actionSizes)[number]

export interface ActionCommonProps {
  children: ReactNode

  prepend?: ReactNode
  append?: ReactNode
  prependOutside?: ReactNode
  appendOutside?: ReactNode

  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void

  disabled?: boolean
  loading?: boolean
  pressed?: boolean

  className?: string
  size?: ActionSize
  /**
   * The render mode.
   * @default "default"
   */
  mode?: "default" | "only"
}

export const buttonTypes = ["button", "submit", "reset"] as const
export type ButtonType = (typeof buttonTypes)[number]

export const navTargets = ["_blank", "_self", "_parent", "_top"] as const
export type NavTarget = (typeof navTargets)[number]
export interface LinkActionProps {
  href: string
  target?: NavTarget
}

export type ActionProps = ActionCommonProps &
  Partial<LinkActionProps> &
  ActionVariantProps &
  DataAttributes & {
    type?: ButtonType
  }
