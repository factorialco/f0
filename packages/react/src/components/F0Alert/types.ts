import type { IconType } from "@/components/F0Icon"
import type { TestableProps } from "@/global.types"

export type AlertVariant =
  | "info"
  | "warning"
  | "critical"
  | "neutral"
  | "positive"

export interface F0AlertProps extends TestableProps {
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
