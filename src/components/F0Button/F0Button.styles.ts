import { tv } from "tailwind-variants";

import type { ButtonVariant } from "./F0Button.types";
import type { TextColor } from "../primitives/F0Text/F0Text.types";

/**
 * Base button styles using tailwind-variants.
 * Handles variant, size, disabled, and round states.
 */
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
      sm: "h-6 rounded-sm",
      md: "h-8 rounded",
      lg: "h-10 rounded-md",
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
});

/**
 * Pressed-state overrides per variant.
 * Merged on top of base buttonVariants via cn() when pressed.
 */
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
});

/**
 * Returns the icon className when a label is also visible.
 */
export const getIconColor = (
  variant: ButtonVariant,
  isPressed: boolean,
): string => {
  switch (variant) {
    case "default":
      return "text-f0-icon-inverse";
    case "critical":
      return isPressed ? "text-f0-icon-inverse" : "text-f0-icon-critical-bold";
    default:
      return "text-f0-icon";
  }
};

/**
 * Returns the icon className in icon-only / round mode.
 */
export const getIconOnlyColor = (
  variant: ButtonVariant,
  isPressed: boolean,
): string => {
  switch (variant) {
    case "critical":
      return isPressed ? "text-f0-icon-inverse" : "text-f0-icon-critical-bold";
    case "default":
      return "text-f0-icon-inverse";
    case "outline":
    case "neutral":
    case "ghost":
    case "promote":
    default:
      return "text-f0-icon-bold";
  }
};

/**
 * Returns the semantic TextColor for label / emoji text.
 */
export const getTextColor = (
  variant: ButtonVariant,
  isPressed: boolean,
): TextColor => {
  if (isPressed && variant === "critical") {
    return "inverse";
  }

  switch (variant) {
    case "default":
      return "inverse";
    case "critical":
      return "critical";
    default:
      return "default";
  }
};
