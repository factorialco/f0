import { baseColors as e } from "@factorialco/f0-core";
import { colord as t } from "colord";
//#region src/kits/F0DataChart/utils/colors.ts
var n = [
	"lilac",
	"barbie",
	"smoke",
	"army",
	"flubber",
	"indigo",
	"camel",
	"radical",
	"viridian",
	"orange",
	"red",
	"grass",
	"malibu",
	"yellow",
	"purple"
], r = {
	lilac: e.lilac[50],
	barbie: e.barbie[50],
	smoke: e.smoke[50],
	army: e.army[50],
	flubber: e.flubber[50],
	indigo: e.indigo[50],
	camel: e.camel[50],
	radical: e.radical[50],
	viridian: e.viridian[50],
	orange: e.orange[50],
	red: e.red[50],
	grass: e.grass[50],
	malibu: e.malibu[50],
	yellow: e.yellow[50],
	purple: e.purple[50]
};
function i(e) {
	return a(r[e]);
}
function a(e) {
	return t(`hsl(${e})`).toHex();
}
function o(e, n, r) {
	if (typeof document > "u") return a(n);
	let i = r ?? document.documentElement, o = getComputedStyle(i).getPropertyValue(e).trim();
	return o ? t(`hsl(${o})`).toHex() : a(n);
}
var s = [
	a(e.viridian[50]),
	a(e.purple[50]),
	a(e.barbie[50]),
	a(e.yellow[50]),
	a(e.indigo[50]),
	a(e.lilac[70]),
	a(e.smoke[60]),
	a(e.malibu[70]),
	a(e.grass[50]),
	a(e.red[60])
];
function c(e) {
	return s[e % s.length] ?? "#999";
}
var l = .12;
function u(e) {
	return t(e).darken(l).toHex();
}
function d(e, n, r) {
	let i = t(e).toRgb(), a = t(n).toRgb(), o = Math.round(i.r + (a.r - i.r) * r), s = Math.round(i.g + (a.g - i.g) * r), c = Math.round(i.b + (a.b - i.b) * r);
	return t({
		r: o,
		g: s,
		b: c
	}).toHex();
}
function f(e, t, n, r) {
	return e ? i(e) : t || (r ? d(r.lightColor, r.baseColor, r.ratio) : c(n));
}
//#endregion
export { a as chartColor, n as chartColorTokens, u as darkenChartColor, s as echartsColorPalette, d as lerpColor, c as paletteColor, i as resolveChartColorToken, o as resolveCssColor, f as resolveDataPointColor };
