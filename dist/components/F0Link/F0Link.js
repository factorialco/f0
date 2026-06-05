import { jsxs as c, jsx as o, Fragment as h } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import w from "../../icons/app/ExternalLink.js";
import { withDataTestId as x } from "../../lib/data-testid/index.js";
import { Action as C } from "../../ui/Action/Action.js";
import { F0Icon as g } from "../F0Icon/index.js";
const s = b(function({
  className: i,
  children: m,
  stopPropagation: d = !1,
  "aria-label": r,
  href: t,
  variant: f = "link",
  ...n
}, k) {
  const { target: p } = n, a = p === "_blank", e = (l) => {
    d && l.stopPropagation(), n.onClick?.(l);
  }, F = t !== void 0 ? {
    ...n,
    href: t,
    onClick: e,
    rel: a ? "noopener noreferrer" : void 0,
    "aria-label": r,
    className: i
  } : {
    ...n,
    onClick: e,
    "aria-label": r,
    className: i
  };
  return /* @__PURE__ */ c(C, { ref: k, ...F, variant: f, children: [
    /* @__PURE__ */ o("span", { children: m }),
    a && /* @__PURE__ */ c(h, { children: [
      /* @__PURE__ */ o(g, { icon: w, size: "sm", "aria-hidden": !0 }),
      /* @__PURE__ */ o("span", { className: "sr-only", children: " (opens in new tab)" })
    ] })
  ] });
});
s.displayName = "F0Link";
const _ = x(s);
export {
  _ as F0Link
};
