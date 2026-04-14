import type { IconType } from "@/components/F0Icon"

export const alertVariantOptions = [
  "info",
  "warning",
  "critical",
  "neutral",
  "positive",
] as const

export type AlertVariant = (typeof alertVariantOptions)[number]

export interface F0AlertProps {
  title: string
  description: string
  action?: {
    label: string
    disabled?: boolean
    onClick: () => void
  }
  link?: {
    label: string
    href: string
  }
  icon?: IconType
  variant?: AlertVariant
}
