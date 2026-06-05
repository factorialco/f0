import { colord as l } from "../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.js";
import { baseColors as r } from "../../../packages/core/src/tokens/colors.js";
const h = [
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
], d = {
  lilac: r.lilac[50],
  barbie: r.barbie[50],
  smoke: r.smoke[50],
  army: r.army[50],
  flubber: r.flubber[50],
  indigo: r.indigo[50],
  camel: r.camel[50],
  radical: r.radical[50],
  viridian: r.viridian[50],
  orange: r.orange[50],
  red: r.red[50],
  grass: r.grass[50],
  malibu: r.malibu[50],
  yellow: r.yellow[50],
  purple: r.purple[50]
};
function m(t) {
  return e(d[t]);
}
function e(t) {
  return l(`hsl(${t})`).toHex();
}
function y(t, n, i) {
  if (typeof document > "u")
    return e(n);
  const o = i ?? document.documentElement, a = getComputedStyle(o).getPropertyValue(t).trim();
  return a ? l(`hsl(${a})`).toHex() : e(n);
}
const u = [
  e(r.viridian[50]),
  e(r.purple[50]),
  e(r.barbie[50]),
  e(r.yellow[50]),
  e(r.indigo[50]),
  e(r.lilac[70]),
  e(r.smoke[60]),
  e(r.malibu[70]),
  e(r.grass[50]),
  e(r.red[60])
];
function g(t) {
  return u[t % u.length] ?? "#999";
}
function f(t, n, i) {
  const o = l(t).toRgb(), a = l(n).toRgb(), s = Math.round(o.r + (a.r - o.r) * i), c = Math.round(o.g + (a.g - o.g) * i), b = Math.round(o.b + (a.b - o.b) * i);
  return l({ r: s, g: c, b }).toHex();
}
function v(t, n, i, o) {
  return t ? m(t) : n || (o ? f(
    o.lightColor,
    o.baseColor,
    o.ratio
  ) : g(i));
}
export {
  e as chartColor,
  h as chartColorTokens,
  u as echartsColorPalette,
  f as lerpColor,
  g as paletteColor,
  m as resolveChartColorToken,
  y as resolveCssColor,
  v as resolveDataPointColor
};
