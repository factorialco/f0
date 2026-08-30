import { useL10n as e } from "../../../../../../../../lib/providers/l10n/l10n-provider.js";
import { useInputTextWidth as t } from "./useInputTextWidth.js";
import { useMemo as n } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/hooks/useNumberCellLayout.ts
function r(e, t) {
	if (e?.units) return typeof e.units == "function" ? e.units(t) : e.units;
}
function i(i, a, o) {
	let { locale: s } = e(), c = i?.locale ?? s, l = r(i, o), u = l ? i?.unitsPosition === "before" : !1, d = i?.grouping ?? !0, f = n(() => new Intl.NumberFormat(c, {
		maximumFractionDigits: i?.maxDecimals,
		useGrouping: d
	}), [
		c,
		i?.maxDecimals,
		d
	]), p = a == null ? "" : f.format(a), m = l ? u ? `${l} ${p}` : `${p} ${l}` : p, { ref: h, width: g } = t(m);
	return {
		ref: h,
		width: g,
		locale: c,
		units: l,
		unitsBefore: u,
		grouping: d
	};
}
//#endregion
export { r as resolveUnits, i as useNumberCellLayout };
