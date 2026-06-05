import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { useId as f, createElement as u } from "react";
import { cn as p } from "../../../../lib/utils.js";
import { ResponsiveContainer as h } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/ResponsiveContainer.js";
import { AreaChart as v } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/AreaChart.js";
import { YAxis as m } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { Area as b } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Area.js";
const c = {
  positive: {
    stroke: "hsl(var(--positive-50))",
    fill: "hsl(var(--positive-50))",
    border: "border-f1-border-positive-bold"
  },
  negative: {
    stroke: "hsl(var(--critical-50))",
    fill: "hsl(var(--critical-50))",
    border: "border-f1-border-critical-bold"
  },
  neutral: {
    stroke: "hsl(var(--neutral-50))",
    fill: "hsl(var(--neutral-50))",
    border: "border-f1-border"
  }
};
function g(e, r) {
  const o = e[0]?.value ?? 0, n = e[e.length - 1]?.value ?? 0, i = Math.sign(n - o), l = r ? i * -1 : i;
  return l > 0 ? "positive" : l < 0 ? "negative" : "neutral";
}
const x = ({
  cx: e,
  cy: r,
  index: o,
  dataLength: n,
  color: i
}) => o !== n - 1 || e == null || r == null ? null : /* @__PURE__ */ t("circle", { cx: e, cy: r, r: 2, fill: i, stroke: "none" }), k = ({
  label: e,
  direction: r
}) => {
  const o = c[r];
  return /* @__PURE__ */ t(
    "span",
    {
      className: p(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        r === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        o.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[r]
      ),
      "data-testid": "sparkline-balance",
      children: e
    }
  );
}, M = ({
  data: e,
  label: r,
  invertStatus: o
}) => {
  const i = `sparkline-gradient-${f().replace(/:/g, "")}`, l = g(e, o), a = c[l];
  return /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ s(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${l} trend`,
      children: [
        /* @__PURE__ */ t(h, { width: "100%", height: "100%", children: /* @__PURE__ */ s(
          v,
          {
            data: e,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: i, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "5%", stopColor: a.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ t("stop", { offset: "95%", stopColor: a.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ t(m, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ t(
                b,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: a.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${i})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (d) => /* @__PURE__ */ u(
                    x,
                    {
                      ...d,
                      key: d.index,
                      dataLength: e.length,
                      color: a.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ t(k, { label: r, direction: l })
      ]
    }
  ) });
};
export {
  M as CardSparkline
};
