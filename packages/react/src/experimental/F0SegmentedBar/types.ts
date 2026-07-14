import { WithDataTestIdProps } from "@/lib/data-testid"

export type SegmentColorToken =
  | `categorical-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
  | "feedback-positive"
  | "feedback-neutral"
  | "feedback-negative"

export interface F0SegmentedBarProps extends WithDataTestIdProps {
  value: number
  max: number
  color?: SegmentColorToken
  label: string
}
