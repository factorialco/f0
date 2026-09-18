import { cva } from "cva"

export const INPUTFIELD_SIZES = ["sm", "md"] as const
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[number]

export const inputElementVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "py-1",
      md: "py-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const inputFieldVariants = cva({
  base: "",
  variants: {
    canGrow: {
      true: "flex-1",
      false: "flex-none",
    },
    size: {
      sm: "rounded",
      md: "rounded-md",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      canGrow: true,
      class: "min-h-8",
    },
    {
      size: "md",
      canGrow: true,
      class: "min-h-10",
    },
    {
      size: "sm",
      canGrow: false,
      class: "h-8",
    },
    {
      size: "md",
      canGrow: false,
      class: "h-10",
    },
  ],
  defaultVariants: {
    size: "md",
    canGrow: false,
  },
})
