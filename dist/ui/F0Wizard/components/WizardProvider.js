import { jsx as o } from "react/jsx-runtime";
import { createContext as n, useContext as i } from "react";
const t = n(null);
function s() {
  const r = i(t);
  if (!r)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return r;
}
function a({ children: r, ...e }) {
  return /* @__PURE__ */ o(t.Provider, { value: e, children: r });
}
export {
  t as F0WizardContext,
  a as WizardProvider,
  s as useF0Wizard
};
