import { IconType } from "@/components/F0Icon"

export const statuses = [
  "neutral",
  "info",
  "positive",
  "warning",
  "critical",
] as const

export type Variant = (typeof statuses)[number]

export type StatusVariant = Variant

export interface F0TagStatusProps {
  text: string
  variant: Variant
  /**
   * Optional leading icon, rendered inside the tag in place of the status dot.
   * It inherits the variant's semantic color.
   */
  icon?: IconType
  /**
   * Sometimes you need to clarify the status for screen reader users
   * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
   */
  additionalAccessibleText?: string
}
