import { useState as F, useRef as v, useCallback as u, useEffect as P } from "react";
import { generateAnchorId as k } from "./context.js";
const I = "f0-form-error-navigate", x = /* @__PURE__ */ new WeakMap();
function y(t, e) {
  if (typeof document > "u") return null;
  const n = k(t, void 0, e), r = document.getElementById(n);
  if (r) return r;
  const a = `forms.${t}.`, E = `.${e}`;
  return document.querySelector(
    `[id^="${a}"][id$="${E}"]`
  );
}
const w = (t) => {
  const e = x.get(t);
  e && clearTimeout(e), t.classList.remove(I), t.offsetWidth, t.classList.add(I);
  const n = setTimeout(() => {
    t.classList.remove(I), x.delete(t);
  }, 600);
  x.set(t, n);
};
function K(t) {
  let e = t;
  for (; e && e.offsetParent === null && e.parentElement; )
    e = e.parentElement;
  return e ?? t;
}
function O(t, e, { highlight: n = !1 } = {}) {
  const r = y(t, e);
  r && M(r, { highlight: n });
}
function M(t, { highlight: e = !1 } = {}) {
  const n = K(t);
  n.scrollIntoView({ behavior: "smooth", block: "center" });
  const r = n.querySelector("input, textarea, select, button");
  r instanceof HTMLElement && r.focus(), e && w(n);
}
function $({
  formName: t,
  errors: e
}) {
  const n = Object.keys(e).filter((s) => s !== "root"), r = typeof document > "u" ? n : [...n].sort((s, o) => {
    const i = y(t, s), c = y(t, o);
    if (!i || !c) return 0;
    const T = i.compareDocumentPosition(c);
    return T & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : T & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), a = r.length > 0, E = r.length, [l, g] = F(null), N = l ? Math.max(0, r.indexOf(l)) : 0, h = v(r);
  h.current = r;
  const m = v(l);
  m.current = l;
  const f = u(() => {
    const s = m.current;
    if (!s) return 0;
    const o = h.current.indexOf(s);
    return o === -1 ? 0 : o;
  }, []), p = v([]);
  P(() => {
    const s = r, o = p.current, i = s.find(
      (c) => !o.includes(c)
    );
    i && (O(t, i, { highlight: !0 }), g(i)), p.current = s;
  }, [r, t]);
  const d = u(
    (s) => {
      const o = h.current;
      if (o.length === 0) return;
      const i = (s % o.length + o.length) % o.length, c = o[i];
      g(c), O(t, c, { highlight: !0 });
    },
    [t]
  ), C = u(() => {
    d(f() - 1);
  }, [f, d]), b = u(() => {
    d(f() + 1);
  }, [f, d]), L = u(() => {
    g(null), p.current = [];
  }, []);
  return {
    fieldErrors: r,
    hasErrors: a,
    errorCount: E,
    currentErrorIndex: N,
    goToPreviousError: C,
    goToNextError: b,
    resetErrorNavigation: L
  };
}
export {
  $ as useErrorNavigation
};
