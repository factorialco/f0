import { isEmptyNumeric as e } from "./isEmptyNumeric.js";
import { numericFinalValue as t } from "./numericFinalValue.js";
//#region src/lib/numeric/utils/numericFormatter.ts
var n = (n, r = {}) => {
	if (e(n)) return r.emptyPlaceholder || "";
	r = {
		locale: "en-US",
		decimalPlaces: 2,
		hideUnits: !1,
		compact: !1,
		emptyPlaceholder: "",
		useGrouping: !0,
		unitsSpaced: !1,
		...r
	}, typeof n == "number" && (n = { value: n });
	let i = t(n);
	if (i === void 0) return r.emptyPlaceholder || "";
	let a = new Intl.NumberFormat(r.locale, {
		maximumFractionDigits: r.decimalPlaces,
		notation: r.compact ? "compact" : "standard",
		compactDisplay: r.compact ? "short" : void 0,
		useGrouping: r.useGrouping
	}).format(i);
	if (r.hideUnits || !n.units) return a;
	let o = r.unitsSpaced ? " " : "";
	return n.unitsPosition === "prepend" ? `${n.units}${o}${a}` : `${a}${o}${n.units}`;
};
//#endregion
export { n as numericFormatter };
