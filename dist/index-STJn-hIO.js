import { jsxs as v, jsx as n, Fragment as G } from "react/jsx-runtime";
import { useCopilotChatInternal as de, useCopilotContext as et, useCopilotAction as tt, CopilotKit as rn } from "@copilotkit/react-core";
import { Markdown as on, useChatContext as an, CopilotSidebar as sn, CopilotChat as ln } from "@copilotkit/react-ui";
import { ag as cn, ah as dn, cy as Ke, I as un, u as nt, b2 as fn, at as J, an as T, s as le, cz as mn, av as hn, bb as gn, b as x, cl as pn, cn as vn, co as bn, D as Cn, v as yn, cA as re, aX as wn, aW as ke, P as D, a as rt, cB as ot, cC as q, cD as Me, cE as xn, ck as _, cF as ze, cG as Nn, cH as ue, cI as me, cJ as kn, cK as Mn, ay as at, q as Ee, aw as it, ba as En, b1 as Re, z as Rn, S as Tn, l as Sn, aZ as In, b5 as st, aG as Ln, aM as An, F as On, B as $, x as be, w as Ue, cL as je, b9 as Pn, bO as _n, y as Ce, V as Fn, bc as Q, as as Dn, a9 as Vn, cM as Ge, b7 as lt, bx as ct, cN as Bn, m as Te } from "./dialog-D3AmLiwa.js";
import * as g from "react";
import { forwardRef as A, createContext as ge, useRef as F, useState as I, useCallback as ee, useContext as ce, useMemo as te, useEffect as U, useId as pe } from "react";
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
}), zn = A(Kn), Un = (e, t) => v("svg", {
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
}), jn = A(Un), Gn = (e, t) => v("svg", {
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
  const e = F(!1);
  return cn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ir() {
  const e = ar(), [t, o] = I(0), r = ee(() => {
    e.current && o(t + 1);
  }, [t]);
  return [ee(() => dn.postRender(r), [r]), t];
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
const dt = (e) => e === !0, lr = (e) => dt(e === !0) || e === "id", ut = ({ children: e, id: t, inherit: o = !0 }) => {
  const r = ce(Ke), a = ce(or), [i, s] = ir(), d = F(null), l = r.id || a;
  d.current === null && (lr(o) && l && (t = t ? l + "-" + t : l), d.current = {
    id: t,
    group: dt(o) && r.group || We()
  });
  const f = te(() => ({ ...d.current, forceRender: i }), [s]);
  return n(Ke.Provider, { value: f, children: e });
}, cr = (e) => n(un, {
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
}, ft = A(({ valueToCopy: e, onCopy: t, copyTooltipLabel: o, copiedTooltipLabel: r, variant: a = "neutral", size: i = "sm", ...s }, d) => {
  const [l, f] = I(!1), c = nt(), m = o ?? c.actions.copy, u = l ? r ?? "Copied" : m;
  return U(() => {
    let b = null;
    return l && (b = setTimeout(() => f(!1), 1e3)), () => {
      b && clearTimeout(b);
    };
  }, [l]), n(fn, {
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
    children: n(J, {
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
        children: n(le, {
          size: i === "sm" ? "sm" : "md",
          icon: l ? hn : jn,
          className: mn({
            variant: a
          })
        })
      }, l ? "check" : "copy")
    })
  });
});
ft.displayName = "ButtonCopy";
const mt = ge({
  open: !1,
  onClose: () => {
  },
  position: "center",
  contentPadding: "md",
  shownBottomSheet: !1
}), Ze = ({ isOpen: e, onClose: t, shownBottomSheet: o = !1, contentPadding: r, position: a, children: i }) => n(mt.Provider, {
  value: {
    open: e,
    onClose: t,
    position: a,
    shownBottomSheet: o,
    contentPadding: r
  },
  children: i
}), Se = () => ce(mt), ht = () => gn("(max-width: 560px)", {
  initializeWithValue: !1
}), fr = ({ asBottomSheetInMobile: e = !0, position: t = "center", onClose: o, isOpen: r, contentPadding: a = "md", children: i }) => {
  const [s, d] = I(r);
  U(() => {
    d(r);
  }, [r]);
  const l = (u) => {
    d(u), u || o();
  }, f = () => {
    d(!1), o();
  }, c = ht(), m = t === "left" || t === "right", p = te(() => c && e ? "max-h-[95vh] bg-f1-background" : m ? x("w-full overflow-x-hidden flex flex-col absolute top-3 bottom-3 translate-y-0 translate-x-0 max-w-[539px] rounded-md border border-solid border-f1-border-secondary", t === "left" && "left-3", t === "right" && "left-auto right-3") : t === "fullscreen" ? "w-[calc(100%-48px)] h-[calc(100%-48px)] overflow-x-hidden" : "flex flex-col max-h-[620px] max-w-[680px] overflow-hidden", [t, c, e, m]);
  return c && e ? n(Ze, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: a,
    shownBottomSheet: !0,
    children: v(pn, {
      open: s,
      onOpenChange: l,
      children: [n(vn, {
        className: "bg-f1-background-overlay"
      }), n(bn, {
        className: p,
        children: i
      })]
    })
  }) : n(Ze, {
    isOpen: s,
    onClose: f,
    position: t,
    contentPadding: a,
    children: n(Cn, {
      open: s,
      onOpenChange: o,
      modal: t === "center" || t === "fullscreen",
      children: n(yn, {
        withTraslateAnimation: !m,
        className: p,
        children: i
      })
    })
  });
};
var oe = "NavigationMenu", [Ie, gt, mr] = ot(oe), [ye, hr, gr] = ot(oe), [Le, Ko] = rt(
  oe,
  [mr, gr]
), [pr, H] = Le(oe), [vr, br] = Le(oe), pt = g.forwardRef(
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
    } = e, [m, p] = g.useState(null), u = re(t, (M) => p(M)), h = wn(f), b = g.useRef(0), k = g.useRef(0), N = g.useRef(0), [E, y] = g.useState(!0), [w = "", C] = ke({
      prop: r,
      onChange: (M) => {
        const O = M !== "", Z = d > 0;
        O ? (window.clearTimeout(N.current), Z && y(!1)) : (window.clearTimeout(N.current), N.current = window.setTimeout(
          () => y(!0),
          d
        )), a == null || a(M);
      },
      defaultProp: i
    }), R = g.useCallback(() => {
      window.clearTimeout(k.current), k.current = window.setTimeout(() => C(""), 150);
    }, [C]), L = g.useCallback(
      (M) => {
        window.clearTimeout(k.current), C(M);
      },
      [C]
    ), P = g.useCallback(
      (M) => {
        w === M ? window.clearTimeout(k.current) : b.current = window.setTimeout(() => {
          window.clearTimeout(k.current), C(M);
        }, s);
      },
      [w, C, s]
    );
    return g.useEffect(() => () => {
      window.clearTimeout(b.current), window.clearTimeout(k.current), window.clearTimeout(N.current);
    }, []), /* @__PURE__ */ n(
      bt,
      {
        scope: o,
        isRootMenu: !0,
        value: w,
        dir: h,
        orientation: l,
        rootNavigationMenu: m,
        onTriggerEnter: (M) => {
          window.clearTimeout(b.current), E ? P(M) : L(M);
        },
        onTriggerLeave: () => {
          window.clearTimeout(b.current), R();
        },
        onContentEnter: () => window.clearTimeout(k.current),
        onContentLeave: R,
        onItemSelect: (M) => {
          C((O) => O === M ? "" : M);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ n(
          D.nav,
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
pt.displayName = oe;
var vt = "NavigationMenuSub", Cr = g.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: o,
      value: r,
      onValueChange: a,
      defaultValue: i,
      orientation: s = "horizontal",
      ...d
    } = e, l = H(vt, o), [f = "", c] = ke({
      prop: r,
      onChange: a,
      defaultProp: i
    });
    return /* @__PURE__ */ n(
      bt,
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
        children: /* @__PURE__ */ n(D.div, { "data-orientation": s, ...d, ref: t })
      }
    );
  }
);
Cr.displayName = vt;
var bt = (e) => {
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
  } = e, [h, b] = g.useState(null), [k, N] = g.useState(/* @__PURE__ */ new Map()), [E, y] = g.useState(null);
  return /* @__PURE__ */ n(
    pr,
    {
      scope: t,
      isRootMenu: o,
      rootNavigationMenu: r,
      value: d,
      previousValue: xn(d),
      baseId: Me(),
      dir: a,
      orientation: i,
      viewport: h,
      onViewportChange: b,
      indicatorTrack: E,
      onIndicatorTrackChange: y,
      onTriggerEnter: q(c),
      onTriggerLeave: q(m),
      onContentEnter: q(p),
      onContentLeave: q(u),
      onItemSelect: q(l),
      onItemDismiss: q(f),
      onViewportContentChange: g.useCallback((w, C) => {
        N((R) => (R.set(w, C), new Map(R)));
      }, []),
      onViewportContentRemove: g.useCallback((w) => {
        N((C) => C.has(w) ? (C.delete(w), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ n(Ie.Provider, { scope: t, children: /* @__PURE__ */ n(vr, { scope: t, items: k, children: s }) })
    }
  );
}, Ct = "NavigationMenuList", yt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = H(Ct, o), i = /* @__PURE__ */ n(D.ul, { "data-orientation": a.orientation, ...r, ref: t });
    return /* @__PURE__ */ n(D.div, { style: { position: "relative" }, ref: a.onIndicatorTrackChange, children: /* @__PURE__ */ n(Ie.Slot, { scope: o, children: a.isRootMenu ? /* @__PURE__ */ n(Et, { asChild: !0, children: i }) : i }) });
  }
);
yt.displayName = Ct;
var wt = "NavigationMenuItem", [yr, xt] = Le(wt), Nt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, value: r, ...a } = e, i = Me(), s = r || i || "LEGACY_REACT_AUTO_VALUE", d = g.useRef(null), l = g.useRef(null), f = g.useRef(null), c = g.useRef(() => {
    }), m = g.useRef(!1), p = g.useCallback((h = "start") => {
      if (d.current) {
        c.current();
        const b = xe(d.current);
        b.length && Pe(h === "start" ? b : b.reverse());
      }
    }, []), u = g.useCallback(() => {
      if (d.current) {
        const h = xe(d.current);
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
        children: /* @__PURE__ */ n(D.li, { ...a, ref: t })
      }
    );
  }
);
Nt.displayName = wt;
var we = "NavigationMenuTrigger", wr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, disabled: r, ...a } = e, i = H(we, e.__scopeNavigationMenu), s = xt(we, e.__scopeNavigationMenu), d = g.useRef(null), l = re(d, s.triggerRef, t), f = Tt(i.baseId, s.value), c = St(i.baseId, s.value), m = g.useRef(!1), p = g.useRef(!1), u = s.value === i.value;
  return /* @__PURE__ */ v(G, { children: [
    /* @__PURE__ */ n(Ie.ItemSlot, { scope: o, value: s.value, children: /* @__PURE__ */ n(Rt, { asChild: !0, children: /* @__PURE__ */ n(
      D.button,
      {
        id: f,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": _e(u),
        "aria-expanded": u,
        "aria-controls": c,
        ...a,
        ref: l,
        onPointerEnter: _(e.onPointerEnter, () => {
          p.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: _(
          e.onPointerMove,
          he(() => {
            r || p.current || s.wasEscapeCloseRef.current || m.current || (i.onTriggerEnter(s.value), m.current = !0);
          })
        ),
        onPointerLeave: _(
          e.onPointerLeave,
          he(() => {
            r || (i.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: _(e.onClick, () => {
          i.onItemSelect(s.value), p.current = u;
        }),
        onKeyDown: _(e.onKeyDown, (h) => {
          const k = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          u && h.key === k && (s.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    u && /* @__PURE__ */ v(G, { children: [
      /* @__PURE__ */ n(
        Nn,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (h) => {
            const b = s.contentRef.current, k = h.relatedTarget, N = k === d.current, E = b == null ? void 0 : b.contains(k);
            (N || !E) && s.onFocusProxyEnter(N ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ n("span", { "aria-owns": c })
    ] })
  ] });
});
wr.displayName = we;
var xr = "NavigationMenuLink", Ye = "navigationMenu.linkSelect", kt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, active: r, onSelect: a, ...i } = e;
    return /* @__PURE__ */ n(Rt, { asChild: !0, children: /* @__PURE__ */ n(
      D.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: _(
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
kt.displayName = xr;
var Ae = "NavigationMenuIndicator", Nr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, a = H(Ae, e.__scopeNavigationMenu), i = !!a.value;
  return a.indicatorTrack ? $n.createPortal(
    /* @__PURE__ */ n(ue, { present: o || i, children: /* @__PURE__ */ n(kr, { ...r, ref: t }) }),
    a.indicatorTrack
  ) : null;
});
Nr.displayName = Ae;
var kr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, ...r } = e, a = H(Ae, o), i = gt(o), [s, d] = g.useState(
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
  return Ne(s, p), Ne(a.indicatorTrack, p), l ? /* @__PURE__ */ n(
    D.div,
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
}), ne = "NavigationMenuContent", Mr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, a = H(ne, e.__scopeNavigationMenu), i = xt(ne, e.__scopeNavigationMenu), s = re(i.contentRef, t), d = i.value === a.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return a.viewport ? /* @__PURE__ */ n(Er, { forceMount: o, ...l, ref: s }) : /* @__PURE__ */ n(ue, { present: o || d, children: /* @__PURE__ */ n(
    Mt,
    {
      "data-state": _e(d),
      ...l,
      ref: s,
      onPointerEnter: _(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: _(
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
Mr.displayName = ne;
var Er = g.forwardRef((e, t) => {
  const o = H(ne, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: a } = o;
  return me(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), me(() => () => a(e.value), [e.value, a]), null;
}), fe = "navigationMenu.rootContentDismiss", Mt = g.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: o,
    value: r,
    triggerRef: a,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: d,
    onContentFocusOutside: l,
    ...f
  } = e, c = H(ne, o), m = g.useRef(null), p = re(m, t), u = Tt(c.baseId, r), h = St(c.baseId, r), b = gt(o), k = g.useRef(null), { onItemDismiss: N } = c;
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
  const E = g.useMemo(() => {
    const w = b().map((O) => O.value);
    c.dir === "rtl" && w.reverse();
    const C = w.indexOf(c.value), R = w.indexOf(c.previousValue), L = r === c.value, P = R === w.indexOf(r);
    if (!L && !P) return k.current;
    const M = (() => {
      if (C !== R) {
        if (L && R !== -1) return C > R ? "from-end" : "from-start";
        if (P && C !== -1) return C > R ? "to-start" : "to-end";
      }
      return null;
    })();
    return k.current = M, M;
  }, [c.previousValue, c.value, c.dir, b, r]);
  return /* @__PURE__ */ n(Et, { asChild: !0, children: /* @__PURE__ */ n(
    kn,
    {
      id: h,
      "aria-labelledby": u,
      "data-motion": E,
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
      onFocusOutside: _(e.onFocusOutside, (y) => {
        var C;
        l();
        const w = y.target;
        (C = c.rootNavigationMenu) != null && C.contains(w) && y.preventDefault();
      }),
      onPointerDownOutside: _(e.onPointerDownOutside, (y) => {
        var L;
        const w = y.target, C = b().some((P) => {
          var M;
          return (M = P.ref.current) == null ? void 0 : M.contains(w);
        }), R = c.isRootMenu && ((L = c.viewport) == null ? void 0 : L.contains(w));
        (C || R || !c.isRootMenu) && y.preventDefault();
      }),
      onKeyDown: _(e.onKeyDown, (y) => {
        var R;
        const w = y.altKey || y.ctrlKey || y.metaKey;
        if (y.key === "Tab" && !w) {
          const L = xe(y.currentTarget), P = document.activeElement, M = L.findIndex((ae) => ae === P), Z = y.shiftKey ? L.slice(0, M).reverse() : L.slice(M + 1, L.length);
          Pe(Z) ? y.preventDefault() : (R = i.current) == null || R.focus();
        }
      }),
      onEscapeKeyDown: _(e.onEscapeKeyDown, (y) => {
        s.current = !0;
      })
    }
  ) });
}), Oe = "NavigationMenuViewport", Rr = g.forwardRef((e, t) => {
  const { forceMount: o, ...r } = e, i = !!H(Oe, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ n(ue, { present: o || i, children: /* @__PURE__ */ n(Tr, { ...r, ref: t }) });
});
Rr.displayName = Oe;
var Tr = g.forwardRef((e, t) => {
  const { __scopeNavigationMenu: o, children: r, ...a } = e, i = H(Oe, o), s = re(t, i.onViewportChange), d = br(
    ne,
    e.__scopeNavigationMenu
  ), [l, f] = g.useState(null), [c, m] = g.useState(null), p = l ? (l == null ? void 0 : l.width) + "px" : void 0, u = l ? (l == null ? void 0 : l.height) + "px" : void 0, h = !!i.value, b = h ? i.value : i.previousValue;
  return Ne(c, () => {
    c && f({ width: c.offsetWidth, height: c.offsetHeight });
  }), /* @__PURE__ */ n(
    D.div,
    {
      "data-state": _e(h),
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
      onPointerEnter: _(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: _(e.onPointerLeave, he(i.onContentLeave)),
      children: Array.from(d.items).map(([N, { ref: E, forceMount: y, ...w }]) => {
        const C = b === N;
        return /* @__PURE__ */ n(ue, { present: y || C, children: /* @__PURE__ */ n(
          Mt,
          {
            ...w,
            ref: Mn(E, (R) => {
              C && R && m(R);
            })
          }
        ) }, N);
      })
    }
  );
}), Sr = "FocusGroup", Et = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = H(Sr, o);
    return /* @__PURE__ */ n(ye.Provider, { scope: o, children: /* @__PURE__ */ n(ye.Slot, { scope: o, children: /* @__PURE__ */ n(D.div, { dir: a.dir, ...r, ref: t }) }) });
  }
), qe = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Ir = "FocusGroupItem", Rt = g.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: o, ...r } = e, a = hr(o), i = H(Ir, o);
    return /* @__PURE__ */ n(ye.ItemSlot, { scope: o, children: /* @__PURE__ */ n(
      D.button,
      {
        ...r,
        ref: t,
        onKeyDown: _(e.onKeyDown, (s) => {
          if (["Home", "End", ...qe].includes(s.key)) {
            let l = a().map((m) => m.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), qe.includes(s.key)) {
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
function xe(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function Pe(e) {
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
function Ne(e, t) {
  const o = q(t);
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
function _e(e) {
  return e ? "open" : "closed";
}
function Tt(e, t) {
  return `${e}-trigger-${t}`;
}
function St(e, t) {
  return `${e}-content-${t}`;
}
function he(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ar = pt, Or = yt, Pr = Nt, _r = kt;
function Fr(e, t) {
  const { asChild: o, children: r } = e;
  if (!o) return typeof t == "function" ? t(r) : t;
  const a = g.Children.only(r);
  return g.cloneElement(a, {
    children: typeof t == "function" ? t(a.props.children) : t
  });
}
const Dr = Ee({
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
}), Fe = g.forwardRef(({ className: e, children: t, secondary: o, ...r }, a) => {
  const i = pe();
  return v(Ar, {
    ref: a,
    ...r,
    asChild: !1,
    className: "relative",
    children: [n("div", {
      className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary"
    }), n(ut, {
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
Fe.displayName = "TabNavigation";
const Vr = Ee({
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
}), se = at(Br, $r), Hr = ({ tabs: e, activeTabId: t, setActiveTabId: o, secondary: r = !1, embedded: a = !1 }) => {
  const i = e[0], [s, d] = I(t ?? ("id" in i ? i.id : void 0));
  U(() => {
    s && (o == null || o(s));
  }, [o, s]);
  const { isActive: l } = En(), f = a ? [e[0]] : e, m = [...f].sort((p, u) => p.index ? 1 : u.index ? -1 : 0).find((p) => "href" in p ? l(p.href) : s === p.id);
  return n(Fe, {
    secondary: r,
    asChild: !0,
    "aria-label": r ? "primary-navigation" : "secondary-navigation",
    children: f.length === 1 ? n("li", {
      className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
      children: f[0].label
    }) : f.map(({ label: p, ...u }, h) => {
      const b = m && "href" in m && "href" in u ? m.href === u.href : "id" in u && s === u.id;
      return n(se, {
        active: b,
        href: "href" in u ? u.href : void 0,
        onClick: () => {
          "id" in u && (d == null || d(u.id));
        },
        secondary: r,
        asChild: !0,
        children: v(Re, {
          role: "link",
          ...u,
          children: [u.variant === "upsell" && n(le, {
            icon: Rn,
            size: "md",
            className: "mr-1 text-[hsl(var(--promote-50))]"
          }), p]
        })
      }, h);
    })
  });
}, Kr = ({ secondary: e }) => v(Fe, {
  "aria-label": e ? "Secondary empty nav" : "Main empty nav",
  secondary: e,
  "aria-busy": "true",
  "aria-live": "polite",
  children: [n(se.Skeleton, {
    className: "w-24"
  }), n(se.Skeleton, {
    className: "w-20"
  }), n(se.Skeleton, {
    className: "w-28"
  }), n(se.Skeleton, {
    className: "w-20"
  })]
}), zr = at(Hr, Kr), Ur = ({ tabs: e, activeTabId: t, setActiveTabId: o, withPadding: r = !1, children: a }) => {
  const { position: i } = Se(), s = ht();
  return v(G, {
    children: [e && n("div", {
      className: "-mx-2",
      children: n(zr, {
        tabs: e,
        activeTabId: t,
        setActiveTabId: o
      })
    }), v(Tn, {
      className: x("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", r && "px-5 py-3", !s && i === "center" && "max-h-[512px]"),
      children: [a, n(Sn, {
        orientation: "vertical",
        className: "[&_div]:bg-f1-background"
      })]
    })]
  });
}, jr = {
  sm: "min-h-14 py-3 px-4",
  md: "min-h-18 p-5"
}, Gr = ({ children: e }) => {
  const { contentPadding: t } = Se();
  return n("div", {
    className: x("flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background", jr[t]),
    children: e
  });
}, Wr = A(({ ...e }, t) => n("nav", {
  ref: t,
  "aria-label": "breadcrumb",
  ...e
}));
Wr.displayName = "Breadcrumb";
const It = A(({ className: e, children: t, ...o }, r) => {
  const a = pe();
  return n("ol", {
    ref: r,
    className: x("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
    ...o,
    children: n(ut, {
      id: a,
      children: n(J, {
        initial: !1,
        children: t
      })
    })
  });
});
It.displayName = "BreadcrumbList";
const Lt = ({ className: e, ...t }) => n("li", {
  className: x("inline-flex items-center gap-0.5 pr-1", e),
  ...t
});
Lt.displayName = "BreadcrumbItem";
const At = A(({ asChild: e, className: t, ...o }, r) => n(e ? In : Re, {
  ref: r,
  className: x("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
  ...o
}));
At.displayName = "BreadcrumbLink";
const Ot = A(({ className: e, ...t }, o) => n("span", {
  ref: o,
  role: "link",
  "aria-disabled": "true",
  "aria-current": "page",
  className: x("truncate px-1.5 py-0.5 text-f1-foreground", e),
  ...t
}));
Ot.displayName = "BreadcrumbPage";
const Pt = A((e, t) => n("span", {
  ref: t,
  role: "presentation",
  "aria-hidden": "true",
  className: "h-4 w-4 text-f1-icon-secondary",
  ...e,
  children: n(st, {})
}));
Pt.displayName = "BreadcrumbSeparator";
function Zr({ ...e }) {
  const [t, o] = I(e.open), r = (l) => {
    var f;
    o(l), (f = e.onOpenChange) == null || f.call(e, l);
  }, [a, i] = I(e.placeholder || e.label);
  return n(Ln, {
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
          children: n(le, {
            icon: An,
            size: "sm",
            className: "rounded-2xs bg-f1-background-secondary p-0.5"
          })
        })
      })]
    })
  });
}
const Yr = Ee({
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
}, Xr = A(qr), _t = ge(null), Jr = 15, Qr = ({ children: e, enabled: t, agent: o, initialMessage: r, welcomeScreenSuggestions: a = [], onThumbsDown: i, onThumbsUp: s, ...d }) => {
  const [l, f] = I(t), [c, m] = I(!1), [p, u] = I(!0), [h, b] = I(o), [k, N] = I(a), [E, y] = I(Jr), [w, C] = I(r), R = F(null), L = (O) => {
    b(O);
  }, P = (O) => {
    R.current = O;
  }, M = () => {
    R.current && R.current();
  };
  return U(() => {
    f(t);
  }, [t]), U(() => {
    if (!c) {
      const O = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      u(!O);
    }
  }, [c]), n(_t.Provider, {
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
      autoClearMinutes: l ? E : null,
      initialMessage: w,
      setInitialMessage: C,
      welcomeScreenSuggestions: k,
      setWelcomeScreenSuggestions: N,
      onThumbsUp: s,
      onThumbsDown: i,
      clear: M,
      setClearFunction: P
    },
    children: e
  });
}, z = () => {
};
function W() {
  const e = ce(_t);
  return e === null ? {
    enabled: !1,
    setEnabled: z,
    open: !1,
    setOpen: z,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: z,
    agent: void 0,
    tmp_setAgent: z,
    setAutoClearMinutes: z,
    clear: z,
    setClearFunction: z,
    autoClearMinutes: null,
    initialMessage: void 0,
    setInitialMessage: z,
    welcomeScreenSuggestions: [],
    setWelcomeScreenSuggestions: z,
    onThumbsUp: z,
    onThumbsDown: z
  } : e;
}
const Ft = A((e, t) => n("div", {
  ref: t,
  className: "px-1.5",
  ...e,
  children: n(it, {
    className: "h-4 w-24",
    "aria-hidden": "true"
  })
}));
Ft.displayName = "BreadcrumbSkeleton";
const Dt = A(({ item: e, isLast: t, isOnly: o = !1, isFirst: r = !1, children: a }, i) => v(Lt, {
  ref: i,
  children: [!r && n(Pt, {}), n(Vt, {
    item: e,
    isLast: t,
    isOnly: o,
    isFirst: r
  }), a]
}, e.id));
Dt.displayName = "BreadcrumbItem";
const Vt = A(({ item: e, isLast: t, isOnly: o = !1, isFirst: r = !1 }, a) => {
  const i = "loading" in e && e.loading, s = i ? "loading" : "type" in e && e.type ? e.type : t || o ? "page" : "link", d = v(T.div, {
    layoutId: `breadcrumb-${e.id}`,
    className: x("flex items-center gap-2 px-1.5", r && "pl-0", o && "text-2xl font-semibold"),
    transition: {
      duration: 0.15
    },
    children: [!i && "module" in e && e.module && (o || r) && n(On, {
      module: e.module,
      size: o ? "lg" : "sm"
    }), n("span", {
      className: "truncate",
      children: !i && "label" in e ? e.label : ""
    })]
  }), l = {
    loading: n(Ft, {}),
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
    page: n(Ot, {
      "aria-hidden": "true",
      className: "p-0",
      children: d
    }),
    link: n(At, {
      asChild: !0,
      className: "p-0",
      children: n(Re, {
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
Vt.displayName = "BreadcrumbContent";
const eo = {
  sm: "py-3 px-4",
  md: "p-5 pb-3"
}, to = ({ title: e, module: t, otherActions: o }) => {
  const { onClose: r, shownBottomSheet: a, position: i, contentPadding: s } = Se(), d = x("font-semibold text-f1-foreground", i === "center" ? "text-lg" : "text-xl"), l = () => n("div", {
    className: "h-4 w-px self-center bg-f1-background-secondary"
  }), f = (o == null ? void 0 : o.filter((u) => u.type !== "separator")) ?? [], c = () => !f.length || !o ? null : f.length <= 2 ? n("div", {
    className: "flex flex-row gap-2",
    children: f.map((u) => n($, {
      variant: "outline",
      icon: u.icon,
      onClick: u.onClick,
      label: u.label,
      hideLabel: !0
    }, u.label))
  }) : n(Pn, {
    items: o
  }), m = () => t ? n(It, {
    children: n(Dt, {
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
        }), n($, {
          variant: "outline",
          icon: be,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), !!e && n(Ue, {
      className: x(d, "text-2xl"),
      children: e
    })]
  }) : v("div", {
    className: p,
    children: [v("div", {
      className: "flex flex-row items-center justify-between",
      children: [a ? n(G, {
        children: t ? n(m, {}) : n(je, {
          className: d,
          children: e
        })
      }) : !!e && n(Ue, {
        className: d,
        children: e
      }), v("div", {
        className: "flex flex-row gap-2",
        children: [n(c, {}), o && n(l, {}), n($, {
          variant: "outline",
          icon: be,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      })]
    }), t && !!e && n(je, {
      className: d,
      children: e
    })]
  });
}, X = fr;
X.Header = to;
X.Content = Ur;
X.Footer = Gr;
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
}, Bt = g.forwardRef(({ animate: e = "normal", ...t }, o) => v("svg", {
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
Bt.displayName = "CheckCircleLineAnimated";
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
}, $t = A(io), Ht = ({ title: e, status: t, inGroup: o }) => v("div", {
  className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
  children: [t === "inProgress" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(le, {
      state: "animate",
      size: o ? "md" : "lg",
      icon: _n
    })
  }), t === "executing" && n("div", {
    className: "-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center",
    children: n($t, {})
  }), t === "completed" && n("div", {
    className: "-mt-[2px] *:block",
    children: n(le, {
      color: "secondary",
      state: "animate",
      size: o ? "md" : "lg",
      icon: Bt
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
  a: ({ children: e, ...t }) => n(Fn, {
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
        children: n(Ce, {
          variant: "neutral",
          label: "t.actions.save",
          hideLabel: !0,
          icon: zn,
          onClick: r
        })
      })]
    });
  }
}, Kt = ge(null), zt = ({ children: e }) => {
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
  return n(Kt.Provider, {
    value: r,
    children: e
  });
}, De = () => {
  const e = ce(Kt);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, Ut = ({ isGenerating: e, isLoading: t, markdownTagRenderers: o, message: r, onCopy: a }) => {
  var E, y;
  const i = (r == null ? void 0 : r.content) || "", s = (r == null ? void 0 : r.role) === "assistant" && ((E = r.toolCalls) == null ? void 0 : E.find((w) => w.function.name === "orchestratorThinking")), d = (y = r == null ? void 0 : r.generativeUI) == null ? void 0 : y.call(r, s ? {
    status: t ? "executing" : "completed"
  } : void 0), l = !i && !d, f = Q(), { open: c } = De(), [m, p] = I(null), [u, h] = I(!1), b = F(), k = ee(() => {
    b.current && clearTimeout(b.current), !t && !e && !d && h(!0);
  }, [e, t, d]), N = ee(() => {
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
      children: n($t, {})
    }), r && v(G, {
      children: [n("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: n(on, {
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
            children: n(ft, {
              variant: "ghost",
              valueToCopy: i,
              disabled: e,
              onCopy: (w) => {
                w.currentTarget.blur(), a == null || a(i);
              }
            })
          }), n("div", {
            children: n(Ce, {
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
            children: n(Ce, {
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
  const { labels: t } = an(), { setOpen: o } = W(), r = Q(), a = t.title === "CopilotKit";
  return v("header", {
    className: x("flex justify-between border-0 border-solid border-f1-border-secondary p-3"),
    children: [n("h2", {
      className: "text-f1-foreground",
      children: a ? "" : t.title
    }), n(T.div, {
      layout: !0,
      className: "flex items-center gap-x-2",
      ...e,
      children: n($, {
        variant: "ghost",
        hideLabel: !0,
        label: r.ai.closeChat,
        icon: be,
        onClick: () => o(!1)
      })
    })]
  });
}, jt = ({ inProgress: e, onSend: t, onStop: o }) => {
  const [r, a] = I(""), [i, s] = I(!1), d = F(null), l = F(null), f = Q(), c = r.trim().length > 0;
  U(() => {
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
      }), n(J, {
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
      children: e ? n($, {
        type: "submit",
        variant: "neutral",
        label: f.ai.stopAnswerGeneration,
        icon: Yn,
        hideLabel: !0
      }) : n($, {
        type: "submit",
        disabled: !c,
        variant: c ? "default" : "neutral",
        label: f.ai.sendMessage,
        icon: Dn,
        hideLabel: !0
      })
    })]
  });
}, uo = ({
  autoClearMinutes: e,
  reset: t,
  isOpen: o
}) => {
  const r = F(null);
  U(() => (o ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
      t();
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [t, o, e]);
}, fo = ({ children: e }) => {
  const { open: t, shouldPlayEntranceAnimation: o, setShouldPlayEntranceAnimation: r, autoClearMinutes: a } = W(), { reset: i } = de();
  return uo({
    reset: i,
    isOpen: t,
    autoClearMinutes: a
  }), n(J, {
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
const Gt = ({ onClose: e, onSubmit: t, reactionType: o, message: r }) => {
  const [a, i] = I(""), s = Q(), d = nt(), { title: l, label: f, placeholder: c } = o === "like" ? s.ai.feedbackModal.positive : s.ai.feedbackModal.negative, m = ee(() => {
    t(r, a);
  }, [a, r, t]), p = () => {
    e(r);
  };
  return U(() => {
    const u = (h) => {
      h.key === "Enter" && (h.preventDefault(), m());
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [m]), v(X, {
    position: "center",
    isOpen: !0,
    onClose: p,
    contentPadding: "sm",
    children: [n(X.Header, {
      title: l
    }), n(X.Content, {
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
    }), n(X.Footer, {
      children: v("div", {
        className: "flex flex-1 flex-row-reverse gap-3",
        children: [n($, {
          onClick: m,
          label: d.actions.send
        }), n($, {
          onClick: p,
          label: d.actions.cancel,
          variant: "outline"
        })]
      })
    })]
  });
};
var Ve = "Collapsible", [ho, zo] = rt(Ve), [go, Be] = ho(Ve), Wt = g.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: o,
      open: r,
      defaultOpen: a,
      disabled: i,
      onOpenChange: s,
      ...d
    } = e, [l = !1, f] = ke({
      prop: r,
      defaultProp: a,
      onChange: s
    });
    return /* @__PURE__ */ n(
      go,
      {
        scope: o,
        disabled: i,
        contentId: Me(),
        open: l,
        onOpenToggle: g.useCallback(() => f((c) => !c), [f]),
        children: /* @__PURE__ */ n(
          D.div,
          {
            "data-state": He(l),
            "data-disabled": i ? "" : void 0,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Wt.displayName = Ve;
var Zt = "CollapsibleTrigger", Yt = g.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: o, ...r } = e, a = Be(Zt, o);
    return /* @__PURE__ */ n(
      D.button,
      {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": He(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...r,
        ref: t,
        onClick: _(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Yt.displayName = Zt;
var $e = "CollapsibleContent", qt = g.forwardRef(
  (e, t) => {
    const { forceMount: o, ...r } = e, a = Be($e, e.__scopeCollapsible);
    return /* @__PURE__ */ n(ue, { present: o || a.open, children: ({ present: i }) => /* @__PURE__ */ n(po, { ...r, ref: t, present: i }) });
  }
);
qt.displayName = $e;
var po = g.forwardRef((e, t) => {
  const { __scopeCollapsible: o, present: r, children: a, ...i } = e, s = Be($e, o), [d, l] = g.useState(r), f = g.useRef(null), c = re(t, f), m = g.useRef(0), p = m.current, u = g.useRef(0), h = u.current, b = s.open || d, k = g.useRef(b), N = g.useRef(void 0);
  return g.useEffect(() => {
    const E = requestAnimationFrame(() => k.current = !1);
    return () => cancelAnimationFrame(E);
  }, []), me(() => {
    const E = f.current;
    if (E) {
      N.current = N.current || {
        transitionDuration: E.style.transitionDuration,
        animationName: E.style.animationName
      }, E.style.transitionDuration = "0s", E.style.animationName = "none";
      const y = E.getBoundingClientRect();
      m.current = y.height, u.current = y.width, k.current || (E.style.transitionDuration = N.current.transitionDuration, E.style.animationName = N.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ n(
    D.div,
    {
      "data-state": He(s.open),
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
function He(e) {
  return e ? "open" : "closed";
}
var vo = Wt;
const bo = vo, Co = Yt, yo = qt, Xt = ({ messages: e }) => {
  const [t, o] = I(!1), r = Vn(), a = Q();
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
const Jt = ({ greeting: e, initialMessages: t = [], suggestions: o = [] }) => {
  const { sendMessage: r } = de(), a = xo(o);
  return n(J, {
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
          children: n($, {
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
}, No = (e) => n(zt, {
  children: n(ko, {
    ...e
  })
}), ko = ({ inProgress: e, children: t, RenderMessage: o, AssistantMessage: r, UserMessage: a, ImageRenderer: i, onRegenerate: s, onCopy: d, markdownTagRenderers: l }) => {
  const f = F(null), { messages: c, interrupt: m } = de(), { threadId: p } = et(), { close: u, currentReaction: h, currentMessage: b, isOpen: k } = De(), N = Q(), { greeting: E, initialMessage: y, welcomeScreenSuggestions: w, onThumbsUp: C, onThumbsDown: R } = W(), L = te(() => Mo(y || N.ai.defaultInitialMessage), [y, N.ai.defaultInitialMessage]), P = c.length == 0 && (E || L.length > 0), { messagesContainerRef: M, messagesEndRef: O, showScrollToBottom: Z, scrollToBottom: ae } = Qt(), { height: ve = 0 } = lt({
    ref: M,
    box: "border-box"
  }), Y = te(() => en(c), [c]);
  return v(G, {
    children: [v(T.div, {
      layout: !0,
      className: x("scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3", "overflow-y-scroll"),
      ref: M,
      children: [v(T.div, {
        layout: "position",
        ref: f,
        className: P ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [P && n(Jt, {
          greeting: E,
          initialMessages: L,
          suggestions: w
        }), Y.map((V, S) => {
          const K = S === Y.length - 1;
          return n("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: K ? ve * 0.8 : void 0
            },
            children: V.map((B, j) => {
              const ie = S === Y.length - 1 && j === V.length - 1;
              return Array.isArray(B) && !ie ? n(Xt, {
                messages: B,
                isActive: !1,
                inProgress: e,
                RenderMessage: o,
                AssistantMessage: r
              }, `${S}-${j}`) : n(o, {
                message: Array.isArray(B) ? B[B.length - 1] : B,
                inProgress: e,
                index: j,
                isCurrentMessage: ie,
                AssistantMessage: r,
                UserMessage: a,
                ImageRenderer: i,
                onRegenerate: s,
                onCopy: d,
                markdownTagRenderers: l
              }, `${S}-${j}`);
            })
          }, `turn-${S}`);
        }), m]
      }), n("footer", {
        className: "copilotKitMessagesFooter",
        ref: O,
        children: t
      }), n(J, {
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
            children: n($, {
              onClick: () => ae(),
              label: N.ai.scrollToBottom,
              variant: "neutral",
              icon: ct,
              hideLabel: !0
            })
          })
        })
      })]
    }), k && n(Gt, {
      onSubmit: (V, S) => {
        const K = h === "like" ? C : R;
        K == null || K(V, {
          threadId: p,
          feedback: S
        }), u();
      },
      onClose: (V) => {
        const S = h === "like" ? C : R;
        S == null || S(V, {
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
function Qt() {
  const e = F(null), t = F(null), o = F(!1), r = F(!1), [a, i] = I(!1), s = (c = "smooth") => {
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
  }, f = ee(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    d(), l();
  }, []);
  return Bn("scroll", f, t), U(() => {
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
function en(e) {
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
const Ro = (e) => n(zt, {
  children: n(To, {
    ...e
  })
}), To = ({ inProgress: e, children: t, RenderMessage: o, AssistantMessage: r, UserMessage: a, ImageRenderer: i, onRegenerate: s, onCopy: d, markdownTagRenderers: l }) => {
  const f = F(null), { messages: c, interrupt: m } = de(), { threadId: p } = et(), { close: u, currentReaction: h, currentMessage: b, isOpen: k } = De(), N = Q(), { greeting: E, initialMessage: y, welcomeScreenSuggestions: w, onThumbsUp: C, onThumbsDown: R } = W(), L = te(() => So(y || N.ai.defaultInitialMessage), [y, N.ai.defaultInitialMessage]), P = c.length == 0 && (E || L.length > 0), { messagesContainerRef: M, messagesEndRef: O, showScrollToBottom: Z, scrollToBottom: ae } = Qt(), { height: ve = 0 } = lt({
    ref: M,
    box: "border-box"
  }), Y = te(() => en(c), [c]);
  return v(G, {
    children: [v(T.div, {
      layout: !0,
      className: x("scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3", "min-h-0 overflow-y-scroll"),
      ref: M,
      children: [v(T.div, {
        layout: "position",
        ref: f,
        className: P ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [P && n(Jt, {
          greeting: E,
          initialMessages: L,
          suggestions: w
        }), Y.map((V, S) => {
          const K = S === Y.length - 1;
          return n("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: K ? ve * 0.8 : void 0
            },
            children: V.map((B, j) => {
              const ie = S === Y.length - 1 && j === V.length - 1;
              return Array.isArray(B) && !ie ? n(Xt, {
                messages: B,
                isActive: !1,
                inProgress: e,
                RenderMessage: o,
                AssistantMessage: r
              }, `${S}-${j}`) : n(o, {
                message: Array.isArray(B) ? B[B.length - 1] : B,
                inProgress: e,
                index: j,
                isCurrentMessage: ie,
                AssistantMessage: r,
                UserMessage: a,
                ImageRenderer: i,
                onRegenerate: s,
                onCopy: d,
                markdownTagRenderers: l
              }, `${S}-${j}`);
            })
          }, `turn-${S}`);
        }), m]
      }), n("footer", {
        className: "copilotKitMessagesFooter",
        ref: O,
        children: t
      }), n(J, {
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
            children: n($, {
              onClick: () => ae(),
              label: N.ai.scrollToBottom,
              variant: "neutral",
              icon: ct,
              hideLabel: !0
            })
          })
        })
      })]
    }), k && n(Gt, {
      onSubmit: (V, S) => {
        const K = h === "like" ? C : R;
        K == null || K(V, {
          threadId: p,
          feedback: S
        }), u();
      },
      onClose: (V) => {
        const S = h === "like" ? C : R;
        S == null || S(V, {
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
const tn = ({ suggestions: e, onSuggestionClick: t }) => n("div", {
  children: e.map((o, r) => n($, {
    variant: "ghost",
    className: "font-medium",
    onClick: () => t(o.message),
    label: o.message
  }, r))
}), nn = ({ message: e, ImageRenderer: t }) => {
  const o = e && "image" in e && e.image, r = F(null);
  if (U(() => {
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
  return v(rn, {
    runtimeUrl: "/copilotkit",
    agent: o,
    ...t,
    children: [n(Ao, {}), e]
  });
}, Ao = () => {
  const { setClearFunction: e } = W(), { reset: t } = de();
  return U(() => (e(t), () => {
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
        children: n(Ht, {
          title: r.args.message ?? "thinking",
          status: r.status === "complete" ? "completed" : r.status,
          inGroup: (a = r.result) == null ? void 0 : a.inGroup
        })
      });
    }
  }), e ? n(sn, {
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
    UserMessage: nn,
    AssistantMessage: Ut,
    RenderSuggestionsList: tn
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
        children: n(Ht, {
          title: t.args.message ?? "thinking",
          status: t.status === "complete" ? "completed" : t.status,
          inGroup: (o = t.result) == null ? void 0 : o.inGroup
        })
      });
    }
  }), e ? n(ln, {
    className: "relative flex h-full w-full flex-col overflow-hidden",
    Messages: Ro,
    Input: jt,
    UserMessage: nn,
    AssistantMessage: Ut,
    RenderSuggestionsList: tn
  }) : null;
}, Uo = Te("AiChat", Oo), jo = Te("AiChat", Po), Go = Te("AiChatProvider", Io);
export {
  Go as A,
  ft as B,
  bo as C,
  jn as F,
  cr as I,
  ut as L,
  Kr as T,
  Lt as a,
  Pt as b,
  Wr as c,
  Dt as d,
  It as e,
  Xr as f,
  Uo as g,
  yo as h,
  Yn as i,
  X as j,
  Zr as k,
  Hr as l,
  zr as m,
  Ht as n,
  jo as o,
  W as u
};
