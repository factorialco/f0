import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"

import { Search } from "@/icons/app"
import { Input } from "@/ui/input"
import { InputFieldProps } from "@/components/F0InputField"

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

    // Take focus when `autoFocus` turns on: on mount, and again whenever it
    // flips back to true on an input that is already mounted — F0Select toggles
    // it while its filters panel is open, and React's native `autoFocus` only
    // fires when the DOM node is created, so it cannot cover that transition.
    //
    // No timer, and none is needed: effects run child-before-parent, so this
    // input holds focus before any ancestor's open-focus effect runs, and
    // SelectContentImpl now leaves an already-focused descendant alone.
    useEffect(() => {
      if (!props.autoFocus || props.disabled) return
      input.current?.focus()
    }, [props.autoFocus, props.disabled])

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
                const shouldRestoreFocus =
                  document.activeElement === input.current
                onChange(valueToEmitRef.current)
                if (shouldRestoreFocus) {
                  input.current?.focus()
                }
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
        clearable={clearable}
        onBlur={onBlur}
        onFocus={onFocus}
        name={props.name}
      />
    )
  }
)

/**
 * F0SearchInput is the writable search field — a single-line text input
 * pre-configured with a search icon, `role="searchbox"`, debouncing, and
 * an optional minimum-length threshold before emitting changes.
 */
F0SearchInput.displayName = "F0SearchInput"

export { F0SearchInput }
