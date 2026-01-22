import {
  DatePickerPopupProps,
  DatePickerValue as DatePickerPopupValue,
} from "@/ui/DatePickerPopup"
import { INPUTFIELD_SIZES, InputFieldProps } from "@/ui/InputField/InputField"

import { InputFieldInheritedProps } from "./types.internal"

export * from "@/ui/DatePickerPopup/types"

export type DatePickerValue = DatePickerPopupValue

export type F0DatePickerProps = Pick<
  DatePickerPopupProps,
  "granularities" | "minDate" | "maxDate" | "presets" | "open" | "onOpenChange"
> & {
  onChange?: (
    value: DatePickerValue | undefined,
    stringValue: string | undefined
  ) => void
  value?: DatePickerValue
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>

export const datepickerSizes = INPUTFIELD_SIZES
