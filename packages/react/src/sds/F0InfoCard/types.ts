import type { IconType } from "@/components/F0Icon"

export const f0InfoCardVariants = [
  "neutral",
  "info",
  "positive",
  "warning",
  "critical",
] as const

export type F0InfoCardVariant = (typeof f0InfoCardVariants)[number]

export interface F0InfoCardTitle {
  /** Icon displayed to the left of the title text */
  icon: IconType
  /** Primary title text (e.g., "Documents sent for signing") */
  primary: string
  /** Optional secondary line below the primary title (e.g., "1/2 signed · Sent Monday 23, 6:40 PM") */
  secondary?: string
}

export interface F0InfoCardProps {
  /** Title slot: icon + primary line + optional secondary line */
  title: F0InfoCardTitle
  /** Body content rendered below the title */
  body?: React.ReactNode
  /**
   * Color variant of the card background and accent.
   * @default "neutral"
   */
  variant?: F0InfoCardVariant
}
