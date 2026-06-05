import { jsx as o } from "react/jsx-runtime";
import { forwardRef as d, useState as y, Children as a, useEffect as i, Fragment as G } from "react";
import { validLayoutChildrenGuard as L } from "../../internal/utils.js";
const m = d(
  ({ children: r, onSort: t, ...u }, p) => {
    L("GroupLinear", r, ["block"]);
    const [e, s] = y(a.toArray(r));
    return i(() => {
      s(a.toArray(r));
    }, [r]), i(() => {
      t?.(e);
    }, [e, t]), /* @__PURE__ */ o("div", { ref: p, ...u, children: e.map((f, n) => /* @__PURE__ */ o(G, { children: f }, n)) });
  }
);
m.displayName = "GroupLinear";
m.__isPageLayoutGroup = !0;
export {
  m as GroupLinear
};
