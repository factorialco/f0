import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { useId as f, createElement as u } from "react";
import { ResponsiveContainer as p, AreaChart as h, YAxis as v, Area as b } from "recharts";
import { cn as g } from "../../../../lib/utils.js";
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
function m(e, r) {
  const i = e[0]?.value ?? 0, n = e[e.length - 1]?.value ?? 0, l = Math.sign(n - i), o = r ? l * -1 : l;
  return o > 0 ? "positive" : o < 0 ? "negative" : "neutral";
}
const x = ({
  cx: e,
  cy: r,
  index: i,
  dataLength: n,
  color: l
}) => i !== n - 1 || e == null || r == null ? null : /* @__PURE__ */ t("circle", { cx: e, cy: r, r: 2, fill: l, stroke: "none" }), k = ({
  label: e,
  direction: r
}) => {
  const i = c[r];
  return /* @__PURE__ */ t(
    "span",
    {
      className: g(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        r === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        i.border,
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
}, D = ({
  data: e,
  label: r,
  invertStatus: i
}) => {
  const l = `sparkline-gradient-${f().replace(/:/g, "")}`, o = m(e, i), a = c[o];
  return /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ s(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${o} trend`,
      children: [
        /* @__PURE__ */ t(p, { width: "100%", height: "100%", children: /* @__PURE__ */ s(
          h,
          {
            data: e,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ s("linearGradient", { id: l, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "5%", stopColor: a.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ t("stop", { offset: "95%", stopColor: a.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ t(v, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ t(
                b,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: a.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${l})`,
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
        /* @__PURE__ */ t(k, { label: r, direction: o })
      ]
    }
  ) });
};
export {
  D as CardSparkline
};
