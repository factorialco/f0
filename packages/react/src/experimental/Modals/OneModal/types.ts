export const modalPositions = ["center", "left", "right", "fullscreen"] as const
export type ModalPosition = (typeof modalPositions)[number]

export const modalContentPaddings = ["sm", "md"] as const
export type ContentPadding = (typeof modalContentPaddings)[number]

export const modalWidths = ["sm", "md", "lg"] as const
export type ModalWidth = (typeof modalWidths)[number]
