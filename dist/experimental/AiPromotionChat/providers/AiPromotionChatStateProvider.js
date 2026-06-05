import { jsx as M } from "react/jsx-runtime";
import { useContext as x, createContext as S, useState as o, useRef as F, useEffect as d } from "react";
const f = S(null), b = 15, T = ({ children: t, enabled: r, onShow: u, ...m }) => {
  const [l, c] = o(r), [n, C] = o(!1), [E, i] = o(!0), [p, A] = o(
    b
  ), a = F(null), P = (s) => {
    a.current = s;
  }, h = () => {
    a.current && a.current();
  };
  return d(() => {
    c(r);
  }, [r]), d(() => {
    if (n && u?.(), !n) {
      const s = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      i(!s);
    }
  }, [n, u]), /* @__PURE__ */ M(
    f.Provider,
    {
      value: {
        ...m,
        enabled: l,
        setEnabled: c,
        open: n,
        setOpen: C,
        shouldPlayEntranceAnimation: E,
        setShouldPlayEntranceAnimation: i,
        setAutoClearMinutes: A,
        autoClearMinutes: l ? p : null,
        clear: h,
        setClearFunction: P
      },
      children: t
    }
  );
}, e = () => {
};
function v() {
  const t = x(f);
  return t === null ? {
    enabled: !1,
    setEnabled: e,
    open: !1,
    setOpen: e,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: e,
    setAutoClearMinutes: e,
    clear: e,
    setClearFunction: e,
    autoClearMinutes: null
  } : t;
}
export {
  T as AiPromotionChatStateProvider,
  v as useAiPromotionChat
};
