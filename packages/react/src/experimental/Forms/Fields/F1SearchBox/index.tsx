import { Input } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField/InputField"
import { forwardRef, useRef } from "react"
import { Search } from "../../../../icons/app"

type F1SearchBoxProps = {
  value?: string
  threshold?: number
  debounceTime?: number
  autoFocus?: boolean
} & Pick<
  InputFieldProps<string>,
  | "size"
  | "loading"
  | "clearable"
  | "placeholder"
  | "disabled"
  | "onBlur"
  | "onFocus"
  | "onChange"
  | "name"
>

const F1SearchBox = forwardRef<HTMLInputElement, F1SearchBoxProps>(
  (
    {
      value,
      threshold = 0,
      onChange,
      onBlur,
      onFocus,
      size = "sm",
      debounceTime = 0,
      clearable = false,
      ...props
    },
    ref
  ) => {
    const valueToEmitRef = useRef<string | undefined>(undefined)

    const onChangeLocal = (value: string) => {
      if (
        onChange &&
        // It should emit the change when the user clears the field
        (value.length >= threshold || value.length === 0)
      ) {
        // Debounces the onChange callback
        if (valueToEmitRef.current === undefined) {
          setTimeout(() => {
            if (valueToEmitRef.current !== undefined) {
              onChange(valueToEmitRef.current)
            }
            valueToEmitRef.current = undefined
          }, debounceTime)
        }
        valueToEmitRef.current = value
      }
    }

    return (
      <Input
        ref={ref}
        type="search"
        icon={Search}
        value={value}
        label={props.placeholder ?? "Search"}
        hideLabel
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={onChangeLocal}
        role="searchbox"
        size={size}
        autoFocus={props.autoFocus}
        clearable={clearable}
        onBlur={onBlur}
        onFocus={onFocus}
        name={props.name}
      />
    )
  }
)

// Add display name for better debugging
F1SearchBox.displayName = "F1SearchBox"

export { F1SearchBox }
