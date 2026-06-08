import { jsx as s, jsxs as b, Fragment as T } from "react/jsx-runtime";
import { cva as E } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import K from "../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.js";
import * as m from "react";
import { useState as O, useMemo as P, useLayoutEffect as I } from "react";
import * as _ from "recharts";
import { cn as f } from "../lib/utils.js";
const M = E({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), q = { light: "", dark: ".dark" }, R = m.createContext(null);
function $() {
  const c = m.useContext(R);
  if (!c)
    throw new Error("useChart must be used within a <ChartContainer />");
  return c;
}
const H = ({
  id: c,
  className: e,
  children: t,
  aspect: o,
  config: a,
  ...n
}, l) => {
  const u = m.useId(), i = `chart-${c || u.replace(/:/g, "")}`, d = m.useRef(null), [p, h] = O(), C = P(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return I(() => {
    const g = l && "current" in l ? l.current : d.current;
    return g && C.observe(g.parentElement), () => {
      C.disconnect();
    };
  }, [C, l, d]), /* @__PURE__ */ s(R.Provider, { value: { config: a }, children: /* @__PURE__ */ b(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": i,
      ref: l || d,
      className: f(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        o ? M({ aspect: o }) : "aspect-auto h-full",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ s(J, { id: i, config: a }),
        /* @__PURE__ */ s(
          _.ResponsiveContainer,
          {
            height: p,
            className: "overflow-visible",
            children: t
          }
        )
      ]
    }
  ) });
}, z = m.forwardRef(H);
z.displayName = "Chart";
const J = ({ id: c, config: e }) => {
  const t = Object.entries(e).filter(([a, n]) => n.theme || n.color);
  if (!t.length)
    return null;
  const o = Object.entries(q).map(
    ([a, n]) => `
${n} [data-chart=${c}] {
${t.map(([l, u]) => {
      const i = u.theme?.[a] || u.color;
      return i ? `  --color-${l}: ${i};` : null;
    }).join(`
`)}
}
`
  );
  return /* @__PURE__ */ s(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: K.sanitize(o.join(`
`))
      }
    }
  );
}, X = _.Tooltip, B = m.forwardRef(
  ({
    active: c,
    payload: e,
    className: t,
    indicator: o = "dot",
    hideLabel: a = !1,
    hideIndicator: n = !1,
    label: l,
    labelFormatter: u,
    labelClassName: i,
    formatter: d,
    yAxisFormatter: p,
    color: h,
    nameKey: C,
    labelKey: g
  }, S) => {
    const { config: x } = $(), j = m.useMemo(() => {
      if (a || !e?.length)
        return null;
      const [r] = e, w = `${g || r.dataKey || r.name || "value"}`, k = N(x, r, w), v = !g && typeof l == "string" ? x[l]?.label || l : k?.label;
      return u ? /* @__PURE__ */ s("div", { className: f("font-medium", i), children: u(v, e) }) : v ? /* @__PURE__ */ s("div", { className: f("font-medium", i), children: v }) : null;
    }, [
      l,
      u,
      e,
      a,
      i,
      x,
      g
    ]);
    if (!c || !e?.length)
      return null;
    const y = e.length === 1 && o !== "dot";
    return /* @__PURE__ */ b(
      "div",
      {
        ref: S,
        className: f(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          t
        ),
        children: [
          y ? null : j,
          /* @__PURE__ */ s("div", { className: "grid gap-2", children: e.map((r, w) => {
            const k = `${C || r.name || r.dataKey || "value"}`, v = N(x, r, k), L = h || r.payload.fill || r.color;
            return /* @__PURE__ */ s(
              "div",
              {
                className: f(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  o === "dot" && "items-center"
                ),
                children: d && r?.value !== void 0 && r.name ? d(r.value, r.name, r, w, r.payload) : /* @__PURE__ */ b(T, { children: [
                  v?.icon ? /* @__PURE__ */ s(v.icon, {}) : !n && /* @__PURE__ */ s(
                    "div",
                    {
                      className: f(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": y && o === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": L,
                        "--color-border": L
                      }
                    }
                  ),
                  /* @__PURE__ */ b(
                    "div",
                    {
                      className: f(
                        "flex flex-1 justify-between text-sm leading-none",
                        y ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
                          y ? j : null,
                          /* @__PURE__ */ s("span", { className: "pr-2 text-f1-foreground", children: v?.label || r.name })
                        ] }),
                        r.value && /* @__PURE__ */ s("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: p ? p(String(r.value)) : r.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              r.dataKey
            );
          }) })
        ]
      }
    );
  }
);
B.displayName = "ChartTooltip";
const Y = _.Legend, D = m.forwardRef(
  ({
    className: c,
    hideIcon: e = !1,
    payload: t,
    verticalAlign: o = "bottom",
    nameKey: a,
    hiddenKey: n,
    leftShift: l = 0
  }, u) => {
    const { config: i } = $();
    return t?.length ? /* @__PURE__ */ s(
      "div",
      {
        ref: u,
        className: f(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          o === "top" ? "pb-2" : "pt-2",
          c
        ),
        style: { marginLeft: l },
        children: t.map((d) => {
          const p = `${a || d.dataKey || "value"}`, h = N(
            i,
            d,
            p,
            n
          );
          return /* @__PURE__ */ b(
            "div",
            {
              className: f(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                h?.icon && !e ? /* @__PURE__ */ s(h.icon, {}) : h && /* @__PURE__ */ s(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: d.color
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "text-f1-foreground", children: h?.label })
              ]
            },
            JSON.stringify(d)
          );
        })
      }
    ) : null;
  }
);
D.displayName = "ChartLegend";
function N(c, e, t, o) {
  if (typeof e != "object" || e === null)
    return;
  const a = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let n = t;
  if (t in e && typeof e[t] == "string" ? n = e[t] : a && t in a && typeof a[t] == "string" ? n = a[t] : "dataKey" in e && typeof e.dataKey == "string" && (n = e.dataKey), !(o && o === n))
    return n in c ? c[n] : c[t];
}
export {
  z as ChartContainer,
  Y as ChartLegend,
  D as ChartLegendContent,
  J as ChartStyle,
  X as ChartTooltip,
  B as ChartTooltipContent
};
