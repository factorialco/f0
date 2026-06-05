import { isSameWeek as a } from "../../../isSameWeek.js";
const s = [
  "svētdienā",
  "pirmdienā",
  "otrdienā",
  "trešdienā",
  "ceturtdienā",
  "piektdienā",
  "sestdienā"
], p = {
  lastWeek: (e, t, r) => a(e, t, r) ? "eeee 'plkst.' p" : "'Pagājušā " + s[e.getDay()] + " plkst.' p",
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: (e, t, r) => a(e, t, r) ? "eeee 'plkst.' p" : "'Nākamajā " + s[e.getDay()] + " plkst.' p",
  other: "P"
}, k = (e, t, r, n) => {
  const o = p[e];
  return typeof o == "function" ? o(t, r, n) : o;
};
export {
  k as formatRelative
};
