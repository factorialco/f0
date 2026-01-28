import type { IconType } from "@/components/F0Icon"

export type AlertVariant =
  | "info"
  | "warning"
  | "critical"
  | "neutral"
  | "positive"

export interface F0AlertProps {
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  link?: {
    label: string
    href: string
  }
  icon?: IconType
  variant: AlertVariant
}
