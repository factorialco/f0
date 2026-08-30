import { useL10n as e } from "../../../../../../../lib/providers/l10n/l10n-provider.js";
import { resolveUnits as t } from "./hooks/useNumberCellLayout.js";
import { NumberCell as n } from "./NumberCell.js";
import { useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/MoneyCell.tsx
var a = (e, t = "USD") => {
	try {
		let n = new Intl.NumberFormat(e, {
			style: "currency",
			currency: t
		}).formatToParts(1), r = n.find((e) => e.type === "currency"), i = n.findIndex((e) => e.type === "currency"), a = n.findIndex((e) => e.type === "integer");
		return {
			symbol: r?.value ?? t,
			before: i < a
		};
	} catch {
		return;
	}
};
function o(o) {
	let { locale: s } = e(), c = o.editableColumn.numberConfig, l = c?.locale ?? s, u = t(c, o.item), d = r(() => u ? a(l, u) : void 0, [l, u]), f = r(() => u ? c?.unitsPosition ? c.unitsPosition === "before" : d?.before ?? !1 : !1, [
		u,
		c?.unitsPosition,
		d
	]);
	return /* @__PURE__ */ i(n, {
		...o,
		editableColumn: {
			...o.editableColumn,
			numberConfig: {
				...c,
				units: d?.symbol ?? u ?? "$",
				unitsPosition: f ? "before" : "after"
			}
		}
	});
}
//#endregion
export { o as MoneyCell };
