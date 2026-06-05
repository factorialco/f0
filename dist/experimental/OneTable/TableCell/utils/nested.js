const T = 32, i = 24, C = 18, N = "1px", E = 8, o = 32, _ = 4, l = 40, O = 16, c = 24, I = 16, s = ({
  depth: t,
  padding: e = 0
}) => `${t * 32 + e}px`, d = ({
  depth: t,
  isDetailedVariant: e
}) => s({
  depth: t,
  padding: -4
}), D = (t, e) => t && e > 0, A = (t, e) => t && e, F = (t, e) => t && e, r = (t, e) => t && e, R = (t, e, n) => !e && r(t, n), a = (t, e) => t && e?.nestedVariant === "detailed";
export {
  o as BUTTON_HEIGHT,
  _ as BUTTON_PADDING,
  i as CHEVRON_PARENT_SIZE,
  C as CHEVRON_SIZE,
  l as CONNECTOR_WIDTH,
  O as CONNECTOR_WIDTH_WITH_CHILDREN,
  N as LINE_WIDTH,
  E as PADDING_TOP,
  c as SELECTABLE_EDITABLE_ROW_OFFSET,
  I as SELECTABLE_ROW_OFFSET,
  T as SPACING_FACTOR,
  s as getNestedMarginLeft,
  d as getNestedMarginLeftForLoadMore,
  a as isFirstCellDetailed,
  F as isFirstCellExpanded,
  A as isFirstCellWithChildren,
  D as isFirstCellWithDepth,
  R as isFirstCellWithNoChildrenAndTableChildren,
  r as isFirstCellWithTableChildren
};
