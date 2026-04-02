import type { ReactNode } from "react"

import type { IconType } from "../primitives/F0Icon"
import type { TextColor } from "../primitives/F0Text"

/**
 * Supported semantic colors for `F0Tag.Dot`.
 */
export const dotTagColors = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const

/**
 * Background/text token classes by alert level.
 */
export const f0TagAlertLevelClasses = {
  info: "bg-f0-background-info text-f0-foreground-info",
  warning: "bg-f0-background-warning text-f0-foreground-warning",
  critical: "bg-f0-background-critical text-f0-foreground-critical",
  positive: "bg-f0-background-positive text-f0-foreground-positive",
} as const

/**
 * Semantic text color mapping by alert level.
 */
export const f0TagAlertTextLevelColors = {
  info: "info",
  warning: "warning",
  critical: "critical",
  positive: "positive",
} as const

/**
 * Allowed alert levels.
 */
export type F0TagAlertLevel = keyof typeof f0TagAlertLevelClasses

/**
 * Runtime list of alert levels.
 */
export const F0_TAG_ALERT_LEVELS = Object.keys(
  f0TagAlertLevelClasses
) as ReadonlyArray<F0TagAlertLevel>

/**
 * Allowed status variants.
 */
export const F0_TAG_STATUS_VARIANTS = [
  "neutral",
  "info",
  "positive",
  "warning",
  "critical",
] as const

/**
 * Allowed status variant union.
 */
export type F0TagStatusVariant = (typeof F0_TAG_STATUS_VARIANTS)[number]

/**
 * Background/text token classes by status variant.
 */
export const f0TagStatusLevelClasses = {
  neutral: "bg-f0-background-secondary text-f0-foreground-secondary",
  info: "bg-f0-background-info text-f0-foreground-info",
  positive: "bg-f0-background-positive text-f0-foreground-positive",
  warning: "bg-f0-background-warning text-f0-foreground-warning",
  critical: "bg-f0-background-critical text-f0-foreground-critical",
} as const

/**
 * Dot token classes by status variant.
 */
export const f0TagStatusDotClasses = {
  neutral: "bg-f0-icon",
  info: "bg-f0-icon-info",
  positive: "bg-f0-icon-positive",
  warning: "bg-f0-icon-warning",
  critical: "bg-f0-icon-critical",
} as const

/**
 * `F0Tag.Dot` color union.
 */
export type F0TagDotColor = (typeof dotTagColors)[number]

/**
 * Shared low-level props used by `F0TagRoot`.
 */
export interface F0TagProps {
  left?: ReactNode
  text?: string
  right?: ReactNode
  additionalAccessibleText?: string
  info?: string
  onPress?: () => void
  className?: string
  textClassName?: string
  textColor?: TextColor
  hint?: string
  shape?: "rounded" | "square"
}

/**
 * Props for `F0Tag.Dot`.
 */
export type F0TagDotProps = {
  text: string
  additionalAccessibleText?: string
  info?: string
} & ({ color: F0TagDotColor } | { customColor: string })

/**
 * Props for `F0Tag.Raw`.
 */
export type F0TagRawProps = {
  text: string
  additionalAccessibleText?: string
  info?: string
  noBorder?: boolean
  className?: string
} & (
  | {
      icon: IconType
      onlyIcon: true
    }
  | {
      icon?: IconType
      onlyIcon?: boolean
    }
)

/**
 * Props for `F0Tag.Alert`.
 */
export interface F0TagAlertProps {
  text: string
  level: F0TagAlertLevel
  info?: string
}

/**
 * Props for `F0Tag.Status`.
 */
export interface F0TagStatusProps {
  text: string
  variant: F0TagStatusVariant
  additionalAccessibleText?: string
}

/**
 * Props for `F0Tag.Person`.
 */
export interface F0TagPersonProps {
  src?: string
  name: string
  deactivated?: boolean
}

/**
 * Props for `F0Tag.Team`.
 */
export interface F0TagTeamProps {
  name: string
  src?: string
}

/**
 * Props for `F0Tag.Company`.
 */
export interface F0TagCompanyProps {
  name: string
  src?: string
}

/**
 * Supported balance semantic statuses.
 */
export const F0_TAG_BALANCE_STATUSES = [
  "positive",
  "neutral",
  "negative",
] as const

/**
 * Balance semantic status union.
 */
export type BalanceStatus = (typeof F0_TAG_BALANCE_STATUSES)[number]

/**
 * Props for `F0Tag.Balance`.
 */
export interface F0TagBalanceProps {
  invertStatus?: boolean
  hint?: string
  info?: string
  nullText?: string
  amount: F0TagNumericInput | null
  percentage?: F0TagPercentageInput | null
}

/**
 * Flexible numeric input for amount rendering.
 */
export type F0TagNumericInput =
  | number
  | {
      value: number
      decimalPlaces?: number
      locale?: string
      units?: string
      unitsPosition?: "left" | "right"
    }

/**
 * Flexible numeric input for percentage rendering.
 */
export type F0TagPercentageInput =
  | number
  | {
      value: number
      decimalPlaces?: number
      locale?: string
    }
