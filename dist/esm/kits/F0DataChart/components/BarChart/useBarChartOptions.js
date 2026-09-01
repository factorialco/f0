import { useReducedMotion as e } from "../../../../lib/a11y.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { darkenChartColor as n, paletteColor as r, resolveChartColorToken as i } from "../../utils/colors.js";
import { useChartTheme as a } from "../../utils/useChartTheme.js";
import { useContainerSize as o } from "../../utils/useContainerSize.js";
import { buildBaseChartOptions as s, buildItemTooltip as c, labelWidthCap as l, renderMarker as u, renderValueTooltip as d, tooltipValueFormat as f } from "../../utils/options.js";
import { useFontsReady as p } from "../../utils/useFontsReady.js";
import { useMemo as m } from "react";
import * as h from "echarts";
//#region src/kits/F0DataChart/components/BarChart/useBarChartOptions.ts
var g = 11, _ = 6, v = 0, y = 60, ee = 8, b = 5;
function te(e) {
	return Math.ceil(e * 1.4) + b;
}
var x = 10, ne = 20, S = "#ffffff", C = .5, re = " (target)", w = .4, ie = 500;
function ae(e, t) {
	if (typeof e == "number") return e;
	if (typeof e == "string" && e.endsWith("%")) {
		let n = Number.parseFloat(e);
		if (Number.isFinite(n)) return t * n / 100;
	}
	return y;
}
var T;
function oe(e, t) {
	return T === void 0 && (T = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null), T ? (T.font = t, T.measureText(e).width) : e.length * 8;
}
var E = 4, se = .08;
function ce(e, t, n, r) {
	let i = `${t.textStyle.fontWeight} ${t.textStyle.fontSize}px ${t.textStyle.fontFamily}`, a = 0;
	for (let t of e) {
		let e = r ? r(t) : t;
		a = Math.max(a, oe(e, i));
	}
	return Math.min(Math.ceil(a) + E, l(n));
}
function D(e) {
	return typeof e == "number" ? e : e.value;
}
function O(e) {
	return typeof e == "number" ? void 0 : e.target;
}
function k(e) {
	if (typeof e != "number" && e.color !== void 0) return i(e.color);
}
function le(e, t) {
	return e.color ? i(e.color) : r(t);
}
function A(e, t, r, i) {
	let a = (t - r) / t, o = n(e);
	return new h.graphic.LinearGradient(...i ? [
		0,
		0,
		0,
		1
	] : [
		1,
		0,
		0,
		0
	], [
		{
			offset: 0,
			color: o
		},
		{
			offset: a,
			color: o
		},
		{
			offset: a,
			color: e
		},
		{
			offset: 1,
			color: e
		}
	]);
}
function j(e) {
	let t = D(e), n = O(e);
	if (!(n === void 0 || t <= 0 || t <= n)) return n;
}
function M(e) {
	return e.data.some((e) => typeof e != "number" && e.target !== void 0);
}
var N = 16, ue = 24, P = 8, F = 24;
function I(e) {
	return e > 1 ? F : P;
}
var L = 64;
function R(e, t = N) {
	let n = Math.max(1, e);
	return n * t + (n - 1) * P + I(n);
}
function de(e, t = N) {
	let n = P / t * 100, r = I(Math.max(1, e)) / R(e, t) * 100;
	return {
		barGap: `${n.toFixed(1)}%`,
		barCategoryGap: `${r.toFixed(1)}%`
	};
}
function z(e) {
	if (!e.showAllCategories || e.orientation !== "horizontal") return;
	let t = e.categories?.length ?? 0;
	if (t === 0) return;
	let n = R(e.stacked ? 1 : e.series?.length ?? 1, ue);
	return Math.ceil(t * n) + L;
}
function fe({ isVertical: e, windowCategories: t, showAllCategories: n, stacked: r, categoryCount: i, seriesCount: a, containerHeight: o }) {
	if (!t || n || e || !o || i === 0) return;
	let s = o - L;
	if (s <= 0) return;
	let c = R(r ? 1 : a);
	if (!(s / i >= c)) return Math.max(2, Math.floor(s / c));
}
var B = 4;
function V(e, t) {
	return e ? t ? [
		0,
		0,
		B,
		B
	] : [
		B,
		B,
		0,
		0
	] : t ? [
		B,
		0,
		0,
		B
	] : [
		0,
		B,
		B,
		0
	];
}
function pe(e, t, n) {
	if (!n) return e.some((e) => e.data.some((e) => D(e) < 0)) ? (e, n, r) => V(t, r < 0) : void 0;
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	return e.forEach((e, t) => {
		e.data.forEach((e, n) => {
			let a = D(e);
			a > 0 ? r.set(n, t) : a < 0 && i.set(n, t);
		});
	}), (e, n, a) => {
		if (a === 0) return 0;
		let o = a < 0;
		return (o ? i : r).get(n) === e ? V(t, o) : 0;
	};
}
function me(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = le(e, t), p = M(e), m = i ? p ? `stacked-${t}` : "stacked" : p ? `stack-${t}` : void 0, g = e.data.map((e, r) => {
		let i = D(e), o = k(e), s = l?.(t, r, i), c = a ? j(e) : void 0, u = c === void 0 ? o : A(o ?? f, i, c, n);
		return u === void 0 && s === void 0 ? i : {
			value: i,
			itemStyle: {
				...u !== void 0 && { color: u },
				...s !== void 0 && { borderRadius: s }
			}
		};
	}), _ = V(n, !1), v = {
		name: e.name,
		type: "bar",
		data: g,
		stack: m,
		itemStyle: {
			color: f,
			borderRadius: _,
			...i && {
				borderColor: s,
				borderWidth: C
			}
		},
		label: {
			show: r,
			position: i ? "inside" : n ? "top" : "right",
			color: i ? S : o,
			fontWeight: "bold",
			fontSize: c,
			overflow: "truncate",
			ellipsis: "...",
			formatter: d ? (e) => d(Number(e.value)) : void 0
		},
		labelLayout: u,
		emphasis: {
			itemStyle: {
				shadowBlur: 0,
				shadowOffsetX: 0,
				shadowColor: "transparent"
			},
			...i && { focus: "series" },
			...i && r ? { label: {
				show: !0,
				color: S
			} } : {}
		},
		...i && { blur: {
			itemStyle: { opacity: w },
			label: { opacity: w }
		} }
	};
	if (!p) return [v];
	let y = e.data.map((e) => {
		let t = D(e), r = O(e);
		if (r === void 0 || r <= t) return 0;
		let i = k(e);
		return i === void 0 ? r - t : {
			value: r - t,
			itemStyle: {
				color: new h.graphic.LinearGradient(...n ? [
					0,
					0,
					0,
					1
				] : [
					1,
					0,
					0,
					0
				], [{
					offset: 0,
					color: `${i}33`
				}, {
					offset: 1,
					color: `${i}00`
				}]),
				borderRadius: _
			}
		};
	});
	return [v, {
		name: `${e.name}${re}`,
		type: "bar",
		data: y,
		stack: m,
		legendHoverLink: !1,
		itemStyle: {
			color: new h.graphic.LinearGradient(...n ? [
				0,
				0,
				0,
				1
			] : [
				1,
				0,
				0,
				0
			], [{
				offset: 0,
				color: `${f}33`
			}, {
				offset: 1,
				color: `${f}00`
			}]),
			borderRadius: _
		},
		label: { show: !1 },
		emphasis: { disabled: !0 },
		...i && { blur: { itemStyle: { opacity: w } } }
	}];
}
var H = 1.05;
function he(e, t, n) {
	let r = (e) => {
		let t = D(e), n = O(e);
		return n !== void 0 && n > t ? n : t;
	}, i = 0;
	for (let a = 0; a < n; a++) {
		let n = 0;
		for (let i of e) {
			let e = i.data[a];
			if (e === void 0) continue;
			let o = r(e);
			o <= 0 || (n = t ? n + o : Math.max(n, o));
		}
		i = Math.max(i, n);
	}
	return i > 0 ? i * H : void 0;
}
var U = "__stackTotal";
function ge(e, t) {
	if (e.length < 2) return;
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let t = 0, i = !1, a = !1;
		for (let n of e) {
			let e = n.data[r];
			if (e === void 0) continue;
			let o = D(e) || 0;
			o > 0 ? i = !0 : o < 0 && (a = !0), t += o;
		}
		if (i && a) return;
		n.push(t);
	}
	return n;
}
function _e(e, t, n, r, i) {
	return {
		name: U,
		type: "bar",
		stack: "stacked",
		data: e.map(() => 0),
		silent: !0,
		legendHoverLink: !1,
		tooltip: { show: !1 },
		emphasis: { disabled: !0 },
		itemStyle: {
			color: "transparent",
			borderWidth: 0
		},
		label: {
			show: !0,
			position: "right",
			color: t,
			fontWeight: "bold",
			fontSize: n,
			formatter: (t) => {
				let n = e[t.dataIndex ?? 0];
				return n === void 0 ? "" : i ? i(n) : String(n);
			}
		},
		labelLayout: (e) => e.labelRect.x + e.labelRect.width <= r ? {} : { fontSize: 0 },
		blur: { label: { opacity: w } }
	};
}
function ve(e) {
	return {
		showLegend: e !== "sm",
		showCategoryAxis: e !== "sm",
		showValueAxis: e !== "sm"
	};
}
function W(n, { categories: r, series: i, orientation: l = "vertical", stacked: h = !1, highlightOverachievement: b = !1, showTargetProgress: S = !1, showLegend: C = !0, showGrid: w = !0, showLabels: T = !1, hideOverflowingLabels: E = !0, labelFitPadding: k, hideAllLabelsOnOverflow: A = !0, windowCategories: j = !1, showAllCategories: M = !1, valueFormatter: P, tooltipValueFormatter: F, categoryFormatter: I, labelFontSize: L, valueAxisSplitNumber: R = 2, echartsOptions: z }, B, V = null) {
	let H = a(n), U = t(), { width: W, height: G } = o(n), ye = e(), K = p();
	return m(() => {
		let e = l === "vertical", t = V ? i.filter((e) => V[e.name] !== !1) : i, n = L ?? g, a = z?.grid?.right, o = ae(a, W), p = ve(B), m = p.showLegend && C, { showCategoryAxis: K } = p, be = !e && T, xe = p.showValueAxis && !be, Se = be ? he(t, h, r.length) : void 0, q = !e && K ? ce(r, H, W, I) : void 0, Ce = pe(i, e, h), we;
		if (E && T) {
			let t = `700 ${n}px ${H.textStyle.fontFamily}`, a = r.map((e, n) => {
				let r = 0;
				for (let e of i) {
					let i = e.data[n];
					if (i === void 0) continue;
					let a = D(i), o = P ? P(a) : String(a);
					r = Math.max(r, oe(o, t));
				}
				return r;
			}), s = a.length ? Math.max(...a) : 0;
			we = (t) => {
				let n = 2 * (k ?? (h ? _ : v)), r = t.rect, i = t.labelRect, c = i.height <= r.height - n, l;
				if (e) {
					let e = (A ? s : a[t.dataIndex ?? 0] ?? 0) <= r.width - n;
					l = h ? e && c : e;
				} else l = h ? i.width <= r.width - n && c : (A ? s + ee <= o : i.x + i.width <= W) && c;
				return l ? {} : { fontSize: 0 };
			};
		}
		let J = i.flatMap((t, r) => me(t, r, e, T, h, b, H.colors.foregroundSecondary, H.colors.containerBackground ?? H.colors.background, n, Ce, we, P)), Y = T && h && !e ? ge(t, r) : void 0;
		if (Y && J.push(_e(Y, H.colors.foregroundSecondary, n, W, P)), !e) {
			let e = de(h ? 1 : i.length, M ? ue : N);
			for (let t of J) Object.assign(t, e);
		}
		let Te = i.map((e) => e.name), Ee = /* @__PURE__ */ new Map();
		i.forEach((e, t) => Ee.set(e.name, le(e, t)));
		let De = /* @__PURE__ */ new Map();
		for (let e of i) {
			let t = e.data.map((e) => O(e));
			t.some((e) => e !== void 0) && De.set(e.name, t);
		}
		let X = F ?? P, Z = f(F, P), Q = fe({
			isVertical: e,
			windowCategories: j,
			showAllCategories: M,
			stacked: h,
			categoryCount: r.length,
			seriesCount: i.length,
			containerHeight: G
		}), $ = s({
			categories: r,
			theme: H,
			series: J,
			legendData: Te,
			isVertical: e,
			showGrid: w,
			showLegend: m,
			showCategoryAxis: K,
			showValueAxis: xe,
			...Q === void 0 ? {} : { categoryVisibleCount: Q },
			valueFormatter: P,
			categoryFormatter: I,
			tooltipValueFormatter: F,
			valueAxisSplitNumber: R,
			...Se === void 0 ? {} : { valueAxisMax: Se },
			...q === void 0 ? {} : { categoryMaxLabelWidth: q },
			echartsOptions: z,
			containerWidth: W,
			containerHeight: G
		}), Oe = i.slice(0, x).map((e) => {
			let t = e.data.slice(0, ne).map((e, t) => {
				let n = D(e), i = X ? X(n) : String(n), a = O(e), o = a === void 0 ? "" : `, target ${X ? X(a) : String(a)}`;
				return `${r[t] ?? t + 1}: ${i}${o}`;
			}).join("; "), n = Math.max(0, e.data.length - ne);
			return `${e.name}: ${t}${n > 0 ? `; ${n} more values` : ""}.`;
		});
		if (i.length > x && Oe.push(`${i.length - x} more series.`), $.aria = {
			enabled: !0,
			label: {
				enabled: !0,
				description: Oe.join(" ")
			}
		}, h && ($.animation = z?.animation ?? !0, $.animationDuration = z?.animationDuration ?? 0, $.animationDurationUpdate = z?.animationDurationUpdate ?? 0, $.stateAnimation = ye ? {
			...z?.stateAnimation,
			duration: 0
		} : z?.stateAnimation ?? {
			duration: ie,
			easing: "cubicOut"
		}), z?.tooltip === void 0 && ($.tooltip = c({
			theme: H,
			formatter: (e) => {
				let n = e, r = String(n.seriesName ?? ""), a = n.dataIndex ?? 0, o = r.endsWith(re), s = o ? r.slice(0, -9) : r, c = o ? i.find((e) => e.name === s)?.data[a] : void 0;
				if (o && c === void 0) return "";
				let l = c === void 0 ? Number(n.value) : D(c), f = o ? u(Ee.get(s) ?? "") : n.marker, p = De.get(s)?.[a], m = h && t.length > 1, g = m ? t.map((e) => {
					let t = e.data[a];
					return t === void 0 ? 0 : D(t) || 0;
				}) : [], _ = g.some((e) => e > 0) && g.some((e) => e < 0), v = g.reduce((e, t) => e + t, 0), y = m && !_;
				return d({
					marker: f,
					title: s,
					subtitle: String(n.name ?? ""),
					value: Z(l),
					rows: [
						y && v !== 0 && {
							value: `${(l / v * 100).toFixed(1)}%`,
							label: U.dataChart.tooltip.ofTotal
						},
						y && {
							value: Z(v),
							label: U.dataChart.tooltip.total
						},
						p !== void 0 && {
							value: Z(p),
							label: U.dataChart.tooltip.target
						},
						S && p !== void 0 && p !== 0 && {
							value: `${(l / p * 100).toFixed(1)}%`,
							label: U.dataChart.tooltip.ofTarget
						}
					]
				}, H);
			}
		})), !e && (!h || Y) && T && a === void 0) {
			let e = $.grid;
			e && (e.right = y);
		}
		if (e && !h && T) {
			let e = z?.grid?.top, t = $.grid;
			e === void 0 && t && typeof t.top == "number" && (t.top += te(n));
		}
		if (q !== void 0) {
			let e = z?.grid?.left, t = $.grid;
			e === void 0 && t && typeof t.left == "number" && (t.left += Math.ceil(q * se));
		}
		return Q !== void 0 && ($.dataZoom = [{
			type: "inside",
			yAxisIndex: 0,
			startValue: 0,
			endValue: Q - 1,
			filterMode: "none",
			zoomLock: !0,
			disabled: !0
		}]), $;
	}, [
		r,
		i,
		l,
		h,
		b,
		S,
		C,
		w,
		T,
		E,
		k,
		A,
		j,
		M,
		P,
		F,
		I,
		L,
		R,
		z,
		H,
		U,
		W,
		G,
		B,
		ye,
		K,
		V
	]);
}
//#endregion
export { z as expandedHorizontalChartHeight, fe as horizontalCategoryWindow, W as useBarChartOptions };
