import { cva, type VariantProps } from "cva"

import type {
  AlignToken,
  AllowedTag,
  ColorToken,
  DecorationToken,
  SizeToken,
  TransformToken,
  VariantToken,
} from "./types"

// ---------------------------------------------------------------------------
// Variant → Tailwind class map
// ---------------------------------------------------------------------------

export const variantClassMap = {
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

// ---------------------------------------------------------------------------
// Default HTML tag per variant
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Variants that default to secondary foreground color
// ---------------------------------------------------------------------------

export const SECONDARY_COLOR_VARIANTS: ReadonlySet<VariantToken> = new Set([
  "description",
  "subtitle",
  "caption",
  "label",
])

// ---------------------------------------------------------------------------
// Size → Tailwind class map
// ---------------------------------------------------------------------------

export const sizeClassMap: Record<Exclude<SizeToken, "default">, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
}

// ---------------------------------------------------------------------------
// Color → Tailwind class map
// ---------------------------------------------------------------------------

export const colorClassMap: Record<Exclude<ColorToken, "default">, string> = {
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

// ---------------------------------------------------------------------------
// Align
// ---------------------------------------------------------------------------

export const alignClassMap = {
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } satisfies Record<AlignToken, string>,
}

export const alignDefaults = {
  align: "left" as const,
}

// ---------------------------------------------------------------------------
// Decoration → Tailwind class map
// ---------------------------------------------------------------------------

export const decorationClassMap: Record<
  Exclude<DecorationToken, "none">,
  string
> = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
}

// ---------------------------------------------------------------------------
// Transform → Tailwind class map
// ---------------------------------------------------------------------------

export const transformClassMap: Record<
  Exclude<TransformToken, "none">,
  string
> = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
}

// ---------------------------------------------------------------------------
// CVA definition
// ---------------------------------------------------------------------------

export const textV2Variants = cva({
  base: "text-f1-foreground",
  variants: {
    ...variantClassMap,
    ...alignClassMap,
  },
  defaultVariants: {
    variant: "body",
    ...alignDefaults,
  },
})

export type TextV2Variants = VariantProps<typeof textV2Variants>

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function resolveColor(
  color: ColorToken | undefined,
  variant: VariantToken
): string | undefined {
  if (color && color !== "default") return colorClassMap[color]
  if (color === "default") return undefined
  if (SECONDARY_COLOR_VARIANTS.has(variant)) return colorClassMap.secondary
  return undefined
}

export function resolveSize(size: SizeToken | undefined): string | undefined {
  if (!size || size === "default") return undefined
  return sizeClassMap[size]
}
