import { h as W, m as F, w as _, j as h, k as f, l as S, n as P, o as A, S as k, p as B, q as R, r as j, s as z, t as M, v as D, x as E, y as T, z as I, A as U, D as O, E as b, J as q, K as H, M as J, N as K, C as m } from "./index-DyAxXmVo.js";
import { jsx as t, jsxs as r } from "react/jsx-runtime";
import g, { forwardRef as c, useEffect as Q } from "react";
import { Q as $, M as Y, N as G, O as X, P as Z, r as y, V as ee } from "./index-gM-GQqGn.js";
const te = ({ children: n }) => {
  const { enabled: e } = $();
  return /* @__PURE__ */ t(
    "div",
    {
      className: W(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        e && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": e,
      children: /* @__PURE__ */ t(
        F.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: e ? 0 : 1,
            scale: e ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: n
        }
      )
    }
  );
}, ae = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), re = c(function({ header: e, children: a, action: i, summaries: d, alert: o, status: u, fullHeight: N = !1 }, C) {
  const { enabled: p, toggle: w } = $();
  Q(() => {
    if (o && u)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [o, u]);
  const L = (s) => !!s && !(g.isValidElement(s) && s.type === g.Fragment && g.Children.count(s.props.children) === 0), V = () => {
    e?.link?.onClick?.();
  };
  return /* @__PURE__ */ r(
    S,
    {
      className: W(
        N ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: C,
      children: [
        e && /* @__PURE__ */ t(P, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ r("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ r("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              e.title && /* @__PURE__ */ t(A, { className: "truncate", children: e.title }),
              e.subtitle && /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(ae, {}),
                /* @__PURE__ */ t(B, { className: "truncate", children: e.subtitle })
              ] }),
              e.info && /* @__PURE__ */ t(z, { label: e.info, children: /* @__PURE__ */ t(
                M,
                {
                  icon: D,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              e.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(E, { value: e.count }) })
            ] }),
            /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-3", children: [
              o && /* @__PURE__ */ t(T, { text: o, level: "critical" }),
              u && /* @__PURE__ */ t(I, { text: u.text, variant: u.variant }),
              e.link && /* @__PURE__ */ t(
                U,
                {
                  onClick: V,
                  href: e.link.url,
                  title: e.link.title,
                  icon: e.link.icon
                }
              )
            ] })
          ] }),
          e.comment && /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(O, { children: e.comment }) }),
            !!e.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              b,
              {
                icon: p ? q : H,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: w,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ r(R, { className: "flex h-full flex-col gap-4", children: [
          d && /* @__PURE__ */ t("div", { className: "flex flex-row", children: d.map((s, x) => /* @__PURE__ */ r("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: s.label }),
            /* @__PURE__ */ r("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!s.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: s.prefixUnit }),
              s.value,
              !!s.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: s.postfixUnit })
            ] })
          ] }, x)) }),
          g.Children.toArray(a).filter(L).map((s, x) => /* @__PURE__ */ r(g.Fragment, { children: [
            x > 0 && /* @__PURE__ */ t(J, { bare: !0 }),
            s
          ] }, x))
        ] }),
        i && /* @__PURE__ */ t(K, { children: /* @__PURE__ */ t(b, { variant: "neutral", size: "sm", ...i }) })
      ]
    }
  );
}), ie = j({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), ne = c(
  function({ header: e, height: a }, i) {
    return /* @__PURE__ */ r(
      S,
      {
        className: W(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: i,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(P, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ r(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                e?.title ? /* @__PURE__ */ t(A, { children: e.title }) : /* @__PURE__ */ t(k, { className: "h-4 w-full max-w-16" }),
                e?.subtitle && /* @__PURE__ */ t(B, { children: e.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            R,
            {
              "aria-hidden": !0,
              className: W(a !== "full" && ie({ height: a })),
              children: [...Array(4)].map((d, o) => /* @__PURE__ */ t(
                k,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][o]}`
                },
                o
              ))
            }
          )
        ]
      }
    );
  }
), v = _(
  h("Widget", f(re, ne))
), l = Object.assign(
  c(function({ chart: e, summaries: a, ...i }, d) {
    return /* @__PURE__ */ t(v, { ref: d, ...i, summaries: a, children: e && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: e }) });
  }),
  {
    Skeleton: v.Skeleton
  }
), se = f(
  c(function({ canBeBlurred: e, ...a }, i) {
    const d = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: e
      }
    }, o = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      l,
      {
        ref: i,
        ...d,
        chart: /* @__PURE__ */ t(Y, { ...o, canBeBlurred: e })
      }
    );
  }),
  l.Skeleton
), le = h(
  "AreaChartWidget",
  se
), oe = c(function(e, a) {
  return /* @__PURE__ */ t(
    l,
    {
      ref: a,
      ...e,
      chart: /* @__PURE__ */ t(G, { yAxis: { hide: !0 }, ...e.chart })
    }
  );
}), ce = h(
  "BarChartWidget",
  f(oe, l.Skeleton)
), de = f(
  c(
    function(e, a) {
      return /* @__PURE__ */ t(
        l,
        {
          ref: a,
          ...e,
          chart: /* @__PURE__ */ t(X, { yAxis: { hide: !0 }, ...e.chart })
        }
      );
    }
  ),
  l.Skeleton
), he = h(
  "LineChartWidget",
  de
), fe = f(
  c(
    function(e, a) {
      return /* @__PURE__ */ t(
        l,
        {
          ref: a,
          ...e,
          chart: /* @__PURE__ */ t(Z, { ...e.chart })
        }
      );
    }
  ),
  l.Skeleton
), me = h(
  "PieChartWidget",
  fe
), ue = f(
  c(
    function(e, a) {
      return /* @__PURE__ */ t(l, { ref: a, ...e, chart: null });
    }
  ),
  l.Skeleton
), ge = h(
  "SummariesWidget",
  ue
);
function Ce({
  value: n,
  max: e = 100,
  color: a,
  overview: i
}) {
  const C = 2 * Math.PI * 44, p = (e - Math.min(n, e)) / e * C, w = a ? y(a) : y("categorical-1");
  return /* @__PURE__ */ r("div", { className: "relative inline-flex aspect-auto h-full w-full items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ r(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "h-full w-full -rotate-90 transform",
        children: [
          /* @__PURE__ */ t(
            "circle",
            {
              cx: 50,
              cy: 50,
              r: 44,
              fill: "none",
              stroke: "hsl(var(--neutral-20))",
              strokeWidth: 12
            }
          ),
          /* @__PURE__ */ t(
            "circle",
            {
              cx: 50,
              cy: 50,
              r: 44,
              fill: "none",
              stroke: w,
              strokeWidth: 12,
              strokeDasharray: C,
              strokeDashoffset: p,
              strokeLinecap: "round"
            }
          )
        ]
      }
    ),
    i && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex translate-y-0.5 flex-col items-center justify-center", children: [
      /* @__PURE__ */ t("span", { className: "text-sm text-f1-foreground-secondary", children: i.label }),
      /* @__PURE__ */ t("span", { className: "text-4xl font-semibold leading-none text-f1-foreground", children: i.number })
    ] })
  ] });
}
const xe = f(
  c(
    function({ header: e, chart: a }, i) {
      return /* @__PURE__ */ t(v, { ref: i, header: e, children: /* @__PURE__ */ t("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ t(Ce, { ...a }) }) });
    }
  ),
  v.Skeleton
), We = h(
  "RadialProgressWidget",
  xe
), ve = f(
  c(
    function(e, a) {
      return /* @__PURE__ */ t(
        l,
        {
          ref: a,
          ...e,
          chart: /* @__PURE__ */ t(ee, { xAxis: { hide: !0 }, ...e.chart })
        }
      );
    }
  ),
  l.Skeleton
), pe = h(
  "VerticalBarChartWidget",
  ve
), ye = m(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  le
), Se = m(
  {
    name: "BarChartWidget",
    type: "info"
  },
  ce
), Pe = m(
  {
    name: "LineChartWidget",
    type: "info"
  },
  he
), Ae = m(
  {
    name: "PieChartWidget",
    type: "info"
  },
  me
), Be = m(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  pe
), Re = m(
  {
    name: "SummariesWidget",
    type: "info"
  },
  ge
), $e = m(
  {
    name: "RadialProgressWidget",
    type: "info"
  },
  We
);
export {
  ye as A,
  Se as B,
  Pe as L,
  Ae as P,
  $e as R,
  Re as S,
  Be as V,
  v as W,
  te as a
};
