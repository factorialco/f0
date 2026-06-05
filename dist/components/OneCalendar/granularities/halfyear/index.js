import { jsx as v } from "react/jsx-runtime";
import { toDateRangeString as R, isBeforeOrEqual as H, isAfterOrEqual as F, toGranularityDateRange as M } from "../../utils.js";
import { rangeSeparator as l } from "../consts.js";
import { HalfYearView as w } from "./HalfyearView.js";
import { getYear as O } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getYear.js";
import { endOfYear as E } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.js";
import { getMonth as $ } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMonth.js";
import { startOfYear as x } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.js";
import { addYears as G } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js";
import { addMonths as h } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js";
import { startOfMonth as D } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { endOfMonth as S } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js";
import { isSameYear as N } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
import { setMonth as p } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.js";
const b = "Hn yyyy", n = (r) => `${d(r)} ${r.getFullYear()}`, d = (r) => {
  const t = r.getMonth();
  return `H${Math.floor(t / 6) + 1}`;
}, y = (r) => {
  const t = a(r);
  if (!t)
    return {
      from: "",
      to: void 0
    };
  const o = n(t.from), e = t.to ? n(t.to) : void 0;
  return {
    from: o,
    to: e && o !== e ? e : void 0
  };
}, Y = (r, t) => ({
  from: D(h(r.from, t * 6)),
  to: S(h(r.to, t * 6))
});
function a(r) {
  return M(
    r,
    (t) => $(t) < 6 ? x(t) : D(p(t, 6)),
    (t) => $(t) < 6 ? S(p(t, 5)) : E(t)
  );
}
const A = (r, t) => {
  const o = a(r), e = a(t);
  return n(o.from) === n(e.from);
}, L = (r) => {
  const t = y(r);
  if (!t)
    return "-";
  const { from: o, to: e } = t;
  return `${o}${e && o !== e ? ` ${l} ${e}` : ""}`;
}, V = (r) => {
  const t = a(r);
  return t ? !t.to || A(t.from, t.to) ? n(t.from) : N(t.from, t.to) ? `${d(t.from)} ${l} ${d(t.to)} ${O(t.to)}` : `${n(t.from)} ${l} ${n(t.to)}` : "";
}, X = {
  calendarView: "halfyear",
  add: Y,
  getPrevNext: (r, t) => {
    const o = a(r);
    if (!o)
      return { prev: !1, next: !1 };
    const { from: e, to: m } = o, { from: i, to: s } = Y({ from: e, to: m }, -1), { from: c, to: f } = Y({ from: e, to: m }, 1), u = t.min && D(t.min), g = t.max && S(t.max);
    return {
      prev: F(i, u) ? { from: i, to: s } : !1,
      next: H(f, g) ? { from: c, to: f } : !1
    };
  },
  toRangeString: (r) => y(r),
  toRange: (r) => a(r),
  toString: (r, t, o = "default") => {
    const e = {
      default: L(r),
      long: V(r)
    };
    return e[o] ?? e.default;
  },
  toStringMaxWidth: () => 155,
  placeholder: () => b,
  fromString: (r) => {
    const t = R(r);
    if (!t)
      return null;
    const { from: o, to: e } = t, m = (i) => {
      const s = i.trim(), [c, f] = s.split(/\s+/), u = isNaN(Number(f)) ? (/* @__PURE__ */ new Date()).getFullYear() : +f, g = Number(c.replace(/[hH\s+]/g, "").trim());
      return new Date(u, (g - 1) * 6, 1);
    };
    return a({
      from: m(o),
      to: m(e || o)
    });
  },
  navigate: (r, t) => h(r, t * 6),
  navigateUIView: (r, t) => G(r, t * 5),
  label: (r) => {
    const t = Math.floor(r.getFullYear() / 5) * 5, o = t + 4;
    return `${t} ${l} ${o}`;
  },
  getViewDateFromDate: (r) => x(r),
  render: (r) => {
    const t = a(r.minDate), o = a(r.maxDate);
    return /* @__PURE__ */ v(
      w,
      {
        mode: r.mode,
        year: r.viewDate.getFullYear(),
        selected: r.selected,
        onSelect: r.onSelect,
        motionDirection: r.motionDirection,
        minDate: t ? t.from : void 0,
        maxDate: o ? o.to : void 0
      }
    );
  }
};
export {
  X as halfyearGranularity,
  a as toHalfYearGranularityDateRange
};
