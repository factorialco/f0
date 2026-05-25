import { o as Ba, B as $a, p as Wa, q as Ma, r as Pt, s as Re, t as ja, v as h, w as q, x as ge, u as le, T as Va, y as Ga, z as Ha, R as Ua, A as Ka, E as ne, G as qa, H as vt, J as ot, K as je, L as ke, M as Ya, N as Za, O as W, Q as Ja, S as Xa, U as Oe, V as pn, W as Qa, X as er, Y as j, Z as yt, _ as D, $ as be, a0 as tr, a1 as nr, a2 as ar, a3 as rr, a4 as lr, a5 as Se, a6 as gn, a7 as sr, a8 as ve, a9 as De, aa as ir, ab as wt, g as bn, ac as Ce, ad as or, ae as xn, af as ae, ag as R, ah as vn, ai as cr, aj as yn, ak as dr, al as Nt, am as he, an as ee, ao as ur, ap as fr, aq as mr, ar as hr, as as pe, at as Ke, au as pr, av as gr, aw as br, ax as xr, ay as qe, az as wn, aA as vr, aB as yr, aC as wr, aD as Ve, aE as Nr, aF as Cr, aG as Ir, aH as kr, aI as Sr, aJ as Ar, aK as Fr, aL as Lr, aM as Tr, aN as _r, aO as Nn, aP as ct, aQ as dt, aR as Cn, aS as Dr, aT as Er, aU as Or, aV as zr, aW as Ye, aX as Ct, aY as In, aZ as Pr, a_ as kn, a$ as Rr, b0 as Br, b1 as $r, b2 as Ie, b3 as Wr, b4 as Be, b5 as Rt, b6 as ut, b7 as Mr, b8 as jr, b9 as Vr, ba as Sn, bb as Gr, bc as An, bd as It, be as Hr, bf as Ur, bg as kt, bh as Kr, a as qr, c as Yr, bi as Fn, bj as Zr, n as Jr, F as Xr, bk as Ln, bl as Tn, bm as Qr, bn as el, bo as tl, bp as nl, bq as al, br as rl, bs as ll, bt as sl, bu as il, bv as fe, bw as St, bx as At, by as Ft, bz as _n, bA as Lt, bB as Dn, bC as ol, bD as cl, bE as dl, bF as ul, bG as fl, bH as ml, bI as hl, bJ as pl, bK as gl, bL as bl, bM as Bt, bN as $t, bO as Wt, bP as xl, bQ as vl, bR as yl, bS as wl, bT as En, bU as Nl, bV as Cl } from "./F0CanvasPanel-Cgov-Guo.js";
import { c1 as zd, c0 as Pd, cd as Rd, bW as Bd, bX as $d, ce as Wd, bY as Md, b$ as jd, c9 as Vd, ca as Gd, bZ as Hd, c3 as Ud, c2 as Kd, cb as qd, cc as Yd, c8 as Zd, c5 as Jd, c7 as Xd, c4 as Qd, b_ as eu, c6 as tu } from "./F0CanvasPanel-Cgov-Guo.js";
import { jsx as e, jsxs as o, Fragment as U } from "react/jsx-runtime";
import * as Ee from "react";
import ie, { forwardRef as E, useRef as H, useTransition as Il, useState as T, useLayoutEffect as On, useId as ft, useContext as Ze, createContext as Tt, useEffect as V, useCallback as Q, useMemo as Y, memo as zn, Fragment as kl, isValidElement as Sl, cloneElement as Pn, Children as Rn } from "react";
import { C as Al, P as Fl, T as Ll, a as Tl, R as Bn, I as $n, g as Wn, c as _l, b as Mn, F as mt, f as Dl, M as El, d as Ol, e as Mt, h as jn, u as zl, i as Vn, S as Pl, A as Rl, B as Bl, L as $l, j as Wl, V as Ml, k as jl, l as jt, m as Vl, n as Gl, O as Hl } from "./index-Bh2ZDUWs.js";
import { s as au, t as ru, q as lu, J as su, v as iu, D as ou, a8 as cu, H as du, r as uu, X as fu, ae as mu, Y as hu, Z as pu, w as gu, aa as bu, ab as xu, a9 as vu, ac as yu, N as wu, _ as Nu, a5 as Cu, a7 as Iu, x as ku, z as Su, E as Au, U as Fu, ad as Lu, W as Tu, Q as _u, y as Du, G as Eu, o as Ou, p as zu, a0 as Pu, a1 as Ru, a6 as Bu, K as $u, a2 as Wu, a3 as Mu, $ as ju, a4 as Vu } from "./index-Bh2ZDUWs.js";
const Ul = Ba("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Gn = E(({ className: t, items: n }, a) => /* @__PURE__ */ e($a, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(Wa, {}),
  /* @__PURE__ */ e(Ma, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Gn.displayName = "CollapsedBreadcrumbItem";
const _t = 50, Kl = 120, Ge = 8;
function ql(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = t - r - Ge, s = 0, i = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < a)
    for (l -= _t; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function Vt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Ge;
    default:
      return t[0] + _t + t[t.length - 1] + Ge;
  }
}
function Yl(t, n) {
  return Kl * t + (n ? _t : 0) + Ge;
}
function Zl(t, n, a = []) {
  if (!t) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Yl(
        i,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, l = a.map((i) => i.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Vt(l)
    };
  const s = ql(t, l);
  return {
    visibleCount: s,
    headItem: n[0] || null,
    tailItems: n.slice(
      Math.max(1, n.length - (s - 1))
    ),
    collapsedItems: n.slice(
      1,
      n.length - (s - 1)
    ),
    isOnly: n.length === 1,
    minWidth: Vt(l)
  };
}
function Jl({ breadcrumbs: t, append: n }) {
  const a = H(null), r = H(null), [, l] = Il(), [s, i] = T(null), c = (s?.collapsedItems || []).length > 0;
  return On(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const p = a.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const b = Zl(
          p,
          t,
          g
        );
        i(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || s && !s.headItem ? /* @__PURE__ */ e(Pt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Pt,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: s?.minWidth
      },
      children: [
        /* @__PURE__ */ e(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: t.map((d, f) => /* @__PURE__ */ e(
              Re,
              {
                item: d,
                isLast: f === t.length - 1,
                isFirst: f === 0,
                children: f === t.length - 1 ? n : void 0
              },
              d.id
            ))
          }
        ),
        s && s.headItem && /* @__PURE__ */ o(ja, { children: [
          /* @__PURE__ */ e(
            Re,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              Gn,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ e(
              Re,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(U, { children: s.tailItems.map((d, f) => /* @__PURE__ */ e(
            Re,
            {
              item: d,
              isLast: f === s.tailItems.length - 1,
              isFirst: !1,
              children: f === s.tailItems.length - 1 ? n : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const Xl = ge({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Gt = [
  {
    id: "bottom",
    delay: 2.6,
    transformOrigin: "center 89%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
  },
  {
    id: "left",
    delay: 2.2,
    transformOrigin: "11% center",
    rotateAxis: "0, 1, 0",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
  },
  {
    id: "right",
    delay: 2.4,
    transformOrigin: "88.5% center",
    rotateAxis: "0, 1, 0",
    path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
  },
  {
    id: "top",
    delay: 2,
    transformOrigin: "center 11%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
  }
], Ql = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, s) => {
  const i = ft(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: p,
    ...g
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(Xl({ size: n }), p),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        q.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: s,
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
            ...g.style
          },
          ...(({ style: b, ...v }) => v)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Gt.map((b) => /* @__PURE__ */ e("clipPath", { id: `${i}-${b.id}`, children: /* @__PURE__ */ e("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${i}-circle)`, children: Gt.map((b) => /* @__PURE__ */ e(
              q.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${b.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? b.id === "left" ? 1 : 0 : 1,
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? b.delay : 0,
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
                    delay: t ? b.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${b.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: b.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ e(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "100%",
                      background: a ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
                    }
                  }
                )
              },
              b.id
            )) })
          ]
        }
      )
    }
  );
}, Hn = E(Ql), Un = Tt(null), es = 15, ts = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [l, s] = T(n), [i, c] = T(!1), [d, f] = T(!0), [u, m] = T(
    es
  ), p = H(null), g = (v) => {
    p.current = v;
  }, b = () => {
    p.current && p.current();
  };
  return V(() => {
    s(n);
  }, [n]), V(() => {
    if (i && a?.(), !i) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [i, a]), /* @__PURE__ */ e(
    Un.Provider,
    {
      value: {
        ...r,
        enabled: l,
        setEnabled: s,
        open: i,
        setOpen: c,
        shouldPlayEntranceAnimation: d,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: l ? u : null,
        clear: b,
        setClearFunction: g
      },
      children: t
    }
  );
}, we = () => {
};
function Je() {
  const t = Ze(Un);
  return t === null ? {
    enabled: !1,
    setEnabled: we,
    open: !1,
    setOpen: we,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: we,
    setAutoClearMinutes: we,
    clear: we,
    setClearFunction: we,
    autoClearMinutes: null
  } : t;
}
const Kn = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = Je(), s = le(), [i, c] = T(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(Va, { children: /* @__PURE__ */ o(Ga, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(Ha, { asChild: !0, children: /* @__PURE__ */ e(
      q.div,
      {
        animate: {
          "--gradient-angle": ["0deg", "360deg"]
        },
        transition: {
          default: {
            duration: 8,
            ease: "linear",
            repeat: 1 / 0
          }
        },
        style: {
          "--gradient-angle": "180deg"
        },
        children: /* @__PURE__ */ e(
          Ua,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: h(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ne(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Ka,
              {
                className: h(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Hn,
                  {
                    size: "sm",
                    background: l ? "white" : void 0,
                    hover: i
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !l && /* @__PURE__ */ e(qa, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Ht = "one_sidebar_locked", qn = Tt(void 0);
function Ae() {
  const t = Ze(qn);
  return t === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : t;
}
function ns({ children: t }) {
  const { currentPath: n } = vt(), [a, r] = T(!1), [l, s] = T(!1), i = a ? je.xl : je.md, c = ot(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = T(() => {
    const S = localStorage.getItem(Ht);
    return S !== null ? !!S : !0;
  }), [u, m] = T(!1), [p, g] = T(
    null
  ), b = Q(
    ({ isInvokedByUser: S } = {
      isInvokedByUser: !0
    }) => {
      s(S ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = Q(
    (S) => {
      c || (S.clientX < 32 && m(!0), S.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = Y(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return V(() => {
    m(!1);
  }, [n]), V(() => {
    l && localStorage.setItem(Ht, d ? "1" : "");
  }, [d, l]), V(() => () => {
    g(w);
  }, [w]), /* @__PURE__ */ e(
    qn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: p,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: v, className: "h-screen w-screen", children: t })
    }
  );
}
const Ut = q.create(W), Kt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, as = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, l] = T(!1), s = () => {
    l(!0), n(!t);
  };
  return /* @__PURE__ */ e(ke, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: h(
        "flex h-6 w-6 items-center justify-center rounded",
        ne()
      ),
      onClick: s,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Ut,
        {
          size: "sm",
          icon: Ya,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Kt,
          initial: r ? "enterFromUnfavorite" : "initial",
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0.175, 0.885, 0.27, 2]
          },
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1
        },
        "favorite"
      ) : /* @__PURE__ */ e(
        Ut,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Za,
          className: "outline-none",
          variants: Kt,
          initial: r ? "enterFromFavorite" : "initial",
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1,
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0, 0, 0.58, 1]
          }
        },
        "not-favorite"
      )
    }
  ) });
}, rs = ({
  currentModule: t,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: l,
  errorScreen: s,
  onOpenChange: i = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, p] = T("idle"), [g, b] = T(null), [v, ...w] = g ?? [], [S, P] = T(!1);
  V(() => {
    b(null), p("idle");
  }, [t]);
  const M = Q(async () => {
    try {
      p("fetching");
      const O = await a();
      p("idle"), b(O);
    } catch {
      p("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Ja,
    {
      open: S,
      onOpenChange: async (O) => {
        P(O), O && g === null && M(), i(O);
      },
      children: [
        /* @__PURE__ */ e(Xa, { asChild: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            variant: "outline",
            icon: pn,
            hideLabel: !0,
            label: n,
            pressed: S,
            append: f && /* @__PURE__ */ e(Dt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Qa, { children: /* @__PURE__ */ o(
          er,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(is, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(ds, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(os, { ...l, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    ls,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: w.map((O, _) => /* @__PURE__ */ e(
                    ss,
                    {
                      ...O,
                      onClick: d
                    },
                    _
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  cs,
                  {
                    ...s,
                    onClick: () => {
                      M();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                us,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => P(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, ls = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    tr,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        be,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: h(i, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ e("div", { className: "px-1 pt-1", children: c ? /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              "video",
              {
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              nr,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ e("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ e("h3", { className: "font-medium", children: t }),
                /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: l })
              ] }),
              r && /* @__PURE__ */ e(Dt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, ss = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const s = h("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(ar, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ e(
    be,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: h(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(Dt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, is = ({
  title: t,
  url: n,
  onClick: a
}) => /* @__PURE__ */ o(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ e("h2", { className: "text-base font-medium", children: t }),
      /* @__PURE__ */ e(
        j,
        {
          variant: "outline",
          size: "sm",
          icon: yt,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Yn = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        l
      ),
      children: t
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), os = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Yn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(W, { icon: pn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(be, { href: a, children: /* @__PURE__ */ e(j, { label: n }) })
  }
), cs = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Yn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(W, { icon: rr, size: "lg" }),
    button: /* @__PURE__ */ e(j, { variant: "outline", label: a, onClick: r })
  }
), ds = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(D, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Dt = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: h("size-2 rounded bg-f1-background-selected-bold", t)
  }
), us = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, s] = T(t);
  V(() => {
    s(t);
  }, [t]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e(lr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          j,
          {
            variant: "ghost",
            icon: Se,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        Al,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            Fl,
            {
              ...d,
              isVisible: !0,
              trackVisibility: d.trackVisibility,
              onClick: () => c(d.onClick)
            },
            d.title
          ))
        }
      )
    ] })
  ] });
};
function qt({
  icon: t,
  href: n,
  label: a,
  disabled: r
}) {
  const l = H(null);
  return /* @__PURE__ */ e(
    j,
    {
      href: n,
      title: a,
      "aria-label": a,
      disabled: r,
      ref: l,
      size: "sm",
      variant: "outline",
      label: a,
      icon: t,
      hideLabel: !0
    }
  );
}
function Wc({
  module: t,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: l = !1,
  navigation: s,
  productUpdates: i,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ae(), p = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], g = n && Object.keys(n).length !== 0, b = l && a.length > 0, v = !l && r.length > 0, w = !l && !!i?.isVisible, S = p[p.length - 1], P = "navigation" in window ? window.navigation : null, M = l && (P ? !!P.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(ke, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            q.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                j,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: gn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: h(
                "flex flex-grow items-center gap-2",
                M && "justify-center"
              ),
              children: [
                l && M && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  j,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: sr,
                    onClick: () => window.history.back()
                  }
                ) }),
                M || b ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in S ? /* @__PURE__ */ e(D, { className: "h-4 w-24" }) : S.label }) : /* @__PURE__ */ e(
                  Jl,
                  {
                    breadcrumbs: p,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      as,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  p[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !l && g && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(ve, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            De,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(De, { text: n.text, variant: n.variant }) }),
          !l && g && (s || v || w) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                qt,
                {
                  icon: ir,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ e(
                qt,
                {
                  icon: wt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && v && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || v) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              rs,
              {
                ...i,
                currentModule: t.name
              }
            ) }),
            v && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((O, _) => /* @__PURE__ */ e(fs, { action: O }, _)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              bn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Kn, {})
          ] })
        ] })
      ]
    }
  );
}
function fs({ action: t }) {
  const n = H(null), [a, r] = T(!1);
  return "actions" in t ? /* @__PURE__ */ e(Ce, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    Oe,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    j,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    be,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        j,
        {
          size: "md",
          variant: "outline",
          label: t.label,
          icon: t.icon,
          hideLabel: !0,
          onClick: (l) => {
            l.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const ms = () => {
  const t = le();
  return /* @__PURE__ */ o(
    q.div,
    {
      className: h(
        "relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "after:transition-all after:delay-200 after:duration-300",
        "before:bg-white before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:content-['']"
      ),
      animate: {
        "--gradient-angle": ["0deg", "360deg"]
      },
      transition: {
        default: {
          duration: 6,
          ease: "linear",
          repeat: 1 / 0
        }
      },
      style: {
        "--gradient-angle": "180deg"
      },
      children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ e(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: t.ai.inputPlaceholder,
            className: h(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          Oe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: or,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, hs = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = H(null);
  V(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, ps = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = Je();
  return hs({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(ke, { children: n && /* @__PURE__ */ e(
    q.div,
    {
      "aria-hidden": !n,
      className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
      initial: a ? { opacity: 0, width: 0 } : !1,
      animate: { opacity: 1, width: 360 },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        a && r(!1);
      },
      children: /* @__PURE__ */ e("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ e(
        q.div,
        {
          className: "relative flex h-full w-full flex-col overflow-x-hidden ",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: a ? 0.3 : 0.05,
            ease: "easeOut",
            delay: a ? 0.2 : 0
          },
          children: t
        }
      ) })
    },
    "chat-window"
  ) });
}, gs = ({ action: t, onClose: n }) => {
  const a = () => {
    t.onClick(), n();
  };
  switch (t.buttonType) {
    case "gradient":
      return /* @__PURE__ */ e(
        "button",
        {
          style: {
            color: "white",
            background: "linear-gradient(270deg, rgba(161, 173, 229, 0.7) 0%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 100%)",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          onMouseEnter: (r) => {
            r.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (r) => {
            r.currentTarget.style.opacity = "1";
          },
          onClick: a,
          children: t.isLoading ? /* @__PURE__ */ e(xn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        Oe,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, bs = ({
  enabled: t = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: l,
  actions: s,
  onShow: i,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  ts,
  {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    onShow: i,
    onHide: c,
    children: d
  }
), xs = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = Je(), d = () => {
    i(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(ps, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      Oe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Se,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(Hn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(vn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ e(
        gs,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(ms, {}) })
  ] }) : null;
}, vs = ae(
  R("AiPromotionChat", xs)
), ys = ae(
  R("AiPromotionChatProvider", bs)
), Zn = ({
  items: t,
  value: n,
  onChange: a,
  disabled: r = !1,
  fullWidth: l = !1,
  ariaLabel: s,
  ariaLabelledBy: i
}) => {
  const [c, d] = cr({
    prop: n,
    defaultProp: t[0]?.value ?? "",
    onChange: a
  });
  return /* @__PURE__ */ e(
    Ll,
    {
      type: "single",
      value: c,
      onValueChange: (u) => {
        u !== "" && d(u);
      },
      disabled: r,
      "aria-label": s,
      "aria-labelledby": i,
      className: h(
        "inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5",
        l && "w-full"
      ),
      children: t.map((u) => /* @__PURE__ */ o(
        Tl,
        {
          value: u.value,
          disabled: r || u.disabled,
          className: h(
            "relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all",
            "text-f1-foreground-secondary",
            "hover:text-f1-foreground hover:bg-f1-background-hover",
            "disabled:pointer-events-none disabled:text-f1-foreground-disabled",
            "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow",
            ne(),
            "h-8 px-3 text-sm",
            l && "w-full"
          ),
          children: [
            u.icon && /* @__PURE__ */ e(W, { icon: u.icon, size: "md" }),
            u.label
          ]
        },
        u.value
      ))
    }
  );
};
Zn.displayName = "F0SegmentedControl";
const Mc = R(
  "F0SegmentedControl",
  Zn
), Jn = ge({
  base: "flex w-full flex-col rounded-lg p-[1px]",
  variants: {
    variant: {
      ai: "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
      critical: "bg-f1-background-critical",
      positive: "bg-f1-background-positive",
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning"
    }
  },
  defaultVariants: {
    variant: "ai"
  }
}), Yt = {
  positive: Nt,
  warning: dr,
  info: yn
}, Zt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, ws = E(
  function({ title: n, onClose: a, children: r, actions: l = [], variant: s }, i) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: i,
        className: Jn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "flex flex-row items-center gap-2",
                  Zt[s]
                ),
                children: [
                  Yt[s] && /* @__PURE__ */ e(W, { icon: Yt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    he,
                    {
                      className: Zt[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              j,
              {
                variant: "ghost",
                icon: Se,
                size: "sm",
                hideLabel: !0,
                onClick: a,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: h(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              j,
              {
                label: d.label,
                onClick: d.onClick,
                variant: "outline",
                icon: d.icon
              }
            ) }, f)) })
          ] })
        ]
      }
    );
  }
), Ns = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Jn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(D, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(D, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(D, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(D, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(D, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(D, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Xn = E(
  (t, n) => /* @__PURE__ */ e(ws, { ref: n, ...t })
), Cs = ({ compact: t, variant: n }) => /* @__PURE__ */ e(Ns, { compact: t, variant: n });
Xn.displayName = "F0Callout";
const jc = ee(
  ae(Xn),
  Cs
);
function Is({
  title: t,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: h(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ne("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e(W, { icon: ur, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          he,
          {
            lines: 1,
            className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
            children: t
          }
        )
      ]
    }
  );
}
function ks({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = fr(), s = mr(l), i = hr(n, "PPPp", { locale: s }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: h(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ne("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(he, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            pe,
            {
              firstName: t.firstName,
              lastName: t.lastName,
              src: t.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(
            he,
            {
              lines: 1,
              className: "font-medium text-f1-foreground-secondary",
              children: c
            }
          )
        ] })
      ]
    }
  );
}
function Ss({
  title: t,
  versions: n,
  currentVersion: a,
  activeVersionId: r
}) {
  return /* @__PURE__ */ o(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": t,
      children: [
        /* @__PURE__ */ e(
          he,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(Ke, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            Is,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ e(
            ks,
            {
              author: l.author,
              timestamp: l.timestamp,
              onClick: l.onClick,
              isActive: r === l.id
            },
            l.id
          ))
        ] }) })
      ]
    }
  );
}
const Vc = ae(
  R("F0VersionHistory", Ss)
), Qn = E(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: l }, s) => {
    const i = ie.useRef(null);
    ie.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = pr({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        className: h("scrollbar-macos w-full overflow-auto", r),
        style: {
          height: `${t}px`
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            style: {
              height: `${c.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: c.getVirtualItems().map((d) => /* @__PURE__ */ e(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${d.size}px`,
                  transform: `translateY(${d.start}px)`
                },
                children: d ? l(d) : /* @__PURE__ */ e(U, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Qn.displayName = "VirtualList";
const ht = R("VirtualList", Qn), ea = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${n})`, "gi"), s = t.split(l);
  return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
    (i, c) => i.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ e(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: i
      },
      c
    ) : i
  ) });
};
function Xe(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function Qe(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const As = ({
  entity: t,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: l,
  search: s,
  goToFirst: i,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = t.name.split(" "), p = m[0] || "", g = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(t) : a(t));
  }, v = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else w.key === "ArrowDown" ? Xe(w.currentTarget, i) : w.key === "ArrowUp" && Qe(w.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: h(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          pe,
          {
            src: t.avatar,
            firstName: p,
            lastName: g,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              ea,
              {
                text: t.name,
                search: s,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          wn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: b,
            onKeyDown: v,
            className: h(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ e(
          W,
          {
            className: "text-f1-icon-selected",
            icon: Nt,
            size: "md"
          }
        )
      ]
    }
  ) });
}, We = ({
  groupView: t,
  expanded: n,
  search: a,
  entity: r,
  selected: l,
  partialSelected: s,
  onSelect: i,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: p = !1,
  showGroupIcon: g = !1,
  singleSelector: b = !1,
  disabled: v = !1,
  hiddenAvatar: w = !1
}) => {
  const [S, P] = T(!1);
  if (!t)
    return /* @__PURE__ */ e(
      As,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: i,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: w
      }
    );
  const M = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && b)
      d(!n);
    else if (L.key === "Enter") {
      if (v) return;
      !l || s ? i(r) : l && c(r);
    } else L.key === "ArrowDown" ? Xe(L.currentTarget, f) : L.key === "ArrowUp" && Qe(L.currentTarget, u);
  }, O = () => {
    if (S)
      d(!n), P(!1);
    else {
      if (v || b) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const _ = l || s;
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        j,
        {
          hideLabel: !0,
          icon: n ? gr : br,
          onClick: () => d(!n),
          label: n ? "Collapse" : "Expand",
          size: "sm",
          variant: "ghost",
          type: "button"
        }
      ),
      /* @__PURE__ */ o(
        "label",
        {
          "aria-label": r.name,
          onPointerDown: () => {
            P(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ e(
              W,
              {
                icon: xr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                ea,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(qe, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              wn,
              {
                checked: _,
                disabled: v,
                onClick: O,
                onKeyDown: M,
                indeterminate: s,
                onPointerDown: (L) => {
                  L.stopPropagation(), P(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: h("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !p && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
We.displayName = "EntitySelectListItem";
const Jt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Xe(s.currentTarget, a) : s.key === "ArrowUp" && Qe(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: h(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        j,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: vr,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: h("line-clamp-1"), children: t }) }) })
    ]
  }
) }), _e = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      j,
      {
        disabled: t.disabled,
        variant: t.variant,
        onClick: t.onClick,
        label: t.label,
        icon: t.icon,
        size: "sm"
      }
    );
  const a = [t, ...n ?? []], r = a.map((i) => ({
    label: i.label,
    value: i.label,
    icon: i.icon,
    critical: i.variant === "critical"
  })) || [], l = (i) => {
    const c = a.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((i) => i.disabled);
  return /* @__PURE__ */ e(
    yr,
    {
      items: r,
      value: t.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Fs = ({
  actions: t,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: l,
  anyVisibleSelected: s,
  loading: i,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = t && t.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let g, b, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return v || (v = w, w = void 0), m && u ? (g = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: v,
      secondaryActions: w ? [w] : []
    }
  ), b = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ e(_e, { primaryAction: v, secondaryActions: [] }), w && (b = /* @__PURE__ */ e(_e, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    b
  ] }) });
}, Ls = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(W, { icon: Ul, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: t,
      onChange: (c) => n(c.target.value)
    }
  ),
  t && /* @__PURE__ */ e(
    W,
    {
      icon: wr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), rt = 384, lt = 36, Ts = 37, Xt = 1, Qt = 200, en = '[data-avatarname-navigator-element="true"]', _s = ({
  groupView: t,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: l,
  onSelect: s,
  onRemove: i,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: p = [],
  onGroupChange: g,
  onToggleExpand: b,
  searchPlaceholder: v,
  selectAllLabel: w,
  clearLabel: S,
  notFoundTitle: P,
  notFoundSubtitle: M,
  className: O,
  actions: _,
  onCreate: L,
  onCreateLabel: K,
  singleSelector: z = !1,
  loading: y = !1,
  disabled: I = !1,
  hiddenAvatar: C = !1
}) => {
  const A = ie.useRef(null), $ = Y(
    () => t ? n.reduce(
      (F, Z) => F + (Z.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), x = Q(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: 0 });
    }, Xt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(en)
      )[0]?.focus();
    }, Qt);
  }, []), N = Q(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, Xt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(en)
      );
      F[F.length - 1]?.focus();
    }, Qt);
  }, []), k = Y(
    () => new Map(p.map((F) => [F.id, F])),
    [p]
  ), G = Q(
    (F) => {
      const Z = k.get(F.id);
      if (!t)
        return {
          selected: !!Z,
          partialSelected: !!Z
        };
      const X = (F.subItems ?? []).filter(
        (te) => Z?.subItems?.some(
          (me) => me.subId === te.subId
        )
      ), J = (F.subItems?.length ?? 0) === X.length, de = !J && X.length > 0;
      return { selected: J, partialSelected: de };
    },
    [t, k]
  ), re = Q(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          Jt,
          {
            label: K ?? "",
            onCreate: () => L?.(l),
            goToFirst: x,
            goToLast: N
          }
        );
      const Z = L ? F.index - 1 : F.index, X = n[Z], { selected: J, partialSelected: de } = G(X);
      return /* @__PURE__ */ e(
        We,
        {
          expanded: X.expanded ?? !1,
          onExpand: () => b(X, !0),
          search: l,
          groupView: t,
          entity: X,
          onSelect: s,
          onRemove: i,
          selected: J,
          partialSelected: de,
          showGroupIcon: Ds(a, r),
          singleSelector: z,
          goToFirst: x,
          goToLast: N,
          disabled: I,
          hiddenAvatar: C
        },
        X.id
      );
    },
    [
      L,
      K,
      I,
      n,
      G,
      x,
      N,
      t,
      a,
      C,
      i,
      s,
      b,
      l,
      r,
      z
    ]
  ), se = Y(() => t ? n.flatMap((F) => {
    const Z = $e(
      p ?? [],
      F.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: F.id,
          subName: F.name,
          subAvatar: F.avatar,
          expanded: F.expanded ?? Z?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((X) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? Z?.expanded ?? !1
        },
        subItem: X
      }))
    ];
  }).filter(
    (F) => (!F.parent || F.parent.expanded) && (!!F.parent || !!F.subItem.subItems && F.subItem.subItems.length > 0)
  ) : n.map((F) => ({
    parent: null,
    subItem: {
      subId: F.id,
      subName: F.name,
      subAvatar: F.avatar,
      subSearchKeys: F.searchKeys
    }
  })), [t, n, p]), B = Q(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          Jt,
          {
            label: K ?? "",
            onCreate: () => L?.(l),
            goToFirst: x,
            goToLast: N
          }
        );
      const Z = L ? F.index - 1 : F.index, X = se[Z].parent, J = se[Z].subItem;
      if (!X) {
        const te = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, me = $e(
          p,
          te.id
        ), xe = (te?.subItems ?? []).filter(
          (Te) => me?.subItems?.some(
            (Ra) => Ra.subId === Te.subId
          )
        ), Pe = (te.subItems?.length ?? 0) === xe.length, Pa = !Pe && xe.length > 0;
        return /* @__PURE__ */ e(
          We,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Te) => b(te, Te),
            search: l,
            entity: te,
            onSelect: s,
            onRemove: i,
            selected: Pe,
            partialSelected: Pa,
            showGroupIcon: a.find((Te) => Te.value === r)?.groupType === "team",
            singleSelector: z,
            goToFirst: x,
            goToLast: N,
            hideLine: Z === se.length - 1,
            disabled: I,
            hiddenAvatar: C
          }
        );
      }
      let de = !!$e(p, J.subId);
      if (!de) {
        const te = $e(
          p,
          X.id
        );
        de = !!(X?.subItems ?? []).filter(
          (xe) => te?.subItems?.some(
            (Pe) => Pe.subId === xe.subId
          )
        ).find((xe) => xe.subId === J.subId);
      }
      return /* @__PURE__ */ e(
        We,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: J.subId,
            name: J.subName,
            avatar: J.subAvatar,
            searchKeys: J.subSearchKeys
          },
          onSelect: () => {
            d(X, J);
          },
          onRemove: () => c(X, J),
          selected: !!de,
          partialSelected: !1,
          singleSelector: z,
          goToFirst: x,
          goToLast: N,
          isChild: !0,
          hiddenAvatar: C
        }
      );
    },
    [
      se,
      p,
      l,
      z,
      x,
      N,
      s,
      i,
      a,
      I,
      b,
      r,
      d,
      c,
      C,
      L,
      K
    ]
  ), [Fe, at] = Y(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, Z = 0;
    if (!t)
      F = n.length, Z = n.reduce(
        (de, { id: te }) => de + (k.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...k.values()].flatMap(
          (te) => te.subItems?.map((me) => me.subId) ?? []
        )
      );
      n.forEach((te) => {
        const me = te.subItems ?? [];
        F += me.length, Z += me.filter(
          (xe) => de.has(xe.subId)
        ).length;
      });
    }
    const X = F > 0 && Z === F, J = Z > 0;
    return [X, J];
  }, [n, k, t]), Le = se.length, Ea = !z && (w || S), Oa = _ && _.length > 0, za = !y && (!z && Ea || Oa);
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex w-full flex-col rounded-l-xl border-0",
        z || y ? "rounded-r-xl" : "",
        O
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: h(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              z || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Ls,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: x,
                  goToLast: N
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Ve,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
                  onChange: g,
                  options: a,
                  value: r,
                  className: h(
                    "h-8 rounded bg-transparent py-[5px]",
                    r === "all" ? "text-f1-foreground-secondary" : ""
                  )
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "section",
          {
            className: h(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              za ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              y && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(xn, {}) }),
              !y && !$ && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: rt
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: P }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: M })
                  ]
                }
              ),
              !y && (!!$ || L) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                ht,
                {
                  height: rt,
                  itemCount: Le + (L ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && L) return lt;
                    const Z = L ? F - 1 : F;
                    return se[Z]?.parent === null ? Ts : lt;
                  },
                  renderer: B,
                  ref: A
                }
              ) : /* @__PURE__ */ e(
                ht,
                {
                  height: rt,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: lt,
                  renderer: re,
                  ref: A
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Fs,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: z,
            totalFilteredEntities: $,
            allVisibleSelected: Fe,
            anyVisibleSelected: at,
            selectAllLabel: w,
            clearLabel: S,
            disabled: I,
            actions: _
          }
        )
      ]
    }
  );
}, $e = (t, n) => t.find((a) => a.id === n), Ds = (t, n) => t.find((a) => a.value === n)?.groupType === "team", Es = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Nr,
  {
    className: h(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      Cr,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Ir, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      W,
      {
        icon: Se,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), Os = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = Y(() => {
    const f = t ? r.flatMap(
      (m) => (m.subItems ?? []).map((p) => ({
        parent: m,
        subItem: p
      }))
    ) : r.map((m) => ({
      parent: null,
      subItem: {
        subId: m.id,
        subName: m.name,
        subAvatar: m.avatar,
        subDeactivated: m.deactivated
      }
    })), u = /* @__PURE__ */ new Set();
    return f.filter((m) => {
      const p = m.subItem.subId;
      return u.has(p) ? !1 : (u.add(p), !0);
    });
  }, [t, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      ht,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            Es,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: s,
              hiddenAvatar: i,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ e(U, {});
        }
      }
    ) })
  ] });
}, zs = 500, tn = 520, nn = 210, an = ({
  groupView: t,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  width: s,
  singleSelector: i = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...p
}) => {
  const g = (s ?? tn) < zs, b = !c && !i && !g, v = s ?? tn, w = b ? v - nn : v;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: v
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ e(
              _s,
              {
                ...p,
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: i,
                loading: c,
                disabled: p.disabled,
                hiddenAvatar: d,
                actions: f,
                onCreate: u,
                onCreateLabel: m
              }
            )
          }
        ),
        b && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: nn + "px"
            },
            children: /* @__PURE__ */ e(
              Os,
              {
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: l,
                disabled: p.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, Ps = ({
  placeholder: t,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: l = !1,
  label: s,
  labelIcon: i,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: p = !1,
  maxLength: g,
  loading: b = !1,
  required: v = !1,
  readonly: w = !1,
  append: S,
  size: P = "sm",
  open: M
}) => {
  const O = Y(
    () => a.some(
      (z) => z.subItems && z.subItems.length > 0
    ),
    [a]
  ), _ = Y(() => O ? a.flatMap(
    (z) => (z.subItems ?? []).map((y) => ({
      parent: z,
      subItem: y
    }))
  ) : a.map((z) => ({
    parent: null,
    subItem: {
      subId: z.id,
      subName: z.name,
      subAvatar: z.avatar,
      subDeactivated: z.deactivated
    }
  })), [O, a]), L = _.length === 0 ? void 0 : _.length === 1 ? _[0].subItem.subName : _.length + " " + n, K = _.length === 1 ? _[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    kr,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !L ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: p,
      maxLength: g,
      clearable: !1,
      value: L,
      disabled: r,
      loading: b,
      required: v,
      readonly: w,
      size: P,
      avatar: l || !K ? void 0 : {
        type: "person",
        firstName: K,
        lastName: "",
        src: _[0].subItem.subAvatar,
        deactivated: _[0].subItem.subDeactivated
      },
      append: S ?? /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Sr, { open: M, disabled: r, size: P }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: h(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            _.length === 1 && !l || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            he,
            {
              tag: "span",
              className: _.length === 1 && _[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: _.length === 0 ? t ?? "" : _.length === 1 ? _[0].subItem.subName : `${_.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Gc = (t) => {
  const [n, a] = T(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (y) => {
    a(y), t.onOpenChange?.(y);
  };
  V(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, s] = T(t.entities), [i, c] = T(""), [d, f] = Ar("", 300), u = Y(
    () => t.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [t.entities]
  ), m = Ze(Fr), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(y) {
    if (t.singleSelector) {
      t.onSelect(y), a(!1);
      return;
    }
    const I = t.selectedEntities ?? [], C = l.find((k) => k.id === y.id);
    if (!C)
      return;
    const A = new Set(
      (C.subItems ?? []).map((k) => k.subId)
    ), $ = /* @__PURE__ */ new Set([C.id]);
    l.forEach((k) => {
      k.id !== C.id && (k.subItems ?? []).some(
        (re) => A.has(re.subId)
      ) && $.add(k.id);
    });
    const x = [...I];
    function N(k) {
      const G = x.findIndex((re) => re.id === k.id);
      G >= 0 ? x[G] = k : x.push(k);
    }
    $.forEach((k) => {
      const G = l.find((B) => B.id === k);
      if (!G) return;
      const re = G.subItems?.filter(
        (B) => A.has(B.subId)
      ) ?? [], se = x.findIndex((B) => B.id === k);
      if (se >= 0) {
        const B = x[se].subItems ?? [], Fe = new Set(B.map((Le) => Le.subId)), at = [
          ...B,
          ...re.filter((Le) => !Fe.has(Le.subId))
        ];
        N({
          ...G,
          subItems: at
        });
      } else
        N({
          ...G,
          subItems: re
        });
    }), t.onSelect(x);
  }
  function v(y, I) {
    if (t.singleSelector)
      t.onSelect({ ...y, subItems: [{ ...I }] }), a(!1);
    else {
      const C = t.selectedEntities ?? [], A = new Set(C.map((N) => N.id)), $ = new Map(
        C.map((N) => [N.id, N.subItems ?? []])
      );
      A.add(y.id), t.entities.forEach((N) => {
        N.subItems?.some(
          (G) => G.subId === I.subId
        ) && A.add(N.id);
      });
      const x = [];
      t.entities.forEach((N) => {
        if (A.has(N.id)) {
          let G = [...$.get(N.id) ?? []];
          N.subItems?.some(
            (B) => B.subId === I.subId
          ) && (G.some(
            (Fe) => Fe.subId === I.subId
          ) || G.push(I));
          const se = new Set(
            (N.subItems ?? []).map((B) => B.subId)
          );
          G = G.filter(
            (B) => se.has(B.subId)
          ), x.push({
            ...N,
            subItems: G
          });
        }
      }), t.onSelect(x);
    }
  }
  function w(y) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let I = [];
    const C = t.selectedEntities ?? [];
    if (u) {
      const A = l.find(
        (x) => x.id === y.id
      );
      if (!A)
        return;
      const $ = new Set(
        (A.subItems ?? []).map((x) => x.subId)
      );
      for (const x of C) {
        const N = (x.subItems ?? []).filter(
          (k) => !$.has(k.subId)
        );
        N.length > 0 && I.push({
          ...x,
          subItems: N
        });
      }
    } else
      I = (C ?? []).filter((A) => A.id !== y.id);
    t.onSelect(I);
  }
  function S(y, I) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const C = t.selectedEntities ?? [], A = I.subId, $ = [];
    for (const x of C) {
      const N = x.subItems?.filter((k) => k.subId !== A) ?? [];
      N.length > 0 && $.push({
        ...x,
        subItems: N
      });
    }
    t.onSelect($);
  }
  function P() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const y = t.selectedEntities ?? [];
    let I = [];
    if (u) {
      const C = new Set(
        l.flatMap(
          (A) => (A.subItems ?? []).map(($) => $.subId)
        )
      );
      for (const A of y) {
        const $ = (A.subItems ?? []).filter(
          (x) => !C.has(x.subId)
        );
        $.length > 0 && I.push({
          ...A,
          subItems: $
        });
      }
    } else {
      const C = new Set(
        l.map((A) => A.id)
      );
      I = (y ?? []).filter((A) => !C.has(A.id));
    }
    t.onSelect(I);
  }
  function M() {
    const y = [...t.selectedEntities ?? []];
    l.forEach((I) => {
      const C = y.find((A) => A.id === I.id);
      if (!C)
        y.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const A = Array.from(
          /* @__PURE__ */ new Set([
            ...C.subItems ?? [],
            ...I.subItems ?? []
          ])
        );
        C.subItems = A;
      }
    }), t.singleSelector || t.onSelect(y);
  }
  const O = (y) => {
    c(y), f(y);
  }, _ = (y, I) => {
    t.onItemExpandedChange(y.id, I), s(
      l.map(
        (C) => C.id === y.id ? { ...C, expanded: !y.expanded } : C
      )
    );
  };
  V(() => {
    if (!d) {
      s(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const I = t.entities.map((C) => {
        const A = Rs(C, d), $ = C.subItems?.map((x) => ({
          ...x,
          score: He(
            d,
            x.subSearchKeys ?? [x.subName]
          )
        })).filter((x) => x.score < 1 / 0).sort((x, N) => x.score - N.score);
        return {
          ...C,
          score: A,
          expanded: C.expanded ?? ($?.length ?? 0) > 0,
          subItems: $
        };
      }).filter((C) => C.score < 1 / 0).sort((C, A) => C.score - A.score);
      s(I);
    } else {
      const y = t.entities.map((I) => {
        const C = He(
          d,
          I.searchKeys ?? [I.name]
        );
        return { ...I, score: C };
      }).filter((I) => I.score < 1 / 0).sort((I, C) => I.score - C.score);
      s(y);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    s
  ]);
  const L = H(null), [K, z] = T(0);
  return On(() => {
    const y = () => {
      L.current && z(L.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: L,
      className: h(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        an,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: S,
          onSubItemSelect: v,
          onClear: P,
          onSelectAll: M,
          selectedEntities: t.selectedEntities ?? [],
          search: i,
          onSearch: O,
          onToggleExpand: _,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? K - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Lr, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      Tr,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          Ps,
          {
            selected: t.selectedItemsCopy,
            selectedEntities: t.selectedEntities ?? [],
            hiddenAvatar: t.hiddenAvatar,
            label: t.label,
            labelIcon: t.labelIcon,
            icon: t.icon,
            error: t.error,
            status: t.status,
            hint: t.hint,
            hideLabel: t.hideLabel,
            maxLength: t.maxLength,
            value: t.value?.toString() ?? void 0,
            disabled: t.disabled,
            placeholder: t.placeholder,
            loading: t.alwaysOpen ? t.loading : !1,
            required: t.required,
            readonly: t.readonly,
            append: t.append,
            size: t.size,
            open: n
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      _r,
      {
        container: g,
        className: h(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          an,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: S,
            onSubItemSelect: v,
            onClear: P,
            onSelectAll: M,
            selectedEntities: t.selectedEntities ?? [],
            search: i,
            onSearch: O,
            onToggleExpand: _,
            searchPlaceholder: t.searchPlaceholder,
            selectAllLabel: t.selectAllLabel,
            clearLabel: t.clearLabel,
            selectedLabel: t.selectedLabel,
            singleSelector: t.singleSelector,
            loading: t.loading,
            notFoundTitle: t.notFoundTitle,
            notFoundSubtitle: t.notFoundSubtitle,
            width: t.width,
            disabled: t.disabled,
            hiddenAvatar: t.hiddenAvatar,
            actions: t.actions,
            onCreate: t.onCreate,
            onCreateLabel: t.onCreateLabel
          }
        )
      }
    )
  ] });
};
function pt(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function rn(t) {
  return pt(t).split(/\s+/).filter((n) => n.length > 0);
}
function He(t = "", n) {
  const a = rn(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = pt(r), s = rn(r), i = pt(t);
    if (l.includes(i) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Rs(t, n) {
  const a = He(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, s) => {
    const i = He(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(a, r);
}
const ta = ge({
  base: h(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    ne()
  ),
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), Bs = Ee.forwardRef(({ className: t, variant: n, size: a, ...r }, l) => /* @__PURE__ */ e(
  Nn,
  {
    ref: l,
    className: h(ta({ variant: n, size: a, className: t })),
    ...r
  }
));
Bs.displayName = Nn.displayName;
const na = Ee.createContext({
  size: "default",
  variant: "default"
}), aa = Ee.forwardRef(({ className: t, variant: n, size: a, children: r, ...l }, s) => /* @__PURE__ */ e(
  Bn,
  {
    ref: s,
    className: h("flex items-center justify-center gap-1.5", t),
    ...l,
    children: /* @__PURE__ */ e(na.Provider, { value: { variant: n, size: a }, children: r })
  }
));
aa.displayName = Bn.displayName;
const ra = Ee.forwardRef(({ className: t, children: n, variant: a, size: r, ...l }, s) => {
  const i = Ee.useContext(na);
  return /* @__PURE__ */ e(
    $n,
    {
      ref: s,
      className: h(
        ta({
          variant: i.variant || a,
          size: i.size || r
        }),
        t
      ),
      ...l,
      children: n
    }
  );
});
ra.displayName = $n.displayName;
const $s = ({
  id: t,
  createdAt: n,
  title: a,
  description: r,
  icon: l,
  category: s,
  isUnread: i = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = ct({
    threshold: 0.1,
    onChange(p) {
      p && d?.(t);
    }
  }), u = Wn(n, {
    yesterdayRelative: !1
  });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
      onClick: () => {
        c(t);
      },
      children: [
        /* @__PURE__ */ e(dt, { icon: l ?? Cn }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: a,
              children: a
            }
          ),
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 text-f1-foreground-secondary",
              title: r,
              children: r
            }
          ),
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: i && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Ws = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(D, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(D, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Et = R(
  "ActivityItem",
  ee($s, Ws)
), la = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), Ms = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(la, { title: t, children: n.map((l) => /* @__PURE__ */ e(
  Et,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), js = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(la, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(Et.Skeleton, {}, r)) }), Me = ee(Ms, js), Vs = 3, Gs = ["today", "yesterday", "lastWeek", "lastMonth"], Hs = (t) => Er(t, ([n]) => {
  const a = Gs.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), gt = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Us = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = le(), i = _l(t, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = Dr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Hs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ e(
        Me,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ e(gt, {})
    ] }, u)),
    n && new Array(Vs).fill(null).map((u, m) => /* @__PURE__ */ e(Et.Skeleton, {}, m))
  ] });
}, Ks = () => {
  const t = le();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Me.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(gt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(gt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Hc = R(
  "ActivityItemList",
  ee(Us, Ks)
), qs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Ys = {
  viridian: "bg-[hsl(theme(colors.viridian.50)_/_0.2)]",
  malibu: "bg-[hsl(theme(colors.malibu.50)_/_0.2)]",
  yellow: "bg-[hsl(theme(colors.yellow.50)_/_0.2)]",
  purple: "bg-[hsl(theme(colors.purple.50)_/_0.2)]",
  lilac: "bg-[hsl(theme(colors.lilac.50)_/_0.2)]",
  barbie: "bg-[hsl(theme(colors.barbie.50)_/_0.2)]",
  smoke: "bg-[hsl(theme(colors.smoke.50)_/_0.2)]",
  army: "bg-[hsl(theme(colors.army.50)_/_0.2)]",
  flubber: "bg-[hsl(theme(colors.flubber.50)_/_0.2)]",
  indigo: "bg-[hsl(theme(colors.indigo.50)_/_0.2)]",
  camel: "bg-[hsl(theme(colors.camel.50)_/_0.2)]"
};
function Zs({
  firstName: t,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: l,
  onReactionSelect: s,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Ys[Or(
          [t, n].join("")
        )]
      ),
      children: [
        a && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${a}")` }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ o("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ e(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ e(
                pe,
                {
                  src: a,
                  firstName: t,
                  lastName: n,
                  size: "2xl"
                }
              )
            }
          ),
          r && /* @__PURE__ */ e(
            "div",
            {
              ref: i,
              className: h(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                Mn,
                {
                  lastEmojiReaction: l,
                  onSelect: s,
                  size: "sm",
                  variant: "neutral"
                }
              )
            }
          )
        ] }) })
      ]
    }
  );
}
function Js(t) {
  const n = H(null), a = H(), r = Q(() => {
    const s = n.current;
    if (!s) return;
    const i = zr.create(s, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    a.current = setInterval(() => {
      i({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: {
          x: d + Math.random() * (1 - d * 2),
          y: -0.1
        },
        gravity: 0.65,
        scalar: 1,
        ticks: 80,
        startVelocity: 1,
        disableForReducedMotion: t,
        colors: [
          c[Math.floor(Math.random() * c.length)]
        ]
      });
    }, 100);
  }, [t]), l = Q(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: l };
}
const Xs = ({
  link: t,
  firstName: n,
  lastName: a,
  src: r,
  onClick: l,
  canReact: s = !0,
  lastEmojiReaction: i,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = T(i), g = H(null);
  V(() => {
    p(i);
  }, [i]);
  const b = (O) => {
    p(O), c?.(O);
  }, v = Ye(), { canvasRef: w, handleMouseEnter: S, handleMouseLeave: P } = Js(v), M = Ct({
    emoji: qs[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    be,
    {
      href: t,
      onClick: l,
      className: h(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ne()
      ),
      onMouseEnter: v ? void 0 : S,
      onMouseLeave: v ? void 0 : P,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          Zs,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: b,
            pickerRef: g
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o("div", { className: "truncate font-medium text-f1-foreground", children: [
              n,
              " ",
              a
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ e("span", { className: "truncate", children: f }),
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: M })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(mt, { date: u }) })
        ] })
      ]
    }
  );
}, Qs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(D, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Uc = ee(Xs, Qs), Kc = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(In, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(j, { label: a, variant: "outline", onClick: r }) })
] });
function ei({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = T(a), [c, d] = T(n), f = H(null), { fireEmojiConfetti: u } = Pr(), m = (b, v) => {
    b.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(v), s || u(v, f);
  }, p = r?.map((b) => b.name).join(", ") || "", g = /* @__PURE__ */ e(
    kn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (b) => {
        m(b, t);
      },
      className: h(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Rr(t),
      prepend: /* @__PURE__ */ e(Ct, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        Br,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: h(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return p ? /* @__PURE__ */ e(ve, { label: p, children: g }) : g;
}
function ti({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      j,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(Mn, { onSelect: n, locale: a }),
    t.map((l) => /* @__PURE__ */ e(
      ei,
      {
        emoji: l.emoji,
        initialCount: l.initialCount,
        hasReacted: l.hasReacted,
        users: l.users,
        onInteraction: n
      },
      l.emoji
    ))
  ] });
}
const ni = R("Reactions", ti), sa = E(function({ content: n, collapsed: a, id: r, className: l, tabIndex: s }, i) {
  return /* @__PURE__ */ e(
    $r,
    {
      ref: i,
      id: r,
      content: n,
      tabIndex: s,
      className: h(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        l
      )
    }
  );
});
sa.displayName = "BasePostDescription";
const ai = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(D, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(D, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), ia = ee(
  sa,
  ai
), ln = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: h(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Ie,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        ve,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), bt = E(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: l,
    color: s,
    isPending: i,
    leftTags: c,
    rightTags: d,
    fromDate: f,
    toDate: u,
    noBackground: m
  }, p) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: p,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${s}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${s}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: i ? {
                backgroundImage: `repeating-linear-gradient(
              135deg,
              ${s} 0px,
              ${s} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
              } : {
                backgroundColor: s
              }
            }
          ),
          /* @__PURE__ */ o("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!n && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ e("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(mt, { date: f }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      icon: yt,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(mt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(ln, { tags: c }),
              d && /* @__PURE__ */ e(ln, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), ri = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), oa = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && ri.has(a);
}, li = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = Dl(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: oa(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ e("source", { src: n })
      }
    ) : /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(D, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      bt,
      {
        title: t,
        description: l,
        color: Wr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, si = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(D, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(D, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(D, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(D, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), ca = ee(li, si), ii = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const l = le();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: h(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ne()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: l.actions.seeMore
    }
  ) });
}, oi = ({
  id: t,
  author: n,
  group: a,
  createdAt: r,
  title: l,
  description: s,
  onClick: i,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: p,
  actions: g,
  dropdownItems: b,
  noReactionsButton: v = !1,
  descriptionExpandable: w = !1
}) => {
  const S = ft(), P = ft(), M = H(null), [O, _] = T(null), [L, K] = T(!1), z = [f.views, f.comments].filter(Boolean).join(" · "), y = w && O?.id === t && O.description === s, I = !y, C = Wn(r), A = () => {
    i(t);
  }, $ = (k) => {
    k.stopPropagation();
  }, x = n ? `${n.firstName} ${n.lastName}` : void 0, N = (k) => {
    k.preventDefault(), k.stopPropagation(), s && _({ id: t, description: s });
  };
  return V(() => {
    y && M.current?.focus();
  }, [y]), V(() => {
    w || _(null);
  }, [w]), V(() => {
    const k = M.current;
    if (!w || !k || y) {
      K(!1);
      return;
    }
    const G = () => {
      K(
        k.scrollHeight > k.clientHeight
      );
    };
    if (G(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver(G);
    return re.observe(k), () => re.disconnect();
  }, [w, y, s]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: A,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          Be,
          {
            href: n.url || "#",
            title: x,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              pe,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(dt, { icon: Rt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(
                    Be,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: x,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        pe,
                        {
                          firstName: n.firstName,
                          lastName: n.lastName,
                          src: n.avatarUrl,
                          size: "xs"
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ e(
                    Be,
                    {
                      href: n.url,
                      title: x,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: x
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(dt, { icon: Rt, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: h(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  Be,
                  {
                    onClick: a.onClick,
                    title: a.title,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    href: "#",
                    children: a.title
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ o("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  g?.map((k) => /* @__PURE__ */ e(
                    j,
                    {
                      hideLabel: !k.label,
                      ...k.icon && { icon: k.icon },
                      variant: "outline",
                      size: "md",
                      onClick: k.onClick,
                      label: k.label ?? "",
                      title: k.label ?? ""
                    },
                    k.label
                  )),
                  b?.length && /* @__PURE__ */ e(
                    Ce,
                    {
                      items: b,
                      icon: ut,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ce,
                  {
                    items: [
                      {
                        label: p.label,
                        onClick: p.onClick
                      },
                      ...b ?? []
                    ],
                    icon: ut,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: C }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: S,
                  className: h(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ o(U, { children: [
                /* @__PURE__ */ e(
                  ia,
                  {
                    ref: M,
                    id: P,
                    content: s,
                    collapsed: I,
                    tabIndex: y ? -1 : void 0,
                    className: h(y && ne())
                  }
                ),
                w && L && !y && /* @__PURE__ */ e(
                  ii,
                  {
                    describedBy: S,
                    controls: P,
                    expanded: y,
                    onClick: N
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: oa(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: $,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(D, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(ca, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: z }),
          !v && /* @__PURE__ */ e(
            ni,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: Mr
              }
            }
          )
        ] })
      ]
    }
  );
}, ci = ({
  withEvent: t,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(D, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(D, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(D, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(ia.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(D, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(ca.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), qc = ee(
  oi,
  ci
), di = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], ui = E(
  function({ daysOfTheWeek: n = di, activatedDays: a = [] }, r) {
    const l = a.map(
      (s) => `${s}-${n[s]}`
    );
    return /* @__PURE__ */ e(
      aa,
      {
        type: "multiple",
        value: l,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: n.map((s, i) => /* @__PURE__ */ e(
          ra,
          {
            "aria-label": s,
            value: `${i}-${s}`,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: s[0]
          },
          i
        ))
      }
    );
  }
), fi = 750, mi = ({ text: t, children: n }) => {
  const [a, r] = T(!1);
  V(() => {
    if (a) {
      const s = setTimeout(() => r(!1), fi);
      return () => clearTimeout(s);
    }
  }, [a]);
  const l = async () => {
    try {
      await navigator.clipboard.writeText(t), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      "aria-label": a ? "Copied!" : `Copy ${t}`,
      className: h(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        a ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: l,
      children: [
        n,
        /* @__PURE__ */ e("div", { className: "relative h-5 w-5", children: /* @__PURE__ */ o(ke, { mode: "wait", children: [
          !a && /* @__PURE__ */ e(
            q.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ e(
                W,
                {
                  icon: jr,
                  size: "md",
                  "aria-hidden": !0,
                  color: "default",
                  className: h(
                    "opacity-0 transition-opacity duration-300",
                    !a && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "copy-icon"
          ),
          a && /* @__PURE__ */ e(
            q.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ e(
                W,
                {
                  icon: Nt,
                  size: "md",
                  "aria-hidden": !0,
                  color: "positive",
                  className: h(
                    "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                    a && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "check-icon"
          )
        ] }) })
      ]
    }
  );
}, da = zn(
  ({ children: t, className: n, ...a }) => /* @__PURE__ */ o(
    be,
    {
      ...a,
      className: h(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        n
      ),
      children: [
        t,
        /* @__PURE__ */ e("div", { className: "grid", children: /* @__PURE__ */ e(W, { "aria-hidden": !0, icon: yt, size: "md" }) })
      ]
    }
  )
);
da.displayName = "NavigateAction";
const ua = zn(
  ({ children: t, className: n, href: a, ...r }) => /* @__PURE__ */ o(
    be,
    {
      ...r,
      target: "_blank",
      href: a,
      rel: "noopener noreferrer",
      className: h(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        n
      ),
      children: [
        t,
        /* @__PURE__ */ e("div", { className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100", children: /* @__PURE__ */ e(
          W,
          {
            "aria-hidden": !0,
            icon: Vr,
            size: "md",
            color: "default"
          }
        ) })
      ]
    }
  )
);
ua.displayName = "OpenLinkAction";
const ze = E(
  (t, n) => {
    const {
      text: a,
      leftIcon: r,
      className: l,
      action: s = { type: "noop" }
    } = t;
    return /* @__PURE__ */ e(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: n,
        children: /* @__PURE__ */ o(
          hi,
          {
            action: s,
            className: h("flex items-center gap-1.5 p-1.5", l),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ e(W, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ e("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: a })
            ]
          }
        )
      }
    );
  }
);
ze.displayName = "ItemContainer";
const hi = ({
  children: t,
  action: n,
  ...a
}) => {
  const r = n.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ e(mi, { ...n, ...a, children: t });
    case "navigate":
      return /* @__PURE__ */ e(da, { ...n, ...a, children: t });
    case "open-link":
      return /* @__PURE__ */ e(ua, { ...n, ...a, children: t });
    case "noop":
      return /* @__PURE__ */ e("div", { ...a, children: t });
    default:
      return r;
  }
}, et = (t, n) => t && t.type === "copy" ? { type: "copy", text: t.text ?? n } : t, fa = E(
  ({ text: t, icon: n, action: a }, r) => /* @__PURE__ */ e(
    ze,
    {
      ref: r,
      text: t,
      leftIcon: n,
      action: et(a, t)
    }
  )
);
fa.displayName = "DataList.Item";
const pi = R("DataList.Item", fa), ma = E(
  ({ action: t, avatarUrl: n, firstName: a, lastName: r }, l) => {
    const s = `${a} ${r}`;
    return /* @__PURE__ */ e(
      ze,
      {
        ref: l,
        leftIcon: () => /* @__PURE__ */ e(
          pe,
          {
            size: "xs",
            src: n,
            firstName: a,
            lastName: r
          }
        ),
        text: s,
        action: et(t, s)
      }
    );
  }
);
ma.displayName = "PersonItem";
const gi = R("PersonItem", ma), ha = E(
  ({ avatarUrl: t, name: n, action: a }, r) => /* @__PURE__ */ e(
    ze,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ e(Sn, { name: n, size: "xs", src: t }),
      text: n,
      action: et(a, n)
    }
  )
);
ha.displayName = "CompanyItem";
const bi = R("CompanyItem", ha), pa = E(
  ({ action: t, name: n }, a) => /* @__PURE__ */ e(
    ze,
    {
      ref: a,
      leftIcon: () => /* @__PURE__ */ e(Gr, { name: n, size: "xs" }),
      text: n,
      action: et(t, n)
    }
  )
);
pa.displayName = "TeamItem";
const xi = R("TeamItem", pa), ga = E(
  ({ ...t }, n) => /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(An, { ...t }) })
);
ga.displayName = "DotTagItem";
const vi = R("DotTagItem", ga), ba = E(
  ({ ...t }, n) => /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(It, { ...t }) })
);
ba.displayName = "AlertTagItem";
const yi = R("AlertTagItem", ba), xa = E(
  ({ ...t }, n) => /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Hr, { ...t }) })
);
xa.displayName = "BalanceTagItem";
const wi = R(
  "BalanceTagItem",
  xa
), va = E(
  ({ ...t }, n) => /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(De, { ...t }) })
);
va.displayName = "StatusTagItem";
const Ni = R(
  "StatusTagItem",
  va
), ya = E(
  ({ ...t }, n) => /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ie, { ...t }) })
);
ya.displayName = "RawTagItem";
const Ci = R("RawTagItem", ya);
function Ii(t, n) {
  return /* @__PURE__ */ e("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ur, { ...t }) });
}
const wa = E(Ii);
wa.displayName = "TagListItem";
const ki = R("TagListItem", wa), Na = E(
  ({ children: t, label: n, isHorizontal: a = !1 }, r) => /* @__PURE__ */ o(
    "div",
    {
      className: h(
        a ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"
      ),
      children: [
        n && /* @__PURE__ */ e(
          "p",
          {
            className: h(
              "px-1.5 text-f1-foreground-secondary",
              a ? "mt-2 w-44 xs:px-0" : "mb-0.5"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ e("ul", { className: "flex flex-col justify-center gap-0.5", ref: r, children: t })
      ]
    }
  )
);
Na.displayName = "DataList";
const Si = R("DataList", Na), ue = Object.assign(Si, {
  Item: pi,
  CompanyItem: bi,
  PersonItem: gi,
  TeamItem: xi,
  DotTagItem: vi,
  AlertTagItem: yi,
  BalanceTagItem: wi,
  StatusTagItem: Ni,
  RawTagItem: Ci,
  TagListItem: ki
}), Ai = ({ content: t }) => /* @__PURE__ */ o(U, { children: [
  t.type === "weekdays" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(ui, { ...t }) }),
  t.type === "person" && /* @__PURE__ */ e(ue.PersonItem, { ...t }),
  t.type === "item" && /* @__PURE__ */ e(ue.Item, { ...t }),
  t.type === "team" && /* @__PURE__ */ e(ue.TeamItem, { ...t }),
  t.type === "company" && /* @__PURE__ */ e(ue.CompanyItem, { ...t }),
  t.type === "dot-tag" && /* @__PURE__ */ e(ue.DotTagItem, { ...t }),
  t.type === "alert-tag" && /* @__PURE__ */ e(ue.AlertTagItem, { ...t }),
  t.type === "balance-tag" && /* @__PURE__ */ e(ue.BalanceTagItem, { ...t }),
  t.type === "status-tag" && /* @__PURE__ */ e(ue.StatusTagItem, { ...t }),
  t.type === "raw-tag" && /* @__PURE__ */ e(ue.RawTagItem, { ...t }),
  t.type === "tag-list" && /* @__PURE__ */ e(ue.TagListItem, { ...t.tagList }),
  t.type === "avatar-list" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(kt, { ...t.avatarList }) })
] }), Fi = E(
  function({
    title: n,
    content: a,
    isHorizontal: r = !1,
    verticalLayout: l = !1,
    spacingAtTheBottom: s
  }, i) {
    const c = Array.isArray(a) ? a : [a];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        className: h(
          "flex flex-col gap-0.5",
          s && !r && "pb-3",
          r && !l && "xs:[&_ul>li]:p-0 [&_ul]:flex-1",
          r && l && "[&_ul>li>*]:px-0 [&_ul]:flex-1 xs:[&>div]:flex-col"
        ),
        children: /* @__PURE__ */ e(ue, { label: n, isHorizontal: r, children: c.map((d, f) => /* @__PURE__ */ e(Ai, { content: d }, f)) })
      }
    );
  }
), Li = ae(
  R("DetailsItem", Fi)
), Ti = ({ onClick: t }) => {
  const n = le();
  return /* @__PURE__ */ e(
    j,
    {
      label: n.actions.seeMore,
      onClick: t,
      variant: "neutral"
    }
  );
}, _i = E(
  function({
    title: n,
    tableView: a = !1,
    details: r,
    dataTestId: l,
    showSeeMore: s,
    onClickSeeMore: i
  }, c) {
    return /* @__PURE__ */ e(Kr, { dataTestId: l, children: /* @__PURE__ */ o("div", { ref: c, className: "flex flex-col gap-4", children: [
      !!n && /* @__PURE__ */ e("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: n.toLocaleUpperCase() }),
      /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex flex-col",
            a ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"
          ),
          children: r?.map((d, f) => /* @__PURE__ */ o(ie.Fragment, { children: [
            /* @__PURE__ */ e(
              Li,
              {
                title: d.title,
                content: d.content,
                spacingAtTheBottom: d.spacingAtTheBottom,
                isHorizontal: a,
                verticalLayout: d.verticalLayout
              },
              d.title
            ),
            a && f !== r.length - 1 && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
          ] }, d.title))
        }
      ),
      s && /* @__PURE__ */ e(Ti, { onClick: i })
    ] }) });
  }
), Yc = R(
  "DetailsItemsList",
  _i
), Ca = ie.forwardRef(({ person: t, onClick: n, ...a }, r) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: h(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ e(
          pe,
          {
            firstName: t.firstName,
            lastName: t.lastName,
            src: t.avatarUrl,
            badge: t.avatarBadge
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center gap-1", children: [
            /* @__PURE__ */ e("span", { className: "truncate font-medium", children: `${t.firstName} ${t.lastName}` }),
            a.info && /* @__PURE__ */ e(ve, { label: a.info, children: /* @__PURE__ */ e(
              W,
              {
                icon: yn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, i) => /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(Ie, { ...s }, s.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(An, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              j,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
              j,
              {
                variant: "outline",
                onClick: a.actions.secondary.onClick,
                label: "Secondary",
                icon: a.actions.secondary.icon,
                hideLabel: !0
              }
            )
          ] })
        ] })
      ]
    }
  );
}), Di = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(D, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(D, { className: "h-4" }),
    /* @__PURE__ */ e(D, { className: "h-4" })
  ] })
] });
Ca.displayName = "OnePersonListItem";
const Zc = ae(
  R(
    "OnePersonListItem",
    ee(Ca, Di)
  )
), Ei = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Oi({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(ns, { children: /* @__PURE__ */ e(
    zi,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function zi({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? qr : l?.enabled ? ys : kl, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(s, { ...i, children: /* @__PURE__ */ e(
    $i,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const Jc = R(
  "ApplicationFrame",
  Oi
), Pi = ({ contentId: t }) => {
  const n = le();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: ne(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Ri(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Bi(t, n) {
  const { sidebarState: a, toggleSidebar: r } = Ae(), l = H(t);
  V(() => {
    n && Ri(
      t,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, n, a, r]);
}
function $i({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ae(), f = Ye(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: g,
    closeCanvas: b,
    chatWidth: v,
    resizable: w
  } = Yr(), S = m === "fullscreen", P = m === "canvas", { open: M } = Je(), O = w ? v : Zr, _ = H(S), L = S && !_.current, K = !S && _.current, [
    z,
    y
  ] = T(!1);
  V(() => {
    !S && _.current && y(!0), _.current = S;
  }, [S]);
  const I = S || z || K, C = Y(() => L ? { duration: 0.15, ease: "easeOut" } : K ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [L, K]), A = ot(
    `(max-width: ${je.xl}px)`,
    { initializeWithValue: !0 }
  ), $ = ot(`(max-width: ${je.md}px)`, {
    initializeWithValue: !0
  });
  return V(() => {
    d(u);
  }, [u, d]), V(() => {
    d(M);
  }, [M, d]), Bi(u, A), /* @__PURE__ */ e(
    El,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(Fn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(ke, { children: s === "unlocked" && /* @__PURE__ */ e(
            q.nav,
            {
              className: h(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !c && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: f ? 0 : 0.2 },
              onClick: () => i()
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: h(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (x) => {
                s === "hidden" ? x?.setAttribute("inert", "") : x?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Pi, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            q.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !$ ? O : 0
              },
              transition: { paddingRight: Ei },
              children: [
                /* @__PURE__ */ e(
                  q.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: h(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      I ? "overflow-hidden" : "overflow-auto",
                      !u && !M && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ e(
                      q.div,
                      {
                        className: h(
                          "flex max-w-full flex-1",
                          I ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && P && p && /* @__PURE__ */ e(
                  "div",
                  {
                    className: h(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      $ ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: $ ? void 0 : { right: O },
                    children: /* @__PURE__ */ e(
                      Jr,
                      {
                        content: p,
                        onClose: b,
                        entities: g
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  q.div,
                  {
                    className: h(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      $ ? "fixed inset-0 z-[30]" : h(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        I || P ? "z-20" : "z-0",
                        s === "hidden" && I ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: $ || S ? "100%" : O
                    },
                    transition: C,
                    onAnimationComplete: () => {
                      z && y(!1);
                    },
                    children: /* @__PURE__ */ e(Xr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(vs, {})
        ] }) })
      ] })
    }
  );
}
const Wi = ge({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
    }
  },
  defaultVariants: {
    period: "morning"
  }
});
function Ia({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Ae();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: Wi({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ e(
              j,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: gn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "flex flex-row items-center",
                  i ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    Ol,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    pe,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: i ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e(
                      "p",
                      {
                        className: h(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
                      "p",
                      {
                        className: h(
                          i ? "text-md" : "text-lg",
                          "text-f1-foreground-secondary"
                        ),
                        children: n.description
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ e(bn, {}),
            /* @__PURE__ */ e(Kn, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              i && "-mt-3"
            ),
            children: t
          }
        )
      ]
    }
  );
}
Ia.displayName = "DaytimePage";
const Xc = ae(
  R("DaytimePage", Ia)
);
function Mi(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function ji({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ce, { items: Mi(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: h(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ne()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(W, { icon: Ln, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Qc = ae(
  R("OmniButton", ji)
);
function ka({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !a && "xs:rounded-xl"
      ),
      children: [
        n && /* @__PURE__ */ e("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ e("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: t })
      ]
    }
  );
}
ka.displayName = "Page";
const ed = ae(R("Page", ka));
function Vi({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = Y(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(D, { className: "size-6" }),
    /* @__PURE__ */ e(D, { className: "h-3 w-14" })
  ] }) : t.length + (s?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    sn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    Gi,
    {
      companies: t,
      selected: i,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ e(
        sn,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Gi = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const s = le(), [i, c] = T(!1), d = Y(
    () => [
      ...t.map((u) => ({
        value: u.id,
        label: u.name,
        avatar: {
          type: "company",
          name: u.name,
          src: u.logo,
          "aria-label": `${u.name} logo`
        }
      })),
      ...l.length ? [{ type: "separator" }] : [],
      ...l
    ],
    [t, l]
  ), f = (u) => {
    const m = l?.find((p) => p.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ e(
    Ve,
    {
      label: s.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: s.navigation.sidebar.companySelector.placeholder,
      open: i,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: h(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ne()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              q.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(W, { icon: wt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, sn = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: h(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        Sn,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: Tn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(he, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function td({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = le();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ce, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: h(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ne("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ e(
            pe,
            {
              src: t.avatarUrl,
              firstName: t.firstName,
              lastName: t.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(he, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ e(ve, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        j,
        {
          icon: Cn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Qr, { type: "highlight", size: "sm", icon: Tn }) })
    ] }) })
  ] });
}
function Hi({ isExpanded: t }) {
  return /* @__PURE__ */ o(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ e(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "arrow",
            d: t ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: h(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: h(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Ui() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Ae(), l = H(null);
  return V(() => {
    t === "hidden" && n === "locked" && l.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    kn,
    {
      variant: "ghost",
      size: "md",
      onClick: () => a(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: l,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ e("div", { className: h("hidden", { flex: !r }), children: /* @__PURE__ */ e(Hi, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: h("hidden", { flex: r }), children: /* @__PURE__ */ e(W, { icon: Se, size: "md" }) })
      ]
    }
  );
}
function nd({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Vi,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Ui, {})
  ] });
}
function Ki() {
  const [t, n] = T(!1);
  return V(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Sa = Tt(void 0);
function qi({ children: t }) {
  const [n, a] = T(!1), [r, l] = T(null);
  return /* @__PURE__ */ e(
    Sa.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function Ot() {
  const t = Ze(Sa);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const Yi = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      W,
      {
        icon: t.icon,
        size: "md",
        className: h(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(qe, { value: t.badge, size: "sm", type: "bold" })
] }), Zi = ({ item: t }) => {
  const { isActive: n } = vt(), { label: a, icon: r, ...l } = t, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    be,
    {
      ...l,
      className: h(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ne("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(Yi, { item: t, active: s })
    }
  );
}, Ji = ({
  item: t,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: l,
  total: s,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = le(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: g } = Ot(), { isActive: b } = vt(), v = b(t.href, { exact: t.exactMatch }), w = H(!1), [S, P] = T(!1), M = l === 0, O = l === s - 1, _ = s === 1, L = Y(() => {
    const A = [];
    return !_ && !M && A.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: el
    }), !_ && !O && A.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: tl
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: nl,
      critical: !0
    }), A;
  }, [_, M, O, f, i, l, r, t]), K = () => {
    m(!0), P(!1), g(t.href || null), w.current = !0;
  }, z = () => {
    m(!1), g(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, y = u && p === t.href, I = Y(
    () => h(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      S && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [v, S, y, d]
  ), C = Y(() => /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(Qi, { tooltip: n, children: /* @__PURE__ */ o(
      be,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: h(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          y && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            W,
            {
              icon: t.icon,
              size: "md",
              className: h(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(al, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            he,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!n,
              children: t.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ e(
      "div",
      {
        className: h(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          S && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ce,
          {
            open: S,
            onOpenChange: P,
            items: L,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(W, { icon: ut, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, v, S, y, L, n]);
  return d ? /* @__PURE__ */ e(
    jn,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: K,
      onDragEnd: z,
      className: I,
      whileDrag: {
        scale: 1.05
      },
      children: C
    }
  ) : /* @__PURE__ */ e("div", { className: I, children: C });
}, Aa = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = T(n), f = Ye(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(rl, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: h(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ne("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: u,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u();
        },
        children: [
          t,
          /* @__PURE__ */ e(
            q.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                W,
                {
                  icon: wt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(ll, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      q.div,
      {
        initial: !1,
        animate: {
          height: c ? "auto" : 0,
          opacity: c ? 1 : 0,
          visibility: c ? "visible" : "hidden"
        },
        transition: {
          duration: f ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5", children: l })
      }
    ) })
  ] }) });
}, st = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Ot(), d = H(!1), f = zl(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, p = (b) => {
    !i && !d.current && r?.(t, b);
  }, g = /* @__PURE__ */ e(
    Aa,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: p,
      isDragging: i,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: t.items.map((b, v) => /* @__PURE__ */ e(Zi, { item: b }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    jn,
    {
      id: t.id,
      value: t,
      dragConstraints: a,
      dragElastic: 0.1,
      dragControls: f,
      onDragStart: u,
      onDragEnd: m,
      layout: !0,
      layoutId: `category-${t.id}`,
      initial: { opacity: 1 },
      animate: { opacity: 1, scale: 1 },
      exit: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)"
      },
      transition: {
        opacity: { duration: 0.2, ease: "easeInOut" },
        filter: { duration: 0.1, ease: "easeInOut" },
        scale: {
          duration: 0.2,
          ease: [0.175, 0.885, 0.32, 1.275]
        },
        layout: { type: "spring", bounce: 0.1, damping: 15 }
      },
      whileDrag: {
        scale: 1.04,
        cursor: "grabbing",
        zIndex: 50,
        backdropFilter: "blur(4px)"
      },
      className: "relative",
      children: g
    }
  ) : g;
};
function ad({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = H(null), i = t.filter(
    (b) => b.isSortable === !1
  ), [c, d] = T(
    t.filter((b) => b.isSortable !== !1)
  ), [f, u] = T(0), m = Q((b) => {
    d(b);
  }, []), p = Q(
    (b) => {
      a?.(b);
    },
    [a]
  ), g = Ki();
  return /* @__PURE__ */ e(qi, { children: /* @__PURE__ */ e(Fn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Xi,
    {
      disableDragging: g,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: p,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function Xi({
  nonSortableItems: t,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: l,
  onDragEnd: s,
  favorites: i = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = le(), { isDragging: m } = Ot(), p = t.some((x) => x.isRoot), g = t.filter((x) => !x.isRoot).length > 0, b = n.length > 0, v = H(null), [w, S] = T(i), P = i.length > 0;
  V(() => {
    JSON.stringify(i) !== JSON.stringify(w) && S(i);
  }, [i]);
  const M = (x) => {
    S(x);
  }, O = Q(
    (x) => {
      const N = w.filter((k) => k.href !== x.href);
      S(N), c?.(N);
    },
    [w, c]
  ), _ = Q(
    (x, N) => {
      if (N < 0 || N >= w.length) return;
      const k = [...w], [G] = k.splice(x, 1);
      k.splice(N, 0, G), S(k), c?.(k);
    },
    [w, c]
  ), [L, K] = T(!1), z = H(null);
  V(() => {
    n.length > 0 && !L && (a([...n]), K(!0));
  }, [n, a, L]), V(() => {
    const x = () => {
      z.current !== null && window.clearTimeout(z.current), z.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x), z.current !== null && window.clearTimeout(z.current);
    };
  }, [r, n, d]);
  const y = "flex flex-col gap-0.5", I = Y(
    () => w.reduce(
      (x, N, k) => (N.label in x || (x[N.label] = []), x[N.label].push(k), x),
      {}
    ),
    [w]
  ), C = Y(
    () => P && w.map((x, N) => /* @__PURE__ */ e(
      Ji,
      {
        isSortable: !f,
        tooltip: (I[x.label] ?? []).length > 1 ? x.tooltip : void 0,
        item: x,
        dragConstraints: v,
        onRemove: O,
        index: N,
        total: w.length,
        onMove: _,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${x.href}-${x.label}`
    )),
    [
      P,
      w,
      I,
      O,
      _,
      c,
      f
    ]
  ), A = "flex flex-col gap-3", $ = Y(() => n.map((x) => /* @__PURE__ */ e(
    st,
    {
      category: x,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: n
    },
    x.id
  )), [n, f, r, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => x.isRoot).map((x, N) => /* @__PURE__ */ e(
          st,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${N}`
        )) }),
        P && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(Aa, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: v, children: f ? /* @__PURE__ */ e("div", { className: y, children: C }) : /* @__PURE__ */ e(
          Mt,
          {
            axis: "y",
            values: w,
            onReorder: M,
            className: y,
            children: C
          }
        ) }) }) }),
        g && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => !x.isRoot).map((x, N) => /* @__PURE__ */ e(
          st,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${N}`
        )) }),
        b && /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: A, children: $ }) : /* @__PURE__ */ e(
              Mt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: A,
                children: $
              }
            )
          }
        )
      ]
    }
  );
}
const Qi = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(ve, { description: t, children: n }) : n;
function rd({
  onClick: t,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: h(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ne()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(W, { icon: sl, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(il, { keys: a }) })
      ]
    }
  ) });
}
const on = ({ position: t }) => /* @__PURE__ */ e(
  q.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: h(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      t === "top" ? [
        "top-0",
        "bg-gradient-to-b from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "bg-gradient-to-t from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
);
function eo({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Ae(), i = Ye(), [c, d] = ct({ threshold: 1 }), [f, u] = ct({ threshold: 1 }), m = le(), p = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, g = () => a ? Sl(a) && r ? Pn(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    q.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: h(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : h(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          s ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: l === "locked" || s ? 0 : "8px",
        borderRadius: l === "locked" || s ? "0" : "12px",
        left: l === "locked" ? "0" : s ? 0 : "8px",
        x: l === "hidden" ? -260 : 0,
        opacity: l === "hidden" ? s ? 0.7 : 0 : 1,
        pointerEvents: l === "hidden" ? "none" : "auto"
      },
      transition: p,
      children: [
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ke, { className: "h-full", children: [
            /* @__PURE__ */ e(
              "div",
              {
                ref: c,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ e("div", { className: "w-[var(--ds-sidebar-width)]", children: n }),
            /* @__PURE__ */ e(
              "div",
              {
                ref: f,
                className: "h-px",
                "aria-hidden": "true"
              },
              "bottom-ref"
            )
          ] }),
          /* @__PURE__ */ o(ke, { children: [
            !d && /* @__PURE__ */ e(on, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(on, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const ld = ae(eo), to = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, cn = {
  approved: {
    icon: vn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Se,
    type: "critical",
    size: "sm"
  }
}, no = {
  icon: Ln,
  type: "neutral",
  size: "sm"
}, ao = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, ro = (t) => t in cn ? cn[t] : no;
function dn(t) {
  return ao[t ?? "neutral"] ?? 0;
}
const lo = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = le(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[a], c = Y(() => r.map((d) => {
    const f = ro(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => dn(f.badge?.type) - dn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ e(De, { text: i, variant: to[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(kt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, so = ({ steps: t }) => {
  const a = le().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: s + 1 })
          }
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((l, s) => /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ e(
          lo,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, sd = ae(
  R("OneApprovalHistory", so)
), zt = {
  0: "gap-0",
  px: "gap-px",
  "0.5": "gap-0.5",
  1: "gap-1",
  "1.5": "gap-1.5",
  2: "gap-2",
  "2.5": "gap-2.5",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
  xl: "gap-4"
}, io = ge({
  base: "grid grid-cols-1",
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...zt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), oo = ie.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ e("div", { className: h("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ e(
    "div",
    {
      className: h(io({ gap: a, tileSize: l }), n),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), co = ge({
  base: "flex",
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), Fa = E(function({
  className: n,
  grow: a,
  basis: r,
  shrink: l,
  paddingX: s,
  paddingY: i,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: p,
  width: g,
  ...b
}, v) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        co({
          paddingX: s,
          basis: r,
          paddingY: i,
          grow: a,
          shrink: l,
          inline: c,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: p,
          width: g
        }),
        n
      ),
      ref: v,
      ...b
    }
  );
}), uo = ge({
  base: "flex-row",
  variants: {
    gap: {
      ...zt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), fo = ie.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, s) {
  return /* @__PURE__ */ e(
    Fa,
    {
      className: h(uo({ gap: a, wrap: r }), n),
      ref: s,
      ...l
    }
  );
}), mo = ge({
  base: "flex-col",
  variants: {
    gap: {
      ...zt
    }
  },
  defaultVariants: {}
}), ho = E(function({ className: n, gap: a, children: r, ...l }, s) {
  return /* @__PURE__ */ e(
    Fa,
    {
      className: h(mo({ gap: a }), n),
      ref: s,
      ...l,
      children: r
    }
  );
}), id = fe(
  {
    name: "Stack",
    type: "layout"
  },
  ho
), od = fe(
  {
    name: "Split",
    type: "layout"
  },
  fo
), cd = fe(
  {
    name: "AutoGrid",
    type: "layout"
  },
  oo
), po = ({ children: t }) => {
  const { enabled: n } = Vn();
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        q.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: n ? 0 : 1,
            scale: n ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: t
        }
      )
    }
  );
}, go = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), bo = E(function({ header: n, children: a, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Vn();
  V(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (g) => !!g && !(ie.isValidElement(g) && g.type === ie.Fragment && ie.Children.count(g.props.children) === 0), p = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    St,
    {
      className: h(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(At, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(Ft, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(go, {}),
                /* @__PURE__ */ e(_n, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(ve, { label: n.info, children: /* @__PURE__ */ e(
                W,
                {
                  icon: Dn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ e(It, { text: s, level: "critical" }),
              i && /* @__PURE__ */ e(De, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ e(
                ol,
                {
                  onClick: p,
                  href: n.link.url,
                  title: n.link.title,
                  icon: n.link.icon
                }
              )
            ] })
          ] }),
          n.comment && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(po, { children: /* @__PURE__ */ e(cl, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              j,
              {
                icon: f ? dl : ul,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Lt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((g, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, b)) }),
          ie.Children.toArray(a).filter(m).map((g, b) => /* @__PURE__ */ o(ie.Fragment, { children: [
            b > 0 && /* @__PURE__ */ e(Pl, { bare: !0 }),
            g
          ] }, b))
        ] }),
        r && /* @__PURE__ */ e(fl, { children: /* @__PURE__ */ e(j, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), xo = ge({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), vo = E(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      St,
      {
        className: h(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(At, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(Ft, { children: n.title }) : /* @__PURE__ */ e(D, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(_n, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            Lt,
            {
              "aria-hidden": !0,
              className: h(a !== "full" && xo({ height: a })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ e(
                D,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][s]}`
                },
                s
              ))
            }
          )
        ]
      }
    );
  }
), Ne = ae(
  R("Widget", ee(bo, vo))
), ce = Object.assign(
  E(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ e(Ne, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), yo = ee(
  E(function({ canBeBlurred: n, ...a }, r) {
    const l = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, s = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      ce,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(Rl, { ...s, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), wo = R(
  "AreaChartWidget",
  yo
), No = E(function(n, a) {
  return /* @__PURE__ */ e(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(Bl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Co = R(
  "BarChartWidget",
  ee(No, ce.Skeleton)
), Io = ee(
  E(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e($l, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), ko = R(
  "LineChartWidget",
  Io
), So = ee(
  E(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(Wl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ao = R(
  "PieChartWidget",
  So
), Fo = ee(
  E(
    function(n, a) {
      return /* @__PURE__ */ e(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Lo = R(
  "SummariesWidget",
  Fo
), To = ee(
  E(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(Ml, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), _o = R(
  "VerticalBarChartWidget",
  To
), dd = fe(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  wo
), ud = fe(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Co
), fd = fe(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ko
), md = fe(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Ao
), hd = fe(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  _o
), pd = fe(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Lo
), Do = (t, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "366",
    height: "146",
    viewBox: "0 0 366 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...t,
    children: [
      /* @__PURE__ */ e("g", { filter: "url(#filter0_b_378_17717)", children: /* @__PURE__ */ e(
        "rect",
        {
          y: "60",
          width: "40",
          height: "86",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ e("g", { filter: "url(#filter1_b_378_17717)", children: /* @__PURE__ */ e(
        "rect",
        {
          x: "80",
          y: "33",
          width: "40",
          height: "113",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ e("g", { filter: "url(#filter2_b_378_17717)", children: /* @__PURE__ */ e(
        "rect",
        {
          x: "162",
          y: "60",
          width: "40",
          height: "86",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ e("g", { filter: "url(#filter3_b_378_17717)", children: /* @__PURE__ */ e(
        "rect",
        {
          x: "244",
          y: "38",
          width: "40",
          height: "108",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ e("g", { filter: "url(#filter4_b_378_17717)", children: /* @__PURE__ */ e(
        "rect",
        {
          x: "326",
          width: "40",
          height: "146",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ o("defs", { children: [
        /* @__PURE__ */ o(
          "filter",
          {
            id: "filter0_b_378_17717",
            x: "-40",
            y: "20",
            width: "120",
            height: "166",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(
          "filter",
          {
            id: "filter1_b_378_17717",
            x: "40",
            y: "-7",
            width: "120",
            height: "193",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(
          "filter",
          {
            id: "filter2_b_378_17717",
            x: "122",
            y: "20",
            width: "120",
            height: "166",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(
          "filter",
          {
            id: "filter3_b_378_17717",
            x: "204",
            y: "-2",
            width: "120",
            height: "188",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(
          "filter",
          {
            id: "filter4_b_378_17717",
            x: "286",
            y: "-40",
            width: "120",
            height: "226",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        )
      ] })
    ]
  }
), Eo = E(Do), Oo = (t, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "406",
    height: "179",
    viewBox: "0 0 406 179",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...t,
    children: [
      /* @__PURE__ */ e(
        "path",
        {
          d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
          stroke: "#E51943",
          strokeOpacity: "0.1",
          strokeWidth: "1.3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e(
        "path",
        {
          d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
          fill: "url(#paint0_linear_3715_9085)"
        }
      ),
      /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ o(
        "linearGradient",
        {
          id: "paint0_linear_3715_9085",
          x1: "203",
          y1: "179",
          x2: "203",
          y2: "1",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ e("stop", { stopColor: "#E51943", stopOpacity: "0" }),
            /* @__PURE__ */ e("stop", { offset: "1", stopColor: "#E51943", stopOpacity: "0.05" })
          ]
        }
      ) })
    ]
  }
), zo = E(Oo), Po = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Ro = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Bo = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, $o = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Wo = E(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Po[i], f = Ro[i], u = Bo[i], m = $o[i];
    return /* @__PURE__ */ o(
      St,
      {
        className: h(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(At, { className: "-mt-0.5", children: /* @__PURE__ */ e(Ft, { children: n }) }),
          /* @__PURE__ */ o(Lt, { className: h("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Eo, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ e(zo, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                j,
                {
                  label: r,
                  icon: l,
                  variant: m,
                  onClick: s
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
), gd = ae(
  R("ChartWidgetEmptyState", Wo)
);
function Mo(t, n) {
  const a = H(null), r = H(null), [l, s] = T({
    visibleItems: [],
    overflowItems: []
  });
  ml({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const i = Q(
    (u, m, p) => m < p - 1 ? u + n : u,
    [n]
  ), c = Q(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let p = 0; p < u.length; p++) {
      const g = u[p].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = Q(
    (u, m) => {
      let p = 0, g = 0;
      for (let b = 0; b < u.length; b++) {
        const v = g + u[b];
        if (v > m + 30) break;
        g = v, g = i(
          g,
          b,
          u.length
        ), p++;
      }
      return p;
    },
    [i]
  ), f = Q(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), p = d(
      m,
      u
    );
    s(p === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (g) => g.visibleItems.length === p && g.overflowItems.length === t.length - p ? g : {
      visibleItems: t.slice(0, p),
      overflowItems: t.slice(p)
    });
  }, [t, c, d]);
  return V(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const tt = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Mo(n, l);
  return V(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: h("relative flex h-full flex-col", r),
      style: {
        minHeight: `${s}px`
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            ref: d,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${l}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ e("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${l}px` },
            "data-testid": "overflow-visible-container",
            children: f.map((u, m) => /* @__PURE__ */ e(
              "div",
              {
                className: "transition-all duration-150",
                "data-testid": "overflow-visible-item",
                children: a(u, m, !0)
              },
              `item-${m}`
            ))
          }
        )
      ]
    }
  );
};
tt.displayName = "VerticalOverflowList";
const bd = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(bt, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  tt,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(bt, { ...l }, l.title)
  }
) : null, jo = ({ onClick: t, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: h(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ e("div", { className: a, tabIndex: 1, children: n });
};
function xd({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(jo, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ e(W, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const Vo = E(
  function({ content: n, label: a, color: r, ...l }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
      /* @__PURE__ */ e("p", { className: "text-3xl font-semibold", children: n }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: a,
            children: a
          }
        ),
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: h("flex", r), children: /* @__PURE__ */ e(W, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: h("flex", r), children: /* @__PURE__ */ e(Ct, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), vd = E(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ e(
          Vo,
          {
            label: r,
            content: l,
            color: s,
            ...i
          },
          `${r}-${l}`
        ))
      }
    );
  }
), Go = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = h(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function yd({
  id: t,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: l,
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    Go,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(hl, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(pl, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          kt,
          {
            avatars: r,
            remainingCount: l,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const Ho = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function un({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const s = h(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Ho, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: s, children: [
    /* @__PURE__ */ e(In, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const Uo = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function xt({
  id: t,
  title: n,
  alert: a,
  rawTag: r,
  count: l,
  icon: s,
  rightIcon: i,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = h(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Uo, { onClick: (p) => {
    p.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ e(
        W,
        {
          icon: s,
          size: "md",
          className: h("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ e(
        W,
        {
          icon: i,
          size: "md",
          className: h("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(It, { ...a }),
      r && /* @__PURE__ */ e(Ie, { ...r }),
      !!l && /* @__PURE__ */ e(qe, { value: l })
    ] })
  ] });
}
function wd({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s) => /* @__PURE__ */ e(un, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ e(
    tt,
    {
      items: t,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ e(un, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Nd({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((s) => /* @__PURE__ */ e(xt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ e(
    tt,
    {
      items: t,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ e(xt, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const Ko = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Cd = E(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            ve,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(W, { icon: Dn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      l.map((i) => /* @__PURE__ */ e(Ko, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Id({
  title: t,
  subtitle: n,
  data: a,
  helpText: r,
  legend: l = !1,
  hideTooltip: s = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      jl,
      {
        data: a,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: h(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const La = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, qo = ({
  data: t = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const i = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!l || r === void 0) return;
    const u = La(
      a,
      r
    ), m = Math.abs(u), p = Math.floor(m / 60), g = Math.floor(m % 60), b = `${p.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = ye[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, it = "--:--", Yo = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: ye.empty
    };
  if (!n)
    return {
      value: 1,
      color: ye.empty
    };
}, Zo = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = La(
    n,
    a
  ), s = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : Yo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(p, c) : 0, v = (p - g) / s;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / s + v,
            color: ye.overtime
          }
        ] : [
          ...u,
          {
            value: g / s,
            color: ye.overtime
          },
          {
            value: v,
            color: ye[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: ye.empty
  }), f;
}, Jo = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((p) => p.variant === "clocked-in")?.from, l = t.at(-1), s = r ? jt(r) : it, i = n === void 0 || n > 0 ? it : l ? jt(l.to) : it, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: i,
    time: m
  };
}, ye = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Xo({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Zo({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: s, time: i } = Jo({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(Vl, { width: 156, height: 156, children: /* @__PURE__ */ e(
      Gl,
      {
        data: r,
        cx: 74,
        cy: 74,
        innerRadius: 62,
        outerRadius: 74,
        startAngle: 225,
        endAngle: -45,
        paddingAngle: 2,
        cornerRadius: 4,
        dataKey: "value",
        strokeWidth: 0,
        isAnimationActive: !1,
        children: r.map((c, d) => /* @__PURE__ */ e(
          gl,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: i }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: s })
    ] })
  ] });
}
function Qo({
  text: t,
  placeholder: n,
  icon: a,
  onClick: r
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
      onClick: r,
      children: [
        a && /* @__PURE__ */ e(W, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ e(
          "span",
          {
            className: h(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? n
          }
        ),
        /* @__PURE__ */ e(W, { icon: bl })
      ]
    }
  );
}
function kd({
  trackedMinutes: t,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: l,
  locations: s,
  canShowLocation: i = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: p,
  canShowBreakButton: g = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: S = !0,
  projectSelectorElement: P,
  breakTypeName: M
}) {
  const { status: O, statusText: _, subtitle: L, statusColor: K } = qo({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), z = O === "clocked-out", y = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? r.paid : r.unpaid
  })) ?? [], [I, C] = T(!1), A = () => {
    if (y.length > 1)
      I || C(!0);
    else {
      const B = y?.[0]?.value;
      u?.(B);
    }
  }, $ = (B) => {
    p?.(B), C(!1), u?.(B);
  }, x = z && s.length && !c && i, N = s.find((B) => B.id === l), k = s.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), G = O === "break", [re, se] = T(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: _ }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                q.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: K
                  },
                  initial: { scale: 0.5, opacity: 0.6 },
                  animate: { scale: 1.6, opacity: 0 },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    repeatDelay: 1
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute inset-[3px] rounded-full",
                  style: {
                    backgroundColor: K
                  }
                }
              )
            ] })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          O === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            j,
            {
              onClick: d,
              label: r.clockIn,
              icon: Bt
            }
          ) }),
          O === "clocked-in" && /* @__PURE__ */ o(U, { children: [
            g && /* @__PURE__ */ e(U, { children: y.length > 1 && p ? /* @__PURE__ */ e(
              Ve,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: $,
                open: I,
                onOpenChange: C,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  j,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: $t,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              j,
              {
                onClick: A,
                label: r.break,
                variant: "neutral",
                icon: $t,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Wt
              }
            )
          ] }),
          O === "break" && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Wt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              j,
              {
                onClick: d,
                label: r.resume,
                icon: Bt
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ e(
        Xo,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: x ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        Ve,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: k,
          onChange: w,
          open: re,
          onOpenChange: se,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Qo,
            {
              text: N?.name,
              placeholder: r.selectLocation,
              icon: N?.icon
            }
          ) })
        }
      ),
      S && P
    ] }) : /* @__PURE__ */ o(U, { children: [
      i && N && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Ie, { text: N.name, icon: N.icon }) }),
      S && P,
      G && M && /* @__PURE__ */ e(Ie, { text: M })
    ] }) })
  ] }) });
}
const ec = {
  done: yl,
  "in-progress": vl,
  todo: xl
}, tc = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function nc({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(t);
  }, s = Y(() => {
    if (!r)
      return ec[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    xt,
    {
      id: t.id,
      title: t.text,
      icon: s,
      iconClassName: tc[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: wl
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function Sd({
  tasks: t,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: l = "No tasks assigned"
}) {
  const i = [
    { key: "done", status: "done" },
    { key: "inProgress", status: "in-progress" },
    { key: "todo", status: "todo" }
  ].flatMap(
    ({ key: d, status: f }) => (t[d] || []).map(
      (u) => typeof u == "string" ? {
        id: u,
        text: u
      } : u
    ).map(({ id: u, text: m, badge: p, counter: g }) => ({
      id: u,
      text: m,
      badge: p,
      counter: g,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ e(
    nc,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var ac = Object.defineProperty, rc = Object.defineProperties, lc = Object.getOwnPropertyDescriptors, Ue = Object.getOwnPropertySymbols, Ta = Object.prototype.hasOwnProperty, _a = Object.prototype.propertyIsEnumerable, fn = (t, n, a) => n in t ? ac(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, oe = (t, n) => {
  for (var a in n || (n = {})) Ta.call(n, a) && fn(t, a, n[a]);
  if (Ue) for (var a of Ue(n)) _a.call(n, a) && fn(t, a, n[a]);
  return t;
}, nt = (t, n) => rc(t, lc(n)), sc = (t, n) => {
  var a = {};
  for (var r in t) Ta.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && Ue) for (var r of Ue(t)) n.indexOf(r) < 0 && _a.call(t, r) && (a[r] = t[r]);
  return a;
}, ic = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, oc = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), cc = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = oe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, dc = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = oe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, uc = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + t.width, ic(l) || oc({ usedSpot: l, spotsList: a }) ? null : l;
}, fc = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((l, s, i) => {
  if (l === a) return uc({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = cc({ position: n, spot: l, stone: r });
  return c || dc({ position: n, stone: r, spot: l }) || l;
});
function mc(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (t(l)) return l;
  }
  return null;
}
var hc = (t, n) => n.filter(t), pc = (t, n) => [...n].sort(t), gc = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, bc = (t) => pc(gc, t), xc = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
  let l = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let s = 0, i = t.length; s < i; s += 1) {
    let c = t[s];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, vc = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, yc = ({ availableSpots: t, stone: n }) => mc((a) => vc(a, n), t);
function wc({ stone: t, availableSpots: n, containerSize: a }) {
  let r = yc({ availableSpots: n, stone: t }), l = { left: r.left, top: r.top }, s = xc({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), i = [...n, s], c = fc({ spots: i, position: l, optimalSpot: r, stone: t });
  return i = [...hc(Boolean, c)], i = bc(i), { position: l, availableSpots: i };
}
var Nc = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of t) {
    let c = wc({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, Cc = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), Ic = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = T({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
    var u, m;
    let p = Cc(t.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let b = Nc({ stones: p, containerSize: g });
    f(nt(oe({}, b), { stones: p }));
  }, [a, t, n, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, kc = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), Sc = ({ transition: t, transitionDuration: n }) => t ? { transition: kc(n)[t] } : null, Ac = (t) => t ? nt(oe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Fc = ({ style: t, position: n, transition: a, transitionDuration: r }) => oe(oe(nt(oe({}, t), { position: "absolute" }), Ac(n)), Sc({ transition: a, transitionDuration: r }));
function Lc(t, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, n);
  };
}
var Tc = () => {
  let [t, n] = T(), a = H(Lc(n, 300));
  return V(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, _c = (t) => {
  let [n, a] = T(null);
  return V(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) a(s.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Dc = (t) => {
  var n = t, { children: a, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = sc(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = H([]), f = H(null), u = Tc(), m = _c(f), { positions: p, containerHeight: g } = Ic({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = oe({ minHeight: g ?? 0, position: "relative" }, r);
  return e("div", nt(oe({ ref: f, style: b }, c), { children: Rn.map(a, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let S = { style: Fc({ style: v.props.style, position: p[w], transition: l, transitionDuration: s }), ref: (P) => d.current[w] = P };
    return Pn(v, oe(oe({}, v.props), S));
  }) }));
};
const Ec = { sm: 340, md: 480, lg: 640 }, mn = E(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Ec[a], [s, i] = T(), c = Rn.toArray(n), d = H(null);
    return V(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: s === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Dc, { children: c.map((f, u) => /* @__PURE__ */ e(
      "div",
      {
        style: {
          width: `${Math.floor(1 / s * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: f
      },
      u
    )) }, s) }) }) });
  }
), Oc = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Ad = ee(mn, () => /* @__PURE__ */ e(En, { children: /* @__PURE__ */ e(mn, { children: Oc.map((t, n) => /* @__PURE__ */ e(Ne.Skeleton, { height: t }, n)) }) })), hn = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), Fd = ee(
  E(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ke, { ref: a, showBar: !1, children: /* @__PURE__ */ e(hn, { children: n }) });
  }),
  () => /* @__PURE__ */ e(En, { orientation: "horizontal", children: /* @__PURE__ */ o(hn, { children: [
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {})
  ] }) })
);
function zc({
  title: t,
  description: n,
  emoji: a,
  actions: r
}) {
  if ((r?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ e(
    Hl,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Ld = ae(
  R("WidgetEmptyState", zc)
), Da = E(
  ({ title: t, children: n }, a) => (Nl(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
Da.displayName = "WidgetSection";
const Td = ae(
  R("WidgetSection", Da)
), _d = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Cl(), s = window.location.pathname, i = Y(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = Y(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return i ? r : (l && console.error(c), null);
}, Dd = ae(
  fe(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ke
  )
);
export {
  Hc as ActivityItemList,
  Ks as ActivityItemListSkeleton,
  vs as AiPromotionChat,
  ys as AiPromotionChatProvider,
  Jc as ApplicationFrame,
  au as AreaChart,
  dd as AreaChartWidget,
  cd as AutoGrid,
  Qr as Badge,
  ru as BarChart,
  ud as BarChartWidget,
  Us as BaseActivityItemList,
  lu as BaseBanner,
  Xs as BaseCelebration,
  oi as BaseCommunityPost,
  zd as BaseTabs,
  Pd as BreadcrumbSelect,
  Jl as Breadcrumbs,
  bt as CalendarEvent,
  bd as CalendarEventList,
  su as CardSelectableContainer,
  Al as Carousel,
  iu as CategoryBarChart,
  Id as CategoryBarSection,
  Uc as Celebration,
  Qs as CelebrationSkeleton,
  gd as ChartWidgetEmptyState,
  Rd as Chip,
  kd as ClockInControls,
  ou as ComboChart,
  qc as CommunityPost,
  ci as CommunityPostSkeleton,
  Vi as CompanySelector,
  qe as Counter,
  Ad as Dashboard,
  Xc as DaytimePage,
  Li as DetailsItem,
  Yc as DetailsItemsList,
  cu as Dialog,
  Ce as Dropdown,
  Gc as EntitySelect,
  du as F0ActionBar,
  uu as F0AiBanner,
  In as F0AvatarModule,
  Bd as F0ButtonToggle,
  jc as F0Callout,
  Mc as F0SegmentedControl,
  fu as F0TableOfContent,
  Vc as F0VersionHistory,
  $d as F1SearchBox,
  mu as FILE_TYPES,
  Wd as FileItem,
  Kc as HighlightBanner,
  vd as IndicatorsList,
  Md as Input,
  hu as Item,
  pu as ItemSectionHeader,
  gu as LineChart,
  fd as LineChartWidget,
  ad as Menu,
  jd as MobileDropdown,
  bu as NotesTextEditor,
  xu as NotesTextEditorPatchTargetNotFoundError,
  vu as NotesTextEditorSkeleton,
  yu as NotesTextEditorUnsupportedPatchTypeError,
  wu as NumberInput,
  Qc as OmniButton,
  sd as OneApprovalHistory,
  Vd as OneCalendar,
  Gd as OneCalendarInternal,
  Nu as OneDataCollection,
  Cu as OneDateNavigator,
  Hl as OneEmptyState,
  Iu as OnePagination,
  Zc as OnePersonListItem,
  _d as OneRestrictComponent,
  ed as Page,
  Wc as PageHeader,
  ku as PieChart,
  md as PieChartWidget,
  po as PrivateBox,
  Su as ProgressBarChart,
  Au as RadarChart,
  ni as Reactions,
  Fu as ResourceHeader,
  $r as RichTextDisplay,
  Lu as RichTextEditor,
  Dd as ScrollArea,
  rd as SearchBar,
  Tu as SectionHeader,
  Ve as Select,
  il as Shortcut,
  ld as Sidebar,
  td as SidebarFooter,
  nd as SidebarHeader,
  xn as Spinner,
  od as Split,
  id as Stack,
  pd as SummariesWidget,
  Hd as Switch,
  Ud as Tabs,
  Kd as TabsSkeleton,
  Sd as TasksList,
  _u as Textarea,
  aa as ToggleGroup,
  ra as ToggleGroupItem,
  ve as Tooltip,
  Cd as TwoColumnsList,
  Du as VerticalBarChart,
  hd as VerticalBarChartWidget,
  ht as VirtualList,
  qd as WeekStartDay,
  ui as Weekdays,
  Ne as Widget,
  yd as WidgetAvatarsListItem,
  Ld as WidgetEmptyState,
  xd as WidgetHighlightButton,
  wd as WidgetInboxList,
  un as WidgetInboxListItem,
  Td as WidgetSection,
  Nd as WidgetSimpleList,
  xt as WidgetSimpleListItem,
  Fd as WidgetStrip,
  Eu as actionBarStatuses,
  Ou as buttonToggleSizes,
  zu as buttonToggleVariants,
  Yd as chipVariants,
  Pu as downloadAsCSV,
  Ru as generateCSVContent,
  Zd as getGranularityDefinition,
  Jd as getGranularityDefinitions,
  Xd as getGranularitySimpleDefinition,
  Qd as granularityDefinitions,
  eu as modules,
  Bu as predefinedPresets,
  tu as rangeSeparator,
  $u as selectSizes,
  Je as useAiPromotionChat,
  Wu as useDataCollectionData,
  Mu as useDataCollectionSource,
  ju as useExportAction,
  Vu as useInfiniteScrollPagination,
  Ae as useSidebar
};
