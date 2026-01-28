import { cva } from "cva"
export const fontSizeVariants = cva({
  variants: {
    fontSize: {
      xs: "text-base",
      sm: "text-base",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { fontSize: "md" },
})
