import { useRef as h, useState as p, useCallback as m, useLayoutEffect as v } from "react";
const W = ", ";
function l(t, r) {
  return t.textContent = r, t.offsetWidth;
}
function C(t) {
  const r = h(null), [f, i] = p(!0), c = m(() => {
    const e = r.current;
    if (!e || t.length === 0) {
      i(!0);
      return;
    }
    const o = e.offsetWidth;
    if (o === 0) {
      i(!0);
      return;
    }
    const n = document.createElement("span");
    n.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font:inherit;", e.appendChild(n);
    const d = l(n, W);
    let u = 0;
    for (let s = 0; s < t.length; s++) {
      const a = l(n, t[s]);
      if (u += s === 0 ? a : d + a, u > o) {
        e.removeChild(n), i(!1);
        return;
      }
    }
    e.removeChild(n), i(!0);
  }, [t]);
  return v(() => {
    c();
    const e = r.current;
    if (!e) return;
    const o = new ResizeObserver(() => {
      c();
    });
    return o.observe(e), () => {
      o.disconnect();
    };
  }, [c]), { allFit: f, containerRef: r };
}
export {
  W as LABEL_SEPARATOR,
  C as useLabelsOverflow
};
