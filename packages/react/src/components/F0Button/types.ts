import { actionButtonVariants, actionSizes } from "@/ui/Action"

export const buttonVariants = actionButtonVariants.filter((variant) => variant !== "ai")
export type ButtonVariant = Exclude<(typeof actionButtonVariants)[number], "ai">

export const buttonSizes = actionSizes
export type ButtonSize = (typeof buttonSizes)[number]
