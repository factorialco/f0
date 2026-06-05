import { jsx as s, jsxs as b, Fragment as S } from "react/jsx-runtime";
import { cva as T } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import E from "../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.js";
import * as m from "react";
import { useState as K, useMemo as O, useLayoutEffect as I } from "react";
import { cn as u } from "../lib/utils.js";
import { Tooltip as M } from "../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Tooltip.js";
import { Legend as P } from "../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Legend.js";
import { ResponsiveContainer as q } from "../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/ResponsiveContainer.js";
const H = T({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), z = { light: "", dark: ".dark" }, L = m.createContext(null);
function R() {
  const c = m.useContext(L);
  if (!c)
    throw new Error("useChart must be used within a <ChartContainer />");
  return c;
}
const J = ({
  id: c,
  className: e,
  children: t,
  aspect: o,
  config: a,
  ...n
}, l) => {
  const f = m.useId(), i = `chart-${c || f.replace(/:/g, "")}`, d = m.useRef(null), [v, h] = K(), C = O(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return I(() => {
    const g = l && "current" in l ? l.current : d.current;
    return g && C.observe(g.parentElement), () => {
      C.disconnect();
    };
  }, [C, l, d]), /* @__PURE__ */ s(L.Provider, { value: { config: a }, children: /* @__PURE__ */ b(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": i,
      ref: l || d,
      className: u(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        o ? H({ aspect: o }) : "aspect-auto h-full",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ s(D, { id: i, config: a }),
        /* @__PURE__ */ s(
          q,
          {
            height: v,
            className: "overflow-visible",
            children: t
          }
        )
      ]
    }
  ) });
}, B = m.forwardRef(J);
B.displayName = "Chart";
const D = ({ id: c, config: e }) => {
  const t = Object.entries(e).filter(([a, n]) => n.theme || n.color);
  if (!t.length)
    return null;
  const o = Object.entries(z).map(
    ([a, n]) => `
${n} [data-chart=${c}] {
${t.map(([l, f]) => {
      const i = f.theme?.[a] || f.color;
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
        __html: E.sanitize(o.join(`
`))
      }
    }
  );
}, ee = M, G = m.forwardRef(
  ({
    active: c,
    payload: e,
    className: t,
    indicator: o = "dot",
    hideLabel: a = !1,
    hideIndicator: n = !1,
    label: l,
    labelFormatter: f,
    labelClassName: i,
    formatter: d,
    yAxisFormatter: v,
    color: h,
    nameKey: C,
    labelKey: g
  }, $) => {
    const { config: x } = R(), _ = m.useMemo(() => {
      if (a || !e?.length)
        return null;
      const [r] = e, w = `${g || r.dataKey || r.name || "value"}`, k = N(x, r, w), p = !g && typeof l == "string" ? x[l]?.label || l : k?.label;
      return f ? /* @__PURE__ */ s("div", { className: u("font-medium", i), children: f(p, e) }) : p ? /* @__PURE__ */ s("div", { className: u("font-medium", i), children: p }) : null;
    }, [
      l,
      f,
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
        ref: $,
        className: u(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          t
        ),
        children: [
          y ? null : _,
          /* @__PURE__ */ s("div", { className: "grid gap-2", children: e.map((r, w) => {
            const k = `${C || r.name || r.dataKey || "value"}`, p = N(x, r, k), j = h || r.payload.fill || r.color;
            return /* @__PURE__ */ s(
              "div",
              {
                className: u(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  o === "dot" && "items-center"
                ),
                children: d && r?.value !== void 0 && r.name ? d(r.value, r.name, r, w, r.payload) : /* @__PURE__ */ b(S, { children: [
                  p?.icon ? /* @__PURE__ */ s(p.icon, {}) : !n && /* @__PURE__ */ s(
                    "div",
                    {
                      className: u(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": y && o === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": j,
                        "--color-border": j
                      }
                    }
                  ),
                  /* @__PURE__ */ b(
                    "div",
                    {
                      className: u(
                        "flex flex-1 justify-between text-sm leading-none",
                        y ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
                          y ? _ : null,
                          /* @__PURE__ */ s("span", { className: "pr-2 text-f1-foreground", children: p?.label || r.name })
                        ] }),
                        r.value && /* @__PURE__ */ s("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: v ? v(String(r.value)) : r.value.toLocaleString() })
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
G.displayName = "ChartTooltip";
const re = P, Q = m.forwardRef(
  ({
    className: c,
    hideIcon: e = !1,
    payload: t,
    verticalAlign: o = "bottom",
    nameKey: a,
    hiddenKey: n,
    leftShift: l = 0
  }, f) => {
    const { config: i } = R();
    return t?.length ? /* @__PURE__ */ s(
      "div",
      {
        ref: f,
        className: u(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          o === "top" ? "pb-2" : "pt-2",
          c
        ),
        style: { marginLeft: l },
        children: t.map((d) => {
          const v = `${a || d.dataKey || "value"}`, h = N(
            i,
            d,
            v,
            n
          );
          return /* @__PURE__ */ b(
            "div",
            {
              className: u(
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
Q.displayName = "ChartLegend";
function N(c, e, t, o) {
  if (typeof e != "object" || e === null)
    return;
  const a = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let n = t;
  if (t in e && typeof e[t] == "string" ? n = e[t] : a && t in a && typeof a[t] == "string" ? n = a[t] : "dataKey" in e && typeof e.dataKey == "string" && (n = e.dataKey), !(o && o === n))
    return n in c ? c[n] : c[t];
}
export {
  B as ChartContainer,
  re as ChartLegend,
  Q as ChartLegendContent,
  D as ChartStyle,
  ee as ChartTooltip,
  G as ChartTooltipContent
};
