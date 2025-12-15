import { Input } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField/InputField"
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react"
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
    const input = useRef<HTMLInputElement>(null)

    const interval = useRef<NodeJS.Timeout | null>(null)

    useImperativeHandle(ref, () => input.current as HTMLInputElement)

    useEffect(() => {
      if (!props.autoFocus) {
        if (interval.current) {
          clearInterval(interval.current)
        }
        return
      }

      interval.current = setInterval(() => {
        input.current?.focus()
      }, 50)

      return () => {
        if (interval.current) {
          clearInterval(interval.current)
        }
      }
    }, [props.autoFocus])

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
                input.current?.focus()
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
        tabIndex={-1}
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
