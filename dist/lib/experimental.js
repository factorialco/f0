import { forwardRef as y, memo as w } from "react";
import { useShowExperimentalWarnings as a } from "./providers/user-platafform/UserPlatformProvider.js";
const r = {}, c = (e, t) => {
  const u = [
    ...Object.getOwnPropertyNames(e),
    ...Object.getOwnPropertySymbols(e)
  ];
  for (const o of u)
    if (!(o === "prototype" || o === "length" || o === "name" || o === "$$typeof" || o === "render"))
      try {
        const p = Object.getOwnPropertyDescriptor(e, o);
        p && Object.defineProperty(t, o, p);
      } catch {
      }
}, h = (e, t) => {
  const u = () => {
    Object.entries(r).forEach(([i, s]) => {
      const n = s.uses - s.usesReported;
      n > 0 && (console.warn(
        `🚧 The \x1B[1m${i}\x1B[0m component is experimental. Use it at your own risk.`,
        `Found ${s.uses} uses. ${s.usesReported === -1 ? "" : `New uses found since last report: ${n}`}`
      ), r[i] = {
        ...s,
        usesReported: s.uses
      });
    });
  };
  let o = null;
  const p = () => {
    if (!o)
      return o = setTimeout(() => {
        u();
      }, 5e3), () => {
        o && clearTimeout(o);
      };
  };
  if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.$$typeof === /* @__PURE__ */ Symbol.for("react.forward_ref")
  ) {
    const i = t.render, s = y((n, f) => (a() && (p(), r[e] || (r[e] = {
      uses: 0,
      usesReported: -1
    }), r[e] = {
      ...r[e],
      uses: (r[e]?.uses ?? 0) + 1
    }), i(n, f)));
    return c(t, s), s.displayName || (s.displayName = `Experimental(${e})`), s;
  }
  if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.$$typeof === /* @__PURE__ */ Symbol.for("react.memo")
  ) {
    const i = t.type, s = t.compare, n = (l) => (a() && (p(), r[e] || (r[e] = {
      uses: 0,
      usesReported: -1
    }), r[e] = {
      ...r[e],
      uses: (r[e]?.uses ?? 0) + 1
    }), i(l));
    n.displayName = `Experimental(${e})`, c(t, n);
    const f = w(n, s);
    return c(t, f), f;
  }
  const d = ((...i) => (a() && (p(), r[e] || (r[e] = {
    uses: 0,
    usesReported: -1
  }), r[e] = {
    ...r[e],
    uses: (r[e]?.uses ?? 0) + 1
  }), t(...i)));
  return c(t, d), d;
};
export {
  h as experimentalComponent
};
