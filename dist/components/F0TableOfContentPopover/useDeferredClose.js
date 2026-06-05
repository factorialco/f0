import { useRef as f, useCallback as i, useEffect as m } from "react";
const r = "[role='menu']";
function b(n, o) {
  const e = f(null), t = i(() => {
    e.current?.(), e.current = null;
  }, []);
  return m(() => t, [t]), { deferClose: i(() => {
    if (!document.querySelector(r)) return !1;
    t();
    const u = () => {
      s.disconnect(), document.removeEventListener("pointermove", l), e.current = null;
    }, c = () => {
      u(), o();
    }, s = new MutationObserver(() => {
      document.querySelector(r) || c();
    });
    s.observe(document.body, { childList: !0, subtree: !0 });
    const l = (a) => {
      const d = a.target;
      !d.closest(r) && !n.current?.contains(d) && c();
    };
    return document.addEventListener("pointermove", l), e.current = u, !0;
  }, [n, o, t]) };
}
export {
  b as useDeferredClose
};
