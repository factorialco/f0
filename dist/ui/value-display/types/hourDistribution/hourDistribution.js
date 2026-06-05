import { jsx as d } from "react/jsx-runtime";
import { tableDisplayClassNames as m } from "../../const.js";
import { cn as b } from "../../../../lib/utils.js";
import { BarSeriesCell as h } from "../barSeries/barSeries.js";
const u = 480;
function V(e) {
  try {
    const a = new Date(e);
    return Number.isNaN(a.getTime()) ? e : a.toLocaleDateString(void 0, {
      day: "numeric",
      month: "long"
    });
  } catch {
    return e;
  }
}
function o(e) {
  const a = Math.floor(e / 60), t = e % 60;
  return t === 0 ? `${a}h` : `${a}h ${t}m`;
}
function y(e) {
  return {
    label: e.date,
    value: e.value,
    ...e.plannedValue != null ? { secondaryValue: e.plannedValue } : {},
    ...e.justifiedAbsenceValue != null ? { neutralValue: e.justifiedAbsenceValue } : {},
    ...e.justifiedAbsenceFullDay ? { neutralFullHeight: e.justifiedAbsenceFullDay } : {}
  };
}
function A(e) {
  const a = e.dataPoints.map(y), t = e.workedLabel ?? "Worked", r = e.justifiedAbsenceLabel ?? "Justified absence", s = Math.max(
    ...e.dataPoints.map(
      (l) => Math.max(
        l.value + Math.max(l.justifiedAbsenceValue ?? 0, 0),
        l.plannedValue ?? 0
      )
    ),
    u * 0.1
  ), i = Math.min(s, u);
  return {
    dataPoints: a,
    formatLabel: V,
    formatValue: o,
    formatTooltip: ({ point: l, formattedLabel: c, formattedValue: f }) => {
      const n = [`${t} ${f}`];
      return l.neutralFullHeight ? n.push(r) : l.neutralValue != null && l.neutralValue > 0 && n.push(`${r} ${o(l.neutralValue)}`), `${c} - ${n.join(", ")}`;
    },
    scaleMax: i
  };
}
const j = (e, a) => {
  const t = e?.dataPoints;
  return !t || !Array.isArray(t) || t.length === 0 ? /* @__PURE__ */ d(
    "div",
    {
      className: b(
        "text-f1-foreground-secondary",
        a.visualization === "table" && m.text
      ),
      "data-cell-type": "hourDistribution",
      children: "–"
    }
  ) : h(A(e), a);
};
export {
  j as HourDistributionCell
};
