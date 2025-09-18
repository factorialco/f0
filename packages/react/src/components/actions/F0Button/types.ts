import { actionSizes, actionVariants } from "@/ui/Action"

export const buttonVariants = actionVariants
export type ButtonVariant = (typeof buttonVariants)[number]

export const buttonSizes = actionSizes
export type ButtonSize = (typeof buttonSizes)[number]
