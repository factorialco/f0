import * as m from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale.js";
import { rangeSeparator as u } from "./granularities/consts.js";
import { isBefore as g } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js";
import { isEqual as a } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.js";
import { isAfter as l } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js";
import { formatDate as p } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
const A = (t) => t.replace(/'([^']+)'/g, "$1").replace(/MM/g, "mm").replace(/dd/g, "dd").replace(/yyyy/g, "yyyy").replace(/I/g, "nn").replace(/Q/g, "n"), E = (t) => {
  const r = t.split("-")[0];
  return m[r];
}, c = (t) => {
  if (t instanceof Date)
    return { from: t };
  if (t != null)
    return t;
}, d = (t) => t == null ? !1 : t instanceof Date && !isNaN(t.getTime()), M = (t) => {
  if (t !== void 0) {
    if (typeof t == "string") {
      const [r, o] = t.split(/(?:\s+-\s+|\s+→\s+)/);
      return {
        from: r,
        to: o
      };
    }
    return t;
  }
}, f = (t, r) => p(t, r), y = (t, r) => {
  const o = c(t);
  if (!o)
    return {
      from: "",
      to: void 0
    };
  const n = f(o.from, r), e = o.to ? f(o.to, r) : void 0;
  return {
    from: n,
    to: e && n !== e ? e : void 0
  };
}, T = (t, r) => {
  const o = y(t, r);
  if (!o)
    return "-";
  const { from: n, to: e } = o;
  return `${n}${e && n !== e ? ` ${u} ${e}` : ""}`;
};
function W(t, r, o) {
  const n = c(t);
  if (!n)
    return null;
  const { from: e, to: s } = n;
  return {
    from: r(e),
    to: o(s || e)
  };
}
const D = (t, r) => !r || g(t, r) || a(t, r), R = (t, r) => !r || l(t, r) || a(t, r), k = ({
  minDate: t,
  maxDate: r
}) => {
  const o = [];
  return t && o.push({ before: t }), r && o.push({ after: r }), o;
}, v = (t, r, { minDate: o, maxDate: n }) => {
  const e = r.toRange(t), s = r.toRange(o), i = r.toRange(n);
  return !t || !!e?.from && d(e.from) && (!s?.from || R(
    e.from,
    s.from
  )) && (!i?.to || D(e.to, i.to));
};
export {
  f as formatDate,
  y as formatDateRange,
  T as formatDateToString,
  A as formatToPlaceholder,
  E as getLocale,
  v as isActiveDate,
  R as isAfterOrEqual,
  D as isBeforeOrEqual,
  d as isValidDate,
  k as toCalendarPickerMatcher,
  c as toDateRange,
  M as toDateRangeString,
  W as toGranularityDateRange
};
