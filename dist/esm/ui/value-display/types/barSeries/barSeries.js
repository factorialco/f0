import { cn as e } from "../../../../lib/utils.js";
import { Tooltip as t, TooltipContent as n, TooltipProvider as r, TooltipTrigger as i } from "../../../tooltip.js";
import { getColor as a } from "../../../../kits/Charts/utils/colors.js";
import { tableDisplayClassNames as o } from "../../const.js";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/ui/value-display/types/barSeries/barSeries.tsx
var u = 52, d = 6, f = 2, p = 72, m = 2, h = "categorical-5", g = "categorical-1", _ = .5, v = "categorical-1";
function y(e) {
	return e;
}
function b(e) {
	return String(e);
}
function x({ point: e, scaleMax: o, formatLabel: f, formatValue: p, formatTooltip: y }) {
	let { label: b, value: x, secondaryValue: S, neutralValue: C, neutralFullHeight: w } = e, T = f(b), E = p(x), D = y?.({
		point: e,
		formattedLabel: T,
		formattedValue: E
	}) ?? `${T} – ${E}`, O = Math.max(C ?? 0, 0), k = x + O, A = S != null && k < S, j = S != null && x > S, M = o > 0 ? Math.round(x / o * u) : 0, N = w ? u : o > 0 ? Math.round(O / o * u) : 0, P = Math.min(N, u - M), F = S != null && o > 0 && !A ? Math.round(Math.min(x, S) / o * u) : M, I = j ? Math.round(u * ((x - (S ?? 0)) / o)) : 0;
	return /* @__PURE__ */ c(r, {
		delayDuration: 100,
		disableHoverableContent: !0,
		children: /* @__PURE__ */ l(t, { children: [/* @__PURE__ */ c(i, {
			asChild: !0,
			children: /* @__PURE__ */ c("div", {
				className: "flex-shrink-0 cursor-default rounded-sm transition-opacity hover:opacity-90",
				style: {
					width: d,
					height: u,
					minHeight: u,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					alignItems: "stretch"
				},
				role: "img",
				"aria-label": D,
				children: x === 0 && P === 0 ? /* @__PURE__ */ c("div", {
					className: "rounded-sm bg-f1-border-secondary",
					style: {
						width: d,
						height: m,
						minHeight: m
					}
				}) : w ? /* @__PURE__ */ c("div", {
					className: "rounded-sm bg-f1-border-secondary",
					style: {
						width: d,
						height: u,
						minHeight: u
					}
				}) : A ? /* @__PURE__ */ l(s, { children: [M > 0 && /* @__PURE__ */ c("div", { style: {
					width: d,
					height: M,
					backgroundColor: a(h),
					borderRadius: P > 0 ? "2px 2px 0 0" : 2
				} }), P > 0 && /* @__PURE__ */ c("div", {
					className: "bg-f1-border-secondary",
					style: {
						width: d,
						height: P,
						borderRadius: M > 0 ? "0 0 2px 2px" : 2
					}
				})] }) : j && I > 0 ? /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c("div", { style: {
					width: d,
					height: I,
					backgroundColor: a(v),
					borderRadius: "2px 2px 0 0"
				} }), /* @__PURE__ */ c("div", { style: {
					width: d,
					height: F,
					backgroundColor: a(g, _),
					borderRadius: "0 0 2px 2px"
				} })] }) : /* @__PURE__ */ l(s, { children: [M > 0 && /* @__PURE__ */ c("div", { style: {
					width: d,
					height: M,
					backgroundColor: a(g, _),
					borderRadius: P > 0 ? "2px 2px 0 0" : 2
				} }), P > 0 && /* @__PURE__ */ c("div", {
					className: "bg-f1-border-secondary",
					style: {
						width: d,
						height: P,
						borderRadius: M > 0 ? "0 0 2px 2px" : 2
					}
				})] })
			})
		}), /* @__PURE__ */ c(n, {
			className: "pointer-events-none z-[100] max-w-xs",
			side: "top",
			sideOffset: 6,
			children: /* @__PURE__ */ c("p", {
				className: "font-semibold",
				children: D
			})
		})] })
	});
}
var S = (t, n) => {
	let r = t?.dataPoints;
	if (!r || !Array.isArray(r) || r.length === 0) return /* @__PURE__ */ c("div", {
		className: e("text-f1-foreground-secondary", n.visualization === "table" && o.text),
		"data-cell-type": "barSeries",
		children: "–"
	});
	let i = t.formatLabel ?? y, a = t.formatValue ?? b, s = Math.max(...r.map((e) => Math.max(e.value + Math.max(e.neutralValue ?? 0, 0), e.secondaryValue ?? 0)), 0), l = t.scaleMax ?? Math.max(s, 1);
	return /* @__PURE__ */ c("div", {
		className: e("flex items-center justify-end gap-0.5 overflow-visible py-1", n.visualization === "table" && "pt-0.5"),
		style: {
			minHeight: p,
			height: p,
			minWidth: r.length * 8 - f
		},
		"data-cell-type": "barSeries",
		role: "img",
		"aria-label": "Bar series",
		children: r.map((e, n) => /* @__PURE__ */ c("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ c(x, {
				point: e,
				scaleMax: l,
				formatLabel: i,
				formatValue: a,
				formatTooltip: t.formatTooltip
			})
		}, `${e.label}-${n}`))
	});
};
//#endregion
export { S as BarSeriesCell };
