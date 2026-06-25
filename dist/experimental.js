import { h as da, B as ua, i as fa, j as ma, k as nn, l as qe, m as Ue, n as ha, o as g, p as te, q as Ae, u as Z, T as pa, r as ga, s as ba, R as xa, t as va, v as pe, w as ya, x as Ot, y as kt, z as rt, A as Ce, E as wa, G as Na, H as X, J as _t, K as Ve, L as le, M as Ca, N as ka, O as jn, Q as Ia, S as Sa, U as ae, V as G, W as Oe, X as Fa, Y as Ta, Z as Aa, _ as Ra, $ as La, a0 as we, a1 as Wn, a2 as Re, a3 as at, e as Un, a4 as Be, a5 as Hn, a6 as zt, a7 as be, a8 as ce, a9 as Bt, aa as Vn, ab as Da, ac as Gn, ad as xe, ae as ge, af as Ea, ag as Pa, ah as Oa, ai as _a, aj as za, ak as Te, al as ut, am as Kn, an as Ba, ao as $a, ap as Ma, aq as ft, ar as qn, as as Yn, at as ja, au as Wa, av as it, aw as Ua, ax as Qn, ay as Ha, az as Va, aA as Ga, aB as Ka, aC as qa, aD as Xn, aE as Jn, aF as Zn, aG as It, aH as er, aI as St, aJ as tr, aK as Ya, aL as Qa, aM as Xa, aN as nr, aO as Ja, aP as ke, aQ as Me, aR as Ft, aS as rr, aT as Za, aU as $t, aV as ei, aW as ti, aX as ni, aY as $e, aZ as ri, a_ as ai, a$ as Ye, b0 as rn, b1 as Tt, b2 as ii, b3 as si, a as li, b as oi, b4 as ar, b5 as ci, g as di, F as ui, b6 as fi, b7 as ir, b8 as mi, b9 as Mt, ba as hi, bb as Ge, bc as pi, bd as gi, be as sr, bf as bi, bg as xi, bh as vi, bi as lr, bj as jt, bk as yi, bl as wi, bm as Ni, bn as Wt, bo as Ci, bp as ki, bq as Ii, br as Si, bs as Fi, bt as Ti, bu as or, bv as cr, bw as Ai, bx as dr, by as ur, bz as Ri, bA as Li, bB as Di, bC as Ei, bD as Pi, bE as Oi, bF as _i, bG as zi, bH as Bi, bI as $i, bJ as Mi, bK as ji, bL as Wi, bM as fr, bN as Ui, bO as Hi, bP as Vi, bQ as Gi, bR as Ki, bS as qi, bT as Ie, bU as Ut, bV as Ht, bW as Vt, bX as mr, bY as Gt, bZ as hr, b_ as pr, b$ as Yi, c0 as Qi, c1 as Xi, c2 as Ji, c3 as Zi, c4 as es, c5 as ts, c6 as an, c7 as ns, c8 as rs, c9 as sn, ca as ln, cb as on, cc as as, cd as is, ce as ss, cf as ls, cg as gr, ch as os, ci as cs } from "./F0CanvasPanel-DYeEAezJ.js";
import { cu as yf, ct as wf, cG as Nf, cq as Cf, cr as kf, cj as If, ck as Sf, cl as Ff, cJ as Tf, cs as Af, cC as Rf, cD as Lf, cH as Df, cm as Ef, cw as Pf, cv as Of, cn as _f, co as zf, cE as Bf, cK as $f, cF as Mf, cI as jf, cB as Wf, cy as Uf, cA as Hf, cx as Vf, cp as Gf, cz as Kf } from "./F0CanvasPanel-DYeEAezJ.js";
import { jsx as t, jsxs as o, Fragment as se } from "react/jsx-runtime";
import ve, { forwardRef as ie, useRef as _, useTransition as ds, useState as A, useLayoutEffect as st, useId as At, useContext as Se, createContext as Le, useEffect as H, useCallback as K, useMemo as ne, Fragment as us, isValidElement as fs, cloneElement as br, memo as ms, Children as xr } from "react";
import { C as hs, P as ps, a as Ke, M as gs, p as bs, b as xs, R as cn, c as vr, u as vs, d as ys, e as ws, f as Ns, g as Cs, D as ks, h as Is, O as yr, i as wr, S as Ss, A as Fs, B as Ts, L as As, j as Rs, V as Ls, k as Ds, l as Es, m as Ps } from "./useDataCollectionSource-B1IXlYR3.js";
import { s as Yf, t as Qf, q as Xf, J as Jf, v as Zf, E as em, aa as tm, I as nm, r as rm, ac as am, ab as im, U as sm, af as lm, F as om, _ as cm, X as dm, N as um, ah as fm, Q as mm, $ as hm, a0 as pm, w as gm, ad as bm, ae as xm, T as vm, a1 as ym, a7 as wm, a9 as Nm, x as Cm, z as km, G as Im, Y as Sm, ag as Fm, Z as Tm, W as Am, ai as Rm, y as Lm, H as Dm, n as Em, o as Pm, a3 as Om, a4 as _m, a8 as zm, K as Bm, a5 as $m, a2 as Mm, a6 as jm } from "./useDataCollectionSource-B1IXlYR3.js";
const Os = da("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Nr = ie(({ className: e, items: n }, r) => /* @__PURE__ */ t(ua, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(fa, {}),
  /* @__PURE__ */ t(ma, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Nr.displayName = "CollapsedBreadcrumbItem";
const Kt = 50, _s = 120, lt = 8;
function zs(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let i = e - a - lt, s = 0, l = 1;
  for (let c = r - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, s = c, l++;
  }
  if (l < r)
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
function $s(e, n, r = []) {
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
  const a = n.length <= 2, i = r.map((l) => l.clientWidth);
  if (a)
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
  const r = _(null), a = _(null), [, i] = ds(), [s, l] = A(null), c = (s?.collapsedItems || []).length > 0;
  return st(() => {
    const d = r.current, f = a.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const p = r.current?.clientWidth ?? null, h = Array.from(f.children);
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
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(nn, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    nn,
    {
      ref: r,
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
            ref: a,
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
        s && s.headItem && /* @__PURE__ */ o(ha, { children: [
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
          c && /* @__PURE__ */ o(se, { children: [
            /* @__PURE__ */ t(
              Nr,
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
          !c && /* @__PURE__ */ t(se, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
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
const js = Ae({
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
  background: r,
  hover: a = !1,
  ...i
}, s) => {
  const l = At(), {
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
        te.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: s,
          animate: {
            "--gradient-angle": ["0deg", "360deg"]
          },
          transition: r ? void 0 : {
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
          ...(({ style: b, ...x }) => x)(h),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              un.map((b) => /* @__PURE__ */ t("clipPath", { id: `${l}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: un.map((b) => /* @__PURE__ */ t(
              te.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${l}-${b.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": a ? 8 : 1,
                  "--rotate": a ? "90deg" : "0deg",
                  opacity: a ? b.id === "left" ? 1 : 0 : 1,
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
                    duration: a ? 0.6 : 0.35,
                    ease: [0.55, 0, 0.1, 1]
                  },
                  "--rotate": {
                    duration: 0.35,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: a ? 0.8 : 0.1,
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
                      background: r ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
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
}, Cr = ie(Ws), kr = Le(null), Us = 15, Hs = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [i, s] = A(n), [l, c] = A(!1), [d, f] = A(!0), [u, m] = A(
    Us
  ), p = _(null), h = (x) => {
    p.current = x;
  }, b = () => {
    p.current && p.current();
  };
  return H(() => {
    s(n);
  }, [n]), H(() => {
    if (l && r?.(), !l) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [l, r]), /* @__PURE__ */ t(
    kr.Provider,
    {
      value: {
        ...a,
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
  const e = Se(kr);
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
const Ir = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: i } = mt(), s = Z(), [l, c] = A(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(pa, { children: /* @__PURE__ */ o(ga, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(ba, { asChild: !0, children: /* @__PURE__ */ t(
      te.div,
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
          xa,
          {
            onCheckedChange: (d) => {
              a(d);
            },
            checked: i,
            "aria-label": i ? s.ai.closeChat : s.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              pe(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              va,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Cr,
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
    !i && /* @__PURE__ */ t(ya, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, fn = "one_sidebar_locked", Sr = Le(void 0);
function je() {
  const e = Se(Sr);
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
  const { currentPath: n } = Ot(), [r, a] = A(!1), [i, s] = A(!1), l = r ? rt.xl : rt.md, c = kt(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = A(() => {
    const T = localStorage.getItem(fn);
    return T !== null ? !!T : !0;
  }), [u, m] = A(!1), [p, h] = A(
    null
  ), b = K(
    ({ isInvokedByUser: T } = {
      isInvokedByUser: !0
    }) => {
      s(T ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = K(
    (T) => {
      c || (T.clientX < 32 && m(!0), T.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = ne(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return H(() => {
    m(!1);
  }, [n]), H(() => {
    i && localStorage.setItem(fn, d ? "1" : "");
  }, [d, i]), H(() => () => {
    h(y);
  }, [y]), /* @__PURE__ */ t(
    Sr.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: y,
        toggleSidebar: b,
        prevSidebarState: p,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const mn = te.create(X), hn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Gs = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, i] = A(!1), s = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ce, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        pe()
      ),
      onClick: s,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        mn,
        {
          size: "sm",
          icon: wa,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: hn,
          initial: a ? "enterFromUnfavorite" : "initial",
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
          icon: Na,
          className: "outline-none",
          variants: hn,
          initial: a ? "enterFromFavorite" : "initial",
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
  fallbackLabel: r
}) {
  const a = !n, i = n?.title || r, s = n?.onClick, l = s ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    le,
    {
      ...s ? { onClick: s, type: "button" } : { href: l ?? "" },
      title: a ? void 0 : i,
      "aria-label": i,
      disabled: a,
      noAutoTooltip: a,
      noTitle: a,
      size: "sm",
      variant: "outline",
      label: i,
      icon: e,
      hideLabel: !0
    }
  );
}
function Ks({ previous: e, next: n, counter: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    r && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      r.current,
      "/",
      r.total
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
  getUpdates: r,
  updatesPageUrl: a,
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
  const [m, p] = A("idle"), [h, b] = A(null), [x, ...y] = h ?? [], [T, D] = A(!1);
  H(() => {
    b(null), p("idle");
  }, [e]);
  const $ = K(async () => {
    try {
      p("fetching");
      const L = await r();
      p("idle"), b(L);
    } catch {
      p("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    Ca,
    {
      open: T,
      onOpenChange: async (L) => {
        D(L), L && h === null && $(), l(L);
      },
      children: [
        /* @__PURE__ */ t(ka, { asChild: !0, children: /* @__PURE__ */ t(
          le,
          {
            variant: "outline",
            icon: jn,
            hideLabel: !0,
            label: n,
            pressed: T,
            append: f && /* @__PURE__ */ t(qt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Ia, { children: /* @__PURE__ */ o(
          Sa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Xs, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(el, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && h !== null && h.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Js, { ...i, buttonUrl: a }) }),
                m === "idle" && h !== null && h.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Ys,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  h.length > 1 && /* @__PURE__ */ t(se, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((L, P) => /* @__PURE__ */ t(
                    Qs,
                    {
                      ...L,
                      onClick: d
                    },
                    P
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Zs,
                  {
                    ...s,
                    onClick: () => {
                      $();
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
                  onDropdownClose: () => D(!1)
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
  mediaUrl: r,
  unread: a,
  updated: i,
  onClick: s
}) => {
  const l = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Fa,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Oe,
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
                src: r,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
              Ta,
              {
                fetchPriority: "high",
                src: r,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: i })
              ] }),
              a && /* @__PURE__ */ t(qt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Qs = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: i
}) => {
  const s = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Aa, { asChild: !0, className: s, onClick: i, children: /* @__PURE__ */ t(
    Oe,
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
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
        ] }),
        a && /* @__PURE__ */ t(qt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Xs = ({
  title: e,
  url: n,
  onClick: r
}) => /* @__PURE__ */ o(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ t("h2", { className: "text-base font-medium", children: e }),
      /* @__PURE__ */ t(
        ae,
        {
          variant: "outline",
          size: "sm",
          icon: Ve,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), Fr = ({
  icon: e,
  button: n,
  title: r,
  description: a,
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
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: r }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
  ] }),
  n
] }) }), Js = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  Fr,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(X, { icon: jn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Oe, { href: r, children: /* @__PURE__ */ t(ae, { label: n }) })
  }
), Zs = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  Fr,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(X, { icon: Ra, size: "lg" }),
    button: /* @__PURE__ */ t(ae, { variant: "outline", label: r, onClick: a })
  }
), el = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(G, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(G, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(G, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(G, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(G, { className: "h-3 w-1/3" })
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
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [i, s] = A(e);
  H(() => {
    s(e);
  }, [e]);
  const l = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), a(), d && d();
  };
  return i && /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ t(La, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          ae,
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
        hs,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
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
}, Yt = Le(null), gu = Yt.Provider;
function bu() {
  return Se(Yt);
}
function nl(e, n) {
  const r = n?.getItemTitle, a = n?.mode ?? "url", i = e !== null, s = e?.previousItem ?? null, l = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, h = e?.goToPrevious, b = e?.goToNext;
  return ne(() => {
    if (!i) return null;
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, y = ($, L) => ($ !== null ? r?.($) : void 0) ?? L, T = a === "callback" ? m ? { onClick: h, title: y(s, "Previous") } : void 0 : c !== null ? { url: c, title: y(s, "Previous") } : void 0, D = a === "callback" ? p ? { onClick: b, title: y(l, "Next") } : void 0 : d !== null ? { url: d, title: y(l, "Next") } : void 0;
    return !T && !D && !x ? null : { previous: T, next: D, counter: x };
  }, [
    i,
    a,
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
    r
  ]);
}
function xu({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: i = !1,
  navigation: s,
  productUpdates: l,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = je(), p = Se(Yt), h = s ?? p ?? void 0, b = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], x = n && Object.keys(n).length !== 0, y = i && r.length > 0, T = !i && a.length > 0, D = !i && !!l?.isVisible, $ = b[b.length - 1], L = "navigation" in window ? window.navigation : null, P = i && (L ? !!L.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ce, { children: !i && u !== "locked" && /* @__PURE__ */ t(
            te.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                ae,
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
                P && "justify-center"
              ),
              children: [
                i && P && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  ae,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: _t,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || y ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in $ ? /* @__PURE__ */ t(G, { className: "h-4 w-24" }) : $.label }) : /* @__PURE__ */ t(
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
          !i && x && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(Re, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            at,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(at, { text: n.text, variant: n.variant }) }),
          !i && x && (h || T || D) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Ks, { ...h }),
          h && T && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (D || T) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            D && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              qs,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            T && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((S, M) => /* @__PURE__ */ t(rl, { action: S }, M)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Un,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Ir, {})
          ] })
        ] })
      ]
    }
  );
}
function rl({ action: e }) {
  const n = _(null), [r, a] = A(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    le,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    le,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Oe,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        le,
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
const al = () => {
  const e = Z();
  return /* @__PURE__ */ o(
    te.div,
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
          le,
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
  isOpen: r
}) => {
  const a = _(null);
  H(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, sl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: i
  } = mt();
  return il({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(Ce, { children: n && /* @__PURE__ */ t(
    te.div,
    {
      "aria-hidden": !n,
      className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
      initial: r ? { opacity: 0, width: 0 } : !1,
      animate: { opacity: 1, width: 360 },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        r && a(!1);
      },
      children: /* @__PURE__ */ t("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ t(
        te.div,
        {
          className: "relative flex h-full w-full flex-col overflow-x-hidden ",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: r ? 0.3 : 0.05,
            ease: "easeOut",
            delay: r ? 0.2 : 0
          },
          children: e
        }
      ) })
    },
    "chat-window"
  ) });
}, ll = ({ action: e, onClose: n }) => {
  const r = () => {
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
          onMouseEnter: (a) => {
            a.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (a) => {
            a.currentTarget.style.opacity = "1";
          },
          onClick: r,
          children: e.isLoading ? /* @__PURE__ */ t(zt, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        le,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, ol = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
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
    title: r,
    description: a,
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
    title: r,
    description: a,
    benefits: i,
    actions: s,
    setOpen: l,
    onHide: c
  } = mt(), d = () => {
    l(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(sl, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      le,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: we,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Cr, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
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
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(al, {}) })
  ] }) : null;
}, dl = be(
  ce("AiPromotionChat", cl)
), ul = be(
  ce("AiPromotionChatProvider", ol)
), Tr = Ae({
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
  warning: Da,
  info: Vn
}, bn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, fl = ie(
  function({ title: n, onClose: r, children: a, actions: i = [], variant: s }, l) {
    if (i.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`
      );
    const c = i.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: l,
        className: Tr({ variant: s }),
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
                  gn[s] && /* @__PURE__ */ t(X, { icon: gn[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    xe,
                    {
                      className: bn[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            r && /* @__PURE__ */ t(
              ae,
              {
                variant: "ghost",
                icon: we,
                size: "sm",
                hideLabel: !0,
                onClick: r,
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
                children: a
              }
            ),
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: i.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              ae,
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
    className: Tr({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(G, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(G, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(G, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(G, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(G, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(G, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Ar = ie(
  (e, n) => /* @__PURE__ */ t(fl, { ref: n, ...e })
), hl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ml, { compact: e, variant: n });
Ar.displayName = "F0Callout";
const vu = ge(
  be(Ar),
  hl
), Rr = ie(
  ({ value: e, max: n, color: r = "categorical-1", label: a }, i) => {
    const s = Z(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < c), f = Ea(r);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-label": a,
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
Rr.displayName = "F0SegmentedBar";
const yu = be(
  ce("F0SegmentedBar", Rr)
);
function pl({
  title: e,
  isActive: n = !1,
  onClick: r
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        pe("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(X, { icon: Pa, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          xe,
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
  onClick: r,
  isActive: a
}) {
  const { locale: i } = Oa(), s = _a(i), l = za(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        pe("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${l} by ${c}${a ? " (selected)" : ""}`,
      "aria-pressed": r ? a : void 0,
      children: [
        /* @__PURE__ */ t(xe, { lines: 1, className: "font-medium text-f1-foreground", children: l }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            Te,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            xe,
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
  currentVersion: r,
  activeVersionId: a
}) {
  return /* @__PURE__ */ o(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": e,
      children: [
        /* @__PURE__ */ t(
          xe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(ut, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ t(
            pl,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            gl,
            {
              author: i.author,
              timestamp: i.timestamp,
              onClick: i.onClick,
              isActive: a === i.id
            },
            i.id
          ))
        ] }) })
      ]
    }
  );
}
const wu = be(
  ce("F0VersionHistory", bl)
), Lr = ie(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: i }, s) => {
    const l = ve.useRef(null);
    ve.useImperativeHandle(
      s,
      () => l.current,
      []
    );
    const c = Kn({
      count: n,
      getScrollElement: () => l.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        className: g("scrollbar-macos w-full overflow-auto", a),
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
                children: d ? i(d) : /* @__PURE__ */ t(se, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Lr.displayName = "VirtualList";
const Rt = ce("VirtualList", Lr), Dr = ({
  text: e,
  search: n,
  searchKeys: r = [],
  semiBold: a = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (r.find(
      (l) => l.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: e });
  const i = new RegExp(`(${n})`, "gi"), s = e.split(i);
  return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: s.map(
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
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i >= 0 && i < a.length - 1 ? a[i + 1].focus() : a.length > 0 && n?.();
}
function pt(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i > 0 ? a[i - 1].focus() : a.length > 0 && n?.();
}
const xl = ({
  entity: e,
  selected: n,
  onSelect: r,
  onRemove: a,
  marginLeft: i,
  search: s,
  goToFirst: l,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), p = m[0] || "", h = m.slice(1).join(" "), b = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? a(e) : r(e));
  }, x = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else y.key === "ArrowDown" ? ht(y.currentTarget, l) : y.key === "ArrowUp" && pt(y.currentTarget, c);
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
          Te,
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
              Dr,
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
            onKeyDown: x,
            className: g(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          X,
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
  search: r,
  entity: a,
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
  disabled: x = !1,
  hiddenAvatar: y = !1
}) => {
  const [T, D] = A(!1);
  if (!e)
    return /* @__PURE__ */ t(
      xl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: i,
        onSelect: l,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: y
      }
    );
  const $ = (S) => {
    if (S.key === " ")
      S.preventDefault(), d(!n);
    else if (S.key === "Enter" && b)
      d(!n);
    else if (S.key === "Enter") {
      if (x) return;
      !i || s ? l(a) : i && c(a);
    } else S.key === "ArrowDown" ? ht(S.currentTarget, f) : S.key === "ArrowUp" && pt(S.currentTarget, u);
  }, L = () => {
    if (T)
      d(!n), D(!1);
    else {
      if (x || b) return;
      i ? c(a) : l(a);
    }
  };
  if (!a.subItems?.length) return null;
  const P = i || s;
  return /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        ae,
        {
          hideLabel: !0,
          icon: n ? Ba : $a,
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
          "aria-label": a.name,
          onPointerDown: () => {
            D(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            h && /* @__PURE__ */ t(
              X,
              {
                icon: Ma,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Dr,
                {
                  semiBold: !0,
                  text: a.name,
                  search: r,
                  searchKeys: a.searchKeys
                }
              ),
              /* @__PURE__ */ t(ft, { value: a.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              qn,
              {
                checked: P,
                disabled: x,
                onClick: L,
                onKeyDown: $,
                indeterminate: s,
                onPointerDown: (S) => {
                  S.stopPropagation(), D(!1);
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
  goToFirst: r,
  goToLast: a
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? ht(s.currentTarget, r) : s.key === "ArrowUp" && pt(s.currentTarget, a);
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
        ae,
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
      ae,
      {
        disabled: e.disabled,
        variant: e.variant,
        onClick: e.onClick,
        label: e.label,
        icon: e.icon,
        size: "sm"
      }
    );
  const r = [e, ...n ?? []], a = r.map((l) => ({
    label: l.label,
    value: l.label,
    icon: l.icon,
    critical: l.variant === "critical"
  })) || [], i = (l) => {
    const c = r.find((d) => d.label === l);
    c && !c.disabled && c.onClick?.();
  }, s = r.every((l) => l.disabled);
  return /* @__PURE__ */ t(
    ja,
    {
      items: a,
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
  clearLabel: r,
  disabled: a,
  allVisibleSelected: i,
  anyVisibleSelected: s,
  loading: l,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || r), m = e && e.length > 0;
  if (!(!l && (!c && u || m))) return null;
  let h, b, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: a || i
  } : void 0, y = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !s
  } : void 0;
  return x || (x = y, y = void 0), m && u ? (h = /* @__PURE__ */ t(
    He,
    {
      primaryAction: x,
      secondaryActions: y ? [y] : []
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
  ) : u && (h = /* @__PURE__ */ t(He, { primaryAction: x, secondaryActions: [] }), y && (b = /* @__PURE__ */ t(He, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    h,
    b
  ] }) });
}, yl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: i,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(X, { icon: Os, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), ht(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), pt(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: r,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    X,
    {
      icon: Wa,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), xt = 384, vt = 36, wl = 37, vn = 1, yn = 200, wn = '[data-avatarname-navigator-element="true"]', Nl = ({
  groupView: e,
  entities: n,
  groups: r,
  selectedGroup: a,
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
  searchPlaceholder: x,
  selectAllLabel: y,
  clearLabel: T,
  notFoundTitle: D,
  notFoundSubtitle: $,
  className: L,
  actions: P,
  onCreate: S,
  onCreateLabel: M,
  singleSelector: j = !1,
  loading: w = !1,
  disabled: R = !1,
  hiddenAvatar: I = !1
}) => {
  const k = ve.useRef(null), O = ne(
    () => e ? n.reduce(
      (F, Q) => F + (Q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), v = K(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, vn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(wn)
      )[0]?.focus();
    }, yn);
  }, []), N = K(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, vn), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(wn)
      );
      F[F.length - 1]?.focus();
    }, yn);
  }, []), C = ne(
    () => new Map(p.map((F) => [F.id, F])),
    [p]
  ), E = K(
    (F) => {
      const Q = C.get(F.id);
      if (!e)
        return {
          selected: !!Q,
          partialSelected: !!Q
        };
      const B = (F.subItems ?? []).filter(
        (U) => Q?.subItems?.some(
          (re) => re.subId === U.subId
        )
      ), q = (F.subItems?.length ?? 0) === B.length, fe = !q && B.length > 0;
      return { selected: q, partialSelected: fe };
    },
    [e, C]
  ), Y = K(
    (F) => {
      if (F.index === 0 && S)
        return /* @__PURE__ */ t(
          xn,
          {
            label: M ?? "",
            onCreate: () => S?.(i),
            goToFirst: v,
            goToLast: N
          }
        );
      const Q = S ? F.index - 1 : F.index, B = n[Q], { selected: q, partialSelected: fe } = E(B);
      return /* @__PURE__ */ t(
        tt,
        {
          expanded: B.expanded ?? !1,
          onExpand: () => b(B, !0),
          search: i,
          groupView: e,
          entity: B,
          onSelect: s,
          onRemove: l,
          selected: q,
          partialSelected: fe,
          showGroupIcon: Cl(r, a),
          singleSelector: j,
          goToFirst: v,
          goToLast: N,
          disabled: R,
          hiddenAvatar: I
        },
        B.id
      );
    },
    [
      S,
      M,
      R,
      n,
      E,
      v,
      N,
      e,
      r,
      I,
      l,
      s,
      b,
      i,
      a,
      j
    ]
  ), J = ne(() => e ? n.flatMap((F) => {
    const Q = Qe(
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
          expanded: F.expanded ?? Q?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((B) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? Q?.expanded ?? !1
        },
        subItem: B
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
  })), [e, n, p]), W = K(
    (F) => {
      if (F.index === 0 && S)
        return /* @__PURE__ */ t(
          xn,
          {
            label: M ?? "",
            onCreate: () => S?.(i),
            goToFirst: v,
            goToLast: N
          }
        );
      const Q = S ? F.index - 1 : F.index, B = J[Q].parent, q = J[Q].subItem;
      if (!B) {
        const U = {
          id: q.subId,
          name: q.subName,
          avatar: q.subAvatar,
          subItems: q.subItems,
          expanded: q.expanded,
          searchKeys: q.subSearchKeys
        }, re = Qe(
          p,
          U.id
        ), V = (U?.subItems ?? []).filter(
          (We) => re?.subItems?.some(
            (ca) => ca.subId === We.subId
          )
        ), he = (U.subItems?.length ?? 0) === V.length, oa = !he && V.length > 0;
        return /* @__PURE__ */ t(
          tt,
          {
            groupView: !0,
            expanded: U.expanded ?? !1,
            onExpand: (We) => b(U, We),
            search: i,
            entity: U,
            onSelect: s,
            onRemove: l,
            selected: he,
            partialSelected: oa,
            showGroupIcon: r.find((We) => We.value === a)?.groupType === "team",
            singleSelector: j,
            goToFirst: v,
            goToLast: N,
            hideLine: Q === J.length - 1,
            disabled: R,
            hiddenAvatar: I
          }
        );
      }
      let fe = !!Qe(p, q.subId);
      if (!fe) {
        const U = Qe(
          p,
          B.id
        );
        fe = !!(B?.subItems ?? []).filter(
          (V) => U?.subItems?.some(
            (he) => he.subId === V.subId
          )
        ).find((V) => V.subId === q.subId);
      }
      return /* @__PURE__ */ t(
        tt,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: q.subId,
            name: q.subName,
            avatar: q.subAvatar,
            searchKeys: q.subSearchKeys
          },
          onSelect: () => {
            d(B, q);
          },
          onRemove: () => c(B, q),
          selected: !!fe,
          partialSelected: !1,
          singleSelector: j,
          goToFirst: v,
          goToLast: N,
          isChild: !0,
          hiddenAvatar: I
        }
      );
    },
    [
      J,
      p,
      i,
      j,
      v,
      N,
      s,
      l,
      r,
      R,
      b,
      a,
      d,
      c,
      I,
      S,
      M
    ]
  ), [de, oe] = ne(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, Q = 0;
    if (!e)
      F = n.length, Q = n.reduce(
        (fe, { id: U }) => fe + (C.has(U) ? 1 : 0),
        0
      );
    else {
      const fe = new Set(
        [...C.values()].flatMap(
          (U) => U.subItems?.map((re) => re.subId) ?? []
        )
      );
      n.forEach((U) => {
        const re = U.subItems ?? [];
        F += re.length, Q += re.filter(
          (V) => fe.has(V.subId)
        ).length;
      });
    }
    const B = F > 0 && Q === F, q = Q > 0;
    return [B, q];
  }, [n, C, e]), z = J.length, ee = !j && (y || T), me = P && P.length > 0, ue = !w && (!j && ee || me);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        j || w ? "rounded-r-xl" : "",
        L
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              j || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                yl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: N
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                it,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: h,
                  options: r,
                  value: a,
                  className: g(
                    "h-8 rounded bg-transparent py-[5px]",
                    a === "all" ? "text-f1-foreground-secondary" : ""
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
              ue ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(zt, {}) }),
              !w && !O && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: xt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: D }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: $ })
                  ]
                }
              ),
              !w && (!!O || S) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: z + (S ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && S) return vt;
                    const Q = S ? F - 1 : F;
                    return J[Q]?.parent === null ? wl : vt;
                  },
                  renderer: W,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: n.length + (S ? 1 : 0),
                  itemSize: vt,
                  renderer: Y,
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
            totalFilteredEntities: O,
            allVisibleSelected: de,
            anyVisibleSelected: oe,
            selectAllLabel: y,
            clearLabel: T,
            disabled: R,
            actions: P
          }
        )
      ]
    }
  );
}, Qe = (e, n) => e.find((r) => r.id === n), Cl = (e, n) => e.find((r) => r.value === n)?.groupType === "team", kl = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Ua,
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
        icon: a ? { icon: Ha, color: "secondary" } : void 0
      }
    ),
    right: !r && /* @__PURE__ */ t(
      X,
      {
        icon: we,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: a
  }
) }), Il = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: r,
  selectedEntities: a,
  selectedLabel: i,
  disabled: s = !1,
  hiddenAvatar: l = !1
}) => {
  const c = ne(() => {
    const f = e ? a.flatMap(
      (m) => (m.subItems ?? []).map((p) => ({
        parent: m,
        subItem: p
      }))
    ) : a.map((m) => ({
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
  }, [e, a]), d = c.length;
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
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : r({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(se, {});
        }
      }
    ) })
  ] });
}, Sl = 500, Nn = 520, Cn = 210, kn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: r,
  selectedEntities: a,
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
  const h = (s ?? Nn) < Sl, b = !c && !l && !h, x = s ?? Nn, y = b ? x - Cn : x;
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
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ t(
              Nl,
              {
                ...p,
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a,
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
                onSubItemRemove: r,
                selectedEntities: a ?? [],
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
  selectedEntities: r,
  disabled: a = !1,
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
  required: x = !1,
  readonly: y = !1,
  append: T,
  size: D = "sm",
  open: $
}) => {
  const L = ne(
    () => r.some(
      (j) => j.subItems && j.subItems.length > 0
    ),
    [r]
  ), P = ne(() => L ? r.flatMap(
    (j) => (j.subItems ?? []).map((w) => ({
      parent: j,
      subItem: w
    }))
  ) : r.map((j) => ({
    parent: null,
    subItem: {
      subId: j.id,
      subName: j.name,
      subAvatar: j.avatar,
      subDeactivated: j.deactivated
    }
  })), [L, r]), S = P.length === 0 ? void 0 : P.length === 1 ? P[0].subItem.subName : P.length + " " + n, M = P.length === 1 ? P[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    Va,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: l,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !S ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: p,
      maxLength: h,
      clearable: !1,
      value: S,
      disabled: a,
      loading: b,
      required: x,
      readonly: y,
      size: D,
      avatar: i || !M ? void 0 : {
        type: "person",
        firstName: M,
        lastName: "",
        src: P[0].subItem.subAvatar,
        deactivated: P[0].subItem.subDeactivated
      },
      append: T ?? /* @__PURE__ */ t(se, { children: /* @__PURE__ */ t(Ga, { open: $, disabled: a, size: D }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            S && "text-f1-foreground",
            P.length === 1 && !i || c && !S ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            xe,
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
}, Nu = (e) => {
  const [n, r] = A(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (w) => {
    r(w), e.onOpenChange?.(w);
  };
  H(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, s] = A(e.entities), [l, c] = A(""), [d, f] = Ka("", 300), u = ne(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = Se(qa), h = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(w) {
    if (e.singleSelector) {
      e.onSelect(w), r(!1);
      return;
    }
    const R = e.selectedEntities ?? [], I = i.find((C) => C.id === w.id);
    if (!I)
      return;
    const k = new Set(
      (I.subItems ?? []).map((C) => C.subId)
    ), O = /* @__PURE__ */ new Set([I.id]);
    i.forEach((C) => {
      C.id !== I.id && (C.subItems ?? []).some(
        (Y) => k.has(Y.subId)
      ) && O.add(C.id);
    });
    const v = [...R];
    function N(C) {
      const E = v.findIndex((Y) => Y.id === C.id);
      E >= 0 ? v[E] = C : v.push(C);
    }
    O.forEach((C) => {
      const E = i.find((W) => W.id === C);
      if (!E) return;
      const Y = E.subItems?.filter(
        (W) => k.has(W.subId)
      ) ?? [], J = v.findIndex((W) => W.id === C);
      if (J >= 0) {
        const W = v[J].subItems ?? [], de = new Set(W.map((z) => z.subId)), oe = [
          ...W,
          ...Y.filter((z) => !de.has(z.subId))
        ];
        N({
          ...E,
          subItems: oe
        });
      } else
        N({
          ...E,
          subItems: Y
        });
    }), e.onSelect(v);
  }
  function x(w, R) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...R }] }), r(!1);
    else {
      const I = e.selectedEntities ?? [], k = new Set(I.map((N) => N.id)), O = new Map(
        I.map((N) => [N.id, N.subItems ?? []])
      );
      k.add(w.id), e.entities.forEach((N) => {
        N.subItems?.some(
          (E) => E.subId === R.subId
        ) && k.add(N.id);
      });
      const v = [];
      e.entities.forEach((N) => {
        if (k.has(N.id)) {
          let E = [...O.get(N.id) ?? []];
          N.subItems?.some(
            (W) => W.subId === R.subId
          ) && (E.some(
            (de) => de.subId === R.subId
          ) || E.push(R));
          const J = new Set(
            (N.subItems ?? []).map((W) => W.subId)
          );
          E = E.filter(
            (W) => J.has(W.subId)
          ), v.push({
            ...N,
            subItems: E
          });
        }
      }), e.onSelect(v);
    }
  }
  function y(w) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let R = [];
    const I = e.selectedEntities ?? [];
    if (u) {
      const k = i.find(
        (v) => v.id === w.id
      );
      if (!k)
        return;
      const O = new Set(
        (k.subItems ?? []).map((v) => v.subId)
      );
      for (const v of I) {
        const N = (v.subItems ?? []).filter(
          (C) => !O.has(C.subId)
        );
        N.length > 0 && R.push({
          ...v,
          subItems: N
        });
      }
    } else
      R = (I ?? []).filter((k) => k.id !== w.id);
    e.onSelect(R);
  }
  function T(w, R) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const I = e.selectedEntities ?? [], k = R.subId, O = [];
    for (const v of I) {
      const N = v.subItems?.filter((C) => C.subId !== k) ?? [];
      N.length > 0 && O.push({
        ...v,
        subItems: N
      });
    }
    e.onSelect(O);
  }
  function D() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let R = [];
    if (u) {
      const I = new Set(
        i.flatMap(
          (k) => (k.subItems ?? []).map((O) => O.subId)
        )
      );
      for (const k of w) {
        const O = (k.subItems ?? []).filter(
          (v) => !I.has(v.subId)
        );
        O.length > 0 && R.push({
          ...k,
          subItems: O
        });
      }
    } else {
      const I = new Set(
        i.map((k) => k.id)
      );
      R = (w ?? []).filter((k) => !I.has(k.id));
    }
    e.onSelect(R);
  }
  function $() {
    const w = [...e.selectedEntities ?? []];
    i.forEach((R) => {
      const I = w.find((k) => k.id === R.id);
      if (!I)
        w.push({
          ...R,
          subItems: R.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...I.subItems ?? [],
            ...R.subItems ?? []
          ])
        );
        I.subItems = k;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const L = (w) => {
    c(w), f(w);
  }, P = (w, R) => {
    e.onItemExpandedChange(w.id, R), s(
      i.map(
        (I) => I.id === w.id ? { ...I, expanded: !w.expanded } : I
      )
    );
  };
  H(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const R = e.entities.map((I) => {
        const k = Tl(I, d), O = I.subItems?.map((v) => ({
          ...v,
          score: ot(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, N) => v.score - N.score);
        return {
          ...I,
          score: k,
          expanded: I.expanded ?? (O?.length ?? 0) > 0,
          subItems: O
        };
      }).filter((I) => I.score < 1 / 0).sort((I, k) => I.score - k.score);
      s(R);
    } else {
      const w = e.entities.map((R) => {
        const I = ot(
          d,
          R.searchKeys ?? [R.name]
        );
        return { ...R, score: I };
      }).filter((R) => R.score < 1 / 0).sort((R, I) => R.score - I.score);
      s(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const S = _(null), [M, j] = A(0);
  return st(() => {
    const w = () => {
      S.current && j(S.current.offsetWidth);
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
        kn,
        {
          groupView: u,
          entities: i,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: y,
          onSubItemRemove: T,
          onSubItemSelect: x,
          onClear: D,
          onSelectAll: $,
          selectedEntities: e.selectedEntities ?? [],
          search: l,
          onSearch: L,
          onToggleExpand: P,
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
  ) : /* @__PURE__ */ o(Xn, { ...e, onOpenChange: a, open: n, children: [
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
            onRemove: y,
            onSubItemRemove: T,
            onSubItemSelect: x,
            onClear: D,
            onSelectAll: $,
            selectedEntities: e.selectedEntities ?? [],
            search: l,
            onSearch: L,
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
function Lt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function In(e) {
  return Lt(e).split(/\s+/).filter((n) => n.length > 0);
}
function ot(e = "", n) {
  const r = In(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const i = Lt(a), s = In(a), l = Lt(e);
    if (i.includes(l) || r.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Tl(e, n) {
  const r = ot(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((i, s) => {
    const l = ot(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(i, l);
  }, 1 / 0)), Math.min(r, a);
}
const Al = ({
  id: e,
  createdAt: n,
  title: r,
  description: a,
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
  }), u = er(n, {
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
        /* @__PURE__ */ t(St, { icon: i ?? tr }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: r,
              children: r
            }
          ),
          /* @__PURE__ */ t(
            "p",
            {
              className: "line-clamp-2 text-f1-foreground-secondary",
              title: a,
              children: a
            }
          ),
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: l && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Rl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(G, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(G, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(G, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(G, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(G, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Qt = ce(
  "ActivityItem",
  ge(Al, Rl)
), Er = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Ll = ({
  title: e,
  items: n,
  onClickItem: r,
  onItemVisible: a
}) => /* @__PURE__ */ t(Er, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Qt,
  {
    ...i,
    onClick: () => r(i.id),
    onVisible: a
  },
  i.id
)) }), Dl = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Er, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(Qt.Skeleton, {}, a)) }), nt = ge(Ll, Dl), El = 3, Pl = ["today", "yesterday", "lastWeek", "lastMonth"], Ol = (e) => Xa(e, ([n]) => {
  const r = Pl.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), Dt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), _l = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: i = 5
}) => {
  const s = Z(), l = Ya(e, "createdAt"), c = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = Qa((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = Ol(
    Object.entries(l).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ o(ve.Fragment, { children: [
      /* @__PURE__ */ t(
        nt,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ t(Dt, {})
    ] }, u)),
    n && new Array(El).fill(null).map((u, m) => /* @__PURE__ */ t(Qt.Skeleton, {}, m))
  ] });
}, zl = () => {
  const e = Z();
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
}, Cu = ce(
  "ActivityItemList",
  ge(_l, zl)
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
  src: r,
  canReact: a,
  lastEmojiReaction: i,
  onReactionSelect: s,
  pickerRef: l
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : $l[nr(
          [e, n].join("")
        )]
      ),
      children: [
        r && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${r}")` }
          }
        ),
        /* @__PURE__ */ t("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ o("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: a ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ t(
                Te,
                {
                  src: r,
                  firstName: e,
                  lastName: n,
                  size: "2xl"
                }
              )
            }
          ),
          a && /* @__PURE__ */ t(
            "div",
            {
              ref: l,
              className: g(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
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
  const n = _(null), r = _(), a = K(() => {
    const s = n.current;
    if (!s) return;
    const l = Ja.create(s, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    r.current = setInterval(() => {
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
  }, [e]), i = K(() => {
    clearInterval(r.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: a, handleMouseLeave: i };
}
const Wl = ({
  link: e,
  firstName: n,
  lastName: r,
  src: a,
  onClick: i,
  canReact: s = !0,
  lastEmojiReaction: l,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = A(l), h = _(null);
  H(() => {
    p(l);
  }, [l]);
  const b = (L) => {
    p(L), c?.(L);
  }, x = ke(), { canvasRef: y, handleMouseEnter: T, handleMouseLeave: D } = jl(x), $ = Me({
    emoji: Bl[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Oe,
    {
      href: e,
      onClick: i,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        pe()
      ),
      onMouseEnter: x ? void 0 : T,
      onMouseLeave: x ? void 0 : D,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Ml,
          {
            firstName: n,
            lastName: r,
            src: a,
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
              r
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: $ })
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
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(G, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(G, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(G, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), ku = ge(Wl, Ul), Iu = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(rr, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(ae, { label: r, variant: "outline", onClick: a }) })
] });
function Pr({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: i
}) {
  const [s, l] = A(r), [c, d] = A(n), f = _(null), { fireEmojiConfetti: u } = Za(), m = (b, x) => {
    b.stopPropagation(), d(c + (s ? -1 : 1)), l(!s), i?.(x), s || u(x, f);
  }, p = a?.map((b) => b.name).join(", ") || "", h = /* @__PURE__ */ t(
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
      "aria-label": ei(e),
      prepend: /* @__PURE__ */ t(Me, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ti,
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
function Hl({ items: e, onInteraction: n, locale: r, action: a }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    a && /* @__PURE__ */ t(
      ae,
      {
        label: a.label,
        icon: a.icon,
        onClick: a.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Ke, { onSelect: n, locale: r }),
    e.map((i) => /* @__PURE__ */ t(
      Pr,
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
const Vl = ce("Reactions", Hl), Or = ie(function({ content: n, collapsed: r, id: a, className: i, tabIndex: s }, l) {
  return /* @__PURE__ */ t(
    ni,
    {
      ref: l,
      id: a,
      content: n,
      tabIndex: s,
      className: g(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        i
      )
    }
  );
});
Or.displayName = "BasePostDescription";
const Gl = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(G, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(G, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), _r = ge(
  Or,
  Gl
), Sn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((r) => {
      const a = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        $e,
        {
          icon: r.icon,
          text: r.label ?? (r.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${r.label}: ${r.description}`
        }
      ) });
      return r.label || r.description ? /* @__PURE__ */ t(
        Re,
        {
          label: r.label,
          description: r.description,
          children: a
        },
        r.label ?? r.description
      ) : a;
    })
  }
), Et = ie(
  function({
    label: n,
    title: r,
    subtitle: a,
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
          !m && /* @__PURE__ */ o(se, { children: [
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
                  r,
                  !!a && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${a}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(se, { children: [
                  /* @__PURE__ */ t(Ft, { date: f }),
                  /* @__PURE__ */ t(
                    X,
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
), Kl = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), zr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Kl.has(r);
}, ql = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let i = ri(a);
  const s = (l) => {
    l.stopPropagation();
  };
  return r && (i = `${i} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: zr(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(se, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(G, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Et,
      {
        title: e,
        description: i,
        color: ai.special.highlight,
        isPending: !1,
        toDate: a,
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
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(G, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(G, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(G, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(G, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Br = ge(ql, Yl), Ql = ({
  describedBy: e,
  controls: n,
  expanded: r,
  onClick: a
}) => {
  const i = Z();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        pe()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": r,
      onClick: a,
      children: i.actions.seeMore
    }
  ) });
}, Xl = ({
  id: e,
  author: n,
  group: r,
  createdAt: a,
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
  noReactionsButton: x = !1,
  descriptionExpandable: y = !1
}) => {
  const T = At(), D = At(), $ = _(null), [L, P] = A(null), [S, M] = A(!1), j = [f.views, f.comments].filter(Boolean).join(" · "), w = y && L?.id === e && L.description === s, R = !w, I = er(a), k = () => {
    l(e);
  }, O = (C) => {
    C.stopPropagation();
  }, v = n ? `${n.firstName} ${n.lastName}` : void 0, N = (C) => {
    C.preventDefault(), C.stopPropagation(), s && P({ id: e, description: s });
  };
  return H(() => {
    w && $.current?.focus();
  }, [w]), H(() => {
    y || P(null);
  }, [y]), H(() => {
    const C = $.current;
    if (!y || !C || w) {
      M(!1);
      return;
    }
    const E = () => {
      M(
        C.scrollHeight > C.clientHeight
      );
    };
    if (E(), typeof ResizeObserver > "u") return;
    const Y = new ResizeObserver(E);
    return Y.observe(C), () => Y.disconnect();
  }, [y, w, s]), /* @__PURE__ */ o(
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
            title: v,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              Te,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(St, { icon: rn }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(se, { children: [
                  /* @__PURE__ */ t(
                    Ye,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: v,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        Te,
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
                      title: v,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: v
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(St, { icon: rn, size: "sm" }) }),
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
                    onClick: r.onClick,
                    title: r.title,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    href: "#",
                    children: r.title
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ o("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  h?.map((C) => /* @__PURE__ */ t(
                    ae,
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
                  b?.length && /* @__PURE__ */ t(
                    Be,
                    {
                      items: b,
                      icon: Tt,
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
                    icon: Tt,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: I }),
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
              s && /* @__PURE__ */ o(se, { children: [
                /* @__PURE__ */ t(
                  _r,
                  {
                    ref: $,
                    id: D,
                    content: s,
                    collapsed: R,
                    tabIndex: w ? -1 : void 0,
                    className: g(w && pe())
                  }
                ),
                y && S && !w && /* @__PURE__ */ t(
                  Ql,
                  {
                    describedBy: T,
                    controls: D,
                    expanded: w,
                    onClick: N
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: zr(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: O,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(se, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(G, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Br, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: j }),
          !x && /* @__PURE__ */ t(
            Vl,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: ii
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
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(G, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(G, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(G, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(G, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(G, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(_r.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(G, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Br.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(G, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(G, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Su = ge(
  Xl,
  Jl
), $r = ve.forwardRef(({ person: e, onClick: n, ...r }, a) => {
  const i = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: g(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        r.withPointerCursor && "cursor-pointer"
      ),
      onClick: i,
      children: [
        /* @__PURE__ */ t(
          Te,
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
            r.info && /* @__PURE__ */ t(Re, { label: r.info, children: /* @__PURE__ */ t(
              X,
              {
                icon: Vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((s, l) => /* @__PURE__ */ o(se, { children: [
            /* @__PURE__ */ t($e, { ...s }, s.text),
            l < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(si, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              ae,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              ae,
              {
                variant: "outline",
                onClick: r.actions.secondary.onClick,
                label: "Secondary",
                icon: r.actions.secondary.icon,
                hideLabel: !0
              }
            )
          ] })
        ] })
      ]
    }
  );
}), Zl = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(G, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(G, { className: "h-4" }),
    /* @__PURE__ */ t(G, { className: "h-4" })
  ] })
] });
$r.displayName = "OnePersonListItem";
const Fu = be(
  ce(
    "OnePersonListItem",
    ge($r, Zl)
  )
), Fn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function eo({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Vs, { children: /* @__PURE__ */ t(
    to,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function to({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  const s = a?.enabled ? li : i?.enabled ? ul : us, l = a?.enabled ? a : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(s, { ...l, children: /* @__PURE__ */ t(
    io,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const Tu = ce(
  "ApplicationFrame",
  eo
), no = ({ contentId: e }) => {
  const n = Z();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: pe(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function ro(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function ao(e, n) {
  const { sidebarState: r, toggleSidebar: a } = je(), i = _(e);
  H(() => {
    n && ro(
      e,
      i.current,
      r
    ) && a({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, r, a]);
}
function io({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: i
}) {
  const { sidebarState: s, toggleSidebar: l, isSmallScreen: c, setForceFloat: d } = je(), f = ke(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: h,
    closeCanvas: b,
    chatWidth: x,
    resizable: y,
    panelSide: T
  } = oi(), D = m === "fullscreen", $ = m === "canvas", { open: L } = mt(), P = y ? x : ci, S = T === "left", M = _(D), j = D && !M.current, w = !D && M.current, [
    R,
    I
  ] = A(!1);
  H(() => {
    !D && M.current && I(!0), M.current = D;
  }, [D]);
  const k = D || R || w, O = ne(() => j ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [j, w]), v = kt(
    `(max-width: ${rt.xl}px)`,
    { initializeWithValue: !0 }
  ), N = kt(`(max-width: ${rt.md}px)`, {
    initializeWithValue: !0
  }), C = u && !S;
  return H(() => {
    d(C);
  }, [C, d]), H(() => {
    d(L);
  }, [L, d]), ao(C, v), /* @__PURE__ */ t(
    gs,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(ar, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ce, { children: s === "unlocked" && /* @__PURE__ */ t(
            te.nav,
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
              ref: (E) => {
                s === "hidden" ? E?.setAttribute("inert", "") : E?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(no, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            te.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N && !S ? P : 0,
                paddingLeft: u && !N && S ? P : 0
              },
              transition: {
                paddingRight: Fn,
                paddingLeft: Fn
              },
              children: [
                /* @__PURE__ */ t(
                  te.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      k ? "overflow-hidden" : "overflow-auto",
                      !u && !L && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      te.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          k ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && $ && p && /* @__PURE__ */ t(
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
                      di,
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
                  te.div,
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
                        k || $ ? "z-20" : "z-0",
                        s === "hidden" && k ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || D ? "100%" : P
                    },
                    transition: O,
                    onAnimationComplete: () => {
                      R && I(!1);
                    },
                    children: /* @__PURE__ */ t(ui, {})
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
const Mr = ({
  firstName: e,
  lastName: n,
  src: r,
  "aria-label": a,
  "aria-labelledby": i,
  pulse: s,
  onPulseClick: l
}) => {
  const c = Z(), [d, f] = A(!s);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ce, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
    te.div,
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
        te.div,
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
    te.div,
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
            src: r,
            size: "lg",
            color: "random",
            "aria-label": a,
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
              X,
              {
                icon: xs[s],
                color: bs[s],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          te.div,
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
              le,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: fi,
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
Mr.displayName = "PulseAvatar";
const so = Ae({
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
function jr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: l } = je();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: so({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (l || i === "hidden") && /* @__PURE__ */ t(
              ae,
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
                    Mr,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    Te,
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
            /* @__PURE__ */ t(Ir, {})
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
jr.displayName = "DaytimePage";
const Au = be(
  ce("DaytimePage", jr)
);
function lo(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: i, target: s }) => ({
    label: n,
    description: r,
    href: a,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function oo({ label: e, options: n, hasNewUpdate: r }) {
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
            pe()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(X, { icon: ir, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Ru = be(
  ce("OmniButton", oo)
);
function Wr({ children: e, header: n, embedded: r = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !r && "xs:rounded-xl"
      ),
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
Wr.displayName = "Page";
const Lu = be(ce("Page", Wr)), co = (e) => e.reduce(
  (n, r) => n + r.chats.filter((a) => (a.unreadCount ?? 0) > 0).length,
  0
), Ur = Le(null), Hr = Le(null), Tn = (e, n, r) => e.map((a) => a.id === n ? r(a) : a), Xe = (e, n) => e.map((r) => ({ ...r, chats: n(r.chats) })), Du = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: r
}) => {
  const [a, i] = A(n), [s, l] = A(
    r
  ), c = ne(
    () => ({
      setGroups: i,
      setActiveChat: (f) => l(f ?? void 0),
      upsertChat: (f, u) => i((m) => m.some(
        (h) => h.chats.some((b) => b.id === u.id)
      ) ? Xe(
        m,
        (h) => h.map((b) => b.id === u.id ? { ...b, ...u } : b)
      ) : Tn(m, f, (h) => ({
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
        (m) => Tn(m, f, (p) => {
          const h = new Map(p.chats.map((y) => [y.id, y])), b = u.map((y) => h.get(y)).filter((y) => !!y), x = p.chats.filter((y) => !u.includes(y.id));
          return { ...p, chats: [...b, ...x] };
        })
      )
    }),
    []
  ), d = ne(
    () => ({
      groups: a,
      activeChatId: s,
      unreadChatsCount: co(a)
    }),
    [a, s]
  );
  return /* @__PURE__ */ t(Hr.Provider, { value: c, children: /* @__PURE__ */ t(Ur.Provider, { value: d, children: e }) });
}, uo = () => {
  const e = Se(Ur);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Vr = () => {
  const e = Se(Hr);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, fo = () => {
  const e = uo(), n = Vr();
  return ne(() => ({ ...e, ...n }), [e, n]);
}, Eu = () => Vr(), Xt = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: i,
  highlightWhenCollapsed: s,
  collapsedBadge: l,
  isDragging: c,
  wasDragging: d
}) => {
  const [f, u] = A(n), m = ke(), p = s && !f, h = () => {
    if (c || d?.current) return;
    const b = !f;
    u(b), a?.(b);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(mi, { open: f, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          pe("focus-visible:ring-inset"),
          r && "hidden"
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
            te.div,
            {
              initial: !1,
              animate: { rotate: f ? 0 : -90 },
              transition: { duration: m ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(X, { icon: Mt, size: "xs" })
            }
          ),
          !f && l && /* @__PURE__ */ t("span", { className: "ml-auto", children: l })
        ]
      }
    ) }),
    /* @__PURE__ */ t(hi, { forceMount: !0, className: "flex flex-col gap-1 mt-0.5", children: /* @__PURE__ */ t(
      te.div,
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
}, Gr = ({
  className: e
}) => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": "true",
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(G, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(G, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), mo = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(G, { className: "h-3 w-24 rounded" }) }), ho = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((r, a) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(mo, {}),
      Array.from({ length: n }).map((i, s) => /* @__PURE__ */ t(Gr, {}, s))
    ] }, a))
  }
), Kr = ({ count: e }) => /* @__PURE__ */ t(
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
  onClick: r
}) => {
  if (e.loading)
    return /* @__PURE__ */ t(Gr, {});
  const a = !!e.unreadCount, i = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), s = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: r,
      "aria-pressed": n,
      className: g(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        pe("focus-visible:ring-inset"),
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
          xe,
          {
            tag: "span",
            className: g(
              "line-clamp-1 flex-1 py-0.5",
              a ? "text-f1-foreground font-semibold" : "text-f1-foreground-secondary font-medium"
            ),
            lines: 1,
            children: e.label
          }
        ),
        (s || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          s && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            pi,
            {
              icon: s.icon,
              size: "sm",
              "aria-label": s.label,
              color: "default"
            }
          ) }),
          e.unreadCount && /* @__PURE__ */ t(Kr, { count: e.unreadCount })
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
      pe("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(X, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), Pu = ({
  actions: e = [],
  emptyState: n,
  loading: r = !1
}) => {
  const { groups: a, activeChatId: i, setActiveChat: s } = fo(), l = ke(), c = a.some((u) => u.chats.length > 0), d = { ...xo, ...n }, f = r && !c;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((u) => /* @__PURE__ */ t(vo, { action: u }, u.label)) }),
    f && /* @__PURE__ */ t(ho, {}),
    !f && !c && /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl", role: "img", "aria-hidden": "true", children: d.emoji }),
      /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: d.title }),
      /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: d.description })
    ] }),
    !f && a.map((u) => {
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
          collapsedBadge: m > 0 ? /* @__PURE__ */ t(Kr, { count: m }) : void 0,
          children: /* @__PURE__ */ t(Ce, { initial: !1, children: u.chats.map((p) => /* @__PURE__ */ t(
            te.div,
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
  onChange: r,
  isLoading: a = !1,
  withNotification: i = !1,
  additionalOptions: s = []
}) {
  const l = ne(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(G, { className: "size-6" }),
    /* @__PURE__ */ t(G, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    An,
    {
      company: l,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    wo,
    {
      companies: e,
      selected: l,
      onChange: r,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        An,
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
  onChange: r,
  children: a,
  additionalOptions: i = []
}) => {
  const s = Z(), [l, c] = A(!1), d = ne(
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
    r(u);
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
            pe()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              te.div,
              {
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(X, { icon: Mt, size: "xs" })
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
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        gi,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: sr, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(xe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function Ou({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: i,
  onDropdownClick: s,
  hasActivityUpdates: l
}) {
  const c = Z();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Be, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          pe("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ t(
            Te,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(xe, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    r && /* @__PURE__ */ t(Re, { label: c.notifications, shortcut: a, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        ae,
        {
          icon: tr,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(bi, { type: "highlight", size: "sm", icon: sr }) })
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
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = je(), i = _(null);
  return H(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    $t,
    {
      variant: "ghost",
      size: "md",
      onClick: () => r(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: i,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !a }), children: /* @__PURE__ */ t(No, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: a }), children: /* @__PURE__ */ t(X, { icon: we, size: "md" }) })
      ]
    }
  );
}
function _u({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: i,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      yo,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: s,
        withNotification: a,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(Co, {})
  ] });
}
function ko() {
  const [e, n] = A(!1);
  return H(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const qr = Le(void 0);
function Io({ children: e }) {
  const [n, r] = A(!1), [a, i] = A(null);
  return /* @__PURE__ */ t(
    qr.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: i },
      children: e
    }
  );
}
function Jt() {
  const e = Se(qr);
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
      X,
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
  const { isActive: n } = Ot(), { label: r, icon: a, ...i } = e, s = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Oe,
    {
      ...i,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        pe("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(So, { item: e, active: s })
    }
  );
}, To = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: i,
  total: s,
  onMove: l,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = Z(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Jt(), { isActive: b } = Ot(), x = b(e.href, { exact: e.exactMatch }), y = _(!1), [T, D] = A(!1), $ = i === 0, L = i === s - 1, P = s === 1, S = ne(() => {
    const k = [];
    return !P && !$ && k.push({
      label: f.actions.moveUp,
      onClick: () => l?.(i, i - 1),
      icon: xi
    }), !P && !L && k.push({
      label: f.actions.moveDown,
      onClick: () => l?.(i, i + 1),
      icon: vi
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: lr,
      critical: !0
    }), k;
  }, [P, $, L, f, l, i, a, e]), M = () => {
    m(!0), D(!1), h(e.href || null), y.current = !0;
  }, j = () => {
    m(!1), h(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && p === e.href, R = ne(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      T && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, T, w, d]
  ), I = ne(() => /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Ro, { tooltip: n, children: /* @__PURE__ */ o(
      Oe,
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
            X,
            {
              icon: e.icon,
              size: "md",
              className: g(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ge, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            xe,
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
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: T,
            onOpenChange: D,
            items: S,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(X, { icon: Tt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, T, w, S, n]);
  return d ? /* @__PURE__ */ t(
    vr,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: M,
      onDragEnd: j,
      className: R,
      whileDrag: {
        scale: 1.05
      },
      children: I
    }
  ) : /* @__PURE__ */ t("div", { className: R, children: I });
}, yt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: i,
  currentOrder: s
}) => {
  const { isDragging: l, setIsDragging: c } = Jt(), d = _(!1), f = vs(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && i?.(s);
    }, 0);
  }, p = (b) => {
    !l && !d.current && a?.(e, b);
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
          children: e.items.map((b, x) => /* @__PURE__ */ t(Fo, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    vr,
    {
      id: e.id,
      value: e,
      dragConstraints: r,
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
function zu({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: i
}) {
  const s = _(null), l = e.filter(
    (b) => b.isSortable === !1
  ), [c, d] = A(
    e.filter((b) => b.isSortable !== !1)
  ), [f, u] = A(0), m = K((b) => {
    d(b);
  }, []), p = K(
    (b) => {
      r?.(b);
    },
    [r]
  ), h = ko();
  return /* @__PURE__ */ t(Io, { children: /* @__PURE__ */ t(ar, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    Ao,
    {
      disableDragging: h,
      nonSortableItems: l,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: p,
      favorites: i,
      onFavoritesChange: a,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function Ao({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: i,
  onDragEnd: s,
  favorites: l = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = Z(), { isDragging: m } = Jt(), p = e.some((v) => v.isRoot), h = e.filter((v) => !v.isRoot).length > 0, b = n.length > 0, x = _(null), [y, T] = A(l), D = l.length > 0;
  H(() => {
    JSON.stringify(l) !== JSON.stringify(y) && T(l);
  }, [l]);
  const $ = (v) => {
    T(v);
  }, L = K(
    (v) => {
      const N = y.filter((C) => C.href !== v.href);
      T(N), c?.(N);
    },
    [y, c]
  ), P = K(
    (v, N) => {
      if (N < 0 || N >= y.length) return;
      const C = [...y], [E] = C.splice(v, 1);
      C.splice(N, 0, E), T(C), c?.(C);
    },
    [y, c]
  ), [S, M] = A(!1), j = _(null);
  H(() => {
    n.length > 0 && !S && (r([...n]), M(!0));
  }, [n, r, S]), H(() => {
    const v = () => {
      j.current !== null && window.clearTimeout(j.current), j.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), j.current !== null && window.clearTimeout(j.current);
    };
  }, [a, n, d]);
  const w = "flex flex-col gap-0.5", R = ne(
    () => y.reduce(
      (v, N, C) => (N.label in v || (v[N.label] = []), v[N.label].push(C), v),
      {}
    ),
    [y]
  ), I = ne(
    () => D && y.map((v, N) => /* @__PURE__ */ t(
      To,
      {
        isSortable: !f,
        tooltip: (R[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: L,
        index: N,
        total: y.length,
        onMove: P,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      D,
      y,
      R,
      L,
      P,
      c,
      f
    ]
  ), k = "flex flex-col gap-3", O = ne(() => n.map((v) => /* @__PURE__ */ t(
    yt,
    {
      category: v,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: i,
      onDragEnd: s,
      currentOrder: n
    },
    v.id
  )), [n, f, a, i, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => v.isRoot).map((v, N) => /* @__PURE__ */ t(
          yt,
          {
            category: v,
            onCollapse: i
          },
          `fixed-${N}`
        )) }),
        D && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Xt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: w, children: I }) : /* @__PURE__ */ t(
          cn,
          {
            axis: "y",
            values: y,
            onReorder: $,
            className: w,
            children: I
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => !v.isRoot).map((v, N) => /* @__PURE__ */ t(
          yt,
          {
            category: v,
            onCollapse: i
          },
          `fixed-${N}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: k, children: O }) : /* @__PURE__ */ t(
              cn,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: k,
                children: O
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
function Bu({
  onClick: e,
  placeholder: n,
  shortcut: r = ["cmd", "k"],
  ...a
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: g(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        pe()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(X, { icon: jt, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(yi, { keys: r }) })
      ]
    }
  ) });
}
const Rn = ({ position: e }) => /* @__PURE__ */ t(
  te.div,
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
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: i, isSmallScreen: s } = je(), l = ke(), [c, d] = It({ threshold: 1 }), [f, u] = It({ threshold: 1 }), m = Z(), p = {
    x: {
      ease: i !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : i !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, h = () => r ? fs(r) && a ? br(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ o(
    te.aside,
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
          /* @__PURE__ */ o(Ce, { children: [
            !d && /* @__PURE__ */ t(Rn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(Rn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: h() })
      ]
    }
  );
}
const $u = be(Lo), Do = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), Eo = ({
  tab: e,
  isActive: n,
  onClick: r
}) => {
  const a = n ? "neutral" : "ghost";
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      "aria-label": e.label,
      "aria-pressed": n,
      onClick: r,
      className: g(
        Ni({ variant: a }),
        wi({ size: "md" }),
        pe()
      ),
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(X, { icon: e.icon, size: "md", color: "default" }),
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
}, Mu = ({
  tabs: e,
  activeTab: n,
  onTabChange: r,
  search: a
}) => {
  const i = Z(), s = a.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-4 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((l) => /* @__PURE__ */ t(
          Eo,
          {
            tab: l,
            isActive: l.id === n,
            onClick: () => r(l.id)
          },
          l.id
        ))
      }
    ),
    /* @__PURE__ */ t(
      ae,
      {
        variant: "ghost",
        size: "md",
        icon: jt,
        label: s,
        hideLabel: !0,
        onClick: a.onClick
      }
    )
  ] });
}, Po = {
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
    icon: we,
    type: "critical",
    size: "sm"
  }
}, Oo = {
  icon: ir,
  type: "neutral",
  size: "sm"
}, _o = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, zo = (e) => e in Ln ? Ln[e] : Oo;
function Dn(e) {
  return _o[e ?? "neutral"] ?? 0;
}
const Bo = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const i = Z(), s = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), l = i.approvals.statuses[r], c = ne(() => a.map((d) => {
    const f = zo(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => Dn(f.badge?.type) - Dn(d.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(at, { text: l, variant: Po[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Wt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, $o = ({ steps: e }) => {
  const r = Z().approvals.history, a = e.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: r }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((i, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, s) => /* @__PURE__ */ o(se, { children: [
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
}, ju = be(
  ce("OneApprovalHistory", $o)
), wt = (e, n) => typeof n == "string" && n in e;
function En(e, n, r) {
  const a = {};
  let i = !1;
  const s = Ci(e);
  if (s !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(s).filter(
        ([u]) => wt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(s).length === 0) && (r.setCurrentFilters(f), a.filters = f, i = !0);
  }
  const l = e.sortings;
  if (l === null)
    r.setCurrentSortings(null), a.sortings = null, i = !0;
  else if (l && n.sortings && wt(n.sortings, l.field)) {
    const d = {
      field: l.field,
      order: l.order
    };
    r.setCurrentSortings(d), a.sortings = d, i = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (r.setCurrentSearch(e.search), a.search = e.search, i = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && wt(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    r.setCurrentGrouping(d), a.grouping = d, i = !0;
  }
  return i ? a : null;
}
function Wu(e) {
  const {
    source: n,
    collectionId: r,
    activeItemId: a,
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
  } = e, b = ki(), x = ys(n, h), [y, T] = A(null), D = y?.key === r && y.settled, $ = _(x);
  $.current = x;
  const L = _(b);
  L.current = b;
  const P = _(null), S = m === void 0 ? null : JSON.stringify(m), M = _(m);
  M.current = m;
  const j = _(null), w = () => {
    const U = M.current;
    U !== void 0 && (j.current = JSON.stringify(U), $.current.setCurrentFilters(U));
  };
  H(() => {
    if (!f || P.current === r) return;
    if (!u) {
      P.current = r, w(), T({ key: r, applied: null, settled: !1 });
      return;
    }
    let U = !1;
    return (async () => {
      let V = null;
      try {
        const he = await L.current.get(
          r
        );
        he && !U && (V = En(
          he,
          $.current,
          $.current
        ));
      } catch {
      }
      U || (P.current = r, w(), T({ key: r, applied: V, settled: !1 }));
    })(), () => {
      U = !0;
    };
  }, [r, f, u]), H(() => {
    !D || S === null || j.current !== S && w();
  }, [D, S]), H(() => {
    if (!(!f || !u))
      return Ii(r, async () => {
        try {
          const U = await L.current.get(
            r
          );
          if (!U) return;
          const re = $.current;
          En(
            U,
            {
              filters: M.current === void 0 ? re.filters : void 0,
              sortings: re.sortings,
              search: re.search,
              grouping: re.grouping
            },
            re
          );
        } catch {
        }
      });
  }, [r, f, u]);
  const {
    data: R,
    paginationInfo: I,
    setPage: k,
    loadMore: O,
    isLoading: v,
    isInitialLoading: N
  } = Si(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && D,
      fetchParamsProvider: (U) => ({
        ...U,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  H(() => {
    T(
      (U) => U && U.key === r && !U.settled ? { ...U, settled: !0 } : U
    );
  }, [y, r]);
  const C = c ?? n.itemUrl, E = ws({
    dataSource: x,
    data: R,
    paginationInfo: I,
    setPage: k,
    loadMore: O,
    isLoading: v,
    idProvider: l,
    itemUrl: C,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: s
  }), Y = typeof E.activeItemId == "string" || typeof E.activeItemId == "number" ? E.activeItemId : null, J = E.activeItem !== null, W = J && E.nextItem === null && E.hasNext, de = J && E.previousItem === null && E.hasPrevious, oe = Y !== null && (!J || W || de), z = [
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
  ], { neighbors: ee, isSupported: me } = Ns({
    dataAdapter: x.dataAdapter,
    id: Y,
    filters: x.currentFilters,
    sortings: z,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && D && !N && !v && oe,
    fetchParamsProvider: (U) => ({
      ...U,
      navigationFilters: x.currentNavigationFilters
    })
  }), ue = ne(() => l || (x.idProvider ? (U, re) => x.idProvider(U, re) : Cs), [l, x.idProvider]), F = ne(() => {
    if (!oe || ee === null) return E;
    const U = E.previousItem ?? ee.previous, re = E.nextItem ?? ee.next, V = (he) => he && C ? C(he) ?? null : null;
    return {
      ...E,
      previousItem: U,
      nextItem: re,
      previousItemUrl: E.previousItemUrl ?? V(U),
      nextItemUrl: E.nextItemUrl ?? V(re),
      absoluteIndex: E.absoluteIndex ?? (ee.position !== void 0 ? ee.position - 1 : null),
      totalItems: E.totalItems ?? ee.total,
      hasPrevious: E.hasPrevious || U !== null,
      hasNext: E.hasNext || re !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: J ? E.goToPrevious : () => {
        ee.previous && E.setActiveItemId(
          ue(ee.previous)
        );
      },
      goToNext: J ? E.goToNext : () => {
        ee.next && E.setActiveItemId(
          ue(ee.next)
        );
      }
    };
  }, [
    E,
    oe,
    ee,
    J,
    C,
    ue
  ]), Q = nl(F, {
    getItemTitle: d,
    mode: p
  }), B = f && D && me && oe && ee === null, q = _(null), fe = Q ?? (B ? q.current : null);
  return H(() => {
    Q !== null && (q.current = Q);
  }, [Q]), {
    ...F,
    isNavigating: F.isNavigating || B,
    isReady: D && !N,
    navigation: fe,
    appliedCollectionState: y?.applied ?? null,
    dataSource: x,
    data: R,
    paginationInfo: I,
    isLoading: v
  };
}
const Yr = Le(null), Uu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(Yr.Provider, { value: e, children: n });
function De() {
  const e = Se(Yr);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Mo = 200, jo = 1600, Qr = Le(null), Wo = ({
  children: e
}) => {
  const { messages: n, searchMessages: r, loadMessageContext: a } = De(), [i, s] = A(null), [l, c] = A(null), d = _(null), f = _(null), u = _(null), [m, p] = A(null), [h, b] = A(!1), [x, y] = A(""), [T, D] = A([]), [$, L] = A(-1), [P, S] = A(!1), M = _(n);
  M.current = n;
  const j = _(r);
  j.current = r;
  const w = _(a);
  w.current = a;
  const R = _(T);
  R.current = T;
  const I = _($);
  I.current = $;
  const k = _(0);
  H(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const O = K((B) => {
    d.current = B;
  }, []), v = K((B) => {
    f.current = B;
  }, []), N = K((B) => {
    f.current?.(B);
  }, []), C = K(
    (B, q) => p({ images: B, index: q }),
    []
  ), E = K(() => p(null), []), Y = K(
    (B) => p((q) => q && { ...q, index: B }),
    []
  ), J = K((B, q) => {
    d.current?.(B), c(B), u.current && clearTimeout(u.current), q || (u.current = setTimeout(
      () => c(null),
      jo
    ));
  }, []), W = K(
    (B) => J(B, !1),
    [J]
  ), de = K(
    (B, q = R.current) => {
      const fe = q[B];
      if (fe == null) return;
      L(B);
      const U = () => J(fe, !0), re = w.current;
      re ? re(fe).then(U) : U();
    },
    [J]
  );
  H(() => {
    if (!h) return;
    const B = x.trim();
    if (B === "") {
      D([]), L(-1), S(!1), c(null);
      return;
    }
    S(!0);
    const q = ++k.current, fe = setTimeout(() => {
      const U = (V) => {
        q === k.current && (D(V), S(!1), V.length > 0 ? de(V.length - 1, V) : (L(-1), c(null)));
      }, re = j.current;
      if (re)
        re(B).then((V) => U(V.map((he) => he.id)));
      else {
        const V = B.toLowerCase();
        U(
          M.current.filter((he) => !he.deleted && he.body.toLowerCase().includes(V)).map((he) => he.id)
        );
      }
    }, Mo);
    return () => clearTimeout(fe);
  }, [x, h, de]);
  const oe = K(() => b(!0), []), z = K(() => {
    k.current++, b(!1), y(""), D([]), L(-1), S(!1), c(null);
  }, []), ee = K(() => {
    const B = R.current;
    B.length !== 0 && de((I.current + 1) % B.length, B);
  }, [de]), me = K(() => {
    const B = R.current;
    B.length !== 0 && de((I.current - 1 + B.length) % B.length, B);
  }, [de]), ue = T.length, F = $ >= 0 ? $ + 1 : 0, Q = ne(
    () => ({
      replyTo: i,
      setReplyTo: s,
      highlightedId: l,
      jumpToMessage: W,
      registerScrollToMessage: O,
      registerFileDropHandler: v,
      dropFiles: N,
      imagePreview: m,
      openImagePreview: C,
      closeImagePreview: E,
      setImagePreviewIndex: Y,
      searchOpen: h,
      openSearch: oe,
      closeSearch: z,
      searchQuery: x,
      setSearchQuery: y,
      searching: P,
      matchCurrent: F,
      matchTotal: ue,
      goToNextMatch: ee,
      goToPrevMatch: me
    }),
    [
      i,
      l,
      W,
      O,
      v,
      N,
      m,
      C,
      E,
      Y,
      h,
      oe,
      z,
      x,
      P,
      F,
      ue,
      ee,
      me
    ]
  );
  return /* @__PURE__ */ t(Qr.Provider, { value: Q, children: e });
};
function Fe() {
  const e = Se(Qr);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Uo = (e) => e?.find((n) => n.kind === "image"), Ho = (e) => {
  const n = Uo(e);
  return n ? n.thumbnailUrl ?? n.url : void 0;
}, Vo = (e) => {
  const n = e?.filter((a) => a.kind === "image") ?? [], r = e?.filter((a) => a.kind === "file") ?? [];
  return n.length > 0 && r.length > 0 ? { kind: "mixed", count: n.length + r.length } : n.length > 0 ? { kind: "photo", count: n.length } : r.length > 0 ? {
    kind: "file",
    count: r.length,
    name: r.length === 1 ? r[0].name : void 0
  } : null;
}, Xr = (e) => {
  const n = Z(), r = e.body?.trim() ?? "", a = Ho(e.attachments), i = Vo(e.attachments);
  if (!i) return { label: r, thumbnailUrl: a };
  const s = i.kind === "photo" ? {
    icon: Fi,
    label: i.count === 1 ? n.chat.photo : n.t("chat.photoCount.other", { count: i.count })
  } : i.kind === "file" ? {
    icon: Ti,
    label: i.name ?? n.t("chat.fileCount.other", { count: i.count })
  } : {
    icon: or,
    label: n.t("chat.attachmentCount.other", {
      count: i.count
    })
  };
  return { icon: s.icon, label: r || s.label, thumbnailUrl: a };
}, Go = ({
  message: e,
  onRemove: n
}) => {
  const r = Z(), { icon: a, label: i, thumbnailUrl: s } = Xr(e);
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(X, { icon: cr, size: "md", color: "default" }) }),
    s && /* @__PURE__ */ t(
      "img",
      {
        src: s,
        alt: "",
        className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(xe, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.isMine ? r.chat.you : e.author.name }),
      /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
        a && /* @__PURE__ */ t(X, { icon: a, size: "xs", color: "default" }),
        /* @__PURE__ */ t(xe, { className: "min-w-0 text-sm", lines: 1, children: i })
      ] })
    ] }),
    /* @__PURE__ */ t(
      le,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: r.chat.removeQuote,
        icon: we,
        onClick: n
      }
    )
  ] }) });
}, Ko = 140, qo = 4e3, Yo = () => {
  const e = Z(), { sendMessage: n, onInputActivity: r, uploadFiles: a, transcribe: i, maxFiles: s } = De(), { replyTo: l, setReplyTo: c, registerFileDropHandler: d } = Fe(), f = ke(), [u, m] = A(""), [p, h] = A([]), b = _(null), x = _(null), y = _(0), T = p.some((z) => z.status === "uploading"), [D, $] = A(null), L = _(
    null
  ), P = K((z) => {
    L.current && clearTimeout(L.current), $(z), L.current = setTimeout(() => {
      $(null), L.current = null;
    }, qo);
  }, []);
  H(
    () => () => {
      L.current && clearTimeout(L.current);
    },
    []
  );
  const S = _(0);
  H(() => {
    S.current = p.length;
  }, [p]);
  const M = K(() => {
    const z = b.current;
    z && (z.style.height = "auto", z.style.height = `${Math.min(z.scrollHeight, Ko)}px`);
  }, []), j = _(""), w = K(
    (z) => {
      const ee = j.current;
      m(ee ? `${ee} ${z}` : z), requestAnimationFrame(M);
    },
    [M]
  ), R = {
    "permission-denied": e.chat.micPermissionDenied,
    "device-error": e.chat.micError,
    "transcription-failed": e.chat.transcriptionError
  }, I = Ai({
    onTranscribe: i,
    onPartial: w,
    onFinal: w,
    onError: (z) => P(R[z])
  }), k = I.status === "transcribing", O = I.status === "recording", v = !!i && I.isSupported, N = (u.trim().length > 0 || p.length > 0) && !k && !T, C = K(
    (z) => {
      m(z.target.value), r(), M();
    },
    [M, r]
  ), E = K(
    async (z) => {
      if (z.length === 0 || !a) return;
      if (s !== void 0 && S.current + z.length > s) {
        P(
          e.chat.tooManyFilesError.replace("{{maxFiles}}", String(s))
        );
        return;
      }
      const ee = z.map((ue) => ({
        id: `att-${y.current++}`,
        status: "uploading",
        name: ue.name
      }));
      h((ue) => [...ue, ...ee]);
      const me = new Set(ee.map((ue) => ue.id));
      try {
        const F = (await a(z)).map((Q, B) => ({
          id: ee[B]?.id ?? `att-${y.current++}`,
          status: "ready",
          attachment: Q
        }));
        h((Q) => [
          ...Q.filter((B) => !me.has(B.id)),
          ...F
        ]);
      } catch {
        h((ue) => ue.filter((F) => !me.has(F.id))), P(e.chat.fileUploadError);
      }
    },
    [
      a,
      s,
      P,
      e.chat.tooManyFilesError,
      e.chat.fileUploadError
    ]
  );
  H(() => {
    d((z) => {
      E(z);
    });
  }, [d, E]);
  const Y = K(() => {
    if (!N) return;
    const z = p.flatMap(
      (me) => me.status === "ready" ? [me.attachment] : []
    );
    n({
      body: u.trim(),
      attachments: z.length > 0 ? z : void 0,
      replyToId: l?.id
    }), m(""), h([]), c(null);
    const ee = b.current;
    ee && (ee.style.height = "auto");
  }, [p, N, l, n, c, u]), J = K(
    (z) => {
      const ee = b.current, me = ee?.selectionStart ?? ee?.value.length ?? 0, ue = ee?.selectionEnd ?? ee?.value.length ?? 0;
      m((F) => F.slice(0, me) + z + F.slice(ue)), r(), requestAnimationFrame(() => {
        M();
        const F = b.current;
        if (F) {
          const Q = me + z.length;
          F.focus(), F.setSelectionRange(Q, Q);
        }
      });
    },
    [M, r]
  ), W = K(
    (z) => {
      z.key === "Enter" && !z.shiftKey && (z.preventDefault(), Y());
    },
    [Y]
  ), de = K(() => {
    j.current = u, I.start();
  }, [I, u]), oe = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col", children: [
    l && /* @__PURE__ */ t(
      Go,
      {
        message: l,
        onRemove: () => c(null)
      }
    ),
    /* @__PURE__ */ t(Ce, { initial: !1, children: D && /* @__PURE__ */ t(
      te.div,
      {
        role: "alert",
        "aria-live": "polite",
        className: "p-1",
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: {
          duration: f ? 0 : 0.2,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
              "bg-f1-background-critical text-f1-foreground"
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ t(dr, { type: "critical", size: "sm" }) }),
              /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground-critical", children: D })
            ]
          }
        )
      },
      "transient-error"
    ) }),
    p.length > 0 && /* @__PURE__ */ t(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": T,
        className: "flex flex-wrap gap-1 px-1 pt-1",
        children: p.map(
          (z) => z.status === "uploading" ? /* @__PURE__ */ t(G, { className: "h-9 w-36 rounded-[10px]" }, z.id) : /* @__PURE__ */ t(
            ur,
            {
              size: "md",
              file: {
                name: z.attachment.name,
                type: z.attachment.mimeType ?? (z.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: we,
                  onClick: () => h(
                    (ee) => ee.filter((me) => me.id !== z.id)
                  )
                }
              ]
            },
            z.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: b,
        value: u,
        onChange: C,
        onKeyDown: W,
        rows: 1,
        placeholder: O ? e.chat.listening : oe,
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
          Ri,
          {
            stream: I.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            le,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: we,
              onClick: I.cancel
            }
          ),
          /* @__PURE__ */ t(
            le,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: Bt,
              onClick: I.stop
            }
          )
        ] })
      ] })
    ) : /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-3", children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: x,
          type: "file",
          multiple: !0,
          className: "hidden",
          onChange: (z) => {
            E(Array.from(z.target.files ?? [])), z.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          le,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.attachFile,
            icon: or,
            onClick: () => x.current?.click(),
            disabled: !a || k
          }
        ),
        /* @__PURE__ */ t(
          Ke,
          {
            variant: "outline",
            size: "md",
            label: e.chat.addEmoji,
            onSelect: J
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        v && /* @__PURE__ */ t(
          le,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Li,
            onClick: de,
            loading: k
          }
        ),
        /* @__PURE__ */ t(
          le,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Hn,
            onClick: Y,
            disabled: !N
          }
        )
      ] })
    ] })
  ] }) }) });
}, Qo = ({
  visible: e
}) => {
  const n = Z();
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
        /* @__PURE__ */ t(X, { icon: Di, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Xo = () => {
  const e = Z(), {
    searchQuery: n,
    setSearchQuery: r,
    searching: a,
    matchCurrent: i,
    matchTotal: s,
    goToNextMatch: l,
    goToPrevMatch: c,
    closeSearch: d
  } = Fe(), f = s > 0, m = n.trim().length > 0 && !a && !f;
  return /* @__PURE__ */ o("div", { className: "flex w-full items-center gap-2", onKeyDown: (h) => {
    h.key === "Enter" ? (h.preventDefault(), h.shiftKey ? c() : l()) : h.key === "Escape" && (h.preventDefault(), d());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      Ei,
      {
        value: n,
        onChange: r,
        placeholder: e.chat.searchPlaceholder,
        loading: a,
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
        children: a ? "" : `${i}/${s}`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0", children: [
        /* @__PURE__ */ t(
          le,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.previous,
            icon: Pi,
            onClick: c,
            disabled: !f || a,
            size: "sm"
          }
        ),
        /* @__PURE__ */ t(
          le,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.next,
            icon: Mt,
            onClick: l,
            disabled: !f || a,
            size: "sm"
          }
        )
      ] }),
      /* @__PURE__ */ t(
        le,
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
}, Zt = ({
  user: e,
  children: n
}) => {
  const r = Z();
  return /* @__PURE__ */ o(Oi, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(_i, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      zi,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          Bi,
          {
            avatar: e.avatar ?? {
              type: "person",
              firstName: e.name,
              lastName: ""
            },
            title: e.name,
            description: e.subtitle,
            secondaryActions: e.profileHref ? { label: r.chat.viewProfile, href: e.profileHref } : void 0
          }
        )
      }
    )
  ] });
}, Jo = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: g("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, Zo = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: r,
  onClose: a
}) => {
  const i = Z(), { searchOpen: s, openSearch: l } = Fe(), c = e.type === "dm" && e.presence !== void 0, d = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "relative shrink-0", children: [
      e.avatar.type === "emoji" ? (
        // Emoji groups show the glyph alone (no avatar chrome) so it reads at
        // full size instead of shrunk inside the bordered avatar box.
        /* @__PURE__ */ t("span", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ t(Me, { emoji: e.avatar.emoji, size: "sm" }) })
      ) : /* @__PURE__ */ t(Ge, { size: "sm", avatar: e.avatar }),
      c && /* @__PURE__ */ t(Jo, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      X,
      {
        icon: $i,
        size: "sm",
        color: "secondary",
        "aria-label": i.chat.muted
      }
    ),
    e.statuses?.map((f) => /* @__PURE__ */ t(
      X,
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
    /* @__PURE__ */ t(Xo, {})
  ) : /* @__PURE__ */ o(se, { children: [
    e.user ? /* @__PURE__ */ t(Zt, { user: e.user, children: d }) : d,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        le,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.search,
          icon: jt,
          onClick: l
        }
      ),
      r && /* @__PURE__ */ t(
        le,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? i.actions.collapse : i.actions.expand,
          icon: n ? Mi : ji,
          onClick: r
        }
      ),
      a && /* @__PURE__ */ t(
        le,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.close,
          icon: we,
          onClick: a
        }
      )
    ] })
  ] }) });
}, Jr = (e, n) => {
  const r = document.createElement("a");
  r.href = e, r.download = n, r.rel = "noreferrer", r.click();
}, Je = ({
  icon: e,
  label: n,
  onClick: r
}) => /* @__PURE__ */ t("span", { className: "pointer-events-auto flex rounded bg-f1-background shadow-sm", children: /* @__PURE__ */ t(
  le,
  {
    variant: "neutral",
    hideLabel: !0,
    icon: e,
    label: n,
    onClick: r
  }
) }), ec = () => {
  const e = Z(), { imagePreview: n, closeImagePreview: r, setImagePreviewIndex: a } = Fe(), [i, s] = A(null);
  H(() => s(document.body), []);
  const l = n !== null, c = n?.images ?? [], d = c.length, f = n?.index ?? 0, u = c[f], m = d > 1, p = K(
    (h) => {
      d !== 0 && a((f + h + d) % d);
    },
    [d, f, a]
  );
  return H(() => {
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
        h || r();
      },
      children: u && /* @__PURE__ */ o(
        Is,
        {
          container: i,
          className: "h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none",
          withTranslateAnimation: !1,
          "aria-describedby": void 0,
          children: [
            /* @__PURE__ */ t(Wi, { className: "sr-only", children: u.name || e.chat.imagePreview }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "aria-label": e.chat.closePreview,
                className: "absolute inset-0 cursor-default",
                onClick: r
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
                  icon: fr,
                  label: e.chat.download,
                  onClick: () => Jr(u.url, u.name)
                }
              ),
              /* @__PURE__ */ t(
                Je,
                {
                  icon: we,
                  label: e.chat.closePreview,
                  onClick: r
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
}, tc = "latest", nc = 1440 * 60 * 1e3, Pn = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function en(e, n) {
  return Math.round((Pn(n) - Pn(e)) / nc);
}
function Zr(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function ea(e, n, r, a) {
  const i = en(e, n);
  if (i <= 0) return r.today;
  if (i === 1) return r.yesterday;
  if (i < 7)
    return new Intl.DateTimeFormat(a, { weekday: "long" }).format(e);
  const s = e.getFullYear() === n.getFullYear();
  return new Intl.DateTimeFormat(a, {
    day: "numeric",
    month: "short",
    ...s ? {} : { year: "numeric" }
  }).format(e);
}
function ct(e, n, r, a) {
  return `${ea(e, n, r, a)} ${Zr(e, a)}`;
}
function rc(e, n, r, a) {
  return en(e, n) <= 0 ? Zr(e, a) : ct(e, n, r, a);
}
const ac = (e, n) => n ? en(
  new Date(n.createdAt),
  new Date(e.createdAt)
) !== 0 : !0;
function ic(e, n = {}) {
  const { dividerId: r = null } = n, a = [], i = /* @__PURE__ */ new Map();
  let s = -1;
  return e.forEach((l, c) => {
    const d = e[c - 1], f = ac(l, d);
    f && a.push({
      type: "separator",
      key: `sep-${l.id}`,
      at: l.createdAt
    });
    const u = f || !d || d.author.id !== l.author.id;
    if (!u && s >= 0) {
      const m = a[s];
      m.type === "message" && (m.isLastOfRun = !1);
    }
    r && l.id === r && a.push({ type: "divider", key: "unread-divider" }), a.push({
      type: "message",
      key: l.id,
      message: l,
      isFirstOfRun: u,
      isLastOfRun: !0,
      isLastMessage: c === e.length - 1
    }), s = a.length - 1, i.set(l.id, s);
  }), { rows: a, indexById: i };
}
const sc = 80, On = 120;
function lc({
  viewportRef: e,
  virtualizer: n,
  rows: r,
  indexById: a,
  messages: i,
  hasMoreOlder: s,
  loadingOlder: l,
  onReachTop: c,
  hasMoreNewer: d = !1,
  loadingNewer: f = !1,
  onReachBottom: u
}) {
  const [m, p] = A(!1), [h, b] = A(!0), [x, y] = A(!0), T = _(!0), D = _(i[0]?.id ?? null), $ = _(i.at(-1)?.id ?? null), L = _(i.length), P = _(!1), S = _(null), M = _(null), j = K(
    (k = "smooth") => {
      r.length > 0 && n.scrollToIndex(r.length - 1, { align: "end", behavior: k });
    },
    [n, r.length]
  ), w = K(() => {
    const k = e.current, O = S.current;
    if (!k || !O) return null;
    const v = a.get(O.id);
    if (v == null) return null;
    const C = (n.getOffsetForIndex(v, "start")?.[0] ?? 0) - O.delta;
    return k.scrollTop = C, C;
  }, [e, a, n]), R = K(
    (k) => {
      const O = n.getVirtualItemForOffset(k);
      if (!O) return null;
      for (let v = O.index; v < r.length; v++)
        if (r[v].type === "message") return v;
      return null;
    },
    [n, r]
  ), I = K(() => {
    const k = e.current;
    if (!k) return;
    const { scrollTop: O, scrollHeight: v, clientHeight: N } = k, C = v - O - N, E = C < sc;
    if (T.current = E, b(E), p(C > N * 0.5), y(O <= 0), O < On && s && !l) {
      const Y = R(O), J = Y != null ? r[Y] : null;
      if (J && J.type === "message") {
        const W = n.getOffsetForIndex(Y, "start")?.[0] ?? 0;
        S.current = { id: J.message.id, delta: W - O };
      }
      c();
    }
    C < On && d && !f && u?.();
  }, [
    e,
    s,
    l,
    c,
    d,
    f,
    u,
    R,
    r,
    n
  ]);
  return st(() => {
    const k = e.current;
    if (!k) return;
    if (!P.current && r.length > 0) {
      d || (n.scrollToIndex(r.length - 1, { align: "end" }), b(!0)), y(k.scrollHeight - k.clientHeight <= 0), P.current = !0, D.current = i[0]?.id ?? null, $.current = i.at(-1)?.id ?? null, L.current = i.length;
      return;
    }
    const O = i[0]?.id ?? null, v = i.at(-1), N = i.length > L.current, C = N && O !== D.current, E = N && v?.id !== $.current;
    if (C && S.current) {
      M.current != null && cancelAnimationFrame(M.current);
      let Y = w(), J = 0, W = 0;
      const de = () => {
        const oe = w();
        if (W += 1, oe != null && Y != null && Math.abs(oe - Y) < 1 ? J += 1 : J = 0, Y = oe, oe == null || J >= 2 || W >= 12) {
          S.current = null, M.current = null;
          return;
        }
        M.current = requestAnimationFrame(de);
      };
      M.current = requestAnimationFrame(de);
    } else E && !d && (v?.isMine || T.current) && (n.scrollToIndex(r.length - 1, { align: "end" }), b(!0));
    D.current = O, $.current = v?.id ?? null, L.current = i.length;
  }, [
    i,
    r.length,
    e,
    n,
    a,
    d,
    w
  ]), st(
    () => () => {
      M.current != null && cancelAnimationFrame(M.current);
    },
    []
  ), { scrolledUp: m, atBottom: h, atTop: x, scrollToBottom: j, handleScroll: I };
}
const oc = {
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
}, cc = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, ta = (e) => oc[nr(cc(e)) ?? "viridian"], dc = ({
  reply: e
}) => {
  const { jumpToMessage: n } = Fe(), { currentUserId: r } = De(), a = Z(), { icon: i, label: s, thumbnailUrl: l } = Xr(e), d = e.author.id === r ? a.chat.you : e.author.name;
  return /* @__PURE__ */ t("div", { className: "p-1 pb-0", children: /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: () => n(e.id),
      className: g(
        "flex w-full items-center overflow-hidden rounded-xl text-left",
        "bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5 p-2.5", children: [
          /* @__PURE__ */ t(
            xe,
            {
              className: g(
                "text-sm font-medium",
                ta(e.author)
              ),
              children: d
            }
          ),
          /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
            i && /* @__PURE__ */ t(X, { icon: i, size: "sm", color: "default" }),
            /* @__PURE__ */ t(xe, { className: "min-w-0 text-base", lines: 1, children: s })
          ] })
        ] }),
        l && /* @__PURE__ */ t(
          "img",
          {
            src: l,
            alt: "",
            className: "h-12 w-12 shrink-0 self-stretch object-cover"
          }
        )
      ]
    }
  ) });
}, uc = ({
  message: e,
  isMine: n,
  author: r
}) => {
  const a = Z();
  return e.deleted ? /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "w-fit max-w-full rounded-2xl px-3.5 py-2.5",
        "text-sm italic text-f1-foreground",
        "border border-solid border-f1-border-secondary",
        n ? "bg-f1-background-tertiary" : "bg-f1-background"
      ),
      children: a.chat.deletedMessage
    }
  ) : /* @__PURE__ */ t("div", { className: "bg-f1-background rounded-2xl", children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-fit max-w-full flex-col rounded-2xl text-f1-foreground font-normal",
        "whitespace-pre-wrap break-words",
        "border border-solid border-f1-border-secondary",
        // Mine: grey. Others: white with a subtle border (matches the design).
        n ? "bg-f1-background-tertiary" : "bg-transparent",
        e.status === "failed" && "opacity-60"
      ),
      children: [
        e.replyTo && /* @__PURE__ */ t(dc, { reply: e.replyTo }),
        /* @__PURE__ */ o("div", { className: "px-3.5 py-2.5", children: [
          r && /* @__PURE__ */ t(Zt, { user: r, children: /* @__PURE__ */ t(
            "span",
            {
              className: g(
                "mb-0.5 block w-fit cursor-default text-sm font-medium",
                ta(r)
              ),
              children: r.name
            }
          ) }),
          e.body
        ] })
      ]
    }
  ) });
}, Nt = ({
  label: e,
  value: n
}) => /* @__PURE__ */ o("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), fc = ({
  message: e,
  onBack: n
}) => {
  const r = Z(), { channel: a } = De(), i = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, s = /* @__PURE__ */ new Date(), l = a.type === "group";
  return /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        le,
        {
          icon: Ui,
          onClick: n,
          label: r.chat.back,
          variant: "ghost",
          hideLabel: !0,
          size: "sm"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: r.chat.info })
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 px-3 py-3", children: [
      e.isMine && (l ? /* @__PURE__ */ t(
        Nt,
        {
          label: r.t(
            (e.readByCount ?? 0) === 1 ? "chat.readBy.one" : "chat.readBy.other",
            { count: e.readByCount ?? 0 }
          )
        }
      ) : e.readAt && /* @__PURE__ */ t(
        Nt,
        {
          label: r.chat.read,
          value: ct(new Date(e.readAt), s, i)
        }
      )),
      /* @__PURE__ */ t(
        Nt,
        {
          label: r.chat.delivered,
          value: ct(new Date(e.createdAt), s, i)
        }
      )
    ] })
  ] });
}, mc = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], hc = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", Ze = ({
  icon: e,
  label: n,
  onClick: r,
  trailing: a
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: r,
    className: g(hc, pe("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(X, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      a
    ]
  }
), pc = ({
  message: e,
  isMine: n,
  open: r,
  onOpenChange: a
}) => {
  const i = Z(), { toggleReaction: s, deleteMessage: l } = De(), { setReplyTo: c } = Fe(), [d, f] = A("menu"), u = (h) => {
    a(h), h || f("menu");
  }, m = (h) => {
    s(e.id, h), u(!1);
  }, p = (h) => () => {
    h(), u(!1);
  };
  return /* @__PURE__ */ o(Xn, { open: r, onOpenChange: u, children: [
    /* @__PURE__ */ t(Jn, { asChild: !0, children: /* @__PURE__ */ t(
      le,
      {
        variant: "outline",
        hideLabel: !0,
        label: i.chat.moreActions,
        icon: Hi,
        pressed: r
      }
    ) }),
    /* @__PURE__ */ t(
      Zn,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: d === "info" ? /* @__PURE__ */ t(
          fc,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ o(se, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
            mc.map((h) => /* @__PURE__ */ t(
              le,
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
                icon: Vi,
                label: i.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  X,
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
                icon: cr,
                label: i.chat.reply,
                onClick: p(() => c(e))
              }
            ),
            /* @__PURE__ */ t(
              Ze,
              {
                icon: Gi,
                label: i.actions.copy,
                onClick: p(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ o(se, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              Ze,
              {
                icon: lr,
                label: i.actions.delete,
                onClick: p(() => l(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, gc = ({
  message: e,
  isMine: n
}) => {
  const r = Z(), { openImagePreview: a } = Fe(), i = e.attachments;
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
            onClick: () => a(s, f),
            className: "block overflow-hidden rounded-xl transition-opacity hover:opacity-90",
            "aria-label": r.chat.openImage,
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
          ur,
          {
            size: "md",
            file: { name: d.name, type: d.mimeType ?? "" },
            actions: [
              {
                label: r.chat.download,
                icon: fr,
                onClick: () => Jr(d.url, d.name)
              }
            ]
          },
          `${d.url}-${f}`
        )) })
      ]
    }
  );
}, bc = ({
  message: e,
  isMine: n
}) => {
  const r = Z(), { toggleReaction: a } = De();
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
            Pr,
            {
              emoji: i.emoji,
              initialCount: i.count,
              hasReacted: i.reactedByMe,
              users: i.users,
              onInteraction: (s) => a(e.id, s)
            },
            `${i.emoji}-${i.count}-${i.reactedByMe}`
          )
        )),
        /* @__PURE__ */ t(
          Ke,
          {
            size: "md",
            variant: "outline",
            label: r.chat.react,
            onSelect: (i) => a(e.id, i)
          }
        )
      ]
    }
  );
}, xc = ({
  message: e,
  isMine: n,
  author: r,
  bubbleGutter: a,
  belowGutter: i
}) => {
  const [s, l] = A(!1), { highlightedId: c } = Fe(), d = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0 || !!e.replyTo, p = m || u;
  return /* @__PURE__ */ o(
    "div",
    {
      "data-msg-id": e.id,
      className: g(
        "group flex flex-col",
        n ? "items-end" : "items-start"
      ),
      children: [
        p && /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "flex w-full gap-2",
              n ? "flex-row-reverse items-center" : "items-end"
            ),
            children: [
              a,
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
                          u && /* @__PURE__ */ t(gc, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(uc, { message: e, isMine: n, author: r })
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
                          pc,
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
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(bc, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, vc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...r } = e.avatar;
    return r;
  }
  return { firstName: e.name, lastName: "" };
}, yc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: g(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), wc = ({
  users: e,
  isGroup: n
}) => {
  const r = Z(), a = ke();
  if (e.length === 0) return null;
  let i = r.chat.writing;
  return n && (e.length === 1 ? i = r.t("chat.isTyping", { name: e[0].name }) : e.length === 2 ? i = r.t("chat.twoTyping", {
    first: e[0].name,
    second: e[1].name
  }) : i = r.chat.severalTyping), // Eases in (fade + slight rise, scaling up from the bottom-left like an
  // incoming bubble) so the dots don't pop. It's always the last row, so the
  // scale-driven height change can't disturb the messages above.
  /* @__PURE__ */ o(
    te.div,
    {
      role: "status",
      "aria-label": i,
      className: "flex w-full items-end gap-2",
      style: { transformOrigin: "bottom left" },
      initial: a ? !1 : { opacity: 0, y: 6, scale: 0.95 },
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
              avatars: e.map(vc)
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
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(yc, { animate: !a }) })
      ]
    }
  );
}, na = ({
  at: e,
  withTime: n = !1
}) => {
  const r = Z(), a = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, i = new Date(e), s = /* @__PURE__ */ new Date(), l = n ? ct(i, s, a) : ea(i, s, a);
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: l }) });
}, Nc = ({
  message: e,
  isGroup: n
}) => {
  const r = Z(), a = ke(), i = rc(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  });
  let s = i;
  return e.isMine && (e.status === "failed" ? s = r.chat.error : e.status === "read" ? s = n && e.readByCount ? r.t(
    e.readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: e.readByCount }
  ) : `${r.chat.read} ${i}` : e.status === "sent" && (s = `${r.chat.sent} ${i}`)), /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: /* @__PURE__ */ t(
        te.span,
        {
          className: "inline-block",
          initial: a ? !1 : { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: a ? 0 : 0.15 },
          children: s
        },
        s
      )
    }
  );
}, Cc = ({
  leaving: e = !1
}) => {
  const n = Z(), r = ke();
  return /* @__PURE__ */ o(
    te.div,
    {
      className: "flex items-center gap-2 py-2",
      initial: !1,
      animate: { opacity: e ? 0 : 1 },
      transition: { duration: r ? 0 : 0.26, ease: "easeOut" },
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
), kc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-4" : "pt-1" : "pt-4", Ic = ({
  row: e,
  isGroup: n,
  isFirstRow: r,
  isLastRow: a,
  enterAnimation: i,
  animatedIds: s,
  dividerLeaving: l = !1
}) => {
  const c = g(kc(e, r), a && "pb-6"), [d] = A(
    () => i && e.type === "message" && e.isLastMessage && !s.has(e.message.id)
  );
  if (H(() => {
    e.type === "message" && s.add(e.message.id);
  }, [e, s]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(na, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(Cc, { leaving: l }) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(wc, { users: e.users, isGroup: n }) });
  const { message: f, isFirstOfRun: u, isLastOfRun: m, isLastMessage: p } = e, h = f.isMine, b = n && !h, x = b ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: _n(f.author) }) : void 0, y = b ? m ? /* @__PURE__ */ t(Zt, { user: f.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: _n(f.author) }) }) : x : void 0, T = /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ t(
      xc,
      {
        message: f,
        isMine: h,
        author: b && u ? f.author : void 0,
        bubbleGutter: y,
        belowGutter: x
      }
    ),
    p && /* @__PURE__ */ o("div", { className: "flex w-full gap-2", children: [
      x,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Nc, { message: f, isGroup: n }) })
    ] })
  ] });
  return d ? (
    // WhatsApp-style arrival: the bubble springs up into place from its own
    // corner (mine → bottom-right, theirs → bottom-left) with a soft fade and a
    // barely-there scale. A spring (not a fixed tween) gives the gentle, natural
    // settle. Only the last row animates, so the brief scale-driven height change
    // can't disturb rows above it.
    /* @__PURE__ */ t(
      te.div,
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
}, Sc = ms(Ic), Fc = 280, Tc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, Ac = (e, n) => {
  for (let r = n; r < e.length; r++) {
    const a = e[r];
    if (a.type === "message") return a.message.createdAt;
    if (a.type === "separator") return a.at;
  }
  return null;
}, Rc = () => {
  const e = Z(), {
    messages: n,
    channel: r,
    typingUsers: a,
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
  } = De(), b = ke(), x = r.type === "group", y = _(null), { registerScrollToMessage: T } = Fe(), [D, $] = A(!1), [L, P] = A(p), [S, M] = A(!1), j = _(r.id), w = _(null), R = _(
    n[n.length - 1]?.id ?? null
  ), { rows: I, indexById: k } = ne(
    () => ic(n, { dividerId: L }),
    [n, L]
  ), O = ne(
    () => a.length > 0 ? [...I, { type: "typing", key: "typing", users: a }] : I,
    [I, a]
  ), v = Kn({
    count: O.length,
    getScrollElement: () => y.current,
    estimateSize: (V) => Tc(O[V]),
    getItemKey: (V) => O[V].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (V) => Math.round(V.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: N, atBottom: C, atTop: E, scrollToBottom: Y, handleScroll: J } = lc({
    viewportRef: y,
    virtualizer: v,
    rows: O,
    indexById: k,
    messages: n,
    hasMoreOlder: i,
    loadingOlder: s,
    onReachTop: l,
    hasMoreNewer: c,
    loadingNewer: d,
    onReachBottom: f
  }), W = a.length > 0, de = _(!1);
  H(() => {
    W && !de.current && C && Y("smooth"), de.current = W;
  }, [W, C, Y]);
  const oe = _(null), z = K(() => {
    const V = oe.current;
    if (!V) return;
    if (V.kind === "bottom") {
      O.length > 0 && (v.scrollToIndex(O.length - 1, { align: "end" }), oe.current = null);
      return;
    }
    const he = k.get(V.id);
    he != null && (v.scrollToIndex(he, { align: "center", behavior: "smooth" }), oe.current = null);
  }, [k, v, O.length]);
  H(z, [z]), H(() => {
    T((V) => {
      oe.current = { kind: "id", id: V }, z();
    });
  }, [T, z]);
  const ee = K(() => {
    c && u ? (oe.current = { kind: "bottom" }, u(tc)) : Y();
  }, [c, u, Y]), me = C && D;
  H(() => {
    me && m > 0 && h?.();
  }, [me, m, h]);
  const ue = _(C);
  ue.current = C;
  const F = K(() => {
    w.current && (clearTimeout(w.current), w.current = null);
  }, []);
  H(() => {
    j.current !== r.id && (j.current = r.id, F(), M(!1), P(p));
  }, [r.id, p, F]), H(() => {
    const V = n[n.length - 1];
    !V || V.id === R.current || (R.current = V.id, !(!V.isMine || !L || S) && (M(!0), w.current = setTimeout(() => {
      w.current = null, P(null), M(!1), ue.current && Y("auto");
    }, Fc)));
  }, [n, L, S, Y]), H(() => F, [F]);
  const Q = _(null);
  Q.current === null && n.length > 0 && (Q.current = new Set(n.map((V) => V.id)));
  const B = Q.current ?? Lc, q = v.getVirtualItems(), fe = q[0], U = fe ? Ac(O, fe.index) : null, re = N || c;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => $(!0),
      onMouseLeave: () => $(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: y,
            onScroll: J,
            className: "absolute inset-0 overflow-y-auto px-4",
            children: /* @__PURE__ */ t(
              "div",
              {
                className: "relative mx-auto w-full max-w-content",
                style: { height: v.getTotalSize() },
                children: /* @__PURE__ */ t(
                  "div",
                  {
                    className: "absolute left-0 top-0 w-full",
                    style: {
                      transform: `translateY(${q[0]?.start ?? 0}px)`
                    },
                    children: q.map((V) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": V.index,
                        ref: v.measureElement,
                        children: /* @__PURE__ */ t(
                          Sc,
                          {
                            row: O[V.index],
                            isGroup: x,
                            isFirstRow: V.index === 0,
                            isLastRow: V.index === O.length - 1,
                            enterAnimation: !b,
                            animatedIds: B,
                            dividerLeaving: O[V.index].type === "divider" ? S : !1
                          }
                        )
                      },
                      V.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ce, { children: !E && /* @__PURE__ */ t(Ki, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(Ce, { children: N && U && /* @__PURE__ */ t(
          te.div,
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
                  /* @__PURE__ */ t(na, { at: U, withTime: !0 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(Ce, { children: re && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          te.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              le,
              {
                onClick: ee,
                variant: "neutral",
                icon: qi,
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
}, Lc = /* @__PURE__ */ new Set(), Ee = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t(G, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((r, a) => /* @__PURE__ */ t(G, { className: g("h-8 rounded-2xl", r) }, a))
        }
      )
    ]
  }
), Dc = () => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": !0,
    className: "mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4",
    children: [
      /* @__PURE__ */ t(Ee, { mine: !1, widths: ["w-48", "w-32"] }),
      /* @__PURE__ */ t(Ee, { mine: !0, widths: ["w-56"] }),
      /* @__PURE__ */ t(Ee, { mine: !1, widths: ["w-40"] }),
      /* @__PURE__ */ t(Ee, { mine: !0, widths: ["w-44", "w-28"] }),
      /* @__PURE__ */ t(Ee, { mine: !1, widths: ["w-52", "w-36"] }),
      /* @__PURE__ */ t(Ee, { mine: !0, widths: ["w-36"] }),
      /* @__PURE__ */ t(Ee, { mine: !1, widths: ["w-44"] })
    ]
  }
), Ec = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), Pc = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(Dc, {}) }), Oc = () => {
  const e = Z();
  return /* @__PURE__ */ t(Ec, { children: e.chat.error });
}, _c = () => {
  const e = Z();
  return /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center p-6", children: /* @__PURE__ */ t(
    yr,
    {
      emoji: "💬",
      title: e.chat.emptyConversation,
      description: e.chat.emptyConversationDescription
    }
  ) });
}, et = (e) => e.dataTransfer?.types?.includes("Files"), zc = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: r
}) => {
  const { channel: a, status: i, messages: s } = De(), { dropFiles: l } = Fe(), c = _(0), [d, f] = A(!1);
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
          Zo,
          {
            channel: a,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: r
          }
        ),
        i === "connecting" ? /* @__PURE__ */ t(Pc, {}) : i === "error" ? /* @__PURE__ */ t(Oc, {}) : s.length === 0 ? /* @__PURE__ */ t(_c, {}) : /* @__PURE__ */ t(Rc, {}),
        /* @__PURE__ */ t(Yo, {}),
        /* @__PURE__ */ t(Qo, { visible: d }),
        /* @__PURE__ */ t(ec, {})
      ]
    }
  );
}, Hu = (e) => /* @__PURE__ */ t(Wo, { children: /* @__PURE__ */ t(zc, { ...e }) }), tn = {
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
}, Bc = Ae({
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
}), $c = ve.forwardRef(function({ className: n, gap: r, children: a, tileSize: i, ...s }, l) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: l, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(Bc({ gap: r, tileSize: i }), n),
      ref: l,
      ...s,
      children: a
    }
  ) });
}), Mc = Ae({
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
}), ra = ie(function({
  className: n,
  grow: r,
  basis: a,
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
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        Mc({
          paddingX: s,
          basis: a,
          paddingY: l,
          grow: r,
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
      ref: x,
      ...b
    }
  );
}), jc = Ae({
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
}), Wc = ve.forwardRef(function({ className: n, gap: r, wrap: a, ...i }, s) {
  return /* @__PURE__ */ t(
    ra,
    {
      className: g(jc({ gap: r, wrap: a }), n),
      ref: s,
      ...i
    }
  );
}), Uc = Ae({
  base: "flex-col",
  variants: {
    gap: {
      ...tn
    }
  },
  defaultVariants: {}
}), Hc = ie(function({ className: n, gap: r, children: a, ...i }, s) {
  return /* @__PURE__ */ t(
    ra,
    {
      className: g(Uc({ gap: r }), n),
      ref: s,
      ...i,
      children: a
    }
  );
}), Vu = Ie(
  {
    name: "Stack",
    type: "layout"
  },
  Hc
), Gu = Ie(
  {
    name: "Split",
    type: "layout"
  },
  Wc
), Ku = Ie(
  {
    name: "AutoGrid",
    type: "layout"
  },
  $c
), Vc = ({ children: e }) => {
  const { enabled: n } = wr();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        te.div,
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
}, Gc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Kc = ie(function({ header: n, children: r, action: a, summaries: i, alert: s, status: l, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = wr();
  H(() => {
    if (s && l)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, l]);
  const m = (h) => !!h && !(ve.isValidElement(h) && h.type === ve.Fragment && ve.Children.count(h.props.children) === 0), p = () => {
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
                /* @__PURE__ */ t(Gc, {}),
                /* @__PURE__ */ t(mr, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Re, { label: n.info, children: /* @__PURE__ */ t(
                X,
                {
                  icon: hr,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(ft, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(pr, { text: s, level: "critical" }),
              l && /* @__PURE__ */ t(at, { text: l.text, variant: l.variant }),
              n.link && /* @__PURE__ */ t(
                Yi,
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
            /* @__PURE__ */ t(Vc, { children: /* @__PURE__ */ t(Qi, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              ae,
              {
                icon: f ? Xi : Ji,
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
          ve.Children.toArray(r).filter(m).map((h, b) => /* @__PURE__ */ o(ve.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t(Ss, { bare: !0 }),
            h
          ] }, b))
        ] }),
        a && /* @__PURE__ */ t(Zi, { children: /* @__PURE__ */ t(ae, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), qc = Ae({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Yc = ie(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      Ut,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Ht, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Vt, { children: n.title }) : /* @__PURE__ */ t(G, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(mr, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Gt,
            {
              "aria-hidden": !0,
              className: g(r !== "full" && qc({ height: r })),
              children: [...Array(4)].map((i, s) => /* @__PURE__ */ t(
                G,
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
), ze = be(
  ce("Widget", ge(Kc, Yc))
), Ne = Object.assign(
  ie(function({ chart: n, summaries: r, ...a }, i) {
    return /* @__PURE__ */ t(ze, { ref: i, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), Qc = ge(
  ie(function({ canBeBlurred: n, ...r }, a) {
    const i = {
      ...r,
      header: {
        ...r.header,
        canBeBlurred: n
      }
    }, s = {
      ...r.chart,
      yAxis: r.chart.yAxis ? { ...r.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      Ne,
      {
        ref: a,
        ...i,
        chart: /* @__PURE__ */ t(Fs, { ...s, canBeBlurred: n })
      }
    );
  }),
  Ne.Skeleton
), Xc = ce(
  "AreaChartWidget",
  Qc
), Jc = ie(function(n, r) {
  return /* @__PURE__ */ t(
    Ne,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(Ts, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Zc = ce(
  "BarChartWidget",
  ge(Jc, Ne.Skeleton)
), ed = ge(
  ie(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ne,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(As, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  Ne.Skeleton
), td = ce(
  "LineChartWidget",
  ed
), nd = ge(
  ie(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ne,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(Rs, { ...n.chart })
        }
      );
    }
  ),
  Ne.Skeleton
), rd = ce(
  "PieChartWidget",
  nd
), ad = ge(
  ie(
    function(n, r) {
      return /* @__PURE__ */ t(Ne, { ref: r, ...n, chart: null });
    }
  ),
  Ne.Skeleton
), id = ce(
  "SummariesWidget",
  ad
), sd = ge(
  ie(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ne,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(Ls, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  Ne.Skeleton
), ld = ce(
  "VerticalBarChartWidget",
  sd
), qu = Ie(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Xc
), Yu = Ie(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Zc
), Qu = Ie(
  {
    name: "LineChartWidget",
    type: "info"
  },
  td
), Xu = Ie(
  {
    name: "PieChartWidget",
    type: "info"
  },
  rd
), Ju = Ie(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  ld
), Zu = Ie(
  {
    name: "SummariesWidget",
    type: "info"
  },
  id
), od = (e, n) => /* @__PURE__ */ o(
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
), cd = ie(od), dd = (e, n) => /* @__PURE__ */ o(
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
), ud = ie(dd), fd = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, md = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, hd = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, pd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, gd = ie(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: i, buttonAction: s, type: l }, c) {
    const d = fd[l], f = md[l], u = hd[l], m = pd[l];
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
                  l === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(cd, { className: "w-full" }) }),
                  l === "line-chart" && /* @__PURE__ */ t(ud, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: r }),
              a && /* @__PURE__ */ t(
                ae,
                {
                  label: a,
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
), ef = be(
  ce("ChartWidgetEmptyState", gd)
);
function bd(e, n) {
  const r = _(null), a = _(null), [i, s] = A({
    visibleItems: [],
    overflowItems: []
  });
  es({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const l = K(
    (u, m, p) => m < p - 1 ? u + n : u,
    [n]
  ), c = K(() => {
    if (!a.current) return [];
    const u = a.current.children, m = [];
    for (let p = 0; p < u.length; p++) {
      const h = u[p].getBoundingClientRect().height;
      m.push(h);
    }
    return m;
  }, []), d = K(
    (u, m) => {
      let p = 0, h = 0;
      for (let b = 0; b < u.length; b++) {
        const x = h + u[b];
        if (x > m + 30) break;
        h = x, h = l(
          h,
          b,
          u.length
        ), p++;
      }
      return p;
    },
    [l]
  ), f = K(() => {
    if (!r.current || e.length === 0) return;
    const u = r.current.clientHeight, m = c(), p = d(
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
  return H(() => {
    f();
  }, [f]), {
    containerRef: r,
    measurementContainerRef: a,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const gt = function({
  items: n,
  renderListItem: r,
  className: a,
  gap: i = 0,
  minSize: s,
  onVisibleItemsChange: l
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = bd(n, i);
  return H(() => {
    l?.(f);
  }, [l, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", a),
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
            children: n.map((u, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: r(u, m, !1) }, `measure-${m}`))
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
                children: r(u, m, !0)
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
const tf = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((i) => /* @__PURE__ */ t(Et, { ...i }, i.title)) }) : /* @__PURE__ */ t(
  gt,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (i) => /* @__PURE__ */ t(Et, { ...i }, i.title)
  }
) : null, xd = ({ onClick: e, children: n }) => {
  const r = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: g(
        r,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: r, tabIndex: 1, children: n });
};
function nf({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: i
}) {
  return /* @__PURE__ */ t(xd, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        i && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(X, { icon: r, size: "md", className: a })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const vd = ie(
  function({ content: n, label: r, color: a, ...i }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
      /* @__PURE__ */ t("p", { className: "text-3xl font-semibold", children: n }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: r,
            children: r
          }
        ),
        "icon" in i && i.icon && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(X, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(Me, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), rf = ie(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: i, color: s, ...l }) => /* @__PURE__ */ t(
          vd,
          {
            label: a,
            content: i,
            color: s,
            ...l
          },
          `${a}-${i}`
        ))
      }
    );
  }
), yd = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: r,
  children: a
}) => {
  const i = g(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    r ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: i, onClick: e, children: a }) : /* @__PURE__ */ t("div", { className: i, children: a });
};
function af({
  id: e,
  title: n,
  subtitle: r,
  avatars: a,
  remainingCount: i,
  withPointerCursor: s = !1,
  onClick: l,
  ...c
}) {
  return /* @__PURE__ */ o(
    yd,
    {
      onClick: (f) => {
        f.preventDefault(), l?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(dr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ts, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Wt,
          {
            avatars: a,
            remainingCount: i,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const wd = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function zn({
  id: e,
  title: n,
  subtitle: r,
  onClick: a,
  module: i
}) {
  const s = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(wd, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(rr, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const Nd = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function Pt({
  id: e,
  title: n,
  alert: r,
  rawTag: a,
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
  return /* @__PURE__ */ o(Nd, { onClick: (p) => {
    p.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        X,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        X,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ t(pr, { ...r }),
      a && /* @__PURE__ */ t($e, { ...a }),
      !!i && /* @__PURE__ */ t(ft, { value: i })
    ] })
  ] });
}
function sf({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: i
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(zn, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    gt,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(zn, { ...s, onClick: r }, s.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function lf({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((s) => /* @__PURE__ */ t(Pt, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    gt,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(Pt, { ...s, onClick: a }),
      minSize: r
    }
  );
}
const Cd = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), of = ie(
  function({ title: n, titleValue: r, titleTooltip: a, list: i }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          a && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            Re,
            {
              label: a.label,
              description: a.description,
              children: /* @__PURE__ */ t(X, { icon: hr, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      i.map((l) => /* @__PURE__ */ t(Cd, { title: l.title, info: l.info }, l.title))
    ] });
  }
);
function cf({
  title: e,
  subtitle: n,
  data: r,
  helpText: a,
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
        data: r,
        legend: i,
        hideTooltip: s
      }
    ) }),
    !!a && /* @__PURE__ */ t("div", { className: i ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: g(
          "text-f1-foreground",
          i ? "text-sm" : "text-base"
        ),
        children: a
      }
    ) })
  ] });
}
const aa = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, kd = ({
  data: e = [],
  labels: n,
  trackedMinutes: r,
  remainingMinutes: a,
  canSeeRemainingTime: i = !0
}) => {
  const l = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[l], d = (() => {
    if (!i || a === void 0) return;
    const u = aa(
      r,
      a
    ), m = Math.abs(u), p = Math.floor(m / 60), h = Math.floor(m % 60), b = `${p.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = Pe[l];
  return {
    status: l,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, Ct = "--:--", Id = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: Pe.empty
    };
  if (!n)
    return {
      value: 1,
      color: Pe.empty
    };
}, Sd = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, i = aa(
    n,
    r
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, l = a || (i ?? 0) < 0 ? void 0 : Id(
    i ?? 0,
    s
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, h = m.variant === "clocked-in" ? Math.min(p, c) : 0, x = (p - h) / s;
        return c -= h, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: h / s + x,
            color: Pe.overtime
          }
        ] : [
          ...u,
          {
            value: h / s,
            color: Pe.overtime
          },
          {
            value: x,
            color: Pe[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...l ? [l] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: Pe.empty
  }), f;
}, Fd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((p) => p.variant === "clocked-in")?.from, i = e.at(-1), s = a ? an(a) : Ct, l = n === void 0 || n > 0 ? Ct : i ? an(i.to) : Ct, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: l,
    time: m
  };
}, Pe = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Td({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = Sd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: i, secondaryLabel: s, time: l } = Fd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Es, { width: 156, height: 156, children: /* @__PURE__ */ t(
      Ps,
      {
        data: a,
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
        children: a.map((c, d) => /* @__PURE__ */ t(
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
  icon: r,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
      onClick: a,
      children: [
        r && /* @__PURE__ */ t(X, { icon: r, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(X, { icon: rs })
      ]
    }
  );
}
function df({
  trackedMinutes: e,
  remainingMinutes: n,
  data: r = [],
  labels: a,
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
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: T = !0,
  projectSelectorElement: D,
  breakTypeName: $
}) {
  const { status: L, statusText: P, subtitle: S, statusColor: M } = kd({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), j = L === "clocked-out", w = m?.map((W) => ({
    value: W.id,
    label: W.duration ? `${W.name} · ${W.duration}` : W.name,
    description: W.description,
    tag: W.isPaid ? a.paid : a.unpaid
  })) ?? [], [R, I] = A(!1), k = () => {
    if (w.length > 1)
      R || I(!0);
    else {
      const W = w?.[0]?.value;
      u?.(W);
    }
  }, O = (W) => {
    p?.(W), I(!1), u?.(W);
  }, v = j && s.length && !c && l, N = s.find((W) => W.id === i), C = s.map((W) => ({
    value: W.id,
    label: W.name,
    icon: W.icon
  })), E = L === "break", [Y, J] = A(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: P }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                te.div,
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
          L === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            ae,
            {
              onClick: d,
              label: a.clockIn,
              icon: sn
            }
          ) }),
          L === "clocked-in" && /* @__PURE__ */ o(se, { children: [
            h && /* @__PURE__ */ t(se, { children: w.length > 1 && p ? /* @__PURE__ */ t(
              it,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: O,
                open: R,
                onOpenChange: I,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  ae,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: ln,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              ae,
              {
                onClick: k,
                label: a.break,
                variant: "neutral",
                icon: ln,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              ae,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: on
              }
            )
          ] }),
          L === "break" && /* @__PURE__ */ o(se, { children: [
            /* @__PURE__ */ t(
              ae,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: on,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              ae,
              {
                onClick: d,
                label: a.resume,
                icon: sn
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        Td,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(se, { children: [
      /* @__PURE__ */ t(
        it,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: i,
          options: C,
          onChange: y,
          open: Y,
          onOpenChange: J,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Ad,
            {
              text: N?.name,
              placeholder: a.selectLocation,
              icon: N?.icon
            }
          ) })
        }
      ),
      T && D
    ] }) : /* @__PURE__ */ o(se, { children: [
      l && N && /* @__PURE__ */ t(se, { children: /* @__PURE__ */ t($e, { text: N.name, icon: N.icon }) }),
      T && D,
      E && $ && /* @__PURE__ */ t($e, { text: $ })
    ] }) })
  ] }) });
}
const Rd = {
  done: ss,
  "in-progress": is,
  todo: as
}, Ld = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Dd({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const i = () => {
    r?.(e);
  }, s = ne(() => {
    if (!a)
      return Rd[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    Pt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: Ld[n],
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
function uf({
  tasks: e,
  onClickTask: n,
  hideIcons: r = !1,
  maxTasksToShow: a = 5,
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
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : l.slice(0, a).map((d) => /* @__PURE__ */ t(
    Dd,
    {
      task: d,
      status: d.status,
      hideIcon: r,
      onClick: n
    },
    d.id
  )) });
}
var Ed = Object.defineProperty, Pd = Object.defineProperties, Od = Object.getOwnPropertyDescriptors, dt = Object.getOwnPropertySymbols, ia = Object.prototype.hasOwnProperty, sa = Object.prototype.propertyIsEnumerable, Bn = (e, n, r) => n in e ? Ed(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, ye = (e, n) => {
  for (var r in n || (n = {})) ia.call(n, r) && Bn(e, r, n[r]);
  if (dt) for (var r of dt(n)) sa.call(n, r) && Bn(e, r, n[r]);
  return e;
}, bt = (e, n) => Pd(e, Od(n)), _d = (e, n) => {
  var r = {};
  for (var a in e) ia.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && dt) for (var a of dt(e)) n.indexOf(a) < 0 && sa.call(e, a) && (r[a] = e[a]);
  return r;
}, zd = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Bd = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), $d = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = ye({}, n);
    return a.right = e.left, a;
  }
  return null;
}, Md = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = ye({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, jd = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let i = ye({}, a);
  return i.left = n.left + e.width, zd(i) || Bd({ usedSpot: i, spotsList: r }) ? null : i;
}, Wd = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((i, s, l) => {
  if (i === r) return jd({ stone: a, position: n, optimalSpot: r, spotsList: l });
  let c = $d({ position: n, spot: i, stone: a });
  return c || Md({ position: n, stone: a, spot: i }) || i;
});
function Ud(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let i = n[r];
    if (e(i)) return i;
  }
  return null;
}
var Hd = (e, n) => n.filter(e), Vd = (e, n) => [...n].sort(e), Gd = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Kd = (e) => Vd(Gd, e), qd = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
  let i = { right: r, top: n.top + a.height, left: n.left };
  n.bottom && (i.bottom = n.bottom);
  for (let s = 0, l = e.length; s < l; s += 1) {
    let c = e[s];
    if (i.left < c.left && i.top < c.top) {
      i.right = c.left;
      break;
    }
  }
  return i;
}, Yd = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, Qd = ({ availableSpots: e, stone: n }) => Ud((r) => Yd(r, n), e);
function Xd({ stone: e, availableSpots: n, containerSize: r }) {
  let a = Qd({ availableSpots: n, stone: e }), i = { left: a.left, top: a.top }, s = qd({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), l = [...n, s], c = Wd({ spots: l, position: i, optimalSpot: a, stone: e });
  return l = [...Hd(Boolean, c)], l = Kd(l), { position: i, availableSpots: l };
}
var Jd = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, i = [], s = [{ top: 0, left: 0, right: n }];
  for (let l of e) {
    let c = Xd({ availableSpots: s, stone: l, containerSize: n }), d = c.position.top + l.height;
    a < d && (a = d), i.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: i, containerHeight: a };
}, Zd = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), eu = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: i }) => {
  let [{ positions: s, containerHeight: l, stones: c, availableSpots: d }, f] = A({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return H(() => {
    var u, m;
    let p = Zd(e.current), h = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (h === null) return;
    let b = Jd({ stones: p, containerSize: h });
    f(bt(ye({}, b), { stones: p }));
  }, [r, e, n, a, i]), { positions: s, containerHeight: l, stones: c, availableSpots: d };
}, tu = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), nu = ({ transition: e, transitionDuration: n }) => e ? { transition: tu(n)[e] } : null, ru = (e) => e ? bt(ye({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, au = ({ style: e, position: n, transition: r, transitionDuration: a }) => ye(ye(bt(ye({}, e), { position: "absolute" }), ru(n)), nu({ transition: r, transitionDuration: a }));
function iu(e, n, r) {
  let a;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, i);
    }, n);
  };
}
var su = () => {
  let [e, n] = A(), r = _(iu(n, 300));
  return H(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, lu = (e) => {
  let [n, r] = A(null);
  return H(() => {
    let a = new ResizeObserver((i) => {
      for (let s of i) r(s.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, ou = (e) => {
  var n = e, { children: r, style: a, transition: i = !1, transitionDuration: s = 500, transitionStep: l = 50 } = n, c = _d(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = _([]), f = _(null), u = su(), m = lu(f), { positions: p, containerHeight: h } = eu({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), b = ye({ minHeight: h ?? 0, position: "relative" }, a);
  return t("div", bt(ye({ ref: f, style: b }, c), { children: xr.map(r, (x, y) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let T = { style: au({ style: x.props.style, position: p[y], transition: i, transitionDuration: s }), ref: (D) => d.current[y] = D };
    return br(x, ye(ye({}, x.props), T));
  }) }));
};
const cu = { sm: 340, md: 480, lg: 640 }, $n = ie(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const i = cu[r], [s, l] = A(), c = xr.toArray(n), d = _(null);
    return H(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && l(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [l, i]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(ou, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), du = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], ff = ge($n, () => /* @__PURE__ */ t(gr, { children: /* @__PURE__ */ t($n, { children: du.map((e, n) => /* @__PURE__ */ t(ze.Skeleton, { height: e }, n)) }) })), Mn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), mf = ge(
  ie(function({ children: n }, r) {
    return /* @__PURE__ */ t(ut, { ref: r, showBar: !1, children: /* @__PURE__ */ t(Mn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(gr, { orientation: "horizontal", children: /* @__PURE__ */ o(Mn, { children: [
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {}),
    /* @__PURE__ */ t(ze.Skeleton, {})
  ] }) })
);
function uu({
  title: e,
  description: n,
  emoji: r,
  actions: a
}) {
  if ((a?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ t(
    yr,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const hf = be(
  ce("WidgetEmptyState", uu)
), la = ie(
  ({ title: e, children: n }, r) => (os(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
la.displayName = "WidgetSection";
const pf = be(
  ce("WidgetSection", la)
), gf = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const i = cs(), s = window.location.pathname, l = ne(() => n?.length ? n.includes(s) : r?.length ? !r.includes(s) : !0, [s, n, r]), c = ne(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return l ? a : (i && console.error(c), null);
}, bf = be(
  Ie(
    {
      name: "ScrollArea",
      type: "layout"
    },
    ut
  )
);
export {
  Cu as ActivityItemList,
  zl as ActivityItemListSkeleton,
  dl as AiPromotionChat,
  ul as AiPromotionChatProvider,
  Tu as ApplicationFrame,
  Yf as AreaChart,
  qu as AreaChartWidget,
  Ku as AutoGrid,
  bi as Badge,
  Qf as BarChart,
  Yu as BarChartWidget,
  _l as BaseActivityItemList,
  Xf as BaseBanner,
  Wl as BaseCelebration,
  Xl as BaseCommunityPost,
  yf as BaseTabs,
  wf as BreadcrumbSelect,
  Ms as Breadcrumbs,
  Et as CalendarEvent,
  tf as CalendarEventList,
  Jf as CardSelectableContainer,
  hs as Carousel,
  Zf as CategoryBarChart,
  cf as CategoryBarSection,
  ku as Celebration,
  Ul as CelebrationSkeleton,
  ef as ChartWidgetEmptyState,
  Nf as Chip,
  df as ClockInControls,
  em as ComboChart,
  Su as CommunityPost,
  Jl as CommunityPostSkeleton,
  yo as CompanySelector,
  ft as Counter,
  ff as Dashboard,
  Au as DaytimePage,
  Cf as DetailsItem,
  kf as DetailsItemsList,
  tm as Dialog,
  Be as Dropdown,
  Nu as EntitySelect,
  nm as F0ActionBar,
  rm as F0AiBanner,
  rr as F0AvatarModule,
  If as F0ButtonToggle,
  vu as F0Callout,
  Sf as F0CardHorizontal,
  Hu as F0Chat,
  Uu as F0ChatProvider,
  ur as F0FileItem,
  am as F0NotesTextEditor,
  im as F0NotesTextEditorSkeleton,
  sm as F0NumberInput,
  ni as F0RichTextDisplay,
  lm as F0RichTextEditor,
  Ei as F0SearchInput,
  yu as F0SegmentedBar,
  om as F0SegmentedControl,
  cm as F0TableOfContent,
  dm as F0TextAreaInput,
  Ff as F0TextInput,
  wu as F0VersionHistory,
  um as F1SearchBox,
  fm as FILE_TYPES,
  Tf as FileItem,
  Iu as HighlightBanner,
  rf as IndicatorsList,
  mm as Input,
  hm as Item,
  pm as ItemSectionHeader,
  tc as LATEST,
  gm as LineChart,
  Qu as LineChartWidget,
  zu as Menu,
  Af as MobileDropdown,
  bm as NotesTextEditor,
  xm as NotesTextEditorSkeleton,
  vm as NumberInput,
  Ru as OmniButton,
  ju as OneApprovalHistory,
  Rf as OneCalendar,
  Lf as OneCalendarInternal,
  ym as OneDataCollection,
  wm as OneDateNavigator,
  yr as OneEmptyState,
  Nm as OnePagination,
  Fu as OnePersonListItem,
  gf as OneRestrictComponent,
  Lu as Page,
  xu as PageHeader,
  Yt as PageHeaderNavigationContext,
  gu as PageHeaderNavigationProvider,
  Ks as PageNavigation,
  Cm as PieChart,
  Xu as PieChartWidget,
  Vc as PrivateBox,
  km as ProgressBarChart,
  Im as RadarChart,
  Vl as Reactions,
  Sm as ResourceHeader,
  Df as RichTextDisplay,
  Fm as RichTextEditor,
  bf as ScrollArea,
  Bu as SearchBar,
  Tm as SectionHeader,
  it as Select,
  yi as Shortcut,
  $u as Sidebar,
  bo as SidebarChatItem,
  Gr as SidebarChatItemSkeleton,
  Pu as SidebarChatList,
  ho as SidebarChatListSkeleton,
  Du as SidebarChatProvider,
  Xt as SidebarCollapsibleSection,
  Ou as SidebarFooter,
  _u as SidebarHeader,
  Mu as SidebarTabs,
  zt as Spinner,
  Gu as Split,
  Vu as Stack,
  Zu as SummariesWidget,
  Ef as Switch,
  Pf as Tabs,
  Of as TabsSkeleton,
  uf as TasksList,
  Am as Textarea,
  _f as ToggleGroup,
  zf as ToggleGroupItem,
  Re as Tooltip,
  of as TwoColumnsList,
  Rm as UPLOAD_INPUT_ID,
  Lm as VerticalBarChart,
  Ju as VerticalBarChartWidget,
  Rt as VirtualList,
  Bf as WeekStartDay,
  $f as Weekdays,
  ze as Widget,
  af as WidgetAvatarsListItem,
  hf as WidgetEmptyState,
  nf as WidgetHighlightButton,
  sf as WidgetInboxList,
  zn as WidgetInboxListItem,
  pf as WidgetSection,
  lf as WidgetSimpleList,
  Pt as WidgetSimpleListItem,
  mf as WidgetStrip,
  Dm as actionBarStatuses,
  Em as buttonToggleSizes,
  Pm as buttonToggleVariants,
  Mf as chipVariants,
  Om as downloadAsCSV,
  jf as f0FileItemSizes,
  _m as generateCSVContent,
  Wf as getGranularityDefinition,
  Uf as getGranularityDefinitions,
  Hf as getGranularitySimpleDefinition,
  Vf as granularityDefinitions,
  Gf as modules,
  zm as predefinedPresets,
  Kf as rangeSeparator,
  En as seedFromStorage,
  Bm as selectSizes,
  mt as useAiPromotionChat,
  $m as useDataCollectionData,
  Wu as useDataCollectionItemNavigation,
  ys as useDataCollectionSource,
  Mm as useExportAction,
  De as useF0Chat,
  jm as useInfiniteScrollPagination,
  nl as usePageHeaderItemNavigation,
  bu as usePageHeaderNavigation,
  je as useSidebar,
  Eu as useSidebarChatActions,
  fo as useSidebarChats
};
