export const buttonToggleSizes = ["sm", "md", "lg"] as const
export type ButtonToggleSize = (typeof buttonToggleSizes)[number]

export const buttonToggleVariants = ["compact", "expanded"] as const
export type ButtonToggleVariant = (typeof buttonToggleVariants)[number]
