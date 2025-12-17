export const modalPositions = ["center", "left", "right", "fullscreen"] as const
export type ModalPosition = (typeof modalPositions)[number]

export const modalWidths = ["sm", "md", "lg"] as const
export type ModalWidth = (typeof modalWidths)[number]
