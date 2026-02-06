/**
 * Token types for F0Box props.
 * These map to the design tokens defined in @factorialco/f0-core.
 */

/** Semantic spacing tokens used for padding and margin */
export type SpacingToken = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

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

/** Gap tokens aligned with betweenSpacing from core */
export type GapToken = "none" | "sm" | "md" | "lg" | "xl"

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
  | "bold"
  | "accent"
  | "promote"
  | "critical"
  | "info"
  | "warning"
  | "positive"
  | "selected"
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
