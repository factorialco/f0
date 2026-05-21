import { ComponentProps } from "react"

import { experimentalComponent } from "@/lib/experimental"
import { Component } from "@/lib/component/component"
import { Textarea as ShadcnTextarea } from "@/ui/textarea"

export type F0TextAreaInputProps = Pick<
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
>

const _F0TextAreaInput: React.FC<F0TextAreaInputProps> = Component(
  {
    name: "F0TextAreaInput",
    type: "form",
  },
  ShadcnTextarea
)

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * F0TextAreaInput is the writable multi-line text field for forms — a box
 * where the user types longer text spanning multiple lines. For a single
 * line of text use F0TextInput.
 */
export const F0TextAreaInput = experimentalComponent(
  "F0TextAreaInput",
  _F0TextAreaInput
)
