import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { normalizeData as d, getLabels as u } from "./helpers.js";
import { PieChart as f } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/PieChart.js";
import { Pie as h } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/Pie.js";
import { Cell as p } from "../../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Cell.js";
const N = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function C({
  data: t = [],
  trackedMinutes: a = 0,
  remainingMinutes: l
}) {
  const r = d({
    data: t,
    trackedMinutes: a,
    remainingMinutes: l
  }), { primaryLabel: s, secondaryLabel: n, time: m } = u({
    data: t,
    trackedMinutes: a,
    remainingMinutes: l
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(f, { width: 156, height: 156, children: /* @__PURE__ */ e(
      h,
      {
        data: r,
        cx: 74,
        cy: 74,
        innerRadius: 62,
        outerRadius: 74,
        startAngle: 225,
        endAngle: -45,
        paddingAngle: 2,
        cornerRadius: 4,
        dataKey: "value",
        strokeWidth: 0,
        isAnimationActive: !1,
        children: r.map((i, c) => /* @__PURE__ */ e(
          p,
          {
            fill: i.color,
            role: "presentation",
            "aria-label": `${i.value} minutes`
          },
          `cell-${c}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: m }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: s }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: n })
    ] })
  ] });
}
export {
  N as CLOCK_IN_COLORS,
  C as ClockInGraph
};
