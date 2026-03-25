export const F0_PROGRESS_TYPES = ["linear", "circular"] as const
export const F0_PROGRESS_CIRCULAR_SIZES = ["default", "small"] as const
export const F0_PROGRESS_STATUSES = [
  "info",
  "positive",
  "warning",
  "critical",
] as const

export type F0ProgressType = (typeof F0_PROGRESS_TYPES)[number]
export type F0ProgressValue = number
export type F0ProgressMax = number
export type F0ProgressCircularSize = (typeof F0_PROGRESS_CIRCULAR_SIZES)[number]
export type F0ProgressStatus = (typeof F0_PROGRESS_STATUSES)[number]

export interface F0ProgressProps {
  type: F0ProgressType
  value: F0ProgressValue
  max?: F0ProgressMax
  size?: F0ProgressCircularSize
  status?: F0ProgressStatus
  label?: string
  accessibilityLabel?: string
  testID?: string
}
