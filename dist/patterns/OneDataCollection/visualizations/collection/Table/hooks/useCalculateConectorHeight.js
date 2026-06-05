import { useState as u, useRef as C, useCallback as p, useLayoutEffect as G } from "react";
import { PADDING_TOP as n, BUTTON_PADDING as w } from "../../../../../../experimental/OneTable/TableCell/utils/nested.js";
import { subscribeToScroll as I } from "../lib/scroll.js";
const k = ({
  nestedVariant: s,
  withHasMore: l,
  withAddRowActions: m,
  isSticky: i
}) => {
  const [e, g] = u(null), [o, a] = u(null), [B, R] = u(0), v = C(null), H = C(null), D = p(
    (t) => {
      v.current = t, t && g(t);
    },
    [g]
  ), L = p(
    (t) => {
      H.current = t, t && a(t);
    },
    [a]
  );
  return G(() => {
    const t = e?.previousElementSibling;
    if (!e || !t) {
      R(0);
      return;
    }
    const h = !o || o.getBoundingClientRect().top === 0, O = () => h ? (e.getBoundingClientRect().top ?? 0) - n / 2 : (o?.getBoundingClientRect().top ?? 0) - n / 2, T = () => h ? e.getBoundingClientRect().bottom - n : (o?.getBoundingClientRect().bottom ?? 0) - n, M = () => e.getBoundingClientRect().top ?? 0 - n, A = () => t.getBoundingClientRect().height, F = () => l && s === "basic" ? w : 0, P = () => m && l && s === "basic" ? -w : 0, r = () => {
      const E = (s === "basic" ? O() : T()) - M() + A() + F() + P();
      let b = 0;
      if (i) {
        const N = t.getBoundingClientRect().bottom, z = e.getBoundingClientRect().top;
        b = Math.max(0, N - z);
      }
      R(Math.max(0, E - b));
    };
    r();
    const f = new MutationObserver(() => {
      r();
    }), d = e.parentElement;
    d && f.observe(d, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    const c = new ResizeObserver(() => {
      r();
    });
    c.observe(e), o && c.observe(o);
    const x = i ? I(e, r) : void 0;
    return () => {
      f.disconnect(), c.disconnect(), x?.();
    };
  }, [e, o, s, i]), { setFirstChildRef: D, setLastChildRef: L, calculatedHeight: B };
};
export {
  k as useCalculateConectorHeight
};
