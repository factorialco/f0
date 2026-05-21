import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"

import { Search } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { Input } from "@/ui/input"
import { InputFieldProps } from "@/components/InputField/InputField"

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

const _F0SearchInput = forwardRef<HTMLInputElement, F0SearchInputProps>(
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

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * F0SearchInput is the writable search field — a single-line text input
 * pre-configured with a search icon, `role="searchbox"`, debouncing, and
 * an optional minimum-length threshold before emitting changes.
 */
export const F0SearchInput = experimentalComponent(
  "F0SearchInput",
  _F0SearchInput
)
