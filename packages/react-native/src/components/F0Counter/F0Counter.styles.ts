import { tv } from "tailwind-variants"

/**
 * Container (pill) variants for `F0Counter`.
 *
 * Sizing and tokens follow the F0-React-Native-Uniwind Figma spec.
 * Only `default` and `primary` have visible borders; `selected` and
 * `notification` are borderless — matching Figma exactly.
 */
export const f0CounterContainerVariants = tv({
  base: "flex items-center justify-center rounded-xs grow-0 overflow-hidden",
  variants: {
    size: {
      md: "min-w-5 p-0.5",
      sm: "min-w-4 px-0.5",
    },
    type: {
      default: "bg-f0-background-secondary border border-f0-border-secondary",
      primary: "border border-f0-border-inverse",
      selected: "bg-f0-background-selected-bold",
      notification: "bg-f0-background-accent-bold",
    },
  },
  defaultVariants: {
    size: "md",
    type: "default",
  },
})
