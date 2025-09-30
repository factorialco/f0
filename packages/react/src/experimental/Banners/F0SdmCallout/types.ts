import { IconType } from "@/components/F0Icon"

export type SdmCalloutAction = {
  label: string
  onClick: () => void
  icon?: IconType
}

export const variants = [
  "default",
  "critical",
  "positive",
  "info",
  "warning",
] as const
export type SdmCalloutVariant = (typeof variants)[number]

export interface SdmCalloutInternalProps {
  title: string
  onClose?: () => void
  content: string
  primaryAction?: SdmCalloutAction
  secondaryAction?: SdmCalloutAction
  variant?: SdmCalloutVariant
}
export interface SdmCalloutSkeletonProps {
  compact?: boolean
  variant?: SdmCalloutVariant
}
