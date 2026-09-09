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
  // The value controls every writable F0 input inherits. `masked` is one of
  // them: a date of birth is a governed value like any other.
  "copyable",
  "masked",
  "onEdit",
  "onRequestChange",
  "actionsVisibility",
  "confirmed",
] as const

export type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number]
