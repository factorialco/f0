import { GranularityDefinitionKey } from "@/experimental/OneCalendar/granularities"
import {
  DatePickerPopupProps,
  DatePickerValue as DatePickerPopupValue,
} from "@/ui/DatePickerPopup"
import { InputFieldProps } from "@/ui/InputField/InputField"

export * from "@/ui/DatePickerPopup/types"

export type DatePickerValue = DatePickerPopupValue & {
  value?: Date | string | undefined
  granularity?: GranularityDefinitionKey
}

export type F0DatePickerProps = Omit<
  DatePickerPopupProps,
  "children" | "onSelect" | "value" | "defaultValue"
> & {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
  onChange?: (
    simpleValue: Date | string | undefined,
    value: DatePickerValue | undefined
  ) => void
  value?: DatePickerValue | Date | string | undefined
} & Omit<InputFieldProps<string>, "onChange" | "onBlur" | "onFocus" | "icon">
