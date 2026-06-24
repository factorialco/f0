import { h as nr, B as ar, i as rr, j as sr, k as tn, l as Ge, m as Ue, n as ir, o as b, p as ee, q as Fe, u as Q, T as lr, r as or, s as cr, R as dr, t as ur, v as ce, w as fr, x as Pt, y as Ct, z as et, A as Ce, E as mr, G as hr, H as Y, J as Mn, K as ot, L as re, M as pr, N as gr, O as jn, Q as br, S as xr, U as te, V as W, W as Pe, X as vr, Y as yr, Z as wr, _ as Nr, $ as Cr, a0 as we, a1 as Wn, a2 as Ae, a3 as tt, e as Un, a4 as Be, a5 as Hn, a6 as Et, a7 as ue, a8 as se, a9 as _t, aa as Vn, ab as kr, ac as Gn, ad as pe, ae as de, af as Ir, ag as Sr, ah as Fr, ai as Ar, aj as Tr, ak as Se, al as ct, am as Kn, an as Lr, ao as Rr, ap as Dr, aq as dt, ar as qn, as as Yn, at as Or, au as Pr, av as nt, aw as Er, ax as Qn, ay as _r, az as zr, aA as Br, aB as $r, aC as Mr, aD as Jn, aE as Xn, aF as Zn, aG as kt, aH as ea, aI as It, aJ as ta, aK as jr, aL as Wr, aM as Ur, aN as na, aO as Hr, aP as Te, aQ as Me, aR as St, aS as aa, aT as Vr, aU as zt, aV as Gr, aW as Kr, aX as qr, aY as $e, aZ as Yr, a_ as Qr, a$ as Ke, b0 as nn, b1 as Ft, b2 as Jr, b3 as Xr, a as Zr, b as es, b4 as ra, b5 as ts, g as ns, F as as, b6 as rs, b7 as sa, b8 as ss, b9 as Bt, ba as is, bb as Ve, bc as ls, bd as os, be as ia, bf as cs, bg as ds, bh as us, bi as la, bj as $t, bk as fs, bl as ms, bm as hs, bn as Mt, bo as ps, bp as gs, bq as bs, br as xs, bs as jt, bt as vs, bu as oa, bv as ys, bw as ws, bx as Ns, by as Cs, bz as ks, bA as Is, bB as Ss, bC as Fs, bD as As, bE as Ts, bF as Ls, bG as Rs, bH as Ds, bI as Os, bJ as Ps, bK as Es, bL as _s, bM as zs, bN as Bs, bO as $s, bP as ke, bQ as Wt, bR as Ut, bS as Ht, bT as ca, bU as Vt, bV as da, bW as ua, bX as Ms, bY as js, bZ as Ws, b_ as Us, b$ as Hs, c0 as Vs, c1 as Gs, c2 as Ks, c3 as an, c4 as qs, c5 as Ys, c6 as rn, c7 as sn, c8 as ln, c9 as Qs, ca as Js, cb as Xs, cc as Zs, cd as fa, ce as ei, cf as ti } from "./F0CanvasPanel-CDDD_J2M.js";
import { cr as cf, cq as df, cD as uf, cn as ff, co as mf, cg as hf, ch as pf, ci as gf, cG as bf, cp as xf, cz as vf, cA as yf, cE as wf, cj as Nf, ct as Cf, cs as kf, ck as If, cl as Sf, cB as Ff, cH as Af, cC as Tf, cF as Lf, cy as Rf, cv as Df, cx as Of, cu as Pf, cm as Ef, cw as _f } from "./F0CanvasPanel-CDDD_J2M.js";
import { jsx as t, jsxs as c, Fragment as ae } from "react/jsx-runtime";
import be, { forwardRef as ne, useRef as _, useTransition as ni, useState as R, useLayoutEffect as at, useId as At, useContext as Ie, createContext as Le, useEffect as H, useCallback as G, useMemo as Z, Fragment as ai, isValidElement as ri, cloneElement as ma, memo as si, Children as ha } from "react";
import { C as ii, P as li, a as ut, M as oi, p as ci, b as di, R as on, c as pa, u as ui, d as fi, e as mi, f as hi, g as pi, h as ga, S as gi, A as bi, B as xi, L as vi, i as yi, V as wi, j as Ni, k as Ci, l as ki, O as Ii } from "./useDataCollectionSource-C1Iqg0VY.js";
import { r as Bf, s as $f, o as Mf, H as jf, t as Wf, z as Uf, a8 as Hf, G as Vf, q as Gf, aa as Kf, a9 as qf, Q as Yf, ad as Qf, F as Jf, Y as Xf, U as Zf, J as em, af as tm, K as nm, Z as am, _ as rm, v as sm, ab as im, ac as lm, N as om, $ as cm, a5 as dm, a7 as um, w as fm, y as mm, D as hm, W as pm, ae as gm, X as bm, T as xm, ag as vm, x as ym, E as wm, m as Nm, n as Cm, a1 as km, a2 as Im, a6 as Sm, I as Fm, a3 as Am, a0 as Tm, a4 as Lm } from "./useDataCollectionSource-C1Iqg0VY.js";
const Si = nr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ba = ne(({ className: e, items: n }, a) => /* @__PURE__ */ t(ar, { ref: a, className: e, children: /* @__PURE__ */ c("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(rr, {}),
  /* @__PURE__ */ t(sr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
ba.displayName = "CollapsedBreadcrumbItem";
const Gt = 50, Fi = 120, rt = 8;
function Ai(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let s = e - r - rt, i = 0, l = 1;
  for (let o = a - 1; o > 0; o--) {
    const d = n[o];
    if (s < d)
      break;
    s -= d, i = o, l++;
  }
  if (l < a)
    for (s -= Gt; s < 0 && l > 1; )
      s += n[i], i++, l--;
  return Math.max(2, l);
}
function cn(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + rt;
    default:
      return e[0] + Gt + e[e.length - 1] + rt;
  }
}
function Ti(e, n) {
  return Fi * e + (n ? Gt : 0) + rt;
}
function Li(e, n, a = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Ti(
        l,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, s = a.map((l) => l.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: cn(s)
    };
  const i = Ai(e, s);
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
    minWidth: cn(s)
  };
}
function Ri({ breadcrumbs: e, append: n }) {
  const a = _(null), r = _(null), [, s] = ni(), [i, l] = R(null), o = (i?.collapsedItems || []).length > 0;
  return at(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const p = a.current?.clientWidth ?? null, h = Array.from(f.children);
      s(() => {
        const x = Li(
          p,
          e,
          h
        );
        l(x);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || i && !i.headItem ? /* @__PURE__ */ t(tn, { ref: a, className: "w-full" }) : /* @__PURE__ */ c(
    tn,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: i?.minWidth
      },
      children: [
        /* @__PURE__ */ t(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: e.map((d, f) => /* @__PURE__ */ t(
              Ge,
              {
                item: d,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              Ue(d)
            ))
          }
        ),
        i && i.headItem && /* @__PURE__ */ c(ir, { children: [
          /* @__PURE__ */ t(
            Ge,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${Ue(i.headItem)}`
          ),
          o && /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t(
              ba,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ t(
              Ge,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              Ue(d)
            ))
          ] }),
          !o && /* @__PURE__ */ t(ae, { children: i.tailItems.map((d, f) => /* @__PURE__ */ t(
            Ge,
            {
              item: d,
              isLast: f === i.tailItems.length - 1,
              isFirst: !1,
              children: f === i.tailItems.length - 1 ? n : void 0
            },
            Ue(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Ue(e.at(-1)) ?? 0}`
  );
}
const Di = Fe({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), dn = [
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
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...s
}, i) => {
  const l = At(), {
    onAnimationStart: o,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: p,
    ...h
  } = s;
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(Di({ size: n }), p),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ c(
        ee.svg,
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
            ...h.style
          },
          ...(({ style: x, ...v }) => v)(h),
          children: [
            /* @__PURE__ */ c("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              dn.map((x) => /* @__PURE__ */ t("clipPath", { id: `${l}-${x.id}`, children: /* @__PURE__ */ t("path", { d: x.path }) }, x.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: dn.map((x) => /* @__PURE__ */ t(
              ee.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${l}-${x.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? x.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? x.delay : 0,
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
                    delay: e ? x.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${x.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: x.transformOrigin,
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
              x.id
            )) })
          ]
        }
      )
    }
  );
}, xa = ne(Oi), va = Le(null), Pi = 15, Ei = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [s, i] = R(n), [l, o] = R(!1), [d, f] = R(!0), [u, m] = R(
    Pi
  ), p = _(null), h = (v) => {
    p.current = v;
  }, x = () => {
    p.current && p.current();
  };
  return H(() => {
    i(n);
  }, [n]), H(() => {
    if (l && a?.(), !l) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [l, a]), /* @__PURE__ */ t(
    va.Provider,
    {
      value: {
        ...r,
        enabled: s,
        setEnabled: i,
        open: l,
        setOpen: o,
        shouldPlayEntranceAnimation: d,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: s ? u : null,
        clear: x,
        setClearFunction: h
      },
      children: e
    }
  );
}, _e = () => {
};
function ft() {
  const e = Ie(va);
  return e === null ? {
    enabled: !1,
    setEnabled: _e,
    open: !1,
    setOpen: _e,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: _e,
    setAutoClearMinutes: _e,
    clear: _e,
    setClearFunction: _e,
    autoClearMinutes: null
  } : e;
}
const ya = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: s } = ft(), i = Q(), [l, o] = R(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(lr, { children: /* @__PURE__ */ c(or, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(cr, { asChild: !0, children: /* @__PURE__ */ t(
      ee.div,
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
          dr,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: s,
            "aria-label": s ? i.ai.closeChat : i.ai.openChat,
            className: b(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ce(),
              e
            ),
            disabled: n,
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: /* @__PURE__ */ t(
              ur,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  xa,
                  {
                    size: "sm",
                    background: s ? "white" : void 0,
                    hover: l
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !s && /* @__PURE__ */ t(fr, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, un = "one_sidebar_locked", wa = Le(void 0);
function je() {
  const e = Ie(wa);
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
function _i({ children: e }) {
  const { currentPath: n } = Pt(), [a, r] = R(!1), [s, i] = R(!1), l = a ? et.xl : et.md, o = Ct(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = R(() => {
    const T = localStorage.getItem(un);
    return T !== null ? !!T : !0;
  }), [u, m] = R(!1), [p, h] = R(
    null
  ), x = G(
    ({ isInvokedByUser: T } = {
      isInvokedByUser: !0
    }) => {
      i(T ?? !0), o && m(!u), f(!d);
    },
    [o, u, d, f, m]
  ), v = G(
    (T) => {
      o || (T.clientX < 32 && m(!0), T.clientX > 280 && m(!1));
    },
    [o, m]
  ), y = Z(() => o ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [o, u, d]);
  return H(() => {
    m(!1);
  }, [n]), H(() => {
    s && localStorage.setItem(un, d ? "1" : "");
  }, [d, s]), H(() => () => {
    h(y);
  }, [y]), /* @__PURE__ */ t(
    wa.Provider,
    {
      value: {
        isSmallScreen: o,
        isLastToggleInvokedByUser: s,
        sidebarState: y,
        toggleSidebar: x,
        prevSidebarState: p,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const fn = ee.create(Y), mn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, zi = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, s] = R(!1), i = () => {
    s(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ce, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ce()
      ),
      onClick: i,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        fn,
        {
          size: "sm",
          icon: mr,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: mn,
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
        fn,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: hr,
          className: "outline-none",
          variants: mn,
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
function hn({
  icon: e,
  target: n,
  fallbackLabel: a
}) {
  const r = !n, s = n?.title || a, i = n?.onClick, l = i ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    re,
    {
      ...i ? { onClick: i, type: "button" } : { href: l ?? "" },
      title: r ? void 0 : s,
      "aria-label": s,
      disabled: r,
      noAutoTooltip: r,
      noTitle: r,
      size: "sm",
      variant: "outline",
      label: s,
      icon: e,
      hideLabel: !0
    }
  );
}
function Bi({ previous: e, next: n, counter: a }) {
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
    a && /* @__PURE__ */ c("span", { className: "text-sm text-f1-foreground-secondary", children: [
      a.current,
      "/",
      a.total
    ] }),
    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        hn,
        {
          icon: Mn,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        hn,
        {
          icon: ot,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const $i = ({
  currentModule: e,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: s,
  errorScreen: i,
  onOpenChange: l = () => {
  },
  onHeaderClick: o = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, p] = R("idle"), [h, x] = R(null), [v, ...y] = h ?? [], [T, L] = R(!1);
  H(() => {
    x(null), p("idle");
  }, [e]);
  const E = G(async () => {
    try {
      p("fetching");
      const D = await a();
      p("idle"), x(D);
    } catch {
      p("error");
    }
  }, [a]);
  return /* @__PURE__ */ c(
    pr,
    {
      open: T,
      onOpenChange: async (D) => {
        L(D), D && h === null && E(), l(D);
      },
      children: [
        /* @__PURE__ */ t(gr, { asChild: !0, children: /* @__PURE__ */ t(
          re,
          {
            variant: "outline",
            icon: jn,
            hideLabel: !0,
            label: n,
            pressed: T,
            append: f && /* @__PURE__ */ t(Kt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(br, { children: /* @__PURE__ */ c(
          xr,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Wi, { title: n, url: r, onClick: o }),
              m === "fetching" && /* @__PURE__ */ t(Vi, {}),
              /* @__PURE__ */ c("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && h !== null && h.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Ui, { ...s, buttonUrl: r }) }),
                m === "idle" && h !== null && h.length > 0 && /* @__PURE__ */ c("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Mi,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  h.length > 1 && /* @__PURE__ */ t(ae, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((D, O) => /* @__PURE__ */ t(
                    ji,
                    {
                      ...D,
                      onClick: d
                    },
                    O
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Hi,
                  {
                    ...i,
                    onClick: () => {
                      E();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Gi,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => L(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Mi = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: s,
  onClick: i
}) => {
  const l = "flex flex-col items-stretch w-full", o = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    vr,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ c(
        Pe,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(l, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: o ? /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
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
              yr,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ c("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ c("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: s })
              ] }),
              r && /* @__PURE__ */ t(Kt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, ji = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: s
}) => {
  const i = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(wr, { asChild: !0, className: i, onClick: s, children: /* @__PURE__ */ t(
    Pe,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        i,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ c("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ c("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(Kt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Wi = ({
  title: e,
  url: n,
  onClick: a
}) => /* @__PURE__ */ c(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ t("h2", { className: "text-base font-medium", children: e }),
      /* @__PURE__ */ t(
        te,
        {
          variant: "outline",
          size: "sm",
          icon: ot,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Na = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: s
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        s
      ),
      children: e
    }
  ),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), Ui = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Na,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(Y, { icon: jn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Pe, { href: a, children: /* @__PURE__ */ t(te, { label: n }) })
  }
), Hi = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Na,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(Y, { icon: Nr, size: "lg" }),
    button: /* @__PURE__ */ t(te, { variant: "outline", label: a, onClick: r })
  }
), Vi = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ c("div", { className: "p-2", children: [
      /* @__PURE__ */ t(W, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(W, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(W, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(W, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(W, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Kt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Gi = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [s, i] = R(e);
  H(() => {
    i(e);
  }, [e]);
  const l = () => {
    i(!1), n && n();
  }, o = (d) => {
    i(!1), r(), d && d();
  };
  return s && /* @__PURE__ */ c(ae, { children: [
    /* @__PURE__ */ t(Cr, {}),
    /* @__PURE__ */ c("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          te,
          {
            variant: "ghost",
            icon: we,
            size: "sm",
            hideLabel: !0,
            onClick: l,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        ii,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            li,
            {
              ...d,
              isVisible: !0,
              trackVisibility: d.trackVisibility,
              onClick: () => o(d.onClick)
            },
            d.title
          ))
        }
      )
    ] })
  ] });
}, qt = Le(null), su = qt.Provider;
function iu() {
  return Ie(qt);
}
function Ki(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", s = e !== null, i = e?.previousItem ?? null, l = e?.nextItem ?? null, o = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, h = e?.goToPrevious, x = e?.goToNext;
  return Z(() => {
    if (!s) return null;
    const v = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, y = (E, D) => (E !== null ? a?.(E) : void 0) ?? D, T = r === "callback" ? m ? { onClick: h, title: y(i, "Previous") } : void 0 : o !== null ? { url: o, title: y(i, "Previous") } : void 0, L = r === "callback" ? p ? { onClick: x, title: y(l, "Next") } : void 0 : d !== null ? { url: d, title: y(l, "Next") } : void 0;
    return !T && !L && !v ? null : { previous: T, next: L, counter: v };
  }, [
    s,
    r,
    i,
    l,
    o,
    d,
    f,
    u,
    m,
    p,
    h,
    x,
    a
  ]);
}
function lu({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: s = !1,
  navigation: i,
  productUpdates: l,
  favorites: o,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = je(), p = Ie(qt), h = i ?? p ?? void 0, x = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], v = n && Object.keys(n).length !== 0, y = s && a.length > 0, T = !s && r.length > 0, L = !s && !!l?.isVisible, E = x[x.length - 1], D = "navigation" in window ? window.navigation : null, O = s && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "flex items-center justify-between px-page py-4",
        s ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ce, { children: !s && u !== "locked" && /* @__PURE__ */ t(
            ee.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                te,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: Wn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ c(
            "div",
            {
              className: b(
                "flex flex-grow items-center gap-2",
                O && "justify-center"
              ),
              children: [
                s && O && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  te,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Mn,
                    onClick: () => window.history.back()
                  }
                ) }),
                O || y ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in E ? /* @__PURE__ */ t(W, { className: "h-4 w-24" }) : E.label }) : /* @__PURE__ */ t(
                  Ri,
                  {
                    breadcrumbs: x,
                    append: o !== void 0 && /* @__PURE__ */ t(
                      zi,
                      {
                        label: o.label,
                        isMarked: o.isMarked,
                        onChange: o?.onChange
                      }
                    )
                  },
                  x[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
          !s && v && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(Ae, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            tt,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(tt, { text: n.text, variant: n.variant }) }),
          !s && v && (h || T || L) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Bi, { ...h }),
          h && T && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (L || T) && /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            L && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              $i,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            T && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((I, j) => /* @__PURE__ */ t(qi, { action: I }, j)) })
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Un,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(ya, {})
          ] })
        ] })
      ]
    }
  );
}
function qi({ action: e }) {
  const n = _(null), [a, r] = R(!1), s = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    re,
    {
      size: "md",
      variant: s,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    re,
    {
      size: "md",
      variant: s,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Pe,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        re,
        {
          size: "md",
          variant: s,
          label: e.label,
          icon: e.icon,
          hideLabel: !0,
          onClick: (i) => {
            i.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const Yi = () => {
  const e = Q();
  return /* @__PURE__ */ c(
    ee.div,
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
          re,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Hn,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Qi = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = _(null);
  H(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, Ji = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: s
  } = ft();
  return Qi({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: s
  }), /* @__PURE__ */ t(Ce, { children: n && /* @__PURE__ */ t(
    ee.div,
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
        ee.div,
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
}, Xi = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(Et, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        re,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Zi = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: s,
  actions: i,
  onShow: l,
  onHide: o,
  children: d
}) => /* @__PURE__ */ t(
  Ei,
  {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: i,
    onShow: l,
    onHide: o,
    children: d
  }
), el = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: i,
    setOpen: l,
    onHide: o
  } = ft(), d = () => {
    l(!1), o?.();
  };
  return e ? /* @__PURE__ */ c(Ji, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      re,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: we,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(xa, { spin: !0, size: "lg" }),
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      s?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: s.map((f, u) => /* @__PURE__ */ c("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(_t, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ c("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ t(
        Xi,
        {
          action: f,
          onClose: () => l(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Yi, {}) })
  ] }) : null;
}, tl = ue(
  se("AiPromotionChat", el)
), nl = ue(
  se("AiPromotionChatProvider", Zi)
), Ca = Fe({
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
}), pn = {
  positive: Gn,
  warning: kr,
  info: Vn
}, gn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, al = ne(
  function({ title: n, onClose: a, children: r, actions: s = [], variant: i }, l) {
    if (s.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${s.length} actions were provided.`
      );
    const o = s.length > 0;
    return /* @__PURE__ */ c(
      "div",
      {
        ref: l,
        className: Ca({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  gn[i]
                ),
                children: [
                  pn[i] && /* @__PURE__ */ t(Y, { icon: pn[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    pe,
                    {
                      className: gn[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              te,
              {
                variant: "ghost",
                icon: we,
                size: "sm",
                hideLabel: !0,
                onClick: a,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: b(
                  "bg-f1-background px-4 py-3",
                  o ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            o && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: s.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              te,
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
), rl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ c(
  "div",
  {
    className: Ca({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(W, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(W, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(W, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(W, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(W, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(W, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), ka = ne(
  (e, n) => /* @__PURE__ */ t(al, { ref: n, ...e })
), sl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(rl, { compact: e, variant: n });
ka.displayName = "F0Callout";
const ou = de(
  ue(ka),
  sl
), Ia = ne(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, s) => {
    const i = Q(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, o = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < o), f = Ir(a);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: s,
        role: "progressbar",
        "aria-label": r,
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": o,
        "aria-valuetext": i.t("audioPlayer.position", {
          current: o,
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
Ia.displayName = "F0SegmentedBar";
const cu = ue(
  se("F0SegmentedBar", Ia)
);
function il({
  title: e,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ c(
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
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(Y, { icon: Sr, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          pe,
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
function ll({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: s } = Fr(), i = Ar(s), l = Tr(n, "PPPp", { locale: i }), o = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ c(
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
      "aria-label": `Version ${l} by ${o}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(pe, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            Se,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            pe,
            {
              lines: 1,
              className: "font-medium text-f1-foreground-secondary",
              children: o
            }
          )
        ] })
      ]
    }
  );
}
function ol({
  title: e,
  versions: n,
  currentVersion: a,
  activeVersionId: r
}) {
  return /* @__PURE__ */ c(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": e,
      children: [
        /* @__PURE__ */ t(
          pe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(ct, { className: "h-full flex-1", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            il,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((s) => /* @__PURE__ */ t(
            ll,
            {
              author: s.author,
              timestamp: s.timestamp,
              onClick: s.onClick,
              isActive: r === s.id
            },
            s.id
          ))
        ] }) })
      ]
    }
  );
}
const du = ue(
  se("F0VersionHistory", ol)
), Sa = ne(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: s }, i) => {
    const l = be.useRef(null);
    be.useImperativeHandle(
      i,
      () => l.current,
      []
    );
    const o = Kn({
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
              height: `${o.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: o.getVirtualItems().map((d) => /* @__PURE__ */ t(
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
                children: d ? s(d) : /* @__PURE__ */ t(ae, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Sa.displayName = "VirtualList";
const Tt = se("VirtualList", Sa), Fa = ({
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
  const s = new RegExp(`(${n})`, "gi"), i = e.split(s);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: i.map(
    (l, o) => l.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ t(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: l
      },
      o
    ) : l
  ) });
};
function mt(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s >= 0 && s < r.length - 1 ? r[s + 1].focus() : r.length > 0 && n?.();
}
function ht(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s > 0 ? r[s - 1].focus() : r.length > 0 && n?.();
}
const cl = ({
  entity: e,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: s,
  search: i,
  goToFirst: l,
  goToLast: o,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), p = m[0] || "", h = m.slice(1).join(" "), x = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? r(e) : a(e));
  }, v = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else y.key === "ArrowDown" ? mt(y.currentTarget, l) : y.key === "ArrowUp" && ht(y.currentTarget, o);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ c(
    "label",
    {
      "aria-label": e.name,
      className: b(
        s,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          Se,
          {
            src: e.avatar,
            firstName: p,
            lastName: h,
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
              Fa,
              {
                text: e.name,
                search: i,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          qn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: x,
            onKeyDown: v,
            className: b(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          Y,
          {
            className: "text-f1-icon-selected",
            icon: Gn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Xe = ({
  groupView: e,
  expanded: n,
  search: a,
  entity: r,
  selected: s,
  partialSelected: i,
  onSelect: l,
  onRemove: o,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: p = !1,
  showGroupIcon: h = !1,
  singleSelector: x = !1,
  disabled: v = !1,
  hiddenAvatar: y = !1
}) => {
  const [T, L] = R(!1);
  if (!e)
    return /* @__PURE__ */ t(
      cl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: s,
        onSelect: l,
        onRemove: o,
        singleSelector: x,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: y
      }
    );
  const E = (I) => {
    if (I.key === " ")
      I.preventDefault(), d(!n);
    else if (I.key === "Enter" && x)
      d(!n);
    else if (I.key === "Enter") {
      if (v) return;
      !s || i ? l(r) : s && o(r);
    } else I.key === "ArrowDown" ? mt(I.currentTarget, f) : I.key === "ArrowUp" && ht(I.currentTarget, u);
  }, D = () => {
    if (T)
      d(!n), L(!1);
    else {
      if (v || x) return;
      s ? o(r) : l(r);
    }
  };
  if (!r.subItems?.length) return null;
  const O = s || i;
  return /* @__PURE__ */ c(ae, { children: [
    /* @__PURE__ */ c("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        te,
        {
          hideLabel: !0,
          icon: n ? Lr : Rr,
          onClick: () => d(!n),
          label: n ? "Collapse" : "Expand",
          size: "sm",
          variant: "ghost",
          type: "button"
        }
      ),
      /* @__PURE__ */ c(
        "label",
        {
          "aria-label": r.name,
          onPointerDown: () => {
            L(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            h && /* @__PURE__ */ t(
              Y,
              {
                icon: Dr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Fa,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(dt, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              qn,
              {
                checked: O,
                disabled: v,
                onClick: D,
                onKeyDown: E,
                indeterminate: i,
                onPointerDown: (I) => {
                  I.stopPropagation(), L(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", x ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !p && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Xe.displayName = "EntitySelectListItem";
const bn = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? mt(i.currentTarget, a) : i.key === "ArrowUp" && ht(i.currentTarget, r);
}, children: /* @__PURE__ */ c(
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
        te,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Yn,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: b("line-clamp-1"), children: e }) }) })
    ]
  }
) }), He = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      te,
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
  })) || [], s = (l) => {
    const o = a.find((d) => d.label === l);
    o && !o.disabled && o.onClick?.();
  }, i = a.every((l) => l.disabled);
  return /* @__PURE__ */ t(
    Or,
    {
      items: r,
      value: e.label,
      disabled: i,
      onClick: s,
      variant: "outline",
      size: "sm"
    }
  );
}, dl = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: s,
  anyVisibleSelected: i,
  loading: l,
  singleSelector: o,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !o && (n || a), m = e && e.length > 0;
  if (!(!l && (!o && u || m))) return null;
  let h, x, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || s
  } : void 0, y = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !i
  } : void 0;
  return v || (v = y, y = void 0), m && u ? (h = /* @__PURE__ */ t(
    He,
    {
      primaryAction: v,
      secondaryActions: y ? [y] : []
    }
  ), x = /* @__PURE__ */ t(
    He,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? h = /* @__PURE__ */ t(
    He,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (h = /* @__PURE__ */ t(He, { primaryAction: v, secondaryActions: [] }), y && (x = /* @__PURE__ */ t(He, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ c("div", { className: "flex flex-1 justify-between p-2", children: [
    h,
    x
  ] }) });
}, ul = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: s,
  goToLast: i
}) => /* @__PURE__ */ c("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(Y, { icon: Si, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (o) => {
        o.key === "ArrowDown" ? (o.preventDefault(), o.stopPropagation(), mt(o.currentTarget, s)) : o.key === "ArrowUp" ? (o.preventDefault(), o.stopPropagation(), ht(o.currentTarget, i)) : o.key === "Enter" && (o.preventDefault(), o.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (o) => n(o.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    Y,
    {
      icon: Pr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), bt = 384, xt = 36, fl = 37, xn = 1, vn = 200, yn = '[data-avatarname-navigator-element="true"]', ml = ({
  groupView: e,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: s,
  onSelect: i,
  onRemove: l,
  onSubItemRemove: o,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: p = [],
  onGroupChange: h,
  onToggleExpand: x,
  searchPlaceholder: v,
  selectAllLabel: y,
  clearLabel: T,
  notFoundTitle: L,
  notFoundSubtitle: E,
  className: D,
  actions: O,
  onCreate: I,
  onCreateLabel: j,
  singleSelector: B = !1,
  loading: w = !1,
  disabled: S = !1,
  hiddenAvatar: A = !1
}) => {
  const k = be.useRef(null), z = Z(
    () => e ? n.reduce(
      (P, M) => P + (M.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), g = G(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, xn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(yn)
      )[0]?.focus();
    }, vn);
  }, []), N = G(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, xn), setTimeout(() => {
      const P = Array.from(
        document.querySelectorAll(yn)
      );
      P[P.length - 1]?.focus();
    }, vn);
  }, []), C = Z(
    () => new Map(p.map((P) => [P.id, P])),
    [p]
  ), F = G(
    (P) => {
      const M = C.get(P.id);
      if (!e)
        return {
          selected: !!M,
          partialSelected: !!M
        };
      const J = (P.subItems ?? []).filter(
        (V) => M?.subItems?.some(
          (ie) => ie.subId === V.subId
        )
      ), X = (P.subItems?.length ?? 0) === J.length, he = !X && J.length > 0;
      return { selected: X, partialSelected: he };
    },
    [e, C]
  ), q = G(
    (P) => {
      if (P.index === 0 && I)
        return /* @__PURE__ */ t(
          bn,
          {
            label: j ?? "",
            onCreate: () => I?.(s),
            goToFirst: g,
            goToLast: N
          }
        );
      const M = I ? P.index - 1 : P.index, J = n[M], { selected: X, partialSelected: he } = F(J);
      return /* @__PURE__ */ t(
        Xe,
        {
          expanded: J.expanded ?? !1,
          onExpand: () => x(J, !0),
          search: s,
          groupView: e,
          entity: J,
          onSelect: i,
          onRemove: l,
          selected: X,
          partialSelected: he,
          showGroupIcon: hl(a, r),
          singleSelector: B,
          goToFirst: g,
          goToLast: N,
          disabled: S,
          hiddenAvatar: A
        },
        J.id
      );
    },
    [
      I,
      j,
      S,
      n,
      F,
      g,
      N,
      e,
      a,
      A,
      l,
      i,
      x,
      s,
      r,
      B
    ]
  ), K = Z(() => e ? n.flatMap((P) => {
    const M = qe(
      p ?? [],
      P.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: P.id,
          subName: P.name,
          subAvatar: P.avatar,
          expanded: P.expanded ?? M?.expanded ?? !1,
          subItems: P.subItems,
          subSearchKeys: P.searchKeys
        }
      },
      ...(P.subItems ?? []).map((J) => ({
        parent: {
          ...P,
          expanded: P.expanded ?? M?.expanded ?? !1
        },
        subItem: J
      }))
    ];
  }).filter(
    (P) => (!P.parent || P.parent.expanded) && (!!P.parent || !!P.subItem.subItems && P.subItem.subItems.length > 0)
  ) : n.map((P) => ({
    parent: null,
    subItem: {
      subId: P.id,
      subName: P.name,
      subAvatar: P.avatar,
      subSearchKeys: P.searchKeys
    }
  })), [e, n, p]), $ = G(
    (P) => {
      if (P.index === 0 && I)
        return /* @__PURE__ */ t(
          bn,
          {
            label: j ?? "",
            onCreate: () => I?.(s),
            goToFirst: g,
            goToLast: N
          }
        );
      const M = I ? P.index - 1 : P.index, J = K[M].parent, X = K[M].subItem;
      if (!J) {
        const V = {
          id: X.subId,
          name: X.subName,
          avatar: X.subAvatar,
          subItems: X.subItems,
          expanded: X.expanded,
          searchKeys: X.subSearchKeys
        }, ie = qe(
          p,
          V.id
        ), me = (V?.subItems ?? []).filter(
          (We) => ie?.subItems?.some(
            (tr) => tr.subId === We.subId
          )
        ), Ne = (V.subItems?.length ?? 0) === me.length, er = !Ne && me.length > 0;
        return /* @__PURE__ */ t(
          Xe,
          {
            groupView: !0,
            expanded: V.expanded ?? !1,
            onExpand: (We) => x(V, We),
            search: s,
            entity: V,
            onSelect: i,
            onRemove: l,
            selected: Ne,
            partialSelected: er,
            showGroupIcon: a.find((We) => We.value === r)?.groupType === "team",
            singleSelector: B,
            goToFirst: g,
            goToLast: N,
            hideLine: M === K.length - 1,
            disabled: S,
            hiddenAvatar: A
          }
        );
      }
      let he = !!qe(p, X.subId);
      if (!he) {
        const V = qe(
          p,
          J.id
        );
        he = !!(J?.subItems ?? []).filter(
          (me) => V?.subItems?.some(
            (Ne) => Ne.subId === me.subId
          )
        ).find((me) => me.subId === X.subId);
      }
      return /* @__PURE__ */ t(
        Xe,
        {
          expanded: !1,
          onExpand: () => null,
          search: s,
          groupView: !1,
          entity: {
            id: X.subId,
            name: X.subName,
            avatar: X.subAvatar,
            searchKeys: X.subSearchKeys
          },
          onSelect: () => {
            d(J, X);
          },
          onRemove: () => o(J, X),
          selected: !!he,
          partialSelected: !1,
          singleSelector: B,
          goToFirst: g,
          goToLast: N,
          isChild: !0,
          hiddenAvatar: A
        }
      );
    },
    [
      K,
      p,
      s,
      B,
      g,
      N,
      i,
      l,
      a,
      S,
      x,
      r,
      d,
      o,
      A,
      I,
      j
    ]
  ), [oe, le] = Z(() => {
    if (!n.length)
      return [!1, !1];
    let P = 0, M = 0;
    if (!e)
      P = n.length, M = n.reduce(
        (he, { id: V }) => he + (C.has(V) ? 1 : 0),
        0
      );
    else {
      const he = new Set(
        [...C.values()].flatMap(
          (V) => V.subItems?.map((ie) => ie.subId) ?? []
        )
      );
      n.forEach((V) => {
        const ie = V.subItems ?? [];
        P += ie.length, M += ie.filter(
          (me) => he.has(me.subId)
        ).length;
      });
    }
    const J = P > 0 && M === P, X = M > 0;
    return [J, X];
  }, [n, C, e]), ye = K.length, U = !B && (y || T), ge = O && O.length > 0, fe = !w && (!B && U || ge);
  return /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        B || w ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ c(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              B || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                ul,
                {
                  search: s,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: g,
                  goToLast: N
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                nt,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: h,
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
        /* @__PURE__ */ c(
          "section",
          {
            className: b(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              fe ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(Et, {}) }),
              !w && !z && /* @__PURE__ */ c(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: bt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: L }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: E })
                  ]
                }
              ),
              !w && (!!z || I) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Tt,
                {
                  height: bt,
                  itemCount: ye + (I ? 1 : 0),
                  itemSize: (P) => {
                    if (P === 0 && I) return xt;
                    const M = I ? P - 1 : P;
                    return K[M]?.parent === null ? fl : xt;
                  },
                  renderer: $,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                Tt,
                {
                  height: bt,
                  itemCount: n.length + (I ? 1 : 0),
                  itemSize: xt,
                  renderer: q,
                  ref: k
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          dl,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: B,
            totalFilteredEntities: z,
            allVisibleSelected: oe,
            anyVisibleSelected: le,
            selectAllLabel: y,
            clearLabel: T,
            disabled: S,
            actions: O
          }
        )
      ]
    }
  );
}, qe = (e, n) => e.find((a) => a.id === n), hl = (e, n) => e.find((a) => a.value === n)?.groupType === "team", pl = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: s = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Er,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      s ? "pl-2" : "pl-0"
    ),
    left: !s && /* @__PURE__ */ t(
      Qn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: _r, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      Y,
      {
        icon: we,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), gl = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  disabled: i = !1,
  hiddenAvatar: l = !1
}) => {
  const o = Z(() => {
    const f = e ? r.flatMap(
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
  }, [e, r]), d = o.length;
  return /* @__PURE__ */ c("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: s && /* @__PURE__ */ c("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      s
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      Tt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = o[f.index];
          return u ? /* @__PURE__ */ t(
            pl,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: i,
              hiddenAvatar: l,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(ae, {});
        }
      }
    ) })
  ] });
}, bl = 500, wn = 520, Nn = 210, Cn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  width: i,
  singleSelector: l = !1,
  loading: o = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...p
}) => {
  const h = (i ?? wn) < bl, x = !o && !l && !h, v = i ?? wn, y = x ? v - Nn : v;
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: l && (!f || f.length === 0) ? "435px" : "473px",
        width: v
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ t(
              ml,
              {
                ...p,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: l,
                loading: o,
                disabled: p.disabled,
                hiddenAvatar: d,
                actions: f,
                onCreate: u,
                onCreateLabel: m
              }
            )
          }
        ),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Nn + "px"
            },
            children: /* @__PURE__ */ t(
              gl,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: s,
                disabled: p.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, xl = ({
  placeholder: e,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: s = !1,
  label: i,
  labelIcon: l,
  icon: o,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: p = !1,
  maxLength: h,
  loading: x = !1,
  required: v = !1,
  readonly: y = !1,
  append: T,
  size: L = "sm",
  open: E
}) => {
  const D = Z(
    () => a.some(
      (B) => B.subItems && B.subItems.length > 0
    ),
    [a]
  ), O = Z(() => D ? a.flatMap(
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
  })), [D, a]), I = O.length === 0 ? void 0 : O.length === 1 ? O[0].subItem.subName : O.length + " " + n, j = O.length === 1 ? O[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    zr,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: l,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: o && !I ? o : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: p,
      maxLength: h,
      clearable: !1,
      value: I,
      disabled: r,
      loading: x,
      required: v,
      readonly: y,
      size: L,
      avatar: s || !j ? void 0 : {
        type: "person",
        firstName: j,
        lastName: "",
        src: O[0].subItem.subAvatar,
        deactivated: O[0].subItem.subDeactivated
      },
      append: T ?? /* @__PURE__ */ t(ae, { children: /* @__PURE__ */ t(Br, { open: E, disabled: r, size: L }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            I && "text-f1-foreground",
            O.length === 1 && !s || o && !I ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            pe,
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
}, uu = (e) => {
  const [n, a] = R(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), e.onOpenChange?.(w);
  };
  H(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [s, i] = R(e.entities), [l, o] = R(""), [d, f] = $r("", 300), u = Z(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = Ie(Mr), h = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function x(w) {
    if (e.singleSelector) {
      e.onSelect(w), a(!1);
      return;
    }
    const S = e.selectedEntities ?? [], A = s.find((C) => C.id === w.id);
    if (!A)
      return;
    const k = new Set(
      (A.subItems ?? []).map((C) => C.subId)
    ), z = /* @__PURE__ */ new Set([A.id]);
    s.forEach((C) => {
      C.id !== A.id && (C.subItems ?? []).some(
        (q) => k.has(q.subId)
      ) && z.add(C.id);
    });
    const g = [...S];
    function N(C) {
      const F = g.findIndex((q) => q.id === C.id);
      F >= 0 ? g[F] = C : g.push(C);
    }
    z.forEach((C) => {
      const F = s.find(($) => $.id === C);
      if (!F) return;
      const q = F.subItems?.filter(
        ($) => k.has($.subId)
      ) ?? [], K = g.findIndex(($) => $.id === C);
      if (K >= 0) {
        const $ = g[K].subItems ?? [], oe = new Set($.map((ye) => ye.subId)), le = [
          ...$,
          ...q.filter((ye) => !oe.has(ye.subId))
        ];
        N({
          ...F,
          subItems: le
        });
      } else
        N({
          ...F,
          subItems: q
        });
    }), e.onSelect(g);
  }
  function v(w, S) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...S }] }), a(!1);
    else {
      const A = e.selectedEntities ?? [], k = new Set(A.map((N) => N.id)), z = new Map(
        A.map((N) => [N.id, N.subItems ?? []])
      );
      k.add(w.id), e.entities.forEach((N) => {
        N.subItems?.some(
          (F) => F.subId === S.subId
        ) && k.add(N.id);
      });
      const g = [];
      e.entities.forEach((N) => {
        if (k.has(N.id)) {
          let F = [...z.get(N.id) ?? []];
          N.subItems?.some(
            ($) => $.subId === S.subId
          ) && (F.some(
            (oe) => oe.subId === S.subId
          ) || F.push(S));
          const K = new Set(
            (N.subItems ?? []).map(($) => $.subId)
          );
          F = F.filter(
            ($) => K.has($.subId)
          ), g.push({
            ...N,
            subItems: F
          });
        }
      }), e.onSelect(g);
    }
  }
  function y(w) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let S = [];
    const A = e.selectedEntities ?? [];
    if (u) {
      const k = s.find(
        (g) => g.id === w.id
      );
      if (!k)
        return;
      const z = new Set(
        (k.subItems ?? []).map((g) => g.subId)
      );
      for (const g of A) {
        const N = (g.subItems ?? []).filter(
          (C) => !z.has(C.subId)
        );
        N.length > 0 && S.push({
          ...g,
          subItems: N
        });
      }
    } else
      S = (A ?? []).filter((k) => k.id !== w.id);
    e.onSelect(S);
  }
  function T(w, S) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const A = e.selectedEntities ?? [], k = S.subId, z = [];
    for (const g of A) {
      const N = g.subItems?.filter((C) => C.subId !== k) ?? [];
      N.length > 0 && z.push({
        ...g,
        subItems: N
      });
    }
    e.onSelect(z);
  }
  function L() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let S = [];
    if (u) {
      const A = new Set(
        s.flatMap(
          (k) => (k.subItems ?? []).map((z) => z.subId)
        )
      );
      for (const k of w) {
        const z = (k.subItems ?? []).filter(
          (g) => !A.has(g.subId)
        );
        z.length > 0 && S.push({
          ...k,
          subItems: z
        });
      }
    } else {
      const A = new Set(
        s.map((k) => k.id)
      );
      S = (w ?? []).filter((k) => !A.has(k.id));
    }
    e.onSelect(S);
  }
  function E() {
    const w = [...e.selectedEntities ?? []];
    s.forEach((S) => {
      const A = w.find((k) => k.id === S.id);
      if (!A)
        w.push({
          ...S,
          subItems: S.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...A.subItems ?? [],
            ...S.subItems ?? []
          ])
        );
        A.subItems = k;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const D = (w) => {
    o(w), f(w);
  }, O = (w, S) => {
    e.onItemExpandedChange(w.id, S), i(
      s.map(
        (A) => A.id === w.id ? { ...A, expanded: !w.expanded } : A
      )
    );
  };
  H(() => {
    if (!d) {
      i(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const S = e.entities.map((A) => {
        const k = vl(A, d), z = A.subItems?.map((g) => ({
          ...g,
          score: st(
            d,
            g.subSearchKeys ?? [g.subName]
          )
        })).filter((g) => g.score < 1 / 0).sort((g, N) => g.score - N.score);
        return {
          ...A,
          score: k,
          expanded: A.expanded ?? (z?.length ?? 0) > 0,
          subItems: z
        };
      }).filter((A) => A.score < 1 / 0).sort((A, k) => A.score - k.score);
      i(S);
    } else {
      const w = e.entities.map((S) => {
        const A = st(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: A };
      }).filter((S) => S.score < 1 / 0).sort((S, A) => S.score - A.score);
      i(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    i
  ]);
  const I = _(null), [j, B] = R(0);
  return at(() => {
    const w = () => {
      I.current && B(I.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: I,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Cn,
        {
          groupView: u,
          entities: s,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: x,
          onRemove: y,
          onSubItemRemove: T,
          onSubItemSelect: v,
          onClear: L,
          onSelectAll: E,
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
          width: e.width ?? j - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ c(Jn, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      Xn,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          xl,
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
      Zn,
      {
        container: h,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Cn,
          {
            groupView: u,
            entities: s,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: x,
            onRemove: y,
            onSubItemRemove: T,
            onSubItemSelect: v,
            onClear: L,
            onSelectAll: E,
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
function Lt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function kn(e) {
  return Lt(e).split(/\s+/).filter((n) => n.length > 0);
}
function st(e = "", n) {
  const a = kn(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const s = Lt(r), i = kn(r), l = Lt(e);
    if (s.includes(l) || a.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function vl(e, n) {
  const a = st(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((s, i) => {
    const l = st(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(s, l);
  }, 1 / 0)), Math.min(a, r);
}
const yl = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: s,
  category: i,
  isUnread: l = !1,
  onClick: o,
  onVisible: d
}) => {
  const { ref: f } = kt({
    threshold: 0.1,
    onChange(p) {
      p && d?.(e);
    }
  }), u = ea(n, {
    yesterdayRelative: !1
  });
  return /* @__PURE__ */ c(
    "div",
    {
      ref: f,
      className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
      onClick: () => {
        o(e);
      },
      children: [
        /* @__PURE__ */ t(It, { icon: s ?? ta }),
        /* @__PURE__ */ c("div", { className: "flex-1", children: [
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${i} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: l && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, wl = () => /* @__PURE__ */ c("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(W, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ c("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(W, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(W, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(W, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(W, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Yt = se(
  "ActivityItem",
  de(yl, wl)
), Aa = ({
  title: e,
  children: n
}) => /* @__PURE__ */ c("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Nl = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Aa, { title: e, children: n.map((s) => /* @__PURE__ */ t(
  Yt,
  {
    ...s,
    onClick: () => a(s.id),
    onVisible: r
  },
  s.id
)) }), Cl = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Aa, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(Yt.Skeleton, {}, r)) }), Ze = de(Nl, Cl), kl = 3, Il = ["today", "yesterday", "lastWeek", "lastMonth"], Sl = (e) => Ur(e, ([n]) => {
  const a = Il.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), Rt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Fl = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: s = 5
}) => {
  const i = Q(), l = jr(e, "createdAt"), o = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-s), d = Wr((u) => {
    o.includes(u) && r?.();
  }, 1e3), f = Sl(
    Object.entries(l).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ c(be.Fragment, { children: [
      /* @__PURE__ */ t(
        Ze,
        {
          title: u in i.date.groups ? i.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ t(Rt, {})
    ] }, u)),
    n && new Array(kl).fill(null).map((u, m) => /* @__PURE__ */ t(Yt.Skeleton, {}, m))
  ] });
}, Al = () => {
  const e = Q();
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Ze.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Rt, {}),
    /* @__PURE__ */ t(
      Ze.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Rt, {}),
    /* @__PURE__ */ t(
      Ze.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, fu = se(
  "ActivityItemList",
  de(Fl, Al)
), Tl = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Ll = {
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
function Rl({
  firstName: e,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: s,
  onReactionSelect: i,
  pickerRef: l
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Ll[na(
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
        /* @__PURE__ */ t("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ c("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ t(
                Se,
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
                ut,
                {
                  lastEmojiReaction: s,
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
function Dl(e) {
  const n = _(null), a = _(), r = G(() => {
    const i = n.current;
    if (!i) return;
    const l = Hr.create(i, {
      resize: !0,
      useWorker: !1
    }), o = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
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
          o[Math.floor(Math.random() * o.length)]
        ]
      });
    }, 100);
  }, [e]), s = G(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: s };
}
const Ol = ({
  link: e,
  firstName: n,
  lastName: a,
  src: r,
  onClick: s,
  canReact: i = !0,
  lastEmojiReaction: l,
  onReactionSelect: o,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = R(l), h = _(null);
  H(() => {
    p(l);
  }, [l]);
  const x = (D) => {
    p(D), o?.(D);
  }, v = Te(), { canvasRef: y, handleMouseEnter: T, handleMouseLeave: L } = Dl(v), E = Me({
    emoji: Tl[d],
    size: "sm"
  });
  return /* @__PURE__ */ c(
    Pe,
    {
      href: e,
      onClick: s,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ce()
      ),
      onMouseEnter: v ? void 0 : T,
      onMouseLeave: v ? void 0 : L,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Rl,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: i,
            lastEmojiReaction: m,
            onReactionSelect: x,
            pickerRef: h
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ c("div", { className: "truncate font-medium text-f1-foreground", children: [
              n,
              " ",
              a
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: E })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(St, { date: u }) })
        ] })
      ]
    }
  );
}, Pl = () => /* @__PURE__ */ c(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(W, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(W, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(W, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), mu = de(Ol, Pl), hu = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ c("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ c("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(aa, { module: "kudos", size: "md" }),
    /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(te, { label: a, variant: "outline", onClick: r }) })
] });
function Ta({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: s
}) {
  const [i, l] = R(a), [o, d] = R(n), f = _(null), { fireEmojiConfetti: u } = Vr(), m = (x, v) => {
    x.stopPropagation(), d(o + (i ? -1 : 1)), l(!i), s?.(v), i || u(v, f);
  }, p = r?.map((x) => x.name).join(", ") || "", h = /* @__PURE__ */ t(
    zt,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (x) => {
        m(x, e);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Gr(e),
      prepend: /* @__PURE__ */ t(Me, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        Kr,
        {
          value: o,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: b(
            "tabular-nums",
            i ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return p ? /* @__PURE__ */ t(Ae, { label: p, children: h }) : h;
}
function El({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      te,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(ut, { onSelect: n, locale: a }),
    e.map((s) => /* @__PURE__ */ t(
      Ta,
      {
        emoji: s.emoji,
        initialCount: s.initialCount,
        hasReacted: s.hasReacted,
        users: s.users,
        onInteraction: n
      },
      s.emoji
    ))
  ] });
}
const _l = se("Reactions", El), La = ne(function({ content: n, collapsed: a, id: r, className: s, tabIndex: i }, l) {
  return /* @__PURE__ */ t(
    qr,
    {
      ref: l,
      id: r,
      content: n,
      tabIndex: i,
      className: b(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        s
      )
    }
  );
});
La.displayName = "BasePostDescription";
const zl = () => /* @__PURE__ */ c("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(W, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(W, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Ra = de(
  La,
  zl
), In = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        $e,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ t(
        Ae,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), Dt = ne(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: s,
    color: i,
    isPending: l,
    leftTags: o,
    rightTags: d,
    fromDate: f,
    toDate: u,
    noBackground: m
  }, p) {
    return /* @__PURE__ */ c(
      "div",
      {
        ref: p,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
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
          /* @__PURE__ */ c("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!n && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ c("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
              ] }),
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ c(ae, { children: [
                  /* @__PURE__ */ t(St, { date: f }),
                  /* @__PURE__ */ t(
                    Y,
                    {
                      icon: ot,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(St, { date: u })
              ] })
            ] }),
            (o || d) && /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between", children: [
              o && /* @__PURE__ */ t(In, { tags: o }),
              d && /* @__PURE__ */ t(In, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Bl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Da = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Bl.has(a);
}, $l = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let s = Yr(r);
  const i = (l) => {
    l.stopPropagation();
  };
  return a && (s = `${s} · ${a}`), /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Da(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ c(ae, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(W, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Dt,
      {
        title: e,
        description: s,
        color: Qr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Ml = () => /* @__PURE__ */ c(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(W, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ c("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(W, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ c("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(W, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(W, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Oa = de($l, Ml), jl = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const s = Q();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ce()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": a,
      onClick: r,
      children: s.actions.seeMore
    }
  ) });
}, Wl = ({
  id: e,
  author: n,
  group: a,
  createdAt: r,
  title: s,
  description: i,
  onClick: l,
  mediaUrl: o,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: p,
  actions: h,
  dropdownItems: x,
  noReactionsButton: v = !1,
  descriptionExpandable: y = !1
}) => {
  const T = At(), L = At(), E = _(null), [D, O] = R(null), [I, j] = R(!1), B = [f.views, f.comments].filter(Boolean).join(" · "), w = y && D?.id === e && D.description === i, S = !w, A = ea(r), k = () => {
    l(e);
  }, z = (C) => {
    C.stopPropagation();
  }, g = n ? `${n.firstName} ${n.lastName}` : void 0, N = (C) => {
    C.preventDefault(), C.stopPropagation(), i && O({ id: e, description: i });
  };
  return H(() => {
    w && E.current?.focus();
  }, [w]), H(() => {
    y || O(null);
  }, [y]), H(() => {
    const C = E.current;
    if (!y || !C || w) {
      j(!1);
      return;
    }
    const F = () => {
      j(
        C.scrollHeight > C.clientHeight
      );
    };
    if (F(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(F);
    return q.observe(C), () => q.disconnect();
  }, [y, w, i]), /* @__PURE__ */ c(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: k,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Ke,
          {
            href: n.url || "#",
            title: g,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              Se,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(It, { icon: nn }) }),
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ c(ae, { children: [
                  /* @__PURE__ */ t(
                    Ke,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: g,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        Se,
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
                    Ke,
                    {
                      href: n.url,
                      title: g,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: g
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(It, { icon: nn, size: "sm" }) }),
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
                  Ke,
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
              /* @__PURE__ */ c("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ c("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  h?.map((C) => /* @__PURE__ */ t(
                    te,
                    {
                      hideLabel: !C.label,
                      ...C.icon && { icon: C.icon },
                      variant: "outline",
                      size: "md",
                      onClick: C.onClick,
                      label: C.label ?? "",
                      title: C.label ?? ""
                    },
                    C.label
                  )),
                  x?.length && /* @__PURE__ */ t(
                    Be,
                    {
                      items: x,
                      icon: Ft,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Be,
                  {
                    items: [
                      {
                        label: p.label,
                        onClick: p.onClick
                      },
                      ...x ?? []
                    ],
                    icon: Ft,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: A }),
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: T,
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: s
                }
              ),
              i && /* @__PURE__ */ c(ae, { children: [
                /* @__PURE__ */ t(
                  Ra,
                  {
                    ref: E,
                    id: L,
                    content: i,
                    collapsed: S,
                    tabIndex: w ? -1 : void 0,
                    className: b(w && ce())
                  }
                ),
                y && I && !w && /* @__PURE__ */ t(
                  jl,
                  {
                    describedBy: T,
                    controls: L,
                    expanded: w,
                    onClick: N
                  }
                )
              ] })
            ] })
          ] }),
          o && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Da(o) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: z,
              children: /* @__PURE__ */ t("source", { src: o })
            }
          ) : /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: o,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(W, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Oa, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: B }),
          !v && /* @__PURE__ */ t(
            _l,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: Jr
              }
            }
          )
        ] })
      ]
    }
  );
}, Ul = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ c("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(W, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ c("div", { className: "w-full", children: [
    /* @__PURE__ */ c("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(W, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(W, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(W, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(W, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Ra.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(W, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Oa.Skeleton, {}) }),
    /* @__PURE__ */ c("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(W, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(W, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), pu = de(
  Wl,
  Ul
), Pa = be.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const s = () => {
    n();
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      className: b(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: s,
      children: [
        /* @__PURE__ */ t(
          Se,
          {
            firstName: e.firstName,
            lastName: e.lastName,
            src: e.avatarUrl,
            badge: e.avatarBadge
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row items-center gap-1", children: [
            /* @__PURE__ */ t("span", { className: "truncate font-medium", children: `${e.firstName} ${e.lastName}` }),
            a.info && /* @__PURE__ */ t(Ae, { label: a.info, children: /* @__PURE__ */ t(
              Y,
              {
                icon: Vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, l) => /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t($e, { ...i }, i.text),
            l < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(Xr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              te,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              te,
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
}), Hl = () => /* @__PURE__ */ c("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(W, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(W, { className: "h-4" }),
    /* @__PURE__ */ t(W, { className: "h-4" })
  ] })
] });
Pa.displayName = "OnePersonListItem";
const gu = ue(
  se(
    "OnePersonListItem",
    de(Pa, Hl)
  )
), Sn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Vl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  return /* @__PURE__ */ t(_i, { children: /* @__PURE__ */ t(
    Gl,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function Gl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  const i = r?.enabled ? Zr : s?.enabled ? nl : ai, l = r?.enabled ? r : s?.enabled ? s : void 0;
  return /* @__PURE__ */ t(i, { ...l, children: /* @__PURE__ */ t(
    Ql,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const bu = se(
  "ApplicationFrame",
  Vl
), Kl = ({ contentId: e }) => {
  const n = Q();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: ce(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function ql(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Yl(e, n) {
  const { sidebarState: a, toggleSidebar: r } = je(), s = _(e);
  H(() => {
    n && ql(
      e,
      s.current,
      a
    ) && r({ isInvokedByUser: !1 }), s.current = e;
  }, [e, n, a, r]);
}
function Ql({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: s
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: o, setForceFloat: d } = je(), f = Te(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: h,
    closeCanvas: x,
    chatWidth: v,
    resizable: y,
    panelSide: T
  } = es(), L = m === "fullscreen", E = m === "canvas", { open: D } = ft(), O = y ? v : ts, I = T === "left", j = _(L), B = L && !j.current, w = !L && j.current, [
    S,
    A
  ] = R(!1);
  H(() => {
    !L && j.current && A(!0), j.current = L;
  }, [L]);
  const k = L || S || w, z = Z(() => B ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [B, w]), g = Ct(
    `(max-width: ${et.xl}px)`,
    { initializeWithValue: !0 }
  ), N = Ct(`(max-width: ${et.md}px)`, {
    initializeWithValue: !0
  }), C = u && !I;
  return H(() => {
    d(C);
  }, [C, d]), H(() => {
    d(D);
  }, [D, d]), Yl(C, g), /* @__PURE__ */ t(
    oi,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ c("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: s }),
        /* @__PURE__ */ t(ra, { id: "ai-chat-group", children: /* @__PURE__ */ c("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ce, { children: i === "unlocked" && /* @__PURE__ */ t(
            ee.nav,
            {
              className: b(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !o && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: f ? 0 : 0.2 },
              onClick: () => l()
            }
          ) }),
          /* @__PURE__ */ c(
            "div",
            {
              className: b(
                i !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                i === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (F) => {
                i === "hidden" ? F?.setAttribute("inert", "") : F?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Kl, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ c(
            ee.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N && !I ? O : 0,
                paddingLeft: u && !N && I ? O : 0
              },
              transition: {
                paddingRight: Sn,
                paddingLeft: Sn
              },
              children: [
                /* @__PURE__ */ t(
                  ee.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      k ? "overflow-hidden" : "overflow-auto",
                      !u && !D && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ t(
                      ee.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          k ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                e?.enabled && E && p && /* @__PURE__ */ t(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's seam-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex",
                      // Canvas sits opposite the panel, hugging the seam between
                      // them: panel-right -> canvas on the left, and vice versa.
                      I ? "justify-start" : "justify-end",
                      N ? "fixed inset-0 z-[50]" : b(
                        "absolute bottom-0 top-0 z-[21]",
                        I ? "right-0" : "left-0"
                      )
                    ),
                    style: N ? void 0 : I ? { left: O } : { right: O },
                    children: /* @__PURE__ */ t(
                      ns,
                      {
                        content: p,
                        onClose: x,
                        entities: h,
                        side: I ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  ee.div,
                  {
                    className: b(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      N ? "fixed inset-0 z-[30]" : b(
                        "absolute top-0 bottom-0",
                        I ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        k || E ? "z-20" : "z-0",
                        i === "hidden" && k ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || L ? "100%" : O
                    },
                    transition: z,
                    onAnimationComplete: () => {
                      S && A(!1);
                    },
                    children: /* @__PURE__ */ t(as, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(tl, {})
        ] }) })
      ] })
    }
  );
}
const Ea = ({
  firstName: e,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": s,
  pulse: i,
  onPulseClick: l
}) => {
  const o = Q(), [d, f] = R(!i);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ce, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
    ee.div,
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
        ee.div,
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
          children: /* @__PURE__ */ t(Me, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ c(
    ee.div,
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
          Qn,
          {
            type: "rounded",
            name: [e, n],
            src: a,
            size: "lg",
            color: "random",
            "aria-label": r,
            "aria-labelledby": s
          }
        ),
        i ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          zt,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), l();
            },
            "aria-label": o.actions.edit,
            children: /* @__PURE__ */ t(
              Y,
              {
                icon: di[i],
                color: ci[i],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          ee.div,
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
              re,
              {
                compact: !0,
                label: o.actions.add,
                variant: "neutral",
                size: "sm",
                icon: rs,
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
Ea.displayName = "PulseAvatar";
const Jl = Fe({
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
function _a({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: l } = je();
  return /* @__PURE__ */ c(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: Jl({ period: a }) }),
        n && /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ c("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || s === "hidden") && /* @__PURE__ */ t(
              te,
              {
                variant: "ghost",
                onClick: () => i(),
                label: "Open main menu",
                icon: Wn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ c(
              "div",
              {
                className: b(
                  "flex flex-row items-center",
                  l ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    Ea,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    Se,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: l ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
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
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ t(Un, {}),
            /* @__PURE__ */ t(ya, {})
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
_a.displayName = "DaytimePage";
const xu = ue(
  se("DaytimePage", _a)
);
function Xl(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: s, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: s ? () => s(void 0) : void 0
  }));
}
function Zl({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Be, { items: Xl(n), children: /* @__PURE__ */ c(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ce()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(Y, { icon: sa, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const vu = ue(
  se("OmniButton", Zl)
);
function za({ children: e, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ c(
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
za.displayName = "Page";
const yu = ue(se("Page", za)), eo = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), Ba = Le(null), $a = Le(null), Fn = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), Ye = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), wu = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, s] = R(n), [i, l] = R(
    a
  ), o = Z(
    () => ({
      setGroups: s,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, u) => s((m) => m.some(
        (h) => h.chats.some((x) => x.id === u.id)
      ) ? Ye(
        m,
        (h) => h.map((x) => x.id === u.id ? { ...x, ...u } : x)
      ) : Fn(m, f, (h) => ({
        ...h,
        chats: [...h.chats, u]
      }))),
      updateChat: (f, u) => s(
        (m) => Ye(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, ...u } : h)
        )
      ),
      removeChat: (f) => s(
        (u) => Ye(u, (m) => m.filter((p) => p.id !== f))
      ),
      setUnread: (f, u) => s(
        (m) => Ye(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, unreadCount: u } : h)
        )
      ),
      reorder: (f, u) => s(
        (m) => Fn(m, f, (p) => {
          const h = new Map(p.chats.map((y) => [y.id, y])), x = u.map((y) => h.get(y)).filter((y) => !!y), v = p.chats.filter((y) => !u.includes(y.id));
          return { ...p, chats: [...x, ...v] };
        })
      )
    }),
    []
  ), d = Z(
    () => ({
      groups: r,
      activeChatId: i,
      unreadChatsCount: eo(r)
    }),
    [r, i]
  );
  return /* @__PURE__ */ t($a.Provider, { value: o, children: /* @__PURE__ */ t(Ba.Provider, { value: d, children: e }) });
}, to = () => {
  const e = Ie(Ba);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Ma = () => {
  const e = Ie($a);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, no = () => {
  const e = to(), n = Ma();
  return Z(() => ({ ...e, ...n }), [e, n]);
}, Nu = () => Ma(), Qt = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: s,
  highlightWhenCollapsed: i,
  collapsedBadge: l,
  isDragging: o,
  wasDragging: d
}) => {
  const [f, u] = R(n), m = Te(), p = i && !f, h = () => {
    if (o || d?.current) return;
    const x = !f;
    u(x), r?.(x);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ c(ss, { open: f, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ c(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ce("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: h,
        tabIndex: 0,
        onKeyDown: (x) => {
          (x.key === "Enter" || x.key === " ") && h();
        },
        children: [
          /* @__PURE__ */ t(
            "span",
            {
              className: b(
                "transition-colors py-0.5",
                p && "font-[900] text-f1-foreground"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ t(
            ee.div,
            {
              initial: !1,
              animate: { rotate: f ? 0 : -90 },
              transition: { duration: m ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(Y, { icon: Bt, size: "xs" })
            }
          ),
          !f && l && /* @__PURE__ */ t("span", { className: "ml-auto", children: l })
        ]
      }
    ) }),
    /* @__PURE__ */ t(is, { forceMount: !0, className: "flex flex-col gap-1 mt-0.5", children: /* @__PURE__ */ t(
      ee.div,
      {
        initial: !1,
        animate: {
          height: f ? "auto" : 0,
          opacity: f ? 1 : 0,
          visibility: f ? "visible" : "hidden"
        },
        transition: {
          duration: m ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: s })
      }
    ) })
  ] }) });
}, ja = ({
  className: e
}) => /* @__PURE__ */ c(
  "div",
  {
    "aria-hidden": "true",
    className: b("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(W, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(W, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), ao = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(W, { className: "h-3 w-24 rounded" }) }), ro = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((a, r) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(ao, {}),
      Array.from({ length: n }).map((s, i) => /* @__PURE__ */ t(ja, {}, i))
    ] }, r))
  }
), Wa = ({ count: e }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-label": `${e} unread`,
    className: "flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info",
    children: e > 99 ? "+99" : e
  }
), so = () => /* @__PURE__ */ t(
  "span",
  {
    className: "flex items-center gap-0.5 w-5 h-5 justify-center",
    "aria-hidden": "true",
    children: [0, 1, 2].map((e) => /* @__PURE__ */ t(
      "span",
      {
        className: "size-1 animate-bounce rounded-full bg-f1-foreground-secondary",
        style: { animationDelay: `${e * 120}ms` }
      },
      e
    ))
  }
), io = ({
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
) }), lo = ({
  chat: e,
  isActive: n,
  onClick: a
}) => {
  if (e.loading)
    return /* @__PURE__ */ t(ja, {});
  const r = !!e.unreadCount, s = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), i = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      onClick: a,
      "aria-pressed": n,
      className: b(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        ce("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        e.typing ? /* @__PURE__ */ t(so, {}) : /* @__PURE__ */ c("div", { className: "relative flex flex-shrink-0 items-center", children: [
          e.avatar.type === "emoji" ? (
            // Emoji groups show the glyph alone (no avatar chrome) so it isn't
            // shrunk inside the bordered avatar box.
            /* @__PURE__ */ t("span", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
          ) : /* @__PURE__ */ t(Ve, { size: "xs", avatar: e.avatar }),
          s && /* @__PURE__ */ t(io, { presence: s, isActive: n })
        ] }),
        /* @__PURE__ */ t(
          pe,
          {
            tag: "span",
            className: b(
              "line-clamp-1 flex-1 py-0.5",
              r ? "text-f1-foreground font-semibold" : "text-f1-foreground-secondary font-medium"
            ),
            lines: 1,
            children: e.label
          }
        ),
        (i || e.unreadCount) && /* @__PURE__ */ c("div", { className: "gap-1 flex items-center justify-center", children: [
          i && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            ls,
            {
              icon: i.icon,
              size: "sm",
              "aria-label": i.label,
              color: "default"
            }
          ) }),
          e.unreadCount && /* @__PURE__ */ t(Wa, { count: e.unreadCount })
        ] })
      ]
    }
  );
}, oo = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a conversation — the synergy won't build itself."
}, co = ({ action: e }) => /* @__PURE__ */ c(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: b(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      ce("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(Y, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), Cu = ({
  actions: e = [],
  emptyState: n,
  loading: a = !1
}) => {
  const { groups: r, activeChatId: s, setActiveChat: i } = no(), l = Te(), o = r.some((u) => u.chats.length > 0), d = { ...oo, ...n }, f = a && !o;
  return /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-4 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((u) => /* @__PURE__ */ t(co, { action: u }, u.label)) }),
    f && /* @__PURE__ */ t(ro, {}),
    !f && !o && /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl", role: "img", "aria-hidden": "true", children: d.emoji }),
      /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: d.title }),
      /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: d.description })
    ] }),
    !f && r.map((u) => {
      const m = u.chats.reduce(
        (p, h) => p + (h.unreadCount ?? 0),
        0
      );
      return /* @__PURE__ */ t(
        Qt,
        {
          title: u.title,
          isOpen: u.isOpen,
          highlightWhenCollapsed: m > 0,
          collapsedBadge: m > 0 ? /* @__PURE__ */ t(Wa, { count: m }) : void 0,
          children: /* @__PURE__ */ t(Ce, { initial: !1, children: u.chats.map((p) => /* @__PURE__ */ t(
            ee.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: l ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                lo,
                {
                  chat: p,
                  isActive: p.id === s,
                  onClick: () => {
                    i(p.id), p.onClick?.();
                  }
                }
              )
            },
            p.id
          )) })
        },
        u.id
      );
    })
  ] });
};
function uo({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: s = !1,
  additionalOptions: i = []
}) {
  const l = Z(
    () => e.find((o) => o.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ c("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(W, { className: "size-6" }),
    /* @__PURE__ */ t(W, { className: "h-3 w-14" })
  ] }) : e.length + (i?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    An,
    {
      company: l,
      withNotification: s
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    fo,
    {
      companies: e,
      selected: l,
      onChange: a,
      additionalOptions: i,
      children: /* @__PURE__ */ t(
        An,
        {
          company: l,
          withNotification: s
        }
      )
    }
  ) });
}
const fo = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: s = []
}) => {
  const i = Q(), [l, o] = R(!1), d = Z(
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
      ...s.length ? [{ type: "separator" }] : [],
      ...s
    ],
    [e, s]
  ), f = (u) => {
    const m = s?.find((p) => p.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ t(
    nt,
    {
      label: i.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: i.navigation.sidebar.companySelector.placeholder,
      open: l,
      onOpenChange: o,
      children: /* @__PURE__ */ c(
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
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              ee.div,
              {
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(Y, { icon: Bt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, An = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ c(
  "div",
  {
    className: b(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        os,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: ia, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(pe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function ku({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: s,
  onDropdownClick: i,
  hasActivityUpdates: l
}) {
  const o = Q();
  return /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Be, { items: n, children: /* @__PURE__ */ c(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ce("focus-visible:ring-inset")
        ),
        onClick: i,
        children: [
          /* @__PURE__ */ t(
            Se,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(pe, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ t(Ae, { label: o.notifications, shortcut: r, children: /* @__PURE__ */ c("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        te,
        {
          icon: ta,
          label: o.notifications,
          onClick: s,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(cs, { type: "highlight", size: "sm", icon: ia }) })
    ] }) })
  ] });
}
function mo({ isExpanded: e }) {
  return /* @__PURE__ */ c(
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
function ho() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = je(), s = _(null);
  return H(() => {
    e === "hidden" && n === "locked" && s.current?.focus();
  }, [e, n]), /* @__PURE__ */ c(
    zt,
    {
      variant: "ghost",
      size: "md",
      onClick: () => a(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: s,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ t(mo, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ t(Y, { icon: we, size: "md" }) })
      ]
    }
  );
}
function Iu({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: s,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ c("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      uo,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: s
      }
    ),
    /* @__PURE__ */ t(ho, {})
  ] });
}
function po() {
  const [e, n] = R(!1);
  return H(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Ua = Le(void 0);
function go({ children: e }) {
  const [n, a] = R(!1), [r, s] = R(null);
  return /* @__PURE__ */ t(
    Ua.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function Jt() {
  const e = Ie(Ua);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const bo = ({
  item: e,
  active: n
}) => /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      Y,
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
  (e.tag || e.badge) && /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-1.5", children: [
    e.tag && /* @__PURE__ */ t($e, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(dt, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), xo = ({ item: e }) => {
  const { isActive: n } = Pt(), { label: a, icon: r, ...s } = e, i = n(s.href, { exact: s.exactMatch });
  return /* @__PURE__ */ t(
    Pe,
    {
      ...s,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ce("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(bo, { item: e, active: i })
    }
  );
}, vo = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: s,
  total: i,
  onMove: l,
  onReorderFinish: o,
  isSortable: d = !0
}) => {
  const f = Q(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Jt(), { isActive: x } = Pt(), v = x(e.href, { exact: e.exactMatch }), y = _(!1), [T, L] = R(!1), E = s === 0, D = s === i - 1, O = i === 1, I = Z(() => {
    const k = [];
    return !O && !E && k.push({
      label: f.actions.moveUp,
      onClick: () => l?.(s, s - 1),
      icon: ds
    }), !O && !D && k.push({
      label: f.actions.moveDown,
      onClick: () => l?.(s, s + 1),
      icon: us
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: la,
      critical: !0
    }), k;
  }, [O, E, D, f, l, s, r, e]), j = () => {
    m(!0), L(!1), h(e.href || null), y.current = !0;
  }, B = () => {
    m(!1), h(null), o(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && p === e.href, S = Z(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      T && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [v, T, w, d]
  ), A = Z(() => /* @__PURE__ */ c(ae, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(wo, { tooltip: n, children: /* @__PURE__ */ c(
      Pe,
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
            Y,
            {
              icon: e.icon,
              size: "md",
              className: b(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ve, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            pe,
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
          T && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: T,
            onOpenChange: L,
            items: I,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Y, { icon: Ft, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, T, w, I, n]);
  return d ? /* @__PURE__ */ t(
    pa,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: j,
      onDragEnd: B,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: A
    }
  ) : /* @__PURE__ */ t("div", { className: S, children: A });
}, vt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: s,
  currentOrder: i
}) => {
  const { isDragging: l, setIsDragging: o } = Jt(), d = _(!1), f = ui(), u = () => {
    o(!0), d.current = !0;
  }, m = () => {
    o(!1), setTimeout(() => {
      d.current = !1, i && s?.(i);
    }, 0);
  }, p = (x) => {
    !l && !d.current && r?.(e, x);
  }, h = /* @__PURE__ */ t(
    Qt,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: p,
      isDragging: l,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: b(
            "flex flex-col gap-0.5",
            l && !d.current && "pointer-events-none"
          ),
          children: e.items.map((x, v) => /* @__PURE__ */ t(xo, { item: x }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    pa,
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
      children: h
    }
  ) : h;
};
function Su({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: s
}) {
  const i = _(null), l = e.filter(
    (x) => x.isSortable === !1
  ), [o, d] = R(
    e.filter((x) => x.isSortable !== !1)
  ), [f, u] = R(0), m = G((x) => {
    d(x);
  }, []), p = G(
    (x) => {
      a?.(x);
    },
    [a]
  ), h = po();
  return /* @__PURE__ */ t(go, { children: /* @__PURE__ */ t(ra, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    yo,
    {
      disableDragging: h,
      nonSortableItems: l,
      sortableItems: o,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: p,
      favorites: s,
      onFavoritesChange: r,
      forceUpdate: () => u((x) => x + 1)
    },
    f
  ) }) });
}
function yo({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: s,
  onDragEnd: i,
  favorites: l = [],
  onFavoritesChange: o,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = Q(), { isDragging: m } = Jt(), p = e.some((g) => g.isRoot), h = e.filter((g) => !g.isRoot).length > 0, x = n.length > 0, v = _(null), [y, T] = R(l), L = l.length > 0;
  H(() => {
    JSON.stringify(l) !== JSON.stringify(y) && T(l);
  }, [l]);
  const E = (g) => {
    T(g);
  }, D = G(
    (g) => {
      const N = y.filter((C) => C.href !== g.href);
      T(N), o?.(N);
    },
    [y, o]
  ), O = G(
    (g, N) => {
      if (N < 0 || N >= y.length) return;
      const C = [...y], [F] = C.splice(g, 1);
      C.splice(N, 0, F), T(C), o?.(C);
    },
    [y, o]
  ), [I, j] = R(!1), B = _(null);
  H(() => {
    n.length > 0 && !I && (a([...n]), j(!0));
  }, [n, a, I]), H(() => {
    const g = () => {
      B.current !== null && window.clearTimeout(B.current), B.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g), B.current !== null && window.clearTimeout(B.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", S = Z(
    () => y.reduce(
      (g, N, C) => (N.label in g || (g[N.label] = []), g[N.label].push(C), g),
      {}
    ),
    [y]
  ), A = Z(
    () => L && y.map((g, N) => /* @__PURE__ */ t(
      vo,
      {
        isSortable: !f,
        tooltip: (S[g.label] ?? []).length > 1 ? g.tooltip : void 0,
        item: g,
        dragConstraints: v,
        onRemove: D,
        index: N,
        total: y.length,
        onMove: O,
        onReorderFinish: () => {
          o?.(y);
        }
      },
      `${g.href}-${g.label}`
    )),
    [
      L,
      y,
      S,
      D,
      O,
      o,
      f
    ]
  ), k = "flex flex-col gap-3", z = Z(() => n.map((g) => /* @__PURE__ */ t(
    vt,
    {
      category: g,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: s,
      onDragEnd: i,
      currentOrder: n
    },
    g.id
  )), [n, f, r, s, i]);
  return /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((g) => g.isRoot).map((g, N) => /* @__PURE__ */ t(
          vt,
          {
            category: g,
            onCollapse: s
          },
          `fixed-${N}`
        )) }),
        L && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Qt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: w, children: A }) : /* @__PURE__ */ t(
          on,
          {
            axis: "y",
            values: y,
            onReorder: E,
            className: w,
            children: A
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((g) => !g.isRoot).map((g, N) => /* @__PURE__ */ t(
          vt,
          {
            category: g,
            onCollapse: s
          },
          `fixed-${N}`
        )) }),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: k, children: z }) : /* @__PURE__ */ t(
              on,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: k,
                children: z
              }
            )
          }
        )
      ]
    }
  );
}
const wo = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(Ae, { description: e, children: n }) : n;
function Fu({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ c(
    "button",
    {
      onClick: e,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ce()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(Y, { icon: $t, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(fs, { keys: a }) })
      ]
    }
  ) });
}
const Tn = ({ position: e }) => /* @__PURE__ */ t(
  ee.div,
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
function No({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: s, isSmallScreen: i } = je(), l = Te(), [o, d] = kt({ threshold: 1 }), [f, u] = kt({ threshold: 1 }), m = Q(), p = {
    x: {
      ease: s !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : s !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, h = () => a ? ri(a) && r ? ma(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ c(
    ee.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: b(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        s === "locked" ? "h-full" : b(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          i ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: s === "locked" || i ? 0 : "8px",
        borderRadius: s === "locked" || i ? "0" : "12px",
        left: s === "locked" ? "0" : i ? 0 : "8px",
        x: s === "hidden" ? -260 : 0,
        opacity: s === "hidden" ? i ? 0.7 : 0 : 1,
        pointerEvents: s === "hidden" ? "none" : "auto"
      },
      transition: p,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ c("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ c(ct, { className: "h-full", children: [
            /* @__PURE__ */ t(
              "div",
              {
                ref: o,
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
          /* @__PURE__ */ c(Ce, { children: [
            !d && /* @__PURE__ */ t(Tn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(Tn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: h() })
      ]
    }
  );
}
const Au = ue(No), Co = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), ko = ({
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
        hs({ variant: r }),
        ms({ size: "md" }),
        ce()
      ),
      children: /* @__PURE__ */ c(
        "div",
        {
          className: b(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(Y, { icon: e.icon, size: "md", color: "default" }),
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
            e.badge ? /* @__PURE__ */ t(Co, {}) : null
          ]
        }
      )
    }
  );
}, Tu = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const s = Q(), i = r.placeholder ?? s.navigation.sidebar.search;
  return /* @__PURE__ */ c("div", { className: "mb-3 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": s.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          ko,
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
      te,
      {
        variant: "ghost",
        size: "md",
        icon: $t,
        label: i,
        hideLabel: !0,
        onClick: r.onClick
      }
    )
  ] });
}, Io = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Ln = {
  approved: {
    icon: _t,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: we,
    type: "critical",
    size: "sm"
  }
}, So = {
  icon: sa,
  type: "neutral",
  size: "sm"
}, Fo = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Ao = (e) => e in Ln ? Ln[e] : So;
function Rn(e) {
  return Fo[e ?? "neutral"] ?? 0;
}
const To = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const s = Q(), i = n === 1 ? s.approvals.requiredNumbers.one : s.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = s.approvals.statuses[a], o = Z(() => r.map((d) => {
    const f = Ao(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => Rn(f.badge?.type) - Rn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ t(tt, { text: l, variant: Io[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Mt, { avatars: o, layout: "fill", type: "person", size: "md" }) })
  ] });
}, Lo = ({ steps: e }) => {
  const a = Q().approvals.history, r = e.findIndex((s) => s.status === "pending");
  return /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ c("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((s, i) => /* @__PURE__ */ c("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: i + 1 })
          }
        ),
        i !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, s.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((s, i) => /* @__PURE__ */ c(ae, { children: [
        /* @__PURE__ */ t(
          To,
          {
            title: s.title,
            approvalsRequired: s.approvalsRequired,
            status: s.status,
            approvers: s.approvers
          },
          s.title
        ),
        i !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Lu = ue(
  se("OneApprovalHistory", Lo)
), yt = (e, n) => typeof n == "string" && n in e;
function Dn(e, n, a) {
  const r = {};
  let s = !1;
  const i = ps(e);
  if (i !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(i).filter(
        ([u]) => yt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(i).length === 0) && (a.setCurrentFilters(f), r.filters = f, s = !0);
  }
  const l = e.sortings;
  if (l === null)
    a.setCurrentSortings(null), r.sortings = null, s = !0;
  else if (l && n.sortings && yt(n.sortings, l.field)) {
    const d = {
      field: l.field,
      order: l.order
    };
    a.setCurrentSortings(d), r.sortings = d, s = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (a.setCurrentSearch(e.search), r.search = e.search, s = !0);
  const o = e.grouping;
  if (o?.field !== void 0 && n.grouping && yt(n.grouping.groupBy, o.field)) {
    const d = {
      field: o.field,
      order: o.order
    };
    a.setCurrentGrouping(d), r.grouping = d, s = !0;
  }
  return s ? r : null;
}
function Ru(e) {
  const {
    source: n,
    collectionId: a,
    activeItemId: r,
    defaultActiveItemId: s,
    onActiveItemChange: i,
    idProvider: l,
    itemUrl: o,
    getItemTitle: d,
    enabled: f = !0,
    restorePersistedState: u = !0,
    currentFilters: m,
    navigationMode: p = "url",
    deps: h = []
  } = e, x = gs(), v = fi(n, h), [y, T] = R(null), L = y?.key === a && y.settled, E = _(v);
  E.current = v;
  const D = _(x);
  D.current = x;
  const O = _(null), I = m === void 0 ? null : JSON.stringify(m), j = _(m);
  j.current = m;
  const B = _(null), w = () => {
    const V = j.current;
    V !== void 0 && (B.current = JSON.stringify(V), E.current.setCurrentFilters(V));
  };
  H(() => {
    if (!f || O.current === a) return;
    if (!u) {
      O.current = a, w(), T({ key: a, applied: null, settled: !1 });
      return;
    }
    let V = !1;
    return (async () => {
      let me = null;
      try {
        const Ne = await D.current.get(
          a
        );
        Ne && !V && (me = Dn(
          Ne,
          E.current,
          E.current
        ));
      } catch {
      }
      V || (O.current = a, w(), T({ key: a, applied: me, settled: !1 }));
    })(), () => {
      V = !0;
    };
  }, [a, f, u]), H(() => {
    !L || I === null || B.current !== I && w();
  }, [L, I]), H(() => {
    if (!(!f || !u))
      return bs(a, async () => {
        try {
          const V = await D.current.get(
            a
          );
          if (!V) return;
          const ie = E.current;
          Dn(
            V,
            {
              filters: j.current === void 0 ? ie.filters : void 0,
              sortings: ie.sortings,
              search: ie.search,
              grouping: ie.grouping
            },
            ie
          );
        } catch {
        }
      });
  }, [a, f, u]);
  const {
    data: S,
    paginationInfo: A,
    setPage: k,
    loadMore: z,
    isLoading: g,
    isInitialLoading: N
  } = xs(
    v,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && L,
      fetchParamsProvider: (V) => ({
        ...V,
        navigationFilters: v.currentNavigationFilters
      })
    },
    [JSON.stringify(v.currentNavigationFilters)]
  );
  H(() => {
    T(
      (V) => V && V.key === a && !V.settled ? { ...V, settled: !0 } : V
    );
  }, [y, a]);
  const C = o ?? n.itemUrl, F = mi({
    dataSource: v,
    data: S,
    paginationInfo: A,
    setPage: k,
    loadMore: z,
    isLoading: g,
    idProvider: l,
    itemUrl: C,
    activeItemId: r,
    defaultActiveItemId: s,
    onActiveItemChange: i
  }), q = typeof F.activeItemId == "string" || typeof F.activeItemId == "number" ? F.activeItemId : null, K = F.activeItem !== null, $ = K && F.nextItem === null && F.hasNext, oe = K && F.previousItem === null && F.hasPrevious, le = q !== null && (!K || $ || oe), ye = [
    ...v.currentSortings ? [
      {
        field: v.currentSortings.field,
        order: v.currentSortings.order
      }
    ] : [],
    ...v.currentGrouping ? [
      {
        field: v.currentGrouping.field,
        order: v.currentGrouping.order ?? "asc"
      }
    ] : []
  ], { neighbors: U, isSupported: ge } = hi({
    dataAdapter: v.dataAdapter,
    id: q,
    filters: v.currentFilters,
    sortings: ye,
    search: v.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && L && !N && !g && le,
    fetchParamsProvider: (V) => ({
      ...V,
      navigationFilters: v.currentNavigationFilters
    })
  }), fe = Z(() => l || (v.idProvider ? (V, ie) => v.idProvider(V, ie) : pi), [l, v.idProvider]), P = Z(() => {
    if (!le || U === null) return F;
    const V = F.previousItem ?? U.previous, ie = F.nextItem ?? U.next, me = (Ne) => Ne && C ? C(Ne) ?? null : null;
    return {
      ...F,
      previousItem: V,
      nextItem: ie,
      previousItemUrl: F.previousItemUrl ?? me(V),
      nextItemUrl: F.nextItemUrl ?? me(ie),
      absoluteIndex: F.absoluteIndex ?? (U.position !== void 0 ? U.position - 1 : null),
      totalItems: F.totalItems ?? U.total,
      hasPrevious: F.hasPrevious || V !== null,
      hasNext: F.hasNext || ie !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: K ? F.goToPrevious : () => {
        U.previous && F.setActiveItemId(
          fe(U.previous)
        );
      },
      goToNext: K ? F.goToNext : () => {
        U.next && F.setActiveItemId(
          fe(U.next)
        );
      }
    };
  }, [
    F,
    le,
    U,
    K,
    C,
    fe
  ]), M = Ki(P, {
    getItemTitle: d,
    mode: p
  }), J = f && L && ge && le && U === null, X = _(null), he = M ?? (J ? X.current : null);
  return H(() => {
    M !== null && (X.current = M);
  }, [M]), {
    ...P,
    isNavigating: P.isNavigating || J,
    isReady: L && !N,
    navigation: he,
    appliedCollectionState: y?.applied ?? null,
    dataSource: v,
    data: S,
    paginationInfo: A,
    isLoading: g
  };
}
const Ha = Le(null), Du = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(Ha.Provider, { value: e, children: n });
function Ee() {
  const e = Ie(Ha);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Ro = 200, Do = 1600, Va = Le(null), Oo = ({
  children: e
}) => {
  const { messages: n, searchMessages: a, loadMessageContext: r } = Ee(), [s, i] = R(null), [l, o] = R(null), d = _(null), f = _(null), u = _(null), [m, p] = R(!1), [h, x] = R(""), [v, y] = R([]), [T, L] = R(-1), [E, D] = R(!1), O = _(n);
  O.current = n;
  const I = _(a);
  I.current = a;
  const j = _(r);
  j.current = r;
  const B = _(v);
  B.current = v;
  const w = _(T);
  w.current = T;
  const S = _(0);
  H(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const A = G((U) => {
    d.current = U;
  }, []), k = G((U) => {
    f.current = U;
  }, []), z = G((U) => {
    f.current?.(U);
  }, []), g = G((U, ge) => {
    d.current?.(U), o(U), u.current && clearTimeout(u.current), ge || (u.current = setTimeout(
      () => o(null),
      Do
    ));
  }, []), N = G(
    (U) => g(U, !1),
    [g]
  ), C = G(
    (U, ge = B.current) => {
      const fe = ge[U];
      if (fe == null) return;
      L(U);
      const P = () => g(fe, !0), M = j.current;
      M ? M(fe).then(P) : P();
    },
    [g]
  );
  H(() => {
    if (!m) return;
    const U = h.trim();
    if (U === "") {
      y([]), L(-1), D(!1), o(null);
      return;
    }
    D(!0);
    const ge = ++S.current, fe = setTimeout(() => {
      const P = (J) => {
        ge === S.current && (y(J), D(!1), J.length > 0 ? C(J.length - 1, J) : (L(-1), o(null)));
      }, M = I.current;
      if (M)
        M(U).then((J) => P(J.map((X) => X.id)));
      else {
        const J = U.toLowerCase();
        P(
          O.current.filter((X) => !X.deleted && X.body.toLowerCase().includes(J)).map((X) => X.id)
        );
      }
    }, Ro);
    return () => clearTimeout(fe);
  }, [h, m, C]);
  const F = G(() => p(!0), []), q = G(() => {
    S.current++, p(!1), x(""), y([]), L(-1), D(!1), o(null);
  }, []), K = G(() => {
    const U = B.current;
    U.length !== 0 && C((w.current + 1) % U.length, U);
  }, [C]), $ = G(() => {
    const U = B.current;
    U.length !== 0 && C((w.current - 1 + U.length) % U.length, U);
  }, [C]), oe = v.length, le = T >= 0 ? T + 1 : 0, ye = Z(
    () => ({
      replyTo: s,
      setReplyTo: i,
      highlightedId: l,
      jumpToMessage: N,
      registerScrollToMessage: A,
      registerFileDropHandler: k,
      dropFiles: z,
      searchOpen: m,
      openSearch: F,
      closeSearch: q,
      searchQuery: h,
      setSearchQuery: x,
      searching: E,
      matchCurrent: le,
      matchTotal: oe,
      goToNextMatch: K,
      goToPrevMatch: $
    }),
    [
      s,
      l,
      N,
      A,
      k,
      z,
      m,
      F,
      q,
      h,
      E,
      le,
      oe,
      K,
      $
    ]
  );
  return /* @__PURE__ */ t(Va.Provider, { value: ye, children: e });
};
function Re() {
  const e = Ie(Va);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Po = ({
  message: e,
  onRemove: n
}) => {
  const a = Q(), r = e.attachments?.find((i) => i.kind === "image"), s = e.body || e.attachments?.[0]?.name || "";
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ c("div", { className: "flex items-start justify-center gap-2 rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(Y, { icon: jt, size: "md", color: "default" }) }),
    r && /* @__PURE__ */ t(
      "img",
      {
        src: r.url,
        alt: "",
        className: "h-9 w-9 shrink-0 rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(pe, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.author.name }),
      /* @__PURE__ */ t(
        pe,
        {
          className: "text-sm text-f1-foreground-secondary",
          lines: 2,
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ t(
      re,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: a.chat.removeQuote,
        icon: we,
        onClick: n
      }
    )
  ] }) });
}, Eo = 140, _o = () => {
  const e = Q(), { sendMessage: n, onInputActivity: a, uploadFiles: r, transcribe: s } = Ee(), { replyTo: i, setReplyTo: l, registerFileDropHandler: o } = Re(), [d, f] = R(""), [u, m] = R([]), p = _(null), h = _(null), x = _(0), v = u.some((g) => g.status === "uploading"), y = G(() => {
    const g = p.current;
    g && (g.style.height = "auto", g.style.height = `${Math.min(g.scrollHeight, Eo)}px`);
  }, []), T = _(""), L = G(
    (g) => {
      const N = T.current;
      f(N ? `${N} ${g}` : g), requestAnimationFrame(y);
    },
    [y]
  ), E = vs({
    onTranscribe: s,
    onPartial: L,
    onFinal: L,
    onError: () => {
    }
  }), D = E.status === "transcribing", O = E.status === "recording", I = !!s && E.isSupported, j = (d.trim().length > 0 || u.length > 0) && !D && !v, B = G(
    (g) => {
      f(g.target.value), a(), y();
    },
    [y, a]
  ), w = G(
    async (g) => {
      if (g.length === 0 || !r) return;
      const N = g.map((F) => ({
        id: `att-${x.current++}`,
        status: "uploading",
        name: F.name
      }));
      m((F) => [...F, ...N]);
      const C = new Set(N.map((F) => F.id));
      try {
        const q = (await r(g)).map((K, $) => ({
          id: N[$]?.id ?? `att-${x.current++}`,
          status: "ready",
          attachment: K
        }));
        m((K) => [
          ...K.filter(($) => !C.has($.id)),
          ...q
        ]);
      } catch {
        m((F) => F.filter((q) => !C.has(q.id)));
      }
    },
    [r]
  );
  H(() => {
    o((g) => {
      w(g);
    });
  }, [o, w]);
  const S = G(() => {
    if (!j) return;
    const g = u.flatMap(
      (C) => C.status === "ready" ? [C.attachment] : []
    );
    n({
      body: d.trim(),
      attachments: g.length > 0 ? g : void 0,
      replyToId: i?.id
    }), f(""), m([]), l(null);
    const N = p.current;
    N && (N.style.height = "auto");
  }, [u, j, i, n, l, d]), A = G(
    (g) => {
      g.key === "Enter" && !g.shiftKey && (g.preventDefault(), S());
    },
    [S]
  ), k = G(() => {
    T.current = d, E.start();
  }, [E, d]), z = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ c("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background", children: [
    i && /* @__PURE__ */ t(
      Po,
      {
        message: i,
        onRemove: () => l(null)
      }
    ),
    u.length > 0 && /* @__PURE__ */ t(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": v,
        className: "flex flex-wrap gap-1 px-1 pt-1",
        children: u.map(
          (g) => g.status === "uploading" ? /* @__PURE__ */ t(W, { className: "h-9 w-36 rounded-[10px]" }, g.id) : /* @__PURE__ */ t(
            oa,
            {
              size: "md",
              file: {
                name: g.attachment.name,
                type: g.attachment.mimeType ?? (g.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: we,
                  onClick: () => m(
                    (N) => N.filter((C) => C.id !== g.id)
                  )
                }
              ]
            },
            g.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: p,
        value: d,
        onChange: B,
        onKeyDown: A,
        rows: 1,
        placeholder: O ? e.chat.listening : z,
        className: b(
          "w-full resize-none bg-transparent px-3.5 pt-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    O ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ c("div", { className: "flex items-center gap-3 p-2", children: [
        /* @__PURE__ */ t(
          ys,
          {
            stream: E.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            re,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: we,
              onClick: E.cancel
            }
          ),
          /* @__PURE__ */ t(
            re,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: _t,
              onClick: E.stop
            }
          )
        ] })
      ] })
    ) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between p-2", children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: h,
          type: "file",
          multiple: !0,
          className: "hidden",
          onChange: (g) => {
            w(Array.from(g.target.files ?? [])), g.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ t(
        re,
        {
          variant: "outline",
          size: "md",
          hideLabel: !0,
          label: e.chat.attachFile,
          icon: ws,
          onClick: () => h.current?.click(),
          disabled: !r || D
        }
      ),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        I && /* @__PURE__ */ t(
          re,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Ns,
            onClick: k,
            loading: D
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Hn,
            onClick: S,
            disabled: !j
          }
        )
      ] })
    ] })
  ] }) }) });
}, zo = ({
  visible: e
}) => {
  const n = Q();
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": !e,
      className: b(
        "pointer-events-none absolute inset-1 z-50 flex flex-col items-center justify-center gap-2 rounded-xl",
        "border border-dashed border-f1-border bg-f1-background-tertiary/80 backdrop-blur",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none",
        e ? "opacity-100" : "opacity-0"
      ),
      children: [
        /* @__PURE__ */ t(Y, { icon: Cs, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Bo = () => {
  const e = Q(), {
    searchQuery: n,
    setSearchQuery: a,
    searching: r,
    matchCurrent: s,
    matchTotal: i,
    goToNextMatch: l,
    goToPrevMatch: o,
    closeSearch: d
  } = Re(), f = i > 0, m = n.trim().length > 0 && !r && !f;
  return /* @__PURE__ */ c("div", { className: "flex w-full items-center gap-2", onKeyDown: (h) => {
    h.key === "Enter" ? (h.preventDefault(), h.shiftKey ? o() : l()) : h.key === "Escape" && (h.preventDefault(), d());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      ks,
      {
        value: n,
        onChange: a,
        placeholder: e.chat.searchPlaceholder,
        loading: r,
        autoFocus: !0,
        clearable: !0,
        size: "sm"
      }
    ) }),
    /* @__PURE__ */ t(
      "span",
      {
        className: b(
          "shrink-0 whitespace-nowrap text-sm tabular-nums",
          m ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"
        ),
        children: r ? "" : `${s}/${i}`
      }
    ),
    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-0", children: [
        /* @__PURE__ */ t(
          re,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.previous,
            icon: Is,
            onClick: o,
            disabled: !f || r,
            size: "sm"
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.next,
            icon: Bt,
            onClick: l,
            disabled: !f || r,
            size: "sm"
          }
        )
      ] }),
      /* @__PURE__ */ t(
        re,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.closeSearch,
          icon: we,
          onClick: d
        }
      )
    ] })
  ] });
}, Xt = ({
  user: e,
  children: n
}) => {
  const a = Q();
  return /* @__PURE__ */ c(Ss, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(Fs, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      As,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          Ts,
          {
            avatar: e.avatar ?? {
              type: "person",
              firstName: e.name,
              lastName: ""
            },
            title: e.name,
            description: e.subtitle,
            secondaryActions: e.profileHref ? { label: a.chat.viewProfile, href: e.profileHref } : void 0
          }
        )
      }
    )
  ] });
}, $o = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: b("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, Mo = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: a,
  onClose: r
}) => {
  const s = Q(), { searchOpen: i, openSearch: l } = Re(), o = e.type === "dm" && e.presence !== void 0, d = /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ c("div", { className: "relative shrink-0", children: [
      e.avatar.type === "emoji" ? (
        // Emoji groups show the glyph alone (no avatar chrome) so it reads at
        // full size instead of shrunk inside the bordered avatar box.
        /* @__PURE__ */ t("span", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
      ) : /* @__PURE__ */ t(Ve, { size: "sm", avatar: e.avatar }),
      o && /* @__PURE__ */ t($o, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      Y,
      {
        icon: Ls,
        size: "sm",
        color: "secondary",
        "aria-label": s.chat.muted
      }
    ),
    e.statuses?.map((f) => /* @__PURE__ */ t(
      Y,
      {
        icon: f.icon,
        size: "sm",
        color: "secondary",
        "aria-label": f.label
      },
      f.label
    ))
  ] });
  return /* @__PURE__ */ t("header", { className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3", children: i ? (
    // Search mode: the whole header becomes the search bar.
    /* @__PURE__ */ t(Bo, {})
  ) : /* @__PURE__ */ c(ae, { children: [
    e.user ? /* @__PURE__ */ t(Xt, { user: e.user, children: d }) : d,
    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        re,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.actions.search,
          icon: $t,
          onClick: l
        }
      ),
      a && /* @__PURE__ */ t(
        re,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? s.actions.collapse : s.actions.expand,
          icon: n ? Rs : Ds,
          onClick: a
        }
      ),
      r && /* @__PURE__ */ t(
        re,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.actions.close,
          icon: we,
          onClick: r
        }
      )
    ] })
  ] }) });
}, jo = "latest", Wo = 1440 * 60 * 1e3, On = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function Zt(e, n) {
  return Math.round((On(n) - On(e)) / Wo);
}
function Ga(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function Uo(e, n, a, r) {
  const s = Zt(e, n);
  if (s <= 0) return a.today;
  if (s === 1) return a.yesterday;
  if (s < 7)
    return new Intl.DateTimeFormat(r, { weekday: "long" }).format(e);
  const i = e.getFullYear() === n.getFullYear();
  return new Intl.DateTimeFormat(r, {
    day: "numeric",
    month: "short",
    ...i ? {} : { year: "numeric" }
  }).format(e);
}
function it(e, n, a, r) {
  return `${Uo(e, n, a, r)} ${Ga(e, r)}`;
}
function Ho(e, n, a, r) {
  return Zt(e, n) <= 0 ? Ga(e, r) : it(e, n, a, r);
}
const Vo = 1200 * 1e3, Go = (e, n, a) => {
  if (!n) return !0;
  const r = new Date(n.createdAt), s = new Date(e.createdAt);
  return Zt(r, s) !== 0 ? !0 : s.getTime() - r.getTime() > a;
};
function Ko(e, n = {}) {
  const { dividerId: a = null, gapMs: r = Vo } = n, s = [], i = /* @__PURE__ */ new Map();
  let l = -1;
  return e.forEach((o, d) => {
    const f = e[d - 1], u = Go(o, f, r);
    u && s.push({
      type: "separator",
      key: `sep-${o.id}`,
      at: o.createdAt
    });
    const m = u || !f || f.author.id !== o.author.id;
    if (!m && l >= 0) {
      const p = s[l];
      p.type === "message" && (p.isLastOfRun = !1);
    }
    a && o.id === a && s.push({ type: "divider", key: "unread-divider" }), s.push({
      type: "message",
      key: o.id,
      message: o,
      isFirstOfRun: m,
      isLastOfRun: !0,
      isLastMessage: d === e.length - 1
    }), l = s.length - 1, i.set(o.id, l);
  }), { rows: s, indexById: i };
}
const qo = 80, Pn = 120;
function Yo({
  viewportRef: e,
  virtualizer: n,
  rows: a,
  indexById: r,
  messages: s,
  hasMoreOlder: i,
  loadingOlder: l,
  onReachTop: o,
  hasMoreNewer: d = !1,
  loadingNewer: f = !1,
  onReachBottom: u
}) {
  const [m, p] = R(!1), [h, x] = R(!0), [v, y] = R(!0), T = _(!0), L = _(s[0]?.id ?? null), E = _(s.at(-1)?.id ?? null), D = _(s.length), O = _(!1), I = _(null), j = _(null), B = G(
    (k = "smooth") => {
      a.length > 0 && n.scrollToIndex(a.length - 1, { align: "end", behavior: k });
    },
    [n, a.length]
  ), w = G(() => {
    const k = e.current, z = I.current;
    if (!k || !z) return null;
    const g = r.get(z.id);
    if (g == null) return null;
    const C = (n.getOffsetForIndex(g, "start")?.[0] ?? 0) - z.delta;
    return k.scrollTop = C, C;
  }, [e, r, n]), S = G(
    (k) => {
      const z = n.getVirtualItemForOffset(k);
      if (!z) return null;
      for (let g = z.index; g < a.length; g++)
        if (a[g].type === "message") return g;
      return null;
    },
    [n, a]
  ), A = G(() => {
    const k = e.current;
    if (!k) return;
    const { scrollTop: z, scrollHeight: g, clientHeight: N } = k, C = g - z - N, F = C < qo;
    if (T.current = F, x(F), p(C > N * 0.5), y(z <= 0), z < Pn && i && !l) {
      const q = S(z), K = q != null ? a[q] : null;
      if (K && K.type === "message") {
        const $ = n.getOffsetForIndex(q, "start")?.[0] ?? 0;
        I.current = { id: K.message.id, delta: $ - z };
      }
      o();
    }
    C < Pn && d && !f && u?.();
  }, [
    e,
    i,
    l,
    o,
    d,
    f,
    u,
    S,
    a,
    n
  ]);
  return at(() => {
    const k = e.current;
    if (!k) return;
    if (!O.current && a.length > 0) {
      d || (n.scrollToIndex(a.length - 1, { align: "end" }), x(!0)), y(k.scrollHeight - k.clientHeight <= 0), O.current = !0, L.current = s[0]?.id ?? null, E.current = s.at(-1)?.id ?? null, D.current = s.length;
      return;
    }
    const z = s[0]?.id ?? null, g = s.at(-1), N = s.length > D.current, C = N && z !== L.current, F = N && g?.id !== E.current;
    if (C && I.current) {
      j.current != null && cancelAnimationFrame(j.current);
      let q = w(), K = 0, $ = 0;
      const oe = () => {
        const le = w();
        if ($ += 1, le != null && q != null && Math.abs(le - q) < 1 ? K += 1 : K = 0, q = le, le == null || K >= 2 || $ >= 12) {
          I.current = null, j.current = null;
          return;
        }
        j.current = requestAnimationFrame(oe);
      };
      j.current = requestAnimationFrame(oe);
    } else F && !d && (g?.isMine || T.current) && (n.scrollToIndex(a.length - 1, { align: "end" }), x(!0));
    L.current = z, E.current = g?.id ?? null, D.current = s.length;
  }, [
    s,
    a.length,
    e,
    n,
    r,
    d,
    w
  ]), at(
    () => () => {
      j.current != null && cancelAnimationFrame(j.current);
    },
    []
  ), { scrolledUp: m, atBottom: h, atTop: v, scrollToBottom: B, handleScroll: A };
}
const Qo = {
  viridian: "text-[hsl(theme(colors.viridian.70))]",
  malibu: "text-[hsl(theme(colors.malibu.70))]",
  yellow: "text-[hsl(theme(colors.yellow.70))]",
  purple: "text-[hsl(theme(colors.purple.70))]",
  lilac: "text-[hsl(theme(colors.lilac.70))]",
  barbie: "text-[hsl(theme(colors.barbie.70))]",
  smoke: "text-[hsl(theme(colors.smoke.70))]",
  army: "text-[hsl(theme(colors.army.70))]",
  flubber: "text-[hsl(theme(colors.flubber.70))]",
  indigo: "text-[hsl(theme(colors.indigo.70))]",
  camel: "text-[hsl(theme(colors.camel.70))]"
}, Jo = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, Xo = (e) => Qo[na(Jo(e)) ?? "viridian"], Zo = ({
  message: e,
  isMine: n,
  author: a
}) => {
  const r = Q();
  return e.deleted ? /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "w-fit max-w-full rounded-2xl px-3.5 py-2.5",
        "text-sm italic text-f1-foreground",
        "border border-solid border-f1-border-secondary",
        n ? "bg-f1-background-secondary" : "bg-f1-background"
      ),
      children: r.chat.deletedMessage
    }
  ) : /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "w-fit max-w-full rounded-2xl px-3.5 py-2.5 text-f1-foreground font-normal",
        "whitespace-pre-wrap break-words",
        "border border-solid border-f1-border-secondary",
        // Mine: grey. Others: white with a subtle border (matches the design).
        n ? "bg-f1-background-secondary" : "bg-f1-background",
        e.status === "failed" && "opacity-60"
      ),
      children: [
        a && /* @__PURE__ */ t(Xt, { user: a, children: /* @__PURE__ */ t(
          "span",
          {
            className: b(
              "mb-0.5 block w-fit cursor-default text-sm font-medium",
              Xo(a)
            ),
            children: a.name
          }
        ) }),
        e.body
      ]
    }
  );
}, wt = ({
  label: e,
  value: n
}) => /* @__PURE__ */ c("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), ec = ({
  message: e,
  onBack: n
}) => {
  const a = Q(), { channel: r } = Ee(), s = {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  }, i = /* @__PURE__ */ new Date(), l = r.type === "group";
  return /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ c("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        re,
        {
          icon: Os,
          onClick: n,
          label: a.chat.back,
          variant: "ghost",
          hideLabel: !0,
          size: "sm"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: a.chat.info })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-4 px-3 py-3", children: [
      e.isMine && (l ? /* @__PURE__ */ t(
        wt,
        {
          label: a.t(
            (e.readByCount ?? 0) === 1 ? "chat.readBy.one" : "chat.readBy.other",
            { count: e.readByCount ?? 0 }
          )
        }
      ) : e.readAt && /* @__PURE__ */ t(
        wt,
        {
          label: a.chat.read,
          value: it(new Date(e.readAt), i, s)
        }
      )),
      /* @__PURE__ */ t(
        wt,
        {
          label: a.chat.delivered,
          value: it(new Date(e.createdAt), i, s)
        }
      )
    ] })
  ] });
}, tc = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], nc = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", Qe = ({
  icon: e,
  label: n,
  onClick: a,
  trailing: r
}) => /* @__PURE__ */ c(
  "button",
  {
    type: "button",
    onClick: a,
    className: b(nc, ce("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(Y, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      r
    ]
  }
), ac = ({
  message: e,
  isMine: n,
  open: a,
  onOpenChange: r
}) => {
  const s = Q(), { toggleReaction: i, deleteMessage: l } = Ee(), { setReplyTo: o } = Re(), [d, f] = R("menu"), u = (h) => {
    r(h), h || f("menu");
  }, m = (h) => {
    i(e.id, h), u(!1);
  }, p = (h) => () => {
    h(), u(!1);
  };
  return /* @__PURE__ */ c(Jn, { open: a, onOpenChange: u, children: [
    /* @__PURE__ */ t(Xn, { asChild: !0, children: /* @__PURE__ */ t(
      re,
      {
        variant: "outline",
        hideLabel: !0,
        label: s.chat.moreActions,
        icon: Ps,
        pressed: a
      }
    ) }),
    /* @__PURE__ */ t(
      Zn,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: d === "info" ? /* @__PURE__ */ t(
          ec,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ c(ae, { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between p-2", children: [
            tc.map((h) => /* @__PURE__ */ t(
              re,
              {
                label: h,
                emoji: h,
                variant: "ghost",
                "aria-label": h,
                onClick: () => m(h),
                className: "h-8 w-8 rounded text-base hover:bg-f1-background-secondary-hover"
              },
              h
            )),
            /* @__PURE__ */ t(
              ut,
              {
                size: "md",
                variant: "ghost",
                label: s.chat.react,
                onSelect: m,
                icon: Yn
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-0 p-1", children: [
            /* @__PURE__ */ t(
              Qe,
              {
                icon: Es,
                label: s.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  Y,
                  {
                    icon: ot,
                    size: "md",
                    className: "text-f1-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              Qe,
              {
                icon: jt,
                label: s.chat.reply,
                onClick: p(() => o(e))
              }
            ),
            /* @__PURE__ */ t(
              Qe,
              {
                icon: _s,
                label: s.actions.copy,
                onClick: p(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              Qe,
              {
                icon: la,
                label: s.actions.delete,
                onClick: p(() => l(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, rc = (e, n) => {
  const a = document.createElement("a");
  a.href = e, a.download = n, a.rel = "noreferrer", a.click();
}, sc = ({
  message: e,
  isMine: n
}) => {
  const a = Q(), r = e.attachments;
  if (!r || r.length === 0) return null;
  const s = r.filter((o) => o.kind === "image"), i = r.filter((o) => o.kind === "file"), l = s.length === 1;
  return /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        s.length > 0 && /* @__PURE__ */ t("div", { className: b("flex flex-wrap gap-1", n && "justify-end"), children: s.map((o, d) => /* @__PURE__ */ t(
          "a",
          {
            href: o.url,
            target: "_blank",
            rel: "noreferrer",
            className: "block",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: o.thumbnailUrl ?? o.url,
                alt: o.name,
                className: b(
                  "rounded-xl border border-solid border-f1-border-secondary object-cover",
                  l ? "max-h-60 max-w-full" : "h-28 w-28"
                )
              }
            )
          },
          `${o.url}-${d}`
        )) }),
        i.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: b("flex flex-wrap gap-1", n && "justify-end"), children: i.map((o, d) => /* @__PURE__ */ t(
          oa,
          {
            size: "md",
            file: { name: o.name, type: o.mimeType ?? "" },
            actions: [
              {
                label: a.chat.download,
                icon: zs,
                onClick: () => rc(o.url, o.name)
              }
            ]
          },
          `${o.url}-${d}`
        )) })
      ]
    }
  );
}, ic = ({
  message: e,
  isMine: n
}) => {
  const a = Q(), { toggleReaction: r } = Ee();
  return !e.reactions || e.reactions.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "flex flex-wrap items-center gap-2 py-2",
        n && "justify-end"
      ),
      children: [
        e.reactions.map((s) => (
          // Key includes count/own-state so the kit pill re-syncs with the
          // runtime after an external toggle (the pill is otherwise uncontrolled).
          /* @__PURE__ */ t(
            Ta,
            {
              emoji: s.emoji,
              initialCount: s.count,
              hasReacted: s.reactedByMe,
              users: s.users,
              onInteraction: (i) => r(e.id, i)
            },
            `${s.emoji}-${s.count}-${s.reactedByMe}`
          )
        )),
        /* @__PURE__ */ t(
          ut,
          {
            size: "md",
            variant: "outline",
            label: a.chat.react,
            onSelect: (s) => r(e.id, s)
          }
        )
      ]
    }
  );
}, lc = ({
  reply: e,
  isMine: n,
  indented: a
}) => {
  const { jumpToMessage: r } = Re(), s = e.attachments?.find((l) => l.kind === "image"), i = e.body || e.attachments?.[0]?.name || "";
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      onClick: () => r(e.id),
      className: b(
        "flex max-w-[80%] items-center gap-2 rounded-md pb-3 text-left text-f1-foreground-secondary transition-colors hover:text-f1-foreground-secondary",
        n ? "self-end pr-2" : a ? "self-start pl-7" : "self-start pl-2"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ t(Y, { icon: jt }) }),
        s && /* @__PURE__ */ t(
          "img",
          {
            src: s.url,
            alt: "",
            className: "h-9 w-9 shrink-0 rounded-sm object-cover"
          }
        ),
        /* @__PURE__ */ t(pe, { className: "min-w-0 text-base leading-5", lines: 2, children: i })
      ]
    }
  );
}, oc = ({
  message: e,
  isMine: n,
  author: a,
  bubbleGutter: r,
  belowGutter: s
}) => {
  const [i, l] = R(!1), { highlightedId: o } = Re(), d = o === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0, p = m || u;
  return /* @__PURE__ */ c(
    "div",
    {
      "data-msg-id": e.id,
      className: b(
        "group flex flex-col",
        n ? "items-end" : "items-start"
      ),
      children: [
        e.replyTo && !e.deleted && /* @__PURE__ */ t(
          lc,
          {
            reply: e.replyTo,
            isMine: n,
            indented: !!r
          }
        ),
        p && /* @__PURE__ */ c(
          "div",
          {
            className: b(
              "flex w-full gap-2",
              n ? "flex-row-reverse items-center" : "items-end"
            ),
            children: [
              r,
              /* @__PURE__ */ c(
                "div",
                {
                  className: b(
                    "flex min-w-0 items-center gap-1",
                    n ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ c(
                      "div",
                      {
                        className: b(
                          // `transition-shadow` is always on so the jump-to highlight ring
                          // fades in/out instead of snapping when `highlighted` toggles.
                          "flex max-w-full flex-col gap-1 rounded-2xl transition-shadow duration-200",
                          n ? "items-end" : "items-start",
                          d && "ring-1 ring-f1-special-ring ring-offset-2",
                          !e.deleted && "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          i && "bg-f1-background-hover"
                        ),
                        children: [
                          u && /* @__PURE__ */ t(sc, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(Zo, { message: e, isMine: n, author: a })
                        ]
                      }
                    ),
                    !e.deleted && /* @__PURE__ */ t(
                      "div",
                      {
                        className: b(
                          "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                          i && "opacity-100"
                        ),
                        children: /* @__PURE__ */ t(
                          ac,
                          {
                            message: e,
                            isMine: n,
                            open: i,
                            onOpenChange: l
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ c("div", { className: "flex w-full gap-2", children: [
          s,
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(ic, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, cc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...a } = e.avatar;
    return a;
  }
  return { firstName: e.name, lastName: "" };
}, dc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: b(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), uc = ({
  users: e,
  isGroup: n
}) => {
  const a = Q(), r = Te();
  if (e.length === 0) return null;
  let s = a.chat.writing;
  return n && (e.length === 1 ? s = a.t("chat.isTyping", { name: e[0].name }) : e.length === 2 ? s = a.t("chat.twoTyping", {
    first: e[0].name,
    second: e[1].name
  }) : s = a.chat.severalTyping), /* @__PURE__ */ c(
    "div",
    {
      role: "status",
      "aria-label": s,
      className: "flex w-full items-end gap-2",
      children: [
        n && (e.length > 1 ? (
          // Several people typing: stacked avatar list, capped at 3 with a +N.
          /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
            Mt,
            {
              type: "person",
              size: "xs",
              max: 3,
              noTooltip: !0,
              avatars: e.map(cc)
            }
          ) })
        ) : /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
          Ve,
          {
            size: "xs",
            avatar: e[0].avatar ?? {
              type: "person",
              firstName: e[0].name,
              lastName: ""
            }
          }
        ) })),
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(dc, { animate: !r }) })
      ]
    }
  );
}, Ka = ({ at: e }) => {
  const n = Q(), a = it(new Date(e), /* @__PURE__ */ new Date(), {
    today: n.date.groups.today,
    yesterday: n.date.groups.yesterday
  });
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: a }) });
}, fc = ({
  message: e,
  isGroup: n
}) => {
  const a = Q(), r = Te(), s = Ho(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  });
  let i = s;
  return e.isMine && (e.status === "failed" ? i = a.chat.error : e.status === "read" ? i = n && e.readByCount ? a.t(
    e.readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: e.readByCount }
  ) : `${a.chat.read} ${s}` : e.status === "sent" && (i = `${a.chat.sent} ${s}`)), /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: /* @__PURE__ */ t(
        ee.span,
        {
          className: "inline-block",
          initial: r ? !1 : { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: r ? 0 : 0.15 },
          children: i
        },
        i
      )
    }
  );
}, mc = () => {
  const e = Q();
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2 py-2", children: [
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border" }),
    /* @__PURE__ */ t("span", { className: "text-md font-medium text-f1-foreground", children: e.chat.newMessages }),
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, En = (e) => /* @__PURE__ */ t(
  Ve,
  {
    size: "xs",
    avatar: e.avatar ?? { type: "person", firstName: e.name, lastName: "" }
  }
), hc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-6" : "pt-2" : "pt-6", pc = ({
  row: e,
  isGroup: n,
  isFirstRow: a,
  isLastRow: r,
  enterAnimation: s,
  animatedIds: i
}) => {
  const l = b(hc(e, a), r && "pb-6"), [o] = R(
    () => s && e.type === "message" && e.isLastMessage && !i.has(e.message.id)
  );
  if (H(() => {
    e.type === "message" && i.add(e.message.id);
  }, [e, i]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(Ka, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(mc, {}) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(uc, { users: e.users, isGroup: n }) });
  const { message: d, isFirstOfRun: f, isLastOfRun: u, isLastMessage: m } = e, p = d.isMine, h = n && !p, x = h ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: En(d.author) }) : void 0, v = h ? u ? /* @__PURE__ */ t(Xt, { user: d.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: En(d.author) }) }) : x : void 0, y = /* @__PURE__ */ c(ae, { children: [
    /* @__PURE__ */ t(
      oc,
      {
        message: d,
        isMine: p,
        author: h && f ? d.author : void 0,
        bubbleGutter: v,
        belowGutter: x
      }
    ),
    m && /* @__PURE__ */ c("div", { className: "flex w-full gap-2", children: [
      x,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(fc, { message: d, isGroup: n }) })
    ] })
  ] });
  return o ? /* @__PURE__ */ t(
    ee.div,
    {
      className: b("flex flex-col gap-1", l),
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.18, ease: "easeOut" },
      children: y
    }
  ) : /* @__PURE__ */ t("div", { className: b("flex flex-col gap-1", l), children: y });
}, gc = si(pc), bc = 5e3, xc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, vc = (e, n) => {
  for (let a = n; a < e.length; a++) {
    const r = e[a];
    if (r.type === "message") return r.message.createdAt;
    if (r.type === "separator") return r.at;
  }
  return null;
}, yc = () => {
  const e = Q(), {
    messages: n,
    channel: a,
    typingUsers: r,
    hasMoreOlder: s,
    loadingOlder: i,
    loadOlder: l,
    hasMoreNewer: o,
    loadingNewer: d,
    loadNewer: f,
    loadMessageContext: u,
    unreadCount: m,
    firstUnreadId: p,
    markRead: h
  } = Ee(), x = Te(), v = a.type === "group", y = _(null), { registerScrollToMessage: T } = Re(), [L, E] = R(!1), [D, O] = R(p), I = _(null), { rows: j, indexById: B } = Z(
    () => Ko(n, { dividerId: D }),
    [n, D]
  ), w = Z(
    () => r.length > 0 ? [...j, { type: "typing", key: "typing", users: r }] : j,
    [j, r]
  ), S = Kn({
    count: w.length,
    getScrollElement: () => y.current,
    estimateSize: (M) => xc(w[M]),
    getItemKey: (M) => w[M].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (M) => Math.round(M.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: A, atBottom: k, atTop: z, scrollToBottom: g, handleScroll: N } = Yo({
    viewportRef: y,
    virtualizer: S,
    rows: w,
    indexById: B,
    messages: n,
    hasMoreOlder: s,
    loadingOlder: i,
    onReachTop: l,
    hasMoreNewer: o,
    loadingNewer: d,
    onReachBottom: f
  }), C = r.length > 0, F = _(!1);
  H(() => {
    C && !F.current && k && g("smooth"), F.current = C;
  }, [C, k, g]);
  const q = _(null), K = G(() => {
    const M = q.current;
    if (!M) return;
    if (M.kind === "bottom") {
      w.length > 0 && (S.scrollToIndex(w.length - 1, { align: "end" }), q.current = null);
      return;
    }
    const J = B.get(M.id);
    J != null && (S.scrollToIndex(J, { align: "center", behavior: "smooth" }), q.current = null);
  }, [B, S, w.length]);
  H(K, [K]), H(() => {
    T((M) => {
      q.current = { kind: "id", id: M }, K();
    });
  }, [T, K]);
  const $ = G(() => {
    o && u ? (q.current = { kind: "bottom" }, u(jo)) : g();
  }, [o, u, g]), oe = k && L;
  H(() => {
    oe && m > 0 && h?.();
  }, [oe, m, h]), H(() => {
    p && !oe ? (O(p), I.current && (clearTimeout(I.current), I.current = null)) : D && !I.current && (I.current = setTimeout(() => {
      O(null), I.current = null;
    }, bc));
  }, [p, oe, D]), H(
    () => () => {
      I.current && clearTimeout(I.current);
    },
    []
  );
  const le = _(null);
  le.current === null && n.length > 0 && (le.current = new Set(n.map((M) => M.id)));
  const ye = le.current ?? wc, U = S.getVirtualItems(), ge = U[0], fe = ge ? vc(w, ge.index) : null, P = A || o;
  return /* @__PURE__ */ c(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: y,
            onScroll: N,
            className: "absolute inset-0 overflow-y-auto px-4",
            children: /* @__PURE__ */ t(
              "div",
              {
                className: "relative mx-auto w-full max-w-content",
                style: { height: S.getTotalSize() },
                children: /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute left-0 top-0 w-full",
                    style: {
                      transform: `translateY(${U[0]?.start ?? 0}px)`
                    },
                    children: U.map((M) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": M.index,
                        ref: S.measureElement,
                        children: /* @__PURE__ */ t(
                          gc,
                          {
                            row: w[M.index],
                            isGroup: v,
                            isFirstRow: M.index === 0,
                            isLastRow: M.index === w.length - 1,
                            enterAnimation: !x,
                            animatedIds: ye
                          }
                        )
                      },
                      M.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ce, { children: !z && /* @__PURE__ */ t(Bs, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(Ce, { children: A && fe && /* @__PURE__ */ t(
          ee.div,
          {
            className: "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
            initial: { opacity: 0, y: -4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ c(
              "div",
              {
                className: "flex items-center gap-1.5 rounded-full bg-f1-background border border-solid border-f1-border-secondary px-2.5 py-0.5 backdrop-blur z-50",
                "aria-label": i ? e.chat.loadingOlder : void 0,
                children: [
                  i && /* @__PURE__ */ t(Et, { size: "small", className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ t(Ka, { at: fe })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(Ce, { children: P && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          ee.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              re,
              {
                onClick: $,
                variant: "neutral",
                icon: $s,
                label: m > 0 ? e.t(
                  m === 1 ? "chat.unreadCount.one" : "chat.unreadCount.other",
                  { count: m }
                ) : o ? e.chat.backToLatest : e.chat.scrollToBottom,
                hideLabel: m === 0 && !o
              }
            ) })
          }
        ) })
      ]
    }
  );
}, wc = /* @__PURE__ */ new Set(), De = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ c(
  "div",
  {
    className: b("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t(W, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: b("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((a, r) => /* @__PURE__ */ t(W, { className: b("h-8 rounded-2xl", a) }, r))
        }
      )
    ]
  }
), Nc = () => /* @__PURE__ */ c(
  "div",
  {
    "aria-hidden": !0,
    className: "mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4",
    children: [
      /* @__PURE__ */ t(De, { mine: !1, widths: ["w-48", "w-32"] }),
      /* @__PURE__ */ t(De, { mine: !0, widths: ["w-56"] }),
      /* @__PURE__ */ t(De, { mine: !1, widths: ["w-40"] }),
      /* @__PURE__ */ t(De, { mine: !0, widths: ["w-44", "w-28"] }),
      /* @__PURE__ */ t(De, { mine: !1, widths: ["w-52", "w-36"] }),
      /* @__PURE__ */ t(De, { mine: !0, widths: ["w-36"] }),
      /* @__PURE__ */ t(De, { mine: !1, widths: ["w-44"] })
    ]
  }
), qa = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), Cc = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(Nc, {}) }), kc = () => {
  const e = Q();
  return /* @__PURE__ */ t(qa, { children: e.chat.error });
}, Ic = () => {
  const e = Q();
  return /* @__PURE__ */ t(qa, { children: e.chat.emptyConversation });
}, Je = (e) => e.dataTransfer?.types?.includes("Files"), Sc = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: a
}) => {
  const { channel: r, status: s, messages: i } = Ee(), { dropFiles: l } = Re(), o = _(0), [d, f] = R(!1);
  return /* @__PURE__ */ c(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (u) => {
        Je(u) && (u.preventDefault(), u.stopPropagation(), o.current++, f(!0));
      },
      onDragOver: (u) => {
        Je(u) && (u.preventDefault(), u.stopPropagation());
      },
      onDragLeave: (u) => {
        Je(u) && (u.preventDefault(), u.stopPropagation(), o.current--, o.current <= 0 && (o.current = 0, f(!1)));
      },
      onDrop: (u) => {
        if (!Je(u)) return;
        u.preventDefault(), u.stopPropagation(), o.current = 0, f(!1);
        const m = Array.from(u.dataTransfer.files);
        m.length > 0 && l(m);
      },
      children: [
        /* @__PURE__ */ t(
          Mo,
          {
            channel: r,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: a
          }
        ),
        s === "connecting" ? /* @__PURE__ */ t(Cc, {}) : s === "error" ? /* @__PURE__ */ t(kc, {}) : i.length === 0 ? /* @__PURE__ */ t(Ic, {}) : /* @__PURE__ */ t(yc, {}),
        /* @__PURE__ */ t(_o, {}),
        /* @__PURE__ */ t(zo, { visible: d })
      ]
    }
  );
}, Ou = (e) => /* @__PURE__ */ t(Oo, { children: /* @__PURE__ */ t(Sc, { ...e }) }), en = {
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
}, Fc = Fe({
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
      ...en
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Ac = be.forwardRef(function({ className: n, gap: a, children: r, tileSize: s, ...i }, l) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: l, ...i, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(Fc({ gap: a, tileSize: s }), n),
      ref: l,
      ...i,
      children: r
    }
  ) });
}), Tc = Fe({
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
}), Ya = ne(function({
  className: n,
  grow: a,
  basis: r,
  shrink: s,
  paddingX: i,
  paddingY: l,
  inline: o,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: p,
  width: h,
  ...x
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        Tc({
          paddingX: i,
          basis: r,
          paddingY: l,
          grow: a,
          shrink: s,
          inline: o,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: p,
          width: h
        }),
        n
      ),
      ref: v,
      ...x
    }
  );
}), Lc = Fe({
  base: "flex-row",
  variants: {
    gap: {
      ...en
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Rc = be.forwardRef(function({ className: n, gap: a, wrap: r, ...s }, i) {
  return /* @__PURE__ */ t(
    Ya,
    {
      className: b(Lc({ gap: a, wrap: r }), n),
      ref: i,
      ...s
    }
  );
}), Dc = Fe({
  base: "flex-col",
  variants: {
    gap: {
      ...en
    }
  },
  defaultVariants: {}
}), Oc = ne(function({ className: n, gap: a, children: r, ...s }, i) {
  return /* @__PURE__ */ t(
    Ya,
    {
      className: b(Dc({ gap: a }), n),
      ref: i,
      ...s,
      children: r
    }
  );
}), Pu = ke(
  {
    name: "Stack",
    type: "layout"
  },
  Oc
), Eu = ke(
  {
    name: "Split",
    type: "layout"
  },
  Rc
), _u = ke(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ac
), Pc = ({ children: e }) => {
  const { enabled: n } = ga();
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        ee.div,
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
}, Ec = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), _c = ne(function({ header: n, children: a, action: r, summaries: s, alert: i, status: l, fullHeight: o = !1 }, d) {
  const { enabled: f, toggle: u } = ga();
  H(() => {
    if (i && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, l]);
  const m = (h) => !!h && !(be.isValidElement(h) && h.type === be.Fragment && be.Children.count(h.props.children) === 0), p = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ c(
    Wt,
    {
      className: b(
        o ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Ut, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ c("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ c("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Ht, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Ec, {}),
                /* @__PURE__ */ t(ca, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Ae, { label: n.info, children: /* @__PURE__ */ t(
                Y,
                {
                  icon: da,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(dt, { value: n.count }) })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ t(ua, { text: i, level: "critical" }),
              l && /* @__PURE__ */ t(tt, { text: l.text, variant: l.variant }),
              n.link && /* @__PURE__ */ t(
                Ms,
                {
                  onClick: p,
                  href: n.link.url,
                  title: n.link.title,
                  icon: n.link.icon
                }
              )
            ] })
          ] }),
          n.comment && /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ t(Pc, { children: /* @__PURE__ */ t(js, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              te,
              {
                icon: f ? Ws : Us,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ c(Vt, { className: "flex h-full flex-col gap-4", children: [
          s && /* @__PURE__ */ t("div", { className: "flex flex-row", children: s.map((h, x) => /* @__PURE__ */ c("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: h.label }),
            /* @__PURE__ */ c("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!h.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.prefixUnit }),
              h.value,
              !!h.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.postfixUnit })
            ] })
          ] }, x)) }),
          be.Children.toArray(a).filter(m).map((h, x) => /* @__PURE__ */ c(be.Fragment, { children: [
            x > 0 && /* @__PURE__ */ t(gi, { bare: !0 }),
            h
          ] }, x))
        ] }),
        r && /* @__PURE__ */ t(Hs, { children: /* @__PURE__ */ t(te, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), zc = Fe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Bc = ne(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ c(
      Wt,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Ut, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ c(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Ht, { children: n.title }) : /* @__PURE__ */ t(W, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(ca, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Vt,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && zc({ height: a })),
              children: [...Array(4)].map((s, i) => /* @__PURE__ */ t(
                W,
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
), ze = ue(
  se("Widget", de(_c, Bc))
), ve = Object.assign(
  ne(function({ chart: n, summaries: a, ...r }, s) {
    return /* @__PURE__ */ t(ze, { ref: s, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), $c = de(
  ne(function({ canBeBlurred: n, ...a }, r) {
    const s = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, i = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      ve,
      {
        ref: r,
        ...s,
        chart: /* @__PURE__ */ t(bi, { ...i, canBeBlurred: n })
      }
    );
  }),
  ve.Skeleton
), Mc = se(
  "AreaChartWidget",
  $c
), jc = ne(function(n, a) {
  return /* @__PURE__ */ t(
    ve,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(xi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Wc = se(
  "BarChartWidget",
  de(jc, ve.Skeleton)
), Uc = de(
  ne(
    function(n, a) {
      return /* @__PURE__ */ t(
        ve,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(vi, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ve.Skeleton
), Hc = se(
  "LineChartWidget",
  Uc
), Vc = de(
  ne(
    function(n, a) {
      return /* @__PURE__ */ t(
        ve,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(yi, { ...n.chart })
        }
      );
    }
  ),
  ve.Skeleton
), Gc = se(
  "PieChartWidget",
  Vc
), Kc = de(
  ne(
    function(n, a) {
      return /* @__PURE__ */ t(ve, { ref: a, ...n, chart: null });
    }
  ),
  ve.Skeleton
), qc = se(
  "SummariesWidget",
  Kc
), Yc = de(
  ne(
    function(n, a) {
      return /* @__PURE__ */ t(
        ve,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(wi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ve.Skeleton
), Qc = se(
  "VerticalBarChartWidget",
  Yc
), zu = ke(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Mc
), Bu = ke(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Wc
), $u = ke(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Hc
), Mu = ke(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Gc
), ju = ke(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Qc
), Wu = ke(
  {
    name: "SummariesWidget",
    type: "info"
  },
  qc
), Jc = (e, n) => /* @__PURE__ */ c(
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
      /* @__PURE__ */ c("defs", { children: [
        /* @__PURE__ */ c(
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
        /* @__PURE__ */ c(
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
        /* @__PURE__ */ c(
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
        /* @__PURE__ */ c(
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
        /* @__PURE__ */ c(
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
), Xc = ne(Jc), Zc = (e, n) => /* @__PURE__ */ c(
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
      /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ c(
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
), ed = ne(Zc), td = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, nd = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, ad = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, rd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, sd = ne(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: s, buttonAction: i, type: l }, o) {
    const d = td[l], f = nd[l], u = ad[l], m = rd[l];
    return /* @__PURE__ */ c(
      Wt,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: o,
        children: [
          /* @__PURE__ */ t(Ut, { className: "-mt-0.5", children: /* @__PURE__ */ t(Ht, { children: n }) }),
          /* @__PURE__ */ c(Vt, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Xc, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(ed, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                te,
                {
                  label: r,
                  icon: s,
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
), Uu = ue(
  se("ChartWidgetEmptyState", sd)
);
function id(e, n) {
  const a = _(null), r = _(null), [s, i] = R({
    visibleItems: [],
    overflowItems: []
  });
  Vs({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const l = G(
    (u, m, p) => m < p - 1 ? u + n : u,
    [n]
  ), o = G(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let p = 0; p < u.length; p++) {
      const h = u[p].getBoundingClientRect().height;
      m.push(h);
    }
    return m;
  }, []), d = G(
    (u, m) => {
      let p = 0, h = 0;
      for (let x = 0; x < u.length; x++) {
        const v = h + u[x];
        if (v > m + 30) break;
        h = v, h = l(
          h,
          x,
          u.length
        ), p++;
      }
      return p;
    },
    [l]
  ), f = G(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = o(), p = d(
      m,
      u
    );
    i(p === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (h) => h.visibleItems.length === p && h.overflowItems.length === e.length - p ? h : {
      visibleItems: e.slice(0, p),
      overflowItems: e.slice(p)
    });
  }, [e, o, d]);
  return H(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: s.visibleItems,
    overflowItems: s.overflowItems
  };
}
const pt = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: s = 0,
  minSize: i,
  onVisibleItemsChange: l
}) {
  const { containerRef: o, measurementContainerRef: d, visibleItems: f } = id(n, s);
  return H(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ c(
    "div",
    {
      ref: o,
      className: b("relative flex h-full flex-col", r),
      style: {
        minHeight: `${i}px`
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: d,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${s}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${s}px` },
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
pt.displayName = "VerticalOverflowList";
const Hu = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((s) => /* @__PURE__ */ t(Dt, { ...s }, s.title)) }) : /* @__PURE__ */ t(
  pt,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (s) => /* @__PURE__ */ t(Dt, { ...s }, s.title)
  }
) : null, ld = ({ onClick: e, children: n }) => {
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
function Vu({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: s
}) {
  return /* @__PURE__ */ t(ld, { onClick: s, children: /* @__PURE__ */ c(
    "div",
    {
      className: b(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        s && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(Y, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const od = ne(
  function({ content: n, label: a, color: r, ...s }, i) {
    return /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", ref: i, children: [
      /* @__PURE__ */ t("p", { className: "text-3xl font-semibold", children: n }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: a,
            children: a
          }
        ),
        "icon" in s && s.icon && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(Y, { icon: s.icon }) }),
        "emoji" in s && s.emoji && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(Me, { emoji: s.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Gu = ne(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: s, color: i, ...l }) => /* @__PURE__ */ t(
          od,
          {
            label: r,
            content: s,
            color: i,
            ...l
          },
          `${r}-${s}`
        ))
      }
    );
  }
), cd = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const s = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: s, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: s, children: r });
};
function Ku({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: s,
  withPointerCursor: i = !1,
  onClick: l,
  ...o
}) {
  return /* @__PURE__ */ c(
    cd,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in o && !!o.emoji,
      withPointerCursor: i,
      children: [
        "alert" in o && o.alert && /* @__PURE__ */ t(Gs, { type: o.alert }),
        "emoji" in o && o.emoji && /* @__PURE__ */ t(Ks, { emoji: o.emoji }),
        /* @__PURE__ */ c("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Mt,
          {
            avatars: r,
            remainingCount: s,
            size: "emoji" in o && o.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const dd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function _n({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: s
}) {
  const i = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ c(dd, { onClick: (o) => {
    o.preventDefault(), r?.(e);
  }, className: i, children: [
    /* @__PURE__ */ t(aa, { module: s ?? "inbox", size: "sm" }),
    /* @__PURE__ */ c("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const ud = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Ot({
  id: e,
  title: n,
  alert: a,
  rawTag: r,
  count: s,
  icon: i,
  rightIcon: l,
  iconClassName: o = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ c(ud, { onClick: (p) => {
    p.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ t(
        Y,
        {
          icon: i,
          size: "md",
          className: b("mt-0.5", o)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        Y,
        {
          icon: l,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(ua, { ...a }),
      r && /* @__PURE__ */ t($e, { ...r }),
      !!s && /* @__PURE__ */ t(dt, { value: s })
    ] })
  ] });
}
function qu({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: s
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((i) => /* @__PURE__ */ t(_n, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ t(
    pt,
    {
      items: e,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ t(_n, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: s,
      gap: 8
    }
  );
}
function Yu({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: s
}) {
  return s ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((i) => /* @__PURE__ */ t(Ot, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ t(
    pt,
    {
      items: e,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ t(Ot, { ...i, onClick: r }),
      minSize: a
    }
  );
}
const fd = ({ title: e, info: n }) => /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Qu = ne(
  function({ title: n, titleValue: a, titleTooltip: r, list: s }, i) {
    return /* @__PURE__ */ c("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            Ae,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(Y, { icon: da, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      s.map((l) => /* @__PURE__ */ t(fd, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function Ju({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: s = !1,
  hideTooltip: i = !1
}) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      Ni,
      {
        data: a,
        legend: s,
        hideTooltip: i
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: s ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: b(
          "text-f1-foreground",
          s ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const Qa = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, md = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: s = !0
}) => {
  const l = e[e.length - 1]?.variant || "clocked-out", o = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[l], d = (() => {
    if (!s || r === void 0) return;
    const u = Qa(
      a,
      r
    ), m = Math.abs(u), p = Math.floor(m / 60), h = Math.floor(m % 60), x = `${p.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${x}` : `${n.overtime} ${x}`;
  })(), f = Oe[l];
  return {
    status: l,
    statusText: o,
    subtitle: d,
    statusColor: f
  };
}, Nt = "--:--", hd = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: Oe.empty
    };
  if (!n)
    return {
      value: 1,
      color: Oe.empty
    };
}, pd = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, s = Qa(
    n,
    a
  ), i = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (s ?? 0) * 60, l = r || (s ?? 0) < 0 ? void 0 : hd(
    s ?? 0,
    i
  );
  let o = (s ?? 0) < 0 ? Math.abs(s ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, h = m.variant === "clocked-in" ? Math.min(p, o) : 0, v = (p - h) / i;
        return o -= h, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: h / i + v,
            color: Oe.overtime
          }
        ] : [
          ...u,
          {
            value: h / i,
            color: Oe.overtime
          },
          {
            value: v,
            color: Oe[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...l ? [l] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: Oe.empty
  }), f;
}, gd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((p) => p.variant === "clocked-in")?.from, s = e.at(-1), i = r ? an(r) : Nt, l = n === void 0 || n > 0 ? Nt : s ? an(s.to) : Nt, d = s?.variant === "break" ? s?.to.getTime() - s?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: i,
    secondaryLabel: l,
    time: m
  };
}, Oe = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function bd({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = pd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: s, secondaryLabel: i, time: l } = gd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ c("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ci, { width: 156, height: 156, children: /* @__PURE__ */ t(
      ki,
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
        children: r.map((o, d) => /* @__PURE__ */ t(
          qs,
          {
            fill: o.color,
            role: "presentation",
            "aria-label": `${o.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: l }) }),
    /* @__PURE__ */ c("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: s }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: i })
    ] })
  ] });
}
function xd({
  text: e,
  placeholder: n,
  icon: a,
  onClick: r
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
      onClick: r,
      children: [
        a && /* @__PURE__ */ t(Y, { icon: a, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(Y, { icon: Ys })
      ]
    }
  );
}
function Xu({
  trackedMinutes: e,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: s,
  locations: i,
  canShowLocation: l = !0,
  locationSelectorDisabled: o = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: p,
  canShowBreakButton: h = !0,
  canSeeGraph: x = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: T = !0,
  projectSelectorElement: L,
  breakTypeName: E
}) {
  const { status: D, statusText: O, subtitle: I, statusColor: j } = md({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), B = D === "clocked-out", w = m?.map(($) => ({
    value: $.id,
    label: $.duration ? `${$.name} · ${$.duration}` : $.name,
    description: $.description,
    tag: $.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, A] = R(!1), k = () => {
    if (w.length > 1)
      S || A(!0);
    else {
      const $ = w?.[0]?.value;
      u?.($);
    }
  }, z = ($) => {
    p?.($), A(!1), u?.($);
  }, g = B && i.length && !o && l, N = i.find(($) => $.id === s), C = i.map(($) => ({
    value: $.id,
    label: $.name,
    icon: $.icon
  })), F = D === "break", [q, K] = R(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ c("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ c("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: O }),
            /* @__PURE__ */ c("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                ee.div,
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
              /* @__PURE__ */ t(
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
          I && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: I })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            te,
            {
              onClick: d,
              label: r.clockIn,
              icon: rn
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ c(ae, { children: [
            h && /* @__PURE__ */ t(ae, { children: w.length > 1 && p ? /* @__PURE__ */ t(
              nt,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: z,
                open: S,
                onOpenChange: A,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  te,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: sn,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              te,
              {
                onClick: k,
                label: r.break,
                variant: "neutral",
                icon: sn,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              te,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: ln
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ c(ae, { children: [
            /* @__PURE__ */ t(
              te,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: ln,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              te,
              {
                onClick: d,
                label: r.resume,
                icon: rn
              }
            )
          ] })
        ] })
      ] }),
      x && /* @__PURE__ */ t(
        bd,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: g ? /* @__PURE__ */ c(ae, { children: [
      /* @__PURE__ */ t(
        nt,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: s,
          options: C,
          onChange: y,
          open: q,
          onOpenChange: K,
          disabled: o,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            xd,
            {
              text: N?.name,
              placeholder: r.selectLocation,
              icon: N?.icon
            }
          ) })
        }
      ),
      T && L
    ] }) : /* @__PURE__ */ c(ae, { children: [
      l && N && /* @__PURE__ */ t(ae, { children: /* @__PURE__ */ t($e, { text: N.name, icon: N.icon }) }),
      T && L,
      F && E && /* @__PURE__ */ t($e, { text: E })
    ] }) })
  ] }) });
}
const vd = {
  done: Xs,
  "in-progress": Js,
  todo: Qs
}, yd = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function wd({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const s = () => {
    a?.(e);
  }, i = Z(() => {
    if (!r)
      return vd[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Ot,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: yd[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Zs
      } : void 0,
      count: e.counter,
      onClick: s
    }
  );
}
function Zu({
  tasks: e,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: s = "No tasks assigned"
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
    ).map(({ id: u, text: m, badge: p, counter: h }) => ({
      id: u,
      text: m,
      badge: p,
      counter: h,
      status: f
    }))
  ), o = !l.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: o ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: s }) : l.slice(0, r).map((d) => /* @__PURE__ */ t(
    wd,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Nd = Object.defineProperty, Cd = Object.defineProperties, kd = Object.getOwnPropertyDescriptors, lt = Object.getOwnPropertySymbols, Ja = Object.prototype.hasOwnProperty, Xa = Object.prototype.propertyIsEnumerable, zn = (e, n, a) => n in e ? Nd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, xe = (e, n) => {
  for (var a in n || (n = {})) Ja.call(n, a) && zn(e, a, n[a]);
  if (lt) for (var a of lt(n)) Xa.call(n, a) && zn(e, a, n[a]);
  return e;
}, gt = (e, n) => Cd(e, kd(n)), Id = (e, n) => {
  var a = {};
  for (var r in e) Ja.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && lt) for (var r of lt(e)) n.indexOf(r) < 0 && Xa.call(e, r) && (a[r] = e[r]);
  return a;
}, Sd = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Fd = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Ad = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = xe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, Td = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = xe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Ld = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let s = xe({}, r);
  return s.left = n.left + e.width, Sd(s) || Fd({ usedSpot: s, spotsList: a }) ? null : s;
}, Rd = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((s, i, l) => {
  if (s === a) return Ld({ stone: r, position: n, optimalSpot: a, spotsList: l });
  let o = Ad({ position: n, spot: s, stone: r });
  return o || Td({ position: n, stone: r, spot: s }) || s;
});
function Dd(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let s = n[a];
    if (e(s)) return s;
  }
  return null;
}
var Od = (e, n) => n.filter(e), Pd = (e, n) => [...n].sort(e), Ed = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, _d = (e) => Pd(Ed, e), zd = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let s = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (s.bottom = n.bottom);
  for (let i = 0, l = e.length; i < l; i += 1) {
    let o = e[i];
    if (s.left < o.left && s.top < o.top) {
      s.right = o.left;
      break;
    }
  }
  return s;
}, Bd = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, $d = ({ availableSpots: e, stone: n }) => Dd((a) => Bd(a, n), e);
function Md({ stone: e, availableSpots: n, containerSize: a }) {
  let r = $d({ availableSpots: n, stone: e }), s = { left: r.left, top: r.top }, i = zd({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), l = [...n, i], o = Rd({ spots: l, position: s, optimalSpot: r, stone: e });
  return l = [...Od(Boolean, o)], l = _d(l), { position: s, availableSpots: l };
}
var jd = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, s = [], i = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let o = Md({ availableSpots: i, stone: l, containerSize: n }), d = o.position.top + l.height;
    r < d && (r = d), s.push(o.position), i = o.availableSpots;
  }
  return { availableSpots: i, positions: s, containerHeight: r };
}, Wd = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), Ud = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: s }) => {
  let [{ positions: i, containerHeight: l, stones: o, availableSpots: d }, f] = R({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return H(() => {
    var u, m;
    let p = Wd(e.current), h = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (h === null) return;
    let x = jd({ stones: p, containerSize: h });
    f(gt(xe({}, x), { stones: p }));
  }, [a, e, n, r, s]), { positions: i, containerHeight: l, stones: o, availableSpots: d };
}, Hd = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Vd = ({ transition: e, transitionDuration: n }) => e ? { transition: Hd(n)[e] } : null, Gd = (e) => e ? gt(xe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Kd = ({ style: e, position: n, transition: a, transitionDuration: r }) => xe(xe(gt(xe({}, e), { position: "absolute" }), Gd(n)), Vd({ transition: a, transitionDuration: r }));
function qd(e, n, a) {
  let r;
  return function(...s) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, s);
    }, n);
  };
}
var Yd = () => {
  let [e, n] = R(), a = _(qd(n, 300));
  return H(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, Qd = (e) => {
  let [n, a] = R(null);
  return H(() => {
    let r = new ResizeObserver((s) => {
      for (let i of s) a(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, Jd = (e) => {
  var n = e, { children: a, style: r, transition: s = !1, transitionDuration: i = 500, transitionStep: l = 50 } = n, o = Id(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = _([]), f = _(null), u = Yd(), m = Qd(f), { positions: p, containerHeight: h } = Ud({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), x = xe({ minHeight: h ?? 0, position: "relative" }, r);
  return t("div", gt(xe({ ref: f, style: x }, o), { children: ha.map(a, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let T = { style: Kd({ style: v.props.style, position: p[y], transition: s, transitionDuration: i }), ref: (L) => d.current[y] = L };
    return ma(v, xe(xe({}, v.props), T));
  }) }));
};
const Xd = { sm: 340, md: 480, lg: 640 }, Bn = ne(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const s = Xd[a], [i, l] = R(), o = ha.toArray(n), d = _(null);
    return H(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && l(Math.floor(u / s) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, s]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: i === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Jd, { children: o.map((f, u) => /* @__PURE__ */ t(
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
), Zd = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], ef = de(Bn, () => /* @__PURE__ */ t(fa, { children: /* @__PURE__ */ t(Bn, { children: Zd.map((e, n) => /* @__PURE__ */ t(ze.Skeleton, { height: e }, n)) }) })), $n = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), tf = de(
  ne(function({ children: n }, a) {
    return /* @__PURE__ */ t(ct, { ref: a, showBar: !1, children: /* @__PURE__ */ t($n, { children: n }) });
  }),
  () => /* @__PURE__ */ t(fa, { orientation: "horizontal", children: /* @__PURE__ */ c($n, { children: [
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {})
  ] }) })
);
function eu({
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
    Ii,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const nf = ue(
  se("WidgetEmptyState", eu)
), Za = ne(
  ({ title: e, children: n }, a) => (ei(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ c("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
Za.displayName = "WidgetSection";
const af = ue(
  se("WidgetSection", Za)
), rf = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const s = ti(), i = window.location.pathname, l = Z(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), o = Z(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return l ? r : (s && console.error(o), null);
}, sf = ue(
  ke(
    {
      name: "ScrollArea",
      type: "layout"
    },
    ct
  )
);
export {
  fu as ActivityItemList,
  Al as ActivityItemListSkeleton,
  tl as AiPromotionChat,
  nl as AiPromotionChatProvider,
  bu as ApplicationFrame,
  Bf as AreaChart,
  zu as AreaChartWidget,
  _u as AutoGrid,
  cs as Badge,
  $f as BarChart,
  Bu as BarChartWidget,
  Fl as BaseActivityItemList,
  Mf as BaseBanner,
  Ol as BaseCelebration,
  Wl as BaseCommunityPost,
  cf as BaseTabs,
  df as BreadcrumbSelect,
  Ri as Breadcrumbs,
  Dt as CalendarEvent,
  Hu as CalendarEventList,
  jf as CardSelectableContainer,
  ii as Carousel,
  Wf as CategoryBarChart,
  Ju as CategoryBarSection,
  mu as Celebration,
  Pl as CelebrationSkeleton,
  Uu as ChartWidgetEmptyState,
  uf as Chip,
  Xu as ClockInControls,
  Uf as ComboChart,
  pu as CommunityPost,
  Ul as CommunityPostSkeleton,
  uo as CompanySelector,
  dt as Counter,
  ef as Dashboard,
  xu as DaytimePage,
  ff as DetailsItem,
  mf as DetailsItemsList,
  Hf as Dialog,
  Be as Dropdown,
  uu as EntitySelect,
  Vf as F0ActionBar,
  Gf as F0AiBanner,
  aa as F0AvatarModule,
  hf as F0ButtonToggle,
  ou as F0Callout,
  pf as F0CardHorizontal,
  Ou as F0Chat,
  Du as F0ChatProvider,
  oa as F0FileItem,
  Kf as F0NotesTextEditor,
  qf as F0NotesTextEditorSkeleton,
  Yf as F0NumberInput,
  qr as F0RichTextDisplay,
  Qf as F0RichTextEditor,
  ks as F0SearchInput,
  cu as F0SegmentedBar,
  Jf as F0SegmentedControl,
  Xf as F0TableOfContent,
  Zf as F0TextAreaInput,
  gf as F0TextInput,
  du as F0VersionHistory,
  em as F1SearchBox,
  tm as FILE_TYPES,
  bf as FileItem,
  hu as HighlightBanner,
  Gu as IndicatorsList,
  nm as Input,
  am as Item,
  rm as ItemSectionHeader,
  jo as LATEST,
  sm as LineChart,
  $u as LineChartWidget,
  Su as Menu,
  xf as MobileDropdown,
  im as NotesTextEditor,
  lm as NotesTextEditorSkeleton,
  om as NumberInput,
  vu as OmniButton,
  Lu as OneApprovalHistory,
  vf as OneCalendar,
  yf as OneCalendarInternal,
  cm as OneDataCollection,
  dm as OneDateNavigator,
  Ii as OneEmptyState,
  um as OnePagination,
  gu as OnePersonListItem,
  rf as OneRestrictComponent,
  yu as Page,
  lu as PageHeader,
  qt as PageHeaderNavigationContext,
  su as PageHeaderNavigationProvider,
  Bi as PageNavigation,
  fm as PieChart,
  Mu as PieChartWidget,
  Pc as PrivateBox,
  mm as ProgressBarChart,
  hm as RadarChart,
  _l as Reactions,
  pm as ResourceHeader,
  wf as RichTextDisplay,
  gm as RichTextEditor,
  sf as ScrollArea,
  Fu as SearchBar,
  bm as SectionHeader,
  nt as Select,
  fs as Shortcut,
  Au as Sidebar,
  lo as SidebarChatItem,
  ja as SidebarChatItemSkeleton,
  Cu as SidebarChatList,
  ro as SidebarChatListSkeleton,
  wu as SidebarChatProvider,
  Qt as SidebarCollapsibleSection,
  ku as SidebarFooter,
  Iu as SidebarHeader,
  Tu as SidebarTabs,
  Et as Spinner,
  Eu as Split,
  Pu as Stack,
  Wu as SummariesWidget,
  Nf as Switch,
  Cf as Tabs,
  kf as TabsSkeleton,
  Zu as TasksList,
  xm as Textarea,
  If as ToggleGroup,
  Sf as ToggleGroupItem,
  Ae as Tooltip,
  Qu as TwoColumnsList,
  vm as UPLOAD_INPUT_ID,
  ym as VerticalBarChart,
  ju as VerticalBarChartWidget,
  Tt as VirtualList,
  Ff as WeekStartDay,
  Af as Weekdays,
  ze as Widget,
  Ku as WidgetAvatarsListItem,
  nf as WidgetEmptyState,
  Vu as WidgetHighlightButton,
  qu as WidgetInboxList,
  _n as WidgetInboxListItem,
  af as WidgetSection,
  Yu as WidgetSimpleList,
  Ot as WidgetSimpleListItem,
  tf as WidgetStrip,
  wm as actionBarStatuses,
  Nm as buttonToggleSizes,
  Cm as buttonToggleVariants,
  Tf as chipVariants,
  km as downloadAsCSV,
  Lf as f0FileItemSizes,
  Im as generateCSVContent,
  Rf as getGranularityDefinition,
  Df as getGranularityDefinitions,
  Of as getGranularitySimpleDefinition,
  Pf as granularityDefinitions,
  Ef as modules,
  Sm as predefinedPresets,
  _f as rangeSeparator,
  Dn as seedFromStorage,
  Fm as selectSizes,
  ft as useAiPromotionChat,
  Am as useDataCollectionData,
  Ru as useDataCollectionItemNavigation,
  fi as useDataCollectionSource,
  Tm as useExportAction,
  Ee as useF0Chat,
  Lm as useInfiniteScrollPagination,
  Ki as usePageHeaderItemNavigation,
  iu as usePageHeaderNavigation,
  je as useSidebar,
  Nu as useSidebarChatActions,
  no as useSidebarChats
};
