export type Variant = "neutral" | "info" | "positive" | "warning" | "critical"

export type StatusVariant = Variant

export interface Props {
  text: string
  variant: Variant
  /**
   * Sometimes you need to clarify the status for screen reader users
   * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
   */
  additionalAccesibleText?: string
}
