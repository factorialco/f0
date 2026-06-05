import { baseColors as r } from "../../../packages/core/src/tokens/colors.js";
import { chartColor as n, resolveCssColor as e, echartsColorPalette as u } from "./colors.js";
const d = {
  // 6px vertical, 8px horizontal
  padding: [6, 8],
  borderWidth: 1,
  borderRadius: 10,
  transitionDuration: 0.2,
  boxShadow: "0px 12px 24px -14px rgba(13, 22, 37, 0.2)",
  background: "rgba(255, 255, 255, 0.85)"
}, i = {
  padding: [8, 6],
  borderWidth: 1,
  borderRadius: 10,
  transitionDuration: 0.2,
  boxShadow: "0px 12px 24px -14px rgba(0, 0, 0, 0.4)",
  background: "rgba(15, 18, 25, 0.85)"
}, s = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  fontWeight: 500
};
function g(t) {
  return typeof document > "u" ? !1 : (t ?? document.documentElement).closest(".dark") !== null;
}
function b(t) {
  const o = g(t), a = {
    foreground: e(
      "--neutral-80",
      o ? r.white[80] : r.grey[80],
      t
    ),
    foregroundSecondary: e(
      "--neutral-50",
      o ? r.white[50] : r.grey[50],
      t
    ),
    foregroundTertiary: e(
      "--neutral-40",
      o ? r.white[40] : r.grey[40],
      t
    ),
    borderSecondary: e(
      "--neutral-10",
      o ? r.white[10] : r.grey[10],
      t
    ),
    border: e(
      "--neutral-30",
      o ? r.white[30] : r.grey[30],
      t
    ),
    tooltipBackground: o ? i.background : d.background,
    background: o ? n(r.grey[100]) : n(r.white[100])
  };
  return {
    mode: o ? "dark" : "light",
    colors: a,
    palette: u,
    tooltip: o ? i : d,
    axisPointer: {
      color: a.border,
      type: "dashed"
    },
    textStyle: s
  };
}
export {
  b as resolveChartTheme
};
