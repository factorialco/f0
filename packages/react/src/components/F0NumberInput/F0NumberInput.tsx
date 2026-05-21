import { forwardRef } from "react"

import { NumberInputInternal, NumberInputInternalProps } from "./internal"

const privateProps = ["buttonToggle"] as const

export type F0NumberInputProps = Omit<
  NumberInputInternalProps,
  (typeof privateProps)[number]
>

/**
 * F0NumberInput is the writable numeric field for forms — a box where the
 * user types a number. For arbitrary text use F0TextInput; for durations
 * (hours/minutes) use F0DurationInput.
 */
export const F0NumberInput = forwardRef<HTMLInputElement, F0NumberInputProps>(
  function F0NumberInput(props, ref) {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as NumberInputInternalProps)

    return <NumberInputInternal {...publicProps} ref={ref} />
  }
)

F0NumberInput.displayName = "F0NumberInput"
