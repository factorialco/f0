import { CLOCK_IN_COLORS as g } from "../ClockInGraph/index.js";
const k = (o, t) => ((t ?? 0) < -1 * (o ?? 0) ? -1 * o : t) ?? 0, S = ({
  data: o = [],
  labels: t,
  trackedMinutes: e,
  remainingMinutes: n,
  canSeeRemainingTime: i = !0
}) => {
  const r = o[o.length - 1]?.variant || "clocked-out", a = {
    "clocked-out": t.clockedOut,
    "clocked-in": t.clockedIn,
    break: t.onBreak
  }[r], u = (() => {
    if (!i || n === void 0) return;
    const d = k(
      e,
      n
    ), s = Math.abs(d), f = Math.floor(s / 60), l = Math.floor(s % 60), c = `${f.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
    return n >= 0 ? `${t.remainingTime} ${c}` : `${t.overtime} ${c}`;
  })(), m = g[r];
  return {
    status: r,
    statusText: a,
    subtitle: u,
    statusColor: m
  };
};
export {
  S as getInfo,
  k as getNormalizedRemainingMinutes
};
