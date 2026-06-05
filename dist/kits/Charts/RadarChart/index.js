import { jsx as t, jsxs as f } from "react/jsx-runtime";
import { useState as x } from "react";
import { DataTestIdWrapper as y } from "../../../lib/data-testid/index.js";
import { cn as b, focusRing as R } from "../../../lib/utils.js";
import { ChartContainer as j, ChartTooltip as T, ChartTooltipContent as v, ChartLegend as A } from "../../../ui/chart.js";
import { getColor as w, getCategoricalColor as K } from "../utils/colors.js";
import { fixedForwardRef as N } from "../utils/forwardRef.js";
import { RadarChart as L } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/RadarChart.js";
import { PolarGrid as P } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/PolarGrid.js";
import { PolarAngleAxis as D } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/PolarAngleAxis.js";
import { PolarRadiusAxis as H } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/PolarRadiusAxis.js";
import { Radar as I } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/Radar.js";
const M = ({
  series: c,
  hiddenKeys: n,
  onToggle: d
}) => /* @__PURE__ */ t("div", { className: "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", children: c.map(({ key: a, color: m, label: o }) => {
  const s = n.includes(a);
  return /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      className: b(
        "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground",
        R(),
        s ? "opacity-40" : "opacity-100"
      ),
      "aria-label": typeof o == "string" ? o : void 0,
      "aria-pressed": !s,
      onClick: () => d(a),
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: { backgroundColor: m }
          }
        ),
        /* @__PURE__ */ t("span", { className: "text-f1-foreground", children: o })
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
  ), l = Object.entries(n).map(([r, e], i) => ({
    key: r,
    color: e.color ? w(e.color) : K(i),
    label: e.label
  })), h = (r) => {
    g((e) => e.includes(r) ? e.filter((i) => i !== r) : e.length >= l.length - 1 ? e : [...e, r]);
  }, C = c.map((r) => ({
    subject: r.label,
    ...r.values
  }));
  return /* @__PURE__ */ t(y, { dataTestId: s, children: /* @__PURE__ */ t(
    j,
    {
      config: n,
      ref: u,
      aspect: m,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ f(L, { accessibilityLayer: !0, data: C, children: [
        /* @__PURE__ */ t(
          T,
          {
            cursor: !0,
            content: /* @__PURE__ */ t(v, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ t(P, { gridType: "circle" }),
        /* @__PURE__ */ t(D, { dataKey: "subject" }),
        /* @__PURE__ */ t(
          H,
          {
            angle: 90,
            type: "number",
            domain: [d ?? "dataMin", a ?? "dataMax"]
          }
        ),
        l.filter(({ key: r }) => !p.includes(r)).map(({ key: r, color: e, label: i }) => /* @__PURE__ */ t(
          I,
          {
            dataKey: r,
            fill: e,
            stroke: e,
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: i,
            isAnimationActive: !1
          },
          r
        )),
        l.length > 1 && /* @__PURE__ */ t(
          A,
          {
            iconType: "star",
            content: /* @__PURE__ */ t(
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
}, Q = N(O);
export {
  Q as RadarChart
};
