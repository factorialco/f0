import { tv } from "tailwind-variants"

import { F0_TABS_CONTENT_INSETS, type F0TabsContentInset } from "./F0Tabs.types"

const contentInsetClassByToken = {
  sm: "3",
  md: "4",
  lg: "5",
  xl: "6",
  none: "0",
} as const satisfies Record<F0TabsContentInset, string>

const f0TabsContentInsetPaddingClasses = Object.fromEntries(
  F0_TABS_CONTENT_INSETS.map((token) => [
    token,
    `px-${contentInsetClassByToken[token]}`,
  ])
) as Record<F0TabsContentInset, string>

const f0TabsSeparatorContentInsetClasses = Object.fromEntries(
  F0_TABS_CONTENT_INSETS.map((token) => [
    token,
    `left-${contentInsetClassByToken[token]} right-${contentInsetClassByToken[token]}`,
  ])
) as Record<F0TabsContentInset, string>

/**
 * Container for the tab strip.
 * Primary: pt-1 pb-3 creates the 12px gap below the pill for the underline (mirrors web pt-1 pb-3).
 * Secondary: py-1 symmetric, no underline.
 */
export const f0TabsContainerVariants = tv({
  base: "relative flex-row items-center gap-1",
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
 * - `sm`: 12px (legacy default)
 * - `md`: 16px (compact containers)
 * - `lg`: 20px (mobile page gutter)
 * - `xl`: 24px (web parity)
 * - `none`: 0px
 */
export const f0TabsContentInsetVariants = tv({
  variants: {
    contentInset: f0TabsContentInsetPaddingClasses,
  },
  defaultVariants: {
    contentInset: "sm",
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
 * Uses the same token map as `f0TabsContentInsetVariants`.
 */
export const f0TabSeparatorContentInsetVariants = tv({
  variants: {
    contentInset: f0TabsSeparatorContentInsetClasses,
  },
  defaultVariants: {
    contentInset: "sm",
  },
})
