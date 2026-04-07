import { O as sr, P as lr, Q as ir, R as or, T as Wt, U as ze, W as cr, X as wt, Y as dt, Z as je, K as g, _ as Y, L as be, u as oe, $ as dr, a0 as ur, a1 as fr, a2 as mr, a3 as hr, a4 as se, a5 as pr, a6 as Fe, a7 as gr, a8 as br, a9 as B, aa as xr, ab as vr, ac as Re, ad as wn, ae as yr, af as wr, M as j, ag as Nt, ah as E, ai as fe, aj as Nr, ak as Cr, al as Ir, am as kr, an as Sr, ao as Te, ap as Nn, aq as Fr, ar as ve, as as De, at as Tr, au as Ct, k as Cn, av as ke, aw as Ar, ax as In, ay as re, az as $, N as kn, aA as Sn, aB as _r, aC as It, aD as pe, aE as ne, aF as Lr, aG as Er, aH as Dr, aI as Rr, aJ as ge, aK as Ye, aL as Pr, aM as Or, aN as zr, aO as $r, aP as Ze, aQ as Fn, aR as Br, aS as Mr, aT as Wr, aU as Ge, aV as jr, aW as Gr, aX as Vr, aY as Ur, aZ as Hr, a_ as Kr, a$ as qr, b0 as Yr, b1 as Zr, b2 as Tn, b3 as Jr, b4 as Xr, b5 as Ve, b6 as Ce, b7 as Qr, b8 as An, b9 as kt, ba as es, bb as ts, bc as _n, bd as ut, be as ft, bf as Ln, bg as ns, bh as as, bi as Je, bj as St, bk as En, bl as rs, bm as Dn, bn as ss, bo as ls, bp as Se, bq as is, br as $e, bs as jt, bt as mt, bu as os, bv as cs, bw as ds, bx as Rn, by as us, bz as Pn, bA as Ft, bB as fs, bC as ms, bD as Tt, bE as hs, a as ps, c as gs, bF as bs, bG as On, bH as xs, bI as vs, F as ys, bJ as zn, bK as $n, bL as ws, bM as Gt, bN as Ns, bO as Cs, bP as Is, bQ as ks, bR as Bn, bS as Ss, bT as Fs, bU as Ts, bV as As, bW as _s, bX as me, bY as At, bZ as _t, b_ as Lt, b$ as Mn, c0 as Et, c1 as Wn, c2 as Ls, c3 as Es, c4 as Ds, c5 as Rs, c6 as Ps, c7 as Os, c8 as zs, c9 as $s, ca as Bs, cb as Ms, cc as Vt, cd as Ut, ce as Ht, cf as Ws, cg as js, ch as Gs, ci as Vs, cj as jn, ck as Us, cl as Hs, cm as Ks } from "./F0AiChat-BGAOYI3G.js";
import { cu as xu, ct as vu, cI as yu, cH as wu, cn as Nu, cS as Cu, co as Iu, cs as ku, cp as Su, cC as Fu, cD as Tu, cJ as Au, cQ as _u, cR as Lu, cq as Eu, cw as Du, cv as Ru, cE as Pu, cG as Ou, cF as zu, cL as $u, cM as Bu, cB as Mu, cy as Wu, cA as ju, cx as Gu, cr as Vu, cz as Uu, cN as Hu, cO as Ku, cK as qu, cP as Yu } from "./F0AiChat-BGAOYI3G.js";
import { jsx as t, jsxs as o, Fragment as H } from "react/jsx-runtime";
import * as ee from "react";
import K, { forwardRef as R, useRef as V, useTransition as qs, useState as L, useLayoutEffect as Gn, useContext as Dt, createContext as Rt, useCallback as te, useMemo as Z, useEffect as G, useId as Ys, memo as Vn, Fragment as Zs, isValidElement as Js, cloneElement as Un, Children as Hn } from "react";
import { C as Xs, P as Qs, g as Kn, c as el, t as tl, s as nl, a as qn, F as ht, R as al, f as rl, b as sl, u as Yn, A as ll, B as il, L as ol, d as cl, V as dl, e as ul, h as Kt, i as fl, j as ml, k as hl } from "./index-DDKGVAkI.js";
import { n as Ju, o as Xu, l as Qu, E as ef, p as tf, x as nf, N as af, D as rf, m as sf, I as lf, W as of, J as cf, K as df, q as uf, Q as ff, O as mf, r as hf, w as pf, y as gf, H as bf, U as xf, S as vf, T as yf, v as wf, _ as Nf, z as Cf, M as If, G as kf } from "./index-DDKGVAkI.js";
const pl = sr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Zn = R(({ className: e, items: n }, a) => /* @__PURE__ */ t(lr, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(ir, {}),
  /* @__PURE__ */ t(or, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Zn.displayName = "CollapsedBreadcrumbItem";
const Pt = 50, gl = 120, Ue = 8;
function bl(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let s = e - r - Ue, l = 0, i = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (s < d)
      break;
    s -= d, l = c, i++;
  }
  if (i < a)
    for (s -= Pt; s < 0 && i > 1; )
      s += n[l], l++, i--;
  return Math.max(2, i);
}
function qt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ue;
    default:
      return e[0] + Pt + e[e.length - 1] + Ue;
  }
}
function xl(e, n) {
  return gl * e + (n ? Pt : 0) + Ue;
}
function vl(e, n, a = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: xl(
        i,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, s = a.map((i) => i.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: qt(s)
    };
  const l = bl(e, s);
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
    minWidth: qt(s)
  };
}
function yl({ breadcrumbs: e, append: n }) {
  const a = V(null), r = V(null), [, s] = qs(), [l, i] = L(null), c = (l?.collapsedItems || []).length > 0;
  return Gn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, b = Array.from(f.children);
      s(() => {
        const p = vl(
          h,
          e,
          b
        );
        i(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || l && !l.headItem ? /* @__PURE__ */ t(Wt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Wt,
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
              ze,
              {
                item: d,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              d.id
            ))
          }
        ),
        l && l.headItem && /* @__PURE__ */ o(cr, { children: [
          /* @__PURE__ */ t(
            ze,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${l.headItem.id}`
          ),
          c && /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ t(
              Zn,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((d, f) => /* @__PURE__ */ t(
              ze,
              {
                item: d,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ t(H, { children: l.tailItems.map((d, f) => /* @__PURE__ */ t(
            ze,
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
    `breadcrumb-${e.at(-1)?.id ?? 0}`
  );
}
const Yt = "one_sidebar_locked", Jn = Rt(void 0);
function Ae() {
  const e = Dt(Jn);
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
function wl({ children: e }) {
  const { currentPath: n } = wt(), [a, r] = L(!1), [s, l] = L(!1), i = a ? je.xl : je.md, c = dt(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = L(() => {
    const C = localStorage.getItem(Yt);
    return C !== null ? !!C : !0;
  }), [u, m] = L(!1), [h, b] = L(
    null
  ), p = te(
    ({ isInvokedByUser: C } = {
      isInvokedByUser: !0
    }) => {
      l(C ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = te(
    (C) => {
      c || (C.clientX < 32 && m(!0), C.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = Z(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return G(() => {
    m(!1);
  }, [n]), G(() => {
    s && localStorage.setItem(Yt, d ? "1" : "");
  }, [d, s]), G(() => () => {
    b(w);
  }, [w]), /* @__PURE__ */ t(
    Jn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: s,
        sidebarState: w,
        toggleSidebar: p,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const Nl = be({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Zt = [
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
], Cl = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...s
}, l) => {
  const i = Ys(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...b
  } = s;
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(Nl({ size: n }), h),
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
            ...b.style
          },
          ...(({ style: p, ...x }) => x)(b),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Zt.map((p) => /* @__PURE__ */ t("clipPath", { id: `${i}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: Zt.map((p) => /* @__PURE__ */ t(
              Y.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${p.id})`,
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
}, Xn = R(Cl), Qn = Rt(null), Il = 15, kl = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [s, l] = L(n), [i, c] = L(!1), [d, f] = L(!0), [u, m] = L(
    Il
  ), h = V(null), b = (x) => {
    h.current = x;
  }, p = () => {
    h.current && h.current();
  };
  return G(() => {
    l(n);
  }, [n]), G(() => {
    if (i && a?.(), !i) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [i, a]), /* @__PURE__ */ t(
    Qn.Provider,
    {
      value: {
        ...r,
        enabled: s,
        setEnabled: l,
        open: i,
        setOpen: c,
        shouldPlayEntranceAnimation: d,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: s ? u : null,
        clear: p,
        setClearFunction: b
      },
      children: e
    }
  );
}, Ne = () => {
};
function Xe() {
  const e = Dt(Qn);
  return e === null ? {
    enabled: !1,
    setEnabled: Ne,
    open: !1,
    setOpen: Ne,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ne,
    setAutoClearMinutes: Ne,
    clear: Ne,
    setClearFunction: Ne,
    autoClearMinutes: null
  } : e;
}
const ea = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: s } = Xe(), l = oe(), [i, c] = L(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(dr, { children: /* @__PURE__ */ o(ur, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(fr, { asChild: !0, children: /* @__PURE__ */ t(
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
          mr,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: s,
            "aria-label": s ? l.ai.closeChat : l.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              se(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              hr,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Xn,
                  {
                    size: "sm",
                    background: s ? "white" : void 0,
                    hover: i
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !s && /* @__PURE__ */ t(pr, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, Jt = Y.create(B), Xt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Sl = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, s] = L(!1), l = () => {
    s(!0), n(!e);
  };
  return /* @__PURE__ */ t(Fe, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        se()
      ),
      onClick: l,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Jt,
        {
          size: "sm",
          icon: gr,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Xt,
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
        Jt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: br,
          className: "outline-none",
          variants: Xt,
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
}, Fl = ({
  currentModule: e,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: s,
  errorScreen: l,
  onOpenChange: i = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = L("idle"), [b, p] = L(null), [x, ...w] = b ?? [], [C, T] = L(!1);
  G(() => {
    p(null), h("idle");
  }, [e]);
  const O = te(async () => {
    try {
      h("fetching");
      const P = await a();
      h("idle"), p(P);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    xr,
    {
      open: C,
      onOpenChange: async (P) => {
        T(P), P && b === null && O(), i(P);
      },
      children: [
        /* @__PURE__ */ t(vr, { asChild: !0, children: /* @__PURE__ */ t(
          Re,
          {
            variant: "outline",
            icon: wn,
            hideLabel: !0,
            label: n,
            pressed: C,
            append: f && /* @__PURE__ */ t(Ot, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(yr, { children: /* @__PURE__ */ o(
          wr,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(_l, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Dl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && b !== null && b.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Ll, { ...s, buttonUrl: r }) }),
                m === "idle" && b !== null && b.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Tl,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  b.length > 1 && /* @__PURE__ */ t(H, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: w.map((P, A) => /* @__PURE__ */ t(
                    Al,
                    {
                      ...P,
                      onClick: d
                    },
                    A
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  El,
                  {
                    ...l,
                    onClick: () => {
                      O();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Rl,
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
}, Tl = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: s,
  onClick: l
}) => {
  const i = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Nr,
    {
      onClick: l,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        fe,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: g(i, "text-f1-foreground no-underline"),
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
              Cr,
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
              r && /* @__PURE__ */ t(Ot, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Al = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: s
}) => {
  const l = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Ir, { asChild: !0, className: l, onClick: s, children: /* @__PURE__ */ t(
    fe,
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
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(Ot, { className: "mt-1.5" })
      ] })
    }
  ) });
}, _l = ({
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
        j,
        {
          variant: "outline",
          size: "sm",
          icon: Nt,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), ta = ({
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
] }) }), Ll = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  ta,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(B, { icon: wn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(fe, { href: a, children: /* @__PURE__ */ t(j, { label: n }) })
  }
), El = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  ta,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(B, { icon: kr, size: "lg" }),
    button: /* @__PURE__ */ t(j, { variant: "outline", label: a, onClick: r })
  }
), Dl = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(E, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(E, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(E, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Ot = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Rl = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [s, l] = L(e);
  G(() => {
    l(e);
  }, [e]);
  const i = () => {
    l(!1), n && n();
  }, c = (d) => {
    l(!1), r(), d && d();
  };
  return s && /* @__PURE__ */ o(H, { children: [
    /* @__PURE__ */ t(Sr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          j,
          {
            variant: "ghost",
            icon: Te,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        Xs,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            Qs,
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
};
function Qt({
  icon: e,
  href: n,
  label: a,
  disabled: r
}) {
  const s = V(null);
  return /* @__PURE__ */ t(
    j,
    {
      href: n,
      title: a,
      "aria-label": a,
      disabled: r,
      ref: s,
      size: "sm",
      variant: "outline",
      label: a,
      icon: e,
      hideLabel: !0
    }
  );
}
function Id({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: s = !1,
  navigation: l,
  productUpdates: i,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ae(), h = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], b = n && Object.keys(n).length !== 0, p = a.length > 0, x = !s && r.length > 0, w = !s && !!i?.isVisible, C = h[h.length - 1], T = p ? h[h.length - 2] : null;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        s ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Fe, { children: !s && u !== "locked" && /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                j,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: Nn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                s && p && "justify-center"
              ),
              children: [
                s && p && T && !("loading" in T) && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(fe, { href: T.href, children: /* @__PURE__ */ t(
                  j,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Fr,
                    onClick: (O) => O.preventDefault()
                  }
                ) }) }),
                s && p ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in C ? /* @__PURE__ */ t(E, { className: "h-4 w-24" }) : C.label }) : /* @__PURE__ */ t(
                  yl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Sl,
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
          !s && b && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(ve, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            De,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(De, { text: n.text, variant: n.variant }) }),
          !s && b && (l || x || w) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          l && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            l.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              l.counter.current,
              "/",
              l.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Qt,
                {
                  icon: Tr,
                  label: l.previous?.title || "Previous",
                  href: l.previous?.url || "",
                  disabled: !l.previous
                }
              ),
              /* @__PURE__ */ t(
                Qt,
                {
                  icon: Ct,
                  label: l.next?.title || "Next",
                  href: l.next?.url || "",
                  disabled: !l.next
                }
              )
            ] })
          ] }),
          l && x && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Fl,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            x && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((O, P) => /* @__PURE__ */ t(Pl, { action: O }, P)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Cn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(ea, {})
          ] })
        ] })
      ]
    }
  );
}
function Pl({ action: e }) {
  const n = V(null), [a, r] = L(!1);
  return "actions" in e ? /* @__PURE__ */ t(ke, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    Re,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : /* @__PURE__ */ t(
    fe,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        j,
        {
          size: "md",
          variant: "outline",
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
const Ol = () => {
  const e = oe();
  return /* @__PURE__ */ o(
    Y.div,
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
          Re,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Ar,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, zl = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = V(null);
  G(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, $l = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: s
  } = Xe();
  return zl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: s
  }), /* @__PURE__ */ t(Fe, { children: n && /* @__PURE__ */ t(
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
}, Bl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(In, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        Re,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Ml = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: s,
  actions: l,
  onShow: i,
  onHide: c,
  children: d
}) => /* @__PURE__ */ t(
  kl,
  {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: l,
    onShow: i,
    onHide: c,
    children: d
  }
), Wl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: s,
    actions: l,
    setOpen: i,
    onHide: c
  } = Xe(), d = () => {
    i(!1), c?.();
  };
  return e ? /* @__PURE__ */ o($l, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      Re,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Te,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Xn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      s?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: s.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(kn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      l?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, u) => /* @__PURE__ */ t(
        Bl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Ol, {}) })
  ] }) : null;
}, jl = re(
  $("AiPromotionChat", Wl)
), Gl = re(
  $("AiPromotionChatProvider", Ml)
), na = be({
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
}), en = {
  positive: It,
  warning: _r,
  info: Sn
}, tn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Vl = R(
  function({ title: n, onClose: a, children: r, actions: s = [], variant: l }, i) {
    if (s.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${s.length} actions were provided.`
      );
    const c = s.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: i,
        className: na({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  tn[l]
                ),
                children: [
                  en[l] && /* @__PURE__ */ t(B, { icon: en[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    pe,
                    {
                      className: tn[l] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                icon: Te,
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
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: s.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              j,
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
), Ul = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: na({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(E, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(E, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(E, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(E, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(E, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(E, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), aa = R(
  (e, n) => /* @__PURE__ */ t(Vl, { ref: n, ...e })
), Hl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Ul, { compact: e, variant: n });
aa.displayName = "F0Callout";
const kd = ne(
  re(aa),
  Hl
);
function Kl({
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
        se("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(B, { icon: Lr, size: "md", color: "selected" }),
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
function ql({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: s } = Er(), l = Dr(s), i = Rr(n, "PPPp", { locale: l }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        se("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(pe, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            ge,
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
              children: c
            }
          )
        ] })
      ]
    }
  );
}
function Yl({
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
          pe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(Ye, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            Kl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((s) => /* @__PURE__ */ t(
            ql,
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
const Sd = re(
  $("F0VersionHistory", Yl)
), ra = R(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: s }, l) => {
    const i = K.useRef(null);
    K.useImperativeHandle(
      l,
      () => i.current,
      []
    );
    const c = Pr({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
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
                children: d ? s(d) : /* @__PURE__ */ t(H, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
ra.displayName = "VirtualList";
const pt = $("VirtualList", ra), sa = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const s = new RegExp(`(${n})`, "gi"), l = e.split(s);
  return /* @__PURE__ */ t("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: l.map(
    (i, c) => i.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ t(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: i
      },
      c
    ) : i
  ) });
};
function Qe(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s >= 0 && s < r.length - 1 ? r[s + 1].focus() : r.length > 0 && n?.();
}
function et(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), s = r.indexOf(e);
  s > 0 ? r[s - 1].focus() : r.length > 0 && n?.();
}
const Zl = ({
  entity: e,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: s,
  search: l,
  goToFirst: i,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), h = m[0] || "", b = m.slice(1).join(" "), p = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(e) : a(e));
  }, x = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else w.key === "ArrowDown" ? Qe(w.currentTarget, i) : w.key === "ArrowUp" && et(w.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: g(
        s,
        "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          ge,
          {
            src: e.avatar,
            firstName: h,
            lastName: b,
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
              sa,
              {
                text: e.name,
                search: l,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Fn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: p,
            onKeyDown: x,
            className: g(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          B,
          {
            className: "text-f1-icon-selected",
            icon: It,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Me = ({
  groupView: e,
  expanded: n,
  search: a,
  entity: r,
  selected: s,
  partialSelected: l,
  onSelect: i,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: b = !1,
  singleSelector: p = !1,
  disabled: x = !1,
  hiddenAvatar: w = !1
}) => {
  const [C, T] = L(!1);
  if (!e)
    return /* @__PURE__ */ t(
      Zl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: s,
        onSelect: i,
        onRemove: c,
        singleSelector: p,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: w
      }
    );
  const O = (v) => {
    if (v.key === " ")
      v.preventDefault(), d(!n);
    else if (v.key === "Enter" && p)
      d(!n);
    else if (v.key === "Enter") {
      if (x) return;
      !s || l ? i(r) : s && c(r);
    } else v.key === "ArrowDown" ? Qe(v.currentTarget, f) : v.key === "ArrowUp" && et(v.currentTarget, u);
  }, P = () => {
    if (C)
      d(!n), T(!1);
    else {
      if (x || p) return;
      s ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const A = s || l;
  return /* @__PURE__ */ o(H, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        j,
        {
          hideLabel: !0,
          icon: n ? Or : zr,
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
          className: "flex flex-1 flex-row items-center gap-2 rounded-[10px] border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            b && /* @__PURE__ */ t(
              B,
              {
                icon: $r,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                sa,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(Ze, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Fn,
              {
                checked: A,
                disabled: x,
                onClick: P,
                onKeyDown: O,
                indeterminate: l,
                onPointerDown: (v) => {
                  v.stopPropagation(), T(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: g("ml-auto", p ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Me.displayName = "EntitySelectListItem";
const nn = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? Qe(l.currentTarget, a) : l.key === "ArrowUp" && et(l.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": e,
    className: g(
      "flex flex-row flex-wrap items-center gap-1.5 rounded-[10px] border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ t(
        j,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Br,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: g("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Ee = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      j,
      {
        disabled: e.disabled,
        variant: e.variant,
        onClick: e.onClick,
        label: e.label,
        icon: e.icon,
        size: "sm"
      }
    );
  const a = [e, ...n ?? []], r = a.map((i) => ({
    label: i.label,
    value: i.label,
    icon: i.icon,
    critical: i.variant === "critical"
  })) || [], s = (i) => {
    const c = a.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, l = a.every((i) => i.disabled);
  return /* @__PURE__ */ t(
    Mr,
    {
      items: r,
      value: e.label,
      disabled: l,
      onClick: s,
      variant: "outline",
      size: "sm"
    }
  );
}, Jl = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: s,
  anyVisibleSelected: l,
  loading: i,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = e && e.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let b, p, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || s
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !l
  } : void 0;
  return x || (x = w, w = void 0), m && u ? (b = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: x,
      secondaryActions: w ? [w] : []
    }
  ), p = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? b = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (b = /* @__PURE__ */ t(Ee, { primaryAction: x, secondaryActions: [] }), w && (p = /* @__PURE__ */ t(Ee, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    b,
    p
  ] }) });
}, Xl = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: s,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(B, { icon: pl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, s)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), et(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    B,
    {
      icon: Wr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), st = 384, lt = 36, Ql = 37, an = 1, rn = 200, sn = '[data-avatarname-navigator-element="true"]', ei = ({
  groupView: e,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: s,
  onSelect: l,
  onRemove: i,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: b,
  onToggleExpand: p,
  searchPlaceholder: x,
  selectAllLabel: w,
  clearLabel: C,
  notFoundTitle: T,
  notFoundSubtitle: O,
  className: P,
  actions: A,
  onCreate: v,
  onCreateLabel: k,
  singleSelector: y = !1,
  loading: I = !1,
  disabled: z = !1,
  hiddenAvatar: S = !1
}) => {
  const _ = K.useRef(null), M = Z(
    () => e ? n.reduce(
      (F, J) => F + (J.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), N = te(() => {
    setTimeout(() => {
      _.current?.scrollTo({ top: 0 });
    }, an), setTimeout(() => {
      Array.from(
        document.querySelectorAll(sn)
      )[0]?.focus();
    }, rn);
  }, []), D = te(() => {
    setTimeout(() => {
      _.current?.scrollTo({ top: _.current?.scrollHeight });
    }, an), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(sn)
      );
      F[F.length - 1]?.focus();
    }, rn);
  }, []), W = Z(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), q = te(
    (F) => {
      const J = W.get(F.id);
      if (!e)
        return {
          selected: !!J,
          partialSelected: !!J
        };
      const Q = (F.subItems ?? []).filter(
        (ae) => J?.subItems?.some(
          (he) => he.subId === ae.subId
        )
      ), X = (F.subItems?.length ?? 0) === Q.length, ce = !X && Q.length > 0;
      return { selected: X, partialSelected: ce };
    },
    [e, W]
  ), ye = te(
    (F) => {
      if (F.index === 0 && v)
        return /* @__PURE__ */ t(
          nn,
          {
            label: k ?? "",
            onCreate: () => v?.(s),
            goToFirst: N,
            goToLast: D
          }
        );
      const J = v ? F.index - 1 : F.index, Q = n[J], { selected: X, partialSelected: ce } = q(Q);
      return /* @__PURE__ */ t(
        Me,
        {
          expanded: Q.expanded ?? !1,
          onExpand: () => p(Q, !0),
          search: s,
          groupView: e,
          entity: Q,
          onSelect: l,
          onRemove: i,
          selected: X,
          partialSelected: ce,
          showGroupIcon: ti(a, r),
          singleSelector: y,
          goToFirst: N,
          goToLast: D,
          disabled: z,
          hiddenAvatar: S
        },
        Q.id
      );
    },
    [
      v,
      k,
      z,
      n,
      q,
      N,
      D,
      e,
      a,
      S,
      i,
      l,
      p,
      s,
      r,
      y
    ]
  ), ue = Z(() => e ? n.flatMap((F) => {
    const J = Be(
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
          expanded: F.expanded ?? J?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((Q) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? J?.expanded ?? !1
        },
        subItem: Q
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
  })), [e, n, h]), U = te(
    (F) => {
      if (F.index === 0 && v)
        return /* @__PURE__ */ t(
          nn,
          {
            label: k ?? "",
            onCreate: () => v?.(s),
            goToFirst: N,
            goToLast: D
          }
        );
      const J = v ? F.index - 1 : F.index, Q = ue[J].parent, X = ue[J].subItem;
      if (!Q) {
        const ae = {
          id: X.subId,
          name: X.subName,
          avatar: X.subAvatar,
          subItems: X.subItems,
          expanded: X.expanded,
          searchKeys: X.subSearchKeys
        }, he = Be(
          h,
          ae.id
        ), xe = (ae?.subItems ?? []).filter(
          (Le) => he?.subItems?.some(
            (rr) => rr.subId === Le.subId
          )
        ), Oe = (ae.subItems?.length ?? 0) === xe.length, ar = !Oe && xe.length > 0;
        return /* @__PURE__ */ t(
          Me,
          {
            groupView: !0,
            expanded: ae.expanded ?? !1,
            onExpand: (Le) => p(ae, Le),
            search: s,
            entity: ae,
            onSelect: l,
            onRemove: i,
            selected: Oe,
            partialSelected: ar,
            showGroupIcon: a.find((Le) => Le.value === r)?.groupType === "team",
            singleSelector: y,
            goToFirst: N,
            goToLast: D,
            hideLine: J === ue.length - 1,
            disabled: z,
            hiddenAvatar: S
          }
        );
      }
      let ce = !!Be(h, X.subId);
      if (!ce) {
        const ae = Be(
          h,
          Q.id
        );
        ce = !!(Q?.subItems ?? []).filter(
          (xe) => ae?.subItems?.some(
            (Oe) => Oe.subId === xe.subId
          )
        ).find((xe) => xe.subId === X.subId);
      }
      return /* @__PURE__ */ t(
        Me,
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
            d(Q, X);
          },
          onRemove: () => c(Q, X),
          selected: !!ce,
          partialSelected: !1,
          singleSelector: y,
          goToFirst: N,
          goToLast: D,
          isChild: !0,
          hiddenAvatar: S
        }
      );
    },
    [
      ue,
      h,
      s,
      y,
      N,
      D,
      l,
      i,
      a,
      z,
      p,
      r,
      d,
      c,
      S,
      v,
      k
    ]
  ), [Ja, Xa] = Z(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, J = 0;
    if (!e)
      F = n.length, J = n.reduce(
        (ce, { id: ae }) => ce + (W.has(ae) ? 1 : 0),
        0
      );
    else {
      const ce = new Set(
        [...W.values()].flatMap(
          (ae) => ae.subItems?.map((he) => he.subId) ?? []
        )
      );
      n.forEach((ae) => {
        const he = ae.subItems ?? [];
        F += he.length, J += he.filter(
          (xe) => ce.has(xe.subId)
        ).length;
      });
    }
    const Q = F > 0 && J === F, X = J > 0;
    return [Q, X];
  }, [n, W, e]), Qa = ue.length, er = !y && (w || C), tr = A && A.length > 0, nr = !I && (!y && er || tr);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        y || I ? "rounded-r-xl" : "",
        P
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              y || I ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Xl,
                {
                  search: s,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: N,
                  goToLast: D
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Ge,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: I,
                  onChange: b,
                  options: a,
                  value: r,
                  className: g(
                    "h-8 rounded-[10px] bg-transparent py-[5px]",
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
              nr ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              I && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(In, {}) }),
              !I && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: st
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: T }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: O })
                  ]
                }
              ),
              !I && (!!M || v) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                pt,
                {
                  height: st,
                  itemCount: Qa + (v ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && v) return lt;
                    const J = v ? F - 1 : F;
                    return ue[J]?.parent === null ? Ql : lt;
                  },
                  renderer: U,
                  ref: _
                }
              ) : /* @__PURE__ */ t(
                pt,
                {
                  height: st,
                  itemCount: n.length + (v ? 1 : 0),
                  itemSize: lt,
                  renderer: ye,
                  ref: _
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          Jl,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: y,
            totalFilteredEntities: M,
            allVisibleSelected: Ja,
            anyVisibleSelected: Xa,
            selectAllLabel: w,
            clearLabel: C,
            disabled: z,
            actions: A
          }
        )
      ]
    }
  );
}, Be = (e, n) => e.find((a) => a.id === n), ti = (e, n) => e.find((a) => a.value === n)?.groupType === "team", ni = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: s = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  jr,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      s ? "pl-2" : "pl-0"
    ),
    left: !s && /* @__PURE__ */ t(
      Gr,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Vr, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      B,
      {
        icon: Te,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), ai = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  disabled: l = !1,
  hiddenAvatar: i = !1
}) => {
  const c = Z(() => {
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
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: s && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      s
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      pt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            ni,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: l,
              hiddenAvatar: i,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(H, {});
        }
      }
    ) })
  ] });
}, ri = 500, ln = 520, on = 210, cn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: s,
  width: l,
  singleSelector: i = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const b = (l ?? ln) < ri, p = !c && !i && !b, x = l ?? ln, w = p ? x - on : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "absolute right-0 top-0",
            style: {
              width: on + "px"
            },
            children: /* @__PURE__ */ t(
              ai,
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
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "absolute left-0",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ t(
              ei,
              {
                ...h,
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: i,
                loading: c,
                disabled: h.disabled,
                hiddenAvatar: d,
                actions: f,
                onCreate: u,
                onCreateLabel: m
              }
            )
          }
        )
      ]
    }
  );
}, si = ({
  placeholder: e,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: s = !1,
  label: l,
  labelIcon: i,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: b,
  loading: p = !1,
  required: x = !1,
  readonly: w = !1,
  append: C,
  size: T = "sm",
  open: O
}) => {
  const P = Z(
    () => a.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [a]
  ), A = Z(() => P ? a.flatMap(
    (y) => (y.subItems ?? []).map((I) => ({
      parent: y,
      subItem: I
    }))
  ) : a.map((y) => ({
    parent: null,
    subItem: {
      subId: y.id,
      subName: y.name,
      subAvatar: y.avatar,
      subDeactivated: y.deactivated
    }
  })), [P, a]), v = A.length === 0 ? void 0 : A.length === 1 ? A[0].subItem.subName : A.length + " " + n, k = A.length === 1 ? A[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    Ur,
    {
      onClickContent: m,
      role: "combobox",
      label: l,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !v ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: b,
      clearable: !1,
      value: v,
      disabled: r,
      loading: p,
      required: x,
      readonly: w,
      size: T,
      avatar: s || !k ? void 0 : {
        type: "person",
        firstName: k,
        lastName: "",
        src: A[0].subItem.subAvatar,
        deactivated: A[0].subItem.subDeactivated
      },
      append: C ?? /* @__PURE__ */ t(H, { children: /* @__PURE__ */ t(Hr, { open: O, disabled: r, size: T }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            v && "text-f1-foreground",
            A.length === 1 && !s || c && !v ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            pe,
            {
              tag: "span",
              className: A.length === 1 && A[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: A.length === 0 ? e ?? "" : A.length === 1 ? A[0].subItem.subName : `${A.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Fd = (e) => {
  const [n, a] = L(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (v) => {
    a(v), e.onOpenChange?.(v);
  };
  G(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [s, l] = L(e.entities), [i, c] = L(""), [d, f] = Kr("", 300), u = Z(
    () => e.entities.some(
      (v) => v.subItems && v.subItems.length > 0
    ),
    [e.entities]
  );
  function m(v) {
    if (e.singleSelector) {
      e.onSelect(v), a(!1);
      return;
    }
    const k = e.selectedEntities ?? [], y = s.find((M) => M.id === v.id);
    if (!y)
      return;
    const I = new Set(
      (y.subItems ?? []).map((M) => M.subId)
    ), z = /* @__PURE__ */ new Set([y.id]);
    s.forEach((M) => {
      M.id !== y.id && (M.subItems ?? []).some(
        (D) => I.has(D.subId)
      ) && z.add(M.id);
    });
    const S = [...k];
    function _(M) {
      const N = S.findIndex((D) => D.id === M.id);
      N >= 0 ? S[N] = M : S.push(M);
    }
    z.forEach((M) => {
      const N = s.find((q) => q.id === M);
      if (!N) return;
      const D = N.subItems?.filter(
        (q) => I.has(q.subId)
      ) ?? [], W = S.findIndex((q) => q.id === M);
      if (W >= 0) {
        const q = S[W].subItems ?? [], ye = new Set(q.map((U) => U.subId)), ue = [
          ...q,
          ...D.filter((U) => !ye.has(U.subId))
        ];
        _({
          ...N,
          subItems: ue
        });
      } else
        _({
          ...N,
          subItems: D
        });
    }), e.onSelect(S);
  }
  function h(v, k) {
    if (e.singleSelector)
      e.onSelect({ ...v, subItems: [{ ...k }] }), a(!1);
    else {
      const y = e.selectedEntities ?? [], I = new Set(y.map((_) => _.id)), z = new Map(
        y.map((_) => [_.id, _.subItems ?? []])
      );
      I.add(v.id), e.entities.forEach((_) => {
        _.subItems?.some(
          (N) => N.subId === k.subId
        ) && I.add(_.id);
      });
      const S = [];
      e.entities.forEach((_) => {
        if (I.has(_.id)) {
          let N = [...z.get(_.id) ?? []];
          _.subItems?.some(
            (q) => q.subId === k.subId
          ) && (N.some(
            (ye) => ye.subId === k.subId
          ) || N.push(k));
          const W = new Set(
            (_.subItems ?? []).map((q) => q.subId)
          );
          N = N.filter(
            (q) => W.has(q.subId)
          ), S.push({
            ..._,
            subItems: N
          });
        }
      }), e.onSelect(S);
    }
  }
  function b(v) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let k = [];
    const y = e.selectedEntities ?? [];
    if (u) {
      const I = s.find(
        (S) => S.id === v.id
      );
      if (!I)
        return;
      const z = new Set(
        (I.subItems ?? []).map((S) => S.subId)
      );
      for (const S of y) {
        const _ = (S.subItems ?? []).filter(
          (M) => !z.has(M.subId)
        );
        _.length > 0 && k.push({
          ...S,
          subItems: _
        });
      }
    } else
      k = (y ?? []).filter((I) => I.id !== v.id);
    e.onSelect(k);
  }
  function p(v, k) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const y = e.selectedEntities ?? [], I = k.subId, z = [];
    for (const S of y) {
      const _ = S.subItems?.filter((M) => M.subId !== I) ?? [];
      _.length > 0 && z.push({
        ...S,
        subItems: _
      });
    }
    e.onSelect(z);
  }
  function x() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const v = e.selectedEntities ?? [];
    let k = [];
    if (u) {
      const y = new Set(
        s.flatMap(
          (I) => (I.subItems ?? []).map((z) => z.subId)
        )
      );
      for (const I of v) {
        const z = (I.subItems ?? []).filter(
          (S) => !y.has(S.subId)
        );
        z.length > 0 && k.push({
          ...I,
          subItems: z
        });
      }
    } else {
      const y = new Set(
        s.map((I) => I.id)
      );
      k = (v ?? []).filter((I) => !y.has(I.id));
    }
    e.onSelect(k);
  }
  function w() {
    const v = [...e.selectedEntities ?? []];
    s.forEach((k) => {
      const y = v.find((I) => I.id === k.id);
      if (!y)
        v.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const I = Array.from(
          /* @__PURE__ */ new Set([
            ...y.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        y.subItems = I;
      }
    }), e.singleSelector || e.onSelect(v);
  }
  const C = (v) => {
    c(v), f(v);
  }, T = (v, k) => {
    e.onItemExpandedChange(v.id, k), l(
      s.map(
        (y) => y.id === v.id ? { ...y, expanded: !v.expanded } : y
      )
    );
  };
  G(() => {
    if (!d) {
      l(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const k = e.entities.map((y) => {
        const I = li(y, d), z = y.subItems?.map((S) => ({
          ...S,
          score: He(
            d,
            S.subSearchKeys ?? [S.subName]
          )
        })).filter((S) => S.score < 1 / 0).sort((S, _) => S.score - _.score);
        return {
          ...y,
          score: I,
          expanded: y.expanded ?? (z?.length ?? 0) > 0,
          subItems: z
        };
      }).filter((y) => y.score < 1 / 0).sort((y, I) => y.score - I.score);
      l(k);
    } else {
      const v = e.entities.map((k) => {
        const y = He(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: y };
      }).filter((k) => k.score < 1 / 0).sort((k, y) => k.score - y.score);
      l(v);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    l
  ]);
  const O = V(null), [P, A] = L(0);
  return Gn(() => {
    const v = () => {
      O.current && A(O.current.offsetWidth);
    };
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: O,
      className: g(
        "scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        cn,
        {
          groupView: u,
          entities: s,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: m,
          onRemove: b,
          onSubItemRemove: p,
          onSubItemSelect: h,
          onClear: x,
          onSelectAll: w,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: C,
          onToggleExpand: T,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? P - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(qr, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      Yr,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          si,
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
      Zr,
      {
        className: g(
          "scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          cn,
          {
            groupView: u,
            entities: s,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: m,
            onRemove: b,
            onSubItemRemove: p,
            onSubItemSelect: h,
            onClear: x,
            onSelectAll: w,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: C,
            onToggleExpand: T,
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
function gt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function dn(e) {
  return gt(e).split(/\s+/).filter((n) => n.length > 0);
}
function He(e = "", n) {
  const a = dn(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const s = gt(r), l = dn(r), i = gt(e);
    if (s.includes(i) || a.every(
      (d) => l.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function li(e, n) {
  const a = He(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((s, l) => {
    const i = He(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(s, i);
  }, 1 / 0)), Math.min(a, r);
}
var it = "rovingFocusGroup.onEntryFocus", ii = { bubbles: !1, cancelable: !0 }, tt = "RovingFocusGroup", [bt, la, oi] = Jr(tt), [ci, ia] = Tn(
  tt,
  [oi]
), [di, ui] = ci(tt), oa = ee.forwardRef(
  (e, n) => /* @__PURE__ */ t(bt.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ t(bt.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ t(fi, { ...e, ref: n }) }) })
);
oa.displayName = tt;
var fi = ee.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: a,
    orientation: r,
    loop: s = !1,
    dir: l,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: d,
    onEntryFocus: f,
    preventScrollOnEntryFocus: u = !1,
    ...m
  } = e, h = ee.useRef(null), b = Qr(n, h), p = An(l), [x = null, w] = kt({
    prop: i,
    defaultProp: c,
    onChange: d
  }), [C, T] = ee.useState(!1), O = es(f), P = la(a), A = ee.useRef(!1), [v, k] = ee.useState(0);
  return ee.useEffect(() => {
    const y = h.current;
    if (y)
      return y.addEventListener(it, O), () => y.removeEventListener(it, O);
  }, [O]), /* @__PURE__ */ t(
    di,
    {
      scope: a,
      orientation: r,
      dir: p,
      loop: s,
      currentTabStopId: x,
      onItemFocus: ee.useCallback(
        (y) => w(y),
        [w]
      ),
      onItemShiftTab: ee.useCallback(() => T(!0), []),
      onFocusableItemAdd: ee.useCallback(
        () => k((y) => y + 1),
        []
      ),
      onFocusableItemRemove: ee.useCallback(
        () => k((y) => y - 1),
        []
      ),
      children: /* @__PURE__ */ t(
        Ve.div,
        {
          tabIndex: C || v === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: Ce(e.onMouseDown, () => {
            A.current = !0;
          }),
          onFocus: Ce(e.onFocus, (y) => {
            const I = !A.current;
            if (y.target === y.currentTarget && I && !C) {
              const z = new CustomEvent(it, ii);
              if (y.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const S = P().filter((W) => W.focusable), _ = S.find((W) => W.active), M = S.find((W) => W.id === x), D = [_, M, ...S].filter(
                  Boolean
                ).map((W) => W.ref.current);
                ua(D, u);
              }
            }
            A.current = !1;
          }),
          onBlur: Ce(e.onBlur, () => T(!1))
        }
      )
    }
  );
}), ca = "RovingFocusGroupItem", da = ee.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: a,
      focusable: r = !0,
      active: s = !1,
      tabStopId: l,
      ...i
    } = e, c = Xr(), d = l || c, f = ui(ca, a), u = f.currentTabStopId === d, m = la(a), { onFocusableItemAdd: h, onFocusableItemRemove: b } = f;
    return ee.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ t(
      bt.ItemSlot,
      {
        scope: a,
        id: d,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ t(
          Ve.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: n,
            onMouseDown: Ce(e.onMouseDown, (p) => {
              r ? f.onItemFocus(d) : p.preventDefault();
            }),
            onFocus: Ce(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: Ce(e.onKeyDown, (p) => {
              if (p.key === "Tab" && p.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (p.target !== p.currentTarget) return;
              const x = pi(p, f.orientation, f.dir);
              if (x !== void 0) {
                if (p.metaKey || p.ctrlKey || p.altKey || p.shiftKey) return;
                p.preventDefault();
                let C = m().filter((T) => T.focusable).map((T) => T.ref.current);
                if (x === "last") C.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && C.reverse();
                  const T = C.indexOf(p.currentTarget);
                  C = f.loop ? gi(C, T + 1) : C.slice(T + 1);
                }
                setTimeout(() => ua(C));
              }
            })
          }
        )
      }
    );
  }
);
da.displayName = ca;
var mi = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hi(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pi(e, n, a) {
  const r = hi(e.key, a);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return mi[r];
}
function ua(e, n = !1) {
  const a = document.activeElement;
  for (const r of e)
    if (r === a || (r.focus({ preventScroll: n }), document.activeElement !== a)) return;
}
function gi(e, n) {
  return e.map((a, r) => e[(n + r) % e.length]);
}
var bi = oa, xi = da, _e = "ToggleGroup", [fa] = Tn(_e, [
  ia
]), ma = ia(), zt = K.forwardRef((e, n) => {
  const { type: a, ...r } = e;
  if (a === "single")
    return /* @__PURE__ */ t(vi, { ...r, ref: n });
  if (a === "multiple")
    return /* @__PURE__ */ t(yi, { ...r, ref: n });
  throw new Error(`Missing prop \`type\` expected on \`${_e}\``);
});
zt.displayName = _e;
var [ha, pa] = fa(_e), vi = K.forwardRef((e, n) => {
  const {
    value: a,
    defaultValue: r,
    onValueChange: s = () => {
    },
    ...l
  } = e, [i, c] = kt({
    prop: a,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ t(
    ha,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: c,
      onItemDeactivate: K.useCallback(() => c(""), [c]),
      children: /* @__PURE__ */ t(ga, { ...l, ref: n })
    }
  );
}), yi = K.forwardRef((e, n) => {
  const {
    value: a,
    defaultValue: r,
    onValueChange: s = () => {
    },
    ...l
  } = e, [i = [], c] = kt({
    prop: a,
    defaultProp: r,
    onChange: s
  }), d = K.useCallback(
    (u) => c((m = []) => [...m, u]),
    [c]
  ), f = K.useCallback(
    (u) => c((m = []) => m.filter((h) => h !== u)),
    [c]
  );
  return /* @__PURE__ */ t(
    ha,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: d,
      onItemDeactivate: f,
      children: /* @__PURE__ */ t(ga, { ...l, ref: n })
    }
  );
});
zt.displayName = _e;
var [wi, Ni] = fa(_e), ga = K.forwardRef(
  (e, n) => {
    const {
      __scopeToggleGroup: a,
      disabled: r = !1,
      rovingFocus: s = !0,
      orientation: l,
      dir: i,
      loop: c = !0,
      ...d
    } = e, f = ma(a), u = An(i), m = { role: "group", dir: u, ...d };
    return /* @__PURE__ */ t(wi, { scope: a, rovingFocus: s, disabled: r, children: s ? /* @__PURE__ */ t(
      bi,
      {
        asChild: !0,
        ...f,
        orientation: l,
        dir: u,
        loop: c,
        children: /* @__PURE__ */ t(Ve.div, { ...m, ref: n })
      }
    ) : /* @__PURE__ */ t(Ve.div, { ...m, ref: n }) });
  }
), Ke = "ToggleGroupItem", ba = K.forwardRef(
  (e, n) => {
    const a = pa(Ke, e.__scopeToggleGroup), r = Ni(Ke, e.__scopeToggleGroup), s = ma(e.__scopeToggleGroup), l = a.value.includes(e.value), i = r.disabled || e.disabled, c = { ...e, pressed: l, disabled: i }, d = K.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ t(
      xi,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: l,
        ref: d,
        children: /* @__PURE__ */ t(un, { ...c, ref: n })
      }
    ) : /* @__PURE__ */ t(un, { ...c, ref: n });
  }
);
ba.displayName = Ke;
var un = K.forwardRef(
  (e, n) => {
    const { __scopeToggleGroup: a, value: r, ...s } = e, l = pa(Ke, a), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, c = l.type === "single" ? i : void 0;
    return /* @__PURE__ */ t(
      ts,
      {
        ...c,
        ...s,
        ref: n,
        onPressedChange: (d) => {
          d ? l.onItemActivate(r) : l.onItemDeactivate(r);
        }
      }
    );
  }
), xa = zt, va = ba;
const ya = be({
  base: g(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    se()
  ),
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), Ci = ee.forwardRef(({ className: e, variant: n, size: a, ...r }, s) => /* @__PURE__ */ t(
  _n,
  {
    ref: s,
    className: g(ya({ variant: n, size: a, className: e })),
    ...r
  }
));
Ci.displayName = _n.displayName;
const wa = ee.createContext({
  size: "default",
  variant: "default"
}), Na = ee.forwardRef(({ className: e, variant: n, size: a, children: r, ...s }, l) => /* @__PURE__ */ t(
  xa,
  {
    ref: l,
    className: g("flex items-center justify-center gap-1.5", e),
    ...s,
    children: /* @__PURE__ */ t(wa.Provider, { value: { variant: n, size: a }, children: r })
  }
));
Na.displayName = xa.displayName;
const Ca = ee.forwardRef(({ className: e, children: n, variant: a, size: r, ...s }, l) => {
  const i = ee.useContext(wa);
  return /* @__PURE__ */ t(
    va,
    {
      ref: l,
      className: g(
        ya({
          variant: i.variant || a,
          size: i.size || r
        }),
        e
      ),
      ...s,
      children: n
    }
  );
});
Ca.displayName = va.displayName;
const Ii = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: s,
  category: l,
  isUnread: i = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = ut({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = Kn(n, {
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
        /* @__PURE__ */ t(ft, { icon: s ?? Ln }),
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
        /* @__PURE__ */ t("div", { className: "ml-1", children: i && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, ki = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(E, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(E, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(E, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(E, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(E, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), $t = $(
  "ActivityItem",
  ne(Ii, ki)
), Ia = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), Si = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Ia, { title: e, children: n.map((s) => /* @__PURE__ */ t(
  $t,
  {
    ...s,
    onClick: () => a(s.id),
    onVisible: r
  },
  s.id
)) }), Fi = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Ia, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t($t.Skeleton, {}, r)) }), We = ne(Si, Fi), Ti = 3, Ai = ["today", "yesterday", "lastWeek", "lastMonth"], _i = (e) => nl(e, ([n]) => {
  const a = Ai.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), xt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Li = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: s = 5
}) => {
  const l = oe(), i = el(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-s), d = tl((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = _i(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(K.Fragment, { children: [
      /* @__PURE__ */ t(
        We,
        {
          title: u in l.date.groups ? l.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(xt, {})
    ] }, u)),
    n && new Array(Ti).fill(null).map((u, m) => /* @__PURE__ */ t($t.Skeleton, {}, m))
  ] });
}, Ei = () => {
  const e = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(We.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(xt, {}),
    /* @__PURE__ */ t(
      We.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(xt, {}),
    /* @__PURE__ */ t(
      We.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Td = $(
  "ActivityItemList",
  ne(Li, Ei)
), Di = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Ri = {
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
function Pi({
  firstName: e,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: s,
  onReactionSelect: l,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Ri[ns(
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
                ge,
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
              ref: i,
              className: g(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                qn,
                {
                  lastEmojiReaction: s,
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
function Oi(e) {
  const n = V(null), a = V(), r = te(() => {
    const l = n.current;
    if (!l) return;
    const i = as.create(l, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    a.current = setInterval(() => {
      i({
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
  }, [e]), s = te(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: s };
}
const zi = ({
  link: e,
  firstName: n,
  lastName: a,
  src: r,
  onClick: s,
  canReact: l = !0,
  lastEmojiReaction: i,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = L(i), b = V(null);
  G(() => {
    h(i);
  }, [i]);
  const p = (P) => {
    h(P), c?.(P);
  }, x = Je(), { canvasRef: w, handleMouseEnter: C, handleMouseLeave: T } = Oi(x), O = St({
    emoji: Di[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    fe,
    {
      href: e,
      onClick: s,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow",
        se()
      ),
      onMouseEnter: x ? void 0 : C,
      onMouseLeave: x ? void 0 : T,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Pi,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: l,
            lastEmojiReaction: m,
            onReactionSelect: p,
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
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: O })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(ht, { date: u }) })
        ] })
      ]
    }
  );
}, $i = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(E, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(E, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(E, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Ad = ne(zi, $i), _d = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(En, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(j, { label: a, variant: "outline", onClick: r }) })
] });
function Bi({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: s
}) {
  const [l, i] = L(a), [c, d] = L(n), f = V(null), { fireEmojiConfetti: u } = rs(), m = (p, x) => {
    p.stopPropagation(), d(c + (l ? -1 : 1)), i(!l), s?.(x), l || u(x, f);
  }, h = r?.map((p) => p.name).join(", ") || "", b = /* @__PURE__ */ t(
    Dn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (p) => {
        m(p, e);
      },
      className: g(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        l && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ss(e),
      prepend: /* @__PURE__ */ t(St, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ls,
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
  return h ? /* @__PURE__ */ t(ve, { label: h, children: b }) : b;
}
function Mi({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      j,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(qn, { onSelect: n, locale: a }),
    e.map((s) => /* @__PURE__ */ t(
      Bi,
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
const Wi = $("Reactions", Mi), ji = ({
  content: e,
  collapsed: n
}) => /* @__PURE__ */ t(
  al,
  {
    content: e,
    className: g(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), Gi = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(E, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(E, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), ka = ne(
  ji,
  Gi
), fn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Se,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ t(
        ve,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), vt = R(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: s,
    color: l,
    isPending: i,
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
          !m && /* @__PURE__ */ o(H, { children: [
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
              style: i ? {
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
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(H, { children: [
                  /* @__PURE__ */ t(ht, { date: f }),
                  /* @__PURE__ */ t(
                    B,
                    {
                      icon: Nt,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(ht, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(fn, { tags: c }),
              d && /* @__PURE__ */ t(fn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Vi = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Sa = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Vi.has(a);
}, Ui = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let s = rl(r);
  const l = (i) => {
    i.stopPropagation();
  };
  return a && (s = `${s} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Sa(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(H, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(E, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      vt,
      {
        title: e,
        description: s,
        color: is.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Hi = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(E, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(E, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(E, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(E, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Fa = ne(Ui, Hi), Ki = ({
  id: e,
  author: n,
  group: a,
  createdAt: r,
  title: s,
  description: l,
  onClick: i,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: b,
  dropdownItems: p,
  noReactionsButton: x = !1
}) => {
  const w = [f.views, f.comments].filter(Boolean).join(" · "), C = !0, T = Kn(r), O = () => {
    i(e);
  }, P = (v) => {
    v.stopPropagation();
  }, A = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: O,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          $e,
          {
            href: n.url || "#",
            title: A,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              ge,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(ft, { icon: jt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(H, { children: [
                  /* @__PURE__ */ t(
                    $e,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: A,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        ge,
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
                    $e,
                    {
                      href: n.url,
                      title: A,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: A
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ft, { icon: jt, size: "sm" }) }),
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
                  $e,
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
                  b?.map((v) => /* @__PURE__ */ t(
                    j,
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
                  p?.length && /* @__PURE__ */ t(
                    ke,
                    {
                      items: p,
                      icon: mt,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  ke,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...p ?? []
                    ],
                    icon: mt,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: T }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: s
                }
              ),
              l && /* @__PURE__ */ t(ka, { content: l, collapsed: C })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Sa(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: P,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(E, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Fa, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: w }),
          !x && /* @__PURE__ */ t(
            Wi,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: os
              }
            }
          )
        ] })
      ]
    }
  );
}, qi = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(E, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(E, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(E, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(E, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(E, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(ka.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(E, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Fa.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(E, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(E, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Ld = ne(
  Ki,
  qi
), Yi = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Zi = R(
  function({ daysOfTheWeek: n = Yi, activatedDays: a = [] }, r) {
    const s = a.map(
      (l) => `${l}-${n[l]}`
    );
    return /* @__PURE__ */ t(
      Na,
      {
        type: "multiple",
        value: s,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: n.map((l, i) => /* @__PURE__ */ t(
          Ca,
          {
            "aria-label": l,
            value: `${i}-${l}`,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: l[0]
          },
          i
        ))
      }
    );
  }
), Ji = 750, Xi = ({ text: e, children: n }) => {
  const [a, r] = L(!1);
  G(() => {
    if (a) {
      const l = setTimeout(() => r(!1), Ji);
      return () => clearTimeout(l);
    }
  }, [a]);
  const s = async () => {
    try {
      await navigator.clipboard.writeText(e), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      "aria-label": a ? "Copied!" : `Copy ${e}`,
      className: g(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        a ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: s,
      children: [
        n,
        /* @__PURE__ */ t("div", { className: "relative h-5 w-5", children: /* @__PURE__ */ o(Fe, { mode: "wait", children: [
          !a && /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ t(
                B,
                {
                  icon: cs,
                  size: "md",
                  "aria-hidden": !0,
                  color: "default",
                  className: g(
                    "opacity-0 transition-opacity duration-300",
                    !a && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "copy-icon"
          ),
          a && /* @__PURE__ */ t(
            Y.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ t(
                B,
                {
                  icon: It,
                  size: "md",
                  "aria-hidden": !0,
                  color: "positive",
                  className: g(
                    "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                    a && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "check-icon"
          )
        ] }) })
      ]
    }
  );
}, Ta = Vn(
  ({ children: e, className: n, ...a }) => /* @__PURE__ */ o(
    fe,
    {
      ...a,
      className: g(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        n
      ),
      children: [
        e,
        /* @__PURE__ */ t("div", { className: "grid", children: /* @__PURE__ */ t(B, { "aria-hidden": !0, icon: Nt, size: "md" }) })
      ]
    }
  )
);
Ta.displayName = "NavigateAction";
const Aa = Vn(
  ({ children: e, className: n, href: a, ...r }) => /* @__PURE__ */ o(
    fe,
    {
      ...r,
      target: "_blank",
      href: a,
      rel: "noopener noreferrer",
      className: g(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        n
      ),
      children: [
        e,
        /* @__PURE__ */ t("div", { className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100", children: /* @__PURE__ */ t(
          B,
          {
            "aria-hidden": !0,
            icon: ds,
            size: "md",
            color: "default"
          }
        ) })
      ]
    }
  )
);
Aa.displayName = "OpenLinkAction";
const Pe = R(
  (e, n) => {
    const {
      text: a,
      leftIcon: r,
      className: s,
      action: l = { type: "noop" }
    } = e;
    return /* @__PURE__ */ t(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: n,
        children: /* @__PURE__ */ o(
          Qi,
          {
            action: l,
            className: g("flex items-center gap-1.5 p-1.5", s),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ t(B, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ t("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: a })
            ]
          }
        )
      }
    );
  }
);
Pe.displayName = "ItemContainer";
const Qi = ({
  children: e,
  action: n,
  ...a
}) => {
  const r = n.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ t(Xi, { ...n, ...a, children: e });
    case "navigate":
      return /* @__PURE__ */ t(Ta, { ...n, ...a, children: e });
    case "open-link":
      return /* @__PURE__ */ t(Aa, { ...n, ...a, children: e });
    case "noop":
      return /* @__PURE__ */ t("div", { ...a, children: e });
    default:
      return r;
  }
}, nt = (e, n) => e && e.type === "copy" ? { type: "copy", text: e.text ?? n } : e, _a = R(
  ({ text: e, icon: n, action: a }, r) => /* @__PURE__ */ t(
    Pe,
    {
      ref: r,
      text: e,
      leftIcon: n,
      action: nt(a, e)
    }
  )
);
_a.displayName = "DataList.Item";
const eo = $("DataList.Item", _a), La = R(
  ({ action: e, avatarUrl: n, firstName: a, lastName: r }, s) => {
    const l = `${a} ${r}`;
    return /* @__PURE__ */ t(
      Pe,
      {
        ref: s,
        leftIcon: () => /* @__PURE__ */ t(
          ge,
          {
            size: "xs",
            src: n,
            firstName: a,
            lastName: r
          }
        ),
        text: l,
        action: nt(e, l)
      }
    );
  }
);
La.displayName = "PersonItem";
const to = $("PersonItem", La), Ea = R(
  ({ avatarUrl: e, name: n, action: a }, r) => /* @__PURE__ */ t(
    Pe,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ t(Rn, { name: n, size: "xs", src: e }),
      text: n,
      action: nt(a, n)
    }
  )
);
Ea.displayName = "CompanyItem";
const no = $("CompanyItem", Ea), Da = R(
  ({ action: e, name: n }, a) => /* @__PURE__ */ t(
    Pe,
    {
      ref: a,
      leftIcon: () => /* @__PURE__ */ t(us, { name: n, size: "xs" }),
      text: n,
      action: nt(e, n)
    }
  )
);
Da.displayName = "TeamItem";
const ao = $("TeamItem", Da), Ra = R(
  ({ ...e }, n) => /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(Pn, { ...e }) })
);
Ra.displayName = "DotTagItem";
const ro = $("DotTagItem", Ra), Pa = R(
  ({ ...e }, n) => /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(Ft, { ...e }) })
);
Pa.displayName = "AlertTagItem";
const so = $("AlertTagItem", Pa), Oa = R(
  ({ ...e }, n) => /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(fs, { ...e }) })
);
Oa.displayName = "BalanceTagItem";
const lo = $(
  "BalanceTagItem",
  Oa
), za = R(
  ({ ...e }, n) => /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(De, { ...e }) })
);
za.displayName = "StatusTagItem";
const io = $(
  "StatusTagItem",
  za
), $a = R(
  ({ ...e }, n) => /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(Se, { ...e }) })
);
$a.displayName = "RawTagItem";
const oo = $("RawTagItem", $a);
function co(e, n) {
  return /* @__PURE__ */ t("li", { ref: n, className: "flex items-start pt-1", children: /* @__PURE__ */ t(ms, { ...e }) });
}
const Ba = R(co);
Ba.displayName = "TagListItem";
const uo = $("TagListItem", Ba), Ma = R(
  ({ children: e, label: n, isHorizontal: a = !1 }, r) => /* @__PURE__ */ o(
    "div",
    {
      className: g(
        a ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"
      ),
      children: [
        n && /* @__PURE__ */ t(
          "p",
          {
            className: g(
              "px-1.5 text-f1-foreground-secondary",
              a ? "mt-2 w-44 xs:px-0" : "mb-0.5"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ t("ul", { className: "flex flex-col justify-center gap-0.5", ref: r, children: e })
      ]
    }
  )
);
Ma.displayName = "DataList";
const fo = $("DataList", Ma), de = Object.assign(fo, {
  Item: eo,
  CompanyItem: no,
  PersonItem: to,
  TeamItem: ao,
  DotTagItem: ro,
  AlertTagItem: so,
  BalanceTagItem: lo,
  StatusTagItem: io,
  RawTagItem: oo,
  TagListItem: uo
}), mo = ({ content: e }) => /* @__PURE__ */ o(H, { children: [
  e.type === "weekdays" && /* @__PURE__ */ t("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ t(Zi, { ...e }) }),
  e.type === "person" && /* @__PURE__ */ t(de.PersonItem, { ...e }),
  e.type === "item" && /* @__PURE__ */ t(de.Item, { ...e }),
  e.type === "team" && /* @__PURE__ */ t(de.TeamItem, { ...e }),
  e.type === "company" && /* @__PURE__ */ t(de.CompanyItem, { ...e }),
  e.type === "dot-tag" && /* @__PURE__ */ t(de.DotTagItem, { ...e }),
  e.type === "alert-tag" && /* @__PURE__ */ t(de.AlertTagItem, { ...e }),
  e.type === "balance-tag" && /* @__PURE__ */ t(de.BalanceTagItem, { ...e }),
  e.type === "status-tag" && /* @__PURE__ */ t(de.StatusTagItem, { ...e }),
  e.type === "raw-tag" && /* @__PURE__ */ t(de.RawTagItem, { ...e }),
  e.type === "tag-list" && /* @__PURE__ */ t(de.TagListItem, { ...e.tagList }),
  e.type === "avatar-list" && /* @__PURE__ */ t("li", { className: "w-fit list-none px-1.5 py-1", children: /* @__PURE__ */ t(Tt, { ...e.avatarList }) })
] }), ho = R(
  function({ title: n, content: a, isHorizontal: r = !1, spacingAtTheBottom: s }, l) {
    const i = Array.isArray(a) ? a : [a];
    return /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        className: g(
          "flex flex-col gap-0.5",
          s && !r && "pb-3",
          r && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"
        ),
        children: /* @__PURE__ */ t(de, { label: n, isHorizontal: r, children: i.map((c, d) => /* @__PURE__ */ t(mo, { content: c }, d)) })
      }
    );
  }
), po = re(
  $("DetailsItem", ho)
), go = R(
  function({ title: n, tableView: a = !1, details: r, dataTestId: s }, l) {
    return /* @__PURE__ */ t(hs, { dataTestId: s, children: /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-4", children: [
      !!n && /* @__PURE__ */ t("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: n.toLocaleUpperCase() }),
      /* @__PURE__ */ t(
        "div",
        {
          className: g(
            "flex flex-col",
            a ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"
          ),
          children: r?.map((i, c) => /* @__PURE__ */ o(K.Fragment, { children: [
            /* @__PURE__ */ t(
              po,
              {
                title: i.title,
                content: i.content,
                spacingAtTheBottom: i.spacingAtTheBottom,
                isHorizontal: a
              },
              i.title
            ),
            a && c !== r.length - 1 && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
          ] }, i.title))
        }
      )
    ] }) });
  }
), Ed = $(
  "DetailsItemsList",
  go
), Wa = K.forwardRef(({ person: e, onClick: n, ...a }, r) => {
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
          ge,
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
            a.info && /* @__PURE__ */ t(ve, { label: a.info, children: /* @__PURE__ */ t(
              B,
              {
                icon: Sn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((l, i) => /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ t(Se, { ...l }, l.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(Pn, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              j,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              j,
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
}), bo = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(E, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(E, { className: "h-4" }),
    /* @__PURE__ */ t(E, { className: "h-4" })
  ] })
] });
Wa.displayName = "OnePersonListItem";
const Dd = re(
  $(
    "OnePersonListItem",
    ne(Wa, bo)
  )
), xo = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function vo({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  return /* @__PURE__ */ t(wl, { children: /* @__PURE__ */ t(
    yo,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function yo({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: s
}) {
  const l = r?.enabled ? ps : s?.enabled ? Gl : Zs, i = r?.enabled ? r : s?.enabled ? s : void 0;
  return /* @__PURE__ */ t(l, { ...i, children: /* @__PURE__ */ t(
    Io,
    {
      ai: r,
      aiPromotion: s,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const Rd = $(
  "ApplicationFrame",
  vo
), wo = ({ contentId: e }) => {
  const n = oe();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: se(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function No(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Co(e, n) {
  const { sidebarState: a, toggleSidebar: r } = Ae(), s = V(e);
  G(() => {
    n && No(
      e,
      s.current,
      a
    ) && r({ isInvokedByUser: !1 }), s.current = e;
  }, [e, n, a, r]);
}
function Io({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: s
}) {
  const { sidebarState: l, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ae(), f = Je(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: b,
    resizable: p
  } = gs(), x = m === "fullscreen", w = m === "canvas", { open: C } = Xe(), T = p ? b : xs, O = V(x), P = x && !O.current, A = !x && O.current, [
    v,
    k
  ] = L(!1);
  G(() => {
    !x && O.current && k(!0), O.current = x;
  }, [x]);
  const y = x || v || A, I = Z(() => P ? { duration: 0.15, ease: "easeOut" } : A ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [P, A]), z = dt(
    `(max-width: ${je.xl}px)`,
    { initializeWithValue: !0 }
  ), S = dt(`(max-width: ${je.md}px)`, {
    initializeWithValue: !0
  });
  return G(() => {
    d(u);
  }, [u, d]), G(() => {
    d(C);
  }, [C, d]), Co(u, z), /* @__PURE__ */ t(
    bs,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: s }),
        /* @__PURE__ */ t(On, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Fe, { children: l === "unlocked" && /* @__PURE__ */ t(
            Y.nav,
            {
              className: g(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !c && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: f ? 0 : 0.2 },
              onClick: () => i()
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
              ref: (_) => {
                l === "hidden" ? _?.setAttribute("inert", "") : _?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(wo, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Y.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !S ? T : 0
              },
              transition: { paddingRight: xo },
              children: [
                /* @__PURE__ */ t(
                  Y.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      y ? "overflow-hidden" : "overflow-auto",
                      !u && !C && "xs:pr-1",
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ t(
                      Y.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          y ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                e?.enabled && w && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: g(
                      "pointer-events-none",
                      S ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[15]"
                    ),
                    style: S ? void 0 : { right: T },
                    children: /* @__PURE__ */ t(vs, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  Y.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      S ? "fixed inset-0 z-[30]" : g(
                        "absolute right-0 top-0 bottom-0",
                        y ? "z-20" : "z-0",
                        l === "hidden" && y ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: S || x ? "100%" : T
                    },
                    transition: I,
                    onAnimationComplete: () => {
                      v && k(!1);
                    },
                    children: /* @__PURE__ */ t(ys, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(jl, {})
        ] }) })
      ] })
    }
  );
}
const ko = be({
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
function ja({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: s, toggleSidebar: l, isSmallScreen: i } = Ae();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: ko({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || s === "hidden") && /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: Nn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center",
                  i ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    sl,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    ge,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: i ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: g(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: g(
                          i ? "text-md" : "text-lg",
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
            /* @__PURE__ */ t(Cn, {}),
            /* @__PURE__ */ t(ea, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              i && "-mt-3"
            ),
            children: e
          }
        )
      ]
    }
  );
}
ja.displayName = "DaytimePage";
const Pd = re(
  $("DaytimePage", ja)
);
function So(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: s, target: l }) => ({
    label: n,
    description: a,
    href: r,
    onClick: s ? () => s(void 0) : void 0
  }));
}
function Fo({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(ke, { items: So(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            se()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(B, { icon: zn, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Od = re(
  $("OmniButton", Fo)
);
function Ga({ children: e, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
Ga.displayName = "Page";
const zd = re($("Page", Ga));
function To({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: s = !1,
  additionalOptions: l = []
}) {
  const i = Z(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(E, { className: "size-6" }),
    /* @__PURE__ */ t(E, { className: "h-3 w-14" })
  ] }) : e.length + (l?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    mn,
    {
      company: i,
      withNotification: s
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Ao,
    {
      companies: e,
      selected: i,
      onChange: a,
      additionalOptions: l,
      children: /* @__PURE__ */ t(
        mn,
        {
          company: i,
          withNotification: s
        }
      )
    }
  ) });
}
const Ao = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: s = []
}) => {
  const l = oe(), [i, c] = L(!1), d = Z(
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
    Ge,
    {
      label: l.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: l.navigation.sidebar.companySelector.placeholder,
      open: i,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            se()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              Y.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(B, { icon: Ct, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, mn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        Rn,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: $n, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(pe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function $d({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: s,
  onDropdownClick: l,
  hasActivityUpdates: i
}) {
  const c = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(ke, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          se("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ t(
            ge,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(pe, { children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ t(ve, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        j,
        {
          icon: Ln,
          label: c.notifications,
          onClick: s,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(ws, { type: "highlight", size: "sm", icon: $n }) })
    ] }) })
  ] });
}
function _o({ isExpanded: e }) {
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
function Lo() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Ae(), s = V(null);
  return G(() => {
    e === "hidden" && n === "locked" && s.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Dn,
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ t(_o, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ t(B, { icon: Te, size: "md" }) })
      ]
    }
  );
}
function Bd({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: s,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      To,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: l,
        withNotification: r,
        additionalOptions: s
      }
    ),
    /* @__PURE__ */ t(Lo, {})
  ] });
}
function Eo() {
  const [e, n] = L(!1);
  return G(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Va = Rt(void 0);
function Do({ children: e }) {
  const [n, a] = L(!1), [r, s] = L(null);
  return /* @__PURE__ */ t(
    Va.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function Bt() {
  const e = Dt(Va);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const Ro = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      B,
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
  e.badge && /* @__PURE__ */ t(Ze, { value: e.badge, size: "sm", type: "bold" })
] }), Po = ({ item: e }) => {
  const { isActive: n } = wt(), { label: a, icon: r, ...s } = e, l = n(s.href, { exact: s.exactMatch });
  return /* @__PURE__ */ t(
    fe,
    {
      ...s,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        se("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(Ro, { item: e, active: l })
    }
  );
}, Oo = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: s,
  total: l,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = oe(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: b } = Bt(), { isActive: p } = wt(), x = p(e.href, { exact: e.exactMatch }), w = V(!1), [C, T] = L(!1), O = s === 0, P = s === l - 1, A = l === 1, v = Z(() => {
    const _ = [];
    return !A && !O && _.push({
      label: f.actions.moveUp,
      onClick: () => i?.(s, s - 1),
      icon: Ns
    }), !A && !P && _.push({
      label: f.actions.moveDown,
      onClick: () => i?.(s, s + 1),
      icon: Cs
    }), _.length > 0 && _.push({ type: "separator" }), _.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: Is,
      critical: !0
    }), _;
  }, [A, O, P, f, i, s, r, e]), k = () => {
    m(!0), T(!1), b(e.href || null), w.current = !0;
  }, y = () => {
    m(!1), b(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, I = u && h === e.href, z = Z(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      C && "bg-f1-background-secondary",
      I && "bg-f1-background-secondary"
    ),
    [x, C, I, d]
  ), S = Z(() => /* @__PURE__ */ o(H, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t($o, { tooltip: n, children: /* @__PURE__ */ o(
      fe,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: g(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          I && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            B,
            {
              icon: e.icon,
              size: "md",
              className: g(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(ks, { size: "xs", avatar: e.avatar }) : null,
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
        className: g(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          C && "bg-f1-background-secondary opacity-100",
          I && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          ke,
          {
            open: C,
            onOpenChange: T,
            items: v,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(B, { icon: mt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, C, I, v, n]);
  return d ? /* @__PURE__ */ t(
    Bn,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: k,
      onDragEnd: y,
      className: z,
      whileDrag: {
        scale: 1.05
      },
      children: S
    }
  ) : /* @__PURE__ */ t("div", { className: z, children: S });
}, Ua = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: s,
  isDragging: l,
  wasDragging: i
}) => {
  const [c, d] = L(n), f = Je(), u = () => {
    if (l || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Fs, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          se("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: u,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u();
        },
        children: [
          e,
          /* @__PURE__ */ t(
            Y.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                B,
                {
                  icon: Ct,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(Ts, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: s })
      }
    ) })
  ] }) });
}, ot = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: s,
  currentOrder: l
}) => {
  const { isDragging: i, setIsDragging: c } = Bt(), d = V(!1), f = Ss(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, l && s?.(l);
    }, 0);
  }, h = (p) => {
    !i && !d.current && r?.(e, p);
  }, b = /* @__PURE__ */ t(
    Ua,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: h,
      isDragging: i,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: e.items.map((p, x) => /* @__PURE__ */ t(Po, { item: p }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Bn,
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
      children: b
    }
  ) : b;
};
function Md({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: s
}) {
  const l = V(null), i = e.filter(
    (p) => p.isSortable === !1
  ), [c, d] = L(
    e.filter((p) => p.isSortable !== !1)
  ), [f, u] = L(0), m = te((p) => {
    d(p);
  }, []), h = te(
    (p) => {
      a?.(p);
    },
    [a]
  ), b = Eo();
  return /* @__PURE__ */ t(Do, { children: /* @__PURE__ */ t(On, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    zo,
    {
      disableDragging: b,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: h,
      favorites: s,
      onFavoritesChange: r,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function zo({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: s,
  onDragEnd: l,
  favorites: i = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = oe(), { isDragging: m } = Bt(), h = e.some((N) => N.isRoot), b = e.filter((N) => !N.isRoot).length > 0, p = n.length > 0, x = V(null), [w, C] = L(i), T = i.length > 0;
  G(() => {
    JSON.stringify(i) !== JSON.stringify(w) && C(i);
  }, [i]);
  const O = (N) => {
    C(N);
  }, P = te(
    (N) => {
      const D = w.filter((W) => W.href !== N.href);
      C(D), c?.(D);
    },
    [w, c]
  ), A = te(
    (N, D) => {
      if (D < 0 || D >= w.length) return;
      const W = [...w], [q] = W.splice(N, 1);
      W.splice(D, 0, q), C(W), c?.(W);
    },
    [w, c]
  ), [v, k] = L(!1), y = V(null);
  G(() => {
    n.length > 0 && !v && (a([...n]), k(!0));
  }, [n, a, v]), G(() => {
    const N = () => {
      y.current !== null && window.clearTimeout(y.current), y.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N), y.current !== null && window.clearTimeout(y.current);
    };
  }, [r, n, d]);
  const I = "flex flex-col gap-0.5", z = Z(
    () => w.reduce(
      (N, D, W) => (D.label in N || (N[D.label] = []), N[D.label].push(W), N),
      {}
    ),
    [w]
  ), S = Z(
    () => T && w.map((N, D) => /* @__PURE__ */ t(
      Oo,
      {
        isSortable: !f,
        tooltip: (z[N.label] ?? []).length > 1 ? N.tooltip : void 0,
        item: N,
        dragConstraints: x,
        onRemove: P,
        index: D,
        total: w.length,
        onMove: A,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${N.href}-${N.label}`
    )),
    [
      T,
      w,
      z,
      P,
      A,
      c,
      f
    ]
  ), _ = "flex flex-col gap-3", M = Z(() => n.map((N) => /* @__PURE__ */ t(
    ot,
    {
      category: N,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: s,
      onDragEnd: l,
      currentOrder: n
    },
    N.id
  )), [n, f, r, s, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((N) => N.isRoot).map((N, D) => /* @__PURE__ */ t(
          ot,
          {
            category: N,
            onCollapse: s
          },
          `fixed-${D}`
        )) }),
        T && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Ua, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: I, children: S }) : /* @__PURE__ */ t(
          Gt,
          {
            axis: "y",
            values: w,
            onReorder: O,
            className: I,
            children: S
          }
        ) }) }) }),
        b && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((N) => !N.isRoot).map((N, D) => /* @__PURE__ */ t(
          ot,
          {
            category: N,
            onCollapse: s
          },
          `fixed-${D}`
        )) }),
        p && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: _, children: M }) : /* @__PURE__ */ t(
              Gt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: _,
                children: M
              }
            )
          }
        )
      ]
    }
  );
}
const $o = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(ve, { description: e, children: n }) : n;
function Wd({
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
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        se()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(B, { icon: As, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(_s, { keys: a }) })
      ]
    }
  ) });
}
const hn = ({ position: e }) => /* @__PURE__ */ t(
  Y.div,
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
function Bo({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: s, isSmallScreen: l } = Ae(), i = Je(), [c, d] = ut({ threshold: 1 }), [f, u] = ut({ threshold: 1 }), m = oe(), h = {
    x: {
      ease: s !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : s !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, b = () => a ? Js(a) && r ? Un(
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
      className: g(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        s === "locked" ? "h-full" : g(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          l ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: s === "locked" || l ? 0 : "8px",
        borderRadius: s === "locked" || l ? "0" : "12px",
        left: s === "locked" ? "0" : l ? 0 : "8px",
        x: s === "hidden" ? -260 : 0,
        opacity: s === "hidden" ? l ? 0.7 : 0 : 1,
        pointerEvents: s === "hidden" ? "none" : "auto"
      },
      transition: h,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ye, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Fe, { children: [
            !d && /* @__PURE__ */ t(hn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(hn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: b() })
      ]
    }
  );
}
const jd = re(Bo), Mo = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, pn = {
  approved: {
    icon: kn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Te,
    type: "critical",
    size: "sm"
  }
}, Wo = {
  icon: zn,
  type: "neutral",
  size: "sm"
}, jo = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Go = (e) => e in pn ? pn[e] : Wo;
function gn(e) {
  return jo[e ?? "neutral"] ?? 0;
}
const Vo = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const s = oe(), l = n === 1 ? s.approvals.requiredNumbers.one : s.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = s.approvals.statuses[a], c = Z(() => r.map((d) => {
    const f = Go(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => gn(f.badge?.type) - gn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ t(De, { text: i, variant: Mo[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Tt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, Uo = ({ steps: e }) => {
  const a = oe().approvals.history, r = e.findIndex((s) => s.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((s, l) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: l + 1 })
          }
        ),
        l !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, s.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: e.map((s, l) => /* @__PURE__ */ o(H, { children: [
        /* @__PURE__ */ t(
          Vo,
          {
            title: s.title,
            approvalsRequired: s.approvalsRequired,
            status: s.status,
            approvers: s.approvers
          },
          s.title
        ),
        l !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Gd = re(
  $("OneApprovalHistory", Uo)
), Mt = {
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
}, Ho = be({
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
      ...Mt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Ko = K.forwardRef(function({ className: n, gap: a, children: r, tileSize: s, ...l }, i) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: i, ...l, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(Ho({ gap: a, tileSize: s }), n),
      ref: i,
      ...l,
      children: r
    }
  ) });
}), qo = be({
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
}), Ha = R(function({
  className: n,
  grow: a,
  basis: r,
  shrink: s,
  paddingX: l,
  paddingY: i,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: b,
  ...p
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        qo({
          paddingX: l,
          basis: r,
          paddingY: i,
          grow: a,
          shrink: s,
          inline: c,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: h,
          width: b
        }),
        n
      ),
      ref: x,
      ...p
    }
  );
}), Yo = be({
  base: "flex-row",
  variants: {
    gap: {
      ...Mt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Zo = K.forwardRef(function({ className: n, gap: a, wrap: r, ...s }, l) {
  return /* @__PURE__ */ t(
    Ha,
    {
      className: g(Yo({ gap: a, wrap: r }), n),
      ref: l,
      ...s
    }
  );
}), Jo = be({
  base: "flex-col",
  variants: {
    gap: {
      ...Mt
    }
  },
  defaultVariants: {}
}), Xo = R(function({ className: n, gap: a, children: r, ...s }, l) {
  return /* @__PURE__ */ t(
    Ha,
    {
      className: g(Jo({ gap: a }), n),
      ref: l,
      ...s,
      children: r
    }
  );
}), Vd = me(
  {
    name: "Stack",
    type: "layout"
  },
  Xo
), Ud = me(
  {
    name: "Split",
    type: "layout"
  },
  Zo
), Hd = me(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ko
), Qo = ({ children: e }) => {
  const { enabled: n } = Yn();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
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
}, ec = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), tc = R(function({ header: n, children: a, action: r, summaries: s, alert: l, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Yn();
  G(() => {
    if (l && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, i]);
  const m = (b) => !!b && !(K.isValidElement(b) && b.type === K.Fragment && K.Children.count(b.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    At,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(_t, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Lt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(ec, {}),
                /* @__PURE__ */ t(Mn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(ve, { label: n.info, children: /* @__PURE__ */ t(
                B,
                {
                  icon: Wn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Ze, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ t(Ft, { text: l, level: "critical" }),
              i && /* @__PURE__ */ t(De, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                Ls,
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
            /* @__PURE__ */ t(Qo, { children: /* @__PURE__ */ t(Es, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              j,
              {
                icon: f ? Ds : Rs,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Et, { className: "flex h-full flex-col gap-4", children: [
          s && /* @__PURE__ */ t("div", { className: "flex flex-row", children: s.map((b, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: b.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!b.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: b.prefixUnit }),
              b.value,
              !!b.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: b.postfixUnit })
            ] })
          ] }, p)) }),
          K.Children.toArray(a).filter(m).map((b, p) => /* @__PURE__ */ o(K.Fragment, { children: [
            p > 0 && /* @__PURE__ */ t(Ps, { bare: !0 }),
            b
          ] }, p))
        ] }),
        r && /* @__PURE__ */ t(Os, { children: /* @__PURE__ */ t(j, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), nc = be({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), ac = R(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      At,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(_t, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Lt, { children: n.title }) : /* @__PURE__ */ t(E, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Mn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Et,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && nc({ height: a })),
              children: [...Array(4)].map((s, l) => /* @__PURE__ */ t(
                E,
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
), Ie = re(
  $("Widget", ne(tc, ac))
), ie = Object.assign(
  R(function({ chart: n, summaries: a, ...r }, s) {
    return /* @__PURE__ */ t(Ie, { ref: s, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ie.Skeleton
  }
), rc = ne(
  R(function({ canBeBlurred: n, ...a }, r) {
    const s = {
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
      ie,
      {
        ref: r,
        ...s,
        chart: /* @__PURE__ */ t(ll, { ...l, canBeBlurred: n })
      }
    );
  }),
  ie.Skeleton
), sc = $(
  "AreaChartWidget",
  rc
), lc = R(function(n, a) {
  return /* @__PURE__ */ t(
    ie,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(il, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), ic = $(
  "BarChartWidget",
  ne(lc, ie.Skeleton)
), oc = ne(
  R(
    function(n, a) {
      return /* @__PURE__ */ t(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(ol, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), cc = $(
  "LineChartWidget",
  oc
), dc = ne(
  R(
    function(n, a) {
      return /* @__PURE__ */ t(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(cl, { ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), uc = $(
  "PieChartWidget",
  dc
), fc = ne(
  R(
    function(n, a) {
      return /* @__PURE__ */ t(ie, { ref: a, ...n, chart: null });
    }
  ),
  ie.Skeleton
), mc = $(
  "SummariesWidget",
  fc
), hc = ne(
  R(
    function(n, a) {
      return /* @__PURE__ */ t(
        ie,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(dl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ie.Skeleton
), pc = $(
  "VerticalBarChartWidget",
  hc
), Kd = me(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  sc
), qd = me(
  {
    name: "BarChartWidget",
    type: "info"
  },
  ic
), Yd = me(
  {
    name: "LineChartWidget",
    type: "info"
  },
  cc
), Zd = me(
  {
    name: "PieChartWidget",
    type: "info"
  },
  uc
), Jd = me(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  pc
), Xd = me(
  {
    name: "SummariesWidget",
    type: "info"
  },
  mc
), gc = (e, n) => /* @__PURE__ */ o(
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
), bc = R(gc), xc = (e, n) => /* @__PURE__ */ o(
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
), vc = R(xc), yc = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, wc = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Nc = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Cc = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Ic = R(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: s, buttonAction: l, type: i }, c) {
    const d = yc[i], f = wc[i], u = Nc[i], m = Cc[i];
    return /* @__PURE__ */ o(
      At,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(_t, { className: "-mt-0.5", children: /* @__PURE__ */ t(Lt, { children: n }) }),
          /* @__PURE__ */ o(Et, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(bc, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(vc, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                j,
                {
                  label: r,
                  icon: s,
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
), Qd = re(
  $("ChartWidgetEmptyState", Ic)
);
function kc(e, n) {
  const a = V(null), r = V(null), [s, l] = L({
    visibleItems: [],
    overflowItems: []
  });
  zs({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const i = te(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = te(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const b = u[h].getBoundingClientRect().height;
      m.push(b);
    }
    return m;
  }, []), d = te(
    (u, m) => {
      let h = 0, b = 0;
      for (let p = 0; p < u.length; p++) {
        const x = b + u[p];
        if (x > m + 30) break;
        b = x, b = i(
          b,
          p,
          u.length
        ), h++;
      }
      return h;
    },
    [i]
  ), f = te(() => {
    if (!a.current || e.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    l(h === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (b) => b.visibleItems.length === h && b.overflowItems.length === e.length - h ? b : {
      visibleItems: e.slice(0, h),
      overflowItems: e.slice(h)
    });
  }, [e, c, d]);
  return G(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: s.visibleItems,
    overflowItems: s.overflowItems
  };
}
const at = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: s = 0,
  minSize: l,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = kc(n, s);
  return G(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", r),
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
at.displayName = "VerticalOverflowList";
const eu = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((s) => /* @__PURE__ */ t(vt, { ...s }, s.title)) }) : /* @__PURE__ */ t(
  at,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (s) => /* @__PURE__ */ t(vt, { ...s }, s.title)
  }
) : null, Sc = ({ onClick: e, children: n }) => {
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
function tu({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: s
}) {
  return /* @__PURE__ */ t(Sc, { onClick: s, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        s && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(B, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const Fc = R(
  function({ content: n, label: a, color: r, ...s }, l) {
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
        "icon" in s && s.icon && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(B, { icon: s.icon }) }),
        "emoji" in s && s.emoji && /* @__PURE__ */ t("span", { className: g("flex", r), children: /* @__PURE__ */ t(St, { emoji: s.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), nu = R(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: s, color: l, ...i }) => /* @__PURE__ */ t(
          Fc,
          {
            label: r,
            content: s,
            color: l,
            ...i
          },
          `${r}-${s}`
        ))
      }
    );
  }
), Tc = ({
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
function au({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: s,
  withPointerCursor: l = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    Tc,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t($s, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Bs, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Tt,
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
const Ac = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function bn({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: s
}) {
  const l = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Ac, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: l, children: [
    /* @__PURE__ */ t(En, { module: s ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const _c = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function yt({
  id: e,
  title: n,
  alert: a,
  rawTag: r,
  count: s,
  icon: l,
  rightIcon: i,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(_c, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ t(
        B,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ t(
        B,
        {
          icon: i,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(Ft, { ...a }),
      r && /* @__PURE__ */ t(Se, { ...r }),
      !!s && /* @__PURE__ */ t(Ze, { value: s })
    ] })
  ] });
}
function ru({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: s
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((l) => /* @__PURE__ */ t(bn, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ t(
    at,
    {
      items: e,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ t(bn, { ...l, onClick: a }, l.id),
      onVisibleItemsChange: s,
      gap: 8
    }
  );
}
function su({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: s
}) {
  return s ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((l) => /* @__PURE__ */ t(yt, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ t(
    at,
    {
      items: e,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ t(yt, { ...l, onClick: r }),
      minSize: a
    }
  );
}
const Lc = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), lu = R(
  function({ title: n, titleValue: a, titleTooltip: r, list: s }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            ve,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(B, { icon: Wn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      s.map((i) => /* @__PURE__ */ t(Lc, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function iu({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: s = !1,
  hideTooltip: l = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      ul,
      {
        data: a,
        legend: s,
        hideTooltip: l
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
const Ka = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, Ec = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: s = !0
}) => {
  const i = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!s || r === void 0) return;
    const u = Ka(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), b = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = we[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ct = "--:--", Dc = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: we.empty
    };
  if (!n)
    return {
      value: 1,
      color: we.empty
    };
}, Rc = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, s = Ka(
    n,
    a
  ), l = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (s ?? 0) * 60, i = r || (s ?? 0) < 0 ? void 0 : Dc(
    s ?? 0,
    l
  );
  let c = (s ?? 0) < 0 ? Math.abs(s ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, b = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - b) / l;
        return c -= b, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: b / l + x,
            color: we.overtime
          }
        ] : [
          ...u,
          {
            value: b / l,
            color: we.overtime
          },
          {
            value: x,
            color: we[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: we.empty
  }), f;
}, Pc = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, s = e.at(-1), l = r ? Kt(r) : ct, i = n === void 0 || n > 0 ? ct : s ? Kt(s.to) : ct, d = s?.variant === "break" ? s?.to.getTime() - s?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: l,
    secondaryLabel: i,
    time: m
  };
}, we = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Oc({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Rc({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: s, secondaryLabel: l, time: i } = Pc({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(fl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      ml,
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
          hl,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: i }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: s }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: l })
    ] })
  ] });
}
function zc({
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
        a && /* @__PURE__ */ t(B, { icon: a, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(B, { icon: Ms })
      ]
    }
  );
}
function ou({
  trackedMinutes: e,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: s,
  locations: l,
  canShowLocation: i = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: b = !0,
  canSeeGraph: p = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: C = !0,
  projectSelectorElement: T,
  breakTypeName: O
}) {
  const { status: P, statusText: A, subtitle: v, statusColor: k } = Ec({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), y = P === "clocked-out", I = m?.map((U) => ({
    value: U.id,
    label: U.duration ? `${U.name} · ${U.duration}` : U.name,
    description: U.description,
    tag: U.isPaid ? r.paid : r.unpaid
  })) ?? [], [z, S] = L(!1), _ = () => {
    if (I.length > 1)
      z || S(!0);
    else {
      const U = I?.[0]?.value;
      u?.(U);
    }
  }, M = (U) => {
    h?.(U), S(!1), u?.(U);
  }, N = y && l.length && !c && i, D = l.find((U) => U.id === s), W = l.map((U) => ({
    value: U.id,
    label: U.name,
    icon: U.icon
  })), q = P === "break", [ye, ue] = L(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: A }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                Y.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: k
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
                    backgroundColor: k
                  }
                }
              )
            ] })
          ] }),
          v && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: v })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          P === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            j,
            {
              onClick: d,
              label: r.clockIn,
              icon: Vt
            }
          ) }),
          P === "clocked-in" && /* @__PURE__ */ o(H, { children: [
            b && /* @__PURE__ */ t(H, { children: I.length > 1 && h ? /* @__PURE__ */ t(
              Ge,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: I,
                onChange: M,
                open: z,
                onOpenChange: S,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  j,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Ut,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              j,
              {
                onClick: _,
                label: r.break,
                variant: "neutral",
                icon: Ut,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ht
              }
            )
          ] }),
          P === "break" && /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ht,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              j,
              {
                onClick: d,
                label: r.resume,
                icon: Vt
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ t(
        Oc,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: N ? /* @__PURE__ */ o(H, { children: [
      /* @__PURE__ */ t(
        Ge,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: s,
          options: W,
          onChange: w,
          open: ye,
          onOpenChange: ue,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            zc,
            {
              text: D?.name,
              placeholder: r.selectLocation,
              icon: D?.icon
            }
          ) })
        }
      ),
      C && T
    ] }) : /* @__PURE__ */ o(H, { children: [
      i && D && /* @__PURE__ */ t(H, { children: /* @__PURE__ */ t(Se, { text: D.name, icon: D.icon }) }),
      C && T,
      q && O && /* @__PURE__ */ t(Se, { text: O })
    ] }) })
  ] }) });
}
const $c = {
  done: Gs,
  "in-progress": js,
  todo: Ws
}, Bc = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Mc({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const s = () => {
    a?.(e);
  }, l = Z(() => {
    if (!r)
      return $c[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    yt,
    {
      id: e.id,
      title: e.text,
      icon: l,
      iconClassName: Bc[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Vs
      } : void 0,
      count: e.counter,
      onClick: s
    }
  );
}
function cu({
  tasks: e,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: s = "No tasks assigned"
}) {
  const i = [
    { key: "done", status: "done" },
    { key: "inProgress", status: "in-progress" },
    { key: "todo", status: "todo" }
  ].flatMap(
    ({ key: d, status: f }) => (e[d] || []).map(
      (u) => typeof u == "string" ? {
        id: u,
        text: u
      } : u
    ).map(({ id: u, text: m, badge: h, counter: b }) => ({
      id: u,
      text: m,
      badge: h,
      counter: b,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: s }) : i.slice(0, r).map((d) => /* @__PURE__ */ t(
    Mc,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Wc = Object.defineProperty, jc = Object.defineProperties, Gc = Object.getOwnPropertyDescriptors, qe = Object.getOwnPropertySymbols, qa = Object.prototype.hasOwnProperty, Ya = Object.prototype.propertyIsEnumerable, xn = (e, n, a) => n in e ? Wc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, le = (e, n) => {
  for (var a in n || (n = {})) qa.call(n, a) && xn(e, a, n[a]);
  if (qe) for (var a of qe(n)) Ya.call(n, a) && xn(e, a, n[a]);
  return e;
}, rt = (e, n) => jc(e, Gc(n)), Vc = (e, n) => {
  var a = {};
  for (var r in e) qa.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && qe) for (var r of qe(e)) n.indexOf(r) < 0 && Ya.call(e, r) && (a[r] = e[r]);
  return a;
}, Uc = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Hc = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Kc = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = le({}, n);
    return r.right = e.left, r;
  }
  return null;
}, qc = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = le({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Yc = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let s = le({}, r);
  return s.left = n.left + e.width, Uc(s) || Hc({ usedSpot: s, spotsList: a }) ? null : s;
}, Zc = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((s, l, i) => {
  if (s === a) return Yc({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = Kc({ position: n, spot: s, stone: r });
  return c || qc({ position: n, stone: r, spot: s }) || s;
});
function Jc(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let s = n[a];
    if (e(s)) return s;
  }
  return null;
}
var Xc = (e, n) => n.filter(e), Qc = (e, n) => [...n].sort(e), ed = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, td = (e) => Qc(ed, e), nd = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let s = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (s.bottom = n.bottom);
  for (let l = 0, i = e.length; l < i; l += 1) {
    let c = e[l];
    if (s.left < c.left && s.top < c.top) {
      s.right = c.left;
      break;
    }
  }
  return s;
}, ad = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, rd = ({ availableSpots: e, stone: n }) => Jc((a) => ad(a, n), e);
function sd({ stone: e, availableSpots: n, containerSize: a }) {
  let r = rd({ availableSpots: n, stone: e }), s = { left: r.left, top: r.top }, l = nd({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), i = [...n, l], c = Zc({ spots: i, position: s, optimalSpot: r, stone: e });
  return i = [...Xc(Boolean, c)], i = td(i), { position: s, availableSpots: i };
}
var ld = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, s = [], l = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = sd({ availableSpots: l, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), s.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: s, containerHeight: r };
}, id = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), od = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: s }) => {
  let [{ positions: l, containerHeight: i, stones: c, availableSpots: d }, f] = L({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return G(() => {
    var u, m;
    let h = id(e.current), b = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (b === null) return;
    let p = ld({ stones: h, containerSize: b });
    f(rt(le({}, p), { stones: h }));
  }, [a, e, n, r, s]), { positions: l, containerHeight: i, stones: c, availableSpots: d };
}, cd = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), dd = ({ transition: e, transitionDuration: n }) => e ? { transition: cd(n)[e] } : null, ud = (e) => e ? rt(le({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, fd = ({ style: e, position: n, transition: a, transitionDuration: r }) => le(le(rt(le({}, e), { position: "absolute" }), ud(n)), dd({ transition: a, transitionDuration: r }));
function md(e, n, a) {
  let r;
  return function(...s) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, s);
    }, n);
  };
}
var hd = () => {
  let [e, n] = L(), a = V(md(n, 300));
  return G(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, pd = (e) => {
  let [n, a] = L(null);
  return G(() => {
    let r = new ResizeObserver((s) => {
      for (let l of s) a(l.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, gd = (e) => {
  var n = e, { children: a, style: r, transition: s = !1, transitionDuration: l = 500, transitionStep: i = 50 } = n, c = Vc(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = V([]), f = V(null), u = hd(), m = pd(f), { positions: h, containerHeight: b } = od({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), p = le({ minHeight: b ?? 0, position: "relative" }, r);
  return t("div", rt(le({ ref: f, style: p }, c), { children: Hn.map(a, (x, w) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let C = { style: fd({ style: x.props.style, position: h[w], transition: s, transitionDuration: l }), ref: (T) => d.current[w] = T };
    return Un(x, le(le({}, x.props), C));
  }) }));
};
const bd = { sm: 340, md: 480, lg: 640 }, vn = R(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const s = bd[a], [l, i] = L(), c = Hn.toArray(n), d = V(null);
    return G(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / s) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, s]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: l === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(gd, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), xd = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], du = ne(vn, () => /* @__PURE__ */ t(jn, { children: /* @__PURE__ */ t(vn, { children: xd.map((e, n) => /* @__PURE__ */ t(Ie.Skeleton, { height: e }, n)) }) })), yn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), uu = ne(
  R(function({ children: n }, a) {
    return /* @__PURE__ */ t(Ye, { ref: a, showBar: !1, children: /* @__PURE__ */ t(yn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(jn, { orientation: "horizontal", children: /* @__PURE__ */ o(yn, { children: [
    /* @__PURE__ */ t(Ie.Skeleton, {}),
    /* @__PURE__ */ t(Ie.Skeleton, {}),
    /* @__PURE__ */ t(Ie.Skeleton, {})
  ] }) })
);
function vd({
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
    Us,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const fu = re(
  $("WidgetEmptyState", vd)
), Za = R(
  ({ title: e, children: n }, a) => (Hs(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
Za.displayName = "WidgetSection";
const mu = re(
  $("WidgetSection", Za)
), hu = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const s = Ks(), l = window.location.pathname, i = Z(() => n?.length ? n.includes(l) : a?.length ? !a.includes(l) : !0, [l, n, a]), c = Z(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return i ? r : (s && console.error(c), null);
}, pu = re(
  me(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ye
  )
);
export {
  Td as ActivityItemList,
  Ei as ActivityItemListSkeleton,
  jl as AiPromotionChat,
  Gl as AiPromotionChatProvider,
  Rd as ApplicationFrame,
  Ju as AreaChart,
  Kd as AreaChartWidget,
  Hd as AutoGrid,
  ws as Badge,
  Xu as BarChart,
  qd as BarChartWidget,
  Li as BaseActivityItemList,
  Qu as BaseBanner,
  zi as BaseCelebration,
  Ki as BaseCommunityPost,
  xu as BaseTabs,
  vu as BreadcrumbSelect,
  yl as Breadcrumbs,
  vt as CalendarEvent,
  eu as CalendarEventList,
  ef as CardSelectableContainer,
  Xs as Carousel,
  tf as CategoryBarChart,
  iu as CategoryBarSection,
  Ad as Celebration,
  $i as CelebrationSkeleton,
  Qd as ChartWidgetEmptyState,
  yu as Chip,
  ou as ClockInControls,
  nf as ComboChart,
  Ld as CommunityPost,
  qi as CommunityPostSkeleton,
  To as CompanySelector,
  Ze as Counter,
  du as Dashboard,
  Pd as DaytimePage,
  po as DetailsItem,
  Ed as DetailsItemsList,
  af as Dialog,
  ke as Dropdown,
  Fd as EntitySelect,
  rf as F0ActionBar,
  sf as F0AiBanner,
  En as F0AvatarModule,
  kd as F0Callout,
  wu as F0Chip,
  lf as F0TableOfContent,
  Sd as F0VersionHistory,
  Nu as F1SearchBox,
  of as FILE_TYPES,
  Cu as FileItem,
  _d as HighlightBanner,
  nu as IndicatorsList,
  Iu as Input,
  cf as Item,
  df as ItemSectionHeader,
  uf as LineChart,
  Yd as LineChartWidget,
  Md as Menu,
  ku as MobileDropdown,
  ff as NotesTextEditor,
  mf as NotesTextEditorSkeleton,
  Su as NumberInput,
  Od as OmniButton,
  Gd as OneApprovalHistory,
  Fu as OneCalendar,
  Tu as OneCalendarInternal,
  Au as OneDataCollection,
  _u as OneDateNavigator,
  Us as OneEmptyState,
  Lu as OnePagination,
  Dd as OnePersonListItem,
  hu as OneRestrictComponent,
  zd as Page,
  Id as PageHeader,
  hf as PieChart,
  Zd as PieChartWidget,
  Qo as PrivateBox,
  pf as ProgressBarChart,
  gf as RadarChart,
  Wi as Reactions,
  bf as ResourceHeader,
  al as RichTextDisplay,
  xf as RichTextEditor,
  pu as ScrollArea,
  Wd as SearchBar,
  vf as SectionHeader,
  Ge as Select,
  _s as Shortcut,
  jd as Sidebar,
  $d as SidebarFooter,
  Bd as SidebarHeader,
  In as Spinner,
  Ud as Split,
  Vd as Stack,
  Xd as SummariesWidget,
  Eu as Switch,
  Du as Tabs,
  Ru as TabsSkeleton,
  cu as TasksList,
  yf as Textarea,
  Na as ToggleGroup,
  Ca as ToggleGroupItem,
  ve as Tooltip,
  lu as TwoColumnsList,
  wf as VerticalBarChart,
  Jd as VerticalBarChartWidget,
  pt as VirtualList,
  Pu as WeekStartDay,
  Zi as Weekdays,
  Ie as Widget,
  au as WidgetAvatarsListItem,
  fu as WidgetEmptyState,
  tu as WidgetHighlightButton,
  ru as WidgetInboxList,
  bn as WidgetInboxListItem,
  mu as WidgetSection,
  su as WidgetSimpleList,
  yt as WidgetSimpleListItem,
  uu as WidgetStrip,
  Nf as _RadarChart,
  Cf as actionBarStatuses,
  Ou as chipVariantOptions,
  zu as chipVariants,
  $u as downloadAsCSV,
  Bu as generateCSVContent,
  Mu as getGranularityDefinition,
  Wu as getGranularityDefinitions,
  ju as getGranularitySimpleDefinition,
  Gu as granularityDefinitions,
  Vu as modules,
  If as predefinedPresets,
  Uu as rangeSeparator,
  kf as selectSizes,
  Xe as useAiPromotionChat,
  Hu as useDataCollectionData,
  Ku as useDataCollectionSource,
  qu as useExportAction,
  Yu as useInfiniteScrollPagination,
  Ae as useSidebar
};
