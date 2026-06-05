import { jsx as l } from "react/jsx-runtime";
import { createContext as f, useContext as a } from "react";
const s = f(null), d = (n, e) => {
  const i = n.split(".");
  let t = e;
  for (const o of i)
    if (t && typeof t == "object" && o in t)
      t = t[o];
    else
      return;
  return typeof t == "string" ? t : void 0;
};
function x({
  children: n,
  translations: e
}) {
  const i = (t, o = {}) => {
    let r = d(t, e);
    if (r === void 0)
      return console.warn(`Translation key ${t} not found`), t;
    for (const [u, c] of Object.entries(o))
      r = r.replace(`{{${u}}}`, c.toString());
    return r;
  };
  return /* @__PURE__ */ l(s.Provider, { value: { ...e, t: i }, children: n });
}
function m() {
  const n = a(s);
  if (n === null)
    throw new Error("useI18n must be used within an I18nProvider");
  return n;
}
const I = (n) => n;
export {
  x as I18nProvider,
  I as buildTranslations,
  m as useI18n
};
