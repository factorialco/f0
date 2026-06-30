import { h as Ia, B as Sa, i as Fa, j as Aa, k as Bt, l as Me, m as Be, n as La, o as b, p as Y, q as ye, u as le, T as Pa, r as Oa, s as Ea, R as Ta, t as _a, v as ie, w as Da, x as Ct, y as ft, z as Ge, A as Se, E as za, G as Ba, H as V, J as xn, K as kt, L as be, M as Ra, N as $a, O as vn, Q as Ma, S as ja, U as H, V as z, W as Fe, X as Wa, Y as Va, Z as Ua, _ as Ha, $ as Ga, a0 as Ee, a1 as yn, a2 as we, a3 as Ke, e as wn, a4 as Pe, a5 as Ka, a6 as Nn, a7 as se, a8 as Z, a9 as Cn, aa as kn, ab as qa, ac as In, ad as ge, ae, af as Ya, ag as Ja, ah as Za, ai as Xa, aj as Qa, ak as ve, al as Xe, am as er, an as tr, ao as nr, ap as ar, aq as Qe, ar as Sn, as as rr, at as ir, au as lr, av as qe, aw as sr, ax as Fn, ay as or, az as cr, aA as dr, aB as ur, aC as fr, aD as mr, aE as hr, aF as gr, aG as mt, aH as An, aI as ht, aJ as Ln, aK as pr, aL as br, aM as xr, aN as vr, aO as yr, aP as $e, aQ as et, aR as gt, aS as Pn, aT as wr, aU as It, aV as Nr, aW as Cr, aX as kr, aY as Oe, aZ as Ir, a_ as Sr, a$ as je, b0 as Rt, b1 as pt, b2 as Fr, b3 as Ar, a as Lr, b as Pr, b4 as On, b5 as Or, g as Er, F as Tr, b6 as _r, b7 as En, b8 as Dr, b9 as Tn, ba as zr, bb as _n, bc as Br, bd as Rr, be as Dn, bf as $r, bg as Mr, bh as jr, bi as Wr, bj as zn, bk as Vr, bl as Ur, bm as Hr, bn as Bn, bo as Gr, bp as Kr, bq as qr, br as Yr, bs as pe, bt as St, bu as Ft, bv as At, bw as Rn, bx as Lt, by as $n, bz as Mn, bA as Jr, bB as Zr, bC as Xr, bD as Qr, bE as ei, bF as ti, bG as ni, bH as ai, bI as $t, bJ as ri, bK as ii, bL as Mt, bM as jt, bN as Wt, bO as li, bP as si, bQ as oi, bR as ci, bS as jn, bT as di, bU as ui } from "./F0CanvasPanel-CQb1kPnU.js";
import { c5 as bd, c4 as xd, ch as vd, c1 as yd, c2 as wd, bV as Nd, bW as Cd, ck as kd, bX as Id, bY as Sd, cl as Fd, c3 as Ad, cd as Ld, ce as Pd, ci as Od, bZ as Ed, c7 as Td, c6 as _d, b_ as Dd, b$ as zd, cf as Bd, cm as Rd, cg as $d, cj as Md, cc as jd, c9 as Wd, cb as Vd, c8 as Ud, c0 as Hd, ca as Gd } from "./F0CanvasPanel-CQb1kPnU.js";
import { jsx as t, jsxs as o, Fragment as X } from "react/jsx-runtime";
import ue, { forwardRef as K, useRef as W, useTransition as fi, useState as E, useLayoutEffect as Wn, useId as bt, useContext as Ne, createContext as Te, useEffect as j, useCallback as ne, useMemo as G, Fragment as mi, isValidElement as hi, cloneElement as Vn, Children as Un } from "react";
import { C as gi, P as pi, a as Hn, M as bi, p as xi, b as vi, R as Vt, c as Gn, u as yi, d as wi, e as Ni, f as Ci, g as ki, h as Kn, S as Ii, A as Si, B as Fi, L as Ai, i as Li, V as Pi, j as Oi, k as Ei, l as Ti, O as _i } from "./useDataCollectionSource-DfmXV39K.js";
import { r as qd, s as Yd, o as Jd, H as Zd, t as Xd, z as Qd, a8 as eu, G as tu, q as nu, aa as au, a9 as ru, Q as iu, ad as lu, F as su, Y as ou, U as cu, J as du, af as uu, K as fu, Z as mu, _ as hu, v as gu, ab as pu, ac as bu, N as xu, $ as vu, a5 as yu, a7 as wu, w as Nu, y as Cu, D as ku, W as Iu, ae as Su, X as Fu, T as Au, ag as Lu, x as Pu, E as Ou, m as Eu, n as Tu, a1 as _u, a2 as Du, a6 as zu, I as Bu, a3 as Ru, a0 as $u, a4 as Mu } from "./useDataCollectionSource-DfmXV39K.js";
const Di = Ia("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), qn = K(({ className: e, items: n }, a) => /* @__PURE__ */ t(Sa, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(Fa, {}),
  /* @__PURE__ */ t(Aa, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
qn.displayName = "CollapsedBreadcrumbItem";
const Pt = 50, zi = 120, Ye = 8;
function Bi(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let i = e - r - Ye, l = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, l = c, s++;
  }
  if (s < a)
    for (i -= Pt; i < 0 && s > 1; )
      i += n[l], l++, s--;
  return Math.max(2, s);
}
function Ut(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ye;
    default:
      return e[0] + Pt + e[e.length - 1] + Ye;
  }
}
function Ri(e, n) {
  return zi * e + (n ? Pt : 0) + Ye;
}
function $i(e, n, a = []) {
  if (!e) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Ri(
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
      minWidth: Ut(i)
    };
  const l = Bi(e, i);
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
    minWidth: Ut(i)
  };
}
function Mi({ breadcrumbs: e, append: n }) {
  const a = W(null), r = W(null), [, i] = fi(), [l, s] = E(null), c = (l?.collapsedItems || []).length > 0;
  return Wn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, g = Array.from(f.children);
      i(() => {
        const p = $i(
          h,
          e,
          g
        );
        s(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || l && !l.headItem ? /* @__PURE__ */ t(Bt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Bt,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: l?.minWidth
      },
      children: [
        /* @__PURE__ */ t(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: e.map((d, f) => /* @__PURE__ */ t(
              Me,
              {
                item: d,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              Be(d)
            ))
          }
        ),
        l && l.headItem && /* @__PURE__ */ o(La, { children: [
          /* @__PURE__ */ t(
            Me,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${Be(l.headItem)}`
          ),
          c && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              qn,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((d, f) => /* @__PURE__ */ t(
              Me,
              {
                item: d,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              Be(d)
            ))
          ] }),
          !c && /* @__PURE__ */ t(X, { children: l.tailItems.map((d, f) => /* @__PURE__ */ t(
            Me,
            {
              item: d,
              isLast: f === l.tailItems.length - 1,
              isFirst: !1,
              children: f === l.tailItems.length - 1 ? n : void 0
            },
            Be(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Be(e.at(-1)) ?? 0}`
  );
}
const ji = ye({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Ht = [
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
], Wi = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...i
}, l) => {
  const s = bt(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...g
  } = i;
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(ji({ size: n }), h),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
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
            ...g.style
          },
          ...(({ style: p, ...x }) => x)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Ht.map((p) => /* @__PURE__ */ t("clipPath", { id: `${s}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${s}-circle)`, children: Ht.map((p) => /* @__PURE__ */ t(
              Y.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${p.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? p.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? p.delay : 0,
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
                    delay: e ? p.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${p.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: p.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ t(
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
              p.id
            )) })
          ]
        }
      )
    }
  );
}, Yn = K(Wi), Jn = Te(null), Vi = 15, Ui = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [i, l] = E(n), [s, c] = E(!1), [d, f] = E(!0), [u, m] = E(
    Vi
  ), h = W(null), g = (x) => {
    h.current = x;
  }, p = () => {
    h.current && h.current();
  };
  return j(() => {
    l(n);
  }, [n]), j(() => {
    if (s && a?.(), !s) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [s, a]), /* @__PURE__ */ t(
    Jn.Provider,
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
        clear: p,
        setClearFunction: g
      },
      children: e
    }
  );
}, Ae = () => {
};
function tt() {
  const e = Ne(Jn);
  return e === null ? {
    enabled: !1,
    setEnabled: Ae,
    open: !1,
    setOpen: Ae,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ae,
    setAutoClearMinutes: Ae,
    clear: Ae,
    setClearFunction: Ae,
    autoClearMinutes: null
  } : e;
}
const Zn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: i } = tt(), l = le(), [s, c] = E(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(Pa, { children: /* @__PURE__ */ o(Oa, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Ea, { asChild: !0, children: /* @__PURE__ */ t(
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
        children: /* @__PURE__ */ t(
          Ta,
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
              ie(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              _a,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Yn,
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
    !i && /* @__PURE__ */ t(Da, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, Gt = "one_sidebar_locked", Xn = Te(void 0);
function _e() {
  const e = Ne(Xn);
  return e === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : e;
}
function Hi({ children: e }) {
  const { currentPath: n } = Ct(), [a, r] = E(!1), [i, l] = E(!1), s = a ? Ge.xl : Ge.md, c = ft(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = E(() => {
    const N = localStorage.getItem(Gt);
    return N !== null ? !!N : !0;
  }), [u, m] = E(!1), [h, g] = E(
    null
  ), p = ne(
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
  ), v = G(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return j(() => {
    m(!1);
  }, [n]), j(() => {
    i && localStorage.setItem(Gt, d ? "1" : "");
  }, [d, i]), j(() => () => {
    g(v);
  }, [v]), /* @__PURE__ */ t(
    Xn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: v,
        toggleSidebar: p,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const Kt = Y.create(V), qt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Gi = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, i] = E(!1), l = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Se, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ie()
      ),
      onClick: l,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Kt,
        {
          size: "sm",
          icon: za,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: qt,
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
      ) : /* @__PURE__ */ t(
        Kt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Ba,
          className: "outline-none",
          variants: qt,
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
};
function Yt({
  icon: e,
  target: n,
  fallbackLabel: a
}) {
  const r = !n, i = n?.title || a, l = n?.onClick, s = l ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    be,
    {
      ...l ? { onClick: l, type: "button" } : { href: s ?? "" },
      title: r ? void 0 : i,
      "aria-label": i,
      disabled: r,
      noAutoTooltip: r,
      noTitle: r,
      size: "sm",
      variant: "outline",
      label: i,
      icon: e,
      hideLabel: !0
    }
  );
}
function Ki({ previous: e, next: n, counter: a }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    a && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      a.current,
      "/",
      a.total
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        Yt,
        {
          icon: xn,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        Yt,
        {
          icon: kt,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const qi = ({
  currentModule: e,
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
  const [m, h] = E("idle"), [g, p] = E(null), [x, ...v] = g ?? [], [N, T] = E(!1);
  j(() => {
    p(null), h("idle");
  }, [e]);
  const B = ne(async () => {
    try {
      h("fetching");
      const _ = await a();
      h("idle"), p(_);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Ra,
    {
      open: N,
      onOpenChange: async (_) => {
        T(_), _ && g === null && B(), s(_);
      },
      children: [
        /* @__PURE__ */ t($a, { asChild: !0, children: /* @__PURE__ */ t(
          be,
          {
            variant: "outline",
            icon: vn,
            hideLabel: !0,
            label: n,
            pressed: N,
            append: f && /* @__PURE__ */ t(Ot, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Ma, { children: /* @__PURE__ */ o(
          ja,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Zi, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(el, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Xi, { ...i, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Yi,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: v.map((_, P) => /* @__PURE__ */ t(
                    Ji,
                    {
                      ..._,
                      onClick: d
                    },
                    P
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Qi,
                  {
                    ...l,
                    onClick: () => {
                      B();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                tl,
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
}, Yi = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: i,
  onClick: l
}) => {
  const s = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Wa,
    {
      onClick: l,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Fe,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(s, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: c ? /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
              "video",
              {
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
              Va,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: i })
              ] }),
              r && /* @__PURE__ */ t(Ot, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Ji = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: i
}) => {
  const l = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Ua, { asChild: !0, className: l, onClick: i, children: /* @__PURE__ */ t(
    Fe,
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
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(Ot, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Zi = ({
  title: e,
  url: n,
  onClick: a
}) => /* @__PURE__ */ o(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ t("h2", { className: "text-base font-medium", children: e }),
      /* @__PURE__ */ t(
        H,
        {
          variant: "outline",
          size: "sm",
          icon: kt,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Qn = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: i
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        i
      ),
      children: e
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), Xi = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Qn,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(V, { icon: vn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Fe, { href: a, children: /* @__PURE__ */ t(H, { label: n }) })
  }
), Qi = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Qn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(V, { icon: Ha, size: "lg" }),
    button: /* @__PURE__ */ t(H, { variant: "outline", label: a, onClick: r })
  }
), el = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(z, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(z, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(z, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Ot = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", e)
  }
), tl = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [i, l] = E(e);
  j(() => {
    l(e);
  }, [e]);
  const s = () => {
    l(!1), n && n();
  }, c = (d) => {
    l(!1), r(), d && d();
  };
  return i && /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ t(Ga, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          H,
          {
            variant: "ghost",
            icon: Ee,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        gi,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            pi,
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
}, Et = Te(null), pc = Et.Provider;
function bc() {
  return Ne(Et);
}
function nl(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", i = e !== null, l = e?.previousItem ?? null, s = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, h = e?.hasNext ?? !1, g = e?.goToPrevious, p = e?.goToNext;
  return G(() => {
    if (!i) return null;
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, v = (B, _) => (B !== null ? a?.(B) : void 0) ?? _, N = r === "callback" ? m ? { onClick: g, title: v(l, "Previous") } : void 0 : c !== null ? { url: c, title: v(l, "Previous") } : void 0, T = r === "callback" ? h ? { onClick: p, title: v(s, "Next") } : void 0 : d !== null ? { url: d, title: v(s, "Next") } : void 0;
    return !N && !T && !x ? null : { previous: N, next: T, counter: x };
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
    g,
    p,
    a
  ]);
}
function xc({
  module: e,
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
  const { sidebarState: u, toggleSidebar: m } = _e(), h = Ne(Et), g = l ?? h ?? void 0, p = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], x = n && Object.keys(n).length !== 0, v = i && a.length > 0, N = !i && r.length > 0, T = !i && !!s?.isVisible, B = p[p.length - 1], _ = "navigation" in window ? window.navigation : null, P = i && (_ ? !!_.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Se, { children: !i && u !== "locked" && /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                H,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: yn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: b(
                "flex flex-grow items-center gap-2",
                P && "justify-center"
              ),
              children: [
                i && P && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  H,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: xn,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || v ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in B ? /* @__PURE__ */ t(z, { className: "h-4 w-24" }) : B.label }) : /* @__PURE__ */ t(
                  Mi,
                  {
                    breadcrumbs: p,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Gi,
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
          !i && x && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(we, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            Ke,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(Ke, { text: n.text, variant: n.variant }) }),
          !i && x && (g || N || T) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          g && /* @__PURE__ */ t(Ki, { ...g }),
          g && N && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (T || N) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            T && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              qi,
              {
                ...s,
                currentModule: e.name
              }
            ) }),
            N && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((L, U) => /* @__PURE__ */ t(al, { action: L }, U)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              wn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Zn, {})
          ] })
        ] })
      ]
    }
  );
}
function al({ action: e }) {
  const n = W(null), [a, r] = E(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Pe, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    be,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    be,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Fe,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        be,
        {
          size: "md",
          variant: i,
          label: e.label,
          icon: e.icon,
          hideLabel: !0,
          onClick: (l) => {
            l.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const rl = () => {
  const e = le();
  return /* @__PURE__ */ o(
    Y.div,
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
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ t(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: e.ai.inputPlaceholder,
            className: b(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          be,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Ka,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, il = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = W(null);
  j(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, ll = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: i
  } = tt();
  return il({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(Se, { children: n && /* @__PURE__ */ t(
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
      children: /* @__PURE__ */ t("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ t(
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
          children: e
        }
      ) })
    },
    "chat-window"
  ) });
}, sl = ({ action: e, onClose: n }) => {
  const a = () => {
    e.onClick(), n();
  };
  switch (e.buttonType) {
    case "gradient":
      return /* @__PURE__ */ t(
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
          children: e.isLoading ? /* @__PURE__ */ t(Nn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        be,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, ol = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: i,
  actions: l,
  onShow: s,
  onHide: c,
  children: d
}) => /* @__PURE__ */ t(
  Ui,
  {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: l,
    onShow: s,
    onHide: c,
    children: d
  }
), cl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: l,
    setOpen: s,
    onHide: c
  } = tt(), d = () => {
    s(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(ll, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      be,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ee,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Yn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(Cn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      l?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, u) => /* @__PURE__ */ t(
        sl,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(rl, {}) })
  ] }) : null;
}, dl = se(
  Z("AiPromotionChat", cl)
), ul = se(
  Z("AiPromotionChatProvider", ol)
), ea = ye({
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
}), Jt = {
  positive: In,
  warning: qa,
  info: kn
}, Zt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, fl = K(
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
        className: ea({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Zt[l]
                ),
                children: [
                  Jt[l] && /* @__PURE__ */ t(V, { icon: Jt[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: Zt[l] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              H,
              {
                variant: "ghost",
                icon: Ee,
                size: "sm",
                hideLabel: !0,
                onClick: a,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: b(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: i.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
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
), ml = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: ea({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(z, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(z, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(z, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(z, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(z, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(z, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), ta = K(
  (e, n) => /* @__PURE__ */ t(fl, { ref: n, ...e })
), hl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ml, { compact: e, variant: n });
ta.displayName = "F0Callout";
const vc = ae(
  se(ta),
  hl
), na = K(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, i) => {
    const l = le(), s = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), s)) : 0, d = Array.from({ length: s }, (u, m) => m < c), f = Ya(a);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-label": r,
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": c,
        "aria-valuetext": l.t("audioPlayer.position", {
          current: c,
          total: s
        }),
        className: b("flex h-2 w-full gap-1"),
        children: d.map((u, m) => /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex-1 rounded-full bg-f1-background-secondary",
              "transition-all duration-300 ease-in-out motion-reduce:transition-none"
            ),
            style: u ? { backgroundColor: f } : void 0
          },
          m
        ))
      }
    );
  }
);
na.displayName = "F0SegmentedBar";
const yc = se(
  Z("F0SegmentedBar", na)
);
function gl({
  title: e,
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
        ie("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(V, { icon: Ja, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          ge,
          {
            lines: 1,
            className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
            children: e
          }
        )
      ]
    }
  );
}
function pl({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: i } = Za(), l = Xa(i), s = Qa(n, "PPPp", { locale: l }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ie("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            ve,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            ge,
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
function bl({
  title: e,
  versions: n,
  currentVersion: a,
  activeVersionId: r
}) {
  return /* @__PURE__ */ o(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": e,
      children: [
        /* @__PURE__ */ t(
          ge,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(Xe, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            gl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            pl,
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
const wc = se(
  Z("F0VersionHistory", bl)
), aa = K(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: i }, l) => {
    const s = ue.useRef(null);
    ue.useImperativeHandle(
      l,
      () => s.current,
      []
    );
    const c = er({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: s,
        className: b("scrollbar-macos w-full overflow-auto", r),
        style: {
          height: `${e}px`
        },
        children: /* @__PURE__ */ t(
          "div",
          {
            style: {
              height: `${c.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: c.getVirtualItems().map((d) => /* @__PURE__ */ t(
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
                children: d ? i(d) : /* @__PURE__ */ t(X, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
aa.displayName = "VirtualList";
const xt = Z("VirtualList", aa), ra = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const i = new RegExp(`(${n})`, "gi"), l = e.split(i);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: l.map(
    (s, c) => s.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ t(
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
function nt(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(e);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && n?.();
}
function at(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(e);
  i > 0 ? r[i - 1].focus() : r.length > 0 && n?.();
}
const xl = ({
  entity: e,
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
  const m = e.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), p = (v) => {
    v.preventDefault(), v.stopPropagation(), !f && (n ? r(e) : a(e));
  }, x = (v) => {
    if (v.key === "Enter" || v.key === " ") {
      if (v.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else v.key === "ArrowDown" ? nt(v.currentTarget, s) : v.key === "ArrowUp" && at(v.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: b(
        i,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          ve,
          {
            src: e.avatar,
            firstName: h,
            lastName: g,
            size: "xs",
            deactivated: e.deactivated
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              ra,
              {
                text: e.name,
                search: l,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Sn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: p,
            onKeyDown: x,
            className: b(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          V,
          {
            className: "text-f1-icon-selected",
            icon: In,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Ue = ({
  groupView: e,
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
  showGroupIcon: g = !1,
  singleSelector: p = !1,
  disabled: x = !1,
  hiddenAvatar: v = !1
}) => {
  const [N, T] = E(!1);
  if (!e)
    return /* @__PURE__ */ t(
      xl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: i,
        onSelect: s,
        onRemove: c,
        singleSelector: p,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: v
      }
    );
  const B = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && p)
      d(!n);
    else if (L.key === "Enter") {
      if (x) return;
      !i || l ? s(r) : i && c(r);
    } else L.key === "ArrowDown" ? nt(L.currentTarget, f) : L.key === "ArrowUp" && at(L.currentTarget, u);
  }, _ = () => {
    if (N)
      d(!n), T(!1);
    else {
      if (x || p) return;
      i ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const P = i || l;
  return /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        H,
        {
          hideLabel: !0,
          icon: n ? tr : nr,
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
            g && /* @__PURE__ */ t(
              V,
              {
                icon: ar,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                ra,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(Qe, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Sn,
              {
                checked: P,
                disabled: x,
                onClick: _,
                onKeyDown: B,
                indeterminate: l,
                onPointerDown: (L) => {
                  L.stopPropagation(), T(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", p ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Ue.displayName = "EntitySelectListItem";
const Xt = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? nt(l.currentTarget, a) : l.key === "ArrowUp" && at(l.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": e,
    className: b(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ t(
        H,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: rr,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: b("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Re = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      H,
      {
        disabled: e.disabled,
        variant: e.variant,
        onClick: e.onClick,
        label: e.label,
        icon: e.icon,
        size: "sm"
      }
    );
  const a = [e, ...n ?? []], r = a.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], i = (s) => {
    const c = a.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, l = a.every((s) => s.disabled);
  return /* @__PURE__ */ t(
    ir,
    {
      items: r,
      value: e.label,
      disabled: l,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, vl = ({
  actions: e,
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
  const u = !c && (n || a), m = e && e.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let g, p, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || i
  } : void 0, v = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !l
  } : void 0;
  return x || (x = v, v = void 0), m && u ? (g = /* @__PURE__ */ t(
    Re,
    {
      primaryAction: x,
      secondaryActions: v ? [v] : []
    }
  ), p = /* @__PURE__ */ t(
    Re,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ t(
    Re,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ t(Re, { primaryAction: x, secondaryActions: [] }), v && (p = /* @__PURE__ */ t(Re, { primaryAction: v, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    p
  ] }) });
}, yl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: i,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(V, { icon: Di, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), nt(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), at(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    V,
    {
      icon: lr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), st = 384, ot = 36, wl = 37, Qt = 1, en = 200, tn = '[data-avatarname-navigator-element="true"]', Nl = ({
  groupView: e,
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
  onGroupChange: g,
  onToggleExpand: p,
  searchPlaceholder: x,
  selectAllLabel: v,
  clearLabel: N,
  notFoundTitle: T,
  notFoundSubtitle: B,
  className: _,
  actions: P,
  onCreate: L,
  onCreateLabel: U,
  singleSelector: R = !1,
  loading: w = !1,
  disabled: S = !1,
  hiddenAvatar: k = !1
}) => {
  const A = ue.useRef(null), M = G(
    () => e ? n.reduce(
      (F, q) => F + (q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: 0 });
    }, Qt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(tn)
      )[0]?.focus();
    }, en);
  }, []), C = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, Qt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(tn)
      );
      F[F.length - 1]?.focus();
    }, en);
  }, []), I = G(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), O = ne(
    (F) => {
      const q = I.get(F.id);
      if (!e)
        return {
          selected: !!q,
          partialSelected: !!q
        };
      const ee = (F.subItems ?? []).filter(
        (D) => q?.subItems?.some(
          (Q) => Q.subId === D.subId
        )
      ), J = (F.subItems?.length ?? 0) === ee.length, de = !J && ee.length > 0;
      return { selected: J, partialSelected: de };
    },
    [e, I]
  ), re = ne(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ t(
          Xt,
          {
            label: U ?? "",
            onCreate: () => L?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const q = L ? F.index - 1 : F.index, ee = n[q], { selected: J, partialSelected: de } = O(ee);
      return /* @__PURE__ */ t(
        Ue,
        {
          expanded: ee.expanded ?? !1,
          onExpand: () => p(ee, !0),
          search: i,
          groupView: e,
          entity: ee,
          onSelect: l,
          onRemove: s,
          selected: J,
          partialSelected: de,
          showGroupIcon: Cl(a, r),
          singleSelector: R,
          goToFirst: y,
          goToLast: C,
          disabled: S,
          hiddenAvatar: k
        },
        ee.id
      );
    },
    [
      L,
      U,
      S,
      n,
      O,
      y,
      C,
      e,
      a,
      k,
      s,
      l,
      p,
      i,
      r,
      R
    ]
  ), te = G(() => e ? n.flatMap((F) => {
    const q = We(
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
      ...(F.subItems ?? []).map((ee) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? q?.expanded ?? !1
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
  })), [e, n, h]), $ = ne(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ t(
          Xt,
          {
            label: U ?? "",
            onCreate: () => L?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const q = L ? F.index - 1 : F.index, ee = te[q].parent, J = te[q].subItem;
      if (!ee) {
        const D = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, Q = We(
          h,
          D.id
        ), ce = (D?.subItems ?? []).filter(
          (ze) => Q?.subItems?.some(
            (ka) => ka.subId === ze.subId
          )
        ), he = (D.subItems?.length ?? 0) === ce.length, Ca = !he && ce.length > 0;
        return /* @__PURE__ */ t(
          Ue,
          {
            groupView: !0,
            expanded: D.expanded ?? !1,
            onExpand: (ze) => p(D, ze),
            search: i,
            entity: D,
            onSelect: l,
            onRemove: s,
            selected: he,
            partialSelected: Ca,
            showGroupIcon: a.find((ze) => ze.value === r)?.groupType === "team",
            singleSelector: R,
            goToFirst: y,
            goToLast: C,
            hideLine: q === te.length - 1,
            disabled: S,
            hiddenAvatar: k
          }
        );
      }
      let de = !!We(h, J.subId);
      if (!de) {
        const D = We(
          h,
          ee.id
        );
        de = !!(ee?.subItems ?? []).filter(
          (ce) => D?.subItems?.some(
            (he) => he.subId === ce.subId
          )
        ).find((ce) => ce.subId === J.subId);
      }
      return /* @__PURE__ */ t(
        Ue,
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
            d(ee, J);
          },
          onRemove: () => c(ee, J),
          selected: !!de,
          partialSelected: !1,
          singleSelector: R,
          goToFirst: y,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: k
        }
      );
    },
    [
      te,
      h,
      i,
      R,
      y,
      C,
      l,
      s,
      a,
      S,
      p,
      r,
      d,
      c,
      k,
      L,
      U
    ]
  ), [Ce, xe] = G(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, q = 0;
    if (!e)
      F = n.length, q = n.reduce(
        (de, { id: D }) => de + (I.has(D) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...I.values()].flatMap(
          (D) => D.subItems?.map((Q) => Q.subId) ?? []
        )
      );
      n.forEach((D) => {
        const Q = D.subItems ?? [];
        F += Q.length, q += Q.filter(
          (ce) => de.has(ce.subId)
        ).length;
      });
    }
    const ee = F > 0 && q === F, J = q > 0;
    return [ee, J];
  }, [n, I, e]), ke = te.length, oe = !R && (v || N), lt = P && P.length > 0, De = !w && (!R && oe || lt);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        R || w ? "rounded-r-xl" : "",
        _
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              R || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                yl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: y,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                qe,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: g,
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
              De ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(Nn, {}) }),
              !w && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: st
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: T }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: B })
                  ]
                }
              ),
              !w && (!!M || L) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                xt,
                {
                  height: st,
                  itemCount: ke + (L ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && L) return ot;
                    const q = L ? F - 1 : F;
                    return te[q]?.parent === null ? wl : ot;
                  },
                  renderer: $,
                  ref: A
                }
              ) : /* @__PURE__ */ t(
                xt,
                {
                  height: st,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: ot,
                  renderer: re,
                  ref: A
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          vl,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: R,
            totalFilteredEntities: M,
            allVisibleSelected: Ce,
            anyVisibleSelected: xe,
            selectAllLabel: v,
            clearLabel: N,
            disabled: S,
            actions: P
          }
        )
      ]
    }
  );
}, We = (e, n) => e.find((a) => a.id === n), Cl = (e, n) => e.find((a) => a.value === n)?.groupType === "team", kl = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  sr,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ t(
      Fn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: or, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      V,
      {
        icon: Ee,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), Il = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  disabled: l = !1,
  hiddenAvatar: s = !1
}) => {
  const c = G(() => {
    const f = e ? r.flatMap(
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
  }, [e, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: i && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      i
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      xt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            kl,
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
          ) : /* @__PURE__ */ t(X, {});
        }
      }
    ) })
  ] });
}, Sl = 500, nn = 520, an = 210, rn = ({
  groupView: e,
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
  const g = (l ?? nn) < Sl, p = !c && !s && !g, x = l ?? nn, v = p ? x - an : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: s && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: v + 1 + "px" },
            children: /* @__PURE__ */ t(
              Nl,
              {
                ...h,
                groupView: e,
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
        p && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: an + "px"
            },
            children: /* @__PURE__ */ t(
              Il,
              {
                groupView: e,
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
}, Fl = ({
  placeholder: e,
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
  maxLength: g,
  loading: p = !1,
  required: x = !1,
  readonly: v = !1,
  append: N,
  size: T = "sm",
  open: B
}) => {
  const _ = G(
    () => a.some(
      (R) => R.subItems && R.subItems.length > 0
    ),
    [a]
  ), P = G(() => _ ? a.flatMap(
    (R) => (R.subItems ?? []).map((w) => ({
      parent: R,
      subItem: w
    }))
  ) : a.map((R) => ({
    parent: null,
    subItem: {
      subId: R.id,
      subName: R.name,
      subAvatar: R.avatar,
      subDeactivated: R.deactivated
    }
  })), [_, a]), L = P.length === 0 ? void 0 : P.length === 1 ? P[0].subItem.subName : P.length + " " + n, U = P.length === 1 ? P[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    cr,
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
      maxLength: g,
      clearable: !1,
      value: L,
      disabled: r,
      loading: p,
      required: x,
      readonly: v,
      size: T,
      avatar: i || !U ? void 0 : {
        type: "person",
        firstName: U,
        lastName: "",
        src: P[0].subItem.subAvatar,
        deactivated: P[0].subItem.subDeactivated
      },
      append: N ?? /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t(dr, { open: B, disabled: r, size: T }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            P.length === 1 && !i || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            ge,
            {
              tag: "span",
              className: P.length === 1 && P[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: P.length === 0 ? e ?? "" : P.length === 1 ? P[0].subItem.subName : `${P.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Nc = (e) => {
  const [n, a] = E(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), e.onOpenChange?.(w);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, l] = E(e.entities), [s, c] = E(""), [d, f] = ur("", 300), u = G(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = Ne(fr), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function p(w) {
    if (e.singleSelector) {
      e.onSelect(w), a(!1);
      return;
    }
    const S = e.selectedEntities ?? [], k = i.find((I) => I.id === w.id);
    if (!k)
      return;
    const A = new Set(
      (k.subItems ?? []).map((I) => I.subId)
    ), M = /* @__PURE__ */ new Set([k.id]);
    i.forEach((I) => {
      I.id !== k.id && (I.subItems ?? []).some(
        (re) => A.has(re.subId)
      ) && M.add(I.id);
    });
    const y = [...S];
    function C(I) {
      const O = y.findIndex((re) => re.id === I.id);
      O >= 0 ? y[O] = I : y.push(I);
    }
    M.forEach((I) => {
      const O = i.find(($) => $.id === I);
      if (!O) return;
      const re = O.subItems?.filter(
        ($) => A.has($.subId)
      ) ?? [], te = y.findIndex(($) => $.id === I);
      if (te >= 0) {
        const $ = y[te].subItems ?? [], Ce = new Set($.map((ke) => ke.subId)), xe = [
          ...$,
          ...re.filter((ke) => !Ce.has(ke.subId))
        ];
        C({
          ...O,
          subItems: xe
        });
      } else
        C({
          ...O,
          subItems: re
        });
    }), e.onSelect(y);
  }
  function x(w, S) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...S }] }), a(!1);
    else {
      const k = e.selectedEntities ?? [], A = new Set(k.map((C) => C.id)), M = new Map(
        k.map((C) => [C.id, C.subItems ?? []])
      );
      A.add(w.id), e.entities.forEach((C) => {
        C.subItems?.some(
          (O) => O.subId === S.subId
        ) && A.add(C.id);
      });
      const y = [];
      e.entities.forEach((C) => {
        if (A.has(C.id)) {
          let O = [...M.get(C.id) ?? []];
          C.subItems?.some(
            ($) => $.subId === S.subId
          ) && (O.some(
            (Ce) => Ce.subId === S.subId
          ) || O.push(S));
          const te = new Set(
            (C.subItems ?? []).map(($) => $.subId)
          );
          O = O.filter(
            ($) => te.has($.subId)
          ), y.push({
            ...C,
            subItems: O
          });
        }
      }), e.onSelect(y);
    }
  }
  function v(w) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let S = [];
    const k = e.selectedEntities ?? [];
    if (u) {
      const A = i.find(
        (y) => y.id === w.id
      );
      if (!A)
        return;
      const M = new Set(
        (A.subItems ?? []).map((y) => y.subId)
      );
      for (const y of k) {
        const C = (y.subItems ?? []).filter(
          (I) => !M.has(I.subId)
        );
        C.length > 0 && S.push({
          ...y,
          subItems: C
        });
      }
    } else
      S = (k ?? []).filter((A) => A.id !== w.id);
    e.onSelect(S);
  }
  function N(w, S) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const k = e.selectedEntities ?? [], A = S.subId, M = [];
    for (const y of k) {
      const C = y.subItems?.filter((I) => I.subId !== A) ?? [];
      C.length > 0 && M.push({
        ...y,
        subItems: C
      });
    }
    e.onSelect(M);
  }
  function T() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let S = [];
    if (u) {
      const k = new Set(
        i.flatMap(
          (A) => (A.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const A of w) {
        const M = (A.subItems ?? []).filter(
          (y) => !k.has(y.subId)
        );
        M.length > 0 && S.push({
          ...A,
          subItems: M
        });
      }
    } else {
      const k = new Set(
        i.map((A) => A.id)
      );
      S = (w ?? []).filter((A) => !k.has(A.id));
    }
    e.onSelect(S);
  }
  function B() {
    const w = [...e.selectedEntities ?? []];
    i.forEach((S) => {
      const k = w.find((A) => A.id === S.id);
      if (!k)
        w.push({
          ...S,
          subItems: S.subItems || []
        });
      else {
        const A = Array.from(
          /* @__PURE__ */ new Set([
            ...k.subItems ?? [],
            ...S.subItems ?? []
          ])
        );
        k.subItems = A;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const _ = (w) => {
    c(w), f(w);
  }, P = (w, S) => {
    e.onItemExpandedChange(w.id, S), l(
      i.map(
        (k) => k.id === w.id ? { ...k, expanded: !w.expanded } : k
      )
    );
  };
  j(() => {
    if (!d) {
      l(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const S = e.entities.map((k) => {
        const A = Al(k, d), M = k.subItems?.map((y) => ({
          ...y,
          score: Je(
            d,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, C) => y.score - C.score);
        return {
          ...k,
          score: A,
          expanded: k.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((k) => k.score < 1 / 0).sort((k, A) => k.score - A.score);
      l(S);
    } else {
      const w = e.entities.map((S) => {
        const k = Je(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: k };
      }).filter((S) => S.score < 1 / 0).sort((S, k) => S.score - k.score);
      l(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    l
  ]);
  const L = W(null), [U, R] = E(0);
  return Wn(() => {
    const w = () => {
      L.current && R(L.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: L,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        rn,
        {
          groupView: u,
          entities: i,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: p,
          onRemove: v,
          onSubItemRemove: N,
          onSubItemSelect: x,
          onClear: T,
          onSelectAll: B,
          selectedEntities: e.selectedEntities ?? [],
          search: s,
          onSearch: _,
          onToggleExpand: P,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? U - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(mr, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      hr,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          Fl,
          {
            selected: e.selectedItemsCopy,
            selectedEntities: e.selectedEntities ?? [],
            hiddenAvatar: e.hiddenAvatar,
            label: e.label,
            labelIcon: e.labelIcon,
            icon: e.icon,
            error: e.error,
            status: e.status,
            hint: e.hint,
            hideLabel: e.hideLabel,
            maxLength: e.maxLength,
            value: e.value?.toString() ?? void 0,
            disabled: e.disabled,
            placeholder: e.placeholder,
            loading: e.alwaysOpen ? e.loading : !1,
            required: e.required,
            readonly: e.readonly,
            append: e.append,
            size: e.size,
            open: n
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      gr,
      {
        container: g,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          rn,
          {
            groupView: u,
            entities: i,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: p,
            onRemove: v,
            onSubItemRemove: N,
            onSubItemSelect: x,
            onClear: T,
            onSelectAll: B,
            selectedEntities: e.selectedEntities ?? [],
            search: s,
            onSearch: _,
            onToggleExpand: P,
            searchPlaceholder: e.searchPlaceholder,
            selectAllLabel: e.selectAllLabel,
            clearLabel: e.clearLabel,
            selectedLabel: e.selectedLabel,
            singleSelector: e.singleSelector,
            loading: e.loading,
            notFoundTitle: e.notFoundTitle,
            notFoundSubtitle: e.notFoundSubtitle,
            width: e.width,
            disabled: e.disabled,
            hiddenAvatar: e.hiddenAvatar,
            actions: e.actions,
            onCreate: e.onCreate,
            onCreateLabel: e.onCreateLabel
          }
        )
      }
    )
  ] });
};
function vt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function ln(e) {
  return vt(e).split(/\s+/).filter((n) => n.length > 0);
}
function Je(e = "", n) {
  const a = ln(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const i = vt(r), l = ln(r), s = vt(e);
    if (i.includes(s) || a.every(
      (d) => l.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Al(e, n) {
  const a = Je(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((i, l) => {
    const s = Je(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(i, s);
  }, 1 / 0)), Math.min(a, r);
}
const Ll = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: i,
  category: l,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = mt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = An(n, {
    yesterdayRelative: !1
  });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
      onClick: () => {
        c(e);
      },
      children: [
        /* @__PURE__ */ t(ht, { icon: i ?? Ln }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: a,
              children: a
            }
          ),
          /* @__PURE__ */ t(
            "p",
            {
              className: "line-clamp-2 text-f1-foreground-secondary",
              title: r,
              children: r
            }
          ),
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${l} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: s && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Pl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(z, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(z, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(z, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Tt = Z(
  "ActivityItem",
  ae(Ll, Pl)
), ia = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Ol = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(ia, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Tt,
  {
    ...i,
    onClick: () => a(i.id),
    onVisible: r
  },
  i.id
)) }), El = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(ia, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(Tt.Skeleton, {}, r)) }), He = ae(Ol, El), Tl = 3, _l = ["today", "yesterday", "lastWeek", "lastMonth"], Dl = (e) => xr(e, ([n]) => {
  const a = _l.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), yt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), zl = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: i = 5
}) => {
  const l = le(), s = pr(e, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = br((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Dl(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ue.Fragment, { children: [
      /* @__PURE__ */ t(
        He,
        {
          title: u in l.date.groups ? l.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(yt, {})
    ] }, u)),
    n && new Array(Tl).fill(null).map((u, m) => /* @__PURE__ */ t(Tt.Skeleton, {}, m))
  ] });
}, Bl = () => {
  const e = le();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(He.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(yt, {}),
    /* @__PURE__ */ t(
      He.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(yt, {}),
    /* @__PURE__ */ t(
      He.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Cc = Z(
  "ActivityItemList",
  ae(zl, Bl)
), Rl = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, $l = {
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
function Ml({
  firstName: e,
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
        a ? "" : $l[vr(
          [e, n].join("")
        )]
      ),
      children: [
        a && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${a}")` }
          }
        ),
        /* @__PURE__ */ t("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ o("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ t(
                ve,
                {
                  src: a,
                  firstName: e,
                  lastName: n,
                  size: "2xl"
                }
              )
            }
          ),
          r && /* @__PURE__ */ t(
            "div",
            {
              ref: s,
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Hn,
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
function jl(e) {
  const n = W(null), a = W(), r = ne(() => {
    const l = n.current;
    if (!l) return;
    const s = yr.create(l, {
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
        disableForReducedMotion: e,
        colors: [
          c[Math.floor(Math.random() * c.length)]
        ]
      });
    }, 100);
  }, [e]), i = ne(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: i };
}
const Wl = ({
  link: e,
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
  const [m, h] = E(s), g = W(null);
  j(() => {
    h(s);
  }, [s]);
  const p = (_) => {
    h(_), c?.(_);
  }, x = $e(), { canvasRef: v, handleMouseEnter: N, handleMouseLeave: T } = jl(x), B = et({
    emoji: Rl[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Fe,
    {
      href: e,
      onClick: i,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ie()
      ),
      onMouseEnter: x ? void 0 : N,
      onMouseLeave: x ? void 0 : T,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: v,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Ml,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: l,
            lastEmojiReaction: m,
            onReactionSelect: p,
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
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: B })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(gt, { date: u }) })
        ] })
      ]
    }
  );
}, Vl = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(z, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(z, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(z, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), kc = ae(Wl, Vl), Ic = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(Pn, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(H, { label: a, variant: "outline", onClick: r }) })
] });
function Ul({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: i
}) {
  const [l, s] = E(a), [c, d] = E(n), f = W(null), { fireEmojiConfetti: u } = wr(), m = (p, x) => {
    p.stopPropagation(), d(c + (l ? -1 : 1)), s(!l), i?.(x), l || u(x, f);
  }, h = r?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ t(
    It,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (p) => {
        m(p, e);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        l && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Nr(e),
      prepend: /* @__PURE__ */ t(et, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        Cr,
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
  return h ? /* @__PURE__ */ t(we, { label: h, children: g }) : g;
}
function Hl({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      H,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Hn, { onSelect: n, locale: a }),
    e.map((i) => /* @__PURE__ */ t(
      Ul,
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
const Gl = Z("Reactions", Hl), la = K(function({ content: n, collapsed: a, id: r, className: i, tabIndex: l }, s) {
  return /* @__PURE__ */ t(
    kr,
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
la.displayName = "BasePostDescription";
const Kl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(z, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(z, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), sa = ae(
  la,
  Kl
), sn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Oe,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ t(
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
), wt = K(
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
          !m && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${l}`
                }
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${l}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ t(
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
                !!n && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(X, { children: [
                  /* @__PURE__ */ t(gt, { date: f }),
                  /* @__PURE__ */ t(
                    V,
                    {
                      icon: kt,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(gt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(sn, { tags: c }),
              d && /* @__PURE__ */ t(sn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), ql = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), oa = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && ql.has(a);
}, Yl = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let i = Ir(r);
  const l = (s) => {
    s.stopPropagation();
  };
  return a && (i = `${i} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: oa(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(X, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(z, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      wt,
      {
        title: e,
        description: i,
        color: Sr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Jl = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(z, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(z, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(z, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(z, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), ca = ae(Yl, Jl), Zl = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const i = le();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ie()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": a,
      onClick: r,
      children: i.actions.seeMore
    }
  ) });
}, Xl = ({
  id: e,
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
  actions: g,
  dropdownItems: p,
  noReactionsButton: x = !1,
  descriptionExpandable: v = !1
}) => {
  const N = bt(), T = bt(), B = W(null), [_, P] = E(null), [L, U] = E(!1), R = [f.views, f.comments].filter(Boolean).join(" · "), w = v && _?.id === e && _.description === l, S = !w, k = An(r), A = () => {
    s(e);
  }, M = (I) => {
    I.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, C = (I) => {
    I.preventDefault(), I.stopPropagation(), l && P({ id: e, description: l });
  };
  return j(() => {
    w && B.current?.focus();
  }, [w]), j(() => {
    v || P(null);
  }, [v]), j(() => {
    const I = B.current;
    if (!v || !I || w) {
      U(!1);
      return;
    }
    const O = () => {
      U(
        I.scrollHeight > I.clientHeight
      );
    };
    if (O(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver(O);
    return re.observe(I), () => re.disconnect();
  }, [v, w, l]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: A,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          je,
          {
            href: n.url || "#",
            title: y,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              ve,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(ht, { icon: Rt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(X, { children: [
                  /* @__PURE__ */ t(
                    je,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
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
                  /* @__PURE__ */ t(
                    je,
                    {
                      href: n.url,
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ht, { icon: Rt, size: "sm" }) }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: b(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ t(
                  je,
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
                  g?.map((I) => /* @__PURE__ */ t(
                    H,
                    {
                      hideLabel: !I.label,
                      ...I.icon && { icon: I.icon },
                      variant: "outline",
                      size: "md",
                      onClick: I.onClick,
                      label: I.label ?? "",
                      title: I.label ?? ""
                    },
                    I.label
                  )),
                  p?.length && /* @__PURE__ */ t(
                    Pe,
                    {
                      items: p,
                      icon: pt,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Pe,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...p ?? []
                    ],
                    icon: pt,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: k }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
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
              l && /* @__PURE__ */ o(X, { children: [
                /* @__PURE__ */ t(
                  sa,
                  {
                    ref: B,
                    id: T,
                    content: l,
                    collapsed: S,
                    tabIndex: w ? -1 : void 0,
                    className: b(w && ie())
                  }
                ),
                v && L && !w && /* @__PURE__ */ t(
                  Zl,
                  {
                    describedBy: N,
                    controls: T,
                    expanded: w,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: oa(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: M,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(z, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(ca, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: R }),
          !x && /* @__PURE__ */ t(
            Gl,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: Fr
              }
            }
          )
        ] })
      ]
    }
  );
}, Ql = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(z, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(z, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(z, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(z, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(z, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(sa.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(z, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(ca.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(z, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(z, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Sc = ae(
  Xl,
  Ql
), da = ue.forwardRef(({ person: e, onClick: n, ...a }, r) => {
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
        /* @__PURE__ */ t(
          ve,
          {
            firstName: e.firstName,
            lastName: e.lastName,
            src: e.avatarUrl,
            badge: e.avatarBadge
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center gap-1", children: [
            /* @__PURE__ */ t("span", { className: "truncate font-medium", children: `${e.firstName} ${e.lastName}` }),
            a.info && /* @__PURE__ */ t(we, { label: a.info, children: /* @__PURE__ */ t(
              V,
              {
                icon: kn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((l, s) => /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(Oe, { ...l }, l.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(Ar, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              H,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
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
}), es = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(z, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(z, { className: "h-4" }),
    /* @__PURE__ */ t(z, { className: "h-4" })
  ] })
] });
da.displayName = "OnePersonListItem";
const Fc = se(
  Z(
    "OnePersonListItem",
    ae(da, es)
  )
), ts = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function ns({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Hi, { children: /* @__PURE__ */ t(
    as,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function as({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  const l = r?.enabled ? Lr : i?.enabled ? ul : mi, s = r?.enabled ? r : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(l, { ...s, children: /* @__PURE__ */ t(
    ss,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const Ac = Z(
  "ApplicationFrame",
  ns
), rs = ({ contentId: e }) => {
  const n = le();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: ie(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function is(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function ls(e, n) {
  const { sidebarState: a, toggleSidebar: r } = _e(), i = W(e);
  j(() => {
    n && is(
      e,
      i.current,
      a
    ) && r({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, a, r]);
}
function ss({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: i
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = _e(), f = $e(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: g,
    closeCanvas: p,
    chatWidth: x,
    resizable: v
  } = Pr(), N = m === "fullscreen", T = m === "canvas", { open: B } = tt(), _ = v ? x : Or, P = W(N), L = N && !P.current, U = !N && P.current, [
    R,
    w
  ] = E(!1);
  j(() => {
    !N && P.current && w(!0), P.current = N;
  }, [N]);
  const S = N || R || U, k = G(() => L ? { duration: 0.15, ease: "easeOut" } : U ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [L, U]), A = ft(
    `(max-width: ${Ge.xl}px)`,
    { initializeWithValue: !0 }
  ), M = ft(`(max-width: ${Ge.md}px)`, {
    initializeWithValue: !0
  });
  return j(() => {
    d(u);
  }, [u, d]), j(() => {
    d(B);
  }, [B, d]), ls(u, A), /* @__PURE__ */ t(
    bi,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(On, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Se, { children: l === "unlocked" && /* @__PURE__ */ t(
            Y.nav,
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
              ref: (y) => {
                l === "hidden" ? y?.setAttribute("inert", "") : y?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(rs, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Y.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !M ? _ : 0
              },
              transition: { paddingRight: ts },
              children: [
                /* @__PURE__ */ t(
                  Y.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      S ? "overflow-hidden" : "overflow-auto",
                      !u && !B && "xs:pr-1",
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ t(
                      Y.div,
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
                e?.enabled && T && h && /* @__PURE__ */ t(
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
                    children: /* @__PURE__ */ t(
                      Er,
                      {
                        content: h,
                        onClose: p,
                        entities: g
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  Y.div,
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
                        S || T ? "z-20" : "z-0",
                        l === "hidden" && S ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: M || N ? "100%" : _
                    },
                    transition: k,
                    onAnimationComplete: () => {
                      R && w(!1);
                    },
                    children: /* @__PURE__ */ t(Tr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(dl, {})
        ] }) })
      ] })
    }
  );
}
const ua = ({
  firstName: e,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: l,
  onPulseClick: s
}) => {
  const c = le(), [d, f] = E(!l);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Se, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
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
      children: /* @__PURE__ */ t(
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
          children: /* @__PURE__ */ t(et, { emoji: "👋", size: "md" })
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
        /* @__PURE__ */ t(
          Fn,
          {
            type: "rounded",
            name: [e, n],
            src: a,
            size: "lg",
            color: "random",
            "aria-label": r,
            "aria-labelledby": i
          }
        ),
        l ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          It,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              V,
              {
                icon: vi[l],
                color: xi[l],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
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
            children: /* @__PURE__ */ t(
              be,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: _r,
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
ua.displayName = "PulseAvatar";
const os = ye({
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
function fa({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: s } = _e();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: os({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || i === "hidden") && /* @__PURE__ */ t(
              H,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: yn,
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
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    ua,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    ve,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: s ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
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
            /* @__PURE__ */ t(wn, {}),
            /* @__PURE__ */ t(Zn, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              s && "-mt-3"
            ),
            children: e
          }
        )
      ]
    }
  );
}
fa.displayName = "DaytimePage";
const Lc = se(
  Z("DaytimePage", fa)
);
function cs(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: i, target: l }) => ({
    label: n,
    description: a,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function ds({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Pe, { items: cs(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ie()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(V, { icon: En, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Pc = se(
  Z("OmniButton", ds)
);
function ma({ children: e, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !a && "xs:rounded-xl"
      ),
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
ma.displayName = "Page";
const Oc = se(Z("Page", ma)), us = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), ha = Te(null), ga = Te(null), on = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), Ve = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), Ec = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, i] = E(n), [l, s] = E(
    a
  ), c = G(
    () => ({
      setGroups: i,
      setActiveChat: (f) => s(f ?? void 0),
      upsertChat: (f, u) => i((m) => m.some(
        (g) => g.chats.some((p) => p.id === u.id)
      ) ? Ve(
        m,
        (g) => g.map((p) => p.id === u.id ? { ...p, ...u } : p)
      ) : on(m, f, (g) => ({
        ...g,
        chats: [...g.chats, u]
      }))),
      updateChat: (f, u) => i(
        (m) => Ve(
          m,
          (h) => h.map((g) => g.id === f ? { ...g, ...u } : g)
        )
      ),
      removeChat: (f) => i(
        (u) => Ve(u, (m) => m.filter((h) => h.id !== f))
      ),
      setUnread: (f, u) => i(
        (m) => Ve(
          m,
          (h) => h.map((g) => g.id === f ? { ...g, unreadCount: u } : g)
        )
      ),
      reorder: (f, u) => i(
        (m) => on(m, f, (h) => {
          const g = new Map(h.chats.map((v) => [v.id, v])), p = u.map((v) => g.get(v)).filter((v) => !!v), x = h.chats.filter((v) => !u.includes(v.id));
          return { ...h, chats: [...p, ...x] };
        })
      )
    }),
    []
  ), d = G(
    () => ({
      groups: r,
      activeChatId: l,
      unreadChatsCount: us(r)
    }),
    [r, l]
  );
  return /* @__PURE__ */ t(ga.Provider, { value: c, children: /* @__PURE__ */ t(ha.Provider, { value: d, children: e }) });
}, fs = () => {
  const e = Ne(ha);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, pa = () => {
  const e = Ne(ga);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, ms = () => {
  const e = fs(), n = pa();
  return G(() => ({ ...e, ...n }), [e, n]);
}, Tc = () => pa(), _t = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: i,
  highlightWhenCollapsed: l,
  isDragging: s,
  wasDragging: c
}) => {
  const [d, f] = E(n), u = $e(), m = l && !d, h = () => {
    if (s || c?.current) return;
    const g = !d;
    f(g), r?.(g);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Dr, { open: d, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ie("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: h,
        tabIndex: 0,
        onKeyDown: (g) => {
          (g.key === "Enter" || g.key === " ") && h();
        },
        children: [
          /* @__PURE__ */ t(
            "span",
            {
              className: b(
                "transition-colors",
                m && "font-semibold text-f1-foreground"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ t(
            Y.div,
            {
              initial: !1,
              animate: { rotate: d ? 0 : -90 },
              transition: { duration: u ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(V, { icon: Tn, size: "xs" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(zr, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      Y.div,
      {
        initial: !1,
        animate: {
          height: d ? "auto" : 0,
          opacity: d ? 1 : 0,
          visibility: d ? "visible" : "hidden"
        },
        transition: {
          duration: u ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: i })
      }
    ) })
  ] }) });
}, hs = ({
  presence: e,
  isActive: n
}) => e === "offline" ? null : /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -bottom-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
  "span",
  {
    "aria-hidden": "true",
    className: b(
      // The ring follows the item's hover/active state so the dot blends
      // with the highlighted row background.
      "ring-2 ring-f1-background-tertiary transition-[box-shadow] group-hover:ring-f1-background-secondary-hover",
      n && "ring-f1-background-secondary-hover",
      "h-2 w-2 rounded-full",
      "bg-f1-background-positive-bold"
    )
  }
) }), gs = ({
  chat: e,
  isActive: n,
  onClick: a
}) => {
  const r = !!e.unreadCount, i = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), l = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: a,
      "aria-pressed": n,
      className: b(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        ie("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "relative flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ t(_n, { size: "xs", avatar: e.avatar }),
          i && /* @__PURE__ */ t(hs, { presence: i, isActive: n })
        ] }),
        /* @__PURE__ */ t(
          ge,
          {
            tag: "span",
            className: b(
              "line-clamp-1 flex-1 py-0.5",
              r ? "text-f1-foreground font-semibold " : "text-f1-foreground-secondary font-medium"
            ),
            lines: 1,
            children: e.label
          }
        ),
        (l || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          l && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            Br,
            {
              icon: l.icon,
              size: "sm",
              "aria-label": l.label,
              color: "default"
            }
          ) }),
          e.unreadCount && /* @__PURE__ */ t(
            "div",
            {
              "aria-label": `${e.unreadCount} unread`,
              className: "flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info",
              children: e.unreadCount > 99 ? "+99" : e.unreadCount
            }
          )
        ] })
      ]
    }
  );
}, ps = ({ action: e }) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: b(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      ie("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(V, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), _c = ({
  actions: e = []
}) => {
  const { groups: n, activeChatId: a, setActiveChat: r } = ms(), i = $e();
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-2 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((l) => /* @__PURE__ */ t(ps, { action: l }, l.label)) }),
    n.map((l) => {
      const s = l.chats.some((c) => c.unreadCount);
      return /* @__PURE__ */ t(
        _t,
        {
          title: l.title,
          isOpen: l.isOpen,
          highlightWhenCollapsed: s,
          children: /* @__PURE__ */ t(Se, { initial: !1, children: l.chats.map((c) => /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: i ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                gs,
                {
                  chat: c,
                  isActive: c.id === a,
                  onClick: () => {
                    r(c.id), c.onClick?.();
                  }
                }
              )
            },
            c.id
          )) })
        },
        l.id
      );
    })
  ] });
};
function bs({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: i = !1,
  additionalOptions: l = []
}) {
  const s = G(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(z, { className: "size-6" }),
    /* @__PURE__ */ t(z, { className: "h-3 w-14" })
  ] }) : e.length + (l?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    cn,
    {
      company: s,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    xs,
    {
      companies: e,
      selected: s,
      onChange: a,
      additionalOptions: l,
      children: /* @__PURE__ */ t(
        cn,
        {
          company: s,
          withNotification: i
        }
      )
    }
  ) });
}
const xs = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: i = []
}) => {
  const l = le(), [s, c] = E(!1), d = G(
    () => [
      ...e.map((u) => ({
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
    [e, i]
  ), f = (u) => {
    const m = i?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ t(
    qe,
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
            ie()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              Y.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(V, { icon: Tn, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, cn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: b(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        Rr,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: Dn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(ge, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function Dc({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: i,
  onDropdownClick: l,
  hasActivityUpdates: s
}) {
  const c = le();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Pe, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ie("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ t(
            ve,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(ge, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ t(we, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        H,
        {
          icon: Ln,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t($r, { type: "highlight", size: "sm", icon: Dn }) })
    ] }) })
  ] });
}
function vs({ isExpanded: e }) {
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
        /* @__PURE__ */ t(
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
        /* @__PURE__ */ t(
          "path",
          {
            id: "arrow",
            d: e ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: b(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: b(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function ys() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = _e(), i = W(null);
  return j(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    It,
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ t(vs, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ t(V, { icon: Ee, size: "md" }) })
      ]
    }
  );
}
function zc({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: i,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      bs,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: l,
        withNotification: r,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(ys, {})
  ] });
}
function ws() {
  const [e, n] = E(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const ba = Te(void 0);
function Ns({ children: e }) {
  const [n, a] = E(!1), [r, i] = E(null);
  return /* @__PURE__ */ t(
    ba.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: i },
      children: e
    }
  );
}
function Dt() {
  const e = Ne(ba);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const Cs = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      V,
      {
        icon: e.icon,
        size: "md",
        className: b(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  (e.tag || e.badge) && /* @__PURE__ */ o("div", { className: "flex flex-shrink-0 items-center gap-1.5", children: [
    e.tag && /* @__PURE__ */ t(Oe, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(Qe, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), ks = ({ item: e }) => {
  const { isActive: n } = Ct(), { label: a, icon: r, ...i } = e, l = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Fe,
    {
      ...i,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ie("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(Cs, { item: e, active: l })
    }
  );
}, Is = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: i,
  total: l,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = le(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Dt(), { isActive: p } = Ct(), x = p(e.href, { exact: e.exactMatch }), v = W(!1), [N, T] = E(!1), B = i === 0, _ = i === l - 1, P = l === 1, L = G(() => {
    const A = [];
    return !P && !B && A.push({
      label: f.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: Mr
    }), !P && !_ && A.push({
      label: f.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: jr
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: Wr,
      critical: !0
    }), A;
  }, [P, B, _, f, s, i, r, e]), U = () => {
    m(!0), T(!1), g(e.href || null), v.current = !0;
  }, R = () => {
    m(!1), g(null), c(), setTimeout(() => {
      v.current = !1;
    }, 0);
  }, w = u && h === e.href, S = G(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      N && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, N, w, d]
  ), k = G(() => /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Fs, { tooltip: n, children: /* @__PURE__ */ o(
      Fe,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          w && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            V,
            {
              icon: e.icon,
              size: "md",
              className: b(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(_n, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            ge,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!n,
              children: e.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ t(
      "div",
      {
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          N && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Pe,
          {
            open: N,
            onOpenChange: T,
            items: L,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(V, { icon: pt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, N, w, L, n]);
  return d ? /* @__PURE__ */ t(
    Gn,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: U,
      onDragEnd: R,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: k
    }
  ) : /* @__PURE__ */ t("div", { className: S, children: k });
}, ct = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: i,
  currentOrder: l
}) => {
  const { isDragging: s, setIsDragging: c } = Dt(), d = W(!1), f = yi(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, l && i?.(l);
    }, 0);
  }, h = (p) => {
    !s && !d.current && r?.(e, p);
  }, g = /* @__PURE__ */ t(
    _t,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: h,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: b(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: e.items.map((p, x) => /* @__PURE__ */ t(ks, { item: p }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Gn,
    {
      id: e.id,
      value: e,
      dragConstraints: a,
      dragElastic: 0.1,
      dragControls: f,
      onDragStart: u,
      onDragEnd: m,
      layout: !0,
      layoutId: `category-${e.id}`,
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
function Bc({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: i
}) {
  const l = W(null), s = e.filter(
    (p) => p.isSortable === !1
  ), [c, d] = E(
    e.filter((p) => p.isSortable !== !1)
  ), [f, u] = E(0), m = ne((p) => {
    d(p);
  }, []), h = ne(
    (p) => {
      a?.(p);
    },
    [a]
  ), g = ws();
  return /* @__PURE__ */ t(Ns, { children: /* @__PURE__ */ t(On, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    Ss,
    {
      disableDragging: g,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: h,
      favorites: i,
      onFavoritesChange: r,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function Ss({
  nonSortableItems: e,
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
  const u = le(), { isDragging: m } = Dt(), h = e.some((y) => y.isRoot), g = e.filter((y) => !y.isRoot).length > 0, p = n.length > 0, x = W(null), [v, N] = E(s), T = s.length > 0;
  j(() => {
    JSON.stringify(s) !== JSON.stringify(v) && N(s);
  }, [s]);
  const B = (y) => {
    N(y);
  }, _ = ne(
    (y) => {
      const C = v.filter((I) => I.href !== y.href);
      N(C), c?.(C);
    },
    [v, c]
  ), P = ne(
    (y, C) => {
      if (C < 0 || C >= v.length) return;
      const I = [...v], [O] = I.splice(y, 1);
      I.splice(C, 0, O), N(I), c?.(I);
    },
    [v, c]
  ), [L, U] = E(!1), R = W(null);
  j(() => {
    n.length > 0 && !L && (a([...n]), U(!0));
  }, [n, a, L]), j(() => {
    const y = () => {
      R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), R.current !== null && window.clearTimeout(R.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", S = G(
    () => v.reduce(
      (y, C, I) => (C.label in y || (y[C.label] = []), y[C.label].push(I), y),
      {}
    ),
    [v]
  ), k = G(
    () => T && v.map((y, C) => /* @__PURE__ */ t(
      Is,
      {
        isSortable: !f,
        tooltip: (S[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: x,
        onRemove: _,
        index: C,
        total: v.length,
        onMove: P,
        onReorderFinish: () => {
          c?.(v);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      T,
      v,
      S,
      _,
      P,
      c,
      f
    ]
  ), A = "flex flex-col gap-3", M = G(() => n.map((y) => /* @__PURE__ */ t(
    ct,
    {
      category: y,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: i,
      onDragEnd: l,
      currentOrder: n
    },
    y.id
  )), [n, f, r, i, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, C) => /* @__PURE__ */ t(
          ct,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        T && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(_t, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: w, children: k }) : /* @__PURE__ */ t(
          Vt,
          {
            axis: "y",
            values: v,
            onReorder: B,
            className: w,
            children: k
          }
        ) }) }) }),
        g && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, C) => /* @__PURE__ */ t(
          ct,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        p && /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: A, children: M }) : /* @__PURE__ */ t(
              Vt,
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
const Fs = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(we, { description: e, children: n }) : n;
function Rc({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ie()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(V, { icon: zn, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Vr, { keys: a }) })
      ]
    }
  ) });
}
const dn = ({ position: e }) => /* @__PURE__ */ t(
  Y.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: b(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      e === "top" ? [
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
function As({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: i, isSmallScreen: l } = _e(), s = $e(), [c, d] = mt({ threshold: 1 }), [f, u] = mt({ threshold: 1 }), m = le(), h = {
    x: {
      ease: i !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, g = () => a ? hi(a) && r ? Vn(
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
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Xe, { className: "h-full", children: [
            /* @__PURE__ */ t(
              "div",
              {
                ref: c,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ t("div", { className: "w-[var(--ds-sidebar-width)]", children: n }),
            /* @__PURE__ */ t(
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
            !d && /* @__PURE__ */ t(dn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(dn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const $c = se(As), Ls = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
  "span",
  {
    "aria-hidden": "true",
    className: b(
      // The ring follows the item's hover/active state so the dot blends
      // with the highlighted row background.
      "ring-2 ring-f1-background-tertiary transition-[box-shadow]",
      "ring-f1-background-secondary",
      "h-2 w-2 rounded-full",
      "bg-f1-background-critical-bold"
    )
  }
) }), Ps = ({
  tab: e,
  isActive: n,
  onClick: a
}) => {
  const r = n ? "neutral" : "ghost";
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      "aria-label": e.label,
      "aria-pressed": n,
      onClick: a,
      className: b(
        Hr({ variant: r }),
        Ur({ size: "md" }),
        ie()
      ),
      children: /* @__PURE__ */ o(
        "div",
        {
          className: b(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(V, { icon: e.icon, size: "md", color: "default" }),
            /* @__PURE__ */ t(
              "span",
              {
                className: b(
                  "grid transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none",
                  n ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
                ),
                children: /* @__PURE__ */ t("span", { className: "min-w-0 overflow-hidden", children: /* @__PURE__ */ t("span", { className: "block whitespace-nowrap pl-1.5", children: e.label }) })
              }
            ),
            e.badge ? /* @__PURE__ */ t(Ls, {}) : null
          ]
        }
      )
    }
  );
}, Mc = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const i = le(), l = r.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-5 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((s) => /* @__PURE__ */ t(
          Ps,
          {
            tab: s,
            isActive: s.id === n,
            onClick: () => a(s.id)
          },
          s.id
        ))
      }
    ),
    /* @__PURE__ */ t(
      H,
      {
        variant: "ghost",
        size: "md",
        icon: zn,
        label: l,
        hideLabel: !0,
        onClick: r.onClick
      }
    )
  ] });
}, Os = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, un = {
  approved: {
    icon: Cn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ee,
    type: "critical",
    size: "sm"
  }
}, Es = {
  icon: En,
  type: "neutral",
  size: "sm"
}, Ts = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, _s = (e) => e in un ? un[e] : Es;
function fn(e) {
  return Ts[e ?? "neutral"] ?? 0;
}
const Ds = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const i = le(), l = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = i.approvals.statuses[a], c = G(() => r.map((d) => {
    const f = _s(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => fn(f.badge?.type) - fn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ t(Ke, { text: s, variant: Os[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Bn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, zs = ({ steps: e }) => {
  const a = le().approvals.history, r = e.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((i, l) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: l + 1 })
          }
        ),
        l !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, l) => /* @__PURE__ */ o(X, { children: [
        /* @__PURE__ */ t(
          Ds,
          {
            title: i.title,
            approvalsRequired: i.approvalsRequired,
            status: i.status,
            approvers: i.approvers
          },
          i.title
        ),
        l !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, jc = se(
  Z("OneApprovalHistory", zs)
), dt = (e, n) => typeof n == "string" && n in e;
function mn(e, n, a) {
  const r = {};
  let i = !1;
  const l = Gr(e);
  if (l !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(l).filter(
        ([u]) => dt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(l).length === 0) && (a.setCurrentFilters(f), r.filters = f, i = !0);
  }
  const s = e.sortings;
  if (s === null)
    a.setCurrentSortings(null), r.sortings = null, i = !0;
  else if (s && n.sortings && dt(n.sortings, s.field)) {
    const d = {
      field: s.field,
      order: s.order
    };
    a.setCurrentSortings(d), r.sortings = d, i = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (a.setCurrentSearch(e.search), r.search = e.search, i = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && dt(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(d), r.grouping = d, i = !0;
  }
  return i ? r : null;
}
function Wc(e) {
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
    deps: g = []
  } = e, p = Kr(), x = wi(n, g), [v, N] = E(null), T = v?.key === a && v.settled, B = W(x);
  B.current = x;
  const _ = W(p);
  _.current = p;
  const P = W(null), L = m === void 0 ? null : JSON.stringify(m), U = W(m);
  U.current = m;
  const R = W(null), w = () => {
    const D = U.current;
    D !== void 0 && (R.current = JSON.stringify(D), B.current.setCurrentFilters(D));
  };
  j(() => {
    if (!f || P.current === a) return;
    if (!u) {
      P.current = a, w(), N({ key: a, applied: null, settled: !1 });
      return;
    }
    let D = !1;
    return (async () => {
      let ce = null;
      try {
        const he = await _.current.get(
          a
        );
        he && !D && (ce = mn(
          he,
          B.current,
          B.current
        ));
      } catch {
      }
      D || (P.current = a, w(), N({ key: a, applied: ce, settled: !1 }));
    })(), () => {
      D = !0;
    };
  }, [a, f, u]), j(() => {
    !T || L === null || R.current !== L && w();
  }, [T, L]), j(() => {
    if (!(!f || !u))
      return qr(a, async () => {
        try {
          const D = await _.current.get(
            a
          );
          if (!D) return;
          const Q = B.current;
          mn(
            D,
            {
              filters: U.current === void 0 ? Q.filters : void 0,
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
    paginationInfo: k,
    setPage: A,
    loadMore: M,
    isLoading: y,
    isInitialLoading: C
  } = Yr(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && T,
      fetchParamsProvider: (D) => ({
        ...D,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  j(() => {
    N(
      (D) => D && D.key === a && !D.settled ? { ...D, settled: !0 } : D
    );
  }, [v, a]);
  const I = c ?? n.itemUrl, O = Ni({
    dataSource: x,
    data: S,
    paginationInfo: k,
    setPage: A,
    loadMore: M,
    isLoading: y,
    idProvider: s,
    itemUrl: I,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: l
  }), re = typeof O.activeItemId == "string" || typeof O.activeItemId == "number" ? O.activeItemId : null, te = O.activeItem !== null, $ = te && O.nextItem === null && O.hasNext, Ce = te && O.previousItem === null && O.hasPrevious, xe = re !== null && (!te || $ || Ce), ke = [
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
  ], { neighbors: oe, isSupported: lt } = Ci({
    dataAdapter: x.dataAdapter,
    id: re,
    filters: x.currentFilters,
    sortings: ke,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && T && !C && !y && xe,
    fetchParamsProvider: (D) => ({
      ...D,
      navigationFilters: x.currentNavigationFilters
    })
  }), De = G(() => s || (x.idProvider ? (D, Q) => x.idProvider(D, Q) : ki), [s, x.idProvider]), F = G(() => {
    if (!xe || oe === null) return O;
    const D = O.previousItem ?? oe.previous, Q = O.nextItem ?? oe.next, ce = (he) => he && I ? I(he) ?? null : null;
    return {
      ...O,
      previousItem: D,
      nextItem: Q,
      previousItemUrl: O.previousItemUrl ?? ce(D),
      nextItemUrl: O.nextItemUrl ?? ce(Q),
      absoluteIndex: O.absoluteIndex ?? (oe.position !== void 0 ? oe.position - 1 : null),
      totalItems: O.totalItems ?? oe.total,
      hasPrevious: O.hasPrevious || D !== null,
      hasNext: O.hasNext || Q !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: te ? O.goToPrevious : () => {
        oe.previous && O.setActiveItemId(
          De(oe.previous)
        );
      },
      goToNext: te ? O.goToNext : () => {
        oe.next && O.setActiveItemId(
          De(oe.next)
        );
      }
    };
  }, [
    O,
    xe,
    oe,
    te,
    I,
    De
  ]), q = nl(F, {
    getItemTitle: d,
    mode: h
  }), ee = f && T && lt && xe && oe === null, J = W(null), de = q ?? (ee ? J.current : null);
  return j(() => {
    q !== null && (J.current = q);
  }, [q]), {
    ...F,
    isNavigating: F.isNavigating || ee,
    isReady: T && !C,
    navigation: de,
    appliedCollectionState: v?.applied ?? null,
    dataSource: x,
    data: S,
    paginationInfo: k,
    isLoading: y
  };
}
const zt = {
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
}, Bs = ye({
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
}), Rs = ue.forwardRef(function({ className: n, gap: a, children: r, tileSize: i, ...l }, s) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: s, ...l, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(Bs({ gap: a, tileSize: i }), n),
      ref: s,
      ...l,
      children: r
    }
  ) });
}), $s = ye({
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
}), xa = K(function({
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
  width: g,
  ...p
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        $s({
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
          width: g
        }),
        n
      ),
      ref: x,
      ...p
    }
  );
}), Ms = ye({
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
}), js = ue.forwardRef(function({ className: n, gap: a, wrap: r, ...i }, l) {
  return /* @__PURE__ */ t(
    xa,
    {
      className: b(Ms({ gap: a, wrap: r }), n),
      ref: l,
      ...i
    }
  );
}), Ws = ye({
  base: "flex-col",
  variants: {
    gap: {
      ...zt
    }
  },
  defaultVariants: {}
}), Vs = K(function({ className: n, gap: a, children: r, ...i }, l) {
  return /* @__PURE__ */ t(
    xa,
    {
      className: b(Ws({ gap: a }), n),
      ref: l,
      ...i,
      children: r
    }
  );
}), Vc = pe(
  {
    name: "Stack",
    type: "layout"
  },
  Vs
), Uc = pe(
  {
    name: "Split",
    type: "layout"
  },
  js
), Hc = pe(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Rs
), Us = ({ children: e }) => {
  const { enabled: n } = Kn();
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        Y.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: n ? 0 : 1,
            scale: n ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: e
        }
      )
    }
  );
}, Hs = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Gs = K(function({ header: n, children: a, action: r, summaries: i, alert: l, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Kn();
  j(() => {
    if (l && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, s]);
  const m = (g) => !!g && !(ue.isValidElement(g) && g.type === ue.Fragment && ue.Children.count(g.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    St,
    {
      className: b(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Ft, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(At, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Hs, {}),
                /* @__PURE__ */ t(Rn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(we, { label: n.info, children: /* @__PURE__ */ t(
                V,
                {
                  icon: $n,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ t(Mn, { text: l, level: "critical" }),
              s && /* @__PURE__ */ t(Ke, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ t(
                Jr,
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
            /* @__PURE__ */ t(Us, { children: /* @__PURE__ */ t(Zr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              H,
              {
                icon: f ? Xr : Qr,
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
          i && /* @__PURE__ */ t("div", { className: "flex flex-row", children: i.map((g, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          ue.Children.toArray(a).filter(m).map((g, p) => /* @__PURE__ */ o(ue.Fragment, { children: [
            p > 0 && /* @__PURE__ */ t(Ii, { bare: !0 }),
            g
          ] }, p))
        ] }),
        r && /* @__PURE__ */ t(ei, { children: /* @__PURE__ */ t(H, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Ks = ye({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), qs = K(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      St,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Ft, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(At, { children: n.title }) : /* @__PURE__ */ t(z, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Rn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Lt,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && Ks({ height: a })),
              children: [...Array(4)].map((i, l) => /* @__PURE__ */ t(
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
), Le = se(
  Z("Widget", ae(Gs, qs))
), me = Object.assign(
  K(function({ chart: n, summaries: a, ...r }, i) {
    return /* @__PURE__ */ t(Le, { ref: i, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Le.Skeleton
  }
), Ys = ae(
  K(function({ canBeBlurred: n, ...a }, r) {
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
    return /* @__PURE__ */ t(
      me,
      {
        ref: r,
        ...i,
        chart: /* @__PURE__ */ t(Si, { ...l, canBeBlurred: n })
      }
    );
  }),
  me.Skeleton
), Js = Z(
  "AreaChartWidget",
  Ys
), Zs = K(function(n, a) {
  return /* @__PURE__ */ t(
    me,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(Fi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Xs = Z(
  "BarChartWidget",
  ae(Zs, me.Skeleton)
), Qs = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Ai, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), eo = Z(
  "LineChartWidget",
  Qs
), to = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Li, { ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), no = Z(
  "PieChartWidget",
  to
), ao = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(me, { ref: a, ...n, chart: null });
    }
  ),
  me.Skeleton
), ro = Z(
  "SummariesWidget",
  ao
), io = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Pi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), lo = Z(
  "VerticalBarChartWidget",
  io
), Gc = pe(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Js
), Kc = pe(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Xs
), qc = pe(
  {
    name: "LineChartWidget",
    type: "info"
  },
  eo
), Yc = pe(
  {
    name: "PieChartWidget",
    type: "info"
  },
  no
), Jc = pe(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  lo
), Zc = pe(
  {
    name: "SummariesWidget",
    type: "info"
  },
  ro
), so = (e, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "366",
    height: "146",
    viewBox: "0 0 366 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...e,
    children: [
      /* @__PURE__ */ t("g", { filter: "url(#filter0_b_378_17717)", children: /* @__PURE__ */ t(
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
      /* @__PURE__ */ t("g", { filter: "url(#filter1_b_378_17717)", children: /* @__PURE__ */ t(
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
      /* @__PURE__ */ t("g", { filter: "url(#filter2_b_378_17717)", children: /* @__PURE__ */ t(
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
      /* @__PURE__ */ t("g", { filter: "url(#filter3_b_378_17717)", children: /* @__PURE__ */ t(
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
      /* @__PURE__ */ t("g", { filter: "url(#filter4_b_378_17717)", children: /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ t("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ t(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ t("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ t(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ t("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ t(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ t("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ t(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ t("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ t(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ t(
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
), oo = K(so), co = (e, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "406",
    height: "179",
    viewBox: "0 0 406 179",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
          stroke: "#E51943",
          strokeOpacity: "0.1",
          strokeWidth: "1.3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
          fill: "url(#paint0_linear_3715_9085)"
        }
      ),
      /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ o(
        "linearGradient",
        {
          id: "paint0_linear_3715_9085",
          x1: "203",
          y1: "179",
          x2: "203",
          y2: "1",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ t("stop", { stopColor: "#E51943", stopOpacity: "0" }),
            /* @__PURE__ */ t("stop", { offset: "1", stopColor: "#E51943", stopOpacity: "0.05" })
          ]
        }
      ) })
    ]
  }
), uo = K(co), fo = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, mo = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, ho = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, go = {
  "line-chart": "default",
  "bar-chart": "promote"
}, po = K(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: i, buttonAction: l, type: s }, c) {
    const d = fo[s], f = mo[s], u = ho[s], m = go[s];
    return /* @__PURE__ */ o(
      St,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Ft, { className: "-mt-0.5", children: /* @__PURE__ */ t(At, { children: n }) }),
          /* @__PURE__ */ o(Lt, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(oo, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ t(uo, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
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
), Xc = se(
  Z("ChartWidgetEmptyState", po)
);
function bo(e, n) {
  const a = W(null), r = W(null), [i, l] = E({
    visibleItems: [],
    overflowItems: []
  });
  ti({
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
      const g = u[h].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = ne(
    (u, m) => {
      let h = 0, g = 0;
      for (let p = 0; p < u.length; p++) {
        const x = g + u[p];
        if (x > m + 30) break;
        g = x, g = s(
          g,
          p,
          u.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = ne(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    l(h === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (g) => g.visibleItems.length === h && g.overflowItems.length === e.length - h ? g : {
      visibleItems: e.slice(0, h),
      overflowItems: e.slice(h)
    });
  }, [e, c, d]);
  return j(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const rt = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: i = 0,
  minSize: l,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = bo(n, i);
  return j(() => {
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
        /* @__PURE__ */ t(
          "div",
          {
            ref: d,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${i}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${i}px` },
            "data-testid": "overflow-visible-container",
            children: f.map((u, m) => /* @__PURE__ */ t(
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
rt.displayName = "VerticalOverflowList";
const Qc = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((i) => /* @__PURE__ */ t(wt, { ...i }, i.title)) }) : /* @__PURE__ */ t(
  rt,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (i) => /* @__PURE__ */ t(wt, { ...i }, i.title)
  }
) : null, xo = ({ onClick: e, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: b(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: a, tabIndex: 1, children: n });
};
function ed({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: i
}) {
  return /* @__PURE__ */ t(xo, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        i && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(V, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const vo = K(
  function({ content: n, label: a, color: r, ...i }, l) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: l, children: [
      /* @__PURE__ */ t("p", { className: "text-3xl font-semibold", children: n }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: a,
            children: a
          }
        ),
        "icon" in i && i.icon && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(V, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(et, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), td = K(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: i, color: l, ...s }) => /* @__PURE__ */ t(
          vo,
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
), yo = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const i = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: i, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: i, children: r });
};
function nd({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: i,
  withPointerCursor: l = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    yo,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(ni, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ai, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Bn,
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
const wo = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function hn({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: i
}) {
  const l = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(wo, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: l, children: [
    /* @__PURE__ */ t(Pn, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const No = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Nt({
  id: e,
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
  return /* @__PURE__ */ o(No, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ t(
        V,
        {
          icon: l,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ t(
        V,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(Mn, { ...a }),
      r && /* @__PURE__ */ t(Oe, { ...r }),
      !!i && /* @__PURE__ */ t(Qe, { value: i })
    ] })
  ] });
}
function ad({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: i
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((l) => /* @__PURE__ */ t(hn, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ t(
    rt,
    {
      items: e,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ t(hn, { ...l, onClick: a }, l.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function rd({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((l) => /* @__PURE__ */ t(Nt, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ t(
    rt,
    {
      items: e,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ t(Nt, { ...l, onClick: r }),
      minSize: a
    }
  );
}
const Co = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), id = K(
  function({ title: n, titleValue: a, titleTooltip: r, list: i }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            we,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(V, { icon: $n, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      i.map((s) => /* @__PURE__ */ t(Co, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function ld({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: i = !1,
  hideTooltip: l = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      Oi,
      {
        data: a,
        legend: i,
        hideTooltip: l
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: i ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
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
const va = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, ko = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: i = !0
}) => {
  const s = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!i || r === void 0) return;
    const u = va(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = Ie[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ut = "--:--", Io = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: Ie.empty
    };
  if (!n)
    return {
      value: 1,
      color: Ie.empty
    };
}, So = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, i = va(
    n,
    a
  ), l = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = r || (i ?? 0) < 0 ? void 0 : Io(
    i ?? 0,
    l
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - g) / l;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / l + x,
            color: Ie.overtime
          }
        ] : [
          ...u,
          {
            value: g / l,
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
}, Fo = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, i = e.at(-1), l = r ? $t(r) : ut, s = n === void 0 || n > 0 ? ut : i ? $t(i.to) : ut, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function Ao({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = So({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: i, secondaryLabel: l, time: s } = Fo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ei, { width: 156, height: 156, children: /* @__PURE__ */ t(
      Ti,
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
        children: r.map((c, d) => /* @__PURE__ */ t(
          ri,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: s }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: i }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: l })
    ] })
  ] });
}
function Lo({
  text: e,
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
        a && /* @__PURE__ */ t(V, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ t(
          "span",
          {
            className: b(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(V, { icon: ii })
      ]
    }
  );
}
function sd({
  trackedMinutes: e,
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
  canShowBreakButton: g = !0,
  canSeeGraph: p = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: v,
  canShowProject: N = !0,
  projectSelectorElement: T,
  breakTypeName: B
}) {
  const { status: _, statusText: P, subtitle: L, statusColor: U } = ko({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), R = _ === "clocked-out", w = m?.map(($) => ({
    value: $.id,
    label: $.duration ? `${$.name} · ${$.duration}` : $.name,
    description: $.description,
    tag: $.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, k] = E(!1), A = () => {
    if (w.length > 1)
      S || k(!0);
    else {
      const $ = w?.[0]?.value;
      u?.($);
    }
  }, M = ($) => {
    h?.($), k(!1), u?.($);
  }, y = R && l.length && !c && s, C = l.find(($) => $.id === i), I = l.map(($) => ({
    value: $.id,
    label: $.name,
    icon: $.icon
  })), O = _ === "break", [re, te] = E(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: P }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                Y.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: U
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
              /* @__PURE__ */ t(
                "div",
                {
                  className: "absolute inset-[3px] rounded-full",
                  style: {
                    backgroundColor: U
                  }
                }
              )
            ] })
          ] }),
          L && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          _ === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            H,
            {
              onClick: d,
              label: r.clockIn,
              icon: Mt
            }
          ) }),
          _ === "clocked-in" && /* @__PURE__ */ o(X, { children: [
            g && /* @__PURE__ */ t(X, { children: w.length > 1 && h ? /* @__PURE__ */ t(
              qe,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: M,
                open: S,
                onOpenChange: k,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  H,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: jt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              H,
              {
                onClick: A,
                label: r.break,
                variant: "neutral",
                icon: jt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Wt
              }
            )
          ] }),
          _ === "break" && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Wt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              H,
              {
                onClick: d,
                label: r.resume,
                icon: Mt
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ t(
        Ao,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(X, { children: [
      /* @__PURE__ */ t(
        qe,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: i,
          options: I,
          onChange: v,
          open: re,
          onOpenChange: te,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Lo,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      N && T
    ] }) : /* @__PURE__ */ o(X, { children: [
      s && C && /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t(Oe, { text: C.name, icon: C.icon }) }),
      N && T,
      O && B && /* @__PURE__ */ t(Oe, { text: B })
    ] }) })
  ] }) });
}
const Po = {
  done: oi,
  "in-progress": si,
  todo: li
}, Oo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Eo({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const i = () => {
    a?.(e);
  }, l = G(() => {
    if (!r)
      return Po[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Nt,
    {
      id: e.id,
      title: e.text,
      icon: l,
      iconClassName: Oo[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: ci
      } : void 0,
      count: e.counter,
      onClick: i
    }
  );
}
function od({
  tasks: e,
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
    ({ key: d, status: f }) => (e[d] || []).map(
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
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : s.slice(0, r).map((d) => /* @__PURE__ */ t(
    Eo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var To = Object.defineProperty, _o = Object.defineProperties, Do = Object.getOwnPropertyDescriptors, Ze = Object.getOwnPropertySymbols, ya = Object.prototype.hasOwnProperty, wa = Object.prototype.propertyIsEnumerable, gn = (e, n, a) => n in e ? To(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, fe = (e, n) => {
  for (var a in n || (n = {})) ya.call(n, a) && gn(e, a, n[a]);
  if (Ze) for (var a of Ze(n)) wa.call(n, a) && gn(e, a, n[a]);
  return e;
}, it = (e, n) => _o(e, Do(n)), zo = (e, n) => {
  var a = {};
  for (var r in e) ya.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && Ze) for (var r of Ze(e)) n.indexOf(r) < 0 && wa.call(e, r) && (a[r] = e[r]);
  return a;
}, Bo = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Ro = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), $o = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = fe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, Mo = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = fe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, jo = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let i = fe({}, r);
  return i.left = n.left + e.width, Bo(i) || Ro({ usedSpot: i, spotsList: a }) ? null : i;
}, Wo = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((i, l, s) => {
  if (i === a) return jo({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = $o({ position: n, spot: i, stone: r });
  return c || Mo({ position: n, stone: r, spot: i }) || i;
});
function Vo(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let i = n[a];
    if (e(i)) return i;
  }
  return null;
}
var Uo = (e, n) => n.filter(e), Ho = (e, n) => [...n].sort(e), Go = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Ko = (e) => Ho(Go, e), qo = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let i = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (i.bottom = n.bottom);
  for (let l = 0, s = e.length; l < s; l += 1) {
    let c = e[l];
    if (i.left < c.left && i.top < c.top) {
      i.right = c.left;
      break;
    }
  }
  return i;
}, Yo = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Jo = ({ availableSpots: e, stone: n }) => Vo((a) => Yo(a, n), e);
function Zo({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Jo({ availableSpots: n, stone: e }), i = { left: r.left, top: r.top }, l = qo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), s = [...n, l], c = Wo({ spots: s, position: i, optimalSpot: r, stone: e });
  return s = [...Uo(Boolean, c)], s = Ko(s), { position: i, availableSpots: s };
}
var Xo = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, i = [], l = [{ top: 0, left: 0, right: n }];
  for (let s of e) {
    let c = Zo({ availableSpots: l, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), i.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: i, containerHeight: r };
}, Qo = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), ec = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: l, containerHeight: s, stones: c, availableSpots: d }, f] = E({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = Qo(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Xo({ stones: h, containerSize: g });
    f(it(fe({}, p), { stones: h }));
  }, [a, e, n, r, i]), { positions: l, containerHeight: s, stones: c, availableSpots: d };
}, tc = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), nc = ({ transition: e, transitionDuration: n }) => e ? { transition: tc(n)[e] } : null, ac = (e) => e ? it(fe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, rc = ({ style: e, position: n, transition: a, transitionDuration: r }) => fe(fe(it(fe({}, e), { position: "absolute" }), ac(n)), nc({ transition: a, transitionDuration: r }));
function ic(e, n, a) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, i);
    }, n);
  };
}
var lc = () => {
  let [e, n] = E(), a = W(ic(n, 300));
  return j(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, sc = (e) => {
  let [n, a] = E(null);
  return j(() => {
    let r = new ResizeObserver((i) => {
      for (let l of i) a(l.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, oc = (e) => {
  var n = e, { children: a, style: r, transition: i = !1, transitionDuration: l = 500, transitionStep: s = 50 } = n, c = zo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = W([]), f = W(null), u = lc(), m = sc(f), { positions: h, containerHeight: g } = ec({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), p = fe({ minHeight: g ?? 0, position: "relative" }, r);
  return t("div", it(fe({ ref: f, style: p }, c), { children: Un.map(a, (x, v) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let N = { style: rc({ style: x.props.style, position: h[v], transition: i, transitionDuration: l }), ref: (T) => d.current[v] = T };
    return Vn(x, fe(fe({}, x.props), N));
  }) }));
};
const cc = { sm: 340, md: 480, lg: 640 }, pn = K(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const i = cc[a], [l, s] = E(), c = Un.toArray(n), d = W(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, i]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: l === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(oc, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), dc = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], cd = ae(pn, () => /* @__PURE__ */ t(jn, { children: /* @__PURE__ */ t(pn, { children: dc.map((e, n) => /* @__PURE__ */ t(Le.Skeleton, { height: e }, n)) }) })), bn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), dd = ae(
  K(function({ children: n }, a) {
    return /* @__PURE__ */ t(Xe, { ref: a, showBar: !1, children: /* @__PURE__ */ t(bn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(jn, { orientation: "horizontal", children: /* @__PURE__ */ o(bn, { children: [
    /* @__PURE__ */ t(Le.Skeleton, {}),
    /* @__PURE__ */ t(Le.Skeleton, {}),
    /* @__PURE__ */ t(Le.Skeleton, {})
  ] }) })
);
function uc({
  title: e,
  description: n,
  emoji: a,
  actions: r
}) {
  if ((r?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ t(
    _i,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const ud = se(
  Z("WidgetEmptyState", uc)
), Na = K(
  ({ title: e, children: n }, a) => (di(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
Na.displayName = "WidgetSection";
const fd = se(
  Z("WidgetSection", Na)
), md = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const i = ui(), l = window.location.pathname, s = G(() => n?.length ? n.includes(l) : a?.length ? !a.includes(l) : !0, [l, n, a]), c = G(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return s ? r : (i && console.error(c), null);
}, hd = se(
  pe(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Xe
  )
);
export {
  Cc as ActivityItemList,
  Bl as ActivityItemListSkeleton,
  dl as AiPromotionChat,
  ul as AiPromotionChatProvider,
  Ac as ApplicationFrame,
  qd as AreaChart,
  Gc as AreaChartWidget,
  Hc as AutoGrid,
  $r as Badge,
  Yd as BarChart,
  Kc as BarChartWidget,
  zl as BaseActivityItemList,
  Jd as BaseBanner,
  Wl as BaseCelebration,
  Xl as BaseCommunityPost,
  bd as BaseTabs,
  xd as BreadcrumbSelect,
  Mi as Breadcrumbs,
  wt as CalendarEvent,
  Qc as CalendarEventList,
  Zd as CardSelectableContainer,
  gi as Carousel,
  Xd as CategoryBarChart,
  ld as CategoryBarSection,
  kc as Celebration,
  Vl as CelebrationSkeleton,
  Xc as ChartWidgetEmptyState,
  vd as Chip,
  sd as ClockInControls,
  Qd as ComboChart,
  Sc as CommunityPost,
  Ql as CommunityPostSkeleton,
  bs as CompanySelector,
  Qe as Counter,
  cd as Dashboard,
  Lc as DaytimePage,
  yd as DetailsItem,
  wd as DetailsItemsList,
  eu as Dialog,
  Pe as Dropdown,
  Nc as EntitySelect,
  tu as F0ActionBar,
  nu as F0AiBanner,
  Pn as F0AvatarModule,
  Nd as F0ButtonToggle,
  vc as F0Callout,
  Cd as F0CardHorizontal,
  kd as F0FileItem,
  au as F0NotesTextEditor,
  ru as F0NotesTextEditorSkeleton,
  iu as F0NumberInput,
  kr as F0RichTextDisplay,
  lu as F0RichTextEditor,
  Id as F0SearchInput,
  yc as F0SegmentedBar,
  su as F0SegmentedControl,
  ou as F0TableOfContent,
  cu as F0TextAreaInput,
  Sd as F0TextInput,
  wc as F0VersionHistory,
  du as F1SearchBox,
  uu as FILE_TYPES,
  Fd as FileItem,
  Ic as HighlightBanner,
  td as IndicatorsList,
  fu as Input,
  mu as Item,
  hu as ItemSectionHeader,
  gu as LineChart,
  qc as LineChartWidget,
  Bc as Menu,
  Ad as MobileDropdown,
  pu as NotesTextEditor,
  bu as NotesTextEditorSkeleton,
  xu as NumberInput,
  Pc as OmniButton,
  jc as OneApprovalHistory,
  Ld as OneCalendar,
  Pd as OneCalendarInternal,
  vu as OneDataCollection,
  yu as OneDateNavigator,
  _i as OneEmptyState,
  wu as OnePagination,
  Fc as OnePersonListItem,
  md as OneRestrictComponent,
  Oc as Page,
  xc as PageHeader,
  Et as PageHeaderNavigationContext,
  pc as PageHeaderNavigationProvider,
  Ki as PageNavigation,
  Nu as PieChart,
  Yc as PieChartWidget,
  Us as PrivateBox,
  Cu as ProgressBarChart,
  ku as RadarChart,
  Gl as Reactions,
  Iu as ResourceHeader,
  Od as RichTextDisplay,
  Su as RichTextEditor,
  hd as ScrollArea,
  Rc as SearchBar,
  Fu as SectionHeader,
  qe as Select,
  Vr as Shortcut,
  $c as Sidebar,
  gs as SidebarChatItem,
  _c as SidebarChatList,
  Ec as SidebarChatProvider,
  _t as SidebarCollapsibleSection,
  Dc as SidebarFooter,
  zc as SidebarHeader,
  Mc as SidebarTabs,
  Nn as Spinner,
  Uc as Split,
  Vc as Stack,
  Zc as SummariesWidget,
  Ed as Switch,
  Td as Tabs,
  _d as TabsSkeleton,
  od as TasksList,
  Au as Textarea,
  Dd as ToggleGroup,
  zd as ToggleGroupItem,
  we as Tooltip,
  id as TwoColumnsList,
  Lu as UPLOAD_INPUT_ID,
  Pu as VerticalBarChart,
  Jc as VerticalBarChartWidget,
  xt as VirtualList,
  Bd as WeekStartDay,
  Rd as Weekdays,
  Le as Widget,
  nd as WidgetAvatarsListItem,
  ud as WidgetEmptyState,
  ed as WidgetHighlightButton,
  ad as WidgetInboxList,
  hn as WidgetInboxListItem,
  fd as WidgetSection,
  rd as WidgetSimpleList,
  Nt as WidgetSimpleListItem,
  dd as WidgetStrip,
  Ou as actionBarStatuses,
  Eu as buttonToggleSizes,
  Tu as buttonToggleVariants,
  $d as chipVariants,
  _u as downloadAsCSV,
  Md as f0FileItemSizes,
  Du as generateCSVContent,
  jd as getGranularityDefinition,
  Wd as getGranularityDefinitions,
  Vd as getGranularitySimpleDefinition,
  Ud as granularityDefinitions,
  Hd as modules,
  zu as predefinedPresets,
  Gd as rangeSeparator,
  mn as seedFromStorage,
  Bu as selectSizes,
  tt as useAiPromotionChat,
  Ru as useDataCollectionData,
  Wc as useDataCollectionItemNavigation,
  wi as useDataCollectionSource,
  $u as useExportAction,
  Mu as useInfiniteScrollPagination,
  nl as usePageHeaderItemNavigation,
  bc as usePageHeaderNavigation,
  _e as useSidebar,
  Tc as useSidebarChatActions,
  ms as useSidebarChats
};
