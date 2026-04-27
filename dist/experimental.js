import { a9 as oa, aa as ca, ab as da, ac as ua, ad as Ft, ae as Te, af as fa, ag as ht, ah as rt, ai as Be, O as p, W as Z, P as pe, u as se, aj as ma, ak as ha, al as ba, am as pa, an as ga, a5 as oe, ao as xa, U as Ee, ap as va, aq as wa, ar as $, as as ya, at as Na, M as _e, au as ln, av as Ca, aw as ka, Q as B, ax as sn, a8 as E, ay as ge, az as Sa, aA as Ia, aB as Fa, aC as Aa, aD as La, aE as Ce, aF as on, aG as Ea, aH as xe, aI as $e, aJ as _a, aK as bt, n as cn, aL as Ne, aM as Oa, aN as dn, a6 as ne, aO as H, R as un, aP as fn, aQ as Ta, aR as mn, aS as me, a7 as ee, aT as Da, aU as za, aV as Pa, aW as Ra, X as be, aX as Ge, aY as Ba, aZ as $a, a_ as Wa, a$ as Ma, b0 as He, b1 as hn, b2 as ja, b3 as Va, b4 as Ga, b5 as We, b6 as Ha, b7 as Ua, b8 as Ka, b9 as qa, ba as Ya, bb as Za, bc as Xa, bd as Ja, be as Qa, bf as er, bg as lt, bh as it, bi as bn, bj as tr, bk as nr, bl as pn, bm as ar, bn as rr, T as Ue, bo as pt, bp as gn, bq as lr, br as xn, bs as ir, bt as sr, bu as or, bv as Le, bw as cr, bx as De, by as At, bz as st, bA as dr, bB as ur, a as fr, c as mr, bC as hr, bD as vn, bE as br, bF as pr, F as gr, bG as wn, _ as xr, bH as yn, bI as vr, bJ as Lt, bK as wr, bL as yr, bM as Nr, bN as Cr, bO as Nn, bP as kr, bQ as Sr, bR as Ir, bS as Fr, bT as Ar, Y as Cn, bU as ue, bV as kn, bW as gt, bX as xt, bY as vt, bZ as Sn, b_ as wt, b$ as In, $ as Fn, c0 as Lr, c1 as Er, c2 as _r, c3 as Or, c4 as Tr, c5 as Dr, c6 as zr, c7 as Pr, c8 as Rr, c9 as Br, ca as $r, cb as Et, cc as _t, cd as Ot, ce as Wr, cf as Mr, cg as jr, ch as Vr, ci as An, cj as Gr, ck as Hr, cl as Ur } from "./F0AiChat-BBZPRGz2.js";
import { cF as Ac, cE as Lc, co as Ec, cR as _c, cy as Oc, cz as Tc, cn as Dc, cB as zc, cp as Pc, d1 as Rc, c$ as Bc, cq as $c, cC as Wc, cD as Mc, cA as jc, cr as Vc, cN as Gc, cO as Hc, cS as Uc, cZ as Kc, c_ as qc, d0 as Yc, cx as Zc, cs as Xc, cH as Jc, cG as Qc, ct as ed, cu as td, cv as nd, cP as ad, d2 as rd, cm as ld, cQ as id, cU as sd, cV as od, cM as cd, cJ as dd, cL as ud, cI as fd, cw as md, cK as hd, cW as bd, cX as pd, cT as gd, cY as xd } from "./F0AiChat-BBZPRGz2.js";
import { jsx as e, jsxs as o, Fragment as U } from "react/jsx-runtime";
import re, { forwardRef as j, useRef as V, useTransition as Kr, useState as _, useLayoutEffect as Ln, useContext as Ke, createContext as yt, useCallback as Q, useMemo as K, useEffect as W, useId as qr, Fragment as Yr, isValidElement as Zr, cloneElement as En, Children as _n } from "react";
import { C as Xr, P as Jr, g as On, c as Qr, F as ot, f as el, a as tl, A as nl, B as al, L as rl, b as ll, V as il, d as sl, e as Tt, h as ol, i as cl } from "./index-B1IKdDTI.js";
import { l as wd, m as yd, j as Nd, n as Cd, s as kd, D as Sd, k as Id, o as Fd, w as Ad, x as Ld, N as Ed, y as _d, p as Od, r as Td, R as Dd, u as zd, q as Pd, _ as Rd, v as Bd, t as $d } from "./index-B1IKdDTI.js";
const dl = oa("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Tn = j(({ className: t, items: n }, a) => /* @__PURE__ */ e(ca, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(da, {}),
  /* @__PURE__ */ e(ua, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Tn.displayName = "CollapsedBreadcrumbItem";
const Nt = 50, ul = 120, Me = 8;
function fl(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = t - r - Me, i = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, i = c, s++;
  }
  if (s < a)
    for (l -= Nt; l < 0 && s > 1; )
      l += n[i], i++, s--;
  return Math.max(2, s);
}
function Dt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Me;
    default:
      return t[0] + Nt + t[t.length - 1] + Me;
  }
}
function ml(t, n) {
  return ul * t + (n ? Nt : 0) + Me;
}
function hl(t, n, a = []) {
  if (!t) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: ml(
        s,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, l = a.map((s) => s.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Dt(l)
    };
  const i = fl(t, l);
  return {
    visibleCount: i,
    headItem: n[0] || null,
    tailItems: n.slice(
      Math.max(1, n.length - (i - 1))
    ),
    collapsedItems: n.slice(
      1,
      n.length - (i - 1)
    ),
    isOnly: n.length === 1,
    minWidth: Dt(l)
  };
}
function bl({ breadcrumbs: t, append: n }) {
  const a = V(null), r = V(null), [, l] = Kr(), [i, s] = _(null), c = (i?.collapsedItems || []).length > 0;
  return Ln(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const b = hl(
          h,
          t,
          g
        );
        s(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || i && !i.headItem ? /* @__PURE__ */ e(Ft, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Ft,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: i?.minWidth
      },
      children: [
        /* @__PURE__ */ e(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: t.map((d, f) => /* @__PURE__ */ e(
              Te,
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
        i && i.headItem && /* @__PURE__ */ o(fa, { children: [
          /* @__PURE__ */ e(
            Te,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${i.headItem.id}`
          ),
          c && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              Tn,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ e(
              Te,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(U, { children: i.tailItems.map((d, f) => /* @__PURE__ */ e(
            Te,
            {
              item: d,
              isLast: f === i.tailItems.length - 1,
              isFirst: !1,
              children: f === i.tailItems.length - 1 ? n : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const zt = "one_sidebar_locked", Dn = yt(void 0);
function ke() {
  const t = Ke(Dn);
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
function pl({ children: t }) {
  const { currentPath: n } = ht(), [a, r] = _(!1), [l, i] = _(!1), s = a ? Be.xl : Be.md, c = rt(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = _(() => {
    const A = localStorage.getItem(zt);
    return A !== null ? !!A : !0;
  }), [u, m] = _(!1), [h, g] = _(
    null
  ), b = Q(
    ({ isInvokedByUser: A } = {
      isInvokedByUser: !0
    }) => {
      i(A ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = Q(
    (A) => {
      c || (A.clientX < 32 && m(!0), A.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return W(() => {
    m(!1);
  }, [n]), W(() => {
    l && localStorage.setItem(zt, d ? "1" : "");
  }, [d, l]), W(() => () => {
    g(w);
  }, [w]), /* @__PURE__ */ e(
    Dn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: x, className: "h-screen w-screen", children: t })
    }
  );
}
const gl = pe({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Pt = [
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
], xl = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, i) => {
  const s = qr(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...g
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(gl({ size: n }), h),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        Z.svg,
        {
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
            ...g.style
          },
          ...(({ style: b, ...x }) => x)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Pt.map((b) => /* @__PURE__ */ e("clipPath", { id: `${s}-${b.id}`, children: /* @__PURE__ */ e("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${s}-circle)`, children: Pt.map((b) => /* @__PURE__ */ e(
              Z.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${b.id})`,
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
}, zn = j(xl), Pn = yt(null), vl = 15, wl = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [l, i] = _(n), [s, c] = _(!1), [d, f] = _(!0), [u, m] = _(
    vl
  ), h = V(null), g = (x) => {
    h.current = x;
  }, b = () => {
    h.current && h.current();
  };
  return W(() => {
    i(n);
  }, [n]), W(() => {
    if (s && a?.(), !s) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [s, a]), /* @__PURE__ */ e(
    Pn.Provider,
    {
      value: {
        ...r,
        enabled: l,
        setEnabled: i,
        open: s,
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
function qe() {
  const t = Ke(Pn);
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
const Rn = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = qe(), i = se(), [s, c] = _(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(ma, { children: /* @__PURE__ */ o(ha, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(ba, { asChild: !0, children: /* @__PURE__ */ e(
      Z.div,
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
          pa,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? i.ai.closeChat : i.ai.openChat,
            className: p(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              oe(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              ga,
              {
                className: p(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  zn,
                  {
                    size: "sm",
                    background: l ? "white" : void 0,
                    hover: s
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !l && /* @__PURE__ */ e(xa, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, Rt = Z.create($), Bt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, yl = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, l] = _(!1), i = () => {
    l(!0), n(!t);
  };
  return /* @__PURE__ */ e(Ee, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: p(
        "flex h-6 w-6 items-center justify-center rounded",
        oe()
      ),
      onClick: i,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Rt,
        {
          size: "sm",
          icon: va,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Bt,
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
        Rt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: wa,
          className: "outline-none",
          variants: Bt,
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
}, Nl = ({
  currentModule: t,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: l,
  errorScreen: i,
  onOpenChange: s = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = _("idle"), [g, b] = _(null), [x, ...w] = g ?? [], [A, T] = _(!1);
  W(() => {
    b(null), h("idle");
  }, [t]);
  const R = Q(async () => {
    try {
      h("fetching");
      const O = await a();
      h("idle"), b(O);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    ya,
    {
      open: A,
      onOpenChange: async (O) => {
        T(O), O && g === null && R(), s(O);
      },
      children: [
        /* @__PURE__ */ e(Na, { asChild: !0, children: /* @__PURE__ */ e(
          _e,
          {
            variant: "outline",
            icon: ln,
            hideLabel: !0,
            label: n,
            pressed: A,
            append: f && /* @__PURE__ */ e(Ct, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Ca, { children: /* @__PURE__ */ o(
          ka,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Sl, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Al, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(Il, { ...l, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Cl,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: w.map((O, L) => /* @__PURE__ */ e(
                    kl,
                    {
                      ...O,
                      onClick: d
                    },
                    L
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  Fl,
                  {
                    ...i,
                    onClick: () => {
                      R();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                Ll,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => T(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Cl = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: i
}) => {
  const s = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    Sa,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        ge,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: p(s, "text-f1-foreground no-underline"),
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
              Ia,
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
              r && /* @__PURE__ */ e(Ct, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, kl = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const i = p("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(Fa, { asChild: !0, className: i, onClick: l, children: /* @__PURE__ */ e(
    ge,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: p(
        i,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(Ct, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Sl = ({
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
        B,
        {
          variant: "outline",
          size: "sm",
          icon: sn,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Bn = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: p(
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
] }) }), Il = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Bn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e($, { icon: ln, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(ge, { href: a, children: /* @__PURE__ */ e(B, { label: n }) })
  }
), Fl = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Bn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e($, { icon: Aa, size: "lg" }),
    button: /* @__PURE__ */ e(B, { variant: "outline", label: a, onClick: r })
  }
), Al = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(E, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(E, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(E, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Ct = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: p("size-2 rounded bg-f1-background-selected-bold", t)
  }
), Ll = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, i] = _(t);
  W(() => {
    i(t);
  }, [t]);
  const s = () => {
    i(!1), n && n();
  }, c = (d) => {
    i(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e(La, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          B,
          {
            variant: "ghost",
            icon: Ce,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        Xr,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            Jr,
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
function $t({
  icon: t,
  href: n,
  label: a,
  disabled: r
}) {
  const l = V(null);
  return /* @__PURE__ */ e(
    B,
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
function zo({
  module: t,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: l = !1,
  navigation: i,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = ke(), h = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], g = n && Object.keys(n).length !== 0, b = a.length > 0, x = !l && r.length > 0, w = !l && !!s?.isVisible, A = h[h.length - 1], T = b ? h[h.length - 2] : null;
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(Ee, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            Z.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                B,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: on
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                "flex flex-grow items-center gap-2",
                l && b && "justify-center"
              ),
              children: [
                l && b && T && !("loading" in T) && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(ge, { href: T.href, children: /* @__PURE__ */ e(
                  B,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Ea,
                    onClick: (R) => R.preventDefault()
                  }
                ) }) }),
                l && b ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in A ? /* @__PURE__ */ e(E, { className: "h-4 w-24" }) : A.label }) : /* @__PURE__ */ e(
                  bl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      yl,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  h[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !l && g && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(xe, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            $e,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e($e, { text: n.text, variant: n.variant }) }),
          !l && g && (i || x || w) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          i && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            i.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              i.counter.current,
              "/",
              i.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                $t,
                {
                  icon: _a,
                  label: i.previous?.title || "Previous",
                  href: i.previous?.url || "",
                  disabled: !i.previous
                }
              ),
              /* @__PURE__ */ e(
                $t,
                {
                  icon: bt,
                  label: i.next?.title || "Next",
                  href: i.next?.url || "",
                  disabled: !i.next
                }
              )
            ] })
          ] }),
          i && x && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Nl,
              {
                ...s,
                currentModule: t.name
              }
            ) }),
            x && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((R, O) => /* @__PURE__ */ e(El, { action: R }, O)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              cn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Rn, {})
          ] })
        ] })
      ]
    }
  );
}
function El({ action: t }) {
  const n = V(null), [a, r] = _(!1);
  return "actions" in t ? /* @__PURE__ */ e(Ne, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    _e,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    B,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    ge,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        B,
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
const _l = () => {
  const t = se();
  return /* @__PURE__ */ o(
    Z.div,
    {
      className: p(
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
            className: p(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          _e,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: Oa,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Ol = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = V(null);
  W(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, Tl = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = qe();
  return Ol({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(Ee, { children: n && /* @__PURE__ */ e(
    Z.div,
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
        Z.div,
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
}, Dl = ({ action: t, onClose: n }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(dn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        _e,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, zl = ({
  enabled: t = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: l,
  actions: i,
  onShow: s,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  wl,
  {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: i,
    onShow: s,
    onHide: c,
    children: d
  }
), Pl = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: i,
    setOpen: s,
    onHide: c
  } = qe(), d = () => {
    s(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Tl, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      _e,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ce,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(zn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(un, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ e(
        Dl,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(_l, {}) })
  ] }) : null;
}, Rl = ne(
  H("AiPromotionChat", Pl)
), Bl = ne(
  H("AiPromotionChatProvider", zl)
), $n = pe({
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
}), Wt = {
  positive: mn,
  warning: Ta,
  info: fn
}, Mt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, $l = j(
  function({ title: n, onClose: a, children: r, actions: l = [], variant: i }, s) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: $n({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center gap-2",
                  Mt[i]
                ),
                children: [
                  Wt[i] && /* @__PURE__ */ e($, { icon: Wt[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    me,
                    {
                      className: Mt[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              B,
              {
                variant: "ghost",
                icon: Ce,
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
                className: p(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              B,
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
), Wl = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: $n({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(E, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(E, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(E, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(E, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(E, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(E, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Wn = j(
  (t, n) => /* @__PURE__ */ e($l, { ref: n, ...t })
), Ml = ({ compact: t, variant: n }) => /* @__PURE__ */ e(Wl, { compact: t, variant: n });
Wn.displayName = "F0Callout";
const Po = ee(
  ne(Wn),
  Ml
);
function jl({
  title: t,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e($, { icon: Da, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          me,
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
function Vl({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = za(), i = Pa(l), s = Ra(n, "PPPp", { locale: i }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(me, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            be,
            {
              firstName: t.firstName,
              lastName: t.lastName,
              src: t.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(
            me,
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
function Gl({
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
          me,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(Ge, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            jl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ e(
            Vl,
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
const Ro = ne(
  H("F0VersionHistory", Gl)
), Mn = j(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: l }, i) => {
    const s = re.useRef(null);
    re.useImperativeHandle(
      i,
      () => s.current,
      []
    );
    const c = Ba({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: p("scrollbar-macos w-full overflow-auto", r),
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
Mn.displayName = "VirtualList";
const ct = H("VirtualList", Mn), jn = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${n})`, "gi"), i = t.split(l);
  return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: i.map(
    (s, c) => s.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ e(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: s
      },
      c
    ) : s
  ) });
};
function Ye(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function Ze(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const Hl = ({
  entity: t,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: l,
  search: i,
  goToFirst: s,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = t.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(t) : a(t));
  }, x = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else w.key === "ArrowDown" ? Ye(w.currentTarget, s) : w.key === "ArrowUp" && Ze(w.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: p(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          be,
          {
            src: t.avatar,
            firstName: h,
            lastName: g,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              jn,
              {
                text: t.name,
                search: i,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          hn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: b,
            onKeyDown: x,
            className: p(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ e(
          $,
          {
            className: "text-f1-icon-selected",
            icon: mn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Pe = ({
  groupView: t,
  expanded: n,
  search: a,
  entity: r,
  selected: l,
  partialSelected: i,
  onSelect: s,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: g = !1,
  singleSelector: b = !1,
  disabled: x = !1,
  hiddenAvatar: w = !1
}) => {
  const [A, T] = _(!1);
  if (!t)
    return /* @__PURE__ */ e(
      Hl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: s,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: w
      }
    );
  const R = (k) => {
    if (k.key === " ")
      k.preventDefault(), d(!n);
    else if (k.key === "Enter" && b)
      d(!n);
    else if (k.key === "Enter") {
      if (x) return;
      !l || i ? s(r) : l && c(r);
    } else k.key === "ArrowDown" ? Ye(k.currentTarget, f) : k.key === "ArrowUp" && Ze(k.currentTarget, u);
  }, O = () => {
    if (A)
      d(!n), T(!1);
    else {
      if (x || b) return;
      l ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const L = l || i;
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        B,
        {
          hideLabel: !0,
          icon: n ? $a : Wa,
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
            T(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ e(
              $,
              {
                icon: Ma,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                jn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(He, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              hn,
              {
                checked: L,
                disabled: x,
                onClick: O,
                onKeyDown: R,
                indeterminate: i,
                onPointerDown: (k) => {
                  k.stopPropagation(), T(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: p("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Pe.displayName = "EntitySelectListItem";
const jt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? Ye(i.currentTarget, a) : i.key === "ArrowUp" && Ze(i.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: p(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        B,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: ja,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: p("line-clamp-1"), children: t }) }) })
    ]
  }
) }), Ae = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      B,
      {
        disabled: t.disabled,
        variant: t.variant,
        onClick: t.onClick,
        label: t.label,
        icon: t.icon,
        size: "sm"
      }
    );
  const a = [t, ...n ?? []], r = a.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], l = (s) => {
    const c = a.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, i = a.every((s) => s.disabled);
  return /* @__PURE__ */ e(
    Va,
    {
      items: r,
      value: t.label,
      disabled: i,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Ul = ({
  actions: t,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: l,
  anyVisibleSelected: i,
  loading: s,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = t && t.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let g, b, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !i
  } : void 0;
  return x || (x = w, w = void 0), m && u ? (g = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: x,
      secondaryActions: w ? [w] : []
    }
  ), b = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ e(Ae, { primaryAction: x, secondaryActions: [] }), w && (b = /* @__PURE__ */ e(Ae, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    b
  ] }) });
}, Kl = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: i
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e($, { icon: dl, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Ye(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Ze(c.currentTarget, i)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: t,
      onChange: (c) => n(c.target.value)
    }
  ),
  t && /* @__PURE__ */ e(
    $,
    {
      icon: Ga,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), et = 384, tt = 36, ql = 37, Vt = 1, Gt = 200, Ht = '[data-avatarname-navigator-element="true"]', Yl = ({
  groupView: t,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: l,
  onSelect: i,
  onRemove: s,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: g,
  onToggleExpand: b,
  searchPlaceholder: x,
  selectAllLabel: w,
  clearLabel: A,
  notFoundTitle: T,
  notFoundSubtitle: R,
  className: O,
  actions: L,
  onCreate: k,
  onCreateLabel: X,
  singleSelector: D = !1,
  loading: y = !1,
  disabled: S = !1,
  hiddenAvatar: N = !1
}) => {
  const I = re.useRef(null), M = K(
    () => t ? n.reduce(
      (F, q) => F + (q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), v = Q(() => {
    setTimeout(() => {
      I.current?.scrollTo({ top: 0 });
    }, Vt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Ht)
      )[0]?.focus();
    }, Gt);
  }, []), C = Q(() => {
    setTimeout(() => {
      I.current?.scrollTo({ top: I.current?.scrollHeight });
    }, Vt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(Ht)
      );
      F[F.length - 1]?.focus();
    }, Gt);
  }, []), z = K(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), G = Q(
    (F) => {
      const q = z.get(F.id);
      if (!t)
        return {
          selected: !!q,
          partialSelected: !!q
        };
      const J = (F.subItems ?? []).filter(
        (te) => q?.subItems?.some(
          (fe) => fe.subId === te.subId
        )
      ), Y = (F.subItems?.length ?? 0) === J.length, de = !Y && J.length > 0;
      return { selected: Y, partialSelected: de };
    },
    [t, z]
  ), ce = Q(
    (F) => {
      if (F.index === 0 && k)
        return /* @__PURE__ */ e(
          jt,
          {
            label: X ?? "",
            onCreate: () => k?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const q = k ? F.index - 1 : F.index, J = n[q], { selected: Y, partialSelected: de } = G(J);
      return /* @__PURE__ */ e(
        Pe,
        {
          expanded: J.expanded ?? !1,
          onExpand: () => b(J, !0),
          search: l,
          groupView: t,
          entity: J,
          onSelect: i,
          onRemove: s,
          selected: Y,
          partialSelected: de,
          showGroupIcon: Zl(a, r),
          singleSelector: D,
          goToFirst: v,
          goToLast: C,
          disabled: S,
          hiddenAvatar: N
        },
        J.id
      );
    },
    [
      k,
      X,
      S,
      n,
      G,
      v,
      C,
      t,
      a,
      N,
      s,
      i,
      b,
      l,
      r,
      D
    ]
  ), ae = K(() => t ? n.flatMap((F) => {
    const q = ze(
      h ?? [],
      F.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: F.id,
          subName: F.name,
          subAvatar: F.avatar,
          expanded: F.expanded ?? q?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((J) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? q?.expanded ?? !1
        },
        subItem: J
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
  })), [t, n, h]), P = Q(
    (F) => {
      if (F.index === 0 && k)
        return /* @__PURE__ */ e(
          jt,
          {
            label: X ?? "",
            onCreate: () => k?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const q = k ? F.index - 1 : F.index, J = ae[q].parent, Y = ae[q].subItem;
      if (!J) {
        const te = {
          id: Y.subId,
          name: Y.subName,
          avatar: Y.subAvatar,
          subItems: Y.subItems,
          expanded: Y.expanded,
          searchKeys: Y.subSearchKeys
        }, fe = ze(
          h,
          te.id
        ), he = (te?.subItems ?? []).filter(
          (Fe) => fe?.subItems?.some(
            (sa) => sa.subId === Fe.subId
          )
        ), Oe = (te.subItems?.length ?? 0) === he.length, ia = !Oe && he.length > 0;
        return /* @__PURE__ */ e(
          Pe,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Fe) => b(te, Fe),
            search: l,
            entity: te,
            onSelect: i,
            onRemove: s,
            selected: Oe,
            partialSelected: ia,
            showGroupIcon: a.find((Fe) => Fe.value === r)?.groupType === "team",
            singleSelector: D,
            goToFirst: v,
            goToLast: C,
            hideLine: q === ae.length - 1,
            disabled: S,
            hiddenAvatar: N
          }
        );
      }
      let de = !!ze(h, Y.subId);
      if (!de) {
        const te = ze(
          h,
          J.id
        );
        de = !!(J?.subItems ?? []).filter(
          (he) => te?.subItems?.some(
            (Oe) => Oe.subId === he.subId
          )
        ).find((he) => he.subId === Y.subId);
      }
      return /* @__PURE__ */ e(
        Pe,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: Y.subId,
            name: Y.subName,
            avatar: Y.subAvatar,
            searchKeys: Y.subSearchKeys
          },
          onSelect: () => {
            d(J, Y);
          },
          onRemove: () => c(J, Y),
          selected: !!de,
          partialSelected: !1,
          singleSelector: D,
          goToFirst: v,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: N
        }
      );
    },
    [
      ae,
      h,
      l,
      D,
      v,
      C,
      i,
      s,
      a,
      S,
      b,
      r,
      d,
      c,
      N,
      k,
      X
    ]
  ), [Se, Qe] = K(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, q = 0;
    if (!t)
      F = n.length, q = n.reduce(
        (de, { id: te }) => de + (z.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...z.values()].flatMap(
          (te) => te.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((te) => {
        const fe = te.subItems ?? [];
        F += fe.length, q += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const J = F > 0 && q === F, Y = q > 0;
    return [J, Y];
  }, [n, z, t]), Ie = ae.length, aa = !D && (w || A), ra = L && L.length > 0, la = !y && (!D && aa || ra);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex w-full flex-col rounded-l-xl border-0",
        D || y ? "rounded-r-xl" : "",
        O
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: p(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              D || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Kl,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                We,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
                  onChange: g,
                  options: a,
                  value: r,
                  className: p(
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
            className: p(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              la ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              y && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(dn, {}) }),
              !y && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: et
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: T }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: R })
                  ]
                }
              ),
              !y && (!!M || k) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                ct,
                {
                  height: et,
                  itemCount: Ie + (k ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && k) return tt;
                    const q = k ? F - 1 : F;
                    return ae[q]?.parent === null ? ql : tt;
                  },
                  renderer: P,
                  ref: I
                }
              ) : /* @__PURE__ */ e(
                ct,
                {
                  height: et,
                  itemCount: n.length + (k ? 1 : 0),
                  itemSize: tt,
                  renderer: ce,
                  ref: I
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Ul,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: D,
            totalFilteredEntities: M,
            allVisibleSelected: Se,
            anyVisibleSelected: Qe,
            selectAllLabel: w,
            clearLabel: A,
            disabled: S,
            actions: L
          }
        )
      ]
    }
  );
}, ze = (t, n) => t.find((a) => a.id === n), Zl = (t, n) => t.find((a) => a.value === n)?.groupType === "team", Xl = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Ha,
  {
    className: p(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      Ua,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Ka, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      $,
      {
        icon: Ce,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), Jl = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: i = !1,
  hiddenAvatar: s = !1
}) => {
  const c = K(() => {
    const f = t ? r.flatMap(
      (m) => (m.subItems ?? []).map((h) => ({
        parent: m,
        subItem: h
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
      const h = m.subItem.subId;
      return u.has(h) ? !1 : (u.add(h), !0);
    });
  }, [t, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      ct,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            Xl,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: i,
              hiddenAvatar: s,
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
}, Ql = 500, Ut = 520, Kt = 210, qt = ({
  groupView: t,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  width: i,
  singleSelector: s = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const g = (i ?? Ut) < Ql, b = !c && !s && !g, x = i ?? Ut, w = b ? x - Kt : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: s && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ e(
              Yl,
              {
                ...h,
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: s,
                loading: c,
                disabled: h.disabled,
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
              width: Kt + "px"
            },
            children: /* @__PURE__ */ e(
              Jl,
              {
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: l,
                disabled: h.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, ei = ({
  placeholder: t,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: l = !1,
  label: i,
  labelIcon: s,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: g,
  loading: b = !1,
  required: x = !1,
  readonly: w = !1,
  append: A,
  size: T = "sm",
  open: R
}) => {
  const O = K(
    () => a.some(
      (D) => D.subItems && D.subItems.length > 0
    ),
    [a]
  ), L = K(() => O ? a.flatMap(
    (D) => (D.subItems ?? []).map((y) => ({
      parent: D,
      subItem: y
    }))
  ) : a.map((D) => ({
    parent: null,
    subItem: {
      subId: D.id,
      subName: D.name,
      subAvatar: D.avatar,
      subDeactivated: D.deactivated
    }
  })), [O, a]), k = L.length === 0 ? void 0 : L.length === 1 ? L[0].subItem.subName : L.length + " " + n, X = L.length === 1 ? L[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    qa,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !k ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: g,
      clearable: !1,
      value: k,
      disabled: r,
      loading: b,
      required: x,
      readonly: w,
      size: T,
      avatar: l || !X ? void 0 : {
        type: "person",
        firstName: X,
        lastName: "",
        src: L[0].subItem.subAvatar,
        deactivated: L[0].subItem.subDeactivated
      },
      append: A ?? /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Ya, { open: R, disabled: r, size: T }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: p(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            k && "text-f1-foreground",
            L.length === 1 && !l || c && !k ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            me,
            {
              tag: "span",
              className: L.length === 1 && L[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: L.length === 0 ? t ?? "" : L.length === 1 ? L[0].subItem.subName : `${L.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Bo = (t) => {
  const [n, a] = _(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (y) => {
    a(y), t.onOpenChange?.(y);
  };
  W(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, i] = _(t.entities), [s, c] = _(""), [d, f] = Za("", 300), u = K(
    () => t.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [t.entities]
  ), m = Ke(Xa), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(y) {
    if (t.singleSelector) {
      t.onSelect(y), a(!1);
      return;
    }
    const S = t.selectedEntities ?? [], N = l.find((z) => z.id === y.id);
    if (!N)
      return;
    const I = new Set(
      (N.subItems ?? []).map((z) => z.subId)
    ), M = /* @__PURE__ */ new Set([N.id]);
    l.forEach((z) => {
      z.id !== N.id && (z.subItems ?? []).some(
        (ce) => I.has(ce.subId)
      ) && M.add(z.id);
    });
    const v = [...S];
    function C(z) {
      const G = v.findIndex((ce) => ce.id === z.id);
      G >= 0 ? v[G] = z : v.push(z);
    }
    M.forEach((z) => {
      const G = l.find((P) => P.id === z);
      if (!G) return;
      const ce = G.subItems?.filter(
        (P) => I.has(P.subId)
      ) ?? [], ae = v.findIndex((P) => P.id === z);
      if (ae >= 0) {
        const P = v[ae].subItems ?? [], Se = new Set(P.map((Ie) => Ie.subId)), Qe = [
          ...P,
          ...ce.filter((Ie) => !Se.has(Ie.subId))
        ];
        C({
          ...G,
          subItems: Qe
        });
      } else
        C({
          ...G,
          subItems: ce
        });
    }), t.onSelect(v);
  }
  function x(y, S) {
    if (t.singleSelector)
      t.onSelect({ ...y, subItems: [{ ...S }] }), a(!1);
    else {
      const N = t.selectedEntities ?? [], I = new Set(N.map((C) => C.id)), M = new Map(
        N.map((C) => [C.id, C.subItems ?? []])
      );
      I.add(y.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (G) => G.subId === S.subId
        ) && I.add(C.id);
      });
      const v = [];
      t.entities.forEach((C) => {
        if (I.has(C.id)) {
          let G = [...M.get(C.id) ?? []];
          C.subItems?.some(
            (P) => P.subId === S.subId
          ) && (G.some(
            (Se) => Se.subId === S.subId
          ) || G.push(S));
          const ae = new Set(
            (C.subItems ?? []).map((P) => P.subId)
          );
          G = G.filter(
            (P) => ae.has(P.subId)
          ), v.push({
            ...C,
            subItems: G
          });
        }
      }), t.onSelect(v);
    }
  }
  function w(y) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let S = [];
    const N = t.selectedEntities ?? [];
    if (u) {
      const I = l.find(
        (v) => v.id === y.id
      );
      if (!I)
        return;
      const M = new Set(
        (I.subItems ?? []).map((v) => v.subId)
      );
      for (const v of N) {
        const C = (v.subItems ?? []).filter(
          (z) => !M.has(z.subId)
        );
        C.length > 0 && S.push({
          ...v,
          subItems: C
        });
      }
    } else
      S = (N ?? []).filter((I) => I.id !== y.id);
    t.onSelect(S);
  }
  function A(y, S) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const N = t.selectedEntities ?? [], I = S.subId, M = [];
    for (const v of N) {
      const C = v.subItems?.filter((z) => z.subId !== I) ?? [];
      C.length > 0 && M.push({
        ...v,
        subItems: C
      });
    }
    t.onSelect(M);
  }
  function T() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const y = t.selectedEntities ?? [];
    let S = [];
    if (u) {
      const N = new Set(
        l.flatMap(
          (I) => (I.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const I of y) {
        const M = (I.subItems ?? []).filter(
          (v) => !N.has(v.subId)
        );
        M.length > 0 && S.push({
          ...I,
          subItems: M
        });
      }
    } else {
      const N = new Set(
        l.map((I) => I.id)
      );
      S = (y ?? []).filter((I) => !N.has(I.id));
    }
    t.onSelect(S);
  }
  function R() {
    const y = [...t.selectedEntities ?? []];
    l.forEach((S) => {
      const N = y.find((I) => I.id === S.id);
      if (!N)
        y.push({
          ...S,
          subItems: S.subItems || []
        });
      else {
        const I = Array.from(
          /* @__PURE__ */ new Set([
            ...N.subItems ?? [],
            ...S.subItems ?? []
          ])
        );
        N.subItems = I;
      }
    }), t.singleSelector || t.onSelect(y);
  }
  const O = (y) => {
    c(y), f(y);
  }, L = (y, S) => {
    t.onItemExpandedChange(y.id, S), i(
      l.map(
        (N) => N.id === y.id ? { ...N, expanded: !y.expanded } : N
      )
    );
  };
  W(() => {
    if (!d) {
      i(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const S = t.entities.map((N) => {
        const I = ti(N, d), M = N.subItems?.map((v) => ({
          ...v,
          score: je(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, C) => v.score - C.score);
        return {
          ...N,
          score: I,
          expanded: N.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((N) => N.score < 1 / 0).sort((N, I) => N.score - I.score);
      i(S);
    } else {
      const y = t.entities.map((S) => {
        const N = je(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: N };
      }).filter((S) => S.score < 1 / 0).sort((S, N) => S.score - N.score);
      i(y);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    i
  ]);
  const k = V(null), [X, D] = _(0);
  return Ln(() => {
    const y = () => {
      k.current && D(k.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: k,
      className: p(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        qt,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: A,
          onSubItemSelect: x,
          onClear: T,
          onSelectAll: R,
          selectedEntities: t.selectedEntities ?? [],
          search: s,
          onSearch: O,
          onToggleExpand: L,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? X - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Ja, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      Qa,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          ei,
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
      er,
      {
        container: g,
        className: p(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          qt,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: A,
            onSubItemSelect: x,
            onClear: T,
            onSelectAll: R,
            selectedEntities: t.selectedEntities ?? [],
            search: s,
            onSearch: O,
            onToggleExpand: L,
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
function dt(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Yt(t) {
  return dt(t).split(/\s+/).filter((n) => n.length > 0);
}
function je(t = "", n) {
  const a = Yt(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = dt(r), i = Yt(r), s = dt(t);
    if (l.includes(s) || a.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function ti(t, n) {
  const a = je(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, i) => {
    const s = je(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(l, s);
  }, 1 / 0)), Math.min(a, r);
}
const ni = ({
  id: t,
  createdAt: n,
  title: a,
  description: r,
  icon: l,
  category: i,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = lt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = On(n, {
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
        /* @__PURE__ */ e(it, { icon: l ?? bn }),
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
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${i} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: s && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, ai = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(E, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(E, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(E, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(E, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(E, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), kt = H(
  "ActivityItem",
  ee(ni, ai)
), Vn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), ri = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Vn, { title: t, children: n.map((l) => /* @__PURE__ */ e(
  kt,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), li = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Vn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(kt.Skeleton, {}, r)) }), Re = ee(ri, li), ii = 3, si = ["today", "yesterday", "lastWeek", "lastMonth"], oi = (t) => nr(t, ([n]) => {
  const a = si.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), ut = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ci = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const i = se(), s = Qr(t, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = tr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = oi(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(re.Fragment, { children: [
      /* @__PURE__ */ e(
        Re,
        {
          title: u in i.date.groups ? i.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ e(ut, {})
    ] }, u)),
    n && new Array(ii).fill(null).map((u, m) => /* @__PURE__ */ e(kt.Skeleton, {}, m))
  ] });
}, di = () => {
  const t = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Re.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(ut, {}),
    /* @__PURE__ */ e(
      Re.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(ut, {}),
    /* @__PURE__ */ e(
      Re.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, $o = H(
  "ActivityItemList",
  ee(ci, di)
), ui = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, fi = {
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
function mi({
  firstName: t,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: l,
  onReactionSelect: i,
  pickerRef: s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : fi[ar(
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
                be,
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
              ref: s,
              className: p(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                pn,
                {
                  lastEmojiReaction: l,
                  onSelect: i,
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
function hi(t) {
  const n = V(null), a = V(), r = Q(() => {
    const i = n.current;
    if (!i) return;
    const s = rr.create(i, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    a.current = setInterval(() => {
      s({
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
const bi = ({
  link: t,
  firstName: n,
  lastName: a,
  src: r,
  onClick: l,
  canReact: i = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = _(s), g = V(null);
  W(() => {
    h(s);
  }, [s]);
  const b = (O) => {
    h(O), c?.(O);
  }, x = Ue(), { canvasRef: w, handleMouseEnter: A, handleMouseLeave: T } = hi(x), R = pt({
    emoji: ui[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ge,
    {
      href: t,
      onClick: l,
      className: p(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        oe()
      ),
      onMouseEnter: x ? void 0 : A,
      onMouseLeave: x ? void 0 : T,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          mi,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: i,
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
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: R })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(ot, { date: u }) })
        ] })
      ]
    }
  );
}, pi = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(E, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(E, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Wo = ee(bi, pi), Mo = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(gn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(B, { label: a, variant: "outline", onClick: r }) })
] });
function gi({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [i, s] = _(a), [c, d] = _(n), f = V(null), { fireEmojiConfetti: u } = lr(), m = (b, x) => {
    b.stopPropagation(), d(c + (i ? -1 : 1)), s(!i), l?.(x), i || u(x, f);
  }, h = r?.map((b) => b.name).join(", ") || "", g = /* @__PURE__ */ e(
    xn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (b) => {
        m(b, t);
      },
      className: p(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ir(t),
      prepend: /* @__PURE__ */ e(pt, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        sr,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: p(
            "tabular-nums",
            i ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ e(xe, { label: h, children: g }) : g;
}
function xi({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      B,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(pn, { onSelect: n, locale: a }),
    t.map((l) => /* @__PURE__ */ e(
      gi,
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
const vi = H("Reactions", xi), wi = ({
  content: t,
  collapsed: n
}) => /* @__PURE__ */ e(
  or,
  {
    content: t,
    className: p(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), yi = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(E, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(E, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Gn = ee(
  wi,
  yi
), Zt = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: p(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Le,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        xe,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), ft = j(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: l,
    color: i,
    isPending: s,
    leftTags: c,
    rightTags: d,
    fromDate: f,
    toDate: u,
    noBackground: m
  }, h) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: s ? {
                backgroundImage: `repeating-linear-gradient(
              135deg,
              ${i} 0px,
              ${i} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
              } : {
                backgroundColor: i
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
                  /* @__PURE__ */ e(ot, { date: f }),
                  /* @__PURE__ */ e(
                    $,
                    {
                      icon: sn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(ot, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(Zt, { tags: c }),
              d && /* @__PURE__ */ e(Zt, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ni = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Hn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && Ni.has(a);
}, Ci = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = el(r);
  const i = (s) => {
    s.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Hn(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
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
      /* @__PURE__ */ e(E, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      ft,
      {
        title: t,
        description: l,
        color: cr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, ki = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(E, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(E, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(E, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(E, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Un = ee(Ci, ki), Si = ({
  id: t,
  author: n,
  group: a,
  createdAt: r,
  title: l,
  description: i,
  onClick: s,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: g,
  dropdownItems: b,
  noReactionsButton: x = !1
}) => {
  const w = [f.views, f.comments].filter(Boolean).join(" · "), A = !0, T = On(r), R = () => {
    s(t);
  }, O = (k) => {
    k.stopPropagation();
  }, L = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: R,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          De,
          {
            href: n.url || "#",
            title: L,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              be,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(it, { icon: At }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(
                    De,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: L,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        be,
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
                    De,
                    {
                      href: n.url,
                      title: L,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: L
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(it, { icon: At, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: p(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  De,
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
                    B,
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
                    Ne,
                    {
                      items: b,
                      icon: st,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ne,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...b ?? []
                    ],
                    icon: st,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: T }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  className: p(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              i && /* @__PURE__ */ e(Gn, { content: i, collapsed: A })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Hn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: O,
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
            /* @__PURE__ */ e(E, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(Un, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: w }),
          !x && /* @__PURE__ */ e(
            vi,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: dr
              }
            }
          )
        ] })
      ]
    }
  );
}, Ii = ({
  withEvent: t,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(E, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(E, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(E, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(E, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(E, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(Gn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(E, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(Un.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(E, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(E, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), jo = ee(
  Si,
  Ii
), Kn = re.forwardRef(({ person: t, onClick: n, ...a }, r) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: p(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ e(
          be,
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
            a.info && /* @__PURE__ */ e(xe, { label: a.info, children: /* @__PURE__ */ e(
              $,
              {
                icon: fn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, s) => /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(Le, { ...i }, i.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(ur, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              B,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
              B,
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
}), Fi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(E, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(E, { className: "h-4" }),
    /* @__PURE__ */ e(E, { className: "h-4" })
  ] })
] });
Kn.displayName = "OnePersonListItem";
const Vo = ne(
  H(
    "OnePersonListItem",
    ee(Kn, Fi)
  )
), Ai = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Li({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(pl, { children: /* @__PURE__ */ e(
    Ei,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function Ei({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const i = r?.enabled ? fr : l?.enabled ? Bl : Yr, s = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(i, { ...s, children: /* @__PURE__ */ e(
    Di,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const Go = H(
  "ApplicationFrame",
  Li
), _i = ({ contentId: t }) => {
  const n = se();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: oe(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Oi(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Ti(t, n) {
  const { sidebarState: a, toggleSidebar: r } = ke(), l = V(t);
  W(() => {
    n && Oi(
      t,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, n, a, r]);
}
function Di({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = ke(), f = Ue(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: g,
    resizable: b
  } = mr(), x = m === "fullscreen", w = m === "canvas", { open: A } = qe(), T = b ? g : br, R = V(x), O = x && !R.current, L = !x && R.current, [
    k,
    X
  ] = _(!1);
  W(() => {
    !x && R.current && X(!0), R.current = x;
  }, [x]);
  const D = x || k || L, y = K(() => O ? { duration: 0.15, ease: "easeOut" } : L ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [O, L]), S = rt(
    `(max-width: ${Be.xl}px)`,
    { initializeWithValue: !0 }
  ), N = rt(`(max-width: ${Be.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(A);
  }, [A, d]), Ti(u, S), /* @__PURE__ */ e(
    hr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(vn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(Ee, { children: i === "unlocked" && /* @__PURE__ */ e(
            Z.nav,
            {
              className: p(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !c && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: f ? 0 : 0.2 },
              onClick: () => s()
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                i !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                i === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (I) => {
                i === "hidden" ? I?.setAttribute("inert", "") : I?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(_i, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Z.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N ? T : 0
              },
              transition: { paddingRight: Ai },
              children: [
                /* @__PURE__ */ e(
                  Z.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: p(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      D ? "overflow-hidden" : "overflow-auto",
                      !u && !A && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ e(
                      Z.div,
                      {
                        className: p(
                          "flex max-w-full flex-1",
                          D ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && w && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      "pointer-events-none",
                      N ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[15]"
                    ),
                    style: N ? void 0 : { right: T },
                    children: /* @__PURE__ */ e(pr, {})
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  Z.div,
                  {
                    className: p(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      N ? "fixed inset-0 z-[30]" : p(
                        "absolute right-0 top-0 bottom-0",
                        D ? "z-20" : "z-0",
                        i === "hidden" && D ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || x ? "100%" : T
                    },
                    transition: y,
                    onAnimationComplete: () => {
                      k && X(!1);
                    },
                    children: /* @__PURE__ */ e(gr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(Rl, {})
        ] }) })
      ] })
    }
  );
}
const zi = pe({
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
function qn({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: i, isSmallScreen: s } = ke();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: zi({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (s || l === "hidden") && /* @__PURE__ */ e(
              B,
              {
                variant: "ghost",
                onClick: () => i(),
                label: "Open main menu",
                icon: on,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center",
                  s ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    tl,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    be,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: s ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e(
                      "p",
                      {
                        className: p(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
                      "p",
                      {
                        className: p(
                          s ? "text-md" : "text-lg",
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
            /* @__PURE__ */ e(cn, {}),
            /* @__PURE__ */ e(Rn, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              s && "-mt-3"
            ),
            children: t
          }
        )
      ]
    }
  );
}
qn.displayName = "DaytimePage";
const Ho = ne(
  H("DaytimePage", qn)
);
function Pi(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Ri({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ne, { items: Pi(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: p(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            oe()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e($, { icon: wn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Uo = ne(
  H("OmniButton", Ri)
);
function Yn({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        n && /* @__PURE__ */ e("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ e("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: t })
      ]
    }
  );
}
Yn.displayName = "Page";
const Ko = ne(H("Page", Yn));
function Bi({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: i = []
}) {
  const s = K(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(E, { className: "size-6" }),
    /* @__PURE__ */ e(E, { className: "h-3 w-14" })
  ] }) : t.length + (i?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    Xt,
    {
      company: s,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    $i,
    {
      companies: t,
      selected: s,
      onChange: a,
      additionalOptions: i,
      children: /* @__PURE__ */ e(
        Xt,
        {
          company: s,
          withNotification: l
        }
      )
    }
  ) });
}
const $i = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const i = se(), [s, c] = _(!1), d = K(
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
    const m = l?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ e(
    We,
    {
      label: i.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: i.navigation.sidebar.companySelector.placeholder,
      open: s,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: p(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            oe()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              Z.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e($, { icon: bt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Xt = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: p(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        xr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: yn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(me, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function qo({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: i,
  hasActivityUpdates: s
}) {
  const c = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ne, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: p(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          oe("focus-visible:ring-inset")
        ),
        onClick: i,
        children: [
          /* @__PURE__ */ e(
            be,
            {
              src: t.avatarUrl,
              firstName: t.firstName,
              lastName: t.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(me, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ e(xe, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        B,
        {
          icon: bn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(vr, { type: "highlight", size: "sm", icon: yn }) })
    ] }) })
  ] });
}
function Wi({ isExpanded: t }) {
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
            className: p(
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
            className: p(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Mi() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = ke(), l = V(null);
  return W(() => {
    t === "hidden" && n === "locked" && l.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    xn,
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
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: !r }), children: /* @__PURE__ */ e(Wi, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: r }), children: /* @__PURE__ */ e($, { icon: Ce, size: "md" }) })
      ]
    }
  );
}
function Yo({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Bi,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Mi, {})
  ] });
}
function ji() {
  const [t, n] = _(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Zn = yt(void 0);
function Vi({ children: t }) {
  const [n, a] = _(!1), [r, l] = _(null);
  return /* @__PURE__ */ e(
    Zn.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function St() {
  const t = Ke(Zn);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const Gi = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      $,
      {
        icon: t.icon,
        size: "md",
        className: p(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(He, { value: t.badge, size: "sm", type: "bold" })
] }), Hi = ({ item: t }) => {
  const { isActive: n } = ht(), { label: a, icon: r, ...l } = t, i = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    ge,
    {
      ...l,
      className: p(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        oe("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(Gi, { item: t, active: i })
    }
  );
}, Ui = ({
  item: t,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: l,
  total: i,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = se(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = St(), { isActive: b } = ht(), x = b(t.href, { exact: t.exactMatch }), w = V(!1), [A, T] = _(!1), R = l === 0, O = l === i - 1, L = i === 1, k = K(() => {
    const I = [];
    return !L && !R && I.push({
      label: f.actions.moveUp,
      onClick: () => s?.(l, l - 1),
      icon: wr
    }), !L && !O && I.push({
      label: f.actions.moveDown,
      onClick: () => s?.(l, l + 1),
      icon: yr
    }), I.length > 0 && I.push({ type: "separator" }), I.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Nr,
      critical: !0
    }), I;
  }, [L, R, O, f, s, l, r, t]), X = () => {
    m(!0), T(!1), g(t.href || null), w.current = !0;
  }, D = () => {
    m(!1), g(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, y = u && h === t.href, S = K(
    () => p(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      A && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [x, A, y, d]
  ), N = K(() => /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(qi, { tooltip: n, children: /* @__PURE__ */ o(
      ge,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: p(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          y && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            $,
            {
              icon: t.icon,
              size: "md",
              className: p(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Cr, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            me,
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
        className: p(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          A && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ne,
          {
            open: A,
            onOpenChange: T,
            items: k,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e($, { icon: st, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, x, A, y, k, n]);
  return d ? /* @__PURE__ */ e(
    Nn,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: X,
      onDragEnd: D,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: N
    }
  ) : /* @__PURE__ */ e("div", { className: S, children: N });
}, Xn = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: i,
  wasDragging: s
}) => {
  const [c, d] = _(n), f = Ue(), u = () => {
    if (i || s?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(Sr, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          oe("focus-visible:ring-inset"),
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
            Z.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                $,
                {
                  icon: bt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(Ir, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      Z.div,
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
}, nt = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: i
}) => {
  const { isDragging: s, setIsDragging: c } = St(), d = V(!1), f = kr(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, i && l?.(i);
    }, 0);
  }, h = (b) => {
    !s && !d.current && r?.(t, b);
  }, g = /* @__PURE__ */ e(
    Xn,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: h,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: p(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: t.items.map((b, x) => /* @__PURE__ */ e(Hi, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    Nn,
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
function Zo({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const i = V(null), s = t.filter(
    (b) => b.isSortable === !1
  ), [c, d] = _(
    t.filter((b) => b.isSortable !== !1)
  ), [f, u] = _(0), m = Q((b) => {
    d(b);
  }, []), h = Q(
    (b) => {
      a?.(b);
    },
    [a]
  ), g = ji();
  return /* @__PURE__ */ e(Vi, { children: /* @__PURE__ */ e(vn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Ki,
    {
      disableDragging: g,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function Ki({
  nonSortableItems: t,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: l,
  onDragEnd: i,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = se(), { isDragging: m } = St(), h = t.some((v) => v.isRoot), g = t.filter((v) => !v.isRoot).length > 0, b = n.length > 0, x = V(null), [w, A] = _(s), T = s.length > 0;
  W(() => {
    JSON.stringify(s) !== JSON.stringify(w) && A(s);
  }, [s]);
  const R = (v) => {
    A(v);
  }, O = Q(
    (v) => {
      const C = w.filter((z) => z.href !== v.href);
      A(C), c?.(C);
    },
    [w, c]
  ), L = Q(
    (v, C) => {
      if (C < 0 || C >= w.length) return;
      const z = [...w], [G] = z.splice(v, 1);
      z.splice(C, 0, G), A(z), c?.(z);
    },
    [w, c]
  ), [k, X] = _(!1), D = V(null);
  W(() => {
    n.length > 0 && !k && (a([...n]), X(!0));
  }, [n, a, k]), W(() => {
    const v = () => {
      D.current !== null && window.clearTimeout(D.current), D.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), D.current !== null && window.clearTimeout(D.current);
    };
  }, [r, n, d]);
  const y = "flex flex-col gap-0.5", S = K(
    () => w.reduce(
      (v, C, z) => (C.label in v || (v[C.label] = []), v[C.label].push(z), v),
      {}
    ),
    [w]
  ), N = K(
    () => T && w.map((v, C) => /* @__PURE__ */ e(
      Ui,
      {
        isSortable: !f,
        tooltip: (S[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: O,
        index: C,
        total: w.length,
        onMove: L,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      T,
      w,
      S,
      O,
      L,
      c,
      f
    ]
  ), I = "flex flex-col gap-3", M = K(() => n.map((v) => /* @__PURE__ */ e(
    nt,
    {
      category: v,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: i,
      currentOrder: n
    },
    v.id
  )), [n, f, r, l, i]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => v.isRoot).map((v, C) => /* @__PURE__ */ e(
          nt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        T && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(Xn, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: x, children: f ? /* @__PURE__ */ e("div", { className: y, children: N }) : /* @__PURE__ */ e(
          Lt,
          {
            axis: "y",
            values: w,
            onReorder: R,
            className: y,
            children: N
          }
        ) }) }) }),
        g && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => !v.isRoot).map((v, C) => /* @__PURE__ */ e(
          nt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        b && /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: I, children: M }) : /* @__PURE__ */ e(
              Lt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: I,
                children: M
              }
            )
          }
        )
      ]
    }
  );
}
const qi = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(xe, { description: t, children: n }) : n;
function Xo({
  onClick: t,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: p(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        oe()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e($, { icon: Fr, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Ar, { keys: a }) })
      ]
    }
  ) });
}
const Jt = ({ position: t }) => /* @__PURE__ */ e(
  Z.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: p(
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
function Yi({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: i } = ke(), s = Ue(), [c, d] = lt({ threshold: 1 }), [f, u] = lt({ threshold: 1 }), m = se(), h = {
    x: {
      ease: l !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : l !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, g = () => a ? Zr(a) && r ? En(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    Z.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: p(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : p(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          i ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: l === "locked" || i ? 0 : "8px",
        borderRadius: l === "locked" || i ? "0" : "12px",
        left: l === "locked" ? "0" : i ? 0 : "8px",
        x: l === "hidden" ? -260 : 0,
        opacity: l === "hidden" ? i ? 0.7 : 0 : 1,
        pointerEvents: l === "hidden" ? "none" : "auto"
      },
      transition: h,
      children: [
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ge, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Ee, { children: [
            !d && /* @__PURE__ */ e(Jt, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(Jt, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const Jo = ne(Yi), Zi = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Qt = {
  approved: {
    icon: un,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ce,
    type: "critical",
    size: "sm"
  }
}, Xi = {
  icon: wn,
  type: "neutral",
  size: "sm"
}, Ji = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Qi = (t) => t in Qt ? Qt[t] : Xi;
function en(t) {
  return Ji[t ?? "neutral"] ?? 0;
}
const es = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = se(), i = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = l.approvals.statuses[a], c = K(() => r.map((d) => {
    const f = Qi(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => en(f.badge?.type) - en(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ e($e, { text: s, variant: Zi[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(Cn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, ts = ({ steps: t }) => {
  const a = se().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, i) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: i + 1 })
          }
        ),
        i !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: t.map((l, i) => /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ e(
          es,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        i !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Qo = ne(
  H("OneApprovalHistory", ts)
), It = {
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
}, ns = pe({
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
      ...It
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), as = re.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...i }, s) {
  return /* @__PURE__ */ e("div", { className: p("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ e(
    "div",
    {
      className: p(ns({ gap: a, tileSize: l }), n),
      ref: s,
      ...i,
      children: r
    }
  ) });
}), rs = pe({
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
}), Jn = j(function({
  className: n,
  grow: a,
  basis: r,
  shrink: l,
  paddingX: i,
  paddingY: s,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: g,
  ...b
}, x) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        rs({
          paddingX: i,
          basis: r,
          paddingY: s,
          grow: a,
          shrink: l,
          inline: c,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: h,
          width: g
        }),
        n
      ),
      ref: x,
      ...b
    }
  );
}), ls = pe({
  base: "flex-row",
  variants: {
    gap: {
      ...It
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), is = re.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, i) {
  return /* @__PURE__ */ e(
    Jn,
    {
      className: p(ls({ gap: a, wrap: r }), n),
      ref: i,
      ...l
    }
  );
}), ss = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...It
    }
  },
  defaultVariants: {}
}), os = j(function({ className: n, gap: a, children: r, ...l }, i) {
  return /* @__PURE__ */ e(
    Jn,
    {
      className: p(ss({ gap: a }), n),
      ref: i,
      ...l,
      children: r
    }
  );
}), ec = ue(
  {
    name: "Stack",
    type: "layout"
  },
  os
), tc = ue(
  {
    name: "Split",
    type: "layout"
  },
  is
), nc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  as
), cs = ({ children: t }) => {
  const { enabled: n } = kn();
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        Z.div,
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
}, ds = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), us = j(function({ header: n, children: a, action: r, summaries: l, alert: i, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = kn();
  W(() => {
    if (i && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, s]);
  const m = (g) => !!g && !(re.isValidElement(g) && g.type === re.Fragment && re.Children.count(g.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    gt,
    {
      className: p(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(xt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(vt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(ds, {}),
                /* @__PURE__ */ e(Sn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(xe, { label: n.info, children: /* @__PURE__ */ e(
                $,
                {
                  icon: In,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(He, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ e(Fn, { text: i, level: "critical" }),
              s && /* @__PURE__ */ e($e, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ e(
                Lr,
                {
                  onClick: h,
                  href: n.link.url,
                  title: n.link.title,
                  icon: n.link.icon
                }
              )
            ] })
          ] }),
          n.comment && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(cs, { children: /* @__PURE__ */ e(Er, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              B,
              {
                icon: f ? _r : Or,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(wt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((g, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, b)) }),
          re.Children.toArray(a).filter(m).map((g, b) => /* @__PURE__ */ o(re.Fragment, { children: [
            b > 0 && /* @__PURE__ */ e(Tr, { bare: !0 }),
            g
          ] }, b))
        ] }),
        r && /* @__PURE__ */ e(Dr, { children: /* @__PURE__ */ e(B, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), fs = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), ms = j(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      gt,
      {
        className: p(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(xt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(vt, { children: n.title }) : /* @__PURE__ */ e(E, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(Sn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            wt,
            {
              "aria-hidden": !0,
              className: p(a !== "full" && fs({ height: a })),
              children: [...Array(4)].map((l, i) => /* @__PURE__ */ e(
                E,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`
                },
                i
              ))
            }
          )
        ]
      }
    );
  }
), ye = ne(
  H("Widget", ee(us, ms))
), ie = Object.assign(
  j(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ e(ye, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ye.Skeleton
  }
), hs = ee(
  j(function({ canBeBlurred: n, ...a }, r) {
    const l = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, i = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      ie,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(nl, { ...i, canBeBlurred: n })
      }
    );
  }),
  ie.Skeleton
), bs = H(
  "AreaChartWidget",
  hs
), ps = j(function(n, a) {
  return /* @__PURE__ */ e(
    ie,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(al, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), gs = H(
  "BarChartWidget",
  ee(ps, ie.Skeleton)
), xs = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(rl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), vs = H(
  "LineChartWidget",
  xs
), ws = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(ll, { ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), ys = H(
  "PieChartWidget",
  ws
), Ns = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(ie, { ref: a, ...n, chart: null });
    }
  ),
  ie.Skeleton
), Cs = H(
  "SummariesWidget",
  Ns
), ks = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(il, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), Ss = H(
  "VerticalBarChartWidget",
  ks
), ac = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  bs
), rc = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  gs
), lc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  vs
), ic = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  ys
), sc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Ss
), oc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Cs
), Is = (t, n) => /* @__PURE__ */ o(
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
), Fs = j(Is), As = (t, n) => /* @__PURE__ */ o(
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
), Ls = j(As), Es = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, _s = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Os = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ts = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Ds = j(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: i, type: s }, c) {
    const d = Es[s], f = _s[s], u = Os[s], m = Ts[s];
    return /* @__PURE__ */ o(
      gt,
      {
        className: p(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(xt, { className: "-mt-0.5", children: /* @__PURE__ */ e(vt, { children: n }) }),
          /* @__PURE__ */ o(wt, { className: p("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Fs, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ e(Ls, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                B,
                {
                  label: r,
                  icon: l,
                  variant: m,
                  onClick: i
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
), cc = ne(
  H("ChartWidgetEmptyState", Ds)
);
function zs(t, n) {
  const a = V(null), r = V(null), [l, i] = _({
    visibleItems: [],
    overflowItems: []
  });
  zr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const s = Q(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = Q(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const g = u[h].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = Q(
    (u, m) => {
      let h = 0, g = 0;
      for (let b = 0; b < u.length; b++) {
        const x = g + u[b];
        if (x > m + 30) break;
        g = x, g = s(
          g,
          b,
          u.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = Q(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    i(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (g) => g.visibleItems.length === h && g.overflowItems.length === t.length - h ? g : {
      visibleItems: t.slice(0, h),
      overflowItems: t.slice(h)
    });
  }, [t, c, d]);
  return W(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const Xe = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: i,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = zs(n, l);
  return W(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: p("relative flex h-full flex-col", r),
      style: {
        minHeight: `${i}px`
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
Xe.displayName = "VerticalOverflowList";
const dc = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(ft, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  Xe,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(ft, { ...l }, l.title)
  }
) : null, Ps = ({ onClick: t, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: p(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ e("div", { className: a, tabIndex: 1, children: n });
};
function uc({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(Ps, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ e($, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const Rs = j(
  function({ content: n, label: a, color: r, ...l }, i) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: i, children: [
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
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e($, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e(pt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), fc = j(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: i, ...s }) => /* @__PURE__ */ e(
          Rs,
          {
            label: r,
            content: l,
            color: i,
            ...s
          },
          `${r}-${l}`
        ))
      }
    );
  }
), Bs = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = p(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function mc({
  id: t,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: l,
  withPointerCursor: i = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    Bs,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: i,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(Pr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(Rr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          Cn,
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
const $s = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function tn({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const i = p(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o($s, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: i, children: [
    /* @__PURE__ */ e(gn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const Ws = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function mt({
  id: t,
  title: n,
  alert: a,
  rawTag: r,
  count: l,
  icon: i,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = p(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Ws, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ e(
        $,
        {
          icon: i,
          size: "md",
          className: p("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ e(
        $,
        {
          icon: s,
          size: "md",
          className: p("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(Fn, { ...a }),
      r && /* @__PURE__ */ e(Le, { ...r }),
      !!l && /* @__PURE__ */ e(He, { value: l })
    ] })
  ] });
}
function hc({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((i) => /* @__PURE__ */ e(tn, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ e(tn, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function bc({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((i) => /* @__PURE__ */ e(mt, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ e(mt, { ...i, onClick: r }),
      minSize: a
    }
  );
}
const Ms = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), pc = j(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, i) {
    return /* @__PURE__ */ o("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            xe,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e($, { icon: In, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      l.map((s) => /* @__PURE__ */ e(Ms, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function gc({
  title: t,
  subtitle: n,
  data: a,
  helpText: r,
  legend: l = !1,
  hideTooltip: i = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      sl,
      {
        data: a,
        legend: l,
        hideTooltip: i
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: p(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const Qn = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, js = ({
  data: t = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const s = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!l || r === void 0) return;
    const u = Qn(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), b = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = ve[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, at = "--:--", Vs = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: ve.empty
    };
  if (!n)
    return {
      value: 1,
      color: ve.empty
    };
}, Gs = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = Qn(
    n,
    a
  ), i = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, s = r || (l ?? 0) < 0 ? void 0 : Vs(
    l ?? 0,
    i
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - g) / i;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / i + x,
            color: ve.overtime
          }
        ] : [
          ...u,
          {
            value: g / i,
            color: ve.overtime
          },
          {
            value: x,
            color: ve[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: ve.empty
  }), f;
}, Hs = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, l = t.at(-1), i = r ? Tt(r) : at, s = n === void 0 || n > 0 ? at : l ? Tt(l.to) : at, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: i,
    secondaryLabel: s,
    time: m
  };
}, ve = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Us({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Gs({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: i, time: s } = Hs({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(ol, { width: 156, height: 156, children: /* @__PURE__ */ e(
      cl,
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
          Br,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: s }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: i })
    ] })
  ] });
}
function Ks({
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
        a && /* @__PURE__ */ e($, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ e(
          "span",
          {
            className: p(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? n
          }
        ),
        /* @__PURE__ */ e($, { icon: $r })
      ]
    }
  );
}
function xc({
  trackedMinutes: t,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: l,
  locations: i,
  canShowLocation: s = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: g = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: A = !0,
  projectSelectorElement: T,
  breakTypeName: R
}) {
  const { status: O, statusText: L, subtitle: k, statusColor: X } = js({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), D = O === "clocked-out", y = m?.map((P) => ({
    value: P.id,
    label: P.duration ? `${P.name} · ${P.duration}` : P.name,
    description: P.description,
    tag: P.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, N] = _(!1), I = () => {
    if (y.length > 1)
      S || N(!0);
    else {
      const P = y?.[0]?.value;
      u?.(P);
    }
  }, M = (P) => {
    h?.(P), N(!1), u?.(P);
  }, v = D && i.length && !c && s, C = i.find((P) => P.id === l), z = i.map((P) => ({
    value: P.id,
    label: P.name,
    icon: P.icon
  })), G = O === "break", [ce, ae] = _(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: L }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                Z.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: X
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
                    backgroundColor: X
                  }
                }
              )
            ] })
          ] }),
          k && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: k })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          O === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            B,
            {
              onClick: d,
              label: r.clockIn,
              icon: Et
            }
          ) }),
          O === "clocked-in" && /* @__PURE__ */ o(U, { children: [
            g && /* @__PURE__ */ e(U, { children: y.length > 1 && h ? /* @__PURE__ */ e(
              We,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: M,
                open: S,
                onOpenChange: N,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  B,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: _t,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              B,
              {
                onClick: I,
                label: r.break,
                variant: "neutral",
                icon: _t,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              B,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ot
              }
            )
          ] }),
          O === "break" && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              B,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ot,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              B,
              {
                onClick: d,
                label: r.resume,
                icon: Et
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ e(
        Us,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        We,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: z,
          onChange: w,
          open: ce,
          onOpenChange: ae,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Ks,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      A && T
    ] }) : /* @__PURE__ */ o(U, { children: [
      s && C && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Le, { text: C.name, icon: C.icon }) }),
      A && T,
      G && R && /* @__PURE__ */ e(Le, { text: R })
    ] }) })
  ] }) });
}
const qs = {
  done: jr,
  "in-progress": Mr,
  todo: Wr
}, Ys = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Zs({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(t);
  }, i = K(() => {
    if (!r)
      return qs[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    mt,
    {
      id: t.id,
      title: t.text,
      icon: i,
      iconClassName: Ys[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: Vr
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function vc({
  tasks: t,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: l = "No tasks assigned"
}) {
  const s = [
    { key: "done", status: "done" },
    { key: "inProgress", status: "in-progress" },
    { key: "todo", status: "todo" }
  ].flatMap(
    ({ key: d, status: f }) => (t[d] || []).map(
      (u) => typeof u == "string" ? {
        id: u,
        text: u
      } : u
    ).map(({ id: u, text: m, badge: h, counter: g }) => ({
      id: u,
      text: m,
      badge: h,
      counter: g,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : s.slice(0, r).map((d) => /* @__PURE__ */ e(
    Zs,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Xs = Object.defineProperty, Js = Object.defineProperties, Qs = Object.getOwnPropertyDescriptors, Ve = Object.getOwnPropertySymbols, ea = Object.prototype.hasOwnProperty, ta = Object.prototype.propertyIsEnumerable, nn = (t, n, a) => n in t ? Xs(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, le = (t, n) => {
  for (var a in n || (n = {})) ea.call(n, a) && nn(t, a, n[a]);
  if (Ve) for (var a of Ve(n)) ta.call(n, a) && nn(t, a, n[a]);
  return t;
}, Je = (t, n) => Js(t, Qs(n)), eo = (t, n) => {
  var a = {};
  for (var r in t) ea.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && Ve) for (var r of Ve(t)) n.indexOf(r) < 0 && ta.call(t, r) && (a[r] = t[r]);
  return a;
}, to = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, no = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), ao = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = le({}, n);
    return r.right = t.left, r;
  }
  return null;
}, ro = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = le({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, lo = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let l = le({}, r);
  return l.left = n.left + t.width, to(l) || no({ usedSpot: l, spotsList: a }) ? null : l;
}, io = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((l, i, s) => {
  if (l === a) return lo({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = ao({ position: n, spot: l, stone: r });
  return c || ro({ position: n, stone: r, spot: l }) || l;
});
function so(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (t(l)) return l;
  }
  return null;
}
var oo = (t, n) => n.filter(t), co = (t, n) => [...n].sort(t), uo = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, fo = (t) => co(uo, t), mo = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
  let l = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let i = 0, s = t.length; i < s; i += 1) {
    let c = t[i];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, ho = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, bo = ({ availableSpots: t, stone: n }) => so((a) => ho(a, n), t);
function po({ stone: t, availableSpots: n, containerSize: a }) {
  let r = bo({ availableSpots: n, stone: t }), l = { left: r.left, top: r.top }, i = mo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), s = [...n, i], c = io({ spots: s, position: l, optimalSpot: r, stone: t });
  return s = [...oo(Boolean, c)], s = fo(s), { position: l, availableSpots: s };
}
var go = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, l = [], i = [{ top: 0, left: 0, right: n }];
  for (let s of t) {
    let c = po({ availableSpots: i, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), l.push(c.position), i = c.availableSpots;
  }
  return { availableSpots: i, positions: l, containerHeight: r };
}, xo = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), vo = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: i, containerHeight: s, stones: c, availableSpots: d }, f] = _({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let h = xo(t.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let b = go({ stones: h, containerSize: g });
    f(Je(le({}, b), { stones: h }));
  }, [a, t, n, r, l]), { positions: i, containerHeight: s, stones: c, availableSpots: d };
}, wo = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), yo = ({ transition: t, transitionDuration: n }) => t ? { transition: wo(n)[t] } : null, No = (t) => t ? Je(le({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Co = ({ style: t, position: n, transition: a, transitionDuration: r }) => le(le(Je(le({}, t), { position: "absolute" }), No(n)), yo({ transition: a, transitionDuration: r }));
function ko(t, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, n);
  };
}
var So = () => {
  let [t, n] = _(), a = V(ko(n, 300));
  return W(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, Io = (t) => {
  let [n, a] = _(null);
  return W(() => {
    let r = new ResizeObserver((l) => {
      for (let i of l) a(i.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Fo = (t) => {
  var n = t, { children: a, style: r, transition: l = !1, transitionDuration: i = 500, transitionStep: s = 50 } = n, c = eo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = V([]), f = V(null), u = So(), m = Io(f), { positions: h, containerHeight: g } = vo({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = le({ minHeight: g ?? 0, position: "relative" }, r);
  return e("div", Je(le({ ref: f, style: b }, c), { children: _n.map(a, (x, w) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let A = { style: Co({ style: x.props.style, position: h[w], transition: l, transitionDuration: i }), ref: (T) => d.current[w] = T };
    return En(x, le(le({}, x.props), A));
  }) }));
};
const Ao = { sm: 340, md: 480, lg: 640 }, an = j(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Ao[a], [i, s] = _(), c = _n.toArray(n), d = V(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: i === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Fo, { children: c.map((f, u) => /* @__PURE__ */ e(
      "div",
      {
        style: {
          width: `${Math.floor(1 / i * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: f
      },
      u
    )) }, i) }) }) });
  }
), Lo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], wc = ee(an, () => /* @__PURE__ */ e(An, { children: /* @__PURE__ */ e(an, { children: Lo.map((t, n) => /* @__PURE__ */ e(ye.Skeleton, { height: t }, n)) }) })), rn = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), yc = ee(
  j(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ge, { ref: a, showBar: !1, children: /* @__PURE__ */ e(rn, { children: n }) });
  }),
  () => /* @__PURE__ */ e(An, { orientation: "horizontal", children: /* @__PURE__ */ o(rn, { children: [
    /* @__PURE__ */ e(ye.Skeleton, {}),
    /* @__PURE__ */ e(ye.Skeleton, {}),
    /* @__PURE__ */ e(ye.Skeleton, {})
  ] }) })
);
function Eo({
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
    Gr,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Nc = ne(
  H("WidgetEmptyState", Eo)
), na = j(
  ({ title: t, children: n }, a) => (Hr(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
na.displayName = "WidgetSection";
const Cc = ne(
  H("WidgetSection", na)
), kc = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Ur(), i = window.location.pathname, s = K(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), c = K(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return s ? r : (l && console.error(c), null);
}, Sc = ne(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ge
  )
);
export {
  $o as ActivityItemList,
  di as ActivityItemListSkeleton,
  Rl as AiPromotionChat,
  Bl as AiPromotionChatProvider,
  Go as ApplicationFrame,
  wd as AreaChart,
  ac as AreaChartWidget,
  nc as AutoGrid,
  vr as Badge,
  yd as BarChart,
  rc as BarChartWidget,
  ci as BaseActivityItemList,
  Nd as BaseBanner,
  bi as BaseCelebration,
  Si as BaseCommunityPost,
  Ac as BaseTabs,
  Lc as BreadcrumbSelect,
  bl as Breadcrumbs,
  ft as CalendarEvent,
  dc as CalendarEventList,
  Ec as CardSelectableContainer,
  Xr as Carousel,
  Cd as CategoryBarChart,
  gc as CategoryBarSection,
  Wo as Celebration,
  pi as CelebrationSkeleton,
  cc as ChartWidgetEmptyState,
  _c as Chip,
  xc as ClockInControls,
  kd as ComboChart,
  jo as CommunityPost,
  Ii as CommunityPostSkeleton,
  Bi as CompanySelector,
  He as Counter,
  wc as Dashboard,
  Ho as DaytimePage,
  Oc as DetailsItem,
  Tc as DetailsItemsList,
  Sd as Dialog,
  Ne as Dropdown,
  Bo as EntitySelect,
  Dc as F0ActionBar,
  Id as F0AiBanner,
  gn as F0AvatarModule,
  Po as F0Callout,
  zc as F0TableOfContent,
  Ro as F0VersionHistory,
  Pc as F1SearchBox,
  Rc as FILE_TYPES,
  Bc as FileItem,
  Mo as HighlightBanner,
  fc as IndicatorsList,
  $c as Input,
  Wc as Item,
  Mc as ItemSectionHeader,
  Fd as LineChart,
  lc as LineChartWidget,
  Zo as Menu,
  jc as MobileDropdown,
  Ad as NotesTextEditor,
  Ld as NotesTextEditorPatchTargetNotFoundError,
  Ed as NotesTextEditorSkeleton,
  _d as NotesTextEditorUnsupportedPatchTypeError,
  Vc as NumberInput,
  Uo as OmniButton,
  Qo as OneApprovalHistory,
  Gc as OneCalendar,
  Hc as OneCalendarInternal,
  Uc as OneDataCollection,
  Kc as OneDateNavigator,
  Gr as OneEmptyState,
  qc as OnePagination,
  Vo as OnePersonListItem,
  kc as OneRestrictComponent,
  Ko as Page,
  zo as PageHeader,
  Od as PieChart,
  ic as PieChartWidget,
  cs as PrivateBox,
  Td as ProgressBarChart,
  Dd as RadarChart,
  vi as Reactions,
  zd as ResourceHeader,
  or as RichTextDisplay,
  Yc as RichTextEditor,
  Sc as ScrollArea,
  Xo as SearchBar,
  Zc as SectionHeader,
  We as Select,
  Ar as Shortcut,
  Jo as Sidebar,
  qo as SidebarFooter,
  Yo as SidebarHeader,
  dn as Spinner,
  tc as Split,
  ec as Stack,
  oc as SummariesWidget,
  Xc as Switch,
  Jc as Tabs,
  Qc as TabsSkeleton,
  vc as TasksList,
  ed as Textarea,
  td as ToggleGroup,
  nd as ToggleGroupItem,
  xe as Tooltip,
  pc as TwoColumnsList,
  Pd as VerticalBarChart,
  sc as VerticalBarChartWidget,
  ct as VirtualList,
  ad as WeekStartDay,
  rd as Weekdays,
  ye as Widget,
  mc as WidgetAvatarsListItem,
  Nc as WidgetEmptyState,
  uc as WidgetHighlightButton,
  hc as WidgetInboxList,
  tn as WidgetInboxListItem,
  Cc as WidgetSection,
  bc as WidgetSimpleList,
  mt as WidgetSimpleListItem,
  yc as WidgetStrip,
  Rd as _RadarChart,
  ld as actionBarStatuses,
  id as chipVariants,
  sd as downloadAsCSV,
  od as generateCSVContent,
  cd as getGranularityDefinition,
  dd as getGranularityDefinitions,
  ud as getGranularitySimpleDefinition,
  fd as granularityDefinitions,
  md as modules,
  Bd as predefinedPresets,
  hd as rangeSeparator,
  $d as selectSizes,
  qe as useAiPromotionChat,
  bd as useDataCollectionData,
  pd as useDataCollectionSource,
  gd as useExportAction,
  xd as useInfiniteScrollPagination,
  ke as useSidebar
};
