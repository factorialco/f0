import { jsx as e, jsxs as s, Fragment as p } from "react/jsx-runtime";
import { Skeleton as l } from "../../ui/skeleton.js";
function x({
  children: d,
  showLegend: t = !0,
  horizontal: o = !1
}) {
  return o ? /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col px-4 py-3", children: [
    /* @__PURE__ */ s("div", { className: "flex min-h-0 flex-1 gap-2", children: [
      /* @__PURE__ */ s("div", { className: "flex flex-col justify-between py-1", children: [
        /* @__PURE__ */ e(l, { className: "h-2.5 w-12 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-10 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-14 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-11 rounded-sm" })
      ] }),
      /* @__PURE__ */ e("div", { className: "relative min-h-0 flex-1", children: /* @__PURE__ */ e("div", { className: "relative h-full w-full", children: d }) })
    ] }),
    /* @__PURE__ */ s("div", { className: "ml-16 flex justify-between pt-1", children: [
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-6 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-7 rounded-sm" })
    ] }),
    t && /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-4 pt-3", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-10 rounded-sm" })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-12 rounded-sm" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col px-4 py-3", children: [
    /* @__PURE__ */ s("div", { className: "flex min-h-0 flex-1 gap-2", children: [
      /* @__PURE__ */ s("div", { className: "flex flex-col justify-between py-1", children: [
        /* @__PURE__ */ e(l, { className: "h-2.5 w-6 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-7 rounded-sm" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" })
      ] }),
      /* @__PURE__ */ e("div", { className: "relative min-h-0 flex-1", children: /* @__PURE__ */ e("div", { className: "relative h-full w-full", children: d }) })
    ] }),
    /* @__PURE__ */ s("div", { className: "ml-9 flex justify-between pt-1", children: [
      /* @__PURE__ */ e(l, { className: "h-2.5 w-6 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-8 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-7 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-6 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" })
    ] }),
    t && /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-4 pt-3", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-10 rounded-sm" })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-12 rounded-sm" })
      ] })
    ] })
  ] });
}
function b({
  orientation: d = "vertical",
  stacked: t = !1,
  showLegend: o = !0
} = {}) {
  return d === "horizontal" ? /* @__PURE__ */ e(x, { showLegend: o, horizontal: !0, children: /* @__PURE__ */ e("div", { className: "flex h-full flex-col gap-2", children: t ? /* @__PURE__ */ s(p, { children: [
    /* @__PURE__ */ s("div", { className: "flex flex-1 gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-full w-1/2 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-1/4 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-[15%] rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-full w-1/3 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-1/5 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-[12%] rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-full w-3/5 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-1/6 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-[10%] rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-full w-2/5 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-1/4 rounded" }),
      /* @__PURE__ */ e(l, { className: "h-full w-[8%] rounded" })
    ] })
  ] }) : /* @__PURE__ */ s(p, { children: [
    /* @__PURE__ */ e(l, { className: "w-3/4 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "w-1/2 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "w-full flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "w-1/3 flex-1 rounded" })
  ] }) }) }) : t ? /* @__PURE__ */ e(x, { showLegend: o, children: /* @__PURE__ */ s("div", { className: "flex h-full items-end gap-2", children: [
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[15%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/4 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/3 w-full rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[10%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/5 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/4 w-full rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[12%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/4 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-2/5 w-full rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[8%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/5 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/6 w-full rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[10%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/6 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/4 w-full rounded" })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ e(l, { className: "h-[12%] w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/5 w-full rounded" }),
      /* @__PURE__ */ e(l, { className: "h-1/3 w-full rounded" })
    ] })
  ] }) }) : /* @__PURE__ */ e(x, { showLegend: o, children: /* @__PURE__ */ s("div", { className: "flex h-full items-end gap-2", children: [
    /* @__PURE__ */ e(l, { className: "h-3/4 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "h-1/2 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "h-full flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "h-1/3 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "h-2/3 flex-1 rounded" }),
    /* @__PURE__ */ e(l, { className: "h-3/4 flex-1 rounded" })
  ] }) });
}
const w = {
  smooth: "M0 60 Q25 45 50 50 T100 35 T150 42 T200 20",
  linear: "M0 60 L40 45 L80 50 L120 35 L160 42 L200 20",
  step: "M0 60 H40 V45 H80 V52 H120 V32 H160 V40 H200 V20"
}, v = [
  [0, 60],
  [40, 45],
  [80, 50],
  [120, 35],
  [160, 42],
  [200, 20]
];
function $({
  lineType: d = "linear",
  showArea: t = !0,
  showDots: o = !1,
  showLegend: r = !0
} = {}) {
  const u = w[d], f = `${u} V80 H0 Z`, m = `line-sk-grad-${d}`;
  return /* @__PURE__ */ e(x, { showLegend: r, children: /* @__PURE__ */ s("div", { className: "relative h-full w-full", children: [
    /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 200 80",
        preserveAspectRatio: "none",
        className: "h-full w-full",
        children: [
          t && /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ s("linearGradient", { id: m, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ e(
              "stop",
              {
                offset: "0%",
                stopColor: "currentColor",
                stopOpacity: "0.10",
                className: "text-f1-foreground-secondary"
              }
            ),
            /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
          ] }) }),
          t && /* @__PURE__ */ e("path", { d: f, fill: `url(#${m})` }),
          /* @__PURE__ */ e(
            "path",
            {
              d: u,
              fill: "none",
              strokeWidth: "2",
              vectorEffect: "non-scaling-stroke",
              stroke: "currentColor",
              strokeOpacity: "0.15",
              className: "text-f1-foreground-secondary"
            }
          )
        ]
      }
    ),
    o && v.map(([n, i]) => /* @__PURE__ */ e(
      l,
      {
        className: "absolute size-2 rounded-full",
        style: {
          left: `${n / 200 * 100}%`,
          top: `${i / 80 * 100}%`,
          transform: "translate(-50%, -50%)"
        }
      },
      `${n}-${i}`
    ))
  ] }) });
}
const g = [
  { sizePct: 100, label: "w-8" },
  { sizePct: 80, label: "w-6" },
  { sizePct: 58, label: "w-7" },
  { sizePct: 38, label: "w-5" },
  { sizePct: 22, label: "w-6" }
];
function M({
  orient: d = "horizontal",
  sort: t = "descending",
  showLegend: o = !0
} = {}) {
  const r = t === "ascending" ? [...g].reverse() : g;
  if (d === "vertical") {
    const n = (100 - 3 * (r.length - 1)) / r.length;
    return /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col px-4 py-3", children: [
      /* @__PURE__ */ e("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ e(
        "svg",
        {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          className: "h-full w-full",
          children: r.map((i, a) => {
            const c = a * (n + 3), h = i.sizePct, N = (100 - h) / 2;
            return /* @__PURE__ */ e(
              "rect",
              {
                x: N,
                y: c,
                width: h,
                height: n,
                rx: "2",
                className: "fill-f1-background-secondary"
              },
              a
            );
          })
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "flex justify-center gap-4 pt-1.5", children: r.map((i, a) => /* @__PURE__ */ e(
        l,
        {
          className: `h-2.5 flex-shrink-0 rounded-sm ${i.label}`
        },
        a
      )) }),
      o && /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-4 pt-1.5", children: /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-14 rounded-sm" })
      ] }) })
    ] });
  }
  const u = 3, f = (100 - u * (r.length - 1)) / r.length;
  return /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col px-4 py-3", children: [
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ e(
      "svg",
      {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        className: "h-full w-full",
        children: r.map((m, n) => {
          const i = n * (f + u), a = m.sizePct, c = (100 - a) / 2;
          return /* @__PURE__ */ e(
            "rect",
            {
              x: i,
              y: c,
              width: f,
              height: a,
              rx: "2",
              className: "fill-f1-background-secondary"
            },
            n
          );
        })
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex gap-1.5 pt-1.5", children: r.map((m, n) => /* @__PURE__ */ e("div", { className: "flex flex-1 justify-center", children: /* @__PURE__ */ e(
      l,
      {
        className: `h-2.5 flex-shrink-0 rounded-sm ${m.label}`
      }
    ) }, n)) }),
    o && /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-4 pt-1.5", children: /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-14 rounded-sm" })
    ] }) })
  ] });
}
function z({
  showLegend: d = !0,
  innerRadius: t = 0
} = {}) {
  const r = t > 0 ? 40 * (t / 100) : 0;
  return /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col items-center px-4 py-3", children: [
    /* @__PURE__ */ e("div", { className: "flex min-h-0 flex-1 items-center justify-center", children: /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "h-full max-h-[200px] w-full max-w-[200px]",
        children: [
          /* @__PURE__ */ e(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: 40,
              className: "fill-f1-background-secondary"
            }
          ),
          /* @__PURE__ */ e(
            "line",
            {
              x1: "50",
              y1: "50",
              x2: "50",
              y2: 10,
              stroke: "currentColor",
              strokeWidth: "1.5",
              className: "text-f1-background"
            }
          ),
          /* @__PURE__ */ e(
            "line",
            {
              x1: "50",
              y1: "50",
              x2: 50 + 40 * 0.87,
              y2: 50 + 40 * 0.5,
              stroke: "currentColor",
              strokeWidth: "1.5",
              className: "text-f1-background"
            }
          ),
          /* @__PURE__ */ e(
            "line",
            {
              x1: "50",
              y1: "50",
              x2: 50 - 40 * 0.71,
              y2: 50 + 40 * 0.71,
              stroke: "currentColor",
              strokeWidth: "1.5",
              className: "text-f1-background"
            }
          ),
          /* @__PURE__ */ e(
            "line",
            {
              x1: "50",
              y1: "50",
              x2: 50 - 40 * 0.34,
              y2: 50 - 40 * 0.94,
              stroke: "currentColor",
              strokeWidth: "1.5",
              className: "text-f1-background"
            }
          ),
          r > 0 && /* @__PURE__ */ e("circle", { cx: "50", cy: "50", r, className: "fill-f1-background" })
        ]
      }
    ) }),
    d && /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-4 pt-3", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-10 rounded-sm" })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-12 rounded-sm" })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-8 rounded-sm" })
      ] })
    ] })
  ] });
}
function C({
  showLegend: d = !0
} = {}) {
  const f = [1, 0.75, 0.5, 0.25], m = 0.6, n = (a) => Array.from({ length: 6 }, (c, h) => {
    const N = Math.PI * 2 * h / 6 - Math.PI / 2;
    return `${50 + a * Math.cos(N)},${45 + a * Math.sin(N)}`;
  }).join(" "), i = Array.from({ length: 6 }, (a, c) => {
    const h = Math.PI * 2 * c / 6 - Math.PI / 2;
    return {
      x: 50 + 35 * Math.cos(h),
      y: 45 + 35 * Math.sin(h)
    };
  });
  return /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col items-center px-4 py-3", children: [
    /* @__PURE__ */ e("div", { className: "flex min-h-0 flex-1 items-center justify-center", children: /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "h-full max-h-[220px] w-full max-w-[220px]",
        children: [
          f.map((a) => /* @__PURE__ */ e(
            "polygon",
            {
              points: n(35 * a),
              fill: "none",
              strokeWidth: "0.5",
              stroke: "currentColor",
              strokeOpacity: "0.15",
              className: "text-f1-foreground-secondary"
            },
            a
          )),
          i.map((a, c) => /* @__PURE__ */ e(
            "line",
            {
              x1: 50,
              y1: 45,
              x2: a.x,
              y2: a.y,
              strokeWidth: "0.5",
              stroke: "currentColor",
              strokeOpacity: "0.15",
              className: "text-f1-foreground-secondary"
            },
            c
          )),
          /* @__PURE__ */ e(
            "polygon",
            {
              points: n(35 * m),
              className: "fill-f1-background-secondary",
              strokeWidth: "1",
              stroke: "currentColor",
              strokeOpacity: "0.2"
            }
          )
        ]
      }
    ) }),
    d && /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-4 pt-3", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-10 rounded-sm" })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(l, { className: "size-2.5 rounded-full" }),
        /* @__PURE__ */ e(l, { className: "h-2.5 w-12 rounded-sm" })
      ] })
    ] })
  ] });
}
function R() {
  const u = 225 * Math.PI / 180, f = -45 * Math.PI / 180, m = 50 + 35 * Math.cos(u), n = 50 - 35 * Math.sin(u), i = 50 + 35 * Math.cos(f), a = 50 - 35 * Math.sin(f), c = u - (u - f) * 0.5, h = 50 + 35 * Math.cos(c), N = 50 - 35 * Math.sin(c);
  return /* @__PURE__ */ s("div", { className: "relative flex h-full animate-pulse items-center justify-center px-4 py-3", children: [
    /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "h-full max-h-[200px] w-full max-w-[200px]",
        children: [
          /* @__PURE__ */ e(
            "path",
            {
              d: `M ${m} ${n} A 35 35 0 1 1 ${i} ${a}`,
              fill: "none",
              strokeWidth: 8,
              strokeLinecap: "round",
              stroke: "currentColor",
              strokeOpacity: "0.1",
              className: "text-f1-foreground-secondary"
            }
          ),
          /* @__PURE__ */ e(
            "path",
            {
              d: `M ${m} ${n} A 35 35 0 0 1 ${h} ${N}`,
              fill: "none",
              strokeWidth: 8,
              strokeLinecap: "round",
              className: "stroke-f1-background-secondary"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ e(l, { className: "h-6 w-14 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "mt-2 h-3 w-16 rounded-sm" })
    ] })
  ] });
}
function j() {
  const i = [
    [0.9, 0.4, 0.6, 0.2, 0.7],
    [0.3, 0.8, 0.5, 0.7, 0.4],
    [0.6, 0.2, 0.9, 0.3, 0.8],
    [0.4, 0.7, 0.3, 0.6, 0.5]
  ];
  return /* @__PURE__ */ s("div", { className: "flex h-full animate-pulse flex-col px-4 py-3", children: [
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ s(
      "svg",
      {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        className: "h-full w-full",
        children: [
          Array.from({ length: 4 }, (a, c) => /* @__PURE__ */ e(
            "rect",
            {
              x: 0,
              y: c * (20.75 + 3) + 20.75 / 2 - 1.5,
              width: 9,
              height: 3,
              rx: 1,
              className: "fill-f1-background-secondary"
            },
            `y-${c}`
          )),
          Array.from(
            { length: 4 },
            (a, c) => Array.from({ length: 5 }, (h, N) => /* @__PURE__ */ e(
              "rect",
              {
                x: 12 + N * (15.2 + 3),
                y: c * (20.75 + 3),
                width: 15.2,
                height: 20.75,
                rx: 2,
                className: "fill-f1-background-secondary",
                opacity: i[c]?.[N] ?? 0.5
              },
              `${c}-${N}`
            ))
          ),
          Array.from({ length: 5 }, (a, c) => /* @__PURE__ */ e(
            "rect",
            {
              x: 12 + c * (15.2 + 3) + 15.2 / 2 - 4,
              y: 95,
              width: 8,
              height: 3,
              rx: 1,
              className: "fill-f1-background-secondary"
            },
            `x-${c}`
          ))
        ]
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-2 pt-2", children: [
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-20 rounded-sm" }),
      /* @__PURE__ */ e(l, { className: "h-2.5 w-5 rounded-sm" })
    ] })
  ] });
}
export {
  b as BarChartSkeleton,
  M as FunnelChartSkeleton,
  R as GaugeChartSkeleton,
  j as HeatmapChartSkeleton,
  $ as LineChartSkeleton,
  z as PieChartSkeleton,
  C as RadarChartSkeleton
};
