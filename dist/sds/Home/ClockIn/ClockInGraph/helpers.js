import { formatTime24Hours as E } from "../../../../lib/date.js";
import { getNormalizedRemainingMinutes as T } from "../ClockInControls/helpers.js";
import { CLOCK_IN_COLORS as i } from "./index.js";
const p = "--:--", g = (o, r) => {
  if (o && o > 0)
    return {
      value: o * 60 / r,
      color: i.empty
    };
  if (!r)
    return {
      value: 1,
      color: i.empty
    };
}, O = ({
  data: o = [],
  trackedMinutes: r,
  remainingMinutes: l = 0
}) => {
  const s = l < 0 && l < -1 * r, t = T(
    r,
    l
  ), c = o.reduce(
    (n, e) => n + (e.to.getTime() - e.from.getTime()) / 1e3,
    0
  ) + (t ?? 0) * 60, m = s || (t ?? 0) < 0 ? void 0 : g(
    t ?? 0,
    c
  );
  let d = (t ?? 0) < 0 ? Math.abs(t ?? 0) * 60 : 0, a = [
    ...[...o].reverse().reduce(
      (n, e) => {
        const f = (e.to.getTime() - e.from.getTime()) / 1e3, v = e.variant === "clocked-in" ? Math.min(f, d) : 0, y = (f - v) / c;
        return d -= v, e.variant === "clocked-in" && s ? [
          ...n,
          {
            value: v / c + y,
            color: i.overtime
          }
        ] : [
          ...n,
          {
            value: v / c,
            color: i.overtime
          },
          {
            value: y,
            color: i[e.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...m ? [m] : []
  ];
  return a = a.filter((n) => n.value > 0), a.length || a.push({
    value: 1,
    color: i.empty
  }), a;
}, b = ({
  data: o = [],
  remainingMinutes: r,
  trackedMinutes: l = 0
}) => {
  const s = o.find((f) => f.variant === "clocked-in")?.from, t = o.at(-1), c = s ? E(s) : p, m = r === void 0 || r > 0 ? p : t ? E(t.to) : p, u = t?.variant === "break" ? t?.to.getTime() - t?.from.getTime() || 0 : l * 60 * 1e3, a = Math.floor(u / (1e3 * 60 * 60)), n = Math.floor(u % (1e3 * 60 * 60) / (1e3 * 60)), e = `${a.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
  return {
    primaryLabel: c,
    secondaryLabel: m,
    time: e
  };
};
export {
  b as getLabels,
  O as normalizeData
};
