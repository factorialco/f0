import { h as tr, B as nr, i as ar, j as rr, k as tn, l as Ve, m as We, n as sr, o as g, p as X, q as Fe, u as q, T as ir, r as lr, s as or, R as cr, t as dr, v as oe, w as ur, x as Ot, y as Nt, z as Ze, A as Ie, E as fr, G as mr, H as V, J as Mn, K as it, L as ne, M as hr, N as pr, O as jn, Q as gr, S as br, U as Z, V as $, W as Pe, X as xr, Y as vr, Z as yr, _ as wr, $ as Nr, a0 as we, a1 as Wn, a2 as Ae, a3 as et, e as Un, a4 as Be, a5 as Hn, a6 as Pt, a7 as ue, a8 as re, a9 as Et, aa as Vn, ab as Cr, ac as Gn, ad as ge, ae as ce, af as kr, ag as Ir, ah as Sr, ai as Fr, aj as Ar, ak as Se, al as lt, am as Kn, an as Tr, ao as Lr, ap as Rr, aq as ot, ar as qn, as as Yn, at as Dr, au as Or, av as tt, aw as Pr, ax as Qn, ay as Er, az as _r, aA as zr, aB as Br, aC as $r, aD as Jn, aE as Xn, aF as Zn, aG as Ct, aH as ea, aI as kt, aJ as ta, aK as Mr, aL as jr, aM as Wr, aN as na, aO as Ur, aP as Te, aQ as ct, aR as It, aS as aa, aT as Hr, aU as _t, aV as Vr, aW as Gr, aX as Kr, aY as $e, aZ as qr, a_ as Yr, a$ as Ge, b0 as nn, b1 as St, b2 as Qr, b3 as Jr, a as Xr, b as Zr, b4 as ra, b5 as es, g as ts, F as ns, b6 as as, b7 as sa, b8 as rs, b9 as zt, ba as ss, bb as He, bc as is, bd as ls, be as ia, bf as os, bg as cs, bh as ds, bi as la, bj as Bt, bk as us, bl as fs, bm as ms, bn as $t, bo as hs, bp as ps, bq as gs, br as bs, bs as Mt, bt as xs, bu as oa, bv as vs, bw as ys, bx as ws, by as Ns, bz as Cs, bA as ks, bB as Is, bC as Ss, bD as Fs, bE as As, bF as Ts, bG as Ls, bH as Rs, bI as Ds, bJ as Os, bK as Ps, bL as Es, bM as _s, bN as zs, bO as Ce, bP as jt, bQ as Wt, bR as Ut, bS as ca, bT as Ht, bU as da, bV as ua, bW as Bs, bX as $s, bY as Ms, bZ as js, b_ as Ws, b$ as Us, c0 as Hs, c1 as Vs, c2 as an, c3 as Gs, c4 as Ks, c5 as rn, c6 as sn, c7 as ln, c8 as qs, c9 as Ys, ca as Qs, cb as Js, cc as fa, cd as Xs, ce as Zs } from "./F0CanvasPanel-BbTSm0Wd.js";
import { cq as lf, cp as of, cC as cf, cm as df, cn as uf, cf as ff, cg as mf, ch as hf, cF as pf, co as gf, cy as bf, cz as xf, cD as vf, ci as yf, cs as wf, cr as Nf, cj as Cf, ck as kf, cA as If, cG as Sf, cB as Ff, cE as Af, cx as Tf, cu as Lf, cw as Rf, ct as Df, cl as Of, cv as Pf } from "./F0CanvasPanel-BbTSm0Wd.js";
import { jsx as t, jsxs as c, Fragment as te } from "react/jsx-runtime";
import xe, { forwardRef as ee, useRef as z, useTransition as ei, useState as O, useLayoutEffect as Vt, useId as Ft, useContext as ke, createContext as Le, useEffect as j, useCallback as H, useMemo as Y, Fragment as ti, isValidElement as ni, cloneElement as ma, memo as ai, Children as ha } from "react";
import { C as ri, P as si, a as dt, M as ii, p as li, b as oi, R as on, c as pa, u as ci, d as di, e as ui, f as fi, g as mi, h as ga, S as hi, A as pi, B as gi, L as bi, i as xi, V as vi, j as yi, k as wi, l as Ni, O as Ci } from "./useDataCollectionSource-D4Pb8IWO.js";
import { r as _f, s as zf, o as Bf, H as $f, t as Mf, z as jf, a8 as Wf, G as Uf, q as Hf, aa as Vf, a9 as Gf, Q as Kf, ad as qf, F as Yf, Y as Qf, U as Jf, J as Xf, af as Zf, K as em, Z as tm, _ as nm, v as am, ab as rm, ac as sm, N as im, $ as lm, a5 as om, a7 as cm, w as dm, y as um, D as fm, W as mm, ae as hm, X as pm, T as gm, ag as bm, x as xm, E as vm, m as ym, n as wm, a1 as Nm, a2 as Cm, a6 as km, I as Im, a3 as Sm, a0 as Fm, a4 as Am } from "./useDataCollectionSource-D4Pb8IWO.js";
const ki = tr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ba = ee(({ className: e, items: n }, a) => /* @__PURE__ */ t(nr, { ref: a, className: e, children: /* @__PURE__ */ c("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(ar, {}),
  /* @__PURE__ */ t(rr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
ba.displayName = "CollapsedBreadcrumbItem";
const Gt = 50, Ii = 120, nt = 8;
function Si(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let s = e - r - nt, i = 0, l = 1;
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
      return e[0] + nt;
    default:
      return e[0] + Gt + e[e.length - 1] + nt;
  }
}
function Fi(e, n) {
  return Ii * e + (n ? Gt : 0) + nt;
}
function Ai(e, n, a = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Fi(
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
  const i = Si(e, s);
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
function Ti({ breadcrumbs: e, append: n }) {
  const a = z(null), r = z(null), [, s] = ei(), [i, l] = O(null), o = (i?.collapsedItems || []).length > 0;
  return Vt(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, p = Array.from(f.children);
      s(() => {
        const x = Ai(
          h,
          e,
          p
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
              Ve,
              {
                item: d,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              We(d)
            ))
          }
        ),
        i && i.headItem && /* @__PURE__ */ c(sr, { children: [
          /* @__PURE__ */ t(
            Ve,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${We(i.headItem)}`
          ),
          o && /* @__PURE__ */ c(te, { children: [
            /* @__PURE__ */ t(
              ba,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ t(
              Ve,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              We(d)
            ))
          ] }),
          !o && /* @__PURE__ */ t(te, { children: i.tailItems.map((d, f) => /* @__PURE__ */ t(
            Ve,
            {
              item: d,
              isLast: f === i.tailItems.length - 1,
              isFirst: !1,
              children: f === i.tailItems.length - 1 ? n : void 0
            },
            We(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${We(e.at(-1)) ?? 0}`
  );
}
const Li = Fe({
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
], Ri = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...s
}, i) => {
  const l = Ft(), {
    onAnimationStart: o,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...p
  } = s;
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(Li({ size: n }), h),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ c(
        X.svg,
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
            ...p.style
          },
          ...(({ style: x, ...v }) => v)(p),
          children: [
            /* @__PURE__ */ c("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              dn.map((x) => /* @__PURE__ */ t("clipPath", { id: `${l}-${x.id}`, children: /* @__PURE__ */ t("path", { d: x.path }) }, x.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: dn.map((x) => /* @__PURE__ */ t(
              X.foreignObject,
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
}, xa = ee(Ri), va = Le(null), Di = 15, Oi = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [s, i] = O(n), [l, o] = O(!1), [d, f] = O(!0), [u, m] = O(
    Di
  ), h = z(null), p = (v) => {
    h.current = v;
  }, x = () => {
    h.current && h.current();
  };
  return j(() => {
    i(n);
  }, [n]), j(() => {
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
        setClearFunction: p
      },
      children: e
    }
  );
}, _e = () => {
};
function ut() {
  const e = ke(va);
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
  const { enabled: a, setOpen: r, open: s } = ut(), i = q(), [l, o] = O(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(ir, { children: /* @__PURE__ */ c(lr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(or, { asChild: !0, children: /* @__PURE__ */ t(
      X.div,
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
          cr,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: s,
            "aria-label": s ? i.ai.closeChat : i.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              oe(),
              e
            ),
            disabled: n,
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: /* @__PURE__ */ t(
              dr,
              {
                className: g(
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
    !s && /* @__PURE__ */ t(ur, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, un = "one_sidebar_locked", wa = Le(void 0);
function Me() {
  const e = ke(wa);
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
function Pi({ children: e }) {
  const { currentPath: n } = Ot(), [a, r] = O(!1), [s, i] = O(!1), l = a ? Ze.xl : Ze.md, o = Nt(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = O(() => {
    const L = localStorage.getItem(un);
    return L !== null ? !!L : !0;
  }), [u, m] = O(!1), [h, p] = O(
    null
  ), x = H(
    ({ isInvokedByUser: L } = {
      isInvokedByUser: !0
    }) => {
      i(L ?? !0), o && m(!u), f(!d);
    },
    [o, u, d, f, m]
  ), v = H(
    (L) => {
      o || (L.clientX < 32 && m(!0), L.clientX > 280 && m(!1));
    },
    [o, m]
  ), y = Y(() => o ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [o, u, d]);
  return j(() => {
    m(!1);
  }, [n]), j(() => {
    s && localStorage.setItem(un, d ? "1" : "");
  }, [d, s]), j(() => () => {
    p(y);
  }, [y]), /* @__PURE__ */ t(
    wa.Provider,
    {
      value: {
        isSmallScreen: o,
        isLastToggleInvokedByUser: s,
        sidebarState: y,
        toggleSidebar: x,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const fn = X.create(V), mn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Ei = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, s] = O(!1), i = () => {
    s(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ie, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        oe()
      ),
      onClick: i,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        fn,
        {
          size: "sm",
          icon: fr,
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
          icon: mr,
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
    ne,
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
function _i({ previous: e, next: n, counter: a }) {
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
          icon: it,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const zi = ({
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
  const [m, h] = O("idle"), [p, x] = O(null), [v, ...y] = p ?? [], [L, R] = O(!1);
  j(() => {
    x(null), h("idle");
  }, [e]);
  const _ = H(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), x(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ c(
    hr,
    {
      open: L,
      onOpenChange: async (D) => {
        R(D), D && p === null && _(), l(D);
      },
      children: [
        /* @__PURE__ */ t(pr, { asChild: !0, children: /* @__PURE__ */ t(
          ne,
          {
            variant: "outline",
            icon: jn,
            hideLabel: !0,
            label: n,
            pressed: L,
            append: f && /* @__PURE__ */ t(Kt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(gr, { children: /* @__PURE__ */ c(
          br,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Mi, { title: n, url: r, onClick: o }),
              m === "fetching" && /* @__PURE__ */ t(Ui, {}),
              /* @__PURE__ */ c("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(ji, { ...s, buttonUrl: r }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ c("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Bi,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((D, P) => /* @__PURE__ */ t(
                    $i,
                    {
                      ...D,
                      onClick: d
                    },
                    P
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Wi,
                  {
                    ...i,
                    onClick: () => {
                      _();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Hi,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => R(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Bi = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: s,
  onClick: i
}) => {
  const l = "flex flex-col items-stretch w-full", o = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    xr,
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
          className: g(l, "text-f1-foreground no-underline"),
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
              vr,
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
}, $i = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: s
}) => {
  const i = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(yr, { asChild: !0, className: i, onClick: s, children: /* @__PURE__ */ t(
    Pe,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: g(
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
}, Mi = ({
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
        Z,
        {
          variant: "outline",
          size: "sm",
          icon: it,
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
      className: g(
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
] }) }), ji = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Na,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(V, { icon: jn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Pe, { href: a, children: /* @__PURE__ */ t(Z, { label: n }) })
  }
), Wi = ({
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
    icon: /* @__PURE__ */ t(V, { icon: wr, size: "lg" }),
    button: /* @__PURE__ */ t(Z, { variant: "outline", label: a, onClick: r })
  }
), Ui = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ c("div", { className: "p-2", children: [
      /* @__PURE__ */ t($, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t($, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t($, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t($, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t($, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Kt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Hi = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [s, i] = O(e);
  j(() => {
    i(e);
  }, [e]);
  const l = () => {
    i(!1), n && n();
  }, o = (d) => {
    i(!1), r(), d && d();
  };
  return s && /* @__PURE__ */ c(te, { children: [
    /* @__PURE__ */ t(Nr, {}),
    /* @__PURE__ */ c("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          Z,
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
        ri,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            si,
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
}, qt = Le(null), au = qt.Provider;
function ru() {
  return ke(qt);
}
function Vi(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", s = e !== null, i = e?.previousItem ?? null, l = e?.nextItem ?? null, o = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, h = e?.hasNext ?? !1, p = e?.goToPrevious, x = e?.goToNext;
  return Y(() => {
    if (!s) return null;
    const v = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, y = (_, D) => (_ !== null ? a?.(_) : void 0) ?? D, L = r === "callback" ? m ? { onClick: p, title: y(i, "Previous") } : void 0 : o !== null ? { url: o, title: y(i, "Previous") } : void 0, R = r === "callback" ? h ? { onClick: x, title: y(l, "Next") } : void 0 : d !== null ? { url: d, title: y(l, "Next") } : void 0;
    return !L && !R && !v ? null : { previous: L, next: R, counter: v };
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
    h,
    p,
    x,
    a
  ]);
}
function su({
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
  const { sidebarState: u, toggleSidebar: m } = Me(), h = ke(qt), p = i ?? h ?? void 0, x = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], v = n && Object.keys(n).length !== 0, y = s && a.length > 0, L = !s && r.length > 0, R = !s && !!l?.isVisible, _ = x[x.length - 1], D = "navigation" in window ? window.navigation : null, P = s && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        s ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ie, { children: !s && u !== "locked" && /* @__PURE__ */ t(
            X.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                Z,
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
              className: g(
                "flex flex-grow items-center gap-2",
                P && "justify-center"
              ),
              children: [
                s && P && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  Z,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Mn,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || y ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in _ ? /* @__PURE__ */ t($, { className: "h-4 w-24" }) : _.label }) : /* @__PURE__ */ t(
                  Ti,
                  {
                    breadcrumbs: x,
                    append: o !== void 0 && /* @__PURE__ */ t(
                      Ei,
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
            et,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(et, { text: n.text, variant: n.variant }) }),
          !s && v && (p || L || R) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          p && /* @__PURE__ */ t(_i, { ...p }),
          p && L && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (R || L) && /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            R && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              zi,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            L && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((S, W) => /* @__PURE__ */ t(Gi, { action: S }, W)) })
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
function Gi({ action: e }) {
  const n = z(null), [a, r] = O(!1), s = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    ne,
    {
      size: "md",
      variant: s,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    ne,
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
        ne,
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
const Ki = () => {
  const e = q();
  return /* @__PURE__ */ c(
    X.div,
    {
      className: g(
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
            className: g(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          ne,
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
}, qi = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = z(null);
  j(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, Yi = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: s
  } = ut();
  return qi({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: s
  }), /* @__PURE__ */ t(Ie, { children: n && /* @__PURE__ */ t(
    X.div,
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
        X.div,
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
}, Qi = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(Pt, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        ne,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Ji = ({
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
  Oi,
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
), Xi = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: i,
    setOpen: l,
    onHide: o
  } = ut(), d = () => {
    l(!1), o?.();
  };
  return e ? /* @__PURE__ */ c(Yi, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      ne,
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
        /* @__PURE__ */ t(Et, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ c("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ t(
        Qi,
        {
          action: f,
          onClose: () => l(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Ki, {}) })
  ] }) : null;
}, Zi = ue(
  re("AiPromotionChat", Xi)
), el = ue(
  re("AiPromotionChatProvider", Ji)
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
  warning: Cr,
  info: Vn
}, gn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, tl = ee(
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
                className: g(
                  "flex flex-row items-center gap-2",
                  gn[i]
                ),
                children: [
                  pn[i] && /* @__PURE__ */ t(V, { icon: pn[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: gn[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              Z,
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
                className: g(
                  "bg-f1-background px-4 py-3",
                  o ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            o && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: s.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              Z,
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
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ c(
  "div",
  {
    className: Ca({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t($, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t($, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t($, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t($, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t($, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t($, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), ka = ee(
  (e, n) => /* @__PURE__ */ t(tl, { ref: n, ...e })
), al = ({ compact: e, variant: n }) => /* @__PURE__ */ t(nl, { compact: e, variant: n });
ka.displayName = "F0Callout";
const iu = ce(
  ue(ka),
  al
), Ia = ee(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, s) => {
    const i = q(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, o = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < o), f = kr(a);
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
        className: g("flex h-2 w-full gap-1"),
        children: d.map((u, m) => /* @__PURE__ */ t(
          "div",
          {
            className: g(
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
const lu = ue(
  re("F0SegmentedBar", Ia)
);
function rl({
  title: e,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(V, { icon: Ir, size: "md", color: "selected" }),
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
function sl({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: s } = Sr(), i = Fr(s), l = Ar(n, "PPPp", { locale: i }), o = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${l} by ${o}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
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
            ge,
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
function il({
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
          ge,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(lt, { className: "h-full flex-1", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            rl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((s) => /* @__PURE__ */ t(
            sl,
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
const ou = ue(
  re("F0VersionHistory", il)
), Sa = ee(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: s }, i) => {
    const l = xe.useRef(null);
    xe.useImperativeHandle(
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
        className: g("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? s(d) : /* @__PURE__ */ t(te, {})
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
const At = re("VirtualList", Sa), Fa = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (l) => l.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const s = new RegExp(`(${n})`, "gi"), i = e.split(s);
  return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: i.map(
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
function ft(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s >= 0 && s < r.length - 1 ? r[s + 1].focus() : r.length > 0 && n?.();
}
function mt(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s > 0 ? r[s - 1].focus() : r.length > 0 && n?.();
}
const ll = ({
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
  const m = e.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), x = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? r(e) : a(e));
  }, v = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else y.key === "ArrowDown" ? ft(y.currentTarget, l) : y.key === "ArrowUp" && mt(y.currentTarget, o);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ c(
    "label",
    {
      "aria-label": e.name,
      className: g(
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
            firstName: h,
            lastName: p,
            size: "xs",
            deactivated: e.deactivated
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t(
          "div",
          {
            className: g(
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
            className: g(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          V,
          {
            className: "text-f1-icon-selected",
            icon: Gn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Je = ({
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
  hideLine: h = !1,
  showGroupIcon: p = !1,
  singleSelector: x = !1,
  disabled: v = !1,
  hiddenAvatar: y = !1
}) => {
  const [L, R] = O(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ll,
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
  const _ = (S) => {
    if (S.key === " ")
      S.preventDefault(), d(!n);
    else if (S.key === "Enter" && x)
      d(!n);
    else if (S.key === "Enter") {
      if (v) return;
      !s || i ? l(r) : s && o(r);
    } else S.key === "ArrowDown" ? ft(S.currentTarget, f) : S.key === "ArrowUp" && mt(S.currentTarget, u);
  }, D = () => {
    if (L)
      d(!n), R(!1);
    else {
      if (v || x) return;
      s ? o(r) : l(r);
    }
  };
  if (!r.subItems?.length) return null;
  const P = s || i;
  return /* @__PURE__ */ c(te, { children: [
    /* @__PURE__ */ c("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        Z,
        {
          hideLabel: !0,
          icon: n ? Tr : Lr,
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
            R(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            p && /* @__PURE__ */ t(
              V,
              {
                icon: Rr,
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
              /* @__PURE__ */ t(ot, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              qn,
              {
                checked: P,
                disabled: v,
                onClick: D,
                onKeyDown: _,
                indeterminate: i,
                onPointerDown: (S) => {
                  S.stopPropagation(), R(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: g("ml-auto", x ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Je.displayName = "EntitySelectListItem";
const bn = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? ft(i.currentTarget, a) : i.key === "ArrowUp" && mt(i.currentTarget, r);
}, children: /* @__PURE__ */ c(
  "label",
  {
    "aria-label": e,
    className: g(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ t(
        Z,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Yn,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: g("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Ue = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      Z,
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
    Dr,
    {
      items: r,
      value: e.label,
      disabled: i,
      onClick: s,
      variant: "outline",
      size: "sm"
    }
  );
}, ol = ({
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
  let p, x, v = d ? {
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
  return v || (v = y, y = void 0), m && u ? (p = /* @__PURE__ */ t(
    Ue,
    {
      primaryAction: v,
      secondaryActions: y ? [y] : []
    }
  ), x = /* @__PURE__ */ t(
    Ue,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ t(
    Ue,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ t(Ue, { primaryAction: v, secondaryActions: [] }), y && (x = /* @__PURE__ */ t(Ue, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ c("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    x
  ] }) });
}, cl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: s,
  goToLast: i
}) => /* @__PURE__ */ c("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(V, { icon: ki, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (o) => {
        o.key === "ArrowDown" ? (o.preventDefault(), o.stopPropagation(), ft(o.currentTarget, s)) : o.key === "ArrowUp" ? (o.preventDefault(), o.stopPropagation(), mt(o.currentTarget, i)) : o.key === "Enter" && (o.preventDefault(), o.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (o) => n(o.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    V,
    {
      icon: Or,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), gt = 384, bt = 36, dl = 37, xn = 1, vn = 200, yn = '[data-avatarname-navigator-element="true"]', ul = ({
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
  selectedEntities: h = [],
  onGroupChange: p,
  onToggleExpand: x,
  searchPlaceholder: v,
  selectAllLabel: y,
  clearLabel: L,
  notFoundTitle: R,
  notFoundSubtitle: _,
  className: D,
  actions: P,
  onCreate: S,
  onCreateLabel: W,
  singleSelector: E = !1,
  loading: w = !1,
  disabled: k = !1,
  hiddenAvatar: F = !1
}) => {
  const A = xe.useRef(null), M = Y(
    () => e ? n.reduce(
      (C, K) => C + (K.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), b = H(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: 0 });
    }, xn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(yn)
      )[0]?.focus();
    }, vn);
  }, []), N = H(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, xn), setTimeout(() => {
      const C = Array.from(
        document.querySelectorAll(yn)
      );
      C[C.length - 1]?.focus();
    }, vn);
  }, []), I = Y(
    () => new Map(h.map((C) => [C.id, C])),
    [h]
  ), T = H(
    (C) => {
      const K = I.get(C.id);
      if (!e)
        return {
          selected: !!K,
          partialSelected: !!K
        };
      const le = (C.subItems ?? []).filter(
        (U) => K?.subItems?.some(
          (ie) => ie.subId === U.subId
        )
      ), ae = (C.subItems?.length ?? 0) === le.length, pe = !ae && le.length > 0;
      return { selected: ae, partialSelected: pe };
    },
    [e, I]
  ), Q = H(
    (C) => {
      if (C.index === 0 && S)
        return /* @__PURE__ */ t(
          bn,
          {
            label: W ?? "",
            onCreate: () => S?.(s),
            goToFirst: b,
            goToLast: N
          }
        );
      const K = S ? C.index - 1 : C.index, le = n[K], { selected: ae, partialSelected: pe } = T(le);
      return /* @__PURE__ */ t(
        Je,
        {
          expanded: le.expanded ?? !1,
          onExpand: () => x(le, !0),
          search: s,
          groupView: e,
          entity: le,
          onSelect: i,
          onRemove: l,
          selected: ae,
          partialSelected: pe,
          showGroupIcon: fl(a, r),
          singleSelector: E,
          goToFirst: b,
          goToLast: N,
          disabled: k,
          hiddenAvatar: F
        },
        le.id
      );
    },
    [
      S,
      W,
      k,
      n,
      T,
      b,
      N,
      e,
      a,
      F,
      l,
      i,
      x,
      s,
      r,
      E
    ]
  ), J = Y(() => e ? n.flatMap((C) => {
    const K = Ke(
      h ?? [],
      C.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: C.id,
          subName: C.name,
          subAvatar: C.avatar,
          expanded: C.expanded ?? K?.expanded ?? !1,
          subItems: C.subItems,
          subSearchKeys: C.searchKeys
        }
      },
      ...(C.subItems ?? []).map((le) => ({
        parent: {
          ...C,
          expanded: C.expanded ?? K?.expanded ?? !1
        },
        subItem: le
      }))
    ];
  }).filter(
    (C) => (!C.parent || C.parent.expanded) && (!!C.parent || !!C.subItem.subItems && C.subItem.subItems.length > 0)
  ) : n.map((C) => ({
    parent: null,
    subItem: {
      subId: C.id,
      subName: C.name,
      subAvatar: C.avatar,
      subSearchKeys: C.searchKeys
    }
  })), [e, n, h]), B = H(
    (C) => {
      if (C.index === 0 && S)
        return /* @__PURE__ */ t(
          bn,
          {
            label: W ?? "",
            onCreate: () => S?.(s),
            goToFirst: b,
            goToLast: N
          }
        );
      const K = S ? C.index - 1 : C.index, le = J[K].parent, ae = J[K].subItem;
      if (!le) {
        const U = {
          id: ae.subId,
          name: ae.subName,
          avatar: ae.subAvatar,
          subItems: ae.subItems,
          expanded: ae.expanded,
          searchKeys: ae.subSearchKeys
        }, ie = Ke(
          h,
          U.id
        ), fe = (U?.subItems ?? []).filter(
          (je) => ie?.subItems?.some(
            (er) => er.subId === je.subId
          )
        ), Ne = (U.subItems?.length ?? 0) === fe.length, Za = !Ne && fe.length > 0;
        return /* @__PURE__ */ t(
          Je,
          {
            groupView: !0,
            expanded: U.expanded ?? !1,
            onExpand: (je) => x(U, je),
            search: s,
            entity: U,
            onSelect: i,
            onRemove: l,
            selected: Ne,
            partialSelected: Za,
            showGroupIcon: a.find((je) => je.value === r)?.groupType === "team",
            singleSelector: E,
            goToFirst: b,
            goToLast: N,
            hideLine: K === J.length - 1,
            disabled: k,
            hiddenAvatar: F
          }
        );
      }
      let pe = !!Ke(h, ae.subId);
      if (!pe) {
        const U = Ke(
          h,
          le.id
        );
        pe = !!(le?.subItems ?? []).filter(
          (fe) => U?.subItems?.some(
            (Ne) => Ne.subId === fe.subId
          )
        ).find((fe) => fe.subId === ae.subId);
      }
      return /* @__PURE__ */ t(
        Je,
        {
          expanded: !1,
          onExpand: () => null,
          search: s,
          groupView: !1,
          entity: {
            id: ae.subId,
            name: ae.subName,
            avatar: ae.subAvatar,
            searchKeys: ae.subSearchKeys
          },
          onSelect: () => {
            d(le, ae);
          },
          onRemove: () => o(le, ae),
          selected: !!pe,
          partialSelected: !1,
          singleSelector: E,
          goToFirst: b,
          goToLast: N,
          isChild: !0,
          hiddenAvatar: F
        }
      );
    },
    [
      J,
      h,
      s,
      E,
      b,
      N,
      i,
      l,
      a,
      k,
      x,
      r,
      d,
      o,
      F,
      S,
      W
    ]
  ), [me, G] = Y(() => {
    if (!n.length)
      return [!1, !1];
    let C = 0, K = 0;
    if (!e)
      C = n.length, K = n.reduce(
        (pe, { id: U }) => pe + (I.has(U) ? 1 : 0),
        0
      );
    else {
      const pe = new Set(
        [...I.values()].flatMap(
          (U) => U.subItems?.map((ie) => ie.subId) ?? []
        )
      );
      n.forEach((U) => {
        const ie = U.subItems ?? [];
        C += ie.length, K += ie.filter(
          (fe) => pe.has(fe.subId)
        ).length;
      });
    }
    const le = C > 0 && K === C, ae = K > 0;
    return [le, ae];
  }, [n, I, e]), de = J.length, se = !E && (y || L), be = P && P.length > 0, he = !w && (!E && se || be);
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        E || w ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ c(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              E || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                cl,
                {
                  search: s,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: b,
                  goToLast: N
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                tt,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: p,
                  options: a,
                  value: r,
                  className: g(
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
            className: g(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              he ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(Pt, {}) }),
              !w && !M && /* @__PURE__ */ c(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: gt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: R }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: _ })
                  ]
                }
              ),
              !w && (!!M || S) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                At,
                {
                  height: gt,
                  itemCount: de + (S ? 1 : 0),
                  itemSize: (C) => {
                    if (C === 0 && S) return bt;
                    const K = S ? C - 1 : C;
                    return J[K]?.parent === null ? dl : bt;
                  },
                  renderer: B,
                  ref: A
                }
              ) : /* @__PURE__ */ t(
                At,
                {
                  height: gt,
                  itemCount: n.length + (S ? 1 : 0),
                  itemSize: bt,
                  renderer: Q,
                  ref: A
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          ol,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: E,
            totalFilteredEntities: M,
            allVisibleSelected: me,
            anyVisibleSelected: G,
            selectAllLabel: y,
            clearLabel: L,
            disabled: k,
            actions: P
          }
        )
      ]
    }
  );
}, Ke = (e, n) => e.find((a) => a.id === n), fl = (e, n) => e.find((a) => a.value === n)?.groupType === "team", ml = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: s = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Pr,
  {
    className: g(
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
        icon: r ? { icon: Er, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      V,
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
) }), hl = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  disabled: i = !1,
  hiddenAvatar: l = !1
}) => {
  const o = Y(() => {
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
  }, [e, r]), d = o.length;
  return /* @__PURE__ */ c("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: s && /* @__PURE__ */ c("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      s
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      At,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = o[f.index];
          return u ? /* @__PURE__ */ t(
            ml,
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
          ) : /* @__PURE__ */ t(te, {});
        }
      }
    ) })
  ] });
}, pl = 500, wn = 520, Nn = 210, Cn = ({
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
  ...h
}) => {
  const p = (i ?? wn) < pl, x = !o && !l && !p, v = i ?? wn, y = x ? v - Nn : v;
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
              ul,
              {
                ...h,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: l,
                loading: o,
                disabled: h.disabled,
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
              hl,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: s,
                disabled: h.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, gl = ({
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
  hideLabel: h = !1,
  maxLength: p,
  loading: x = !1,
  required: v = !1,
  readonly: y = !1,
  append: L,
  size: R = "sm",
  open: _
}) => {
  const D = Y(
    () => a.some(
      (E) => E.subItems && E.subItems.length > 0
    ),
    [a]
  ), P = Y(() => D ? a.flatMap(
    (E) => (E.subItems ?? []).map((w) => ({
      parent: E,
      subItem: w
    }))
  ) : a.map((E) => ({
    parent: null,
    subItem: {
      subId: E.id,
      subName: E.name,
      subAvatar: E.avatar,
      subDeactivated: E.deactivated
    }
  })), [D, a]), S = P.length === 0 ? void 0 : P.length === 1 ? P[0].subItem.subName : P.length + " " + n, W = P.length === 1 ? P[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    _r,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: l,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: o && !S ? o : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: p,
      clearable: !1,
      value: S,
      disabled: r,
      loading: x,
      required: v,
      readonly: y,
      size: R,
      avatar: s || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: P[0].subItem.subAvatar,
        deactivated: P[0].subItem.subDeactivated
      },
      append: L ?? /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(zr, { open: _, disabled: r, size: R }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            S && "text-f1-foreground",
            P.length === 1 && !s || o && !S ? "pl-8" : "pl-2"
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
}, cu = (e) => {
  const [n, a] = O(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), e.onOpenChange?.(w);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [s, i] = O(e.entities), [l, o] = O(""), [d, f] = Br("", 300), u = Y(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = ke($r), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function x(w) {
    if (e.singleSelector) {
      e.onSelect(w), a(!1);
      return;
    }
    const k = e.selectedEntities ?? [], F = s.find((I) => I.id === w.id);
    if (!F)
      return;
    const A = new Set(
      (F.subItems ?? []).map((I) => I.subId)
    ), M = /* @__PURE__ */ new Set([F.id]);
    s.forEach((I) => {
      I.id !== F.id && (I.subItems ?? []).some(
        (Q) => A.has(Q.subId)
      ) && M.add(I.id);
    });
    const b = [...k];
    function N(I) {
      const T = b.findIndex((Q) => Q.id === I.id);
      T >= 0 ? b[T] = I : b.push(I);
    }
    M.forEach((I) => {
      const T = s.find((B) => B.id === I);
      if (!T) return;
      const Q = T.subItems?.filter(
        (B) => A.has(B.subId)
      ) ?? [], J = b.findIndex((B) => B.id === I);
      if (J >= 0) {
        const B = b[J].subItems ?? [], me = new Set(B.map((de) => de.subId)), G = [
          ...B,
          ...Q.filter((de) => !me.has(de.subId))
        ];
        N({
          ...T,
          subItems: G
        });
      } else
        N({
          ...T,
          subItems: Q
        });
    }), e.onSelect(b);
  }
  function v(w, k) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...k }] }), a(!1);
    else {
      const F = e.selectedEntities ?? [], A = new Set(F.map((N) => N.id)), M = new Map(
        F.map((N) => [N.id, N.subItems ?? []])
      );
      A.add(w.id), e.entities.forEach((N) => {
        N.subItems?.some(
          (T) => T.subId === k.subId
        ) && A.add(N.id);
      });
      const b = [];
      e.entities.forEach((N) => {
        if (A.has(N.id)) {
          let T = [...M.get(N.id) ?? []];
          N.subItems?.some(
            (B) => B.subId === k.subId
          ) && (T.some(
            (me) => me.subId === k.subId
          ) || T.push(k));
          const J = new Set(
            (N.subItems ?? []).map((B) => B.subId)
          );
          T = T.filter(
            (B) => J.has(B.subId)
          ), b.push({
            ...N,
            subItems: T
          });
        }
      }), e.onSelect(b);
    }
  }
  function y(w) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let k = [];
    const F = e.selectedEntities ?? [];
    if (u) {
      const A = s.find(
        (b) => b.id === w.id
      );
      if (!A)
        return;
      const M = new Set(
        (A.subItems ?? []).map((b) => b.subId)
      );
      for (const b of F) {
        const N = (b.subItems ?? []).filter(
          (I) => !M.has(I.subId)
        );
        N.length > 0 && k.push({
          ...b,
          subItems: N
        });
      }
    } else
      k = (F ?? []).filter((A) => A.id !== w.id);
    e.onSelect(k);
  }
  function L(w, k) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const F = e.selectedEntities ?? [], A = k.subId, M = [];
    for (const b of F) {
      const N = b.subItems?.filter((I) => I.subId !== A) ?? [];
      N.length > 0 && M.push({
        ...b,
        subItems: N
      });
    }
    e.onSelect(M);
  }
  function R() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let k = [];
    if (u) {
      const F = new Set(
        s.flatMap(
          (A) => (A.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const A of w) {
        const M = (A.subItems ?? []).filter(
          (b) => !F.has(b.subId)
        );
        M.length > 0 && k.push({
          ...A,
          subItems: M
        });
      }
    } else {
      const F = new Set(
        s.map((A) => A.id)
      );
      k = (w ?? []).filter((A) => !F.has(A.id));
    }
    e.onSelect(k);
  }
  function _() {
    const w = [...e.selectedEntities ?? []];
    s.forEach((k) => {
      const F = w.find((A) => A.id === k.id);
      if (!F)
        w.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const A = Array.from(
          /* @__PURE__ */ new Set([
            ...F.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        F.subItems = A;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const D = (w) => {
    o(w), f(w);
  }, P = (w, k) => {
    e.onItemExpandedChange(w.id, k), i(
      s.map(
        (F) => F.id === w.id ? { ...F, expanded: !w.expanded } : F
      )
    );
  };
  j(() => {
    if (!d) {
      i(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const k = e.entities.map((F) => {
        const A = bl(F, d), M = F.subItems?.map((b) => ({
          ...b,
          score: at(
            d,
            b.subSearchKeys ?? [b.subName]
          )
        })).filter((b) => b.score < 1 / 0).sort((b, N) => b.score - N.score);
        return {
          ...F,
          score: A,
          expanded: F.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((F) => F.score < 1 / 0).sort((F, A) => F.score - A.score);
      i(k);
    } else {
      const w = e.entities.map((k) => {
        const F = at(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: F };
      }).filter((k) => k.score < 1 / 0).sort((k, F) => k.score - F.score);
      i(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    i
  ]);
  const S = z(null), [W, E] = O(0);
  return Vt(() => {
    const w = () => {
      S.current && E(S.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: S,
      className: g(
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
          onSubItemRemove: L,
          onSubItemSelect: v,
          onClear: R,
          onSelectAll: _,
          selectedEntities: e.selectedEntities ?? [],
          search: l,
          onSearch: D,
          onToggleExpand: P,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? W - 2,
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
          gl,
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
        container: p,
        className: g(
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
            onSubItemRemove: L,
            onSubItemSelect: v,
            onClear: R,
            onSelectAll: _,
            selectedEntities: e.selectedEntities ?? [],
            search: l,
            onSearch: D,
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
function Tt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function kn(e) {
  return Tt(e).split(/\s+/).filter((n) => n.length > 0);
}
function at(e = "", n) {
  const a = kn(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const s = Tt(r), i = kn(r), l = Tt(e);
    if (s.includes(l) || a.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function bl(e, n) {
  const a = at(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((s, i) => {
    const l = at(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(s, l);
  }, 1 / 0)), Math.min(a, r);
}
const xl = ({
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
  const { ref: f } = Ct({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
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
        /* @__PURE__ */ t(kt, { icon: s ?? ta }),
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
}, vl = () => /* @__PURE__ */ c("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t($, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ c("div", { className: "flex-1", children: [
    /* @__PURE__ */ t($, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t($, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t($, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t($, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Yt = re(
  "ActivityItem",
  ce(xl, vl)
), Aa = ({
  title: e,
  children: n
}) => /* @__PURE__ */ c("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), yl = ({
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
)) }), wl = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Aa, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(Yt.Skeleton, {}, r)) }), Xe = ce(yl, wl), Nl = 3, Cl = ["today", "yesterday", "lastWeek", "lastMonth"], kl = (e) => Wr(e, ([n]) => {
  const a = Cl.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), Lt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Il = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: s = 5
}) => {
  const i = q(), l = Mr(e, "createdAt"), o = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-s), d = jr((u) => {
    o.includes(u) && r?.();
  }, 1e3), f = kl(
    Object.entries(l).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ c(xe.Fragment, { children: [
      /* @__PURE__ */ t(
        Xe,
        {
          title: u in i.date.groups ? i.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(Lt, {})
    ] }, u)),
    n && new Array(Nl).fill(null).map((u, m) => /* @__PURE__ */ t(Yt.Skeleton, {}, m))
  ] });
}, Sl = () => {
  const e = q();
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Xe.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Lt, {}),
    /* @__PURE__ */ t(
      Xe.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Lt, {}),
    /* @__PURE__ */ t(
      Xe.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, du = re(
  "ActivityItemList",
  ce(Il, Sl)
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
function Tl({
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
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Al[na(
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
              className: g(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                dt,
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
function Ll(e) {
  const n = z(null), a = z(), r = H(() => {
    const i = n.current;
    if (!i) return;
    const l = Ur.create(i, {
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
  }, [e]), s = H(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: s };
}
const Rl = ({
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
  const [m, h] = O(l), p = z(null);
  j(() => {
    h(l);
  }, [l]);
  const x = (D) => {
    h(D), o?.(D);
  }, v = Te(), { canvasRef: y, handleMouseEnter: L, handleMouseLeave: R } = Ll(v), _ = ct({
    emoji: Fl[d],
    size: "sm"
  });
  return /* @__PURE__ */ c(
    Pe,
    {
      href: e,
      onClick: s,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        oe()
      ),
      onMouseEnter: v ? void 0 : L,
      onMouseLeave: v ? void 0 : R,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Tl,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: i,
            lastEmojiReaction: m,
            onReactionSelect: x,
            pickerRef: p
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
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: _ })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(It, { date: u }) })
        ] })
      ]
    }
  );
}, Dl = () => /* @__PURE__ */ c(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t($, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t($, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t($, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), uu = ce(Rl, Dl), fu = ({
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
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(Z, { label: a, variant: "outline", onClick: r }) })
] });
function Ta({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: s
}) {
  const [i, l] = O(a), [o, d] = O(n), f = z(null), { fireEmojiConfetti: u } = Hr(), m = (x, v) => {
    x.stopPropagation(), d(o + (i ? -1 : 1)), l(!i), s?.(v), i || u(v, f);
  }, h = r?.map((x) => x.name).join(", ") || "", p = /* @__PURE__ */ t(
    _t,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (x) => {
        m(x, e);
      },
      className: g(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Vr(e),
      prepend: /* @__PURE__ */ t(ct, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        Gr,
        {
          value: o,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: g(
            "tabular-nums",
            i ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(Ae, { label: h, children: p }) : p;
}
function Ol({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      Z,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(dt, { onSelect: n, locale: a }),
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
const Pl = re("Reactions", Ol), La = ee(function({ content: n, collapsed: a, id: r, className: s, tabIndex: i }, l) {
  return /* @__PURE__ */ t(
    Kr,
    {
      ref: l,
      id: r,
      content: n,
      tabIndex: i,
      className: g(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        s
      )
    }
  );
});
La.displayName = "BasePostDescription";
const El = () => /* @__PURE__ */ c("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t($, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t($, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Ra = ce(
  La,
  El
), In = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: g(
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
), Rt = ee(
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
  }, h) {
    return /* @__PURE__ */ c(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ c(te, { children: [
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
                f && /* @__PURE__ */ c(te, { children: [
                  /* @__PURE__ */ t(It, { date: f }),
                  /* @__PURE__ */ t(
                    V,
                    {
                      icon: it,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(It, { date: u })
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
), _l = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Da = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && _l.has(a);
}, zl = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let s = qr(r);
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
    ) : /* @__PURE__ */ c(te, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t($, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Rt,
      {
        title: e,
        description: s,
        color: Yr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Bl = () => /* @__PURE__ */ c(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t($, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ c("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t($, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ c("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t($, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t($, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Oa = ce(zl, Bl), $l = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const s = q();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        oe()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": a,
      onClick: r,
      children: s.actions.seeMore
    }
  ) });
}, Ml = ({
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
  comment: h,
  actions: p,
  dropdownItems: x,
  noReactionsButton: v = !1,
  descriptionExpandable: y = !1
}) => {
  const L = Ft(), R = Ft(), _ = z(null), [D, P] = O(null), [S, W] = O(!1), E = [f.views, f.comments].filter(Boolean).join(" · "), w = y && D?.id === e && D.description === i, k = !w, F = ea(r), A = () => {
    l(e);
  }, M = (I) => {
    I.stopPropagation();
  }, b = n ? `${n.firstName} ${n.lastName}` : void 0, N = (I) => {
    I.preventDefault(), I.stopPropagation(), i && P({ id: e, description: i });
  };
  return j(() => {
    w && _.current?.focus();
  }, [w]), j(() => {
    y || P(null);
  }, [y]), j(() => {
    const I = _.current;
    if (!y || !I || w) {
      W(!1);
      return;
    }
    const T = () => {
      W(
        I.scrollHeight > I.clientHeight
      );
    };
    if (T(), typeof ResizeObserver > "u") return;
    const Q = new ResizeObserver(T);
    return Q.observe(I), () => Q.disconnect();
  }, [y, w, i]), /* @__PURE__ */ c(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: A,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Ge,
          {
            href: n.url || "#",
            title: b,
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
        ) : /* @__PURE__ */ t(kt, { icon: nn }) }),
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ c(te, { children: [
                  /* @__PURE__ */ t(
                    Ge,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: b,
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
                    Ge,
                    {
                      href: n.url,
                      title: b,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: b
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(kt, { icon: nn, size: "sm" }) }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: g(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ t(
                  Ge,
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
                  p?.map((I) => /* @__PURE__ */ t(
                    Z,
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
                  x?.length && /* @__PURE__ */ t(
                    Be,
                    {
                      items: x,
                      icon: St,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Be,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...x ?? []
                    ],
                    icon: St,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: F }),
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: L,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: s
                }
              ),
              i && /* @__PURE__ */ c(te, { children: [
                /* @__PURE__ */ t(
                  Ra,
                  {
                    ref: _,
                    id: R,
                    content: i,
                    collapsed: k,
                    tabIndex: w ? -1 : void 0,
                    className: g(w && oe())
                  }
                ),
                y && S && !w && /* @__PURE__ */ t(
                  $l,
                  {
                    describedBy: L,
                    controls: R,
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
              onClick: M,
              children: /* @__PURE__ */ t("source", { src: o })
            }
          ) : /* @__PURE__ */ c(te, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: o,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t($, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Oa, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: E }),
          !v && /* @__PURE__ */ t(
            Pl,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: Qr
              }
            }
          )
        ] })
      ]
    }
  );
}, jl = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ c("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t($, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ c("div", { className: "w-full", children: [
    /* @__PURE__ */ c("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t($, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t($, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t($, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t($, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Ra.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t($, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Oa.Skeleton, {}) }),
    /* @__PURE__ */ c("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t($, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t($, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), mu = ce(
  Ml,
  jl
), Pa = xe.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const s = () => {
    n();
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      className: g(
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
              V,
              {
                icon: Vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, l) => /* @__PURE__ */ c(te, { children: [
            /* @__PURE__ */ t($e, { ...i }, i.text),
            l < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(Jr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              Z,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              Z,
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
}), Wl = () => /* @__PURE__ */ c("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t($, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t($, { className: "h-4" }),
    /* @__PURE__ */ t($, { className: "h-4" })
  ] })
] });
Pa.displayName = "OnePersonListItem";
const hu = ue(
  re(
    "OnePersonListItem",
    ce(Pa, Wl)
  )
), Sn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ul({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  return /* @__PURE__ */ t(Pi, { children: /* @__PURE__ */ t(
    Hl,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function Hl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  const i = r?.enabled ? Xr : s?.enabled ? el : ti, l = r?.enabled ? r : s?.enabled ? s : void 0;
  return /* @__PURE__ */ t(i, { ...l, children: /* @__PURE__ */ t(
    ql,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const pu = re(
  "ApplicationFrame",
  Ul
), Vl = ({ contentId: e }) => {
  const n = q();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: oe(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Gl(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Kl(e, n) {
  const { sidebarState: a, toggleSidebar: r } = Me(), s = z(e);
  j(() => {
    n && Gl(
      e,
      s.current,
      a
    ) && r({ isInvokedByUser: !1 }), s.current = e;
  }, [e, n, a, r]);
}
function ql({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: s
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: o, setForceFloat: d } = Me(), f = Te(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: p,
    closeCanvas: x,
    chatWidth: v,
    resizable: y,
    panelSide: L
  } = Zr(), R = m === "fullscreen", _ = m === "canvas", { open: D } = ut(), P = y ? v : es, S = L === "left", W = z(R), E = R && !W.current, w = !R && W.current, [
    k,
    F
  ] = O(!1);
  j(() => {
    !R && W.current && F(!0), W.current = R;
  }, [R]);
  const A = R || k || w, M = Y(() => E ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [E, w]), b = Nt(
    `(max-width: ${Ze.xl}px)`,
    { initializeWithValue: !0 }
  ), N = Nt(`(max-width: ${Ze.md}px)`, {
    initializeWithValue: !0
  }), I = u && !S;
  return j(() => {
    d(I);
  }, [I, d]), j(() => {
    d(D);
  }, [D, d]), Kl(I, b), /* @__PURE__ */ t(
    ii,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ c("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: s }),
        /* @__PURE__ */ t(ra, { id: "ai-chat-group", children: /* @__PURE__ */ c("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ie, { children: i === "unlocked" && /* @__PURE__ */ t(
            X.nav,
            {
              className: g(
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
              className: g(
                i !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                i === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (T) => {
                i === "hidden" ? T?.setAttribute("inert", "") : T?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Vl, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ c(
            X.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N && !S ? P : 0,
                paddingLeft: u && !N && S ? P : 0
              },
              transition: {
                paddingRight: Sn,
                paddingLeft: Sn
              },
              children: [
                /* @__PURE__ */ t(
                  X.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      A ? "overflow-hidden" : "overflow-auto",
                      !u && !D && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ t(
                      X.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          A ? "overflow-hidden" : "overflow-auto"
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
                    className: g(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's seam-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex",
                      // Canvas sits opposite the panel, hugging the seam between
                      // them: panel-right -> canvas on the left, and vice versa.
                      S ? "justify-start" : "justify-end",
                      N ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        S ? "right-0" : "left-0"
                      )
                    ),
                    style: N ? void 0 : S ? { left: P } : { right: P },
                    children: /* @__PURE__ */ t(
                      ts,
                      {
                        content: h,
                        onClose: x,
                        entities: p,
                        side: S ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  X.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      N ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        S ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        A || _ ? "z-20" : "z-0",
                        i === "hidden" && A ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || R ? "100%" : P
                    },
                    transition: M,
                    onAnimationComplete: () => {
                      k && F(!1);
                    },
                    children: /* @__PURE__ */ t(ns, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Zi, {})
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
  const o = q(), [d, f] = O(!i);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ie, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
    X.div,
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
        X.div,
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
          children: /* @__PURE__ */ t(ct, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ c(
    X.div,
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
          _t,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), l();
            },
            "aria-label": o.actions.edit,
            children: /* @__PURE__ */ t(
              V,
              {
                icon: oi[i],
                color: li[i],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          X.div,
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
              ne,
              {
                compact: !0,
                label: o.actions.add,
                variant: "neutral",
                size: "sm",
                icon: as,
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
const Yl = Fe({
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
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: l } = Me();
  return /* @__PURE__ */ c(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: Yl({ period: a }) }),
        n && /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ c("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || s === "hidden") && /* @__PURE__ */ t(
              Z,
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
                className: g(
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
                        className: g(
                          l ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: g(
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
            className: g(
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
const gu = ue(
  re("DaytimePage", _a)
);
function Ql(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: s, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: s ? () => s(void 0) : void 0
  }));
}
function Jl({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Be, { items: Ql(n), children: /* @__PURE__ */ c(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            oe()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(V, { icon: sa, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const bu = ue(
  re("OmniButton", Jl)
);
function za({ children: e, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
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
const xu = ue(re("Page", za)), Xl = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), Ba = Le(null), $a = Le(null), Fn = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), qe = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), vu = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, s] = O(n), [i, l] = O(
    a
  ), o = Y(
    () => ({
      setGroups: s,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, u) => s((m) => m.some(
        (p) => p.chats.some((x) => x.id === u.id)
      ) ? qe(
        m,
        (p) => p.map((x) => x.id === u.id ? { ...x, ...u } : x)
      ) : Fn(m, f, (p) => ({
        ...p,
        chats: [...p.chats, u]
      }))),
      updateChat: (f, u) => s(
        (m) => qe(
          m,
          (h) => h.map((p) => p.id === f ? { ...p, ...u } : p)
        )
      ),
      removeChat: (f) => s(
        (u) => qe(u, (m) => m.filter((h) => h.id !== f))
      ),
      setUnread: (f, u) => s(
        (m) => qe(
          m,
          (h) => h.map((p) => p.id === f ? { ...p, unreadCount: u } : p)
        )
      ),
      reorder: (f, u) => s(
        (m) => Fn(m, f, (h) => {
          const p = new Map(h.chats.map((y) => [y.id, y])), x = u.map((y) => p.get(y)).filter((y) => !!y), v = h.chats.filter((y) => !u.includes(y.id));
          return { ...h, chats: [...x, ...v] };
        })
      )
    }),
    []
  ), d = Y(
    () => ({
      groups: r,
      activeChatId: i,
      unreadChatsCount: Xl(r)
    }),
    [r, i]
  );
  return /* @__PURE__ */ t($a.Provider, { value: o, children: /* @__PURE__ */ t(Ba.Provider, { value: d, children: e }) });
}, Zl = () => {
  const e = ke(Ba);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Ma = () => {
  const e = ke($a);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, eo = () => {
  const e = Zl(), n = Ma();
  return Y(() => ({ ...e, ...n }), [e, n]);
}, yu = () => Ma(), Qt = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: s,
  highlightWhenCollapsed: i,
  isDragging: l,
  wasDragging: o
}) => {
  const [d, f] = O(n), u = Te(), m = i && !d, h = () => {
    if (l || o?.current) return;
    const p = !d;
    f(p), r?.(p);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ c(rs, { open: d, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ c(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          oe("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: h,
        tabIndex: 0,
        onKeyDown: (p) => {
          (p.key === "Enter" || p.key === " ") && h();
        },
        children: [
          /* @__PURE__ */ t(
            "span",
            {
              className: g(
                "transition-colors",
                m && "font-[900] text-f1-foreground"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ t(
            X.div,
            {
              initial: !1,
              animate: { rotate: d ? 0 : -90 },
              transition: { duration: u ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(V, { icon: zt, size: "xs" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(ss, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      X.div,
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
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t($, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t($, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), to = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t($, { className: "h-3 w-24 rounded" }) }), no = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((a, r) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(to, {}),
      Array.from({ length: n }).map((s, i) => /* @__PURE__ */ t(ja, {}, i))
    ] }, r))
  }
), ao = () => /* @__PURE__ */ t(
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
), ro = ({
  presence: e,
  isActive: n
}) => e === "offline" ? null : /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -bottom-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
  "span",
  {
    "aria-hidden": "true",
    className: g(
      // The ring follows the item's hover/active state so the dot blends
      // with the highlighted row background.
      "ring-2 ring-f1-background-tertiary transition-[box-shadow] group-hover:ring-f1-background-secondary-hover",
      n && "ring-f1-background-secondary-hover",
      "h-2 w-2 rounded-full",
      "bg-f1-background-positive-bold"
    )
  }
) }), so = ({
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
      className: g(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        oe("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        e.typing ? /* @__PURE__ */ t(ao, {}) : /* @__PURE__ */ c("div", { className: "relative flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ t(He, { size: "xs", avatar: e.avatar }),
          s && /* @__PURE__ */ t(ro, { presence: s, isActive: n })
        ] }),
        /* @__PURE__ */ t(
          ge,
          {
            tag: "span",
            className: g(
              "line-clamp-1 flex-1 py-0.5",
              r ? "text-f1-foreground font-semibold" : "text-f1-foreground-secondary font-medium"
            ),
            lines: 1,
            children: e.label
          }
        ),
        (i || e.unreadCount) && /* @__PURE__ */ c("div", { className: "gap-1 flex items-center justify-center", children: [
          i && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            is,
            {
              icon: i.icon,
              size: "sm",
              "aria-label": i.label,
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
}, io = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a conversation — the synergy won't build itself."
}, lo = ({ action: e }) => /* @__PURE__ */ c(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: g(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      oe("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(V, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), wu = ({
  actions: e = [],
  emptyState: n,
  loading: a = !1
}) => {
  const { groups: r, activeChatId: s, setActiveChat: i } = eo(), l = Te(), o = r.some((u) => u.chats.length > 0), d = { ...io, ...n }, f = a && !o;
  return /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-2 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((u) => /* @__PURE__ */ t(lo, { action: u }, u.label)) }),
    f && /* @__PURE__ */ t(no, {}),
    !f && !o && /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl", role: "img", "aria-hidden": "true", children: d.emoji }),
      /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: d.title }),
      /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: d.description })
    ] }),
    !f && r.map((u) => {
      const m = u.chats.some((h) => h.unreadCount);
      return /* @__PURE__ */ t(
        Qt,
        {
          title: u.title,
          isOpen: u.isOpen,
          highlightWhenCollapsed: m,
          children: /* @__PURE__ */ t(Ie, { initial: !1, children: u.chats.map((h) => /* @__PURE__ */ t(
            X.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: l ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                so,
                {
                  chat: h,
                  isActive: h.id === s,
                  onClick: () => {
                    i(h.id), h.onClick?.();
                  }
                }
              )
            },
            h.id
          )) })
        },
        u.id
      );
    })
  ] });
};
function oo({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: s = !1,
  additionalOptions: i = []
}) {
  const l = Y(
    () => e.find((o) => o.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ c("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t($, { className: "size-6" }),
    /* @__PURE__ */ t($, { className: "h-3 w-14" })
  ] }) : e.length + (i?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    An,
    {
      company: l,
      withNotification: s
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    co,
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
const co = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: s = []
}) => {
  const i = q(), [l, o] = O(!1), d = Y(
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
    const m = s?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ t(
    tt,
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
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            oe()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              X.div,
              {
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(V, { icon: zt, size: "xs" })
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
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        ls,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: ia, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(ge, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function Nu({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: s,
  onDropdownClick: i,
  hasActivityUpdates: l
}) {
  const o = q();
  return /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Be, { items: n, children: /* @__PURE__ */ c(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          oe("focus-visible:ring-inset")
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
          /* @__PURE__ */ t(ge, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ t(Ae, { label: o.notifications, shortcut: r, children: /* @__PURE__ */ c("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        Z,
        {
          icon: ta,
          label: o.notifications,
          onClick: s,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(os, { type: "highlight", size: "sm", icon: ia }) })
    ] }) })
  ] });
}
function uo({ isExpanded: e }) {
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
            className: g(
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
            className: g(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function fo() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Me(), s = z(null);
  return j(() => {
    e === "hidden" && n === "locked" && s.current?.focus();
  }, [e, n]), /* @__PURE__ */ c(
    _t,
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ t(uo, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ t(V, { icon: we, size: "md" }) })
      ]
    }
  );
}
function Cu({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: s,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ c("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      oo,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: s
      }
    ),
    /* @__PURE__ */ t(fo, {})
  ] });
}
function mo() {
  const [e, n] = O(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Wa = Le(void 0);
function ho({ children: e }) {
  const [n, a] = O(!1), [r, s] = O(null);
  return /* @__PURE__ */ t(
    Wa.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function Jt() {
  const e = ke(Wa);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const po = ({
  item: e,
  active: n
}) => /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      V,
      {
        icon: e.icon,
        size: "md",
        className: g(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  (e.tag || e.badge) && /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-1.5", children: [
    e.tag && /* @__PURE__ */ t($e, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(ot, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), go = ({ item: e }) => {
  const { isActive: n } = Ot(), { label: a, icon: r, ...s } = e, i = n(s.href, { exact: s.exactMatch });
  return /* @__PURE__ */ t(
    Pe,
    {
      ...s,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        oe("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(po, { item: e, active: i })
    }
  );
}, bo = ({
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
  const f = q(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = Jt(), { isActive: x } = Ot(), v = x(e.href, { exact: e.exactMatch }), y = z(!1), [L, R] = O(!1), _ = s === 0, D = s === i - 1, P = i === 1, S = Y(() => {
    const A = [];
    return !P && !_ && A.push({
      label: f.actions.moveUp,
      onClick: () => l?.(s, s - 1),
      icon: cs
    }), !P && !D && A.push({
      label: f.actions.moveDown,
      onClick: () => l?.(s, s + 1),
      icon: ds
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: la,
      critical: !0
    }), A;
  }, [P, _, D, f, l, s, r, e]), W = () => {
    m(!0), R(!1), p(e.href || null), y.current = !0;
  }, E = () => {
    m(!1), p(null), o(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && h === e.href, k = Y(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      L && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [v, L, w, d]
  ), F = Y(() => /* @__PURE__ */ c(te, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(vo, { tooltip: n, children: /* @__PURE__ */ c(
      Pe,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: g(
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
              className: g(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(He, { size: "xs", avatar: e.avatar }) : null,
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
        className: g(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          L && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: L,
            onOpenChange: R,
            items: S,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(V, { icon: St, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, L, w, S, n]);
  return d ? /* @__PURE__ */ t(
    pa,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: E,
      className: k,
      whileDrag: {
        scale: 1.05
      },
      children: F
    }
  ) : /* @__PURE__ */ t("div", { className: k, children: F });
}, xt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: s,
  currentOrder: i
}) => {
  const { isDragging: l, setIsDragging: o } = Jt(), d = z(!1), f = ci(), u = () => {
    o(!0), d.current = !0;
  }, m = () => {
    o(!1), setTimeout(() => {
      d.current = !1, i && s?.(i);
    }, 0);
  }, h = (x) => {
    !l && !d.current && r?.(e, x);
  }, p = /* @__PURE__ */ t(
    Qt,
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
          className: g(
            "flex flex-col gap-0.5",
            l && !d.current && "pointer-events-none"
          ),
          children: e.items.map((x, v) => /* @__PURE__ */ t(go, { item: x }, v))
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
      children: p
    }
  ) : p;
};
function ku({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: s
}) {
  const i = z(null), l = e.filter(
    (x) => x.isSortable === !1
  ), [o, d] = O(
    e.filter((x) => x.isSortable !== !1)
  ), [f, u] = O(0), m = H((x) => {
    d(x);
  }, []), h = H(
    (x) => {
      a?.(x);
    },
    [a]
  ), p = mo();
  return /* @__PURE__ */ t(ho, { children: /* @__PURE__ */ t(ra, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    xo,
    {
      disableDragging: p,
      nonSortableItems: l,
      sortableItems: o,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: h,
      favorites: s,
      onFavoritesChange: r,
      forceUpdate: () => u((x) => x + 1)
    },
    f
  ) }) });
}
function xo({
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
  const u = q(), { isDragging: m } = Jt(), h = e.some((b) => b.isRoot), p = e.filter((b) => !b.isRoot).length > 0, x = n.length > 0, v = z(null), [y, L] = O(l), R = l.length > 0;
  j(() => {
    JSON.stringify(l) !== JSON.stringify(y) && L(l);
  }, [l]);
  const _ = (b) => {
    L(b);
  }, D = H(
    (b) => {
      const N = y.filter((I) => I.href !== b.href);
      L(N), o?.(N);
    },
    [y, o]
  ), P = H(
    (b, N) => {
      if (N < 0 || N >= y.length) return;
      const I = [...y], [T] = I.splice(b, 1);
      I.splice(N, 0, T), L(I), o?.(I);
    },
    [y, o]
  ), [S, W] = O(!1), E = z(null);
  j(() => {
    n.length > 0 && !S && (a([...n]), W(!0));
  }, [n, a, S]), j(() => {
    const b = () => {
      E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b), E.current !== null && window.clearTimeout(E.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", k = Y(
    () => y.reduce(
      (b, N, I) => (N.label in b || (b[N.label] = []), b[N.label].push(I), b),
      {}
    ),
    [y]
  ), F = Y(
    () => R && y.map((b, N) => /* @__PURE__ */ t(
      bo,
      {
        isSortable: !f,
        tooltip: (k[b.label] ?? []).length > 1 ? b.tooltip : void 0,
        item: b,
        dragConstraints: v,
        onRemove: D,
        index: N,
        total: y.length,
        onMove: P,
        onReorderFinish: () => {
          o?.(y);
        }
      },
      `${b.href}-${b.label}`
    )),
    [
      R,
      y,
      k,
      D,
      P,
      o,
      f
    ]
  ), A = "flex flex-col gap-3", M = Y(() => n.map((b) => /* @__PURE__ */ t(
    xt,
    {
      category: b,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: s,
      onDragEnd: i,
      currentOrder: n
    },
    b.id
  )), [n, f, r, s, i]);
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((b) => b.isRoot).map((b, N) => /* @__PURE__ */ t(
          xt,
          {
            category: b,
            onCollapse: s
          },
          `fixed-${N}`
        )) }),
        R && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Qt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: w, children: F }) : /* @__PURE__ */ t(
          on,
          {
            axis: "y",
            values: y,
            onReorder: _,
            className: w,
            children: F
          }
        ) }) }) }),
        p && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((b) => !b.isRoot).map((b, N) => /* @__PURE__ */ t(
          xt,
          {
            category: b,
            onCollapse: s
          },
          `fixed-${N}`
        )) }),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: A, children: M }) : /* @__PURE__ */ t(
              on,
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
const vo = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(Ae, { description: e, children: n }) : n;
function Iu({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ c(
    "button",
    {
      onClick: e,
      className: g(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        oe()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(V, { icon: Bt, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(us, { keys: a }) })
      ]
    }
  ) });
}
const Tn = ({ position: e }) => /* @__PURE__ */ t(
  X.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: g(
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
function yo({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: s, isSmallScreen: i } = Me(), l = Te(), [o, d] = Ct({ threshold: 1 }), [f, u] = Ct({ threshold: 1 }), m = q(), h = {
    x: {
      ease: s !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : s !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, p = () => a ? ni(a) && r ? ma(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ c(
    X.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: g(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        s === "locked" ? "h-full" : g(
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
      transition: h,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ c("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ c(lt, { className: "h-full", children: [
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
          /* @__PURE__ */ c(Ie, { children: [
            !d && /* @__PURE__ */ t(Tn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(Tn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const Su = ue(yo), wo = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
  "span",
  {
    "aria-hidden": "true",
    className: g(
      // The ring follows the item's hover/active state so the dot blends
      // with the highlighted row background.
      "ring-2 ring-f1-background-tertiary transition-[box-shadow]",
      "ring-f1-background-secondary",
      "h-2 w-2 rounded-full",
      "bg-f1-background-critical-bold"
    )
  }
) }), No = ({
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
      className: g(
        ms({ variant: r }),
        fs({ size: "md" }),
        oe()
      ),
      children: /* @__PURE__ */ c(
        "div",
        {
          className: g(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(V, { icon: e.icon, size: "md", color: "default" }),
            /* @__PURE__ */ t(
              "span",
              {
                className: g(
                  "grid transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none",
                  n ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
                ),
                children: /* @__PURE__ */ t("span", { className: "min-w-0 overflow-hidden", children: /* @__PURE__ */ t("span", { className: "block whitespace-nowrap pl-1.5", children: e.label }) })
              }
            ),
            e.badge ? /* @__PURE__ */ t(wo, {}) : null
          ]
        }
      )
    }
  );
}, Fu = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const s = q(), i = r.placeholder ?? s.navigation.sidebar.search;
  return /* @__PURE__ */ c("div", { className: "mb-5 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": s.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          No,
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
      Z,
      {
        variant: "ghost",
        size: "md",
        icon: Bt,
        label: i,
        hideLabel: !0,
        onClick: r.onClick
      }
    )
  ] });
}, Co = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Ln = {
  approved: {
    icon: Et,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: we,
    type: "critical",
    size: "sm"
  }
}, ko = {
  icon: sa,
  type: "neutral",
  size: "sm"
}, Io = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, So = (e) => e in Ln ? Ln[e] : ko;
function Rn(e) {
  return Io[e ?? "neutral"] ?? 0;
}
const Fo = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const s = q(), i = n === 1 ? s.approvals.requiredNumbers.one : s.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = s.approvals.statuses[a], o = Y(() => r.map((d) => {
    const f = So(d.status);
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
      /* @__PURE__ */ t(et, { text: l, variant: Co[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t($t, { avatars: o, layout: "fill", type: "person", size: "md" }) })
  ] });
}, Ao = ({ steps: e }) => {
  const a = q().approvals.history, r = e.findIndex((s) => s.status === "pending");
  return /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ c("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((s, i) => /* @__PURE__ */ c("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: i + 1 })
          }
        ),
        i !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, s.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((s, i) => /* @__PURE__ */ c(te, { children: [
        /* @__PURE__ */ t(
          Fo,
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
}, Au = ue(
  re("OneApprovalHistory", Ao)
), vt = (e, n) => typeof n == "string" && n in e;
function Dn(e, n, a) {
  const r = {};
  let s = !1;
  const i = hs(e);
  if (i !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(i).filter(
        ([u]) => vt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(i).length === 0) && (a.setCurrentFilters(f), r.filters = f, s = !0);
  }
  const l = e.sortings;
  if (l === null)
    a.setCurrentSortings(null), r.sortings = null, s = !0;
  else if (l && n.sortings && vt(n.sortings, l.field)) {
    const d = {
      field: l.field,
      order: l.order
    };
    a.setCurrentSortings(d), r.sortings = d, s = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (a.setCurrentSearch(e.search), r.search = e.search, s = !0);
  const o = e.grouping;
  if (o?.field !== void 0 && n.grouping && vt(n.grouping.groupBy, o.field)) {
    const d = {
      field: o.field,
      order: o.order
    };
    a.setCurrentGrouping(d), r.grouping = d, s = !0;
  }
  return s ? r : null;
}
function Tu(e) {
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
    navigationMode: h = "url",
    deps: p = []
  } = e, x = ps(), v = di(n, p), [y, L] = O(null), R = y?.key === a && y.settled, _ = z(v);
  _.current = v;
  const D = z(x);
  D.current = x;
  const P = z(null), S = m === void 0 ? null : JSON.stringify(m), W = z(m);
  W.current = m;
  const E = z(null), w = () => {
    const U = W.current;
    U !== void 0 && (E.current = JSON.stringify(U), _.current.setCurrentFilters(U));
  };
  j(() => {
    if (!f || P.current === a) return;
    if (!u) {
      P.current = a, w(), L({ key: a, applied: null, settled: !1 });
      return;
    }
    let U = !1;
    return (async () => {
      let fe = null;
      try {
        const Ne = await D.current.get(
          a
        );
        Ne && !U && (fe = Dn(
          Ne,
          _.current,
          _.current
        ));
      } catch {
      }
      U || (P.current = a, w(), L({ key: a, applied: fe, settled: !1 }));
    })(), () => {
      U = !0;
    };
  }, [a, f, u]), j(() => {
    !R || S === null || E.current !== S && w();
  }, [R, S]), j(() => {
    if (!(!f || !u))
      return gs(a, async () => {
        try {
          const U = await D.current.get(
            a
          );
          if (!U) return;
          const ie = _.current;
          Dn(
            U,
            {
              filters: W.current === void 0 ? ie.filters : void 0,
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
    data: k,
    paginationInfo: F,
    setPage: A,
    loadMore: M,
    isLoading: b,
    isInitialLoading: N
  } = bs(
    v,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && R,
      fetchParamsProvider: (U) => ({
        ...U,
        navigationFilters: v.currentNavigationFilters
      })
    },
    [JSON.stringify(v.currentNavigationFilters)]
  );
  j(() => {
    L(
      (U) => U && U.key === a && !U.settled ? { ...U, settled: !0 } : U
    );
  }, [y, a]);
  const I = o ?? n.itemUrl, T = ui({
    dataSource: v,
    data: k,
    paginationInfo: F,
    setPage: A,
    loadMore: M,
    isLoading: b,
    idProvider: l,
    itemUrl: I,
    activeItemId: r,
    defaultActiveItemId: s,
    onActiveItemChange: i
  }), Q = typeof T.activeItemId == "string" || typeof T.activeItemId == "number" ? T.activeItemId : null, J = T.activeItem !== null, B = J && T.nextItem === null && T.hasNext, me = J && T.previousItem === null && T.hasPrevious, G = Q !== null && (!J || B || me), de = [
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
  ], { neighbors: se, isSupported: be } = fi({
    dataAdapter: v.dataAdapter,
    id: Q,
    filters: v.currentFilters,
    sortings: de,
    search: v.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && R && !N && !b && G,
    fetchParamsProvider: (U) => ({
      ...U,
      navigationFilters: v.currentNavigationFilters
    })
  }), he = Y(() => l || (v.idProvider ? (U, ie) => v.idProvider(U, ie) : mi), [l, v.idProvider]), C = Y(() => {
    if (!G || se === null) return T;
    const U = T.previousItem ?? se.previous, ie = T.nextItem ?? se.next, fe = (Ne) => Ne && I ? I(Ne) ?? null : null;
    return {
      ...T,
      previousItem: U,
      nextItem: ie,
      previousItemUrl: T.previousItemUrl ?? fe(U),
      nextItemUrl: T.nextItemUrl ?? fe(ie),
      absoluteIndex: T.absoluteIndex ?? (se.position !== void 0 ? se.position - 1 : null),
      totalItems: T.totalItems ?? se.total,
      hasPrevious: T.hasPrevious || U !== null,
      hasNext: T.hasNext || ie !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: J ? T.goToPrevious : () => {
        se.previous && T.setActiveItemId(
          he(se.previous)
        );
      },
      goToNext: J ? T.goToNext : () => {
        se.next && T.setActiveItemId(
          he(se.next)
        );
      }
    };
  }, [
    T,
    G,
    se,
    J,
    I,
    he
  ]), K = Vi(C, {
    getItemTitle: d,
    mode: h
  }), le = f && R && be && G && se === null, ae = z(null), pe = K ?? (le ? ae.current : null);
  return j(() => {
    K !== null && (ae.current = K);
  }, [K]), {
    ...C,
    isNavigating: C.isNavigating || le,
    isReady: R && !N,
    navigation: pe,
    appliedCollectionState: y?.applied ?? null,
    dataSource: v,
    data: k,
    paginationInfo: F,
    isLoading: b
  };
}
const Ua = Le(null), Lu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(Ua.Provider, { value: e, children: n });
function Ee() {
  const e = ke(Ua);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const To = 200, Lo = 1600, Ha = Le(null), Ro = ({
  children: e
}) => {
  const { messages: n, searchMessages: a, loadMessageContext: r } = Ee(), [s, i] = O(null), [l, o] = O(null), d = z(null), f = z(null), u = z(null), [m, h] = O(!1), [p, x] = O(""), [v, y] = O([]), [L, R] = O(-1), _ = z(n);
  _.current = n;
  const D = z(a);
  D.current = a;
  const P = z(r);
  P.current = r;
  const S = z(v);
  S.current = v;
  const W = z(L);
  W.current = L;
  const E = z(0);
  j(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const w = H((G) => {
    d.current = G;
  }, []), k = H((G) => {
    f.current = G;
  }, []), F = H((G) => {
    f.current?.(G);
  }, []), A = H((G, de) => {
    d.current?.(G), o(G), u.current && clearTimeout(u.current), de || (u.current = setTimeout(
      () => o(null),
      Lo
    ));
  }, []), M = H(
    (G) => A(G, !1),
    [A]
  ), b = H(
    (G, de = S.current) => {
      const se = de[G];
      if (se == null) return;
      R(G);
      const be = () => A(se, !0), he = P.current;
      he ? he(se).then(be) : be();
    },
    [A]
  );
  j(() => {
    if (!m) return;
    const G = p.trim();
    if (G === "") {
      y([]), R(-1), o(null);
      return;
    }
    const de = ++E.current, se = setTimeout(() => {
      const be = (C) => {
        de === E.current && (y(C), C.length > 0 ? b(C.length - 1, C) : (R(-1), o(null)));
      }, he = D.current;
      if (he)
        he(G).then((C) => be(C.map((K) => K.id)));
      else {
        const C = G.toLowerCase();
        be(
          _.current.filter((K) => !K.deleted && K.body.toLowerCase().includes(C)).map((K) => K.id)
        );
      }
    }, To);
    return () => clearTimeout(se);
  }, [p, m, b]);
  const N = H(() => h(!0), []), I = H(() => {
    E.current++, h(!1), x(""), y([]), R(-1), o(null);
  }, []), T = H(() => {
    const G = S.current;
    G.length !== 0 && b((W.current + 1) % G.length, G);
  }, [b]), Q = H(() => {
    const G = S.current;
    G.length !== 0 && b((W.current - 1 + G.length) % G.length, G);
  }, [b]), J = v.length, B = L >= 0 ? L + 1 : 0, me = Y(
    () => ({
      replyTo: s,
      setReplyTo: i,
      highlightedId: l,
      jumpToMessage: M,
      registerScrollToMessage: w,
      registerFileDropHandler: k,
      dropFiles: F,
      searchOpen: m,
      openSearch: N,
      closeSearch: I,
      searchQuery: p,
      setSearchQuery: x,
      matchCurrent: B,
      matchTotal: J,
      goToNextMatch: T,
      goToPrevMatch: Q
    }),
    [
      s,
      l,
      M,
      w,
      k,
      F,
      m,
      N,
      I,
      p,
      B,
      J,
      T,
      Q
    ]
  );
  return /* @__PURE__ */ t(Ha.Provider, { value: me, children: e });
};
function Re() {
  const e = ke(Ha);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Do = ({
  message: e,
  onRemove: n
}) => {
  const a = q(), r = e.attachments?.find((i) => i.kind === "image"), s = e.body || e.attachments?.[0]?.name || "";
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ c("div", { className: "flex items-start justify-center gap-2 rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(V, { icon: Mt, size: "md", color: "default" }) }),
    r && /* @__PURE__ */ t(
      "img",
      {
        src: r.url,
        alt: "",
        className: "h-9 w-9 shrink-0 rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(ge, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.author.name }),
      /* @__PURE__ */ t(
        ge,
        {
          className: "text-sm text-f1-foreground-secondary",
          lines: 2,
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ t(
      ne,
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
}, Oo = 140, Po = () => {
  const e = q(), { sendMessage: n, onInputActivity: a, uploadFiles: r, transcribe: s } = Ee(), { replyTo: i, setReplyTo: l, registerFileDropHandler: o } = Re(), [d, f] = O(""), [u, m] = O([]), h = z(null), p = z(null), x = z(0), v = u.some((b) => b.status === "uploading"), y = H(() => {
    const b = h.current;
    b && (b.style.height = "auto", b.style.height = `${Math.min(b.scrollHeight, Oo)}px`);
  }, []), L = z(""), R = H(
    (b) => {
      const N = L.current;
      f(N ? `${N} ${b}` : b), requestAnimationFrame(y);
    },
    [y]
  ), _ = xs({
    onTranscribe: s,
    onPartial: R,
    onFinal: R,
    onError: () => {
    }
  }), D = _.status === "transcribing", P = _.status === "recording", S = !!s && _.isSupported, W = (d.trim().length > 0 || u.length > 0) && !D && !v, E = H(
    (b) => {
      f(b.target.value), a(), y();
    },
    [y, a]
  ), w = H(
    async (b) => {
      if (b.length === 0 || !r) return;
      const N = b.map((T) => ({
        id: `att-${x.current++}`,
        status: "uploading",
        name: T.name
      }));
      m((T) => [...T, ...N]);
      const I = new Set(N.map((T) => T.id));
      try {
        const Q = (await r(b)).map((J, B) => ({
          id: N[B]?.id ?? `att-${x.current++}`,
          status: "ready",
          attachment: J
        }));
        m((J) => [
          ...J.filter((B) => !I.has(B.id)),
          ...Q
        ]);
      } catch {
        m((T) => T.filter((Q) => !I.has(Q.id)));
      }
    },
    [r]
  );
  j(() => {
    o((b) => {
      w(b);
    });
  }, [o, w]);
  const k = H(() => {
    if (!W) return;
    const b = u.flatMap(
      (I) => I.status === "ready" ? [I.attachment] : []
    );
    n({
      body: d.trim(),
      attachments: b.length > 0 ? b : void 0,
      replyToId: i?.id
    }), f(""), m([]), l(null);
    const N = h.current;
    N && (N.style.height = "auto");
  }, [u, W, i, n, l, d]), F = H(
    (b) => {
      b.key === "Enter" && !b.shiftKey && (b.preventDefault(), k());
    },
    [k]
  ), A = H(() => {
    L.current = d, _.start();
  }, [_, d]), M = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ c("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background", children: [
    i && /* @__PURE__ */ t(
      Do,
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
          (b) => b.status === "uploading" ? /* @__PURE__ */ t($, { className: "h-9 w-36 rounded-[10px]" }, b.id) : /* @__PURE__ */ t(
            oa,
            {
              size: "md",
              file: {
                name: b.attachment.name,
                type: b.attachment.mimeType ?? (b.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: we,
                  onClick: () => m(
                    (N) => N.filter((I) => I.id !== b.id)
                  )
                }
              ]
            },
            b.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: h,
        value: d,
        onChange: E,
        onKeyDown: F,
        rows: 1,
        placeholder: P ? e.chat.listening : M,
        className: g(
          "w-full resize-none bg-transparent px-3.5 pt-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    P ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ c("div", { className: "flex items-center gap-3 p-2", children: [
        /* @__PURE__ */ t(
          vs,
          {
            stream: _.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            ne,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: we,
              onClick: _.cancel
            }
          ),
          /* @__PURE__ */ t(
            ne,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: Et,
              onClick: _.stop
            }
          )
        ] })
      ] })
    ) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between p-2", children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: p,
          type: "file",
          multiple: !0,
          className: "hidden",
          onChange: (b) => {
            w(Array.from(b.target.files ?? [])), b.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ t(
        ne,
        {
          variant: "outline",
          size: "md",
          hideLabel: !0,
          label: e.chat.attachFile,
          icon: ys,
          onClick: () => p.current?.click(),
          disabled: !r || D
        }
      ),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        S && /* @__PURE__ */ t(
          ne,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: ws,
            onClick: A,
            loading: D
          }
        ),
        /* @__PURE__ */ t(
          ne,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.chat.send,
            icon: Hn,
            onClick: k,
            disabled: !W
          }
        )
      ] })
    ] })
  ] }) }) });
}, Eo = ({
  visible: e
}) => {
  const n = q();
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": !e,
      className: g(
        "pointer-events-none absolute inset-1 z-50 flex flex-col items-center justify-center gap-2 rounded-xl",
        "border border-dashed border-f1-border bg-f1-background-tertiary/80 backdrop-blur",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none",
        e ? "opacity-100" : "opacity-0"
      ),
      children: [
        /* @__PURE__ */ t(V, { icon: Ns, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, _o = () => {
  const e = q(), {
    searchQuery: n,
    setSearchQuery: a,
    matchCurrent: r,
    matchTotal: s,
    goToNextMatch: i,
    goToPrevMatch: l,
    closeSearch: o
  } = Re(), d = s > 0, f = n.trim().length > 0;
  return /* @__PURE__ */ c("div", { className: "flex w-full items-center gap-2", onKeyDown: (m) => {
    m.key === "Enter" ? (m.preventDefault(), m.shiftKey ? l() : i()) : m.key === "Escape" && (m.preventDefault(), o());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      Cs,
      {
        value: n,
        onChange: a,
        placeholder: e.chat.searchPlaceholder,
        autoFocus: !0,
        clearable: !0,
        size: "sm"
      }
    ) }),
    /* @__PURE__ */ t("span", { className: "shrink-0 whitespace-nowrap text-sm tabular-nums text-f1-foreground-secondary", children: f && !d ? e.chat.noResults : `${r}/${s}` }),
    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.previousMatch,
          icon: ks,
          onClick: l,
          disabled: !d
        }
      ),
      /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.nextMatch,
          icon: zt,
          onClick: i,
          disabled: !d
        }
      ),
      /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.closeSearch,
          icon: we,
          onClick: o
        }
      )
    ] })
  ] });
}, Xt = ({
  user: e,
  children: n
}) => {
  const a = q();
  return /* @__PURE__ */ c(Is, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(Ss, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      Fs,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          As,
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
}, zo = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: g("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, Bo = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: a,
  onClose: r
}) => {
  const s = q(), { searchOpen: i, openSearch: l } = Re(), o = e.type === "dm" && e.presence !== void 0, d = /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ c("div", { className: "relative shrink-0", children: [
      /* @__PURE__ */ t(He, { size: "sm", avatar: e.avatar }),
      o && /* @__PURE__ */ t(zo, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      V,
      {
        icon: Ts,
        size: "sm",
        color: "secondary",
        "aria-label": s.chat.muted
      }
    ),
    e.statuses?.map((f) => /* @__PURE__ */ t(
      V,
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
    /* @__PURE__ */ t(_o, {})
  ) : /* @__PURE__ */ c(te, { children: [
    e.user ? /* @__PURE__ */ t(Xt, { user: e.user, children: d }) : d,
    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.chat.search,
          icon: Bt,
          onClick: l
        }
      ),
      a && /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? s.chat.collapse : s.chat.expand,
          icon: n ? Ls : Rs,
          onClick: a
        }
      ),
      r && /* @__PURE__ */ t(
        ne,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.chat.close,
          icon: we,
          onClick: r
        }
      )
    ] })
  ] }) });
}, $o = "latest", Mo = 1440 * 60 * 1e3, On = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function Zt(e, n) {
  return Math.round((On(n) - On(e)) / Mo);
}
function Va(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function jo(e, n, a, r) {
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
function rt(e, n, a, r) {
  return `${jo(e, n, a, r)} ${Va(e, r)}`;
}
function Wo(e, n, a, r) {
  return Zt(e, n) <= 0 ? Va(e, r) : rt(e, n, a, r);
}
const Uo = 1200 * 1e3, Ho = (e, n, a) => {
  if (!n) return !0;
  const r = new Date(n.createdAt), s = new Date(e.createdAt);
  return Zt(r, s) !== 0 ? !0 : s.getTime() - r.getTime() > a;
};
function Vo(e, n = {}) {
  const { dividerId: a = null, gapMs: r = Uo } = n, s = [], i = /* @__PURE__ */ new Map();
  let l = -1;
  return e.forEach((o, d) => {
    const f = e[d - 1], u = Ho(o, f, r);
    u && s.push({
      type: "separator",
      key: `sep-${o.id}`,
      at: o.createdAt
    });
    const m = u || !f || f.author.id !== o.author.id;
    if (!m && l >= 0) {
      const h = s[l];
      h.type === "message" && (h.isLastOfRun = !1);
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
const Go = 80, Pn = 120;
function Ko({
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
  const [m, h] = O(!1), [p, x] = O(!0), v = z(!0), y = z(s[0]?.id ?? null), L = z(s.at(-1)?.id ?? null), R = z(s.length), _ = z(!1), D = z(null), P = H(
    (E = "smooth") => {
      a.length > 0 && n.scrollToIndex(a.length - 1, { align: "end", behavior: E });
    },
    [n, a.length]
  ), S = H(
    (E) => {
      const w = n.getVirtualItemForOffset(E);
      if (!w) return null;
      for (let k = w.index; k < a.length; k++)
        if (a[k].type === "message") return k;
      return null;
    },
    [n, a]
  ), W = H(() => {
    const E = e.current;
    if (!E) return;
    const { scrollTop: w, scrollHeight: k, clientHeight: F } = E, A = k - w - F, M = A < Go;
    if (v.current = M, x(M), h(A > F * 0.5), w < Pn && i && !l) {
      const b = S(w), N = b != null ? a[b] : null;
      if (N && N.type === "message") {
        const I = n.getOffsetForIndex(b, "start")?.[0] ?? 0;
        D.current = { id: N.message.id, delta: I - w };
      }
      o();
    }
    A < Pn && d && !f && u?.();
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
  return Vt(() => {
    const E = e.current;
    if (!E) return;
    if (!_.current && a.length > 0) {
      d || (n.scrollToIndex(a.length - 1, { align: "end" }), x(!0)), _.current = !0, y.current = s[0]?.id ?? null, L.current = s.at(-1)?.id ?? null, R.current = s.length;
      return;
    }
    const w = s[0]?.id ?? null, k = s.at(-1), F = s.length > R.current, A = F && w !== y.current, M = F && k?.id !== L.current;
    if (A && D.current) {
      const b = r.get(D.current.id);
      if (b != null) {
        const N = n.getOffsetForIndex(b, "start")?.[0] ?? 0;
        E.scrollTop = N - D.current.delta;
      }
      D.current = null;
    } else M && !d && (k?.isMine || v.current) && (n.scrollToIndex(a.length - 1, { align: "end" }), x(!0));
    y.current = w, L.current = k?.id ?? null, R.current = s.length;
  }, [s, a.length, e, n, r, d]), { scrolledUp: m, atBottom: p, scrollToBottom: P, handleScroll: W };
}
const qo = {
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
}, Yo = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, Qo = (e) => qo[na(Yo(e)) ?? "viridian"], Jo = ({
  message: e,
  isMine: n,
  author: a
}) => {
  const r = q();
  return e.deleted ? /* @__PURE__ */ t(
    "div",
    {
      className: g(
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
      className: g(
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
            className: g(
              "mb-0.5 block w-fit cursor-default text-sm font-medium",
              Qo(a)
            ),
            children: a.name
          }
        ) }),
        e.body
      ]
    }
  );
}, yt = ({
  label: e,
  value: n
}) => /* @__PURE__ */ c("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), Xo = ({
  message: e,
  onBack: n
}) => {
  const a = q(), { channel: r } = Ee(), s = { today: a.chat.today, yesterday: a.chat.yesterday }, i = /* @__PURE__ */ new Date(), l = r.type === "group";
  return /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ c("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        ne,
        {
          icon: Ds,
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
        yt,
        {
          label: a.t(
            (e.readByCount ?? 0) === 1 ? "chat.readBy.one" : "chat.readBy.other",
            { count: e.readByCount ?? 0 }
          )
        }
      ) : e.readAt && /* @__PURE__ */ t(
        yt,
        {
          label: a.chat.read,
          value: rt(new Date(e.readAt), i, s)
        }
      )),
      /* @__PURE__ */ t(
        yt,
        {
          label: a.chat.delivered,
          value: rt(new Date(e.createdAt), i, s)
        }
      )
    ] })
  ] });
}, Zo = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], ec = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", Ye = ({
  icon: e,
  label: n,
  onClick: a,
  trailing: r
}) => /* @__PURE__ */ c(
  "button",
  {
    type: "button",
    onClick: a,
    className: g(ec, oe("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(V, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      r
    ]
  }
), tc = ({
  message: e,
  isMine: n,
  open: a,
  onOpenChange: r
}) => {
  const s = q(), { toggleReaction: i, deleteMessage: l } = Ee(), { setReplyTo: o } = Re(), [d, f] = O("menu"), u = (p) => {
    r(p), p || f("menu");
  }, m = (p) => {
    i(e.id, p), u(!1);
  }, h = (p) => () => {
    p(), u(!1);
  };
  return /* @__PURE__ */ c(Jn, { open: a, onOpenChange: u, children: [
    /* @__PURE__ */ t(Xn, { asChild: !0, children: /* @__PURE__ */ t(
      ne,
      {
        variant: "outline",
        hideLabel: !0,
        label: s.chat.moreActions,
        icon: Os,
        pressed: a
      }
    ) }),
    /* @__PURE__ */ t(
      Zn,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: d === "info" ? /* @__PURE__ */ t(
          Xo,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ c(te, { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between p-2", children: [
            Zo.map((p) => /* @__PURE__ */ t(
              ne,
              {
                label: p,
                emoji: p,
                variant: "ghost",
                "aria-label": p,
                onClick: () => m(p),
                className: "h-8 w-8 rounded text-base hover:bg-f1-background-secondary-hover"
              },
              p
            )),
            /* @__PURE__ */ t(
              dt,
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
              Ye,
              {
                icon: Ps,
                label: s.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  V,
                  {
                    icon: it,
                    size: "md",
                    className: "text-f1-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              Ye,
              {
                icon: Mt,
                label: s.chat.reply,
                onClick: h(() => o(e))
              }
            ),
            /* @__PURE__ */ t(
              Ye,
              {
                icon: Es,
                label: s.chat.copy,
                onClick: h(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ c(te, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              Ye,
              {
                icon: la,
                label: s.chat.delete,
                onClick: h(() => l(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, nc = (e, n) => {
  const a = document.createElement("a");
  a.href = e, a.download = n, a.rel = "noreferrer", a.click();
}, ac = ({
  message: e,
  isMine: n
}) => {
  const a = q(), r = e.attachments;
  if (!r || r.length === 0) return null;
  const s = r.filter((o) => o.kind === "image"), i = r.filter((o) => o.kind === "file"), l = s.length === 1;
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        s.length > 0 && /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: s.map((o, d) => /* @__PURE__ */ t(
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
                className: g(
                  "rounded-xl border border-solid border-f1-border-secondary object-cover",
                  l ? "max-h-60 max-w-full" : "h-28 w-28"
                )
              }
            )
          },
          `${o.url}-${d}`
        )) }),
        i.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: i.map((o, d) => /* @__PURE__ */ t(
          oa,
          {
            size: "md",
            file: { name: o.name, type: o.mimeType ?? "" },
            actions: [
              {
                label: a.chat.download,
                icon: _s,
                onClick: () => nc(o.url, o.name)
              }
            ]
          },
          `${o.url}-${d}`
        )) })
      ]
    }
  );
}, rc = ({
  message: e,
  isMine: n
}) => {
  const a = q(), { toggleReaction: r } = Ee();
  return !e.reactions || e.reactions.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      className: g(
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
          dt,
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
}, sc = ({
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
      className: g(
        "flex max-w-[80%] items-center gap-2 rounded-md pb-3 text-left text-f1-foreground-secondary transition-colors hover:text-f1-foreground-secondary",
        n ? "self-end pr-2" : a ? "self-start pl-7" : "self-start pl-2"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ t(V, { icon: Mt }) }),
        s && /* @__PURE__ */ t(
          "img",
          {
            src: s.url,
            alt: "",
            className: "h-9 w-9 shrink-0 rounded-sm object-cover"
          }
        ),
        /* @__PURE__ */ t(ge, { className: "min-w-0 text-base leading-5", lines: 2, children: i })
      ]
    }
  );
}, ic = ({
  message: e,
  isMine: n,
  author: a,
  bubbleGutter: r,
  belowGutter: s
}) => {
  const [i, l] = O(!1), { highlightedId: o } = Re(), d = o === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0, h = m || u;
  return /* @__PURE__ */ c(
    "div",
    {
      "data-msg-id": e.id,
      className: g(
        "group flex flex-col",
        n ? "items-end" : "items-start"
      ),
      children: [
        e.replyTo && !e.deleted && /* @__PURE__ */ t(
          sc,
          {
            reply: e.replyTo,
            isMine: n,
            indented: !!r
          }
        ),
        h && /* @__PURE__ */ c(
          "div",
          {
            className: g(
              "flex w-full gap-2",
              n ? "flex-row-reverse items-center" : "items-end"
            ),
            children: [
              r,
              /* @__PURE__ */ c(
                "div",
                {
                  className: g(
                    "flex min-w-0 items-center gap-1",
                    n ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ c(
                      "div",
                      {
                        className: g(
                          // `transition-shadow` is always on so the jump-to highlight ring
                          // fades in/out instead of snapping when `highlighted` toggles.
                          "flex max-w-full flex-col gap-1 rounded-2xl transition-shadow duration-200",
                          n ? "items-end" : "items-start",
                          d && "ring-1 ring-f1-special-ring ring-offset-2",
                          !e.deleted && "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          i && "bg-f1-background-hover"
                        ),
                        children: [
                          u && /* @__PURE__ */ t(ac, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(Jo, { message: e, isMine: n, author: a })
                        ]
                      }
                    ),
                    !e.deleted && /* @__PURE__ */ t(
                      "div",
                      {
                        className: g(
                          "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                          i && "opacity-100"
                        ),
                        children: /* @__PURE__ */ t(
                          tc,
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
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(rc, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, lc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...a } = e.avatar;
    return a;
  }
  return { firstName: e.name, lastName: "" };
}, oc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: g(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), cc = ({
  users: e,
  isGroup: n
}) => {
  const a = q(), r = Te();
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
            $t,
            {
              type: "person",
              size: "xs",
              max: 3,
              noTooltip: !0,
              avatars: e.map(lc)
            }
          ) })
        ) : /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
          He,
          {
            size: "xs",
            avatar: e[0].avatar ?? {
              type: "person",
              firstName: e[0].name,
              lastName: ""
            }
          }
        ) })),
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(oc, { animate: !r }) })
      ]
    }
  );
}, Ga = ({ at: e }) => {
  const n = q(), a = rt(new Date(e), /* @__PURE__ */ new Date(), {
    today: n.chat.today,
    yesterday: n.chat.yesterday
  });
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: a }) });
}, dc = ({
  message: e,
  isGroup: n
}) => {
  const a = q(), r = Te(), s = Wo(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: a.chat.today,
    yesterday: a.chat.yesterday
  });
  let i = s;
  return e.isMine && (e.status === "failed" ? i = a.chat.error : e.status === "read" ? i = n && e.readByCount ? a.t(
    e.readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: e.readByCount }
  ) : `${a.chat.read} ${s}` : e.status === "sent" && (i = `${a.chat.sent} ${s}`)), /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: /* @__PURE__ */ t(
        X.span,
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
}, uc = () => {
  const e = q();
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2 py-2", children: [
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border" }),
    /* @__PURE__ */ t("span", { className: "text-md font-medium text-f1-foreground", children: e.chat.newMessages }),
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, En = (e) => /* @__PURE__ */ t(
  He,
  {
    size: "xs",
    avatar: e.avatar ?? { type: "person", firstName: e.name, lastName: "" }
  }
), fc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-6" : "pt-2" : "pt-6", mc = ({
  row: e,
  isGroup: n,
  isFirstRow: a,
  isLastRow: r,
  enterAnimation: s,
  animatedIds: i
}) => {
  const l = g(fc(e, a), r && "pb-6"), [o] = O(
    () => s && e.type === "message" && e.isLastMessage && !i.has(e.message.id)
  );
  if (j(() => {
    e.type === "message" && i.add(e.message.id);
  }, [e, i]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(Ga, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(uc, {}) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t(cc, { users: e.users, isGroup: n }) });
  const { message: d, isFirstOfRun: f, isLastOfRun: u, isLastMessage: m } = e, h = d.isMine, p = n && !h, x = p ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: En(d.author) }) : void 0, v = p ? u ? /* @__PURE__ */ t(Xt, { user: d.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: En(d.author) }) }) : x : void 0, y = /* @__PURE__ */ c(te, { children: [
    /* @__PURE__ */ t(
      ic,
      {
        message: d,
        isMine: h,
        author: p && f ? d.author : void 0,
        bubbleGutter: v,
        belowGutter: x
      }
    ),
    m && /* @__PURE__ */ c("div", { className: "flex w-full gap-2", children: [
      x,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(dc, { message: d, isGroup: n }) })
    ] })
  ] });
  return o ? /* @__PURE__ */ t(
    X.div,
    {
      className: g("flex flex-col gap-1", l),
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.18, ease: "easeOut" },
      children: y
    }
  ) : /* @__PURE__ */ t("div", { className: g("flex flex-col gap-1", l), children: y });
}, hc = ai(mc), pc = 5e3, gc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, bc = (e, n) => {
  for (let a = n; a < e.length; a++) {
    const r = e[a];
    if (r.type === "message") return r.message.createdAt;
    if (r.type === "separator") return r.at;
  }
  return null;
}, xc = () => {
  const e = q(), {
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
    firstUnreadId: h,
    markRead: p
  } = Ee(), x = Te(), v = a.type === "group", y = z(null), { registerScrollToMessage: L } = Re(), [R, _] = O(!1), [D, P] = O(h), S = z(null), { rows: W, indexById: E } = Y(
    () => Vo(n, { dividerId: D }),
    [n, D]
  ), w = Y(
    () => r.length > 0 ? [...W, { type: "typing", key: "typing", users: r }] : W,
    [W, r]
  ), k = Kn({
    count: w.length,
    getScrollElement: () => y.current,
    estimateSize: (C) => gc(w[C]),
    getItemKey: (C) => w[C].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (C) => Math.round(C.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: F, atBottom: A, scrollToBottom: M, handleScroll: b } = Ko({
    viewportRef: y,
    virtualizer: k,
    rows: w,
    indexById: E,
    messages: n,
    hasMoreOlder: s,
    loadingOlder: i,
    onReachTop: l,
    hasMoreNewer: o,
    loadingNewer: d,
    onReachBottom: f
  }), N = r.length > 0, I = z(!1);
  j(() => {
    N && !I.current && A && M("smooth"), I.current = N;
  }, [N, A, M]);
  const T = z(null), Q = H(() => {
    const C = T.current;
    if (!C) return;
    if (C.kind === "bottom") {
      w.length > 0 && (k.scrollToIndex(w.length - 1, { align: "end" }), T.current = null);
      return;
    }
    const K = E.get(C.id);
    K != null && (k.scrollToIndex(K, { align: "center", behavior: "smooth" }), T.current = null);
  }, [E, k, w.length]);
  j(Q, [Q]), j(() => {
    L((C) => {
      T.current = { kind: "id", id: C }, Q();
    });
  }, [L, Q]);
  const J = H(() => {
    o && u ? (T.current = { kind: "bottom" }, u($o)) : M();
  }, [o, u, M]), B = A && R;
  j(() => {
    B && m > 0 && p?.();
  }, [B, m, p]), j(() => {
    h && !B ? (P(h), S.current && (clearTimeout(S.current), S.current = null)) : D && !S.current && (S.current = setTimeout(() => {
      P(null), S.current = null;
    }, pc));
  }, [h, B, D]), j(
    () => () => {
      S.current && clearTimeout(S.current);
    },
    []
  );
  const me = z(null);
  me.current === null && n.length > 0 && (me.current = new Set(n.map((C) => C.id)));
  const G = me.current ?? vc, de = k.getVirtualItems(), se = de[0], be = se ? bc(w, se.index) : null, he = F || o;
  return /* @__PURE__ */ c(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: y,
            onScroll: b,
            className: "absolute inset-0 overflow-y-auto px-4",
            children: /* @__PURE__ */ t(
              "div",
              {
                className: "relative mx-auto w-full max-w-content",
                style: { height: k.getTotalSize() },
                children: /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute left-0 top-0 w-full",
                    style: {
                      transform: `translateY(${de[0]?.start ?? 0}px)`
                    },
                    children: de.map((C) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": C.index,
                        ref: k.measureElement,
                        children: /* @__PURE__ */ t(
                          hc,
                          {
                            row: w[C.index],
                            isGroup: v,
                            isFirstRow: C.index === 0,
                            isLastRow: C.index === w.length - 1,
                            enterAnimation: !x,
                            animatedIds: G
                          }
                        )
                      },
                      C.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ie, { children: F && be && /* @__PURE__ */ t(
          X.div,
          {
            className: "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
            initial: { opacity: 0, y: -4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ c(
              "div",
              {
                className: "flex items-center gap-1.5 rounded-full bg-f1-background border border-solid border-f1-border-secondary px-2.5 py-0.5 backdrop-blur",
                "aria-label": i ? e.chat.loadingOlder : void 0,
                children: [
                  i && /* @__PURE__ */ t(Pt, { size: "small", className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ t(Ga, { at: be })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(Ie, { children: he && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          X.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              ne,
              {
                onClick: J,
                variant: "neutral",
                icon: zs,
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
}, vc = /* @__PURE__ */ new Set(), De = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ c(
  "div",
  {
    className: g("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t($, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((a, r) => /* @__PURE__ */ t($, { className: g("h-8 rounded-2xl", a) }, r))
        }
      )
    ]
  }
), yc = () => /* @__PURE__ */ c(
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
), Ka = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), wc = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(yc, {}) }), Nc = () => {
  const e = q();
  return /* @__PURE__ */ t(Ka, { children: e.chat.error });
}, Cc = () => {
  const e = q();
  return /* @__PURE__ */ t(Ka, { children: e.chat.emptyConversation });
}, Qe = (e) => e.dataTransfer?.types?.includes("Files"), kc = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: a
}) => {
  const { channel: r, status: s, messages: i } = Ee(), { dropFiles: l } = Re(), o = z(0), [d, f] = O(!1);
  return /* @__PURE__ */ c(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (u) => {
        Qe(u) && (u.preventDefault(), u.stopPropagation(), o.current++, f(!0));
      },
      onDragOver: (u) => {
        Qe(u) && (u.preventDefault(), u.stopPropagation());
      },
      onDragLeave: (u) => {
        Qe(u) && (u.preventDefault(), u.stopPropagation(), o.current--, o.current <= 0 && (o.current = 0, f(!1)));
      },
      onDrop: (u) => {
        if (!Qe(u)) return;
        u.preventDefault(), u.stopPropagation(), o.current = 0, f(!1);
        const m = Array.from(u.dataTransfer.files);
        m.length > 0 && l(m);
      },
      children: [
        /* @__PURE__ */ t(
          Bo,
          {
            channel: r,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: a
          }
        ),
        s === "connecting" ? /* @__PURE__ */ t(wc, {}) : s === "error" ? /* @__PURE__ */ t(Nc, {}) : i.length === 0 ? /* @__PURE__ */ t(Cc, {}) : /* @__PURE__ */ t(xc, {}),
        /* @__PURE__ */ t(Po, {}),
        /* @__PURE__ */ t(Eo, { visible: d })
      ]
    }
  );
}, Ru = (e) => /* @__PURE__ */ t(Ro, { children: /* @__PURE__ */ t(kc, { ...e }) }), en = {
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
}, Ic = Fe({
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
}), Sc = xe.forwardRef(function({ className: n, gap: a, children: r, tileSize: s, ...i }, l) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: l, ...i, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(Ic({ gap: a, tileSize: s }), n),
      ref: l,
      ...i,
      children: r
    }
  ) });
}), Fc = Fe({
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
}), qa = ee(function({
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
  height: h,
  width: p,
  ...x
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        Fc({
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
          height: h,
          width: p
        }),
        n
      ),
      ref: v,
      ...x
    }
  );
}), Ac = Fe({
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
}), Tc = xe.forwardRef(function({ className: n, gap: a, wrap: r, ...s }, i) {
  return /* @__PURE__ */ t(
    qa,
    {
      className: g(Ac({ gap: a, wrap: r }), n),
      ref: i,
      ...s
    }
  );
}), Lc = Fe({
  base: "flex-col",
  variants: {
    gap: {
      ...en
    }
  },
  defaultVariants: {}
}), Rc = ee(function({ className: n, gap: a, children: r, ...s }, i) {
  return /* @__PURE__ */ t(
    qa,
    {
      className: g(Lc({ gap: a }), n),
      ref: i,
      ...s,
      children: r
    }
  );
}), Du = Ce(
  {
    name: "Stack",
    type: "layout"
  },
  Rc
), Ou = Ce(
  {
    name: "Split",
    type: "layout"
  },
  Tc
), Pu = Ce(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Sc
), Dc = ({ children: e }) => {
  const { enabled: n } = ga();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        X.div,
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
}, Oc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Pc = ee(function({ header: n, children: a, action: r, summaries: s, alert: i, status: l, fullHeight: o = !1 }, d) {
  const { enabled: f, toggle: u } = ga();
  j(() => {
    if (i && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, l]);
  const m = (p) => !!p && !(xe.isValidElement(p) && p.type === xe.Fragment && xe.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ c(
    jt,
    {
      className: g(
        o ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ c("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ c("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Ut, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Oc, {}),
                /* @__PURE__ */ t(ca, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Ae, { label: n.info, children: /* @__PURE__ */ t(
                V,
                {
                  icon: da,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(ot, { value: n.count }) })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ t(ua, { text: i, level: "critical" }),
              l && /* @__PURE__ */ t(et, { text: l.text, variant: l.variant }),
              n.link && /* @__PURE__ */ t(
                Bs,
                {
                  onClick: h,
                  href: n.link.url,
                  title: n.link.title,
                  icon: n.link.icon
                }
              )
            ] })
          ] }),
          n.comment && /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ t(Dc, { children: /* @__PURE__ */ t($s, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              Z,
              {
                icon: f ? Ms : js,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ c(Ht, { className: "flex h-full flex-col gap-4", children: [
          s && /* @__PURE__ */ t("div", { className: "flex flex-row", children: s.map((p, x) => /* @__PURE__ */ c("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ c("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, x)) }),
          xe.Children.toArray(a).filter(m).map((p, x) => /* @__PURE__ */ c(xe.Fragment, { children: [
            x > 0 && /* @__PURE__ */ t(hi, { bare: !0 }),
            p
          ] }, x))
        ] }),
        r && /* @__PURE__ */ t(Ws, { children: /* @__PURE__ */ t(Z, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Ec = Fe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), _c = ee(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ c(
      jt,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ c(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Ut, { children: n.title }) : /* @__PURE__ */ t($, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(ca, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Ht,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && Ec({ height: a })),
              children: [...Array(4)].map((s, i) => /* @__PURE__ */ t(
                $,
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
  re("Widget", ce(Pc, _c))
), ye = Object.assign(
  ee(function({ chart: n, summaries: a, ...r }, s) {
    return /* @__PURE__ */ t(ze, { ref: s, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), zc = ce(
  ee(function({ canBeBlurred: n, ...a }, r) {
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
      ye,
      {
        ref: r,
        ...s,
        chart: /* @__PURE__ */ t(pi, { ...i, canBeBlurred: n })
      }
    );
  }),
  ye.Skeleton
), Bc = re(
  "AreaChartWidget",
  zc
), $c = ee(function(n, a) {
  return /* @__PURE__ */ t(
    ye,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(gi, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Mc = re(
  "BarChartWidget",
  ce($c, ye.Skeleton)
), jc = ce(
  ee(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(bi, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), Wc = re(
  "LineChartWidget",
  jc
), Uc = ce(
  ee(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(xi, { ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), Hc = re(
  "PieChartWidget",
  Uc
), Vc = ce(
  ee(
    function(n, a) {
      return /* @__PURE__ */ t(ye, { ref: a, ...n, chart: null });
    }
  ),
  ye.Skeleton
), Gc = re(
  "SummariesWidget",
  Vc
), Kc = ce(
  ee(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(vi, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), qc = re(
  "VerticalBarChartWidget",
  Kc
), Eu = Ce(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Bc
), _u = Ce(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Mc
), zu = Ce(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Wc
), Bu = Ce(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Hc
), $u = Ce(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  qc
), Mu = Ce(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Gc
), Yc = (e, n) => /* @__PURE__ */ c(
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
), Qc = ee(Yc), Jc = (e, n) => /* @__PURE__ */ c(
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
), Xc = ee(Jc), Zc = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, ed = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, td = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, nd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, ad = ee(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: s, buttonAction: i, type: l }, o) {
    const d = Zc[l], f = ed[l], u = td[l], m = nd[l];
    return /* @__PURE__ */ c(
      jt,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: o,
        children: [
          /* @__PURE__ */ t(Wt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Ut, { children: n }) }),
          /* @__PURE__ */ c(Ht, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Qc, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(Xc, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                Z,
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
), ju = ue(
  re("ChartWidgetEmptyState", ad)
);
function rd(e, n) {
  const a = z(null), r = z(null), [s, i] = O({
    visibleItems: [],
    overflowItems: []
  });
  Us({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const l = H(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), o = H(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const p = u[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), d = H(
    (u, m) => {
      let h = 0, p = 0;
      for (let x = 0; x < u.length; x++) {
        const v = p + u[x];
        if (v > m + 30) break;
        p = v, p = l(
          p,
          x,
          u.length
        ), h++;
      }
      return h;
    },
    [l]
  ), f = H(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = o(), h = d(
      m,
      u
    );
    i(h === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (p) => p.visibleItems.length === h && p.overflowItems.length === e.length - h ? p : {
      visibleItems: e.slice(0, h),
      overflowItems: e.slice(h)
    });
  }, [e, o, d]);
  return j(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: s.visibleItems,
    overflowItems: s.overflowItems
  };
}
const ht = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: s = 0,
  minSize: i,
  onVisibleItemsChange: l
}) {
  const { containerRef: o, measurementContainerRef: d, visibleItems: f } = rd(n, s);
  return j(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ c(
    "div",
    {
      ref: o,
      className: g("relative flex h-full flex-col", r),
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
ht.displayName = "VerticalOverflowList";
const Wu = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((s) => /* @__PURE__ */ t(Rt, { ...s }, s.title)) }) : /* @__PURE__ */ t(
  ht,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (s) => /* @__PURE__ */ t(Rt, { ...s }, s.title)
  }
) : null, sd = ({ onClick: e, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: g(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: a, tabIndex: 1, children: n });
};
function Uu({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: s
}) {
  return /* @__PURE__ */ t(sd, { onClick: s, children: /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        s && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(V, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const id = ee(
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
        "icon" in s && s.icon && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(V, { icon: s.icon }) }),
        "emoji" in s && s.emoji && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(ct, { emoji: s.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Hu = ee(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: s, color: i, ...l }) => /* @__PURE__ */ t(
          id,
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
), ld = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const s = g(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: s, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: s, children: r });
};
function Vu({
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
    ld,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in o && !!o.emoji,
      withPointerCursor: i,
      children: [
        "alert" in o && o.alert && /* @__PURE__ */ t(Hs, { type: o.alert }),
        "emoji" in o && o.emoji && /* @__PURE__ */ t(Vs, { emoji: o.emoji }),
        /* @__PURE__ */ c("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          $t,
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
const od = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function _n({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: s
}) {
  const i = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ c(od, { onClick: (o) => {
    o.preventDefault(), r?.(e);
  }, className: i, children: [
    /* @__PURE__ */ t(aa, { module: s ?? "inbox", size: "sm" }),
    /* @__PURE__ */ c("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const cd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Dt({
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
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ c(cd, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ c("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ t(
        V,
        {
          icon: i,
          size: "md",
          className: g("mt-0.5", o)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        V,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(ua, { ...a }),
      r && /* @__PURE__ */ t($e, { ...r }),
      !!s && /* @__PURE__ */ t(ot, { value: s })
    ] })
  ] });
}
function Gu({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: s
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((i) => /* @__PURE__ */ t(_n, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ t(
    ht,
    {
      items: e,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ t(_n, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: s,
      gap: 8
    }
  );
}
function Ku({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: s
}) {
  return s ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((i) => /* @__PURE__ */ t(Dt, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ t(
    ht,
    {
      items: e,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ t(Dt, { ...i, onClick: r }),
      minSize: a
    }
  );
}
const dd = ({ title: e, info: n }) => /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), qu = ee(
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
              children: /* @__PURE__ */ t(V, { icon: da, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      s.map((l) => /* @__PURE__ */ t(dd, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function Yu({
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
      yi,
      {
        data: a,
        legend: s,
        hideTooltip: i
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: s ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: g(
          "text-f1-foreground",
          s ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const Ya = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, ud = ({
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
    const u = Ya(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), x = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${x}` : `${n.overtime} ${x}`;
  })(), f = Oe[l];
  return {
    status: l,
    statusText: o,
    subtitle: d,
    statusColor: f
  };
}, wt = "--:--", fd = (e, n) => {
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
}, md = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, s = Ya(
    n,
    a
  ), i = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (s ?? 0) * 60, l = r || (s ?? 0) < 0 ? void 0 : fd(
    s ?? 0,
    i
  );
  let o = (s ?? 0) < 0 ? Math.abs(s ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, o) : 0, v = (h - p) / i;
        return o -= p, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: p / i + v,
            color: Oe.overtime
          }
        ] : [
          ...u,
          {
            value: p / i,
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
}, hd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, s = e.at(-1), i = r ? an(r) : wt, l = n === void 0 || n > 0 ? wt : s ? an(s.to) : wt, d = s?.variant === "break" ? s?.to.getTime() - s?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function pd({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = md({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: s, secondaryLabel: i, time: l } = hd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ c("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(wi, { width: 156, height: 156, children: /* @__PURE__ */ t(
      Ni,
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
          Gs,
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
function gd({
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
        a && /* @__PURE__ */ t(V, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ t(
          "span",
          {
            className: g(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(V, { icon: Ks })
      ]
    }
  );
}
function Qu({
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
  onChangeBreakTypeId: h,
  canShowBreakButton: p = !0,
  canSeeGraph: x = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: L = !0,
  projectSelectorElement: R,
  breakTypeName: _
}) {
  const { status: D, statusText: P, subtitle: S, statusColor: W } = ud({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), E = D === "clocked-out", w = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? r.paid : r.unpaid
  })) ?? [], [k, F] = O(!1), A = () => {
    if (w.length > 1)
      k || F(!0);
    else {
      const B = w?.[0]?.value;
      u?.(B);
    }
  }, M = (B) => {
    h?.(B), F(!1), u?.(B);
  }, b = E && i.length && !o && l, N = i.find((B) => B.id === s), I = i.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), T = D === "break", [Q, J] = O(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ c("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ c("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: P }),
            /* @__PURE__ */ c("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                X.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: W
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
                    backgroundColor: W
                  }
                }
              )
            ] })
          ] }),
          S && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: S })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            Z,
            {
              onClick: d,
              label: r.clockIn,
              icon: rn
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ c(te, { children: [
            p && /* @__PURE__ */ t(te, { children: w.length > 1 && h ? /* @__PURE__ */ t(
              tt,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: M,
                open: k,
                onOpenChange: F,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  Z,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: sn,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              Z,
              {
                onClick: A,
                label: r.break,
                variant: "neutral",
                icon: sn,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              Z,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: ln
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ c(te, { children: [
            /* @__PURE__ */ t(
              Z,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: ln,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              Z,
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
        pd,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: b ? /* @__PURE__ */ c(te, { children: [
      /* @__PURE__ */ t(
        tt,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: s,
          options: I,
          onChange: y,
          open: Q,
          onOpenChange: J,
          disabled: o,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            gd,
            {
              text: N?.name,
              placeholder: r.selectLocation,
              icon: N?.icon
            }
          ) })
        }
      ),
      L && R
    ] }) : /* @__PURE__ */ c(te, { children: [
      l && N && /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t($e, { text: N.name, icon: N.icon }) }),
      L && R,
      T && _ && /* @__PURE__ */ t($e, { text: _ })
    ] }) })
  ] }) });
}
const bd = {
  done: Qs,
  "in-progress": Ys,
  todo: qs
}, xd = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function vd({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const s = () => {
    a?.(e);
  }, i = Y(() => {
    if (!r)
      return bd[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Dt,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: xd[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Js
      } : void 0,
      count: e.counter,
      onClick: s
    }
  );
}
function Ju({
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
    ).map(({ id: u, text: m, badge: h, counter: p }) => ({
      id: u,
      text: m,
      badge: h,
      counter: p,
      status: f
    }))
  ), o = !l.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: o ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: s }) : l.slice(0, r).map((d) => /* @__PURE__ */ t(
    vd,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var yd = Object.defineProperty, wd = Object.defineProperties, Nd = Object.getOwnPropertyDescriptors, st = Object.getOwnPropertySymbols, Qa = Object.prototype.hasOwnProperty, Ja = Object.prototype.propertyIsEnumerable, zn = (e, n, a) => n in e ? yd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, ve = (e, n) => {
  for (var a in n || (n = {})) Qa.call(n, a) && zn(e, a, n[a]);
  if (st) for (var a of st(n)) Ja.call(n, a) && zn(e, a, n[a]);
  return e;
}, pt = (e, n) => wd(e, Nd(n)), Cd = (e, n) => {
  var a = {};
  for (var r in e) Qa.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && st) for (var r of st(e)) n.indexOf(r) < 0 && Ja.call(e, r) && (a[r] = e[r]);
  return a;
}, kd = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Id = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Sd = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = ve({}, n);
    return r.right = e.left, r;
  }
  return null;
}, Fd = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = ve({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Ad = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let s = ve({}, r);
  return s.left = n.left + e.width, kd(s) || Id({ usedSpot: s, spotsList: a }) ? null : s;
}, Td = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((s, i, l) => {
  if (s === a) return Ad({ stone: r, position: n, optimalSpot: a, spotsList: l });
  let o = Sd({ position: n, spot: s, stone: r });
  return o || Fd({ position: n, stone: r, spot: s }) || s;
});
function Ld(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let s = n[a];
    if (e(s)) return s;
  }
  return null;
}
var Rd = (e, n) => n.filter(e), Dd = (e, n) => [...n].sort(e), Od = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Pd = (e) => Dd(Od, e), Ed = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, _d = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, zd = ({ availableSpots: e, stone: n }) => Ld((a) => _d(a, n), e);
function Bd({ stone: e, availableSpots: n, containerSize: a }) {
  let r = zd({ availableSpots: n, stone: e }), s = { left: r.left, top: r.top }, i = Ed({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), l = [...n, i], o = Td({ spots: l, position: s, optimalSpot: r, stone: e });
  return l = [...Rd(Boolean, o)], l = Pd(l), { position: s, availableSpots: l };
}
var $d = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, s = [], i = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let o = Bd({ availableSpots: i, stone: l, containerSize: n }), d = o.position.top + l.height;
    r < d && (r = d), s.push(o.position), i = o.availableSpots;
  }
  return { availableSpots: i, positions: s, containerHeight: r };
}, Md = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), jd = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: s }) => {
  let [{ positions: i, containerHeight: l, stones: o, availableSpots: d }, f] = O({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = Md(e.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let x = $d({ stones: h, containerSize: p });
    f(pt(ve({}, x), { stones: h }));
  }, [a, e, n, r, s]), { positions: i, containerHeight: l, stones: o, availableSpots: d };
}, Wd = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Ud = ({ transition: e, transitionDuration: n }) => e ? { transition: Wd(n)[e] } : null, Hd = (e) => e ? pt(ve({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Vd = ({ style: e, position: n, transition: a, transitionDuration: r }) => ve(ve(pt(ve({}, e), { position: "absolute" }), Hd(n)), Ud({ transition: a, transitionDuration: r }));
function Gd(e, n, a) {
  let r;
  return function(...s) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, s);
    }, n);
  };
}
var Kd = () => {
  let [e, n] = O(), a = z(Gd(n, 300));
  return j(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, qd = (e) => {
  let [n, a] = O(null);
  return j(() => {
    let r = new ResizeObserver((s) => {
      for (let i of s) a(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, Yd = (e) => {
  var n = e, { children: a, style: r, transition: s = !1, transitionDuration: i = 500, transitionStep: l = 50 } = n, o = Cd(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = Kd(), m = qd(f), { positions: h, containerHeight: p } = jd({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), x = ve({ minHeight: p ?? 0, position: "relative" }, r);
  return t("div", pt(ve({ ref: f, style: x }, o), { children: ha.map(a, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let L = { style: Vd({ style: v.props.style, position: h[y], transition: s, transitionDuration: i }), ref: (R) => d.current[y] = R };
    return ma(v, ve(ve({}, v.props), L));
  }) }));
};
const Qd = { sm: 340, md: 480, lg: 640 }, Bn = ee(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const s = Qd[a], [i, l] = O(), o = ha.toArray(n), d = z(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && l(Math.floor(u / s) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, s]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: i === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Yd, { children: o.map((f, u) => /* @__PURE__ */ t(
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
), Jd = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Xu = ce(Bn, () => /* @__PURE__ */ t(fa, { children: /* @__PURE__ */ t(Bn, { children: Jd.map((e, n) => /* @__PURE__ */ t(ze.Skeleton, { height: e }, n)) }) })), $n = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Zu = ce(
  ee(function({ children: n }, a) {
    return /* @__PURE__ */ t(lt, { ref: a, showBar: !1, children: /* @__PURE__ */ t($n, { children: n }) });
  }),
  () => /* @__PURE__ */ t(fa, { orientation: "horizontal", children: /* @__PURE__ */ c($n, { children: [
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {})
  ] }) })
);
function Xd({
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
    Ci,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const ef = ue(
  re("WidgetEmptyState", Xd)
), Xa = ee(
  ({ title: e, children: n }, a) => (Xs(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ c("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
Xa.displayName = "WidgetSection";
const tf = ue(
  re("WidgetSection", Xa)
), nf = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const s = Zs(), i = window.location.pathname, l = Y(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), o = Y(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return l ? r : (s && console.error(o), null);
}, af = ue(
  Ce(
    {
      name: "ScrollArea",
      type: "layout"
    },
    lt
  )
);
export {
  du as ActivityItemList,
  Sl as ActivityItemListSkeleton,
  Zi as AiPromotionChat,
  el as AiPromotionChatProvider,
  pu as ApplicationFrame,
  _f as AreaChart,
  Eu as AreaChartWidget,
  Pu as AutoGrid,
  os as Badge,
  zf as BarChart,
  _u as BarChartWidget,
  Il as BaseActivityItemList,
  Bf as BaseBanner,
  Rl as BaseCelebration,
  Ml as BaseCommunityPost,
  lf as BaseTabs,
  of as BreadcrumbSelect,
  Ti as Breadcrumbs,
  Rt as CalendarEvent,
  Wu as CalendarEventList,
  $f as CardSelectableContainer,
  ri as Carousel,
  Mf as CategoryBarChart,
  Yu as CategoryBarSection,
  uu as Celebration,
  Dl as CelebrationSkeleton,
  ju as ChartWidgetEmptyState,
  cf as Chip,
  Qu as ClockInControls,
  jf as ComboChart,
  mu as CommunityPost,
  jl as CommunityPostSkeleton,
  oo as CompanySelector,
  ot as Counter,
  Xu as Dashboard,
  gu as DaytimePage,
  df as DetailsItem,
  uf as DetailsItemsList,
  Wf as Dialog,
  Be as Dropdown,
  cu as EntitySelect,
  Uf as F0ActionBar,
  Hf as F0AiBanner,
  aa as F0AvatarModule,
  ff as F0ButtonToggle,
  iu as F0Callout,
  mf as F0CardHorizontal,
  Ru as F0Chat,
  Lu as F0ChatProvider,
  oa as F0FileItem,
  Vf as F0NotesTextEditor,
  Gf as F0NotesTextEditorSkeleton,
  Kf as F0NumberInput,
  Kr as F0RichTextDisplay,
  qf as F0RichTextEditor,
  Cs as F0SearchInput,
  lu as F0SegmentedBar,
  Yf as F0SegmentedControl,
  Qf as F0TableOfContent,
  Jf as F0TextAreaInput,
  hf as F0TextInput,
  ou as F0VersionHistory,
  Xf as F1SearchBox,
  Zf as FILE_TYPES,
  pf as FileItem,
  fu as HighlightBanner,
  Hu as IndicatorsList,
  em as Input,
  tm as Item,
  nm as ItemSectionHeader,
  $o as LATEST,
  am as LineChart,
  zu as LineChartWidget,
  ku as Menu,
  gf as MobileDropdown,
  rm as NotesTextEditor,
  sm as NotesTextEditorSkeleton,
  im as NumberInput,
  bu as OmniButton,
  Au as OneApprovalHistory,
  bf as OneCalendar,
  xf as OneCalendarInternal,
  lm as OneDataCollection,
  om as OneDateNavigator,
  Ci as OneEmptyState,
  cm as OnePagination,
  hu as OnePersonListItem,
  nf as OneRestrictComponent,
  xu as Page,
  su as PageHeader,
  qt as PageHeaderNavigationContext,
  au as PageHeaderNavigationProvider,
  _i as PageNavigation,
  dm as PieChart,
  Bu as PieChartWidget,
  Dc as PrivateBox,
  um as ProgressBarChart,
  fm as RadarChart,
  Pl as Reactions,
  mm as ResourceHeader,
  vf as RichTextDisplay,
  hm as RichTextEditor,
  af as ScrollArea,
  Iu as SearchBar,
  pm as SectionHeader,
  tt as Select,
  us as Shortcut,
  Su as Sidebar,
  so as SidebarChatItem,
  ja as SidebarChatItemSkeleton,
  wu as SidebarChatList,
  no as SidebarChatListSkeleton,
  vu as SidebarChatProvider,
  Qt as SidebarCollapsibleSection,
  Nu as SidebarFooter,
  Cu as SidebarHeader,
  Fu as SidebarTabs,
  Pt as Spinner,
  Ou as Split,
  Du as Stack,
  Mu as SummariesWidget,
  yf as Switch,
  wf as Tabs,
  Nf as TabsSkeleton,
  Ju as TasksList,
  gm as Textarea,
  Cf as ToggleGroup,
  kf as ToggleGroupItem,
  Ae as Tooltip,
  qu as TwoColumnsList,
  bm as UPLOAD_INPUT_ID,
  xm as VerticalBarChart,
  $u as VerticalBarChartWidget,
  At as VirtualList,
  If as WeekStartDay,
  Sf as Weekdays,
  ze as Widget,
  Vu as WidgetAvatarsListItem,
  ef as WidgetEmptyState,
  Uu as WidgetHighlightButton,
  Gu as WidgetInboxList,
  _n as WidgetInboxListItem,
  tf as WidgetSection,
  Ku as WidgetSimpleList,
  Dt as WidgetSimpleListItem,
  Zu as WidgetStrip,
  vm as actionBarStatuses,
  ym as buttonToggleSizes,
  wm as buttonToggleVariants,
  Ff as chipVariants,
  Nm as downloadAsCSV,
  Af as f0FileItemSizes,
  Cm as generateCSVContent,
  Tf as getGranularityDefinition,
  Lf as getGranularityDefinitions,
  Rf as getGranularitySimpleDefinition,
  Df as granularityDefinitions,
  Of as modules,
  km as predefinedPresets,
  Pf as rangeSeparator,
  Dn as seedFromStorage,
  Im as selectSizes,
  ut as useAiPromotionChat,
  Sm as useDataCollectionData,
  Tu as useDataCollectionItemNavigation,
  di as useDataCollectionSource,
  Fm as useExportAction,
  Ee as useF0Chat,
  Am as useInfiniteScrollPagination,
  Vi as usePageHeaderItemNavigation,
  ru as usePageHeaderNavigation,
  Me as useSidebar,
  yu as useSidebarChatActions,
  eo as useSidebarChats
};
