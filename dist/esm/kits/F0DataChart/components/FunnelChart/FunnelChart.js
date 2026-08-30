import { OneEllipsis as e } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { useEChartsInstance as t } from "../../utils/useEChartsInstance.js";
import { usePointClick as n } from "../../utils/usePointClick.js";
import { useLegendInteraction as r } from "../../utils/useLegendInteraction.js";
import { Tag as i } from "../../../../components/tags/F0Tag/F0Tag.js";
import { formatPercent as a } from "../../utils/formatters.js";
import { useFunnelChartOptions as o } from "./useFunnelChartOptions.js";
import { useRef as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/FunnelChart/FunnelChart.tsx
function d(e, t) {
	return t === "none" ? e : t === "ascending" ? [...e].sort((e, t) => e.value - t.value) : [...e].sort((e, t) => t.value - e.value);
}
var f = (f) => {
	let { series: p, sort: m = "descending", orient: h = "horizontal", showConversion: g = !1, showLabels: _ = !0, valueFormatter: v } = f, y = s(null), b = o(y, f), x = t(y, b);
	n(x, f.onPointClick), r(x, f.onLegendSelectionChange);
	let S = d(p.data ?? [], m), C = S[0]?.value ?? 0, w = h === "horizontal";
	return /* @__PURE__ */ u("div", {
		className: "relative h-full w-full",
		children: [_ && /* @__PURE__ */ l("div", {
			className: `pointer-events-none absolute inset-0 z-10 flex ${w ? "" : "flex-col"}`,
			children: S.map((t) => {
				let n = v ? v(t.value) : String(t.value), r = g && C > 0 ? a(t.value, C) : null;
				return /* @__PURE__ */ l("div", {
					className: w ? "min-w-0 flex-1 border-0 border-l border-dashed border-f1-border" : "min-h-0 flex-1 border-0 border-t border-dashed border-f1-border",
					children: /* @__PURE__ */ u("div", {
						className: w ? "flex flex-col gap-3 overflow-hidden px-2.5 pt-2" : "flex items-baseline gap-2 overflow-hidden px-2.5 pt-2",
						children: [/* @__PURE__ */ l(e, {
							className: "text-base text-f1-foreground-secondary",
							lines: w ? 2 : 1,
							children: t.name
						}), w ? /* @__PURE__ */ u("div", {
							className: "flex items-baseline gap-1.5",
							children: [/* @__PURE__ */ l(e, {
								className: "text-2xl font-semibold leading-none text-f1-foreground",
								lines: 1,
								children: n
							}), r && /* @__PURE__ */ l(i, { tag: {
								type: "raw",
								text: r
							} })]
						}) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(e, {
							className: "text-xl font-semibold leading-none text-f1-foreground",
							lines: 1,
							children: n
						}), r && /* @__PURE__ */ l(i, { tag: {
							type: "raw",
							text: r
						} })] })]
					})
				}, t.name);
			})
		}), /* @__PURE__ */ l("div", {
			ref: y,
			className: "h-full w-full"
		})]
	});
};
//#endregion
export { f as FunnelChart };
