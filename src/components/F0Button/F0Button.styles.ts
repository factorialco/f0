import { tv } from "tailwind-variants"

import type { IconColor } from "../primitives/F0Icon"
import type { TextColor } from "../primitives/F0Text"

import type { ButtonVariant } from "./F0Button.types"

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
      false: "gap-1 px-2 sm:px-3 lg:px-4",
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
  },
  defaultVariants: {
    variant: "default",
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
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export const getIconColor = (
  variant: ButtonVariant,
  isPressed: boolean
): IconColor => {
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
  isPressed: boolean
): IconColor => {
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
  isPressed: boolean
): TextColor => {
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
