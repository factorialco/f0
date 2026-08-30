import { chartColor as e, echartsColorPalette as t, resolveCssColor as n } from "./colors.js";
import { baseColors as r } from "@factorialco/f0-core";
//#region src/kits/F0DataChart/utils/theme.ts
var i = {
	padding: [6, 8],
	borderWidth: 1,
	borderRadius: 10,
	transitionDuration: .2,
	boxShadow: "0px 12px 24px -14px rgba(13, 22, 37, 0.2)",
	background: "rgba(255, 255, 255, 0.85)"
}, a = {
	padding: [8, 6],
	borderWidth: 1,
	borderRadius: 10,
	transitionDuration: .2,
	boxShadow: "0px 12px 24px -14px rgba(0, 0, 0, 0.4)",
	background: "rgba(15, 18, 25, 0.85)"
}, o = {
	fontFamily: "Inter, sans-serif",
	fontSize: 12,
	fontWeight: 500
};
function s(e) {
	return typeof document > "u" ? !1 : (e ?? document.documentElement).closest(".dark") !== null;
}
function c(e) {
	let t = e.trim();
	if (t === "" || t === "transparent") return !0;
	let n = /^rgba\(.*,\s*([\d.]+)\s*\)$/.exec(t)?.[1];
	return n !== void 0 && Number.parseFloat(n) === 0;
}
function l(e, t) {
	if (typeof window > "u" || !e) return t;
	let n = e;
	for (; n;) {
		let e = getComputedStyle(n).getPropertyValue("background-color").trim();
		if (!c(e)) return e;
		n = n.parentElement;
	}
	return t;
}
function u(c) {
	let u = s(c), d = e(u ? r.grey[100] : r.white[100]), f = {
		foreground: n("--neutral-80", u ? r.white[80] : r.grey[80], c),
		foregroundSecondary: n("--neutral-50", u ? r.white[50] : r.grey[50], c),
		foregroundTertiary: n("--neutral-40", u ? r.white[40] : r.grey[40], c),
		borderSecondary: n("--neutral-10", u ? r.white[10] : r.grey[10], c),
		border: n("--neutral-30", u ? r.white[30] : r.grey[30], c),
		tooltipBackground: u ? a.background : i.background,
		background: d,
		containerBackground: l(c, d),
		positive: n("--positive-70", r.grass[70], c),
		critical: n("--critical-70", r.red[70], c)
	};
	return {
		mode: u ? "dark" : "light",
		colors: f,
		palette: t,
		tooltip: u ? a : i,
		axisPointer: {
			color: f.border,
			type: "dashed"
		},
		textStyle: o
	};
}
//#endregion
export { u as resolveChartTheme };
