import { tv } from "tailwind-variants"

export const metadataContainerVariants = tv({
  base: "flex",
  variants: {
    orientation: {
      vertical: "flex-col gap-3",
      horizontal: "flex-row flex-wrap gap-x-6 gap-y-3",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

export const metadataItemVariants = tv({
  base: "flex",
  variants: {
    orientation: {
      vertical: "flex-col gap-0.5",
      horizontal: "min-h-8 flex-row items-center gap-2",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

export const metadataLabelVariants = tv({
  base: "",
  variants: {
    orientation: {
      vertical: "",
      horizontal: "w-28 shrink-0",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})
