/**
 * Token types for F0Box props.
 * These map to the design tokens defined in @factorialco/f0-core.
 */

/**
 * Spacing tokens for padding and margin.
 * Maps to the project's absoluteSpacing scale (px values).
 *
 * | Token | Tailwind | Value |
 * |-------|----------|-------|
 * | none  | p-0      | 0px   |
 * | xs    | p-1      | 4px   |
 * | sm    | p-2      | 8px   |
 * | md    | p-3      | 12px  |
 * | lg    | p-4      | 16px  |
 * | xl    | p-6      | 24px  |
 * | 2xl   | p-8      | 32px  |
 * | 3xl   | p-10     | 40px  |
 * | 4xl   | p-12     | 48px  |
 * | 5xl   | p-16     | 64px  |
 */
export type SpacingToken =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"

/** Margin tokens (spacing + auto for centering) */
export type MarginToken = SpacingToken | "auto"

/**
 * Numeric size scale matching core spacing (relativeSpacing).
 * Maps 1:1 to Tailwind classes like w-0, w-4, w-8, w-16, etc.
 */
export type NumericSizeToken =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "18"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"

/** Fraction tokens for proportional widths */
export type FractionToken =
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "5/6"

/** Size tokens for width/height/min/max dimensions */
export type SizeToken =
  | "auto"
  | "full"
  | "screen"
  | "min"
  | "max"
  | "fit"
  | NumericSizeToken
  | FractionToken

/**
 * Gap tokens for spacing between flex/grid children.
 * Uses betweenSpacing (rem) for sm–xl, absoluteSpacing (px) for extended sizes.
 *
 * | Token | Tailwind | Value  |
 * |-------|----------|--------|
 * | none  | gap-0    | 0px    |
 * | xs    | gap-0.5  | 2px    |
 * | sm    | gap-sm   | ~4px   | (0.25rem)
 * | md    | gap-md   | ~8px   | (0.5rem)
 * | lg    | gap-lg   | ~12px  | (0.75rem)
 * | xl    | gap-xl   | ~16px  | (1rem)
 * | 2xl   | gap-6    | 24px   |
 * | 3xl   | gap-8    | 32px   |
 * | 4xl   | gap-10   | 40px   |
 * | 5xl   | gap-12   | 48px   |
 */
export type GapToken =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"

/** Display modes */
export type DisplayToken =
  | "block"
  | "flex"
  | "inline"
  | "inline-flex"
  | "grid"
  | "none"

/** Overflow values */
export type OverflowToken = "visible" | "hidden" | "auto" | "scroll"

/** Background tokens mapped to the f1 theme */
export type BackgroundToken =
  | "transparent"
  | "primary"
  | "secondary"
  | "tertiary"
  | "inverse"
  | "inverse-secondary"
  | "bold"
  | "accent"
  | "accent-bold"
  | "promote"
  | "critical"
  | "critical-bold"
  | "info"
  | "info-bold"
  | "warning"
  | "warning-bold"
  | "positive"
  | "positive-bold"
  | "selected"
  | "selected-secondary"
  | "selected-bold"
  | "overlay"

/** Border color tokens mapped to the f1 theme */
export type BorderColorToken =
  | "default"
  | "secondary"
  | "bold"
  | "selected"
  | "selected-bold"
  | "critical"
  | "critical-bold"
  | "warning"
  | "warning-bold"
  | "info"
  | "info-bold"
  | "positive"
  | "positive-bold"
  | "promote"

/** Border width tokens */
export type BorderWidthToken = "none" | "default" | "thick"

/** Border radius tokens from core */
export type BorderRadiusToken =
  | "none"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"

/** Divider direction */
export type DividerToken = "x" | "y"

/** Grid column count (1–12) */
export type ColumnsToken =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "none"

/** Grid column span for children (1–12 + full) */
export type ColSpanToken =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "full"

/** Grid column start position (1–13 + auto) */
export type ColStartToken =
  | "auto"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"

/** Grid row span for children (1–6 + full) */
export type RowSpanToken = "1" | "2" | "3" | "4" | "5" | "6" | "full"

/** Grid row count (1–6 + none) */
export type RowsToken = "1" | "2" | "3" | "4" | "5" | "6" | "none"

/** Flex align items */
export type AlignItemsToken =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline"

/** Flex justify content */
export type JustifyContentToken =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch"

/** Flex direction */
export type FlexDirectionToken =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse"

/** Flex wrap */
export type FlexWrapToken = "nowrap" | "wrap" | "wrap-reverse"

/** CSS position */
export type PositionToken =
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky"

/** Border style */
export type BorderStyleToken = "solid" | "dashed" | "dotted" | "double" | "none"
