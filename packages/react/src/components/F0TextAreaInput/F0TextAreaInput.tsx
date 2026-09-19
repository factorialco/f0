import { ComponentProps, forwardRef } from "react"
import type { InlineDismissReason } from "@/components/F0InputField"
import { Component } from "@/lib/component/component"
import { Textarea as ShadcnTextarea } from "@/ui/textarea"

type F0TextAreaInputBaseProps = Pick<
  ComponentProps<typeof ShadcnTextarea>,
  | "disabled"
  | "onChange"
  | "value"
  | "placeholder"
  | "rows"
  | "cols"
  | "label"
  | "labelIcon"
  | "icon"
  | "hideLabel"
  | "maxLength"
  | "clearable"
  | "onBlur"
  | "onFocus"
  | "name"
  | "status"
  | "hint"
  | "error"
  | "size"
  | "loading"
  | "required"
  | "maxHeight"
  | "autoFocus"
>

export type F0TextAreaInputFieldProps = F0TextAreaInputBaseProps & {
  variant?: "field"
  editing?: never
  onDismiss?: never
}

export type F0TextAreaInputInlineProps = F0TextAreaInputBaseProps & {
  variant: "inline"
  editing?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

export type F0TextAreaInputProps =
  | F0TextAreaInputFieldProps
  | F0TextAreaInputInlineProps

/**
 * A newline is what Enter means in a textarea, so the inline editor commits on
 * Cmd/Ctrl+Enter and lets a bare Enter type.
 */
const TextAreaInputInternal = forwardRef<
  HTMLTextAreaElement,
  F0TextAreaInputProps
>(function TextAreaInputInternal(props, ref) {
  const { variant, editing, onDismiss, ...rest } =
    props as F0TextAreaInputInlineProps

  if (variant !== "inline") {
    return <ShadcnTextarea {...rest} ref={ref} />
  }

  return (
    <ShadcnTextarea
      {...rest}
      ref={ref}
      variant="inline"
      editing={editing ?? false}
      autoFocus={rest.autoFocus ?? true}
      // One line, so a single-line value opens at the height it read at.
      rows={rest.rows ?? 1}
      onKeyDown={(event) => {
        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          onDismiss?.("commit")
        }
        if (event.key === "Escape") {
          onDismiss?.("escape")
        }
      }}
      onBlur={(event) => {
        rest.onBlur?.(event)
        onDismiss?.("blur")
      }}
    />
  )
})

/**
 * F0TextAreaInput is the writable multi-line text field for forms — a box
 * where the user types longer text spanning multiple lines (notes,
 * descriptions, comments). For a single line of text use F0TextInput.
 *
 * `variant="inline"` is the detail-row presentation: the value prints as
 * wrapped multi-line text until the row hands it `editing`, and the editor
 * takes over in the same box at the same inset.
 */
export const F0TextAreaInput = Component<
  HTMLTextAreaElement,
  F0TextAreaInputProps & React.RefAttributes<HTMLTextAreaElement>
>(
  {
    name: "F0TextAreaInput",
    type: "form",
  },
  TextAreaInputInternal
)
