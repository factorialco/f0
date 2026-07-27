import { IconType } from "@/components/F0Icon"

export type AiBannerAction = {
  label: string
  onClick: () => void
  icon?: IconType
}

export interface AiBannerInternalProps {
  title: string
  onClose?: () => void
  content: string
  primaryAction?: AiBannerAction
  secondaryAction?: AiBannerAction
}
export interface AiBannerSkeletonProps {
  compact?: boolean
}
