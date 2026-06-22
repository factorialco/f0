import { h as ga, B as pa, i as ba, j as xa, k as Dt, l as Be, m as Te, n as va, o as b, p as J, q as ye, u as oe, T as ya, r as wa, s as Na, R as Ca, t as Ia, v as ce, w as ka, x as Nt, y as ut, z as Ve, A as Le, E as Sa, G as Fa, H as U, J as Aa, K as La, L as xe, M as mn, N as Oa, O as Pa, Q as H, S as hn, U as z, V as ke, W as Ea, X as _a, Y as Da, Z as Ta, _ as za, $ as Oe, a0 as gn, a1 as Ra, a2 as we, a3 as Ue, a4 as Ba, e as pn, a5 as Ae, a6 as $a, a7 as bn, a8 as ie, a9 as X, aa as xn, ab as vn, ac as Ma, ad as yn, ae as pe, af as ae, ag as Wa, ah as ja, ai as Va, aj as Ua, ak as ve, al as Ye, am as Ha, an as Ga, ao as Ka, ap as qa, aq as Je, ar as wn, as as Ya, at as Ja, au as Za, av as He, aw as Xa, ax as Nn, ay as Qa, az as er, aA as tr, aB as nr, aC as ar, aD as rr, aE as ir, aF as lr, aG as ft, aH as Cn, aI as mt, aJ as In, aK as sr, aL as or, aM as cr, aN as dr, aO as ur, aP as Ze, aQ as Xe, aR as ht, aS as kn, aT as fr, aU as Ct, aV as mr, aW as hr, aX as gr, aY as Re, aZ as pr, a_ as br, a$ as $e, b0 as Tt, b1 as gt, b2 as xr, b3 as vr, a as yr, b as wr, b4 as Sn, b5 as Nr, g as Cr, F as Ir, b6 as kr, b7 as Fn, b8 as Sr, b9 as An, ba as Ln, bb as Fr, bc as Ar, bd as Lr, be as Or, bf as Pr, bg as Er, bh as _r, bi as Dr, bj as Tr, bk as On, bl as zr, bm as Rr, bn as Br, bo as $r, bp as ge, bq as It, br as kt, bs as St, bt as Pn, bu as Ft, bv as En, bw as _n, bx as Mr, by as Wr, bz as jr, bA as Vr, bB as Ur, bC as Hr, bD as Gr, bE as Kr, bF as zt, bG as qr, bH as Yr, bI as Rt, bJ as Bt, bK as $t, bL as Jr, bM as Zr, bN as Xr, bO as Qr, bP as Dn, bQ as ei, bR as ti } from "./F0CanvasPanel-BRhyX-xs.js";
import { c2 as Kc, c1 as qc, ce as Yc, b_ as Jc, b$ as Zc, bS as Xc, bT as Qc, ch as ed, bU as td, bV as nd, ci as ad, c0 as rd, ca as id, cb as ld, cf as sd, bW as od, c4 as cd, c3 as dd, bX as ud, bY as fd, cc as md, cj as hd, cd as gd, cg as pd, c9 as bd, c6 as xd, c8 as vd, c5 as yd, bZ as wd, c7 as Nd } from "./F0CanvasPanel-BRhyX-xs.js";
import { jsx as e, jsxs as o, Fragment as Z } from "react/jsx-runtime";
import ue, { forwardRef as G, useRef as j, useTransition as ni, useState as D, useLayoutEffect as Tn, useId as pt, useContext as Pe, createContext as Qe, useEffect as W, useCallback as ne, useMemo as q, Fragment as ai, isValidElement as ri, cloneElement as zn, Children as Rn } from "react";
import { C as ii, P as li, a as Bn, M as si, p as oi, b as ci, R as Mt, c as $n, u as di, d as ui, e as fi, f as mi, g as hi, h as Mn, S as gi, A as pi, B as bi, L as xi, i as vi, V as yi, j as wi, k as Ni, l as Ci, O as Ii } from "./useDataCollectionSource-koJ0815z.js";
import { r as Id, s as kd, o as Sd, H as Fd, t as Ad, z as Ld, a8 as Od, G as Pd, q as Ed, aa as _d, a9 as Dd, Q as Td, ad as zd, F as Rd, Y as Bd, U as $d, J as Md, af as Wd, K as jd, Z as Vd, _ as Ud, v as Hd, ab as Gd, ac as Kd, N as qd, $ as Yd, a5 as Jd, a7 as Zd, w as Xd, y as Qd, D as eu, W as tu, ae as nu, X as au, T as ru, ag as iu, x as lu, E as su, m as ou, n as cu, a1 as du, a2 as uu, a6 as fu, I as mu, a3 as hu, a0 as gu, a4 as pu } from "./useDataCollectionSource-koJ0815z.js";
const ki = ga("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Wn = G(({ className: t, items: n }, a) => /* @__PURE__ */ e(pa, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(ba, {}),
  /* @__PURE__ */ e(xa, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Wn.displayName = "CollapsedBreadcrumbItem";
const At = 50, Si = 120, Ge = 8;
function Fi(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let i = t - r - Ge, l = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, l = c, s++;
  }
  if (s < a)
    for (i -= At; i < 0 && s > 1; )
      i += n[l], l++, s--;
  return Math.max(2, s);
}
function Wt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Ge;
    default:
      return t[0] + At + t[t.length - 1] + Ge;
  }
}
function Ai(t, n) {
  return Si * t + (n ? At : 0) + Ge;
}
function Li(t, n, a = []) {
  if (!t) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Ai(
        s,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, i = a.map((s) => s.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Wt(i)
    };
  const l = Fi(t, i);
  return {
    visibleCount: l,
    headItem: n[0] || null,
    tailItems: n.slice(
      Math.max(1, n.length - (l - 1))
    ),
    collapsedItems: n.slice(
      1,
      n.length - (l - 1)
    ),
    isOnly: n.length === 1,
    minWidth: Wt(i)
  };
}
function Oi({ breadcrumbs: t, append: n }) {
  const a = j(null), r = j(null), [, i] = ni(), [l, s] = D(null), c = (l?.collapsedItems || []).length > 0;
  return Tn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, p = Array.from(f.children);
      i(() => {
        const g = Li(
          h,
          t,
          p
        );
        s(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || l && !l.headItem ? /* @__PURE__ */ e(Dt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Dt,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: l?.minWidth
      },
      children: [
        /* @__PURE__ */ e(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: t.map((d, f) => /* @__PURE__ */ e(
              Be,
              {
                item: d,
                isLast: f === t.length - 1,
                isFirst: f === 0,
                children: f === t.length - 1 ? n : void 0
              },
              Te(d)
            ))
          }
        ),
        l && l.headItem && /* @__PURE__ */ o(va, { children: [
          /* @__PURE__ */ e(
            Be,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${Te(l.headItem)}`
          ),
          c && /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ e(
              Wn,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((d, f) => /* @__PURE__ */ e(
              Be,
              {
                item: d,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              Te(d)
            ))
          ] }),
          !c && /* @__PURE__ */ e(Z, { children: l.tailItems.map((d, f) => /* @__PURE__ */ e(
            Be,
            {
              item: d,
              isLast: f === l.tailItems.length - 1,
              isFirst: !1,
              children: f === l.tailItems.length - 1 ? n : void 0
            },
            Te(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Te(t.at(-1)) ?? 0}`
  );
}
const Pi = ye({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), jt = [
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
], Ei = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...i
}, l) => {
  const s = pt(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...p
  } = i;
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(Pi({ size: n }), h),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        J.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: l,
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
            ...p.style
          },
          ...(({ style: g, ...x }) => x)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              jt.map((g) => /* @__PURE__ */ e("clipPath", { id: `${s}-${g.id}`, children: /* @__PURE__ */ e("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${s}-circle)`, children: jt.map((g) => /* @__PURE__ */ e(
              J.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${g.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? g.id === "left" ? 1 : 0 : 1,
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? g.delay : 0,
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
                    delay: t ? g.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${g.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: g.transformOrigin,
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
              g.id
            )) })
          ]
        }
      )
    }
  );
}, jn = G(Ei), Vn = Qe(null), _i = 15, Di = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [i, l] = D(n), [s, c] = D(!1), [d, f] = D(!0), [u, m] = D(
    _i
  ), h = j(null), p = (x) => {
    h.current = x;
  }, g = () => {
    h.current && h.current();
  };
  return W(() => {
    l(n);
  }, [n]), W(() => {
    if (s && a?.(), !s) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [s, a]), /* @__PURE__ */ e(
    Vn.Provider,
    {
      value: {
        ...r,
        enabled: i,
        setEnabled: l,
        open: s,
        setOpen: c,
        shouldPlayEntranceAnimation: d,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: i ? u : null,
        clear: g,
        setClearFunction: p
      },
      children: t
    }
  );
}, Se = () => {
};
function et() {
  const t = Pe(Vn);
  return t === null ? {
    enabled: !1,
    setEnabled: Se,
    open: !1,
    setOpen: Se,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Se,
    setAutoClearMinutes: Se,
    clear: Se,
    setClearFunction: Se,
    autoClearMinutes: null
  } : t;
}
const Un = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: i } = et(), l = oe(), [s, c] = D(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(ya, { children: /* @__PURE__ */ o(wa, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(Na, { asChild: !0, children: /* @__PURE__ */ e(
      J.div,
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
          Ca,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: i,
            "aria-label": i ? l.ai.closeChat : l.ai.openChat,
            className: b(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ce(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Ia,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  jn,
                  {
                    size: "sm",
                    background: i ? "white" : void 0,
                    hover: s
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !i && /* @__PURE__ */ e(ka, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, Vt = "one_sidebar_locked", Hn = Qe(void 0);
function Ee() {
  const t = Pe(Hn);
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
function Ti({ children: t }) {
  const { currentPath: n } = Nt(), [a, r] = D(!1), [i, l] = D(!1), s = a ? Ve.xl : Ve.md, c = ut(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = D(() => {
    const N = localStorage.getItem(Vt);
    return N !== null ? !!N : !0;
  }), [u, m] = D(!1), [h, p] = D(
    null
  ), g = ne(
    ({ isInvokedByUser: N } = {
      isInvokedByUser: !0
    }) => {
      l(N ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = ne(
    (N) => {
      c || (N.clientX < 32 && m(!0), N.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return W(() => {
    m(!1);
  }, [n]), W(() => {
    i && localStorage.setItem(Vt, d ? "1" : "");
  }, [d, i]), W(() => () => {
    p(y);
  }, [y]), /* @__PURE__ */ e(
    Hn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: y,
        toggleSidebar: g,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: x, className: "h-screen w-screen", children: t })
    }
  );
}
const Ut = J.create(U), Ht = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, zi = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, i] = D(!1), l = () => {
    i(!0), n(!t);
  };
  return /* @__PURE__ */ e(Le, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ce()
      ),
      onClick: l,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Ut,
        {
          size: "sm",
          icon: Sa,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Ht,
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
          icon: Fa,
          className: "outline-none",
          variants: Ht,
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
}, Ri = ({
  currentModule: t,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: i,
  errorScreen: l,
  onOpenChange: s = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = D("idle"), [p, g] = D(null), [x, ...y] = p ?? [], [N, E] = D(!1);
  W(() => {
    g(null), h("idle");
  }, [t]);
  const R = ne(async () => {
    try {
      h("fetching");
      const _ = await a();
      h("idle"), g(_);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Aa,
    {
      open: N,
      onOpenChange: async (_) => {
        E(_), _ && p === null && R(), s(_);
      },
      children: [
        /* @__PURE__ */ e(La, { asChild: !0, children: /* @__PURE__ */ e(
          xe,
          {
            variant: "outline",
            icon: mn,
            hideLabel: !0,
            label: n,
            pressed: N,
            append: f && /* @__PURE__ */ e(Lt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Oa, { children: /* @__PURE__ */ o(
          Pa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Mi, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Vi, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(Wi, { ...i, buttonUrl: r }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Bi,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: y.map((_, O) => /* @__PURE__ */ e(
                    $i,
                    {
                      ..._,
                      onClick: d
                    },
                    O
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  ji,
                  {
                    ...l,
                    onClick: () => {
                      R();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                Ui,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => E(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Bi = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: i,
  onClick: l
}) => {
  const s = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    Ea,
    {
      onClick: l,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        ke,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(s, "text-f1-foreground no-underline"),
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
              _a,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ e("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ e("h3", { className: "font-medium", children: t }),
                /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: i })
              ] }),
              r && /* @__PURE__ */ e(Lt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, $i = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: i
}) => {
  const l = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(Da, { asChild: !0, className: l, onClick: i, children: /* @__PURE__ */ e(
    ke,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        l,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(Lt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Mi = ({
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
        H,
        {
          variant: "outline",
          size: "sm",
          icon: hn,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Gn = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: i
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: b(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        i
      ),
      children: t
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), Wi = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Gn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(U, { icon: mn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(ke, { href: a, children: /* @__PURE__ */ e(H, { label: n }) })
  }
), ji = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Gn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(U, { icon: Ta, size: "lg" }),
    button: /* @__PURE__ */ e(H, { variant: "outline", label: a, onClick: r })
  }
), Vi = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(z, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(z, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(z, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Lt = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", t)
  }
), Ui = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [i, l] = D(t);
  W(() => {
    l(t);
  }, [t]);
  const s = () => {
    l(!1), n && n();
  }, c = (d) => {
    l(!1), r(), d && d();
  };
  return i && /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ e(za, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          H,
          {
            variant: "ghost",
            icon: Oe,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        ii,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            li,
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
}, Ot = Qe(null), Zo = Ot.Provider;
function Xo() {
  return Pe(Ot);
}
function Hi(t, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", i = t !== null, l = t?.previousItem ?? null, s = t?.nextItem ?? null, c = t?.previousItemUrl ?? null, d = t?.nextItemUrl ?? null, f = t?.absoluteIndex ?? null, u = t?.totalItems, m = t?.hasPrevious ?? !1, h = t?.hasNext ?? !1, p = t?.goToPrevious, g = t?.goToNext;
  return q(() => {
    if (!i) return null;
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, y = (R, _) => (R !== null ? a?.(R) : void 0) ?? _, N = r === "callback" ? m ? { onClick: p, title: y(l, "Previous") } : void 0 : c !== null ? { url: c, title: y(l, "Previous") } : void 0, E = r === "callback" ? h ? { onClick: g, title: y(s, "Next") } : void 0 : d !== null ? { url: d, title: y(s, "Next") } : void 0;
    return !N && !E && !x ? null : { previous: N, next: E, counter: x };
  }, [
    i,
    r,
    l,
    s,
    c,
    d,
    f,
    u,
    m,
    h,
    p,
    g,
    a
  ]);
}
function Qo({
  module: t,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: i = !1,
  navigation: l,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ee(), h = Pe(Ot), p = l ?? h ?? void 0, g = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], x = n && Object.keys(n).length !== 0, y = i && a.length > 0, N = !i && r.length > 0, E = !i && !!s?.isVisible, R = g[g.length - 1], _ = "navigation" in window ? window.navigation : null, O = i && (_ ? !!_.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(Le, { children: !i && u !== "locked" && /* @__PURE__ */ e(
            J.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                H,
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
              className: b(
                "flex flex-grow items-center gap-2",
                O && "justify-center"
              ),
              children: [
                i && O && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  H,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Ra,
                    onClick: () => window.history.back()
                  }
                ) }),
                O || y ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in R ? /* @__PURE__ */ e(z, { className: "h-4 w-24" }) : R.label }) : /* @__PURE__ */ e(
                  Oi,
                  {
                    breadcrumbs: g,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      zi,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  g[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !i && x && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(we, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ue,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(Ue, { text: n.text, variant: n.variant }) }),
          !i && x && (p || N || E) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          p && /* @__PURE__ */ e(Ba, { ...p }),
          p && N && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (E || N) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            E && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Ri,
              {
                ...s,
                currentModule: t.name
              }
            ) }),
            N && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((L, V) => /* @__PURE__ */ e(Gi, { action: L }, V)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              pn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Un, {})
          ] })
        ] })
      ]
    }
  );
}
function Gi({ action: t }) {
  const n = j(null), [a, r] = D(!1), i = t.variant ?? "outline";
  return "actions" in t ? /* @__PURE__ */ e(Ae, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    xe,
    {
      size: "md",
      variant: i,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    xe,
    {
      size: "md",
      variant: i,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    ke,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        xe,
        {
          size: "md",
          variant: i,
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
const Ki = () => {
  const t = oe();
  return /* @__PURE__ */ o(
    J.div,
    {
      className: b(
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
            className: b(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          xe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: $a,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, qi = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = j(null);
  W(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, Yi = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: i
  } = et();
  return qi({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ e(Le, { children: n && /* @__PURE__ */ e(
    J.div,
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
        J.div,
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
}, Ji = ({ action: t, onClose: n }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(bn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        xe,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, Zi = ({
  enabled: t = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: i,
  actions: l,
  onShow: s,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  Di,
  {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: l,
    onShow: s,
    onHide: c,
    children: d
  }
), Xi = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: l,
    setOpen: s,
    onHide: c
  } = et(), d = () => {
    s(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Yi, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      xe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Oe,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(jn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      i?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(xn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      l?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, u) => /* @__PURE__ */ e(
        Ji,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(Ki, {}) })
  ] }) : null;
}, Qi = ie(
  X("AiPromotionChat", Xi)
), el = ie(
  X("AiPromotionChatProvider", Zi)
), Kn = ye({
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
}), Gt = {
  positive: yn,
  warning: Ma,
  info: vn
}, Kt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, tl = G(
  function({ title: n, onClose: a, children: r, actions: i = [], variant: l }, s) {
    if (i.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`
      );
    const c = i.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: Kn({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Kt[l]
                ),
                children: [
                  Gt[l] && /* @__PURE__ */ e(U, { icon: Gt[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    pe,
                    {
                      className: Kt[l] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              H,
              {
                variant: "ghost",
                icon: Oe,
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
                className: b(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: i.map((d, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              H,
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
), nl = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Kn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(z, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(z, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(z, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(z, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(z, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(z, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), qn = G(
  (t, n) => /* @__PURE__ */ e(tl, { ref: n, ...t })
), al = ({ compact: t, variant: n }) => /* @__PURE__ */ e(nl, { compact: t, variant: n });
qn.displayName = "F0Callout";
const ec = ae(
  ie(qn),
  al
);
function rl({
  title: t,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ce("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e(U, { icon: Wa, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          pe,
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
function il({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: i } = ja(), l = Va(i), s = Ua(n, "PPPp", { locale: l }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ce("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(pe, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            ve,
            {
              firstName: t.firstName,
              lastName: t.lastName,
              src: t.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(
            pe,
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
function ll({
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
          pe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(Ye, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            rl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ e(
            il,
            {
              author: i.author,
              timestamp: i.timestamp,
              onClick: i.onClick,
              isActive: r === i.id
            },
            i.id
          ))
        ] }) })
      ]
    }
  );
}
const tc = ie(
  X("F0VersionHistory", ll)
), Yn = G(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: i }, l) => {
    const s = ue.useRef(null);
    ue.useImperativeHandle(
      l,
      () => s.current,
      []
    );
    const c = Ha({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: b("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? i(d) : /* @__PURE__ */ e(Z, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Yn.displayName = "VirtualList";
const bt = X("VirtualList", Yn), Jn = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const i = new RegExp(`(${n})`, "gi"), l = t.split(i);
  return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: l.map(
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
function tt(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(t);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && n?.();
}
function nt(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(t);
  i > 0 ? r[i - 1].focus() : r.length > 0 && n?.();
}
const sl = ({
  entity: t,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: i,
  search: l,
  goToFirst: s,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = t.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), g = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? r(t) : a(t));
  }, x = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else y.key === "ArrowDown" ? tt(y.currentTarget, s) : y.key === "ArrowUp" && nt(y.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: b(
        i,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          ve,
          {
            src: t.avatar,
            firstName: h,
            lastName: p,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              Jn,
              {
                text: t.name,
                search: l,
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
            onClick: g,
            onKeyDown: x,
            className: b(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ e(
          U,
          {
            className: "text-f1-icon-selected",
            icon: yn,
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
  selected: i,
  partialSelected: l,
  onSelect: s,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: p = !1,
  singleSelector: g = !1,
  disabled: x = !1,
  hiddenAvatar: y = !1
}) => {
  const [N, E] = D(!1);
  if (!t)
    return /* @__PURE__ */ e(
      sl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: i,
        onSelect: s,
        onRemove: c,
        singleSelector: g,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: y
      }
    );
  const R = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && g)
      d(!n);
    else if (L.key === "Enter") {
      if (x) return;
      !i || l ? s(r) : i && c(r);
    } else L.key === "ArrowDown" ? tt(L.currentTarget, f) : L.key === "ArrowUp" && nt(L.currentTarget, u);
  }, _ = () => {
    if (N)
      d(!n), E(!1);
    else {
      if (x || g) return;
      i ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const O = i || l;
  return /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        H,
        {
          hideLabel: !0,
          icon: n ? Ga : Ka,
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
            E(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            p && /* @__PURE__ */ e(
              U,
              {
                icon: qa,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                Jn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(Je, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              wn,
              {
                checked: O,
                disabled: x,
                onClick: _,
                onKeyDown: R,
                indeterminate: l,
                onPointerDown: (L) => {
                  L.stopPropagation(), E(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", g ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
We.displayName = "EntitySelectListItem";
const qt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? tt(l.currentTarget, a) : l.key === "ArrowUp" && nt(l.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: b(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        H,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: Ya,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: b("line-clamp-1"), children: t }) }) })
    ]
  }
) }), ze = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      H,
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
  })) || [], i = (s) => {
    const c = a.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, l = a.every((s) => s.disabled);
  return /* @__PURE__ */ e(
    Ja,
    {
      items: r,
      value: t.label,
      disabled: l,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, ol = ({
  actions: t,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: i,
  anyVisibleSelected: l,
  loading: s,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = t && t.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let p, g, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || i
  } : void 0, y = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !l
  } : void 0;
  return x || (x = y, y = void 0), m && u ? (p = /* @__PURE__ */ e(
    ze,
    {
      primaryAction: x,
      secondaryActions: y ? [y] : []
    }
  ), g = /* @__PURE__ */ e(
    ze,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ e(
    ze,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ e(ze, { primaryAction: x, secondaryActions: [] }), y && (g = /* @__PURE__ */ e(ze, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    g
  ] }) });
}, cl = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: i,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(U, { icon: ki, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), tt(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), nt(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: t,
      onChange: (c) => n(c.target.value)
    }
  ),
  t && /* @__PURE__ */ e(
    U,
    {
      icon: Za,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), lt = 384, st = 36, dl = 37, Yt = 1, Jt = 200, Zt = '[data-avatarname-navigator-element="true"]', ul = ({
  groupView: t,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: i,
  onSelect: l,
  onRemove: s,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: p,
  onToggleExpand: g,
  searchPlaceholder: x,
  selectAllLabel: y,
  clearLabel: N,
  notFoundTitle: E,
  notFoundSubtitle: R,
  className: _,
  actions: O,
  onCreate: L,
  onCreateLabel: V,
  singleSelector: B = !1,
  loading: w = !1,
  disabled: S = !1,
  hiddenAvatar: I = !1
}) => {
  const A = ue.useRef(null), M = q(
    () => t ? n.reduce(
      (F, K) => F + (K.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), v = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: 0 });
    }, Yt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Zt)
      )[0]?.focus();
    }, Jt);
  }, []), C = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, Yt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(Zt)
      );
      F[F.length - 1]?.focus();
    }, Jt);
  }, []), k = q(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), P = ne(
    (F) => {
      const K = k.get(F.id);
      if (!t)
        return {
          selected: !!K,
          partialSelected: !!K
        };
      const ee = (F.subItems ?? []).filter(
        (T) => K?.subItems?.some(
          (Q) => Q.subId === T.subId
        )
      ), Y = (F.subItems?.length ?? 0) === ee.length, de = !Y && ee.length > 0;
      return { selected: Y, partialSelected: de };
    },
    [t, k]
  ), re = ne(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          qt,
          {
            label: V ?? "",
            onCreate: () => L?.(i),
            goToFirst: v,
            goToLast: C
          }
        );
      const K = L ? F.index - 1 : F.index, ee = n[K], { selected: Y, partialSelected: de } = P(ee);
      return /* @__PURE__ */ e(
        We,
        {
          expanded: ee.expanded ?? !1,
          onExpand: () => g(ee, !0),
          search: i,
          groupView: t,
          entity: ee,
          onSelect: l,
          onRemove: s,
          selected: Y,
          partialSelected: de,
          showGroupIcon: fl(a, r),
          singleSelector: B,
          goToFirst: v,
          goToLast: C,
          disabled: S,
          hiddenAvatar: I
        },
        ee.id
      );
    },
    [
      L,
      V,
      S,
      n,
      P,
      v,
      C,
      t,
      a,
      I,
      s,
      l,
      g,
      i,
      r,
      B
    ]
  ), te = q(() => t ? n.flatMap((F) => {
    const K = Me(
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
          expanded: F.expanded ?? K?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((ee) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? K?.expanded ?? !1
        },
        subItem: ee
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
  })), [t, n, h]), $ = ne(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          qt,
          {
            label: V ?? "",
            onCreate: () => L?.(i),
            goToFirst: v,
            goToLast: C
          }
        );
      const K = L ? F.index - 1 : F.index, ee = te[K].parent, Y = te[K].subItem;
      if (!ee) {
        const T = {
          id: Y.subId,
          name: Y.subName,
          avatar: Y.subAvatar,
          subItems: Y.subItems,
          expanded: Y.expanded,
          searchKeys: Y.subSearchKeys
        }, Q = Me(
          h,
          T.id
        ), se = (T?.subItems ?? []).filter(
          (De) => Q?.subItems?.some(
            (ha) => ha.subId === De.subId
          )
        ), he = (T.subItems?.length ?? 0) === se.length, ma = !he && se.length > 0;
        return /* @__PURE__ */ e(
          We,
          {
            groupView: !0,
            expanded: T.expanded ?? !1,
            onExpand: (De) => g(T, De),
            search: i,
            entity: T,
            onSelect: l,
            onRemove: s,
            selected: he,
            partialSelected: ma,
            showGroupIcon: a.find((De) => De.value === r)?.groupType === "team",
            singleSelector: B,
            goToFirst: v,
            goToLast: C,
            hideLine: K === te.length - 1,
            disabled: S,
            hiddenAvatar: I
          }
        );
      }
      let de = !!Me(h, Y.subId);
      if (!de) {
        const T = Me(
          h,
          ee.id
        );
        de = !!(ee?.subItems ?? []).filter(
          (se) => T?.subItems?.some(
            (he) => he.subId === se.subId
          )
        ).find((se) => se.subId === Y.subId);
      }
      return /* @__PURE__ */ e(
        We,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: Y.subId,
            name: Y.subName,
            avatar: Y.subAvatar,
            searchKeys: Y.subSearchKeys
          },
          onSelect: () => {
            d(ee, Y);
          },
          onRemove: () => c(ee, Y),
          selected: !!de,
          partialSelected: !1,
          singleSelector: B,
          goToFirst: v,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: I
        }
      );
    },
    [
      te,
      h,
      i,
      B,
      v,
      C,
      l,
      s,
      a,
      S,
      g,
      r,
      d,
      c,
      I,
      L,
      V
    ]
  ), [Ne, be] = q(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, K = 0;
    if (!t)
      F = n.length, K = n.reduce(
        (de, { id: T }) => de + (k.has(T) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...k.values()].flatMap(
          (T) => T.subItems?.map((Q) => Q.subId) ?? []
        )
      );
      n.forEach((T) => {
        const Q = T.subItems ?? [];
        F += Q.length, K += Q.filter(
          (se) => de.has(se.subId)
        ).length;
      });
    }
    const ee = F > 0 && K === F, Y = K > 0;
    return [ee, Y];
  }, [n, k, t]), Ce = te.length, le = !B && (y || N), it = O && O.length > 0, _e = !w && (!B && le || it);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        B || w ? "rounded-r-xl" : "",
        _
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              B || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                cl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                He,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: p,
                  options: a,
                  value: r,
                  className: b(
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
            className: b(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              _e ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(bn, {}) }),
              !w && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: lt
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: E }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: R })
                  ]
                }
              ),
              !w && (!!M || L) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                bt,
                {
                  height: lt,
                  itemCount: Ce + (L ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && L) return st;
                    const K = L ? F - 1 : F;
                    return te[K]?.parent === null ? dl : st;
                  },
                  renderer: $,
                  ref: A
                }
              ) : /* @__PURE__ */ e(
                bt,
                {
                  height: lt,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: st,
                  renderer: re,
                  ref: A
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          ol,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: B,
            totalFilteredEntities: M,
            allVisibleSelected: Ne,
            anyVisibleSelected: be,
            selectAllLabel: y,
            clearLabel: N,
            disabled: S,
            actions: O
          }
        )
      ]
    }
  );
}, Me = (t, n) => t.find((a) => a.id === n), fl = (t, n) => t.find((a) => a.value === n)?.groupType === "team", ml = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Xa,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ e(
      Nn,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Qa, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      U,
      {
        icon: Oe,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), hl = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  disabled: l = !1,
  hiddenAvatar: s = !1
}) => {
  const c = q(() => {
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
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: i && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      i
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      bt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            ml,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: l,
              hiddenAvatar: s,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ e(Z, {});
        }
      }
    ) })
  ] });
}, gl = 500, Xt = 520, Qt = 210, en = ({
  groupView: t,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  width: l,
  singleSelector: s = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const p = (l ?? Xt) < gl, g = !c && !s && !p, x = l ?? Xt, y = g ? x - Qt : x;
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
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ e(
              ul,
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
        g && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Qt + "px"
            },
            children: /* @__PURE__ */ e(
              hl,
              {
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: i,
                disabled: h.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, pl = ({
  placeholder: t,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: i = !1,
  label: l,
  labelIcon: s,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: p,
  loading: g = !1,
  required: x = !1,
  readonly: y = !1,
  append: N,
  size: E = "sm",
  open: R
}) => {
  const _ = q(
    () => a.some(
      (B) => B.subItems && B.subItems.length > 0
    ),
    [a]
  ), O = q(() => _ ? a.flatMap(
    (B) => (B.subItems ?? []).map((w) => ({
      parent: B,
      subItem: w
    }))
  ) : a.map((B) => ({
    parent: null,
    subItem: {
      subId: B.id,
      subName: B.name,
      subAvatar: B.avatar,
      subDeactivated: B.deactivated
    }
  })), [_, a]), L = O.length === 0 ? void 0 : O.length === 1 ? O[0].subItem.subName : O.length + " " + n, V = O.length === 1 ? O[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    er,
    {
      onClickContent: m,
      role: "combobox",
      label: l,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !L ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: p,
      clearable: !1,
      value: L,
      disabled: r,
      loading: g,
      required: x,
      readonly: y,
      size: E,
      avatar: i || !V ? void 0 : {
        type: "person",
        firstName: V,
        lastName: "",
        src: O[0].subItem.subAvatar,
        deactivated: O[0].subItem.subDeactivated
      },
      append: N ?? /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(tr, { open: R, disabled: r, size: E }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            O.length === 1 && !i || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            pe,
            {
              tag: "span",
              className: O.length === 1 && O[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: O.length === 0 ? t ?? "" : O.length === 1 ? O[0].subItem.subName : `${O.length} ${n}`
            }
          )
        }
      )
    }
  );
}, nc = (t) => {
  const [n, a] = D(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), t.onOpenChange?.(w);
  };
  W(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [i, l] = D(t.entities), [s, c] = D(""), [d, f] = nr("", 300), u = q(
    () => t.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [t.entities]
  ), m = Pe(ar), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function g(w) {
    if (t.singleSelector) {
      t.onSelect(w), a(!1);
      return;
    }
    const S = t.selectedEntities ?? [], I = i.find((k) => k.id === w.id);
    if (!I)
      return;
    const A = new Set(
      (I.subItems ?? []).map((k) => k.subId)
    ), M = /* @__PURE__ */ new Set([I.id]);
    i.forEach((k) => {
      k.id !== I.id && (k.subItems ?? []).some(
        (re) => A.has(re.subId)
      ) && M.add(k.id);
    });
    const v = [...S];
    function C(k) {
      const P = v.findIndex((re) => re.id === k.id);
      P >= 0 ? v[P] = k : v.push(k);
    }
    M.forEach((k) => {
      const P = i.find(($) => $.id === k);
      if (!P) return;
      const re = P.subItems?.filter(
        ($) => A.has($.subId)
      ) ?? [], te = v.findIndex(($) => $.id === k);
      if (te >= 0) {
        const $ = v[te].subItems ?? [], Ne = new Set($.map((Ce) => Ce.subId)), be = [
          ...$,
          ...re.filter((Ce) => !Ne.has(Ce.subId))
        ];
        C({
          ...P,
          subItems: be
        });
      } else
        C({
          ...P,
          subItems: re
        });
    }), t.onSelect(v);
  }
  function x(w, S) {
    if (t.singleSelector)
      t.onSelect({ ...w, subItems: [{ ...S }] }), a(!1);
    else {
      const I = t.selectedEntities ?? [], A = new Set(I.map((C) => C.id)), M = new Map(
        I.map((C) => [C.id, C.subItems ?? []])
      );
      A.add(w.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (P) => P.subId === S.subId
        ) && A.add(C.id);
      });
      const v = [];
      t.entities.forEach((C) => {
        if (A.has(C.id)) {
          let P = [...M.get(C.id) ?? []];
          C.subItems?.some(
            ($) => $.subId === S.subId
          ) && (P.some(
            (Ne) => Ne.subId === S.subId
          ) || P.push(S));
          const te = new Set(
            (C.subItems ?? []).map(($) => $.subId)
          );
          P = P.filter(
            ($) => te.has($.subId)
          ), v.push({
            ...C,
            subItems: P
          });
        }
      }), t.onSelect(v);
    }
  }
  function y(w) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let S = [];
    const I = t.selectedEntities ?? [];
    if (u) {
      const A = i.find(
        (v) => v.id === w.id
      );
      if (!A)
        return;
      const M = new Set(
        (A.subItems ?? []).map((v) => v.subId)
      );
      for (const v of I) {
        const C = (v.subItems ?? []).filter(
          (k) => !M.has(k.subId)
        );
        C.length > 0 && S.push({
          ...v,
          subItems: C
        });
      }
    } else
      S = (I ?? []).filter((A) => A.id !== w.id);
    t.onSelect(S);
  }
  function N(w, S) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const I = t.selectedEntities ?? [], A = S.subId, M = [];
    for (const v of I) {
      const C = v.subItems?.filter((k) => k.subId !== A) ?? [];
      C.length > 0 && M.push({
        ...v,
        subItems: C
      });
    }
    t.onSelect(M);
  }
  function E() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const w = t.selectedEntities ?? [];
    let S = [];
    if (u) {
      const I = new Set(
        i.flatMap(
          (A) => (A.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const A of w) {
        const M = (A.subItems ?? []).filter(
          (v) => !I.has(v.subId)
        );
        M.length > 0 && S.push({
          ...A,
          subItems: M
        });
      }
    } else {
      const I = new Set(
        i.map((A) => A.id)
      );
      S = (w ?? []).filter((A) => !I.has(A.id));
    }
    t.onSelect(S);
  }
  function R() {
    const w = [...t.selectedEntities ?? []];
    i.forEach((S) => {
      const I = w.find((A) => A.id === S.id);
      if (!I)
        w.push({
          ...S,
          subItems: S.subItems || []
        });
      else {
        const A = Array.from(
          /* @__PURE__ */ new Set([
            ...I.subItems ?? [],
            ...S.subItems ?? []
          ])
        );
        I.subItems = A;
      }
    }), t.singleSelector || t.onSelect(w);
  }
  const _ = (w) => {
    c(w), f(w);
  }, O = (w, S) => {
    t.onItemExpandedChange(w.id, S), l(
      i.map(
        (I) => I.id === w.id ? { ...I, expanded: !w.expanded } : I
      )
    );
  };
  W(() => {
    if (!d) {
      l(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const S = t.entities.map((I) => {
        const A = bl(I, d), M = I.subItems?.map((v) => ({
          ...v,
          score: Ke(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, C) => v.score - C.score);
        return {
          ...I,
          score: A,
          expanded: I.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((I) => I.score < 1 / 0).sort((I, A) => I.score - A.score);
      l(S);
    } else {
      const w = t.entities.map((S) => {
        const I = Ke(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: I };
      }).filter((S) => S.score < 1 / 0).sort((S, I) => S.score - I.score);
      l(w);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    l
  ]);
  const L = j(null), [V, B] = D(0);
  return Tn(() => {
    const w = () => {
      L.current && B(L.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: L,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        en,
        {
          groupView: u,
          entities: i,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: g,
          onRemove: y,
          onSubItemRemove: N,
          onSubItemSelect: x,
          onClear: E,
          onSelectAll: R,
          selectedEntities: t.selectedEntities ?? [],
          search: s,
          onSearch: _,
          onToggleExpand: O,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? V - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(rr, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      ir,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          pl,
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
      lr,
      {
        container: p,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          en,
          {
            groupView: u,
            entities: i,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: g,
            onRemove: y,
            onSubItemRemove: N,
            onSubItemSelect: x,
            onClear: E,
            onSelectAll: R,
            selectedEntities: t.selectedEntities ?? [],
            search: s,
            onSearch: _,
            onToggleExpand: O,
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
function xt(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function tn(t) {
  return xt(t).split(/\s+/).filter((n) => n.length > 0);
}
function Ke(t = "", n) {
  const a = tn(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const i = xt(r), l = tn(r), s = xt(t);
    if (i.includes(s) || a.every(
      (d) => l.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function bl(t, n) {
  const a = Ke(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((i, l) => {
    const s = Ke(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(i, s);
  }, 1 / 0)), Math.min(a, r);
}
const xl = ({
  id: t,
  createdAt: n,
  title: a,
  description: r,
  icon: i,
  category: l,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = ft({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = Cn(n, {
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
        /* @__PURE__ */ e(mt, { icon: i ?? In }),
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
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${l} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: s && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, vl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(z, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(z, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(z, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Pt = X(
  "ActivityItem",
  ae(xl, vl)
), Zn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), yl = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Zn, { title: t, children: n.map((i) => /* @__PURE__ */ e(
  Pt,
  {
    ...i,
    onClick: () => a(i.id),
    onVisible: r
  },
  i.id
)) }), wl = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Zn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(Pt.Skeleton, {}, r)) }), je = ae(yl, wl), Nl = 3, Cl = ["today", "yesterday", "lastWeek", "lastMonth"], Il = (t) => cr(t, ([n]) => {
  const a = Cl.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), vt = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), kl = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: i = 5
}) => {
  const l = oe(), s = sr(t, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = or((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Il(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ue.Fragment, { children: [
      /* @__PURE__ */ e(
        je,
        {
          title: u in l.date.groups ? l.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ e(vt, {})
    ] }, u)),
    n && new Array(Nl).fill(null).map((u, m) => /* @__PURE__ */ e(Pt.Skeleton, {}, m))
  ] });
}, Sl = () => {
  const t = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(je.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(vt, {}),
    /* @__PURE__ */ e(
      je.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(vt, {}),
    /* @__PURE__ */ e(
      je.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, ac = X(
  "ActivityItemList",
  ae(kl, Sl)
), Fl = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Al = {
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
function Ll({
  firstName: t,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: i,
  onReactionSelect: l,
  pickerRef: s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Al[dr(
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
                ve,
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
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                Bn,
                {
                  lastEmojiReaction: i,
                  onSelect: l,
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
function Ol(t) {
  const n = j(null), a = j(), r = ne(() => {
    const l = n.current;
    if (!l) return;
    const s = ur.create(l, {
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
  }, [t]), i = ne(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: i };
}
const Pl = ({
  link: t,
  firstName: n,
  lastName: a,
  src: r,
  onClick: i,
  canReact: l = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = D(s), p = j(null);
  W(() => {
    h(s);
  }, [s]);
  const g = (_) => {
    h(_), c?.(_);
  }, x = Ze(), { canvasRef: y, handleMouseEnter: N, handleMouseLeave: E } = Ol(x), R = Xe({
    emoji: Fl[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ke,
    {
      href: t,
      onClick: i,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ce()
      ),
      onMouseEnter: x ? void 0 : N,
      onMouseLeave: x ? void 0 : E,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          Ll,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: l,
            lastEmojiReaction: m,
            onReactionSelect: g,
            pickerRef: p
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
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(ht, { date: u }) })
        ] })
      ]
    }
  );
}, El = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(z, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(z, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), rc = ae(Pl, El), ic = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(kn, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(H, { label: a, variant: "outline", onClick: r }) })
] });
function _l({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: i
}) {
  const [l, s] = D(a), [c, d] = D(n), f = j(null), { fireEmojiConfetti: u } = fr(), m = (g, x) => {
    g.stopPropagation(), d(c + (l ? -1 : 1)), s(!l), i?.(x), l || u(x, f);
  }, h = r?.map((g) => g.name).join(", ") || "", p = /* @__PURE__ */ e(
    Ct,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (g) => {
        m(g, t);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        l && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": mr(t),
      prepend: /* @__PURE__ */ e(Xe, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        hr,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: b(
            "tabular-nums",
            l ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ e(we, { label: h, children: p }) : p;
}
function Dl({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      H,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(Bn, { onSelect: n, locale: a }),
    t.map((i) => /* @__PURE__ */ e(
      _l,
      {
        emoji: i.emoji,
        initialCount: i.initialCount,
        hasReacted: i.hasReacted,
        users: i.users,
        onInteraction: n
      },
      i.emoji
    ))
  ] });
}
const Tl = X("Reactions", Dl), Xn = G(function({ content: n, collapsed: a, id: r, className: i, tabIndex: l }, s) {
  return /* @__PURE__ */ e(
    gr,
    {
      ref: s,
      id: r,
      content: n,
      tabIndex: l,
      className: b(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        i
      )
    }
  );
});
Xn.displayName = "BasePostDescription";
const zl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(z, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(z, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Qn = ae(
  Xn,
  zl
), nn = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Re,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        we,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), yt = G(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: i,
    color: l,
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
          !m && /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${l}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${l}, transparent)`
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
              ${l} 0px,
              ${l} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
              } : {
                backgroundColor: l
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
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: i })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(Z, { children: [
                  /* @__PURE__ */ e(ht, { date: f }),
                  /* @__PURE__ */ e(
                    U,
                    {
                      icon: hn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(ht, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(nn, { tags: c }),
              d && /* @__PURE__ */ e(nn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Rl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), ea = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && Rl.has(a);
}, Bl = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let i = pr(r);
  const l = (s) => {
    s.stopPropagation();
  };
  return a && (i = `${i} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: ea(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ e("source", { src: n })
      }
    ) : /* @__PURE__ */ o(Z, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(z, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      yt,
      {
        title: t,
        description: i,
        color: br.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, $l = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(z, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(z, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(z, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(z, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), ta = ae(Bl, $l), Ml = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const i = oe();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ce()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: i.actions.seeMore
    }
  ) });
}, Wl = ({
  id: t,
  author: n,
  group: a,
  createdAt: r,
  title: i,
  description: l,
  onClick: s,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: p,
  dropdownItems: g,
  noReactionsButton: x = !1,
  descriptionExpandable: y = !1
}) => {
  const N = pt(), E = pt(), R = j(null), [_, O] = D(null), [L, V] = D(!1), B = [f.views, f.comments].filter(Boolean).join(" · "), w = y && _?.id === t && _.description === l, S = !w, I = Cn(r), A = () => {
    s(t);
  }, M = (k) => {
    k.stopPropagation();
  }, v = n ? `${n.firstName} ${n.lastName}` : void 0, C = (k) => {
    k.preventDefault(), k.stopPropagation(), l && O({ id: t, description: l });
  };
  return W(() => {
    w && R.current?.focus();
  }, [w]), W(() => {
    y || O(null);
  }, [y]), W(() => {
    const k = R.current;
    if (!y || !k || w) {
      V(!1);
      return;
    }
    const P = () => {
      V(
        k.scrollHeight > k.clientHeight
      );
    };
    if (P(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver(P);
    return re.observe(k), () => re.disconnect();
  }, [y, w, l]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: A,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          $e,
          {
            href: n.url || "#",
            title: v,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              ve,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(mt, { icon: Tt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Z, { children: [
                  /* @__PURE__ */ e(
                    $e,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: v,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        ve,
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
                    $e,
                    {
                      href: n.url,
                      title: v,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: v
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(mt, { icon: Tt, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: b(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  $e,
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
                  p?.map((k) => /* @__PURE__ */ e(
                    H,
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
                  g?.length && /* @__PURE__ */ e(
                    Ae,
                    {
                      items: g,
                      icon: gt,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ae,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...g ?? []
                    ],
                    icon: gt,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: I }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: N,
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              l && /* @__PURE__ */ o(Z, { children: [
                /* @__PURE__ */ e(
                  Qn,
                  {
                    ref: R,
                    id: E,
                    content: l,
                    collapsed: S,
                    tabIndex: w ? -1 : void 0,
                    className: b(w && ce())
                  }
                ),
                y && L && !w && /* @__PURE__ */ e(
                  Ml,
                  {
                    describedBy: N,
                    controls: E,
                    expanded: w,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: ea(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: M,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(z, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(ta, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: B }),
          !x && /* @__PURE__ */ e(
            Tl,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: xr
              }
            }
          )
        ] })
      ]
    }
  );
}, jl = ({
  withEvent: t,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(z, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(z, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(z, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(z, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(z, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(Qn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(z, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(ta.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(z, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(z, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), lc = ae(
  Wl,
  jl
), na = ue.forwardRef(({ person: t, onClick: n, ...a }, r) => {
  const i = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: b(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: i,
      children: [
        /* @__PURE__ */ e(
          ve,
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
            a.info && /* @__PURE__ */ e(we, { label: a.info, children: /* @__PURE__ */ e(
              U,
              {
                icon: vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((l, s) => /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ e(Re, { ...l }, l.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(vr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              H,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
              H,
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
}), Vl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(z, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(z, { className: "h-4" }),
    /* @__PURE__ */ e(z, { className: "h-4" })
  ] })
] });
na.displayName = "OnePersonListItem";
const sc = ie(
  X(
    "OnePersonListItem",
    ae(na, Vl)
  )
), Ul = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Hl({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  return /* @__PURE__ */ e(Ti, { children: /* @__PURE__ */ e(
    Gl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function Gl({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  const l = r?.enabled ? yr : i?.enabled ? el : ai, s = r?.enabled ? r : i?.enabled ? i : void 0;
  return /* @__PURE__ */ e(l, { ...s, children: /* @__PURE__ */ e(
    Jl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const oc = X(
  "ApplicationFrame",
  Hl
), Kl = ({ contentId: t }) => {
  const n = oe();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: ce(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function ql(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Yl(t, n) {
  const { sidebarState: a, toggleSidebar: r } = Ee(), i = j(t);
  W(() => {
    n && ql(
      t,
      i.current,
      a
    ) && r({ isInvokedByUser: !1 }), i.current = t;
  }, [t, n, a, r]);
}
function Jl({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: i
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = Ee(), f = Ze(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: p,
    closeCanvas: g,
    chatWidth: x,
    resizable: y
  } = wr(), N = m === "fullscreen", E = m === "canvas", { open: R } = et(), _ = y ? x : Nr, O = j(N), L = N && !O.current, V = !N && O.current, [
    B,
    w
  ] = D(!1);
  W(() => {
    !N && O.current && w(!0), O.current = N;
  }, [N]);
  const S = N || B || V, I = q(() => L ? { duration: 0.15, ease: "easeOut" } : V ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [L, V]), A = ut(
    `(max-width: ${Ve.xl}px)`,
    { initializeWithValue: !0 }
  ), M = ut(`(max-width: ${Ve.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(R);
  }, [R, d]), Yl(u, A), /* @__PURE__ */ e(
    si,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ e(Sn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(Le, { children: l === "unlocked" && /* @__PURE__ */ e(
            J.nav,
            {
              className: b(
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
              className: b(
                l !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                l === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (v) => {
                l === "hidden" ? v?.setAttribute("inert", "") : v?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Kl, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            J.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !M ? _ : 0
              },
              transition: { paddingRight: Ul },
              children: [
                /* @__PURE__ */ e(
                  J.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      S ? "overflow-hidden" : "overflow-auto",
                      !u && !R && "xs:pr-1",
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ e(
                      J.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          S ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && E && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      M ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: M ? void 0 : { right: _ },
                    children: /* @__PURE__ */ e(
                      Cr,
                      {
                        content: h,
                        onClose: g,
                        entities: p
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  J.div,
                  {
                    className: b(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      M ? "fixed inset-0 z-[30]" : b(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        S || E ? "z-20" : "z-0",
                        l === "hidden" && S ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: M || N ? "100%" : _
                    },
                    transition: I,
                    onAnimationComplete: () => {
                      B && w(!1);
                    },
                    children: /* @__PURE__ */ e(Ir, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(Qi, {})
        ] }) })
      ] })
    }
  );
}
const aa = ({
  firstName: t,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: l,
  onPulseClick: s
}) => {
  const c = oe(), [d, f] = D(!l);
  return /* @__PURE__ */ e("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ e(Le, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ e(
    J.div,
    {
      className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: /* @__PURE__ */ e(
        J.div,
        {
          initial: { opacity: 0, originX: 0.6, originY: 0.6 },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: { opacity: 0, scale: 0 },
          transition: {
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => f(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: /* @__PURE__ */ e(Xe, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ o(
    J.div,
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      className: "relative h-10 w-10",
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: [
        /* @__PURE__ */ e(
          Nn,
          {
            type: "rounded",
            name: [t, n],
            src: a,
            size: "lg",
            color: "random",
            "aria-label": r,
            "aria-labelledby": i
          }
        ),
        l ? /* @__PURE__ */ e("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ e(
          Ct,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ e(
              U,
              {
                icon: ci[l],
                color: oi[l],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ e(
          J.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ e(
              xe,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: kr,
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                hideLabel: !0
              }
            )
          },
          "reaction-button"
        )
      ]
    },
    "avatar"
  ) }) });
};
aa.displayName = "PulseAvatar";
const Zl = ye({
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
function ra({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: s } = Ee();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: Zl({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || i === "hidden") && /* @__PURE__ */ e(
              H,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: gn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center",
                  s ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    aa,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    ve,
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
                        className: b(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
                      "p",
                      {
                        className: b(
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
            /* @__PURE__ */ e(pn, {}),
            /* @__PURE__ */ e(Un, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
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
ra.displayName = "DaytimePage";
const cc = ie(
  X("DaytimePage", ra)
);
function Xl(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: i, target: l }) => ({
    label: n,
    description: a,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function Ql({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ae, { items: Xl(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ce()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(U, { icon: Fn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const dc = ie(
  X("OmniButton", Ql)
);
function ia({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
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
ia.displayName = "Page";
const uc = ie(X("Page", ia));
function es({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: i = !1,
  additionalOptions: l = []
}) {
  const s = q(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(z, { className: "size-6" }),
    /* @__PURE__ */ e(z, { className: "h-3 w-14" })
  ] }) : t.length + (l?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    an,
    {
      company: s,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    ts,
    {
      companies: t,
      selected: s,
      onChange: a,
      additionalOptions: l,
      children: /* @__PURE__ */ e(
        an,
        {
          company: s,
          withNotification: i
        }
      )
    }
  ) });
}
const ts = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: i = []
}) => {
  const l = oe(), [s, c] = D(!1), d = q(
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
      ...i.length ? [{ type: "separator" }] : [],
      ...i
    ],
    [t, i]
  ), f = (u) => {
    const m = i?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ e(
    He,
    {
      label: l.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: l.navigation.sidebar.companySelector.placeholder,
      open: s,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: b(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ce()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              J.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(U, { icon: Ln, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, an = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: b(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        Sr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: An, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(pe, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function fc({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: i,
  onDropdownClick: l,
  hasActivityUpdates: s
}) {
  const c = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ae, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ce("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ e(
            ve,
            {
              src: t.avatarUrl,
              firstName: t.firstName,
              lastName: t.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(pe, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ e(we, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        H,
        {
          icon: In,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Fr, { type: "highlight", size: "sm", icon: An }) })
    ] }) })
  ] });
}
function ns({ isExpanded: t }) {
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
            className: b(
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
            className: b(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function as() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Ee(), i = j(null);
  return W(() => {
    t === "hidden" && n === "locked" && i.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    Ct,
    {
      variant: "ghost",
      size: "md",
      onClick: () => a(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: i,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ e("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ e(ns, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ e(U, { icon: Oe, size: "md" }) })
      ]
    }
  );
}
function mc({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: i,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      es,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: l,
        withNotification: r,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ e(as, {})
  ] });
}
function rs() {
  const [t, n] = D(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const la = Qe(void 0);
function is({ children: t }) {
  const [n, a] = D(!1), [r, i] = D(null);
  return /* @__PURE__ */ e(
    la.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: i },
      children: t
    }
  );
}
function Et() {
  const t = Pe(la);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const ls = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      U,
      {
        icon: t.icon,
        size: "md",
        className: b(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(Je, { value: t.badge, size: "sm", type: "bold" })
] }), ss = ({ item: t }) => {
  const { isActive: n } = Nt(), { label: a, icon: r, ...i } = t, l = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ e(
    ke,
    {
      ...i,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ce("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(ls, { item: t, active: l })
    }
  );
}, os = ({
  item: t,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: i,
  total: l,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = oe(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = Et(), { isActive: g } = Nt(), x = g(t.href, { exact: t.exactMatch }), y = j(!1), [N, E] = D(!1), R = i === 0, _ = i === l - 1, O = l === 1, L = q(() => {
    const A = [];
    return !O && !R && A.push({
      label: f.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: Ar
    }), !O && !_ && A.push({
      label: f.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: Lr
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Or,
      critical: !0
    }), A;
  }, [O, R, _, f, s, i, r, t]), V = () => {
    m(!0), E(!1), p(t.href || null), y.current = !0;
  }, B = () => {
    m(!1), p(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && h === t.href, S = q(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      N && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, N, w, d]
  ), I = q(() => /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(ds, { tooltip: n, children: /* @__PURE__ */ o(
      ke,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          w && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            U,
            {
              icon: t.icon,
              size: "md",
              className: b(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Pr, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            pe,
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          N && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ae,
          {
            open: N,
            onOpenChange: E,
            items: L,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(U, { icon: gt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, x, N, w, L, n]);
  return d ? /* @__PURE__ */ e(
    $n,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: V,
      onDragEnd: B,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: I
    }
  ) : /* @__PURE__ */ e("div", { className: S, children: I });
}, sa = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: i,
  isDragging: l,
  wasDragging: s
}) => {
  const [c, d] = D(n), f = Ze(), u = () => {
    if (l || s?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(Er, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ce("focus-visible:ring-inset"),
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
            J.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                U,
                {
                  icon: Ln,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(_r, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      J.div,
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
        children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5", children: i })
      }
    ) })
  ] }) });
}, ot = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: i,
  currentOrder: l
}) => {
  const { isDragging: s, setIsDragging: c } = Et(), d = j(!1), f = di(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, l && i?.(l);
    }, 0);
  }, h = (g) => {
    !s && !d.current && r?.(t, g);
  }, p = /* @__PURE__ */ e(
    sa,
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
          className: b(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: t.items.map((g, x) => /* @__PURE__ */ e(ss, { item: g }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    $n,
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
      children: p
    }
  ) : p;
};
function hc({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: i
}) {
  const l = j(null), s = t.filter(
    (g) => g.isSortable === !1
  ), [c, d] = D(
    t.filter((g) => g.isSortable !== !1)
  ), [f, u] = D(0), m = ne((g) => {
    d(g);
  }, []), h = ne(
    (g) => {
      a?.(g);
    },
    [a]
  ), p = rs();
  return /* @__PURE__ */ e(is, { children: /* @__PURE__ */ e(Sn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    cs,
    {
      disableDragging: p,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: h,
      favorites: i,
      onFavoritesChange: r,
      forceUpdate: () => u((g) => g + 1)
    },
    f
  ) }) });
}
function cs({
  nonSortableItems: t,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: i,
  onDragEnd: l,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = oe(), { isDragging: m } = Et(), h = t.some((v) => v.isRoot), p = t.filter((v) => !v.isRoot).length > 0, g = n.length > 0, x = j(null), [y, N] = D(s), E = s.length > 0;
  W(() => {
    JSON.stringify(s) !== JSON.stringify(y) && N(s);
  }, [s]);
  const R = (v) => {
    N(v);
  }, _ = ne(
    (v) => {
      const C = y.filter((k) => k.href !== v.href);
      N(C), c?.(C);
    },
    [y, c]
  ), O = ne(
    (v, C) => {
      if (C < 0 || C >= y.length) return;
      const k = [...y], [P] = k.splice(v, 1);
      k.splice(C, 0, P), N(k), c?.(k);
    },
    [y, c]
  ), [L, V] = D(!1), B = j(null);
  W(() => {
    n.length > 0 && !L && (a([...n]), V(!0));
  }, [n, a, L]), W(() => {
    const v = () => {
      B.current !== null && window.clearTimeout(B.current), B.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), B.current !== null && window.clearTimeout(B.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", S = q(
    () => y.reduce(
      (v, C, k) => (C.label in v || (v[C.label] = []), v[C.label].push(k), v),
      {}
    ),
    [y]
  ), I = q(
    () => E && y.map((v, C) => /* @__PURE__ */ e(
      os,
      {
        isSortable: !f,
        tooltip: (S[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: _,
        index: C,
        total: y.length,
        onMove: O,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      E,
      y,
      S,
      _,
      O,
      c,
      f
    ]
  ), A = "flex flex-col gap-3", M = q(() => n.map((v) => /* @__PURE__ */ e(
    ot,
    {
      category: v,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: i,
      onDragEnd: l,
      currentOrder: n
    },
    v.id
  )), [n, f, r, i, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => v.isRoot).map((v, C) => /* @__PURE__ */ e(
          ot,
          {
            category: v,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        E && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(sa, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: x, children: f ? /* @__PURE__ */ e("div", { className: w, children: I }) : /* @__PURE__ */ e(
          Mt,
          {
            axis: "y",
            values: y,
            onReorder: R,
            className: w,
            children: I
          }
        ) }) }) }),
        p && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => !v.isRoot).map((v, C) => /* @__PURE__ */ e(
          ot,
          {
            category: v,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        g && /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: A, children: M }) : /* @__PURE__ */ e(
              Mt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: A,
                children: M
              }
            )
          }
        )
      ]
    }
  );
}
const ds = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(we, { description: t, children: n }) : n;
function gc({
  onClick: t,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ce()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(U, { icon: Dr, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Tr, { keys: a }) })
      ]
    }
  ) });
}
const rn = ({ position: t }) => /* @__PURE__ */ e(
  J.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: b(
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
function us({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: i, isSmallScreen: l } = Ee(), s = Ze(), [c, d] = ft({ threshold: 1 }), [f, u] = ft({ threshold: 1 }), m = oe(), h = {
    x: {
      ease: i !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, p = () => a ? ri(a) && r ? zn(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    J.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: b(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        i === "locked" ? "h-full" : b(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          l ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: i === "locked" || l ? 0 : "8px",
        borderRadius: i === "locked" || l ? "0" : "12px",
        left: i === "locked" ? "0" : l ? 0 : "8px",
        x: i === "hidden" ? -260 : 0,
        opacity: i === "hidden" ? l ? 0.7 : 0 : 1,
        pointerEvents: i === "hidden" ? "none" : "auto"
      },
      transition: h,
      children: [
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ye, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Le, { children: [
            !d && /* @__PURE__ */ e(rn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(rn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const pc = ie(us), fs = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, ln = {
  approved: {
    icon: xn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Oe,
    type: "critical",
    size: "sm"
  }
}, ms = {
  icon: Fn,
  type: "neutral",
  size: "sm"
}, hs = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, gs = (t) => t in ln ? ln[t] : ms;
function sn(t) {
  return hs[t ?? "neutral"] ?? 0;
}
const ps = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const i = oe(), l = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = i.approvals.statuses[a], c = q(() => r.map((d) => {
    const f = gs(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => sn(f.badge?.type) - sn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ e(Ue, { text: s, variant: fs[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(On, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, bs = ({ steps: t }) => {
  const a = oe().approvals.history, r = t.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((i, l) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: l + 1 })
          }
        ),
        l !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((i, l) => /* @__PURE__ */ o(Z, { children: [
        /* @__PURE__ */ e(
          ps,
          {
            title: i.title,
            approvalsRequired: i.approvalsRequired,
            status: i.status,
            approvers: i.approvers
          },
          i.title
        ),
        l !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, bc = ie(
  X("OneApprovalHistory", bs)
), ct = (t, n) => typeof n == "string" && n in t;
function on(t, n, a) {
  const r = {};
  let i = !1;
  const l = zr(t);
  if (l !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(l).filter(
        ([u]) => ct(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(l).length === 0) && (a.setCurrentFilters(f), r.filters = f, i = !0);
  }
  const s = t.sortings;
  if (s === null)
    a.setCurrentSortings(null), r.sortings = null, i = !0;
  else if (s && n.sortings && ct(n.sortings, s.field)) {
    const d = {
      field: s.field,
      order: s.order
    };
    a.setCurrentSortings(d), r.sortings = d, i = !0;
  }
  typeof t.search == "string" && n.search?.enabled && (a.setCurrentSearch(t.search), r.search = t.search, i = !0);
  const c = t.grouping;
  if (c?.field !== void 0 && n.grouping && ct(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(d), r.grouping = d, i = !0;
  }
  return i ? r : null;
}
function xc(t) {
  const {
    source: n,
    collectionId: a,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: l,
    idProvider: s,
    itemUrl: c,
    getItemTitle: d,
    enabled: f = !0,
    restorePersistedState: u = !0,
    currentFilters: m,
    navigationMode: h = "url",
    deps: p = []
  } = t, g = Rr(), x = ui(n, p), [y, N] = D(null), E = y?.key === a && y.settled, R = j(x);
  R.current = x;
  const _ = j(g);
  _.current = g;
  const O = j(null), L = m === void 0 ? null : JSON.stringify(m), V = j(m);
  V.current = m;
  const B = j(null), w = () => {
    const T = V.current;
    T !== void 0 && (B.current = JSON.stringify(T), R.current.setCurrentFilters(T));
  };
  W(() => {
    if (!f || O.current === a) return;
    if (!u) {
      O.current = a, w(), N({ key: a, applied: null, settled: !1 });
      return;
    }
    let T = !1;
    return (async () => {
      let se = null;
      try {
        const he = await _.current.get(
          a
        );
        he && !T && (se = on(
          he,
          R.current,
          R.current
        ));
      } catch {
      }
      T || (O.current = a, w(), N({ key: a, applied: se, settled: !1 }));
    })(), () => {
      T = !0;
    };
  }, [a, f, u]), W(() => {
    !E || L === null || B.current !== L && w();
  }, [E, L]), W(() => {
    if (!(!f || !u))
      return Br(a, async () => {
        try {
          const T = await _.current.get(
            a
          );
          if (!T) return;
          const Q = R.current;
          on(
            T,
            {
              filters: V.current === void 0 ? Q.filters : void 0,
              sortings: Q.sortings,
              search: Q.search,
              grouping: Q.grouping
            },
            Q
          );
        } catch {
        }
      });
  }, [a, f, u]);
  const {
    data: S,
    paginationInfo: I,
    setPage: A,
    loadMore: M,
    isLoading: v,
    isInitialLoading: C
  } = $r(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && E,
      fetchParamsProvider: (T) => ({
        ...T,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  W(() => {
    N(
      (T) => T && T.key === a && !T.settled ? { ...T, settled: !0 } : T
    );
  }, [y, a]);
  const k = c ?? n.itemUrl, P = fi({
    dataSource: x,
    data: S,
    paginationInfo: I,
    setPage: A,
    loadMore: M,
    isLoading: v,
    idProvider: s,
    itemUrl: k,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: l
  }), re = typeof P.activeItemId == "string" || typeof P.activeItemId == "number" ? P.activeItemId : null, te = P.activeItem !== null, $ = te && P.nextItem === null && P.hasNext, Ne = te && P.previousItem === null && P.hasPrevious, be = re !== null && (!te || $ || Ne), Ce = [
    ...x.currentSortings ? [
      {
        field: x.currentSortings.field,
        order: x.currentSortings.order
      }
    ] : [],
    ...x.currentGrouping ? [
      {
        field: x.currentGrouping.field,
        order: x.currentGrouping.order ?? "asc"
      }
    ] : []
  ], { neighbors: le, isSupported: it } = mi({
    dataAdapter: x.dataAdapter,
    id: re,
    filters: x.currentFilters,
    sortings: Ce,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && E && !C && !v && be,
    fetchParamsProvider: (T) => ({
      ...T,
      navigationFilters: x.currentNavigationFilters
    })
  }), _e = q(() => s || (x.idProvider ? (T, Q) => x.idProvider(T, Q) : hi), [s, x.idProvider]), F = q(() => {
    if (!be || le === null) return P;
    const T = P.previousItem ?? le.previous, Q = P.nextItem ?? le.next, se = (he) => he && k ? k(he) ?? null : null;
    return {
      ...P,
      previousItem: T,
      nextItem: Q,
      previousItemUrl: P.previousItemUrl ?? se(T),
      nextItemUrl: P.nextItemUrl ?? se(Q),
      absoluteIndex: P.absoluteIndex ?? (le.position !== void 0 ? le.position - 1 : null),
      totalItems: P.totalItems ?? le.total,
      hasPrevious: P.hasPrevious || T !== null,
      hasNext: P.hasNext || Q !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: te ? P.goToPrevious : () => {
        le.previous && P.setActiveItemId(
          _e(le.previous)
        );
      },
      goToNext: te ? P.goToNext : () => {
        le.next && P.setActiveItemId(
          _e(le.next)
        );
      }
    };
  }, [
    P,
    be,
    le,
    te,
    k,
    _e
  ]), K = Hi(F, {
    getItemTitle: d,
    mode: h
  }), ee = f && E && it && be && le === null, Y = j(null), de = K ?? (ee ? Y.current : null);
  return W(() => {
    K !== null && (Y.current = K);
  }, [K]), {
    ...F,
    isNavigating: F.isNavigating || ee,
    isReady: E && !C,
    navigation: de,
    appliedCollectionState: y?.applied ?? null,
    dataSource: x,
    data: S,
    paginationInfo: I,
    isLoading: v
  };
}
const _t = {
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
}, xs = ye({
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
      ..._t
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), vs = ue.forwardRef(function({ className: n, gap: a, children: r, tileSize: i, ...l }, s) {
  return /* @__PURE__ */ e("div", { className: b("@container", "grow"), ref: s, ...l, children: /* @__PURE__ */ e(
    "div",
    {
      className: b(xs({ gap: a, tileSize: i }), n),
      ref: s,
      ...l,
      children: r
    }
  ) });
}), ys = ye({
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
}), oa = G(function({
  className: n,
  grow: a,
  basis: r,
  shrink: i,
  paddingX: l,
  paddingY: s,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: p,
  ...g
}, x) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(
        ys({
          paddingX: l,
          basis: r,
          paddingY: s,
          grow: a,
          shrink: i,
          inline: c,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: h,
          width: p
        }),
        n
      ),
      ref: x,
      ...g
    }
  );
}), ws = ye({
  base: "flex-row",
  variants: {
    gap: {
      ..._t
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Ns = ue.forwardRef(function({ className: n, gap: a, wrap: r, ...i }, l) {
  return /* @__PURE__ */ e(
    oa,
    {
      className: b(ws({ gap: a, wrap: r }), n),
      ref: l,
      ...i
    }
  );
}), Cs = ye({
  base: "flex-col",
  variants: {
    gap: {
      ..._t
    }
  },
  defaultVariants: {}
}), Is = G(function({ className: n, gap: a, children: r, ...i }, l) {
  return /* @__PURE__ */ e(
    oa,
    {
      className: b(Cs({ gap: a }), n),
      ref: l,
      ...i,
      children: r
    }
  );
}), vc = ge(
  {
    name: "Stack",
    type: "layout"
  },
  Is
), yc = ge(
  {
    name: "Split",
    type: "layout"
  },
  Ns
), wc = ge(
  {
    name: "AutoGrid",
    type: "layout"
  },
  vs
), ks = ({ children: t }) => {
  const { enabled: n } = Mn();
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        J.div,
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
}, Ss = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Fs = G(function({ header: n, children: a, action: r, summaries: i, alert: l, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Mn();
  W(() => {
    if (l && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, s]);
  const m = (p) => !!p && !(ue.isValidElement(p) && p.type === ue.Fragment && ue.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    It,
    {
      className: b(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(kt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(St, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(Ss, {}),
                /* @__PURE__ */ e(Pn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(we, { label: n.info, children: /* @__PURE__ */ e(
                U,
                {
                  icon: En,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(Je, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ e(_n, { text: l, level: "critical" }),
              s && /* @__PURE__ */ e(Ue, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ e(
                Mr,
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
            /* @__PURE__ */ e(ks, { children: /* @__PURE__ */ e(Wr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              H,
              {
                icon: f ? jr : Vr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Ft, { className: "flex h-full flex-col gap-4", children: [
          i && /* @__PURE__ */ e("div", { className: "flex flex-row", children: i.map((p, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, g)) }),
          ue.Children.toArray(a).filter(m).map((p, g) => /* @__PURE__ */ o(ue.Fragment, { children: [
            g > 0 && /* @__PURE__ */ e(gi, { bare: !0 }),
            p
          ] }, g))
        ] }),
        r && /* @__PURE__ */ e(Ur, { children: /* @__PURE__ */ e(H, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), As = ye({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Ls = G(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      It,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(kt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(St, { children: n.title }) : /* @__PURE__ */ e(z, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(Pn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            Ft,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && As({ height: a })),
              children: [...Array(4)].map((i, l) => /* @__PURE__ */ e(
                z,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][l]}`
                },
                l
              ))
            }
          )
        ]
      }
    );
  }
), Fe = ie(
  X("Widget", ae(Fs, Ls))
), me = Object.assign(
  G(function({ chart: n, summaries: a, ...r }, i) {
    return /* @__PURE__ */ e(Fe, { ref: i, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Fe.Skeleton
  }
), Os = ae(
  G(function({ canBeBlurred: n, ...a }, r) {
    const i = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, l = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      me,
      {
        ref: r,
        ...i,
        chart: /* @__PURE__ */ e(pi, { ...l, canBeBlurred: n })
      }
    );
  }),
  me.Skeleton
), Ps = X(
  "AreaChartWidget",
  Os
), Es = G(function(n, a) {
  return /* @__PURE__ */ e(
    me,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(bi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), _s = X(
  "BarChartWidget",
  ae(Es, me.Skeleton)
), Ds = ae(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(xi, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), Ts = X(
  "LineChartWidget",
  Ds
), zs = ae(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(vi, { ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), Rs = X(
  "PieChartWidget",
  zs
), Bs = ae(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(me, { ref: a, ...n, chart: null });
    }
  ),
  me.Skeleton
), $s = X(
  "SummariesWidget",
  Bs
), Ms = ae(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(yi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), Ws = X(
  "VerticalBarChartWidget",
  Ms
), Nc = ge(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Ps
), Cc = ge(
  {
    name: "BarChartWidget",
    type: "info"
  },
  _s
), Ic = ge(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Ts
), kc = ge(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Rs
), Sc = ge(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Ws
), Fc = ge(
  {
    name: "SummariesWidget",
    type: "info"
  },
  $s
), js = (t, n) => /* @__PURE__ */ o(
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
), Vs = G(js), Us = (t, n) => /* @__PURE__ */ o(
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
), Hs = G(Us), Gs = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Ks = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, qs = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ys = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Js = G(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: i, buttonAction: l, type: s }, c) {
    const d = Gs[s], f = Ks[s], u = qs[s], m = Ys[s];
    return /* @__PURE__ */ o(
      It,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(kt, { className: "-mt-0.5", children: /* @__PURE__ */ e(St, { children: n }) }),
          /* @__PURE__ */ o(Ft, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Vs, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ e(Hs, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                H,
                {
                  label: r,
                  icon: i,
                  variant: m,
                  onClick: l
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
), Ac = ie(
  X("ChartWidgetEmptyState", Js)
);
function Zs(t, n) {
  const a = j(null), r = j(null), [i, l] = D({
    visibleItems: [],
    overflowItems: []
  });
  Hr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const s = ne(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = ne(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const p = u[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), d = ne(
    (u, m) => {
      let h = 0, p = 0;
      for (let g = 0; g < u.length; g++) {
        const x = p + u[g];
        if (x > m + 30) break;
        p = x, p = s(
          p,
          g,
          u.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = ne(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    l(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (p) => p.visibleItems.length === h && p.overflowItems.length === t.length - h ? p : {
      visibleItems: t.slice(0, h),
      overflowItems: t.slice(h)
    });
  }, [t, c, d]);
  return W(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const at = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: i = 0,
  minSize: l,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Zs(n, i);
  return W(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", r),
      style: {
        minHeight: `${l}px`
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            ref: d,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${i}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ e("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${i}px` },
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
at.displayName = "VerticalOverflowList";
const Lc = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((i) => /* @__PURE__ */ e(yt, { ...i }, i.title)) }) : /* @__PURE__ */ e(
  at,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (i) => /* @__PURE__ */ e(yt, { ...i }, i.title)
  }
) : null, Xs = ({ onClick: t, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: b(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ e("div", { className: a, tabIndex: 1, children: n });
};
function Oc({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: i
}) {
  return /* @__PURE__ */ e(Xs, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        i && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ e(U, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const Qs = G(
  function({ content: n, label: a, color: r, ...i }, l) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: l, children: [
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
        "icon" in i && i.icon && /* @__PURE__ */ e("span", { className: b("flex", r), children: /* @__PURE__ */ e(U, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ e("span", { className: b("flex", r), children: /* @__PURE__ */ e(Xe, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Pc = G(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: i, color: l, ...s }) => /* @__PURE__ */ e(
          Qs,
          {
            label: r,
            content: i,
            color: l,
            ...s
          },
          `${r}-${i}`
        ))
      }
    );
  }
), eo = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const i = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: i, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: i, children: r });
};
function Ec({
  id: t,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: i,
  withPointerCursor: l = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    eo,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(Gr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(Kr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          On,
          {
            avatars: r,
            remainingCount: i,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const to = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function cn({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: i
}) {
  const l = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(to, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: l, children: [
    /* @__PURE__ */ e(kn, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const no = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function wt({
  id: t,
  title: n,
  alert: a,
  rawTag: r,
  count: i,
  icon: l,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(no, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ e(
        U,
        {
          icon: l,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ e(
        U,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(_n, { ...a }),
      r && /* @__PURE__ */ e(Re, { ...r }),
      !!i && /* @__PURE__ */ e(Je, { value: i })
    ] })
  ] });
}
function _c({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: i
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((l) => /* @__PURE__ */ e(cn, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ e(
    at,
    {
      items: t,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ e(cn, { ...l, onClick: a }, l.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function Dc({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((l) => /* @__PURE__ */ e(wt, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ e(
    at,
    {
      items: t,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ e(wt, { ...l, onClick: r }),
      minSize: a
    }
  );
}
const ao = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Tc = G(
  function({ title: n, titleValue: a, titleTooltip: r, list: i }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            we,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(U, { icon: En, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      i.map((s) => /* @__PURE__ */ e(ao, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function zc({
  title: t,
  subtitle: n,
  data: a,
  helpText: r,
  legend: i = !1,
  hideTooltip: l = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      wi,
      {
        data: a,
        legend: i,
        hideTooltip: l
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: i ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: b(
          "text-f1-foreground",
          i ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const ca = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, ro = ({
  data: t = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: i = !0
}) => {
  const s = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!i || r === void 0) return;
    const u = ca(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), g = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${g}` : `${n.overtime} ${g}`;
  })(), f = Ie[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, dt = "--:--", io = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: Ie.empty
    };
  if (!n)
    return {
      value: 1,
      color: Ie.empty
    };
}, lo = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, i = ca(
    n,
    a
  ), l = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = r || (i ?? 0) < 0 ? void 0 : io(
    i ?? 0,
    l
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - p) / l;
        return c -= p, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: p / l + x,
            color: Ie.overtime
          }
        ] : [
          ...u,
          {
            value: p / l,
            color: Ie.overtime
          },
          {
            value: x,
            color: Ie[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: Ie.empty
  }), f;
}, so = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, i = t.at(-1), l = r ? zt(r) : dt, s = n === void 0 || n > 0 ? dt : i ? zt(i.to) : dt, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: l,
    secondaryLabel: s,
    time: m
  };
}, Ie = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function oo({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = lo({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: i, secondaryLabel: l, time: s } = so({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(Ni, { width: 156, height: 156, children: /* @__PURE__ */ e(
      Ci,
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
          qr,
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
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: i }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l })
    ] })
  ] });
}
function co({
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
        a && /* @__PURE__ */ e(U, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ e(
          "span",
          {
            className: b(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? n
          }
        ),
        /* @__PURE__ */ e(U, { icon: Yr })
      ]
    }
  );
}
function Rc({
  trackedMinutes: t,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: i,
  locations: l,
  canShowLocation: s = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: p = !0,
  canSeeGraph: g = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: N = !0,
  projectSelectorElement: E,
  breakTypeName: R
}) {
  const { status: _, statusText: O, subtitle: L, statusColor: V } = ro({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), B = _ === "clocked-out", w = m?.map(($) => ({
    value: $.id,
    label: $.duration ? `${$.name} · ${$.duration}` : $.name,
    description: $.description,
    tag: $.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, I] = D(!1), A = () => {
    if (w.length > 1)
      S || I(!0);
    else {
      const $ = w?.[0]?.value;
      u?.($);
    }
  }, M = ($) => {
    h?.($), I(!1), u?.($);
  }, v = B && l.length && !c && s, C = l.find(($) => $.id === i), k = l.map(($) => ({
    value: $.id,
    label: $.name,
    icon: $.icon
  })), P = _ === "break", [re, te] = D(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: O }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                J.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: V
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
                    backgroundColor: V
                  }
                }
              )
            ] })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          _ === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            H,
            {
              onClick: d,
              label: r.clockIn,
              icon: Rt
            }
          ) }),
          _ === "clocked-in" && /* @__PURE__ */ o(Z, { children: [
            p && /* @__PURE__ */ e(Z, { children: w.length > 1 && h ? /* @__PURE__ */ e(
              He,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: M,
                open: S,
                onOpenChange: I,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  H,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Bt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              H,
              {
                onClick: A,
                label: r.break,
                variant: "neutral",
                icon: Bt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: $t
              }
            )
          ] }),
          _ === "break" && /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ e(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: $t,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              H,
              {
                onClick: d,
                label: r.resume,
                icon: Rt
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ e(
        oo,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(Z, { children: [
      /* @__PURE__ */ e(
        He,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: i,
          options: k,
          onChange: y,
          open: re,
          onOpenChange: te,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            co,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      N && E
    ] }) : /* @__PURE__ */ o(Z, { children: [
      s && C && /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(Re, { text: C.name, icon: C.icon }) }),
      N && E,
      P && R && /* @__PURE__ */ e(Re, { text: R })
    ] }) })
  ] }) });
}
const uo = {
  done: Xr,
  "in-progress": Zr,
  todo: Jr
}, fo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function mo({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const i = () => {
    a?.(t);
  }, l = q(() => {
    if (!r)
      return uo[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    wt,
    {
      id: t.id,
      title: t.text,
      icon: l,
      iconClassName: fo[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: Qr
      } : void 0,
      count: t.counter,
      onClick: i
    }
  );
}
function Bc({
  tasks: t,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: i = "No tasks assigned"
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
    ).map(({ id: u, text: m, badge: h, counter: p }) => ({
      id: u,
      text: m,
      badge: h,
      counter: p,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: i }) : s.slice(0, r).map((d) => /* @__PURE__ */ e(
    mo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var ho = Object.defineProperty, go = Object.defineProperties, po = Object.getOwnPropertyDescriptors, qe = Object.getOwnPropertySymbols, da = Object.prototype.hasOwnProperty, ua = Object.prototype.propertyIsEnumerable, dn = (t, n, a) => n in t ? ho(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, fe = (t, n) => {
  for (var a in n || (n = {})) da.call(n, a) && dn(t, a, n[a]);
  if (qe) for (var a of qe(n)) ua.call(n, a) && dn(t, a, n[a]);
  return t;
}, rt = (t, n) => go(t, po(n)), bo = (t, n) => {
  var a = {};
  for (var r in t) da.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && qe) for (var r of qe(t)) n.indexOf(r) < 0 && ua.call(t, r) && (a[r] = t[r]);
  return a;
}, xo = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, vo = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), yo = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = fe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, wo = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = fe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, No = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let i = fe({}, r);
  return i.left = n.left + t.width, xo(i) || vo({ usedSpot: i, spotsList: a }) ? null : i;
}, Co = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((i, l, s) => {
  if (i === a) return No({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = yo({ position: n, spot: i, stone: r });
  return c || wo({ position: n, stone: r, spot: i }) || i;
});
function Io(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let i = n[a];
    if (t(i)) return i;
  }
  return null;
}
var ko = (t, n) => n.filter(t), So = (t, n) => [...n].sort(t), Fo = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, Ao = (t) => So(Fo, t), Lo = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
  let i = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (i.bottom = n.bottom);
  for (let l = 0, s = t.length; l < s; l += 1) {
    let c = t[l];
    if (i.left < c.left && i.top < c.top) {
      i.right = c.left;
      break;
    }
  }
  return i;
}, Oo = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, Po = ({ availableSpots: t, stone: n }) => Io((a) => Oo(a, n), t);
function Eo({ stone: t, availableSpots: n, containerSize: a }) {
  let r = Po({ availableSpots: n, stone: t }), i = { left: r.left, top: r.top }, l = Lo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), s = [...n, l], c = Co({ spots: s, position: i, optimalSpot: r, stone: t });
  return s = [...ko(Boolean, c)], s = Ao(s), { position: i, availableSpots: s };
}
var _o = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, i = [], l = [{ top: 0, left: 0, right: n }];
  for (let s of t) {
    let c = Eo({ availableSpots: l, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), i.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: i, containerHeight: r };
}, Do = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), To = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: l, containerHeight: s, stones: c, availableSpots: d }, f] = D({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let h = Do(t.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let g = _o({ stones: h, containerSize: p });
    f(rt(fe({}, g), { stones: h }));
  }, [a, t, n, r, i]), { positions: l, containerHeight: s, stones: c, availableSpots: d };
}, zo = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), Ro = ({ transition: t, transitionDuration: n }) => t ? { transition: zo(n)[t] } : null, Bo = (t) => t ? rt(fe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, $o = ({ style: t, position: n, transition: a, transitionDuration: r }) => fe(fe(rt(fe({}, t), { position: "absolute" }), Bo(n)), Ro({ transition: a, transitionDuration: r }));
function Mo(t, n, a) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, i);
    }, n);
  };
}
var Wo = () => {
  let [t, n] = D(), a = j(Mo(n, 300));
  return W(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, jo = (t) => {
  let [n, a] = D(null);
  return W(() => {
    let r = new ResizeObserver((i) => {
      for (let l of i) a(l.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Vo = (t) => {
  var n = t, { children: a, style: r, transition: i = !1, transitionDuration: l = 500, transitionStep: s = 50 } = n, c = bo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = j([]), f = j(null), u = Wo(), m = jo(f), { positions: h, containerHeight: p } = To({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), g = fe({ minHeight: p ?? 0, position: "relative" }, r);
  return e("div", rt(fe({ ref: f, style: g }, c), { children: Rn.map(a, (x, y) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let N = { style: $o({ style: x.props.style, position: h[y], transition: i, transitionDuration: l }), ref: (E) => d.current[y] = E };
    return zn(x, fe(fe({}, x.props), N));
  }) }));
};
const Uo = { sm: 340, md: 480, lg: 640 }, un = G(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const i = Uo[a], [l, s] = D(), c = Rn.toArray(n), d = j(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, i]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: l === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Vo, { children: c.map((f, u) => /* @__PURE__ */ e(
      "div",
      {
        style: {
          width: `${Math.floor(1 / l * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: f
      },
      u
    )) }, l) }) }) });
  }
), Ho = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], $c = ae(un, () => /* @__PURE__ */ e(Dn, { children: /* @__PURE__ */ e(un, { children: Ho.map((t, n) => /* @__PURE__ */ e(Fe.Skeleton, { height: t }, n)) }) })), fn = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), Mc = ae(
  G(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ye, { ref: a, showBar: !1, children: /* @__PURE__ */ e(fn, { children: n }) });
  }),
  () => /* @__PURE__ */ e(Dn, { orientation: "horizontal", children: /* @__PURE__ */ o(fn, { children: [
    /* @__PURE__ */ e(Fe.Skeleton, {}),
    /* @__PURE__ */ e(Fe.Skeleton, {}),
    /* @__PURE__ */ e(Fe.Skeleton, {})
  ] }) })
);
function Go({
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
    Ii,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Wc = ie(
  X("WidgetEmptyState", Go)
), fa = G(
  ({ title: t, children: n }, a) => (ei(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
fa.displayName = "WidgetSection";
const jc = ie(
  X("WidgetSection", fa)
), Vc = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const i = ti(), l = window.location.pathname, s = q(() => n?.length ? n.includes(l) : a?.length ? !a.includes(l) : !0, [l, n, a]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return s ? r : (i && console.error(c), null);
}, Uc = ie(
  ge(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ye
  )
);
export {
  ac as ActivityItemList,
  Sl as ActivityItemListSkeleton,
  Qi as AiPromotionChat,
  el as AiPromotionChatProvider,
  oc as ApplicationFrame,
  Id as AreaChart,
  Nc as AreaChartWidget,
  wc as AutoGrid,
  Fr as Badge,
  kd as BarChart,
  Cc as BarChartWidget,
  kl as BaseActivityItemList,
  Sd as BaseBanner,
  Pl as BaseCelebration,
  Wl as BaseCommunityPost,
  Kc as BaseTabs,
  qc as BreadcrumbSelect,
  Oi as Breadcrumbs,
  yt as CalendarEvent,
  Lc as CalendarEventList,
  Fd as CardSelectableContainer,
  ii as Carousel,
  Ad as CategoryBarChart,
  zc as CategoryBarSection,
  rc as Celebration,
  El as CelebrationSkeleton,
  Ac as ChartWidgetEmptyState,
  Yc as Chip,
  Rc as ClockInControls,
  Ld as ComboChart,
  lc as CommunityPost,
  jl as CommunityPostSkeleton,
  es as CompanySelector,
  Je as Counter,
  $c as Dashboard,
  cc as DaytimePage,
  Jc as DetailsItem,
  Zc as DetailsItemsList,
  Od as Dialog,
  Ae as Dropdown,
  nc as EntitySelect,
  Pd as F0ActionBar,
  Ed as F0AiBanner,
  kn as F0AvatarModule,
  Xc as F0ButtonToggle,
  ec as F0Callout,
  Qc as F0CardHorizontal,
  ed as F0FileItem,
  _d as F0NotesTextEditor,
  Dd as F0NotesTextEditorSkeleton,
  Td as F0NumberInput,
  gr as F0RichTextDisplay,
  zd as F0RichTextEditor,
  td as F0SearchInput,
  Rd as F0SegmentedControl,
  Bd as F0TableOfContent,
  $d as F0TextAreaInput,
  nd as F0TextInput,
  tc as F0VersionHistory,
  Md as F1SearchBox,
  Wd as FILE_TYPES,
  ad as FileItem,
  ic as HighlightBanner,
  Pc as IndicatorsList,
  jd as Input,
  Vd as Item,
  Ud as ItemSectionHeader,
  Hd as LineChart,
  Ic as LineChartWidget,
  hc as Menu,
  rd as MobileDropdown,
  Gd as NotesTextEditor,
  Kd as NotesTextEditorSkeleton,
  qd as NumberInput,
  dc as OmniButton,
  bc as OneApprovalHistory,
  id as OneCalendar,
  ld as OneCalendarInternal,
  Yd as OneDataCollection,
  Jd as OneDateNavigator,
  Ii as OneEmptyState,
  Zd as OnePagination,
  sc as OnePersonListItem,
  Vc as OneRestrictComponent,
  uc as Page,
  Qo as PageHeader,
  Ot as PageHeaderNavigationContext,
  Zo as PageHeaderNavigationProvider,
  Ba as PageNavigation,
  Xd as PieChart,
  kc as PieChartWidget,
  ks as PrivateBox,
  Qd as ProgressBarChart,
  eu as RadarChart,
  Tl as Reactions,
  tu as ResourceHeader,
  sd as RichTextDisplay,
  nu as RichTextEditor,
  Uc as ScrollArea,
  gc as SearchBar,
  au as SectionHeader,
  He as Select,
  Tr as Shortcut,
  pc as Sidebar,
  fc as SidebarFooter,
  mc as SidebarHeader,
  bn as Spinner,
  yc as Split,
  vc as Stack,
  Fc as SummariesWidget,
  od as Switch,
  cd as Tabs,
  dd as TabsSkeleton,
  Bc as TasksList,
  ru as Textarea,
  ud as ToggleGroup,
  fd as ToggleGroupItem,
  we as Tooltip,
  Tc as TwoColumnsList,
  iu as UPLOAD_INPUT_ID,
  lu as VerticalBarChart,
  Sc as VerticalBarChartWidget,
  bt as VirtualList,
  md as WeekStartDay,
  hd as Weekdays,
  Fe as Widget,
  Ec as WidgetAvatarsListItem,
  Wc as WidgetEmptyState,
  Oc as WidgetHighlightButton,
  _c as WidgetInboxList,
  cn as WidgetInboxListItem,
  jc as WidgetSection,
  Dc as WidgetSimpleList,
  wt as WidgetSimpleListItem,
  Mc as WidgetStrip,
  su as actionBarStatuses,
  ou as buttonToggleSizes,
  cu as buttonToggleVariants,
  gd as chipVariants,
  du as downloadAsCSV,
  pd as f0FileItemSizes,
  uu as generateCSVContent,
  bd as getGranularityDefinition,
  xd as getGranularityDefinitions,
  vd as getGranularitySimpleDefinition,
  yd as granularityDefinitions,
  wd as modules,
  fu as predefinedPresets,
  Nd as rangeSeparator,
  on as seedFromStorage,
  mu as selectSizes,
  et as useAiPromotionChat,
  hu as useDataCollectionData,
  xc as useDataCollectionItemNavigation,
  ui as useDataCollectionSource,
  gu as useExportAction,
  pu as useInfiniteScrollPagination,
  Hi as usePageHeaderItemNavigation,
  Xo as usePageHeaderNavigation,
  Ee as useSidebar
};
