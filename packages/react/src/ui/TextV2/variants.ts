import { cva, type VariantProps } from "cva"

import type {
  AlignToken,
  AllowedTag,
  ColorToken,
  DecorationToken,
  TransformToken,
  VariantToken,
} from "./types"

// ---------------------------------------------------------------------------
// Variant → Tailwind class map
// ---------------------------------------------------------------------------

export const variantClassMap = {
  variant: {
    "title-lg": "text-4xl font-semibold",
    "title-sm": "text-2xl font-semibold",
    "title-xs": "text-xl font-semibold",
    "heading-lg": "text-2xl font-semibold",
    "heading-sm": "text-lg font-semibold",
    "heading-xs": "text-base font-semibold",
    "subtitle-xl": "text-2xl font-normal",
    "subtitle-lg": "text-xl font-normal",
    "subtitle-sm": "text-base font-normal",
    "body-xl": "text-xl font-normal",
    "body-lg": "text-lg font-normal",
    "body-sm": "text-sm font-normal",
    "body-xs": "text-xs font-normal",
    "label-lg": "text-lg font-medium",
    "label-sm": "text-sm font-medium",
    "label-xs": "text-xs font-medium",
    "description-sm": "text-sm font-normal",
    "description-xs": "text-xs font-normal",
    "caption-sm": "text-xs font-normal",
    "code-lg": "text-lg font-normal font-mono",
    "code-sm": "text-sm font-normal font-mono",
    // Base variants (default scale)
    title: "text-3xl font-semibold",
    heading: "text-xl font-semibold",
    subtitle: "text-lg font-normal",
    body: "text-base font-normal",
    label: "text-base font-medium",
    description: "text-base font-normal",
    caption: "text-sm font-normal",
    code: "text-base font-normal font-mono",
  } satisfies Record<VariantToken, string>,
}

// ---------------------------------------------------------------------------
// Default HTML tag per variant
// ---------------------------------------------------------------------------

export const defaultTagMap: Record<VariantToken, AllowedTag> = {
  "title-lg": "h2",
  "title-sm": "h2",
  "title-xs": "h2",
  "heading-lg": "h3",
  "heading-sm": "h3",
  "heading-xs": "h4",
  "subtitle-xl": "p",
  "subtitle-lg": "p",
  "subtitle-sm": "p",
  "body-xl": "p",
  "body-lg": "p",
  "body-sm": "p",
  "body-xs": "p",
  "label-lg": "label",
  "label-sm": "label",
  "label-xs": "label",
  "description-sm": "p",
  "description-xs": "p",
  "caption-sm": "span",
  "code-lg": "code",
  "code-sm": "code",
  // Base variants (default scale)
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
  "subtitle-xl",
  "subtitle-lg",
  "subtitle-sm",
  "label-lg",
  "label-sm",
  "label-xs",
  "description-sm",
  "description-xs",
  "caption-sm",
  "description",
  "subtitle",
  "caption",
  "label",
])

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
