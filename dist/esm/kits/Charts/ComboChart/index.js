import { ChartContainer as e, ChartLegend as t, ChartLegendContent as n, ChartTooltip as r, ChartTooltipContent as i } from "../../../ui/chart.js";
import { getCategoricalColor as a, getColor as o } from "../utils/colors.js";
import { cartesianGridProps as s, chartTooltipProps as c, measureTextWidth as l, xAxisProps as u, yAxisProps as d } from "../utils/elements.js";
import { fixedForwardRef as f } from "../utils/forwardRef.js";
import { prepareData as p } from "../utils/muncher.js";
import { ProjectedBar as m } from "../utils/ProjectedBar.js";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { Bar as _, CartesianGrid as v, ComposedChart as y, LabelList as b, Line as x, Rectangle as S, Scatter as C, XAxis as w, YAxis as T } from "recharts";
//#region src/kits/Charts/ComboChart/index.tsx
var E = (e) => {
	let t = (t) => {
		let { cx: n, cy: r, fill: i, payload: a } = t, o = () => {
			if (!a) return "-";
			if (a[e] !== void 0) return a[e];
			for (let [e, t] of Object.entries(a)) if (typeof t == "number" && e !== "x") return t;
			return "-";
		};
		return /* @__PURE__ */ h("circle", {
			cx: n,
			cy: r,
			r: 4,
			fill: i,
			stroke: "white",
			strokeWidth: 2,
			ref: (e) => {
				e?.parentElement && e.parentElement.setAttribute("aria-label", `Data point: ${o()}`);
			}
		});
	};
	return t.displayName = `Scatter-${e}`, t;
}, D = (e, t, n) => {
	let r = (r) => {
		let { payload: i, ...a } = r, o = (e) => {
			let t = i?.[e];
			return typeof t == "number" ? t : 0;
		}, s = o(e), c = [...t].reverse().find((e) => (s < 0 ? o(e) < 0 : o(e) > 0) && !n.has(e)) === e ? [
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
		return /* @__PURE__ */ h(S, {
			...a,
			radius: c
		});
	};
	return r.displayName = `StackedBar-${e}`, r;
}, O = f(({ dataConfig: f, data: S, xAxis: O, yAxis: k = { hide: !0 }, label: A = !1, hideTooltip: j = !1, hideGrid: M = !1, aspect: N, legend: P, showValueUnderLabel: F = !1, bar: I, line: L, scatter: R, onClick: z }, B) => {
	let V = p(S), H = I?.categories ? Array.isArray(I.categories) ? I.categories : [I.categories] : [], U = I?.type === "stacked" || I?.type === "stacked-by-sign", W = new Set(H.filter((e) => f[e].projected).map(String)), G = (e, t) => f[e].color ? o(f[e].color) : a(t), K = L?.categories ? Array.isArray(L.categories) ? L.categories : [L.categories] : [], q = R?.categories ? Array.isArray(R.categories) ? R.categories : [R.categories] : [], J = [
		...H,
		...K,
		...q
	], Y = Math.max(...V.flatMap((e) => J.map((t) => l(k?.tickFormatter ? k.tickFormatter(`${e[t]}`) : `${e[t]}`)))), X = [
		I,
		L,
		R
	].filter((e) => e?.axisPosition === "left"), Z = [
		I,
		L,
		R
	].filter((e) => e?.axisPosition === "right");
	return /* @__PURE__ */ h(e, {
		config: f,
		ref: B,
		aspect: N,
		children: /* @__PURE__ */ g(y, {
			accessibilityLayer: !0,
			data: V,
			margin: {
				left: k && !k.hide ? 0 : 12,
				right: 12,
				top: A ? 24 : 0,
				bottom: F ? 24 : 12
			},
			stackOffset: I?.type === "stacked-by-sign" ? "sign" : void 0,
			onClick: (e) => {
				if (!z || !e.activeLabel || !e.activePayload) return;
				let t = {
					label: e.activeLabel,
					values: {}
				};
				for (let n of e.activePayload) t.values[n.name] = n.value;
				z(t);
			},
			children: [
				!j && /* @__PURE__ */ h(r, {
					...c(),
					content: /* @__PURE__ */ h(i, { yAxisFormatter: k.tickFormatter })
				}),
				!M && /* @__PURE__ */ h(v, { ...s() }),
				X.length > 0 && /* @__PURE__ */ h(T, {
					...d(k),
					tick: !0,
					width: k.width ?? Y + 20 + (Z.length > 0 && X[0]?.axisLabel ? 20 : 0),
					hide: k.hide || X.some((e) => e?.hideAxis),
					label: X[0]?.axisLabel ? {
						value: X[0].axisLabel,
						angle: -90,
						position: "insideLeft"
					} : void 0
				}),
				Z.length > 0 && /* @__PURE__ */ h(T, {
					...d(k),
					yAxisId: "right",
					orientation: "right",
					tick: !0,
					width: k.width ?? Y + 20 + (X.length > 0 && Z[0]?.axisLabel ? 20 : 0),
					hide: k.hide || Z.some((e) => e?.hideAxis),
					label: Z[0]?.axisLabel ? {
						value: Z[0].axisLabel,
						angle: 90,
						position: "insideRight"
					} : void 0
				}),
				/* @__PURE__ */ h(w, {
					...u(O),
					hide: O?.hide,
					tick: F ? (e) => {
						let { x: t, y: n, payload: r } = e, i = S.find((e) => e.label === r.value)?.values || "", a = Object.keys(i).length === 1 ? Object.values(i)?.[0] : void 0, o = a !== void 0 && k.tickFormatter ? k.tickFormatter(`${a}`) : a.toLocaleString();
						return /* @__PURE__ */ g("g", {
							transform: `translate(${t},${n})`,
							children: [/* @__PURE__ */ h("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: r.value
							}), !!a && /* @__PURE__ */ h("text", {
								x: 0,
								y: 0,
								dy: 28,
								textAnchor: "middle",
								className: "!fill-f1-foreground text-sm font-medium",
								children: o
							})]
						});
					} : void 0
				}),
				H.map((e, t) => {
					let n = {
						isAnimationActive: !1,
						dataKey: String(e),
						stackId: U ? "stack" : void 0,
						fill: G(e, t),
						radius: 4,
						maxBarSize: 32
					}, r = A && /* @__PURE__ */ h(b, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${String(e)}`);
					return W.has(String(e)) ? /* @__PURE__ */ h(m, {
						...n,
						stackKeys: U ? H.map(String) : void 0,
						children: r
					}, `bar-${String(e)}`) : /* @__PURE__ */ h(_, {
						...n,
						shape: U ? D(String(e), H.map(String), W) : void 0,
						children: r
					}, `bar-${String(e)}`);
				}),
				K.map((e, t) => {
					let n = f[e].color ? o(f[e].color) : a(H.length + t);
					return /* @__PURE__ */ h(x, {
						type: L?.lineType ?? "natural",
						dataKey: String(e),
						stroke: n,
						strokeWidth: 2,
						strokeDasharray: f[e].dashed ? "4 4" : void 0,
						dot: L?.dot ? {
							fill: n,
							stroke: n,
							r: 3
						} : !1,
						isAnimationActive: !1,
						yAxisId: L?.axisPosition === "right" ? "right" : void 0
					}, `line-${String(e)}`);
				}),
				q.map((e, t) => /* @__PURE__ */ h(C, {
					dataKey: String(e),
					fill: f[e].color ? o(f[e].color) : a(H.length + K.length + t),
					r: 4,
					isAnimationActive: !1,
					yAxisId: R?.axisPosition === "right" ? "right" : void 0,
					shape: E(String(e))
				}, `scatter-${String(e)}`)),
				P && /* @__PURE__ */ h(t, {
					content: /* @__PURE__ */ h(n, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
});
//#endregion
export { O as ComboChart };
