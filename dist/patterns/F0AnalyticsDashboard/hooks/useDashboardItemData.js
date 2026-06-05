import { useState as c, useRef as i, useCallback as h, useEffect as I } from "react";
function p(u, r, s) {
  const [l, v] = c(void 0), [E, n] = c(!0), [R, a] = c(void 0), o = i(0), f = i(u);
  f.current = u;
  const d = i(r);
  d.current = r;
  const e = h(() => {
    const g = ++o.current;
    n(!0), a(void 0);
    const D = s ? d.current : {};
    f.current(D).then((t) => {
      g === o.current && (v(t), n(!1));
    }).catch((t) => {
      g === o.current && (a(t instanceof Error ? t : new Error(String(t))), n(!1));
    });
  }, [s]), m = s ? JSON.stringify(r) : "disabled";
  I(() => {
    e();
  }, [m, e]);
  const y = h(() => {
    e();
  }, [e]);
  return { data: l, isLoading: E, error: R, retry: y };
}
export {
  p as useDashboardItemData
};
