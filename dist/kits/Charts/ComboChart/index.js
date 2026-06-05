import { jsx as e, jsxs as j } from "react/jsx-runtime";
import { ChartContainer as I, ChartTooltip as K, ChartTooltipContent as B, ChartLegend as E, ChartLegendContent as G } from "../../../ui/chart.js";
import { getColor as L, getCategoricalColor as A } from "../utils/colors.js";
import { measureTextWidth as M, chartTooltipProps as R, cartesianGridProps as V, yAxisProps as N, xAxisProps as X } from "../utils/elements.js";
import { fixedForwardRef as Y } from "../utils/forwardRef.js";
import { prepareData as _ } from "../utils/muncher.js";
import { ComposedChart as q } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/ComposedChart.js";
import { CartesianGrid as H } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js";
import { YAxis as T } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { XAxis as J } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js";
import { Bar as Q } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Bar.js";
import { LabelList as Z } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/LabelList.js";
import { Line as U } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js";
import { Scatter as tt } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Scatter.js";
const et = (o) => {
  const h = (p) => {
    const { cx: r, cy: g, fill: b, payload: l } = p, C = () => {
      if (!l) return "-";
      if (l[o] !== void 0)
        return l[o];
      for (const [n, f] of Object.entries(l))
        if (typeof f == "number" && n !== "x")
          return f;
      return "-";
    };
    return /* @__PURE__ */ e(
      "circle",
      {
        cx: r,
        cy: g,
        r: 4,
        fill: b,
        stroke: "white",
        strokeWidth: 2,
        ref: (n) => {
          n?.parentElement && n.parentElement.setAttribute(
            "aria-label",
            `Data point: ${C()}`
          );
        }
      }
    );
  };
  return h.displayName = `Scatter-${o}`, h;
}, rt = ({
  dataConfig: o,
  data: h,
  xAxis: p,
  yAxis: r = { hide: !0 },
  label: g = !1,
  hideTooltip: b = !1,
  hideGrid: l = !1,
  aspect: C,
  legend: n,
  showValueUnderLabel: f = !1,
  bar: c,
  line: a,
  scatter: s,
  onClick: k
}, D) => {
  const $ = _(h), u = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = a?.categories ? Array.isArray(a.categories) ? a.categories : [a.categories] : [], P = s?.categories ? Array.isArray(s.categories) ? s.categories : [s.categories] : [], O = [
    ...u,
    ...S,
    ...P
  ], y = Math.max(
    ...$.flatMap(
      (t) => O.map(
        (i) => M(
          r?.tickFormatter ? r.tickFormatter(`${t[i]}`) : `${t[i]}`
        )
      )
    )
  ), m = [c, a, s].filter(
    (t) => t?.axisPosition === "left"
  ), d = [c, a, s].filter(
    (t) => t?.axisPosition === "right"
  );
  return /* @__PURE__ */ e(I, { config: o, ref: D, aspect: C, children: /* @__PURE__ */ j(
    q,
    {
      accessibilityLayer: !0,
      data: $,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: g ? 24 : 0,
        bottom: f ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (t) => {
        if (!k || !t.activeLabel || !t.activePayload)
          return;
        const i = {
          label: t.activeLabel,
          values: {}
        };
        for (const v of t.activePayload)
          i.values[v.name] = v.value;
        k(i);
      },
      children: [
        !b && /* @__PURE__ */ e(
          K,
          {
            ...R(),
            content: /* @__PURE__ */ e(B, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !l && /* @__PURE__ */ e(H, { ...V() }),
        m.length > 0 && /* @__PURE__ */ e(
          T,
          {
            ...N(r),
            tick: !0,
            width: r.width ?? y + 20 + (d.length > 0 && m[0]?.axisLabel ? 20 : 0),
            hide: r.hide || m.some((t) => t?.hideAxis),
            label: m[0]?.axisLabel ? {
              value: m[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        d.length > 0 && /* @__PURE__ */ e(
          T,
          {
            ...N(r),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: r.width ?? y + 20 + (m.length > 0 && d[0]?.axisLabel ? 20 : 0),
            hide: r.hide || d.some((t) => t?.hideAxis),
            label: d[0]?.axisLabel ? {
              value: d[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ e(
          J,
          {
            ...X(p),
            hide: p?.hide,
            tick: f ? (t) => {
              const { x: i, y: v, payload: F } = t, w = h.find((z) => z.label === F.value)?.values || "", x = Object.keys(w).length === 1 ? Object.values(w)?.[0] : void 0, W = x !== void 0 && r.tickFormatter ? r.tickFormatter(`${x}`) : x.toLocaleString();
              return /* @__PURE__ */ j("g", { transform: `translate(${i},${v})`, children: [
                /* @__PURE__ */ e(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: F.value
                  }
                ),
                !!x && /* @__PURE__ */ e(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: W
                  }
                )
              ] });
            } : void 0
          }
        ),
        u.map((t, i) => /* @__PURE__ */ e(
          Q,
          {
            isAnimationActive: !1,
            dataKey: String(t),
            fill: o[t].color ? L(o[t].color) : A(i),
            radius: 4,
            maxBarSize: 32,
            children: g && /* @__PURE__ */ e(
              Z,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(t)}`
            )
          },
          `bar-${String(t)}`
        )),
        S.map((t, i) => /* @__PURE__ */ e(
          U,
          {
            type: a?.lineType ?? "natural",
            dataKey: String(t),
            stroke: o[t].color ? L(o[t].color) : A(u.length + i),
            strokeWidth: 2,
            dot: a?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: a?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(t)}`
        )),
        P.map((t, i) => /* @__PURE__ */ e(
          tt,
          {
            dataKey: String(t),
            fill: o[t].color ? L(o[t].color) : A(
              u.length + S.length + i
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: s?.axisPosition === "right" ? "right" : void 0,
            shape: et(String(t))
          },
          `scatter-${String(t)}`
        )),
        n && /* @__PURE__ */ e(
          E,
          {
            content: /* @__PURE__ */ e(G, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, vt = Y(rt);
export {
  vt as ComboChart
};
