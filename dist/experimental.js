import { h as ma, B as ha, i as pa, j as ga, k as an, l as Qe, m as He, n as ba, o as g, p as ne, q as De, u as ee, T as xa, r as va, s as ya, R as wa, t as Na, v as ge, w as Ca, x as _t, y as It, z as it, A as ke, E as ka, G as Ia, H as Z, J as zt, K as Ke, L as fe, M as Sa, N as Fa, O as Hn, Q as Ta, S as Aa, U as oe, V as Y, W as Be, X as Ra, Y as La, Z as Da, _ as Pa, $ as Ea, a0 as Ne, a1 as Vn, a2 as Pe, a3 as lt, e as Gn, a4 as ze, a5 as Kn, a6 as Bt, a7 as xe, a8 as he, a9 as $t, aa as qn, ab as Oa, ac as Yn, ad as ve, ae as be, af as _a, ag as za, ah as Ba, ai as $a, aj as Ma, ak as Le, al as ft, am as Qn, an as ja, ao as Wa, ap as Ua, aq as mt, ar as Xn, as as Jn, at as Ha, au as Va, av as st, aw as Ga, ax as Zn, ay as Ka, az as qa, aA as Ya, aB as Qa, aC as Xa, aD as er, aE as tr, aF as nr, aG as St, aH as rr, aI as Ft, aJ as ar, aK as Ja, aL as Za, aM as ei, aN as ir, aO as ti, aP as Ie, aQ as We, aR as Tt, aS as lr, aT as ni, aU as Mt, aV as ri, aW as ai, aX as ii, aY as je, aZ as li, a_ as si, a$ as Xe, b0 as ln, b1 as At, b2 as oi, b3 as ci, a as di, b as ui, b4 as sr, b5 as fi, g as mi, F as hi, b6 as pi, b7 as or, b8 as gi, b9 as jt, ba as bi, bb as qe, bc as sn, bd as cr, be as dr, bf as xi, bg as ur, bh as vi, bi as yi, bj as wi, bk as fr, bl as Wt, bm as Ni, bn as Ci, bo as ki, bp as Ut, bq as Ii, br as Si, bs as Fi, bt as Ti, bu as Ai, bv as Ri, bw as mr, bx as Li, by as hr, bz as pr, bA as Di, bB as Pi, bC as Ei, bD as Oi, bE as _i, bF as zi, bG as Bi, bH as $i, bI as Mi, bJ as ji, bK as gr, bL as Wi, bM as Ui, bN as Hi, bO as br, bP as Vi, bQ as Gi, bR as Ki, bS as qi, bT as Yi, bU as Qi, bV as Se, bW as Ht, bX as Vt, bY as Gt, bZ as xr, b_ as Kt, b$ as vr, c0 as yr, c1 as Xi, c2 as Ji, c3 as Zi, c4 as el, c5 as tl, c6 as nl, c7 as rl, c8 as on, c9 as al, ca as il, cb as cn, cc as dn, cd as un, ce as ll, cf as sl, cg as ol, ch as cl, ci as wr, cj as dl, ck as ul } from "./F0CanvasPanel-BCegEV3b.js";
import { cw as Cf, cv as kf, cI as If, cs as Sf, ct as Ff, cl as Tf, cm as Af, cn as Rf, cL as Lf, cu as Df, cE as Pf, cF as Ef, cJ as Of, co as _f, cy as zf, cx as Bf, cp as $f, cq as Mf, cG as jf, cM as Wf, cH as Uf, cK as Hf, cD as Vf, cA as Gf, cC as Kf, cz as qf, cr as Yf, cB as Qf } from "./F0CanvasPanel-BCegEV3b.js";
import { jsx as t, jsxs as o, Fragment as de } from "react/jsx-runtime";
import ye, { forwardRef as ce, useRef as B, useTransition as fl, useState as R, useLayoutEffect as Ge, useId as Rt, useContext as Fe, createContext as Ee, useEffect as V, useCallback as H, useMemo as ie, Fragment as ml, isValidElement as hl, cloneElement as Nr, memo as pl, Children as Cr } from "react";
import { C as gl, P as bl, a as Ye, M as xl, p as vl, b as yl, R as fn, c as kr, u as wl, d as Nl, e as Cl, f as kl, g as Il, D as Sl, h as Fl, O as Ir, i as Sr, S as Tl, A as Al, B as Rl, L as Ll, j as Dl, V as Pl, k as El, l as Ol, m as _l } from "./useDataCollectionSource-6bgSj2Pt.js";
import { s as Jf, t as Zf, q as em, J as tm, v as nm, E as rm, aa as am, I as im, r as lm, ac as sm, ab as om, U as cm, af as dm, F as um, _ as fm, X as mm, N as hm, ah as pm, Q as gm, $ as bm, a0 as xm, w as vm, ad as ym, ae as wm, T as Nm, a1 as Cm, a7 as km, a9 as Im, x as Sm, z as Fm, G as Tm, Y as Am, ag as Rm, Z as Lm, W as Dm, ai as Pm, y as Em, H as Om, n as _m, o as zm, a3 as Bm, a4 as $m, a8 as Mm, K as jm, a5 as Wm, a2 as Um, a6 as Hm } from "./useDataCollectionSource-6bgSj2Pt.js";
const zl = ma("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Fr = ce(({ className: e, items: n }, r) => /* @__PURE__ */ t(ha, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(pa, {}),
  /* @__PURE__ */ t(ga, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Fr.displayName = "CollapsedBreadcrumbItem";
const qt = 50, Bl = 120, ot = 8;
function $l(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let i = e - a - ot, l = 0, s = 1;
  for (let c = r - 1; c > 0; c--) {
    const d = n[c];
    if (i < d)
      break;
    i -= d, l = c, s++;
  }
  if (s < r)
    for (i -= qt; i < 0 && s > 1; )
      i += n[l], l++, s--;
  return Math.max(2, s);
}
function mn(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + ot;
    default:
      return e[0] + qt + e[e.length - 1] + ot;
  }
}
function Ml(e, n) {
  return Bl * e + (n ? qt : 0) + ot;
}
function jl(e, n, r = []) {
  if (!e) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Ml(
        s,
        n.length > 2
      )
    };
  }
  const a = n.length <= 2, i = r.map((s) => s.clientWidth);
  if (a)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: mn(i)
    };
  const l = $l(e, i);
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
    minWidth: mn(i)
  };
}
function Wl({ breadcrumbs: e, append: n }) {
  const r = B(null), a = B(null), [, i] = fl(), [l, s] = R(null), c = (l?.collapsedItems || []).length > 0;
  return Ge(() => {
    const d = r.current, f = a.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const p = r.current?.clientWidth ?? null, h = Array.from(f.children);
      i(() => {
        const b = jl(
          p,
          e,
          h
        );
        s(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || l && !l.headItem ? /* @__PURE__ */ t(an, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    an,
    {
      ref: r,
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
            ref: a,
            children: e.map((d, f) => /* @__PURE__ */ t(
              Qe,
              {
                item: d,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              He(d)
            ))
          }
        ),
        l && l.headItem && /* @__PURE__ */ o(ba, { children: [
          /* @__PURE__ */ t(
            Qe,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${He(l.headItem)}`
          ),
          c && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t(
              Fr,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((d, f) => /* @__PURE__ */ t(
              Qe,
              {
                item: d,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              He(d)
            ))
          ] }),
          !c && /* @__PURE__ */ t(de, { children: l.tailItems.map((d, f) => /* @__PURE__ */ t(
            Qe,
            {
              item: d,
              isLast: f === l.tailItems.length - 1,
              isFirst: !1,
              children: f === l.tailItems.length - 1 ? n : void 0
            },
            He(d)
          )) })
        ] })
      ]
    },
    `breadcrumb-${He(e.at(-1)) ?? 0}`
  );
}
const Ul = De({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), hn = [
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
], Hl = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...i
}, l) => {
  const s = Rt(), {
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
      className: g(Ul({ size: n }), p),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        ne.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: l,
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
              /* @__PURE__ */ t("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              hn.map((b) => /* @__PURE__ */ t("clipPath", { id: `${s}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${s}-circle)`, children: hn.map((b) => /* @__PURE__ */ t(
              ne.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${b.id})`,
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
}, Tr = ce(Hl), Ar = Ee(null), Vl = 15, Gl = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [i, l] = R(n), [s, c] = R(!1), [d, f] = R(!0), [u, m] = R(
    Vl
  ), p = B(null), h = (x) => {
    p.current = x;
  }, b = () => {
    p.current && p.current();
  };
  return V(() => {
    l(n);
  }, [n]), V(() => {
    if (s && r?.(), !s) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [s, r]), /* @__PURE__ */ t(
    Ar.Provider,
    {
      value: {
        ...a,
        enabled: i,
        setEnabled: l,
        open: s,
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
}, $e = () => {
};
function ht() {
  const e = Fe(Ar);
  return e === null ? {
    enabled: !1,
    setEnabled: $e,
    open: !1,
    setOpen: $e,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: $e,
    setAutoClearMinutes: $e,
    clear: $e,
    setClearFunction: $e,
    autoClearMinutes: null
  } : e;
}
const Rr = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: i } = ht(), l = ee(), [s, c] = R(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(xa, { children: /* @__PURE__ */ o(va, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(ya, { asChild: !0, children: /* @__PURE__ */ t(
      ne.div,
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
          wa,
          {
            onCheckedChange: (d) => {
              a(d);
            },
            checked: i,
            "aria-label": i ? l.ai.closeChat : l.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ge(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              Na,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Tr,
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
    !i && /* @__PURE__ */ t(Ca, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, pn = "one_sidebar_locked", Lr = Ee(void 0);
function Ue() {
  const e = Fe(Lr);
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
function Kl({ children: e }) {
  const { currentPath: n } = _t(), [r, a] = R(!1), [i, l] = R(!1), s = r ? it.xl : it.md, c = It(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = R(() => {
    const L = localStorage.getItem(pn);
    return L !== null ? !!L : !0;
  }), [u, m] = R(!1), [p, h] = R(
    null
  ), b = H(
    ({ isInvokedByUser: L } = {
      isInvokedByUser: !0
    }) => {
      l(L ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = H(
    (L) => {
      c || (L.clientX < 32 && m(!0), L.clientX > 280 && m(!1));
    },
    [c, m]
  ), v = ie(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return V(() => {
    m(!1);
  }, [n]), V(() => {
    i && localStorage.setItem(pn, d ? "1" : "");
  }, [d, i]), V(() => () => {
    h(v);
  }, [v]), /* @__PURE__ */ t(
    Lr.Provider,
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
const gn = ne.create(Z), bn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, ql = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, i] = R(!1), l = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(ke, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        ge()
      ),
      onClick: l,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        gn,
        {
          size: "sm",
          icon: ka,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: bn,
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
        gn,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Ia,
          className: "outline-none",
          variants: bn,
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
function xn({
  icon: e,
  target: n,
  fallbackLabel: r
}) {
  const a = !n, i = n?.title || r, l = n?.onClick, s = l ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    fe,
    {
      ...l ? { onClick: l, type: "button" } : { href: s ?? "" },
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
function Yl({ previous: e, next: n, counter: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    r && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      r.current,
      "/",
      r.total
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        xn,
        {
          icon: zt,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        xn,
        {
          icon: Ke,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const Ql = ({
  currentModule: e,
  label: n,
  getUpdates: r,
  updatesPageUrl: a,
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
  const [m, p] = R("idle"), [h, b] = R(null), [x, ...v] = h ?? [], [L, O] = R(!1);
  V(() => {
    b(null), p("idle");
  }, [e]);
  const M = H(async () => {
    try {
      p("fetching");
      const D = await r();
      p("idle"), b(D);
    } catch {
      p("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    Sa,
    {
      open: L,
      onOpenChange: async (D) => {
        O(D), D && h === null && M(), s(D);
      },
      children: [
        /* @__PURE__ */ t(Fa, { asChild: !0, children: /* @__PURE__ */ t(
          fe,
          {
            variant: "outline",
            icon: Hn,
            hideLabel: !0,
            label: n,
            pressed: L,
            append: f && /* @__PURE__ */ t(Yt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Ta, { children: /* @__PURE__ */ o(
          Aa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Zl, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(ns, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && h !== null && h.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(es, { ...i, buttonUrl: a }) }),
                m === "idle" && h !== null && h.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Xl,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  h.length > 1 && /* @__PURE__ */ t(de, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: v.map((D, P) => /* @__PURE__ */ t(
                    Jl,
                    {
                      ...D,
                      onClick: d
                    },
                    P
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  ts,
                  {
                    ...l,
                    onClick: () => {
                      M();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                rs,
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
}, Xl = ({
  title: e,
  href: n,
  mediaUrl: r,
  unread: a,
  updated: i,
  onClick: l
}) => {
  const s = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Ra,
    {
      onClick: l,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Be,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: g(s, "text-f1-foreground no-underline"),
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
              La,
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
              a && /* @__PURE__ */ t(Yt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Jl = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: i
}) => {
  const l = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Da, { asChild: !0, className: l, onClick: i, children: /* @__PURE__ */ t(
    Be,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: g(
        l,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
        ] }),
        a && /* @__PURE__ */ t(Yt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Zl = ({
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
        oe,
        {
          variant: "outline",
          size: "sm",
          icon: Ke,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), Dr = ({
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
] }) }), es = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  Dr,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(Z, { icon: Hn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Be, { href: r, children: /* @__PURE__ */ t(oe, { label: n }) })
  }
), ts = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  Dr,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(Z, { icon: Pa, size: "lg" }),
    button: /* @__PURE__ */ t(oe, { variant: "outline", label: r, onClick: a })
  }
), ns = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(Y, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(Y, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(Y, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(Y, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(Y, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Yt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), rs = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [i, l] = R(e);
  V(() => {
    l(e);
  }, [e]);
  const s = () => {
    l(!1), n && n();
  }, c = (d) => {
    l(!1), a(), d && d();
  };
  return i && /* @__PURE__ */ o(de, { children: [
    /* @__PURE__ */ t(Ea, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          oe,
          {
            variant: "ghost",
            icon: Ne,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        gl,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
            bl,
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
}, Qt = Ee(null), vu = Qt.Provider;
function yu() {
  return Fe(Qt);
}
function as(e, n) {
  const r = n?.getItemTitle, a = n?.mode ?? "url", i = e !== null, l = e?.previousItem ?? null, s = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, d = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, u = e?.totalItems, m = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, h = e?.goToPrevious, b = e?.goToNext;
  return ie(() => {
    if (!i) return null;
    const x = f !== null && u !== void 0 ? { current: f + 1, total: u } : void 0, v = (M, D) => (M !== null ? r?.(M) : void 0) ?? D, L = a === "callback" ? m ? { onClick: h, title: v(l, "Previous") } : void 0 : c !== null ? { url: c, title: v(l, "Previous") } : void 0, O = a === "callback" ? p ? { onClick: b, title: v(s, "Next") } : void 0 : d !== null ? { url: d, title: v(s, "Next") } : void 0;
    return !L && !O && !x ? null : { previous: L, next: O, counter: x };
  }, [
    i,
    a,
    l,
    s,
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
function wu({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: i = !1,
  navigation: l,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ue(), p = Fe(Qt), h = l ?? p ?? void 0, b = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], x = n && Object.keys(n).length !== 0, v = i && r.length > 0, L = !i && a.length > 0, O = !i && !!s?.isVisible, M = b[b.length - 1], D = "navigation" in window ? window.navigation : null, P = i && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(ke, { children: !i && u !== "locked" && /* @__PURE__ */ t(
            ne.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                oe,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: Vn
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
                  oe,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: zt,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || v ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in M ? /* @__PURE__ */ t(Y, { className: "h-4 w-24" }) : M.label }) : /* @__PURE__ */ t(
                  Wl,
                  {
                    breadcrumbs: b,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      ql,
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
          !i && x && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(Pe, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            lt,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(lt, { text: n.text, variant: n.variant }) }),
          !i && x && (h || L || O) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          h && /* @__PURE__ */ t(Yl, { ...h }),
          h && L && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (O || L) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Ql,
              {
                ...s,
                currentModule: e.name
              }
            ) }),
            L && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((F, G) => /* @__PURE__ */ t(is, { action: F }, G)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Gn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Rr, {})
          ] })
        ] })
      ]
    }
  );
}
function is({ action: e }) {
  const n = B(null), [r, a] = R(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(ze, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    fe,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    fe,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Be,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        fe,
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
const ls = () => {
  const e = ee();
  return /* @__PURE__ */ o(
    ne.div,
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
          fe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Kn,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, ss = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: r
}) => {
  const a = B(null);
  V(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, os = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: i
  } = ht();
  return ss({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(ke, { children: n && /* @__PURE__ */ t(
    ne.div,
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
        ne.div,
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
}, cs = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(Bt, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        fe,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, ds = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
  benefits: i,
  actions: l,
  onShow: s,
  onHide: c,
  children: d
}) => /* @__PURE__ */ t(
  Gl,
  {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: l,
    onShow: s,
    onHide: c,
    children: d
  }
), us = () => {
  const {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: l,
    setOpen: s,
    onHide: c
  } = ht(), d = () => {
    s(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(os, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      fe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ne,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Tr, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t($t, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      l?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, u) => /* @__PURE__ */ t(
        cs,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(ls, {}) })
  ] }) : null;
}, fs = xe(
  he("AiPromotionChat", us)
), ms = xe(
  he("AiPromotionChatProvider", ds)
), Pr = De({
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
}), vn = {
  positive: Yn,
  warning: Oa,
  info: qn
}, yn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, hs = ce(
  function({ title: n, onClose: r, children: a, actions: i = [], variant: l }, s) {
    if (i.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`
      );
    const c = i.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: Pr({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  yn[l]
                ),
                children: [
                  vn[l] && /* @__PURE__ */ t(Z, { icon: vn[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ve,
                    {
                      className: yn[l] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            r && /* @__PURE__ */ t(
              oe,
              {
                variant: "ghost",
                icon: Ne,
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
              oe,
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
), ps = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Pr({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(Y, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(Y, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(Y, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(Y, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(Y, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(Y, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Er = ce(
  (e, n) => /* @__PURE__ */ t(hs, { ref: n, ...e })
), gs = ({ compact: e, variant: n }) => /* @__PURE__ */ t(ps, { compact: e, variant: n });
Er.displayName = "F0Callout";
const Nu = be(
  xe(Er),
  gs
), Or = ce(
  ({ value: e, max: n, color: r = "categorical-1", label: a }, i) => {
    const l = ee(), s = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), s)) : 0, d = Array.from({ length: s }, (u, m) => m < c), f = _a(r);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-label": a,
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": c,
        "aria-valuetext": l.t("audioPlayer.position", {
          current: c,
          total: s
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
Or.displayName = "F0SegmentedBar";
const Cu = xe(
  he("F0SegmentedBar", Or)
);
function bs({
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
        ge("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(Z, { icon: za, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          ve,
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
function xs({
  author: e,
  timestamp: n,
  onClick: r,
  isActive: a
}) {
  const { locale: i } = Ba(), l = $a(i), s = Ma(n, "PPPp", { locale: l }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        ge("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${s} by ${c}${a ? " (selected)" : ""}`,
      "aria-pressed": r ? a : void 0,
      children: [
        /* @__PURE__ */ t(ve, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            Le,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            ve,
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
function vs({
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
          ve,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(ft, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ t(
            bs,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            xs,
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
const ku = xe(
  he("F0VersionHistory", vs)
), _r = ce(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: i }, l) => {
    const s = ye.useRef(null);
    ye.useImperativeHandle(
      l,
      () => s.current,
      []
    );
    const c = Qn({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: s,
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
                children: d ? i(d) : /* @__PURE__ */ t(de, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
_r.displayName = "VirtualList";
const Lt = he("VirtualList", _r), zr = ({
  text: e,
  search: n,
  searchKeys: r = [],
  semiBold: a = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (r.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: e });
  const i = new RegExp(`(${n})`, "gi"), l = e.split(i);
  return /* @__PURE__ */ t("span", { className: g("line-clamp-1", a ? "font-semibold" : ""), children: l.map(
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
function pt(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i >= 0 && i < a.length - 1 ? a[i + 1].focus() : a.length > 0 && n?.();
}
function gt(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i > 0 ? a[i - 1].focus() : a.length > 0 && n?.();
}
const ys = ({
  entity: e,
  selected: n,
  onSelect: r,
  onRemove: a,
  marginLeft: i,
  search: l,
  goToFirst: s,
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
    } else v.key === "ArrowDown" ? pt(v.currentTarget, s) : v.key === "ArrowUp" && gt(v.currentTarget, c);
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
          Le,
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
              zr,
              {
                text: e.name,
                search: l,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Xn,
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
            icon: Yn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, rt = ({
  groupView: e,
  expanded: n,
  search: r,
  entity: a,
  selected: i,
  partialSelected: l,
  onSelect: s,
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
  const [L, O] = R(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ys,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: i,
        onSelect: s,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: v
      }
    );
  const M = (F) => {
    if (F.key === " ")
      F.preventDefault(), d(!n);
    else if (F.key === "Enter" && b)
      d(!n);
    else if (F.key === "Enter") {
      if (x) return;
      !i || l ? s(a) : i && c(a);
    } else F.key === "ArrowDown" ? pt(F.currentTarget, f) : F.key === "ArrowUp" && gt(F.currentTarget, u);
  }, D = () => {
    if (L)
      d(!n), O(!1);
    else {
      if (x || b) return;
      i ? c(a) : s(a);
    }
  };
  if (!a.subItems?.length) return null;
  const P = i || l;
  return /* @__PURE__ */ o(de, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        oe,
        {
          hideLabel: !0,
          icon: n ? ja : Wa,
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
                icon: Ua,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                zr,
                {
                  semiBold: !0,
                  text: a.name,
                  search: r,
                  searchKeys: a.searchKeys
                }
              ),
              /* @__PURE__ */ t(mt, { value: a.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Xn,
              {
                checked: P,
                disabled: x,
                onClick: D,
                onKeyDown: M,
                indeterminate: l,
                onPointerDown: (F) => {
                  F.stopPropagation(), O(!1);
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
rt.displayName = "EntitySelectListItem";
const wn = ({
  label: e,
  onCreate: n,
  goToFirst: r,
  goToLast: a
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? pt(l.currentTarget, r) : l.key === "ArrowUp" && gt(l.currentTarget, a);
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
        oe,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Jn,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: g("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Ve = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      oe,
      {
        disabled: e.disabled,
        variant: e.variant,
        onClick: e.onClick,
        label: e.label,
        icon: e.icon,
        size: "sm"
      }
    );
  const r = [e, ...n ?? []], a = r.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], i = (s) => {
    const c = r.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, l = r.every((s) => s.disabled);
  return /* @__PURE__ */ t(
    Ha,
    {
      items: a,
      value: e.label,
      disabled: l,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, ws = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: r,
  disabled: a,
  allVisibleSelected: i,
  anyVisibleSelected: l,
  loading: s,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || r), m = e && e.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let h, b, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: a || i
  } : void 0, v = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !l
  } : void 0;
  return x || (x = v, v = void 0), m && u ? (h = /* @__PURE__ */ t(
    Ve,
    {
      primaryAction: x,
      secondaryActions: v ? [v] : []
    }
  ), b = /* @__PURE__ */ t(
    Ve,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? h = /* @__PURE__ */ t(
    Ve,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (h = /* @__PURE__ */ t(Ve, { primaryAction: x, secondaryActions: [] }), v && (b = /* @__PURE__ */ t(Ve, { primaryAction: v, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    h,
    b
  ] }) });
}, Ns = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: i,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(Z, { icon: zl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), pt(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), gt(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: Va,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), vt = 384, yt = 36, Cs = 37, Nn = 1, Cn = 200, kn = '[data-avatarname-navigator-element="true"]', ks = ({
  groupView: e,
  entities: n,
  groups: r,
  selectedGroup: a,
  search: i,
  onSelect: l,
  onRemove: s,
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
  clearLabel: L,
  notFoundTitle: O,
  notFoundSubtitle: M,
  className: D,
  actions: P,
  onCreate: F,
  onCreateLabel: G,
  singleSelector: U = !1,
  loading: w = !1,
  disabled: k = !1,
  hiddenAvatar: N = !1
}) => {
  const T = ye.useRef(null), $ = ie(
    () => e ? n.reduce(
      (S, Q) => S + (Q.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = H(() => {
    setTimeout(() => {
      T.current?.scrollTo({ top: 0 });
    }, Nn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(kn)
      )[0]?.focus();
    }, Cn);
  }, []), C = H(() => {
    setTimeout(() => {
      T.current?.scrollTo({ top: T.current?.scrollHeight });
    }, Nn), setTimeout(() => {
      const S = Array.from(
        document.querySelectorAll(kn)
      );
      S[S.length - 1]?.focus();
    }, Cn);
  }, []), I = ie(
    () => new Map(p.map((S) => [S.id, S])),
    [p]
  ), E = H(
    (S) => {
      const Q = I.get(S.id);
      if (!e)
        return {
          selected: !!Q,
          partialSelected: !!Q
        };
      const z = (S.subItems ?? []).filter(
        (j) => Q?.subItems?.some(
          (re) => re.subId === j.subId
        )
      ), X = (S.subItems?.length ?? 0) === z.length, me = !X && z.length > 0;
      return { selected: X, partialSelected: me };
    },
    [e, I]
  ), K = H(
    (S) => {
      if (S.index === 0 && F)
        return /* @__PURE__ */ t(
          wn,
          {
            label: G ?? "",
            onCreate: () => F?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const Q = F ? S.index - 1 : S.index, z = n[Q], { selected: X, partialSelected: me } = E(z);
      return /* @__PURE__ */ t(
        rt,
        {
          expanded: z.expanded ?? !1,
          onExpand: () => b(z, !0),
          search: i,
          groupView: e,
          entity: z,
          onSelect: l,
          onRemove: s,
          selected: X,
          partialSelected: me,
          showGroupIcon: Is(r, a),
          singleSelector: U,
          goToFirst: y,
          goToLast: C,
          disabled: k,
          hiddenAvatar: N
        },
        z.id
      );
    },
    [
      F,
      G,
      k,
      n,
      E,
      y,
      C,
      e,
      r,
      N,
      s,
      l,
      b,
      i,
      a,
      U
    ]
  ), W = ie(() => e ? n.flatMap((S) => {
    const Q = Je(
      p ?? [],
      S.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: S.id,
          subName: S.name,
          subAvatar: S.avatar,
          expanded: S.expanded ?? Q?.expanded ?? !1,
          subItems: S.subItems,
          subSearchKeys: S.searchKeys
        }
      },
      ...(S.subItems ?? []).map((z) => ({
        parent: {
          ...S,
          expanded: S.expanded ?? Q?.expanded ?? !1
        },
        subItem: z
      }))
    ];
  }).filter(
    (S) => (!S.parent || S.parent.expanded) && (!!S.parent || !!S.subItem.subItems && S.subItem.subItems.length > 0)
  ) : n.map((S) => ({
    parent: null,
    subItem: {
      subId: S.id,
      subName: S.name,
      subAvatar: S.avatar,
      subSearchKeys: S.searchKeys
    }
  })), [e, n, p]), _ = H(
    (S) => {
      if (S.index === 0 && F)
        return /* @__PURE__ */ t(
          wn,
          {
            label: G ?? "",
            onCreate: () => F?.(i),
            goToFirst: y,
            goToLast: C
          }
        );
      const Q = F ? S.index - 1 : S.index, z = W[Q].parent, X = W[Q].subItem;
      if (!z) {
        const j = {
          id: X.subId,
          name: X.subName,
          avatar: X.subAvatar,
          subItems: X.subItems,
          expanded: X.expanded,
          searchKeys: X.subSearchKeys
        }, re = Je(
          p,
          j.id
        ), ue = (j?.subItems ?? []).filter(
          (Re) => re?.subItems?.some(
            (fa) => fa.subId === Re.subId
          )
        ), pe = (j.subItems?.length ?? 0) === ue.length, ae = !pe && ue.length > 0;
        return /* @__PURE__ */ t(
          rt,
          {
            groupView: !0,
            expanded: j.expanded ?? !1,
            onExpand: (Re) => b(j, Re),
            search: i,
            entity: j,
            onSelect: l,
            onRemove: s,
            selected: pe,
            partialSelected: ae,
            showGroupIcon: r.find((Re) => Re.value === a)?.groupType === "team",
            singleSelector: U,
            goToFirst: y,
            goToLast: C,
            hideLine: Q === W.length - 1,
            disabled: k,
            hiddenAvatar: N
          }
        );
      }
      let me = !!Je(p, X.subId);
      if (!me) {
        const j = Je(
          p,
          z.id
        );
        me = !!(z?.subItems ?? []).filter(
          (ue) => j?.subItems?.some(
            (pe) => pe.subId === ue.subId
          )
        ).find((ue) => ue.subId === X.subId);
      }
      return /* @__PURE__ */ t(
        rt,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: X.subId,
            name: X.subName,
            avatar: X.subAvatar,
            searchKeys: X.subSearchKeys
          },
          onSelect: () => {
            d(z, X);
          },
          onRemove: () => c(z, X),
          selected: !!me,
          partialSelected: !1,
          singleSelector: U,
          goToFirst: y,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: N
        }
      );
    },
    [
      W,
      p,
      i,
      U,
      y,
      C,
      l,
      s,
      r,
      k,
      b,
      a,
      d,
      c,
      N,
      F,
      G
    ]
  ), [J, te] = ie(() => {
    if (!n.length)
      return [!1, !1];
    let S = 0, Q = 0;
    if (!e)
      S = n.length, Q = n.reduce(
        (me, { id: j }) => me + (I.has(j) ? 1 : 0),
        0
      );
    else {
      const me = new Set(
        [...I.values()].flatMap(
          (j) => j.subItems?.map((re) => re.subId) ?? []
        )
      );
      n.forEach((j) => {
        const re = j.subItems ?? [];
        S += re.length, Q += re.filter(
          (ue) => me.has(ue.subId)
        ).length;
      });
    }
    const z = S > 0 && Q === S, X = Q > 0;
    return [z, X];
  }, [n, I, e]), A = W.length, q = !U && (v || L), le = P && P.length > 0, se = !w && (!U && q || le);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        U || w ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              U || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Ns,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: y,
                  goToLast: C
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                st,
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
              se ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(Bt, {}) }),
              !w && !$ && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: vt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: M })
                  ]
                }
              ),
              !w && (!!$ || F) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                Lt,
                {
                  height: vt,
                  itemCount: A + (F ? 1 : 0),
                  itemSize: (S) => {
                    if (S === 0 && F) return yt;
                    const Q = F ? S - 1 : S;
                    return W[Q]?.parent === null ? Cs : yt;
                  },
                  renderer: _,
                  ref: T
                }
              ) : /* @__PURE__ */ t(
                Lt,
                {
                  height: vt,
                  itemCount: n.length + (F ? 1 : 0),
                  itemSize: yt,
                  renderer: K,
                  ref: T
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          ws,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: U,
            totalFilteredEntities: $,
            allVisibleSelected: J,
            anyVisibleSelected: te,
            selectAllLabel: v,
            clearLabel: L,
            disabled: k,
            actions: P
          }
        )
      ]
    }
  );
}, Je = (e, n) => e.find((r) => r.id === n), Is = (e, n) => e.find((r) => r.value === n)?.groupType === "team", Ss = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Ga,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ t(
      Zn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: a ? { icon: Ka, color: "secondary" } : void 0
      }
    ),
    right: !r && /* @__PURE__ */ t(
      Z,
      {
        icon: Ne,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: a
  }
) }), Fs = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: r,
  selectedEntities: a,
  selectedLabel: i,
  disabled: l = !1,
  hiddenAvatar: s = !1
}) => {
  const c = ie(() => {
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
      Lt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            Ss,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: l,
              hiddenAvatar: s,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : r({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(de, {});
        }
      }
    ) })
  ] });
}, Ts = 500, In = 520, Sn = 210, Fn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: r,
  selectedEntities: a,
  selectedLabel: i,
  width: l,
  singleSelector: s = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...p
}) => {
  const h = (l ?? In) < Ts, b = !c && !s && !h, x = l ?? In, v = b ? x - Sn : x;
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
              ks,
              {
                ...p,
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a,
                singleSelector: s,
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
              width: Sn + "px"
            },
            children: /* @__PURE__ */ t(
              Fs,
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
}, As = ({
  placeholder: e,
  selected: n,
  selectedEntities: r,
  disabled: a = !1,
  hiddenAvatar: i = !1,
  label: l,
  labelIcon: s,
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
  append: L,
  size: O = "sm",
  open: M
}) => {
  const D = ie(
    () => r.some(
      (U) => U.subItems && U.subItems.length > 0
    ),
    [r]
  ), P = ie(() => D ? r.flatMap(
    (U) => (U.subItems ?? []).map((w) => ({
      parent: U,
      subItem: w
    }))
  ) : r.map((U) => ({
    parent: null,
    subItem: {
      subId: U.id,
      subName: U.name,
      subAvatar: U.avatar,
      subDeactivated: U.deactivated
    }
  })), [D, r]), F = P.length === 0 ? void 0 : P.length === 1 ? P[0].subItem.subName : P.length + " " + n, G = P.length === 1 ? P[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    qa,
    {
      onClickContent: m,
      role: "combobox",
      label: l,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !F ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: p,
      maxLength: h,
      clearable: !1,
      value: F,
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
      append: L ?? /* @__PURE__ */ t(de, { children: /* @__PURE__ */ t(Ya, { open: M, disabled: a, size: O }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            F && "text-f1-foreground",
            P.length === 1 && !i || c && !F ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            ve,
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
}, Iu = (e) => {
  const [n, r] = R(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (w) => {
    r(w), e.onOpenChange?.(w);
  };
  V(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, l] = R(e.entities), [s, c] = R(""), [d, f] = Qa("", 300), u = ie(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = Fe(Xa), h = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(w) {
    if (e.singleSelector) {
      e.onSelect(w), r(!1);
      return;
    }
    const k = e.selectedEntities ?? [], N = i.find((I) => I.id === w.id);
    if (!N)
      return;
    const T = new Set(
      (N.subItems ?? []).map((I) => I.subId)
    ), $ = /* @__PURE__ */ new Set([N.id]);
    i.forEach((I) => {
      I.id !== N.id && (I.subItems ?? []).some(
        (K) => T.has(K.subId)
      ) && $.add(I.id);
    });
    const y = [...k];
    function C(I) {
      const E = y.findIndex((K) => K.id === I.id);
      E >= 0 ? y[E] = I : y.push(I);
    }
    $.forEach((I) => {
      const E = i.find((_) => _.id === I);
      if (!E) return;
      const K = E.subItems?.filter(
        (_) => T.has(_.subId)
      ) ?? [], W = y.findIndex((_) => _.id === I);
      if (W >= 0) {
        const _ = y[W].subItems ?? [], J = new Set(_.map((A) => A.subId)), te = [
          ..._,
          ...K.filter((A) => !J.has(A.subId))
        ];
        C({
          ...E,
          subItems: te
        });
      } else
        C({
          ...E,
          subItems: K
        });
    }), e.onSelect(y);
  }
  function x(w, k) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...k }] }), r(!1);
    else {
      const N = e.selectedEntities ?? [], T = new Set(N.map((C) => C.id)), $ = new Map(
        N.map((C) => [C.id, C.subItems ?? []])
      );
      T.add(w.id), e.entities.forEach((C) => {
        C.subItems?.some(
          (E) => E.subId === k.subId
        ) && T.add(C.id);
      });
      const y = [];
      e.entities.forEach((C) => {
        if (T.has(C.id)) {
          let E = [...$.get(C.id) ?? []];
          C.subItems?.some(
            (_) => _.subId === k.subId
          ) && (E.some(
            (J) => J.subId === k.subId
          ) || E.push(k));
          const W = new Set(
            (C.subItems ?? []).map((_) => _.subId)
          );
          E = E.filter(
            (_) => W.has(_.subId)
          ), y.push({
            ...C,
            subItems: E
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
    let k = [];
    const N = e.selectedEntities ?? [];
    if (u) {
      const T = i.find(
        (y) => y.id === w.id
      );
      if (!T)
        return;
      const $ = new Set(
        (T.subItems ?? []).map((y) => y.subId)
      );
      for (const y of N) {
        const C = (y.subItems ?? []).filter(
          (I) => !$.has(I.subId)
        );
        C.length > 0 && k.push({
          ...y,
          subItems: C
        });
      }
    } else
      k = (N ?? []).filter((T) => T.id !== w.id);
    e.onSelect(k);
  }
  function L(w, k) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const N = e.selectedEntities ?? [], T = k.subId, $ = [];
    for (const y of N) {
      const C = y.subItems?.filter((I) => I.subId !== T) ?? [];
      C.length > 0 && $.push({
        ...y,
        subItems: C
      });
    }
    e.onSelect($);
  }
  function O() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let k = [];
    if (u) {
      const N = new Set(
        i.flatMap(
          (T) => (T.subItems ?? []).map(($) => $.subId)
        )
      );
      for (const T of w) {
        const $ = (T.subItems ?? []).filter(
          (y) => !N.has(y.subId)
        );
        $.length > 0 && k.push({
          ...T,
          subItems: $
        });
      }
    } else {
      const N = new Set(
        i.map((T) => T.id)
      );
      k = (w ?? []).filter((T) => !N.has(T.id));
    }
    e.onSelect(k);
  }
  function M() {
    const w = [...e.selectedEntities ?? []];
    i.forEach((k) => {
      const N = w.find((T) => T.id === k.id);
      if (!N)
        w.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const T = Array.from(
          /* @__PURE__ */ new Set([
            ...N.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        N.subItems = T;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const D = (w) => {
    c(w), f(w);
  }, P = (w, k) => {
    e.onItemExpandedChange(w.id, k), l(
      i.map(
        (N) => N.id === w.id ? { ...N, expanded: !w.expanded } : N
      )
    );
  };
  V(() => {
    if (!d) {
      l(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const k = e.entities.map((N) => {
        const T = Rs(N, d), $ = N.subItems?.map((y) => ({
          ...y,
          score: ct(
            d,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, C) => y.score - C.score);
        return {
          ...N,
          score: T,
          expanded: N.expanded ?? ($?.length ?? 0) > 0,
          subItems: $
        };
      }).filter((N) => N.score < 1 / 0).sort((N, T) => N.score - T.score);
      l(k);
    } else {
      const w = e.entities.map((k) => {
        const N = ct(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: N };
      }).filter((k) => k.score < 1 / 0).sort((k, N) => k.score - N.score);
      l(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    l
  ]);
  const F = B(null), [G, U] = R(0);
  return Ge(() => {
    const w = () => {
      F.current && U(F.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: F,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Fn,
        {
          groupView: u,
          entities: i,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: v,
          onSubItemRemove: L,
          onSubItemSelect: x,
          onClear: O,
          onSelectAll: M,
          selectedEntities: e.selectedEntities ?? [],
          search: s,
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
          width: e.width ?? G - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(er, { ...e, onOpenChange: a, open: n, children: [
    /* @__PURE__ */ t(
      tr,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          As,
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
      nr,
      {
        container: h,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Fn,
          {
            groupView: u,
            entities: i,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: b,
            onRemove: v,
            onSubItemRemove: L,
            onSubItemSelect: x,
            onClear: O,
            onSelectAll: M,
            selectedEntities: e.selectedEntities ?? [],
            search: s,
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
function Dt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Tn(e) {
  return Dt(e).split(/\s+/).filter((n) => n.length > 0);
}
function ct(e = "", n) {
  const r = Tn(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const i = Dt(a), l = Tn(a), s = Dt(e);
    if (i.includes(s) || r.every(
      (d) => l.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Rs(e, n) {
  const r = ct(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((i, l) => {
    const s = ct(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(i, s);
  }, 1 / 0)), Math.min(r, a);
}
const Ls = ({
  id: e,
  createdAt: n,
  title: r,
  description: a,
  icon: i,
  category: l,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = St({
    threshold: 0.1,
    onChange(p) {
      p && d?.(e);
    }
  }), u = rr(n, {
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
        /* @__PURE__ */ t(Ft, { icon: i ?? ar }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${l} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: s && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, Ds = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(Y, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(Y, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(Y, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(Y, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(Y, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Xt = he(
  "ActivityItem",
  be(Ls, Ds)
), Br = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Ps = ({
  title: e,
  items: n,
  onClickItem: r,
  onItemVisible: a
}) => /* @__PURE__ */ t(Br, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Xt,
  {
    ...i,
    onClick: () => r(i.id),
    onVisible: a
  },
  i.id
)) }), Es = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Br, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(Xt.Skeleton, {}, a)) }), at = be(Ps, Es), Os = 3, _s = ["today", "yesterday", "lastWeek", "lastMonth"], zs = (e) => ei(e, ([n]) => {
  const r = _s.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), Pt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Bs = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: i = 5
}) => {
  const l = ee(), s = Ja(e, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-i), d = Za((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = zs(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ o(ye.Fragment, { children: [
      /* @__PURE__ */ t(
        at,
        {
          title: u in l.date.groups ? l.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ t(Pt, {})
    ] }, u)),
    n && new Array(Os).fill(null).map((u, m) => /* @__PURE__ */ t(Xt.Skeleton, {}, m))
  ] });
}, $s = () => {
  const e = ee();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(at.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Pt, {}),
    /* @__PURE__ */ t(
      at.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Pt, {}),
    /* @__PURE__ */ t(
      at.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Su = he(
  "ActivityItemList",
  be(Bs, $s)
), Ms = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, js = {
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
function Ws({
  firstName: e,
  lastName: n,
  src: r,
  canReact: a,
  lastEmojiReaction: i,
  onReactionSelect: l,
  pickerRef: s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : js[ir(
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
                Le,
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
              ref: s,
              className: g(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Ye,
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
function Us(e) {
  const n = B(null), r = B(), a = H(() => {
    const l = n.current;
    if (!l) return;
    const s = ti.create(l, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    r.current = setInterval(() => {
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
  }, [e]), i = H(() => {
    clearInterval(r.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: a, handleMouseLeave: i };
}
const Hs = ({
  link: e,
  firstName: n,
  lastName: r,
  src: a,
  onClick: i,
  canReact: l = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = R(s), h = B(null);
  V(() => {
    p(s);
  }, [s]);
  const b = (D) => {
    p(D), c?.(D);
  }, x = Ie(), { canvasRef: v, handleMouseEnter: L, handleMouseLeave: O } = Us(x), M = We({
    emoji: Ms[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Be,
    {
      href: e,
      onClick: i,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ge()
      ),
      onMouseEnter: x ? void 0 : L,
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
          Ws,
          {
            firstName: n,
            lastName: r,
            src: a,
            canReact: l,
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
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(Tt, { date: u }) })
        ] })
      ]
    }
  );
}, Vs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(Y, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(Y, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(Y, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Fu = be(Hs, Vs), Tu = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(lr, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(oe, { label: r, variant: "outline", onClick: a }) })
] });
function $r({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: i
}) {
  const [l, s] = R(r), [c, d] = R(n), f = B(null), { fireEmojiConfetti: u } = ni(), m = (b, x) => {
    b.stopPropagation(), d(c + (l ? -1 : 1)), s(!l), i?.(x), l || u(x, f);
  }, p = a?.map((b) => b.name).join(", ") || "", h = /* @__PURE__ */ t(
    Mt,
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
        l && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ri(e),
      prepend: /* @__PURE__ */ t(We, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ai,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: g(
            "tabular-nums",
            l ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return p ? /* @__PURE__ */ t(Pe, { label: p, children: h }) : h;
}
function Gs({ items: e, onInteraction: n, locale: r, action: a }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    a && /* @__PURE__ */ t(
      oe,
      {
        label: a.label,
        icon: a.icon,
        onClick: a.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Ye, { onSelect: n, locale: r }),
    e.map((i) => /* @__PURE__ */ t(
      $r,
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
const Ks = he("Reactions", Gs), Mr = ce(function({ content: n, collapsed: r, id: a, className: i, tabIndex: l }, s) {
  return /* @__PURE__ */ t(
    ii,
    {
      ref: s,
      id: a,
      content: n,
      tabIndex: l,
      className: g(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        i
      )
    }
  );
});
Mr.displayName = "BasePostDescription";
const qs = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(Y, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(Y, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), jr = be(
  Mr,
  qs
), An = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((r) => {
      const a = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        je,
        {
          icon: r.icon,
          text: r.label ?? (r.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${r.label}: ${r.description}`
        }
      ) });
      return r.label || r.description ? /* @__PURE__ */ t(
        Pe,
        {
          label: r.label,
          description: r.description,
          children: a
        },
        r.label ?? r.description
      ) : a;
    })
  }
), Et = ce(
  function({
    label: n,
    title: r,
    subtitle: a,
    description: i,
    color: l,
    isPending: s,
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
          !m && /* @__PURE__ */ o(de, { children: [
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
                  r,
                  !!a && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${a}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(de, { children: [
                  /* @__PURE__ */ t(Tt, { date: f }),
                  /* @__PURE__ */ t(
                    Z,
                    {
                      icon: Ke,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(Tt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(An, { tags: c }),
              d && /* @__PURE__ */ t(An, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ys = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Wr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Ys.has(r);
}, Qs = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let i = li(a);
  const l = (s) => {
    s.stopPropagation();
  };
  return r && (i = `${i} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Wr(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(de, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(Y, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Et,
      {
        title: e,
        description: i,
        color: si.special.highlight,
        isPending: !1,
        toDate: a,
        noBackground: !0
      }
    )
  ] });
}, Xs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Y, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(Y, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(Y, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(Y, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Ur = be(Qs, Xs), Js = ({
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
        ge()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": r,
      onClick: a,
      children: i.actions.seeMore
    }
  ) });
}, Zs = ({
  id: e,
  author: n,
  group: r,
  createdAt: a,
  title: i,
  description: l,
  onClick: s,
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
  const L = Rt(), O = Rt(), M = B(null), [D, P] = R(null), [F, G] = R(!1), U = [f.views, f.comments].filter(Boolean).join(" · "), w = v && D?.id === e && D.description === l, k = !w, N = rr(a), T = () => {
    s(e);
  }, $ = (I) => {
    I.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, C = (I) => {
    I.preventDefault(), I.stopPropagation(), l && P({ id: e, description: l });
  };
  return V(() => {
    w && M.current?.focus();
  }, [w]), V(() => {
    v || P(null);
  }, [v]), V(() => {
    const I = M.current;
    if (!v || !I || w) {
      G(!1);
      return;
    }
    const E = () => {
      G(
        I.scrollHeight > I.clientHeight
      );
    };
    if (E(), typeof ResizeObserver > "u") return;
    const K = new ResizeObserver(E);
    return K.observe(I), () => K.disconnect();
  }, [v, w, l]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: T,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Xe,
          {
            href: n.url || "#",
            title: y,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              Le,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(Ft, { icon: ln }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(de, { children: [
                  /* @__PURE__ */ t(
                    Xe,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        Le,
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
                    Xe,
                    {
                      href: n.url,
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(Ft, { icon: ln, size: "sm" }) }),
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
                  Xe,
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
                  h?.map((I) => /* @__PURE__ */ t(
                    oe,
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
                  b?.length && /* @__PURE__ */ t(
                    ze,
                    {
                      items: b,
                      icon: At,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  ze,
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
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: N }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: L,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              l && /* @__PURE__ */ o(de, { children: [
                /* @__PURE__ */ t(
                  jr,
                  {
                    ref: M,
                    id: O,
                    content: l,
                    collapsed: k,
                    tabIndex: w ? -1 : void 0,
                    className: g(w && ge())
                  }
                ),
                v && F && !w && /* @__PURE__ */ t(
                  Js,
                  {
                    describedBy: L,
                    controls: O,
                    expanded: w,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Wr(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: $,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(Y, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Ur, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: U }),
          !x && /* @__PURE__ */ t(
            Ks,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: oi
              }
            }
          )
        ] })
      ]
    }
  );
}, eo = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(Y, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(Y, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(Y, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(Y, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(Y, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(jr.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(Y, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Ur.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(Y, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(Y, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Au = be(
  Zs,
  eo
), Hr = ye.forwardRef(({ person: e, onClick: n, ...r }, a) => {
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
          Le,
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
            r.info && /* @__PURE__ */ t(Pe, { label: r.info, children: /* @__PURE__ */ t(
              Z,
              {
                icon: qn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((l, s) => /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t(je, { ...l }, l.text),
            s < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(ci, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              oe,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              oe,
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
}), to = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(Y, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(Y, { className: "h-4" }),
    /* @__PURE__ */ t(Y, { className: "h-4" })
  ] })
] });
Hr.displayName = "OnePersonListItem";
const Ru = xe(
  he(
    "OnePersonListItem",
    be(Hr, to)
  )
), Rn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function no({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Kl, { children: /* @__PURE__ */ t(
    ro,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function ro({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  const l = a?.enabled ? di : i?.enabled ? ms : ml, s = a?.enabled ? a : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(l, { ...s, children: /* @__PURE__ */ t(
    so,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const Lu = he(
  "ApplicationFrame",
  no
), ao = ({ contentId: e }) => {
  const n = ee();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: ge(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function io(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function lo(e, n) {
  const { sidebarState: r, toggleSidebar: a } = Ue(), i = B(e);
  V(() => {
    n && io(
      e,
      i.current,
      r
    ) && a({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, r, a]);
}
function so({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: i
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = Ue(), f = Ie(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    canvasEntities: h,
    closeCanvas: b,
    chatWidth: x,
    resizable: v,
    panelSide: L
  } = ui(), O = m === "fullscreen", M = m === "canvas", { open: D } = ht(), P = v ? x : fi, F = L === "left", G = B(O), U = O && !G.current, w = !O && G.current, [
    k,
    N
  ] = R(!1);
  V(() => {
    !O && G.current && N(!0), G.current = O;
  }, [O]);
  const T = O || k || w, $ = ie(() => U ? { duration: 0.15, ease: "easeOut" } : w ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [U, w]), y = It(
    `(max-width: ${it.xl}px)`,
    { initializeWithValue: !0 }
  ), C = It(`(max-width: ${it.md}px)`, {
    initializeWithValue: !0
  }), I = u && !F;
  return V(() => {
    d(I);
  }, [I, d]), V(() => {
    d(D);
  }, [D, d]), lo(I, y), /* @__PURE__ */ t(
    xl,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(sr, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(ke, { children: l === "unlocked" && /* @__PURE__ */ t(
            ne.nav,
            {
              className: g(
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
              className: g(
                l !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                l === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (E) => {
                l === "hidden" ? E?.setAttribute("inert", "") : E?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(ao, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            ne.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !C && !F ? P : 0,
                paddingLeft: u && !C && F ? P : 0
              },
              transition: {
                paddingRight: Rn,
                paddingLeft: Rn
              },
              children: [
                /* @__PURE__ */ t(
                  ne.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      T ? "overflow-hidden" : "overflow-auto",
                      !u && !D && "xs:pr-1",
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ t(
                      ne.div,
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
                      F ? "justify-start" : "justify-end",
                      C ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        F ? "right-0" : "left-0"
                      )
                    ),
                    style: C ? void 0 : F ? { left: P } : { right: P },
                    children: /* @__PURE__ */ t(
                      mi,
                      {
                        content: p,
                        onClose: b,
                        entities: h,
                        side: F ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  ne.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      C ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        F ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        T || M ? "z-20" : "z-0",
                        l === "hidden" && T ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: C || O ? "100%" : P
                    },
                    transition: $,
                    onAnimationComplete: () => {
                      k && N(!1);
                    },
                    children: /* @__PURE__ */ t(hi, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(fs, {})
        ] }) })
      ] })
    }
  );
}
const Vr = ({
  firstName: e,
  lastName: n,
  src: r,
  "aria-label": a,
  "aria-labelledby": i,
  pulse: l,
  onPulseClick: s
}) => {
  const c = ee(), [d, f] = R(!l);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(ke, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ t(
    ne.div,
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
        ne.div,
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
          children: /* @__PURE__ */ t(We, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ o(
    ne.div,
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
          Zn,
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
        l ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          Mt,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              Z,
              {
                icon: yl[l],
                color: vl[l],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          ne.div,
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
              fe,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: pi,
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
Vr.displayName = "PulseAvatar";
const oo = De({
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
function Gr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: s } = Ue();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: oo({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || i === "hidden") && /* @__PURE__ */ t(
              oe,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: Vn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center",
                  s ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    Vr,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    Le,
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
                        className: g(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: g(
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
            /* @__PURE__ */ t(Gn, {}),
            /* @__PURE__ */ t(Rr, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
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
Gr.displayName = "DaytimePage";
const Du = xe(
  he("DaytimePage", Gr)
);
function co(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: i, target: l }) => ({
    label: n,
    description: r,
    href: a,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function uo({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(ze, { items: co(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ge()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(Z, { icon: or, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Pu = xe(
  he("OmniButton", uo)
);
function Kr({ children: e, header: n, embedded: r = !1 }) {
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
Kr.displayName = "Page";
const Eu = xe(he("Page", Kr)), fo = (e) => e.reduce(
  (n, r) => n + r.chats.filter((a) => (a.unreadCount ?? 0) > 0).length,
  0
), qr = Ee(null), Yr = Ee(null), Ln = (e, n, r) => e.map((a) => a.id === n ? r(a) : a), Ze = (e, n) => e.map((r) => ({ ...r, chats: n(r.chats) })), Ou = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: r
}) => {
  const [a, i] = R(n), [l, s] = R(
    r
  ), c = ie(
    () => ({
      setGroups: i,
      setActiveChat: (f) => s(f ?? void 0),
      upsertChat: (f, u) => i((m) => m.some(
        (h) => h.chats.some((b) => b.id === u.id)
      ) ? Ze(
        m,
        (h) => h.map((b) => b.id === u.id ? { ...b, ...u } : b)
      ) : Ln(m, f, (h) => ({
        ...h,
        chats: [...h.chats, u]
      }))),
      updateChat: (f, u) => i(
        (m) => Ze(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, ...u } : h)
        )
      ),
      removeChat: (f) => i(
        (u) => Ze(u, (m) => m.filter((p) => p.id !== f))
      ),
      setUnread: (f, u) => i(
        (m) => Ze(
          m,
          (p) => p.map((h) => h.id === f ? { ...h, unreadCount: u } : h)
        )
      ),
      reorder: (f, u) => i(
        (m) => Ln(m, f, (p) => {
          const h = new Map(p.chats.map((v) => [v.id, v])), b = u.map((v) => h.get(v)).filter((v) => !!v), x = p.chats.filter((v) => !u.includes(v.id));
          return { ...p, chats: [...b, ...x] };
        })
      )
    }),
    []
  ), d = ie(
    () => ({
      groups: a,
      activeChatId: l,
      unreadChatsCount: fo(a)
    }),
    [a, l]
  );
  return /* @__PURE__ */ t(Yr.Provider, { value: c, children: /* @__PURE__ */ t(qr.Provider, { value: d, children: e }) });
}, mo = () => {
  const e = Fe(qr);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, Qr = () => {
  const e = Fe(Yr);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, ho = () => {
  const e = mo(), n = Qr();
  return ie(() => ({ ...e, ...n }), [e, n]);
}, _u = () => Qr(), Jt = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: i,
  highlightWhenCollapsed: l,
  collapsedBadge: s,
  isDragging: c,
  wasDragging: d
}) => {
  const [f, u] = R(n), m = Ie(), p = l && !f, h = () => {
    if (c || d?.current) return;
    const b = !f;
    u(b), a?.(b);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(gi, { open: f, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ge("focus-visible:ring-inset"),
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
            ne.div,
            {
              initial: !1,
              animate: { rotate: f ? 0 : -90 },
              transition: { duration: m ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(Z, { icon: jt, size: "xs" })
            }
          ),
          !f && s && /* @__PURE__ */ t("span", { className: "ml-auto", children: s })
        ]
      }
    ) }),
    /* @__PURE__ */ t(bi, { forceMount: !0, className: "flex flex-col gap-1 mt-0.5", children: /* @__PURE__ */ t(
      ne.div,
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
}, Xr = ({
  className: e
}) => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": "true",
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(Y, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(Y, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), po = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(Y, { className: "h-3 w-24 rounded" }) }), go = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((r, a) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(po, {}),
      Array.from({ length: n }).map((i, l) => /* @__PURE__ */ t(Xr, {}, l))
    ] }, a))
  }
), Jr = ({ count: e }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-label": `${e} unread`,
    className: "flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info",
    children: e > 99 ? "+99" : e
  }
), bo = () => /* @__PURE__ */ t(
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
), xo = ({
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
) }), vo = ({
  chat: e,
  isActive: n,
  onClick: r
}) => {
  const a = ee();
  if (e.loading)
    return /* @__PURE__ */ t(Xr, {});
  const i = !!e.unreadCount, l = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), s = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o("div", { className: "group/row relative", children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        onClick: r,
        "aria-pressed": n,
        className: g(
          "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
          ge("focus-visible:ring-inset"),
          n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
        ),
        children: [
          e.typing ? /* @__PURE__ */ t(bo, {}) : /* @__PURE__ */ o("div", { className: "relative flex flex-shrink-0 items-center", children: [
            e.avatar.type === "emoji" ? (
              // Emoji groups show the glyph alone (no avatar chrome) so it isn't
              // shrunk inside the bordered avatar box.
              /* @__PURE__ */ t("span", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ t(We, { emoji: e.avatar.emoji, size: "sm" }) })
            ) : /* @__PURE__ */ t(qe, { size: "xs", avatar: e.avatar }),
            l && /* @__PURE__ */ t(xo, { presence: l, isActive: n })
          ] }),
          /* @__PURE__ */ t(
            ve,
            {
              tag: "span",
              className: g(
                "line-clamp-1 flex-1 py-0.5",
                i ? "text-f1-foreground font-semibold" : "text-f1-foreground-secondary font-medium"
              ),
              lines: 1,
              children: e.label
            }
          ),
          (s || e.unreadCount) && /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "gap-1 flex items-center justify-center transition-opacity",
                // On hover the pin button takes this spot, so fade the badge/status out.
                e.onTogglePin && "group-hover/row:opacity-0"
              ),
              children: [
                s && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
                  sn,
                  {
                    icon: s.icon,
                    size: "sm",
                    "aria-label": s.label,
                    color: "default"
                  }
                ) }),
                e.unreadCount && /* @__PURE__ */ t(Jr, { count: e.unreadCount })
              ]
            }
          )
        ]
      }
    ),
    e.onTogglePin && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: (c) => {
          c.stopPropagation(), e.onTogglePin?.();
        },
        "aria-label": e.pinned ? a.chat.unpin : a.chat.pin,
        "aria-pressed": e.pinned,
        className: g(
          "absolute right-2 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded",
          "text-f1-foreground-secondary hover:text-f1-foreground",
          "opacity-0 group-hover/row:opacity-100 focus-visible:opacity-100",
          ge()
        ),
        children: /* @__PURE__ */ t(sn, { icon: e.pinned ? cr : dr, size: "sm" })
      }
    )
  ] });
}, yo = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a new conversation to see it here."
}, wo = ({ action: e }) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: g(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      ge("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(Z, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), zu = ({
  actions: e = [],
  emptyState: n,
  loading: r = !1
}) => {
  const { groups: a, activeChatId: i, setActiveChat: l } = ho(), s = Ie(), c = a.some((u) => u.chats.length > 0), d = { ...yo, ...n }, f = r && !c;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((u) => /* @__PURE__ */ t(wo, { action: u }, u.label)) }),
    f && /* @__PURE__ */ t(go, {}),
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
        Jt,
        {
          title: u.title,
          isOpen: u.isOpen,
          highlightWhenCollapsed: m > 0,
          collapsedBadge: m > 0 ? /* @__PURE__ */ t(Jr, { count: m }) : void 0,
          children: /* @__PURE__ */ t(ke, { initial: !1, children: u.chats.map((p) => /* @__PURE__ */ t(
            ne.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: s ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                vo,
                {
                  chat: p,
                  isActive: p.id === i,
                  onClick: () => {
                    l(p.id), p.onClick?.();
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
function No({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: i = !1,
  additionalOptions: l = []
}) {
  const s = ie(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(Y, { className: "size-6" }),
    /* @__PURE__ */ t(Y, { className: "h-3 w-14" })
  ] }) : e.length + (l?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    Dn,
    {
      company: s,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Co,
    {
      companies: e,
      selected: s,
      onChange: r,
      additionalOptions: l,
      children: /* @__PURE__ */ t(
        Dn,
        {
          company: s,
          withNotification: i
        }
      )
    }
  ) });
}
const Co = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: i = []
}) => {
  const l = ee(), [s, c] = R(!1), d = ie(
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
    st,
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
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ge()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              ne.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(Z, { icon: jt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Dn = ({
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
        xi,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: ur, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(ve, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function Bu({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: i,
  onDropdownClick: l,
  hasActivityUpdates: s
}) {
  const c = ee();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(ze, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ge("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ t(
            Le,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(ve, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    r && /* @__PURE__ */ t(Pe, { label: c.notifications, shortcut: a, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        oe,
        {
          icon: ar,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(vi, { type: "highlight", size: "sm", icon: ur }) })
    ] }) })
  ] });
}
function ko({ isExpanded: e }) {
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
function Io() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = Ue(), i = B(null);
  return V(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Mt,
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !a }), children: /* @__PURE__ */ t(ko, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: a }), children: /* @__PURE__ */ t(Z, { icon: Ne, size: "md" }) })
      ]
    }
  );
}
function $u({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: i,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      No,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: l,
        withNotification: a,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(Io, {})
  ] });
}
function So() {
  const [e, n] = R(!1);
  return V(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Zr = Ee(void 0);
function Fo({ children: e }) {
  const [n, r] = R(!1), [a, i] = R(null);
  return /* @__PURE__ */ t(
    Zr.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: i },
      children: e
    }
  );
}
function Zt() {
  const e = Fe(Zr);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const To = ({
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
    e.tag && /* @__PURE__ */ t(je, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(mt, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), Ao = ({ item: e }) => {
  const { isActive: n } = _t(), { label: r, icon: a, ...i } = e, l = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Be,
    {
      ...i,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ge("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(To, { item: e, active: l })
    }
  );
}, Ro = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: i,
  total: l,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = ee(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: h } = Zt(), { isActive: b } = _t(), x = b(e.href, { exact: e.exactMatch }), v = B(!1), [L, O] = R(!1), M = i === 0, D = i === l - 1, P = l === 1, F = ie(() => {
    const T = [];
    return !P && !M && T.push({
      label: f.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: yi
    }), !P && !D && T.push({
      label: f.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: wi
    }), T.length > 0 && T.push({ type: "separator" }), T.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: fr,
      critical: !0
    }), T;
  }, [P, M, D, f, s, i, a, e]), G = () => {
    m(!0), O(!1), h(e.href || null), v.current = !0;
  }, U = () => {
    m(!1), h(null), c(), setTimeout(() => {
      v.current = !1;
    }, 0);
  }, w = u && p === e.href, k = ie(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      L && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, L, w, d]
  ), N = ie(() => /* @__PURE__ */ o(de, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(Do, { tooltip: n, children: /* @__PURE__ */ o(
      Be,
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
          ) : e.avatar ? /* @__PURE__ */ t(qe, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            ve,
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
          ze,
          {
            open: L,
            onOpenChange: O,
            items: F,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Z, { icon: At, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, L, w, F, n]);
  return d ? /* @__PURE__ */ t(
    kr,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: G,
      onDragEnd: U,
      className: k,
      whileDrag: {
        scale: 1.05
      },
      children: N
    }
  ) : /* @__PURE__ */ t("div", { className: k, children: N });
}, wt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: i,
  currentOrder: l
}) => {
  const { isDragging: s, setIsDragging: c } = Zt(), d = B(!1), f = wl(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, l && i?.(l);
    }, 0);
  }, p = (b) => {
    !s && !d.current && a?.(e, b);
  }, h = /* @__PURE__ */ t(
    Jt,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: p,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: e.items.map((b, x) => /* @__PURE__ */ t(Ao, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    kr,
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
function Mu({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: i
}) {
  const l = B(null), s = e.filter(
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
  ), h = So();
  return /* @__PURE__ */ t(Fo, { children: /* @__PURE__ */ t(sr, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    Lo,
    {
      disableDragging: h,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: p,
      favorites: i,
      onFavoritesChange: a,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function Lo({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: i,
  onDragEnd: l,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = ee(), { isDragging: m } = Zt(), p = e.some((y) => y.isRoot), h = e.filter((y) => !y.isRoot).length > 0, b = n.length > 0, x = B(null), [v, L] = R(s), O = s.length > 0;
  V(() => {
    JSON.stringify(s) !== JSON.stringify(v) && L(s);
  }, [s]);
  const M = (y) => {
    L(y);
  }, D = H(
    (y) => {
      const C = v.filter((I) => I.href !== y.href);
      L(C), c?.(C);
    },
    [v, c]
  ), P = H(
    (y, C) => {
      if (C < 0 || C >= v.length) return;
      const I = [...v], [E] = I.splice(y, 1);
      I.splice(C, 0, E), L(I), c?.(I);
    },
    [v, c]
  ), [F, G] = R(!1), U = B(null);
  V(() => {
    n.length > 0 && !F && (r([...n]), G(!0));
  }, [n, r, F]), V(() => {
    const y = () => {
      U.current !== null && window.clearTimeout(U.current), U.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), U.current !== null && window.clearTimeout(U.current);
    };
  }, [a, n, d]);
  const w = "flex flex-col gap-0.5", k = ie(
    () => v.reduce(
      (y, C, I) => (C.label in y || (y[C.label] = []), y[C.label].push(I), y),
      {}
    ),
    [v]
  ), N = ie(
    () => O && v.map((y, C) => /* @__PURE__ */ t(
      Ro,
      {
        isSortable: !f,
        tooltip: (k[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: x,
        onRemove: D,
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
      O,
      v,
      k,
      D,
      P,
      c,
      f
    ]
  ), T = "flex flex-col gap-3", $ = ie(() => n.map((y) => /* @__PURE__ */ t(
    wt,
    {
      category: y,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: i,
      onDragEnd: l,
      currentOrder: n
    },
    y.id
  )), [n, f, a, i, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, C) => /* @__PURE__ */ t(
          wt,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        O && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Jt, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: w, children: N }) : /* @__PURE__ */ t(
          fn,
          {
            axis: "y",
            values: v,
            onReorder: M,
            className: w,
            children: N
          }
        ) }) }) }),
        h && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, C) => /* @__PURE__ */ t(
          wt,
          {
            category: y,
            onCollapse: i
          },
          `fixed-${C}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: T, children: $ }) : /* @__PURE__ */ t(
              fn,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: T,
                children: $
              }
            )
          }
        )
      ]
    }
  );
}
const Do = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(Pe, { description: e, children: n }) : n;
function ju({
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
        ge()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(Z, { icon: Wt, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Ni, { keys: r }) })
      ]
    }
  ) });
}
const Pn = ({ position: e }) => /* @__PURE__ */ t(
  ne.div,
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
function Po({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: i, isSmallScreen: l } = Ue(), s = Ie(), [c, d] = St({ threshold: 1 }), [f, u] = St({ threshold: 1 }), m = ee(), p = {
    x: {
      ease: i !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, h = () => r ? hl(r) && a ? Nr(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ o(
    ne.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: g(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        i === "locked" ? "h-full" : g(
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
      transition: p,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(ft, { className: "h-full", children: [
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
          /* @__PURE__ */ o(ke, { children: [
            !d && /* @__PURE__ */ t(Pn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(Pn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: h() })
      ]
    }
  );
}
const Wu = xe(Po), Eo = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), Oo = ({
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
        ki({ variant: a }),
        Ci({ size: "md" }),
        ge()
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
            e.badge ? /* @__PURE__ */ t(Eo, {}) : null
          ]
        }
      )
    }
  );
}, Uu = ({
  tabs: e,
  activeTab: n,
  onTabChange: r,
  search: a
}) => {
  const i = ee(), l = a.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-4 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((s) => /* @__PURE__ */ t(
          Oo,
          {
            tab: s,
            isActive: s.id === n,
            onClick: () => r(s.id)
          },
          s.id
        ))
      }
    ),
    /* @__PURE__ */ t(
      oe,
      {
        variant: "ghost",
        size: "md",
        icon: Wt,
        label: l,
        hideLabel: !0,
        onClick: a.onClick
      }
    )
  ] });
}, _o = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, En = {
  approved: {
    icon: $t,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ne,
    type: "critical",
    size: "sm"
  }
}, zo = {
  icon: or,
  type: "neutral",
  size: "sm"
}, Bo = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, $o = (e) => e in En ? En[e] : zo;
function On(e) {
  return Bo[e ?? "neutral"] ?? 0;
}
const Mo = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const i = ee(), l = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = i.approvals.statuses[r], c = ie(() => a.map((d) => {
    const f = $o(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => On(f.badge?.type) - On(d.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ t(lt, { text: s, variant: _o[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Ut, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, jo = ({ steps: e }) => {
  const r = ee().approvals.history, a = e.findIndex((i) => i.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: r }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((i, l) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: l + 1 })
          }
        ),
        l !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, i.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, l) => /* @__PURE__ */ o(de, { children: [
        /* @__PURE__ */ t(
          Mo,
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
}, Hu = xe(
  he("OneApprovalHistory", jo)
), Nt = (e, n) => typeof n == "string" && n in e;
function _n(e, n, r) {
  const a = {};
  let i = !1;
  const l = Ii(e);
  if (l !== void 0 && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(l).filter(
        ([u]) => Nt(d, u)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(l).length === 0) && (r.setCurrentFilters(f), a.filters = f, i = !0);
  }
  const s = e.sortings;
  if (s === null)
    r.setCurrentSortings(null), a.sortings = null, i = !0;
  else if (s && n.sortings && Nt(n.sortings, s.field)) {
    const d = {
      field: s.field,
      order: s.order
    };
    r.setCurrentSortings(d), a.sortings = d, i = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (r.setCurrentSearch(e.search), a.search = e.search, i = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && Nt(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    r.setCurrentGrouping(d), a.grouping = d, i = !0;
  }
  return i ? a : null;
}
function Vu(e) {
  const {
    source: n,
    collectionId: r,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: l,
    idProvider: s,
    itemUrl: c,
    getItemTitle: d,
    enabled: f = !0,
    restorePersistedState: u = !0,
    currentFilters: m,
    navigationMode: p = "url",
    deps: h = []
  } = e, b = Si(), x = Nl(n, h), [v, L] = R(null), O = v?.key === r && v.settled, M = B(x);
  M.current = x;
  const D = B(b);
  D.current = b;
  const P = B(null), F = m === void 0 ? null : JSON.stringify(m), G = B(m);
  G.current = m;
  const U = B(null), w = () => {
    const j = G.current;
    j !== void 0 && (U.current = JSON.stringify(j), M.current.setCurrentFilters(j));
  };
  V(() => {
    if (!f || P.current === r) return;
    if (!u) {
      P.current = r, w(), L({ key: r, applied: null, settled: !1 });
      return;
    }
    let j = !1;
    return (async () => {
      let ue = null;
      try {
        const pe = await D.current.get(
          r
        );
        pe && !j && (ue = _n(
          pe,
          M.current,
          M.current
        ));
      } catch {
      }
      j || (P.current = r, w(), L({ key: r, applied: ue, settled: !1 }));
    })(), () => {
      j = !0;
    };
  }, [r, f, u]), V(() => {
    !O || F === null || U.current !== F && w();
  }, [O, F]), V(() => {
    if (!(!f || !u))
      return Fi(r, async () => {
        try {
          const j = await D.current.get(
            r
          );
          if (!j) return;
          const re = M.current;
          _n(
            j,
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
    data: k,
    paginationInfo: N,
    setPage: T,
    loadMore: $,
    isLoading: y,
    isInitialLoading: C
  } = Ti(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && O,
      fetchParamsProvider: (j) => ({
        ...j,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  V(() => {
    L(
      (j) => j && j.key === r && !j.settled ? { ...j, settled: !0 } : j
    );
  }, [v, r]);
  const I = c ?? n.itemUrl, E = Cl({
    dataSource: x,
    data: k,
    paginationInfo: N,
    setPage: T,
    loadMore: $,
    isLoading: y,
    idProvider: s,
    itemUrl: I,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: l
  }), K = typeof E.activeItemId == "string" || typeof E.activeItemId == "number" ? E.activeItemId : null, W = E.activeItem !== null, _ = W && E.nextItem === null && E.hasNext, J = W && E.previousItem === null && E.hasPrevious, te = K !== null && (!W || _ || J), A = [
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
  ], { neighbors: q, isSupported: le } = kl({
    dataAdapter: x.dataAdapter,
    id: K,
    filters: x.currentFilters,
    sortings: A,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && O && !C && !y && te,
    fetchParamsProvider: (j) => ({
      ...j,
      navigationFilters: x.currentNavigationFilters
    })
  }), se = ie(() => s || (x.idProvider ? (j, re) => x.idProvider(j, re) : Il), [s, x.idProvider]), S = ie(() => {
    if (!te || q === null) return E;
    const j = E.previousItem ?? q.previous, re = E.nextItem ?? q.next, ue = (pe) => pe && I ? I(pe) ?? null : null;
    return {
      ...E,
      previousItem: j,
      nextItem: re,
      previousItemUrl: E.previousItemUrl ?? ue(j),
      nextItemUrl: E.nextItemUrl ?? ue(re),
      absoluteIndex: E.absoluteIndex ?? (q.position !== void 0 ? q.position - 1 : null),
      totalItems: E.totalItems ?? q.total,
      hasPrevious: E.hasPrevious || j !== null,
      hasNext: E.hasNext || re !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: W ? E.goToPrevious : () => {
        q.previous && E.setActiveItemId(
          se(q.previous)
        );
      },
      goToNext: W ? E.goToNext : () => {
        q.next && E.setActiveItemId(
          se(q.next)
        );
      }
    };
  }, [
    E,
    te,
    q,
    W,
    I,
    se
  ]), Q = as(S, {
    getItemTitle: d,
    mode: p
  }), z = f && O && le && te && q === null, X = B(null), me = Q ?? (z ? X.current : null);
  return V(() => {
    Q !== null && (X.current = Q);
  }, [Q]), {
    ...S,
    isNavigating: S.isNavigating || z,
    isReady: O && !C,
    navigation: me,
    appliedCollectionState: v?.applied ?? null,
    dataSource: x,
    data: k,
    paginationInfo: N,
    isLoading: y
  };
}
const ea = Ee(null), Gu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(ea.Provider, { value: e, children: n });
function Ae() {
  const e = Fe(ea);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Wo = 200, Uo = 1600, ta = Ee(null), Ho = ({
  children: e
}) => {
  const { messages: n, searchMessages: r, loadMessageContext: a } = Ae(), [i, l] = R(null), [s, c] = R(null), d = B(null), f = B(null), u = B(null), [m, p] = R(null), [h, b] = R(!1), [x, v] = R(""), [L, O] = R([]), [M, D] = R(-1), [P, F] = R(!1), G = B(n);
  G.current = n;
  const U = B(r);
  U.current = r;
  const w = B(a);
  w.current = a;
  const k = B(L);
  k.current = L;
  const N = B(M);
  N.current = M;
  const T = B(0);
  V(
    () => () => {
      u.current && clearTimeout(u.current);
    },
    []
  );
  const $ = H((z) => {
    d.current = z;
  }, []), y = H((z) => {
    f.current = z;
  }, []), C = H((z) => {
    f.current?.(z);
  }, []), I = H(
    (z, X) => p({ images: z, index: X }),
    []
  ), E = H(() => p(null), []), K = H(
    (z) => p((X) => X && { ...X, index: z }),
    []
  ), W = H((z, X) => {
    d.current?.(z), c(z), u.current && clearTimeout(u.current), X || (u.current = setTimeout(
      () => c(null),
      Uo
    ));
  }, []), _ = H(
    (z) => {
      const X = G.current.some((j) => j.id === z), me = w.current;
      !X && me ? me(z).then(() => W(z, !1)) : W(z, !1);
    },
    [W]
  ), J = H(
    (z, X = k.current) => {
      const me = X[z];
      if (me == null) return;
      D(z);
      const j = () => W(me, !0), re = w.current;
      re ? re(me).then(j) : j();
    },
    [W]
  );
  V(() => {
    if (!h) return;
    const z = x.trim();
    if (z === "") {
      O([]), D(-1), F(!1), c(null);
      return;
    }
    F(!0);
    const X = ++T.current, me = setTimeout(() => {
      const j = (ue) => {
        X === T.current && (O(ue), F(!1), ue.length > 0 ? J(ue.length - 1, ue) : (D(-1), c(null)));
      }, re = U.current;
      if (re)
        re(z).then((ue) => j(ue.map((pe) => pe.id)));
      else {
        const ue = z.toLowerCase();
        j(
          G.current.filter((pe) => !pe.deleted && pe.body.toLowerCase().includes(ue)).map((pe) => pe.id)
        );
      }
    }, Wo);
    return () => clearTimeout(me);
  }, [x, h, J]);
  const te = H(() => b(!0), []), A = H(() => {
    T.current++, b(!1), v(""), O([]), D(-1), F(!1), c(null);
  }, []), q = H(() => {
    const z = k.current;
    z.length !== 0 && J((N.current + 1) % z.length, z);
  }, [J]), le = H(() => {
    const z = k.current;
    z.length !== 0 && J((N.current - 1 + z.length) % z.length, z);
  }, [J]), se = L.length, S = M >= 0 ? M + 1 : 0, Q = ie(
    () => ({
      replyTo: i,
      setReplyTo: l,
      highlightedId: s,
      jumpToMessage: _,
      registerScrollToMessage: $,
      registerFileDropHandler: y,
      dropFiles: C,
      imagePreview: m,
      openImagePreview: I,
      closeImagePreview: E,
      setImagePreviewIndex: K,
      searchOpen: h,
      openSearch: te,
      closeSearch: A,
      searchQuery: x,
      setSearchQuery: v,
      searching: P,
      matchCurrent: S,
      matchTotal: se,
      goToNextMatch: q,
      goToPrevMatch: le
    }),
    [
      i,
      s,
      _,
      $,
      y,
      C,
      m,
      I,
      E,
      K,
      h,
      te,
      A,
      x,
      P,
      S,
      se,
      q,
      le
    ]
  );
  return /* @__PURE__ */ t(ta.Provider, { value: Q, children: e });
};
function Te() {
  const e = Fe(ta);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const Vo = (e) => e?.find((n) => n.kind === "image"), Go = (e) => {
  const n = Vo(e);
  return n ? n.thumbnailUrl ?? n.url : void 0;
}, Ko = (e) => {
  const n = e?.filter((a) => a.kind === "image") ?? [], r = e?.filter((a) => a.kind === "file") ?? [];
  return n.length > 0 && r.length > 0 ? { kind: "mixed", count: n.length + r.length } : n.length > 0 ? { kind: "photo", count: n.length } : r.length > 0 ? {
    kind: "file",
    count: r.length,
    name: r.length === 1 ? r[0].name : void 0
  } : null;
}, na = (e) => {
  const n = ee(), r = e.body?.trim() ?? "", a = Go(e.attachments), i = Ko(e.attachments);
  if (!i) return { label: r, thumbnailUrl: a };
  const l = i.kind === "photo" ? {
    icon: Ai,
    label: i.count === 1 ? n.chat.photo : n.t("chat.photoCount.other", { count: i.count })
  } : i.kind === "file" ? {
    icon: Ri,
    label: i.name ?? n.t("chat.fileCount.other", { count: i.count })
  } : {
    icon: mr,
    label: n.t("chat.attachmentCount.other", {
      count: i.count
    })
  };
  return { icon: l.icon, label: r || l.label, thumbnailUrl: a };
}, qo = {
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
}, Yo = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, en = (e) => qo[ir(Yo(e)) ?? "viridian"], Qo = ({
  message: e,
  onRemove: n
}) => {
  const r = ee(), { icon: a, label: i, thumbnailUrl: l } = na(e);
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    l && /* @__PURE__ */ t(
      "img",
      {
        src: l,
        alt: "",
        className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 gap-0.5 p-1", children: [
      /* @__PURE__ */ t(
        ve,
        {
          className: g(
            "text-sm font-medium",
            en(e.author)
          ),
          children: e.isMine ? r.chat.you : e.author.name
        }
      ),
      /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
        a && /* @__PURE__ */ t(Z, { icon: a, size: "xs", color: "default" }),
        /* @__PURE__ */ t(ve, { className: "min-w-0 text-base", lines: 1, children: i })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex flex-col", children: /* @__PURE__ */ t(
      fe,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: r.chat.removeQuote,
        icon: Ne,
        onClick: n
      }
    ) })
  ] }) });
}, Xo = 140, Jo = 4e3, Zo = () => {
  const e = ee(), { sendMessage: n, onInputActivity: r, uploadFiles: a, transcribe: i, maxFiles: l } = Ae(), { replyTo: s, setReplyTo: c, registerFileDropHandler: d } = Te(), f = Ie(), [u, m] = R(""), [p, h] = R([]), b = B(null), x = B(null), v = B(0), L = p.some((A) => A.status === "uploading"), [O, M] = R(null), D = B(
    null
  ), P = H((A) => {
    D.current && clearTimeout(D.current), M(A), D.current = setTimeout(() => {
      M(null), D.current = null;
    }, Jo);
  }, []);
  V(
    () => () => {
      D.current && clearTimeout(D.current);
    },
    []
  );
  const F = B(0);
  V(() => {
    F.current = p.length;
  }, [p]);
  const G = H(() => {
    const A = b.current;
    A && (A.style.height = "auto", A.style.height = `${Math.min(A.scrollHeight, Xo)}px`);
  }, []), U = B(""), w = H(
    (A) => {
      const q = U.current;
      m(q ? `${q} ${A}` : A), requestAnimationFrame(G);
    },
    [G]
  ), k = {
    "permission-denied": e.chat.micPermissionDenied,
    "device-error": e.chat.micError,
    "transcription-failed": e.chat.transcriptionError
  }, N = Li({
    onTranscribe: i,
    onPartial: w,
    onFinal: w,
    onError: (A) => P(k[A])
  }), T = N.status === "transcribing", $ = N.status === "recording", y = !!i && N.isSupported, C = (u.trim().length > 0 || p.length > 0) && !T && !L, I = H(
    (A) => {
      m(A.target.value), r(), G();
    },
    [G, r]
  ), E = H(
    async (A) => {
      if (A.length === 0 || !a) return;
      if (l !== void 0 && F.current + A.length > l) {
        P(
          e.chat.tooManyFilesError.replace("{{maxFiles}}", String(l))
        );
        return;
      }
      const q = A.map((se) => ({
        id: `att-${v.current++}`,
        status: "uploading",
        name: se.name
      }));
      h((se) => [...se, ...q]);
      const le = new Set(q.map((se) => se.id));
      try {
        const S = (await a(A)).map((Q, z) => ({
          id: q[z]?.id ?? `att-${v.current++}`,
          status: "ready",
          attachment: Q
        }));
        h((Q) => [
          ...Q.filter((z) => !le.has(z.id)),
          ...S
        ]);
      } catch {
        h((se) => se.filter((S) => !le.has(S.id))), P(e.chat.fileUploadError);
      }
    },
    [
      a,
      l,
      P,
      e.chat.tooManyFilesError,
      e.chat.fileUploadError
    ]
  );
  V(() => {
    d((A) => {
      E(A);
    });
  }, [d, E]);
  const K = H(() => {
    if (!C) return;
    const A = p.flatMap(
      (le) => le.status === "ready" ? [le.attachment] : []
    );
    n({
      body: u.trim(),
      attachments: A.length > 0 ? A : void 0,
      replyToId: s?.id
    }), m(""), h([]), c(null);
    const q = b.current;
    q && (q.style.height = "auto");
  }, [p, C, s, n, c, u]), W = H(
    (A) => {
      const q = b.current, le = q?.selectionStart ?? q?.value.length ?? 0, se = q?.selectionEnd ?? q?.value.length ?? 0;
      m((S) => S.slice(0, le) + A + S.slice(se)), r(), requestAnimationFrame(() => {
        G();
        const S = b.current;
        if (S) {
          const Q = le + A.length;
          S.focus(), S.setSelectionRange(Q, Q);
        }
      });
    },
    [G, r]
  ), _ = H(
    (A) => {
      A.key === "Enter" && !A.shiftKey && (A.preventDefault(), K());
    },
    [K]
  ), J = H(() => {
    U.current = u, N.start();
  }, [N, u]), te = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-4 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col", children: [
    s && /* @__PURE__ */ t(
      Qo,
      {
        message: s,
        onRemove: () => c(null)
      }
    ),
    /* @__PURE__ */ t(ke, { initial: !1, children: O && /* @__PURE__ */ t(
      ne.div,
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
              /* @__PURE__ */ t("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ t(hr, { type: "critical", size: "sm" }) }),
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
        "aria-busy": L,
        className: "flex flex-wrap gap-1 px-1 pt-1",
        children: p.map(
          (A) => A.status === "uploading" ? /* @__PURE__ */ t(Y, { className: "h-9 w-36 rounded-[10px]" }, A.id) : /* @__PURE__ */ t(
            pr,
            {
              size: "md",
              file: {
                name: A.attachment.name,
                type: A.attachment.mimeType ?? (A.attachment.kind === "image" ? "image/png" : "")
              },
              actions: [
                {
                  label: e.chat.removeFile,
                  icon: Ne,
                  onClick: () => h(
                    (q) => q.filter((le) => le.id !== A.id)
                  )
                }
              ]
            },
            A.id
          )
        )
      }
    ),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: b,
        value: u,
        onChange: I,
        onKeyDown: _,
        rows: 1,
        placeholder: $ ? e.chat.listening : te,
        className: g(
          "w-full resize-none bg-transparent p-3 pb-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    $ ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ t(
          Di,
          {
            stream: N.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            fe,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: Ne,
              onClick: N.cancel
            }
          ),
          /* @__PURE__ */ t(
            fe,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: $t,
              onClick: N.stop
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
          onChange: (A) => {
            E(Array.from(A.target.files ?? [])), A.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(
          fe,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.attachFile,
            icon: mr,
            onClick: () => x.current?.click(),
            disabled: !a || T
          }
        ),
        /* @__PURE__ */ t(
          Ye,
          {
            variant: "outline",
            size: "md",
            label: e.chat.addEmoji,
            onSelect: W
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        y && /* @__PURE__ */ t(
          fe,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Pi,
            onClick: J,
            loading: T
          }
        ),
        /* @__PURE__ */ t(
          fe,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.actions.send,
            icon: Kn,
            onClick: K,
            disabled: !C
          }
        )
      ] })
    ] })
  ] }) }) });
}, ec = ({
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
        /* @__PURE__ */ t(Z, { icon: Ei, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, tc = () => {
  const e = ee(), {
    searchQuery: n,
    setSearchQuery: r,
    searching: a,
    matchCurrent: i,
    matchTotal: l,
    goToNextMatch: s,
    goToPrevMatch: c,
    closeSearch: d
  } = Te(), f = l > 0, m = n.trim().length > 0 && !a && !f;
  return /* @__PURE__ */ o("div", { className: "flex w-full items-center gap-2", onKeyDown: (h) => {
    h.key === "Enter" ? (h.preventDefault(), h.shiftKey ? c() : s()) : h.key === "Escape" && (h.preventDefault(), d());
  }, children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
      Oi,
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
        children: a ? "" : `${i}/${l}`
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0", children: [
        /* @__PURE__ */ t(
          fe,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.previous,
            icon: _i,
            onClick: c,
            disabled: !f || a,
            size: "sm"
          }
        ),
        /* @__PURE__ */ t(
          fe,
          {
            variant: "ghost",
            hideLabel: !0,
            label: e.navigation.next,
            icon: jt,
            onClick: s,
            disabled: !f || a,
            size: "sm"
          }
        )
      ] }),
      /* @__PURE__ */ t(
        fe,
        {
          variant: "ghost",
          hideLabel: !0,
          label: e.chat.closeSearch,
          icon: Ne,
          onClick: d
        }
      )
    ] })
  ] });
}, tn = ({
  user: e,
  children: n
}) => {
  const r = ee();
  return /* @__PURE__ */ o(zi, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(Bi, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      $i,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          Mi,
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
}, nc = ({ online: e }) => e ? /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t(
  "span",
  {
    className: g("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
  }
) }) : null, rc = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: r,
  onClose: a
}) => {
  const i = ee(), { searchOpen: l, openSearch: s } = Te(), { togglePin: c } = Ae(), d = e.type === "dm" && e.presence !== void 0, f = [
    { label: i.actions.search, icon: Wt, onClick: s },
    ...c ? [
      {
        label: e.pinned ? i.chat.unpin : i.chat.pin,
        icon: e.pinned ? cr : dr,
        onClick: c
      }
    ] : []
  ], u = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "relative shrink-0 flex", children: [
      e.avatar.type === "emoji" ? (
        // Emoji groups show the glyph alone (no avatar chrome) so it reads at
        // full size instead of shrunk inside the bordered avatar box.
        /* @__PURE__ */ t("span", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ t(We, { emoji: e.avatar.emoji, size: "sm" }) })
      ) : /* @__PURE__ */ t(qe, { size: "sm", avatar: e.avatar }),
      d && /* @__PURE__ */ t(nc, { online: e.presence === "online" })
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      Z,
      {
        icon: ji,
        size: "sm",
        color: "secondary",
        "aria-label": i.chat.muted
      }
    ),
    e.statuses?.map((m) => /* @__PURE__ */ t(
      Z,
      {
        icon: m.icon,
        size: "sm",
        color: "secondary",
        "aria-label": m.label
      },
      m.label
    ))
  ] });
  return /* @__PURE__ */ t("header", { className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3", children: l ? (
    // Search mode: the whole header becomes the search bar.
    /* @__PURE__ */ t(tc, {})
  ) : /* @__PURE__ */ o(de, { children: [
    e.user ? /* @__PURE__ */ t(tn, { user: e.user, children: u }) : u,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(ze, { items: f, align: "end", label: i.chat.options, children: /* @__PURE__ */ t(
        fe,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.chat.options,
          icon: gr
        }
      ) }),
      r && /* @__PURE__ */ t(
        fe,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? i.actions.collapse : i.actions.expand,
          icon: n ? Wi : Ui,
          onClick: r
        }
      ),
      a && /* @__PURE__ */ t(
        fe,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.actions.close,
          icon: Ne,
          onClick: a
        }
      )
    ] })
  ] }) });
}, ra = (e, n) => {
  const r = document.createElement("a");
  r.href = e, r.download = n, r.rel = "noreferrer", r.click();
}, et = ({
  icon: e,
  label: n,
  onClick: r
}) => /* @__PURE__ */ t("span", { className: "pointer-events-auto flex rounded bg-f1-background shadow-sm", children: /* @__PURE__ */ t(
  fe,
  {
    variant: "neutral",
    hideLabel: !0,
    icon: e,
    label: n,
    onClick: r
  }
) }), ac = () => {
  const e = ee(), { imagePreview: n, closeImagePreview: r, setImagePreviewIndex: a } = Te(), [i, l] = R(null);
  V(() => l(document.body), []);
  const s = n !== null, c = n?.images ?? [], d = c.length, f = n?.index ?? 0, u = c[f], m = d > 1, p = H(
    (h) => {
      d !== 0 && a((f + h + d) % d);
    },
    [d, f, a]
  );
  return V(() => {
    if (!s || !m) return;
    const h = (b) => {
      b.key === "ArrowRight" ? p(1) : b.key === "ArrowLeft" && p(-1);
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [s, m, p]), /* @__PURE__ */ t(
    Sl,
    {
      open: s,
      onOpenChange: (h) => {
        h || r();
      },
      children: u && /* @__PURE__ */ o(
        Fl,
        {
          container: i,
          className: "h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none",
          withTranslateAnimation: !1,
          "aria-describedby": void 0,
          children: [
            /* @__PURE__ */ t(Hi, { className: "sr-only", children: u.name || e.chat.imagePreview }),
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
                et,
                {
                  icon: br,
                  label: e.chat.download,
                  onClick: () => ra(u.url, u.name)
                }
              ),
              /* @__PURE__ */ t(
                et,
                {
                  icon: Ne,
                  label: e.chat.closePreview,
                  onClick: r
                }
              )
            ] }),
            m && /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3", children: [
              /* @__PURE__ */ t(
                et,
                {
                  icon: zt,
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
                et,
                {
                  icon: Ke,
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
}, ic = "latest", lc = 1440 * 60 * 1e3, zn = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function nn(e, n) {
  return Math.round((zn(n) - zn(e)) / lc);
}
function aa(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function ia(e, n, r, a) {
  const i = nn(e, n);
  if (i <= 0) return r.today;
  if (i === 1) return r.yesterday;
  if (i < 7)
    return new Intl.DateTimeFormat(a, { weekday: "long" }).format(e);
  const l = e.getFullYear() === n.getFullYear();
  return new Intl.DateTimeFormat(a, {
    day: "numeric",
    month: "short",
    ...l ? {} : { year: "numeric" }
  }).format(e);
}
function dt(e, n, r, a) {
  return `${ia(e, n, r, a)} ${aa(e, a)}`;
}
function sc(e, n, r, a) {
  return nn(e, n) <= 0 ? aa(e, a) : dt(e, n, r, a);
}
const oc = (e, n) => n ? nn(
  new Date(n.createdAt),
  new Date(e.createdAt)
) !== 0 : !0;
function cc(e, n = {}) {
  const { dividerId: r = null } = n, a = [], i = /* @__PURE__ */ new Map();
  let l = -1;
  return e.forEach((s, c) => {
    const d = e[c - 1], f = oc(s, d);
    f && a.push({
      type: "separator",
      key: `sep-${s.id}`,
      at: s.createdAt
    });
    const u = f || !d || d.author.id !== s.author.id;
    if (!u && l >= 0) {
      const m = a[l];
      m.type === "message" && (m.isLastOfRun = !1);
    }
    r && s.id === r && a.push({ type: "divider", key: "unread-divider" }), a.push({
      type: "message",
      key: s.id,
      message: s,
      isFirstOfRun: u,
      isLastOfRun: !0,
      isLastMessage: c === e.length - 1
    }), l = a.length - 1, i.set(s.id, l);
  }), { rows: a, indexById: i };
}
const dc = 80, Bn = 120, uc = 88;
function fc({
  viewportRef: e,
  virtualizer: n,
  rows: r,
  indexById: a,
  messages: i,
  hasMoreOlder: l,
  loadingOlder: s,
  onReachTop: c,
  hasMoreNewer: d = !1,
  loadingNewer: f = !1,
  onReachBottom: u,
  unreadDividerId: m = null,
  conversationKey: p = null
}) {
  const [h, b] = R(!1), [x, v] = R(!0), [L, O] = R(!0), M = B(!0), D = B(i[0]?.id ?? null), P = B(i.at(-1)?.id ?? null), F = B(i.length), G = B(!1), U = B(p), w = B(null), k = B(null), N = B(null), T = H(
    (K = "smooth") => {
      r.length > 0 && n.scrollToIndex(r.length - 1, { align: "end", behavior: K });
    },
    [n, r.length]
  ), $ = H(() => {
    const K = e.current, W = w.current;
    if (!K || !W) return null;
    const _ = a.get(W.id);
    if (_ == null) return null;
    const te = (n.getOffsetForIndex(_, "start")?.[0] ?? 0) - W.delta;
    return K.scrollTop = te, te;
  }, [e, a, n]), y = H(
    (K) => {
      const W = n.getVirtualItemForOffset(K);
      if (!W) return null;
      for (let _ = W.index; _ < r.length; _++)
        if (r[_].type === "message") return _;
      return null;
    },
    [n, r]
  ), C = H(() => {
    const K = e.current;
    if (!K) return { scrollTop: 0, distanceFromBottom: 0 };
    const { scrollTop: W, scrollHeight: _, clientHeight: J } = K, te = _ - W - J, A = te < dc;
    return M.current = A, v(A), b(te > J * 0.5), O(W <= 0), { scrollTop: W, distanceFromBottom: te };
  }, [e]), I = H(() => {
    if (!e.current) return;
    const { scrollTop: W, distanceFromBottom: _ } = C();
    if (W < Bn && l && !s) {
      const J = y(W), te = J != null ? r[J] : null;
      if (te && te.type === "message") {
        const A = n.getOffsetForIndex(J, "start")?.[0] ?? 0;
        w.current = { id: te.message.id, delta: A - W };
      }
      c();
    }
    _ < Bn && d && !f && u?.();
  }, [
    e,
    C,
    l,
    s,
    c,
    d,
    f,
    u,
    y,
    r,
    n
  ]), E = H(
    (K, W, _ = 0) => {
      const J = e.current;
      if (!J || K < 0) return;
      N.current != null && cancelAnimationFrame(N.current);
      let te = null, A = 0, q = 0;
      const le = () => {
        n.scrollToIndex(K, { align: W }), W === "start" && _ > 0 && (J.scrollTop = Math.max(0, J.scrollTop - _));
        const se = J.scrollTop;
        if (q += 1, te != null && Math.abs(se - te) < 1 ? A += 1 : A = 0, te = se, A >= 2 || q >= 12) {
          N.current = null, W === "end" && J.scrollHeight - J.scrollTop - J.clientHeight > 1 && (J.scrollTop = J.scrollHeight), C();
          return;
        }
        N.current = requestAnimationFrame(le);
      };
      le();
    },
    [e, n, C]
  );
  return Ge(() => {
    const K = e.current;
    if (!K) return;
    if (U.current !== p && (U.current = p, G.current = !1, w.current = null, k.current != null && (cancelAnimationFrame(k.current), k.current = null), N.current != null && (cancelAnimationFrame(N.current), N.current = null), M.current = !1), !G.current && r.length > 0) {
      if (d)
        O(K.scrollHeight - K.clientHeight <= 0);
      else {
        const q = m != null ? r.findIndex((le) => le.type === "divider") : -1;
        q >= 0 ? E(q, "start", uc) : E(r.length - 1, "end");
      }
      G.current = !0, D.current = i[0]?.id ?? null, P.current = i.at(-1)?.id ?? null, F.current = i.length;
      return;
    }
    const W = i[0]?.id ?? null, _ = i.at(-1), J = i.length > F.current, te = J && W !== D.current, A = J && _?.id !== P.current;
    if (te && w.current) {
      k.current != null && cancelAnimationFrame(k.current);
      let q = $(), le = 0, se = 0;
      const S = () => {
        const Q = $();
        if (se += 1, Q != null && q != null && Math.abs(Q - q) < 1 ? le += 1 : le = 0, q = Q, Q == null || le >= 2 || se >= 12) {
          w.current = null, k.current = null;
          return;
        }
        k.current = requestAnimationFrame(S);
      };
      k.current = requestAnimationFrame(S);
    } else A && !d && (_?.isMine || M.current) && (n.scrollToIndex(r.length - 1, { align: "end" }), v(!0));
    D.current = W, P.current = _?.id ?? null, F.current = i.length;
  }, [
    i,
    r,
    e,
    n,
    a,
    d,
    m,
    p,
    E,
    $
  ]), Ge(
    () => () => {
      k.current != null && cancelAnimationFrame(k.current), N.current != null && cancelAnimationFrame(N.current);
    },
    []
  ), {
    scrolledUp: h,
    atBottom: x,
    atTop: L,
    scrollToBottom: T,
    scrollToIndexSettled: E,
    handleScroll: I
  };
}
const mc = ({
  reply: e
}) => {
  const { jumpToMessage: n } = Te(), { currentUserId: r } = Ae(), a = ee(), { icon: i, label: l, thumbnailUrl: s } = na(e), d = e.author.id === r ? a.chat.you : e.author.name;
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
        s && /* @__PURE__ */ t(
          "img",
          {
            src: s,
            alt: "",
            className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover ml-2.5"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5 p-2.5", children: [
          /* @__PURE__ */ t(
            ve,
            {
              className: g(
                "text-sm font-medium",
                en(e.author)
              ),
              children: d
            }
          ),
          /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary", children: [
            i && /* @__PURE__ */ t(Z, { icon: i, size: "sm", color: "default" }),
            /* @__PURE__ */ t(ve, { className: "min-w-0 text-base", lines: 1, children: l })
          ] })
        ] })
      ]
    }
  ) });
}, hc = ({
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
  ) : /* @__PURE__ */ t("div", { className: "min-w-0 max-w-full bg-f1-background rounded-2xl", children: /* @__PURE__ */ o(
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
        e.replyTo && /* @__PURE__ */ t(mc, { reply: e.replyTo }),
        /* @__PURE__ */ o("div", { className: "px-3.5 py-2.5", children: [
          r && /* @__PURE__ */ t(tn, { user: r, children: /* @__PURE__ */ t(
            "span",
            {
              className: g(
                "mb-0.5 block w-fit cursor-default text-sm font-medium",
                en(r)
              ),
              children: r.name
            }
          ) }),
          e.body
        ] })
      ]
    }
  ) });
}, Ct = ({
  label: e,
  value: n
}) => /* @__PURE__ */ o("div", { className: "flex flex-col items-start", children: [
  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e }),
  n && /* @__PURE__ */ t("span", { className: "text-base font-normal text-f1-foreground-secondary", children: n })
] }), pc = ({
  message: e,
  onBack: n
}) => {
  const r = ee(), { channel: a } = Ae(), i = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, l = /* @__PURE__ */ new Date(), s = a.type === "group";
  return /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5", children: [
      /* @__PURE__ */ t(
        fe,
        {
          icon: Vi,
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
      e.isMine && (s ? /* @__PURE__ */ t(
        Ct,
        {
          label: r.t(
            (e.readByCount ?? 0) === 1 ? "chat.readBy.one" : "chat.readBy.other",
            { count: e.readByCount ?? 0 }
          )
        }
      ) : e.readAt && /* @__PURE__ */ t(
        Ct,
        {
          label: r.chat.read,
          value: dt(new Date(e.readAt), l, i)
        }
      )),
      /* @__PURE__ */ t(
        Ct,
        {
          label: r.chat.delivered,
          value: dt(new Date(e.createdAt), l, i)
        }
      )
    ] })
  ] });
}, gc = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], bc = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", tt = ({
  icon: e,
  label: n,
  onClick: r,
  trailing: a
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: r,
    className: g(bc, ge("focus-visible:ring-inset")),
    children: [
      /* @__PURE__ */ t(Z, { icon: e, size: "md" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      a
    ]
  }
), xc = ({
  message: e,
  isMine: n,
  open: r,
  onOpenChange: a
}) => {
  const i = ee(), { toggleReaction: l, deleteMessage: s } = Ae(), { setReplyTo: c } = Te(), [d, f] = R("menu"), u = (h) => {
    a(h), h || f("menu");
  }, m = (h) => {
    l(e.id, h), u(!1);
  }, p = (h) => () => {
    h(), u(!1);
  };
  return /* @__PURE__ */ o(er, { open: r, onOpenChange: u, children: [
    /* @__PURE__ */ t(tr, { asChild: !0, children: /* @__PURE__ */ t(
      fe,
      {
        variant: "outline",
        hideLabel: !0,
        label: i.chat.moreActions,
        icon: gr,
        pressed: r
      }
    ) }),
    /* @__PURE__ */ t(
      nr,
      {
        align: n ? "end" : "start",
        className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
        children: d === "info" ? /* @__PURE__ */ t(
          pc,
          {
            message: e,
            onBack: () => f("menu")
          }
        ) : /* @__PURE__ */ o(de, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
            gc.map((h) => /* @__PURE__ */ t(
              fe,
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
              Ye,
              {
                size: "md",
                variant: "ghost",
                label: i.chat.react,
                onSelect: m,
                icon: Jn
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-0 p-1", children: [
            /* @__PURE__ */ t(
              tt,
              {
                icon: Gi,
                label: i.chat.info,
                onClick: () => f("info"),
                trailing: /* @__PURE__ */ t(
                  Z,
                  {
                    icon: Ke,
                    size: "md",
                    className: "text-f1-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              tt,
              {
                icon: Ki,
                label: i.chat.reply,
                onClick: p(() => c(e))
              }
            ),
            /* @__PURE__ */ t(
              tt,
              {
                icon: qi,
                label: i.actions.copy,
                onClick: p(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            )
          ] }),
          n && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-0 p-1", children: /* @__PURE__ */ t(
              tt,
              {
                icon: fr,
                label: i.actions.delete,
                onClick: p(() => s(e.id))
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}, vc = ({
  message: e,
  isMine: n
}) => {
  const r = ee(), { openImagePreview: a } = Te(), i = e.attachments;
  if (!i || i.length === 0) return null;
  const l = i.filter(
    (d) => d.kind === "image"
  ), s = i.filter(
    (d) => d.kind === "file"
  ), c = l.length === 1;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        l.length > 0 && /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: l.map((d, f) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => a(l, f),
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
        s.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: s.map((d, f) => /* @__PURE__ */ t(
          pr,
          {
            size: "md",
            file: { name: d.name, type: d.mimeType ?? "" },
            actions: [
              {
                label: r.chat.download,
                icon: br,
                onClick: () => ra(d.url, d.name)
              }
            ]
          },
          `${d.url}-${f}`
        )) })
      ]
    }
  );
}, yc = ({
  message: e,
  isMine: n
}) => {
  const r = ee(), { toggleReaction: a } = Ae();
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
            $r,
            {
              emoji: i.emoji,
              initialCount: i.count,
              hasReacted: i.reactedByMe,
              users: i.users,
              onInteraction: (l) => a(e.id, l)
            },
            `${i.emoji}-${i.count}-${i.reactedByMe}`
          )
        )),
        /* @__PURE__ */ t(
          Ye,
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
}, wc = ({
  message: e,
  isMine: n,
  author: r,
  bubbleGutter: a,
  belowGutter: i
}) => {
  const [l, s] = R(!1), { highlightedId: c } = Te(), d = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, u = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0 || !!e.replyTo, p = m || u;
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
                          // `min-w-0` lets this flex item shrink below its content's
                          // intrinsic width so the reply quote's single line truncates
                          // instead of forcing the bubble wider than the column.
                          "flex min-w-0 max-w-full flex-col gap-1 rounded-2xl transition-shadow duration-200",
                          n ? "items-end" : "items-start",
                          // `ring-offset-f1-background` colours the offset gap with the
                          // transcript surface — without it the gap defaults to white and
                          // reads as an aura in dark mode.
                          d && "ring-1 ring-f1-special-ring ring-offset-2 ring-offset-f1-background",
                          !e.deleted && "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          l && "bg-f1-background-hover"
                        ),
                        children: [
                          u && /* @__PURE__ */ t(vc, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(hc, { message: e, isMine: n, author: r })
                        ]
                      }
                    ),
                    !e.deleted && /* @__PURE__ */ t(
                      "div",
                      {
                        className: g(
                          "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                          l && "opacity-100"
                        ),
                        children: /* @__PURE__ */ t(
                          xc,
                          {
                            message: e,
                            isMine: n,
                            open: l,
                            onOpenChange: s
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
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(yc, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, Nc = (e) => {
  if (e.avatar?.type === "person") {
    const { type: n, ...r } = e.avatar;
    return r;
  }
  return { firstName: e.name, lastName: "" };
}, Cc = ({ animate: e }) => /* @__PURE__ */ t("span", { className: "flex items-center gap-1 py-px", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ t(
  "span",
  {
    className: g(
      "size-1.5 rounded-full bg-f1-foreground-secondary",
      e && "animate-bounce"
    ),
    style: e ? { animationDelay: `${n * 120}ms` } : void 0
  },
  n
)) }), kc = ({
  users: e,
  isGroup: n
}) => {
  const r = ee(), a = Ie();
  if (e.length === 0) return null;
  let i = r.chat.writing;
  return n && (e.length === 1 ? i = r.t("chat.isTyping", { name: e[0].name }) : e.length === 2 ? i = r.t("chat.twoTyping", {
    first: e[0].name,
    second: e[1].name
  }) : i = r.chat.severalTyping), // Eases in (fade + slight rise, scaling up from the bottom-left like an
  // incoming bubble) so the dots don't pop. It's always the last row, so the
  // scale-driven height change can't disturb the messages above.
  /* @__PURE__ */ o(
    ne.div,
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
            Ut,
            {
              type: "person",
              size: "xs",
              max: 3,
              noTooltip: !0,
              avatars: e.map(Nc)
            }
          ) })
        ) : /* @__PURE__ */ t("span", { className: "shrink-0", children: /* @__PURE__ */ t(
          qe,
          {
            size: "xs",
            avatar: e[0].avatar ?? {
              type: "person",
              firstName: e[0].name,
              lastName: ""
            }
          }
        ) })),
        /* @__PURE__ */ t("div", { className: "w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex", children: /* @__PURE__ */ t(Cc, { animate: !a }) })
      ]
    }
  );
}, la = ({
  at: e,
  withTime: n = !1
}) => {
  const r = ee(), a = {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  }, i = new Date(e), l = /* @__PURE__ */ new Date(), s = n ? dt(i, l, a) : ia(i, l, a);
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-sm font-normal text-f1-foreground-secondary", children: s }) });
}, Ic = ({
  message: e,
  isGroup: n
}) => {
  const r = ee(), a = Ie(), i = sc(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: r.date.groups.today,
    yesterday: r.date.groups.yesterday
  });
  let l = i;
  return e.isMine && (e.status === "failed" ? l = r.chat.error : e.status === "read" ? l = n && e.readByCount ? r.t(
    e.readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: e.readByCount }
  ) : `${r.chat.read} ${i}` : e.status === "sent" && (l = `${r.chat.sent} ${i}`)), /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: /* @__PURE__ */ t(
        ne.span,
        {
          className: "inline-block",
          initial: a ? !1 : { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: a ? 0 : 0.15 },
          children: l
        },
        l
      )
    }
  );
}, Sc = ({
  leaving: e = !1
}) => {
  const n = ee(), r = Ie();
  return /* @__PURE__ */ o(
    ne.div,
    {
      className: "flex items-center gap-2 py-4",
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
}, $n = (e) => /* @__PURE__ */ t(
  qe,
  {
    size: "xs",
    avatar: e.avatar ?? { type: "person", firstName: e.name, lastName: "" }
  }
), Fc = (e, n) => n ? "pt-2" : e.type === "message" ? e.isFirstOfRun ? "pt-4" : "pt-1" : "pt-4", Tc = ({
  row: e,
  isGroup: n,
  isFirstRow: r,
  isLastRow: a,
  enterAnimation: i,
  animatedIds: l,
  dividerLeaving: s = !1
}) => {
  const c = g(Fc(e, r), a && "pb-6"), [d] = R(
    () => i && e.type === "message" && e.isLastMessage && !l.has(e.message.id)
  );
  if (V(() => {
    e.type === "message" && l.add(e.message.id);
  }, [e, l]), e.type === "separator")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(la, { at: e.at }) });
  if (e.type === "divider")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(Sc, { leaving: s }) });
  if (e.type === "typing")
    return /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(kc, { users: e.users, isGroup: n }) });
  const { message: f, isFirstOfRun: u, isLastOfRun: m, isLastMessage: p } = e, h = f.isMine, b = n && !h, x = b ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: $n(f.author) }) : void 0, v = b ? m ? /* @__PURE__ */ t(tn, { user: f.author, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: $n(f.author) }) }) : x : void 0, L = /* @__PURE__ */ o(de, { children: [
    /* @__PURE__ */ t(
      wc,
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
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ic, { message: f, isGroup: n }) })
    ] })
  ] });
  return d ? (
    // WhatsApp-style arrival: the bubble springs up into place from its own
    // corner (mine → bottom-right, theirs → bottom-left) with a soft fade and a
    // barely-there scale. A spring (not a fixed tween) gives the gentle, natural
    // settle. Only the last row animates, so the brief scale-driven height change
    // can't disturb rows above it.
    /* @__PURE__ */ t(
      ne.div,
      {
        className: g("flex flex-col gap-1", c),
        style: { transformOrigin: h ? "bottom right" : "bottom left" },
        initial: { opacity: 0, y: 10, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 460, damping: 34, mass: 0.9 },
        children: L
      }
    )
  ) : /* @__PURE__ */ t("div", { className: g("flex flex-col gap-1", c), children: L });
}, Ac = pl(Tc), Rc = 280, Lc = (e) => e.type === "message" ? 76 : e.type === "typing" ? 60 : 36, Dc = (e, n) => {
  for (let r = n; r < e.length; r++) {
    const a = e[r];
    if (a.type === "message") return a.message.createdAt;
    if (a.type === "separator") return a.at;
  }
  return null;
}, Pc = () => {
  const e = ee(), {
    messages: n,
    channel: r,
    typingUsers: a,
    hasMoreOlder: i,
    loadingOlder: l,
    loadOlder: s,
    hasMoreNewer: c,
    loadingNewer: d,
    loadNewer: f,
    loadMessageContext: u,
    unreadCount: m,
    firstUnreadId: p,
    markRead: h
  } = Ae(), b = Ie(), x = r.type === "group", v = B(null), { registerScrollToMessage: L } = Te(), [O, M] = R(!1), [D, P] = R(p), [F, G] = R(!1), U = B(r.id), w = B(null), k = B(
    n[n.length - 1]?.id ?? null
  );
  U.current !== r.id && (U.current = r.id, P(p), G(!1));
  const { rows: N, indexById: T } = ie(
    () => cc(n, { dividerId: D }),
    [n, D]
  ), $ = ie(
    () => a.length > 0 ? [...N, { type: "typing", key: "typing", users: a }] : N,
    [N, a]
  ), y = Qn({
    count: $.length,
    getScrollElement: () => v.current,
    estimateSize: (ae) => Lc($[ae]),
    getItemKey: (ae) => $[ae].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (ae) => Math.round(ae.getBoundingClientRect().height),
    overscan: 8
  }), {
    scrolledUp: C,
    atBottom: I,
    atTop: E,
    scrollToBottom: K,
    scrollToIndexSettled: W,
    handleScroll: _
  } = fc({
    viewportRef: v,
    virtualizer: y,
    rows: $,
    indexById: T,
    messages: n,
    hasMoreOlder: i,
    loadingOlder: l,
    onReachTop: s,
    hasMoreNewer: c,
    loadingNewer: d,
    onReachBottom: f,
    unreadDividerId: D,
    conversationKey: r.id
  }), J = a.length > 0, te = B(!1);
  V(() => {
    J && !te.current && I && K("smooth"), te.current = J;
  }, [J, I, K]);
  const A = B(null), q = H(() => {
    const ae = A.current;
    if (!ae) return;
    if (ae.kind === "bottom") {
      $.length > 0 && (W($.length - 1, "end"), A.current = null);
      return;
    }
    const Re = T.get(ae.id);
    Re != null && (W(Re, "center"), A.current = null);
  }, [T, W, $.length]);
  V(q, [q]), V(() => {
    L((ae) => {
      A.current = { kind: "id", id: ae }, q();
    });
  }, [L, q]);
  const le = H(() => {
    c && u ? (A.current = { kind: "bottom" }, u(ic)) : K();
  }, [c, u, K]), se = I && O;
  V(() => {
    se && m > 0 && h?.();
  }, [se, m, h]);
  const S = B(I);
  S.current = I;
  const Q = y.getTotalSize();
  Ge(() => {
    const ae = v.current;
    ae && S.current && $.length > 0 && (ae.scrollTop = ae.scrollHeight);
  }, [Q, $.length]);
  const z = H(() => {
    w.current && (clearTimeout(w.current), w.current = null);
  }, []);
  V(() => {
    z();
  }, [r.id, z]), V(() => {
    const ae = n[n.length - 1];
    !ae || ae.id === k.current || (k.current = ae.id, !(!ae.isMine || !D || F) && (G(!0), w.current = setTimeout(() => {
      w.current = null, P(null), G(!1), S.current && K("auto");
    }, Rc)));
  }, [n, D, F, K]), V(() => z, [z]);
  const X = B(null);
  X.current === null && n.length > 0 && (X.current = new Set(n.map((ae) => ae.id)));
  const me = X.current ?? Ec, j = y.getVirtualItems(), re = j[0], ue = re ? Dc($, re.index) : null, pe = C || c;
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
            onScroll: _,
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
                      transform: `translateY(${j[0]?.start ?? 0}px)`
                    },
                    children: j.map((ae) => /* @__PURE__ */ t(
                      "div",
                      {
                        "data-index": ae.index,
                        ref: y.measureElement,
                        children: /* @__PURE__ */ t(
                          Ac,
                          {
                            row: $[ae.index],
                            isGroup: x,
                            isFirstRow: ae.index === 0,
                            isLastRow: ae.index === $.length - 1,
                            enterAnimation: !b,
                            animatedIds: me,
                            dividerLeaving: $[ae.index].type === "divider" ? F : !1
                          }
                        )
                      },
                      ae.key
                    ))
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ t(ke, { children: !E && /* @__PURE__ */ t(Yi, { position: "top" }, "chat-header-shadow") }),
        /* @__PURE__ */ t(ke, { children: C && ue && /* @__PURE__ */ t(
          ne.div,
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
                "aria-label": l ? e.chat.loadingOlder : void 0,
                children: [
                  l && /* @__PURE__ */ t(Bt, { size: "small", className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ t(la, { at: ue, withTime: !0 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(ke, { children: pe && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          ne.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              fe,
              {
                onClick: le,
                variant: "neutral",
                icon: Qi,
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
}, Ec = /* @__PURE__ */ new Set(), Oe = ({
  mine: e,
  widths: n
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g("flex w-full items-end gap-2", e && "flex-row-reverse"),
    children: [
      !e && /* @__PURE__ */ t(Y, { className: "size-6 shrink-0 rounded-full" }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g("flex flex-col gap-1", e ? "items-end" : "items-start"),
          children: n.map((r, a) => /* @__PURE__ */ t(Y, { className: g("h-8 rounded-2xl", r) }, a))
        }
      )
    ]
  }
), Oc = () => /* @__PURE__ */ o(
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
), _c = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), zc = () => /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(Oc, {}) }), Bc = () => {
  const e = ee();
  return /* @__PURE__ */ t(_c, { children: e.chat.error });
}, $c = () => {
  const e = ee();
  return /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center p-6", children: /* @__PURE__ */ t(
    Ir,
    {
      emoji: "💬",
      title: e.chat.emptyConversation,
      description: e.chat.emptyConversationDescription
    }
  ) });
}, nt = (e) => e.dataTransfer?.types?.includes("Files"), Mc = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: r
}) => {
  const { channel: a, status: i, messages: l } = Ae(), { dropFiles: s } = Te(), c = B(0), [d, f] = R(!1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (u) => {
        nt(u) && (u.preventDefault(), u.stopPropagation(), c.current++, f(!0));
      },
      onDragOver: (u) => {
        nt(u) && (u.preventDefault(), u.stopPropagation());
      },
      onDragLeave: (u) => {
        nt(u) && (u.preventDefault(), u.stopPropagation(), c.current--, c.current <= 0 && (c.current = 0, f(!1)));
      },
      onDrop: (u) => {
        if (!nt(u)) return;
        u.preventDefault(), u.stopPropagation(), c.current = 0, f(!1);
        const m = Array.from(u.dataTransfer.files);
        m.length > 0 && s(m);
      },
      children: [
        /* @__PURE__ */ t(
          rc,
          {
            channel: a,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: r
          }
        ),
        i === "connecting" ? /* @__PURE__ */ t(zc, {}) : i === "error" ? /* @__PURE__ */ t(Bc, {}) : l.length === 0 ? /* @__PURE__ */ t($c, {}) : /* @__PURE__ */ t(Pc, {}),
        /* @__PURE__ */ t(Zo, {}),
        /* @__PURE__ */ t(ec, { visible: d }),
        /* @__PURE__ */ t(ac, {})
      ]
    }
  );
}, Ku = (e) => /* @__PURE__ */ t(Ho, { children: /* @__PURE__ */ t(Mc, { ...e }) }), rn = {
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
}, jc = De({
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
      ...rn
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Wc = ye.forwardRef(function({ className: n, gap: r, children: a, tileSize: i, ...l }, s) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: s, ...l, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(jc({ gap: r, tileSize: i }), n),
      ref: s,
      ...l,
      children: a
    }
  ) });
}), Uc = De({
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
}), sa = ce(function({
  className: n,
  grow: r,
  basis: a,
  shrink: i,
  paddingX: l,
  paddingY: s,
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
        Uc({
          paddingX: l,
          basis: a,
          paddingY: s,
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
}), Hc = De({
  base: "flex-row",
  variants: {
    gap: {
      ...rn
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Vc = ye.forwardRef(function({ className: n, gap: r, wrap: a, ...i }, l) {
  return /* @__PURE__ */ t(
    sa,
    {
      className: g(Hc({ gap: r, wrap: a }), n),
      ref: l,
      ...i
    }
  );
}), Gc = De({
  base: "flex-col",
  variants: {
    gap: {
      ...rn
    }
  },
  defaultVariants: {}
}), Kc = ce(function({ className: n, gap: r, children: a, ...i }, l) {
  return /* @__PURE__ */ t(
    sa,
    {
      className: g(Gc({ gap: r }), n),
      ref: l,
      ...i,
      children: a
    }
  );
}), qu = Se(
  {
    name: "Stack",
    type: "layout"
  },
  Kc
), Yu = Se(
  {
    name: "Split",
    type: "layout"
  },
  Vc
), Qu = Se(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Wc
), qc = ({ children: e }) => {
  const { enabled: n } = Sr();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        ne.div,
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
}, Yc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Qc = ce(function({ header: n, children: r, action: a, summaries: i, alert: l, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Sr();
  V(() => {
    if (l && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, s]);
  const m = (h) => !!h && !(ye.isValidElement(h) && h.type === ye.Fragment && ye.Children.count(h.props.children) === 0), p = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    Ht,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Vt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Gt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Yc, {}),
                /* @__PURE__ */ t(xr, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(Pe, { label: n.info, children: /* @__PURE__ */ t(
                Z,
                {
                  icon: vr,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(mt, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ t(yr, { text: l, level: "critical" }),
              s && /* @__PURE__ */ t(lt, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ t(
                Xi,
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
            /* @__PURE__ */ t(qc, { children: /* @__PURE__ */ t(Ji, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              oe,
              {
                icon: f ? Zi : el,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Kt, { className: "flex h-full flex-col gap-4", children: [
          i && /* @__PURE__ */ t("div", { className: "flex flex-row", children: i.map((h, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: h.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!h.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.prefixUnit }),
              h.value,
              !!h.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: h.postfixUnit })
            ] })
          ] }, b)) }),
          ye.Children.toArray(r).filter(m).map((h, b) => /* @__PURE__ */ o(ye.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t(Tl, { bare: !0 }),
            h
          ] }, b))
        ] }),
        a && /* @__PURE__ */ t(tl, { children: /* @__PURE__ */ t(oe, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), Xc = De({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Jc = ce(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      Ht,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Vt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Gt, { children: n.title }) : /* @__PURE__ */ t(Y, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(xr, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Kt,
            {
              "aria-hidden": !0,
              className: g(r !== "full" && Xc({ height: r })),
              children: [...Array(4)].map((i, l) => /* @__PURE__ */ t(
                Y,
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
), Me = xe(
  he("Widget", be(Qc, Jc))
), Ce = Object.assign(
  ce(function({ chart: n, summaries: r, ...a }, i) {
    return /* @__PURE__ */ t(Me, { ref: i, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Me.Skeleton
  }
), Zc = be(
  ce(function({ canBeBlurred: n, ...r }, a) {
    const i = {
      ...r,
      header: {
        ...r.header,
        canBeBlurred: n
      }
    }, l = {
      ...r.chart,
      yAxis: r.chart.yAxis ? { ...r.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      Ce,
      {
        ref: a,
        ...i,
        chart: /* @__PURE__ */ t(Al, { ...l, canBeBlurred: n })
      }
    );
  }),
  Ce.Skeleton
), ed = he(
  "AreaChartWidget",
  Zc
), td = ce(function(n, r) {
  return /* @__PURE__ */ t(
    Ce,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(Rl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), nd = he(
  "BarChartWidget",
  be(td, Ce.Skeleton)
), rd = be(
  ce(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(Ll, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  Ce.Skeleton
), ad = he(
  "LineChartWidget",
  rd
), id = be(
  ce(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(Dl, { ...n.chart })
        }
      );
    }
  ),
  Ce.Skeleton
), ld = he(
  "PieChartWidget",
  id
), sd = be(
  ce(
    function(n, r) {
      return /* @__PURE__ */ t(Ce, { ref: r, ...n, chart: null });
    }
  ),
  Ce.Skeleton
), od = he(
  "SummariesWidget",
  sd
), cd = be(
  ce(
    function(n, r) {
      return /* @__PURE__ */ t(
        Ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(Pl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  Ce.Skeleton
), dd = he(
  "VerticalBarChartWidget",
  cd
), Xu = Se(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  ed
), Ju = Se(
  {
    name: "BarChartWidget",
    type: "info"
  },
  nd
), Zu = Se(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ad
), ef = Se(
  {
    name: "PieChartWidget",
    type: "info"
  },
  ld
), tf = Se(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  dd
), nf = Se(
  {
    name: "SummariesWidget",
    type: "info"
  },
  od
), ud = (e, n) => /* @__PURE__ */ o(
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
), fd = ce(ud), md = (e, n) => /* @__PURE__ */ o(
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
), hd = ce(md), pd = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, gd = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, bd = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, xd = {
  "line-chart": "default",
  "bar-chart": "promote"
}, vd = ce(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: i, buttonAction: l, type: s }, c) {
    const d = pd[s], f = gd[s], u = bd[s], m = xd[s];
    return /* @__PURE__ */ o(
      Ht,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Vt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Gt, { children: n }) }),
          /* @__PURE__ */ o(Kt, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(fd, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ t(hd, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: r }),
              a && /* @__PURE__ */ t(
                oe,
                {
                  label: a,
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
), rf = xe(
  he("ChartWidgetEmptyState", vd)
);
function yd(e, n) {
  const r = B(null), a = B(null), [i, l] = R({
    visibleItems: [],
    overflowItems: []
  });
  nl({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const s = H(
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
        h = x, h = s(
          h,
          b,
          u.length
        ), p++;
      }
      return p;
    },
    [s]
  ), f = H(() => {
    if (!r.current || e.length === 0) return;
    const u = r.current.clientHeight, m = c(), p = d(
      m,
      u
    );
    l(p === 0 ? {
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
const bt = function({
  items: n,
  renderListItem: r,
  className: a,
  gap: i = 0,
  minSize: l,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = yd(n, i);
  return V(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", a),
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
bt.displayName = "VerticalOverflowList";
const af = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((i) => /* @__PURE__ */ t(Et, { ...i }, i.title)) }) : /* @__PURE__ */ t(
  bt,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (i) => /* @__PURE__ */ t(Et, { ...i }, i.title)
  }
) : null, wd = ({ onClick: e, children: n }) => {
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
function lf({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: i
}) {
  return /* @__PURE__ */ t(wd, { onClick: i, children: /* @__PURE__ */ o(
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
const Nd = ce(
  function({ content: n, label: r, color: a, ...i }, l) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: l, children: [
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
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(We, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), sf = ce(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: i, color: l, ...s }) => /* @__PURE__ */ t(
          Nd,
          {
            label: a,
            content: i,
            color: l,
            ...s
          },
          `${a}-${i}`
        ))
      }
    );
  }
), Cd = ({
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
function of({
  id: e,
  title: n,
  subtitle: r,
  avatars: a,
  remainingCount: i,
  withPointerCursor: l = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    Cd,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(hr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(rl, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Ut,
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
const kd = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function Mn({
  id: e,
  title: n,
  subtitle: r,
  onClick: a,
  module: i
}) {
  const l = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(kd, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: l, children: [
    /* @__PURE__ */ t(lr, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const Id = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function Ot({
  id: e,
  title: n,
  alert: r,
  rawTag: a,
  count: i,
  icon: l,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Id, { onClick: (p) => {
    p.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ t(
        Z,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ t(
        Z,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ t(yr, { ...r }),
      a && /* @__PURE__ */ t(je, { ...a }),
      !!i && /* @__PURE__ */ t(mt, { value: i })
    ] })
  ] });
}
function cf({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: i
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((l) => /* @__PURE__ */ t(Mn, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ t(
    bt,
    {
      items: e,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ t(Mn, { ...l, onClick: r }, l.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function df({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((l) => /* @__PURE__ */ t(Ot, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ t(
    bt,
    {
      items: e,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ t(Ot, { ...l, onClick: a }),
      minSize: r
    }
  );
}
const Sd = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), uf = ce(
  function({ title: n, titleValue: r, titleTooltip: a, list: i }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          a && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            Pe,
            {
              label: a.label,
              description: a.description,
              children: /* @__PURE__ */ t(Z, { icon: vr, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      i.map((s) => /* @__PURE__ */ t(Sd, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function ff({
  title: e,
  subtitle: n,
  data: r,
  helpText: a,
  legend: i = !1,
  hideTooltip: l = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      El,
      {
        data: r,
        legend: i,
        hideTooltip: l
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
const oa = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, Fd = ({
  data: e = [],
  labels: n,
  trackedMinutes: r,
  remainingMinutes: a,
  canSeeRemainingTime: i = !0
}) => {
  const s = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!i || a === void 0) return;
    const u = oa(
      r,
      a
    ), m = Math.abs(u), p = Math.floor(m / 60), h = Math.floor(m % 60), b = `${p.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = _e[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, kt = "--:--", Td = (e, n) => {
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
}, Ad = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, i = oa(
    n,
    r
  ), l = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = a || (i ?? 0) < 0 ? void 0 : Td(
    i ?? 0,
    l
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, h = m.variant === "clocked-in" ? Math.min(p, c) : 0, x = (p - h) / l;
        return c -= h, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: h / l + x,
            color: _e.overtime
          }
        ] : [
          ...u,
          {
            value: h / l,
            color: _e.overtime
          },
          {
            value: x,
            color: _e[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: _e.empty
  }), f;
}, Rd = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((p) => p.variant === "clocked-in")?.from, i = e.at(-1), l = a ? on(a) : kt, s = n === void 0 || n > 0 ? kt : i ? on(i.to) : kt, d = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: l,
    secondaryLabel: s,
    time: m
  };
}, _e = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Ld({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = Ad({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: i, secondaryLabel: l, time: s } = Rd({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(Ol, { width: 156, height: 156, children: /* @__PURE__ */ t(
      _l,
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
          al,
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
function Dd({
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
        /* @__PURE__ */ t(Z, { icon: il })
      ]
    }
  );
}
function mf({
  trackedMinutes: e,
  remainingMinutes: n,
  data: r = [],
  labels: a,
  locationId: i,
  locations: l,
  canShowLocation: s = !0,
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
  canShowProject: L = !0,
  projectSelectorElement: O,
  breakTypeName: M
}) {
  const { status: D, statusText: P, subtitle: F, statusColor: G } = Fd({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), U = D === "clocked-out", w = m?.map((_) => ({
    value: _.id,
    label: _.duration ? `${_.name} · ${_.duration}` : _.name,
    description: _.description,
    tag: _.isPaid ? a.paid : a.unpaid
  })) ?? [], [k, N] = R(!1), T = () => {
    if (w.length > 1)
      k || N(!0);
    else {
      const _ = w?.[0]?.value;
      u?.(_);
    }
  }, $ = (_) => {
    p?.(_), N(!1), u?.(_);
  }, y = U && l.length && !c && s, C = l.find((_) => _.id === i), I = l.map((_) => ({
    value: _.id,
    label: _.name,
    icon: _.icon
  })), E = D === "break", [K, W] = R(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: P }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                ne.div,
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
          F && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: F })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            oe,
            {
              onClick: d,
              label: a.clockIn,
              icon: cn
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(de, { children: [
            h && /* @__PURE__ */ t(de, { children: w.length > 1 && p ? /* @__PURE__ */ t(
              st,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: $,
                open: k,
                onOpenChange: N,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  oe,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: dn,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              oe,
              {
                onClick: T,
                label: a.break,
                variant: "neutral",
                icon: dn,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              oe,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: un
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t(
              oe,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: un,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              oe,
              {
                onClick: d,
                label: a.resume,
                icon: cn
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        Ld,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(de, { children: [
      /* @__PURE__ */ t(
        st,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: i,
          options: I,
          onChange: v,
          open: K,
          onOpenChange: W,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Dd,
            {
              text: C?.name,
              placeholder: a.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      L && O
    ] }) : /* @__PURE__ */ o(de, { children: [
      s && C && /* @__PURE__ */ t(de, { children: /* @__PURE__ */ t(je, { text: C.name, icon: C.icon }) }),
      L && O,
      E && M && /* @__PURE__ */ t(je, { text: M })
    ] }) })
  ] }) });
}
const Pd = {
  done: ol,
  "in-progress": sl,
  todo: ll
}, Ed = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Od({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const i = () => {
    r?.(e);
  }, l = ie(() => {
    if (!a)
      return Pd[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    Ot,
    {
      id: e.id,
      title: e.text,
      icon: l,
      iconClassName: Ed[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: cl
      } : void 0,
      count: e.counter,
      onClick: i
    }
  );
}
function hf({
  tasks: e,
  onClickTask: n,
  hideIcons: r = !1,
  maxTasksToShow: a = 5,
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
    ).map(({ id: u, text: m, badge: p, counter: h }) => ({
      id: u,
      text: m,
      badge: p,
      counter: h,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : s.slice(0, a).map((d) => /* @__PURE__ */ t(
    Od,
    {
      task: d,
      status: d.status,
      hideIcon: r,
      onClick: n
    },
    d.id
  )) });
}
var _d = Object.defineProperty, zd = Object.defineProperties, Bd = Object.getOwnPropertyDescriptors, ut = Object.getOwnPropertySymbols, ca = Object.prototype.hasOwnProperty, da = Object.prototype.propertyIsEnumerable, jn = (e, n, r) => n in e ? _d(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, we = (e, n) => {
  for (var r in n || (n = {})) ca.call(n, r) && jn(e, r, n[r]);
  if (ut) for (var r of ut(n)) da.call(n, r) && jn(e, r, n[r]);
  return e;
}, xt = (e, n) => zd(e, Bd(n)), $d = (e, n) => {
  var r = {};
  for (var a in e) ca.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && ut) for (var a of ut(e)) n.indexOf(a) < 0 && da.call(e, a) && (r[a] = e[a]);
  return r;
}, Md = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, jd = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), Wd = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = we({}, n);
    return a.right = e.left, a;
  }
  return null;
}, Ud = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = we({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, Hd = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let i = we({}, a);
  return i.left = n.left + e.width, Md(i) || jd({ usedSpot: i, spotsList: r }) ? null : i;
}, Vd = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((i, l, s) => {
  if (i === r) return Hd({ stone: a, position: n, optimalSpot: r, spotsList: s });
  let c = Wd({ position: n, spot: i, stone: a });
  return c || Ud({ position: n, stone: a, spot: i }) || i;
});
function Gd(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let i = n[r];
    if (e(i)) return i;
  }
  return null;
}
var Kd = (e, n) => n.filter(e), qd = (e, n) => [...n].sort(e), Yd = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Qd = (e) => qd(Yd, e), Xd = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
  let i = { right: r, top: n.top + a.height, left: n.left };
  n.bottom && (i.bottom = n.bottom);
  for (let l = 0, s = e.length; l < s; l += 1) {
    let c = e[l];
    if (i.left < c.left && i.top < c.top) {
      i.right = c.left;
      break;
    }
  }
  return i;
}, Jd = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, Zd = ({ availableSpots: e, stone: n }) => Gd((r) => Jd(r, n), e);
function eu({ stone: e, availableSpots: n, containerSize: r }) {
  let a = Zd({ availableSpots: n, stone: e }), i = { left: a.left, top: a.top }, l = Xd({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), s = [...n, l], c = Vd({ spots: s, position: i, optimalSpot: a, stone: e });
  return s = [...Kd(Boolean, c)], s = Qd(s), { position: i, availableSpots: s };
}
var tu = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, i = [], l = [{ top: 0, left: 0, right: n }];
  for (let s of e) {
    let c = eu({ availableSpots: l, stone: s, containerSize: n }), d = c.position.top + s.height;
    a < d && (a = d), i.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: i, containerHeight: a };
}, nu = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), ru = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: i }) => {
  let [{ positions: l, containerHeight: s, stones: c, availableSpots: d }, f] = R({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
    var u, m;
    let p = nu(e.current), h = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (h === null) return;
    let b = tu({ stones: p, containerSize: h });
    f(xt(we({}, b), { stones: p }));
  }, [r, e, n, a, i]), { positions: l, containerHeight: s, stones: c, availableSpots: d };
}, au = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), iu = ({ transition: e, transitionDuration: n }) => e ? { transition: au(n)[e] } : null, lu = (e) => e ? xt(we({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, su = ({ style: e, position: n, transition: r, transitionDuration: a }) => we(we(xt(we({}, e), { position: "absolute" }), lu(n)), iu({ transition: r, transitionDuration: a }));
function ou(e, n, r) {
  let a;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, i);
    }, n);
  };
}
var cu = () => {
  let [e, n] = R(), r = B(ou(n, 300));
  return V(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, du = (e) => {
  let [n, r] = R(null);
  return V(() => {
    let a = new ResizeObserver((i) => {
      for (let l of i) r(l.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, uu = (e) => {
  var n = e, { children: r, style: a, transition: i = !1, transitionDuration: l = 500, transitionStep: s = 50 } = n, c = $d(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = B([]), f = B(null), u = cu(), m = du(f), { positions: p, containerHeight: h } = ru({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), b = we({ minHeight: h ?? 0, position: "relative" }, a);
  return t("div", xt(we({ ref: f, style: b }, c), { children: Cr.map(r, (x, v) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let L = { style: su({ style: x.props.style, position: p[v], transition: i, transitionDuration: l }), ref: (O) => d.current[v] = O };
    return Nr(x, we(we({}, x.props), L));
  }) }));
};
const fu = { sm: 340, md: 480, lg: 640 }, Wn = ce(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const i = fu[r], [l, s] = R(), c = Cr.toArray(n), d = B(null);
    return V(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, i]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: l === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(uu, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), mu = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], pf = be(Wn, () => /* @__PURE__ */ t(wr, { children: /* @__PURE__ */ t(Wn, { children: mu.map((e, n) => /* @__PURE__ */ t(Me.Skeleton, { height: e }, n)) }) })), Un = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), gf = be(
  ce(function({ children: n }, r) {
    return /* @__PURE__ */ t(ft, { ref: r, showBar: !1, children: /* @__PURE__ */ t(Un, { children: n }) });
  }),
  () => /* @__PURE__ */ t(wr, { orientation: "horizontal", children: /* @__PURE__ */ o(Un, { children: [
    /* @__PURE__ */ t(Me.Skeleton, {}),
    /* @__PURE__ */ t(Me.Skeleton, {}),
    /* @__PURE__ */ t(Me.Skeleton, {})
  ] }) })
);
function hu({
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
    Ir,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const bf = xe(
  he("WidgetEmptyState", hu)
), ua = ce(
  ({ title: e, children: n }, r) => (dl(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
ua.displayName = "WidgetSection";
const xf = xe(
  he("WidgetSection", ua)
), vf = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const i = ul(), l = window.location.pathname, s = ie(() => n?.length ? n.includes(l) : r?.length ? !r.includes(l) : !0, [l, n, r]), c = ie(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return s ? a : (i && console.error(c), null);
}, yf = xe(
  Se(
    {
      name: "ScrollArea",
      type: "layout"
    },
    ft
  )
);
export {
  Su as ActivityItemList,
  $s as ActivityItemListSkeleton,
  fs as AiPromotionChat,
  ms as AiPromotionChatProvider,
  Lu as ApplicationFrame,
  Jf as AreaChart,
  Xu as AreaChartWidget,
  Qu as AutoGrid,
  vi as Badge,
  Zf as BarChart,
  Ju as BarChartWidget,
  Bs as BaseActivityItemList,
  em as BaseBanner,
  Hs as BaseCelebration,
  Zs as BaseCommunityPost,
  Cf as BaseTabs,
  kf as BreadcrumbSelect,
  Wl as Breadcrumbs,
  Et as CalendarEvent,
  af as CalendarEventList,
  tm as CardSelectableContainer,
  gl as Carousel,
  nm as CategoryBarChart,
  ff as CategoryBarSection,
  Fu as Celebration,
  Vs as CelebrationSkeleton,
  rf as ChartWidgetEmptyState,
  If as Chip,
  mf as ClockInControls,
  rm as ComboChart,
  Au as CommunityPost,
  eo as CommunityPostSkeleton,
  No as CompanySelector,
  mt as Counter,
  pf as Dashboard,
  Du as DaytimePage,
  Sf as DetailsItem,
  Ff as DetailsItemsList,
  am as Dialog,
  ze as Dropdown,
  Iu as EntitySelect,
  im as F0ActionBar,
  lm as F0AiBanner,
  lr as F0AvatarModule,
  Tf as F0ButtonToggle,
  Nu as F0Callout,
  Af as F0CardHorizontal,
  Ku as F0Chat,
  Gu as F0ChatProvider,
  pr as F0FileItem,
  sm as F0NotesTextEditor,
  om as F0NotesTextEditorSkeleton,
  cm as F0NumberInput,
  ii as F0RichTextDisplay,
  dm as F0RichTextEditor,
  Oi as F0SearchInput,
  Cu as F0SegmentedBar,
  um as F0SegmentedControl,
  fm as F0TableOfContent,
  mm as F0TextAreaInput,
  Rf as F0TextInput,
  ku as F0VersionHistory,
  hm as F1SearchBox,
  pm as FILE_TYPES,
  Lf as FileItem,
  Tu as HighlightBanner,
  sf as IndicatorsList,
  gm as Input,
  bm as Item,
  xm as ItemSectionHeader,
  ic as LATEST,
  vm as LineChart,
  Zu as LineChartWidget,
  Mu as Menu,
  Df as MobileDropdown,
  ym as NotesTextEditor,
  wm as NotesTextEditorSkeleton,
  Nm as NumberInput,
  Pu as OmniButton,
  Hu as OneApprovalHistory,
  Pf as OneCalendar,
  Ef as OneCalendarInternal,
  Cm as OneDataCollection,
  km as OneDateNavigator,
  Ir as OneEmptyState,
  Im as OnePagination,
  Ru as OnePersonListItem,
  vf as OneRestrictComponent,
  Eu as Page,
  wu as PageHeader,
  Qt as PageHeaderNavigationContext,
  vu as PageHeaderNavigationProvider,
  Yl as PageNavigation,
  Sm as PieChart,
  ef as PieChartWidget,
  qc as PrivateBox,
  Fm as ProgressBarChart,
  Tm as RadarChart,
  Ks as Reactions,
  Am as ResourceHeader,
  Of as RichTextDisplay,
  Rm as RichTextEditor,
  yf as ScrollArea,
  ju as SearchBar,
  Lm as SectionHeader,
  st as Select,
  Ni as Shortcut,
  Wu as Sidebar,
  vo as SidebarChatItem,
  Xr as SidebarChatItemSkeleton,
  zu as SidebarChatList,
  go as SidebarChatListSkeleton,
  Ou as SidebarChatProvider,
  Jt as SidebarCollapsibleSection,
  Bu as SidebarFooter,
  $u as SidebarHeader,
  Uu as SidebarTabs,
  Bt as Spinner,
  Yu as Split,
  qu as Stack,
  nf as SummariesWidget,
  _f as Switch,
  zf as Tabs,
  Bf as TabsSkeleton,
  hf as TasksList,
  Dm as Textarea,
  $f as ToggleGroup,
  Mf as ToggleGroupItem,
  Pe as Tooltip,
  uf as TwoColumnsList,
  Pm as UPLOAD_INPUT_ID,
  Em as VerticalBarChart,
  tf as VerticalBarChartWidget,
  Lt as VirtualList,
  jf as WeekStartDay,
  Wf as Weekdays,
  Me as Widget,
  of as WidgetAvatarsListItem,
  bf as WidgetEmptyState,
  lf as WidgetHighlightButton,
  cf as WidgetInboxList,
  Mn as WidgetInboxListItem,
  xf as WidgetSection,
  df as WidgetSimpleList,
  Ot as WidgetSimpleListItem,
  gf as WidgetStrip,
  Om as actionBarStatuses,
  _m as buttonToggleSizes,
  zm as buttonToggleVariants,
  Uf as chipVariants,
  Bm as downloadAsCSV,
  Hf as f0FileItemSizes,
  $m as generateCSVContent,
  Vf as getGranularityDefinition,
  Gf as getGranularityDefinitions,
  Kf as getGranularitySimpleDefinition,
  qf as granularityDefinitions,
  Yf as modules,
  Mm as predefinedPresets,
  Qf as rangeSeparator,
  _n as seedFromStorage,
  jm as selectSizes,
  ht as useAiPromotionChat,
  Wm as useDataCollectionData,
  Vu as useDataCollectionItemNavigation,
  Nl as useDataCollectionSource,
  Um as useExportAction,
  Ae as useF0Chat,
  Hm as useInfiniteScrollPagination,
  as as usePageHeaderItemNavigation,
  yu as usePageHeaderNavigation,
  Ue as useSidebar,
  _u as useSidebarChatActions,
  ho as useSidebarChats
};
