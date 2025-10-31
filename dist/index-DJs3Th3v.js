import { jsxs as v, jsx as n, Fragment as G } from "react/jsx-runtime";
import { useCopilotChatInternal as le, useCopilotContext as et, useCopilotAction as tt, CopilotKit as nn } from "@copilotkit/react-core";
import { Markdown as rn, useChatContext as on, CopilotSidebar as an, CopilotChat as sn } from "@copilotkit/react-ui";
import { ag as ln, ah as cn, cy as Ke, I as dn, u as nt, b2 as un, at as X, an as T, s as ie, cz as fn, av as mn, bb as hn, b as x, cl as gn, cn as pn, co as vn, D as bn, v as Cn, cA as ne, aX as yn, aW as Ne, P as V, a as rt, cB as ot, cC as Y, cD as ke, cE as wn, ck as F, cF as ze, cG as xn, cH as ce, cI as me, cJ as Nn, cK as kn, ay as at, q as Me, aw as it, ba as Mn, b1 as Ee, z as En, S as Rn, l as Tn, aZ as Sn, b5 as st, aG as In, aM as Ln, F as An, B, x as ve, w as je, cL as Ue, b9 as On, bO as Pn, y as be, V as _n, bc as J, as as Fn, a9 as Dn, cM as Ge, b7 as Vn, bx as lt, cN as Bn, m as Re } from "./dialog-D3AmLiwa.js";
import * as g from "react";
import { forwardRef as A, createContext as ge, useRef as D, useState as I, useCallback as Q, useContext as se, useMemo as ee, useEffect as K, useId as pe } from "react";
import $n from "react-dom";
import { randomId as Hn } from "@copilotkit/shared";
const Kn = (e, t) => v("svg", {
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
}), zn = A(Kn), jn = (e, t) => v("svg", {
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
}), Un = A(jn), Gn = (e, t) => v("svg", {
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
}), Wn = A(Gn), Zn = (e, t) => n("svg", {
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
}), Yn = A(Zn), qn = (e, t) => v("svg", {
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
}), Xn = A(qn), Jn = (e, t) => v("svg", {
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
}), Qn = A(Jn), er = (e, t) => v("svg", {
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
}), tr = A(er), nr = (e, t) => v("svg", {
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
}), rr = A(nr), or = ge(null);
function ar() {
  const e = D(!1);
  return ln(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ir() {
  const e = ar(), [t, o] = I(0), r = Q(() => {
    e.current && o(t + 1);
  }, [t]);
  return [Q(() => cn.postRender(r), [r]), t];
}
const sr = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function We() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), o = () => e.forEach(sr);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", o));
    },
    remove: (r) => {
      e.delete(r);
      const a = t.get(r);
      a && (a(), t.delete(r)), o();
    },
    dirty: o
  };
}
const ct = (e) => e === !0, lr = (e) => ct(e === !0) || e === "id", dt = ({ children: e, id: t, inherit: o = !0 }) => {
  const r = se(Ke), a = se(or), [i, s] = ir(), d = D(null), l = r.id || a;
  d.current === null && (lr(o) && l && (t = t ? l + "-" + t : l), d.current = {
    id: t,
    group: ct(o) && r.group || We()
  });
  const f = ee(() => ({ ...d.current, forceRender: i }), [s]);
  return n(Ke.Provider, { value: f, children: e });
}, cr = (e) => n(dn, {
  ...e,
  onChange: (t) => {
    var o;
    return (o = e.onChange) == null ? void 0 : o.call(e, t);
  },
  onKeyDown: (t) => {
    var o;
    t.key === "Enter" && ((o = e.onPressEnter) == null || o.call(e));
  }
}), dr = {
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
}, ur = {
  duration: 0.15,
  ease: "easeOut"
}, ut = A(({ valueToCopy: e, onCopy: t, copyTooltipLabel: o, copiedTooltipLabel: r, variant: a = "neutral", size: i = "sm", ...s }, d) => {
  const [l, f] = I(!1), c = nt(), m = o ?? c.actions.copy, u = l ? r ?? "Copied" : m;
  return K(() => {
    let b = null;
    return l && (b = setTimeout(() => f(!1), 1e3)), () => {
      b && clearTimeout(b);
    };
  }, [l]), n(un, {
    ref: d,
    variant: a,
    size: i,
    onClick: (b) => {
      b.stopPropagation(), window.navigator.clipboard.writeText(e), f(!0), t == null || t(b);
    },
    "aria-live": "polite",
    "aria-label": u,
    title: u,
    ...s,
    compact: !0,
    children: n(X, {
      mode: "wait",
      initial: !1,
      children: n(T.span, {
        variants: dr,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: ur,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle"
        },
        children: n(ie, {
          size: i === "sm" ? "sm" : "md",
          icon: l ? mn : Un,
          className: fn({
            variant: a
          })
        })
      }, l ? "check" : "copy")
    })
  });
});
ut.displayName = "ButtonCopy";
const ft = ge({
  open: !1,
  onClose: () => {
  },
  position: "center",
  contentPadding: "md",
  shownBottomSheet: !1
}), Ze = ({ isOpen: e, onClose: t, shownBottomSheet: o = !1, contentPadding: r, position: a, children: i }) => n(ft.Provider, {
  value: {
    open: e,
    onClose: t,
    position: a,
    shownBottomSheet: o,
    contentPadding: r
  },
  children: i
}), Te = () => se(ft), mt = () => hn("(max-width: 560px)", {
  initializeWithValue: !1
}), fr = ({ asBottomSheetInMobile: e = !0, position: t = "center", onClose: o, isOpen: r, contentPadding: a = "md", children: i }) => {
  const [s, d] = I(r);
  K(() => {
    d(r);
  }, [r]);
  const l = (u) => {
    d(u), u || o();
  }, f = () => {
    d(!1), o();
  }, c = mt(), m = t === "left" || t === "right", p = ee(() => c && e ? "max-h-[95vh] bg-f1-background" : m ? x("w-full overflow-x-hidden flex flex-col absolute top-3 bottom-3 translate-y-0 translate-x-0 max-w-[539px] rounded-md border border-solid border-f1-border-secondary", t === "left" && "left-3", t === "right" && "left-auto right-3") : t === "fullscreen" ? "w-[calc(100%-48px)] h-[calc(100%-48px)] overflow-x-hidden" : "flex flex-col max-h-[620px] max-w-[680px] overflow-hidden", [t, c, e, m]);
  return c && e ? n(Ze, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: a,
    shownBottomSheet: !0,
    children: v(gn, {
      open: s,
      onOpenChange: l,
      children: [n(pn, {
        className: "bg-f1-background-overlay"
      }), n(vn, {
        className: p,
        children: i
      })]
    })
  }) : n(Ze, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: a,
    children: n(bn, {
      open: s,
      onOpenChange: o,
      modal: t === "center" || t === "fullscreen",
      children: n(Cn, {
        withTraslateAnimation: !m,
        className: p,
        children: i
      })
    })
  });
};
var re = "NavigationMenu", [Se, ht, mr] = ot(re), [Ce, hr, gr] = ot(re), [Ie, Ko] = rt(
  re,
  [mr, gr]
), [pr, $] = Ie(re), [vr, br] = Ie(re), gt = g.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: o,
      value: r,
      onValueChange: a,
      defaultValue: i,
      delayDuration: s = 200,
      skipDelayDuration: d = 300,
      orientation: l = "horizontal",
      dir: f,
      ...c
    } = e, [m, p] = g.useState(null), u = ne(t, (E) => p(E)), h = yn(f), b = g.useRef(0), k = g.useRef(0), N = g.useRef(0), [M, y] = g.useState(!0), [w = "", C] = Ne({
      prop: r,
      onChange: (E) => {
        const P = E !== "", Z = d > 0;
        P ? (window.clearTimeout(N.current), Z && y(!1)) : (window.clearTimeout(N.current), N.current = window.setTimeout(
          () => y(!0),
          d
        )), a == null || a(E);
      },
      defaultProp: i
    }), R = g.useCallback(() => {
      window.clearTimeout(k.current), k.current = window.setTimeout(() => C(""), 150);
    }, [C]), L = g.useCallback(
      (E) => {
        window.clearTimeout(k.current), C(E);
      },
      [C]
    ), O = g.useCallback(
      (E) => {
        w === E ? window.clearTimeout(k.current) : b.current = window.setTimeout(() => {
          window.clearTimeout(k.current), C(E);
        }, s);
      },
      [w, C, s]
    );
    return g.useEffect(() => () => {
      window.clearTimeout(b.current), window.clearTimeout(k.current), window.clearTimeout(N.current);
    }, []), /* @__PURE__ */ n(
      vt,
      {
        scope: o,
        isRootMenu: !0,
        value: w,
        dir: h,
        orientation: l,
        rootNavigationMenu: m,
        onTriggerEnter: (E) => {
          window.clearTimeout(b.current), M ? O(E) : L(E);
        },
        onTriggerLeave: () => {
          window.clearTimeout(b.current), R();
        },
        onContentEnter: () => window.clearTimeout(k.current),
        onContentLeave: R,
        onItemSelect: (E) => {
          C((P) => P === E ? "" : E);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ n(
          V.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: h,
            ...c,
            ref: u
          }
        )
      }
    );
  }
);
gt.displayName = re;
var pt = "NavigationMenuSub", Cr = g.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: o,
      value: r,
      onValueChange: a,
      defaultValue: i,
      orientation: s = "horizontal",
      ...d
    } = e, l = $(pt, o), [f = "", c] = Ne({
      prop: r,
      onChange: a,
      defaultProp: i
    });
    return /* @__PURE__ */ n(
      vt,
      {
        scope: o,
        isRootMenu: !1,
        value: f,
        dir: l.dir,
        orientation: s,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (m) => c(m),
        onItemSelect: (m) => c(m),
        onItemDismiss: () => c(""),
        children: /* @__PURE__ */ n(V.div, { "data-orientation": s, ...d, ref: t })
      }
    );
  }
);
Cr.displayName = pt;
var vt = (e) => {
  const {
    scope: t,
    isRootMenu: o,
    rootNavigationMenu: r,
    dir: a,
    orientation: i,
    children: s,
    value: d,
    onItemSelect: l,
    onItemDismiss: f,
    onTriggerEnter: c,
    onTriggerLeave: m,
    onContentEnter: p,
    onContentLeave: u
  } = e, [h, b] = g.useState(null), [k, N] = g.useState(/* @__PURE__ */ new Map()), [M, y] = g.useState(null);
  return /* @__PURE__ */ n(
    pr,
    {
      scope: t,
      isRootMenu: o,
      rootNavigationMenu: r,
      value: d,
      previousValue: wn(d),
      baseId: ke(),
      dir: a,
      orientation: i,
      viewport: h,
      onViewportChange: b,
      indicatorTrack: M,
      onIndicatorTrackChange: y,
      onTriggerEnter: Y(c),
      onTriggerLeave: Y(m),
      onContentEnter: Y(p),
      onContentLeave: Y(u),
      onItemSelect: Y(l),
      onItemDismiss: Y(f),
      onViewportContentChange: g.useCallback((w, C) => {
        N((R) => (R.set(w, C), new Map(R)));
      }, []),
      onViewportContentRemove: g.useCallback((w) => {
        N((C) => C.has(w) ? (C.delete(w), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ n(Se.Provider, { scope: t, children: /* @__PURE__ */ n(vr, { scope: t, items: k, children: s }) })
    }
  );
}, bt = "NavigationMenuList", Ct = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = $(bt, o), i = /* @__PURE__ */ n(V.ul, { "data-orientation": a.orientation, ...r, ref: t });
    return /* @__PURE__ */ n(V.div, { style: { position: "relative" }, ref: a.onIndicatorTrackChange, children: /* @__PURE__ */ n(Se.Slot, { scope: o, children: a.isRootMenu ? /* @__PURE__ */ n(Mt, { asChild: !0, children: i }) : i }) });
  }
);
Ct.displayName = bt;
var yt = "NavigationMenuItem", [yr, wt] = Ie(yt), xt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, value: r, ...a } = e, i = ke(), s = r || i || "LEGACY_REACT_AUTO_VALUE", d = g.useRef(null), l = g.useRef(null), f = g.useRef(null), c = g.useRef(() => {
    }), m = g.useRef(!1), p = g.useCallback((h = "start") => {
      if (d.current) {
        c.current();
        const b = we(d.current);
        b.length && Oe(h === "start" ? b : b.reverse());
      }
    }, []), u = g.useCallback(() => {
      if (d.current) {
        const h = we(d.current);
        h.length && (c.current = Lr(h));
      }
    }, []);
    return /* @__PURE__ */ n(
      yr,
      {
        scope: o,
        value: s,
        triggerRef: l,
        contentRef: d,
        focusProxyRef: f,
        wasEscapeCloseRef: m,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: u,
        onContentFocusOutside: u,
        children: /* @__PURE__ */ n(V.li, { ...a, ref: t })
      }
    );
  }
);
xt.displayName = yt;
var ye = "NavigationMenuTrigger", wr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, disabled: r, ...a } = e, i = $(ye, e.__scopeNavigationMenu), s = wt(ye, e.__scopeNavigationMenu), d = g.useRef(null), l = ne(d, s.triggerRef, t), f = Rt(i.baseId, s.value), c = Tt(i.baseId, s.value), m = g.useRef(!1), p = g.useRef(!1), u = s.value === i.value;
  return /* @__PURE__ */ v(G, { children: [
    /* @__PURE__ */ n(Se.ItemSlot, { scope: o, value: s.value, children: /* @__PURE__ */ n(Et, { asChild: !0, children: /* @__PURE__ */ n(
      V.button,
      {
        id: f,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Pe(u),
        "aria-expanded": u,
        "aria-controls": c,
        ...a,
        ref: l,
        onPointerEnter: F(e.onPointerEnter, () => {
          p.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: F(
          e.onPointerMove,
          he(() => {
            r || p.current || s.wasEscapeCloseRef.current || m.current || (i.onTriggerEnter(s.value), m.current = !0);
          })
        ),
        onPointerLeave: F(
          e.onPointerLeave,
          he(() => {
            r || (i.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: F(e.onClick, () => {
          i.onItemSelect(s.value), p.current = u;
        }),
        onKeyDown: F(e.onKeyDown, (h) => {
          const k = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          u && h.key === k && (s.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    u && /* @__PURE__ */ v(G, { children: [
      /* @__PURE__ */ n(
        xn,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (h) => {
            const b = s.contentRef.current, k = h.relatedTarget, N = k === d.current, M = b == null ? void 0 : b.contains(k);
            (N || !M) && s.onFocusProxyEnter(N ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ n("span", { "aria-owns": c })
    ] })
  ] });
});
wr.displayName = ye;
var xr = "NavigationMenuLink", Ye = "navigationMenu.linkSelect", Nt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, active: r, onSelect: a, ...i } = e;
    return /* @__PURE__ */ n(Et, { asChild: !0, children: /* @__PURE__ */ n(
      V.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: F(
          e.onClick,
          (s) => {
            const d = s.target, l = new CustomEvent(Ye, {
              bubbles: !0,
              cancelable: !0
            });
            if (d.addEventListener(Ye, (f) => a == null ? void 0 : a(f), { once: !0 }), ze(d, l), !l.defaultPrevented && !s.metaKey) {
              const f = new CustomEvent(fe, {
                bubbles: !0,
                cancelable: !0
              });
              ze(d, f);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nt.displayName = xr;
var Le = "NavigationMenuIndicator", Nr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, a = $(Le, e.__scopeNavigationMenu), i = !!a.value;
  return a.indicatorTrack ? $n.createPortal(
    /* @__PURE__ */ n(ce, { present: o || i, children: /* @__PURE__ */ n(kr, { ...r, ref: t }) }),
    a.indicatorTrack
  ) : null;
});
Nr.displayName = Le;
var kr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, ...r } = e, a = $(Le, o), i = ht(o), [s, d] = g.useState(
    null
  ), [l, f] = g.useState(null), c = a.orientation === "horizontal", m = !!a.value;
  g.useEffect(() => {
    var b;
    const h = (b = i().find((k) => k.value === a.value)) == null ? void 0 : b.ref.current;
    h && d(h);
  }, [i, a.value]);
  const p = () => {
    s && f({
      size: c ? s.offsetWidth : s.offsetHeight,
      offset: c ? s.offsetLeft : s.offsetTop
    });
  };
  return xe(s, p), xe(a.indicatorTrack, p), l ? /* @__PURE__ */ n(
    V.div,
    {
      "aria-hidden": !0,
      "data-state": m ? "visible" : "hidden",
      "data-orientation": a.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...c ? {
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
}), te = "NavigationMenuContent", Mr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, a = $(te, e.__scopeNavigationMenu), i = wt(te, e.__scopeNavigationMenu), s = ne(i.contentRef, t), d = i.value === a.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return a.viewport ? /* @__PURE__ */ n(Er, { forceMount: o, ...l, ref: s }) : /* @__PURE__ */ n(ce, { present: o || d, children: /* @__PURE__ */ n(
    kt,
    {
      "data-state": Pe(d),
      ...l,
      ref: s,
      onPointerEnter: F(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: F(
        e.onPointerLeave,
        he(a.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !d && a.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
Mr.displayName = te;
var Er = g.forwardRef((e, t) => {
  const o = $(te, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: a } = o;
  return me(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), me(() => () => a(e.value), [e.value, a]), null;
}), fe = "navigationMenu.rootContentDismiss", kt = g.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: o,
    value: r,
    triggerRef: a,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: d,
    onContentFocusOutside: l,
    ...f
  } = e, c = $(te, o), m = g.useRef(null), p = ne(m, t), u = Rt(c.baseId, r), h = Tt(c.baseId, r), b = ht(o), k = g.useRef(null), { onItemDismiss: N } = c;
  g.useEffect(() => {
    const y = m.current;
    if (c.isRootMenu && y) {
      const w = () => {
        var C;
        N(), d(), y.contains(document.activeElement) && ((C = a.current) == null || C.focus());
      };
      return y.addEventListener(fe, w), () => y.removeEventListener(fe, w);
    }
  }, [c.isRootMenu, e.value, a, N, d]);
  const M = g.useMemo(() => {
    const w = b().map((P) => P.value);
    c.dir === "rtl" && w.reverse();
    const C = w.indexOf(c.value), R = w.indexOf(c.previousValue), L = r === c.value, O = R === w.indexOf(r);
    if (!L && !O) return k.current;
    const E = (() => {
      if (C !== R) {
        if (L && R !== -1) return C > R ? "from-end" : "from-start";
        if (O && C !== -1) return C > R ? "to-start" : "to-end";
      }
      return null;
    })();
    return k.current = E, E;
  }, [c.previousValue, c.value, c.dir, b, r]);
  return /* @__PURE__ */ n(Mt, { asChild: !0, children: /* @__PURE__ */ n(
    Nn,
    {
      id: h,
      "aria-labelledby": u,
      "data-motion": M,
      "data-orientation": c.orientation,
      ...f,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var w;
        const y = new Event(fe, {
          bubbles: !0,
          cancelable: !0
        });
        (w = m.current) == null || w.dispatchEvent(y);
      },
      onFocusOutside: F(e.onFocusOutside, (y) => {
        var C;
        l();
        const w = y.target;
        (C = c.rootNavigationMenu) != null && C.contains(w) && y.preventDefault();
      }),
      onPointerDownOutside: F(e.onPointerDownOutside, (y) => {
        var L;
        const w = y.target, C = b().some((O) => {
          var E;
          return (E = O.ref.current) == null ? void 0 : E.contains(w);
        }), R = c.isRootMenu && ((L = c.viewport) == null ? void 0 : L.contains(w));
        (C || R || !c.isRootMenu) && y.preventDefault();
      }),
      onKeyDown: F(e.onKeyDown, (y) => {
        var R;
        const w = y.altKey || y.ctrlKey || y.metaKey;
        if (y.key === "Tab" && !w) {
          const L = we(y.currentTarget), O = document.activeElement, E = L.findIndex((oe) => oe === O), Z = y.shiftKey ? L.slice(0, E).reverse() : L.slice(E + 1, L.length);
          Oe(Z) ? y.preventDefault() : (R = i.current) == null || R.focus();
        }
      }),
      onEscapeKeyDown: F(e.onEscapeKeyDown, (y) => {
        s.current = !0;
      })
    }
  ) });
}), Ae = "NavigationMenuViewport", Rr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, i = !!$(Ae, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ n(ce, { present: o || i, children: /* @__PURE__ */ n(Tr, { ...r, ref: t }) });
});
Rr.displayName = Ae;
var Tr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, children: r, ...a } = e, i = $(Ae, o), s = ne(t, i.onViewportChange), d = br(
    te,
    e.__scopeNavigationMenu
  ), [l, f] = g.useState(null), [c, m] = g.useState(null), p = l ? (l == null ? void 0 : l.width) + "px" : void 0, u = l ? (l == null ? void 0 : l.height) + "px" : void 0, h = !!i.value, b = h ? i.value : i.previousValue;
  return xe(c, () => {
    c && f({ width: c.offsetWidth, height: c.offsetHeight });
  }), /* @__PURE__ */ n(
    V.div,
    {
      "data-state": Pe(h),
      "data-orientation": i.orientation,
      ...a,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": u,
        ...a.style
      },
      onPointerEnter: F(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: F(e.onPointerLeave, he(i.onContentLeave)),
      children: Array.from(d.items).map(([N, { ref: M, forceMount: y, ...w }]) => {
        const C = b === N;
        return /* @__PURE__ */ n(ce, { present: y || C, children: /* @__PURE__ */ n(
          kt,
          {
            ...w,
            ref: kn(M, (R) => {
              C && R && m(R);
            })
          }
        ) }, N);
      })
    }
  );
}), Sr = "FocusGroup", Mt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = $(Sr, o);
    return /* @__PURE__ */ n(Ce.Provider, { scope: o, children: /* @__PURE__ */ n(Ce.Slot, { scope: o, children: /* @__PURE__ */ n(V.div, { dir: a.dir, ...r, ref: t }) }) });
  }
), qe = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Ir = "FocusGroupItem", Et = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = hr(o), i = $(Ir, o);
    return /* @__PURE__ */ n(Ce.ItemSlot, { scope: o, children: /* @__PURE__ */ n(
      V.button,
      {
        ...r,
        ref: t,
        onKeyDown: F(e.onKeyDown, (s) => {
          if (["Home", "End", ...qe].includes(s.key)) {
            let l = a().map((m) => m.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), qe.includes(s.key)) {
              const m = l.indexOf(s.currentTarget);
              l = l.slice(m + 1);
            }
            setTimeout(() => Oe(l)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function we(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function Oe(e) {
  const t = document.activeElement;
  return e.some((o) => o === t ? !0 : (o.focus(), document.activeElement !== t));
}
function Lr(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const o = t.dataset.tabindex;
      t.setAttribute("tabindex", o);
    });
  };
}
function xe(e, t) {
  const o = Y(t);
  me(() => {
    let r = 0;
    if (e) {
      const a = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(o);
      });
      return a.observe(e), () => {
        window.cancelAnimationFrame(r), a.unobserve(e);
      };
    }
  }, [e, o]);
}
function Pe(e) {
  return e ? "open" : "closed";
}
function Rt(e, t) {
  return `${e}-trigger-${t}`;
}
function Tt(e, t) {
  return `${e}-content-${t}`;
}
function he(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ar = gt, Or = Ct, Pr = xt, _r = Nt;
function Fr(e, t) {
  const { asChild: o, children: r } = e;
  if (!o) return typeof t == "function" ? t(r) : t;
  const a = g.Children.only(r);
  return g.cloneElement(a, {
    children: typeof t == "function" ? t(a.props.children) : t
  });
}
const Dr = Me({
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
}), _e = g.forwardRef(({ className: e, children: t, secondary: o, ...r }, a) => {
  const i = pe();
  return v(Ar, {
    ref: a,
    ...r,
    asChild: !1,
    className: "relative",
    children: [n("div", {
      className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary"
    }), n(dt, {
      id: i,
      children: n(Or, {
        className: x(Dr({
          secondary: o
        }), e),
        children: t
      })
    })]
  });
});
_e.displayName = "TabNavigation";
const Vr = Me({
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
}), Br = g.forwardRef(function({ asChild: t, disabled: o, active: r, className: a, children: i, secondary: s, ...d }, l) {
  return n(Pr, {
    className: "flex",
    children: n(_r, {
      "data-active": r ? "true" : void 0,
      "aria-disabled": o || void 0,
      className: x("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", o ? "pointer-events-none" : ""),
      ref: l,
      onSelect: () => {
      },
      asChild: t,
      ...d,
      children: Fr({
        asChild: t,
        children: i
      }, (f) => v("span", {
        className: x("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", Vr({
          secondary: s,
          disabled: o
        }), a),
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
}), $r = ({ className: e }) => n("li", {
  className: "list-none",
  children: n(it, {
    className: x("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", e),
    children: " "
  })
}), ae = at(Br, $r), Hr = ({ tabs: e, activeTabId: t, setActiveTabId: o, secondary: r = !1, embedded: a = !1 }) => {
  const i = e[0], [s, d] = I(t ?? ("id" in i ? i.id : void 0));
  K(() => {
    s && (o == null || o(s));
  }, [o, s]);
  const { isActive: l } = Mn(), f = a ? [e[0]] : e, m = [...f].sort((p, u) => p.index ? 1 : u.index ? -1 : 0).find((p) => "href" in p ? l(p.href) : s === p.id);
  return n(_e, {
    secondary: r,
    asChild: !0,
    "aria-label": r ? "primary-navigation" : "secondary-navigation",
    children: f.length === 1 ? n("li", {
      className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
      children: f[0].label
    }) : f.map(({ label: p, ...u }, h) => {
      const b = m && "href" in m && "href" in u ? m.href === u.href : "id" in u && s === u.id;
      return n(ae, {
        active: b,
        href: "href" in u ? u.href : void 0,
        onClick: () => {
          "id" in u && (d == null || d(u.id));
        },
        secondary: r,
        asChild: !0,
        children: v(Ee, {
          role: "link",
          ...u,
          children: [u.variant === "upsell" && n(ie, {
            icon: En,
            size: "md",
            className: "mr-1 text-[hsl(var(--promote-50))]"
          }), p]
        })
      }, h);
    })
  });
}, Kr = ({ secondary: e }) => v(_e, {
  "aria-label": e ? "Secondary empty nav" : "Main empty nav",
  secondary: e,
  "aria-busy": "true",
  "aria-live": "polite",
  children: [n(ae.Skeleton, {
    className: "w-24"
  }), n(ae.Skeleton, {
    className: "w-20"
  }), n(ae.Skeleton, {
    className: "w-28"
  }), n(ae.Skeleton, {
    className: "w-20"
  })]
}), zr = at(Hr, Kr), jr = ({ tabs: e, activeTabId: t, setActiveTabId: o, withPadding: r = !1, children: a }) => {
  const { position: i } = Te(), s = mt();
  return v(G, {
    children: [e && n("div", {
      className: "-mx-2",
      children: n(zr, {
        tabs: e,
        activeTabId: t,
        setActiveTabId: o
      })
    }), v(Rn, {
      className: x("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", r && "px-5 py-3", !s && i === "center" && "max-h-[512px]"),
      children: [a, n(Tn, {
        orientation: "vertical",
        className: "[&_div]:bg-f1-background"
      })]
    })]
  });
}, Ur = {
  sm: "min-h-14 py-3 px-4",
  md: "min-h-18 p-5"
}, Gr = ({ children: e }) => {
  const { contentPadding: t } = Te();
  return n("div", {
    className: x("flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background", Ur[t]),
    children: e
  });
}, Wr = A(({ ...e }, t) => n("nav", {
  ref: t,
  "aria-label": "breadcrumb",
  ...e
}));
Wr.displayName = "Breadcrumb";
const St = A(({ className: e, children: t, ...o }, r) => {
  const a = pe();
  return n("ol", {
    ref: r,
    className: x("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
    ...o,
    children: n(dt, {
      id: a,
      children: n(X, {
        initial: !1,
        children: t
      })
    })
  });
});
St.displayName = "BreadcrumbList";
const It = ({ className: e, ...t }) => n("li", {
  className: x("inline-flex items-center gap-0.5 pr-1", e),
  ...t
});
It.displayName = "BreadcrumbItem";
const Lt = A(({ asChild: e, className: t, ...o }, r) => n(e ? Sn : Ee, {
  ref: r,
  className: x("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
  ...o
}));
Lt.displayName = "BreadcrumbLink";
const At = A(({ className: e, ...t }, o) => n("span", {
  ref: o,
  role: "link",
  "aria-disabled": "true",
  "aria-current": "page",
  className: x("truncate px-1.5 py-0.5 text-f1-foreground", e),
  ...t
}));
At.displayName = "BreadcrumbPage";
const Ot = A((e, t) => n("span", {
  ref: t,
  role: "presentation",
  "aria-hidden": "true",
  className: "h-4 w-4 text-f1-icon-secondary",
  ...e,
  children: n(st, {})
}));
Ot.displayName = "BreadcrumbSeparator";
function Zr({ ...e }) {
  const [t, o] = I(e.open), r = (l) => {
    var f;
    o(l), (f = e.onOpenChange) == null || f.call(e, l);
  }, [a, i] = I(e.placeholder || e.label);
  return n(In, {
    ...e,
    onOpenChange: r,
    onChange: (l, f, c) => {
      var m;
      (m = e.onChange) == null || m.call(e, l, f, c);
    },
    onChangeSelectedOption: (l) => {
      i((l == null ? void 0 : l.label) || "");
    },
    label: a,
    hideLabel: !0,
    children: v("button", {
      className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      children: [n("span", {
        className: "block grow text-f1-foreground",
        children: a
      }), n("div", {
        className: "ml-2",
        children: n(T.div, {
          animate: {
            rotate: t ? 180 : 0
          },
          className: "h-[16px] w-[16px]",
          children: n(ie, {
            icon: Ln,
            size: "sm",
            className: "rounded-2xs bg-f1-background-secondary p-0.5"
          })
        })
      })]
    })
  });
}
const Yr = Me({
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
}), Xe = [{
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
}], qr = ({ spin: e = !1, size: t = "md", background: o, hover: r = !1, ...a }, i) => {
  const s = pe(), { onAnimationStart: d, onAnimationEnd: l, onDragStart: f, onDragEnd: c, onDrag: m, className: p, ...u } = a;
  return n("div", {
    className: x(Yr({
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
      transition: o ? void 0 : {
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
        }), Xe.map((h) => n("clipPath", {
          id: `${s}-${h.id}`,
          children: n("path", {
            d: h.path
          })
        }, h.id))]
      }), n("g", {
        clipPath: `url(#${s}-circle)`,
        children: Xe.map((h) => n(T.foreignObject, {
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
              background: o ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, h.id))
      })]
    })
  });
}, Xr = A(qr), Pt = ge(null), Jr = 15, Qr = ({ children: e, enabled: t, agent: o, initialMessage: r, welcomeScreenSuggestions: a = [], onThumbsDown: i, onThumbsUp: s, ...d }) => {
  const [l, f] = I(t), [c, m] = I(!1), [p, u] = I(!0), [h, b] = I(o), [k, N] = I(a), [M, y] = I(Jr), [w, C] = I(r), R = D(null), L = (P) => {
    b(P);
  }, O = (P) => {
    R.current = P;
  }, E = () => {
    R.current && R.current();
  };
  return K(() => {
    f(t);
  }, [t]), K(() => {
    if (!c) {
      const P = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      u(!P);
    }
  }, [c]), n(Pt.Provider, {
    value: {
      ...d,
      enabled: l,
      setEnabled: f,
      open: c,
      setOpen: m,
      shouldPlayEntranceAnimation: p,
      setShouldPlayEntranceAnimation: u,
      agent: h,
      tmp_setAgent: L,
      setAutoClearMinutes: y,
      autoClearMinutes: l ? M : null,
      initialMessage: w,
      setInitialMessage: C,
      welcomeScreenSuggestions: k,
      setWelcomeScreenSuggestions: N,
      onThumbsUp: s,
      onThumbsDown: i,
      clear: E,
      setClearFunction: O
    },
    children: e
  });
}, H = () => {
};
function W() {
  const e = se(Pt);
  return e === null ? {
    enabled: !1,
    setEnabled: H,
    open: !1,
    setOpen: H,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: H,
    agent: void 0,
    tmp_setAgent: H,
    setAutoClearMinutes: H,
    clear: H,
    setClearFunction: H,
    autoClearMinutes: null,
    initialMessage: void 0,
    setInitialMessage: H,
    welcomeScreenSuggestions: [],
    setWelcomeScreenSuggestions: H,
    onThumbsUp: H,
    onThumbsDown: H
  } : e;
}
const _t = A((e, t) => n("div", {
  ref: t,
  className: "px-1.5",
  ...e,
  children: n(it, {
    className: "h-4 w-24",
    "aria-hidden": "true"
  })
}));
_t.displayName = "BreadcrumbSkeleton";
const Ft = A(({ item: e, isLast: t, isOnly: o = !1, isFirst: r = !1, children: a }, i) => v(It, {
  ref: i,
  children: [!r && n(Ot, {}), n(Dt, {
    item: e,
    isLast: t,
    isOnly: o,
    isFirst: r
  }), a]
}, e.id));
Ft.displayName = "BreadcrumbItem";
const Dt = A(({ item: e, isLast: t, isOnly: o = !1, isFirst: r = !1 }, a) => {
  const i = "loading" in e && e.loading, s = i ? "loading" : "type" in e && e.type ? e.type : t || o ? "page" : "link", d = v(T.div, {
    layoutId: `breadcrumb-${e.id}`,
    className: x("flex items-center gap-2 px-1.5", r && "pl-0", o && "text-2xl font-semibold"),
    transition: {
      duration: 0.15
    },
    children: [!i && "module" in e && e.module && (o || r) && n(An, {
      module: e.module,
      size: o ? "lg" : "sm"
    }), n("span", {
      className: "truncate",
      children: !i && "label" in e ? e.label : ""
    })]
  }), l = {
    loading: n(_t, {}),
    select: "type" in e && e.type === "select" && (e.options || e.source) && n(G, {
      children: n(Zr, {
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
    page: n(At, {
      "aria-hidden": "true",
      className: "p-0",
      children: d
    }),
    link: n(Lt, {
      asChild: !0,
      className: "p-0",
      children: n(Ee, {
        ..."href" in e && !("type" in e) ? e : {},
        className: "block",
        children: d
      })
    })
  };
  return n(T.div, {
    ref: a,
    layout: !0,
    className: x(i && "max-w-40"),
    transition: {
      duration: 0.15
    },
    children: l[s]
  });
});
Dt.displayName = "BreadcrumbContent";
const eo = {
  sm: "py-3 px-4",
  md: "p-5 pb-3"
}, to = ({ title: e, module: t, otherActions: o }) => {
  const { onClose: r, shownBottomSheet: a, position: i, contentPadding: s } = Te(), d = x("font-semibold text-f1-foreground", i === "center" ? "text-lg" : "text-xl"), l = () => n("div", {
    className: "h-4 w-px self-center bg-f1-background-secondary"
  }), f = (o == null ? void 0 : o.filter((u) => u.type !== "separator")) ?? [], c = () => !f.length || !o ? null : f.length <= 2 ? n("div", {
    className: "flex flex-row gap-2",
    children: f.map((u) => n(B, {
      variant: "outline",
      icon: u.icon,
      onClick: u.onClick,
      label: u.label,
      hideLabel: !0
    }, u.label))
  }) : n(On, {
    items: o
  }), m = () => t ? n(St, {
    children: n(Ft, {
      item: {
        id: t.id,
        label: t.label,
        href: t.href,
        module: t.id
      },
      isLast: !1,
      isFirst: !0
    })
  }) : null, p = x("flex flex-col gap-3 bg-f1-background", eo[s]);
  return t && !a ? v("div", {
    className: p,
    children: [v("div", {
      className: "flex flex-row justify-between",
      children: [t ? n(m, {}) : n(c, {}), v("div", {
        className: "flex flex-row gap-2",
        children: [t && v(G, {
          children: [n(c, {}), o && n(l, {})]
        }), n(B, {
          variant: "outline",
          icon: ve,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), !!e && n(je, {
      className: x(d, "text-2xl"),
      children: e
    })]
  }) : v("div", {
    className: p,
    children: [v("div", {
      className: "flex flex-row items-center justify-between",
      children: [a ? n(G, {
        children: t ? n(m, {}) : n(Ue, {
          className: d,
          children: e
        })
      }) : !!e && n(je, {
        className: d,
        children: e
      }), v("div", {
        className: "flex flex-row gap-2",
        children: [n(c, {}), o && n(l, {}), n(B, {
          variant: "outline",
          icon: ve,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), t && !!e && n(Ue, {
      className: d,
      children: e
    })]
  });
}, q = fr;
q.Header = to;
q.Content = jr;
q.Footer = Gr;
const no = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, ro = {
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
}, oo = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, ao = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, Vt = g.forwardRef(({ animate: e = "normal", ...t }, o) => v("svg", {
  ref: o,
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
    variants: ao,
    transition: oo,
    animate: e,
    vectorEffect: "non-scaling-stroke"
  }), n(T.path, {
    d: "M9.00003 12L11.4 14.4L15 9.6",
    initial: "normal",
    variants: ro,
    transition: no,
    animate: e,
    vectorEffect: "non-scaling-stroke"
  })]
}));
Vt.displayName = "CheckCircleLineAnimated";
const Je = [{
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
}], io = (e, t) => {
  const o = pe(), { onAnimationStart: r, onAnimationEnd: a, onDragStart: i, onDragEnd: s, onDrag: d, ...l } = e;
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
      ...(({ style: f, ...c }) => c)(l),
      children: [v("defs", {
        children: [n("clipPath", {
          id: `${o}-circle`,
          children: n("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), Je.map((f) => n("clipPath", {
          id: `${o}-${f.id}`,
          children: n("path", {
            d: f.path
          })
        }, f.id))]
      }), n("g", {
        clipPath: `url(#${o}-circle)`,
        children: Je.map((f) => n(T.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${o}-${f.id})`,
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
}, Bt = A(io), $t = ({ title: e, status: t, inGroup: o }) => v("div", {
  className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
  children: [t === "inProgress" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(ie, {
      state: "animate",
      size: o ? "md" : "lg",
      icon: Pn
    })
  }), t === "executing" && n("div", {
    className: "-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center",
    children: n(Bt, {})
  }), t === "completed" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(ie, {
      color: "secondary",
      state: "animate",
      size: o ? "md" : "lg",
      icon: Vt
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
}), so = {
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
  a: ({ children: e, ...t }) => n(_n, {
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
  img: ({ src: e, alt: t, ...o }) => {
    const r = () => {
      if (e) {
        const a = document.createElement("a");
        a.href = e, a.download = t || "image", document.body.appendChild(a), a.click(), document.body.removeChild(a);
      }
    };
    return v("div", {
      className: "relative w-fit",
      children: [n("img", {
        ...o,
        src: e,
        alt: t,
        className: x("max-w-full rounded-md", o.className)
      }), n("div", {
        className: "absolute right-2 top-2 rounded bg-f1-background-inverse-secondary",
        children: n(be, {
          variant: "neutral",
          label: "t.actions.save",
          hideLabel: !0,
          icon: zn,
          onClick: r
        })
      })]
    });
  }
}, Ht = ge(null), Kt = ({ children: e }) => {
  const [t, o] = I(null), r = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (a, i) => o({
      action: a,
      message: i
    }),
    close: () => o(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (a, i) => o({
      action: a,
      message: i
    }),
    close: () => o(null)
  };
  return n(Ht.Provider, {
    value: r,
    children: e
  });
}, Fe = () => {
  const e = se(Ht);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, zt = ({ isGenerating: e, isLoading: t, markdownTagRenderers: o, message: r, onCopy: a }) => {
  var M, y;
  const i = (r == null ? void 0 : r.content) || "", s = (r == null ? void 0 : r.role) === "assistant" && ((M = r.toolCalls) == null ? void 0 : M.find((w) => w.function.name === "orchestratorThinking")), d = (y = r == null ? void 0 : r.generativeUI) == null ? void 0 : y.call(r, s ? {
    status: t ? "executing" : "completed"
  } : void 0), l = !i && !d, f = J(), { open: c } = Fe(), [m, p] = I(null), [u, h] = I(!1), b = D(), k = Q(() => {
    b.current && clearTimeout(b.current), !t && !e && !d && h(!0);
  }, [e, t, d]), N = Q(() => {
    b.current = setTimeout(() => {
      h(!1);
    }, 150);
  }, []);
  return !t && !e && l ? null : v("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center",
    onMouseEnter: k,
    onMouseLeave: N,
    children: [t && !d && n("div", {
      className: "min-h-[20px]",
      children: n(Bt, {})
    }), r && v(G, {
      children: [n("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: n(rn, {
          content: i,
          components: {
            ...so,
            ...o
          }
        })
      }), n("div", {
        className: x("invisible absolute left-0 top-full py-1 pr-4 focus-within:visible", u && !e && "visible"),
        onMouseEnter: k,
        children: v("div", {
          className: "flex gap-1",
          children: [n("div", {
            children: n(ut, {
              variant: "ghost",
              valueToCopy: i,
              disabled: e,
              onCopy: (w) => {
                w.currentTarget.blur(), a == null || a(i);
              }
            })
          }), n("div", {
            children: n(be, {
              variant: "ghost",
              size: "sm",
              label: f.ai.thumbsUp,
              icon: m === "like" ? rr : tr,
              hideLabel: !0,
              disabled: e,
              onClick: (w) => {
                const C = m === "like" ? null : "like";
                C && c(C, r), p(C), w.currentTarget.blur();
              }
            })
          }), n("div", {
            children: n(be, {
              variant: "ghost",
              size: "sm",
              label: f.ai.thumbsDown,
              icon: m === "dislike" ? Qn : Xn,
              hideLabel: !0,
              disabled: e,
              onClick: (w) => {
                const C = m === "dislike" ? null : "dislike";
                C && c(C, r), p(C), w.currentTarget.blur();
              }
            })
          })]
        })
      })]
    }), !!d && n("div", {
      children: d
    })]
  });
}, lo = () => null, co = (e) => {
  const { labels: t } = on(), { setOpen: o } = W(), r = J(), a = t.title === "CopilotKit";
  return v("header", {
    className: x("flex justify-between border-0 border-solid border-f1-border-secondary p-3"),
    children: [n("h2", {
      className: "text-f1-foreground",
      children: a ? "" : t.title
    }), n(T.div, {
      layout: !0,
      className: "flex items-center gap-x-2",
      ...e,
      children: n(B, {
        variant: "ghost",
        hideLabel: !0,
        label: r.ai.closeChat,
        icon: ve,
        onClick: () => o(!1)
      })
    })]
  });
}, jt = ({ inProgress: e, onSend: t, onStop: o }) => {
  const [r, a] = I(""), [i, s] = I(!1), d = D(null), l = D(null), f = J(), c = r.trim().length > 0;
  K(() => {
    if (l.current && r.length > 0) {
      const { scrollHeight: u, clientHeight: h } = l.current;
      s(u > h);
    } else
      s(!1);
  }, [r]);
  const m = (u) => {
    var h;
    u.preventDefault(), e ? o == null || o() : c && (t(r.trim()), a("")), (h = l.current) == null || h.focus();
  }, p = (u) => {
    var h;
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), e || (h = d.current) == null || h.requestSubmit());
  };
  return v(T.form, {
    layout: !0,
    "aria-busy": e,
    ref: d,
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
      }), n(X, {
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
          a(u.target.value);
        },
        onKeyDown: p,
        placeholder: f.ai.inputPlaceholder,
        className: x("col-start-1 row-start-1", "mx-3 mb-0 max-h-36 flex-1 resize-none overflow-y-scroll outline-none transition-all", "bg-f1-background text-f1-foreground placeholder:text-f1-foreground-secondary", !i && "mt-3")
      })]
    }), n("div", {
      className: "flex flex-row-reverse p-3 pt-0",
      children: e ? n(B, {
        type: "submit",
        variant: "neutral",
        label: f.ai.stopAnswerGeneration,
        icon: Yn,
        hideLabel: !0
      }) : n(B, {
        type: "submit",
        disabled: !c,
        variant: c ? "default" : "neutral",
        label: f.ai.sendMessage,
        icon: Fn,
        hideLabel: !0
      })
    })]
  });
}, uo = ({
  autoClearMinutes: e,
  reset: t,
  isOpen: o
}) => {
  const r = D(null);
  K(() => (o ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
      t();
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [t, o, e]);
}, fo = ({ children: e }) => {
  const { open: t, shouldPlayEntranceAnimation: o, setShouldPlayEntranceAnimation: r, autoClearMinutes: a } = W(), { reset: i } = le();
  return uo({
    reset: i,
    isOpen: t,
    autoClearMinutes: a
  }), n(X, {
    children: t && n(T.div, {
      "aria-hidden": !t,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: o ? {
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
        o && r(!1);
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
          duration: o ? 0.3 : 0.05,
          ease: "easeOut",
          delay: o ? 0.2 : 0
        },
        children: e
      })
    }, "chat-window")
  });
};
function mo(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
const Ut = ({ onClose: e, onSubmit: t, reactionType: o, message: r }) => {
  const [a, i] = I(""), s = J(), d = nt(), { title: l, label: f, placeholder: c } = o === "like" ? s.ai.feedbackModal.positive : s.ai.feedbackModal.negative, m = Q(() => {
    t(r, a);
  }, [a, r, t]), p = () => {
    e(r);
  };
  return K(() => {
    const u = (h) => {
      h.key === "Enter" && (h.preventDefault(), m());
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [m]), v(q, {
    position: "center",
    isOpen: !0,
    onClose: p,
    contentPadding: "sm",
    children: [n(q.Header, {
      title: l
    }), n(q.Content, {
      children: n("div", {
        className: "flex flex-col gap-6 p-4",
        children: n(cr, {
          autoFocus: !0,
          label: f,
          placeholder: c,
          value: a,
          onChange: (u) => i(u.trim()),
          size: "md",
          type: "text"
        })
      })
    }), n(q.Footer, {
      children: v("div", {
        className: "flex flex-1 flex-row-reverse gap-3",
        children: [n(B, {
          onClick: m,
          label: d.actions.send
        }), n(B, {
          onClick: p,
          label: d.actions.cancel,
          variant: "outline"
        })]
      })
    })]
  });
};
var De = "Collapsible", [ho, zo] = rt(De), [go, Ve] = ho(De), Gt = g.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: o,
      open: r,
      defaultOpen: a,
      disabled: i,
      onOpenChange: s,
      ...d
    } = e, [l = !1, f] = Ne({
      prop: r,
      defaultProp: a,
      onChange: s
    });
    return /* @__PURE__ */ n(
      go,
      {
        scope: o,
        disabled: i,
        contentId: ke(),
        open: l,
        onOpenToggle: g.useCallback(() => f((c) => !c), [f]),
        children: /* @__PURE__ */ n(
          V.div,
          {
            "data-state": $e(l),
            "data-disabled": i ? "" : void 0,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Gt.displayName = De;
var Wt = "CollapsibleTrigger", Zt = g.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: o, ...r } = e, a = Ve(Wt, o);
    return /* @__PURE__ */ n(
      V.button,
      {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": $e(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...r,
        ref: t,
        onClick: F(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Zt.displayName = Wt;
var Be = "CollapsibleContent", Yt = g.forwardRef(
  (e, t) => {
    const { forceMount: o, ...r } = e, a = Ve(Be, e.__scopeCollapsible);
    return /* @__PURE__ */ n(ce, { present: o || a.open, children: ({ present: i }) => /* @__PURE__ */ n(po, { ...r, ref: t, present: i }) });
  }
);
Yt.displayName = Be;
var po = g.forwardRef((e, t) => {
  const { __scopeCollapsible: o, present: r, children: a, ...i } = e, s = Ve(Be, o), [d, l] = g.useState(r), f = g.useRef(null), c = ne(t, f), m = g.useRef(0), p = m.current, u = g.useRef(0), h = u.current, b = s.open || d, k = g.useRef(b), N = g.useRef(void 0);
  return g.useEffect(() => {
    const M = requestAnimationFrame(() => k.current = !1);
    return () => cancelAnimationFrame(M);
  }, []), me(() => {
    const M = f.current;
    if (M) {
      N.current = N.current || {
        transitionDuration: M.style.transitionDuration,
        animationName: M.style.animationName
      }, M.style.transitionDuration = "0s", M.style.animationName = "none";
      const y = M.getBoundingClientRect();
      m.current = y.height, u.current = y.width, k.current || (M.style.transitionDuration = N.current.transitionDuration, M.style.animationName = N.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ n(
    V.div,
    {
      "data-state": $e(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !b,
      ...i,
      ref: c,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: b && a
    }
  );
});
function $e(e) {
  return e ? "open" : "closed";
}
var vo = Gt;
const bo = vo, Co = Zt, yo = Yt, qt = ({ messages: e }) => {
  const [t, o] = I(!1), r = Dn(), a = J();
  return n("div", {
    className: "mb-1",
    children: v(bo, {
      className: "w-full",
      open: t,
      onOpenChange: o,
      children: [v(Co, {
        className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90",
        children: [n("span", {
          className: "mr-2 *:block",
          children: n(Ge, {
            icon: Wn,
            className: "block"
          })
        }), n("span", {
          className: "mr-[2px]",
          children: a.ai.thoughtsGroupTitle
        }), n(Ge, {
          icon: st,
          className: "h-4 w-4 transition-transform duration-200"
        })]
      }), n(yo, {
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
            var d;
            return n("div", {
              children: i.role === "assistant" && ((d = i.generativeUI) == null ? void 0 : d.call(i, {
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
}, wo = 3;
function xo(e, t = wo) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
const Xt = ({ greeting: e, initialMessages: t = [], suggestions: o = [] }) => {
  const { sendMessage: r } = le(), a = xo(o);
  return n(X, {
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
          children: n(Xr, {
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
        children: a.map((i, s) => n(T.div, {
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
          children: n(B, {
            className: "font-medium",
            variant: "ghost",
            label: i.message,
            icon: i.icon,
            onClick: () => r({
              id: Hn(),
              role: "user",
              content: i.message
            })
          })
        }, s))
      })]
    }, "welcome")
  });
}, No = (e) => n(Kt, {
  children: n(ko, {
    ...e
  })
}), ko = ({ inProgress: e, children: t, RenderMessage: o, AssistantMessage: r, UserMessage: a, ImageRenderer: i, onRegenerate: s, onCopy: d, markdownTagRenderers: l }) => {
  const f = D(null), { messages: c, interrupt: m } = le(), { threadId: p } = et(), { close: u, currentReaction: h, currentMessage: b, isOpen: k } = Fe(), N = J(), { greeting: M, initialMessage: y, welcomeScreenSuggestions: w, onThumbsUp: C, onThumbsDown: R } = W(), L = ee(() => Mo(y || N.ai.defaultInitialMessage), [y, N.ai.defaultInitialMessage]), O = c.length == 0 && (M || L.length > 0), { messagesContainerRef: E, messagesEndRef: P, showScrollToBottom: Z, scrollToBottom: oe } = Jt(), { height: de = 0 } = Vn({
    ref: E,
    box: "border-box"
  }), z = ee(() => Qt(c), [c]);
  return v(G, {
    children: [v(T.div, {
      layout: !0,
      className: x("scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3", "overflow-y-scroll"),
      ref: E,
      children: [v(T.div, {
        layout: "position",
        ref: f,
        className: O ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [O && n(Xt, {
          greeting: M,
          initialMessages: L,
          suggestions: w
        }), z.map((_, S) => {
          const j = S === z.length - 1;
          return n("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: j ? de * 0.8 : void 0
            },
            children: _.map((U, ue) => {
              const He = S === z.length - 1 && ue === _.length - 1;
              return Array.isArray(U) && !He ? n(qt, {
                messages: U,
                isActive: !1,
                inProgress: e,
                RenderMessage: o,
                AssistantMessage: r
              }, `${S}-${ue}`) : n(o, {
                message: Array.isArray(U) ? U[U.length - 1] : U,
                inProgress: e,
                index: ue,
                isCurrentMessage: He,
                AssistantMessage: r,
                UserMessage: a,
                ImageRenderer: i,
                onRegenerate: s,
                onCopy: d,
                markdownTagRenderers: l
              }, `${S}-${ue}`);
            })
          }, `turn-${S}`);
        }), m]
      }), n("footer", {
        className: "copilotKitMessagesFooter",
        ref: P,
        children: t
      }), n(X, {
        children: Z && n(T.div, {
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
            children: n(B, {
              onClick: () => oe(),
              label: N.ai.scrollToBottom,
              variant: "neutral",
              icon: lt,
              hideLabel: !0
            })
          })
        })
      })]
    }), k && n(Ut, {
      onSubmit: (_, S) => {
        const j = h === "like" ? C : R;
        j == null || j(_, {
          threadId: p,
          feedback: S
        }), u();
      },
      onClose: (_) => {
        const S = h === "like" ? C : R;
        S == null || S(_, {
          threadId: p,
          feedback: ""
        }), u();
      },
      reactionType: h,
      message: b
    })]
  });
};
function Mo(e) {
  const t = [];
  return e && (Array.isArray(e) ? t.push(...e) : t.push(e)), t.map((o) => ({
    id: o,
    role: "assistant",
    content: o
  }));
}
function Jt() {
  const e = D(null), t = D(null), o = D(!1), r = D(!1), [a, i] = I(!1), s = (c = "smooth") => {
    t.current && e.current && (i(!1), o.current = !0, e.current.scrollIntoView({
      behavior: c
    }));
  }, d = () => {
    if (t.current) {
      const { scrollTop: c, scrollHeight: m, clientHeight: p } = t.current, u = 20;
      r.current = c + p + u < m;
    } else
      r.current = !1;
  }, l = () => {
    if (!t.current) {
      i(!1);
      return;
    }
    const { scrollTop: c, scrollHeight: m, clientHeight: p } = t.current, u = c < m - 3 * p;
    i(u);
  }, f = Q(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    d(), l();
  }, []);
  return Bn("scroll", f, t), K(() => {
    const c = t.current;
    if (!c)
      return;
    s("instant");
    const m = new MutationObserver(() => {
      l();
    });
    return m.observe(c, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      m.disconnect();
    };
  }, []), {
    messagesEndRef: e,
    messagesContainerRef: t,
    showScrollToBottom: a,
    scrollToBottom: s
  };
}
function Qt(e) {
  if (e.length === 0)
    return [];
  console.assert(e[0].role === "user", "Invariant violation! Assistant message received before user message");
  const t = [];
  for (const [o, r] of e.entries()) {
    if (r.role === "user") {
      t.push([r]);
      continue;
    }
    const a = t[t.length - 1];
    if (mo(r) && Qe(a)) {
      if (o !== e.length - 1) {
        const i = a.pop();
        a.push(r, i);
      }
      continue;
    }
    if (Eo(r)) {
      Qe(a) ? a.at(-1).push(r) : a.push([r]);
      continue;
    }
    a.push(r);
  }
  return t;
}
function Eo(e) {
  var t;
  return e.role === "assistant" && ((t = e.toolCalls) == null ? void 0 : t.some((o) => o.function.name === "orchestratorThinking")) === !0;
}
function Qe(e) {
  const t = e.at(-1);
  return Array.isArray(t);
}
const Ro = (e) => n(Kt, {
  children: n(To, {
    ...e
  })
}), To = ({ inProgress: e, children: t, RenderMessage: o, AssistantMessage: r, UserMessage: a, ImageRenderer: i, onRegenerate: s, onCopy: d, markdownTagRenderers: l }) => {
  const f = D(null), { messages: c, interrupt: m } = le(), { threadId: p } = et(), { close: u, currentReaction: h, currentMessage: b, isOpen: k } = Fe(), N = J(), { greeting: M, initialMessage: y, welcomeScreenSuggestions: w, onThumbsUp: C, onThumbsDown: R } = W(), L = ee(() => So(y || N.ai.defaultInitialMessage), [y, N.ai.defaultInitialMessage]), O = c.length === 0 && (M || L.length > 0), { messagesContainerRef: E, messagesEndRef: P, showScrollToBottom: Z, scrollToBottom: oe } = Jt(), de = ee(() => Qt(c), [c]);
  return v(G, {
    children: [v("div", {
      className: "flex h-full w-full flex-col overflow-hidden",
      style: {
        position: "relative",
        minHeight: 0
      },
      children: [v("div", {
        ref: E,
        className: x("scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4 pt-3", O ? "justify-end" : "justify-start"),
        style: {
          minHeight: 0
        },
        children: [v("div", {
          ref: f,
          className: O ? "flex pb-3" : "flex flex-col gap-8",
          style: {
            width: "100%"
          },
          children: [O && n(Xt, {
            greeting: M,
            initialMessages: L,
            suggestions: w
          }), de.map((z, _) => n("div", {
            className: "flex flex-col items-start justify-start gap-2",
            children: z.map((S, j) => {
              const U = _ === de.length - 1 && j === z.length - 1;
              return Array.isArray(S) && !U ? n(qt, {
                messages: S,
                isActive: !1,
                inProgress: e,
                RenderMessage: o,
                AssistantMessage: r
              }, `${_}-${j}`) : n(o, {
                message: Array.isArray(S) ? S[S.length - 1] : S,
                inProgress: e,
                index: j,
                isCurrentMessage: U,
                AssistantMessage: r,
                UserMessage: a,
                ImageRenderer: i,
                onRegenerate: s,
                onCopy: d,
                markdownTagRenderers: l
              }, `${_}-${j}`);
            })
          }, `turn-${_}`)), m, n("div", {
            ref: P,
            className: "h-2"
          })]
        }), n(X, {
          children: Z && n(T.div, {
            className: "sticky bottom-20 z-10 flex justify-center",
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
              children: n(B, {
                onClick: () => oe(),
                label: N.ai.scrollToBottom,
                variant: "neutral",
                icon: lt,
                hideLabel: !0
              })
            })
          })
        })]
      }), n("footer", {
        className: "copilotKitMessagesFooter bg-white border-gray-200 w-full border-t",
        style: {
          position: "sticky",
          bottom: 0,
          zIndex: 10,
          flexShrink: 0
        },
        children: t
      })]
    }), k && n(Ut, {
      onSubmit: (z, _) => {
        const S = h === "like" ? C : R;
        S == null || S(z, {
          threadId: p,
          feedback: _
        }), u();
      },
      onClose: (z) => {
        const _ = h === "like" ? C : R;
        _ == null || _(z, {
          threadId: p,
          feedback: ""
        }), u();
      },
      reactionType: h,
      message: b
    })]
  });
};
function So(e) {
  const t = [];
  return e && (Array.isArray(e) ? t.push(...e) : t.push(e)), t.map((o) => ({
    id: o,
    role: "assistant",
    content: o
  }));
}
const en = ({ suggestions: e, onSuggestionClick: t }) => n("div", {
  children: e.map((o, r) => n(B, {
    variant: "ghost",
    className: "font-medium",
    onClick: () => t(o.message),
    label: o.message
  }, r))
}), tn = ({ message: e, ImageRenderer: t }) => {
  const o = e && "image" in e && e.image, r = D(null);
  if (K(() => {
    r.current && r.current.scrollIntoView({
      behavior: "smooth"
    });
  }, []), o) {
    const a = e;
    return n("div", {
      className: "copilotKitMessage copilotKitUserMessage",
      children: n(t, {
        image: a.image,
        content: a.content
      })
    });
  }
  return n("div", {
    ref: r,
    className: "my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
    children: e == null ? void 0 : e.content
  });
}, Io = ({ enabled: e = !1, greeting: t, initialMessage: o, welcomeScreenSuggestions: r, onThumbsUp: a, onThumbsDown: i, children: s, agent: d, ...l }) => n(Qr, {
  enabled: e,
  greeting: t,
  initialMessage: o,
  onThumbsUp: a,
  onThumbsDown: i,
  agent: d,
  welcomeScreenSuggestions: r,
  children: n(Lo, {
    ...l,
    children: s
  })
}), Lo = ({ children: e, ...t }) => {
  const { agent: o } = W();
  return v(nn, {
    runtimeUrl: "/copilotkit",
    agent: o,
    ...t,
    children: [n(Ao, {}), e]
  });
}, Ao = () => {
  const { setClearFunction: e } = W(), { reset: t } = le();
  return K(() => (e(t), () => {
    e(null);
  }), [e, t]), null;
}, Oo = () => {
  const { enabled: e, open: t, setOpen: o } = W();
  return tt({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (r) => {
      var a;
      return n("div", {
        className: r.status ? "-ml-1" : void 0,
        children: n($t, {
          title: r.args.message ?? "thinking",
          status: r.status === "complete" ? "completed" : r.status,
          inGroup: (a = r.result) == null ? void 0 : a.inGroup
        })
      });
    }
  }), e ? n(an, {
    className: x("h-full", t && "py-1 xs:pr-1"),
    defaultOpen: t,
    onSetOpen: (r) => {
      o(r);
    },
    Window: fo,
    Header: co,
    Messages: No,
    Button: lo,
    Input: jt,
    UserMessage: tn,
    AssistantMessage: zt,
    RenderSuggestionsList: en
  }) : null;
}, Po = () => {
  const { enabled: e } = W();
  return tt({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (t) => {
      var o;
      return n("div", {
        className: t.status ? "-ml-1" : void 0,
        children: n($t, {
          title: t.args.message ?? "thinking",
          status: t.status === "complete" ? "completed" : t.status,
          inGroup: (o = t.result) == null ? void 0 : o.inGroup
        })
      });
    }
  }), e ? n("div", {
    className: "bg-white flex h-full w-full flex-col overflow-hidden",
    children: n("div", {
      className: "relative flex flex-1 flex-col overflow-hidden",
      children: n("div", {
        className: "grid h-full w-full grid-rows-[1fr_auto]",
        children: n("div", {
          className: "overflow-y-auto",
          children: n(sn, {
            Messages: Ro,
            Input: jt,
            UserMessage: tn,
            AssistantMessage: zt,
            RenderSuggestionsList: en
          })
        })
      })
    })
  }) : null;
}, jo = Re("AiChat", Oo), Uo = Re("AiChat", Po), Go = Re("AiChatProvider", Io);
export {
  Go as A,
  ut as B,
  bo as C,
  Un as F,
  cr as I,
  dt as L,
  Kr as T,
  It as a,
  Ot as b,
  Wr as c,
  Ft as d,
  St as e,
  Xr as f,
  jo as g,
  yo as h,
  Yn as i,
  q as j,
  Zr as k,
  Hr as l,
  zr as m,
  $t as n,
  Uo as o,
  W as u
};
