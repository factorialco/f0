import { jsx as u } from "react/jsx-runtime";
import { useRef as i, useMemo as s, createContext as c, useContext as d } from "react";
const e = c(null);
function m() {
  return d(e);
}
function v({
  driver: r,
  children: t
}) {
  const n = i(r), o = s(
    () => ({ driver: n.current }),
    []
  );
  return /* @__PURE__ */ u(e.Provider, { value: o, children: t });
}
export {
  v as DndProvider,
  m as useDndContextOptional
};
