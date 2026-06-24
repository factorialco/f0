import { h as ir, B as lr, i as or, j as cr, k as en, l as Ke, m as Ue, n as dr, o as g, p as ee, q as Ae, u as X, T as ur, r as fr, s as mr, R as hr, t as pr, v as de, w as gr, x as _t, y as Ct, z as tt, A as Ce, E as br, G as xr, H as Y, J as $n, K as ct, L as se, M as vr, N as yr, O as Mn, Q as wr, S as Nr, U as ne, V as j, W as Ee, X as Cr, Y as kr, Z as Ir, _ as Sr, $ as Fr, a0 as Ne, a1 as jn, a2 as Te, a3 as nt, e as Wn, a4 as Be, a5 as Un, a6 as Et, a7 as me, a8 as le, a9 as Pt, aa as Hn, ab as Ar, ac as Vn, ad as ge, ae as ue, af as Tr, ag as Rr, ah as Lr, ai as Dr, aj as Or, ak as Fe, al as dt, am as Gn, an as _r, ao as Er, ap as Pr, aq as ut, ar as Kn, as as qn, at as zr, au as Br, av as at, aw as $r, ax as Yn, ay as Mr, az as jr, aA as Wr, aB as Ur, aC as Hr, aD as Qn, aE as Xn, aF as Jn, aG as kt, aH as Zn, aI as It, aJ as ea, aK as Vr, aL as Gr, aM as Kr, aN as ta, aO as qr, aP as Se, aQ as Me, aR as St, aS as na, aT as Yr, aU as zt, aV as Qr, aW as Xr, aX as Jr, aY as $e, aZ as Zr, a_ as es, a$ as qe, b0 as tn, b1 as Ft, b2 as ts, b3 as ns, a as as, b as rs, b4 as aa, b5 as ss, g as is, F as ls, b6 as os, b7 as ra, b8 as cs, b9 as Bt, ba as ds, bb as Ve, bc as us, bd as fs, be as sa, bf as ms, bg as hs, bh as ps, bi as ia, bj as $t, bk as gs, bl as bs, bm as xs, bn as Mt, bo as vs, bp as ys, bq as ws, br as Ns, bs as Cs, bt as ks, bu as la, bv as oa, bw as Is, bx as ca, by as Ss, bz as Fs, bA as As, bB as Ts, bC as Rs, bD as Ls, bE as Ds, bF as Os, bG as _s, bH as Es, bI as Ps, bJ as zs, bK as Bs, bL as $s, bM as Ms, bN as js, bO as Ws, bP as Us, bQ as Hs, bR as ke, bS as jt, bT as Wt, bU as Ut, bV as da, bW as Ht, bX as ua, bY as fa, bZ as Vs, b_ as Gs, b$ as Ks, c0 as qs, c1 as Ys, c2 as Qs, c3 as Xs, c4 as Js, c5 as nn, c6 as Zs, c7 as ei, c8 as an, c9 as rn, ca as sn, cb as ti, cc as ni, cd as ai, ce as ri, cf as ma, cg as si, ch as ii } from "./F0CanvasPanel-CoKA6woy.js";
import { ct as hf, cs as pf, cF as gf, cp as bf, cq as xf, ci as vf, cj as yf, ck as wf, cI as Nf, cr as Cf, cB as kf, cC as If, cG as Sf, cl as Ff, cv as Af, cu as Tf, cm as Rf, cn as Lf, cD as Df, cJ as Of, cE as _f, cH as Ef, cA as Pf, cx as zf, cz as Bf, cw as $f, co as Mf, cy as jf } from "./F0CanvasPanel-CoKA6woy.js";
import { jsx as t, jsxs as o, Fragment as re } from "react/jsx-runtime";
import ve, { forwardRef as ae, useRef as P, useTransition as li, useState as L, useLayoutEffect as rt, useId as At, useContext as Ie, createContext as Re, useEffect as H, useCallback as K, useMemo as te, Fragment as oi, isValidElement as ci, cloneElement as ha, memo as di, Children as pa } from "react";
import { C as ui, P as fi, a as Ge, M as mi, p as hi, b as pi, R as ln, c as ga, u as gi, d as bi, e as xi, f as vi, g as yi, O as ba, h as xa, S as wi, A as Ni, B as Ci, L as ki, i as Ii, V as Si, j as Fi, k as Ai, l as Ti } from "./useDataCollectionSource-C0xJ2RlC.js";
import { r as Uf, s as Hf, o as Vf, H as Gf, t as Kf, z as qf, a8 as Yf, G as Qf, q as Xf, aa as Jf, a9 as Zf, Q as em, ad as tm, F as nm, Y as am, U as rm, J as sm, af as im, K as lm, Z as om, _ as cm, v as dm, ab as um, ac as fm, N as mm, $ as hm, a5 as pm, a7 as gm, w as bm, y as xm, D as vm, W as ym, ae as wm, X as Nm, T as Cm, ag as km, x as Im, E as Sm, m as Fm, n as Am, a1 as Tm, a2 as Rm, a6 as Lm, I as Dm, a3 as Om, a0 as _m, a4 as Em } from "./useDataCollectionSource-C0xJ2RlC.js";
const Ri = ir("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), va = ae(({ className: e, items: n }, a) => /* @__PURE__ */ t(lr, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(or, {}),
  /* @__PURE__ */ t(cr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
va.displayName = "CollapsedBreadcrumbItem";
const Vt = 50, Li = 120, st = 8;
function Di(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let s = e - r - st, i = 0, l = 1;
  for (let c = a - 1; c > 0; c--) {
    const u = n[c];
    if (s < u)
      break;
    s -= u, i = c, l++;
  }
  if (l < a)
    for (s -= Vt; s < 0 && l > 1; )
      s += n[i], i++, l--;
  return Math.max(2, l);
}
function on(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + st;
    default:
      return e[0] + Vt + e[e.length - 1] + st;
  }
}
function Oi(e, n) {
  return Li * e + (n ? Vt : 0) + st;
}
function _i(e, n, a = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Oi(
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
      minWidth: on(s)
    };
  const i = Di(e, s);
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
    minWidth: on(s)
  };
}
function Ei({ breadcrumbs: e, append: n }) {
  const a = P(null), r = P(null), [, s] = li(), [i, l] = L(null), c = (i?.collapsedItems || []).length > 0;
  return rt(() => {
    const u = a.current, f = r.current;
    if (!u || !f || f.children.length < e.length) return;
    const d = () => {
      const p = a.current?.clientWidth ?? null, h = Array.from(f.children);
      s(() => {
        const b = _i(
          p,
          e,
          h
        );
        l(b);
      });
    }, m = new ResizeObserver(d);
    return m.observe(u), d(), () => m.disconnect();
  }, [e, n]), !e.length || i && !i.headItem ? /* @__PURE__ */ t(en, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    en,
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
            children: e.map((u, f) => /* @__PURE__ */ t(
              Ke,
              {
                item: u,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              Ue(u)
            ))
          }
        ),
        i && i.headItem && /* @__PURE__ */ o(dr, { children: [
          /* @__PURE__ */ t(
            Ke,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${Ue(i.headItem)}`
          ),
          c && /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t(
              va,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((u, f) => /* @__PURE__ */ t(
              Ke,
              {
                item: u,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              Ue(u)
            ))
          ] }),
          !c && /* @__PURE__ */ t(re, { children: i.tailItems.map((u, f) => /* @__PURE__ */ t(
            Ke,
            {
              item: u,
              isLast: f === i.tailItems.length - 1,
              isFirst: !1,
              children: f === i.tailItems.length - 1 ? n : void 0
            },
            Ue(u)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Ue(e.at(-1)) ?? 0}`
  );
}
const Pi = Ae({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), cn = [
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
], zi = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...s
}, i) => {
  const l = At(), {
    onAnimationStart: c,
    onAnimationEnd: u,
    onDragStart: f,
    onDragEnd: d,
    onDrag: m,
    className: p,
    ...h
  } = s;
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(Pi({ size: n }), p),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
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
          ...(({ style: b, ...v }) => v)(h),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              cn.map((b) => /* @__PURE__ */ t("clipPath", { id: `${l}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: cn.map((b) => /* @__PURE__ */ t(
              ee.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${l}-${b.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? b.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? b.delay : 0,
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
                    delay: e ? b.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${b.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: b.transformOrigin,
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
              b.id
            )) })
          ]
        }
      )
    }
  );
}, ya = ae(zi), wa = Re(null), Bi = 15, $i = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [s, i] = L(n), [l, c] = L(!1), [u, f] = L(!0), [d, m] = L(
    Bi
  ), p = P(null), h = (v) => {
    p.current = v;
  }, b = () => {
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
    wa.Provider,
    {
      value: {
        ...r,
        enabled: s,
        setEnabled: i,
        open: l,
        setOpen: c,
        shouldPlayEntranceAnimation: u,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: s ? d : null,
        clear: b,
        setClearFunction: h
      },
      children: e
    }
  );
}, Pe = () => {
};
function ft() {
  const e = Ie(wa);
  return e === null ? {
    enabled: !1,
    setEnabled: Pe,
    open: !1,
    setOpen: Pe,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Pe,
    setAutoClearMinutes: Pe,
    clear: Pe,
    setClearFunction: Pe,
    autoClearMinutes: null
  } : e;
}
const Na = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: s } = ft(), i = X(), [l, c] = L(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(ur, { children: /* @__PURE__ */ o(fr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(mr, { asChild: !0, children: /* @__PURE__ */ t(
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
          hr,
          {
            onCheckedChange: (u) => {
              r(u);
            },
            checked: s,
            "aria-label": s ? i.ai.closeChat : i.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              de(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              pr,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  ya,
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
    !s && /* @__PURE__ */ t(gr, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, dn = "one_sidebar_locked", Ca = Re(void 0);
function je() {
  const e = Ie(Ca);
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
function Mi({ children: e }) {
  const { currentPath: n } = _t(), [a, r] = L(!1), [s, i] = L(!1), l = a ? tt.xl : tt.md, c = Ct(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [u, f] = L(() => {
    const F = localStorage.getItem(dn);
    return F !== null ? !!F : !0;
  }), [d, m] = L(!1), [p, h] = L(
    null
  ), b = K(
    ({ isInvokedByUser: F } = {
      isInvokedByUser: !0
    }) => {
      i(F ?? !0), c && m(!d), f(!u);
    },
    [c, d, u, f, m]
  ), v = K(
    (F) => {
      c || (F.clientX < 32 && m(!0), F.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = te(() => c ? d ? "unlocked" : "hidden" : !u && !d ? "hidden" : !u && d ? "unlocked" : "locked", [c, d, u]);
  return H(() => {
    m(!1);
  }, [n]), H(() => {
    s && localStorage.setItem(dn, u ? "1" : "");
  }, [u, s]), H(() => () => {
    h(w);
  }, [w]), /* @__PURE__ */ t(
    Ca.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: s,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: p,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const un = ee.create(Y), fn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, ji = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, s] = L(!1), i = () => {
    s(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ce, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        de()
      ),
      onClick: i,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        un,
        {
          size: "sm",
          icon: br,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: fn,
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
        un,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: xr,
          className: "outline-none",
          variants: fn,
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
function mn({
  icon: e,
  target: n,
  fallbackLabel: a
}) {
  const r = !n, s = n?.title || a, i = n?.onClick, l = i ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    se,
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
function Wi({ previous: e, next: n, counter: a }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    a && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      a.current,
      "/",
      a.total
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        mn,
        {
          icon: $n,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        mn,
        {
          icon: ct,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const Ui = ({
  currentModule: e,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: s,
  errorScreen: i,
  onOpenChange: l = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: u = () => {
  },
  hasUnread: f = !1,
  crossSelling: d
}) => {
  const [m, p] = L("idle"), [h, b] = L(null), [v, ...w] = h ?? [], [F, R] = L(!1);
  H(() => {
    b(null), p("idle");
  }, [e]);
  const z = K(async () => {
    try {
      p("fetching");
      const D = await a();
      p("idle"), b(D);
    } catch {
      p("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    vr,
    {
      open: F,
      onOpenChange: async (D) => {
        R(D), D && h === null && z(), l(D);
      },
      children: [
        /* @__PURE__ */ t(yr, { asChild: !0, children: /* @__PURE__ */ t(
          se,
          {
            variant: "outline",
            icon: Mn,
            hideLabel: !0,
            label: n,
            pressed: F,
            append: f && /* @__PURE__ */ t(Gt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(wr, { children: /* @__PURE__ */ o(
          Nr,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Gi, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Yi, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && h !== null && h.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Ki, { ...s, buttonUrl: r }) }),
                m === "idle" && h !== null && h.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Hi,
                    {
                      ...v,
                      onClick: u
                    }
                  ),
                  h.length > 1 && /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: w.map((D, E) => /* @__PURE__ */ t(
                    Vi,
                    {
                      ...D,
                      onClick: u
                    },
                    E
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  qi,
                  {
                    ...i,
                    onClick: () => {
                      z();
                    }
                  }
                ) })
              ] }),
              m === "idle" && d && d.isVisible && /* @__PURE__ */ t(
                Qi,
                {
                  isVisible: d.isVisible,
                  onClose: d.onClose,
                  crossSelling: d,
                  onDropdownClose: () => R(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Hi = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: s,
  onClick: i
}) => {
  const l = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Cr,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Ee,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: g(l, "text-f1-foreground no-underline"),
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
              kr,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: s })
              ] }),
              r && /* @__PURE__ */ t(Gt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Vi = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: s
}) => {
  const i = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Ir, { asChild: !0, className: i, onClick: s, children: /* @__PURE__ */ t(
    Ee,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: g(
        i,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(Gt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Gi = ({
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
        ne,
        {
          variant: "outline",
          size: "sm",
          icon: ct,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), ka = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: s
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
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
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), Ki = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  ka,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(Y, { icon: Mn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Ee, { href: a, children: /* @__PURE__ */ t(ne, { label: n }) })
  }
), qi = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  ka,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(Y, { icon: Sr, size: "lg" }),
    button: /* @__PURE__ */ t(ne, { variant: "outline", label: a, onClick: r })
  }
), Yi = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(j, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(j, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(j, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(j, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(j, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Gt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Qi = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [s, i] = L(e);
  H(() => {
    i(e);
  }, [e]);
  const l = () => {
    i(!1), n && n();
  }, c = (u) => {
    i(!1), r(), u && u();
  };
  return s && /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t(Fr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          ne,
          {
            variant: "ghost",
            icon: Ne,
            size: "sm",
            hideLabel: !0,
            onClick: l,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        ui,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((u) => /* @__PURE__ */ t(
            fi,
            {
              ...u,
              isVisible: !0,
              trackVisibility: u.trackVisibility,
              onClick: () => c(u.onClick)
            },
            u.title
          ))
        }
      )
    ] })
  ] });
}, Kt = Re(null), du = Kt.Provider;
function uu() {
  return Ie(Kt);
}
function Xi(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", s = e !== null, i = e?.previousItem ?? null, l = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, u = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, d = e?.totalItems, m = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, h = e?.goToPrevious, b = e?.goToNext;
  return te(() => {
    if (!s) return null;
    const v = f !== null && d !== void 0 ? { current: f + 1, total: d } : void 0, w = (z, D) => (z !== null ? a?.(z) : void 0) ?? D, F = r === "callback" ? m ? { onClick: h, title: w(i, "Previous") } : void 0 : c !== null ? { url: c, title: w(i, "Previous") } : void 0, R = r === "callback" ? p ? { onClick: b, title: w(l, "Next") } : void 0 : u !== null ? { url: u, title: w(l, "Next") } : void 0;
    return !F && !R && !v ? null : { previous: F, next: R, counter: v };
  }, [
    s,
    r,
    i,
    l,
    c,
    u,
    f,
    d,
    m,
    p,
    h,
    b,
    a
  ]);
}
function fu({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: s = !1,
  navigation: i,
  productUpdates: l,
  favorites: c,
  oneSwitchTooltip: u,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: d, toggleSidebar: m } = je(), p = Ie(Kt), h = i ?? p ?? void 0, b = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], v = n && Object.keys(n).length !== 0, w = s && a.length > 0, F = !s && r.length > 0, R = !s && !!l?.isVisible, z = b[b.length - 1], D = "navigation" in window ? window.navigation : null, E = s && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        s ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ce, { children: !s && d !== "locked" && /* @__PURE__ */ t(
            ee.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                ne,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: jn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                E && "justify-center"
              ),
              children: [
                s && E && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  ne,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: $n,
                    onClick: () => window.history.back()
                  }
                ) }),
                E || w ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in z ? /* @__PURE__ */ t(j, { className: "h-4 w-24" }) : z.label }) : /* @__PURE__ */ t(
                  Ei,
                  {
                    breadcrumbs: b,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      ji,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  b[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !s && v && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(Te, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            nt,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(nt, { text: n.text, variant: n.variant }) }),
          !s && v && (h || F || R) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Wi, { ...h }),
          h && F && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (R || F) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            R && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Ui,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            F && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((S, M) => /* @__PURE__ */ t(Ji, { action: S }, M)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Wn,
              {
                tooltip: u,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Na, {})
          ] })
        ] })
      ]
    }
  );
}
function Ji({ action: e }) {
  const n = P(null), [a, r] = L(!1), s = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    se,
    {
      size: "md",
      variant: s,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    se,
    {
      size: "md",
      variant: s,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Ee,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        se,
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
const Zi = () => {
  const e = X();
  return /* @__PURE__ */ o(
    ee.div,
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
          se,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Un,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, el = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = P(null);
  H(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, tl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: s
  } = ft();
  return el({
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
}, nl = ({ action: e, onClose: n }) => {
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
        se,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, al = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: s,
  actions: i,
  onShow: l,
  onHide: c,
  children: u
}) => /* @__PURE__ */ t(
  $i,
  {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: i,
    onShow: l,
    onHide: c,
    children: u
  }
), rl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: i,
    setOpen: l,
    onHide: c
  } = ft(), u = () => {
    l(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(tl, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      se,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ne,
        onClick: u
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(ya, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      s?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: s.map((f, d) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(Pt, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, d)) }),
      i?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, d) => /* @__PURE__ */ t(
        nl,
        {
          action: f,
          onClose: () => l(!1)
        },
        d
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Zi, {}) })
  ] }) : null;
}, sl = me(
  le("AiPromotionChat", rl)
), il = me(
  le("AiPromotionChatProvider", al)
), Ia = Ae({
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
}), hn = {
  positive: Vn,
  warning: Ar,
  info: Hn
}, pn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, ll = ae(
  function({ title: n, onClose: a, children: r, actions: s = [], variant: i }, l) {
    if (s.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${s.length} actions were provided.`
      );
    const c = s.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: l,
        className: Ia({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  pn[i]
                ),
                children: [
                  hn[i] && /* @__PURE__ */ t(Y, { icon: hn[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: pn[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              ne,
              {
                variant: "ghost",
                icon: Ne,
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
                className: g(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: s.map((u, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              ne,
              {
                label: u.label,
                onClick: u.onClick,
                variant: "outline",
                icon: u.icon
              }
            ) }, f)) })
          ] })
        ]
      }
    );
  }
), ol = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Ia({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(j, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(j, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(j, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(j, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(j, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(j, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Sa = ae(
  (e, n) => /* @__PURE__ */ t(ll, { ref: n, ...e })
), cl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ol, { compact: e, variant: n });
Sa.displayName = "F0Callout";
const mu = ue(
  me(Sa),
  cl
), Fa = ae(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, s) => {
    const i = X(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, u = Array.from({ length: l }, (d, m) => m < c), f = Tr(a);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: s,
        role: "progressbar",
        "aria-label": r,
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": c,
        "aria-valuetext": i.t("audioPlayer.position", {
          current: c,
          total: l
        }),
        className: g("flex h-2 w-full gap-1"),
        children: u.map((d, m) => /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex-1 rounded-full bg-f1-background-secondary",
              "transition-all duration-300 ease-in-out motion-reduce:transition-none"
            ),
            style: d ? { backgroundColor: f } : void 0
          },
          m
        ))
      }
    );
  }
);
Fa.displayName = "F0SegmentedBar";
const hu = me(
  le("F0SegmentedBar", Fa)
);
function dl({
  title: e,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        de("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(Y, { icon: Rr, size: "md", color: "selected" }),
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
function ul({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: s } = Lr(), i = Dr(s), l = Or(n, "PPPp", { locale: i }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        de("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${l} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            Fe,
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
function fl({
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
        /* @__PURE__ */ t(dt, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            dl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((s) => /* @__PURE__ */ t(
            ul,
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
const pu = me(
  le("F0VersionHistory", fl)
), Aa = ae(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: s }, i) => {
    const l = ve.useRef(null);
    ve.useImperativeHandle(
      i,
      () => l.current,
      []
    );
    const c = Gn({
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
              height: `${c.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: c.getVirtualItems().map((u) => /* @__PURE__ */ t(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${u.size}px`,
                  transform: `translateY(${u.start}px)`
                },
                children: u ? s(u) : /* @__PURE__ */ t(re, {})
              },
              u.key
            ))
          }
        )
      }
    );
  }
);
Aa.displayName = "VirtualList";
const Tt = le("VirtualList", Aa), Ta = ({
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
const ml = ({
  entity: e,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: s,
  search: i,
  goToFirst: l,
  goToLast: c,
  singleSelector: u = !1,
  disabled: f = !1,
  hiddenAvatar: d = !1
}) => {
  const m = e.name.split(" "), p = m[0] || "", h = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(e) : a(e));
  }, v = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else w.key === "ArrowDown" ? mt(w.currentTarget, l) : w.key === "ArrowUp" && ht(w.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: g(
        s,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && u ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !d && /* @__PURE__ */ t(
          Fe,
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
            className: g(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              Ta,
              {
                text: e.name,
                search: i,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Kn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: b,
            onKeyDown: v,
            className: g(
              "pointer-events-none ml-auto",
              u ? "opacity-0" : ""
            )
          }
        ),
        u && n && /* @__PURE__ */ t(
          Y,
          {
            className: "text-f1-icon-selected",
            icon: Vn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Ze = ({
  groupView: e,
  expanded: n,
  search: a,
  entity: r,
  selected: s,
  partialSelected: i,
  onSelect: l,
  onRemove: c,
  onExpand: u,
  goToFirst: f,
  goToLast: d,
  isChild: m = !1,
  hideLine: p = !1,
  showGroupIcon: h = !1,
  singleSelector: b = !1,
  disabled: v = !1,
  hiddenAvatar: w = !1
}) => {
  const [F, R] = L(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ml,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: s,
        onSelect: l,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: d,
        disabled: v,
        hiddenAvatar: w
      }
    );
  const z = (S) => {
    if (S.key === " ")
      S.preventDefault(), u(!n);
    else if (S.key === "Enter" && b)
      u(!n);
    else if (S.key === "Enter") {
      if (v) return;
      !s || i ? l(r) : s && c(r);
    } else S.key === "ArrowDown" ? mt(S.currentTarget, f) : S.key === "ArrowUp" && ht(S.currentTarget, d);
  }, D = () => {
    if (F)
      u(!n), R(!1);
    else {
      if (v || b) return;
      s ? c(r) : l(r);
    }
  };
  if (!r.subItems?.length) return null;
  const E = s || i;
  return /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        ne,
        {
          hideLabel: !0,
          icon: n ? _r : Er,
          onClick: () => u(!n),
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
            R(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            h && /* @__PURE__ */ t(
              Y,
              {
                icon: Pr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Ta,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(ut, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Kn,
              {
                checked: E,
                disabled: v,
                onClick: D,
                onKeyDown: z,
                indeterminate: i,
                onPointerDown: (S) => {
                  S.stopPropagation(), R(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: g("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !p && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Ze.displayName = "EntitySelectListItem";
const gn = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? mt(i.currentTarget, a) : i.key === "ArrowUp" && ht(i.currentTarget, r);
}, children: /* @__PURE__ */ o(
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
        ne,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: qn,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: g("line-clamp-1"), children: e }) }) })
    ]
  }
) }), He = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      ne,
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
    const c = a.find((u) => u.label === l);
    c && !c.disabled && c.onClick?.();
  }, i = a.every((l) => l.disabled);
  return /* @__PURE__ */ t(
    zr,
    {
      items: r,
      value: e.label,
      disabled: i,
      onClick: s,
      variant: "outline",
      size: "sm"
    }
  );
}, hl = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: s,
  anyVisibleSelected: i,
  loading: l,
  singleSelector: c,
  onSelectAll: u,
  onClear: f
}) => {
  const d = !c && (n || a), m = e && e.length > 0;
  if (!(!l && (!c && d || m))) return null;
  let h, b, v = u ? {
    label: n || "",
    onClick: u,
    variant: "outline",
    disabled: r || s
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !i
  } : void 0;
  return v || (v = w, w = void 0), m && d ? (h = /* @__PURE__ */ t(
    He,
    {
      primaryAction: v,
      secondaryActions: w ? [w] : []
    }
  ), b = /* @__PURE__ */ t(
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
  ) : d && (h = /* @__PURE__ */ t(He, { primaryAction: v, secondaryActions: [] }), w && (b = /* @__PURE__ */ t(He, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    h,
    b
  ] }) });
}, pl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: s,
  goToLast: i
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(Y, { icon: Ri, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), mt(c.currentTarget, s)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), ht(c.currentTarget, i)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    Y,
    {
      icon: Br,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), bt = 384, xt = 36, gl = 37, bn = 1, xn = 200, vn = '[data-avatarname-navigator-element="true"]', bl = ({
  groupView: e,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: s,
  onSelect: i,
  onRemove: l,
  onSubItemRemove: c,
  onSubItemSelect: u,
  onClear: f,
  onSelectAll: d,
  onSearch: m,
  selectedEntities: p = [],
  onGroupChange: h,
  onToggleExpand: b,
  searchPlaceholder: v,
  selectAllLabel: w,
  clearLabel: F,
  notFoundTitle: R,
  notFoundSubtitle: z,
  className: D,
  actions: E,
  onCreate: S,
  onCreateLabel: M,
  singleSelector: $ = !1,
  loading: C = !1,
  disabled: T = !1,
  hiddenAvatar: A = !1
}) => {
  const k = ve.useRef(null), _ = te(
    () => e ? n.reduce(
      (O, Q) => O + (Q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = K(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, bn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(vn)
      )[0]?.focus();
    }, xn);
  }, []), x = K(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, bn), setTimeout(() => {
      const O = Array.from(
        document.querySelectorAll(vn)
      );
      O[O.length - 1]?.focus();
    }, xn);
  }, []), N = te(
    () => new Map(p.map((O) => [O.id, O])),
    [p]
  ), I = K(
    (O) => {
      const Q = N.get(O.id);
      if (!e)
        return {
          selected: !!Q,
          partialSelected: !!Q
        };
      const Z = (O.subItems ?? []).filter(
        (U) => Q?.subItems?.some(
          (ie) => ie.subId === U.subId
        )
      ), J = (O.subItems?.length ?? 0) === Z.length, fe = !J && Z.length > 0;
      return { selected: J, partialSelected: fe };
    },
    [e, N]
  ), W = K(
    (O) => {
      if (O.index === 0 && S)
        return /* @__PURE__ */ t(
          gn,
          {
            label: M ?? "",
            onCreate: () => S?.(s),
            goToFirst: y,
            goToLast: x
          }
        );
      const Q = S ? O.index - 1 : O.index, Z = n[Q], { selected: J, partialSelected: fe } = I(Z);
      return /* @__PURE__ */ t(
        Ze,
        {
          expanded: Z.expanded ?? !1,
          onExpand: () => b(Z, !0),
          search: s,
          groupView: e,
          entity: Z,
          onSelect: i,
          onRemove: l,
          selected: J,
          partialSelected: fe,
          showGroupIcon: xl(a, r),
          singleSelector: $,
          goToFirst: y,
          goToLast: x,
          disabled: T,
          hiddenAvatar: A
        },
        Z.id
      );
    },
    [
      S,
      M,
      T,
      n,
      I,
      y,
      x,
      e,
      a,
      A,
      l,
      i,
      b,
      s,
      r,
      $
    ]
  ), V = te(() => e ? n.flatMap((O) => {
    const Q = Ye(
      p ?? [],
      O.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: O.id,
          subName: O.name,
          subAvatar: O.avatar,
          expanded: O.expanded ?? Q?.expanded ?? !1,
          subItems: O.subItems,
          subSearchKeys: O.searchKeys
        }
      },
      ...(O.subItems ?? []).map((Z) => ({
        parent: {
          ...O,
          expanded: O.expanded ?? Q?.expanded ?? !1
        },
        subItem: Z
      }))
    ];
  }).filter(
    (O) => (!O.parent || O.parent.expanded) && (!!O.parent || !!O.subItem.subItems && O.subItem.subItems.length > 0)
  ) : n.map((O) => ({
    parent: null,
    subItem: {
      subId: O.id,
      subName: O.name,
      subAvatar: O.avatar,
      subSearchKeys: O.searchKeys
    }
  })), [e, n, p]), B = K(
    (O) => {
      if (O.index === 0 && S)
        return /* @__PURE__ */ t(
          gn,
          {
            label: M ?? "",
            onCreate: () => S?.(s),
            goToFirst: y,
            goToLast: x
          }
        );
      const Q = S ? O.index - 1 : O.index, Z = V[Q].parent, J = V[Q].subItem;
      if (!Z) {
        const U = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, ie = Ye(
          p,
          U.id
        ), q = (U?.subItems ?? []).filter(
          (We) => ie?.subItems?.some(
            (sr) => sr.subId === We.subId
          )
        ), be = (U.subItems?.length ?? 0) === q.length, rr = !be && q.length > 0;
        return /* @__PURE__ */ t(
          Ze,
          {
            groupView: !0,
            expanded: U.expanded ?? !1,
            onExpand: (We) => b(U, We),
            search: s,
            entity: U,
            onSelect: i,
            onRemove: l,
            selected: be,
            partialSelected: rr,
            showGroupIcon: a.find((We) => We.value === r)?.groupType === "team",
            singleSelector: $,
            goToFirst: y,
            goToLast: x,
            hideLine: Q === V.length - 1,
            disabled: T,
            hiddenAvatar: A
          }
        );
      }
      let fe = !!Ye(p, J.subId);
      if (!fe) {
        const U = Ye(
          p,
          Z.id
        );
        fe = !!(Z?.subItems ?? []).filter(
          (q) => U?.subItems?.some(
            (be) => be.subId === q.subId
          )
        ).find((q) => q.subId === J.subId);
      }
      return /* @__PURE__ */ t(
        Ze,
        {
          expanded: !1,
          onExpand: () => null,
          search: s,
          groupView: !1,
          entity: {
            id: J.subId,
            name: J.subName,
            avatar: J.subAvatar,
            searchKeys: J.subSearchKeys
          },
          onSelect: () => {
            u(Z, J);
          },
          onRemove: () => c(Z, J),
          selected: !!fe,
          partialSelected: !1,
          singleSelector: $,
          goToFirst: y,
          goToLast: x,
          isChild: !0,
          hiddenAvatar: A
        }
      );
    },
    [
      V,
      p,
      s,
      $,
      y,
      x,
      i,
      l,
      a,
      T,
      b,
      r,
      u,
      c,
      A,
      S,
      M
    ]
  ), [ce, oe] = te(() => {
    if (!n.length)
      return [!1, !1];
    let O = 0, Q = 0;
    if (!e)
      O = n.length, Q = n.reduce(
        (fe, { id: U }) => fe + (N.has(U) ? 1 : 0),
        0
      );
    else {
      const fe = new Set(
        [...N.values()].flatMap(
          (U) => U.subItems?.map((ie) => ie.subId) ?? []
        )
      );
      n.forEach((U) => {
        const ie = U.subItems ?? [];
        O += ie.length, Q += ie.filter(
          (q) => fe.has(q.subId)
        ).length;
      });
    }
    const Z = O > 0 && Q === O, J = Q > 0;
    return [Z, J];
  }, [n, N, e]), he = V.length, G = !$ && (w || F), xe = E && E.length > 0, pe = !C && (!$ && G || xe);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        $ || C ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              $ || C ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                pl,
                {
                  search: s,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: y,
                  goToLast: x
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                at,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: C,
                  onChange: h,
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
        /* @__PURE__ */ o(
          "section",
          {
            className: g(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              pe ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              C && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(Et, {}) }),
              !C && !_ && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: bt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: R }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: z })
                  ]
                }
              ),
              !C && (!!_ || S) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Tt,
                {
                  height: bt,
                  itemCount: he + (S ? 1 : 0),
                  itemSize: (O) => {
                    if (O === 0 && S) return xt;
                    const Q = S ? O - 1 : O;
                    return V[Q]?.parent === null ? gl : xt;
                  },
                  renderer: B,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                Tt,
                {
                  height: bt,
                  itemCount: n.length + (S ? 1 : 0),
                  itemSize: xt,
                  renderer: W,
                  ref: k
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          hl,
          {
            onSelectAll: d,
            onClear: f,
            singleSelector: $,
            totalFilteredEntities: _,
            allVisibleSelected: ce,
            anyVisibleSelected: oe,
            selectAllLabel: w,
            clearLabel: F,
            disabled: T,
            actions: E
          }
        )
      ]
    }
  );
}, Ye = (e, n) => e.find((a) => a.id === n), xl = (e, n) => e.find((a) => a.value === n)?.groupType === "team", vl = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: s = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  $r,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      s ? "pl-2" : "pl-0"
    ),
    left: !s && /* @__PURE__ */ t(
      Yn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Mr, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      Y,
      {
        icon: Ne,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), yl = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  disabled: i = !1,
  hiddenAvatar: l = !1
}) => {
  const c = te(() => {
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
    })), d = /* @__PURE__ */ new Set();
    return f.filter((m) => {
      const p = m.subItem.subId;
      return d.has(p) ? !1 : (d.add(p), !0);
    });
  }, [e, r]), u = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: s && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      u,
      " ",
      s
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      Tt,
      {
        height: 425,
        itemCount: u,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const d = c[f.index];
          return d ? /* @__PURE__ */ t(
            vl,
            {
              deactivated: d.subItem.subDeactivated,
              entity: d.subItem,
              disabled: i,
              hiddenAvatar: l,
              onRemove: () => d.parent ? n?.(d.parent, d.subItem) : a({
                id: d.subItem.subId,
                name: d.subItem.subName,
                avatar: d.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(re, {});
        }
      }
    ) })
  ] });
}, wl = 500, yn = 520, wn = 210, Nn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  width: i,
  singleSelector: l = !1,
  loading: c = !1,
  hiddenAvatar: u = !1,
  actions: f,
  onCreate: d,
  onCreateLabel: m,
  ...p
}) => {
  const h = (i ?? yn) < wl, b = !c && !l && !h, v = i ?? yn, w = b ? v - wn : v;
  return /* @__PURE__ */ o(
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
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ t(
              bl,
              {
                ...p,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: l,
                loading: c,
                disabled: p.disabled,
                hiddenAvatar: u,
                actions: f,
                onCreate: d,
                onCreateLabel: m
              }
            )
          }
        ),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: wn + "px"
            },
            children: /* @__PURE__ */ t(
              yl,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: s,
                disabled: p.disabled,
                hiddenAvatar: u
              }
            )
          }
        )
      ]
    }
  );
}, Nl = ({
  placeholder: e,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: s = !1,
  label: i,
  labelIcon: l,
  icon: c,
  error: u,
  status: f,
  hint: d,
  onClickContent: m,
  hideLabel: p = !1,
  maxLength: h,
  loading: b = !1,
  required: v = !1,
  readonly: w = !1,
  append: F,
  size: R = "sm",
  open: z
}) => {
  const D = te(
    () => a.some(
      ($) => $.subItems && $.subItems.length > 0
    ),
    [a]
  ), E = te(() => D ? a.flatMap(
    ($) => ($.subItems ?? []).map((C) => ({
      parent: $,
      subItem: C
    }))
  ) : a.map(($) => ({
    parent: null,
    subItem: {
      subId: $.id,
      subName: $.name,
      subAvatar: $.avatar,
      subDeactivated: $.deactivated
    }
  })), [D, a]), S = E.length === 0 ? void 0 : E.length === 1 ? E[0].subItem.subName : E.length + " " + n, M = E.length === 1 ? E[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    jr,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: l,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !S ? c : void 0,
      error: u,
      status: f,
      hint: d,
      hideLabel: p,
      maxLength: h,
      clearable: !1,
      value: S,
      disabled: r,
      loading: b,
      required: v,
      readonly: w,
      size: R,
      avatar: s || !M ? void 0 : {
        type: "person",
        firstName: M,
        lastName: "",
        src: E[0].subItem.subAvatar,
        deactivated: E[0].subItem.subDeactivated
      },
      append: F ?? /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t(Wr, { open: z, disabled: r, size: R }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            S && "text-f1-foreground",
            E.length === 1 && !s || c && !S ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            ge,
            {
              tag: "span",
              className: E.length === 1 && E[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: E.length === 0 ? e ?? "" : E.length === 1 ? E[0].subItem.subName : `${E.length} ${n}`
            }
          )
        }
      )
    }
  );
}, gu = (e) => {
  const [n, a] = L(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (C) => {
    a(C), e.onOpenChange?.(C);
  };
  H(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [s, i] = L(e.entities), [l, c] = L(""), [u, f] = Ur("", 300), d = te(
    () => e.entities.some(
      (C) => C.subItems && C.subItems.length > 0
    ),
    [e.entities]
  ), m = Ie(Hr), h = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(C) {
    if (e.singleSelector) {
      e.onSelect(C), a(!1);
      return;
    }
    const T = e.selectedEntities ?? [], A = s.find((N) => N.id === C.id);
    if (!A)
      return;
    const k = new Set(
      (A.subItems ?? []).map((N) => N.subId)
    ), _ = /* @__PURE__ */ new Set([A.id]);
    s.forEach((N) => {
      N.id !== A.id && (N.subItems ?? []).some(
        (W) => k.has(W.subId)
      ) && _.add(N.id);
    });
    const y = [...T];
    function x(N) {
      const I = y.findIndex((W) => W.id === N.id);
      I >= 0 ? y[I] = N : y.push(N);
    }
    _.forEach((N) => {
      const I = s.find((B) => B.id === N);
      if (!I) return;
      const W = I.subItems?.filter(
        (B) => k.has(B.subId)
      ) ?? [], V = y.findIndex((B) => B.id === N);
      if (V >= 0) {
        const B = y[V].subItems ?? [], ce = new Set(B.map((he) => he.subId)), oe = [
          ...B,
          ...W.filter((he) => !ce.has(he.subId))
        ];
        x({
          ...I,
          subItems: oe
        });
      } else
        x({
          ...I,
          subItems: W
        });
    }), e.onSelect(y);
  }
  function v(C, T) {
    if (e.singleSelector)
      e.onSelect({ ...C, subItems: [{ ...T }] }), a(!1);
    else {
      const A = e.selectedEntities ?? [], k = new Set(A.map((x) => x.id)), _ = new Map(
        A.map((x) => [x.id, x.subItems ?? []])
      );
      k.add(C.id), e.entities.forEach((x) => {
        x.subItems?.some(
          (I) => I.subId === T.subId
        ) && k.add(x.id);
      });
      const y = [];
      e.entities.forEach((x) => {
        if (k.has(x.id)) {
          let I = [..._.get(x.id) ?? []];
          x.subItems?.some(
            (B) => B.subId === T.subId
          ) && (I.some(
            (ce) => ce.subId === T.subId
          ) || I.push(T));
          const V = new Set(
            (x.subItems ?? []).map((B) => B.subId)
          );
          I = I.filter(
            (B) => V.has(B.subId)
          ), y.push({
            ...x,
            subItems: I
          });
        }
      }), e.onSelect(y);
    }
  }
  function w(C) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let T = [];
    const A = e.selectedEntities ?? [];
    if (d) {
      const k = s.find(
        (y) => y.id === C.id
      );
      if (!k)
        return;
      const _ = new Set(
        (k.subItems ?? []).map((y) => y.subId)
      );
      for (const y of A) {
        const x = (y.subItems ?? []).filter(
          (N) => !_.has(N.subId)
        );
        x.length > 0 && T.push({
          ...y,
          subItems: x
        });
      }
    } else
      T = (A ?? []).filter((k) => k.id !== C.id);
    e.onSelect(T);
  }
  function F(C, T) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const A = e.selectedEntities ?? [], k = T.subId, _ = [];
    for (const y of A) {
      const x = y.subItems?.filter((N) => N.subId !== k) ?? [];
      x.length > 0 && _.push({
        ...y,
        subItems: x
      });
    }
    e.onSelect(_);
  }
  function R() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [];
    let T = [];
    if (d) {
      const A = new Set(
        s.flatMap(
          (k) => (k.subItems ?? []).map((_) => _.subId)
        )
      );
      for (const k of C) {
        const _ = (k.subItems ?? []).filter(
          (y) => !A.has(y.subId)
        );
        _.length > 0 && T.push({
          ...k,
          subItems: _
        });
      }
    } else {
      const A = new Set(
        s.map((k) => k.id)
      );
      T = (C ?? []).filter((k) => !A.has(k.id));
    }
    e.onSelect(T);
  }
  function z() {
    const C = [...e.selectedEntities ?? []];
    s.forEach((T) => {
      const A = C.find((k) => k.id === T.id);
      if (!A)
        C.push({
          ...T,
          subItems: T.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...A.subItems ?? [],
            ...T.subItems ?? []
          ])
        );
        A.subItems = k;
      }
    }), e.singleSelector || e.onSelect(C);
  }
  const D = (C) => {
    c(C), f(C);
  }, E = (C, T) => {
    e.onItemExpandedChange(C.id, T), i(
      s.map(
        (A) => A.id === C.id ? { ...A, expanded: !C.expanded } : A
      )
    );
  };
  H(() => {
    if (!u) {
      i(e.entities);
      return;
    }
    if (d && !e.applySearchToGroup) {
      const T = e.entities.map((A) => {
        const k = Cl(A, u), _ = A.subItems?.map((y) => ({
          ...y,
          score: it(
            u,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, x) => y.score - x.score);
        return {
          ...A,
          score: k,
          expanded: A.expanded ?? (_?.length ?? 0) > 0,
          subItems: _
        };
      }).filter((A) => A.score < 1 / 0).sort((A, k) => A.score - k.score);
      i(T);
    } else {
      const C = e.entities.map((T) => {
        const A = it(
          u,
          T.searchKeys ?? [T.name]
        );
        return { ...T, score: A };
      }).filter((T) => T.score < 1 / 0).sort((T, A) => T.score - A.score);
      i(C);
    }
  }, [
    u,
    e.entities,
    e.applySearchToGroup,
    d,
    i
  ]);
  const S = P(null), [M, $] = L(0);
  return rt(() => {
    const C = () => {
      S.current && $(S.current.offsetWidth);
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: S,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Nn,
        {
          groupView: d,
          entities: s,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: F,
          onSubItemSelect: v,
          onClear: R,
          onSelectAll: z,
          selectedEntities: e.selectedEntities ?? [],
          search: l,
          onSearch: D,
          onToggleExpand: E,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? M - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Qn, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      Xn,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          Nl,
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
      Jn,
      {
        container: h,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Nn,
          {
            groupView: d,
            entities: s,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: F,
            onSubItemSelect: v,
            onClear: R,
            onSelectAll: z,
            selectedEntities: e.selectedEntities ?? [],
            search: l,
            onSearch: D,
            onToggleExpand: E,
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
function Rt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Cn(e) {
  return Rt(e).split(/\s+/).filter((n) => n.length > 0);
}
function it(e = "", n) {
  const a = Cn(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const s = Rt(r), i = Cn(r), l = Rt(e);
    if (s.includes(l) || a.every(
      (u) => i.some((f) => f.includes(u))
    ))
      return 1;
  }
  return 1 / 0;
}
function Cl(e, n) {
  const a = it(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((s, i) => {
    const l = it(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(s, l);
  }, 1 / 0)), Math.min(a, r);
}
const kl = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: s,
  category: i,
  isUnread: l = !1,
  onClick: c,
  onVisible: u
}) => {
  const { ref: f } = kt({
    threshold: 0.1,
    onChange(p) {
      p && u?.(e);
    }
  }), d = Zn(n, {
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
        /* @__PURE__ */ t(It, { icon: s ?? ea }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${i} · ${d}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: l && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Il = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(j, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(j, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(j, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(j, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(j, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), qt = le(
  "ActivityItem",
  ue(kl, Il)
), Ra = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Sl = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Ra, { title: e, children: n.map((s) => /* @__PURE__ */ t(
  qt,
  {
    ...s,
    onClick: () => a(s.id),
    onVisible: r
  },
  s.id
)) }), Fl = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Ra, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(qt.Skeleton, {}, r)) }), et = ue(Sl, Fl), Al = 3, Tl = ["today", "yesterday", "lastWeek", "lastMonth"], Rl = (e) => Kr(e, ([n]) => {
  const a = Tl.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), Lt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ll = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: s = 5
}) => {
  const i = X(), l = Vr(e, "createdAt"), c = Object.values(l).slice().flatMap((d) => d.map((m) => m.id)).slice(-s), u = Gr((d) => {
    c.includes(d) && r?.();
  }, 1e3), f = Rl(
    Object.entries(l).filter(([d, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([d, m], p) => /* @__PURE__ */ o(ve.Fragment, { children: [
      /* @__PURE__ */ t(
        et,
        {
          title: d in i.date.groups ? i.date.groups[d] : d,
          items: m,
          onClickItem: a,
          onItemVisible: u
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ t(Lt, {})
    ] }, d)),
    n && new Array(Al).fill(null).map((d, m) => /* @__PURE__ */ t(qt.Skeleton, {}, m))
  ] });
}, Dl = () => {
  const e = X();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(et.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Lt, {}),
    /* @__PURE__ */ t(
      et.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Lt, {}),
    /* @__PURE__ */ t(
      et.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, bu = le(
  "ActivityItemList",
  ue(Ll, Dl)
), Ol = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, _l = {
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
function El({
  firstName: e,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: s,
  onReactionSelect: i,
  pickerRef: l
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : _l[ta(
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
                Fe,
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
                Ge,
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
function Pl(e) {
  const n = P(null), a = P(), r = K(() => {
    const i = n.current;
    if (!i) return;
    const l = qr.create(i, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], u = 0.1;
    a.current = setInterval(() => {
      l({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: {
          x: u + Math.random() * (1 - u * 2),
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
  }, [e]), s = K(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: s };
}
const zl = ({
  link: e,
  firstName: n,
  lastName: a,
  src: r,
  onClick: s,
  canReact: i = !0,
  lastEmojiReaction: l,
  onReactionSelect: c,
  type: u,
  typeLabel: f,
  date: d
}) => {
  const [m, p] = L(l), h = P(null);
  H(() => {
    p(l);
  }, [l]);
  const b = (D) => {
    p(D), c?.(D);
  }, v = Se(), { canvasRef: w, handleMouseEnter: F, handleMouseLeave: R } = Pl(v), z = Me({
    emoji: Ol[u],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ee,
    {
      href: e,
      onClick: s,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        de()
      ),
      onMouseEnter: v ? void 0 : F,
      onMouseLeave: v ? void 0 : R,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          El,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: i,
            lastEmojiReaction: m,
            onReactionSelect: b,
            pickerRef: h
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
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: z })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(St, { date: d }) })
        ] })
      ]
    }
  );
}, Bl = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(j, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(j, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(j, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), xu = ue(zl, Bl), vu = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(na, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(ne, { label: a, variant: "outline", onClick: r }) })
] });
function La({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: s
}) {
  const [i, l] = L(a), [c, u] = L(n), f = P(null), { fireEmojiConfetti: d } = Yr(), m = (b, v) => {
    b.stopPropagation(), u(c + (i ? -1 : 1)), l(!i), s?.(v), i || d(v, f);
  }, p = r?.map((b) => b.name).join(", ") || "", h = /* @__PURE__ */ t(
    zt,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (b) => {
        m(b, e);
      },
      className: g(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Qr(e),
      prepend: /* @__PURE__ */ t(Me, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        Xr,
        {
          value: c,
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
  return p ? /* @__PURE__ */ t(Te, { label: p, children: h }) : h;
}
function $l({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      ne,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Ge, { onSelect: n, locale: a }),
    e.map((s) => /* @__PURE__ */ t(
      La,
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
const Ml = le("Reactions", $l), Da = ae(function({ content: n, collapsed: a, id: r, className: s, tabIndex: i }, l) {
  return /* @__PURE__ */ t(
    Jr,
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
Da.displayName = "BasePostDescription";
const jl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(j, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(j, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Oa = ue(
  Da,
  jl
), kn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
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
        Te,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), Dt = ae(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: s,
    color: i,
    isPending: l,
    leftTags: c,
    rightTags: u,
    fromDate: f,
    toDate: d,
    noBackground: m
  }, p) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: p,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(re, { children: [
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
          /* @__PURE__ */ o("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!n && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(re, { children: [
                  /* @__PURE__ */ t(St, { date: f }),
                  /* @__PURE__ */ t(
                    Y,
                    {
                      icon: ct,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                d && /* @__PURE__ */ t(St, { date: d })
              ] })
            ] }),
            (c || u) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(kn, { tags: c }),
              u && /* @__PURE__ */ t(kn, { tags: u, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Wl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), _a = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Wl.has(a);
}, Ul = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let s = Zr(r);
  const i = (l) => {
    l.stopPropagation();
  };
  return a && (s = `${s} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: _a(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(re, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(j, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Dt,
      {
        title: e,
        description: s,
        color: es.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Hl = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(j, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(j, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(j, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(j, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Ea = ue(Ul, Hl), Vl = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const s = X();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        de()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": a,
      onClick: r,
      children: s.actions.seeMore
    }
  ) });
}, Gl = ({
  id: e,
  author: n,
  group: a,
  createdAt: r,
  title: s,
  description: i,
  onClick: l,
  mediaUrl: c,
  event: u,
  counters: f,
  reactions: d,
  inLabel: m,
  comment: p,
  actions: h,
  dropdownItems: b,
  noReactionsButton: v = !1,
  descriptionExpandable: w = !1
}) => {
  const F = At(), R = At(), z = P(null), [D, E] = L(null), [S, M] = L(!1), $ = [f.views, f.comments].filter(Boolean).join(" · "), C = w && D?.id === e && D.description === i, T = !C, A = Zn(r), k = () => {
    l(e);
  }, _ = (N) => {
    N.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, x = (N) => {
    N.preventDefault(), N.stopPropagation(), i && E({ id: e, description: i });
  };
  return H(() => {
    C && z.current?.focus();
  }, [C]), H(() => {
    w || E(null);
  }, [w]), H(() => {
    const N = z.current;
    if (!w || !N || C) {
      M(!1);
      return;
    }
    const I = () => {
      M(
        N.scrollHeight > N.clientHeight
      );
    };
    if (I(), typeof ResizeObserver > "u") return;
    const W = new ResizeObserver(I);
    return W.observe(N), () => W.disconnect();
  }, [w, C, i]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: k,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          qe,
          {
            href: n.url || "#",
            title: y,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              Fe,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(It, { icon: tn }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(re, { children: [
                  /* @__PURE__ */ t(
                    qe,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        Fe,
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
                    qe,
                    {
                      href: n.url,
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(It, { icon: tn, size: "sm" }) }),
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
                  qe,
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
                  h?.map((N) => /* @__PURE__ */ t(
                    ne,
                    {
                      hideLabel: !N.label,
                      ...N.icon && { icon: N.icon },
                      variant: "outline",
                      size: "md",
                      onClick: N.onClick,
                      label: N.label ?? "",
                      title: N.label ?? ""
                    },
                    N.label
                  )),
                  b?.length && /* @__PURE__ */ t(
                    Be,
                    {
                      items: b,
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
                      ...b ?? []
                    ],
                    icon: Ft,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: A }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: F,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: s
                }
              ),
              i && /* @__PURE__ */ o(re, { children: [
                /* @__PURE__ */ t(
                  Oa,
                  {
                    ref: z,
                    id: R,
                    content: i,
                    collapsed: T,
                    tabIndex: C ? -1 : void 0,
                    className: g(C && de())
                  }
                ),
                w && S && !C && /* @__PURE__ */ t(
                  Vl,
                  {
                    describedBy: F,
                    controls: R,
                    expanded: C,
                    onClick: x
                  }
                )
              ] })
            ] })
          ] }),
          c && !u && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: _a(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: _,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(j, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          u && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Ea, { ...u }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: $ }),
          !v && /* @__PURE__ */ t(
            Ml,
            {
              items: d?.items ?? [],
              onInteraction: d?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: ts
              }
            }
          )
        ] })
      ]
    }
  );
}, Kl = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(j, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(j, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(j, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(j, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(j, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Oa.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(j, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Ea.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(j, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(j, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), yu = ue(
  Gl,
  Kl
), Pa = ve.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const s = () => {
    n();
  };
  return /* @__PURE__ */ o(
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
          Fe,
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
            a.info && /* @__PURE__ */ t(Te, { label: a.info, children: /* @__PURE__ */ t(
              Y,
              {
                icon: Hn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, l) => /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t($e, { ...i }, i.text),
            l < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(ns, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              ne,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              ne,
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
}), ql = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(j, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(j, { className: "h-4" }),
    /* @__PURE__ */ t(j, { className: "h-4" })
  ] })
] });
Pa.displayName = "OnePersonListItem";
const wu = me(
  le(
    "OnePersonListItem",
    ue(Pa, ql)
  )
), In = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Yl({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  return /* @__PURE__ */ t(Mi, { children: /* @__PURE__ */ t(
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
function Ql({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  const i = r?.enabled ? as : s?.enabled ? il : oi, l = r?.enabled ? r : s?.enabled ? s : void 0;
  return /* @__PURE__ */ t(i, { ...l, children: /* @__PURE__ */ t(
    eo,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const Nu = le(
  "ApplicationFrame",
  Yl
), Xl = ({ contentId: e }) => {
  const n = X();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: de(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Jl(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Zl(e, n) {
  const { sidebarState: a, toggleSidebar: r } = je(), s = P(e);
  H(() => {
    n && Jl(
      e,
      s.current,
      a
    ) && r({ isInvokedByUser: !1 }), s.current = e;
  }, [e, n, a, r]);
}
function eo({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: s
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: c, setForceFloat: u } = je(), f = Se(), {
    open: d,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: h,
    closeCanvas: b,
    chatWidth: v,
    resizable: w,
    panelSide: F
  } = rs(), R = m === "fullscreen", z = m === "canvas", { open: D } = ft(), E = w ? v : ss, S = F === "left", M = P(R), $ = R && !M.current, C = !R && M.current, [
    T,
    A
  ] = L(!1);
  H(() => {
    !R && M.current && A(!0), M.current = R;
  }, [R]);
  const k = R || T || C, _ = te(() => $ ? { duration: 0.15, ease: "easeOut" } : C ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [$, C]), y = Ct(
    `(max-width: ${tt.xl}px)`,
    { initializeWithValue: !0 }
  ), x = Ct(`(max-width: ${tt.md}px)`, {
    initializeWithValue: !0
  }), N = d && !S;
  return H(() => {
    u(N);
  }, [N, u]), H(() => {
    u(D);
  }, [D, u]), Zl(N, y), /* @__PURE__ */ t(
    mi,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: s }),
        /* @__PURE__ */ t(aa, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ce, { children: i === "unlocked" && /* @__PURE__ */ t(
            ee.nav,
            {
              className: g(
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
              className: g(
                i !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                i === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (I) => {
                i === "hidden" ? I?.setAttribute("inert", "") : I?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Xl, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            ee.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: d && !x && !S ? E : 0,
                paddingLeft: d && !x && S ? E : 0
              },
              transition: {
                paddingRight: In,
                paddingLeft: In
              },
              children: [
                /* @__PURE__ */ t(
                  ee.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      k ? "overflow-hidden" : "overflow-auto",
                      !d && !D && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ t(
                      ee.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          k ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                e?.enabled && z && p && /* @__PURE__ */ t(
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
                      x ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        S ? "right-0" : "left-0"
                      )
                    ),
                    style: x ? void 0 : S ? { left: E } : { right: E },
                    children: /* @__PURE__ */ t(
                      is,
                      {
                        content: p,
                        onClose: b,
                        entities: h,
                        side: S ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  ee.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      x ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        S ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        k || z ? "z-20" : "z-0",
                        i === "hidden" && k ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: x || R ? "100%" : E
                    },
                    transition: _,
                    onAnimationComplete: () => {
                      T && A(!1);
                    },
                    children: /* @__PURE__ */ t(ls, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(sl, {})
        ] }) })
      ] })
    }
  );
}
const za = ({
  firstName: e,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": s,
  pulse: i,
  onPulseClick: l
}) => {
  const c = X(), [u, f] = L(!i);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ce, { mode: "popLayout", initial: !!u, children: u ? /* @__PURE__ */ t(
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
  ) : /* @__PURE__ */ o(
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
          Yn,
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
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), l();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              Y,
              {
                icon: pi[i],
                color: hi[i],
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
              se,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: os,
                onClick: (d) => {
                  d.preventDefault(), d.stopPropagation(), l();
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
za.displayName = "PulseAvatar";
const to = Ae({
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
function Ba({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: l } = je();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: to({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || s === "hidden") && /* @__PURE__ */ t(
              ne,
              {
                variant: "ghost",
                onClick: () => i(),
                label: "Open main menu",
                icon: jn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center",
                  l ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    za,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    Fe,
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
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t(Wn, {}),
            /* @__PURE__ */ t(Na, {})
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
Ba.displayName = "DaytimePage";
const Cu = me(
  le("DaytimePage", Ba)
);
function no(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: s, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: s ? () => s(void 0) : void 0
  }));
}
function ao({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Be, { items: no(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            de()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(Y, { icon: ra, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const ku = me(
  le("OmniButton", ao)
);
function $a({ children: e, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
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
$a.displayName = "Page";
const Iu = me(le("Page", $a)), ro = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), Ma = Re(null), ja = Re(null), Sn = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), Qe = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), Su = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, s] = L(n), [i, l] = L(
    a
  ), c = te(
    () => ({
      setGroups: s,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, d) => s((m) => m.some(
        (h) => h.chats.some((b) => b.id === d.id)
      ) ? Qe(
        m,
        (h) => h.map((b) => b.id === d.id ? { ...b, ...d } : b)
      ) : Sn(m, f, (h) => ({
        ...h,
        chats: [...h.chats, d]
      }))),
      updateChat: (f, d) => s(
        (m) => Qe(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, ...d } : h)
        )
      ),
      removeChat: (f) => s(
        (d) => Qe(d, (m) => m.filter((p) => p.id !== f))
      ),
      setUnread: (f, d) => s(
        (m) => Qe(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, unreadCount: d } : h)
        )
      ),
      reorder: (f, d) => s(
        (m) => Sn(m, f, (p) => {
          const h = new Map(p.chats.map((w) => [w.id, w])), b = d.map((w) => h.get(w)).filter((w) => !!w), v = p.chats.filter((w) => !d.includes(w.id));
          return { ...p, chats: [...b, ...v] };
        })
      )
    }),
    []
  ), u = te(
    () => ({
      groups: r,
      activeChatId: i,
      unreadChatsCount: ro(r)
    }),
    [r, i]
  );
  return /* @__PURE__ */ t(ja.Provider, { value: c, children: /* @__PURE__ */ t(Ma.Provider, { value: u, children: e }) });
}, so = () => {
  const e = Ie(Ma);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Wa = () => {
  const e = Ie(ja);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, io = () => {
  const e = so(), n = Wa();
  return te(() => ({ ...e, ...n }), [e, n]);
}, Fu = () => Wa(), Yt = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: s,
  highlightWhenCollapsed: i,
  collapsedBadge: l,
  isDragging: c,
  wasDragging: u
}) => {
  const [f, d] = L(n), m = Se(), p = i && !f, h = () => {
    if (c || u?.current) return;
    const b = !f;
    d(b), r?.(b);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(cs, { open: f, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          de("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: h,
        tabIndex: 0,
        onKeyDown: (b) => {
          (b.key === "Enter" || b.key === " ") && h();
        },
        children: [
          /* @__PURE__ */ t(
            "span",
            {
              className: g(
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
    /* @__PURE__ */ t(ds, { forceMount: !0, className: "flex flex-col gap-1 mt-0.5", children: /* @__PURE__ */ t(
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
}, Ua = ({
  className: e
}) => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": "true",
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(j, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(j, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), lo = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(j, { className: "h-3 w-24 rounded" }) }), oo = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((a, r) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(lo, {}),
      Array.from({ length: n }).map((s, i) => /* @__PURE__ */ t(Ua, {}, i))
    ] }, r))
  }
), Ha = ({ count: e }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-label": `${e} unread`,
    className: "flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info",
    children: e > 99 ? "+99" : e
  }
), co = () => /* @__PURE__ */ t(
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
), uo = ({
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
) }), fo = ({
  chat: e,
  isActive: n,
  onClick: a
}) => {
  if (e.loading)
    return /* @__PURE__ */ t(Ua, {});
  const r = !!e.unreadCount, s = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), i = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: a,
      "aria-pressed": n,
      className: g(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        de("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        e.typing ? /* @__PURE__ */ t(co, {}) : /* @__PURE__ */ o("div", { className: "relative flex flex-shrink-0 items-center", children: [
          e.avatar.type === "emoji" ? (
            // Emoji groups show the glyph alone (no avatar chrome) so it isn't
            // shrunk inside the bordered avatar box.
            /* @__PURE__ */ t("span", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
          ) : /* @__PURE__ */ t(Ve, { size: "xs", avatar: e.avatar }),
          s && /* @__PURE__ */ t(uo, { presence: s, isActive: n })
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
        (i || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          i && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            us,
            {
              icon: i.icon,
              size: "sm",
              "aria-label": i.label,
              color: "default"
            }
          ) }),
          e.unreadCount && /* @__PURE__ */ t(Ha, { count: e.unreadCount })
        ] })
      ]
    }
  );
}, mo = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a new conversation to see it here."
}, ho = ({ action: e }) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: g(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      de("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(Y, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), Au = ({
  actions: e = [],
  emptyState: n,
  loading: a = !1
}) => {
  const { groups: r, activeChatId: s, setActiveChat: i } = io(), l = Se(), c = r.some((d) => d.chats.length > 0), u = { ...mo, ...n }, f = a && !c;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((d) => /* @__PURE__ */ t(ho, { action: d }, d.label)) }),
    f && /* @__PURE__ */ t(oo, {}),
    !f && !c && /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl", role: "img", "aria-hidden": "true", children: u.emoji }),
      /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: u.title }),
      /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: u.description })
    ] }),
    !f && r.map((d) => {
      const m = d.chats.reduce(
        (p, h) => p + (h.unreadCount ?? 0),
        0
      );
      return /* @__PURE__ */ t(
        Yt,
        {
          title: d.title,
          isOpen: d.isOpen,
          highlightWhenCollapsed: m > 0,
          collapsedBadge: m > 0 ? /* @__PURE__ */ t(Ha, { count: m }) : void 0,
          children: /* @__PURE__ */ t(Ce, { initial: !1, children: d.chats.map((p) => /* @__PURE__ */ t(
            ee.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: l ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                fo,
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
        d.id
      );
    })
  ] });
};
function po({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: s = !1,
  additionalOptions: i = []
}) {
  const l = te(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(j, { className: "size-6" }),
    /* @__PURE__ */ t(j, { className: "h-3 w-14" })
  ] }) : e.length + (i?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    Fn,
    {
      company: l,
      withNotification: s
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    go,
    {
      companies: e,
      selected: l,
      onChange: a,
      additionalOptions: i,
      children: /* @__PURE__ */ t(
        Fn,
        {
          company: l,
          withNotification: s
        }
      )
    }
  ) });
}
const go = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: s = []
}) => {
  const i = X(), [l, c] = L(!1), u = te(
    () => [
      ...e.map((d) => ({
        value: d.id,
        label: d.name,
        avatar: {
          type: "company",
          name: d.name,
          src: d.logo,
          "aria-label": `${d.name} logo`
        }
      })),
      ...s.length ? [{ type: "separator" }] : [],
      ...s
    ],
    [e, s]
  ), f = (d) => {
    const m = s?.find((p) => p.value === d);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(d);
  };
  return /* @__PURE__ */ t(
    at,
    {
      label: i.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: u,
      value: n.id,
      onChange: f,
      placeholder: i.navigation.sidebar.companySelector.placeholder,
      open: l,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            de()
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
}, Fn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        fs,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: sa, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(ge, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function Tu({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: s,
  onDropdownClick: i,
  hasActivityUpdates: l
}) {
  const c = X();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Be, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          de("focus-visible:ring-inset")
        ),
        onClick: i,
        children: [
          /* @__PURE__ */ t(
            Fe,
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
    a && /* @__PURE__ */ t(Te, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        ne,
        {
          icon: ea,
          label: c.notifications,
          onClick: s,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(ms, { type: "highlight", size: "sm", icon: sa }) })
    ] }) })
  ] });
}
function bo({ isExpanded: e }) {
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
function xo() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = je(), s = P(null);
  return H(() => {
    e === "hidden" && n === "locked" && s.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ t(bo, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ t(Y, { icon: Ne, size: "md" }) })
      ]
    }
  );
}
function Ru({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: s,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      po,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: s
      }
    ),
    /* @__PURE__ */ t(xo, {})
  ] });
}
function vo() {
  const [e, n] = L(!1);
  return H(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Va = Re(void 0);
function yo({ children: e }) {
  const [n, a] = L(!1), [r, s] = L(null);
  return /* @__PURE__ */ t(
    Va.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function Qt() {
  const e = Ie(Va);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const wo = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      Y,
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
  (e.tag || e.badge) && /* @__PURE__ */ o("div", { className: "flex flex-shrink-0 items-center gap-1.5", children: [
    e.tag && /* @__PURE__ */ t($e, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(ut, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), No = ({ item: e }) => {
  const { isActive: n } = _t(), { label: a, icon: r, ...s } = e, i = n(s.href, { exact: s.exactMatch });
  return /* @__PURE__ */ t(
    Ee,
    {
      ...s,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        de("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(wo, { item: e, active: i })
    }
  );
}, Co = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: s,
  total: i,
  onMove: l,
  onReorderFinish: c,
  isSortable: u = !0
}) => {
  const f = X(), { isDragging: d, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Qt(), { isActive: b } = _t(), v = b(e.href, { exact: e.exactMatch }), w = P(!1), [F, R] = L(!1), z = s === 0, D = s === i - 1, E = i === 1, S = te(() => {
    const k = [];
    return !E && !z && k.push({
      label: f.actions.moveUp,
      onClick: () => l?.(s, s - 1),
      icon: hs
    }), !E && !D && k.push({
      label: f.actions.moveDown,
      onClick: () => l?.(s, s + 1),
      icon: ps
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: ia,
      critical: !0
    }), k;
  }, [E, z, D, f, l, s, r, e]), M = () => {
    m(!0), R(!1), h(e.href || null), w.current = !0;
  }, $ = () => {
    m(!1), h(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, C = d && p === e.href, T = te(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      u && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      F && "bg-f1-background-secondary",
      C && "bg-f1-background-secondary"
    ),
    [v, F, C, u]
  ), A = te(() => /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Io, { tooltip: n, children: /* @__PURE__ */ o(
      Ee,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: g(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          C && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            Y,
            {
              icon: e.icon,
              size: "md",
              className: g(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ve, { size: "xs", avatar: e.avatar }) : null,
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
          F && "bg-f1-background-secondary opacity-100",
          C && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: F,
            onOpenChange: R,
            items: S,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Y, { icon: Ft, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, F, C, S, n]);
  return u ? /* @__PURE__ */ t(
    ga,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: M,
      onDragEnd: $,
      className: T,
      whileDrag: {
        scale: 1.05
      },
      children: A
    }
  ) : /* @__PURE__ */ t("div", { className: T, children: A });
}, vt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: s,
  currentOrder: i
}) => {
  const { isDragging: l, setIsDragging: c } = Qt(), u = P(!1), f = gi(), d = () => {
    c(!0), u.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      u.current = !1, i && s?.(i);
    }, 0);
  }, p = (b) => {
    !l && !u.current && r?.(e, b);
  }, h = /* @__PURE__ */ t(
    Yt,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: p,
      isDragging: l,
      wasDragging: u,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            l && !u.current && "pointer-events-none"
          ),
          children: e.items.map((b, v) => /* @__PURE__ */ t(No, { item: b }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    ga,
    {
      id: e.id,
      value: e,
      dragConstraints: a,
      dragElastic: 0.1,
      dragControls: f,
      onDragStart: d,
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
function Lu({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: s
}) {
  const i = P(null), l = e.filter(
    (b) => b.isSortable === !1
  ), [c, u] = L(
    e.filter((b) => b.isSortable !== !1)
  ), [f, d] = L(0), m = K((b) => {
    u(b);
  }, []), p = K(
    (b) => {
      a?.(b);
    },
    [a]
  ), h = vo();
  return /* @__PURE__ */ t(yo, { children: /* @__PURE__ */ t(aa, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    ko,
    {
      disableDragging: h,
      nonSortableItems: l,
      sortableItems: c,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: p,
      favorites: s,
      onFavoritesChange: r,
      forceUpdate: () => d((b) => b + 1)
    },
    f
  ) }) });
}
function ko({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: s,
  onDragEnd: i,
  favorites: l = [],
  onFavoritesChange: c,
  forceUpdate: u,
  disableDragging: f = !1
}) {
  const d = X(), { isDragging: m } = Qt(), p = e.some((y) => y.isRoot), h = e.filter((y) => !y.isRoot).length > 0, b = n.length > 0, v = P(null), [w, F] = L(l), R = l.length > 0;
  H(() => {
    JSON.stringify(l) !== JSON.stringify(w) && F(l);
  }, [l]);
  const z = (y) => {
    F(y);
  }, D = K(
    (y) => {
      const x = w.filter((N) => N.href !== y.href);
      F(x), c?.(x);
    },
    [w, c]
  ), E = K(
    (y, x) => {
      if (x < 0 || x >= w.length) return;
      const N = [...w], [I] = N.splice(y, 1);
      N.splice(x, 0, I), F(N), c?.(N);
    },
    [w, c]
  ), [S, M] = L(!1), $ = P(null);
  H(() => {
    n.length > 0 && !S && (a([...n]), M(!0));
  }, [n, a, S]), H(() => {
    const y = () => {
      $.current !== null && window.clearTimeout($.current), $.current = window.setTimeout(() => {
        r.current && n.length > 0 && u();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), $.current !== null && window.clearTimeout($.current);
    };
  }, [r, n, u]);
  const C = "flex flex-col gap-0.5", T = te(
    () => w.reduce(
      (y, x, N) => (x.label in y || (y[x.label] = []), y[x.label].push(N), y),
      {}
    ),
    [w]
  ), A = te(
    () => R && w.map((y, x) => /* @__PURE__ */ t(
      Co,
      {
        isSortable: !f,
        tooltip: (T[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: v,
        onRemove: D,
        index: x,
        total: w.length,
        onMove: E,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      R,
      w,
      T,
      D,
      E,
      c,
      f
    ]
  ), k = "flex flex-col gap-3", _ = te(() => n.map((y) => /* @__PURE__ */ t(
    vt,
    {
      category: y,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: s,
      onDragEnd: i,
      currentOrder: n
    },
    y.id
  )), [n, f, r, s, i]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, x) => /* @__PURE__ */ t(
          vt,
          {
            category: y,
            onCollapse: s
          },
          `fixed-${x}`
        )) }),
        R && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Yt, { title: d.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: C, children: A }) : /* @__PURE__ */ t(
          ln,
          {
            axis: "y",
            values: w,
            onReorder: z,
            className: C,
            children: A
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, x) => /* @__PURE__ */ t(
          vt,
          {
            category: y,
            onCollapse: s
          },
          `fixed-${x}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: k, children: _ }) : /* @__PURE__ */ t(
              ln,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: k,
                children: _
              }
            )
          }
        )
      ]
    }
  );
}
const Io = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(Te, { description: e, children: n }) : n;
function Du({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: g(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        de()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(Y, { icon: $t, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(gs, { keys: a }) })
      ]
    }
  ) });
}
const An = ({ position: e }) => /* @__PURE__ */ t(
  ee.div,
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
function So({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: s, isSmallScreen: i } = je(), l = Se(), [c, u] = kt({ threshold: 1 }), [f, d] = kt({ threshold: 1 }), m = X(), p = {
    x: {
      ease: s !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : s !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, h = () => a ? ci(a) && r ? ha(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    ee.aside,
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
      transition: p,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(dt, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Ce, { children: [
            !u && /* @__PURE__ */ t(An, { position: "top" }, "shadow-scroll-top"),
            !d && /* @__PURE__ */ t(An, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: h() })
      ]
    }
  );
}
const Ou = me(So), Fo = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), Ao = ({
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
        xs({ variant: r }),
        bs({ size: "md" }),
        de()
      ),
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(Y, { icon: e.icon, size: "md", color: "default" }),
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
            e.badge ? /* @__PURE__ */ t(Fo, {}) : null
          ]
        }
      )
    }
  );
}, _u = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const s = X(), i = r.placeholder ?? s.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-4 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": s.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          Ao,
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
      ne,
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
}, To = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Tn = {
  approved: {
    icon: Pt,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ne,
    type: "critical",
    size: "sm"
  }
}, Ro = {
  icon: ra,
  type: "neutral",
  size: "sm"
}, Lo = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Do = (e) => e in Tn ? Tn[e] : Ro;
function Rn(e) {
  return Lo[e ?? "neutral"] ?? 0;
}
const Oo = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const s = X(), i = n === 1 ? s.approvals.requiredNumbers.one : s.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = s.approvals.statuses[a], c = te(() => r.map((u) => {
    const f = Do(u.status);
    return {
      firstName: u.firstName,
      lastName: u.lastName,
      src: u.avatar,
      badge: f
    };
  }).sort(
    (u, f) => Rn(f.badge?.type) - Rn(u.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ t(nt, { text: l, variant: To[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Mt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, _o = ({ steps: e }) => {
  const a = X().approvals.history, r = e.findIndex((s) => s.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((s, i) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
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
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((s, i) => /* @__PURE__ */ o(re, { children: [
        /* @__PURE__ */ t(
          Oo,
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
}, Eu = me(
  le("OneApprovalHistory", _o)
), yt = (e, n) => typeof n == "string" && n in e;
function Ln(e, n, a) {
  const r = {};
  let s = !1;
  const i = vs(e);
  if (i !== void 0 && n.filters) {
    const u = n.filters, f = Object.fromEntries(
      Object.entries(i).filter(
        ([d]) => yt(u, d)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(i).length === 0) && (a.setCurrentFilters(f), r.filters = f, s = !0);
  }
  const l = e.sortings;
  if (l === null)
    a.setCurrentSortings(null), r.sortings = null, s = !0;
  else if (l && n.sortings && yt(n.sortings, l.field)) {
    const u = {
      field: l.field,
      order: l.order
    };
    a.setCurrentSortings(u), r.sortings = u, s = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (a.setCurrentSearch(e.search), r.search = e.search, s = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && yt(n.grouping.groupBy, c.field)) {
    const u = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(u), r.grouping = u, s = !0;
  }
  return s ? r : null;
}
function Pu(e) {
  const {
    source: n,
    collectionId: a,
    activeItemId: r,
    defaultActiveItemId: s,
    onActiveItemChange: i,
    idProvider: l,
    itemUrl: c,
    getItemTitle: u,
    enabled: f = !0,
    restorePersistedState: d = !0,
    currentFilters: m,
    navigationMode: p = "url",
    deps: h = []
  } = e, b = ys(), v = bi(n, h), [w, F] = L(null), R = w?.key === a && w.settled, z = P(v);
  z.current = v;
  const D = P(b);
  D.current = b;
  const E = P(null), S = m === void 0 ? null : JSON.stringify(m), M = P(m);
  M.current = m;
  const $ = P(null), C = () => {
    const U = M.current;
    U !== void 0 && ($.current = JSON.stringify(U), z.current.setCurrentFilters(U));
  };
  H(() => {
    if (!f || E.current === a) return;
    if (!d) {
      E.current = a, C(), F({ key: a, applied: null, settled: !1 });
      return;
    }
    let U = !1;
    return (async () => {
      let q = null;
      try {
        const be = await D.current.get(
          a
        );
        be && !U && (q = Ln(
          be,
          z.current,
          z.current
        ));
      } catch {
      }
      U || (E.current = a, C(), F({ key: a, applied: q, settled: !1 }));
    })(), () => {
      U = !0;
    };
  }, [a, f, d]), H(() => {
    !R || S === null || $.current !== S && C();
  }, [R, S]), H(() => {
    if (!(!f || !d))
      return ws(a, async () => {
        try {
          const U = await D.current.get(
            a
          );
          if (!U) return;
          const ie = z.current;
          Ln(
            U,
            {
              filters: M.current === void 0 ? ie.filters : void 0,
              sortings: ie.sortings,
              search: ie.search,
              grouping: ie.grouping
            },
            ie
          );
        } catch {
        }
      });
  }, [a, f, d]);
  const {
    data: T,
    paginationInfo: A,
    setPage: k,
    loadMore: _,
    isLoading: y,
    isInitialLoading: x
  } = Ns(
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
  H(() => {
    F(
      (U) => U && U.key === a && !U.settled ? { ...U, settled: !0 } : U
    );
  }, [w, a]);
  const N = c ?? n.itemUrl, I = xi({
    dataSource: v,
    data: T,
    paginationInfo: A,
    setPage: k,
    loadMore: _,
    isLoading: y,
    idProvider: l,
    itemUrl: N,
    activeItemId: r,
    defaultActiveItemId: s,
    onActiveItemChange: i
  }), W = typeof I.activeItemId == "string" || typeof I.activeItemId == "number" ? I.activeItemId : null, V = I.activeItem !== null, B = V && I.nextItem === null && I.hasNext, ce = V && I.previousItem === null && I.hasPrevious, oe = W !== null && (!V || B || ce), he = [
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
  ], { neighbors: G, isSupported: xe } = vi({
    dataAdapter: v.dataAdapter,
    id: W,
    filters: v.currentFilters,
    sortings: he,
    search: v.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && R && !x && !y && oe,
    fetchParamsProvider: (U) => ({
      ...U,
      navigationFilters: v.currentNavigationFilters
    })
  }), pe = te(() => l || (v.idProvider ? (U, ie) => v.idProvider(U, ie) : yi), [l, v.idProvider]), O = te(() => {
    if (!oe || G === null) return I;
    const U = I.previousItem ?? G.previous, ie = I.nextItem ?? G.next, q = (be) => be && N ? N(be) ?? null : null;
    return {
      ...I,
      previousItem: U,
      nextItem: ie,
      previousItemUrl: I.previousItemUrl ?? q(U),
      nextItemUrl: I.nextItemUrl ?? q(ie),
      absoluteIndex: I.absoluteIndex ?? (G.position !== void 0 ? G.position - 1 : null),
      totalItems: I.totalItems ?? G.total,
      hasPrevious: I.hasPrevious || U !== null,
      hasNext: I.hasNext || ie !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: V ? I.goToPrevious : () => {
        G.previous && I.setActiveItemId(
          pe(G.previous)
        );
      },
      goToNext: V ? I.goToNext : () => {
        G.next && I.setActiveItemId(
          pe(G.next)
        );
      }
    };
  }, [
    I,
    oe,
    G,
    V,
    N,
    pe
  ]), Q = Xi(O, {
    getItemTitle: u,
    mode: p
  }), Z = f && R && xe && oe && G === null, J = P(null), fe = Q ?? (Z ? J.current : null);
  return H(() => {
    Q !== null && (J.current = Q);
  }, [Q]), {
    ...O,
    isNavigating: O.isNavigating || Z,
    isReady: R && !x,
    navigation: fe,
    appliedCollectionState: w?.applied ?? null,
    dataSource: v,
    data: T,
    paginationInfo: A,
    isLoading: y
  };
}
const Ga = Re(null), zu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(Ga.Provider, { value: e, children: n });
function Le() {
  const e = Ie(Ga);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Eo = 200, Po = 1600, Ka = Re(null), zo = ({
  children: e
}) => {
  const { messages: n, searchMessages: a, loadMessageContext: r } = Le(), [s, i] = L(null), [l, c] = L(null), u = P(null), f = P(null), d = P(null), [m, p] = L(!1), [h, b] = L(""), [v, w] = L([]), [F, R] = L(-1), [z, D] = L(!1), E = P(n);
  E.current = n;
  const S = P(a);
  S.current = a;
  const M = P(r);
  M.current = r;
  const $ = P(v);
  $.current = v;
  const C = P(F);
  C.current = F;
  const T = P(0);
  H(
    () => () => {
      d.current && clearTimeout(d.current);
    },
    []
  );
  const A = K((G) => {
    u.current = G;
  }, []), k = K((G) => {
    f.current = G;
  }, []), _ = K((G) => {
    f.current?.(G);
  }, []), y = K((G, xe) => {
    u.current?.(G), c(G), d.current && clearTimeout(d.current), xe || (d.current = setTimeout(
      () => c(null),
      Po
    ));
  }, []), x = K(
    (G) => y(G, !1),
    [y]
  ), N = K(
    (G, xe = $.current) => {
      const pe = xe[G];
      if (pe == null) return;
      R(G);
      const O = () => y(pe, !0), Q = M.current;
      Q ? Q(pe).then(O) : O();
    },
    [y]
  );
  H(() => {
    if (!m) return;
    const G = h.trim();
    if (G === "") {
      w([]), R(-1), D(!1), c(null);
      return;
    }
    D(!0);
    const xe = ++T.current, pe = setTimeout(() => {
      const O = (Z) => {
        xe === T.current && (w(Z), D(!1), Z.length > 0 ? N(Z.length - 1, Z) : (R(-1), c(null)));
      }, Q = S.current;
      if (Q)
        Q(G).then((Z) => O(Z.map((J) => J.id)));
      else {
        const Z = G.toLowerCase();
        O(
          E.current.filter((J) => !J.deleted && J.body.toLowerCase().includes(Z)).map((J) => J.id)
        );
      }
    }, Eo);
    return () => clearTimeout(pe);
  }, [h, m, N]);
  const I = K(() => p(!0), []), W = K(() => {
    T.current++, p(!1), b(""), w([]), R(-1), D(!1), c(null);
  }, []), V = K(() => {
    const G = $.current;
    G.length !== 0 && N((C.current + 1) % G.length, G);
  }, [N]), B = K(() => {
    const G = $.current;
    G.length !== 0 && N((C.current - 1 + G.length) % G.length, G);
  }, [N]), ce = v.length, oe = F >= 0 ? F + 1 : 0, he = te(
    () => ({
      replyTo: s,
      setReplyTo: i,
      highlightedId: l,
      jumpToMessage: x,
      registerScrollToMessage: A,
      registerFileDropHandler: k,
      dropFiles: _,
      searchOpen: m,
      openSearch: I,
      closeSearch: W,
      searchQuery: h,
      setSearchQuery: b,
      searching: z,
      matchCurrent: oe,
      matchTotal: ce,
      goToNextMatch: V,
      goToPrevMatch: B
    }),
    [
      s,
      l,
      x,
      A,
      k,
      _,
      m,
      I,
      W,
      h,
      z,
      oe,
      ce,
      V,
      B
    ]
  );
  return /* @__PURE__ */ t(Ka.Provider, { value: he, children: e });
};
function De() {
  const e = Ie(Ka);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Bo = (e) => e?.find((n) => n.kind === "image"), $o = (e) => {
  const n = Bo(e);
  return n ? n.thumbnailUrl ?? n.url : void 0;
}, Mo = (e) => {
  const n = e?.filter((r) => r.kind === "image") ?? [], a = e?.filter((r) => r.kind === "file") ?? [];
  return n.length > 0 && a.length > 0 ? { kind: "mixed", count: n.length + a.length } : n.length > 0 ? { kind: "photo", count: n.length } : a.length > 0 ? {
    kind: "file",
    count: a.length,
    name: a.length === 1 ? a[0].name : void 0
  } : null;
}, qa = (e) => {
  const n = X(), a = e.body?.trim() ?? "", r = $o(e.attachments), s = Mo(e.attachments);
  if (!s) return { label: a, thumbnailUrl: r };
  const i = s.kind === "photo" ? {
    icon: Cs,
    label: s.count === 1 ? n.chat.photo : n.t("chat.photoCount.other", { count: s.count })
  } : s.kind === "file" ? {
    icon: ks,
    label: s.name ?? n.t("chat.fileCount.other", { count: s.count })
  } : {
    icon: la,
    label: n.t("chat.attachmentCount.other", {
      count: s.count
    })
  };
  return { icon: i.icon, label: a || i.label, thumbnailUrl: r };
}, jo = ({
  message: e,
  onRemove: n
}) => {
  const a = X(), { icon: r, label: s, thumbnailUrl: i } = qa(e);
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(Y, { icon: oa, size: "md", color: "default" }) }),
    i && /* @__PURE__ */ t(
      "img",
      {
        src: i,
        alt: "",
        className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(ge, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.isMine ? a.chat.you : e.author.name }),
      /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
        r && /* @__PURE__ */ t(Y, { icon: r, size: "xs", color: "default" }),
        /* @__PURE__ */ t(ge, { className: "min-w-0 text-sm", lines: 1, children: s })
      ] })
    ] }),
    /* @__PURE__ */ t(
      se,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: a.chat.removeQuote,
        icon: Ne,
        onClick: n
      }
    )
  ] }) });
}, Wo = 140, Uo = () => {
  const e = X(), { sendMessage: n, onInputActivity: a, uploadFiles: r, transcribe: s } = Le(), { replyTo: i, setReplyTo: l, registerFileDropHandler: c } = De(), [u, f] = L(""), [d, m] = L([]), p = P(null), h = P(null), b = P(0), v = d.some((x) => x.status === "uploading"), w = K(() => {
    const x = p.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, Wo)}px`);
  }, []), F = P(""), R = K(
    (x) => {
      const N = F.current;
      f(N ? `${N} ${x}` : x), requestAnimationFrame(w);
    },
    [w]
  ), z = Is({
    onTranscribe: s,
    onPartial: R,
    onFinal: R,
    onError: () => {
    }
  }), D = z.status === "transcribing", E = z.status === "recording", S = !!s && z.isSupported, M = (u.trim().length > 0 || d.length > 0) && !D && !v, $ = K(
    (x) => {
      f(x.target.value), a(), w();
    },
    [w, a]
  ), C = K(
    async (x) => {
      if (x.length === 0 || !r) return;
      const N = x.map((W) => ({
        id: `att-${b.current++}`,
        status: "uploading",
        name: W.name
      }));
      m((W) => [...W, ...N]);
      const I = new Set(N.map((W) => W.id));
      try {
        const V = (await r(x)).map((B, ce) => ({
          id: N[ce]?.id ?? `att-${b.current++}`,
          status: "ready",
          attachment: B
        }));
        m((B) => [
          ...B.filter((ce) => !I.has(ce.id)),
          ...V
        ]);
      } catch {
        m((W) => W.filter((V) => !I.has(V.id)));
      }
    },
    [r]
  );
  H(() => {
    c((x) => {
      C(x);
    });
  }, [c, C]);
  const T = K(() => {
    if (!M) return;
    const x = d.flatMap(
      (I) => I.status === "ready" ? [I.attachment] : []
    );
    n({
      body: u.trim(),
      attachments: x.length > 0 ? x : void 0,
      replyToId: i?.id
    }), f(""), m([]), l(null);
    const N = p.current;
    N && (N.style.height = "auto");
  }, [d, M, i, n, l, u]), A = K(
    (x) => {
      const N = p.current, I = N?.selectionStart ?? N?.value.length ?? 0, W = N?.selectionEnd ?? N?.value.length ?? 0;
      f((V) => V.slice(0, I) + x + V.slice(W)), a(), requestAnimationFrame(() => {
        w();
        const V = p.current;
        if (V) {
          const B = I + x.length;
          V.focus(), V.setSelectionRange(B, B);
        }
      });
    },
    [w, a]
  ), k = K(
    (x) => {
      x.key === "Enter" && !x.shiftKey && (x.preventDefault(), T());
    },
    [T]
  ), _ = K(() => {
    F.current = u, z.start();
  }, [z, u]), y = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col", children: [
    i && /* @__PURE__ */ t(
      jo,
      {
        message: i,
        onRemove: () => l(null)
      }
    ),
    d.length > 0 && /* @__PURE__ */ t(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": v,
        className: "flex flex-wrap gap-1 px-1 pt-1",
        children: d.map(
          (x) => x.status === "uploading" ? /* @__PURE__ */ t(j, { className: "h-9 w-36 rounded-[10px]" }, x.id) : /* @__PURE__ */ t(
            ca,
            {
              size: "md",
              file: {
                name: x.attachment.name,
                type: x.attachment.mimeType ?? (x.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: Ne,
                  onClick: () => m(
                    (N) => N.filter((I) => I.id !== x.id)
                  )
                }
              ]
            },
            x.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: p,
        value: u,
        onChange: $,
        onKeyDown: k,
        rows: 1,
        placeholder: E ? e.chat.listening : y,
        className: g(
          "w-full resize-none bg-transparent p-3 pb-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    E ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ t(
          Ss,
          {
            stream: z.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            se,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: Ne,
              onClick: z.cancel
            }
          ),
          /* @__PURE__ */ t(
            se,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: Pt,
              onClick: z.stop
            }
          )
        ] })
      ] })
    ) : /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-3", children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: h,
          type: "file",
          multiple: !0,
          className: "hidden",
          onChange: (x) => {
            C(Array.from(x.target.files ?? [])), x.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          se,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.attachFile,
            icon: la,
            onClick: () => h.current?.click(),
            disabled: !r || D
          }
        ),
        /* @__PURE__ */ t(
          Ge,
          {
            variant: "outline",
            size: "md",
            label: e.chat.addEmoji,
            onSelect: A
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        S && /* @__PURE__ */ t(
          se,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Fs,
            onClick: _,
            loading: D
          }
        ),
        /* @__PURE__ */ t(
          se,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Un,
            onClick: T,
            disabled: !M
          }
        )
      ] })
    ] })
  ] }) }) });
}, Ho = ({
  visible: e
}) => {
  const n = X();
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ t(Y, { icon: As, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Vo = () => {
  const e = X(), {
    searchQuery: n,
    setSearchQuery: a,
    searching: r,
    matchCurrent: s,
    matchTotal: i,
    goToNextMatch: l,
    goToPrevMatch: c,
    closeSearch: u
  } = De(), f = i > 0, m = n.trim().length > 0 && !r && !f;
  return /* @__PURE__ */ o("div", { className: "flex w-full items-center gap-2", onKeyDown: (h) => {
    h.key === "Enter" ? (h.preventDefault(), h.shiftKey ? c() : l()) : h.key === "Escape" && (h.preventDefault(), u());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      Ts,
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
        className: g(
          "shrink-0 whitespace-nowrap text-sm tabular-nums",
          m ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"
        ),
        children: r ? "" : `${s}/${i}`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0", children: [
        /* @__PURE__ */ t(
          se,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.previous,
            icon: Rs,
            onClick: c,
            disabled: !f || r,
            size: "sm"
          }
        ),
        /* @__PURE__ */ t(
          se,
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
        se,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.closeSearch,
          icon: Ne,
          onClick: u
        }
      )
    ] })
  ] });
}, Xt = ({
  user: e,
  children: n
}) => {
  const a = X();
  return /* @__PURE__ */ o(Ls, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(Ds, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      Os,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          _s,
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
}, Go = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: g("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, Ko = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: a,
  onClose: r
}) => {
  const s = X(), { searchOpen: i, openSearch: l } = De(), c = e.type === "dm" && e.presence !== void 0, u = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "relative shrink-0", children: [
      e.avatar.type === "emoji" ? (
        // Emoji groups show the glyph alone (no avatar chrome) so it reads at
        // full size instead of shrunk inside the bordered avatar box.
        /* @__PURE__ */ t("span", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
      ) : /* @__PURE__ */ t(Ve, { size: "sm", avatar: e.avatar }),
      c && /* @__PURE__ */ t(Go, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      Y,
      {
        icon: Es,
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
    /* @__PURE__ */ t(Vo, {})
  ) : /* @__PURE__ */ o(re, { children: [
    e.user ? /* @__PURE__ */ t(Xt, { user: e.user, children: u }) : u,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        se,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.actions.search,
          icon: $t,
          onClick: l
        }
      ),
      a && /* @__PURE__ */ t(
        se,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? s.actions.collapse : s.actions.expand,
          icon: n ? Ps : zs,
          onClick: a
        }
      ),
      r && /* @__PURE__ */ t(
        se,
        {
          variant: "ghost",
          hideLabel: !0,
          label: s.actions.close,
          icon: Ne,
          onClick: r
        }
      )
    ] })
  ] }) });
}, qo = "latest", Yo = 1440 * 60 * 1e3, Dn = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function Jt(e, n) {
  return Math.round((Dn(n) - Dn(e)) / Yo);
}
function Ya(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function Qa(e, n, a, r) {
  const s = Jt(e, n);
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
function lt(e, n, a, r) {
  return `${Qa(e, n, a, r)} ${Ya(e, r)}`;
}
function Qo(e, n, a, r) {
  return Jt(e, n) <= 0 ? Ya(e, r) : lt(e, n, a, r);
}
const Xo = (e, n) => n ? Jt(
  new Date(n.createdAt),
  new Date(e.createdAt)
) !== 0 : !0;
function Jo(e, n = {}) {
  const { dividerId: a = null } = n, r = [], s = /* @__PURE__ */ new Map();
  let i = -1;
  return e.forEach((l, c) => {
    const u = e[c - 1], f = Xo(l, u);
    f && r.push({
      type: "separator",
      key: `sep-${l.id}`,
      at: l.createdAt
    });
    const d = f || !u || u.author.id !== l.author.id;
    if (!d && i >= 0) {
      const m = r[i];
      m.type === "message" && (m.isLastOfRun = !1);
    }
    a && l.id === a && r.push({ type: "divider", key: "unread-divider" }), r.push({
      type: "message",
      key: l.id,
      message: l,
      isFirstOfRun: d,
      isLastOfRun: !0,
      isLastMessage: c === e.length - 1
    }), i = r.length - 1, s.set(l.id, i);
  }), { rows: r, indexById: s };
}
const Zo = 80, On = 120;
function ec({
  viewportRef: e,
  virtualizer: n,
  rows: a,
  indexById: r,
  messages: s,
  hasMoreOlder: i,
  loadingOlder: l,
  onReachTop: c,
  hasMoreNewer: u = !1,
  loadingNewer: f = !1,
  onReachBottom: d
}) {
  const [m, p] = L(!1), [h, b] = L(!0), [v, w] = L(!0), F = P(!0), R = P(s[0]?.id ?? null), z = P(s.at(-1)?.id ?? null), D = P(s.length), E = P(!1), S = P(null), M = P(null), $ = K(
    (k = "smooth") => {
      a.length > 0 && n.scrollToIndex(a.length - 1, { align: "end", behavior: k });
    },
    [n, a.length]
  ), C = K(() => {
    const k = e.current, _ = S.current;
    if (!k || !_) return null;
    const y = r.get(_.id);
    if (y == null) return null;
    const N = (n.getOffsetForIndex(y, "start")?.[0] ?? 0) - _.delta;
    return k.scrollTop = N, N;
  }, [e, r, n]), T = K(
    (k) => {
      const _ = n.getVirtualItemForOffset(k);
      if (!_) return null;
      for (let y = _.index; y < a.length; y++)
        if (a[y].type === "message") return y;
      return null;
    },
    [n, a]
  ), A = K(() => {
    const k = e.current;
    if (!k) return;
    const { scrollTop: _, scrollHeight: y, clientHeight: x } = k, N = y - _ - x, I = N < Zo;
    if (F.current = I, b(I), p(N > x * 0.5), w(_ <= 0), _ < On && i && !l) {
      const W = T(_), V = W != null ? a[W] : null;
      if (V && V.type === "message") {
        const B = n.getOffsetForIndex(W, "start")?.[0] ?? 0;
        S.current = { id: V.message.id, delta: B - _ };
      }
      c();
    }
    N < On && u && !f && d?.();
  }, [
    e,
    i,
    l,
    c,
    u,
    f,
    d,
    T,
    a,
    n
  ]);
  return rt(() => {
    const k = e.current;
    if (!k) return;
    if (!E.current && a.length > 0) {
      u || (n.scrollToIndex(a.length - 1, { align: "end" }), b(!0)), w(k.scrollHeight - k.clientHeight <= 0), E.current = !0, R.current = s[0]?.id ?? null, z.current = s.at(-1)?.id ?? null, D.current = s.length;
      return;
    }
    const _ = s[0]?.id ?? null, y = s.at(-1), x = s.length > D.current, N = x && _ !== R.current, I = x && y?.id !== z.current;
    if (N && S.current) {
      M.current != null && cancelAnimationFrame(M.current);
      let W = C(), V = 0, B = 0;
      const ce = () => {
        const oe = C();
        if (B += 1, oe != null && W != null && Math.abs(oe - W) < 1 ? V += 1 : V = 0, W = oe, oe == null || V >= 2 || B >= 12) {
          S.current = null, M.current = null;
          return;
        }
        M.current = requestAnimationFrame(ce);
      };
      M.current = requestAnimationFrame(ce);
    } else I && !u && (y?.isMine || F.current) && (n.scrollToIndex(a.length - 1, { align: "end" }), b(!0));
    R.current = _, z.current = y?.id ?? null, D.current = s.length;
  }, [
    s,
    a.length,
    e,
    n,
    r,
    u,
    C
  ]), rt(
    () => () => {
      M.current != null && cancelAnimationFrame(M.current);
    },
    []
  ), { scrolledUp: m, atBottom: h, atTop: v, scrollToBottom: $, handleScroll: A };
}
const tc = {
  viridian: "text-[hsl(theme(colors.viridian.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.viridian.50)),white_35%)]",
  malibu: "text-[hsl(theme(colors.malibu.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.malibu.50)),white_35%)]",
  yellow: "text-[hsl(theme(colors.yellow.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.yellow.50)),white_35%)]",
  purple: "text-[hsl(theme(colors.purple.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.purple.50)),white_35%)]",
  lilac: "text-[hsl(theme(colors.lilac.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.lilac.50)),white_35%)]",
  barbie: "text-[hsl(theme(colors.barbie.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.barbie.50)),white_35%)]",
  smoke: "text-[hsl(theme(colors.smoke.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.smoke.50)),white_35%)]",
  army: "text-[hsl(theme(colors.army.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.army.50)),white_35%)]",
  flubber: "text-[hsl(theme(colors.flubber.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.flubber.50)),white_35%)]",
  indigo: "text-[hsl(theme(colors.indigo.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.indigo.50)),white_35%)]",
  camel: "text-[hsl(theme(colors.camel.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.camel.50)),white_35%)]"
}, nc = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, Xa = (e) => tc[ta(nc(e)) ?? "viridian"], ac = ({
  message: e,
  isMine: n,
  author: a
}) => {
  const r = X();
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
  ) : /* @__PURE__ */ o(
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
              Xa(a)
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
}) => /* @__PURE__ */ o("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), rc = ({
  message: e,
  onBack: n
}) => {
  const a = X(), { channel: r } = Le(), s = {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  }, i = /* @__PURE__ */ new Date(), l = r.type === "group";
  return /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        se,
        {
          icon: Bs,
          onClick: n,
          label: a.chat.back,
          variant: "ghost",
          hideLabel: !0,
          size: "sm"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: a.chat.info })
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 px-3 py-3", children: [
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
          value: lt(new Date(e.readAt), i, s)
        }
      )),
      /* @__PURE__ */ t(
        wt,
        {
          label: a.chat.delivered,
          value: lt(new Date(e.createdAt), i, s)
        }
      )
    ] })
  ] });
}, sc = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], ic = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", Xe = ({
  icon: e,
  label: n,
  onClick: a,
  trailing: r
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: a,
    className: g(ic, de("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(Y, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      r
    ]
  }
), lc = ({
  message: e,
  isMine: n,
  open: a,
  onOpenChange: r
}) => {
  const s = X(), { toggleReaction: i, deleteMessage: l } = Le(), { setReplyTo: c } = De(), [u, f] = L("menu"), d = (h) => {
    r(h), h || f("menu");
  }, m = (h) => {
    i(e.id, h), d(!1);
  }, p = (h) => () => {
    h(), d(!1);
  };
  return /* @__PURE__ */ o(Qn, { open: a, onOpenChange: d, children: [
    /* @__PURE__ */ t(Xn, { asChild: !0, children: /* @__PURE__ */ t(
      se,
      {
        variant: "outline",
        hideLabel: !0,
        label: s.chat.moreActions,
        icon: $s,
        pressed: a
      }
    ) }),
    /* @__PURE__ */ t(
      Jn,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: u === "info" ? /* @__PURE__ */ t(
          rc,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ o(re, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
            sc.map((h) => /* @__PURE__ */ t(
              se,
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
              Ge,
              {
                size: "md",
                variant: "ghost",
                label: s.chat.react,
                onSelect: m,
                icon: qn
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-0 p-1", children: [
            /* @__PURE__ */ t(
              Xe,
              {
                icon: Ms,
                label: s.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  Y,
                  {
                    icon: ct,
                    size: "md",
                    className: "text-f1-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              Xe,
              {
                icon: oa,
                label: s.chat.reply,
                onClick: p(() => c(e))
              }
            ),
            /* @__PURE__ */ t(
              Xe,
              {
                icon: js,
                label: s.actions.copy,
                onClick: p(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              Xe,
              {
                icon: ia,
                label: s.actions.delete,
                onClick: p(() => l(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, oc = (e, n) => {
  const a = document.createElement("a");
  a.href = e, a.download = n, a.rel = "noreferrer", a.click();
}, cc = ({
  message: e,
  isMine: n
}) => {
  const a = X(), r = e.attachments;
  if (!r || r.length === 0) return null;
  const s = r.filter((c) => c.kind === "image"), i = r.filter((c) => c.kind === "file"), l = s.length === 1;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        s.length > 0 && /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: s.map((c, u) => /* @__PURE__ */ t(
          "a",
          {
            href: c.url,
            target: "_blank",
            rel: "noreferrer",
            className: "block",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: c.thumbnailUrl ?? c.url,
                alt: c.name,
                className: g(
                  "rounded-xl border border-solid border-f1-border-secondary object-cover",
                  l ? "max-h-60 max-w-full" : "h-28 w-28"
                )
              }
            )
          },
          `${c.url}-${u}`
        )) }),
        i.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: i.map((c, u) => /* @__PURE__ */ t(
          ca,
          {
            size: "md",
            file: { name: c.name, type: c.mimeType ?? "" },
            actions: [
              {
                label: a.chat.download,
                icon: Ws,
                onClick: () => oc(c.url, c.name)
              }
            ]
          },
          `${c.url}-${u}`
        )) })
      ]
    }
  );
}, dc = ({
  message: e,
  isMine: n
}) => {
  const a = X(), { toggleReaction: r } = Le();
  return !e.reactions || e.reactions.length === 0 ? null : /* @__PURE__ */ o(
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
            La,
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
          Ge,
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
}, uc = ({
  reply: e,
  isMine: n,
  indented: a
}) => {
  const { jumpToMessage: r } = De(), { currentUserId: s } = Le(), i = X(), { icon: l, label: c, thumbnailUrl: u } = qa(e), d = e.author.id === s ? i.chat.you : e.author.name;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: () => r(e.id),
      className: g(
        "mb-1 flex max-w-[85%] items-center overflow-hidden rounded bg-f1-background-tertiary text-left transition-colors hover:bg-f1-background-hover",
        n ? "self-end" : a ? "ml-7 self-start" : "self-start"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-1 py-2 pl-2.5 pr-2.5", children: [
          /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ t(
            ge,
            {
              className: g(
                "text-sm font-medium",
                Xa(e.author)
              ),
              children: d
            }
          ) }),
          /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
            l && /* @__PURE__ */ t(Y, { icon: l, size: "sm", color: "default" }),
            /* @__PURE__ */ t(ge, { className: "min-w-0 text-sm", lines: 1, children: c })
          ] })
        ] }),
        u && /* @__PURE__ */ t(
          "img",
          {
            src: u,
            alt: "",
            className: "h-14 w-14 shrink-0 self-stretch object-cover"
          }
        )
      ]
    }
  );
}, fc = ({
  message: e,
  isMine: n,
  author: a,
  bubbleGutter: r,
  belowGutter: s
}) => {
  const [i, l] = L(!1), { highlightedId: c } = De(), u = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, d = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0, p = m || d;
  return /* @__PURE__ */ o(
    "div",
    {
      "data-msg-id": e.id,
      className: g(
        "group flex flex-col",
        n ? "items-end" : "items-start"
      ),
      children: [
        e.replyTo && !e.deleted && /* @__PURE__ */ t(
          uc,
          {
            reply: e.replyTo,
            isMine: n,
            indented: !!r
          }
        ),
        p && /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "flex w-full gap-2",
              n ? "flex-row-reverse items-center" : "items-end"
            ),
            children: [
              r,
              /* @__PURE__ */ o(
                "div",
                {
                  className: g(
                    "flex min-w-0 items-center gap-1",
                    n ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: g(
                          // `transition-shadow` is always on so the jump-to highlight ring
                          // fades in/out instead of snapping when `highlighted` toggles.
                          "flex max-w-full flex-col gap-1 rounded-2xl transition-shadow duration-200",
                          n ? "items-end" : "items-start",
                          u && "ring-1 ring-f1-special-ring ring-offset-2",
                          !e.deleted && "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          i && "bg-f1-background-hover"
                        ),
                        children: [
                          d && /* @__PURE__ */ t(cc, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(ac, { message: e, isMine: n, author: a })
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
                          lc,
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
        f && /* @__PURE__ */ o("div", { className: "flex w-full gap-2", children: [
          s,
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(dc, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, mc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...a } = e.avatar;
    return a;
  }
  return { firstName: e.name, lastName: "" };
}, hc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: g(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), pc = ({
  users: e,
  isGroup: n
}) => {
  const a = X(), r = Se();
  if (e.length === 0) return null;
  let s = a.chat.writing;
  return n && (e.length === 1 ? s = a.t("chat.isTyping", { name: e[0].name }) : e.length === 2 ? s = a.t("chat.twoTyping", {
    first: e[0].name,
    second: e[1].name
  }) : s = a.chat.severalTyping), // Eases in (fade + slight rise, scaling up from the bottom-left like an
  // incoming bubble) so the dots don't pop. It's always the last row, so the
  // scale-driven height change can't disturb the messages above.
  /* @__PURE__ */ o(
    ee.div,
    {
      role: "status",
      "aria-label": s,
      className: "flex w-full items-end gap-2",
      style: { transformOrigin: "bottom left" },
      initial: r ? !1 : { opacity: 0, y: 6, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { type: "spring", stiffness: 500, damping: 34, mass: 0.8 },
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
              avatars: e.map(mc)
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
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(hc, { animate: !r }) })
      ]
    }
  );
}, Ja = ({
  at: e,
  withTime: n = !1
}) => {
  const a = X(), r = {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  }, s = new Date(e), i = /* @__PURE__ */ new Date(), l = n ? lt(s, i, r) : Qa(s, i, r);
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: l }) });
}, gc = ({
  message: e,
  isGroup: n
}) => {
  const a = X(), r = Se(), s = Qo(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
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
      className: g(
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
}, bc = ({
  leaving: e = !1
}) => {
  const n = X(), a = Se();
  return /* @__PURE__ */ o(
    ee.div,
    {
      className: "flex items-center gap-2 py-2",
      initial: !1,
      animate: { opacity: e ? 0 : 1 },
      transition: { duration: a ? 0 : 0.26, ease: "easeOut" },
      children: [
        /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border" }),
        /* @__PURE__ */ t("span", { className: "text-md font-medium text-f1-foreground", children: n.chat.newMessages }),
        /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
      ]
    }
  );
}, _n = (e) => /* @__PURE__ */ t(
  Ve,
  {
    size: "xs",
    avatar: e.avatar ?? { type: "person", firstName: e.name, lastName: "" }
  }
), xc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-6" : "pt-2" : "pt-6", vc = ({
  row: e,
  isGroup: n,
  isFirstRow: a,
  isLastRow: r,
  enterAnimation: s,
  animatedIds: i,
  dividerLeaving: l = !1
}) => {
  const c = g(xc(e, a), r && "pb-6"), [u] = L(
    () => s && e.type === "message" && e.isLastMessage && !i.has(e.message.id)
  );
  if (H(() => {
    e.type === "message" && i.add(e.message.id);
  }, [e, i]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(Ja, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(bc, { leaving: l }) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(pc, { users: e.users, isGroup: n }) });
  const { message: f, isFirstOfRun: d, isLastOfRun: m, isLastMessage: p } = e, h = f.isMine, b = n && !h, v = b ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: _n(f.author) }) : void 0, w = b ? m ? /* @__PURE__ */ t(Xt, { user: f.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: _n(f.author) }) }) : v : void 0, F = /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t(
      fc,
      {
        message: f,
        isMine: h,
        author: b && d ? f.author : void 0,
        bubbleGutter: w,
        belowGutter: v
      }
    ),
    p && /* @__PURE__ */ o("div", { className: "flex w-full gap-2", children: [
      v,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(gc, { message: f, isGroup: n }) })
    ] })
  ] });
  return u ? (
    // WhatsApp-style arrival: the bubble springs up into place from its own
    // corner (mine → bottom-right, theirs → bottom-left) with a soft fade and a
    // barely-there scale. A spring (not a fixed tween) gives the gentle, natural
    // settle. Only the last row animates, so the brief scale-driven height change
    // can't disturb rows above it.
    /* @__PURE__ */ t(
      ee.div,
      {
        className: g("flex flex-col gap-1", c),
        style: { transformOrigin: h ? "bottom right" : "bottom left" },
        initial: { opacity: 0, y: 10, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 460, damping: 34, mass: 0.9 },
        children: F
      }
    )
  ) : /* @__PURE__ */ t("div", { className: g("flex flex-col gap-1", c), children: F });
}, yc = di(vc), wc = 280, Nc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, Cc = (e, n) => {
  for (let a = n; a < e.length; a++) {
    const r = e[a];
    if (r.type === "message") return r.message.createdAt;
    if (r.type === "separator") return r.at;
  }
  return null;
}, kc = () => {
  const e = X(), {
    messages: n,
    channel: a,
    typingUsers: r,
    hasMoreOlder: s,
    loadingOlder: i,
    loadOlder: l,
    hasMoreNewer: c,
    loadingNewer: u,
    loadNewer: f,
    loadMessageContext: d,
    unreadCount: m,
    firstUnreadId: p,
    markRead: h
  } = Le(), b = Se(), v = a.type === "group", w = P(null), { registerScrollToMessage: F } = De(), [R, z] = L(!1), [D, E] = L(p), [S, M] = L(!1), $ = P(a.id), C = P(null), T = P(
    n[n.length - 1]?.id ?? null
  ), { rows: A, indexById: k } = te(
    () => Jo(n, { dividerId: D }),
    [n, D]
  ), _ = te(
    () => r.length > 0 ? [...A, { type: "typing", key: "typing", users: r }] : A,
    [A, r]
  ), y = Gn({
    count: _.length,
    getScrollElement: () => w.current,
    estimateSize: (q) => Nc(_[q]),
    getItemKey: (q) => _[q].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (q) => Math.round(q.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: x, atBottom: N, atTop: I, scrollToBottom: W, handleScroll: V } = ec({
    viewportRef: w,
    virtualizer: y,
    rows: _,
    indexById: k,
    messages: n,
    hasMoreOlder: s,
    loadingOlder: i,
    onReachTop: l,
    hasMoreNewer: c,
    loadingNewer: u,
    onReachBottom: f
  }), B = r.length > 0, ce = P(!1);
  H(() => {
    B && !ce.current && N && W("smooth"), ce.current = B;
  }, [B, N, W]);
  const oe = P(null), he = K(() => {
    const q = oe.current;
    if (!q) return;
    if (q.kind === "bottom") {
      _.length > 0 && (y.scrollToIndex(_.length - 1, { align: "end" }), oe.current = null);
      return;
    }
    const be = k.get(q.id);
    be != null && (y.scrollToIndex(be, { align: "center", behavior: "smooth" }), oe.current = null);
  }, [k, y, _.length]);
  H(he, [he]), H(() => {
    F((q) => {
      oe.current = { kind: "id", id: q }, he();
    });
  }, [F, he]);
  const G = K(() => {
    c && d ? (oe.current = { kind: "bottom" }, d(qo)) : W();
  }, [c, d, W]), xe = N && R;
  H(() => {
    xe && m > 0 && h?.();
  }, [xe, m, h]);
  const pe = P(N);
  pe.current = N;
  const O = K(() => {
    C.current && (clearTimeout(C.current), C.current = null);
  }, []);
  H(() => {
    $.current !== a.id && ($.current = a.id, O(), M(!1), E(p));
  }, [a.id, p, O]), H(() => {
    const q = n[n.length - 1];
    !q || q.id === T.current || (T.current = q.id, !(!q.isMine || !D || S) && (M(!0), C.current = setTimeout(() => {
      C.current = null, E(null), M(!1), pe.current && W("auto");
    }, wc)));
  }, [n, D, S, W]), H(() => O, [O]);
  const Q = P(null);
  Q.current === null && n.length > 0 && (Q.current = new Set(n.map((q) => q.id)));
  const Z = Q.current ?? Ic, J = y.getVirtualItems(), fe = J[0], U = fe ? Cc(_, fe.index) : null, ie = x || c;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => z(!0),
      onMouseLeave: () => z(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: w,
            onScroll: V,
            className: "absolute inset-0 overflow-y-auto px-4",
            children: /* @__PURE__ */ t(
              "div",
              {
                className: "relative mx-auto w-full max-w-content",
                style: { height: y.getTotalSize() },
                children: /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute left-0 top-0 w-full",
                    style: {
                      transform: `translateY(${J[0]?.start ?? 0}px)`
                    },
                    children: J.map((q) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": q.index,
                        ref: y.measureElement,
                        children: /* @__PURE__ */ t(
                          yc,
                          {
                            row: _[q.index],
                            isGroup: v,
                            isFirstRow: q.index === 0,
                            isLastRow: q.index === _.length - 1,
                            enterAnimation: !b,
                            animatedIds: Z,
                            dividerLeaving: _[q.index].type === "divider" ? S : !1
                          }
                        )
                      },
                      q.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ce, { children: !I && /* @__PURE__ */ t(Us, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(Ce, { children: x && U && /* @__PURE__ */ t(
          ee.div,
          {
            className: "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
            initial: { opacity: 0, y: -4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ o(
              "div",
              {
                className: "flex items-center gap-1.5 rounded-full bg-f1-background border border-solid border-f1-border-secondary px-2.5 py-0.5 backdrop-blur z-50",
                "aria-label": i ? e.chat.loadingOlder : void 0,
                children: [
                  i && /* @__PURE__ */ t(Et, { size: "small", className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ t(Ja, { at: U, withTime: !0 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(Ce, { children: ie && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
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
              se,
              {
                onClick: G,
                variant: "neutral",
                icon: Hs,
                label: m > 0 ? e.t(
                  m === 1 ? "chat.unreadCount.one" : "chat.unreadCount.other",
                  { count: m }
                ) : c ? e.chat.backToLatest : e.chat.scrollToBottom,
                hideLabel: m === 0 && !c
              }
            ) })
          }
        ) })
      ]
    }
  );
}, Ic = /* @__PURE__ */ new Set(), Oe = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t(j, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((a, r) => /* @__PURE__ */ t(j, { className: g("h-8 rounded-2xl", a) }, r))
        }
      )
    ]
  }
), Sc = () => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": !0,
    className: "mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4",
    children: [
      /* @__PURE__ */ t(Oe, { mine: !1, widths: ["w-48", "w-32"] }),
      /* @__PURE__ */ t(Oe, { mine: !0, widths: ["w-56"] }),
      /* @__PURE__ */ t(Oe, { mine: !1, widths: ["w-40"] }),
      /* @__PURE__ */ t(Oe, { mine: !0, widths: ["w-44", "w-28"] }),
      /* @__PURE__ */ t(Oe, { mine: !1, widths: ["w-52", "w-36"] }),
      /* @__PURE__ */ t(Oe, { mine: !0, widths: ["w-36"] }),
      /* @__PURE__ */ t(Oe, { mine: !1, widths: ["w-44"] })
    ]
  }
), Fc = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), Ac = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(Sc, {}) }), Tc = () => {
  const e = X();
  return /* @__PURE__ */ t(Fc, { children: e.chat.error });
}, Rc = () => {
  const e = X();
  return /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center p-6", children: /* @__PURE__ */ t(
    ba,
    {
      emoji: "💬",
      title: e.chat.emptyConversation,
      description: e.chat.emptyConversationDescription
    }
  ) });
}, Je = (e) => e.dataTransfer?.types?.includes("Files"), Lc = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: a
}) => {
  const { channel: r, status: s, messages: i } = Le(), { dropFiles: l } = De(), c = P(0), [u, f] = L(!1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (d) => {
        Je(d) && (d.preventDefault(), d.stopPropagation(), c.current++, f(!0));
      },
      onDragOver: (d) => {
        Je(d) && (d.preventDefault(), d.stopPropagation());
      },
      onDragLeave: (d) => {
        Je(d) && (d.preventDefault(), d.stopPropagation(), c.current--, c.current <= 0 && (c.current = 0, f(!1)));
      },
      onDrop: (d) => {
        if (!Je(d)) return;
        d.preventDefault(), d.stopPropagation(), c.current = 0, f(!1);
        const m = Array.from(d.dataTransfer.files);
        m.length > 0 && l(m);
      },
      children: [
        /* @__PURE__ */ t(
          Ko,
          {
            channel: r,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: a
          }
        ),
        s === "connecting" ? /* @__PURE__ */ t(Ac, {}) : s === "error" ? /* @__PURE__ */ t(Tc, {}) : i.length === 0 ? /* @__PURE__ */ t(Rc, {}) : /* @__PURE__ */ t(kc, {}),
        /* @__PURE__ */ t(Uo, {}),
        /* @__PURE__ */ t(Ho, { visible: u })
      ]
    }
  );
}, Bu = (e) => /* @__PURE__ */ t(zo, { children: /* @__PURE__ */ t(Lc, { ...e }) }), Zt = {
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
}, Dc = Ae({
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
      ...Zt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Oc = ve.forwardRef(function({ className: n, gap: a, children: r, tileSize: s, ...i }, l) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: l, ...i, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(Dc({ gap: a, tileSize: s }), n),
      ref: l,
      ...i,
      children: r
    }
  ) });
}), _c = Ae({
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
}), Za = ae(function({
  className: n,
  grow: a,
  basis: r,
  shrink: s,
  paddingX: i,
  paddingY: l,
  inline: c,
  overflow: u,
  maxWidth: f,
  justifyContent: d,
  alignItems: m,
  height: p,
  width: h,
  ...b
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        _c({
          paddingX: i,
          basis: r,
          paddingY: l,
          grow: a,
          shrink: s,
          inline: c,
          overflow: u,
          maxWidth: f,
          justifyContent: d,
          alignItems: m,
          height: p,
          width: h
        }),
        n
      ),
      ref: v,
      ...b
    }
  );
}), Ec = Ae({
  base: "flex-row",
  variants: {
    gap: {
      ...Zt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Pc = ve.forwardRef(function({ className: n, gap: a, wrap: r, ...s }, i) {
  return /* @__PURE__ */ t(
    Za,
    {
      className: g(Ec({ gap: a, wrap: r }), n),
      ref: i,
      ...s
    }
  );
}), zc = Ae({
  base: "flex-col",
  variants: {
    gap: {
      ...Zt
    }
  },
  defaultVariants: {}
}), Bc = ae(function({ className: n, gap: a, children: r, ...s }, i) {
  return /* @__PURE__ */ t(
    Za,
    {
      className: g(zc({ gap: a }), n),
      ref: i,
      ...s,
      children: r
    }
  );
}), $u = ke(
  {
    name: "Stack",
    type: "layout"
  },
  Bc
), Mu = ke(
  {
    name: "Split",
    type: "layout"
  },
  Pc
), ju = ke(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Oc
), $c = ({ children: e }) => {
  const { enabled: n } = xa();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
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
}, Mc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), jc = ae(function({ header: n, children: a, action: r, summaries: s, alert: i, status: l, fullHeight: c = !1 }, u) {
  const { enabled: f, toggle: d } = xa();
  H(() => {
    if (i && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, l]);
  const m = (h) => !!h && !(ve.isValidElement(h) && h.type === ve.Fragment && ve.Children.count(h.props.children) === 0), p = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    jt,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: u,
      children: [
        n && /* @__PURE__ */ t(Wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Ut, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Mc, {}),
                /* @__PURE__ */ t(da, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Te, { label: n.info, children: /* @__PURE__ */ t(
                Y,
                {
                  icon: ua,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(ut, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ t(fa, { text: i, level: "critical" }),
              l && /* @__PURE__ */ t(nt, { text: l.text, variant: l.variant }),
              n.link && /* @__PURE__ */ t(
                Vs,
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
            /* @__PURE__ */ t($c, { children: /* @__PURE__ */ t(Gs, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              ne,
              {
                icon: f ? Ks : qs,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: d,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Ht, { className: "flex h-full flex-col gap-4", children: [
          s && /* @__PURE__ */ t("div", { className: "flex flex-row", children: s.map((h, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: h.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!h.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.prefixUnit }),
              h.value,
              !!h.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.postfixUnit })
            ] })
          ] }, b)) }),
          ve.Children.toArray(a).filter(m).map((h, b) => /* @__PURE__ */ o(ve.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t(wi, { bare: !0 }),
            h
          ] }, b))
        ] }),
        r && /* @__PURE__ */ t(Ys, { children: /* @__PURE__ */ t(ne, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Wc = Ae({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Uc = ae(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
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
          /* @__PURE__ */ t(Wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Ut, { children: n.title }) : /* @__PURE__ */ t(j, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(da, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Ht,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && Wc({ height: a })),
              children: [...Array(4)].map((s, i) => /* @__PURE__ */ t(
                j,
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
), ze = me(
  le("Widget", ue(jc, Uc))
), we = Object.assign(
  ae(function({ chart: n, summaries: a, ...r }, s) {
    return /* @__PURE__ */ t(ze, { ref: s, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), Hc = ue(
  ae(function({ canBeBlurred: n, ...a }, r) {
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
      we,
      {
        ref: r,
        ...s,
        chart: /* @__PURE__ */ t(Ni, { ...i, canBeBlurred: n })
      }
    );
  }),
  we.Skeleton
), Vc = le(
  "AreaChartWidget",
  Hc
), Gc = ae(function(n, a) {
  return /* @__PURE__ */ t(
    we,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(Ci, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Kc = le(
  "BarChartWidget",
  ue(Gc, we.Skeleton)
), qc = ue(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        we,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(ki, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  we.Skeleton
), Yc = le(
  "LineChartWidget",
  qc
), Qc = ue(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        we,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Ii, { ...n.chart })
        }
      );
    }
  ),
  we.Skeleton
), Xc = le(
  "PieChartWidget",
  Qc
), Jc = ue(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(we, { ref: a, ...n, chart: null });
    }
  ),
  we.Skeleton
), Zc = le(
  "SummariesWidget",
  Jc
), ed = ue(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        we,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Si, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  we.Skeleton
), td = le(
  "VerticalBarChartWidget",
  ed
), Wu = ke(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Vc
), Uu = ke(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Kc
), Hu = ke(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Yc
), Vu = ke(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Xc
), Gu = ke(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  td
), Ku = ke(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Zc
), nd = (e, n) => /* @__PURE__ */ o(
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
), ad = ae(nd), rd = (e, n) => /* @__PURE__ */ o(
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
), sd = ae(rd), id = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, ld = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, od = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, cd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, dd = ae(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: s, buttonAction: i, type: l }, c) {
    const u = id[l], f = ld[l], d = od[l], m = cd[l];
    return /* @__PURE__ */ o(
      jt,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          u
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Wt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Ut, { children: n }) }),
          /* @__PURE__ */ o(Ht, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  d
                ),
                children: [
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(ad, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(sd, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                ne,
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
), qu = me(
  le("ChartWidgetEmptyState", dd)
);
function ud(e, n) {
  const a = P(null), r = P(null), [s, i] = L({
    visibleItems: [],
    overflowItems: []
  });
  Qs({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const l = K(
    (d, m, p) => m < p - 1 ? d + n : d,
    [n]
  ), c = K(() => {
    if (!r.current) return [];
    const d = r.current.children, m = [];
    for (let p = 0; p < d.length; p++) {
      const h = d[p].getBoundingClientRect().height;
      m.push(h);
    }
    return m;
  }, []), u = K(
    (d, m) => {
      let p = 0, h = 0;
      for (let b = 0; b < d.length; b++) {
        const v = h + d[b];
        if (v > m + 30) break;
        h = v, h = l(
          h,
          b,
          d.length
        ), p++;
      }
      return p;
    },
    [l]
  ), f = K(() => {
    if (!a.current || e.length === 0) return;
    const d = a.current.clientHeight, m = c(), p = u(
      m,
      d
    );
    i(p === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (h) => h.visibleItems.length === p && h.overflowItems.length === e.length - p ? h : {
      visibleItems: e.slice(0, p),
      overflowItems: e.slice(p)
    });
  }, [e, c, u]);
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
  const { containerRef: c, measurementContainerRef: u, visibleItems: f } = ud(n, s);
  return H(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", r),
      style: {
        minHeight: `${i}px`
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: u,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${s}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((d, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: a(d, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${s}px` },
            "data-testid": "overflow-visible-container",
            children: f.map((d, m) => /* @__PURE__ */ t(
              "div",
              {
                className: "transition-all duration-150",
                "data-testid": "overflow-visible-item",
                children: a(d, m, !0)
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
const Yu = ({
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
) : null, fd = ({ onClick: e, children: n }) => {
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
function Qu({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: s
}) {
  return /* @__PURE__ */ t(fd, { onClick: s, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        s && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(Y, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const md = ae(
  function({ content: n, label: a, color: r, ...s }, i) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: i, children: [
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
        "icon" in s && s.icon && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(Y, { icon: s.icon }) }),
        "emoji" in s && s.emoji && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(Me, { emoji: s.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Xu = ae(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: s, color: i, ...l }) => /* @__PURE__ */ t(
          md,
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
), hd = ({
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
function Ju({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: s,
  withPointerCursor: i = !1,
  onClick: l,
  ...c
}) {
  return /* @__PURE__ */ o(
    hd,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: i,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Xs, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Js, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Mt,
          {
            avatars: r,
            remainingCount: s,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const pd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function En({
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
  return /* @__PURE__ */ o(pd, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: i, children: [
    /* @__PURE__ */ t(na, { module: s ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const gd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Ot({
  id: e,
  title: n,
  alert: a,
  rawTag: r,
  count: s,
  icon: i,
  rightIcon: l,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: u = "text-f1-icon-secondary",
  onClick: f
}) {
  const d = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(gd, { onClick: (p) => {
    p.preventDefault(), f?.(e);
  }, className: d, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ t(
        Y,
        {
          icon: i,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        Y,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", u)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(fa, { ...a }),
      r && /* @__PURE__ */ t($e, { ...r }),
      !!s && /* @__PURE__ */ t(ut, { value: s })
    ] })
  ] });
}
function Zu({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: s
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((i) => /* @__PURE__ */ t(En, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ t(
    pt,
    {
      items: e,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ t(En, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: s,
      gap: 8
    }
  );
}
function ef({
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
const bd = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), tf = ae(
  function({ title: n, titleValue: a, titleTooltip: r, list: s }, i) {
    return /* @__PURE__ */ o("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            Te,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(Y, { icon: ua, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      s.map((l) => /* @__PURE__ */ t(bd, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function nf({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: s = !1,
  hideTooltip: i = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      Fi,
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
const er = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, xd = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: s = !0
}) => {
  const l = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[l], u = (() => {
    if (!s || r === void 0) return;
    const d = er(
      a,
      r
    ), m = Math.abs(d), p = Math.floor(m / 60), h = Math.floor(m % 60), b = `${p.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = _e[l];
  return {
    status: l,
    statusText: c,
    subtitle: u,
    statusColor: f
  };
}, Nt = "--:--", vd = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: _e.empty
    };
  if (!n)
    return {
      value: 1,
      color: _e.empty
    };
}, yd = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, s = er(
    n,
    a
  ), i = e.reduce(
    (d, m) => d + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (s ?? 0) * 60, l = r || (s ?? 0) < 0 ? void 0 : vd(
    s ?? 0,
    i
  );
  let c = (s ?? 0) < 0 ? Math.abs(s ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (d, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, h = m.variant === "clocked-in" ? Math.min(p, c) : 0, v = (p - h) / i;
        return c -= h, m.variant === "clocked-in" && r ? [
          ...d,
          {
            value: h / i + v,
            color: _e.overtime
          }
        ] : [
          ...d,
          {
            value: h / i,
            color: _e.overtime
          },
          {
            value: v,
            color: _e[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...l ? [l] : []
  ];
  return f = f.filter((d) => d.value > 0), f.length || f.push({
    value: 1,
    color: _e.empty
  }), f;
}, wd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((p) => p.variant === "clocked-in")?.from, s = e.at(-1), i = r ? nn(r) : Nt, l = n === void 0 || n > 0 ? Nt : s ? nn(s.to) : Nt, u = s?.variant === "break" ? s?.to.getTime() - s?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(u / (1e3 * 60 * 60)), d = Math.floor(u % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
  return {
    primaryLabel: i,
    secondaryLabel: l,
    time: m
  };
}, _e = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Nd({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = yd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: s, secondaryLabel: i, time: l } = wd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ai, { width: 156, height: 156, children: /* @__PURE__ */ t(
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
        children: r.map((c, u) => /* @__PURE__ */ t(
          Zs,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${u}`
        ))
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: l }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: s }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: i })
    ] })
  ] });
}
function Cd({
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
        a && /* @__PURE__ */ t(Y, { icon: a, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(Y, { icon: ei })
      ]
    }
  );
}
function af({
  trackedMinutes: e,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: s,
  locations: i,
  canShowLocation: l = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: u,
  onClockOut: f,
  onBreak: d,
  breakTypes: m,
  onChangeBreakTypeId: p,
  canShowBreakButton: h = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: F = !0,
  projectSelectorElement: R,
  breakTypeName: z
}) {
  const { status: D, statusText: E, subtitle: S, statusColor: M } = xd({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), $ = D === "clocked-out", C = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? r.paid : r.unpaid
  })) ?? [], [T, A] = L(!1), k = () => {
    if (C.length > 1)
      T || A(!0);
    else {
      const B = C?.[0]?.value;
      d?.(B);
    }
  }, _ = (B) => {
    p?.(B), A(!1), d?.(B);
  }, y = $ && i.length && !c && l, x = i.find((B) => B.id === s), N = i.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), I = D === "break", [W, V] = L(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: E }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                ee.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: M
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
                    backgroundColor: M
                  }
                }
              )
            ] })
          ] }),
          S && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: S })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            ne,
            {
              onClick: u,
              label: r.clockIn,
              icon: an
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(re, { children: [
            h && /* @__PURE__ */ t(re, { children: C.length > 1 && p ? /* @__PURE__ */ t(
              at,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: C,
                onChange: _,
                open: T,
                onOpenChange: A,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  ne,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: rn,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              ne,
              {
                onClick: k,
                label: r.break,
                variant: "neutral",
                icon: rn,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              ne,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: sn
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t(
              ne,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: sn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              ne,
              {
                onClick: u,
                label: r.resume,
                icon: an
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        Nd,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(re, { children: [
      /* @__PURE__ */ t(
        at,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: s,
          options: N,
          onChange: w,
          open: W,
          onOpenChange: V,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Cd,
            {
              text: x?.name,
              placeholder: r.selectLocation,
              icon: x?.icon
            }
          ) })
        }
      ),
      F && R
    ] }) : /* @__PURE__ */ o(re, { children: [
      l && x && /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t($e, { text: x.name, icon: x.icon }) }),
      F && R,
      I && z && /* @__PURE__ */ t($e, { text: z })
    ] }) })
  ] }) });
}
const kd = {
  done: ai,
  "in-progress": ni,
  todo: ti
}, Id = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Sd({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const s = () => {
    a?.(e);
  }, i = te(() => {
    if (!r)
      return kd[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Ot,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: Id[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: ri
      } : void 0,
      count: e.counter,
      onClick: s
    }
  );
}
function rf({
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
    ({ key: u, status: f }) => (e[u] || []).map(
      (d) => typeof d == "string" ? {
        id: d,
        text: d
      } : d
    ).map(({ id: d, text: m, badge: p, counter: h }) => ({
      id: d,
      text: m,
      badge: p,
      counter: h,
      status: f
    }))
  ), c = !l.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: s }) : l.slice(0, r).map((u) => /* @__PURE__ */ t(
    Sd,
    {
      task: u,
      status: u.status,
      hideIcon: a,
      onClick: n
    },
    u.id
  )) });
}
var Fd = Object.defineProperty, Ad = Object.defineProperties, Td = Object.getOwnPropertyDescriptors, ot = Object.getOwnPropertySymbols, tr = Object.prototype.hasOwnProperty, nr = Object.prototype.propertyIsEnumerable, Pn = (e, n, a) => n in e ? Fd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, ye = (e, n) => {
  for (var a in n || (n = {})) tr.call(n, a) && Pn(e, a, n[a]);
  if (ot) for (var a of ot(n)) nr.call(n, a) && Pn(e, a, n[a]);
  return e;
}, gt = (e, n) => Ad(e, Td(n)), Rd = (e, n) => {
  var a = {};
  for (var r in e) tr.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && ot) for (var r of ot(e)) n.indexOf(r) < 0 && nr.call(e, r) && (a[r] = e[r]);
  return a;
}, Ld = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Dd = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Od = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = ye({}, n);
    return r.right = e.left, r;
  }
  return null;
}, _d = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = ye({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Ed = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let s = ye({}, r);
  return s.left = n.left + e.width, Ld(s) || Dd({ usedSpot: s, spotsList: a }) ? null : s;
}, Pd = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((s, i, l) => {
  if (s === a) return Ed({ stone: r, position: n, optimalSpot: a, spotsList: l });
  let c = Od({ position: n, spot: s, stone: r });
  return c || _d({ position: n, stone: r, spot: s }) || s;
});
function zd(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let s = n[a];
    if (e(s)) return s;
  }
  return null;
}
var Bd = (e, n) => n.filter(e), $d = (e, n) => [...n].sort(e), Md = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, jd = (e) => $d(Md, e), Wd = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let s = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (s.bottom = n.bottom);
  for (let i = 0, l = e.length; i < l; i += 1) {
    let c = e[i];
    if (s.left < c.left && s.top < c.top) {
      s.right = c.left;
      break;
    }
  }
  return s;
}, Ud = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Hd = ({ availableSpots: e, stone: n }) => zd((a) => Ud(a, n), e);
function Vd({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Hd({ availableSpots: n, stone: e }), s = { left: r.left, top: r.top }, i = Wd({ optimalSpot: r, availableSpots: n.filter((u) => u !== r), stone: e, containerSize: a }), l = [...n, i], c = Pd({ spots: l, position: s, optimalSpot: r, stone: e });
  return l = [...Bd(Boolean, c)], l = jd(l), { position: s, availableSpots: l };
}
var Gd = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, s = [], i = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let c = Vd({ availableSpots: i, stone: l, containerSize: n }), u = c.position.top + l.height;
    r < u && (r = u), s.push(c.position), i = c.availableSpots;
  }
  return { availableSpots: i, positions: s, containerHeight: r };
}, Kd = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), qd = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: s }) => {
  let [{ positions: i, containerHeight: l, stones: c, availableSpots: u }, f] = L({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return H(() => {
    var d, m;
    let p = Kd(e.current), h = (m = (d = n.current) == null ? void 0 : d.offsetWidth) != null ? m : 0;
    if (h === null) return;
    let b = Gd({ stones: p, containerSize: h });
    f(gt(ye({}, b), { stones: p }));
  }, [a, e, n, r, s]), { positions: i, containerHeight: l, stones: c, availableSpots: u };
}, Yd = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Qd = ({ transition: e, transitionDuration: n }) => e ? { transition: Yd(n)[e] } : null, Xd = (e) => e ? gt(ye({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Jd = ({ style: e, position: n, transition: a, transitionDuration: r }) => ye(ye(gt(ye({}, e), { position: "absolute" }), Xd(n)), Qd({ transition: a, transitionDuration: r }));
function Zd(e, n, a) {
  let r;
  return function(...s) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, s);
    }, n);
  };
}
var eu = () => {
  let [e, n] = L(), a = P(Zd(n, 300));
  return H(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, tu = (e) => {
  let [n, a] = L(null);
  return H(() => {
    let r = new ResizeObserver((s) => {
      for (let i of s) a(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, nu = (e) => {
  var n = e, { children: a, style: r, transition: s = !1, transitionDuration: i = 500, transitionStep: l = 50 } = n, c = Rd(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let u = P([]), f = P(null), d = eu(), m = tu(f), { positions: p, containerHeight: h } = qd({ boxesRefs: u, wrapperRef: f, children: a, windowWidth: d, wrapperWidth: m }), b = ye({ minHeight: h ?? 0, position: "relative" }, r);
  return t("div", gt(ye({ ref: f, style: b }, c), { children: pa.map(a, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let F = { style: Jd({ style: v.props.style, position: p[w], transition: s, transitionDuration: i }), ref: (R) => u.current[w] = R };
    return ha(v, ye(ye({}, v.props), F));
  }) }));
};
const au = { sm: 340, md: 480, lg: 640 }, zn = ae(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const s = au[a], [i, l] = L(), c = pa.toArray(n), u = P(null);
    return H(() => {
      const f = () => {
        const d = u.current?.offsetWidth;
        d && l(Math.floor(d / s) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, s]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: u, children: i === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(nu, { children: c.map((f, d) => /* @__PURE__ */ t(
      "div",
      {
        style: {
          width: `${Math.floor(1 / i * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: f
      },
      d
    )) }, i) }) }) });
  }
), ru = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], sf = ue(zn, () => /* @__PURE__ */ t(ma, { children: /* @__PURE__ */ t(zn, { children: ru.map((e, n) => /* @__PURE__ */ t(ze.Skeleton, { height: e }, n)) }) })), Bn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), lf = ue(
  ae(function({ children: n }, a) {
    return /* @__PURE__ */ t(dt, { ref: a, showBar: !1, children: /* @__PURE__ */ t(Bn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(ma, { orientation: "horizontal", children: /* @__PURE__ */ o(Bn, { children: [
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {})
  ] }) })
);
function su({
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
    ba,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const of = me(
  le("WidgetEmptyState", su)
), ar = ae(
  ({ title: e, children: n }, a) => (si(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
ar.displayName = "WidgetSection";
const cf = me(
  le("WidgetSection", ar)
), df = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const s = ii(), i = window.location.pathname, l = te(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), c = te(() => {
    let u = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (u += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (u += ` Disallowed routes: ${a.join(", ")}`), u;
  }, [e, n, a]);
  return l ? r : (s && console.error(c), null);
}, uf = me(
  ke(
    {
      name: "ScrollArea",
      type: "layout"
    },
    dt
  )
);
export {
  bu as ActivityItemList,
  Dl as ActivityItemListSkeleton,
  sl as AiPromotionChat,
  il as AiPromotionChatProvider,
  Nu as ApplicationFrame,
  Uf as AreaChart,
  Wu as AreaChartWidget,
  ju as AutoGrid,
  ms as Badge,
  Hf as BarChart,
  Uu as BarChartWidget,
  Ll as BaseActivityItemList,
  Vf as BaseBanner,
  zl as BaseCelebration,
  Gl as BaseCommunityPost,
  hf as BaseTabs,
  pf as BreadcrumbSelect,
  Ei as Breadcrumbs,
  Dt as CalendarEvent,
  Yu as CalendarEventList,
  Gf as CardSelectableContainer,
  ui as Carousel,
  Kf as CategoryBarChart,
  nf as CategoryBarSection,
  xu as Celebration,
  Bl as CelebrationSkeleton,
  qu as ChartWidgetEmptyState,
  gf as Chip,
  af as ClockInControls,
  qf as ComboChart,
  yu as CommunityPost,
  Kl as CommunityPostSkeleton,
  po as CompanySelector,
  ut as Counter,
  sf as Dashboard,
  Cu as DaytimePage,
  bf as DetailsItem,
  xf as DetailsItemsList,
  Yf as Dialog,
  Be as Dropdown,
  gu as EntitySelect,
  Qf as F0ActionBar,
  Xf as F0AiBanner,
  na as F0AvatarModule,
  vf as F0ButtonToggle,
  mu as F0Callout,
  yf as F0CardHorizontal,
  Bu as F0Chat,
  zu as F0ChatProvider,
  ca as F0FileItem,
  Jf as F0NotesTextEditor,
  Zf as F0NotesTextEditorSkeleton,
  em as F0NumberInput,
  Jr as F0RichTextDisplay,
  tm as F0RichTextEditor,
  Ts as F0SearchInput,
  hu as F0SegmentedBar,
  nm as F0SegmentedControl,
  am as F0TableOfContent,
  rm as F0TextAreaInput,
  wf as F0TextInput,
  pu as F0VersionHistory,
  sm as F1SearchBox,
  im as FILE_TYPES,
  Nf as FileItem,
  vu as HighlightBanner,
  Xu as IndicatorsList,
  lm as Input,
  om as Item,
  cm as ItemSectionHeader,
  qo as LATEST,
  dm as LineChart,
  Hu as LineChartWidget,
  Lu as Menu,
  Cf as MobileDropdown,
  um as NotesTextEditor,
  fm as NotesTextEditorSkeleton,
  mm as NumberInput,
  ku as OmniButton,
  Eu as OneApprovalHistory,
  kf as OneCalendar,
  If as OneCalendarInternal,
  hm as OneDataCollection,
  pm as OneDateNavigator,
  ba as OneEmptyState,
  gm as OnePagination,
  wu as OnePersonListItem,
  df as OneRestrictComponent,
  Iu as Page,
  fu as PageHeader,
  Kt as PageHeaderNavigationContext,
  du as PageHeaderNavigationProvider,
  Wi as PageNavigation,
  bm as PieChart,
  Vu as PieChartWidget,
  $c as PrivateBox,
  xm as ProgressBarChart,
  vm as RadarChart,
  Ml as Reactions,
  ym as ResourceHeader,
  Sf as RichTextDisplay,
  wm as RichTextEditor,
  uf as ScrollArea,
  Du as SearchBar,
  Nm as SectionHeader,
  at as Select,
  gs as Shortcut,
  Ou as Sidebar,
  fo as SidebarChatItem,
  Ua as SidebarChatItemSkeleton,
  Au as SidebarChatList,
  oo as SidebarChatListSkeleton,
  Su as SidebarChatProvider,
  Yt as SidebarCollapsibleSection,
  Tu as SidebarFooter,
  Ru as SidebarHeader,
  _u as SidebarTabs,
  Et as Spinner,
  Mu as Split,
  $u as Stack,
  Ku as SummariesWidget,
  Ff as Switch,
  Af as Tabs,
  Tf as TabsSkeleton,
  rf as TasksList,
  Cm as Textarea,
  Rf as ToggleGroup,
  Lf as ToggleGroupItem,
  Te as Tooltip,
  tf as TwoColumnsList,
  km as UPLOAD_INPUT_ID,
  Im as VerticalBarChart,
  Gu as VerticalBarChartWidget,
  Tt as VirtualList,
  Df as WeekStartDay,
  Of as Weekdays,
  ze as Widget,
  Ju as WidgetAvatarsListItem,
  of as WidgetEmptyState,
  Qu as WidgetHighlightButton,
  Zu as WidgetInboxList,
  En as WidgetInboxListItem,
  cf as WidgetSection,
  ef as WidgetSimpleList,
  Ot as WidgetSimpleListItem,
  lf as WidgetStrip,
  Sm as actionBarStatuses,
  Fm as buttonToggleSizes,
  Am as buttonToggleVariants,
  _f as chipVariants,
  Tm as downloadAsCSV,
  Ef as f0FileItemSizes,
  Rm as generateCSVContent,
  Pf as getGranularityDefinition,
  zf as getGranularityDefinitions,
  Bf as getGranularitySimpleDefinition,
  $f as granularityDefinitions,
  Mf as modules,
  Lm as predefinedPresets,
  jf as rangeSeparator,
  Ln as seedFromStorage,
  Dm as selectSizes,
  ft as useAiPromotionChat,
  Om as useDataCollectionData,
  Pu as useDataCollectionItemNavigation,
  bi as useDataCollectionSource,
  _m as useExportAction,
  Le as useF0Chat,
  Em as useInfiniteScrollPagination,
  Xi as usePageHeaderItemNavigation,
  uu as usePageHeaderNavigation,
  je as useSidebar,
  Fu as useSidebarChatActions,
  io as useSidebarChats
};
