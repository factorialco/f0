import { useState as a, useCallback as d, useEffect as g } from "react";
const m = 2;
function f(r, o) {
  if (!r.intersectsNode(o)) return null;
  const t = document.createRange();
  t.selectNodeContents(o);
  const e = r.cloneRange();
  e.compareBoundaryPoints(Range.START_TO_START, t) < 0 && e.setStart(t.startContainer, t.startOffset), e.compareBoundaryPoints(Range.END_TO_END, t) > 0 && e.setEnd(t.endContainer, t.endOffset);
  const i = e.toString().trim();
  if (i.length < m) return null;
  const c = e.getBoundingClientRect();
  return { rect: c.width > 0 || c.height > 0 ? c : o.getBoundingClientRect(), text: i };
}
function h({
  containerRef: r,
  enabled: o = !0
}) {
  const [t, e] = a(null), i = d(() => e(null), []);
  return g(() => {
    if (!o || typeof window > "u") return;
    const c = r.current;
    if (!c) return;
    const u = () => {
      const n = window.getSelection();
      if (!n || n.isCollapsed || n.rangeCount === 0) {
        e(null);
        return;
      }
      e(f(n.getRangeAt(0), c));
    }, s = () => {
      window.setTimeout(u, 0);
    }, l = () => {
      const n = window.getSelection();
      (!n || n.isCollapsed || n.rangeCount === 0) && e(null);
    };
    return document.addEventListener("mouseup", s), document.addEventListener("keyup", s), document.addEventListener("selectionchange", l), () => {
      document.removeEventListener("mouseup", s), document.removeEventListener("keyup", s), document.removeEventListener("selectionchange", l);
    };
  }, [r, o]), { anchor: t, clear: i };
}
export {
  h as useReplySelection
};
