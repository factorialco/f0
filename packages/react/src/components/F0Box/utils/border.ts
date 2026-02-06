import type {
  BorderColorToken,
  BorderRadiusToken,
  BorderWidthToken,
} from "../types"

export const borderVariants = {
  // -- Color --
  borderColor: {
    default: "border-f1-border",
    secondary: "border-f1-border-secondary",
    bold: "border-f1-border-bold",
    selected: "border-f1-border-selected",
    "selected-bold": "border-f1-border-selected-bold",
    critical: "border-f1-border-critical",
    "critical-bold": "border-f1-border-critical-bold",
    warning: "border-f1-border-warning",
    "warning-bold": "border-f1-border-warning-bold",
    info: "border-f1-border-info",
    "info-bold": "border-f1-border-info-bold",
    positive: "border-f1-border-positive",
    "positive-bold": "border-f1-border-positive-bold",
    promote: "border-f1-border-promote",
  } satisfies Record<BorderColorToken, string>,

  // -- Width (all sides) --
  border: {
    none: "border-0",
    default: "border border-solid",
    thick: "border-2 border-solid",
  } satisfies Record<BorderWidthToken, string>,

  // -- Width per side (includes border-0 reset so only the specified side shows) --
  borderTop: {
    none: "border-t-0",
    default: "border-0 border-t border-solid",
    thick: "border-0 border-t-2 border-solid",
  } satisfies Record<BorderWidthToken, string>,

  borderBottom: {
    none: "border-b-0",
    default: "border-0 border-b border-solid",
    thick: "border-0 border-b-2 border-solid",
  } satisfies Record<BorderWidthToken, string>,

  borderLeft: {
    none: "border-l-0",
    default: "border-0 border-l border-solid",
    thick: "border-0 border-l-2 border-solid",
  } satisfies Record<BorderWidthToken, string>,

  borderRight: {
    none: "border-r-0",
    default: "border-0 border-r border-solid",
    thick: "border-0 border-r-2 border-solid",
  } satisfies Record<BorderWidthToken, string>,

  // -- Radius (all corners) --
  borderRadius: {
    none: "rounded-none",
    "2xs": "rounded-2xs",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  } satisfies Record<BorderRadiusToken, string>,

  // -- Radius per corner --
  borderRadiusTopLeft: {
    none: "rounded-tl-none",
    "2xs": "rounded-tl-2xs",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    full: "rounded-tl-full",
  } satisfies Record<BorderRadiusToken, string>,

  borderRadiusTopRight: {
    none: "rounded-tr-none",
    "2xs": "rounded-tr-2xs",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    full: "rounded-tr-full",
  } satisfies Record<BorderRadiusToken, string>,

  borderRadiusBottomLeft: {
    none: "rounded-bl-none",
    "2xs": "rounded-bl-2xs",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    full: "rounded-bl-full",
  } satisfies Record<BorderRadiusToken, string>,

  borderRadiusBottomRight: {
    none: "rounded-br-none",
    "2xs": "rounded-br-2xs",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    full: "rounded-br-full",
  } satisfies Record<BorderRadiusToken, string>,
}

export const borderDefaults = {}
