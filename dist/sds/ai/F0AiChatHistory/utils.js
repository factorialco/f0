import { getLocale as f } from "../../../components/OneCalendar/utils.js";
import { isToday as d } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isToday.js";
import { isYesterday as i } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isYesterday.js";
import { isSameMonth as u } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js";
import { formatDate as n } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
import { isSameYear as c } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
function m() {
  if (!(typeof navigator > "u"))
    return f(navigator.language);
}
function y(o) {
  const t = new Date(o), e = /* @__PURE__ */ new Date();
  return d(t) ? "today" : i(t) ? "yesterday" : u(t, e) ? "thisMonth" : "older";
}
function w(o, t) {
  const e = new Date(o), r = m(), a = n(e, "p", { locale: r });
  if (d(e)) return `${t.today}, ${a}`;
  if (i(e)) return `${t.yesterday}, ${a}`;
  const s = !c(e, /* @__PURE__ */ new Date());
  return `${n(e, s ? "MMM d yyyy" : "MMM d", {
    locale: r
  })}, ${a}`;
}
function v(o) {
  const t = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const r of o) {
    const a = y(r.updatedAt);
    t[a].push(r);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((r) => t[r].length > 0).map((r) => ({ key: r, threads: t[r] }));
}
export {
  w as formatThreadDate,
  y as getDateGroup,
  v as groupThreadsByDate
};
