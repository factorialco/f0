import { tv } from "tailwind-variants"

export const f0StepGroupVariants = tv({
  base: "w-full flex-row items-center gap-2",
})

export const f0StepRootVariants = tv({
  base: "flex-1 rounded-full",
})

export const f0StepVariants = tv({
  base: "h-1 w-full overflow-hidden rounded-full",
  variants: {
    state: {
      active: "bg-f0-background-bold",
      completed: "bg-f0-background-selected-bold",
      pending: "bg-f0-background-tertiary",
    },
  },
})
