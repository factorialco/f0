export * from "@/ui/textarea"
import { ComponentProps } from "react"

import { experimentalComponent } from "@/lib/experimental"
import { Textarea as ShadcnTextarea } from "@/ui/textarea"

import { Component } from "../../../../lib/component/component"

export type TextareaProps = Pick<
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
>

const _Textarea: React.FC<TextareaProps> = Component(
  {
    name: "Textarea",
    type: "form",
  },
  ShadcnTextarea
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Textarea = experimentalComponent("Textarea", _Textarea)
