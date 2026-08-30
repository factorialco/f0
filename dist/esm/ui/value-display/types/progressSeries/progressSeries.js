import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { F0ProgressSeries as n } from "../../../../experimental/F0ProgressSeries/F0ProgressSeries.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/value-display/types/progressSeries/progressSeries.tsx
var i = 40, a = 80;
function o(e) {
	return e.visualization === "table" ? { minWidth: a } : {
		minHeight: i,
		minWidth: a
	};
}
var s = (i, a) => {
	let s = i?.bars;
	return !i?.loading && (!Array.isArray(s) || s.length === 0) ? /* @__PURE__ */ r("div", {
		className: e("text-f1-foreground-secondary", a.visualization === "table" && t.text),
		"data-cell-type": "progressSeries",
		children: "–"
	}) : /* @__PURE__ */ r("div", {
		className: "flex w-full items-center",
		style: o(a),
		"data-cell-type": "progressSeries",
		"aria-busy": i.loading || void 0,
		children: /* @__PURE__ */ r(n, {
			...i,
			bars: s ?? []
		})
	});
};
//#endregion
export { s as ProgressSeriesCell };
