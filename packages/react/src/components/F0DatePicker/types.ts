import { INPUTFIELD_SIZES, InputFieldProps } from "@/components/F0InputField"
import { GranularityDefinitionKey } from "@/components/OneCalendar/granularities"
import { DateStringFormat } from "@/components/OneCalendar/granularities/types"
import {
  DatePickerPopupProps,
  DatePickerValue as DatePickerPopupValue,
} from "@/ui/DatePickerPopup"
import { InputFieldInheritedProps } from "./types.internal"

export * from "@/ui/DatePickerPopup/types"

export type DatePickerValue = DatePickerPopupValue

export const datePickerModes = ["edit", "read"] as const

/**
 * How the picker presents its value.
 * - `"edit"`: the date input field.
 * - `"read"`: the date as text, with its actions revealed on hover or focus.
 */
export type DatePickerMode = (typeof datePickerModes)[number]

export type F0DatePickerProps = Pick<
  DatePickerPopupProps,
  | "minDate"
  | "maxDate"
  | "presets"
  | "open"
  | "onOpenChange"
  | "selectOnCellOnly"
> & {
  /** The picker has no `periods` prop, so it can only offer the calendar granularities. */
  granularities?: GranularityDefinitionKey[]
  showIcon?: boolean
  /** Controls how the selected date is displayed in the input. Defaults to "long" (e.g. "01 Aug 2025"). Use "default" for dd/MM/yyyy. */
  displayFormat?: DateStringFormat
  onChange?: (
    value: DatePickerValue | undefined,
    stringValue: string | undefined
  ) => void
  value?: DatePickerValue
  /**
   * Whether the picker shows the input field or the date as text. Defaults to
   * `"edit"`. In `"read"` mode `displayFormat` defaults to `"default"`
   * (dd/MM/yyyy) and the picker returns to reading once the popup closes.
   */
  mode?: DatePickerMode
  /** Called whenever the picker moves between reading and editing. */
  onModeChange?: (mode: DatePickerMode) => void
  /**
   * Whether the reader may change the date. In `"read"` mode `false` drops the
   * edit action, leaving `onRequestChange` as the only way to ask for a change.
   * Defaults to `true`.
   */
  canEdit?: boolean
  /**
   * Asks whoever administers the record to change the date. In `"read"` mode it
   * renders as an action next to the value, and only while `canEdit` is false —
   * someone who can edit the date has no reason to request it.
   */
  onRequestChange?: () => void
  /** What `"read"` mode shows in place of an empty date. Defaults to `date.none`. */
  emptyLabel?: string
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>

export const datepickerSizes = INPUTFIELD_SIZES
