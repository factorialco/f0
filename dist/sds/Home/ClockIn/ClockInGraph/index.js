import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { PieChart as d, Pie as u, Cell as h } from "recharts";
import { normalizeData as f, getLabels as p } from "./helpers.js";
const y = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function g({
  data: a = [],
  trackedMinutes: t = 0,
  remainingMinutes: l
}) {
  const r = f({
    data: a,
    trackedMinutes: t,
    remainingMinutes: l
  }), { primaryLabel: n, secondaryLabel: o, time: c } = p({
    data: a,
    trackedMinutes: t,
    remainingMinutes: l
  });
  return /* @__PURE__ */ s("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(d, { width: 156, height: 156, children: /* @__PURE__ */ e(
      u,
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
        children: r.map((i, m) => /* @__PURE__ */ e(
          h,
          {
            fill: i.color,
            role: "presentation",
            "aria-label": `${i.value} minutes`
          },
          `cell-${m}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: c }) }),
    /* @__PURE__ */ s("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: n }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: o })
    ] })
  ] });
}
export {
  y as CLOCK_IN_COLORS,
  g as ClockInGraph
};
