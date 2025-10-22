export const inputFieldInheritedProps = [
  "label",
  "placeholder",
  "size",
  "error",
  "disabled",
  "required",
  "clearable",
  "labelIcon",
  "status",
  "hint",
] as const

export type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number]
