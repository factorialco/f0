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
 * Which half of the inline variant the picker is showing.
 * - `"read"`: the date as text.
 * - `"edit"`: the input, with the calendar open.
 */
export type DatePickerMode = (typeof datePickerModes)[number]

/** Props shared by the default and inline picker variants. */
export type F0DatePickerSharedProps = Pick<
  DatePickerPopupProps,
  "minDate" | "maxDate" | "presets" | "onOpenChange" | "selectOnCellOnly"
> & {
  /** The picker has no `periods` prop, so it can only offer the calendar granularities. */
  granularities?: GranularityDefinitionKey[]
  /** Controls how the selected date is displayed in the input. Defaults to "long" (e.g. "01 Aug 2025"). Use "default" for dd/MM/yyyy. */
  displayFormat?: DateStringFormat
  onChange?: (
    value: DatePickerValue | undefined,
    stringValue: string | undefined
  ) => void
  value?: DatePickerValue
}

export type F0DatePickerDefaultProps = F0DatePickerSharedProps &
  Pick<DatePickerPopupProps, "open"> & {
    /** Standard form-field presentation. This remains the default. */
    variant?: "default"
    showIcon?: boolean
    onRequestChange?: never
    onModeChange?: never
  } & Pick<InputFieldProps<string>, InputFieldInheritedProps>

export type F0DatePickerInlineProps = F0DatePickerSharedProps &
  Pick<InputFieldProps<string>, "label" | "placeholder"> & {
    /**
     * Borderless presentation for a date embedded in a record row: the value
     * sits where a read-only row would print it, and the calendar arrives only
     * on hover or focus. The required label is the accessible name and is not
     * shown visually. Activating the row swaps in the input with the calendar
     * open, and dismissing it puts the date back to text.
     */
    variant: "inline"
    /**
     * The date cannot be changed here, so activating it does nothing and the
     * calendar never appears. Pass `onRequestChange` alongside it to offer a
     * way to ask for the change instead; without one the date is inert text.
     */
    readonly?: boolean
    /**
     * Asks whoever administers the record to change the date. Renders as the
     * row's action, and only while `readonly` — someone who can set the date
     * has no reason to request it.
     */
    onRequestChange?: () => void
    /** Called whenever the row moves between reading the date and editing it. */
    onModeChange?: (mode: DatePickerMode) => void
    open?: never
    showIcon?: never
    size?: never
    className?: never
    hideLabel?: never
    labelIcon?: never
    clearable?: never
    transparent?: never
    required?: never
    loading?: never
    disabled?: never
    error?: never
    status?: never
    hint?: never
  }

export type F0DatePickerProps =
  | F0DatePickerDefaultProps
  | F0DatePickerInlineProps

export const datepickerSizes = INPUTFIELD_SIZES
