import { jsx as f } from "react/jsx-runtime";
import { forwardRef as m, useMemo as C, createContext as L, useCallback as M, useContext as S } from "react";
const x = L(void 0), z = ({ children: t, component: e, currentPath: n }) => /* @__PURE__ */ f(x.Provider, { value: { component: e, currentPath: n }, children: t }), P = () => {
  const t = S(x);
  return {
    controller: () => ({}),
    ...t
  };
};
function u(t) {
  return t.endsWith("/") ? t.slice(0, -1) : t;
}
function v(t) {
  const e = t.indexOf("?");
  return e === -1 ? [t, new URLSearchParams()] : [
    t.slice(0, e),
    new URLSearchParams(t.slice(e))
  ];
}
function h(t, e) {
  for (const [n, c] of e)
    if (t.get(n) !== c) return !1;
  return !0;
}
function b(t, e) {
  return h(t, e) && h(e, t);
}
const w = () => {
  const { currentPath: t } = P(), e = M(
    (n, { exact: c = !1 } = { exact: !1 }) => {
      if (t === void 0 || n === void 0) return !1;
      const [a, o] = v(t), [i, r] = v(n);
      return c ? u(a) === u(i) && b(o, r) : `${u(a)}/`.startsWith(
        `${u(i)}/`
      ) ? r.size > 0 ? h(o, r) : !0 : !1;
    },
    [t]
  );
  return {
    currentPath: t,
    isActive: e
  };
}, D = m(function({ disabled: e, ...n }, c) {
  const { component: a } = P(), { isActive: o } = w(), i = o(n.href, { exact: n.exactMatch }), r = !n.href || e, l = {
    "data-is-active": i,
    ...n,
    disabled: r
  }, k = C(
    () => m(function(s, d) {
      if (r) {
        const { href: R, target: q, rel: y, download: U, exactMatch: W, ...g } = s;
        return /* @__PURE__ */ f("span", { ref: d, "aria-disabled": !0, ...g });
      }
      return s.target === "_blank" || !a ? /* @__PURE__ */ f("a", { ref: d, ...s }) : a(s, d);
    }),
    [a, r]
  );
  return /* @__PURE__ */ f(k, { ref: c, ...l });
});
export {
  D as Link,
  z as LinkProvider,
  P as useLinkContext,
  w as useNavigation
};
