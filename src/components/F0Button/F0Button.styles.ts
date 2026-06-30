import { tv } from "tailwind-variants"

import type { IconColor } from "../primitives/F0Icon"
import type { TextColor } from "../primitives/F0Text"

import type { ButtonSize, ButtonVariant } from "./F0Button.types"

/**
 * Horizontal padding classes per size, accounting for asymmetric padding
 * when an icon is present next to a visible label.
 *
 * When an icon sits on one side, that side gets less padding to keep the
 * icon optically centered with respect to the button edge:
 * - sm: 2px less on the icon side
 * - md/lg: 4px less on the icon side
 */
const ICON_PADDING = {
  sm: { left: "pl-1.5 pr-2", right: "pl-2 pr-1.5" },
  md: { left: "pl-2 pr-3", right: "pl-3 pr-2" },
  lg: { left: "pl-3 pr-4", right: "pl-4 pr-3" },
} as const

const DEFAULT_PADDING = {
  sm: "px-2",
  md: "px-3",
  lg: "px-4",
} as const

export const getButtonPadding = (
  size: ButtonSize,
  icon: boolean,
  hideLabel: boolean,
  round: boolean,
  iconPosition: "left" | "right"
): string => {
  if (round) return ""
  if (!icon || hideLabel) return DEFAULT_PADDING[size]
  return ICON_PADDING[size][iconPosition]
}

export const buttonVariants = tv({
  base: "flex-row items-center justify-center rounded border-none grow-0",
  variants: {
    variant: {
      default: "bg-f0-background-accent-bold",
      outline: "bg-f0-background-inverse-secondary border border-f0-border",
      neutral: "bg-f0-background-secondary",
      critical: "bg-f0-background-secondary border border-f0-border",
      ghost: "bg-transparent",
      promote: "bg-f0-background-promote border border-f0-border-promote",
    },
    size: {
      sm: "h-7 rounded-sm",
      md: "h-9 rounded",
      lg: "h-11 rounded-md",
    },
    disabled: {
      true: "opacity-50",
      false: "",
    },
    round: {
      true: "aspect-square p-0",
      false: "gap-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
    round: false,
  },
})

export const pressedVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "bg-f0-background-accent-bold-hover",
      outline: "bg-f0-background-tertiary border-opacity-70",
      neutral: "bg-f0-background-secondary-hover",
      critical: "bg-f0-background-critical-bold border-transparent",
      ghost: "bg-f0-background-secondary-hover",
      promote: "bg-f0-background-promote-hover",
    },
    isDark: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      isDark: true,
      class: "bg-f0-background-inverse-secondary",
    },
  ],
  defaultVariants: {
    variant: "default",
    isDark: false,
  },
})

export const loadingContentVariants = tv({
  variants: {
    loading: {
      true: "opacity-0",
      false: "opacity-100",
    },
  },
  defaultVariants: {
    loading: false,
  },
})

export const loadingIndicatorVariants = tv({
  base: "rounded-full border-solid border-t-transparent",
  variants: {
    variant: {
      default: "border-f0-foreground-inverse",
      outline: "border-f0-foreground",
      neutral: "border-f0-foreground",
      critical: "border-f0-icon-critical",
      ghost: "border-f0-foreground",
      promote: "border-f0-icon-promote",
    },
    size: {
      sm: "h-3 w-3 border",
      md: "h-4 w-4 border-2",
      lg: "h-5 w-5 border-2",
    },
    isDark: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      isDark: true,
      class: "border-f0-foreground-inverse",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    isDark: false,
  },
})

export const getIconColor = (
  variant: ButtonVariant,
  isPressed: boolean,
  isDark: boolean = false
): IconColor => {
  if (isDark && variant === "ghost") return "inverse"

  switch (variant) {
    case "default":
      return "inverse"
    case "critical":
      return isPressed ? "inverse" : "critical-bold"
    default:
      return "default"
  }
}

export const getIconOnlyColor = (
  variant: ButtonVariant,
  isPressed: boolean,
  isDark: boolean = false
): IconColor => {
  if (isDark && variant === "ghost") return "inverse"

  switch (variant) {
    case "critical":
      return isPressed ? "inverse" : "critical-bold"
    case "default":
      return "inverse"
    case "outline":
    case "neutral":
    case "ghost":
    case "promote":
    default:
      return "bold"
  }
}

export const getTextColor = (
  variant: ButtonVariant,
  isPressed: boolean,
  isDark: boolean = false
): TextColor => {
  if (isDark && variant === "ghost") return "inverse"

  if (isPressed && variant === "critical") {
    return "inverse"
  }

  switch (variant) {
    case "default":
      return "inverse"
    case "critical":
      return "critical"
    default:
      return "default"
  }
}
