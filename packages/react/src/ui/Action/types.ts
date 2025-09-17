export const actionSizes = ["sm", "md", "lg"] as const
export type ActionSize = (typeof actionSizes)[number]
