import { h as cr, B as dr, i as ur, j as fr, k as nn, l as qe, m as Ue, n as mr, o as g, p as Z, q as Te, u as X, T as hr, r as pr, s as gr, R as br, t as xr, v as fe, w as vr, x as Et, y as kt, z as at, A as Ne, E as yr, G as wr, H as Q, J as _t, K as Ve, L as ie, M as Nr, N as Cr, O as jn, Q as kr, S as Ir, U as ne, V as H, W as Ee, X as Sr, Y as Fr, Z as Ar, _ as Tr, $ as Rr, a0 as ve, a1 as Wn, a2 as Re, a3 as rt, e as Un, a4 as Be, a5 as Hn, a6 as zt, a7 as he, a8 as le, a9 as Bt, aa as Vn, ab as Lr, ac as Gn, ad as ge, ae as me, af as Dr, ag as Pr, ah as Or, ai as Er, aj as _r, ak as Ae, al as ut, am as Kn, an as zr, ao as Br, ap as $r, aq as ft, ar as qn, as as Yn, at as Mr, au as jr, av as it, aw as Wr, ax as Qn, ay as Ur, az as Hr, aA as Vr, aB as Gr, aC as Kr, aD as Xn, aE as Jn, aF as Zn, aG as It, aH as ea, aI as St, aJ as ta, aK as qr, aL as Yr, aM as Qr, aN as na, aO as Xr, aP as Fe, aQ as Me, aR as Ft, aS as aa, aT as Jr, aU as $t, aV as Zr, aW as ei, aX as ti, aY as $e, aZ as ni, a_ as ai, a$ as Ye, b0 as an, b1 as At, b2 as ri, b3 as ii, a as si, b as li, b4 as ra, b5 as oi, g as ci, F as di, b6 as ui, b7 as ia, b8 as fi, b9 as Mt, ba as mi, bb as Ge, bc as hi, bd as pi, be as sa, bf as gi, bg as bi, bh as xi, bi as la, bj as jt, bk as vi, bl as yi, bm as wi, bn as Wt, bo as Ni, bp as Ci, bq as ki, br as Ii, bs as Si, bt as Fi, bu as oa, bv as ca, bw as Ai, bx as da, by as Ti, bz as Ri, bA as Li, bB as Di, bC as Pi, bD as Oi, bE as Ei, bF as _i, bG as zi, bH as Bi, bI as $i, bJ as Mi, bK as ji, bL as ua, bM as Wi, bN as Ui, bO as Hi, bP as Vi, bQ as Gi, bR as Ki, bS as Ce, bT as Ut, bU as Ht, bV as Vt, bW as fa, bX as Gt, bY as ma, bZ as ha, b_ as qi, b$ as Yi, c0 as Qi, c1 as Xi, c2 as Ji, c3 as Zi, c4 as es, c5 as ts, c6 as rn, c7 as ns, c8 as as, c9 as sn, ca as ln, cb as on, cc as rs, cd as is, ce as ss, cf as ls, cg as pa, ch as os, ci as cs } from "./F0CanvasPanel-LAnCiNzr.js";
import { cu as vf, ct as yf, cG as wf, cq as Nf, cr as Cf, cj as kf, ck as If, cl as Sf, cJ as Ff, cs as Af, cC as Tf, cD as Rf, cH as Lf, cm as Df, cw as Pf, cv as Of, cn as Ef, co as _f, cE as zf, cK as Bf, cF as $f, cI as Mf, cB as jf, cy as Wf, cA as Uf, cx as Hf, cp as Vf, cz as Gf } from "./F0CanvasPanel-LAnCiNzr.js";
import { jsx as t, jsxs as o, Fragment as re } from "react/jsx-runtime";
import be, { forwardRef as ae, useRef as z, useTransition as ds, useState as R, useLayoutEffect as st, useId as Tt, useContext as ke, createContext as Le, useEffect as V, useCallback as G, useMemo as ee, Fragment as us, isValidElement as fs, cloneElement as ga, memo as ms, Children as ba } from "react";
import { C as hs, P as ps, a as Ke, M as gs, p as bs, b as xs, R as cn, c as xa, u as vs, d as ys, e as ws, f as Ns, g as Cs, D as ks, h as Is, O as va, i as ya, S as Ss, A as Fs, B as As, L as Ts, j as Rs, V as Ls, k as Ds, l as Ps, m as Os } from "./useDataCollectionSource-CkjO61cP.js";
import { s as qf, t as Yf, q as Qf, J as Xf, v as Jf, E as Zf, aa as em, I as tm, r as nm, ac as am, ab as rm, U as im, af as sm, F as lm, _ as om, X as cm, N as dm, ah as um, Q as fm, $ as mm, a0 as hm, w as pm, ad as gm, ae as bm, T as xm, a1 as vm, a7 as ym, a9 as wm, x as Nm, z as Cm, G as km, Y as Im, ag as Sm, Z as Fm, W as Am, ai as Tm, y as Rm, H as Lm, n as Dm, o as Pm, a3 as Om, a4 as Em, a8 as _m, K as zm, a5 as Bm, a2 as $m, a6 as Mm } from "./useDataCollectionSource-CkjO61cP.js";
const Es = cr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), wa = ae(({ className: e, items: n }, a) => /* @__PURE__ */ t(dr, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(ur, {}),
  /* @__PURE__ */ t(fr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
wa.displayName = "CollapsedBreadcrumbItem";
const Kt = 50, _s = 120, lt = 8;
function zs(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let i = e - r - lt, s = 0, l = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, s = c, l++;
  }
  if (l < a)
    for (i -= Kt; i < 0 && l > 1; )
      i += n[s], s++, l--;
  return Math.max(2, l);
}
function dn(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + lt;
    default:
      return e[0] + Kt + e[e.length - 1] + lt;
  }
}
function Bs(e, n) {
  return _s * e + (n ? Kt : 0) + lt;
}
function $s(e, n, a = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Bs(
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
      minWidth: dn(i)
    };
  const s = zs(e, i);
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
    minWidth: dn(i)
  };
}
function Ms({ breadcrumbs: e, append: n }) {
  const a = z(null), r = z(null), [, i] = ds(), [s, l] = R(null), c = (s?.collapsedItems || []).length > 0;
  return st(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const p = a.current?.clientWidth ?? null, h = Array.from(f.children);
      i(() => {
        const b = $s(
          p,
          e,
          h
        );
        l(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(nn, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    nn,
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
              qe,
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
        s && s.headItem && /* @__PURE__ */ o(mr, { children: [
          /* @__PURE__ */ t(
            qe,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${Ue(s.headItem)}`
          ),
          c && /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t(
              wa,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              qe,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              Ue(d)
            ))
          ] }),
          !c && /* @__PURE__ */ t(re, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
            qe,
            {
              item: d,
              isLast: f === s.tailItems.length - 1,
              isFirst: !1,
              children: f === s.tailItems.length - 1 ? n : void 0
            },
            Ue(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Ue(e.at(-1)) ?? 0}`
  );
}
const js = Te({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), un = [
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
], Ws = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...i
}, s) => {
  const l = Tt(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: p,
    ...h
  } = i;
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(js({ size: n }), p),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        Z.svg,
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
            ...h.style
          },
          ...(({ style: b, ...v }) => v)(h),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              un.map((b) => /* @__PURE__ */ t("clipPath", { id: `${l}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: un.map((b) => /* @__PURE__ */ t(
              Z.foreignObject,
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
}, Na = ae(Ws), Ca = Le(null), Us = 15, Hs = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [i, s] = R(n), [l, c] = R(!1), [d, f] = R(!0), [u, m] = R(
    Us
  ), p = z(null), h = (v) => {
    p.current = v;
  }, b = () => {
    p.current && p.current();
  };
  return V(() => {
    s(n);
  }, [n]), V(() => {
    if (l && a?.(), !l) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [l, a]), /* @__PURE__ */ t(
    Ca.Provider,
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
        clear: b,
        setClearFunction: h
      },
      children: e
    }
  );
}, _e = () => {
};
function mt() {
  const e = ke(Ca);
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
const ka = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: i } = mt(), s = X(), [l, c] = R(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(hr, { children: /* @__PURE__ */ o(pr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(gr, { asChild: !0, children: /* @__PURE__ */ t(
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
        children: /* @__PURE__ */ t(
          br,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: i,
            "aria-label": i ? s.ai.closeChat : s.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              fe(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              xr,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Na,
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
    !i && /* @__PURE__ */ t(vr, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, fn = "one_sidebar_locked", Ia = Le(void 0);
function je() {
  const e = ke(Ia);
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
function Vs({ children: e }) {
  const { currentPath: n } = Et(), [a, r] = R(!1), [i, s] = R(!1), l = a ? at.xl : at.md, c = kt(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = R(() => {
    const T = localStorage.getItem(fn);
    return T !== null ? !!T : !0;
  }), [u, m] = R(!1), [p, h] = R(
    null
  ), b = G(
    ({ isInvokedByUser: T } = {
      isInvokedByUser: !0
    }) => {
      s(T ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = G(
    (T) => {
      c || (T.clientX < 32 && m(!0), T.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = ee(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return V(() => {
    m(!1);
  }, [n]), V(() => {
    i && localStorage.setItem(fn, d ? "1" : "");
  }, [d, i]), V(() => () => {
    h(w);
  }, [w]), /* @__PURE__ */ t(
    Ia.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: p,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const mn = Z.create(Q), hn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Gs = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, i] = R(!1), s = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ne, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        fe()
      ),
      onClick: s,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        mn,
        {
          size: "sm",
          icon: yr,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: hn,
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
        mn,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: wr,
          className: "outline-none",
          variants: hn,
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
function pn({
  icon: e,
  target: n,
  fallbackLabel: a
}) {
  const r = !n, i = n?.title || a, s = n?.onClick, l = s ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    ie,
    {
      ...s ? { onClick: s, type: "button" } : { href: l ?? "" },
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
function Ks({ previous: e, next: n, counter: a }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    a && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      a.current,
      "/",
      a.total
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        pn,
        {
          icon: _t,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        pn,
        {
          icon: Ve,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const qs = ({
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
  const [m, p] = R("idle"), [h, b] = R(null), [v, ...w] = h ?? [], [T, L] = R(!1);
  V(() => {
    b(null), p("idle");
  }, [e]);
  const _ = G(async () => {
    try {
      p("fetching");
      const D = await a();
      p("idle"), b(D);
    } catch {
      p("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Nr,
    {
      open: T,
      onOpenChange: async (D) => {
        L(D), D && h === null && _(), l(D);
      },
      children: [
        /* @__PURE__ */ t(Cr, { asChild: !0, children: /* @__PURE__ */ t(
          ie,
          {
            variant: "outline",
            icon: jn,
            hideLabel: !0,
            label: n,
            pressed: T,
            append: f && /* @__PURE__ */ t(qt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(kr, { children: /* @__PURE__ */ o(
          Ir,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Xs, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(el, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && h !== null && h.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Js, { ...i, buttonUrl: r }) }),
                m === "idle" && h !== null && h.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Ys,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  h.length > 1 && /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: w.map((D, O) => /* @__PURE__ */ t(
                    Qs,
                    {
                      ...D,
                      onClick: d
                    },
                    O
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Zs,
                  {
                    ...s,
                    onClick: () => {
                      _();
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
                  onDropdownClose: () => L(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Ys = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: i,
  onClick: s
}) => {
  const l = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Sr,
    {
      onClick: s,
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
              Fr,
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
              r && /* @__PURE__ */ t(qt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Qs = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: i
}) => {
  const s = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Ar, { asChild: !0, className: s, onClick: i, children: /* @__PURE__ */ t(
    Ee,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: g(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(qt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Xs = ({
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
          icon: Ve,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Sa = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: i
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: g(
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
] }) }), Js = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Sa,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(Q, { icon: jn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Ee, { href: a, children: /* @__PURE__ */ t(ne, { label: n }) })
  }
), Zs = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Sa,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(Q, { icon: Tr, size: "lg" }),
    button: /* @__PURE__ */ t(ne, { variant: "outline", label: a, onClick: r })
  }
), el = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(H, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(H, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(H, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(H, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(H, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), qt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), tl = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [i, s] = R(e);
  V(() => {
    s(e);
  }, [e]);
  const l = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return i && /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t(Rr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          ne,
          {
            variant: "ghost",
            icon: ve,
            size: "sm",
            hideLabel: !0,
            onClick: l,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        hs,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            ps,
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
}, Yt = Le(null), pu = Yt.Provider;
function gu() {
  return ke(Yt);
}
function nl(e, n) {
  const a = n?.getItemTitle, r = n?.mode ?? "url", i = e !== null, s = e?.previousItem ?? null, l = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, h = e?.goToPrevious, b = e?.goToNext;
  return ee(() => {
    if (!i) return null;
    const v = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, w = (_, D) => (_ !== null ? a?.(_) : void 0) ?? D, T = r === "callback" ? m ? { onClick: h, title: w(s, "Previous") } : void 0 : c !== null ? { url: c, title: w(s, "Previous") } : void 0, L = r === "callback" ? p ? { onClick: b, title: w(l, "Next") } : void 0 : d !== null ? { url: d, title: w(l, "Next") } : void 0;
    return !T && !L && !v ? null : { previous: T, next: L, counter: v };
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
    p,
    h,
    b,
    a
  ]);
}
function bu({
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
  const { sidebarState: u, toggleSidebar: m } = je(), p = ke(Yt), h = s ?? p ?? void 0, b = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], v = n && Object.keys(n).length !== 0, w = i && a.length > 0, T = !i && r.length > 0, L = !i && !!l?.isVisible, _ = b[b.length - 1], D = "navigation" in window ? window.navigation : null, O = i && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ne, { children: !i && u !== "locked" && /* @__PURE__ */ t(
            Z.div,
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
                  icon: Wn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                O && "justify-center"
              ),
              children: [
                i && O && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  ne,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: _t,
                    onClick: () => window.history.back()
                  }
                ) }),
                O || w ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in _ ? /* @__PURE__ */ t(H, { className: "h-4 w-24" }) : _.label }) : /* @__PURE__ */ t(
                  Ms,
                  {
                    breadcrumbs: b,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Gs,
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
          !i && v && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(Re, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            rt,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(rt, { text: n.text, variant: n.variant }) }),
          !i && v && (h || T || L) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Ks, { ...h }),
          h && T && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (L || T) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            L && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              qs,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            T && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((I, W) => /* @__PURE__ */ t(al, { action: I }, W)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Un,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(ka, {})
          ] })
        ] })
      ]
    }
  );
}
function al({ action: e }) {
  const n = z(null), [a, r] = R(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    ie,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    ie,
    {
      size: "md",
      variant: i,
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
        ie,
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
const rl = () => {
  const e = X();
  return /* @__PURE__ */ o(
    Z.div,
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
          ie,
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
}, il = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = z(null);
  V(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, sl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: i
  } = mt();
  return il({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(Ne, { children: n && /* @__PURE__ */ t(
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
      children: /* @__PURE__ */ t("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ t(
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
          children: e
        }
      ) })
    },
    "chat-window"
  ) });
}, ll = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(zt, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        ie,
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
  actions: s,
  onShow: l,
  onHide: c,
  children: d
}) => /* @__PURE__ */ t(
  Hs,
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
), cl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: i,
    actions: s,
    setOpen: l,
    onHide: c
  } = mt(), d = () => {
    l(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(sl, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      ie,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: ve,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Na, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(Bt, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        ll,
        {
          action: f,
          onClose: () => l(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(rl, {}) })
  ] }) : null;
}, dl = he(
  le("AiPromotionChat", cl)
), ul = he(
  le("AiPromotionChatProvider", ol)
), Fa = Te({
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
}), gn = {
  positive: Gn,
  warning: Lr,
  info: Vn
}, bn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, fl = ae(
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
        className: Fa({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  bn[s]
                ),
                children: [
                  gn[s] && /* @__PURE__ */ t(Q, { icon: gn[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: bn[s] || "font-medium",
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
                icon: ve,
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
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: i.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              ne,
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
    className: Fa({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(H, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(H, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(H, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(H, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(H, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(H, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Aa = ae(
  (e, n) => /* @__PURE__ */ t(fl, { ref: n, ...e })
), hl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ml, { compact: e, variant: n });
Aa.displayName = "F0Callout";
const xu = me(
  he(Aa),
  hl
), Ta = ae(
  ({ value: e, max: n, color: a = "categorical-1", label: r }, i) => {
    const s = X(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < c), f = Dr(a);
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
Ta.displayName = "F0SegmentedBar";
const vu = he(
  le("F0SegmentedBar", Ta)
);
function pl({
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
        fe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(Q, { icon: Pr, size: "md", color: "selected" }),
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
function gl({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: i } = Or(), s = Er(i), l = _r(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        fe("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${l} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            Ae,
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
        /* @__PURE__ */ t(ut, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            pl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            gl,
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
const yu = he(
  le("F0VersionHistory", bl)
), Ra = ae(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: i }, s) => {
    const l = be.useRef(null);
    be.useImperativeHandle(
      s,
      () => l.current,
      []
    );
    const c = Kn({
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
                children: d ? i(d) : /* @__PURE__ */ t(re, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Ra.displayName = "VirtualList";
const Rt = le("VirtualList", Ra), La = ({
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
  const i = new RegExp(`(${n})`, "gi"), s = e.split(i);
  return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
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
function ht(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = r.indexOf(e);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && n?.();
}
function pt(e, n) {
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
  search: s,
  goToFirst: l,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), p = m[0] || "", h = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(e) : a(e));
  }, v = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else w.key === "ArrowDown" ? ht(w.currentTarget, l) : w.key === "ArrowUp" && pt(w.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: g(
        i,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          Ae,
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
              La,
              {
                text: e.name,
                search: s,
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
            onClick: b,
            onKeyDown: v,
            className: g(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          Q,
          {
            className: "text-f1-icon-selected",
            icon: Gn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, tt = ({
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
  hideLine: p = !1,
  showGroupIcon: h = !1,
  singleSelector: b = !1,
  disabled: v = !1,
  hiddenAvatar: w = !1
}) => {
  const [T, L] = R(!1);
  if (!e)
    return /* @__PURE__ */ t(
      xl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: i,
        onSelect: l,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: w
      }
    );
  const _ = (I) => {
    if (I.key === " ")
      I.preventDefault(), d(!n);
    else if (I.key === "Enter" && b)
      d(!n);
    else if (I.key === "Enter") {
      if (v) return;
      !i || s ? l(r) : i && c(r);
    } else I.key === "ArrowDown" ? ht(I.currentTarget, f) : I.key === "ArrowUp" && pt(I.currentTarget, u);
  }, D = () => {
    if (T)
      d(!n), L(!1);
    else {
      if (v || b) return;
      i ? c(r) : l(r);
    }
  };
  if (!r.subItems?.length) return null;
  const O = i || s;
  return /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        ne,
        {
          hideLabel: !0,
          icon: n ? zr : Br,
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
            L(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            h && /* @__PURE__ */ t(
              Q,
              {
                icon: $r,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                La,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(ft, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              qn,
              {
                checked: O,
                disabled: v,
                onClick: D,
                onKeyDown: _,
                indeterminate: s,
                onPointerDown: (I) => {
                  I.stopPropagation(), L(!1);
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
tt.displayName = "EntitySelectListItem";
const xn = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? ht(s.currentTarget, a) : s.key === "ArrowUp" && pt(s.currentTarget, r);
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
          icon: Yn,
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
  })) || [], i = (l) => {
    const c = a.find((d) => d.label === l);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((l) => l.disabled);
  return /* @__PURE__ */ t(
    Mr,
    {
      items: r,
      value: e.label,
      disabled: s,
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
  anyVisibleSelected: s,
  loading: l,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = e && e.length > 0;
  if (!(!l && (!c && u || m))) return null;
  let h, b, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || i
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return v || (v = w, w = void 0), m && u ? (h = /* @__PURE__ */ t(
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
  ) : u && (h = /* @__PURE__ */ t(He, { primaryAction: v, secondaryActions: [] }), w && (b = /* @__PURE__ */ t(He, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    h,
    b
  ] }) });
}, yl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: i,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(Q, { icon: Es, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), ht(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), pt(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    Q,
    {
      icon: jr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), xt = 384, vt = 36, wl = 37, vn = 1, yn = 200, wn = '[data-avatarname-navigator-element="true"]', Nl = ({
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
  selectedEntities: p = [],
  onGroupChange: h,
  onToggleExpand: b,
  searchPlaceholder: v,
  selectAllLabel: w,
  clearLabel: T,
  notFoundTitle: L,
  notFoundSubtitle: _,
  className: D,
  actions: O,
  onCreate: I,
  onCreateLabel: W,
  singleSelector: j = !1,
  loading: C = !1,
  disabled: A = !1,
  hiddenAvatar: F = !1
}) => {
  const k = be.useRef(null), P = ee(
    () => e ? n.reduce(
      (E, J) => E + (J.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = G(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, vn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(wn)
      )[0]?.focus();
    }, yn);
  }, []), x = G(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, vn), setTimeout(() => {
      const E = Array.from(
        document.querySelectorAll(wn)
      );
      E[E.length - 1]?.focus();
    }, yn);
  }, []), N = ee(
    () => new Map(p.map((E) => [E.id, E])),
    [p]
  ), S = G(
    (E) => {
      const J = N.get(E.id);
      if (!e)
        return {
          selected: !!J,
          partialSelected: !!J
        };
      const $ = (E.subItems ?? []).filter(
        (M) => J?.subItems?.some(
          (te) => te.subId === M.subId
        )
      ), Y = (E.subItems?.length ?? 0) === $.length, ce = !Y && $.length > 0;
      return { selected: Y, partialSelected: ce };
    },
    [e, N]
  ), K = G(
    (E) => {
      if (E.index === 0 && I)
        return /* @__PURE__ */ t(
          xn,
          {
            label: W ?? "",
            onCreate: () => I?.(i),
            goToFirst: y,
            goToLast: x
          }
        );
      const J = I ? E.index - 1 : E.index, $ = n[J], { selected: Y, partialSelected: ce } = S($);
      return /* @__PURE__ */ t(
        tt,
        {
          expanded: $.expanded ?? !1,
          onExpand: () => b($, !0),
          search: i,
          groupView: e,
          entity: $,
          onSelect: s,
          onRemove: l,
          selected: Y,
          partialSelected: ce,
          showGroupIcon: Cl(a, r),
          singleSelector: j,
          goToFirst: y,
          goToLast: x,
          disabled: A,
          hiddenAvatar: F
        },
        $.id
      );
    },
    [
      I,
      W,
      A,
      n,
      S,
      y,
      x,
      e,
      a,
      F,
      l,
      s,
      b,
      i,
      r,
      j
    ]
  ), q = ee(() => e ? n.flatMap((E) => {
    const J = Qe(
      p ?? [],
      E.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: E.id,
          subName: E.name,
          subAvatar: E.avatar,
          expanded: E.expanded ?? J?.expanded ?? !1,
          subItems: E.subItems,
          subSearchKeys: E.searchKeys
        }
      },
      ...(E.subItems ?? []).map(($) => ({
        parent: {
          ...E,
          expanded: E.expanded ?? J?.expanded ?? !1
        },
        subItem: $
      }))
    ];
  }).filter(
    (E) => (!E.parent || E.parent.expanded) && (!!E.parent || !!E.subItem.subItems && E.subItem.subItems.length > 0)
  ) : n.map((E) => ({
    parent: null,
    subItem: {
      subId: E.id,
      subName: E.name,
      subAvatar: E.avatar,
      subSearchKeys: E.searchKeys
    }
  })), [e, n, p]), B = G(
    (E) => {
      if (E.index === 0 && I)
        return /* @__PURE__ */ t(
          xn,
          {
            label: W ?? "",
            onCreate: () => I?.(i),
            goToFirst: y,
            goToLast: x
          }
        );
      const J = I ? E.index - 1 : E.index, $ = q[J].parent, Y = q[J].subItem;
      if (!$) {
        const M = {
          id: Y.subId,
          name: Y.subName,
          avatar: Y.subAvatar,
          subItems: Y.subItems,
          expanded: Y.expanded,
          searchKeys: Y.subSearchKeys
        }, te = Qe(
          p,
          M.id
        ), U = (M?.subItems ?? []).filter(
          (We) => te?.subItems?.some(
            (or) => or.subId === We.subId
          )
        ), de = (M.subItems?.length ?? 0) === U.length, lr = !de && U.length > 0;
        return /* @__PURE__ */ t(
          tt,
          {
            groupView: !0,
            expanded: M.expanded ?? !1,
            onExpand: (We) => b(M, We),
            search: i,
            entity: M,
            onSelect: s,
            onRemove: l,
            selected: de,
            partialSelected: lr,
            showGroupIcon: a.find((We) => We.value === r)?.groupType === "team",
            singleSelector: j,
            goToFirst: y,
            goToLast: x,
            hideLine: J === q.length - 1,
            disabled: A,
            hiddenAvatar: F
          }
        );
      }
      let ce = !!Qe(p, Y.subId);
      if (!ce) {
        const M = Qe(
          p,
          $.id
        );
        ce = !!($?.subItems ?? []).filter(
          (U) => M?.subItems?.some(
            (de) => de.subId === U.subId
          )
        ).find((U) => U.subId === Y.subId);
      }
      return /* @__PURE__ */ t(
        tt,
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
            d($, Y);
          },
          onRemove: () => c($, Y),
          selected: !!ce,
          partialSelected: !1,
          singleSelector: j,
          goToFirst: y,
          goToLast: x,
          isChild: !0,
          hiddenAvatar: F
        }
      );
    },
    [
      q,
      p,
      i,
      j,
      y,
      x,
      s,
      l,
      a,
      A,
      b,
      r,
      d,
      c,
      F,
      I,
      W
    ]
  ), [se, oe] = ee(() => {
    if (!n.length)
      return [!1, !1];
    let E = 0, J = 0;
    if (!e)
      E = n.length, J = n.reduce(
        (ce, { id: M }) => ce + (N.has(M) ? 1 : 0),
        0
      );
    else {
      const ce = new Set(
        [...N.values()].flatMap(
          (M) => M.subItems?.map((te) => te.subId) ?? []
        )
      );
      n.forEach((M) => {
        const te = M.subItems ?? [];
        E += te.length, J += te.filter(
          (U) => ce.has(U.subId)
        ).length;
      });
    }
    const $ = E > 0 && J === E, Y = J > 0;
    return [$, Y];
  }, [n, N, e]), pe = q.length, ue = !j && (w || T), Se = O && O.length > 0, we = !C && (!j && ue || Se);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        j || C ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              j || C ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                yl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: y,
                  goToLast: x
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                it,
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
              we ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              C && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(zt, {}) }),
              !C && !P && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: xt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: L }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: _ })
                  ]
                }
              ),
              !C && (!!P || I) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: pe + (I ? 1 : 0),
                  itemSize: (E) => {
                    if (E === 0 && I) return vt;
                    const J = I ? E - 1 : E;
                    return q[J]?.parent === null ? wl : vt;
                  },
                  renderer: B,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: n.length + (I ? 1 : 0),
                  itemSize: vt,
                  renderer: K,
                  ref: k
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
            singleSelector: j,
            totalFilteredEntities: P,
            allVisibleSelected: se,
            anyVisibleSelected: oe,
            selectAllLabel: w,
            clearLabel: T,
            disabled: A,
            actions: O
          }
        )
      ]
    }
  );
}, Qe = (e, n) => e.find((a) => a.id === n), Cl = (e, n) => e.find((a) => a.value === n)?.groupType === "team", kl = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Wr,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ t(
      Qn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Ur, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      Q,
      {
        icon: ve,
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
  disabled: s = !1,
  hiddenAvatar: l = !1
}) => {
  const c = ee(() => {
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
  }, [e, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: i && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      i
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      Rt,
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
              disabled: s,
              hiddenAvatar: l,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(re, {});
        }
      }
    ) })
  ] });
}, Sl = 500, Nn = 520, Cn = 210, kn = ({
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
  ...p
}) => {
  const h = (s ?? Nn) < Sl, b = !c && !l && !h, v = s ?? Nn, w = b ? v - Cn : v;
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
              Nl,
              {
                ...p,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: l,
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
        b && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Cn + "px"
            },
            children: /* @__PURE__ */ t(
              Il,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: i,
                disabled: p.disabled,
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
  label: s,
  labelIcon: l,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: p = !1,
  maxLength: h,
  loading: b = !1,
  required: v = !1,
  readonly: w = !1,
  append: T,
  size: L = "sm",
  open: _
}) => {
  const D = ee(
    () => a.some(
      (j) => j.subItems && j.subItems.length > 0
    ),
    [a]
  ), O = ee(() => D ? a.flatMap(
    (j) => (j.subItems ?? []).map((C) => ({
      parent: j,
      subItem: C
    }))
  ) : a.map((j) => ({
    parent: null,
    subItem: {
      subId: j.id,
      subName: j.name,
      subAvatar: j.avatar,
      subDeactivated: j.deactivated
    }
  })), [D, a]), I = O.length === 0 ? void 0 : O.length === 1 ? O[0].subItem.subName : O.length + " " + n, W = O.length === 1 ? O[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    Hr,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: l,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !I ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: p,
      maxLength: h,
      clearable: !1,
      value: I,
      disabled: r,
      loading: b,
      required: v,
      readonly: w,
      size: L,
      avatar: i || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: O[0].subItem.subAvatar,
        deactivated: O[0].subItem.subDeactivated
      },
      append: T ?? /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t(Vr, { open: _, disabled: r, size: L }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            I && "text-f1-foreground",
            O.length === 1 && !i || c && !I ? "pl-8" : "pl-2"
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
}, wu = (e) => {
  const [n, a] = R(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (C) => {
    a(C), e.onOpenChange?.(C);
  };
  V(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, s] = R(e.entities), [l, c] = R(""), [d, f] = Gr("", 300), u = ee(
    () => e.entities.some(
      (C) => C.subItems && C.subItems.length > 0
    ),
    [e.entities]
  ), m = ke(Kr), h = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(C) {
    if (e.singleSelector) {
      e.onSelect(C), a(!1);
      return;
    }
    const A = e.selectedEntities ?? [], F = i.find((N) => N.id === C.id);
    if (!F)
      return;
    const k = new Set(
      (F.subItems ?? []).map((N) => N.subId)
    ), P = /* @__PURE__ */ new Set([F.id]);
    i.forEach((N) => {
      N.id !== F.id && (N.subItems ?? []).some(
        (K) => k.has(K.subId)
      ) && P.add(N.id);
    });
    const y = [...A];
    function x(N) {
      const S = y.findIndex((K) => K.id === N.id);
      S >= 0 ? y[S] = N : y.push(N);
    }
    P.forEach((N) => {
      const S = i.find((B) => B.id === N);
      if (!S) return;
      const K = S.subItems?.filter(
        (B) => k.has(B.subId)
      ) ?? [], q = y.findIndex((B) => B.id === N);
      if (q >= 0) {
        const B = y[q].subItems ?? [], se = new Set(B.map((pe) => pe.subId)), oe = [
          ...B,
          ...K.filter((pe) => !se.has(pe.subId))
        ];
        x({
          ...S,
          subItems: oe
        });
      } else
        x({
          ...S,
          subItems: K
        });
    }), e.onSelect(y);
  }
  function v(C, A) {
    if (e.singleSelector)
      e.onSelect({ ...C, subItems: [{ ...A }] }), a(!1);
    else {
      const F = e.selectedEntities ?? [], k = new Set(F.map((x) => x.id)), P = new Map(
        F.map((x) => [x.id, x.subItems ?? []])
      );
      k.add(C.id), e.entities.forEach((x) => {
        x.subItems?.some(
          (S) => S.subId === A.subId
        ) && k.add(x.id);
      });
      const y = [];
      e.entities.forEach((x) => {
        if (k.has(x.id)) {
          let S = [...P.get(x.id) ?? []];
          x.subItems?.some(
            (B) => B.subId === A.subId
          ) && (S.some(
            (se) => se.subId === A.subId
          ) || S.push(A));
          const q = new Set(
            (x.subItems ?? []).map((B) => B.subId)
          );
          S = S.filter(
            (B) => q.has(B.subId)
          ), y.push({
            ...x,
            subItems: S
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
    let A = [];
    const F = e.selectedEntities ?? [];
    if (u) {
      const k = i.find(
        (y) => y.id === C.id
      );
      if (!k)
        return;
      const P = new Set(
        (k.subItems ?? []).map((y) => y.subId)
      );
      for (const y of F) {
        const x = (y.subItems ?? []).filter(
          (N) => !P.has(N.subId)
        );
        x.length > 0 && A.push({
          ...y,
          subItems: x
        });
      }
    } else
      A = (F ?? []).filter((k) => k.id !== C.id);
    e.onSelect(A);
  }
  function T(C, A) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const F = e.selectedEntities ?? [], k = A.subId, P = [];
    for (const y of F) {
      const x = y.subItems?.filter((N) => N.subId !== k) ?? [];
      x.length > 0 && P.push({
        ...y,
        subItems: x
      });
    }
    e.onSelect(P);
  }
  function L() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [];
    let A = [];
    if (u) {
      const F = new Set(
        i.flatMap(
          (k) => (k.subItems ?? []).map((P) => P.subId)
        )
      );
      for (const k of C) {
        const P = (k.subItems ?? []).filter(
          (y) => !F.has(y.subId)
        );
        P.length > 0 && A.push({
          ...k,
          subItems: P
        });
      }
    } else {
      const F = new Set(
        i.map((k) => k.id)
      );
      A = (C ?? []).filter((k) => !F.has(k.id));
    }
    e.onSelect(A);
  }
  function _() {
    const C = [...e.selectedEntities ?? []];
    i.forEach((A) => {
      const F = C.find((k) => k.id === A.id);
      if (!F)
        C.push({
          ...A,
          subItems: A.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...F.subItems ?? [],
            ...A.subItems ?? []
          ])
        );
        F.subItems = k;
      }
    }), e.singleSelector || e.onSelect(C);
  }
  const D = (C) => {
    c(C), f(C);
  }, O = (C, A) => {
    e.onItemExpandedChange(C.id, A), s(
      i.map(
        (F) => F.id === C.id ? { ...F, expanded: !C.expanded } : F
      )
    );
  };
  V(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const A = e.entities.map((F) => {
        const k = Al(F, d), P = F.subItems?.map((y) => ({
          ...y,
          score: ot(
            d,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, x) => y.score - x.score);
        return {
          ...F,
          score: k,
          expanded: F.expanded ?? (P?.length ?? 0) > 0,
          subItems: P
        };
      }).filter((F) => F.score < 1 / 0).sort((F, k) => F.score - k.score);
      s(A);
    } else {
      const C = e.entities.map((A) => {
        const F = ot(
          d,
          A.searchKeys ?? [A.name]
        );
        return { ...A, score: F };
      }).filter((A) => A.score < 1 / 0).sort((A, F) => A.score - F.score);
      s(C);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const I = z(null), [W, j] = R(0);
  return st(() => {
    const C = () => {
      I.current && j(I.current.offsetWidth);
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: I,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        kn,
        {
          groupView: u,
          entities: i,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: T,
          onSubItemSelect: v,
          onClear: L,
          onSelectAll: _,
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
          width: e.width ?? W - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Xn, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      Jn,
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
      Zn,
      {
        container: h,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          kn,
          {
            groupView: u,
            entities: i,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: T,
            onSubItemSelect: v,
            onClear: L,
            onSelectAll: _,
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
function In(e) {
  return Lt(e).split(/\s+/).filter((n) => n.length > 0);
}
function ot(e = "", n) {
  const a = In(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const i = Lt(r), s = In(r), l = Lt(e);
    if (i.includes(l) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Al(e, n) {
  const a = ot(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((i, s) => {
    const l = ot(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(i, l);
  }, 1 / 0)), Math.min(a, r);
}
const Tl = ({
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
  const { ref: f } = It({
    threshold: 0.1,
    onChange(p) {
      p && d?.(e);
    }
  }), u = ea(n, {
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
        /* @__PURE__ */ t(St, { icon: i ?? ta }),
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
}, Rl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(H, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(H, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(H, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(H, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(H, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Qt = le(
  "ActivityItem",
  me(Tl, Rl)
), Da = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Ll = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Da, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Qt,
  {
    ...i,
    onClick: () => a(i.id),
    onVisible: r
  },
  i.id
)) }), Dl = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Da, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(Qt.Skeleton, {}, r)) }), nt = me(Ll, Dl), Pl = 3, Ol = ["today", "yesterday", "lastWeek", "lastMonth"], El = (e) => Qr(e, ([n]) => {
  const a = Ol.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), Dt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), _l = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: i = 5
}) => {
  const s = X(), l = qr(e, "createdAt"), c = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = Yr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = El(
    Object.entries(l).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ o(be.Fragment, { children: [
      /* @__PURE__ */ t(
        nt,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ t(Dt, {})
    ] }, u)),
    n && new Array(Pl).fill(null).map((u, m) => /* @__PURE__ */ t(Qt.Skeleton, {}, m))
  ] });
}, zl = () => {
  const e = X();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(nt.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Dt, {}),
    /* @__PURE__ */ t(
      nt.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Dt, {}),
    /* @__PURE__ */ t(
      nt.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Nu = le(
  "ActivityItemList",
  me(_l, zl)
), Bl = {
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
  onReactionSelect: s,
  pickerRef: l
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : $l[na(
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
                Ae,
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
                Ke,
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
function jl(e) {
  const n = z(null), a = z(), r = G(() => {
    const s = n.current;
    if (!s) return;
    const l = Xr.create(s, {
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
  }, [e]), i = G(() => {
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
  canReact: s = !0,
  lastEmojiReaction: l,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = R(l), h = z(null);
  V(() => {
    p(l);
  }, [l]);
  const b = (D) => {
    p(D), c?.(D);
  }, v = Fe(), { canvasRef: w, handleMouseEnter: T, handleMouseLeave: L } = jl(v), _ = Me({
    emoji: Bl[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ee,
    {
      href: e,
      onClick: i,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        fe()
      ),
      onMouseEnter: v ? void 0 : T,
      onMouseLeave: v ? void 0 : L,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Ml,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
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
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: _ })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(Ft, { date: u }) })
        ] })
      ]
    }
  );
}, Ul = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(H, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(H, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(H, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Cu = me(Wl, Ul), ku = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(aa, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(ne, { label: a, variant: "outline", onClick: r }) })
] });
function Pa({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: i
}) {
  const [s, l] = R(a), [c, d] = R(n), f = z(null), { fireEmojiConfetti: u } = Jr(), m = (b, v) => {
    b.stopPropagation(), d(c + (s ? -1 : 1)), l(!s), i?.(v), s || u(v, f);
  }, p = r?.map((b) => b.name).join(", ") || "", h = /* @__PURE__ */ t(
    $t,
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
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Zr(e),
      prepend: /* @__PURE__ */ t(Me, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ei,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: g(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return p ? /* @__PURE__ */ t(Re, { label: p, children: h }) : h;
}
function Hl({ items: e, onInteraction: n, locale: a, action: r }) {
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
    /* @__PURE__ */ t(Ke, { onSelect: n, locale: a }),
    e.map((i) => /* @__PURE__ */ t(
      Pa,
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
const Vl = le("Reactions", Hl), Oa = ae(function({ content: n, collapsed: a, id: r, className: i, tabIndex: s }, l) {
  return /* @__PURE__ */ t(
    ti,
    {
      ref: l,
      id: r,
      content: n,
      tabIndex: s,
      className: g(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        i
      )
    }
  );
});
Oa.displayName = "BasePostDescription";
const Gl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(H, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(H, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Ea = me(
  Oa,
  Gl
), Sn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
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
        Re,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), Pt = ae(
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
                f && /* @__PURE__ */ o(re, { children: [
                  /* @__PURE__ */ t(Ft, { date: f }),
                  /* @__PURE__ */ t(
                    Q,
                    {
                      icon: Ve,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(Ft, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(Sn, { tags: c }),
              d && /* @__PURE__ */ t(Sn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Kl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), _a = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Kl.has(a);
}, ql = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let i = ni(r);
  const s = (l) => {
    l.stopPropagation();
  };
  return a && (i = `${i} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: _a(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
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
      /* @__PURE__ */ t(H, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Pt,
      {
        title: e,
        description: i,
        color: ai.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Yl = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(H, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(H, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(H, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(H, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), za = me(ql, Yl), Ql = ({
  describedBy: e,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const i = X();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        fe()
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
  description: s,
  onClick: l,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: p,
  actions: h,
  dropdownItems: b,
  noReactionsButton: v = !1,
  descriptionExpandable: w = !1
}) => {
  const T = Tt(), L = Tt(), _ = z(null), [D, O] = R(null), [I, W] = R(!1), j = [f.views, f.comments].filter(Boolean).join(" · "), C = w && D?.id === e && D.description === s, A = !C, F = ea(r), k = () => {
    l(e);
  }, P = (N) => {
    N.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, x = (N) => {
    N.preventDefault(), N.stopPropagation(), s && O({ id: e, description: s });
  };
  return V(() => {
    C && _.current?.focus();
  }, [C]), V(() => {
    w || O(null);
  }, [w]), V(() => {
    const N = _.current;
    if (!w || !N || C) {
      W(!1);
      return;
    }
    const S = () => {
      W(
        N.scrollHeight > N.clientHeight
      );
    };
    if (S(), typeof ResizeObserver > "u") return;
    const K = new ResizeObserver(S);
    return K.observe(N), () => K.disconnect();
  }, [w, C, s]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: k,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Ye,
          {
            href: n.url || "#",
            title: y,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              Ae,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(St, { icon: an }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(re, { children: [
                  /* @__PURE__ */ t(
                    Ye,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        Ae,
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
                    Ye,
                    {
                      href: n.url,
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(St, { icon: an, size: "sm" }) }),
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
                  Ye,
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
                      icon: At,
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
                    icon: At,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: F }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: T,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              s && /* @__PURE__ */ o(re, { children: [
                /* @__PURE__ */ t(
                  Ea,
                  {
                    ref: _,
                    id: L,
                    content: s,
                    collapsed: A,
                    tabIndex: C ? -1 : void 0,
                    className: g(C && fe())
                  }
                ),
                w && I && !C && /* @__PURE__ */ t(
                  Ql,
                  {
                    describedBy: T,
                    controls: L,
                    expanded: C,
                    onClick: x
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: _a(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: P,
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
            /* @__PURE__ */ t(H, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(za, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: j }),
          !v && /* @__PURE__ */ t(
            Vl,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: ri
              }
            }
          )
        ] })
      ]
    }
  );
}, Jl = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(H, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(H, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(H, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(H, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(H, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Ea.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(H, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(za.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(H, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(H, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Iu = me(
  Xl,
  Jl
), Ba = be.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const i = () => {
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
      onClick: i,
      children: [
        /* @__PURE__ */ t(
          Ae,
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
            a.info && /* @__PURE__ */ t(Re, { label: a.info, children: /* @__PURE__ */ t(
              Q,
              {
                icon: Vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, l) => /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t($e, { ...s }, s.text),
            l < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(ii, { ...a.rightTag }),
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
}), Zl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(H, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(H, { className: "h-4" }),
    /* @__PURE__ */ t(H, { className: "h-4" })
  ] })
] });
Ba.displayName = "OnePersonListItem";
const Su = he(
  le(
    "OnePersonListItem",
    me(Ba, Zl)
  )
), Fn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function eo({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Vs, { children: /* @__PURE__ */ t(
    to,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function to({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: i
}) {
  const s = r?.enabled ? si : i?.enabled ? ul : us, l = r?.enabled ? r : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(s, { ...l, children: /* @__PURE__ */ t(
    io,
    {
      ai: r,
      aiPromotion: i,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const Fu = le(
  "ApplicationFrame",
  eo
), no = ({ contentId: e }) => {
  const n = X();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: fe(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function ao(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function ro(e, n) {
  const { sidebarState: a, toggleSidebar: r } = je(), i = z(e);
  V(() => {
    n && ao(
      e,
      i.current,
      a
    ) && r({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, a, r]);
}
function io({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: i
}) {
  const { sidebarState: s, toggleSidebar: l, isSmallScreen: c, setForceFloat: d } = je(), f = Fe(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: h,
    closeCanvas: b,
    chatWidth: v,
    resizable: w,
    panelSide: T
  } = li(), L = m === "fullscreen", _ = m === "canvas", { open: D } = mt(), O = w ? v : oi, I = T === "left", W = z(L), j = L && !W.current, C = !L && W.current, [
    A,
    F
  ] = R(!1);
  V(() => {
    !L && W.current && F(!0), W.current = L;
  }, [L]);
  const k = L || A || C, P = ee(() => j ? { duration: 0.15, ease: "easeOut" } : C ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [j, C]), y = kt(
    `(max-width: ${at.xl}px)`,
    { initializeWithValue: !0 }
  ), x = kt(`(max-width: ${at.md}px)`, {
    initializeWithValue: !0
  }), N = u && !I;
  return V(() => {
    d(N);
  }, [N, d]), V(() => {
    d(D);
  }, [D, d]), ro(N, y), /* @__PURE__ */ t(
    gs,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(ra, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ne, { children: s === "unlocked" && /* @__PURE__ */ t(
            Z.nav,
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
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (S) => {
                s === "hidden" ? S?.setAttribute("inert", "") : S?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(no, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Z.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !x && !I ? O : 0,
                paddingLeft: u && !x && I ? O : 0
              },
              transition: {
                paddingRight: Fn,
                paddingLeft: Fn
              },
              children: [
                /* @__PURE__ */ t(
                  Z.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      k ? "overflow-hidden" : "overflow-auto",
                      !u && !D && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      Z.div,
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
                e?.enabled && _ && p && /* @__PURE__ */ t(
                  "div",
                  {
                    className: g(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's seam-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex",
                      // Canvas sits opposite the panel, hugging the seam between
                      // them: panel-right -> canvas on the left, and vice versa.
                      I ? "justify-start" : "justify-end",
                      x ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        I ? "right-0" : "left-0"
                      )
                    ),
                    style: x ? void 0 : I ? { left: O } : { right: O },
                    children: /* @__PURE__ */ t(
                      ci,
                      {
                        content: p,
                        onClose: b,
                        entities: h,
                        side: I ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  Z.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      x ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        I ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        k || _ ? "z-20" : "z-0",
                        s === "hidden" && k ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: x || L ? "100%" : O
                    },
                    transition: P,
                    onAnimationComplete: () => {
                      A && F(!1);
                    },
                    children: /* @__PURE__ */ t(di, {})
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
const $a = ({
  firstName: e,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": i,
  pulse: s,
  onPulseClick: l
}) => {
  const c = X(), [d, f] = R(!s);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ne, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
    Z.div,
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
        Z.div,
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
    Z.div,
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
            "aria-labelledby": i
          }
        ),
        s ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          $t,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), l();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              Q,
              {
                icon: xs[s],
                color: bs[s],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          Z.div,
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
              ie,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: ui,
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
$a.displayName = "PulseAvatar";
const so = Te({
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
function Ma({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: l } = je();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: so({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || i === "hidden") && /* @__PURE__ */ t(
              ne,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: Wn,
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
                    $a,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    Ae,
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
            /* @__PURE__ */ t(Un, {}),
            /* @__PURE__ */ t(ka, {})
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
Ma.displayName = "DaytimePage";
const Au = he(
  le("DaytimePage", Ma)
);
function lo(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: i, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function oo({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Be, { items: lo(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            fe()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(Q, { icon: ia, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Tu = he(
  le("OmniButton", oo)
);
function ja({ children: e, header: n, embedded: a = !1 }) {
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
ja.displayName = "Page";
const Ru = he(le("Page", ja)), co = (e) => e.reduce(
  (n, a) => n + a.chats.filter((r) => (r.unreadCount ?? 0) > 0).length,
  0
), Wa = Le(null), Ua = Le(null), An = (e, n, a) => e.map((r) => r.id === n ? a(r) : r), Xe = (e, n) => e.map((a) => ({ ...a, chats: n(a.chats) })), Lu = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: a
}) => {
  const [r, i] = R(n), [s, l] = R(
    a
  ), c = ee(
    () => ({
      setGroups: i,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, u) => i((m) => m.some(
        (h) => h.chats.some((b) => b.id === u.id)
      ) ? Xe(
        m,
        (h) => h.map((b) => b.id === u.id ? { ...b, ...u } : b)
      ) : An(m, f, (h) => ({
        ...h,
        chats: [...h.chats, u]
      }))),
      updateChat: (f, u) => i(
        (m) => Xe(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, ...u } : h)
        )
      ),
      removeChat: (f) => i(
        (u) => Xe(u, (m) => m.filter((p) => p.id !== f))
      ),
      setUnread: (f, u) => i(
        (m) => Xe(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, unreadCount: u } : h)
        )
      ),
      reorder: (f, u) => i(
        (m) => An(m, f, (p) => {
          const h = new Map(p.chats.map((w) => [w.id, w])), b = u.map((w) => h.get(w)).filter((w) => !!w), v = p.chats.filter((w) => !u.includes(w.id));
          return { ...p, chats: [...b, ...v] };
        })
      )
    }),
    []
  ), d = ee(
    () => ({
      groups: r,
      activeChatId: s,
      unreadChatsCount: co(r)
    }),
    [r, s]
  );
  return /* @__PURE__ */ t(Ua.Provider, { value: c, children: /* @__PURE__ */ t(Wa.Provider, { value: d, children: e }) });
}, uo = () => {
  const e = ke(Wa);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Ha = () => {
  const e = ke(Ua);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, fo = () => {
  const e = uo(), n = Ha();
  return ee(() => ({ ...e, ...n }), [e, n]);
}, Du = () => Ha(), Xt = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: i,
  highlightWhenCollapsed: s,
  collapsedBadge: l,
  isDragging: c,
  wasDragging: d
}) => {
  const [f, u] = R(n), m = Fe(), p = s && !f, h = () => {
    if (c || d?.current) return;
    const b = !f;
    u(b), r?.(b);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(fi, { open: f, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          fe("focus-visible:ring-inset"),
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
            Z.div,
            {
              initial: !1,
              animate: { rotate: f ? 0 : -90 },
              transition: { duration: m ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(Q, { icon: Mt, size: "xs" })
            }
          ),
          !f && l && /* @__PURE__ */ t("span", { className: "ml-auto", children: l })
        ]
      }
    ) }),
    /* @__PURE__ */ t(mi, { forceMount: !0, className: "flex flex-col gap-1 mt-0.5", children: /* @__PURE__ */ t(
      Z.div,
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
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: i })
      }
    ) })
  ] }) });
}, Va = ({
  className: e
}) => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": "true",
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(H, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(H, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), mo = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(H, { className: "h-3 w-24 rounded" }) }), ho = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((a, r) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(mo, {}),
      Array.from({ length: n }).map((i, s) => /* @__PURE__ */ t(Va, {}, s))
    ] }, r))
  }
), Ga = ({ count: e }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-label": `${e} unread`,
    className: "flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info",
    children: e > 99 ? "+99" : e
  }
), po = () => /* @__PURE__ */ t(
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
), go = ({
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
) }), bo = ({
  chat: e,
  isActive: n,
  onClick: a
}) => {
  if (e.loading)
    return /* @__PURE__ */ t(Va, {});
  const r = !!e.unreadCount, i = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), s = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: a,
      "aria-pressed": n,
      className: g(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        fe("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        e.typing ? /* @__PURE__ */ t(po, {}) : /* @__PURE__ */ o("div", { className: "relative flex flex-shrink-0 items-center", children: [
          e.avatar.type === "emoji" ? (
            // Emoji groups show the glyph alone (no avatar chrome) so it isn't
            // shrunk inside the bordered avatar box.
            /* @__PURE__ */ t("span", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
          ) : /* @__PURE__ */ t(Ge, { size: "xs", avatar: e.avatar }),
          i && /* @__PURE__ */ t(go, { presence: i, isActive: n })
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
        (s || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          s && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            hi,
            {
              icon: s.icon,
              size: "sm",
              "aria-label": s.label,
              color: "default"
            }
          ) }),
          e.unreadCount && /* @__PURE__ */ t(Ga, { count: e.unreadCount })
        ] })
      ]
    }
  );
}, xo = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a new conversation to see it here."
}, vo = ({ action: e }) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: g(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      fe("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(Q, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), Pu = ({
  actions: e = [],
  emptyState: n,
  loading: a = !1
}) => {
  const { groups: r, activeChatId: i, setActiveChat: s } = fo(), l = Fe(), c = r.some((u) => u.chats.length > 0), d = { ...xo, ...n }, f = a && !c;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((u) => /* @__PURE__ */ t(vo, { action: u }, u.label)) }),
    f && /* @__PURE__ */ t(ho, {}),
    !f && !c && /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
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
        Xt,
        {
          title: u.title,
          isOpen: u.isOpen,
          highlightWhenCollapsed: m > 0,
          collapsedBadge: m > 0 ? /* @__PURE__ */ t(Ga, { count: m }) : void 0,
          children: /* @__PURE__ */ t(Ne, { initial: !1, children: u.chats.map((p) => /* @__PURE__ */ t(
            Z.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: l ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                bo,
                {
                  chat: p,
                  isActive: p.id === i,
                  onClick: () => {
                    s(p.id), p.onClick?.();
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
function yo({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: i = !1,
  additionalOptions: s = []
}) {
  const l = ee(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(H, { className: "size-6" }),
    /* @__PURE__ */ t(H, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    Tn,
    {
      company: l,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    wo,
    {
      companies: e,
      selected: l,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        Tn,
        {
          company: l,
          withNotification: i
        }
      )
    }
  ) });
}
const wo = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: i = []
}) => {
  const s = X(), [l, c] = R(!1), d = ee(
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
    const m = i?.find((p) => p.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ t(
    it,
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
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            fe()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              Z.div,
              {
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(Q, { icon: Mt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Tn = ({
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
        pi,
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
function Ou({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: i,
  onDropdownClick: s,
  hasActivityUpdates: l
}) {
  const c = X();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Be, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          fe("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ t(
            Ae,
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
    a && /* @__PURE__ */ t(Re, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        ne,
        {
          icon: ta,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(gi, { type: "highlight", size: "sm", icon: sa }) })
    ] }) })
  ] });
}
function No({ isExpanded: e }) {
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
function Co() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = je(), i = z(null);
  return V(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    $t,
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ t(No, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ t(Q, { icon: ve, size: "md" }) })
      ]
    }
  );
}
function Eu({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: i,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      yo,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(Co, {})
  ] });
}
function ko() {
  const [e, n] = R(!1);
  return V(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Ka = Le(void 0);
function Io({ children: e }) {
  const [n, a] = R(!1), [r, i] = R(null);
  return /* @__PURE__ */ t(
    Ka.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: i },
      children: e
    }
  );
}
function Jt() {
  const e = ke(Ka);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const So = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      Q,
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
    e.badge && /* @__PURE__ */ t(ft, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), Fo = ({ item: e }) => {
  const { isActive: n } = Et(), { label: a, icon: r, ...i } = e, s = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Ee,
    {
      ...i,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        fe("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(So, { item: e, active: s })
    }
  );
}, Ao = ({
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
  const f = X(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Jt(), { isActive: b } = Et(), v = b(e.href, { exact: e.exactMatch }), w = z(!1), [T, L] = R(!1), _ = i === 0, D = i === s - 1, O = s === 1, I = ee(() => {
    const k = [];
    return !O && !_ && k.push({
      label: f.actions.moveUp,
      onClick: () => l?.(i, i - 1),
      icon: bi
    }), !O && !D && k.push({
      label: f.actions.moveDown,
      onClick: () => l?.(i, i + 1),
      icon: xi
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: la,
      critical: !0
    }), k;
  }, [O, _, D, f, l, i, r, e]), W = () => {
    m(!0), L(!1), h(e.href || null), w.current = !0;
  }, j = () => {
    m(!1), h(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, C = u && p === e.href, A = ee(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      T && "bg-f1-background-secondary",
      C && "bg-f1-background-secondary"
    ),
    [v, T, C, d]
  ), F = ee(() => /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Ro, { tooltip: n, children: /* @__PURE__ */ o(
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
            Q,
            {
              icon: e.icon,
              size: "md",
              className: g(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ge, { size: "xs", avatar: e.avatar }) : null,
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
          T && "bg-f1-background-secondary opacity-100",
          C && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: T,
            onOpenChange: L,
            items: I,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Q, { icon: At, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, T, C, I, n]);
  return d ? /* @__PURE__ */ t(
    xa,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: j,
      className: A,
      whileDrag: {
        scale: 1.05
      },
      children: F
    }
  ) : /* @__PURE__ */ t("div", { className: A, children: F });
}, yt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: i,
  currentOrder: s
}) => {
  const { isDragging: l, setIsDragging: c } = Jt(), d = z(!1), f = vs(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && i?.(s);
    }, 0);
  }, p = (b) => {
    !l && !d.current && r?.(e, b);
  }, h = /* @__PURE__ */ t(
    Xt,
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
          className: g(
            "flex flex-col gap-0.5",
            l && !d.current && "pointer-events-none"
          ),
          children: e.items.map((b, v) => /* @__PURE__ */ t(Fo, { item: b }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    xa,
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
function _u({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: i
}) {
  const s = z(null), l = e.filter(
    (b) => b.isSortable === !1
  ), [c, d] = R(
    e.filter((b) => b.isSortable !== !1)
  ), [f, u] = R(0), m = G((b) => {
    d(b);
  }, []), p = G(
    (b) => {
      a?.(b);
    },
    [a]
  ), h = ko();
  return /* @__PURE__ */ t(Io, { children: /* @__PURE__ */ t(ra, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    To,
    {
      disableDragging: h,
      nonSortableItems: l,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: p,
      favorites: i,
      onFavoritesChange: r,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function To({
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
  const u = X(), { isDragging: m } = Jt(), p = e.some((y) => y.isRoot), h = e.filter((y) => !y.isRoot).length > 0, b = n.length > 0, v = z(null), [w, T] = R(l), L = l.length > 0;
  V(() => {
    JSON.stringify(l) !== JSON.stringify(w) && T(l);
  }, [l]);
  const _ = (y) => {
    T(y);
  }, D = G(
    (y) => {
      const x = w.filter((N) => N.href !== y.href);
      T(x), c?.(x);
    },
    [w, c]
  ), O = G(
    (y, x) => {
      if (x < 0 || x >= w.length) return;
      const N = [...w], [S] = N.splice(y, 1);
      N.splice(x, 0, S), T(N), c?.(N);
    },
    [w, c]
  ), [I, W] = R(!1), j = z(null);
  V(() => {
    n.length > 0 && !I && (a([...n]), W(!0));
  }, [n, a, I]), V(() => {
    const y = () => {
      j.current !== null && window.clearTimeout(j.current), j.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), j.current !== null && window.clearTimeout(j.current);
    };
  }, [r, n, d]);
  const C = "flex flex-col gap-0.5", A = ee(
    () => w.reduce(
      (y, x, N) => (x.label in y || (y[x.label] = []), y[x.label].push(N), y),
      {}
    ),
    [w]
  ), F = ee(
    () => L && w.map((y, x) => /* @__PURE__ */ t(
      Ao,
      {
        isSortable: !f,
        tooltip: (A[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: v,
        onRemove: D,
        index: x,
        total: w.length,
        onMove: O,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      L,
      w,
      A,
      D,
      O,
      c,
      f
    ]
  ), k = "flex flex-col gap-3", P = ee(() => n.map((y) => /* @__PURE__ */ t(
    yt,
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
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, x) => /* @__PURE__ */ t(
          yt,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${x}`
        )) }),
        L && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Xt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: C, children: F }) : /* @__PURE__ */ t(
          cn,
          {
            axis: "y",
            values: w,
            onReorder: _,
            className: C,
            children: F
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, x) => /* @__PURE__ */ t(
          yt,
          {
            category: y,
            onCollapse: i
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
            children: f ? /* @__PURE__ */ t("div", { className: k, children: P }) : /* @__PURE__ */ t(
              cn,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: k,
                children: P
              }
            )
          }
        )
      ]
    }
  );
}
const Ro = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(Re, { description: e, children: n }) : n;
function zu({
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
        fe()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(Q, { icon: jt, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(vi, { keys: a }) })
      ]
    }
  ) });
}
const Rn = ({ position: e }) => /* @__PURE__ */ t(
  Z.div,
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
function Lo({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: i, isSmallScreen: s } = je(), l = Fe(), [c, d] = It({ threshold: 1 }), [f, u] = It({ threshold: 1 }), m = X(), p = {
    x: {
      ease: i !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : i !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, h = () => a ? fs(a) && r ? ga(
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
      className: g(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        i === "locked" ? "h-full" : g(
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
      transition: p,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(ut, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Ne, { children: [
            !d && /* @__PURE__ */ t(Rn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(Rn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: h() })
      ]
    }
  );
}
const Bu = he(Lo), Do = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), Po = ({
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
        wi({ variant: r }),
        yi({ size: "md" }),
        fe()
      ),
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(Q, { icon: e.icon, size: "md", color: "default" }),
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
            e.badge ? /* @__PURE__ */ t(Do, {}) : null
          ]
        }
      )
    }
  );
}, $u = ({
  tabs: e,
  activeTab: n,
  onTabChange: a,
  search: r
}) => {
  const i = X(), s = r.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-4 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          Po,
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
        icon: jt,
        label: s,
        hideLabel: !0,
        onClick: r.onClick
      }
    )
  ] });
}, Oo = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Ln = {
  approved: {
    icon: Bt,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: ve,
    type: "critical",
    size: "sm"
  }
}, Eo = {
  icon: ia,
  type: "neutral",
  size: "sm"
}, _o = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, zo = (e) => e in Ln ? Ln[e] : Eo;
function Dn(e) {
  return _o[e ?? "neutral"] ?? 0;
}
const Bo = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const i = X(), s = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = i.approvals.statuses[a], c = ee(() => r.map((d) => {
    const f = zo(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => Dn(f.badge?.type) - Dn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(rt, { text: l, variant: Oo[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Wt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, $o = ({ steps: e }) => {
  const a = X().approvals.history, r = e.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((i, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, s) => /* @__PURE__ */ o(re, { children: [
        /* @__PURE__ */ t(
          Bo,
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
}, Mu = he(
  le("OneApprovalHistory", $o)
), wt = (e, n) => typeof n == "string" && n in e;
function Pn(e, n, a) {
  const r = {};
  let i = !1;
  const s = Ni(e);
  if (s !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(s).filter(
        ([u]) => wt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(s).length === 0) && (a.setCurrentFilters(f), r.filters = f, i = !0);
  }
  const l = e.sortings;
  if (l === null)
    a.setCurrentSortings(null), r.sortings = null, i = !0;
  else if (l && n.sortings && wt(n.sortings, l.field)) {
    const d = {
      field: l.field,
      order: l.order
    };
    a.setCurrentSortings(d), r.sortings = d, i = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (a.setCurrentSearch(e.search), r.search = e.search, i = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && wt(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(d), r.grouping = d, i = !0;
  }
  return i ? r : null;
}
function ju(e) {
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
    navigationMode: p = "url",
    deps: h = []
  } = e, b = Ci(), v = ys(n, h), [w, T] = R(null), L = w?.key === a && w.settled, _ = z(v);
  _.current = v;
  const D = z(b);
  D.current = b;
  const O = z(null), I = m === void 0 ? null : JSON.stringify(m), W = z(m);
  W.current = m;
  const j = z(null), C = () => {
    const M = W.current;
    M !== void 0 && (j.current = JSON.stringify(M), _.current.setCurrentFilters(M));
  };
  V(() => {
    if (!f || O.current === a) return;
    if (!u) {
      O.current = a, C(), T({ key: a, applied: null, settled: !1 });
      return;
    }
    let M = !1;
    return (async () => {
      let U = null;
      try {
        const de = await D.current.get(
          a
        );
        de && !M && (U = Pn(
          de,
          _.current,
          _.current
        ));
      } catch {
      }
      M || (O.current = a, C(), T({ key: a, applied: U, settled: !1 }));
    })(), () => {
      M = !0;
    };
  }, [a, f, u]), V(() => {
    !L || I === null || j.current !== I && C();
  }, [L, I]), V(() => {
    if (!(!f || !u))
      return ki(a, async () => {
        try {
          const M = await D.current.get(
            a
          );
          if (!M) return;
          const te = _.current;
          Pn(
            M,
            {
              filters: W.current === void 0 ? te.filters : void 0,
              sortings: te.sortings,
              search: te.search,
              grouping: te.grouping
            },
            te
          );
        } catch {
        }
      });
  }, [a, f, u]);
  const {
    data: A,
    paginationInfo: F,
    setPage: k,
    loadMore: P,
    isLoading: y,
    isInitialLoading: x
  } = Ii(
    v,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && L,
      fetchParamsProvider: (M) => ({
        ...M,
        navigationFilters: v.currentNavigationFilters
      })
    },
    [JSON.stringify(v.currentNavigationFilters)]
  );
  V(() => {
    T(
      (M) => M && M.key === a && !M.settled ? { ...M, settled: !0 } : M
    );
  }, [w, a]);
  const N = c ?? n.itemUrl, S = ws({
    dataSource: v,
    data: A,
    paginationInfo: F,
    setPage: k,
    loadMore: P,
    isLoading: y,
    idProvider: l,
    itemUrl: N,
    activeItemId: r,
    defaultActiveItemId: i,
    onActiveItemChange: s
  }), K = typeof S.activeItemId == "string" || typeof S.activeItemId == "number" ? S.activeItemId : null, q = S.activeItem !== null, B = q && S.nextItem === null && S.hasNext, se = q && S.previousItem === null && S.hasPrevious, oe = K !== null && (!q || B || se), pe = [
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
  ], { neighbors: ue, isSupported: Se } = Ns({
    dataAdapter: v.dataAdapter,
    id: K,
    filters: v.currentFilters,
    sortings: pe,
    search: v.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && L && !x && !y && oe,
    fetchParamsProvider: (M) => ({
      ...M,
      navigationFilters: v.currentNavigationFilters
    })
  }), we = ee(() => l || (v.idProvider ? (M, te) => v.idProvider(M, te) : Cs), [l, v.idProvider]), E = ee(() => {
    if (!oe || ue === null) return S;
    const M = S.previousItem ?? ue.previous, te = S.nextItem ?? ue.next, U = (de) => de && N ? N(de) ?? null : null;
    return {
      ...S,
      previousItem: M,
      nextItem: te,
      previousItemUrl: S.previousItemUrl ?? U(M),
      nextItemUrl: S.nextItemUrl ?? U(te),
      absoluteIndex: S.absoluteIndex ?? (ue.position !== void 0 ? ue.position - 1 : null),
      totalItems: S.totalItems ?? ue.total,
      hasPrevious: S.hasPrevious || M !== null,
      hasNext: S.hasNext || te !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: q ? S.goToPrevious : () => {
        ue.previous && S.setActiveItemId(
          we(ue.previous)
        );
      },
      goToNext: q ? S.goToNext : () => {
        ue.next && S.setActiveItemId(
          we(ue.next)
        );
      }
    };
  }, [
    S,
    oe,
    ue,
    q,
    N,
    we
  ]), J = nl(E, {
    getItemTitle: d,
    mode: p
  }), $ = f && L && Se && oe && ue === null, Y = z(null), ce = J ?? ($ ? Y.current : null);
  return V(() => {
    J !== null && (Y.current = J);
  }, [J]), {
    ...E,
    isNavigating: E.isNavigating || $,
    isReady: L && !x,
    navigation: ce,
    appliedCollectionState: w?.applied ?? null,
    dataSource: v,
    data: A,
    paginationInfo: F,
    isLoading: y
  };
}
const qa = Le(null), Wu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(qa.Provider, { value: e, children: n });
function De() {
  const e = ke(qa);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Mo = 200, jo = 1600, Ya = Le(null), Wo = ({
  children: e
}) => {
  const { messages: n, searchMessages: a, loadMessageContext: r } = De(), [i, s] = R(null), [l, c] = R(null), d = z(null), f = z(null), u = z(null), [m, p] = R(null), [h, b] = R(!1), [v, w] = R(""), [T, L] = R([]), [_, D] = R(-1), [O, I] = R(!1), W = z(n);
  W.current = n;
  const j = z(a);
  j.current = a;
  const C = z(r);
  C.current = r;
  const A = z(T);
  A.current = T;
  const F = z(_);
  F.current = _;
  const k = z(0);
  V(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const P = G(($) => {
    d.current = $;
  }, []), y = G(($) => {
    f.current = $;
  }, []), x = G(($) => {
    f.current?.($);
  }, []), N = G(
    ($, Y) => p({ images: $, index: Y }),
    []
  ), S = G(() => p(null), []), K = G(
    ($) => p((Y) => Y && { ...Y, index: $ }),
    []
  ), q = G(($, Y) => {
    d.current?.($), c($), u.current && clearTimeout(u.current), Y || (u.current = setTimeout(
      () => c(null),
      jo
    ));
  }, []), B = G(
    ($) => q($, !1),
    [q]
  ), se = G(
    ($, Y = A.current) => {
      const ce = Y[$];
      if (ce == null) return;
      D($);
      const M = () => q(ce, !0), te = C.current;
      te ? te(ce).then(M) : M();
    },
    [q]
  );
  V(() => {
    if (!h) return;
    const $ = v.trim();
    if ($ === "") {
      L([]), D(-1), I(!1), c(null);
      return;
    }
    I(!0);
    const Y = ++k.current, ce = setTimeout(() => {
      const M = (U) => {
        Y === k.current && (L(U), I(!1), U.length > 0 ? se(U.length - 1, U) : (D(-1), c(null)));
      }, te = j.current;
      if (te)
        te($).then((U) => M(U.map((de) => de.id)));
      else {
        const U = $.toLowerCase();
        M(
          W.current.filter((de) => !de.deleted && de.body.toLowerCase().includes(U)).map((de) => de.id)
        );
      }
    }, Mo);
    return () => clearTimeout(ce);
  }, [v, h, se]);
  const oe = G(() => b(!0), []), pe = G(() => {
    k.current++, b(!1), w(""), L([]), D(-1), I(!1), c(null);
  }, []), ue = G(() => {
    const $ = A.current;
    $.length !== 0 && se((F.current + 1) % $.length, $);
  }, [se]), Se = G(() => {
    const $ = A.current;
    $.length !== 0 && se((F.current - 1 + $.length) % $.length, $);
  }, [se]), we = T.length, E = _ >= 0 ? _ + 1 : 0, J = ee(
    () => ({
      replyTo: i,
      setReplyTo: s,
      highlightedId: l,
      jumpToMessage: B,
      registerScrollToMessage: P,
      registerFileDropHandler: y,
      dropFiles: x,
      imagePreview: m,
      openImagePreview: N,
      closeImagePreview: S,
      setImagePreviewIndex: K,
      searchOpen: h,
      openSearch: oe,
      closeSearch: pe,
      searchQuery: v,
      setSearchQuery: w,
      searching: O,
      matchCurrent: E,
      matchTotal: we,
      goToNextMatch: ue,
      goToPrevMatch: Se
    }),
    [
      i,
      l,
      B,
      P,
      y,
      x,
      m,
      N,
      S,
      K,
      h,
      oe,
      pe,
      v,
      O,
      E,
      we,
      ue,
      Se
    ]
  );
  return /* @__PURE__ */ t(Ya.Provider, { value: J, children: e });
};
function Ie() {
  const e = ke(Ya);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Uo = (e) => e?.find((n) => n.kind === "image"), Ho = (e) => {
  const n = Uo(e);
  return n ? n.thumbnailUrl ?? n.url : void 0;
}, Vo = (e) => {
  const n = e?.filter((r) => r.kind === "image") ?? [], a = e?.filter((r) => r.kind === "file") ?? [];
  return n.length > 0 && a.length > 0 ? { kind: "mixed", count: n.length + a.length } : n.length > 0 ? { kind: "photo", count: n.length } : a.length > 0 ? {
    kind: "file",
    count: a.length,
    name: a.length === 1 ? a[0].name : void 0
  } : null;
}, Qa = (e) => {
  const n = X(), a = e.body?.trim() ?? "", r = Ho(e.attachments), i = Vo(e.attachments);
  if (!i) return { label: a, thumbnailUrl: r };
  const s = i.kind === "photo" ? {
    icon: Si,
    label: i.count === 1 ? n.chat.photo : n.t("chat.photoCount.other", { count: i.count })
  } : i.kind === "file" ? {
    icon: Fi,
    label: i.name ?? n.t("chat.fileCount.other", { count: i.count })
  } : {
    icon: oa,
    label: n.t("chat.attachmentCount.other", {
      count: i.count
    })
  };
  return { icon: s.icon, label: a || s.label, thumbnailUrl: r };
}, Go = ({
  message: e,
  onRemove: n
}) => {
  const a = X(), { icon: r, label: i, thumbnailUrl: s } = Qa(e);
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(Q, { icon: ca, size: "md", color: "default" }) }),
    s && /* @__PURE__ */ t(
      "img",
      {
        src: s,
        alt: "",
        className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(ge, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.isMine ? a.chat.you : e.author.name }),
      /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
        r && /* @__PURE__ */ t(Q, { icon: r, size: "xs", color: "default" }),
        /* @__PURE__ */ t(ge, { className: "min-w-0 text-sm", lines: 1, children: i })
      ] })
    ] }),
    /* @__PURE__ */ t(
      ie,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: a.chat.removeQuote,
        icon: ve,
        onClick: n
      }
    )
  ] }) });
}, Ko = 140, qo = () => {
  const e = X(), { sendMessage: n, onInputActivity: a, uploadFiles: r, transcribe: i } = De(), { replyTo: s, setReplyTo: l, registerFileDropHandler: c } = Ie(), [d, f] = R(""), [u, m] = R([]), p = z(null), h = z(null), b = z(0), v = u.some((x) => x.status === "uploading"), w = G(() => {
    const x = p.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, Ko)}px`);
  }, []), T = z(""), L = G(
    (x) => {
      const N = T.current;
      f(N ? `${N} ${x}` : x), requestAnimationFrame(w);
    },
    [w]
  ), _ = Ai({
    onTranscribe: i,
    onPartial: L,
    onFinal: L,
    onError: () => {
    }
  }), D = _.status === "transcribing", O = _.status === "recording", I = !!i && _.isSupported, W = (d.trim().length > 0 || u.length > 0) && !D && !v, j = G(
    (x) => {
      f(x.target.value), a(), w();
    },
    [w, a]
  ), C = G(
    async (x) => {
      if (x.length === 0 || !r) return;
      const N = x.map((K) => ({
        id: `att-${b.current++}`,
        status: "uploading",
        name: K.name
      }));
      m((K) => [...K, ...N]);
      const S = new Set(N.map((K) => K.id));
      try {
        const q = (await r(x)).map((B, se) => ({
          id: N[se]?.id ?? `att-${b.current++}`,
          status: "ready",
          attachment: B
        }));
        m((B) => [
          ...B.filter((se) => !S.has(se.id)),
          ...q
        ]);
      } catch {
        m((K) => K.filter((q) => !S.has(q.id)));
      }
    },
    [r]
  );
  V(() => {
    c((x) => {
      C(x);
    });
  }, [c, C]);
  const A = G(() => {
    if (!W) return;
    const x = u.flatMap(
      (S) => S.status === "ready" ? [S.attachment] : []
    );
    n({
      body: d.trim(),
      attachments: x.length > 0 ? x : void 0,
      replyToId: s?.id
    }), f(""), m([]), l(null);
    const N = p.current;
    N && (N.style.height = "auto");
  }, [u, W, s, n, l, d]), F = G(
    (x) => {
      const N = p.current, S = N?.selectionStart ?? N?.value.length ?? 0, K = N?.selectionEnd ?? N?.value.length ?? 0;
      f((q) => q.slice(0, S) + x + q.slice(K)), a(), requestAnimationFrame(() => {
        w();
        const q = p.current;
        if (q) {
          const B = S + x.length;
          q.focus(), q.setSelectionRange(B, B);
        }
      });
    },
    [w, a]
  ), k = G(
    (x) => {
      x.key === "Enter" && !x.shiftKey && (x.preventDefault(), A());
    },
    [A]
  ), P = G(() => {
    T.current = d, _.start();
  }, [_, d]), y = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col", children: [
    s && /* @__PURE__ */ t(
      Go,
      {
        message: s,
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
          (x) => x.status === "uploading" ? /* @__PURE__ */ t(H, { className: "h-9 w-36 rounded-[10px]" }, x.id) : /* @__PURE__ */ t(
            da,
            {
              size: "md",
              file: {
                name: x.attachment.name,
                type: x.attachment.mimeType ?? (x.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: ve,
                  onClick: () => m(
                    (N) => N.filter((S) => S.id !== x.id)
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
        value: d,
        onChange: j,
        onKeyDown: k,
        rows: 1,
        placeholder: O ? e.chat.listening : y,
        className: g(
          "w-full resize-none bg-transparent p-3 pb-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    O ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ t(
          Ti,
          {
            stream: _.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            ie,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: ve,
              onClick: _.cancel
            }
          ),
          /* @__PURE__ */ t(
            ie,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: Bt,
              onClick: _.stop
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
          ie,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.attachFile,
            icon: oa,
            onClick: () => h.current?.click(),
            disabled: !r || D
          }
        ),
        /* @__PURE__ */ t(
          Ke,
          {
            variant: "outline",
            size: "md",
            label: e.chat.addEmoji,
            onSelect: F
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        I && /* @__PURE__ */ t(
          ie,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Ri,
            onClick: P,
            loading: D
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Hn,
            onClick: A,
            disabled: !W
          }
        )
      ] })
    ] })
  ] }) }) });
}, Yo = ({
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
        /* @__PURE__ */ t(Q, { icon: Li, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Qo = () => {
  const e = X(), {
    searchQuery: n,
    setSearchQuery: a,
    searching: r,
    matchCurrent: i,
    matchTotal: s,
    goToNextMatch: l,
    goToPrevMatch: c,
    closeSearch: d
  } = Ie(), f = s > 0, m = n.trim().length > 0 && !r && !f;
  return /* @__PURE__ */ o("div", { className: "flex w-full items-center gap-2", onKeyDown: (h) => {
    h.key === "Enter" ? (h.preventDefault(), h.shiftKey ? c() : l()) : h.key === "Escape" && (h.preventDefault(), d());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      Di,
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
        children: r ? "" : `${i}/${s}`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0", children: [
        /* @__PURE__ */ t(
          ie,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.previous,
            icon: Pi,
            onClick: c,
            disabled: !f || r,
            size: "sm"
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.next,
            icon: Mt,
            onClick: l,
            disabled: !f || r,
            size: "sm"
          }
        )
      ] }),
      /* @__PURE__ */ t(
        ie,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.closeSearch,
          icon: ve,
          onClick: d
        }
      )
    ] })
  ] });
}, Zt = ({
  user: e,
  children: n
}) => {
  const a = X();
  return /* @__PURE__ */ o(Oi, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(Ei, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      _i,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          zi,
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
}, Xo = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: g("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, Jo = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: a,
  onClose: r
}) => {
  const i = X(), { searchOpen: s, openSearch: l } = Ie(), c = e.type === "dm" && e.presence !== void 0, d = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "relative shrink-0", children: [
      e.avatar.type === "emoji" ? (
        // Emoji groups show the glyph alone (no avatar chrome) so it reads at
        // full size instead of shrunk inside the bordered avatar box.
        /* @__PURE__ */ t("span", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
      ) : /* @__PURE__ */ t(Ge, { size: "sm", avatar: e.avatar }),
      c && /* @__PURE__ */ t(Xo, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      Q,
      {
        icon: Bi,
        size: "sm",
        color: "secondary",
        "aria-label": i.chat.muted
      }
    ),
    e.statuses?.map((f) => /* @__PURE__ */ t(
      Q,
      {
        icon: f.icon,
        size: "sm",
        color: "secondary",
        "aria-label": f.label
      },
      f.label
    ))
  ] });
  return /* @__PURE__ */ t("header", { className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3", children: s ? (
    // Search mode: the whole header becomes the search bar.
    /* @__PURE__ */ t(Qo, {})
  ) : /* @__PURE__ */ o(re, { children: [
    e.user ? /* @__PURE__ */ t(Zt, { user: e.user, children: d }) : d,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        ie,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.search,
          icon: jt,
          onClick: l
        }
      ),
      a && /* @__PURE__ */ t(
        ie,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? i.actions.collapse : i.actions.expand,
          icon: n ? $i : Mi,
          onClick: a
        }
      ),
      r && /* @__PURE__ */ t(
        ie,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.close,
          icon: ve,
          onClick: r
        }
      )
    ] })
  ] }) });
}, Xa = (e, n) => {
  const a = document.createElement("a");
  a.href = e, a.download = n, a.rel = "noreferrer", a.click();
}, Je = ({
  icon: e,
  label: n,
  onClick: a
}) => /* @__PURE__ */ t("span", { className: "pointer-events-auto flex rounded bg-f1-background shadow-sm", children: /* @__PURE__ */ t(
  ie,
  {
    variant: "neutral",
    hideLabel: !0,
    icon: e,
    label: n,
    onClick: a
  }
) }), Zo = () => {
  const e = X(), { imagePreview: n, closeImagePreview: a, setImagePreviewIndex: r } = Ie(), [i, s] = R(null);
  V(() => s(document.body), []);
  const l = n !== null, c = n?.images ?? [], d = c.length, f = n?.index ?? 0, u = c[f], m = d > 1, p = G(
    (h) => {
      d !== 0 && r((f + h + d) % d);
    },
    [d, f, r]
  );
  return V(() => {
    if (!l || !m) return;
    const h = (b) => {
      b.key === "ArrowRight" ? p(1) : b.key === "ArrowLeft" && p(-1);
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [l, m, p]), /* @__PURE__ */ t(
    ks,
    {
      open: l,
      onOpenChange: (h) => {
        h || a();
      },
      children: u && /* @__PURE__ */ o(
        Is,
        {
          container: i,
          className: "h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none",
          withTranslateAnimation: !1,
          "aria-describedby": void 0,
          children: [
            /* @__PURE__ */ t(ji, { className: "sr-only", children: u.name || e.chat.imagePreview }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "aria-label": e.chat.closePreview,
                className: "absolute inset-0 cursor-default",
                onClick: a
              }
            ),
            /* @__PURE__ */ t("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-16", children: /* @__PURE__ */ t(
              "img",
              {
                src: u.url,
                alt: u.name,
                className: "pointer-events-auto max-h-full max-w-full rounded-lg object-contain"
              }
            ) }),
            /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-3", children: [
              /* @__PURE__ */ t(
                Je,
                {
                  icon: ua,
                  label: e.chat.download,
                  onClick: () => Xa(u.url, u.name)
                }
              ),
              /* @__PURE__ */ t(
                Je,
                {
                  icon: ve,
                  label: e.chat.closePreview,
                  onClick: a
                }
              )
            ] }),
            m && /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3", children: [
              /* @__PURE__ */ t(
                Je,
                {
                  icon: _t,
                  label: e.chat.previousImage,
                  onClick: () => p(-1)
                }
              ),
              /* @__PURE__ */ o("span", { className: "pointer-events-auto rounded bg-f1-background px-2.5 py-2 text-sm font-medium text-f1-foreground shadow-sm", children: [
                f + 1,
                " / ",
                d
              ] }),
              /* @__PURE__ */ t(
                Je,
                {
                  icon: Ve,
                  label: e.chat.nextImage,
                  onClick: () => p(1)
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, ec = "latest", tc = 1440 * 60 * 1e3, On = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function en(e, n) {
  return Math.round((On(n) - On(e)) / tc);
}
function Ja(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function Za(e, n, a, r) {
  const i = en(e, n);
  if (i <= 0) return a.today;
  if (i === 1) return a.yesterday;
  if (i < 7)
    return new Intl.DateTimeFormat(r, { weekday: "long" }).format(e);
  const s = e.getFullYear() === n.getFullYear();
  return new Intl.DateTimeFormat(r, {
    day: "numeric",
    month: "short",
    ...s ? {} : { year: "numeric" }
  }).format(e);
}
function ct(e, n, a, r) {
  return `${Za(e, n, a, r)} ${Ja(e, r)}`;
}
function nc(e, n, a, r) {
  return en(e, n) <= 0 ? Ja(e, r) : ct(e, n, a, r);
}
const ac = (e, n) => n ? en(
  new Date(n.createdAt),
  new Date(e.createdAt)
) !== 0 : !0;
function rc(e, n = {}) {
  const { dividerId: a = null } = n, r = [], i = /* @__PURE__ */ new Map();
  let s = -1;
  return e.forEach((l, c) => {
    const d = e[c - 1], f = ac(l, d);
    f && r.push({
      type: "separator",
      key: `sep-${l.id}`,
      at: l.createdAt
    });
    const u = f || !d || d.author.id !== l.author.id;
    if (!u && s >= 0) {
      const m = r[s];
      m.type === "message" && (m.isLastOfRun = !1);
    }
    a && l.id === a && r.push({ type: "divider", key: "unread-divider" }), r.push({
      type: "message",
      key: l.id,
      message: l,
      isFirstOfRun: u,
      isLastOfRun: !0,
      isLastMessage: c === e.length - 1
    }), s = r.length - 1, i.set(l.id, s);
  }), { rows: r, indexById: i };
}
const ic = 80, En = 120;
function sc({
  viewportRef: e,
  virtualizer: n,
  rows: a,
  indexById: r,
  messages: i,
  hasMoreOlder: s,
  loadingOlder: l,
  onReachTop: c,
  hasMoreNewer: d = !1,
  loadingNewer: f = !1,
  onReachBottom: u
}) {
  const [m, p] = R(!1), [h, b] = R(!0), [v, w] = R(!0), T = z(!0), L = z(i[0]?.id ?? null), _ = z(i.at(-1)?.id ?? null), D = z(i.length), O = z(!1), I = z(null), W = z(null), j = G(
    (k = "smooth") => {
      a.length > 0 && n.scrollToIndex(a.length - 1, { align: "end", behavior: k });
    },
    [n, a.length]
  ), C = G(() => {
    const k = e.current, P = I.current;
    if (!k || !P) return null;
    const y = r.get(P.id);
    if (y == null) return null;
    const N = (n.getOffsetForIndex(y, "start")?.[0] ?? 0) - P.delta;
    return k.scrollTop = N, N;
  }, [e, r, n]), A = G(
    (k) => {
      const P = n.getVirtualItemForOffset(k);
      if (!P) return null;
      for (let y = P.index; y < a.length; y++)
        if (a[y].type === "message") return y;
      return null;
    },
    [n, a]
  ), F = G(() => {
    const k = e.current;
    if (!k) return;
    const { scrollTop: P, scrollHeight: y, clientHeight: x } = k, N = y - P - x, S = N < ic;
    if (T.current = S, b(S), p(N > x * 0.5), w(P <= 0), P < En && s && !l) {
      const K = A(P), q = K != null ? a[K] : null;
      if (q && q.type === "message") {
        const B = n.getOffsetForIndex(K, "start")?.[0] ?? 0;
        I.current = { id: q.message.id, delta: B - P };
      }
      c();
    }
    N < En && d && !f && u?.();
  }, [
    e,
    s,
    l,
    c,
    d,
    f,
    u,
    A,
    a,
    n
  ]);
  return st(() => {
    const k = e.current;
    if (!k) return;
    if (!O.current && a.length > 0) {
      d || (n.scrollToIndex(a.length - 1, { align: "end" }), b(!0)), w(k.scrollHeight - k.clientHeight <= 0), O.current = !0, L.current = i[0]?.id ?? null, _.current = i.at(-1)?.id ?? null, D.current = i.length;
      return;
    }
    const P = i[0]?.id ?? null, y = i.at(-1), x = i.length > D.current, N = x && P !== L.current, S = x && y?.id !== _.current;
    if (N && I.current) {
      W.current != null && cancelAnimationFrame(W.current);
      let K = C(), q = 0, B = 0;
      const se = () => {
        const oe = C();
        if (B += 1, oe != null && K != null && Math.abs(oe - K) < 1 ? q += 1 : q = 0, K = oe, oe == null || q >= 2 || B >= 12) {
          I.current = null, W.current = null;
          return;
        }
        W.current = requestAnimationFrame(se);
      };
      W.current = requestAnimationFrame(se);
    } else S && !d && (y?.isMine || T.current) && (n.scrollToIndex(a.length - 1, { align: "end" }), b(!0));
    L.current = P, _.current = y?.id ?? null, D.current = i.length;
  }, [
    i,
    a.length,
    e,
    n,
    r,
    d,
    C
  ]), st(
    () => () => {
      W.current != null && cancelAnimationFrame(W.current);
    },
    []
  ), { scrolledUp: m, atBottom: h, atTop: v, scrollToBottom: j, handleScroll: F };
}
const lc = {
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
}, oc = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, er = (e) => lc[na(oc(e)) ?? "viridian"], cc = ({
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
        a && /* @__PURE__ */ t(Zt, { user: a, children: /* @__PURE__ */ t(
          "span",
          {
            className: g(
              "mb-0.5 block w-fit cursor-default text-sm font-medium",
              er(a)
            ),
            children: a.name
          }
        ) }),
        e.body
      ]
    }
  );
}, Nt = ({
  label: e,
  value: n
}) => /* @__PURE__ */ o("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), dc = ({
  message: e,
  onBack: n
}) => {
  const a = X(), { channel: r } = De(), i = {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  }, s = /* @__PURE__ */ new Date(), l = r.type === "group";
  return /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        ie,
        {
          icon: Wi,
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
        Nt,
        {
          label: a.t(
            (e.readByCount ?? 0) === 1 ? "chat.readBy.one" : "chat.readBy.other",
            { count: e.readByCount ?? 0 }
          )
        }
      ) : e.readAt && /* @__PURE__ */ t(
        Nt,
        {
          label: a.chat.read,
          value: ct(new Date(e.readAt), s, i)
        }
      )),
      /* @__PURE__ */ t(
        Nt,
        {
          label: a.chat.delivered,
          value: ct(new Date(e.createdAt), s, i)
        }
      )
    ] })
  ] });
}, uc = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], fc = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", Ze = ({
  icon: e,
  label: n,
  onClick: a,
  trailing: r
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: a,
    className: g(fc, fe("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(Q, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      r
    ]
  }
), mc = ({
  message: e,
  isMine: n,
  open: a,
  onOpenChange: r
}) => {
  const i = X(), { toggleReaction: s, deleteMessage: l } = De(), { setReplyTo: c } = Ie(), [d, f] = R("menu"), u = (h) => {
    r(h), h || f("menu");
  }, m = (h) => {
    s(e.id, h), u(!1);
  }, p = (h) => () => {
    h(), u(!1);
  };
  return /* @__PURE__ */ o(Xn, { open: a, onOpenChange: u, children: [
    /* @__PURE__ */ t(Jn, { asChild: !0, children: /* @__PURE__ */ t(
      ie,
      {
        variant: "outline",
        hideLabel: !0,
        label: i.chat.moreActions,
        icon: Ui,
        pressed: a
      }
    ) }),
    /* @__PURE__ */ t(
      Zn,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: d === "info" ? /* @__PURE__ */ t(
          dc,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ o(re, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
            uc.map((h) => /* @__PURE__ */ t(
              ie,
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
              Ke,
              {
                size: "md",
                variant: "ghost",
                label: i.chat.react,
                onSelect: m,
                icon: Yn
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-0 p-1", children: [
            /* @__PURE__ */ t(
              Ze,
              {
                icon: Hi,
                label: i.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  Q,
                  {
                    icon: Ve,
                    size: "md",
                    className: "text-f1-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              Ze,
              {
                icon: ca,
                label: i.chat.reply,
                onClick: p(() => c(e))
              }
            ),
            /* @__PURE__ */ t(
              Ze,
              {
                icon: Vi,
                label: i.actions.copy,
                onClick: p(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ o(re, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              Ze,
              {
                icon: la,
                label: i.actions.delete,
                onClick: p(() => l(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, hc = ({
  message: e,
  isMine: n
}) => {
  const a = X(), { openImagePreview: r } = Ie(), i = e.attachments;
  if (!i || i.length === 0) return null;
  const s = i.filter(
    (d) => d.kind === "image"
  ), l = i.filter(
    (d) => d.kind === "file"
  ), c = s.length === 1;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        s.length > 0 && /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: s.map((d, f) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => r(s, f),
            className: "block overflow-hidden rounded-xl transition-opacity hover:opacity-90",
            "aria-label": a.chat.openImage,
            children: /* @__PURE__ */ t(
              "img",
              {
                src: d.thumbnailUrl ?? d.url,
                alt: d.name,
                className: g(
                  "rounded-xl border border-solid border-f1-border-secondary object-cover",
                  c ? "max-h-60 max-w-full" : "h-28 w-28"
                )
              }
            )
          },
          `${d.url}-${f}`
        )) }),
        l.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: l.map((d, f) => /* @__PURE__ */ t(
          da,
          {
            size: "md",
            file: { name: d.name, type: d.mimeType ?? "" },
            actions: [
              {
                label: a.chat.download,
                icon: ua,
                onClick: () => Xa(d.url, d.name)
              }
            ]
          },
          `${d.url}-${f}`
        )) })
      ]
    }
  );
}, pc = ({
  message: e,
  isMine: n
}) => {
  const a = X(), { toggleReaction: r } = De();
  return !e.reactions || e.reactions.length === 0 ? null : /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-wrap items-center gap-2 py-2",
        n && "justify-end"
      ),
      children: [
        e.reactions.map((i) => (
          // Key includes count/own-state so the kit pill re-syncs with the
          // runtime after an external toggle (the pill is otherwise uncontrolled).
          /* @__PURE__ */ t(
            Pa,
            {
              emoji: i.emoji,
              initialCount: i.count,
              hasReacted: i.reactedByMe,
              users: i.users,
              onInteraction: (s) => r(e.id, s)
            },
            `${i.emoji}-${i.count}-${i.reactedByMe}`
          )
        )),
        /* @__PURE__ */ t(
          Ke,
          {
            size: "md",
            variant: "outline",
            label: a.chat.react,
            onSelect: (i) => r(e.id, i)
          }
        )
      ]
    }
  );
}, gc = ({
  reply: e,
  isMine: n,
  indented: a
}) => {
  const { jumpToMessage: r } = Ie(), { currentUserId: i } = De(), s = X(), { icon: l, label: c, thumbnailUrl: d } = Qa(e), u = e.author.id === i ? s.chat.you : e.author.name;
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
                er(e.author)
              ),
              children: u
            }
          ) }),
          /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
            l && /* @__PURE__ */ t(Q, { icon: l, size: "sm", color: "default" }),
            /* @__PURE__ */ t(ge, { className: "min-w-0 text-sm", lines: 1, children: c })
          ] })
        ] }),
        d && /* @__PURE__ */ t(
          "img",
          {
            src: d,
            alt: "",
            className: "h-14 w-14 shrink-0 self-stretch object-cover"
          }
        )
      ]
    }
  );
}, bc = ({
  message: e,
  isMine: n,
  author: a,
  bubbleGutter: r,
  belowGutter: i
}) => {
  const [s, l] = R(!1), { highlightedId: c } = Ie(), d = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0, p = m || u;
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
          gc,
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
                          d && "ring-1 ring-f1-special-ring ring-offset-2",
                          !e.deleted && "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          s && "bg-f1-background-hover"
                        ),
                        children: [
                          u && /* @__PURE__ */ t(hc, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(cc, { message: e, isMine: n, author: a })
                        ]
                      }
                    ),
                    !e.deleted && /* @__PURE__ */ t(
                      "div",
                      {
                        className: g(
                          "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                          s && "opacity-100"
                        ),
                        children: /* @__PURE__ */ t(
                          mc,
                          {
                            message: e,
                            isMine: n,
                            open: s,
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
          i,
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(pc, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, xc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...a } = e.avatar;
    return a;
  }
  return { firstName: e.name, lastName: "" };
}, vc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: g(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), yc = ({
  users: e,
  isGroup: n
}) => {
  const a = X(), r = Fe();
  if (e.length === 0) return null;
  let i = a.chat.writing;
  return n && (e.length === 1 ? i = a.t("chat.isTyping", { name: e[0].name }) : e.length === 2 ? i = a.t("chat.twoTyping", {
    first: e[0].name,
    second: e[1].name
  }) : i = a.chat.severalTyping), // Eases in (fade + slight rise, scaling up from the bottom-left like an
  // incoming bubble) so the dots don't pop. It's always the last row, so the
  // scale-driven height change can't disturb the messages above.
  /* @__PURE__ */ o(
    Z.div,
    {
      role: "status",
      "aria-label": i,
      className: "flex w-full items-end gap-2",
      style: { transformOrigin: "bottom left" },
      initial: r ? !1 : { opacity: 0, y: 6, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { type: "spring", stiffness: 500, damping: 34, mass: 0.8 },
      children: [
        n && (e.length > 1 ? (
          // Several people typing: stacked avatar list, capped at 3 with a +N.
          /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
            Wt,
            {
              type: "person",
              size: "xs",
              max: 3,
              noTooltip: !0,
              avatars: e.map(xc)
            }
          ) })
        ) : /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
          Ge,
          {
            size: "xs",
            avatar: e[0].avatar ?? {
              type: "person",
              firstName: e[0].name,
              lastName: ""
            }
          }
        ) })),
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(vc, { animate: !r }) })
      ]
    }
  );
}, tr = ({
  at: e,
  withTime: n = !1
}) => {
  const a = X(), r = {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  }, i = new Date(e), s = /* @__PURE__ */ new Date(), l = n ? ct(i, s, r) : Za(i, s, r);
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: l }) });
}, wc = ({
  message: e,
  isGroup: n
}) => {
  const a = X(), r = Fe(), i = nc(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: a.date.groups.today,
    yesterday: a.date.groups.yesterday
  });
  let s = i;
  return e.isMine && (e.status === "failed" ? s = a.chat.error : e.status === "read" ? s = n && e.readByCount ? a.t(
    e.readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: e.readByCount }
  ) : `${a.chat.read} ${i}` : e.status === "sent" && (s = `${a.chat.sent} ${i}`)), /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: /* @__PURE__ */ t(
        Z.span,
        {
          className: "inline-block",
          initial: r ? !1 : { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: r ? 0 : 0.15 },
          children: s
        },
        s
      )
    }
  );
}, Nc = ({
  leaving: e = !1
}) => {
  const n = X(), a = Fe();
  return /* @__PURE__ */ o(
    Z.div,
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
  Ge,
  {
    size: "xs",
    avatar: e.avatar ?? { type: "person", firstName: e.name, lastName: "" }
  }
), Cc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-4" : "pt-1" : "pt-4", kc = ({
  row: e,
  isGroup: n,
  isFirstRow: a,
  isLastRow: r,
  enterAnimation: i,
  animatedIds: s,
  dividerLeaving: l = !1
}) => {
  const c = g(Cc(e, a), r && "pb-6"), [d] = R(
    () => i && e.type === "message" && e.isLastMessage && !s.has(e.message.id)
  );
  if (V(() => {
    e.type === "message" && s.add(e.message.id);
  }, [e, s]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(tr, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(Nc, { leaving: l }) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(yc, { users: e.users, isGroup: n }) });
  const { message: f, isFirstOfRun: u, isLastOfRun: m, isLastMessage: p } = e, h = f.isMine, b = n && !h, v = b ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: _n(f.author) }) : void 0, w = b ? m ? /* @__PURE__ */ t(Zt, { user: f.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: _n(f.author) }) }) : v : void 0, T = /* @__PURE__ */ o(re, { children: [
    /* @__PURE__ */ t(
      bc,
      {
        message: f,
        isMine: h,
        author: b && u ? f.author : void 0,
        bubbleGutter: w,
        belowGutter: v
      }
    ),
    p && /* @__PURE__ */ o("div", { className: "flex w-full gap-2", children: [
      v,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(wc, { message: f, isGroup: n }) })
    ] })
  ] });
  return d ? (
    // WhatsApp-style arrival: the bubble springs up into place from its own
    // corner (mine → bottom-right, theirs → bottom-left) with a soft fade and a
    // barely-there scale. A spring (not a fixed tween) gives the gentle, natural
    // settle. Only the last row animates, so the brief scale-driven height change
    // can't disturb rows above it.
    /* @__PURE__ */ t(
      Z.div,
      {
        className: g("flex flex-col gap-1", c),
        style: { transformOrigin: h ? "bottom right" : "bottom left" },
        initial: { opacity: 0, y: 10, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 460, damping: 34, mass: 0.9 },
        children: T
      }
    )
  ) : /* @__PURE__ */ t("div", { className: g("flex flex-col gap-1", c), children: T });
}, Ic = ms(kc), Sc = 280, Fc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, Ac = (e, n) => {
  for (let a = n; a < e.length; a++) {
    const r = e[a];
    if (r.type === "message") return r.message.createdAt;
    if (r.type === "separator") return r.at;
  }
  return null;
}, Tc = () => {
  const e = X(), {
    messages: n,
    channel: a,
    typingUsers: r,
    hasMoreOlder: i,
    loadingOlder: s,
    loadOlder: l,
    hasMoreNewer: c,
    loadingNewer: d,
    loadNewer: f,
    loadMessageContext: u,
    unreadCount: m,
    firstUnreadId: p,
    markRead: h
  } = De(), b = Fe(), v = a.type === "group", w = z(null), { registerScrollToMessage: T } = Ie(), [L, _] = R(!1), [D, O] = R(p), [I, W] = R(!1), j = z(a.id), C = z(null), A = z(
    n[n.length - 1]?.id ?? null
  ), { rows: F, indexById: k } = ee(
    () => rc(n, { dividerId: D }),
    [n, D]
  ), P = ee(
    () => r.length > 0 ? [...F, { type: "typing", key: "typing", users: r }] : F,
    [F, r]
  ), y = Kn({
    count: P.length,
    getScrollElement: () => w.current,
    estimateSize: (U) => Fc(P[U]),
    getItemKey: (U) => P[U].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (U) => Math.round(U.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: x, atBottom: N, atTop: S, scrollToBottom: K, handleScroll: q } = sc({
    viewportRef: w,
    virtualizer: y,
    rows: P,
    indexById: k,
    messages: n,
    hasMoreOlder: i,
    loadingOlder: s,
    onReachTop: l,
    hasMoreNewer: c,
    loadingNewer: d,
    onReachBottom: f
  }), B = r.length > 0, se = z(!1);
  V(() => {
    B && !se.current && N && K("smooth"), se.current = B;
  }, [B, N, K]);
  const oe = z(null), pe = G(() => {
    const U = oe.current;
    if (!U) return;
    if (U.kind === "bottom") {
      P.length > 0 && (y.scrollToIndex(P.length - 1, { align: "end" }), oe.current = null);
      return;
    }
    const de = k.get(U.id);
    de != null && (y.scrollToIndex(de, { align: "center", behavior: "smooth" }), oe.current = null);
  }, [k, y, P.length]);
  V(pe, [pe]), V(() => {
    T((U) => {
      oe.current = { kind: "id", id: U }, pe();
    });
  }, [T, pe]);
  const ue = G(() => {
    c && u ? (oe.current = { kind: "bottom" }, u(ec)) : K();
  }, [c, u, K]), Se = N && L;
  V(() => {
    Se && m > 0 && h?.();
  }, [Se, m, h]);
  const we = z(N);
  we.current = N;
  const E = G(() => {
    C.current && (clearTimeout(C.current), C.current = null);
  }, []);
  V(() => {
    j.current !== a.id && (j.current = a.id, E(), W(!1), O(p));
  }, [a.id, p, E]), V(() => {
    const U = n[n.length - 1];
    !U || U.id === A.current || (A.current = U.id, !(!U.isMine || !D || I) && (W(!0), C.current = setTimeout(() => {
      C.current = null, O(null), W(!1), we.current && K("auto");
    }, Sc)));
  }, [n, D, I, K]), V(() => E, [E]);
  const J = z(null);
  J.current === null && n.length > 0 && (J.current = new Set(n.map((U) => U.id)));
  const $ = J.current ?? Rc, Y = y.getVirtualItems(), ce = Y[0], M = ce ? Ac(P, ce.index) : null, te = x || c;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: w,
            onScroll: q,
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
                      transform: `translateY(${Y[0]?.start ?? 0}px)`
                    },
                    children: Y.map((U) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": U.index,
                        ref: y.measureElement,
                        children: /* @__PURE__ */ t(
                          Ic,
                          {
                            row: P[U.index],
                            isGroup: v,
                            isFirstRow: U.index === 0,
                            isLastRow: U.index === P.length - 1,
                            enterAnimation: !b,
                            animatedIds: $,
                            dividerLeaving: P[U.index].type === "divider" ? I : !1
                          }
                        )
                      },
                      U.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ne, { children: !S && /* @__PURE__ */ t(Gi, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(Ne, { children: x && M && /* @__PURE__ */ t(
          Z.div,
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
                "aria-label": s ? e.chat.loadingOlder : void 0,
                children: [
                  s && /* @__PURE__ */ t(zt, { size: "small", className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ t(tr, { at: M, withTime: !0 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(Ne, { children: te && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          Z.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              ie,
              {
                onClick: ue,
                variant: "neutral",
                icon: Ki,
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
}, Rc = /* @__PURE__ */ new Set(), Pe = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t(H, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((a, r) => /* @__PURE__ */ t(H, { className: g("h-8 rounded-2xl", a) }, r))
        }
      )
    ]
  }
), Lc = () => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": !0,
    className: "mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4",
    children: [
      /* @__PURE__ */ t(Pe, { mine: !1, widths: ["w-48", "w-32"] }),
      /* @__PURE__ */ t(Pe, { mine: !0, widths: ["w-56"] }),
      /* @__PURE__ */ t(Pe, { mine: !1, widths: ["w-40"] }),
      /* @__PURE__ */ t(Pe, { mine: !0, widths: ["w-44", "w-28"] }),
      /* @__PURE__ */ t(Pe, { mine: !1, widths: ["w-52", "w-36"] }),
      /* @__PURE__ */ t(Pe, { mine: !0, widths: ["w-36"] }),
      /* @__PURE__ */ t(Pe, { mine: !1, widths: ["w-44"] })
    ]
  }
), Dc = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), Pc = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(Lc, {}) }), Oc = () => {
  const e = X();
  return /* @__PURE__ */ t(Dc, { children: e.chat.error });
}, Ec = () => {
  const e = X();
  return /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center p-6", children: /* @__PURE__ */ t(
    va,
    {
      emoji: "💬",
      title: e.chat.emptyConversation,
      description: e.chat.emptyConversationDescription
    }
  ) });
}, et = (e) => e.dataTransfer?.types?.includes("Files"), _c = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: a
}) => {
  const { channel: r, status: i, messages: s } = De(), { dropFiles: l } = Ie(), c = z(0), [d, f] = R(!1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (u) => {
        et(u) && (u.preventDefault(), u.stopPropagation(), c.current++, f(!0));
      },
      onDragOver: (u) => {
        et(u) && (u.preventDefault(), u.stopPropagation());
      },
      onDragLeave: (u) => {
        et(u) && (u.preventDefault(), u.stopPropagation(), c.current--, c.current <= 0 && (c.current = 0, f(!1)));
      },
      onDrop: (u) => {
        if (!et(u)) return;
        u.preventDefault(), u.stopPropagation(), c.current = 0, f(!1);
        const m = Array.from(u.dataTransfer.files);
        m.length > 0 && l(m);
      },
      children: [
        /* @__PURE__ */ t(
          Jo,
          {
            channel: r,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: a
          }
        ),
        i === "connecting" ? /* @__PURE__ */ t(Pc, {}) : i === "error" ? /* @__PURE__ */ t(Oc, {}) : s.length === 0 ? /* @__PURE__ */ t(Ec, {}) : /* @__PURE__ */ t(Tc, {}),
        /* @__PURE__ */ t(qo, {}),
        /* @__PURE__ */ t(Yo, { visible: d }),
        /* @__PURE__ */ t(Zo, {})
      ]
    }
  );
}, Uu = (e) => /* @__PURE__ */ t(Wo, { children: /* @__PURE__ */ t(_c, { ...e }) }), tn = {
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
}, zc = Te({
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
      ...tn
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Bc = be.forwardRef(function({ className: n, gap: a, children: r, tileSize: i, ...s }, l) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: l, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(zc({ gap: a, tileSize: i }), n),
      ref: l,
      ...s,
      children: r
    }
  ) });
}), $c = Te({
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
}), nr = ae(function({
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
  height: p,
  width: h,
  ...b
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        $c({
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
          height: p,
          width: h
        }),
        n
      ),
      ref: v,
      ...b
    }
  );
}), Mc = Te({
  base: "flex-row",
  variants: {
    gap: {
      ...tn
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), jc = be.forwardRef(function({ className: n, gap: a, wrap: r, ...i }, s) {
  return /* @__PURE__ */ t(
    nr,
    {
      className: g(Mc({ gap: a, wrap: r }), n),
      ref: s,
      ...i
    }
  );
}), Wc = Te({
  base: "flex-col",
  variants: {
    gap: {
      ...tn
    }
  },
  defaultVariants: {}
}), Uc = ae(function({ className: n, gap: a, children: r, ...i }, s) {
  return /* @__PURE__ */ t(
    nr,
    {
      className: g(Wc({ gap: a }), n),
      ref: s,
      ...i,
      children: r
    }
  );
}), Hu = Ce(
  {
    name: "Stack",
    type: "layout"
  },
  Uc
), Vu = Ce(
  {
    name: "Split",
    type: "layout"
  },
  jc
), Gu = Ce(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Bc
), Hc = ({ children: e }) => {
  const { enabled: n } = ya();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        Z.div,
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
}, Vc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Gc = ae(function({ header: n, children: a, action: r, summaries: i, alert: s, status: l, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = ya();
  V(() => {
    if (s && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, l]);
  const m = (h) => !!h && !(be.isValidElement(h) && h.type === be.Fragment && be.Children.count(h.props.children) === 0), p = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    Ut,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Ht, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Vt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Vc, {}),
                /* @__PURE__ */ t(fa, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Re, { label: n.info, children: /* @__PURE__ */ t(
                Q,
                {
                  icon: ma,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(ft, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(ha, { text: s, level: "critical" }),
              l && /* @__PURE__ */ t(rt, { text: l.text, variant: l.variant }),
              n.link && /* @__PURE__ */ t(
                qi,
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
            /* @__PURE__ */ t(Hc, { children: /* @__PURE__ */ t(Yi, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              ne,
              {
                icon: f ? Qi : Xi,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Gt, { className: "flex h-full flex-col gap-4", children: [
          i && /* @__PURE__ */ t("div", { className: "flex flex-row", children: i.map((h, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: h.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!h.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.prefixUnit }),
              h.value,
              !!h.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.postfixUnit })
            ] })
          ] }, b)) }),
          be.Children.toArray(a).filter(m).map((h, b) => /* @__PURE__ */ o(be.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t(Ss, { bare: !0 }),
            h
          ] }, b))
        ] }),
        r && /* @__PURE__ */ t(Ji, { children: /* @__PURE__ */ t(ne, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Kc = Te({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), qc = ae(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      Ut,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Ht, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Vt, { children: n.title }) : /* @__PURE__ */ t(H, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(fa, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Gt,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && Kc({ height: a })),
              children: [...Array(4)].map((i, s) => /* @__PURE__ */ t(
                H,
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
), ze = he(
  le("Widget", me(Gc, qc))
), ye = Object.assign(
  ae(function({ chart: n, summaries: a, ...r }, i) {
    return /* @__PURE__ */ t(ze, { ref: i, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), Yc = me(
  ae(function({ canBeBlurred: n, ...a }, r) {
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
      ye,
      {
        ref: r,
        ...i,
        chart: /* @__PURE__ */ t(Fs, { ...s, canBeBlurred: n })
      }
    );
  }),
  ye.Skeleton
), Qc = le(
  "AreaChartWidget",
  Yc
), Xc = ae(function(n, a) {
  return /* @__PURE__ */ t(
    ye,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(As, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Jc = le(
  "BarChartWidget",
  me(Xc, ye.Skeleton)
), Zc = me(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Ts, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), ed = le(
  "LineChartWidget",
  Zc
), td = me(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Rs, { ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), nd = le(
  "PieChartWidget",
  td
), ad = me(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(ye, { ref: a, ...n, chart: null });
    }
  ),
  ye.Skeleton
), rd = le(
  "SummariesWidget",
  ad
), id = me(
  ae(
    function(n, a) {
      return /* @__PURE__ */ t(
        ye,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(Ls, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ye.Skeleton
), sd = le(
  "VerticalBarChartWidget",
  id
), Ku = Ce(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Qc
), qu = Ce(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Jc
), Yu = Ce(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ed
), Qu = Ce(
  {
    name: "PieChartWidget",
    type: "info"
  },
  nd
), Xu = Ce(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  sd
), Ju = Ce(
  {
    name: "SummariesWidget",
    type: "info"
  },
  rd
), ld = (e, n) => /* @__PURE__ */ o(
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
), od = ae(ld), cd = (e, n) => /* @__PURE__ */ o(
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
), dd = ae(cd), ud = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, fd = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, md = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, hd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, pd = ae(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: i, buttonAction: s, type: l }, c) {
    const d = ud[l], f = fd[l], u = md[l], m = hd[l];
    return /* @__PURE__ */ o(
      Ut,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Ht, { className: "-mt-0.5", children: /* @__PURE__ */ t(Vt, { children: n }) }),
          /* @__PURE__ */ o(Gt, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(od, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(dd, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                ne,
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
), Zu = he(
  le("ChartWidgetEmptyState", pd)
);
function gd(e, n) {
  const a = z(null), r = z(null), [i, s] = R({
    visibleItems: [],
    overflowItems: []
  });
  Zi({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const l = G(
    (u, m, p) => m < p - 1 ? u + n : u,
    [n]
  ), c = G(() => {
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
      for (let b = 0; b < u.length; b++) {
        const v = h + u[b];
        if (v > m + 30) break;
        h = v, h = l(
          h,
          b,
          u.length
        ), p++;
      }
      return p;
    },
    [l]
  ), f = G(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = c(), p = d(
      m,
      u
    );
    s(p === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (h) => h.visibleItems.length === p && h.overflowItems.length === e.length - p ? h : {
      visibleItems: e.slice(0, p),
      overflowItems: e.slice(p)
    });
  }, [e, c, d]);
  return V(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const gt = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: i = 0,
  minSize: s,
  onVisibleItemsChange: l
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = gd(n, i);
  return V(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", r),
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
gt.displayName = "VerticalOverflowList";
const ef = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((i) => /* @__PURE__ */ t(Pt, { ...i }, i.title)) }) : /* @__PURE__ */ t(
  gt,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (i) => /* @__PURE__ */ t(Pt, { ...i }, i.title)
  }
) : null, bd = ({ onClick: e, children: n }) => {
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
function tf({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: i
}) {
  return /* @__PURE__ */ t(bd, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        i && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(Q, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const xd = ae(
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
        "icon" in i && i.icon && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(Q, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(Me, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), nf = ae(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: i, color: s, ...l }) => /* @__PURE__ */ t(
          xd,
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
), vd = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const i = g(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: i, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: i, children: r });
};
function af({
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
    vd,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(es, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ts, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Wt,
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
const yd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function zn({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: i
}) {
  const s = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(yd, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(aa, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const wd = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function Ot({
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
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(wd, { onClick: (p) => {
    p.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        Q,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        Q,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(ha, { ...a }),
      r && /* @__PURE__ */ t($e, { ...r }),
      !!i && /* @__PURE__ */ t(ft, { value: i })
    ] })
  ] });
}
function rf({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: i
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(zn, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    gt,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(zn, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function sf({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((s) => /* @__PURE__ */ t(Ot, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    gt,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(Ot, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const Nd = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), lf = ae(
  function({ title: n, titleValue: a, titleTooltip: r, list: i }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            Re,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(Q, { icon: ma, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      i.map((l) => /* @__PURE__ */ t(Nd, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function of({
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
      Ds,
      {
        data: a,
        legend: i,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: i ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: g(
          "text-f1-foreground",
          i ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const ar = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, Cd = ({
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
    const u = ar(
      a,
      r
    ), m = Math.abs(u), p = Math.floor(m / 60), h = Math.floor(m % 60), b = `${p.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = Oe[l];
  return {
    status: l,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, Ct = "--:--", kd = (e, n) => {
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
}, Id = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, i = ar(
    n,
    a
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, l = r || (i ?? 0) < 0 ? void 0 : kd(
    i ?? 0,
    s
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, h = m.variant === "clocked-in" ? Math.min(p, c) : 0, v = (p - h) / s;
        return c -= h, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: h / s + v,
            color: Oe.overtime
          }
        ] : [
          ...u,
          {
            value: h / s,
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
}, Sd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((p) => p.variant === "clocked-in")?.from, i = e.at(-1), s = r ? rn(r) : Ct, l = n === void 0 || n > 0 ? Ct : i ? rn(i.to) : Ct, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
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
function Fd({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Id({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: i, secondaryLabel: s, time: l } = Sd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ps, { width: 156, height: 156, children: /* @__PURE__ */ t(
      Os,
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
          ns,
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
function Ad({
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
        a && /* @__PURE__ */ t(Q, { icon: a, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(Q, { icon: as })
      ]
    }
  );
}
function cf({
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
  onChangeBreakTypeId: p,
  canShowBreakButton: h = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: T = !0,
  projectSelectorElement: L,
  breakTypeName: _
}) {
  const { status: D, statusText: O, subtitle: I, statusColor: W } = Cd({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), j = D === "clocked-out", C = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? r.paid : r.unpaid
  })) ?? [], [A, F] = R(!1), k = () => {
    if (C.length > 1)
      A || F(!0);
    else {
      const B = C?.[0]?.value;
      u?.(B);
    }
  }, P = (B) => {
    p?.(B), F(!1), u?.(B);
  }, y = j && s.length && !c && l, x = s.find((B) => B.id === i), N = s.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), S = D === "break", [K, q] = R(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: O }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                Z.div,
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
          I && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: I })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            ne,
            {
              onClick: d,
              label: r.clockIn,
              icon: sn
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(re, { children: [
            h && /* @__PURE__ */ t(re, { children: C.length > 1 && p ? /* @__PURE__ */ t(
              it,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: C,
                onChange: P,
                open: A,
                onOpenChange: F,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  ne,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: ln,
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
                icon: ln,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              ne,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: on
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
                icon: on,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              ne,
              {
                onClick: d,
                label: r.resume,
                icon: sn
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        Fd,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(re, { children: [
      /* @__PURE__ */ t(
        it,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: i,
          options: N,
          onChange: w,
          open: K,
          onOpenChange: q,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Ad,
            {
              text: x?.name,
              placeholder: r.selectLocation,
              icon: x?.icon
            }
          ) })
        }
      ),
      T && L
    ] }) : /* @__PURE__ */ o(re, { children: [
      l && x && /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t($e, { text: x.name, icon: x.icon }) }),
      T && L,
      S && _ && /* @__PURE__ */ t($e, { text: _ })
    ] }) })
  ] }) });
}
const Td = {
  done: ss,
  "in-progress": is,
  todo: rs
}, Rd = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Ld({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const i = () => {
    a?.(e);
  }, s = ee(() => {
    if (!r)
      return Td[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    Ot,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: Rd[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: ls
      } : void 0,
      count: e.counter,
      onClick: i
    }
  );
}
function df({
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
    ).map(({ id: u, text: m, badge: p, counter: h }) => ({
      id: u,
      text: m,
      badge: p,
      counter: h,
      status: f
    }))
  ), c = !l.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : l.slice(0, r).map((d) => /* @__PURE__ */ t(
    Ld,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Dd = Object.defineProperty, Pd = Object.defineProperties, Od = Object.getOwnPropertyDescriptors, dt = Object.getOwnPropertySymbols, rr = Object.prototype.hasOwnProperty, ir = Object.prototype.propertyIsEnumerable, Bn = (e, n, a) => n in e ? Dd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, xe = (e, n) => {
  for (var a in n || (n = {})) rr.call(n, a) && Bn(e, a, n[a]);
  if (dt) for (var a of dt(n)) ir.call(n, a) && Bn(e, a, n[a]);
  return e;
}, bt = (e, n) => Pd(e, Od(n)), Ed = (e, n) => {
  var a = {};
  for (var r in e) rr.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && dt) for (var r of dt(e)) n.indexOf(r) < 0 && ir.call(e, r) && (a[r] = e[r]);
  return a;
}, _d = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, zd = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Bd = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = xe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, $d = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = xe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Md = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let i = xe({}, r);
  return i.left = n.left + e.width, _d(i) || zd({ usedSpot: i, spotsList: a }) ? null : i;
}, jd = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((i, s, l) => {
  if (i === a) return Md({ stone: r, position: n, optimalSpot: a, spotsList: l });
  let c = Bd({ position: n, spot: i, stone: r });
  return c || $d({ position: n, stone: r, spot: i }) || i;
});
function Wd(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let i = n[a];
    if (e(i)) return i;
  }
  return null;
}
var Ud = (e, n) => n.filter(e), Hd = (e, n) => [...n].sort(e), Vd = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Gd = (e) => Hd(Vd, e), Kd = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, qd = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Yd = ({ availableSpots: e, stone: n }) => Wd((a) => qd(a, n), e);
function Qd({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Yd({ availableSpots: n, stone: e }), i = { left: r.left, top: r.top }, s = Kd({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), l = [...n, s], c = jd({ spots: l, position: i, optimalSpot: r, stone: e });
  return l = [...Ud(Boolean, c)], l = Gd(l), { position: i, availableSpots: l };
}
var Xd = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, i = [], s = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let c = Qd({ availableSpots: s, stone: l, containerSize: n }), d = c.position.top + l.height;
    r < d && (r = d), i.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: i, containerHeight: r };
}, Jd = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), Zd = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: s, containerHeight: l, stones: c, availableSpots: d }, f] = R({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
    var u, m;
    let p = Jd(e.current), h = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (h === null) return;
    let b = Xd({ stones: p, containerSize: h });
    f(bt(xe({}, b), { stones: p }));
  }, [a, e, n, r, i]), { positions: s, containerHeight: l, stones: c, availableSpots: d };
}, eu = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), tu = ({ transition: e, transitionDuration: n }) => e ? { transition: eu(n)[e] } : null, nu = (e) => e ? bt(xe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, au = ({ style: e, position: n, transition: a, transitionDuration: r }) => xe(xe(bt(xe({}, e), { position: "absolute" }), nu(n)), tu({ transition: a, transitionDuration: r }));
function ru(e, n, a) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, i);
    }, n);
  };
}
var iu = () => {
  let [e, n] = R(), a = z(ru(n, 300));
  return V(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, su = (e) => {
  let [n, a] = R(null);
  return V(() => {
    let r = new ResizeObserver((i) => {
      for (let s of i) a(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, lu = (e) => {
  var n = e, { children: a, style: r, transition: i = !1, transitionDuration: s = 500, transitionStep: l = 50 } = n, c = Ed(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = iu(), m = su(f), { positions: p, containerHeight: h } = Zd({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = xe({ minHeight: h ?? 0, position: "relative" }, r);
  return t("div", bt(xe({ ref: f, style: b }, c), { children: ba.map(a, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let T = { style: au({ style: v.props.style, position: p[w], transition: i, transitionDuration: s }), ref: (L) => d.current[w] = L };
    return ga(v, xe(xe({}, v.props), T));
  }) }));
};
const ou = { sm: 340, md: 480, lg: 640 }, $n = ae(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const i = ou[a], [s, l] = R(), c = ba.toArray(n), d = z(null);
    return V(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && l(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, i]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(lu, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), cu = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], uf = me($n, () => /* @__PURE__ */ t(pa, { children: /* @__PURE__ */ t($n, { children: cu.map((e, n) => /* @__PURE__ */ t(ze.Skeleton, { height: e }, n)) }) })), Mn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), ff = me(
  ae(function({ children: n }, a) {
    return /* @__PURE__ */ t(ut, { ref: a, showBar: !1, children: /* @__PURE__ */ t(Mn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(pa, { orientation: "horizontal", children: /* @__PURE__ */ o(Mn, { children: [
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {})
  ] }) })
);
function du({
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
    va,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const mf = he(
  le("WidgetEmptyState", du)
), sr = ae(
  ({ title: e, children: n }, a) => (os(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
sr.displayName = "WidgetSection";
const hf = he(
  le("WidgetSection", sr)
), pf = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const i = cs(), s = window.location.pathname, l = ee(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = ee(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return l ? r : (i && console.error(c), null);
}, gf = he(
  Ce(
    {
      name: "ScrollArea",
      type: "layout"
    },
    ut
  )
);
export {
  Nu as ActivityItemList,
  zl as ActivityItemListSkeleton,
  dl as AiPromotionChat,
  ul as AiPromotionChatProvider,
  Fu as ApplicationFrame,
  qf as AreaChart,
  Ku as AreaChartWidget,
  Gu as AutoGrid,
  gi as Badge,
  Yf as BarChart,
  qu as BarChartWidget,
  _l as BaseActivityItemList,
  Qf as BaseBanner,
  Wl as BaseCelebration,
  Xl as BaseCommunityPost,
  vf as BaseTabs,
  yf as BreadcrumbSelect,
  Ms as Breadcrumbs,
  Pt as CalendarEvent,
  ef as CalendarEventList,
  Xf as CardSelectableContainer,
  hs as Carousel,
  Jf as CategoryBarChart,
  of as CategoryBarSection,
  Cu as Celebration,
  Ul as CelebrationSkeleton,
  Zu as ChartWidgetEmptyState,
  wf as Chip,
  cf as ClockInControls,
  Zf as ComboChart,
  Iu as CommunityPost,
  Jl as CommunityPostSkeleton,
  yo as CompanySelector,
  ft as Counter,
  uf as Dashboard,
  Au as DaytimePage,
  Nf as DetailsItem,
  Cf as DetailsItemsList,
  em as Dialog,
  Be as Dropdown,
  wu as EntitySelect,
  tm as F0ActionBar,
  nm as F0AiBanner,
  aa as F0AvatarModule,
  kf as F0ButtonToggle,
  xu as F0Callout,
  If as F0CardHorizontal,
  Uu as F0Chat,
  Wu as F0ChatProvider,
  da as F0FileItem,
  am as F0NotesTextEditor,
  rm as F0NotesTextEditorSkeleton,
  im as F0NumberInput,
  ti as F0RichTextDisplay,
  sm as F0RichTextEditor,
  Di as F0SearchInput,
  vu as F0SegmentedBar,
  lm as F0SegmentedControl,
  om as F0TableOfContent,
  cm as F0TextAreaInput,
  Sf as F0TextInput,
  yu as F0VersionHistory,
  dm as F1SearchBox,
  um as FILE_TYPES,
  Ff as FileItem,
  ku as HighlightBanner,
  nf as IndicatorsList,
  fm as Input,
  mm as Item,
  hm as ItemSectionHeader,
  ec as LATEST,
  pm as LineChart,
  Yu as LineChartWidget,
  _u as Menu,
  Af as MobileDropdown,
  gm as NotesTextEditor,
  bm as NotesTextEditorSkeleton,
  xm as NumberInput,
  Tu as OmniButton,
  Mu as OneApprovalHistory,
  Tf as OneCalendar,
  Rf as OneCalendarInternal,
  vm as OneDataCollection,
  ym as OneDateNavigator,
  va as OneEmptyState,
  wm as OnePagination,
  Su as OnePersonListItem,
  pf as OneRestrictComponent,
  Ru as Page,
  bu as PageHeader,
  Yt as PageHeaderNavigationContext,
  pu as PageHeaderNavigationProvider,
  Ks as PageNavigation,
  Nm as PieChart,
  Qu as PieChartWidget,
  Hc as PrivateBox,
  Cm as ProgressBarChart,
  km as RadarChart,
  Vl as Reactions,
  Im as ResourceHeader,
  Lf as RichTextDisplay,
  Sm as RichTextEditor,
  gf as ScrollArea,
  zu as SearchBar,
  Fm as SectionHeader,
  it as Select,
  vi as Shortcut,
  Bu as Sidebar,
  bo as SidebarChatItem,
  Va as SidebarChatItemSkeleton,
  Pu as SidebarChatList,
  ho as SidebarChatListSkeleton,
  Lu as SidebarChatProvider,
  Xt as SidebarCollapsibleSection,
  Ou as SidebarFooter,
  Eu as SidebarHeader,
  $u as SidebarTabs,
  zt as Spinner,
  Vu as Split,
  Hu as Stack,
  Ju as SummariesWidget,
  Df as Switch,
  Pf as Tabs,
  Of as TabsSkeleton,
  df as TasksList,
  Am as Textarea,
  Ef as ToggleGroup,
  _f as ToggleGroupItem,
  Re as Tooltip,
  lf as TwoColumnsList,
  Tm as UPLOAD_INPUT_ID,
  Rm as VerticalBarChart,
  Xu as VerticalBarChartWidget,
  Rt as VirtualList,
  zf as WeekStartDay,
  Bf as Weekdays,
  ze as Widget,
  af as WidgetAvatarsListItem,
  mf as WidgetEmptyState,
  tf as WidgetHighlightButton,
  rf as WidgetInboxList,
  zn as WidgetInboxListItem,
  hf as WidgetSection,
  sf as WidgetSimpleList,
  Ot as WidgetSimpleListItem,
  ff as WidgetStrip,
  Lm as actionBarStatuses,
  Dm as buttonToggleSizes,
  Pm as buttonToggleVariants,
  $f as chipVariants,
  Om as downloadAsCSV,
  Mf as f0FileItemSizes,
  Em as generateCSVContent,
  jf as getGranularityDefinition,
  Wf as getGranularityDefinitions,
  Uf as getGranularitySimpleDefinition,
  Hf as granularityDefinitions,
  Vf as modules,
  _m as predefinedPresets,
  Gf as rangeSeparator,
  Pn as seedFromStorage,
  zm as selectSizes,
  mt as useAiPromotionChat,
  Bm as useDataCollectionData,
  ju as useDataCollectionItemNavigation,
  ys as useDataCollectionSource,
  $m as useExportAction,
  De as useF0Chat,
  Mm as useInfiniteScrollPagination,
  nl as usePageHeaderItemNavigation,
  gu as usePageHeaderNavigation,
  je as useSidebar,
  Du as useSidebarChatActions,
  fo as useSidebarChats
};
