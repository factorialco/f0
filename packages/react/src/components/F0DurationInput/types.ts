import type { InputFieldStatus } from "@/ui/InputField/types"

export const durationUnits = ["days", "hours", "minutes", "seconds"] as const
export type DurationUnit = (typeof durationUnits)[number]

export const durationInputSizes = ["sm", "md"] as const
export type DurationInputSize = (typeof durationInputSizes)[number]

export type DurationFields = Record<DurationUnit, number>

export interface DurationFieldConfig {
  suffix?: string
  max?: number
  ariaLabel?: string
}

export interface F0DurationInputProps {
  label: string
  hideLabel?: boolean
  value: number
  onChange: (seconds: number) => void
  units?: DurationUnit[]
  fields?: Partial<Record<DurationUnit, DurationFieldConfig>>
  status?: InputFieldStatus
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  size?: DurationInputSize
}
