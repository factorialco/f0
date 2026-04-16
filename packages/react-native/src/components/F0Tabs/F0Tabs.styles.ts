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
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    secondary: false,
    fullWidth: false,
  },
})

/**
 * Horizontal content inset tokens for tabs.
 * - `lg`: 24px (web parity)
 * - `md`: 20px (mobile page gutter)
 * - `sm`: 16px (compact containers)
 * - `none`: 0px
 */
export const f0TabsContentInsetVariants = tv({
  variants: {
    contentInset: {
      lg: "px-6",
      md: "px-5",
      sm: "px-4",
      none: "px-0",
    },
  },
  defaultVariants: {
    contentInset: "lg",
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
    fullWidth: {
      true: "flex-1",
      false: "",
    },
    disabled: {
      true: "opacity-50",
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
    fullWidth: false,
    disabled: false,
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
export const f0TabSeparatorVariants = tv({
  base: "absolute bottom-0 h-px bg-f0-border",
  variants: {
    inset: {
      full: "left-0 right-0",
      content: "",
    },
  },
  defaultVariants: {
    inset: "full",
  },
})

/**
 * Content-aligned separator inset tokens.
 * Keep in sync with `f0TabsContentInsetVariants`.
 */
export const f0TabSeparatorContentInsetVariants = tv({
  variants: {
    contentInset: {
      lg: "left-6 right-6",
      md: "left-5 right-5",
      sm: "left-4 right-4",
      none: "left-0 right-0",
    },
  },
  defaultVariants: {
    contentInset: "lg",
  },
})
