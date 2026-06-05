import { jsx as n } from "react/jsx-runtime";
import { useContext as r, createContext as u } from "react";
const o = u(null);
function i({ children: t, layout: e }) {
  return /* @__PURE__ */ n(o.Provider, { value: e, children: t });
}
function a() {
  return r(o);
}
export {
  i as LayoutProvider,
  a as useLayout
};
