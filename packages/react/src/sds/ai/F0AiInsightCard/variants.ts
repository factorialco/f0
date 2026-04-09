import { cva } from "cva"

export const cardVariants = cva({
  base: [
    "relative flex flex-col rounded-2xl bg-f1-background",
    "border border-solid border-f1-border-secondary",
    "shadow transition-shadow duration-200",
    "w-[217px] h-[200px] p-4 gap-2",
  ],
  variants: {
    selected: {
      true: "shadow-none",
      false: "hover:shadow-md",
    },
  },
  defaultVariants: {
    selected: false,
  },
})

export const headingVariants = cva({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3",
})

export const descriptionVariants = cva({
  base: "text-sm text-f1-foreground-secondary leading-normal",
})

export const labelVariants = cva({
  base: "text-sm font-medium text-f1-foreground leading-normal",
})
