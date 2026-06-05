import * as f from "react";
function l(n, o) {
  if (typeof n == "function")
    return n(o);
  n != null && (n.current = o);
}
function i(...n) {
  return (o) => {
    let u = !1;
    const c = n.map((t) => {
      const e = l(t, o);
      return !u && typeof e == "function" && (u = !0), e;
    });
    if (u)
      return () => {
        for (let t = 0; t < c.length; t++) {
          const e = c[t];
          typeof e == "function" ? e() : l(n[t], null);
        }
      };
  };
}
function s(...n) {
  return f.useCallback(i(...n), n);
}
export {
  i as composeRefs,
  s as useComposedRefs
};
