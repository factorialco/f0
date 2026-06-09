import { g as ca, B as da, h as ua, i as fa, j as Ft, k as De, l as ma, m as g, n as X, o as pe, u as ie, T as ha, p as ga, q as pa, R as ba, r as xa, s as re, t as va, v as gt, w as rt, x as Re, A as _e, y as wa, z as ya, C as W, E as Na, G as Ca, H as ve, J as rn, K as ka, L as Sa, M, N as ln, S as O, O as we, Q as Ia, U as Fa, V as Aa, W as La, X as Ea, Y as ke, Z as sn, _ as _a, $ as be, a0 as $e, a1 as Oa, d as on, a2 as Ce, a3 as Da, a4 as cn, a5 as ne, a6 as K, a7 as dn, a8 as un, a9 as Ta, aa as fn, ab as me, ac as ee, ad as za, ae as Pa, af as Ba, ag as Ra, ah as ge, ai as Ge, aj as $a, ak as Wa, al as Ma, am as ja, an as He, ao as mn, ap as Va, aq as Ga, ar as Ha, as as We, at as Ua, au as Ka, av as qa, aw as Ya, ax as Za, ay as Xa, az as Ja, aA as Qa, aB as er, aC as tr, aD as lt, aE as hn, aF as it, aG as gn, aH as nr, aI as ar, aJ as rr, aK as lr, aL as ir, aM as Ue, aN as pt, aO as st, aP as pn, aQ as sr, aR as bn, aS as or, aT as cr, aU as dr, aV as Ee, aW as ur, aX as fr, aY as Te, aZ as At, a_ as ot, a$ as mr, b0 as hr, a as gr, b as pr, b1 as xn, b2 as br, f as xr, F as vr, b3 as wr, b4 as vn, b5 as yr, b6 as wn, b7 as yn, b8 as Nr, b9 as Cr, ba as kr, bb as Sr, bc as Ir, bd as Fr, be as Ar, bf as Lr, bg as Er, bh as Nn, bi as ue, bj as bt, bk as xt, bl as vt, bm as Cn, bn as wt, bo as kn, bp as Sn, bq as _r, br as Or, bs as Dr, bt as Tr, bu as zr, bv as Pr, bw as Br, bx as Rr, by as Lt, bz as $r, bA as Wr, bB as Et, bC as _t, bD as Ot, bE as Mr, bF as jr, bG as Vr, bH as Gr, bI as In, bJ as Hr, bK as Ur } from "./F0CanvasPanel-Cb-XPsWw.js";
import { bW as Ac, bV as Lc, c6 as Ec, bS as _c, bT as Oc, bL as Dc, bM as Tc, bN as zc, c7 as Pc, bU as Bc, c2 as Rc, c3 as $c, bO as Wc, bY as Mc, bX as jc, bP as Vc, bQ as Gc, c4 as Hc, c8 as Uc, c5 as Kc, c1 as qc, b_ as Yc, c0 as Zc, bZ as Xc, bR as Jc, b$ as Qc } from "./F0CanvasPanel-Cb-XPsWw.js";
import { jsx as e, jsxs as o, Fragment as U } from "react/jsx-runtime";
import se, { forwardRef as j, useRef as G, useTransition as Kr, useState as _, useLayoutEffect as Fn, useId as ct, useContext as Ke, createContext as yt, useEffect as $, useCallback as Q, useMemo as q, Fragment as qr, isValidElement as Yr, cloneElement as An, Children as Ln } from "react";
import { C as Zr, P as Xr, a as En, M as Jr, R as Dt, b as _n, u as Qr, c as On, S as el, A as tl, B as nl, L as al, d as rl, V as ll, e as il, f as sl, g as ol, O as cl } from "./useDataCollectionSource-CK7xTraN.js";
import { l as td, m as nd, j as ad, x as rd, n as ld, s as id, a3 as sd, w as od, k as cd, D as dd, F as ud, J as fd, E as md, z as hd, a9 as gd, I as pd, K as bd, Q as xd, o as vd, a5 as wd, a6 as yd, a4 as Nd, a7 as Cd, N as kd, U as Sd, a0 as Id, a2 as Fd, p as Ad, r as Ld, t as Ed, G as _d, a8 as Od, H as Dd, T as Td, q as zd, v as Pd, h as Bd, i as Rd, X as $d, Y as Wd, a1 as Md, y as jd, Z as Vd, _ as Gd, W as Hd, $ as Ud } from "./useDataCollectionSource-CK7xTraN.js";
const dl = ca("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Dn = j(({ className: t, items: n }, a) => /* @__PURE__ */ e(da, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(ua, {}),
  /* @__PURE__ */ e(fa, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Dn.displayName = "CollapsedBreadcrumbItem";
const Nt = 50, ul = 120, Me = 8;
function fl(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = t - r - Me, i = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, i = c, s++;
  }
  if (s < a)
    for (l -= Nt; l < 0 && s > 1; )
      l += n[i], i++, s--;
  return Math.max(2, s);
}
function Tt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Me;
    default:
      return t[0] + Nt + t[t.length - 1] + Me;
  }
}
function ml(t, n) {
  return ul * t + (n ? Nt : 0) + Me;
}
function hl(t, n, a = []) {
  if (!t) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: ml(
        s,
        n.length > 2
      )
    };
  }
  const r = n.length <= 2, l = a.map((s) => s.clientWidth);
  if (r)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Tt(l)
    };
  const i = fl(t, l);
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
    minWidth: Tt(l)
  };
}
function gl({ breadcrumbs: t, append: n }) {
  const a = G(null), r = G(null), [, l] = Kr(), [i, s] = _(null), c = (i?.collapsedItems || []).length > 0;
  return Fn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, p = Array.from(f.children);
      l(() => {
        const b = hl(
          h,
          t,
          p
        );
        s(b);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || i && !i.headItem ? /* @__PURE__ */ e(Ft, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Ft,
    {
      ref: a,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: i?.minWidth
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
        i && i.headItem && /* @__PURE__ */ o(ma, { children: [
          /* @__PURE__ */ e(
            De,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${i.headItem.id}`
          ),
          c && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              Dn,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ e(
              De,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(U, { children: i.tailItems.map((d, f) => /* @__PURE__ */ e(
            De,
            {
              item: d,
              isLast: f === i.tailItems.length - 1,
              isFirst: !1,
              children: f === i.tailItems.length - 1 ? n : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const pl = pe({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), zt = [
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
], bl = ({
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, i) => {
  const s = ct(), {
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
      className: g(pl({ size: n }), h),
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
          ...(({ style: b, ...v }) => v)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              zt.map((b) => /* @__PURE__ */ e("clipPath", { id: `${s}-${b.id}`, children: /* @__PURE__ */ e("path", { d: b.path }) }, b.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${s}-circle)`, children: zt.map((b) => /* @__PURE__ */ e(
              X.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${b.id})`,
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
}, Tn = j(bl), zn = yt(null), xl = 15, vl = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [l, i] = _(n), [s, c] = _(!1), [d, f] = _(!0), [u, m] = _(
    xl
  ), h = G(null), p = (v) => {
    h.current = v;
  }, b = () => {
    h.current && h.current();
  };
  return $(() => {
    i(n);
  }, [n]), $(() => {
    if (s && a?.(), !s) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [s, a]), /* @__PURE__ */ e(
    zn.Provider,
    {
      value: {
        ...r,
        enabled: l,
        setEnabled: i,
        open: s,
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
}, ye = () => {
};
function qe() {
  const t = Ke(zn);
  return t === null ? {
    enabled: !1,
    setEnabled: ye,
    open: !1,
    setOpen: ye,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: ye,
    setAutoClearMinutes: ye,
    clear: ye,
    setClearFunction: ye,
    autoClearMinutes: null
  } : t;
}
const Pn = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = qe(), i = ie(), [s, c] = _(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(ha, { children: /* @__PURE__ */ o(ga, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(pa, { asChild: !0, children: /* @__PURE__ */ e(
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
          ba,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? i.ai.closeChat : i.ai.openChat,
            className: g(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              re(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              xa,
              {
                className: g(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Tn,
                  {
                    size: "sm",
                    background: l ? "white" : void 0,
                    hover: s
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !l && /* @__PURE__ */ e(va, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, Pt = "one_sidebar_locked", Bn = yt(void 0);
function Se() {
  const t = Ke(Bn);
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
function wl({ children: t }) {
  const { currentPath: n } = gt(), [a, r] = _(!1), [l, i] = _(!1), s = a ? Re.xl : Re.md, c = rt(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = _(() => {
    const I = localStorage.getItem(Pt);
    return I !== null ? !!I : !0;
  }), [u, m] = _(!1), [h, p] = _(
    null
  ), b = Q(
    ({ isInvokedByUser: I } = {
      isInvokedByUser: !0
    }) => {
      i(I ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = Q(
    (I) => {
      c || (I.clientX < 32 && m(!0), I.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return $(() => {
    m(!1);
  }, [n]), $(() => {
    l && localStorage.setItem(Pt, d ? "1" : "");
  }, [d, l]), $(() => () => {
    p(y);
  }, [y]), /* @__PURE__ */ e(
    Bn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: y,
        toggleSidebar: b,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: v, className: "h-screen w-screen", children: t })
    }
  );
}
const Bt = X.create(W), Rt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, yl = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, l] = _(!1), i = () => {
    l(!0), n(!t);
  };
  return /* @__PURE__ */ e(_e, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: g(
        "flex h-6 w-6 items-center justify-center rounded",
        re()
      ),
      onClick: i,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Bt,
        {
          size: "sm",
          icon: wa,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Rt,
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
        Bt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: ya,
          className: "outline-none",
          variants: Rt,
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
}, Nl = ({
  currentModule: t,
  label: n,
  getUpdates: a,
  updatesPageUrl: r,
  emptyScreen: l,
  errorScreen: i,
  onOpenChange: s = () => {
  },
  onHeaderClick: c = () => {
  },
  onItemClick: d = () => {
  },
  hasUnread: f = !1,
  crossSelling: u
}) => {
  const [m, h] = _("idle"), [p, b] = _(null), [v, ...y] = p ?? [], [I, z] = _(!1);
  $(() => {
    b(null), h("idle");
  }, [t]);
  const R = Q(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), b(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Na,
    {
      open: I,
      onOpenChange: async (D) => {
        z(D), D && p === null && R(), s(D);
      },
      children: [
        /* @__PURE__ */ e(Ca, { asChild: !0, children: /* @__PURE__ */ e(
          ve,
          {
            variant: "outline",
            icon: rn,
            hideLabel: !0,
            label: n,
            pressed: I,
            append: f && /* @__PURE__ */ e(Ct, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(ka, { children: /* @__PURE__ */ o(
          Sa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Sl, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Al, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(Il, { ...l, buttonUrl: r }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Cl,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: y.map((D, E) => /* @__PURE__ */ e(
                    kl,
                    {
                      ...D,
                      onClick: d
                    },
                    E
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  Fl,
                  {
                    ...i,
                    onClick: () => {
                      R();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                Ll,
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
}, Cl = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: i
}) => {
  const s = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    Ia,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        we,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: g(s, "text-f1-foreground no-underline"),
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
              Fa,
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
              r && /* @__PURE__ */ e(Ct, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, kl = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const i = g("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(Aa, { asChild: !0, className: i, onClick: l, children: /* @__PURE__ */ e(
    we,
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
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(Ct, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Sl = ({
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
        M,
        {
          variant: "outline",
          size: "sm",
          icon: ln,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Rn = ({
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
] }) }), Il = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Rn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(W, { icon: rn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(we, { href: a, children: /* @__PURE__ */ e(M, { label: n }) })
  }
), Fl = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Rn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(W, { icon: La, size: "lg" }),
    button: /* @__PURE__ */ e(M, { variant: "outline", label: a, onClick: r })
  }
), Al = () => /* @__PURE__ */ e(
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
), Ct = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: g("size-2 rounded bg-f1-background-selected-bold", t)
  }
), Ll = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, i] = _(t);
  $(() => {
    i(t);
  }, [t]);
  const s = () => {
    i(!1), n && n();
  }, c = (d) => {
    i(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e(Ea, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          M,
          {
            variant: "ghost",
            icon: ke,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        Zr,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            Xr,
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
function zo({
  module: t,
  statusTag: n = void 0,
  breadcrumbs: a = [],
  actions: r = [],
  embedded: l = !1,
  navigation: i,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Se(), h = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], p = n && Object.keys(n).length !== 0, b = l && a.length > 0, v = !l && r.length > 0, y = !l && !!s?.isVisible, I = h[h.length - 1], z = "navigation" in window ? window.navigation : null, R = l && (z ? !!z.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(_e, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            X.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                M,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: sn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                R && "justify-center"
              ),
              children: [
                l && R && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  M,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: _a,
                    onClick: () => window.history.back()
                  }
                ) }),
                R || b ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in I ? /* @__PURE__ */ e(O, { className: "h-4 w-24" }) : I.label }) : /* @__PURE__ */ e(
                  gl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      yl,
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
          !l && p && (i || v || y) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          i && /* @__PURE__ */ e(Oa, { ...i }),
          i && v && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (y || v) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            y && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Nl,
              {
                ...s,
                currentModule: t.name
              }
            ) }),
            v && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((D, E) => /* @__PURE__ */ e(El, { action: D }, E)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              on,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Pn, {})
          ] })
        ] })
      ]
    }
  );
}
function El({ action: t }) {
  const n = G(null), [a, r] = _(!1), l = t.variant ?? "outline";
  return "actions" in t ? /* @__PURE__ */ e(Ce, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    ve,
    {
      size: "md",
      variant: l,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    ve,
    {
      size: "md",
      variant: l,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    we,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        ve,
        {
          size: "md",
          variant: l,
          label: t.label,
          icon: t.icon,
          hideLabel: !0,
          onClick: (i) => {
            i.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const _l = () => {
  const t = ie();
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
          ve,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: Da,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Ol = ({
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
}, Dl = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = qe();
  return Ol({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(_e, { children: n && /* @__PURE__ */ e(
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
}, Tl = ({ action: t, onClose: n }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(cn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        ve,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, zl = ({
  enabled: t = !1,
  greeting: n,
  title: a,
  description: r,
  benefits: l,
  actions: i,
  onShow: s,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  vl,
  {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: i,
    onShow: s,
    onHide: c,
    children: d
  }
), Pl = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: i,
    setOpen: s,
    onHide: c
  } = qe(), d = () => {
    s(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Dl, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      ve,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: ke,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(Tn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(dn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ e(
        Tl,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(_l, {}) })
  ] }) : null;
}, Bl = ne(
  K("AiPromotionChat", Pl)
), Rl = ne(
  K("AiPromotionChatProvider", zl)
), $n = pe({
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
}), $t = {
  positive: fn,
  warning: Ta,
  info: un
}, Wt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, $l = j(
  function({ title: n, onClose: a, children: r, actions: l = [], variant: i }, s) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: $n({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "flex flex-row items-center gap-2",
                  Wt[i]
                ),
                children: [
                  $t[i] && /* @__PURE__ */ e(W, { icon: $t[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    me,
                    {
                      className: Wt[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              M,
              {
                variant: "ghost",
                icon: ke,
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
              M,
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
), Wl = ({
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: $n({ variant: n }),
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
), Wn = j(
  (t, n) => /* @__PURE__ */ e($l, { ref: n, ...t })
), Ml = ({ compact: t, variant: n }) => /* @__PURE__ */ e(Wl, { compact: t, variant: n });
Wn.displayName = "F0Callout";
const Po = ee(
  ne(Wn),
  Ml
);
function jl({
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
        re("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e(W, { icon: za, size: "md", color: "selected" }),
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
function Vl({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = Pa(), i = Ba(l), s = Ra(n, "PPPp", { locale: i }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: g(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        re("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(me, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
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
function Gl({
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
            jl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ e(
            Vl,
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
const Bo = ne(
  K("F0VersionHistory", Gl)
), Mn = j(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: l }, i) => {
    const s = se.useRef(null);
    se.useImperativeHandle(
      i,
      () => s.current,
      []
    );
    const c = $a({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
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
Mn.displayName = "VirtualList";
const dt = K("VirtualList", Mn), jn = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${n})`, "gi"), i = t.split(l);
  return /* @__PURE__ */ e("span", { className: g("line-clamp-1", r ? "font-semibold" : ""), children: i.map(
    (s, c) => s.toLowerCase() === n.toLowerCase() ? /* @__PURE__ */ e(
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
const Hl = ({
  entity: t,
  selected: n,
  onSelect: a,
  onRemove: r,
  marginLeft: l,
  search: i,
  goToFirst: s,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = t.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), b = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? r(t) : a(t));
  }, v = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else y.key === "ArrowDown" ? Ye(y.currentTarget, s) : y.key === "ArrowUp" && Ze(y.currentTarget, c);
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
              jn,
              {
                text: t.name,
                search: i,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          mn,
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
        d && n && /* @__PURE__ */ e(
          W,
          {
            className: "text-f1-icon-selected",
            icon: fn,
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
  partialSelected: i,
  onSelect: s,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: p = !1,
  singleSelector: b = !1,
  disabled: v = !1,
  hiddenAvatar: y = !1
}) => {
  const [I, z] = _(!1);
  if (!t)
    return /* @__PURE__ */ e(
      Hl,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: s,
        onRemove: c,
        singleSelector: b,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: y
      }
    );
  const R = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && b)
      d(!n);
    else if (L.key === "Enter") {
      if (v) return;
      !l || i ? s(r) : l && c(r);
    } else L.key === "ArrowDown" ? Ye(L.currentTarget, f) : L.key === "ArrowUp" && Ze(L.currentTarget, u);
  }, D = () => {
    if (I)
      d(!n), z(!1);
    else {
      if (v || b) return;
      l ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const E = l || i;
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        M,
        {
          hideLabel: !0,
          icon: n ? Wa : Ma,
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
                icon: ja,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                jn,
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
              mn,
              {
                checked: E,
                disabled: v,
                onClick: D,
                onKeyDown: R,
                indeterminate: i,
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
const Mt = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? Ye(i.currentTarget, a) : i.key === "ArrowUp" && Ze(i.currentTarget, r);
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
        M,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: Va,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: g("line-clamp-1"), children: t }) }) })
    ]
  }
) }), Le = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      M,
      {
        disabled: t.disabled,
        variant: t.variant,
        onClick: t.onClick,
        label: t.label,
        icon: t.icon,
        size: "sm"
      }
    );
  const a = [t, ...n ?? []], r = a.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], l = (s) => {
    const c = a.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, i = a.every((s) => s.disabled);
  return /* @__PURE__ */ e(
    Ga,
    {
      items: r,
      value: t.label,
      disabled: i,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Ul = ({
  actions: t,
  selectAllLabel: n,
  clearLabel: a,
  disabled: r,
  allVisibleSelected: l,
  anyVisibleSelected: i,
  loading: s,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || a), m = t && t.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let p, b, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, y = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !i
  } : void 0;
  return v || (v = y, y = void 0), m && u ? (p = /* @__PURE__ */ e(
    Le,
    {
      primaryAction: v,
      secondaryActions: y ? [y] : []
    }
  ), b = /* @__PURE__ */ e(
    Le,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ e(
    Le,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ e(Le, { primaryAction: v, secondaryActions: [] }), y && (b = /* @__PURE__ */ e(Le, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    b
  ] }) });
}, Kl = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: i
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(W, { icon: dl, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Ye(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Ze(c.currentTarget, i)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: Ha,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), et = 384, tt = 36, ql = 37, jt = 1, Vt = 200, Gt = '[data-avatarname-navigator-element="true"]', Yl = ({
  groupView: t,
  entities: n,
  groups: a,
  selectedGroup: r,
  search: l,
  onSelect: i,
  onRemove: s,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: p,
  onToggleExpand: b,
  searchPlaceholder: v,
  selectAllLabel: y,
  clearLabel: I,
  notFoundTitle: z,
  notFoundSubtitle: R,
  className: D,
  actions: E,
  onCreate: L,
  onCreateLabel: H,
  singleSelector: T = !1,
  loading: w = !1,
  disabled: k = !1,
  hiddenAvatar: C = !1
}) => {
  const F = se.useRef(null), B = q(
    () => t ? n.reduce(
      (A, Y) => A + (Y.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), x = Q(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: 0 });
    }, jt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Gt)
      )[0]?.focus();
    }, Vt);
  }, []), N = Q(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: F.current?.scrollHeight });
    }, jt), setTimeout(() => {
      const A = Array.from(
        document.querySelectorAll(Gt)
      );
      A[A.length - 1]?.focus();
    }, Vt);
  }, []), S = q(
    () => new Map(h.map((A) => [A.id, A])),
    [h]
  ), V = Q(
    (A) => {
      const Y = S.get(A.id);
      if (!t)
        return {
          selected: !!Y,
          partialSelected: !!Y
        };
      const J = (A.subItems ?? []).filter(
        (te) => Y?.subItems?.some(
          (fe) => fe.subId === te.subId
        )
      ), Z = (A.subItems?.length ?? 0) === J.length, de = !Z && J.length > 0;
      return { selected: Z, partialSelected: de };
    },
    [t, S]
  ), ae = Q(
    (A) => {
      if (A.index === 0 && L)
        return /* @__PURE__ */ e(
          Mt,
          {
            label: H ?? "",
            onCreate: () => L?.(l),
            goToFirst: x,
            goToLast: N
          }
        );
      const Y = L ? A.index - 1 : A.index, J = n[Y], { selected: Z, partialSelected: de } = V(J);
      return /* @__PURE__ */ e(
        Pe,
        {
          expanded: J.expanded ?? !1,
          onExpand: () => b(J, !0),
          search: l,
          groupView: t,
          entity: J,
          onSelect: i,
          onRemove: s,
          selected: Z,
          partialSelected: de,
          showGroupIcon: Zl(a, r),
          singleSelector: T,
          goToFirst: x,
          goToLast: N,
          disabled: k,
          hiddenAvatar: C
        },
        J.id
      );
    },
    [
      L,
      H,
      k,
      n,
      V,
      x,
      N,
      t,
      a,
      C,
      s,
      i,
      b,
      l,
      r,
      T
    ]
  ), le = q(() => t ? n.flatMap((A) => {
    const Y = ze(
      h ?? [],
      A.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: A.id,
          subName: A.name,
          subAvatar: A.avatar,
          expanded: A.expanded ?? Y?.expanded ?? !1,
          subItems: A.subItems,
          subSearchKeys: A.searchKeys
        }
      },
      ...(A.subItems ?? []).map((J) => ({
        parent: {
          ...A,
          expanded: A.expanded ?? Y?.expanded ?? !1
        },
        subItem: J
      }))
    ];
  }).filter(
    (A) => (!A.parent || A.parent.expanded) && (!!A.parent || !!A.subItem.subItems && A.subItem.subItems.length > 0)
  ) : n.map((A) => ({
    parent: null,
    subItem: {
      subId: A.id,
      subName: A.name,
      subAvatar: A.avatar,
      subSearchKeys: A.searchKeys
    }
  })), [t, n, h]), P = Q(
    (A) => {
      if (A.index === 0 && L)
        return /* @__PURE__ */ e(
          Mt,
          {
            label: H ?? "",
            onCreate: () => L?.(l),
            goToFirst: x,
            goToLast: N
          }
        );
      const Y = L ? A.index - 1 : A.index, J = le[Y].parent, Z = le[Y].subItem;
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
          (Ae) => fe?.subItems?.some(
            (oa) => oa.subId === Ae.subId
          )
        ), Oe = (te.subItems?.length ?? 0) === he.length, sa = !Oe && he.length > 0;
        return /* @__PURE__ */ e(
          Pe,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Ae) => b(te, Ae),
            search: l,
            entity: te,
            onSelect: i,
            onRemove: s,
            selected: Oe,
            partialSelected: sa,
            showGroupIcon: a.find((Ae) => Ae.value === r)?.groupType === "team",
            singleSelector: T,
            goToFirst: x,
            goToLast: N,
            hideLine: Y === le.length - 1,
            disabled: k,
            hiddenAvatar: C
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
          goToFirst: x,
          goToLast: N,
          isChild: !0,
          hiddenAvatar: C
        }
      );
    },
    [
      le,
      h,
      l,
      T,
      x,
      N,
      i,
      s,
      a,
      k,
      b,
      r,
      d,
      c,
      C,
      L,
      H
    ]
  ), [Ie, Qe] = q(() => {
    if (!n.length)
      return [!1, !1];
    let A = 0, Y = 0;
    if (!t)
      A = n.length, Y = n.reduce(
        (de, { id: te }) => de + (S.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...S.values()].flatMap(
          (te) => te.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((te) => {
        const fe = te.subItems ?? [];
        A += fe.length, Y += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const J = A > 0 && Y === A, Z = Y > 0;
    return [J, Z];
  }, [n, S, t]), Fe = le.length, ra = !T && (y || I), la = E && E.length > 0, ia = !w && (!T && ra || la);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex w-full flex-col rounded-l-xl border-0",
        T || w ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: g(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              T || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Kl,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: x,
                  goToLast: N
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                We,
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
        /* @__PURE__ */ o(
          "section",
          {
            className: g(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              ia ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(cn, {}) }),
              !w && !B && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: et
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: z }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: R })
                  ]
                }
              ),
              !w && (!!B || L) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                dt,
                {
                  height: et,
                  itemCount: Fe + (L ? 1 : 0),
                  itemSize: (A) => {
                    if (A === 0 && L) return tt;
                    const Y = L ? A - 1 : A;
                    return le[Y]?.parent === null ? ql : tt;
                  },
                  renderer: P,
                  ref: F
                }
              ) : /* @__PURE__ */ e(
                dt,
                {
                  height: et,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: tt,
                  renderer: ae,
                  ref: F
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Ul,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: T,
            totalFilteredEntities: B,
            allVisibleSelected: Ie,
            anyVisibleSelected: Qe,
            selectAllLabel: y,
            clearLabel: I,
            disabled: k,
            actions: E
          }
        )
      ]
    }
  );
}, ze = (t, n) => t.find((a) => a.id === n), Zl = (t, n) => t.find((a) => a.value === n)?.groupType === "team", Xl = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Ua,
  {
    className: g(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      Ka,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: qa, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      W,
      {
        icon: ke,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), Jl = ({
  groupView: t,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: i = !1,
  hiddenAvatar: s = !1
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
            Xl,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: i,
              hiddenAvatar: s,
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
}, Ql = 500, Ht = 520, Ut = 210, Kt = ({
  groupView: t,
  onRemove: n,
  onSubItemRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  width: i,
  singleSelector: s = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...h
}) => {
  const p = (i ?? Ht) < Ql, b = !c && !s && !p, v = i ?? Ht, y = b ? v - Ut : v;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: s && (!f || f.length === 0) ? "435px" : "473px",
        width: v
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ e(
              Yl,
              {
                ...h,
                groupView: t,
                onRemove: n,
                onSubItemRemove: a,
                selectedEntities: r,
                singleSelector: s,
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
              width: Ut + "px"
            },
            children: /* @__PURE__ */ e(
              Jl,
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
}, ei = ({
  placeholder: t,
  selected: n,
  selectedEntities: a,
  disabled: r = !1,
  hiddenAvatar: l = !1,
  label: i,
  labelIcon: s,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: p,
  loading: b = !1,
  required: v = !1,
  readonly: y = !1,
  append: I,
  size: z = "sm",
  open: R
}) => {
  const D = q(
    () => a.some(
      (T) => T.subItems && T.subItems.length > 0
    ),
    [a]
  ), E = q(() => D ? a.flatMap(
    (T) => (T.subItems ?? []).map((w) => ({
      parent: T,
      subItem: w
    }))
  ) : a.map((T) => ({
    parent: null,
    subItem: {
      subId: T.id,
      subName: T.name,
      subAvatar: T.avatar,
      subDeactivated: T.deactivated
    }
  })), [D, a]), L = E.length === 0 ? void 0 : E.length === 1 ? E[0].subItem.subName : E.length + " " + n, H = E.length === 1 ? E[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    Ya,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: s,
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
      required: v,
      readonly: y,
      size: z,
      avatar: l || !H ? void 0 : {
        type: "person",
        firstName: H,
        lastName: "",
        src: E[0].subItem.subAvatar,
        deactivated: E[0].subItem.subDeactivated
      },
      append: I ?? /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Za, { open: R, disabled: r, size: z }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: g(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            E.length === 1 && !l || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            me,
            {
              tag: "span",
              className: E.length === 1 && E[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: E.length === 0 ? t ?? "" : E.length === 1 ? E[0].subItem.subName : `${E.length} ${n}`
            }
          )
        }
      )
    }
  );
}, Ro = (t) => {
  const [n, a] = _(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (w) => {
    a(w), t.onOpenChange?.(w);
  };
  $(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, i] = _(t.entities), [s, c] = _(""), [d, f] = Xa("", 300), u = q(
    () => t.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [t.entities]
  ), m = Ke(Ja), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function b(w) {
    if (t.singleSelector) {
      t.onSelect(w), a(!1);
      return;
    }
    const k = t.selectedEntities ?? [], C = l.find((S) => S.id === w.id);
    if (!C)
      return;
    const F = new Set(
      (C.subItems ?? []).map((S) => S.subId)
    ), B = /* @__PURE__ */ new Set([C.id]);
    l.forEach((S) => {
      S.id !== C.id && (S.subItems ?? []).some(
        (ae) => F.has(ae.subId)
      ) && B.add(S.id);
    });
    const x = [...k];
    function N(S) {
      const V = x.findIndex((ae) => ae.id === S.id);
      V >= 0 ? x[V] = S : x.push(S);
    }
    B.forEach((S) => {
      const V = l.find((P) => P.id === S);
      if (!V) return;
      const ae = V.subItems?.filter(
        (P) => F.has(P.subId)
      ) ?? [], le = x.findIndex((P) => P.id === S);
      if (le >= 0) {
        const P = x[le].subItems ?? [], Ie = new Set(P.map((Fe) => Fe.subId)), Qe = [
          ...P,
          ...ae.filter((Fe) => !Ie.has(Fe.subId))
        ];
        N({
          ...V,
          subItems: Qe
        });
      } else
        N({
          ...V,
          subItems: ae
        });
    }), t.onSelect(x);
  }
  function v(w, k) {
    if (t.singleSelector)
      t.onSelect({ ...w, subItems: [{ ...k }] }), a(!1);
    else {
      const C = t.selectedEntities ?? [], F = new Set(C.map((N) => N.id)), B = new Map(
        C.map((N) => [N.id, N.subItems ?? []])
      );
      F.add(w.id), t.entities.forEach((N) => {
        N.subItems?.some(
          (V) => V.subId === k.subId
        ) && F.add(N.id);
      });
      const x = [];
      t.entities.forEach((N) => {
        if (F.has(N.id)) {
          let V = [...B.get(N.id) ?? []];
          N.subItems?.some(
            (P) => P.subId === k.subId
          ) && (V.some(
            (Ie) => Ie.subId === k.subId
          ) || V.push(k));
          const le = new Set(
            (N.subItems ?? []).map((P) => P.subId)
          );
          V = V.filter(
            (P) => le.has(P.subId)
          ), x.push({
            ...N,
            subItems: V
          });
        }
      }), t.onSelect(x);
    }
  }
  function y(w) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let k = [];
    const C = t.selectedEntities ?? [];
    if (u) {
      const F = l.find(
        (x) => x.id === w.id
      );
      if (!F)
        return;
      const B = new Set(
        (F.subItems ?? []).map((x) => x.subId)
      );
      for (const x of C) {
        const N = (x.subItems ?? []).filter(
          (S) => !B.has(S.subId)
        );
        N.length > 0 && k.push({
          ...x,
          subItems: N
        });
      }
    } else
      k = (C ?? []).filter((F) => F.id !== w.id);
    t.onSelect(k);
  }
  function I(w, k) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const C = t.selectedEntities ?? [], F = k.subId, B = [];
    for (const x of C) {
      const N = x.subItems?.filter((S) => S.subId !== F) ?? [];
      N.length > 0 && B.push({
        ...x,
        subItems: N
      });
    }
    t.onSelect(B);
  }
  function z() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const w = t.selectedEntities ?? [];
    let k = [];
    if (u) {
      const C = new Set(
        l.flatMap(
          (F) => (F.subItems ?? []).map((B) => B.subId)
        )
      );
      for (const F of w) {
        const B = (F.subItems ?? []).filter(
          (x) => !C.has(x.subId)
        );
        B.length > 0 && k.push({
          ...F,
          subItems: B
        });
      }
    } else {
      const C = new Set(
        l.map((F) => F.id)
      );
      k = (w ?? []).filter((F) => !C.has(F.id));
    }
    t.onSelect(k);
  }
  function R() {
    const w = [...t.selectedEntities ?? []];
    l.forEach((k) => {
      const C = w.find((F) => F.id === k.id);
      if (!C)
        w.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const F = Array.from(
          /* @__PURE__ */ new Set([
            ...C.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        C.subItems = F;
      }
    }), t.singleSelector || t.onSelect(w);
  }
  const D = (w) => {
    c(w), f(w);
  }, E = (w, k) => {
    t.onItemExpandedChange(w.id, k), i(
      l.map(
        (C) => C.id === w.id ? { ...C, expanded: !w.expanded } : C
      )
    );
  };
  $(() => {
    if (!d) {
      i(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const k = t.entities.map((C) => {
        const F = ti(C, d), B = C.subItems?.map((x) => ({
          ...x,
          score: je(
            d,
            x.subSearchKeys ?? [x.subName]
          )
        })).filter((x) => x.score < 1 / 0).sort((x, N) => x.score - N.score);
        return {
          ...C,
          score: F,
          expanded: C.expanded ?? (B?.length ?? 0) > 0,
          subItems: B
        };
      }).filter((C) => C.score < 1 / 0).sort((C, F) => C.score - F.score);
      i(k);
    } else {
      const w = t.entities.map((k) => {
        const C = je(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: C };
      }).filter((k) => k.score < 1 / 0).sort((k, C) => k.score - C.score);
      i(w);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    i
  ]);
  const L = G(null), [H, T] = _(0);
  return Fn(() => {
    const w = () => {
      L.current && T(L.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: L,
      className: g(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        Kt,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: b,
          onRemove: y,
          onSubItemRemove: I,
          onSubItemSelect: v,
          onClear: z,
          onSelectAll: R,
          selectedEntities: t.selectedEntities ?? [],
          search: s,
          onSearch: D,
          onToggleExpand: E,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? H - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Qa, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      er,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          ei,
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
      tr,
      {
        container: p,
        className: g(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          Kt,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: b,
            onRemove: y,
            onSubItemRemove: I,
            onSubItemSelect: v,
            onClear: z,
            onSelectAll: R,
            selectedEntities: t.selectedEntities ?? [],
            search: s,
            onSearch: D,
            onToggleExpand: E,
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
function qt(t) {
  return ut(t).split(/\s+/).filter((n) => n.length > 0);
}
function je(t = "", n) {
  const a = qt(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = ut(r), i = qt(r), s = ut(t);
    if (l.includes(s) || a.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function ti(t, n) {
  const a = je(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, i) => {
    const s = je(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(l, s);
  }, 1 / 0)), Math.min(a, r);
}
const ni = ({
  id: t,
  createdAt: n,
  title: a,
  description: r,
  icon: l,
  category: i,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = lt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = hn(n, {
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
        /* @__PURE__ */ e(it, { icon: l ?? gn }),
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
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${i} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: s && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, ai = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(O, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(O, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(O, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(O, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(O, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), kt = K(
  "ActivityItem",
  ee(ni, ai)
), Vn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), ri = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Vn, { title: t, children: n.map((l) => /* @__PURE__ */ e(
  kt,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), li = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Vn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(kt.Skeleton, {}, r)) }), Be = ee(ri, li), ii = 3, si = ["today", "yesterday", "lastWeek", "lastMonth"], oi = (t) => rr(t, ([n]) => {
  const a = si.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), ft = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ci = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const i = ie(), s = nr(t, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = ar((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = oi(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(se.Fragment, { children: [
      /* @__PURE__ */ e(
        Be,
        {
          title: u in i.date.groups ? i.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ e(ft, {})
    ] }, u)),
    n && new Array(ii).fill(null).map((u, m) => /* @__PURE__ */ e(kt.Skeleton, {}, m))
  ] });
}, di = () => {
  const t = ie();
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
}, $o = K(
  "ActivityItemList",
  ee(ci, di)
), ui = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, fi = {
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
function mi({
  firstName: t,
  lastName: n,
  src: a,
  canReact: r,
  lastEmojiReaction: l,
  onReactionSelect: i,
  pickerRef: s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : fi[lr(
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
              ref: s,
              className: g(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                En,
                {
                  lastEmojiReaction: l,
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
function hi(t) {
  const n = G(null), a = G(), r = Q(() => {
    const i = n.current;
    if (!i) return;
    const s = ir.create(i, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    a.current = setInterval(() => {
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
const gi = ({
  link: t,
  firstName: n,
  lastName: a,
  src: r,
  onClick: l,
  canReact: i = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = _(s), p = G(null);
  $(() => {
    h(s);
  }, [s]);
  const b = (D) => {
    h(D), c?.(D);
  }, v = Ue(), { canvasRef: y, handleMouseEnter: I, handleMouseLeave: z } = hi(v), R = pt({
    emoji: ui[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    we,
    {
      href: t,
      onClick: l,
      className: g(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        re()
      ),
      onMouseEnter: v ? void 0 : I,
      onMouseLeave: v ? void 0 : z,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          mi,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: i,
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
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: R })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(st, { date: u }) })
        ] })
      ]
    }
  );
}, pi = () => /* @__PURE__ */ o(
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
), Wo = ee(gi, pi), Mo = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(pn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(M, { label: a, variant: "outline", onClick: r }) })
] });
function bi({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [i, s] = _(a), [c, d] = _(n), f = G(null), { fireEmojiConfetti: u } = sr(), m = (b, v) => {
    b.stopPropagation(), d(c + (i ? -1 : 1)), s(!i), l?.(v), i || u(v, f);
  }, h = r?.map((b) => b.name).join(", ") || "", p = /* @__PURE__ */ e(
    bn,
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
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": or(t),
      prepend: /* @__PURE__ */ e(pt, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        cr,
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
  return h ? /* @__PURE__ */ e(be, { label: h, children: p }) : p;
}
function xi({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      M,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(En, { onSelect: n, locale: a }),
    t.map((l) => /* @__PURE__ */ e(
      bi,
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
const vi = K("Reactions", xi), Gn = j(function({ content: n, collapsed: a, id: r, className: l, tabIndex: i }, s) {
  return /* @__PURE__ */ e(
    dr,
    {
      ref: s,
      id: r,
      content: n,
      tabIndex: i,
      className: g(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        l
      )
    }
  );
});
Gn.displayName = "BasePostDescription";
const wi = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(O, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(O, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Hn = ee(
  Gn,
  wi
), Yt = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: g(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Ee,
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
    color: i,
    isPending: s,
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
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: s ? {
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
                !!n && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  a,
                  !!r && /* @__PURE__ */ e("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(st, { date: f }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      icon: ln,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(st, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(Yt, { tags: c }),
              d && /* @__PURE__ */ e(Yt, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), yi = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Un = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && yi.has(a);
}, Ni = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = ur(r);
  const i = (s) => {
    s.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Un(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
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
        color: fr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Ci = () => /* @__PURE__ */ o(
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
), Kn = ee(Ni, Ci), ki = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const l = ie();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        re()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: l.actions.seeMore
    }
  ) });
}, Si = ({
  id: t,
  author: n,
  group: a,
  createdAt: r,
  title: l,
  description: i,
  onClick: s,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: p,
  dropdownItems: b,
  noReactionsButton: v = !1,
  descriptionExpandable: y = !1
}) => {
  const I = ct(), z = ct(), R = G(null), [D, E] = _(null), [L, H] = _(!1), T = [f.views, f.comments].filter(Boolean).join(" · "), w = y && D?.id === t && D.description === i, k = !w, C = hn(r), F = () => {
    s(t);
  }, B = (S) => {
    S.stopPropagation();
  }, x = n ? `${n.firstName} ${n.lastName}` : void 0, N = (S) => {
    S.preventDefault(), S.stopPropagation(), i && E({ id: t, description: i });
  };
  return $(() => {
    w && R.current?.focus();
  }, [w]), $(() => {
    y || E(null);
  }, [y]), $(() => {
    const S = R.current;
    if (!y || !S || w) {
      H(!1);
      return;
    }
    const V = () => {
      H(
        S.scrollHeight > S.clientHeight
      );
    };
    if (V(), typeof ResizeObserver > "u") return;
    const ae = new ResizeObserver(V);
    return ae.observe(S), () => ae.disconnect();
  }, [y, w, i]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: F,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          Te,
          {
            href: n.url || "#",
            title: x,
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
        ) : /* @__PURE__ */ e(it, { icon: At }) }),
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
                      title: x,
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
                      title: x,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: x
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(it, { icon: At, size: "sm" }) }),
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
                  p?.map((S) => /* @__PURE__ */ e(
                    M,
                    {
                      hideLabel: !S.label,
                      ...S.icon && { icon: S.icon },
                      variant: "outline",
                      size: "md",
                      onClick: S.onClick,
                      label: S.label ?? "",
                      title: S.label ?? ""
                    },
                    S.label
                  )),
                  b?.length && /* @__PURE__ */ e(
                    Ce,
                    {
                      items: b,
                      icon: ot,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ce,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...b ?? []
                    ],
                    icon: ot,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: C }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: I,
                  className: g(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              i && /* @__PURE__ */ o(U, { children: [
                /* @__PURE__ */ e(
                  Hn,
                  {
                    ref: R,
                    id: z,
                    content: i,
                    collapsed: k,
                    tabIndex: w ? -1 : void 0,
                    className: g(w && re())
                  }
                ),
                y && L && !w && /* @__PURE__ */ e(
                  ki,
                  {
                    describedBy: I,
                    controls: z,
                    expanded: w,
                    onClick: N
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Un(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: B,
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
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(Kn, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: T }),
          !v && /* @__PURE__ */ e(
            vi,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: mr
              }
            }
          )
        ] })
      ]
    }
  );
}, Ii = ({
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
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(Hn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(O, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(Kn.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(O, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(O, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), jo = ee(
  Si,
  Ii
), qn = se.forwardRef(({ person: t, onClick: n, ...a }, r) => {
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
                icon: un,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, s) => /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(Ee, { ...i }, i.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(hr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              M,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
              M,
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
}), Fi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(O, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(O, { className: "h-4" }),
    /* @__PURE__ */ e(O, { className: "h-4" })
  ] })
] });
qn.displayName = "OnePersonListItem";
const Vo = ne(
  K(
    "OnePersonListItem",
    ee(qn, Fi)
  )
), Ai = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Li({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(wl, { children: /* @__PURE__ */ e(
    Ei,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function Ei({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const i = r?.enabled ? gr : l?.enabled ? Rl : qr, s = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(i, { ...s, children: /* @__PURE__ */ e(
    Ti,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const Go = K(
  "ApplicationFrame",
  Li
), _i = ({ contentId: t }) => {
  const n = ie();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: re(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Oi(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Di(t, n) {
  const { sidebarState: a, toggleSidebar: r } = Se(), l = G(t);
  $(() => {
    n && Oi(
      t,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, n, a, r]);
}
function Ti({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = Se(), f = Ue(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: p,
    closeCanvas: b,
    chatWidth: v,
    resizable: y
  } = pr(), I = m === "fullscreen", z = m === "canvas", { open: R } = qe(), D = y ? v : br, E = G(I), L = I && !E.current, H = !I && E.current, [
    T,
    w
  ] = _(!1);
  $(() => {
    !I && E.current && w(!0), E.current = I;
  }, [I]);
  const k = I || T || H, C = q(() => L ? { duration: 0.15, ease: "easeOut" } : H ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [L, H]), F = rt(
    `(max-width: ${Re.xl}px)`,
    { initializeWithValue: !0 }
  ), B = rt(`(max-width: ${Re.md}px)`, {
    initializeWithValue: !0
  });
  return $(() => {
    d(u);
  }, [u, d]), $(() => {
    d(R);
  }, [R, d]), Di(u, F), /* @__PURE__ */ e(
    Jr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(xn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(_e, { children: i === "unlocked" && /* @__PURE__ */ e(
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
              onClick: () => s()
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
              ref: (x) => {
                i === "hidden" ? x?.setAttribute("inert", "") : x?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(_i, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            X.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !B ? D : 0
              },
              transition: { paddingRight: Ai },
              children: [
                /* @__PURE__ */ e(
                  X.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: g(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      k ? "overflow-hidden" : "overflow-auto",
                      !u && !R && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ e(
                      X.div,
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
                t?.enabled && z && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: g(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      B ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: B ? void 0 : { right: D },
                    children: /* @__PURE__ */ e(
                      xr,
                      {
                        content: h,
                        onClose: b,
                        entities: p
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  X.div,
                  {
                    className: g(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      B ? "fixed inset-0 z-[30]" : g(
                        "absolute right-0 top-0 bottom-0",
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
                      width: B || I ? "100%" : D
                    },
                    transition: C,
                    onAnimationComplete: () => {
                      T && w(!1);
                    },
                    children: /* @__PURE__ */ e(vr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(Bl, {})
        ] }) })
      ] })
    }
  );
}
const zi = pe({
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
function Yn({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: i, isSmallScreen: s } = Se();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: zi({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || l === "hidden") && /* @__PURE__ */ e(
              M,
              {
                variant: "ghost",
                onClick: () => i(),
                label: "Open main menu",
                icon: sn,
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
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    wr,
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
                      size: s ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e(
                      "p",
                      {
                        className: g(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
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
            /* @__PURE__ */ e(on, {}),
            /* @__PURE__ */ e(Pn, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              s && "-mt-3"
            ),
            children: t
          }
        )
      ]
    }
  );
}
Yn.displayName = "DaytimePage";
const Ho = ne(
  K("DaytimePage", Yn)
);
function Pi(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Bi({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ce, { items: Pi(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: g(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            re()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(W, { icon: vn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Uo = ne(
  K("OmniButton", Bi)
);
function Zn({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !a && "xs:rounded-xl"
      ),
      children: [
        n && /* @__PURE__ */ e("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ e("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: t })
      ]
    }
  );
}
Zn.displayName = "Page";
const Ko = ne(K("Page", Zn));
function Ri({
  companies: t,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: i = []
}) {
  const s = q(
    () => t.find((c) => c.id === n) || t[0],
    [t, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(O, { className: "size-6" }),
    /* @__PURE__ */ e(O, { className: "h-3 w-14" })
  ] }) : t.length + (i?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    Zt,
    {
      company: s,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    $i,
    {
      companies: t,
      selected: s,
      onChange: a,
      additionalOptions: i,
      children: /* @__PURE__ */ e(
        Zt,
        {
          company: s,
          withNotification: l
        }
      )
    }
  ) });
}
const $i = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const i = ie(), [s, c] = _(!1), d = q(
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
      label: i.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: n.id,
      onChange: f,
      placeholder: i.navigation.sidebar.companySelector.placeholder,
      open: s,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: g(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            re()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              X.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(W, { icon: yn, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Zt = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: g(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        yr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: wn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(me, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function qo({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: i,
  hasActivityUpdates: s
}) {
  const c = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ce, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: g(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          re("focus-visible:ring-inset")
        ),
        onClick: i,
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
        M,
        {
          icon: gn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Nr, { type: "highlight", size: "sm", icon: wn }) })
    ] }) })
  ] });
}
function Wi({ isExpanded: t }) {
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
function Mi() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Se(), l = G(null);
  return $(() => {
    t === "hidden" && n === "locked" && l.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    bn,
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
        /* @__PURE__ */ e("div", { className: g("hidden", { flex: !r }), children: /* @__PURE__ */ e(Wi, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: g("hidden", { flex: r }), children: /* @__PURE__ */ e(W, { icon: ke, size: "md" }) })
      ]
    }
  );
}
function Yo({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Ri,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Mi, {})
  ] });
}
function ji() {
  const [t, n] = _(!1);
  return $(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Xn = yt(void 0);
function Vi({ children: t }) {
  const [n, a] = _(!1), [r, l] = _(null);
  return /* @__PURE__ */ e(
    Xn.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function St() {
  const t = Ke(Xn);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const Gi = ({
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
] }), Hi = ({ item: t }) => {
  const { isActive: n } = gt(), { label: a, icon: r, ...l } = t, i = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    we,
    {
      ...l,
      className: g(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        re("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(Gi, { item: t, active: i })
    }
  );
}, Ui = ({
  item: t,
  tooltip: n,
  dragConstraints: a,
  onRemove: r,
  index: l,
  total: i,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = ie(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = St(), { isActive: b } = gt(), v = b(t.href, { exact: t.exactMatch }), y = G(!1), [I, z] = _(!1), R = l === 0, D = l === i - 1, E = i === 1, L = q(() => {
    const F = [];
    return !E && !R && F.push({
      label: f.actions.moveUp,
      onClick: () => s?.(l, l - 1),
      icon: Cr
    }), !E && !D && F.push({
      label: f.actions.moveDown,
      onClick: () => s?.(l, l + 1),
      icon: kr
    }), F.length > 0 && F.push({ type: "separator" }), F.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Sr,
      critical: !0
    }), F;
  }, [E, R, D, f, s, l, r, t]), H = () => {
    m(!0), z(!1), p(t.href || null), y.current = !0;
  }, T = () => {
    m(!1), p(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && h === t.href, k = q(
    () => g(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      I && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [v, I, w, d]
  ), C = q(() => /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(qi, { tooltip: n, children: /* @__PURE__ */ o(
      we,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: g(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          w && "pointer-events-none"
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
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Ir, { size: "xs", avatar: t.avatar }) : null,
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
          I && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ce,
          {
            open: I,
            onOpenChange: z,
            items: L,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(W, { icon: ot, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, v, I, w, L, n]);
  return d ? /* @__PURE__ */ e(
    _n,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: H,
      onDragEnd: T,
      className: k,
      whileDrag: {
        scale: 1.05
      },
      children: C
    }
  ) : /* @__PURE__ */ e("div", { className: k, children: C });
}, Jn = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: i,
  wasDragging: s
}) => {
  const [c, d] = _(n), f = Ue(), u = () => {
    if (i || s?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(Fr, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: g(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          re("focus-visible:ring-inset"),
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
                  icon: yn,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(Ar, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
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
  currentOrder: i
}) => {
  const { isDragging: s, setIsDragging: c } = St(), d = G(!1), f = Qr(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, i && l?.(i);
    }, 0);
  }, h = (b) => {
    !s && !d.current && r?.(t, b);
  }, p = /* @__PURE__ */ e(
    Jn,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: h,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: g(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: t.items.map((b, v) => /* @__PURE__ */ e(Hi, { item: b }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    _n,
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
function Zo({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const i = G(null), s = t.filter(
    (b) => b.isSortable === !1
  ), [c, d] = _(
    t.filter((b) => b.isSortable !== !1)
  ), [f, u] = _(0), m = Q((b) => {
    d(b);
  }, []), h = Q(
    (b) => {
      a?.(b);
    },
    [a]
  ), p = ji();
  return /* @__PURE__ */ e(Vi, { children: /* @__PURE__ */ e(xn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Ki,
    {
      disableDragging: p,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((b) => b + 1)
    },
    f
  ) }) });
}
function Ki({
  nonSortableItems: t,
  sortableItems: n,
  setSortableItems: a,
  containerRef: r,
  onCollapse: l,
  onDragEnd: i,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = ie(), { isDragging: m } = St(), h = t.some((x) => x.isRoot), p = t.filter((x) => !x.isRoot).length > 0, b = n.length > 0, v = G(null), [y, I] = _(s), z = s.length > 0;
  $(() => {
    JSON.stringify(s) !== JSON.stringify(y) && I(s);
  }, [s]);
  const R = (x) => {
    I(x);
  }, D = Q(
    (x) => {
      const N = y.filter((S) => S.href !== x.href);
      I(N), c?.(N);
    },
    [y, c]
  ), E = Q(
    (x, N) => {
      if (N < 0 || N >= y.length) return;
      const S = [...y], [V] = S.splice(x, 1);
      S.splice(N, 0, V), I(S), c?.(S);
    },
    [y, c]
  ), [L, H] = _(!1), T = G(null);
  $(() => {
    n.length > 0 && !L && (a([...n]), H(!0));
  }, [n, a, L]), $(() => {
    const x = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, n, d]);
  const w = "flex flex-col gap-0.5", k = q(
    () => y.reduce(
      (x, N, S) => (N.label in x || (x[N.label] = []), x[N.label].push(S), x),
      {}
    ),
    [y]
  ), C = q(
    () => z && y.map((x, N) => /* @__PURE__ */ e(
      Ui,
      {
        isSortable: !f,
        tooltip: (k[x.label] ?? []).length > 1 ? x.tooltip : void 0,
        item: x,
        dragConstraints: v,
        onRemove: D,
        index: N,
        total: y.length,
        onMove: E,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${x.href}-${x.label}`
    )),
    [
      z,
      y,
      k,
      D,
      E,
      c,
      f
    ]
  ), F = "flex flex-col gap-3", B = q(() => n.map((x) => /* @__PURE__ */ e(
    nt,
    {
      category: x,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: i,
      currentOrder: n
    },
    x.id
  )), [n, f, r, l, i]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => x.isRoot).map((x, N) => /* @__PURE__ */ e(
          nt,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${N}`
        )) }),
        z && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(Jn, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: v, children: f ? /* @__PURE__ */ e("div", { className: w, children: C }) : /* @__PURE__ */ e(
          Dt,
          {
            axis: "y",
            values: y,
            onReorder: R,
            className: w,
            children: C
          }
        ) }) }) }),
        p && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => !x.isRoot).map((x, N) => /* @__PURE__ */ e(
          nt,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${N}`
        )) }),
        b && /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: F, children: B }) : /* @__PURE__ */ e(
              Dt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: F,
                children: B
              }
            )
          }
        )
      ]
    }
  );
}
const qi = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(be, { description: t, children: n }) : n;
function Xo({
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
        re()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(W, { icon: Lr, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Er, { keys: a }) })
      ]
    }
  ) });
}
const Xt = ({ position: t }) => /* @__PURE__ */ e(
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
function Yi({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: i } = Se(), s = Ue(), [c, d] = lt({ threshold: 1 }), [f, u] = lt({ threshold: 1 }), m = ie(), h = {
    x: {
      ease: l !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : l !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, p = () => a ? Yr(a) && r ? An(
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
          i ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: l === "locked" || i ? 0 : "8px",
        borderRadius: l === "locked" || i ? "0" : "12px",
        left: l === "locked" ? "0" : i ? 0 : "8px",
        x: l === "hidden" ? -260 : 0,
        opacity: l === "hidden" ? i ? 0.7 : 0 : 1,
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
          /* @__PURE__ */ o(_e, { children: [
            !d && /* @__PURE__ */ e(Xt, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(Xt, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const Jo = ne(Yi), Zi = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, Jt = {
  approved: {
    icon: dn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: ke,
    type: "critical",
    size: "sm"
  }
}, Xi = {
  icon: vn,
  type: "neutral",
  size: "sm"
}, Ji = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Qi = (t) => t in Jt ? Jt[t] : Xi;
function Qt(t) {
  return Ji[t ?? "neutral"] ?? 0;
}
const es = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = ie(), i = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = l.approvals.statuses[a], c = q(() => r.map((d) => {
    const f = Qi(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => Qt(f.badge?.type) - Qt(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ e($e, { text: s, variant: Zi[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(Nn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, ts = ({ steps: t }) => {
  const a = ie().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, i) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: i + 1 })
          }
        ),
        i !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((l, i) => /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ e(
          es,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        i !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Qo = ne(
  K("OneApprovalHistory", ts)
), It = {
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
}, ns = pe({
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
      ...It
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), as = se.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...i }, s) {
  return /* @__PURE__ */ e("div", { className: g("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ e(
    "div",
    {
      className: g(ns({ gap: a, tileSize: l }), n),
      ref: s,
      ...i,
      children: r
    }
  ) });
}), rs = pe({
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
}), Qn = j(function({
  className: n,
  grow: a,
  basis: r,
  shrink: l,
  paddingX: i,
  paddingY: s,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: p,
  ...b
}, v) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(
        rs({
          paddingX: i,
          basis: r,
          paddingY: s,
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
      ref: v,
      ...b
    }
  );
}), ls = pe({
  base: "flex-row",
  variants: {
    gap: {
      ...It
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), is = se.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, i) {
  return /* @__PURE__ */ e(
    Qn,
    {
      className: g(ls({ gap: a, wrap: r }), n),
      ref: i,
      ...l
    }
  );
}), ss = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...It
    }
  },
  defaultVariants: {}
}), os = j(function({ className: n, gap: a, children: r, ...l }, i) {
  return /* @__PURE__ */ e(
    Qn,
    {
      className: g(ss({ gap: a }), n),
      ref: i,
      ...l,
      children: r
    }
  );
}), ec = ue(
  {
    name: "Stack",
    type: "layout"
  },
  os
), tc = ue(
  {
    name: "Split",
    type: "layout"
  },
  is
), nc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  as
), cs = ({ children: t }) => {
  const { enabled: n } = On();
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
}, ds = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), us = j(function({ header: n, children: a, action: r, summaries: l, alert: i, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = On();
  $(() => {
    if (i && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, s]);
  const m = (p) => !!p && !(se.isValidElement(p) && p.type === se.Fragment && se.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    bt,
    {
      className: g(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ e(xt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(vt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(ds, {}),
                /* @__PURE__ */ e(Cn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(be, { label: n.info, children: /* @__PURE__ */ e(
                W,
                {
                  icon: kn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(He, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ e(Sn, { text: i, level: "critical" }),
              s && /* @__PURE__ */ e($e, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ e(
                _r,
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
            /* @__PURE__ */ e(cs, { children: /* @__PURE__ */ e(Or, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              M,
              {
                icon: f ? Dr : Tr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(wt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((p, b) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, b)) }),
          se.Children.toArray(a).filter(m).map((p, b) => /* @__PURE__ */ o(se.Fragment, { children: [
            b > 0 && /* @__PURE__ */ e(el, { bare: !0 }),
            p
          ] }, b))
        ] }),
        r && /* @__PURE__ */ e(zr, { children: /* @__PURE__ */ e(M, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), fs = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), ms = j(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      bt,
      {
        className: g(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(xt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(vt, { children: n.title }) : /* @__PURE__ */ e(O, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(Cn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            wt,
            {
              "aria-hidden": !0,
              className: g(a !== "full" && fs({ height: a })),
              children: [...Array(4)].map((l, i) => /* @__PURE__ */ e(
                O,
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
), Ne = ne(
  K("Widget", ee(us, ms))
), ce = Object.assign(
  j(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ e(Ne, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), hs = ee(
  j(function({ canBeBlurred: n, ...a }, r) {
    const l = {
      ...a,
      header: {
        ...a.header,
        canBeBlurred: n
      }
    }, i = {
      ...a.chart,
      yAxis: a.chart.yAxis ? { ...a.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      ce,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(tl, { ...i, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), gs = K(
  "AreaChartWidget",
  hs
), ps = j(function(n, a) {
  return /* @__PURE__ */ e(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(nl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), bs = K(
  "BarChartWidget",
  ee(ps, ce.Skeleton)
), xs = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(al, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), vs = K(
  "LineChartWidget",
  xs
), ws = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(rl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), ys = K(
  "PieChartWidget",
  ws
), Ns = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Cs = K(
  "SummariesWidget",
  Ns
), ks = ee(
  j(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(ll, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ss = K(
  "VerticalBarChartWidget",
  ks
), ac = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  gs
), rc = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  bs
), lc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  vs
), ic = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  ys
), sc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Ss
), oc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Cs
), Is = (t, n) => /* @__PURE__ */ o(
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
), Fs = j(Is), As = (t, n) => /* @__PURE__ */ o(
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
), Ls = j(As), Es = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, _s = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Os = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Ds = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Ts = j(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: i, type: s }, c) {
    const d = Es[s], f = _s[s], u = Os[s], m = Ds[s];
    return /* @__PURE__ */ o(
      bt,
      {
        className: g(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(xt, { className: "-mt-0.5", children: /* @__PURE__ */ e(vt, { children: n }) }),
          /* @__PURE__ */ o(wt, { className: g("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: g(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Fs, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ e(Ls, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                M,
                {
                  label: r,
                  icon: l,
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
), cc = ne(
  K("ChartWidgetEmptyState", Ts)
);
function zs(t, n) {
  const a = G(null), r = G(null), [l, i] = _({
    visibleItems: [],
    overflowItems: []
  });
  Pr({
    ref: a,
    onResize: () => {
      f();
    }
  });
  const s = Q(
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
        const v = p + u[b];
        if (v > m + 30) break;
        p = v, p = s(
          p,
          b,
          u.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = Q(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    i(h === 0 ? {
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
  minSize: i,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = zs(n, l);
  return $(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: g("relative flex h-full flex-col", r),
      style: {
        minHeight: `${i}px`
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
const dc = ({
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
) : null, Ps = ({ onClick: t, children: n }) => {
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
function uc({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(Ps, { onClick: l, children: /* @__PURE__ */ o(
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
const Bs = j(
  function({ content: n, label: a, color: r, ...l }, i) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: i, children: [
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
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: g("flex", r), children: /* @__PURE__ */ e(pt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), fc = j(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: i, ...s }) => /* @__PURE__ */ e(
          Bs,
          {
            label: r,
            content: l,
            color: i,
            ...s
          },
          `${r}-${l}`
        ))
      }
    );
  }
), Rs = ({
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
function mc({
  id: t,
  title: n,
  subtitle: a,
  avatars: r,
  remainingCount: l,
  withPointerCursor: i = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    Rs,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: i,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(Br, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(Rr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          Nn,
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
const $s = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function en({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const i = g(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o($s, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: i, children: [
    /* @__PURE__ */ e(pn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const Ws = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function ht({
  id: t,
  title: n,
  alert: a,
  rawTag: r,
  count: l,
  icon: i,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = g(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Ws, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ e(
        W,
        {
          icon: i,
          size: "md",
          className: g("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ e(
        W,
        {
          icon: s,
          size: "md",
          className: g("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(Sn, { ...a }),
      r && /* @__PURE__ */ e(Ee, { ...r }),
      !!l && /* @__PURE__ */ e(He, { value: l })
    ] })
  ] });
}
function hc({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((i) => /* @__PURE__ */ e(en, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ e(en, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function gc({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((i) => /* @__PURE__ */ e(ht, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ e(ht, { ...i, onClick: r }),
      minSize: a
    }
  );
}
const Ms = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), pc = j(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, i) {
    return /* @__PURE__ */ o("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            be,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(W, { icon: kn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      l.map((s) => /* @__PURE__ */ e(Ms, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function bc({
  title: t,
  subtitle: n,
  data: a,
  helpText: r,
  legend: l = !1,
  hideTooltip: i = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      il,
      {
        data: a,
        legend: l,
        hideTooltip: i
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
const ea = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, js = ({
  data: t = [],
  labels: n,
  trackedMinutes: a,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const s = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!l || r === void 0) return;
    const u = ea(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), b = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${b}` : `${n.overtime} ${b}`;
  })(), f = xe[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, at = "--:--", Vs = (t, n) => {
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
}, Gs = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = ea(
    n,
    a
  ), i = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, s = r || (l ?? 0) < 0 ? void 0 : Vs(
    l ?? 0,
    i
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - p) / i;
        return c -= p, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: p / i + v,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: p / i,
            color: xe.overtime
          },
          {
            value: v,
            color: xe[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: xe.empty
  }), f;
}, Hs = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, l = t.at(-1), i = r ? Lt(r) : at, s = n === void 0 || n > 0 ? at : l ? Lt(l.to) : at, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: i,
    secondaryLabel: s,
    time: m
  };
}, xe = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function Us({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = Gs({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: i, time: s } = Hs({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(sl, { width: 156, height: 156, children: /* @__PURE__ */ e(
      ol,
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
          $r,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: s }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: i })
    ] })
  ] });
}
function Ks({
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
        /* @__PURE__ */ e(W, { icon: Wr })
      ]
    }
  );
}
function xc({
  trackedMinutes: t,
  remainingMinutes: n,
  data: a = [],
  labels: r,
  locationId: l,
  locations: i,
  canShowLocation: s = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: p = !0,
  canSeeGraph: b = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: I = !0,
  projectSelectorElement: z,
  breakTypeName: R
}) {
  const { status: D, statusText: E, subtitle: L, statusColor: H } = js({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), T = D === "clocked-out", w = m?.map((P) => ({
    value: P.id,
    label: P.duration ? `${P.name} · ${P.duration}` : P.name,
    description: P.description,
    tag: P.isPaid ? r.paid : r.unpaid
  })) ?? [], [k, C] = _(!1), F = () => {
    if (w.length > 1)
      k || C(!0);
    else {
      const P = w?.[0]?.value;
      u?.(P);
    }
  }, B = (P) => {
    h?.(P), C(!1), u?.(P);
  }, x = T && i.length && !c && s, N = i.find((P) => P.id === l), S = i.map((P) => ({
    value: P.id,
    label: P.name,
    icon: P.icon
  })), V = D === "break", [ae, le] = _(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: E }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                X.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: H
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
                    backgroundColor: H
                  }
                }
              )
            ] })
          ] }),
          L && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            M,
            {
              onClick: d,
              label: r.clockIn,
              icon: Et
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(U, { children: [
            p && /* @__PURE__ */ e(U, { children: w.length > 1 && h ? /* @__PURE__ */ e(
              We,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: B,
                open: k,
                onOpenChange: C,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  M,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: _t,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              M,
              {
                onClick: F,
                label: r.break,
                variant: "neutral",
                icon: _t,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              M,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ot
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(
              M,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Ot,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              M,
              {
                onClick: d,
                label: r.resume,
                icon: Et
              }
            )
          ] })
        ] })
      ] }),
      b && /* @__PURE__ */ e(
        Us,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: x ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        We,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: S,
          onChange: y,
          open: ae,
          onOpenChange: le,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Ks,
            {
              text: N?.name,
              placeholder: r.selectLocation,
              icon: N?.icon
            }
          ) })
        }
      ),
      I && z
    ] }) : /* @__PURE__ */ o(U, { children: [
      s && N && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Ee, { text: N.name, icon: N.icon }) }),
      I && z,
      V && R && /* @__PURE__ */ e(Ee, { text: R })
    ] }) })
  ] }) });
}
const qs = {
  done: Vr,
  "in-progress": jr,
  todo: Mr
}, Ys = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Zs({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(t);
  }, i = q(() => {
    if (!r)
      return qs[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    ht,
    {
      id: t.id,
      title: t.text,
      icon: i,
      iconClassName: Ys[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: Gr
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function vc({
  tasks: t,
  onClickTask: n,
  hideIcons: a = !1,
  maxTasksToShow: r = 5,
  emptyMessage: l = "No tasks assigned"
}) {
  const s = [
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
  ), c = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : s.slice(0, r).map((d) => /* @__PURE__ */ e(
    Zs,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var Xs = Object.defineProperty, Js = Object.defineProperties, Qs = Object.getOwnPropertyDescriptors, Ve = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, tn = (t, n, a) => n in t ? Xs(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, oe = (t, n) => {
  for (var a in n || (n = {})) ta.call(n, a) && tn(t, a, n[a]);
  if (Ve) for (var a of Ve(n)) na.call(n, a) && tn(t, a, n[a]);
  return t;
}, Je = (t, n) => Js(t, Qs(n)), eo = (t, n) => {
  var a = {};
  for (var r in t) ta.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && Ve) for (var r of Ve(t)) n.indexOf(r) < 0 && na.call(t, r) && (a[r] = t[r]);
  return a;
}, to = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, no = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), ao = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = oe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, ro = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = oe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, lo = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + t.width, to(l) || no({ usedSpot: l, spotsList: a }) ? null : l;
}, io = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((l, i, s) => {
  if (l === a) return lo({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = ao({ position: n, spot: l, stone: r });
  return c || ro({ position: n, stone: r, spot: l }) || l;
});
function so(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (t(l)) return l;
  }
  return null;
}
var oo = (t, n) => n.filter(t), co = (t, n) => [...n].sort(t), uo = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, fo = (t) => co(uo, t), mo = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
  let l = { right: a, top: n.top + r.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let i = 0, s = t.length; i < s; i += 1) {
    let c = t[i];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, ho = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, go = ({ availableSpots: t, stone: n }) => so((a) => ho(a, n), t);
function po({ stone: t, availableSpots: n, containerSize: a }) {
  let r = go({ availableSpots: n, stone: t }), l = { left: r.left, top: r.top }, i = mo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), s = [...n, i], c = io({ spots: s, position: l, optimalSpot: r, stone: t });
  return s = [...oo(Boolean, c)], s = fo(s), { position: l, availableSpots: s };
}
var bo = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, l = [], i = [{ top: 0, left: 0, right: n }];
  for (let s of t) {
    let c = po({ availableSpots: i, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), l.push(c.position), i = c.availableSpots;
  }
  return { availableSpots: i, positions: l, containerHeight: r };
}, xo = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), vo = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: i, containerHeight: s, stones: c, availableSpots: d }, f] = _({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return $(() => {
    var u, m;
    let h = xo(t.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let b = bo({ stones: h, containerSize: p });
    f(Je(oe({}, b), { stones: h }));
  }, [a, t, n, r, l]), { positions: i, containerHeight: s, stones: c, availableSpots: d };
}, wo = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), yo = ({ transition: t, transitionDuration: n }) => t ? { transition: wo(n)[t] } : null, No = (t) => t ? Je(oe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Co = ({ style: t, position: n, transition: a, transitionDuration: r }) => oe(oe(Je(oe({}, t), { position: "absolute" }), No(n)), yo({ transition: a, transitionDuration: r }));
function ko(t, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, n);
  };
}
var So = () => {
  let [t, n] = _(), a = G(ko(n, 300));
  return $(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, Io = (t) => {
  let [n, a] = _(null);
  return $(() => {
    let r = new ResizeObserver((l) => {
      for (let i of l) a(i.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, Fo = (t) => {
  var n = t, { children: a, style: r, transition: l = !1, transitionDuration: i = 500, transitionStep: s = 50 } = n, c = eo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = G([]), f = G(null), u = So(), m = Io(f), { positions: h, containerHeight: p } = vo({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), b = oe({ minHeight: p ?? 0, position: "relative" }, r);
  return e("div", Je(oe({ ref: f, style: b }, c), { children: Ln.map(a, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let I = { style: Co({ style: v.props.style, position: h[y], transition: l, transitionDuration: i }), ref: (z) => d.current[y] = z };
    return An(v, oe(oe({}, v.props), I));
  }) }));
};
const Ao = { sm: 340, md: 480, lg: 640 }, nn = j(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Ao[a], [i, s] = _(), c = Ln.toArray(n), d = G(null);
    return $(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: i === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Fo, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), Lo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], wc = ee(nn, () => /* @__PURE__ */ e(In, { children: /* @__PURE__ */ e(nn, { children: Lo.map((t, n) => /* @__PURE__ */ e(Ne.Skeleton, { height: t }, n)) }) })), an = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), yc = ee(
  j(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ge, { ref: a, showBar: !1, children: /* @__PURE__ */ e(an, { children: n }) });
  }),
  () => /* @__PURE__ */ e(In, { orientation: "horizontal", children: /* @__PURE__ */ o(an, { children: [
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {})
  ] }) })
);
function Eo({
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
    cl,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Nc = ne(
  K("WidgetEmptyState", Eo)
), aa = j(
  ({ title: t, children: n }, a) => (Hr(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
aa.displayName = "WidgetSection";
const Cc = ne(
  K("WidgetSection", aa)
), kc = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Ur(), i = window.location.pathname, s = q(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return s ? r : (l && console.error(c), null);
}, Sc = ne(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ge
  )
);
export {
  $o as ActivityItemList,
  di as ActivityItemListSkeleton,
  Bl as AiPromotionChat,
  Rl as AiPromotionChatProvider,
  Go as ApplicationFrame,
  td as AreaChart,
  ac as AreaChartWidget,
  nc as AutoGrid,
  Nr as Badge,
  nd as BarChart,
  rc as BarChartWidget,
  ci as BaseActivityItemList,
  ad as BaseBanner,
  gi as BaseCelebration,
  Si as BaseCommunityPost,
  Ac as BaseTabs,
  Lc as BreadcrumbSelect,
  gl as Breadcrumbs,
  mt as CalendarEvent,
  dc as CalendarEventList,
  rd as CardSelectableContainer,
  Zr as Carousel,
  ld as CategoryBarChart,
  bc as CategoryBarSection,
  Wo as Celebration,
  pi as CelebrationSkeleton,
  cc as ChartWidgetEmptyState,
  Ec as Chip,
  xc as ClockInControls,
  id as ComboChart,
  jo as CommunityPost,
  Ii as CommunityPostSkeleton,
  Ri as CompanySelector,
  He as Counter,
  wc as Dashboard,
  Ho as DaytimePage,
  _c as DetailsItem,
  Oc as DetailsItemsList,
  sd as Dialog,
  Ce as Dropdown,
  Ro as EntitySelect,
  od as F0ActionBar,
  cd as F0AiBanner,
  pn as F0AvatarModule,
  Dc as F0ButtonToggle,
  Po as F0Callout,
  dd as F0NumberInput,
  Tc as F0SearchInput,
  ud as F0SegmentedControl,
  fd as F0TableOfContent,
  md as F0TextAreaInput,
  zc as F0TextInput,
  Bo as F0VersionHistory,
  hd as F1SearchBox,
  gd as FILE_TYPES,
  Pc as FileItem,
  Mo as HighlightBanner,
  fc as IndicatorsList,
  pd as Input,
  bd as Item,
  xd as ItemSectionHeader,
  vd as LineChart,
  lc as LineChartWidget,
  Zo as Menu,
  Bc as MobileDropdown,
  wd as NotesTextEditor,
  yd as NotesTextEditorPatchTargetNotFoundError,
  Nd as NotesTextEditorSkeleton,
  Cd as NotesTextEditorUnsupportedPatchTypeError,
  kd as NumberInput,
  Uo as OmniButton,
  Qo as OneApprovalHistory,
  Rc as OneCalendar,
  $c as OneCalendarInternal,
  Sd as OneDataCollection,
  Id as OneDateNavigator,
  cl as OneEmptyState,
  Fd as OnePagination,
  Vo as OnePersonListItem,
  kc as OneRestrictComponent,
  Ko as Page,
  zo as PageHeader,
  Oa as PageNavigation,
  Ad as PieChart,
  ic as PieChartWidget,
  cs as PrivateBox,
  Ld as ProgressBarChart,
  Ed as RadarChart,
  vi as Reactions,
  _d as ResourceHeader,
  dr as RichTextDisplay,
  Od as RichTextEditor,
  Sc as ScrollArea,
  Xo as SearchBar,
  Dd as SectionHeader,
  We as Select,
  Er as Shortcut,
  Jo as Sidebar,
  qo as SidebarFooter,
  Yo as SidebarHeader,
  cn as Spinner,
  tc as Split,
  ec as Stack,
  oc as SummariesWidget,
  Wc as Switch,
  Mc as Tabs,
  jc as TabsSkeleton,
  vc as TasksList,
  Td as Textarea,
  Vc as ToggleGroup,
  Gc as ToggleGroupItem,
  be as Tooltip,
  pc as TwoColumnsList,
  zd as VerticalBarChart,
  sc as VerticalBarChartWidget,
  dt as VirtualList,
  Hc as WeekStartDay,
  Uc as Weekdays,
  Ne as Widget,
  mc as WidgetAvatarsListItem,
  Nc as WidgetEmptyState,
  uc as WidgetHighlightButton,
  hc as WidgetInboxList,
  en as WidgetInboxListItem,
  Cc as WidgetSection,
  gc as WidgetSimpleList,
  ht as WidgetSimpleListItem,
  yc as WidgetStrip,
  Pd as actionBarStatuses,
  Bd as buttonToggleSizes,
  Rd as buttonToggleVariants,
  Kc as chipVariants,
  $d as downloadAsCSV,
  Wd as generateCSVContent,
  qc as getGranularityDefinition,
  Yc as getGranularityDefinitions,
  Zc as getGranularitySimpleDefinition,
  Xc as granularityDefinitions,
  Jc as modules,
  Md as predefinedPresets,
  Qc as rangeSeparator,
  jd as selectSizes,
  qe as useAiPromotionChat,
  Vd as useDataCollectionData,
  Gd as useDataCollectionSource,
  Hd as useExportAction,
  Ud as useInfiniteScrollPagination,
  Se as useSidebar
};
