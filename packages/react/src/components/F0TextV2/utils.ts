import type {
  AlignToken,
  AllowedTag,
  ColorToken,
  DecorationToken,
  SizeToken,
  TransformToken,
  VariantToken,
} from "./types"

// --- Variant ---

export const variantVariants = {
  variant: {
    title: "text-3xl font-semibold",
    heading: "text-xl font-semibold",
    subtitle: "text-lg font-normal",
    body: "text-base font-normal",
    label: "text-base font-medium",
    description: "text-base font-normal",
    caption: "text-sm font-normal",
    code: "text-sm font-normal font-mono",
  } satisfies Record<VariantToken, string>,
}

/** Default HTML tag rendered for each variant */
export const defaultTagMap: Record<VariantToken, AllowedTag> = {
  title: "h2",
  heading: "h3",
  subtitle: "p",
  body: "p",
  label: "label",
  description: "p",
  caption: "span",
  code: "code",
}

/** Variants that default to secondary foreground color */
export const SECONDARY_COLOR_VARIANTS: ReadonlySet<VariantToken> = new Set([
  "description",
  "subtitle",
  "caption",
  "label",
])

// --- Size ---

export const sizeVariants: Record<Exclude<SizeToken, "default">, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
}

// --- Color ---

export const colorVariants: Record<Exclude<ColorToken, "default">, string> = {
  secondary: "text-f1-foreground-secondary",
  tertiary: "text-f1-foreground-tertiary",
  inverse: "text-f1-foreground-inverse",
  "inverse-secondary": "text-f1-foreground-inverse-secondary",
  disabled: "text-f1-foreground-disabled",
  accent: "text-f1-foreground-accent",
  critical: "text-f1-foreground-critical",
  warning: "text-f1-foreground-warning",
  positive: "text-f1-foreground-positive",
  info: "text-f1-foreground-info",
  selected: "text-f1-foreground-selected",
}

// --- Align ---

export const alignVariants = {
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } satisfies Record<AlignToken, string>,
}

export const alignDefaults = {
  align: "left" as const,
}

// --- Decoration ---

export const decorationVariants: Record<
  Exclude<DecorationToken, "none">,
  string
> = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
}

// --- Transform ---

export const transformVariants: Record<
  Exclude<TransformToken, "none">,
  string
> = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
}
