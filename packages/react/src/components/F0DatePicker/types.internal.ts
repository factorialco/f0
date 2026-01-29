export const inputFieldInheritedProps = [
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
] as const

export type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number]
