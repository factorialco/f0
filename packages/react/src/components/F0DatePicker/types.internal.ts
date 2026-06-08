export const inputFieldInheritedProps = [
  "className",
  "label",
  "placeholder",
  "hideLabel",
  "size",
  "error",
  "disabled",
  "readonly",
  "required",
  "clearable",
  "labelIcon",
  "status",
  "hint",
  "loading",
  "transparent",
] as const

export type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number]
