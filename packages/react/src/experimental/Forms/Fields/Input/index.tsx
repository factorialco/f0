import { Input as ShadcnInput } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField"
import { ComponentProps, HTMLInputTypeAttribute } from "react"

export type InputProps<T extends string> = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref"
> &
  Pick<
    InputFieldProps<T>,
    | "autoFocus"
    | "required"
    | "disabled"
    | "size"
    | "onChange"
    | "value"
    | "placeholder"
    | "clearable"
    | "maxLength"
    | "label"
    | "labelIcon"
    | "icon"
    | "hideLabel"
    | "name"
    | "error"
    | "status"
    | "hint"
  > & {
    type?: Exclude<HTMLInputTypeAttribute, "number">
  }

const Input = <T extends string = string>(props: InputProps<T>) => {
  return (
    <ShadcnInput
      {...props}
      onChange={(value) => props.onChange?.(value as T)}
    />
  )
}

export { Input }
