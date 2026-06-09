import { WithDataTestIdProps } from "@/lib/data-testid"

export type ColorToken = `categorical-${number}`

export interface ProgressBarSegment {
  value: number
  color?: ColorToken
}

export interface F0ProgressBarProps extends WithDataTestIdProps {
  segments: ProgressBarSegment[]
  max?: number
}

export interface F0ProgressBarStepsProps extends WithDataTestIdProps {
  total: number
  completed: number
  color?: ColorToken
}

export interface F0ProgressBarDistributionItem {
  label: string
  value: number
  color?: ColorToken
}

export interface F0ProgressBarDistributionProps extends WithDataTestIdProps {
  items: F0ProgressBarDistributionItem[]
}
