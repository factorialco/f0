import { isSameWeek as f } from "../../../isSameWeek.js";
function i(t, r, o) {
  const e = "eeee p";
  return f(t, r, o) ? e : t.getTime() > r.getTime() ? "'下个'" + e : "'上个'" + e;
}
const m = {
  lastWeek: i,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: i,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, c = (t, r, o, e) => {
  const n = m[t];
  return typeof n == "function" ? n(r, o, e) : n;
};
export {
  c as formatRelative
};
