import { h as da, B as ua, i as fa, j as ma, k as nn, l as qe, m as Ue, n as ha, o as g, p as te, q as Ae, u as ee, T as pa, r as ga, s as ba, R as xa, t as va, v as pe, w as ya, x as Ot, y as kt, z as rt, A as Ce, E as wa, G as Na, H as Z, J as _t, K as Ve, L as de, M as Ca, N as ka, O as jn, Q as Ia, S as Sa, U as se, V as q, W as Oe, X as Fa, Y as Ta, Z as Aa, _ as Ra, $ as La, a0 as we, a1 as Wn, a2 as Re, a3 as at, e as Un, a4 as Be, a5 as Hn, a6 as zt, a7 as be, a8 as ue, a9 as Bt, aa as Vn, ab as Da, ac as Gn, ad as xe, ae as ge, af as Ea, ag as Pa, ah as Oa, ai as _a, aj as za, ak as Te, al as ut, am as Kn, an as Ba, ao as $a, ap as Ma, aq as ft, ar as qn, as as Yn, at as ja, au as Wa, av as it, aw as Ua, ax as Qn, ay as Ha, az as Va, aA as Ga, aB as Ka, aC as qa, aD as Xn, aE as Jn, aF as Zn, aG as It, aH as er, aI as St, aJ as tr, aK as Ya, aL as Qa, aM as Xa, aN as nr, aO as Ja, aP as ke, aQ as Me, aR as Ft, aS as rr, aT as Za, aU as $t, aV as ei, aW as ti, aX as ni, aY as $e, aZ as ri, a_ as ai, a$ as Ye, b0 as rn, b1 as Tt, b2 as ii, b3 as si, a as li, b as oi, b4 as ar, b5 as ci, g as di, F as ui, b6 as fi, b7 as ir, b8 as mi, b9 as Mt, ba as hi, bb as Ge, bc as pi, bd as gi, be as sr, bf as bi, bg as xi, bh as vi, bi as lr, bj as jt, bk as yi, bl as wi, bm as Ni, bn as Wt, bo as Ci, bp as ki, bq as Ii, br as Si, bs as Fi, bt as Ti, bu as or, bv as cr, bw as Ai, bx as dr, by as ur, bz as Ri, bA as Li, bB as Di, bC as Ei, bD as Pi, bE as Oi, bF as _i, bG as zi, bH as Bi, bI as $i, bJ as Mi, bK as ji, bL as Wi, bM as fr, bN as Ui, bO as Hi, bP as Vi, bQ as Gi, bR as Ki, bS as qi, bT as Ie, bU as Ut, bV as Ht, bW as Vt, bX as mr, bY as Gt, bZ as hr, b_ as pr, b$ as Yi, c0 as Qi, c1 as Xi, c2 as Ji, c3 as Zi, c4 as es, c5 as ts, c6 as an, c7 as ns, c8 as rs, c9 as sn, ca as ln, cb as on, cc as as, cd as is, ce as ss, cf as ls, cg as gr, ch as os, ci as cs } from "./F0CanvasPanel-B7J7y31z.js";
import { cu as yf, ct as wf, cG as Nf, cq as Cf, cr as kf, cj as If, ck as Sf, cl as Ff, cJ as Tf, cs as Af, cC as Rf, cD as Lf, cH as Df, cm as Ef, cw as Pf, cv as Of, cn as _f, co as zf, cE as Bf, cK as $f, cF as Mf, cI as jf, cB as Wf, cy as Uf, cA as Hf, cx as Vf, cp as Gf, cz as Kf } from "./F0CanvasPanel-B7J7y31z.js";
import { jsx as t, jsxs as o, Fragment as ce } from "react/jsx-runtime";
import ve, { forwardRef as le, useRef as z, useTransition as ds, useState as R, useLayoutEffect as st, useId as At, useContext as Se, createContext as Le, useEffect as V, useCallback as H, useMemo as ne, Fragment as us, isValidElement as fs, cloneElement as br, memo as ms, Children as xr } from "react";
import { C as hs, P as ps, a as Ke, M as gs, p as bs, b as xs, R as cn, c as vr, u as vs, d as ys, e as ws, f as Ns, g as Cs, D as ks, h as Is, O as yr, i as wr, S as Ss, A as Fs, B as Ts, L as As, j as Rs, V as Ls, k as Ds, l as Es, m as Ps } from "./useDataCollectionSource-DGJ-YGJB.js";
import { s as Yf, t as Qf, q as Xf, J as Jf, v as Zf, E as em, aa as tm, I as nm, r as rm, ac as am, ab as im, U as sm, af as lm, F as om, _ as cm, X as dm, N as um, ah as fm, Q as mm, $ as hm, a0 as pm, w as gm, ad as bm, ae as xm, T as vm, a1 as ym, a7 as wm, a9 as Nm, x as Cm, z as km, G as Im, Y as Sm, ag as Fm, Z as Tm, W as Am, ai as Rm, y as Lm, H as Dm, n as Em, o as Pm, a3 as Om, a4 as _m, a8 as zm, K as Bm, a5 as $m, a2 as Mm, a6 as jm } from "./useDataCollectionSource-DGJ-YGJB.js";
const Os = da("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Nr = le(({ className: e, items: n }, r) => /* @__PURE__ */ t(ua, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
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
  const r = z(null), a = z(null), [, i] = ds(), [s, l] = R(null), c = (s?.collapsedItems || []).length > 0;
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
          c && /* @__PURE__ */ o(ce, { children: [
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
          !c && /* @__PURE__ */ t(ce, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
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
}, Cr = le(Ws), kr = Le(null), Us = 15, Hs = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [i, s] = R(n), [l, c] = R(!1), [d, f] = R(!0), [u, m] = R(
    Us
  ), p = z(null), h = (x) => {
    p.current = x;
  }, b = () => {
    p.current && p.current();
  };
  return V(() => {
    s(n);
  }, [n]), V(() => {
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
  const { enabled: r, setOpen: a, open: i } = mt(), s = ee(), [l, c] = R(!1);
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
  const { currentPath: n } = Ot(), [r, a] = R(!1), [i, s] = R(!1), l = r ? rt.xl : rt.md, c = kt(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [d, f] = R(() => {
    const A = localStorage.getItem(fn);
    return A !== null ? !!A : !0;
  }), [u, m] = R(!1), [p, h] = R(
    null
  ), b = H(
    ({ isInvokedByUser: A } = {
      isInvokedByUser: !0
    }) => {
      s(A ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = H(
    (A) => {
      c || (A.clientX < 32 && m(!0), A.clientX > 280 && m(!1));
    },
    [c, m]
  ), v = ne(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return V(() => {
    m(!1);
  }, [n]), V(() => {
    i && localStorage.setItem(fn, d ? "1" : "");
  }, [d, i]), V(() => () => {
    h(v);
  }, [v]), /* @__PURE__ */ t(
    Sr.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: v,
        toggleSidebar: b,
        prevSidebarState: p,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const mn = te.create(Z), hn = {
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
  const [a, i] = R(!1), s = () => {
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
    de,
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
  const [m, p] = R("idle"), [h, b] = R(null), [x, ...v] = h ?? [], [A, O] = R(!1);
  V(() => {
    b(null), p("idle");
  }, [e]);
  const M = H(async () => {
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
      open: A,
      onOpenChange: async (L) => {
        O(L), L && h === null && M(), l(L);
      },
      children: [
        /* @__PURE__ */ t(ka, { asChild: !0, children: /* @__PURE__ */ t(
          de,
          {
            variant: "outline",
            icon: jn,
            hideLabel: !0,
            label: n,
            pressed: A,
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
                  h.length > 1 && /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: v.map((L, P) => /* @__PURE__ */ t(
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
                      M();
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
                  onDropdownClose: () => O(!1)
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
        se,
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
    icon: /* @__PURE__ */ t(Z, { icon: jn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Oe, { href: r, children: /* @__PURE__ */ t(se, { label: n }) })
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
    icon: /* @__PURE__ */ t(Z, { icon: Ra, size: "lg" }),
    button: /* @__PURE__ */ t(se, { variant: "outline", label: r, onClick: a })
  }
), el = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(q, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(q, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(q, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(q, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(q, { className: "h-3 w-1/3" })
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
  const [i, s] = R(e);
  V(() => {
    s(e);
  }, [e]);
  const l = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), a(), d && d();
  };
  return i && /* @__PURE__ */ o(ce, { children: [
    /* @__PURE__ */ t(La, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          se,
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
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, v = (M, L) => (M !== null ? r?.(M) : void 0) ?? L, A = a === "callback" ? m ? { onClick: h, title: v(s, "Previous") } : void 0 : c !== null ? { url: c, title: v(s, "Previous") } : void 0, O = a === "callback" ? p ? { onClick: b, title: v(l, "Next") } : void 0 : d !== null ? { url: d, title: v(l, "Next") } : void 0;
    return !A && !O && !x ? null : { previous: A, next: O, counter: x };
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
  ], x = n && Object.keys(n).length !== 0, v = i && r.length > 0, A = !i && a.length > 0, O = !i && !!l?.isVisible, M = b[b.length - 1], L = "navigation" in window ? window.navigation : null, P = i && (L ? !!L.canGoBack : window.history.length > 1);
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
                se,
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
                  se,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: _t,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || v ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in M ? /* @__PURE__ */ t(q, { className: "h-4 w-24" }) : M.label }) : /* @__PURE__ */ t(
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
          !i && x && (h || A || O) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Ks, { ...h }),
          h && A && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (O || A) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              qs,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            A && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((S, G) => /* @__PURE__ */ t(rl, { action: S }, G)) })
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
  const n = z(null), [r, a] = R(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Be, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    de,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    de,
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
        de,
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
  const e = ee();
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
          de,
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
  const a = z(null);
  V(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
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
        de,
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
      de,
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
  ue("AiPromotionChat", cl)
), ul = be(
  ue("AiPromotionChatProvider", ol)
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
}, fl = le(
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
                  gn[s] && /* @__PURE__ */ t(Z, { icon: gn[s], size: "sm", "aria-hidden": !0 }),
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
              se,
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
              se,
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
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(q, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(q, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(q, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(q, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(q, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(q, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Ar = le(
  (e, n) => /* @__PURE__ */ t(fl, { ref: n, ...e })
), hl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ml, { compact: e, variant: n });
Ar.displayName = "F0Callout";
const vu = ge(
  be(Ar),
  hl
), Rr = le(
  ({ value: e, max: n, color: r = "categorical-1", label: a }, i) => {
    const s = ee(), l = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), l)) : 0, d = Array.from({ length: l }, (u, m) => m < c), f = Ea(r);
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
  ue("F0SegmentedBar", Rr)
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
        /* @__PURE__ */ t(Z, { icon: Pa, size: "md", color: "selected" }),
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
  ue("F0VersionHistory", bl)
), Lr = le(
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
                children: d ? i(d) : /* @__PURE__ */ t(ce, {})
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
const Rt = ue("VirtualList", Lr), Dr = ({
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
  const m = e.name.split(" "), p = m[0] || "", h = m.slice(1).join(" "), b = (v) => {
    v.preventDefault(), v.stopPropagation(), !f && (n ? a(e) : r(e));
  }, x = (v) => {
    if (v.key === "Enter" || v.key === " ") {
      if (v.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else v.key === "ArrowDown" ? ht(v.currentTarget, l) : v.key === "ArrowUp" && pt(v.currentTarget, c);
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
          Z,
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
  hiddenAvatar: v = !1
}) => {
  const [A, O] = R(!1);
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
        hiddenAvatar: v
      }
    );
  const M = (S) => {
    if (S.key === " ")
      S.preventDefault(), d(!n);
    else if (S.key === "Enter" && b)
      d(!n);
    else if (S.key === "Enter") {
      if (x) return;
      !i || s ? l(a) : i && c(a);
    } else S.key === "ArrowDown" ? ht(S.currentTarget, f) : S.key === "ArrowUp" && pt(S.currentTarget, u);
  }, L = () => {
    if (A)
      d(!n), O(!1);
    else {
      if (x || b) return;
      i ? c(a) : l(a);
    }
  };
  if (!a.subItems?.length) return null;
  const P = i || s;
  return /* @__PURE__ */ o(ce, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        se,
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
            O(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            h && /* @__PURE__ */ t(
              Z,
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
                onKeyDown: M,
                indeterminate: s,
                onPointerDown: (S) => {
                  S.stopPropagation(), O(!1);
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
        se,
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
      se,
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
  } : void 0, v = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !s
  } : void 0;
  return x || (x = v, v = void 0), m && u ? (h = /* @__PURE__ */ t(
    He,
    {
      primaryAction: x,
      secondaryActions: v ? [v] : []
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
  ) : u && (h = /* @__PURE__ */ t(He, { primaryAction: x, secondaryActions: [] }), v && (b = /* @__PURE__ */ t(He, { primaryAction: v, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
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
  /* @__PURE__ */ t(Z, { icon: Os, size: "md" }),
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
    Z,
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
  selectAllLabel: v,
  clearLabel: A,
  notFoundTitle: O,
  notFoundSubtitle: M,
  className: L,
  actions: P,
  onCreate: S,
  onCreateLabel: G,
  singleSelector: B = !1,
  loading: w = !1,
  disabled: D = !1,
  hiddenAvatar: C = !1
}) => {
  const T = ve.useRef(null), j = ne(
    () => e ? n.reduce(
      (F, J) => F + (J.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = H(() => {
    setTimeout(() => {
      T.current?.scrollTo({ top: 0 });
    }, vn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(wn)
      )[0]?.focus();
    }, yn);
  }, []), k = H(() => {
    setTimeout(() => {
      T.current?.scrollTo({ top: T.current?.scrollHeight });
    }, vn), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(wn)
      );
      F[F.length - 1]?.focus();
    }, yn);
  }, []), N = ne(
    () => new Map(p.map((F) => [F.id, F])),
    [p]
  ), I = H(
    (F) => {
      const J = N.get(F.id);
      if (!e)
        return {
          selected: !!J,
          partialSelected: !!J
        };
      const $ = (F.subItems ?? []).filter(
        (W) => J?.subItems?.some(
          (re) => re.subId === W.subId
        )
      ), Q = (F.subItems?.length ?? 0) === $.length, me = !Q && $.length > 0;
      return { selected: Q, partialSelected: me };
    },
    [e, N]
  ), U = H(
    (F) => {
      if (F.index === 0 && S)
        return /* @__PURE__ */ t(
          xn,
          {
            label: G ?? "",
            onCreate: () => S?.(i),
            goToFirst: y,
            goToLast: k
          }
        );
      const J = S ? F.index - 1 : F.index, $ = n[J], { selected: Q, partialSelected: me } = I($);
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
          selected: Q,
          partialSelected: me,
          showGroupIcon: Cl(r, a),
          singleSelector: B,
          goToFirst: y,
          goToLast: k,
          disabled: D,
          hiddenAvatar: C
        },
        $.id
      );
    },
    [
      S,
      G,
      D,
      n,
      I,
      y,
      k,
      e,
      r,
      C,
      l,
      s,
      b,
      i,
      a,
      B
    ]
  ), Y = ne(() => e ? n.flatMap((F) => {
    const J = Qe(
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
          expanded: F.expanded ?? J?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map(($) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? J?.expanded ?? !1
        },
        subItem: $
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
  })), [e, n, p]), _ = H(
    (F) => {
      if (F.index === 0 && S)
        return /* @__PURE__ */ t(
          xn,
          {
            label: G ?? "",
            onCreate: () => S?.(i),
            goToFirst: y,
            goToLast: k
          }
        );
      const J = S ? F.index - 1 : F.index, $ = Y[J].parent, Q = Y[J].subItem;
      if (!$) {
        const W = {
          id: Q.subId,
          name: Q.subName,
          avatar: Q.subAvatar,
          subItems: Q.subItems,
          expanded: Q.expanded,
          searchKeys: Q.subSearchKeys
        }, re = Qe(
          p,
          W.id
        ), K = (W?.subItems ?? []).filter(
          (We) => re?.subItems?.some(
            (ca) => ca.subId === We.subId
          )
        ), he = (W.subItems?.length ?? 0) === K.length, oa = !he && K.length > 0;
        return /* @__PURE__ */ t(
          tt,
          {
            groupView: !0,
            expanded: W.expanded ?? !1,
            onExpand: (We) => b(W, We),
            search: i,
            entity: W,
            onSelect: s,
            onRemove: l,
            selected: he,
            partialSelected: oa,
            showGroupIcon: r.find((We) => We.value === a)?.groupType === "team",
            singleSelector: B,
            goToFirst: y,
            goToLast: k,
            hideLine: J === Y.length - 1,
            disabled: D,
            hiddenAvatar: C
          }
        );
      }
      let me = !!Qe(p, Q.subId);
      if (!me) {
        const W = Qe(
          p,
          $.id
        );
        me = !!($?.subItems ?? []).filter(
          (K) => W?.subItems?.some(
            (he) => he.subId === K.subId
          )
        ).find((K) => K.subId === Q.subId);
      }
      return /* @__PURE__ */ t(
        tt,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: Q.subId,
            name: Q.subName,
            avatar: Q.subAvatar,
            searchKeys: Q.subSearchKeys
          },
          onSelect: () => {
            d($, Q);
          },
          onRemove: () => c($, Q),
          selected: !!me,
          partialSelected: !1,
          singleSelector: B,
          goToFirst: y,
          goToLast: k,
          isChild: !0,
          hiddenAvatar: C
        }
      );
    },
    [
      Y,
      p,
      i,
      B,
      y,
      k,
      s,
      l,
      r,
      D,
      b,
      a,
      d,
      c,
      C,
      S,
      G
    ]
  ), [ae, ie] = ne(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, J = 0;
    if (!e)
      F = n.length, J = n.reduce(
        (me, { id: W }) => me + (N.has(W) ? 1 : 0),
        0
      );
    else {
      const me = new Set(
        [...N.values()].flatMap(
          (W) => W.subItems?.map((re) => re.subId) ?? []
        )
      );
      n.forEach((W) => {
        const re = W.subItems ?? [];
        F += re.length, J += re.filter(
          (K) => me.has(K.subId)
        ).length;
      });
    }
    const $ = F > 0 && J === F, Q = J > 0;
    return [$, Q];
  }, [n, N, e]), E = Y.length, X = !B && (v || A), fe = P && P.length > 0, oe = !w && (!B && X || fe);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        B || w ? "rounded-r-xl" : "",
        L
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              B || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                yl,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: y,
                  goToLast: k
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
              oe ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(zt, {}) }),
              !w && !j && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: xt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: M })
                  ]
                }
              ),
              !w && (!!j || S) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: E + (S ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && S) return vt;
                    const J = S ? F - 1 : F;
                    return Y[J]?.parent === null ? wl : vt;
                  },
                  renderer: _,
                  ref: T
                }
              ) : /* @__PURE__ */ t(
                Rt,
                {
                  height: xt,
                  itemCount: n.length + (S ? 1 : 0),
                  itemSize: vt,
                  renderer: U,
                  ref: T
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
            singleSelector: B,
            totalFilteredEntities: j,
            allVisibleSelected: ae,
            anyVisibleSelected: ie,
            selectAllLabel: v,
            clearLabel: A,
            disabled: D,
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
      Z,
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
          ) : /* @__PURE__ */ t(ce, {});
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
  const h = (s ?? Nn) < Sl, b = !c && !l && !h, x = s ?? Nn, v = b ? x - Cn : x;
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
  readonly: v = !1,
  append: A,
  size: O = "sm",
  open: M
}) => {
  const L = ne(
    () => r.some(
      (B) => B.subItems && B.subItems.length > 0
    ),
    [r]
  ), P = ne(() => L ? r.flatMap(
    (B) => (B.subItems ?? []).map((w) => ({
      parent: B,
      subItem: w
    }))
  ) : r.map((B) => ({
    parent: null,
    subItem: {
      subId: B.id,
      subName: B.name,
      subAvatar: B.avatar,
      subDeactivated: B.deactivated
    }
  })), [L, r]), S = P.length === 0 ? void 0 : P.length === 1 ? P[0].subItem.subName : P.length + " " + n, G = P.length === 1 ? P[0].subItem.subName : void 0;
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
      readonly: v,
      size: O,
      avatar: i || !G ? void 0 : {
        type: "person",
        firstName: G,
        lastName: "",
        src: P[0].subItem.subAvatar,
        deactivated: P[0].subItem.subDeactivated
      },
      append: A ?? /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t(Ga, { open: M, disabled: a, size: O }) }),
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
  const [n, r] = R(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (w) => {
    r(w), e.onOpenChange?.(w);
  };
  V(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, s] = R(e.entities), [l, c] = R(""), [d, f] = Ka("", 300), u = ne(
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
    const D = e.selectedEntities ?? [], C = i.find((N) => N.id === w.id);
    if (!C)
      return;
    const T = new Set(
      (C.subItems ?? []).map((N) => N.subId)
    ), j = /* @__PURE__ */ new Set([C.id]);
    i.forEach((N) => {
      N.id !== C.id && (N.subItems ?? []).some(
        (U) => T.has(U.subId)
      ) && j.add(N.id);
    });
    const y = [...D];
    function k(N) {
      const I = y.findIndex((U) => U.id === N.id);
      I >= 0 ? y[I] = N : y.push(N);
    }
    j.forEach((N) => {
      const I = i.find((_) => _.id === N);
      if (!I) return;
      const U = I.subItems?.filter(
        (_) => T.has(_.subId)
      ) ?? [], Y = y.findIndex((_) => _.id === N);
      if (Y >= 0) {
        const _ = y[Y].subItems ?? [], ae = new Set(_.map((E) => E.subId)), ie = [
          ..._,
          ...U.filter((E) => !ae.has(E.subId))
        ];
        k({
          ...I,
          subItems: ie
        });
      } else
        k({
          ...I,
          subItems: U
        });
    }), e.onSelect(y);
  }
  function x(w, D) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...D }] }), r(!1);
    else {
      const C = e.selectedEntities ?? [], T = new Set(C.map((k) => k.id)), j = new Map(
        C.map((k) => [k.id, k.subItems ?? []])
      );
      T.add(w.id), e.entities.forEach((k) => {
        k.subItems?.some(
          (I) => I.subId === D.subId
        ) && T.add(k.id);
      });
      const y = [];
      e.entities.forEach((k) => {
        if (T.has(k.id)) {
          let I = [...j.get(k.id) ?? []];
          k.subItems?.some(
            (_) => _.subId === D.subId
          ) && (I.some(
            (ae) => ae.subId === D.subId
          ) || I.push(D));
          const Y = new Set(
            (k.subItems ?? []).map((_) => _.subId)
          );
          I = I.filter(
            (_) => Y.has(_.subId)
          ), y.push({
            ...k,
            subItems: I
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
    let D = [];
    const C = e.selectedEntities ?? [];
    if (u) {
      const T = i.find(
        (y) => y.id === w.id
      );
      if (!T)
        return;
      const j = new Set(
        (T.subItems ?? []).map((y) => y.subId)
      );
      for (const y of C) {
        const k = (y.subItems ?? []).filter(
          (N) => !j.has(N.subId)
        );
        k.length > 0 && D.push({
          ...y,
          subItems: k
        });
      }
    } else
      D = (C ?? []).filter((T) => T.id !== w.id);
    e.onSelect(D);
  }
  function A(w, D) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [], T = D.subId, j = [];
    for (const y of C) {
      const k = y.subItems?.filter((N) => N.subId !== T) ?? [];
      k.length > 0 && j.push({
        ...y,
        subItems: k
      });
    }
    e.onSelect(j);
  }
  function O() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let D = [];
    if (u) {
      const C = new Set(
        i.flatMap(
          (T) => (T.subItems ?? []).map((j) => j.subId)
        )
      );
      for (const T of w) {
        const j = (T.subItems ?? []).filter(
          (y) => !C.has(y.subId)
        );
        j.length > 0 && D.push({
          ...T,
          subItems: j
        });
      }
    } else {
      const C = new Set(
        i.map((T) => T.id)
      );
      D = (w ?? []).filter((T) => !C.has(T.id));
    }
    e.onSelect(D);
  }
  function M() {
    const w = [...e.selectedEntities ?? []];
    i.forEach((D) => {
      const C = w.find((T) => T.id === D.id);
      if (!C)
        w.push({
          ...D,
          subItems: D.subItems || []
        });
      else {
        const T = Array.from(
          /* @__PURE__ */ new Set([
            ...C.subItems ?? [],
            ...D.subItems ?? []
          ])
        );
        C.subItems = T;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const L = (w) => {
    c(w), f(w);
  }, P = (w, D) => {
    e.onItemExpandedChange(w.id, D), s(
      i.map(
        (C) => C.id === w.id ? { ...C, expanded: !w.expanded } : C
      )
    );
  };
  V(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const D = e.entities.map((C) => {
        const T = Tl(C, d), j = C.subItems?.map((y) => ({
          ...y,
          score: ot(
            d,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, k) => y.score - k.score);
        return {
          ...C,
          score: T,
          expanded: C.expanded ?? (j?.length ?? 0) > 0,
          subItems: j
        };
      }).filter((C) => C.score < 1 / 0).sort((C, T) => C.score - T.score);
      s(D);
    } else {
      const w = e.entities.map((D) => {
        const C = ot(
          d,
          D.searchKeys ?? [D.name]
        );
        return { ...D, score: C };
      }).filter((D) => D.score < 1 / 0).sort((D, C) => D.score - C.score);
      s(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const S = z(null), [G, B] = R(0);
  return st(() => {
    const w = () => {
      S.current && B(S.current.offsetWidth);
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
          onRemove: v,
          onSubItemRemove: A,
          onSubItemSelect: x,
          onClear: O,
          onSelectAll: M,
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
          width: e.width ?? G - 2,
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
            onRemove: v,
            onSubItemRemove: A,
            onSubItemSelect: x,
            onClear: O,
            onSelectAll: M,
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
  /* @__PURE__ */ t(q, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(q, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(q, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(q, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(q, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Qt = ue(
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
  const s = ee(), l = Ya(e, "createdAt"), c = Object.values(l).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = Qa((u) => {
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
  const e = ee();
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
}, Cu = ue(
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
  const n = z(null), r = z(), a = H(() => {
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
  }, [e]), i = H(() => {
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
  const [m, p] = R(l), h = z(null);
  V(() => {
    p(l);
  }, [l]);
  const b = (L) => {
    p(L), c?.(L);
  }, x = ke(), { canvasRef: v, handleMouseEnter: A, handleMouseLeave: O } = jl(x), M = Me({
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
      onMouseEnter: x ? void 0 : A,
      onMouseLeave: x ? void 0 : O,
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
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: M })
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
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(q, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(q, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(q, { className: "h-3 w-1/3" })
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
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(se, { label: r, variant: "outline", onClick: a }) })
] });
function Pr({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: i
}) {
  const [s, l] = R(r), [c, d] = R(n), f = z(null), { fireEmojiConfetti: u } = Za(), m = (b, x) => {
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
      se,
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
const Vl = ue("Reactions", Hl), Or = le(function({ content: n, collapsed: r, id: a, className: i, tabIndex: s }, l) {
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
  /* @__PURE__ */ t(q, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(q, { className: "h-2.5 w-2/3 rounded-2xs" })
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
), Et = le(
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
          !m && /* @__PURE__ */ o(ce, { children: [
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
                f && /* @__PURE__ */ o(ce, { children: [
                  /* @__PURE__ */ t(Ft, { date: f }),
                  /* @__PURE__ */ t(
                    Z,
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
    ) : /* @__PURE__ */ o(ce, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(q, { className: "absolute inset-0 h-full w-full" })
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
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(q, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(q, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(q, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(q, { className: "mb-px h-3 w-1/4" })
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
  const i = ee();
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
  descriptionExpandable: v = !1
}) => {
  const A = At(), O = At(), M = z(null), [L, P] = R(null), [S, G] = R(!1), B = [f.views, f.comments].filter(Boolean).join(" · "), w = v && L?.id === e && L.description === s, D = !w, C = er(a), T = () => {
    l(e);
  }, j = (N) => {
    N.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, k = (N) => {
    N.preventDefault(), N.stopPropagation(), s && P({ id: e, description: s });
  };
  return V(() => {
    w && M.current?.focus();
  }, [w]), V(() => {
    v || P(null);
  }, [v]), V(() => {
    const N = M.current;
    if (!v || !N || w) {
      G(!1);
      return;
    }
    const I = () => {
      G(
        N.scrollHeight > N.clientHeight
      );
    };
    if (I(), typeof ResizeObserver > "u") return;
    const U = new ResizeObserver(I);
    return U.observe(N), () => U.disconnect();
  }, [v, w, s]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: T,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Ye,
          {
            href: n.url || "#",
            title: y,
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
                n ? /* @__PURE__ */ o(ce, { children: [
                  /* @__PURE__ */ t(
                    Ye,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
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
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
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
                  h?.map((N) => /* @__PURE__ */ t(
                    se,
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
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: C }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: A,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              s && /* @__PURE__ */ o(ce, { children: [
                /* @__PURE__ */ t(
                  _r,
                  {
                    ref: M,
                    id: O,
                    content: s,
                    collapsed: D,
                    tabIndex: w ? -1 : void 0,
                    className: g(w && pe())
                  }
                ),
                v && S && !w && /* @__PURE__ */ t(
                  Ql,
                  {
                    describedBy: A,
                    controls: O,
                    expanded: w,
                    onClick: k
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
              onClick: j,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(q, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Br, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: B }),
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
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(q, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(q, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(q, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(q, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(q, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(_r.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(q, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Br.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(q, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(q, { className: "h-2.5 w-14 rounded-2xs" })
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
              Z,
              {
                icon: Vn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((s, l) => /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t($e, { ...s }, s.text),
            l < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(si, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              se,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              se,
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
  /* @__PURE__ */ t(q, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(q, { className: "h-4" }),
    /* @__PURE__ */ t(q, { className: "h-4" })
  ] })
] });
$r.displayName = "OnePersonListItem";
const Fu = be(
  ue(
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
const Tu = ue(
  "ApplicationFrame",
  eo
), no = ({ contentId: e }) => {
  const n = ee();
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
  const { sidebarState: r, toggleSidebar: a } = je(), i = z(e);
  V(() => {
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
    resizable: v,
    panelSide: A
  } = oi(), O = m === "fullscreen", M = m === "canvas", { open: L } = mt(), P = v ? x : ci, S = A === "left", G = z(O), B = O && !G.current, w = !O && G.current, [
    D,
    C
  ] = R(!1);
  V(() => {
    !O && G.current && C(!0), G.current = O;
  }, [O]);
  const T = O || D || w, j = ne(() => B ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [B, w]), y = kt(
    `(max-width: ${rt.xl}px)`,
    { initializeWithValue: !0 }
  ), k = kt(`(max-width: ${rt.md}px)`, {
    initializeWithValue: !0
  }), N = u && !S;
  return V(() => {
    d(N);
  }, [N, d]), V(() => {
    d(L);
  }, [L, d]), ao(N, y), /* @__PURE__ */ t(
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
              ref: (I) => {
                s === "hidden" ? I?.setAttribute("inert", "") : I?.removeAttribute("inert");
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
                paddingRight: u && !k && !S ? P : 0,
                paddingLeft: u && !k && S ? P : 0
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
                      T ? "overflow-hidden" : "overflow-auto",
                      !u && !L && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      te.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          T ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && M && p && /* @__PURE__ */ t(
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
                      k ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        S ? "right-0" : "left-0"
                      )
                    ),
                    style: k ? void 0 : S ? { left: P } : { right: P },
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
                      k ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        S ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        T || M ? "z-20" : "z-0",
                        s === "hidden" && T ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: k || O ? "100%" : P
                    },
                    transition: j,
                    onAnimationComplete: () => {
                      D && C(!1);
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
  const c = ee(), [d, f] = R(!s);
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
              Z,
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
              de,
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
              se,
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
  ue("DaytimePage", jr)
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
            /* @__PURE__ */ t(Z, { icon: ir, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Ru = be(
  ue("OmniButton", oo)
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
const Lu = be(ue("Page", Wr)), co = (e) => e.reduce(
  (n, r) => n + r.chats.filter((a) => (a.unreadCount ?? 0) > 0).length,
  0
), Ur = Le(null), Hr = Le(null), Tn = (e, n, r) => e.map((a) => a.id === n ? r(a) : a), Xe = (e, n) => e.map((r) => ({ ...r, chats: n(r.chats) })), Du = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: r
}) => {
  const [a, i] = R(n), [s, l] = R(
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
          const h = new Map(p.chats.map((v) => [v.id, v])), b = u.map((v) => h.get(v)).filter((v) => !!v), x = p.chats.filter((v) => !u.includes(v.id));
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
  const [f, u] = R(n), m = ke(), p = s && !f, h = () => {
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
              children: /* @__PURE__ */ t(Z, { icon: Mt, size: "xs" })
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
      /* @__PURE__ */ t(q, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(q, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), mo = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(q, { className: "h-3 w-24 rounded" }) }), ho = ({
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
      e.icon && /* @__PURE__ */ t(Z, { icon: e.icon, size: "md", className: "text-f1-icon" }),
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
    /* @__PURE__ */ t(q, { className: "size-6" }),
    /* @__PURE__ */ t(q, { className: "h-3 w-14" })
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
  const s = ee(), [l, c] = R(!1), d = ne(
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
                children: /* @__PURE__ */ t(Z, { icon: Mt, size: "xs" })
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
  const c = ee();
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
        se,
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
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = je(), i = z(null);
  return V(() => {
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: a }), children: /* @__PURE__ */ t(Z, { icon: we, size: "md" }) })
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
  const [e, n] = R(!1);
  return V(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const qr = Le(void 0);
function Io({ children: e }) {
  const [n, r] = R(!1), [a, i] = R(null);
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
      Z,
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
  const f = ee(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Jt(), { isActive: b } = Ot(), x = b(e.href, { exact: e.exactMatch }), v = z(!1), [A, O] = R(!1), M = i === 0, L = i === s - 1, P = s === 1, S = ne(() => {
    const T = [];
    return !P && !M && T.push({
      label: f.actions.moveUp,
      onClick: () => l?.(i, i - 1),
      icon: xi
    }), !P && !L && T.push({
      label: f.actions.moveDown,
      onClick: () => l?.(i, i + 1),
      icon: vi
    }), T.length > 0 && T.push({ type: "separator" }), T.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: lr,
      critical: !0
    }), T;
  }, [P, M, L, f, l, i, a, e]), G = () => {
    m(!0), O(!1), h(e.href || null), v.current = !0;
  }, B = () => {
    m(!1), h(null), c(), setTimeout(() => {
      v.current = !1;
    }, 0);
  }, w = u && p === e.href, D = ne(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      A && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, A, w, d]
  ), C = ne(() => /* @__PURE__ */ o(ce, { children: [
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
            Z,
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
          A && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Be,
          {
            open: A,
            onOpenChange: O,
            items: S,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Z, { icon: Tt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, A, w, S, n]);
  return d ? /* @__PURE__ */ t(
    vr,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: G,
      onDragEnd: B,
      className: D,
      whileDrag: {
        scale: 1.05
      },
      children: C
    }
  ) : /* @__PURE__ */ t("div", { className: D, children: C });
}, yt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
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
  const s = z(null), l = e.filter(
    (b) => b.isSortable === !1
  ), [c, d] = R(
    e.filter((b) => b.isSortable !== !1)
  ), [f, u] = R(0), m = H((b) => {
    d(b);
  }, []), p = H(
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
  const u = ee(), { isDragging: m } = Jt(), p = e.some((y) => y.isRoot), h = e.filter((y) => !y.isRoot).length > 0, b = n.length > 0, x = z(null), [v, A] = R(l), O = l.length > 0;
  V(() => {
    JSON.stringify(l) !== JSON.stringify(v) && A(l);
  }, [l]);
  const M = (y) => {
    A(y);
  }, L = H(
    (y) => {
      const k = v.filter((N) => N.href !== y.href);
      A(k), c?.(k);
    },
    [v, c]
  ), P = H(
    (y, k) => {
      if (k < 0 || k >= v.length) return;
      const N = [...v], [I] = N.splice(y, 1);
      N.splice(k, 0, I), A(N), c?.(N);
    },
    [v, c]
  ), [S, G] = R(!1), B = z(null);
  V(() => {
    n.length > 0 && !S && (r([...n]), G(!0));
  }, [n, r, S]), V(() => {
    const y = () => {
      B.current !== null && window.clearTimeout(B.current), B.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), B.current !== null && window.clearTimeout(B.current);
    };
  }, [a, n, d]);
  const w = "flex flex-col gap-0.5", D = ne(
    () => v.reduce(
      (y, k, N) => (k.label in y || (y[k.label] = []), y[k.label].push(N), y),
      {}
    ),
    [v]
  ), C = ne(
    () => O && v.map((y, k) => /* @__PURE__ */ t(
      To,
      {
        isSortable: !f,
        tooltip: (D[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: x,
        onRemove: L,
        index: k,
        total: v.length,
        onMove: P,
        onReorderFinish: () => {
          c?.(v);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      O,
      v,
      D,
      L,
      P,
      c,
      f
    ]
  ), T = "flex flex-col gap-3", j = ne(() => n.map((y) => /* @__PURE__ */ t(
    yt,
    {
      category: y,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: i,
      onDragEnd: s,
      currentOrder: n
    },
    y.id
  )), [n, f, a, i, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, k) => /* @__PURE__ */ t(
          yt,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${k}`
        )) }),
        O && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Xt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: w, children: C }) : /* @__PURE__ */ t(
          cn,
          {
            axis: "y",
            values: v,
            onReorder: M,
            className: w,
            children: C
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, k) => /* @__PURE__ */ t(
          yt,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${k}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: T, children: j }) : /* @__PURE__ */ t(
              cn,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: T,
                children: j
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
          /* @__PURE__ */ t(Z, { icon: jt, size: "md" }),
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
  const { sidebarState: i, isSmallScreen: s } = je(), l = ke(), [c, d] = It({ threshold: 1 }), [f, u] = It({ threshold: 1 }), m = ee(), p = {
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
            /* @__PURE__ */ t(Z, { icon: e.icon, size: "md", color: "default" }),
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
  const i = ee(), s = a.placeholder ?? i.navigation.sidebar.search;
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
      se,
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
  const i = ee(), s = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
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
  const r = ee().approvals.history, a = e.findIndex((i) => i.status === "pending");
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
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, s) => /* @__PURE__ */ o(ce, { children: [
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
  ue("OneApprovalHistory", $o)
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
  } = e, b = ki(), x = ys(n, h), [v, A] = R(null), O = v?.key === r && v.settled, M = z(x);
  M.current = x;
  const L = z(b);
  L.current = b;
  const P = z(null), S = m === void 0 ? null : JSON.stringify(m), G = z(m);
  G.current = m;
  const B = z(null), w = () => {
    const W = G.current;
    W !== void 0 && (B.current = JSON.stringify(W), M.current.setCurrentFilters(W));
  };
  V(() => {
    if (!f || P.current === r) return;
    if (!u) {
      P.current = r, w(), A({ key: r, applied: null, settled: !1 });
      return;
    }
    let W = !1;
    return (async () => {
      let K = null;
      try {
        const he = await L.current.get(
          r
        );
        he && !W && (K = En(
          he,
          M.current,
          M.current
        ));
      } catch {
      }
      W || (P.current = r, w(), A({ key: r, applied: K, settled: !1 }));
    })(), () => {
      W = !0;
    };
  }, [r, f, u]), V(() => {
    !O || S === null || B.current !== S && w();
  }, [O, S]), V(() => {
    if (!(!f || !u))
      return Ii(r, async () => {
        try {
          const W = await L.current.get(
            r
          );
          if (!W) return;
          const re = M.current;
          En(
            W,
            {
              filters: G.current === void 0 ? re.filters : void 0,
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
    data: D,
    paginationInfo: C,
    setPage: T,
    loadMore: j,
    isLoading: y,
    isInitialLoading: k
  } = Si(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && O,
      fetchParamsProvider: (W) => ({
        ...W,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  V(() => {
    A(
      (W) => W && W.key === r && !W.settled ? { ...W, settled: !0 } : W
    );
  }, [v, r]);
  const N = c ?? n.itemUrl, I = ws({
    dataSource: x,
    data: D,
    paginationInfo: C,
    setPage: T,
    loadMore: j,
    isLoading: y,
    idProvider: l,
    itemUrl: N,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: s
  }), U = typeof I.activeItemId == "string" || typeof I.activeItemId == "number" ? I.activeItemId : null, Y = I.activeItem !== null, _ = Y && I.nextItem === null && I.hasNext, ae = Y && I.previousItem === null && I.hasPrevious, ie = U !== null && (!Y || _ || ae), E = [
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
  ], { neighbors: X, isSupported: fe } = Ns({
    dataAdapter: x.dataAdapter,
    id: U,
    filters: x.currentFilters,
    sortings: E,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && O && !k && !y && ie,
    fetchParamsProvider: (W) => ({
      ...W,
      navigationFilters: x.currentNavigationFilters
    })
  }), oe = ne(() => l || (x.idProvider ? (W, re) => x.idProvider(W, re) : Cs), [l, x.idProvider]), F = ne(() => {
    if (!ie || X === null) return I;
    const W = I.previousItem ?? X.previous, re = I.nextItem ?? X.next, K = (he) => he && N ? N(he) ?? null : null;
    return {
      ...I,
      previousItem: W,
      nextItem: re,
      previousItemUrl: I.previousItemUrl ?? K(W),
      nextItemUrl: I.nextItemUrl ?? K(re),
      absoluteIndex: I.absoluteIndex ?? (X.position !== void 0 ? X.position - 1 : null),
      totalItems: I.totalItems ?? X.total,
      hasPrevious: I.hasPrevious || W !== null,
      hasNext: I.hasNext || re !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: Y ? I.goToPrevious : () => {
        X.previous && I.setActiveItemId(
          oe(X.previous)
        );
      },
      goToNext: Y ? I.goToNext : () => {
        X.next && I.setActiveItemId(
          oe(X.next)
        );
      }
    };
  }, [
    I,
    ie,
    X,
    Y,
    N,
    oe
  ]), J = nl(F, {
    getItemTitle: d,
    mode: p
  }), $ = f && O && fe && ie && X === null, Q = z(null), me = J ?? ($ ? Q.current : null);
  return V(() => {
    J !== null && (Q.current = J);
  }, [J]), {
    ...F,
    isNavigating: F.isNavigating || $,
    isReady: O && !k,
    navigation: me,
    appliedCollectionState: v?.applied ?? null,
    dataSource: x,
    data: D,
    paginationInfo: C,
    isLoading: y
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
  const { messages: n, searchMessages: r, loadMessageContext: a } = De(), [i, s] = R(null), [l, c] = R(null), d = z(null), f = z(null), u = z(null), [m, p] = R(null), [h, b] = R(!1), [x, v] = R(""), [A, O] = R([]), [M, L] = R(-1), [P, S] = R(!1), G = z(n);
  G.current = n;
  const B = z(r);
  B.current = r;
  const w = z(a);
  w.current = a;
  const D = z(A);
  D.current = A;
  const C = z(M);
  C.current = M;
  const T = z(0);
  V(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const j = H(($) => {
    d.current = $;
  }, []), y = H(($) => {
    f.current = $;
  }, []), k = H(($) => {
    f.current?.($);
  }, []), N = H(
    ($, Q) => p({ images: $, index: Q }),
    []
  ), I = H(() => p(null), []), U = H(
    ($) => p((Q) => Q && { ...Q, index: $ }),
    []
  ), Y = H(($, Q) => {
    d.current?.($), c($), u.current && clearTimeout(u.current), Q || (u.current = setTimeout(
      () => c(null),
      jo
    ));
  }, []), _ = H(
    ($) => Y($, !1),
    [Y]
  ), ae = H(
    ($, Q = D.current) => {
      const me = Q[$];
      if (me == null) return;
      L($);
      const W = () => Y(me, !0), re = w.current;
      re ? re(me).then(W) : W();
    },
    [Y]
  );
  V(() => {
    if (!h) return;
    const $ = x.trim();
    if ($ === "") {
      O([]), L(-1), S(!1), c(null);
      return;
    }
    S(!0);
    const Q = ++T.current, me = setTimeout(() => {
      const W = (K) => {
        Q === T.current && (O(K), S(!1), K.length > 0 ? ae(K.length - 1, K) : (L(-1), c(null)));
      }, re = B.current;
      if (re)
        re($).then((K) => W(K.map((he) => he.id)));
      else {
        const K = $.toLowerCase();
        W(
          G.current.filter((he) => !he.deleted && he.body.toLowerCase().includes(K)).map((he) => he.id)
        );
      }
    }, Mo);
    return () => clearTimeout(me);
  }, [x, h, ae]);
  const ie = H(() => b(!0), []), E = H(() => {
    T.current++, b(!1), v(""), O([]), L(-1), S(!1), c(null);
  }, []), X = H(() => {
    const $ = D.current;
    $.length !== 0 && ae((C.current + 1) % $.length, $);
  }, [ae]), fe = H(() => {
    const $ = D.current;
    $.length !== 0 && ae((C.current - 1 + $.length) % $.length, $);
  }, [ae]), oe = A.length, F = M >= 0 ? M + 1 : 0, J = ne(
    () => ({
      replyTo: i,
      setReplyTo: s,
      highlightedId: l,
      jumpToMessage: _,
      registerScrollToMessage: j,
      registerFileDropHandler: y,
      dropFiles: k,
      imagePreview: m,
      openImagePreview: N,
      closeImagePreview: I,
      setImagePreviewIndex: U,
      searchOpen: h,
      openSearch: ie,
      closeSearch: E,
      searchQuery: x,
      setSearchQuery: v,
      searching: P,
      matchCurrent: F,
      matchTotal: oe,
      goToNextMatch: X,
      goToPrevMatch: fe
    }),
    [
      i,
      l,
      _,
      j,
      y,
      k,
      m,
      N,
      I,
      U,
      h,
      ie,
      E,
      x,
      P,
      F,
      oe,
      X,
      fe
    ]
  );
  return /* @__PURE__ */ t(Qr.Provider, { value: J, children: e });
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
  const n = ee(), r = e.body?.trim() ?? "", a = Ho(e.attachments), i = Vo(e.attachments);
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
  const r = ee(), { icon: a, label: i, thumbnailUrl: s } = Xr(e);
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(Z, { icon: cr, size: "md", color: "default" }) }),
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
        a && /* @__PURE__ */ t(Z, { icon: a, size: "xs", color: "default" }),
        /* @__PURE__ */ t(xe, { className: "min-w-0 text-sm", lines: 1, children: i })
      ] })
    ] }),
    /* @__PURE__ */ t(
      de,
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
  const e = ee(), { sendMessage: n, onInputActivity: r, uploadFiles: a, transcribe: i, maxFiles: s } = De(), { replyTo: l, setReplyTo: c, registerFileDropHandler: d } = Fe(), f = ke(), [u, m] = R(""), [p, h] = R([]), b = z(null), x = z(null), v = z(0), A = p.some((E) => E.status === "uploading"), [O, M] = R(null), L = z(
    null
  ), P = H((E) => {
    L.current && clearTimeout(L.current), M(E), L.current = setTimeout(() => {
      M(null), L.current = null;
    }, qo);
  }, []);
  V(
    () => () => {
      L.current && clearTimeout(L.current);
    },
    []
  );
  const S = z(0);
  V(() => {
    S.current = p.length;
  }, [p]);
  const G = H(() => {
    const E = b.current;
    E && (E.style.height = "auto", E.style.height = `${Math.min(E.scrollHeight, Ko)}px`);
  }, []), B = z(""), w = H(
    (E) => {
      const X = B.current;
      m(X ? `${X} ${E}` : E), requestAnimationFrame(G);
    },
    [G]
  ), D = {
    "permission-denied": e.chat.micPermissionDenied,
    "device-error": e.chat.micError,
    "transcription-failed": e.chat.transcriptionError
  }, C = Ai({
    onTranscribe: i,
    onPartial: w,
    onFinal: w,
    onError: (E) => P(D[E])
  }), T = C.status === "transcribing", j = C.status === "recording", y = !!i && C.isSupported, k = (u.trim().length > 0 || p.length > 0) && !T && !A, N = H(
    (E) => {
      m(E.target.value), r(), G();
    },
    [G, r]
  ), I = H(
    async (E) => {
      if (E.length === 0 || !a) return;
      if (s !== void 0 && S.current + E.length > s) {
        P(
          e.chat.tooManyFilesError.replace("{{maxFiles}}", String(s))
        );
        return;
      }
      const X = E.map((oe) => ({
        id: `att-${v.current++}`,
        status: "uploading",
        name: oe.name
      }));
      h((oe) => [...oe, ...X]);
      const fe = new Set(X.map((oe) => oe.id));
      try {
        const F = (await a(E)).map((J, $) => ({
          id: X[$]?.id ?? `att-${v.current++}`,
          status: "ready",
          attachment: J
        }));
        h((J) => [
          ...J.filter(($) => !fe.has($.id)),
          ...F
        ]);
      } catch {
        h((oe) => oe.filter((F) => !fe.has(F.id))), P(e.chat.fileUploadError);
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
  V(() => {
    d((E) => {
      I(E);
    });
  }, [d, I]);
  const U = H(() => {
    if (!k) return;
    const E = p.flatMap(
      (fe) => fe.status === "ready" ? [fe.attachment] : []
    );
    n({
      body: u.trim(),
      attachments: E.length > 0 ? E : void 0,
      replyToId: l?.id
    }), m(""), h([]), c(null);
    const X = b.current;
    X && (X.style.height = "auto");
  }, [p, k, l, n, c, u]), Y = H(
    (E) => {
      const X = b.current, fe = X?.selectionStart ?? X?.value.length ?? 0, oe = X?.selectionEnd ?? X?.value.length ?? 0;
      m((F) => F.slice(0, fe) + E + F.slice(oe)), r(), requestAnimationFrame(() => {
        G();
        const F = b.current;
        if (F) {
          const J = fe + E.length;
          F.focus(), F.setSelectionRange(J, J);
        }
      });
    },
    [G, r]
  ), _ = H(
    (E) => {
      E.key === "Enter" && !E.shiftKey && (E.preventDefault(), U());
    },
    [U]
  ), ae = H(() => {
    B.current = u, C.start();
  }, [C, u]), ie = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col", children: [
    l && /* @__PURE__ */ t(
      Go,
      {
        message: l,
        onRemove: () => c(null)
      }
    ),
    /* @__PURE__ */ t(Ce, { initial: !1, children: O && /* @__PURE__ */ t(
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
              /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground-critical", children: O })
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
        "aria-busy": A,
        className: "flex flex-wrap gap-1 px-1 pt-1",
        children: p.map(
          (E) => E.status === "uploading" ? /* @__PURE__ */ t(q, { className: "h-9 w-36 rounded-[10px]" }, E.id) : /* @__PURE__ */ t(
            ur,
            {
              size: "md",
              file: {
                name: E.attachment.name,
                type: E.attachment.mimeType ?? (E.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: we,
                  onClick: () => h(
                    (X) => X.filter((fe) => fe.id !== E.id)
                  )
                }
              ]
            },
            E.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: b,
        value: u,
        onChange: N,
        onKeyDown: _,
        rows: 1,
        placeholder: j ? e.chat.listening : ie,
        className: g(
          "w-full resize-none bg-transparent p-3 pb-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    j ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ t(
          Ri,
          {
            stream: C.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            de,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: we,
              onClick: C.cancel
            }
          ),
          /* @__PURE__ */ t(
            de,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: Bt,
              onClick: C.stop
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
          onChange: (E) => {
            I(Array.from(E.target.files ?? [])), E.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          de,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.attachFile,
            icon: or,
            onClick: () => x.current?.click(),
            disabled: !a || T
          }
        ),
        /* @__PURE__ */ t(
          Ke,
          {
            variant: "outline",
            size: "md",
            label: e.chat.addEmoji,
            onSelect: Y
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        y && /* @__PURE__ */ t(
          de,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Li,
            onClick: ae,
            loading: T
          }
        ),
        /* @__PURE__ */ t(
          de,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Hn,
            onClick: U,
            disabled: !k
          }
        )
      ] })
    ] })
  ] }) }) });
}, Qo = ({
  visible: e
}) => {
  const n = ee();
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
        /* @__PURE__ */ t(Z, { icon: Di, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Xo = () => {
  const e = ee(), {
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
          de,
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
          de,
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
        de,
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
  const r = ee();
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
  const i = ee(), { searchOpen: s, openSearch: l } = Fe(), c = e.type === "dm" && e.presence !== void 0, d = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
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
      Z,
      {
        icon: $i,
        size: "sm",
        color: "secondary",
        "aria-label": i.chat.muted
      }
    ),
    e.statuses?.map((f) => /* @__PURE__ */ t(
      Z,
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
  ) : /* @__PURE__ */ o(ce, { children: [
    e.user ? /* @__PURE__ */ t(Zt, { user: e.user, children: d }) : d,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        de,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.search,
          icon: jt,
          onClick: l
        }
      ),
      r && /* @__PURE__ */ t(
        de,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? i.actions.collapse : i.actions.expand,
          icon: n ? Mi : ji,
          onClick: r
        }
      ),
      a && /* @__PURE__ */ t(
        de,
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
  de,
  {
    variant: "neutral",
    hideLabel: !0,
    icon: e,
    label: n,
    onClick: r
  }
) }), ec = () => {
  const e = ee(), { imagePreview: n, closeImagePreview: r, setImagePreviewIndex: a } = Fe(), [i, s] = R(null);
  V(() => s(document.body), []);
  const l = n !== null, c = n?.images ?? [], d = c.length, f = n?.index ?? 0, u = c[f], m = d > 1, p = H(
    (h) => {
      d !== 0 && a((f + h + d) % d);
    },
    [d, f, a]
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
  onReachBottom: u,
  unreadDividerId: m = null
}) {
  const [p, h] = R(!1), [b, x] = R(!0), [v, A] = R(!0), O = z(!0), M = z(i[0]?.id ?? null), L = z(i.at(-1)?.id ?? null), P = z(i.length), S = z(!1), G = z(null), B = z(null), w = z(null), D = H(
    (N = "smooth") => {
      r.length > 0 && n.scrollToIndex(r.length - 1, { align: "end", behavior: N });
    },
    [n, r.length]
  ), C = H(() => {
    const N = e.current, I = G.current;
    if (!N || !I) return null;
    const U = a.get(I.id);
    if (U == null) return null;
    const _ = (n.getOffsetForIndex(U, "start")?.[0] ?? 0) - I.delta;
    return N.scrollTop = _, _;
  }, [e, a, n]), T = H(
    (N) => {
      const I = n.getVirtualItemForOffset(N);
      if (!I) return null;
      for (let U = I.index; U < r.length; U++)
        if (r[U].type === "message") return U;
      return null;
    },
    [n, r]
  ), j = H(() => {
    const N = e.current;
    if (!N) return { scrollTop: 0, distanceFromBottom: 0 };
    const { scrollTop: I, scrollHeight: U, clientHeight: Y } = N, _ = U - I - Y, ae = _ < sc;
    return O.current = ae, x(ae), h(_ > Y * 0.5), A(I <= 0), { scrollTop: I, distanceFromBottom: _ };
  }, [e]), y = H(() => {
    if (!e.current) return;
    const { scrollTop: I, distanceFromBottom: U } = j();
    if (I < On && s && !l) {
      const Y = T(I), _ = Y != null ? r[Y] : null;
      if (_ && _.type === "message") {
        const ae = n.getOffsetForIndex(Y, "start")?.[0] ?? 0;
        G.current = { id: _.message.id, delta: ae - I };
      }
      c();
    }
    U < On && d && !f && u?.();
  }, [
    e,
    j,
    s,
    l,
    c,
    d,
    f,
    u,
    T,
    r,
    n
  ]), k = H(
    (N, I) => {
      const U = e.current;
      if (!U || N < 0) return;
      w.current != null && cancelAnimationFrame(w.current);
      let Y = null, _ = 0, ae = 0;
      const ie = () => {
        n.scrollToIndex(N, { align: I });
        const E = U.scrollTop;
        if (ae += 1, Y != null && Math.abs(E - Y) < 1 ? _ += 1 : _ = 0, Y = E, _ >= 2 || ae >= 12) {
          w.current = null, j();
          return;
        }
        w.current = requestAnimationFrame(ie);
      };
      ie();
    },
    [e, n, j]
  );
  return st(() => {
    const N = e.current;
    if (!N) return;
    if (!S.current && r.length > 0) {
      if (d)
        A(N.scrollHeight - N.clientHeight <= 0);
      else {
        const ie = m != null ? r.findIndex((E) => E.type === "divider") : -1;
        ie >= 0 ? k(ie, "start") : k(r.length - 1, "end");
      }
      S.current = !0, M.current = i[0]?.id ?? null, L.current = i.at(-1)?.id ?? null, P.current = i.length;
      return;
    }
    const I = i[0]?.id ?? null, U = i.at(-1), Y = i.length > P.current, _ = Y && I !== M.current, ae = Y && U?.id !== L.current;
    if (_ && G.current) {
      B.current != null && cancelAnimationFrame(B.current);
      let ie = C(), E = 0, X = 0;
      const fe = () => {
        const oe = C();
        if (X += 1, oe != null && ie != null && Math.abs(oe - ie) < 1 ? E += 1 : E = 0, ie = oe, oe == null || E >= 2 || X >= 12) {
          G.current = null, B.current = null;
          return;
        }
        B.current = requestAnimationFrame(fe);
      };
      B.current = requestAnimationFrame(fe);
    } else ae && !d && (U?.isMine || O.current) && (n.scrollToIndex(r.length - 1, { align: "end" }), x(!0));
    M.current = I, L.current = U?.id ?? null, P.current = i.length;
  }, [
    i,
    r,
    e,
    n,
    a,
    d,
    m,
    k,
    C
  ]), st(
    () => () => {
      B.current != null && cancelAnimationFrame(B.current), w.current != null && cancelAnimationFrame(w.current);
    },
    []
  ), { scrolledUp: p, atBottom: b, atTop: v, scrollToBottom: D, handleScroll: y };
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
  const { jumpToMessage: n } = Fe(), { currentUserId: r } = De(), a = ee(), { icon: i, label: s, thumbnailUrl: l } = Xr(e), d = e.author.id === r ? a.chat.you : e.author.name;
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
            i && /* @__PURE__ */ t(Z, { icon: i, size: "sm", color: "default" }),
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
  const a = ee();
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
  const r = ee(), { channel: a } = De(), i = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, s = /* @__PURE__ */ new Date(), l = a.type === "group";
  return /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        de,
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
      /* @__PURE__ */ t(Z, { icon: e, size: "md" }),
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
  const i = ee(), { toggleReaction: s, deleteMessage: l } = De(), { setReplyTo: c } = Fe(), [d, f] = R("menu"), u = (h) => {
    a(h), h || f("menu");
  }, m = (h) => {
    s(e.id, h), u(!1);
  }, p = (h) => () => {
    h(), u(!1);
  };
  return /* @__PURE__ */ o(Xn, { open: r, onOpenChange: u, children: [
    /* @__PURE__ */ t(Jn, { asChild: !0, children: /* @__PURE__ */ t(
      de,
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
        ) : /* @__PURE__ */ o(ce, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
            mc.map((h) => /* @__PURE__ */ t(
              de,
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
                  Z,
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
          n && /* @__PURE__ */ o(ce, { children: [
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
  const r = ee(), { openImagePreview: a } = Fe(), i = e.attachments;
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
  const r = ee(), { toggleReaction: a } = De();
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
  const [s, l] = R(!1), { highlightedId: c } = Fe(), d = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0 || !!e.replyTo, p = m || u;
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
                          // `ring-offset-f1-background` colours the offset gap with the
                          // transcript surface — without it the gap defaults to white and
                          // reads as an aura in dark mode.
                          d && "ring-1 ring-f1-special-ring ring-offset-2 ring-offset-f1-background",
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
  const r = ee(), a = ke();
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
  const r = ee(), a = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, i = new Date(e), s = /* @__PURE__ */ new Date(), l = n ? ct(i, s, a) : ea(i, s, a);
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-tertiary", children: l }) });
}, Nc = ({
  message: e,
  isGroup: n
}) => {
  const r = ee(), a = ke(), i = rc(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
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
  const n = ee(), r = ke();
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
  const c = g(kc(e, r), a && "pb-6"), [d] = R(
    () => i && e.type === "message" && e.isLastMessage && !s.has(e.message.id)
  );
  if (V(() => {
    e.type === "message" && s.add(e.message.id);
  }, [e, s]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(na, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(Cc, { leaving: l }) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(wc, { users: e.users, isGroup: n }) });
  const { message: f, isFirstOfRun: u, isLastOfRun: m, isLastMessage: p } = e, h = f.isMine, b = n && !h, x = b ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: _n(f.author) }) : void 0, v = b ? m ? /* @__PURE__ */ t(Zt, { user: f.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: _n(f.author) }) }) : x : void 0, A = /* @__PURE__ */ o(ce, { children: [
    /* @__PURE__ */ t(
      xc,
      {
        message: f,
        isMine: h,
        author: b && u ? f.author : void 0,
        bubbleGutter: v,
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
        children: A
      }
    )
  ) : /* @__PURE__ */ t("div", { className: g("flex flex-col gap-1", c), children: A });
}, Sc = ms(Ic), Fc = 280, Tc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, Ac = (e, n) => {
  for (let r = n; r < e.length; r++) {
    const a = e[r];
    if (a.type === "message") return a.message.createdAt;
    if (a.type === "separator") return a.at;
  }
  return null;
}, Rc = () => {
  const e = ee(), {
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
  } = De(), b = ke(), x = r.type === "group", v = z(null), { registerScrollToMessage: A } = Fe(), [O, M] = R(!1), [L, P] = R(p), [S, G] = R(!1), B = z(r.id), w = z(null), D = z(
    n[n.length - 1]?.id ?? null
  ), { rows: C, indexById: T } = ne(
    () => ic(n, { dividerId: L }),
    [n, L]
  ), j = ne(
    () => a.length > 0 ? [...C, { type: "typing", key: "typing", users: a }] : C,
    [C, a]
  ), y = Kn({
    count: j.length,
    getScrollElement: () => v.current,
    estimateSize: (K) => Tc(j[K]),
    getItemKey: (K) => j[K].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (K) => Math.round(K.getBoundingClientRect().height),
    overscan: 8
  }), { scrolledUp: k, atBottom: N, atTop: I, scrollToBottom: U, handleScroll: Y } = lc({
    viewportRef: v,
    virtualizer: y,
    rows: j,
    indexById: T,
    messages: n,
    hasMoreOlder: i,
    loadingOlder: s,
    onReachTop: l,
    hasMoreNewer: c,
    loadingNewer: d,
    onReachBottom: f,
    unreadDividerId: L
  }), _ = a.length > 0, ae = z(!1);
  V(() => {
    _ && !ae.current && N && U("smooth"), ae.current = _;
  }, [_, N, U]);
  const ie = z(null), E = H(() => {
    const K = ie.current;
    if (!K) return;
    if (K.kind === "bottom") {
      j.length > 0 && (y.scrollToIndex(j.length - 1, { align: "end" }), ie.current = null);
      return;
    }
    const he = T.get(K.id);
    he != null && (y.scrollToIndex(he, { align: "center", behavior: "smooth" }), ie.current = null);
  }, [T, y, j.length]);
  V(E, [E]), V(() => {
    A((K) => {
      ie.current = { kind: "id", id: K }, E();
    });
  }, [A, E]);
  const X = H(() => {
    c && u ? (ie.current = { kind: "bottom" }, u(tc)) : U();
  }, [c, u, U]), fe = N && O;
  V(() => {
    fe && m > 0 && h?.();
  }, [fe, m, h]);
  const oe = z(N);
  oe.current = N;
  const F = H(() => {
    w.current && (clearTimeout(w.current), w.current = null);
  }, []);
  V(() => {
    B.current !== r.id && (B.current = r.id, F(), G(!1), P(p));
  }, [r.id, p, F]), V(() => {
    const K = n[n.length - 1];
    !K || K.id === D.current || (D.current = K.id, !(!K.isMine || !L || S) && (G(!0), w.current = setTimeout(() => {
      w.current = null, P(null), G(!1), oe.current && U("auto");
    }, Fc)));
  }, [n, L, S, U]), V(() => F, [F]);
  const J = z(null);
  J.current === null && n.length > 0 && (J.current = new Set(n.map((K) => K.id)));
  const $ = J.current ?? Lc, Q = y.getVirtualItems(), me = Q[0], W = me ? Ac(j, me.index) : null, re = k || c;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => M(!0),
      onMouseLeave: () => M(!1),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: v,
            onScroll: Y,
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
                      transform: `translateY(${Q[0]?.start ?? 0}px)`
                    },
                    children: Q.map((K) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": K.index,
                        ref: y.measureElement,
                        children: /* @__PURE__ */ t(
                          Sc,
                          {
                            row: j[K.index],
                            isGroup: x,
                            isFirstRow: K.index === 0,
                            isLastRow: K.index === j.length - 1,
                            enterAnimation: !b,
                            animatedIds: $,
                            dividerLeaving: j[K.index].type === "divider" ? S : !1
                          }
                        )
                      },
                      K.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ce, { children: !I && /* @__PURE__ */ t(Ki, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(Ce, { children: k && W && /* @__PURE__ */ t(
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
                  /* @__PURE__ */ t(na, { at: W, withTime: !0 })
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
              de,
              {
                onClick: X,
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
      !e && /* @__PURE__ */ t(q, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((r, a) => /* @__PURE__ */ t(q, { className: g("h-8 rounded-2xl", r) }, a))
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
  const e = ee();
  return /* @__PURE__ */ t(Ec, { children: e.chat.error });
}, _c = () => {
  const e = ee();
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
  const { channel: a, status: i, messages: s } = De(), { dropFiles: l } = Fe(), c = z(0), [d, f] = R(!1);
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
}), ra = le(function({
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
}), Hc = le(function({ className: n, gap: r, children: a, ...i }, s) {
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
}, Gc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Kc = le(function({ header: n, children: r, action: a, summaries: i, alert: s, status: l, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = wr();
  V(() => {
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
                Z,
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
              se,
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
        a && /* @__PURE__ */ t(Zi, { children: /* @__PURE__ */ t(se, { variant: "neutral", size: "sm", ...a }) })
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
}), Yc = le(
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
                n?.title ? /* @__PURE__ */ t(Vt, { children: n.title }) : /* @__PURE__ */ t(q, { className: "h-4 w-full max-w-16" }),
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
                q,
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
  ue("Widget", ge(Kc, Yc))
), Ne = Object.assign(
  le(function({ chart: n, summaries: r, ...a }, i) {
    return /* @__PURE__ */ t(ze, { ref: i, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ze.Skeleton
  }
), Qc = ge(
  le(function({ canBeBlurred: n, ...r }, a) {
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
), Xc = ue(
  "AreaChartWidget",
  Qc
), Jc = le(function(n, r) {
  return /* @__PURE__ */ t(
    Ne,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(Ts, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Zc = ue(
  "BarChartWidget",
  ge(Jc, Ne.Skeleton)
), ed = ge(
  le(
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
), td = ue(
  "LineChartWidget",
  ed
), nd = ge(
  le(
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
), rd = ue(
  "PieChartWidget",
  nd
), ad = ge(
  le(
    function(n, r) {
      return /* @__PURE__ */ t(Ne, { ref: r, ...n, chart: null });
    }
  ),
  Ne.Skeleton
), id = ue(
  "SummariesWidget",
  ad
), sd = ge(
  le(
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
), ld = ue(
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
), cd = le(od), dd = (e, n) => /* @__PURE__ */ o(
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
), ud = le(dd), fd = {
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
}, gd = le(
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
                se,
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
  ue("ChartWidgetEmptyState", gd)
);
function bd(e, n) {
  const r = z(null), a = z(null), [i, s] = R({
    visibleItems: [],
    overflowItems: []
  });
  es({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const l = H(
    (u, m, p) => m < p - 1 ? u + n : u,
    [n]
  ), c = H(() => {
    if (!a.current) return [];
    const u = a.current.children, m = [];
    for (let p = 0; p < u.length; p++) {
      const h = u[p].getBoundingClientRect().height;
      m.push(h);
    }
    return m;
  }, []), d = H(
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
  ), f = H(() => {
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
  return V(() => {
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
  return V(() => {
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
          /* @__PURE__ */ t(Z, { icon: r, size: "md", className: a })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const vd = le(
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
        "icon" in i && i.icon && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(Z, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(Me, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), rf = le(
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
        Z,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      l && /* @__PURE__ */ t(
        Z,
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
] }), of = le(
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
              children: /* @__PURE__ */ t(Z, { icon: hr, size: "sm" })
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
        r && /* @__PURE__ */ t(Z, { icon: r, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(Z, { icon: rs })
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
  onChangeLocationId: v,
  canShowProject: A = !0,
  projectSelectorElement: O,
  breakTypeName: M
}) {
  const { status: L, statusText: P, subtitle: S, statusColor: G } = kd({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), B = L === "clocked-out", w = m?.map((_) => ({
    value: _.id,
    label: _.duration ? `${_.name} · ${_.duration}` : _.name,
    description: _.description,
    tag: _.isPaid ? a.paid : a.unpaid
  })) ?? [], [D, C] = R(!1), T = () => {
    if (w.length > 1)
      D || C(!0);
    else {
      const _ = w?.[0]?.value;
      u?.(_);
    }
  }, j = (_) => {
    p?.(_), C(!1), u?.(_);
  }, y = B && s.length && !c && l, k = s.find((_) => _.id === i), N = s.map((_) => ({
    value: _.id,
    label: _.name,
    icon: _.icon
  })), I = L === "break", [U, Y] = R(!1);
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
                    backgroundColor: G
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
                    backgroundColor: G
                  }
                }
              )
            ] })
          ] }),
          S && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: S })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          L === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            se,
            {
              onClick: d,
              label: a.clockIn,
              icon: sn
            }
          ) }),
          L === "clocked-in" && /* @__PURE__ */ o(ce, { children: [
            h && /* @__PURE__ */ t(ce, { children: w.length > 1 && p ? /* @__PURE__ */ t(
              it,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: j,
                open: D,
                onOpenChange: C,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  se,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: ln,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              se,
              {
                onClick: T,
                label: a.break,
                variant: "neutral",
                icon: ln,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              se,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: on
              }
            )
          ] }),
          L === "break" && /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t(
              se,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: on,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              se,
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
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(ce, { children: [
      /* @__PURE__ */ t(
        it,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: i,
          options: N,
          onChange: v,
          open: U,
          onOpenChange: Y,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Ad,
            {
              text: k?.name,
              placeholder: a.selectLocation,
              icon: k?.icon
            }
          ) })
        }
      ),
      A && O
    ] }) : /* @__PURE__ */ o(ce, { children: [
      l && k && /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t($e, { text: k.name, icon: k.icon }) }),
      A && O,
      I && M && /* @__PURE__ */ t($e, { text: M })
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
  let [{ positions: s, containerHeight: l, stones: c, availableSpots: d }, f] = R({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
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
  let [e, n] = R(), r = z(iu(n, 300));
  return V(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, lu = (e) => {
  let [n, r] = R(null);
  return V(() => {
    let a = new ResizeObserver((i) => {
      for (let s of i) r(s.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, ou = (e) => {
  var n = e, { children: r, style: a, transition: i = !1, transitionDuration: s = 500, transitionStep: l = 50 } = n, c = _d(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = su(), m = lu(f), { positions: p, containerHeight: h } = eu({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), b = ye({ minHeight: h ?? 0, position: "relative" }, a);
  return t("div", bt(ye({ ref: f, style: b }, c), { children: xr.map(r, (x, v) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let A = { style: au({ style: x.props.style, position: p[v], transition: i, transitionDuration: s }), ref: (O) => d.current[v] = O };
    return br(x, ye(ye({}, x.props), A));
  }) }));
};
const cu = { sm: 340, md: 480, lg: 640 }, $n = le(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const i = cu[r], [s, l] = R(), c = xr.toArray(n), d = z(null);
    return V(() => {
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
  le(function({ children: n }, r) {
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
  ue("WidgetEmptyState", uu)
), la = le(
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
  ue("WidgetSection", la)
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
