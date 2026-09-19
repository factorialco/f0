import { forwardRef } from "react"
import type { InlineDismissReason } from "@/components/F0InputField"
import {
  NumberInputInternal,
  NumberInputInternalProps,
  NumberInputPopoverConfig,
} from "./internal"

const privateProps = ["buttonToggle"] as const

type F0NumberInputBaseProps = Omit<
  NumberInputInternalProps,
  (typeof privateProps)[number] | "variant" | "editing" | "onDismiss"
>

export type F0NumberInputFieldProps = F0NumberInputBaseProps & {
  variant?: "field"
  editing?: never
  onDismiss?: never
}

export type F0NumberInputInlineProps = F0NumberInputBaseProps & {
  variant: "inline"
  editing?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

export type F0NumberInputProps =
  | F0NumberInputFieldProps
  | F0NumberInputInlineProps

export type { NumberInputPopoverConfig }

/**
 * F0NumberInput is the writable numeric field for forms — a box where the
 * user types a number. For arbitrary text use F0TextInput; for durations
 * (hours/minutes) use F0DurationInput.
 */
export const F0NumberInput = forwardRef<HTMLInputElement, F0NumberInputProps>(
  function F0NumberInput(props, ref) {
    const { variant, editing, onDismiss, ...rest } =
      props as F0NumberInputInlineProps

    const publicProps = privateProps.reduce<NumberInputInternalProps>(
      (acc, key) => {
        const { [key]: _, ...restProps } = acc
        return restProps
      },
      rest
    )

    if (variant !== "inline") {
      return <NumberInputInternal {...publicProps} ref={ref} />
    }

    return (
      <NumberInputInternal
        {...publicProps}
        ref={ref}
        variant="inline"
        editing={editing ?? false}
        autoFocus={publicProps.autoFocus ?? true}
        onDismiss={onDismiss}
      />
    )
  }
)

F0NumberInput.displayName = "F0NumberInput"
