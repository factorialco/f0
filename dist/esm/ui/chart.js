import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { useLayoutEffect as n, useMemo as r, useState as i } from "react";
import { cva as a } from "cva";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import * as l from "recharts";
import u from "dompurify";
//#region src/ui/chart.tsx
var d = a({ variants: { aspect: {
	square: "aspect-square",
	wide: "aspect-video",
	small: "h-40"
} } }), f = {
	light: "",
	dark: ".dark"
}, p = t.createContext(null);
function m() {
	let e = t.useContext(p);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
var h = t.forwardRef(({ id: a, className: o, children: u, aspect: f, config: m, ...h }, _) => {
	let v = t.useId(), y = `chart-${a || v.replace(/:/g, "")}`, b = t.useRef(null), [x, S] = i(), C = r(() => new ResizeObserver((e) => S(e[0].contentRect.height)), []);
	return n(() => {
		let e = _ && "current" in _ ? _.current : b.current;
		return e && C.observe(e.parentElement), () => {
			C.disconnect();
		};
	}, [
		C,
		_,
		b
	]), /* @__PURE__ */ s(p.Provider, {
		value: { config: m },
		children: /* @__PURE__ */ c("div", {
			"data-chromatic": "ignore",
			"data-chart": y,
			ref: _ || b,
			className: e("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", f ? d({ aspect: f }) : "aspect-auto h-full", o),
			...h,
			children: [/* @__PURE__ */ s(g, {
				id: y,
				config: m
			}), /* @__PURE__ */ s(l.ResponsiveContainer, {
				height: x,
				className: "overflow-visible",
				children: u
			})]
		})
	});
});
h.displayName = "Chart";
var g = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([e, t]) => t.theme || t.color);
	if (!n.length) return null;
	let r = Object.entries(f).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`);
	return /* @__PURE__ */ s("style", { dangerouslySetInnerHTML: { __html: u.sanitize(r.join("\n")) } });
}, _ = l.Tooltip, v = t.forwardRef(({ active: n, payload: r, className: i, indicator: a = "dot", hideLabel: l = !1, hideIndicator: u = !1, label: d, labelFormatter: f, labelClassName: p, formatter: h, yAxisFormatter: g, color: _, nameKey: v, labelKey: y }, b) => {
	let { config: x } = m(), C = t.useMemo(() => {
		if (l || !r?.length) return null;
		let [t] = r, n = `${y || t.dataKey || t.name || "value"}`, i = S(x, t, n), a = !y && typeof d == "string" ? x[d]?.label || d : i?.label;
		return f ? /* @__PURE__ */ s("div", {
			className: e("font-medium", p),
			children: f(a, r)
		}) : a ? /* @__PURE__ */ s("div", {
			className: e("font-medium", p),
			children: a
		}) : null;
	}, [
		d,
		f,
		r,
		l,
		p,
		x,
		y
	]);
	if (!n || !r?.length) return null;
	let w = r.length === 1 && a !== "dot";
	return /* @__PURE__ */ c("div", {
		ref: b,
		className: e("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur", i),
		children: [w ? null : C, /* @__PURE__ */ s("div", {
			className: "grid gap-2",
			children: r.map((t, n) => {
				let r = `${v || t.name || t.dataKey || "value"}`, i = S(x, t, r), l = _ || t.payload.fill || t.color;
				return /* @__PURE__ */ s("div", {
					className: e("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", a === "dot" && "items-center"),
					children: h && t?.value !== void 0 && t.name ? h(t.value, t.name, t, n, t.payload) : /* @__PURE__ */ c(o, { children: [i?.icon ? /* @__PURE__ */ s(i.icon, {}) : !u && /* @__PURE__ */ s("div", {
						className: e("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
							"h-2.5 w-2.5": a === "dot",
							"w-1": a === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": a === "dashed",
							"my-0.5": w && a === "dashed"
						}),
						style: {
							"--color-bg": l,
							"--color-border": l
						}
					}), /* @__PURE__ */ c("div", {
						className: e("flex flex-1 justify-between text-sm leading-none", w ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ c("div", {
							className: "grid gap-2",
							children: [w ? C : null, /* @__PURE__ */ s("span", {
								className: "pr-2 text-f1-foreground",
								children: i?.label || t.name
							})]
						}), t.value && /* @__PURE__ */ s("span", {
							className: "font-mono font-medium tabular-nums text-f1-foreground",
							children: g ? g(String(t.value)) : t.value.toLocaleString()
						})]
					})] })
				}, t.dataKey);
			})
		})]
	});
});
v.displayName = "ChartTooltip";
var y = {
	strong: .4,
	faint: .05
}, b = l.Legend, x = t.forwardRef(({ className: t, hideIcon: n = !1, payload: r, verticalAlign: i = "bottom", nameKey: a, hiddenKey: o, leftShift: l = 0 }, u) => {
	let { config: d } = m();
	return r?.length ? /* @__PURE__ */ s("div", {
		ref: u,
		className: e("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", i === "top" ? "pb-2" : "pt-2", t),
		style: { marginLeft: l },
		children: r.map((t) => {
			let r = `${a || t.dataKey || "value"}`, i = S(d, t, r, o);
			return /* @__PURE__ */ c("div", {
				className: e("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
				children: [i?.icon && !n ? /* @__PURE__ */ s(i.icon, {}) : i && /* @__PURE__ */ s("div", {
					className: "h-2 w-2 shrink-0 rounded-full",
					style: i.projected ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${t.color} ${y.strong * 100}%, transparent), color-mix(in srgb, ${t.color} ${y.faint * 100}%, transparent))` } : { backgroundColor: t.color }
				}), /* @__PURE__ */ s("span", {
					className: "text-f1-foreground",
					children: i?.label
				})]
			}, JSON.stringify(t));
		})
	}) : null;
});
x.displayName = "ChartLegend";
function S(e, t, n, r) {
	if (typeof t != "object" || !t) return;
	let i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, a = n;
	if (n in t && typeof t[n] == "string" ? a = t[n] : i && n in i && typeof i[n] == "string" ? a = i[n] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(r && r === a)) return a in e ? e[a] : e[n];
}
//#endregion
export { h as ChartContainer, b as ChartLegend, x as ChartLegendContent, g as ChartStyle, _ as ChartTooltip, v as ChartTooltipContent, y as projectedFade };
