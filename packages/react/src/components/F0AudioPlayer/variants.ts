import { cva } from "cva"

export const timeVariants = cva({
  base: "shrink-0 font-medium tabular-nums text-f1-foreground-secondary",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
    },
  },
})
