import { GranularityDefinitionKey } from "@/components/OneCalendar/granularities"
import { DateStringFormat } from "@/components/OneCalendar/granularities/types"
import {
  DatePickerPopupProps,
  DatePickerValue as DatePickerPopupValue,
} from "@/ui/DatePickerPopup"
import { INPUTFIELD_SIZES, InputFieldProps } from "@/components/F0InputField"

import { InputFieldInheritedProps } from "./types.internal"

export * from "@/ui/DatePickerPopup/types"

export type DatePickerValue = DatePickerPopupValue

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
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>

export const datepickerSizes = INPUTFIELD_SIZES
