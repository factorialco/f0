import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"

import { InputFieldProps } from "@/components/F0InputField"
import { Search } from "@/icons/app"
import { Input } from "@/ui/input"

export type F0SearchInputProps = {
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

const F0SearchInput = forwardRef<HTMLInputElement, F0SearchInputProps>(
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
    const input = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => input.current as HTMLInputElement)

    const valueToEmitRef = useRef<string | undefined>(undefined)

    const onChangeLocal = useCallback(
      (value: string) => {
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
      },
      [onChange, threshold, debounceTime]
    )

    return (
      <Input
        key="search-input"
        ref={input}
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
        onClear={() => input.current?.focus()}
        onBlur={onBlur}
        onFocus={onFocus}
        name={props.name}
      />
    )
  }
)

/**
 * F0SearchInput is the writable search field — a single-line text input
 * pre-configured with a search icon, `role="searchbox"`, delayed updates, and
 * an optional minimum-length threshold before emitting changes.
 */
F0SearchInput.displayName = "F0SearchInput"

export { F0SearchInput }
