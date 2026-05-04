import { a9 as ma, aa as ha, ab as ga, ac as pa, ad as _t, ae as Re, af as ba, O as p, W as Q, P as ve, u as de, ag as xa, ah as va, ai as wa, aj as ya, ak as Na, a5 as ue, al as Ca, am as bt, an as st, ao as We, U as Te, ap as Ia, aq as ka, ar as V, as as Sa, at as Aa, M as De, au as fn, av as Fa, aw as La, Q as $, ax as mn, a8 as P, ay as Ce, az as _a, aA as Ea, aB as Oa, aC as Ta, aD as Da, aE as Ae, aF as hn, aG as Pa, aH as we, aI as je, aJ as Ra, aK as xt, n as gn, aL as Se, aM as za, aN as pn, a6 as le, aO as Y, R as bn, aP as xn, aQ as Ba, aR as vn, aS as pe, a7 as te, aT as $a, aU as Ma, aV as Wa, aW as ja, X as xe, aX as Ke, aY as Va, aZ as Ua, a_ as Ga, a$ as Ha, b0 as qe, b1 as wn, b2 as Ka, b3 as qa, b4 as Ya, b5 as Ve, b6 as Za, b7 as Xa, b8 as Ja, b9 as Qa, ba as er, bb as tr, bc as nr, bd as ar, be as rr, bf as lr, bg as it, bh as ot, bi as yn, bj as sr, bk as ir, bl as Nn, bm as or, bn as cr, T as Ye, bo as vt, bp as Cn, bq as dr, br as In, bs as ur, bt as fr, bu as mr, bv as Oe, bw as hr, bx as ze, by as Et, bz as ct, bA as gr, bB as pr, a as br, c as xr, bC as vr, bD as kn, bE as wr, bF as yr, F as Nr, bG as Sn, _ as Cr, bH as An, bI as Ir, bJ as Ot, bK as kr, bL as Sr, bM as Ar, bN as Fr, bO as Fn, bP as Lr, bQ as _r, bR as Er, bS as Or, bT as Tr, Y as Ln, bU as Dr, bV as Tt, bW as he, bX as _n, bY as wt, bZ as yt, b_ as Nt, b$ as En, c0 as Ct, c1 as On, $ as Tn, c2 as Pr, c3 as Rr, c4 as zr, c5 as Br, c6 as $r, c7 as Mr, c8 as Wr, c9 as jr, ca as Vr, cb as Ur, cc as Gr, cd as Dt, ce as Pt, cf as Rt, cg as Hr, ch as Kr, ci as qr, cj as Yr, ck as Dn, cl as Zr, cm as Xr, cn as Jr } from "./F0AiChat-CwewwhVM.js";
import { cI as Vc, cH as Uc, cq as Gc, cU as Hc, cB as Kc, cC as qc, cp as Yc, cE as Zc, cr as Xc, d4 as Jc, d2 as Qc, cs as ed, cF as td, cG as nd, cD as ad, ct as rd, cQ as ld, cR as sd, cV as id, d0 as od, d1 as cd, cz as dd, d3 as ud, cA as fd, cu as md, cK as hd, cJ as gd, cv as pd, cw as bd, cx as xd, cS as vd, d5 as wd, co as yd, cT as Nd, cX as Cd, cY as Id, cP as kd, cM as Sd, cO as Ad, cL as Fd, cy as Ld, cN as _d, cZ as Ed, c_ as Od, cW as Td, c$ as Dd } from "./F0AiChat-CwewwhVM.js";
import { jsx as t, jsxs as o, Fragment as Z } from "react/jsx-runtime";
import ie, { forwardRef as G, useRef as W, useTransition as Qr, useState as T, useLayoutEffect as Pn, useId as el, useContext as Ze, createContext as It, useEffect as j, useCallback as H, useMemo as K, Fragment as tl, isValidElement as nl, cloneElement as Rn, Children as zn } from "react";
import { C as al, P as rl, g as Bn, c as ll, F as dt, f as sl, a as il, u as ol, A as cl, B as dl, L as ul, b as fl, V as ml, d as hl, e as zt, h as gl, i as pl } from "./index-BdMBBNHc.js";
import { l as Rd, m as zd, j as Bd, n as $d, s as Md, D as Wd, k as jd, o as Vd, w as Ud, x as Gd, N as Hd, y as Kd, p as qd, r as Yd, R as Zd, q as Xd, _ as Jd, v as Qd, t as eu } from "./index-BdMBBNHc.js";
const bl = ma("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), $n = G(({ className: e, items: n }, a) => /* @__PURE__ */ t(ha, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(ga, {}),
  /* @__PURE__ */ t(pa, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
$n.displayName = "CollapsedBreadcrumbItem";
const kt = 50, xl = 120, Ue = 8;
function vl(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = e - r - Ue, s = 0, i = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < a)
    for (l -= kt; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function Bt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ue;
    default:
      return e[0] + kt + e[e.length - 1] + Ue;
  }
}
function wl(e, n) {
  return xl * e + (n ? kt : 0) + Ue;
}
function yl(e, n, a = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: wl(
        i,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, l = a.map((i) => i.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Bt(l)
    };
  const s = vl(e, l);
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
    minWidth: Bt(l)
  };
}
function Nl({ breadcrumbs: e, append: n }) {
  const a = W(null), r = W(null), [, l] = Qr(), [s, i] = T(null), c = (s?.collapsedItems || []).length > 0;
  return Pn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const b = yl(
          h,
          e,
          g
        );
        i(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(_t, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    _t,
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
              Re,
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
        s && s.headItem && /* @__PURE__ */ o(ba, { children: [
          /* @__PURE__ */ t(
            Re,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ t(
              $n,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              Re,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ t(Z, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
            Re,
            {
              item: d,
              isLast: f === s.tailItems.length - 1,
              isFirst: !1,
              children: f === s.tailItems.length - 1 ? n : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${e.at(-1)?.id ?? 0}`
  );
}
const Cl = ve({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), $t = [
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
], Il = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, s) => {
  const i = el(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...g
  } = l;
  return /* @__PURE__ */ t(
    "div",
    {
      className: p(Cl({ size: n }), h),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        Q.svg,
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
          ...(({ style: b, ...x }) => x)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              $t.map((b) => /* @__PURE__ */ t("clipPath", { id: `${i}-${b.id}`, children: /* @__PURE__ */ t("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: $t.map((b) => /* @__PURE__ */ t(
              Q.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${b.id})`,
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
}, Mn = G(Il), Wn = It(null), kl = 15, Sl = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [l, s] = T(n), [i, c] = T(!1), [d, f] = T(!0), [u, m] = T(
    kl
  ), h = W(null), g = (x) => {
    h.current = x;
  }, b = () => {
    h.current && h.current();
  };
  return j(() => {
    s(n);
  }, [n]), j(() => {
    if (i && a?.(), !i) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [i, a]), /* @__PURE__ */ t(
    Wn.Provider,
    {
      value: {
        ...r,
        enabled: l,
        setEnabled: s,
        open: i,
        setOpen: c,
        shouldPlayEntranceAnimation: d,
        setShouldPlayEntranceAnimation: f,
        setAutoClearMinutes: m,
        autoClearMinutes: l ? u : null,
        clear: b,
        setClearFunction: g
      },
      children: e
    }
  );
}, Ie = () => {
};
function Xe() {
  const e = Ze(Wn);
  return e === null ? {
    enabled: !1,
    setEnabled: Ie,
    open: !1,
    setOpen: Ie,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ie,
    setAutoClearMinutes: Ie,
    clear: Ie,
    setClearFunction: Ie,
    autoClearMinutes: null
  } : e;
}
const jn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = Xe(), s = de(), [i, c] = T(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(xa, { children: /* @__PURE__ */ o(va, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(wa, { asChild: !0, children: /* @__PURE__ */ t(
      Q.div,
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
          ya,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: p(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ue(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              Na,
              {
                className: p(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Mn,
                  {
                    size: "sm",
                    background: l ? "white" : void 0,
                    hover: i
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !l && /* @__PURE__ */ t(Ca, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Mt = "one_sidebar_locked", Vn = It(void 0);
function Fe() {
  const e = Ze(Vn);
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
function Al({ children: e }) {
  const { currentPath: n } = bt(), [a, r] = T(!1), [l, s] = T(!1), i = a ? We.xl : We.md, c = st(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = T(() => {
    const E = localStorage.getItem(Mt);
    return E !== null ? !!E : !0;
  }), [u, m] = T(!1), [h, g] = T(
    null
  ), b = H(
    ({ isInvokedByUser: E } = {
      isInvokedByUser: !0
    }) => {
      s(E ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = H(
    (E) => {
      c || (E.clientX < 32 && m(!0), E.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return j(() => {
    m(!1);
  }, [n]), j(() => {
    l && localStorage.setItem(Mt, d ? "1" : "");
  }, [d, l]), j(() => () => {
    g(w);
  }, [w]), /* @__PURE__ */ t(
    Vn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const Wt = Q.create(V), jt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Fl = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, l] = T(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(Te, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: p(
        "flex h-6 w-6 items-center justify-center rounded",
        ue()
      ),
      onClick: s,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Wt,
        {
          size: "sm",
          icon: Ia,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: jt,
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
        Wt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: ka,
          className: "outline-none",
          variants: jt,
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
}, Ll = ({
  currentModule: e,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: l,
  errorScreen: s,
  onOpenChange: i = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = T("idle"), [g, b] = T(null), [x, ...w] = g ?? [], [E, z] = T(!1);
  j(() => {
    b(null), h("idle");
  }, [e]);
  const B = H(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), b(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Sa,
    {
      open: E,
      onOpenChange: async (D) => {
        z(D), D && g === null && B(), i(D);
      },
      children: [
        /* @__PURE__ */ t(Aa, { asChild: !0, children: /* @__PURE__ */ t(
          De,
          {
            variant: "outline",
            icon: fn,
            hideLabel: !0,
            label: n,
            pressed: E,
            append: f && /* @__PURE__ */ t(St, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Fa, { children: /* @__PURE__ */ o(
          La,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Ol, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Pl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Tl, { ...l, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    _l,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: w.map((D, S) => /* @__PURE__ */ t(
                    El,
                    {
                      ...D,
                      onClick: d
                    },
                    S
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Dl,
                  {
                    ...s,
                    onClick: () => {
                      B();
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
                  onDropdownClose: () => z(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, _l = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    _a,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Ce,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: p(i, "text-f1-foreground no-underline"),
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
              Ea,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: l })
              ] }),
              r && /* @__PURE__ */ t(St, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, El = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const s = p("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Oa, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
    Ce,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: p(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(St, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Ol = ({
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
        $,
        {
          variant: "outline",
          size: "sm",
          icon: mn,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Un = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: p(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        l
      ),
      children: e
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), Tl = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Un,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(V, { icon: fn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Ce, { href: a, children: /* @__PURE__ */ t($, { label: n }) })
  }
), Dl = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Un,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(V, { icon: Ta, size: "lg" }),
    button: /* @__PURE__ */ t($, { variant: "outline", label: a, onClick: r })
  }
), Pl = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(P, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(P, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(P, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(P, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(P, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), St = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: p("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Rl = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, s] = T(e);
  j(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ t(Da, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          $,
          {
            variant: "ghost",
            icon: Ae,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        al,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            rl,
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
function Vt({
  icon: e,
  href: n,
  label: a,
  disabled: r
}) {
  const l = W(null);
  return /* @__PURE__ */ t(
    $,
    {
      href: n,
      title: a,
      "aria-label": a,
      disabled: r,
      ref: l,
      size: "sm",
      variant: "outline",
      label: a,
      icon: e,
      hideLabel: !0
    }
  );
}
function Yo({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: l = !1,
  navigation: s,
  productUpdates: i,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Fe(), h = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], g = n && Object.keys(n).length !== 0, b = l && a.length > 0, x = !l && r.length > 0, w = !l && !!i?.isVisible, E = h[h.length - 1], z = "navigation" in window ? window.navigation : null, B = l && (z ? !!z.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Te, { children: !l && u !== "locked" && /* @__PURE__ */ t(
            Q.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                $,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: hn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                "flex flex-grow items-center gap-2",
                B && "justify-center"
              ),
              children: [
                l && B && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  $,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Pa,
                    onClick: () => window.history.back()
                  }
                ) }),
                B || b ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in E ? /* @__PURE__ */ t(P, { className: "h-4 w-24" }) : E.label }) : /* @__PURE__ */ t(
                  Nl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Fl,
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
          !l && g && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(we, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            je,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(je, { text: n.text, variant: n.variant }) }),
          !l && g && (s || x || w) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Vt,
                {
                  icon: Ra,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Vt,
                {
                  icon: xt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && x && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Ll,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            x && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((D, S) => /* @__PURE__ */ t(zl, { action: D }, S)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              gn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(jn, {})
          ] })
        ] })
      ]
    }
  );
}
function zl({ action: e }) {
  const n = W(null), [a, r] = T(!1);
  return "actions" in e ? /* @__PURE__ */ t(Se, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    De,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    $,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Ce,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        $,
        {
          size: "md",
          variant: "outline",
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
const Bl = () => {
  const e = de();
  return /* @__PURE__ */ o(
    Q.div,
    {
      className: p(
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
            className: p(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          De,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: za,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, $l = ({
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
}, Ml = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = Xe();
  return $l({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(Te, { children: n && /* @__PURE__ */ t(
    Q.div,
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
        Q.div,
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
}, Wl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(pn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        De,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, jl = ({
  enabled: e = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: l,
  actions: s,
  onShow: i,
  onHide: c,
  children: d
}) => /* @__PURE__ */ t(
  Sl,
  {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    onShow: i,
    onHide: c,
    children: d
  }
), Vl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = Xe(), d = () => {
    i(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(Ml, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      De,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ae,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Mn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(bn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        Wl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Bl, {}) })
  ] }) : null;
}, Ul = le(
  Y("AiPromotionChat", Vl)
), Gl = le(
  Y("AiPromotionChatProvider", jl)
), Gn = ve({
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
}), Ut = {
  positive: vn,
  warning: Ba,
  info: xn
}, Gt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Hl = G(
  function({ title: n, onClose: a, children: r, actions: l = [], variant: s }, i) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: i,
        className: Gn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center gap-2",
                  Gt[s]
                ),
                children: [
                  Ut[s] && /* @__PURE__ */ t(V, { icon: Ut[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    pe,
                    {
                      className: Gt[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              $,
              {
                variant: "ghost",
                icon: Ae,
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
                className: p(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              $,
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
), Kl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Gn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(P, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: p(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(P, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(P, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(P, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(P, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(P, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Hn = G(
  (e, n) => /* @__PURE__ */ t(Hl, { ref: n, ...e })
), ql = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Kl, { compact: e, variant: n });
Hn.displayName = "F0Callout";
const Zo = te(
  le(Hn),
  ql
);
function Yl({
  title: e,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ue("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(V, { icon: $a, size: "md", color: "selected" }),
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
function Zl({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = Ma(), s = Wa(l), i = ja(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ue("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(pe, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            xe,
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
function Xl({
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
        /* @__PURE__ */ t(Ke, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            Yl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            Zl,
            {
              author: l.author,
              timestamp: l.timestamp,
              onClick: l.onClick,
              isActive: r === l.id
            },
            l.id
          ))
        ] }) })
      ]
    }
  );
}
const Xo = le(
  Y("F0VersionHistory", Xl)
), Kn = G(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: l }, s) => {
    const i = ie.useRef(null);
    ie.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = Va({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        className: p("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? l(d) : /* @__PURE__ */ t(Z, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Kn.displayName = "VirtualList";
const ut = Y("VirtualList", Kn), qn = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const l = new RegExp(`(${n})`, "gi"), s = e.split(l);
  return /* @__PURE__ */ t("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
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
function Je(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(e);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function Qe(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(e);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const Jl = ({
  entity: e,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: l,
  search: s,
  goToFirst: i,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(e) : a(e));
  }, x = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else w.key === "ArrowDown" ? Je(w.currentTarget, i) : w.key === "ArrowUp" && Qe(w.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: p(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          xe,
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
            className: p(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              qn,
              {
                text: e.name,
                search: s,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          wn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: b,
            onKeyDown: x,
            className: p(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          V,
          {
            className: "text-f1-icon-selected",
            icon: vn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, $e = ({
  groupView: e,
  expanded: n,
  search: a,
  entity: r,
  selected: l,
  partialSelected: s,
  onSelect: i,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: g = !1,
  singleSelector: b = !1,
  disabled: x = !1,
  hiddenAvatar: w = !1
}) => {
  const [E, z] = T(!1);
  if (!e)
    return /* @__PURE__ */ t(
      Jl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: i,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: w
      }
    );
  const B = (I) => {
    if (I.key === " ")
      I.preventDefault(), d(!n);
    else if (I.key === "Enter" && b)
      d(!n);
    else if (I.key === "Enter") {
      if (x) return;
      !l || s ? i(r) : l && c(r);
    } else I.key === "ArrowDown" ? Je(I.currentTarget, f) : I.key === "ArrowUp" && Qe(I.currentTarget, u);
  }, D = () => {
    if (E)
      d(!n), z(!1);
    else {
      if (x || b) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const S = l || s;
  return /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        $,
        {
          hideLabel: !0,
          icon: n ? Ua : Ga,
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
            z(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ t(
              V,
              {
                icon: Ha,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                qn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(qe, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              wn,
              {
                checked: S,
                disabled: x,
                onClick: D,
                onKeyDown: B,
                indeterminate: s,
                onPointerDown: (I) => {
                  I.stopPropagation(), z(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: p("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
$e.displayName = "EntitySelectListItem";
const Ht = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Je(s.currentTarget, a) : s.key === "ArrowUp" && Qe(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": e,
    className: p(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ t(
        $,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Ka,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: p("line-clamp-1"), children: e }) }) })
    ]
  }
) }), _e = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      $,
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
  })) || [], l = (i) => {
    const c = a.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((i) => i.disabled);
  return /* @__PURE__ */ t(
    qa,
    {
      items: r,
      value: e.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Ql = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: l,
  anyVisibleSelected: s,
  loading: i,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = e && e.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let g, b, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return x || (x = w, w = void 0), m && u ? (g = /* @__PURE__ */ t(
    _e,
    {
      primaryAction: x,
      secondaryActions: w ? [w] : []
    }
  ), b = /* @__PURE__ */ t(
    _e,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ t(
    _e,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ t(_e, { primaryAction: x, secondaryActions: [] }), w && (b = /* @__PURE__ */ t(_e, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    b
  ] }) });
}, es = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(V, { icon: bl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Je(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: Ya,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), nt = 384, at = 36, ts = 37, Kt = 1, qt = 200, Yt = '[data-avatarname-navigator-element="true"]', ns = ({
  groupView: e,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: l,
  onSelect: s,
  onRemove: i,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: g,
  onToggleExpand: b,
  searchPlaceholder: x,
  selectAllLabel: w,
  clearLabel: E,
  notFoundTitle: z,
  notFoundSubtitle: B,
  className: D,
  actions: S,
  onCreate: I,
  onCreateLabel: O,
  singleSelector: R = !1,
  loading: y = !1,
  disabled: A = !1,
  hiddenAvatar: C = !1
}) => {
  const F = ie.useRef(null), M = K(
    () => e ? n.reduce(
      (L, X) => L + (X.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), v = H(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: 0 });
    }, Kt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Yt)
      )[0]?.focus();
    }, qt);
  }, []), k = H(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: F.current?.scrollHeight });
    }, Kt), setTimeout(() => {
      const L = Array.from(
        document.querySelectorAll(Yt)
      );
      L[L.length - 1]?.focus();
    }, qt);
  }, []), N = K(
    () => new Map(h.map((L) => [L.id, L])),
    [h]
  ), U = H(
    (L) => {
      const X = N.get(L.id);
      if (!e)
        return {
          selected: !!X,
          partialSelected: !!X
        };
      const ee = (L.subItems ?? []).filter(
        (re) => X?.subItems?.some(
          (ge) => ge.subId === re.subId
        )
      ), J = (L.subItems?.length ?? 0) === ee.length, fe = !J && ee.length > 0;
      return { selected: J, partialSelected: fe };
    },
    [e, N]
  ), se = H(
    (L) => {
      if (L.index === 0 && I)
        return /* @__PURE__ */ t(
          Ht,
          {
            label: O ?? "",
            onCreate: () => I?.(l),
            goToFirst: v,
            goToLast: k
          }
        );
      const X = I ? L.index - 1 : L.index, ee = n[X], { selected: J, partialSelected: fe } = U(ee);
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: ee.expanded ?? !1,
          onExpand: () => b(ee, !0),
          search: l,
          groupView: e,
          entity: ee,
          onSelect: s,
          onRemove: i,
          selected: J,
          partialSelected: fe,
          showGroupIcon: as(a, r),
          singleSelector: R,
          goToFirst: v,
          goToLast: k,
          disabled: A,
          hiddenAvatar: C
        },
        ee.id
      );
    },
    [
      I,
      O,
      A,
      n,
      U,
      v,
      k,
      e,
      a,
      C,
      i,
      s,
      b,
      l,
      r,
      R
    ]
  ), ne = K(() => e ? n.flatMap((L) => {
    const X = Be(
      h ?? [],
      L.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: L.id,
          subName: L.name,
          subAvatar: L.avatar,
          expanded: L.expanded ?? X?.expanded ?? !1,
          subItems: L.subItems,
          subSearchKeys: L.searchKeys
        }
      },
      ...(L.subItems ?? []).map((ee) => ({
        parent: {
          ...L,
          expanded: L.expanded ?? X?.expanded ?? !1
        },
        subItem: ee
      }))
    ];
  }).filter(
    (L) => (!L.parent || L.parent.expanded) && (!!L.parent || !!L.subItem.subItems && L.subItem.subItems.length > 0)
  ) : n.map((L) => ({
    parent: null,
    subItem: {
      subId: L.id,
      subName: L.name,
      subAvatar: L.avatar,
      subSearchKeys: L.searchKeys
    }
  })), [e, n, h]), _ = H(
    (L) => {
      if (L.index === 0 && I)
        return /* @__PURE__ */ t(
          Ht,
          {
            label: O ?? "",
            onCreate: () => I?.(l),
            goToFirst: v,
            goToLast: k
          }
        );
      const X = I ? L.index - 1 : L.index, ee = ne[X].parent, J = ne[X].subItem;
      if (!ee) {
        const re = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, ge = Be(
          h,
          re.id
        ), be = (re?.subItems ?? []).filter(
          (Le) => ge?.subItems?.some(
            (fa) => fa.subId === Le.subId
          )
        ), Pe = (re.subItems?.length ?? 0) === be.length, ua = !Pe && be.length > 0;
        return /* @__PURE__ */ t(
          $e,
          {
            groupView: !0,
            expanded: re.expanded ?? !1,
            onExpand: (Le) => b(re, Le),
            search: l,
            entity: re,
            onSelect: s,
            onRemove: i,
            selected: Pe,
            partialSelected: ua,
            showGroupIcon: a.find((Le) => Le.value === r)?.groupType === "team",
            singleSelector: R,
            goToFirst: v,
            goToLast: k,
            hideLine: X === ne.length - 1,
            disabled: A,
            hiddenAvatar: C
          }
        );
      }
      let fe = !!Be(h, J.subId);
      if (!fe) {
        const re = Be(
          h,
          ee.id
        );
        fe = !!(ee?.subItems ?? []).filter(
          (be) => re?.subItems?.some(
            (Pe) => Pe.subId === be.subId
          )
        ).find((be) => be.subId === J.subId);
      }
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
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
          selected: !!fe,
          partialSelected: !1,
          singleSelector: R,
          goToFirst: v,
          goToLast: k,
          isChild: !0,
          hiddenAvatar: C
        }
      );
    },
    [
      ne,
      h,
      l,
      R,
      v,
      k,
      s,
      i,
      a,
      A,
      b,
      r,
      d,
      c,
      C,
      I,
      O
    ]
  ), [q, ae] = K(() => {
    if (!n.length)
      return [!1, !1];
    let L = 0, X = 0;
    if (!e)
      L = n.length, X = n.reduce(
        (fe, { id: re }) => fe + (N.has(re) ? 1 : 0),
        0
      );
    else {
      const fe = new Set(
        [...N.values()].flatMap(
          (re) => re.subItems?.map((ge) => ge.subId) ?? []
        )
      );
      n.forEach((re) => {
        const ge = re.subItems ?? [];
        L += ge.length, X += ge.filter(
          (be) => fe.has(be.subId)
        ).length;
      });
    }
    const ee = L > 0 && X === L, J = X > 0;
    return [ee, J];
  }, [n, N, e]), me = ne.length, ye = !R && (w || E), ca = S && S.length > 0, da = !y && (!R && ye || ca);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex w-full flex-col rounded-l-xl border-0",
        R || y ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: p(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              R || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                es,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: k
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Ve,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
                  onChange: g,
                  options: a,
                  value: r,
                  className: p(
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
            className: p(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              da ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              y && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(pn, {}) }),
              !y && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: nt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: z }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: B })
                  ]
                }
              ),
              !y && (!!M || I) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                ut,
                {
                  height: nt,
                  itemCount: me + (I ? 1 : 0),
                  itemSize: (L) => {
                    if (L === 0 && I) return at;
                    const X = I ? L - 1 : L;
                    return ne[X]?.parent === null ? ts : at;
                  },
                  renderer: _,
                  ref: F
                }
              ) : /* @__PURE__ */ t(
                ut,
                {
                  height: nt,
                  itemCount: n.length + (I ? 1 : 0),
                  itemSize: at,
                  renderer: se,
                  ref: F
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          Ql,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: R,
            totalFilteredEntities: M,
            allVisibleSelected: q,
            anyVisibleSelected: ae,
            selectAllLabel: w,
            clearLabel: E,
            disabled: A,
            actions: S
          }
        )
      ]
    }
  );
}, Be = (e, n) => e.find((a) => a.id === n), as = (e, n) => e.find((a) => a.value === n)?.groupType === "team", rs = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Za,
  {
    className: p(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      Xa,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Ja, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      V,
      {
        icon: Ae,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), ls = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = K(() => {
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
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      ut,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            rs,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: s,
              hiddenAvatar: i,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : a({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(Z, {});
        }
      }
    ) })
  ] });
}, ss = 500, Zt = 520, Xt = 210, Jt = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  width: s,
  singleSelector: i = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const g = (s ?? Zt) < ss, b = !c && !i && !g, x = s ?? Zt, w = b ? x - Xt : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ t(
              ns,
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
        ),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Xt + "px"
            },
            children: /* @__PURE__ */ t(
              ls,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r ?? [],
                selectedLabel: l,
                disabled: h.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, is = ({
  placeholder: e,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: l = !1,
  label: s,
  labelIcon: i,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: g,
  loading: b = !1,
  required: x = !1,
  readonly: w = !1,
  append: E,
  size: z = "sm",
  open: B
}) => {
  const D = K(
    () => a.some(
      (R) => R.subItems && R.subItems.length > 0
    ),
    [a]
  ), S = K(() => D ? a.flatMap(
    (R) => (R.subItems ?? []).map((y) => ({
      parent: R,
      subItem: y
    }))
  ) : a.map((R) => ({
    parent: null,
    subItem: {
      subId: R.id,
      subName: R.name,
      subAvatar: R.avatar,
      subDeactivated: R.deactivated
    }
  })), [D, a]), I = S.length === 0 ? void 0 : S.length === 1 ? S[0].subItem.subName : S.length + " " + n, O = S.length === 1 ? S[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    Qa,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !I ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: g,
      clearable: !1,
      value: I,
      disabled: r,
      loading: b,
      required: x,
      readonly: w,
      size: z,
      avatar: l || !O ? void 0 : {
        type: "person",
        firstName: O,
        lastName: "",
        src: S[0].subItem.subAvatar,
        deactivated: S[0].subItem.subDeactivated
      },
      append: E ?? /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t(er, { open: B, disabled: r, size: z }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: p(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            I && "text-f1-foreground",
            S.length === 1 && !l || c && !I ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            pe,
            {
              tag: "span",
              className: S.length === 1 && S[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: S.length === 0 ? e ?? "" : S.length === 1 ? S[0].subItem.subName : `${S.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Jo = (e) => {
  const [n, a] = T(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (y) => {
    a(y), e.onOpenChange?.(y);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = T(e.entities), [i, c] = T(""), [d, f] = tr("", 300), u = K(
    () => e.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [e.entities]
  ), m = Ze(nr), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(y) {
    if (e.singleSelector) {
      e.onSelect(y), a(!1);
      return;
    }
    const A = e.selectedEntities ?? [], C = l.find((N) => N.id === y.id);
    if (!C)
      return;
    const F = new Set(
      (C.subItems ?? []).map((N) => N.subId)
    ), M = /* @__PURE__ */ new Set([C.id]);
    l.forEach((N) => {
      N.id !== C.id && (N.subItems ?? []).some(
        (se) => F.has(se.subId)
      ) && M.add(N.id);
    });
    const v = [...A];
    function k(N) {
      const U = v.findIndex((se) => se.id === N.id);
      U >= 0 ? v[U] = N : v.push(N);
    }
    M.forEach((N) => {
      const U = l.find((_) => _.id === N);
      if (!U) return;
      const se = U.subItems?.filter(
        (_) => F.has(_.subId)
      ) ?? [], ne = v.findIndex((_) => _.id === N);
      if (ne >= 0) {
        const _ = v[ne].subItems ?? [], q = new Set(_.map((me) => me.subId)), ae = [
          ..._,
          ...se.filter((me) => !q.has(me.subId))
        ];
        k({
          ...U,
          subItems: ae
        });
      } else
        k({
          ...U,
          subItems: se
        });
    }), e.onSelect(v);
  }
  function x(y, A) {
    if (e.singleSelector)
      e.onSelect({ ...y, subItems: [{ ...A }] }), a(!1);
    else {
      const C = e.selectedEntities ?? [], F = new Set(C.map((k) => k.id)), M = new Map(
        C.map((k) => [k.id, k.subItems ?? []])
      );
      F.add(y.id), e.entities.forEach((k) => {
        k.subItems?.some(
          (U) => U.subId === A.subId
        ) && F.add(k.id);
      });
      const v = [];
      e.entities.forEach((k) => {
        if (F.has(k.id)) {
          let U = [...M.get(k.id) ?? []];
          k.subItems?.some(
            (_) => _.subId === A.subId
          ) && (U.some(
            (q) => q.subId === A.subId
          ) || U.push(A));
          const ne = new Set(
            (k.subItems ?? []).map((_) => _.subId)
          );
          U = U.filter(
            (_) => ne.has(_.subId)
          ), v.push({
            ...k,
            subItems: U
          });
        }
      }), e.onSelect(v);
    }
  }
  function w(y) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let A = [];
    const C = e.selectedEntities ?? [];
    if (u) {
      const F = l.find(
        (v) => v.id === y.id
      );
      if (!F)
        return;
      const M = new Set(
        (F.subItems ?? []).map((v) => v.subId)
      );
      for (const v of C) {
        const k = (v.subItems ?? []).filter(
          (N) => !M.has(N.subId)
        );
        k.length > 0 && A.push({
          ...v,
          subItems: k
        });
      }
    } else
      A = (C ?? []).filter((F) => F.id !== y.id);
    e.onSelect(A);
  }
  function E(y, A) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [], F = A.subId, M = [];
    for (const v of C) {
      const k = v.subItems?.filter((N) => N.subId !== F) ?? [];
      k.length > 0 && M.push({
        ...v,
        subItems: k
      });
    }
    e.onSelect(M);
  }
  function z() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const y = e.selectedEntities ?? [];
    let A = [];
    if (u) {
      const C = new Set(
        l.flatMap(
          (F) => (F.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const F of y) {
        const M = (F.subItems ?? []).filter(
          (v) => !C.has(v.subId)
        );
        M.length > 0 && A.push({
          ...F,
          subItems: M
        });
      }
    } else {
      const C = new Set(
        l.map((F) => F.id)
      );
      A = (y ?? []).filter((F) => !C.has(F.id));
    }
    e.onSelect(A);
  }
  function B() {
    const y = [...e.selectedEntities ?? []];
    l.forEach((A) => {
      const C = y.find((F) => F.id === A.id);
      if (!C)
        y.push({
          ...A,
          subItems: A.subItems || []
        });
      else {
        const F = Array.from(
          /* @__PURE__ */ new Set([
            ...C.subItems ?? [],
            ...A.subItems ?? []
          ])
        );
        C.subItems = F;
      }
    }), e.singleSelector || e.onSelect(y);
  }
  const D = (y) => {
    c(y), f(y);
  }, S = (y, A) => {
    e.onItemExpandedChange(y.id, A), s(
      l.map(
        (C) => C.id === y.id ? { ...C, expanded: !y.expanded } : C
      )
    );
  };
  j(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const A = e.entities.map((C) => {
        const F = os(C, d), M = C.subItems?.map((v) => ({
          ...v,
          score: Ge(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, k) => v.score - k.score);
        return {
          ...C,
          score: F,
          expanded: C.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((C) => C.score < 1 / 0).sort((C, F) => C.score - F.score);
      s(A);
    } else {
      const y = e.entities.map((A) => {
        const C = Ge(
          d,
          A.searchKeys ?? [A.name]
        );
        return { ...A, score: C };
      }).filter((A) => A.score < 1 / 0).sort((A, C) => A.score - C.score);
      s(y);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const I = W(null), [O, R] = T(0);
  return Pn(() => {
    const y = () => {
      I.current && R(I.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: I,
      className: p(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Jt,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: E,
          onSubItemSelect: x,
          onClear: z,
          onSelectAll: B,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: D,
          onToggleExpand: S,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? O - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(ar, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      rr,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          is,
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
      lr,
      {
        container: g,
        className: p(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Jt,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: E,
            onSubItemSelect: x,
            onClear: z,
            onSelectAll: B,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: D,
            onToggleExpand: S,
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
function ft(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Qt(e) {
  return ft(e).split(/\s+/).filter((n) => n.length > 0);
}
function Ge(e = "", n) {
  const a = Qt(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = ft(r), s = Qt(r), i = ft(e);
    if (l.includes(i) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function os(e, n) {
  const a = Ge(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((l, s) => {
    const i = Ge(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(a, r);
}
const cs = ({
  id: e,
  createdAt: n,
  title: a,
  description: r,
  icon: l,
  category: s,
  isUnread: i = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = it({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = Bn(n, {
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
        /* @__PURE__ */ t(ot, { icon: l ?? yn }),
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
        /* @__PURE__ */ t("div", { className: "ml-1", children: i && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, ds = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(P, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(P, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(P, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(P, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(P, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), At = Y(
  "ActivityItem",
  te(cs, ds)
), Yn = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), us = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Yn, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  At,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), fs = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Yn, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(At.Skeleton, {}, r)) }), Me = te(us, fs), ms = 3, hs = ["today", "yesterday", "lastWeek", "lastMonth"], gs = (e) => ir(e, ([n]) => {
  const a = hs.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), mt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ps = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = de(), i = ll(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = sr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = gs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ t(
        Me,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(mt, {})
    ] }, u)),
    n && new Array(ms).fill(null).map((u, m) => /* @__PURE__ */ t(At.Skeleton, {}, m))
  ] });
}, bs = () => {
  const e = de();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Me.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(mt, {}),
    /* @__PURE__ */ t(
      Me.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(mt, {}),
    /* @__PURE__ */ t(
      Me.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Qo = Y(
  "ActivityItemList",
  te(ps, bs)
), xs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, vs = {
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
function ws({
  firstName: e,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: l,
  onReactionSelect: s,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : vs[or(
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
                xe,
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
              className: p(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Nn,
                {
                  lastEmojiReaction: l,
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
function ys(e) {
  const n = W(null), a = W(), r = H(() => {
    const s = n.current;
    if (!s) return;
    const i = cr.create(s, {
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
  }, [e]), l = H(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: l };
}
const Ns = ({
  link: e,
  firstName: n,
  lastName: a,
  src: r,
  onClick: l,
  canReact: s = !0,
  lastEmojiReaction: i,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = T(i), g = W(null);
  j(() => {
    h(i);
  }, [i]);
  const b = (D) => {
    h(D), c?.(D);
  }, x = Ye(), { canvasRef: w, handleMouseEnter: E, handleMouseLeave: z } = ys(x), B = vt({
    emoji: xs[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ce,
    {
      href: e,
      onClick: l,
      className: p(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ue()
      ),
      onMouseEnter: x ? void 0 : E,
      onMouseLeave: x ? void 0 : z,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          ws,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: b,
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
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(dt, { date: u }) })
        ] })
      ]
    }
  );
}, Cs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(P, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(P, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(P, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), ec = te(Ns, Cs), tc = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(Cn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t($, { label: a, variant: "outline", onClick: r }) })
] });
function Is({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = T(a), [c, d] = T(n), f = W(null), { fireEmojiConfetti: u } = dr(), m = (b, x) => {
    b.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(x), s || u(x, f);
  }, h = r?.map((b) => b.name).join(", ") || "", g = /* @__PURE__ */ t(
    In,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (b) => {
        m(b, e);
      },
      className: p(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ur(e),
      prepend: /* @__PURE__ */ t(vt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        fr,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: p(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(we, { label: h, children: g }) : g;
}
function ks({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      $,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Nn, { onSelect: n, locale: a }),
    e.map((l) => /* @__PURE__ */ t(
      Is,
      {
        emoji: l.emoji,
        initialCount: l.initialCount,
        hasReacted: l.hasReacted,
        users: l.users,
        onInteraction: n
      },
      l.emoji
    ))
  ] });
}
const Ss = Y("Reactions", ks), As = ({
  content: e,
  collapsed: n
}) => /* @__PURE__ */ t(
  mr,
  {
    content: e,
    className: p(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), Fs = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(P, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(P, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Zn = te(
  As,
  Fs
), en = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: p(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Oe,
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
), ht = G(
  function({
    label: n,
    title: a,
    subtitle: r,
    description: l,
    color: s,
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
          !m && /* @__PURE__ */ o(Z, { children: [
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
              style: i ? {
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
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(Z, { children: [
                  /* @__PURE__ */ t(dt, { date: f }),
                  /* @__PURE__ */ t(
                    V,
                    {
                      icon: mn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(dt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(en, { tags: c }),
              d && /* @__PURE__ */ t(en, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ls = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Xn = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Ls.has(a);
}, _s = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = sl(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Xn(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(Z, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(P, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      ht,
      {
        title: e,
        description: l,
        color: hr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Es = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(P, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(P, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(P, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(P, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Jn = te(_s, Es), Os = ({
  id: e,
  author: n,
  group: a,
  createdAt: r,
  title: l,
  description: s,
  onClick: i,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: g,
  dropdownItems: b,
  noReactionsButton: x = !1
}) => {
  const w = [f.views, f.comments].filter(Boolean).join(" · "), E = !0, z = Bn(r), B = () => {
    i(e);
  }, D = (I) => {
    I.stopPropagation();
  }, S = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: B,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          ze,
          {
            href: n.url || "#",
            title: S,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              xe,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(ot, { icon: Et }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Z, { children: [
                  /* @__PURE__ */ t(
                    ze,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: S,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        xe,
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
                    ze,
                    {
                      href: n.url,
                      title: S,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: S
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ot, { icon: Et, size: "sm" }) }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: p(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ t(
                  ze,
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
                    $,
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
                    Se,
                    {
                      items: b,
                      icon: ct,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Se,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...b ?? []
                    ],
                    icon: ct,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: z }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: p(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ t(Zn, { content: s, collapsed: E })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Xn(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: D,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(P, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(Jn, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: w }),
          !x && /* @__PURE__ */ t(
            Ss,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: gr
              }
            }
          )
        ] })
      ]
    }
  );
}, Ts = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(P, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(P, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(P, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(P, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(P, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Zn.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(P, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(Jn.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(P, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(P, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), nc = te(
  Os,
  Ts
), Qn = ie.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: p(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ t(
          xe,
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
                icon: xn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, i) => /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ t(Oe, { ...s }, s.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(pr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              $,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              $,
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
}), Ds = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(P, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(P, { className: "h-4" }),
    /* @__PURE__ */ t(P, { className: "h-4" })
  ] })
] });
Qn.displayName = "OnePersonListItem";
const ac = le(
  Y(
    "OnePersonListItem",
    te(Qn, Ds)
  )
), Ps = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Rs({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(Al, { children: /* @__PURE__ */ t(
    zs,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function zs({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? br : l?.enabled ? Gl : tl, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Ws,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const rc = Y(
  "ApplicationFrame",
  Rs
), Bs = ({ contentId: e }) => {
  const n = de();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: ue(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function $s(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Ms(e, n) {
  const { sidebarState: a, toggleSidebar: r } = Fe(), l = W(e);
  j(() => {
    n && $s(
      e,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, a, r]);
}
function Ws({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Fe(), f = Ye(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: g,
    resizable: b
  } = xr(), x = m === "fullscreen", w = m === "canvas", { open: E } = Xe(), z = b ? g : wr, B = W(x), D = x && !B.current, S = !x && B.current, [
    I,
    O
  ] = T(!1);
  j(() => {
    !x && B.current && O(!0), B.current = x;
  }, [x]);
  const R = x || I || S, y = K(() => D ? { duration: 0.15, ease: "easeOut" } : S ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [D, S]), A = st(
    `(max-width: ${We.xl}px)`,
    { initializeWithValue: !0 }
  ), C = st(`(max-width: ${We.md}px)`, {
    initializeWithValue: !0
  });
  return j(() => {
    d(u);
  }, [u, d]), j(() => {
    d(E);
  }, [E, d]), Ms(u, A), /* @__PURE__ */ t(
    vr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(kn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Te, { children: s === "unlocked" && /* @__PURE__ */ t(
            Q.nav,
            {
              className: p(
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
              className: p(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (F) => {
                s === "hidden" ? F?.setAttribute("inert", "") : F?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Bs, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            Q.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !C ? z : 0
              },
              transition: { paddingRight: Ps },
              children: [
                /* @__PURE__ */ t(
                  Q.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: p(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      R ? "overflow-hidden" : "overflow-auto",
                      !u && !E && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      Q.div,
                      {
                        className: p(
                          "flex max-w-full flex-1",
                          R ? "overflow-hidden" : "overflow-auto"
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
                    className: p(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      C ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: C ? void 0 : { right: z },
                    children: /* @__PURE__ */ t(yr, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  Q.div,
                  {
                    className: p(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      C ? "fixed inset-0 z-[30]" : p(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        R || w ? "z-20" : "z-0",
                        s === "hidden" && R ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: C || x ? "100%" : z
                    },
                    transition: y,
                    onAnimationComplete: () => {
                      I && O(!1);
                    },
                    children: /* @__PURE__ */ t(Nr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Ul, {})
        ] }) })
      ] })
    }
  );
}
const js = ve({
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
function ea({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Fe();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: js({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              $,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: hn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center",
                  i ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    il,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    xe,
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
                        className: p(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: p(
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
            /* @__PURE__ */ t(gn, {}),
            /* @__PURE__ */ t(jn, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: p(
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
ea.displayName = "DaytimePage";
const lc = le(
  Y("DaytimePage", ea)
);
function Vs(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Us({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Se, { items: Vs(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: p(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ue()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(V, { icon: Sn, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const sc = le(
  Y("OmniButton", Us)
);
function ta({ children: e, header: n, embedded: a = !1 }) {
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
ta.displayName = "Page";
const ic = le(Y("Page", ta));
function Gs({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = K(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(P, { className: "size-6" }),
    /* @__PURE__ */ t(P, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    tn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Hs,
    {
      companies: e,
      selected: i,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        tn,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Hs = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const s = de(), [i, c] = T(!1), d = K(
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
      ...l.length ? [{ type: "separator" }] : [],
      ...l
    ],
    [e, l]
  ), f = (u) => {
    const m = l?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ t(
    Ve,
    {
      label: s.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: s.navigation.sidebar.companySelector.placeholder,
      open: i,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: p(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ue()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              Q.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(V, { icon: xt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, tn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: p(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        Cr,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: An, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(pe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function oc({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = de();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Se, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: p(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ue("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ t(
            xe,
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
    a && /* @__PURE__ */ t(we, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        $,
        {
          icon: yn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Ir, { type: "highlight", size: "sm", icon: An }) })
    ] }) })
  ] });
}
function Ks({ isExpanded: e }) {
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
            className: p(
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
            className: p(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function qs() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Fe(), l = W(null);
  return j(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    In,
    {
      variant: "ghost",
      size: "md",
      onClick: () => a(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: l,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ t("div", { className: p("hidden", { flex: !r }), children: /* @__PURE__ */ t(Ks, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: p("hidden", { flex: r }), children: /* @__PURE__ */ t(V, { icon: Ae, size: "md" }) })
      ]
    }
  );
}
function cc({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Gs,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(qs, {})
  ] });
}
function Ys() {
  const [e, n] = T(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const na = It(void 0);
function Zs({ children: e }) {
  const [n, a] = T(!1), [r, l] = T(null);
  return /* @__PURE__ */ t(
    na.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: e
    }
  );
}
function Ft() {
  const e = Ze(na);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const Xs = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      V,
      {
        icon: e.icon,
        size: "md",
        className: p(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ t(qe, { value: e.badge, size: "sm", type: "bold" })
] }), Js = ({ item: e }) => {
  const { isActive: n } = bt(), { label: a, icon: r, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    Ce,
    {
      ...l,
      className: p(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ue("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(Xs, { item: e, active: s })
    }
  );
}, Qs = ({
  item: e,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: l,
  total: s,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = de(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Ft(), { isActive: b } = bt(), x = b(e.href, { exact: e.exactMatch }), w = W(!1), [E, z] = T(!1), B = l === 0, D = l === s - 1, S = s === 1, I = K(() => {
    const F = [];
    return !S && !B && F.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: kr
    }), !S && !D && F.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Sr
    }), F.length > 0 && F.push({ type: "separator" }), F.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: Ar,
      critical: !0
    }), F;
  }, [S, B, D, f, i, l, r, e]), O = () => {
    m(!0), z(!1), g(e.href || null), w.current = !0;
  }, R = () => {
    m(!1), g(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, y = u && h === e.href, A = K(
    () => p(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      E && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [x, E, y, d]
  ), C = K(() => /* @__PURE__ */ o(Z, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(ti, { tooltip: n, children: /* @__PURE__ */ o(
      Ce,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: p(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          y && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            V,
            {
              icon: e.icon,
              size: "md",
              className: p(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Fr, { size: "xs", avatar: e.avatar }) : null,
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
        className: p(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          E && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Se,
          {
            open: E,
            onOpenChange: z,
            items: I,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(V, { icon: ct, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, E, y, I, n]);
  return d ? /* @__PURE__ */ t(
    Fn,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: O,
      onDragEnd: R,
      className: A,
      whileDrag: {
        scale: 1.05
      },
      children: C
    }
  ) : /* @__PURE__ */ t("div", { className: A, children: C });
}, aa = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = T(n), f = Ye(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(_r, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ue("focus-visible:ring-inset"),
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
            Q.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                V,
                {
                  icon: xt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(Er, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      Q.div,
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
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: l })
      }
    ) })
  ] }) });
}, rt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Ft(), d = W(!1), f = Lr(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (b) => {
    !i && !d.current && r?.(e, b);
  }, g = /* @__PURE__ */ t(
    aa,
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
          className: p(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: e.items.map((b, x) => /* @__PURE__ */ t(Js, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Fn,
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
function dc({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = W(null), i = e.filter(
    (b) => b.isSortable === !1
  ), [c, d] = T(
    e.filter((b) => b.isSortable !== !1)
  ), [f, u] = T(0), m = H((b) => {
    d(b);
  }, []), h = H(
    (b) => {
      a?.(b);
    },
    [a]
  ), g = Ys();
  return /* @__PURE__ */ t(Zs, { children: /* @__PURE__ */ t(kn, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    ei,
    {
      disableDragging: g,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function ei({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: l,
  onDragEnd: s,
  favorites: i = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = de(), { isDragging: m } = Ft(), h = e.some((v) => v.isRoot), g = e.filter((v) => !v.isRoot).length > 0, b = n.length > 0, x = W(null), [w, E] = T(i), z = i.length > 0;
  j(() => {
    JSON.stringify(i) !== JSON.stringify(w) && E(i);
  }, [i]);
  const B = (v) => {
    E(v);
  }, D = H(
    (v) => {
      const k = w.filter((N) => N.href !== v.href);
      E(k), c?.(k);
    },
    [w, c]
  ), S = H(
    (v, k) => {
      if (k < 0 || k >= w.length) return;
      const N = [...w], [U] = N.splice(v, 1);
      N.splice(k, 0, U), E(N), c?.(N);
    },
    [w, c]
  ), [I, O] = T(!1), R = W(null);
  j(() => {
    n.length > 0 && !I && (a([...n]), O(!0));
  }, [n, a, I]), j(() => {
    const v = () => {
      R.current !== null && window.clearTimeout(R.current), R.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), R.current !== null && window.clearTimeout(R.current);
    };
  }, [r, n, d]);
  const y = "flex flex-col gap-0.5", A = K(
    () => w.reduce(
      (v, k, N) => (k.label in v || (v[k.label] = []), v[k.label].push(N), v),
      {}
    ),
    [w]
  ), C = K(
    () => z && w.map((v, k) => /* @__PURE__ */ t(
      Qs,
      {
        isSortable: !f,
        tooltip: (A[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: D,
        index: k,
        total: w.length,
        onMove: S,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      z,
      w,
      A,
      D,
      S,
      c,
      f
    ]
  ), F = "flex flex-col gap-3", M = K(() => n.map((v) => /* @__PURE__ */ t(
    rt,
    {
      category: v,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: n
    },
    v.id
  )), [n, f, r, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => v.isRoot).map((v, k) => /* @__PURE__ */ t(
          rt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${k}`
        )) }),
        z && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(aa, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: y, children: C }) : /* @__PURE__ */ t(
          Ot,
          {
            axis: "y",
            values: w,
            onReorder: B,
            className: y,
            children: C
          }
        ) }) }) }),
        g && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => !v.isRoot).map((v, k) => /* @__PURE__ */ t(
          rt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${k}`
        )) }),
        b && /* @__PURE__ */ t(
          "div",
          {
            className: p(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: F, children: M }) : /* @__PURE__ */ t(
              Ot,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: F,
                children: M
              }
            )
          }
        )
      ]
    }
  );
}
const ti = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(we, { description: e, children: n }) : n;
function uc({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: p(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ue()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(V, { icon: Or, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Tr, { keys: a }) })
      ]
    }
  ) });
}
const nn = ({ position: e }) => /* @__PURE__ */ t(
  Q.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: p(
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
function ni({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Fe(), i = Ye(), [c, d] = it({ threshold: 1 }), [f, u] = it({ threshold: 1 }), m = de(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, g = () => a ? nl(a) && r ? Rn(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    Q.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: p(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : p(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          s ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: l === "locked" || s ? 0 : "8px",
        borderRadius: l === "locked" || s ? "0" : "12px",
        left: l === "locked" ? "0" : s ? 0 : "8px",
        x: l === "hidden" ? -260 : 0,
        opacity: l === "hidden" ? s ? 0.7 : 0 : 1,
        pointerEvents: l === "hidden" ? "none" : "auto"
      },
      transition: h,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ke, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Te, { children: [
            !d && /* @__PURE__ */ t(nn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(nn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const fc = le(ni), ai = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, an = {
  approved: {
    icon: bn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ae,
    type: "critical",
    size: "sm"
  }
}, ri = {
  icon: Sn,
  type: "neutral",
  size: "sm"
}, li = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, si = (e) => e in an ? an[e] : ri;
function rn(e) {
  return li[e ?? "neutral"] ?? 0;
}
const ii = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = de(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[a], c = K(() => r.map((d) => {
    const f = si(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => rn(f.badge?.type) - rn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(je, { text: i, variant: ai[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Ln, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, oi = ({ steps: e }) => {
  const a = de().approvals.history, r = e.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: p(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: e.map((l, s) => /* @__PURE__ */ o(Z, { children: [
        /* @__PURE__ */ t(
          ii,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, mc = le(
  Y("OneApprovalHistory", oi)
), ci = {
  records: [],
  type: "flat",
  groups: []
}, ln = () => {
}, gt = (e, n) => "id" in e ? `${e.id}` : n ?? JSON.stringify(e), di = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Tt]: n[Tt]
  })),
  groups: e.groups
}), sn = (e, n, a) => e.source.idProvider?.(n, a) ?? gt(n, a), ui = (e, n) => {
  const a = e.data.records.every(
    (l, s) => sn(e, l, s) === sn(n, l, s)
  ), r = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return a && r;
}, fi = (e, n) => e !== null && e.data === n.data && ui(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore, mi = (e, n, a) => e.records.length === n.records.length && e.records.every(
  (r, l) => a(r, l) === a(n.records[l], l)
), hi = (e, n, a) => {
  const r = /* @__PURE__ */ new Map();
  let l = !1;
  n.records.forEach((i, c) => {
    r.set(a(i, c), i);
  });
  const s = e.records.map((i, c) => {
    const d = r.get(a(i, c));
    return !d || d === i ? i : (l = !0, d);
  });
  return l ? {
    ...e,
    records: s
  } : e;
}, gi = (e, n) => {
  const a = e.paginationInfo, r = n.paginationInfo;
  return a?.type === "pages" || r?.type === "pages" ? a?.type !== "pages" || r?.type !== "pages" || a.currentPage !== r.currentPage : !1;
}, Ee = (e) => ({
  data: di(e.data),
  paginationInfo: e.paginationInfo
});
function hc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: a,
  idProvider: r,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = T(0), [u, m] = T(0), h = c === "manual" ? i : c === "session" ? d : null, [g, b] = T({
    state: null,
    version: 0
  }), [x, w] = T(null), [E, z] = T(0), B = W(h), D = W(u), S = W(null), I = W(
    null
  ), O = g.state, R = g.version, y = H(() => {
    I.current !== null && (clearTimeout(I.current), I.current = null);
  }, []), A = H(
    (_) => {
      y(), I.current = setTimeout(() => {
        I.current = null;
        const q = S.current;
        !q || q.key !== _ || (q.canUseCurrentData = !0, z((ae) => ae + 1));
      }, 0);
    },
    [y]
  ), C = H(
    (_) => {
      b((q) => _ === null ? q.state === null ? q : { state: null, version: q.version + 1 } : fi(q.state, _) ? q : { state: _, version: q.version + 1 });
    },
    []
  ), F = O?.data ?? ci, M = H(() => {
    m((_) => _ + 1);
  }, []);
  j(() => y, [y]), j(() => {
    if (!O || h == null) {
      S.current = null, y(), w(null), B.current = h, D.current = u;
      return;
    }
    if (D.current !== u) {
      if (O.isLoading || O.isLoadingMore) return;
      D.current = u, S.current = null, y(), w(Ee(O));
      return;
    }
    const _ = B.current !== h;
    if (B.current = h, _) {
      S.current = {
        key: h,
        requestedAtVersion: R,
        canUseCurrentData: !1
      }, A(h);
      return;
    }
    if (O.isLoading || O.isLoadingMore)
      return;
    const q = S.current?.key === h ? S.current : null;
    if (q) {
      const ae = r ?? O.source.idProvider ?? gt, me = R > q.requestedAtVersion, ye = x ? !mi(
        O.data,
        x.data,
        ae
      ) : !0;
      if (!q.canUseCurrentData && !me && !ye || !q.canUseCurrentData && me && !ye)
        return;
      S.current = null, y(), w(Ee(O));
      return;
    }
    w((ae) => {
      if (!ae)
        return Ee(O);
      const me = r ?? O.source.idProvider ?? gt;
      if (gi(ae, O))
        return Ee(O);
      const ye = hi(
        ae.data,
        O.data,
        me
      );
      return O.data.records.length <= ae.data.records.length ? ye === ae.data && ae.paginationInfo === O.paginationInfo ? ae : {
        ...ae,
        data: ye,
        paginationInfo: O.paginationInfo
      } : Ee(O);
    });
  }, [
    y,
    O,
    R,
    h,
    r,
    u,
    A,
    x,
    E
  ]);
  const v = x?.data ?? F, k = x?.paginationInfo ?? O?.paginationInfo ?? null, N = ol({
    dataSource: O?.source ?? {},
    data: v,
    paginationInfo: k,
    setPage: O?.setPage ?? ln,
    loadMore: O?.loadMore ?? ln,
    isLoading: !!(O?.isLoading || O?.isLoadingMore),
    idProvider: r,
    itemUrl: l ?? O?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: a
  }), U = H(
    (_) => {
      c === "session" && f((q) => q + 1), N.setActiveItemId(_);
    },
    [c, N]
  ), se = H(() => {
    S.current = null, y(), w(null), c === "session" && f((_) => _ + 1), N.setActiveItemId(null);
  }, [y, c, N]), ne = K(() => !N.activeItem || N.activeIndex < 0 ? null : {
    activeItemId: N.activeItemId,
    activeItem: N.activeItem,
    currentIndex: N.absoluteIndex ?? N.activeIndex,
    totalCount: N.totalItems ?? N.loadedItemsCount,
    previousItem: N.previousItem,
    nextItem: N.nextItem,
    canGoPrevious: N.hasPrevious && !N.isNavigating,
    canGoNext: N.hasNext && !N.isNavigating,
    goToPrevious: N.goToPrevious,
    goToNext: N.goToNext,
    isNavigating: N.isNavigating,
    previousItemUrl: N.previousItemUrl,
    nextItemUrl: N.nextItemUrl
  }, [N]);
  return K(
    () => ({
      ...N,
      isReady: O !== null,
      controls: ne,
      openItem: U,
      closeItem: se,
      resetSnapshot: M,
      [Dr]: C
    }),
    [
      N,
      O,
      ne,
      U,
      se,
      M,
      C
    ]
  );
}
const Lt = {
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
}, pi = ve({
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
      ...Lt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), bi = ie.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: p("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: p(pi({ gap: a, tileSize: l }), n),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), xi = ve({
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
}), ra = G(function({
  className: n,
  grow: a,
  basis: r,
  shrink: l,
  paddingX: s,
  paddingY: i,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: g,
  ...b
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: p(
        xi({
          paddingX: s,
          basis: r,
          paddingY: i,
          grow: a,
          shrink: l,
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
      ...b
    }
  );
}), vi = ve({
  base: "flex-row",
  variants: {
    gap: {
      ...Lt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), wi = ie.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, s) {
  return /* @__PURE__ */ t(
    ra,
    {
      className: p(vi({ gap: a, wrap: r }), n),
      ref: s,
      ...l
    }
  );
}), yi = ve({
  base: "flex-col",
  variants: {
    gap: {
      ...Lt
    }
  },
  defaultVariants: {}
}), Ni = G(function({ className: n, gap: a, children: r, ...l }, s) {
  return /* @__PURE__ */ t(
    ra,
    {
      className: p(yi({ gap: a }), n),
      ref: s,
      ...l,
      children: r
    }
  );
}), gc = he(
  {
    name: "Stack",
    type: "layout"
  },
  Ni
), pc = he(
  {
    name: "Split",
    type: "layout"
  },
  wi
), bc = he(
  {
    name: "AutoGrid",
    type: "layout"
  },
  bi
), Ci = ({ children: e }) => {
  const { enabled: n } = _n();
  return /* @__PURE__ */ t(
    "div",
    {
      className: p(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        Q.div,
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
}, Ii = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), ki = G(function({ header: n, children: a, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = _n();
  j(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (g) => !!g && !(ie.isValidElement(g) && g.type === ie.Fragment && ie.Children.count(g.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    wt,
    {
      className: p(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(yt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Nt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Ii, {}),
                /* @__PURE__ */ t(En, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(we, { label: n.info, children: /* @__PURE__ */ t(
                V,
                {
                  icon: On,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(Tn, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(je, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                Pr,
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
            /* @__PURE__ */ t(Ci, { children: /* @__PURE__ */ t(Rr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              $,
              {
                icon: f ? zr : Br,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Ct, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((g, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, b)) }),
          ie.Children.toArray(a).filter(m).map((g, b) => /* @__PURE__ */ o(ie.Fragment, { children: [
            b > 0 && /* @__PURE__ */ t($r, { bare: !0 }),
            g
          ] }, b))
        ] }),
        r && /* @__PURE__ */ t(Mr, { children: /* @__PURE__ */ t($, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Si = ve({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Ai = G(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      wt,
      {
        className: p(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(yt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Nt, { children: n.title }) : /* @__PURE__ */ t(P, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(En, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Ct,
            {
              "aria-hidden": !0,
              className: p(a !== "full" && Si({ height: a })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ t(
                P,
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
), ke = le(
  Y("Widget", te(ki, Ai))
), ce = Object.assign(
  G(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ t(ke, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ke.Skeleton
  }
), Fi = te(
  G(function({ canBeBlurred: n, ...a }, r) {
    const l = {
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
      ce,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ t(cl, { ...s, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), Li = Y(
  "AreaChartWidget",
  Fi
), _i = G(function(n, a) {
  return /* @__PURE__ */ t(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(dl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Ei = Y(
  "BarChartWidget",
  te(_i, ce.Skeleton)
), Oi = te(
  G(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(ul, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ti = Y(
  "LineChartWidget",
  Oi
), Di = te(
  G(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(fl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Pi = Y(
  "PieChartWidget",
  Di
), Ri = te(
  G(
    function(n, a) {
      return /* @__PURE__ */ t(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), zi = Y(
  "SummariesWidget",
  Ri
), Bi = te(
  G(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(ml, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), $i = Y(
  "VerticalBarChartWidget",
  Bi
), xc = he(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Li
), vc = he(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Ei
), wc = he(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Ti
), yc = he(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Pi
), Nc = he(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  $i
), Cc = he(
  {
    name: "SummariesWidget",
    type: "info"
  },
  zi
), Mi = (e, n) => /* @__PURE__ */ o(
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
), Wi = G(Mi), ji = (e, n) => /* @__PURE__ */ o(
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
), Vi = G(ji), Ui = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Gi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Hi = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ki = {
  "line-chart": "default",
  "bar-chart": "promote"
}, qi = G(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Ui[i], f = Gi[i], u = Hi[i], m = Ki[i];
    return /* @__PURE__ */ o(
      wt,
      {
        className: p(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(yt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Nt, { children: n }) }),
          /* @__PURE__ */ o(Ct, { className: p("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Wi, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Vi, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                $,
                {
                  label: r,
                  icon: l,
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
), Ic = le(
  Y("ChartWidgetEmptyState", qi)
);
function Yi(e, n) {
  const a = W(null), r = W(null), [l, s] = T({
    visibleItems: [],
    overflowItems: []
  });
  Wr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const i = H(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = H(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const g = u[h].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = H(
    (u, m) => {
      let h = 0, g = 0;
      for (let b = 0; b < u.length; b++) {
        const x = g + u[b];
        if (x > m + 30) break;
        g = x, g = i(
          g,
          b,
          u.length
        ), h++;
      }
      return h;
    },
    [i]
  ), f = H(() => {
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
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const et = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Yi(n, l);
  return j(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: p("relative flex h-full flex-col", r),
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
            style: { gap: `${l}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${l}px` },
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
et.displayName = "VerticalOverflowList";
const kc = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((l) => /* @__PURE__ */ t(ht, { ...l }, l.title)) }) : /* @__PURE__ */ t(
  et,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ t(ht, { ...l }, l.title)
  }
) : null, Zi = ({ onClick: e, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: p(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: a, tabIndex: 1, children: n });
};
function Sc({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ t(Zi, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
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
const Xi = G(
  function({ content: n, label: a, color: r, ...l }, s) {
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
        "icon" in l && l.icon && /* @__PURE__ */ t("span", { className: p("flex", r), children: /* @__PURE__ */ t(V, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ t("span", { className: p("flex", r), children: /* @__PURE__ */ t(vt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Ac = G(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          Xi,
          {
            label: r,
            content: l,
            color: s,
            ...i
          },
          `${r}-${l}`
        ))
      }
    );
  }
), Ji = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = p(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: l, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: l, children: r });
};
function Fc({
  id: e,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: l,
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    Ji,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(jr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Vr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Ln,
          {
            avatars: r,
            remainingCount: l,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const Qi = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function on({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const s = p(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Qi, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(Cn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const eo = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function pt({
  id: e,
  title: n,
  alert: a,
  rawTag: r,
  count: l,
  icon: s,
  rightIcon: i,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = p(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(eo, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        V,
        {
          icon: s,
          size: "md",
          className: p("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ t(
        V,
        {
          icon: i,
          size: "md",
          className: p("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(Tn, { ...a }),
      r && /* @__PURE__ */ t(Oe, { ...r }),
      !!l && /* @__PURE__ */ t(qe, { value: l })
    ] })
  ] });
}
function Lc({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(on, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(on, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function _c({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((s) => /* @__PURE__ */ t(pt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(pt, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const to = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Ec = G(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            we,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(V, { icon: On, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      l.map((i) => /* @__PURE__ */ t(to, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Oc({
  title: e,
  subtitle: n,
  data: a,
  helpText: r,
  legend: l = !1,
  hideTooltip: s = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      hl,
      {
        data: a,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: p(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const la = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, no = ({
  data: e = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const i = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!l || r === void 0) return;
    const u = la(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), b = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = Ne[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, lt = "--:--", ao = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: Ne.empty
    };
  if (!n)
    return {
      value: 1,
      color: Ne.empty
    };
}, ro = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = la(
    n,
    a
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : ao(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - g) / s;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / s + x,
            color: Ne.overtime
          }
        ] : [
          ...u,
          {
            value: g / s,
            color: Ne.overtime
          },
          {
            value: x,
            color: Ne[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: Ne.empty
  }), f;
}, lo = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = r ? zt(r) : lt, i = n === void 0 || n > 0 ? lt : l ? zt(l.to) : lt, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: i,
    time: m
  };
}, Ne = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function so({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = ro({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: s, time: i } = lo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(gl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      pl,
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
          Ur,
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
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: s })
    ] })
  ] });
}
function io({
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
            className: p(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(V, { icon: Gr })
      ]
    }
  );
}
function Tc({
  trackedMinutes: e,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: l,
  locations: s,
  canShowLocation: i = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: g = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: E = !0,
  projectSelectorElement: z,
  breakTypeName: B
}) {
  const { status: D, statusText: S, subtitle: I, statusColor: O } = no({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), R = D === "clocked-out", y = m?.map((_) => ({
    value: _.id,
    label: _.duration ? `${_.name} · ${_.duration}` : _.name,
    description: _.description,
    tag: _.isPaid ? r.paid : r.unpaid
  })) ?? [], [A, C] = T(!1), F = () => {
    if (y.length > 1)
      A || C(!0);
    else {
      const _ = y?.[0]?.value;
      u?.(_);
    }
  }, M = (_) => {
    h?.(_), C(!1), u?.(_);
  }, v = R && s.length && !c && i, k = s.find((_) => _.id === l), N = s.map((_) => ({
    value: _.id,
    label: _.name,
    icon: _.icon
  })), U = D === "break", [se, ne] = T(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: S }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                Q.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: O
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
                    backgroundColor: O
                  }
                }
              )
            ] })
          ] }),
          I && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: I })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            $,
            {
              onClick: d,
              label: r.clockIn,
              icon: Dt
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(Z, { children: [
            g && /* @__PURE__ */ t(Z, { children: y.length > 1 && h ? /* @__PURE__ */ t(
              Ve,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: M,
                open: A,
                onOpenChange: C,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  $,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Pt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              $,
              {
                onClick: F,
                label: r.break,
                variant: "neutral",
                icon: Pt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              $,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Rt
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(Z, { children: [
            /* @__PURE__ */ t(
              $,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Rt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              $,
              {
                onClick: d,
                label: r.resume,
                icon: Dt
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ t(
        so,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(Z, { children: [
      /* @__PURE__ */ t(
        Ve,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: N,
          onChange: w,
          open: se,
          onOpenChange: ne,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            io,
            {
              text: k?.name,
              placeholder: r.selectLocation,
              icon: k?.icon
            }
          ) })
        }
      ),
      E && z
    ] }) : /* @__PURE__ */ o(Z, { children: [
      i && k && /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t(Oe, { text: k.name, icon: k.icon }) }),
      E && z,
      U && B && /* @__PURE__ */ t(Oe, { text: B })
    ] }) })
  ] }) });
}
const oo = {
  done: qr,
  "in-progress": Kr,
  todo: Hr
}, co = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function uo({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(e);
  }, s = K(() => {
    if (!r)
      return oo[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    pt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: co[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Yr
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function Dc({
  tasks: e,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: l = "No tasks assigned"
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
    ).map(({ id: u, text: m, badge: h, counter: g }) => ({
      id: u,
      text: m,
      badge: h,
      counter: g,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ t(
    uo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var fo = Object.defineProperty, mo = Object.defineProperties, ho = Object.getOwnPropertyDescriptors, He = Object.getOwnPropertySymbols, sa = Object.prototype.hasOwnProperty, ia = Object.prototype.propertyIsEnumerable, cn = (e, n, a) => n in e ? fo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, oe = (e, n) => {
  for (var a in n || (n = {})) sa.call(n, a) && cn(e, a, n[a]);
  if (He) for (var a of He(n)) ia.call(n, a) && cn(e, a, n[a]);
  return e;
}, tt = (e, n) => mo(e, ho(n)), go = (e, n) => {
  var a = {};
  for (var r in e) sa.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && He) for (var r of He(e)) n.indexOf(r) < 0 && ia.call(e, r) && (a[r] = e[r]);
  return a;
}, po = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, bo = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), xo = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = oe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, vo = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = oe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, wo = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + e.width, po(l) || bo({ usedSpot: l, spotsList: a }) ? null : l;
}, yo = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((l, s, i) => {
  if (l === a) return wo({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = xo({ position: n, spot: l, stone: r });
  return c || vo({ position: n, stone: r, spot: l }) || l;
});
function No(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (e(l)) return l;
  }
  return null;
}
var Co = (e, n) => n.filter(e), Io = (e, n) => [...n].sort(e), ko = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, So = (e) => Io(ko, e), Ao = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
  let l = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let s = 0, i = e.length; s < i; s += 1) {
    let c = e[s];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, Fo = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Lo = ({ availableSpots: e, stone: n }) => No((a) => Fo(a, n), e);
function _o({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Lo({ availableSpots: n, stone: e }), l = { left: r.left, top: r.top }, s = Ao({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), i = [...n, s], c = yo({ spots: i, position: l, optimalSpot: r, stone: e });
  return i = [...Co(Boolean, c)], i = So(i), { position: l, availableSpots: i };
}
var Eo = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = _o({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, Oo = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), To = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = T({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = Oo(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let b = Eo({ stones: h, containerSize: g });
    f(tt(oe({}, b), { stones: h }));
  }, [a, e, n, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, Do = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Po = ({ transition: e, transitionDuration: n }) => e ? { transition: Do(n)[e] } : null, Ro = (e) => e ? tt(oe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, zo = ({ style: e, position: n, transition: a, transitionDuration: r }) => oe(oe(tt(oe({}, e), { position: "absolute" }), Ro(n)), Po({ transition: a, transitionDuration: r }));
function Bo(e, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, l);
    }, n);
  };
}
var $o = () => {
  let [e, n] = T(), a = W(Bo(n, 300));
  return j(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, Mo = (e) => {
  let [n, a] = T(null);
  return j(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) a(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, Wo = (e) => {
  var n = e, { children: a, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = go(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = W([]), f = W(null), u = $o(), m = Mo(f), { positions: h, containerHeight: g } = To({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = oe({ minHeight: g ?? 0, position: "relative" }, r);
  return t("div", tt(oe({ ref: f, style: b }, c), { children: zn.map(a, (x, w) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let E = { style: zo({ style: x.props.style, position: h[w], transition: l, transitionDuration: s }), ref: (z) => d.current[w] = z };
    return Rn(x, oe(oe({}, x.props), E));
  }) }));
};
const jo = { sm: 340, md: 480, lg: 640 }, dn = G(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = jo[a], [s, i] = T(), c = zn.toArray(n), d = W(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Wo, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Vo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Pc = te(dn, () => /* @__PURE__ */ t(Dn, { children: /* @__PURE__ */ t(dn, { children: Vo.map((e, n) => /* @__PURE__ */ t(ke.Skeleton, { height: e }, n)) }) })), un = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Rc = te(
  G(function({ children: n }, a) {
    return /* @__PURE__ */ t(Ke, { ref: a, showBar: !1, children: /* @__PURE__ */ t(un, { children: n }) });
  }),
  () => /* @__PURE__ */ t(Dn, { orientation: "horizontal", children: /* @__PURE__ */ o(un, { children: [
    /* @__PURE__ */ t(ke.Skeleton, {}),
    /* @__PURE__ */ t(ke.Skeleton, {}),
    /* @__PURE__ */ t(ke.Skeleton, {})
  ] }) })
);
function Uo({
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
    Zr,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const zc = le(
  Y("WidgetEmptyState", Uo)
), oa = G(
  ({ title: e, children: n }, a) => (Xr(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
oa.displayName = "WidgetSection";
const Bc = le(
  Y("WidgetSection", oa)
), $c = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Jr(), s = window.location.pathname, i = K(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = K(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return i ? r : (l && console.error(c), null);
}, Mc = le(
  he(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ke
  )
);
export {
  Qo as ActivityItemList,
  bs as ActivityItemListSkeleton,
  Ul as AiPromotionChat,
  Gl as AiPromotionChatProvider,
  rc as ApplicationFrame,
  Rd as AreaChart,
  xc as AreaChartWidget,
  bc as AutoGrid,
  Ir as Badge,
  zd as BarChart,
  vc as BarChartWidget,
  ps as BaseActivityItemList,
  Bd as BaseBanner,
  Ns as BaseCelebration,
  Os as BaseCommunityPost,
  Vc as BaseTabs,
  Uc as BreadcrumbSelect,
  Nl as Breadcrumbs,
  ht as CalendarEvent,
  kc as CalendarEventList,
  Gc as CardSelectableContainer,
  al as Carousel,
  $d as CategoryBarChart,
  Oc as CategoryBarSection,
  ec as Celebration,
  Cs as CelebrationSkeleton,
  Ic as ChartWidgetEmptyState,
  Hc as Chip,
  Tc as ClockInControls,
  Md as ComboChart,
  nc as CommunityPost,
  Ts as CommunityPostSkeleton,
  Gs as CompanySelector,
  qe as Counter,
  Pc as Dashboard,
  lc as DaytimePage,
  Kc as DetailsItem,
  qc as DetailsItemsList,
  Wd as Dialog,
  Se as Dropdown,
  Jo as EntitySelect,
  Yc as F0ActionBar,
  jd as F0AiBanner,
  Cn as F0AvatarModule,
  Zo as F0Callout,
  Zc as F0TableOfContent,
  Xo as F0VersionHistory,
  Xc as F1SearchBox,
  Jc as FILE_TYPES,
  Qc as FileItem,
  tc as HighlightBanner,
  Ac as IndicatorsList,
  ed as Input,
  td as Item,
  nd as ItemSectionHeader,
  Vd as LineChart,
  wc as LineChartWidget,
  dc as Menu,
  ad as MobileDropdown,
  Ud as NotesTextEditor,
  Gd as NotesTextEditorPatchTargetNotFoundError,
  Hd as NotesTextEditorSkeleton,
  Kd as NotesTextEditorUnsupportedPatchTypeError,
  rd as NumberInput,
  sc as OmniButton,
  mc as OneApprovalHistory,
  ld as OneCalendar,
  sd as OneCalendarInternal,
  id as OneDataCollection,
  od as OneDateNavigator,
  Zr as OneEmptyState,
  cd as OnePagination,
  ac as OnePersonListItem,
  $c as OneRestrictComponent,
  ic as Page,
  Yo as PageHeader,
  qd as PieChart,
  yc as PieChartWidget,
  Ci as PrivateBox,
  Yd as ProgressBarChart,
  Zd as RadarChart,
  Ss as Reactions,
  dd as ResourceHeader,
  mr as RichTextDisplay,
  ud as RichTextEditor,
  Mc as ScrollArea,
  uc as SearchBar,
  fd as SectionHeader,
  Ve as Select,
  Tr as Shortcut,
  fc as Sidebar,
  oc as SidebarFooter,
  cc as SidebarHeader,
  pn as Spinner,
  pc as Split,
  gc as Stack,
  Cc as SummariesWidget,
  md as Switch,
  hd as Tabs,
  gd as TabsSkeleton,
  Dc as TasksList,
  pd as Textarea,
  bd as ToggleGroup,
  xd as ToggleGroupItem,
  we as Tooltip,
  Ec as TwoColumnsList,
  Xd as VerticalBarChart,
  Nc as VerticalBarChartWidget,
  ut as VirtualList,
  vd as WeekStartDay,
  wd as Weekdays,
  ke as Widget,
  Fc as WidgetAvatarsListItem,
  zc as WidgetEmptyState,
  Sc as WidgetHighlightButton,
  Lc as WidgetInboxList,
  on as WidgetInboxListItem,
  Bc as WidgetSection,
  _c as WidgetSimpleList,
  pt as WidgetSimpleListItem,
  Rc as WidgetStrip,
  Jd as _RadarChart,
  yd as actionBarStatuses,
  Nd as chipVariants,
  Cd as downloadAsCSV,
  Id as generateCSVContent,
  kd as getGranularityDefinition,
  Sd as getGranularityDefinitions,
  Ad as getGranularitySimpleDefinition,
  Fd as granularityDefinitions,
  Ld as modules,
  Qd as predefinedPresets,
  _d as rangeSeparator,
  eu as selectSizes,
  Xe as useAiPromotionChat,
  Ed as useDataCollectionData,
  hc as useDataCollectionItemNavigation,
  Od as useDataCollectionSource,
  Td as useExportAction,
  Dd as useInfiniteScrollPagination,
  Fe as useSidebar
};
