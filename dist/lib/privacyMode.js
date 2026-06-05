import { jsx as d } from "react/jsx-runtime";
import { useState as u, useCallback as o, createContext as v, useContext as b } from "react";
const n = v({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), p = ({ initiallyEnabled: e = !1, children: r }) => {
  const [a, t] = u(e), l = o(() => {
    t(!0);
  }, []), s = o(() => t(!1), []), c = o(() => t((i) => !i), []);
  return /* @__PURE__ */ d(n.Provider, { value: { enable: l, disable: s, toggle: c, enabled: a }, children: r });
}, x = () => {
  const e = b(n);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
export {
  n as PrivacyModeContext,
  p as PrivacyModeProvider,
  x as usePrivacyMode
};
