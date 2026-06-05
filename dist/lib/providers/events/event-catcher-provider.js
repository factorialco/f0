import { jsx as l } from "react/jsx-runtime";
import { useCallback as x, useMemo as C, createContext as f, useContext as v } from "react";
const s = f(null);
function d({
  children: t,
  onEvent: o,
  enabled: r = !0,
  catchEvents: e
}) {
  const n = x(
    (u, i) => {
      !r || e && !e.includes(u) || o(u, i);
    },
    [r, e, o]
  ), c = C(() => ({ onEvent: n }), [n]);
  return /* @__PURE__ */ l(s.Provider, { value: c, children: t });
}
function p() {
  return v(s) ?? { onEvent: () => Promise.resolve(!1) };
}
export {
  d as F0EventCatcherProvider,
  p as useF0EventCatcher
};
