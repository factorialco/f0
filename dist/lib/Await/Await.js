import { jsx as l } from "react/jsx-runtime";
import { useState as c, useEffect as P } from "react";
import { DataTestIdWrapper as t } from "../data-testid/index.js";
const g = ({
  resolve: n,
  fallback: a,
  error: m,
  children: h,
  dataTestId: e
}) => {
  const [o, i] = c(
    () => n instanceof Promise ? null : n
  ), [p, f] = c(null), [d, u] = c(!1);
  return P(() => {
    if (n instanceof Promise) {
      u(!0), f(null), i(null);
      let r = !1;
      return n.then((s) => {
        r || i(s);
      }).catch((s) => {
        r || f(s);
      }).finally(() => {
        r || u(!1);
      }), () => {
        r = !0;
      };
    } else
      i(n), f(null), u(!1);
  }, [n]), d ? /* @__PURE__ */ l(t, { dataTestId: e, children: a }) : p ? /* @__PURE__ */ l(t, { dataTestId: e, children: m ?? null }) : o !== null ? /* @__PURE__ */ l(t, { dataTestId: e, children: h(o) }) : /* @__PURE__ */ l(t, { dataTestId: e, children: null });
}, E = g;
export {
  E as Await
};
