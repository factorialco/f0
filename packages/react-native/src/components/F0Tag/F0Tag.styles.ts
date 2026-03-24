import { tv } from "tailwind-variants"

export const f0TagRootVariants = tv({
  base: "flex max-w-full min-w-0 shrink flex-row items-center justify-start gap-1",
})

export const f0TagContainerVariants = tv({
  base: "flex max-w-full min-w-0 shrink flex-row items-center justify-start gap-1 overflow-hidden py-0.5 pr-2 text-f0-foreground",
  variants: {
    hasText: {
      true: "",
      false: "aspect-square w-6 items-center justify-center p-1",
    },
    hasLeft: {
      true: "pl-1",
      false: "pl-2",
    },
    pressable: {
      true: "cursor-pointer",
      false: "",
    },
    shape: {
      rounded: "rounded-full",
      square: "rounded-sm",
    },
  },
  defaultVariants: {
    hasText: true,
    hasLeft: false,
    pressable: false,
    shape: "rounded",
  },
})

export const f0TagTextVariants = tv({
  base: "max-w-full shrink",
})

export const f0TagHintVariants = tv({
  base: "max-w-full min-w-0 shrink",
})
