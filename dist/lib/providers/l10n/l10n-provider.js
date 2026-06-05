import { jsx as e } from "react/jsx-runtime";
import { useContext as o, createContext as u } from "react";
import { defaults as i } from "./l10n-provider-defaults.js";
const r = u(i);
function c({
  children: t,
  l10n: n
}) {
  return /* @__PURE__ */ e(r.Provider, { value: n, children: t });
}
function x() {
  const t = o(r);
  if (t === null)
    throw new Error("useL10n must be used within an L10nProvider");
  return t;
}
export {
  c as L10nProvider,
  x as useL10n
};
