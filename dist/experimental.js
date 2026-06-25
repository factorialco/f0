import { h as Ca, B as ka, i as Ia, j as Sa, k as zt, l as Me, m as Be, n as Fa, o as b, p as Y, q as ye, u as se, T as Aa, r as La, s as Oa, R as Pa, t as Ea, v as ie, w as _a, x as Ct, y as ft, z as Ge, A as Se, E as Da, G as Ta, H as V, J as za, K as Ba, L as xe, M as pn, N as Ra, O as $a, Q as H, S as bn, U as z, V as Fe, W as Ma, X as ja, Y as Wa, Z as Va, _ as Ua, $ as Ee, a0 as xn, a1 as Ha, a2 as we, a3 as Ke, a4 as Ga, e as vn, a5 as Oe, a6 as Ka, a7 as yn, a8 as le, a9 as Z, aa as wn, ab as Nn, ac as qa, ad as Cn, ae as ge, af as ae, ag as Ya, ah as Ja, ai as Za, aj as Xa, ak as Qa, al as ve, am as Xe, an as er, ao as tr, ap as nr, aq as ar, ar as Qe, as as kn, at as rr, au as ir, av as sr, aw as qe, ax as lr, ay as In, az as or, aA as cr, aB as dr, aC as ur, aD as fr, aE as mr, aF as hr, aG as gr, aH as mt, aI as Sn, aJ as ht, aK as Fn, aL as pr, aM as br, aN as xr, aO as vr, aP as yr, aQ as $e, aR as et, aS as gt, aT as An, aU as wr, aV as kt, aW as Nr, aX as Cr, aY as kr, aZ as Pe, a_ as Ir, a$ as Sr, b0 as je, b1 as Bt, b2 as pt, b3 as Fr, b4 as Ar, a as Lr, b as Or, b5 as Ln, b6 as Pr, g as Er, F as _r, b7 as Dr, b8 as On, b9 as Tr, ba as Pn, bb as zr, bc as En, bd as Br, be as Rr, bf as _n, bg as $r, bh as Mr, bi as jr, bj as Wr, bk as Dn, bl as Vr, bm as Ur, bn as Hr, bo as Tn, bp as Gr, bq as Kr, br as qr, bs as Yr, bt as pe, bu as It, bv as St, bw as Ft, bx as zn, by as At, bz as Bn, bA as Rn, bB as Jr, bC as Zr, bD as Xr, bE as Qr, bF as ei, bG as ti, bH as ni, bI as ai, bJ as Rt, bK as ri, bL as ii, bM as $t, bN as Mt, bO as jt, bP as si, bQ as li, bR as oi, bS as ci, bT as $n, bU as di, bV as ui } from "./F0CanvasPanel-JRc3Jp2c.js";
import { c6 as pd, c5 as bd, ci as xd, c2 as vd, c3 as yd, bW as wd, bX as Nd, cl as Cd, bY as kd, bZ as Id, cm as Sd, c4 as Fd, ce as Ad, cf as Ld, cj as Od, b_ as Pd, c8 as Ed, c7 as _d, b$ as Dd, c0 as Td, cg as zd, cn as Bd, ch as Rd, ck as $d, cd as Md, ca as jd, cc as Wd, c9 as Vd, c1 as Ud, cb as Hd } from "./F0CanvasPanel-JRc3Jp2c.js";
import { jsx as t, jsxs as o, Fragment as X } from "react/jsx-runtime";
import ue, { forwardRef as K, useRef as W, useTransition as fi, useState as E, useLayoutEffect as Mn, useId as bt, useContext as Ne, createContext as _e, useEffect as j, useCallback as ne, useMemo as G, Fragment as mi, isValidElement as hi, cloneElement as jn, Children as Wn } from "react";
import { C as gi, P as pi, a as Vn, M as bi, p as xi, b as vi, R as Wt, c as Un, u as yi, d as wi, e as Ni, f as Ci, g as ki, h as Hn, S as Ii, A as Si, B as Fi, L as Ai, i as Li, V as Oi, j as Pi, k as Ei, l as _i, O as Di } from "./useDataCollectionSource-Cr9IGb54.js";
import { r as Kd, s as qd, o as Yd, H as Jd, t as Zd, z as Xd, a8 as Qd, G as eu, q as tu, aa as nu, a9 as au, Q as ru, ad as iu, F as su, Y as lu, U as ou, J as cu, af as du, K as uu, Z as fu, _ as mu, v as hu, ab as gu, ac as pu, N as bu, $ as xu, a5 as vu, a7 as yu, w as wu, y as Nu, D as Cu, W as ku, ae as Iu, X as Su, T as Fu, ag as Au, x as Lu, E as Ou, m as Pu, n as Eu, a1 as _u, a2 as Du, a6 as Tu, I as zu, a3 as Bu, a0 as Ru, a4 as $u } from "./useDataCollectionSource-Cr9IGb54.js";
const Ti = Ca("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Gn = K(({ className: e, items: n }, a) => /* @__PURE__ */ t(ka, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(Ia, {}),
  /* @__PURE__ */ t(Sa, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Gn.displayName = "CollapsedBreadcrumbItem";
const Lt = 50, zi = 120, Ye = 8;
function Bi(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let i = e - r - Ye, s = 0, l = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, s = c, l++;
  }
  if (l < a)
    for (i -= Lt; i < 0 && l > 1; )
      i += n[s], s++, l--;
  return Math.max(2, l);
}
function Vt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ye;
    default:
      return e[0] + Lt + e[e.length - 1] + Ye;
  }
}
function Ri(e, n) {
  return zi * e + (n ? Lt : 0) + Ye;
}
function $i(e, n, a = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Ri(
        l,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, i = a.map((l) => l.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Vt(i)
    };
  const s = Bi(e, i);
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
    minWidth: Vt(i)
  };
}
function Mi({ breadcrumbs: e, append: n }) {
  const a = W(null), r = W(null), [, i] = fi(), [s, l] = E(null), c = (s?.collapsedItems || []).length > 0;
  return Mn(() => {
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
        l(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(zt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    zt,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: s?.minWidth
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
        s && s.headItem && /* @__PURE__ */ o(Fa, { children: [
          /* @__PURE__ */ t(
            Me,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${Be(s.headItem)}`
          ),
          c && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              Gn,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              Me,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              Be(d)
            ))
          ] }),
          !c && /* @__PURE__ */ t(X, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
            Me,
            {
              item: d,
              isLast: f === s.tailItems.length - 1,
              isFirst: !1,
              children: f === s.tailItems.length - 1 ? n : void 0
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
}), Ut = [
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
}, s) => {
  const l = bt(), {
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
          ...(({ style: p, ...x }) => x)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Ut.map((p) => /* @__PURE__ */ t("clipPath", { id: `${l}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: Ut.map((p) => /* @__PURE__ */ t(
              Y.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${l}-${p.id})`,
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
}, Kn = K(Wi), qn = _e(null), Vi = 15, Ui = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [i, s] = E(n), [l, c] = E(!1), [d, f] = E(!0), [u, m] = E(
    Vi
  ), h = W(null), g = (x) => {
    h.current = x;
  }, p = () => {
    h.current && h.current();
  };
  return j(() => {
    s(n);
  }, [n]), j(() => {
    if (l && a?.(), !l) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [l, a]), /* @__PURE__ */ t(
    qn.Provider,
    {
      value: {
        ...r,
        enabled: i,
        setEnabled: s,
        open: l,
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
  const e = Ne(qn);
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
const Yn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: i } = tt(), s = se(), [l, c] = E(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(Aa, { children: /* @__PURE__ */ o(La, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Oa, { asChild: !0, children: /* @__PURE__ */ t(
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
          Pa,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: i,
            "aria-label": i ? s.ai.closeChat : s.ai.openChat,
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
              Ea,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Kn,
                  {
                    size: "sm",
                    background: i ? "white" : void 0,
                    hover: l
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !i && /* @__PURE__ */ t(_a, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Ht = "one_sidebar_locked", Jn = _e(void 0);
function De() {
  const e = Ne(Jn);
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
  const { currentPath: n } = Ct(), [a, r] = E(!1), [i, s] = E(!1), l = a ? Ge.xl : Ge.md, c = ft(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = E(() => {
    const N = localStorage.getItem(Ht);
    return N !== null ? !!N : !0;
  }), [u, m] = E(!1), [h, g] = E(
    null
  ), p = ne(
    ({ isInvokedByUser: N } = {
      isInvokedByUser: !0
    }) => {
      s(N ?? !0), c && m(!u), f(!d);
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
    i && localStorage.setItem(Ht, d ? "1" : "");
  }, [d, i]), j(() => () => {
    g(v);
  }, [v]), /* @__PURE__ */ t(
    Jn.Provider,
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
const Gt = Y.create(V), Kt = {
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
  const [r, i] = E(!1), s = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Se, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ie()
      ),
      onClick: s,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Gt,
        {
          size: "sm",
          icon: Da,
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
      ) : /* @__PURE__ */ t(
        Gt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Ta,
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
}, Ki = ({
  currentModule: e,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: i,
  errorScreen: s,
  onOpenChange: l = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = E("idle"), [g, p] = E(null), [x, ...v] = g ?? [], [N, _] = E(!1);
  j(() => {
    p(null), h("idle");
  }, [e]);
  const B = ne(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), p(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    za,
    {
      open: N,
      onOpenChange: async (D) => {
        _(D), D && g === null && B(), l(D);
      },
      children: [
        /* @__PURE__ */ t(Ba, { asChild: !0, children: /* @__PURE__ */ t(
          xe,
          {
            variant: "outline",
            icon: pn,
            hideLabel: !0,
            label: n,
            pressed: N,
            append: f && /* @__PURE__ */ t(Ot, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Ra, { children: /* @__PURE__ */ o(
          $a,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Ji, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Qi, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Zi, { ...i, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    qi,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: v.map((D, O) => /* @__PURE__ */ t(
                    Yi,
                    {
                      ...D,
                      onClick: d
                    },
                    O
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Xi,
                  {
                    ...s,
                    onClick: () => {
                      B();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                es,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => _(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, qi = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: i,
  onClick: s
}) => {
  const l = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Ma,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Fe,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(l, "text-f1-foreground no-underline"),
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
              ja,
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
}, Yi = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: i
}) => {
  const s = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Wa, { asChild: !0, className: s, onClick: i, children: /* @__PURE__ */ t(
    Fe,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        s,
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
}, Ji = ({
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
          icon: bn,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Zn = ({
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
] }) }), Zi = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Zn,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(V, { icon: pn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Fe, { href: a, children: /* @__PURE__ */ t(H, { label: n }) })
  }
), Xi = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Zn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(V, { icon: Va, size: "lg" }),
    button: /* @__PURE__ */ t(H, { variant: "outline", label: a, onClick: r })
  }
), Qi = () => /* @__PURE__ */ t(
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
), es = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [i, s] = E(e);
  j(() => {
    s(e);
  }, [e]);
  const l = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return i && /* @__PURE__ */ o(X, { children: [
    /* @__PURE__ */ t(Ua, {}),
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
            onClick: l,
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
}, Pt = _e(null), gc = Pt.Provider;
function pc() {
  return Ne(Pt);
}
function ts(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", i = e !== null, s = e?.previousItem ?? null, l = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, h = e?.hasNext ?? !1, g = e?.goToPrevious, p = e?.goToNext;
  return G(() => {
    if (!i) return null;
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, v = (B, D) => (B !== null ? a?.(B) : void 0) ?? D, N = r === "callback" ? m ? { onClick: g, title: v(s, "Previous") } : void 0 : c !== null ? { url: c, title: v(s, "Previous") } : void 0, _ = r === "callback" ? h ? { onClick: p, title: v(l, "Next") } : void 0 : d !== null ? { url: d, title: v(l, "Next") } : void 0;
    return !N && !_ && !x ? null : { previous: N, next: _, counter: x };
  }, [
    i,
    r,
    s,
    l,
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
function bc({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: i = !1,
  navigation: s,
  productUpdates: l,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = De(), h = Ne(Pt), g = s ?? h ?? void 0, p = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], x = n && Object.keys(n).length !== 0, v = i && a.length > 0, N = !i && r.length > 0, _ = !i && !!l?.isVisible, B = p[p.length - 1], D = "navigation" in window ? window.navigation : null, O = i && (D ? !!D.canGoBack : window.history.length > 1);
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
                  icon: xn
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
                i && O && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  H,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Ha,
                    onClick: () => window.history.back()
                  }
                ) }),
                O || v ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in B ? /* @__PURE__ */ t(z, { className: "h-4 w-24" }) : B.label }) : /* @__PURE__ */ t(
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
          !i && x && (g || N || _) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          g && /* @__PURE__ */ t(Ga, { ...g }),
          g && N && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (_ || N) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            _ && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Ki,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            N && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((L, U) => /* @__PURE__ */ t(ns, { action: L }, U)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              vn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Yn, {})
          ] })
        ] })
      ]
    }
  );
}
function ns({ action: e }) {
  const n = W(null), [a, r] = E(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Oe, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    xe,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    xe,
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
        xe,
        {
          size: "md",
          variant: i,
          label: e.label,
          icon: e.icon,
          hideLabel: !0,
          onClick: (s) => {
            s.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const as = () => {
  const e = se();
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
          xe,
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
}, rs = ({
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
}, is = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: i
  } = tt();
  return rs({
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
}, ss = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(yn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        xe,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, ls = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: i,
  actions: s,
  onShow: l,
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
    actions: s,
    onShow: l,
    onHide: c,
    children: d
  }
), os = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: s,
    setOpen: l,
    onHide: c
  } = tt(), d = () => {
    l(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(is, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      xe,
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
        /* @__PURE__ */ t(Kn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(wn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        ss,
        {
          action: f,
          onClose: () => l(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(as, {}) })
  ] }) : null;
}, cs = le(
  Z("AiPromotionChat", os)
), ds = le(
  Z("AiPromotionChatProvider", ls)
), Xn = ye({
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
}), qt = {
  positive: Cn,
  warning: qa,
  info: Nn
}, Yt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, us = K(
  function({ title: n, onClose: a, children: r, actions: i = [], variant: s }, l) {
    if (i.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`
      );
    const c = i.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: l,
        className: Xn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Yt[s]
                ),
                children: [
                  qt[s] && /* @__PURE__ */ t(V, { icon: qt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: Yt[s] || "font-medium",
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
), fs = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Xn({ variant: n }),
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
), Qn = K(
  (e, n) => /* @__PURE__ */ t(us, { ref: n, ...e })
), ms = ({ compact: e, variant: n }) => /* @__PURE__ */ t(fs, { compact: e, variant: n });
Qn.displayName = "F0Callout";
const xc = ae(
  le(Qn),
  ms
), ea = K(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, i) => {
    const s = se(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < c), f = Ya(a);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-label": r,
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": c,
        "aria-valuetext": s.t("audioPlayer.position", {
          current: c,
          total: l
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
ea.displayName = "F0SegmentedBar";
const vc = le(
  Z("F0SegmentedBar", ea)
);
function hs({
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
function gs({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: i } = Za(), s = Xa(i), l = Qa(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
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
      "aria-label": `Version ${l} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
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
function ps({
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
            hs,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            gs,
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
const yc = le(
  Z("F0VersionHistory", ps)
), ta = K(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: i }, s) => {
    const l = ue.useRef(null);
    ue.useImperativeHandle(
      s,
      () => l.current,
      []
    );
    const c = er({
      count: n,
      getScrollElement: () => l.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: l,
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
ta.displayName = "VirtualList";
const xt = Z("VirtualList", ta), na = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (l) => l.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const i = new RegExp(`(${n})`, "gi"), s = e.split(i);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
    (l, c) => l.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ t(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: l
      },
      c
    ) : l
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
const bs = ({
  entity: e,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: i,
  search: s,
  goToFirst: l,
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
    } else v.key === "ArrowDown" ? nt(v.currentTarget, l) : v.key === "ArrowUp" && at(v.currentTarget, c);
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
              na,
              {
                text: e.name,
                search: s,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          kn,
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
            icon: Cn,
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
  partialSelected: s,
  onSelect: l,
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
  const [N, _] = E(!1);
  if (!e)
    return /* @__PURE__ */ t(
      bs,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: i,
        onSelect: l,
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
      !i || s ? l(r) : i && c(r);
    } else L.key === "ArrowDown" ? nt(L.currentTarget, f) : L.key === "ArrowUp" && at(L.currentTarget, u);
  }, D = () => {
    if (N)
      d(!n), _(!1);
    else {
      if (x || p) return;
      i ? c(r) : l(r);
    }
  };
  if (!r.subItems?.length) return null;
  const O = i || s;
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
            _(!0);
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
                na,
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
              kn,
              {
                checked: O,
                disabled: x,
                onClick: D,
                onKeyDown: B,
                indeterminate: s,
                onPointerDown: (L) => {
                  L.stopPropagation(), _(!1);
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
const Jt = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? nt(s.currentTarget, a) : s.key === "ArrowUp" && at(s.currentTarget, r);
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
  const a = [e, ...n ?? []], r = a.map((l) => ({
    label: l.label,
    value: l.label,
    icon: l.icon,
    critical: l.variant === "critical"
  })) || [], i = (l) => {
    const c = a.find((d) => d.label === l);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((l) => l.disabled);
  return /* @__PURE__ */ t(
    ir,
    {
      items: r,
      value: e.label,
      disabled: s,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, xs = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: i,
  anyVisibleSelected: s,
  loading: l,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = e && e.length > 0;
  if (!(!l && (!c && u || m))) return null;
  let g, p, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || i
  } : void 0, v = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
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
}, vs = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: i,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(V, { icon: Ti, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), nt(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), at(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: sr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), lt = 384, ot = 36, ys = 37, Zt = 1, Xt = 200, Qt = '[data-avatarname-navigator-element="true"]', ws = ({
  groupView: e,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: i,
  onSelect: s,
  onRemove: l,
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
  notFoundTitle: _,
  notFoundSubtitle: B,
  className: D,
  actions: O,
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
    }, Zt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Qt)
      )[0]?.focus();
    }, Xt);
  }, []), C = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, Zt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(Qt)
      );
      F[F.length - 1]?.focus();
    }, Xt);
  }, []), I = G(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), P = ne(
    (F) => {
      const q = I.get(F.id);
      if (!e)
        return {
          selected: !!q,
          partialSelected: !!q
        };
      const ee = (F.subItems ?? []).filter(
        (T) => q?.subItems?.some(
          (Q) => Q.subId === T.subId
        )
      ), J = (F.subItems?.length ?? 0) === ee.length, de = !J && ee.length > 0;
      return { selected: J, partialSelected: de };
    },
    [e, I]
  ), re = ne(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ t(
          Jt,
          {
            label: U ?? "",
            onCreate: () => L?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const q = L ? F.index - 1 : F.index, ee = n[q], { selected: J, partialSelected: de } = P(ee);
      return /* @__PURE__ */ t(
        Ue,
        {
          expanded: ee.expanded ?? !1,
          onExpand: () => p(ee, !0),
          search: i,
          groupView: e,
          entity: ee,
          onSelect: s,
          onRemove: l,
          selected: J,
          partialSelected: de,
          showGroupIcon: Ns(a, r),
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
      P,
      y,
      C,
      e,
      a,
      k,
      l,
      s,
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
          Jt,
          {
            label: U ?? "",
            onCreate: () => L?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const q = L ? F.index - 1 : F.index, ee = te[q].parent, J = te[q].subItem;
      if (!ee) {
        const T = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, Q = We(
          h,
          T.id
        ), ce = (T?.subItems ?? []).filter(
          (ze) => Q?.subItems?.some(
            (Na) => Na.subId === ze.subId
          )
        ), he = (T.subItems?.length ?? 0) === ce.length, wa = !he && ce.length > 0;
        return /* @__PURE__ */ t(
          Ue,
          {
            groupView: !0,
            expanded: T.expanded ?? !1,
            onExpand: (ze) => p(T, ze),
            search: i,
            entity: T,
            onSelect: s,
            onRemove: l,
            selected: he,
            partialSelected: wa,
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
        const T = We(
          h,
          ee.id
        );
        de = !!(ee?.subItems ?? []).filter(
          (ce) => T?.subItems?.some(
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
      s,
      l,
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
  ), [Ce, be] = G(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, q = 0;
    if (!e)
      F = n.length, q = n.reduce(
        (de, { id: T }) => de + (I.has(T) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...I.values()].flatMap(
          (T) => T.subItems?.map((Q) => Q.subId) ?? []
        )
      );
      n.forEach((T) => {
        const Q = T.subItems ?? [];
        F += Q.length, q += Q.filter(
          (ce) => de.has(ce.subId)
        ).length;
      });
    }
    const ee = F > 0 && q === F, J = q > 0;
    return [ee, J];
  }, [n, I, e]), ke = te.length, oe = !R && (v || N), st = O && O.length > 0, Te = !w && (!R && oe || st);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        R || w ? "rounded-r-xl" : "",
        D
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
                vs,
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
              Te ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(yn, {}) }),
              !w && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: lt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: _ }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: B })
                  ]
                }
              ),
              !w && (!!M || L) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                xt,
                {
                  height: lt,
                  itemCount: ke + (L ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && L) return ot;
                    const q = L ? F - 1 : F;
                    return te[q]?.parent === null ? ys : ot;
                  },
                  renderer: $,
                  ref: A
                }
              ) : /* @__PURE__ */ t(
                xt,
                {
                  height: lt,
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
          xs,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: R,
            totalFilteredEntities: M,
            allVisibleSelected: Ce,
            anyVisibleSelected: be,
            selectAllLabel: v,
            clearLabel: N,
            disabled: S,
            actions: O
          }
        )
      ]
    }
  );
}, We = (e, n) => e.find((a) => a.id === n), Ns = (e, n) => e.find((a) => a.value === n)?.groupType === "team", Cs = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  lr,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ t(
      In,
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
) }), ks = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  disabled: s = !1,
  hiddenAvatar: l = !1
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
            Cs,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: s,
              hiddenAvatar: l,
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
}, Is = 500, en = 520, tn = 210, nn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: i,
  width: s,
  singleSelector: l = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const g = (s ?? en) < Is, p = !c && !l && !g, x = s ?? en, v = p ? x - tn : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: l && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: v + 1 + "px" },
            children: /* @__PURE__ */ t(
              ws,
              {
                ...h,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: l,
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
              width: tn + "px"
            },
            children: /* @__PURE__ */ t(
              ks,
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
}, Ss = ({
  placeholder: e,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: i = !1,
  label: s,
  labelIcon: l,
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
  size: _ = "sm",
  open: B
}) => {
  const D = G(
    () => a.some(
      (R) => R.subItems && R.subItems.length > 0
    ),
    [a]
  ), O = G(() => D ? a.flatMap(
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
  })), [D, a]), L = O.length === 0 ? void 0 : O.length === 1 ? O[0].subItem.subName : O.length + " " + n, U = O.length === 1 ? O[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    cr,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: l,
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
      size: _,
      avatar: i || !U ? void 0 : {
        type: "person",
        firstName: U,
        lastName: "",
        src: O[0].subItem.subAvatar,
        deactivated: O[0].subItem.subDeactivated
      },
      append: N ?? /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t(dr, { open: B, disabled: r, size: _ }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            O.length === 1 && !i || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            ge,
            {
              tag: "span",
              className: O.length === 1 && O[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: O.length === 0 ? e ?? "" : O.length === 1 ? O[0].subItem.subName : `${O.length} ${n}`
            }
          )
        }
      )
    }
  );
}, wc = (e) => {
  const [n, a] = E(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), e.onOpenChange?.(w);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, s] = E(e.entities), [l, c] = E(""), [d, f] = ur("", 300), u = G(
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
      const P = y.findIndex((re) => re.id === I.id);
      P >= 0 ? y[P] = I : y.push(I);
    }
    M.forEach((I) => {
      const P = i.find(($) => $.id === I);
      if (!P) return;
      const re = P.subItems?.filter(
        ($) => A.has($.subId)
      ) ?? [], te = y.findIndex(($) => $.id === I);
      if (te >= 0) {
        const $ = y[te].subItems ?? [], Ce = new Set($.map((ke) => ke.subId)), be = [
          ...$,
          ...re.filter((ke) => !Ce.has(ke.subId))
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
          (P) => P.subId === S.subId
        ) && A.add(C.id);
      });
      const y = [];
      e.entities.forEach((C) => {
        if (A.has(C.id)) {
          let P = [...M.get(C.id) ?? []];
          C.subItems?.some(
            ($) => $.subId === S.subId
          ) && (P.some(
            (Ce) => Ce.subId === S.subId
          ) || P.push(S));
          const te = new Set(
            (C.subItems ?? []).map(($) => $.subId)
          );
          P = P.filter(
            ($) => te.has($.subId)
          ), y.push({
            ...C,
            subItems: P
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
  function _() {
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
  const D = (w) => {
    c(w), f(w);
  }, O = (w, S) => {
    e.onItemExpandedChange(w.id, S), s(
      i.map(
        (k) => k.id === w.id ? { ...k, expanded: !w.expanded } : k
      )
    );
  };
  j(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const S = e.entities.map((k) => {
        const A = Fs(k, d), M = k.subItems?.map((y) => ({
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
      s(S);
    } else {
      const w = e.entities.map((S) => {
        const k = Je(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: k };
      }).filter((S) => S.score < 1 / 0).sort((S, k) => S.score - k.score);
      s(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const L = W(null), [U, R] = E(0);
  return Mn(() => {
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
        nn,
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
          onClear: _,
          onSelectAll: B,
          selectedEntities: e.selectedEntities ?? [],
          search: l,
          onSearch: D,
          onToggleExpand: O,
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
          Ss,
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
          nn,
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
            onClear: _,
            onSelectAll: B,
            selectedEntities: e.selectedEntities ?? [],
            search: l,
            onSearch: D,
            onToggleExpand: O,
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
function an(e) {
  return vt(e).split(/\s+/).filter((n) => n.length > 0);
}
function Je(e = "", n) {
  const a = an(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const i = vt(r), s = an(r), l = vt(e);
    if (i.includes(l) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Fs(e, n) {
  const a = Je(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((i, s) => {
    const l = Je(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(i, l);
  }, 1 / 0)), Math.min(a, r);
}
const As = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: i,
  category: s,
  isUnread: l = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = mt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = Sn(n, {
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
        /* @__PURE__ */ t(ht, { icon: i ?? Fn }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: l && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Ls = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(z, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(z, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(z, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(z, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Et = Z(
  "ActivityItem",
  ae(As, Ls)
), aa = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Os = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(aa, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Et,
  {
    ...i,
    onClick: () => a(i.id),
    onVisible: r
  },
  i.id
)) }), Ps = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(aa, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(Et.Skeleton, {}, r)) }), He = ae(Os, Ps), Es = 3, _s = ["today", "yesterday", "lastWeek", "lastMonth"], Ds = (e) => xr(e, ([n]) => {
  const a = _s.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), yt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ts = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: i = 5
}) => {
  const s = se(), l = pr(e, "createdAt"), c = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = br((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Ds(
    Object.entries(l).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ue.Fragment, { children: [
      /* @__PURE__ */ t(
        He,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(yt, {})
    ] }, u)),
    n && new Array(Es).fill(null).map((u, m) => /* @__PURE__ */ t(Et.Skeleton, {}, m))
  ] });
}, zs = () => {
  const e = se();
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
}, Nc = Z(
  "ActivityItemList",
  ae(Ts, zs)
), Bs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Rs = {
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
function $s({
  firstName: e,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: i,
  onReactionSelect: s,
  pickerRef: l
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Rs[vr(
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
              ref: l,
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Vn,
                {
                  lastEmojiReaction: i,
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
function Ms(e) {
  const n = W(null), a = W(), r = ne(() => {
    const s = n.current;
    if (!s) return;
    const l = yr.create(s, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    a.current = setInterval(() => {
      l({
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
const js = ({
  link: e,
  firstName: n,
  lastName: a,
  src: r,
  onClick: i,
  canReact: s = !0,
  lastEmojiReaction: l,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = E(l), g = W(null);
  j(() => {
    h(l);
  }, [l]);
  const p = (D) => {
    h(D), c?.(D);
  }, x = $e(), { canvasRef: v, handleMouseEnter: N, handleMouseLeave: _ } = Ms(x), B = et({
    emoji: Bs[d],
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
      onMouseLeave: x ? void 0 : _,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: v,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          $s,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
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
}, Ws = () => /* @__PURE__ */ o(
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
), Cc = ae(js, Ws), kc = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(An, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(H, { label: a, variant: "outline", onClick: r }) })
] });
function Vs({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: i
}) {
  const [s, l] = E(a), [c, d] = E(n), f = W(null), { fireEmojiConfetti: u } = wr(), m = (p, x) => {
    p.stopPropagation(), d(c + (s ? -1 : 1)), l(!s), i?.(x), s || u(x, f);
  }, h = r?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ t(
    kt,
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
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
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
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(we, { label: h, children: g }) : g;
}
function Us({ items: e, onInteraction: n, locale: a, action: r }) {
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
    /* @__PURE__ */ t(Vn, { onSelect: n, locale: a }),
    e.map((i) => /* @__PURE__ */ t(
      Vs,
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
const Hs = Z("Reactions", Us), ra = K(function({ content: n, collapsed: a, id: r, className: i, tabIndex: s }, l) {
  return /* @__PURE__ */ t(
    kr,
    {
      ref: l,
      id: r,
      content: n,
      tabIndex: s,
      className: b(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        i
      )
    }
  );
});
ra.displayName = "BasePostDescription";
const Gs = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(z, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(z, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), ia = ae(
  ra,
  Gs
), rn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Pe,
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
    color: s,
    isPending: l,
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
                  background: `${s}`
                }
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${s}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ t(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: l ? {
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
                      icon: bn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(gt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(rn, { tags: c }),
              d && /* @__PURE__ */ t(rn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ks = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), sa = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Ks.has(a);
}, qs = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let i = Ir(r);
  const s = (l) => {
    l.stopPropagation();
  };
  return a && (i = `${i} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: sa(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
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
}, Ys = () => /* @__PURE__ */ o(
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
), la = ae(qs, Ys), Js = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const i = se();
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
}, Zs = ({
  id: e,
  author: n,
  group: a,
  createdAt: r,
  title: i,
  description: s,
  onClick: l,
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
  const N = bt(), _ = bt(), B = W(null), [D, O] = E(null), [L, U] = E(!1), R = [f.views, f.comments].filter(Boolean).join(" · "), w = v && D?.id === e && D.description === s, S = !w, k = Sn(r), A = () => {
    l(e);
  }, M = (I) => {
    I.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, C = (I) => {
    I.preventDefault(), I.stopPropagation(), s && O({ id: e, description: s });
  };
  return j(() => {
    w && B.current?.focus();
  }, [w]), j(() => {
    v || O(null);
  }, [v]), j(() => {
    const I = B.current;
    if (!v || !I || w) {
      U(!1);
      return;
    }
    const P = () => {
      U(
        I.scrollHeight > I.clientHeight
      );
    };
    if (P(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver(P);
    return re.observe(I), () => re.disconnect();
  }, [v, w, s]), /* @__PURE__ */ o(
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
        ) : /* @__PURE__ */ t(ht, { icon: Bt }) }),
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
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ht, { icon: Bt, size: "sm" }) }),
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
                    Oe,
                    {
                      items: p,
                      icon: pt,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Oe,
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
              s && /* @__PURE__ */ o(X, { children: [
                /* @__PURE__ */ t(
                  ia,
                  {
                    ref: B,
                    id: _,
                    content: s,
                    collapsed: S,
                    tabIndex: w ? -1 : void 0,
                    className: b(w && ie())
                  }
                ),
                v && L && !w && /* @__PURE__ */ t(
                  Js,
                  {
                    describedBy: N,
                    controls: _,
                    expanded: w,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: sa(c) ? /* @__PURE__ */ t(
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
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(la, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: R }),
          !x && /* @__PURE__ */ t(
            Hs,
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
}, Xs = ({
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
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(ia.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(z, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(la.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(z, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(z, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Ic = ae(
  Zs,
  Xs
), oa = ue.forwardRef(({ person: e, onClick: n, ...a }, r) => {
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
                icon: Nn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, l) => /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(Pe, { ...s }, s.text),
            l < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
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
}), Qs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(z, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(z, { className: "h-4" }),
    /* @__PURE__ */ t(z, { className: "h-4" })
  ] })
] });
oa.displayName = "OnePersonListItem";
const Sc = le(
  Z(
    "OnePersonListItem",
    ae(oa, Qs)
  )
), el = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function tl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Hi, { children: /* @__PURE__ */ t(
    nl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function nl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  const s = r?.enabled ? Lr : i?.enabled ? ds : mi, l = r?.enabled ? r : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(s, { ...l, children: /* @__PURE__ */ t(
    sl,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const Fc = Z(
  "ApplicationFrame",
  tl
), al = ({ contentId: e }) => {
  const n = se();
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
function rl(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function il(e, n) {
  const { sidebarState: a, toggleSidebar: r } = De(), i = W(e);
  j(() => {
    n && rl(
      e,
      i.current,
      a
    ) && r({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, a, r]);
}
function sl({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: i
}) {
  const { sidebarState: s, toggleSidebar: l, isSmallScreen: c, setForceFloat: d } = De(), f = $e(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: g,
    closeCanvas: p,
    chatWidth: x,
    resizable: v
  } = Or(), N = m === "fullscreen", _ = m === "canvas", { open: B } = tt(), D = v ? x : Pr, O = W(N), L = N && !O.current, U = !N && O.current, [
    R,
    w
  ] = E(!1);
  j(() => {
    !N && O.current && w(!0), O.current = N;
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
  }, [B, d]), il(u, A), /* @__PURE__ */ t(
    bi,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(Ln, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Se, { children: s === "unlocked" && /* @__PURE__ */ t(
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
              onClick: () => l()
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: b(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (y) => {
                s === "hidden" ? y?.setAttribute("inert", "") : y?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(al, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Y.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !M ? D : 0
              },
              transition: { paddingRight: el },
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
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
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
                e?.enabled && _ && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      M ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: M ? void 0 : { right: D },
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
                        S || _ ? "z-20" : "z-0",
                        s === "hidden" && S ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: M || N ? "100%" : D
                    },
                    transition: k,
                    onAnimationComplete: () => {
                      R && w(!1);
                    },
                    children: /* @__PURE__ */ t(_r, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(cs, {})
        ] }) })
      ] })
    }
  );
}
const ca = ({
  firstName: e,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: s,
  onPulseClick: l
}) => {
  const c = se(), [d, f] = E(!s);
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
          In,
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
        s ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          kt,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), l();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              V,
              {
                icon: vi[s],
                color: xi[s],
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
              xe,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: Dr,
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), l();
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
ca.displayName = "PulseAvatar";
const ll = ye({
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
function da({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: l } = De();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: ll({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || i === "hidden") && /* @__PURE__ */ t(
              H,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: xn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center",
                  l ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    ca,
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
                      size: l ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
                          l ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
                          l ? "text-md" : "text-lg",
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
            /* @__PURE__ */ t(vn, {}),
            /* @__PURE__ */ t(Yn, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              l && "-mt-3"
            ),
            children: e
          }
        )
      ]
    }
  );
}
da.displayName = "DaytimePage";
const Ac = le(
  Z("DaytimePage", da)
);
function ol(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: i, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function cl({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Oe, { items: ol(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ie()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(V, { icon: On, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Lc = le(
  Z("OmniButton", cl)
);
function ua({ children: e, header: n, embedded: a = !1 }) {
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
ua.displayName = "Page";
const Oc = le(Z("Page", ua)), dl = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), fa = _e(null), ma = _e(null), sn = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), Ve = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), Pc = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, i] = E(n), [s, l] = E(
    a
  ), c = G(
    () => ({
      setGroups: i,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, u) => i((m) => m.some(
        (g) => g.chats.some((p) => p.id === u.id)
      ) ? Ve(
        m,
        (g) => g.map((p) => p.id === u.id ? { ...p, ...u } : p)
      ) : sn(m, f, (g) => ({
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
        (m) => sn(m, f, (h) => {
          const g = new Map(h.chats.map((v) => [v.id, v])), p = u.map((v) => g.get(v)).filter((v) => !!v), x = h.chats.filter((v) => !u.includes(v.id));
          return { ...h, chats: [...p, ...x] };
        })
      )
    }),
    []
  ), d = G(
    () => ({
      groups: r,
      activeChatId: s,
      unreadChatsCount: dl(r)
    }),
    [r, s]
  );
  return /* @__PURE__ */ t(ma.Provider, { value: c, children: /* @__PURE__ */ t(fa.Provider, { value: d, children: e }) });
}, ul = () => {
  const e = Ne(fa);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, ha = () => {
  const e = Ne(ma);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, fl = () => {
  const e = ul(), n = ha();
  return G(() => ({ ...e, ...n }), [e, n]);
}, Ec = () => ha(), _t = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: i,
  highlightWhenCollapsed: s,
  isDragging: l,
  wasDragging: c
}) => {
  const [d, f] = E(n), u = $e(), m = s && !d, h = () => {
    if (l || c?.current) return;
    const g = !d;
    f(g), r?.(g);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Tr, { open: d, children: [
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
              children: /* @__PURE__ */ t(V, { icon: Pn, size: "xs" })
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
}, ml = ({
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
) }), hl = ({
  chat: e,
  isActive: n,
  onClick: a
}) => {
  const r = !!e.unreadCount, i = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), s = e.avatar.type === "person" ? e.status : void 0;
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
          /* @__PURE__ */ t(En, { size: "xs", avatar: e.avatar }),
          i && /* @__PURE__ */ t(ml, { presence: i, isActive: n })
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
        (s || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          s && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            Br,
            {
              icon: s.icon,
              size: "sm",
              "aria-label": s.label,
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
}, gl = ({ action: e }) => /* @__PURE__ */ o(
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
  const { groups: n, activeChatId: a, setActiveChat: r } = fl(), i = $e();
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-2 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((s) => /* @__PURE__ */ t(gl, { action: s }, s.label)) }),
    n.map((s) => {
      const l = s.chats.some((c) => c.unreadCount);
      return /* @__PURE__ */ t(
        _t,
        {
          title: s.title,
          isOpen: s.isOpen,
          highlightWhenCollapsed: l,
          children: /* @__PURE__ */ t(Se, { initial: !1, children: s.chats.map((c) => /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: i ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                hl,
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
        s.id
      );
    })
  ] });
};
function pl({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: i = !1,
  additionalOptions: s = []
}) {
  const l = G(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(z, { className: "size-6" }),
    /* @__PURE__ */ t(z, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    ln,
    {
      company: l,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    bl,
    {
      companies: e,
      selected: l,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        ln,
        {
          company: l,
          withNotification: i
        }
      )
    }
  ) });
}
const bl = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: i = []
}) => {
  const s = se(), [l, c] = E(!1), d = G(
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
      label: s.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: s.navigation.sidebar.companySelector.placeholder,
      open: l,
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
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(V, { icon: Pn, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, ln = ({
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
          badge: n ? { icon: _n, type: "highlight" } : void 0
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
  onDropdownClick: s,
  hasActivityUpdates: l
}) {
  const c = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Oe, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ie("focus-visible:ring-inset")
        ),
        onClick: s,
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
          icon: Fn,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t($r, { type: "highlight", size: "sm", icon: _n }) })
    ] }) })
  ] });
}
function xl({ isExpanded: e }) {
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
function vl() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = De(), i = W(null);
  return j(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    kt,
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ t(xl, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ t(V, { icon: Ee, size: "md" }) })
      ]
    }
  );
}
function Tc({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: i,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      pl,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(vl, {})
  ] });
}
function yl() {
  const [e, n] = E(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const ga = _e(void 0);
function wl({ children: e }) {
  const [n, a] = E(!1), [r, i] = E(null);
  return /* @__PURE__ */ t(
    ga.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: i },
      children: e
    }
  );
}
function Dt() {
  const e = Ne(ga);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const Nl = ({
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
    e.tag && /* @__PURE__ */ t(Pe, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(Qe, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), Cl = ({ item: e }) => {
  const { isActive: n } = Ct(), { label: a, icon: r, ...i } = e, s = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Fe,
    {
      ...i,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ie("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(Nl, { item: e, active: s })
    }
  );
}, kl = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: i,
  total: s,
  onMove: l,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = se(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Dt(), { isActive: p } = Ct(), x = p(e.href, { exact: e.exactMatch }), v = W(!1), [N, _] = E(!1), B = i === 0, D = i === s - 1, O = s === 1, L = G(() => {
    const A = [];
    return !O && !B && A.push({
      label: f.actions.moveUp,
      onClick: () => l?.(i, i - 1),
      icon: Mr
    }), !O && !D && A.push({
      label: f.actions.moveDown,
      onClick: () => l?.(i, i + 1),
      icon: jr
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: Wr,
      critical: !0
    }), A;
  }, [O, B, D, f, l, i, r, e]), U = () => {
    m(!0), _(!1), g(e.href || null), v.current = !0;
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
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Sl, { tooltip: n, children: /* @__PURE__ */ o(
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
          ) : e.avatar ? /* @__PURE__ */ t(En, { size: "xs", avatar: e.avatar }) : null,
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
          Oe,
          {
            open: N,
            onOpenChange: _,
            items: L,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(V, { icon: pt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, N, w, L, n]);
  return d ? /* @__PURE__ */ t(
    Un,
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
  currentOrder: s
}) => {
  const { isDragging: l, setIsDragging: c } = Dt(), d = W(!1), f = yi(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && i?.(s);
    }, 0);
  }, h = (p) => {
    !l && !d.current && r?.(e, p);
  }, g = /* @__PURE__ */ t(
    _t,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: h,
      isDragging: l,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: b(
            "flex flex-col gap-0.5",
            l && !d.current && "pointer-events-none"
          ),
          children: e.items.map((p, x) => /* @__PURE__ */ t(Cl, { item: p }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Un,
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
function zc({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: i
}) {
  const s = W(null), l = e.filter(
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
  ), g = yl();
  return /* @__PURE__ */ t(wl, { children: /* @__PURE__ */ t(Ln, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    Il,
    {
      disableDragging: g,
      nonSortableItems: l,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: h,
      favorites: i,
      onFavoritesChange: r,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function Il({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: i,
  onDragEnd: s,
  favorites: l = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = se(), { isDragging: m } = Dt(), h = e.some((y) => y.isRoot), g = e.filter((y) => !y.isRoot).length > 0, p = n.length > 0, x = W(null), [v, N] = E(l), _ = l.length > 0;
  j(() => {
    JSON.stringify(l) !== JSON.stringify(v) && N(l);
  }, [l]);
  const B = (y) => {
    N(y);
  }, D = ne(
    (y) => {
      const C = v.filter((I) => I.href !== y.href);
      N(C), c?.(C);
    },
    [v, c]
  ), O = ne(
    (y, C) => {
      if (C < 0 || C >= v.length) return;
      const I = [...v], [P] = I.splice(y, 1);
      I.splice(C, 0, P), N(I), c?.(I);
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
    () => _ && v.map((y, C) => /* @__PURE__ */ t(
      kl,
      {
        isSortable: !f,
        tooltip: (S[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: x,
        onRemove: D,
        index: C,
        total: v.length,
        onMove: O,
        onReorderFinish: () => {
          c?.(v);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      _,
      v,
      S,
      D,
      O,
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
      onDragEnd: s,
      currentOrder: n
    },
    y.id
  )), [n, f, r, i, s]);
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
        _ && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(_t, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: w, children: k }) : /* @__PURE__ */ t(
          Wt,
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
              Wt,
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
const Sl = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(we, { description: e, children: n }) : n;
function Bc({
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
          /* @__PURE__ */ t(V, { icon: Dn, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Vr, { keys: a }) })
      ]
    }
  ) });
}
const on = ({ position: e }) => /* @__PURE__ */ t(
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
function Fl({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: i, isSmallScreen: s } = De(), l = $e(), [c, d] = mt({ threshold: 1 }), [f, u] = mt({ threshold: 1 }), m = se(), h = {
    x: {
      ease: i !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : i !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, g = () => a ? hi(a) && r ? jn(
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
          s ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: i === "locked" || s ? 0 : "8px",
        borderRadius: i === "locked" || s ? "0" : "12px",
        left: i === "locked" ? "0" : s ? 0 : "8px",
        x: i === "hidden" ? -260 : 0,
        opacity: i === "hidden" ? s ? 0.7 : 0 : 1,
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
            !d && /* @__PURE__ */ t(on, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(on, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const Rc = le(Fl), Al = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), Ll = ({
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
            e.badge ? /* @__PURE__ */ t(Al, {}) : null
          ]
        }
      )
    }
  );
}, $c = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const i = se(), s = r.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-5 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          Ll,
          {
            tab: l,
            isActive: l.id === n,
            onClick: () => a(l.id)
          },
          l.id
        ))
      }
    ),
    /* @__PURE__ */ t(
      H,
      {
        variant: "ghost",
        size: "md",
        icon: Dn,
        label: s,
        hideLabel: !0,
        onClick: r.onClick
      }
    )
  ] });
}, Ol = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, cn = {
  approved: {
    icon: wn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ee,
    type: "critical",
    size: "sm"
  }
}, Pl = {
  icon: On,
  type: "neutral",
  size: "sm"
}, El = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, _l = (e) => e in cn ? cn[e] : Pl;
function dn(e) {
  return El[e ?? "neutral"] ?? 0;
}
const Dl = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const i = se(), s = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = i.approvals.statuses[a], c = G(() => r.map((d) => {
    const f = _l(d.status);
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
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(Ke, { text: l, variant: Ol[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Tn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, Tl = ({ steps: e }) => {
  const a = se().approvals.history, r = e.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((i, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, s) => /* @__PURE__ */ o(X, { children: [
        /* @__PURE__ */ t(
          Dl,
          {
            title: i.title,
            approvalsRequired: i.approvalsRequired,
            status: i.status,
            approvers: i.approvers
          },
          i.title
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Mc = le(
  Z("OneApprovalHistory", Tl)
), dt = (e, n) => typeof n == "string" && n in e;
function un(e, n, a) {
  const r = {};
  let i = !1;
  const s = Gr(e);
  if (s !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(s).filter(
        ([u]) => dt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(s).length === 0) && (a.setCurrentFilters(f), r.filters = f, i = !0);
  }
  const l = e.sortings;
  if (l === null)
    a.setCurrentSortings(null), r.sortings = null, i = !0;
  else if (l && n.sortings && dt(n.sortings, l.field)) {
    const d = {
      field: l.field,
      order: l.order
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
function jc(e) {
  const {
    source: n,
    collectionId: a,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: s,
    idProvider: l,
    itemUrl: c,
    getItemTitle: d,
    enabled: f = !0,
    restorePersistedState: u = !0,
    currentFilters: m,
    navigationMode: h = "url",
    deps: g = []
  } = e, p = Kr(), x = wi(n, g), [v, N] = E(null), _ = v?.key === a && v.settled, B = W(x);
  B.current = x;
  const D = W(p);
  D.current = p;
  const O = W(null), L = m === void 0 ? null : JSON.stringify(m), U = W(m);
  U.current = m;
  const R = W(null), w = () => {
    const T = U.current;
    T !== void 0 && (R.current = JSON.stringify(T), B.current.setCurrentFilters(T));
  };
  j(() => {
    if (!f || O.current === a) return;
    if (!u) {
      O.current = a, w(), N({ key: a, applied: null, settled: !1 });
      return;
    }
    let T = !1;
    return (async () => {
      let ce = null;
      try {
        const he = await D.current.get(
          a
        );
        he && !T && (ce = un(
          he,
          B.current,
          B.current
        ));
      } catch {
      }
      T || (O.current = a, w(), N({ key: a, applied: ce, settled: !1 }));
    })(), () => {
      T = !0;
    };
  }, [a, f, u]), j(() => {
    !_ || L === null || R.current !== L && w();
  }, [_, L]), j(() => {
    if (!(!f || !u))
      return qr(a, async () => {
        try {
          const T = await D.current.get(
            a
          );
          if (!T) return;
          const Q = B.current;
          un(
            T,
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
      enabled: f && _,
      fetchParamsProvider: (T) => ({
        ...T,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  j(() => {
    N(
      (T) => T && T.key === a && !T.settled ? { ...T, settled: !0 } : T
    );
  }, [v, a]);
  const I = c ?? n.itemUrl, P = Ni({
    dataSource: x,
    data: S,
    paginationInfo: k,
    setPage: A,
    loadMore: M,
    isLoading: y,
    idProvider: l,
    itemUrl: I,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: s
  }), re = typeof P.activeItemId == "string" || typeof P.activeItemId == "number" ? P.activeItemId : null, te = P.activeItem !== null, $ = te && P.nextItem === null && P.hasNext, Ce = te && P.previousItem === null && P.hasPrevious, be = re !== null && (!te || $ || Ce), ke = [
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
  ], { neighbors: oe, isSupported: st } = Ci({
    dataAdapter: x.dataAdapter,
    id: re,
    filters: x.currentFilters,
    sortings: ke,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && _ && !C && !y && be,
    fetchParamsProvider: (T) => ({
      ...T,
      navigationFilters: x.currentNavigationFilters
    })
  }), Te = G(() => l || (x.idProvider ? (T, Q) => x.idProvider(T, Q) : ki), [l, x.idProvider]), F = G(() => {
    if (!be || oe === null) return P;
    const T = P.previousItem ?? oe.previous, Q = P.nextItem ?? oe.next, ce = (he) => he && I ? I(he) ?? null : null;
    return {
      ...P,
      previousItem: T,
      nextItem: Q,
      previousItemUrl: P.previousItemUrl ?? ce(T),
      nextItemUrl: P.nextItemUrl ?? ce(Q),
      absoluteIndex: P.absoluteIndex ?? (oe.position !== void 0 ? oe.position - 1 : null),
      totalItems: P.totalItems ?? oe.total,
      hasPrevious: P.hasPrevious || T !== null,
      hasNext: P.hasNext || Q !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: te ? P.goToPrevious : () => {
        oe.previous && P.setActiveItemId(
          Te(oe.previous)
        );
      },
      goToNext: te ? P.goToNext : () => {
        oe.next && P.setActiveItemId(
          Te(oe.next)
        );
      }
    };
  }, [
    P,
    be,
    oe,
    te,
    I,
    Te
  ]), q = ts(F, {
    getItemTitle: d,
    mode: h
  }), ee = f && _ && st && be && oe === null, J = W(null), de = q ?? (ee ? J.current : null);
  return j(() => {
    q !== null && (J.current = q);
  }, [q]), {
    ...F,
    isNavigating: F.isNavigating || ee,
    isReady: _ && !C,
    navigation: de,
    appliedCollectionState: v?.applied ?? null,
    dataSource: x,
    data: S,
    paginationInfo: k,
    isLoading: y
  };
}
const Tt = {
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
}, zl = ye({
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
      ...Tt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Bl = ue.forwardRef(function({ className: n, gap: a, children: r, tileSize: i, ...s }, l) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: l, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(zl({ gap: a, tileSize: i }), n),
      ref: l,
      ...s,
      children: r
    }
  ) });
}), Rl = ye({
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
}), pa = K(function({
  className: n,
  grow: a,
  basis: r,
  shrink: i,
  paddingX: s,
  paddingY: l,
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
        Rl({
          paddingX: s,
          basis: r,
          paddingY: l,
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
}), $l = ye({
  base: "flex-row",
  variants: {
    gap: {
      ...Tt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Ml = ue.forwardRef(function({ className: n, gap: a, wrap: r, ...i }, s) {
  return /* @__PURE__ */ t(
    pa,
    {
      className: b($l({ gap: a, wrap: r }), n),
      ref: s,
      ...i
    }
  );
}), jl = ye({
  base: "flex-col",
  variants: {
    gap: {
      ...Tt
    }
  },
  defaultVariants: {}
}), Wl = K(function({ className: n, gap: a, children: r, ...i }, s) {
  return /* @__PURE__ */ t(
    pa,
    {
      className: b(jl({ gap: a }), n),
      ref: s,
      ...i,
      children: r
    }
  );
}), Wc = pe(
  {
    name: "Stack",
    type: "layout"
  },
  Wl
), Vc = pe(
  {
    name: "Split",
    type: "layout"
  },
  Ml
), Uc = pe(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Bl
), Vl = ({ children: e }) => {
  const { enabled: n } = Hn();
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
}, Ul = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Hl = K(function({ header: n, children: a, action: r, summaries: i, alert: s, status: l, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Hn();
  j(() => {
    if (s && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, l]);
  const m = (g) => !!g && !(ue.isValidElement(g) && g.type === ue.Fragment && ue.Children.count(g.props.children) === 0), h = () => {
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
        n && /* @__PURE__ */ t(St, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Ft, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Ul, {}),
                /* @__PURE__ */ t(zn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(we, { label: n.info, children: /* @__PURE__ */ t(
                V,
                {
                  icon: Bn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(Rn, { text: s, level: "critical" }),
              l && /* @__PURE__ */ t(Ke, { text: l.text, variant: l.variant }),
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
            /* @__PURE__ */ t(Vl, { children: /* @__PURE__ */ t(Zr, { children: n.comment }) }),
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
        /* @__PURE__ */ o(At, { className: "flex h-full flex-col gap-4", children: [
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
}), Gl = ye({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Kl = K(
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
          /* @__PURE__ */ t(St, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Ft, { children: n.title }) : /* @__PURE__ */ t(z, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(zn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            At,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && Gl({ height: a })),
              children: [...Array(4)].map((i, s) => /* @__PURE__ */ t(
                z,
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
), Le = le(
  Z("Widget", ae(Hl, Kl))
), me = Object.assign(
  K(function({ chart: n, summaries: a, ...r }, i) {
    return /* @__PURE__ */ t(Le, { ref: i, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Le.Skeleton
  }
), ql = ae(
  K(function({ canBeBlurred: n, ...a }, r) {
    const i = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, s = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      me,
      {
        ref: r,
        ...i,
        chart: /* @__PURE__ */ t(Si, { ...s, canBeBlurred: n })
      }
    );
  }),
  me.Skeleton
), Yl = Z(
  "AreaChartWidget",
  ql
), Jl = K(function(n, a) {
  return /* @__PURE__ */ t(
    me,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(Fi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Zl = Z(
  "BarChartWidget",
  ae(Jl, me.Skeleton)
), Xl = ae(
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
), Ql = Z(
  "LineChartWidget",
  Xl
), eo = ae(
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
), to = Z(
  "PieChartWidget",
  eo
), no = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(me, { ref: a, ...n, chart: null });
    }
  ),
  me.Skeleton
), ao = Z(
  "SummariesWidget",
  no
), ro = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        me,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Oi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  me.Skeleton
), io = Z(
  "VerticalBarChartWidget",
  ro
), Hc = pe(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Yl
), Gc = pe(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Zl
), Kc = pe(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Ql
), qc = pe(
  {
    name: "PieChartWidget",
    type: "info"
  },
  to
), Yc = pe(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  io
), Jc = pe(
  {
    name: "SummariesWidget",
    type: "info"
  },
  ao
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
), lo = K(so), oo = (e, n) => /* @__PURE__ */ o(
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
), co = K(oo), uo = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, fo = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, mo = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, ho = {
  "line-chart": "default",
  "bar-chart": "promote"
}, go = K(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: i, buttonAction: s, type: l }, c) {
    const d = uo[l], f = fo[l], u = mo[l], m = ho[l];
    return /* @__PURE__ */ o(
      It,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(St, { className: "-mt-0.5", children: /* @__PURE__ */ t(Ft, { children: n }) }),
          /* @__PURE__ */ o(At, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(lo, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(co, { className: "w-full" })
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
                  onClick: s
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
), Zc = le(
  Z("ChartWidgetEmptyState", go)
);
function po(e, n) {
  const a = W(null), r = W(null), [i, s] = E({
    visibleItems: [],
    overflowItems: []
  });
  ti({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const l = ne(
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
        g = x, g = l(
          g,
          p,
          u.length
        ), h++;
      }
      return h;
    },
    [l]
  ), f = ne(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    s(h === 0 ? {
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
  minSize: s,
  onVisibleItemsChange: l
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = po(n, i);
  return j(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", r),
      style: {
        minHeight: `${s}px`
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
const Xc = ({
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
) : null, bo = ({ onClick: e, children: n }) => {
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
function Qc({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: i
}) {
  return /* @__PURE__ */ t(bo, { onClick: i, children: /* @__PURE__ */ o(
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
const xo = K(
  function({ content: n, label: a, color: r, ...i }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
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
), ed = K(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: i, color: s, ...l }) => /* @__PURE__ */ t(
          xo,
          {
            label: r,
            content: i,
            color: s,
            ...l
          },
          `${r}-${i}`
        ))
      }
    );
  }
), vo = ({
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
function td({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: i,
  withPointerCursor: s = !1,
  onClick: l,
  ...c
}) {
  return /* @__PURE__ */ o(
    vo,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(ni, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ai, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Tn,
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
const yo = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function fn({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: i
}) {
  const s = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(yo, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(An, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const wo = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Nt({
  id: e,
  title: n,
  alert: a,
  rawTag: r,
  count: i,
  icon: s,
  rightIcon: l,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(wo, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        V,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        V,
        {
          icon: l,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(Rn, { ...a }),
      r && /* @__PURE__ */ t(Pe, { ...r }),
      !!i && /* @__PURE__ */ t(Qe, { value: i })
    ] })
  ] });
}
function nd({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: i
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(fn, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    rt,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(fn, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function ad({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((s) => /* @__PURE__ */ t(Nt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    rt,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(Nt, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const No = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), rd = K(
  function({ title: n, titleValue: a, titleTooltip: r, list: i }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            we,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(V, { icon: Bn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      i.map((l) => /* @__PURE__ */ t(No, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function id({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: i = !1,
  hideTooltip: s = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      Pi,
      {
        data: a,
        legend: i,
        hideTooltip: s
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
const ba = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, Co = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: i = !0
}) => {
  const l = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[l], d = (() => {
    if (!i || r === void 0) return;
    const u = ba(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = Ie[l];
  return {
    status: l,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ut = "--:--", ko = (e, n) => {
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
}, Io = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, i = ba(
    n,
    a
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, l = r || (i ?? 0) < 0 ? void 0 : ko(
    i ?? 0,
    s
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - g) / s;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / s + x,
            color: Ie.overtime
          }
        ] : [
          ...u,
          {
            value: g / s,
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
    ...l ? [l] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: Ie.empty
  }), f;
}, So = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, i = e.at(-1), s = r ? Rt(r) : ut, l = n === void 0 || n > 0 ? ut : i ? Rt(i.to) : ut, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: l,
    time: m
  };
}, Ie = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Fo({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Io({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: i, secondaryLabel: s, time: l } = So({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ei, { width: 156, height: 156, children: /* @__PURE__ */ t(
      _i,
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
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: l }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: i }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: s })
    ] })
  ] });
}
function Ao({
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
  locations: s,
  canShowLocation: l = !0,
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
  projectSelectorElement: _,
  breakTypeName: B
}) {
  const { status: D, statusText: O, subtitle: L, statusColor: U } = Co({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), R = D === "clocked-out", w = m?.map(($) => ({
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
  }, y = R && s.length && !c && l, C = s.find(($) => $.id === i), I = s.map(($) => ({
    value: $.id,
    label: $.name,
    icon: $.icon
  })), P = D === "break", [re, te] = E(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: O }),
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
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            H,
            {
              onClick: d,
              label: r.clockIn,
              icon: $t
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(X, { children: [
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
                    icon: Mt,
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
                icon: Mt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: jt
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(X, { children: [
            /* @__PURE__ */ t(
              H,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: jt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              H,
              {
                onClick: d,
                label: r.resume,
                icon: $t
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ t(
        Fo,
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
            Ao,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      N && _
    ] }) : /* @__PURE__ */ o(X, { children: [
      l && C && /* @__PURE__ */ t(X, { children: /* @__PURE__ */ t(Pe, { text: C.name, icon: C.icon }) }),
      N && _,
      P && B && /* @__PURE__ */ t(Pe, { text: B })
    ] }) })
  ] }) });
}
const Lo = {
  done: oi,
  "in-progress": li,
  todo: si
}, Oo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Po({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const i = () => {
    a?.(e);
  }, s = G(() => {
    if (!r)
      return Lo[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Nt,
    {
      id: e.id,
      title: e.text,
      icon: s,
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
function ld({
  tasks: e,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: i = "No tasks assigned"
}) {
  const l = [
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
  ), c = !l.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : l.slice(0, r).map((d) => /* @__PURE__ */ t(
    Po,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Eo = Object.defineProperty, _o = Object.defineProperties, Do = Object.getOwnPropertyDescriptors, Ze = Object.getOwnPropertySymbols, xa = Object.prototype.hasOwnProperty, va = Object.prototype.propertyIsEnumerable, mn = (e, n, a) => n in e ? Eo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, fe = (e, n) => {
  for (var a in n || (n = {})) xa.call(n, a) && mn(e, a, n[a]);
  if (Ze) for (var a of Ze(n)) va.call(n, a) && mn(e, a, n[a]);
  return e;
}, it = (e, n) => _o(e, Do(n)), To = (e, n) => {
  var a = {};
  for (var r in e) xa.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && Ze) for (var r of Ze(e)) n.indexOf(r) < 0 && va.call(e, r) && (a[r] = e[r]);
  return a;
}, zo = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Bo = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Ro = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = fe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, $o = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = fe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Mo = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let i = fe({}, r);
  return i.left = n.left + e.width, zo(i) || Bo({ usedSpot: i, spotsList: a }) ? null : i;
}, jo = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((i, s, l) => {
  if (i === a) return Mo({ stone: r, position: n, optimalSpot: a, spotsList: l });
  let c = Ro({ position: n, spot: i, stone: r });
  return c || $o({ position: n, stone: r, spot: i }) || i;
});
function Wo(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let i = n[a];
    if (e(i)) return i;
  }
  return null;
}
var Vo = (e, n) => n.filter(e), Uo = (e, n) => [...n].sort(e), Ho = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Go = (e) => Uo(Ho, e), Ko = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let i = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (i.bottom = n.bottom);
  for (let s = 0, l = e.length; s < l; s += 1) {
    let c = e[s];
    if (i.left < c.left && i.top < c.top) {
      i.right = c.left;
      break;
    }
  }
  return i;
}, qo = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Yo = ({ availableSpots: e, stone: n }) => Wo((a) => qo(a, n), e);
function Jo({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Yo({ availableSpots: n, stone: e }), i = { left: r.left, top: r.top }, s = Ko({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), l = [...n, s], c = jo({ spots: l, position: i, optimalSpot: r, stone: e });
  return l = [...Vo(Boolean, c)], l = Go(l), { position: i, availableSpots: l };
}
var Zo = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, i = [], s = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let c = Jo({ availableSpots: s, stone: l, containerSize: n }), d = c.position.top + l.height;
    r < d && (r = d), i.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: i, containerHeight: r };
}, Xo = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), Qo = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: s, containerHeight: l, stones: c, availableSpots: d }, f] = E({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = Xo(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Zo({ stones: h, containerSize: g });
    f(it(fe({}, p), { stones: h }));
  }, [a, e, n, r, i]), { positions: s, containerHeight: l, stones: c, availableSpots: d };
}, ec = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), tc = ({ transition: e, transitionDuration: n }) => e ? { transition: ec(n)[e] } : null, nc = (e) => e ? it(fe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, ac = ({ style: e, position: n, transition: a, transitionDuration: r }) => fe(fe(it(fe({}, e), { position: "absolute" }), nc(n)), tc({ transition: a, transitionDuration: r }));
function rc(e, n, a) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, i);
    }, n);
  };
}
var ic = () => {
  let [e, n] = E(), a = W(rc(n, 300));
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
      for (let s of i) a(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, lc = (e) => {
  var n = e, { children: a, style: r, transition: i = !1, transitionDuration: s = 500, transitionStep: l = 50 } = n, c = To(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = W([]), f = W(null), u = ic(), m = sc(f), { positions: h, containerHeight: g } = Qo({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), p = fe({ minHeight: g ?? 0, position: "relative" }, r);
  return t("div", it(fe({ ref: f, style: p }, c), { children: Wn.map(a, (x, v) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let N = { style: ac({ style: x.props.style, position: h[v], transition: i, transitionDuration: s }), ref: (_) => d.current[v] = _ };
    return jn(x, fe(fe({}, x.props), N));
  }) }));
};
const oc = { sm: 340, md: 480, lg: 640 }, hn = K(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const i = oc[a], [s, l] = E(), c = Wn.toArray(n), d = W(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && l(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, i]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(lc, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), cc = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], od = ae(hn, () => /* @__PURE__ */ t($n, { children: /* @__PURE__ */ t(hn, { children: cc.map((e, n) => /* @__PURE__ */ t(Le.Skeleton, { height: e }, n)) }) })), gn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), cd = ae(
  K(function({ children: n }, a) {
    return /* @__PURE__ */ t(Xe, { ref: a, showBar: !1, children: /* @__PURE__ */ t(gn, { children: n }) });
  }),
  () => /* @__PURE__ */ t($n, { orientation: "horizontal", children: /* @__PURE__ */ o(gn, { children: [
    /* @__PURE__ */ t(Le.Skeleton, {}),
    /* @__PURE__ */ t(Le.Skeleton, {}),
    /* @__PURE__ */ t(Le.Skeleton, {})
  ] }) })
);
function dc({
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
    Di,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const dd = le(
  Z("WidgetEmptyState", dc)
), ya = K(
  ({ title: e, children: n }, a) => (di(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
ya.displayName = "WidgetSection";
const ud = le(
  Z("WidgetSection", ya)
), fd = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const i = ui(), s = window.location.pathname, l = G(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = G(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return l ? r : (i && console.error(c), null);
}, md = le(
  pe(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Xe
  )
);
export {
  Nc as ActivityItemList,
  zs as ActivityItemListSkeleton,
  cs as AiPromotionChat,
  ds as AiPromotionChatProvider,
  Fc as ApplicationFrame,
  Kd as AreaChart,
  Hc as AreaChartWidget,
  Uc as AutoGrid,
  $r as Badge,
  qd as BarChart,
  Gc as BarChartWidget,
  Ts as BaseActivityItemList,
  Yd as BaseBanner,
  js as BaseCelebration,
  Zs as BaseCommunityPost,
  pd as BaseTabs,
  bd as BreadcrumbSelect,
  Mi as Breadcrumbs,
  wt as CalendarEvent,
  Xc as CalendarEventList,
  Jd as CardSelectableContainer,
  gi as Carousel,
  Zd as CategoryBarChart,
  id as CategoryBarSection,
  Cc as Celebration,
  Ws as CelebrationSkeleton,
  Zc as ChartWidgetEmptyState,
  xd as Chip,
  sd as ClockInControls,
  Xd as ComboChart,
  Ic as CommunityPost,
  Xs as CommunityPostSkeleton,
  pl as CompanySelector,
  Qe as Counter,
  od as Dashboard,
  Ac as DaytimePage,
  vd as DetailsItem,
  yd as DetailsItemsList,
  Qd as Dialog,
  Oe as Dropdown,
  wc as EntitySelect,
  eu as F0ActionBar,
  tu as F0AiBanner,
  An as F0AvatarModule,
  wd as F0ButtonToggle,
  xc as F0Callout,
  Nd as F0CardHorizontal,
  Cd as F0FileItem,
  nu as F0NotesTextEditor,
  au as F0NotesTextEditorSkeleton,
  ru as F0NumberInput,
  kr as F0RichTextDisplay,
  iu as F0RichTextEditor,
  kd as F0SearchInput,
  vc as F0SegmentedBar,
  su as F0SegmentedControl,
  lu as F0TableOfContent,
  ou as F0TextAreaInput,
  Id as F0TextInput,
  yc as F0VersionHistory,
  cu as F1SearchBox,
  du as FILE_TYPES,
  Sd as FileItem,
  kc as HighlightBanner,
  ed as IndicatorsList,
  uu as Input,
  fu as Item,
  mu as ItemSectionHeader,
  hu as LineChart,
  Kc as LineChartWidget,
  zc as Menu,
  Fd as MobileDropdown,
  gu as NotesTextEditor,
  pu as NotesTextEditorSkeleton,
  bu as NumberInput,
  Lc as OmniButton,
  Mc as OneApprovalHistory,
  Ad as OneCalendar,
  Ld as OneCalendarInternal,
  xu as OneDataCollection,
  vu as OneDateNavigator,
  Di as OneEmptyState,
  yu as OnePagination,
  Sc as OnePersonListItem,
  fd as OneRestrictComponent,
  Oc as Page,
  bc as PageHeader,
  Pt as PageHeaderNavigationContext,
  gc as PageHeaderNavigationProvider,
  Ga as PageNavigation,
  wu as PieChart,
  qc as PieChartWidget,
  Vl as PrivateBox,
  Nu as ProgressBarChart,
  Cu as RadarChart,
  Hs as Reactions,
  ku as ResourceHeader,
  Od as RichTextDisplay,
  Iu as RichTextEditor,
  md as ScrollArea,
  Bc as SearchBar,
  Su as SectionHeader,
  qe as Select,
  Vr as Shortcut,
  Rc as Sidebar,
  hl as SidebarChatItem,
  _c as SidebarChatList,
  Pc as SidebarChatProvider,
  _t as SidebarCollapsibleSection,
  Dc as SidebarFooter,
  Tc as SidebarHeader,
  $c as SidebarTabs,
  yn as Spinner,
  Vc as Split,
  Wc as Stack,
  Jc as SummariesWidget,
  Pd as Switch,
  Ed as Tabs,
  _d as TabsSkeleton,
  ld as TasksList,
  Fu as Textarea,
  Dd as ToggleGroup,
  Td as ToggleGroupItem,
  we as Tooltip,
  rd as TwoColumnsList,
  Au as UPLOAD_INPUT_ID,
  Lu as VerticalBarChart,
  Yc as VerticalBarChartWidget,
  xt as VirtualList,
  zd as WeekStartDay,
  Bd as Weekdays,
  Le as Widget,
  td as WidgetAvatarsListItem,
  dd as WidgetEmptyState,
  Qc as WidgetHighlightButton,
  nd as WidgetInboxList,
  fn as WidgetInboxListItem,
  ud as WidgetSection,
  ad as WidgetSimpleList,
  Nt as WidgetSimpleListItem,
  cd as WidgetStrip,
  Ou as actionBarStatuses,
  Pu as buttonToggleSizes,
  Eu as buttonToggleVariants,
  Rd as chipVariants,
  _u as downloadAsCSV,
  $d as f0FileItemSizes,
  Du as generateCSVContent,
  Md as getGranularityDefinition,
  jd as getGranularityDefinitions,
  Wd as getGranularitySimpleDefinition,
  Vd as granularityDefinitions,
  Ud as modules,
  Tu as predefinedPresets,
  Hd as rangeSeparator,
  un as seedFromStorage,
  zu as selectSizes,
  tt as useAiPromotionChat,
  Bu as useDataCollectionData,
  jc as useDataCollectionItemNavigation,
  wi as useDataCollectionSource,
  Ru as useExportAction,
  $u as useInfiniteScrollPagination,
  ts as usePageHeaderItemNavigation,
  pc as usePageHeaderNavigation,
  De as useSidebar,
  Ec as useSidebarChatActions,
  fl as useSidebarChats
};
