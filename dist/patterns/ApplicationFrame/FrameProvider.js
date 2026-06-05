import { jsx as d } from "react/jsx-runtime";
import { breakpoints as f } from "../../packages/core/dist/index.js";
import { useContext as E, createContext as T, useState as s, useCallback as m, useMemo as y, useEffect as c } from "react";
import { useMediaQuery as L } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { useNavigation as _ } from "../../lib/linkHandler.js";
const S = "one_sidebar_locked", v = T(void 0);
function R() {
  const i = E(v);
  return i === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : i;
}
function w({ children: i }) {
  const { currentPath: b } = _(), [g, k] = s(!1), [a, p] = s(!1), I = g ? f.xl : f.md, e = L(`(max-width: ${I}px)`, {
    initializeWithValue: !0
  }), [t, u] = s(() => {
    const r = localStorage.getItem(S);
    return r !== null ? !!r : !0;
  }), [o, n] = s(!1), [x, h] = s(
    null
  ), F = m(
    ({ isInvokedByUser: r } = {
      isInvokedByUser: !0
    }) => {
      p(r ?? !0), e && n(!o), u(!t);
    },
    [e, o, t, u, n]
  ), P = m(
    (r) => {
      e || (r.clientX < 32 && n(!0), r.clientX > 280 && n(!1));
    },
    [e, n]
  ), l = y(() => e ? o ? "unlocked" : "hidden" : !t && !o ? "hidden" : !t && o ? "unlocked" : "locked", [e, o, t]);
  return c(() => {
    n(!1);
  }, [b]), c(() => {
    a && localStorage.setItem(S, t ? "1" : "");
  }, [t, a]), c(() => () => {
    h(l);
  }, [l]), /* @__PURE__ */ d(
    v.Provider,
    {
      value: {
        isSmallScreen: e,
        isLastToggleInvokedByUser: a,
        sidebarState: l,
        toggleSidebar: F,
        prevSidebarState: x,
        setForceFloat: k
      },
      children: /* @__PURE__ */ d("div", { onPointerMove: P, className: "h-screen w-screen", children: i })
    }
  );
}
export {
  w as FrameProvider,
  R as useSidebar
};
