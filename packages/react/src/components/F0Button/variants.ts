import { cva } from "cva"
export const fontSizeVariants = cva({
  variants: {
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { fontSize: "md" },
})
