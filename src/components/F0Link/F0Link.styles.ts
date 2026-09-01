import { StyleSheet, type ViewStyle } from "react-native"
import { tv } from "tailwind-variants"

import type { IconColor } from "../primitives/F0Icon"
import type { TextColor, TypographyVariant } from "../primitives/F0Text"

import type { F0LinkSize } from "./F0Link.types"

export const f0LinkContainerVariants = tv({
  base: "flex-row items-center self-start gap-0.5",
  variants: {
    variant: {
      link: "",
      unstyled: "",
      mention: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
    },
    disabled: {
      true: "opacity-30",
      false: "",
    },
    pressed: {
      true: "",
      false: "",
    },
    focused: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "mention",
      size: "md",
      className: "rounded px-1.5",
    },
    {
      variant: "mention",
      size: "sm",
      className: "rounded-sm px-1",
    },
    {
      variant: "mention",
      size: "xs",
      className: "rounded-sm px-1",
    },
    {
      variant: "mention",
      pressed: false,
      className: "bg-f0-background-secondary",
    },
    {
      variant: "mention",
      pressed: true,
      className: "bg-f0-background-secondary-hover",
    },
    {
      variant: "mention",
      focused: true,
      className: "border border-f0-border-selected",
    },
    {
      variant: "link",
      focused: true,
      className: "rounded-xs px-0.5",
    },
    {
      variant: "unstyled",
      focused: true,
      className: "rounded-xs px-0.5",
    },
  ],
  defaultVariants: {
    variant: "link",
    size: "md",
    disabled: false,
    pressed: false,
    focused: false,
  },
})

export const f0LinkUnderlineVariants = tv({
  base: "pb-[1px]",
  variants: {
    disabled: {
      true: "border-f0-foreground-disabled",
      false: "",
    },
    pressed: {
      true: "border-f0-foreground",
      false: "",
    },
    focused: {
      true: "border-f0-border-selected",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      pressed: false,
      focused: false,
      className: "border-f0-foreground-secondary",
    },
    {
      disabled: false,
      pressed: false,
      focused: true,
      className: "border-f0-border-selected",
    },
    {
      disabled: false,
      pressed: true,
      focused: false,
      className: "border-f0-foreground",
    },
    {
      disabled: false,
      pressed: true,
      focused: true,
      className: "border-f0-foreground",
    },
  ],
  defaultVariants: {
    disabled: false,
    pressed: false,
    focused: false,
  },
})

export const F0_LINK_UNDERLINE_STYLE: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
}

export const F0_LINK_TEXT_VARIANT_BY_SIZE: Record<
  F0LinkSize,
  TypographyVariant
> = {
  xs: "body-xs-medium",
  sm: "body-sm-medium",
  md: "body-md-medium",
}

export const F0_LINK_TEXT_COLOR_BY_STATE = (disabled: boolean): TextColor =>
  disabled ? "disabled" : "default"

export const F0_LINK_ICON_SIZE_BY_SIZE = {
  xs: "sm",
  sm: "sm",
  md: "sm",
} as const

export const F0_LINK_ICON_COLOR_BY_STATE = (disabled: boolean): IconColor =>
  disabled ? "secondary" : "default"
