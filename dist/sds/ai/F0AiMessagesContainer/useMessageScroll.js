import { useState as S, useRef as f, useCallback as B, useEffect as i } from "react";
function y({
  viewportRef: r,
  contentRef: u,
  endRef: a,
  lastTurnRef: m,
  turnsCount: c,
  freezeTurnMinHeight: g = !1
}) {
  const [b, v] = S(0), [T, p] = S(!1), d = f(c), h = f(g);
  h.current = g;
  const F = B(
    (t = "smooth") => {
      a.current?.scrollIntoView({ behavior: t });
    },
    [a]
  );
  i(() => {
    const t = r.current, e = u.current;
    if (!t || !e) return;
    const o = new ResizeObserver(() => {
      if (h.current) return;
      const n = parseFloat(getComputedStyle(e).paddingTop) + parseFloat(getComputedStyle(e).paddingBottom) + 1;
      v(t.clientHeight - n);
    });
    return o.observe(t), o.observe(e), () => o.disconnect();
  }, [r, u]);
  const s = B(() => {
    const t = r.current;
    if (!t) return;
    const { scrollTop: e, scrollHeight: o, clientHeight: n } = t, l = o - e - n;
    p(l > n);
  }, [r]);
  return i(() => {
    const t = r.current;
    if (t)
      return t.addEventListener("scroll", s, { passive: !0 }), () => t.removeEventListener("scroll", s);
  }, [s, r]), i(() => {
    c > d.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const t = r.current, e = m.current;
        if (!t || !e) return;
        const o = t.getBoundingClientRect(), n = e.getBoundingClientRect(), l = t.scrollTop + (n.top - o.top);
        t.scrollTo({ top: l, behavior: "smooth" });
      });
    }), c === 0 && p(!1), d.current = c;
  }, [c, m, r]), { showScrollBtn: T, turnMinHeight: b, scrollToBottom: F };
}
export {
  y as useMessageScroll
};
