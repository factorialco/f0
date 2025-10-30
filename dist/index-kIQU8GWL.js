import { jsxs as v, jsx as n, Fragment as K } from "react/jsx-runtime";
import { useCopilotChatInternal as ue, useCopilotContext as Yt, useCopilotAction as Je, CopilotKit as qt } from "@copilotkit/react-core";
import { Markdown as Xt, useChatContext as Jt, CopilotSidebar as Qt, CopilotChat as en } from "@copilotkit/react-ui";
import { ag as tn, ah as nn, cy as $e, I as rn, u as Qe, b2 as an, at as q, an as T, s as re, cz as on, av as sn, bb as ln, b as x, cl as cn, cn as dn, co as un, D as fn, v as mn, cA as X, aX as gn, aW as xe, P as A, a as et, cB as tt, cC as z, cD as Ne, cE as hn, ck as P, cF as He, cG as pn, cH as oe, cI as le, cJ as vn, cK as bn, ay as nt, q as ke, aw as rt, ba as Cn, b1 as Me, z as wn, S as yn, l as xn, aZ as Nn, b5 as at, aG as kn, aM as Mn, F as En, B as $, x as pe, w as Ke, cL as ze, b9 as Rn, bO as Tn, y as ve, V as Sn, bc as J, as as In, a9 as Ln, cM as Ue, b7 as Pn, bx as On, cN as An, m as Ee } from "./dialog-D3AmLiwa.js";
import * as g from "react";
import { forwardRef as I, createContext as fe, useRef as F, useState as S, useCallback as Z, useContext as ae, useMemo as ce, useEffect as H, useId as me } from "react";
import _n from "react-dom";
import { randomId as Fn } from "@copilotkit/shared";
const Dn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 5V14M12 14L9 11M12 14L15 11",
    vectorEffect: "non-scaling-stroke"
  })]
}), Vn = I(Dn), Bn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z",
    vectorEffect: "non-scaling-stroke"
  })]
}), $n = I(Bn), Hn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    stroke: "currentColor",
    d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16",
    vectorEffect: "non-scaling-stroke"
  })]
}), Kn = I(Hn), zn = (e, t) => n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: n("path", {
    fill: "currentColor",
    d: "M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z",
    vectorEffect: "non-scaling-stroke"
  })
}), Un = I(zn), jn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20 8V11C20 12.1046 19.1046 13 18 13H16.5207C16.1943 13 15.8886 13.1592 15.7014 13.4265L12.8927 17.439C12.6466 17.7906 12.2444 18 11.8152 18C11.0888 18 10.5 17.4112 10.5 16.6848V14H6.06155C4.76041 14 3.80569 12.7772 4.12127 11.5149L4.9319 8.27239C5.26578 6.93689 6.46573 6 7.84233 6H16H18C19.1046 6 20 6.89543 20 8Z",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16 6V13",
    vectorEffect: "non-scaling-stroke"
  })]
}), Gn = I(jn), Wn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    fill: "currentColor",
    d: "M16.9401 6C16.9401 5.72386 17.164 5.5 17.4401 5.5L17.9401 5.5C19.3208 5.5 20.4401 6.61929 20.4401 8L20.4401 11C20.4401 12.3807 19.3208 13.5 17.9401 13.5L17.4401 13.5C17.164 13.5 16.9401 13.2761 16.9401 13L16.9401 6Z",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    fill: "currentColor",
    d: "M11.7555 18.5C10.753 18.5 9.94011 17.6871 9.94011 16.6846L9.94011 14.5L6.00163 14.5C4.37522 14.5 3.18139 12.9714 3.57585 11.3936L4.38738 8.15137C4.7769 6.59328 6.17685 5.5 7.78288 5.5L14.9401 5.5C15.4924 5.5 15.9401 5.94771 15.9401 6.5L15.9401 12.9265C15.9401 13.5419 15.7508 14.1425 15.3979 14.6468L13.2428 17.7256C12.9032 18.2108 12.3478 18.4999 11.7555 18.5Z",
    vectorEffect: "non-scaling-stroke"
  })]
}), Zn = I(Wn), Yn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 16V13C4 11.8954 4.89543 11 6 11H7.47934C7.80566 11 8.11145 10.8408 8.29858 10.5735L11.1073 6.56099C11.3534 6.2094 11.7556 6 12.1848 6C12.9112 6 13.5 6.58885 13.5 7.31522V10H17.9384C19.2396 10 20.1943 11.2228 19.8787 12.4851L19.0681 15.7276C18.7342 17.0631 17.5343 18 16.1577 18H8H6C4.89543 18 4 17.1046 4 16Z",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8 11V18",
    vectorEffect: "non-scaling-stroke"
  })]
}), qn = I(Yn), Xn = (e, t) => v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [n("path", {
    fill: "currentColor",
    d: "M7 18C7 18.2761 6.77614 18.5 6.5 18.5H6C4.61929 18.5 3.5 17.3807 3.5 16V13C3.5 11.6193 4.61929 10.5 6 10.5H6.5C6.77614 10.5 7 10.7239 7 11V18Z",
    vectorEffect: "non-scaling-stroke"
  }), n("path", {
    fill: "currentColor",
    d: "M12.1846 5.5C13.1871 5.5 14 6.31291 14 7.31543V9.5H17.9385C19.5649 9.50002 20.7587 11.0286 20.3643 12.6064L19.5527 15.8486C19.1632 17.4067 17.7633 18.5 16.1572 18.5H9C8.44772 18.5 8 18.0523 8 17.5V11.0735C8 10.4581 8.18931 9.85747 8.54225 9.35324L10.6973 6.27441C11.0369 5.78921 11.5923 5.50007 12.1846 5.5Z",
    vectorEffect: "non-scaling-stroke"
  })]
}), Jn = I(Xn), Qn = fe(null);
function er() {
  const e = F(!1);
  return tn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function tr() {
  const e = er(), [t, a] = S(0), r = Z(() => {
    e.current && a(t + 1);
  }, [t]);
  return [Z(() => nn.postRender(r), [r]), t];
}
const nr = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function je() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), a = () => e.forEach(nr);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", a));
    },
    remove: (r) => {
      e.delete(r);
      const o = t.get(r);
      o && (o(), t.delete(r)), a();
    },
    dirty: a
  };
}
const ot = (e) => e === !0, rr = (e) => ot(e === !0) || e === "id", it = ({ children: e, id: t, inherit: a = !0 }) => {
  const r = ae($e), o = ae(Qn), [i, s] = tr(), c = F(null), l = r.id || o;
  c.current === null && (rr(a) && l && (t = t ? l + "-" + t : l), c.current = {
    id: t,
    group: ot(a) && r.group || je()
  });
  const f = ce(() => ({ ...c.current, forceRender: i }), [s]);
  return n($e.Provider, { value: f, children: e });
}, ar = (e) => n(rn, {
  ...e,
  onChange: (t) => {
    var a;
    return (a = e.onChange) == null ? void 0 : a.call(e, t);
  },
  onKeyDown: (t) => {
    var a;
    t.key === "Enter" && ((a = e.onPressEnter) == null || a.call(e));
  }
}), or = {
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0.5,
    opacity: 0
  }
}, ir = {
  duration: 0.15,
  ease: "easeOut"
}, st = I(({ valueToCopy: e, onCopy: t, copyTooltipLabel: a, copiedTooltipLabel: r, variant: o = "neutral", size: i = "sm", ...s }, c) => {
  const [l, f] = S(!1), d = Qe(), m = a ?? d.actions.copy, u = l ? r ?? "Copied" : m;
  return H(() => {
    let b = null;
    return l && (b = setTimeout(() => f(!1), 1e3)), () => {
      b && clearTimeout(b);
    };
  }, [l]), n(an, {
    ref: c,
    variant: o,
    size: i,
    onClick: (b) => {
      b.stopPropagation(), window.navigator.clipboard.writeText(e), f(!0), t == null || t(b);
    },
    "aria-live": "polite",
    "aria-label": u,
    title: u,
    ...s,
    compact: !0,
    children: n(q, {
      mode: "wait",
      initial: !1,
      children: n(T.span, {
        variants: or,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: ir,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle"
        },
        children: n(re, {
          size: i === "sm" ? "sm" : "md",
          icon: l ? sn : $n,
          className: on({
            variant: o
          })
        })
      }, l ? "check" : "copy")
    })
  });
});
st.displayName = "ButtonCopy";
const lt = fe({
  open: !1,
  onClose: () => {
  },
  position: "center",
  contentPadding: "md",
  shownBottomSheet: !1
}), Ge = ({ isOpen: e, onClose: t, shownBottomSheet: a = !1, contentPadding: r, position: o, children: i }) => n(lt.Provider, {
  value: {
    open: e,
    onClose: t,
    position: o,
    shownBottomSheet: a,
    contentPadding: r
  },
  children: i
}), Re = () => ae(lt), ct = () => ln("(max-width: 560px)", {
  initializeWithValue: !1
}), sr = ({ asBottomSheetInMobile: e = !0, position: t = "center", onClose: a, isOpen: r, contentPadding: o = "md", children: i }) => {
  const [s, c] = S(r);
  H(() => {
    c(r);
  }, [r]);
  const l = (u) => {
    c(u), u || a();
  }, f = () => {
    c(!1), a();
  }, d = ct(), m = t === "left" || t === "right", p = ce(() => d && e ? "max-h-[95vh] bg-f1-background" : m ? x("w-full overflow-x-hidden flex flex-col absolute top-3 bottom-3 translate-y-0 translate-x-0 max-w-[539px] rounded-md border border-solid border-f1-border-secondary", t === "left" && "left-3", t === "right" && "left-auto right-3") : t === "fullscreen" ? "w-[calc(100%-48px)] h-[calc(100%-48px)] overflow-x-hidden" : "flex flex-col max-h-[620px] max-w-[680px] overflow-hidden", [t, d, e, m]);
  return d && e ? n(Ge, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: o,
    shownBottomSheet: !0,
    children: v(cn, {
      open: s,
      onOpenChange: l,
      children: [n(dn, {
        className: "bg-f1-background-overlay"
      }), n(un, {
        className: p,
        children: i
      })]
    })
  }) : n(Ge, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: o,
    children: n(fn, {
      open: s,
      onOpenChange: a,
      modal: t === "center" || t === "fullscreen",
      children: n(mn, {
        withTraslateAnimation: !m,
        className: p,
        children: i
      })
    })
  });
};
var Q = "NavigationMenu", [Te, dt, lr] = tt(Q), [be, cr, dr] = tt(Q), [Se, Va] = et(
  Q,
  [lr, dr]
), [ur, D] = Se(Q), [fr, mr] = Se(Q), ut = g.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: a,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: s = 200,
      skipDelayDuration: c = 300,
      orientation: l = "horizontal",
      dir: f,
      ...d
    } = e, [m, p] = g.useState(null), u = X(t, (M) => p(M)), h = gn(f), b = g.useRef(0), N = g.useRef(0), k = g.useRef(0), [E, w] = g.useState(!0), [y = "", C] = xe({
      prop: r,
      onChange: (M) => {
        const O = M !== "", ee = c > 0;
        O ? (window.clearTimeout(k.current), ee && w(!1)) : (window.clearTimeout(k.current), k.current = window.setTimeout(
          () => w(!0),
          c
        )), o == null || o(M);
      },
      defaultProp: i
    }), R = g.useCallback(() => {
      window.clearTimeout(N.current), N.current = window.setTimeout(() => C(""), 150);
    }, [C]), L = g.useCallback(
      (M) => {
        window.clearTimeout(N.current), C(M);
      },
      [C]
    ), _ = g.useCallback(
      (M) => {
        y === M ? window.clearTimeout(N.current) : b.current = window.setTimeout(() => {
          window.clearTimeout(N.current), C(M);
        }, s);
      },
      [y, C, s]
    );
    return g.useEffect(() => () => {
      window.clearTimeout(b.current), window.clearTimeout(N.current), window.clearTimeout(k.current);
    }, []), /* @__PURE__ */ n(
      mt,
      {
        scope: a,
        isRootMenu: !0,
        value: y,
        dir: h,
        orientation: l,
        rootNavigationMenu: m,
        onTriggerEnter: (M) => {
          window.clearTimeout(b.current), E ? _(M) : L(M);
        },
        onTriggerLeave: () => {
          window.clearTimeout(b.current), R();
        },
        onContentEnter: () => window.clearTimeout(N.current),
        onContentLeave: R,
        onItemSelect: (M) => {
          C((O) => O === M ? "" : M);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ n(
          A.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: h,
            ...d,
            ref: u
          }
        )
      }
    );
  }
);
ut.displayName = Q;
var ft = "NavigationMenuSub", gr = g.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: a,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      ...c
    } = e, l = D(ft, a), [f = "", d] = xe({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ n(
      mt,
      {
        scope: a,
        isRootMenu: !1,
        value: f,
        dir: l.dir,
        orientation: s,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (m) => d(m),
        onItemSelect: (m) => d(m),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ n(A.div, { "data-orientation": s, ...c, ref: t })
      }
    );
  }
);
gr.displayName = ft;
var mt = (e) => {
  const {
    scope: t,
    isRootMenu: a,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: s,
    value: c,
    onItemSelect: l,
    onItemDismiss: f,
    onTriggerEnter: d,
    onTriggerLeave: m,
    onContentEnter: p,
    onContentLeave: u
  } = e, [h, b] = g.useState(null), [N, k] = g.useState(/* @__PURE__ */ new Map()), [E, w] = g.useState(null);
  return /* @__PURE__ */ n(
    ur,
    {
      scope: t,
      isRootMenu: a,
      rootNavigationMenu: r,
      value: c,
      previousValue: hn(c),
      baseId: Ne(),
      dir: o,
      orientation: i,
      viewport: h,
      onViewportChange: b,
      indicatorTrack: E,
      onIndicatorTrackChange: w,
      onTriggerEnter: z(d),
      onTriggerLeave: z(m),
      onContentEnter: z(p),
      onContentLeave: z(u),
      onItemSelect: z(l),
      onItemDismiss: z(f),
      onViewportContentChange: g.useCallback((y, C) => {
        k((R) => (R.set(y, C), new Map(R)));
      }, []),
      onViewportContentRemove: g.useCallback((y) => {
        k((C) => C.has(y) ? (C.delete(y), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ n(Te.Provider, { scope: t, children: /* @__PURE__ */ n(fr, { scope: t, items: N, children: s }) })
    }
  );
}, gt = "NavigationMenuList", ht = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: a, ...r } = e, o = D(gt, a), i = /* @__PURE__ */ n(A.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ n(A.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ n(Te.Slot, { scope: a, children: o.isRootMenu ? /* @__PURE__ */ n(yt, { asChild: !0, children: i }) : i }) });
  }
);
ht.displayName = gt;
var pt = "NavigationMenuItem", [hr, vt] = Se(pt), bt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: a, value: r, ...o } = e, i = Ne(), s = r || i || "LEGACY_REACT_AUTO_VALUE", c = g.useRef(null), l = g.useRef(null), f = g.useRef(null), d = g.useRef(() => {
    }), m = g.useRef(!1), p = g.useCallback((h = "start") => {
      if (c.current) {
        d.current();
        const b = we(c.current);
        b.length && Pe(h === "start" ? b : b.reverse());
      }
    }, []), u = g.useCallback(() => {
      if (c.current) {
        const h = we(c.current);
        h.length && (d.current = Er(h));
      }
    }, []);
    return /* @__PURE__ */ n(
      hr,
      {
        scope: a,
        value: s,
        triggerRef: l,
        contentRef: c,
        focusProxyRef: f,
        wasEscapeCloseRef: m,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: u,
        onContentFocusOutside: u,
        children: /* @__PURE__ */ n(A.li, { ...o, ref: t })
      }
    );
  }
);
bt.displayName = pt;
var Ce = "NavigationMenuTrigger", pr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: a, disabled: r, ...o } = e, i = D(Ce, e.__scopeNavigationMenu), s = vt(Ce, e.__scopeNavigationMenu), c = g.useRef(null), l = X(c, s.triggerRef, t), f = Nt(i.baseId, s.value), d = kt(i.baseId, s.value), m = g.useRef(!1), p = g.useRef(!1), u = s.value === i.value;
  return /* @__PURE__ */ v(K, { children: [
    /* @__PURE__ */ n(Te.ItemSlot, { scope: a, value: s.value, children: /* @__PURE__ */ n(xt, { asChild: !0, children: /* @__PURE__ */ n(
      A.button,
      {
        id: f,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Oe(u),
        "aria-expanded": u,
        "aria-controls": d,
        ...o,
        ref: l,
        onPointerEnter: P(e.onPointerEnter, () => {
          p.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: P(
          e.onPointerMove,
          de(() => {
            r || p.current || s.wasEscapeCloseRef.current || m.current || (i.onTriggerEnter(s.value), m.current = !0);
          })
        ),
        onPointerLeave: P(
          e.onPointerLeave,
          de(() => {
            r || (i.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: P(e.onClick, () => {
          i.onItemSelect(s.value), p.current = u;
        }),
        onKeyDown: P(e.onKeyDown, (h) => {
          const N = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          u && h.key === N && (s.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    u && /* @__PURE__ */ v(K, { children: [
      /* @__PURE__ */ n(
        pn,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (h) => {
            const b = s.contentRef.current, N = h.relatedTarget, k = N === c.current, E = b == null ? void 0 : b.contains(N);
            (k || !E) && s.onFocusProxyEnter(k ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ n("span", { "aria-owns": d })
    ] })
  ] });
});
pr.displayName = Ce;
var vr = "NavigationMenuLink", We = "navigationMenu.linkSelect", Ct = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: a, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ n(xt, { asChild: !0, children: /* @__PURE__ */ n(
      A.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: P(
          e.onClick,
          (s) => {
            const c = s.target, l = new CustomEvent(We, {
              bubbles: !0,
              cancelable: !0
            });
            if (c.addEventListener(We, (f) => o == null ? void 0 : o(f), { once: !0 }), He(c, l), !l.defaultPrevented && !s.metaKey) {
              const f = new CustomEvent(se, {
                bubbles: !0,
                cancelable: !0
              });
              He(c, f);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ct.displayName = vr;
var Ie = "NavigationMenuIndicator", br = g.forwardRef((e, t) => {
  const { forceMount: a, ...r } = e, o = D(Ie, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? _n.createPortal(
    /* @__PURE__ */ n(oe, { present: a || i, children: /* @__PURE__ */ n(Cr, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
br.displayName = Ie;
var Cr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: a, ...r } = e, o = D(Ie, a), i = dt(a), [s, c] = g.useState(
    null
  ), [l, f] = g.useState(null), d = o.orientation === "horizontal", m = !!o.value;
  g.useEffect(() => {
    var b;
    const h = (b = i().find((N) => N.value === o.value)) == null ? void 0 : b.ref.current;
    h && c(h);
  }, [i, o.value]);
  const p = () => {
    s && f({
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return ye(s, p), ye(o.indicatorTrack, p), l ? /* @__PURE__ */ n(
    A.div,
    {
      "aria-hidden": !0,
      "data-state": m ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Y = "NavigationMenuContent", wr = g.forwardRef((e, t) => {
  const { forceMount: a, ...r } = e, o = D(Y, e.__scopeNavigationMenu), i = vt(Y, e.__scopeNavigationMenu), s = X(i.contentRef, t), c = i.value === o.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ n(yr, { forceMount: a, ...l, ref: s }) : /* @__PURE__ */ n(oe, { present: a || c, children: /* @__PURE__ */ n(
    wt,
    {
      "data-state": Oe(c),
      ...l,
      ref: s,
      onPointerEnter: P(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: P(
        e.onPointerLeave,
        de(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !c && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
wr.displayName = Y;
var yr = g.forwardRef((e, t) => {
  const a = D(Y, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = a;
  return le(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), le(() => () => o(e.value), [e.value, o]), null;
}), se = "navigationMenu.rootContentDismiss", wt = g.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: a,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: c,
    onContentFocusOutside: l,
    ...f
  } = e, d = D(Y, a), m = g.useRef(null), p = X(m, t), u = Nt(d.baseId, r), h = kt(d.baseId, r), b = dt(a), N = g.useRef(null), { onItemDismiss: k } = d;
  g.useEffect(() => {
    const w = m.current;
    if (d.isRootMenu && w) {
      const y = () => {
        var C;
        k(), c(), w.contains(document.activeElement) && ((C = o.current) == null || C.focus());
      };
      return w.addEventListener(se, y), () => w.removeEventListener(se, y);
    }
  }, [d.isRootMenu, e.value, o, k, c]);
  const E = g.useMemo(() => {
    const y = b().map((O) => O.value);
    d.dir === "rtl" && y.reverse();
    const C = y.indexOf(d.value), R = y.indexOf(d.previousValue), L = r === d.value, _ = R === y.indexOf(r);
    if (!L && !_) return N.current;
    const M = (() => {
      if (C !== R) {
        if (L && R !== -1) return C > R ? "from-end" : "from-start";
        if (_ && C !== -1) return C > R ? "to-start" : "to-end";
      }
      return null;
    })();
    return N.current = M, M;
  }, [d.previousValue, d.value, d.dir, b, r]);
  return /* @__PURE__ */ n(yt, { asChild: !0, children: /* @__PURE__ */ n(
    vn,
    {
      id: h,
      "aria-labelledby": u,
      "data-motion": E,
      "data-orientation": d.orientation,
      ...f,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var y;
        const w = new Event(se, {
          bubbles: !0,
          cancelable: !0
        });
        (y = m.current) == null || y.dispatchEvent(w);
      },
      onFocusOutside: P(e.onFocusOutside, (w) => {
        var C;
        l();
        const y = w.target;
        (C = d.rootNavigationMenu) != null && C.contains(y) && w.preventDefault();
      }),
      onPointerDownOutside: P(e.onPointerDownOutside, (w) => {
        var L;
        const y = w.target, C = b().some((_) => {
          var M;
          return (M = _.ref.current) == null ? void 0 : M.contains(y);
        }), R = d.isRootMenu && ((L = d.viewport) == null ? void 0 : L.contains(y));
        (C || R || !d.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: P(e.onKeyDown, (w) => {
        var R;
        const y = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !y) {
          const L = we(w.currentTarget), _ = document.activeElement, M = L.findIndex((ge) => ge === _), ee = w.shiftKey ? L.slice(0, M).reverse() : L.slice(M + 1, L.length);
          Pe(ee) ? w.preventDefault() : (R = i.current) == null || R.focus();
        }
      }),
      onEscapeKeyDown: P(e.onEscapeKeyDown, (w) => {
        s.current = !0;
      })
    }
  ) });
}), Le = "NavigationMenuViewport", xr = g.forwardRef((e, t) => {
  const { forceMount: a, ...r } = e, i = !!D(Le, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ n(oe, { present: a || i, children: /* @__PURE__ */ n(Nr, { ...r, ref: t }) });
});
xr.displayName = Le;
var Nr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: a, children: r, ...o } = e, i = D(Le, a), s = X(t, i.onViewportChange), c = mr(
    Y,
    e.__scopeNavigationMenu
  ), [l, f] = g.useState(null), [d, m] = g.useState(null), p = l ? (l == null ? void 0 : l.width) + "px" : void 0, u = l ? (l == null ? void 0 : l.height) + "px" : void 0, h = !!i.value, b = h ? i.value : i.previousValue;
  return ye(d, () => {
    d && f({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ n(
    A.div,
    {
      "data-state": Oe(h),
      "data-orientation": i.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": u,
        ...o.style
      },
      onPointerEnter: P(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: P(e.onPointerLeave, de(i.onContentLeave)),
      children: Array.from(c.items).map(([k, { ref: E, forceMount: w, ...y }]) => {
        const C = b === k;
        return /* @__PURE__ */ n(oe, { present: w || C, children: /* @__PURE__ */ n(
          wt,
          {
            ...y,
            ref: bn(E, (R) => {
              C && R && m(R);
            })
          }
        ) }, k);
      })
    }
  );
}), kr = "FocusGroup", yt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: a, ...r } = e, o = D(kr, a);
    return /* @__PURE__ */ n(be.Provider, { scope: a, children: /* @__PURE__ */ n(be.Slot, { scope: a, children: /* @__PURE__ */ n(A.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Ze = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Mr = "FocusGroupItem", xt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: a, ...r } = e, o = cr(a), i = D(Mr, a);
    return /* @__PURE__ */ n(be.ItemSlot, { scope: a, children: /* @__PURE__ */ n(
      A.button,
      {
        ...r,
        ref: t,
        onKeyDown: P(e.onKeyDown, (s) => {
          if (["Home", "End", ...Ze].includes(s.key)) {
            let l = o().map((m) => m.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), Ze.includes(s.key)) {
              const m = l.indexOf(s.currentTarget);
              l = l.slice(m + 1);
            }
            setTimeout(() => Pe(l)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function we(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Pe(e) {
  const t = document.activeElement;
  return e.some((a) => a === t ? !0 : (a.focus(), document.activeElement !== t));
}
function Er(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const a = t.dataset.tabindex;
      t.setAttribute("tabindex", a);
    });
  };
}
function ye(e, t) {
  const a = z(t);
  le(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(a);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, a]);
}
function Oe(e) {
  return e ? "open" : "closed";
}
function Nt(e, t) {
  return `${e}-trigger-${t}`;
}
function kt(e, t) {
  return `${e}-content-${t}`;
}
function de(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Rr = ut, Tr = ht, Sr = bt, Ir = Ct;
function Lr(e, t) {
  const { asChild: a, children: r } = e;
  if (!a) return typeof t == "function" ? t(r) : t;
  const o = g.Children.only(r);
  return g.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const Pr = ke({
  base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  variants: {
    secondary: {
      true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
      false: "bg-f1-background-transparent pt-1"
    }
  },
  defaultVariants: {
    secondary: !1
  }
}), Ae = g.forwardRef(({ className: e, children: t, secondary: a, ...r }, o) => {
  const i = me();
  return v(Rr, {
    ref: o,
    ...r,
    asChild: !1,
    className: "relative",
    children: [n("div", {
      className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary"
    }), n(it, {
      id: i,
      children: n(Tr, {
        className: x(Pr({
          secondary: a
        }), e),
        children: t
      })
    })]
  });
});
Ae.displayName = "TabNavigation";
const Or = ke({
  base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  variants: {
    secondary: {
      true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
      false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
    },
    disabled: {
      true: "pointer-events-none text-f1-foreground-disabled"
    }
  },
  defaultVariants: {
    secondary: !1,
    disabled: !1
  }
}), Ar = g.forwardRef(function({ asChild: t, disabled: a, active: r, className: o, children: i, secondary: s, ...c }, l) {
  return n(Sr, {
    className: "flex",
    children: n(Ir, {
      "data-active": r ? "true" : void 0,
      "aria-disabled": a || void 0,
      className: x("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", a ? "pointer-events-none" : ""),
      ref: l,
      onSelect: () => {
      },
      asChild: t,
      ...c,
      children: Lr({
        asChild: t,
        children: i
      }, (f) => v("span", {
        className: x("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", Or({
          secondary: s,
          disabled: a
        }), o),
        children: [f, r && !s && n(T.div, {
          layoutId: "underline",
          className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
          transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.5
          }
        })]
      }))
    })
  });
}), _r = ({ className: e }) => n("li", {
  className: "list-none",
  children: n(rt, {
    className: x("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", e),
    children: " "
  })
}), ne = nt(Ar, _r), Fr = ({ tabs: e, activeTabId: t, setActiveTabId: a, secondary: r = !1, embedded: o = !1 }) => {
  const i = e[0], [s, c] = S(t ?? ("id" in i ? i.id : void 0));
  H(() => {
    s && (a == null || a(s));
  }, [a, s]);
  const { isActive: l } = Cn(), f = o ? [e[0]] : e, m = [...f].sort((p, u) => p.index ? 1 : u.index ? -1 : 0).find((p) => "href" in p ? l(p.href) : s === p.id);
  return n(Ae, {
    secondary: r,
    asChild: !0,
    "aria-label": r ? "primary-navigation" : "secondary-navigation",
    children: f.length === 1 ? n("li", {
      className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
      children: f[0].label
    }) : f.map(({ label: p, ...u }, h) => {
      const b = m && "href" in m && "href" in u ? m.href === u.href : "id" in u && s === u.id;
      return n(ne, {
        active: b,
        href: "href" in u ? u.href : void 0,
        onClick: () => {
          "id" in u && (c == null || c(u.id));
        },
        secondary: r,
        asChild: !0,
        children: v(Me, {
          role: "link",
          ...u,
          children: [u.variant === "upsell" && n(re, {
            icon: wn,
            size: "md",
            className: "mr-1 text-[hsl(var(--promote-50))]"
          }), p]
        })
      }, h);
    })
  });
}, Dr = ({ secondary: e }) => v(Ae, {
  "aria-label": e ? "Secondary empty nav" : "Main empty nav",
  secondary: e,
  "aria-busy": "true",
  "aria-live": "polite",
  children: [n(ne.Skeleton, {
    className: "w-24"
  }), n(ne.Skeleton, {
    className: "w-20"
  }), n(ne.Skeleton, {
    className: "w-28"
  }), n(ne.Skeleton, {
    className: "w-20"
  })]
}), Vr = nt(Fr, Dr), Br = ({ tabs: e, activeTabId: t, setActiveTabId: a, withPadding: r = !1, children: o }) => {
  const { position: i } = Re(), s = ct();
  return v(K, {
    children: [e && n("div", {
      className: "-mx-2",
      children: n(Vr, {
        tabs: e,
        activeTabId: t,
        setActiveTabId: a
      })
    }), v(yn, {
      className: x("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", r && "px-5 py-3", !s && i === "center" && "max-h-[512px]"),
      children: [o, n(xn, {
        orientation: "vertical",
        className: "[&_div]:bg-f1-background"
      })]
    })]
  });
}, $r = {
  sm: "min-h-14 py-3 px-4",
  md: "min-h-18 p-5"
}, Hr = ({ children: e }) => {
  const { contentPadding: t } = Re();
  return n("div", {
    className: x("flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background", $r[t]),
    children: e
  });
}, Kr = I(({ ...e }, t) => n("nav", {
  ref: t,
  "aria-label": "breadcrumb",
  ...e
}));
Kr.displayName = "Breadcrumb";
const Mt = I(({ className: e, children: t, ...a }, r) => {
  const o = me();
  return n("ol", {
    ref: r,
    className: x("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
    ...a,
    children: n(it, {
      id: o,
      children: n(q, {
        initial: !1,
        children: t
      })
    })
  });
});
Mt.displayName = "BreadcrumbList";
const Et = ({ className: e, ...t }) => n("li", {
  className: x("inline-flex items-center gap-0.5 pr-1", e),
  ...t
});
Et.displayName = "BreadcrumbItem";
const Rt = I(({ asChild: e, className: t, ...a }, r) => n(e ? Nn : Me, {
  ref: r,
  className: x("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
  ...a
}));
Rt.displayName = "BreadcrumbLink";
const Tt = I(({ className: e, ...t }, a) => n("span", {
  ref: a,
  role: "link",
  "aria-disabled": "true",
  "aria-current": "page",
  className: x("truncate px-1.5 py-0.5 text-f1-foreground", e),
  ...t
}));
Tt.displayName = "BreadcrumbPage";
const St = I((e, t) => n("span", {
  ref: t,
  role: "presentation",
  "aria-hidden": "true",
  className: "h-4 w-4 text-f1-icon-secondary",
  ...e,
  children: n(at, {})
}));
St.displayName = "BreadcrumbSeparator";
function zr({ ...e }) {
  const [t, a] = S(e.open), r = (l) => {
    var f;
    a(l), (f = e.onOpenChange) == null || f.call(e, l);
  }, [o, i] = S(e.placeholder || e.label);
  return n(kn, {
    ...e,
    onOpenChange: r,
    onChange: (l, f, d) => {
      var m;
      (m = e.onChange) == null || m.call(e, l, f, d);
    },
    onChangeSelectedOption: (l) => {
      i((l == null ? void 0 : l.label) || "");
    },
    label: o,
    hideLabel: !0,
    children: v("button", {
      className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      children: [n("span", {
        className: "block grow text-f1-foreground",
        children: o
      }), n("div", {
        className: "ml-2",
        children: n(T.div, {
          animate: {
            rotate: t ? 180 : 0
          },
          className: "h-[16px] w-[16px]",
          children: n(re, {
            icon: Mn,
            size: "sm",
            className: "rounded-2xs bg-f1-background-secondary p-0.5"
          })
        })
      })]
    })
  });
}
const Ur = ke({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Ye = [{
  id: "bottom",
  delay: 2.6,
  transformOrigin: "center 89%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
}, {
  id: "left",
  delay: 2.2,
  transformOrigin: "11% center",
  rotateAxis: "0, 1, 0",
  path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
}, {
  id: "right",
  delay: 2.4,
  transformOrigin: "88.5% center",
  rotateAxis: "0, 1, 0",
  path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
}, {
  id: "top",
  delay: 2,
  transformOrigin: "center 11%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
}], jr = ({ spin: e = !1, size: t = "md", background: a, hover: r = !1, ...o }, i) => {
  const s = me(), { onAnimationStart: c, onAnimationEnd: l, onDragStart: f, onDragEnd: d, onDrag: m, className: p, ...u } = o;
  return n("div", {
    className: x(Ur({
      size: t
    }), p),
    style: {
      background: "transparent",
      perspective: e ? "10px" : void 0,
      transformStyle: e ? "preserve-3d" : void 0
    },
    children: v(T.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: i,
      animate: {
        "--gradient-angle": ["0deg", "360deg"]
      },
      transition: a ? void 0 : {
        "--gradient-angle": {
          duration: 6,
          ease: "linear",
          repeat: 1 / 0
        }
      },
      style: {
        "--gradient-angle": "0deg",
        ...u.style
      },
      ...(({ style: h, ...b }) => b)(u),
      children: [v("defs", {
        children: [n("clipPath", {
          id: `${s}-circle`,
          children: n("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), Ye.map((h) => n("clipPath", {
          id: `${s}-${h.id}`,
          children: n("path", {
            d: h.path
          })
        }, h.id))]
      }), n("g", {
        clipPath: `url(#${s}-circle)`,
        children: Ye.map((h) => n(T.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${s}-${h.id})`,
          animate: {
            "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
            "--scale": r ? 8 : 1,
            "--rotate": r ? "90deg" : "0deg",
            opacity: r ? h.id === "left" ? 1 : 0 : 1,
            filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
          },
          transition: {
            "--rotate3d-angle": {
              delay: e ? h.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.99, 0.9999, 1]
            },
            "--scale": {
              duration: r ? 0.6 : 0.35,
              ease: [0.55, 0, 0.1, 1]
            },
            "--rotate": {
              duration: 0.35,
              ease: "easeInOut"
            },
            opacity: {
              duration: r ? 0.8 : 0.1,
              ease: "easeInOut"
            },
            filter: {
              delay: e ? h.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.5, 1]
            }
          },
          style: {
            "--rotate3d-angle": "0deg",
            "--scale": 1,
            "--rotate": "0deg",
            transform: e ? `rotate3d(${h.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
            transformOrigin: h.transformOrigin,
            willChange: "transform"
          },
          children: n("div", {
            style: {
              width: "100%",
              height: "100%",
              background: a ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, h.id))
      })]
    })
  });
}, Gr = I(jr), It = fe(null), Wr = 15, Zr = ({ children: e, enabled: t, agent: a, initialMessage: r, welcomeScreenSuggestions: o = [], onThumbsDown: i, onThumbsUp: s, ...c }) => {
  const [l, f] = S(t), [d, m] = S(!1), [p, u] = S(!0), [h, b] = S(a), [N, k] = S(o), [E, w] = S(Wr), [y, C] = S(r), R = F(null), L = (O) => {
    b(O);
  }, _ = (O) => {
    R.current = O;
  }, M = () => {
    R.current && R.current();
  };
  return H(() => {
    f(t);
  }, [t]), H(() => {
    if (!d) {
      const O = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      u(!O);
    }
  }, [d]), n(It.Provider, {
    value: {
      ...c,
      enabled: l,
      setEnabled: f,
      open: d,
      setOpen: m,
      shouldPlayEntranceAnimation: p,
      setShouldPlayEntranceAnimation: u,
      agent: h,
      tmp_setAgent: L,
      setAutoClearMinutes: w,
      autoClearMinutes: l ? E : null,
      initialMessage: y,
      setInitialMessage: C,
      welcomeScreenSuggestions: N,
      setWelcomeScreenSuggestions: k,
      onThumbsUp: s,
      onThumbsDown: i,
      clear: M,
      setClearFunction: _
    },
    children: e
  });
}, B = () => {
};
function j() {
  const e = ae(It);
  return e === null ? {
    enabled: !1,
    setEnabled: B,
    open: !1,
    setOpen: B,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: B,
    agent: void 0,
    tmp_setAgent: B,
    setAutoClearMinutes: B,
    clear: B,
    setClearFunction: B,
    autoClearMinutes: null,
    initialMessage: void 0,
    setInitialMessage: B,
    welcomeScreenSuggestions: [],
    setWelcomeScreenSuggestions: B,
    onThumbsUp: B,
    onThumbsDown: B
  } : e;
}
const Lt = I((e, t) => n("div", {
  ref: t,
  className: "px-1.5",
  ...e,
  children: n(rt, {
    className: "h-4 w-24",
    "aria-hidden": "true"
  })
}));
Lt.displayName = "BreadcrumbSkeleton";
const Pt = I(({ item: e, isLast: t, isOnly: a = !1, isFirst: r = !1, children: o }, i) => v(Et, {
  ref: i,
  children: [!r && n(St, {}), n(Ot, {
    item: e,
    isLast: t,
    isOnly: a,
    isFirst: r
  }), o]
}, e.id));
Pt.displayName = "BreadcrumbItem";
const Ot = I(({ item: e, isLast: t, isOnly: a = !1, isFirst: r = !1 }, o) => {
  const i = "loading" in e && e.loading, s = i ? "loading" : "type" in e && e.type ? e.type : t || a ? "page" : "link", c = v(T.div, {
    layoutId: `breadcrumb-${e.id}`,
    className: x("flex items-center gap-2 px-1.5", r && "pl-0", a && "text-2xl font-semibold"),
    transition: {
      duration: 0.15
    },
    children: [!i && "module" in e && e.module && (a || r) && n(En, {
      module: e.module,
      size: a ? "lg" : "sm"
    }), n("span", {
      className: "truncate",
      children: !i && "label" in e ? e.label : ""
    })]
  }), l = {
    loading: n(Lt, {}),
    select: "type" in e && e.type === "select" && (e.options || e.source) && n(K, {
      children: n(zr, {
        label: e.label,
        hideLabel: !0,
        source: e.source,
        options: e.options,
        mapOptions: e.mapOptions,
        defaultItem: e.defaultItem,
        onChange: e.onChange,
        value: e.value,
        showSearchBox: e.searchbox
      })
    }),
    page: n(Tt, {
      "aria-hidden": "true",
      className: "p-0",
      children: c
    }),
    link: n(Rt, {
      asChild: !0,
      className: "p-0",
      children: n(Me, {
        ..."href" in e && !("type" in e) ? e : {},
        className: "block",
        children: c
      })
    })
  };
  return n(T.div, {
    ref: o,
    layout: !0,
    className: x(i && "max-w-40"),
    transition: {
      duration: 0.15
    },
    children: l[s]
  });
});
Ot.displayName = "BreadcrumbContent";
const Yr = {
  sm: "py-3 px-4",
  md: "p-5 pb-3"
}, qr = ({ title: e, module: t, otherActions: a }) => {
  const { onClose: r, shownBottomSheet: o, position: i, contentPadding: s } = Re(), c = x("font-semibold text-f1-foreground", i === "center" ? "text-lg" : "text-xl"), l = () => n("div", {
    className: "h-4 w-px self-center bg-f1-background-secondary"
  }), f = (a == null ? void 0 : a.filter((u) => u.type !== "separator")) ?? [], d = () => !f.length || !a ? null : f.length <= 2 ? n("div", {
    className: "flex flex-row gap-2",
    children: f.map((u) => n($, {
      variant: "outline",
      icon: u.icon,
      onClick: u.onClick,
      label: u.label,
      hideLabel: !0
    }, u.label))
  }) : n(Rn, {
    items: a
  }), m = () => t ? n(Mt, {
    children: n(Pt, {
      item: {
        id: t.id,
        label: t.label,
        href: t.href,
        module: t.id
      },
      isLast: !1,
      isFirst: !0
    })
  }) : null, p = x("flex flex-col gap-3 bg-f1-background", Yr[s]);
  return t && !o ? v("div", {
    className: p,
    children: [v("div", {
      className: "flex flex-row justify-between",
      children: [t ? n(m, {}) : n(d, {}), v("div", {
        className: "flex flex-row gap-2",
        children: [t && v(K, {
          children: [n(d, {}), a && n(l, {})]
        }), n($, {
          variant: "outline",
          icon: pe,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), !!e && n(Ke, {
      className: x(c, "text-2xl"),
      children: e
    })]
  }) : v("div", {
    className: p,
    children: [v("div", {
      className: "flex flex-row items-center justify-between",
      children: [o ? n(K, {
        children: t ? n(m, {}) : n(ze, {
          className: c,
          children: e
        })
      }) : !!e && n(Ke, {
        className: c,
        children: e
      }), v("div", {
        className: "flex flex-row gap-2",
        children: [n(d, {}), a && n(l, {}), n($, {
          variant: "outline",
          icon: pe,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), t && !!e && n(ze, {
      className: c,
      children: e
    })]
  });
}, U = sr;
U.Header = qr;
U.Content = Br;
U.Footer = Hr;
const Xr = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, Jr = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0
    }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, Qr = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, ea = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, At = g.forwardRef(({ animate: e = "normal", ...t }, a) => v("svg", {
  ref: a,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeWidth: "1.3",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...t,
  children: [n(T.circle, {
    cx: "12",
    cy: "12",
    r: "8",
    initial: "normal",
    variants: ea,
    transition: Qr,
    animate: e,
    vectorEffect: "non-scaling-stroke"
  }), n(T.path, {
    d: "M9.00003 12L11.4 14.4L15 9.6",
    initial: "normal",
    variants: Jr,
    transition: Xr,
    animate: e,
    vectorEffect: "non-scaling-stroke"
  })]
}));
At.displayName = "CheckCircleLineAnimated";
const qe = [{
  id: "bottom",
  delay: 2.6,
  transformOrigin: "center 89%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
}, {
  id: "right",
  delay: 2.4,
  transformOrigin: "88.5% center",
  rotateAxis: "0, 1, 0",
  path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
}, {
  id: "top",
  delay: 2,
  transformOrigin: "center 11%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
}, {
  id: "left",
  delay: 2.2,
  transformOrigin: "11% center",
  rotateAxis: "0, 1, 0",
  path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
}], ta = (e, t) => {
  const a = me(), { onAnimationStart: r, onAnimationEnd: o, onDragStart: i, onDragEnd: s, onDrag: c, ...l } = e;
  return n("div", {
    className: "h-4 w-4 shrink-0",
    children: v(T.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      initial: {
        rotate: "0deg",
        opacity: 0,
        scale: 0.8,
        filter: "blur(4px)"
      },
      animate: {
        "--gradient-angle": ["0deg", "360deg"],
        rotate: "360deg",
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      },
      transition: {
        "--gradient-angle": {
          duration: 3,
          ease: "linear",
          repeat: 1 / 0
        },
        rotate: {
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
          repeat: 1 / 0
        },
        opacity: {
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1]
        },
        scale: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 1.94]
        },
        filter: {
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1]
        }
      },
      style: {
        "--gradient-angle": "0deg",
        ...l.style
      },
      ...(({ style: f, ...d }) => d)(l),
      children: [v("defs", {
        children: [n("clipPath", {
          id: `${a}-circle`,
          children: n("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), qe.map((f) => n("clipPath", {
          id: `${a}-${f.id}`,
          children: n("path", {
            d: f.path
          })
        }, f.id))]
      }), n("g", {
        clipPath: `url(#${a}-circle)`,
        children: qe.map((f) => n(T.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${a}-${f.id})`,
          animate: {
            "--scale": [1, 8, 1]
          },
          transition: {
            "--scale": {
              duration: 2,
              ease: [0.85, 0, 0.15, 1],
              repeat: 1 / 0,
              delay: 1
            }
          },
          style: {
            "--scale": 1,
            transform: "scale(var(--scale))",
            transformOrigin: f.transformOrigin,
            willChange: "transform"
          },
          children: n("div", {
            style: {
              width: "100%",
              height: "100%",
              background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, f.id))
      })]
    })
  });
}, _t = I(ta), Ft = ({ title: e, status: t, inGroup: a }) => v("div", {
  className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
  children: [t === "inProgress" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(re, {
      state: "animate",
      size: a ? "md" : "lg",
      icon: Tn
    })
  }), t === "executing" && n("div", {
    className: "-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center",
    children: n(_t, {})
  }), t === "completed" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(re, {
      color: "secondary",
      state: "animate",
      size: a ? "md" : "lg",
      icon: At
    })
  }), n(T.p, {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      ease: "easeOut",
      duration: 0.3
    },
    className: "text-pretty",
    children: e
  }, e)]
}), na = {
  p: ({ children: e, ...t }) => n("p", {
    ...t,
    className: x("text-base font-normal", t.className),
    children: e
  }),
  h1: ({ children: e, ...t }) => n("h1", {
    ...t,
    className: x("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", t.className),
    children: e
  }),
  h2: ({ children: e, ...t }) => n("h2", {
    ...t,
    className: x("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", t.className),
    children: e
  }),
  h3: ({ children: e, ...t }) => n("h3", {
    ...t,
    className: x("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", t.className),
    children: e
  }),
  a: ({ children: e, ...t }) => n(Sn, {
    ...t,
    variant: "link",
    href: t.href,
    children: e
  }),
  strong: ({ children: e, ...t }) => n("strong", {
    ...t,
    className: x("font-semibold", t.className),
    children: e
  }),
  em: ({ children: e, ...t }) => n("em", {
    ...t,
    className: x("italic", t.className),
    children: e
  }),
  li: ({ children: e, ...t }) => n("li", {
    ...t,
    className: x("mb-2", t.className),
    children: e
  }),
  pre: ({ children: e, ...t }) => n("pre", {
    ...t,
    className: x("relative mx-0 my-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", t.className),
    children: e
  }),
  blockquote: ({ children: e, ...t }) => n("blockquote", {
    ...t,
    className: x("m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4", t.className),
    children: e
  }),
  hr: ({ ...e }) => n("hr", {
    ...e,
    className: x("my-3 border-0 border-t border-f1-border", e.className)
  }),
  ul: ({ children: e, ...t }) => n("ul", {
    ...t,
    className: x("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
    children: e
  }),
  ol: ({ children: e, ...t }) => n("ol", {
    ...t,
    className: x("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
    children: e
  }),
  table: ({ children: e, ...t }) => n("table", {
    ...t,
    className: x("mb-2 w-full border-separate border-spacing-0 overflow-hidden rounded-md border border-solid border-f1-border-secondary", t.className),
    children: e
  }),
  th: ({ children: e, ...t }) => n("th", {
    ...t,
    className: x("border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-left font-medium text-f1-foreground-secondary", t.className),
    children: e
  }),
  td: ({ children: e, ...t }) => n("td", {
    ...t,
    className: x("border-0 border-b border-solid border-f1-border-secondary px-3 py-2", t.className),
    children: e
  }),
  img: ({ src: e, alt: t, ...a }) => {
    const r = () => {
      if (e) {
        const o = document.createElement("a");
        o.href = e, o.download = t || "image", document.body.appendChild(o), o.click(), document.body.removeChild(o);
      }
    };
    return v("div", {
      className: "relative w-fit",
      children: [n("img", {
        ...a,
        src: e,
        alt: t,
        className: x("max-w-full rounded-md", a.className)
      }), n("div", {
        className: "absolute right-2 top-2 rounded bg-f1-background-inverse-secondary",
        children: n(ve, {
          variant: "neutral",
          label: "t.actions.save",
          hideLabel: !0,
          icon: Vn,
          onClick: r
        })
      })]
    });
  }
}, Dt = fe(null), ra = ({ children: e }) => {
  const [t, a] = S(null), r = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (o, i) => a({
      action: o,
      message: i
    }),
    close: () => a(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (o, i) => a({
      action: o,
      message: i
    }),
    close: () => a(null)
  };
  return n(Dt.Provider, {
    value: r,
    children: e
  });
}, Vt = () => {
  const e = ae(Dt);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, Bt = ({ isGenerating: e, isLoading: t, markdownTagRenderers: a, message: r, onCopy: o }) => {
  var E, w;
  const i = (r == null ? void 0 : r.content) || "", s = (r == null ? void 0 : r.role) === "assistant" && ((E = r.toolCalls) == null ? void 0 : E.find((y) => y.function.name === "orchestratorThinking")), c = (w = r == null ? void 0 : r.generativeUI) == null ? void 0 : w.call(r, s ? {
    status: t ? "executing" : "completed"
  } : void 0), l = !i && !c, f = J(), { open: d } = Vt(), [m, p] = S(null), [u, h] = S(!1), b = F(), N = Z(() => {
    b.current && clearTimeout(b.current), !t && !e && !c && h(!0);
  }, [e, t, c]), k = Z(() => {
    b.current = setTimeout(() => {
      h(!1);
    }, 150);
  }, []);
  return !t && !e && l ? null : v("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center",
    onMouseEnter: N,
    onMouseLeave: k,
    children: [t && !c && n("div", {
      className: "min-h-[20px]",
      children: n(_t, {})
    }), r && v(K, {
      children: [n("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: n(Xt, {
          content: i,
          components: {
            ...na,
            ...a
          }
        })
      }), n("div", {
        className: x("invisible absolute left-0 top-full py-1 pr-4 focus-within:visible", u && !e && "visible"),
        onMouseEnter: N,
        children: v("div", {
          className: "flex gap-1",
          children: [n("div", {
            children: n(st, {
              variant: "ghost",
              valueToCopy: i,
              disabled: e,
              onCopy: (y) => {
                y.currentTarget.blur(), o == null || o(i);
              }
            })
          }), n("div", {
            children: n(ve, {
              variant: "ghost",
              size: "sm",
              label: f.ai.thumbsUp,
              icon: m === "like" ? Jn : qn,
              hideLabel: !0,
              disabled: e,
              onClick: (y) => {
                const C = m === "like" ? null : "like";
                C && d(C, r), p(C), y.currentTarget.blur();
              }
            })
          }), n("div", {
            children: n(ve, {
              variant: "ghost",
              size: "sm",
              label: f.ai.thumbsDown,
              icon: m === "dislike" ? Zn : Gn,
              hideLabel: !0,
              disabled: e,
              onClick: (y) => {
                const C = m === "dislike" ? null : "dislike";
                C && d(C, r), p(C), y.currentTarget.blur();
              }
            })
          })]
        })
      })]
    }), !!c && n("div", {
      children: c
    })]
  });
}, aa = () => null, oa = (e) => {
  const { labels: t } = Jt(), { setOpen: a } = j(), r = J(), o = t.title === "CopilotKit";
  return v("header", {
    className: x("flex justify-between border-0 border-solid border-f1-border-secondary p-3"),
    children: [n("h2", {
      className: "text-f1-foreground",
      children: o ? "" : t.title
    }), n(T.div, {
      layout: !0,
      className: "flex items-center gap-x-2",
      ...e,
      children: n($, {
        variant: "ghost",
        hideLabel: !0,
        label: r.ai.closeChat,
        icon: pe,
        onClick: () => a(!1)
      })
    })]
  });
}, $t = ({ inProgress: e, onSend: t, onStop: a }) => {
  const [r, o] = S(""), [i, s] = S(!1), c = F(null), l = F(null), f = J(), d = r.trim().length > 0;
  H(() => {
    if (l.current && r.length > 0) {
      const { scrollHeight: u, clientHeight: h } = l.current;
      s(u > h);
    } else
      s(!1);
  }, [r]);
  const m = (u) => {
    var h;
    u.preventDefault(), e ? a == null || a() : d && (t(r.trim()), o("")), (h = l.current) == null || h.focus();
  }, p = (u) => {
    var h;
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), e || (h = c.current) == null || h.requestSubmit());
  };
  return v(T.form, {
    layout: !0,
    "aria-busy": e,
    ref: c,
    className: x("relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border hover:cursor-text", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']", "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "after:transition-all after:delay-200 after:duration-300 has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-['']"),
    animate: {
      "--gradient-angle": ["0deg", "360deg"]
    },
    transition: {
      default: {
        duration: 6,
        ease: "linear",
        repeat: 1 / 0
      },
      layout: {
        duration: 0.3
      }
    },
    style: {
      "--gradient-angle": "180deg"
    },
    onClick: () => {
      var u;
      (u = l.current) == null || u.focus();
    },
    onSubmit: m,
    children: [v("div", {
      className: "grid grid-cols-1 grid-rows-1",
      children: [n("div", {
        "aria-hidden": !0,
        className: "pointer-events-none invisible col-start-1 row-start-1 mx-3 mb-0 mt-3 max-h-36 whitespace-pre-wrap",
        children: r.endsWith(`
`) ? r + "_" : r
      }), n(q, {
        children: i && n(T.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 0.5
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.2,
            ease: "easeOut"
          },
          className: x("pointer-events-none absolute inset-x-0 z-10 h-3 rounded-t-xl after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']", "-top-px bg-gradient-to-b from-f1-background-selected to-transparent after:-top-px")
        })
      }), n("textarea", {
        autoFocus: !0,
        name: "one-ai-input",
        ref: l,
        value: r,
        onChange: (u) => {
          o(u.target.value);
        },
        onKeyDown: p,
        placeholder: f.ai.inputPlaceholder,
        className: x("col-start-1 row-start-1", "mx-3 mb-0 max-h-36 flex-1 resize-none overflow-y-scroll outline-none transition-all", "bg-f1-background text-f1-foreground placeholder:text-f1-foreground-secondary", !i && "mt-3")
      })]
    }), n("div", {
      className: "flex flex-row-reverse p-3 pt-0",
      children: e ? n($, {
        type: "submit",
        variant: "neutral",
        label: f.ai.stopAnswerGeneration,
        icon: Un,
        hideLabel: !0
      }) : n($, {
        type: "submit",
        disabled: !d,
        variant: d ? "default" : "neutral",
        label: f.ai.sendMessage,
        icon: In,
        hideLabel: !0
      })
    })]
  });
}, ia = ({
  autoClearMinutes: e,
  reset: t,
  isOpen: a
}) => {
  const r = F(null);
  H(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
      t();
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [t, a, e]);
}, sa = ({ children: e }) => {
  const { open: t, shouldPlayEntranceAnimation: a, setShouldPlayEntranceAnimation: r, autoClearMinutes: o } = j(), { reset: i } = ue();
  return ia({
    reset: i,
    isOpen: t,
    autoClearMinutes: o
  }), n(q, {
    children: t && n(T.div, {
      "aria-hidden": !t,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: a ? {
        opacity: 0,
        width: 0
      } : !1,
      animate: {
        opacity: 1,
        width: 360
      },
      exit: {
        opacity: 0,
        width: 0
      },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        a && r(!1);
      },
      children: n(T.div, {
        className: "relative flex h-full w-[360px] flex-col overflow-x-hidden",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: a ? 0.3 : 0.05,
          ease: "easeOut",
          delay: a ? 0.2 : 0
        },
        children: e
      })
    }, "chat-window")
  });
};
function la(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
const ca = ({ onClose: e, onSubmit: t, reactionType: a, message: r }) => {
  const [o, i] = S(""), s = J(), c = Qe(), { title: l, label: f, placeholder: d } = a === "like" ? s.ai.feedbackModal.positive : s.ai.feedbackModal.negative, m = Z(() => {
    t(r, o);
  }, [o, r, t]), p = () => {
    e(r);
  };
  return H(() => {
    const u = (h) => {
      h.key === "Enter" && (h.preventDefault(), m());
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [m]), v(U, {
    position: "center",
    isOpen: !0,
    onClose: p,
    contentPadding: "sm",
    children: [n(U.Header, {
      title: l
    }), n(U.Content, {
      children: n("div", {
        className: "flex flex-col gap-6 p-4",
        children: n(ar, {
          autoFocus: !0,
          label: f,
          placeholder: d,
          value: o,
          onChange: (u) => i(u.trim()),
          size: "md",
          type: "text"
        })
      })
    }), n(U.Footer, {
      children: v("div", {
        className: "flex flex-1 flex-row-reverse gap-3",
        children: [n($, {
          onClick: m,
          label: c.actions.send
        }), n($, {
          onClick: p,
          label: c.actions.cancel,
          variant: "outline"
        })]
      })
    })]
  });
};
var _e = "Collapsible", [da, Ba] = et(_e), [ua, Fe] = da(_e), Ht = g.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: a,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...c
    } = e, [l = !1, f] = xe({
      prop: r,
      defaultProp: o,
      onChange: s
    });
    return /* @__PURE__ */ n(
      ua,
      {
        scope: a,
        disabled: i,
        contentId: Ne(),
        open: l,
        onOpenToggle: g.useCallback(() => f((d) => !d), [f]),
        children: /* @__PURE__ */ n(
          A.div,
          {
            "data-state": Ve(l),
            "data-disabled": i ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Ht.displayName = _e;
var Kt = "CollapsibleTrigger", zt = g.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: a, ...r } = e, o = Fe(Kt, a);
    return /* @__PURE__ */ n(
      A.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ve(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: P(e.onClick, o.onOpenToggle)
      }
    );
  }
);
zt.displayName = Kt;
var De = "CollapsibleContent", Ut = g.forwardRef(
  (e, t) => {
    const { forceMount: a, ...r } = e, o = Fe(De, e.__scopeCollapsible);
    return /* @__PURE__ */ n(oe, { present: a || o.open, children: ({ present: i }) => /* @__PURE__ */ n(fa, { ...r, ref: t, present: i }) });
  }
);
Ut.displayName = De;
var fa = g.forwardRef((e, t) => {
  const { __scopeCollapsible: a, present: r, children: o, ...i } = e, s = Fe(De, a), [c, l] = g.useState(r), f = g.useRef(null), d = X(t, f), m = g.useRef(0), p = m.current, u = g.useRef(0), h = u.current, b = s.open || c, N = g.useRef(b), k = g.useRef(void 0);
  return g.useEffect(() => {
    const E = requestAnimationFrame(() => N.current = !1);
    return () => cancelAnimationFrame(E);
  }, []), le(() => {
    const E = f.current;
    if (E) {
      k.current = k.current || {
        transitionDuration: E.style.transitionDuration,
        animationName: E.style.animationName
      }, E.style.transitionDuration = "0s", E.style.animationName = "none";
      const w = E.getBoundingClientRect();
      m.current = w.height, u.current = w.width, N.current || (E.style.transitionDuration = k.current.transitionDuration, E.style.animationName = k.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ n(
    A.div,
    {
      "data-state": Ve(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !b,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: b && o
    }
  );
});
function Ve(e) {
  return e ? "open" : "closed";
}
var ma = Ht;
const ga = ma, ha = zt, pa = Ut, va = ({ messages: e }) => {
  const [t, a] = S(!1), r = Ln(), o = J();
  return n("div", {
    className: "mb-1",
    children: v(ga, {
      className: "w-full",
      open: t,
      onOpenChange: a,
      children: [v(ha, {
        className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90",
        children: [n("span", {
          className: "mr-2 *:block",
          children: n(Ue, {
            icon: Kn,
            className: "block"
          })
        }), n("span", {
          className: "mr-[2px]",
          children: o.ai.thoughtsGroupTitle
        }), n(Ue, {
          icon: at,
          className: "h-4 w-4 transition-transform duration-200"
        })]
      }), n(pa, {
        forceMount: !0,
        className: "ml-7 data-[state=open]:mt-3",
        children: n(T.div, {
          initial: !1,
          animate: {
            height: t ? "auto" : 0,
            opacity: t ? 1 : 0,
            visibility: t ? "visible" : "hidden"
          },
          transition: {
            duration: r ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1]
          },
          className: "flex flex-col gap-2",
          children: e.map((i, s) => {
            var c;
            return n("div", {
              children: i.role === "assistant" && ((c = i.generativeUI) == null ? void 0 : c.call(i, {
                status: "complete",
                result: {
                  inGroup: !0
                }
              }))
            }, s);
          })
        })
      })]
    })
  });
}, ba = 3;
function Ca(e, t = ba) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
const wa = ({ greeting: e, initialMessages: t = [], suggestions: a = [] }) => {
  const { sendMessage: r } = ue(), o = Ca(a);
  return n(q, {
    mode: "popLayout",
    children: v(T.div, {
      className: "flex flex-1 flex-col justify-end gap-4",
      initial: {
        opacity: 1
      },
      children: [v("div", {
        className: "px-2",
        children: [n(T.div, {
          className: "flex w-fit justify-center",
          initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(6px)"
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.4
            },
            scale: {
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 1.94]
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.4
            }
          },
          children: n(Gr, {
            spin: !0,
            size: "lg",
            className: "my-4"
          })
        }), e && n(T.p, {
          className: "text-lg font-semibold text-f1-foreground-secondary",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.5
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.5
            },
            translateY: {
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.5
            }
          },
          children: e
        }), t.map((i) => n(T.p, {
          className: "text-lg font-semibold text-f1-foreground",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7
            },
            translateY: {
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.7
            }
          },
          children: i.content
        }, i.id))]
      }), n("div", {
        className: "-ml-2 flex flex-col items-start gap-[6px]",
        children: o.map((i, s) => n(T.div, {
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.1,
              ease: "easeOut",
              delay: 0.9 + s * 0.1
            },
            filter: {
              duration: 0.1,
              ease: "easeOut",
              delay: 0.9 + s * 0.1
            },
            translateY: {
              duration: 0.1,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.9 + s * 0.1
            }
          },
          children: n($, {
            className: "font-medium",
            variant: "ghost",
            label: i.message,
            icon: i.icon,
            onClick: () => r({
              id: Fn(),
              role: "user",
              content: i.message
            })
          })
        }, s))
      })]
    }, "welcome")
  });
}, jt = (e) => n(ra, {
  children: n(ya, {
    ...e
  })
}), ya = ({ inProgress: e, children: t, RenderMessage: a, AssistantMessage: r, UserMessage: o, ImageRenderer: i, onRegenerate: s, onCopy: c, markdownTagRenderers: l }) => {
  const f = F(null), { messages: d, interrupt: m } = ue(), { threadId: p } = Yt(), { close: u, currentReaction: h, currentMessage: b, isOpen: N } = Vt(), k = J(), { greeting: E, initialMessage: w, welcomeScreenSuggestions: y, onThumbsUp: C, onThumbsDown: R } = j(), L = ce(() => xa(w || k.ai.defaultInitialMessage), [w, k.ai.defaultInitialMessage]), _ = d.length == 0 && (E || L.length > 0), { messagesContainerRef: M, messagesEndRef: O, showScrollToBottom: ee, scrollToBottom: ge } = Na(), { height: Zt = 0 } = Pn({
    ref: M,
    box: "border-box"
  }), he = ce(() => ka(d), [d]);
  return v(K, {
    children: [v(T.div, {
      layout: !0,
      className: x("scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3", "overflow-y-scroll"),
      ref: M,
      children: [v(T.div, {
        layout: "position",
        ref: f,
        className: _ ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [_ && n(wa, {
          greeting: E,
          initialMessages: L,
          suggestions: y
        }), he.map((G, V) => {
          const te = V === he.length - 1;
          return n("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: te ? Zt * 0.8 : void 0
            },
            children: G.map((W, ie) => {
              const Be = V === he.length - 1 && ie === G.length - 1;
              return Array.isArray(W) && !Be ? n(va, {
                messages: W,
                isActive: !1,
                inProgress: e,
                RenderMessage: a,
                AssistantMessage: r
              }, `${V}-${ie}`) : n(a, {
                message: Array.isArray(W) ? W[W.length - 1] : W,
                inProgress: e,
                index: ie,
                isCurrentMessage: Be,
                AssistantMessage: r,
                UserMessage: o,
                ImageRenderer: i,
                onRegenerate: s,
                onCopy: c,
                markdownTagRenderers: l
              }, `${V}-${ie}`);
            })
          }, `turn-${V}`);
        }), m]
      }), n("footer", {
        className: "copilotKitMessagesFooter",
        ref: O,
        children: t
      }), n(q, {
        children: ee && n(T.div, {
          className: "sticky bottom-2 z-10 flex justify-center",
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.2
          },
          children: n("div", {
            className: "rounded bg-f1-background",
            children: n($, {
              onClick: () => ge(),
              label: k.ai.scrollToBottom,
              variant: "neutral",
              icon: On,
              hideLabel: !0
            })
          })
        })
      })]
    }), N && n(ca, {
      onSubmit: (G, V) => {
        const te = h === "like" ? C : R;
        te == null || te(G, {
          threadId: p,
          feedback: V
        }), u();
      },
      onClose: (G) => {
        const V = h === "like" ? C : R;
        V == null || V(G, {
          threadId: p,
          feedback: ""
        }), u();
      },
      reactionType: h,
      message: b
    })]
  });
};
function xa(e) {
  const t = [];
  return e && (Array.isArray(e) ? t.push(...e) : t.push(e)), t.map((a) => ({
    id: a,
    role: "assistant",
    content: a
  }));
}
function Na() {
  const e = F(null), t = F(null), a = F(!1), r = F(!1), [o, i] = S(!1), s = (d = "smooth") => {
    t.current && e.current && (i(!1), a.current = !0, e.current.scrollIntoView({
      behavior: d
    }));
  }, c = () => {
    if (t.current) {
      const { scrollTop: d, scrollHeight: m, clientHeight: p } = t.current, u = 20;
      r.current = d + p + u < m;
    } else
      r.current = !1;
  }, l = () => {
    if (!t.current) {
      i(!1);
      return;
    }
    const { scrollTop: d, scrollHeight: m, clientHeight: p } = t.current, u = d < m - 3 * p;
    i(u);
  }, f = Z(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    c(), l();
  }, []);
  return An("scroll", f, t), H(() => {
    const d = t.current;
    if (!d)
      return;
    s("instant");
    const m = new MutationObserver(() => {
      l();
    });
    return m.observe(d, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      m.disconnect();
    };
  }, []), {
    messagesEndRef: e,
    messagesContainerRef: t,
    showScrollToBottom: o,
    scrollToBottom: s
  };
}
function ka(e) {
  if (e.length === 0)
    return [];
  console.assert(e[0].role === "user", "Invariant violation! Assistant message received before user message");
  const t = [];
  for (const [a, r] of e.entries()) {
    if (r.role === "user") {
      t.push([r]);
      continue;
    }
    const o = t[t.length - 1];
    if (la(r) && Xe(o)) {
      if (a !== e.length - 1) {
        const i = o.pop();
        o.push(r, i);
      }
      continue;
    }
    if (Ma(r)) {
      Xe(o) ? o.at(-1).push(r) : o.push([r]);
      continue;
    }
    o.push(r);
  }
  return t;
}
function Ma(e) {
  var t;
  return e.role === "assistant" && ((t = e.toolCalls) == null ? void 0 : t.some((a) => a.function.name === "orchestratorThinking")) === !0;
}
function Xe(e) {
  const t = e.at(-1);
  return Array.isArray(t);
}
const Gt = ({ suggestions: e, onSuggestionClick: t }) => n("div", {
  children: e.map((a, r) => n($, {
    variant: "ghost",
    className: "font-medium",
    onClick: () => t(a.message),
    label: a.message
  }, r))
}), Wt = ({ message: e, ImageRenderer: t }) => {
  const a = e && "image" in e && e.image, r = F(null);
  if (H(() => {
    r.current && r.current.scrollIntoView({
      behavior: "smooth"
    });
  }, []), a) {
    const o = e;
    return n("div", {
      className: "copilotKitMessage copilotKitUserMessage",
      children: n(t, {
        image: o.image,
        content: o.content
      })
    });
  }
  return n("div", {
    ref: r,
    className: "my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
    children: e == null ? void 0 : e.content
  });
}, Ea = ({ enabled: e = !1, greeting: t, initialMessage: a, welcomeScreenSuggestions: r, onThumbsUp: o, onThumbsDown: i, children: s, agent: c, ...l }) => n(Zr, {
  enabled: e,
  greeting: t,
  initialMessage: a,
  onThumbsUp: o,
  onThumbsDown: i,
  agent: c,
  welcomeScreenSuggestions: r,
  children: n(Ra, {
    ...l,
    children: s
  })
}), Ra = ({ children: e, ...t }) => {
  const { agent: a } = j();
  return v(qt, {
    runtimeUrl: "/copilotkit",
    agent: a,
    ...t,
    children: [n(Ta, {}), e]
  });
}, Ta = () => {
  const { setClearFunction: e } = j(), { reset: t } = ue();
  return H(() => (e(t), () => {
    e(null);
  }), [e, t]), null;
}, Sa = () => {
  const { enabled: e, open: t, setOpen: a } = j();
  return Je({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (r) => {
      var o;
      return n("div", {
        className: r.status ? "-ml-1" : void 0,
        children: n(Ft, {
          title: r.args.message ?? "thinking",
          status: r.status === "complete" ? "completed" : r.status,
          inGroup: (o = r.result) == null ? void 0 : o.inGroup
        })
      });
    }
  }), e ? n(Qt, {
    className: x("h-full", t && "py-1 xs:pr-1"),
    defaultOpen: t,
    onSetOpen: (r) => {
      a(r);
    },
    Window: sa,
    Header: oa,
    Messages: jt,
    Button: aa,
    Input: $t,
    UserMessage: Wt,
    AssistantMessage: Bt,
    RenderSuggestionsList: Gt
  }) : null;
}, Ia = () => {
  const { enabled: e } = j();
  return Je({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (t) => {
      var a;
      return n("div", {
        className: t.status ? "-ml-1" : void 0,
        children: n(Ft, {
          title: t.args.message ?? "thinking",
          status: t.status === "complete" ? "completed" : t.status,
          inGroup: (a = t.result) == null ? void 0 : a.inGroup
        })
      });
    }
  }), e ? n(en, {
    className: "relative flex h-full w-full flex-col",
    Messages: jt,
    Input: $t,
    UserMessage: Wt,
    AssistantMessage: Bt,
    RenderSuggestionsList: Gt
  }) : null;
}, $a = Ee("AiChat", Sa), Ha = Ee("AiChat", Ia), Ka = Ee("AiChatProvider", Ea);
export {
  Ka as A,
  st as B,
  ga as C,
  $n as F,
  ar as I,
  it as L,
  Dr as T,
  Et as a,
  St as b,
  Kr as c,
  Pt as d,
  Mt as e,
  Gr as f,
  $a as g,
  pa as h,
  Un as i,
  U as j,
  zr as k,
  Fr as l,
  Vr as m,
  Ft as n,
  Ha as o,
  j as u
};
