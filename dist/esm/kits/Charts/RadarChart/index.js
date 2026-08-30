import { DataTestIdWrapper as e } from "../../../lib/data-testid/index.js";
import { cn as t, focusRing as n } from "../../../lib/utils.js";
import { ChartContainer as r, ChartLegend as i, ChartTooltip as a, ChartTooltipContent as o } from "../../../ui/chart.js";
import { getCategoricalColor as s, getColor as c } from "../utils/colors.js";
import { fixedForwardRef as l } from "../utils/forwardRef.js";
import { useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { PolarAngleAxis as p, PolarGrid as m, PolarRadiusAxis as h, Radar as g, RadarChart as _ } from "recharts";
//#region src/kits/Charts/RadarChart/index.tsx
var v = ({ series: e, hiddenKeys: r, onToggle: i }) => /* @__PURE__ */ d("div", {
	className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
	children: e.map(({ key: e, color: a, label: o }) => {
		let s = r.includes(e);
		return /* @__PURE__ */ f("button", {
			type: "button",
			className: t("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground", n(), s ? "opacity-40" : "opacity-100"),
			"aria-label": typeof o == "string" ? o : void 0,
			"aria-pressed": !s,
			onClick: () => i(e),
			children: [/* @__PURE__ */ d("span", {
				className: "h-2 w-2 shrink-0 rounded-full",
				style: { backgroundColor: a }
			}), /* @__PURE__ */ d("span", {
				className: "text-f1-foreground",
				children: o
			})]
		}, e);
	})
}), y = l(({ data: t, dataConfig: n, scaleMin: l, scaleMax: y, aspect: b, defaultHiddenSeries: x, dataTestId: S }, C) => {
	let [w, T] = u(x ?? []), E = Object.entries(n).map(([e, t], n) => ({
		key: e,
		color: t.color ? c(t.color) : s(n),
		label: t.label
	})), D = (e) => {
		T((t) => t.includes(e) ? t.filter((t) => t !== e) : t.length >= E.length - 1 ? t : [...t, e]);
	}, O = t.map((e) => ({
		subject: e.label,
		...e.values
	}));
	return /* @__PURE__ */ d(e, {
		dataTestId: S,
		children: /* @__PURE__ */ d(r, {
			config: n,
			ref: C,
			aspect: b,
			"data-chromatic": "ignore",
			children: /* @__PURE__ */ f(_, {
				accessibilityLayer: !0,
				data: O,
				children: [
					/* @__PURE__ */ d(a, {
						cursor: !0,
						content: /* @__PURE__ */ d(o, { indicator: "dot" })
					}),
					/* @__PURE__ */ d(m, { gridType: "circle" }),
					/* @__PURE__ */ d(p, { dataKey: "subject" }),
					/* @__PURE__ */ d(h, {
						angle: 90,
						type: "number",
						domain: [l ?? "dataMin", y ?? "dataMax"]
					}),
					E.filter(({ key: e }) => !w.includes(e)).map(({ key: e, color: t, label: n }) => /* @__PURE__ */ d(g, {
						dataKey: e,
						fill: t,
						stroke: t,
						strokeWidth: 1.5,
						fillOpacity: .3,
						label: n,
						isAnimationActive: !1
					}, e)),
					E.length > 1 && /* @__PURE__ */ d(i, {
						iconType: "star",
						content: /* @__PURE__ */ d(v, {
							series: E,
							hiddenKeys: w,
							onToggle: D
						})
					})
				]
			})
		})
	});
});
//#endregion
export { y as RadarChart };
