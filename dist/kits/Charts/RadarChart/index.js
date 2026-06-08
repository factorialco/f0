import { jsx as e, jsxs as f } from "react/jsx-runtime";
import { useState as x } from "react";
import { RadarChart as y, PolarGrid as b, PolarAngleAxis as R, PolarRadiusAxis as j, Radar as T } from "recharts";
import { DataTestIdWrapper as v } from "../../../lib/data-testid/index.js";
import { cn as A, focusRing as w } from "../../../lib/utils.js";
import { ChartContainer as K, ChartTooltip as N, ChartTooltipContent as L, ChartLegend as P } from "../../../ui/chart.js";
import { getColor as D, getCategoricalColor as H } from "../utils/colors.js";
import { fixedForwardRef as I } from "../utils/forwardRef.js";
const M = ({
  series: c,
  hiddenKeys: n,
  onToggle: d
}) => /* @__PURE__ */ e("div", { className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", children: c.map(({ key: a, color: m, label: o }) => {
  const s = n.includes(a);
  return /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      className: A(
        "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground",
        w(),
        s ? "opacity-40" : "opacity-100"
      ),
      "aria-label": typeof o == "string" ? o : void 0,
      "aria-pressed": !s,
      onClick: () => d(a),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: { backgroundColor: m }
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-f1-foreground", children: o })
      ]
    },
    a
  );
}) }), O = ({
  data: c,
  dataConfig: n,
  scaleMin: d,
  scaleMax: a,
  aspect: m,
  defaultHiddenSeries: o,
  dataTestId: s
}, u) => {
  const [p, g] = x(
    o ?? []
  ), l = Object.entries(n).map(([t, r], i) => ({
    key: t,
    color: r.color ? D(r.color) : H(i),
    label: r.label
  })), h = (t) => {
    g((r) => r.includes(t) ? r.filter((i) => i !== t) : r.length >= l.length - 1 ? r : [...r, t]);
  }, C = c.map((t) => ({
    subject: t.label,
    ...t.values
  }));
  return /* @__PURE__ */ e(v, { dataTestId: s, children: /* @__PURE__ */ e(
    K,
    {
      config: n,
      ref: u,
      aspect: m,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ f(y, { accessibilityLayer: !0, data: C, children: [
        /* @__PURE__ */ e(
          N,
          {
            cursor: !0,
            content: /* @__PURE__ */ e(L, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ e(b, { gridType: "circle" }),
        /* @__PURE__ */ e(R, { dataKey: "subject" }),
        /* @__PURE__ */ e(
          j,
          {
            angle: 90,
            type: "number",
            domain: [d ?? "dataMin", a ?? "dataMax"]
          }
        ),
        l.filter(({ key: t }) => !p.includes(t)).map(({ key: t, color: r, label: i }) => /* @__PURE__ */ e(
          T,
          {
            dataKey: t,
            fill: r,
            stroke: r,
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: i,
            isAnimationActive: !1
          },
          t
        )),
        l.length > 1 && /* @__PURE__ */ e(
          P,
          {
            iconType: "star",
            content: /* @__PURE__ */ e(
              M,
              {
                series: l,
                hiddenKeys: p,
                onToggle: h
              }
            )
          }
        )
      ] })
    }
  ) });
}, z = I(O);
export {
  z as RadarChart
};
