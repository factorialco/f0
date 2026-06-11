import { forwardRef } from "react"

import { InputInternal, type InputInternalProps } from "./internal"

const privateProps = ["buttonToggle"] as const

export type F0TextInputProps = Omit<
  InputInternalProps,
  (typeof privateProps)[number]
>

const _F0TextInput = forwardRef<HTMLInputElement, F0TextInputProps>(
  function F0TextInput(props, ref) {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as InputInternalProps)

    return <InputInternal {...publicProps} ref={ref} />
  }
)

_F0TextInput.displayName = "F0TextInput"

/**
 * F0TextInput is the writable text field for forms — a box where the user
 * types text, passwords, emails, etc. It is the canonical "text input" of
 * F0. For numeric data use F0NumberInput; for durations use F0DurationInput;
 * for queries use F0SearchInput.
 */
export const F0TextInput = _F0TextInput
