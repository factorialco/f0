import { experimentalComponent } from "@/lib/experimental"

import {
  NumberInputInternal,
  NumberInputInternalProps,
  NumberInputPopoverConfig,
} from "./internal"

const privateProps = ["buttonToggle"] as const

export type F0NumberInputProps = Omit<
  NumberInputInternalProps,
  (typeof privateProps)[number]
>

export type { NumberInputPopoverConfig }

const F0NumberInputComponent = (props: F0NumberInputProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as NumberInputInternalProps)

  return <NumberInputInternal {...publicProps} />
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * F0NumberInput is the writable numeric field for forms — a box where the
 * user types a number. For arbitrary text use F0TextInput; for durations
 * (hours/minutes) use F0DurationInput.
 */
export const F0NumberInput = experimentalComponent<
  typeof F0NumberInputComponent
>("F0NumberInput", F0NumberInputComponent)
