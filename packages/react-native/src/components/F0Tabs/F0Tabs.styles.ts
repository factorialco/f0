import { tv } from "tailwind-variants"

/**
 * Container for the tab strip.
 * Primary: pt-1 pb-3 creates the 12px gap below the pill for the underline (mirrors web pt-1 pb-3).
 * Secondary: py-1 symmetric, no underline.
 */
export const f0TabsContainerVariants = tv({
  base: "relative flex-row items-center gap-1 px-3",
  variants: {
    secondary: {
      true: "py-1",
      false: "pt-1 pb-3",
    },
  },
  defaultVariants: {
    secondary: false,
  },
})

/**
 * The PressableFeedback IS the pill — same as web's `<span py-1.5 px-3 rounded-md bg-...>`.
 * Active state applies the background color directly on the pressable.
 */
export const f0TabItemVariants = tv({
  base: "items-center justify-center rounded-md px-3 py-1.5",
  variants: {
    active: {
      true: "",
      false: "",
    },
    secondary: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    { active: true, secondary: false, class: "bg-f0-background-tertiary" },
    {
      active: true,
      secondary: true,
      class: "bg-f0-background-inverse-secondary",
    },
  ],
  defaultVariants: {
    active: false,
    secondary: false,
  },
})

/**
 * Underline shown only on primary tabs (secondary=false).
 * Renders as a 1px line pinned to the bottom of the container.
 */
export const f0TabUnderlineClass =
  "absolute bottom-0 h-px rounded-full bg-f0-foreground"

/**
 * Full-width separator at the bottom of the primary container (mirrors web's border div).
 */
export const f0TabSeparatorClass =
  "absolute bottom-0 left-0 right-0 h-px bg-f0-border"
