import { isSameWeek as s } from "../../../isSameWeek.js";
const a = [
  "жексенбіде",
  "дүйсенбіде",
  "сейсенбіде",
  "сәрсенбіде",
  "бейсенбіде",
  "жұмада",
  "сенбіде"
];
function y(e) {
  return "'өткен " + a[e] + " сағат' p'-де'";
}
function c(e) {
  return "'" + a[e] + " сағат' p'-де'";
}
function u(e) {
  return "'келесі " + a[e] + " сағат' p'-де'";
}
const i = {
  lastWeek: (e, t, r) => {
    const n = e.getDay();
    return s(e, t, r) ? c(n) : y(n);
  },
  yesterday: "'кеше сағат' p'-де'",
  today: "'бүгін сағат' p'-де'",
  tomorrow: "'ертең сағат' p'-де'",
  nextWeek: (e, t, r) => {
    const n = e.getDay();
    return s(e, t, r) ? c(n) : u(n);
  },
  other: "P"
}, f = (e, t, r, n) => {
  const o = i[e];
  return typeof o == "function" ? o(t, r, n) : o;
};
export {
  f as formatRelative
};
