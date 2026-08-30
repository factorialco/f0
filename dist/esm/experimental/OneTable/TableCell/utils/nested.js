var e = ({ depth: e, padding: t = 0 }) => `${e * 32 + t}px`, t = ({ depth: t, isDetailedVariant: n }) => e({
	depth: t,
	padding: -4
}), n = (e, t) => e && t > 0, r = (e, t) => e && t, i = (e, t) => e && t, a = (e, t) => e && t, o = (e, t, n) => !t && a(e, n), s = (e, t) => e && t?.nestedVariant === "detailed";
//#endregion
export { e as getNestedMarginLeft, t as getNestedMarginLeftForLoadMore, s as isFirstCellDetailed, i as isFirstCellExpanded, r as isFirstCellWithChildren, n as isFirstCellWithDepth, o as isFirstCellWithNoChildrenAndTableChildren, a as isFirstCellWithTableChildren };
