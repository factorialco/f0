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
] as const

export type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number]
