import { jsx as n } from "react/jsx-runtime";
import { forwardRef as y, memo as l } from "react";
import { useRenderDataTestIdAttribute as N } from "../providers/user-platafform/UserPlatformProvider.js";
const u = ["prototype", "length", "name", "$$typeof", "render"], m = (e, i) => {
  const d = [
    ...Object.getOwnPropertyNames(e),
    ...Object.getOwnPropertySymbols(e)
  ];
  for (const r of d)
    if (!u.includes(r))
      try {
        const t = Object.getOwnPropertyDescriptor(e, r);
        t && Object.defineProperty(i, r, t);
      } catch {
      }
}, f = ({
  dataTestId: e,
  children: i
}) => {
  const d = N();
  return !e || !d ? i : /* @__PURE__ */ n("div", { "data-testid": e, style: { display: "contents" }, children: i });
}, C = (e) => {
  if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.$$typeof === /* @__PURE__ */ Symbol.for("react.forward_ref")
  ) {
    const t = e, a = y((o, s) => {
      const { dataTestId: p, ...c } = o;
      return /* @__PURE__ */ n(f, { dataTestId: p, children: /* @__PURE__ */ n(t, { ...c, ref: s }) });
    });
    if (m(e, a), !a.displayName) {
      const o = e.displayName || e.name || // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e.render?.name || "Component";
      a.displayName = o;
    }
    return a;
  }
  if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.$$typeof === /* @__PURE__ */ Symbol.for("react.memo")
  ) {
    const t = e.type, a = e.compare, o = C(t), s = l(o, a);
    if (m(e, s), !s.displayName) {
      const p = e.displayName || e.name || // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e.type?.displayName || "Component";
      s.displayName = p;
    }
    return s;
  }
  const r = y((t, a) => {
    const { dataTestId: o, ...s } = t;
    return /* @__PURE__ */ n(f, { dataTestId: o, children: /* @__PURE__ */ n(e, { ...s, ref: a }) });
  });
  if (m(e, r), !r.displayName) {
    const t = e.displayName || e.name || "Component";
    r.displayName = t;
  }
  return r;
};
export {
  f as DataTestIdWrapper,
  C as withDataTestId
};
