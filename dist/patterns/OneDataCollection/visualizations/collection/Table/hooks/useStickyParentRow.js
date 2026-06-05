import { useState as k, useLayoutEffect as T } from "react";
import { TABLE_ROW_STICKY_TOP_OFFSET as y } from "../../../../../../experimental/OneTable/TableRow/index.js";
import { findScrollContainer as E } from "../lib/scroll.js";
const b = (c, a, i, w) => {
  const [p, e] = k(!1), u = y;
  return T(() => {
    if (!c) {
      e(!1);
      return;
    }
    const o = a.current;
    if (!o) {
      e(!0);
      return;
    }
    const r = E(o);
    if (!r) {
      e(!0);
      return;
    }
    let t;
    const l = () => {
      const m = i.current;
      if (!m) {
        e(!0);
        return;
      }
      const S = r.getBoundingClientRect().top + u + o.offsetHeight, d = m.getBoundingClientRect().top > S;
      e((v) => v === d ? v : d);
    }, n = () => {
      t !== void 0 && cancelAnimationFrame(t), t = requestAnimationFrame(l);
    };
    r.addEventListener("scroll", n, {
      passive: !0
    }), window.addEventListener("resize", n);
    const s = new ResizeObserver(n);
    s.observe(o);
    const f = i.current;
    return f && s.observe(f), l(), () => {
      r.removeEventListener("scroll", n), window.removeEventListener("resize", n), s.disconnect(), t !== void 0 && cancelAnimationFrame(t);
    };
  }, [c, a, i, u]), { isSticky: p };
};
export {
  b as useStickyParentRow
};
