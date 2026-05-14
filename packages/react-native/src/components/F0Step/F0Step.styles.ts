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
      // active and completed intentionally share the same token —
      // both represent "user has engaged with this step" and should look identical.
      active: "bg-f0-foreground",
      completed: "bg-f0-foreground",
      pending: "bg-f0-background-tertiary",
    },
  },
})
