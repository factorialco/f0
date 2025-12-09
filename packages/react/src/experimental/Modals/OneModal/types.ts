export type ModalPosition = "center" | "left" | "right" | "fullscreen"

export type ContentPadding = "sm" | "md"

export const modalWidths = ["sm", "md", "lg"] as const

export type ModalWidth = (typeof modalWidths)[number]
