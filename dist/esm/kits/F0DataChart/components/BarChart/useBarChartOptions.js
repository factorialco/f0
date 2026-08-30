import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { darkenChartColor as t, paletteColor as n, resolveChartColorToken as r } from "../../utils/colors.js";
import { useChartTheme as i } from "../../utils/useChartTheme.js";
import { useContainerSize as a } from "../../utils/useContainerSize.js";
import { useReducedMotion as o } from "../../../../lib/a11y.js";
import { buildBaseChartOptions as s, buildItemTooltip as c, labelWidthCap as l, renderValueTooltip as u, tooltipValueFormat as d } from "../../utils/options.js";
import { useFontsReady as f } from "../../utils/useFontsReady.js";
import { useMemo as p } from "react";
import * as m from "echarts";
//#region src/kits/F0DataChart/components/BarChart/useBarChartOptions.ts
var h = 11, ee = 6, g = 0, _ = 60, te = 8, v = 5;
function ne(e) {
	return Math.ceil(e * 1.4) + v;
}
var y = 10, re = 20, b = "#ffffff", x = .5, S = .4, ie = 500;
function ae(e, t) {
	if (typeof e == "number") return e;
	if (typeof e == "string" && e.endsWith("%")) {
		let n = Number.parseFloat(e);
		if (Number.isFinite(n)) return t * n / 100;
	}
	return _;
}
var C;
function w(e, t) {
	return C === void 0 && (C = typeof document < "u" ? document.createElement("canvas").getContext("2d") : null), C ? (C.font = t, C.measureText(e).width) : e.length * 8;
}
var T = 4, oe = .08;
function se(e, t, n, r) {
	let i = `${t.textStyle.fontWeight} ${t.textStyle.fontSize}px ${t.textStyle.fontFamily}`, a = 0;
	for (let t of e) {
		let e = r ? r(t) : t;
		a = Math.max(a, w(e, i));
	}
	return Math.min(Math.ceil(a) + T, l(n));
}
function E(e) {
	return typeof e == "number" ? e : e.value;
}
function D(e) {
	return typeof e == "number" ? void 0 : e.target;
}
function O(e) {
	if (typeof e != "number" && e.color !== void 0) return r(e.color);
}
function k(e, t) {
	return e.color ? r(e.color) : n(t);
}
function A(e, n, r, i) {
	let a = (n - r) / n, o = t(e);
	return new m.graphic.LinearGradient(...i ? [
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
	let t = E(e), n = D(e);
	if (!(n === void 0 || t <= 0 || t <= n)) return n;
}
function M(e) {
	return e.data.some((e) => typeof e != "number" && e.target !== void 0);
}
var N = 16, ce = 24, P = 8, F = 24;
function I(e) {
	return e > 1 ? F : P;
}
var L = 64;
function R(e, t = N) {
	let n = Math.max(1, e);
	return n * t + (n - 1) * P + I(n);
}
function le(e, t = N) {
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
	let n = R(e.stacked ? 1 : e.series?.length ?? 1, ce);
	return Math.ceil(t * n) + L;
}
function ue({ isVertical: e, windowCategories: t, showAllCategories: n, stacked: r, categoryCount: i, seriesCount: a, containerHeight: o }) {
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
function de(e, t, n) {
	if (!n) return e.some((e) => e.data.some((e) => E(e) < 0)) ? (e, n, r) => V(t, r < 0) : void 0;
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	return e.forEach((e, t) => {
		e.data.forEach((e, n) => {
			let a = E(e);
			a > 0 ? r.set(n, t) : a < 0 && i.set(n, t);
		});
	}), (e, n, a) => {
		if (a === 0) return 0;
		let o = a < 0;
		return (o ? i : r).get(n) === e ? V(t, o) : 0;
	};
}
function fe(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = k(e, t), p = M(e), h = i ? p ? `stacked-${t}` : "stacked" : p ? `stack-${t}` : void 0, ee = e.data.map((e, r) => {
		let i = E(e), o = O(e), s = l?.(t, r, i), c = a ? j(e) : void 0, u = c === void 0 ? o : A(o ?? f, i, c, n);
		return u === void 0 && s === void 0 ? i : {
			value: i,
			itemStyle: {
				...u !== void 0 && { color: u },
				...s !== void 0 && { borderRadius: s }
			}
		};
	}), g = V(n, !1), _ = {
		name: e.name,
		type: "bar",
		data: ee,
		stack: h,
		itemStyle: {
			color: f,
			borderRadius: g,
			...i && {
				borderColor: s,
				borderWidth: x
			}
		},
		label: {
			show: r,
			position: i ? "inside" : n ? "top" : "right",
			color: i ? b : o,
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
				color: b
			} } : {}
		},
		...i && { blur: {
			itemStyle: { opacity: S },
			label: { opacity: S }
		} }
	};
	if (!p) return [_];
	let te = e.data.map((e) => {
		let t = E(e), r = D(e);
		if (r === void 0 || r <= t) return 0;
		let i = O(e);
		return i === void 0 ? r - t : {
			value: r - t,
			itemStyle: {
				color: new m.graphic.LinearGradient(...n ? [
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
				borderRadius: g
			}
		};
	});
	return [_, {
		name: `${e.name} (target)`,
		type: "bar",
		data: te,
		stack: h,
		legendHoverLink: !1,
		tooltip: { show: !1 },
		itemStyle: {
			color: new m.graphic.LinearGradient(...n ? [
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
			borderRadius: g
		},
		label: { show: !1 },
		emphasis: { disabled: !0 },
		...i && { blur: { itemStyle: { opacity: S } } }
	}];
}
var H = 1.05;
function pe(e, t, n) {
	let r = (e) => {
		let t = E(e), n = D(e);
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
function me(e, t) {
	if (e.length < 2) return;
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let t = 0, i = !1, a = !1;
		for (let n of e) {
			let e = n.data[r];
			if (e === void 0) continue;
			let o = E(e) || 0;
			o > 0 ? i = !0 : o < 0 && (a = !0), t += o;
		}
		if (i && a) return;
		n.push(t);
	}
	return n;
}
function he(e, t, n, r, i) {
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
		blur: { label: { opacity: S } }
	};
}
function ge(e) {
	return {
		showLegend: e !== "sm",
		showCategoryAxis: e !== "sm",
		showValueAxis: e !== "sm"
	};
}
function W(t, { categories: n, series: r, orientation: l = "vertical", stacked: m = !1, highlightOverachievement: v = !1, showTargetProgress: b = !1, showLegend: x = !0, showGrid: S = !0, showLabels: C = !1, hideOverflowingLabels: T = !0, labelFitPadding: O, hideAllLabelsOnOverflow: k = !0, windowCategories: A = !1, showAllCategories: j = !1, valueFormatter: M, tooltipValueFormatter: P, categoryFormatter: F, labelFontSize: I, valueAxisSplitNumber: L = 2, echartsOptions: R }, z, B = null) {
	let V = i(t), H = e(), { width: U, height: W } = a(t), _e = o(), G = f();
	return p(() => {
		let e = l === "vertical", t = B ? r.filter((e) => B[e.name] !== !1) : r, i = I ?? h, a = R?.grid?.right, o = ae(a, U), f = ge(z), p = f.showLegend && x, { showCategoryAxis: G } = f, ve = !e && C, ye = f.showValueAxis && !ve, be = ve ? pe(t, m, n.length) : void 0, K = !e && G ? se(n, V, U, F) : void 0, xe = de(r, e, m), q;
		if (T && C) {
			let t = `700 ${i}px ${V.textStyle.fontFamily}`, a = n.map((e, n) => {
				let i = 0;
				for (let e of r) {
					let r = e.data[n];
					if (r === void 0) continue;
					let a = E(r), o = M ? M(a) : String(a);
					i = Math.max(i, w(o, t));
				}
				return i;
			}), s = a.length ? Math.max(...a) : 0;
			q = (t) => {
				let n = 2 * (O ?? (m ? ee : g)), r = t.rect, i = t.labelRect, c = i.height <= r.height - n, l;
				if (e) {
					let e = (k ? s : a[t.dataIndex ?? 0] ?? 0) <= r.width - n;
					l = m ? e && c : e;
				} else l = m ? i.width <= r.width - n && c : (k ? s + te <= o : i.x + i.width <= U) && c;
				return l ? {} : { fontSize: 0 };
			};
		}
		let J = r.flatMap((t, n) => fe(t, n, e, C, m, v, V.colors.foregroundSecondary, V.colors.containerBackground ?? V.colors.background, i, xe, q, M)), Y = C && m && !e ? me(t, n) : void 0;
		if (Y && J.push(he(Y, V.colors.foregroundSecondary, i, U, M)), !e) {
			let e = le(m ? 1 : r.length, j ? ce : N);
			for (let t of J) Object.assign(t, e);
		}
		let Se = r.map((e) => e.name), Ce = /* @__PURE__ */ new Map();
		for (let e of r) {
			let t = e.data.map((e) => D(e));
			t.some((e) => e !== void 0) && Ce.set(e.name, t);
		}
		let X = P ?? M, Z = d(P, M), Q = ue({
			isVertical: e,
			windowCategories: A,
			showAllCategories: j,
			stacked: m,
			categoryCount: n.length,
			seriesCount: r.length,
			containerHeight: W
		}), $ = s({
			categories: n,
			theme: V,
			series: J,
			legendData: Se,
			isVertical: e,
			showGrid: S,
			showLegend: p,
			showCategoryAxis: G,
			showValueAxis: ye,
			...Q === void 0 ? {} : { categoryVisibleCount: Q },
			valueFormatter: M,
			categoryFormatter: F,
			tooltipValueFormatter: P,
			valueAxisSplitNumber: L,
			...be === void 0 ? {} : { valueAxisMax: be },
			...K === void 0 ? {} : { categoryMaxLabelWidth: K },
			echartsOptions: R,
			containerWidth: U,
			containerHeight: W
		}), we = r.slice(0, y).map((e) => {
			let t = e.data.slice(0, re).map((e, t) => {
				let r = E(e), i = X ? X(r) : String(r), a = D(e), o = a === void 0 ? "" : `, target ${X ? X(a) : String(a)}`;
				return `${n[t] ?? t + 1}: ${i}${o}`;
			}).join("; "), r = Math.max(0, e.data.length - re);
			return `${e.name}: ${t}${r > 0 ? `; ${r} more values` : ""}.`;
		});
		if (r.length > y && we.push(`${r.length - y} more series.`), $.aria = {
			enabled: !0,
			label: {
				enabled: !0,
				description: we.join(" ")
			}
		}, m && ($.animation = R?.animation ?? !0, $.animationDuration = R?.animationDuration ?? 0, $.animationDurationUpdate = R?.animationDurationUpdate ?? 0, $.stateAnimation = _e ? {
			...R?.stateAnimation,
			duration: 0
		} : R?.stateAnimation ?? {
			duration: ie,
			easing: "cubicOut"
		}), R?.tooltip === void 0 && ($.tooltip = c({
			theme: V,
			formatter: (e) => {
				let n = e, r = String(n.seriesName ?? "");
				if (r.endsWith(" (target)")) return "";
				let i = Number(n.value), a = n.dataIndex ?? 0, o = Ce.get(r)?.[a], s = m && t.length > 1, c = s ? t.map((e) => {
					let t = e.data[a];
					return t === void 0 ? 0 : E(t) || 0;
				}) : [], l = c.some((e) => e > 0) && c.some((e) => e < 0), d = c.reduce((e, t) => e + t, 0), f = s && !l;
				return u({
					marker: n.marker,
					title: r,
					subtitle: String(n.name ?? ""),
					value: Z(i),
					rows: [
						f && d !== 0 && {
							value: `${(i / d * 100).toFixed(1)}%`,
							label: H.dataChart.tooltip.ofTotal
						},
						f && {
							value: Z(d),
							label: H.dataChart.tooltip.total
						},
						o !== void 0 && {
							value: Z(o),
							label: H.dataChart.tooltip.target
						},
						b && o !== void 0 && o !== 0 && {
							value: `${(i / o * 100).toFixed(1)}%`,
							label: H.dataChart.tooltip.ofTarget
						}
					]
				}, V);
			}
		})), !e && (!m || Y) && C && a === void 0) {
			let e = $.grid;
			e && (e.right = _);
		}
		if (e && !m && C) {
			let e = R?.grid?.top, t = $.grid;
			e === void 0 && t && typeof t.top == "number" && (t.top += ne(i));
		}
		if (K !== void 0) {
			let e = R?.grid?.left, t = $.grid;
			e === void 0 && t && typeof t.left == "number" && (t.left += Math.ceil(K * oe));
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
		n,
		r,
		l,
		m,
		v,
		b,
		x,
		S,
		C,
		T,
		O,
		k,
		A,
		j,
		M,
		P,
		F,
		I,
		L,
		R,
		V,
		H,
		U,
		W,
		z,
		_e,
		G,
		B
	]);
}
//#endregion
export { z as expandedHorizontalChartHeight, ue as horizontalCategoryWindow, W as useBarChartOptions };
