import { useState as m, useCallback as h, useEffect as l } from "react";
import { resolveChartTheme as n } from "./theme.js";
function a(e) {
  const r = [];
  let t = e;
  for (; t; )
    r.push(t), t = t.parentElement;
  return r;
}
function f(e) {
  const [r, t] = m(
    () => n(e.current)
  ), o = h(() => {
    t(n(e.current));
  }, [e]);
  return l(() => {
    const s = e.current;
    if (!s) return;
    t(n(s));
    const u = new MutationObserver(o);
    for (const c of a(s))
      u.observe(c, {
        attributes: !0,
        attributeFilter: ["class"]
      });
    return () => u.disconnect();
  }, [e, o]), r;
}
export {
  f as useChartTheme
};
