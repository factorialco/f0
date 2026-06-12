import { g as ha, B as ga, h as pa, i as ba, j as _t, k as Re, l as xa, m as p, n as Y, o as ve, u as ce, T as va, p as ya, q as wa, R as Na, r as Ca, s as de, t as Ia, v as wt, w as dt, x as je, A as Se, y as ka, z as Sa, C as U, E as Fa, G as Aa, H as be, J as fn, K as La, L as Oa, M as H, N as mn, S as D, O as Ne, Q as Ea, U as Pa, V as _a, W as Da, X as Ta, Y as Fe, Z as hn, _ as za, $ as ye, a0 as Ve, a1 as Ra, d as gn, a2 as ke, a3 as Ba, a4 as pn, a5 as se, a6 as Q, a7 as bn, a8 as xn, a9 as $a, aa as vn, ab as pe, ac as re, ad as Wa, ae as Ma, af as ja, ag as Va, ah as xe, ai as qe, aj as Ua, ak as Ha, al as Ga, am as Ka, an as Ye, ao as yn, ap as qa, aq as Ya, ar as Ja, as as Ue, at as Za, au as wn, av as Xa, aw as Qa, ax as er, ay as tr, az as nr, aA as ar, aB as rr, aC as ir, aD as ut, aE as Nn, aF as ft, aG as Cn, aH as lr, aI as sr, aJ as or, aK as cr, aL as dr, aM as Je, aN as Ze, aO as mt, aP as In, aQ as ur, aR as Nt, aS as fr, aT as mr, aU as hr, aV as Te, aW as gr, aX as pr, aY as Be, aZ as Dt, a_ as ht, a$ as br, b0 as xr, a as vr, b as yr, b1 as kn, b2 as wr, f as Nr, F as Cr, b3 as Ir, b4 as Sn, b5 as kr, b6 as Fn, b7 as An, b8 as Sr, b9 as Fr, ba as Ar, bb as Lr, bc as Or, bd as Er, be as Pr, bf as _r, bg as Dr, bh as Ln, bi as Tr, bj as zr, bk as ge, bl as Ct, bm as It, bn as kt, bo as On, bp as St, bq as En, br as Pn, bs as Rr, bt as Br, bu as $r, bv as Wr, bw as Mr, bx as jr, by as Vr, bz as Ur, bA as Tt, bB as Hr, bC as Gr, bD as zt, bE as Rt, bF as Bt, bG as Kr, bH as qr, bI as Yr, bJ as Jr, bK as _n, bL as Zr, bM as Xr } from "./F0CanvasPanel-Dlqi21My.js";
import { bY as Hc, bX as Gc, c8 as Kc, bU as qc, bV as Yc, bN as Jc, bO as Zc, bP as Xc, c9 as Qc, bW as ed, c4 as td, c5 as nd, bQ as ad, b_ as rd, bZ as id, bR as ld, bS as sd, c6 as od, ca as cd, c7 as dd, c3 as ud, c0 as fd, c2 as md, b$ as hd, bT as gd, c1 as pd } from "./F0CanvasPanel-Dlqi21My.js";
import { jsx as e, jsxs as o, Fragment as X } from "react/jsx-runtime";
import ue, { forwardRef as G, useRef as M, useTransition as Qr, useState as P, useLayoutEffect as Dn, useId as gt, useContext as Ae, createContext as Xe, useEffect as W, useCallback as ae, useMemo as K, Fragment as ei, isValidElement as ti, cloneElement as Tn, Children as zn } from "react";
import { C as ni, P as ai, a as Rn, M as ri, p as ii, b as li, R as $t, c as Bn, u as si, d as oi, e as ci, f as di, g as ui, h as fi, i as $n, S as mi, A as hi, B as gi, L as pi, j as bi, V as xi, k as vi, l as yi, m as wi, O as Ni } from "./useDataCollectionSource-B91FEi8b.js";
import { s as xd, t as vd, q as yd, I as wd, v as Nd, D as Cd, a9 as Id, H as kd, r as Sd, T as Fd, F as Ad, Z as Ld, W as Od, K as Ed, af as Pd, N as _d, _ as Dd, $ as Td, w as zd, ab as Rd, ac as Bd, aa as $d, ad as Wd, Q as Md, a0 as jd, a6 as Vd, a8 as Ud, x as Hd, z as Gd, E as Kd, X as qd, ae as Yd, Y as Jd, U as Zd, y as Xd, G as Qd, n as eu, o as tu, a2 as nu, a3 as au, a7 as ru, J as iu, a4 as lu, a1 as su, a5 as ou } from "./useDataCollectionSource-B91FEi8b.js";
const Ci = ha("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Wn = G(({ className: t, items: n }, a) => /* @__PURE__ */ e(ga, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(pa, {}),
  /* @__PURE__ */ e(ba, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Wn.displayName = "CollapsedBreadcrumbItem";
const Ft = 50, Ii = 120, He = 8;
function ki(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let i = t - r - He, l = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, l = c, s++;
  }
  if (s < a)
    for (i -= Ft; i < 0 && s > 1; )
      i += n[l], l++, s--;
  return Math.max(2, s);
}
function Wt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + He;
    default:
      return t[0] + Ft + t[t.length - 1] + He;
  }
}
function Si(t, n) {
  return Ii * t + (n ? Ft : 0) + He;
}
function Fi(t, n, a = []) {
  if (!t) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Si(
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
  const l = ki(t, i);
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
function Ai({ breadcrumbs: t, append: n }) {
  const a = M(null), r = M(null), [, i] = Qr(), [l, s] = P(null), c = (l?.collapsedItems || []).length > 0;
  return Dn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const g = a.current?.clientWidth ?? null, b = Array.from(f.children);
      i(() => {
        const h = Fi(
          g,
          t,
          b
        );
        s(h);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || l && !l.headItem ? /* @__PURE__ */ e(_t, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    _t,
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
        l && l.headItem && /* @__PURE__ */ o(xa, { children: [
          /* @__PURE__ */ e(
            Re,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${l.headItem.id}`
          ),
          c && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ e(
              Wn,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((d, f) => /* @__PURE__ */ e(
              Re,
              {
                item: d,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(X, { children: l.tailItems.map((d, f) => /* @__PURE__ */ e(
            Re,
            {
              item: d,
              isLast: f === l.tailItems.length - 1,
              isFirst: !1,
              children: f === l.tailItems.length - 1 ? n : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const Li = ve({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Mt = [
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
], Oi = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...i
}, l) => {
  const s = gt(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: g,
    ...b
  } = i;
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(Li({ size: n }), g),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        Y.svg,
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
            ...b.style
          },
          ...(({ style: h, ...y }) => y)(b),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Mt.map((h) => /* @__PURE__ */ e("clipPath", { id: `${s}-${h.id}`, children: /* @__PURE__ */ e("path", { d: h.path }) }, h.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${s}-circle)`, children: Mt.map((h) => /* @__PURE__ */ e(
              Y.foreignObject,
              {
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
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? h.delay : 0,
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
                    delay: t ? h.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${h.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: h.transformOrigin,
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
              h.id
            )) })
          ]
        }
      )
    }
  );
}, Mn = G(Oi), jn = Xe(null), Ei = 15, Pi = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [i, l] = P(n), [s, c] = P(!1), [d, f] = P(!0), [u, m] = P(
    Ei
  ), g = M(null), b = (y) => {
    g.current = y;
  }, h = () => {
    g.current && g.current();
  };
  return W(() => {
    l(n);
  }, [n]), W(() => {
    if (s && a?.(), !s) {
      const y = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!y);
    }
  }, [s, a]), /* @__PURE__ */ e(
    jn.Provider,
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
        clear: h,
        setClearFunction: b
      },
      children: t
    }
  );
}, Ce = () => {
};
function Qe() {
  const t = Ae(jn);
  return t === null ? {
    enabled: !1,
    setEnabled: Ce,
    open: !1,
    setOpen: Ce,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ce,
    setAutoClearMinutes: Ce,
    clear: Ce,
    setClearFunction: Ce,
    autoClearMinutes: null
  } : t;
}
const Vn = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: i } = Qe(), l = ce(), [s, c] = P(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(va, { children: /* @__PURE__ */ o(ya, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(wa, { asChild: !0, children: /* @__PURE__ */ e(
      Y.div,
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
          Na,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: i,
            "aria-label": i ? l.ai.closeChat : l.ai.openChat,
            className: p(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              de(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Ca,
              {
                className: p(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Mn,
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
    !i && /* @__PURE__ */ e(Ia, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, jt = "one_sidebar_locked", Un = Xe(void 0);
function Le() {
  const t = Ae(Un);
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
function _i({ children: t }) {
  const { currentPath: n } = wt(), [a, r] = P(!1), [i, l] = P(!1), s = a ? je.xl : je.md, c = dt(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = P(() => {
    const F = localStorage.getItem(jt);
    return F !== null ? !!F : !0;
  }), [u, m] = P(!1), [g, b] = P(
    null
  ), h = ae(
    ({ isInvokedByUser: F } = {
      isInvokedByUser: !0
    }) => {
      l(F ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), y = ae(
    (F) => {
      c || (F.clientX < 32 && m(!0), F.clientX > 280 && m(!1));
    },
    [c, m]
  ), N = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return W(() => {
    m(!1);
  }, [n]), W(() => {
    i && localStorage.setItem(jt, d ? "1" : "");
  }, [d, i]), W(() => () => {
    b(N);
  }, [N]), /* @__PURE__ */ e(
    Un.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: N,
        toggleSidebar: h,
        prevSidebarState: g,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: y, className: "h-screen w-screen", children: t })
    }
  );
}
const Vt = Y.create(U), Ut = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Di = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, i] = P(!1), l = () => {
    i(!0), n(!t);
  };
  return /* @__PURE__ */ e(Se, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: p(
        "flex h-6 w-6 items-center justify-center rounded",
        de()
      ),
      onClick: l,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Vt,
        {
          size: "sm",
          icon: ka,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Ut,
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
        Vt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Sa,
          className: "outline-none",
          variants: Ut,
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
}, Ti = ({
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
  const [m, g] = P("idle"), [b, h] = P(null), [y, ...N] = b ?? [], [F, O] = P(!1);
  W(() => {
    h(null), g("idle");
  }, [t]);
  const z = ae(async () => {
    try {
      g("fetching");
      const _ = await a();
      g("idle"), h(_);
    } catch {
      g("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Fa,
    {
      open: F,
      onOpenChange: async (_) => {
        O(_), _ && b === null && z(), s(_);
      },
      children: [
        /* @__PURE__ */ e(Aa, { asChild: !0, children: /* @__PURE__ */ e(
          be,
          {
            variant: "outline",
            icon: fn,
            hideLabel: !0,
            label: n,
            pressed: F,
            append: f && /* @__PURE__ */ e(At, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(La, { children: /* @__PURE__ */ o(
          Oa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Bi, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Mi, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && b !== null && b.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e($i, { ...i, buttonUrl: r }) }),
                m === "idle" && b !== null && b.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    zi,
                    {
                      ...y,
                      onClick: d
                    }
                  ),
                  b.length > 1 && /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: N.map((_, E) => /* @__PURE__ */ e(
                    Ri,
                    {
                      ..._,
                      onClick: d
                    },
                    E
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  Wi,
                  {
                    ...l,
                    onClick: () => {
                      z();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                ji,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => O(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, zi = ({
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
        Ne,
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
              Pa,
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
              r && /* @__PURE__ */ e(At, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Ri = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: i
}) => {
  const l = p("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(_a, { asChild: !0, className: l, onClick: i, children: /* @__PURE__ */ e(
    Ne,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: p(
        l,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(At, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Bi = ({
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
          icon: mn,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Hn = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: i
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: p(
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
] }) }), $i = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Hn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(U, { icon: fn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(Ne, { href: a, children: /* @__PURE__ */ e(H, { label: n }) })
  }
), Wi = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Hn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(U, { icon: Da, size: "lg" }),
    button: /* @__PURE__ */ e(H, { variant: "outline", label: a, onClick: r })
  }
), Mi = () => /* @__PURE__ */ e(
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
), At = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: p("size-2 rounded bg-f1-background-selected-bold", t)
  }
), ji = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [i, l] = P(t);
  W(() => {
    l(t);
  }, [t]);
  const s = () => {
    l(!1), n && n();
  }, c = (d) => {
    l(!1), r(), d && d();
  };
  return i && /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ e(Ta, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          H,
          {
            variant: "ghost",
            icon: Fe,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        ni,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            ai,
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
}, Lt = Xe(null), Yo = Lt.Provider;
function Jo() {
  return Ae(Lt);
}
function Vi(t, n) {
  const a = n?.getItemTitle, r = t !== null, i = t?.previousItem ?? null, l = t?.nextItem ?? null, s = t?.previousItemUrl ?? null, c = t?.nextItemUrl ?? null, d = t?.absoluteIndex ?? null, f = t?.totalItems;
  return K(() => {
    if (!r) return null;
    const u = d !== null && f !== void 0 ? { current: d + 1, total: f } : void 0, m = s !== null ? {
      url: s,
      title: (i !== null ? a?.(i) : void 0) ?? "Previous"
    } : void 0, g = c !== null ? {
      url: c,
      title: (l !== null ? a?.(l) : void 0) ?? "Next"
    } : void 0;
    return !m && !g && !u ? null : { previous: m, next: g, counter: u };
  }, [
    r,
    i,
    l,
    s,
    c,
    d,
    f,
    a
  ]);
}
function Zo({
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
  const { sidebarState: u, toggleSidebar: m } = Le(), g = Ae(Lt), b = l ?? g ?? void 0, h = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], y = n && Object.keys(n).length !== 0, N = i && a.length > 0, F = !i && r.length > 0, O = !i && !!s?.isVisible, z = h[h.length - 1], _ = "navigation" in window ? window.navigation : null, E = i && (_ ? !!_.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(Se, { children: !i && u !== "locked" && /* @__PURE__ */ e(
            Y.div,
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
                  icon: hn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                "flex flex-grow items-center gap-2",
                E && "justify-center"
              ),
              children: [
                i && E && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  H,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: za,
                    onClick: () => window.history.back()
                  }
                ) }),
                E || N ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in z ? /* @__PURE__ */ e(D, { className: "h-4 w-24" }) : z.label }) : /* @__PURE__ */ e(
                  Ai,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      Di,
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
          !i && y && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(ye, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ve,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(Ve, { text: n.text, variant: n.variant }) }),
          !i && y && (b || F || O) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          b && /* @__PURE__ */ e(Ra, { ...b }),
          b && F && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (O || F) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Ti,
              {
                ...s,
                currentModule: t.name
              }
            ) }),
            F && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((L, j) => /* @__PURE__ */ e(Ui, { action: L }, j)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              gn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Vn, {})
          ] })
        ] })
      ]
    }
  );
}
function Ui({ action: t }) {
  const n = M(null), [a, r] = P(!1), i = t.variant ?? "outline";
  return "actions" in t ? /* @__PURE__ */ e(ke, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    be,
    {
      size: "md",
      variant: i,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    be,
    {
      size: "md",
      variant: i,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    Ne,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        be,
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
const Hi = () => {
  const t = ce();
  return /* @__PURE__ */ o(
    Y.div,
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
          be,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: Ba,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Gi = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = M(null);
  W(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, Ki = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: i
  } = Qe();
  return Gi({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ e(Se, { children: n && /* @__PURE__ */ e(
    Y.div,
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
        Y.div,
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
}, qi = ({ action: t, onClose: n }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(pn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        be,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, Yi = ({
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
  Pi,
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
), Ji = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: l,
    setOpen: s,
    onHide: c
  } = Qe(), d = () => {
    s(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Ki, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      be,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Fe,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(Mn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      i?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(bn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      l?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, u) => /* @__PURE__ */ e(
        qi,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(Hi, {}) })
  ] }) : null;
}, Zi = se(
  Q("AiPromotionChat", Ji)
), Xi = se(
  Q("AiPromotionChatProvider", Yi)
), Gn = ve({
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
}), Ht = {
  positive: vn,
  warning: $a,
  info: xn
}, Gt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Qi = G(
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
        className: Gn({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center gap-2",
                  Gt[l]
                ),
                children: [
                  Ht[l] && /* @__PURE__ */ e(U, { icon: Ht[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    pe,
                    {
                      className: Gt[l] || "font-medium",
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
                icon: Fe,
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
), el = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Gn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(D, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
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
), Kn = G(
  (t, n) => /* @__PURE__ */ e(Qi, { ref: n, ...t })
), tl = ({ compact: t, variant: n }) => /* @__PURE__ */ e(el, { compact: t, variant: n });
Kn.displayName = "F0Callout";
const Xo = re(
  se(Kn),
  tl
);
function nl({
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
        de("focus-visible:ring-inset")
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
function al({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: i } = Ma(), l = ja(i), s = Va(n, "PPPp", { locale: l }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        de("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(pe, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            xe,
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
function rl({
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
        /* @__PURE__ */ e(qe, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            nl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ e(
            al,
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
const Qo = se(
  Q("F0VersionHistory", rl)
), qn = G(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: i }, l) => {
    const s = ue.useRef(null);
    ue.useImperativeHandle(
      l,
      () => s.current,
      []
    );
    const c = Ua({
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
                children: d ? i(d) : /* @__PURE__ */ e(X, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
qn.displayName = "VirtualList";
const pt = Q("VirtualList", qn), Yn = ({
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
  const i = new RegExp(`(${n})`, "gi"), l = t.split(i);
  return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: l.map(
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
function et(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(t);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && n?.();
}
function tt(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(t);
  i > 0 ? r[i - 1].focus() : r.length > 0 && n?.();
}
const il = ({
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
  const m = t.name.split(" "), g = m[0] || "", b = m.slice(1).join(" "), h = (N) => {
    N.preventDefault(), N.stopPropagation(), !f && (n ? r(t) : a(t));
  }, y = (N) => {
    if (N.key === "Enter" || N.key === " ") {
      if (N.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else N.key === "ArrowDown" ? et(N.currentTarget, s) : N.key === "ArrowUp" && tt(N.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: p(
        i,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          xe,
          {
            src: t.avatar,
            firstName: g,
            lastName: b,
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
              Yn,
              {
                text: t.name,
                search: l,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          yn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: h,
            onKeyDown: y,
            className: p(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ e(
          U,
          {
            className: "text-f1-icon-selected",
            icon: vn,
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
  hideLine: g = !1,
  showGroupIcon: b = !1,
  singleSelector: h = !1,
  disabled: y = !1,
  hiddenAvatar: N = !1
}) => {
  const [F, O] = P(!1);
  if (!t)
    return /* @__PURE__ */ e(
      il,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: i,
        onSelect: s,
        onRemove: c,
        singleSelector: h,
        goToFirst: f,
        goToLast: u,
        disabled: y,
        hiddenAvatar: N
      }
    );
  const z = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && h)
      d(!n);
    else if (L.key === "Enter") {
      if (y) return;
      !i || l ? s(r) : i && c(r);
    } else L.key === "ArrowDown" ? et(L.currentTarget, f) : L.key === "ArrowUp" && tt(L.currentTarget, u);
  }, _ = () => {
    if (F)
      d(!n), O(!1);
    else {
      if (y || h) return;
      i ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const E = i || l;
  return /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        H,
        {
          hideLabel: !0,
          icon: n ? Ha : Ga,
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
            O(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            b && /* @__PURE__ */ e(
              U,
              {
                icon: Ka,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                Yn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(Ye, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              yn,
              {
                checked: E,
                disabled: y,
                onClick: _,
                onKeyDown: z,
                indeterminate: l,
                onPointerDown: (L) => {
                  L.stopPropagation(), O(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: p("ml-auto", h ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !g && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
We.displayName = "EntitySelectListItem";
const Kt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? et(l.currentTarget, a) : l.key === "ArrowUp" && tt(l.currentTarget, r);
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
        H,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: qa,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: p("line-clamp-1"), children: t }) }) })
    ]
  }
) }), De = ({ primaryAction: t, secondaryActions: n }) => {
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
    Ya,
    {
      items: r,
      value: t.label,
      disabled: l,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, ll = ({
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
  let b, h, y = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || i
  } : void 0, N = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !l
  } : void 0;
  return y || (y = N, N = void 0), m && u ? (b = /* @__PURE__ */ e(
    De,
    {
      primaryAction: y,
      secondaryActions: N ? [N] : []
    }
  ), h = /* @__PURE__ */ e(
    De,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? b = /* @__PURE__ */ e(
    De,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (b = /* @__PURE__ */ e(De, { primaryAction: y, secondaryActions: [] }), N && (h = /* @__PURE__ */ e(De, { primaryAction: N, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    b,
    h
  ] }) });
}, sl = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: i,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(U, { icon: Ci, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), et(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), tt(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: Ja,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), it = 384, lt = 36, ol = 37, qt = 1, Yt = 200, Jt = '[data-avatarname-navigator-element="true"]', cl = ({
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
  selectedEntities: g = [],
  onGroupChange: b,
  onToggleExpand: h,
  searchPlaceholder: y,
  selectAllLabel: N,
  clearLabel: F,
  notFoundTitle: O,
  notFoundSubtitle: z,
  className: _,
  actions: E,
  onCreate: L,
  onCreateLabel: j,
  singleSelector: T = !1,
  loading: w = !1,
  disabled: k = !1,
  hiddenAvatar: I = !1
}) => {
  const S = ue.useRef(null), $ = K(
    () => t ? n.reduce(
      (A, q) => A + (q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), x = ae(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: 0 });
    }, qt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Jt)
      )[0]?.focus();
    }, Yt);
  }, []), C = ae(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: S.current?.scrollHeight });
    }, qt), setTimeout(() => {
      const A = Array.from(
        document.querySelectorAll(Jt)
      );
      A[A.length - 1]?.focus();
    }, Yt);
  }, []), v = K(
    () => new Map(g.map((A) => [A.id, A])),
    [g]
  ), V = ae(
    (A) => {
      const q = v.get(A.id);
      if (!t)
        return {
          selected: !!q,
          partialSelected: !!q
        };
      const te = (A.subItems ?? []).filter(
        (Z) => q?.subItems?.some(
          (le) => le.subId === Z.subId
        )
      ), J = (A.subItems?.length ?? 0) === te.length, B = !J && te.length > 0;
      return { selected: J, partialSelected: B };
    },
    [t, v]
  ), ee = ae(
    (A) => {
      if (A.index === 0 && L)
        return /* @__PURE__ */ e(
          Kt,
          {
            label: j ?? "",
            onCreate: () => L?.(i),
            goToFirst: x,
            goToLast: C
          }
        );
      const q = L ? A.index - 1 : A.index, te = n[q], { selected: J, partialSelected: B } = V(te);
      return /* @__PURE__ */ e(
        We,
        {
          expanded: te.expanded ?? !1,
          onExpand: () => h(te, !0),
          search: i,
          groupView: t,
          entity: te,
          onSelect: l,
          onRemove: s,
          selected: J,
          partialSelected: B,
          showGroupIcon: dl(a, r),
          singleSelector: T,
          goToFirst: x,
          goToLast: C,
          disabled: k,
          hiddenAvatar: I
        },
        te.id
      );
    },
    [
      L,
      j,
      k,
      n,
      V,
      x,
      C,
      t,
      a,
      I,
      s,
      l,
      h,
      i,
      r,
      T
    ]
  ), ie = K(() => t ? n.flatMap((A) => {
    const q = $e(
      g ?? [],
      A.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: A.id,
          subName: A.name,
          subAvatar: A.avatar,
          expanded: A.expanded ?? q?.expanded ?? !1,
          subItems: A.subItems,
          subSearchKeys: A.searchKeys
        }
      },
      ...(A.subItems ?? []).map((te) => ({
        parent: {
          ...A,
          expanded: A.expanded ?? q?.expanded ?? !1
        },
        subItem: te
      }))
    ];
  }).filter(
    (A) => (!A.parent || A.parent.expanded) && (!!A.parent || !!A.subItem.subItems && A.subItem.subItems.length > 0)
  ) : n.map((A) => ({
    parent: null,
    subItem: {
      subId: A.id,
      subName: A.name,
      subAvatar: A.avatar,
      subSearchKeys: A.searchKeys
    }
  })), [t, n, g]), R = ae(
    (A) => {
      if (A.index === 0 && L)
        return /* @__PURE__ */ e(
          Kt,
          {
            label: j ?? "",
            onCreate: () => L?.(i),
            goToFirst: x,
            goToLast: C
          }
        );
      const q = L ? A.index - 1 : A.index, te = ie[q].parent, J = ie[q].subItem;
      if (!te) {
        const Z = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, le = $e(
          g,
          Z.id
        ), oe = (Z?.subItems ?? []).filter(
          (_e) => le?.subItems?.some(
            (ma) => ma.subId === _e.subId
          )
        ), ze = (Z.subItems?.length ?? 0) === oe.length, fa = !ze && oe.length > 0;
        return /* @__PURE__ */ e(
          We,
          {
            groupView: !0,
            expanded: Z.expanded ?? !1,
            onExpand: (_e) => h(Z, _e),
            search: i,
            entity: Z,
            onSelect: l,
            onRemove: s,
            selected: ze,
            partialSelected: fa,
            showGroupIcon: a.find((_e) => _e.value === r)?.groupType === "team",
            singleSelector: T,
            goToFirst: x,
            goToLast: C,
            hideLine: q === ie.length - 1,
            disabled: k,
            hiddenAvatar: I
          }
        );
      }
      let B = !!$e(g, J.subId);
      if (!B) {
        const Z = $e(
          g,
          te.id
        );
        B = !!(te?.subItems ?? []).filter(
          (oe) => Z?.subItems?.some(
            (ze) => ze.subId === oe.subId
          )
        ).find((oe) => oe.subId === J.subId);
      }
      return /* @__PURE__ */ e(
        We,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: J.subId,
            name: J.subName,
            avatar: J.subAvatar,
            searchKeys: J.subSearchKeys
          },
          onSelect: () => {
            d(te, J);
          },
          onRemove: () => c(te, J),
          selected: !!B,
          partialSelected: !1,
          singleSelector: T,
          goToFirst: x,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: I
        }
      );
    },
    [
      ie,
      g,
      i,
      T,
      x,
      C,
      l,
      s,
      a,
      k,
      h,
      r,
      d,
      c,
      I,
      L,
      j
    ]
  ), [he, Oe] = K(() => {
    if (!n.length)
      return [!1, !1];
    let A = 0, q = 0;
    if (!t)
      A = n.length, q = n.reduce(
        (B, { id: Z }) => B + (v.has(Z) ? 1 : 0),
        0
      );
    else {
      const B = new Set(
        [...v.values()].flatMap(
          (Z) => Z.subItems?.map((le) => le.subId) ?? []
        )
      );
      n.forEach((Z) => {
        const le = Z.subItems ?? [];
        A += le.length, q += le.filter(
          (oe) => B.has(oe.subId)
        ).length;
      });
    }
    const te = A > 0 && q === A, J = q > 0;
    return [te, J];
  }, [n, v, t]), ne = ie.length, rt = !T && (N || F), Ee = E && E.length > 0, Pe = !w && (!T && rt || Ee);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex w-full flex-col rounded-l-xl border-0",
        T || w ? "rounded-r-xl" : "",
        _
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: p(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              T || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                sl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: y,
                  goToFirst: x,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Ue,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: b,
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
              Pe ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(pn, {}) }),
              !w && !$ && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: it
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: z })
                  ]
                }
              ),
              !w && (!!$ || L) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                pt,
                {
                  height: it,
                  itemCount: ne + (L ? 1 : 0),
                  itemSize: (A) => {
                    if (A === 0 && L) return lt;
                    const q = L ? A - 1 : A;
                    return ie[q]?.parent === null ? ol : lt;
                  },
                  renderer: R,
                  ref: S
                }
              ) : /* @__PURE__ */ e(
                pt,
                {
                  height: it,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: lt,
                  renderer: ee,
                  ref: S
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          ll,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: T,
            totalFilteredEntities: $,
            allVisibleSelected: he,
            anyVisibleSelected: Oe,
            selectAllLabel: N,
            clearLabel: F,
            disabled: k,
            actions: E
          }
        )
      ]
    }
  );
}, $e = (t, n) => t.find((a) => a.id === n), dl = (t, n) => t.find((a) => a.value === n)?.groupType === "team", ul = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Za,
  {
    className: p(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ e(
      wn,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Xa, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      U,
      {
        icon: Fe,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), fl = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  disabled: l = !1,
  hiddenAvatar: s = !1
}) => {
  const c = K(() => {
    const f = t ? r.flatMap(
      (m) => (m.subItems ?? []).map((g) => ({
        parent: m,
        subItem: g
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
      const g = m.subItem.subId;
      return u.has(g) ? !1 : (u.add(g), !0);
    });
  }, [t, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: i && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      i
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      pt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            ul,
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
          ) : /* @__PURE__ */ e(X, {});
        }
      }
    ) })
  ] });
}, ml = 500, Zt = 520, Xt = 210, Qt = ({
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
  ...g
}) => {
  const b = (l ?? Zt) < ml, h = !c && !s && !b, y = l ?? Zt, N = h ? y - Xt : y;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: s && (!f || f.length === 0) ? "435px" : "473px",
        width: y
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: N + 1 + "px" },
            children: /* @__PURE__ */ e(
              cl,
              {
                ...g,
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: s,
                loading: c,
                disabled: g.disabled,
                hiddenAvatar: d,
                actions: f,
                onCreate: u,
                onCreateLabel: m
              }
            )
          }
        ),
        h && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Xt + "px"
            },
            children: /* @__PURE__ */ e(
              fl,
              {
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: i,
                disabled: g.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, hl = ({
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
  hideLabel: g = !1,
  maxLength: b,
  loading: h = !1,
  required: y = !1,
  readonly: N = !1,
  append: F,
  size: O = "sm",
  open: z
}) => {
  const _ = K(
    () => a.some(
      (T) => T.subItems && T.subItems.length > 0
    ),
    [a]
  ), E = K(() => _ ? a.flatMap(
    (T) => (T.subItems ?? []).map((w) => ({
      parent: T,
      subItem: w
    }))
  ) : a.map((T) => ({
    parent: null,
    subItem: {
      subId: T.id,
      subName: T.name,
      subAvatar: T.avatar,
      subDeactivated: T.deactivated
    }
  })), [_, a]), L = E.length === 0 ? void 0 : E.length === 1 ? E[0].subItem.subName : E.length + " " + n, j = E.length === 1 ? E[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    Qa,
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
      hideLabel: g,
      maxLength: b,
      clearable: !1,
      value: L,
      disabled: r,
      loading: h,
      required: y,
      readonly: N,
      size: O,
      avatar: i || !j ? void 0 : {
        type: "person",
        firstName: j,
        lastName: "",
        src: E[0].subItem.subAvatar,
        deactivated: E[0].subItem.subDeactivated
      },
      append: F ?? /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(er, { open: z, disabled: r, size: O }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: p(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            E.length === 1 && !i || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            pe,
            {
              tag: "span",
              className: E.length === 1 && E[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: E.length === 0 ? t ?? "" : E.length === 1 ? E[0].subItem.subName : `${E.length} ${n}`
            }
          )
        }
      )
    }
  );
}, ec = (t) => {
  const [n, a] = P(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), t.onOpenChange?.(w);
  };
  W(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [i, l] = P(t.entities), [s, c] = P(""), [d, f] = tr("", 300), u = K(
    () => t.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [t.entities]
  ), m = Ae(nr), b = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function h(w) {
    if (t.singleSelector) {
      t.onSelect(w), a(!1);
      return;
    }
    const k = t.selectedEntities ?? [], I = i.find((v) => v.id === w.id);
    if (!I)
      return;
    const S = new Set(
      (I.subItems ?? []).map((v) => v.subId)
    ), $ = /* @__PURE__ */ new Set([I.id]);
    i.forEach((v) => {
      v.id !== I.id && (v.subItems ?? []).some(
        (ee) => S.has(ee.subId)
      ) && $.add(v.id);
    });
    const x = [...k];
    function C(v) {
      const V = x.findIndex((ee) => ee.id === v.id);
      V >= 0 ? x[V] = v : x.push(v);
    }
    $.forEach((v) => {
      const V = i.find((R) => R.id === v);
      if (!V) return;
      const ee = V.subItems?.filter(
        (R) => S.has(R.subId)
      ) ?? [], ie = x.findIndex((R) => R.id === v);
      if (ie >= 0) {
        const R = x[ie].subItems ?? [], he = new Set(R.map((ne) => ne.subId)), Oe = [
          ...R,
          ...ee.filter((ne) => !he.has(ne.subId))
        ];
        C({
          ...V,
          subItems: Oe
        });
      } else
        C({
          ...V,
          subItems: ee
        });
    }), t.onSelect(x);
  }
  function y(w, k) {
    if (t.singleSelector)
      t.onSelect({ ...w, subItems: [{ ...k }] }), a(!1);
    else {
      const I = t.selectedEntities ?? [], S = new Set(I.map((C) => C.id)), $ = new Map(
        I.map((C) => [C.id, C.subItems ?? []])
      );
      S.add(w.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (V) => V.subId === k.subId
        ) && S.add(C.id);
      });
      const x = [];
      t.entities.forEach((C) => {
        if (S.has(C.id)) {
          let V = [...$.get(C.id) ?? []];
          C.subItems?.some(
            (R) => R.subId === k.subId
          ) && (V.some(
            (he) => he.subId === k.subId
          ) || V.push(k));
          const ie = new Set(
            (C.subItems ?? []).map((R) => R.subId)
          );
          V = V.filter(
            (R) => ie.has(R.subId)
          ), x.push({
            ...C,
            subItems: V
          });
        }
      }), t.onSelect(x);
    }
  }
  function N(w) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let k = [];
    const I = t.selectedEntities ?? [];
    if (u) {
      const S = i.find(
        (x) => x.id === w.id
      );
      if (!S)
        return;
      const $ = new Set(
        (S.subItems ?? []).map((x) => x.subId)
      );
      for (const x of I) {
        const C = (x.subItems ?? []).filter(
          (v) => !$.has(v.subId)
        );
        C.length > 0 && k.push({
          ...x,
          subItems: C
        });
      }
    } else
      k = (I ?? []).filter((S) => S.id !== w.id);
    t.onSelect(k);
  }
  function F(w, k) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const I = t.selectedEntities ?? [], S = k.subId, $ = [];
    for (const x of I) {
      const C = x.subItems?.filter((v) => v.subId !== S) ?? [];
      C.length > 0 && $.push({
        ...x,
        subItems: C
      });
    }
    t.onSelect($);
  }
  function O() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const w = t.selectedEntities ?? [];
    let k = [];
    if (u) {
      const I = new Set(
        i.flatMap(
          (S) => (S.subItems ?? []).map(($) => $.subId)
        )
      );
      for (const S of w) {
        const $ = (S.subItems ?? []).filter(
          (x) => !I.has(x.subId)
        );
        $.length > 0 && k.push({
          ...S,
          subItems: $
        });
      }
    } else {
      const I = new Set(
        i.map((S) => S.id)
      );
      k = (w ?? []).filter((S) => !I.has(S.id));
    }
    t.onSelect(k);
  }
  function z() {
    const w = [...t.selectedEntities ?? []];
    i.forEach((k) => {
      const I = w.find((S) => S.id === k.id);
      if (!I)
        w.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const S = Array.from(
          /* @__PURE__ */ new Set([
            ...I.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        I.subItems = S;
      }
    }), t.singleSelector || t.onSelect(w);
  }
  const _ = (w) => {
    c(w), f(w);
  }, E = (w, k) => {
    t.onItemExpandedChange(w.id, k), l(
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
      const k = t.entities.map((I) => {
        const S = gl(I, d), $ = I.subItems?.map((x) => ({
          ...x,
          score: Ge(
            d,
            x.subSearchKeys ?? [x.subName]
          )
        })).filter((x) => x.score < 1 / 0).sort((x, C) => x.score - C.score);
        return {
          ...I,
          score: S,
          expanded: I.expanded ?? ($?.length ?? 0) > 0,
          subItems: $
        };
      }).filter((I) => I.score < 1 / 0).sort((I, S) => I.score - S.score);
      l(k);
    } else {
      const w = t.entities.map((k) => {
        const I = Ge(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: I };
      }).filter((k) => k.score < 1 / 0).sort((k, I) => k.score - I.score);
      l(w);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    l
  ]);
  const L = M(null), [j, T] = P(0);
  return Dn(() => {
    const w = () => {
      L.current && T(L.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: L,
      className: p(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        Qt,
        {
          groupView: u,
          entities: i,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: h,
          onRemove: N,
          onSubItemRemove: F,
          onSubItemSelect: y,
          onClear: O,
          onSelectAll: z,
          selectedEntities: t.selectedEntities ?? [],
          search: s,
          onSearch: _,
          onToggleExpand: E,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? j - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(ar, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      rr,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          hl,
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
      ir,
      {
        container: b,
        className: p(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          Qt,
          {
            groupView: u,
            entities: i,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: h,
            onRemove: N,
            onSubItemRemove: F,
            onSubItemSelect: y,
            onClear: O,
            onSelectAll: z,
            selectedEntities: t.selectedEntities ?? [],
            search: s,
            onSearch: _,
            onToggleExpand: E,
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
function bt(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function en(t) {
  return bt(t).split(/\s+/).filter((n) => n.length > 0);
}
function Ge(t = "", n) {
  const a = en(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const i = bt(r), l = en(r), s = bt(t);
    if (i.includes(s) || a.every(
      (d) => l.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function gl(t, n) {
  const a = Ge(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((i, l) => {
    const s = Ge(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(i, s);
  }, 1 / 0)), Math.min(a, r);
}
const pl = ({
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
  const { ref: f } = ut({
    threshold: 0.1,
    onChange(g) {
      g && d?.(t);
    }
  }), u = Nn(n, {
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
        /* @__PURE__ */ e(ft, { icon: i ?? Cn }),
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
}, bl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(D, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(D, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Ot = Q(
  "ActivityItem",
  re(pl, bl)
), Jn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), xl = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Jn, { title: t, children: n.map((i) => /* @__PURE__ */ e(
  Ot,
  {
    ...i,
    onClick: () => a(i.id),
    onVisible: r
  },
  i.id
)) }), vl = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Jn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(Ot.Skeleton, {}, r)) }), Me = re(xl, vl), yl = 3, wl = ["today", "yesterday", "lastWeek", "lastMonth"], Nl = (t) => or(t, ([n]) => {
  const a = wl.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), xt = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Cl = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: i = 5
}) => {
  const l = ce(), s = lr(t, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = sr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Nl(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], g) => /* @__PURE__ */ o(ue.Fragment, { children: [
      /* @__PURE__ */ e(
        Me,
        {
          title: u in l.date.groups ? l.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      g !== f.length - 1 && /* @__PURE__ */ e(xt, {})
    ] }, u)),
    n && new Array(yl).fill(null).map((u, m) => /* @__PURE__ */ e(Ot.Skeleton, {}, m))
  ] });
}, Il = () => {
  const t = ce();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Me.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(xt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(xt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, tc = Q(
  "ActivityItemList",
  re(Cl, Il)
), kl = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Sl = {
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
function Fl({
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
      className: p(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Sl[cr(
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
                xe,
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
                Rn,
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
function Al(t) {
  const n = M(null), a = M(), r = ae(() => {
    const l = n.current;
    if (!l) return;
    const s = dr.create(l, {
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
  }, [t]), i = ae(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: i };
}
const Ll = ({
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
  const [m, g] = P(s), b = M(null);
  W(() => {
    g(s);
  }, [s]);
  const h = (_) => {
    g(_), c?.(_);
  }, y = Je(), { canvasRef: N, handleMouseEnter: F, handleMouseLeave: O } = Al(y), z = Ze({
    emoji: kl[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ne,
    {
      href: t,
      onClick: i,
      className: p(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        de()
      ),
      onMouseEnter: y ? void 0 : F,
      onMouseLeave: y ? void 0 : O,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: N,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          Fl,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: l,
            lastEmojiReaction: m,
            onReactionSelect: h,
            pickerRef: b
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
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: z })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(mt, { date: u }) })
        ] })
      ]
    }
  );
}, Ol = () => /* @__PURE__ */ o(
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
), nc = re(Ll, Ol), ac = ({
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
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(H, { label: a, variant: "outline", onClick: r }) })
] });
function El({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: i
}) {
  const [l, s] = P(a), [c, d] = P(n), f = M(null), { fireEmojiConfetti: u } = ur(), m = (h, y) => {
    h.stopPropagation(), d(c + (l ? -1 : 1)), s(!l), i?.(y), l || u(y, f);
  }, g = r?.map((h) => h.name).join(", ") || "", b = /* @__PURE__ */ e(
    Nt,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (h) => {
        m(h, t);
      },
      className: p(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        l && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": fr(t),
      prepend: /* @__PURE__ */ e(Ze, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        mr,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: p(
            "tabular-nums",
            l ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return g ? /* @__PURE__ */ e(ye, { label: g, children: b }) : b;
}
function Pl({ items: t, onInteraction: n, locale: a, action: r }) {
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
    /* @__PURE__ */ e(Rn, { onSelect: n, locale: a }),
    t.map((i) => /* @__PURE__ */ e(
      El,
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
const _l = Q("Reactions", Pl), Zn = G(function({ content: n, collapsed: a, id: r, className: i, tabIndex: l }, s) {
  return /* @__PURE__ */ e(
    hr,
    {
      ref: s,
      id: r,
      content: n,
      tabIndex: l,
      className: p(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        i
      )
    }
  );
});
Zn.displayName = "BasePostDescription";
const Dl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(D, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(D, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Xn = re(
  Zn,
  Dl
), tn = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: p(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Te,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        ye,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), vt = G(
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
  }, g) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: g,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(X, { children: [
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
                f && /* @__PURE__ */ o(X, { children: [
                  /* @__PURE__ */ e(mt, { date: f }),
                  /* @__PURE__ */ e(
                    U,
                    {
                      icon: mn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(mt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(tn, { tags: c }),
              d && /* @__PURE__ */ e(tn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Tl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Qn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && Tl.has(a);
}, zl = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let i = gr(r);
  const l = (s) => {
    s.stopPropagation();
  };
  return a && (i = `${i} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Qn(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ e("source", { src: n })
      }
    ) : /* @__PURE__ */ o(X, { children: [
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
      vt,
      {
        title: t,
        description: i,
        color: pr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Rl = () => /* @__PURE__ */ o(
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
), ea = re(zl, Rl), Bl = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const i = ce();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: p(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        de()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: i.actions.seeMore
    }
  ) });
}, $l = ({
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
  comment: g,
  actions: b,
  dropdownItems: h,
  noReactionsButton: y = !1,
  descriptionExpandable: N = !1
}) => {
  const F = gt(), O = gt(), z = M(null), [_, E] = P(null), [L, j] = P(!1), T = [f.views, f.comments].filter(Boolean).join(" · "), w = N && _?.id === t && _.description === l, k = !w, I = Nn(r), S = () => {
    s(t);
  }, $ = (v) => {
    v.stopPropagation();
  }, x = n ? `${n.firstName} ${n.lastName}` : void 0, C = (v) => {
    v.preventDefault(), v.stopPropagation(), l && E({ id: t, description: l });
  };
  return W(() => {
    w && z.current?.focus();
  }, [w]), W(() => {
    N || E(null);
  }, [N]), W(() => {
    const v = z.current;
    if (!N || !v || w) {
      j(!1);
      return;
    }
    const V = () => {
      j(
        v.scrollHeight > v.clientHeight
      );
    };
    if (V(), typeof ResizeObserver > "u") return;
    const ee = new ResizeObserver(V);
    return ee.observe(v), () => ee.disconnect();
  }, [N, w, l]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: S,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          Be,
          {
            href: n.url || "#",
            title: x,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              xe,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(ft, { icon: Dt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(X, { children: [
                  /* @__PURE__ */ e(
                    Be,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: x,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        xe,
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
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(ft, { icon: Dt, size: "sm" }) }),
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
                  b?.map((v) => /* @__PURE__ */ e(
                    H,
                    {
                      hideLabel: !v.label,
                      ...v.icon && { icon: v.icon },
                      variant: "outline",
                      size: "md",
                      onClick: v.onClick,
                      label: v.label ?? "",
                      title: v.label ?? ""
                    },
                    v.label
                  )),
                  h?.length && /* @__PURE__ */ e(
                    ke,
                    {
                      items: h,
                      icon: ht,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  ke,
                  {
                    items: [
                      {
                        label: g.label,
                        onClick: g.onClick
                      },
                      ...h ?? []
                    ],
                    icon: ht,
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
                  id: F,
                  className: p(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              l && /* @__PURE__ */ o(X, { children: [
                /* @__PURE__ */ e(
                  Xn,
                  {
                    ref: z,
                    id: O,
                    content: l,
                    collapsed: k,
                    tabIndex: w ? -1 : void 0,
                    className: p(w && de())
                  }
                ),
                N && L && !w && /* @__PURE__ */ e(
                  Bl,
                  {
                    describedBy: F,
                    controls: O,
                    expanded: w,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Qn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: $,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(X, { children: [
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
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(ea, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: T }),
          !y && /* @__PURE__ */ e(
            _l,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: g.label,
                onClick: g.onClick,
                icon: br
              }
            }
          )
        ] })
      ]
    }
  );
}, Wl = ({
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
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(Xn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(D, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(ea.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), rc = re(
  $l,
  Wl
), ta = ue.forwardRef(({ person: t, onClick: n, ...a }, r) => {
  const i = () => {
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
      onClick: i,
      children: [
        /* @__PURE__ */ e(
          xe,
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
            a.info && /* @__PURE__ */ e(ye, { label: a.info, children: /* @__PURE__ */ e(
              U,
              {
                icon: xn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((l, s) => /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ e(Te, { ...l }, l.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(xr, { ...a.rightTag }),
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
}), Ml = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(D, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(D, { className: "h-4" }),
    /* @__PURE__ */ e(D, { className: "h-4" })
  ] })
] });
ta.displayName = "OnePersonListItem";
const ic = se(
  Q(
    "OnePersonListItem",
    re(ta, Ml)
  )
), nn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function jl({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  return /* @__PURE__ */ e(_i, { children: /* @__PURE__ */ e(
    Vl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function Vl({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  const l = r?.enabled ? vr : i?.enabled ? Xi : ei, s = r?.enabled ? r : i?.enabled ? i : void 0;
  return /* @__PURE__ */ e(l, { ...s, children: /* @__PURE__ */ e(
    Kl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const lc = Q(
  "ApplicationFrame",
  jl
), Ul = ({ contentId: t }) => {
  const n = ce();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: de(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Hl(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Gl(t, n) {
  const { sidebarState: a, toggleSidebar: r } = Le(), i = M(t);
  W(() => {
    n && Hl(
      t,
      i.current,
      a
    ) && r({ isInvokedByUser: !1 }), i.current = t;
  }, [t, n, a, r]);
}
function Kl({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: i
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = Le(), f = Je(), {
    open: u,
    visualizationMode: m,
    canvasContent: g,
    canvasEntities: b,
    closeCanvas: h,
    chatWidth: y,
    resizable: N,
    chatSide: F
  } = yr(), O = F === "left", z = m === "fullscreen", _ = m === "canvas", { open: E } = Qe(), L = N ? y : wr, j = M(z), T = z && !j.current, w = !z && j.current, [
    k,
    I
  ] = P(!1);
  W(() => {
    !z && j.current && I(!0), j.current = z;
  }, [z]);
  const S = z || k || w, $ = K(() => T ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [T, w]), x = dt(
    `(max-width: ${je.xl}px)`,
    { initializeWithValue: !0 }
  ), C = dt(`(max-width: ${je.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(E);
  }, [E, d]), Gl(u, x), /* @__PURE__ */ e(
    ri,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ e(kn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(Se, { children: l === "unlocked" && /* @__PURE__ */ e(
            Y.nav,
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
                l !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                l === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (v) => {
                l === "hidden" ? v?.setAttribute("inert", "") : v?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Ul, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Y.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: !O && u && !C ? L : 0,
                paddingLeft: O && u && !C ? L : 0
              },
              transition: {
                paddingRight: nn,
                paddingLeft: nn
              },
              children: [
                /* @__PURE__ */ e(
                  Y.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: p(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      S ? "overflow-hidden" : "overflow-auto",
                      !u && !E && (O ? "xs:pl-1" : "xs:pr-1"),
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ e(
                      Y.div,
                      {
                        className: p(
                          "flex max-w-full flex-1",
                          S ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && _ && g && /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex",
                      O ? "justify-start" : "justify-end",
                      C ? "fixed inset-0 z-[50]" : p(
                        "absolute bottom-0 top-0 z-[21]",
                        O ? "right-0" : "left-0"
                      )
                    ),
                    style: C ? void 0 : O ? { left: L } : { right: L },
                    children: /* @__PURE__ */ e(
                      Nr,
                      {
                        content: g,
                        onClose: h,
                        entities: b,
                        chatSide: F
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  Y.div,
                  {
                    className: p(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      C ? "fixed inset-0 z-[30]" : p(
                        "absolute top-0 bottom-0",
                        O ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        S || _ ? "z-20" : "z-0",
                        l === "hidden" && S ? O ? "pr-1" : "pl-1" : O ? "pr-0" : "pl-0"
                      )
                    ),
                    animate: {
                      width: C || z ? "100%" : L
                    },
                    transition: $,
                    onAnimationComplete: () => {
                      k && I(!1);
                    },
                    children: /* @__PURE__ */ e(Cr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(Zi, {})
        ] }) })
      ] })
    }
  );
}
const na = ({
  firstName: t,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: l,
  onPulseClick: s
}) => {
  const c = ce(), [d, f] = P(!l);
  return /* @__PURE__ */ e("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ e(Se, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ e(
    Y.div,
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
        Y.div,
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
          children: /* @__PURE__ */ e(Ze, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ o(
    Y.div,
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
          wn,
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
          Nt,
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
                icon: li[l],
                color: ii[l],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ e(
          Y.div,
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
              be,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: Ir,
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
na.displayName = "PulseAvatar";
const ql = ve({
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
function aa({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: s } = Le();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: ql({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || i === "hidden") && /* @__PURE__ */ e(
              H,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: hn,
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
                    na,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    xe,
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
            /* @__PURE__ */ e(gn, {}),
            /* @__PURE__ */ e(Vn, {})
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
aa.displayName = "DaytimePage";
const sc = se(
  Q("DaytimePage", aa)
);
function Yl(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: i, target: l }) => ({
    label: n,
    description: a,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function Jl({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(ke, { items: Yl(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: p(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            de()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(U, { icon: Sn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const oc = se(
  Q("OmniButton", Jl)
);
function ra({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
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
ra.displayName = "Page";
const cc = se(Q("Page", ra));
function Zl({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: i = !1,
  additionalOptions: l = []
}) {
  const s = K(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(D, { className: "size-6" }),
    /* @__PURE__ */ e(D, { className: "h-3 w-14" })
  ] }) : t.length + (l?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    an,
    {
      company: s,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    Xl,
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
const Xl = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: i = []
}) => {
  const l = ce(), [s, c] = P(!1), d = K(
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
    const m = i?.find((g) => g.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ e(
    Ue,
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
          className: p(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            de()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              Y.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(U, { icon: An, size: "xs" })
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
    className: p(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        kr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: Fn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(pe, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function dc({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: i,
  onDropdownClick: l,
  hasActivityUpdates: s
}) {
  const c = ce();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(ke, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: p(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          de("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ e(
            xe,
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
    a && /* @__PURE__ */ e(ye, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        H,
        {
          icon: Cn,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Sr, { type: "highlight", size: "sm", icon: Fn }) })
    ] }) })
  ] });
}
function Ql({ isExpanded: t }) {
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
function es() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Le(), i = M(null);
  return W(() => {
    t === "hidden" && n === "locked" && i.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    Nt,
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
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: !r }), children: /* @__PURE__ */ e(Ql, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: r }), children: /* @__PURE__ */ e(U, { icon: Fe, size: "md" }) })
      ]
    }
  );
}
function uc({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: i,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Zl,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: l,
        withNotification: r,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ e(es, {})
  ] });
}
function ts() {
  const [t, n] = P(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const ia = Xe(void 0);
function ns({ children: t }) {
  const [n, a] = P(!1), [r, i] = P(null);
  return /* @__PURE__ */ e(
    ia.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: i },
      children: t
    }
  );
}
function Et() {
  const t = Ae(ia);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const as = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      U,
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
  t.badge && /* @__PURE__ */ e(Ye, { value: t.badge, size: "sm", type: "bold" })
] }), rs = ({ item: t }) => {
  const { isActive: n } = wt(), { label: a, icon: r, ...i } = t, l = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ e(
    Ne,
    {
      ...i,
      className: p(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        de("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(as, { item: t, active: l })
    }
  );
}, is = ({
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
  const f = ce(), { isDragging: u, setIsDragging: m, draggedItemId: g, setDraggedItemId: b } = Et(), { isActive: h } = wt(), y = h(t.href, { exact: t.exactMatch }), N = M(!1), [F, O] = P(!1), z = i === 0, _ = i === l - 1, E = l === 1, L = K(() => {
    const S = [];
    return !E && !z && S.push({
      label: f.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: Fr
    }), !E && !_ && S.push({
      label: f.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: Ar
    }), S.length > 0 && S.push({ type: "separator" }), S.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Lr,
      critical: !0
    }), S;
  }, [E, z, _, f, s, i, r, t]), j = () => {
    m(!0), O(!1), b(t.href || null), N.current = !0;
  }, T = () => {
    m(!1), b(null), c(), setTimeout(() => {
      N.current = !1;
    }, 0);
  }, w = u && g === t.href, k = K(
    () => p(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      y ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      F && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [y, F, w, d]
  ), I = K(() => /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(ss, { tooltip: n, children: /* @__PURE__ */ o(
      Ne,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: p(
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
              className: p(
                "transition-colors",
                y ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Or, { size: "xs", avatar: t.avatar }) : null,
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
        className: p(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          F && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          ke,
          {
            open: F,
            onOpenChange: O,
            items: L,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(U, { icon: ht, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, y, F, w, L, n]);
  return d ? /* @__PURE__ */ e(
    Bn,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: j,
      onDragEnd: T,
      className: k,
      whileDrag: {
        scale: 1.05
      },
      children: I
    }
  ) : /* @__PURE__ */ e("div", { className: k, children: I });
}, la = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: i,
  isDragging: l,
  wasDragging: s
}) => {
  const [c, d] = P(n), f = Je(), u = () => {
    if (l || s?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(Er, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          de("focus-visible:ring-inset"),
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
            Y.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                U,
                {
                  icon: An,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(Pr, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      Y.div,
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
}, st = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: i,
  currentOrder: l
}) => {
  const { isDragging: s, setIsDragging: c } = Et(), d = M(!1), f = si(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, l && i?.(l);
    }, 0);
  }, g = (h) => {
    !s && !d.current && r?.(t, h);
  }, b = /* @__PURE__ */ e(
    la,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: g,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: p(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: t.items.map((h, y) => /* @__PURE__ */ e(rs, { item: h }, y))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    Bn,
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
      children: b
    }
  ) : b;
};
function fc({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: i
}) {
  const l = M(null), s = t.filter(
    (h) => h.isSortable === !1
  ), [c, d] = P(
    t.filter((h) => h.isSortable !== !1)
  ), [f, u] = P(0), m = ae((h) => {
    d(h);
  }, []), g = ae(
    (h) => {
      a?.(h);
    },
    [a]
  ), b = ts();
  return /* @__PURE__ */ e(ns, { children: /* @__PURE__ */ e(kn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    ls,
    {
      disableDragging: b,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: g,
      favorites: i,
      onFavoritesChange: r,
      forceUpdate: () => u((h) => h + 1)
    },
    f
  ) }) });
}
function ls({
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
  const u = ce(), { isDragging: m } = Et(), g = t.some((x) => x.isRoot), b = t.filter((x) => !x.isRoot).length > 0, h = n.length > 0, y = M(null), [N, F] = P(s), O = s.length > 0;
  W(() => {
    JSON.stringify(s) !== JSON.stringify(N) && F(s);
  }, [s]);
  const z = (x) => {
    F(x);
  }, _ = ae(
    (x) => {
      const C = N.filter((v) => v.href !== x.href);
      F(C), c?.(C);
    },
    [N, c]
  ), E = ae(
    (x, C) => {
      if (C < 0 || C >= N.length) return;
      const v = [...N], [V] = v.splice(x, 1);
      v.splice(C, 0, V), F(v), c?.(v);
    },
    [N, c]
  ), [L, j] = P(!1), T = M(null);
  W(() => {
    n.length > 0 && !L && (a([...n]), j(!0));
  }, [n, a, L]), W(() => {
    const x = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", k = K(
    () => N.reduce(
      (x, C, v) => (C.label in x || (x[C.label] = []), x[C.label].push(v), x),
      {}
    ),
    [N]
  ), I = K(
    () => O && N.map((x, C) => /* @__PURE__ */ e(
      is,
      {
        isSortable: !f,
        tooltip: (k[x.label] ?? []).length > 1 ? x.tooltip : void 0,
        item: x,
        dragConstraints: y,
        onRemove: _,
        index: C,
        total: N.length,
        onMove: E,
        onReorderFinish: () => {
          c?.(N);
        }
      },
      `${x.href}-${x.label}`
    )),
    [
      O,
      N,
      k,
      _,
      E,
      c,
      f
    ]
  ), S = "flex flex-col gap-3", $ = K(() => n.map((x) => /* @__PURE__ */ e(
    st,
    {
      category: x,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: i,
      onDragEnd: l,
      currentOrder: n
    },
    x.id
  )), [n, f, r, i, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        g && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => x.isRoot).map((x, C) => /* @__PURE__ */ e(
          st,
          {
            category: x,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        O && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(la, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: y, children: f ? /* @__PURE__ */ e("div", { className: w, children: I }) : /* @__PURE__ */ e(
          $t,
          {
            axis: "y",
            values: N,
            onReorder: z,
            className: w,
            children: I
          }
        ) }) }) }),
        b && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => !x.isRoot).map((x, C) => /* @__PURE__ */ e(
          st,
          {
            category: x,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        h && /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: S, children: $ }) : /* @__PURE__ */ e(
              $t,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: S,
                children: $
              }
            )
          }
        )
      ]
    }
  );
}
const ss = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(ye, { description: t, children: n }) : n;
function mc({
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
        de()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(U, { icon: _r, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Dr, { keys: a }) })
      ]
    }
  ) });
}
const rn = ({ position: t }) => /* @__PURE__ */ e(
  Y.div,
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
function os({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: i, isSmallScreen: l } = Le(), s = Je(), [c, d] = ut({ threshold: 1 }), [f, u] = ut({ threshold: 1 }), m = ce(), g = {
    x: {
      ease: i !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, b = () => a ? ti(a) && r ? Tn(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    Y.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: p(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        i === "locked" ? "h-full" : p(
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
      transition: g,
      children: [
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(qe, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Se, { children: [
            !d && /* @__PURE__ */ e(rn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(rn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: b() })
      ]
    }
  );
}
const hc = se(os), cs = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, ln = {
  approved: {
    icon: bn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Fe,
    type: "critical",
    size: "sm"
  }
}, ds = {
  icon: Sn,
  type: "neutral",
  size: "sm"
}, us = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, fs = (t) => t in ln ? ln[t] : ds;
function sn(t) {
  return us[t ?? "neutral"] ?? 0;
}
const ms = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const i = ce(), l = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = i.approvals.statuses[a], c = K(() => r.map((d) => {
    const f = fs(d.status);
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
      /* @__PURE__ */ e(Ve, { text: s, variant: cs[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(Ln, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, hs = ({ steps: t }) => {
  const a = ce().approvals.history, r = t.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((i, l) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: l + 1 })
          }
        ),
        l !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((i, l) => /* @__PURE__ */ o(X, { children: [
        /* @__PURE__ */ e(
          ms,
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
}, gc = se(
  Q("OneApprovalHistory", hs)
), ot = (t, n) => typeof n == "string" && n in t;
function gs(t, n, a) {
  const r = {};
  let i = !1;
  const l = Tr(t);
  if (l && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(l).filter(
        ([u]) => ot(d, u)
      )
    );
    Object.keys(f).length > 0 && (a.setCurrentFilters(f), r.filters = f, i = !0);
  }
  const s = t.sortings;
  if (s === null)
    a.setCurrentSortings(null), r.sortings = null, i = !0;
  else if (s && n.sortings && ot(n.sortings, s.field)) {
    const d = {
      field: s.field,
      order: s.order
    };
    a.setCurrentSortings(d), r.sortings = d, i = !0;
  }
  typeof t.search == "string" && n.search?.enabled && (a.setCurrentSearch(t.search), r.search = t.search, i = !0);
  const c = t.grouping;
  if (c?.field !== void 0 && n.grouping && ot(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(d), r.grouping = d, i = !0;
  }
  return i ? r : null;
}
function pc(t) {
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
    deps: g = []
  } = t, b = oi(), h = ci(n, g), [y, N] = P(null), F = y?.key === a && y.settled, O = M(h);
  O.current = h;
  const z = M(b);
  z.current = b;
  const _ = M(null), E = m === void 0 ? null : JSON.stringify(m), L = M(m);
  L.current = m;
  const j = M(null), T = () => {
    const B = L.current;
    B !== void 0 && (j.current = JSON.stringify(B), O.current.setCurrentFilters(B));
  };
  W(() => {
    if (!f || _.current === a) return;
    if (!u) {
      _.current = a, T(), N({ key: a, applied: null, settled: !1 });
      return;
    }
    let B = !1;
    return (async () => {
      let le = null;
      try {
        const oe = await z.current.get(
          a
        );
        oe && !B && (le = gs(
          oe,
          O.current,
          O.current
        ));
      } catch {
      }
      B || (_.current = a, T(), N({ key: a, applied: le, settled: !1 }));
    })(), () => {
      B = !0;
    };
  }, [a, f, u]), W(() => {
    !F || E === null || j.current !== E && T();
  }, [F, E]);
  const {
    data: w,
    paginationInfo: k,
    setPage: I,
    loadMore: S,
    isLoading: $,
    isInitialLoading: x
  } = zr(
    h,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && F,
      fetchParamsProvider: (B) => ({
        ...B,
        navigationFilters: h.currentNavigationFilters
      })
    },
    [JSON.stringify(h.currentNavigationFilters)]
  );
  W(() => {
    N(
      (B) => B && B.key === a && !B.settled ? { ...B, settled: !0 } : B
    );
  }, [y, a]);
  const C = c ?? n.itemUrl, v = di({
    dataSource: h,
    data: w,
    paginationInfo: k,
    setPage: I,
    loadMore: S,
    isLoading: $,
    idProvider: s,
    itemUrl: C,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: l
  }), V = typeof v.activeItemId == "string" || typeof v.activeItemId == "number" ? v.activeItemId : null, ee = v.activeItem !== null, ie = ee && v.nextItem === null && v.hasNext, R = ee && v.previousItem === null && v.hasPrevious, he = V !== null && (!ee || ie || R), Oe = [
    ...h.currentSortings ? [
      {
        field: h.currentSortings.field,
        order: h.currentSortings.order
      }
    ] : [],
    ...h.currentGrouping ? [
      {
        field: h.currentGrouping.field,
        order: h.currentGrouping.order ?? "asc"
      }
    ] : []
  ], { neighbors: ne, isSupported: rt } = ui({
    dataAdapter: h.dataAdapter,
    id: V,
    filters: h.currentFilters,
    sortings: Oe,
    search: h.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && F && !x && !$ && he,
    fetchParamsProvider: (B) => ({
      ...B,
      navigationFilters: h.currentNavigationFilters
    })
  }), Ee = K(() => s || (h.idProvider ? (B, Z) => h.idProvider(B, Z) : fi), [s, h.idProvider]), Pe = K(() => {
    if (!he || ne === null) return v;
    const B = v.previousItem ?? ne.previous, Z = v.nextItem ?? ne.next, le = (oe) => oe && C ? C(oe) ?? null : null;
    return {
      ...v,
      previousItem: B,
      nextItem: Z,
      previousItemUrl: v.previousItemUrl ?? le(B),
      nextItemUrl: v.nextItemUrl ?? le(Z),
      absoluteIndex: v.absoluteIndex ?? (ne.position !== void 0 ? ne.position - 1 : null),
      totalItems: v.totalItems ?? ne.total,
      hasPrevious: v.hasPrevious || B !== null,
      hasNext: v.hasNext || Z !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: ee ? v.goToPrevious : () => {
        ne.previous && v.setActiveItemId(
          Ee(ne.previous)
        );
      },
      goToNext: ee ? v.goToNext : () => {
        ne.next && v.setActiveItemId(
          Ee(ne.next)
        );
      }
    };
  }, [
    v,
    he,
    ne,
    ee,
    C,
    Ee
  ]), A = Vi(Pe, {
    getItemTitle: d
  }), q = f && F && rt && he && ne === null, te = M(null), J = A ?? (q ? te.current : null);
  return W(() => {
    A !== null && (te.current = A);
  }, [A]), {
    ...Pe,
    isNavigating: Pe.isNavigating || q,
    isReady: F && !x,
    navigation: J,
    appliedCollectionState: y?.applied ?? null,
    dataSource: h,
    data: w,
    paginationInfo: k,
    isLoading: $
  };
}
const Pt = {
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
}, ps = ve({
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
      ...Pt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), bs = ue.forwardRef(function({ className: n, gap: a, children: r, tileSize: i, ...l }, s) {
  return /* @__PURE__ */ e("div", { className: p("@container", "grow"), ref: s, ...l, children: /* @__PURE__ */ e(
    "div",
    {
      className: p(ps({ gap: a, tileSize: i }), n),
      ref: s,
      ...l,
      children: r
    }
  ) });
}), xs = ve({
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
}), sa = G(function({
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
  height: g,
  width: b,
  ...h
}, y) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        xs({
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
          height: g,
          width: b
        }),
        n
      ),
      ref: y,
      ...h
    }
  );
}), vs = ve({
  base: "flex-row",
  variants: {
    gap: {
      ...Pt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), ys = ue.forwardRef(function({ className: n, gap: a, wrap: r, ...i }, l) {
  return /* @__PURE__ */ e(
    sa,
    {
      className: p(vs({ gap: a, wrap: r }), n),
      ref: l,
      ...i
    }
  );
}), ws = ve({
  base: "flex-col",
  variants: {
    gap: {
      ...Pt
    }
  },
  defaultVariants: {}
}), Ns = G(function({ className: n, gap: a, children: r, ...i }, l) {
  return /* @__PURE__ */ e(
    sa,
    {
      className: p(ws({ gap: a }), n),
      ref: l,
      ...i,
      children: r
    }
  );
}), bc = ge(
  {
    name: "Stack",
    type: "layout"
  },
  Ns
), xc = ge(
  {
    name: "Split",
    type: "layout"
  },
  ys
), vc = ge(
  {
    name: "AutoGrid",
    type: "layout"
  },
  bs
), Cs = ({ children: t }) => {
  const { enabled: n } = $n();
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        Y.div,
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
}, Is = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), ks = G(function({ header: n, children: a, action: r, summaries: i, alert: l, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = $n();
  W(() => {
    if (l && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, s]);
  const m = (b) => !!b && !(ue.isValidElement(b) && b.type === ue.Fragment && ue.Children.count(b.props.children) === 0), g = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    Ct,
    {
      className: p(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(It, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(kt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(Is, {}),
                /* @__PURE__ */ e(On, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(ye, { label: n.info, children: /* @__PURE__ */ e(
                U,
                {
                  icon: En,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(Ye, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ e(Pn, { text: l, level: "critical" }),
              s && /* @__PURE__ */ e(Ve, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ e(
                Rr,
                {
                  onClick: g,
                  href: n.link.url,
                  title: n.link.title,
                  icon: n.link.icon
                }
              )
            ] })
          ] }),
          n.comment && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(Cs, { children: /* @__PURE__ */ e(Br, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              H,
              {
                icon: f ? $r : Wr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(St, { className: "flex h-full flex-col gap-4", children: [
          i && /* @__PURE__ */ e("div", { className: "flex flex-row", children: i.map((b, h) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: b.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!b.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.prefixUnit }),
              b.value,
              !!b.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.postfixUnit })
            ] })
          ] }, h)) }),
          ue.Children.toArray(a).filter(m).map((b, h) => /* @__PURE__ */ o(ue.Fragment, { children: [
            h > 0 && /* @__PURE__ */ e(mi, { bare: !0 }),
            b
          ] }, h))
        ] }),
        r && /* @__PURE__ */ e(Mr, { children: /* @__PURE__ */ e(H, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Ss = ve({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Fs = G(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      Ct,
      {
        className: p(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(It, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(kt, { children: n.title }) : /* @__PURE__ */ e(D, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(On, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            St,
            {
              "aria-hidden": !0,
              className: p(a !== "full" && Ss({ height: a })),
              children: [...Array(4)].map((i, l) => /* @__PURE__ */ e(
                D,
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
), Ie = se(
  Q("Widget", re(ks, Fs))
), me = Object.assign(
  G(function({ chart: n, summaries: a, ...r }, i) {
    return /* @__PURE__ */ e(Ie, { ref: i, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ie.Skeleton
  }
), As = re(
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
        chart: /* @__PURE__ */ e(hi, { ...l, canBeBlurred: n })
      }
    );
  }),
  me.Skeleton
), Ls = Q(
  "AreaChartWidget",
  As
), Os = G(function(n, a) {
  return /* @__PURE__ */ e(
    me,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(gi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Es = Q(
  "BarChartWidget",
  re(Os, me.Skeleton)
), Ps = re(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(pi, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), _s = Q(
  "LineChartWidget",
  Ps
), Ds = re(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(bi, { ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), Ts = Q(
  "PieChartWidget",
  Ds
), zs = re(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(me, { ref: a, ...n, chart: null });
    }
  ),
  me.Skeleton
), Rs = Q(
  "SummariesWidget",
  zs
), Bs = re(
  G(
    function(n, a) {
      return /* @__PURE__ */ e(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(xi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), $s = Q(
  "VerticalBarChartWidget",
  Bs
), yc = ge(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Ls
), wc = ge(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Es
), Nc = ge(
  {
    name: "LineChartWidget",
    type: "info"
  },
  _s
), Cc = ge(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Ts
), Ic = ge(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  $s
), kc = ge(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Rs
), Ws = (t, n) => /* @__PURE__ */ o(
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
), Ms = G(Ws), js = (t, n) => /* @__PURE__ */ o(
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
), Vs = G(js), Us = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Hs = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Gs = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ks = {
  "line-chart": "default",
  "bar-chart": "promote"
}, qs = G(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: i, buttonAction: l, type: s }, c) {
    const d = Us[s], f = Hs[s], u = Gs[s], m = Ks[s];
    return /* @__PURE__ */ o(
      Ct,
      {
        className: p(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(It, { className: "-mt-0.5", children: /* @__PURE__ */ e(kt, { children: n }) }),
          /* @__PURE__ */ o(St, { className: p("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Ms, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ e(Vs, { className: "w-full" })
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
), Sc = se(
  Q("ChartWidgetEmptyState", qs)
);
function Ys(t, n) {
  const a = M(null), r = M(null), [i, l] = P({
    visibleItems: [],
    overflowItems: []
  });
  jr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const s = ae(
    (u, m, g) => m < g - 1 ? u + n : u,
    [n]
  ), c = ae(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let g = 0; g < u.length; g++) {
      const b = u[g].getBoundingClientRect().height;
      m.push(b);
    }
    return m;
  }, []), d = ae(
    (u, m) => {
      let g = 0, b = 0;
      for (let h = 0; h < u.length; h++) {
        const y = b + u[h];
        if (y > m + 30) break;
        b = y, b = s(
          b,
          h,
          u.length
        ), g++;
      }
      return g;
    },
    [s]
  ), f = ae(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), g = d(
      m,
      u
    );
    l(g === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (b) => b.visibleItems.length === g && b.overflowItems.length === t.length - g ? b : {
      visibleItems: t.slice(0, g),
      overflowItems: t.slice(g)
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
const nt = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: i = 0,
  minSize: l,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Ys(n, i);
  return W(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: p("relative flex h-full flex-col", r),
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
nt.displayName = "VerticalOverflowList";
const Fc = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((i) => /* @__PURE__ */ e(vt, { ...i }, i.title)) }) : /* @__PURE__ */ e(
  nt,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (i) => /* @__PURE__ */ e(vt, { ...i }, i.title)
  }
) : null, Js = ({ onClick: t, children: n }) => {
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
function Ac({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: i
}) {
  return /* @__PURE__ */ e(Js, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: p(
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
const Zs = G(
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
        "icon" in i && i.icon && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e(U, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e(Ze, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Lc = G(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: i, color: l, ...s }) => /* @__PURE__ */ e(
          Zs,
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
), Xs = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const i = p(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: i, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: i, children: r });
};
function Oc({
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
    Xs,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(Vr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(Ur, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          Ln,
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
const Qs = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function on({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: i
}) {
  const l = p(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Qs, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: l, children: [
    /* @__PURE__ */ e(In, { module: i ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const eo = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function yt({
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
  const u = p(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(eo, { onClick: (g) => {
    g.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ e(
        U,
        {
          icon: l,
          size: "md",
          className: p("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ e(
        U,
        {
          icon: s,
          size: "md",
          className: p("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(Pn, { ...a }),
      r && /* @__PURE__ */ e(Te, { ...r }),
      !!i && /* @__PURE__ */ e(Ye, { value: i })
    ] })
  ] });
}
function Ec({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: i
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((l) => /* @__PURE__ */ e(on, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ e(
    nt,
    {
      items: t,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ e(on, { ...l, onClick: a }, l.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function Pc({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((l) => /* @__PURE__ */ e(yt, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ e(
    nt,
    {
      items: t,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ e(yt, { ...l, onClick: r }),
      minSize: a
    }
  );
}
const to = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), _c = G(
  function({ title: n, titleValue: a, titleTooltip: r, list: i }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            ye,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(U, { icon: En, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      i.map((s) => /* @__PURE__ */ e(to, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function Dc({
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
      vi,
      {
        data: a,
        legend: i,
        hideTooltip: l
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: i ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: p(
          "text-f1-foreground",
          i ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const oa = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, no = ({
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
    const u = oa(
      a,
      r
    ), m = Math.abs(u), g = Math.floor(m / 60), b = Math.floor(m % 60), h = `${g.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${h}` : `${n.overtime} ${h}`;
  })(), f = we[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ct = "--:--", ao = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: we.empty
    };
  if (!n)
    return {
      value: 1,
      color: we.empty
    };
}, ro = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, i = oa(
    n,
    a
  ), l = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = r || (i ?? 0) < 0 ? void 0 : ao(
    i ?? 0,
    l
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const g = (m.to.getTime() - m.from.getTime()) / 1e3, b = m.variant === "clocked-in" ? Math.min(g, c) : 0, y = (g - b) / l;
        return c -= b, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: b / l + y,
            color: we.overtime
          }
        ] : [
          ...u,
          {
            value: b / l,
            color: we.overtime
          },
          {
            value: y,
            color: we[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: we.empty
  }), f;
}, io = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((g) => g.variant === "clocked-in")?.from, i = t.at(-1), l = r ? Tt(r) : ct, s = n === void 0 || n > 0 ? ct : i ? Tt(i.to) : ct, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: l,
    secondaryLabel: s,
    time: m
  };
}, we = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function lo({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = ro({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: i, secondaryLabel: l, time: s } = io({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(yi, { width: 156, height: 156, children: /* @__PURE__ */ e(
      wi,
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
          Hr,
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
function so({
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
            className: p(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? n
          }
        ),
        /* @__PURE__ */ e(U, { icon: Gr })
      ]
    }
  );
}
function Tc({
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
  onChangeBreakTypeId: g,
  canShowBreakButton: b = !0,
  canSeeGraph: h = !0,
  canSeeRemainingTime: y = !0,
  // onClickProjectSelector,
  onChangeLocationId: N,
  canShowProject: F = !0,
  projectSelectorElement: O,
  breakTypeName: z
}) {
  const { status: _, statusText: E, subtitle: L, statusColor: j } = no({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: y
  }), T = _ === "clocked-out", w = m?.map((R) => ({
    value: R.id,
    label: R.duration ? `${R.name} · ${R.duration}` : R.name,
    description: R.description,
    tag: R.isPaid ? r.paid : r.unpaid
  })) ?? [], [k, I] = P(!1), S = () => {
    if (w.length > 1)
      k || I(!0);
    else {
      const R = w?.[0]?.value;
      u?.(R);
    }
  }, $ = (R) => {
    g?.(R), I(!1), u?.(R);
  }, x = T && l.length && !c && s, C = l.find((R) => R.id === i), v = l.map((R) => ({
    value: R.id,
    label: R.name,
    icon: R.icon
  })), V = _ === "break", [ee, ie] = P(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: E }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                Y.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: j
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
                    backgroundColor: j
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
              icon: zt
            }
          ) }),
          _ === "clocked-in" && /* @__PURE__ */ o(X, { children: [
            b && /* @__PURE__ */ e(X, { children: w.length > 1 && g ? /* @__PURE__ */ e(
              Ue,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: $,
                open: k,
                onOpenChange: I,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  H,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Rt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              H,
              {
                onClick: S,
                label: r.break,
                variant: "neutral",
                icon: Rt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Bt
              }
            )
          ] }),
          _ === "break" && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ e(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Bt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              H,
              {
                onClick: d,
                label: r.resume,
                icon: zt
              }
            )
          ] })
        ] })
      ] }),
      h && /* @__PURE__ */ e(
        lo,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: y ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: x ? /* @__PURE__ */ o(X, { children: [
      /* @__PURE__ */ e(
        Ue,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: i,
          options: v,
          onChange: N,
          open: ee,
          onOpenChange: ie,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            so,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      F && O
    ] }) : /* @__PURE__ */ o(X, { children: [
      s && C && /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(Te, { text: C.name, icon: C.icon }) }),
      F && O,
      V && z && /* @__PURE__ */ e(Te, { text: z })
    ] }) })
  ] }) });
}
const oo = {
  done: Yr,
  "in-progress": qr,
  todo: Kr
}, co = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function uo({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const i = () => {
    a?.(t);
  }, l = K(() => {
    if (!r)
      return oo[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    yt,
    {
      id: t.id,
      title: t.text,
      icon: l,
      iconClassName: co[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: Jr
      } : void 0,
      count: t.counter,
      onClick: i
    }
  );
}
function zc({
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
    ).map(({ id: u, text: m, badge: g, counter: b }) => ({
      id: u,
      text: m,
      badge: g,
      counter: b,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: i }) : s.slice(0, r).map((d) => /* @__PURE__ */ e(
    uo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var fo = Object.defineProperty, mo = Object.defineProperties, ho = Object.getOwnPropertyDescriptors, Ke = Object.getOwnPropertySymbols, ca = Object.prototype.hasOwnProperty, da = Object.prototype.propertyIsEnumerable, cn = (t, n, a) => n in t ? fo(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, fe = (t, n) => {
  for (var a in n || (n = {})) ca.call(n, a) && cn(t, a, n[a]);
  if (Ke) for (var a of Ke(n)) da.call(n, a) && cn(t, a, n[a]);
  return t;
}, at = (t, n) => mo(t, ho(n)), go = (t, n) => {
  var a = {};
  for (var r in t) ca.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && Ke) for (var r of Ke(t)) n.indexOf(r) < 0 && da.call(t, r) && (a[r] = t[r]);
  return a;
}, po = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, bo = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), xo = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = fe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, vo = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = fe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, yo = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let i = fe({}, r);
  return i.left = n.left + t.width, po(i) || bo({ usedSpot: i, spotsList: a }) ? null : i;
}, wo = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((i, l, s) => {
  if (i === a) return yo({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = xo({ position: n, spot: i, stone: r });
  return c || vo({ position: n, stone: r, spot: i }) || i;
});
function No(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let i = n[a];
    if (t(i)) return i;
  }
  return null;
}
var Co = (t, n) => n.filter(t), Io = (t, n) => [...n].sort(t), ko = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, So = (t) => Io(ko, t), Fo = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, Ao = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, Lo = ({ availableSpots: t, stone: n }) => No((a) => Ao(a, n), t);
function Oo({ stone: t, availableSpots: n, containerSize: a }) {
  let r = Lo({ availableSpots: n, stone: t }), i = { left: r.left, top: r.top }, l = Fo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), s = [...n, l], c = wo({ spots: s, position: i, optimalSpot: r, stone: t });
  return s = [...Co(Boolean, c)], s = So(s), { position: i, availableSpots: s };
}
var Eo = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, i = [], l = [{ top: 0, left: 0, right: n }];
  for (let s of t) {
    let c = Oo({ availableSpots: l, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), i.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: i, containerHeight: r };
}, Po = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), _o = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: l, containerHeight: s, stones: c, availableSpots: d }, f] = P({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let g = Po(t.current), b = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (b === null) return;
    let h = Eo({ stones: g, containerSize: b });
    f(at(fe({}, h), { stones: g }));
  }, [a, t, n, r, i]), { positions: l, containerHeight: s, stones: c, availableSpots: d };
}, Do = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), To = ({ transition: t, transitionDuration: n }) => t ? { transition: Do(n)[t] } : null, zo = (t) => t ? at(fe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Ro = ({ style: t, position: n, transition: a, transitionDuration: r }) => fe(fe(at(fe({}, t), { position: "absolute" }), zo(n)), To({ transition: a, transitionDuration: r }));
function Bo(t, n, a) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, i);
    }, n);
  };
}
var $o = () => {
  let [t, n] = P(), a = M(Bo(n, 300));
  return W(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, Wo = (t) => {
  let [n, a] = P(null);
  return W(() => {
    let r = new ResizeObserver((i) => {
      for (let l of i) a(l.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Mo = (t) => {
  var n = t, { children: a, style: r, transition: i = !1, transitionDuration: l = 500, transitionStep: s = 50 } = n, c = go(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = M([]), f = M(null), u = $o(), m = Wo(f), { positions: g, containerHeight: b } = _o({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), h = fe({ minHeight: b ?? 0, position: "relative" }, r);
  return e("div", at(fe({ ref: f, style: h }, c), { children: zn.map(a, (y, N) => {
    if (typeof y != "object" || !y || !("type" in y)) return y;
    let F = { style: Ro({ style: y.props.style, position: g[N], transition: i, transitionDuration: l }), ref: (O) => d.current[N] = O };
    return Tn(y, fe(fe({}, y.props), F));
  }) }));
};
const jo = { sm: 340, md: 480, lg: 640 }, dn = G(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const i = jo[a], [l, s] = P(), c = zn.toArray(n), d = M(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, i]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: l === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Mo, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), Vo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Rc = re(dn, () => /* @__PURE__ */ e(_n, { children: /* @__PURE__ */ e(dn, { children: Vo.map((t, n) => /* @__PURE__ */ e(Ie.Skeleton, { height: t }, n)) }) })), un = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), Bc = re(
  G(function({ children: n }, a) {
    return /* @__PURE__ */ e(qe, { ref: a, showBar: !1, children: /* @__PURE__ */ e(un, { children: n }) });
  }),
  () => /* @__PURE__ */ e(_n, { orientation: "horizontal", children: /* @__PURE__ */ o(un, { children: [
    /* @__PURE__ */ e(Ie.Skeleton, {}),
    /* @__PURE__ */ e(Ie.Skeleton, {}),
    /* @__PURE__ */ e(Ie.Skeleton, {})
  ] }) })
);
function Uo({
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
    Ni,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const $c = se(
  Q("WidgetEmptyState", Uo)
), ua = G(
  ({ title: t, children: n }, a) => (Zr(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
ua.displayName = "WidgetSection";
const Wc = se(
  Q("WidgetSection", ua)
), Mc = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const i = Xr(), l = window.location.pathname, s = K(() => n?.length ? n.includes(l) : a?.length ? !a.includes(l) : !0, [l, n, a]), c = K(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return s ? r : (i && console.error(c), null);
}, jc = se(
  ge(
    {
      name: "ScrollArea",
      type: "layout"
    },
    qe
  )
);
export {
  tc as ActivityItemList,
  Il as ActivityItemListSkeleton,
  Zi as AiPromotionChat,
  Xi as AiPromotionChatProvider,
  lc as ApplicationFrame,
  xd as AreaChart,
  yc as AreaChartWidget,
  vc as AutoGrid,
  Sr as Badge,
  vd as BarChart,
  wc as BarChartWidget,
  Cl as BaseActivityItemList,
  yd as BaseBanner,
  Ll as BaseCelebration,
  $l as BaseCommunityPost,
  Hc as BaseTabs,
  Gc as BreadcrumbSelect,
  Ai as Breadcrumbs,
  vt as CalendarEvent,
  Fc as CalendarEventList,
  wd as CardSelectableContainer,
  ni as Carousel,
  Nd as CategoryBarChart,
  Dc as CategoryBarSection,
  nc as Celebration,
  Ol as CelebrationSkeleton,
  Sc as ChartWidgetEmptyState,
  Kc as Chip,
  Tc as ClockInControls,
  Cd as ComboChart,
  rc as CommunityPost,
  Wl as CommunityPostSkeleton,
  Zl as CompanySelector,
  Ye as Counter,
  Rc as Dashboard,
  sc as DaytimePage,
  qc as DetailsItem,
  Yc as DetailsItemsList,
  Id as Dialog,
  ke as Dropdown,
  ec as EntitySelect,
  kd as F0ActionBar,
  Sd as F0AiBanner,
  In as F0AvatarModule,
  Jc as F0ButtonToggle,
  Xo as F0Callout,
  Fd as F0NumberInput,
  Zc as F0SearchInput,
  Ad as F0SegmentedControl,
  Ld as F0TableOfContent,
  Od as F0TextAreaInput,
  Xc as F0TextInput,
  Qo as F0VersionHistory,
  Ed as F1SearchBox,
  Pd as FILE_TYPES,
  Qc as FileItem,
  ac as HighlightBanner,
  Lc as IndicatorsList,
  _d as Input,
  Dd as Item,
  Td as ItemSectionHeader,
  zd as LineChart,
  Nc as LineChartWidget,
  fc as Menu,
  ed as MobileDropdown,
  Rd as NotesTextEditor,
  Bd as NotesTextEditorPatchTargetNotFoundError,
  $d as NotesTextEditorSkeleton,
  Wd as NotesTextEditorUnsupportedPatchTypeError,
  Md as NumberInput,
  oc as OmniButton,
  gc as OneApprovalHistory,
  td as OneCalendar,
  nd as OneCalendarInternal,
  jd as OneDataCollection,
  Vd as OneDateNavigator,
  Ni as OneEmptyState,
  Ud as OnePagination,
  ic as OnePersonListItem,
  Mc as OneRestrictComponent,
  cc as Page,
  Zo as PageHeader,
  Lt as PageHeaderNavigationContext,
  Yo as PageHeaderNavigationProvider,
  Ra as PageNavigation,
  Hd as PieChart,
  Cc as PieChartWidget,
  Cs as PrivateBox,
  Gd as ProgressBarChart,
  Kd as RadarChart,
  _l as Reactions,
  qd as ResourceHeader,
  hr as RichTextDisplay,
  Yd as RichTextEditor,
  jc as ScrollArea,
  mc as SearchBar,
  Jd as SectionHeader,
  Ue as Select,
  Dr as Shortcut,
  hc as Sidebar,
  dc as SidebarFooter,
  uc as SidebarHeader,
  pn as Spinner,
  xc as Split,
  bc as Stack,
  kc as SummariesWidget,
  ad as Switch,
  rd as Tabs,
  id as TabsSkeleton,
  zc as TasksList,
  Zd as Textarea,
  ld as ToggleGroup,
  sd as ToggleGroupItem,
  ye as Tooltip,
  _c as TwoColumnsList,
  Xd as VerticalBarChart,
  Ic as VerticalBarChartWidget,
  pt as VirtualList,
  od as WeekStartDay,
  cd as Weekdays,
  Ie as Widget,
  Oc as WidgetAvatarsListItem,
  $c as WidgetEmptyState,
  Ac as WidgetHighlightButton,
  Ec as WidgetInboxList,
  on as WidgetInboxListItem,
  Wc as WidgetSection,
  Pc as WidgetSimpleList,
  yt as WidgetSimpleListItem,
  Bc as WidgetStrip,
  Qd as actionBarStatuses,
  eu as buttonToggleSizes,
  tu as buttonToggleVariants,
  dd as chipVariants,
  nu as downloadAsCSV,
  au as generateCSVContent,
  ud as getGranularityDefinition,
  fd as getGranularityDefinitions,
  md as getGranularitySimpleDefinition,
  hd as granularityDefinitions,
  gd as modules,
  ru as predefinedPresets,
  pd as rangeSeparator,
  gs as seedFromStorage,
  iu as selectSizes,
  Qe as useAiPromotionChat,
  lu as useDataCollectionData,
  pc as useDataCollectionItemNavigation,
  ci as useDataCollectionSource,
  su as useExportAction,
  ou as useInfiniteScrollPagination,
  Vi as usePageHeaderItemNavigation,
  Jo as usePageHeaderNavigation,
  Le as useSidebar
};
