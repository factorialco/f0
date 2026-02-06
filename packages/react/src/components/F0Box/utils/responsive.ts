import type {
  AlignItemsToken,
  BackgroundToken,
  BorderColorToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColSpanToken,
  ColStartToken,
  ColumnsToken,
  DisplayToken,
  DividerToken,
  FlexDirectionToken,
  FlexWrapToken,
  GapToken,
  JustifyContentToken,
  MarginToken,
  OverflowToken,
  RowSpanToken,
  RowsToken,
  SizeToken,
  SpacingToken,
} from "../types"

import { backgroundVariants } from "./background"
import { borderVariants } from "./border"
import { dimensionVariants } from "./dimensions"
import { displayVariants } from "./display"
import { dividerVariants } from "./divider"
import { flexVariants } from "./flex"
import { gridVariants } from "./grid"
import { marginVariants } from "./margin"
import { overflowVariants } from "./overflow"
import { paddingVariants } from "./padding"

/** Supported breakpoints */
export type Breakpoint = "sm" | "md" | "lg" | "xl"

/** All styling props that can be overridden per breakpoint */
export interface ResponsiveStyleProps {
  display?: DisplayToken
  // Padding
  padding?: SpacingToken
  paddingX?: SpacingToken
  paddingY?: SpacingToken
  paddingTop?: SpacingToken
  paddingBottom?: SpacingToken
  paddingLeft?: SpacingToken
  paddingRight?: SpacingToken
  // Margin
  margin?: MarginToken
  marginX?: MarginToken
  marginY?: MarginToken
  marginTop?: MarginToken
  marginBottom?: MarginToken
  marginLeft?: MarginToken
  marginRight?: MarginToken
  // Gap
  gap?: GapToken
  // Grid
  columns?: ColumnsToken
  rows?: RowsToken
  colSpan?: ColSpanToken
  colStart?: ColStartToken
  rowSpan?: RowSpanToken
  // Dimensions
  width?: SizeToken
  height?: SizeToken
  minWidth?: SizeToken
  minHeight?: SizeToken
  maxWidth?: SizeToken
  maxHeight?: SizeToken
  // Background
  background?: BackgroundToken
  // Border
  borderColor?: BorderColorToken
  border?: BorderWidthToken
  borderTop?: BorderWidthToken
  borderBottom?: BorderWidthToken
  borderLeft?: BorderWidthToken
  borderRight?: BorderWidthToken
  borderRadius?: BorderRadiusToken
  borderRadiusTopLeft?: BorderRadiusToken
  borderRadiusTopRight?: BorderRadiusToken
  borderRadiusBottomLeft?: BorderRadiusToken
  borderRadiusBottomRight?: BorderRadiusToken
  // Overflow
  overflow?: OverflowToken
  overflowX?: OverflowToken
  overflowY?: OverflowToken
  // Divider
  divider?: DividerToken
  dividerColor?: BorderColorToken
  // Flex
  alignItems?: AlignItemsToken
  justifyContent?: JustifyContentToken
  flexDirection?: FlexDirectionToken
  flexWrap?: FlexWrapToken
  grow?: boolean
  shrink?: boolean
}

/**
 * Combined variant map: maps each prop name to its token→class mapping.
 * Used to look up the base Tailwind class for any prop+value combination.
 */
const variantMap: Record<string, Record<string, string>> = {
  ...displayVariants,
  ...paddingVariants,
  ...marginVariants,
  ...flexVariants,
  ...gridVariants,
  ...dimensionVariants,
  ...backgroundVariants,
  ...borderVariants,
  ...overflowVariants,
  ...dividerVariants,
}

/**
 * Prefixes every class in a space-separated class string with a breakpoint.
 * e.g. prefixClasses("sm", "border-0 border-b border-solid")
 *   → "sm:border-0 sm:border-b sm:border-solid"
 */
function prefixClasses(breakpoint: Breakpoint, classes: string): string {
  return classes
    .split(" ")
    .map((cls) => `${breakpoint}:${cls}`)
    .join(" ")
}

/**
 * Resolves responsive override props into prefixed Tailwind classes.
 *
 * For each prop in the override, looks up the corresponding base class
 * from the variant map and prefixes it with the breakpoint.
 *
 * @example
 * resolveResponsiveClasses("sm", { padding: "lg", display: "flex" })
 * // → "sm:p-4 sm:flex"
 */
export function resolveResponsiveClasses(
  breakpoint: Breakpoint,
  props: ResponsiveStyleProps
): string {
  const classes: string[] = []

  for (const [prop, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue

    const map = variantMap[prop]
    if (!map) continue

    const baseClass = map[String(value)]
    if (!baseClass) continue

    classes.push(prefixClasses(breakpoint, baseClass))
  }

  return classes.join(" ")
}
