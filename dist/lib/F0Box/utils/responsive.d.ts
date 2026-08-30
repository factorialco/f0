import { AlignItemsToken, BackgroundToken, BorderColorToken, BorderRadiusToken, BorderStyleToken, BorderWidthToken, ColSpanToken, ColStartToken, ColumnsToken, DisplayToken, DividerToken, FlexDirectionToken, FlexWrapToken, GapToken, InsetToken, JustifyContentToken, MarginToken, OverflowToken, PositionToken, RowSpanToken, RowsToken, SizeToken, SpacingToken, ZIndexToken } from '../types';
/** Supported breakpoints */
export type Breakpoint = "sm" | "md" | "lg" | "xl";
/** All styling props that can be overridden per breakpoint */
export interface ResponsiveStyleProps {
    display?: DisplayToken;
    position?: PositionToken;
    top?: InsetToken;
    right?: InsetToken;
    bottom?: InsetToken;
    left?: InsetToken;
    zIndex?: ZIndexToken;
    padding?: SpacingToken;
    paddingX?: SpacingToken;
    paddingY?: SpacingToken;
    paddingTop?: SpacingToken;
    paddingBottom?: SpacingToken;
    paddingLeft?: SpacingToken;
    paddingRight?: SpacingToken;
    margin?: MarginToken;
    marginX?: MarginToken;
    marginY?: MarginToken;
    marginTop?: MarginToken;
    marginBottom?: MarginToken;
    marginLeft?: MarginToken;
    marginRight?: MarginToken;
    gap?: GapToken;
    columns?: ColumnsToken;
    rows?: RowsToken;
    colSpan?: ColSpanToken;
    colStart?: ColStartToken;
    rowSpan?: RowSpanToken;
    width?: SizeToken;
    height?: SizeToken;
    minWidth?: SizeToken;
    minHeight?: SizeToken;
    maxWidth?: SizeToken;
    maxHeight?: SizeToken;
    background?: BackgroundToken;
    borderColor?: BorderColorToken;
    border?: BorderWidthToken;
    borderTop?: BorderWidthToken;
    borderBottom?: BorderWidthToken;
    borderLeft?: BorderWidthToken;
    borderRight?: BorderWidthToken;
    borderRadius?: BorderRadiusToken;
    borderRadiusTopLeft?: BorderRadiusToken;
    borderRadiusTopRight?: BorderRadiusToken;
    borderRadiusBottomLeft?: BorderRadiusToken;
    borderRadiusBottomRight?: BorderRadiusToken;
    borderStyle?: BorderStyleToken;
    overflow?: OverflowToken;
    overflowX?: OverflowToken;
    overflowY?: OverflowToken;
    divider?: DividerToken;
    dividerColor?: BorderColorToken;
    alignItems?: AlignItemsToken;
    justifyContent?: JustifyContentToken;
    flexDirection?: FlexDirectionToken;
    flexWrap?: FlexWrapToken;
    grow?: boolean;
    shrink?: boolean;
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
export declare function resolveResponsiveClasses(breakpoint: Breakpoint, props: ResponsiveStyleProps): string;
