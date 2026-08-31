import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"

import { InputFieldProps } from "@/components/F0InputField"
import { Search } from "@/icons/app"
import { Input } from "@/ui/input"

export type F0SearchInputProps = {
  value?: string
  threshold?: number
  debounceTime?: number
  autoFocus?: boolean
  /**
   * Defaults to `-1`, which is right for the search box of a list that is
   * already reachable some other way. A search box that IS the way in — a
   * combobox — has to be tabbable, or focus can leave it and never come back.
   */
  tabIndex?: number
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
  // A search box that drives a list somewhere else on the page is a combobox,
  // not a plain searchbox: it keeps focus while the arrows move a selection it
  // doesn't contain. That needs the whole contract — the role, the keys, and
  // `aria-activedescendant`, which is the only way to announce the active
  // option when focus never moves.
  | "role"
  | "onKeyDown"
  | "aria-controls"
  | "aria-expanded"
  | "aria-activedescendant"
  | "aria-autocomplete"
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
      tabIndex = -1,
      // A default, not a fixed value: a combobox has to be able to say so.
      role = "searchbox",
      onKeyDown,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-activedescendant": ariaActiveDescendant,
      "aria-autocomplete": ariaAutocomplete,
      ...props
    },
    ref
  ) => {
    const input = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => input.current as HTMLInputElement)

    useEffect(() => {
      const element = input.current

      if (
        !props.autoFocus ||
        props.disabled ||
        !element ||
        document.activeElement === element
      ) {
        return
      }

      let timeout: ReturnType<typeof setTimeout> | undefined
      const stopAutoFocus = () => {
        if (timeout !== undefined) {
          clearTimeout(timeout)
          timeout = undefined
        }
        element.removeEventListener("focus", stopAutoFocus)
      }

      element.addEventListener("focus", stopAutoFocus)
      timeout = setTimeout(() => {
        element.focus()
        stopAutoFocus()
      }, 50)

      return () => {
        stopAutoFocus()
      }
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
        tabIndex={tabIndex}
        icon={Search}
        value={value}
        label={props.placeholder ?? "Search"}
        hideLabel
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={onChangeLocal}
        role={role}
        onKeyDown={onKeyDown}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-activedescendant={ariaActiveDescendant}
        aria-autocomplete={ariaAutocomplete}
        size={size}
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
