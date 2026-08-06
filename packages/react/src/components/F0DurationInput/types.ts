import type { InputFieldStatus } from "@/components/F0InputField/types"
import type { AriaAttributes } from "react"

export const durationUnits = ["days", "hours", "minutes", "seconds"] as const
export type DurationUnit = (typeof durationUnits)[number]

export const durationInputSizes = ["sm", "md"] as const
export type DurationInputSize = (typeof durationInputSizes)[number]

export type DurationFields = Record<DurationUnit, number>

export interface DurationFieldConfig {
  suffix?: string
  max?: number
  /**
   * Maximum number of visible digits for this segment input.
   * Defaults to 2 when omitted.
   */
  maxVisibleDigits?: number
  ariaLabel?: string
}

export interface F0DurationInputProps {
  id?: string
  "aria-describedby"?: string
  "aria-invalid"?: AriaAttributes["aria-invalid"]
  label: string
  ariaLabel?: string
  hideLabel?: boolean
  value: number
  onChange: (seconds: number) => void
  /**
   * Allows entering negative durations (e.g. to adjust tracked time).
   * A leading minus sign typed in the first visible segment applies to the
   * whole duration, and `value`/`onChange` carry negative total seconds.
   * Defaults to false.
   */
  allowNegative?: boolean
  onBlur?: () => void
  units?: DurationUnit[]
  fields?: Partial<Record<DurationUnit, DurationFieldConfig>>
  status?: InputFieldStatus
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  size?: DurationInputSize
}
