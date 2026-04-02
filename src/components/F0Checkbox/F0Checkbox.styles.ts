import { tv } from "tailwind-variants"

export const checkboxBoxVariants = tv({
  base: "w-6 h-6 rounded-sm items-center justify-center border border-solid overflow-hidden",
  variants: {
    checked: {
      true: "bg-f0-background-selected-bold border-f0-border-selected-bold",
      false: "bg-f0-background border-f0-border",
    },
    disabled: {
      true: "opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
  },
})

export const checkboxRowVariants = tv({
  base: "flex-row items-center gap-2",
})
