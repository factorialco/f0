import { forwardRef } from "react"
import type { InlineDismissReason } from "@/components/F0InputField"
import { InputInternal, type InputInternalProps } from "./internal"

const privateProps = ["buttonToggle", "onPressEscape"] as const

type F0TextInputBaseProps = Omit<
  InputInternalProps,
  (typeof privateProps)[number] | "variant" | "editing"
>

export type F0TextInputFieldProps = F0TextInputBaseProps & {
  variant?: "field"
  editing?: never
  onDismiss?: never
}

export type F0TextInputInlineProps = F0TextInputBaseProps & {
  variant: "inline"
  editing?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

export type F0TextInputProps = F0TextInputFieldProps | F0TextInputInlineProps

const _F0TextInput = forwardRef<HTMLInputElement, F0TextInputProps>(
  function F0TextInput(props, ref) {
    const { variant, editing, onDismiss, ...rest } =
      props as F0TextInputInlineProps

    const publicProps = privateProps.reduce<InputInternalProps>((acc, key) => {
      const { [key]: _, ...restProps } = acc
      return restProps
    }, rest)

    if (variant !== "inline") {
      return <InputInternal {...publicProps} ref={ref} />
    }

    return (
      <InputInternal
        {...publicProps}
        ref={ref}
        variant="inline"
        editing={editing ?? false}
        autoFocus={publicProps.autoFocus ?? true}
        onPressEnter={() => {
          publicProps.onPressEnter?.()
          onDismiss?.("commit")
        }}
        onPressEscape={() => onDismiss?.("escape")}
        onBlur={() => {
          publicProps.onBlur?.()
          onDismiss?.("blur")
        }}
      />
    )
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
