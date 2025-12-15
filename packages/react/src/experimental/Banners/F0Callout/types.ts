import { IconType } from "@/components/F0Icon"

export type CalloutAction = {
  label: string
  onClick: () => void
  icon?: IconType
}

export const variants = ["ai", "critical", "positive", "info", "warning"] as const
export type CalloutVariant = (typeof variants)[number]

export interface CalloutInternalProps {
  title: string
  onClose?: () => void
  children: React.ReactNode
  actions?: CalloutAction[]
  variant: CalloutVariant
}
export interface CalloutSkeletonProps {
  compact?: boolean
  variant?: CalloutVariant
}
