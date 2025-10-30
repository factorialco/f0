import { jsxs as ce, jsx as E, Fragment as Un } from "react/jsx-runtime";
import * as we from "react";
import k, { forwardRef as wt, useContext as Mr, useMemo as St, isValidElement as Cn, Children as Ta, PureComponent as dn, useRef as Yi, useImperativeHandle as bq, useState as ct, useCallback as Ki, useEffect as Nt, cloneElement as Ut, createElement as nI, createContext as Nn, Component as iI, useLayoutEffect as aI, useId as xq } from "react";
import { q as Xs, s as rr, t as Kb, az as oI, aA as uI, b8 as sI, bV as po, bW as wq, bX as _q, bY as Oq, bZ as Yw, b_ as Xw, b$ as Zw, c0 as Jw, c1 as Qw, c2 as cI, c3 as Dl, c4 as Sq, c5 as Aq, bN as cs, c6 as Pq, af as e_, ad as Tq, c7 as Eq, c8 as t_, b as ye, aa as Cq, aN as lI, c9 as r_, ca as fI, aO as Iq, aP as Mq, cb as Rq, cc as Dq, aQ as Nq, aR as hi, cd as $q, ce as jq, cf as kq, cg as Lq, b6 as dI, S as pI, J as La, l as hI, O as vI, b4 as jl, ch as Ui, aq as ut, c as Be, bd as mI, be as gI, bf as yI, bg as bI, u as Zs, b2 as Bq, b9 as xI, aM as qq, j as Wf, ci as wI, cj as _I, aW as Fq, P as OI, ck as Wq, at as zq, an as n_, b1 as Vb, b5 as SI, bb as Uq, y as Hn, V as AI, M as PI, bQ as Js, aH as Qs, ax as zf, r as Yb, bx as Hq, as as Gq, h as TI, i as EI, k as CI, cl as Kq, cm as Vq, B as Oo, cn as Yq, co as Xq, cp as Zq, T as Jq, bm as Qq, aw as on, ay as II, Y as Kp, o as zt, cq as MI, cr as RI, cs as hy, ct as eF, cu as i_, bp as DI, bT as tF, aG as rF, cv as nF, F as iF, x as NI, D as aF, v as oF, bE as uF, w as sF, bF as cF, bG as lF, bO as fF, z as dF } from "./dialog-D3AmLiwa.js";
const pF = (e, t) => ce("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13 6L19 12L13 18",
    vectorEffect: "non-scaling-stroke"
  }), E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 12H18.5",
    vectorEffect: "non-scaling-stroke"
  })]
}), hF = wt(pF), vF = (e, t) => ce("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7",
    vectorEffect: "non-scaling-stroke"
  }), E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 10H19",
    vectorEffect: "non-scaling-stroke"
  })]
}), Une = wt(vF), mF = (e, t) => ce("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [E("circle", {
    cx: 12,
    cy: 12,
    r: 1.5,
    fill: "currentColor",
    transform: "rotate(90 12 12)",
    vectorEffect: "non-scaling-stroke"
  }), E("circle", {
    cx: 12,
    cy: 6.5,
    r: 1.5,
    fill: "currentColor",
    transform: "rotate(90 12 6.5)",
    vectorEffect: "non-scaling-stroke"
  }), E("circle", {
    cx: 12,
    cy: 17.5,
    r: 1.5,
    fill: "currentColor",
    transform: "rotate(90 12 17.5)",
    vectorEffect: "non-scaling-stroke"
  })]
}), gF = wt(mF), yF = (e, t) => E("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: E("path", {
    stroke: "currentColor",
    d: "M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z",
    vectorEffect: "non-scaling-stroke"
  })
}), bF = wt(yF), xF = (e, t) => ce("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: t,
  ...e,
  children: [E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 12V15",
    vectorEffect: "non-scaling-stroke"
  }), E("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    stroke: "currentColor",
    vectorEffect: "non-scaling-stroke"
  }), E("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9V9.1",
    vectorEffect: "non-scaling-stroke"
  })]
}), wF = wt(xF), _F = Xs({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
      positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
    },
    size: {
      sm: "h-6 w-6 rounded-sm",
      md: "h-8 w-8 rounded",
      lg: "h-10 w-10 rounded-md"
    }
  },
  defaultVariants: {
    type: "info",
    size: "md"
  }
}), OF = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const i = {
    critical: sI,
    warning: uI,
    info: oI,
    positive: Kb
  };
  return E("div", {
    className: _F({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: E(rr, {
      icon: i[e],
      size: t
    })
  });
};
function SF(e, t) {
  const r = po(e), n = po(t), i = r.getTime() - n.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function Xb(e) {
  return wq(e, Date.now());
}
function AF(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function PF(e, t, r) {
  const n = _q(), i = (r == null ? void 0 : r.locale) ?? n.locale ?? Oq, a = SF(e, t);
  if (isNaN(a))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r == null ? void 0 : r.addSuffix,
    comparison: a
  });
  let s, l;
  a > 0 ? (s = po(t), l = po(e)) : (s = po(e), l = po(t));
  const f = AF((r == null ? void 0 : r.roundingMethod) ?? "round"), p = l.getTime() - s.getTime(), d = p / Qw, v = Yw(l) - Yw(s), m = (p - v) / Qw, g = r == null ? void 0 : r.unit;
  let b;
  if (g ? b = g : d < 1 ? b = "second" : d < 60 ? b = "minute" : d < Xw ? b = "hour" : m < Zw ? b = "day" : m < Jw ? b = "month" : b = "year", b === "second") {
    const y = f(p / 1e3);
    return i.formatDistance("xSeconds", y, o);
  } else if (b === "minute") {
    const y = f(d);
    return i.formatDistance("xMinutes", y, o);
  } else if (b === "hour") {
    const y = f(d / 60);
    return i.formatDistance("xHours", y, o);
  } else if (b === "day") {
    const y = f(m / Xw);
    return i.formatDistance("xDays", y, o);
  } else if (b === "month") {
    const y = f(m / Zw);
    return y === 12 && g !== "month" ? i.formatDistance("xYears", 1, o) : i.formatDistance("xMonths", y, o);
  } else {
    const y = f(m / Jw);
    return i.formatDistance("xYears", y, o);
  }
}
function TF(e, t) {
  return PF(e, Xb(e), t);
}
function $I(e) {
  return cI(e, Xb(e));
}
function jI(e) {
  return cI(e, Dl(Xb(e), 1));
}
function Ru(e, t) {
  return Sq(e, -t);
}
function a_(e, t) {
  return Aq(e, -t);
}
function Hne(e) {
  return cs(e, "p");
}
function Gne(e) {
  return cs(e, "HH:mm");
}
function EF(e) {
  return cs(e, "LLL");
}
function CF(e) {
  return e.getDate();
}
function o_(e, t = !0) {
  return TF(e, { addSuffix: t });
}
function Kne(e, { yesterdayRelative: t = !0 } = {}) {
  return $I(e) ? o_(e) : jI(e) ? t ? o_(e) : cs(e, "p") : cs(e, "PPPp");
}
const Vne = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const i = n[t], a = Math.abs(Pq(i, /* @__PURE__ */ new Date()));
    $I(i) ? r.today.push(n) : jI(i) ? r.yesterday.push(n) : a <= 7 ? r.lastWeek.push(n) : a <= 30 ? r.lastMonth.push(n) : r[i.getFullYear()] = [...r[i.getFullYear()] || [], n];
  }), r;
}, Yne = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = CF(e), i = EF(e);
  return ce("div", {
    className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary",
    "aria-label": t,
    "aria-labelledby": r,
    children: [E("div", {
      className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
      children: i
    }), E("div", {
      className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
      children: n
    })]
  });
};
function Xne({ children: e, isValidProp: t, ...r }) {
  t && Eq(t), r = { ...Mr(e_), ...r }, r.isStatic = Tq(() => r.isStatic);
  const n = St(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return E(e_.Provider, { value: n, children: e });
}
const IF = ["sm", "md", "lg"], MF = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded",
  lg: "w-10 h-10 rounded-md"
}, RF = {
  sm: "xs",
  md: "sm",
  lg: "md"
}, kI = ({ emoji: e, size: t = "md", "aria-label": r, "aria-labelledby": n }) => (IF.includes(t) || (console.warn(`The emoji size: ${t} is deprecated. Use ${t_[t]} instead.`), t = t_[t] ?? t), new RegExp("^\\p{Emoji}\\uFE0F?$", "u").test(e) || (e = "🤔"), E("div", {
  className: ye("flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary", MF[t]),
  "aria-label": r,
  "aria-labelledby": n,
  children: E(Cq, {
    emoji: e,
    size: RF[t]
  })
}));
kI.displayName = "EmojiAvatar";
const DF = {
  sm: "size-6 rounded-sm",
  md: "size-9 rounded-md",
  lg: "size-10 rounded-lg"
}, LI = ({ icon: e, size: t = "md", "aria-label": r, "aria-labelledby": n }) => E("div", {
  className: ye("flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary", DF[t]),
  "aria-label": r,
  "aria-labelledby": n,
  children: E(rr, {
    icon: e,
    size: t,
    className: "text-f1-foreground-secondary"
  })
});
LI.displayName = "IconAvatar";
function NF(e, t) {
  return we.useReducer((r, n) => t[r][n] ?? r, e);
}
var Zb = (e) => {
  const { present: t, children: r } = e, n = $F(t), i = typeof r == "function" ? r({ present: n.isPresent }) : we.Children.only(r), a = lI(n.ref, jF(i));
  return typeof r == "function" || n.isPresent ? we.cloneElement(i, { ref: a }) : null;
};
Zb.displayName = "Presence";
function $F(e) {
  const [t, r] = we.useState(), n = we.useRef(null), i = we.useRef(e), a = we.useRef("none"), o = e ? "mounted" : "unmounted", [s, l] = NF(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return we.useEffect(() => {
    const f = pl(n.current);
    a.current = s === "mounted" ? f : "none";
  }, [s]), r_(() => {
    const f = n.current, p = i.current;
    if (p !== e) {
      const v = a.current, m = pl(f);
      e ? l("MOUNT") : m === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(p && v !== m ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), r_(() => {
    if (t) {
      let f;
      const p = t.ownerDocument.defaultView ?? window, d = (m) => {
        const b = pl(n.current).includes(CSS.escape(m.animationName));
        if (m.target === t && b && (l("ANIMATION_END"), !i.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, v = (m) => {
        m.target === t && (a.current = pl(n.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        p.clearTimeout(f), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: we.useCallback((f) => {
      n.current = f ? getComputedStyle(f) : null, r(f);
    }, [])
  };
}
function pl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function jF(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Vp, Uf = "HoverCard", [BI, Zne] = Mq(Uf, [
  fI
]), Hf = fI(), [kF, Gf] = BI(Uf), qI = (e) => {
  const {
    __scopeHoverCard: t,
    children: r,
    open: n,
    defaultOpen: i,
    onOpenChange: a,
    openDelay: o = 700,
    closeDelay: s = 300
  } = e, l = Hf(t), f = we.useRef(0), p = we.useRef(0), d = we.useRef(!1), v = we.useRef(!1), [m, g] = Iq({
    prop: n,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Uf
  }), b = we.useCallback(() => {
    clearTimeout(p.current), f.current = window.setTimeout(() => g(!0), o);
  }, [o, g]), y = we.useCallback(() => {
    clearTimeout(f.current), !d.current && !v.current && (p.current = window.setTimeout(() => g(!1), s));
  }, [s, g]), _ = we.useCallback(() => g(!1), [g]);
  return we.useEffect(() => () => {
    clearTimeout(f.current), clearTimeout(p.current);
  }, []), /* @__PURE__ */ E(
    kF,
    {
      scope: t,
      open: m,
      onOpenChange: g,
      onOpen: b,
      onClose: y,
      onDismiss: _,
      hasSelectionRef: d,
      isPointerDownOnContentRef: v,
      children: /* @__PURE__ */ E(Rq, { ...l, children: r })
    }
  );
};
qI.displayName = Uf;
var FI = "HoverCardTrigger", WI = we.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: r, ...n } = e, i = Gf(FI, r), a = Hf(r);
    return /* @__PURE__ */ E(Dq, { asChild: !0, ...a, children: /* @__PURE__ */ E(
      Nq.a,
      {
        "data-state": i.open ? "open" : "closed",
        ...n,
        ref: t,
        onPointerEnter: hi(e.onPointerEnter, Ll(i.onOpen)),
        onPointerLeave: hi(e.onPointerLeave, Ll(i.onClose)),
        onFocus: hi(e.onFocus, i.onOpen),
        onBlur: hi(e.onBlur, i.onClose),
        onTouchStart: hi(e.onTouchStart, (o) => o.preventDefault())
      }
    ) });
  }
);
WI.displayName = FI;
var Jb = "HoverCardPortal", [LF, BF] = BI(Jb, {
  forceMount: void 0
}), zI = (e) => {
  const { __scopeHoverCard: t, forceMount: r, children: n, container: i } = e, a = Gf(Jb, t);
  return /* @__PURE__ */ E(LF, { scope: t, forceMount: r, children: /* @__PURE__ */ E(Zb, { present: r || a.open, children: /* @__PURE__ */ E($q, { asChild: !0, container: i, children: n }) }) });
};
zI.displayName = Jb;
var kl = "HoverCardContent", UI = we.forwardRef(
  (e, t) => {
    const r = BF(kl, e.__scopeHoverCard), { forceMount: n = r.forceMount, ...i } = e, a = Gf(kl, e.__scopeHoverCard);
    return /* @__PURE__ */ E(Zb, { present: n || a.open, children: /* @__PURE__ */ E(
      qF,
      {
        "data-state": a.open ? "open" : "closed",
        ...i,
        onPointerEnter: hi(e.onPointerEnter, Ll(a.onOpen)),
        onPointerLeave: hi(e.onPointerLeave, Ll(a.onClose)),
        ref: t
      }
    ) });
  }
);
UI.displayName = kl;
var qF = we.forwardRef((e, t) => {
  const {
    __scopeHoverCard: r,
    onEscapeKeyDown: n,
    onPointerDownOutside: i,
    onFocusOutside: a,
    onInteractOutside: o,
    ...s
  } = e, l = Gf(kl, r), f = Hf(r), p = we.useRef(null), d = lI(t, p), [v, m] = we.useState(!1);
  return we.useEffect(() => {
    if (v) {
      const g = document.body;
      return Vp = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", () => {
        g.style.userSelect = Vp, g.style.webkitUserSelect = Vp;
      };
    }
  }, [v]), we.useEffect(() => {
    if (p.current) {
      const g = () => {
        m(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var y;
          ((y = document.getSelection()) == null ? void 0 : y.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", g), () => {
        document.removeEventListener("pointerup", g), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), we.useEffect(() => {
    p.current && zF(p.current).forEach((b) => b.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ E(
    jq,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: o,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: hi(a, (g) => {
        g.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ E(
        kq,
        {
          ...f,
          ...s,
          onPointerDown: hi(s.onPointerDown, (g) => {
            g.currentTarget.contains(g.target) && m(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: d,
          style: {
            ...s.style,
            userSelect: v ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: v ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), FF = "HoverCardArrow", WF = we.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: r, ...n } = e, i = Hf(r);
    return /* @__PURE__ */ E(Lq, { ...i, ...n, ref: t });
  }
);
WF.displayName = FF;
function Ll(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function zF(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
var UF = qI, HF = WI, GF = zI, HI = UI;
const KF = UF, VF = HF, GI = we.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => E(GF, {
  children: E(HI, {
    ref: i,
    align: t,
    sideOffset: r,
    className: ye("z-50 w-[200px] rounded bg-f1-background-inverse font-medium text-f1-foreground-inverse outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
  })
}));
GI.displayName = HI.displayName;
function KI(e, t) {
  switch (e) {
    case "person":
      return `${t.firstName} ${t.lastName}`;
    case "team":
      return t.name;
    case "company":
      return t.name;
    case "file":
      return t.file.name;
    case "flag":
      return t.name;
    default:
      return "";
  }
}
const YF = Xs({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs text-sm",
      sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
      md: "h-8 min-w-8 rounded px-1.5"
    },
    type: {
      base: "",
      rounded: "!rounded-full"
    }
  },
  compoundVariants: [{
    size: "sm",
    type: "rounded",
    className: "px-1.5"
  }, {
    size: "md",
    type: "rounded",
    className: "px-2"
  }],
  defaultVariants: {
    size: "md",
    type: "base"
  }
}), XF = ({ count: e, size: t = "md", type: r, list: n, avatarType: i = "person" }) => {
  const a = E("div", {
    className: ye("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", YF({
      size: t,
      type: r
    })),
    children: t === "xs" ? E(rr, {
      icon: dI,
      size: "xs"
    }) : `+${e}`
  });
  return n != null && n.length ? ce(KF, {
    children: [E(VF, {
      asChild: !0,
      children: a
    }), E(GI, {
      side: "top",
      children: ce(pI, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [n.map((o, s) => ce("div", {
          className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: [E("div", {
            className: "h-6 w-6 shrink-0",
            children: E(La, {
              avatar: {
                type: i,
                ...o
              },
              size: "sm"
            })
          }), E("div", {
            className: "min-w-0 flex-1 truncate font-semibold",
            children: KI(i, o)
          })]
        }, s)), E(hI, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : a;
}, ZF = ["xs", "sm", "md"], JF = {
  base: {
    md: "path('M1.08993 5.46009C0 7.59921 0 10.3995 0 16C0 21.6005 0 24.4008 1.08993 26.5399C2.04867 28.4215 3.57847 29.9513 5.46009 30.9101C7.59921 32 10.3995 32 16 32C21.6005 32 24.4008 32 26.5399 30.9101C27.4506 30.446 28.279 29.8482 29 29.1414C28.2314 28.388 27.5846 27.5108 27.0899 26.5399C26 24.4008 26 21.6005 26 16C26 10.3995 26 7.59921 27.0899 5.46009C27.5846 4.48921 28.2314 3.612 29 2.85857C28.279 2.15181 27.4506 1.55398 26.5399 1.08993C24.4008 0 21.6005 0 16 0C10.3995 0 7.59921 0 5.46009 1.08993C3.57847 2.04867 2.04867 3.57847 1.08993 5.46009Z')",
    sm: "path('M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C19.9729 23.0135 20.7972 22.4749 21.5 21.8095C20.6912 21.0438 20.0434 20.1103 19.609 19.0615C19 17.5913 19 15.7275 19 12C19 8.27247 19 6.4087 19.609 4.93853C20.0434 3.88971 20.6912 2.95622 21.5 2.19052C20.7972 1.52515 19.9729 0.986481 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z')",
    xs: "path('M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V11.4C0 14.7603 0 16.4405 0.653961 17.7239C1.2292 18.8529 2.14708 19.7708 3.27606 20.346C4.55953 21 6.23969 21 9.6 21H10.4C13.7603 21 15.4405 21 16.7239 20.346C17.188 20.1096 17.6164 19.8152 18 19.4721C17.4504 18.9805 16.9927 18.3889 16.654 17.7239C16 16.4405 16 14.7603 16 11.4V9.6C16 6.23969 16 4.55953 16.654 3.27606C16.9927 2.61115 17.4504 2.01946 18 1.52786C17.6164 1.18476 17.188 0.890414 16.7239 0.653961C15.4405 0 13.7603 0 10.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606Z')"
  },
  rounded: {
    md: "path('M29 6.67055C27.1119 9.29683 26 12.5186 26 16C26 19.4814 27.1119 22.7032 29 25.3295C26.0958 29.3692 21.3551 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C21.3551 0 26.0958 2.63083 29 6.67055Z')",
    sm: "path('M21.3746 4.50813C19.1755 1.76008 15.7933 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.7933 24 19.1755 22.2399 21.3746 19.4919C19.8788 17.3743 19 14.7898 19 12C19 9.21023 19.8788 6.62571 21.3746 4.50813Z')",
    xs: "path('M18 4.19899C16.7442 5.95406 16 8.13577 16 10.5C16 12.8642 16.7442 15.0459 18 16.801C16.1755 19.3508 13.2712 21 10 21C4.47716 21 0 16.299 0 10.5C0 4.70102 4.47716 0 10 0C13.2712 0 16.1755 1.64923 18 4.19899Z')"
  }
}, VI = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: i, max: a }) => {
  if (t && !ZF.includes(t)) {
    const f = {
      small: "sm",
      medium: "md",
      xsmall: "xs"
    };
    console.warn(`The avatar list size: ${t} is deprecated. Use ${f[t]} instead.`), t = f[t] ?? "md";
  }
  const s = {
    xs: -2,
    sm: -3,
    md: -4
  }[t] ?? 0, l = St(() => ({
    xs: 20,
    sm: 24,
    md: 32
  })[t], [t]);
  return E(vI, {
    max: a,
    items: e.map((f) => ({
      type: r,
      ...f
    })),
    gap: s,
    itemsWidth: l,
    className: "flex items-center",
    renderListItem: (f, p) => {
      const d = KI(r, f), v = E("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: p !== e.length - 1 ? {
          clipPath: JF[r === "person" ? "rounded" : "base"][t]
        } : void 0,
        children: E(La, {
          avatar: {
            ...f,
            type: r
          },
          size: t
        })
      });
      return E("div", {
        children: n ? v : E(jl, {
          label: d,
          children: v
        })
      }, p);
    },
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: i !== void 0,
    renderOverflowIndicator: (f) => E("div", {
      className: "flex h-fit w-fit items-center",
      style: {
        marginLeft: s
      },
      children: E(XF, {
        count: (i ?? 0) + f,
        size: t,
        type: r === "person" ? "rounded" : "base",
        avatarType: r,
        list: i ? void 0 : e.slice(e.length - f)
      })
    }),
    overflowIndicatorWithPopover: !1
  });
};
VI.displayName = "AvatarList";
var Yp, u_;
function Rr() {
  if (u_) return Yp;
  u_ = 1;
  var e = Array.isArray;
  return Yp = e, Yp;
}
var Xp, s_;
function YI() {
  if (s_) return Xp;
  s_ = 1;
  var e = typeof Ui == "object" && Ui && Ui.Object === Object && Ui;
  return Xp = e, Xp;
}
var Zp, c_;
function Xn() {
  if (c_) return Zp;
  c_ = 1;
  var e = YI(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Zp = r, Zp;
}
var Jp, l_;
function ec() {
  if (l_) return Jp;
  l_ = 1;
  var e = Xn(), t = e.Symbol;
  return Jp = t, Jp;
}
var Qp, f_;
function QF() {
  if (f_) return Qp;
  f_ = 1;
  var e = ec(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var s = r.call(o, i), l = o[i];
    try {
      o[i] = void 0;
      var f = !0;
    } catch {
    }
    var p = n.call(o);
    return f && (s ? o[i] = l : delete o[i]), p;
  }
  return Qp = a, Qp;
}
var eh, d_;
function e5() {
  if (d_) return eh;
  d_ = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return eh = r, eh;
}
var th, p_;
function Oi() {
  if (p_) return th;
  p_ = 1;
  var e = ec(), t = QF(), r = e5(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return th = o, th;
}
var rh, h_;
function Si() {
  if (h_) return rh;
  h_ = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return rh = e, rh;
}
var nh, v_;
function Qo() {
  if (v_) return nh;
  v_ = 1;
  var e = Oi(), t = Si(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return nh = n, nh;
}
var ih, m_;
function Qb() {
  if (m_) return ih;
  m_ = 1;
  var e = Rr(), t = Qo(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return ih = i, ih;
}
var ah, g_;
function Zi() {
  if (g_) return ah;
  g_ = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ah = e, ah;
}
var oh, y_;
function e0() {
  if (y_) return oh;
  y_ = 1;
  var e = Oi(), t = Zi(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == n || l == i || l == r || l == a;
  }
  return oh = o, oh;
}
var uh, b_;
function t5() {
  if (b_) return uh;
  b_ = 1;
  var e = Xn(), t = e["__core-js_shared__"];
  return uh = t, uh;
}
var sh, x_;
function r5() {
  if (x_) return sh;
  x_ = 1;
  var e = t5(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return sh = r, sh;
}
var ch, w_;
function XI() {
  if (w_) return ch;
  w_ = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return ch = r, ch;
}
var lh, __;
function n5() {
  if (__) return lh;
  __ = 1;
  var e = e0(), t = r5(), r = Zi(), n = XI(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, f = s.hasOwnProperty, p = RegExp(
    "^" + l.call(f).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(v) {
    if (!r(v) || t(v))
      return !1;
    var m = e(v) ? p : a;
    return m.test(n(v));
  }
  return lh = d, lh;
}
var fh, O_;
function i5() {
  if (O_) return fh;
  O_ = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return fh = e, fh;
}
var dh, S_;
function Ba() {
  if (S_) return dh;
  S_ = 1;
  var e = n5(), t = i5();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return dh = r, dh;
}
var ph, A_;
function Kf() {
  if (A_) return ph;
  A_ = 1;
  var e = Ba(), t = e(Object, "create");
  return ph = t, ph;
}
var hh, P_;
function a5() {
  if (P_) return hh;
  P_ = 1;
  var e = Kf();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return hh = t, hh;
}
var vh, T_;
function o5() {
  if (T_) return vh;
  T_ = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return vh = e, vh;
}
var mh, E_;
function u5() {
  if (E_) return mh;
  E_ = 1;
  var e = Kf(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var s = o[a];
      return s === t ? void 0 : s;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return mh = i, mh;
}
var gh, C_;
function s5() {
  if (C_) return gh;
  C_ = 1;
  var e = Kf(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return gh = n, gh;
}
var yh, I_;
function c5() {
  if (I_) return yh;
  I_ = 1;
  var e = Kf(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return yh = r, yh;
}
var bh, M_;
function l5() {
  if (M_) return bh;
  M_ = 1;
  var e = a5(), t = o5(), r = u5(), n = s5(), i = c5();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, bh = a, bh;
}
var xh, R_;
function f5() {
  if (R_) return xh;
  R_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return xh = e, xh;
}
var wh, D_;
function t0() {
  if (D_) return wh;
  D_ = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return wh = e, wh;
}
var _h, N_;
function Vf() {
  if (N_) return _h;
  N_ = 1;
  var e = t0();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return _h = t, _h;
}
var Oh, $_;
function d5() {
  if ($_) return Oh;
  $_ = 1;
  var e = Vf(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var s = a.length - 1;
    return o == s ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return Oh = n, Oh;
}
var Sh, j_;
function p5() {
  if (j_) return Sh;
  j_ = 1;
  var e = Vf();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return Sh = t, Sh;
}
var Ah, k_;
function h5() {
  if (k_) return Ah;
  k_ = 1;
  var e = Vf();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Ah = t, Ah;
}
var Ph, L_;
function v5() {
  if (L_) return Ph;
  L_ = 1;
  var e = Vf();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return Ph = t, Ph;
}
var Th, B_;
function Yf() {
  if (B_) return Th;
  B_ = 1;
  var e = f5(), t = d5(), r = p5(), n = h5(), i = v5();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Th = a, Th;
}
var Eh, q_;
function r0() {
  if (q_) return Eh;
  q_ = 1;
  var e = Ba(), t = Xn(), r = e(t, "Map");
  return Eh = r, Eh;
}
var Ch, F_;
function m5() {
  if (F_) return Ch;
  F_ = 1;
  var e = l5(), t = Yf(), r = r0();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ch = n, Ch;
}
var Ih, W_;
function g5() {
  if (W_) return Ih;
  W_ = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ih = e, Ih;
}
var Mh, z_;
function Xf() {
  if (z_) return Mh;
  z_ = 1;
  var e = g5();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return Mh = t, Mh;
}
var Rh, U_;
function y5() {
  if (U_) return Rh;
  U_ = 1;
  var e = Xf();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Rh = t, Rh;
}
var Dh, H_;
function b5() {
  if (H_) return Dh;
  H_ = 1;
  var e = Xf();
  function t(r) {
    return e(this, r).get(r);
  }
  return Dh = t, Dh;
}
var Nh, G_;
function x5() {
  if (G_) return Nh;
  G_ = 1;
  var e = Xf();
  function t(r) {
    return e(this, r).has(r);
  }
  return Nh = t, Nh;
}
var $h, K_;
function w5() {
  if (K_) return $h;
  K_ = 1;
  var e = Xf();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return $h = t, $h;
}
var jh, V_;
function n0() {
  if (V_) return jh;
  V_ = 1;
  var e = m5(), t = y5(), r = b5(), n = x5(), i = w5();
  function a(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var f = o[s];
      this.set(f[0], f[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, jh = a, jh;
}
var kh, Y_;
function ZI() {
  if (Y_) return kh;
  Y_ = 1;
  var e = n0(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, s = i ? i.apply(this, o) : o[0], l = a.cache;
      if (l.has(s))
        return l.get(s);
      var f = n.apply(this, o);
      return a.cache = l.set(s, f) || l, f;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, kh = r, kh;
}
var Lh, X_;
function _5() {
  if (X_) return Lh;
  X_ = 1;
  var e = ZI(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return Lh = r, Lh;
}
var Bh, Z_;
function O5() {
  if (Z_) return Bh;
  Z_ = 1;
  var e = _5(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, s, l, f) {
      a.push(l ? f.replace(r, "$1") : s || o);
    }), a;
  });
  return Bh = n, Bh;
}
var qh, J_;
function i0() {
  if (J_) return qh;
  J_ = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return qh = e, qh;
}
var Fh, Q_;
function S5() {
  if (Q_) return Fh;
  Q_ = 1;
  var e = ec(), t = i0(), r = Rr(), n = Qo(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, o) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return Fh = o, Fh;
}
var Wh, eO;
function JI() {
  if (eO) return Wh;
  eO = 1;
  var e = S5();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Wh = t, Wh;
}
var zh, tO;
function QI() {
  if (tO) return zh;
  tO = 1;
  var e = Rr(), t = Qb(), r = O5(), n = JI();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return zh = i, zh;
}
var Uh, rO;
function Zf() {
  if (rO) return Uh;
  rO = 1;
  var e = Qo();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Uh = t, Uh;
}
var Hh, nO;
function a0() {
  if (nO) return Hh;
  nO = 1;
  var e = QI(), t = Zf();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return Hh = r, Hh;
}
var Gh, iO;
function e2() {
  if (iO) return Gh;
  iO = 1;
  var e = a0();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return Gh = t, Gh;
}
var A5 = e2();
const Hr = /* @__PURE__ */ ut(A5);
var Kh, aO;
function P5() {
  if (aO) return Kh;
  aO = 1;
  function e(t) {
    return t == null;
  }
  return Kh = e, Kh;
}
var T5 = P5();
const $e = /* @__PURE__ */ ut(T5);
var Vh, oO;
function E5() {
  if (oO) return Vh;
  oO = 1;
  var e = Oi(), t = Rr(), r = Si(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Vh = i, Vh;
}
var C5 = E5();
const tc = /* @__PURE__ */ ut(C5);
var I5 = e0();
const Ne = /* @__PURE__ */ ut(I5);
var M5 = Zi();
const eu = /* @__PURE__ */ ut(M5);
var hl = { exports: {} }, Je = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uO;
function R5() {
  if (uO) return Je;
  uO = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var _ = y.$$typeof;
      switch (_) {
        case e:
          switch (y = y.type, y) {
            case r:
            case i:
            case n:
            case f:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case o:
                case l:
                case v:
                case d:
                case a:
                  return y;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return Je.ContextConsumer = o, Je.ContextProvider = a, Je.Element = e, Je.ForwardRef = l, Je.Fragment = r, Je.Lazy = v, Je.Memo = d, Je.Portal = t, Je.Profiler = i, Je.StrictMode = n, Je.Suspense = f, Je.SuspenseList = p, Je.isAsyncMode = function() {
    return !1;
  }, Je.isConcurrentMode = function() {
    return !1;
  }, Je.isContextConsumer = function(y) {
    return b(y) === o;
  }, Je.isContextProvider = function(y) {
    return b(y) === a;
  }, Je.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, Je.isForwardRef = function(y) {
    return b(y) === l;
  }, Je.isFragment = function(y) {
    return b(y) === r;
  }, Je.isLazy = function(y) {
    return b(y) === v;
  }, Je.isMemo = function(y) {
    return b(y) === d;
  }, Je.isPortal = function(y) {
    return b(y) === t;
  }, Je.isProfiler = function(y) {
    return b(y) === i;
  }, Je.isStrictMode = function(y) {
    return b(y) === n;
  }, Je.isSuspense = function(y) {
    return b(y) === f;
  }, Je.isSuspenseList = function(y) {
    return b(y) === p;
  }, Je.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === i || y === n || y === f || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === d || y.$$typeof === a || y.$$typeof === o || y.$$typeof === l || y.$$typeof === g || y.getModuleId !== void 0);
  }, Je.typeOf = b, Je;
}
var Qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sO;
function D5() {
  return sO || (sO = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = !1, b = !1, y = !1, _ = !1, O = !1, S;
    S = Symbol.for("react.module.reference");
    function P(ee) {
      return !!(typeof ee == "string" || typeof ee == "function" || ee === r || ee === i || O || ee === n || ee === f || ee === p || _ || ee === m || g || b || y || typeof ee == "object" && ee !== null && (ee.$$typeof === v || ee.$$typeof === d || ee.$$typeof === a || ee.$$typeof === o || ee.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ee.$$typeof === S || ee.getModuleId !== void 0));
    }
    function x(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Ce = ee.$$typeof;
        switch (Ce) {
          case e:
            var qe = ee.type;
            switch (qe) {
              case r:
              case i:
              case n:
              case f:
              case p:
                return qe;
              default:
                var je = qe && qe.$$typeof;
                switch (je) {
                  case s:
                  case o:
                  case l:
                  case v:
                  case d:
                  case a:
                    return je;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var A = o, C = a, M = e, N = l, z = r, D = v, W = d, q = t, $ = i, j = n, F = f, V = p, Z = !1, Q = !1;
    function G(ee) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(ee) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(ee) {
      return x(ee) === o;
    }
    function ie(ee) {
      return x(ee) === a;
    }
    function ve(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === e;
    }
    function le(ee) {
      return x(ee) === l;
    }
    function be(ee) {
      return x(ee) === r;
    }
    function Oe(ee) {
      return x(ee) === v;
    }
    function ge(ee) {
      return x(ee) === d;
    }
    function ae(ee) {
      return x(ee) === t;
    }
    function fe(ee) {
      return x(ee) === i;
    }
    function he(ee) {
      return x(ee) === n;
    }
    function B(ee) {
      return x(ee) === f;
    }
    function xe(ee) {
      return x(ee) === p;
    }
    Qe.ContextConsumer = A, Qe.ContextProvider = C, Qe.Element = M, Qe.ForwardRef = N, Qe.Fragment = z, Qe.Lazy = D, Qe.Memo = W, Qe.Portal = q, Qe.Profiler = $, Qe.StrictMode = j, Qe.Suspense = F, Qe.SuspenseList = V, Qe.isAsyncMode = G, Qe.isConcurrentMode = X, Qe.isContextConsumer = te, Qe.isContextProvider = ie, Qe.isElement = ve, Qe.isForwardRef = le, Qe.isFragment = be, Qe.isLazy = Oe, Qe.isMemo = ge, Qe.isPortal = ae, Qe.isProfiler = fe, Qe.isStrictMode = he, Qe.isSuspense = B, Qe.isSuspenseList = xe, Qe.isValidElementType = P, Qe.typeOf = x;
  }()), Qe;
}
var cO;
function N5() {
  return cO || (cO = 1, process.env.NODE_ENV === "production" ? hl.exports = R5() : hl.exports = D5()), hl.exports;
}
var $5 = N5(), Yh, lO;
function t2() {
  if (lO) return Yh;
  lO = 1;
  var e = Oi(), t = Si(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return Yh = n, Yh;
}
var Xh, fO;
function j5() {
  if (fO) return Xh;
  fO = 1;
  var e = t2();
  function t(r) {
    return e(r) && r != +r;
  }
  return Xh = t, Xh;
}
var k5 = j5();
const tu = /* @__PURE__ */ ut(k5);
var L5 = t2();
const B5 = /* @__PURE__ */ ut(L5);
var mr = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, _a = function(t) {
  return tc(t) && t.indexOf("%") === t.length - 1;
}, pe = function(t) {
  return B5(t) && !tu(t);
}, Kt = function(t) {
  return pe(t) || tc(t);
}, q5 = 0, qa = function(t) {
  var r = ++q5;
  return "".concat(t || "").concat(r);
}, gr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!pe(t) && !tc(t))
    return n;
  var a;
  if (_a(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return tu(a) && (a = n), i && a > r && (a = r), a;
}, zi = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, F5 = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Ht = function(t, r) {
  return pe(t) && pe(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Bl(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Hr(n, t)) === r;
  });
}
var Jne = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, l = -1 / 0, f = 0, p = 0, d = 0; d < r; d++)
    f = t[d].cx || 0, p = t[d].cy || 0, n += f, i += p, a += f * p, o += f * f, s = Math.min(s, f), l = Math.max(l, f);
  var v = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: l,
    a: v,
    b: (i - v * n) / r
  };
};
function xo(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function vy(e) {
  "@babel/helpers - typeof";
  return vy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vy(e);
}
var W5 = ["viewBox", "children"], z5 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], dO = ["points", "pathLength"], Zh = {
  svg: W5,
  polygon: dO,
  polyline: dO
}, o0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], ql = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Cn(t) && (n = t.props), !eu(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    o0.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, U5 = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Da = function(t, r, n) {
  if (!eu(t) || vy(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    o0.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = U5(o, r, n));
  }), i;
}, H5 = ["children"], G5 = ["children"];
function pO(e, t) {
  if (e == null) return {};
  var r = K5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function K5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function my(e) {
  "@babel/helpers - typeof";
  return my = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, my(e);
}
var hO = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, yi = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, vO = null, Jh = null, u0 = function e(t) {
  if (t === vO && Array.isArray(Jh))
    return Jh;
  var r = [];
  return Ta.forEach(t, function(n) {
    $e(n) || ($5.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Jh = r, vO = t, r;
};
function Gr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return yi(i);
  }) : n = [yi(t)], u0(e).forEach(function(i) {
    var a = Hr(i, "type.displayName") || Hr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function zr(e, t) {
  var r = Gr(e, t);
  return r && r[0];
}
var mO = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!pe(n) || n <= 0 || !pe(i) || i <= 0);
}, V5 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Y5 = function(t) {
  return t && t.type && tc(t.type) && V5.indexOf(t.type) >= 0;
}, r2 = function(t) {
  return t && my(t) === "object" && "clipDot" in t;
}, X5 = function(t, r, n, i) {
  var a, o = (a = Zh == null ? void 0 : Zh[i]) !== null && a !== void 0 ? a : [];
  return !Ne(t) && (i && o.includes(r) || z5.includes(r)) || n && o0.includes(r);
}, Te = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Cn(t) && (i = t.props), !eu(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    X5((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, gy = function e(t, r) {
  if (t === r)
    return !0;
  var n = Ta.count(t);
  if (n !== Ta.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return gO(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!gO(a, o))
      return !1;
  }
  return !0;
}, gO = function(t, r) {
  if ($e(t) && $e(r))
    return !0;
  if (!$e(t) && !$e(r)) {
    var n = t.props || {}, i = n.children, a = pO(n, H5), o = r.props || {}, s = o.children, l = pO(o, G5);
    return i && s ? xo(a, l) && gy(i, s) : !i && !s ? xo(a, l) : !1;
  }
  return !1;
}, yO = function(t, r) {
  var n = [], i = {};
  return u0(t).forEach(function(a, o) {
    if (Y5(a))
      n.push(a);
    else if (a) {
      var s = yi(a.type), l = r[s] || {}, f = l.handler, p = l.once;
      if (f && (!p || !i[s])) {
        var d = f(a, s, o);
        n.push(d), i[s] = !0;
      }
    }
  }), n;
}, Z5 = function(t) {
  var r = t && t.type;
  return r && hO[r] ? hO[r] : null;
}, J5 = function(t, r) {
  return u0(r).indexOf(t);
}, Q5 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function yy() {
  return yy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yy.apply(this, arguments);
}
function e6(e, t) {
  if (e == null) return {};
  var r = t6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function by(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, l = e.desc, f = e6(e, Q5), p = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, d = Be("recharts-surface", a);
  return /* @__PURE__ */ k.createElement("svg", yy({}, Te(f, !0, "svg"), {
    className: d,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(p.x, " ").concat(p.y, " ").concat(p.width, " ").concat(p.height)
  }), /* @__PURE__ */ k.createElement("title", null, s), /* @__PURE__ */ k.createElement("desc", null, l), t);
}
var r6 = ["children", "className"];
function xy() {
  return xy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xy.apply(this, arguments);
}
function n6(e, t) {
  if (e == null) return {};
  var r = i6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ge = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = n6(e, r6), a = Be("recharts-layer", n);
  return /* @__PURE__ */ k.createElement("g", xy({
    className: a
  }, Te(i, !0), {
    ref: t
  }), r);
}), a6 = process.env.NODE_ENV !== "production", In = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (a6 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, Qh, bO;
function o6() {
  if (bO) return Qh;
  bO = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return Qh = e, Qh;
}
var ev, xO;
function u6() {
  if (xO) return ev;
  xO = 1;
  var e = o6();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return ev = t, ev;
}
var tv, wO;
function n2() {
  if (wO) return tv;
  wO = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + i + a + "]");
  function l(f) {
    return s.test(f);
  }
  return tv = l, tv;
}
var rv, _O;
function s6() {
  if (_O) return rv;
  _O = 1;
  function e(t) {
    return t.split("");
  }
  return rv = e, rv;
}
var nv, OO;
function c6() {
  if (OO) return nv;
  OO = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + i + "]", l = "\\ud83c[\\udffb-\\udfff]", f = "(?:" + s + "|" + l + ")", p = "[^" + e + "]", d = "(?:\\ud83c[\\udde6-\\uddff]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", m = "\\u200d", g = f + "?", b = "[" + a + "]?", y = "(?:" + m + "(?:" + [p, d, v].join("|") + ")" + b + g + ")*", _ = b + g + y, O = "(?:" + [p + s + "?", s, d, v, o].join("|") + ")", S = RegExp(l + "(?=" + l + ")|" + O + _, "g");
  function P(x) {
    return x.match(S) || [];
  }
  return nv = P, nv;
}
var iv, SO;
function l6() {
  if (SO) return iv;
  SO = 1;
  var e = s6(), t = n2(), r = c6();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return iv = n, iv;
}
var av, AO;
function f6() {
  if (AO) return av;
  AO = 1;
  var e = u6(), t = n2(), r = l6(), n = JI();
  function i(a) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, l = s ? s[0] : o.charAt(0), f = s ? e(s, 1).join("") : o.slice(1);
      return l[a]() + f;
    };
  }
  return av = i, av;
}
var ov, PO;
function d6() {
  if (PO) return ov;
  PO = 1;
  var e = f6(), t = e("toUpperCase");
  return ov = t, ov;
}
var p6 = d6();
const Jf = /* @__PURE__ */ ut(p6);
function pt(e) {
  return function() {
    return e;
  };
}
const i2 = Math.cos, Fl = Math.sin, $n = Math.sqrt, Wl = Math.PI, Qf = 2 * Wl, wy = Math.PI, _y = 2 * wy, ba = 1e-6, h6 = _y - ba;
function a2(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function v6(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return a2;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class m6 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? a2 : v6(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = n - t, f = i - r, p = o - t, d = s - r, v = p * p + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > ba) if (!(Math.abs(d * l - f * p) > ba) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let m = n - o, g = i - s, b = l * l + f * f, y = m * m + g * g, _ = Math.sqrt(b), O = Math.sqrt(v), S = a * Math.tan((wy - Math.acos((b + v - y) / (2 * _ * O))) / 2), P = S / O, x = S / _;
      Math.abs(P - 1) > ba && this._append`L${t + P * p},${r + P * d}`, this._append`A${a},${a},0,0,${+(d * m > p * g)},${this._x1 = t + x * l},${this._y1 = r + x * f}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), f = t + s, p = r + l, d = 1 ^ o, v = o ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${p}` : (Math.abs(this._x1 - f) > ba || Math.abs(this._y1 - p) > ba) && this._append`L${f},${p}`, n && (v < 0 && (v = v % _y + _y), v > h6 ? this._append`A${n},${n},0,1,${d},${t - s},${r - l}A${n},${n},0,1,${d},${this._x1 = f},${this._y1 = p}` : v > ba && this._append`A${n},${n},0,${+(v >= wy)},${d},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function s0(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new m6(t);
}
function c0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function o2(e) {
  this._context = e;
}
o2.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function ed(e) {
  return new o2(e);
}
function u2(e) {
  return e[0];
}
function s2(e) {
  return e[1];
}
function c2(e, t) {
  var r = pt(!0), n = null, i = ed, a = null, o = s0(s);
  e = typeof e == "function" ? e : e === void 0 ? u2 : pt(e), t = typeof t == "function" ? t : t === void 0 ? s2 : pt(t);
  function s(l) {
    var f, p = (l = c0(l)).length, d, v = !1, m;
    for (n == null && (a = i(m = o())), f = 0; f <= p; ++f)
      !(f < p && r(d = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(d, f, l), +t(d, f, l));
    if (m) return a = null, m + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : pt(+l), s) : e;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : pt(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : pt(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), s) : n;
  }, s;
}
function vl(e, t, r) {
  var n = null, i = pt(!0), a = null, o = ed, s = null, l = s0(f);
  e = typeof e == "function" ? e : e === void 0 ? u2 : pt(+e), t = typeof t == "function" ? t : pt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? s2 : pt(+r);
  function f(d) {
    var v, m, g, b = (d = c0(d)).length, y, _ = !1, O, S = new Array(b), P = new Array(b);
    for (a == null && (s = o(O = l())), v = 0; v <= b; ++v) {
      if (!(v < b && i(y = d[v], v, d)) === _)
        if (_ = !_)
          m = v, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), g = v - 1; g >= m; --g)
            s.point(S[g], P[g]);
          s.lineEnd(), s.areaEnd();
        }
      _ && (S[v] = +e(y, v, d), P[v] = +t(y, v, d), s.point(n ? +n(y, v, d) : S[v], r ? +r(y, v, d) : P[v]));
    }
    if (O) return s = null, O + "" || null;
  }
  function p() {
    return c2().defined(i).curve(o).context(a);
  }
  return f.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : pt(+d), n = null, f) : e;
  }, f.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : pt(+d), f) : e;
  }, f.x1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : pt(+d), f) : n;
  }, f.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : pt(+d), r = null, f) : t;
  }, f.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : pt(+d), f) : t;
  }, f.y1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : pt(+d), f) : r;
  }, f.lineX0 = f.lineY0 = function() {
    return p().x(e).y(t);
  }, f.lineY1 = function() {
    return p().x(e).y(r);
  }, f.lineX1 = function() {
    return p().x(n).y(t);
  }, f.defined = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : pt(!!d), f) : i;
  }, f.curve = function(d) {
    return arguments.length ? (o = d, a != null && (s = o(a)), f) : o;
  }, f.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = o(a = d), f) : a;
  }, f;
}
class l2 {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function g6(e) {
  return new l2(e, !0);
}
function y6(e) {
  return new l2(e, !1);
}
const l0 = {
  draw(e, t) {
    const r = $n(t / Wl);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Qf);
  }
}, b6 = {
  draw(e, t) {
    const r = $n(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, f2 = $n(1 / 3), x6 = f2 * 2, w6 = {
  draw(e, t) {
    const r = $n(t / x6), n = r * f2;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, _6 = {
  draw(e, t) {
    const r = $n(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, O6 = 0.8908130915292852, d2 = Fl(Wl / 10) / Fl(7 * Wl / 10), S6 = Fl(Qf / 10) * d2, A6 = -i2(Qf / 10) * d2, P6 = {
  draw(e, t) {
    const r = $n(t * O6), n = S6 * r, i = A6 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Qf * a / 5, s = i2(o), l = Fl(o);
      e.lineTo(l * r, -s * r), e.lineTo(s * n - l * i, l * n + s * i);
    }
    e.closePath();
  }
}, uv = $n(3), T6 = {
  draw(e, t) {
    const r = -$n(t / (uv * 3));
    e.moveTo(0, r * 2), e.lineTo(-uv * r, -r), e.lineTo(uv * r, -r), e.closePath();
  }
}, nn = -0.5, an = $n(3) / 2, Oy = 1 / $n(12), E6 = (Oy / 2 + 1) * 3, C6 = {
  draw(e, t) {
    const r = $n(t / E6), n = r / 2, i = r * Oy, a = n, o = r * Oy + r, s = -a, l = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, l), e.lineTo(nn * n - an * i, an * n + nn * i), e.lineTo(nn * a - an * o, an * a + nn * o), e.lineTo(nn * s - an * l, an * s + nn * l), e.lineTo(nn * n + an * i, nn * i - an * n), e.lineTo(nn * a + an * o, nn * o - an * a), e.lineTo(nn * s + an * l, nn * l - an * s), e.closePath();
  }
};
function I6(e, t) {
  let r = null, n = s0(i);
  e = typeof e == "function" ? e : pt(e || l0), t = typeof t == "function" ? t : pt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : pt(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : pt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function zl() {
}
function Ul(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function p2(e) {
  this._context = e;
}
p2.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Ul(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Ul(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function M6(e) {
  return new p2(e);
}
function h2(e) {
  this._context = e;
}
h2.prototype = {
  areaStart: zl,
  areaEnd: zl,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ul(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function R6(e) {
  return new h2(e);
}
function v2(e) {
  this._context = e;
}
v2.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Ul(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function D6(e) {
  return new v2(e);
}
function m2(e) {
  this._context = e;
}
m2.prototype = {
  areaStart: zl,
  areaEnd: zl,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function N6(e) {
  return new m2(e);
}
function TO(e) {
  return e < 0 ? -1 : 1;
}
function EO(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (TO(a) + TO(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function CO(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function sv(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Hl(e) {
  this._context = e;
}
Hl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        sv(this, this._t0, CO(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, sv(this, CO(this, r = EO(this, e, t)), r);
          break;
        default:
          sv(this, this._t0, r = EO(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function g2(e) {
  this._context = new y2(e);
}
(g2.prototype = Object.create(Hl.prototype)).point = function(e, t) {
  Hl.prototype.point.call(this, t, e);
};
function y2(e) {
  this._context = e;
}
y2.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function $6(e) {
  return new Hl(e);
}
function j6(e) {
  return new g2(e);
}
function b2(e) {
  this._context = e;
}
b2.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = IO(e), i = IO(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function IO(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function k6(e) {
  return new b2(e);
}
function td(e, t) {
  this._context = e, this._t = t;
}
td.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function L6(e) {
  return new td(e, 0.5);
}
function B6(e) {
  return new td(e, 0);
}
function q6(e) {
  return new td(e, 1);
}
function So(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Sy(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function F6(e, t) {
  return e[t];
}
function W6(e) {
  const t = [];
  return t.key = e, t;
}
function z6() {
  var e = pt([]), t = Sy, r = So, n = F6;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), W6), s, l = o.length, f = -1, p;
    for (const d of a)
      for (s = 0, ++f; s < l; ++s)
        (o[s][f] = [0, +n(d, o[s].key, f, a)]).data = d;
    for (s = 0, p = c0(t(o)); s < l; ++s)
      o[p[s]].index = s;
    return r(o, p), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : pt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : pt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Sy : typeof a == "function" ? a : pt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? So, i) : r;
  }, i;
}
function U6(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    So(e, t);
  }
}
function H6(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    So(e, t);
  }
}
function G6(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, l = 0, f = 0; s < o; ++s) {
        for (var p = e[t[s]], d = p[n][1] || 0, v = p[n - 1][1] || 0, m = (d - v) / 2, g = 0; g < s; ++g) {
          var b = e[t[g]], y = b[n][1] || 0, _ = b[n - 1][1] || 0;
          m += y - _;
        }
        l += d, f += m * d;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, So(e, t);
  }
}
function ls(e) {
  "@babel/helpers - typeof";
  return ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ls(e);
}
var K6 = ["type", "size", "sizeType"];
function Ay() {
  return Ay = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ay.apply(this, arguments);
}
function MO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function RO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? MO(Object(r), !0).forEach(function(n) {
      V6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V6(e, t, r) {
  return t = Y6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y6(e) {
  var t = X6(e, "string");
  return ls(t) == "symbol" ? t : t + "";
}
function X6(e, t) {
  if (ls(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ls(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z6(e, t) {
  if (e == null) return {};
  var r = J6(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function J6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var x2 = {
  symbolCircle: l0,
  symbolCross: b6,
  symbolDiamond: w6,
  symbolSquare: _6,
  symbolStar: P6,
  symbolTriangle: T6,
  symbolWye: C6
}, Q6 = Math.PI / 180, e4 = function(t) {
  var r = "symbol".concat(Jf(t));
  return x2[r] || l0;
}, t4 = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * Q6;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, r4 = function(t, r) {
  x2["symbol".concat(Jf(t))] = r;
}, f0 = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, l = Z6(t, K6), f = RO(RO({}, l), {}, {
    type: n,
    size: a,
    sizeType: s
  }), p = function() {
    var y = e4(n), _ = I6().type(y).size(t4(a, s, n));
    return _();
  }, d = f.className, v = f.cx, m = f.cy, g = Te(f, !0);
  return v === +v && m === +m && a === +a ? /* @__PURE__ */ k.createElement("path", Ay({}, g, {
    className: Be("recharts-symbols", d),
    transform: "translate(".concat(v, ", ").concat(m, ")"),
    d: p()
  })) : null;
};
f0.registerSymbol = r4;
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
function Py() {
  return Py = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Py.apply(this, arguments);
}
function DO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function n4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? DO(Object(r), !0).forEach(function(n) {
      fs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _2(n.key), n);
  }
}
function o4(e, t, r) {
  return t && a4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u4(e, t, r) {
  return t = Gl(t), s4(e, w2() ? Reflect.construct(t, r || [], Gl(e).constructor) : t.apply(e, r));
}
function s4(e, t) {
  if (t && (Ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c4(e);
}
function c4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (w2 = function() {
    return !!e;
  })();
}
function Gl(e) {
  return Gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Gl(e);
}
function l4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ty(e, t);
}
function Ty(e, t) {
  return Ty = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ty(e, t);
}
function fs(e, t, r) {
  return t = _2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _2(e) {
  var t = f4(e, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function f4(e, t) {
  if (Ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var On = 32, d0 = /* @__PURE__ */ function(e) {
  function t() {
    return i4(this, t), u4(this, t, arguments);
  }
  return l4(t, e), o4(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = On / 2, o = On / 6, s = On / 3, l = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ k.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: On,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ k.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(On, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ k.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(On / 8, "h").concat(On, "v").concat(On * 3 / 4, "h").concat(-32, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ k.isValidElement(n.legendIcon)) {
          var f = n4({}, n);
          return delete f.legendIcon, /* @__PURE__ */ k.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ k.createElement(f0, {
          fill: l,
          cx: a,
          cy: a,
          size: On,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, l = i.formatter, f = i.inactiveColor, p = {
        x: 0,
        y: 0,
        width: On,
        height: On
      }, d = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(m, g) {
        var b = m.formatter || l, y = Be(fs(fs({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", m.inactive));
        if (m.type === "none")
          return null;
        var _ = Ne(m.value) ? null : m.value;
        In(
          !Ne(m.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = m.inactive ? f : m.color;
        return /* @__PURE__ */ k.createElement("li", Py({
          className: y,
          style: d,
          key: "legend-item-".concat(g)
        }, Da(n.props, m, g)), /* @__PURE__ */ k.createElement(by, {
          width: o,
          height: o,
          viewBox: p,
          style: v
        }, n.renderIcon(m)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, b ? b(_, m, g) : _));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(dn);
fs(d0, "displayName", "Legend");
fs(d0, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var cv, NO;
function d4() {
  if (NO) return cv;
  NO = 1;
  var e = Yf();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return cv = t, cv;
}
var lv, $O;
function p4() {
  if ($O) return lv;
  $O = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return lv = e, lv;
}
var fv, jO;
function h4() {
  if (jO) return fv;
  jO = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return fv = e, fv;
}
var dv, kO;
function v4() {
  if (kO) return dv;
  kO = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return dv = e, dv;
}
var pv, LO;
function m4() {
  if (LO) return pv;
  LO = 1;
  var e = Yf(), t = r0(), r = n0(), n = 200;
  function i(a, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < n - 1)
        return l.push([a, o]), this.size = ++s.size, this;
      s = this.__data__ = new r(l);
    }
    return s.set(a, o), this.size = s.size, this;
  }
  return pv = i, pv;
}
var hv, BO;
function O2() {
  if (BO) return hv;
  BO = 1;
  var e = Yf(), t = d4(), r = p4(), n = h4(), i = v4(), a = m4();
  function o(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, hv = o, hv;
}
var vv, qO;
function g4() {
  if (qO) return vv;
  qO = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return vv = t, vv;
}
var mv, FO;
function y4() {
  if (FO) return mv;
  FO = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return mv = e, mv;
}
var gv, WO;
function S2() {
  if (WO) return gv;
  WO = 1;
  var e = n0(), t = g4(), r = y4();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, gv = n, gv;
}
var yv, zO;
function A2() {
  if (zO) return yv;
  zO = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return yv = e, yv;
}
var bv, UO;
function P2() {
  if (UO) return bv;
  UO = 1;
  function e(t, r) {
    return t.has(r);
  }
  return bv = e, bv;
}
var xv, HO;
function T2() {
  if (HO) return xv;
  HO = 1;
  var e = S2(), t = A2(), r = P2(), n = 1, i = 2;
  function a(o, s, l, f, p, d) {
    var v = l & n, m = o.length, g = s.length;
    if (m != g && !(v && g > m))
      return !1;
    var b = d.get(o), y = d.get(s);
    if (b && y)
      return b == s && y == o;
    var _ = -1, O = !0, S = l & i ? new e() : void 0;
    for (d.set(o, s), d.set(s, o); ++_ < m; ) {
      var P = o[_], x = s[_];
      if (f)
        var A = v ? f(x, P, _, s, o, d) : f(P, x, _, o, s, d);
      if (A !== void 0) {
        if (A)
          continue;
        O = !1;
        break;
      }
      if (S) {
        if (!t(s, function(C, M) {
          if (!r(S, M) && (P === C || p(P, C, l, f, d)))
            return S.push(M);
        })) {
          O = !1;
          break;
        }
      } else if (!(P === x || p(P, x, l, f, d))) {
        O = !1;
        break;
      }
    }
    return d.delete(o), d.delete(s), O;
  }
  return xv = a, xv;
}
var wv, GO;
function b4() {
  if (GO) return wv;
  GO = 1;
  var e = Xn(), t = e.Uint8Array;
  return wv = t, wv;
}
var _v, KO;
function x4() {
  if (KO) return _v;
  KO = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return _v = e, _v;
}
var Ov, VO;
function p0() {
  if (VO) return Ov;
  VO = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Ov = e, Ov;
}
var Sv, YO;
function w4() {
  if (YO) return Sv;
  YO = 1;
  var e = ec(), t = b4(), r = t0(), n = T2(), i = x4(), a = p0(), o = 1, s = 2, l = "[object Boolean]", f = "[object Date]", p = "[object Error]", d = "[object Map]", v = "[object Number]", m = "[object RegExp]", g = "[object Set]", b = "[object String]", y = "[object Symbol]", _ = "[object ArrayBuffer]", O = "[object DataView]", S = e ? e.prototype : void 0, P = S ? S.valueOf : void 0;
  function x(A, C, M, N, z, D, W) {
    switch (M) {
      case O:
        if (A.byteLength != C.byteLength || A.byteOffset != C.byteOffset)
          return !1;
        A = A.buffer, C = C.buffer;
      case _:
        return !(A.byteLength != C.byteLength || !D(new t(A), new t(C)));
      case l:
      case f:
      case v:
        return r(+A, +C);
      case p:
        return A.name == C.name && A.message == C.message;
      case m:
      case b:
        return A == C + "";
      case d:
        var q = i;
      case g:
        var $ = N & o;
        if (q || (q = a), A.size != C.size && !$)
          return !1;
        var j = W.get(A);
        if (j)
          return j == C;
        N |= s, W.set(A, C);
        var F = n(q(A), q(C), N, z, D, W);
        return W.delete(A), F;
      case y:
        if (P)
          return P.call(A) == P.call(C);
    }
    return !1;
  }
  return Sv = x, Sv;
}
var Av, XO;
function E2() {
  if (XO) return Av;
  XO = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return Av = e, Av;
}
var Pv, ZO;
function _4() {
  if (ZO) return Pv;
  ZO = 1;
  var e = E2(), t = Rr();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return Pv = r, Pv;
}
var Tv, JO;
function O4() {
  if (JO) return Tv;
  JO = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (o[a++] = s);
    }
    return o;
  }
  return Tv = e, Tv;
}
var Ev, QO;
function S4() {
  if (QO) return Ev;
  QO = 1;
  function e() {
    return [];
  }
  return Ev = e, Ev;
}
var Cv, eS;
function A4() {
  if (eS) return Cv;
  eS = 1;
  var e = O4(), t = S4(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return Cv = a, Cv;
}
var Iv, tS;
function P4() {
  if (tS) return Iv;
  tS = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return Iv = e, Iv;
}
var Mv, rS;
function T4() {
  if (rS) return Mv;
  rS = 1;
  var e = Oi(), t = Si(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Mv = n, Mv;
}
var Rv, nS;
function h0() {
  if (nS) return Rv;
  nS = 1;
  var e = T4(), t = Si(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return Rv = a, Rv;
}
var Yu = { exports: {} }, Dv, iS;
function E4() {
  if (iS) return Dv;
  iS = 1;
  function e() {
    return !1;
  }
  return Dv = e, Dv;
}
Yu.exports;
var aS;
function C2() {
  return aS || (aS = 1, function(e, t) {
    var r = Xn(), n = E4(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, f = l || n;
    e.exports = f;
  }(Yu, Yu.exports)), Yu.exports;
}
var Nv, oS;
function v0() {
  if (oS) return Nv;
  oS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Nv = r, Nv;
}
var $v, uS;
function m0() {
  if (uS) return $v;
  uS = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return $v = t, $v;
}
var jv, sS;
function C4() {
  if (sS) return jv;
  sS = 1;
  var e = Oi(), t = m0(), r = Si(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", s = "[object Error]", l = "[object Function]", f = "[object Map]", p = "[object Number]", d = "[object Object]", v = "[object RegExp]", m = "[object Set]", g = "[object String]", b = "[object WeakMap]", y = "[object ArrayBuffer]", _ = "[object DataView]", O = "[object Float32Array]", S = "[object Float64Array]", P = "[object Int8Array]", x = "[object Int16Array]", A = "[object Int32Array]", C = "[object Uint8Array]", M = "[object Uint8ClampedArray]", N = "[object Uint16Array]", z = "[object Uint32Array]", D = {};
  D[O] = D[S] = D[P] = D[x] = D[A] = D[C] = D[M] = D[N] = D[z] = !0, D[n] = D[i] = D[y] = D[a] = D[_] = D[o] = D[s] = D[l] = D[f] = D[p] = D[d] = D[v] = D[m] = D[g] = D[b] = !1;
  function W(q) {
    return r(q) && t(q.length) && !!D[e(q)];
  }
  return jv = W, jv;
}
var kv, cS;
function I2() {
  if (cS) return kv;
  cS = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return kv = e, kv;
}
var Xu = { exports: {} };
Xu.exports;
var lS;
function I4() {
  return lS || (lS = 1, function(e, t) {
    var r = YI(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Xu, Xu.exports)), Xu.exports;
}
var Lv, fS;
function M2() {
  if (fS) return Lv;
  fS = 1;
  var e = C4(), t = I2(), r = I4(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Lv = i, Lv;
}
var Bv, dS;
function M4() {
  if (dS) return Bv;
  dS = 1;
  var e = P4(), t = h0(), r = Rr(), n = C2(), i = v0(), a = M2(), o = Object.prototype, s = o.hasOwnProperty;
  function l(f, p) {
    var d = r(f), v = !d && t(f), m = !d && !v && n(f), g = !d && !v && !m && a(f), b = d || v || m || g, y = b ? e(f.length, String) : [], _ = y.length;
    for (var O in f)
      (p || s.call(f, O)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      m && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      g && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
      i(O, _))) && y.push(O);
    return y;
  }
  return Bv = l, Bv;
}
var qv, pS;
function R4() {
  if (pS) return qv;
  pS = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return qv = t, qv;
}
var Fv, hS;
function R2() {
  if (hS) return Fv;
  hS = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Fv = e, Fv;
}
var Wv, vS;
function D4() {
  if (vS) return Wv;
  vS = 1;
  var e = R2(), t = e(Object.keys, Object);
  return Wv = t, Wv;
}
var zv, mS;
function N4() {
  if (mS) return zv;
  mS = 1;
  var e = R4(), t = D4(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && o.push(s);
    return o;
  }
  return zv = i, zv;
}
var Uv, gS;
function rc() {
  if (gS) return Uv;
  gS = 1;
  var e = e0(), t = m0();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Uv = r, Uv;
}
var Hv, yS;
function rd() {
  if (yS) return Hv;
  yS = 1;
  var e = M4(), t = N4(), r = rc();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return Hv = n, Hv;
}
var Gv, bS;
function $4() {
  if (bS) return Gv;
  bS = 1;
  var e = _4(), t = A4(), r = rd();
  function n(i) {
    return e(i, r, t);
  }
  return Gv = n, Gv;
}
var Kv, xS;
function j4() {
  if (xS) return Kv;
  xS = 1;
  var e = $4(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, s, l, f, p) {
    var d = s & t, v = e(a), m = v.length, g = e(o), b = g.length;
    if (m != b && !d)
      return !1;
    for (var y = m; y--; ) {
      var _ = v[y];
      if (!(d ? _ in o : n.call(o, _)))
        return !1;
    }
    var O = p.get(a), S = p.get(o);
    if (O && S)
      return O == o && S == a;
    var P = !0;
    p.set(a, o), p.set(o, a);
    for (var x = d; ++y < m; ) {
      _ = v[y];
      var A = a[_], C = o[_];
      if (l)
        var M = d ? l(C, A, _, o, a, p) : l(A, C, _, a, o, p);
      if (!(M === void 0 ? A === C || f(A, C, s, l, p) : M)) {
        P = !1;
        break;
      }
      x || (x = _ == "constructor");
    }
    if (P && !x) {
      var N = a.constructor, z = o.constructor;
      N != z && "constructor" in a && "constructor" in o && !(typeof N == "function" && N instanceof N && typeof z == "function" && z instanceof z) && (P = !1);
    }
    return p.delete(a), p.delete(o), P;
  }
  return Kv = i, Kv;
}
var Vv, wS;
function k4() {
  if (wS) return Vv;
  wS = 1;
  var e = Ba(), t = Xn(), r = e(t, "DataView");
  return Vv = r, Vv;
}
var Yv, _S;
function L4() {
  if (_S) return Yv;
  _S = 1;
  var e = Ba(), t = Xn(), r = e(t, "Promise");
  return Yv = r, Yv;
}
var Xv, OS;
function D2() {
  if (OS) return Xv;
  OS = 1;
  var e = Ba(), t = Xn(), r = e(t, "Set");
  return Xv = r, Xv;
}
var Zv, SS;
function B4() {
  if (SS) return Zv;
  SS = 1;
  var e = Ba(), t = Xn(), r = e(t, "WeakMap");
  return Zv = r, Zv;
}
var Jv, AS;
function q4() {
  if (AS) return Jv;
  AS = 1;
  var e = k4(), t = r0(), r = L4(), n = D2(), i = B4(), a = Oi(), o = XI(), s = "[object Map]", l = "[object Object]", f = "[object Promise]", p = "[object Set]", d = "[object WeakMap]", v = "[object DataView]", m = o(e), g = o(t), b = o(r), y = o(n), _ = o(i), O = a;
  return (e && O(new e(new ArrayBuffer(1))) != v || t && O(new t()) != s || r && O(r.resolve()) != f || n && O(new n()) != p || i && O(new i()) != d) && (O = function(S) {
    var P = a(S), x = P == l ? S.constructor : void 0, A = x ? o(x) : "";
    if (A)
      switch (A) {
        case m:
          return v;
        case g:
          return s;
        case b:
          return f;
        case y:
          return p;
        case _:
          return d;
      }
    return P;
  }), Jv = O, Jv;
}
var Qv, PS;
function F4() {
  if (PS) return Qv;
  PS = 1;
  var e = O2(), t = T2(), r = w4(), n = j4(), i = q4(), a = Rr(), o = C2(), s = M2(), l = 1, f = "[object Arguments]", p = "[object Array]", d = "[object Object]", v = Object.prototype, m = v.hasOwnProperty;
  function g(b, y, _, O, S, P) {
    var x = a(b), A = a(y), C = x ? p : i(b), M = A ? p : i(y);
    C = C == f ? d : C, M = M == f ? d : M;
    var N = C == d, z = M == d, D = C == M;
    if (D && o(b)) {
      if (!o(y))
        return !1;
      x = !0, N = !1;
    }
    if (D && !N)
      return P || (P = new e()), x || s(b) ? t(b, y, _, O, S, P) : r(b, y, C, _, O, S, P);
    if (!(_ & l)) {
      var W = N && m.call(b, "__wrapped__"), q = z && m.call(y, "__wrapped__");
      if (W || q) {
        var $ = W ? b.value() : b, j = q ? y.value() : y;
        return P || (P = new e()), S($, j, _, O, P);
      }
    }
    return D ? (P || (P = new e()), n(b, y, _, O, S, P)) : !1;
  }
  return Qv = g, Qv;
}
var em, TS;
function g0() {
  if (TS) return em;
  TS = 1;
  var e = F4(), t = Si();
  function r(n, i, a, o, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, s);
  }
  return em = r, em;
}
var tm, ES;
function W4() {
  if (ES) return tm;
  ES = 1;
  var e = O2(), t = g0(), r = 1, n = 2;
  function i(a, o, s, l) {
    var f = s.length, p = f, d = !l;
    if (a == null)
      return !p;
    for (a = Object(a); f--; ) {
      var v = s[f];
      if (d && v[2] ? v[1] !== a[v[0]] : !(v[0] in a))
        return !1;
    }
    for (; ++f < p; ) {
      v = s[f];
      var m = v[0], g = a[m], b = v[1];
      if (d && v[2]) {
        if (g === void 0 && !(m in a))
          return !1;
      } else {
        var y = new e();
        if (l)
          var _ = l(g, b, m, a, o, y);
        if (!(_ === void 0 ? t(b, g, r | n, l, y) : _))
          return !1;
      }
    }
    return !0;
  }
  return tm = i, tm;
}
var rm, CS;
function N2() {
  if (CS) return rm;
  CS = 1;
  var e = Zi();
  function t(r) {
    return r === r && !e(r);
  }
  return rm = t, rm;
}
var nm, IS;
function z4() {
  if (IS) return nm;
  IS = 1;
  var e = N2(), t = rd();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], s = n[o];
      i[a] = [o, s, e(s)];
    }
    return i;
  }
  return nm = r, nm;
}
var im, MS;
function $2() {
  if (MS) return im;
  MS = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return im = e, im;
}
var am, RS;
function U4() {
  if (RS) return am;
  RS = 1;
  var e = W4(), t = z4(), r = $2();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return am = n, am;
}
var om, DS;
function H4() {
  if (DS) return om;
  DS = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return om = e, om;
}
var um, NS;
function G4() {
  if (NS) return um;
  NS = 1;
  var e = QI(), t = h0(), r = Rr(), n = v0(), i = m0(), a = Zf();
  function o(s, l, f) {
    l = e(l, s);
    for (var p = -1, d = l.length, v = !1; ++p < d; ) {
      var m = a(l[p]);
      if (!(v = s != null && f(s, m)))
        break;
      s = s[m];
    }
    return v || ++p != d ? v : (d = s == null ? 0 : s.length, !!d && i(d) && n(m, d) && (r(s) || t(s)));
  }
  return um = o, um;
}
var sm, $S;
function K4() {
  if ($S) return sm;
  $S = 1;
  var e = H4(), t = G4();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return sm = r, sm;
}
var cm, jS;
function V4() {
  if (jS) return cm;
  jS = 1;
  var e = g0(), t = e2(), r = K4(), n = Qb(), i = N2(), a = $2(), o = Zf(), s = 1, l = 2;
  function f(p, d) {
    return n(p) && i(d) ? a(o(p), d) : function(v) {
      var m = t(v, p);
      return m === void 0 && m === d ? r(v, p) : e(d, m, s | l);
    };
  }
  return cm = f, cm;
}
var lm, kS;
function ru() {
  if (kS) return lm;
  kS = 1;
  function e(t) {
    return t;
  }
  return lm = e, lm;
}
var fm, LS;
function Y4() {
  if (LS) return fm;
  LS = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return fm = e, fm;
}
var dm, BS;
function X4() {
  if (BS) return dm;
  BS = 1;
  var e = a0();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return dm = t, dm;
}
var pm, qS;
function Z4() {
  if (qS) return pm;
  qS = 1;
  var e = Y4(), t = X4(), r = Qb(), n = Zf();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return pm = i, pm;
}
var hm, FS;
function Zn() {
  if (FS) return hm;
  FS = 1;
  var e = U4(), t = V4(), r = ru(), n = Rr(), i = Z4();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return hm = a, hm;
}
var vm, WS;
function j2() {
  if (WS) return vm;
  WS = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return vm = e, vm;
}
var mm, zS;
function J4() {
  if (zS) return mm;
  zS = 1;
  function e(t) {
    return t !== t;
  }
  return mm = e, mm;
}
var gm, US;
function Q4() {
  if (US) return gm;
  US = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return gm = e, gm;
}
var ym, HS;
function e8() {
  if (HS) return ym;
  HS = 1;
  var e = j2(), t = J4(), r = Q4();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return ym = n, ym;
}
var bm, GS;
function t8() {
  if (GS) return bm;
  GS = 1;
  var e = e8();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return bm = t, bm;
}
var xm, KS;
function r8() {
  if (KS) return xm;
  KS = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return xm = e, xm;
}
var wm, VS;
function n8() {
  if (VS) return wm;
  VS = 1;
  function e() {
  }
  return wm = e, wm;
}
var _m, YS;
function i8() {
  if (YS) return _m;
  YS = 1;
  var e = D2(), t = n8(), r = p0(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return _m = i, _m;
}
var Om, XS;
function a8() {
  if (XS) return Om;
  XS = 1;
  var e = S2(), t = t8(), r = r8(), n = P2(), i = i8(), a = p0(), o = 200;
  function s(l, f, p) {
    var d = -1, v = t, m = l.length, g = !0, b = [], y = b;
    if (p)
      g = !1, v = r;
    else if (m >= o) {
      var _ = f ? null : i(l);
      if (_)
        return a(_);
      g = !1, v = n, y = new e();
    } else
      y = f ? [] : b;
    e:
      for (; ++d < m; ) {
        var O = l[d], S = f ? f(O) : O;
        if (O = p || O !== 0 ? O : 0, g && S === S) {
          for (var P = y.length; P--; )
            if (y[P] === S)
              continue e;
          f && y.push(S), b.push(O);
        } else v(y, S, p) || (y !== b && y.push(S), b.push(O));
      }
    return b;
  }
  return Om = s, Om;
}
var Sm, ZS;
function o8() {
  if (ZS) return Sm;
  ZS = 1;
  var e = Zn(), t = a8();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return Sm = r, Sm;
}
var u8 = o8();
const JS = /* @__PURE__ */ ut(u8);
function k2(e, t, r) {
  return t === !0 ? JS(e, r) : Ne(t) ? JS(e, t) : e;
}
function Po(e) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
var s8 = ["ref"];
function QS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? QS(Object(r), !0).forEach(function(n) {
      nd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : QS(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, B2(n.key), n);
  }
}
function l8(e, t, r) {
  return t && eA(e.prototype, t), r && eA(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function f8(e, t, r) {
  return t = Kl(t), d8(e, L2() ? Reflect.construct(t, r || [], Kl(e).constructor) : t.apply(e, r));
}
function d8(e, t) {
  if (t && (Po(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return p8(e);
}
function p8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (L2 = function() {
    return !!e;
  })();
}
function Kl(e) {
  return Kl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kl(e);
}
function h8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ey(e, t);
}
function Ey(e, t) {
  return Ey = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ey(e, t);
}
function nd(e, t, r) {
  return t = B2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B2(e) {
  var t = v8(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function v8(e, t) {
  if (Po(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function m8(e, t) {
  if (e == null) return {};
  var r = g8(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function g8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function y8(e) {
  return e.value;
}
function b8(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var r = m8(t, s8);
  return /* @__PURE__ */ k.createElement(d0, r);
}
var tA = 1, Ea = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    c8(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = f8(this, t, [].concat(i)), nd(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return h8(t, e), l8(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > tA || Math.abs(i.height - this.lastBoundingBox.height) > tA) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? fi({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, l = i.margin, f = i.chartWidth, p = i.chartHeight, d, v;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var m = this.getBBoxSnapshot();
          d = {
            left: ((f || 0) - m.width) / 2
          };
        } else
          d = o === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var g = this.getBBoxSnapshot();
          v = {
            top: ((p || 0) - g.height) / 2
          };
        } else
          v = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return fi(fi({}, d), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, s = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, p = i.payload, d = fi(fi({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: d,
        ref: function(m) {
          n.wrapperNode = m;
        }
      }, b8(a, fi(fi({}, this.props), {}, {
        payload: k2(p, f, y8)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = fi(fi({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && pe(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(dn);
nd(Ea, "displayName", "Legend");
nd(Ea, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Am, rA;
function x8() {
  if (rA) return Am;
  rA = 1;
  var e = ec(), t = h0(), r = Rr(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Am = i, Am;
}
var Pm, nA;
function q2() {
  if (nA) return Pm;
  nA = 1;
  var e = E2(), t = x8();
  function r(n, i, a, o, s) {
    var l = -1, f = n.length;
    for (a || (a = t), s || (s = []); ++l < f; ) {
      var p = n[l];
      i > 0 && a(p) ? i > 1 ? r(p, i - 1, a, o, s) : e(s, p) : o || (s[s.length] = p);
    }
    return s;
  }
  return Pm = r, Pm;
}
var Tm, iA;
function w8() {
  if (iA) return Tm;
  iA = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), s = i(r), l = s.length; l--; ) {
        var f = s[t ? l : ++a];
        if (n(o[f], f, o) === !1)
          break;
      }
      return r;
    };
  }
  return Tm = e, Tm;
}
var Em, aA;
function _8() {
  if (aA) return Em;
  aA = 1;
  var e = w8(), t = e();
  return Em = t, Em;
}
var Cm, oA;
function F2() {
  if (oA) return Cm;
  oA = 1;
  var e = _8(), t = rd();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return Cm = r, Cm;
}
var Im, uA;
function O8() {
  if (uA) return Im;
  uA = 1;
  var e = rc();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, s = n ? o : -1, l = Object(i); (n ? s-- : ++s < o) && a(l[s], s, l) !== !1; )
        ;
      return i;
    };
  }
  return Im = t, Im;
}
var Mm, sA;
function y0() {
  if (sA) return Mm;
  sA = 1;
  var e = F2(), t = O8(), r = t(e);
  return Mm = r, Mm;
}
var Rm, cA;
function W2() {
  if (cA) return Rm;
  cA = 1;
  var e = y0(), t = rc();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, l, f) {
      o[++a] = i(s, l, f);
    }), o;
  }
  return Rm = r, Rm;
}
var Dm, lA;
function S8() {
  if (lA) return Dm;
  lA = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Dm = e, Dm;
}
var Nm, fA;
function A8() {
  if (fA) return Nm;
  fA = 1;
  var e = Qo();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, s = e(r), l = n !== void 0, f = n === null, p = n === n, d = e(n);
      if (!f && !d && !s && r > n || s && l && p && !f && !d || a && l && p || !i && p || !o)
        return 1;
      if (!a && !s && !d && r < n || d && i && o && !a && !s || f && i && o || !l && o || !p)
        return -1;
    }
    return 0;
  }
  return Nm = t, Nm;
}
var $m, dA;
function P8() {
  if (dA) return $m;
  dA = 1;
  var e = A8();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, s = n.criteria, l = o.length, f = i.length; ++a < l; ) {
      var p = e(o[a], s[a]);
      if (p) {
        if (a >= f)
          return p;
        var d = i[a];
        return p * (d == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return $m = t, $m;
}
var jm, pA;
function T8() {
  if (pA) return jm;
  pA = 1;
  var e = i0(), t = a0(), r = Zn(), n = W2(), i = S8(), a = I2(), o = P8(), s = ru(), l = Rr();
  function f(p, d, v) {
    d.length ? d = e(d, function(b) {
      return l(b) ? function(y) {
        return t(y, b.length === 1 ? b[0] : b);
      } : b;
    }) : d = [s];
    var m = -1;
    d = e(d, a(r));
    var g = n(p, function(b, y, _) {
      var O = e(d, function(S) {
        return S(b);
      });
      return { criteria: O, index: ++m, value: b };
    });
    return i(g, function(b, y) {
      return o(b, y, v);
    });
  }
  return jm = f, jm;
}
var km, hA;
function E8() {
  if (hA) return km;
  hA = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return km = e, km;
}
var Lm, vA;
function C8() {
  if (vA) return Lm;
  vA = 1;
  var e = E8(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, s = -1, l = t(o.length - i, 0), f = Array(l); ++s < l; )
        f[s] = o[i + s];
      s = -1;
      for (var p = Array(i + 1); ++s < i; )
        p[s] = o[s];
      return p[i] = a(f), e(n, this, p);
    };
  }
  return Lm = r, Lm;
}
var Bm, mA;
function I8() {
  if (mA) return Bm;
  mA = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Bm = e, Bm;
}
var qm, gA;
function z2() {
  if (gA) return qm;
  gA = 1;
  var e = Ba(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return qm = t, qm;
}
var Fm, yA;
function M8() {
  if (yA) return Fm;
  yA = 1;
  var e = I8(), t = z2(), r = ru(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Fm = n, Fm;
}
var Wm, bA;
function R8() {
  if (bA) return Wm;
  bA = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var s = r(), l = t - (s - o);
      if (o = s, l > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Wm = n, Wm;
}
var zm, xA;
function D8() {
  if (xA) return zm;
  xA = 1;
  var e = M8(), t = R8(), r = t(e);
  return zm = r, zm;
}
var Um, wA;
function N8() {
  if (wA) return Um;
  wA = 1;
  var e = ru(), t = C8(), r = D8();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Um = n, Um;
}
var Hm, _A;
function id() {
  if (_A) return Hm;
  _A = 1;
  var e = t0(), t = rc(), r = v0(), n = Zi();
  function i(a, o, s) {
    if (!n(s))
      return !1;
    var l = typeof o;
    return (l == "number" ? t(s) && r(o, s.length) : l == "string" && o in s) ? e(s[o], a) : !1;
  }
  return Hm = i, Hm;
}
var Gm, OA;
function $8() {
  if (OA) return Gm;
  OA = 1;
  var e = q2(), t = T8(), r = N8(), n = id(), i = r(function(a, o) {
    if (a == null)
      return [];
    var s = o.length;
    return s > 1 && n(a, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return Gm = i, Gm;
}
var j8 = $8();
const b0 = /* @__PURE__ */ ut(j8);
function ds(e) {
  "@babel/helpers - typeof";
  return ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ds(e);
}
function Cy() {
  return Cy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cy.apply(this, arguments);
}
function k8(e, t) {
  return F8(e) || q8(e, t) || B8(e, t) || L8();
}
function L8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B8(e, t) {
  if (e) {
    if (typeof e == "string") return SA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return SA(e, t);
  }
}
function SA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function q8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function F8(e) {
  if (Array.isArray(e)) return e;
}
function AA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Km(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? AA(Object(r), !0).forEach(function(n) {
      W8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W8(e, t, r) {
  return t = z8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z8(e) {
  var t = U8(e, "string");
  return ds(t) == "symbol" ? t : t + "";
}
function U8(e, t) {
  if (ds(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ds(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H8(e) {
  return Array.isArray(e) && Kt(e[0]) && Kt(e[1]) ? e.join(" ~ ") : e;
}
var G8 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, l = t.labelStyle, f = l === void 0 ? {} : l, p = t.payload, d = t.formatter, v = t.itemSorter, m = t.wrapperClassName, g = t.labelClassName, b = t.label, y = t.labelFormatter, _ = t.accessibilityLayer, O = _ === void 0 ? !1 : _, S = function() {
    if (p && p.length) {
      var W = {
        padding: 0,
        margin: 0
      }, q = (v ? b0(p, v) : p).map(function($, j) {
        if ($.type === "none")
          return null;
        var F = Km({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: $.color || "#000"
        }, s), V = $.formatter || d || H8, Z = $.value, Q = $.name, G = Z, X = Q;
        if (V && G != null && X != null) {
          var te = V(Z, Q, $, j, p);
          if (Array.isArray(te)) {
            var ie = k8(te, 2);
            G = ie[0], X = ie[1];
          } else
            G = te;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ k.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(j),
            style: F
          }, Kt(X) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Kt(X) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, G), /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, $.unit || ""))
        );
      });
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: W
      }, q);
    }
    return null;
  }, P = Km({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), x = Km({
    margin: 0
  }, f), A = !$e(b), C = A ? b : "", M = Be("recharts-default-tooltip", m), N = Be("recharts-tooltip-label", g);
  A && y && p !== void 0 && p !== null && (C = y(b, p));
  var z = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", Cy({
    className: M,
    style: P
  }, z), /* @__PURE__ */ k.createElement("p", {
    className: N,
    style: x
  }, /* @__PURE__ */ k.isValidElement(C) ? C : "".concat(C)), S());
};
function ps(e) {
  "@babel/helpers - typeof";
  return ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ps(e);
}
function ml(e, t, r) {
  return t = K8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K8(e) {
  var t = V8(e, "string");
  return ps(t) == "symbol" ? t : t + "";
}
function V8(e, t) {
  if (ps(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ps(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Du = "recharts-tooltip-wrapper", Y8 = {
  visibility: "hidden"
};
function X8(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Be(Du, ml(ml(ml(ml({}, "".concat(Du, "-right"), pe(r) && t && pe(t.x) && r >= t.x), "".concat(Du, "-left"), pe(r) && t && pe(t.x) && r < t.x), "".concat(Du, "-bottom"), pe(n) && t && pe(t.y) && n >= t.y), "".concat(Du, "-top"), pe(n) && t && pe(t.y) && n < t.y));
}
function PA(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && pe(a[n]))
    return a[n];
  var p = r[n] - s - i, d = r[n] + i;
  if (t[n])
    return o[n] ? p : d;
  if (o[n]) {
    var v = p, m = l[n];
    return v < m ? Math.max(d, l[n]) : Math.max(p, l[n]);
  }
  var g = d + s, b = l[n] + f;
  return g > b ? Math.max(p, l[n]) : Math.max(d, l[n]);
}
function Z8(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function J8(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, f, p, d;
  return o.height > 0 && o.width > 0 && r ? (p = PA({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), d = PA({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = Z8({
    translateX: p,
    translateY: d,
    useTranslate3d: s
  })) : f = Y8, {
    cssProperties: f,
    cssClasses: X8({
      translateX: p,
      translateY: d,
      coordinate: r
    })
  };
}
function To(e) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e);
}
function TA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? TA(Object(r), !0).forEach(function(n) {
      My(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, H2(n.key), n);
  }
}
function t9(e, t, r) {
  return t && e9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function r9(e, t, r) {
  return t = Vl(t), n9(e, U2() ? Reflect.construct(t, r || [], Vl(e).constructor) : t.apply(e, r));
}
function n9(e, t) {
  if (t && (To(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return i9(e);
}
function i9(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (U2 = function() {
    return !!e;
  })();
}
function Vl(e) {
  return Vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vl(e);
}
function a9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Iy(e, t);
}
function Iy(e, t) {
  return Iy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Iy(e, t);
}
function My(e, t, r) {
  return t = H2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H2(e) {
  var t = o9(e, "string");
  return To(t) == "symbol" ? t : t + "";
}
function o9(e, t) {
  if (To(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var CA = 1, u9 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Q8(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = r9(this, t, [].concat(i)), My(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), My(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, l, f, p;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (f = (p = r.props.coordinate) === null || p === void 0 ? void 0 : p.y) !== null && f !== void 0 ? f : 0
          }
        });
      }
    }), r;
  }
  return a9(t, e), t9(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > CA || Math.abs(n.height - this.state.lastBoundingBox.height) > CA) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.children, p = i.coordinate, d = i.hasPayload, v = i.isAnimationActive, m = i.offset, g = i.position, b = i.reverseDirection, y = i.useTranslate3d, _ = i.viewBox, O = i.wrapperStyle, S = J8({
        allowEscapeViewBox: o,
        coordinate: p,
        offsetTopLeft: m,
        position: g,
        reverseDirection: b,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: y,
        viewBox: _
      }), P = S.cssClasses, x = S.cssProperties, A = EA(EA({
        transition: v && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, x), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && d ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, O);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ k.createElement("div", {
          tabIndex: -1,
          className: P,
          style: A,
          ref: function(M) {
            n.wrapperNode = M;
          }
        }, f)
      );
    }
  }]);
}(dn), s9 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Ji = {
  isSsr: s9()
};
function Eo(e) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e);
}
function IA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function MA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? IA(Object(r), !0).forEach(function(n) {
      x0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, K2(n.key), n);
  }
}
function f9(e, t, r) {
  return t && l9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function d9(e, t, r) {
  return t = Yl(t), p9(e, G2() ? Reflect.construct(t, r || [], Yl(e).constructor) : t.apply(e, r));
}
function p9(e, t) {
  if (t && (Eo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return h9(e);
}
function h9(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function G2() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (G2 = function() {
    return !!e;
  })();
}
function Yl(e) {
  return Yl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yl(e);
}
function v9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ry(e, t);
}
function Ry(e, t) {
  return Ry = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ry(e, t);
}
function x0(e, t, r) {
  return t = K2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K2(e) {
  var t = m9(e, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function m9(e, t) {
  if (Eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function g9(e) {
  return e.dataKey;
}
function y9(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(G8, t);
}
var Fn = /* @__PURE__ */ function(e) {
  function t() {
    return c9(this, t), d9(this, t, arguments);
  }
  return v9(t, e), f9(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, f = i.content, p = i.coordinate, d = i.filterNull, v = i.isAnimationActive, m = i.offset, g = i.payload, b = i.payloadUniqBy, y = i.position, _ = i.reverseDirection, O = i.useTranslate3d, S = i.viewBox, P = i.wrapperStyle, x = g ?? [];
      d && x.length && (x = k2(g.filter(function(C) {
        return C.value != null && (C.hide !== !0 || n.props.includeHidden);
      }), b, g9));
      var A = x.length > 0;
      return /* @__PURE__ */ k.createElement(u9, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: p,
        hasPayload: A,
        offset: m,
        position: y,
        reverseDirection: _,
        useTranslate3d: O,
        viewBox: S,
        wrapperStyle: P
      }, y9(f, MA(MA({}, this.props), {}, {
        payload: x
      })));
    }
  }]);
}(dn);
x0(Fn, "displayName", "Tooltip");
x0(Fn, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Ji.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Vm, RA;
function b9() {
  if (RA) return Vm;
  RA = 1;
  var e = Xn(), t = function() {
    return e.Date.now();
  };
  return Vm = t, Vm;
}
var Ym, DA;
function x9() {
  if (DA) return Ym;
  DA = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Ym = t, Ym;
}
var Xm, NA;
function w9() {
  if (NA) return Xm;
  NA = 1;
  var e = x9(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Xm = r, Xm;
}
var Zm, $A;
function V2() {
  if ($A) return Zm;
  $A = 1;
  var e = w9(), t = Zi(), r = Qo(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function l(f) {
    if (typeof f == "number")
      return f;
    if (r(f))
      return n;
    if (t(f)) {
      var p = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = t(p) ? p + "" : p;
    }
    if (typeof f != "string")
      return f === 0 ? f : +f;
    f = e(f);
    var d = a.test(f);
    return d || o.test(f) ? s(f.slice(2), d ? 2 : 8) : i.test(f) ? n : +f;
  }
  return Zm = l, Zm;
}
var Jm, jA;
function _9() {
  if (jA) return Jm;
  jA = 1;
  var e = Zi(), t = b9(), r = V2(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(s, l, f) {
    var p, d, v, m, g, b, y = 0, _ = !1, O = !1, S = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    l = r(l) || 0, e(f) && (_ = !!f.leading, O = "maxWait" in f, v = O ? i(r(f.maxWait) || 0, l) : v, S = "trailing" in f ? !!f.trailing : S);
    function P(q) {
      var $ = p, j = d;
      return p = d = void 0, y = q, m = s.apply(j, $), m;
    }
    function x(q) {
      return y = q, g = setTimeout(M, l), _ ? P(q) : m;
    }
    function A(q) {
      var $ = q - b, j = q - y, F = l - $;
      return O ? a(F, v - j) : F;
    }
    function C(q) {
      var $ = q - b, j = q - y;
      return b === void 0 || $ >= l || $ < 0 || O && j >= v;
    }
    function M() {
      var q = t();
      if (C(q))
        return N(q);
      g = setTimeout(M, A(q));
    }
    function N(q) {
      return g = void 0, S && p ? P(q) : (p = d = void 0, m);
    }
    function z() {
      g !== void 0 && clearTimeout(g), y = 0, p = b = d = g = void 0;
    }
    function D() {
      return g === void 0 ? m : N(t());
    }
    function W() {
      var q = t(), $ = C(q);
      if (p = arguments, d = this, b = q, $) {
        if (g === void 0)
          return x(b);
        if (O)
          return clearTimeout(g), g = setTimeout(M, l), P(b);
      }
      return g === void 0 && (g = setTimeout(M, l)), m;
    }
    return W.cancel = z, W.flush = D, W;
  }
  return Jm = o, Jm;
}
var Qm, kA;
function O9() {
  if (kA) return Qm;
  kA = 1;
  var e = _9(), t = Zi(), r = "Expected a function";
  function n(i, a, o) {
    var s = !0, l = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (s = "leading" in o ? !!o.leading : s, l = "trailing" in o ? !!o.trailing : l), e(i, a, {
      leading: s,
      maxWait: a,
      trailing: l
    });
  }
  return Qm = n, Qm;
}
var S9 = O9();
const Y2 = /* @__PURE__ */ ut(S9);
function hs(e) {
  "@babel/helpers - typeof";
  return hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hs(e);
}
function LA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? LA(Object(r), !0).forEach(function(n) {
      A9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : LA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A9(e, t, r) {
  return t = P9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P9(e) {
  var t = T9(e, "string");
  return hs(t) == "symbol" ? t : t + "";
}
function T9(e, t) {
  if (hs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E9(e, t) {
  return R9(e) || M9(e, t) || I9(e, t) || C9();
}
function C9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I9(e, t) {
  if (e) {
    if (typeof e == "string") return BA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return BA(e, t);
  }
}
function BA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function M9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function R9(e) {
  if (Array.isArray(e)) return e;
}
var D9 = /* @__PURE__ */ wt(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, f = e.minWidth, p = f === void 0 ? 0 : f, d = e.minHeight, v = e.maxHeight, m = e.children, g = e.debounce, b = g === void 0 ? 0 : g, y = e.id, _ = e.className, O = e.onResize, S = e.style, P = S === void 0 ? {} : S, x = Yi(null), A = Yi();
  A.current = O, bq(t, function() {
    return Object.defineProperty(x.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), x.current;
      },
      configurable: !0
    });
  });
  var C = ct({
    containerWidth: i.width,
    containerHeight: i.height
  }), M = E9(C, 2), N = M[0], z = M[1], D = Ki(function(q, $) {
    z(function(j) {
      var F = Math.round(q), V = Math.round($);
      return j.containerWidth === F && j.containerHeight === V ? j : {
        containerWidth: F,
        containerHeight: V
      };
    });
  }, []);
  Nt(function() {
    var q = function(Q) {
      var G, X = Q[0].contentRect, te = X.width, ie = X.height;
      D(te, ie), (G = A.current) === null || G === void 0 || G.call(A, te, ie);
    };
    b > 0 && (q = Y2(q, b, {
      trailing: !0,
      leading: !1
    }));
    var $ = new ResizeObserver(q), j = x.current.getBoundingClientRect(), F = j.width, V = j.height;
    return D(F, V), $.observe(x.current), function() {
      $.disconnect();
    };
  }, [D, b]);
  var W = St(function() {
    var q = N.containerWidth, $ = N.containerHeight;
    if (q < 0 || $ < 0)
      return null;
    In(_a(o) || _a(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l), In(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var j = _a(o) ? q : o, F = _a(l) ? $ : l;
    r && r > 0 && (j ? F = j / r : F && (j = F * r), v && F > v && (F = v)), In(j > 0 || F > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, j, F, o, l, p, d, r);
    var V = !Array.isArray(m) && yi(m.type).endsWith("Chart");
    return k.Children.map(m, function(Z) {
      return /* @__PURE__ */ k.isValidElement(Z) ? /* @__PURE__ */ Ut(Z, gl({
        width: j,
        height: F
      }, V ? {
        style: gl({
          height: "100%",
          width: "100%",
          maxHeight: F,
          maxWidth: j
        }, Z.props.style)
      } : {})) : Z;
    });
  }, [r, m, l, v, d, p, N, o]);
  return /* @__PURE__ */ k.createElement("div", {
    id: y ? "".concat(y) : void 0,
    className: Be("recharts-responsive-container", _),
    style: gl(gl({}, P), {}, {
      width: o,
      height: l,
      minWidth: p,
      minHeight: d,
      maxHeight: v
    }),
    ref: x
  }, W);
}), ad = function(t) {
  return null;
};
ad.displayName = "Cell";
function vs(e) {
  "@babel/helpers - typeof";
  return vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vs(e);
}
function qA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qA(Object(r), !0).forEach(function(n) {
      N9(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qA(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N9(e, t, r) {
  return t = $9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $9(e) {
  var t = j9(e, "string");
  return vs(t) == "symbol" ? t : t + "";
}
function j9(e, t) {
  if (vs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var so = {
  widthCache: {},
  cacheCount: 0
}, k9 = 2e3, L9 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, FA = "recharts_measurement_span";
function B9(e) {
  var t = Dy({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var es = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Ji.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = B9(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (so.widthCache[i])
    return so.widthCache[i];
  try {
    var a = document.getElementById(FA);
    a || (a = document.createElement("span"), a.setAttribute("id", FA), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Dy(Dy({}, L9), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = {
      width: s.width,
      height: s.height
    };
    return so.widthCache[i] = l, ++so.cacheCount > k9 && (so.cacheCount = 0, so.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, q9 = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ms(e) {
  "@babel/helpers - typeof";
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ms(e);
}
function Xl(e, t) {
  return U9(e) || z9(e, t) || W9(e, t) || F9();
}
function F9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W9(e, t) {
  if (e) {
    if (typeof e == "string") return WA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return WA(e, t);
  }
}
function WA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function z9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function U9(e) {
  if (Array.isArray(e)) return e;
}
function H9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, K9(n.key), n);
  }
}
function G9(e, t, r) {
  return t && zA(e.prototype, t), r && zA(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function K9(e) {
  var t = V9(e, "string");
  return ms(t) == "symbol" ? t : t + "";
}
function V9(e, t) {
  if (ms(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ms(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var UA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, HA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Y9 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, X9 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, X2 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, Z9 = Object.keys(X2), ho = "NaN";
function J9(e, t) {
  return e * X2[t];
}
var yl = /* @__PURE__ */ function() {
  function e(t, r) {
    H9(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !Y9.test(r) && (this.num = NaN, this.unit = ""), Z9.includes(r) && (this.num = J9(t, r), this.unit = "px");
  }
  return G9(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = X9.exec(r)) !== null && n !== void 0 ? n : [], a = Xl(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function Z2(e) {
  if (e.includes(ho))
    return ho;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = UA.exec(t)) !== null && r !== void 0 ? r : [], i = Xl(n, 4), a = i[1], o = i[2], s = i[3], l = yl.parse(a ?? ""), f = yl.parse(s ?? ""), p = o === "*" ? l.multiply(f) : l.divide(f);
    if (p.isNaN())
      return ho;
    t = t.replace(UA, p.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var d, v = (d = HA.exec(t)) !== null && d !== void 0 ? d : [], m = Xl(v, 4), g = m[1], b = m[2], y = m[3], _ = yl.parse(g ?? ""), O = yl.parse(y ?? ""), S = b === "+" ? _.add(O) : _.subtract(O);
    if (S.isNaN())
      return ho;
    t = t.replace(HA, S.toString());
  }
  return t;
}
var GA = /\(([^()]*)\)/;
function Q9(e) {
  for (var t = e; t.includes("("); ) {
    var r = GA.exec(t), n = Xl(r, 2), i = n[1];
    t = t.replace(GA, Z2(i));
  }
  return t;
}
function eW(e) {
  var t = e.replace(/\s+/g, "");
  return t = Q9(t), t = Z2(t), t;
}
function tW(e) {
  try {
    return eW(e);
  } catch {
    return ho;
  }
}
function eg(e) {
  var t = tW(e.slice(5, -1));
  return t === ho ? "" : t;
}
var rW = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], nW = ["dx", "dy", "angle", "className", "breakAll"];
function Ny() {
  return Ny = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ny.apply(this, arguments);
}
function KA(e, t) {
  if (e == null) return {};
  var r = iW(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function VA(e, t) {
  return sW(e) || uW(e, t) || oW(e, t) || aW();
}
function aW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oW(e, t) {
  if (e) {
    if (typeof e == "string") return YA(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return YA(e, t);
  }
}
function YA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function sW(e) {
  if (Array.isArray(e)) return e;
}
var J2 = /[ \f\n\r\t\v\u2028\u2029]+/, Q2 = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    $e(r) || (n ? a = r.toString().split("") : a = r.toString().split(J2));
    var o = a.map(function(l) {
      return {
        word: l,
        width: es(l, i).width
      };
    }), s = n ? 0 : es(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, cW = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, l = t.style, f = t.breakAll, p = pe(o), d = s, v = function() {
    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return j.reduce(function(F, V) {
      var Z = V.word, Q = V.width, G = F[F.length - 1];
      if (G && (i == null || a || G.width + Q + n < Number(i)))
        G.words.push(Z), G.width += Q + n;
      else {
        var X = {
          words: [Z],
          width: Q
        };
        F.push(X);
      }
      return F;
    }, []);
  }, m = v(r), g = function(j) {
    return j.reduce(function(F, V) {
      return F.width > V.width ? F : V;
    });
  };
  if (!p)
    return m;
  for (var b = "…", y = function(j) {
    var F = d.slice(0, j), V = Q2({
      breakAll: f,
      style: l,
      children: F + b
    }).wordsWithComputedWidth, Z = v(V), Q = Z.length > o || g(Z).width > Number(i);
    return [Q, Z];
  }, _ = 0, O = d.length - 1, S = 0, P; _ <= O && S <= d.length - 1; ) {
    var x = Math.floor((_ + O) / 2), A = x - 1, C = y(A), M = VA(C, 2), N = M[0], z = M[1], D = y(x), W = VA(D, 1), q = W[0];
    if (!N && !q && (_ = x + 1), N && q && (O = x - 1), !N && q) {
      P = z;
      break;
    }
    S++;
  }
  return P || m;
}, XA = function(t) {
  var r = $e(t) ? [] : t.toString().split(J2);
  return [{
    words: r
  }];
}, lW = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Ji.isSsr) {
    var l, f, p = Q2({
      breakAll: o,
      children: i,
      style: a
    });
    if (p) {
      var d = p.wordsWithComputedWidth, v = p.spaceWidth;
      l = d, f = v;
    } else
      return XA(i);
    return cW({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, l, f, r, n);
  }
  return XA(i);
}, ZA = "#808080", Xi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, l = t.capHeight, f = l === void 0 ? "0.71em" : l, p = t.scaleToFit, d = p === void 0 ? !1 : p, v = t.textAnchor, m = v === void 0 ? "start" : v, g = t.verticalAnchor, b = g === void 0 ? "end" : g, y = t.fill, _ = y === void 0 ? ZA : y, O = KA(t, rW), S = St(function() {
    return lW({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: d,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, d, O.style, O.width]), P = O.dx, x = O.dy, A = O.angle, C = O.className, M = O.breakAll, N = KA(O, nW);
  if (!Kt(n) || !Kt(a))
    return null;
  var z = n + (pe(P) ? P : 0), D = a + (pe(x) ? x : 0), W;
  switch (b) {
    case "start":
      W = eg("calc(".concat(f, ")"));
      break;
    case "middle":
      W = eg("calc(".concat((S.length - 1) / 2, " * -").concat(s, " + (").concat(f, " / 2))"));
      break;
    default:
      W = eg("calc(".concat(S.length - 1, " * -").concat(s, ")"));
      break;
  }
  var q = [];
  if (d) {
    var $ = S[0].width, j = O.width;
    q.push("scale(".concat((pe(j) ? j / $ : 1) / $, ")"));
  }
  return A && q.push("rotate(".concat(A, ", ").concat(z, ", ").concat(D, ")")), q.length && (N.transform = q.join(" ")), /* @__PURE__ */ k.createElement("text", Ny({}, Te(N, !0), {
    x: z,
    y: D,
    className: Be("recharts-text", C),
    textAnchor: m,
    fill: _.includes("url") ? ZA : _
  }), S.map(function(F, V) {
    var Z = F.words.join(M ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ k.createElement("tspan", {
        x: z,
        dy: V === 0 ? W : s,
        key: "".concat(Z, "-").concat(V)
      }, Z)
    );
  }));
};
function Vi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function fW(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function w0(e) {
  let t, r, n;
  e.length !== 2 ? (t = Vi, r = (s, l) => Vi(e(s), l), n = (s, l) => e(s) - l) : (t = e === Vi || e === fW ? e : dW, r = e, n = e);
  function i(s, l, f = 0, p = s.length) {
    if (f < p) {
      if (t(l, l) !== 0) return p;
      do {
        const d = f + p >>> 1;
        r(s[d], l) < 0 ? f = d + 1 : p = d;
      } while (f < p);
    }
    return f;
  }
  function a(s, l, f = 0, p = s.length) {
    if (f < p) {
      if (t(l, l) !== 0) return p;
      do {
        const d = f + p >>> 1;
        r(s[d], l) <= 0 ? f = d + 1 : p = d;
      } while (f < p);
    }
    return f;
  }
  function o(s, l, f = 0, p = s.length) {
    const d = i(s, l, f, p - 1);
    return d > f && n(s[d - 1], l) > -n(s[d], l) ? d - 1 : d;
  }
  return { left: i, center: o, right: a };
}
function dW() {
  return 0;
}
function eM(e) {
  return e === null ? NaN : +e;
}
function* pW(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const hW = w0(Vi), nc = hW.right;
w0(eM).center;
class JA extends Map {
  constructor(t, r = gW) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(QA(this, t));
  }
  has(t) {
    return super.has(QA(this, t));
  }
  set(t, r) {
    return super.set(vW(this, t), r);
  }
  delete(t) {
    return super.delete(mW(this, t));
  }
}
function QA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function vW({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function mW({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function gW(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function yW(e = Vi) {
  if (e === Vi) return tM;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function tM(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const bW = Math.sqrt(50), xW = Math.sqrt(10), wW = Math.sqrt(2);
function Zl(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= bW ? 10 : a >= xW ? 5 : a >= wW ? 2 : 1;
  let s, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, s = Math.round(e * f), l = Math.round(t * f), s / f < e && ++s, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * o, s = Math.round(e / f), l = Math.round(t / f), s * f < e && ++s, l * f > t && --l), l < s && 0.5 <= r && r < 2 ? Zl(e, t, r * 2) : [s, l, f];
}
function $y(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Zl(t, e, r) : Zl(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n)
    if (o < 0) for (let f = 0; f < s; ++f) l[f] = (a - f) / -o;
    else for (let f = 0; f < s; ++f) l[f] = (a - f) * o;
  else if (o < 0) for (let f = 0; f < s; ++f) l[f] = (i + f) / -o;
  else for (let f = 0; f < s; ++f) l[f] = (i + f) * o;
  return l;
}
function jy(e, t, r) {
  return t = +t, e = +e, r = +r, Zl(e, t, r)[2];
}
function ky(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? jy(t, e, r) : jy(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function eP(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function tP(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function rM(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? tM : yW(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, p = Math.log(l), d = 0.5 * Math.exp(2 * p / 3), v = 0.5 * Math.sqrt(p * d * (l - d) / l) * (f - l / 2 < 0 ? -1 : 1), m = Math.max(r, Math.floor(t - f * d / l + v)), g = Math.min(n, Math.floor(t + (l - f) * d / l + v));
      rM(e, t, m, g, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Nu(e, r, t), i(e[n], a) > 0 && Nu(e, r, n); o < s; ) {
      for (Nu(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? Nu(e, r, s) : (++s, Nu(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Nu(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function _W(e, t, r) {
  if (e = Float64Array.from(pW(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return tP(e);
    if (t >= 1) return eP(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = eP(rM(e, a).subarray(0, a + 1)), s = tP(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function OW(e, t, r = eM) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function SW(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function pn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Ai(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Ly = Symbol("implicit");
function _0() {
  var e = new JA(), t = [], r = [], n = Ly;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Ly) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new JA();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return _0(t, r).unknown(n);
  }, pn.apply(i, arguments), i;
}
function gs() {
  var e = _0().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, l = 0, f = 0, p = 0.5;
  delete e.unknown;
  function d() {
    var v = t().length, m = i < n, g = m ? i : n, b = m ? n : i;
    a = (b - g) / Math.max(1, v - l + f * 2), s && (a = Math.floor(a)), g += (b - g - a * (v - l)) * p, o = a * (1 - l), s && (g = Math.round(g), o = Math.round(o));
    var y = SW(v).map(function(_) {
      return g + a * _;
    });
    return r(m ? y.reverse() : y);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), d()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, i] = v, n = +n, i = +i, d()) : [n, i];
  }, e.rangeRound = function(v) {
    return [n, i] = v, n = +n, i = +i, s = !0, d();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(v) {
    return arguments.length ? (s = !!v, d()) : s;
  }, e.padding = function(v) {
    return arguments.length ? (l = Math.min(1, f = +v), d()) : l;
  }, e.paddingInner = function(v) {
    return arguments.length ? (l = Math.min(1, v), d()) : l;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (f = +v, d()) : f;
  }, e.align = function(v) {
    return arguments.length ? (p = Math.max(0, Math.min(1, v)), d()) : p;
  }, e.copy = function() {
    return gs(t(), [n, i]).round(s).paddingInner(l).paddingOuter(f).align(p);
  }, pn.apply(d(), arguments);
}
function nM(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return nM(t());
  }, e;
}
function ts() {
  return nM(gs.apply(null, arguments).paddingInner(1));
}
function O0(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function iM(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ic() {
}
var ys = 0.7, Jl = 1 / ys, wo = "\\s*([+-]?\\d+)\\s*", bs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", AW = /^#([0-9a-f]{3,8})$/, PW = new RegExp(`^rgb\\(${wo},${wo},${wo}\\)$`), TW = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), EW = new RegExp(`^rgba\\(${wo},${wo},${wo},${bs}\\)$`), CW = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${bs}\\)$`), IW = new RegExp(`^hsl\\(${bs},${Gn},${Gn}\\)$`), MW = new RegExp(`^hsla\\(${bs},${Gn},${Gn},${bs}\\)$`), rP = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
O0(ic, xs, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nP,
  // Deprecated! Use color.formatHex.
  formatHex: nP,
  formatHex8: RW,
  formatHsl: DW,
  formatRgb: iP,
  toString: iP
});
function nP() {
  return this.rgb().formatHex();
}
function RW() {
  return this.rgb().formatHex8();
}
function DW() {
  return aM(this).formatHsl();
}
function iP() {
  return this.rgb().formatRgb();
}
function xs(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = AW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? aP(t) : r === 3 ? new Cr(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? bl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? bl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = PW.exec(e)) ? new Cr(t[1], t[2], t[3], 1) : (t = TW.exec(e)) ? new Cr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = EW.exec(e)) ? bl(t[1], t[2], t[3], t[4]) : (t = CW.exec(e)) ? bl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = IW.exec(e)) ? sP(t[1], t[2] / 100, t[3] / 100, 1) : (t = MW.exec(e)) ? sP(t[1], t[2] / 100, t[3] / 100, t[4]) : rP.hasOwnProperty(e) ? aP(rP[e]) : e === "transparent" ? new Cr(NaN, NaN, NaN, 0) : null;
}
function aP(e) {
  return new Cr(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function bl(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Cr(e, t, r, n);
}
function NW(e) {
  return e instanceof ic || (e = xs(e)), e ? (e = e.rgb(), new Cr(e.r, e.g, e.b, e.opacity)) : new Cr();
}
function By(e, t, r, n) {
  return arguments.length === 1 ? NW(e) : new Cr(e, t, r, n ?? 1);
}
function Cr(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
O0(Cr, By, iM(ic, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new Cr(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ys : Math.pow(ys, e), new Cr(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Cr(Ca(this.r), Ca(this.g), Ca(this.b), Ql(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: oP,
  // Deprecated! Use color.formatHex.
  formatHex: oP,
  formatHex8: $W,
  formatRgb: uP,
  toString: uP
}));
function oP() {
  return `#${Oa(this.r)}${Oa(this.g)}${Oa(this.b)}`;
}
function $W() {
  return `#${Oa(this.r)}${Oa(this.g)}${Oa(this.b)}${Oa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function uP() {
  const e = Ql(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ca(this.r)}, ${Ca(this.g)}, ${Ca(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ql(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ca(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Oa(e) {
  return e = Ca(e), (e < 16 ? "0" : "") + e.toString(16);
}
function sP(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new En(e, t, r, n);
}
function aM(e) {
  if (e instanceof En) return new En(e.h, e.s, e.l, e.opacity);
  if (e instanceof ic || (e = xs(e)), !e) return new En();
  if (e instanceof En) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new En(o, s, l, e.opacity);
}
function jW(e, t, r, n) {
  return arguments.length === 1 ? aM(e) : new En(e, t, r, n ?? 1);
}
function En(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
O0(En, jW, iM(ic, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new En(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ys : Math.pow(ys, e), new En(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Cr(
      tg(e >= 240 ? e - 240 : e + 120, i, n),
      tg(e, i, n),
      tg(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new En(cP(this.h), xl(this.s), xl(this.l), Ql(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ql(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${cP(this.h)}, ${xl(this.s) * 100}%, ${xl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function cP(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function tg(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const S0 = (e) => () => e;
function kW(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function LW(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function BW(e) {
  return (e = +e) == 1 ? oM : function(t, r) {
    return r - t ? LW(t, r, e) : S0(isNaN(t) ? r : t);
  };
}
function oM(e, t) {
  var r = t - e;
  return r ? kW(e, r) : S0(isNaN(e) ? t : e);
}
const lP = function e(t) {
  var r = BW(t);
  function n(i, a) {
    var o = r((i = By(i)).r, (a = By(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), f = oM(i.opacity, a.opacity);
    return function(p) {
      return i.r = o(p), i.g = s(p), i.b = l(p), i.opacity = f(p), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function qW(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function FW(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function WW(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = nu(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function zW(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ef(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function UW(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = nu(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var qy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rg = new RegExp(qy.source, "g");
function HW(e) {
  return function() {
    return e;
  };
}
function GW(e) {
  return function(t) {
    return e(t) + "";
  };
}
function KW(e, t) {
  var r = qy.lastIndex = rg.lastIndex = 0, n, i, a, o = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (n = qy.exec(e)) && (i = rg.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: ef(n, i) })), r = rg.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? GW(l[0].x) : HW(t) : (t = l.length, function(f) {
    for (var p = 0, d; p < t; ++p) s[(d = l[p]).i] = d.x(f);
    return s.join("");
  });
}
function nu(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? S0(t) : (r === "number" ? ef : r === "string" ? (n = xs(t)) ? (t = n, lP) : KW : t instanceof xs ? lP : t instanceof Date ? zW : FW(t) ? qW : Array.isArray(t) ? WW : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? UW : ef)(e, t);
}
function A0(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function VW(e, t) {
  t === void 0 && (t = e, e = nu);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function YW(e) {
  return function() {
    return e;
  };
}
function tf(e) {
  return +e;
}
var fP = [0, 1];
function yr(e) {
  return e;
}
function Fy(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : YW(isNaN(t) ? NaN : 0.5);
}
function XW(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function ZW(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Fy(i, n), a = r(o, a)) : (n = Fy(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function JW(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Fy(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var l = nc(e, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function ac(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function od() {
  var e = fP, t = fP, r = nu, n, i, a, o = yr, s, l, f;
  function p() {
    var v = Math.min(e.length, t.length);
    return o !== yr && (o = XW(e[0], e[v - 1])), s = v > 2 ? JW : ZW, l = f = null, d;
  }
  function d(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = s(e.map(n), t, r)))(n(o(v)));
  }
  return d.invert = function(v) {
    return o(i((f || (f = s(t, e.map(n), ef)))(v)));
  }, d.domain = function(v) {
    return arguments.length ? (e = Array.from(v, tf), p()) : e.slice();
  }, d.range = function(v) {
    return arguments.length ? (t = Array.from(v), p()) : t.slice();
  }, d.rangeRound = function(v) {
    return t = Array.from(v), r = A0, p();
  }, d.clamp = function(v) {
    return arguments.length ? (o = v ? !0 : yr, p()) : o !== yr;
  }, d.interpolate = function(v) {
    return arguments.length ? (r = v, p()) : r;
  }, d.unknown = function(v) {
    return arguments.length ? (a = v, d) : a;
  }, function(v, m) {
    return n = v, i = m, p();
  };
}
function P0() {
  return od()(yr, yr);
}
function QW(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function rf(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Co(e) {
  return e = rf(Math.abs(e)), e ? e[1] : NaN;
}
function ez(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function tz(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var rz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ws(e) {
  if (!(t = rz.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new T0({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
ws.prototype = T0.prototype;
function T0(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
T0.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function nz(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var uM;
function iz(e, t) {
  var r = rf(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (uM = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + rf(e, Math.max(0, t + a - 1))[0];
}
function dP(e, t) {
  var r = rf(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const pP = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: QW,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => dP(e * 100, t),
  r: dP,
  s: iz,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function hP(e) {
  return e;
}
var vP = Array.prototype.map, mP = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function az(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? hP : ez(vP.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? hP : tz(vP.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(d) {
    d = ws(d);
    var v = d.fill, m = d.align, g = d.sign, b = d.symbol, y = d.zero, _ = d.width, O = d.comma, S = d.precision, P = d.trim, x = d.type;
    x === "n" ? (O = !0, x = "g") : pP[x] || (S === void 0 && (S = 12), P = !0, x = "g"), (y || v === "0" && m === "=") && (y = !0, v = "0", m = "=");
    var A = b === "$" ? r : b === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", C = b === "$" ? n : /[%p]/.test(x) ? o : "", M = pP[x], N = /[defgprs%]/.test(x);
    S = S === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function z(D) {
      var W = A, q = C, $, j, F;
      if (x === "c")
        q = M(D) + q, D = "";
      else {
        D = +D;
        var V = D < 0 || 1 / D < 0;
        if (D = isNaN(D) ? l : M(Math.abs(D), S), P && (D = nz(D)), V && +D == 0 && g !== "+" && (V = !1), W = (V ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + W, q = (x === "s" ? mP[8 + uM / 3] : "") + q + (V && g === "(" ? ")" : ""), N) {
          for ($ = -1, j = D.length; ++$ < j; )
            if (F = D.charCodeAt($), 48 > F || F > 57) {
              q = (F === 46 ? i + D.slice($ + 1) : D.slice($)) + q, D = D.slice(0, $);
              break;
            }
        }
      }
      O && !y && (D = t(D, 1 / 0));
      var Z = W.length + D.length + q.length, Q = Z < _ ? new Array(_ - Z + 1).join(v) : "";
      switch (O && y && (D = t(Q + D, Q.length ? _ - q.length : 1 / 0), Q = ""), m) {
        case "<":
          D = W + D + q + Q;
          break;
        case "=":
          D = W + Q + D + q;
          break;
        case "^":
          D = Q.slice(0, Z = Q.length >> 1) + W + D + q + Q.slice(Z);
          break;
        default:
          D = Q + W + D + q;
          break;
      }
      return a(D);
    }
    return z.toString = function() {
      return d + "";
    }, z;
  }
  function p(d, v) {
    var m = f((d = ws(d), d.type = "f", d)), g = Math.max(-8, Math.min(8, Math.floor(Co(v) / 3))) * 3, b = Math.pow(10, -g), y = mP[8 + g / 3];
    return function(_) {
      return m(b * _) + y;
    };
  }
  return {
    format: f,
    formatPrefix: p
  };
}
var wl, E0, sM;
oz({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function oz(e) {
  return wl = az(e), E0 = wl.format, sM = wl.formatPrefix, wl;
}
function uz(e) {
  return Math.max(0, -Co(Math.abs(e)));
}
function sz(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Co(t) / 3))) * 3 - Co(Math.abs(e)));
}
function cz(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Co(t) - Co(e)) + 1;
}
function cM(e, t, r, n) {
  var i = ky(e, t, r), a;
  switch (n = ws(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = sz(i, o)) && (n.precision = a), sM(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = cz(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = uz(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return E0(n);
}
function Qi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return $y(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return cM(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], l, f, p = 10;
    for (s < o && (f = o, o = s, s = f, f = i, i = a, a = f); p-- > 0; ) {
      if (f = jy(o, s, r), f === l)
        return n[i] = o, n[a] = s, t(n);
      if (f > 0)
        o = Math.floor(o / f) * f, s = Math.ceil(s / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, s = Math.floor(s * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function nf() {
  var e = P0();
  return e.copy = function() {
    return ac(e, nf());
  }, pn.apply(e, arguments), Qi(e);
}
function lM(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, tf), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return lM(e).unknown(t);
  }, e = arguments.length ? Array.from(e, tf) : [0, 1], Qi(r);
}
function fM(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function gP(e) {
  return Math.log(e);
}
function yP(e) {
  return Math.exp(e);
}
function lz(e) {
  return -Math.log(-e);
}
function fz(e) {
  return -Math.exp(-e);
}
function dz(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function pz(e) {
  return e === 10 ? dz : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function hz(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function bP(e) {
  return (t, r) => -e(-t, r);
}
function C0(e) {
  const t = e(gP, yP), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = hz(n), a = pz(n), r()[0] < 0 ? (i = bP(i), a = bP(a), e(lz, fz)) : e(gP, yP), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const l = r();
    let f = l[0], p = l[l.length - 1];
    const d = p < f;
    d && ([f, p] = [p, f]);
    let v = i(f), m = i(p), g, b;
    const y = s == null ? 10 : +s;
    let _ = [];
    if (!(n % 1) && m - v < y) {
      if (v = Math.floor(v), m = Math.ceil(m), f > 0) {
        for (; v <= m; ++v)
          for (g = 1; g < n; ++g)
            if (b = v < 0 ? g / a(-v) : g * a(v), !(b < f)) {
              if (b > p) break;
              _.push(b);
            }
      } else for (; v <= m; ++v)
        for (g = n - 1; g >= 1; --g)
          if (b = v > 0 ? g / a(-v) : g * a(v), !(b < f)) {
            if (b > p) break;
            _.push(b);
          }
      _.length * 2 < y && (_ = $y(f, p, y));
    } else
      _ = $y(v, m, Math.min(m - v, y)).map(a);
    return d ? _.reverse() : _;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = ws(l)).precision == null && (l.trim = !0), l = E0(l)), s === 1 / 0) return l;
    const f = Math.max(1, n * s / t.ticks().length);
    return (p) => {
      let d = p / a(Math.round(i(p)));
      return d * n < n - 0.5 && (d *= n), d <= f ? l(p) : "";
    };
  }, t.nice = () => r(fM(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function dM() {
  const e = C0(od()).domain([1, 10]);
  return e.copy = () => ac(e, dM()).base(e.base()), pn.apply(e, arguments), e;
}
function xP(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function wP(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function I0(e) {
  var t = 1, r = e(xP(t), wP(t));
  return r.constant = function(n) {
    return arguments.length ? e(xP(t = +n), wP(t)) : t;
  }, Qi(r);
}
function pM() {
  var e = I0(od());
  return e.copy = function() {
    return ac(e, pM()).constant(e.constant());
  }, pn.apply(e, arguments);
}
function _P(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function vz(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function mz(e) {
  return e < 0 ? -e * e : e * e;
}
function M0(e) {
  var t = e(yr, yr), r = 1;
  function n() {
    return r === 1 ? e(yr, yr) : r === 0.5 ? e(vz, mz) : e(_P(r), _P(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Qi(t);
}
function R0() {
  var e = M0(od());
  return e.copy = function() {
    return ac(e, R0()).exponent(e.exponent());
  }, pn.apply(e, arguments), e;
}
function gz() {
  return R0.apply(null, arguments).exponent(0.5);
}
function OP(e) {
  return Math.sign(e) * e * e;
}
function yz(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function hM() {
  var e = P0(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = yz(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(OP(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, tf)).map(OP)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return hM(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, pn.apply(i, arguments), Qi(i);
}
function vM() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = OW(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[nc(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Vi), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return vM().domain(e).range(t).unknown(n);
  }, pn.apply(a, arguments);
}
function mM() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[nc(n, l, 0, r)] : a;
  }
  function s() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return mM().domain([e, t]).range(i).unknown(a);
  }, pn.apply(Qi(o), arguments);
}
function gM() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[nc(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return gM().domain(e).range(t).unknown(r);
  }, pn.apply(i, arguments);
}
const ng = /* @__PURE__ */ new Date(), ig = /* @__PURE__ */ new Date();
function Vt(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const l = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (f < a && a < o);
    return l;
  }, i.filter = (a) => Vt((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (ng.setTime(+a), ig.setTime(+o), e(ng), e(ig), Math.floor(r(ng, ig))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const af = Vt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
af.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Vt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : af);
af.range;
const vi = 1e3, sn = vi * 60, mi = sn * 60, xi = mi * 24, D0 = xi * 7, SP = xi * 30, ag = xi * 365, Sa = Vt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * vi);
}, (e, t) => (t - e) / vi, (e) => e.getUTCSeconds());
Sa.range;
const N0 = Vt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * vi);
}, (e, t) => {
  e.setTime(+e + t * sn);
}, (e, t) => (t - e) / sn, (e) => e.getMinutes());
N0.range;
const $0 = Vt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * sn);
}, (e, t) => (t - e) / sn, (e) => e.getUTCMinutes());
$0.range;
const j0 = Vt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * vi - e.getMinutes() * sn);
}, (e, t) => {
  e.setTime(+e + t * mi);
}, (e, t) => (t - e) / mi, (e) => e.getHours());
j0.range;
const k0 = Vt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * mi);
}, (e, t) => (t - e) / mi, (e) => e.getUTCHours());
k0.range;
const oc = Vt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * sn) / xi,
  (e) => e.getDate() - 1
);
oc.range;
const ud = Vt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xi, (e) => e.getUTCDate() - 1);
ud.range;
const yM = Vt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xi, (e) => Math.floor(e / xi));
yM.range;
function Fa(e) {
  return Vt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * sn) / D0);
}
const sd = Fa(0), of = Fa(1), bz = Fa(2), xz = Fa(3), Io = Fa(4), wz = Fa(5), _z = Fa(6);
sd.range;
of.range;
bz.range;
xz.range;
Io.range;
wz.range;
_z.range;
function Wa(e) {
  return Vt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / D0);
}
const cd = Wa(0), uf = Wa(1), Oz = Wa(2), Sz = Wa(3), Mo = Wa(4), Az = Wa(5), Pz = Wa(6);
cd.range;
uf.range;
Oz.range;
Sz.range;
Mo.range;
Az.range;
Pz.range;
const L0 = Vt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
L0.range;
const B0 = Vt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
B0.range;
const wi = Vt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
wi.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Vt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
wi.range;
const _i = Vt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
_i.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Vt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
_i.range;
function bM(e, t, r, n, i, a) {
  const o = [
    [Sa, 1, vi],
    [Sa, 5, 5 * vi],
    [Sa, 15, 15 * vi],
    [Sa, 30, 30 * vi],
    [a, 1, sn],
    [a, 5, 5 * sn],
    [a, 15, 15 * sn],
    [a, 30, 30 * sn],
    [i, 1, mi],
    [i, 3, 3 * mi],
    [i, 6, 6 * mi],
    [i, 12, 12 * mi],
    [n, 1, xi],
    [n, 2, 2 * xi],
    [r, 1, D0],
    [t, 1, SP],
    [t, 3, 3 * SP],
    [e, 1, ag]
  ];
  function s(f, p, d) {
    const v = p < f;
    v && ([f, p] = [p, f]);
    const m = d && typeof d.range == "function" ? d : l(f, p, d), g = m ? m.range(f, +p + 1) : [];
    return v ? g.reverse() : g;
  }
  function l(f, p, d) {
    const v = Math.abs(p - f) / d, m = w0(([, , y]) => y).right(o, v);
    if (m === o.length) return e.every(ky(f / ag, p / ag, d));
    if (m === 0) return af.every(Math.max(ky(f, p, d), 1));
    const [g, b] = o[v / o[m - 1][2] < o[m][2] / v ? m - 1 : m];
    return g.every(b);
  }
  return [s, l];
}
const [Tz, Ez] = bM(_i, B0, cd, yM, k0, $0), [Cz, Iz] = bM(wi, L0, sd, oc, j0, N0);
function og(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ug(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function $u(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Mz(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, l = e.shortMonths, f = ju(i), p = ku(i), d = ju(a), v = ku(a), m = ju(o), g = ku(o), b = ju(s), y = ku(s), _ = ju(l), O = ku(l), S = {
    a: V,
    A: Z,
    b: Q,
    B: G,
    c: null,
    d: IP,
    e: IP,
    f: eU,
    g: lU,
    G: dU,
    H: Zz,
    I: Jz,
    j: Qz,
    L: xM,
    m: tU,
    M: rU,
    p: X,
    q: te,
    Q: DP,
    s: NP,
    S: nU,
    u: iU,
    U: aU,
    V: oU,
    w: uU,
    W: sU,
    x: null,
    X: null,
    y: cU,
    Y: fU,
    Z: pU,
    "%": RP
  }, P = {
    a: ie,
    A: ve,
    b: le,
    B: be,
    c: null,
    d: MP,
    e: MP,
    f: gU,
    g: TU,
    G: CU,
    H: hU,
    I: vU,
    j: mU,
    L: _M,
    m: yU,
    M: bU,
    p: Oe,
    q: ge,
    Q: DP,
    s: NP,
    S: xU,
    u: wU,
    U: _U,
    V: OU,
    w: SU,
    W: AU,
    x: null,
    X: null,
    y: PU,
    Y: EU,
    Z: IU,
    "%": RP
  }, x = {
    a: z,
    A: D,
    b: W,
    B: q,
    c: $,
    d: EP,
    e: EP,
    f: Kz,
    g: TP,
    G: PP,
    H: CP,
    I: CP,
    j: zz,
    L: Gz,
    m: Wz,
    M: Uz,
    p: N,
    q: Fz,
    Q: Yz,
    s: Xz,
    S: Hz,
    u: jz,
    U: kz,
    V: Lz,
    w: $z,
    W: Bz,
    x: j,
    X: F,
    y: TP,
    Y: PP,
    Z: qz,
    "%": Vz
  };
  S.x = A(r, S), S.X = A(n, S), S.c = A(t, S), P.x = A(r, P), P.X = A(n, P), P.c = A(t, P);
  function A(ae, fe) {
    return function(he) {
      var B = [], xe = -1, ee = 0, Ce = ae.length, qe, je, gt;
      for (he instanceof Date || (he = /* @__PURE__ */ new Date(+he)); ++xe < Ce; )
        ae.charCodeAt(xe) === 37 && (B.push(ae.slice(ee, xe)), (je = AP[qe = ae.charAt(++xe)]) != null ? qe = ae.charAt(++xe) : je = qe === "e" ? " " : "0", (gt = fe[qe]) && (qe = gt(he, je)), B.push(qe), ee = xe + 1);
      return B.push(ae.slice(ee, xe)), B.join("");
    };
  }
  function C(ae, fe) {
    return function(he) {
      var B = $u(1900, void 0, 1), xe = M(B, ae, he += "", 0), ee, Ce;
      if (xe != he.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (fe && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1), "Z" in B ? (ee = ug($u(B.y, 0, 1)), Ce = ee.getUTCDay(), ee = Ce > 4 || Ce === 0 ? uf.ceil(ee) : uf(ee), ee = ud.offset(ee, (B.V - 1) * 7), B.y = ee.getUTCFullYear(), B.m = ee.getUTCMonth(), B.d = ee.getUTCDate() + (B.w + 6) % 7) : (ee = og($u(B.y, 0, 1)), Ce = ee.getDay(), ee = Ce > 4 || Ce === 0 ? of.ceil(ee) : of(ee), ee = oc.offset(ee, (B.V - 1) * 7), B.y = ee.getFullYear(), B.m = ee.getMonth(), B.d = ee.getDate() + (B.w + 6) % 7);
      } else ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), Ce = "Z" in B ? ug($u(B.y, 0, 1)).getUTCDay() : og($u(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (Ce + 5) % 7 : B.w + B.U * 7 - (Ce + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, ug(B)) : og(B);
    };
  }
  function M(ae, fe, he, B) {
    for (var xe = 0, ee = fe.length, Ce = he.length, qe, je; xe < ee; ) {
      if (B >= Ce) return -1;
      if (qe = fe.charCodeAt(xe++), qe === 37) {
        if (qe = fe.charAt(xe++), je = x[qe in AP ? fe.charAt(xe++) : qe], !je || (B = je(ae, he, B)) < 0) return -1;
      } else if (qe != he.charCodeAt(B++))
        return -1;
    }
    return B;
  }
  function N(ae, fe, he) {
    var B = f.exec(fe.slice(he));
    return B ? (ae.p = p.get(B[0].toLowerCase()), he + B[0].length) : -1;
  }
  function z(ae, fe, he) {
    var B = m.exec(fe.slice(he));
    return B ? (ae.w = g.get(B[0].toLowerCase()), he + B[0].length) : -1;
  }
  function D(ae, fe, he) {
    var B = d.exec(fe.slice(he));
    return B ? (ae.w = v.get(B[0].toLowerCase()), he + B[0].length) : -1;
  }
  function W(ae, fe, he) {
    var B = _.exec(fe.slice(he));
    return B ? (ae.m = O.get(B[0].toLowerCase()), he + B[0].length) : -1;
  }
  function q(ae, fe, he) {
    var B = b.exec(fe.slice(he));
    return B ? (ae.m = y.get(B[0].toLowerCase()), he + B[0].length) : -1;
  }
  function $(ae, fe, he) {
    return M(ae, t, fe, he);
  }
  function j(ae, fe, he) {
    return M(ae, r, fe, he);
  }
  function F(ae, fe, he) {
    return M(ae, n, fe, he);
  }
  function V(ae) {
    return o[ae.getDay()];
  }
  function Z(ae) {
    return a[ae.getDay()];
  }
  function Q(ae) {
    return l[ae.getMonth()];
  }
  function G(ae) {
    return s[ae.getMonth()];
  }
  function X(ae) {
    return i[+(ae.getHours() >= 12)];
  }
  function te(ae) {
    return 1 + ~~(ae.getMonth() / 3);
  }
  function ie(ae) {
    return o[ae.getUTCDay()];
  }
  function ve(ae) {
    return a[ae.getUTCDay()];
  }
  function le(ae) {
    return l[ae.getUTCMonth()];
  }
  function be(ae) {
    return s[ae.getUTCMonth()];
  }
  function Oe(ae) {
    return i[+(ae.getUTCHours() >= 12)];
  }
  function ge(ae) {
    return 1 + ~~(ae.getUTCMonth() / 3);
  }
  return {
    format: function(ae) {
      var fe = A(ae += "", S);
      return fe.toString = function() {
        return ae;
      }, fe;
    },
    parse: function(ae) {
      var fe = C(ae += "", !1);
      return fe.toString = function() {
        return ae;
      }, fe;
    },
    utcFormat: function(ae) {
      var fe = A(ae += "", P);
      return fe.toString = function() {
        return ae;
      }, fe;
    },
    utcParse: function(ae) {
      var fe = C(ae += "", !0);
      return fe.toString = function() {
        return ae;
      }, fe;
    }
  };
}
var AP = { "-": "", _: " ", 0: "0" }, Jt = /^\s*\d+/, Rz = /^%/, Dz = /[\\^$*+?|[\]().{}]/g;
function Ye(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function Nz(e) {
  return e.replace(Dz, "\\$&");
}
function ju(e) {
  return new RegExp("^(?:" + e.map(Nz).join("|") + ")", "i");
}
function ku(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function $z(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function jz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function kz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Lz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Bz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function PP(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function TP(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function qz(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Fz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Wz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function EP(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function zz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function CP(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Uz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Hz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Gz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Kz(e, t, r) {
  var n = Jt.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Vz(e, t, r) {
  var n = Rz.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Yz(e, t, r) {
  var n = Jt.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Xz(e, t, r) {
  var n = Jt.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function IP(e, t) {
  return Ye(e.getDate(), t, 2);
}
function Zz(e, t) {
  return Ye(e.getHours(), t, 2);
}
function Jz(e, t) {
  return Ye(e.getHours() % 12 || 12, t, 2);
}
function Qz(e, t) {
  return Ye(1 + oc.count(wi(e), e), t, 3);
}
function xM(e, t) {
  return Ye(e.getMilliseconds(), t, 3);
}
function eU(e, t) {
  return xM(e, t) + "000";
}
function tU(e, t) {
  return Ye(e.getMonth() + 1, t, 2);
}
function rU(e, t) {
  return Ye(e.getMinutes(), t, 2);
}
function nU(e, t) {
  return Ye(e.getSeconds(), t, 2);
}
function iU(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function aU(e, t) {
  return Ye(sd.count(wi(e) - 1, e), t, 2);
}
function wM(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Io(e) : Io.ceil(e);
}
function oU(e, t) {
  return e = wM(e), Ye(Io.count(wi(e), e) + (wi(e).getDay() === 4), t, 2);
}
function uU(e) {
  return e.getDay();
}
function sU(e, t) {
  return Ye(of.count(wi(e) - 1, e), t, 2);
}
function cU(e, t) {
  return Ye(e.getFullYear() % 100, t, 2);
}
function lU(e, t) {
  return e = wM(e), Ye(e.getFullYear() % 100, t, 2);
}
function fU(e, t) {
  return Ye(e.getFullYear() % 1e4, t, 4);
}
function dU(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Io(e) : Io.ceil(e), Ye(e.getFullYear() % 1e4, t, 4);
}
function pU(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ye(t / 60 | 0, "0", 2) + Ye(t % 60, "0", 2);
}
function MP(e, t) {
  return Ye(e.getUTCDate(), t, 2);
}
function hU(e, t) {
  return Ye(e.getUTCHours(), t, 2);
}
function vU(e, t) {
  return Ye(e.getUTCHours() % 12 || 12, t, 2);
}
function mU(e, t) {
  return Ye(1 + ud.count(_i(e), e), t, 3);
}
function _M(e, t) {
  return Ye(e.getUTCMilliseconds(), t, 3);
}
function gU(e, t) {
  return _M(e, t) + "000";
}
function yU(e, t) {
  return Ye(e.getUTCMonth() + 1, t, 2);
}
function bU(e, t) {
  return Ye(e.getUTCMinutes(), t, 2);
}
function xU(e, t) {
  return Ye(e.getUTCSeconds(), t, 2);
}
function wU(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function _U(e, t) {
  return Ye(cd.count(_i(e) - 1, e), t, 2);
}
function OM(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Mo(e) : Mo.ceil(e);
}
function OU(e, t) {
  return e = OM(e), Ye(Mo.count(_i(e), e) + (_i(e).getUTCDay() === 4), t, 2);
}
function SU(e) {
  return e.getUTCDay();
}
function AU(e, t) {
  return Ye(uf.count(_i(e) - 1, e), t, 2);
}
function PU(e, t) {
  return Ye(e.getUTCFullYear() % 100, t, 2);
}
function TU(e, t) {
  return e = OM(e), Ye(e.getUTCFullYear() % 100, t, 2);
}
function EU(e, t) {
  return Ye(e.getUTCFullYear() % 1e4, t, 4);
}
function CU(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Mo(e) : Mo.ceil(e), Ye(e.getUTCFullYear() % 1e4, t, 4);
}
function IU() {
  return "+0000";
}
function RP() {
  return "%";
}
function DP(e) {
  return +e;
}
function NP(e) {
  return Math.floor(+e / 1e3);
}
var co, SM, AM;
MU({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function MU(e) {
  return co = Mz(e), SM = co.format, co.parse, AM = co.utcFormat, co.utcParse, co;
}
function RU(e) {
  return new Date(e);
}
function DU(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function q0(e, t, r, n, i, a, o, s, l, f) {
  var p = P0(), d = p.invert, v = p.domain, m = f(".%L"), g = f(":%S"), b = f("%I:%M"), y = f("%I %p"), _ = f("%a %d"), O = f("%b %d"), S = f("%B"), P = f("%Y");
  function x(A) {
    return (l(A) < A ? m : s(A) < A ? g : o(A) < A ? b : a(A) < A ? y : n(A) < A ? i(A) < A ? _ : O : r(A) < A ? S : P)(A);
  }
  return p.invert = function(A) {
    return new Date(d(A));
  }, p.domain = function(A) {
    return arguments.length ? v(Array.from(A, DU)) : v().map(RU);
  }, p.ticks = function(A) {
    var C = v();
    return e(C[0], C[C.length - 1], A ?? 10);
  }, p.tickFormat = function(A, C) {
    return C == null ? x : f(C);
  }, p.nice = function(A) {
    var C = v();
    return (!A || typeof A.range != "function") && (A = t(C[0], C[C.length - 1], A ?? 10)), A ? v(fM(C, A)) : p;
  }, p.copy = function() {
    return ac(p, q0(e, t, r, n, i, a, o, s, l, f));
  }, p;
}
function NU() {
  return pn.apply(q0(Cz, Iz, wi, L0, sd, oc, j0, N0, Sa, SM).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function $U() {
  return pn.apply(q0(Tz, Ez, _i, B0, cd, ud, k0, $0, Sa, AM).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ld() {
  var e = 0, t = 1, r, n, i, a, o = yr, s = !1, l;
  function f(d) {
    return d == null || isNaN(d = +d) ? l : o(i === 0 ? 0.5 : (d = (a(d) - r) * i, s ? Math.max(0, Math.min(1, d)) : d));
  }
  f.domain = function(d) {
    return arguments.length ? ([e, t] = d, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(d) {
    return arguments.length ? (s = !!d, f) : s;
  }, f.interpolator = function(d) {
    return arguments.length ? (o = d, f) : o;
  };
  function p(d) {
    return function(v) {
      var m, g;
      return arguments.length ? ([m, g] = v, o = d(m, g), f) : [o(0), o(1)];
    };
  }
  return f.range = p(nu), f.rangeRound = p(A0), f.unknown = function(d) {
    return arguments.length ? (l = d, f) : l;
  }, function(d) {
    return a = d, r = d(e), n = d(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function ea(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function PM() {
  var e = Qi(ld()(yr));
  return e.copy = function() {
    return ea(e, PM());
  }, Ai.apply(e, arguments);
}
function TM() {
  var e = C0(ld()).domain([1, 10]);
  return e.copy = function() {
    return ea(e, TM()).base(e.base());
  }, Ai.apply(e, arguments);
}
function EM() {
  var e = I0(ld());
  return e.copy = function() {
    return ea(e, EM()).constant(e.constant());
  }, Ai.apply(e, arguments);
}
function F0() {
  var e = M0(ld());
  return e.copy = function() {
    return ea(e, F0()).exponent(e.exponent());
  }, Ai.apply(e, arguments);
}
function jU() {
  return F0.apply(null, arguments).exponent(0.5);
}
function CM() {
  var e = [], t = yr;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((nc(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Vi), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => _W(e, a / n));
  }, r.copy = function() {
    return CM(t).domain(e);
  }, Ai.apply(r, arguments);
}
function fd() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, l, f = yr, p, d = !1, v;
  function m(b) {
    return isNaN(b = +b) ? v : (b = 0.5 + ((b = +p(b)) - a) * (n * b < n * a ? s : l), f(d ? Math.max(0, Math.min(1, b)) : b));
  }
  m.domain = function(b) {
    return arguments.length ? ([e, t, r] = b, i = p(e = +e), a = p(t = +t), o = p(r = +r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, m) : [e, t, r];
  }, m.clamp = function(b) {
    return arguments.length ? (d = !!b, m) : d;
  }, m.interpolator = function(b) {
    return arguments.length ? (f = b, m) : f;
  };
  function g(b) {
    return function(y) {
      var _, O, S;
      return arguments.length ? ([_, O, S] = y, f = VW(b, [_, O, S]), m) : [f(0), f(0.5), f(1)];
    };
  }
  return m.range = g(nu), m.rangeRound = g(A0), m.unknown = function(b) {
    return arguments.length ? (v = b, m) : v;
  }, function(b) {
    return p = b, i = b(e), a = b(t), o = b(r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, m;
  };
}
function IM() {
  var e = Qi(fd()(yr));
  return e.copy = function() {
    return ea(e, IM());
  }, Ai.apply(e, arguments);
}
function MM() {
  var e = C0(fd()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ea(e, MM()).base(e.base());
  }, Ai.apply(e, arguments);
}
function RM() {
  var e = I0(fd());
  return e.copy = function() {
    return ea(e, RM()).constant(e.constant());
  }, Ai.apply(e, arguments);
}
function W0() {
  var e = M0(fd());
  return e.copy = function() {
    return ea(e, W0()).exponent(e.exponent());
  }, Ai.apply(e, arguments);
}
function kU() {
  return W0.apply(null, arguments).exponent(0.5);
}
const $P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: gs,
  scaleDiverging: IM,
  scaleDivergingLog: MM,
  scaleDivergingPow: W0,
  scaleDivergingSqrt: kU,
  scaleDivergingSymlog: RM,
  scaleIdentity: lM,
  scaleImplicit: Ly,
  scaleLinear: nf,
  scaleLog: dM,
  scaleOrdinal: _0,
  scalePoint: ts,
  scalePow: R0,
  scaleQuantile: vM,
  scaleQuantize: mM,
  scaleRadial: hM,
  scaleSequential: PM,
  scaleSequentialLog: TM,
  scaleSequentialPow: F0,
  scaleSequentialQuantile: CM,
  scaleSequentialSqrt: jU,
  scaleSequentialSymlog: EM,
  scaleSqrt: gz,
  scaleSymlog: pM,
  scaleThreshold: gM,
  scaleTime: NU,
  scaleUtc: $U,
  tickFormat: cM
}, Symbol.toStringTag, { value: "Module" }));
var sg, jP;
function dd() {
  if (jP) return sg;
  jP = 1;
  var e = Qo();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var s = r[a], l = n(s);
      if (l != null && (f === void 0 ? l === l && !e(l) : i(l, f)))
        var f = l, p = s;
    }
    return p;
  }
  return sg = t, sg;
}
var cg, kP;
function DM() {
  if (kP) return cg;
  kP = 1;
  function e(t, r) {
    return t > r;
  }
  return cg = e, cg;
}
var lg, LP;
function LU() {
  if (LP) return lg;
  LP = 1;
  var e = dd(), t = DM(), r = ru();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return lg = n, lg;
}
var BU = LU();
const Hi = /* @__PURE__ */ ut(BU);
var fg, BP;
function NM() {
  if (BP) return fg;
  BP = 1;
  function e(t, r) {
    return t < r;
  }
  return fg = e, fg;
}
var dg, qP;
function qU() {
  if (qP) return dg;
  qP = 1;
  var e = dd(), t = NM(), r = ru();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return dg = n, dg;
}
var FU = qU();
const pd = /* @__PURE__ */ ut(FU);
var pg, FP;
function WU() {
  if (FP) return pg;
  FP = 1;
  var e = i0(), t = Zn(), r = W2(), n = Rr();
  function i(a, o) {
    var s = n(a) ? e : r;
    return s(a, t(o, 3));
  }
  return pg = i, pg;
}
var hg, WP;
function zU() {
  if (WP) return hg;
  WP = 1;
  var e = q2(), t = WU();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return hg = r, hg;
}
var UU = zU();
const HU = /* @__PURE__ */ ut(UU);
var vg, zP;
function GU() {
  if (zP) return vg;
  zP = 1;
  var e = g0();
  function t(r, n) {
    return e(r, n);
  }
  return vg = t, vg;
}
var KU = GU();
const Na = /* @__PURE__ */ ut(KU);
var iu = 1e9, VU = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, U0, xt = !0, ln = "[DecimalError] ", Ia = ln + "Invalid argument: ", z0 = ln + "Exponent out of range: ", au = Math.floor, xa = Math.pow, YU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ur, Zt = 1e7, mt = 7, $M = 9007199254740991, sf = au($M / mt), Se = {};
Se.absoluteValue = Se.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
Se.comparedTo = Se.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
Se.decimalPlaces = Se.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * mt;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
Se.dividedBy = Se.div = function(e) {
  return bi(this, new this.constructor(e));
};
Se.dividedToIntegerBy = Se.idiv = function(e) {
  var t = this, r = t.constructor;
  return lt(bi(t, new r(e), 0, 1), r.precision);
};
Se.equals = Se.eq = function(e) {
  return !this.cmp(e);
};
Se.exponent = function() {
  return kt(this);
};
Se.greaterThan = Se.gt = function(e) {
  return this.cmp(e) > 0;
};
Se.greaterThanOrEqualTo = Se.gte = function(e) {
  return this.cmp(e) >= 0;
};
Se.isInteger = Se.isint = function() {
  return this.e > this.d.length - 2;
};
Se.isNegative = Se.isneg = function() {
  return this.s < 0;
};
Se.isPositive = Se.ispos = function() {
  return this.s > 0;
};
Se.isZero = function() {
  return this.s === 0;
};
Se.lessThan = Se.lt = function(e) {
  return this.cmp(e) < 0;
};
Se.lessThanOrEqualTo = Se.lte = function(e) {
  return this.cmp(e) < 1;
};
Se.logarithm = Se.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ur)) throw Error(ln + "NaN");
  if (r.s < 1) throw Error(ln + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ur) ? new n(0) : (xt = !1, t = bi(_s(r, a), _s(e, a), a), xt = !0, lt(t, i));
};
Se.minus = Se.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? LM(t, e) : jM(t, (e.s = -e.s, e));
};
Se.modulo = Se.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ln + "NaN");
  return r.s ? (xt = !1, t = bi(r, e, 0, 1).times(e), xt = !0, r.minus(t)) : lt(new n(r), i);
};
Se.naturalExponential = Se.exp = function() {
  return kM(this);
};
Se.naturalLogarithm = Se.ln = function() {
  return _s(this);
};
Se.negated = Se.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
Se.plus = Se.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? jM(t, e) : LM(t, (e.s = -e.s, e));
};
Se.precision = Se.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ia + e);
  if (t = kt(i) + 1, n = i.d.length - 1, r = n * mt + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
Se.squareRoot = Se.sqrt = function() {
  var e, t, r, n, i, a, o, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(ln + "NaN");
  }
  for (e = kt(s), xt = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = Wn(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = au((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(bi(s, a, o + 2)).times(0.5), Wn(a.d).slice(0, o) === (t = Wn(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (lt(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return xt = !0, lt(n, r);
};
Se.times = Se.mul = function(e) {
  var t, r, n, i, a, o, s, l, f, p = this, d = p.constructor, v = p.d, m = (e = new d(e)).d;
  if (!p.s || !e.s) return new d(0);
  for (e.s *= p.s, r = p.e + e.e, l = v.length, f = m.length, l < f && (a = v, v = m, m = a, o = l, l = f, f = o), a = [], o = l + f, n = o; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      s = a[i] + m[n] * v[i - n - 1] + t, a[i--] = s % Zt | 0, t = s / Zt | 0;
    a[i] = (a[i] + t) % Zt | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, xt ? lt(e, d.precision) : e;
};
Se.toDecimalPlaces = Se.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Yn(e, 0, iu), t === void 0 ? t = n.rounding : Yn(t, 0, 8), lt(r, e + kt(r) + 1, t));
};
Se.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = $a(n, !0) : (Yn(e, 0, iu), t === void 0 ? t = i.rounding : Yn(t, 0, 8), n = lt(new i(n), e + 1, t), r = $a(n, !0, e + 1)), r;
};
Se.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? $a(i) : (Yn(e, 0, iu), t === void 0 ? t = a.rounding : Yn(t, 0, 8), n = lt(new a(i), e + kt(i) + 1, t), r = $a(n.abs(), !1, e + kt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
Se.toInteger = Se.toint = function() {
  var e = this, t = e.constructor;
  return lt(new t(e), kt(e) + 1, t.rounding);
};
Se.toNumber = function() {
  return +this;
};
Se.toPower = Se.pow = function(e) {
  var t, r, n, i, a, o, s = this, l = s.constructor, f = 12, p = +(e = new l(e));
  if (!e.s) return new l(Ur);
  if (s = new l(s), !s.s) {
    if (e.s < 1) throw Error(ln + "Infinity");
    return s;
  }
  if (s.eq(Ur)) return s;
  if (n = l.precision, e.eq(Ur)) return lt(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = p < 0 ? -p : p) <= $M) {
      for (i = new l(Ur), t = Math.ceil(n / mt + 4), xt = !1; r % 2 && (i = i.times(s), HP(i.d, t)), r = au(r / 2), r !== 0; )
        s = s.times(s), HP(s.d, t);
      return xt = !0, e.s < 0 ? new l(Ur).div(i) : lt(i, n);
    }
  } else if (a < 0) throw Error(ln + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, xt = !1, i = e.times(_s(s, n + f)), xt = !0, i = kM(i), i.s = a, i;
};
Se.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = kt(i), n = $a(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Yn(e, 1, iu), t === void 0 ? t = a.rounding : Yn(t, 0, 8), i = lt(new a(i), e, t), r = kt(i), n = $a(i, e <= r || r <= a.toExpNeg, e)), n;
};
Se.toSignificantDigits = Se.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Yn(e, 1, iu), t === void 0 ? t = n.rounding : Yn(t, 0, 8)), lt(new n(r), e, t);
};
Se.toString = Se.valueOf = Se.val = Se.toJSON = Se[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = kt(e), r = e.constructor;
  return $a(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function jM(e, t) {
  var r, n, i, a, o, s, l, f, p = e.constructor, d = p.precision;
  if (!e.s || !t.s)
    return t.s || (t = new p(e)), xt ? lt(t, d) : t;
  if (l = e.d, f = t.d, o = e.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, s = f.length) : (n = f, i = o, s = l.length), o = Math.ceil(d / mt), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = f.length, s - a < 0 && (a = s, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Zt | 0, l[a] %= Zt;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, xt ? lt(t, d) : t;
}
function Yn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ia + e);
}
function Wn(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = mt - n.length, r && (a += Wi(r)), a += n;
    o = e[t], n = o + "", r = mt - n.length, r && (a += Wi(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var bi = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + o, n[s] = a % Zt | 0, o = a / Zt | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, l;
    if (a != o)
      l = a > o ? 1 : -1;
    else
      for (s = l = 0; s < a; s++)
        if (n[s] != i[s]) {
          l = n[s] > i[s] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Zt + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, l, f, p, d, v, m, g, b, y, _, O, S, P, x, A, C, M, N = n.constructor, z = n.s == i.s ? 1 : -1, D = n.d, W = i.d;
    if (!n.s) return new N(n);
    if (!i.s) throw Error(ln + "Division by zero");
    for (l = n.e - i.e, C = W.length, x = D.length, m = new N(z), g = m.d = [], f = 0; W[f] == (D[f] || 0); ) ++f;
    if (W[f] > (D[f] || 0) && --l, a == null ? O = a = N.precision : o ? O = a + (kt(n) - kt(i)) + 1 : O = a, O < 0) return new N(0);
    if (O = O / mt + 2 | 0, f = 0, C == 1)
      for (p = 0, W = W[0], O++; (f < x || p) && O--; f++)
        S = p * Zt + (D[f] || 0), g[f] = S / W | 0, p = S % W | 0;
    else {
      for (p = Zt / (W[0] + 1) | 0, p > 1 && (W = e(W, p), D = e(D, p), C = W.length, x = D.length), P = C, b = D.slice(0, C), y = b.length; y < C; ) b[y++] = 0;
      M = W.slice(), M.unshift(0), A = W[0], W[1] >= Zt / 2 && ++A;
      do
        p = 0, s = t(W, b, C, y), s < 0 ? (_ = b[0], C != y && (_ = _ * Zt + (b[1] || 0)), p = _ / A | 0, p > 1 ? (p >= Zt && (p = Zt - 1), d = e(W, p), v = d.length, y = b.length, s = t(d, b, v, y), s == 1 && (p--, r(d, C < v ? M : W, v))) : (p == 0 && (s = p = 1), d = W.slice()), v = d.length, v < y && d.unshift(0), r(b, d, y), s == -1 && (y = b.length, s = t(W, b, C, y), s < 1 && (p++, r(b, C < y ? M : W, y))), y = b.length) : s === 0 && (p++, b = [0]), g[f++] = p, s && b[0] ? b[y++] = D[P] || 0 : (b = [D[P]], y = 1);
      while ((P++ < x || b[0] !== void 0) && O--);
    }
    return g[0] || g.shift(), m.e = l, lt(m, o ? a + kt(m) + 1 : a);
  };
}();
function kM(e, t) {
  var r, n, i, a, o, s, l = 0, f = 0, p = e.constructor, d = p.precision;
  if (kt(e) > 16) throw Error(z0 + kt(e));
  if (!e.s) return new p(Ur);
  for (xt = !1, s = d, o = new p(0.03125); e.abs().gte(0.1); )
    e = e.times(o), f += 5;
  for (n = Math.log(xa(2, f)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new p(Ur), p.precision = s; ; ) {
    if (i = lt(i.times(e), s), r = r.times(++l), o = a.plus(bi(i, r, s)), Wn(o.d).slice(0, s) === Wn(a.d).slice(0, s)) {
      for (; f--; ) a = lt(a.times(a), s);
      return p.precision = d, t == null ? (xt = !0, lt(a, d)) : a;
    }
    a = o;
  }
}
function kt(e) {
  for (var t = e.e * mt, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function mg(e, t, r) {
  if (t > e.LN10.sd())
    throw xt = !0, r && (e.precision = r), Error(ln + "LN10 precision limit exceeded");
  return lt(new e(e.LN10), t);
}
function Wi(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function _s(e, t) {
  var r, n, i, a, o, s, l, f, p, d = 1, v = 10, m = e, g = m.d, b = m.constructor, y = b.precision;
  if (m.s < 1) throw Error(ln + (m.s ? "NaN" : "-Infinity"));
  if (m.eq(Ur)) return new b(0);
  if (t == null ? (xt = !1, f = y) : f = t, m.eq(10))
    return t == null && (xt = !0), mg(b, f);
  if (f += v, b.precision = f, r = Wn(g), n = r.charAt(0), a = kt(m), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      m = m.times(e), r = Wn(m.d), n = r.charAt(0), d++;
    a = kt(m), n > 1 ? (m = new b("0." + r), a++) : m = new b(n + "." + r.slice(1));
  } else
    return l = mg(b, f + 2, y).times(a + ""), m = _s(new b(n + "." + r.slice(1)), f - v).plus(l), b.precision = y, t == null ? (xt = !0, lt(m, y)) : m;
  for (s = o = m = bi(m.minus(Ur), m.plus(Ur), f), p = lt(m.times(m), f), i = 3; ; ) {
    if (o = lt(o.times(p), f), l = s.plus(bi(o, new b(i), f)), Wn(l.d).slice(0, f) === Wn(s.d).slice(0, f))
      return s = s.times(2), a !== 0 && (s = s.plus(mg(b, f + 2, y).times(a + ""))), s = bi(s, new b(d), f), b.precision = y, t == null ? (xt = !0, lt(s, y)) : s;
    s = l, i += 2;
  }
}
function UP(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = au(r / mt), e.d = [], n = (r + 1) % mt, r < 0 && (n += mt), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= mt; n < i; ) e.d.push(+t.slice(n, n += mt));
      t = t.slice(n), n = mt - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), xt && (e.e > sf || e.e < -sf)) throw Error(z0 + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function lt(e, t, r) {
  var n, i, a, o, s, l, f, p, d = e.d;
  for (o = 1, a = d[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += mt, i = t, f = d[p = 0];
  else {
    if (p = Math.ceil((n + 1) / mt), a = d.length, p >= a) return e;
    for (f = a = d[p], o = 1; a >= 10; a /= 10) o++;
    n %= mt, i = n - mt + o;
  }
  if (r !== void 0 && (a = xa(10, o - i - 1), s = f / a % 10 | 0, l = t < 0 || d[p + 1] !== void 0 || f % a, l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / xa(10, o - i) : 0 : d[p - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return l ? (a = kt(e), d.length = 1, t = t - a - 1, d[0] = xa(10, (mt - t % mt) % mt), e.e = au(-t / mt) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = p, a = 1, p--) : (d.length = p + 1, a = xa(10, mt - n), d[p] = i > 0 ? (f / xa(10, o - i) % xa(10, i) | 0) * a : 0), l)
    for (; ; )
      if (p == 0) {
        (d[0] += a) == Zt && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[p] += a, d[p] != Zt) break;
        d[p--] = 0, a = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (xt && (e.e > sf || e.e < -sf))
    throw Error(z0 + kt(e));
  return e;
}
function LM(e, t) {
  var r, n, i, a, o, s, l, f, p, d, v = e.constructor, m = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), xt ? lt(t, m) : t;
  if (l = e.d, d = t.d, n = t.e, f = e.e, l = l.slice(), o = f - n, o) {
    for (p = o < 0, p ? (r = l, o = -o, s = d.length) : (r = d, n = f, s = l.length), i = Math.max(Math.ceil(m / mt), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, s = d.length, p = i < s, p && (s = i), i = 0; i < s; i++)
      if (l[i] != d[i]) {
        p = l[i] < d[i];
        break;
      }
    o = 0;
  }
  for (p && (r = l, l = d, d = r, t.s = -t.s), s = l.length, i = d.length - s; i > 0; --i) l[s++] = 0;
  for (i = d.length; i > o; ) {
    if (l[--i] < d[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Zt - 1;
      --l[a], l[i] += Zt;
    }
    l[i] -= d[i];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, xt ? lt(t, m) : t) : new v(0);
}
function $a(e, t, r) {
  var n, i = kt(e), a = Wn(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Wi(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Wi(-i - 1) + a, r && (n = r - o) > 0 && (a += Wi(n))) : i >= o ? (a += Wi(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Wi(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Wi(n))), e.s < 0 ? "-" + a : a;
}
function HP(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function BM(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Ia + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return UP(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Ia + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, YU.test(a)) UP(o, a);
    else throw Error(Ia + a);
  }
  if (i.prototype = Se, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = BM, i.config = i.set = XU, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function XU(e) {
  if (!e || typeof e != "object")
    throw Error(ln + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    iu,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (au(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ia + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ia + r + ": " + n);
  return this;
}
var U0 = BM(VU);
Ur = new U0(1);
const ot = U0;
function ZU(e) {
  return t7(e) || e7(e) || QU(e) || JU();
}
function JU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QU(e, t) {
  if (e) {
    if (typeof e == "string") return Wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wy(e, t);
  }
}
function e7(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function t7(e) {
  if (Array.isArray(e)) return Wy(e);
}
function Wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var r7 = function(t) {
  return t;
}, qM = {}, FM = function(t) {
  return t === qM;
}, GP = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && FM(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, n7 = function e(t, r) {
  return t === 1 ? r : GP(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== qM;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, GP(function() {
      for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
        l[f] = arguments[f];
      var p = i.map(function(d) {
        return FM(d) ? l.shift() : d;
      });
      return r.apply(void 0, ZU(p).concat(l));
    }));
  });
}, hd = function(t) {
  return n7(t.length, t);
}, zy = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, i7 = hd(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), a7 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return r7;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, Uy = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, WM = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function o7(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ot(e).abs().log(10).toNumber()) + 1, t;
}
function u7(e, t, r) {
  for (var n = new ot(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var s7 = hd(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), c7 = hd(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), l7 = hd(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const vd = {
  rangeStep: u7,
  getDigitCount: o7,
  interpolateNumber: s7,
  uninterpolateNumber: c7,
  uninterpolateTruncation: l7
};
function Hy(e) {
  return p7(e) || d7(e) || zM(e) || f7();
}
function f7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d7(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function p7(e) {
  if (Array.isArray(e)) return Gy(e);
}
function Os(e, t) {
  return m7(e) || v7(e, t) || zM(e, t) || h7();
}
function h7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zM(e, t) {
  if (e) {
    if (typeof e == "string") return Gy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gy(e, t);
  }
}
function Gy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function v7(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function m7(e) {
  if (Array.isArray(e)) return e;
}
function UM(e) {
  var t = Os(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function HM(e, t, r) {
  if (e.lte(0))
    return new ot(0);
  var n = vd.getDigitCount(e.toNumber()), i = new ot(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new ot(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = s.mul(i);
  return t ? l : new ot(Math.ceil(l));
}
function g7(e, t, r) {
  var n = 1, i = new ot(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ot(10).pow(vd.getDigitCount(e) - 1), i = new ot(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ot(Math.floor(e)));
  } else e === 0 ? i = new ot(Math.floor((t - 1) / 2)) : r || (i = new ot(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = a7(i7(function(l) {
    return i.add(new ot(l - o).mul(n)).toNumber();
  }), zy);
  return s(0, t);
}
function GM(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ot(0),
      tickMin: new ot(0),
      tickMax: new ot(0)
    };
  var a = HM(new ot(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ot(0) : (o = new ot(e).add(t).div(2), o = o.sub(new ot(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), l = Math.ceil(new ot(t).sub(o).div(a).toNumber()), f = s + l + 1;
  return f > r ? GM(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, s = t > 0 ? s : s + (r - f)), {
    step: a,
    tickMin: o.sub(new ot(s).mul(a)),
    tickMax: o.add(new ot(l).mul(a))
  });
}
function y7(e) {
  var t = Os(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = UM([r, n]), l = Os(s, 2), f = l[0], p = l[1];
  if (f === -1 / 0 || p === 1 / 0) {
    var d = p === 1 / 0 ? [f].concat(Hy(zy(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Hy(zy(0, i - 1).map(function() {
      return -1 / 0;
    })), [p]);
    return r > n ? Uy(d) : d;
  }
  if (f === p)
    return g7(f, i, a);
  var v = GM(f, p, o, a), m = v.step, g = v.tickMin, b = v.tickMax, y = vd.rangeStep(g, b.add(new ot(0.1).mul(m)), m);
  return r > n ? Uy(y) : y;
}
function b7(e, t) {
  var r = Os(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = UM([n, i]), s = Os(o, 2), l = s[0], f = s[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var p = Math.max(t, 2), d = HM(new ot(f).sub(l).div(p - 1), a, 0), v = [].concat(Hy(vd.rangeStep(new ot(l), new ot(f).sub(new ot(0.99).mul(d)), d)), [f]);
  return n > i ? Uy(v) : v;
}
var x7 = WM(y7), w7 = WM(b7), _7 = process.env.NODE_ENV === "production", gg = "Invariant failed";
function Ir(e, t) {
  if (_7)
    throw new Error(gg);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(gg, ": ").concat(r) : gg;
  throw new Error(n);
}
var O7 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function S7(e, t) {
  return E7(e) || T7(e, t) || P7(e, t) || A7();
}
function A7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P7(e, t) {
  if (e) {
    if (typeof e == "string") return KP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return KP(e, t);
  }
}
function KP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function T7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function E7(e) {
  if (Array.isArray(e)) return e;
}
function C7(e, t) {
  if (e == null) return {};
  var r = I7(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function M7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, YM(n.key), n);
  }
}
function D7(e, t, r) {
  return t && R7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N7(e, t, r) {
  return t = lf(t), $7(e, KM() ? Reflect.construct(t, r || [], lf(e).constructor) : t.apply(e, r));
}
function $7(e, t) {
  if (t && (Ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j7(e);
}
function j7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KM() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KM = function() {
    return !!e;
  })();
}
function lf(e) {
  return lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lf(e);
}
function k7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ky(e, t);
}
function Ky(e, t) {
  return Ky = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ky(e, t);
}
function VM(e, t, r) {
  return t = YM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YM(e) {
  var t = L7(e, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function L7(e, t) {
  if (Ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uc = /* @__PURE__ */ function(e) {
  function t() {
    return M7(this, t), N7(this, t, arguments);
  }
  return k7(t, e), D7(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, l = n.data, f = n.dataPointFormatter, p = n.xAxis, d = n.yAxis, v = C7(n, O7), m = Te(v, !1);
      this.props.direction === "x" && p.type !== "number" && (process.env.NODE_ENV !== "production" ? Ir(!1, 'ErrorBar requires Axis type property to be "number".') : Ir());
      var g = l.map(function(b) {
        var y = f(b, s), _ = y.x, O = y.y, S = y.value, P = y.errorVal;
        if (!P)
          return null;
        var x = [], A, C;
        if (Array.isArray(P)) {
          var M = S7(P, 2);
          A = M[0], C = M[1];
        } else
          A = C = P;
        if (a === "vertical") {
          var N = p.scale, z = O + i, D = z + o, W = z - o, q = N(S - A), $ = N(S + C);
          x.push({
            x1: $,
            y1: D,
            x2: $,
            y2: W
          }), x.push({
            x1: q,
            y1: z,
            x2: $,
            y2: z
          }), x.push({
            x1: q,
            y1: D,
            x2: q,
            y2: W
          });
        } else if (a === "horizontal") {
          var j = d.scale, F = _ + i, V = F - o, Z = F + o, Q = j(S - A), G = j(S + C);
          x.push({
            x1: V,
            y1: G,
            x2: Z,
            y2: G
          }), x.push({
            x1: F,
            y1: Q,
            x2: F,
            y2: G
          }), x.push({
            x1: V,
            y1: Q,
            x2: Z,
            y2: Q
          });
        }
        return /* @__PURE__ */ k.createElement(Ge, cf({
          className: "recharts-errorBar",
          key: "bar-".concat(x.map(function(X) {
            return "".concat(X.x1, "-").concat(X.x2, "-").concat(X.y1, "-").concat(X.y2);
          }))
        }, m), x.map(function(X) {
          return /* @__PURE__ */ k.createElement("line", cf({}, X, {
            key: "line-".concat(X.x1, "-").concat(X.x2, "-").concat(X.y1, "-").concat(X.y2)
          }));
        }));
      });
      return /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-errorBars"
      }, g);
    }
  }]);
}(k.Component);
VM(uc, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
VM(uc, "displayName", "ErrorBar");
function Ss(e) {
  "@babel/helpers - typeof";
  return Ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ss(e);
}
function VP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? VP(Object(r), !0).forEach(function(n) {
      B7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B7(e, t, r) {
  return t = q7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q7(e) {
  var t = F7(e, "string");
  return Ss(t) == "symbol" ? t : t + "";
}
function F7(e, t) {
  if (Ss(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ss(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var XM = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = zr(r, Ea);
  if (!o)
    return null;
  var s = Ea.defaultProps, l = s !== void 0 ? va(va({}, s), o.props) : {}, f;
  return o.props && o.props.payload ? f = o.props && o.props.payload : a === "children" ? f = (n || []).reduce(function(p, d) {
    var v = d.item, m = d.props, g = m.sectors || m.data || [];
    return p.concat(g.map(function(b) {
      return {
        type: o.props.iconType || v.props.legendType,
        value: b.name,
        color: b.fill,
        payload: b
      };
    }));
  }, []) : f = (n || []).map(function(p) {
    var d = p.item, v = d.type.defaultProps, m = v !== void 0 ? va(va({}, v), d.props) : {}, g = m.dataKey, b = m.name, y = m.legendType, _ = m.hide;
    return {
      inactive: _,
      dataKey: g,
      type: l.iconType || y || "square",
      color: H0(d),
      value: b || g,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: m
    };
  }), va(va(va({}, l), Ea.getWithHeight(o, i)), {}, {
    payload: f,
    item: o
  });
};
function As(e) {
  "@babel/helpers - typeof";
  return As = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, As(e);
}
function YP(e) {
  return H7(e) || U7(e) || z7(e) || W7();
}
function W7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z7(e, t) {
  if (e) {
    if (typeof e == "string") return Vy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vy(e, t);
  }
}
function U7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function H7(e) {
  if (Array.isArray(e)) return Vy(e);
}
function Vy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function XP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? XP(Object(r), !0).forEach(function(n) {
      _o(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : XP(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _o(e, t, r) {
  return t = G7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G7(e) {
  var t = K7(e, "string");
  return As(t) == "symbol" ? t : t + "";
}
function K7(e, t) {
  if (As(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (As(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $t(e, t, r) {
  return $e(e) || $e(t) ? r : Kt(t) ? Hr(e, t, r) : Ne(t) ? t(e) : r;
}
function rs(e, t, r, n) {
  var i = HU(e, function(s) {
    return $t(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return pe(s) || parseFloat(s);
    });
    return a.length ? [pd(a), Hi(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !$e(s);
  }) : i;
  return o.map(function(s) {
    return Kt(s) || s instanceof Date ? s : "";
  });
}
var V7 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < s; f++) {
      var p = f > 0 ? i[f - 1].coordinate : i[s - 1].coordinate, d = i[f].coordinate, v = f >= s - 1 ? i[0].coordinate : i[f + 1].coordinate, m = void 0;
      if (mr(d - p) !== mr(v - d)) {
        var g = [];
        if (mr(v - d) === mr(l[1] - l[0])) {
          m = v;
          var b = d + l[1] - l[0];
          g[0] = Math.min(b, (b + p) / 2), g[1] = Math.max(b, (b + p) / 2);
        } else {
          m = p;
          var y = v + l[1] - l[0];
          g[0] = Math.min(d, (y + d) / 2), g[1] = Math.max(d, (y + d) / 2);
        }
        var _ = [Math.min(d, (m + d) / 2), Math.max(d, (m + d) / 2)];
        if (t > _[0] && t <= _[1] || t >= g[0] && t <= g[1]) {
          o = i[f].index;
          break;
        }
      } else {
        var O = Math.min(p, v), S = Math.max(p, v);
        if (t > (O + d) / 2 && t <= (S + d) / 2) {
          o = i[f].index;
          break;
        }
      }
    }
  else
    for (var P = 0; P < s; P++)
      if (P === 0 && t <= (n[P].coordinate + n[P + 1].coordinate) / 2 || P > 0 && P < s - 1 && t > (n[P].coordinate + n[P - 1].coordinate) / 2 && t <= (n[P].coordinate + n[P + 1].coordinate) / 2 || P === s - 1 && t > (n[P].coordinate + n[P - 1].coordinate) / 2) {
        o = n[P].index;
        break;
      }
  return o;
}, H0 = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ct(Ct({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, l;
  switch (i) {
    case "Line":
      l = o;
      break;
    case "Area":
    case "Radar":
      l = o && o !== "none" ? o : s;
      break;
    default:
      l = s;
      break;
  }
  return l;
}, Y7 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), l = 0, f = s.length; l < f; l++)
    for (var p = a[s[l]].stackGroups, d = Object.keys(p), v = 0, m = d.length; v < m; v++) {
      var g = p[d[v]], b = g.items, y = g.cateAxisId, _ = b.filter(function(C) {
        return yi(C.type).indexOf("Bar") >= 0;
      });
      if (_ && _.length) {
        var O = _[0].type.defaultProps, S = O !== void 0 ? Ct(Ct({}, O), _[0].props) : _[0].props, P = S.barSize, x = S[y];
        o[x] || (o[x] = []);
        var A = $e(P) ? r : P;
        o[x].push({
          item: _[0],
          stackList: _.slice(1),
          barSize: $e(A) ? void 0 : gr(A, n, 0)
        });
      }
    }
  return o;
}, X7 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, l = o.length;
  if (l < 1) return null;
  var f = gr(r, i, 0, !0), p, d = [];
  if (o[0].barSize === +o[0].barSize) {
    var v = !1, m = i / l, g = o.reduce(function(P, x) {
      return P + x.barSize || 0;
    }, 0);
    g += (l - 1) * f, g >= i && (g -= (l - 1) * f, f = 0), g >= i && m > 0 && (v = !0, m *= 0.9, g = l * m);
    var b = (i - g) / 2 >> 0, y = {
      offset: b - f,
      size: 0
    };
    p = o.reduce(function(P, x) {
      var A = {
        item: x.item,
        position: {
          offset: y.offset + y.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? m : x.barSize
        }
      }, C = [].concat(YP(P), [A]);
      return y = C[C.length - 1].position, x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: y
        });
      }), C;
    }, d);
  } else {
    var _ = gr(n, i, 0, !0);
    i - 2 * _ - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * _ - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var S = s === +s ? Math.min(O, s) : O;
    p = o.reduce(function(P, x, A) {
      var C = [].concat(YP(P), [{
        item: x.item,
        position: {
          offset: _ + (O + f) * A + (O - S) / 2,
          size: S
        }
      }]);
      return x.stackList && x.stackList.length && x.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: C[C.length - 1].position
        });
      }), C;
    }, d);
  }
  return p;
}, Z7 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, l = o - (s.left || 0) - (s.right || 0), f = XM({
    children: a,
    legendWidth: l
  });
  if (f) {
    var p = i || {}, d = p.width, v = p.height, m = f.align, g = f.verticalAlign, b = f.layout;
    if ((b === "vertical" || b === "horizontal" && g === "middle") && m !== "center" && pe(t[m]))
      return Ct(Ct({}, t), {}, _o({}, m, t[m] + (d || 0)));
    if ((b === "horizontal" || b === "vertical" && m === "center") && g !== "middle" && pe(t[g]))
      return Ct(Ct({}, t), {}, _o({}, g, t[g] + (v || 0)));
  }
  return t;
}, J7 = function(t, r, n) {
  return $e(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, ZM = function(t, r, n, i, a) {
  var o = r.props.children, s = Gr(o, uc).filter(function(f) {
    return J7(i, a, f.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, p) {
      var d = $t(p, n);
      if ($e(d)) return f;
      var v = Array.isArray(d) ? [pd(d), Hi(d)] : [d, d], m = l.reduce(function(g, b) {
        var y = $t(p, b, 0), _ = v[0] - Math.abs(Array.isArray(y) ? y[0] : y), O = v[1] + Math.abs(Array.isArray(y) ? y[1] : y);
        return [Math.min(_, g[0]), Math.max(O, g[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(m[0], f[0]), Math.max(m[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, Q7 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return ZM(t, s, n, a, i);
  }).filter(function(s) {
    return !$e(s);
  });
  return o && o.length ? o.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, JM = function(t, r, n, i, a) {
  var o = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && ZM(t, l, f, i) || rs(t, f, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(l, f) {
        return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(l, f) {
    for (var p = 0, d = f.length; p < d; p++)
      s[f[p]] || (s[f[p]] = !0, l.push(f[p]));
    return l;
  }, []);
}, QM = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, eR = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, o, s = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (o = !0), l.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, gi = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? mr(s[0] - s[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
    var p = (t.ticks || t.niceTicks).map(function(d) {
      var v = a ? a.indexOf(d) : d;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(v) + f,
        value: d,
        offset: f
      };
    });
    return p.filter(function(d) {
      return !tu(d.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(d, v) {
    return {
      coordinate: i(d) + f,
      value: d,
      index: v,
      offset: f
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(d) {
    return {
      coordinate: i(d) + f,
      value: d,
      offset: f
    };
  }) : i.domain().map(function(d, v) {
    return {
      coordinate: i(d) + f,
      value: a ? a[d] : d,
      index: v,
      offset: f
    };
  });
}, yg = /* @__PURE__ */ new WeakMap(), _l = function(t, r) {
  if (typeof r != "function")
    return t;
  yg.has(t) || yg.set(t, /* @__PURE__ */ new WeakMap());
  var n = yg.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, tR = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: gs(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: nf(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: ts(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: gs(),
      realScaleType: "band"
    } : {
      scale: nf(),
      realScaleType: "linear"
    };
  if (tc(i)) {
    var l = "scale".concat(Jf(i));
    return {
      scale: ($P[l] || ts)(),
      realScaleType: $P[l] ? l : "point"
    };
  }
  return Ne(i) ? {
    scale: i
  } : {
    scale: ts(),
    realScaleType: "point"
  };
}, ZP = 1e-4, rR = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - ZP, o = Math.max(i[0], i[1]) + ZP, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
  }
}, eH = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, tH = function(t, r) {
  if (!r || r.length !== 2 || !pe(r[0]) || !pe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!pe(t[0]) || t[0] < n) && (a[0] = n), (!pe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, rH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var l = tu(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + l, o = t[s][n][1]);
      }
}, nH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = tu(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, iH = {
  sign: rH,
  // @ts-expect-error definitelytyped types are incorrect
  expand: U6,
  // @ts-expect-error definitelytyped types are incorrect
  none: So,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: H6,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: G6,
  positive: nH
}, aH = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = iH[n], o = z6().keys(i).value(function(s, l) {
    return +$t(s, l, 0);
  }).order(Sy).offset(a);
  return o(t);
}, oH = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, l = {}, f = s.reduce(function(d, v) {
    var m, g = (m = v.type) !== null && m !== void 0 && m.defaultProps ? Ct(Ct({}, v.type.defaultProps), v.props) : v.props, b = g.stackId, y = g.hide;
    if (y)
      return d;
    var _ = g[n], O = d[_] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Kt(b)) {
      var S = O.stackGroups[b] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      S.items.push(v), O.hasStack = !0, O.stackGroups[b] = S;
    } else
      O.stackGroups[qa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Ct(Ct({}, d), {}, _o({}, _, O));
  }, l), p = {};
  return Object.keys(f).reduce(function(d, v) {
    var m = f[v];
    if (m.hasStack) {
      var g = {};
      m.stackGroups = Object.keys(m.stackGroups).reduce(function(b, y) {
        var _ = m.stackGroups[y];
        return Ct(Ct({}, b), {}, _o({}, y, {
          numericAxisId: n,
          cateAxisId: i,
          items: _.items,
          stackedData: aH(t, _.items, a)
        }));
      }, g);
    }
    return Ct(Ct({}, d), {}, _o({}, v, m));
  }, p);
}, nR = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var p = x7(f, a, s);
    return t.domain([pd(p), Hi(p)]), {
      niceTicks: p
    };
  }
  if (a && i === "number") {
    var d = t.domain(), v = w7(d, a, s);
    return {
      niceTicks: v
    };
  }
  return null;
};
function ff(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !$e(i[t.dataKey])) {
      var s = Bl(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = $t(i, $e(o) ? t.dataKey : o);
  return $e(l) ? null : t.scale(l);
}
var JP = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var l = $t(o, r.dataKey, r.domain[s]);
  return $e(l) ? null : r.scale(l) - a / 2 + i;
}, uH = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, sH = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ct(Ct({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Kt(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, cH = function(t) {
  return t.reduce(function(r, n) {
    return [pd(n.concat([r[0]]).filter(pe)), Hi(n.concat([r[1]]).filter(pe))];
  }, [1 / 0, -1 / 0]);
}, iR = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, l = s.reduce(function(f, p) {
      var d = cH(p.slice(r, n + 1));
      return [Math.min(f[0], d[0]), Math.max(f[1], d[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, QP = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, eT = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Yy = function(t, r, n) {
  if (Ne(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (pe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (QP.test(t[0])) {
    var a = +QP.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Ne(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (pe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (eT.test(t[1])) {
    var o = +eT.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Ne(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, df = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = b0(r, function(d) {
      return d.coordinate;
    }), o = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var f = a[s], p = a[s - 1];
      o = Math.min((f.coordinate || 0) - (p.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, tT = function(t, r, n) {
  return !t || !t.length || Na(t, Hr(n, "type.defaultProps.domain")) ? r : t;
}, aR = function(t, r) {
  var n = t.type.defaultProps ? Ct(Ct({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, l = n.tooltipType, f = n.chartType, p = n.hide;
  return Ct(Ct({}, Te(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: H0(t),
    value: $t(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: p
  });
};
function Ps(e) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ps(e);
}
function rT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rT(Object(r), !0).forEach(function(n) {
      oR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oR(e, t, r) {
  return t = lH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lH(e) {
  var t = fH(e, "string");
  return Ps(t) == "symbol" ? t : t + "";
}
function fH(e, t) {
  if (Ps(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ps(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dH(e, t) {
  return mH(e) || vH(e, t) || hH(e, t) || pH();
}
function pH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hH(e, t) {
  if (e) {
    if (typeof e == "string") return nT(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nT(e, t);
  }
}
function nT(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function mH(e) {
  if (Array.isArray(e)) return e;
}
var pf = Math.PI / 180, gH = function(t) {
  return t * 180 / Math.PI;
}, ht = function(t, r, n, i) {
  return {
    x: t + Math.cos(-pf * i) * n,
    y: r + Math.sin(-pf * i) * n
  };
}, uR = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, yH = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.startAngle, f = t.endAngle, p = gr(t.cx, o, o / 2), d = gr(t.cy, s, s / 2), v = uR(o, s, n), m = gr(t.innerRadius, v, 0), g = gr(t.outerRadius, v, v * 0.8), b = Object.keys(r);
  return b.reduce(function(y, _) {
    var O = r[_], S = O.domain, P = O.reversed, x;
    if ($e(O.range))
      i === "angleAxis" ? x = [l, f] : i === "radiusAxis" && (x = [m, g]), P && (x = [x[1], x[0]]);
    else {
      x = O.range;
      var A = x, C = dH(A, 2);
      l = C[0], f = C[1];
    }
    var M = tR(O, a), N = M.realScaleType, z = M.scale;
    z.domain(S).range(x), rR(z);
    var D = nR(z, pi(pi({}, O), {}, {
      realScaleType: N
    })), W = pi(pi(pi({}, O), D), {}, {
      range: x,
      radius: g,
      realScaleType: N,
      scale: z,
      cx: p,
      cy: d,
      innerRadius: m,
      outerRadius: g,
      startAngle: l,
      endAngle: f
    });
    return pi(pi({}, y), {}, oR({}, _, W));
  }, {});
}, bH = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, xH = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = bH({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var l = (n - a) / s, f = Math.acos(l);
  return i > o && (f = 2 * Math.PI - f), {
    radius: s,
    angle: gH(f),
    angleInRadian: f
  };
}, wH = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, _H = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, iT = function(t, r) {
  var n = t.x, i = t.y, a = xH({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (o < l || o > f)
    return !1;
  if (o === 0)
    return !0;
  var p = wH(r), d = p.startAngle, v = p.endAngle, m = s, g;
  if (d <= v) {
    for (; m > v; )
      m -= 360;
    for (; m < d; )
      m += 360;
    g = m >= d && m <= v;
  } else {
    for (; m > d; )
      m -= 360;
    for (; m < v; )
      m += 360;
    g = m >= v && m <= d;
  }
  return g ? pi(pi({}, r), {}, {
    radius: o,
    angle: _H(m, r)
  }) : null;
}, sR = function(t) {
  return !/* @__PURE__ */ Cn(t) && !Ne(t) && typeof t != "boolean" ? t.className : "";
};
function Ts(e) {
  "@babel/helpers - typeof";
  return Ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ts(e);
}
var OH = ["offset"];
function SH(e) {
  return EH(e) || TH(e) || PH(e) || AH();
}
function AH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PH(e, t) {
  if (e) {
    if (typeof e == "string") return Xy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xy(e, t);
  }
}
function TH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EH(e) {
  if (Array.isArray(e)) return Xy(e);
}
function Xy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CH(e, t) {
  if (e == null) return {};
  var r = IH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function aT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aT(Object(r), !0).forEach(function(n) {
      MH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MH(e, t, r) {
  return t = RH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RH(e) {
  var t = DH(e, "string");
  return Ts(t) == "symbol" ? t : t + "";
}
function DH(e, t) {
  if (Ts(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ts(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(this, arguments);
}
var NH = function(t) {
  var r = t.value, n = t.formatter, i = $e(t.children) ? r : t.children;
  return Ne(n) ? n(i) : i;
}, $H = function(t, r) {
  var n = mr(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, jH = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, l = a, f = l.cx, p = l.cy, d = l.innerRadius, v = l.outerRadius, m = l.startAngle, g = l.endAngle, b = l.clockWise, y = (d + v) / 2, _ = $H(m, g), O = _ >= 0 ? 1 : -1, S, P;
  i === "insideStart" ? (S = m + O * o, P = b) : i === "insideEnd" ? (S = g - O * o, P = !b) : i === "end" && (S = g + O * o, P = b), P = _ <= 0 ? P : !P;
  var x = ht(f, p, y, S), A = ht(f, p, y, S + (P ? 1 : -1) * 359), C = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(y, ",").concat(y, ",0,1,").concat(P ? 0 : 1, `,
    `).concat(A.x, ",").concat(A.y), M = $e(t.id) ? qa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Es({}, n, {
    dominantBaseline: "central",
    className: Be("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: M,
    d: C
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(M)
  }, r));
}, kH = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, l = a.innerRadius, f = a.outerRadius, p = a.startAngle, d = a.endAngle, v = (p + d) / 2;
  if (i === "outside") {
    var m = ht(o, s, f + n, v), g = m.x, b = m.y;
    return {
      x: g,
      y: b,
      textAnchor: g >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var y = (l + f) / 2, _ = ht(o, s, y, v), O = _.x, S = _.y;
  return {
    x: O,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, LH = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, l = o.y, f = o.width, p = o.height, d = p >= 0 ? 1 : -1, v = d * i, m = d > 0 ? "end" : "start", g = d > 0 ? "start" : "end", b = f >= 0 ? 1 : -1, y = b * i, _ = b > 0 ? "end" : "start", O = b > 0 ? "start" : "end";
  if (a === "top") {
    var S = {
      x: s + f / 2,
      y: l - d * i,
      textAnchor: "middle",
      verticalAnchor: m
    };
    return Wt(Wt({}, S), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var P = {
      x: s + f / 2,
      y: l + p + v,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return Wt(Wt({}, P), n ? {
      height: Math.max(n.y + n.height - (l + p), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var x = {
      x: s - y,
      y: l + p / 2,
      textAnchor: _,
      verticalAnchor: "middle"
    };
    return Wt(Wt({}, x), n ? {
      width: Math.max(x.x - n.x, 0),
      height: p
    } : {});
  }
  if (a === "right") {
    var A = {
      x: s + f + y,
      y: l + p / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return Wt(Wt({}, A), n ? {
      width: Math.max(n.x + n.width - A.x, 0),
      height: p
    } : {});
  }
  var C = n ? {
    width: f,
    height: p
  } : {};
  return a === "insideLeft" ? Wt({
    x: s + y,
    y: l + p / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, C) : a === "insideRight" ? Wt({
    x: s + f - y,
    y: l + p / 2,
    textAnchor: _,
    verticalAnchor: "middle"
  }, C) : a === "insideTop" ? Wt({
    x: s + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: g
  }, C) : a === "insideBottom" ? Wt({
    x: s + f / 2,
    y: l + p - v,
    textAnchor: "middle",
    verticalAnchor: m
  }, C) : a === "insideTopLeft" ? Wt({
    x: s + y,
    y: l + v,
    textAnchor: O,
    verticalAnchor: g
  }, C) : a === "insideTopRight" ? Wt({
    x: s + f - y,
    y: l + v,
    textAnchor: _,
    verticalAnchor: g
  }, C) : a === "insideBottomLeft" ? Wt({
    x: s + y,
    y: l + p - v,
    textAnchor: O,
    verticalAnchor: m
  }, C) : a === "insideBottomRight" ? Wt({
    x: s + f - y,
    y: l + p - v,
    textAnchor: _,
    verticalAnchor: m
  }, C) : eu(a) && (pe(a.x) || _a(a.x)) && (pe(a.y) || _a(a.y)) ? Wt({
    x: s + gr(a.x, f),
    y: l + gr(a.y, p),
    textAnchor: "end",
    verticalAnchor: "end"
  }, C) : Wt({
    x: s + f / 2,
    y: l + p / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, C);
}, BH = function(t) {
  return "cx" in t && pe(t.cx);
};
function Gt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = CH(e, OH), i = Wt({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, l = i.children, f = i.content, p = i.className, d = p === void 0 ? "" : p, v = i.textBreakAll;
  if (!a || $e(s) && $e(l) && !/* @__PURE__ */ Cn(f) && !Ne(f))
    return null;
  if (/* @__PURE__ */ Cn(f))
    return /* @__PURE__ */ Ut(f, i);
  var m;
  if (Ne(f)) {
    if (m = /* @__PURE__ */ nI(f, i), /* @__PURE__ */ Cn(m))
      return m;
  } else
    m = NH(i);
  var g = BH(a), b = Te(i, !0);
  if (g && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return jH(i, m, b);
  var y = g ? kH(i) : LH(i);
  return /* @__PURE__ */ k.createElement(Xi, Es({
    className: Be("recharts-label", d)
  }, b, y, {
    breakAll: v
  }), m);
}
Gt.displayName = "Label";
var cR = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, l = t.radius, f = t.innerRadius, p = t.outerRadius, d = t.x, v = t.y, m = t.top, g = t.left, b = t.width, y = t.height, _ = t.clockWise, O = t.labelViewBox;
  if (O)
    return O;
  if (pe(b) && pe(y)) {
    if (pe(d) && pe(v))
      return {
        x: d,
        y: v,
        width: b,
        height: y
      };
    if (pe(m) && pe(g))
      return {
        x: m,
        y: g,
        width: b,
        height: y
      };
  }
  return pe(d) && pe(v) ? {
    x: d,
    y: v,
    width: 0,
    height: 0
  } : pe(r) && pe(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: f || 0,
    outerRadius: p || l || s || 0,
    clockWise: _
  } : t.viewBox ? t.viewBox : {};
}, qH = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Gt, {
    key: "label-implicit",
    viewBox: r
  }) : Kt(t) ? /* @__PURE__ */ k.createElement(Gt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Cn(t) ? t.type === Gt ? /* @__PURE__ */ Ut(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ k.createElement(Gt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Ne(t) ? /* @__PURE__ */ k.createElement(Gt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : eu(t) ? /* @__PURE__ */ k.createElement(Gt, Es({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, FH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = cR(t), o = Gr(i, Gt).map(function(l, f) {
    return /* @__PURE__ */ Ut(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return o;
  var s = qH(t.label, r || a);
  return [s].concat(SH(o));
};
Gt.parseViewBox = cR;
Gt.renderCallByParent = FH;
var bg, oT;
function WH() {
  if (oT) return bg;
  oT = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return bg = e, bg;
}
var zH = WH();
const UH = /* @__PURE__ */ ut(zH);
function Cs(e) {
  "@babel/helpers - typeof";
  return Cs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cs(e);
}
var HH = ["valueAccessor"], GH = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function KH(e) {
  return ZH(e) || XH(e) || YH(e) || VH();
}
function VH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YH(e, t) {
  if (e) {
    if (typeof e == "string") return Zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zy(e, t);
  }
}
function XH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ZH(e) {
  if (Array.isArray(e)) return Zy(e);
}
function Zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function uT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uT(Object(r), !0).forEach(function(n) {
      JH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JH(e, t, r) {
  return t = QH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QH(e) {
  var t = eG(e, "string");
  return Cs(t) == "symbol" ? t : t + "";
}
function eG(e, t) {
  if (Cs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cT(e, t) {
  if (e == null) return {};
  var r = tG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var rG = function(t) {
  return Array.isArray(t.value) ? UH(t.value) : t.value;
};
function cn(e) {
  var t = e.valueAccessor, r = t === void 0 ? rG : t, n = cT(e, HH), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, l = n.textBreakAll, f = cT(n, GH);
  return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Ge, {
    className: "recharts-label-list"
  }, i.map(function(p, d) {
    var v = $e(a) ? r(p, d) : $t(p && p.payload, a), m = $e(s) ? {} : {
      id: "".concat(s, "-").concat(d)
    };
    return /* @__PURE__ */ k.createElement(Gt, hf({}, Te(p, !0), f, m, {
      parentViewBox: p.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Gt.parseViewBox($e(o) ? p : sT(sT({}, p), {}, {
        clockWise: o
      })),
      key: "label-".concat(d),
      index: d
    }));
  }));
}
cn.displayName = "LabelList";
function nG(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(cn, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Ne(e) ? /* @__PURE__ */ k.createElement(cn, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : eu(e) ? /* @__PURE__ */ k.createElement(cn, hf({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function iG(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Gr(n, cn).map(function(o, s) {
    return /* @__PURE__ */ Ut(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = nG(e.label, t);
  return [a].concat(KH(i));
}
cn.renderCallByParent = iG;
function Is(e) {
  "@babel/helpers - typeof";
  return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Is(e);
}
function Jy() {
  return Jy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jy.apply(this, arguments);
}
function lT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lT(Object(r), !0).forEach(function(n) {
      aG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aG(e, t, r) {
  return t = oG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oG(e) {
  var t = uG(e, "string");
  return Is(t) == "symbol" ? t : t + "";
}
function uG(e, t) {
  if (Is(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Is(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sG = function(t, r) {
  var n = mr(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Ol = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, p = l * (s ? 1 : -1) + i, d = Math.asin(l / p) / pf, v = f ? a : a + o * d, m = ht(r, n, p, v), g = ht(r, n, i, v), b = f ? a - o * d : a, y = ht(r, n, p * Math.cos(d * pf), b);
  return {
    center: m,
    circleTangency: g,
    lineTangency: y,
    theta: d
  };
}, lR = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, l = sG(o, s), f = o + l, p = ht(r, n, a, o), d = ht(r, n, a, f), v = "M ".concat(p.x, ",").concat(p.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > f), `,
    `).concat(d.x, ",").concat(d.y, `
  `);
  if (i > 0) {
    var m = ht(r, n, i, o), g = ht(r, n, i, f);
    v += "L ".concat(g.x, ",").concat(g.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= f), `,
            `).concat(m.x, ",").concat(m.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, cG = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, p = t.endAngle, d = mr(p - f), v = Ol({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: d,
    cornerRadius: o,
    cornerIsExternal: l
  }), m = v.circleTangency, g = v.lineTangency, b = v.theta, y = Ol({
    cx: r,
    cy: n,
    radius: a,
    angle: p,
    sign: -d,
    cornerRadius: o,
    cornerIsExternal: l
  }), _ = y.circleTangency, O = y.lineTangency, S = y.theta, P = l ? Math.abs(f - p) : Math.abs(f - p) - b - S;
  if (P < 0)
    return s ? "M ".concat(g.x, ",").concat(g.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : lR({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: p
    });
  var x = "M ".concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(d < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(P > 180), ",").concat(+(d < 0), ",").concat(_.x, ",").concat(_.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(d < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var A = Ol({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: d,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), C = A.circleTangency, M = A.lineTangency, N = A.theta, z = Ol({
      cx: r,
      cy: n,
      radius: i,
      angle: p,
      sign: -d,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), D = z.circleTangency, W = z.lineTangency, q = z.theta, $ = l ? Math.abs(f - p) : Math.abs(f - p) - N - q;
    if ($ < 0 && o === 0)
      return "".concat(x, "L").concat(r, ",").concat(n, "Z");
    x += "L".concat(W.x, ",").concat(W.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(d < 0), ",").concat(D.x, ",").concat(D.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+($ > 180), ",").concat(+(d > 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(d < 0), ",").concat(M.x, ",").concat(M.y, "Z");
  } else
    x += "L".concat(r, ",").concat(n, "Z");
  return x;
}, lG = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, fR = function(t) {
  var r = fT(fT({}, lG), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, p = r.startAngle, d = r.endAngle, v = r.className;
  if (o < a || p === d)
    return null;
  var m = Be("recharts-sector", v), g = o - a, b = gr(s, g, 0, !0), y;
  return b > 0 && Math.abs(p - d) < 360 ? y = cG({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(b, g / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: p,
    endAngle: d
  }) : y = lR({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: p,
    endAngle: d
  }), /* @__PURE__ */ k.createElement("path", Jy({}, Te(r, !0), {
    className: m,
    d: y,
    role: "img"
  }));
};
function Ms(e) {
  "@babel/helpers - typeof";
  return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ms(e);
}
function Qy() {
  return Qy = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qy.apply(this, arguments);
}
function dT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dT(Object(r), !0).forEach(function(n) {
      fG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fG(e, t, r) {
  return t = dG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dG(e) {
  var t = pG(e, "string");
  return Ms(t) == "symbol" ? t : t + "";
}
function pG(e, t) {
  if (Ms(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ms(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hT = {
  curveBasisClosed: R6,
  curveBasisOpen: D6,
  curveBasis: M6,
  curveBumpX: g6,
  curveBumpY: y6,
  curveLinearClosed: N6,
  curveLinear: ed,
  curveMonotoneX: $6,
  curveMonotoneY: j6,
  curveNatural: k6,
  curveStep: L6,
  curveStepAfter: q6,
  curveStepBefore: B6
}, Sl = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Lu = function(t) {
  return t.x;
}, Bu = function(t) {
  return t.y;
}, hG = function(t, r) {
  if (Ne(t))
    return t;
  var n = "curve".concat(Jf(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? hT["".concat(n).concat(r === "vertical" ? "Y" : "X")] : hT[n] || ed;
}, vG = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, p = hG(n, s), d = f ? a.filter(function(b) {
    return Sl(b);
  }) : a, v;
  if (Array.isArray(o)) {
    var m = f ? o.filter(function(b) {
      return Sl(b);
    }) : o, g = d.map(function(b, y) {
      return pT(pT({}, b), {}, {
        base: m[y]
      });
    });
    return s === "vertical" ? v = vl().y(Bu).x1(Lu).x0(function(b) {
      return b.base.x;
    }) : v = vl().x(Lu).y1(Bu).y0(function(b) {
      return b.base.y;
    }), v.defined(Sl).curve(p), v(g);
  }
  return s === "vertical" && pe(o) ? v = vl().y(Bu).x1(Lu).x0(o) : pe(o) ? v = vl().x(Lu).y1(Bu).y0(o) : v = c2().x(Lu).y(Bu), v.defined(Sl).curve(p), v(d);
}, Ma = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? vG(t) : i;
  return /* @__PURE__ */ k.createElement("path", Qy({}, Te(t, !1), ql(t), {
    className: Be("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Al = { exports: {} }, Pl = { exports: {} }, et = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT;
function mG() {
  if (vT) return et;
  vT = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof;
      switch (A) {
        case t:
          switch (x = x.type, x) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case p:
                case g:
                case m:
                case o:
                  return x;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function P(x) {
    return S(x) === f;
  }
  return et.AsyncMode = l, et.ConcurrentMode = f, et.ContextConsumer = s, et.ContextProvider = o, et.Element = t, et.ForwardRef = p, et.Fragment = n, et.Lazy = g, et.Memo = m, et.Portal = r, et.Profiler = a, et.StrictMode = i, et.Suspense = d, et.isAsyncMode = function(x) {
    return P(x) || S(x) === l;
  }, et.isConcurrentMode = P, et.isContextConsumer = function(x) {
    return S(x) === s;
  }, et.isContextProvider = function(x) {
    return S(x) === o;
  }, et.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, et.isForwardRef = function(x) {
    return S(x) === p;
  }, et.isFragment = function(x) {
    return S(x) === n;
  }, et.isLazy = function(x) {
    return S(x) === g;
  }, et.isMemo = function(x) {
    return S(x) === m;
  }, et.isPortal = function(x) {
    return S(x) === r;
  }, et.isProfiler = function(x) {
    return S(x) === a;
  }, et.isStrictMode = function(x) {
    return S(x) === i;
  }, et.isSuspense = function(x) {
    return S(x) === d;
  }, et.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === f || x === a || x === i || x === d || x === v || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === m || x.$$typeof === o || x.$$typeof === s || x.$$typeof === p || x.$$typeof === y || x.$$typeof === _ || x.$$typeof === O || x.$$typeof === b);
  }, et.typeOf = S, et;
}
var tt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function gG() {
  return mT || (mT = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === f || B === a || B === i || B === d || B === v || typeof B == "object" && B !== null && (B.$$typeof === g || B.$$typeof === m || B.$$typeof === o || B.$$typeof === s || B.$$typeof === p || B.$$typeof === y || B.$$typeof === _ || B.$$typeof === O || B.$$typeof === b);
    }
    function P(B) {
      if (typeof B == "object" && B !== null) {
        var xe = B.$$typeof;
        switch (xe) {
          case t:
            var ee = B.type;
            switch (ee) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case d:
                return ee;
              default:
                var Ce = ee && ee.$$typeof;
                switch (Ce) {
                  case s:
                  case p:
                  case g:
                  case m:
                  case o:
                    return Ce;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var x = l, A = f, C = s, M = o, N = t, z = p, D = n, W = g, q = m, $ = r, j = a, F = i, V = d, Z = !1;
    function Q(B) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(B) || P(B) === l;
    }
    function G(B) {
      return P(B) === f;
    }
    function X(B) {
      return P(B) === s;
    }
    function te(B) {
      return P(B) === o;
    }
    function ie(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function ve(B) {
      return P(B) === p;
    }
    function le(B) {
      return P(B) === n;
    }
    function be(B) {
      return P(B) === g;
    }
    function Oe(B) {
      return P(B) === m;
    }
    function ge(B) {
      return P(B) === r;
    }
    function ae(B) {
      return P(B) === a;
    }
    function fe(B) {
      return P(B) === i;
    }
    function he(B) {
      return P(B) === d;
    }
    tt.AsyncMode = x, tt.ConcurrentMode = A, tt.ContextConsumer = C, tt.ContextProvider = M, tt.Element = N, tt.ForwardRef = z, tt.Fragment = D, tt.Lazy = W, tt.Memo = q, tt.Portal = $, tt.Profiler = j, tt.StrictMode = F, tt.Suspense = V, tt.isAsyncMode = Q, tt.isConcurrentMode = G, tt.isContextConsumer = X, tt.isContextProvider = te, tt.isElement = ie, tt.isForwardRef = ve, tt.isFragment = le, tt.isLazy = be, tt.isMemo = Oe, tt.isPortal = ge, tt.isProfiler = ae, tt.isStrictMode = fe, tt.isSuspense = he, tt.isValidElementType = S, tt.typeOf = P;
  }()), tt;
}
var gT;
function dR() {
  return gT || (gT = 1, process.env.NODE_ENV === "production" ? Pl.exports = mG() : Pl.exports = gG()), Pl.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xg, yT;
function yG() {
  if (yT) return xg;
  yT = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(o).map(function(p) {
        return o[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xg = i() ? Object.assign : function(a, o) {
    for (var s, l = n(a), f, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          r.call(s, f[v]) && (l[f[v]] = s[f[v]]);
      }
    }
    return l;
  }, xg;
}
var wg, bT;
function G0() {
  if (bT) return wg;
  bT = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wg = e, wg;
}
var _g, xT;
function pR() {
  return xT || (xT = 1, _g = Function.call.bind(Object.prototype.hasOwnProperty)), _g;
}
var Og, wT;
function bG() {
  if (wT) return Og;
  wT = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ G0(), r = {}, n = /* @__PURE__ */ pR();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var d;
          try {
            if (typeof a[p] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = a[p](o, p, l, s, null, t);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var m = f ? f() : "";
            e(
              "Failed " + s + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Og = i, Og;
}
var Sg, _T;
function xG() {
  if (_T) return Sg;
  _T = 1;
  var e = dR(), t = yG(), r = /* @__PURE__ */ G0(), n = /* @__PURE__ */ pR(), i = /* @__PURE__ */ bG(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Sg = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(G) {
      var X = G && (f && G[f] || G[p]);
      if (typeof X == "function")
        return X;
    }
    var v = "<<anonymous>>", m = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: O(),
      arrayOf: S,
      element: P(),
      elementType: x(),
      instanceOf: A,
      node: z(),
      objectOf: M,
      oneOf: C,
      oneOfType: N,
      shape: W,
      exact: q
    };
    function g(G, X) {
      return G === X ? G !== 0 || 1 / G === 1 / X : G !== G && X !== X;
    }
    function b(G, X) {
      this.message = G, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(G) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, te = 0;
      function ie(le, be, Oe, ge, ae, fe, he) {
        if (ge = ge || v, fe = fe || Oe, he !== r) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = ge + ":" + Oe;
            !X[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            te < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[xe] = !0, te++);
          }
        }
        return be[Oe] == null ? le ? be[Oe] === null ? new b("The " + ae + " `" + fe + "` is marked as required " + ("in `" + ge + "`, but its value is `null`.")) : new b("The " + ae + " `" + fe + "` is marked as required in " + ("`" + ge + "`, but its value is `undefined`.")) : null : G(be, Oe, ge, ae, fe);
      }
      var ve = ie.bind(null, !1);
      return ve.isRequired = ie.bind(null, !0), ve;
    }
    function _(G) {
      function X(te, ie, ve, le, be, Oe) {
        var ge = te[ie], ae = F(ge);
        if (ae !== G) {
          var fe = V(ge);
          return new b(
            "Invalid " + le + " `" + be + "` of type " + ("`" + fe + "` supplied to `" + ve + "`, expected ") + ("`" + G + "`."),
            { expectedType: G }
          );
        }
        return null;
      }
      return y(X);
    }
    function O() {
      return y(o);
    }
    function S(G) {
      function X(te, ie, ve, le, be) {
        if (typeof G != "function")
          return new b("Property `" + be + "` of component `" + ve + "` has invalid PropType notation inside arrayOf.");
        var Oe = te[ie];
        if (!Array.isArray(Oe)) {
          var ge = F(Oe);
          return new b("Invalid " + le + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + ve + "`, expected an array."));
        }
        for (var ae = 0; ae < Oe.length; ae++) {
          var fe = G(Oe, ae, ve, le, be + "[" + ae + "]", r);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return y(X);
    }
    function P() {
      function G(X, te, ie, ve, le) {
        var be = X[te];
        if (!s(be)) {
          var Oe = F(be);
          return new b("Invalid " + ve + " `" + le + "` of type " + ("`" + Oe + "` supplied to `" + ie + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(G);
    }
    function x() {
      function G(X, te, ie, ve, le) {
        var be = X[te];
        if (!e.isValidElementType(be)) {
          var Oe = F(be);
          return new b("Invalid " + ve + " `" + le + "` of type " + ("`" + Oe + "` supplied to `" + ie + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(G);
    }
    function A(G) {
      function X(te, ie, ve, le, be) {
        if (!(te[ie] instanceof G)) {
          var Oe = G.name || v, ge = Q(te[ie]);
          return new b("Invalid " + le + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + ve + "`, expected ") + ("instance of `" + Oe + "`."));
        }
        return null;
      }
      return y(X);
    }
    function C(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function X(te, ie, ve, le, be) {
        for (var Oe = te[ie], ge = 0; ge < G.length; ge++)
          if (g(Oe, G[ge]))
            return null;
        var ae = JSON.stringify(G, function(he, B) {
          var xe = V(B);
          return xe === "symbol" ? String(B) : B;
        });
        return new b("Invalid " + le + " `" + be + "` of value `" + String(Oe) + "` " + ("supplied to `" + ve + "`, expected one of " + ae + "."));
      }
      return y(X);
    }
    function M(G) {
      function X(te, ie, ve, le, be) {
        if (typeof G != "function")
          return new b("Property `" + be + "` of component `" + ve + "` has invalid PropType notation inside objectOf.");
        var Oe = te[ie], ge = F(Oe);
        if (ge !== "object")
          return new b("Invalid " + le + " `" + be + "` of type " + ("`" + ge + "` supplied to `" + ve + "`, expected an object."));
        for (var ae in Oe)
          if (n(Oe, ae)) {
            var fe = G(Oe, ae, ve, le, be + "." + ae, r);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return y(X);
    }
    function N(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var X = 0; X < G.length; X++) {
        var te = G[X];
        if (typeof te != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(te) + " at index " + X + "."
          ), o;
      }
      function ie(ve, le, be, Oe, ge) {
        for (var ae = [], fe = 0; fe < G.length; fe++) {
          var he = G[fe], B = he(ve, le, be, Oe, ge, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && ae.push(B.data.expectedType);
        }
        var xe = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new b("Invalid " + Oe + " `" + ge + "` supplied to " + ("`" + be + "`" + xe + "."));
      }
      return y(ie);
    }
    function z() {
      function G(X, te, ie, ve, le) {
        return $(X[te]) ? null : new b("Invalid " + ve + " `" + le + "` supplied to " + ("`" + ie + "`, expected a ReactNode."));
      }
      return y(G);
    }
    function D(G, X, te, ie, ve) {
      return new b(
        (G || "React class") + ": " + X + " type `" + te + "." + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ve + "`."
      );
    }
    function W(G) {
      function X(te, ie, ve, le, be) {
        var Oe = te[ie], ge = F(Oe);
        if (ge !== "object")
          return new b("Invalid " + le + " `" + be + "` of type `" + ge + "` " + ("supplied to `" + ve + "`, expected `object`."));
        for (var ae in G) {
          var fe = G[ae];
          if (typeof fe != "function")
            return D(ve, le, be, ae, V(fe));
          var he = fe(Oe, ae, ve, le, be + "." + ae, r);
          if (he)
            return he;
        }
        return null;
      }
      return y(X);
    }
    function q(G) {
      function X(te, ie, ve, le, be) {
        var Oe = te[ie], ge = F(Oe);
        if (ge !== "object")
          return new b("Invalid " + le + " `" + be + "` of type `" + ge + "` " + ("supplied to `" + ve + "`, expected `object`."));
        var ae = t({}, te[ie], G);
        for (var fe in ae) {
          var he = G[fe];
          if (n(G, fe) && typeof he != "function")
            return D(ve, le, be, fe, V(he));
          if (!he)
            return new b(
              "Invalid " + le + " `" + be + "` key `" + fe + "` supplied to `" + ve + "`.\nBad object: " + JSON.stringify(te[ie], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(G), null, "  ")
            );
          var B = he(Oe, fe, ve, le, be + "." + fe, r);
          if (B)
            return B;
        }
        return null;
      }
      return y(X);
    }
    function $(G) {
      switch (typeof G) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !G;
        case "object":
          if (Array.isArray(G))
            return G.every($);
          if (G === null || s(G))
            return !0;
          var X = d(G);
          if (X) {
            var te = X.call(G), ie;
            if (X !== G.entries) {
              for (; !(ie = te.next()).done; )
                if (!$(ie.value))
                  return !1;
            } else
              for (; !(ie = te.next()).done; ) {
                var ve = ie.value;
                if (ve && !$(ve[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(G, X) {
      return G === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function F(G) {
      var X = typeof G;
      return Array.isArray(G) ? "array" : G instanceof RegExp ? "object" : j(X, G) ? "symbol" : X;
    }
    function V(G) {
      if (typeof G > "u" || G === null)
        return "" + G;
      var X = F(G);
      if (X === "object") {
        if (G instanceof Date)
          return "date";
        if (G instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function Z(G) {
      var X = V(G);
      switch (X) {
        case "array":
        case "object":
          return "an " + X;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + X;
        default:
          return X;
      }
    }
    function Q(G) {
      return !G.constructor || !G.constructor.name ? v : G.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
  }, Sg;
}
var Ag, OT;
function wG() {
  if (OT) return Ag;
  OT = 1;
  var e = /* @__PURE__ */ G0();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ag = function() {
    function n(o, s, l, f, p, d) {
      if (d !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ag;
}
var ST;
function _G() {
  if (ST) return Al.exports;
  if (ST = 1, process.env.NODE_ENV !== "production") {
    var e = dR(), t = !0;
    Al.exports = /* @__PURE__ */ xG()(e.isElement, t);
  } else
    Al.exports = /* @__PURE__ */ wG()();
  return Al.exports;
}
var OG = /* @__PURE__ */ _G();
const rt = /* @__PURE__ */ ut(OG);
var SG = Object.getOwnPropertyNames, AG = Object.getOwnPropertySymbols, PG = Object.prototype.hasOwnProperty;
function AT(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Tl(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), s = a.get(n);
    if (o && s)
      return o === n && s === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function PT(e) {
  return SG(e).concat(AG(e));
}
var TG = Object.hasOwn || function(e, t) {
  return PG.call(e, t);
};
function za(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var EG = "__v", CG = "__o", IG = "_owner", TT = Object.getOwnPropertyDescriptor, ET = Object.keys;
function MG(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function RG(e, t) {
  return za(e.getTime(), t.getTime());
}
function DG(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function NG(e, t) {
  return e === t;
}
function CT(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, s, l = 0; (o = a.next()) && !o.done; ) {
    for (var f = t.entries(), p = !1, d = 0; (s = f.next()) && !s.done; ) {
      if (i[d]) {
        d++;
        continue;
      }
      var v = o.value, m = s.value;
      if (r.equals(v[0], m[0], l, d, e, t, r) && r.equals(v[1], m[1], v[0], m[0], e, t, r)) {
        p = i[d] = !0;
        break;
      }
      d++;
    }
    if (!p)
      return !1;
    l++;
  }
  return !0;
}
var $G = za;
function jG(e, t, r) {
  var n = ET(e), i = n.length;
  if (ET(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!hR(e, t, r, n[i]))
      return !1;
  return !0;
}
function qu(e, t, r) {
  var n = PT(e), i = n.length;
  if (PT(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], !hR(e, t, r, a) || (o = TT(e, a), s = TT(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function kG(e, t) {
  return za(e.valueOf(), t.valueOf());
}
function LG(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function IT(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, s; (o = a.next()) && !o.done; ) {
    for (var l = t.values(), f = !1, p = 0; (s = l.next()) && !s.done; ) {
      if (!i[p] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        f = i[p] = !0;
        break;
      }
      p++;
    }
    if (!f)
      return !1;
  }
  return !0;
}
function BG(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function qG(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function hR(e, t, r, n) {
  return (n === IG || n === CG || n === EG) && (e.$$typeof || t.$$typeof) ? !0 : TG(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var FG = "[object Arguments]", WG = "[object Boolean]", zG = "[object Date]", UG = "[object Error]", HG = "[object Map]", GG = "[object Number]", KG = "[object Object]", VG = "[object RegExp]", YG = "[object Set]", XG = "[object String]", ZG = "[object URL]", JG = Array.isArray, MT = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, RT = Object.assign, QG = Object.prototype.toString.call.bind(Object.prototype.toString);
function eK(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, l = e.arePrimitiveWrappersEqual, f = e.areRegExpsEqual, p = e.areSetsEqual, d = e.areTypedArraysEqual, v = e.areUrlsEqual;
  return function(g, b, y) {
    if (g === b)
      return !0;
    if (g == null || b == null)
      return !1;
    var _ = typeof g;
    if (_ !== typeof b)
      return !1;
    if (_ !== "object")
      return _ === "number" ? o(g, b, y) : _ === "function" ? i(g, b, y) : !1;
    var O = g.constructor;
    if (O !== b.constructor)
      return !1;
    if (O === Object)
      return s(g, b, y);
    if (JG(g))
      return t(g, b, y);
    if (MT != null && MT(g))
      return d(g, b, y);
    if (O === Date)
      return r(g, b, y);
    if (O === RegExp)
      return f(g, b, y);
    if (O === Map)
      return a(g, b, y);
    if (O === Set)
      return p(g, b, y);
    var S = QG(g);
    return S === zG ? r(g, b, y) : S === VG ? f(g, b, y) : S === HG ? a(g, b, y) : S === YG ? p(g, b, y) : S === KG ? typeof g.then != "function" && typeof b.then != "function" && s(g, b, y) : S === ZG ? v(g, b, y) : S === UG ? n(g, b, y) : S === FG ? s(g, b, y) : S === WG || S === GG || S === XG ? l(g, b, y) : !1;
  };
}
function tK(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? qu : MG,
    areDatesEqual: RG,
    areErrorsEqual: DG,
    areFunctionsEqual: NG,
    areMapsEqual: n ? AT(CT, qu) : CT,
    areNumbersEqual: $G,
    areObjectsEqual: n ? qu : jG,
    arePrimitiveWrappersEqual: kG,
    areRegExpsEqual: LG,
    areSetsEqual: n ? AT(IT, qu) : IT,
    areTypedArraysEqual: n ? qu : BG,
    areUrlsEqual: qG
  };
  if (r && (i = RT({}, i, r(i))), t) {
    var a = Tl(i.areArraysEqual), o = Tl(i.areMapsEqual), s = Tl(i.areObjectsEqual), l = Tl(i.areSetsEqual);
    i = RT({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: l
    });
  }
  return i;
}
function rK(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function nK(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(l, f) {
      var p = n(), d = p.cache, v = d === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : d, m = p.meta;
      return r(l, f, {
        cache: v,
        equals: i,
        meta: m,
        strict: a
      });
    };
  if (t)
    return function(l, f) {
      return r(l, f, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(l, f) {
    return r(l, f, o);
  };
}
var iK = ta();
ta({ strict: !0 });
ta({ circular: !0 });
ta({
  circular: !0,
  strict: !0
});
ta({
  createInternalComparator: function() {
    return za;
  }
});
ta({
  strict: !0,
  createInternalComparator: function() {
    return za;
  }
});
ta({
  circular: !0,
  createInternalComparator: function() {
    return za;
  }
});
ta({
  circular: !0,
  createInternalComparator: function() {
    return za;
  },
  strict: !0
});
function ta(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = tK(e), l = eK(s), f = n ? n(l) : rK(l);
  return nK({ circular: r, comparator: l, createState: i, equals: f, strict: o });
}
function aK(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function DT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : aK(i);
  };
  requestAnimationFrame(n);
}
function eb(e) {
  "@babel/helpers - typeof";
  return eb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eb(e);
}
function oK(e) {
  return lK(e) || cK(e) || sK(e) || uK();
}
function uK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sK(e, t) {
  if (e) {
    if (typeof e == "string") return NT(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return NT(e, t);
  }
}
function NT(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function lK(e) {
  if (Array.isArray(e)) return e;
}
function fK() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = oK(o), l = s[0], f = s.slice(1);
        if (typeof l == "number") {
          DT(i.bind(null, f), l);
          return;
        }
        i(l), DT(i.bind(null, f));
        return;
      }
      eb(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Rs(e) {
  "@babel/helpers - typeof";
  return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rs(e);
}
function $T(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $T(Object(r), !0).forEach(function(n) {
      vR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $T(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vR(e, t, r) {
  return t = dK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dK(e) {
  var t = pK(e, "string");
  return Rs(t) === "symbol" ? t : String(t);
}
function pK(e, t) {
  if (Rs(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rs(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hK = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, vK = function(t) {
  return t;
}, mK = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, ns = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return jT(jT({}, n), {}, vR({}, i, t(i, r[i])));
  }, {});
}, kT = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(mK(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, gK = process.env.NODE_ENV !== "production", vf = function(t, r, n, i, a, o, s, l) {
  if (gK && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, o, s, l], p = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[p++];
      }));
    }
};
function yK(e, t) {
  return wK(e) || xK(e, t) || mR(e, t) || bK();
}
function bK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xK(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function wK(e) {
  if (Array.isArray(e)) return e;
}
function _K(e) {
  return AK(e) || SK(e) || mR(e) || OK();
}
function OK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mR(e, t) {
  if (e) {
    if (typeof e == "string") return tb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tb(e, t);
  }
}
function SK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function AK(e) {
  if (Array.isArray(e)) return tb(e);
}
function tb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var mf = 1e-4, gR = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, yR = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, LT = function(t, r) {
  return function(n) {
    var i = gR(t, r);
    return yR(i, n);
  };
}, PK = function(t, r) {
  return function(n) {
    var i = gR(t, r), a = [].concat(_K(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return yR(a, n);
  };
}, BT = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, s = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(y) {
            return parseFloat(y);
          }), p = yK(f, 4);
          i = p[0], a = p[1], o = p[2], s = p[3];
        } else
          vf(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  vf([i, o, a, s].every(function(y) {
    return typeof y == "number" && y >= 0 && y <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var d = LT(i, o), v = LT(a, s), m = PK(i, o), g = function(_) {
    return _ > 1 ? 1 : _ < 0 ? 0 : _;
  }, b = function(_) {
    for (var O = _ > 1 ? 1 : _, S = O, P = 0; P < 8; ++P) {
      var x = d(S) - O, A = m(S);
      if (Math.abs(x - O) < mf || A < mf)
        return v(S);
      S = g(S - x / A);
    }
    return v(S);
  };
  return b.isStepper = !1, b;
}, TK = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, l = function(p, d, v) {
    var m = -(p - d) * n, g = v * a, b = v + (m - g) * s / 1e3, y = v * s / 1e3 + p;
    return Math.abs(y - d) < mf && Math.abs(b) < mf ? [d, 0] : [y, b];
  };
  return l.isStepper = !0, l.dt = s, l;
}, EK = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return BT(i);
      case "spring":
        return TK();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return BT(i);
        vf(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (vf(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ds(e) {
  "@babel/helpers - typeof";
  return Ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ds(e);
}
function qT(e) {
  return MK(e) || IK(e) || bR(e) || CK();
}
function CK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function MK(e) {
  if (Array.isArray(e)) return nb(e);
}
function FT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? FT(Object(r), !0).forEach(function(n) {
      rb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : FT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rb(e, t, r) {
  return t = RK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RK(e) {
  var t = DK(e, "string");
  return Ds(t) === "symbol" ? t : String(t);
}
function DK(e, t) {
  if (Ds(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ds(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NK(e, t) {
  return kK(e) || jK(e, t) || bR(e, t) || $K();
}
function $K() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bR(e, t) {
  if (e) {
    if (typeof e == "string") return nb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nb(e, t);
  }
}
function nb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jK(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function kK(e) {
  if (Array.isArray(e)) return e;
}
var gf = function(t, r, n) {
  return t + (r - t) * n;
}, ib = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, LK = function e(t, r, n) {
  var i = ns(function(a, o) {
    if (ib(o)) {
      var s = t(o.from, o.to, o.velocity), l = NK(s, 2), f = l[0], p = l[1];
      return tr(tr({}, o), {}, {
        from: f,
        velocity: p
      });
    }
    return o;
  }, r);
  return n < 1 ? ns(function(a, o) {
    return ib(o) ? tr(tr({}, o), {}, {
      velocity: gf(o.velocity, i[a].velocity, n),
      from: gf(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const BK = function(e, t, r, n, i) {
  var a = hK(e, t), o = a.reduce(function(y, _) {
    return tr(tr({}, y), {}, rb({}, _, [e[_], t[_]]));
  }, {}), s = a.reduce(function(y, _) {
    return tr(tr({}, y), {}, rb({}, _, {
      from: e[_],
      velocity: 0,
      to: t[_]
    }));
  }, {}), l = -1, f, p, d = function() {
    return null;
  }, v = function() {
    return ns(function(_, O) {
      return O.from;
    }, s);
  }, m = function() {
    return !Object.values(s).filter(ib).length;
  }, g = function(_) {
    f || (f = _);
    var O = _ - f, S = O / r.dt;
    s = LK(r, s, S), i(tr(tr(tr({}, e), t), v())), f = _, m() || (l = requestAnimationFrame(d));
  }, b = function(_) {
    p || (p = _);
    var O = (_ - p) / n, S = ns(function(x, A) {
      return gf.apply(void 0, qT(A).concat([r(O)]));
    }, o);
    if (i(tr(tr(tr({}, e), t), S)), O < 1)
      l = requestAnimationFrame(d);
    else {
      var P = ns(function(x, A) {
        return gf.apply(void 0, qT(A).concat([r(1)]));
      }, o);
      i(tr(tr(tr({}, e), t), P));
    }
  };
  return d = r.isStepper ? g : b, function() {
    return requestAnimationFrame(d), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Do(e) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e);
}
var qK = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function FK(e, t) {
  if (e == null) return {};
  var r = WK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Pg(e) {
  return GK(e) || HK(e) || UK(e) || zK();
}
function zK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UK(e, t) {
  if (e) {
    if (typeof e == "string") return ab(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ab(e, t);
  }
}
function HK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GK(e) {
  if (Array.isArray(e)) return ab(e);
}
function ab(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? WT(Object(r), !0).forEach(function(n) {
      Zu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : WT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zu(e, t, r) {
  return t = xR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VK(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xR(n.key), n);
  }
}
function YK(e, t, r) {
  return t && VK(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xR(e) {
  var t = XK(e, "string");
  return Do(t) === "symbol" ? t : String(t);
}
function XK(e, t) {
  if (Do(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Do(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ob(e, t);
}
function ob(e, t) {
  return ob = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ob(e, t);
}
function JK(e) {
  var t = QK();
  return function() {
    var n = yf(e), i;
    if (t) {
      var a = yf(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return ub(this, i);
  };
}
function ub(e, t) {
  if (t && (Do(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sb(e);
}
function sb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function QK() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yf(e) {
  return yf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yf(e);
}
var Dn = /* @__PURE__ */ function(e) {
  ZK(r, e);
  var t = JK(r);
  function r(n, i) {
    var a;
    KK(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, l = o.attributeName, f = o.from, p = o.to, d = o.steps, v = o.children, m = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(sb(a)), a.changeStyle = a.changeStyle.bind(sb(a)), !s || m <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: p
      }), ub(a);
    if (d && d.length)
      a.state = {
        style: d[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, ub(a);
      a.state = {
        style: l ? Zu({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return YK(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, s = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, p = a.to, d = a.from, v = this.state.style;
      if (s) {
        if (!o) {
          var m = {
            style: l ? Zu({}, l, p) : p
          };
          this.state && v && (l && v[l] !== p || !l && v !== p) && this.setState(m);
          return;
        }
        if (!(iK(i.to, p) && i.canBegin && i.isActive)) {
          var g = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var b = g || f ? d : i.to;
          if (this.state && v) {
            var y = {
              style: l ? Zu({}, l, b) : b
            };
            (l && v[l] !== b || !l && v !== b) && this.setState(y);
          }
          this.runAnimation(Sn(Sn({}, this.props), {}, {
            from: b,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, s = i.to, l = i.duration, f = i.easing, p = i.begin, d = i.onAnimationEnd, v = i.onAnimationStart, m = BK(o, s, EK(f), l, this.changeStyle), g = function() {
        a.stopJSAnimation = m();
      };
      this.manager.start([v, p, g, l, d]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, l = i.onAnimationStart, f = o[0], p = f.style, d = f.duration, v = d === void 0 ? 0 : d, m = function(b, y, _) {
        if (_ === 0)
          return b;
        var O = y.duration, S = y.easing, P = S === void 0 ? "ease" : S, x = y.style, A = y.properties, C = y.onAnimationEnd, M = _ > 0 ? o[_ - 1] : y, N = A || Object.keys(x);
        if (typeof P == "function" || P === "spring")
          return [].concat(Pg(b), [a.runJSAnimation.bind(a, {
            from: M.style,
            to: x,
            duration: O,
            easing: P
          }), O]);
        var z = kT(N, O, P), D = Sn(Sn(Sn({}, M.style), x), {}, {
          transition: z
        });
        return [].concat(Pg(b), [D, O, C]).filter(vK);
      };
      return this.manager.start([l].concat(Pg(o.reduce(m, [p, Math.max(v, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = fK());
      var a = i.begin, o = i.duration, s = i.attributeName, l = i.to, f = i.easing, p = i.onAnimationStart, d = i.onAnimationEnd, v = i.steps, m = i.children, g = this.manager;
      if (this.unSubscribe = g.subscribe(this.handleStyleChange), typeof f == "function" || typeof m == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var b = s ? Zu({}, s, l) : l, y = kT(Object.keys(b), o, f);
      g.start([p, a, Sn(Sn({}, b), {}, {
        transition: y
      }), o, d]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var s = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = FK(i, qK), f = Ta.count(a), p = this.state.style;
      if (typeof a == "function")
        return a(p);
      if (!s || f === 0 || o <= 0)
        return a;
      var d = function(m) {
        var g = m.props, b = g.style, y = b === void 0 ? {} : b, _ = g.className, O = /* @__PURE__ */ Ut(m, Sn(Sn({}, l), {}, {
          style: Sn(Sn({}, y), p),
          className: _
        }));
        return O;
      };
      return f === 1 ? d(Ta.only(a)) : /* @__PURE__ */ k.createElement("div", null, Ta.map(a, function(v) {
        return d(v);
      }));
    }
  }]), r;
}(dn);
Dn.displayName = "Animate";
Dn.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Dn.propTypes = {
  from: rt.oneOfType([rt.object, rt.string]),
  to: rt.oneOfType([rt.object, rt.string]),
  attributeName: rt.string,
  // animation duration
  duration: rt.number,
  begin: rt.number,
  easing: rt.oneOfType([rt.string, rt.func]),
  steps: rt.arrayOf(rt.shape({
    duration: rt.number.isRequired,
    style: rt.object.isRequired,
    easing: rt.oneOfType([rt.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), rt.func]),
    // transition css properties(dash case), optional
    properties: rt.arrayOf("string"),
    onAnimationEnd: rt.func
  })),
  children: rt.oneOfType([rt.node, rt.func]),
  isActive: rt.bool,
  canBegin: rt.bool,
  onAnimationEnd: rt.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: rt.bool,
  onAnimationStart: rt.func,
  onAnimationReStart: rt.func
};
function Ns(e) {
  "@babel/helpers - typeof";
  return Ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ns(e);
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function eV(e, t) {
  return iV(e) || nV(e, t) || rV(e, t) || tV();
}
function tV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rV(e, t) {
  if (e) {
    if (typeof e == "string") return zT(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zT(e, t);
  }
}
function zT(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function iV(e) {
  if (Array.isArray(e)) return e;
}
function UT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function HT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? UT(Object(r), !0).forEach(function(n) {
      aV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aV(e, t, r) {
  return t = oV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oV(e) {
  var t = uV(e, "string");
  return Ns(t) == "symbol" ? t : t + "";
}
function uV(e, t) {
  if (Ns(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ns(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GT = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, p;
  if (o > 0 && a instanceof Array) {
    for (var d = [0, 0, 0, 0], v = 0, m = 4; v < m; v++)
      d[v] = a[v] > o ? o : a[v];
    p = "M".concat(t, ",").concat(r + s * d[0]), d[0] > 0 && (p += "A ".concat(d[0], ",").concat(d[0], ",0,0,").concat(f, ",").concat(t + l * d[0], ",").concat(r)), p += "L ".concat(t + n - l * d[1], ",").concat(r), d[1] > 0 && (p += "A ".concat(d[1], ",").concat(d[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + s * d[1])), p += "L ".concat(t + n, ",").concat(r + i - s * d[2]), d[2] > 0 && (p += "A ".concat(d[2], ",").concat(d[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * d[2], ",").concat(r + i)), p += "L ".concat(t + l * d[3], ",").concat(r + i), d[3] > 0 && (p += "A ".concat(d[3], ",").concat(d[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - s * d[3])), p += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var g = Math.min(o, a);
    p = "M ".concat(t, ",").concat(r + s * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(f, ",").concat(t + l * g, ",").concat(r, `
            L `).concat(t + n - l * g, ",").concat(r, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + s * g, `
            L `).concat(t + n, ",").concat(r + i - s * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(f, ",").concat(t + n - l * g, ",").concat(r + i, `
            L `).concat(t + l * g, ",").concat(r + i, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - s * g, " Z");
  } else
    p = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return p;
}, sV = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + s), p = Math.max(a, a + s), d = Math.min(o, o + l), v = Math.max(o, o + l);
    return n >= f && n <= p && i >= d && i <= v;
  }
  return !1;
}, cV = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, K0 = function(t) {
  var r = HT(HT({}, cV), t), n = Yi(), i = ct(-1), a = eV(i, 2), o = a[0], s = a[1];
  Nt(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var P = n.current.getTotalLength();
        P && s(P);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, p = r.width, d = r.height, v = r.radius, m = r.className, g = r.animationEasing, b = r.animationDuration, y = r.animationBegin, _ = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || p !== +p || d !== +d || p === 0 || d === 0)
    return null;
  var S = Be("recharts-rectangle", m);
  return O ? /* @__PURE__ */ k.createElement(Dn, {
    canBegin: o > 0,
    from: {
      width: p,
      height: d,
      x: l,
      y: f
    },
    to: {
      width: p,
      height: d,
      x: l,
      y: f
    },
    duration: b,
    animationEasing: g,
    isActive: O
  }, function(P) {
    var x = P.width, A = P.height, C = P.x, M = P.y;
    return /* @__PURE__ */ k.createElement(Dn, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: y,
      duration: b,
      isActive: _,
      easing: g
    }, /* @__PURE__ */ k.createElement("path", bf({}, Te(r, !0), {
      className: S,
      d: GT(C, M, x, A, v),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("path", bf({}, Te(r, !0), {
    className: S,
    d: GT(l, f, p, d, v)
  }));
}, lV = ["points", "className", "baseLinePoints", "connectNulls"];
function vo() {
  return vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vo.apply(this, arguments);
}
function fV(e, t) {
  if (e == null) return {};
  var r = dV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function KT(e) {
  return mV(e) || vV(e) || hV(e) || pV();
}
function pV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hV(e, t) {
  if (e) {
    if (typeof e == "string") return cb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cb(e, t);
  }
}
function vV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mV(e) {
  if (Array.isArray(e)) return cb(e);
}
function cb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var VT = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, gV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    VT(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), VT(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, is = function(t, r) {
  var n = gV(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(KT(a), KT(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, l) {
      return "".concat(o).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, yV = function(t, r, n) {
  var i = is(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(is(r.reverse(), n).slice(1));
}, bV = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = fV(t, lV);
  if (!r || !r.length)
    return null;
  var s = Be("recharts-polygon", n);
  if (i && i.length) {
    var l = o.stroke && o.stroke !== "none", f = yV(r, i, a);
    return /* @__PURE__ */ k.createElement("g", {
      className: s
    }, /* @__PURE__ */ k.createElement("path", vo({}, Te(o, !0), {
      fill: f.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ k.createElement("path", vo({}, Te(o, !0), {
      fill: "none",
      d: is(r, a)
    })) : null, l ? /* @__PURE__ */ k.createElement("path", vo({}, Te(o, !0), {
      fill: "none",
      d: is(i, a)
    })) : null);
  }
  var p = is(r, a);
  return /* @__PURE__ */ k.createElement("path", vo({}, Te(o, !0), {
    fill: p.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: p
  }));
};
function lb() {
  return lb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lb.apply(this, arguments);
}
var sc = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = Be("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ k.createElement("circle", lb({}, Te(t, !1), ql(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function $s(e) {
  "@babel/helpers - typeof";
  return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $s(e);
}
var xV = ["x", "y", "top", "left", "width", "height", "className"];
function fb() {
  return fb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fb.apply(this, arguments);
}
function YT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? YT(Object(r), !0).forEach(function(n) {
      _V(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _V(e, t, r) {
  return t = OV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OV(e) {
  var t = SV(e, "string");
  return $s(t) == "symbol" ? t : t + "";
}
function SV(e, t) {
  if ($s(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($s(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AV(e, t) {
  if (e == null) return {};
  var r = PV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var TV = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, EV = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, l = t.left, f = l === void 0 ? 0 : l, p = t.width, d = p === void 0 ? 0 : p, v = t.height, m = v === void 0 ? 0 : v, g = t.className, b = AV(t, xV), y = wV({
    x: n,
    y: a,
    top: s,
    left: f,
    width: d,
    height: m
  }, b);
  return !pe(n) || !pe(a) || !pe(d) || !pe(m) || !pe(s) || !pe(f) ? null : /* @__PURE__ */ k.createElement("path", fb({}, Te(y, !0), {
    className: Be("recharts-cross", g),
    d: TV(n, a, d, m, s, f)
  }));
}, Tg, XT;
function CV() {
  if (XT) return Tg;
  XT = 1;
  var e = dd(), t = DM(), r = Zn();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return Tg = n, Tg;
}
var IV = CV();
const MV = /* @__PURE__ */ ut(IV);
var Eg, ZT;
function RV() {
  if (ZT) return Eg;
  ZT = 1;
  var e = dd(), t = Zn(), r = NM();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return Eg = n, Eg;
}
var DV = RV();
const NV = /* @__PURE__ */ ut(DV);
var $V = ["cx", "cy", "angle", "ticks", "axisLine"], jV = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function No(e) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e);
}
function as() {
  return as = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, as.apply(this, arguments);
}
function JT(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? JT(Object(r), !0).forEach(function(n) {
      md(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JT(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QT(e, t) {
  if (e == null) return {};
  var r = kV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function LV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _R(n.key), n);
  }
}
function BV(e, t, r) {
  return t && eE(e.prototype, t), r && eE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qV(e, t, r) {
  return t = xf(t), FV(e, wR() ? Reflect.construct(t, r || [], xf(e).constructor) : t.apply(e, r));
}
function FV(e, t) {
  if (t && (No(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return WV(e);
}
function WV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wR = function() {
    return !!e;
  })();
}
function xf(e) {
  return xf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xf(e);
}
function zV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && db(e, t);
}
function db(e, t) {
  return db = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, db(e, t);
}
function md(e, t, r) {
  return t = _R(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _R(e) {
  var t = UV(e, "string");
  return No(t) == "symbol" ? t : t + "";
}
function UV(e, t) {
  if (No(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (No(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gd = /* @__PURE__ */ function(e) {
  function t() {
    return LV(this, t), qV(this, t, arguments);
  }
  return zV(t, e), BV(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, s = a.cx, l = a.cy;
        return ht(s, l, i, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = MV(s, function(p) {
        return p.coordinate || 0;
      }), f = NV(s, function(p) {
        return p.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: f.coordinate || 0,
        outerRadius: l.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = n.axisLine, f = QT(n, $V), p = s.reduce(function(g, b) {
        return [Math.min(g[0], b.coordinate), Math.max(g[1], b.coordinate)];
      }, [1 / 0, -1 / 0]), d = ht(i, a, p[0], o), v = ht(i, a, p[1], o), m = ma(ma(ma({}, Te(f, !1)), {}, {
        fill: "none"
      }, Te(l, !1)), {}, {
        x1: d.x,
        y1: d.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ k.createElement("line", as({
        className: "recharts-polar-radius-axis-line"
      }, m));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.angle, l = i.tickFormatter, f = i.stroke, p = QT(i, jV), d = this.getTickTextAnchor(), v = Te(p, !1), m = Te(o, !1), g = a.map(function(b, y) {
        var _ = n.getTickValueCoord(b), O = ma(ma(ma(ma({
          textAnchor: d,
          transform: "rotate(".concat(90 - s, ", ").concat(_.x, ", ").concat(_.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, m), {}, {
          index: y
        }, _), {}, {
          payload: b
        });
        return /* @__PURE__ */ k.createElement(Ge, as({
          className: Be("recharts-polar-radius-axis-tick", sR(o)),
          key: "tick-".concat(b.coordinate)
        }, Da(n.props, b, y)), t.renderTickItem(o, O, l ? l(b.value, y) : b.value));
      });
      return /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-polar-radius-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Ge, {
        className: Be("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), Gt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ k.isValidElement(n) ? o = /* @__PURE__ */ k.cloneElement(n, i) : Ne(n) ? o = n(i) : o = /* @__PURE__ */ k.createElement(Xi, as({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]);
}(dn);
md(gd, "displayName", "PolarRadiusAxis");
md(gd, "axisType", "radiusAxis");
md(gd, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function $o(e) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
}
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wa.apply(this, arguments);
}
function tE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tE(Object(r), !0).forEach(function(n) {
      yd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, SR(n.key), n);
  }
}
function GV(e, t, r) {
  return t && rE(e.prototype, t), r && rE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KV(e, t, r) {
  return t = wf(t), VV(e, OR() ? Reflect.construct(t, r || [], wf(e).constructor) : t.apply(e, r));
}
function VV(e, t) {
  if (t && ($o(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YV(e);
}
function YV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (OR = function() {
    return !!e;
  })();
}
function wf(e) {
  return wf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wf(e);
}
function XV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pb(e, t);
}
function pb(e, t) {
  return pb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, pb(e, t);
}
function yd(e, t, r) {
  return t = SR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SR(e) {
  var t = ZV(e, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function ZV(e, t) {
  if ($o(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var JV = Math.PI / 180, QV = 1e-5, bd = /* @__PURE__ */ function(e) {
  function t() {
    return HV(this, t), KV(this, t, arguments);
  }
  return XV(t, e), GV(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, o = i.cy, s = i.radius, l = i.orientation, f = i.tickSize, p = f || 8, d = ht(a, o, s, n.coordinate), v = ht(a, o, s + (l === "inner" ? -1 : 1) * p, n.coordinate);
        return {
          x1: d.x,
          y1: d.y,
          x2: v.x,
          y2: v.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * JV), o;
      return a > QV ? o = i === "outer" ? "start" : "end" : a < -1e-5 ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, s = n.axisLine, l = n.axisLineType, f = ga(ga({}, Te(this.props, !1)), {}, {
        fill: "none"
      }, Te(s, !1));
      if (l === "circle")
        return /* @__PURE__ */ k.createElement(sc, wa({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: o
        }));
      var p = this.props.ticks, d = p.map(function(v) {
        return ht(i, a, o, v.coordinate);
      });
      return /* @__PURE__ */ k.createElement(bV, wa({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: d
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.tickLine, l = i.tickFormatter, f = i.stroke, p = Te(this.props, !1), d = Te(o, !1), v = ga(ga({}, p), {}, {
        fill: "none"
      }, Te(s, !1)), m = a.map(function(g, b) {
        var y = n.getTickLineCoord(g), _ = n.getTickTextAnchor(g), O = ga(ga(ga({
          textAnchor: _
        }, p), {}, {
          stroke: "none",
          fill: f
        }, d), {}, {
          index: b,
          payload: g,
          x: y.x2,
          y: y.y2
        });
        return /* @__PURE__ */ k.createElement(Ge, wa({
          className: Be("recharts-polar-angle-axis-tick", sR(o)),
          key: "tick-".concat(g.coordinate)
        }, Da(n.props, g, b)), s && /* @__PURE__ */ k.createElement("line", wa({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, y)), o && t.renderTickItem(o, O, l ? l(g.value, b) : g.value));
      });
      return /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-polar-angle-axis-ticks"
      }, m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ k.createElement(Ge, {
        className: Be("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ k.isValidElement(n) ? o = /* @__PURE__ */ k.cloneElement(n, i) : Ne(n) ? o = n(i) : o = /* @__PURE__ */ k.createElement(Xi, wa({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]);
}(dn);
yd(bd, "displayName", "PolarAngleAxis");
yd(bd, "axisType", "angleAxis");
yd(bd, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var Cg, nE;
function eY() {
  if (nE) return Cg;
  nE = 1;
  var e = R2(), t = e(Object.getPrototypeOf, Object);
  return Cg = t, Cg;
}
var Ig, iE;
function tY() {
  if (iE) return Ig;
  iE = 1;
  var e = Oi(), t = eY(), r = Si(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, s = a.hasOwnProperty, l = o.call(Object);
  function f(p) {
    if (!r(p) || e(p) != n)
      return !1;
    var d = t(p);
    if (d === null)
      return !0;
    var v = s.call(d, "constructor") && d.constructor;
    return typeof v == "function" && v instanceof v && o.call(v) == l;
  }
  return Ig = f, Ig;
}
var rY = tY();
const nY = /* @__PURE__ */ ut(rY);
var Mg, aE;
function iY() {
  if (aE) return Mg;
  aE = 1;
  var e = Oi(), t = Si(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return Mg = n, Mg;
}
var aY = iY();
const oY = /* @__PURE__ */ ut(aY);
function js(e) {
  "@babel/helpers - typeof";
  return js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, js(e);
}
function _f() {
  return _f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _f.apply(this, arguments);
}
function uY(e, t) {
  return fY(e) || lY(e, t) || cY(e, t) || sY();
}
function sY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cY(e, t) {
  if (e) {
    if (typeof e == "string") return oE(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oE(e, t);
  }
}
function oE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function fY(e) {
  if (Array.isArray(e)) return e;
}
function uE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uE(Object(r), !0).forEach(function(n) {
      dY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dY(e, t, r) {
  return t = pY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pY(e) {
  var t = hY(e, "string");
  return js(t) == "symbol" ? t : t + "";
}
function hY(e, t) {
  if (js(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (js(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cE = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, vY = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, mY = function(t) {
  var r = sE(sE({}, vY), t), n = Yi(), i = ct(-1), a = uY(i, 2), o = a[0], s = a[1];
  Nt(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && s(S);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, p = r.upperWidth, d = r.lowerWidth, v = r.height, m = r.className, g = r.animationEasing, b = r.animationDuration, y = r.animationBegin, _ = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || p !== +p || d !== +d || v !== +v || p === 0 && d === 0 || v === 0)
    return null;
  var O = Be("recharts-trapezoid", m);
  return _ ? /* @__PURE__ */ k.createElement(Dn, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: v,
      x: l,
      y: f
    },
    to: {
      upperWidth: p,
      lowerWidth: d,
      height: v,
      x: l,
      y: f
    },
    duration: b,
    animationEasing: g,
    isActive: _
  }, function(S) {
    var P = S.upperWidth, x = S.lowerWidth, A = S.height, C = S.x, M = S.y;
    return /* @__PURE__ */ k.createElement(Dn, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: y,
      duration: b,
      easing: g
    }, /* @__PURE__ */ k.createElement("path", _f({}, Te(r, !0), {
      className: O,
      d: cE(C, M, P, x, A),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", _f({}, Te(r, !0), {
    className: O,
    d: cE(l, f, p, d, v)
  })));
}, gY = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function ks(e) {
  "@babel/helpers - typeof";
  return ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ks(e);
}
function yY(e, t) {
  if (e == null) return {};
  var r = bY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bY(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lE(Object(r), !0).forEach(function(n) {
      xY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xY(e, t, r) {
  return t = wY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wY(e) {
  var t = _Y(e, "string");
  return ks(t) == "symbol" ? t : t + "";
}
function _Y(e, t) {
  if (ks(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ks(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OY(e, t) {
  return Of(Of({}, t), e);
}
function SY(e, t) {
  return e === "symbols";
}
function fE(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(K0, r);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(mY, r);
    case "sector":
      return /* @__PURE__ */ k.createElement(fR, r);
    case "symbols":
      if (SY(t))
        return /* @__PURE__ */ k.createElement(f0, r);
      break;
    default:
      return null;
  }
}
function AY(e) {
  return /* @__PURE__ */ Cn(e) ? e.props : e;
}
function AR(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? OY : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = yY(e, gY), f;
  if (/* @__PURE__ */ Cn(t))
    f = /* @__PURE__ */ Ut(t, Of(Of({}, l), AY(t)));
  else if (Ne(t))
    f = t(l);
  else if (nY(t) && !oY(t)) {
    var p = i(t, l);
    f = /* @__PURE__ */ k.createElement(fE, {
      shapeType: r,
      elementProps: p
    });
  } else {
    var d = l;
    f = /* @__PURE__ */ k.createElement(fE, {
      shapeType: r,
      elementProps: d
    });
  }
  return s ? /* @__PURE__ */ k.createElement(Ge, {
    className: o
  }, f) : f;
}
function xd(e, t) {
  return t != null && "trapezoids" in e.props;
}
function wd(e, t) {
  return t != null && "sectors" in e.props;
}
function Ls(e, t) {
  return t != null && "points" in e.props;
}
function PY(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function TY(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function EY(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function CY(e, t) {
  var r;
  return xd(e, t) ? r = PY : wd(e, t) ? r = TY : Ls(e, t) && (r = EY), r;
}
function IY(e, t) {
  var r;
  return xd(e, t) ? r = "trapezoids" : wd(e, t) ? r = "sectors" : Ls(e, t) && (r = "points"), r;
}
function MY(e, t) {
  if (xd(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (wd(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Ls(e, t) ? t.payload : {};
}
function RY(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = IY(r, t), a = MY(r, t), o = n.filter(function(l, f) {
    var p = Na(a, l), d = r.props[i].filter(function(g) {
      var b = CY(r, t);
      return b(g, t);
    }), v = r.props[i].indexOf(d[d.length - 1]), m = f === v;
    return p && m;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Nl;
function jo(e) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e);
}
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mo.apply(this, arguments);
}
function dE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dE(Object(r), !0).forEach(function(n) {
      un(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, TR(n.key), n);
  }
}
function NY(e, t, r) {
  return t && pE(e.prototype, t), r && pE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $Y(e, t, r) {
  return t = Sf(t), jY(e, PR() ? Reflect.construct(t, r || [], Sf(e).constructor) : t.apply(e, r));
}
function jY(e, t) {
  if (t && (jo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kY(e);
}
function kY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (PR = function() {
    return !!e;
  })();
}
function Sf(e) {
  return Sf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sf(e);
}
function LY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hb(e, t);
}
function hb(e, t) {
  return hb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, hb(e, t);
}
function un(e, t, r) {
  return t = TR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TR(e) {
  var t = BY(e, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function BY(e, t) {
  if (jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pi = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return DY(this, t), n = $Y(this, t, [r]), un(n, "pieRef", null), un(n, "sectorRefs", []), un(n, "id", qa("recharts-pie-")), un(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Ne(i) && i();
    }), un(n, "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Ne(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return LY(t, e), NY(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.label, s = a.labelLine, l = a.dataKey, f = a.valueKey, p = Te(this.props, !1), d = Te(o, !1), v = Te(s, !1), m = o && o.offsetRadius || 20, g = n.map(function(b, y) {
        var _ = (b.startAngle + b.endAngle) / 2, O = ht(b.cx, b.cy, b.outerRadius + m, _), S = dt(dt(dt(dt({}, p), b), {}, {
          stroke: "none"
        }, d), {}, {
          index: y,
          textAnchor: t.getTextAnchor(O.x, b.cx)
        }, O), P = dt(dt(dt(dt({}, p), b), {}, {
          fill: "none",
          stroke: b.fill
        }, v), {}, {
          index: y,
          points: [ht(b.cx, b.cy, b.outerRadius, _), O]
        }), x = l;
        return $e(l) && $e(f) ? x = "value" : $e(l) && (x = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Ge, {
          key: "label-".concat(b.startAngle, "-").concat(b.endAngle, "-").concat(b.midAngle, "-").concat(y)
        }, s && t.renderLabelLineItem(s, P, "line"), t.renderLabelItem(o, S, $t(b, x)));
      });
      return /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-pie-labels"
      }, g);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, p) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var d = i.isActiveIndex(p), v = l && i.hasActiveIndex() ? l : null, m = d ? o : v, g = dt(dt({}, f), {}, {
          stroke: s ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ k.createElement(Ge, mo({
          ref: function(y) {
            y && !i.sectorRefs.includes(y) && i.sectorRefs.push(y);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Da(i.props, f, p), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(p)
        }), /* @__PURE__ */ k.createElement(AR, mo({
          option: m,
          isActive: d,
          shapeType: "sector"
        }, g)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, f = i.animationEasing, p = i.animationId, d = this.state, v = d.prevSectors, m = d.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(Dn, {
        begin: s,
        duration: l,
        isActive: o,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(p, "-").concat(m),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(g) {
        var b = g.t, y = [], _ = a && a[0], O = _.startAngle;
        return a.forEach(function(S, P) {
          var x = v && v[P], A = P > 0 ? Hr(S, "paddingAngle", 0) : 0;
          if (x) {
            var C = Ht(x.endAngle - x.startAngle, S.endAngle - S.startAngle), M = dt(dt({}, S), {}, {
              startAngle: O + A,
              endAngle: O + C(b) + A
            });
            y.push(M), O = M.endAngle;
          } else {
            var N = S.endAngle, z = S.startAngle, D = Ht(0, N - z), W = D(b), q = dt(dt({}, S), {}, {
              startAngle: O + A,
              endAngle: O + W + A
            });
            y.push(q), O = q.endAngle;
          }
        }), /* @__PURE__ */ k.createElement(Ge, null, n.renderSectorsStatically(y));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var s = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !Na(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, s = i.className, l = i.label, f = i.cx, p = i.cy, d = i.innerRadius, v = i.outerRadius, m = i.isAnimationActive, g = this.state.isAnimationFinished;
      if (a || !o || !o.length || !pe(f) || !pe(p) || !pe(d) || !pe(v))
        return null;
      var b = Be("recharts-pie", s);
      return /* @__PURE__ */ k.createElement(Ge, {
        tabIndex: this.props.rootTabIndex,
        className: b,
        ref: function(_) {
          n.pieRef = _;
        }
      }, this.renderSectors(), l && this.renderLabels(o), Gt.renderCallByParent(this.props, null, !1), (!m || g) && cn.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      if (Ne(n))
        return n(i);
      var o = Be("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ k.createElement(Ma, mo({}, i, {
        key: a,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      var o = a;
      if (Ne(n) && (o = n(i), /* @__PURE__ */ k.isValidElement(o)))
        return o;
      var s = Be("recharts-pie-label-text", typeof n != "boolean" && !Ne(n) ? n.className : "");
      return /* @__PURE__ */ k.createElement(Xi, mo({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
}(dn);
Nl = Pi;
un(Pi, "displayName", "Pie");
un(Pi, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Ji.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
un(Pi, "parseDeltaAngle", function(e, t) {
  var r = mr(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
un(Pi, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = Te(e, !1), i = Gr(r, ad);
  return t && t.length ? t.map(function(a, o) {
    return dt(dt(dt({
      payload: a
    }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return dt(dt({}, n), a.props);
  }) : [];
});
un(Pi, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = uR(i, a), s = n + gr(e.cx, i, i / 2), l = r + gr(e.cy, a, a / 2), f = gr(e.innerRadius, o, 0), p = gr(e.outerRadius, o, o * 0.8), d = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: l,
    innerRadius: f,
    outerRadius: p,
    maxRadius: d
  };
});
un(Pi, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? dt(dt({}, t.type.defaultProps), t.props) : t.props, i = Nl.getRealPieData(n);
  if (!i || !i.length)
    return null;
  var a = n.cornerRadius, o = n.startAngle, s = n.endAngle, l = n.paddingAngle, f = n.dataKey, p = n.nameKey, d = n.valueKey, v = n.tooltipType, m = Math.abs(n.minAngle), g = Nl.parseCoordinateOfPie(n, r), b = Nl.parseDeltaAngle(o, s), y = Math.abs(b), _ = f;
  $e(f) && $e(d) ? (In(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = "value") : $e(f) && (In(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = d);
  var O = i.filter(function(M) {
    return $t(M, _, 0) !== 0;
  }).length, S = (y >= 360 ? O : O - 1) * l, P = y - O * m - S, x = i.reduce(function(M, N) {
    var z = $t(N, _, 0);
    return M + (pe(z) ? z : 0);
  }, 0), A;
  if (x > 0) {
    var C;
    A = i.map(function(M, N) {
      var z = $t(M, _, 0), D = $t(M, p, N), W = (pe(z) ? z : 0) / x, q;
      N ? q = C.endAngle + mr(b) * l * (z !== 0 ? 1 : 0) : q = o;
      var $ = q + mr(b) * ((z !== 0 ? m : 0) + W * P), j = (q + $) / 2, F = (g.innerRadius + g.outerRadius) / 2, V = [{
        name: D,
        value: z,
        payload: M,
        dataKey: _,
        type: v
      }], Z = ht(g.cx, g.cy, F, j);
      return C = dt(dt(dt({
        percent: W,
        cornerRadius: a,
        name: D,
        tooltipPayload: V,
        midAngle: j,
        middleRadius: F,
        tooltipPosition: Z
      }, M), g), {}, {
        value: $t(M, _),
        startAngle: q,
        endAngle: $,
        payload: M,
        paddingAngle: mr(b) * l
      }), C;
    });
  }
  return dt(dt({}, g), {}, {
    sectors: A,
    data: i
  });
});
var Rg, hE;
function qY() {
  if (hE) return Rg;
  hE = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var s = -1, l = t(e((i - n) / (a || 1)), 0), f = Array(l); l--; )
      f[o ? l : ++s] = n, n += a;
    return f;
  }
  return Rg = r, Rg;
}
var Dg, vE;
function ER() {
  if (vE) return Dg;
  vE = 1;
  var e = V2(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -1 / 0) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return Dg = n, Dg;
}
var Ng, mE;
function FY() {
  if (mE) return Ng;
  mE = 1;
  var e = qY(), t = id(), r = ER();
  function n(i) {
    return function(a, o, s) {
      return s && typeof s != "number" && t(a, o, s) && (o = s = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), s = s === void 0 ? a < o ? 1 : -1 : r(s), e(a, o, s, i);
    };
  }
  return Ng = n, Ng;
}
var $g, gE;
function WY() {
  if (gE) return $g;
  gE = 1;
  var e = FY(), t = e();
  return $g = t, $g;
}
var zY = WY();
const Af = /* @__PURE__ */ ut(zY);
function Bs(e) {
  "@babel/helpers - typeof";
  return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bs(e);
}
function yE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yE(Object(r), !0).forEach(function(n) {
      CR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CR(e, t, r) {
  return t = UY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UY(e) {
  var t = HY(e, "string");
  return Bs(t) == "symbol" ? t : t + "";
}
function HY(e, t) {
  if (Bs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GY = ["Webkit", "Moz", "O", "ms"], KY = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = GY.reduce(function(a, o) {
    return bE(bE({}, a), {}, CR({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function ko(e) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e);
}
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pf.apply(this, arguments);
}
function xE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xE(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MR(n.key), n);
  }
}
function YY(e, t, r) {
  return t && wE(e.prototype, t), r && wE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XY(e, t, r) {
  return t = Tf(t), ZY(e, IR() ? Reflect.construct(t, r || [], Tf(e).constructor) : t.apply(e, r));
}
function ZY(e, t) {
  if (t && (ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JY(e);
}
function JY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (IR = function() {
    return !!e;
  })();
}
function Tf(e) {
  return Tf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tf(e);
}
function QY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vb(e, t);
}
function vb(e, t) {
  return vb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, vb(e, t);
}
function Wr(e, t, r) {
  return t = MR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MR(e) {
  var t = eX(e, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function eX(e, t) {
  if (ko(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var tX = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = ts().domain(Af(0, l)).range([a, a + o - s]), p = f.domain().map(function(d) {
    return f(d);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: f(n),
    endX: f(i),
    scale: f,
    scaleValues: p
  };
}, _E = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Lo = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return VY(this, t), n = XY(this, t, [r]), Wr(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Wr(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Wr(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null || o({
          endIndex: a,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), Wr(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Wr(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Wr(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Wr(n, "handleSlideDragStart", function(i) {
      var a = _E(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return QY(t, e), YY(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, l = s.gap, f = s.data, p = f.length - 1, d = Math.min(i, a), v = Math.max(i, a), m = t.getIndexInRange(o, d), g = t.getIndexInRange(o, v);
      return {
        startIndex: m - m % l,
        endIndex: g === p ? p : g - g % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, l = $t(a[n], s, n);
      return Ne(o) ? o(l, n) : l;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, l = this.props, f = l.x, p = l.width, d = l.travellerWidth, v = l.startIndex, m = l.endIndex, g = l.onChange, b = n.pageX - a;
      b > 0 ? b = Math.min(b, f + p - d - s, f + p - d - o) : b < 0 && (b = Math.max(b, f - o, f - s));
      var y = this.getIndex({
        startX: o + b,
        endX: s + b
      });
      (y.startIndex !== v || y.endIndex !== m) && g && g(y), this.setState({
        startX: o + b,
        endX: s + b,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = _E(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, l = i.startX, f = this.state[o], p = this.props, d = p.x, v = p.width, m = p.travellerWidth, g = p.onChange, b = p.gap, y = p.data, _ = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, d + v - m - f) : O < 0 && (O = Math.max(O, d - f)), _[o] = f + O;
      var S = this.getIndex(_), P = S.startIndex, x = S.endIndex, A = function() {
        var M = y.length - 1;
        return o === "startX" && (s > l ? P % b === 0 : x % b === 0) || s < l && x === M || o === "endX" && (s > l ? x % b === 0 : P % b === 0) || s > l && x === M;
      };
      this.setState(Wr(Wr({}, o, f + O), "brushMoveStartX", n.pageX), function() {
        g && A() && g(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, l = o.startX, f = o.endX, p = this.state[i], d = s.indexOf(p);
      if (d !== -1) {
        var v = d + n;
        if (!(v === -1 || v >= s.length)) {
          var m = s[v];
          i === "startX" && m >= f || i === "endX" && m <= l || this.setState(Wr({}, i, m), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.data, f = n.children, p = n.padding, d = Ta.only(f);
      return d ? /* @__PURE__ */ k.cloneElement(d, {
        x: i,
        y: a,
        width: o,
        height: s,
        margin: p,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, s = this, l = this.props, f = l.y, p = l.travellerWidth, d = l.height, v = l.traveller, m = l.ariaLabel, g = l.data, b = l.startIndex, y = l.endIndex, _ = Math.max(n, this.props.x), O = jg(jg({}, Te(this.props, !1)), {}, {
        x: _,
        y: f,
        width: p,
        height: d
      }), S = m || "Min value: ".concat((a = g[b]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = g[y]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ k.createElement(Ge, {
        tabIndex: 0,
        role: "slider",
        "aria-label": S,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(x) {
          ["ArrowLeft", "ArrowRight"].includes(x.key) && (x.preventDefault(), x.stopPropagation(), s.handleTravellerMoveKeyboard(x.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(v, O));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, s = a.height, l = a.stroke, f = a.travellerWidth, p = Math.min(n, i) + f, d = Math.max(Math.abs(i - n) - f, 0);
      return /* @__PURE__ */ k.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: l,
        fillOpacity: 0.2,
        x: p,
        y: o,
        width: d,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, l = n.travellerWidth, f = n.stroke, p = this.state, d = p.startX, v = p.endX, m = 5, g = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(Xi, Pf({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(d, v) - m,
        y: o + s / 2
      }, g), this.getTextOfTick(i)), /* @__PURE__ */ k.createElement(Xi, Pf({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(d, v) + l + m,
        y: o + s / 2
      }, g), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, l = n.y, f = n.width, p = n.height, d = n.alwaysShowText, v = this.state, m = v.startX, g = v.endX, b = v.isTextActive, y = v.isSlideMoving, _ = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !pe(s) || !pe(l) || !pe(f) || !pe(p) || f <= 0 || p <= 0)
        return null;
      var S = Be("recharts-brush", a), P = k.Children.count(o) === 1, x = KY("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Ge, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: x
      }, this.renderBackground(), P && this.renderPanorama(), this.renderSlide(m, g), this.renderTravellerLayer(m, "startX"), this.renderTravellerLayer(g, "endX"), (b || y || _ || O || d) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, s = n.height, l = n.stroke, f = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + o - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f + 2,
        x2: i + o - 1,
        y2: f + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ k.isValidElement(n) ? a = /* @__PURE__ */ k.cloneElement(n, i) : Ne(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, s = n.x, l = n.travellerWidth, f = n.updateId, p = n.startIndex, d = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return jg({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: o
        }, a && a.length ? tX({
          data: a,
          width: o,
          x: s,
          travellerWidth: l,
          startIndex: p,
          endIndex: d
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || s !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([s, s + o - l]);
        var v = i.scale.domain().map(function(m) {
          return i.scale(m);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: s,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: v
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
        var l = Math.floor((o + s) / 2);
        n[l] > i ? s = l : o = l;
      }
      return i >= n[s] ? s : o;
    }
  }]);
}(dn);
Wr(Lo, "displayName", "Brush");
Wr(Lo, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var kg, OE;
function rX() {
  if (OE) return kg;
  OE = 1;
  var e = y0();
  function t(r, n) {
    var i;
    return e(r, function(a, o, s) {
      return i = n(a, o, s), !i;
    }), !!i;
  }
  return kg = t, kg;
}
var Lg, SE;
function nX() {
  if (SE) return Lg;
  SE = 1;
  var e = A2(), t = Zn(), r = rX(), n = Rr(), i = id();
  function a(o, s, l) {
    var f = n(o) ? e : r;
    return l && i(o, s, l) && (s = void 0), f(o, t(s, 3));
  }
  return Lg = a, Lg;
}
var iX = nX();
const aX = /* @__PURE__ */ ut(iX);
var Kn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Bg, AE;
function oX() {
  if (AE) return Bg;
  AE = 1;
  var e = z2();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Bg = t, Bg;
}
var qg, PE;
function uX() {
  if (PE) return qg;
  PE = 1;
  var e = oX(), t = F2(), r = Zn();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(s, l, f) {
      e(o, l, a(s, l, f));
    }), o;
  }
  return qg = n, qg;
}
var sX = uX();
const cX = /* @__PURE__ */ ut(sX);
var Fg, TE;
function lX() {
  if (TE) return Fg;
  TE = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Fg = e, Fg;
}
var Wg, EE;
function fX() {
  if (EE) return Wg;
  EE = 1;
  var e = y0();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, s) {
      return i = !!n(a, o, s), i;
    }), i;
  }
  return Wg = t, Wg;
}
var zg, CE;
function dX() {
  if (CE) return zg;
  CE = 1;
  var e = lX(), t = fX(), r = Zn(), n = Rr(), i = id();
  function a(o, s, l) {
    var f = n(o) ? e : t;
    return l && i(o, s, l) && (s = void 0), f(o, r(s, 3));
  }
  return zg = a, zg;
}
var pX = dX();
const RR = /* @__PURE__ */ ut(pX);
var hX = ["x", "y"];
function Bo(e) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e);
}
function mb() {
  return mb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mb.apply(this, arguments);
}
function IE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? IE(Object(r), !0).forEach(function(n) {
      vX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vX(e, t, r) {
  return t = mX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mX(e) {
  var t = gX(e, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function gX(e, t) {
  if (Bo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yX(e, t) {
  if (e == null) return {};
  var r = bX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bX(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xX(e, t) {
  var r = e.x, n = e.y, i = yX(e, hX), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), f = "".concat(t.height || i.height), p = parseInt(f, 10), d = "".concat(t.width || i.width), v = parseInt(d, 10);
  return Fu(Fu(Fu(Fu(Fu({}, t), i), o ? {
    x: o
  } : {}), l ? {
    y: l
  } : {}), {}, {
    height: p,
    width: v,
    name: t.name,
    radius: t.radius
  });
}
function ME(e) {
  return /* @__PURE__ */ k.createElement(AR, mb({
    shapeType: "rectangle",
    propTransformer: xX,
    activeClassName: "recharts-active-bar"
  }, e));
}
var wX = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? Ir(!1, "minPointSize callback function received a value with type of ".concat(Bo(n), ". Currently only numbers are supported.")) : Ir()), r);
  };
}, _X = ["value", "background"], DR;
function qo(e) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e);
}
function OX(e, t) {
  if (e == null) return {};
  var r = SX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SX(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function RE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? RE(Object(r), !0).forEach(function(n) {
      Gi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : RE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $R(n.key), n);
  }
}
function PX(e, t, r) {
  return t && DE(e.prototype, t), r && DE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TX(e, t, r) {
  return t = Cf(t), EX(e, NR() ? Reflect.construct(t, r || [], Cf(e).constructor) : t.apply(e, r));
}
function EX(e, t) {
  if (t && (qo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CX(e);
}
function CX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (NR = function() {
    return !!e;
  })();
}
function Cf(e) {
  return Cf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cf(e);
}
function IX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gb(e, t);
}
function gb(e, t) {
  return gb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, gb(e, t);
}
function Gi(e, t, r) {
  return t = $R(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $R(e) {
  var t = MX(e, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function MX(e, t) {
  if (qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ra = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    AX(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = TX(this, t, [].concat(i)), Gi(r, "state", {
      isAnimationFinished: !1
    }), Gi(r, "id", qa("recharts-bar-")), Gi(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Gi(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return IX(t, e), PX(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, l = a.activeIndex, f = a.activeBar, p = Te(this.props, !1);
      return n && n.map(function(d, v) {
        var m = v === l, g = m ? f : o, b = jt(jt(jt({}, p), d), {}, {
          isActive: m,
          option: g,
          index: v,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Ge, Ef({
          className: "recharts-bar-rectangle"
        }, Da(i.props, d, v), {
          key: "rectangle-".concat(d == null ? void 0 : d.x, "-").concat(d == null ? void 0 : d.y, "-").concat(d == null ? void 0 : d.value)
        }), /* @__PURE__ */ k.createElement(ME, b));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, p = i.animationEasing, d = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Dn, {
        begin: l,
        duration: f,
        isActive: s,
        easing: p,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(m) {
        var g = m.t, b = a.map(function(y, _) {
          var O = v && v[_];
          if (O) {
            var S = Ht(O.x, y.x), P = Ht(O.y, y.y), x = Ht(O.width, y.width), A = Ht(O.height, y.height);
            return jt(jt({}, y), {}, {
              x: S(g),
              y: P(g),
              width: x(g),
              height: A(g)
            });
          }
          if (o === "horizontal") {
            var C = Ht(0, y.height), M = C(g);
            return jt(jt({}, y), {}, {
              y: y.y + y.height - M,
              height: M
            });
          }
          var N = Ht(0, y.width), z = N(g);
          return jt(jt({}, y), {}, {
            width: z
          });
        });
        return /* @__PURE__ */ k.createElement(Ge, null, n.renderRectanglesStatically(b));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !Na(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, l = Te(this.props.background, !1);
      return a.map(function(f, p) {
        f.value;
        var d = f.background, v = OX(f, _X);
        if (!d)
          return null;
        var m = jt(jt(jt(jt(jt({}, v), {}, {
          fill: "#eee"
        }, d), l), Da(n.props, f, p)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: p,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ k.createElement(ME, Ef({
          key: "background-bar-".concat(p),
          option: n.props.background,
          isActive: p === s
        }, m));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, s = a.xAxis, l = a.yAxis, f = a.layout, p = a.children, d = Gr(p, uc);
      if (!d)
        return null;
      var v = f === "vertical" ? o[0].height / 2 : o[0].width / 2, m = function(y, _) {
        var O = Array.isArray(y.value) ? y.value[1] : y.value;
        return {
          x: y.x,
          y: y.y,
          value: O,
          errorVal: $t(y, _)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ge, g, d.map(function(b) {
        return /* @__PURE__ */ k.cloneElement(b, {
          key: "error-bar-".concat(i, "-").concat(b.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: l,
          layout: f,
          offset: v,
          dataPointFormatter: m
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, l = n.yAxis, f = n.left, p = n.top, d = n.width, v = n.height, m = n.isAnimationActive, g = n.background, b = n.id;
      if (i || !a || !a.length)
        return null;
      var y = this.state.isAnimationFinished, _ = Be("recharts-bar", o), O = s && s.allowDataOverflow, S = l && l.allowDataOverflow, P = O || S, x = $e(b) ? this.id : b;
      return /* @__PURE__ */ k.createElement(Ge, {
        className: _
      }, O || S ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: O ? f : f - d / 2,
        y: S ? p : p - v / 2,
        width: O ? d : d * 2,
        height: S ? v : v * 2
      }))) : null, /* @__PURE__ */ k.createElement(Ge, {
        className: "recharts-bar-rectangles",
        clipPath: P ? "url(#clipPath-".concat(x, ")") : null
      }, g ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(P, x), (!m || y) && cn.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(dn);
DR = ra;
Gi(ra, "displayName", "Bar");
Gi(ra, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Ji.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Gi(ra, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, p = e.dataStartIndex, d = e.displayedData, v = e.offset, m = eH(n, r);
  if (!m)
    return null;
  var g = t.layout, b = r.type.defaultProps, y = b !== void 0 ? jt(jt({}, b), r.props) : r.props, _ = y.dataKey, O = y.children, S = y.minPointSize, P = g === "horizontal" ? o : a, x = f ? P.scale.domain() : null, A = uH({
    numericAxis: P
  }), C = Gr(O, ad), M = d.map(function(N, z) {
    var D, W, q, $, j, F;
    f ? D = tH(f[p + z], x) : (D = $t(N, _), Array.isArray(D) || (D = [A, D]));
    var V = wX(S, DR.defaultProps.minPointSize)(D[1], z);
    if (g === "horizontal") {
      var Z, Q = [o.scale(D[0]), o.scale(D[1])], G = Q[0], X = Q[1];
      W = JP({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: m.offset,
        entry: N,
        index: z
      }), q = (Z = X ?? G) !== null && Z !== void 0 ? Z : void 0, $ = m.size;
      var te = G - X;
      if (j = Number.isNaN(te) ? 0 : te, F = {
        x: W,
        y: o.y,
        width: $,
        height: o.height
      }, Math.abs(V) > 0 && Math.abs(j) < Math.abs(V)) {
        var ie = mr(j || V) * (Math.abs(V) - Math.abs(j));
        q -= ie, j += ie;
      }
    } else {
      var ve = [a.scale(D[0]), a.scale(D[1])], le = ve[0], be = ve[1];
      if (W = le, q = JP({
        axis: o,
        ticks: l,
        bandSize: i,
        offset: m.offset,
        entry: N,
        index: z
      }), $ = be - le, j = m.size, F = {
        x: a.x,
        y: q,
        width: a.width,
        height: j
      }, Math.abs(V) > 0 && Math.abs($) < Math.abs(V)) {
        var Oe = mr($ || V) * (Math.abs(V) - Math.abs($));
        $ += Oe;
      }
    }
    return jt(jt(jt({}, N), {}, {
      x: W,
      y: q,
      width: $,
      height: j,
      value: f ? D : D[1],
      payload: N,
      background: F
    }, C && C[z] && C[z].props), {}, {
      tooltipPayload: [aR(r, N)],
      tooltipPosition: {
        x: W + $ / 2,
        y: q + j / 2
      }
    });
  });
  return jt({
    data: M,
    layout: g
  }, v);
});
function qs(e) {
  "@babel/helpers - typeof";
  return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qs(e);
}
function RX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function NE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jR(n.key), n);
  }
}
function DX(e, t, r) {
  return t && NE(e.prototype, t), r && NE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $E(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $E(Object(r), !0).forEach(function(n) {
      _d(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $E(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _d(e, t, r) {
  return t = jR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jR(e) {
  var t = NX(e, "string");
  return qs(t) == "symbol" ? t : t + "";
}
function NX(e, t) {
  if (qs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var V0 = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.layout, f = t.children, p = Object.keys(r), d = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, v = !!zr(f, ra);
  return p.reduce(function(m, g) {
    var b = r[g], y = b.orientation, _ = b.domain, O = b.padding, S = O === void 0 ? {} : O, P = b.mirror, x = b.reversed, A = "".concat(y).concat(P ? "Mirror" : ""), C, M, N, z, D;
    if (b.type === "number" && (b.padding === "gap" || b.padding === "no-gap")) {
      var W = _[1] - _[0], q = 1 / 0, $ = b.categoricalDomain.sort();
      if ($.forEach(function(ve, le) {
        le > 0 && (q = Math.min((ve || 0) - ($[le - 1] || 0), q));
      }), Number.isFinite(q)) {
        var j = q / W, F = b.layout === "vertical" ? n.height : n.width;
        if (b.padding === "gap" && (C = j * F / 2), b.padding === "no-gap") {
          var V = gr(t.barCategoryGap, j * F), Z = j * F / 2;
          C = Z - V - (Z - V) / F * V;
        }
      }
    }
    i === "xAxis" ? M = [n.left + (S.left || 0) + (C || 0), n.left + n.width - (S.right || 0) - (C || 0)] : i === "yAxis" ? M = l === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + (C || 0), n.top + n.height - (S.bottom || 0) - (C || 0)] : M = b.range, x && (M = [M[1], M[0]]);
    var Q = tR(b, a, v), G = Q.scale, X = Q.realScaleType;
    G.domain(_).range(M), rR(G);
    var te = nR(G, Pn(Pn({}, b), {}, {
      realScaleType: X
    }));
    i === "xAxis" ? (D = y === "top" && !P || y === "bottom" && P, N = n.left, z = d[A] - D * b.height) : i === "yAxis" && (D = y === "left" && !P || y === "right" && P, N = d[A] - D * b.width, z = n.top);
    var ie = Pn(Pn(Pn({}, b), te), {}, {
      realScaleType: X,
      x: N,
      y: z,
      scale: G,
      width: i === "xAxis" ? n.width : b.width,
      height: i === "yAxis" ? n.height : b.height
    });
    return ie.bandSize = df(ie, te), !b.hide && i === "xAxis" ? d[A] += (D ? -1 : 1) * ie.height : b.hide || (d[A] += (D ? -1 : 1) * ie.width), Pn(Pn({}, m), {}, _d({}, g, ie));
  }, {});
}, kR = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, $X = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return kR({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, LR = /* @__PURE__ */ function() {
  function e(t) {
    RX(this, e), this.scale = t;
  }
  return DX(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var l = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + l;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
_d(LR, "EPS", 1e-4);
var Y0 = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Pn(Pn({}, n), {}, _d({}, i, LR.create(t[i])));
  }, {});
  return Pn(Pn({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return cX(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return RR(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function jX(e) {
  return (e % 180 + 180) % 180;
}
var kX = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = jX(i), o = a * Math.PI / 180, s = Math.atan(n / r), l = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, Ug, jE;
function LX() {
  if (jE) return Ug;
  jE = 1;
  var e = Zn(), t = rc(), r = rd();
  function n(i) {
    return function(a, o, s) {
      var l = Object(a);
      if (!t(a)) {
        var f = e(o, 3);
        a = r(a), o = function(d) {
          return f(l[d], d, l);
        };
      }
      var p = i(a, o, s);
      return p > -1 ? l[f ? a[p] : p] : void 0;
    };
  }
  return Ug = n, Ug;
}
var Hg, kE;
function BX() {
  if (kE) return Hg;
  kE = 1;
  var e = ER();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return Hg = t, Hg;
}
var Gg, LE;
function qX() {
  if (LE) return Gg;
  LE = 1;
  var e = j2(), t = Zn(), r = BX(), n = Math.max;
  function i(a, o, s) {
    var l = a == null ? 0 : a.length;
    if (!l)
      return -1;
    var f = s == null ? 0 : r(s);
    return f < 0 && (f = n(l + f, 0)), e(a, t(o, 3), f);
  }
  return Gg = i, Gg;
}
var Kg, BE;
function FX() {
  if (BE) return Kg;
  BE = 1;
  var e = LX(), t = qX(), r = e(t);
  return Kg = r, Kg;
}
var WX = FX();
const zX = /* @__PURE__ */ ut(WX);
var UX = ZI();
const HX = /* @__PURE__ */ ut(UX);
var GX = HX(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function If(e) {
  "@babel/helpers - typeof";
  return If = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, If(e);
}
var X0 = /* @__PURE__ */ Nn(void 0), Z0 = /* @__PURE__ */ Nn(void 0), BR = /* @__PURE__ */ Nn(void 0), qR = /* @__PURE__ */ Nn({}), FR = /* @__PURE__ */ Nn(void 0), WR = /* @__PURE__ */ Nn(0), zR = /* @__PURE__ */ Nn(0), qE = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, l = t.width, f = t.height, p = GX(a);
  return /* @__PURE__ */ k.createElement(X0.Provider, {
    value: n
  }, /* @__PURE__ */ k.createElement(Z0.Provider, {
    value: i
  }, /* @__PURE__ */ k.createElement(qR.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(BR.Provider, {
    value: p
  }, /* @__PURE__ */ k.createElement(FR.Provider, {
    value: o
  }, /* @__PURE__ */ k.createElement(WR.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement(zR.Provider, {
    value: l
  }, s)))))));
}, KX = function() {
  return Mr(FR);
};
function UR(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var HR = function(t) {
  var r = Mr(X0);
  r == null && (process.env.NODE_ENV !== "production" ? Ir(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ir());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Ir(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(If(t), "]. ").concat(UR(r))) : Ir()), n;
}, VX = function() {
  var t = Mr(X0);
  return zi(t);
}, YX = function() {
  var t = Mr(Z0), r = zX(t, function(n) {
    return RR(n.domain, Number.isFinite);
  });
  return r || zi(t);
}, GR = function(t) {
  var r = Mr(Z0);
  r == null && (process.env.NODE_ENV !== "production" ? Ir(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ir());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Ir(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(If(t), "]. ").concat(UR(r))) : Ir()), n;
}, XX = function() {
  var t = Mr(BR);
  return t;
}, ZX = function() {
  return Mr(qR);
}, J0 = function() {
  return Mr(zR);
}, Q0 = function() {
  return Mr(WR);
};
function Fo(e) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e);
}
function JX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QX(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, VR(n.key), n);
  }
}
function eZ(e, t, r) {
  return t && QX(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tZ(e, t, r) {
  return t = Mf(t), rZ(e, KR() ? Reflect.construct(t, r || [], Mf(e).constructor) : t.apply(e, r));
}
function rZ(e, t) {
  if (t && (Fo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nZ(e);
}
function nZ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KR = function() {
    return !!e;
  })();
}
function Mf(e) {
  return Mf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mf(e);
}
function iZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yb(e, t);
}
function yb(e, t) {
  return yb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, yb(e, t);
}
function FE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function WE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? FE(Object(r), !0).forEach(function(n) {
      e1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : FE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e1(e, t, r) {
  return t = VR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VR(e) {
  var t = aZ(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function aZ(e, t) {
  if (Fo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function oZ(e, t) {
  return lZ(e) || cZ(e, t) || sZ(e, t) || uZ();
}
function uZ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sZ(e, t) {
  if (e) {
    if (typeof e == "string") return zE(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zE(e, t);
  }
}
function zE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cZ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function lZ(e) {
  if (Array.isArray(e)) return e;
}
function bb() {
  return bb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bb.apply(this, arguments);
}
var fZ = function(t, r) {
  var n;
  return /* @__PURE__ */ k.isValidElement(t) ? n = /* @__PURE__ */ k.cloneElement(t, r) : Ne(t) ? n = t(r) : n = /* @__PURE__ */ k.createElement("line", bb({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, dZ = function(t, r, n, i, a, o, s, l, f) {
  var p = a.x, d = a.y, v = a.width, m = a.height;
  if (n) {
    var g = f.y, b = t.y.apply(g, {
      position: o
    });
    if (Kn(f, "discard") && !t.y.isInRange(b))
      return null;
    var y = [{
      x: p + v,
      y: b
    }, {
      x: p,
      y: b
    }];
    return l === "left" ? y.reverse() : y;
  }
  if (r) {
    var _ = f.x, O = t.x.apply(_, {
      position: o
    });
    if (Kn(f, "discard") && !t.x.isInRange(O))
      return null;
    var S = [{
      x: O,
      y: d + m
    }, {
      x: O,
      y: d
    }];
    return s === "top" ? S.reverse() : S;
  }
  if (i) {
    var P = f.segment, x = P.map(function(A) {
      return t.apply(A, {
        position: o
      });
    });
    return Kn(f, "discard") && aX(x, function(A) {
      return !t.isInRange(A);
    }) ? null : x;
  }
  return null;
};
function pZ(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, l = e.alwaysShow, f = KX(), p = HR(i), d = GR(a), v = XX();
  if (!f || !v)
    return null;
  In(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var m = Y0({
    x: p.scale,
    y: d.scale
  }), g = Kt(t), b = Kt(r), y = n && n.length === 2, _ = dZ(m, g, b, y, v, e.position, p.orientation, d.orientation, e);
  if (!_)
    return null;
  var O = oZ(_, 2), S = O[0], P = S.x, x = S.y, A = O[1], C = A.x, M = A.y, N = Kn(e, "hidden") ? "url(#".concat(f, ")") : void 0, z = WE(WE({
    clipPath: N
  }, Te(e, !0)), {}, {
    x1: P,
    y1: x,
    x2: C,
    y2: M
  });
  return /* @__PURE__ */ k.createElement(Ge, {
    className: Be("recharts-reference-line", s)
  }, fZ(o, z), Gt.renderCallByParent(e, $X({
    x1: P,
    y1: x,
    x2: C,
    y2: M
  })));
}
var t1 = /* @__PURE__ */ function(e) {
  function t() {
    return JX(this, t), tZ(this, t, arguments);
  }
  return iZ(t, e), eZ(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(pZ, this.props);
    }
  }]);
}(k.Component);
e1(t1, "displayName", "ReferenceLine");
e1(t1, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function xb() {
  return xb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xb.apply(this, arguments);
}
function Wo(e) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e);
}
function UE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function HE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? UE(Object(r), !0).forEach(function(n) {
      Od(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vZ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, XR(n.key), n);
  }
}
function mZ(e, t, r) {
  return t && vZ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gZ(e, t, r) {
  return t = Rf(t), yZ(e, YR() ? Reflect.construct(t, r || [], Rf(e).constructor) : t.apply(e, r));
}
function yZ(e, t) {
  if (t && (Wo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bZ(e);
}
function bZ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function YR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (YR = function() {
    return !!e;
  })();
}
function Rf(e) {
  return Rf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rf(e);
}
function xZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wb(e, t);
}
function wb(e, t) {
  return wb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, wb(e, t);
}
function Od(e, t, r) {
  return t = XR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XR(e) {
  var t = wZ(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function wZ(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var _Z = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Y0({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Kn(t, "discard") && !o.isInRange(s) ? null : s;
}, Sd = /* @__PURE__ */ function(e) {
  function t() {
    return hZ(this, t), gZ(this, t, arguments);
  }
  return xZ(t, e), mZ(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, l = n.clipPathId, f = Kt(i), p = Kt(a);
      if (In(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !f || !p)
        return null;
      var d = _Z(this.props);
      if (!d)
        return null;
      var v = d.x, m = d.y, g = this.props, b = g.shape, y = g.className, _ = Kn(this.props, "hidden") ? "url(#".concat(l, ")") : void 0, O = HE(HE({
        clipPath: _
      }, Te(this.props, !0)), {}, {
        cx: v,
        cy: m
      });
      return /* @__PURE__ */ k.createElement(Ge, {
        className: Be("recharts-reference-dot", y)
      }, t.renderDot(b, O), Gt.renderCallByParent(this.props, {
        x: v - o,
        y: m - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(k.Component);
Od(Sd, "displayName", "ReferenceDot");
Od(Sd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Od(Sd, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Ne(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(sc, xb({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function _b() {
  return _b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _b.apply(this, arguments);
}
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e);
}
function GE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function KE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? GE(Object(r), !0).forEach(function(n) {
      Ad(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : GE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SZ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JR(n.key), n);
  }
}
function AZ(e, t, r) {
  return t && SZ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PZ(e, t, r) {
  return t = Df(t), TZ(e, ZR() ? Reflect.construct(t, r || [], Df(e).constructor) : t.apply(e, r));
}
function TZ(e, t) {
  if (t && (zo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return EZ(e);
}
function EZ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZR() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZR = function() {
    return !!e;
  })();
}
function Df(e) {
  return Df = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Df(e);
}
function CZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ob(e, t);
}
function Ob(e, t) {
  return Ob = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ob(e, t);
}
function Ad(e, t, r) {
  return t = JR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JR(e) {
  var t = IZ(e, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function IZ(e, t) {
  if (zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var MZ = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, l = a.y1, f = a.y2, p = a.xAxis, d = a.yAxis;
  if (!p || !d) return null;
  var v = Y0({
    x: p.scale,
    y: d.scale
  }), m = {
    x: t ? v.x.apply(o, {
      position: "start"
    }) : v.x.rangeMin,
    y: n ? v.y.apply(l, {
      position: "start"
    }) : v.y.rangeMin
  }, g = {
    x: r ? v.x.apply(s, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return Kn(a, "discard") && (!v.isInRange(m) || !v.isInRange(g)) ? null : kR(m, g);
}, Pd = /* @__PURE__ */ function(e) {
  function t() {
    return OZ(this, t), PZ(this, t, arguments);
  }
  return CZ(t, e), AZ(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, l = n.className, f = n.alwaysShow, p = n.clipPathId;
      In(f === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var d = Kt(i), v = Kt(a), m = Kt(o), g = Kt(s), b = this.props.shape;
      if (!d && !v && !m && !g && !b)
        return null;
      var y = MZ(d, v, m, g, this.props);
      if (!y && !b)
        return null;
      var _ = Kn(this.props, "hidden") ? "url(#".concat(p, ")") : void 0;
      return /* @__PURE__ */ k.createElement(Ge, {
        className: Be("recharts-reference-area", l)
      }, t.renderRect(b, KE(KE({
        clipPath: _
      }, Te(this.props, !0)), y)), Gt.renderCallByParent(this.props, y));
    }
  }]);
}(k.Component);
Ad(Pd, "displayName", "ReferenceArea");
Ad(Pd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Ad(Pd, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Ne(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(K0, _b({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function QR(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function RZ(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return kX(n, r);
}
function DZ(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + s
  } : {
    start: n ? i + o : a + s,
    end: n ? i : a
  };
}
function Nf(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function NZ(e, t) {
  return QR(e, t + 1);
}
function $Z(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, l = 0, f = 1, p = o, d = function() {
    var g = n == null ? void 0 : n[l];
    if (g === void 0)
      return {
        v: QR(n, f)
      };
    var b = l, y, _ = function() {
      return y === void 0 && (y = r(g, b)), y;
    }, O = g.coordinate, S = l === 0 || Nf(e, O, _, p, s);
    S || (l = 0, p = o, f += 1), S && (p = O + e * (_() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = d(), v) return v.v;
  return [];
}
function Fs(e) {
  "@babel/helpers - typeof";
  return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fs(e);
}
function VE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? VE(Object(r), !0).forEach(function(n) {
      jZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jZ(e, t, r) {
  return t = kZ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kZ(e) {
  var t = LZ(e, "string");
  return Fs(t) == "symbol" ? t : t + "";
}
function LZ(e, t) {
  if (Fs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BZ(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, l = t.end, f = function(v) {
    var m = a[v], g, b = function() {
      return g === void 0 && (g = r(m, v)), g;
    };
    if (v === o - 1) {
      var y = e * (m.coordinate + e * b() / 2 - l);
      a[v] = m = sr(sr({}, m), {}, {
        tickCoord: y > 0 ? m.coordinate - y * e : m.coordinate
      });
    } else
      a[v] = m = sr(sr({}, m), {}, {
        tickCoord: m.coordinate
      });
    var _ = Nf(e, m.tickCoord, b, s, l);
    _ && (l = m.tickCoord - e * (b() / 2 + i), a[v] = sr(sr({}, m), {}, {
      isShow: !0
    }));
  }, p = o - 1; p >= 0; p--)
    f(p);
  return a;
}
function qZ(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, l = t.start, f = t.end;
  if (a) {
    var p = n[s - 1], d = r(p, s - 1), v = e * (p.coordinate + e * d / 2 - f);
    o[s - 1] = p = sr(sr({}, p), {}, {
      tickCoord: v > 0 ? p.coordinate - v * e : p.coordinate
    });
    var m = Nf(e, p.tickCoord, function() {
      return d;
    }, l, f);
    m && (f = p.tickCoord - e * (d / 2 + i), o[s - 1] = sr(sr({}, p), {}, {
      isShow: !0
    }));
  }
  for (var g = a ? s - 1 : s, b = function(O) {
    var S = o[O], P, x = function() {
      return P === void 0 && (P = r(S, O)), P;
    };
    if (O === 0) {
      var A = e * (S.coordinate - e * x() / 2 - l);
      o[O] = S = sr(sr({}, S), {}, {
        tickCoord: A < 0 ? S.coordinate - A * e : S.coordinate
      });
    } else
      o[O] = S = sr(sr({}, S), {}, {
        tickCoord: S.coordinate
      });
    var C = Nf(e, S.tickCoord, x, l, f);
    C && (l = S.tickCoord + e * (x() / 2 + i), o[O] = sr(sr({}, S), {}, {
      isShow: !0
    }));
  }, y = 0; y < g; y++)
    b(y);
  return o;
}
function r1(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, l = e.interval, f = e.tickFormatter, p = e.unit, d = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (pe(l) || Ji.isSsr)
    return NZ(i, typeof l == "number" && pe(l) ? l : 0);
  var v = [], m = s === "top" || s === "bottom" ? "width" : "height", g = p && m === "width" ? es(p, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, b = function(S, P) {
    var x = Ne(f) ? f(S.value, P) : S.value;
    return m === "width" ? RZ(es(x, {
      fontSize: t,
      letterSpacing: r
    }), g, d) : es(x, {
      fontSize: t,
      letterSpacing: r
    })[m];
  }, y = i.length >= 2 ? mr(i[1].coordinate - i[0].coordinate) : 1, _ = DZ(a, y, m);
  return l === "equidistantPreserveStart" ? $Z(y, _, b, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = qZ(y, _, b, i, o, l === "preserveStartEnd") : v = BZ(y, _, b, i, o), v.filter(function(O) {
    return O.isShow;
  }));
}
var FZ = ["viewBox"], WZ = ["viewBox"], zZ = ["ticks"];
function Uo(e) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e);
}
function go() {
  return go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, go.apply(this, arguments);
}
function YE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? YE(Object(r), !0).forEach(function(n) {
      n1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vg(e, t) {
  if (e == null) return {};
  var r = UZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function UZ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function HZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function XE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tD(n.key), n);
  }
}
function GZ(e, t, r) {
  return t && XE(e.prototype, t), r && XE(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KZ(e, t, r) {
  return t = $f(t), VZ(e, eD() ? Reflect.construct(t, r || [], $f(e).constructor) : t.apply(e, r));
}
function VZ(e, t) {
  if (t && (Uo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YZ(e);
}
function YZ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function eD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eD = function() {
    return !!e;
  })();
}
function $f(e) {
  return $f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $f(e);
}
function XZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sb(e, t);
}
function Sb(e, t) {
  return Sb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sb(e, t);
}
function n1(e, t, r) {
  return t = tD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tD(e) {
  var t = ZZ(e, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function ZZ(e, t) {
  if (Uo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ou = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return HZ(this, t), n = KZ(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return XZ(t, e), GZ(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = Vg(n, FZ), s = this.props, l = s.viewBox, f = Vg(s, WZ);
      return !xo(a, l) || !xo(o, f) || !xo(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, s = i.width, l = i.height, f = i.orientation, p = i.tickSize, d = i.mirror, v = i.tickMargin, m, g, b, y, _, O, S = d ? -1 : 1, P = n.tickSize || p, x = pe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          m = g = n.coordinate, y = o + +!d * l, b = y - S * P, O = b - S * v, _ = x;
          break;
        case "left":
          b = y = n.coordinate, g = a + +!d * s, m = g - S * P, _ = m - S * v, O = x;
          break;
        case "right":
          b = y = n.coordinate, g = a + +d * s, m = g + S * P, _ = m + S * v, O = x;
          break;
        default:
          m = g = n.coordinate, y = o + +d * l, b = y + S * P, O = b + S * v, _ = x;
          break;
      }
      return {
        line: {
          x1: m,
          y1: b,
          x2: g,
          y2: y
        },
        tick: {
          x: _,
          y: O
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.orientation, f = n.mirror, p = n.axisLine, d = hr(hr(hr({}, Te(this.props, !1)), Te(p, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        d = hr(hr({}, d), {}, {
          x1: i,
          y1: a + v * s,
          x2: i + o,
          y2: a + v * s
        });
      } else {
        var m = +(l === "left" && !f || l === "right" && f);
        d = hr(hr({}, d), {}, {
          x1: i + m * o,
          y1: a,
          x2: i + m * o,
          y2: a + s
        });
      }
      return /* @__PURE__ */ k.createElement("line", go({}, d, {
        className: Be("recharts-cartesian-axis-line", Hr(p, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, s = this.props, l = s.tickLine, f = s.stroke, p = s.tick, d = s.tickFormatter, v = s.unit, m = r1(hr(hr({}, this.props), {}, {
          ticks: n
        }), i, a), g = this.getTickTextAnchor(), b = this.getTickVerticalAnchor(), y = Te(this.props, !1), _ = Te(p, !1), O = hr(hr({}, y), {}, {
          fill: "none"
        }, Te(l, !1)), S = m.map(function(P, x) {
          var A = o.getTickLineCoord(P), C = A.line, M = A.tick, N = hr(hr(hr(hr({
            textAnchor: g,
            verticalAnchor: b
          }, y), {}, {
            stroke: "none",
            fill: f
          }, _), M), {}, {
            index: x,
            payload: P,
            visibleTicksCount: m.length,
            tickFormatter: d
          });
          return /* @__PURE__ */ k.createElement(Ge, go({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(P.value, "-").concat(P.coordinate, "-").concat(P.tickCoord)
          }, Da(o.props, P, x)), l && /* @__PURE__ */ k.createElement("line", go({}, O, C, {
            className: Be("recharts-cartesian-axis-tick-line", Hr(l, "className"))
          })), p && t.renderTickItem(p, N, "".concat(Ne(d) ? d(P.value, x) : P.value).concat(v || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, l = i.ticksGenerator, f = i.className, p = i.hide;
      if (p)
        return null;
      var d = this.props, v = d.ticks, m = Vg(d, zZ), g = v;
      return Ne(l) && (g = v && v.length > 0 ? l(this.props) : l(m)), o <= 0 || s <= 0 || !g || !g.length ? null : /* @__PURE__ */ k.createElement(Ge, {
        className: Be("recharts-cartesian-axis", f),
        ref: function(y) {
          n.layerReference = y;
        }
      }, a && this.renderAxisLine(), this.renderTicks(g, this.state.fontSize, this.state.letterSpacing), Gt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ k.isValidElement(n) ? o = /* @__PURE__ */ k.cloneElement(n, i) : Ne(n) ? o = n(i) : o = /* @__PURE__ */ k.createElement(Xi, go({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(iI);
n1(ou, "displayName", "CartesianAxis");
n1(ou, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var JZ = ["x1", "y1", "x2", "y2", "key"], QZ = ["offset"];
function ja(e) {
  "@babel/helpers - typeof";
  return ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ja(e);
}
function ZE(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ZE(Object(r), !0).forEach(function(n) {
      eJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZE(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eJ(e, t, r) {
  return t = tJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tJ(e) {
  var t = rJ(e, "string");
  return ja(t) == "symbol" ? t : t + "";
}
function rJ(e, t) {
  if (ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Aa() {
  return Aa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Aa.apply(this, arguments);
}
function JE(e, t) {
  if (e == null) return {};
  var r = nJ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nJ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var iJ = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, l = t.ry;
  return /* @__PURE__ */ k.createElement("rect", {
    x: i,
    y: a,
    ry: l,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function rD(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Ne(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, l = JE(t, JZ), f = Te(l, !1);
    f.offset;
    var p = JE(f, QZ);
    r = /* @__PURE__ */ k.createElement("line", Aa({}, p, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function aJ(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = cr(cr({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(l),
      index: l
    });
    return rD(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function oJ(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, l) {
    var f = cr(cr({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return rD(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function uJ(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var p = s.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, m) {
    return v - m;
  });
  i !== p[0] && p.unshift(0);
  var d = p.map(function(v, m) {
    var g = !p[m + 1], b = g ? i + o - v : p[m + 1] - v;
    if (b <= 0)
      return null;
    var y = m % t.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(m),
      y: v,
      x: n,
      height: b,
      width: a,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, d);
}
function sJ(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var p = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, m) {
    return v - m;
  });
  a !== p[0] && p.unshift(0);
  var d = p.map(function(v, m) {
    var g = !p[m + 1], b = g ? a + s - v : p[m + 1] - v;
    if (b <= 0)
      return null;
    var y = m % n.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(m),
      x: v,
      y: o,
      width: b,
      height: l,
      stroke: "none",
      fill: n[y],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, d);
}
var cJ = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return eR(r1(cr(cr(cr({}, ou.defaultProps), n), {}, {
    ticks: gi(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, lJ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return eR(r1(cr(cr(cr({}, ou.defaultProps), n), {}, {
    ticks: gi(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, lo = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function cc(e) {
  var t, r, n, i, a, o, s = J0(), l = Q0(), f = ZX(), p = cr(cr({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : lo.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : lo.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : lo.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : lo.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : lo.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : lo.verticalFill,
    x: pe(e.x) ? e.x : f.left,
    y: pe(e.y) ? e.y : f.top,
    width: pe(e.width) ? e.width : f.width,
    height: pe(e.height) ? e.height : f.height
  }), d = p.x, v = p.y, m = p.width, g = p.height, b = p.syncWithTicks, y = p.horizontalValues, _ = p.verticalValues, O = VX(), S = YX();
  if (!pe(m) || m <= 0 || !pe(g) || g <= 0 || !pe(d) || d !== +d || !pe(v) || v !== +v)
    return null;
  var P = p.verticalCoordinatesGenerator || cJ, x = p.horizontalCoordinatesGenerator || lJ, A = p.horizontalPoints, C = p.verticalPoints;
  if ((!A || !A.length) && Ne(x)) {
    var M = y && y.length, N = x({
      yAxis: S ? cr(cr({}, S), {}, {
        ticks: M ? y : S.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, M ? !0 : b);
    In(Array.isArray(N), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ja(N), "]")), Array.isArray(N) && (A = N);
  }
  if ((!C || !C.length) && Ne(P)) {
    var z = _ && _.length, D = P({
      xAxis: O ? cr(cr({}, O), {}, {
        ticks: z ? _ : O.ticks
      }) : void 0,
      width: s,
      height: l,
      offset: f
    }, z ? !0 : b);
    In(Array.isArray(D), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ja(D), "]")), Array.isArray(D) && (C = D);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(iJ, {
    fill: p.fill,
    fillOpacity: p.fillOpacity,
    x: p.x,
    y: p.y,
    width: p.width,
    height: p.height,
    ry: p.ry
  }), /* @__PURE__ */ k.createElement(aJ, Aa({}, p, {
    offset: f,
    horizontalPoints: A,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(oJ, Aa({}, p, {
    offset: f,
    verticalPoints: C,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(uJ, Aa({}, p, {
    horizontalPoints: A
  })), /* @__PURE__ */ k.createElement(sJ, Aa({}, p, {
    verticalPoints: C
  })));
}
cc.displayName = "CartesianGrid";
var fJ = ["type", "layout", "connectNulls", "ref"], dJ = ["key"];
function Ho(e) {
  "@babel/helpers - typeof";
  return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e);
}
function QE(e, t) {
  if (e == null) return {};
  var r = pJ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pJ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, os.apply(this, arguments);
}
function eC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eC(Object(r), !0).forEach(function(n) {
      Tn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fo(e) {
  return gJ(e) || mJ(e) || vJ(e) || hJ();
}
function hJ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vJ(e, t) {
  if (e) {
    if (typeof e == "string") return Ab(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ab(e, t);
  }
}
function mJ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gJ(e) {
  if (Array.isArray(e)) return Ab(e);
}
function Ab(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, iD(n.key), n);
  }
}
function bJ(e, t, r) {
  return t && tC(e.prototype, t), r && tC(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xJ(e, t, r) {
  return t = jf(t), wJ(e, nD() ? Reflect.construct(t, r || [], jf(e).constructor) : t.apply(e, r));
}
function wJ(e, t) {
  if (t && (Ho(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _J(e);
}
function _J(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nD = function() {
    return !!e;
  })();
}
function jf(e) {
  return jf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jf(e);
}
function OJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pb(e, t);
}
function Pb(e, t) {
  return Pb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Pb(e, t);
}
function Tn(e, t, r) {
  return t = iD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iD(e) {
  var t = SJ(e, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function SJ(e, t) {
  if (Ho(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var lc = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    yJ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = xJ(this, t, [].concat(i)), Tn(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Tn(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Tn(r, "getStrokeDasharray", function(o, s, l) {
      var f = l.reduce(function(_, O) {
        return _ + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var p = Math.floor(o / f), d = o % f, v = s - o, m = [], g = 0, b = 0; g < l.length; b += l[g], ++g)
        if (b + l[g] > d) {
          m = [].concat(fo(l.slice(0, g)), [d - b]);
          break;
        }
      var y = m.length % 2 === 0 ? [0, v] : [v];
      return [].concat(fo(t.repeat(l, p)), fo(m), y).map(function(_) {
        return "".concat(_, "px");
      }).join(", ");
    }), Tn(r, "id", qa("recharts-line-")), Tn(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Tn(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Tn(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return OJ(t, e), bJ(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.points, s = a.xAxis, l = a.yAxis, f = a.layout, p = a.children, d = Gr(p, uc);
      if (!d)
        return null;
      var v = function(b, y) {
        return {
          x: b.x,
          y: b.y,
          value: b.value,
          errorVal: $t(b.payload, y)
        };
      }, m = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ge, m, d.map(function(g) {
        return /* @__PURE__ */ k.cloneElement(g, {
          key: "bar-".concat(g.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: l,
          layout: f,
          dataPointFormatter: v
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var s = this.props, l = s.dot, f = s.points, p = s.dataKey, d = Te(this.props, !1), v = Te(l, !0), m = f.map(function(b, y) {
        var _ = Fr(Fr(Fr({
          key: "dot-".concat(y),
          r: 3
        }, d), v), {}, {
          value: b.value,
          dataKey: p,
          cx: b.x,
          cy: b.y,
          index: y,
          payload: b.payload
        });
        return t.renderDotItem(l, _);
      }), g = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ge, os({
        className: "recharts-line-dots",
        key: "dots"
      }, g), m);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var s = this.props, l = s.type, f = s.layout, p = s.connectNulls;
      s.ref;
      var d = QE(s, fJ), v = Fr(Fr(Fr({}, Te(d, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: l,
        layout: f,
        connectNulls: p
      });
      return /* @__PURE__ */ k.createElement(Ma, os({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, s = o.points, l = o.strokeDasharray, f = o.isAnimationActive, p = o.animationBegin, d = o.animationDuration, v = o.animationEasing, m = o.animationId, g = o.animateNewValues, b = o.width, y = o.height, _ = this.state, O = _.prevPoints, S = _.totalLength;
      return /* @__PURE__ */ k.createElement(Dn, {
        begin: p,
        duration: d,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(m),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(P) {
        var x = P.t;
        if (O) {
          var A = O.length / s.length, C = s.map(function(W, q) {
            var $ = Math.floor(q * A);
            if (O[$]) {
              var j = O[$], F = Ht(j.x, W.x), V = Ht(j.y, W.y);
              return Fr(Fr({}, W), {}, {
                x: F(x),
                y: V(x)
              });
            }
            if (g) {
              var Z = Ht(b * 2, W.x), Q = Ht(y / 2, W.y);
              return Fr(Fr({}, W), {}, {
                x: Z(x),
                y: Q(x)
              });
            }
            return Fr(Fr({}, W), {}, {
              x: W.x,
              y: W.y
            });
          });
          return a.renderCurveStatically(C, n, i);
        }
        var M = Ht(0, S), N = M(x), z;
        if (l) {
          var D = "".concat(l).split(/[,\s]+/gim).map(function(W) {
            return parseFloat(W);
          });
          z = a.getStrokeDasharray(N, S, D);
        } else
          z = a.generateSimpleStrokeDasharray(S, N);
        return a.renderCurveStatically(s, n, i, {
          strokeDasharray: z
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, s = a.isAnimationActive, l = this.state, f = l.prevPoints, p = l.totalLength;
      return s && o && o.length && (!f && p > 0 || !Na(f, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.xAxis, p = i.yAxis, d = i.top, v = i.left, m = i.width, g = i.height, b = i.isAnimationActive, y = i.id;
      if (a || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, O = s.length === 1, S = Be("recharts-line", l), P = f && f.allowDataOverflow, x = p && p.allowDataOverflow, A = P || x, C = $e(y) ? this.id : y, M = (n = Te(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, N = M.r, z = N === void 0 ? 3 : N, D = M.strokeWidth, W = D === void 0 ? 2 : D, q = r2(o) ? o : {}, $ = q.clipDot, j = $ === void 0 ? !0 : $, F = z * 2 + W;
      return /* @__PURE__ */ k.createElement(Ge, {
        className: S
      }, P || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: P ? v : v - m / 2,
        y: x ? d : d - g / 2,
        width: P ? m : m * 2,
        height: x ? g : g * 2
      })), !j && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: v - F / 2,
        y: d - F / 2,
        width: m + F,
        height: g + F
      }))) : null, !O && this.renderCurve(A, C), this.renderErrorBar(A, C), (O || o) && this.renderDots(A, j, C), (!b || _) && cn.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(fo(n), [0]) : n, o = [], s = 0; s < i; ++s)
        o = [].concat(fo(o), fo(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ k.isValidElement(n))
        a = /* @__PURE__ */ k.cloneElement(n, i);
      else if (Ne(n))
        a = n(i);
      else {
        var o = i.key, s = QE(i, dJ), l = Be("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ k.createElement(sc, os({
          key: o
        }, s, {
          className: l
        }));
      }
      return a;
    }
  }]);
}(dn);
Tn(lc, "displayName", "Line");
Tn(lc, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Ji.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Tn(lc, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, l = e.displayedData, f = e.offset, p = t.layout, d = l.map(function(v, m) {
    var g = $t(v, o);
    return p === "horizontal" ? {
      x: ff({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: v,
        index: m
      }),
      y: $e(g) ? null : n.scale(g),
      value: g,
      payload: v
    } : {
      x: $e(g) ? null : r.scale(g),
      y: ff({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: v,
        index: m
      }),
      value: g,
      payload: v
    };
  });
  return Fr({
    points: d,
    layout: p
  }, f);
});
var AJ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], PJ = ["key"], aD;
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function oD(e, t) {
  if (e == null) return {};
  var r = TJ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TJ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
function rC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rC(Object(r), !0).forEach(function(n) {
      zn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sD(n.key), n);
  }
}
function CJ(e, t, r) {
  return t && nC(e.prototype, t), r && nC(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function IJ(e, t, r) {
  return t = kf(t), MJ(e, uD() ? Reflect.construct(t, r || [], kf(e).constructor) : t.apply(e, r));
}
function MJ(e, t) {
  if (t && (Go(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return RJ(e);
}
function RJ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uD = function() {
    return !!e;
  })();
}
function kf(e) {
  return kf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kf(e);
}
function DJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tb(e, t);
}
function Tb(e, t) {
  return Tb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Tb(e, t);
}
function zn(e, t, r) {
  return t = sD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sD(e) {
  var t = NJ(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function NJ(e, t) {
  if (Go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var na = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    EJ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = IJ(this, t, [].concat(i)), zn(r, "state", {
      isAnimationFinished: !0
    }), zn(r, "id", qa("recharts-area-")), zn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Ne(o) && o();
    }), zn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Ne(o) && o();
    }), r;
  }
  return DJ(t, e), CJ(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var l = this.props, f = l.dot, p = l.points, d = l.dataKey, v = Te(this.props, !1), m = Te(f, !0), g = p.map(function(y, _) {
        var O = Fi(Fi(Fi({
          key: "dot-".concat(_),
          r: 3
        }, v), m), {}, {
          index: _,
          cx: y.x,
          cy: y.y,
          dataKey: d,
          value: y.value,
          payload: y.payload,
          points: p
        });
        return t.renderDotItem(f, O);
      }), b = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ge, Pa({
        className: "recharts-area-dots"
      }, b), g);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].x, f = o[o.length - 1].x, p = n * Math.abs(l - f), d = Hi(o.map(function(v) {
        return v.y || 0;
      }));
      return pe(a) && typeof a == "number" ? d = Math.max(a, d) : a && Array.isArray(a) && a.length && (d = Math.max(Hi(a.map(function(v) {
        return v.y || 0;
      })), d)), pe(d) ? /* @__PURE__ */ k.createElement("rect", {
        x: l < f ? l : l - p,
        y: 0,
        width: p,
        height: Math.floor(d + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].y, f = o[o.length - 1].y, p = n * Math.abs(l - f), d = Hi(o.map(function(v) {
        return v.x || 0;
      }));
      return pe(a) && typeof a == "number" ? d = Math.max(a, d) : a && Array.isArray(a) && a.length && (d = Math.max(Hi(a.map(function(v) {
        return v.x || 0;
      })), d)), pe(d) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: l < f ? l : l - p,
        width: d + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(p)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var i = this.props.layout;
      return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, i, a, o) {
      var s = this.props, l = s.layout, f = s.type, p = s.stroke, d = s.connectNulls, v = s.isRange;
      s.ref;
      var m = oD(s, AJ);
      return /* @__PURE__ */ k.createElement(Ge, {
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ k.createElement(Ma, Pa({}, Te(m, !0), {
        points: n,
        connectNulls: d,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), p !== "none" && /* @__PURE__ */ k.createElement(Ma, Pa({}, Te(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: d,
        fill: "none",
        points: n
      })), p !== "none" && v && /* @__PURE__ */ k.createElement(Ma, Pa({}, Te(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: d,
        fill: "none",
        points: i
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, s = o.points, l = o.baseLine, f = o.isAnimationActive, p = o.animationBegin, d = o.animationDuration, v = o.animationEasing, m = o.animationId, g = this.state, b = g.prevPoints, y = g.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Dn, {
        begin: p,
        duration: d,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(m),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var O = _.t;
        if (b) {
          var S = b.length / s.length, P = s.map(function(M, N) {
            var z = Math.floor(N * S);
            if (b[z]) {
              var D = b[z], W = Ht(D.x, M.x), q = Ht(D.y, M.y);
              return Fi(Fi({}, M), {}, {
                x: W(O),
                y: q(O)
              });
            }
            return M;
          }), x;
          if (pe(l) && typeof l == "number") {
            var A = Ht(y, l);
            x = A(O);
          } else if ($e(l) || tu(l)) {
            var C = Ht(y, 0);
            x = C(O);
          } else
            x = l.map(function(M, N) {
              var z = Math.floor(N * S);
              if (y[z]) {
                var D = y[z], W = Ht(D.x, M.x), q = Ht(D.y, M.y);
                return Fi(Fi({}, M), {}, {
                  x: W(O),
                  y: q(O)
                });
              }
              return M;
            });
          return a.renderAreaStatically(P, x, n, i);
        }
        return /* @__PURE__ */ k.createElement(Ge, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ k.createElement(Ge, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(s, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, o = a.points, s = a.baseLine, l = a.isAnimationActive, f = this.state, p = f.prevPoints, d = f.prevBaseLine, v = f.totalLength;
      return l && o && o.length && (!p && v > 0 || !Na(p, o) || !Na(d, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, f = i.top, p = i.left, d = i.xAxis, v = i.yAxis, m = i.width, g = i.height, b = i.isAnimationActive, y = i.id;
      if (a || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, O = s.length === 1, S = Be("recharts-area", l), P = d && d.allowDataOverflow, x = v && v.allowDataOverflow, A = P || x, C = $e(y) ? this.id : y, M = (n = Te(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, N = M.r, z = N === void 0 ? 3 : N, D = M.strokeWidth, W = D === void 0 ? 2 : D, q = r2(o) ? o : {}, $ = q.clipDot, j = $ === void 0 ? !0 : $, F = z * 2 + W;
      return /* @__PURE__ */ k.createElement(Ge, {
        className: S
      }, P || x ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: P ? p : p - m / 2,
        y: x ? f : f - g / 2,
        width: P ? m : m * 2,
        height: x ? g : g * 2
      })), !j && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: p - F / 2,
        y: f - F / 2,
        width: m + F,
        height: g + F
      }))) : null, O ? null : this.renderArea(A, C), (o || O) && this.renderDots(A, j, C), (!b || _) && cn.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: i.curPoints,
        prevBaseLine: i.curBaseLine
      } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]);
}(dn);
aD = na;
zn(na, "displayName", "Area");
zn(na, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Ji.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
zn(na, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, o = t.props.baseValue, s = o ?? a;
  if (pe(s) && typeof s == "number")
    return s;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var p = Math.max(f[0], f[1]), d = Math.min(f[0], f[1]);
    return s === "dataMin" ? d : s === "dataMax" || p < 0 ? p : Math.max(Math.min(f[0], f[1]), 0);
  }
  return s === "dataMin" ? f[0] : s === "dataMax" ? f[1] : f[0];
});
zn(na, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, l = e.dataKey, f = e.stackedData, p = e.dataStartIndex, d = e.displayedData, v = e.offset, m = t.layout, g = f && f.length, b = aD.getBaseValue(t, r, n, i), y = m === "horizontal", _ = !1, O = d.map(function(P, x) {
    var A;
    g ? A = f[p + x] : (A = $t(P, l), Array.isArray(A) ? _ = !0 : A = [b, A]);
    var C = A[1] == null || g && $t(P, l) == null;
    return y ? {
      x: ff({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: P,
        index: x
      }),
      y: C ? null : i.scale(A[1]),
      value: A,
      payload: P
    } : {
      x: C ? null : n.scale(A[1]),
      y: ff({
        axis: i,
        ticks: o,
        bandSize: s,
        entry: P,
        index: x
      }),
      value: A,
      payload: P
    };
  }), S;
  return g || _ ? S = O.map(function(P) {
    var x = Array.isArray(P.value) ? P.value[0] : null;
    return y ? {
      x: P.x,
      y: x != null && P.y != null ? i.scale(x) : null
    } : {
      x: x != null ? n.scale(x) : null,
      y: P.y
    };
  }) : S = y ? i.scale(b) : n.scale(b), Fi({
    points: O,
    baseLine: S,
    layout: m,
    isRange: _
  }, v);
});
zn(na, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Ne(e))
    r = e(t);
  else {
    var n = Be("recharts-area-dot", typeof e != "boolean" ? e.className : ""), i = t.key, a = oD(t, PJ);
    r = /* @__PURE__ */ k.createElement(sc, Pa({}, a, {
      key: i,
      className: n
    }));
  }
  return r;
});
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function $J(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jJ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fD(n.key), n);
  }
}
function kJ(e, t, r) {
  return t && jJ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LJ(e, t, r) {
  return t = Lf(t), BJ(e, cD() ? Reflect.construct(t, r || [], Lf(e).constructor) : t.apply(e, r));
}
function BJ(e, t) {
  if (t && (Ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qJ(e);
}
function qJ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cD = function() {
    return !!e;
  })();
}
function Lf(e) {
  return Lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lf(e);
}
function FJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Eb(e, t);
}
function Eb(e, t) {
  return Eb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eb(e, t);
}
function lD(e, t, r) {
  return t = fD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fD(e) {
  var t = WJ(e, "string");
  return Ko(t) == "symbol" ? t : t + "";
}
function WJ(e, t) {
  if (Ko(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Cb() {
  return Cb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cb.apply(this, arguments);
}
function zJ(e) {
  var t = e.xAxisId, r = J0(), n = Q0(), i = HR(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(ou, Cb({}, i, {
      className: Be("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return gi(o, !0);
      }
    }))
  );
}
var Ti = /* @__PURE__ */ function(e) {
  function t() {
    return $J(this, t), LJ(this, t, arguments);
  }
  return FJ(t, e), kJ(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(zJ, this.props);
    }
  }]);
}(k.Component);
lD(Ti, "displayName", "XAxis");
lD(Ti, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
function UJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function HJ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hD(n.key), n);
  }
}
function GJ(e, t, r) {
  return t && HJ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KJ(e, t, r) {
  return t = Bf(t), VJ(e, dD() ? Reflect.construct(t, r || [], Bf(e).constructor) : t.apply(e, r));
}
function VJ(e, t) {
  if (t && (Vo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YJ(e);
}
function YJ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (dD = function() {
    return !!e;
  })();
}
function Bf(e) {
  return Bf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bf(e);
}
function XJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ib(e, t);
}
function Ib(e, t) {
  return Ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ib(e, t);
}
function pD(e, t, r) {
  return t = hD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hD(e) {
  var t = ZJ(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function ZJ(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mb() {
  return Mb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mb.apply(this, arguments);
}
var JJ = function(t) {
  var r = t.yAxisId, n = J0(), i = Q0(), a = GR(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(ou, Mb({}, a, {
      className: Be("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return gi(s, !0);
      }
    }))
  );
}, Ei = /* @__PURE__ */ function(e) {
  function t() {
    return UJ(this, t), KJ(this, t, arguments);
  }
  return XJ(t, e), GJ(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(JJ, this.props);
    }
  }]);
}(k.Component);
pD(Ei, "displayName", "YAxis");
pD(Ei, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function iC(e) {
  return rQ(e) || tQ(e) || eQ(e) || QJ();
}
function QJ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eQ(e, t) {
  if (e) {
    if (typeof e == "string") return Rb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rb(e, t);
  }
}
function tQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rQ(e) {
  if (Array.isArray(e)) return Rb(e);
}
function Rb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Db = function(t, r, n, i, a) {
  var o = Gr(t, t1), s = Gr(t, Sd), l = [].concat(iC(o), iC(s)), f = Gr(t, Pd), p = "".concat(i, "Id"), d = i[0], v = r;
  if (l.length && (v = l.reduce(function(b, y) {
    if (y.props[p] === n && Kn(y.props, "extendDomain") && pe(y.props[d])) {
      var _ = y.props[d];
      return [Math.min(b[0], _), Math.max(b[1], _)];
    }
    return b;
  }, v)), f.length) {
    var m = "".concat(d, "1"), g = "".concat(d, "2");
    v = f.reduce(function(b, y) {
      if (y.props[p] === n && Kn(y.props, "extendDomain") && pe(y.props[m]) && pe(y.props[g])) {
        var _ = y.props[m], O = y.props[g];
        return [Math.min(b[0], _, O), Math.max(b[1], _, O)];
      }
      return b;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(b, y) {
    return pe(y) ? [Math.min(b[0], y), Math.max(b[1], y)] : b;
  }, v)), v;
}, Yg = { exports: {} }, aC;
function nQ() {
  return aC || (aC = 1, function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(l, f, p) {
      this.fn = l, this.context = f, this.once = p || !1;
    }
    function a(l, f, p, d, v) {
      if (typeof p != "function")
        throw new TypeError("The listener must be a function");
      var m = new i(p, d || l, v), g = r ? r + f : f;
      return l._events[g] ? l._events[g].fn ? l._events[g] = [l._events[g], m] : l._events[g].push(m) : (l._events[g] = m, l._eventsCount++), l;
    }
    function o(l, f) {
      --l._eventsCount === 0 ? l._events = new n() : delete l._events[f];
    }
    function s() {
      this._events = new n(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var f = [], p, d;
      if (this._eventsCount === 0) return f;
      for (d in p = this._events)
        t.call(p, d) && f.push(r ? d.slice(1) : d);
      return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(p)) : f;
    }, s.prototype.listeners = function(f) {
      var p = r ? r + f : f, d = this._events[p];
      if (!d) return [];
      if (d.fn) return [d.fn];
      for (var v = 0, m = d.length, g = new Array(m); v < m; v++)
        g[v] = d[v].fn;
      return g;
    }, s.prototype.listenerCount = function(f) {
      var p = r ? r + f : f, d = this._events[p];
      return d ? d.fn ? 1 : d.length : 0;
    }, s.prototype.emit = function(f, p, d, v, m, g) {
      var b = r ? r + f : f;
      if (!this._events[b]) return !1;
      var y = this._events[b], _ = arguments.length, O, S;
      if (y.fn) {
        switch (y.once && this.removeListener(f, y.fn, void 0, !0), _) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, p), !0;
          case 3:
            return y.fn.call(y.context, p, d), !0;
          case 4:
            return y.fn.call(y.context, p, d, v), !0;
          case 5:
            return y.fn.call(y.context, p, d, v, m), !0;
          case 6:
            return y.fn.call(y.context, p, d, v, m, g), !0;
        }
        for (S = 1, O = new Array(_ - 1); S < _; S++)
          O[S - 1] = arguments[S];
        y.fn.apply(y.context, O);
      } else {
        var P = y.length, x;
        for (S = 0; S < P; S++)
          switch (y[S].once && this.removeListener(f, y[S].fn, void 0, !0), _) {
            case 1:
              y[S].fn.call(y[S].context);
              break;
            case 2:
              y[S].fn.call(y[S].context, p);
              break;
            case 3:
              y[S].fn.call(y[S].context, p, d);
              break;
            case 4:
              y[S].fn.call(y[S].context, p, d, v);
              break;
            default:
              if (!O) for (x = 1, O = new Array(_ - 1); x < _; x++)
                O[x - 1] = arguments[x];
              y[S].fn.apply(y[S].context, O);
          }
      }
      return !0;
    }, s.prototype.on = function(f, p, d) {
      return a(this, f, p, d, !1);
    }, s.prototype.once = function(f, p, d) {
      return a(this, f, p, d, !0);
    }, s.prototype.removeListener = function(f, p, d, v) {
      var m = r ? r + f : f;
      if (!this._events[m]) return this;
      if (!p)
        return o(this, m), this;
      var g = this._events[m];
      if (g.fn)
        g.fn === p && (!v || g.once) && (!d || g.context === d) && o(this, m);
      else {
        for (var b = 0, y = [], _ = g.length; b < _; b++)
          (g[b].fn !== p || v && !g[b].once || d && g[b].context !== d) && y.push(g[b]);
        y.length ? this._events[m] = y.length === 1 ? y[0] : y : o(this, m);
      }
      return this;
    }, s.prototype.removeAllListeners = function(f) {
      var p;
      return f ? (p = r ? r + f : f, this._events[p] && o(this, p)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  }(Yg)), Yg.exports;
}
var iQ = nQ();
const aQ = /* @__PURE__ */ ut(iQ);
var Xg = new aQ(), Zg = "recharts.syncMouseEvents";
function Ws(e) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ws(e);
}
function oQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uQ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vD(n.key), n);
  }
}
function sQ(e, t, r) {
  return t && uQ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jg(e, t, r) {
  return t = vD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vD(e) {
  var t = cQ(e, "string");
  return Ws(t) == "symbol" ? t : t + "";
}
function cQ(e, t) {
  if (Ws(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ws(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var lQ = /* @__PURE__ */ function() {
  function e() {
    oQ(this, e), Jg(this, "activeIndex", 0), Jg(this, "coordinateList", []), Jg(this, "layout", "horizontal");
  }
  return sQ(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, l = r.layout, f = l === void 0 ? null : l, p = r.offset, d = p === void 0 ? null : p, v = r.mouseHandlerCallback, m = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = f ?? this.layout, this.offset = d ?? this.offset, this.mouseHandlerCallback = m ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, p = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, d = a + l + f, v = o + this.offset.top + s / 2 + p;
        this.mouseHandlerCallback({
          pageX: d,
          pageY: v
        });
      }
    }
  }]);
}();
function fQ(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && pe(n) && pe(i))
      return !0;
  }
  return !1;
}
function dQ(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function mD(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = ht(t, r, n, i), s = ht(t, r, n, a);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function pQ(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, l = t.cy, f = t.innerRadius, p = t.outerRadius, d = t.angle, v = ht(s, l, f, d), m = ht(s, l, p, d);
      n = v.x, i = v.y, a = m.x, o = m.y;
    } else
      return mD(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function zs(e) {
  "@babel/helpers - typeof";
  return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zs(e);
}
function oC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oC(Object(r), !0).forEach(function(n) {
      hQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hQ(e, t, r) {
  return t = vQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vQ(e) {
  var t = mQ(e, "string");
  return zs(t) == "symbol" ? t : t + "";
}
function mQ(e, t) {
  if (zs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gQ(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, l = e.offset, f = e.activeTooltipIndex, p = e.tooltipAxisBandSize, d = e.layout, v = e.chartName, m = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !m || !a || !o || v !== "ScatterChart" && i !== "axis")
    return null;
  var g, b = Ma;
  if (v === "ScatterChart")
    g = o, b = EV;
  else if (v === "BarChart")
    g = dQ(d, o, l, p), b = K0;
  else if (d === "radial") {
    var y = mD(o), _ = y.cx, O = y.cy, S = y.radius, P = y.startAngle, x = y.endAngle;
    g = {
      cx: _,
      cy: O,
      startAngle: P,
      endAngle: x,
      innerRadius: S,
      outerRadius: S
    }, b = fR;
  } else
    g = {
      points: pQ(d, o, l)
    }, b = Ma;
  var A = El(El(El(El({
    stroke: "#ccc",
    pointerEvents: "none"
  }, l), g), Te(m, !1)), {}, {
    payload: s,
    payloadIndex: f,
    className: Be("recharts-tooltip-cursor", m.className)
  });
  return /* @__PURE__ */ Cn(m) ? /* @__PURE__ */ Ut(m, A) : /* @__PURE__ */ nI(b, A);
}
var yQ = ["item"], bQ = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yo.apply(this, arguments);
}
function uC(e, t) {
  return _Q(e) || wQ(e, t) || yD(e, t) || xQ();
}
function xQ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wQ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function _Q(e) {
  if (Array.isArray(e)) return e;
}
function sC(e, t) {
  if (e == null) return {};
  var r = OQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OQ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function SQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function AQ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bD(n.key), n);
  }
}
function PQ(e, t, r) {
  return t && AQ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TQ(e, t, r) {
  return t = qf(t), EQ(e, gD() ? Reflect.construct(t, r || [], qf(e).constructor) : t.apply(e, r));
}
function EQ(e, t) {
  if (t && (Yo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CQ(e);
}
function CQ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gD = function() {
    return !!e;
  })();
}
function qf(e) {
  return qf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qf(e);
}
function IQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nb(e, t);
}
function Nb(e, t) {
  return Nb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nb(e, t);
}
function Xo(e) {
  return DQ(e) || RQ(e) || yD(e) || MQ();
}
function MQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yD(e, t) {
  if (e) {
    if (typeof e == "string") return $b(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $b(e, t);
  }
}
function RQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DQ(e) {
  if (Array.isArray(e)) return $b(e);
}
function $b(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cC(Object(r), !0).forEach(function(n) {
      De(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function De(e, t, r) {
  return t = bD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bD(e) {
  var t = NQ(e, "string");
  return Yo(t) == "symbol" ? t : t + "";
}
function NQ(e, t) {
  if (Yo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $Q = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, jQ = {
  width: "100%",
  height: "100%"
}, xD = {
  x: 0,
  y: 0
};
function Cl(e) {
  return e;
}
var kQ = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, LQ = function(t, r, n, i) {
  var a = r.find(function(p) {
    return p && p.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return re(re(re({}, i), ht(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var l = a.coordinate, f = i.angle;
    return re(re(re({}, i), ht(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return xD;
}, Td = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(Xo(s), Xo(f)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && pe(i) && pe(a) ? t.slice(i, a + 1) : [];
};
function wD(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var jb = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = Td(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, f) {
    var p, d = (p = f.props.data) !== null && p !== void 0 ? p : r;
    d && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (d = d.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var m = d === void 0 ? s : d;
      v = Bl(m, o.dataKey, i);
    } else
      v = d && d[n] || s[n];
    return v ? [].concat(Xo(l), [aR(f, v)]) : l;
  }, []);
}, lC = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = kQ(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, p = V7(o, s, f, l);
  if (p >= 0 && f) {
    var d = f[p] && f[p].value, v = jb(t, r, p, d), m = LQ(n, s, p, a);
    return {
      activeTooltipIndex: p,
      activeLabel: d,
      activePayload: v,
      activeCoordinate: m
    };
  }
  return null;
}, BQ = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, p = t.layout, d = t.children, v = t.stackOffset, m = QM(p, a);
  return n.reduce(function(g, b) {
    var y, _ = b.type.defaultProps !== void 0 ? re(re({}, b.type.defaultProps), b.props) : b.props, O = _.type, S = _.dataKey, P = _.allowDataOverflow, x = _.allowDuplicatedCategory, A = _.scale, C = _.ticks, M = _.includeHidden, N = _[o];
    if (g[N])
      return g;
    var z = Td(t.data, {
      graphicalItems: i.filter(function(te) {
        var ie, ve = o in te.props ? te.props[o] : (ie = te.type.defaultProps) === null || ie === void 0 ? void 0 : ie[o];
        return ve === N;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), D = z.length, W, q, $;
    fQ(_.domain, P, O) && (W = Yy(_.domain, null, P), m && (O === "number" || A !== "auto") && ($ = rs(z, S, "category")));
    var j = wD(O);
    if (!W || W.length === 0) {
      var F, V = (F = _.domain) !== null && F !== void 0 ? F : j;
      if (S) {
        if (W = rs(z, S, O), O === "category" && m) {
          var Z = F5(W);
          x && Z ? (q = W, W = Af(0, D)) : x || (W = tT(V, W, b).reduce(function(te, ie) {
            return te.indexOf(ie) >= 0 ? te : [].concat(Xo(te), [ie]);
          }, []));
        } else if (O === "category")
          x ? W = W.filter(function(te) {
            return te !== "" && !$e(te);
          }) : W = tT(V, W, b).reduce(function(te, ie) {
            return te.indexOf(ie) >= 0 || ie === "" || $e(ie) ? te : [].concat(Xo(te), [ie]);
          }, []);
        else if (O === "number") {
          var Q = Q7(z, i.filter(function(te) {
            var ie, ve, le = o in te.props ? te.props[o] : (ie = te.type.defaultProps) === null || ie === void 0 ? void 0 : ie[o], be = "hide" in te.props ? te.props.hide : (ve = te.type.defaultProps) === null || ve === void 0 ? void 0 : ve.hide;
            return le === N && (M || !be);
          }), S, a, p);
          Q && (W = Q);
        }
        m && (O === "number" || A !== "auto") && ($ = rs(z, S, "category"));
      } else m ? W = Af(0, D) : s && s[N] && s[N].hasStack && O === "number" ? W = v === "expand" ? [0, 1] : iR(s[N].stackGroups, l, f) : W = JM(z, i.filter(function(te) {
        var ie = o in te.props ? te.props[o] : te.type.defaultProps[o], ve = "hide" in te.props ? te.props.hide : te.type.defaultProps.hide;
        return ie === N && (M || !ve);
      }), O, p, !0);
      if (O === "number")
        W = Db(d, W, N, a, C), V && (W = Yy(V, W, P));
      else if (O === "category" && V) {
        var G = V, X = W.every(function(te) {
          return G.indexOf(te) >= 0;
        });
        X && (W = G);
      }
    }
    return re(re({}, g), {}, De({}, N, re(re({}, _), {}, {
      axisType: a,
      domain: W,
      categoricalDomain: $,
      duplicateDomain: q,
      originalDomain: (y = _.domain) !== null && y !== void 0 ? y : j,
      isCategorical: m,
      layout: p
    })));
  }, {});
}, qQ = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, p = t.layout, d = t.children, v = Td(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), m = v.length, g = QM(p, a), b = -1;
  return n.reduce(function(y, _) {
    var O = _.type.defaultProps !== void 0 ? re(re({}, _.type.defaultProps), _.props) : _.props, S = O[o], P = wD("number");
    if (!y[S]) {
      b++;
      var x;
      return g ? x = Af(0, m) : s && s[S] && s[S].hasStack ? (x = iR(s[S].stackGroups, l, f), x = Db(d, x, S, a)) : (x = Yy(P, JM(v, n.filter(function(A) {
        var C, M, N = o in A.props ? A.props[o] : (C = A.type.defaultProps) === null || C === void 0 ? void 0 : C[o], z = "hide" in A.props ? A.props.hide : (M = A.type.defaultProps) === null || M === void 0 ? void 0 : M.hide;
        return N === S && !z;
      }), "number", p), i.defaultProps.allowDataOverflow), x = Db(d, x, S, a)), re(re({}, y), {}, De({}, S, re(re({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Hr($Q, "".concat(a, ".").concat(b % 2), null),
        domain: x,
        originalDomain: P,
        isCategorical: g,
        layout: p
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return y;
  }, {});
}, FQ = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, p = t.children, d = "".concat(i, "Id"), v = Gr(p, a), m = {};
  return v && v.length ? m = BQ(t, {
    axes: v,
    graphicalItems: o,
    axisType: i,
    axisIdKey: d,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  }) : o && o.length && (m = qQ(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: d,
    stackGroups: s,
    dataStartIndex: l,
    dataEndIndex: f
  })), m;
}, WQ = function(t) {
  var r = zi(t), n = gi(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: b0(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: df(r, n)
  };
}, fC = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = zr(r, Lo), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, zQ = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = yi(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, dC = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, UQ = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, f = n.width, p = n.height, d = n.children, v = n.margin || {}, m = zr(d, Lo), g = zr(d, Ea), b = Object.keys(l).reduce(function(x, A) {
    var C = l[A], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, x), {}, De({}, M, x[M] + C.width)) : x;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), y = Object.keys(o).reduce(function(x, A) {
    var C = o[A], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, x), {}, De({}, M, Hr(x, "".concat(M)) + C.height)) : x;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), _ = re(re({}, y), b), O = _.bottom;
  m && (_.bottom += m.props.height || Lo.defaultProps.height), g && r && (_ = Z7(_, i, n, r));
  var S = f - _.left - _.right, P = p - _.top - _.bottom;
  return re(re({
    brushBottom: O
  }, _), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(P, 0)
  });
}, HQ = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Ed = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, l = t.axisComponents, f = t.legendContent, p = t.formatAxisMap, d = t.defaultProps, v = function(_, O) {
    var S = O.graphicalItems, P = O.stackGroups, x = O.offset, A = O.updateId, C = O.dataStartIndex, M = O.dataEndIndex, N = _.barSize, z = _.layout, D = _.barGap, W = _.barCategoryGap, q = _.maxBarSize, $ = dC(z), j = $.numericAxisName, F = $.cateAxisName, V = zQ(S), Z = [];
    return S.forEach(function(Q, G) {
      var X = Td(_.data, {
        graphicalItems: [Q],
        dataStartIndex: C,
        dataEndIndex: M
      }), te = Q.type.defaultProps !== void 0 ? re(re({}, Q.type.defaultProps), Q.props) : Q.props, ie = te.dataKey, ve = te.maxBarSize, le = te["".concat(j, "Id")], be = te["".concat(F, "Id")], Oe = {}, ge = l.reduce(function(at, Mt) {
        var nr, wr, Lt = O["".concat(Mt.axisType, "Map")], Dr = te["".concat(Mt.axisType, "Id")];
        Lt && Lt[Dr] || Mt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? Ir(!1, "Specifying a(n) ".concat(Mt.axisType, "Id requires a corresponding ").concat(
          Mt.axisType,
          "Id on the targeted graphical component "
        ).concat((nr = Q == null || (wr = Q.type) === null || wr === void 0 ? void 0 : wr.displayName) !== null && nr !== void 0 ? nr : "")) : Ir());
        var _r = Lt[Dr];
        return re(re({}, at), {}, De(De({}, Mt.axisType, _r), "".concat(Mt.axisType, "Ticks"), gi(_r)));
      }, Oe), ae = ge[F], fe = ge["".concat(F, "Ticks")], he = P && P[le] && P[le].hasStack && sH(Q, P[le].stackGroups), B = yi(Q.type).indexOf("Bar") >= 0, xe = df(ae, fe), ee = [], Ce = V && Y7({
        barSize: N,
        stackGroups: P,
        totalSize: HQ(ge, F)
      });
      if (B) {
        var qe, je, gt = $e(ve) ? q : ve, Pt = (qe = (je = df(ae, fe, !0)) !== null && je !== void 0 ? je : gt) !== null && qe !== void 0 ? qe : 0;
        ee = X7({
          barGap: D,
          barCategoryGap: W,
          bandSize: Pt !== xe ? Pt : xe,
          sizeList: Ce[be],
          maxBarSize: gt
        }), Pt !== xe && (ee = ee.map(function(at) {
          return re(re({}, at), {}, {
            position: re(re({}, at.position), {}, {
              offset: at.position.offset - Pt / 2
            })
          });
        }));
      }
      var It = Q && Q.type && Q.type.getComposedData;
      It && Z.push({
        props: re(re({}, It(re(re({}, ge), {}, {
          displayedData: X,
          props: _,
          dataKey: ie,
          item: Q,
          bandSize: xe,
          barPosition: ee,
          offset: x,
          stackedData: he,
          layout: z,
          dataStartIndex: C,
          dataEndIndex: M
        }))), {}, De(De(De({
          key: Q.key || "item-".concat(G)
        }, j, ge[j]), F, ge[F]), "animationId", A)),
        childIndex: J5(Q, _.children),
        item: Q
      });
    }), Z;
  }, m = function(_, O) {
    var S = _.props, P = _.dataStartIndex, x = _.dataEndIndex, A = _.updateId;
    if (!mO({
      props: S
    }))
      return null;
    var C = S.children, M = S.layout, N = S.stackOffset, z = S.data, D = S.reverseStackOrder, W = dC(M), q = W.numericAxisName, $ = W.cateAxisName, j = Gr(C, n), F = oH(z, j, "".concat(q, "Id"), "".concat($, "Id"), N, D), V = l.reduce(function(te, ie) {
      var ve = "".concat(ie.axisType, "Map");
      return re(re({}, te), {}, De({}, ve, FQ(S, re(re({}, ie), {}, {
        graphicalItems: j,
        stackGroups: ie.axisType === q && F,
        dataStartIndex: P,
        dataEndIndex: x
      }))));
    }, {}), Z = UQ(re(re({}, V), {}, {
      props: S,
      graphicalItems: j
    }), O == null ? void 0 : O.legendBBox);
    Object.keys(V).forEach(function(te) {
      V[te] = p(S, V[te], Z, te.replace("Map", ""), r);
    });
    var Q = V["".concat($, "Map")], G = WQ(Q), X = v(S, re(re({}, V), {}, {
      dataStartIndex: P,
      dataEndIndex: x,
      updateId: A,
      graphicalItems: j,
      stackGroups: F,
      offset: Z
    }));
    return re(re({
      formattedGraphicalItems: X,
      graphicalItems: j,
      offset: Z,
      stackGroups: F
    }, G), V);
  }, g = /* @__PURE__ */ function(y) {
    function _(O) {
      var S, P, x;
      return SQ(this, _), x = TQ(this, _, [O]), De(x, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), De(x, "accessibilityManager", new lQ()), De(x, "handleLegendBBoxUpdate", function(A) {
        if (A) {
          var C = x.state, M = C.dataStartIndex, N = C.dataEndIndex, z = C.updateId;
          x.setState(re({
            legendBBox: A
          }, m({
            props: x.props,
            dataStartIndex: M,
            dataEndIndex: N,
            updateId: z
          }, re(re({}, x.state), {}, {
            legendBBox: A
          }))));
        }
      }), De(x, "handleReceiveSyncEvent", function(A, C, M) {
        if (x.props.syncId === A) {
          if (M === x.eventEmitterSymbol && typeof x.props.syncMethod != "function")
            return;
          x.applySyncEvent(C);
        }
      }), De(x, "handleBrushChange", function(A) {
        var C = A.startIndex, M = A.endIndex;
        if (C !== x.state.dataStartIndex || M !== x.state.dataEndIndex) {
          var N = x.state.updateId;
          x.setState(function() {
            return re({
              dataStartIndex: C,
              dataEndIndex: M
            }, m({
              props: x.props,
              dataStartIndex: C,
              dataEndIndex: M,
              updateId: N
            }, x.state));
          }), x.triggerSyncEvent({
            dataStartIndex: C,
            dataEndIndex: M
          });
        }
      }), De(x, "handleMouseEnter", function(A) {
        var C = x.getMouseInfo(A);
        if (C) {
          var M = re(re({}, C), {}, {
            isTooltipActive: !0
          });
          x.setState(M), x.triggerSyncEvent(M);
          var N = x.props.onMouseEnter;
          Ne(N) && N(M, A);
        }
      }), De(x, "triggeredAfterMouseMove", function(A) {
        var C = x.getMouseInfo(A), M = C ? re(re({}, C), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        x.setState(M), x.triggerSyncEvent(M);
        var N = x.props.onMouseMove;
        Ne(N) && N(M, A);
      }), De(x, "handleItemMouseEnter", function(A) {
        x.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: A,
            activePayload: A.tooltipPayload,
            activeCoordinate: A.tooltipPosition || {
              x: A.cx,
              y: A.cy
            }
          };
        });
      }), De(x, "handleItemMouseLeave", function() {
        x.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), De(x, "handleMouseMove", function(A) {
        A.persist(), x.throttleTriggeredAfterMouseMove(A);
      }), De(x, "handleMouseLeave", function(A) {
        x.throttleTriggeredAfterMouseMove.cancel();
        var C = {
          isTooltipActive: !1
        };
        x.setState(C), x.triggerSyncEvent(C);
        var M = x.props.onMouseLeave;
        Ne(M) && M(C, A);
      }), De(x, "handleOuterEvent", function(A) {
        var C = Z5(A), M = Hr(x.props, "".concat(C));
        if (C && Ne(M)) {
          var N, z;
          /.*touch.*/i.test(C) ? z = x.getMouseInfo(A.changedTouches[0]) : z = x.getMouseInfo(A), M((N = z) !== null && N !== void 0 ? N : {}, A);
        }
      }), De(x, "handleClick", function(A) {
        var C = x.getMouseInfo(A);
        if (C) {
          var M = re(re({}, C), {}, {
            isTooltipActive: !0
          });
          x.setState(M), x.triggerSyncEvent(M);
          var N = x.props.onClick;
          Ne(N) && N(M, A);
        }
      }), De(x, "handleMouseDown", function(A) {
        var C = x.props.onMouseDown;
        if (Ne(C)) {
          var M = x.getMouseInfo(A);
          C(M, A);
        }
      }), De(x, "handleMouseUp", function(A) {
        var C = x.props.onMouseUp;
        if (Ne(C)) {
          var M = x.getMouseInfo(A);
          C(M, A);
        }
      }), De(x, "handleTouchMove", function(A) {
        A.changedTouches != null && A.changedTouches.length > 0 && x.throttleTriggeredAfterMouseMove(A.changedTouches[0]);
      }), De(x, "handleTouchStart", function(A) {
        A.changedTouches != null && A.changedTouches.length > 0 && x.handleMouseDown(A.changedTouches[0]);
      }), De(x, "handleTouchEnd", function(A) {
        A.changedTouches != null && A.changedTouches.length > 0 && x.handleMouseUp(A.changedTouches[0]);
      }), De(x, "handleDoubleClick", function(A) {
        var C = x.props.onDoubleClick;
        if (Ne(C)) {
          var M = x.getMouseInfo(A);
          C(M, A);
        }
      }), De(x, "handleContextMenu", function(A) {
        var C = x.props.onContextMenu;
        if (Ne(C)) {
          var M = x.getMouseInfo(A);
          C(M, A);
        }
      }), De(x, "triggerSyncEvent", function(A) {
        x.props.syncId !== void 0 && Xg.emit(Zg, x.props.syncId, A, x.eventEmitterSymbol);
      }), De(x, "applySyncEvent", function(A) {
        var C = x.props, M = C.layout, N = C.syncMethod, z = x.state.updateId, D = A.dataStartIndex, W = A.dataEndIndex;
        if (A.dataStartIndex !== void 0 || A.dataEndIndex !== void 0)
          x.setState(re({
            dataStartIndex: D,
            dataEndIndex: W
          }, m({
            props: x.props,
            dataStartIndex: D,
            dataEndIndex: W,
            updateId: z
          }, x.state)));
        else if (A.activeTooltipIndex !== void 0) {
          var q = A.chartX, $ = A.chartY, j = A.activeTooltipIndex, F = x.state, V = F.offset, Z = F.tooltipTicks;
          if (!V)
            return;
          if (typeof N == "function")
            j = N(Z, A);
          else if (N === "value") {
            j = -1;
            for (var Q = 0; Q < Z.length; Q++)
              if (Z[Q].value === A.activeLabel) {
                j = Q;
                break;
              }
          }
          var G = re(re({}, V), {}, {
            x: V.left,
            y: V.top
          }), X = Math.min(q, G.x + G.width), te = Math.min($, G.y + G.height), ie = Z[j] && Z[j].value, ve = jb(x.state, x.props.data, j), le = Z[j] ? {
            x: M === "horizontal" ? Z[j].coordinate : X,
            y: M === "horizontal" ? te : Z[j].coordinate
          } : xD;
          x.setState(re(re({}, A), {}, {
            activeLabel: ie,
            activeCoordinate: le,
            activePayload: ve,
            activeTooltipIndex: j
          }));
        } else
          x.setState(A);
      }), De(x, "renderCursor", function(A) {
        var C, M = x.state, N = M.isTooltipActive, z = M.activeCoordinate, D = M.activePayload, W = M.offset, q = M.activeTooltipIndex, $ = M.tooltipAxisBandSize, j = x.getTooltipEventType(), F = (C = A.props.active) !== null && C !== void 0 ? C : N, V = x.props.layout, Z = A.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(gQ, {
          key: Z,
          activeCoordinate: z,
          activePayload: D,
          activeTooltipIndex: q,
          chartName: r,
          element: A,
          isActive: F,
          layout: V,
          offset: W,
          tooltipAxisBandSize: $,
          tooltipEventType: j
        });
      }), De(x, "renderPolarAxis", function(A, C, M) {
        var N = Hr(A, "type.axisType"), z = Hr(x.state, "".concat(N, "Map")), D = A.type.defaultProps, W = D !== void 0 ? re(re({}, D), A.props) : A.props, q = z && z[W["".concat(N, "Id")]];
        return /* @__PURE__ */ Ut(A, re(re({}, q), {}, {
          className: Be(N, q.className),
          key: A.key || "".concat(C, "-").concat(M),
          ticks: gi(q, !0)
        }));
      }), De(x, "renderPolarGrid", function(A) {
        var C = A.props, M = C.radialLines, N = C.polarAngles, z = C.polarRadius, D = x.state, W = D.radiusAxisMap, q = D.angleAxisMap, $ = zi(W), j = zi(q), F = j.cx, V = j.cy, Z = j.innerRadius, Q = j.outerRadius;
        return /* @__PURE__ */ Ut(A, {
          polarAngles: Array.isArray(N) ? N : gi(j, !0).map(function(G) {
            return G.coordinate;
          }),
          polarRadius: Array.isArray(z) ? z : gi($, !0).map(function(G) {
            return G.coordinate;
          }),
          cx: F,
          cy: V,
          innerRadius: Z,
          outerRadius: Q,
          key: A.key || "polar-grid",
          radialLines: M
        });
      }), De(x, "renderLegend", function() {
        var A = x.state.formattedGraphicalItems, C = x.props, M = C.children, N = C.width, z = C.height, D = x.props.margin || {}, W = N - (D.left || 0) - (D.right || 0), q = XM({
          children: M,
          formattedGraphicalItems: A,
          legendWidth: W,
          legendContent: f
        });
        if (!q)
          return null;
        var $ = q.item, j = sC(q, yQ);
        return /* @__PURE__ */ Ut($, re(re({}, j), {}, {
          chartWidth: N,
          chartHeight: z,
          margin: D,
          onBBoxUpdate: x.handleLegendBBoxUpdate
        }));
      }), De(x, "renderTooltip", function() {
        var A, C = x.props, M = C.children, N = C.accessibilityLayer, z = zr(M, Fn);
        if (!z)
          return null;
        var D = x.state, W = D.isTooltipActive, q = D.activeCoordinate, $ = D.activePayload, j = D.activeLabel, F = D.offset, V = (A = z.props.active) !== null && A !== void 0 ? A : W;
        return /* @__PURE__ */ Ut(z, {
          viewBox: re(re({}, F), {}, {
            x: F.left,
            y: F.top
          }),
          active: V,
          label: j,
          payload: V ? $ : [],
          coordinate: q,
          accessibilityLayer: N
        });
      }), De(x, "renderBrush", function(A) {
        var C = x.props, M = C.margin, N = C.data, z = x.state, D = z.offset, W = z.dataStartIndex, q = z.dataEndIndex, $ = z.updateId;
        return /* @__PURE__ */ Ut(A, {
          key: A.key || "_recharts-brush",
          onChange: _l(x.handleBrushChange, A.props.onChange),
          data: N,
          x: pe(A.props.x) ? A.props.x : D.left,
          y: pe(A.props.y) ? A.props.y : D.top + D.height + D.brushBottom - (M.bottom || 0),
          width: pe(A.props.width) ? A.props.width : D.width,
          startIndex: W,
          endIndex: q,
          updateId: "brush-".concat($)
        });
      }), De(x, "renderReferenceElement", function(A, C, M) {
        if (!A)
          return null;
        var N = x, z = N.clipPathId, D = x.state, W = D.xAxisMap, q = D.yAxisMap, $ = D.offset, j = A.type.defaultProps || {}, F = A.props, V = F.xAxisId, Z = V === void 0 ? j.xAxisId : V, Q = F.yAxisId, G = Q === void 0 ? j.yAxisId : Q;
        return /* @__PURE__ */ Ut(A, {
          key: A.key || "".concat(C, "-").concat(M),
          xAxis: W[Z],
          yAxis: q[G],
          viewBox: {
            x: $.left,
            y: $.top,
            width: $.width,
            height: $.height
          },
          clipPathId: z
        });
      }), De(x, "renderActivePoints", function(A) {
        var C = A.item, M = A.activePoint, N = A.basePoint, z = A.childIndex, D = A.isRange, W = [], q = C.props.key, $ = C.item.type.defaultProps !== void 0 ? re(re({}, C.item.type.defaultProps), C.item.props) : C.item.props, j = $.activeDot, F = $.dataKey, V = re(re({
          index: z,
          dataKey: F,
          cx: M.x,
          cy: M.y,
          r: 4,
          fill: H0(C.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: M.payload,
          value: M.value
        }, Te(j, !1)), ql(j));
        return W.push(_.renderActiveDot(j, V, "".concat(q, "-activePoint-").concat(z))), N ? W.push(_.renderActiveDot(j, re(re({}, V), {}, {
          cx: N.x,
          cy: N.y
        }), "".concat(q, "-basePoint-").concat(z))) : D && W.push(null), W;
      }), De(x, "renderGraphicChild", function(A, C, M) {
        var N = x.filterFormatItem(A, C, M);
        if (!N)
          return null;
        var z = x.getTooltipEventType(), D = x.state, W = D.isTooltipActive, q = D.tooltipAxis, $ = D.activeTooltipIndex, j = D.activeLabel, F = x.props.children, V = zr(F, Fn), Z = N.props, Q = Z.points, G = Z.isRange, X = Z.baseLine, te = N.item.type.defaultProps !== void 0 ? re(re({}, N.item.type.defaultProps), N.item.props) : N.item.props, ie = te.activeDot, ve = te.hide, le = te.activeBar, be = te.activeShape, Oe = !!(!ve && W && V && (ie || le || be)), ge = {};
        z !== "axis" && V && V.props.trigger === "click" ? ge = {
          onClick: _l(x.handleItemMouseEnter, A.props.onClick)
        } : z !== "axis" && (ge = {
          onMouseLeave: _l(x.handleItemMouseLeave, A.props.onMouseLeave),
          onMouseEnter: _l(x.handleItemMouseEnter, A.props.onMouseEnter)
        });
        var ae = /* @__PURE__ */ Ut(A, re(re({}, N.props), ge));
        function fe(Mt) {
          return typeof q.dataKey == "function" ? q.dataKey(Mt.payload) : null;
        }
        if (Oe)
          if ($ >= 0) {
            var he, B;
            if (q.dataKey && !q.allowDuplicatedCategory) {
              var xe = typeof q.dataKey == "function" ? fe : "payload.".concat(q.dataKey.toString());
              he = Bl(Q, xe, j), B = G && X && Bl(X, xe, j);
            } else
              he = Q == null ? void 0 : Q[$], B = G && X && X[$];
            if (be || le) {
              var ee = A.props.activeIndex !== void 0 ? A.props.activeIndex : $;
              return [/* @__PURE__ */ Ut(A, re(re(re({}, N.props), ge), {}, {
                activeIndex: ee
              })), null, null];
            }
            if (!$e(he))
              return [ae].concat(Xo(x.renderActivePoints({
                item: N,
                activePoint: he,
                basePoint: B,
                childIndex: $,
                isRange: G
              })));
          } else {
            var Ce, qe = (Ce = x.getItemByXY(x.state.activeCoordinate)) !== null && Ce !== void 0 ? Ce : {
              graphicalItem: ae
            }, je = qe.graphicalItem, gt = je.item, Pt = gt === void 0 ? A : gt, It = je.childIndex, at = re(re(re({}, N.props), ge), {}, {
              activeIndex: It
            });
            return [/* @__PURE__ */ Ut(Pt, at), null, null];
          }
        return G ? [ae, null, null] : [ae, null];
      }), De(x, "renderCustomized", function(A, C, M) {
        return /* @__PURE__ */ Ut(A, re(re({
          key: "recharts-customized-".concat(M)
        }, x.props), x.state));
      }), De(x, "renderMap", {
        CartesianGrid: {
          handler: Cl,
          once: !0
        },
        ReferenceArea: {
          handler: x.renderReferenceElement
        },
        ReferenceLine: {
          handler: Cl
        },
        ReferenceDot: {
          handler: x.renderReferenceElement
        },
        XAxis: {
          handler: Cl
        },
        YAxis: {
          handler: Cl
        },
        Brush: {
          handler: x.renderBrush,
          once: !0
        },
        Bar: {
          handler: x.renderGraphicChild
        },
        Line: {
          handler: x.renderGraphicChild
        },
        Area: {
          handler: x.renderGraphicChild
        },
        Radar: {
          handler: x.renderGraphicChild
        },
        RadialBar: {
          handler: x.renderGraphicChild
        },
        Scatter: {
          handler: x.renderGraphicChild
        },
        Pie: {
          handler: x.renderGraphicChild
        },
        Funnel: {
          handler: x.renderGraphicChild
        },
        Tooltip: {
          handler: x.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: x.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: x.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: x.renderPolarAxis
        },
        Customized: {
          handler: x.renderCustomized
        }
      }), x.clipPathId = "".concat((S = O.id) !== null && S !== void 0 ? S : qa("recharts"), "-clip"), x.throttleTriggeredAfterMouseMove = Y2(x.triggeredAfterMouseMove, (P = O.throttleDelay) !== null && P !== void 0 ? P : 1e3 / 60), x.state = {}, x;
    }
    return IQ(_, y), PQ(_, [{
      key: "componentDidMount",
      value: function() {
        var S, P;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (S = this.props.margin.left) !== null && S !== void 0 ? S : 0,
            top: (P = this.props.margin.top) !== null && P !== void 0 ? P : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var S = this.props, P = S.children, x = S.data, A = S.height, C = S.layout, M = zr(P, Fn);
        if (M) {
          var N = M.props.defaultIndex;
          if (!(typeof N != "number" || N < 0 || N > this.state.tooltipTicks.length - 1)) {
            var z = this.state.tooltipTicks[N] && this.state.tooltipTicks[N].value, D = jb(this.state, x, N, z), W = this.state.tooltipTicks[N].coordinate, q = (this.state.offset.top + A) / 2, $ = C === "horizontal", j = $ ? {
              x: W,
              y: q
            } : {
              y: W,
              x: q
            }, F = this.state.formattedGraphicalItems.find(function(Z) {
              var Q = Z.item;
              return Q.type.name === "Scatter";
            });
            F && (j = re(re({}, j), F.props.points[N].tooltipPosition), D = F.props.points[N].tooltipPayload);
            var V = {
              activeTooltipIndex: N,
              isTooltipActive: !0,
              activeLabel: z,
              activePayload: D,
              activeCoordinate: j
            };
            this.setState(V), this.renderCursor(M), this.accessibilityManager.setIndex(N);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(S, P) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== P.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== S.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== S.margin) {
          var x, A;
          this.accessibilityManager.setDetails({
            offset: {
              left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
              top: (A = this.props.margin.top) !== null && A !== void 0 ? A : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(S) {
        gy([zr(S.children, Fn)], [zr(this.props.children, Fn)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var S = zr(this.props.children, Fn);
        if (S && typeof S.props.shared == "boolean") {
          var P = S.props.shared ? "axis" : "item";
          return s.indexOf(P) >= 0 ? P : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(S) {
        if (!this.container)
          return null;
        var P = this.container, x = P.getBoundingClientRect(), A = q9(x), C = {
          chartX: Math.round(S.pageX - A.left),
          chartY: Math.round(S.pageY - A.top)
        }, M = x.width / P.offsetWidth || 1, N = this.inRange(C.chartX, C.chartY, M);
        if (!N)
          return null;
        var z = this.state, D = z.xAxisMap, W = z.yAxisMap, q = this.getTooltipEventType();
        if (q !== "axis" && D && W) {
          var $ = zi(D).scale, j = zi(W).scale, F = $ && $.invert ? $.invert(C.chartX) : null, V = j && j.invert ? j.invert(C.chartY) : null;
          return re(re({}, C), {}, {
            xValue: F,
            yValue: V
          });
        }
        var Z = lC(this.state, this.props.data, this.props.layout, N);
        return Z ? re(re({}, C), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(S, P) {
        var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, A = this.props.layout, C = S / x, M = P / x;
        if (A === "horizontal" || A === "vertical") {
          var N = this.state.offset, z = C >= N.left && C <= N.left + N.width && M >= N.top && M <= N.top + N.height;
          return z ? {
            x: C,
            y: M
          } : null;
        }
        var D = this.state, W = D.angleAxisMap, q = D.radiusAxisMap;
        if (W && q) {
          var $ = zi(W);
          return iT({
            x: C,
            y: M
          }, $);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var S = this.props.children, P = this.getTooltipEventType(), x = zr(S, Fn), A = {};
        x && P === "axis" && (x.props.trigger === "click" ? A = {
          onClick: this.handleClick
        } : A = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var C = ql(this.props, this.handleOuterEvent);
        return re(re({}, C), A);
      }
    }, {
      key: "addListener",
      value: function() {
        Xg.on(Zg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Xg.removeListener(Zg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(S, P, x) {
        for (var A = this.state.formattedGraphicalItems, C = 0, M = A.length; C < M; C++) {
          var N = A[C];
          if (N.item === S || N.props.key === S.key || P === yi(N.item.type) && x === N.childIndex)
            return N;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var S = this.clipPathId, P = this.state.offset, x = P.left, A = P.top, C = P.height, M = P.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: S
        }, /* @__PURE__ */ k.createElement("rect", {
          x,
          y: A,
          height: C,
          width: M
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var S = this.state.xAxisMap;
        return S ? Object.entries(S).reduce(function(P, x) {
          var A = uC(x, 2), C = A[0], M = A[1];
          return re(re({}, P), {}, De({}, C, M.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var S = this.state.yAxisMap;
        return S ? Object.entries(S).reduce(function(P, x) {
          var A = uC(x, 2), C = A[0], M = A[1];
          return re(re({}, P), {}, De({}, C, M.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(S) {
        var P;
        return (P = this.state.xAxisMap) === null || P === void 0 || (P = P[S]) === null || P === void 0 ? void 0 : P.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(S) {
        var P;
        return (P = this.state.yAxisMap) === null || P === void 0 || (P = P[S]) === null || P === void 0 ? void 0 : P.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(S) {
        var P = this.state, x = P.formattedGraphicalItems, A = P.activeItem;
        if (x && x.length)
          for (var C = 0, M = x.length; C < M; C++) {
            var N = x[C], z = N.props, D = N.item, W = D.type.defaultProps !== void 0 ? re(re({}, D.type.defaultProps), D.props) : D.props, q = yi(D.type);
            if (q === "Bar") {
              var $ = (z.data || []).find(function(Z) {
                return sV(S, Z);
              });
              if ($)
                return {
                  graphicalItem: N,
                  payload: $
                };
            } else if (q === "RadialBar") {
              var j = (z.data || []).find(function(Z) {
                return iT(S, Z);
              });
              if (j)
                return {
                  graphicalItem: N,
                  payload: j
                };
            } else if (xd(N, A) || wd(N, A) || Ls(N, A)) {
              var F = RY({
                graphicalItem: N,
                activeTooltipItem: A,
                itemData: W.data
              }), V = W.activeIndex === void 0 ? F : W.activeIndex;
              return {
                graphicalItem: re(re({}, N), {}, {
                  childIndex: V
                }),
                payload: Ls(N, A) ? W.data[F] : N.props.data[F]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var S = this;
        if (!mO(this))
          return null;
        var P = this.props, x = P.children, A = P.className, C = P.width, M = P.height, N = P.style, z = P.compact, D = P.title, W = P.desc, q = sC(P, bQ), $ = Te(q, !1);
        if (z)
          return /* @__PURE__ */ k.createElement(qE, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(by, yo({}, $, {
            width: C,
            height: M,
            title: D,
            desc: W
          }), this.renderClipPath(), yO(x, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var j, F;
          $.tabIndex = (j = this.props.tabIndex) !== null && j !== void 0 ? j : 0, $.role = (F = this.props.role) !== null && F !== void 0 ? F : "application", $.onKeyDown = function(Z) {
            S.accessibilityManager.keyboardEvent(Z);
          }, $.onFocus = function() {
            S.accessibilityManager.focus();
          };
        }
        var V = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(qE, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", yo({
          className: Be("recharts-wrapper", A),
          style: re({
            position: "relative",
            cursor: "default",
            width: C,
            height: M
          }, N)
        }, V, {
          ref: function(Q) {
            S.container = Q;
          }
        }), /* @__PURE__ */ k.createElement(by, yo({}, $, {
          width: C,
          height: M,
          title: D,
          desc: W,
          style: jQ
        }), this.renderClipPath(), yO(x, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(iI);
  De(g, "displayName", r), De(g, "defaultProps", re({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, d)), De(g, "getDerivedStateFromProps", function(y, _) {
    var O = y.dataKey, S = y.data, P = y.children, x = y.width, A = y.height, C = y.layout, M = y.stackOffset, N = y.margin, z = _.dataStartIndex, D = _.dataEndIndex;
    if (_.updateId === void 0) {
      var W = fC(y);
      return re(re(re({}, W), {}, {
        updateId: 0
      }, m(re(re({
        props: y
      }, W), {}, {
        updateId: 0
      }), _)), {}, {
        prevDataKey: O,
        prevData: S,
        prevWidth: x,
        prevHeight: A,
        prevLayout: C,
        prevStackOffset: M,
        prevMargin: N,
        prevChildren: P
      });
    }
    if (O !== _.prevDataKey || S !== _.prevData || x !== _.prevWidth || A !== _.prevHeight || C !== _.prevLayout || M !== _.prevStackOffset || !xo(N, _.prevMargin)) {
      var q = fC(y), $ = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: _.chartX,
        chartY: _.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: _.isTooltipActive
      }, j = re(re({}, lC(_, S, C)), {}, {
        updateId: _.updateId + 1
      }), F = re(re(re({}, q), $), j);
      return re(re(re({}, F), m(re({
        props: y
      }, F), _)), {}, {
        prevDataKey: O,
        prevData: S,
        prevWidth: x,
        prevHeight: A,
        prevLayout: C,
        prevStackOffset: M,
        prevMargin: N,
        prevChildren: P
      });
    }
    if (!gy(P, _.prevChildren)) {
      var V, Z, Q, G, X = zr(P, Lo), te = X && (V = (Z = X.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && V !== void 0 ? V : z, ie = X && (Q = (G = X.props) === null || G === void 0 ? void 0 : G.endIndex) !== null && Q !== void 0 ? Q : D, ve = te !== z || ie !== D, le = !$e(S), be = le && !ve ? _.updateId : _.updateId + 1;
      return re(re({
        updateId: be
      }, m(re(re({
        props: y
      }, _), {}, {
        updateId: be,
        dataStartIndex: te,
        dataEndIndex: ie
      }), _)), {}, {
        prevChildren: P,
        dataStartIndex: te,
        dataEndIndex: ie
      });
    }
    return null;
  }), De(g, "renderActiveDot", function(y, _, O) {
    var S;
    return /* @__PURE__ */ Cn(y) ? S = /* @__PURE__ */ Ut(y, _) : Ne(y) ? S = y(_) : S = /* @__PURE__ */ k.createElement(sc, _), /* @__PURE__ */ k.createElement(Ge, {
      className: "recharts-active-dot",
      key: O
    }, S);
  });
  var b = /* @__PURE__ */ wt(function(_, O) {
    return /* @__PURE__ */ k.createElement(g, yo({}, _, {
      ref: O
    }));
  });
  return b.displayName = g.displayName, b;
}, GQ = Ed({
  chartName: "LineChart",
  GraphicalChild: lc,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ti
  }, {
    axisType: "yAxis",
    AxisComp: Ei
  }],
  formatAxisMap: V0
}), _D = Ed({
  chartName: "BarChart",
  GraphicalChild: ra,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ti
  }, {
    axisType: "yAxis",
    AxisComp: Ei
  }],
  formatAxisMap: V0
}), KQ = Ed({
  chartName: "PieChart",
  GraphicalChild: Pi,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: bd
  }, {
    axisType: "radiusAxis",
    AxisComp: gd
  }],
  formatAxisMap: yH,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), VQ = Ed({
  chartName: "AreaChart",
  GraphicalChild: na,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ti
  }, {
    axisType: "yAxis",
    AxisComp: Ei
  }],
  formatAxisMap: V0
});
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: OD,
  setPrototypeOf: pC,
  isFrozen: YQ,
  getPrototypeOf: XQ,
  getOwnPropertyDescriptor: ZQ
} = Object;
let {
  freeze: br,
  seal: fn,
  create: SD
} = Object, {
  apply: kb,
  construct: Lb
} = typeof Reflect < "u" && Reflect;
br || (br = function(t) {
  return t;
});
fn || (fn = function(t) {
  return t;
});
kb || (kb = function(t, r, n) {
  return t.apply(r, n);
});
Lb || (Lb = function(t, r) {
  return new t(...r);
});
const Il = xr(Array.prototype.forEach), JQ = xr(Array.prototype.lastIndexOf), hC = xr(Array.prototype.pop), Wu = xr(Array.prototype.push), QQ = xr(Array.prototype.splice), $l = xr(String.prototype.toLowerCase), Qg = xr(String.prototype.toString), vC = xr(String.prototype.match), zu = xr(String.prototype.replace), eee = xr(String.prototype.indexOf), tee = xr(String.prototype.trim), An = xr(Object.prototype.hasOwnProperty), vr = xr(RegExp.prototype.test), Uu = ree(TypeError);
function xr(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return kb(e, t, n);
  };
}
function ree(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Lb(e, r);
  };
}
function He(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $l;
  pC && pC(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (YQ(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function nee(e) {
  for (let t = 0; t < e.length; t++)
    An(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = SD(null);
  for (const [r, n] of OD(e))
    An(e, r) && (Array.isArray(n) ? t[r] = nee(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = di(n) : t[r] = n);
  return t;
}
function Hu(e, t) {
  for (; e !== null; ) {
    const n = ZQ(e, t);
    if (n) {
      if (n.get)
        return xr(n.get);
      if (typeof n.value == "function")
        return xr(n.value);
    }
    e = XQ(e);
  }
  function r() {
    return null;
  }
  return r;
}
const mC = br(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ey = br(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ty = br(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), iee = br(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ry = br(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), aee = br(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), gC = br(["#text"]), yC = br(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ny = br(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), bC = br(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ml = br(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), oee = fn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), uee = fn(/<%[\w\W]*|[\w\W]*%>/gm), see = fn(/\$\{[\w\W]*/gm), cee = fn(/^data-[\-\w.\u00B7-\uFFFF]+$/), lee = fn(/^aria-[\-\w]+$/), AD = fn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fee = fn(/^(?:\w+script|data):/i), dee = fn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), PD = fn(/^html$/i), pee = fn(/^[a-z][.\w]*(-[.\w]+)+$/i);
var xC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: lee,
  ATTR_WHITESPACE: dee,
  CUSTOM_ELEMENT: pee,
  DATA_ATTR: cee,
  DOCTYPE_NAME: PD,
  ERB_EXPR: uee,
  IS_ALLOWED_URI: AD,
  IS_SCRIPT_OR_DATA: fee,
  MUSTACHE_EXPR: oee,
  TMPLIT_EXPR: see
});
const Gu = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, hee = function() {
  return typeof window > "u" ? null : window;
}, vee = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, wC = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function TD() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hee();
  const t = (Ee) => TD(Ee);
  if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== Gu.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, i = n.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: o,
    Node: s,
    Element: l,
    NodeFilter: f,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: v,
    trustedTypes: m
  } = e, g = l.prototype, b = Hu(g, "cloneNode"), y = Hu(g, "remove"), _ = Hu(g, "nextSibling"), O = Hu(g, "childNodes"), S = Hu(g, "parentNode");
  if (typeof o == "function") {
    const Ee = r.createElement("template");
    Ee.content && Ee.content.ownerDocument && (r = Ee.content.ownerDocument);
  }
  let P, x = "";
  const {
    implementation: A,
    createNodeIterator: C,
    createDocumentFragment: M,
    getElementsByTagName: N
  } = r, {
    importNode: z
  } = n;
  let D = wC();
  t.isSupported = typeof OD == "function" && typeof S == "function" && A && A.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: W,
    ERB_EXPR: q,
    TMPLIT_EXPR: $,
    DATA_ATTR: j,
    ARIA_ATTR: F,
    IS_SCRIPT_OR_DATA: V,
    ATTR_WHITESPACE: Z,
    CUSTOM_ELEMENT: Q
  } = xC;
  let {
    IS_ALLOWED_URI: G
  } = xC, X = null;
  const te = He({}, [...mC, ...ey, ...ty, ...ry, ...gC]);
  let ie = null;
  const ve = He({}, [...yC, ...ny, ...bC, ...Ml]);
  let le = Object.seal(SD(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), be = null, Oe = null, ge = !0, ae = !0, fe = !1, he = !0, B = !1, xe = !0, ee = !1, Ce = !1, qe = !1, je = !1, gt = !1, Pt = !1, It = !0, at = !1;
  const Mt = "user-content-";
  let nr = !0, wr = !1, Lt = {}, Dr = null;
  const _r = He({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let hn = null;
  const jn = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let Or = null;
  const kn = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kr = "http://www.w3.org/1998/Math/MathML", Nr = "http://www.w3.org/2000/svg", lr = "http://www.w3.org/1999/xhtml";
  let Vr = lr, Qn = !1, ei = null;
  const fu = He({}, [Kr, Nr, lr], Qg);
  let ti = He({}, ["mi", "mo", "mn", "ms", "mtext"]), Ci = He({}, ["annotation-xml"]);
  const ia = He({}, ["title", "style", "font", "a", "script"]);
  let vn = null;
  const Ua = ["application/xhtml+xml", "text/html"], du = "text/html";
  let _t = null, mn = null;
  const Ha = r.createElement("form"), yc = function(H) {
    return H instanceof RegExp || H instanceof Function;
  }, pu = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(mn && mn === H)) {
      if ((!H || typeof H != "object") && (H = {}), H = di(H), vn = // eslint-disable-next-line unicorn/prefer-includes
      Ua.indexOf(H.PARSER_MEDIA_TYPE) === -1 ? du : H.PARSER_MEDIA_TYPE, _t = vn === "application/xhtml+xml" ? Qg : $l, X = An(H, "ALLOWED_TAGS") ? He({}, H.ALLOWED_TAGS, _t) : te, ie = An(H, "ALLOWED_ATTR") ? He({}, H.ALLOWED_ATTR, _t) : ve, ei = An(H, "ALLOWED_NAMESPACES") ? He({}, H.ALLOWED_NAMESPACES, Qg) : fu, Or = An(H, "ADD_URI_SAFE_ATTR") ? He(di(kn), H.ADD_URI_SAFE_ATTR, _t) : kn, hn = An(H, "ADD_DATA_URI_TAGS") ? He(di(jn), H.ADD_DATA_URI_TAGS, _t) : jn, Dr = An(H, "FORBID_CONTENTS") ? He({}, H.FORBID_CONTENTS, _t) : _r, be = An(H, "FORBID_TAGS") ? He({}, H.FORBID_TAGS, _t) : di({}), Oe = An(H, "FORBID_ATTR") ? He({}, H.FORBID_ATTR, _t) : di({}), Lt = An(H, "USE_PROFILES") ? H.USE_PROFILES : !1, ge = H.ALLOW_ARIA_ATTR !== !1, ae = H.ALLOW_DATA_ATTR !== !1, fe = H.ALLOW_UNKNOWN_PROTOCOLS || !1, he = H.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = H.SAFE_FOR_TEMPLATES || !1, xe = H.SAFE_FOR_XML !== !1, ee = H.WHOLE_DOCUMENT || !1, je = H.RETURN_DOM || !1, gt = H.RETURN_DOM_FRAGMENT || !1, Pt = H.RETURN_TRUSTED_TYPE || !1, qe = H.FORCE_BODY || !1, It = H.SANITIZE_DOM !== !1, at = H.SANITIZE_NAMED_PROPS || !1, nr = H.KEEP_CONTENT !== !1, wr = H.IN_PLACE || !1, G = H.ALLOWED_URI_REGEXP || AD, Vr = H.NAMESPACE || lr, ti = H.MATHML_TEXT_INTEGRATION_POINTS || ti, Ci = H.HTML_INTEGRATION_POINTS || Ci, le = H.CUSTOM_ELEMENT_HANDLING || {}, H.CUSTOM_ELEMENT_HANDLING && yc(H.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (le.tagNameCheck = H.CUSTOM_ELEMENT_HANDLING.tagNameCheck), H.CUSTOM_ELEMENT_HANDLING && yc(H.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (le.attributeNameCheck = H.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), H.CUSTOM_ELEMENT_HANDLING && typeof H.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (le.allowCustomizedBuiltInElements = H.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (ae = !1), gt && (je = !0), Lt && (X = He({}, gC), ie = [], Lt.html === !0 && (He(X, mC), He(ie, yC)), Lt.svg === !0 && (He(X, ey), He(ie, ny), He(ie, Ml)), Lt.svgFilters === !0 && (He(X, ty), He(ie, ny), He(ie, Ml)), Lt.mathMl === !0 && (He(X, ry), He(ie, bC), He(ie, Ml))), H.ADD_TAGS && (X === te && (X = di(X)), He(X, H.ADD_TAGS, _t)), H.ADD_ATTR && (ie === ve && (ie = di(ie)), He(ie, H.ADD_ATTR, _t)), H.ADD_URI_SAFE_ATTR && He(Or, H.ADD_URI_SAFE_ATTR, _t), H.FORBID_CONTENTS && (Dr === _r && (Dr = di(Dr)), He(Dr, H.FORBID_CONTENTS, _t)), nr && (X["#text"] = !0), ee && He(X, ["html", "head", "body"]), X.table && (He(X, ["tbody"]), delete be.tbody), H.TRUSTED_TYPES_POLICY) {
        if (typeof H.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Uu('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof H.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Uu('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        P = H.TRUSTED_TYPES_POLICY, x = P.createHTML("");
      } else
        P === void 0 && (P = vee(m, i)), P !== null && typeof x == "string" && (x = P.createHTML(""));
      br && br(H), mn = H;
    }
  }, bc = He({}, [...ey, ...ty, ...iee]), Ga = He({}, [...ry, ...aee]), $d = function(H) {
    let de = S(H);
    (!de || !de.tagName) && (de = {
      namespaceURI: Vr,
      tagName: "template"
    });
    const Ae = $l(H.tagName), nt = $l(de.tagName);
    return ei[H.namespaceURI] ? H.namespaceURI === Nr ? de.namespaceURI === lr ? Ae === "svg" : de.namespaceURI === Kr ? Ae === "svg" && (nt === "annotation-xml" || ti[nt]) : !!bc[Ae] : H.namespaceURI === Kr ? de.namespaceURI === lr ? Ae === "math" : de.namespaceURI === Nr ? Ae === "math" && Ci[nt] : !!Ga[Ae] : H.namespaceURI === lr ? de.namespaceURI === Nr && !Ci[nt] || de.namespaceURI === Kr && !ti[nt] ? !1 : !Ga[Ae] && (ia[Ae] || !bc[Ae]) : !!(vn === "application/xhtml+xml" && ei[H.namespaceURI]) : !1;
  }, Sr = function(H) {
    Wu(t.removed, {
      element: H
    });
    try {
      S(H).removeChild(H);
    } catch {
      y(H);
    }
  }, Ii = function(H, de) {
    try {
      Wu(t.removed, {
        attribute: de.getAttributeNode(H),
        from: de
      });
    } catch {
      Wu(t.removed, {
        attribute: null,
        from: de
      });
    }
    if (de.removeAttribute(H), H === "is")
      if (je || gt)
        try {
          Sr(de);
        } catch {
        }
      else
        try {
          de.setAttribute(H, "");
        } catch {
        }
  }, xc = function(H) {
    let de = null, Ae = null;
    if (qe)
      H = "<remove></remove>" + H;
    else {
      const yt = vC(H, /^[\r\n\t ]+/);
      Ae = yt && yt[0];
    }
    vn === "application/xhtml+xml" && Vr === lr && (H = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + H + "</body></html>");
    const nt = P ? P.createHTML(H) : H;
    if (Vr === lr)
      try {
        de = new v().parseFromString(nt, vn);
      } catch {
      }
    if (!de || !de.documentElement) {
      de = A.createDocument(Vr, "template", null);
      try {
        de.documentElement.innerHTML = Qn ? x : nt;
      } catch {
      }
    }
    const Yt = de.body || de.documentElement;
    return H && Ae && Yt.insertBefore(r.createTextNode(Ae), Yt.childNodes[0] || null), Vr === lr ? N.call(de, ee ? "html" : "body")[0] : ee ? de.documentElement : Yt;
  }, wc = function(H) {
    return C.call(
      H.ownerDocument || H,
      H,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, hu = function(H) {
    return H instanceof d && (typeof H.nodeName != "string" || typeof H.textContent != "string" || typeof H.removeChild != "function" || !(H.attributes instanceof p) || typeof H.removeAttribute != "function" || typeof H.setAttribute != "function" || typeof H.namespaceURI != "string" || typeof H.insertBefore != "function" || typeof H.hasChildNodes != "function");
  }, _c = function(H) {
    return typeof s == "function" && H instanceof s;
  };
  function gn(Ee, H, de) {
    Il(Ee, (Ae) => {
      Ae.call(t, H, de, mn);
    });
  }
  const Oc = function(H) {
    let de = null;
    if (gn(D.beforeSanitizeElements, H, null), hu(H))
      return Sr(H), !0;
    const Ae = _t(H.nodeName);
    if (gn(D.uponSanitizeElement, H, {
      tagName: Ae,
      allowedTags: X
    }), xe && H.hasChildNodes() && !_c(H.firstElementChild) && vr(/<[/\w!]/g, H.innerHTML) && vr(/<[/\w!]/g, H.textContent) || H.nodeType === Gu.progressingInstruction || xe && H.nodeType === Gu.comment && vr(/<[/\w]/g, H.data))
      return Sr(H), !0;
    if (!X[Ae] || be[Ae]) {
      if (!be[Ae] && vu(Ae) && (le.tagNameCheck instanceof RegExp && vr(le.tagNameCheck, Ae) || le.tagNameCheck instanceof Function && le.tagNameCheck(Ae)))
        return !1;
      if (nr && !Dr[Ae]) {
        const nt = S(H) || H.parentNode, Yt = O(H) || H.childNodes;
        if (Yt && nt) {
          const yt = Yt.length;
          for (let ir = yt - 1; ir >= 0; --ir) {
            const yn = b(Yt[ir], !0);
            yn.__removalCount = (H.__removalCount || 0) + 1, nt.insertBefore(yn, _(H));
          }
        }
      }
      return Sr(H), !0;
    }
    return H instanceof l && !$d(H) || (Ae === "noscript" || Ae === "noembed" || Ae === "noframes") && vr(/<\/no(script|embed|frames)/i, H.innerHTML) ? (Sr(H), !0) : (B && H.nodeType === Gu.text && (de = H.textContent, Il([W, q, $], (nt) => {
      de = zu(de, nt, " ");
    }), H.textContent !== de && (Wu(t.removed, {
      element: H.cloneNode()
    }), H.textContent = de)), gn(D.afterSanitizeElements, H, null), !1);
  }, Sc = function(H, de, Ae) {
    if (It && (de === "id" || de === "name") && (Ae in r || Ae in Ha))
      return !1;
    if (!(ae && !Oe[de] && vr(j, de))) {
      if (!(ge && vr(F, de))) {
        if (!ie[de] || Oe[de]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vu(H) && (le.tagNameCheck instanceof RegExp && vr(le.tagNameCheck, H) || le.tagNameCheck instanceof Function && le.tagNameCheck(H)) && (le.attributeNameCheck instanceof RegExp && vr(le.attributeNameCheck, de) || le.attributeNameCheck instanceof Function && le.attributeNameCheck(de)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            de === "is" && le.allowCustomizedBuiltInElements && (le.tagNameCheck instanceof RegExp && vr(le.tagNameCheck, Ae) || le.tagNameCheck instanceof Function && le.tagNameCheck(Ae)))
          ) return !1;
        } else if (!Or[de]) {
          if (!vr(G, zu(Ae, Z, ""))) {
            if (!((de === "src" || de === "xlink:href" || de === "href") && H !== "script" && eee(Ae, "data:") === 0 && hn[H])) {
              if (!(fe && !vr(V, zu(Ae, Z, "")))) {
                if (Ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vu = function(H) {
    return H !== "annotation-xml" && vC(H, Q);
  }, Ac = function(H) {
    gn(D.beforeSanitizeAttributes, H, null);
    const {
      attributes: de
    } = H;
    if (!de || hu(H))
      return;
    const Ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ie,
      forceKeepAttr: void 0
    };
    let nt = de.length;
    for (; nt--; ) {
      const Yt = de[nt], {
        name: yt,
        namespaceURI: ir,
        value: yn
      } = Yt, aa = _t(yt), Ka = yn;
      let Bt = yt === "value" ? Ka : tee(Ka);
      if (Ae.attrName = aa, Ae.attrValue = Bt, Ae.keepAttr = !0, Ae.forceKeepAttr = void 0, gn(D.uponSanitizeAttribute, H, Ae), Bt = Ae.attrValue, at && (aa === "id" || aa === "name") && (Ii(yt, H), Bt = Mt + Bt), xe && vr(/((--!?|])>)|<\/(style|title)/i, Bt)) {
        Ii(yt, H);
        continue;
      }
      if (Ae.forceKeepAttr)
        continue;
      if (!Ae.keepAttr) {
        Ii(yt, H);
        continue;
      }
      if (!he && vr(/\/>/i, Bt)) {
        Ii(yt, H);
        continue;
      }
      B && Il([W, q, $], (Pc) => {
        Bt = zu(Bt, Pc, " ");
      });
      const mu = _t(H.nodeName);
      if (!Sc(mu, aa, Bt)) {
        Ii(yt, H);
        continue;
      }
      if (P && typeof m == "object" && typeof m.getAttributeType == "function" && !ir)
        switch (m.getAttributeType(mu, aa)) {
          case "TrustedHTML": {
            Bt = P.createHTML(Bt);
            break;
          }
          case "TrustedScriptURL": {
            Bt = P.createScriptURL(Bt);
            break;
          }
        }
      if (Bt !== Ka)
        try {
          ir ? H.setAttributeNS(ir, yt, Bt) : H.setAttribute(yt, Bt), hu(H) ? Sr(H) : hC(t.removed);
        } catch {
          Ii(yt, H);
        }
    }
    gn(D.afterSanitizeAttributes, H, null);
  }, jd = function Ee(H) {
    let de = null;
    const Ae = wc(H);
    for (gn(D.beforeSanitizeShadowDOM, H, null); de = Ae.nextNode(); )
      gn(D.uponSanitizeShadowNode, de, null), Oc(de), Ac(de), de.content instanceof a && Ee(de.content);
    gn(D.afterSanitizeShadowDOM, H, null);
  };
  return t.sanitize = function(Ee) {
    let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, de = null, Ae = null, nt = null, Yt = null;
    if (Qn = !Ee, Qn && (Ee = "<!-->"), typeof Ee != "string" && !_c(Ee))
      if (typeof Ee.toString == "function") {
        if (Ee = Ee.toString(), typeof Ee != "string")
          throw Uu("dirty is not a string, aborting");
      } else
        throw Uu("toString is not a function");
    if (!t.isSupported)
      return Ee;
    if (Ce || pu(H), t.removed = [], typeof Ee == "string" && (wr = !1), wr) {
      if (Ee.nodeName) {
        const yn = _t(Ee.nodeName);
        if (!X[yn] || be[yn])
          throw Uu("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (Ee instanceof s)
      de = xc("<!---->"), Ae = de.ownerDocument.importNode(Ee, !0), Ae.nodeType === Gu.element && Ae.nodeName === "BODY" || Ae.nodeName === "HTML" ? de = Ae : de.appendChild(Ae);
    else {
      if (!je && !B && !ee && // eslint-disable-next-line unicorn/prefer-includes
      Ee.indexOf("<") === -1)
        return P && Pt ? P.createHTML(Ee) : Ee;
      if (de = xc(Ee), !de)
        return je ? null : Pt ? x : "";
    }
    de && qe && Sr(de.firstChild);
    const yt = wc(wr ? Ee : de);
    for (; nt = yt.nextNode(); )
      Oc(nt), Ac(nt), nt.content instanceof a && jd(nt.content);
    if (wr)
      return Ee;
    if (je) {
      if (gt)
        for (Yt = M.call(de.ownerDocument); de.firstChild; )
          Yt.appendChild(de.firstChild);
      else
        Yt = de;
      return (ie.shadowroot || ie.shadowrootmode) && (Yt = z.call(n, Yt, !0)), Yt;
    }
    let ir = ee ? de.outerHTML : de.innerHTML;
    return ee && X["!doctype"] && de.ownerDocument && de.ownerDocument.doctype && de.ownerDocument.doctype.name && vr(PD, de.ownerDocument.doctype.name) && (ir = "<!DOCTYPE " + de.ownerDocument.doctype.name + `>
` + ir), B && Il([W, q, $], (yn) => {
      ir = zu(ir, yn, " ");
    }), P && Pt ? P.createHTML(ir) : ir;
  }, t.setConfig = function() {
    let Ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    pu(Ee), Ce = !0;
  }, t.clearConfig = function() {
    mn = null, Ce = !1;
  }, t.isValidAttribute = function(Ee, H, de) {
    mn || pu({});
    const Ae = _t(Ee), nt = _t(H);
    return Sc(Ae, nt, de);
  }, t.addHook = function(Ee, H) {
    typeof H == "function" && Wu(D[Ee], H);
  }, t.removeHook = function(Ee, H) {
    if (H !== void 0) {
      const de = JQ(D[Ee], H);
      return de === -1 ? void 0 : QQ(D[Ee], de, 1)[0];
    }
    return hC(D[Ee]);
  }, t.removeHooks = function(Ee) {
    D[Ee] = [];
  }, t.removeAllHooks = function() {
    D = wC();
  }, t;
}
var mee = TD();
const gee = Xs({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), yee = {
  light: "",
  dark: ".dark"
}, ED = we.createContext(null);
function CD() {
  const e = we.useContext(ED);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const bee = ({ id: e, className: t, children: r, aspect: n, config: i, ...a }, o) => {
  const s = we.useId(), l = `chart-${e || s.replace(/:/g, "")}`, f = we.useRef(null), [p, d] = ct(), v = St(() => new ResizeObserver((m) => d(m[0].contentRect.height)), []);
  return aI(() => {
    const m = o && "current" in o ? o.current : f.current;
    return m && v.observe(m.parentElement), () => {
      v.disconnect();
    };
  }, [v, o, f]), E(ED.Provider, {
    value: {
      config: i
    },
    children: ce("div", {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: o || f,
      className: ye("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? gee({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...a,
      children: [E(xee, {
        id: l,
        config: i
      }), E(D9, {
        height: p,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, uu = we.forwardRef(bee);
uu.displayName = "Chart";
const xee = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([i, a]) => a.theme || a.color);
  if (!r.length)
    return null;
  const n = Object.entries(yee).map(([i, a]) => `
${a} [data-chart=${e}] {
${r.map(([o, s]) => {
    var f;
    const l = ((f = s.theme) == null ? void 0 : f[i]) || s.color;
    return l ? `  --color-${o}: ${l};` : null;
  }).join(`
`)}
}
`);
  return E("style", {
    dangerouslySetInnerHTML: {
      __html: mee.sanitize(n.join(`
`))
    }
  });
}, fc = Fn, su = we.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: l, formatter: f, yAxisFormatter: p, color: d, nameKey: v, labelKey: m }, g) => {
  const { config: b } = CD(), y = we.useMemo(() => {
    var A;
    if (i || !(t != null && t.length))
      return null;
    const [O] = t, S = `${m || O.dataKey || O.name || "value"}`, P = Bb(b, O, S), x = !m && typeof o == "string" ? ((A = b[o]) == null ? void 0 : A.label) || o : P == null ? void 0 : P.label;
    return s ? E("div", {
      className: ye("font-medium", l),
      children: s(x, t)
    }) : x ? E("div", {
      className: ye("font-medium", l),
      children: x
    }) : null;
  }, [o, s, t, i, l, b, m]);
  if (!e || !(t != null && t.length))
    return null;
  const _ = t.length === 1 && n !== "dot";
  return ce("div", {
    ref: g,
    className: ye("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [_ ? null : y, E("div", {
      className: "grid gap-2",
      children: t.map((O, S) => {
        const P = `${v || O.name || O.dataKey || "value"}`, x = Bb(b, O, P), A = d || O.payload.fill || O.color;
        return E("div", {
          className: ye("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, S, O.payload) : ce(Un, {
            children: [x != null && x.icon ? E(x.icon, {}) : !a && E("div", {
              className: ye("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                "h-2.5 w-2.5": n === "dot",
                "w-1": n === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                "my-0.5": _ && n === "dashed"
              }),
              style: {
                "--color-bg": A,
                "--color-border": A
              }
            }), ce("div", {
              className: ye("flex flex-1 justify-between text-sm leading-none", _ ? "items-end" : "items-center"),
              children: [ce("div", {
                className: "grid gap-2",
                children: [_ ? y : null, E("span", {
                  className: "pr-2 text-f1-foreground",
                  children: (x == null ? void 0 : x.label) || O.name
                })]
              }), O.value && E("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground",
                children: p ? p(String(O.value)) : O.value.toLocaleString()
              })]
            })]
          })
        }, O.dataKey);
      })
    })]
  });
});
su.displayName = "ChartTooltip";
const i1 = Ea, Cd = we.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: i, hiddenKey: a, leftShift: o = 0 }, s) => {
  const { config: l } = CD();
  return r != null && r.length ? E("div", {
    ref: s,
    className: ye("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((f) => {
      const p = `${i || f.dataKey || "value"}`, d = Bb(l, f, p, a);
      return ce("div", {
        className: ye("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
        children: [d != null && d.icon && !t ? E(d.icon, {}) : d && E("div", {
          className: "h-2 w-2 shrink-0 rounded-full",
          style: {
            backgroundColor: f.color
          }
        }), E("span", {
          className: "text-f1-foreground",
          children: d == null ? void 0 : d.label
        })]
      }, JSON.stringify(f));
    })
  }) : null;
});
Cd.displayName = "ChartLegend";
function Bb(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const wee = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let _ee = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += wee[r[e] & 63];
  return t;
};
const ID = Nn({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), Qne = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = ct(e), i = Ki(() => {
    n(!0);
  }, []), a = Ki(() => n(!1), []), o = Ki(() => n((s) => !s), []);
  return E(ID.Provider, {
    value: {
      enable: i,
      disable: a,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, Oee = () => {
  const e = Mr(ID);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, Mn = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return Vn(r[e % r.length], t);
}, Vn = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function dc(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const a1 = (e) => ({
  dataKey: "x",
  domain: e == null ? void 0 : e.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e == null ? void 0 : e.ticks,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), o1 = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e == null ? void 0 : e.domain,
  tickMargin: 8,
  ticks: e == null ? void 0 : e.ticks,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Id = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), Md = (e = !1) => ({
  cursor: !0,
  offset: e ? 0 : 20,
  position: {
    y: e ? void 0 : 0,
    x: e ? 120 : void 0
  },
  animationDuration: 100,
  isAnimationActive: !0
});
function cu(e) {
  return wt(e);
}
function u1(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const See = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...i }) => {
  const a = e === 0, o = e === t - 1;
  return E(Xi, {
    ...i,
    textAnchor: a ? "start" : o ? "end" : "middle",
    children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value
  });
}, Aee = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: i, blurArea: a, lineType: o = "monotoneX", aspect: s, marginTop: l = 0 }, f) => {
  const { enabled: p } = Oee(), d = Object.keys(t), v = _ee(12), m = u1(e), g = Math.max(...m.flatMap((S) => d.map((P) => dc(n != null && n.tickFormatter ? n.tickFormatter(`${S[P]}`) : `${S[P]}`)))), b = (n == null ? void 0 : n.width) ?? g + 20, y = !(n != null && n.hide), _ = !(r != null && r.hide), O = !i || !p;
  return E(uu, {
    config: t,
    ref: f,
    aspect: s,
    children: ce(VQ, {
      accessibilityLayer: !0,
      data: m,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: l
      },
      children: [ce("defs", {
        children: [ce("linearGradient", {
          id: `${v}-fadeGradient`,
          gradientUnits: "userSpaceOnUse",
          x1: `${y ? b : 0}`,
          y1: "0",
          x2: "100%",
          y2: "0",
          children: [(a === "l" || a === "lr") && ce(Un, {
            children: [E("stop", {
              offset: "0%",
              stopColor: "black",
              stopOpacity: "0"
            }), E("stop", {
              offset: "1%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), E("stop", {
              offset: "7%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          }), (a === "r" || a === "lr") && ce(Un, {
            children: [E("stop", {
              offset: "93%",
              stopColor: "white",
              stopOpacity: "1"
            }), E("stop", {
              offset: "99%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), E("stop", {
              offset: "100%",
              stopColor: "black",
              stopOpacity: "0"
            })]
          }), !a && ce(Un, {
            children: [E("stop", {
              offset: "0%",
              stopColor: "white",
              stopOpacity: "1"
            }), E("stop", {
              offset: "100%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          })]
        }), E("mask", {
          id: `${v}-transparent-edges`,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse",
          children: E("rect", {
            x: "0",
            y: "0",
            width: "100%",
            height: "100%",
            fill: `url(#${v}-fadeGradient)`
          })
        }), d.map((S, P) => ce("linearGradient", {
          id: `fill${String(S)}-${v}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [E("stop", {
            offset: "5%",
            stopColor: t[S].color ? Vn(t[S].color) : Mn(P),
            stopOpacity: 0.8
          }), E("stop", {
            offset: "95%",
            stopColor: t[S].color ? Vn(t[S].color) : Mn(P),
            stopOpacity: 0.1
          })]
        }, P))]
      }), E(cc, {
        ...Id(),
        mask: `url(#${v}-transparent-edges)`
      }), _ && E(Ti, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: r == null ? void 0 : r.tickFormatter,
        ticks: r == null ? void 0 : r.ticks,
        domain: r == null ? void 0 : r.domain,
        interval: 0,
        tick: See
      }), y && E(Ei, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n == null ? void 0 : n.tickCount,
        tickFormatter: i && p ? () => "**" : n == null ? void 0 : n.tickFormatter,
        ticks: n == null ? void 0 : n.ticks,
        domain: n == null ? void 0 : n.domain,
        width: b
      }), O && E(fc, {
        ...Md(),
        content: E(su, {
          indicator: "dot",
          yAxisFormatter: n == null ? void 0 : n.tickFormatter
        })
      }), d.map((S, P) => E(na, {
        isAnimationActive: !1,
        dataKey: S,
        type: o,
        mask: `url(#${v}-transparent-edges)`,
        fill: `url(#fill${S}-${v})`,
        fillOpacity: t[S].dashed ? 0 : 0.4,
        stroke: t[S].color ? Vn(t[S].color) : Mn(P),
        strokeWidth: 1.5,
        strokeDasharray: t[S].dashed ? "4 4" : void 0
      }, S)), Object.keys(t).length > 1 && E(i1, {
        className: "flex justify-start",
        content: E(Cd, {})
      })]
    })
  });
}, eie = cu(Aee), Pee = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: i = !1, type: a = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: l, legend: f, showValueUnderLabel: p = !1, highlightLastBar: d = !1, onClick: v }, m) => {
  const g = Object.keys(e), b = u1(t).map((_, O, S) => {
    var P;
    return d && g.length === 1 && !((P = e[g[0]]) != null && P.color) ? {
      ..._,
      fill: O === S.length - 1 ? Mn(O) : Mn(O, 0.5)
    } : _;
  }), y = Math.max(...b.flatMap((_) => g.map((O) => dc(n != null && n.tickFormatter ? n.tickFormatter(`${_[O]}`) : `${_[O]}`))));
  return E(uu, {
    config: e,
    ref: m,
    aspect: l,
    children: ce(_D, {
      accessibilityLayer: !0,
      data: b,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: p ? 24 : 12
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      onClick: (_) => {
        if (!v || !_.activeLabel || !_.activePayload)
          return;
        const O = {
          label: _.activeLabel,
          values: {}
        };
        for (const S of _.activePayload)
          O.values[S.name] = S.value;
        v(O);
      },
      children: [!o && E(fc, {
        ...Md(),
        content: E(su, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && E(cc, {
        ...Id()
      }), E(Ei, {
        ...o1(n),
        tick: !0,
        width: n.width ?? y + 20,
        hide: n.hide
      }), E(Ti, {
        ...a1(r),
        hide: r == null ? void 0 : r.hide,
        tick: p ? (_) => {
          var M, N;
          const { x: O, y: S, payload: P } = _, x = ((M = t.find((z) => z.label === P.value)) == null ? void 0 : M.values) || "", A = Object.keys(x).length === 1 ? (N = Object.values(x)) == null ? void 0 : N[0] : void 0, C = A !== void 0 && n.tickFormatter ? n.tickFormatter(`${A}`) : A.toLocaleString();
          return ce("g", {
            transform: `translate(${O},${S})`,
            children: [E("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: P.value
            }), !!A && E("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: C
            })]
          });
        } : void 0
      }), g.map((_, O) => E(ra, {
        isAnimationActive: !1,
        dataKey: _,
        stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
        fill: d ? (S) => S.fill : e[_].color ? Vn(e[_].color) : Mn(O),
        radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: i && E(cn, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${_}`)
      }, `bar-${_}`)), f && E(i1, {
        content: E(Cd, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, tie = cu(Pee), Tee = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const i = e.reduce((a, o) => a + o.value, 0);
  return ce(mI, {
    children: [E("div", {
      className: "w-full",
      ref: n,
      children: E("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((a, o) => {
          const s = a.value / i * 100, l = a.color ? Vn(a.color) : Mn(o), f = (p) => {
            const d = p / i * 100;
            return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
          };
          return s === 0 ? null : ce(gI, {
            children: [E(yI, {
              className: "h-full cursor-default overflow-hidden rounded-2xs",
              style: {
                width: `${s}%`
              },
              title: a.name,
              asChild: !0,
              children: E("div", {
                className: "h-full w-full",
                style: {
                  backgroundColor: l
                },
                role: "img",
                title: a.name,
                tabIndex: 0
              })
            }), !r && ce(bI, {
              className: "flex items-center gap-1 text-sm",
              children: [E("div", {
                className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
                style: {
                  backgroundColor: l
                }
              }), E("span", {
                className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary",
                children: a.name
              }), ce("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground",
                children: [a.value, " (", f(a.value), "%)"]
              })]
            })]
          }, a.name);
        })
      })
    }), t && E("div", {
      className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
      role: "list",
      children: e.map((a, o) => {
        const s = a.color ? Vn(a.color) : Mn(o);
        return ce("div", {
          className: "flex items-center gap-1.5",
          role: "listitem",
          children: [E("div", {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: {
              backgroundColor: s
            }
          }), E("span", {
            className: "text-f1-foreground",
            children: a.name
          })]
        }, a.name);
      })
    })]
  });
}, rie = cu(Tee), Eee = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: i = "natural", aspect: a, hideTooltip: o = !1, hideGrid: s = !1 }, l) => {
  const f = Object.keys(t), p = u1(e), d = Math.max(...p.flatMap((v) => f.map((m) => dc(n != null && n.tickFormatter ? n.tickFormatter(`${v[m]}`) : `${v[m]}`))));
  return E(uu, {
    config: t,
    ref: l,
    aspect: a,
    children: ce(GQ, {
      accessibilityLayer: !0,
      data: p,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && E(cc, {
        ...Id()
      }), !(r != null && r.hide) && E(Ti, {
        ...a1(r)
      }), !(n != null && n.hide) && E(Ei, {
        ...o1(n),
        width: n.width ?? d + 20
      }), !o && E(fc, {
        ...Md(),
        content: E(su, {
          yAxisFormatter: n == null ? void 0 : n.tickFormatter
        })
      }), f.map((v, m) => E(lc, {
        dataKey: v,
        isAnimationActive: !1,
        type: i,
        stroke: t[v].color ? Vn(t[v].color) : Mn(m),
        strokeWidth: 1.5,
        strokeDasharray: t[v].dashed ? "4 4" : void 0,
        dot: !1
      }, v))]
    })
  });
}, nie = cu(Eee), Cee = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const o = e.map((f, p) => {
    var d;
    return {
      ...f,
      fill: (d = t[f.label]) != null && d.color ? Vn(t[f.label].color) : Mn(p)
    };
  }), l = e.map((f) => f.value).reduce((f, p) => f + p);
  return l === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), E(uu, {
    config: t,
    ref: a,
    aspect: n,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: ce(KQ, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [l !== 0 && E(fc, {
        isAnimationActive: !1,
        content: E(su, {
          yAxisFormatter: i
        })
      }), ce(Pi, {
        isAnimationActive: !1,
        nameKey: "label",
        legendType: "circle",
        dataKey: "value",
        data: o,
        innerRadius: 120,
        outerRadius: 135,
        paddingAngle: 2.5,
        children: [o.map((f, p) => {
          const d = i ? i(String(f.value)) : f.value;
          return E(ad, {
            fill: f.fill,
            "aria-label": `${f.label}: ${d} (${(f.value / l * 100).toFixed(0)}%)`
          }, `cell-${p}`);
        }), E(Gt, {
          content: ({ viewBox: f }) => {
            if (f && "cx" in f && "cy" in f)
              return ce("text", {
                x: f.cx,
                y: f.cy,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: [E("tspan", {
                  x: f.cx,
                  y: (f.cy || 0) + 8,
                  className: "fill-f1-foreground text-4xl font-semibold",
                  children: r != null && r.number ? i ? i(String(r.number)) : r.number : null
                }), E("tspan", {
                  x: f.cx,
                  y: (f.cy || 0) - 16,
                  className: "fill-f1-foreground-secondary",
                  children: r == null ? void 0 : r.label
                })]
              });
          }
        })]
      }), E(i1, {
        content: E(Cd, {
          nameKey: "label",
          hiddenKey: "-"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, iie = cu(Cee);
var Ju = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Iee = Ju.exports, _C;
function Mee() {
  return _C || (_C = 1, function(e, t) {
    (function() {
      var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, p = "__lodash_placeholder__", d = 1, v = 2, m = 4, g = 1, b = 2, y = 1, _ = 2, O = 4, S = 8, P = 16, x = 32, A = 64, C = 128, M = 256, N = 512, z = 30, D = "...", W = 800, q = 16, $ = 1, j = 2, F = 3, V = 1 / 0, Z = 9007199254740991, Q = 17976931348623157e292, G = NaN, X = 4294967295, te = X - 1, ie = X >>> 1, ve = [
        ["ary", C],
        ["bind", y],
        ["bindKey", _],
        ["curry", S],
        ["curryRight", P],
        ["flip", N],
        ["partial", x],
        ["partialRight", A],
        ["rearg", M]
      ], le = "[object Arguments]", be = "[object Array]", Oe = "[object AsyncFunction]", ge = "[object Boolean]", ae = "[object Date]", fe = "[object DOMException]", he = "[object Error]", B = "[object Function]", xe = "[object GeneratorFunction]", ee = "[object Map]", Ce = "[object Number]", qe = "[object Null]", je = "[object Object]", gt = "[object Promise]", Pt = "[object Proxy]", It = "[object RegExp]", at = "[object Set]", Mt = "[object String]", nr = "[object Symbol]", wr = "[object Undefined]", Lt = "[object WeakMap]", Dr = "[object WeakSet]", _r = "[object ArrayBuffer]", hn = "[object DataView]", jn = "[object Float32Array]", Or = "[object Float64Array]", kn = "[object Int8Array]", Kr = "[object Int16Array]", Nr = "[object Int32Array]", lr = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Qn = "[object Uint16Array]", ei = "[object Uint32Array]", fu = /\b__p \+= '';/g, ti = /\b(__p \+=) '' \+/g, Ci = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ia = /&(?:amp|lt|gt|quot|#39);/g, vn = /[&<>"']/g, Ua = RegExp(ia.source), du = RegExp(vn.source), _t = /<%-([\s\S]+?)%>/g, mn = /<%([\s\S]+?)%>/g, Ha = /<%=([\s\S]+?)%>/g, yc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pu = /^\w*$/, bc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ga = /[\\^$.*+?()[\]{}|]/g, $d = RegExp(Ga.source), Sr = /^\s+/, Ii = /\s/, xc = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, wc = /\{\n\/\* \[wrapped with (.+)\] \*/, hu = /,? & /, _c = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, gn = /[()=,{}\[\]\/\s]/, Oc = /\\(\\)?/g, Sc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vu = /\w*$/, Ac = /^[-+]0x[0-9a-f]+$/i, jd = /^0b[01]+$/i, Ee = /^\[object .+?Constructor\]$/, H = /^0o[0-7]+$/i, de = /^(?:0|[1-9]\d*)$/, Ae = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, nt = /($^)/, Yt = /['\n\r\u2028\u2029\\]/g, yt = "\\ud800-\\udfff", ir = "\\u0300-\\u036f", yn = "\\ufe20-\\ufe2f", aa = "\\u20d0-\\u20ff", Ka = ir + yn + aa, Bt = "\\u2700-\\u27bf", mu = "a-z\\xdf-\\xf6\\xf8-\\xff", Pc = "\\xac\\xb1\\xd7\\xf7", mN = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gN = "\\u2000-\\u206f", yN = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", T1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", E1 = "\\ufe0e\\ufe0f", C1 = Pc + mN + gN + yN, kd = "['’]", bN = "[" + yt + "]", I1 = "[" + C1 + "]", Tc = "[" + Ka + "]", M1 = "\\d+", xN = "[" + Bt + "]", R1 = "[" + mu + "]", D1 = "[^" + yt + C1 + M1 + Bt + mu + T1 + "]", Ld = "\\ud83c[\\udffb-\\udfff]", wN = "(?:" + Tc + "|" + Ld + ")", N1 = "[^" + yt + "]", Bd = "(?:\\ud83c[\\udde6-\\uddff]){2}", qd = "[\\ud800-\\udbff][\\udc00-\\udfff]", Va = "[" + T1 + "]", $1 = "\\u200d", j1 = "(?:" + R1 + "|" + D1 + ")", _N = "(?:" + Va + "|" + D1 + ")", k1 = "(?:" + kd + "(?:d|ll|m|re|s|t|ve))?", L1 = "(?:" + kd + "(?:D|LL|M|RE|S|T|VE))?", B1 = wN + "?", q1 = "[" + E1 + "]?", ON = "(?:" + $1 + "(?:" + [N1, Bd, qd].join("|") + ")" + q1 + B1 + ")*", SN = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", AN = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", F1 = q1 + B1 + ON, PN = "(?:" + [xN, Bd, qd].join("|") + ")" + F1, TN = "(?:" + [N1 + Tc + "?", Tc, Bd, qd, bN].join("|") + ")", EN = RegExp(kd, "g"), CN = RegExp(Tc, "g"), Fd = RegExp(Ld + "(?=" + Ld + ")|" + TN + F1, "g"), IN = RegExp([
        Va + "?" + R1 + "+" + k1 + "(?=" + [I1, Va, "$"].join("|") + ")",
        _N + "+" + L1 + "(?=" + [I1, Va + j1, "$"].join("|") + ")",
        Va + "?" + j1 + "+" + k1,
        Va + "+" + L1,
        AN,
        SN,
        M1,
        PN
      ].join("|"), "g"), MN = RegExp("[" + $1 + yt + Ka + E1 + "]"), RN = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, DN = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], NN = -1, vt = {};
      vt[jn] = vt[Or] = vt[kn] = vt[Kr] = vt[Nr] = vt[lr] = vt[Vr] = vt[Qn] = vt[ei] = !0, vt[le] = vt[be] = vt[_r] = vt[ge] = vt[hn] = vt[ae] = vt[he] = vt[B] = vt[ee] = vt[Ce] = vt[je] = vt[It] = vt[at] = vt[Mt] = vt[Lt] = !1;
      var ft = {};
      ft[le] = ft[be] = ft[_r] = ft[hn] = ft[ge] = ft[ae] = ft[jn] = ft[Or] = ft[kn] = ft[Kr] = ft[Nr] = ft[ee] = ft[Ce] = ft[je] = ft[It] = ft[at] = ft[Mt] = ft[nr] = ft[lr] = ft[Vr] = ft[Qn] = ft[ei] = !0, ft[he] = ft[B] = ft[Lt] = !1;
      var $N = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, jN = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, kN = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, LN = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, BN = parseFloat, qN = parseInt, W1 = typeof Ui == "object" && Ui && Ui.Object === Object && Ui, FN = typeof self == "object" && self && self.Object === Object && self, Qt = W1 || FN || Function("return this")(), Wd = t && !t.nodeType && t, oa = Wd && !0 && e && !e.nodeType && e, z1 = oa && oa.exports === Wd, zd = z1 && W1.process, Yr = function() {
        try {
          var K = oa && oa.require && oa.require("util").types;
          return K || zd && zd.binding && zd.binding("util");
        } catch {
        }
      }(), U1 = Yr && Yr.isArrayBuffer, H1 = Yr && Yr.isDate, G1 = Yr && Yr.isMap, K1 = Yr && Yr.isRegExp, V1 = Yr && Yr.isSet, Y1 = Yr && Yr.isTypedArray;
      function $r(K, ne, J) {
        switch (J.length) {
          case 0:
            return K.call(ne);
          case 1:
            return K.call(ne, J[0]);
          case 2:
            return K.call(ne, J[0], J[1]);
          case 3:
            return K.call(ne, J[0], J[1], J[2]);
        }
        return K.apply(ne, J);
      }
      function WN(K, ne, J, _e) {
        for (var ke = -1, Xe = K == null ? 0 : K.length; ++ke < Xe; ) {
          var qt = K[ke];
          ne(_e, qt, J(qt), K);
        }
        return _e;
      }
      function Xr(K, ne) {
        for (var J = -1, _e = K == null ? 0 : K.length; ++J < _e && ne(K[J], J, K) !== !1; )
          ;
        return K;
      }
      function zN(K, ne) {
        for (var J = K == null ? 0 : K.length; J-- && ne(K[J], J, K) !== !1; )
          ;
        return K;
      }
      function X1(K, ne) {
        for (var J = -1, _e = K == null ? 0 : K.length; ++J < _e; )
          if (!ne(K[J], J, K))
            return !1;
        return !0;
      }
      function Mi(K, ne) {
        for (var J = -1, _e = K == null ? 0 : K.length, ke = 0, Xe = []; ++J < _e; ) {
          var qt = K[J];
          ne(qt, J, K) && (Xe[ke++] = qt);
        }
        return Xe;
      }
      function Ec(K, ne) {
        var J = K == null ? 0 : K.length;
        return !!J && Ya(K, ne, 0) > -1;
      }
      function Ud(K, ne, J) {
        for (var _e = -1, ke = K == null ? 0 : K.length; ++_e < ke; )
          if (J(ne, K[_e]))
            return !0;
        return !1;
      }
      function bt(K, ne) {
        for (var J = -1, _e = K == null ? 0 : K.length, ke = Array(_e); ++J < _e; )
          ke[J] = ne(K[J], J, K);
        return ke;
      }
      function Ri(K, ne) {
        for (var J = -1, _e = ne.length, ke = K.length; ++J < _e; )
          K[ke + J] = ne[J];
        return K;
      }
      function Hd(K, ne, J, _e) {
        var ke = -1, Xe = K == null ? 0 : K.length;
        for (_e && Xe && (J = K[++ke]); ++ke < Xe; )
          J = ne(J, K[ke], ke, K);
        return J;
      }
      function UN(K, ne, J, _e) {
        var ke = K == null ? 0 : K.length;
        for (_e && ke && (J = K[--ke]); ke--; )
          J = ne(J, K[ke], ke, K);
        return J;
      }
      function Gd(K, ne) {
        for (var J = -1, _e = K == null ? 0 : K.length; ++J < _e; )
          if (ne(K[J], J, K))
            return !0;
        return !1;
      }
      var HN = Kd("length");
      function GN(K) {
        return K.split("");
      }
      function KN(K) {
        return K.match(_c) || [];
      }
      function Z1(K, ne, J) {
        var _e;
        return J(K, function(ke, Xe, qt) {
          if (ne(ke, Xe, qt))
            return _e = Xe, !1;
        }), _e;
      }
      function Cc(K, ne, J, _e) {
        for (var ke = K.length, Xe = J + (_e ? 1 : -1); _e ? Xe-- : ++Xe < ke; )
          if (ne(K[Xe], Xe, K))
            return Xe;
        return -1;
      }
      function Ya(K, ne, J) {
        return ne === ne ? a$(K, ne, J) : Cc(K, J1, J);
      }
      function VN(K, ne, J, _e) {
        for (var ke = J - 1, Xe = K.length; ++ke < Xe; )
          if (_e(K[ke], ne))
            return ke;
        return -1;
      }
      function J1(K) {
        return K !== K;
      }
      function Q1(K, ne) {
        var J = K == null ? 0 : K.length;
        return J ? Yd(K, ne) / J : G;
      }
      function Kd(K) {
        return function(ne) {
          return ne == null ? r : ne[K];
        };
      }
      function Vd(K) {
        return function(ne) {
          return K == null ? r : K[ne];
        };
      }
      function ex(K, ne, J, _e, ke) {
        return ke(K, function(Xe, qt, st) {
          J = _e ? (_e = !1, Xe) : ne(J, Xe, qt, st);
        }), J;
      }
      function YN(K, ne) {
        var J = K.length;
        for (K.sort(ne); J--; )
          K[J] = K[J].value;
        return K;
      }
      function Yd(K, ne) {
        for (var J, _e = -1, ke = K.length; ++_e < ke; ) {
          var Xe = ne(K[_e]);
          Xe !== r && (J = J === r ? Xe : J + Xe);
        }
        return J;
      }
      function Xd(K, ne) {
        for (var J = -1, _e = Array(K); ++J < K; )
          _e[J] = ne(J);
        return _e;
      }
      function XN(K, ne) {
        return bt(ne, function(J) {
          return [J, K[J]];
        });
      }
      function tx(K) {
        return K && K.slice(0, ax(K) + 1).replace(Sr, "");
      }
      function jr(K) {
        return function(ne) {
          return K(ne);
        };
      }
      function Zd(K, ne) {
        return bt(ne, function(J) {
          return K[J];
        });
      }
      function gu(K, ne) {
        return K.has(ne);
      }
      function rx(K, ne) {
        for (var J = -1, _e = K.length; ++J < _e && Ya(ne, K[J], 0) > -1; )
          ;
        return J;
      }
      function nx(K, ne) {
        for (var J = K.length; J-- && Ya(ne, K[J], 0) > -1; )
          ;
        return J;
      }
      function ZN(K, ne) {
        for (var J = K.length, _e = 0; J--; )
          K[J] === ne && ++_e;
        return _e;
      }
      var JN = Vd($N), QN = Vd(jN);
      function e$(K) {
        return "\\" + LN[K];
      }
      function t$(K, ne) {
        return K == null ? r : K[ne];
      }
      function Xa(K) {
        return MN.test(K);
      }
      function r$(K) {
        return RN.test(K);
      }
      function n$(K) {
        for (var ne, J = []; !(ne = K.next()).done; )
          J.push(ne.value);
        return J;
      }
      function Jd(K) {
        var ne = -1, J = Array(K.size);
        return K.forEach(function(_e, ke) {
          J[++ne] = [ke, _e];
        }), J;
      }
      function ix(K, ne) {
        return function(J) {
          return K(ne(J));
        };
      }
      function Di(K, ne) {
        for (var J = -1, _e = K.length, ke = 0, Xe = []; ++J < _e; ) {
          var qt = K[J];
          (qt === ne || qt === p) && (K[J] = p, Xe[ke++] = J);
        }
        return Xe;
      }
      function Ic(K) {
        var ne = -1, J = Array(K.size);
        return K.forEach(function(_e) {
          J[++ne] = _e;
        }), J;
      }
      function i$(K) {
        var ne = -1, J = Array(K.size);
        return K.forEach(function(_e) {
          J[++ne] = [_e, _e];
        }), J;
      }
      function a$(K, ne, J) {
        for (var _e = J - 1, ke = K.length; ++_e < ke; )
          if (K[_e] === ne)
            return _e;
        return -1;
      }
      function o$(K, ne, J) {
        for (var _e = J + 1; _e--; )
          if (K[_e] === ne)
            return _e;
        return _e;
      }
      function Za(K) {
        return Xa(K) ? s$(K) : HN(K);
      }
      function bn(K) {
        return Xa(K) ? c$(K) : GN(K);
      }
      function ax(K) {
        for (var ne = K.length; ne-- && Ii.test(K.charAt(ne)); )
          ;
        return ne;
      }
      var u$ = Vd(kN);
      function s$(K) {
        for (var ne = Fd.lastIndex = 0; Fd.test(K); )
          ++ne;
        return ne;
      }
      function c$(K) {
        return K.match(Fd) || [];
      }
      function l$(K) {
        return K.match(IN) || [];
      }
      var f$ = function K(ne) {
        ne = ne == null ? Qt : Ja.defaults(Qt.Object(), ne, Ja.pick(Qt, DN));
        var J = ne.Array, _e = ne.Date, ke = ne.Error, Xe = ne.Function, qt = ne.Math, st = ne.Object, Qd = ne.RegExp, d$ = ne.String, Zr = ne.TypeError, Mc = J.prototype, p$ = Xe.prototype, Qa = st.prototype, Rc = ne["__core-js_shared__"], Dc = p$.toString, it = Qa.hasOwnProperty, h$ = 0, ox = function() {
          var u = /[^.]+$/.exec(Rc && Rc.keys && Rc.keys.IE_PROTO || "");
          return u ? "Symbol(src)_1." + u : "";
        }(), Nc = Qa.toString, v$ = Dc.call(st), m$ = Qt._, g$ = Qd(
          "^" + Dc.call(it).replace(Ga, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), $c = z1 ? ne.Buffer : r, Ni = ne.Symbol, jc = ne.Uint8Array, ux = $c ? $c.allocUnsafe : r, kc = ix(st.getPrototypeOf, st), sx = st.create, cx = Qa.propertyIsEnumerable, Lc = Mc.splice, lx = Ni ? Ni.isConcatSpreadable : r, yu = Ni ? Ni.iterator : r, ua = Ni ? Ni.toStringTag : r, Bc = function() {
          try {
            var u = da(st, "defineProperty");
            return u({}, "", {}), u;
          } catch {
          }
        }(), y$ = ne.clearTimeout !== Qt.clearTimeout && ne.clearTimeout, b$ = _e && _e.now !== Qt.Date.now && _e.now, x$ = ne.setTimeout !== Qt.setTimeout && ne.setTimeout, qc = qt.ceil, Fc = qt.floor, ep = st.getOwnPropertySymbols, w$ = $c ? $c.isBuffer : r, fx = ne.isFinite, _$ = Mc.join, O$ = ix(st.keys, st), Ft = qt.max, ar = qt.min, S$ = _e.now, A$ = ne.parseInt, dx = qt.random, P$ = Mc.reverse, tp = da(ne, "DataView"), bu = da(ne, "Map"), rp = da(ne, "Promise"), eo = da(ne, "Set"), xu = da(ne, "WeakMap"), wu = da(st, "create"), Wc = xu && new xu(), to = {}, T$ = pa(tp), E$ = pa(bu), C$ = pa(rp), I$ = pa(eo), M$ = pa(xu), zc = Ni ? Ni.prototype : r, _u = zc ? zc.valueOf : r, px = zc ? zc.toString : r;
        function I(u) {
          if (Tt(u) && !Le(u) && !(u instanceof Ke)) {
            if (u instanceof Jr)
              return u;
            if (it.call(u, "__wrapped__"))
              return hw(u);
          }
          return new Jr(u);
        }
        var ro = /* @__PURE__ */ function() {
          function u() {
          }
          return function(c) {
            if (!Ot(c))
              return {};
            if (sx)
              return sx(c);
            u.prototype = c;
            var h = new u();
            return u.prototype = r, h;
          };
        }();
        function Uc() {
        }
        function Jr(u, c) {
          this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = r;
        }
        I.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: _t,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: mn,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Ha,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: I
          }
        }, I.prototype = Uc.prototype, I.prototype.constructor = I, Jr.prototype = ro(Uc.prototype), Jr.prototype.constructor = Jr;
        function Ke(u) {
          this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
        }
        function R$() {
          var u = new Ke(this.__wrapped__);
          return u.__actions__ = Ar(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Ar(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Ar(this.__views__), u;
        }
        function D$() {
          if (this.__filtered__) {
            var u = new Ke(this);
            u.__dir__ = -1, u.__filtered__ = !0;
          } else
            u = this.clone(), u.__dir__ *= -1;
          return u;
        }
        function N$() {
          var u = this.__wrapped__.value(), c = this.__dir__, h = Le(u), w = c < 0, T = h ? u.length : 0, R = Gj(0, T, this.__views__), L = R.start, U = R.end, Y = U - L, oe = w ? U : L - 1, ue = this.__iteratees__, se = ue.length, me = 0, Pe = ar(Y, this.__takeCount__);
          if (!h || !w && T == Y && Pe == Y)
            return kx(u, this.__actions__);
          var Me = [];
          e:
            for (; Y-- && me < Pe; ) {
              oe += c;
              for (var We = -1, Re = u[oe]; ++We < se; ) {
                var Ue = ue[We], Ve = Ue.iteratee, Br = Ue.type, pr = Ve(Re);
                if (Br == j)
                  Re = pr;
                else if (!pr) {
                  if (Br == $)
                    continue e;
                  break e;
                }
              }
              Me[me++] = Re;
            }
          return Me;
        }
        Ke.prototype = ro(Uc.prototype), Ke.prototype.constructor = Ke;
        function sa(u) {
          var c = -1, h = u == null ? 0 : u.length;
          for (this.clear(); ++c < h; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function $$() {
          this.__data__ = wu ? wu(null) : {}, this.size = 0;
        }
        function j$(u) {
          var c = this.has(u) && delete this.__data__[u];
          return this.size -= c ? 1 : 0, c;
        }
        function k$(u) {
          var c = this.__data__;
          if (wu) {
            var h = c[u];
            return h === l ? r : h;
          }
          return it.call(c, u) ? c[u] : r;
        }
        function L$(u) {
          var c = this.__data__;
          return wu ? c[u] !== r : it.call(c, u);
        }
        function B$(u, c) {
          var h = this.__data__;
          return this.size += this.has(u) ? 0 : 1, h[u] = wu && c === r ? l : c, this;
        }
        sa.prototype.clear = $$, sa.prototype.delete = j$, sa.prototype.get = k$, sa.prototype.has = L$, sa.prototype.set = B$;
        function ri(u) {
          var c = -1, h = u == null ? 0 : u.length;
          for (this.clear(); ++c < h; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function q$() {
          this.__data__ = [], this.size = 0;
        }
        function F$(u) {
          var c = this.__data__, h = Hc(c, u);
          if (h < 0)
            return !1;
          var w = c.length - 1;
          return h == w ? c.pop() : Lc.call(c, h, 1), --this.size, !0;
        }
        function W$(u) {
          var c = this.__data__, h = Hc(c, u);
          return h < 0 ? r : c[h][1];
        }
        function z$(u) {
          return Hc(this.__data__, u) > -1;
        }
        function U$(u, c) {
          var h = this.__data__, w = Hc(h, u);
          return w < 0 ? (++this.size, h.push([u, c])) : h[w][1] = c, this;
        }
        ri.prototype.clear = q$, ri.prototype.delete = F$, ri.prototype.get = W$, ri.prototype.has = z$, ri.prototype.set = U$;
        function ni(u) {
          var c = -1, h = u == null ? 0 : u.length;
          for (this.clear(); ++c < h; ) {
            var w = u[c];
            this.set(w[0], w[1]);
          }
        }
        function H$() {
          this.size = 0, this.__data__ = {
            hash: new sa(),
            map: new (bu || ri)(),
            string: new sa()
          };
        }
        function G$(u) {
          var c = nl(this, u).delete(u);
          return this.size -= c ? 1 : 0, c;
        }
        function K$(u) {
          return nl(this, u).get(u);
        }
        function V$(u) {
          return nl(this, u).has(u);
        }
        function Y$(u, c) {
          var h = nl(this, u), w = h.size;
          return h.set(u, c), this.size += h.size == w ? 0 : 1, this;
        }
        ni.prototype.clear = H$, ni.prototype.delete = G$, ni.prototype.get = K$, ni.prototype.has = V$, ni.prototype.set = Y$;
        function ca(u) {
          var c = -1, h = u == null ? 0 : u.length;
          for (this.__data__ = new ni(); ++c < h; )
            this.add(u[c]);
        }
        function X$(u) {
          return this.__data__.set(u, l), this;
        }
        function Z$(u) {
          return this.__data__.has(u);
        }
        ca.prototype.add = ca.prototype.push = X$, ca.prototype.has = Z$;
        function xn(u) {
          var c = this.__data__ = new ri(u);
          this.size = c.size;
        }
        function J$() {
          this.__data__ = new ri(), this.size = 0;
        }
        function Q$(u) {
          var c = this.__data__, h = c.delete(u);
          return this.size = c.size, h;
        }
        function ej(u) {
          return this.__data__.get(u);
        }
        function tj(u) {
          return this.__data__.has(u);
        }
        function rj(u, c) {
          var h = this.__data__;
          if (h instanceof ri) {
            var w = h.__data__;
            if (!bu || w.length < i - 1)
              return w.push([u, c]), this.size = ++h.size, this;
            h = this.__data__ = new ni(w);
          }
          return h.set(u, c), this.size = h.size, this;
        }
        xn.prototype.clear = J$, xn.prototype.delete = Q$, xn.prototype.get = ej, xn.prototype.has = tj, xn.prototype.set = rj;
        function hx(u, c) {
          var h = Le(u), w = !h && ha(u), T = !h && !w && Bi(u), R = !h && !w && !T && oo(u), L = h || w || T || R, U = L ? Xd(u.length, d$) : [], Y = U.length;
          for (var oe in u)
            (c || it.call(u, oe)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
            (oe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            T && (oe == "offset" || oe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            R && (oe == "buffer" || oe == "byteLength" || oe == "byteOffset") || // Skip index properties.
            ui(oe, Y))) && U.push(oe);
          return U;
        }
        function vx(u) {
          var c = u.length;
          return c ? u[pp(0, c - 1)] : r;
        }
        function nj(u, c) {
          return il(Ar(u), la(c, 0, u.length));
        }
        function ij(u) {
          return il(Ar(u));
        }
        function np(u, c, h) {
          (h !== r && !wn(u[c], h) || h === r && !(c in u)) && ii(u, c, h);
        }
        function Ou(u, c, h) {
          var w = u[c];
          (!(it.call(u, c) && wn(w, h)) || h === r && !(c in u)) && ii(u, c, h);
        }
        function Hc(u, c) {
          for (var h = u.length; h--; )
            if (wn(u[h][0], c))
              return h;
          return -1;
        }
        function aj(u, c, h, w) {
          return $i(u, function(T, R, L) {
            c(w, T, h(T), L);
          }), w;
        }
        function mx(u, c) {
          return u && Bn(c, Xt(c), u);
        }
        function oj(u, c) {
          return u && Bn(c, Tr(c), u);
        }
        function ii(u, c, h) {
          c == "__proto__" && Bc ? Bc(u, c, {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          }) : u[c] = h;
        }
        function ip(u, c) {
          for (var h = -1, w = c.length, T = J(w), R = u == null; ++h < w; )
            T[h] = R ? r : Lp(u, c[h]);
          return T;
        }
        function la(u, c, h) {
          return u === u && (h !== r && (u = u <= h ? u : h), c !== r && (u = u >= c ? u : c)), u;
        }
        function Qr(u, c, h, w, T, R) {
          var L, U = c & d, Y = c & v, oe = c & m;
          if (h && (L = T ? h(u, w, T, R) : h(u)), L !== r)
            return L;
          if (!Ot(u))
            return u;
          var ue = Le(u);
          if (ue) {
            if (L = Vj(u), !U)
              return Ar(u, L);
          } else {
            var se = or(u), me = se == B || se == xe;
            if (Bi(u))
              return qx(u, U);
            if (se == je || se == le || me && !T) {
              if (L = Y || me ? {} : aw(u), !U)
                return Y ? kj(u, oj(L, u)) : jj(u, mx(L, u));
            } else {
              if (!ft[se])
                return T ? u : {};
              L = Yj(u, se, U);
            }
          }
          R || (R = new xn());
          var Pe = R.get(u);
          if (Pe)
            return Pe;
          R.set(u, L), Nw(u) ? u.forEach(function(Re) {
            L.add(Qr(Re, c, h, Re, u, R));
          }) : Rw(u) && u.forEach(function(Re, Ue) {
            L.set(Ue, Qr(Re, c, h, Ue, u, R));
          });
          var Me = oe ? Y ? Sp : Op : Y ? Tr : Xt, We = ue ? r : Me(u);
          return Xr(We || u, function(Re, Ue) {
            We && (Ue = Re, Re = u[Ue]), Ou(L, Ue, Qr(Re, c, h, Ue, u, R));
          }), L;
        }
        function uj(u) {
          var c = Xt(u);
          return function(h) {
            return gx(h, u, c);
          };
        }
        function gx(u, c, h) {
          var w = h.length;
          if (u == null)
            return !w;
          for (u = st(u); w--; ) {
            var T = h[w], R = c[T], L = u[T];
            if (L === r && !(T in u) || !R(L))
              return !1;
          }
          return !0;
        }
        function yx(u, c, h) {
          if (typeof u != "function")
            throw new Zr(o);
          return Iu(function() {
            u.apply(r, h);
          }, c);
        }
        function Su(u, c, h, w) {
          var T = -1, R = Ec, L = !0, U = u.length, Y = [], oe = c.length;
          if (!U)
            return Y;
          h && (c = bt(c, jr(h))), w ? (R = Ud, L = !1) : c.length >= i && (R = gu, L = !1, c = new ca(c));
          e:
            for (; ++T < U; ) {
              var ue = u[T], se = h == null ? ue : h(ue);
              if (ue = w || ue !== 0 ? ue : 0, L && se === se) {
                for (var me = oe; me--; )
                  if (c[me] === se)
                    continue e;
                Y.push(ue);
              } else R(c, se, w) || Y.push(ue);
            }
          return Y;
        }
        var $i = Hx(Ln), bx = Hx(op, !0);
        function sj(u, c) {
          var h = !0;
          return $i(u, function(w, T, R) {
            return h = !!c(w, T, R), h;
          }), h;
        }
        function Gc(u, c, h) {
          for (var w = -1, T = u.length; ++w < T; ) {
            var R = u[w], L = c(R);
            if (L != null && (U === r ? L === L && !Lr(L) : h(L, U)))
              var U = L, Y = R;
          }
          return Y;
        }
        function cj(u, c, h, w) {
          var T = u.length;
          for (h = Fe(h), h < 0 && (h = -h > T ? 0 : T + h), w = w === r || w > T ? T : Fe(w), w < 0 && (w += T), w = h > w ? 0 : jw(w); h < w; )
            u[h++] = c;
          return u;
        }
        function xx(u, c) {
          var h = [];
          return $i(u, function(w, T, R) {
            c(w, T, R) && h.push(w);
          }), h;
        }
        function er(u, c, h, w, T) {
          var R = -1, L = u.length;
          for (h || (h = Zj), T || (T = []); ++R < L; ) {
            var U = u[R];
            c > 0 && h(U) ? c > 1 ? er(U, c - 1, h, w, T) : Ri(T, U) : w || (T[T.length] = U);
          }
          return T;
        }
        var ap = Gx(), wx = Gx(!0);
        function Ln(u, c) {
          return u && ap(u, c, Xt);
        }
        function op(u, c) {
          return u && wx(u, c, Xt);
        }
        function Kc(u, c) {
          return Mi(c, function(h) {
            return si(u[h]);
          });
        }
        function fa(u, c) {
          c = ki(c, u);
          for (var h = 0, w = c.length; u != null && h < w; )
            u = u[qn(c[h++])];
          return h && h == w ? u : r;
        }
        function _x(u, c, h) {
          var w = c(u);
          return Le(u) ? w : Ri(w, h(u));
        }
        function fr(u) {
          return u == null ? u === r ? wr : qe : ua && ua in st(u) ? Hj(u) : ik(u);
        }
        function up(u, c) {
          return u > c;
        }
        function lj(u, c) {
          return u != null && it.call(u, c);
        }
        function fj(u, c) {
          return u != null && c in st(u);
        }
        function dj(u, c, h) {
          return u >= ar(c, h) && u < Ft(c, h);
        }
        function sp(u, c, h) {
          for (var w = h ? Ud : Ec, T = u[0].length, R = u.length, L = R, U = J(R), Y = 1 / 0, oe = []; L--; ) {
            var ue = u[L];
            L && c && (ue = bt(ue, jr(c))), Y = ar(ue.length, Y), U[L] = !h && (c || T >= 120 && ue.length >= 120) ? new ca(L && ue) : r;
          }
          ue = u[0];
          var se = -1, me = U[0];
          e:
            for (; ++se < T && oe.length < Y; ) {
              var Pe = ue[se], Me = c ? c(Pe) : Pe;
              if (Pe = h || Pe !== 0 ? Pe : 0, !(me ? gu(me, Me) : w(oe, Me, h))) {
                for (L = R; --L; ) {
                  var We = U[L];
                  if (!(We ? gu(We, Me) : w(u[L], Me, h)))
                    continue e;
                }
                me && me.push(Me), oe.push(Pe);
              }
            }
          return oe;
        }
        function pj(u, c, h, w) {
          return Ln(u, function(T, R, L) {
            c(w, h(T), R, L);
          }), w;
        }
        function Au(u, c, h) {
          c = ki(c, u), u = cw(u, c);
          var w = u == null ? u : u[qn(tn(c))];
          return w == null ? r : $r(w, u, h);
        }
        function Ox(u) {
          return Tt(u) && fr(u) == le;
        }
        function hj(u) {
          return Tt(u) && fr(u) == _r;
        }
        function vj(u) {
          return Tt(u) && fr(u) == ae;
        }
        function Pu(u, c, h, w, T) {
          return u === c ? !0 : u == null || c == null || !Tt(u) && !Tt(c) ? u !== u && c !== c : mj(u, c, h, w, Pu, T);
        }
        function mj(u, c, h, w, T, R) {
          var L = Le(u), U = Le(c), Y = L ? be : or(u), oe = U ? be : or(c);
          Y = Y == le ? je : Y, oe = oe == le ? je : oe;
          var ue = Y == je, se = oe == je, me = Y == oe;
          if (me && Bi(u)) {
            if (!Bi(c))
              return !1;
            L = !0, ue = !1;
          }
          if (me && !ue)
            return R || (R = new xn()), L || oo(u) ? rw(u, c, h, w, T, R) : zj(u, c, Y, h, w, T, R);
          if (!(h & g)) {
            var Pe = ue && it.call(u, "__wrapped__"), Me = se && it.call(c, "__wrapped__");
            if (Pe || Me) {
              var We = Pe ? u.value() : u, Re = Me ? c.value() : c;
              return R || (R = new xn()), T(We, Re, h, w, R);
            }
          }
          return me ? (R || (R = new xn()), Uj(u, c, h, w, T, R)) : !1;
        }
        function gj(u) {
          return Tt(u) && or(u) == ee;
        }
        function cp(u, c, h, w) {
          var T = h.length, R = T, L = !w;
          if (u == null)
            return !R;
          for (u = st(u); T--; ) {
            var U = h[T];
            if (L && U[2] ? U[1] !== u[U[0]] : !(U[0] in u))
              return !1;
          }
          for (; ++T < R; ) {
            U = h[T];
            var Y = U[0], oe = u[Y], ue = U[1];
            if (L && U[2]) {
              if (oe === r && !(Y in u))
                return !1;
            } else {
              var se = new xn();
              if (w)
                var me = w(oe, ue, Y, u, c, se);
              if (!(me === r ? Pu(ue, oe, g | b, w, se) : me))
                return !1;
            }
          }
          return !0;
        }
        function Sx(u) {
          if (!Ot(u) || Qj(u))
            return !1;
          var c = si(u) ? g$ : Ee;
          return c.test(pa(u));
        }
        function yj(u) {
          return Tt(u) && fr(u) == It;
        }
        function bj(u) {
          return Tt(u) && or(u) == at;
        }
        function xj(u) {
          return Tt(u) && ll(u.length) && !!vt[fr(u)];
        }
        function Ax(u) {
          return typeof u == "function" ? u : u == null ? Er : typeof u == "object" ? Le(u) ? Ex(u[0], u[1]) : Tx(u) : Kw(u);
        }
        function lp(u) {
          if (!Cu(u))
            return O$(u);
          var c = [];
          for (var h in st(u))
            it.call(u, h) && h != "constructor" && c.push(h);
          return c;
        }
        function wj(u) {
          if (!Ot(u))
            return nk(u);
          var c = Cu(u), h = [];
          for (var w in u)
            w == "constructor" && (c || !it.call(u, w)) || h.push(w);
          return h;
        }
        function fp(u, c) {
          return u < c;
        }
        function Px(u, c) {
          var h = -1, w = Pr(u) ? J(u.length) : [];
          return $i(u, function(T, R, L) {
            w[++h] = c(T, R, L);
          }), w;
        }
        function Tx(u) {
          var c = Pp(u);
          return c.length == 1 && c[0][2] ? uw(c[0][0], c[0][1]) : function(h) {
            return h === u || cp(h, u, c);
          };
        }
        function Ex(u, c) {
          return Ep(u) && ow(c) ? uw(qn(u), c) : function(h) {
            var w = Lp(h, u);
            return w === r && w === c ? Bp(h, u) : Pu(c, w, g | b);
          };
        }
        function Vc(u, c, h, w, T) {
          u !== c && ap(c, function(R, L) {
            if (T || (T = new xn()), Ot(R))
              _j(u, c, L, h, Vc, w, T);
            else {
              var U = w ? w(Ip(u, L), R, L + "", u, c, T) : r;
              U === r && (U = R), np(u, L, U);
            }
          }, Tr);
        }
        function _j(u, c, h, w, T, R, L) {
          var U = Ip(u, h), Y = Ip(c, h), oe = L.get(Y);
          if (oe) {
            np(u, h, oe);
            return;
          }
          var ue = R ? R(U, Y, h + "", u, c, L) : r, se = ue === r;
          if (se) {
            var me = Le(Y), Pe = !me && Bi(Y), Me = !me && !Pe && oo(Y);
            ue = Y, me || Pe || Me ? Le(U) ? ue = U : Rt(U) ? ue = Ar(U) : Pe ? (se = !1, ue = qx(Y, !0)) : Me ? (se = !1, ue = Fx(Y, !0)) : ue = [] : Mu(Y) || ha(Y) ? (ue = U, ha(U) ? ue = kw(U) : (!Ot(U) || si(U)) && (ue = aw(Y))) : se = !1;
          }
          se && (L.set(Y, ue), T(ue, Y, w, R, L), L.delete(Y)), np(u, h, ue);
        }
        function Cx(u, c) {
          var h = u.length;
          if (h)
            return c += c < 0 ? h : 0, ui(c, h) ? u[c] : r;
        }
        function Ix(u, c, h) {
          c.length ? c = bt(c, function(R) {
            return Le(R) ? function(L) {
              return fa(L, R.length === 1 ? R[0] : R);
            } : R;
          }) : c = [Er];
          var w = -1;
          c = bt(c, jr(Ie()));
          var T = Px(u, function(R, L, U) {
            var Y = bt(c, function(oe) {
              return oe(R);
            });
            return { criteria: Y, index: ++w, value: R };
          });
          return YN(T, function(R, L) {
            return $j(R, L, h);
          });
        }
        function Oj(u, c) {
          return Mx(u, c, function(h, w) {
            return Bp(u, w);
          });
        }
        function Mx(u, c, h) {
          for (var w = -1, T = c.length, R = {}; ++w < T; ) {
            var L = c[w], U = fa(u, L);
            h(U, L) && Tu(R, ki(L, u), U);
          }
          return R;
        }
        function Sj(u) {
          return function(c) {
            return fa(c, u);
          };
        }
        function dp(u, c, h, w) {
          var T = w ? VN : Ya, R = -1, L = c.length, U = u;
          for (u === c && (c = Ar(c)), h && (U = bt(u, jr(h))); ++R < L; )
            for (var Y = 0, oe = c[R], ue = h ? h(oe) : oe; (Y = T(U, ue, Y, w)) > -1; )
              U !== u && Lc.call(U, Y, 1), Lc.call(u, Y, 1);
          return u;
        }
        function Rx(u, c) {
          for (var h = u ? c.length : 0, w = h - 1; h--; ) {
            var T = c[h];
            if (h == w || T !== R) {
              var R = T;
              ui(T) ? Lc.call(u, T, 1) : mp(u, T);
            }
          }
          return u;
        }
        function pp(u, c) {
          return u + Fc(dx() * (c - u + 1));
        }
        function Aj(u, c, h, w) {
          for (var T = -1, R = Ft(qc((c - u) / (h || 1)), 0), L = J(R); R--; )
            L[w ? R : ++T] = u, u += h;
          return L;
        }
        function hp(u, c) {
          var h = "";
          if (!u || c < 1 || c > Z)
            return h;
          do
            c % 2 && (h += u), c = Fc(c / 2), c && (u += u);
          while (c);
          return h;
        }
        function ze(u, c) {
          return Mp(sw(u, c, Er), u + "");
        }
        function Pj(u) {
          return vx(uo(u));
        }
        function Tj(u, c) {
          var h = uo(u);
          return il(h, la(c, 0, h.length));
        }
        function Tu(u, c, h, w) {
          if (!Ot(u))
            return u;
          c = ki(c, u);
          for (var T = -1, R = c.length, L = R - 1, U = u; U != null && ++T < R; ) {
            var Y = qn(c[T]), oe = h;
            if (Y === "__proto__" || Y === "constructor" || Y === "prototype")
              return u;
            if (T != L) {
              var ue = U[Y];
              oe = w ? w(ue, Y, U) : r, oe === r && (oe = Ot(ue) ? ue : ui(c[T + 1]) ? [] : {});
            }
            Ou(U, Y, oe), U = U[Y];
          }
          return u;
        }
        var Dx = Wc ? function(u, c) {
          return Wc.set(u, c), u;
        } : Er, Ej = Bc ? function(u, c) {
          return Bc(u, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Fp(c),
            writable: !0
          });
        } : Er;
        function Cj(u) {
          return il(uo(u));
        }
        function en(u, c, h) {
          var w = -1, T = u.length;
          c < 0 && (c = -c > T ? 0 : T + c), h = h > T ? T : h, h < 0 && (h += T), T = c > h ? 0 : h - c >>> 0, c >>>= 0;
          for (var R = J(T); ++w < T; )
            R[w] = u[w + c];
          return R;
        }
        function Ij(u, c) {
          var h;
          return $i(u, function(w, T, R) {
            return h = c(w, T, R), !h;
          }), !!h;
        }
        function Yc(u, c, h) {
          var w = 0, T = u == null ? w : u.length;
          if (typeof c == "number" && c === c && T <= ie) {
            for (; w < T; ) {
              var R = w + T >>> 1, L = u[R];
              L !== null && !Lr(L) && (h ? L <= c : L < c) ? w = R + 1 : T = R;
            }
            return T;
          }
          return vp(u, c, Er, h);
        }
        function vp(u, c, h, w) {
          var T = 0, R = u == null ? 0 : u.length;
          if (R === 0)
            return 0;
          c = h(c);
          for (var L = c !== c, U = c === null, Y = Lr(c), oe = c === r; T < R; ) {
            var ue = Fc((T + R) / 2), se = h(u[ue]), me = se !== r, Pe = se === null, Me = se === se, We = Lr(se);
            if (L)
              var Re = w || Me;
            else oe ? Re = Me && (w || me) : U ? Re = Me && me && (w || !Pe) : Y ? Re = Me && me && !Pe && (w || !We) : Pe || We ? Re = !1 : Re = w ? se <= c : se < c;
            Re ? T = ue + 1 : R = ue;
          }
          return ar(R, te);
        }
        function Nx(u, c) {
          for (var h = -1, w = u.length, T = 0, R = []; ++h < w; ) {
            var L = u[h], U = c ? c(L) : L;
            if (!h || !wn(U, Y)) {
              var Y = U;
              R[T++] = L === 0 ? 0 : L;
            }
          }
          return R;
        }
        function $x(u) {
          return typeof u == "number" ? u : Lr(u) ? G : +u;
        }
        function kr(u) {
          if (typeof u == "string")
            return u;
          if (Le(u))
            return bt(u, kr) + "";
          if (Lr(u))
            return px ? px.call(u) : "";
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }
        function ji(u, c, h) {
          var w = -1, T = Ec, R = u.length, L = !0, U = [], Y = U;
          if (h)
            L = !1, T = Ud;
          else if (R >= i) {
            var oe = c ? null : Fj(u);
            if (oe)
              return Ic(oe);
            L = !1, T = gu, Y = new ca();
          } else
            Y = c ? [] : U;
          e:
            for (; ++w < R; ) {
              var ue = u[w], se = c ? c(ue) : ue;
              if (ue = h || ue !== 0 ? ue : 0, L && se === se) {
                for (var me = Y.length; me--; )
                  if (Y[me] === se)
                    continue e;
                c && Y.push(se), U.push(ue);
              } else T(Y, se, h) || (Y !== U && Y.push(se), U.push(ue));
            }
          return U;
        }
        function mp(u, c) {
          return c = ki(c, u), u = cw(u, c), u == null || delete u[qn(tn(c))];
        }
        function jx(u, c, h, w) {
          return Tu(u, c, h(fa(u, c)), w);
        }
        function Xc(u, c, h, w) {
          for (var T = u.length, R = w ? T : -1; (w ? R-- : ++R < T) && c(u[R], R, u); )
            ;
          return h ? en(u, w ? 0 : R, w ? R + 1 : T) : en(u, w ? R + 1 : 0, w ? T : R);
        }
        function kx(u, c) {
          var h = u;
          return h instanceof Ke && (h = h.value()), Hd(c, function(w, T) {
            return T.func.apply(T.thisArg, Ri([w], T.args));
          }, h);
        }
        function gp(u, c, h) {
          var w = u.length;
          if (w < 2)
            return w ? ji(u[0]) : [];
          for (var T = -1, R = J(w); ++T < w; )
            for (var L = u[T], U = -1; ++U < w; )
              U != T && (R[T] = Su(R[T] || L, u[U], c, h));
          return ji(er(R, 1), c, h);
        }
        function Lx(u, c, h) {
          for (var w = -1, T = u.length, R = c.length, L = {}; ++w < T; ) {
            var U = w < R ? c[w] : r;
            h(L, u[w], U);
          }
          return L;
        }
        function yp(u) {
          return Rt(u) ? u : [];
        }
        function bp(u) {
          return typeof u == "function" ? u : Er;
        }
        function ki(u, c) {
          return Le(u) ? u : Ep(u, c) ? [u] : pw(Ze(u));
        }
        var Mj = ze;
        function Li(u, c, h) {
          var w = u.length;
          return h = h === r ? w : h, !c && h >= w ? u : en(u, c, h);
        }
        var Bx = y$ || function(u) {
          return Qt.clearTimeout(u);
        };
        function qx(u, c) {
          if (c)
            return u.slice();
          var h = u.length, w = ux ? ux(h) : new u.constructor(h);
          return u.copy(w), w;
        }
        function xp(u) {
          var c = new u.constructor(u.byteLength);
          return new jc(c).set(new jc(u)), c;
        }
        function Rj(u, c) {
          var h = c ? xp(u.buffer) : u.buffer;
          return new u.constructor(h, u.byteOffset, u.byteLength);
        }
        function Dj(u) {
          var c = new u.constructor(u.source, vu.exec(u));
          return c.lastIndex = u.lastIndex, c;
        }
        function Nj(u) {
          return _u ? st(_u.call(u)) : {};
        }
        function Fx(u, c) {
          var h = c ? xp(u.buffer) : u.buffer;
          return new u.constructor(h, u.byteOffset, u.length);
        }
        function Wx(u, c) {
          if (u !== c) {
            var h = u !== r, w = u === null, T = u === u, R = Lr(u), L = c !== r, U = c === null, Y = c === c, oe = Lr(c);
            if (!U && !oe && !R && u > c || R && L && Y && !U && !oe || w && L && Y || !h && Y || !T)
              return 1;
            if (!w && !R && !oe && u < c || oe && h && T && !w && !R || U && h && T || !L && T || !Y)
              return -1;
          }
          return 0;
        }
        function $j(u, c, h) {
          for (var w = -1, T = u.criteria, R = c.criteria, L = T.length, U = h.length; ++w < L; ) {
            var Y = Wx(T[w], R[w]);
            if (Y) {
              if (w >= U)
                return Y;
              var oe = h[w];
              return Y * (oe == "desc" ? -1 : 1);
            }
          }
          return u.index - c.index;
        }
        function zx(u, c, h, w) {
          for (var T = -1, R = u.length, L = h.length, U = -1, Y = c.length, oe = Ft(R - L, 0), ue = J(Y + oe), se = !w; ++U < Y; )
            ue[U] = c[U];
          for (; ++T < L; )
            (se || T < R) && (ue[h[T]] = u[T]);
          for (; oe--; )
            ue[U++] = u[T++];
          return ue;
        }
        function Ux(u, c, h, w) {
          for (var T = -1, R = u.length, L = -1, U = h.length, Y = -1, oe = c.length, ue = Ft(R - U, 0), se = J(ue + oe), me = !w; ++T < ue; )
            se[T] = u[T];
          for (var Pe = T; ++Y < oe; )
            se[Pe + Y] = c[Y];
          for (; ++L < U; )
            (me || T < R) && (se[Pe + h[L]] = u[T++]);
          return se;
        }
        function Ar(u, c) {
          var h = -1, w = u.length;
          for (c || (c = J(w)); ++h < w; )
            c[h] = u[h];
          return c;
        }
        function Bn(u, c, h, w) {
          var T = !h;
          h || (h = {});
          for (var R = -1, L = c.length; ++R < L; ) {
            var U = c[R], Y = w ? w(h[U], u[U], U, h, u) : r;
            Y === r && (Y = u[U]), T ? ii(h, U, Y) : Ou(h, U, Y);
          }
          return h;
        }
        function jj(u, c) {
          return Bn(u, Tp(u), c);
        }
        function kj(u, c) {
          return Bn(u, nw(u), c);
        }
        function Zc(u, c) {
          return function(h, w) {
            var T = Le(h) ? WN : aj, R = c ? c() : {};
            return T(h, u, Ie(w, 2), R);
          };
        }
        function no(u) {
          return ze(function(c, h) {
            var w = -1, T = h.length, R = T > 1 ? h[T - 1] : r, L = T > 2 ? h[2] : r;
            for (R = u.length > 3 && typeof R == "function" ? (T--, R) : r, L && dr(h[0], h[1], L) && (R = T < 3 ? r : R, T = 1), c = st(c); ++w < T; ) {
              var U = h[w];
              U && u(c, U, w, R);
            }
            return c;
          });
        }
        function Hx(u, c) {
          return function(h, w) {
            if (h == null)
              return h;
            if (!Pr(h))
              return u(h, w);
            for (var T = h.length, R = c ? T : -1, L = st(h); (c ? R-- : ++R < T) && w(L[R], R, L) !== !1; )
              ;
            return h;
          };
        }
        function Gx(u) {
          return function(c, h, w) {
            for (var T = -1, R = st(c), L = w(c), U = L.length; U--; ) {
              var Y = L[u ? U : ++T];
              if (h(R[Y], Y, R) === !1)
                break;
            }
            return c;
          };
        }
        function Lj(u, c, h) {
          var w = c & y, T = Eu(u);
          function R() {
            var L = this && this !== Qt && this instanceof R ? T : u;
            return L.apply(w ? h : this, arguments);
          }
          return R;
        }
        function Kx(u) {
          return function(c) {
            c = Ze(c);
            var h = Xa(c) ? bn(c) : r, w = h ? h[0] : c.charAt(0), T = h ? Li(h, 1).join("") : c.slice(1);
            return w[u]() + T;
          };
        }
        function io(u) {
          return function(c) {
            return Hd(Hw(Uw(c).replace(EN, "")), u, "");
          };
        }
        function Eu(u) {
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return new u();
              case 1:
                return new u(c[0]);
              case 2:
                return new u(c[0], c[1]);
              case 3:
                return new u(c[0], c[1], c[2]);
              case 4:
                return new u(c[0], c[1], c[2], c[3]);
              case 5:
                return new u(c[0], c[1], c[2], c[3], c[4]);
              case 6:
                return new u(c[0], c[1], c[2], c[3], c[4], c[5]);
              case 7:
                return new u(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
            }
            var h = ro(u.prototype), w = u.apply(h, c);
            return Ot(w) ? w : h;
          };
        }
        function Bj(u, c, h) {
          var w = Eu(u);
          function T() {
            for (var R = arguments.length, L = J(R), U = R, Y = ao(T); U--; )
              L[U] = arguments[U];
            var oe = R < 3 && L[0] !== Y && L[R - 1] !== Y ? [] : Di(L, Y);
            if (R -= oe.length, R < h)
              return Jx(
                u,
                c,
                Jc,
                T.placeholder,
                r,
                L,
                oe,
                r,
                r,
                h - R
              );
            var ue = this && this !== Qt && this instanceof T ? w : u;
            return $r(ue, this, L);
          }
          return T;
        }
        function Vx(u) {
          return function(c, h, w) {
            var T = st(c);
            if (!Pr(c)) {
              var R = Ie(h, 3);
              c = Xt(c), h = function(U) {
                return R(T[U], U, T);
              };
            }
            var L = u(c, h, w);
            return L > -1 ? T[R ? c[L] : L] : r;
          };
        }
        function Yx(u) {
          return oi(function(c) {
            var h = c.length, w = h, T = Jr.prototype.thru;
            for (u && c.reverse(); w--; ) {
              var R = c[w];
              if (typeof R != "function")
                throw new Zr(o);
              if (T && !L && rl(R) == "wrapper")
                var L = new Jr([], !0);
            }
            for (w = L ? w : h; ++w < h; ) {
              R = c[w];
              var U = rl(R), Y = U == "wrapper" ? Ap(R) : r;
              Y && Cp(Y[0]) && Y[1] == (C | S | x | M) && !Y[4].length && Y[9] == 1 ? L = L[rl(Y[0])].apply(L, Y[3]) : L = R.length == 1 && Cp(R) ? L[U]() : L.thru(R);
            }
            return function() {
              var oe = arguments, ue = oe[0];
              if (L && oe.length == 1 && Le(ue))
                return L.plant(ue).value();
              for (var se = 0, me = h ? c[se].apply(this, oe) : ue; ++se < h; )
                me = c[se].call(this, me);
              return me;
            };
          });
        }
        function Jc(u, c, h, w, T, R, L, U, Y, oe) {
          var ue = c & C, se = c & y, me = c & _, Pe = c & (S | P), Me = c & N, We = me ? r : Eu(u);
          function Re() {
            for (var Ue = arguments.length, Ve = J(Ue), Br = Ue; Br--; )
              Ve[Br] = arguments[Br];
            if (Pe)
              var pr = ao(Re), qr = ZN(Ve, pr);
            if (w && (Ve = zx(Ve, w, T, Pe)), R && (Ve = Ux(Ve, R, L, Pe)), Ue -= qr, Pe && Ue < oe) {
              var Dt = Di(Ve, pr);
              return Jx(
                u,
                c,
                Jc,
                Re.placeholder,
                h,
                Ve,
                Dt,
                U,
                Y,
                oe - Ue
              );
            }
            var _n = se ? h : this, li = me ? _n[u] : u;
            return Ue = Ve.length, U ? Ve = ak(Ve, U) : Me && Ue > 1 && Ve.reverse(), ue && Y < Ue && (Ve.length = Y), this && this !== Qt && this instanceof Re && (li = We || Eu(li)), li.apply(_n, Ve);
          }
          return Re;
        }
        function Xx(u, c) {
          return function(h, w) {
            return pj(h, u, c(w), {});
          };
        }
        function Qc(u, c) {
          return function(h, w) {
            var T;
            if (h === r && w === r)
              return c;
            if (h !== r && (T = h), w !== r) {
              if (T === r)
                return w;
              typeof h == "string" || typeof w == "string" ? (h = kr(h), w = kr(w)) : (h = $x(h), w = $x(w)), T = u(h, w);
            }
            return T;
          };
        }
        function wp(u) {
          return oi(function(c) {
            return c = bt(c, jr(Ie())), ze(function(h) {
              var w = this;
              return u(c, function(T) {
                return $r(T, w, h);
              });
            });
          });
        }
        function el(u, c) {
          c = c === r ? " " : kr(c);
          var h = c.length;
          if (h < 2)
            return h ? hp(c, u) : c;
          var w = hp(c, qc(u / Za(c)));
          return Xa(c) ? Li(bn(w), 0, u).join("") : w.slice(0, u);
        }
        function qj(u, c, h, w) {
          var T = c & y, R = Eu(u);
          function L() {
            for (var U = -1, Y = arguments.length, oe = -1, ue = w.length, se = J(ue + Y), me = this && this !== Qt && this instanceof L ? R : u; ++oe < ue; )
              se[oe] = w[oe];
            for (; Y--; )
              se[oe++] = arguments[++U];
            return $r(me, T ? h : this, se);
          }
          return L;
        }
        function Zx(u) {
          return function(c, h, w) {
            return w && typeof w != "number" && dr(c, h, w) && (h = w = r), c = ci(c), h === r ? (h = c, c = 0) : h = ci(h), w = w === r ? c < h ? 1 : -1 : ci(w), Aj(c, h, w, u);
          };
        }
        function tl(u) {
          return function(c, h) {
            return typeof c == "string" && typeof h == "string" || (c = rn(c), h = rn(h)), u(c, h);
          };
        }
        function Jx(u, c, h, w, T, R, L, U, Y, oe) {
          var ue = c & S, se = ue ? L : r, me = ue ? r : L, Pe = ue ? R : r, Me = ue ? r : R;
          c |= ue ? x : A, c &= ~(ue ? A : x), c & O || (c &= -4);
          var We = [
            u,
            c,
            T,
            Pe,
            se,
            Me,
            me,
            U,
            Y,
            oe
          ], Re = h.apply(r, We);
          return Cp(u) && lw(Re, We), Re.placeholder = w, fw(Re, u, c);
        }
        function _p(u) {
          var c = qt[u];
          return function(h, w) {
            if (h = rn(h), w = w == null ? 0 : ar(Fe(w), 292), w && fx(h)) {
              var T = (Ze(h) + "e").split("e"), R = c(T[0] + "e" + (+T[1] + w));
              return T = (Ze(R) + "e").split("e"), +(T[0] + "e" + (+T[1] - w));
            }
            return c(h);
          };
        }
        var Fj = eo && 1 / Ic(new eo([, -0]))[1] == V ? function(u) {
          return new eo(u);
        } : Up;
        function Qx(u) {
          return function(c) {
            var h = or(c);
            return h == ee ? Jd(c) : h == at ? i$(c) : XN(c, u(c));
          };
        }
        function ai(u, c, h, w, T, R, L, U) {
          var Y = c & _;
          if (!Y && typeof u != "function")
            throw new Zr(o);
          var oe = w ? w.length : 0;
          if (oe || (c &= -97, w = T = r), L = L === r ? L : Ft(Fe(L), 0), U = U === r ? U : Fe(U), oe -= T ? T.length : 0, c & A) {
            var ue = w, se = T;
            w = T = r;
          }
          var me = Y ? r : Ap(u), Pe = [
            u,
            c,
            h,
            w,
            T,
            ue,
            se,
            R,
            L,
            U
          ];
          if (me && rk(Pe, me), u = Pe[0], c = Pe[1], h = Pe[2], w = Pe[3], T = Pe[4], U = Pe[9] = Pe[9] === r ? Y ? 0 : u.length : Ft(Pe[9] - oe, 0), !U && c & (S | P) && (c &= -25), !c || c == y)
            var Me = Lj(u, c, h);
          else c == S || c == P ? Me = Bj(u, c, U) : (c == x || c == (y | x)) && !T.length ? Me = qj(u, c, h, w) : Me = Jc.apply(r, Pe);
          var We = me ? Dx : lw;
          return fw(We(Me, Pe), u, c);
        }
        function ew(u, c, h, w) {
          return u === r || wn(u, Qa[h]) && !it.call(w, h) ? c : u;
        }
        function tw(u, c, h, w, T, R) {
          return Ot(u) && Ot(c) && (R.set(c, u), Vc(u, c, r, tw, R), R.delete(c)), u;
        }
        function Wj(u) {
          return Mu(u) ? r : u;
        }
        function rw(u, c, h, w, T, R) {
          var L = h & g, U = u.length, Y = c.length;
          if (U != Y && !(L && Y > U))
            return !1;
          var oe = R.get(u), ue = R.get(c);
          if (oe && ue)
            return oe == c && ue == u;
          var se = -1, me = !0, Pe = h & b ? new ca() : r;
          for (R.set(u, c), R.set(c, u); ++se < U; ) {
            var Me = u[se], We = c[se];
            if (w)
              var Re = L ? w(We, Me, se, c, u, R) : w(Me, We, se, u, c, R);
            if (Re !== r) {
              if (Re)
                continue;
              me = !1;
              break;
            }
            if (Pe) {
              if (!Gd(c, function(Ue, Ve) {
                if (!gu(Pe, Ve) && (Me === Ue || T(Me, Ue, h, w, R)))
                  return Pe.push(Ve);
              })) {
                me = !1;
                break;
              }
            } else if (!(Me === We || T(Me, We, h, w, R))) {
              me = !1;
              break;
            }
          }
          return R.delete(u), R.delete(c), me;
        }
        function zj(u, c, h, w, T, R, L) {
          switch (h) {
            case hn:
              if (u.byteLength != c.byteLength || u.byteOffset != c.byteOffset)
                return !1;
              u = u.buffer, c = c.buffer;
            case _r:
              return !(u.byteLength != c.byteLength || !R(new jc(u), new jc(c)));
            case ge:
            case ae:
            case Ce:
              return wn(+u, +c);
            case he:
              return u.name == c.name && u.message == c.message;
            case It:
            case Mt:
              return u == c + "";
            case ee:
              var U = Jd;
            case at:
              var Y = w & g;
              if (U || (U = Ic), u.size != c.size && !Y)
                return !1;
              var oe = L.get(u);
              if (oe)
                return oe == c;
              w |= b, L.set(u, c);
              var ue = rw(U(u), U(c), w, T, R, L);
              return L.delete(u), ue;
            case nr:
              if (_u)
                return _u.call(u) == _u.call(c);
          }
          return !1;
        }
        function Uj(u, c, h, w, T, R) {
          var L = h & g, U = Op(u), Y = U.length, oe = Op(c), ue = oe.length;
          if (Y != ue && !L)
            return !1;
          for (var se = Y; se--; ) {
            var me = U[se];
            if (!(L ? me in c : it.call(c, me)))
              return !1;
          }
          var Pe = R.get(u), Me = R.get(c);
          if (Pe && Me)
            return Pe == c && Me == u;
          var We = !0;
          R.set(u, c), R.set(c, u);
          for (var Re = L; ++se < Y; ) {
            me = U[se];
            var Ue = u[me], Ve = c[me];
            if (w)
              var Br = L ? w(Ve, Ue, me, c, u, R) : w(Ue, Ve, me, u, c, R);
            if (!(Br === r ? Ue === Ve || T(Ue, Ve, h, w, R) : Br)) {
              We = !1;
              break;
            }
            Re || (Re = me == "constructor");
          }
          if (We && !Re) {
            var pr = u.constructor, qr = c.constructor;
            pr != qr && "constructor" in u && "constructor" in c && !(typeof pr == "function" && pr instanceof pr && typeof qr == "function" && qr instanceof qr) && (We = !1);
          }
          return R.delete(u), R.delete(c), We;
        }
        function oi(u) {
          return Mp(sw(u, r, gw), u + "");
        }
        function Op(u) {
          return _x(u, Xt, Tp);
        }
        function Sp(u) {
          return _x(u, Tr, nw);
        }
        var Ap = Wc ? function(u) {
          return Wc.get(u);
        } : Up;
        function rl(u) {
          for (var c = u.name + "", h = to[c], w = it.call(to, c) ? h.length : 0; w--; ) {
            var T = h[w], R = T.func;
            if (R == null || R == u)
              return T.name;
          }
          return c;
        }
        function ao(u) {
          var c = it.call(I, "placeholder") ? I : u;
          return c.placeholder;
        }
        function Ie() {
          var u = I.iteratee || Wp;
          return u = u === Wp ? Ax : u, arguments.length ? u(arguments[0], arguments[1]) : u;
        }
        function nl(u, c) {
          var h = u.__data__;
          return Jj(c) ? h[typeof c == "string" ? "string" : "hash"] : h.map;
        }
        function Pp(u) {
          for (var c = Xt(u), h = c.length; h--; ) {
            var w = c[h], T = u[w];
            c[h] = [w, T, ow(T)];
          }
          return c;
        }
        function da(u, c) {
          var h = t$(u, c);
          return Sx(h) ? h : r;
        }
        function Hj(u) {
          var c = it.call(u, ua), h = u[ua];
          try {
            u[ua] = r;
            var w = !0;
          } catch {
          }
          var T = Nc.call(u);
          return w && (c ? u[ua] = h : delete u[ua]), T;
        }
        var Tp = ep ? function(u) {
          return u == null ? [] : (u = st(u), Mi(ep(u), function(c) {
            return cx.call(u, c);
          }));
        } : Hp, nw = ep ? function(u) {
          for (var c = []; u; )
            Ri(c, Tp(u)), u = kc(u);
          return c;
        } : Hp, or = fr;
        (tp && or(new tp(new ArrayBuffer(1))) != hn || bu && or(new bu()) != ee || rp && or(rp.resolve()) != gt || eo && or(new eo()) != at || xu && or(new xu()) != Lt) && (or = function(u) {
          var c = fr(u), h = c == je ? u.constructor : r, w = h ? pa(h) : "";
          if (w)
            switch (w) {
              case T$:
                return hn;
              case E$:
                return ee;
              case C$:
                return gt;
              case I$:
                return at;
              case M$:
                return Lt;
            }
          return c;
        });
        function Gj(u, c, h) {
          for (var w = -1, T = h.length; ++w < T; ) {
            var R = h[w], L = R.size;
            switch (R.type) {
              case "drop":
                u += L;
                break;
              case "dropRight":
                c -= L;
                break;
              case "take":
                c = ar(c, u + L);
                break;
              case "takeRight":
                u = Ft(u, c - L);
                break;
            }
          }
          return { start: u, end: c };
        }
        function Kj(u) {
          var c = u.match(wc);
          return c ? c[1].split(hu) : [];
        }
        function iw(u, c, h) {
          c = ki(c, u);
          for (var w = -1, T = c.length, R = !1; ++w < T; ) {
            var L = qn(c[w]);
            if (!(R = u != null && h(u, L)))
              break;
            u = u[L];
          }
          return R || ++w != T ? R : (T = u == null ? 0 : u.length, !!T && ll(T) && ui(L, T) && (Le(u) || ha(u)));
        }
        function Vj(u) {
          var c = u.length, h = new u.constructor(c);
          return c && typeof u[0] == "string" && it.call(u, "index") && (h.index = u.index, h.input = u.input), h;
        }
        function aw(u) {
          return typeof u.constructor == "function" && !Cu(u) ? ro(kc(u)) : {};
        }
        function Yj(u, c, h) {
          var w = u.constructor;
          switch (c) {
            case _r:
              return xp(u);
            case ge:
            case ae:
              return new w(+u);
            case hn:
              return Rj(u, h);
            case jn:
            case Or:
            case kn:
            case Kr:
            case Nr:
            case lr:
            case Vr:
            case Qn:
            case ei:
              return Fx(u, h);
            case ee:
              return new w();
            case Ce:
            case Mt:
              return new w(u);
            case It:
              return Dj(u);
            case at:
              return new w();
            case nr:
              return Nj(u);
          }
        }
        function Xj(u, c) {
          var h = c.length;
          if (!h)
            return u;
          var w = h - 1;
          return c[w] = (h > 1 ? "& " : "") + c[w], c = c.join(h > 2 ? ", " : " "), u.replace(xc, `{
/* [wrapped with ` + c + `] */
`);
        }
        function Zj(u) {
          return Le(u) || ha(u) || !!(lx && u && u[lx]);
        }
        function ui(u, c) {
          var h = typeof u;
          return c = c ?? Z, !!c && (h == "number" || h != "symbol" && de.test(u)) && u > -1 && u % 1 == 0 && u < c;
        }
        function dr(u, c, h) {
          if (!Ot(h))
            return !1;
          var w = typeof c;
          return (w == "number" ? Pr(h) && ui(c, h.length) : w == "string" && c in h) ? wn(h[c], u) : !1;
        }
        function Ep(u, c) {
          if (Le(u))
            return !1;
          var h = typeof u;
          return h == "number" || h == "symbol" || h == "boolean" || u == null || Lr(u) ? !0 : pu.test(u) || !yc.test(u) || c != null && u in st(c);
        }
        function Jj(u) {
          var c = typeof u;
          return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? u !== "__proto__" : u === null;
        }
        function Cp(u) {
          var c = rl(u), h = I[c];
          if (typeof h != "function" || !(c in Ke.prototype))
            return !1;
          if (u === h)
            return !0;
          var w = Ap(h);
          return !!w && u === w[0];
        }
        function Qj(u) {
          return !!ox && ox in u;
        }
        var ek = Rc ? si : Gp;
        function Cu(u) {
          var c = u && u.constructor, h = typeof c == "function" && c.prototype || Qa;
          return u === h;
        }
        function ow(u) {
          return u === u && !Ot(u);
        }
        function uw(u, c) {
          return function(h) {
            return h == null ? !1 : h[u] === c && (c !== r || u in st(h));
          };
        }
        function tk(u) {
          var c = sl(u, function(w) {
            return h.size === f && h.clear(), w;
          }), h = c.cache;
          return c;
        }
        function rk(u, c) {
          var h = u[1], w = c[1], T = h | w, R = T < (y | _ | C), L = w == C && h == S || w == C && h == M && u[7].length <= c[8] || w == (C | M) && c[7].length <= c[8] && h == S;
          if (!(R || L))
            return u;
          w & y && (u[2] = c[2], T |= h & y ? 0 : O);
          var U = c[3];
          if (U) {
            var Y = u[3];
            u[3] = Y ? zx(Y, U, c[4]) : U, u[4] = Y ? Di(u[3], p) : c[4];
          }
          return U = c[5], U && (Y = u[5], u[5] = Y ? Ux(Y, U, c[6]) : U, u[6] = Y ? Di(u[5], p) : c[6]), U = c[7], U && (u[7] = U), w & C && (u[8] = u[8] == null ? c[8] : ar(u[8], c[8])), u[9] == null && (u[9] = c[9]), u[0] = c[0], u[1] = T, u;
        }
        function nk(u) {
          var c = [];
          if (u != null)
            for (var h in st(u))
              c.push(h);
          return c;
        }
        function ik(u) {
          return Nc.call(u);
        }
        function sw(u, c, h) {
          return c = Ft(c === r ? u.length - 1 : c, 0), function() {
            for (var w = arguments, T = -1, R = Ft(w.length - c, 0), L = J(R); ++T < R; )
              L[T] = w[c + T];
            T = -1;
            for (var U = J(c + 1); ++T < c; )
              U[T] = w[T];
            return U[c] = h(L), $r(u, this, U);
          };
        }
        function cw(u, c) {
          return c.length < 2 ? u : fa(u, en(c, 0, -1));
        }
        function ak(u, c) {
          for (var h = u.length, w = ar(c.length, h), T = Ar(u); w--; ) {
            var R = c[w];
            u[w] = ui(R, h) ? T[R] : r;
          }
          return u;
        }
        function Ip(u, c) {
          if (!(c === "constructor" && typeof u[c] == "function") && c != "__proto__")
            return u[c];
        }
        var lw = dw(Dx), Iu = x$ || function(u, c) {
          return Qt.setTimeout(u, c);
        }, Mp = dw(Ej);
        function fw(u, c, h) {
          var w = c + "";
          return Mp(u, Xj(w, ok(Kj(w), h)));
        }
        function dw(u) {
          var c = 0, h = 0;
          return function() {
            var w = S$(), T = q - (w - h);
            if (h = w, T > 0) {
              if (++c >= W)
                return arguments[0];
            } else
              c = 0;
            return u.apply(r, arguments);
          };
        }
        function il(u, c) {
          var h = -1, w = u.length, T = w - 1;
          for (c = c === r ? w : c; ++h < c; ) {
            var R = pp(h, T), L = u[R];
            u[R] = u[h], u[h] = L;
          }
          return u.length = c, u;
        }
        var pw = tk(function(u) {
          var c = [];
          return u.charCodeAt(0) === 46 && c.push(""), u.replace(bc, function(h, w, T, R) {
            c.push(T ? R.replace(Oc, "$1") : w || h);
          }), c;
        });
        function qn(u) {
          if (typeof u == "string" || Lr(u))
            return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }
        function pa(u) {
          if (u != null) {
            try {
              return Dc.call(u);
            } catch {
            }
            try {
              return u + "";
            } catch {
            }
          }
          return "";
        }
        function ok(u, c) {
          return Xr(ve, function(h) {
            var w = "_." + h[0];
            c & h[1] && !Ec(u, w) && u.push(w);
          }), u.sort();
        }
        function hw(u) {
          if (u instanceof Ke)
            return u.clone();
          var c = new Jr(u.__wrapped__, u.__chain__);
          return c.__actions__ = Ar(u.__actions__), c.__index__ = u.__index__, c.__values__ = u.__values__, c;
        }
        function uk(u, c, h) {
          (h ? dr(u, c, h) : c === r) ? c = 1 : c = Ft(Fe(c), 0);
          var w = u == null ? 0 : u.length;
          if (!w || c < 1)
            return [];
          for (var T = 0, R = 0, L = J(qc(w / c)); T < w; )
            L[R++] = en(u, T, T += c);
          return L;
        }
        function sk(u) {
          for (var c = -1, h = u == null ? 0 : u.length, w = 0, T = []; ++c < h; ) {
            var R = u[c];
            R && (T[w++] = R);
          }
          return T;
        }
        function ck() {
          var u = arguments.length;
          if (!u)
            return [];
          for (var c = J(u - 1), h = arguments[0], w = u; w--; )
            c[w - 1] = arguments[w];
          return Ri(Le(h) ? Ar(h) : [h], er(c, 1));
        }
        var lk = ze(function(u, c) {
          return Rt(u) ? Su(u, er(c, 1, Rt, !0)) : [];
        }), fk = ze(function(u, c) {
          var h = tn(c);
          return Rt(h) && (h = r), Rt(u) ? Su(u, er(c, 1, Rt, !0), Ie(h, 2)) : [];
        }), dk = ze(function(u, c) {
          var h = tn(c);
          return Rt(h) && (h = r), Rt(u) ? Su(u, er(c, 1, Rt, !0), r, h) : [];
        });
        function pk(u, c, h) {
          var w = u == null ? 0 : u.length;
          return w ? (c = h || c === r ? 1 : Fe(c), en(u, c < 0 ? 0 : c, w)) : [];
        }
        function hk(u, c, h) {
          var w = u == null ? 0 : u.length;
          return w ? (c = h || c === r ? 1 : Fe(c), c = w - c, en(u, 0, c < 0 ? 0 : c)) : [];
        }
        function vk(u, c) {
          return u && u.length ? Xc(u, Ie(c, 3), !0, !0) : [];
        }
        function mk(u, c) {
          return u && u.length ? Xc(u, Ie(c, 3), !0) : [];
        }
        function gk(u, c, h, w) {
          var T = u == null ? 0 : u.length;
          return T ? (h && typeof h != "number" && dr(u, c, h) && (h = 0, w = T), cj(u, c, h, w)) : [];
        }
        function vw(u, c, h) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var T = h == null ? 0 : Fe(h);
          return T < 0 && (T = Ft(w + T, 0)), Cc(u, Ie(c, 3), T);
        }
        function mw(u, c, h) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var T = w - 1;
          return h !== r && (T = Fe(h), T = h < 0 ? Ft(w + T, 0) : ar(T, w - 1)), Cc(u, Ie(c, 3), T, !0);
        }
        function gw(u) {
          var c = u == null ? 0 : u.length;
          return c ? er(u, 1) : [];
        }
        function yk(u) {
          var c = u == null ? 0 : u.length;
          return c ? er(u, V) : [];
        }
        function bk(u, c) {
          var h = u == null ? 0 : u.length;
          return h ? (c = c === r ? 1 : Fe(c), er(u, c)) : [];
        }
        function xk(u) {
          for (var c = -1, h = u == null ? 0 : u.length, w = {}; ++c < h; ) {
            var T = u[c];
            w[T[0]] = T[1];
          }
          return w;
        }
        function yw(u) {
          return u && u.length ? u[0] : r;
        }
        function wk(u, c, h) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var T = h == null ? 0 : Fe(h);
          return T < 0 && (T = Ft(w + T, 0)), Ya(u, c, T);
        }
        function _k(u) {
          var c = u == null ? 0 : u.length;
          return c ? en(u, 0, -1) : [];
        }
        var Ok = ze(function(u) {
          var c = bt(u, yp);
          return c.length && c[0] === u[0] ? sp(c) : [];
        }), Sk = ze(function(u) {
          var c = tn(u), h = bt(u, yp);
          return c === tn(h) ? c = r : h.pop(), h.length && h[0] === u[0] ? sp(h, Ie(c, 2)) : [];
        }), Ak = ze(function(u) {
          var c = tn(u), h = bt(u, yp);
          return c = typeof c == "function" ? c : r, c && h.pop(), h.length && h[0] === u[0] ? sp(h, r, c) : [];
        });
        function Pk(u, c) {
          return u == null ? "" : _$.call(u, c);
        }
        function tn(u) {
          var c = u == null ? 0 : u.length;
          return c ? u[c - 1] : r;
        }
        function Tk(u, c, h) {
          var w = u == null ? 0 : u.length;
          if (!w)
            return -1;
          var T = w;
          return h !== r && (T = Fe(h), T = T < 0 ? Ft(w + T, 0) : ar(T, w - 1)), c === c ? o$(u, c, T) : Cc(u, J1, T, !0);
        }
        function Ek(u, c) {
          return u && u.length ? Cx(u, Fe(c)) : r;
        }
        var Ck = ze(bw);
        function bw(u, c) {
          return u && u.length && c && c.length ? dp(u, c) : u;
        }
        function Ik(u, c, h) {
          return u && u.length && c && c.length ? dp(u, c, Ie(h, 2)) : u;
        }
        function Mk(u, c, h) {
          return u && u.length && c && c.length ? dp(u, c, r, h) : u;
        }
        var Rk = oi(function(u, c) {
          var h = u == null ? 0 : u.length, w = ip(u, c);
          return Rx(u, bt(c, function(T) {
            return ui(T, h) ? +T : T;
          }).sort(Wx)), w;
        });
        function Dk(u, c) {
          var h = [];
          if (!(u && u.length))
            return h;
          var w = -1, T = [], R = u.length;
          for (c = Ie(c, 3); ++w < R; ) {
            var L = u[w];
            c(L, w, u) && (h.push(L), T.push(w));
          }
          return Rx(u, T), h;
        }
        function Rp(u) {
          return u == null ? u : P$.call(u);
        }
        function Nk(u, c, h) {
          var w = u == null ? 0 : u.length;
          return w ? (h && typeof h != "number" && dr(u, c, h) ? (c = 0, h = w) : (c = c == null ? 0 : Fe(c), h = h === r ? w : Fe(h)), en(u, c, h)) : [];
        }
        function $k(u, c) {
          return Yc(u, c);
        }
        function jk(u, c, h) {
          return vp(u, c, Ie(h, 2));
        }
        function kk(u, c) {
          var h = u == null ? 0 : u.length;
          if (h) {
            var w = Yc(u, c);
            if (w < h && wn(u[w], c))
              return w;
          }
          return -1;
        }
        function Lk(u, c) {
          return Yc(u, c, !0);
        }
        function Bk(u, c, h) {
          return vp(u, c, Ie(h, 2), !0);
        }
        function qk(u, c) {
          var h = u == null ? 0 : u.length;
          if (h) {
            var w = Yc(u, c, !0) - 1;
            if (wn(u[w], c))
              return w;
          }
          return -1;
        }
        function Fk(u) {
          return u && u.length ? Nx(u) : [];
        }
        function Wk(u, c) {
          return u && u.length ? Nx(u, Ie(c, 2)) : [];
        }
        function zk(u) {
          var c = u == null ? 0 : u.length;
          return c ? en(u, 1, c) : [];
        }
        function Uk(u, c, h) {
          return u && u.length ? (c = h || c === r ? 1 : Fe(c), en(u, 0, c < 0 ? 0 : c)) : [];
        }
        function Hk(u, c, h) {
          var w = u == null ? 0 : u.length;
          return w ? (c = h || c === r ? 1 : Fe(c), c = w - c, en(u, c < 0 ? 0 : c, w)) : [];
        }
        function Gk(u, c) {
          return u && u.length ? Xc(u, Ie(c, 3), !1, !0) : [];
        }
        function Kk(u, c) {
          return u && u.length ? Xc(u, Ie(c, 3)) : [];
        }
        var Vk = ze(function(u) {
          return ji(er(u, 1, Rt, !0));
        }), Yk = ze(function(u) {
          var c = tn(u);
          return Rt(c) && (c = r), ji(er(u, 1, Rt, !0), Ie(c, 2));
        }), Xk = ze(function(u) {
          var c = tn(u);
          return c = typeof c == "function" ? c : r, ji(er(u, 1, Rt, !0), r, c);
        });
        function Zk(u) {
          return u && u.length ? ji(u) : [];
        }
        function Jk(u, c) {
          return u && u.length ? ji(u, Ie(c, 2)) : [];
        }
        function Qk(u, c) {
          return c = typeof c == "function" ? c : r, u && u.length ? ji(u, r, c) : [];
        }
        function Dp(u) {
          if (!(u && u.length))
            return [];
          var c = 0;
          return u = Mi(u, function(h) {
            if (Rt(h))
              return c = Ft(h.length, c), !0;
          }), Xd(c, function(h) {
            return bt(u, Kd(h));
          });
        }
        function xw(u, c) {
          if (!(u && u.length))
            return [];
          var h = Dp(u);
          return c == null ? h : bt(h, function(w) {
            return $r(c, r, w);
          });
        }
        var eL = ze(function(u, c) {
          return Rt(u) ? Su(u, c) : [];
        }), tL = ze(function(u) {
          return gp(Mi(u, Rt));
        }), rL = ze(function(u) {
          var c = tn(u);
          return Rt(c) && (c = r), gp(Mi(u, Rt), Ie(c, 2));
        }), nL = ze(function(u) {
          var c = tn(u);
          return c = typeof c == "function" ? c : r, gp(Mi(u, Rt), r, c);
        }), iL = ze(Dp);
        function aL(u, c) {
          return Lx(u || [], c || [], Ou);
        }
        function oL(u, c) {
          return Lx(u || [], c || [], Tu);
        }
        var uL = ze(function(u) {
          var c = u.length, h = c > 1 ? u[c - 1] : r;
          return h = typeof h == "function" ? (u.pop(), h) : r, xw(u, h);
        });
        function ww(u) {
          var c = I(u);
          return c.__chain__ = !0, c;
        }
        function sL(u, c) {
          return c(u), u;
        }
        function al(u, c) {
          return c(u);
        }
        var cL = oi(function(u) {
          var c = u.length, h = c ? u[0] : 0, w = this.__wrapped__, T = function(R) {
            return ip(R, u);
          };
          return c > 1 || this.__actions__.length || !(w instanceof Ke) || !ui(h) ? this.thru(T) : (w = w.slice(h, +h + (c ? 1 : 0)), w.__actions__.push({
            func: al,
            args: [T],
            thisArg: r
          }), new Jr(w, this.__chain__).thru(function(R) {
            return c && !R.length && R.push(r), R;
          }));
        });
        function lL() {
          return ww(this);
        }
        function fL() {
          return new Jr(this.value(), this.__chain__);
        }
        function dL() {
          this.__values__ === r && (this.__values__ = $w(this.value()));
          var u = this.__index__ >= this.__values__.length, c = u ? r : this.__values__[this.__index__++];
          return { done: u, value: c };
        }
        function pL() {
          return this;
        }
        function hL(u) {
          for (var c, h = this; h instanceof Uc; ) {
            var w = hw(h);
            w.__index__ = 0, w.__values__ = r, c ? T.__wrapped__ = w : c = w;
            var T = w;
            h = h.__wrapped__;
          }
          return T.__wrapped__ = u, c;
        }
        function vL() {
          var u = this.__wrapped__;
          if (u instanceof Ke) {
            var c = u;
            return this.__actions__.length && (c = new Ke(this)), c = c.reverse(), c.__actions__.push({
              func: al,
              args: [Rp],
              thisArg: r
            }), new Jr(c, this.__chain__);
          }
          return this.thru(Rp);
        }
        function mL() {
          return kx(this.__wrapped__, this.__actions__);
        }
        var gL = Zc(function(u, c, h) {
          it.call(u, h) ? ++u[h] : ii(u, h, 1);
        });
        function yL(u, c, h) {
          var w = Le(u) ? X1 : sj;
          return h && dr(u, c, h) && (c = r), w(u, Ie(c, 3));
        }
        function bL(u, c) {
          var h = Le(u) ? Mi : xx;
          return h(u, Ie(c, 3));
        }
        var xL = Vx(vw), wL = Vx(mw);
        function _L(u, c) {
          return er(ol(u, c), 1);
        }
        function OL(u, c) {
          return er(ol(u, c), V);
        }
        function SL(u, c, h) {
          return h = h === r ? 1 : Fe(h), er(ol(u, c), h);
        }
        function _w(u, c) {
          var h = Le(u) ? Xr : $i;
          return h(u, Ie(c, 3));
        }
        function Ow(u, c) {
          var h = Le(u) ? zN : bx;
          return h(u, Ie(c, 3));
        }
        var AL = Zc(function(u, c, h) {
          it.call(u, h) ? u[h].push(c) : ii(u, h, [c]);
        });
        function PL(u, c, h, w) {
          u = Pr(u) ? u : uo(u), h = h && !w ? Fe(h) : 0;
          var T = u.length;
          return h < 0 && (h = Ft(T + h, 0)), fl(u) ? h <= T && u.indexOf(c, h) > -1 : !!T && Ya(u, c, h) > -1;
        }
        var TL = ze(function(u, c, h) {
          var w = -1, T = typeof c == "function", R = Pr(u) ? J(u.length) : [];
          return $i(u, function(L) {
            R[++w] = T ? $r(c, L, h) : Au(L, c, h);
          }), R;
        }), EL = Zc(function(u, c, h) {
          ii(u, h, c);
        });
        function ol(u, c) {
          var h = Le(u) ? bt : Px;
          return h(u, Ie(c, 3));
        }
        function CL(u, c, h, w) {
          return u == null ? [] : (Le(c) || (c = c == null ? [] : [c]), h = w ? r : h, Le(h) || (h = h == null ? [] : [h]), Ix(u, c, h));
        }
        var IL = Zc(function(u, c, h) {
          u[h ? 0 : 1].push(c);
        }, function() {
          return [[], []];
        });
        function ML(u, c, h) {
          var w = Le(u) ? Hd : ex, T = arguments.length < 3;
          return w(u, Ie(c, 4), h, T, $i);
        }
        function RL(u, c, h) {
          var w = Le(u) ? UN : ex, T = arguments.length < 3;
          return w(u, Ie(c, 4), h, T, bx);
        }
        function DL(u, c) {
          var h = Le(u) ? Mi : xx;
          return h(u, cl(Ie(c, 3)));
        }
        function NL(u) {
          var c = Le(u) ? vx : Pj;
          return c(u);
        }
        function $L(u, c, h) {
          (h ? dr(u, c, h) : c === r) ? c = 1 : c = Fe(c);
          var w = Le(u) ? nj : Tj;
          return w(u, c);
        }
        function jL(u) {
          var c = Le(u) ? ij : Cj;
          return c(u);
        }
        function kL(u) {
          if (u == null)
            return 0;
          if (Pr(u))
            return fl(u) ? Za(u) : u.length;
          var c = or(u);
          return c == ee || c == at ? u.size : lp(u).length;
        }
        function LL(u, c, h) {
          var w = Le(u) ? Gd : Ij;
          return h && dr(u, c, h) && (c = r), w(u, Ie(c, 3));
        }
        var BL = ze(function(u, c) {
          if (u == null)
            return [];
          var h = c.length;
          return h > 1 && dr(u, c[0], c[1]) ? c = [] : h > 2 && dr(c[0], c[1], c[2]) && (c = [c[0]]), Ix(u, er(c, 1), []);
        }), ul = b$ || function() {
          return Qt.Date.now();
        };
        function qL(u, c) {
          if (typeof c != "function")
            throw new Zr(o);
          return u = Fe(u), function() {
            if (--u < 1)
              return c.apply(this, arguments);
          };
        }
        function Sw(u, c, h) {
          return c = h ? r : c, c = u && c == null ? u.length : c, ai(u, C, r, r, r, r, c);
        }
        function Aw(u, c) {
          var h;
          if (typeof c != "function")
            throw new Zr(o);
          return u = Fe(u), function() {
            return --u > 0 && (h = c.apply(this, arguments)), u <= 1 && (c = r), h;
          };
        }
        var Np = ze(function(u, c, h) {
          var w = y;
          if (h.length) {
            var T = Di(h, ao(Np));
            w |= x;
          }
          return ai(u, w, c, h, T);
        }), Pw = ze(function(u, c, h) {
          var w = y | _;
          if (h.length) {
            var T = Di(h, ao(Pw));
            w |= x;
          }
          return ai(c, w, u, h, T);
        });
        function Tw(u, c, h) {
          c = h ? r : c;
          var w = ai(u, S, r, r, r, r, r, c);
          return w.placeholder = Tw.placeholder, w;
        }
        function Ew(u, c, h) {
          c = h ? r : c;
          var w = ai(u, P, r, r, r, r, r, c);
          return w.placeholder = Ew.placeholder, w;
        }
        function Cw(u, c, h) {
          var w, T, R, L, U, Y, oe = 0, ue = !1, se = !1, me = !0;
          if (typeof u != "function")
            throw new Zr(o);
          c = rn(c) || 0, Ot(h) && (ue = !!h.leading, se = "maxWait" in h, R = se ? Ft(rn(h.maxWait) || 0, c) : R, me = "trailing" in h ? !!h.trailing : me);
          function Pe(Dt) {
            var _n = w, li = T;
            return w = T = r, oe = Dt, L = u.apply(li, _n), L;
          }
          function Me(Dt) {
            return oe = Dt, U = Iu(Ue, c), ue ? Pe(Dt) : L;
          }
          function We(Dt) {
            var _n = Dt - Y, li = Dt - oe, Vw = c - _n;
            return se ? ar(Vw, R - li) : Vw;
          }
          function Re(Dt) {
            var _n = Dt - Y, li = Dt - oe;
            return Y === r || _n >= c || _n < 0 || se && li >= R;
          }
          function Ue() {
            var Dt = ul();
            if (Re(Dt))
              return Ve(Dt);
            U = Iu(Ue, We(Dt));
          }
          function Ve(Dt) {
            return U = r, me && w ? Pe(Dt) : (w = T = r, L);
          }
          function Br() {
            U !== r && Bx(U), oe = 0, w = Y = T = U = r;
          }
          function pr() {
            return U === r ? L : Ve(ul());
          }
          function qr() {
            var Dt = ul(), _n = Re(Dt);
            if (w = arguments, T = this, Y = Dt, _n) {
              if (U === r)
                return Me(Y);
              if (se)
                return Bx(U), U = Iu(Ue, c), Pe(Y);
            }
            return U === r && (U = Iu(Ue, c)), L;
          }
          return qr.cancel = Br, qr.flush = pr, qr;
        }
        var FL = ze(function(u, c) {
          return yx(u, 1, c);
        }), WL = ze(function(u, c, h) {
          return yx(u, rn(c) || 0, h);
        });
        function zL(u) {
          return ai(u, N);
        }
        function sl(u, c) {
          if (typeof u != "function" || c != null && typeof c != "function")
            throw new Zr(o);
          var h = function() {
            var w = arguments, T = c ? c.apply(this, w) : w[0], R = h.cache;
            if (R.has(T))
              return R.get(T);
            var L = u.apply(this, w);
            return h.cache = R.set(T, L) || R, L;
          };
          return h.cache = new (sl.Cache || ni)(), h;
        }
        sl.Cache = ni;
        function cl(u) {
          if (typeof u != "function")
            throw new Zr(o);
          return function() {
            var c = arguments;
            switch (c.length) {
              case 0:
                return !u.call(this);
              case 1:
                return !u.call(this, c[0]);
              case 2:
                return !u.call(this, c[0], c[1]);
              case 3:
                return !u.call(this, c[0], c[1], c[2]);
            }
            return !u.apply(this, c);
          };
        }
        function UL(u) {
          return Aw(2, u);
        }
        var HL = Mj(function(u, c) {
          c = c.length == 1 && Le(c[0]) ? bt(c[0], jr(Ie())) : bt(er(c, 1), jr(Ie()));
          var h = c.length;
          return ze(function(w) {
            for (var T = -1, R = ar(w.length, h); ++T < R; )
              w[T] = c[T].call(this, w[T]);
            return $r(u, this, w);
          });
        }), $p = ze(function(u, c) {
          var h = Di(c, ao($p));
          return ai(u, x, r, c, h);
        }), Iw = ze(function(u, c) {
          var h = Di(c, ao(Iw));
          return ai(u, A, r, c, h);
        }), GL = oi(function(u, c) {
          return ai(u, M, r, r, r, c);
        });
        function KL(u, c) {
          if (typeof u != "function")
            throw new Zr(o);
          return c = c === r ? c : Fe(c), ze(u, c);
        }
        function VL(u, c) {
          if (typeof u != "function")
            throw new Zr(o);
          return c = c == null ? 0 : Ft(Fe(c), 0), ze(function(h) {
            var w = h[c], T = Li(h, 0, c);
            return w && Ri(T, w), $r(u, this, T);
          });
        }
        function YL(u, c, h) {
          var w = !0, T = !0;
          if (typeof u != "function")
            throw new Zr(o);
          return Ot(h) && (w = "leading" in h ? !!h.leading : w, T = "trailing" in h ? !!h.trailing : T), Cw(u, c, {
            leading: w,
            maxWait: c,
            trailing: T
          });
        }
        function XL(u) {
          return Sw(u, 1);
        }
        function ZL(u, c) {
          return $p(bp(c), u);
        }
        function JL() {
          if (!arguments.length)
            return [];
          var u = arguments[0];
          return Le(u) ? u : [u];
        }
        function QL(u) {
          return Qr(u, m);
        }
        function e3(u, c) {
          return c = typeof c == "function" ? c : r, Qr(u, m, c);
        }
        function t3(u) {
          return Qr(u, d | m);
        }
        function r3(u, c) {
          return c = typeof c == "function" ? c : r, Qr(u, d | m, c);
        }
        function n3(u, c) {
          return c == null || gx(u, c, Xt(c));
        }
        function wn(u, c) {
          return u === c || u !== u && c !== c;
        }
        var i3 = tl(up), a3 = tl(function(u, c) {
          return u >= c;
        }), ha = Ox(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ox : function(u) {
          return Tt(u) && it.call(u, "callee") && !cx.call(u, "callee");
        }, Le = J.isArray, o3 = U1 ? jr(U1) : hj;
        function Pr(u) {
          return u != null && ll(u.length) && !si(u);
        }
        function Rt(u) {
          return Tt(u) && Pr(u);
        }
        function u3(u) {
          return u === !0 || u === !1 || Tt(u) && fr(u) == ge;
        }
        var Bi = w$ || Gp, s3 = H1 ? jr(H1) : vj;
        function c3(u) {
          return Tt(u) && u.nodeType === 1 && !Mu(u);
        }
        function l3(u) {
          if (u == null)
            return !0;
          if (Pr(u) && (Le(u) || typeof u == "string" || typeof u.splice == "function" || Bi(u) || oo(u) || ha(u)))
            return !u.length;
          var c = or(u);
          if (c == ee || c == at)
            return !u.size;
          if (Cu(u))
            return !lp(u).length;
          for (var h in u)
            if (it.call(u, h))
              return !1;
          return !0;
        }
        function f3(u, c) {
          return Pu(u, c);
        }
        function d3(u, c, h) {
          h = typeof h == "function" ? h : r;
          var w = h ? h(u, c) : r;
          return w === r ? Pu(u, c, r, h) : !!w;
        }
        function jp(u) {
          if (!Tt(u))
            return !1;
          var c = fr(u);
          return c == he || c == fe || typeof u.message == "string" && typeof u.name == "string" && !Mu(u);
        }
        function p3(u) {
          return typeof u == "number" && fx(u);
        }
        function si(u) {
          if (!Ot(u))
            return !1;
          var c = fr(u);
          return c == B || c == xe || c == Oe || c == Pt;
        }
        function Mw(u) {
          return typeof u == "number" && u == Fe(u);
        }
        function ll(u) {
          return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Z;
        }
        function Ot(u) {
          var c = typeof u;
          return u != null && (c == "object" || c == "function");
        }
        function Tt(u) {
          return u != null && typeof u == "object";
        }
        var Rw = G1 ? jr(G1) : gj;
        function h3(u, c) {
          return u === c || cp(u, c, Pp(c));
        }
        function v3(u, c, h) {
          return h = typeof h == "function" ? h : r, cp(u, c, Pp(c), h);
        }
        function m3(u) {
          return Dw(u) && u != +u;
        }
        function g3(u) {
          if (ek(u))
            throw new ke(a);
          return Sx(u);
        }
        function y3(u) {
          return u === null;
        }
        function b3(u) {
          return u == null;
        }
        function Dw(u) {
          return typeof u == "number" || Tt(u) && fr(u) == Ce;
        }
        function Mu(u) {
          if (!Tt(u) || fr(u) != je)
            return !1;
          var c = kc(u);
          if (c === null)
            return !0;
          var h = it.call(c, "constructor") && c.constructor;
          return typeof h == "function" && h instanceof h && Dc.call(h) == v$;
        }
        var kp = K1 ? jr(K1) : yj;
        function x3(u) {
          return Mw(u) && u >= -9007199254740991 && u <= Z;
        }
        var Nw = V1 ? jr(V1) : bj;
        function fl(u) {
          return typeof u == "string" || !Le(u) && Tt(u) && fr(u) == Mt;
        }
        function Lr(u) {
          return typeof u == "symbol" || Tt(u) && fr(u) == nr;
        }
        var oo = Y1 ? jr(Y1) : xj;
        function w3(u) {
          return u === r;
        }
        function _3(u) {
          return Tt(u) && or(u) == Lt;
        }
        function O3(u) {
          return Tt(u) && fr(u) == Dr;
        }
        var S3 = tl(fp), A3 = tl(function(u, c) {
          return u <= c;
        });
        function $w(u) {
          if (!u)
            return [];
          if (Pr(u))
            return fl(u) ? bn(u) : Ar(u);
          if (yu && u[yu])
            return n$(u[yu]());
          var c = or(u), h = c == ee ? Jd : c == at ? Ic : uo;
          return h(u);
        }
        function ci(u) {
          if (!u)
            return u === 0 ? u : 0;
          if (u = rn(u), u === V || u === -1 / 0) {
            var c = u < 0 ? -1 : 1;
            return c * Q;
          }
          return u === u ? u : 0;
        }
        function Fe(u) {
          var c = ci(u), h = c % 1;
          return c === c ? h ? c - h : c : 0;
        }
        function jw(u) {
          return u ? la(Fe(u), 0, X) : 0;
        }
        function rn(u) {
          if (typeof u == "number")
            return u;
          if (Lr(u))
            return G;
          if (Ot(u)) {
            var c = typeof u.valueOf == "function" ? u.valueOf() : u;
            u = Ot(c) ? c + "" : c;
          }
          if (typeof u != "string")
            return u === 0 ? u : +u;
          u = tx(u);
          var h = jd.test(u);
          return h || H.test(u) ? qN(u.slice(2), h ? 2 : 8) : Ac.test(u) ? G : +u;
        }
        function kw(u) {
          return Bn(u, Tr(u));
        }
        function P3(u) {
          return u ? la(Fe(u), -9007199254740991, Z) : u === 0 ? u : 0;
        }
        function Ze(u) {
          return u == null ? "" : kr(u);
        }
        var T3 = no(function(u, c) {
          if (Cu(c) || Pr(c)) {
            Bn(c, Xt(c), u);
            return;
          }
          for (var h in c)
            it.call(c, h) && Ou(u, h, c[h]);
        }), Lw = no(function(u, c) {
          Bn(c, Tr(c), u);
        }), dl = no(function(u, c, h, w) {
          Bn(c, Tr(c), u, w);
        }), E3 = no(function(u, c, h, w) {
          Bn(c, Xt(c), u, w);
        }), C3 = oi(ip);
        function I3(u, c) {
          var h = ro(u);
          return c == null ? h : mx(h, c);
        }
        var M3 = ze(function(u, c) {
          u = st(u);
          var h = -1, w = c.length, T = w > 2 ? c[2] : r;
          for (T && dr(c[0], c[1], T) && (w = 1); ++h < w; )
            for (var R = c[h], L = Tr(R), U = -1, Y = L.length; ++U < Y; ) {
              var oe = L[U], ue = u[oe];
              (ue === r || wn(ue, Qa[oe]) && !it.call(u, oe)) && (u[oe] = R[oe]);
            }
          return u;
        }), R3 = ze(function(u) {
          return u.push(r, tw), $r(Bw, r, u);
        });
        function D3(u, c) {
          return Z1(u, Ie(c, 3), Ln);
        }
        function N3(u, c) {
          return Z1(u, Ie(c, 3), op);
        }
        function $3(u, c) {
          return u == null ? u : ap(u, Ie(c, 3), Tr);
        }
        function j3(u, c) {
          return u == null ? u : wx(u, Ie(c, 3), Tr);
        }
        function k3(u, c) {
          return u && Ln(u, Ie(c, 3));
        }
        function L3(u, c) {
          return u && op(u, Ie(c, 3));
        }
        function B3(u) {
          return u == null ? [] : Kc(u, Xt(u));
        }
        function q3(u) {
          return u == null ? [] : Kc(u, Tr(u));
        }
        function Lp(u, c, h) {
          var w = u == null ? r : fa(u, c);
          return w === r ? h : w;
        }
        function F3(u, c) {
          return u != null && iw(u, c, lj);
        }
        function Bp(u, c) {
          return u != null && iw(u, c, fj);
        }
        var W3 = Xx(function(u, c, h) {
          c != null && typeof c.toString != "function" && (c = Nc.call(c)), u[c] = h;
        }, Fp(Er)), z3 = Xx(function(u, c, h) {
          c != null && typeof c.toString != "function" && (c = Nc.call(c)), it.call(u, c) ? u[c].push(h) : u[c] = [h];
        }, Ie), U3 = ze(Au);
        function Xt(u) {
          return Pr(u) ? hx(u) : lp(u);
        }
        function Tr(u) {
          return Pr(u) ? hx(u, !0) : wj(u);
        }
        function H3(u, c) {
          var h = {};
          return c = Ie(c, 3), Ln(u, function(w, T, R) {
            ii(h, c(w, T, R), w);
          }), h;
        }
        function G3(u, c) {
          var h = {};
          return c = Ie(c, 3), Ln(u, function(w, T, R) {
            ii(h, T, c(w, T, R));
          }), h;
        }
        var K3 = no(function(u, c, h) {
          Vc(u, c, h);
        }), Bw = no(function(u, c, h, w) {
          Vc(u, c, h, w);
        }), V3 = oi(function(u, c) {
          var h = {};
          if (u == null)
            return h;
          var w = !1;
          c = bt(c, function(R) {
            return R = ki(R, u), w || (w = R.length > 1), R;
          }), Bn(u, Sp(u), h), w && (h = Qr(h, d | v | m, Wj));
          for (var T = c.length; T--; )
            mp(h, c[T]);
          return h;
        });
        function Y3(u, c) {
          return qw(u, cl(Ie(c)));
        }
        var X3 = oi(function(u, c) {
          return u == null ? {} : Oj(u, c);
        });
        function qw(u, c) {
          if (u == null)
            return {};
          var h = bt(Sp(u), function(w) {
            return [w];
          });
          return c = Ie(c), Mx(u, h, function(w, T) {
            return c(w, T[0]);
          });
        }
        function Z3(u, c, h) {
          c = ki(c, u);
          var w = -1, T = c.length;
          for (T || (T = 1, u = r); ++w < T; ) {
            var R = u == null ? r : u[qn(c[w])];
            R === r && (w = T, R = h), u = si(R) ? R.call(u) : R;
          }
          return u;
        }
        function J3(u, c, h) {
          return u == null ? u : Tu(u, c, h);
        }
        function Q3(u, c, h, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : Tu(u, c, h, w);
        }
        var Fw = Qx(Xt), Ww = Qx(Tr);
        function eB(u, c, h) {
          var w = Le(u), T = w || Bi(u) || oo(u);
          if (c = Ie(c, 4), h == null) {
            var R = u && u.constructor;
            T ? h = w ? new R() : [] : Ot(u) ? h = si(R) ? ro(kc(u)) : {} : h = {};
          }
          return (T ? Xr : Ln)(u, function(L, U, Y) {
            return c(h, L, U, Y);
          }), h;
        }
        function tB(u, c) {
          return u == null ? !0 : mp(u, c);
        }
        function rB(u, c, h) {
          return u == null ? u : jx(u, c, bp(h));
        }
        function nB(u, c, h, w) {
          return w = typeof w == "function" ? w : r, u == null ? u : jx(u, c, bp(h), w);
        }
        function uo(u) {
          return u == null ? [] : Zd(u, Xt(u));
        }
        function iB(u) {
          return u == null ? [] : Zd(u, Tr(u));
        }
        function aB(u, c, h) {
          return h === r && (h = c, c = r), h !== r && (h = rn(h), h = h === h ? h : 0), c !== r && (c = rn(c), c = c === c ? c : 0), la(rn(u), c, h);
        }
        function oB(u, c, h) {
          return c = ci(c), h === r ? (h = c, c = 0) : h = ci(h), u = rn(u), dj(u, c, h);
        }
        function uB(u, c, h) {
          if (h && typeof h != "boolean" && dr(u, c, h) && (c = h = r), h === r && (typeof c == "boolean" ? (h = c, c = r) : typeof u == "boolean" && (h = u, u = r)), u === r && c === r ? (u = 0, c = 1) : (u = ci(u), c === r ? (c = u, u = 0) : c = ci(c)), u > c) {
            var w = u;
            u = c, c = w;
          }
          if (h || u % 1 || c % 1) {
            var T = dx();
            return ar(u + T * (c - u + BN("1e-" + ((T + "").length - 1))), c);
          }
          return pp(u, c);
        }
        var sB = io(function(u, c, h) {
          return c = c.toLowerCase(), u + (h ? zw(c) : c);
        });
        function zw(u) {
          return qp(Ze(u).toLowerCase());
        }
        function Uw(u) {
          return u = Ze(u), u && u.replace(Ae, JN).replace(CN, "");
        }
        function cB(u, c, h) {
          u = Ze(u), c = kr(c);
          var w = u.length;
          h = h === r ? w : la(Fe(h), 0, w);
          var T = h;
          return h -= c.length, h >= 0 && u.slice(h, T) == c;
        }
        function lB(u) {
          return u = Ze(u), u && du.test(u) ? u.replace(vn, QN) : u;
        }
        function fB(u) {
          return u = Ze(u), u && $d.test(u) ? u.replace(Ga, "\\$&") : u;
        }
        var dB = io(function(u, c, h) {
          return u + (h ? "-" : "") + c.toLowerCase();
        }), pB = io(function(u, c, h) {
          return u + (h ? " " : "") + c.toLowerCase();
        }), hB = Kx("toLowerCase");
        function vB(u, c, h) {
          u = Ze(u), c = Fe(c);
          var w = c ? Za(u) : 0;
          if (!c || w >= c)
            return u;
          var T = (c - w) / 2;
          return el(Fc(T), h) + u + el(qc(T), h);
        }
        function mB(u, c, h) {
          u = Ze(u), c = Fe(c);
          var w = c ? Za(u) : 0;
          return c && w < c ? u + el(c - w, h) : u;
        }
        function gB(u, c, h) {
          u = Ze(u), c = Fe(c);
          var w = c ? Za(u) : 0;
          return c && w < c ? el(c - w, h) + u : u;
        }
        function yB(u, c, h) {
          return h || c == null ? c = 0 : c && (c = +c), A$(Ze(u).replace(Sr, ""), c || 0);
        }
        function bB(u, c, h) {
          return (h ? dr(u, c, h) : c === r) ? c = 1 : c = Fe(c), hp(Ze(u), c);
        }
        function xB() {
          var u = arguments, c = Ze(u[0]);
          return u.length < 3 ? c : c.replace(u[1], u[2]);
        }
        var wB = io(function(u, c, h) {
          return u + (h ? "_" : "") + c.toLowerCase();
        });
        function _B(u, c, h) {
          return h && typeof h != "number" && dr(u, c, h) && (c = h = r), h = h === r ? X : h >>> 0, h ? (u = Ze(u), u && (typeof c == "string" || c != null && !kp(c)) && (c = kr(c), !c && Xa(u)) ? Li(bn(u), 0, h) : u.split(c, h)) : [];
        }
        var OB = io(function(u, c, h) {
          return u + (h ? " " : "") + qp(c);
        });
        function SB(u, c, h) {
          return u = Ze(u), h = h == null ? 0 : la(Fe(h), 0, u.length), c = kr(c), u.slice(h, h + c.length) == c;
        }
        function AB(u, c, h) {
          var w = I.templateSettings;
          h && dr(u, c, h) && (c = r), u = Ze(u), c = dl({}, c, w, ew);
          var T = dl({}, c.imports, w.imports, ew), R = Xt(T), L = Zd(T, R), U, Y, oe = 0, ue = c.interpolate || nt, se = "__p += '", me = Qd(
            (c.escape || nt).source + "|" + ue.source + "|" + (ue === Ha ? Sc : nt).source + "|" + (c.evaluate || nt).source + "|$",
            "g"
          ), Pe = "//# sourceURL=" + (it.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++NN + "]") + `
`;
          u.replace(me, function(Re, Ue, Ve, Br, pr, qr) {
            return Ve || (Ve = Br), se += u.slice(oe, qr).replace(Yt, e$), Ue && (U = !0, se += `' +
__e(` + Ue + `) +
'`), pr && (Y = !0, se += `';
` + pr + `;
__p += '`), Ve && (se += `' +
((__t = (` + Ve + `)) == null ? '' : __t) +
'`), oe = qr + Re.length, Re;
          }), se += `';
`;
          var Me = it.call(c, "variable") && c.variable;
          if (!Me)
            se = `with (obj) {
` + se + `
}
`;
          else if (gn.test(Me))
            throw new ke(s);
          se = (Y ? se.replace(fu, "") : se).replace(ti, "$1").replace(Ci, "$1;"), se = "function(" + (Me || "obj") + `) {
` + (Me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (U ? ", __e = _.escape" : "") + (Y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + se + `return __p
}`;
          var We = Gw(function() {
            return Xe(R, Pe + "return " + se).apply(r, L);
          });
          if (We.source = se, jp(We))
            throw We;
          return We;
        }
        function PB(u) {
          return Ze(u).toLowerCase();
        }
        function TB(u) {
          return Ze(u).toUpperCase();
        }
        function EB(u, c, h) {
          if (u = Ze(u), u && (h || c === r))
            return tx(u);
          if (!u || !(c = kr(c)))
            return u;
          var w = bn(u), T = bn(c), R = rx(w, T), L = nx(w, T) + 1;
          return Li(w, R, L).join("");
        }
        function CB(u, c, h) {
          if (u = Ze(u), u && (h || c === r))
            return u.slice(0, ax(u) + 1);
          if (!u || !(c = kr(c)))
            return u;
          var w = bn(u), T = nx(w, bn(c)) + 1;
          return Li(w, 0, T).join("");
        }
        function IB(u, c, h) {
          if (u = Ze(u), u && (h || c === r))
            return u.replace(Sr, "");
          if (!u || !(c = kr(c)))
            return u;
          var w = bn(u), T = rx(w, bn(c));
          return Li(w, T).join("");
        }
        function MB(u, c) {
          var h = z, w = D;
          if (Ot(c)) {
            var T = "separator" in c ? c.separator : T;
            h = "length" in c ? Fe(c.length) : h, w = "omission" in c ? kr(c.omission) : w;
          }
          u = Ze(u);
          var R = u.length;
          if (Xa(u)) {
            var L = bn(u);
            R = L.length;
          }
          if (h >= R)
            return u;
          var U = h - Za(w);
          if (U < 1)
            return w;
          var Y = L ? Li(L, 0, U).join("") : u.slice(0, U);
          if (T === r)
            return Y + w;
          if (L && (U += Y.length - U), kp(T)) {
            if (u.slice(U).search(T)) {
              var oe, ue = Y;
              for (T.global || (T = Qd(T.source, Ze(vu.exec(T)) + "g")), T.lastIndex = 0; oe = T.exec(ue); )
                var se = oe.index;
              Y = Y.slice(0, se === r ? U : se);
            }
          } else if (u.indexOf(kr(T), U) != U) {
            var me = Y.lastIndexOf(T);
            me > -1 && (Y = Y.slice(0, me));
          }
          return Y + w;
        }
        function RB(u) {
          return u = Ze(u), u && Ua.test(u) ? u.replace(ia, u$) : u;
        }
        var DB = io(function(u, c, h) {
          return u + (h ? " " : "") + c.toUpperCase();
        }), qp = Kx("toUpperCase");
        function Hw(u, c, h) {
          return u = Ze(u), c = h ? r : c, c === r ? r$(u) ? l$(u) : KN(u) : u.match(c) || [];
        }
        var Gw = ze(function(u, c) {
          try {
            return $r(u, r, c);
          } catch (h) {
            return jp(h) ? h : new ke(h);
          }
        }), NB = oi(function(u, c) {
          return Xr(c, function(h) {
            h = qn(h), ii(u, h, Np(u[h], u));
          }), u;
        });
        function $B(u) {
          var c = u == null ? 0 : u.length, h = Ie();
          return u = c ? bt(u, function(w) {
            if (typeof w[1] != "function")
              throw new Zr(o);
            return [h(w[0]), w[1]];
          }) : [], ze(function(w) {
            for (var T = -1; ++T < c; ) {
              var R = u[T];
              if ($r(R[0], this, w))
                return $r(R[1], this, w);
            }
          });
        }
        function jB(u) {
          return uj(Qr(u, d));
        }
        function Fp(u) {
          return function() {
            return u;
          };
        }
        function kB(u, c) {
          return u == null || u !== u ? c : u;
        }
        var LB = Yx(), BB = Yx(!0);
        function Er(u) {
          return u;
        }
        function Wp(u) {
          return Ax(typeof u == "function" ? u : Qr(u, d));
        }
        function qB(u) {
          return Tx(Qr(u, d));
        }
        function FB(u, c) {
          return Ex(u, Qr(c, d));
        }
        var WB = ze(function(u, c) {
          return function(h) {
            return Au(h, u, c);
          };
        }), zB = ze(function(u, c) {
          return function(h) {
            return Au(u, h, c);
          };
        });
        function zp(u, c, h) {
          var w = Xt(c), T = Kc(c, w);
          h == null && !(Ot(c) && (T.length || !w.length)) && (h = c, c = u, u = this, T = Kc(c, Xt(c)));
          var R = !(Ot(h) && "chain" in h) || !!h.chain, L = si(u);
          return Xr(T, function(U) {
            var Y = c[U];
            u[U] = Y, L && (u.prototype[U] = function() {
              var oe = this.__chain__;
              if (R || oe) {
                var ue = u(this.__wrapped__), se = ue.__actions__ = Ar(this.__actions__);
                return se.push({ func: Y, args: arguments, thisArg: u }), ue.__chain__ = oe, ue;
              }
              return Y.apply(u, Ri([this.value()], arguments));
            });
          }), u;
        }
        function UB() {
          return Qt._ === this && (Qt._ = m$), this;
        }
        function Up() {
        }
        function HB(u) {
          return u = Fe(u), ze(function(c) {
            return Cx(c, u);
          });
        }
        var GB = wp(bt), KB = wp(X1), VB = wp(Gd);
        function Kw(u) {
          return Ep(u) ? Kd(qn(u)) : Sj(u);
        }
        function YB(u) {
          return function(c) {
            return u == null ? r : fa(u, c);
          };
        }
        var XB = Zx(), ZB = Zx(!0);
        function Hp() {
          return [];
        }
        function Gp() {
          return !1;
        }
        function JB() {
          return {};
        }
        function QB() {
          return "";
        }
        function eq() {
          return !0;
        }
        function tq(u, c) {
          if (u = Fe(u), u < 1 || u > Z)
            return [];
          var h = X, w = ar(u, X);
          c = Ie(c), u -= X;
          for (var T = Xd(w, c); ++h < u; )
            c(h);
          return T;
        }
        function rq(u) {
          return Le(u) ? bt(u, qn) : Lr(u) ? [u] : Ar(pw(Ze(u)));
        }
        function nq(u) {
          var c = ++h$;
          return Ze(u) + c;
        }
        var iq = Qc(function(u, c) {
          return u + c;
        }, 0), aq = _p("ceil"), oq = Qc(function(u, c) {
          return u / c;
        }, 1), uq = _p("floor");
        function sq(u) {
          return u && u.length ? Gc(u, Er, up) : r;
        }
        function cq(u, c) {
          return u && u.length ? Gc(u, Ie(c, 2), up) : r;
        }
        function lq(u) {
          return Q1(u, Er);
        }
        function fq(u, c) {
          return Q1(u, Ie(c, 2));
        }
        function dq(u) {
          return u && u.length ? Gc(u, Er, fp) : r;
        }
        function pq(u, c) {
          return u && u.length ? Gc(u, Ie(c, 2), fp) : r;
        }
        var hq = Qc(function(u, c) {
          return u * c;
        }, 1), vq = _p("round"), mq = Qc(function(u, c) {
          return u - c;
        }, 0);
        function gq(u) {
          return u && u.length ? Yd(u, Er) : 0;
        }
        function yq(u, c) {
          return u && u.length ? Yd(u, Ie(c, 2)) : 0;
        }
        return I.after = qL, I.ary = Sw, I.assign = T3, I.assignIn = Lw, I.assignInWith = dl, I.assignWith = E3, I.at = C3, I.before = Aw, I.bind = Np, I.bindAll = NB, I.bindKey = Pw, I.castArray = JL, I.chain = ww, I.chunk = uk, I.compact = sk, I.concat = ck, I.cond = $B, I.conforms = jB, I.constant = Fp, I.countBy = gL, I.create = I3, I.curry = Tw, I.curryRight = Ew, I.debounce = Cw, I.defaults = M3, I.defaultsDeep = R3, I.defer = FL, I.delay = WL, I.difference = lk, I.differenceBy = fk, I.differenceWith = dk, I.drop = pk, I.dropRight = hk, I.dropRightWhile = vk, I.dropWhile = mk, I.fill = gk, I.filter = bL, I.flatMap = _L, I.flatMapDeep = OL, I.flatMapDepth = SL, I.flatten = gw, I.flattenDeep = yk, I.flattenDepth = bk, I.flip = zL, I.flow = LB, I.flowRight = BB, I.fromPairs = xk, I.functions = B3, I.functionsIn = q3, I.groupBy = AL, I.initial = _k, I.intersection = Ok, I.intersectionBy = Sk, I.intersectionWith = Ak, I.invert = W3, I.invertBy = z3, I.invokeMap = TL, I.iteratee = Wp, I.keyBy = EL, I.keys = Xt, I.keysIn = Tr, I.map = ol, I.mapKeys = H3, I.mapValues = G3, I.matches = qB, I.matchesProperty = FB, I.memoize = sl, I.merge = K3, I.mergeWith = Bw, I.method = WB, I.methodOf = zB, I.mixin = zp, I.negate = cl, I.nthArg = HB, I.omit = V3, I.omitBy = Y3, I.once = UL, I.orderBy = CL, I.over = GB, I.overArgs = HL, I.overEvery = KB, I.overSome = VB, I.partial = $p, I.partialRight = Iw, I.partition = IL, I.pick = X3, I.pickBy = qw, I.property = Kw, I.propertyOf = YB, I.pull = Ck, I.pullAll = bw, I.pullAllBy = Ik, I.pullAllWith = Mk, I.pullAt = Rk, I.range = XB, I.rangeRight = ZB, I.rearg = GL, I.reject = DL, I.remove = Dk, I.rest = KL, I.reverse = Rp, I.sampleSize = $L, I.set = J3, I.setWith = Q3, I.shuffle = jL, I.slice = Nk, I.sortBy = BL, I.sortedUniq = Fk, I.sortedUniqBy = Wk, I.split = _B, I.spread = VL, I.tail = zk, I.take = Uk, I.takeRight = Hk, I.takeRightWhile = Gk, I.takeWhile = Kk, I.tap = sL, I.throttle = YL, I.thru = al, I.toArray = $w, I.toPairs = Fw, I.toPairsIn = Ww, I.toPath = rq, I.toPlainObject = kw, I.transform = eB, I.unary = XL, I.union = Vk, I.unionBy = Yk, I.unionWith = Xk, I.uniq = Zk, I.uniqBy = Jk, I.uniqWith = Qk, I.unset = tB, I.unzip = Dp, I.unzipWith = xw, I.update = rB, I.updateWith = nB, I.values = uo, I.valuesIn = iB, I.without = eL, I.words = Hw, I.wrap = ZL, I.xor = tL, I.xorBy = rL, I.xorWith = nL, I.zip = iL, I.zipObject = aL, I.zipObjectDeep = oL, I.zipWith = uL, I.entries = Fw, I.entriesIn = Ww, I.extend = Lw, I.extendWith = dl, zp(I, I), I.add = iq, I.attempt = Gw, I.camelCase = sB, I.capitalize = zw, I.ceil = aq, I.clamp = aB, I.clone = QL, I.cloneDeep = t3, I.cloneDeepWith = r3, I.cloneWith = e3, I.conformsTo = n3, I.deburr = Uw, I.defaultTo = kB, I.divide = oq, I.endsWith = cB, I.eq = wn, I.escape = lB, I.escapeRegExp = fB, I.every = yL, I.find = xL, I.findIndex = vw, I.findKey = D3, I.findLast = wL, I.findLastIndex = mw, I.findLastKey = N3, I.floor = uq, I.forEach = _w, I.forEachRight = Ow, I.forIn = $3, I.forInRight = j3, I.forOwn = k3, I.forOwnRight = L3, I.get = Lp, I.gt = i3, I.gte = a3, I.has = F3, I.hasIn = Bp, I.head = yw, I.identity = Er, I.includes = PL, I.indexOf = wk, I.inRange = oB, I.invoke = U3, I.isArguments = ha, I.isArray = Le, I.isArrayBuffer = o3, I.isArrayLike = Pr, I.isArrayLikeObject = Rt, I.isBoolean = u3, I.isBuffer = Bi, I.isDate = s3, I.isElement = c3, I.isEmpty = l3, I.isEqual = f3, I.isEqualWith = d3, I.isError = jp, I.isFinite = p3, I.isFunction = si, I.isInteger = Mw, I.isLength = ll, I.isMap = Rw, I.isMatch = h3, I.isMatchWith = v3, I.isNaN = m3, I.isNative = g3, I.isNil = b3, I.isNull = y3, I.isNumber = Dw, I.isObject = Ot, I.isObjectLike = Tt, I.isPlainObject = Mu, I.isRegExp = kp, I.isSafeInteger = x3, I.isSet = Nw, I.isString = fl, I.isSymbol = Lr, I.isTypedArray = oo, I.isUndefined = w3, I.isWeakMap = _3, I.isWeakSet = O3, I.join = Pk, I.kebabCase = dB, I.last = tn, I.lastIndexOf = Tk, I.lowerCase = pB, I.lowerFirst = hB, I.lt = S3, I.lte = A3, I.max = sq, I.maxBy = cq, I.mean = lq, I.meanBy = fq, I.min = dq, I.minBy = pq, I.stubArray = Hp, I.stubFalse = Gp, I.stubObject = JB, I.stubString = QB, I.stubTrue = eq, I.multiply = hq, I.nth = Ek, I.noConflict = UB, I.noop = Up, I.now = ul, I.pad = vB, I.padEnd = mB, I.padStart = gB, I.parseInt = yB, I.random = uB, I.reduce = ML, I.reduceRight = RL, I.repeat = bB, I.replace = xB, I.result = Z3, I.round = vq, I.runInContext = K, I.sample = NL, I.size = kL, I.snakeCase = wB, I.some = LL, I.sortedIndex = $k, I.sortedIndexBy = jk, I.sortedIndexOf = kk, I.sortedLastIndex = Lk, I.sortedLastIndexBy = Bk, I.sortedLastIndexOf = qk, I.startCase = OB, I.startsWith = SB, I.subtract = mq, I.sum = gq, I.sumBy = yq, I.template = AB, I.times = tq, I.toFinite = ci, I.toInteger = Fe, I.toLength = jw, I.toLower = PB, I.toNumber = rn, I.toSafeInteger = P3, I.toString = Ze, I.toUpper = TB, I.trim = EB, I.trimEnd = CB, I.trimStart = IB, I.truncate = MB, I.unescape = RB, I.uniqueId = nq, I.upperCase = DB, I.upperFirst = qp, I.each = _w, I.eachRight = Ow, I.first = yw, zp(I, function() {
          var u = {};
          return Ln(I, function(c, h) {
            it.call(I.prototype, h) || (u[h] = c);
          }), u;
        }(), { chain: !1 }), I.VERSION = n, Xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
          I[u].placeholder = I;
        }), Xr(["drop", "take"], function(u, c) {
          Ke.prototype[u] = function(h) {
            h = h === r ? 1 : Ft(Fe(h), 0);
            var w = this.__filtered__ && !c ? new Ke(this) : this.clone();
            return w.__filtered__ ? w.__takeCount__ = ar(h, w.__takeCount__) : w.__views__.push({
              size: ar(h, X),
              type: u + (w.__dir__ < 0 ? "Right" : "")
            }), w;
          }, Ke.prototype[u + "Right"] = function(h) {
            return this.reverse()[u](h).reverse();
          };
        }), Xr(["filter", "map", "takeWhile"], function(u, c) {
          var h = c + 1, w = h == $ || h == F;
          Ke.prototype[u] = function(T) {
            var R = this.clone();
            return R.__iteratees__.push({
              iteratee: Ie(T, 3),
              type: h
            }), R.__filtered__ = R.__filtered__ || w, R;
          };
        }), Xr(["head", "last"], function(u, c) {
          var h = "take" + (c ? "Right" : "");
          Ke.prototype[u] = function() {
            return this[h](1).value()[0];
          };
        }), Xr(["initial", "tail"], function(u, c) {
          var h = "drop" + (c ? "" : "Right");
          Ke.prototype[u] = function() {
            return this.__filtered__ ? new Ke(this) : this[h](1);
          };
        }), Ke.prototype.compact = function() {
          return this.filter(Er);
        }, Ke.prototype.find = function(u) {
          return this.filter(u).head();
        }, Ke.prototype.findLast = function(u) {
          return this.reverse().find(u);
        }, Ke.prototype.invokeMap = ze(function(u, c) {
          return typeof u == "function" ? new Ke(this) : this.map(function(h) {
            return Au(h, u, c);
          });
        }), Ke.prototype.reject = function(u) {
          return this.filter(cl(Ie(u)));
        }, Ke.prototype.slice = function(u, c) {
          u = Fe(u);
          var h = this;
          return h.__filtered__ && (u > 0 || c < 0) ? new Ke(h) : (u < 0 ? h = h.takeRight(-u) : u && (h = h.drop(u)), c !== r && (c = Fe(c), h = c < 0 ? h.dropRight(-c) : h.take(c - u)), h);
        }, Ke.prototype.takeRightWhile = function(u) {
          return this.reverse().takeWhile(u).reverse();
        }, Ke.prototype.toArray = function() {
          return this.take(X);
        }, Ln(Ke.prototype, function(u, c) {
          var h = /^(?:filter|find|map|reject)|While$/.test(c), w = /^(?:head|last)$/.test(c), T = I[w ? "take" + (c == "last" ? "Right" : "") : c], R = w || /^find/.test(c);
          T && (I.prototype[c] = function() {
            var L = this.__wrapped__, U = w ? [1] : arguments, Y = L instanceof Ke, oe = U[0], ue = Y || Le(L), se = function(Ue) {
              var Ve = T.apply(I, Ri([Ue], U));
              return w && me ? Ve[0] : Ve;
            };
            ue && h && typeof oe == "function" && oe.length != 1 && (Y = ue = !1);
            var me = this.__chain__, Pe = !!this.__actions__.length, Me = R && !me, We = Y && !Pe;
            if (!R && ue) {
              L = We ? L : new Ke(this);
              var Re = u.apply(L, U);
              return Re.__actions__.push({ func: al, args: [se], thisArg: r }), new Jr(Re, me);
            }
            return Me && We ? u.apply(this, U) : (Re = this.thru(se), Me ? w ? Re.value()[0] : Re.value() : Re);
          });
        }), Xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(u) {
          var c = Mc[u], h = /^(?:push|sort|unshift)$/.test(u) ? "tap" : "thru", w = /^(?:pop|shift)$/.test(u);
          I.prototype[u] = function() {
            var T = arguments;
            if (w && !this.__chain__) {
              var R = this.value();
              return c.apply(Le(R) ? R : [], T);
            }
            return this[h](function(L) {
              return c.apply(Le(L) ? L : [], T);
            });
          };
        }), Ln(Ke.prototype, function(u, c) {
          var h = I[c];
          if (h) {
            var w = h.name + "";
            it.call(to, w) || (to[w] = []), to[w].push({ name: c, func: h });
          }
        }), to[Jc(r, _).name] = [{
          name: "wrapper",
          func: r
        }], Ke.prototype.clone = R$, Ke.prototype.reverse = D$, Ke.prototype.value = N$, I.prototype.at = cL, I.prototype.chain = lL, I.prototype.commit = fL, I.prototype.next = dL, I.prototype.plant = hL, I.prototype.reverse = vL, I.prototype.toJSON = I.prototype.valueOf = I.prototype.value = mL, I.prototype.first = I.prototype.head, yu && (I.prototype[yu] = pL), I;
      }, Ja = f$();
      oa ? ((oa.exports = Ja)._ = Ja, Wd._ = Ja) : Qt._ = Ja;
    }).call(Iee);
  }(Ju, Ju.exports)), Ju.exports;
}
var Ree = Mee();
function Dee(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Nee = (e) => {
  const t = Ree.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(([a, o]) => {
      n < o && (n = o, r = a);
    });
  }), r;
}, $ee = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: i = !1, aspect: a, hideTooltip: o = !1, hideGrid: s = !1, showRatio: l = !1, valueFormatter: f }, p) => {
  const d = Object.keys(e), v = Dee(t), m = Math.max(...v.map((_) => dc(`${_.x}`))), g = d.reduce((_, O) => (_[O] = t.reduce((S, P) => S + P.values[O], 0), _), {}), b = {
    ...a1(r),
    type: "number",
    dataKey: Nee(v)
  }, y = {
    ...o1(n),
    type: "category",
    dataKey: "x"
  };
  return E(uu, {
    config: e,
    ref: p,
    aspect: a,
    children: ce(_D, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: i || l ? 100 : 0
      },
      children: [!o && E(fc, {
        ...Md(!0),
        content: E(su, {
          yAxisFormatter: n == null ? void 0 : n.tickFormatter
        })
      }), !s && E(cc, {
        ...Id(),
        vertical: !0,
        horizontal: !1
      }), E(Ti, {
        ...b,
        hide: r == null ? void 0 : r.hide
      }), E(Ei, {
        ...y,
        hide: n == null ? void 0 : n.hide,
        width: (n == null ? void 0 : n.width) ?? m + 20
      }), d.map((_, O) => E(Un, {
        children: E(ra, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: _,
          fill: e[_].color ? Vn(e[_].color) : Mn(O),
          radius: 4,
          maxBarSize: 24,
          children: (i || l) && E(cn, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: f,
            content: l ? E(jee, {
              valueFormatter: f,
              total: g[_],
              showLabel: i
            }) : void 0
          }, `label-{${_}}`)
        }, `bar-${_}`)
      }))]
    })
  });
}, aie = cu($ee), jee = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: i, showLabel: a }) => {
  const { x: o = 0, y: s = 0, width: l = 0, height: f = 0 } = e, p = o + l + t, d = s + f / 2, v = n ? n(r) : r, m = dc(`${v}`), g = i > 0 ? Math.round(Number(r) / i * 100) : 0;
  return ce("g", {
    transform: `translate(${p},${d + 4})`,
    children: [a && E("text", {
      x: 0,
      textAnchor: "start",
      className: "fill-f1-foreground-secondary text-sm font-medium",
      children: v
    }), ce("text", {
      x: a ? m + 8 : 0,
      textAnchor: "start",
      className: "fill-f1-foreground text-sm font-medium",
      children: [g, "%"]
    })]
  });
}, kee = (e) => Array.isArray(e) ? e.every(Lee) ? [{
  items: e
}] : e : [e];
function Lee(e) {
  return "value" in e;
}
const oie = ({ onClick: e, value: t, ...r }) => {
  const n = Zs(), [i, a] = ct(!1), o = St(() => kee(r.items), [r.items]), s = St(() => o.flatMap((m) => m.items), [o]), l = St(() => {
    var m;
    return t || ((m = s[0]) == null ? void 0 : m.value);
  }, [t, s]), f = St(() => s.find((m) => m.value === l), [l, s]), p = () => {
    const m = s.find((g) => g.value === l);
    m && e(l, m);
  }, d = St(() => o.map((m) => m.items).reduce((m, g) => (m.length > 0 && m.push({
    type: "separator"
  }), m.push(...g.filter((b) => b.value !== l).map((b) => ({
    ...b,
    onClick: () => {
      e(b.value, b), a(!1);
    }
  }))), m), []), [o, e, l]), v = r.size === "sm" ? "[&_.main]:w-6" : r.size === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
  return f && E(Bq, {
    onClick: p,
    variant: r.variant,
    size: r.size,
    disabled: r.disabled,
    loading: r.loading,
    "aria-label": f.label,
    prepend: f.icon && E(rr, {
      icon: f.icon
    }),
    className: "rounded-r-none after:rounded-r-none",
    tooltip: r.tooltip,
    appendOutside: E(xI, {
      items: d,
      align: "end",
      open: i && !r.disabled,
      onOpenChange: (m) => {
        r.disabled || a(m);
      },
      children: E("button", {
        className: ye(_I({
          variant: r.variant,
          pressed: i && !r.disabled
        }), wI({
          size: r.size
        }), "-translate-x-px rounded-l-none px-0 after:rounded-l-none", v, Wf()),
        disabled: r.disabled,
        "data-pressed": i && !r.disabled,
        children: ce("div", {
          className: "main flex items-center justify-center gap-1",
          children: [E("span", {
            className: "sr-only",
            children: n.actions.more
          }), E(rr, {
            icon: qq,
            size: r.size === "sm" ? "sm" : "md"
          })]
        })
      })
    }),
    children: f.label
  });
};
var Bee = "Toggle", MD = we.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: i, ...a } = e, [o = !1, s] = Fq({
    prop: r,
    onChange: i,
    defaultProp: n
  });
  return /* @__PURE__ */ E(
    OI.button,
    {
      type: "button",
      "aria-pressed": o,
      "data-state": o ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: Wq(e.onClick, () => {
        e.disabled || s(!o);
      })
    }
  );
});
MD.displayName = Bee;
var qee = MD;
const Fee = wt(({ onSelectedChange: e = () => {
}, selected: t = !1, label: r, disabled: n = !1, icon: i, size: a = "md", ...o }, s) => {
  const l = !Array.isArray(i), [f, p] = l ? [i, i] : i, d = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  }, v = St(() => l ? void 0 : {
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
      scale: 0.6
    },
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }, [l]), [m, g] = ct(t), b = (y) => {
    g(y), e == null || e(y);
  };
  return Nt(() => {
    m !== t && g(t);
  }, [t]), E(qee, {
    ref: s,
    pressed: m,
    onPressedChange: b,
    disabled: n,
    "aria-label": r,
    title: r,
    className: ye("aspect-square px-0", "flex items-center justify-center", Wf(), wI({
      size: a
    }), _I({
      variant: m ? "selected" : "ghost"
    }), d[a]),
    ...o,
    children: E(zq, {
      initial: !1,
      children: m ? E(n_.div, {
        className: "absolute flex items-center justify-center",
        ...v,
        children: E(rr, {
          icon: p,
          size: a
        })
      }, "icon-on") : E(n_.div, {
        className: "absolute flex items-center justify-center",
        ...v,
        children: E(rr, {
          icon: f,
          size: a
        })
      }, "icon-off")
    })
  });
});
Fee.displayName = "F0ButtonToggle";
const uie = ["sm", "md", "lg"], s1 = we.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: i, ...a }, o) => {
  const { actions: s } = Zs();
  return ce("div", {
    ref: o,
    role: "article",
    className: ye("flex flex-col items-stretch rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
    ...a,
    onClick: () => {
      if (!n && !t && r)
        return r();
    },
    children: [t && !n && E(Vb, {
      href: t,
      className: "absolute inset-0 block",
      tabIndex: 0,
      children: E("span", {
        className: "sr-only",
        children: s.view
      })
    }), i]
  });
});
s1.displayName = "Card";
const c1 = we.forwardRef(({ className: e, ...t }, r) => E("div", {
  ref: r,
  className: ye("flex flex-row gap-1.5", e),
  ...t
}));
c1.displayName = "CardHeader";
const l1 = we.forwardRef(({ className: e, ...t }, r) => E("h3", {
  ref: r,
  className: ye("text-base font-medium text-f1-foreground", e),
  ...t
}));
l1.displayName = "CardTitle";
const f1 = we.forwardRef(({ className: e, ...t }, r) => E("h3", {
  ref: r,
  className: ye("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
f1.displayName = "CardSubtitle";
const Wee = we.forwardRef(({ className: e, content: t }, r) => E("div", {
  ref: r,
  className: ye("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: E(mI, {
    children: ce(gI, {
      children: [E(yI, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: E(rr, {
          icon: wF,
          size: "md"
        })
      }), E(bI, {
        children: E("p", {
          children: t
        })
      })]
    })
  })
}));
Wee.displayName = "CardInfo";
const zee = we.forwardRef(({ className: e, title: t, icon: r = SI, ...n }, i) => E(Vb, {
  ref: i,
  className: ye("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: E(rr, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
zee.displayName = "CardLink";
const d1 = we.forwardRef(({ className: e, ...t }, r) => E("div", {
  ref: r,
  className: ye("relative flex grow flex-col", e),
  ...t
}));
d1.displayName = "CardContent";
const p1 = we.forwardRef(({ className: e, ...t }, r) => E("div", {
  ref: r,
  className: ye("flex items-center", e),
  ...t
}));
p1.displayName = "CardFooter";
const sie = we.forwardRef(function({ className: t, ...r }, n) {
  return E("div", {
    ref: n,
    className: ye("flex text-3xl font-semibold", t),
    ...r
  });
});
p1.displayName = "CardComment";
function Uee({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = Uq("(min-width: 640px)");
  if (!(e || a()))
    return null;
  return ce(p1, {
    className: ye("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && E("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => E(Hn, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : E(AI, {
        href: t.href,
        target: t.target,
        disabled: t.disabled,
        children: t.label
      })
    }), e && E("div", {
      className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
      children: E(Hn, {
        label: e.label,
        icon: e.icon,
        onClick: e.onClick,
        size: n ? r ? "sm" : "md" : "lg"
      })
    })]
  });
  function a() {
    return t ? "href" in t ? !0 : "length" in t ? t.length > 0 : !1 : !1;
  }
}
const Hee = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? E(kI, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? E(PI, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? E(LI, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : E(La, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function Gee({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return E("div", {
    className: ye("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: E(Hee, {
      avatar: e,
      compact: r
    })
  });
}
const Kee = {
  info: oI,
  warning: uI,
  critical: sI,
  positive: Kb
}, h1 = wt(({ text: e, level: t }, r) => (Js(e, {
  disallowEmpty: !0
}), E(Qs, {
  ref: r,
  className: ye("pl-0.5", {
    info: "bg-f1-background-info text-f1-foreground-info",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical",
    positive: "bg-f1-background-positive text-f1-foreground-positive"
  }[t]),
  left: E(rr, {
    icon: Kee[t],
    size: "md",
    "aria-hidden": !0,
    className: ye({
      info: "text-f1-icon-info",
      warning: "text-f1-icon-warning",
      critical: "text-f1-icon-critical",
      positive: "text-f1-icon-positive"
    }[t])
  }),
  text: e
})));
h1.displayName = "F0TagAlert";
const Vee = (e) => E("div", {
  "data-cell-type": "alert-tag",
  children: E(h1, {
    level: e.level,
    text: e.label
  })
}), Jn = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function RD(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function pc(e, t) {
  return RD(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function hc(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, a = RD(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (a !== void 0)
    return a;
}
function Yee(e) {
  if (OC(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = hc(e, "date");
  if (OC(t))
    try {
      return t.toLocaleDateString();
    } catch {
      return String(t);
    }
  else {
    if (typeof t == "string")
      return t;
    if (t != null)
      return String(t);
  }
  return "";
}
function OC(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const DD = (e, t) => {
  var a, o;
  const r = hc(e, "number"), n = pc(e, "number"), i = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return ce("div", {
    className: ye("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Jn.text], n && "text-f1-foreground-secondary"),
    children: [i.unitsPosition === "left" && i.units && E(SC, {
      units: i.units
    }), i.decimalPlaces !== void 0 ? (a = i.number) == null ? void 0 : a.toFixed(i.decimalPlaces) : ((o = i.number) == null ? void 0 : o.toString()) ?? "", i.unitsPosition !== "left" && i.units && E(SC, {
      units: i.units
    })]
  });
}, SC = ({ units: e }) => E("span", {
  children: e.toString()
}), Xee = (e, t) => {
  var n, i, a;
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return DD({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: (n = r.currency) == null ? void 0 : n.decimalPlaces,
    units: (i = r.currency) == null ? void 0 : i.symbol,
    unitsPosition: (a = r.currency) == null ? void 0 : a.symbolPosition
  }, t);
}, Zee = (e, t) => {
  const r = e.type ?? "person";
  return E("div", {
    className: ye("pointer-events-auto w-full", t.visualization === "table" && Jn.avatarList),
    children: E(VI, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, Jee = (e, t) => ce("div", {
  className: ye("flex items-center gap-2", t.visualization === "table" && Jn.avatar),
  children: [E(La, {
    avatar: {
      type: "company",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), E("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), Qee = (e, t) => {
  const r = Yee(e), n = pc(e, "date");
  return E("div", {
    className: ye("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Jn.text),
    children: r
  });
};
var cie = {
  md: 900,
  xl: 1440
}, ND = {
  white: {
    3: "0 0% 100% / 0.03",
    5: "0 0% 100% / 0.05",
    10: "0 0% 100% / 0.1",
    20: "0 0% 100% / 0.2",
    30: "0 0% 100% / 0.3",
    40: "0 0% 100% / 0.4",
    50: "0 0% 100% / 0.5",
    60: "0 0% 100% / 0.6",
    70: "0 0% 100% / 0.7",
    80: "0 0% 100% / 0.8",
    90: "0 0% 100% / 0.9",
    100: "0 0% 100%"
  },
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.14",
    40: "219 97% 15% / 0.37",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
    solid: {
      40: "219 18% 69%",
      50: "218 14% 45%"
    }
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%"
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%"
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%"
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%"
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%"
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%"
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%"
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%"
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 28%",
    70: "184 92% 24%"
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%"
  },
  red: {
    50: "5 100% 65%",
    60: "4 61% 49%",
    70: "3 71% 41%"
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%"
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%"
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%"
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%"
  }
}, lie = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const fie = Object.keys(ND), v1 = wt(({ text: e, ...t }, r) => {
  Js(e, {
    disallowEmpty: !0
  });
  const n = "color" in t && t.color ? `hsl(${ND[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? E(Qs, {
    ref: r,
    className: "border-[1px] border-solid border-f1-border-secondary",
    left: E("div", {
      className: "m-1 aspect-square w-2 rounded-full",
      style: {
        backgroundColor: n
      },
      "aria-hidden": !0
    }),
    text: e
  }) : null;
});
v1.displayName = "F0TagDot";
const ete = (e) => E("div", {
  "data-cell-type": "dot-tag",
  children: E(v1, {
    text: e.label,
    color: e.color
  })
}), tte = (e) => ce("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [E(PI, {
    file: e
  }), " ", E("span", {
    children: e.name
  })]
}), $D = (e, t) => ce("div", {
  className: ye("flex items-center gap-2", t.visualization === "table" && Jn.avatar),
  children: [E(rr, {
    icon: e.icon
  }), E("span", {
    className: "text-f1-foreground",
    children: e.label
  })]
}), rte = (e) => E($D, {
  icon: bF,
  label: e.name
}), nte = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, ite = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, ate = (e, t) => {
  var o;
  const r = ((o = hc(e, "text")) == null ? void 0 : o.toString()) || "", n = pc(e, "text"), i = ite(e), a = nte(e) || 3;
  return E(zf, {
    className: ye("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Jn.text),
    lines: a,
    disabled: i,
    children: r
  });
}, iy = 100, AC = 12, ote = 12, ute = (e, t) => {
  const r = hc(e, "percentage"), n = pc(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return E("span", {
      className: ye("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Jn.text),
      "data-cell-type": "percentage",
      children: r
    });
  const i = iy / 2, a = i - AC / 2, o = a - ote, s = 2 * Math.PI * o, l = (100 - Math.min(Number(r), 100)) / 100 * s, f = typeof e == "object" && "label" in e;
  return ce("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [ce("svg", {
      viewBox: `0 0 ${iy} ${iy}`,
      className: "h-7 w-7 -rotate-90 transform",
      children: [E("circle", {
        cx: i,
        cy: i,
        r: a,
        className: "fill-f1-background-positive"
      }), E("circle", {
        cx: i,
        cy: i,
        r: o,
        className: "stroke-f1-background-positive-bold",
        fill: "none",
        strokeWidth: AC,
        strokeDasharray: s,
        strokeDashoffset: l,
        strokeLinecap: "round"
      })]
    }), E("span", {
      className: "text-f1-foreground",
      children: f ? e.label : `${r}%`
    })]
  });
}, ste = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return ce("div", {
    className: ye("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Jn.avatar),
    children: [E(La, {
      avatar: {
        type: "person",
        firstName: e.firstName.toString(),
        lastName: e.lastName.toString(),
        src: e.src,
        badge: e.badge
      },
      size: "xs"
    }), E(zf, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, m1 = wt(({ text: e, additionalAccesibleText: t, variant: r }, n) => (Js(e, {
  disallowEmpty: !0
}), E(Qs, {
  ref: n,
  className: ye({
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    info: "bg-f1-background-info text-f1-foreground-info",
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical"
  }[r]),
  left: E("div", {
    className: ye("m-1 aspect-square w-2 rounded-full", {
      neutral: "bg-f1-icon",
      info: "bg-f1-icon-info",
      positive: "bg-f1-icon-positive",
      warning: "bg-f1-icon-warning",
      critical: "bg-f1-icon-critical"
    }[r]),
    "aria-hidden": !0
  }),
  additionalAccesibleText: t,
  text: e
})));
m1.displayName = "F0TagStatus";
const cte = (e) => E("div", {
  "data-cell-type": "status",
  children: E(m1, {
    variant: e.status,
    text: e.label
  })
}), lte = (e) => E("div", {
  "data-cell-type": "tag",
  children: E(Yb, {
    text: e.label,
    icon: e.icon
  })
}), fte = {
  positive: Gq,
  negative: Hq
}, jD = wt(({ text: e, status: t }, r) => (Js(e, {
  disallowEmpty: !0
}), E(Qs, {
  ref: r,
  className: ye({
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    negative: "bg-f1-background-critical text-f1-foreground-critical"
  }[t]),
  left: t === "neutral" ? null : E(rr, {
    icon: fte[t],
    size: "sm",
    className: ye({
      positive: "text-f1-icon-positive",
      neutral: "text-f1-icon-secondary",
      negative: "text-f1-icon-critical"
    }[t])
  }),
  additionalAccesibleText: `${t} balance`,
  text: e
})));
jD.displayName = "F0TagBalance";
const Rd = wt(({ avatar: e, onClick: t, text: r }, n) => (Js(r, {
  disallowEmpty: !0
}), E(Qs, {
  ref: n,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: E(La, {
    avatar: e,
    size: "xs"
  }),
  text: r,
  onClick: t
})));
Rd.displayName = "AvatarTag";
const kD = wt(({ companyName: e, companyImageUrl: t, onClick: r }, n) => E(Rd, {
  ref: n,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e,
  onClick: r
}));
kD.displayName = "F0TagCompany";
const LD = wt(({ name: e, avatarUrl: t, onClick: r }, n) => E(Rd, {
  ref: n,
  avatar: {
    type: "person",
    firstName: e,
    lastName: "",
    src: t
  },
  text: e,
  onClick: r
}));
LD.displayName = "F0TagPerson";
const BD = wt(({ teamName: e, teamImageUrl: t, onClick: r }, n) => E(Rd, {
  ref: n,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e,
  onClick: r
}));
BD.displayName = "F0TagTeam";
const dte = (e) => {
  const { type: t } = e;
  if (t === "dot") return E(v1, {
    ...e
  });
  if (t === "person") return E(LD, {
    ...e
  });
  if (t === "team") return E(BD, {
    ...e
  });
  if (t === "company") return E(kD, {
    ...e
  });
  if (t === "alert") return E(h1, {
    ...e
  });
  if (t === "status") return E(m1, {
    ...e
  });
  if (t === "balance") return E(jD, {
    ...e
  });
  if (t === "raw") return E(Yb, {
    ...e
  });
}, bo = ({ tag: e }) => {
  const t = dte(e);
  return t || "Invalid tag type";
}, qb = ({ count: e, list: t }) => {
  const [r, n] = ct(!1), i = E(Yb, {
    text: `+${e}`
  });
  return t != null && t.length ? ce(TI, {
    open: r,
    onOpenChange: n,
    children: [E(EI, {
      asChild: !0,
      children: E("button", {
        className: ye("inline-flex flex-shrink-0 items-center", Wf()),
        children: i
      })
    }), E(CI, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: ce(pI, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((a, o) => E("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: a.description ? E(jl, {
            label: a.description,
            children: E("div", {
              children: E(bo, {
                tag: a
              })
            })
          }) : E(bo, {
            tag: a
          })
        }, o)), E(hI, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
qb.displayName = "TagCounter";
const pte = Xs({
  base: "flex items-center gap-2"
}), qD = ({ type: e, tags: t, max: r = 4, remainingCount: n, layout: i = "compact" }) => {
  const a = t.map((p) => ({
    type: e,
    ...p
  }));
  if (i === "fill")
    return E(vI, {
      items: a,
      renderListItem: (p) => {
        const d = PC(p);
        return d ? E(jl, {
          label: d,
          children: E("div", {
            children: E(bo, {
              tag: p
            })
          })
        }) : E(bo, {
          tag: p
        });
      },
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: n !== void 0,
      renderOverflowIndicator: (p) => E(qb, {
        count: (n ?? 0) + p,
        list: n ? void 0 : a.slice(a.length - p)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = a.slice(0, r), s = a.slice(r), l = n ?? a.length - r, f = l > 0;
  return ce("div", {
    className: pte(),
    children: [o.map((p, d) => {
      const v = PC(p);
      return v ? E(jl, {
        label: v,
        children: E("div", {
          children: E(bo, {
            tag: p
          }, d)
        })
      }, d) : E(bo, {
        tag: p
      }, d);
    }), f && E(qb, {
      count: l,
      list: n ? void 0 : s
    })]
  });
}, PC = (e) => {
  if ("description" in e && typeof e.description == "string")
    return e.description;
};
qD.displayName = "F0TagList";
const hte = (e) => E(qD, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), vte = (e, t) => ce("div", {
  className: ye("flex items-center gap-2", t.visualization === "table" && Jn.avatar),
  children: [E(La, {
    avatar: {
      type: "team",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), E("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), mte = (e, t) => {
  const r = hc(e, "text"), n = pc(e, "text"), i = (r == null ? void 0 : r.toString()) ?? "";
  return E(zf, {
    lines: 1,
    tag: "span",
    className: ye("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Jn.text),
    children: i
  });
}, ur = {
  text: mte,
  longText: ate,
  number: DD,
  date: Qee,
  amount: Xee,
  avatarList: Zee,
  status: cte,
  alertTag: Vee,
  person: ste,
  percentage: ute,
  company: Jee,
  team: vte,
  tag: lte,
  dotTag: ete,
  tagList: hte,
  icon: $D,
  file: tte,
  folder: rte
}, gte = (e) => e !== void 0 && typeof e == "object", die = (e, t, r) => {
  const { type: n, value: i } = gte(e) ? e : {
    type: "text",
    value: e ?? r
  }, a = ur[n];
  return a ? i === void 0 ? r : a(i, {
    visualization: t.visualization
  }) : `[Invalid ${n} renderer]`;
}, yte = {
  text: ur.text,
  number: ur.number,
  date: ur.date,
  amount: ur.amount,
  person: ur.person,
  company: ur.company,
  team: ur.team,
  status: ur.status,
  tag: ur.tag,
  avatarList: ur.avatarList,
  tagList: ur.tagList,
  alertTag: ur.alertTag,
  dotTag: ur.dotTag,
  file: ur.file,
  folder: ur.folder
};
function bte({ metadata: e }) {
  const { type: t, value: r } = e.property, n = yte[t];
  if (!n)
    return ce("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && E(rr, {
        icon: e.icon,
        color: "default",
        size: "md"
      }), ce("span", {
        children: ["Unsupported property type: ", t]
      })]
    });
  const i = n;
  return ce("div", {
    className: "flex h-8 items-center gap-1.5",
    children: ["icon" in e && E(rr, {
      icon: e.icon,
      color: "default",
      size: "md"
    }), i(r, {
      visualization: "card"
    })]
  });
}
const xte = [], wte = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, i = xte.reduce((a, o) => {
    const { [o]: s, ...l } = a;
    return l;
  }, n);
  return E(xI, {
    ...i,
    open: t,
    onOpenChange: r,
    align: "end"
  });
}, pie = ({ items: e, children: t }) => {
  const [r, n] = ct(!1);
  return ce(Kq, {
    open: r,
    onOpenChange: n,
    children: [E(Vq, {
      asChild: !0,
      children: t || E(Oo, {
        label: "Other actions",
        icon: dI,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), E(Yq, {
      className: "bg-f1-background-overlay"
    }), E(Xq, {
      className: "bg-f1-background",
      children: E("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((i, a) => i.type === "separator" ? E("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${a}`) : i.href ? E(Vb, {
          ...i,
          href: i.href,
          className: ye("flex w-full items-start gap-1.5", i.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: E(Zq, {
            item: i
          })
        }) : ce("button", {
          onClick: (o) => {
            var s;
            o.preventDefault(), o.stopPropagation(), (s = i.onClick) == null || s.call(i), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [i.icon && E("span", {
            className: ye("h-5 w-5 text-f1-icon", i.critical && "text-f1-icon-critical"),
            children: E(rr, {
              icon: i.icon,
              size: "md"
            })
          }), E("span", {
            className: ye("font-medium", i.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
            children: i.label
          })]
        }, i.label))
      })
    })]
  });
};
function TC({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: i, overlay: a = !1 }) {
  const o = Zs(), s = e && e.length > 0, [l, f] = ct(!1);
  return !s && !t ? null : ce("div", {
    className: ye("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (l || r) && "delay-0 sm:opacity-100", a && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && E("div", {
      className: "flex items-center justify-center",
      children: E(wte, {
        items: e,
        open: l,
        onOpenChange: f,
        children: E(Oo, {
          label: o.actions.other,
          icon: gF,
          variant: "ghost",
          size: "sm",
          hideLabel: !0,
          pressed: l
        })
      })
    }), t && E("div", {
      className: "flex items-center justify-center",
      children: E(Jq, {
        title: i,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const _te = wt(function({ compact: t = !1, avatar: r, image: n, title: i, description: a, metadata: o, children: s, link: l, primaryAction: f, secondaryActions: p, otherActions: d, selectable: v = !1, selected: m = !1, onSelect: g, onClick: b, forceVerticalMetadata: y = !1, fullHeight: _ = !1, disableOverlayLink: O = !1 }, S) {
  return ce(s1, {
    className: ye("group relative bg-f1-background shadow-none transition-all", t && "p-3", _ && "h-full", (v || d && d.length > 0) && !m && "hover:border-f1-border", l && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", m && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: b,
    ref: S,
    children: [l && !O && E(AI, {
      href: l,
      className: ye("z-1 absolute inset-0 block rounded-xl", Wf()),
      "aria-label": i,
      children: " "
    }), n && ce("div", {
      className: ye("relative -mx-3 -mt-3 mb-4 h-32 overflow-hidden rounded-md", t && "-mx-2 -mt-2 mb-3"),
      children: [E(Qq, {
        src: n,
        alt: i,
        className: "h-full w-full object-cover"
      }), E(TC, {
        otherActions: d,
        selectable: v,
        selected: m,
        onSelect: g,
        title: i,
        overlay: !0
      })]
    }), ce("div", {
      className: "flex grow flex-col gap-2",
      children: [ce("div", {
        className: "flex flex-row items-start justify-between gap-1",
        children: [ce(c1, {
          className: ye("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && E(Gee, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), ce("div", {
            className: ye("flex flex-col gap-0"),
            children: [E(l1, {
              className: ye("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: i
            }), a && E(f1, {
              className: ye("text-base text-f1-foreground-secondary"),
              children: E(zf, {
                lines: t ? 2 : 3,
                children: a
              })
            })]
          })]
        }), !n && E(TC, {
          otherActions: d,
          selectable: v,
          selected: m,
          onSelect: g,
          title: i
        })]
      }), (o || s) && ce(d1, {
        children: [o && E("div", {
          className: ye("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", y && "flex-col gap-y-0.5"),
          children: o.map((P, x) => E(bte, {
            metadata: P
          }, x))
        }), s]
      })]
    }), E(Uee, {
      primaryAction: f,
      secondaryActions: p,
      compact: t
    })]
  });
}), Ote = ({ compact: e = !1 }) => ce(s1, {
  className: ye("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [ce(c1, {
    className: ye("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [E(on, {
      className: ye("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), ce("div", {
      className: ye("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [E(l1, {
        className: "flex h-6 items-center",
        children: E(on, {
          className: ye("h-4 w-20 rounded-md", e && "h-3")
        })
      }), E(f1, {
        className: "flex h-5 items-center",
        children: E(on, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), E(d1, {
    className: "flex flex-col gap-0",
    children: Array.from({
      length: 3
    }).map((t, r) => ce("div", {
      className: "flex h-6 items-center gap-1.5",
      children: [E(on, {
        className: "h-4 w-4 rounded-full"
      }), E(on, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), Ste = ["forceVerticalMetadata", "disableOverlayLink"], FD = wt((e, t) => {
  const r = Ste.reduce((n, i) => {
    const { [i]: a, ...o } = n;
    return o;
  }, e);
  return E(_te, {
    ref: t,
    ...r
  });
}), Ate = ({ compact: e = !1 }) => E(Ote, {
  compact: e
});
FD.displayName = "F0Card";
const hie = II(FD, Ate);
function vie(e, t, r, n, i) {
  var W, q;
  const a = e.type === "grouped", o = t !== null, [s, l] = ct(
    /* @__PURE__ */ new Map()
  );
  Nt(() => {
    if (i) {
      if (a)
        for (const $ of i.groups || []) {
          const j = e.groups.find(
            (F) => F.key === $.groupId
          );
          j && g(j, $.checked);
        }
      for (const $ of i.items || []) {
        const j = e.records.find((F) => F.id === $.id);
        j && C(j, $.checked);
      }
    }
  }, [JSON.stringify(i), e.records]);
  const [f, p] = St(() => {
    const $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
    for (const [F, V] of s.entries())
      V.checked ? $.set(F, V.item) : j.set(F, V.item);
    return [$, j];
  }, [s]), [d, v] = ct(/* @__PURE__ */ new Map()), [m] = St(() => {
    const $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
    for (const [F, V] of d.entries())
      V.checked ? $.set(F, V.group) : j.set(F, V.group);
    return [$, j];
  }, [d]), g = ($, j) => {
    if (!a)
      return;
    const F = Array.isArray($) ? $ : [$], V = [
      ...F.flatMap((Z) => Z.records),
      ...Array.from(s.values()).filter(
        (Z) => Z.item[Kp] && F.some((Q) => Q.key === Z.item[Kp])
      ).map((Z) => Z.item)
    ];
    C(V, j), v((Z) => {
      const Q = new Map(Z);
      for (const G of F)
        Q.set(G.key, { group: G, checked: j });
      return Q;
    });
  }, b = Ki(() => {
    M(!1), l(/* @__PURE__ */ new Map());
  }, []), [y, _] = ct({});
  Nt(() => {
    (async () => {
      if (!a)
        return {};
      const j = Object.fromEntries(
        await Promise.all(
          e.groups.map(async (F) => {
            const V = d.get(F.key), Z = Array.from(s.values()).filter(
              (le) => le.item[Kp] === F.key
            ), Q = o ? await F.itemCount || Z.length : F.records.length, G = Z.filter(
              (le) => le.checked
            ).length, X = Z.filter(
              (le) => !le.checked
            ).length, te = Q === G - X, ie = ((V == null ? void 0 : V.checked) || te) && G > 0, ve = G > 0 && !ie || ie && X > 0;
            return [
              F.key,
              {
                checked: ie || ve,
                indeterminate: ve,
                selectedCount: ie && !ve ? Q : Q - X,
                unselectedCount: X
              }
            ];
          })
        )
      );
      _(j);
    })();
  }, [a, a && e.groups, d, s]);
  const O = f.size, S = p.size, [P, x] = ct(!1), A = Ki(() => {
    M(!1), v(/* @__PURE__ */ new Map()), l(/* @__PURE__ */ new Map());
  }, []), C = ($, j, F = !1) => {
    const V = Array.isArray($) ? $ : [$];
    let Z = 0;
    for (const Q of V) {
      const G = r.selectable && r.selectable(Q);
      if (G === void 0 || F && s.has(G))
        return;
      Z++, s.set(G, { item: Q, checked: j });
    }
    Z > 0 && l((Q) => new Map(Q));
  }, M = ($) => {
    x($), a ? g(
      Array.from(d.values()).map(({ group: j }) => j),
      $
    ) : C(
      Array.from(s.values()).map(({ item: j }) => j),
      $
    );
  }, N = St(
    () => {
      var $;
      return t && O === t.total || !t && O === (($ = e.records) == null ? void 0 : $.length);
    },
    [t, O, (W = e.records) == null ? void 0 : W.length]
  ), z = St(
    () => (P || N) && O > 0,
    [P, N, O]
  ), D = St(
    () => O > 0 && !z || z && S > 0,
    [O, z, S]
  );
  return Nt(() => {
    A();
  }, [r.currentFilters]), Nt(() => {
    var $;
    if (a)
      for (const j of e.groups) {
        const F = (($ = y[j.key]) == null ? void 0 : $.checked) || z;
        d.has(j.key) || v((V) => {
          const Z = new Map(V);
          return Z.set(j.key, { group: j, checked: F }), Z;
        }), C(j.records, F, !0);
      }
    else
      C(e.records, z, !0);
  }, [e, z, a]), Nt(() => {
    N && x(!0), O === 0 && x(!1);
  }, [N, O]), Nt(() => {
    n == null || n(
      {
        allSelected: S === 0 ? P : P ? "indeterminate" : !1,
        itemsStatus: Array.from(s.values()),
        groupsStatus: Object.fromEntries(
          Array.from(d.values()).map(({ group: $, checked: j }) => [
            $.key,
            !!j
          ])
        ),
        filters: r.currentFilters || {},
        selectedCount: O
      },
      b
    );
  }, [
    P,
    s,
    d,
    y,
    t == null ? void 0 : t.total,
    (q = e.records) == null ? void 0 : q.length
  ]), {
    selectedItems: f,
    selectedGroups: m,
    allSelectedStatus: {
      checked: P || D,
      indeterminate: D,
      selectedCount: O,
      unselectedCount: S
    },
    isAllSelected: z,
    isPartiallySelected: D,
    handleSelectItemChange: C,
    handleSelectAll: M,
    handleSelectGroupChange: g,
    groupAllSelectedStatus: y
  };
}
const Pte = (e, t, r) => {
  const n = zt[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function Tte({ granularities: e, value: t, onChange: r }) {
  const n = Zs(), i = (a) => {
    r(a);
  };
  return ce("div", {
    className: "flex flex-col gap-2",
    children: [E("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), E(MI, {
      value: t,
      onValueChange: i,
      asList: !0,
      children: E(RI, {
        children: e.map((a) => {
          var o;
          return E(hy, {
            value: a,
            children: ((o = n.date.granularities[a]) == null ? void 0 : o.label) || a
          }, a);
        })
      })
    })]
  });
}
const EC = "__custom__", Ete = (e, t) => {
  if (!(e != null && e.value)) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : i_(e.value.from, r.from) && (!e.value.to || !r.to || i_(e.value.to, r.to));
}, Cte = ({ presets: e, ...t }) => {
  const [r, n] = ct();
  return Nt(() => {
    if (t.date) {
      const a = Object.entries(e).find(([o, s]) => Ete(t.date, s));
      n(a ? a[0] : void 0);
    }
  }, [t.date, e]), E(MI, {
    asList: !0,
    value: r,
    onValueChange: (a) => {
      var o;
      n(a), (o = t.onSelect) == null || o.call(t, a);
    },
    children: ce(RI, {
      children: [Object.entries(e).map(([a, o]) => E(hy, {
        value: a,
        children: (o == null ? void 0 : o.label) || a
      }, a)), E(eF, {}), E(hy, {
        value: EC,
        children: "Custom"
      }, EC)]
    })
  });
}, CC = (e, t) => {
  var r, n, i, a;
  return !e && !t ? !0 : !e || !t ? !1 : ((r = e.value) == null ? void 0 : r.from.getTime()) === ((n = t.value) == null ? void 0 : n.from.getTime()) && ((i = e.value) == null ? void 0 : i.to.getTime()) === ((a = t.value) == null ? void 0 : a.to.getTime()) && e.granularity === t.granularity;
}, IC = "__custom__";
function mie({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: i, compareTo: a, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: l, value: f, asChild: p, ...d }) {
  const v = Zs(), [m, g] = ct(f || t);
  Nt(() => {
    CC(f, m) || g(f || t);
  }, [f, t]);
  const b = St(() => (m == null ? void 0 : m.granularity) ?? "day", [m == null ? void 0 : m.granularity]), y = St(() => zt[b], [b]), _ = St(() => zt[b].calendarMode || "single", [b]), O = (j) => {
    S({
      value: y.toRange(j ?? void 0),
      granularity: b
    });
  }, S = (j) => {
    CC(j, m) || (g(j), e == null || e(j));
  }, P = (j) => {
    var V;
    A(j === IC);
    const F = j ? r[+j] : void 0;
    F && (S({
      value: zt[F.granularity].toRange(typeof F.value == "function" ? F.value() : F.value),
      granularity: F.granularity
    }), j !== IC && ((V = d.onOpenChange) == null || V.call(d, !1)));
  }, [x, A] = ct(!1), C = (j) => {
    S({
      value: m == null ? void 0 : m.value,
      granularity: j
    });
  }, M = St(() => r.length > 0 && !x, [r, x]), N = () => {
    A(!1);
  }, z = St(() => y.calendarView || "day", [y]), [D, W] = ct(o || void 0), q = St(() => {
    const j = (a ?? {})[b] || [];
    if (!(m != null && m.value))
      return [];
    const F = m.value, V = j.map((Z, Q) => {
      const G = typeof Z.value == "function" ? Z.value(y.toRange(F)) : Pte(y.toRange(F), Z.value.delta, Z.value.units), X = Array.isArray(G) ? G.map((te) => y.toString(te, v)).join(", ") : y.toString(G, v);
      return {
        label: Z.label,
        value: (Q + 1).toString(),
        description: X,
        dateValue: G
      };
    });
    return V.length === 0 ? [] : [{
      label: v.date.none,
      value: "0",
      description: "",
      dateValue: void 0
    }, ...V];
  }, [a, m, y, b]);
  Nt(() => {
    W(o || "0");
  }, [b, o]);
  const $ = (j) => {
    W(j);
  };
  return Nt(() => {
    var j;
    s == null || s(D ? (j = q[+D]) == null ? void 0 : j.dateValue : void 0);
  }, [D, s, q]), ce(TI, {
    open: d.open,
    onOpenChange: d.onOpenChange,
    children: [E(EI, {
      asChild: p,
      children: i
    }), E(CI, {
      className: "w-full overflow-auto",
      align: "start",
      children: M ? E(Cte, {
        presets: r,
        date: m,
        onSelect: P
      }) : ce("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && ce("div", {
          children: [r.length > 0 && E(Hn, {
            icon: DI,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: N
          }), n.length > 1 && E(Tte, {
            granularities: n,
            value: b,
            onChange: C
          })]
        }), ce("div", {
          className: "min-w-[300px] flex-1",
          children: [E(tF, {
            showInput: !l,
            mode: _,
            view: z,
            onSelect: O,
            defaultSelected: m == null ? void 0 : m.value,
            minDate: d.minDate,
            maxDate: d.maxDate
          }), q.length > 0 && ce("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [E("div", {
              className: "text-gray-500 text-sm",
              children: v.date.compareTo
            }), E(rF, {
              label: v.date.compareTo,
              hideLabel: !0,
              placeholder: v.date.compareTo,
              options: q.map((j) => ({
                label: j.label,
                value: j.value,
                description: j.description ?? ""
              })),
              onChange: $,
              value: D
            })]
          })]
        })]
      })
    })]
  });
}
const gie = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => zt.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => zt.day.toRange(Dl(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => zt.day.toRange({
      from: Dl(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => zt.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => zt.week.toRange(Dl(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => zt.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => zt.month.toRange(Ru(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => zt.month.toRange(Ru(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => zt.month.toRange(Ru(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => zt.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => zt.quarter.toRange(Ru(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => zt.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => zt.halfyear.toRange(Ru(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => zt.year.toRange(a_(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => zt.year.toRange(a_(/* @__PURE__ */ new Date(), 3))
  }
};
function Ite(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function MC(e) {
  return Ite(e) || Array.isArray(e);
}
function Mte() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function g1(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const i = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return i !== a ? !1 : r.every((o) => {
    const s = e[o], l = t[o];
    return typeof s == "function" ? `${s}` == `${l}` : !MC(s) || !MC(l) ? s === l : g1(s, l);
  });
}
function RC(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function Rte(e, t) {
  if (e.length !== t.length) return !1;
  const r = RC(e), n = RC(t);
  return r.every((i, a) => {
    const o = n[a];
    return g1(i, o);
  });
}
function y1(e) {
  return typeof e == "number";
}
function Fb(e) {
  return typeof e == "string";
}
function Dd(e) {
  return typeof e == "boolean";
}
function DC(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function At(e) {
  return Math.abs(e);
}
function b1(e) {
  return Math.sign(e);
}
function us(e, t) {
  return At(e - t);
}
function Dte(e, t) {
  if (e === 0 || t === 0 || At(e) <= At(t)) return 0;
  const r = us(At(e), At(t));
  return At(r / e);
}
function Nte(e) {
  return Math.round(e * 100) / 100;
}
function Us(e) {
  return Hs(e).map(Number);
}
function Rn(e) {
  return e[vc(e)];
}
function vc(e) {
  return Math.max(0, e.length - 1);
}
function x1(e, t) {
  return t === vc(e);
}
function NC(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Hs(e) {
  return Object.keys(e);
}
function WD(e, t) {
  return [e, t].reduce((r, n) => (Hs(n).forEach((i) => {
    const a = r[i], o = n[i], s = DC(a) && DC(o);
    r[i] = s ? WD(a, o) : o;
  }), r), {});
}
function Wb(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function $te(e, t) {
  const r = {
    start: n,
    center: i,
    end: a
  };
  function n() {
    return 0;
  }
  function i(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function o(l, f) {
    return Fb(e) ? r[e](l) : e(t, l, f);
  }
  return {
    measure: o
  };
}
function Gs() {
  let e = [];
  function t(i, a, o, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in i)
      i.addEventListener(a, o, s), l = () => i.removeEventListener(a, o, s);
    else {
      const f = i;
      f.addListener(o), l = () => f.removeListener(o);
    }
    return e.push(l), n;
  }
  function r() {
    e = e.filter((i) => i());
  }
  const n = {
    add: t,
    clear: r
  };
  return n;
}
function jte(e, t, r, n) {
  const i = Gs(), a = 1e3 / 60;
  let o = null, s = 0, l = 0;
  function f() {
    i.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function p() {
    m(), i.clear();
  }
  function d(y) {
    if (!l) return;
    o || (o = y, r(), r());
    const _ = y - o;
    for (o = y, s += _; s >= a; )
      r(), s -= a;
    const O = s / a;
    n(O), l && (l = t.requestAnimationFrame(d));
  }
  function v() {
    l || (l = t.requestAnimationFrame(d));
  }
  function m() {
    t.cancelAnimationFrame(l), o = null, s = 0, l = 0;
  }
  function g() {
    o = null, s = 0;
  }
  return {
    init: f,
    destroy: p,
    start: v,
    stop: m,
    update: r,
    render: n
  };
}
function kte(e, t) {
  const r = t === "rtl", n = e === "y", i = n ? "y" : "x", a = n ? "x" : "y", o = !n && r ? -1 : 1, s = p(), l = d();
  function f(g) {
    const {
      height: b,
      width: y
    } = g;
    return n ? b : y;
  }
  function p() {
    return n ? "top" : r ? "right" : "left";
  }
  function d() {
    return n ? "bottom" : r ? "left" : "right";
  }
  function v(g) {
    return g * o;
  }
  return {
    scroll: i,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: f,
    direction: v
  };
}
function ka(e = 0, t = 0) {
  const r = At(e - t);
  function n(f) {
    return f < e;
  }
  function i(f) {
    return f > t;
  }
  function a(f) {
    return n(f) || i(f);
  }
  function o(f) {
    return a(f) ? n(f) ? e : t : f;
  }
  function s(f) {
    return r ? f - r * Math.ceil((f - t) / r) : f;
  }
  return {
    length: r,
    max: t,
    min: e,
    constrain: o,
    reachedAny: a,
    reachedMax: i,
    reachedMin: n,
    removeOffset: s
  };
}
function zD(e, t, r) {
  const {
    constrain: n
  } = ka(0, e), i = e + 1;
  let a = o(t);
  function o(v) {
    return r ? At((i + v) % i) : n(v);
  }
  function s() {
    return a;
  }
  function l(v) {
    return a = o(v), d;
  }
  function f(v) {
    return p().set(s() + v);
  }
  function p() {
    return zD(e, s(), r);
  }
  const d = {
    get: s,
    set: l,
    add: f,
    clone: p
  };
  return d;
}
function Lte(e, t, r, n, i, a, o, s, l, f, p, d, v, m, g, b, y, _, O) {
  const {
    cross: S,
    direction: P
  } = e, x = ["INPUT", "SELECT", "TEXTAREA"], A = {
    passive: !1
  }, C = Gs(), M = Gs(), N = ka(50, 225).constrain(m.measure(20)), z = {
    mouse: 300,
    touch: 400
  }, D = {
    mouse: 500,
    touch: 600
  }, W = g ? 43 : 25;
  let q = !1, $ = 0, j = 0, F = !1, V = !1, Z = !1, Q = !1;
  function G(B) {
    if (!O) return;
    function xe(Ce) {
      (Dd(O) || O(B, Ce)) && be(Ce);
    }
    const ee = t;
    C.add(ee, "dragstart", (Ce) => Ce.preventDefault(), A).add(ee, "touchmove", () => {
    }, A).add(ee, "touchend", () => {
    }).add(ee, "touchstart", xe).add(ee, "mousedown", xe).add(ee, "touchcancel", ge).add(ee, "contextmenu", ge).add(ee, "click", ae, !0);
  }
  function X() {
    C.clear(), M.clear();
  }
  function te() {
    const B = Q ? r : t;
    M.add(B, "touchmove", Oe, A).add(B, "touchend", ge).add(B, "mousemove", Oe, A).add(B, "mouseup", ge);
  }
  function ie(B) {
    const xe = B.nodeName || "";
    return x.includes(xe);
  }
  function ve() {
    return (g ? D : z)[Q ? "mouse" : "touch"];
  }
  function le(B, xe) {
    const ee = d.add(b1(B) * -1), Ce = p.byDistance(B, !g).distance;
    return g || At(B) < N ? Ce : y && xe ? Ce * 0.5 : p.byIndex(ee.get(), 0).distance;
  }
  function be(B) {
    const xe = Wb(B, n);
    Q = xe, Z = g && xe && !B.buttons && q, q = us(i.get(), o.get()) >= 2, !(xe && B.button !== 0) && (ie(B.target) || (F = !0, a.pointerDown(B), f.useFriction(0).useDuration(0), i.set(o), te(), $ = a.readPoint(B), j = a.readPoint(B, S), v.emit("pointerDown")));
  }
  function Oe(B) {
    if (!Wb(B, n) && B.touches.length >= 2) return ge(B);
    const ee = a.readPoint(B), Ce = a.readPoint(B, S), qe = us(ee, $), je = us(Ce, j);
    if (!V && !Q && (!B.cancelable || (V = qe > je, !V)))
      return ge(B);
    const gt = a.pointerMove(B);
    qe > b && (Z = !0), f.useFriction(0.3).useDuration(0.75), s.start(), i.add(P(gt)), B.preventDefault();
  }
  function ge(B) {
    const ee = p.byDistance(0, !1).index !== d.get(), Ce = a.pointerUp(B) * ve(), qe = le(P(Ce), ee), je = Dte(Ce, qe), gt = W - 10 * je, Pt = _ + je / 50;
    V = !1, F = !1, M.clear(), f.useDuration(gt).useFriction(Pt), l.distance(qe, !g), Q = !1, v.emit("pointerUp");
  }
  function ae(B) {
    Z && (B.stopPropagation(), B.preventDefault(), Z = !1);
  }
  function fe() {
    return F;
  }
  return {
    init: G,
    destroy: X,
    pointerDown: fe
  };
}
function Bte(e, t) {
  let n, i;
  function a(d) {
    return d.timeStamp;
  }
  function o(d, v) {
    const g = `client${(v || e.scroll) === "x" ? "X" : "Y"}`;
    return (Wb(d, t) ? d : d.touches[0])[g];
  }
  function s(d) {
    return n = d, i = d, o(d);
  }
  function l(d) {
    const v = o(d) - o(i), m = a(d) - a(n) > 170;
    return i = d, m && (n = d), v;
  }
  function f(d) {
    if (!n || !i) return 0;
    const v = o(i) - o(n), m = a(d) - a(n), g = a(d) - a(i) > 170, b = v / m;
    return m && !g && At(b) > 0.1 ? b : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: f,
    readPoint: o
  };
}
function qte() {
  function e(r) {
    const {
      offsetTop: n,
      offsetLeft: i,
      offsetWidth: a,
      offsetHeight: o
    } = r;
    return {
      top: n,
      right: i + a,
      bottom: n + o,
      left: i,
      width: a,
      height: o
    };
  }
  return {
    measure: e
  };
}
function Fte(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function Wte(e, t, r, n, i, a, o) {
  const s = [e].concat(n);
  let l, f, p = [], d = !1;
  function v(y) {
    return i.measureSize(o.measure(y));
  }
  function m(y) {
    if (!a) return;
    f = v(e), p = n.map(v);
    function _(O) {
      for (const S of O) {
        if (d) return;
        const P = S.target === e, x = n.indexOf(S.target), A = P ? f : p[x], C = v(P ? e : n[x]);
        if (At(C - A) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((O) => {
      (Dd(a) || a(y, O)) && _(O);
    }), r.requestAnimationFrame(() => {
      s.forEach((O) => l.observe(O));
    });
  }
  function g() {
    d = !0, l && l.disconnect();
  }
  return {
    init: m,
    destroy: g
  };
}
function zte(e, t, r, n, i, a) {
  let o = 0, s = 0, l = i, f = a, p = e.get(), d = 0;
  function v() {
    const A = n.get() - e.get(), C = !l;
    let M = 0;
    return C ? (o = 0, r.set(n), e.set(n), M = A) : (r.set(e), o += A / l, o *= f, p += o, e.add(o), M = p - d), s = b1(M), d = p, x;
  }
  function m() {
    const A = n.get() - t.get();
    return At(A) < 1e-3;
  }
  function g() {
    return l;
  }
  function b() {
    return s;
  }
  function y() {
    return o;
  }
  function _() {
    return S(i);
  }
  function O() {
    return P(a);
  }
  function S(A) {
    return l = A, x;
  }
  function P(A) {
    return f = A, x;
  }
  const x = {
    direction: b,
    duration: g,
    velocity: y,
    seek: v,
    settled: m,
    useBaseFriction: O,
    useBaseDuration: _,
    useFriction: P,
    useDuration: S
  };
  return x;
}
function Ute(e, t, r, n, i) {
  const a = i.measure(10), o = i.measure(50), s = ka(0.1, 0.99);
  let l = !1;
  function f() {
    return !(l || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function p(m) {
    if (!f()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", b = At(e[g] - t.get()), y = r.get() - t.get(), _ = s.constrain(b / o);
    r.subtract(y * _), !m && At(y) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function d(m) {
    l = !m;
  }
  return {
    shouldConstrain: f,
    constrain: p,
    toggleActive: d
  };
}
function Hte(e, t, r, n, i) {
  const a = ka(-t + e, 0), o = d(), s = p(), l = v();
  function f(g, b) {
    return us(g, b) <= 1;
  }
  function p() {
    const g = o[0], b = Rn(o), y = o.lastIndexOf(g), _ = o.indexOf(b) + 1;
    return ka(y, _);
  }
  function d() {
    return r.map((g, b) => {
      const {
        min: y,
        max: _
      } = a, O = a.constrain(g), S = !b, P = x1(r, b);
      return S ? _ : P || f(y, O) ? y : f(_, O) ? _ : O;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function v() {
    if (t <= e + i) return [a.max];
    if (n === "keepSnaps") return o;
    const {
      min: g,
      max: b
    } = s;
    return o.slice(g, b);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function Gte(e, t, r) {
  const n = t[0], i = r ? n - e : Rn(t);
  return {
    limit: ka(i, n)
  };
}
function Kte(e, t, r, n) {
  const a = t.min + 0.1, o = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = ka(a, o);
  function f(v) {
    return v === 1 ? l(r.get()) : v === -1 ? s(r.get()) : !1;
  }
  function p(v) {
    if (!f(v)) return;
    const m = e * (v * -1);
    n.forEach((g) => g.add(m));
  }
  return {
    loop: p
  };
}
function Vte(e) {
  const {
    max: t,
    length: r
  } = e;
  function n(a) {
    const o = a - t;
    return r ? o / -r : 0;
  }
  return {
    get: n
  };
}
function Yte(e, t, r, n, i) {
  const {
    startEdge: a,
    endEdge: o
  } = e, {
    groupSlides: s
  } = i, l = d().map(t.measure), f = v(), p = m();
  function d() {
    return s(n).map((b) => Rn(b)[o] - b[0][a]).map(At);
  }
  function v() {
    return n.map((b) => r[a] - b[a]).map((b) => -At(b));
  }
  function m() {
    return s(f).map((b) => b[0]).map((b, y) => b + l[y]);
  }
  return {
    snaps: f,
    snapsAligned: p
  };
}
function Xte(e, t, r, n, i, a) {
  const {
    groupSlides: o
  } = i, {
    min: s,
    max: l
  } = n, f = p();
  function p() {
    const v = o(a), m = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : m ? v : v.slice(s, l).map((g, b, y) => {
      const _ = !b, O = x1(y, b);
      if (_) {
        const S = Rn(y[0]) + 1;
        return NC(S);
      }
      if (O) {
        const S = vc(a) - Rn(y)[0] + 1;
        return NC(S, Rn(y)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: f
  };
}
function Zte(e, t, r, n, i) {
  const {
    reachedAny: a,
    removeOffset: o,
    constrain: s
  } = n;
  function l(g) {
    return g.concat().sort((b, y) => At(b) - At(y))[0];
  }
  function f(g) {
    const b = e ? o(g) : s(g), y = t.map((O, S) => ({
      diff: p(O - b, 0),
      index: S
    })).sort((O, S) => At(O.diff) - At(S.diff)), {
      index: _
    } = y[0];
    return {
      index: _,
      distance: b
    };
  }
  function p(g, b) {
    const y = [g, g + r, g - r];
    if (!e) return g;
    if (!b) return l(y);
    const _ = y.filter((O) => b1(O) === b);
    return _.length ? l(_) : Rn(y) - r;
  }
  function d(g, b) {
    const y = t[g] - i.get(), _ = p(y, b);
    return {
      index: g,
      distance: _
    };
  }
  function v(g, b) {
    const y = i.get() + g, {
      index: _,
      distance: O
    } = f(y), S = !e && a(y);
    if (!b || S) return {
      index: _,
      distance: g
    };
    const P = t[_] - O, x = g + p(P, 0);
    return {
      index: _,
      distance: x
    };
  }
  return {
    byDistance: v,
    byIndex: d,
    shortcut: p
  };
}
function Jte(e, t, r, n, i, a, o) {
  function s(d) {
    const v = d.distance, m = d.index !== t.get();
    a.add(v), v && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (r.set(t.get()), t.set(d.index), o.emit("select"));
  }
  function l(d, v) {
    const m = i.byDistance(d, v);
    s(m);
  }
  function f(d, v) {
    const m = t.clone().set(d), g = i.byIndex(m.get(), v);
    s(g);
  }
  return {
    distance: l,
    index: f
  };
}
function Qte(e, t, r, n, i, a, o, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let f = 0;
  function p(m) {
    if (!s) return;
    function g(b) {
      if ((/* @__PURE__ */ new Date()).getTime() - f > 10) return;
      o.emit("slideFocusStart"), e.scrollLeft = 0;
      const O = r.findIndex((S) => S.includes(b));
      y1(O) && (i.useDuration(0), n.index(O, 0), o.emit("slideFocus"));
    }
    a.add(document, "keydown", d, !1), t.forEach((b, y) => {
      a.add(b, "focus", (_) => {
        (Dd(s) || s(m, _)) && g(y);
      }, l);
    });
  }
  function d(m) {
    m.code === "Tab" && (f = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: p
  };
}
function Qu(e) {
  let t = e;
  function r() {
    return t;
  }
  function n(l) {
    t = o(l);
  }
  function i(l) {
    t += o(l);
  }
  function a(l) {
    t -= o(l);
  }
  function o(l) {
    return y1(l) ? l : l.get();
  }
  return {
    get: r,
    set: n,
    add: i,
    subtract: a
  };
}
function UD(e, t) {
  const r = e.scroll === "x" ? o : s, n = t.style;
  let i = null, a = !1;
  function o(v) {
    return `translate3d(${v}px,0px,0px)`;
  }
  function s(v) {
    return `translate3d(0px,${v}px,0px)`;
  }
  function l(v) {
    if (a) return;
    const m = Nte(e.direction(v));
    m !== i && (n.transform = r(m), i = m);
  }
  function f(v) {
    a = !v;
  }
  function p() {
    a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: p,
    to: l,
    toggleActive: f
  };
}
function ere(e, t, r, n, i, a, o, s, l) {
  const p = Us(i), d = Us(i).reverse(), v = _().concat(O());
  function m(C, M) {
    return C.reduce((N, z) => N - i[z], M);
  }
  function g(C, M) {
    return C.reduce((N, z) => m(N, M) > 0 ? N.concat([z]) : N, []);
  }
  function b(C) {
    return a.map((M, N) => ({
      start: M - n[N] + 0.5 + C,
      end: M + t - 0.5 + C
    }));
  }
  function y(C, M, N) {
    const z = b(M);
    return C.map((D) => {
      const W = N ? 0 : -r, q = N ? r : 0, $ = N ? "end" : "start", j = z[D][$];
      return {
        index: D,
        loopPoint: j,
        slideLocation: Qu(-1),
        translate: UD(e, l[D]),
        target: () => s.get() > j ? W : q
      };
    });
  }
  function _() {
    const C = o[0], M = g(d, C);
    return y(M, r, !1);
  }
  function O() {
    const C = t - o[0] - 1, M = g(p, C);
    return y(M, -r, !0);
  }
  function S() {
    return v.every(({
      index: C
    }) => {
      const M = p.filter((N) => N !== C);
      return m(M, t) <= 0.1;
    });
  }
  function P() {
    v.forEach((C) => {
      const {
        target: M,
        translate: N,
        slideLocation: z
      } = C, D = M();
      D !== z.get() && (N.to(D), z.set(D));
    });
  }
  function x() {
    v.forEach((C) => C.translate.clear());
  }
  return {
    canLoop: S,
    clear: x,
    loop: P,
    loopPoints: v
  };
}
function tre(e, t, r) {
  let n, i = !1;
  function a(l) {
    if (!r) return;
    function f(p) {
      for (const d of p)
        if (d.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((p) => {
      i || (Dd(r) || r(l, p)) && f(p);
    }), n.observe(e, {
      childList: !0
    });
  }
  function o() {
    n && n.disconnect(), i = !0;
  }
  return {
    init: a,
    destroy: o
  };
}
function rre(e, t, r, n) {
  const i = {};
  let a = null, o = null, s, l = !1;
  function f() {
    s = new IntersectionObserver((g) => {
      l || (g.forEach((b) => {
        const y = t.indexOf(b.target);
        i[y] = b;
      }), a = null, o = null, r.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: n
    }), t.forEach((g) => s.observe(g));
  }
  function p() {
    s && s.disconnect(), l = !0;
  }
  function d(g) {
    return Hs(i).reduce((b, y) => {
      const _ = parseInt(y), {
        isIntersecting: O
      } = i[_];
      return (g && O || !g && !O) && b.push(_), b;
    }, []);
  }
  function v(g = !0) {
    if (g && a) return a;
    if (!g && o) return o;
    const b = d(g);
    return g && (a = b), g || (o = b), b;
  }
  return {
    init: f,
    destroy: p,
    get: v
  };
}
function nre(e, t, r, n, i, a) {
  const {
    measureSize: o,
    startEdge: s,
    endEdge: l
  } = e, f = r[0] && i, p = g(), d = b(), v = r.map(o), m = y();
  function g() {
    if (!f) return 0;
    const O = r[0];
    return At(t[s] - O[s]);
  }
  function b() {
    if (!f) return 0;
    const O = a.getComputedStyle(Rn(n));
    return parseFloat(O.getPropertyValue(`margin-${l}`));
  }
  function y() {
    return r.map((O, S, P) => {
      const x = !S, A = x1(P, S);
      return x ? v[S] + p : A ? v[S] + d : P[S + 1][s] - O[s];
    }).map(At);
  }
  return {
    slideSizes: v,
    slideSizesWithGaps: m,
    startGap: p,
    endGap: d
  };
}
function ire(e, t, r, n, i, a, o, s, l) {
  const {
    startEdge: f,
    endEdge: p,
    direction: d
  } = e, v = y1(r);
  function m(_, O) {
    return Us(_).filter((S) => S % O === 0).map((S) => _.slice(S, S + O));
  }
  function g(_) {
    return _.length ? Us(_).reduce((O, S, P) => {
      const x = Rn(O) || 0, A = x === 0, C = S === vc(_), M = i[f] - a[x][f], N = i[f] - a[S][p], z = !n && A ? d(o) : 0, D = !n && C ? d(s) : 0, W = At(N - D - (M + z));
      return P && W > t + l && O.push(S), C && O.push(_.length), O;
    }, []).map((O, S, P) => {
      const x = Math.max(P[S - 1] || 0);
      return _.slice(x, O);
    }) : [];
  }
  function b(_) {
    return v ? m(_, r) : g(_);
  }
  return {
    groupSlides: b
  };
}
function are(e, t, r, n, i, a, o) {
  const {
    align: s,
    axis: l,
    direction: f,
    startIndex: p,
    loop: d,
    duration: v,
    dragFree: m,
    dragThreshold: g,
    inViewThreshold: b,
    slidesToScroll: y,
    skipSnaps: _,
    containScroll: O,
    watchResize: S,
    watchSlides: P,
    watchDrag: x,
    watchFocus: A
  } = a, C = 2, M = qte(), N = M.measure(t), z = r.map(M.measure), D = kte(l, f), W = D.measureSize(N), q = Fte(W), $ = $te(s, W), j = !d && !!O, F = d || !!O, {
    slideSizes: V,
    slideSizesWithGaps: Z,
    startGap: Q,
    endGap: G
  } = nre(D, N, z, r, F, i), X = ire(D, W, y, d, N, z, Q, G, C), {
    snaps: te,
    snapsAligned: ie
  } = Yte(D, $, N, z, X), ve = -Rn(te) + Rn(Z), {
    snapsContained: le,
    scrollContainLimit: be
  } = Hte(W, ve, ie, O, C), Oe = j ? le : ie, {
    limit: ge
  } = Gte(ve, Oe, d), ae = zD(vc(Oe), p, d), fe = ae.clone(), he = Us(r), B = ({
    dragHandler: Or,
    scrollBody: kn,
    scrollBounds: Kr,
    options: {
      loop: Nr
    }
  }) => {
    Nr || Kr.constrain(Or.pointerDown()), kn.seek();
  }, xe = ({
    scrollBody: Or,
    translate: kn,
    location: Kr,
    offsetLocation: Nr,
    previousLocation: lr,
    scrollLooper: Vr,
    slideLooper: Qn,
    dragHandler: ei,
    animation: fu,
    eventHandler: ti,
    scrollBounds: Ci,
    options: {
      loop: ia
    }
  }, vn) => {
    const Ua = Or.settled(), du = !Ci.shouldConstrain(), _t = ia ? Ua : Ua && du, mn = _t && !ei.pointerDown();
    mn && fu.stop();
    const Ha = Kr.get() * vn + lr.get() * (1 - vn);
    Nr.set(Ha), ia && (Vr.loop(Or.direction()), Qn.loop()), kn.to(Nr.get()), mn && ti.emit("settle"), _t || ti.emit("scroll");
  }, ee = jte(n, i, () => B(jn), (Or) => xe(jn, Or)), Ce = 0.68, qe = Oe[ae.get()], je = Qu(qe), gt = Qu(qe), Pt = Qu(qe), It = Qu(qe), at = zte(je, Pt, gt, It, v, Ce), Mt = Zte(d, Oe, ve, ge, It), nr = Jte(ee, ae, fe, at, Mt, It, o), wr = Vte(ge), Lt = Gs(), Dr = rre(t, r, o, b), {
    slideRegistry: _r
  } = Xte(j, O, Oe, be, X, he), hn = Qte(e, r, _r, nr, at, Lt, o, A), jn = {
    ownerDocument: n,
    ownerWindow: i,
    eventHandler: o,
    containerRect: N,
    slideRects: z,
    animation: ee,
    axis: D,
    dragHandler: Lte(D, e, n, i, It, Bte(D, i), je, ee, nr, at, Mt, ae, o, q, m, g, _, Ce, x),
    eventStore: Lt,
    percentOfView: q,
    index: ae,
    indexPrevious: fe,
    limit: ge,
    location: je,
    offsetLocation: Pt,
    previousLocation: gt,
    options: a,
    resizeHandler: Wte(t, o, i, r, D, S, M),
    scrollBody: at,
    scrollBounds: Ute(ge, Pt, It, at, q),
    scrollLooper: Kte(ve, ge, Pt, [je, Pt, gt, It]),
    scrollProgress: wr,
    scrollSnapList: Oe.map(wr.get),
    scrollSnaps: Oe,
    scrollTarget: Mt,
    scrollTo: nr,
    slideLooper: ere(D, W, ve, V, Z, te, Oe, Pt, r),
    slideFocus: hn,
    slidesHandler: tre(t, o, P),
    slidesInView: Dr,
    slideIndexes: he,
    slideRegistry: _r,
    slidesToScroll: X,
    target: It,
    translate: UD(D, t)
  };
  return jn;
}
function ore() {
  let e = {}, t;
  function r(f) {
    t = f;
  }
  function n(f) {
    return e[f] || [];
  }
  function i(f) {
    return n(f).forEach((p) => p(t, f)), l;
  }
  function a(f, p) {
    return e[f] = n(f).concat([p]), l;
  }
  function o(f, p) {
    return e[f] = n(f).filter((d) => d !== p), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: r,
    emit: i,
    off: o,
    on: a,
    clear: s
  };
  return l;
}
const ure = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function sre(e) {
  function t(a, o) {
    return WD(a, o || {});
  }
  function r(a) {
    const o = a.breakpoints || {}, s = Hs(o).filter((l) => e.matchMedia(l).matches).map((l) => o[l]).reduce((l, f) => t(l, f), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((o) => Hs(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function cre(e) {
  let t = [];
  function r(a, o) {
    return t = o.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), o.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function n() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: r,
    destroy: n
  };
}
function Ff(e, t, r) {
  const n = e.ownerDocument, i = n.defaultView, a = sre(i), o = cre(a), s = Gs(), l = ore(), {
    mergeOptions: f,
    optionsAtMedia: p,
    optionsMediaQueries: d
  } = a, {
    on: v,
    off: m,
    emit: g
  } = l, b = D;
  let y = !1, _, O = f(ure, Ff.globalOptions), S = f(O), P = [], x, A, C;
  function M() {
    const {
      container: he,
      slides: B
    } = S;
    A = (Fb(he) ? e.querySelector(he) : he) || e.children[0];
    const ee = Fb(B) ? A.querySelectorAll(B) : B;
    C = [].slice.call(ee || A.children);
  }
  function N(he) {
    const B = are(e, A, C, n, i, he, l);
    if (he.loop && !B.slideLooper.canLoop()) {
      const xe = Object.assign({}, he, {
        loop: !1
      });
      return N(xe);
    }
    return B;
  }
  function z(he, B) {
    y || (O = f(O, he), S = p(O), P = B || P, M(), _ = N(S), d([O, ...P.map(({
      options: xe
    }) => xe)]).forEach((xe) => s.add(xe, "change", D)), S.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(fe), _.eventHandler.init(fe), _.resizeHandler.init(fe), _.slidesHandler.init(fe), _.options.loop && _.slideLooper.loop(), A.offsetParent && C.length && _.dragHandler.init(fe), x = o.init(fe, P)));
  }
  function D(he, B) {
    const xe = X();
    W(), z(f({
      startIndex: xe
    }, he), B), l.emit("reInit");
  }
  function W() {
    _.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
  }
  function q() {
    y || (y = !0, s.clear(), W(), l.emit("destroy"), l.clear());
  }
  function $(he, B, xe) {
    !S.active || y || (_.scrollBody.useBaseFriction().useDuration(B === !0 ? 0 : S.duration), _.scrollTo.index(he, xe || 0));
  }
  function j(he) {
    const B = _.index.add(1).get();
    $(B, he, -1);
  }
  function F(he) {
    const B = _.index.add(-1).get();
    $(B, he, 1);
  }
  function V() {
    return _.index.add(1).get() !== X();
  }
  function Z() {
    return _.index.add(-1).get() !== X();
  }
  function Q() {
    return _.scrollSnapList;
  }
  function G() {
    return _.scrollProgress.get(_.offsetLocation.get());
  }
  function X() {
    return _.index.get();
  }
  function te() {
    return _.indexPrevious.get();
  }
  function ie() {
    return _.slidesInView.get();
  }
  function ve() {
    return _.slidesInView.get(!1);
  }
  function le() {
    return x;
  }
  function be() {
    return _;
  }
  function Oe() {
    return e;
  }
  function ge() {
    return A;
  }
  function ae() {
    return C;
  }
  const fe = {
    canScrollNext: V,
    canScrollPrev: Z,
    containerNode: ge,
    internalEngine: be,
    destroy: q,
    off: m,
    on: v,
    emit: g,
    plugins: le,
    previousScrollSnap: te,
    reInit: b,
    rootNode: Oe,
    scrollNext: j,
    scrollPrev: F,
    scrollProgress: G,
    scrollSnapList: Q,
    scrollTo: $,
    selectedScrollSnap: X,
    slideNodes: ae,
    slidesInView: ie,
    slidesNotInView: ve
  };
  return z(t, r), setTimeout(() => l.emit("init"), 0), fe;
}
Ff.globalOptions = void 0;
function w1(e = {}, t = []) {
  const r = Yi(e), n = Yi(t), [i, a] = ct(), [o, s] = ct(), l = Ki(() => {
    i && i.reInit(r.current, n.current);
  }, [i]);
  return Nt(() => {
    g1(r.current, e) || (r.current = e, l());
  }, [e, l]), Nt(() => {
    Rte(n.current, t) || (n.current = t, l());
  }, [t, l]), Nt(() => {
    if (Mte() && o) {
      Ff.globalOptions = w1.globalOptions;
      const f = Ff(o, r.current, n.current);
      return a(f), () => f.destroy();
    } else
      a(void 0);
  }, [o, a]), [s, i];
}
w1.globalOptions = void 0;
const Et = 28, $C = 16, lre = ({ children: e }) => {
  const t = Yi(null), [r, n] = ct(!0), [i, a] = ct(!1);
  aI(() => {
    const p = t.current;
    if (!p) return;
    const d = new ResizeObserver(() => l());
    d.observe(p);
    const v = () => {
      l();
    };
    return p.addEventListener("scroll", v), l(), () => {
      d.disconnect(), p.removeEventListener("scroll", v);
    };
  }, []);
  function o() {
    const p = t.current;
    p && p.scrollBy({
      left: p.clientWidth,
      behavior: "smooth"
    });
  }
  function s() {
    const p = t.current;
    p && p.scrollBy({
      left: -p.clientWidth,
      behavior: "smooth"
    });
  }
  const l = () => {
    if (!t.current) return;
    const { scrollLeft: p, scrollWidth: d, clientWidth: v } = t.current;
    a(p > 0), n(p + v < d);
  };
  let f = "";
  return i && r ? f = `linear-gradient(to right, transparent 0px, transparent ${Et}px, black ${2 * Et}px, black calc(100% - ${3 * Et}px), transparent calc(100% - ${2 * Et}px), transparent 100%)` : i && !r ? f = `linear-gradient(to right, transparent 0px, transparent ${Et}px, black ${2 * Et}px, black 100%)` : !i && r ? f = `linear-gradient(to right, black 0px, black calc(100% - ${3 * Et}px), transparent calc(100% - ${2 * Et}px), transparent 100%)` : f = "none", ce("div", {
    className: "relative",
    children: [E("div", {
      ref: t,
      className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        margin: `-${Et}px`,
        padding: `${Et}px`,
        height: `calc(100% + ${Et * 2}px)`,
        width: `calc(100% + ${Et * 2}px)`,
        maskImage: f,
        WebkitMaskImage: f,
        scrollSnapType: "x mandatory"
      },
      children: Array.isArray(e) ? e.map((p, d) => E("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: Et + $C + "px"
        },
        children: p
      }, d)) : e && E("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: Et + $C + "px"
        },
        children: e
      })
    }), i && E(Oo, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: ye("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: DI,
      label: "Previous",
      hideLabel: !0
    }), r && E(Oo, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: ye("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: SI,
      label: "Next",
      hideLabel: !0
    })]
  });
}, HD = we.createContext(null);
function mc() {
  const e = we.useContext(HD);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const GD = we.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: i, children: a, ...o }, s) => {
  const [l, f] = w1({
    ...t,
    axis: e === "horizontal" ? "x" : "y"
  }, n), [p, d] = we.useState(!1), [v, m] = we.useState(!1), g = we.useCallback((O) => {
    O && (d(O.canScrollPrev()), m(O.canScrollNext()));
  }, []), b = we.useCallback(() => {
    f == null || f.scrollPrev();
  }, [f]), y = we.useCallback(() => {
    f == null || f.scrollNext();
  }, [f]), _ = we.useCallback((O) => {
    O.key === "ArrowLeft" ? (O.preventDefault(), b()) : O.key === "ArrowRight" && (O.preventDefault(), y());
  }, [b, y]);
  return we.useEffect(() => {
    !f || !r || r(f);
  }, [f, r]), we.useEffect(() => {
    if (f)
      return g(f), f.on("reInit", g), f.on("select", g), () => {
        f == null || f.off("select", g);
      };
  }, [f, g]), E(HD.Provider, {
    value: {
      carouselRef: l,
      api: f,
      opts: t,
      orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
      scrollPrev: b,
      scrollNext: y,
      canScrollPrev: p,
      canScrollNext: v
    },
    children: E("div", {
      ref: s,
      onKeyDownCapture: _,
      className: ye("group/carousel relative", i),
      role: "region",
      "aria-roledescription": "carousel",
      ...o,
      children: a
    })
  });
});
GD.displayName = "Carousel";
const KD = we.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${Et / 2}px, black ${Et}px, black calc(100% - ${Et}px), transparent calc(100% - ${Et / 2}px), transparent 100%)`, { carouselRef: i, orientation: a } = mc();
  return E("div", {
    ref: i,
    className: "overflow-hidden",
    style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      margin: `-${Et}px`,
      padding: `${Et}px`,
      height: `calc(100% + ${Et * 2}px)`,
      width: `calc(100% + ${Et * 2}px)`,
      maskImage: n,
      WebkitMaskImage: n
    },
    children: E("div", {
      ref: r,
      className: ye("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
KD.displayName = "CarouselContent";
const VD = we.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = mc();
  return E("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: ye("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
VD.displayName = "CarouselItem";
const YD = we.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: i, scrollPrev: a, canScrollPrev: o } = mc();
  return E("div", {
    className: ye("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: E(Oo, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: ye("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: a,
      ...r,
      label: "Previous",
      icon: nF,
      hideLabel: !0
    })
  });
});
YD.displayName = "CarouselPrevious";
const XD = we.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: i, scrollNext: a, canScrollNext: o } = mc();
  return E("div", {
    className: ye("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: E(Oo, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: ye("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: a,
      ...r,
      label: "Next",
      icon: hF,
      hideLabel: !0
    })
  });
});
XD.displayName = "CarouselNext";
const ZD = we.forwardRef(({ ...e }, t) => {
  const { api: r } = mc(), [, n] = we.useState(!1), i = we.useRef(null), a = we.useCallback(() => {
    n((v) => !v);
  }, []);
  we.useEffect(() => {
    if (r)
      return r.on("select", a), r.on("reInit", a), () => {
        r.off("select", a), r.off("reInit", a);
      };
  }, [r, a]);
  const o = (r == null ? void 0 : r.scrollSnapList().length) || 0, s = (r == null ? void 0 : r.selectedScrollSnap()) || 0;
  if (we.useEffect(() => {
    if (!i.current) return;
    const v = i.current, m = 16, g = s * m - v.clientWidth / 2 + m / 2;
    v.scrollTo({
      left: g,
      behavior: "smooth"
    });
  }, [s]), we.useEffect(() => {
    const v = i.current;
    if (!v) return;
    const m = (g) => {
      g.preventDefault(), g.stopPropagation();
    };
    return v.addEventListener("wheel", m, {
      passive: !1
    }), v.addEventListener("touchmove", m, {
      passive: !1
    }), () => {
      v.removeEventListener("wheel", m), v.removeEventListener("touchmove", m);
    };
  }, []), o <= 1)
    return null;
  const l = o > 5 ? 5 : o, f = Array.from({
    length: o
  }, (v, m) => m), p = Math.min(l, o) * 16, d = (v) => {
    if (l === o) return null;
    const m = Math.abs(v - s);
    if (m === 0 || m === 1) return "scale-100";
    if (m === 2) return s === 0 || s === o - 1 ? "scale-100" : "scale-75";
    if (m === 3) return s === 0 || s === o - 1 ? "scale-75" : "scale-50";
    if (m >= 4) return "scale-50";
  };
  return E("div", {
    ref: t,
    className: ye("flex justify-center", e.className),
    children: E("div", {
      className: "relative overflow-hidden",
      style: {
        width: `${p}px`
      },
      children: E("div", {
        ref: i,
        className: "flex w-full gap-0 overflow-x-scroll",
        style: {
          scrollbarWidth: "none",
          overscrollBehavior: "none"
        },
        tabIndex: 0,
        "aria-label": "Carousel pagination",
        onKeyDown: (v) => {
          v.key === "ArrowLeft" ? (v.preventDefault(), r == null || r.scrollPrev()) : v.key === "ArrowRight" && (v.preventDefault(), r == null || r.scrollNext());
        },
        children: f.map((v) => E("button", {
          className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
          "aria-label": `Go to slide ${v + 1}`,
          "aria-current": v === s ? "true" : void 0,
          onClick: () => r == null ? void 0 : r.scrollTo(v),
          tabIndex: -1,
          children: E("div", {
            className: ye("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", v === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", d(v))
          })
        }, v))
      })
    })
  });
});
ZD.displayName = "CarouselDots";
const fre = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function dre(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function pre(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function _1(e = {}) {
  let t, r, n, i, a = null, o = 0, s = !1, l = !1, f = !1, p = !1;
  function d($, j) {
    r = $;
    const {
      mergeOptions: F,
      optionsAtMedia: V
    } = j, Z = F(fre, _1.globalOptions), Q = F(Z, e);
    if (t = V(Q), r.scrollSnapList().length <= 1) return;
    p = t.jump, n = !1, i = dre(r, t.delay);
    const {
      eventStore: G,
      ownerDocument: X
    } = r.internalEngine(), te = !!r.internalEngine().options.watchDrag, ie = pre(r, t.rootNode);
    G.add(X, "visibilitychange", _), te && r.on("pointerDown", S), te && !t.stopOnInteraction && r.on("pointerUp", P), t.stopOnMouseEnter && G.add(ie, "mouseenter", x), t.stopOnMouseEnter && !t.stopOnInteraction && G.add(ie, "mouseleave", A), t.stopOnFocusIn && r.on("slideFocusStart", y), t.stopOnFocusIn && !t.stopOnInteraction && G.add(r.containerNode(), "focusout", b), t.playOnInit && b();
  }
  function v() {
    r.off("pointerDown", S).off("pointerUp", P).off("slideFocusStart", y), y(), n = !0, s = !1;
  }
  function m() {
    const {
      ownerWindow: $
    } = r.internalEngine();
    $.clearTimeout(o), o = $.setTimeout(D, i[r.selectedScrollSnap()]), a = (/* @__PURE__ */ new Date()).getTime(), r.emit("autoplay:timerset");
  }
  function g() {
    const {
      ownerWindow: $
    } = r.internalEngine();
    $.clearTimeout(o), o = 0, a = null, r.emit("autoplay:timerstopped");
  }
  function b() {
    if (!n) {
      if (O()) {
        f = !0;
        return;
      }
      s || r.emit("autoplay:play"), m(), s = !0;
    }
  }
  function y() {
    n || (s && r.emit("autoplay:stop"), g(), s = !1);
  }
  function _() {
    if (O())
      return f = s, y();
    f && b();
  }
  function O() {
    const {
      ownerDocument: $
    } = r.internalEngine();
    return $.visibilityState === "hidden";
  }
  function S() {
    l || y();
  }
  function P() {
    l || b();
  }
  function x() {
    l = !0, y();
  }
  function A() {
    l = !1, b();
  }
  function C($) {
    typeof $ < "u" && (p = $), b();
  }
  function M() {
    s && y();
  }
  function N() {
    s && b();
  }
  function z() {
    return s;
  }
  function D() {
    const {
      index: $
    } = r.internalEngine(), j = $.clone().add(1).get(), F = r.scrollSnapList().length - 1, V = t.stopOnLastSnap && j === F;
    if (r.canScrollNext() ? r.scrollNext(p) : r.scrollTo(0, p), r.emit("autoplay:select"), V) return y();
    b();
  }
  function W() {
    if (!a) return null;
    const $ = i[r.selectedScrollSnap()], j = (/* @__PURE__ */ new Date()).getTime() - a;
    return $ - j;
  }
  return {
    name: "autoplay",
    options: e,
    init: d,
    destroy: v,
    play: C,
    stop: M,
    reset: N,
    isPlaying: z,
    timeUntilNext: W
  };
}
_1.globalOptions = void 0;
function Ra() {
  return Ra = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
var hre = 0.996, vre = function(t, r) {
  return r === void 0 && (r = hre), t * r / (1 - r);
};
function mre(e) {
  return e[e.length - 1];
}
function gre(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var yre = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function ay(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function jC(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Zo(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Zo(t);
  }), e;
}
function bre() {
  var e = {};
  function t(i, a) {
    return e[i] = (e[i] || []).concat(a), function() {
      return r(i, a);
    };
  }
  function r(i, a) {
    e[i] = (e[i] || []).filter(function(o) {
      return o !== a;
    });
  }
  function n(i, a) {
    i in e && e[i].forEach(function(o) {
      return o(a);
    });
  }
  return Zo({
    on: t,
    off: r,
    dispatch: n
  });
}
function xre(e) {
  var t = [], r = function(o) {
    return o.addEventListener("wheel", e, {
      passive: !1
    }), t.push(o), function() {
      return n(o);
    };
  }, n = function(o) {
    o.removeEventListener("wheel", e), t = t.filter(function(s) {
      return s !== o;
    });
  }, i = function() {
    t.forEach(n);
  };
  return Zo({
    observe: r,
    unobserve: n,
    disconnect: i
  });
}
var wre = 16 * 1.125, _re = typeof window < "u" && window.innerHeight || 800, oy = [1, wre, _re];
function Ore(e) {
  var t = e.deltaX * oy[e.deltaMode], r = e.deltaY * oy[e.deltaMode], n = (e.deltaZ || 0) * oy[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var Sre = [-1, -1, -1];
function Are(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? Sre : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Ra({}, e, {
    axisDelta: e.axisDelta.map(function(n, i) {
      return n * r[i];
    })
  });
}
var Pre = 700, Tre = function(t) {
  return Ra({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return yre(r, -700, Pre);
    })
  });
}, uy = process.env.NODE_ENV !== "production", Ere = 0.6, Cre = 0.96, Ire = 2, kC = 5, LC = /* @__PURE__ */ Zo({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), Mre = 400;
function BC() {
  return {
    isStarted: !1,
    isStartPublished: !1,
    isMomentum: !1,
    startTime: 0,
    lastAbsDelta: 1 / 0,
    axisMovement: [0, 0, 0],
    axisVelocity: [0, 0, 0],
    accelerationFactors: [],
    scrollPoints: [],
    scrollPointsToMerge: [],
    willEndTimeout: Mre
  };
}
function Rre(e) {
  e === void 0 && (e = {});
  var t = bre(), r = t.on, n = t.off, i = t.dispatch, a = LC, o = BC(), s, l = !1, f, p = function($) {
    Array.isArray($) ? $.forEach(function(j) {
      return g(j);
    }) : g($);
  }, d = function($) {
    return $ === void 0 && ($ = {}), Object.values($).some(function(j) {
      return j == null;
    }) ? (uy && console.error("updateOptions ignored! undefined & null options not allowed"), a) : a = Zo(Ra({}, LC, a, $));
  }, v = function($) {
    var j = Ra({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return ay(j.axisMovement, j.axisVelocity.map(function(F) {
          return vre(F);
        }));
      }
    }, $);
    i("wheel", Ra({}, j, {
      previous: f
    })), f = j;
  }, m = function($, j) {
    var F = a, V = F.preventWheelAction, Z = j[0], Q = j[1], G = j[2];
    if (typeof V == "boolean") return V;
    switch (V) {
      case "x":
        return Math.abs(Z) >= $;
      case "y":
        return Math.abs(Q) >= $;
      case "z":
        return Math.abs(G) >= $;
      default:
        return uy && console.warn("unsupported preventWheelAction value: " + V, "warn"), !1;
    }
  }, g = function($) {
    var j = Tre(Are(Ore($), a.reverseSign)), F = j.axisDelta, V = j.timeStamp, Z = jC(F);
    if ($.preventDefault && m(Z, F) && $.preventDefault(), o.isStarted ? o.isMomentum && Z > Math.max(2, o.lastAbsDelta * 2) && (M(!0), A()) : A(), Z === 0 && Object.is && Object.is($.deltaX, -0)) {
      l = !0;
      return;
    }
    s = $, o.axisMovement = ay(o.axisMovement, F), o.lastAbsDelta = Z, o.scrollPointsToMerge.push({
      axisDelta: F,
      timeStamp: V
    }), b(), v({
      axisDelta: F,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, C();
  }, b = function() {
    o.scrollPointsToMerge.length === Ire ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function($) {
        return $.axisDelta;
      }).reduce(ay),
      timeStamp: gre(o.scrollPointsToMerge.map(function($) {
        return $.timeStamp;
      }))
    }), _(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || P()) : o.isStartPublished || y();
  }, y = function() {
    o.axisVelocity = mre(o.scrollPointsToMerge).axisDelta.map(function($) {
      return $ / o.willEndTimeout;
    });
  }, _ = function() {
    var $ = o.scrollPoints, j = $[0], F = $[1];
    if (!(!F || !j)) {
      var V = j.timeStamp - F.timeStamp;
      if (V <= 0) {
        uy && console.warn("invalid deltaTime");
        return;
      }
      var Z = j.axisDeltaSum.map(function(G) {
        return G / V;
      }), Q = Z.map(function(G, X) {
        return G / (o.axisVelocity[X] || 1);
      });
      o.axisVelocity = Z, o.accelerationFactors.push(Q), O(V);
    }
  }, O = function($) {
    var j = Math.ceil($ / 10) * 10 * 1.2;
    o.isMomentum || (j = Math.max(100, j * 2)), o.willEndTimeout = Math.min(1e3, Math.round(j));
  }, S = function($) {
    return $ === 0 ? !0 : $ <= Cre && $ >= Ere;
  }, P = function() {
    if (o.accelerationFactors.length >= kC) {
      if (l && (l = !1, jC(o.axisVelocity) >= 0.2)) {
        x();
        return;
      }
      var $ = o.accelerationFactors.slice(kC * -1), j = $.every(function(F) {
        var V = !!F.reduce(function(Q, G) {
          return Q && Q < 1 && Q === G ? 1 : 0;
        }), Z = F.filter(S).length === F.length;
        return V || Z;
      });
      j && x(), o.accelerationFactors = $;
    }
  }, x = function() {
    o.isMomentum = !0;
  }, A = function() {
    o = BC(), o.isStarted = !0, o.startTime = Date.now(), f = void 0, l = !1;
  }, C = /* @__PURE__ */ function() {
    var q;
    return function() {
      clearTimeout(q), q = setTimeout(M, o.willEndTimeout);
    };
  }(), M = function($) {
    $ === void 0 && ($ = !1), o.isStarted && (o.isMomentum && $ ? v({
      isEnding: !0,
      isMomentumCancel: !0
    }) : v({
      isEnding: !0
    }), o.isMomentum = !1, o.isStarted = !1);
  }, N = xre(p), z = N.observe, D = N.unobserve, W = N.disconnect;
  return d(e), Zo({
    on: r,
    off: n,
    observe: z,
    unobserve: D,
    disconnect: W,
    feedWheel: p,
    updateOptions: d
  });
}
var Dre = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
O1.globalOptions = void 0;
var Nre = process.env.NODE_ENV !== "production";
function O1(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(a, o) {
    var s, l, f = o.mergeOptions, p = o.optionsAtMedia, d = f(Dre, O1.globalOptions), v = f(d, e);
    t = p(v);
    var m = a.internalEngine(), g = (s = t.target) != null ? s : a.containerNode().parentNode, b = (l = t.forceWheelAxis) != null ? l : m.options.axis, y = Rre({
      preventWheelAction: b,
      reverseSign: [!0, !0, !1]
    }), _ = y.observe(g), O = y.on("wheel", W), S = !1, P;
    function x(q) {
      try {
        P = new MouseEvent("mousedown", q.event), D(P);
      } catch {
        return Nre && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      S = !0, C(), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass);
    }
    function A(q) {
      S = !1, D(z("mouseup", q)), M(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass);
    }
    function C() {
      document.documentElement.addEventListener("mousemove", N, !0), document.documentElement.addEventListener("mouseup", N, !0), document.documentElement.addEventListener("mousedown", N, !0);
    }
    function M() {
      document.documentElement.removeEventListener("mousemove", N, !0), document.documentElement.removeEventListener("mouseup", N, !0), document.documentElement.removeEventListener("mousedown", N, !0);
    }
    function N(q) {
      S && q.isTrusted && q.stopImmediatePropagation();
    }
    function z(q, $) {
      var j, F;
      if (b === m.options.axis) {
        var V = $.axisMovement;
        j = V[0], F = V[1];
      } else {
        var Z = $.axisMovement;
        F = Z[0], j = Z[1];
      }
      if (!m.options.skipSnaps && !m.options.dragFree) {
        var Q = m.containerRect.width, G = m.containerRect.height;
        j = j < 0 ? Math.max(j, -Q) : Math.min(j, Q), F = F < 0 ? Math.max(F, -G) : Math.min(F, G);
      }
      return new MouseEvent(q, {
        clientX: P.clientX + j,
        clientY: P.clientY + F,
        screenX: P.screenX + j,
        screenY: P.screenY + F,
        movementX: j,
        movementY: F,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function D(q) {
      a.containerNode().dispatchEvent(q);
    }
    function W(q) {
      var $ = q.axisDelta, j = $[0], F = $[1], V = b === "x" ? j : F, Z = b === "x" ? F : j, Q = q.isMomentum && q.previous && !q.previous.isMomentum, G = q.isEnding && !q.isMomentum || Q, X = Math.abs(V) > Math.abs(Z);
      X && !S && !q.isMomentum && x(q), S && (G ? A(q) : D(z("mousemove", q)));
    }
    r = function() {
      _(), O(), M();
    };
  }
  var i = {
    name: "wheelGestures",
    options: e,
    init: n,
    destroy: function() {
      return r();
    }
  };
  return i;
}
const $re = Xs({
  variants: {
    peek: { true: "", false: "" },
    default: {
      1: "basis-full",
      2: "basis-1/2",
      3: "basis-1/3",
      4: "basis-1/4",
      6: "basis-1/6",
      peek1: "basis-[85%]",
      peek2: "basis-[48%]",
      peek3: "basis-[32%]",
      peek4: "basis-[24%]",
      peek6: "basis-[16%]"
    },
    xs: {
      1: "@xl:basis-full",
      2: "@xl:basis-1/2",
      3: "@xl:basis-1/3",
      4: "@xl:basis-1/4",
      6: "@xl:basis-1/6",
      peek1: "@xl:basis-[85%]",
      peek2: "@xl:basis-[48%]",
      peek3: "@xl:basis-[32%]",
      peek4: "@xl:basis-[24%]",
      peek6: "@xl:basis-[16%]"
    },
    sm: {
      1: "@2xl:basis-full",
      2: "@2xl:basis-1/2",
      3: "@2xl:basis-1/3",
      4: "@2xl:basis-1/4",
      6: "@2xl:basis-1/6",
      peek1: "@2xl:basis-[85%]",
      peek2: "@2xl:basis-[48%]",
      peek3: "@2xl:basis-[32%]",
      peek4: "@2xl:basis-[24%]",
      peek6: "@2xl:basis-[16%]"
    },
    md: {
      1: "@3xl:basis-full",
      2: "@3xl:basis-1/2",
      3: "@3xl:basis-1/3",
      4: "@3xl:basis-1/4",
      6: "@3xl:basis-1/6",
      peek1: "@3xl:basis-[85%]",
      peek2: "@3xl:basis-[48%]",
      peek3: "@3xl:basis-[32%]",
      peek4: "@3xl:basis-[24%]",
      peek6: "@3xl:basis-[16%]"
    },
    lg: {
      1: "@4xl:basis-full",
      2: "@4xl:basis-1/2",
      3: "@4xl:basis-1/3",
      4: "@4xl:basis-1/4",
      6: "@4xl:basis-1/6",
      peek1: "@4xl:basis-[85%]",
      peek2: "@4xl:basis-[48%]",
      peek3: "@4xl:basis-[32%]",
      peek4: "@4xl:basis-[24%]",
      peek6: "@4xl:basis-[16%]"
    },
    xl: {
      1: "@5xl:basis-full",
      2: "@5xl:basis-1/2",
      3: "@5xl:basis-1/3",
      4: "@5xl:basis-1/4",
      6: "@5xl:basis-1/6",
      peek1: "@5xl:basis-[85%]",
      peek2: "@5xl:basis-[48%]",
      peek3: "@5xl:basis-[32%]",
      peek4: "@5xl:basis-[24%]",
      peek6: "@5xl:basis-[16%]"
    }
  },
  defaultVariants: {
    peek: !1,
    default: 1
  }
});
function Ku(e, t, r) {
  if (r) {
    const n = (e || 1) / 2;
    return t ? `peek${n}` : n;
  }
  return t ? `peek${e || 1}` : e || 1;
}
const yie = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: i = !1, delay: a = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const l = k.Children.toArray(e), f = k.useRef(i ? _1({
    delay: a,
    stopOnInteraction: !0
  }) : void 0), p = () => {
    f.current && f.current.stop();
  }, d = () => {
    f.current && f.current.play();
  };
  return t ? E(GD, {
    className: "flex w-full flex-col gap-3 @container",
    opts: {
      align: o ? "center" : "start",
      slidesToScroll: "auto",
      duration: 20,
      containScroll: !1
    },
    plugins: [f.current, O1()].filter(Boolean),
    onMouseEnter: i ? p : void 0,
    onMouseLeave: i ? d : void 0,
    children: ce("div", {
      className: "flex flex-col gap-5",
      children: [ce("div", {
        className: "relative",
        children: [E(KD, {
          children: k.Children.map(l, (v, m) => {
            var b, y, _, O;
            const g = s == null ? void 0 : s.find((S) => S.index === m);
            return E(VD, {
              className: $re({
                default: Ku(t.default, o),
                xs: Ku(t.xs, o, (b = g == null ? void 0 : g.sizes) == null ? void 0 : b.includes("xs")),
                sm: Ku(t.sm, o, (y = g == null ? void 0 : g.sizes) == null ? void 0 : y.includes("sm")),
                md: Ku(t.md, o, (_ = g == null ? void 0 : g.sizes) == null ? void 0 : _.includes("md")),
                lg: Ku(t.lg, o, (O = g == null ? void 0 : g.sizes) == null ? void 0 : O.includes("lg")),
                peek: o
              }),
              children: v
            }, m);
          })
        }), r && ce(Un, {
          children: [E(YD, {
            label: "Previous"
          }), E(XD, {
            label: "Next"
          })]
        })]
      }), n && E(ZD, {})]
    })
  }) : E(lre, {
    children: e
  });
}, JD = Nn(null);
function bie({ children: e, layout: t }) {
  return E(JD.Provider, {
    value: t,
    children: e
  });
}
function xie() {
  return Mr(JD);
}
const sy = [{
  id: "bottom",
  path: "M11.9948 17.5244C14.2802 17.5244 16.5188 18.2872 18.2805 19.7631C16.5189 21.1914 14.2801 22 11.9948 22C9.61453 21.9999 7.42426 21.1436 5.71037 19.7631C7.47193 18.3348 9.70955 17.5245 11.9948 17.5244Z"
}, {
  id: "left",
  path: "M4.23721 5.71327C5.66526 7.47502 6.47496 9.71299 6.47503 11.9985C6.47502 14.2841 5.71292 16.5231 4.23721 18.2849C2.80903 16.5231 2 14.2841 2 11.9985C2.00007 9.61784 2.85682 7.42739 4.23721 5.71327Z"
}, {
  id: "right",
  path: "M19.7622 5.71327C21.1902 7.47502 21.9999 9.71299 22 11.9985C22 14.2841 21.2379 16.5231 19.7622 18.2849C18.334 16.5231 17.525 14.2841 17.525 11.9985C17.525 9.61784 18.3818 7.42739 19.7622 5.71327Z"
}, {
  id: "top",
  path: "M11.9948 2C14.2802 2 16.5188 2.76274 18.2805 4.2387C16.5189 5.66699 14.2801 6.47557 11.9948 6.47557C9.61453 6.4755 7.42426 5.61919 5.71037 4.2387C7.47193 2.81041 9.70955 2.00007 11.9948 2Z"
}], jre = (e, t) => {
  var i, a, o;
  const r = ((i = e.className) == null ? void 0 : i.includes("text-")) && !((a = e.className) != null && a.includes("text-current")) || ((o = e.style) == null ? void 0 : o.color) !== void 0, n = xq();
  return ce("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [E("defs", {
      children: sy.map((s) => E("clipPath", {
        id: `${n}-${s.id}`,
        children: E("path", {
          d: s.path
        })
      }, s.id))
    }), r ? sy.map((s) => E("path", {
      d: s.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, s.id)) : sy.map((s) => E("foreignObject", {
      x: "0",
      y: "0",
      width: "24",
      height: "24",
      clipPath: `url(#${n}-${s.id})`,
      children: E("div", {
        style: {
          width: "100%",
          height: "100%",
          background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
        }
      })
    }, s.id))]
  });
}, kre = wt(jre);
function wie({ title: e, description: t, onClick: r, onClose: n, isVisible: i, dismissable: a = !1, trackVisibility: o, type: s, ...l }) {
  const [f, p] = ct(i);
  Nt(() => {
    p(i), o && o(i);
  }, [i, o]);
  const d = () => {
    p(!1), n && n();
  }, v = () => s === "one-campaign" ? {
    background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
    borderRadius: "12px",
    padding: "1px"
  } : {}, m = () => s === "one-campaign" ? {
    background: "#fef7f8",
    borderRadius: "11px"
  } : {}, g = () => s === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary";
  return f && E("div", {
    children: E("div", {
      className: "p-2",
      children: E("div", {
        style: v(),
        children: ce("div", {
          className: g(),
          style: m(),
          onClick: r,
          children: [ce(Un, {
            children: [s === "one-campaign" ? E("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: E(rr, {
                icon: kre,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : E("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: E(iF, {
                module: l.module,
                size: "lg"
              })
            }), E("div", {
              className: "flex flex-1 flex-col",
              children: ce("div", {
                children: [E("h3", {
                  className: "text-lg font-medium",
                  children: e
                }), E("p", {
                  className: "text-f1-foreground-secondary",
                  children: t
                })]
              })
            })]
          }), a && E("div", {
            className: "h-6 w-6",
            children: E(Hn, {
              variant: "ghost",
              icon: NI,
              size: "sm",
              hideLabel: !0,
              onClick: d,
              label: "Close"
            })
          })]
        })
      })
    })
  });
}
const Lre = wt(function({ bare: t = !1, ...r }, n) {
  return E("div", {
    ref: n,
    role: "separator",
    className: ye("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), Bre = ({ text: e, isCompleted: t }) => ce("div", {
  className: "flex flex-row items-center gap-2",
  children: [E(rr, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? Kb : fF,
    size: "md"
  }), E("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), qre = ({ title: e, items: t }) => ce("div", {
  className: "px-4 pb-2",
  children: [E("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), E("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => E(Bre, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), Fre = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: i }) => {
  const a = t && n && r, o = (s = !1) => ce(Un, {
    children: [E(Hn, {
      variant: "outline",
      label: i,
      onClick: e,
      size: s ? "lg" : void 0
    }), a && E(Hn, {
      variant: "promote",
      label: n,
      onClick: () => {
        r(), e == null || e();
      },
      size: s ? "lg" : void 0
    })]
  });
  return ce(lF, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [E("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), E("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, QD = wt(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: i, nextSteps: a, closeLabel: o, portalContainer: s }, l) => {
  const [f, p] = ct(!1), d = Ki(() => {
    p(!0), setTimeout(() => {
      t == null || t(), p(!1);
    }, 200);
  }, [t]);
  return E(aF, {
    open: e && !f,
    onOpenChange: (v) => !v && (d == null ? void 0 : d()),
    children: ce(oF, {
      ref: l,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [ce(uF, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [E(OF, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), ce("div", {
          className: "flex flex-col gap-0.5",
          children: [E(sF, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? i == null ? void 0 : i.title : n == null ? void 0 : n.title
          }), E(cF, {
            className: "text-lg sm:text-base",
            children: r ? i == null ? void 0 : i.description : n == null ? void 0 : n.description
          })]
        })]
      }), r && a ? ce(Un, {
        children: [E(Lre, {}), E(qre, {
          title: a.title,
          items: a.items
        })]
      }) : null, E(Fre, {
        onClose: d,
        success: r,
        successButtonLabel: i.buttonLabel,
        successButtonOnClick: i.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
QD.displayName = "UpsellRequestResponseDialog";
var Wre = "Label", eN = we.forwardRef((e, t) => /* @__PURE__ */ E(
  OI.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var i;
      r.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
eN.displayName = Wre;
var tN = eN;
const zre = we.forwardRef(({ className: e, ...t }, r) => E(tN, {
  ref: r,
  className: ye("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
zre.displayName = tN.displayName;
function _ie({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: i, errorMessage: a, successMessage: o, loadingState: s, nextSteps: l, closeLabel: f, variant: p = "promote", onModalStateChange: d, portalContainer: v, ...m }) {
  const [g, b] = ct(null), [y, _] = ct(!1), O = async () => {
    if (r) {
      _(!0);
      try {
        await r(), n && (b("success"), d == null || d(!0));
      } catch {
        b("error"), d == null || d(!0);
      } finally {
        _(!1);
      }
    }
  }, S = () => {
    b(null), d == null || d(!1);
  }, P = i || y, x = P ? s.label : e;
  return ce(Un, {
    children: [E(Hn, {
      variant: p,
      label: x,
      icon: t ? dF : void 0,
      onClick: O,
      loading: P,
      ...m
    }), n && g && E(QD, {
      open: !0,
      onClose: S,
      success: g === "success",
      errorMessage: a,
      successMessage: o,
      nextSteps: l,
      closeLabel: f,
      portalContainer: v
    })]
  });
}
const Ure = wt(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: i, secondaryAction: a, onClose: o, isLoading: s = !1, children: l, variant: f = "default" }, p) {
  const d = n == null ? void 0 : n.includes(".mp4"), [v, m] = ct(!1), g = () => {
    o && o(), m(!0);
  };
  return s ? E(rN, {
    ref: p
  }) : v ? null : ce("div", {
    ref: p,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    children: [E("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: d ? E("video", {
        src: n,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }) : E("img", {
        src: n,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      })
    }), ce("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [ce("div", {
        className: ye("flex w-full flex-col gap-1", f === "default" ? "sm:max-w-lg" : void 0),
        children: [E("h3", {
          className: "font-bold text-xl text-f1-foreground",
          children: t
        }), r && E("p", {
          className: "text-base text-f1-foreground-secondary",
          children: r
        })]
      }), ce("div", {
        className: "flex gap-3",
        children: [i && E(Hn, {
          onClick: i.onClick,
          label: i.label,
          variant: i.variant || "default",
          size: "md",
          icon: i.icon
        }), a && E(Hn, {
          onClick: a.onClick,
          label: a.label,
          variant: a.variant || "outline",
          size: "md",
          icon: a.icon
        }), l]
      })]
    }), o && E("div", {
      className: "absolute right-2 top-2 z-10",
      children: E(Hn, {
        variant: "ghost",
        icon: NI,
        size: "sm",
        hideLabel: !0,
        onClick: g,
        label: "Close"
      })
    })]
  });
}), rN = wt(function(t, r) {
  return ce("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [E("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: E(on, {
        className: "h-full w-full rounded-lg"
      })
    }), ce("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [ce("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [E(on, {
          className: "h-7 w-3/4"
        }), E(on, {
          className: "h-4 w-full"
        }), E(on, {
          className: "h-4 w-2/3"
        })]
      }), ce("div", {
        className: "flex gap-3",
        children: [E(on, {
          className: "h-9 w-32"
        }), E(on, {
          className: "h-9 w-24"
        })]
      })]
    }), E("div", {
      className: "absolute right-2 top-2 z-10",
      children: E(on, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), Hre = II(Ure, rN);
Hre.displayName = "BaseBanner";
const nN = {
  get: () => ({}),
  set: () => Promise.resolve()
}, iN = Nn(nN), Oie = ({ children: e, handler: t }) => E(iN.Provider, {
  value: t ?? nN,
  children: e
}), Sie = () => {
  const e = Mr(iN);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
function Ks(e) {
  "@babel/helpers - typeof";
  return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ks(e);
}
function Gre(e, t) {
  if (Ks(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ks(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kre(e) {
  var t = Gre(e, "string");
  return Ks(t) == "symbol" ? t : t + "";
}
function gc(e, t, r) {
  return (t = Kre(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function qC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function FC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qC(Object(r), !0).forEach(function(n) {
      gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Vre = {
  top: function(t, r) {
    return Math.abs(r.y - t.top);
  },
  right: function(t, r) {
    return Math.abs(t.right - r.x);
  },
  bottom: function(t, r) {
    return Math.abs(t.bottom - r.y);
  },
  left: function(t, r) {
    return Math.abs(r.x - t.left);
  }
}, aN = Symbol("closestEdge");
function Yre(e, t) {
  var r, n, i = t.element, a = t.input, o = t.allowedEdges, s = {
    x: a.clientX,
    y: a.clientY
  }, l = i.getBoundingClientRect(), f = o.map(function(d) {
    return {
      edge: d,
      value: Vre[d](l, s)
    };
  }), p = (r = (n = f.sort(function(d, v) {
    return d.value - v.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return FC(FC({}, e), {}, gc({}, aN, p));
}
function Aie(e) {
  var t;
  return (t = e[aN]) !== null && t !== void 0 ? t : null;
}
function Nd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(i) {
      return i();
    });
  };
}
function Xre(e) {
  if (Array.isArray(e)) return e;
}
function Zre(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (p) {
      f = !0, i = p;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (f) throw i;
      }
    }
    return s;
  }
}
function zb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oN(e, t) {
  if (e) {
    if (typeof e == "string") return zb(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zb(e, t) : void 0;
  }
}
function Jre() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uN(e, t) {
  return Xre(e) || Zre(e, t) || oN(e, t) || Jre();
}
var cy = {}, Vu = {}, WC;
function sN() {
  if (WC) return Vu;
  WC = 1, Object.defineProperty(Vu, "__esModule", { value: !0 }), Vu.bind = void 0;
  function e(t, r) {
    var n = r.type, i = r.listener, a = r.options;
    return t.addEventListener(n, i, a), function() {
      t.removeEventListener(n, i, a);
    };
  }
  return Vu.bind = e, Vu;
}
var ya = {}, zC;
function Qre() {
  if (zC) return ya;
  zC = 1;
  var e = ya && ya.__assign || function() {
    return e = Object.assign || function(a) {
      for (var o, s = 1, l = arguments.length; s < l; s++) {
        o = arguments[s];
        for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (a[f] = o[f]);
      }
      return a;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(ya, "__esModule", { value: !0 }), ya.bindAll = void 0;
  var t = /* @__PURE__ */ sN();
  function r(a) {
    if (!(typeof a > "u"))
      return typeof a == "boolean" ? {
        capture: a
      } : a;
  }
  function n(a, o) {
    if (o == null)
      return a;
    var s = e(e({}, a), { options: e(e({}, r(o)), r(a.options)) });
    return s;
  }
  function i(a, o, s) {
    var l = o.map(function(f) {
      var p = n(f, s);
      return (0, t.bind)(a, p);
    });
    return function() {
      l.forEach(function(p) {
        return p();
      });
    };
  }
  return ya.bindAll = i, ya;
}
var UC;
function ene() {
  return UC || (UC = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ sN();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ Qre();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  }(cy)), cy;
}
var Jo = /* @__PURE__ */ ene(), cN = "data-pdnd-honey-pot";
function lN(e) {
  return e instanceof Element && e.hasAttribute(cN);
}
function fN(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = uN(t, 2), n = r[0], i = r[1];
  return n ? lN(n) ? i ?? null : n : null;
}
var tne = 2147483647;
function HC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function GC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? HC(Object(r), !0).forEach(function(n) {
      gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : HC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Vs = 2, KC = Vs / 2;
function rne(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function nne(e) {
  return {
    x: e.x - KC,
    y: e.y - KC
  };
}
function ine(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function ane(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Vs),
    y: Math.min(e.y, window.innerHeight - Vs)
  };
}
function VC(e) {
  var t = e.client, r = ane(ine(nne(rne(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Vs,
    height: Vs
  });
}
function YC(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function one(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function une(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(cN, "true");
  var n = VC({
    client: t
  });
  Object.assign(r.style, GC(GC({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, YC({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: tne
  })), document.body.appendChild(r);
  var i = Jo.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = VC({
        client: s
      }), Object.assign(r.style, YC({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(o) {
    var s = o.current;
    if (i(), one({
      client: s,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function l() {
      f(), r.remove();
    }
    var f = Jo.bindAll(window, [
      {
        type: "pointerdown",
        listener: l
      },
      {
        type: "pointermove",
        listener: l
      },
      {
        type: "focusin",
        listener: l
      },
      {
        type: "focusout",
        listener: l
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: l
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: l
      },
      {
        type: "dragover",
        listener: l
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function sne() {
  var e = null;
  function t() {
    return e = null, Jo.bind(window, {
      type: "pointermove",
      listener: function(i) {
        e = {
          x: i.clientX,
          y: i.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function r() {
    var n = null;
    return function(a) {
      var o = a.eventName, s = a.payload;
      if (o === "onDragStart") {
        var l = s.location.initial.input, f = e ?? {
          x: l.clientX,
          y: l.clientY
        };
        n = une({
          initial: f
        });
      }
      if (o === "onDrop") {
        var p, d = s.location.current.input;
        (p = n) === null || p === void 0 || p({
          current: {
            x: d.clientX,
            y: d.clientY
          }
        }), n = null, e = null;
      }
    };
  }
  return {
    bindEvents: t,
    getOnPostDispatch: r
  };
}
function cne(e) {
  if (Array.isArray(e)) return zb(e);
}
function lne(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fne() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dN(e) {
  return cne(e) || lne(e) || oN(e) || fne();
}
function lu(e) {
  var t = null;
  return function() {
    if (!t) {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = e.apply(this, i);
      t = {
        result: o
      };
    }
    return t.result;
  };
}
var dne = lu(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), S1 = lu(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), Ub = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function pne(e) {
  var t = e.dragLeave;
  return S1() ? t.hasOwnProperty(Ub.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !S1())
    return;
  function t() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var r = t();
  function n() {
    r = t();
  }
  Jo.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        r.enterCount = 0, r.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: n
    }, {
      type: "dragend",
      listener: n
    }, {
      type: "dragenter",
      listener: function(a) {
        !r.isOverWindow && r.enterCount === 0 && (a[Ub.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(a) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (a[Ub.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function hne(e) {
  return "nodeName" in e;
}
function vne(e) {
  return hne(e) && e.ownerDocument !== document;
}
function mne(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : S1() ? pne({
    dragLeave: t
  }) : n == null ? !0 : dne() ? vne(n) : n instanceof HTMLIFrameElement;
}
function gne(e) {
  var t = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ function() {
        var r = 0;
        return function() {
          if (r < 20) {
            r++;
            return;
          }
          t();
        };
      }()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: t
    }
  ];
}
function ss(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var yne = function(t) {
  var r = [], n = null, i = function() {
    for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
      s[l] = arguments[l];
    r = s, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return i.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, i;
}, ly = yne(function(e) {
  return e();
}), Rl = /* @__PURE__ */ function() {
  var e = null;
  function t(n) {
    var i = requestAnimationFrame(function() {
      e = null, n();
    });
    e = {
      frameId: i,
      fn: n
    };
  }
  function r() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: t,
    flush: r
  };
}();
function bne(e) {
  var t = e.source, r = e.initial, n = e.dispatchEvent, i = {
    dropTargets: []
  };
  function a(s) {
    n(s), i = {
      dropTargets: s.payload.location.current.dropTargets
    };
  }
  var o = {
    start: function(l) {
      var f = l.nativeSetDragImage, p = {
        current: r,
        previous: i,
        initial: r
      };
      a({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: p,
          nativeSetDragImage: f
        }
      }), Rl.schedule(function() {
        a({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: p
          }
        });
      });
    },
    dragUpdate: function(l) {
      var f = l.current;
      Rl.flush(), ly.cancel(), a({
        eventName: "onDropTargetChange",
        payload: {
          source: t,
          location: {
            initial: r,
            previous: i,
            current: f
          }
        }
      });
    },
    drag: function(l) {
      var f = l.current;
      ly(function() {
        Rl.flush();
        var p = {
          initial: r,
          previous: i,
          current: f
        };
        a({
          eventName: "onDrag",
          payload: {
            source: t,
            location: p
          }
        });
      });
    },
    drop: function(l) {
      var f = l.current, p = l.updatedSourcePayload;
      Rl.flush(), ly.cancel(), a({
        eventName: "onDrop",
        payload: {
          source: p ?? t,
          location: {
            current: f,
            previous: i,
            initial: r
          }
        }
      });
    }
  };
  return o;
}
var Hb = {
  isActive: !1
};
function pN() {
  return !Hb.isActive;
}
function xne(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function wne(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function _ne(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, i = e.dispatchEvent;
  if (!pN())
    return;
  var a = One({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  Hb.isActive = !0;
  var o = {
    current: a
  };
  fy({
    event: t,
    current: a.dropTargets
  });
  var s = bne({
    source: r.payload,
    dispatchEvent: i,
    initial: a
  });
  function l(m) {
    var g = wne({
      current: o.current.dropTargets,
      next: m.dropTargets
    });
    o.current = m, g && s.dragUpdate({
      current: o.current
    });
  }
  function f(m) {
    var g = ss(m), b = lN(m.target) ? fN({
      x: g.clientX,
      y: g.clientY
    }) : m.target, y = n({
      target: b,
      input: g,
      source: r.payload,
      current: o.current.dropTargets
    });
    y.length && (m.preventDefault(), fy({
      event: m,
      current: y
    })), l({
      dropTargets: y,
      input: g
    });
  }
  function p() {
    o.current.dropTargets.length && l({
      dropTargets: [],
      input: o.current.input
    }), s.drop({
      current: o.current,
      updatedSourcePayload: null
    }), d();
  }
  function d() {
    Hb.isActive = !1, v();
  }
  var v = Jo.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(g) {
        f(g), s.drag({
          current: o.current
        });
      }
    }, {
      type: "dragenter",
      listener: f
    }, {
      type: "dragleave",
      listener: function(g) {
        mne({
          dragLeave: g
        }) && (l({
          input: o.current.input,
          dropTargets: []
        }), r.startedFrom === "external" && p());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(g) {
        if (o.current = {
          dropTargets: o.current.dropTargets,
          input: ss(g)
        }, !o.current.dropTargets.length) {
          p();
          return;
        }
        g.preventDefault(), fy({
          event: g,
          current: o.current.dropTargets
        }), s.drop({
          current: o.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: r.type === "external" ? r.getDropPayload(g) : null
        }), d();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(g) {
        o.current = {
          dropTargets: o.current.dropTargets,
          input: ss(g)
        }, p();
      }
    }].concat(dN(gne({
      onDragEnd: p
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  s.start({
    nativeSetDragImage: xne(t)
  });
}
function fy(e) {
  var t, r = e.event, n = e.current, i = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  i != null && r.dataTransfer && (r.dataTransfer.dropEffect = i);
}
function One(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, i = ss(t);
  if (r.startedFrom === "external")
    return {
      input: i,
      dropTargets: []
    };
  var a = n({
    input: i,
    source: r.payload,
    target: t.target,
    current: []
  });
  return {
    input: i,
    dropTargets: a
  };
}
var XC = {
  canStart: pN,
  start: _ne
}, Gb = /* @__PURE__ */ new Map();
function Sne(e) {
  var t = e.typeKey, r = e.mount, n = Gb.get(t);
  if (n)
    return n.usageCount++, n;
  var i = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return Gb.set(t, i), i;
}
function Ane(e) {
  var t = Sne(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), Gb.delete(e.typeKey));
  };
}
function hN(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function ZC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ZC(Object(r), !0).forEach(function(n) {
      gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dy(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Pne(e)) || t) {
      r && (e = r);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(f) {
        throw f;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, o = !0, s = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var f = r.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, a = f;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Pne(e, t) {
  if (e) {
    if (typeof e == "string") return JC(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? JC(e, t) : void 0;
  }
}
function JC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function py(e) {
  return e.slice(0).reverse();
}
function Tne(e) {
  var t = e.typeKey, r = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), i = "data-drop-target-for-".concat(t), a = "[".concat(i, "]");
  function o(m) {
    return n.set(m.element, m), function() {
      return n.delete(m.element);
    };
  }
  function s(m) {
    if (process.env.NODE_ENV !== "production") {
      var g = n.get(m.element);
      g && console.warn("You have already registered a [".concat(t, "] dropTarget on the same element"), {
        existing: g,
        proposed: m
      }), m.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var b = Nd(hN(m.element, {
      attribute: i,
      value: "true"
    }), o(m));
    return lu(b);
  }
  function l(m) {
    var g, b, y, _, O = m.source, S = m.target, P = m.input, x = m.result, A = x === void 0 ? [] : x;
    if (S == null)
      return A;
    if (!(S instanceof Element))
      return S instanceof Node ? l({
        source: O,
        target: S.parentElement,
        input: P,
        result: A
      }) : A;
    var C = S.closest(a);
    if (C == null)
      return A;
    var M = n.get(C);
    if (M == null)
      return A;
    var N = {
      input: P,
      source: O,
      element: M.element
    };
    if (M.canDrop && !M.canDrop(N))
      return l({
        source: O,
        target: M.element.parentElement,
        input: P,
        result: A
      });
    var z = (g = (b = M.getData) === null || b === void 0 ? void 0 : b.call(M, N)) !== null && g !== void 0 ? g : {}, D = (y = (_ = M.getDropEffect) === null || _ === void 0 ? void 0 : _.call(M, N)) !== null && y !== void 0 ? y : r, W = {
      data: z,
      element: M.element,
      dropEffect: D,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return l({
      source: O,
      target: M.element.parentElement,
      input: P,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(dN(A), [W])
    });
  }
  function f(m) {
    var g = m.eventName, b = m.payload, y = dy(b.location.current.dropTargets), _;
    try {
      for (y.s(); !(_ = y.n()).done; ) {
        var O, S = _.value, P = n.get(S.element), x = qi(qi({}, b), {}, {
          self: S
        });
        P == null || (O = P[g]) === null || O === void 0 || O.call(
          P,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          x
        );
      }
    } catch (A) {
      y.e(A);
    } finally {
      y.f();
    }
  }
  var p = {
    onGenerateDragPreview: f,
    onDrag: f,
    onDragStart: f,
    onDrop: f,
    onDropTargetChange: function(g) {
      var b = g.payload, y = new Set(b.location.current.dropTargets.map(function(V) {
        return V.element;
      })), _ = /* @__PURE__ */ new Set(), O = dy(b.location.previous.dropTargets), S;
      try {
        for (O.s(); !(S = O.n()).done; ) {
          var P, x = S.value;
          _.add(x.element);
          var A = n.get(x.element), C = y.has(x.element), M = qi(qi({}, b), {}, {
            self: x
          });
          if (A == null || (P = A.onDropTargetChange) === null || P === void 0 || P.call(A, M), !C) {
            var N;
            A == null || (N = A.onDragLeave) === null || N === void 0 || N.call(A, M);
          }
        }
      } catch (V) {
        O.e(V);
      } finally {
        O.f();
      }
      var z = dy(b.location.current.dropTargets), D;
      try {
        for (z.s(); !(D = z.n()).done; ) {
          var W, q, $ = D.value;
          if (!_.has($.element)) {
            var j = qi(qi({}, b), {}, {
              self: $
            }), F = n.get($.element);
            F == null || (W = F.onDropTargetChange) === null || W === void 0 || W.call(F, j), F == null || (q = F.onDragEnter) === null || q === void 0 || q.call(F, j);
          }
        }
      } catch (V) {
        z.e(V);
      } finally {
        z.f();
      }
    }
  };
  function d(m) {
    p[m.eventName](m);
  }
  function v(m) {
    var g = m.source, b = m.target, y = m.input, _ = m.current, O = l({
      source: g,
      target: b,
      input: y
    });
    if (O.length >= _.length)
      return O;
    for (var S = py(_), P = py(O), x = [], A = 0; A < S.length; A++) {
      var C, M = S[A], N = P[A];
      if (N != null) {
        x.push(N);
        continue;
      }
      var z = x[A - 1], D = S[A - 1];
      if ((z == null ? void 0 : z.element) !== (D == null ? void 0 : D.element))
        break;
      var W = n.get(M.element);
      if (!W)
        break;
      var q = {
        input: y,
        source: g,
        element: W.element
      };
      if (W.canDrop && !W.canDrop(q) || !((C = W.getIsSticky) !== null && C !== void 0 && C.call(W, q)))
        break;
      x.push(qi(qi({}, M), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return py(x);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: v,
    dispatchEvent: d
  };
}
function Ene(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Cne(e)) || t) {
      r && (e = r);
      var n = 0, i = function() {
      };
      return { s: i, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(f) {
        throw f;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, o = !0, s = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var f = r.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, a = f;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Cne(e, t) {
  if (e) {
    if (typeof e == "string") return QC(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? QC(e, t) : void 0;
  }
}
function QC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eI(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ine(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eI(Object(r), !0).forEach(function(n) {
      gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eI(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mne() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(a) {
    t && (!a.canMonitor || a.canMonitor(t.canMonitorArgs)) && t.active.add(a);
  }
  function n(a) {
    var o = Ine({}, a);
    e.add(o), r(o);
    function s() {
      e.delete(o), t && t.active.delete(o);
    }
    return lu(s);
  }
  function i(a) {
    var o = a.eventName, s = a.payload;
    if (o === "onGenerateDragPreview") {
      t = {
        canMonitorArgs: {
          initial: s.location.initial,
          source: s.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var l = Ene(e), f;
      try {
        for (l.s(); !(f = l.n()).done; ) {
          var p = f.value;
          r(p);
        }
      } catch (y) {
        l.e(y);
      } finally {
        l.f();
      }
    }
    if (t) {
      for (var d = Array.from(t.active), v = 0, m = d; v < m.length; v++) {
        var g = m[v];
        if (t.active.has(g)) {
          var b;
          (b = g[o]) === null || b === void 0 || b.call(g, s);
        }
      }
      o === "onDrop" && (t.active.clear(), t = null);
    }
  }
  return {
    dispatchEvent: i,
    monitorForConsumers: n
  };
}
function Rne(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, i = e.onPostDispatch, a = e.defaultDropEffect, o = Mne(), s = Tne({
    typeKey: t,
    defaultDropEffect: a
  });
  function l(d) {
    n == null || n(d), s.dispatchEvent(d), o.dispatchEvent(d), i == null || i(d);
  }
  function f(d) {
    var v = d.event, m = d.dragType;
    XC.start({
      event: v,
      dragType: m,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: l
    });
  }
  function p() {
    function d() {
      var v = {
        canStart: XC.canStart,
        start: f
      };
      return r(v);
    }
    return Ane({
      typeKey: t,
      mount: d
    });
  }
  return {
    registerUsage: p,
    dropTarget: s.dropTargetForConsumers,
    monitor: o.monitorForConsumers
  };
}
var Dne = lu(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Nne = "pdnd:android-fallback", tI = "text/plain", $ne = "text/uri-list", jne = "application/vnd.pdnd", Ys = /* @__PURE__ */ new WeakMap();
function kne(e) {
  return Ys.set(e.element, e), function() {
    Ys.delete(e.element);
  };
}
var rI = sne(), A1 = Rne({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return Nd(rI.bindEvents(), Jo.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var i, a, o, s, l, f;
        if (t.canStart(n) && !n.defaultPrevented) {
          if (!n.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var p = n.target;
          if (!(p instanceof HTMLElement))
            return null;
          var d = Ys.get(p);
          if (!d)
            return null;
          var v = ss(n), m = {
            element: d.element,
            dragHandle: (i = d.dragHandle) !== null && i !== void 0 ? i : null,
            input: v
          };
          if (d.canDrag && !d.canDrag(m))
            return n.preventDefault(), null;
          if (d.dragHandle) {
            var g = fN({
              x: v.clientX,
              y: v.clientY
            });
            if (!d.dragHandle.contains(g))
              return n.preventDefault(), null;
          }
          var b = (a = (o = d.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(d, m)) !== null && a !== void 0 ? a : null;
          if (b)
            for (var y = 0, _ = Object.entries(b); y < _.length; y++) {
              var O = uN(_[y], 2), S = O[0], P = O[1];
              n.dataTransfer.setData(S, P ?? "");
            }
          Dne() && !n.dataTransfer.types.includes(tI) && !n.dataTransfer.types.includes($ne) && n.dataTransfer.setData(tI, Nne), n.dataTransfer.setData(jne, "");
          var x = {
            element: d.element,
            dragHandle: (s = d.dragHandle) !== null && s !== void 0 ? s : null,
            data: (l = (f = d.getInitialData) === null || f === void 0 ? void 0 : f.call(d, m)) !== null && l !== void 0 ? l : {}
          }, A = {
            type: "element",
            payload: x,
            startedFrom: "internal"
          };
          t.start({
            event: n,
            dragType: A
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(t) {
    var r, n, i = t.eventName, a = t.payload;
    (r = Ys.get(a.source.element)) === null || r === void 0 || (n = r[i]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      a
    );
  },
  onPostDispatch: rI.getOnPostDispatch()
}), Lne = A1.dropTarget, Bne = A1.monitor;
function qne(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = Ys.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = Nd(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    A1.registerUsage(),
    kne(e),
    hN(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return lu(r);
}
function Pie(e) {
  const t = /* @__PURE__ */ new Set();
  return Nd(
    Bne({
      canMonitor(r) {
        return r.source.data.instanceId === e;
      },
      onDragStart(r) {
        const n = r.source.data;
        t.forEach((i) => i({ phase: "start", source: n }));
      },
      onDrop(r) {
        const n = r.source.data;
        t.forEach((i) => i({ phase: "drop", source: n }));
      },
      onDropTargetChange(r) {
        const n = r.source.data;
        t.forEach((i) => i({ phase: "over", source: n }));
      }
    })
  ), {
    registerDraggable(r, { payload: n, disabled: i, handle: a }) {
      return i ? () => {
      } : qne({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: a ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return Lne({
        element: r,
        getData: ({ input: i, element: a }) => Yre(
          { type: "list-droppable", index: 0, id: n },
          {
            input: i,
            element: a,
            allowedEdges: ["top", "bottom"]
          }
        )
      });
    },
    subscribe(r) {
      return t.add(r), () => t.delete(r);
    }
  };
}
const vN = Nn(null);
function P1() {
  return Mr(vN);
}
function Tie({ driver: e, children: t }) {
  const r = Yi(e), n = St(() => ({
    driver: r.current
  }), []);
  return E(vN.Provider, {
    value: n,
    children: t
  });
}
function Eie(e) {
  const t = P1(), { ref: r, payload: n, disabled: i, handleRef: a } = e;
  Nt(() => {
    if (r.current && !(!t || i))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: i,
        handle: (a == null ? void 0 : a.current) ?? null
      });
  }, [t, r, n, i, a]);
}
function Cie(e) {
  const t = P1(), r = e == null ? void 0 : e.ref, n = e == null ? void 0 : e.id, i = e == null ? void 0 : e.accepts;
  Nt(() => {
    if (r != null && r.current && !(!t || !n || !i))
      return t.driver.registerDroppable(r.current, { id: n, accepts: i });
  }, [t, r, n, i]);
}
function Iie(e) {
  const t = P1();
  Nt(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
export {
  QD as $,
  Dn as A,
  ra as B,
  Ma as C,
  Id as D,
  uc as E,
  o1 as F,
  Ji as G,
  a1 as H,
  Vn as I,
  Mn as J,
  i1 as K,
  Ge as L,
  Cd as M,
  tie as N,
  rie as O,
  nie as P,
  iie as Q,
  eie as R,
  AR as S,
  Une as T,
  CC as U,
  aie as V,
  mie as W,
  Ti as X,
  Ei as Y,
  bie as Z,
  yie as _,
  f0 as a,
  Yre as a$,
  s1 as a0,
  d1 as a1,
  zre as a2,
  p1 as a3,
  _ie as a4,
  Hre as a5,
  Qne as a6,
  Oie as a7,
  Xne as a8,
  OF as a9,
  Oee as aA,
  ht as aB,
  sc as aC,
  bV as aD,
  UH as aE,
  bd as aF,
  gd as aG,
  yH as aH,
  mee as aI,
  MD as aJ,
  qee as aK,
  Kne as aL,
  Vne as aM,
  Y2 as aN,
  b0 as aO,
  Hne as aP,
  lie as aQ,
  wte as aR,
  wF as aS,
  pie as aT,
  xie as aU,
  cie as aV,
  gF as aW,
  c1 as aX,
  l1 as aY,
  yte as aZ,
  Lne as a_,
  Yne as aa,
  kI as ab,
  LI as ac,
  VI as ad,
  oie as ae,
  Fee as af,
  uie as ag,
  hie as ah,
  gie as ai,
  h1 as aj,
  jD as ak,
  kD as al,
  v1 as am,
  fie as an,
  qb as ao,
  qD as ap,
  LD as aq,
  m1 as ar,
  BD as as,
  wie as at,
  vie as au,
  Pie as av,
  Tie as aw,
  Iie as ax,
  Eie as ay,
  Cie as az,
  Da as b,
  Aie as b0,
  _te as b1,
  Bne as b2,
  die as b3,
  Sie as b4,
  Ree as b5,
  f1 as b6,
  zee as b7,
  sie as b8,
  Lre as b9,
  Gne as ba,
  KQ as bb,
  Pi as bc,
  Na as c,
  Gr as d,
  Jne as e,
  Te as f,
  $t as g,
  Ne as h,
  Ht as i,
  $e as j,
  cn as k,
  ad as l,
  ff as m,
  Ed as n,
  lc as o,
  na as p,
  V0 as q,
  cu as r,
  u1 as s,
  dc as t,
  qa as u,
  uu as v,
  fc as w,
  Md as x,
  su as y,
  cc as z
};
