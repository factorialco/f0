import { o as ua, B as fa, p as ma, D as ha, q as At, r as De, s as ga, t as g, v as X, w as pe, u as se, T as pa, x as ba, y as xa, R as va, z as wa, A as ne, E as ya, G as gt, H as rt, J as Re, K as Ee, L as Na, M as Ca, N as W, O as ka, P as Sa, Q as _e, S as sn, U as Ia, V as Fa, W as R, X as on, Y as O, Z as ve, _ as Aa, $ as La, a0 as Ea, a1 as _a, a2 as Oa, a3 as Ce, a4 as cn, a5 as Da, a6 as be, a7 as $e, a8 as Ta, a9 as pt, n as dn, aa as Ne, ab as za, ac as un, ad as ae, ae as H, af as fn, ag as Pa, ah as Ba, ai as Ra, aj as mn, ak as $a, al as hn, am as me, an as ee, ao as Wa, ap as Ma, aq as ja, ar as Va, as as ge, at as Ge, au as Ga, av as Ha, aw as Ua, ax as Ka, ay as He, az as gn, aA as qa, aB as Ya, aC as Za, aD as We, aE as Xa, aF as Ja, aG as Qa, aH as er, aI as tr, aJ as nr, aK as ar, aL as rr, aM as lr, aN as sr, aO as lt, aP as st, aQ as pn, aR as ir, aS as or, aT as bn, aU as cr, aV as dr, aW as Ue, aX as bt, aY as xn, aZ as ur, a_ as vn, a$ as fr, b0 as mr, b1 as hr, b2 as Le, b3 as gr, b4 as Te, b5 as Lt, b6 as it, b7 as pr, b8 as br, a as xr, g as vr, b9 as wr, ba as wn, bb as yr, bc as Nr, F as Cr, bd as yn, be as kr, bf as Nn, bg as Sr, bh as Et, bi as Ir, bj as Fr, bk as Ar, bl as Lr, bm as Cn, bn as Er, bo as _r, bp as Or, bq as Dr, br as Tr, bs as kn, bt as ue, bu as Sn, bv as xt, bw as vt, bx as wt, by as In, bz as yt, bA as Fn, bB as An, bC as zr, bD as Pr, bE as Br, bF as Rr, bG as $r, bH as Wr, bI as Mr, bJ as jr, bK as Vr, bL as Gr, bM as Hr, bN as _t, bO as Ot, bP as Dt, bQ as Ur, bR as Kr, bS as qr, bT as Yr, bU as Ln, bV as Zr, bW as Xr, bX as Jr } from "./useDataCollectionSource-D5d-5KM1.js";
import { ch as Tc, cg as zc, b$ as Pc, ct as Bc, ca as Rc, cb as $c, b_ as Wc, bY as Mc, cd as jc, c0 as Vc, cF as Gc, cD as Hc, c1 as Uc, ce as Kc, cf as qc, cc as Yc, c2 as Zc, cp as Xc, cq as Jc, cu as Qc, cB as ed, cC as td, c8 as nd, cE as ad, c9 as rd, c3 as ld, cj as sd, ci as id, c4 as od, c5 as cd, c6 as dd, cr as ud, cG as fd, bZ as md, cs as hd, cw as gd, cx as pd, co as bd, cl as xd, cn as vd, ck as wd, c7 as yd, cm as Nd, cy as Cd, cz as kd, cv as Sd, cA as Id } from "./useDataCollectionSource-D5d-5KM1.js";
import { jsx as e, jsxs as o, Fragment as U } from "react/jsx-runtime";
import ie, { forwardRef as j, useRef as G, useTransition as Qr, useState as E, useLayoutEffect as En, useId as ot, useContext as Ke, createContext as Nt, useEffect as $, useCallback as Q, useMemo as q, Fragment as el, isValidElement as tl, cloneElement as _n, Children as On } from "react";
import { C as nl, P as al, g as Dn, c as rl, F as ct, f as ll, a as sl, A as il, B as ol, L as cl, b as dl, V as ul, d as fl, e as Tt, h as ml, i as hl } from "./index-BKm4Prkl.js";
import { n as Ad, o as Ld, l as Ed, p as _d, u as Od, D as Dd, m as Td, q as zd, x as Pd, y as Bd, N as Rd, z as $d, r as Wd, t as Md, R as jd, s as Vd, j as Gd, k as Hd, w as Ud, v as Kd } from "./index-BKm4Prkl.js";
const gl = ua("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Tn = j(({ className: t, items: n }, a) => /* @__PURE__ */ e(fa, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(ma, {}),
  /* @__PURE__ */ e(ha, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Tn.displayName = "CollapsedBreadcrumbItem";
const Ct = 50, pl = 120, Me = 8;
function bl(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = t - r - Me, s = 0, i = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < a)
    for (l -= Ct; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function zt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Me;
    default:
      return t[0] + Ct + t[t.length - 1] + Me;
  }
}
function xl(t, n) {
  return pl * t + (n ? Ct : 0) + Me;
}
function vl(t, n, a = []) {
  if (!t) {
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
  const r = n.length <= 2, l = a.map((i) => i.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: zt(l)
    };
  const s = bl(t, l);
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
    minWidth: zt(l)
  };
}
function wl({ breadcrumbs: t, append: n }) {
  const a = G(null), r = G(null), [, l] = Qr(), [s, i] = E(null), c = (s?.collapsedItems || []).length > 0;
  return En(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, p = Array.from(f.children);
      l(() => {
        const b = vl(
          h,
          t,
          p
        );
        i(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || s && !s.headItem ? /* @__PURE__ */ e(At, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    At,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: s?.minWidth
      },
      children: [
        /* @__PURE__ */ e(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: r,
            children: t.map((d, f) => /* @__PURE__ */ e(
              De,
              {
                item: d,
                isLast: f === t.length - 1,
                isFirst: f === 0,
                children: f === t.length - 1 ? n : void 0
              },
              d.id
            ))
          }
        ),
        s && s.headItem && /* @__PURE__ */ o(ga, { children: [
          /* @__PURE__ */ e(
            De,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              Tn,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ e(
              De,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(U, { children: s.tailItems.map((d, f) => /* @__PURE__ */ e(
            De,
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
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const yl = pe({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Pt = [
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
], Nl = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, s) => {
  const i = ot(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...p
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(yl({ size: n }), h),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        X.svg,
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
            ...p.style
          },
          ...(({ style: b, ...x }) => x)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Pt.map((b) => /* @__PURE__ */ e("clipPath", { id: `${i}-${b.id}`, children: /* @__PURE__ */ e("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${i}-circle)`, children: Pt.map((b) => /* @__PURE__ */ e(
              X.foreignObject,
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
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? b.delay : 0,
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
                    delay: t ? b.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${b.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: b.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ e(
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
}, zn = j(Nl), Pn = Nt(null), Cl = 15, kl = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [l, s] = E(n), [i, c] = E(!1), [d, f] = E(!0), [u, m] = E(
    Cl
  ), h = G(null), p = (x) => {
    h.current = x;
  }, b = () => {
    h.current && h.current();
  };
  return $(() => {
    s(n);
  }, [n]), $(() => {
    if (i && a?.(), !i) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [i, a]), /* @__PURE__ */ e(
    Pn.Provider,
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
        setClearFunction: p
      },
      children: t
    }
  );
}, we = () => {
};
function qe() {
  const t = Ke(Pn);
  return t === null ? {
    enabled: !1,
    setEnabled: we,
    open: !1,
    setOpen: we,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: we,
    setAutoClearMinutes: we,
    clear: we,
    setClearFunction: we,
    autoClearMinutes: null
  } : t;
}
const Bn = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = qe(), s = se(), [i, c] = E(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(pa, { children: /* @__PURE__ */ o(ba, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(xa, { asChild: !0, children: /* @__PURE__ */ e(
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
        children: /* @__PURE__ */ e(
          va,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ne(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              wa,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  zn,
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
    !l && /* @__PURE__ */ e(ya, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Bt = "one_sidebar_locked", Rn = Nt(void 0);
function ke() {
  const t = Ke(Rn);
  return t === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : t;
}
function Sl({ children: t }) {
  const { currentPath: n } = gt(), [a, r] = E(!1), [l, s] = E(!1), i = a ? Re.xl : Re.md, c = rt(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = E(() => {
    const A = localStorage.getItem(Bt);
    return A !== null ? !!A : !0;
  }), [u, m] = E(!1), [h, p] = E(
    null
  ), b = Q(
    ({ isInvokedByUser: A } = {
      isInvokedByUser: !0
    }) => {
      s(A ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = Q(
    (A) => {
      c || (A.clientX < 32 && m(!0), A.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return $(() => {
    m(!1);
  }, [n]), $(() => {
    l && localStorage.setItem(Bt, d ? "1" : "");
  }, [d, l]), $(() => () => {
    p(w);
  }, [w]), /* @__PURE__ */ e(
    Rn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: b,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: x, className: "h-screen w-screen", children: t })
    }
  );
}
const Rt = X.create(W), $t = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Il = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, l] = E(!1), s = () => {
    l(!0), n(!t);
  };
  return /* @__PURE__ */ e(Ee, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        ne()
      ),
      onClick: s,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Rt,
        {
          size: "sm",
          icon: Na,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: $t,
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
      ) : /* @__PURE__ */ e(
        Rt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Ca,
          className: "outline-none",
          variants: $t,
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
  currentModule: t,
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
  const [m, h] = E("idle"), [p, b] = E(null), [x, ...w] = p ?? [], [A, z] = E(!1);
  $(() => {
    b(null), h("idle");
  }, [t]);
  const B = Q(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), b(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    ka,
    {
      open: A,
      onOpenChange: async (D) => {
        z(D), D && p === null && B(), i(D);
      },
      children: [
        /* @__PURE__ */ e(Sa, { asChild: !0, children: /* @__PURE__ */ e(
          _e,
          {
            variant: "outline",
            icon: sn,
            hideLabel: !0,
            label: n,
            pressed: A,
            append: f && /* @__PURE__ */ e(kt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Ia, { children: /* @__PURE__ */ o(
          Fa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(El, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Dl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(_l, { ...l, buttonUrl: r }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Al,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: w.map((D, _) => /* @__PURE__ */ e(
                    Ll,
                    {
                      ...D,
                      onClick: d
                    },
                    _
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  Ol,
                  {
                    ...s,
                    onClick: () => {
                      B();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                Tl,
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
}, Al = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    Aa,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        ve,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: g(i, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ e("div", { className: "px-1 pt-1", children: c ? /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              "video",
              {
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              La,
              {
                fetchPriority: "high",
                src: a,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ e("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ e("h3", { className: "font-medium", children: t }),
                /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: l })
              ] }),
              r && /* @__PURE__ */ e(kt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Ll = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const s = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(Ea, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ e(
    ve,
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
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(kt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, El = ({
  title: t,
  url: n,
  onClick: a
}) => /* @__PURE__ */ o(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ e("h2", { className: "text-base font-medium", children: t }),
      /* @__PURE__ */ e(
        R,
        {
          variant: "outline",
          size: "sm",
          icon: on,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), $n = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: g(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        l
      ),
      children: t
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: a }),
    /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  n
] }) }), _l = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  $n,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(W, { icon: sn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(ve, { href: a, children: /* @__PURE__ */ e(R, { label: n }) })
  }
), Ol = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  $n,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(W, { icon: _a, size: "lg" }),
    button: /* @__PURE__ */ e(R, { variant: "outline", label: a, onClick: r })
  }
), Dl = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(O, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(O, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(O, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(O, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(O, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), kt = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", t)
  }
), Tl = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, s] = E(t);
  $(() => {
    s(t);
  }, [t]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e(Oa, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          R,
          {
            variant: "ghost",
            icon: Ce,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        nl,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            al,
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
function Wt({
  icon: t,
  href: n,
  label: a,
  disabled: r
}) {
  const l = G(null);
  return /* @__PURE__ */ e(
    R,
    {
      href: n,
      title: a,
      "aria-label": a,
      disabled: r,
      ref: l,
      size: "sm",
      variant: "outline",
      label: a,
      icon: t,
      hideLabel: !0
    }
  );
}
function Wo({
  module: t,
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
  const { sidebarState: u, toggleSidebar: m } = ke(), h = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], p = n && Object.keys(n).length !== 0, b = l && a.length > 0, x = !l && r.length > 0, w = !l && !!i?.isVisible, A = h[h.length - 1], z = "navigation" in window ? window.navigation : null, B = l && (z ? !!z.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(Ee, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            X.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                R,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: cn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                B && "justify-center"
              ),
              children: [
                l && B && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  R,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Da,
                    onClick: () => window.history.back()
                  }
                ) }),
                B || b ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in A ? /* @__PURE__ */ e(O, { className: "h-4 w-24" }) : A.label }) : /* @__PURE__ */ e(
                  wl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      Il,
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
          !l && p && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(be, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            $e,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e($e, { text: n.text, variant: n.variant }) }),
          !l && p && (s || x || w) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                Wt,
                {
                  icon: Ta,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ e(
                Wt,
                {
                  icon: pt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && x && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Fl,
              {
                ...i,
                currentModule: t.name
              }
            ) }),
            x && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((D, _) => /* @__PURE__ */ e(zl, { action: D }, _)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              dn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Bn, {})
          ] })
        ] })
      ]
    }
  );
}
function zl({ action: t }) {
  const n = G(null), [a, r] = E(!1);
  return "actions" in t ? /* @__PURE__ */ e(Ne, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    _e,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    R,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    ve,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        R,
        {
          size: "md",
          variant: "outline",
          label: t.label,
          icon: t.icon,
          hideLabel: !0,
          onClick: (l) => {
            l.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const Pl = () => {
  const t = se();
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ e(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: t.ai.inputPlaceholder,
            className: g(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          _e,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: za,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Bl = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = G(null);
  $(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, Rl = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = qe();
  return Bl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(Ee, { children: n && /* @__PURE__ */ e(
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
      children: /* @__PURE__ */ e("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ e(
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
          children: t
        }
      ) })
    },
    "chat-window"
  ) });
}, $l = ({ action: t, onClose: n }) => {
  const a = () => {
    t.onClick(), n();
  };
  switch (t.buttonType) {
    case "gradient":
      return /* @__PURE__ */ e(
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
          children: t.isLoading ? /* @__PURE__ */ e(un, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        _e,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, Wl = ({
  enabled: t = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: l,
  actions: s,
  onShow: i,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  kl,
  {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    onShow: i,
    onHide: c,
    children: d
  }
), Ml = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = qe(), d = () => {
    i(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Rl, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      _e,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ce,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(zn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(fn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ e(
        $l,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(Pl, {}) })
  ] }) : null;
}, jl = ae(
  H("AiPromotionChat", Ml)
), Vl = ae(
  H("AiPromotionChatProvider", Wl)
), Wn = ({
  items: t,
  value: n,
  onChange: a,
  disabled: r = !1,
  fullWidth: l = !1,
  ariaLabel: s,
  ariaLabelledBy: i
}) => {
  const [c, d] = Pa({
    prop: n,
    defaultProp: t[0]?.value ?? "",
    onChange: a
  });
  return /* @__PURE__ */ e(
    Ba,
    {
      type: "single",
      value: c,
      onValueChange: (u) => {
        u !== "" && d(u);
      },
      disabled: r,
      "aria-label": s,
      "aria-labelledby": i,
      className: g(
        "inline-flex items-center rounded-md bg-f1-background-secondary p-0.5 gap-0.5",
        l && "w-full"
      ),
      children: t.map((u) => /* @__PURE__ */ o(
        Ra,
        {
          value: u.value,
          disabled: r || u.disabled,
          className: g(
            "relative flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded font-medium transition-all",
            "text-f1-foreground-secondary",
            "hover:text-f1-foreground hover:bg-f1-background-hover",
            "disabled:pointer-events-none disabled:text-f1-foreground-disabled",
            "data-[state=on]:bg-f1-background data-[state=on]:text-f1-foreground data-[state=on]:shadow",
            ne(),
            "h-8 px-3 text-sm",
            l && "w-full"
          ),
          children: [
            u.icon && /* @__PURE__ */ e(W, { icon: u.icon, size: "md" }),
            u.label
          ]
        },
        u.value
      ))
    }
  );
};
Wn.displayName = "F0SegmentedControl";
const Mo = H(
  "F0SegmentedControl",
  Wn
), Mn = pe({
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
}), Mt = {
  positive: hn,
  warning: $a,
  info: mn
}, jt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Gl = j(
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
        className: Mn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  jt[s]
                ),
                children: [
                  Mt[s] && /* @__PURE__ */ e(W, { icon: Mt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    me,
                    {
                      className: jt[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              R,
              {
                variant: "ghost",
                icon: Ce,
                size: "sm",
                hideLabel: !0,
                onClick: a,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: g(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              R,
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
), Hl = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Mn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(O, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(O, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(O, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(O, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(O, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(O, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), jn = j(
  (t, n) => /* @__PURE__ */ e(Gl, { ref: n, ...t })
), Ul = ({ compact: t, variant: n }) => /* @__PURE__ */ e(Hl, { compact: t, variant: n });
jn.displayName = "F0Callout";
const jo = ee(
  ae(jn),
  Ul
);
function Kl({
  title: t,
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
        ne("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e(W, { icon: Wa, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          me,
          {
            lines: 1,
            className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
            children: t
          }
        )
      ]
    }
  );
}
function ql({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = Ma(), s = ja(l), i = Va(n, "PPPp", { locale: s }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        ne("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(me, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            ge,
            {
              firstName: t.firstName,
              lastName: t.lastName,
              src: t.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(
            me,
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
  title: t,
  versions: n,
  currentVersion: a,
  activeVersionId: r
}) {
  return /* @__PURE__ */ o(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": t,
      children: [
        /* @__PURE__ */ e(
          me,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(Ge, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            Kl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ e(
            ql,
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
const Vo = ae(
  H("F0VersionHistory", Yl)
), Vn = j(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: l }, s) => {
    const i = ie.useRef(null);
    ie.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = Ga({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        className: g("scrollbar-macos w-full overflow-auto", r),
        style: {
          height: `${t}px`
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            style: {
              height: `${c.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: c.getVirtualItems().map((d) => /* @__PURE__ */ e(
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
                children: d ? l(d) : /* @__PURE__ */ e(U, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Vn.displayName = "VirtualList";
const dt = H("VirtualList", Vn), Gn = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${n})`, "gi"), s = t.split(l);
  return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
    (i, c) => i.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ e(
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
function Ye(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function Ze(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const Zl = ({
  entity: t,
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
  const m = t.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), b = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(t) : a(t));
  }, x = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else w.key === "ArrowDown" ? Ye(w.currentTarget, i) : w.key === "ArrowUp" && Ze(w.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: g(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          ge,
          {
            src: t.avatar,
            firstName: h,
            lastName: p,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              Gn,
              {
                text: t.name,
                search: s,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          gn,
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
        d && n && /* @__PURE__ */ e(
          W,
          {
            className: "text-f1-icon-selected",
            icon: hn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Pe = ({
  groupView: t,
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
  showGroupIcon: p = !1,
  singleSelector: b = !1,
  disabled: x = !1,
  hiddenAvatar: w = !1
}) => {
  const [A, z] = E(!1);
  if (!t)
    return /* @__PURE__ */ e(
      Zl,
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
  const B = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && b)
      d(!n);
    else if (L.key === "Enter") {
      if (x) return;
      !l || s ? i(r) : l && c(r);
    } else L.key === "ArrowDown" ? Ye(L.currentTarget, f) : L.key === "ArrowUp" && Ze(L.currentTarget, u);
  }, D = () => {
    if (A)
      d(!n), z(!1);
    else {
      if (x || b) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const _ = l || s;
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        R,
        {
          hideLabel: !0,
          icon: n ? Ha : Ua,
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
            p && /* @__PURE__ */ e(
              W,
              {
                icon: Ka,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                Gn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(He, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              gn,
              {
                checked: _,
                disabled: x,
                onClick: D,
                onKeyDown: B,
                indeterminate: s,
                onPointerDown: (L) => {
                  L.stopPropagation(), z(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: g("ml-auto", b ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Pe.displayName = "EntitySelectListItem";
const Vt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Ye(s.currentTarget, a) : s.key === "ArrowUp" && Ze(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: g(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        R,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: qa,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: g("line-clamp-1"), children: t }) }) })
    ]
  }
) }), Ae = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      R,
      {
        disabled: t.disabled,
        variant: t.variant,
        onClick: t.onClick,
        label: t.label,
        icon: t.icon,
        size: "sm"
      }
    );
  const a = [t, ...n ?? []], r = a.map((i) => ({
    label: i.label,
    value: i.label,
    icon: i.icon,
    critical: i.variant === "critical"
  })) || [], l = (i) => {
    const c = a.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((i) => i.disabled);
  return /* @__PURE__ */ e(
    Ya,
    {
      items: r,
      value: t.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Xl = ({
  actions: t,
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
  const u = !c && (n || a), m = t && t.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let p, b, x = d ? {
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
  return x || (x = w, w = void 0), m && u ? (p = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: x,
      secondaryActions: w ? [w] : []
    }
  ), b = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ e(
    Ae,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ e(Ae, { primaryAction: x, secondaryActions: [] }), w && (b = /* @__PURE__ */ e(Ae, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    b
  ] }) });
}, Jl = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(W, { icon: gl, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Ye(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Ze(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: t,
      onChange: (c) => n(c.target.value)
    }
  ),
  t && /* @__PURE__ */ e(
    W,
    {
      icon: Za,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), et = 384, tt = 36, Ql = 37, Gt = 1, Ht = 200, Ut = '[data-avatarname-navigator-element="true"]', es = ({
  groupView: t,
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
  onGroupChange: p,
  onToggleExpand: b,
  searchPlaceholder: x,
  selectAllLabel: w,
  clearLabel: A,
  notFoundTitle: z,
  notFoundSubtitle: B,
  className: D,
  actions: _,
  onCreate: L,
  onCreateLabel: K,
  singleSelector: T = !1,
  loading: y = !1,
  disabled: S = !1,
  hiddenAvatar: N = !1
}) => {
  const I = ie.useRef(null), M = q(
    () => t ? n.reduce(
      (F, Y) => F + (Y.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), v = Q(() => {
    setTimeout(() => {
      I.current?.scrollTo({ top: 0 });
    }, Gt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Ut)
      )[0]?.focus();
    }, Ht);
  }, []), C = Q(() => {
    setTimeout(() => {
      I.current?.scrollTo({ top: I.current?.scrollHeight });
    }, Gt), setTimeout(() => {
      const F = Array.from(
        document.querySelectorAll(Ut)
      );
      F[F.length - 1]?.focus();
    }, Ht);
  }, []), k = q(
    () => new Map(h.map((F) => [F.id, F])),
    [h]
  ), V = Q(
    (F) => {
      const Y = k.get(F.id);
      if (!t)
        return {
          selected: !!Y,
          partialSelected: !!Y
        };
      const J = (F.subItems ?? []).filter(
        (te) => Y?.subItems?.some(
          (fe) => fe.subId === te.subId
        )
      ), Z = (F.subItems?.length ?? 0) === J.length, de = !Z && J.length > 0;
      return { selected: Z, partialSelected: de };
    },
    [t, k]
  ), re = Q(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          Vt,
          {
            label: K ?? "",
            onCreate: () => L?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const Y = L ? F.index - 1 : F.index, J = n[Y], { selected: Z, partialSelected: de } = V(J);
      return /* @__PURE__ */ e(
        Pe,
        {
          expanded: J.expanded ?? !1,
          onExpand: () => b(J, !0),
          search: l,
          groupView: t,
          entity: J,
          onSelect: s,
          onRemove: i,
          selected: Z,
          partialSelected: de,
          showGroupIcon: ts(a, r),
          singleSelector: T,
          goToFirst: v,
          goToLast: C,
          disabled: S,
          hiddenAvatar: N
        },
        J.id
      );
    },
    [
      L,
      K,
      S,
      n,
      V,
      v,
      C,
      t,
      a,
      N,
      i,
      s,
      b,
      l,
      r,
      T
    ]
  ), le = q(() => t ? n.flatMap((F) => {
    const Y = ze(
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
          expanded: F.expanded ?? Y?.expanded ?? !1,
          subItems: F.subItems,
          subSearchKeys: F.searchKeys
        }
      },
      ...(F.subItems ?? []).map((J) => ({
        parent: {
          ...F,
          expanded: F.expanded ?? Y?.expanded ?? !1
        },
        subItem: J
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
  })), [t, n, h]), P = Q(
    (F) => {
      if (F.index === 0 && L)
        return /* @__PURE__ */ e(
          Vt,
          {
            label: K ?? "",
            onCreate: () => L?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const Y = L ? F.index - 1 : F.index, J = le[Y].parent, Z = le[Y].subItem;
      if (!J) {
        const te = {
          id: Z.subId,
          name: Z.subName,
          avatar: Z.subAvatar,
          subItems: Z.subItems,
          expanded: Z.expanded,
          searchKeys: Z.subSearchKeys
        }, fe = ze(
          h,
          te.id
        ), he = (te?.subItems ?? []).filter(
          (Fe) => fe?.subItems?.some(
            (da) => da.subId === Fe.subId
          )
        ), Oe = (te.subItems?.length ?? 0) === he.length, ca = !Oe && he.length > 0;
        return /* @__PURE__ */ e(
          Pe,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Fe) => b(te, Fe),
            search: l,
            entity: te,
            onSelect: s,
            onRemove: i,
            selected: Oe,
            partialSelected: ca,
            showGroupIcon: a.find((Fe) => Fe.value === r)?.groupType === "team",
            singleSelector: T,
            goToFirst: v,
            goToLast: C,
            hideLine: Y === le.length - 1,
            disabled: S,
            hiddenAvatar: N
          }
        );
      }
      let de = !!ze(h, Z.subId);
      if (!de) {
        const te = ze(
          h,
          J.id
        );
        de = !!(J?.subItems ?? []).filter(
          (he) => te?.subItems?.some(
            (Oe) => Oe.subId === he.subId
          )
        ).find((he) => he.subId === Z.subId);
      }
      return /* @__PURE__ */ e(
        Pe,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: Z.subId,
            name: Z.subName,
            avatar: Z.subAvatar,
            searchKeys: Z.subSearchKeys
          },
          onSelect: () => {
            d(J, Z);
          },
          onRemove: () => c(J, Z),
          selected: !!de,
          partialSelected: !1,
          singleSelector: T,
          goToFirst: v,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: N
        }
      );
    },
    [
      le,
      h,
      l,
      T,
      v,
      C,
      s,
      i,
      a,
      S,
      b,
      r,
      d,
      c,
      N,
      L,
      K
    ]
  ), [Se, Qe] = q(() => {
    if (!n.length)
      return [!1, !1];
    let F = 0, Y = 0;
    if (!t)
      F = n.length, Y = n.reduce(
        (de, { id: te }) => de + (k.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...k.values()].flatMap(
          (te) => te.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((te) => {
        const fe = te.subItems ?? [];
        F += fe.length, Y += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const J = F > 0 && Y === F, Z = Y > 0;
    return [J, Z];
  }, [n, k, t]), Ie = le.length, sa = !T && (w || A), ia = _ && _.length > 0, oa = !y && (!T && sa || ia);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        T || y ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              T || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Jl,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                We,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
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
        /* @__PURE__ */ o(
          "section",
          {
            className: g(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              oa ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              y && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(un, {}) }),
              !y && !M && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: et
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: z }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: B })
                  ]
                }
              ),
              !y && (!!M || L) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                dt,
                {
                  height: et,
                  itemCount: Ie + (L ? 1 : 0),
                  itemSize: (F) => {
                    if (F === 0 && L) return tt;
                    const Y = L ? F - 1 : F;
                    return le[Y]?.parent === null ? Ql : tt;
                  },
                  renderer: P,
                  ref: I
                }
              ) : /* @__PURE__ */ e(
                dt,
                {
                  height: et,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: tt,
                  renderer: re,
                  ref: I
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Xl,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: T,
            totalFilteredEntities: M,
            allVisibleSelected: Se,
            anyVisibleSelected: Qe,
            selectAllLabel: w,
            clearLabel: A,
            disabled: S,
            actions: _
          }
        )
      ]
    }
  );
}, ze = (t, n) => t.find((a) => a.id === n), ts = (t, n) => t.find((a) => a.value === n)?.groupType === "team", ns = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Xa,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      Ja,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Qa, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      W,
      {
        icon: Ce,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), as = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = q(() => {
    const f = t ? r.flatMap(
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
  }, [t, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      dt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            ns,
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
          ) : /* @__PURE__ */ e(U, {});
        }
      }
    ) })
  ] });
}, rs = 500, Kt = 520, qt = 210, Yt = ({
  groupView: t,
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
  const p = (s ?? Kt) < rs, b = !c && !i && !p, x = s ?? Kt, w = b ? x - qt : x;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: x
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ e(
              es,
              {
                ...h,
                groupView: t,
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
        b && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: qt + "px"
            },
            children: /* @__PURE__ */ e(
              as,
              {
                groupView: t,
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
}, ls = ({
  placeholder: t,
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
  maxLength: p,
  loading: b = !1,
  required: x = !1,
  readonly: w = !1,
  append: A,
  size: z = "sm",
  open: B
}) => {
  const D = q(
    () => a.some(
      (T) => T.subItems && T.subItems.length > 0
    ),
    [a]
  ), _ = q(() => D ? a.flatMap(
    (T) => (T.subItems ?? []).map((y) => ({
      parent: T,
      subItem: y
    }))
  ) : a.map((T) => ({
    parent: null,
    subItem: {
      subId: T.id,
      subName: T.name,
      subAvatar: T.avatar,
      subDeactivated: T.deactivated
    }
  })), [D, a]), L = _.length === 0 ? void 0 : _.length === 1 ? _[0].subItem.subName : _.length + " " + n, K = _.length === 1 ? _[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    er,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !L ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: p,
      clearable: !1,
      value: L,
      disabled: r,
      loading: b,
      required: x,
      readonly: w,
      size: z,
      avatar: l || !K ? void 0 : {
        type: "person",
        firstName: K,
        lastName: "",
        src: _[0].subItem.subAvatar,
        deactivated: _[0].subItem.subDeactivated
      },
      append: A ?? /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(tr, { open: B, disabled: r, size: z }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            _.length === 1 && !l || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            me,
            {
              tag: "span",
              className: _.length === 1 && _[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: _.length === 0 ? t ?? "" : _.length === 1 ? _[0].subItem.subName : `${_.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Go = (t) => {
  const [n, a] = E(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (y) => {
    a(y), t.onOpenChange?.(y);
  };
  $(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, s] = E(t.entities), [i, c] = E(""), [d, f] = nr("", 300), u = q(
    () => t.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [t.entities]
  ), m = Ke(ar), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(y) {
    if (t.singleSelector) {
      t.onSelect(y), a(!1);
      return;
    }
    const S = t.selectedEntities ?? [], N = l.find((k) => k.id === y.id);
    if (!N)
      return;
    const I = new Set(
      (N.subItems ?? []).map((k) => k.subId)
    ), M = /* @__PURE__ */ new Set([N.id]);
    l.forEach((k) => {
      k.id !== N.id && (k.subItems ?? []).some(
        (re) => I.has(re.subId)
      ) && M.add(k.id);
    });
    const v = [...S];
    function C(k) {
      const V = v.findIndex((re) => re.id === k.id);
      V >= 0 ? v[V] = k : v.push(k);
    }
    M.forEach((k) => {
      const V = l.find((P) => P.id === k);
      if (!V) return;
      const re = V.subItems?.filter(
        (P) => I.has(P.subId)
      ) ?? [], le = v.findIndex((P) => P.id === k);
      if (le >= 0) {
        const P = v[le].subItems ?? [], Se = new Set(P.map((Ie) => Ie.subId)), Qe = [
          ...P,
          ...re.filter((Ie) => !Se.has(Ie.subId))
        ];
        C({
          ...V,
          subItems: Qe
        });
      } else
        C({
          ...V,
          subItems: re
        });
    }), t.onSelect(v);
  }
  function x(y, S) {
    if (t.singleSelector)
      t.onSelect({ ...y, subItems: [{ ...S }] }), a(!1);
    else {
      const N = t.selectedEntities ?? [], I = new Set(N.map((C) => C.id)), M = new Map(
        N.map((C) => [C.id, C.subItems ?? []])
      );
      I.add(y.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (V) => V.subId === S.subId
        ) && I.add(C.id);
      });
      const v = [];
      t.entities.forEach((C) => {
        if (I.has(C.id)) {
          let V = [...M.get(C.id) ?? []];
          C.subItems?.some(
            (P) => P.subId === S.subId
          ) && (V.some(
            (Se) => Se.subId === S.subId
          ) || V.push(S));
          const le = new Set(
            (C.subItems ?? []).map((P) => P.subId)
          );
          V = V.filter(
            (P) => le.has(P.subId)
          ), v.push({
            ...C,
            subItems: V
          });
        }
      }), t.onSelect(v);
    }
  }
  function w(y) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let S = [];
    const N = t.selectedEntities ?? [];
    if (u) {
      const I = l.find(
        (v) => v.id === y.id
      );
      if (!I)
        return;
      const M = new Set(
        (I.subItems ?? []).map((v) => v.subId)
      );
      for (const v of N) {
        const C = (v.subItems ?? []).filter(
          (k) => !M.has(k.subId)
        );
        C.length > 0 && S.push({
          ...v,
          subItems: C
        });
      }
    } else
      S = (N ?? []).filter((I) => I.id !== y.id);
    t.onSelect(S);
  }
  function A(y, S) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const N = t.selectedEntities ?? [], I = S.subId, M = [];
    for (const v of N) {
      const C = v.subItems?.filter((k) => k.subId !== I) ?? [];
      C.length > 0 && M.push({
        ...v,
        subItems: C
      });
    }
    t.onSelect(M);
  }
  function z() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const y = t.selectedEntities ?? [];
    let S = [];
    if (u) {
      const N = new Set(
        l.flatMap(
          (I) => (I.subItems ?? []).map((M) => M.subId)
        )
      );
      for (const I of y) {
        const M = (I.subItems ?? []).filter(
          (v) => !N.has(v.subId)
        );
        M.length > 0 && S.push({
          ...I,
          subItems: M
        });
      }
    } else {
      const N = new Set(
        l.map((I) => I.id)
      );
      S = (y ?? []).filter((I) => !N.has(I.id));
    }
    t.onSelect(S);
  }
  function B() {
    const y = [...t.selectedEntities ?? []];
    l.forEach((S) => {
      const N = y.find((I) => I.id === S.id);
      if (!N)
        y.push({
          ...S,
          subItems: S.subItems || []
        });
      else {
        const I = Array.from(
          /* @__PURE__ */ new Set([
            ...N.subItems ?? [],
            ...S.subItems ?? []
          ])
        );
        N.subItems = I;
      }
    }), t.singleSelector || t.onSelect(y);
  }
  const D = (y) => {
    c(y), f(y);
  }, _ = (y, S) => {
    t.onItemExpandedChange(y.id, S), s(
      l.map(
        (N) => N.id === y.id ? { ...N, expanded: !y.expanded } : N
      )
    );
  };
  $(() => {
    if (!d) {
      s(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const S = t.entities.map((N) => {
        const I = ss(N, d), M = N.subItems?.map((v) => ({
          ...v,
          score: je(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, C) => v.score - C.score);
        return {
          ...N,
          score: I,
          expanded: N.expanded ?? (M?.length ?? 0) > 0,
          subItems: M
        };
      }).filter((N) => N.score < 1 / 0).sort((N, I) => N.score - I.score);
      s(S);
    } else {
      const y = t.entities.map((S) => {
        const N = je(
          d,
          S.searchKeys ?? [S.name]
        );
        return { ...S, score: N };
      }).filter((S) => S.score < 1 / 0).sort((S, N) => S.score - N.score);
      s(y);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    s
  ]);
  const L = G(null), [K, T] = E(0);
  return En(() => {
    const y = () => {
      L.current && T(L.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: L,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        Yt,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: b,
          onRemove: w,
          onSubItemRemove: A,
          onSubItemSelect: x,
          onClear: z,
          onSelectAll: B,
          selectedEntities: t.selectedEntities ?? [],
          search: i,
          onSearch: D,
          onToggleExpand: _,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? K - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(rr, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      lr,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          ls,
          {
            selected: t.selectedItemsCopy,
            selectedEntities: t.selectedEntities ?? [],
            hiddenAvatar: t.hiddenAvatar,
            label: t.label,
            labelIcon: t.labelIcon,
            icon: t.icon,
            error: t.error,
            status: t.status,
            hint: t.hint,
            hideLabel: t.hideLabel,
            maxLength: t.maxLength,
            value: t.value?.toString() ?? void 0,
            disabled: t.disabled,
            placeholder: t.placeholder,
            loading: t.alwaysOpen ? t.loading : !1,
            required: t.required,
            readonly: t.readonly,
            append: t.append,
            size: t.size,
            open: n
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      sr,
      {
        container: p,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          Yt,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: b,
            onRemove: w,
            onSubItemRemove: A,
            onSubItemSelect: x,
            onClear: z,
            onSelectAll: B,
            selectedEntities: t.selectedEntities ?? [],
            search: i,
            onSearch: D,
            onToggleExpand: _,
            searchPlaceholder: t.searchPlaceholder,
            selectAllLabel: t.selectAllLabel,
            clearLabel: t.clearLabel,
            selectedLabel: t.selectedLabel,
            singleSelector: t.singleSelector,
            loading: t.loading,
            notFoundTitle: t.notFoundTitle,
            notFoundSubtitle: t.notFoundSubtitle,
            width: t.width,
            disabled: t.disabled,
            hiddenAvatar: t.hiddenAvatar,
            actions: t.actions,
            onCreate: t.onCreate,
            onCreateLabel: t.onCreateLabel
          }
        )
      }
    )
  ] });
};
function ut(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Zt(t) {
  return ut(t).split(/\s+/).filter((n) => n.length > 0);
}
function je(t = "", n) {
  const a = Zt(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = ut(r), s = Zt(r), i = ut(t);
    if (l.includes(i) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function ss(t, n) {
  const a = je(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, s) => {
    const i = je(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(a, r);
}
const is = ({
  id: t,
  createdAt: n,
  title: a,
  description: r,
  icon: l,
  category: s,
  isUnread: i = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = lt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = Dn(n, {
    yesterdayRelative: !1
  });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
      onClick: () => {
        c(t);
      },
      children: [
        /* @__PURE__ */ e(st, { icon: l ?? pn }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: a,
              children: a
            }
          ),
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 text-f1-foreground-secondary",
              title: r,
              children: r
            }
          ),
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: i && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, os = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(O, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(O, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(O, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(O, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(O, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), St = H(
  "ActivityItem",
  ee(is, os)
), Hn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), cs = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Hn, { title: t, children: n.map((l) => /* @__PURE__ */ e(
  St,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), ds = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Hn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(St.Skeleton, {}, r)) }), Be = ee(cs, ds), us = 3, fs = ["today", "yesterday", "lastWeek", "lastMonth"], ms = (t) => or(t, ([n]) => {
  const a = fs.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), ft = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), hs = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = se(), i = rl(t, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = ir((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = ms(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ e(
        Be,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ e(ft, {})
    ] }, u)),
    n && new Array(us).fill(null).map((u, m) => /* @__PURE__ */ e(St.Skeleton, {}, m))
  ] });
}, gs = () => {
  const t = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Be.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(ft, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(ft, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Ho = H(
  "ActivityItemList",
  ee(hs, gs)
), ps = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, bs = {
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
function xs({
  firstName: t,
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
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : bs[cr(
          [t, n].join("")
        )]
      ),
      children: [
        a && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${a}")` }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ o("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ e(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ e(
                ge,
                {
                  src: a,
                  firstName: t,
                  lastName: n,
                  size: "2xl"
                }
              )
            }
          ),
          r && /* @__PURE__ */ e(
            "div",
            {
              ref: i,
              className: g(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                bn,
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
function vs(t) {
  const n = G(null), a = G(), r = Q(() => {
    const s = n.current;
    if (!s) return;
    const i = dr.create(s, {
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
        disableForReducedMotion: t,
        colors: [
          c[Math.floor(Math.random() * c.length)]
        ]
      });
    }, 100);
  }, [t]), l = Q(() => {
    clearInterval(a.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: r, handleMouseLeave: l };
}
const ws = ({
  link: t,
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
  const [m, h] = E(i), p = G(null);
  $(() => {
    h(i);
  }, [i]);
  const b = (D) => {
    h(D), c?.(D);
  }, x = Ue(), { canvasRef: w, handleMouseEnter: A, handleMouseLeave: z } = vs(x), B = bt({
    emoji: ps[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ve,
    {
      href: t,
      onClick: l,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ne()
      ),
      onMouseEnter: x ? void 0 : A,
      onMouseLeave: x ? void 0 : z,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          xs,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
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
              a
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ e("span", { className: "truncate", children: f }),
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: B })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(ct, { date: u }) })
        ] })
      ]
    }
  );
}, ys = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(O, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(O, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(O, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Uo = ee(ws, ys), Ko = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(xn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(R, { label: a, variant: "outline", onClick: r }) })
] });
function Ns({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = E(a), [c, d] = E(n), f = G(null), { fireEmojiConfetti: u } = ur(), m = (b, x) => {
    b.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(x), s || u(x, f);
  }, h = r?.map((b) => b.name).join(", ") || "", p = /* @__PURE__ */ e(
    vn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (b) => {
        m(b, t);
      },
      className: g(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": fr(t),
      prepend: /* @__PURE__ */ e(bt, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        mr,
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
  return h ? /* @__PURE__ */ e(be, { label: h, children: p }) : p;
}
function Cs({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      R,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(bn, { onSelect: n, locale: a }),
    t.map((l) => /* @__PURE__ */ e(
      Ns,
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
const ks = H("Reactions", Cs), Un = j(function({ content: n, collapsed: a, id: r, className: l, tabIndex: s }, i) {
  return /* @__PURE__ */ e(
    hr,
    {
      ref: i,
      id: r,
      content: n,
      tabIndex: s,
      className: g(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        l
      )
    }
  );
});
Un.displayName = "BasePostDescription";
const Ss = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(O, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(O, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Kn = ee(
  Un,
  Ss
), Xt = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Le,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        be,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), mt = j(
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
          !m && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${s}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${s}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(
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
                !!n && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ e("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(ct, { date: f }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      icon: on,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(ct, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(Xt, { tags: c }),
              d && /* @__PURE__ */ e(Xt, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Is = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), qn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && Is.has(a);
}, Fs = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = ll(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: qn(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ e("source", { src: n })
      }
    ) : /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(O, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      mt,
      {
        title: t,
        description: l,
        color: gr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, As = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(O, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(O, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(O, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(O, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Yn = ee(Fs, As), Ls = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const l = se();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ne()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: l.actions.seeMore
    }
  ) });
}, Es = ({
  id: t,
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
  actions: p,
  dropdownItems: b,
  noReactionsButton: x = !1,
  descriptionExpandable: w = !1
}) => {
  const A = ot(), z = ot(), B = G(null), [D, _] = E(null), [L, K] = E(!1), T = [f.views, f.comments].filter(Boolean).join(" · "), y = w && D?.id === t && D.description === s, S = !y, N = Dn(r), I = () => {
    i(t);
  }, M = (k) => {
    k.stopPropagation();
  }, v = n ? `${n.firstName} ${n.lastName}` : void 0, C = (k) => {
    k.preventDefault(), k.stopPropagation(), s && _({ id: t, description: s });
  };
  return $(() => {
    y && B.current?.focus();
  }, [y]), $(() => {
    w || _(null);
  }, [w]), $(() => {
    const k = B.current;
    if (!w || !k || y) {
      K(!1);
      return;
    }
    const V = () => {
      K(
        k.scrollHeight > k.clientHeight
      );
    };
    if (V(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver(V);
    return re.observe(k), () => re.disconnect();
  }, [w, y, s]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: I,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          Te,
          {
            href: n.url || "#",
            title: v,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              ge,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(st, { icon: Lt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(
                    Te,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: v,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
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
                  /* @__PURE__ */ e(
                    Te,
                    {
                      href: n.url,
                      title: v,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: v
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(st, { icon: Lt, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: g(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  Te,
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
                  p?.map((k) => /* @__PURE__ */ e(
                    R,
                    {
                      hideLabel: !k.label,
                      ...k.icon && { icon: k.icon },
                      variant: "outline",
                      size: "md",
                      onClick: k.onClick,
                      label: k.label ?? "",
                      title: k.label ?? ""
                    },
                    k.label
                  )),
                  b?.length && /* @__PURE__ */ e(
                    Ne,
                    {
                      items: b,
                      icon: it,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ne,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...b ?? []
                    ],
                    icon: it,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: N }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: A,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ o(U, { children: [
                /* @__PURE__ */ e(
                  Kn,
                  {
                    ref: B,
                    id: z,
                    content: s,
                    collapsed: S,
                    tabIndex: y ? -1 : void 0,
                    className: g(y && ne())
                  }
                ),
                w && L && !y && /* @__PURE__ */ e(
                  Ls,
                  {
                    describedBy: A,
                    controls: z,
                    expanded: y,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: qn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: M,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(O, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(Yn, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: T }),
          !x && /* @__PURE__ */ e(
            ks,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: pr
              }
            }
          )
        ] })
      ]
    }
  );
}, _s = ({
  withEvent: t,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(O, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(O, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(O, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(O, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(O, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(Kn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(O, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(Yn.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(O, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(O, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), qo = ee(
  Es,
  _s
), Zn = ie.forwardRef(({ person: t, onClick: n, ...a }, r) => {
  const l = () => {
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
      onClick: l,
      children: [
        /* @__PURE__ */ e(
          ge,
          {
            firstName: t.firstName,
            lastName: t.lastName,
            src: t.avatarUrl,
            badge: t.avatarBadge
          }
        ),
        /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center gap-1", children: [
            /* @__PURE__ */ e("span", { className: "truncate font-medium", children: `${t.firstName} ${t.lastName}` }),
            a.info && /* @__PURE__ */ e(be, { label: a.info, children: /* @__PURE__ */ e(
              W,
              {
                icon: mn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, i) => /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(Le, { ...s }, s.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(br, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              R,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
              R,
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
}), Os = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(O, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(O, { className: "h-4" }),
    /* @__PURE__ */ e(O, { className: "h-4" })
  ] })
] });
Zn.displayName = "OnePersonListItem";
const Yo = ae(
  H(
    "OnePersonListItem",
    ee(Zn, Os)
  )
), Ds = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ts({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(Sl, { children: /* @__PURE__ */ e(
    zs,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function zs({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? xr : l?.enabled ? Vl : el, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(s, { ...i, children: /* @__PURE__ */ e(
    $s,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const Zo = H(
  "ApplicationFrame",
  Ts
), Ps = ({ contentId: t }) => {
  const n = se();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: ne(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Bs(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Rs(t, n) {
  const { sidebarState: a, toggleSidebar: r } = ke(), l = G(t);
  $(() => {
    n && Bs(
      t,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, n, a, r]);
}
function $s({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = ke(), f = Ue(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: p,
    resizable: b
  } = vr(), x = m === "fullscreen", w = m === "canvas", { open: A } = qe(), z = b ? p : yr, B = G(x), D = x && !B.current, _ = !x && B.current, [
    L,
    K
  ] = E(!1);
  $(() => {
    !x && B.current && K(!0), B.current = x;
  }, [x]);
  const T = x || L || _, y = q(() => D ? { duration: 0.15, ease: "easeOut" } : _ ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [D, _]), S = rt(
    `(max-width: ${Re.xl}px)`,
    { initializeWithValue: !0 }
  ), N = rt(`(max-width: ${Re.md}px)`, {
    initializeWithValue: !0
  });
  return $(() => {
    d(u);
  }, [u, d]), $(() => {
    d(A);
  }, [A, d]), Rs(u, S), /* @__PURE__ */ e(
    wr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(wn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(Ee, { children: s === "unlocked" && /* @__PURE__ */ e(
            X.nav,
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
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (I) => {
                s === "hidden" ? I?.setAttribute("inert", "") : I?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Ps, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            X.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N ? z : 0
              },
              transition: { paddingRight: Ds },
              children: [
                /* @__PURE__ */ e(
                  X.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      T ? "overflow-hidden" : "overflow-auto",
                      !u && !A && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ e(
                      X.div,
                      {
                        className: g(
                          "flex max-w-full flex-1",
                          T ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && w && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: g(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      N ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: N ? void 0 : { right: z },
                    children: /* @__PURE__ */ e(Nr, {})
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  X.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      N ? "fixed inset-0 z-[30]" : g(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        T || w ? "z-20" : "z-0",
                        s === "hidden" && T ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || x ? "100%" : z
                    },
                    transition: y,
                    onAnimationComplete: () => {
                      L && K(!1);
                    },
                    children: /* @__PURE__ */ e(Cr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(jl, {})
        ] }) })
      ] })
    }
  );
}
const Ws = pe({
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
function Xn({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = ke();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: Ws({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ e(
              R,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: cn,
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
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    sl,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    ge,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: i ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e(
                      "p",
                      {
                        className: g(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
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
            /* @__PURE__ */ e(dn, {}),
            /* @__PURE__ */ e(Bn, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              i && "-mt-3"
            ),
            children: t
          }
        )
      ]
    }
  );
}
Xn.displayName = "DaytimePage";
const Xo = ae(
  H("DaytimePage", Xn)
);
function Ms(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function js({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ne, { items: Ms(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ne()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(W, { icon: yn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Jo = ae(
  H("OmniButton", js)
);
function Jn({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        n && /* @__PURE__ */ e("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ e("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: t })
      ]
    }
  );
}
Jn.displayName = "Page";
const Qo = ae(H("Page", Jn));
function Vs({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = q(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(O, { className: "size-6" }),
    /* @__PURE__ */ e(O, { className: "h-3 w-14" })
  ] }) : t.length + (s?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    Jt,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    Gs,
    {
      companies: t,
      selected: i,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ e(
        Jt,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Gs = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const s = se(), [i, c] = E(!1), d = q(
    () => [
      ...t.map((u) => ({
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
    [t, l]
  ), f = (u) => {
    const m = l?.find((h) => h.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    a(u);
  };
  return /* @__PURE__ */ e(
    We,
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
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ne()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              X.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(W, { icon: pt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Jt = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        kr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: Nn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(me, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function ec({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ne, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ne("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ e(
            ge,
            {
              src: t.avatarUrl,
              firstName: t.firstName,
              lastName: t.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(me, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ e(be, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        R,
        {
          icon: pn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Sr, { type: "highlight", size: "sm", icon: Nn }) })
    ] }) })
  ] });
}
function Hs({ isExpanded: t }) {
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
        /* @__PURE__ */ e(
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
        /* @__PURE__ */ e(
          "path",
          {
            id: "arrow",
            d: t ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: g(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: g(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Us() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = ke(), l = G(null);
  return $(() => {
    t === "hidden" && n === "locked" && l.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    vn,
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
        /* @__PURE__ */ e("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ e(Hs, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ e(W, { icon: Ce, size: "md" }) })
      ]
    }
  );
}
function tc({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Vs,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Us, {})
  ] });
}
function Ks() {
  const [t, n] = E(!1);
  return $(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Qn = Nt(void 0);
function qs({ children: t }) {
  const [n, a] = E(!1), [r, l] = E(null);
  return /* @__PURE__ */ e(
    Qn.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function It() {
  const t = Ke(Qn);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const Ys = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      W,
      {
        icon: t.icon,
        size: "md",
        className: g(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(He, { value: t.badge, size: "sm", type: "bold" })
] }), Zs = ({ item: t }) => {
  const { isActive: n } = gt(), { label: a, icon: r, ...l } = t, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    ve,
    {
      ...l,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ne("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(Ys, { item: t, active: s })
    }
  );
}, Xs = ({
  item: t,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: l,
  total: s,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = se(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = It(), { isActive: b } = gt(), x = b(t.href, { exact: t.exactMatch }), w = G(!1), [A, z] = E(!1), B = l === 0, D = l === s - 1, _ = s === 1, L = q(() => {
    const I = [];
    return !_ && !B && I.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Ir
    }), !_ && !D && I.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Fr
    }), I.length > 0 && I.push({ type: "separator" }), I.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Ar,
      critical: !0
    }), I;
  }, [_, B, D, f, i, l, r, t]), K = () => {
    m(!0), z(!1), p(t.href || null), w.current = !0;
  }, T = () => {
    m(!1), p(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, y = u && h === t.href, S = q(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      A && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [x, A, y, d]
  ), N = q(() => /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(Qs, { tooltip: n, children: /* @__PURE__ */ o(
      ve,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: g(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          y && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            W,
            {
              icon: t.icon,
              size: "md",
              className: g(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Lr, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            me,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!n,
              children: t.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ e(
      "div",
      {
        className: g(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          A && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ne,
          {
            open: A,
            onOpenChange: z,
            items: L,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(W, { icon: it, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, x, A, y, L, n]);
  return d ? /* @__PURE__ */ e(
    Cn,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: K,
      onDragEnd: T,
      className: S,
      whileDrag: {
        scale: 1.05
      },
      children: N
    }
  ) : /* @__PURE__ */ e("div", { className: S, children: N });
}, ea = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = E(n), f = Ue(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(_r, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ne("focus-visible:ring-inset"),
          a && "hidden"
        ),
        onClick: u,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u();
        },
        children: [
          t,
          /* @__PURE__ */ e(
            X.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                W,
                {
                  icon: pt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(Or, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      X.div,
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
        children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-0.5", children: l })
      }
    ) })
  ] }) });
}, nt = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = It(), d = G(!1), f = Er(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (b) => {
    !i && !d.current && r?.(t, b);
  }, p = /* @__PURE__ */ e(
    ea,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: h,
      isDragging: i,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: t.items.map((b, x) => /* @__PURE__ */ e(Zs, { item: b }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    Cn,
    {
      id: t.id,
      value: t,
      dragConstraints: a,
      dragElastic: 0.1,
      dragControls: f,
      onDragStart: u,
      onDragEnd: m,
      layout: !0,
      layoutId: `category-${t.id}`,
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
function nc({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = G(null), i = t.filter(
    (b) => b.isSortable === !1
  ), [c, d] = E(
    t.filter((b) => b.isSortable !== !1)
  ), [f, u] = E(0), m = Q((b) => {
    d(b);
  }, []), h = Q(
    (b) => {
      a?.(b);
    },
    [a]
  ), p = Ks();
  return /* @__PURE__ */ e(qs, { children: /* @__PURE__ */ e(wn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Js,
    {
      disableDragging: p,
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
function Js({
  nonSortableItems: t,
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
  const u = se(), { isDragging: m } = It(), h = t.some((v) => v.isRoot), p = t.filter((v) => !v.isRoot).length > 0, b = n.length > 0, x = G(null), [w, A] = E(i), z = i.length > 0;
  $(() => {
    JSON.stringify(i) !== JSON.stringify(w) && A(i);
  }, [i]);
  const B = (v) => {
    A(v);
  }, D = Q(
    (v) => {
      const C = w.filter((k) => k.href !== v.href);
      A(C), c?.(C);
    },
    [w, c]
  ), _ = Q(
    (v, C) => {
      if (C < 0 || C >= w.length) return;
      const k = [...w], [V] = k.splice(v, 1);
      k.splice(C, 0, V), A(k), c?.(k);
    },
    [w, c]
  ), [L, K] = E(!1), T = G(null);
  $(() => {
    n.length > 0 && !L && (a([...n]), K(!0));
  }, [n, a, L]), $(() => {
    const v = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, n, d]);
  const y = "flex flex-col gap-0.5", S = q(
    () => w.reduce(
      (v, C, k) => (C.label in v || (v[C.label] = []), v[C.label].push(k), v),
      {}
    ),
    [w]
  ), N = q(
    () => z && w.map((v, C) => /* @__PURE__ */ e(
      Xs,
      {
        isSortable: !f,
        tooltip: (S[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: D,
        index: C,
        total: w.length,
        onMove: _,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      z,
      w,
      S,
      D,
      _,
      c,
      f
    ]
  ), I = "flex flex-col gap-3", M = q(() => n.map((v) => /* @__PURE__ */ e(
    nt,
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
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => v.isRoot).map((v, C) => /* @__PURE__ */ e(
          nt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        z && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(ea, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: x, children: f ? /* @__PURE__ */ e("div", { className: y, children: N }) : /* @__PURE__ */ e(
          Et,
          {
            axis: "y",
            values: w,
            onReorder: B,
            className: y,
            children: N
          }
        ) }) }) }),
        p && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => !v.isRoot).map((v, C) => /* @__PURE__ */ e(
          nt,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        b && /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: I, children: M }) : /* @__PURE__ */ e(
              Et,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: I,
                children: M
              }
            )
          }
        )
      ]
    }
  );
}
const Qs = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(be, { description: t, children: n }) : n;
function ac({
  onClick: t,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: g(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ne()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(W, { icon: Dr, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Tr, { keys: a }) })
      ]
    }
  ) });
}
const Qt = ({ position: t }) => /* @__PURE__ */ e(
  X.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: g(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      t === "top" ? [
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
function ei({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = ke(), i = Ue(), [c, d] = lt({ threshold: 1 }), [f, u] = lt({ threshold: 1 }), m = se(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, p = () => a ? tl(a) && r ? _n(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    X.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: g(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : g(
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
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ge, { className: "h-full", children: [
            /* @__PURE__ */ e(
              "div",
              {
                ref: c,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ e("div", { className: "w-[var(--ds-sidebar-width)]", children: n }),
            /* @__PURE__ */ e(
              "div",
              {
                ref: f,
                className: "h-px",
                "aria-hidden": "true"
              },
              "bottom-ref"
            )
          ] }),
          /* @__PURE__ */ o(Ee, { children: [
            !d && /* @__PURE__ */ e(Qt, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(Qt, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const rc = ae(ei), ti = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, en = {
  approved: {
    icon: fn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ce,
    type: "critical",
    size: "sm"
  }
}, ni = {
  icon: yn,
  type: "neutral",
  size: "sm"
}, ai = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, ri = (t) => t in en ? en[t] : ni;
function tn(t) {
  return ai[t ?? "neutral"] ?? 0;
}
const li = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = se(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[a], c = q(() => r.map((d) => {
    const f = ri(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => tn(f.badge?.type) - tn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ e($e, { text: i, variant: ti[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(kn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, si = ({ steps: t }) => {
  const a = se().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: s + 1 })
          }
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((l, s) => /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ e(
          li,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, lc = ae(
  H("OneApprovalHistory", si)
), Ft = {
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
}, ii = pe({
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
      ...Ft
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), oi = ie.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ e("div", { className: g("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ e(
    "div",
    {
      className: g(ii({ gap: a, tileSize: l }), n),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), ci = pe({
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
}), ta = j(function({
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
  width: p,
  ...b
}, x) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(
        ci({
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
          width: p
        }),
        n
      ),
      ref: x,
      ...b
    }
  );
}), di = pe({
  base: "flex-row",
  variants: {
    gap: {
      ...Ft
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), ui = ie.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, s) {
  return /* @__PURE__ */ e(
    ta,
    {
      className: g(di({ gap: a, wrap: r }), n),
      ref: s,
      ...l
    }
  );
}), fi = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...Ft
    }
  },
  defaultVariants: {}
}), mi = j(function({ className: n, gap: a, children: r, ...l }, s) {
  return /* @__PURE__ */ e(
    ta,
    {
      className: g(fi({ gap: a }), n),
      ref: s,
      ...l,
      children: r
    }
  );
}), sc = ue(
  {
    name: "Stack",
    type: "layout"
  },
  mi
), ic = ue(
  {
    name: "Split",
    type: "layout"
  },
  ui
), oc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  oi
), hi = ({ children: t }) => {
  const { enabled: n } = Sn();
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        X.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: n ? 0 : 1,
            scale: n ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: t
        }
      )
    }
  );
}, gi = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), pi = j(function({ header: n, children: a, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Sn();
  $(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (p) => !!p && !(ie.isValidElement(p) && p.type === ie.Fragment && ie.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    xt,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(vt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(wt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(gi, {}),
                /* @__PURE__ */ e(In, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(be, { label: n.info, children: /* @__PURE__ */ e(
                W,
                {
                  icon: Fn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(He, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ e(An, { text: s, level: "critical" }),
              i && /* @__PURE__ */ e($e, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ e(
                zr,
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
            /* @__PURE__ */ e(hi, { children: /* @__PURE__ */ e(Pr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              R,
              {
                icon: f ? Br : Rr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(yt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((p, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, b)) }),
          ie.Children.toArray(a).filter(m).map((p, b) => /* @__PURE__ */ o(ie.Fragment, { children: [
            b > 0 && /* @__PURE__ */ e($r, { bare: !0 }),
            p
          ] }, b))
        ] }),
        r && /* @__PURE__ */ e(Wr, { children: /* @__PURE__ */ e(R, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), bi = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), xi = j(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      xt,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(vt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(wt, { children: n.title }) : /* @__PURE__ */ e(O, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(In, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            yt,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && bi({ height: a })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ e(
                O,
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
), ye = ae(
  H("Widget", ee(pi, xi))
), ce = Object.assign(
  j(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ e(ye, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ye.Skeleton
  }
), vi = ee(
  j(function({ canBeBlurred: n, ...a }, r) {
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
    return /* @__PURE__ */ e(
      ce,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(il, { ...s, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), wi = H(
  "AreaChartWidget",
  vi
), yi = j(function(n, a) {
  return /* @__PURE__ */ e(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(ol, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Ni = H(
  "BarChartWidget",
  ee(yi, ce.Skeleton)
), Ci = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(cl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), ki = H(
  "LineChartWidget",
  Ci
), Si = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(dl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ii = H(
  "PieChartWidget",
  Si
), Fi = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Ai = H(
  "SummariesWidget",
  Fi
), Li = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(ul, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ei = H(
  "VerticalBarChartWidget",
  Li
), cc = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  wi
), dc = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Ni
), uc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ki
), fc = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Ii
), mc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Ei
), hc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Ai
), _i = (t, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "366",
    height: "146",
    viewBox: "0 0 366 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...t,
    children: [
      /* @__PURE__ */ e("g", { filter: "url(#filter0_b_378_17717)", children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e("g", { filter: "url(#filter1_b_378_17717)", children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e("g", { filter: "url(#filter2_b_378_17717)", children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e("g", { filter: "url(#filter3_b_378_17717)", children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ e("g", { filter: "url(#filter4_b_378_17717)", children: /* @__PURE__ */ e(
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
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
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
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
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
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
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
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
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
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ e(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ e(
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
), Oi = j(_i), Di = (t, n) => /* @__PURE__ */ o(
  "svg",
  {
    width: "406",
    height: "179",
    viewBox: "0 0 406 179",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...t,
    children: [
      /* @__PURE__ */ e(
        "path",
        {
          d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
          stroke: "#E51943",
          strokeOpacity: "0.1",
          strokeWidth: "1.3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e(
        "path",
        {
          d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
          fill: "url(#paint0_linear_3715_9085)"
        }
      ),
      /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ o(
        "linearGradient",
        {
          id: "paint0_linear_3715_9085",
          x1: "203",
          y1: "179",
          x2: "203",
          y2: "1",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ e("stop", { stopColor: "#E51943", stopOpacity: "0" }),
            /* @__PURE__ */ e("stop", { offset: "1", stopColor: "#E51943", stopOpacity: "0.05" })
          ]
        }
      ) })
    ]
  }
), Ti = j(Di), zi = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Pi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Bi = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ri = {
  "line-chart": "default",
  "bar-chart": "promote"
}, $i = j(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = zi[i], f = Pi[i], u = Bi[i], m = Ri[i];
    return /* @__PURE__ */ o(
      xt,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(vt, { className: "-mt-0.5", children: /* @__PURE__ */ e(wt, { children: n }) }),
          /* @__PURE__ */ o(yt, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Oi, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ e(Ti, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                R,
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
), gc = ae(
  H("ChartWidgetEmptyState", $i)
);
function Wi(t, n) {
  const a = G(null), r = G(null), [l, s] = E({
    visibleItems: [],
    overflowItems: []
  });
  Mr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const i = Q(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = Q(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const p = u[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), d = Q(
    (u, m) => {
      let h = 0, p = 0;
      for (let b = 0; b < u.length; b++) {
        const x = p + u[b];
        if (x > m + 30) break;
        p = x, p = i(
          p,
          b,
          u.length
        ), h++;
      }
      return h;
    },
    [i]
  ), f = Q(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    s(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (p) => p.visibleItems.length === h && p.overflowItems.length === t.length - h ? p : {
      visibleItems: t.slice(0, h),
      overflowItems: t.slice(h)
    });
  }, [t, c, d]);
  return $(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const Xe = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Wi(n, l);
  return $(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", r),
      style: {
        minHeight: `${s}px`
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            ref: d,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${l}px` },
            "data-testid": "overflow-measurement-container",
            children: n.map((u, m) => /* @__PURE__ */ e("div", { "data-testid": "overflow-measurement-item", children: a(u, m, !1) }, `measure-${m}`))
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${l}px` },
            "data-testid": "overflow-visible-container",
            children: f.map((u, m) => /* @__PURE__ */ e(
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
Xe.displayName = "VerticalOverflowList";
const pc = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(mt, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  Xe,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(mt, { ...l }, l.title)
  }
) : null, Mi = ({ onClick: t, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: g(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ e("div", { className: a, tabIndex: 1, children: n });
};
function bc({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(Mi, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ e(W, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const ji = j(
  function({ content: n, label: a, color: r, ...l }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
      /* @__PURE__ */ e("p", { className: "text-3xl font-semibold", children: n }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: a,
            children: a
          }
        ),
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: g("flex", r), children: /* @__PURE__ */ e(W, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: g("flex", r), children: /* @__PURE__ */ e(bt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), xc = j(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ e(
          ji,
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
), Vi = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = g(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function vc({
  id: t,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: l,
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    Vi,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(jr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(Vr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          kn,
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
const Gi = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function nn({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const s = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Gi, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: s, children: [
    /* @__PURE__ */ e(xn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const Hi = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function ht({
  id: t,
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
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Hi, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ e(
        W,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ e(
        W,
        {
          icon: i,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(An, { ...a }),
      r && /* @__PURE__ */ e(Le, { ...r }),
      !!l && /* @__PURE__ */ e(He, { value: l })
    ] })
  ] });
}
function wc({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s) => /* @__PURE__ */ e(nn, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ e(nn, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function yc({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((s) => /* @__PURE__ */ e(ht, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ e(ht, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const Ui = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Nc = j(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            be,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(W, { icon: Fn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      l.map((i) => /* @__PURE__ */ e(Ui, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Cc({
  title: t,
  subtitle: n,
  data: a,
  helpText: r,
  legend: l = !1,
  hideTooltip: s = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      fl,
      {
        data: a,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: g(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const na = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, Ki = ({
  data: t = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const i = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!l || r === void 0) return;
    const u = na(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), b = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = xe[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, at = "--:--", qi = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: xe.empty
    };
  if (!n)
    return {
      value: 1,
      color: xe.empty
    };
}, Yi = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = na(
    n,
    a
  ), s = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : qi(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - p) / s;
        return c -= p, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: p / s + x,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: p / s,
            color: xe.overtime
          },
          {
            value: x,
            color: xe[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: xe.empty
  }), f;
}, Zi = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, l = t.at(-1), s = r ? Tt(r) : at, i = n === void 0 || n > 0 ? at : l ? Tt(l.to) : at, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: i,
    time: m
  };
}, xe = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Xi({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Yi({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: s, time: i } = Zi({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(ml, { width: 156, height: 156, children: /* @__PURE__ */ e(
      hl,
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
        children: r.map((c, d) => /* @__PURE__ */ e(
          Gr,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: i }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: s })
    ] })
  ] });
}
function Ji({
  text: t,
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
        a && /* @__PURE__ */ e(W, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ e(
          "span",
          {
            className: g(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? n
          }
        ),
        /* @__PURE__ */ e(W, { icon: Hr })
      ]
    }
  );
}
function kc({
  trackedMinutes: t,
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
  canShowBreakButton: p = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: A = !0,
  projectSelectorElement: z,
  breakTypeName: B
}) {
  const { status: D, statusText: _, subtitle: L, statusColor: K } = Ki({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), T = D === "clocked-out", y = m?.map((P) => ({
    value: P.id,
    label: P.duration ? `${P.name} · ${P.duration}` : P.name,
    description: P.description,
    tag: P.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, N] = E(!1), I = () => {
    if (y.length > 1)
      S || N(!0);
    else {
      const P = y?.[0]?.value;
      u?.(P);
    }
  }, M = (P) => {
    h?.(P), N(!1), u?.(P);
  }, v = T && s.length && !c && i, C = s.find((P) => P.id === l), k = s.map((P) => ({
    value: P.id,
    label: P.name,
    icon: P.icon
  })), V = D === "break", [re, le] = E(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: _ }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                X.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: K
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
              /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute inset-[3px] rounded-full",
                  style: {
                    backgroundColor: K
                  }
                }
              )
            ] })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            R,
            {
              onClick: d,
              label: r.clockIn,
              icon: _t
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(U, { children: [
            p && /* @__PURE__ */ e(U, { children: y.length > 1 && h ? /* @__PURE__ */ e(
              We,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: M,
                open: S,
                onOpenChange: N,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  R,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Ot,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              R,
              {
                onClick: I,
                label: r.break,
                variant: "neutral",
                icon: Ot,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              R,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Dt
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              R,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Dt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              R,
              {
                onClick: d,
                label: r.resume,
                icon: _t
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ e(
        Xi,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        We,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: k,
          onChange: w,
          open: re,
          onOpenChange: le,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Ji,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      A && z
    ] }) : /* @__PURE__ */ o(U, { children: [
      i && C && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Le, { text: C.name, icon: C.icon }) }),
      A && z,
      V && B && /* @__PURE__ */ e(Le, { text: B })
    ] }) })
  ] }) });
}
const Qi = {
  done: qr,
  "in-progress": Kr,
  todo: Ur
}, eo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function to({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(t);
  }, s = q(() => {
    if (!r)
      return Qi[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    ht,
    {
      id: t.id,
      title: t.text,
      icon: s,
      iconClassName: eo[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: Yr
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function Sc({
  tasks: t,
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
    ({ key: d, status: f }) => (t[d] || []).map(
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
  ), c = !i.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ e(
    to,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var no = Object.defineProperty, ao = Object.defineProperties, ro = Object.getOwnPropertyDescriptors, Ve = Object.getOwnPropertySymbols, aa = Object.prototype.hasOwnProperty, ra = Object.prototype.propertyIsEnumerable, an = (t, n, a) => n in t ? no(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, oe = (t, n) => {
  for (var a in n || (n = {})) aa.call(n, a) && an(t, a, n[a]);
  if (Ve) for (var a of Ve(n)) ra.call(n, a) && an(t, a, n[a]);
  return t;
}, Je = (t, n) => ao(t, ro(n)), lo = (t, n) => {
  var a = {};
  for (var r in t) aa.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && Ve) for (var r of Ve(t)) n.indexOf(r) < 0 && ra.call(t, r) && (a[r] = t[r]);
  return a;
}, so = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, io = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), oo = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = oe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, co = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = oe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, uo = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + t.width, so(l) || io({ usedSpot: l, spotsList: a }) ? null : l;
}, fo = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((l, s, i) => {
  if (l === a) return uo({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = oo({ position: n, spot: l, stone: r });
  return c || co({ position: n, stone: r, spot: l }) || l;
});
function mo(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (t(l)) return l;
  }
  return null;
}
var ho = (t, n) => n.filter(t), go = (t, n) => [...n].sort(t), po = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, bo = (t) => go(po, t), xo = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
  let l = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let s = 0, i = t.length; s < i; s += 1) {
    let c = t[s];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, vo = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, wo = ({ availableSpots: t, stone: n }) => mo((a) => vo(a, n), t);
function yo({ stone: t, availableSpots: n, containerSize: a }) {
  let r = wo({ availableSpots: n, stone: t }), l = { left: r.left, top: r.top }, s = xo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), i = [...n, s], c = fo({ spots: i, position: l, optimalSpot: r, stone: t });
  return i = [...ho(Boolean, c)], i = bo(i), { position: l, availableSpots: i };
}
var No = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of t) {
    let c = yo({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, Co = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), ko = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = E({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return $(() => {
    var u, m;
    let h = Co(t.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let b = No({ stones: h, containerSize: p });
    f(Je(oe({}, b), { stones: h }));
  }, [a, t, n, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, So = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), Io = ({ transition: t, transitionDuration: n }) => t ? { transition: So(n)[t] } : null, Fo = (t) => t ? Je(oe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Ao = ({ style: t, position: n, transition: a, transitionDuration: r }) => oe(oe(Je(oe({}, t), { position: "absolute" }), Fo(n)), Io({ transition: a, transitionDuration: r }));
function Lo(t, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, n);
  };
}
var Eo = () => {
  let [t, n] = E(), a = G(Lo(n, 300));
  return $(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, _o = (t) => {
  let [n, a] = E(null);
  return $(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) a(s.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Oo = (t) => {
  var n = t, { children: a, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = lo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = G([]), f = G(null), u = Eo(), m = _o(f), { positions: h, containerHeight: p } = ko({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = oe({ minHeight: p ?? 0, position: "relative" }, r);
  return e("div", Je(oe({ ref: f, style: b }, c), { children: On.map(a, (x, w) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let A = { style: Ao({ style: x.props.style, position: h[w], transition: l, transitionDuration: s }), ref: (z) => d.current[w] = z };
    return _n(x, oe(oe({}, x.props), A));
  }) }));
};
const Do = { sm: 340, md: 480, lg: 640 }, rn = j(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Do[a], [s, i] = E(), c = On.toArray(n), d = G(null);
    return $(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: s === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Oo, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), To = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Ic = ee(rn, () => /* @__PURE__ */ e(Ln, { children: /* @__PURE__ */ e(rn, { children: To.map((t, n) => /* @__PURE__ */ e(ye.Skeleton, { height: t }, n)) }) })), ln = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), Fc = ee(
  j(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ge, { ref: a, showBar: !1, children: /* @__PURE__ */ e(ln, { children: n }) });
  }),
  () => /* @__PURE__ */ e(Ln, { orientation: "horizontal", children: /* @__PURE__ */ o(ln, { children: [
    /* @__PURE__ */ e(ye.Skeleton, {}),
    /* @__PURE__ */ e(ye.Skeleton, {}),
    /* @__PURE__ */ e(ye.Skeleton, {})
  ] }) })
);
function zo({
  title: t,
  description: n,
  emoji: a,
  actions: r
}) {
  if ((r?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ e(
    Zr,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Ac = ae(
  H("WidgetEmptyState", zo)
), la = j(
  ({ title: t, children: n }, a) => (Xr(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
la.displayName = "WidgetSection";
const Lc = ae(
  H("WidgetSection", la)
), Ec = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Jr(), s = window.location.pathname, i = q(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return i ? r : (l && console.error(c), null);
}, _c = ae(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ge
  )
);
export {
  Ho as ActivityItemList,
  gs as ActivityItemListSkeleton,
  jl as AiPromotionChat,
  Vl as AiPromotionChatProvider,
  Zo as ApplicationFrame,
  Ad as AreaChart,
  cc as AreaChartWidget,
  oc as AutoGrid,
  Sr as Badge,
  Ld as BarChart,
  dc as BarChartWidget,
  hs as BaseActivityItemList,
  Ed as BaseBanner,
  ws as BaseCelebration,
  Es as BaseCommunityPost,
  Tc as BaseTabs,
  zc as BreadcrumbSelect,
  wl as Breadcrumbs,
  mt as CalendarEvent,
  pc as CalendarEventList,
  Pc as CardSelectableContainer,
  nl as Carousel,
  _d as CategoryBarChart,
  Cc as CategoryBarSection,
  Uo as Celebration,
  ys as CelebrationSkeleton,
  gc as ChartWidgetEmptyState,
  Bc as Chip,
  kc as ClockInControls,
  Od as ComboChart,
  qo as CommunityPost,
  _s as CommunityPostSkeleton,
  Vs as CompanySelector,
  He as Counter,
  Ic as Dashboard,
  Xo as DaytimePage,
  Rc as DetailsItem,
  $c as DetailsItemsList,
  Dd as Dialog,
  Ne as Dropdown,
  Go as EntitySelect,
  Wc as F0ActionBar,
  Td as F0AiBanner,
  xn as F0AvatarModule,
  Mc as F0ButtonToggle,
  jo as F0Callout,
  Mo as F0SegmentedControl,
  jc as F0TableOfContent,
  Vo as F0VersionHistory,
  Vc as F1SearchBox,
  Gc as FILE_TYPES,
  Hc as FileItem,
  Ko as HighlightBanner,
  xc as IndicatorsList,
  Uc as Input,
  Kc as Item,
  qc as ItemSectionHeader,
  zd as LineChart,
  uc as LineChartWidget,
  nc as Menu,
  Yc as MobileDropdown,
  Pd as NotesTextEditor,
  Bd as NotesTextEditorPatchTargetNotFoundError,
  Rd as NotesTextEditorSkeleton,
  $d as NotesTextEditorUnsupportedPatchTypeError,
  Zc as NumberInput,
  Jo as OmniButton,
  lc as OneApprovalHistory,
  Xc as OneCalendar,
  Jc as OneCalendarInternal,
  Qc as OneDataCollection,
  ed as OneDateNavigator,
  Zr as OneEmptyState,
  td as OnePagination,
  Yo as OnePersonListItem,
  Ec as OneRestrictComponent,
  Qo as Page,
  Wo as PageHeader,
  Wd as PieChart,
  fc as PieChartWidget,
  hi as PrivateBox,
  Md as ProgressBarChart,
  jd as RadarChart,
  ks as Reactions,
  nd as ResourceHeader,
  hr as RichTextDisplay,
  ad as RichTextEditor,
  _c as ScrollArea,
  ac as SearchBar,
  rd as SectionHeader,
  We as Select,
  Tr as Shortcut,
  rc as Sidebar,
  ec as SidebarFooter,
  tc as SidebarHeader,
  un as Spinner,
  ic as Split,
  sc as Stack,
  hc as SummariesWidget,
  ld as Switch,
  sd as Tabs,
  id as TabsSkeleton,
  Sc as TasksList,
  od as Textarea,
  cd as ToggleGroup,
  dd as ToggleGroupItem,
  be as Tooltip,
  Nc as TwoColumnsList,
  Vd as VerticalBarChart,
  mc as VerticalBarChartWidget,
  dt as VirtualList,
  ud as WeekStartDay,
  fd as Weekdays,
  ye as Widget,
  vc as WidgetAvatarsListItem,
  Ac as WidgetEmptyState,
  bc as WidgetHighlightButton,
  wc as WidgetInboxList,
  nn as WidgetInboxListItem,
  Lc as WidgetSection,
  yc as WidgetSimpleList,
  ht as WidgetSimpleListItem,
  Fc as WidgetStrip,
  md as actionBarStatuses,
  Gd as buttonToggleSizes,
  Hd as buttonToggleVariants,
  hd as chipVariants,
  gd as downloadAsCSV,
  pd as generateCSVContent,
  bd as getGranularityDefinition,
  xd as getGranularityDefinitions,
  vd as getGranularitySimpleDefinition,
  wd as granularityDefinitions,
  yd as modules,
  Ud as predefinedPresets,
  Nd as rangeSeparator,
  Kd as selectSizes,
  qe as useAiPromotionChat,
  Cd as useDataCollectionData,
  kd as useDataCollectionSource,
  Sd as useExportAction,
  Id as useInfiniteScrollPagination,
  ke as useSidebar
};
