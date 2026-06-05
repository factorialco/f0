import { jsx as u } from "react/jsx-runtime";
import { createContext as i, useContext as x } from "react";
const o = i(null);
function m({
  addRowActions: t,
  addRowActionsLabel: r,
  addNestedRowActions: e,
  addNestedRowActionsLabel: n,
  children: d
}) {
  return /* @__PURE__ */ u(
    o.Provider,
    {
      value: {
        addRowActions: t,
        addRowActionsLabel: r,
        addNestedRowActions: e,
        addNestedRowActionsLabel: n
      },
      children: d
    }
  );
}
function s() {
  return x(o);
}
export {
  m as AddRowProvider,
  s as useAddRow
};
