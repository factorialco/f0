import { projectedFade as e } from "../../../ui/chart.js";
import { useId as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import { Bar as a, Rectangle as o } from "recharts";
var s = Object.assign(({ stackKeys: s, ...c }) => {
	let l = t().replace(/:/g, ""), u = (e) => `projected-bar-${l}-${e}`, d = (e) => {
		let { payload: t, ...n } = e, i = (e) => {
			let n = t?.[e];
			return typeof n == "number" ? n : 0;
		}, a = i(String(c.dataKey)), l = `url(#${u(a < 0 ? "negative" : "positive")})`;
		if (!s) return /* @__PURE__ */ r(o, {
			...n,
			fill: l
		});
		let d = [...s].reverse().find((e) => a < 0 ? i(e) < 0 : i(e) > 0) === String(c.dataKey) ? [
			4,
			4,
			0,
			0
		] : [
			0,
			0,
			0,
			0
		];
		return /* @__PURE__ */ r(o, {
			...n,
			fill: l,
			radius: d
		});
	};
	return /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("defs", { children: ["positive", "negative"].map((t) => /* @__PURE__ */ i("linearGradient", {
		id: u(t),
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ r("stop", {
			offset: "0%",
			stopColor: c.fill,
			stopOpacity: t === "positive" ? e.strong : e.faint
		}), /* @__PURE__ */ r("stop", {
			offset: "100%",
			stopColor: c.fill,
			stopOpacity: t === "positive" ? e.faint : e.strong
		})]
	}, t)) }), /* @__PURE__ */ r(a, {
		...c,
		shape: d
	})] });
}, {
	displayName: a.displayName,
	defaultProps: a.defaultProps,
	getComposedData: a.getComposedData
});
//#endregion
export { s as ProjectedBar };
