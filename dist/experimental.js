import { h as ea, B as ta, i as na, j as ra, k as Zt, l as He, m as Be, n as aa, o as g, p as J, q as Ne, u as V, T as ia, r as la, s as sa, R as oa, t as ca, v as ie, w as da, x as Rt, y as Nt, z as Je, A as Ce, E as ua, G as fa, H as U, J as $n, K as at, L as ae, M as ma, N as ha, O as Bn, Q as pa, S as ga, U as q, V as B, W as Te, X as ba, Y as xa, Z as va, _ as ya, $ as wa, a0 as be, a1 as Mn, a2 as ke, a3 as Ze, e as jn, a4 as Re, a5 as Wn, a6 as je, a7 as oe, a8 as Q, a9 as it, aa as Un, ab as Na, ac as Hn, ad as fe, ae as le, af as Ca, ag as ka, ah as Ia, ai as Sa, aj as Fa, ak as we, al as lt, am as Aa, an as Ta, ao as Da, ap as La, aq as st, ar as Vn, as as Pa, at as Ra, au as Ea, av as Qe, aw as Oa, ax as Gn, ay as _a, az as za, aA as $a, aB as Ba, aC as Ma, aD as Kn, aE as qn, aF as Yn, aG as Ct, aH as Xn, aI as kt, aJ as Jn, aK as ja, aL as Wa, aM as Ua, aN as Ha, aO as Va, aP as We, aQ as ot, aR as It, aS as Zn, aT as Ga, aU as Et, aV as Ka, aW as qa, aX as Ya, aY as Ee, aZ as Xa, a_ as Ja, a$ as Ve, b0 as Qt, b1 as St, b2 as Za, b3 as Qa, a as ei, b as ti, b4 as Qn, b5 as ni, g as ri, F as ai, b6 as ii, b7 as er, b8 as li, b9 as tr, ba as si, bb as Ue, bc as oi, bd as ci, be as nr, bf as di, bg as ui, bh as fi, bi as rr, bj as ar, bk as mi, bl as hi, bm as pi, bn as ir, bo as gi, bp as bi, bq as xi, br as vi, bs as Ot, bt as yi, bu as lr, bv as wi, bw as Ni, bx as Ci, by as ki, bz as sr, bA as or, bB as cr, bC as Ii, bD as Si, bE as Fi, bF as Ai, bG as en, bH as Ti, bI as Di, bJ as Li, bK as Pi, bL as Ri, bM as xe, bN as _t, bO as zt, bP as $t, bQ as dr, bR as Bt, bS as ur, bT as fr, bU as Ei, bV as Oi, bW as _i, bX as zi, bY as $i, bZ as Bi, b_ as Mi, b$ as ji, c0 as tn, c1 as Wi, c2 as Ui, c3 as nn, c4 as rn, c5 as an, c6 as Hi, c7 as Vi, c8 as Gi, c9 as Ki, ca as mr, cb as qi, cc as Yi } from "./F0CanvasPanel-cOfywQR5.js";
import { cp as ju, co as Wu, cB as Uu, cl as Hu, cm as Vu, cd as Gu, ce as Ku, cf as qu, cg as Yu, cE as Xu, cn as Ju, cx as Zu, cy as Qu, cC as ef, ch as tf, cr as nf, cq as rf, ci as af, cj as lf, cz as sf, cF as of, cA as cf, cD as df, cw as uf, ct as ff, cv as mf, cs as hf, ck as pf, cu as gf } from "./F0CanvasPanel-cOfywQR5.js";
import { jsx as t, jsxs as o, Fragment as ee } from "react/jsx-runtime";
import me, { forwardRef as Y, useRef as $, useTransition as Xi, useState as D, useLayoutEffect as Mt, useId as Ft, useContext as ve, createContext as Ie, useEffect as j, useCallback as G, useMemo as K, Fragment as Ji, isValidElement as Zi, cloneElement as hr, Children as pr } from "react";
import { C as Qi, P as el, a as ct, M as tl, p as nl, b as rl, R as ln, c as gr, u as al, d as il, e as ll, f as sl, g as ol, h as br, S as cl, A as dl, B as ul, L as fl, i as ml, V as hl, j as pl, k as gl, l as bl, O as xl } from "./useDataCollectionSource-LLDffKQI.js";
import { r as xf, s as vf, o as yf, H as wf, t as Nf, z as Cf, a8 as kf, G as If, q as Sf, aa as Ff, a9 as Af, Q as Tf, ad as Df, F as Lf, Y as Pf, U as Rf, J as Ef, af as Of, K as _f, Z as zf, _ as $f, v as Bf, ab as Mf, ac as jf, N as Wf, $ as Uf, a5 as Hf, a7 as Vf, w as Gf, y as Kf, D as qf, W as Yf, ae as Xf, X as Jf, T as Zf, ag as Qf, x as em, E as tm, m as nm, n as rm, a1 as am, a2 as im, a6 as lm, I as sm, a3 as om, a0 as cm, a4 as dm } from "./useDataCollectionSource-LLDffKQI.js";
const vl = ea("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), xr = Y(({ className: e, items: n }, r) => /* @__PURE__ */ t(ta, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(na, {}),
  /* @__PURE__ */ t(ra, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
xr.displayName = "CollapsedBreadcrumbItem";
const jt = 50, yl = 120, et = 8;
function wl(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let i = e - a - et, l = 0, s = 1;
  for (let c = r - 1; c > 0; c--) {
    const u = n[c];
    if (i < u)
      break;
    i -= u, l = c, s++;
  }
  if (s < r)
    for (i -= jt; i < 0 && s > 1; )
      i += n[l], l++, s--;
  return Math.max(2, s);
}
function sn(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + et;
    default:
      return e[0] + jt + e[e.length - 1] + et;
  }
}
function Nl(e, n) {
  return yl * e + (n ? jt : 0) + et;
}
function Cl(e, n, r = []) {
  if (!e) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Nl(
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
      minWidth: sn(i)
    };
  const l = wl(e, i);
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
    minWidth: sn(i)
  };
}
function kl({ breadcrumbs: e, append: n }) {
  const r = $(null), a = $(null), [, i] = Xi(), [l, s] = D(null), c = (l?.collapsedItems || []).length > 0;
  return Mt(() => {
    const u = r.current, f = a.current;
    if (!u || !f || f.children.length < e.length) return;
    const d = () => {
      const h = r.current?.clientWidth ?? null, p = Array.from(f.children);
      i(() => {
        const b = Cl(
          h,
          e,
          p
        );
        s(b);
      });
    }, m = new ResizeObserver(d);
    return m.observe(u), d(), () => m.disconnect();
  }, [e, n]), !e.length || l && !l.headItem ? /* @__PURE__ */ t(Zt, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    Zt,
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
            children: e.map((u, f) => /* @__PURE__ */ t(
              He,
              {
                item: u,
                isLast: f === e.length - 1,
                isFirst: f === 0,
                children: f === e.length - 1 ? n : void 0
              },
              Be(u)
            ))
          }
        ),
        l && l.headItem && /* @__PURE__ */ o(aa, { children: [
          /* @__PURE__ */ t(
            He,
            {
              isOnly: l.isOnly,
              isFirst: !0,
              item: l.headItem,
              isLast: !1
            },
            `first-item-${Be(l.headItem)}`
          ),
          c && /* @__PURE__ */ o(ee, { children: [
            /* @__PURE__ */ t(
              xr,
              {
                items: l.collapsedItems
              },
              "collapsed-items"
            ),
            l.tailItems.map((u, f) => /* @__PURE__ */ t(
              He,
              {
                item: u,
                isLast: f === l.tailItems.length - 1,
                isFirst: !1,
                children: f === l.tailItems.length - 1 ? n : void 0
              },
              Be(u)
            ))
          ] }),
          !c && /* @__PURE__ */ t(ee, { children: l.tailItems.map((u, f) => /* @__PURE__ */ t(
            He,
            {
              item: u,
              isLast: f === l.tailItems.length - 1,
              isFirst: !1,
              children: f === l.tailItems.length - 1 ? n : void 0
            },
            Be(u)
          )) })
        ] })
      ]
    },
    `breadcrumb-${Be(e.at(-1)) ?? 0}`
  );
}
const Il = Ne({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), on = [
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
], Sl = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...i
}, l) => {
  const s = Ft(), {
    onAnimationStart: c,
    onAnimationEnd: u,
    onDragStart: f,
    onDragEnd: d,
    onDrag: m,
    className: h,
    ...p
  } = i;
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(Il({ size: n }), h),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        J.svg,
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
            ...p.style
          },
          ...(({ style: b, ...x }) => x)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              on.map((b) => /* @__PURE__ */ t("clipPath", { id: `${s}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${s}-circle)`, children: on.map((b) => /* @__PURE__ */ t(
              J.foreignObject,
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
}, vr = Y(Sl), yr = Ie(null), Fl = 15, Al = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [i, l] = D(n), [s, c] = D(!1), [u, f] = D(!0), [d, m] = D(
    Fl
  ), h = $(null), p = (x) => {
    h.current = x;
  }, b = () => {
    h.current && h.current();
  };
  return j(() => {
    l(n);
  }, [n]), j(() => {
    if (s && r?.(), !s) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [s, r]), /* @__PURE__ */ t(
    yr.Provider,
    {
      value: {
        ...a,
        enabled: i,
        setEnabled: l,
        open: s,
        setOpen: c,
        shouldPlayEntranceAnimation: u,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: i ? d : null,
        clear: b,
        setClearFunction: p
      },
      children: e
    }
  );
}, Le = () => {
};
function dt() {
  const e = ve(yr);
  return e === null ? {
    enabled: !1,
    setEnabled: Le,
    open: !1,
    setOpen: Le,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Le,
    setAutoClearMinutes: Le,
    clear: Le,
    setClearFunction: Le,
    autoClearMinutes: null
  } : e;
}
const wr = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: i } = dt(), l = V(), [s, c] = D(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(ia, { children: /* @__PURE__ */ o(la, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(sa, { asChild: !0, children: /* @__PURE__ */ t(
      J.div,
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
          oa,
          {
            onCheckedChange: (u) => {
              a(u);
            },
            checked: i,
            "aria-label": i ? l.ai.closeChat : l.ai.openChat,
            className: g(
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
              ca,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  vr,
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
    !i && /* @__PURE__ */ t(da, { side: "left", className: "font-medium", children: l.ai.welcome })
  ] }) }) }) : null;
}, cn = "one_sidebar_locked", Nr = Ie(void 0);
function Oe() {
  const e = ve(Nr);
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
function Tl({ children: e }) {
  const { currentPath: n } = Rt(), [r, a] = D(!1), [i, l] = D(!1), s = r ? Je.xl : Je.md, c = Nt(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [u, f] = D(() => {
    const k = localStorage.getItem(cn);
    return k !== null ? !!k : !0;
  }), [d, m] = D(!1), [h, p] = D(
    null
  ), b = G(
    ({ isInvokedByUser: k } = {
      isInvokedByUser: !0
    }) => {
      l(k ?? !0), c && m(!d), f(!u);
    },
    [c, d, u, f, m]
  ), x = G(
    (k) => {
      c || (k.clientX < 32 && m(!0), k.clientX > 280 && m(!1));
    },
    [c, m]
  ), v = K(() => c ? d ? "unlocked" : "hidden" : !u && !d ? "hidden" : !u && d ? "unlocked" : "locked", [c, d, u]);
  return j(() => {
    m(!1);
  }, [n]), j(() => {
    i && localStorage.setItem(cn, u ? "1" : "");
  }, [u, i]), j(() => () => {
    p(v);
  }, [v]), /* @__PURE__ */ t(
    Nr.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: i,
        sidebarState: v,
        toggleSidebar: b,
        prevSidebarState: h,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const dn = J.create(U), un = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Dl = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, i] = D(!1), l = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ce, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        ie()
      ),
      onClick: l,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        dn,
        {
          size: "sm",
          icon: ua,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: un,
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
        dn,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: fa,
          className: "outline-none",
          variants: un,
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
function fn({
  icon: e,
  target: n,
  fallbackLabel: r
}) {
  const a = !n, i = n?.title || r, l = n?.onClick, s = l ? void 0 : n?.url;
  return /* @__PURE__ */ t(
    ae,
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
function Ll({ previous: e, next: n, counter: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
    r && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
      r.current,
      "/",
      r.total
    ] }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        fn,
        {
          icon: $n,
          target: e,
          fallbackLabel: "Previous"
        }
      ),
      /* @__PURE__ */ t(
        fn,
        {
          icon: at,
          target: n,
          fallbackLabel: "Next"
        }
      )
    ] })
  ] });
}
const Pl = ({
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
  onItemClick: u = () => {
  },
  hasUnread: f = !1,
  crossSelling: d
}) => {
  const [m, h] = D("idle"), [p, b] = D(null), [x, ...v] = p ?? [], [k, N] = D(!1);
  j(() => {
    b(null), h("idle");
  }, [e]);
  const P = G(async () => {
    try {
      h("fetching");
      const R = await r();
      h("idle"), b(R);
    } catch {
      h("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    ma,
    {
      open: k,
      onOpenChange: async (R) => {
        N(R), R && p === null && P(), s(R);
      },
      children: [
        /* @__PURE__ */ t(ha, { asChild: !0, children: /* @__PURE__ */ t(
          ae,
          {
            variant: "outline",
            icon: Bn,
            hideLabel: !0,
            label: n,
            pressed: k,
            append: f && /* @__PURE__ */ t(Wt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(pa, { children: /* @__PURE__ */ o(
          ga,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Ol, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t($l, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(_l, { ...i, buttonUrl: a }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Rl,
                    {
                      ...x,
                      onClick: u
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ t(ee, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: v.map((R, I) => /* @__PURE__ */ t(
                    El,
                    {
                      ...R,
                      onClick: u
                    },
                    I
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  zl,
                  {
                    ...l,
                    onClick: () => {
                      P();
                    }
                  }
                ) })
              ] }),
              m === "idle" && d && d.isVisible && /* @__PURE__ */ t(
                Bl,
                {
                  isVisible: d.isVisible,
                  onClose: d.onClose,
                  crossSelling: d,
                  onDropdownClose: () => N(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Rl = ({
  title: e,
  href: n,
  mediaUrl: r,
  unread: a,
  updated: i,
  onClick: l
}) => {
  const s = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    ba,
    {
      onClick: l,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Te,
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
              xa,
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
              a && /* @__PURE__ */ t(Wt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, El = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: i
}) => {
  const l = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(va, { asChild: !0, className: l, onClick: i, children: /* @__PURE__ */ t(
    Te,
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
        a && /* @__PURE__ */ t(Wt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Ol = ({
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
        q,
        {
          variant: "outline",
          size: "sm",
          icon: at,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), Cr = ({
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
] }) }), _l = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  Cr,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(U, { icon: Bn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Te, { href: r, children: /* @__PURE__ */ t(q, { label: n }) })
  }
), zl = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  Cr,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(U, { icon: ya, size: "lg" }),
    button: /* @__PURE__ */ t(q, { variant: "outline", label: r, onClick: a })
  }
), $l = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(B, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(B, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(B, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(B, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(B, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Wt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Bl = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [i, l] = D(e);
  j(() => {
    l(e);
  }, [e]);
  const s = () => {
    l(!1), n && n();
  }, c = (u) => {
    l(!1), a(), u && u();
  };
  return i && /* @__PURE__ */ o(ee, { children: [
    /* @__PURE__ */ t(wa, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          q,
          {
            variant: "ghost",
            icon: be,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        Qi,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((u) => /* @__PURE__ */ t(
            el,
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
}, Ut = Ie(null), $d = Ut.Provider;
function Bd() {
  return ve(Ut);
}
function Ml(e, n) {
  const r = n?.getItemTitle, a = n?.mode ?? "url", i = e !== null, l = e?.previousItem ?? null, s = e?.nextItem ?? null, c = e?.previousItemUrl ?? null, u = e?.nextItemUrl ?? null, f = e?.absoluteIndex ?? null, d = e?.totalItems, m = e?.hasPrevious ?? !1, h = e?.hasNext ?? !1, p = e?.goToPrevious, b = e?.goToNext;
  return K(() => {
    if (!i) return null;
    const x = f !== null && d !== void 0 ? { current: f + 1, total: d } : void 0, v = (P, R) => (P !== null ? r?.(P) : void 0) ?? R, k = a === "callback" ? m ? { onClick: p, title: v(l, "Previous") } : void 0 : c !== null ? { url: c, title: v(l, "Previous") } : void 0, N = a === "callback" ? h ? { onClick: b, title: v(s, "Next") } : void 0 : u !== null ? { url: u, title: v(s, "Next") } : void 0;
    return !k && !N && !x ? null : { previous: k, next: N, counter: x };
  }, [
    i,
    a,
    l,
    s,
    c,
    u,
    f,
    d,
    m,
    h,
    p,
    b,
    r
  ]);
}
function Md({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: i = !1,
  navigation: l,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: u,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: d, toggleSidebar: m } = Oe(), h = ve(Ut), p = l ?? h ?? void 0, b = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], x = n && Object.keys(n).length !== 0, v = i && r.length > 0, k = !i && a.length > 0, N = !i && !!s?.isVisible, P = b[b.length - 1], R = "navigation" in window ? window.navigation : null, I = i && (R ? !!R.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ce, { children: !i && d !== "locked" && /* @__PURE__ */ t(
            J.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                q,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: Mn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                I && "justify-center"
              ),
              children: [
                i && I && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  q,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: $n,
                    onClick: () => window.history.back()
                  }
                ) }),
                I || v ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in P ? /* @__PURE__ */ t(B, { className: "h-4 w-24" }) : P.label }) : /* @__PURE__ */ t(
                  kl,
                  {
                    breadcrumbs: b,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Dl,
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
          !i && x && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(ke, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            Ze,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(Ze, { text: n.text, variant: n.variant }) }),
          !i && x && (p || k || N) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          p && /* @__PURE__ */ t(Ll, { ...p }),
          p && k && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (N || k) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            N && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Pl,
              {
                ...s,
                currentModule: e.name
              }
            ) }),
            k && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((F, W) => /* @__PURE__ */ t(jl, { action: F }, W)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              jn,
              {
                tooltip: u,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(wr, {})
          ] })
        ] })
      ]
    }
  );
}
function jl({ action: e }) {
  const n = $(null), [r, a] = D(!1), i = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Re, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    ae,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    ae,
    {
      size: "md",
      variant: i,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Te,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        ae,
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
const Wl = () => {
  const e = V();
  return /* @__PURE__ */ o(
    J.div,
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
          ae,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Wn,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Ul = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: r
}) => {
  const a = $(null);
  j(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, Hl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: i
  } = dt();
  return Ul({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(Ce, { children: n && /* @__PURE__ */ t(
    J.div,
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
        J.div,
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
}, Vl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(je, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        ae,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Gl = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
  benefits: i,
  actions: l,
  onShow: s,
  onHide: c,
  children: u
}) => /* @__PURE__ */ t(
  Al,
  {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: l,
    onShow: s,
    onHide: c,
    children: u
  }
), Kl = () => {
  const {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: l,
    setOpen: s,
    onHide: c
  } = dt(), u = () => {
    s(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(Hl, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      ae,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: be,
        onClick: u
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(vr, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((f, d) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(it, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, d)) }),
      l?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: l.map((f, d) => /* @__PURE__ */ t(
        Vl,
        {
          action: f,
          onClose: () => s(!1)
        },
        d
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Wl, {}) })
  ] }) : null;
}, ql = oe(
  Q("AiPromotionChat", Kl)
), Yl = oe(
  Q("AiPromotionChatProvider", Gl)
), kr = Ne({
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
}), mn = {
  positive: Hn,
  warning: Na,
  info: Un
}, hn = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Xl = Y(
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
        className: kr({ variant: l }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  hn[l]
                ),
                children: [
                  mn[l] && /* @__PURE__ */ t(U, { icon: mn[l], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    fe,
                    {
                      className: hn[l] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            r && /* @__PURE__ */ t(
              q,
              {
                variant: "ghost",
                icon: be,
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
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: i.map((u, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              q,
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
), Jl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: kr({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(B, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(B, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(B, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(B, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(B, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(B, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Ir = Y(
  (e, n) => /* @__PURE__ */ t(Xl, { ref: n, ...e })
), Zl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Jl, { compact: e, variant: n });
Ir.displayName = "F0Callout";
const jd = le(
  oe(Ir),
  Zl
), Sr = Y(
  ({ value: e, max: n, color: r = "categorical-1", label: a }, i) => {
    const l = V(), s = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0, c = Number.isFinite(e) ? Math.max(0, Math.min(Math.floor(e), s)) : 0, u = Array.from({ length: s }, (d, m) => m < c), f = Ca(r);
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
Sr.displayName = "F0SegmentedBar";
const Wd = oe(
  Q("F0SegmentedBar", Sr)
);
function Ql({
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
        ie("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(U, { icon: ka, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          fe,
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
function es({
  author: e,
  timestamp: n,
  onClick: r,
  isActive: a
}) {
  const { locale: i } = Ia(), l = Sa(i), s = Fa(n, "PPPp", { locale: l }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        ie("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${s} by ${c}${a ? " (selected)" : ""}`,
      "aria-pressed": r ? a : void 0,
      children: [
        /* @__PURE__ */ t(fe, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            we,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            fe,
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
function ts({
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
          fe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(lt, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ t(
            Ql,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((i) => /* @__PURE__ */ t(
            es,
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
const Ud = oe(
  Q("F0VersionHistory", ts)
), Fr = Y(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: i }, l) => {
    const s = me.useRef(null);
    me.useImperativeHandle(
      l,
      () => s.current,
      []
    );
    const c = Aa({
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
                children: u ? i(u) : /* @__PURE__ */ t(ee, {})
              },
              u.key
            ))
          }
        )
      }
    );
  }
);
Fr.displayName = "VirtualList";
const At = Q("VirtualList", Fr), Ar = ({
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
function ut(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i >= 0 && i < a.length - 1 ? a[i + 1].focus() : a.length > 0 && n?.();
}
function ft(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), i = a.indexOf(e);
  i > 0 ? a[i - 1].focus() : a.length > 0 && n?.();
}
const ns = ({
  entity: e,
  selected: n,
  onSelect: r,
  onRemove: a,
  marginLeft: i,
  search: l,
  goToFirst: s,
  goToLast: c,
  singleSelector: u = !1,
  disabled: f = !1,
  hiddenAvatar: d = !1
}) => {
  const m = e.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), b = (v) => {
    v.preventDefault(), v.stopPropagation(), !f && (n ? a(e) : r(e));
  }, x = (v) => {
    if (v.key === "Enter" || v.key === " ") {
      if (v.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else v.key === "ArrowDown" ? ut(v.currentTarget, s) : v.key === "ArrowUp" && ft(v.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: g(
        i,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && u ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !d && /* @__PURE__ */ t(
          we,
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
              Ar,
              {
                text: e.name,
                search: l,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Vn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: b,
            onKeyDown: x,
            className: g(
              "pointer-events-none ml-auto",
              u ? "opacity-0" : ""
            )
          }
        ),
        u && n && /* @__PURE__ */ t(
          U,
          {
            className: "text-f1-icon-selected",
            icon: Hn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Ye = ({
  groupView: e,
  expanded: n,
  search: r,
  entity: a,
  selected: i,
  partialSelected: l,
  onSelect: s,
  onRemove: c,
  onExpand: u,
  goToFirst: f,
  goToLast: d,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: p = !1,
  singleSelector: b = !1,
  disabled: x = !1,
  hiddenAvatar: v = !1
}) => {
  const [k, N] = D(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ns,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: i,
        onSelect: s,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: d,
        disabled: x,
        hiddenAvatar: v
      }
    );
  const P = (F) => {
    if (F.key === " ")
      F.preventDefault(), u(!n);
    else if (F.key === "Enter" && b)
      u(!n);
    else if (F.key === "Enter") {
      if (x) return;
      !i || l ? s(a) : i && c(a);
    } else F.key === "ArrowDown" ? ut(F.currentTarget, f) : F.key === "ArrowUp" && ft(F.currentTarget, d);
  }, R = () => {
    if (k)
      u(!n), N(!1);
    else {
      if (x || b) return;
      i ? c(a) : s(a);
    }
  };
  if (!a.subItems?.length) return null;
  const I = i || l;
  return /* @__PURE__ */ o(ee, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        q,
        {
          hideLabel: !0,
          icon: n ? Ta : Da,
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
          "aria-label": a.name,
          onPointerDown: () => {
            N(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            p && /* @__PURE__ */ t(
              U,
              {
                icon: La,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Ar,
                {
                  semiBold: !0,
                  text: a.name,
                  search: r,
                  searchKeys: a.searchKeys
                }
              ),
              /* @__PURE__ */ t(st, { value: a.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Vn,
              {
                checked: I,
                disabled: x,
                onClick: R,
                onKeyDown: P,
                indeterminate: l,
                onPointerDown: (F) => {
                  F.stopPropagation(), N(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: g("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Ye.displayName = "EntitySelectListItem";
const pn = ({
  label: e,
  onCreate: n,
  goToFirst: r,
  goToLast: a
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (l) => {
  l.key === "ArrowDown" || l.key === "Tab" ? ut(l.currentTarget, r) : l.key === "ArrowUp" && ft(l.currentTarget, a);
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
        q,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Pa,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: g("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Me = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      q,
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
    const c = r.find((u) => u.label === s);
    c && !c.disabled && c.onClick?.();
  }, l = r.every((s) => s.disabled);
  return /* @__PURE__ */ t(
    Ra,
    {
      items: a,
      value: e.label,
      disabled: l,
      onClick: i,
      variant: "outline",
      size: "sm"
    }
  );
}, rs = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: r,
  disabled: a,
  allVisibleSelected: i,
  anyVisibleSelected: l,
  loading: s,
  singleSelector: c,
  onSelectAll: u,
  onClear: f
}) => {
  const d = !c && (n || r), m = e && e.length > 0;
  if (!(!s && (!c && d || m))) return null;
  let p, b, x = u ? {
    label: n || "",
    onClick: u,
    variant: "outline",
    disabled: a || i
  } : void 0, v = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !l
  } : void 0;
  return x || (x = v, v = void 0), m && d ? (p = /* @__PURE__ */ t(
    Me,
    {
      primaryAction: x,
      secondaryActions: v ? [v] : []
    }
  ), b = /* @__PURE__ */ t(
    Me,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ t(
    Me,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : d && (p = /* @__PURE__ */ t(Me, { primaryAction: x, secondaryActions: [] }), v && (b = /* @__PURE__ */ t(Me, { primaryAction: v, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    b
  ] }) });
}, as = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: i,
  goToLast: l
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(U, { icon: vl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), ut(c.currentTarget, i)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), ft(c.currentTarget, l)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: r,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    U,
    {
      icon: Ea,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), gt = 384, bt = 36, is = 37, gn = 1, bn = 200, xn = '[data-avatarname-navigator-element="true"]', ls = ({
  groupView: e,
  entities: n,
  groups: r,
  selectedGroup: a,
  search: i,
  onSelect: l,
  onRemove: s,
  onSubItemRemove: c,
  onSubItemSelect: u,
  onClear: f,
  onSelectAll: d,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: p,
  onToggleExpand: b,
  searchPlaceholder: x,
  selectAllLabel: v,
  clearLabel: k,
  notFoundTitle: N,
  notFoundSubtitle: P,
  className: R,
  actions: I,
  onCreate: F,
  onCreateLabel: W,
  singleSelector: _ = !1,
  loading: C = !1,
  disabled: L = !1,
  hiddenAvatar: T = !1
}) => {
  const y = me.useRef(null), z = K(
    () => e ? n.reduce(
      (E, X) => E + (X.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), w = G(() => {
    setTimeout(() => {
      y.current?.scrollTo({ top: 0 });
    }, gn), setTimeout(() => {
      Array.from(
        document.querySelectorAll(xn)
      )[0]?.focus();
    }, bn);
  }, []), S = G(() => {
    setTimeout(() => {
      y.current?.scrollTo({ top: y.current?.scrollHeight });
    }, gn), setTimeout(() => {
      const E = Array.from(
        document.querySelectorAll(xn)
      );
      E[E.length - 1]?.focus();
    }, bn);
  }, []), A = K(
    () => new Map(h.map((E) => [E.id, E])),
    [h]
  ), O = G(
    (E) => {
      const X = A.get(E.id);
      if (!e)
        return {
          selected: !!X,
          partialSelected: !!X
        };
      const ne = (E.subItems ?? []).filter(
        (M) => X?.subItems?.some(
          (te) => te.subId === M.subId
        )
      ), Z = (E.subItems?.length ?? 0) === ne.length, ue = !Z && ne.length > 0;
      return { selected: Z, partialSelected: ue };
    },
    [e, A]
  ), se = G(
    (E) => {
      if (E.index === 0 && F)
        return /* @__PURE__ */ t(
          pn,
          {
            label: W ?? "",
            onCreate: () => F?.(i),
            goToFirst: w,
            goToLast: S
          }
        );
      const X = F ? E.index - 1 : E.index, ne = n[X], { selected: Z, partialSelected: ue } = O(ne);
      return /* @__PURE__ */ t(
        Ye,
        {
          expanded: ne.expanded ?? !1,
          onExpand: () => b(ne, !0),
          search: i,
          groupView: e,
          entity: ne,
          onSelect: l,
          onRemove: s,
          selected: Z,
          partialSelected: ue,
          showGroupIcon: ss(r, a),
          singleSelector: _,
          goToFirst: w,
          goToLast: S,
          disabled: L,
          hiddenAvatar: T
        },
        ne.id
      );
    },
    [
      F,
      W,
      L,
      n,
      O,
      w,
      S,
      e,
      r,
      T,
      s,
      l,
      b,
      i,
      a,
      _
    ]
  ), re = K(() => e ? n.flatMap((E) => {
    const X = Ge(
      h ?? [],
      E.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: E.id,
          subName: E.name,
          subAvatar: E.avatar,
          expanded: E.expanded ?? X?.expanded ?? !1,
          subItems: E.subItems,
          subSearchKeys: E.searchKeys
        }
      },
      ...(E.subItems ?? []).map((ne) => ({
        parent: {
          ...E,
          expanded: E.expanded ?? X?.expanded ?? !1
        },
        subItem: ne
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
  })), [e, n, h]), H = G(
    (E) => {
      if (E.index === 0 && F)
        return /* @__PURE__ */ t(
          pn,
          {
            label: W ?? "",
            onCreate: () => F?.(i),
            goToFirst: w,
            goToLast: S
          }
        );
      const X = F ? E.index - 1 : E.index, ne = re[X].parent, Z = re[X].subItem;
      if (!ne) {
        const M = {
          id: Z.subId,
          name: Z.subName,
          avatar: Z.subAvatar,
          subItems: Z.subItems,
          expanded: Z.expanded,
          searchKeys: Z.subSearchKeys
        }, te = Ge(
          h,
          M.id
        ), de = (M?.subItems ?? []).filter(
          ($e) => te?.subItems?.some(
            (Qr) => Qr.subId === $e.subId
          )
        ), ge = (M.subItems?.length ?? 0) === de.length, Zr = !ge && de.length > 0;
        return /* @__PURE__ */ t(
          Ye,
          {
            groupView: !0,
            expanded: M.expanded ?? !1,
            onExpand: ($e) => b(M, $e),
            search: i,
            entity: M,
            onSelect: l,
            onRemove: s,
            selected: ge,
            partialSelected: Zr,
            showGroupIcon: r.find(($e) => $e.value === a)?.groupType === "team",
            singleSelector: _,
            goToFirst: w,
            goToLast: S,
            hideLine: X === re.length - 1,
            disabled: L,
            hiddenAvatar: T
          }
        );
      }
      let ue = !!Ge(h, Z.subId);
      if (!ue) {
        const M = Ge(
          h,
          ne.id
        );
        ue = !!(ne?.subItems ?? []).filter(
          (de) => M?.subItems?.some(
            (ge) => ge.subId === de.subId
          )
        ).find((de) => de.subId === Z.subId);
      }
      return /* @__PURE__ */ t(
        Ye,
        {
          expanded: !1,
          onExpand: () => null,
          search: i,
          groupView: !1,
          entity: {
            id: Z.subId,
            name: Z.subName,
            avatar: Z.subAvatar,
            searchKeys: Z.subSearchKeys
          },
          onSelect: () => {
            u(ne, Z);
          },
          onRemove: () => c(ne, Z),
          selected: !!ue,
          partialSelected: !1,
          singleSelector: _,
          goToFirst: w,
          goToLast: S,
          isChild: !0,
          hiddenAvatar: T
        }
      );
    },
    [
      re,
      h,
      i,
      _,
      w,
      S,
      l,
      s,
      r,
      L,
      b,
      a,
      u,
      c,
      T,
      F,
      W
    ]
  ), [Se, ye] = K(() => {
    if (!n.length)
      return [!1, !1];
    let E = 0, X = 0;
    if (!e)
      E = n.length, X = n.reduce(
        (ue, { id: M }) => ue + (A.has(M) ? 1 : 0),
        0
      );
    else {
      const ue = new Set(
        [...A.values()].flatMap(
          (M) => M.subItems?.map((te) => te.subId) ?? []
        )
      );
      n.forEach((M) => {
        const te = M.subItems ?? [];
        E += te.length, X += te.filter(
          (de) => ue.has(de.subId)
        ).length;
      });
    }
    const ne = E > 0 && X === E, Z = X > 0;
    return [ne, Z];
  }, [n, A, e]), Fe = re.length, ce = !_ && (v || k), pt = I && I.length > 0, ze = !C && (!_ && ce || pt);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        _ || C ? "rounded-r-xl" : "",
        R
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              _ || C ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                as,
                {
                  search: i,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: w,
                  goToLast: S
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Qe,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: C,
                  onChange: p,
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
              ze ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              C && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(je, {}) }),
              !C && !z && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: gt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: N }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: P })
                  ]
                }
              ),
              !C && (!!z || F) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                At,
                {
                  height: gt,
                  itemCount: Fe + (F ? 1 : 0),
                  itemSize: (E) => {
                    if (E === 0 && F) return bt;
                    const X = F ? E - 1 : E;
                    return re[X]?.parent === null ? is : bt;
                  },
                  renderer: H,
                  ref: y
                }
              ) : /* @__PURE__ */ t(
                At,
                {
                  height: gt,
                  itemCount: n.length + (F ? 1 : 0),
                  itemSize: bt,
                  renderer: se,
                  ref: y
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          rs,
          {
            onSelectAll: d,
            onClear: f,
            singleSelector: _,
            totalFilteredEntities: z,
            allVisibleSelected: Se,
            anyVisibleSelected: ye,
            selectAllLabel: v,
            clearLabel: k,
            disabled: L,
            actions: I
          }
        )
      ]
    }
  );
}, Ge = (e, n) => e.find((r) => r.id === n), ss = (e, n) => e.find((r) => r.value === n)?.groupType === "team", os = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: i = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Oa,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      i ? "pl-2" : "pl-0"
    ),
    left: !i && /* @__PURE__ */ t(
      Gn,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: a ? { icon: _a, color: "secondary" } : void 0
      }
    ),
    right: !r && /* @__PURE__ */ t(
      U,
      {
        icon: be,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: a
  }
) }), cs = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: r,
  selectedEntities: a,
  selectedLabel: i,
  disabled: l = !1,
  hiddenAvatar: s = !1
}) => {
  const c = K(() => {
    const f = e ? a.flatMap(
      (m) => (m.subItems ?? []).map((h) => ({
        parent: m,
        subItem: h
      }))
    ) : a.map((m) => ({
      parent: null,
      subItem: {
        subId: m.id,
        subName: m.name,
        subAvatar: m.avatar,
        subDeactivated: m.deactivated
      }
    })), d = /* @__PURE__ */ new Set();
    return f.filter((m) => {
      const h = m.subItem.subId;
      return d.has(h) ? !1 : (d.add(h), !0);
    });
  }, [e, a]), u = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: i && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      u,
      " ",
      i
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      At,
      {
        height: 425,
        itemCount: u,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const d = c[f.index];
          return d ? /* @__PURE__ */ t(
            os,
            {
              deactivated: d.subItem.subDeactivated,
              entity: d.subItem,
              disabled: l,
              hiddenAvatar: s,
              onRemove: () => d.parent ? n?.(d.parent, d.subItem) : r({
                id: d.subItem.subId,
                name: d.subItem.subName,
                avatar: d.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(ee, {});
        }
      }
    ) })
  ] });
}, ds = 500, vn = 520, yn = 210, wn = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: r,
  selectedEntities: a,
  selectedLabel: i,
  width: l,
  singleSelector: s = !1,
  loading: c = !1,
  hiddenAvatar: u = !1,
  actions: f,
  onCreate: d,
  onCreateLabel: m,
  ...h
}) => {
  const p = (l ?? vn) < ds, b = !c && !s && !p, x = l ?? vn, v = b ? x - yn : x;
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
              ls,
              {
                ...h,
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a,
                singleSelector: s,
                loading: c,
                disabled: h.disabled,
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
              width: yn + "px"
            },
            children: /* @__PURE__ */ t(
              cs,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a ?? [],
                selectedLabel: i,
                disabled: h.disabled,
                hiddenAvatar: u
              }
            )
          }
        )
      ]
    }
  );
}, us = ({
  placeholder: e,
  selected: n,
  selectedEntities: r,
  disabled: a = !1,
  hiddenAvatar: i = !1,
  label: l,
  labelIcon: s,
  icon: c,
  error: u,
  status: f,
  hint: d,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: p,
  loading: b = !1,
  required: x = !1,
  readonly: v = !1,
  append: k,
  size: N = "sm",
  open: P
}) => {
  const R = K(
    () => r.some(
      (_) => _.subItems && _.subItems.length > 0
    ),
    [r]
  ), I = K(() => R ? r.flatMap(
    (_) => (_.subItems ?? []).map((C) => ({
      parent: _,
      subItem: C
    }))
  ) : r.map((_) => ({
    parent: null,
    subItem: {
      subId: _.id,
      subName: _.name,
      subAvatar: _.avatar,
      subDeactivated: _.deactivated
    }
  })), [R, r]), F = I.length === 0 ? void 0 : I.length === 1 ? I[0].subItem.subName : I.length + " " + n, W = I.length === 1 ? I[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    za,
    {
      onClickContent: m,
      role: "combobox",
      label: l,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !F ? c : void 0,
      error: u,
      status: f,
      hint: d,
      hideLabel: h,
      maxLength: p,
      clearable: !1,
      value: F,
      disabled: a,
      loading: b,
      required: x,
      readonly: v,
      size: N,
      avatar: i || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: I[0].subItem.subAvatar,
        deactivated: I[0].subItem.subDeactivated
      },
      append: k ?? /* @__PURE__ */ t(ee, { children: /* @__PURE__ */ t($a, { open: P, disabled: a, size: N }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            F && "text-f1-foreground",
            I.length === 1 && !i || c && !F ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            fe,
            {
              tag: "span",
              className: I.length === 1 && I[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: I.length === 0 ? e ?? "" : I.length === 1 ? I[0].subItem.subName : `${I.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Hd = (e) => {
  const [n, r] = D(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (C) => {
    r(C), e.onOpenChange?.(C);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [i, l] = D(e.entities), [s, c] = D(""), [u, f] = Ba("", 300), d = K(
    () => e.entities.some(
      (C) => C.subItems && C.subItems.length > 0
    ),
    [e.entities]
  ), m = ve(Ma), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(C) {
    if (e.singleSelector) {
      e.onSelect(C), r(!1);
      return;
    }
    const L = e.selectedEntities ?? [], T = i.find((A) => A.id === C.id);
    if (!T)
      return;
    const y = new Set(
      (T.subItems ?? []).map((A) => A.subId)
    ), z = /* @__PURE__ */ new Set([T.id]);
    i.forEach((A) => {
      A.id !== T.id && (A.subItems ?? []).some(
        (se) => y.has(se.subId)
      ) && z.add(A.id);
    });
    const w = [...L];
    function S(A) {
      const O = w.findIndex((se) => se.id === A.id);
      O >= 0 ? w[O] = A : w.push(A);
    }
    z.forEach((A) => {
      const O = i.find((H) => H.id === A);
      if (!O) return;
      const se = O.subItems?.filter(
        (H) => y.has(H.subId)
      ) ?? [], re = w.findIndex((H) => H.id === A);
      if (re >= 0) {
        const H = w[re].subItems ?? [], Se = new Set(H.map((Fe) => Fe.subId)), ye = [
          ...H,
          ...se.filter((Fe) => !Se.has(Fe.subId))
        ];
        S({
          ...O,
          subItems: ye
        });
      } else
        S({
          ...O,
          subItems: se
        });
    }), e.onSelect(w);
  }
  function x(C, L) {
    if (e.singleSelector)
      e.onSelect({ ...C, subItems: [{ ...L }] }), r(!1);
    else {
      const T = e.selectedEntities ?? [], y = new Set(T.map((S) => S.id)), z = new Map(
        T.map((S) => [S.id, S.subItems ?? []])
      );
      y.add(C.id), e.entities.forEach((S) => {
        S.subItems?.some(
          (O) => O.subId === L.subId
        ) && y.add(S.id);
      });
      const w = [];
      e.entities.forEach((S) => {
        if (y.has(S.id)) {
          let O = [...z.get(S.id) ?? []];
          S.subItems?.some(
            (H) => H.subId === L.subId
          ) && (O.some(
            (Se) => Se.subId === L.subId
          ) || O.push(L));
          const re = new Set(
            (S.subItems ?? []).map((H) => H.subId)
          );
          O = O.filter(
            (H) => re.has(H.subId)
          ), w.push({
            ...S,
            subItems: O
          });
        }
      }), e.onSelect(w);
    }
  }
  function v(C) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let L = [];
    const T = e.selectedEntities ?? [];
    if (d) {
      const y = i.find(
        (w) => w.id === C.id
      );
      if (!y)
        return;
      const z = new Set(
        (y.subItems ?? []).map((w) => w.subId)
      );
      for (const w of T) {
        const S = (w.subItems ?? []).filter(
          (A) => !z.has(A.subId)
        );
        S.length > 0 && L.push({
          ...w,
          subItems: S
        });
      }
    } else
      L = (T ?? []).filter((y) => y.id !== C.id);
    e.onSelect(L);
  }
  function k(C, L) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const T = e.selectedEntities ?? [], y = L.subId, z = [];
    for (const w of T) {
      const S = w.subItems?.filter((A) => A.subId !== y) ?? [];
      S.length > 0 && z.push({
        ...w,
        subItems: S
      });
    }
    e.onSelect(z);
  }
  function N() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [];
    let L = [];
    if (d) {
      const T = new Set(
        i.flatMap(
          (y) => (y.subItems ?? []).map((z) => z.subId)
        )
      );
      for (const y of C) {
        const z = (y.subItems ?? []).filter(
          (w) => !T.has(w.subId)
        );
        z.length > 0 && L.push({
          ...y,
          subItems: z
        });
      }
    } else {
      const T = new Set(
        i.map((y) => y.id)
      );
      L = (C ?? []).filter((y) => !T.has(y.id));
    }
    e.onSelect(L);
  }
  function P() {
    const C = [...e.selectedEntities ?? []];
    i.forEach((L) => {
      const T = C.find((y) => y.id === L.id);
      if (!T)
        C.push({
          ...L,
          subItems: L.subItems || []
        });
      else {
        const y = Array.from(
          /* @__PURE__ */ new Set([
            ...T.subItems ?? [],
            ...L.subItems ?? []
          ])
        );
        T.subItems = y;
      }
    }), e.singleSelector || e.onSelect(C);
  }
  const R = (C) => {
    c(C), f(C);
  }, I = (C, L) => {
    e.onItemExpandedChange(C.id, L), l(
      i.map(
        (T) => T.id === C.id ? { ...T, expanded: !C.expanded } : T
      )
    );
  };
  j(() => {
    if (!u) {
      l(e.entities);
      return;
    }
    if (d && !e.applySearchToGroup) {
      const L = e.entities.map((T) => {
        const y = fs(T, u), z = T.subItems?.map((w) => ({
          ...w,
          score: tt(
            u,
            w.subSearchKeys ?? [w.subName]
          )
        })).filter((w) => w.score < 1 / 0).sort((w, S) => w.score - S.score);
        return {
          ...T,
          score: y,
          expanded: T.expanded ?? (z?.length ?? 0) > 0,
          subItems: z
        };
      }).filter((T) => T.score < 1 / 0).sort((T, y) => T.score - y.score);
      l(L);
    } else {
      const C = e.entities.map((L) => {
        const T = tt(
          u,
          L.searchKeys ?? [L.name]
        );
        return { ...L, score: T };
      }).filter((L) => L.score < 1 / 0).sort((L, T) => L.score - T.score);
      l(C);
    }
  }, [
    u,
    e.entities,
    e.applySearchToGroup,
    d,
    l
  ]);
  const F = $(null), [W, _] = D(0);
  return Mt(() => {
    const C = () => {
      F.current && _(F.current.offsetWidth);
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: F,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        wn,
        {
          groupView: d,
          entities: i,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: v,
          onSubItemRemove: k,
          onSubItemSelect: x,
          onClear: N,
          onSelectAll: P,
          selectedEntities: e.selectedEntities ?? [],
          search: s,
          onSearch: R,
          onToggleExpand: I,
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
  ) : /* @__PURE__ */ o(Kn, { ...e, onOpenChange: a, open: n, children: [
    /* @__PURE__ */ t(
      qn,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          us,
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
      Yn,
      {
        container: p,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          wn,
          {
            groupView: d,
            entities: i,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: b,
            onRemove: v,
            onSubItemRemove: k,
            onSubItemSelect: x,
            onClear: N,
            onSelectAll: P,
            selectedEntities: e.selectedEntities ?? [],
            search: s,
            onSearch: R,
            onToggleExpand: I,
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
function Nn(e) {
  return Tt(e).split(/\s+/).filter((n) => n.length > 0);
}
function tt(e = "", n) {
  const r = Nn(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const i = Tt(a), l = Nn(a), s = Tt(e);
    if (i.includes(s) || r.every(
      (u) => l.some((f) => f.includes(u))
    ))
      return 1;
  }
  return 1 / 0;
}
function fs(e, n) {
  const r = tt(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((i, l) => {
    const s = tt(
      n,
      l.subSearchKeys ?? [l.subName]
    );
    return Math.min(i, s);
  }, 1 / 0)), Math.min(r, a);
}
const ms = ({
  id: e,
  createdAt: n,
  title: r,
  description: a,
  icon: i,
  category: l,
  isUnread: s = !1,
  onClick: c,
  onVisible: u
}) => {
  const { ref: f } = Ct({
    threshold: 0.1,
    onChange(h) {
      h && u?.(e);
    }
  }), d = Xn(n, {
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
        /* @__PURE__ */ t(kt, { icon: i ?? Jn }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${l} · ${d}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: s && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, hs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(B, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(B, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(B, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(B, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(B, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Ht = Q(
  "ActivityItem",
  le(ms, hs)
), Tr = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), ps = ({
  title: e,
  items: n,
  onClickItem: r,
  onItemVisible: a
}) => /* @__PURE__ */ t(Tr, { title: e, children: n.map((i) => /* @__PURE__ */ t(
  Ht,
  {
    ...i,
    onClick: () => r(i.id),
    onVisible: a
  },
  i.id
)) }), gs = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Tr, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(Ht.Skeleton, {}, a)) }), Xe = le(ps, gs), bs = 3, xs = ["today", "yesterday", "lastWeek", "lastMonth"], vs = (e) => Ua(e, ([n]) => {
  const r = xs.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), Dt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ys = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: i = 5
}) => {
  const l = V(), s = ja(e, "createdAt"), c = Object.values(s).slice().flatMap((d) => d.map((m) => m.id)).slice(-i), u = Wa((d) => {
    c.includes(d) && a?.();
  }, 1e3), f = vs(
    Object.entries(s).filter(([d, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([d, m], h) => /* @__PURE__ */ o(me.Fragment, { children: [
      /* @__PURE__ */ t(
        Xe,
        {
          title: d in l.date.groups ? l.date.groups[d] : d,
          items: m,
          onClickItem: r,
          onItemVisible: u
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(Dt, {})
    ] }, d)),
    n && new Array(bs).fill(null).map((d, m) => /* @__PURE__ */ t(Ht.Skeleton, {}, m))
  ] });
}, ws = () => {
  const e = V();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Xe.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(Dt, {}),
    /* @__PURE__ */ t(
      Xe.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(Dt, {}),
    /* @__PURE__ */ t(
      Xe.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Vd = Q(
  "ActivityItemList",
  le(ys, ws)
), Ns = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Cs = {
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
function ks({
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
        r ? "" : Cs[Ha(
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
                we,
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
                ct,
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
function Is(e) {
  const n = $(null), r = $(), a = G(() => {
    const l = n.current;
    if (!l) return;
    const s = Va.create(l, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], u = 0.1;
    r.current = setInterval(() => {
      s({
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
  }, [e]), i = G(() => {
    clearInterval(r.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: a, handleMouseLeave: i };
}
const Ss = ({
  link: e,
  firstName: n,
  lastName: r,
  src: a,
  onClick: i,
  canReact: l = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: u,
  typeLabel: f,
  date: d
}) => {
  const [m, h] = D(s), p = $(null);
  j(() => {
    h(s);
  }, [s]);
  const b = (R) => {
    h(R), c?.(R);
  }, x = We(), { canvasRef: v, handleMouseEnter: k, handleMouseLeave: N } = Is(x), P = ot({
    emoji: Ns[u],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Te,
    {
      href: e,
      onClick: i,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ie()
      ),
      onMouseEnter: x ? void 0 : k,
      onMouseLeave: x ? void 0 : N,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: v,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          ks,
          {
            firstName: n,
            lastName: r,
            src: a,
            canReact: l,
            lastEmojiReaction: m,
            onReactionSelect: b,
            pickerRef: p
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
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: P })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(It, { date: d }) })
        ] })
      ]
    }
  );
}, Fs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(B, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(B, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(B, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Gd = le(Ss, Fs), Kd = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(Zn, { module: "kudos", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(q, { label: r, variant: "outline", onClick: a }) })
] });
function Dr({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: i
}) {
  const [l, s] = D(r), [c, u] = D(n), f = $(null), { fireEmojiConfetti: d } = Ga(), m = (b, x) => {
    b.stopPropagation(), u(c + (l ? -1 : 1)), s(!l), i?.(x), l || d(x, f);
  }, h = a?.map((b) => b.name).join(", ") || "", p = /* @__PURE__ */ t(
    Et,
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
      "aria-label": Ka(e),
      prepend: /* @__PURE__ */ t(ot, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        qa,
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
  return h ? /* @__PURE__ */ t(ke, { label: h, children: p }) : p;
}
function As({ items: e, onInteraction: n, locale: r, action: a }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    a && /* @__PURE__ */ t(
      q,
      {
        label: a.label,
        icon: a.icon,
        onClick: a.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(ct, { onSelect: n, locale: r }),
    e.map((i) => /* @__PURE__ */ t(
      Dr,
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
const Ts = Q("Reactions", As), Lr = Y(function({ content: n, collapsed: r, id: a, className: i, tabIndex: l }, s) {
  return /* @__PURE__ */ t(
    Ya,
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
Lr.displayName = "BasePostDescription";
const Ds = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(B, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(B, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Pr = le(
  Lr,
  Ds
), Cn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((r) => {
      const a = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Ee,
        {
          icon: r.icon,
          text: r.label ?? (r.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${r.label}: ${r.description}`
        }
      ) });
      return r.label || r.description ? /* @__PURE__ */ t(
        ke,
        {
          label: r.label,
          description: r.description,
          children: a
        },
        r.label ?? r.description
      ) : a;
    })
  }
), Lt = Y(
  function({
    label: n,
    title: r,
    subtitle: a,
    description: i,
    color: l,
    isPending: s,
    leftTags: c,
    rightTags: u,
    fromDate: f,
    toDate: d,
    noBackground: m
  }, h) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(ee, { children: [
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
                f && /* @__PURE__ */ o(ee, { children: [
                  /* @__PURE__ */ t(It, { date: f }),
                  /* @__PURE__ */ t(
                    U,
                    {
                      icon: at,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                d && /* @__PURE__ */ t(It, { date: d })
              ] })
            ] }),
            (c || u) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(Cn, { tags: c }),
              u && /* @__PURE__ */ t(Cn, { tags: u, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ls = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Rr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Ls.has(r);
}, Ps = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let i = Xa(a);
  const l = (s) => {
    s.stopPropagation();
  };
  return r && (i = `${i} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Rr(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: l,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(ee, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(B, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      Lt,
      {
        title: e,
        description: i,
        color: Ja.special.highlight,
        isPending: !1,
        toDate: a,
        noBackground: !0
      }
    )
  ] });
}, Rs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(B, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(B, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(B, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(B, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Er = le(Ps, Rs), Es = ({
  describedBy: e,
  controls: n,
  expanded: r,
  onClick: a
}) => {
  const i = V();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ie()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": r,
      onClick: a,
      children: i.actions.seeMore
    }
  ) });
}, Os = ({
  id: e,
  author: n,
  group: r,
  createdAt: a,
  title: i,
  description: l,
  onClick: s,
  mediaUrl: c,
  event: u,
  counters: f,
  reactions: d,
  inLabel: m,
  comment: h,
  actions: p,
  dropdownItems: b,
  noReactionsButton: x = !1,
  descriptionExpandable: v = !1
}) => {
  const k = Ft(), N = Ft(), P = $(null), [R, I] = D(null), [F, W] = D(!1), _ = [f.views, f.comments].filter(Boolean).join(" · "), C = v && R?.id === e && R.description === l, L = !C, T = Xn(a), y = () => {
    s(e);
  }, z = (A) => {
    A.stopPropagation();
  }, w = n ? `${n.firstName} ${n.lastName}` : void 0, S = (A) => {
    A.preventDefault(), A.stopPropagation(), l && I({ id: e, description: l });
  };
  return j(() => {
    C && P.current?.focus();
  }, [C]), j(() => {
    v || I(null);
  }, [v]), j(() => {
    const A = P.current;
    if (!v || !A || C) {
      W(!1);
      return;
    }
    const O = () => {
      W(
        A.scrollHeight > A.clientHeight
      );
    };
    if (O(), typeof ResizeObserver > "u") return;
    const se = new ResizeObserver(O);
    return se.observe(A), () => se.disconnect();
  }, [v, C, l]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: y,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Ve,
          {
            href: n.url || "#",
            title: w,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              we,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(kt, { icon: Qt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(ee, { children: [
                  /* @__PURE__ */ t(
                    Ve,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: w,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        we,
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
                    Ve,
                    {
                      href: n.url,
                      title: w,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: w
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(kt, { icon: Qt, size: "sm" }) }),
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
                  Ve,
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
                  p?.map((A) => /* @__PURE__ */ t(
                    q,
                    {
                      hideLabel: !A.label,
                      ...A.icon && { icon: A.icon },
                      variant: "outline",
                      size: "md",
                      onClick: A.onClick,
                      label: A.label ?? "",
                      title: A.label ?? ""
                    },
                    A.label
                  )),
                  b?.length && /* @__PURE__ */ t(
                    Re,
                    {
                      items: b,
                      icon: St,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Re,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...b ?? []
                    ],
                    icon: St,
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
                  id: k,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: i
                }
              ),
              l && /* @__PURE__ */ o(ee, { children: [
                /* @__PURE__ */ t(
                  Pr,
                  {
                    ref: P,
                    id: N,
                    content: l,
                    collapsed: L,
                    tabIndex: C ? -1 : void 0,
                    className: g(C && ie())
                  }
                ),
                v && F && !C && /* @__PURE__ */ t(
                  Es,
                  {
                    describedBy: k,
                    controls: N,
                    expanded: C,
                    onClick: S
                  }
                )
              ] })
            ] })
          ] }),
          c && !u && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Rr(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: z,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(ee, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(B, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          u && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Er, { ...u }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: _ }),
          !x && /* @__PURE__ */ t(
            Ts,
            {
              items: d?.items ?? [],
              onInteraction: d?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: Za
              }
            }
          )
        ] })
      ]
    }
  );
}, _s = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(B, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(B, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(B, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(B, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(B, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Pr.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(B, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Er.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(B, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(B, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), qd = le(
  Os,
  _s
), Or = me.forwardRef(({ person: e, onClick: n, ...r }, a) => {
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
          we,
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
            r.info && /* @__PURE__ */ t(ke, { label: r.info, children: /* @__PURE__ */ t(
              U,
              {
                icon: Un,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((l, s) => /* @__PURE__ */ o(ee, { children: [
            /* @__PURE__ */ t(Ee, { ...l }, l.text),
            s < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(Qa, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              q,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              q,
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
}), zs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(B, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(B, { className: "h-4" }),
    /* @__PURE__ */ t(B, { className: "h-4" })
  ] })
] });
Or.displayName = "OnePersonListItem";
const Yd = oe(
  Q(
    "OnePersonListItem",
    le(Or, zs)
  )
), kn = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function $s({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Tl, { children: /* @__PURE__ */ t(
    Bs,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function Bs({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  const l = a?.enabled ? ei : i?.enabled ? Yl : Ji, s = a?.enabled ? a : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(l, { ...s, children: /* @__PURE__ */ t(
    Us,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const Xd = Q(
  "ApplicationFrame",
  $s
), Ms = ({ contentId: e }) => {
  const n = V();
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
function js(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function Ws(e, n) {
  const { sidebarState: r, toggleSidebar: a } = Oe(), i = $(e);
  j(() => {
    n && js(
      e,
      i.current,
      r
    ) && a({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, r, a]);
}
function Us({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: i
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: c, setForceFloat: u } = Oe(), f = We(), {
    open: d,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: p,
    closeCanvas: b,
    chatWidth: x,
    resizable: v,
    panelSide: k
  } = ti(), N = m === "fullscreen", P = m === "canvas", { open: R } = dt(), I = v ? x : ni, F = k === "left", W = $(N), _ = N && !W.current, C = !N && W.current, [
    L,
    T
  ] = D(!1);
  j(() => {
    !N && W.current && T(!0), W.current = N;
  }, [N]);
  const y = N || L || C, z = K(() => _ ? { duration: 0.15, ease: "easeOut" } : C ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [_, C]), w = Nt(
    `(max-width: ${Je.xl}px)`,
    { initializeWithValue: !0 }
  ), S = Nt(`(max-width: ${Je.md}px)`, {
    initializeWithValue: !0
  }), A = d && !F;
  return j(() => {
    u(A);
  }, [A, u]), j(() => {
    u(R);
  }, [R, u]), Ws(A, w), /* @__PURE__ */ t(
    tl,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(Qn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ce, { children: l === "unlocked" && /* @__PURE__ */ t(
            J.nav,
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
              ref: (O) => {
                l === "hidden" ? O?.setAttribute("inert", "") : O?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Ms, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            J.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: d && !S && !F ? I : 0,
                paddingLeft: d && !S && F ? I : 0
              },
              transition: {
                paddingRight: kn,
                paddingLeft: kn
              },
              children: [
                /* @__PURE__ */ t(
                  J.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      y ? "overflow-hidden" : "overflow-auto",
                      !d && !R && "xs:pr-1",
                      l === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: l,
                    children: /* @__PURE__ */ t(
                      J.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          y ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && P && h && /* @__PURE__ */ t(
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
                      S ? "fixed inset-0 z-[50]" : g(
                        "absolute bottom-0 top-0 z-[21]",
                        F ? "right-0" : "left-0"
                      )
                    ),
                    style: S ? void 0 : F ? { left: I } : { right: I },
                    children: /* @__PURE__ */ t(
                      ri,
                      {
                        content: h,
                        onClose: b,
                        entities: p,
                        side: F ? "left" : "right"
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  J.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      S ? "fixed inset-0 z-[30]" : g(
                        "absolute top-0 bottom-0",
                        F ? "left-0" : "right-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        y || P ? "z-20" : "z-0",
                        l === "hidden" && y ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: S || N ? "100%" : I
                    },
                    transition: z,
                    onAnimationComplete: () => {
                      L && T(!1);
                    },
                    children: /* @__PURE__ */ t(ai, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(ql, {})
        ] }) })
      ] })
    }
  );
}
const _r = ({
  firstName: e,
  lastName: n,
  src: r,
  "aria-label": a,
  "aria-labelledby": i,
  pulse: l,
  onPulseClick: s
}) => {
  const c = V(), [u, f] = D(!l);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ce, { mode: "popLayout", initial: !!u, children: u ? /* @__PURE__ */ t(
    J.div,
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
        J.div,
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
          children: /* @__PURE__ */ t(ot, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ o(
    J.div,
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
          Gn,
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
          Et,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), s();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ t(
              U,
              {
                icon: rl[l],
                color: nl[l],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          J.div,
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
              ae,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: ii,
                onClick: (d) => {
                  d.preventDefault(), d.stopPropagation(), s();
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
_r.displayName = "PulseAvatar";
const Hs = Ne({
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
function zr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: i, toggleSidebar: l, isSmallScreen: s } = Oe();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: Hs({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || i === "hidden") && /* @__PURE__ */ t(
              q,
              {
                variant: "ghost",
                onClick: () => l(),
                label: "Open main menu",
                icon: Mn,
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
                    _r,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    we,
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
            /* @__PURE__ */ t(jn, {}),
            /* @__PURE__ */ t(wr, {})
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
zr.displayName = "DaytimePage";
const Jd = oe(
  Q("DaytimePage", zr)
);
function Vs(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: i, target: l }) => ({
    label: n,
    description: r,
    href: a,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function Gs({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Re, { items: Vs(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ie()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(U, { icon: er, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Zd = oe(
  Q("OmniButton", Gs)
);
function $r({ children: e, header: n, embedded: r = !1 }) {
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
$r.displayName = "Page";
const Qd = oe(Q("Page", $r)), Ks = (e) => e.reduce(
  (n, r) => n + r.chats.filter((a) => (a.unreadCount ?? 0) > 0).length,
  0
), Br = Ie(null), Mr = Ie(null), In = (e, n, r) => e.map((a) => a.id === n ? r(a) : a), Ke = (e, n) => e.map((r) => ({ ...r, chats: n(r.chats) })), eu = ({
  children: e,
  initialGroups: n = [],
  initialActiveChatId: r
}) => {
  const [a, i] = D(n), [l, s] = D(
    r
  ), c = K(
    () => ({
      setGroups: i,
      setActiveChat: (f) => s(f ?? void 0),
      upsertChat: (f, d) => i((m) => m.some(
        (p) => p.chats.some((b) => b.id === d.id)
      ) ? Ke(
        m,
        (p) => p.map((b) => b.id === d.id ? { ...b, ...d } : b)
      ) : In(m, f, (p) => ({
        ...p,
        chats: [...p.chats, d]
      }))),
      updateChat: (f, d) => i(
        (m) => Ke(
          m,
          (h) => h.map((p) => p.id === f ? { ...p, ...d } : p)
        )
      ),
      removeChat: (f) => i(
        (d) => Ke(d, (m) => m.filter((h) => h.id !== f))
      ),
      setUnread: (f, d) => i(
        (m) => Ke(
          m,
          (h) => h.map((p) => p.id === f ? { ...p, unreadCount: d } : p)
        )
      ),
      reorder: (f, d) => i(
        (m) => In(m, f, (h) => {
          const p = new Map(h.chats.map((v) => [v.id, v])), b = d.map((v) => p.get(v)).filter((v) => !!v), x = h.chats.filter((v) => !d.includes(v.id));
          return { ...h, chats: [...b, ...x] };
        })
      )
    }),
    []
  ), u = K(
    () => ({
      groups: a,
      activeChatId: l,
      unreadChatsCount: Ks(a)
    }),
    [a, l]
  );
  return /* @__PURE__ */ t(Mr.Provider, { value: c, children: /* @__PURE__ */ t(Br.Provider, { value: u, children: e }) });
}, qs = () => {
  const e = ve(Br);
  if (e === null)
    throw new Error("useSidebarChats must be used within a SidebarChatProvider");
  return e;
}, jr = () => {
  const e = ve(Mr);
  if (e === null)
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    );
  return e;
}, Ys = () => {
  const e = qs(), n = jr();
  return K(() => ({ ...e, ...n }), [e, n]);
}, tu = () => jr(), Vt = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: i,
  highlightWhenCollapsed: l,
  isDragging: s,
  wasDragging: c
}) => {
  const [u, f] = D(n), d = We(), m = l && !u, h = () => {
    if (s || c?.current) return;
    const p = !u;
    f(p), a?.(p);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(li, { open: u, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ie("focus-visible:ring-inset"),
          r && "hidden"
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
            J.div,
            {
              initial: !1,
              animate: { rotate: u ? 0 : -90 },
              transition: { duration: d ? 0 : 0.1 },
              className: "flex h-3 w-3 items-center justify-center",
              children: /* @__PURE__ */ t(U, { icon: tr, size: "xs" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(si, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      J.div,
      {
        initial: !1,
        animate: {
          height: u ? "auto" : 0,
          opacity: u ? 1 : 0,
          visibility: u ? "visible" : "hidden"
        },
        transition: {
          duration: d ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: i })
      }
    ) })
  ] }) });
}, Wr = ({
  className: e
}) => /* @__PURE__ */ o(
  "div",
  {
    "aria-hidden": "true",
    className: g("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", e),
    children: [
      /* @__PURE__ */ t(B, { className: "h-6 w-6 flex-shrink-0 rounded-full" }),
      /* @__PURE__ */ t(B, { className: "h-3.5 flex-1 rounded" })
    ]
  }
), Xs = () => /* @__PURE__ */ t("div", { "aria-hidden": "true", className: "flex h-8 items-center px-1.5", children: /* @__PURE__ */ t(B, { className: "h-3 w-24 rounded" }) }), Js = ({
  groups: e = 2,
  rowsPerGroup: n = 4
}) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": "sidebar-chat-list-skeleton",
    className: "flex w-full flex-col gap-2",
    children: Array.from({ length: e }).map((r, a) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ t(Xs, {}),
      Array.from({ length: n }).map((i, l) => /* @__PURE__ */ t(Wr, {}, l))
    ] }, a))
  }
), Zs = ({
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
) }), Qs = ({
  chat: e,
  isActive: n,
  onClick: r
}) => {
  const a = V();
  if (e.loading)
    return /* @__PURE__ */ t(Wr, {});
  const i = !!e.unreadCount, l = e.presence ?? (e.avatar.type === "person" ? "offline" : void 0), s = e.avatar.type === "person" ? e.status : void 0;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: r,
      "aria-pressed": n,
      className: g(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        ie("focus-visible:ring-inset"),
        n ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "relative flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ t(Ue, { size: "xs", avatar: e.avatar }),
          l && /* @__PURE__ */ t(Zs, { presence: l, isActive: n })
        ] }),
        /* @__PURE__ */ t(
          fe,
          {
            tag: "span",
            className: g(
              "line-clamp-1 flex-1 py-0.5",
              e.typing ? "text-f1-foreground-secondary font-medium italic" : i ? "text-f1-foreground font-semibold " : "text-f1-foreground-secondary font-medium"
            ),
            lines: 1,
            children: e.typing ? a.chat.writing : e.label
          }
        ),
        (s || e.unreadCount) && /* @__PURE__ */ o("div", { className: "gap-1 flex items-center justify-center", children: [
          s && /* @__PURE__ */ t("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ t(
            oi,
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
}, eo = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a conversation — the synergy won't build itself."
}, to = ({ action: e }) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: e.onClick,
    className: g(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      ie("focus-visible:ring-inset")
    ),
    children: [
      e.icon && /* @__PURE__ */ t(U, { icon: e.icon, size: "md", className: "text-f1-icon" }),
      /* @__PURE__ */ t("span", { className: "line-clamp-1", children: e.label })
    ]
  }
), nu = ({
  actions: e = [],
  emptyState: n,
  loading: r = !1
}) => {
  const { groups: a, activeChatId: i, setActiveChat: l } = Ys(), s = We(), c = a.some((d) => d.chats.length > 0), u = { ...eo, ...n }, f = r && !c;
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-2 bg-transparent px-3", children: [
    e.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: e.map((d) => /* @__PURE__ */ t(to, { action: d }, d.label)) }),
    f && /* @__PURE__ */ t(Js, {}),
    !f && !c && /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-1 px-4 py-10 text-center", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl", role: "img", "aria-hidden": "true", children: u.emoji }),
      /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: u.title }),
      /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: u.description })
    ] }),
    !f && a.map((d) => {
      const m = d.chats.some((h) => h.unreadCount);
      return /* @__PURE__ */ t(
        Vt,
        {
          title: d.title,
          isOpen: d.isOpen,
          highlightWhenCollapsed: m,
          children: /* @__PURE__ */ t(Ce, { initial: !1, children: d.chats.map((h) => /* @__PURE__ */ t(
            J.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: s ? 0 : 0.15 },
              children: /* @__PURE__ */ t(
                Qs,
                {
                  chat: h,
                  isActive: h.id === i,
                  onClick: () => {
                    l(h.id), h.onClick?.();
                  }
                }
              )
            },
            h.id
          )) })
        },
        d.id
      );
    })
  ] });
};
function no({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: i = !1,
  additionalOptions: l = []
}) {
  const s = K(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(B, { className: "size-6" }),
    /* @__PURE__ */ t(B, { className: "h-3 w-14" })
  ] }) : e.length + (l?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    Sn,
    {
      company: s,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    ro,
    {
      companies: e,
      selected: s,
      onChange: r,
      additionalOptions: l,
      children: /* @__PURE__ */ t(
        Sn,
        {
          company: s,
          withNotification: i
        }
      )
    }
  ) });
}
const ro = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: i = []
}) => {
  const l = V(), [s, c] = D(!1), u = K(
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
      ...i.length ? [{ type: "separator" }] : [],
      ...i
    ],
    [e, i]
  ), f = (d) => {
    const m = i?.find((h) => h.value === d);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    r(d);
  };
  return /* @__PURE__ */ t(
    Qe,
    {
      label: l.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: u,
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
            ie()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              J.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(U, { icon: tr, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Sn = ({
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
        ci,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: nr, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(fe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function ru({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: i,
  onDropdownClick: l,
  hasActivityUpdates: s
}) {
  const c = V();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Re, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ie("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ t(
            we,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(fe, { className: "text-f1-foreground", children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    r && /* @__PURE__ */ t(ke, { label: c.notifications, shortcut: a, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        q,
        {
          icon: Jn,
          label: c.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(di, { type: "highlight", size: "sm", icon: nr }) })
    ] }) })
  ] });
}
function ao({ isExpanded: e }) {
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
function io() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = Oe(), i = $(null);
  return j(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Et,
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
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: !a }), children: /* @__PURE__ */ t(ao, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: g("hidden", { flex: a }), children: /* @__PURE__ */ t(U, { icon: be, size: "md" }) })
      ]
    }
  );
}
function au({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: i,
  isLoading: l = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      no,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: l,
        withNotification: a,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(io, {})
  ] });
}
function lo() {
  const [e, n] = D(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const Ur = Ie(void 0);
function so({ children: e }) {
  const [n, r] = D(!1), [a, i] = D(null);
  return /* @__PURE__ */ t(
    Ur.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: i },
      children: e
    }
  );
}
function Gt() {
  const e = ve(Ur);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const oo = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      U,
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
    e.tag && /* @__PURE__ */ t(Ee, { text: e.tag }),
    e.badge && /* @__PURE__ */ t(st, { value: e.badge, size: "sm", type: "bold" })
  ] })
] }), co = ({ item: e }) => {
  const { isActive: n } = Rt(), { label: r, icon: a, ...i } = e, l = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Te,
    {
      ...i,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ie("focus-visible:ring-inset"),
        l ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(oo, { item: e, active: l })
    }
  );
}, uo = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: i,
  total: l,
  onMove: s,
  onReorderFinish: c,
  isSortable: u = !0
}) => {
  const f = V(), { isDragging: d, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = Gt(), { isActive: b } = Rt(), x = b(e.href, { exact: e.exactMatch }), v = $(!1), [k, N] = D(!1), P = i === 0, R = i === l - 1, I = l === 1, F = K(() => {
    const y = [];
    return !I && !P && y.push({
      label: f.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: ui
    }), !I && !R && y.push({
      label: f.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: fi
    }), y.length > 0 && y.push({ type: "separator" }), y.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: rr,
      critical: !0
    }), y;
  }, [I, P, R, f, s, i, a, e]), W = () => {
    m(!0), N(!1), p(e.href || null), v.current = !0;
  }, _ = () => {
    m(!1), p(null), c(), setTimeout(() => {
      v.current = !1;
    }, 0);
  }, C = d && h === e.href, L = K(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      u && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      k && "bg-f1-background-secondary",
      C && "bg-f1-background-secondary"
    ),
    [x, k, C, u]
  ), T = K(() => /* @__PURE__ */ o(ee, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(mo, { tooltip: n, children: /* @__PURE__ */ o(
      Te,
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
            U,
            {
              icon: e.icon,
              size: "md",
              className: g(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ue, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            fe,
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
          k && "bg-f1-background-secondary opacity-100",
          C && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Re,
          {
            open: k,
            onOpenChange: N,
            items: F,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(U, { icon: St, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, k, C, F, n]);
  return u ? /* @__PURE__ */ t(
    gr,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: _,
      className: L,
      whileDrag: {
        scale: 1.05
      },
      children: T
    }
  ) : /* @__PURE__ */ t("div", { className: L, children: T });
}, xt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: i,
  currentOrder: l
}) => {
  const { isDragging: s, setIsDragging: c } = Gt(), u = $(!1), f = al(), d = () => {
    c(!0), u.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      u.current = !1, l && i?.(l);
    }, 0);
  }, h = (b) => {
    !s && !u.current && a?.(e, b);
  }, p = /* @__PURE__ */ t(
    Vt,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: h,
      isDragging: s,
      wasDragging: u,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            s && !u.current && "pointer-events-none"
          ),
          children: e.items.map((b, x) => /* @__PURE__ */ t(co, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    gr,
    {
      id: e.id,
      value: e,
      dragConstraints: r,
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
      children: p
    }
  ) : p;
};
function iu({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: i
}) {
  const l = $(null), s = e.filter(
    (b) => b.isSortable === !1
  ), [c, u] = D(
    e.filter((b) => b.isSortable !== !1)
  ), [f, d] = D(0), m = G((b) => {
    u(b);
  }, []), h = G(
    (b) => {
      r?.(b);
    },
    [r]
  ), p = lo();
  return /* @__PURE__ */ t(so, { children: /* @__PURE__ */ t(Qn, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    fo,
    {
      disableDragging: p,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: l,
      onCollapse: n,
      onDragEnd: h,
      favorites: i,
      onFavoritesChange: a,
      forceUpdate: () => d((b) => b + 1)
    },
    f
  ) }) });
}
function fo({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: i,
  onDragEnd: l,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: u,
  disableDragging: f = !1
}) {
  const d = V(), { isDragging: m } = Gt(), h = e.some((w) => w.isRoot), p = e.filter((w) => !w.isRoot).length > 0, b = n.length > 0, x = $(null), [v, k] = D(s), N = s.length > 0;
  j(() => {
    JSON.stringify(s) !== JSON.stringify(v) && k(s);
  }, [s]);
  const P = (w) => {
    k(w);
  }, R = G(
    (w) => {
      const S = v.filter((A) => A.href !== w.href);
      k(S), c?.(S);
    },
    [v, c]
  ), I = G(
    (w, S) => {
      if (S < 0 || S >= v.length) return;
      const A = [...v], [O] = A.splice(w, 1);
      A.splice(S, 0, O), k(A), c?.(A);
    },
    [v, c]
  ), [F, W] = D(!1), _ = $(null);
  j(() => {
    n.length > 0 && !F && (r([...n]), W(!0));
  }, [n, r, F]), j(() => {
    const w = () => {
      _.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
        a.current && n.length > 0 && u();
      }, 50);
    };
    return window.addEventListener("resize", w), () => {
      window.removeEventListener("resize", w), _.current !== null && window.clearTimeout(_.current);
    };
  }, [a, n, u]);
  const C = "flex flex-col gap-0.5", L = K(
    () => v.reduce(
      (w, S, A) => (S.label in w || (w[S.label] = []), w[S.label].push(A), w),
      {}
    ),
    [v]
  ), T = K(
    () => N && v.map((w, S) => /* @__PURE__ */ t(
      uo,
      {
        isSortable: !f,
        tooltip: (L[w.label] ?? []).length > 1 ? w.tooltip : void 0,
        item: w,
        dragConstraints: x,
        onRemove: R,
        index: S,
        total: v.length,
        onMove: I,
        onReorderFinish: () => {
          c?.(v);
        }
      },
      `${w.href}-${w.label}`
    )),
    [
      N,
      v,
      L,
      R,
      I,
      c,
      f
    ]
  ), y = "flex flex-col gap-3", z = K(() => n.map((w) => /* @__PURE__ */ t(
    xt,
    {
      category: w,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: i,
      onDragEnd: l,
      currentOrder: n
    },
    w.id
  )), [n, f, a, i, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => w.isRoot).map((w, S) => /* @__PURE__ */ t(
          xt,
          {
            category: w,
            onCollapse: i
          },
          `fixed-${S}`
        )) }),
        N && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(Vt, { title: d.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: C, children: T }) : /* @__PURE__ */ t(
          ln,
          {
            axis: "y",
            values: v,
            onReorder: P,
            className: C,
            children: T
          }
        ) }) }) }),
        p && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => !w.isRoot).map((w, S) => /* @__PURE__ */ t(
          xt,
          {
            category: w,
            onCollapse: i
          },
          `fixed-${S}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: y, children: z }) : /* @__PURE__ */ t(
              ln,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: y,
                children: z
              }
            )
          }
        )
      ]
    }
  );
}
const mo = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(ke, { description: e, children: n }) : n;
function lu({
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
        ie()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(U, { icon: ar, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(mi, { keys: r }) })
      ]
    }
  ) });
}
const Fn = ({ position: e }) => /* @__PURE__ */ t(
  J.div,
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
function ho({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: i, isSmallScreen: l } = Oe(), s = We(), [c, u] = Ct({ threshold: 1 }), [f, d] = Ct({ threshold: 1 }), m = V(), h = {
    x: {
      ease: i !== "locked" ? l ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !l ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, p = () => r ? Zi(r) && a ? hr(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ o(
    J.aside,
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
      transition: h,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(lt, { className: "h-full", children: [
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
            !u && /* @__PURE__ */ t(Fn, { position: "top" }, "shadow-scroll-top"),
            !d && /* @__PURE__ */ t(Fn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const su = oe(ho), po = () => /* @__PURE__ */ t("div", { className: "bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full", children: /* @__PURE__ */ t(
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
) }), go = ({
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
        pi({ variant: a }),
        hi({ size: "md" }),
        ie()
      ),
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "main flex h-8 min-w-0 flex-1 items-center justify-center",
            n ? "!pl-1.5 !pr-2" : "!px-1.5"
          ),
          children: [
            /* @__PURE__ */ t(U, { icon: e.icon, size: "md", color: "default" }),
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
            e.badge ? /* @__PURE__ */ t(po, {}) : null
          ]
        }
      )
    }
  );
}, ou = ({
  tabs: e,
  activeTab: n,
  onTabChange: r,
  search: a
}) => {
  const i = V(), l = a.placeholder ?? i.navigation.sidebar.search;
  return /* @__PURE__ */ o("div", { className: "mb-5 flex items-center justify-between gap-1 px-3", children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "group",
        "aria-label": i.navigation.sidebar.tabs.label,
        className: "flex items-center gap-1",
        children: e.map((s) => /* @__PURE__ */ t(
          go,
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
      q,
      {
        variant: "ghost",
        size: "md",
        icon: ar,
        label: l,
        hideLabel: !0,
        onClick: a.onClick
      }
    )
  ] });
}, bo = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, An = {
  approved: {
    icon: it,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: be,
    type: "critical",
    size: "sm"
  }
}, xo = {
  icon: er,
  type: "neutral",
  size: "sm"
}, vo = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, yo = (e) => e in An ? An[e] : xo;
function Tn(e) {
  return vo[e ?? "neutral"] ?? 0;
}
const wo = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const i = V(), l = n === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = i.approvals.statuses[r], c = K(() => a.map((u) => {
    const f = yo(u.status);
    return {
      firstName: u.firstName,
      lastName: u.lastName,
      src: u.avatar,
      badge: f
    };
  }).sort(
    (u, f) => Tn(f.badge?.type) - Tn(u.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ t(Ze, { text: s, variant: bo[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(ir, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, No = ({ steps: e }) => {
  const r = V().approvals.history, a = e.findIndex((i) => i.status === "pending");
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
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((i, l) => /* @__PURE__ */ o(ee, { children: [
        /* @__PURE__ */ t(
          wo,
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
}, cu = oe(
  Q("OneApprovalHistory", No)
), vt = (e, n) => typeof n == "string" && n in e;
function Dn(e, n, r) {
  const a = {};
  let i = !1;
  const l = gi(e);
  if (l !== void 0 && n.filters) {
    const u = n.filters, f = Object.fromEntries(
      Object.entries(l).filter(
        ([d]) => vt(u, d)
      )
    );
    (Object.keys(f).length > 0 || Object.keys(l).length === 0) && (r.setCurrentFilters(f), a.filters = f, i = !0);
  }
  const s = e.sortings;
  if (s === null)
    r.setCurrentSortings(null), a.sortings = null, i = !0;
  else if (s && n.sortings && vt(n.sortings, s.field)) {
    const u = {
      field: s.field,
      order: s.order
    };
    r.setCurrentSortings(u), a.sortings = u, i = !0;
  }
  typeof e.search == "string" && n.search?.enabled && (r.setCurrentSearch(e.search), a.search = e.search, i = !0);
  const c = e.grouping;
  if (c?.field !== void 0 && n.grouping && vt(n.grouping.groupBy, c.field)) {
    const u = {
      field: c.field,
      order: c.order
    };
    r.setCurrentGrouping(u), a.grouping = u, i = !0;
  }
  return i ? a : null;
}
function du(e) {
  const {
    source: n,
    collectionId: r,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: l,
    idProvider: s,
    itemUrl: c,
    getItemTitle: u,
    enabled: f = !0,
    restorePersistedState: d = !0,
    currentFilters: m,
    navigationMode: h = "url",
    deps: p = []
  } = e, b = bi(), x = il(n, p), [v, k] = D(null), N = v?.key === r && v.settled, P = $(x);
  P.current = x;
  const R = $(b);
  R.current = b;
  const I = $(null), F = m === void 0 ? null : JSON.stringify(m), W = $(m);
  W.current = m;
  const _ = $(null), C = () => {
    const M = W.current;
    M !== void 0 && (_.current = JSON.stringify(M), P.current.setCurrentFilters(M));
  };
  j(() => {
    if (!f || I.current === r) return;
    if (!d) {
      I.current = r, C(), k({ key: r, applied: null, settled: !1 });
      return;
    }
    let M = !1;
    return (async () => {
      let de = null;
      try {
        const ge = await R.current.get(
          r
        );
        ge && !M && (de = Dn(
          ge,
          P.current,
          P.current
        ));
      } catch {
      }
      M || (I.current = r, C(), k({ key: r, applied: de, settled: !1 }));
    })(), () => {
      M = !0;
    };
  }, [r, f, d]), j(() => {
    !N || F === null || _.current !== F && C();
  }, [N, F]), j(() => {
    if (!(!f || !d))
      return xi(r, async () => {
        try {
          const M = await R.current.get(
            r
          );
          if (!M) return;
          const te = P.current;
          Dn(
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
  }, [r, f, d]);
  const {
    data: L,
    paginationInfo: T,
    setPage: y,
    loadMore: z,
    isLoading: w,
    isInitialLoading: S
  } = vi(
    x,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && N,
      fetchParamsProvider: (M) => ({
        ...M,
        navigationFilters: x.currentNavigationFilters
      })
    },
    [JSON.stringify(x.currentNavigationFilters)]
  );
  j(() => {
    k(
      (M) => M && M.key === r && !M.settled ? { ...M, settled: !0 } : M
    );
  }, [v, r]);
  const A = c ?? n.itemUrl, O = ll({
    dataSource: x,
    data: L,
    paginationInfo: T,
    setPage: y,
    loadMore: z,
    isLoading: w,
    idProvider: s,
    itemUrl: A,
    activeItemId: a,
    defaultActiveItemId: i,
    onActiveItemChange: l
  }), se = typeof O.activeItemId == "string" || typeof O.activeItemId == "number" ? O.activeItemId : null, re = O.activeItem !== null, H = re && O.nextItem === null && O.hasNext, Se = re && O.previousItem === null && O.hasPrevious, ye = se !== null && (!re || H || Se), Fe = [
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
  ], { neighbors: ce, isSupported: pt } = sl({
    dataAdapter: x.dataAdapter,
    id: se,
    filters: x.currentFilters,
    sortings: Fe,
    search: x.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled: f && N && !S && !w && ye,
    fetchParamsProvider: (M) => ({
      ...M,
      navigationFilters: x.currentNavigationFilters
    })
  }), ze = K(() => s || (x.idProvider ? (M, te) => x.idProvider(M, te) : ol), [s, x.idProvider]), E = K(() => {
    if (!ye || ce === null) return O;
    const M = O.previousItem ?? ce.previous, te = O.nextItem ?? ce.next, de = (ge) => ge && A ? A(ge) ?? null : null;
    return {
      ...O,
      previousItem: M,
      nextItem: te,
      previousItemUrl: O.previousItemUrl ?? de(M),
      nextItemUrl: O.nextItemUrl ?? de(te),
      absoluteIndex: O.absoluteIndex ?? (ce.position !== void 0 ? ce.position - 1 : null),
      totalItems: O.totalItems ?? ce.total,
      hasPrevious: O.hasPrevious || M !== null,
      hasNext: O.hasNext || te !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: re ? O.goToPrevious : () => {
        ce.previous && O.setActiveItemId(
          ze(ce.previous)
        );
      },
      goToNext: re ? O.goToNext : () => {
        ce.next && O.setActiveItemId(
          ze(ce.next)
        );
      }
    };
  }, [
    O,
    ye,
    ce,
    re,
    A,
    ze
  ]), X = Ml(E, {
    getItemTitle: u,
    mode: h
  }), ne = f && N && pt && ye && ce === null, Z = $(null), ue = X ?? (ne ? Z.current : null);
  return j(() => {
    X !== null && (Z.current = X);
  }, [X]), {
    ...E,
    isNavigating: E.isNavigating || ne,
    isReady: N && !S,
    navigation: ue,
    appliedCollectionState: v?.applied ?? null,
    dataSource: x,
    data: L,
    paginationInfo: T,
    isLoading: w
  };
}
const Hr = Ie(null), uu = ({
  runtime: e,
  children: n
}) => /* @__PURE__ */ t(Hr.Provider, { value: e, children: n });
function De() {
  const e = ve(Hr);
  if (!e)
    throw new Error("useF0Chat must be used within an F0ChatProvider");
  return e;
}
const Vr = Ie(null), Co = ({
  children: e
}) => {
  const [n, r] = D(null), [a, i] = D(null), l = $(null), s = $(null), c = $(null);
  j(
    () => () => {
      c.current && clearTimeout(c.current);
    },
    []
  );
  const u = G((p) => {
    l.current = p;
  }, []), f = G((p) => {
    s.current = p;
  }, []), d = G((p) => {
    s.current?.(p);
  }, []), m = G((p) => {
    l.current?.(p), i(p), c.current && clearTimeout(c.current), c.current = setTimeout(() => i(null), 1600);
  }, []), h = K(
    () => ({
      replyTo: n,
      setReplyTo: r,
      highlightedId: a,
      jumpToMessage: m,
      registerScrollToMessage: u,
      registerFileDropHandler: f,
      dropFiles: d
    }),
    [
      n,
      a,
      m,
      u,
      f,
      d
    ]
  );
  return /* @__PURE__ */ t(Vr.Provider, { value: h, children: e });
};
function _e() {
  const e = ve(Vr);
  if (!e)
    throw new Error("useChatUI must be used within a ChatUIProvider");
  return e;
}
const ko = ({
  message: e,
  onRemove: n
}) => {
  const r = V(), a = e.attachments?.find((l) => l.kind === "image"), i = e.body || e.attachments?.[0]?.name || "";
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-start justify-center gap-2 rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(U, { icon: Ot, size: "md", color: "default" }) }),
    a && /* @__PURE__ */ t(
      "img",
      {
        src: a.url,
        alt: "",
        className: "h-9 w-9 shrink-0 rounded-sm object-cover"
      }
    ),
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 py-0.5", children: [
      /* @__PURE__ */ t(fe, { className: "text-sm font-semibold text-f1-foreground-secondary", children: e.author.name }),
      /* @__PURE__ */ t(
        fe,
        {
          className: "text-sm text-f1-foreground-secondary",
          lines: 2,
          children: i
        }
      )
    ] }),
    /* @__PURE__ */ t(
      ae,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        label: r.chat.removeQuote,
        icon: be,
        onClick: n
      }
    )
  ] }) });
}, Io = () => /* @__PURE__ */ t("span", { className: "flex items-center gap-1", "aria-hidden": "true", children: [0, 1, 2].map((e) => /* @__PURE__ */ t(
  "span",
  {
    className: "h-1.5 w-1.5 animate-bounce rounded-full bg-f1-foreground-secondary",
    style: { animationDelay: `${e * 120}ms` }
  },
  e
)) }), So = () => {
  const e = V(), { typingUsers: n, channel: r } = De();
  if (n.length === 0) return null;
  let a = e.chat.writing;
  return r.type === "group" && (n.length === 1 ? a = e.chat.isTyping.replace("{{name}}", n[0].name) : n.length === 2 ? a = e.chat.twoTyping.replace("{{first}}", n[0].name).replace("{{second}}", n[1].name) : a = e.chat.severalTyping), /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ o("div", { className: "flex items-center gap-2 rounded-[10px] bg-f1-background-secondary py-1.5 pl-2.5 pr-2", children: [
    /* @__PURE__ */ t(Io, {}),
    /* @__PURE__ */ t("span", { className: "text-sm font-medium text-f1-foreground-secondary", children: a })
  ] }) });
}, Fo = 140, Ao = () => {
  const e = V(), { sendMessage: n, onInputActivity: r, uploadFiles: a, transcribe: i } = De(), { replyTo: l, setReplyTo: s, registerFileDropHandler: c } = _e(), [u, f] = D(""), [d, m] = D([]), h = $(null), p = $(null), b = G(() => {
    const y = h.current;
    y && (y.style.height = "auto", y.style.height = `${Math.min(y.scrollHeight, Fo)}px`);
  }, []), x = $(""), v = G(
    (y) => {
      const z = x.current;
      f(z ? `${z} ${y}` : y), requestAnimationFrame(b);
    },
    [b]
  ), k = yi({
    onTranscribe: i,
    onPartial: v,
    onFinal: v,
    onError: () => {
    }
  }), N = k.status === "transcribing", P = k.status === "recording", R = !!i && k.isSupported, I = (u.trim().length > 0 || d.length > 0) && !N, F = G(
    (y) => {
      f(y.target.value), r(), b();
    },
    [b, r]
  ), W = G(
    async (y) => {
      if (y.length === 0 || !a) return;
      const z = await a(y);
      m((w) => [...w, ...z]);
    },
    [a]
  );
  j(() => {
    c((y) => {
      W(y);
    });
  }, [c, W]);
  const _ = G(() => {
    if (!I) return;
    n({
      body: u.trim(),
      attachments: d.length > 0 ? d : void 0,
      replyToId: l?.id
    }), f(""), m([]), s(null);
    const y = h.current;
    y && (y.style.height = "auto");
  }, [d, I, l, n, s, u]), C = G(
    (y) => {
      y.key === "Enter" && !y.shiftKey && (y.preventDefault(), _());
    },
    [_]
  ), L = G(() => {
    x.current = u, k.start();
  }, [k, u]), T = e.chat.placeholder;
  return /* @__PURE__ */ t("div", { className: "shrink-0 p-3 pt-1", children: /* @__PURE__ */ t("div", { className: "mx-auto w-full max-w-content", children: /* @__PURE__ */ o("div", { className: "rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
    l && /* @__PURE__ */ t(
      ko,
      {
        message: l,
        onRemove: () => s(null)
      }
    ),
    /* @__PURE__ */ t(So, {}),
    d.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-1 px-1 pt-1", children: d.map((y, z) => /* @__PURE__ */ t(
      lr,
      {
        size: "md",
        file: {
          name: y.name,
          type: y.mimeType ?? (y.kind === "image" ? "image/png" : "")
        },
        actions: [
          {
            label: e.chat.removeFile,
            icon: be,
            onClick: () => m(
              (w) => w.filter((S, A) => A !== z)
            )
          }
        ]
      },
      `${y.name}-${z}`
    )) }),
    /* @__PURE__ */ t(
      "textarea",
      {
        ref: h,
        value: u,
        onChange: F,
        onKeyDown: C,
        rows: 1,
        placeholder: P ? e.chat.listening : T,
        className: g(
          "w-full resize-none bg-transparent px-3.5 pt-3 text-md text-f1-foreground",
          "placeholder:text-f1-foreground-secondary focus:outline-none"
        )
      }
    ),
    P ? (
      // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 p-2", children: [
        /* @__PURE__ */ t(
          wi,
          {
            stream: k.stream,
            className: "min-w-0 flex-1"
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ t(
            ae,
            {
              variant: "outline",
              size: "md",
              hideLabel: !0,
              label: e.chat.cancelRecording,
              icon: be,
              onClick: k.cancel
            }
          ),
          /* @__PURE__ */ t(
            ae,
            {
              variant: "default",
              size: "md",
              hideLabel: !0,
              label: e.chat.stopRecording,
              icon: it,
              onClick: k.stop
            }
          )
        ] })
      ] })
    ) : /* @__PURE__ */ o("div", { className: "flex items-center justify-between p-2", children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: p,
          type: "file",
          multiple: !0,
          className: "hidden",
          onChange: (y) => {
            W(Array.from(y.target.files ?? [])), y.target.value = "";
          }
        }
      ),
      /* @__PURE__ */ t(
        ae,
        {
          variant: "outline",
          size: "md",
          hideLabel: !0,
          label: e.chat.attachFile,
          icon: Ni,
          onClick: () => p.current?.click(),
          disabled: !a || N
        }
      ),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        R && /* @__PURE__ */ t(
          ae,
          {
            variant: "outline",
            size: "md",
            hideLabel: !0,
            label: e.chat.recordAudio,
            icon: Ci,
            onClick: L,
            loading: N
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "default",
            size: "md",
            hideLabel: !0,
            label: e.chat.send,
            icon: Wn,
            onClick: _,
            disabled: !I
          }
        )
      ] })
    ] })
  ] }) }) });
}, To = ({
  visible: e
}) => {
  const n = V();
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
        /* @__PURE__ */ t(U, { icon: ki, size: "lg", color: "bold" }),
        /* @__PURE__ */ t("p", { className: "text-base text-f1-foreground", children: n.chat.dropFilesHere })
      ]
    }
  );
}, Kt = ({
  user: e,
  children: n
}) => {
  const r = V();
  return /* @__PURE__ */ o(sr, { openDelay: 150, closeDelay: 100, children: [
    /* @__PURE__ */ t(or, { asChild: !0, children: n }),
    /* @__PURE__ */ t(
      cr,
      {
        align: "start",
        className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
        children: /* @__PURE__ */ t(
          Ii,
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
}, Do = () => /* @__PURE__ */ t("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background", children: /* @__PURE__ */ t("span", { className: "h-2 w-2 rounded-full bg-f1-background-positive-bold" }) }), Lo = ({
  channel: e,
  isFullscreen: n,
  onToggleFullscreen: r,
  onClose: a
}) => {
  const i = V(), l = e.type === "dm" && e.presence === "online", s = /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "relative shrink-0", children: [
      /* @__PURE__ */ t(Ue, { size: "sm", avatar: e.avatar }),
      l && /* @__PURE__ */ t(Do, {})
    ] }),
    /* @__PURE__ */ t("span", { className: "truncate text-base font-medium text-f1-foreground", children: e.title }),
    e.muted && /* @__PURE__ */ t(
      U,
      {
        icon: Si,
        size: "sm",
        color: "secondary",
        "aria-label": i.chat.muted
      }
    )
  ] });
  return /* @__PURE__ */ o("header", { className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3", children: [
    e.user ? /* @__PURE__ */ t(Kt, { user: e.user, children: s }) : s,
    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      r && /* @__PURE__ */ t(
        ae,
        {
          variant: "ghost",
          hideLabel: !0,
          label: n ? i.chat.collapse : i.chat.expand,
          icon: n ? Fi : Ai,
          onClick: r
        }
      ),
      a && /* @__PURE__ */ t(
        ae,
        {
          variant: "ghost",
          hideLabel: !0,
          label: i.chat.close,
          icon: be,
          onClick: a
        }
      )
    ] })
  ] });
}, Po = 1440 * 60 * 1e3, Ln = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function qt(e, n) {
  return Math.round((Ln(n) - Ln(e)) / Po);
}
function Yt(e, n) {
  return new Intl.DateTimeFormat(n, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(e);
}
function Ro(e, n, r, a) {
  const i = qt(e, n);
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
function nt(e, n, r, a) {
  return `${Ro(e, n, r, a)} ${Yt(e, a)}`;
}
function Eo(e, n, r, a) {
  return qt(e, n) <= 0 ? Yt(e, a) : nt(e, n, r, a);
}
const Oo = 1200 * 1e3, _o = (e, n, r) => {
  if (!n) return !0;
  const a = new Date(n.createdAt), i = new Date(e.createdAt);
  return qt(a, i) !== 0 ? !0 : i.getTime() - a.getTime() > r;
};
function zo(e, n = Oo) {
  const r = [];
  return e.forEach((a, i) => {
    const l = e[i - 1];
    _o(a, l, n) && r.push({
      key: `sep-${a.id}`,
      separatorAt: a.createdAt,
      runs: []
    });
    const s = r[r.length - 1], c = s.runs[s.runs.length - 1];
    c && c.author.id === a.author.id ? c.messages.push(a) : s.runs.push({
      key: `run-${a.id}`,
      author: a.author,
      isMine: a.isMine,
      messages: [a]
    });
  }), r;
}
const $o = 80, Bo = 120;
function Mo({
  viewportRef: e,
  endRef: n,
  messages: r,
  hasMoreOlder: a,
  loadingOlder: i,
  onReachTop: l
}) {
  const [s, c] = D(!1), [u, f] = D(!0), d = $(!0), m = $(r[0]?.id ?? null), h = $(r.at(-1)?.id ?? null), p = $(r.length), b = $(0), x = $(!1), v = G(
    (N = "smooth") => {
      n.current?.scrollIntoView({ behavior: N });
    },
    [n]
  ), k = G(() => {
    const N = e.current;
    if (!N) return;
    const { scrollTop: P, scrollHeight: R, clientHeight: I } = N, F = R - P - I, W = F < $o;
    d.current = W, f(W), c(F > I * 0.5), P < Bo && a && !i && (b.current = R, l());
  }, [e, a, i, l]);
  return Mt(() => {
    const N = e.current;
    if (!N) return;
    if (!x.current && r.length > 0) {
      n.current?.scrollIntoView({ behavior: "auto" }), f(!0), x.current = !0, m.current = r[0]?.id ?? null, h.current = r.at(-1)?.id ?? null, p.current = r.length;
      return;
    }
    const P = r[0]?.id ?? null, R = r.at(-1), I = r.length > p.current, F = I && P !== m.current, W = I && R?.id !== h.current;
    F && b.current ? (N.scrollTop += N.scrollHeight - b.current, b.current = 0) : W && (R?.isMine || d.current) && (n.current?.scrollIntoView({ behavior: "smooth" }), f(!0)), m.current = P, h.current = R?.id ?? null, p.current = r.length;
  }, [r, e, n]), { scrolledUp: s, atBottom: u, scrollToBottom: v, handleScroll: k };
}
const jo = ({
  message: e,
  isMine: n,
  author: r
}) => {
  const a = V();
  return e.deleted ? /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "w-fit max-w-full rounded-xl px-3.5 py-2.5",
        "border border-solid border-f1-border-secondary",
        "text-sm italic text-f1-foreground-secondary"
      ),
      children: a.chat.deletedMessage
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "w-fit max-w-full rounded-xl px-3.5 py-2.5 text-f1-foreground font-normal",
        "whitespace-pre-wrap break-words",
        // Mine: grey. Others: white with a subtle border (matches the design).
        n ? "bg-f1-background-secondary" : "border border-solid border-f1-border-secondary bg-f1-background",
        e.status === "failed" && "opacity-60"
      ),
      children: [
        r && /* @__PURE__ */ t(Kt, { user: r, children: /* @__PURE__ */ t("span", { className: "mb-0.5 block w-fit cursor-default text-sm font-medium text-f1-foreground-secondary", children: r.name }) }),
        e.body
      ]
    }
  );
}, Pn = ({
  icon: e,
  ariaLabel: n,
  value: r
}) => /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
  /* @__PURE__ */ t(U, { icon: e, size: "md", "aria-label": n }),
  /* @__PURE__ */ t("span", { className: "text-sm font-medium text-f1-foreground", children: r })
] }), Wo = ({
  message: e
}) => {
  const n = V(), { channel: r, getMessageReaders: a } = De(), i = { today: n.chat.today, yesterday: n.chat.yesterday }, l = /* @__PURE__ */ new Date(), s = e.isMine && r.type === "group" && !!a, [c, u] = D([]), [f, d] = D(void 0), [m, h] = D(0), [p, b] = D(!1), x = G(async () => {
    if (!(!a || p)) {
      b(!0);
      try {
        const N = await a(e.id, {
          cursor: f ?? null
        });
        u((P) => [...P, ...N.readers]), h(N.total), d(N.nextCursor);
      } finally {
        b(!1);
      }
    }
  }, [a, p, e.id, f]);
  j(() => {
    s && x();
  }, [s]);
  const v = f !== null, k = (N) => {
    const P = N.currentTarget;
    v && !p && P.scrollHeight - P.scrollTop - P.clientHeight < 80 && x();
  };
  return /* @__PURE__ */ o("div", { className: "flex w-fit flex-col", children: [
    /* @__PURE__ */ o("div", { className: "gap-2 p-2 pr-4 flex flex-col", children: [
      /* @__PURE__ */ t(
        Pn,
        {
          icon: it,
          ariaLabel: n.chat.sentAt,
          value: nt(new Date(e.createdAt), l, i)
        }
      ),
      e.isMine && r.type === "dm" && e.readAt && /* @__PURE__ */ t(
        Pn,
        {
          icon: en,
          ariaLabel: n.chat.read,
          value: nt(new Date(e.readAt), l, i)
        }
      )
    ] }),
    s && /* @__PURE__ */ o("div", { className: "flex min-h-0 flex-col w-56 ", children: [
      /* @__PURE__ */ o("div", { className: "flex px-2 pb-2 flex-row gap-1 items-center border-solid border-b border-0 border-f1-border-secondary", children: [
        /* @__PURE__ */ t(U, { icon: en }),
        /* @__PURE__ */ t("span", { className: "text-sm font-medium text-f1-foreground", children: n.chat.readByLabel.replace("{{count}}", String(m)) })
      ] }),
      /* @__PURE__ */ o("div", { className: "max-h-64 overflow-y-auto p-2", onScroll: k, children: [
        /* @__PURE__ */ t("ul", { className: "flex flex-col", children: c.map((N) => /* @__PURE__ */ o(
          "li",
          {
            className: "flex items-center gap-2 rounded px-1 py-1.5",
            children: [
              /* @__PURE__ */ t(
                Ue,
                {
                  size: "xs",
                  avatar: N.user.avatar ?? {
                    type: "person",
                    firstName: N.user.name,
                    lastName: ""
                  }
                }
              ),
              /* @__PURE__ */ t(fe, { className: "flex-1 truncate text-sm text-f1-foreground", children: N.user.name }),
              N.readAt && /* @__PURE__ */ t("span", { className: "text-sm text-f1-foreground-secondary", children: Yt(new Date(N.readAt)) })
            ]
          },
          N.user.id
        )) }),
        p && /* @__PURE__ */ t("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ t(je, { size: "small" }) })
      ] })
    ] })
  ] });
}, Uo = ["👍", "❤️", "😂", "🎉", "😮", "🙏"], Gr = "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium transition-colors hover:bg-f1-background-secondary", yt = ({
  icon: e,
  label: n,
  onClick: r,
  critical: a,
  trailing: i
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    onClick: r,
    className: g(
      Gr,
      a ? "text-f1-foreground-critical" : "text-f1-foreground",
      ie("focus-visible:ring-inset")
    ),
    children: [
      /* @__PURE__ */ t(
        U,
        {
          icon: e,
          size: "md",
          className: a ? "text-f1-icon-critical" : "text-f1-icon"
        }
      ),
      /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: n }),
      i
    ]
  }
), Ho = ({
  message: e,
  isMine: n,
  open: r,
  onOpenChange: a
}) => {
  const i = V(), { toggleReaction: l, deleteMessage: s } = De(), { setReplyTo: c } = _e(), u = (d) => {
    l(e.id, d), a(!1);
  }, f = (d) => () => {
    d(), a(!1);
  };
  return /* @__PURE__ */ o(Kn, { open: r, onOpenChange: a, children: [
    /* @__PURE__ */ t(qn, { asChild: !0, children: /* @__PURE__ */ t(
      ae,
      {
        variant: "outline",
        hideLabel: !0,
        label: i.chat.moreActions,
        icon: Ti,
        pressed: r
      }
    ) }),
    /* @__PURE__ */ o(
      Yn,
      {
        align: n ? "end" : "start",
        className: "w-fit rounded-lg border border-solid border-f1-border-secondary p-0",
        children: [
          /* @__PURE__ */ o("div", { className: "flex items-center p-1", children: [
            Uo.map((d) => /* @__PURE__ */ t(
              ae,
              {
                label: d,
                emoji: d,
                variant: "ghost",
                "aria-label": d,
                onClick: () => u(d),
                className: "h-8 w-8 rounded text-base hover:bg-f1-background-secondary-hover"
              },
              d
            )),
            /* @__PURE__ */ t(
              ct,
              {
                size: "md",
                variant: "ghost",
                label: i.chat.react,
                onSelect: u
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "h-px bg-f1-border-secondary" }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5 p-1", children: [
            /* @__PURE__ */ t(
              yt,
              {
                icon: Ot,
                label: i.chat.reply,
                onClick: f(() => c(e))
              }
            ),
            /* @__PURE__ */ t(
              yt,
              {
                icon: Di,
                label: i.chat.copy,
                onClick: f(() => {
                  navigator.clipboard?.writeText(e.body);
                })
              }
            ),
            /* @__PURE__ */ o(sr, { openDelay: 80, closeDelay: 120, children: [
              /* @__PURE__ */ t(or, { asChild: !0, children: /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: g(Gr, "text-f1-foreground"),
                  children: [
                    /* @__PURE__ */ t(U, { icon: Li, size: "md", className: "text-f1-icon" }),
                    /* @__PURE__ */ t("span", { className: "line-clamp-1 flex-1", children: i.chat.info }),
                    /* @__PURE__ */ t(
                      U,
                      {
                        icon: at,
                        size: "sm",
                        className: "text-f1-icon-secondary"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ t(
                cr,
                {
                  side: "right",
                  align: "start",
                  sideOffset: 8,
                  className: "w-fit rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 text-f1-foreground shadow-md",
                  children: /* @__PURE__ */ t(Wo, { message: e })
                }
              )
            ] }),
            n && /* @__PURE__ */ t(
              yt,
              {
                icon: rr,
                label: i.chat.delete,
                onClick: f(() => s(e.id)),
                critical: !0
              }
            )
          ] })
        ]
      }
    )
  ] });
}, Vo = (e, n) => {
  const r = document.createElement("a");
  r.href = e, r.download = n, r.rel = "noreferrer", r.click();
}, Go = ({
  message: e,
  isMine: n
}) => {
  const r = V(), a = e.attachments;
  if (!a || a.length === 0) return null;
  const i = a.filter((c) => c.kind === "image"), l = a.filter((c) => c.kind === "file"), s = i.length === 1;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-1",
        n ? "items-end" : "items-start"
      ),
      children: [
        i.length > 0 && /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: i.map((c, u) => /* @__PURE__ */ t(
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
                  s ? "max-h-60 max-w-full" : "h-28 w-28"
                )
              }
            )
          },
          `${c.url}-${u}`
        )) }),
        l.length > 0 && // Files flow side by side and wrap, instead of stacking vertically.
        /* @__PURE__ */ t("div", { className: g("flex flex-wrap gap-1", n && "justify-end"), children: l.map((c, u) => /* @__PURE__ */ t(
          lr,
          {
            size: "md",
            file: { name: c.name, type: c.mimeType ?? "" },
            actions: [
              {
                label: r.chat.download,
                icon: Pi,
                onClick: () => Vo(c.url, c.name)
              }
            ]
          },
          `${c.url}-${u}`
        )) })
      ]
    }
  );
}, Ko = ({
  message: e,
  isMine: n
}) => {
  const r = V(), { toggleReaction: a } = De();
  return !e.reactions || e.reactions.length === 0 ? null : /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-wrap items-center gap-1 py-1",
        n && "justify-end"
      ),
      children: [
        e.reactions.map((i) => (
          // Key includes count/own-state so the kit pill re-syncs with the
          // runtime after an external toggle (the pill is otherwise uncontrolled).
          /* @__PURE__ */ t(
            Dr,
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
          ct,
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
}, qo = ({
  reply: e,
  isMine: n
}) => {
  const { jumpToMessage: r } = _e(), a = e.attachments?.find((l) => l.kind === "image"), i = e.body || e.attachments?.[0]?.name || "";
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: () => r(e.id),
      className: g(
        "flex max-w-[80%] items-center gap-2 rounded-md pb-3 text-left text-f1-foreground-tertiary transition-colors hover:text-f1-foreground-secondary",
        n ? "self-end pr-2" : "self-start pl-2"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ t(U, { icon: Ot }) }),
        a && /* @__PURE__ */ t(
          "img",
          {
            src: a.url,
            alt: "",
            className: "h-9 w-9 shrink-0 rounded-sm object-cover"
          }
        ),
        /* @__PURE__ */ t("div", { className: "min-w-0 truncate text-base leading-5", children: i })
      ]
    }
  );
}, Yo = ({
  message: e,
  isMine: n,
  author: r,
  bubbleGutter: a,
  belowGutter: i
}) => {
  const [l, s] = D(!1), { highlightedId: c } = _e(), u = c === e.id, f = !e.deleted && (e.reactions?.length ?? 0) > 0, d = !e.deleted && (e.attachments?.length ?? 0) > 0, m = e.deleted || e.body.trim().length > 0, h = m || d;
  return /* @__PURE__ */ o(
    "div",
    {
      "data-msg-id": e.id,
      className: g(
        "group flex flex-col",
        n ? "items-end" : "items-start"
      ),
      children: [
        e.replyTo && !e.deleted && /* @__PURE__ */ t(qo, { reply: e.replyTo, isMine: n }),
        h && /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "flex w-full gap-2",
              n ? "flex-row-reverse items-end" : "items-end"
            ),
            children: [
              a,
              /* @__PURE__ */ o(
                "div",
                {
                  className: g(
                    "flex min-w-0 items-end gap-1",
                    n ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: g(
                          "flex max-w-full flex-col gap-1 rounded-xl",
                          n ? "items-end" : "items-start",
                          u && "ring-1 ring-f1-special-ring ring-offset-2 transition-shadow",
                          "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                          l && "bg-f1-background-hover"
                        ),
                        children: [
                          d && /* @__PURE__ */ t(Go, { message: e, isMine: n }),
                          m && /* @__PURE__ */ t(jo, { message: e, isMine: n, author: r })
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
                          Ho,
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
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ko, { message: e, isMine: n }) })
        ] })
      ]
    }
  );
}, Xo = ({
  message: e,
  isGroup: n
}) => {
  const r = V(), a = Eo(new Date(e.createdAt), /* @__PURE__ */ new Date(), {
    today: r.chat.today,
    yesterday: r.chat.yesterday
  });
  let i = a;
  return e.isMine && (e.status === "failed" ? i = r.chat.error : e.status === "read" ? i = n && e.readByCount ? r.chat.readBy.replace("{{count}}", String(e.readByCount)) : `${r.chat.read} ${a}` : e.status === "sent" && (i = `${r.chat.sent} ${a}`)), /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "px-1 pt-1 text-xs text-f1-foreground-secondary",
        e.isMine ? "text-right" : "text-left"
      ),
      children: i
    }
  );
}, Rn = (e) => /* @__PURE__ */ t(
  Ue,
  {
    size: "xs",
    avatar: e.avatar ?? {
      type: "person",
      firstName: e.name,
      lastName: ""
    }
  }
), Jo = ({
  run: e,
  isGroup: n,
  lastMessageId: r
}) => {
  const { isMine: a, author: i, messages: l } = e, s = n && !a, c = l.find((f) => f.id === r), u = s ? /* @__PURE__ */ t("span", { "aria-hidden": !0, className: "invisible shrink-0", children: Rn(i) }) : void 0;
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
    l.map((f, d) => /* @__PURE__ */ t(
      Yo,
      {
        message: f,
        isMine: a,
        author: s && d === 0 ? i : void 0,
        bubbleGutter: s ? d === l.length - 1 ? /* @__PURE__ */ t(Kt, { user: i, children: /* @__PURE__ */ t("span", { className: "shrink-0 cursor-default", children: Rn(i) }) }) : u : void 0,
        belowGutter: u
      },
      f.id
    )),
    c && /* @__PURE__ */ o("div", { className: "flex w-full gap-2", children: [
      u,
      /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Xo, { message: c, isGroup: n }) })
    ] })
  ] });
}, Zo = ({ at: e }) => {
  const n = V(), r = nt(new Date(e), /* @__PURE__ */ new Date(), {
    today: n.chat.today,
    yesterday: n.chat.yesterday
  });
  return /* @__PURE__ */ t("div", { className: "flex justify-center py-0", children: /* @__PURE__ */ t("span", { className: "text-xs font-medium text-f1-foreground-secondary", children: r }) });
}, Qo = () => {
  const e = V();
  return /* @__PURE__ */ o("div", { className: "flex items-center gap-2 py-2", children: [
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border" }),
    /* @__PURE__ */ t("span", { className: "text-md font-medium text-f1-foreground", children: e.chat.newMessages }),
    /* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, ec = 5e3, tc = () => {
  const e = V(), {
    messages: n,
    channel: r,
    hasMoreOlder: a,
    loadingOlder: i,
    loadOlder: l,
    unreadCount: s,
    firstUnreadId: c,
    markRead: u
  } = De(), f = $(null), d = $(null), { registerScrollToMessage: m } = _e();
  j(() => {
    m((y) => {
      f.current?.querySelector(`[data-msg-id="${y}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, [m]);
  const { scrolledUp: h, atBottom: p, scrollToBottom: b, handleScroll: x } = Mo({
    viewportRef: f,
    endRef: d,
    messages: n,
    hasMoreOlder: a,
    loadingOlder: i,
    onReachTop: l
  }), [v, k] = D(!1), N = p && v;
  j(() => {
    N && s > 0 && u?.();
  }, [N, s, u]);
  const [P, R] = D(c), I = $(null);
  j(() => {
    c && !N ? (R(c), I.current && (clearTimeout(I.current), I.current = null)) : P && !I.current && (I.current = setTimeout(() => {
      R(null), I.current = null;
    }, ec));
  }, [c, N, P]), j(
    () => () => {
      I.current && clearTimeout(I.current);
    },
    []
  );
  const F = zo(n), W = n.at(-1)?.id ?? null, _ = r.type === "group";
  let C = null;
  if (P)
    for (const y of F) {
      const z = y.runs.find(
        (w) => w.messages.some((S) => S.id === P)
      );
      if (z) {
        C = z.key;
        break;
      }
    }
  const L = G(() => {
    b();
  }, [b]), T = h;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative min-h-0 flex-1",
      onMouseEnter: () => k(!0),
      onMouseLeave: () => k(!1),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: f,
            onScroll: x,
            className: "absolute inset-0 overflow-y-auto px-4",
            children: [
              i && /* @__PURE__ */ t(
                "div",
                {
                  className: "flex justify-center py-3",
                  "aria-label": e.chat.loadingOlder,
                  children: /* @__PURE__ */ t(je, { size: "small" })
                }
              ),
              /* @__PURE__ */ t("div", { className: "mx-auto flex w-full max-w-content flex-col gap-6 pb-6 pt-2", children: F.map((y) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: [
                /* @__PURE__ */ t(Zo, { at: y.separatorAt }),
                y.runs.map((z) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: [
                  z.key === C && /* @__PURE__ */ t(Qo, {}),
                  /* @__PURE__ */ t(
                    Jo,
                    {
                      run: z,
                      isGroup: _,
                      lastMessageId: W
                    }
                  )
                ] }, z.key))
              ] }, y.key)) }),
              /* @__PURE__ */ t("div", { ref: d })
            ]
          }
        ),
        /* @__PURE__ */ t(Ce, { children: T && // Centered via flex (inset-x-0 + justify-center) so the motion-driven
        // `scale` transform doesn't fight a `-translate-x-1/2`.
        /* @__PURE__ */ t(
          J.div,
          {
            className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t("div", { className: "pointer-events-auto rounded-md bg-f1-background", children: /* @__PURE__ */ t(
              ae,
              {
                onClick: L,
                variant: s === 0 ? "outline" : "default",
                icon: Ri,
                label: s > 0 ? e.chat.unreadCount.replace(
                  "{{count}}",
                  String(s)
                ) : e.chat.scrollToBottom,
                hideLabel: s === 0
              }
            ) })
          }
        ) })
      ]
    }
  );
}, Xt = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary", children: e }), nc = () => {
  const e = V();
  return /* @__PURE__ */ t(Xt, { children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-3", children: [
    /* @__PURE__ */ t(je, { size: "medium" }),
    /* @__PURE__ */ t("span", { children: e.chat.connecting })
  ] }) });
}, rc = () => {
  const e = V();
  return /* @__PURE__ */ t(Xt, { children: e.chat.error });
}, ac = () => {
  const e = V();
  return /* @__PURE__ */ t(Xt, { children: e.chat.emptyConversation });
}, qe = (e) => e.dataTransfer?.types?.includes("Files"), ic = ({
  isFullscreen: e,
  onToggleFullscreen: n,
  onClose: r
}) => {
  const { channel: a, status: i, messages: l } = De(), { dropFiles: s } = _e(), c = $(0), [u, f] = D(!1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative flex h-full min-h-0 w-full flex-col",
      onDragEnter: (d) => {
        qe(d) && (d.preventDefault(), d.stopPropagation(), c.current++, f(!0));
      },
      onDragOver: (d) => {
        qe(d) && (d.preventDefault(), d.stopPropagation());
      },
      onDragLeave: (d) => {
        qe(d) && (d.preventDefault(), d.stopPropagation(), c.current--, c.current <= 0 && (c.current = 0, f(!1)));
      },
      onDrop: (d) => {
        if (!qe(d)) return;
        d.preventDefault(), d.stopPropagation(), c.current = 0, f(!1);
        const m = Array.from(d.dataTransfer.files);
        m.length > 0 && s(m);
      },
      children: [
        /* @__PURE__ */ t(
          Lo,
          {
            channel: a,
            isFullscreen: e,
            onToggleFullscreen: n,
            onClose: r
          }
        ),
        i === "connecting" ? /* @__PURE__ */ t(nc, {}) : i === "error" ? /* @__PURE__ */ t(rc, {}) : l.length === 0 ? /* @__PURE__ */ t(ac, {}) : /* @__PURE__ */ t(tc, {}),
        /* @__PURE__ */ t(Ao, {}),
        /* @__PURE__ */ t(To, { visible: u })
      ]
    }
  );
}, fu = (e) => /* @__PURE__ */ t(Co, { children: /* @__PURE__ */ t(ic, { ...e }) }), Jt = {
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
}, lc = Ne({
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
      ...Jt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), sc = me.forwardRef(function({ className: n, gap: r, children: a, tileSize: i, ...l }, s) {
  return /* @__PURE__ */ t("div", { className: g("@container", "grow"), ref: s, ...l, children: /* @__PURE__ */ t(
    "div",
    {
      className: g(lc({ gap: r, tileSize: i }), n),
      ref: s,
      ...l,
      children: a
    }
  ) });
}), oc = Ne({
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
}), Kr = Y(function({
  className: n,
  grow: r,
  basis: a,
  shrink: i,
  paddingX: l,
  paddingY: s,
  inline: c,
  overflow: u,
  maxWidth: f,
  justifyContent: d,
  alignItems: m,
  height: h,
  width: p,
  ...b
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        oc({
          paddingX: l,
          basis: a,
          paddingY: s,
          grow: r,
          shrink: i,
          inline: c,
          overflow: u,
          maxWidth: f,
          justifyContent: d,
          alignItems: m,
          height: h,
          width: p
        }),
        n
      ),
      ref: x,
      ...b
    }
  );
}), cc = Ne({
  base: "flex-row",
  variants: {
    gap: {
      ...Jt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), dc = me.forwardRef(function({ className: n, gap: r, wrap: a, ...i }, l) {
  return /* @__PURE__ */ t(
    Kr,
    {
      className: g(cc({ gap: r, wrap: a }), n),
      ref: l,
      ...i
    }
  );
}), uc = Ne({
  base: "flex-col",
  variants: {
    gap: {
      ...Jt
    }
  },
  defaultVariants: {}
}), fc = Y(function({ className: n, gap: r, children: a, ...i }, l) {
  return /* @__PURE__ */ t(
    Kr,
    {
      className: g(uc({ gap: r }), n),
      ref: l,
      ...i,
      children: a
    }
  );
}), mu = xe(
  {
    name: "Stack",
    type: "layout"
  },
  fc
), hu = xe(
  {
    name: "Split",
    type: "layout"
  },
  dc
), pu = xe(
  {
    name: "AutoGrid",
    type: "layout"
  },
  sc
), mc = ({ children: e }) => {
  const { enabled: n } = br();
  return /* @__PURE__ */ t(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        J.div,
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
}, hc = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), pc = Y(function({ header: n, children: r, action: a, summaries: i, alert: l, status: s, fullHeight: c = !1 }, u) {
  const { enabled: f, toggle: d } = br();
  j(() => {
    if (l && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [l, s]);
  const m = (p) => !!p && !(me.isValidElement(p) && p.type === me.Fragment && me.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    _t,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: u,
      children: [
        n && /* @__PURE__ */ t(zt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t($t, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(hc, {}),
                /* @__PURE__ */ t(dr, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(ke, { label: n.info, children: /* @__PURE__ */ t(
                U,
                {
                  icon: ur,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(st, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              l && /* @__PURE__ */ t(fr, { text: l, level: "critical" }),
              s && /* @__PURE__ */ t(Ze, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ t(
                Ei,
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
            /* @__PURE__ */ t(mc, { children: /* @__PURE__ */ t(Oi, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              q,
              {
                icon: f ? _i : zi,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: d,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Bt, { className: "flex h-full flex-col gap-4", children: [
          i && /* @__PURE__ */ t("div", { className: "flex flex-row", children: i.map((p, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, b)) }),
          me.Children.toArray(r).filter(m).map((p, b) => /* @__PURE__ */ o(me.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t(cl, { bare: !0 }),
            p
          ] }, b))
        ] }),
        a && /* @__PURE__ */ t($i, { children: /* @__PURE__ */ t(q, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), gc = Ne({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), bc = Y(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      _t,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(zt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t($t, { children: n.title }) : /* @__PURE__ */ t(B, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(dr, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Bt,
            {
              "aria-hidden": !0,
              className: g(r !== "full" && gc({ height: r })),
              children: [...Array(4)].map((i, l) => /* @__PURE__ */ t(
                B,
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
), Pe = oe(
  Q("Widget", le(pc, bc))
), pe = Object.assign(
  Y(function({ chart: n, summaries: r, ...a }, i) {
    return /* @__PURE__ */ t(Pe, { ref: i, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Pe.Skeleton
  }
), xc = le(
  Y(function({ canBeBlurred: n, ...r }, a) {
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
      pe,
      {
        ref: a,
        ...i,
        chart: /* @__PURE__ */ t(dl, { ...l, canBeBlurred: n })
      }
    );
  }),
  pe.Skeleton
), vc = Q(
  "AreaChartWidget",
  xc
), yc = Y(function(n, r) {
  return /* @__PURE__ */ t(
    pe,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(ul, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), wc = Q(
  "BarChartWidget",
  le(yc, pe.Skeleton)
), Nc = le(
  Y(
    function(n, r) {
      return /* @__PURE__ */ t(
        pe,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(fl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  pe.Skeleton
), Cc = Q(
  "LineChartWidget",
  Nc
), kc = le(
  Y(
    function(n, r) {
      return /* @__PURE__ */ t(
        pe,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(ml, { ...n.chart })
        }
      );
    }
  ),
  pe.Skeleton
), Ic = Q(
  "PieChartWidget",
  kc
), Sc = le(
  Y(
    function(n, r) {
      return /* @__PURE__ */ t(pe, { ref: r, ...n, chart: null });
    }
  ),
  pe.Skeleton
), Fc = Q(
  "SummariesWidget",
  Sc
), Ac = le(
  Y(
    function(n, r) {
      return /* @__PURE__ */ t(
        pe,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(hl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  pe.Skeleton
), Tc = Q(
  "VerticalBarChartWidget",
  Ac
), gu = xe(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  vc
), bu = xe(
  {
    name: "BarChartWidget",
    type: "info"
  },
  wc
), xu = xe(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Cc
), vu = xe(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Ic
), yu = xe(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Tc
), wu = xe(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Fc
), Dc = (e, n) => /* @__PURE__ */ o(
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
), Lc = Y(Dc), Pc = (e, n) => /* @__PURE__ */ o(
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
), Rc = Y(Pc), Ec = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Oc = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, _c = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, zc = {
  "line-chart": "default",
  "bar-chart": "promote"
}, $c = Y(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: i, buttonAction: l, type: s }, c) {
    const u = Ec[s], f = Oc[s], d = _c[s], m = zc[s];
    return /* @__PURE__ */ o(
      _t,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          u
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(zt, { className: "-mt-0.5", children: /* @__PURE__ */ t($t, { children: n }) }),
          /* @__PURE__ */ o(Bt, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  d
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Lc, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ t(Rc, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: r }),
              a && /* @__PURE__ */ t(
                q,
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
), Nu = oe(
  Q("ChartWidgetEmptyState", $c)
);
function Bc(e, n) {
  const r = $(null), a = $(null), [i, l] = D({
    visibleItems: [],
    overflowItems: []
  });
  Bi({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const s = G(
    (d, m, h) => m < h - 1 ? d + n : d,
    [n]
  ), c = G(() => {
    if (!a.current) return [];
    const d = a.current.children, m = [];
    for (let h = 0; h < d.length; h++) {
      const p = d[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), u = G(
    (d, m) => {
      let h = 0, p = 0;
      for (let b = 0; b < d.length; b++) {
        const x = p + d[b];
        if (x > m + 30) break;
        p = x, p = s(
          p,
          b,
          d.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = G(() => {
    if (!r.current || e.length === 0) return;
    const d = r.current.clientHeight, m = c(), h = u(
      m,
      d
    );
    l(h === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (p) => p.visibleItems.length === h && p.overflowItems.length === e.length - h ? p : {
      visibleItems: e.slice(0, h),
      overflowItems: e.slice(h)
    });
  }, [e, c, u]);
  return j(() => {
    f();
  }, [f]), {
    containerRef: r,
    measurementContainerRef: a,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const mt = function({
  items: n,
  renderListItem: r,
  className: a,
  gap: i = 0,
  minSize: l,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: u, visibleItems: f } = Bc(n, i);
  return j(() => {
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
            ref: u,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${i}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((d, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: r(d, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${i}px` },
            "data-testid": "overflow-visible-container",
            children: f.map((d, m) => /* @__PURE__ */ t(
              "div",
              {
                className: "transition-all duration-150",
                "data-testid": "overflow-visible-item",
                children: r(d, m, !0)
              },
              `item-${m}`
            ))
          }
        )
      ]
    }
  );
};
mt.displayName = "VerticalOverflowList";
const Cu = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((i) => /* @__PURE__ */ t(Lt, { ...i }, i.title)) }) : /* @__PURE__ */ t(
  mt,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (i) => /* @__PURE__ */ t(Lt, { ...i }, i.title)
  }
) : null, Mc = ({ onClick: e, children: n }) => {
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
function ku({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: i
}) {
  return /* @__PURE__ */ t(Mc, { onClick: i, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        i && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(U, { icon: r, size: "md", className: a })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const jc = Y(
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
        "icon" in i && i.icon && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(U, { icon: i.icon }) }),
        "emoji" in i && i.emoji && /* @__PURE__ */ t("span", { className: g("flex", a), children: /* @__PURE__ */ t(ot, { emoji: i.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), Iu = Y(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: i, color: l, ...s }) => /* @__PURE__ */ t(
          jc,
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
), Wc = ({
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
function Su({
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
    Wc,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: l,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Mi, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ji, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          ir,
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
const Uc = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function En({
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
  return /* @__PURE__ */ o(Uc, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: l, children: [
    /* @__PURE__ */ t(Zn, { module: i ?? "inbox", size: "sm" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const Hc = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function Pt({
  id: e,
  title: n,
  alert: r,
  rawTag: a,
  count: i,
  icon: l,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: u = "text-f1-icon-secondary",
  onClick: f
}) {
  const d = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Hc, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: d, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      l && /* @__PURE__ */ t(
        U,
        {
          icon: l,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ t(
        U,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", u)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ t(fr, { ...r }),
      a && /* @__PURE__ */ t(Ee, { ...a }),
      !!i && /* @__PURE__ */ t(st, { value: i })
    ] })
  ] });
}
function Fu({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: i
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((l) => /* @__PURE__ */ t(En, { ...l, onClick: r }, l.id)) }) : /* @__PURE__ */ t(
    mt,
    {
      items: e,
      minSize: n,
      renderListItem: (l) => /* @__PURE__ */ t(En, { ...l, onClick: r }, l.id),
      onVisibleItemsChange: i,
      gap: 8
    }
  );
}
function Au({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: i
}) {
  return i ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((l) => /* @__PURE__ */ t(Pt, { ...l, onClick: a }, l.id)) }) : /* @__PURE__ */ t(
    mt,
    {
      items: e,
      gap: n,
      renderListItem: (l) => /* @__PURE__ */ t(Pt, { ...l, onClick: a }),
      minSize: r
    }
  );
}
const Vc = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Tu = Y(
  function({ title: n, titleValue: r, titleTooltip: a, list: i }, l) {
    return /* @__PURE__ */ o("div", { ref: l, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          a && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            ke,
            {
              label: a.label,
              description: a.description,
              children: /* @__PURE__ */ t(U, { icon: ur, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      i.map((s) => /* @__PURE__ */ t(Vc, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function Du({
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
      pl,
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
const qr = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, Gc = ({
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
  }[s], u = (() => {
    if (!i || a === void 0) return;
    const d = qr(
      r,
      a
    ), m = Math.abs(d), h = Math.floor(m / 60), p = Math.floor(m % 60), b = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = Ae[s];
  return {
    status: s,
    statusText: c,
    subtitle: u,
    statusColor: f
  };
}, wt = "--:--", Kc = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: Ae.empty
    };
  if (!n)
    return {
      value: 1,
      color: Ae.empty
    };
}, qc = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, i = qr(
    n,
    r
  ), l = e.reduce(
    (d, m) => d + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = a || (i ?? 0) < 0 ? void 0 : Kc(
    i ?? 0,
    l
  );
  let c = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (d, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - p) / l;
        return c -= p, m.variant === "clocked-in" && a ? [
          ...d,
          {
            value: p / l + x,
            color: Ae.overtime
          }
        ] : [
          ...d,
          {
            value: p / l,
            color: Ae.overtime
          },
          {
            value: x,
            color: Ae[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((d) => d.value > 0), f.length || f.push({
    value: 1,
    color: Ae.empty
  }), f;
}, Yc = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((h) => h.variant === "clocked-in")?.from, i = e.at(-1), l = a ? tn(a) : wt, s = n === void 0 || n > 0 ? wt : i ? tn(i.to) : wt, u = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(u / (1e3 * 60 * 60)), d = Math.floor(u % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
  return {
    primaryLabel: l,
    secondaryLabel: s,
    time: m
  };
}, Ae = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Xc({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = qc({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: i, secondaryLabel: l, time: s } = Yc({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(gl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      bl,
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
        children: a.map((c, u) => /* @__PURE__ */ t(
          Wi,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${u}`
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
function Jc({
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
        r && /* @__PURE__ */ t(U, { icon: r, className: "text-f1-icon" }),
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
        /* @__PURE__ */ t(U, { icon: Ui })
      ]
    }
  );
}
function Lu({
  trackedMinutes: e,
  remainingMinutes: n,
  data: r = [],
  labels: a,
  locationId: i,
  locations: l,
  canShowLocation: s = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: u,
  onClockOut: f,
  onBreak: d,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: p = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: v,
  canShowProject: k = !0,
  projectSelectorElement: N,
  breakTypeName: P
}) {
  const { status: R, statusText: I, subtitle: F, statusColor: W } = Gc({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), _ = R === "clocked-out", C = m?.map((H) => ({
    value: H.id,
    label: H.duration ? `${H.name} · ${H.duration}` : H.name,
    description: H.description,
    tag: H.isPaid ? a.paid : a.unpaid
  })) ?? [], [L, T] = D(!1), y = () => {
    if (C.length > 1)
      L || T(!0);
    else {
      const H = C?.[0]?.value;
      d?.(H);
    }
  }, z = (H) => {
    h?.(H), T(!1), d?.(H);
  }, w = _ && l.length && !c && s, S = l.find((H) => H.id === i), A = l.map((H) => ({
    value: H.id,
    label: H.name,
    icon: H.icon
  })), O = R === "break", [se, re] = D(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: I }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                J.div,
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
          F && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: F })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          R === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            q,
            {
              onClick: u,
              label: a.clockIn,
              icon: nn
            }
          ) }),
          R === "clocked-in" && /* @__PURE__ */ o(ee, { children: [
            p && /* @__PURE__ */ t(ee, { children: C.length > 1 && h ? /* @__PURE__ */ t(
              Qe,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: C,
                onChange: z,
                open: L,
                onOpenChange: T,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  q,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: rn,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              q,
              {
                onClick: y,
                label: a.break,
                variant: "neutral",
                icon: rn,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              q,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: an
              }
            )
          ] }),
          R === "break" && /* @__PURE__ */ o(ee, { children: [
            /* @__PURE__ */ t(
              q,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: an,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              q,
              {
                onClick: u,
                label: a.resume,
                icon: nn
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        Xc,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: w ? /* @__PURE__ */ o(ee, { children: [
      /* @__PURE__ */ t(
        Qe,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: i,
          options: A,
          onChange: v,
          open: se,
          onOpenChange: re,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            Jc,
            {
              text: S?.name,
              placeholder: a.selectLocation,
              icon: S?.icon
            }
          ) })
        }
      ),
      k && N
    ] }) : /* @__PURE__ */ o(ee, { children: [
      s && S && /* @__PURE__ */ t(ee, { children: /* @__PURE__ */ t(Ee, { text: S.name, icon: S.icon }) }),
      k && N,
      O && P && /* @__PURE__ */ t(Ee, { text: P })
    ] }) })
  ] }) });
}
const Zc = {
  done: Gi,
  "in-progress": Vi,
  todo: Hi
}, Qc = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function ed({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const i = () => {
    r?.(e);
  }, l = K(() => {
    if (!a)
      return Zc[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    Pt,
    {
      id: e.id,
      title: e.text,
      icon: l,
      iconClassName: Qc[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Ki
      } : void 0,
      count: e.counter,
      onClick: i
    }
  );
}
function Pu({
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
    ({ key: u, status: f }) => (e[u] || []).map(
      (d) => typeof d == "string" ? {
        id: d,
        text: d
      } : d
    ).map(({ id: d, text: m, badge: h, counter: p }) => ({
      id: d,
      text: m,
      badge: h,
      counter: p,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: i }) : s.slice(0, a).map((u) => /* @__PURE__ */ t(
    ed,
    {
      task: u,
      status: u.status,
      hideIcon: r,
      onClick: n
    },
    u.id
  )) });
}
var td = Object.defineProperty, nd = Object.defineProperties, rd = Object.getOwnPropertyDescriptors, rt = Object.getOwnPropertySymbols, Yr = Object.prototype.hasOwnProperty, Xr = Object.prototype.propertyIsEnumerable, On = (e, n, r) => n in e ? td(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, he = (e, n) => {
  for (var r in n || (n = {})) Yr.call(n, r) && On(e, r, n[r]);
  if (rt) for (var r of rt(n)) Xr.call(n, r) && On(e, r, n[r]);
  return e;
}, ht = (e, n) => nd(e, rd(n)), ad = (e, n) => {
  var r = {};
  for (var a in e) Yr.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && rt) for (var a of rt(e)) n.indexOf(a) < 0 && Xr.call(e, a) && (r[a] = e[a]);
  return r;
}, id = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, ld = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), sd = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = he({}, n);
    return a.right = e.left, a;
  }
  return null;
}, od = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = he({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, cd = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let i = he({}, a);
  return i.left = n.left + e.width, id(i) || ld({ usedSpot: i, spotsList: r }) ? null : i;
}, dd = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((i, l, s) => {
  if (i === r) return cd({ stone: a, position: n, optimalSpot: r, spotsList: s });
  let c = sd({ position: n, spot: i, stone: a });
  return c || od({ position: n, stone: a, spot: i }) || i;
});
function ud(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let i = n[r];
    if (e(i)) return i;
  }
  return null;
}
var fd = (e, n) => n.filter(e), md = (e, n) => [...n].sort(e), hd = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, pd = (e) => md(hd, e), gd = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
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
}, bd = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, xd = ({ availableSpots: e, stone: n }) => ud((r) => bd(r, n), e);
function vd({ stone: e, availableSpots: n, containerSize: r }) {
  let a = xd({ availableSpots: n, stone: e }), i = { left: a.left, top: a.top }, l = gd({ optimalSpot: a, availableSpots: n.filter((u) => u !== a), stone: e, containerSize: r }), s = [...n, l], c = dd({ spots: s, position: i, optimalSpot: a, stone: e });
  return s = [...fd(Boolean, c)], s = pd(s), { position: i, availableSpots: s };
}
var yd = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, i = [], l = [{ top: 0, left: 0, right: n }];
  for (let s of e) {
    let c = vd({ availableSpots: l, stone: s, containerSize: n }), u = c.position.top + s.height;
    a < u && (a = u), i.push(c.position), l = c.availableSpots;
  }
  return { availableSpots: l, positions: i, containerHeight: a };
}, wd = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), Nd = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: i }) => {
  let [{ positions: l, containerHeight: s, stones: c, availableSpots: u }, f] = D({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var d, m;
    let h = wd(e.current), p = (m = (d = n.current) == null ? void 0 : d.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let b = yd({ stones: h, containerSize: p });
    f(ht(he({}, b), { stones: h }));
  }, [r, e, n, a, i]), { positions: l, containerHeight: s, stones: c, availableSpots: u };
}, Cd = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), kd = ({ transition: e, transitionDuration: n }) => e ? { transition: Cd(n)[e] } : null, Id = (e) => e ? ht(he({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Sd = ({ style: e, position: n, transition: r, transitionDuration: a }) => he(he(ht(he({}, e), { position: "absolute" }), Id(n)), kd({ transition: r, transitionDuration: a }));
function Fd(e, n, r) {
  let a;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, i);
    }, n);
  };
}
var Ad = () => {
  let [e, n] = D(), r = $(Fd(n, 300));
  return j(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, Td = (e) => {
  let [n, r] = D(null);
  return j(() => {
    let a = new ResizeObserver((i) => {
      for (let l of i) r(l.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, Dd = (e) => {
  var n = e, { children: r, style: a, transition: i = !1, transitionDuration: l = 500, transitionStep: s = 50 } = n, c = ad(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let u = $([]), f = $(null), d = Ad(), m = Td(f), { positions: h, containerHeight: p } = Nd({ boxesRefs: u, wrapperRef: f, children: r, windowWidth: d, wrapperWidth: m }), b = he({ minHeight: p ?? 0, position: "relative" }, a);
  return t("div", ht(he({ ref: f, style: b }, c), { children: pr.map(r, (x, v) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let k = { style: Sd({ style: x.props.style, position: h[v], transition: i, transitionDuration: l }), ref: (N) => u.current[v] = N };
    return hr(x, he(he({}, x.props), k));
  }) }));
};
const Ld = { sm: 340, md: 480, lg: 640 }, _n = Y(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const i = Ld[r], [l, s] = D(), c = pr.toArray(n), u = $(null);
    return j(() => {
      const f = () => {
        const d = u.current?.offsetWidth;
        d && s(Math.floor(d / i) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, i]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: u, children: l === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : l && l > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Dd, { children: c.map((f, d) => /* @__PURE__ */ t(
      "div",
      {
        style: {
          width: `${Math.floor(1 / l * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: f
      },
      d
    )) }, l) }) }) });
  }
), Pd = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Ru = le(_n, () => /* @__PURE__ */ t(mr, { children: /* @__PURE__ */ t(_n, { children: Pd.map((e, n) => /* @__PURE__ */ t(Pe.Skeleton, { height: e }, n)) }) })), zn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Eu = le(
  Y(function({ children: n }, r) {
    return /* @__PURE__ */ t(lt, { ref: r, showBar: !1, children: /* @__PURE__ */ t(zn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(mr, { orientation: "horizontal", children: /* @__PURE__ */ o(zn, { children: [
    /* @__PURE__ */ t(Pe.Skeleton, {}),
    /* @__PURE__ */ t(Pe.Skeleton, {}),
    /* @__PURE__ */ t(Pe.Skeleton, {})
  ] }) })
);
function Rd({
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
    xl,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const Ou = oe(
  Q("WidgetEmptyState", Rd)
), Jr = Y(
  ({ title: e, children: n }, r) => (qi(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
Jr.displayName = "WidgetSection";
const _u = oe(
  Q("WidgetSection", Jr)
), zu = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const i = Yi(), l = window.location.pathname, s = K(() => n?.length ? n.includes(l) : r?.length ? !r.includes(l) : !0, [l, n, r]), c = K(() => {
    let u = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (u += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (u += ` Disallowed routes: ${r.join(", ")}`), u;
  }, [e, n, r]);
  return s ? a : (i && console.error(c), null);
}, $u = oe(
  xe(
    {
      name: "ScrollArea",
      type: "layout"
    },
    lt
  )
);
export {
  Vd as ActivityItemList,
  ws as ActivityItemListSkeleton,
  ql as AiPromotionChat,
  Yl as AiPromotionChatProvider,
  Xd as ApplicationFrame,
  xf as AreaChart,
  gu as AreaChartWidget,
  pu as AutoGrid,
  di as Badge,
  vf as BarChart,
  bu as BarChartWidget,
  ys as BaseActivityItemList,
  yf as BaseBanner,
  Ss as BaseCelebration,
  Os as BaseCommunityPost,
  ju as BaseTabs,
  Wu as BreadcrumbSelect,
  kl as Breadcrumbs,
  Lt as CalendarEvent,
  Cu as CalendarEventList,
  wf as CardSelectableContainer,
  Qi as Carousel,
  Nf as CategoryBarChart,
  Du as CategoryBarSection,
  Gd as Celebration,
  Fs as CelebrationSkeleton,
  Nu as ChartWidgetEmptyState,
  Uu as Chip,
  Lu as ClockInControls,
  Cf as ComboChart,
  qd as CommunityPost,
  _s as CommunityPostSkeleton,
  no as CompanySelector,
  st as Counter,
  Ru as Dashboard,
  Jd as DaytimePage,
  Hu as DetailsItem,
  Vu as DetailsItemsList,
  kf as Dialog,
  Re as Dropdown,
  Hd as EntitySelect,
  If as F0ActionBar,
  Sf as F0AiBanner,
  Zn as F0AvatarModule,
  Gu as F0ButtonToggle,
  jd as F0Callout,
  Ku as F0CardHorizontal,
  fu as F0Chat,
  uu as F0ChatProvider,
  lr as F0FileItem,
  Ff as F0NotesTextEditor,
  Af as F0NotesTextEditorSkeleton,
  Tf as F0NumberInput,
  Ya as F0RichTextDisplay,
  Df as F0RichTextEditor,
  qu as F0SearchInput,
  Wd as F0SegmentedBar,
  Lf as F0SegmentedControl,
  Pf as F0TableOfContent,
  Rf as F0TextAreaInput,
  Yu as F0TextInput,
  Ud as F0VersionHistory,
  Ef as F1SearchBox,
  Of as FILE_TYPES,
  Xu as FileItem,
  Kd as HighlightBanner,
  Iu as IndicatorsList,
  _f as Input,
  zf as Item,
  $f as ItemSectionHeader,
  Bf as LineChart,
  xu as LineChartWidget,
  iu as Menu,
  Ju as MobileDropdown,
  Mf as NotesTextEditor,
  jf as NotesTextEditorSkeleton,
  Wf as NumberInput,
  Zd as OmniButton,
  cu as OneApprovalHistory,
  Zu as OneCalendar,
  Qu as OneCalendarInternal,
  Uf as OneDataCollection,
  Hf as OneDateNavigator,
  xl as OneEmptyState,
  Vf as OnePagination,
  Yd as OnePersonListItem,
  zu as OneRestrictComponent,
  Qd as Page,
  Md as PageHeader,
  Ut as PageHeaderNavigationContext,
  $d as PageHeaderNavigationProvider,
  Ll as PageNavigation,
  Gf as PieChart,
  vu as PieChartWidget,
  mc as PrivateBox,
  Kf as ProgressBarChart,
  qf as RadarChart,
  Ts as Reactions,
  Yf as ResourceHeader,
  ef as RichTextDisplay,
  Xf as RichTextEditor,
  $u as ScrollArea,
  lu as SearchBar,
  Jf as SectionHeader,
  Qe as Select,
  mi as Shortcut,
  su as Sidebar,
  Qs as SidebarChatItem,
  Wr as SidebarChatItemSkeleton,
  nu as SidebarChatList,
  Js as SidebarChatListSkeleton,
  eu as SidebarChatProvider,
  Vt as SidebarCollapsibleSection,
  ru as SidebarFooter,
  au as SidebarHeader,
  ou as SidebarTabs,
  je as Spinner,
  hu as Split,
  mu as Stack,
  wu as SummariesWidget,
  tf as Switch,
  nf as Tabs,
  rf as TabsSkeleton,
  Pu as TasksList,
  Zf as Textarea,
  af as ToggleGroup,
  lf as ToggleGroupItem,
  ke as Tooltip,
  Tu as TwoColumnsList,
  Qf as UPLOAD_INPUT_ID,
  em as VerticalBarChart,
  yu as VerticalBarChartWidget,
  At as VirtualList,
  sf as WeekStartDay,
  of as Weekdays,
  Pe as Widget,
  Su as WidgetAvatarsListItem,
  Ou as WidgetEmptyState,
  ku as WidgetHighlightButton,
  Fu as WidgetInboxList,
  En as WidgetInboxListItem,
  _u as WidgetSection,
  Au as WidgetSimpleList,
  Pt as WidgetSimpleListItem,
  Eu as WidgetStrip,
  tm as actionBarStatuses,
  nm as buttonToggleSizes,
  rm as buttonToggleVariants,
  cf as chipVariants,
  am as downloadAsCSV,
  df as f0FileItemSizes,
  im as generateCSVContent,
  uf as getGranularityDefinition,
  ff as getGranularityDefinitions,
  mf as getGranularitySimpleDefinition,
  hf as granularityDefinitions,
  pf as modules,
  lm as predefinedPresets,
  gf as rangeSeparator,
  Dn as seedFromStorage,
  sm as selectSizes,
  dt as useAiPromotionChat,
  om as useDataCollectionData,
  du as useDataCollectionItemNavigation,
  il as useDataCollectionSource,
  cm as useExportAction,
  De as useF0Chat,
  dm as useInfiniteScrollPagination,
  Ml as usePageHeaderItemNavigation,
  Bd as usePageHeaderNavigation,
  Oe as useSidebar,
  tu as useSidebarChatActions,
  Ys as useSidebarChats
};
