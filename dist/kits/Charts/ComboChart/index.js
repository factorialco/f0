import { jsx as e, jsxs as j } from "react/jsx-runtime";
import { ComposedChart as I, CartesianGrid as K, YAxis as N, XAxis as B, Bar as E, LabelList as G, Line as M, Scatter as R } from "recharts";
import { ChartContainer as V, ChartTooltip as X, ChartTooltipContent as Y, ChartLegend as _, ChartLegendContent as q } from "../../../ui/chart.js";
import { getColor as L, getCategoricalColor as A } from "../utils/colors.js";
import { measureTextWidth as H, chartTooltipProps as J, cartesianGridProps as Q, yAxisProps as T, xAxisProps as Z } from "../utils/elements.js";
import { fixedForwardRef as U } from "../utils/forwardRef.js";
import { prepareData as tt } from "../utils/muncher.js";
const et = (a) => {
  const m = (p) => {
    const { cx: i, cy: g, fill: b, payload: l } = p, C = () => {
      if (!l) return "-";
      if (l[a] !== void 0)
        return l[a];
      for (const [n, f] of Object.entries(l))
        if (typeof f == "number" && n !== "x")
          return f;
      return "-";
    };
    return /* @__PURE__ */ e(
      "circle",
      {
        cx: i,
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
  return m.displayName = `Scatter-${a}`, m;
}, it = ({
  dataConfig: a,
  data: m,
  xAxis: p,
  yAxis: i = { hide: !0 },
  label: g = !1,
  hideTooltip: b = !1,
  hideGrid: l = !1,
  aspect: C,
  legend: n,
  showValueUnderLabel: f = !1,
  bar: c,
  line: o,
  scatter: s,
  onClick: k
}, D) => {
  const $ = tt(m), u = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = o?.categories ? Array.isArray(o.categories) ? o.categories : [o.categories] : [], P = s?.categories ? Array.isArray(s.categories) ? s.categories : [s.categories] : [], O = [
    ...u,
    ...S,
    ...P
  ], y = Math.max(
    ...$.flatMap(
      (t) => O.map(
        (r) => H(
          i?.tickFormatter ? i.tickFormatter(`${t[r]}`) : `${t[r]}`
        )
      )
    )
  ), d = [c, o, s].filter(
    (t) => t?.axisPosition === "left"
  ), h = [c, o, s].filter(
    (t) => t?.axisPosition === "right"
  );
  return /* @__PURE__ */ e(V, { config: a, ref: D, aspect: C, children: /* @__PURE__ */ j(
    I,
    {
      accessibilityLayer: !0,
      data: $,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: g ? 24 : 0,
        bottom: f ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (t) => {
        if (!k || !t.activeLabel || !t.activePayload)
          return;
        const r = {
          label: t.activeLabel,
          values: {}
        };
        for (const v of t.activePayload)
          r.values[v.name] = v.value;
        k(r);
      },
      children: [
        !b && /* @__PURE__ */ e(
          X,
          {
            ...J(),
            content: /* @__PURE__ */ e(Y, { yAxisFormatter: i.tickFormatter })
          }
        ),
        !l && /* @__PURE__ */ e(K, { ...Q() }),
        d.length > 0 && /* @__PURE__ */ e(
          N,
          {
            ...T(i),
            tick: !0,
            width: i.width ?? y + 20 + (h.length > 0 && d[0]?.axisLabel ? 20 : 0),
            hide: i.hide || d.some((t) => t?.hideAxis),
            label: d[0]?.axisLabel ? {
              value: d[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        h.length > 0 && /* @__PURE__ */ e(
          N,
          {
            ...T(i),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: i.width ?? y + 20 + (d.length > 0 && h[0]?.axisLabel ? 20 : 0),
            hide: i.hide || h.some((t) => t?.hideAxis),
            label: h[0]?.axisLabel ? {
              value: h[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ e(
          B,
          {
            ...Z(p),
            hide: p?.hide,
            tick: f ? (t) => {
              const { x: r, y: v, payload: F } = t, w = m.find((z) => z.label === F.value)?.values || "", x = Object.keys(w).length === 1 ? Object.values(w)?.[0] : void 0, W = x !== void 0 && i.tickFormatter ? i.tickFormatter(`${x}`) : x.toLocaleString();
              return /* @__PURE__ */ j("g", { transform: `translate(${r},${v})`, children: [
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
        u.map((t, r) => /* @__PURE__ */ e(
          E,
          {
            isAnimationActive: !1,
            dataKey: String(t),
            fill: a[t].color ? L(a[t].color) : A(r),
            radius: 4,
            maxBarSize: 32,
            children: g && /* @__PURE__ */ e(
              G,
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
        S.map((t, r) => /* @__PURE__ */ e(
          M,
          {
            type: o?.lineType ?? "natural",
            dataKey: String(t),
            stroke: a[t].color ? L(a[t].color) : A(u.length + r),
            strokeWidth: 2,
            dot: o?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: o?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(t)}`
        )),
        P.map((t, r) => /* @__PURE__ */ e(
          R,
          {
            dataKey: String(t),
            fill: a[t].color ? L(a[t].color) : A(
              u.length + S.length + r
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: s?.axisPosition === "right" ? "right" : void 0,
            shape: et(String(t))
          },
          `scatter-${String(t)}`
        )),
        n && /* @__PURE__ */ e(
          _,
          {
            content: /* @__PURE__ */ e(q, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, dt = U(it);
export {
  dt as ComboChart
};
