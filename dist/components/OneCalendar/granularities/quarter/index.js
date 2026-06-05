import { jsx as x } from "react/jsx-runtime";
import { formatToPlaceholder as p, formatDateRange as R, toDateRangeString as v, isBeforeOrEqual as $, isAfterOrEqual as h, toGranularityDateRange as q, formatDateToString as w } from "../../utils.js";
import { rangeSeparator as Q } from "../consts.js";
import { QuarterView as F } from "./QuarterView.js";
import { startOfQuarter as n } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfQuarter.js";
import { endOfQuarter as d } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfQuarter.js";
import { isSameQuarter as Y } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameQuarter.js";
import { formatDate as f } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
import { addYears as T } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js";
import { addMonths as D } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js";
import { isSameYear as G } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
const S = "'Q'Q yyyy";
function a(t) {
  return q(t, n, d);
}
const g = (t, r) => ({
  from: n(D(t.from, r * 3)),
  to: d(D(t.to, r * 3))
}), N = (t) => w(t, S), O = (t) => {
  const r = a(t);
  return r ? !r.to || Y(r.from, r.to) ? f(r.from, "'Q'Q yyyy") : G(r.from, r.to) ? `${f(r.from, "'Q'Q")} ${Q} ${f(r.to, "'Q'Q yyyy")}` : `${f(r.from, "'Q'Q yyyy")} ${Q} ${f(r.to, "'Q'Q yyyy")}` : "";
}, L = {
  calendarView: "quarter",
  add: g,
  getPrevNext: (t, r) => {
    const e = a(t);
    if (!e)
      return { prev: !1, next: !1 };
    const { from: o, to: m } = e, { from: u, to: s } = g({ from: o, to: m }, -1), { from: l, to: i } = g({ from: o, to: m }, 1), c = r.min && n(r.min), y = r.max && d(r.max);
    return {
      prev: h(u, c) ? { from: u, to: s } : !1,
      next: $(i, y) ? { from: l, to: i } : !1
    };
  },
  toRangeString: (t) => R(t, "'Q'Q yyyy"),
  toRange: (t) => a(t),
  toString: (t, r, e = "default") => {
    const o = {
      default: N(t),
      long: O(t)
    };
    return o[e] ?? o.default;
  },
  toStringMaxWidth: () => 110,
  placeholder: () => p(S),
  fromString: (t) => {
    const r = v(t);
    if (!r)
      return null;
    const { from: e, to: o } = r, m = (u) => {
      const s = u.trim(), [l, i] = s.split(/\s+/), c = isNaN(Number(i)) ? (/* @__PURE__ */ new Date()).getFullYear() : +i, y = Number(l.replace(/[qQ\s]/g, ""));
      return new Date(c, (y - 1) * 3, 1);
    };
    return a({
      from: m(e),
      to: o ? m(o) : void 0
    });
  },
  navigate: (t, r) => n(D(t, r * 3)),
  navigateUIView: (t, r) => n(T(t, r * 5)),
  label: (t) => {
    const r = Math.floor(t.getFullYear() / 5) * 5, e = r + 4;
    return `${r} ${Q} ${e}`;
  },
  getViewDateFromDate: (t) => n(t),
  render: (t) => {
    const r = a(t.minDate), e = a(t.maxDate);
    return /* @__PURE__ */ x(
      F,
      {
        mode: t.mode,
        year: t.viewDate.getFullYear(),
        selected: t.selected,
        onSelect: t.onSelect,
        motionDirection: t.motionDirection,
        minDate: r ? r.from : void 0,
        maxDate: e ? e.to : void 0
      }
    );
  }
};
export {
  L as quarterGranularity,
  a as toQuarterGranularityDateRange
};
