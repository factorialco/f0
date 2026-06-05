import { toDate as f } from "./toDate.js";
import { getDefaultOptions as c } from "./_lib/defaultOptions.js";
function l(n, e) {
  const o = c(), a = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, t = f(n), s = t.getDay(), r = (s < a ? 7 : 0) + s - a;
  return t.setDate(t.getDate() - r), t.setHours(0, 0, 0, 0), t;
}
export {
  l as default,
  l as startOfWeek
};
