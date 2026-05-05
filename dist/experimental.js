import { a9 as ga, aa as pa, ab as ba, ac as xa, ad as Ot, ae as ze, af as va, O as b, W as ee, P as we, u as de, ag as wa, ah as ya, ai as Na, aj as Ca, ak as Ia, a5 as ue, al as ka, am as wt, an as ct, ao as Ue, U as Oe, ap as Sa, aq as Aa, ar as G, as as La, at as Fa, M as Te, au as pn, av as _a, aw as Ea, Q as j, ax as bn, a8 as T, ay as Ce, az as Da, aA as Oa, aB as Ta, aC as Pa, aD as Ra, aE as Le, aF as xn, aG as za, aH as ye, aI as Ge, aJ as Ba, aK as yt, n as vn, aL as Ae, aM as $a, aN as wn, a6 as se, aO as J, R as yn, aP as Nn, aQ as Ma, aR as Cn, aS as pe, a7 as ae, aT as Wa, aU as ja, aV as Va, aW as Ua, X as ve, aX as Ze, aY as Ga, aZ as Ha, a_ as Ka, a$ as qa, b0 as Xe, b1 as In, b2 as Ya, b3 as Za, b4 as Xa, b5 as He, b6 as Ja, b7 as Qa, b8 as er, b9 as tr, ba as nr, bb as ar, bc as rr, bd as lr, be as sr, bf as ir, bg as dt, bh as ut, bi as kn, bj as or, bk as cr, bl as Sn, bm as dr, bn as ur, T as Je, bo as Nt, bp as An, bq as fr, br as Ln, bs as mr, bt as hr, bu as gr, bv as De, bw as pr, bx as Be, by as Tt, bz as ft, bA as br, bB as xr, a as vr, c as wr, bC as yr, bD as Fn, bE as Nr, bF as Cr, F as Ir, bG as _n, _ as kr, bH as En, bI as Sr, bJ as Pt, bK as Ar, bL as Lr, bM as Fr, bN as _r, bO as Dn, bP as Er, bQ as Dr, bR as Or, bS as Tr, bT as Pr, Y as On, bU as Rr, bV as Rt, bW as he, bX as Tn, bY as Ct, bZ as It, b_ as kt, b$ as Pn, c0 as St, c1 as Rn, $ as zn, c2 as zr, c3 as Br, c4 as $r, c5 as Mr, c6 as Wr, c7 as jr, c8 as Vr, c9 as Ur, ca as Gr, cb as Hr, cc as Kr, cd as zt, ce as Bt, cf as $t, cg as qr, ch as Yr, ci as Zr, cj as Xr, ck as Bn, cl as Jr, cm as Qr, cn as el } from "./F0AiChat-h6zMaJ2h.js";
import { cI as qc, cH as Yc, cq as Zc, cU as Xc, cB as Jc, cC as Qc, cp as ed, cE as td, cr as nd, d4 as ad, d2 as rd, cs as ld, cF as sd, cG as id, cD as od, ct as cd, cQ as dd, cR as ud, cV as fd, d0 as md, d1 as hd, cz as gd, d3 as pd, cA as bd, cu as xd, cK as vd, cJ as wd, cv as yd, cw as Nd, cx as Cd, cS as Id, d5 as kd, co as Sd, cT as Ad, cX as Ld, cY as Fd, cP as _d, cM as Ed, cO as Dd, cL as Od, cy as Td, cN as Pd, cZ as Rd, c_ as zd, cW as Bd, c$ as $d } from "./F0AiChat-h6zMaJ2h.js";
import { jsx as t, jsxs as o, Fragment as Q } from "react/jsx-runtime";
import ie, { forwardRef as K, useRef as $, useTransition as tl, useState as E, useLayoutEffect as $n, useId as nl, useContext as Qe, createContext as At, useEffect as W, useCallback as H, useMemo as Z, Fragment as al, isValidElement as rl, cloneElement as Mn, Children as Wn } from "react";
import { C as ll, P as sl, g as jn, c as il, F as mt, f as ol, a as cl, u as dl, A as ul, B as fl, L as ml, b as hl, V as gl, d as pl, e as Mt, h as bl, i as xl } from "./index-CUWuvyKM.js";
import { l as Wd, m as jd, j as Vd, n as Ud, s as Gd, D as Hd, k as Kd, o as qd, w as Yd, x as Zd, N as Xd, y as Jd, p as Qd, r as eu, R as tu, q as nu, _ as au, v as ru, t as lu } from "./index-CUWuvyKM.js";
const vl = ga("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Vn = K(({ className: e, items: n }, a) => /* @__PURE__ */ t(pa, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(ba, {}),
  /* @__PURE__ */ t(xa, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Vn.displayName = "CollapsedBreadcrumbItem";
const Lt = 50, wl = 120, Ke = 8;
function yl(e, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = e - r - Ke, s = 0, i = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < a)
    for (l -= Lt; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function Wt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ke;
    default:
      return e[0] + Lt + e[e.length - 1] + Ke;
  }
}
function Nl(e, n) {
  return wl * e + (n ? Lt : 0) + Ke;
}
function Cl(e, n, a = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Nl(
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
      minWidth: Wt(l)
    };
  const s = yl(e, l);
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
    minWidth: Wt(l)
  };
}
function Il({ breadcrumbs: e, append: n }) {
  const a = $(null), r = $(null), [, l] = tl(), [s, i] = E(null), c = (s?.collapsedItems || []).length > 0;
  return $n(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const p = Cl(
          h,
          e,
          g
        );
        i(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(Ot, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Ot,
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
        s && s.headItem && /* @__PURE__ */ o(va, { children: [
          /* @__PURE__ */ t(
            ze,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(
              Vn,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              ze,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ t(Q, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
            ze,
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
const kl = we({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), jt = [
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
  background: a,
  hover: r = !1,
  ...l
}, s) => {
  const i = nl(), {
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
      className: b(kl({ size: n }), h),
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
          ...(({ style: p, ...x }) => x)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              jt.map((p) => /* @__PURE__ */ t("clipPath", { id: `${i}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: jt.map((p) => /* @__PURE__ */ t(
              ee.foreignObject,
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
}, Un = K(Sl), Gn = At(null), Al = 15, Ll = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [l, s] = E(n), [i, c] = E(!1), [d, f] = E(!0), [u, m] = E(
    Al
  ), h = $(null), g = (x) => {
    h.current = x;
  }, p = () => {
    h.current && h.current();
  };
  return W(() => {
    s(n);
  }, [n]), W(() => {
    if (i && a?.(), !i) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [i, a]), /* @__PURE__ */ t(
    Gn.Provider,
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
        clear: p,
        setClearFunction: g
      },
      children: e
    }
  );
}, ke = () => {
};
function et() {
  const e = Qe(Gn);
  return e === null ? {
    enabled: !1,
    setEnabled: ke,
    open: !1,
    setOpen: ke,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: ke,
    setAutoClearMinutes: ke,
    clear: ke,
    setClearFunction: ke,
    autoClearMinutes: null
  } : e;
}
const Hn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = et(), s = de(), [i, c] = E(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(wa, { children: /* @__PURE__ */ o(ya, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Na, { asChild: !0, children: /* @__PURE__ */ t(
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
          Ca,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: b(
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
              Ia,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Un,
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
    !l && /* @__PURE__ */ t(ka, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Vt = "one_sidebar_locked", Kn = At(void 0);
function Fe() {
  const e = Qe(Kn);
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
function Fl({ children: e }) {
  const { currentPath: n } = wt(), [a, r] = E(!1), [l, s] = E(!1), i = a ? Ue.xl : Ue.md, c = ct(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = E(() => {
    const _ = localStorage.getItem(Vt);
    return _ !== null ? !!_ : !0;
  }), [u, m] = E(!1), [h, g] = E(
    null
  ), p = H(
    ({ isInvokedByUser: _ } = {
      isInvokedByUser: !0
    }) => {
      s(_ ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = H(
    (_) => {
      c || (_.clientX < 32 && m(!0), _.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = Z(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return W(() => {
    m(!1);
  }, [n]), W(() => {
    l && localStorage.setItem(Vt, d ? "1" : "");
  }, [d, l]), W(() => () => {
    g(y);
  }, [y]), /* @__PURE__ */ t(
    Kn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: y,
        toggleSidebar: p,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const Ut = ee.create(G), Gt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, _l = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, l] = E(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(Oe, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ue()
      ),
      onClick: s,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Ut,
        {
          size: "sm",
          icon: Sa,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Gt,
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
        Ut,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Aa,
          className: "outline-none",
          variants: Gt,
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
}, El = ({
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
  const [m, h] = E("idle"), [g, p] = E(null), [x, ...y] = g ?? [], [_, R] = E(!1);
  W(() => {
    p(null), h("idle");
  }, [e]);
  const B = H(async () => {
    try {
      h("fetching");
      const O = await a();
      h("idle"), p(O);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    La,
    {
      open: _,
      onOpenChange: async (O) => {
        R(O), O && g === null && B(), i(O);
      },
      children: [
        /* @__PURE__ */ t(Fa, { asChild: !0, children: /* @__PURE__ */ t(
          Te,
          {
            variant: "outline",
            icon: pn,
            hideLabel: !0,
            label: n,
            pressed: _,
            append: f && /* @__PURE__ */ t(Ft, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(_a, { children: /* @__PURE__ */ o(
          Ea,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Tl, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(zl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Pl, { ...l, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Dl,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((O, L) => /* @__PURE__ */ t(
                    Ol,
                    {
                      ...O,
                      onClick: d
                    },
                    L
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Rl,
                  {
                    ...s,
                    onClick: () => {
                      B();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Bl,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => R(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Dl = ({
  title: e,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ t(
    Da,
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
          className: b(i, "text-f1-foreground no-underline"),
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
              Oa,
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
              r && /* @__PURE__ */ t(Ft, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Ol = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const s = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Ta, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
    Ce,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ t(Ft, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Tl = ({
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
          icon: bn,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), qn = ({
  icon: e,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: b(
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
] }) }), Pl = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  qn,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(G, { icon: pn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Ce, { href: a, children: /* @__PURE__ */ t(j, { label: n }) })
  }
), Rl = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  qn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(G, { icon: Pa, size: "lg" }),
    button: /* @__PURE__ */ t(j, { variant: "outline", label: a, onClick: r })
  }
), zl = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(T, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(T, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(T, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(T, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(T, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), Ft = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Bl = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, s] = E(e);
  W(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ t(Ra, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          j,
          {
            variant: "ghost",
            icon: Le,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        ll,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            sl,
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
function Ht({
  icon: e,
  href: n,
  label: a,
  disabled: r
}) {
  const l = $(null);
  return /* @__PURE__ */ t(
    j,
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
function Qo({
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
  ], g = n && Object.keys(n).length !== 0, p = l && a.length > 0, x = !l && r.length > 0, y = !l && !!i?.isVisible, _ = h[h.length - 1], R = "navigation" in window ? window.navigation : null, B = l && (R ? !!R.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Oe, { children: !l && u !== "locked" && /* @__PURE__ */ t(
            ee.div,
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
                  icon: xn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: b(
                "flex flex-grow items-center gap-2",
                B && "justify-center"
              ),
              children: [
                l && B && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  j,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: za,
                    onClick: () => window.history.back()
                  }
                ) }),
                B || p ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in _ ? /* @__PURE__ */ t(T, { className: "h-4 w-24" }) : _.label }) : /* @__PURE__ */ t(
                  Il,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      _l,
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
          !l && g && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(ye, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            Ge,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(Ge, { text: n.text, variant: n.variant }) }),
          !l && g && (s || x || y) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Ht,
                {
                  icon: Ba,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Ht,
                {
                  icon: yt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && x && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (y || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            y && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              El,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            x && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((O, L) => /* @__PURE__ */ t($l, { action: O }, L)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              vn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Hn, {})
          ] })
        ] })
      ]
    }
  );
}
function $l({ action: e }) {
  const n = $(null), [a, r] = E(!1);
  return "actions" in e ? /* @__PURE__ */ t(Ae, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
    Te,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    j,
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
        j,
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
const Ml = () => {
  const e = de();
  return /* @__PURE__ */ o(
    ee.div,
    {
      className: b(
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
            className: b(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          Te,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: $a,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Wl = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = $(null);
  W(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, jl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = et();
  return Wl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(Oe, { children: n && /* @__PURE__ */ t(
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
}, Vl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(wn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        Te,
        {
          label: e.label || "",
          onClick: a,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Ul = ({
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
  Ll,
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
), Gl = () => {
  const {
    enabled: e,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = et(), d = () => {
    i(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(jl, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      Te,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Le,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Un, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(yn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        Vl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Ml, {}) })
  ] }) : null;
}, Hl = se(
  J("AiPromotionChat", Gl)
), Kl = se(
  J("AiPromotionChatProvider", Ul)
), Yn = we({
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
}), Kt = {
  positive: Cn,
  warning: Ma,
  info: Nn
}, qt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, ql = K(
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
        className: Yn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  qt[s]
                ),
                children: [
                  Kt[s] && /* @__PURE__ */ t(G, { icon: Kt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    pe,
                    {
                      className: qt[s] || "font-medium",
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
                icon: Le,
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
                className: b(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
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
), Yl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Yn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(T, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(T, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(T, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(T, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(T, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(T, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Zn = K(
  (e, n) => /* @__PURE__ */ t(ql, { ref: n, ...e })
), Zl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Yl, { compact: e, variant: n });
Zn.displayName = "F0Callout";
const ec = ae(
  se(Zn),
  Zl
);
function Xl({
  title: e,
  isActive: n = !1,
  onClick: a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
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
        /* @__PURE__ */ t(G, { icon: Wa, size: "md", color: "selected" }),
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
function Jl({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = ja(), s = Va(l), i = Ua(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
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
            ve,
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
function Ql({
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
        /* @__PURE__ */ t(Ze, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            Xl,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            Jl,
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
const tc = se(
  J("F0VersionHistory", Ql)
), Xn = K(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: l }, s) => {
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
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        className: b("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? l(d) : /* @__PURE__ */ t(Q, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Xn.displayName = "VirtualList";
const ht = J("VirtualList", Xn), Jn = ({
  text: e,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: e });
  const l = new RegExp(`(${n})`, "gi"), s = e.split(l);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
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
function tt(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(e);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function nt(e, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(e);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const es = ({
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
  const m = e.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), p = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? r(e) : a(e));
  }, x = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && r(e) : a(e);
    } else y.key === "ArrowDown" ? tt(y.currentTarget, i) : y.key === "ArrowUp" && nt(y.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: b(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          ve,
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
            className: b(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              Jn,
              {
                text: e.name,
                search: s,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          In,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: p,
            onKeyDown: x,
            className: b(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          G,
          {
            className: "text-f1-icon-selected",
            icon: Cn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, je = ({
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
  singleSelector: p = !1,
  disabled: x = !1,
  hiddenAvatar: y = !1
}) => {
  const [_, R] = E(!1);
  if (!e)
    return /* @__PURE__ */ t(
      es,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: i,
        onRemove: c,
        singleSelector: p,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: y
      }
    );
  const B = (C) => {
    if (C.key === " ")
      C.preventDefault(), d(!n);
    else if (C.key === "Enter" && p)
      d(!n);
    else if (C.key === "Enter") {
      if (x) return;
      !l || s ? i(r) : l && c(r);
    } else C.key === "ArrowDown" ? tt(C.currentTarget, f) : C.key === "ArrowUp" && nt(C.currentTarget, u);
  }, O = () => {
    if (_)
      d(!n), R(!1);
    else {
      if (x || p) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const L = l || s;
  return /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        j,
        {
          hideLabel: !0,
          icon: n ? Ha : Ka,
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
            R(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ t(
              G,
              {
                icon: qa,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Jn,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ t(Xe, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              In,
              {
                checked: L,
                disabled: x,
                onClick: O,
                onKeyDown: B,
                indeterminate: s,
                onPointerDown: (C) => {
                  C.stopPropagation(), R(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", p ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
je.displayName = "EntitySelectListItem";
const Yt = ({
  label: e,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? tt(s.currentTarget, a) : s.key === "ArrowUp" && nt(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": e,
    className: b(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
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
          icon: Ya,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: b("line-clamp-1"), children: e }) }) })
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
  })) || [], l = (i) => {
    const c = a.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = a.every((i) => i.disabled);
  return /* @__PURE__ */ t(
    Za,
    {
      items: r,
      value: e.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, ts = ({
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
  let g, p, x = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, y = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return x || (x = y, y = void 0), m && u ? (g = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: x,
      secondaryActions: y ? [y] : []
    }
  ), p = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ t(Ee, { primaryAction: x, secondaryActions: [] }), y && (p = /* @__PURE__ */ t(Ee, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    p
  ] }) });
}, ns = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: vl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), tt(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), nt(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    G,
    {
      icon: Xa,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), lt = 384, st = 36, as = 37, Zt = 1, Xt = 200, Jt = '[data-avatarname-navigator-element="true"]', rs = ({
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
  onToggleExpand: p,
  searchPlaceholder: x,
  selectAllLabel: y,
  clearLabel: _,
  notFoundTitle: R,
  notFoundSubtitle: B,
  className: O,
  actions: L,
  onCreate: C,
  onCreateLabel: q,
  singleSelector: w = !1,
  loading: N = !1,
  disabled: I = !1,
  hiddenAvatar: k = !1
}) => {
  const F = ie.useRef(null), V = Z(
    () => e ? n.reduce(
      (A, M) => A + (M.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), v = H(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: 0 });
    }, Zt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Jt)
      )[0]?.focus();
    }, Xt);
  }, []), S = H(() => {
    setTimeout(() => {
      F.current?.scrollTo({ top: F.current?.scrollHeight });
    }, Zt), setTimeout(() => {
      const A = Array.from(
        document.querySelectorAll(Jt)
      );
      A[A.length - 1]?.focus();
    }, Xt);
  }, []), z = Z(
    () => new Map(h.map((A) => [A.id, A])),
    [h]
  ), Y = H(
    (A) => {
      const M = z.get(A.id);
      if (!e)
        return {
          selected: !!M,
          partialSelected: !!M
        };
      const X = (A.subItems ?? []).filter(
        (re) => M?.subItems?.some(
          (ge) => ge.subId === re.subId
        )
      ), U = (A.subItems?.length ?? 0) === X.length, fe = !U && X.length > 0;
      return { selected: U, partialSelected: fe };
    },
    [e, z]
  ), D = H(
    (A) => {
      if (A.index === 0 && C)
        return /* @__PURE__ */ t(
          Yt,
          {
            label: q ?? "",
            onCreate: () => C?.(l),
            goToFirst: v,
            goToLast: S
          }
        );
      const M = C ? A.index - 1 : A.index, X = n[M], { selected: U, partialSelected: fe } = Y(X);
      return /* @__PURE__ */ t(
        je,
        {
          expanded: X.expanded ?? !1,
          onExpand: () => p(X, !0),
          search: l,
          groupView: e,
          entity: X,
          onSelect: s,
          onRemove: i,
          selected: U,
          partialSelected: fe,
          showGroupIcon: ls(a, r),
          singleSelector: w,
          goToFirst: v,
          goToLast: S,
          disabled: I,
          hiddenAvatar: k
        },
        X.id
      );
    },
    [
      C,
      q,
      I,
      n,
      Y,
      v,
      S,
      e,
      a,
      k,
      i,
      s,
      p,
      l,
      r,
      w
    ]
  ), ne = Z(() => e ? n.flatMap((A) => {
    const M = $e(
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
          expanded: A.expanded ?? M?.expanded ?? !1,
          subItems: A.subItems,
          subSearchKeys: A.searchKeys
        }
      },
      ...(A.subItems ?? []).map((X) => ({
        parent: {
          ...A,
          expanded: A.expanded ?? M?.expanded ?? !1
        },
        subItem: X
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
  })), [e, n, h]), P = H(
    (A) => {
      if (A.index === 0 && C)
        return /* @__PURE__ */ t(
          Yt,
          {
            label: q ?? "",
            onCreate: () => C?.(l),
            goToFirst: v,
            goToLast: S
          }
        );
      const M = C ? A.index - 1 : A.index, X = ne[M].parent, U = ne[M].subItem;
      if (!X) {
        const re = {
          id: U.subId,
          name: U.subName,
          avatar: U.subAvatar,
          subItems: U.subItems,
          expanded: U.expanded,
          searchKeys: U.subSearchKeys
        }, ge = $e(
          h,
          re.id
        ), xe = (re?.subItems ?? []).filter(
          (_e) => ge?.subItems?.some(
            (ha) => ha.subId === _e.subId
          )
        ), Re = (re.subItems?.length ?? 0) === xe.length, ma = !Re && xe.length > 0;
        return /* @__PURE__ */ t(
          je,
          {
            groupView: !0,
            expanded: re.expanded ?? !1,
            onExpand: (_e) => p(re, _e),
            search: l,
            entity: re,
            onSelect: s,
            onRemove: i,
            selected: Re,
            partialSelected: ma,
            showGroupIcon: a.find((_e) => _e.value === r)?.groupType === "team",
            singleSelector: w,
            goToFirst: v,
            goToLast: S,
            hideLine: M === ne.length - 1,
            disabled: I,
            hiddenAvatar: k
          }
        );
      }
      let fe = !!$e(h, U.subId);
      if (!fe) {
        const re = $e(
          h,
          X.id
        );
        fe = !!(X?.subItems ?? []).filter(
          (xe) => re?.subItems?.some(
            (Re) => Re.subId === xe.subId
          )
        ).find((xe) => xe.subId === U.subId);
      }
      return /* @__PURE__ */ t(
        je,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: U.subId,
            name: U.subName,
            avatar: U.subAvatar,
            searchKeys: U.subSearchKeys
          },
          onSelect: () => {
            d(X, U);
          },
          onRemove: () => c(X, U),
          selected: !!fe,
          partialSelected: !1,
          singleSelector: w,
          goToFirst: v,
          goToLast: S,
          isChild: !0,
          hiddenAvatar: k
        }
      );
    },
    [
      ne,
      h,
      l,
      w,
      v,
      S,
      s,
      i,
      a,
      I,
      p,
      r,
      d,
      c,
      k,
      C,
      q
    ]
  ), [me, Ie] = Z(() => {
    if (!n.length)
      return [!1, !1];
    let A = 0, M = 0;
    if (!e)
      A = n.length, M = n.reduce(
        (fe, { id: re }) => fe + (z.has(re) ? 1 : 0),
        0
      );
    else {
      const fe = new Set(
        [...z.values()].flatMap(
          (re) => re.subItems?.map((ge) => ge.subId) ?? []
        )
      );
      n.forEach((re) => {
        const ge = re.subItems ?? [];
        A += ge.length, M += ge.filter(
          (xe) => fe.has(xe.subId)
        ).length;
      });
    }
    const X = A > 0 && M === A, U = M > 0;
    return [X, U];
  }, [n, z, e]), be = ne.length, Pe = !w && (y || _), le = L && L.length > 0, te = !N && (!w && Pe || le);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        w || N ? "rounded-r-xl" : "",
        O
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              w || N ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                ns,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: S
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                He,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: N,
                  onChange: g,
                  options: a,
                  value: r,
                  className: b(
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
            className: b(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              te ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              N && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(wn, {}) }),
              !N && !V && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: lt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: R }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: B })
                  ]
                }
              ),
              !N && (!!V || C) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                ht,
                {
                  height: lt,
                  itemCount: be + (C ? 1 : 0),
                  itemSize: (A) => {
                    if (A === 0 && C) return st;
                    const M = C ? A - 1 : A;
                    return ne[M]?.parent === null ? as : st;
                  },
                  renderer: P,
                  ref: F
                }
              ) : /* @__PURE__ */ t(
                ht,
                {
                  height: lt,
                  itemCount: n.length + (C ? 1 : 0),
                  itemSize: st,
                  renderer: D,
                  ref: F
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          ts,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: w,
            totalFilteredEntities: V,
            allVisibleSelected: me,
            anyVisibleSelected: Ie,
            selectAllLabel: y,
            clearLabel: _,
            disabled: I,
            actions: L
          }
        )
      ]
    }
  );
}, $e = (e, n) => e.find((a) => a.id === n), ls = (e, n) => e.find((a) => a.value === n)?.groupType === "team", ss = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Ja,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      Qa,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: er, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      G,
      {
        icon: Le,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), is = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
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
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      ht,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            ss,
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
          ) : /* @__PURE__ */ t(Q, {});
        }
      }
    ) })
  ] });
}, os = 500, Qt = 520, en = 210, tn = ({
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
  const g = (s ?? Qt) < os, p = !c && !i && !g, x = s ?? Qt, y = p ? x - en : x;
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
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ t(
              rs,
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
        p && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: en + "px"
            },
            children: /* @__PURE__ */ t(
              is,
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
}, cs = ({
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
  loading: p = !1,
  required: x = !1,
  readonly: y = !1,
  append: _,
  size: R = "sm",
  open: B
}) => {
  const O = Z(
    () => a.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [a]
  ), L = Z(() => O ? a.flatMap(
    (w) => (w.subItems ?? []).map((N) => ({
      parent: w,
      subItem: N
    }))
  ) : a.map((w) => ({
    parent: null,
    subItem: {
      subId: w.id,
      subName: w.name,
      subAvatar: w.avatar,
      subDeactivated: w.deactivated
    }
  })), [O, a]), C = L.length === 0 ? void 0 : L.length === 1 ? L[0].subItem.subName : L.length + " " + n, q = L.length === 1 ? L[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    tr,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !C ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: g,
      clearable: !1,
      value: C,
      disabled: r,
      loading: p,
      required: x,
      readonly: y,
      size: R,
      avatar: l || !q ? void 0 : {
        type: "person",
        firstName: q,
        lastName: "",
        src: L[0].subItem.subAvatar,
        deactivated: L[0].subItem.subDeactivated
      },
      append: _ ?? /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(nr, { open: B, disabled: r, size: R }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            C && "text-f1-foreground",
            L.length === 1 && !l || c && !C ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            pe,
            {
              tag: "span",
              className: L.length === 1 && L[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: L.length === 0 ? e ?? "" : L.length === 1 ? L[0].subItem.subName : `${L.length} ${n}`
            }
          )
        }
      )
    }
  );
}, nc = (e) => {
  const [n, a] = E(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (N) => {
    a(N), e.onOpenChange?.(N);
  };
  W(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = E(e.entities), [i, c] = E(""), [d, f] = ar("", 300), u = Z(
    () => e.entities.some(
      (N) => N.subItems && N.subItems.length > 0
    ),
    [e.entities]
  ), m = Qe(rr), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function p(N) {
    if (e.singleSelector) {
      e.onSelect(N), a(!1);
      return;
    }
    const I = e.selectedEntities ?? [], k = l.find((z) => z.id === N.id);
    if (!k)
      return;
    const F = new Set(
      (k.subItems ?? []).map((z) => z.subId)
    ), V = /* @__PURE__ */ new Set([k.id]);
    l.forEach((z) => {
      z.id !== k.id && (z.subItems ?? []).some(
        (D) => F.has(D.subId)
      ) && V.add(z.id);
    });
    const v = [...I];
    function S(z) {
      const Y = v.findIndex((D) => D.id === z.id);
      Y >= 0 ? v[Y] = z : v.push(z);
    }
    V.forEach((z) => {
      const Y = l.find((P) => P.id === z);
      if (!Y) return;
      const D = Y.subItems?.filter(
        (P) => F.has(P.subId)
      ) ?? [], ne = v.findIndex((P) => P.id === z);
      if (ne >= 0) {
        const P = v[ne].subItems ?? [], me = new Set(P.map((be) => be.subId)), Ie = [
          ...P,
          ...D.filter((be) => !me.has(be.subId))
        ];
        S({
          ...Y,
          subItems: Ie
        });
      } else
        S({
          ...Y,
          subItems: D
        });
    }), e.onSelect(v);
  }
  function x(N, I) {
    if (e.singleSelector)
      e.onSelect({ ...N, subItems: [{ ...I }] }), a(!1);
    else {
      const k = e.selectedEntities ?? [], F = new Set(k.map((S) => S.id)), V = new Map(
        k.map((S) => [S.id, S.subItems ?? []])
      );
      F.add(N.id), e.entities.forEach((S) => {
        S.subItems?.some(
          (Y) => Y.subId === I.subId
        ) && F.add(S.id);
      });
      const v = [];
      e.entities.forEach((S) => {
        if (F.has(S.id)) {
          let Y = [...V.get(S.id) ?? []];
          S.subItems?.some(
            (P) => P.subId === I.subId
          ) && (Y.some(
            (me) => me.subId === I.subId
          ) || Y.push(I));
          const ne = new Set(
            (S.subItems ?? []).map((P) => P.subId)
          );
          Y = Y.filter(
            (P) => ne.has(P.subId)
          ), v.push({
            ...S,
            subItems: Y
          });
        }
      }), e.onSelect(v);
    }
  }
  function y(N) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let I = [];
    const k = e.selectedEntities ?? [];
    if (u) {
      const F = l.find(
        (v) => v.id === N.id
      );
      if (!F)
        return;
      const V = new Set(
        (F.subItems ?? []).map((v) => v.subId)
      );
      for (const v of k) {
        const S = (v.subItems ?? []).filter(
          (z) => !V.has(z.subId)
        );
        S.length > 0 && I.push({
          ...v,
          subItems: S
        });
      }
    } else
      I = (k ?? []).filter((F) => F.id !== N.id);
    e.onSelect(I);
  }
  function _(N, I) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const k = e.selectedEntities ?? [], F = I.subId, V = [];
    for (const v of k) {
      const S = v.subItems?.filter((z) => z.subId !== F) ?? [];
      S.length > 0 && V.push({
        ...v,
        subItems: S
      });
    }
    e.onSelect(V);
  }
  function R() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const N = e.selectedEntities ?? [];
    let I = [];
    if (u) {
      const k = new Set(
        l.flatMap(
          (F) => (F.subItems ?? []).map((V) => V.subId)
        )
      );
      for (const F of N) {
        const V = (F.subItems ?? []).filter(
          (v) => !k.has(v.subId)
        );
        V.length > 0 && I.push({
          ...F,
          subItems: V
        });
      }
    } else {
      const k = new Set(
        l.map((F) => F.id)
      );
      I = (N ?? []).filter((F) => !k.has(F.id));
    }
    e.onSelect(I);
  }
  function B() {
    const N = [...e.selectedEntities ?? []];
    l.forEach((I) => {
      const k = N.find((F) => F.id === I.id);
      if (!k)
        N.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const F = Array.from(
          /* @__PURE__ */ new Set([
            ...k.subItems ?? [],
            ...I.subItems ?? []
          ])
        );
        k.subItems = F;
      }
    }), e.singleSelector || e.onSelect(N);
  }
  const O = (N) => {
    c(N), f(N);
  }, L = (N, I) => {
    e.onItemExpandedChange(N.id, I), s(
      l.map(
        (k) => k.id === N.id ? { ...k, expanded: !N.expanded } : k
      )
    );
  };
  W(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const I = e.entities.map((k) => {
        const F = ds(k, d), V = k.subItems?.map((v) => ({
          ...v,
          score: qe(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, S) => v.score - S.score);
        return {
          ...k,
          score: F,
          expanded: k.expanded ?? (V?.length ?? 0) > 0,
          subItems: V
        };
      }).filter((k) => k.score < 1 / 0).sort((k, F) => k.score - F.score);
      s(I);
    } else {
      const N = e.entities.map((I) => {
        const k = qe(
          d,
          I.searchKeys ?? [I.name]
        );
        return { ...I, score: k };
      }).filter((I) => I.score < 1 / 0).sort((I, k) => I.score - k.score);
      s(N);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const C = $(null), [q, w] = E(0);
  return $n(() => {
    const N = () => {
      C.current && w(C.current.offsetWidth);
    };
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: C,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        tn,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: p,
          onRemove: y,
          onSubItemRemove: _,
          onSubItemSelect: x,
          onClear: R,
          onSelectAll: B,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: O,
          onToggleExpand: L,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? q - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(lr, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      sr,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          cs,
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
      ir,
      {
        container: g,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          tn,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: p,
            onRemove: y,
            onSubItemRemove: _,
            onSubItemSelect: x,
            onClear: R,
            onSelectAll: B,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: O,
            onToggleExpand: L,
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
function nn(e) {
  return gt(e).split(/\s+/).filter((n) => n.length > 0);
}
function qe(e = "", n) {
  const a = nn(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = gt(r), s = nn(r), i = gt(e);
    if (l.includes(i) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function ds(e, n) {
  const a = qe(n, e.searchKeys ?? [e.name]);
  let r = 1 / 0;
  return e.subItems?.length && (r = e.subItems.reduce((l, s) => {
    const i = qe(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(a, r);
}
const us = ({
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
  const { ref: f } = dt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = jn(n, {
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
        /* @__PURE__ */ t(ut, { icon: l ?? kn }),
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
}, fs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(T, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(T, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(T, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(T, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(T, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), _t = J(
  "ActivityItem",
  ae(us, fs)
), Qn = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), ms = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(Qn, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  _t,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), hs = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Qn, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(_t.Skeleton, {}, r)) }), Ve = ae(ms, hs), gs = 3, ps = ["today", "yesterday", "lastWeek", "lastMonth"], bs = (e) => cr(e, ([n]) => {
  const a = ps.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), pt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), xs = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = de(), i = il(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = or((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = bs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ t(
        Ve,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: a,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(pt, {})
    ] }, u)),
    n && new Array(gs).fill(null).map((u, m) => /* @__PURE__ */ t(_t.Skeleton, {}, m))
  ] });
}, vs = () => {
  const e = de();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Ve.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(pt, {}),
    /* @__PURE__ */ t(
      Ve.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(pt, {}),
    /* @__PURE__ */ t(
      Ve.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, ac = J(
  "ActivityItemList",
  ae(xs, vs)
), ws = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, ys = {
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
function Ns({
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
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : ys[dr(
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
                ve,
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
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Sn,
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
function Cs(e) {
  const n = $(null), a = $(), r = H(() => {
    const s = n.current;
    if (!s) return;
    const i = ur.create(s, {
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
const Is = ({
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
  const [m, h] = E(i), g = $(null);
  W(() => {
    h(i);
  }, [i]);
  const p = (O) => {
    h(O), c?.(O);
  }, x = Je(), { canvasRef: y, handleMouseEnter: _, handleMouseLeave: R } = Cs(x), B = Nt({
    emoji: ws[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ce,
    {
      href: e,
      onClick: l,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ue()
      ),
      onMouseEnter: x ? void 0 : _,
      onMouseLeave: x ? void 0 : R,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Ns,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: p,
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
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(mt, { date: u }) })
        ] })
      ]
    }
  );
}, ks = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(T, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(T, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(T, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), rc = ae(Is, ks), lc = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(An, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(j, { label: a, variant: "outline", onClick: r }) })
] });
function Ss({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = E(a), [c, d] = E(n), f = $(null), { fireEmojiConfetti: u } = fr(), m = (p, x) => {
    p.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(x), s || u(x, f);
  }, h = r?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ t(
    Ln,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (p) => {
        m(p, e);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": mr(e),
      prepend: /* @__PURE__ */ t(Nt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        hr,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: b(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(ye, { label: h, children: g }) : g;
}
function As({ items: e, onInteraction: n, locale: a, action: r }) {
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
    /* @__PURE__ */ t(Sn, { onSelect: n, locale: a }),
    e.map((l) => /* @__PURE__ */ t(
      Ss,
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
const Ls = J("Reactions", As), Fs = ({
  content: e,
  collapsed: n
}) => /* @__PURE__ */ t(
  gr,
  {
    content: e,
    className: b(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), _s = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(T, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(T, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), ea = ae(
  Fs,
  _s
), an = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        De,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ t(
        ye,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), bt = K(
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
          !m && /* @__PURE__ */ o(Q, { children: [
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
                f && /* @__PURE__ */ o(Q, { children: [
                  /* @__PURE__ */ t(mt, { date: f }),
                  /* @__PURE__ */ t(
                    G,
                    {
                      icon: bn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(mt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(an, { tags: c }),
              d && /* @__PURE__ */ t(an, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Es = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), ta = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Es.has(a);
}, Ds = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = ol(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: ta(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(Q, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(T, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      bt,
      {
        title: e,
        description: l,
        color: pr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Os = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(T, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(T, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(T, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(T, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), na = ae(Ds, Os), Ts = ({
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
  dropdownItems: p,
  noReactionsButton: x = !1
}) => {
  const y = [f.views, f.comments].filter(Boolean).join(" · "), _ = !0, R = jn(r), B = () => {
    i(e);
  }, O = (C) => {
    C.stopPropagation();
  }, L = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: B,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Be,
          {
            href: n.url || "#",
            title: L,
            stopPropagation: !0,
            children: /* @__PURE__ */ t(
              ve,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ t(ut, { icon: Tt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Q, { children: [
                  /* @__PURE__ */ t(
                    Be,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: L,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ t("span", { className: "flex items-center", children: /* @__PURE__ */ t(
                        ve,
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
                    Be,
                    {
                      href: n.url,
                      title: L,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: L
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ut, { icon: Tt, size: "sm" }) }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: b(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ t(
                  Be,
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
                  g?.map((C) => /* @__PURE__ */ t(
                    j,
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
                  p?.length && /* @__PURE__ */ t(
                    Ae,
                    {
                      items: p,
                      icon: ft,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Ae,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...p ?? []
                    ],
                    icon: ft,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: R }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ t(ea, { content: s, collapsed: _ })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: ta(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: O,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(T, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(na, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: y }),
          !x && /* @__PURE__ */ t(
            Ls,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: br
              }
            }
          )
        ] })
      ]
    }
  );
}, Ps = ({
  withEvent: e,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(T, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(T, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(T, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(T, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(T, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(ea.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(T, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(na.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(T, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(T, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), sc = ae(
  Ts,
  Ps
), aa = ie.forwardRef(({ person: e, onClick: n, ...a }, r) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: b(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        a.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ t(
          ve,
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
            a.info && /* @__PURE__ */ t(ye, { label: a.info, children: /* @__PURE__ */ t(
              G,
              {
                icon: Nn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, i) => /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(De, { ...s }, s.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(xr, { ...a.rightTag }),
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
}), Rs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(T, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(T, { className: "h-4" }),
    /* @__PURE__ */ t(T, { className: "h-4" })
  ] })
] });
aa.displayName = "OnePersonListItem";
const ic = se(
  J(
    "OnePersonListItem",
    ae(aa, Rs)
  )
), zs = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Bs({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(Fl, { children: /* @__PURE__ */ t(
    $s,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
function $s({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? vr : l?.enabled ? Kl : al, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Vs,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const oc = J(
  "ApplicationFrame",
  Bs
), Ms = ({ contentId: e }) => {
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
function Ws(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function js(e, n) {
  const { sidebarState: a, toggleSidebar: r } = Fe(), l = $(e);
  W(() => {
    n && Ws(
      e,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, a, r]);
}
function Vs({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Fe(), f = Je(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: g,
    resizable: p
  } = wr(), x = m === "fullscreen", y = m === "canvas", { open: _ } = et(), R = p ? g : Nr, B = $(x), O = x && !B.current, L = !x && B.current, [
    C,
    q
  ] = E(!1);
  W(() => {
    !x && B.current && q(!0), B.current = x;
  }, [x]);
  const w = x || C || L, N = Z(() => O ? { duration: 0.15, ease: "easeOut" } : L ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [O, L]), I = ct(
    `(max-width: ${Ue.xl}px)`,
    { initializeWithValue: !0 }
  ), k = ct(`(max-width: ${Ue.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(_);
  }, [_, d]), js(u, I), /* @__PURE__ */ t(
    yr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(Fn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Oe, { children: s === "unlocked" && /* @__PURE__ */ t(
            ee.nav,
            {
              className: b(
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
              className: b(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (F) => {
                s === "hidden" ? F?.setAttribute("inert", "") : F?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Ms, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            ee.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !k ? R : 0
              },
              transition: { paddingRight: zs },
              children: [
                /* @__PURE__ */ t(
                  ee.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      w ? "overflow-hidden" : "overflow-auto",
                      !u && !_ && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      ee.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          w ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                e?.enabled && y && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      k ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: k ? void 0 : { right: R },
                    children: /* @__PURE__ */ t(Cr, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  ee.div,
                  {
                    className: b(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      k ? "fixed inset-0 z-[30]" : b(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        w || y ? "z-20" : "z-0",
                        s === "hidden" && w ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: k || x ? "100%" : R
                    },
                    transition: N,
                    onAnimationComplete: () => {
                      C && q(!1);
                    },
                    children: /* @__PURE__ */ t(Ir, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Hl, {})
        ] }) })
      ] })
    }
  );
}
const Us = we({
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
function ra({
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
        /* @__PURE__ */ t("div", { className: Us({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: xn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center",
                  i ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    cl,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    ve,
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
                        className: b(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
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
            /* @__PURE__ */ t(vn, {}),
            /* @__PURE__ */ t(Hn, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
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
ra.displayName = "DaytimePage";
const cc = se(
  J("DaytimePage", ra)
);
function Gs(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Hs({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Ae, { items: Gs(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ue()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(G, { icon: _n, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const dc = se(
  J("OmniButton", Hs)
);
function la({ children: e, header: n, embedded: a = !1 }) {
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
la.displayName = "Page";
const uc = se(J("Page", la));
function Ks({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = Z(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(T, { className: "size-6" }),
    /* @__PURE__ */ t(T, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    rn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    qs,
    {
      companies: e,
      selected: i,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        rn,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const qs = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const s = de(), [i, c] = E(!1), d = Z(
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
    He,
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
          className: b(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ue()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              ee.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(G, { icon: yt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, rn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: b(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        kr,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: En, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(pe, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function fc({
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
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ae, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ue("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ t(
            ve,
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
    a && /* @__PURE__ */ t(ye, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        j,
        {
          icon: kn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Sr, { type: "highlight", size: "sm", icon: En }) })
    ] }) })
  ] });
}
function Ys({ isExpanded: e }) {
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
            className: b(
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
            className: b(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Zs() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Fe(), l = $(null);
  return W(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Ln,
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ t(Ys, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ t(G, { icon: Le, size: "md" }) })
      ]
    }
  );
}
function mc({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Ks,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(Zs, {})
  ] });
}
function Xs() {
  const [e, n] = E(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const sa = At(void 0);
function Js({ children: e }) {
  const [n, a] = E(!1), [r, l] = E(null);
  return /* @__PURE__ */ t(
    sa.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: e
    }
  );
}
function Et() {
  const e = Qe(sa);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const Qs = ({
  item: e,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      G,
      {
        icon: e.icon,
        size: "md",
        className: b(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ t(Xe, { value: e.badge, size: "sm", type: "bold" })
] }), ei = ({ item: e }) => {
  const { isActive: n } = wt(), { label: a, icon: r, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    Ce,
    {
      ...l,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ue("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(Qs, { item: e, active: s })
    }
  );
}, ti = ({
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
  const f = de(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Et(), { isActive: p } = wt(), x = p(e.href, { exact: e.exactMatch }), y = $(!1), [_, R] = E(!1), B = l === 0, O = l === s - 1, L = s === 1, C = Z(() => {
    const F = [];
    return !L && !B && F.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Ar
    }), !L && !O && F.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Lr
    }), F.length > 0 && F.push({ type: "separator" }), F.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: Fr,
      critical: !0
    }), F;
  }, [L, B, O, f, i, l, r, e]), q = () => {
    m(!0), R(!1), g(e.href || null), y.current = !0;
  }, w = () => {
    m(!1), g(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, N = u && h === e.href, I = Z(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      _ && "bg-f1-background-secondary",
      N && "bg-f1-background-secondary"
    ),
    [x, _, N, d]
  ), k = Z(() => /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(ai, { tooltip: n, children: /* @__PURE__ */ o(
      Ce,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          N && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            G,
            {
              icon: e.icon,
              size: "md",
              className: b(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(_r, { size: "xs", avatar: e.avatar }) : null,
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          _ && "bg-f1-background-secondary opacity-100",
          N && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Ae,
          {
            open: _,
            onOpenChange: R,
            items: C,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: ft, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, _, N, C, n]);
  return d ? /* @__PURE__ */ t(
    Dn,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: q,
      onDragEnd: w,
      className: I,
      whileDrag: {
        scale: 1.05
      },
      children: k
    }
  ) : /* @__PURE__ */ t("div", { className: I, children: k });
}, ia = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = E(n), f = Je(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Dr, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
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
            ee.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                G,
                {
                  icon: yt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(Or, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      ee.div,
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
}, it = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Et(), d = $(!1), f = Er(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (p) => {
    !i && !d.current && r?.(e, p);
  }, g = /* @__PURE__ */ t(
    ia,
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
          className: b(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: e.items.map((p, x) => /* @__PURE__ */ t(ei, { item: p }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Dn,
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
function hc({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = $(null), i = e.filter(
    (p) => p.isSortable === !1
  ), [c, d] = E(
    e.filter((p) => p.isSortable !== !1)
  ), [f, u] = E(0), m = H((p) => {
    d(p);
  }, []), h = H(
    (p) => {
      a?.(p);
    },
    [a]
  ), g = Xs();
  return /* @__PURE__ */ t(Js, { children: /* @__PURE__ */ t(Fn, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    ni,
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
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function ni({
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
  const u = de(), { isDragging: m } = Et(), h = e.some((v) => v.isRoot), g = e.filter((v) => !v.isRoot).length > 0, p = n.length > 0, x = $(null), [y, _] = E(i), R = i.length > 0;
  W(() => {
    JSON.stringify(i) !== JSON.stringify(y) && _(i);
  }, [i]);
  const B = (v) => {
    _(v);
  }, O = H(
    (v) => {
      const S = y.filter((z) => z.href !== v.href);
      _(S), c?.(S);
    },
    [y, c]
  ), L = H(
    (v, S) => {
      if (S < 0 || S >= y.length) return;
      const z = [...y], [Y] = z.splice(v, 1);
      z.splice(S, 0, Y), _(z), c?.(z);
    },
    [y, c]
  ), [C, q] = E(!1), w = $(null);
  W(() => {
    n.length > 0 && !C && (a([...n]), q(!0));
  }, [n, a, C]), W(() => {
    const v = () => {
      w.current !== null && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), w.current !== null && window.clearTimeout(w.current);
    };
  }, [r, n, d]);
  const N = "flex flex-col gap-0.5", I = Z(
    () => y.reduce(
      (v, S, z) => (S.label in v || (v[S.label] = []), v[S.label].push(z), v),
      {}
    ),
    [y]
  ), k = Z(
    () => R && y.map((v, S) => /* @__PURE__ */ t(
      ti,
      {
        isSortable: !f,
        tooltip: (I[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: O,
        index: S,
        total: y.length,
        onMove: L,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      R,
      y,
      I,
      O,
      L,
      c,
      f
    ]
  ), F = "flex flex-col gap-3", V = Z(() => n.map((v) => /* @__PURE__ */ t(
    it,
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
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => v.isRoot).map((v, S) => /* @__PURE__ */ t(
          it,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${S}`
        )) }),
        R && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(ia, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: N, children: k }) : /* @__PURE__ */ t(
          Pt,
          {
            axis: "y",
            values: y,
            onReorder: B,
            className: N,
            children: k
          }
        ) }) }) }),
        g && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((v) => !v.isRoot).map((v, S) => /* @__PURE__ */ t(
          it,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${S}`
        )) }),
        p && /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: F, children: V }) : /* @__PURE__ */ t(
              Pt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: F,
                children: V
              }
            )
          }
        )
      ]
    }
  );
}
const ai = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(ye, { description: e, children: n }) : n;
function gc({
  onClick: e,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ue()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: Tr, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Pr, { keys: a }) })
      ]
    }
  ) });
}
const ln = ({ position: e }) => /* @__PURE__ */ t(
  ee.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: b(
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
function ri({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Fe(), i = Je(), [c, d] = dt({ threshold: 1 }), [f, u] = dt({ threshold: 1 }), m = de(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, g = () => a ? rl(a) && r ? Mn(
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
      className: b(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : b(
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
          /* @__PURE__ */ o(Ze, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Oe, { children: [
            !d && /* @__PURE__ */ t(ln, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(ln, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const pc = se(ri), li = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, sn = {
  approved: {
    icon: yn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Le,
    type: "critical",
    size: "sm"
  }
}, si = {
  icon: _n,
  type: "neutral",
  size: "sm"
}, ii = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, oi = (e) => e in sn ? sn[e] : si;
function on(e) {
  return ii[e ?? "neutral"] ?? 0;
}
const ci = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = de(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[a], c = Z(() => r.map((d) => {
    const f = oi(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => on(f.badge?.type) - on(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(Ge, { text: i, variant: li[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(On, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, di = ({ steps: e }) => {
  const a = de().approvals.history, r = e.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: e.map((l, s) => /* @__PURE__ */ o(Q, { children: [
        /* @__PURE__ */ t(
          ci,
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
}, bc = se(
  J("OneApprovalHistory", di)
), ui = {
  records: [],
  type: "flat",
  groups: []
}, cn = () => {
}, xt = (e, n) => "id" in e ? `${e.id}` : n ?? JSON.stringify(e), fi = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Rt]: n[Rt]
  })),
  groups: e.groups
}), dn = (e, n, a) => e.source.idProvider?.(n, a) ?? xt(n, a), mi = (e, n) => {
  const a = e.data.records.every(
    (l, s) => dn(e, l, s) === dn(n, l, s)
  ), r = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return a && r;
}, hi = (e, n) => e !== null && e.data === n.data && mi(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore, gi = (e, n, a) => e.records.length === n.records.length && e.records.every(
  (r, l) => a(r, l) === a(n.records[l], l)
), pi = (e, n, a) => {
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
}, un = (e, n) => {
  const a = e.paginationInfo, r = n.paginationInfo;
  return a?.type === "pages" || r?.type === "pages" ? a?.type !== "pages" || r?.type !== "pages" || a.currentPage !== r.currentPage : !1;
}, Me = (e) => ({
  data: fi(e.data),
  paginationInfo: e.paginationInfo
});
function xc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: a,
  idProvider: r,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = E(0), [u, m] = E(0), h = c === "manual" ? i : c === "session" ? d : null, [g, p] = E({
    state: null,
    version: 0
  }), [x, y] = E(null), [_, R] = E(0), B = $(h), O = $(u), L = $(null), C = $(
    null
  ), q = $(
    null
  ), w = g.state, N = g.version, I = H(() => {
    q.current !== null && (clearTimeout(q.current), q.current = null);
  }, []), k = H(
    (le) => {
      I(), q.current = setTimeout(() => {
        q.current = null;
        const te = L.current;
        !te || te.key !== le || (te.canUseCurrentData = !0, R((A) => A + 1));
      }, 0);
    },
    [I]
  ), F = H(
    (le) => {
      p((te) => le === null ? te.state === null ? te : { state: null, version: te.version + 1 } : hi(te.state, le) ? te : { state: le, version: te.version + 1 });
    },
    []
  ), V = w?.data ?? ui, v = H(() => {
    C.current = null, m((le) => le + 1);
  }, []), S = !!(C.current && x && w && !w.isLoading && !w.isLoadingMore && (un(x, w) || w.data.records.length > x.data.records.length));
  W(() => I, [I]), W(() => {
    if (!w || h == null) {
      L.current = null, C.current = null, I(), y(null), B.current = h, O.current = u;
      return;
    }
    if (O.current !== u) {
      if (w.isLoading || w.isLoadingMore) return;
      O.current = u, L.current = null, C.current = null, I(), y(Me(w));
      return;
    }
    const le = B.current !== h;
    if (B.current = h, le) {
      L.current = {
        key: h,
        requestedAtVersion: N,
        canUseCurrentData: !1
      }, k(h);
      return;
    }
    const te = C.current;
    if (te) {
      if (w.isLoading || w.isLoadingMore) {
        te.sawLoading = !0;
        return;
      }
      if (x && (un(x, w) || w.data.records.length > x.data.records.length)) {
        C.current = null, y(Me(w));
        return;
      }
      (te.sawLoading || N > te.requestedAtVersion) && (C.current = null);
    }
    if (w.isLoading || w.isLoadingMore)
      return;
    const A = L.current?.key === h ? L.current : null;
    if (A) {
      const M = r ?? w.source.idProvider ?? xt, X = N > A.requestedAtVersion, U = x ? !gi(
        w.data,
        x.data,
        M
      ) : !0;
      if (!A.canUseCurrentData && !X && !U || !A.canUseCurrentData && X && !U)
        return;
      L.current = null, I(), y(Me(w));
      return;
    }
    y((M) => {
      if (!M)
        return w.data.records.length === 0 ? M : Me(w);
      const X = r ?? w.source.idProvider ?? xt, U = pi(
        M.data,
        w.data,
        X
      );
      return w.data.records.length <= M.data.records.length ? U === M.data ? M : {
        ...M,
        data: U
      } : U === M.data ? M : {
        ...M,
        data: U
      };
    });
  }, [
    I,
    w,
    N,
    h,
    r,
    u,
    k,
    x,
    _
  ]);
  const z = S ? w?.data ?? V : x?.data ?? V, Y = S ? w?.paginationInfo ?? null : x?.paginationInfo ?? w?.paginationInfo ?? null, D = dl({
    dataSource: w?.source ?? {},
    data: z,
    paginationInfo: Y,
    setPage: w?.setPage ?? cn,
    loadMore: w?.loadMore ?? cn,
    isLoading: !!(w?.isLoading || w?.isLoadingMore),
    idProvider: r,
    itemUrl: l ?? w?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: a
  }), ne = H(() => {
    h == null || x == null || (C.current = {
      requestedAtVersion: N,
      sawLoading: !1
    });
  }, [N, h, x]), P = H(() => {
    D.hasNext && D.nextItem === null && !D.isNavigating && ne(), D.goToNext();
  }, [D, ne]), me = H(() => {
    D.hasPrevious && D.previousItem === null && !D.isNavigating && ne(), D.goToPrevious();
  }, [D, ne]), Ie = H(
    (le) => {
      C.current = null, c === "session" && f((te) => te + 1), D.setActiveItemId(le);
    },
    [c, D]
  ), be = H(() => {
    L.current = null, C.current = null, I(), y(null), c === "session" && f((le) => le + 1), D.setActiveItemId(null);
  }, [I, c, D]), Pe = Z(() => !D.activeItem || D.activeIndex < 0 ? null : {
    activeItemId: D.activeItemId,
    activeItem: D.activeItem,
    activeItemUrl: D.activeItemUrl,
    currentIndex: D.absoluteIndex ?? D.activeIndex,
    totalCount: D.totalItems ?? D.loadedItemsCount,
    previousItem: D.previousItem,
    nextItem: D.nextItem,
    canGoPrevious: D.hasPrevious && !D.isNavigating,
    canGoNext: D.hasNext && !D.isNavigating,
    goToPrevious: me,
    goToNext: P,
    isNavigating: D.isNavigating,
    previousItemUrl: D.previousItemUrl,
    nextItemUrl: D.nextItemUrl
  }, [P, me, D]);
  return Z(
    () => ({
      ...D,
      goToNext: P,
      goToPrevious: me,
      isReady: w !== null,
      controls: Pe,
      openItem: Ie,
      closeItem: be,
      resetSnapshot: v,
      [Rr]: F
    }),
    [
      D,
      w,
      Pe,
      P,
      me,
      Ie,
      be,
      v,
      F
    ]
  );
}
const bi = (e) => e, xi = (e) => String(e), We = (e, n) => e === n, vi = ({
  itemNavigation: e,
  routeId: n,
  formatItemId: a
}) => n ?? (e?.activeItemId == null ? null : a(e.activeItemId)), vc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: a = bi,
  formatItemId: r = xi,
  onRouteIdChange: l
}) => {
  const [s, i] = E(
    () => vi({ itemNavigation: e, routeId: n, formatItemId: r })
  ), c = $(null), d = $(void 0), f = $(null), u = $(
    e?.activeItemId ?? null
  ), m = $(null);
  return W(() => {
    const h = d.current !== (n ?? null);
    if (d.current = n ?? null, n == null) {
      h && (c.current = null, f.current = null, m.current = null, i(null));
      return;
    }
    h && i(n);
    const g = a(n);
    if (e) {
      if (m.current === n && We(e.activeItemId ?? null, g)) {
        m.current = null, c.current = n, f.current = null;
        return;
      }
      c.current !== n && (c.current = n, f.current = We(
        e.activeItemId ?? null,
        g
      ) ? null : g, e.openItem(g));
    }
  }, [e, a, n]), W(() => {
    const h = e?.activeItemId ?? null;
    if (We(h, u.current)) return;
    if (u.current = h, h == null) {
      f.current = null;
      return;
    }
    const g = f.current;
    if (g != null) {
      We(h, g) && (f.current = null);
      return;
    }
    const p = r(h);
    p !== s && (m.current = p, i(p), l?.(p, h));
  }, [
    s,
    r,
    e?.activeItemId,
    l
  ]), {
    activeRouteId: s,
    activeItemId: e?.activeItemId ?? null,
    controls: e?.controls ?? null
  };
}, Dt = {
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
}, wi = we({
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
      ...Dt
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), yi = ie.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(wi({ gap: a, tileSize: l }), n),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), Ni = we({
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
}), oa = K(function({
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
  ...p
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        Ni({
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
      ...p
    }
  );
}), Ci = we({
  base: "flex-row",
  variants: {
    gap: {
      ...Dt
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Ii = ie.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, s) {
  return /* @__PURE__ */ t(
    oa,
    {
      className: b(Ci({ gap: a, wrap: r }), n),
      ref: s,
      ...l
    }
  );
}), ki = we({
  base: "flex-col",
  variants: {
    gap: {
      ...Dt
    }
  },
  defaultVariants: {}
}), Si = K(function({ className: n, gap: a, children: r, ...l }, s) {
  return /* @__PURE__ */ t(
    oa,
    {
      className: b(ki({ gap: a }), n),
      ref: s,
      ...l,
      children: r
    }
  );
}), wc = he(
  {
    name: "Stack",
    type: "layout"
  },
  Si
), yc = he(
  {
    name: "Split",
    type: "layout"
  },
  Ii
), Nc = he(
  {
    name: "AutoGrid",
    type: "layout"
  },
  yi
), Ai = ({ children: e }) => {
  const { enabled: n } = Tn();
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
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
}, Li = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Fi = K(function({ header: n, children: a, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Tn();
  W(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (g) => !!g && !(ie.isValidElement(g) && g.type === ie.Fragment && ie.Children.count(g.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    Ct,
    {
      className: b(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(It, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(kt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Li, {}),
                /* @__PURE__ */ t(Pn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(ye, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: Rn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Xe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(zn, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(Ge, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
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
            /* @__PURE__ */ t(Ai, { children: /* @__PURE__ */ t(Br, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              j,
              {
                icon: f ? $r : Mr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(St, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((g, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          ie.Children.toArray(a).filter(m).map((g, p) => /* @__PURE__ */ o(ie.Fragment, { children: [
            p > 0 && /* @__PURE__ */ t(Wr, { bare: !0 }),
            g
          ] }, p))
        ] }),
        r && /* @__PURE__ */ t(jr, { children: /* @__PURE__ */ t(j, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), _i = we({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Ei = K(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      Ct,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(It, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(kt, { children: n.title }) : /* @__PURE__ */ t(T, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Pn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            St,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && _i({ height: a })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ t(
                T,
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
), Se = se(
  J("Widget", ae(Fi, Ei))
), ce = Object.assign(
  K(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ t(Se, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Se.Skeleton
  }
), Di = ae(
  K(function({ canBeBlurred: n, ...a }, r) {
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
        chart: /* @__PURE__ */ t(ul, { ...s, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), Oi = J(
  "AreaChartWidget",
  Di
), Ti = K(function(n, a) {
  return /* @__PURE__ */ t(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(fl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Pi = J(
  "BarChartWidget",
  ae(Ti, ce.Skeleton)
), Ri = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(ml, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), zi = J(
  "LineChartWidget",
  Ri
), Bi = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(hl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), $i = J(
  "PieChartWidget",
  Bi
), Mi = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Wi = J(
  "SummariesWidget",
  Mi
), ji = ae(
  K(
    function(n, a) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(gl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Vi = J(
  "VerticalBarChartWidget",
  ji
), Cc = he(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Oi
), Ic = he(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Pi
), kc = he(
  {
    name: "LineChartWidget",
    type: "info"
  },
  zi
), Sc = he(
  {
    name: "PieChartWidget",
    type: "info"
  },
  $i
), Ac = he(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Vi
), Lc = he(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Wi
), Ui = (e, n) => /* @__PURE__ */ o(
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
), Gi = K(Ui), Hi = (e, n) => /* @__PURE__ */ o(
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
), Ki = K(Hi), qi = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Yi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Zi = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Xi = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Ji = K(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = qi[i], f = Yi[i], u = Zi[i], m = Xi[i];
    return /* @__PURE__ */ o(
      Ct,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(It, { className: "-mt-0.5", children: /* @__PURE__ */ t(kt, { children: n }) }),
          /* @__PURE__ */ o(St, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Gi, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Ki, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                j,
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
), Fc = se(
  J("ChartWidgetEmptyState", Ji)
);
function Qi(e, n) {
  const a = $(null), r = $(null), [l, s] = E({
    visibleItems: [],
    overflowItems: []
  });
  Vr({
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
      for (let p = 0; p < u.length; p++) {
        const x = g + u[p];
        if (x > m + 30) break;
        g = x, g = i(
          g,
          p,
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
  return W(() => {
    f();
  }, [f]), {
    containerRef: a,
    measurementContainerRef: r,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const at = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Qi(n, l);
  return W(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", r),
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
at.displayName = "VerticalOverflowList";
const _c = ({
  events: e,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((l) => /* @__PURE__ */ t(bt, { ...l }, l.title)) }) : /* @__PURE__ */ t(
  at,
  {
    items: e,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ t(bt, { ...l }, l.title)
  }
) : null, eo = ({ onClick: e, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: b(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: a, tabIndex: 1, children: n });
};
function Ec({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ t(eo, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(G, { icon: a, size: "md", className: r })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const to = K(
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
        "icon" in l && l.icon && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(G, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ t("span", { className: b("flex", r), children: /* @__PURE__ */ t(Nt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Dc = K(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          to,
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
), no = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: l, onClick: e, children: r }) : /* @__PURE__ */ t("div", { className: l, children: r });
};
function Oc({
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
    no,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Ur, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Gr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          On,
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
const ao = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function fn({
  id: e,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const s = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(ao, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(An, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const ro = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function vt({
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
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(ro, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        G,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ t(
        G,
        {
          icon: i,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ t(zn, { ...a }),
      r && /* @__PURE__ */ t(De, { ...r }),
      !!l && /* @__PURE__ */ t(Xe, { value: l })
    ] })
  ] });
}
function Tc({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(fn, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    at,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(fn, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Pc({
  items: e,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: e.map((s) => /* @__PURE__ */ t(vt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    at,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(vt, { ...s, onClick: r }),
      minSize: a
    }
  );
}
const lo = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Rc = K(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          r && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            ye,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ t(G, { icon: Rn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      l.map((i) => /* @__PURE__ */ t(lo, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function zc({
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
      pl,
      {
        data: a,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ t("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: b(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const ca = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, so = ({
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
    const u = ca(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = Ne[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ot = "--:--", io = (e, n) => {
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
}, oo = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = ca(
    n,
    a
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : io(
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
}, co = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = r ? Mt(r) : ot, i = n === void 0 || n > 0 ? ot : l ? Mt(l.to) : ot, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function uo({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = oo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: s, time: i } = co({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(bl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      xl,
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
          Hr,
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
function fo({
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
        a && /* @__PURE__ */ t(G, { icon: a, className: "text-f1-icon" }),
        /* @__PURE__ */ t(
          "span",
          {
            className: b(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(G, { icon: Kr })
      ]
    }
  );
}
function Bc({
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
  canSeeGraph: p = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: _ = !0,
  projectSelectorElement: R,
  breakTypeName: B
}) {
  const { status: O, statusText: L, subtitle: C, statusColor: q } = so({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), w = O === "clocked-out", N = m?.map((P) => ({
    value: P.id,
    label: P.duration ? `${P.name} · ${P.duration}` : P.name,
    description: P.description,
    tag: P.isPaid ? r.paid : r.unpaid
  })) ?? [], [I, k] = E(!1), F = () => {
    if (N.length > 1)
      I || k(!0);
    else {
      const P = N?.[0]?.value;
      u?.(P);
    }
  }, V = (P) => {
    h?.(P), k(!1), u?.(P);
  }, v = w && s.length && !c && i, S = s.find((P) => P.id === l), z = s.map((P) => ({
    value: P.id,
    label: P.name,
    icon: P.icon
  })), Y = O === "break", [D, ne] = E(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: L }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                ee.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: q
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
                    backgroundColor: q
                  }
                }
              )
            ] })
          ] }),
          C && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: C })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          O === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            j,
            {
              onClick: d,
              label: r.clockIn,
              icon: zt
            }
          ) }),
          O === "clocked-in" && /* @__PURE__ */ o(Q, { children: [
            g && /* @__PURE__ */ t(Q, { children: N.length > 1 && h ? /* @__PURE__ */ t(
              He,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: N,
                onChange: V,
                open: I,
                onOpenChange: k,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  j,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Bt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              j,
              {
                onClick: F,
                label: r.break,
                variant: "neutral",
                icon: Bt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: $t
              }
            )
          ] }),
          O === "break" && /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: $t,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              j,
              {
                onClick: d,
                label: r.resume,
                icon: zt
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ t(
        uo,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(Q, { children: [
      /* @__PURE__ */ t(
        He,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: z,
          onChange: y,
          open: D,
          onOpenChange: ne,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            fo,
            {
              text: S?.name,
              placeholder: r.selectLocation,
              icon: S?.icon
            }
          ) })
        }
      ),
      _ && R
    ] }) : /* @__PURE__ */ o(Q, { children: [
      i && S && /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(De, { text: S.name, icon: S.icon }) }),
      _ && R,
      Y && B && /* @__PURE__ */ t(De, { text: B })
    ] }) })
  ] }) });
}
const mo = {
  done: Zr,
  "in-progress": Yr,
  todo: qr
}, ho = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function go({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(e);
  }, s = Z(() => {
    if (!r)
      return mo[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    vt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: ho[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Xr
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function $c({
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
    go,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var po = Object.defineProperty, bo = Object.defineProperties, xo = Object.getOwnPropertyDescriptors, Ye = Object.getOwnPropertySymbols, da = Object.prototype.hasOwnProperty, ua = Object.prototype.propertyIsEnumerable, mn = (e, n, a) => n in e ? po(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, oe = (e, n) => {
  for (var a in n || (n = {})) da.call(n, a) && mn(e, a, n[a]);
  if (Ye) for (var a of Ye(n)) ua.call(n, a) && mn(e, a, n[a]);
  return e;
}, rt = (e, n) => bo(e, xo(n)), vo = (e, n) => {
  var a = {};
  for (var r in e) da.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && Ye) for (var r of Ye(e)) n.indexOf(r) < 0 && ua.call(e, r) && (a[r] = e[r]);
  return a;
}, wo = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, yo = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), No = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = oe({}, n);
    return r.right = e.left, r;
  }
  return null;
}, Co = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = oe({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, Io = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + e.width, wo(l) || yo({ usedSpot: l, spotsList: a }) ? null : l;
}, ko = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((l, s, i) => {
  if (l === a) return Io({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = No({ position: n, spot: l, stone: r });
  return c || Co({ position: n, stone: r, spot: l }) || l;
});
function So(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (e(l)) return l;
  }
  return null;
}
var Ao = (e, n) => n.filter(e), Lo = (e, n) => [...n].sort(e), Fo = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, _o = (e) => Lo(Fo, e), Eo = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, Do = (e, n) => {
  let a = e.right - e.left >= n.width;
  if (!e.bottom) return a;
  let r = e.bottom - e.top >= n.height;
  return a && r;
}, Oo = ({ availableSpots: e, stone: n }) => So((a) => Do(a, n), e);
function To({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Oo({ availableSpots: n, stone: e }), l = { left: r.left, top: r.top }, s = Eo({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), i = [...n, s], c = ko({ spots: i, position: l, optimalSpot: r, stone: e });
  return i = [...Ao(Boolean, c)], i = _o(i), { position: l, availableSpots: i };
}
var Po = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = To({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, Ro = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), zo = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = E({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let h = Ro(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Po({ stones: h, containerSize: g });
    f(rt(oe({}, p), { stones: h }));
  }, [a, e, n, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, Bo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), $o = ({ transition: e, transitionDuration: n }) => e ? { transition: Bo(n)[e] } : null, Mo = (e) => e ? rt(oe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Wo = ({ style: e, position: n, transition: a, transitionDuration: r }) => oe(oe(rt(oe({}, e), { position: "absolute" }), Mo(n)), $o({ transition: a, transitionDuration: r }));
function jo(e, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, l);
    }, n);
  };
}
var Vo = () => {
  let [e, n] = E(), a = $(jo(n, 300));
  return W(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, Uo = (e) => {
  let [n, a] = E(null);
  return W(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) a(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, Go = (e) => {
  var n = e, { children: a, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = vo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = $([]), f = $(null), u = Vo(), m = Uo(f), { positions: h, containerHeight: g } = zo({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), p = oe({ minHeight: g ?? 0, position: "relative" }, r);
  return t("div", rt(oe({ ref: f, style: p }, c), { children: Wn.map(a, (x, y) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let _ = { style: Wo({ style: x.props.style, position: h[y], transition: l, transitionDuration: s }), ref: (R) => d.current[y] = R };
    return Mn(x, oe(oe({}, x.props), _));
  }) }));
};
const Ho = { sm: 340, md: 480, lg: 640 }, hn = K(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Ho[a], [s, i] = E(), c = Wn.toArray(n), d = $(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Go, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Ko = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Mc = ae(hn, () => /* @__PURE__ */ t(Bn, { children: /* @__PURE__ */ t(hn, { children: Ko.map((e, n) => /* @__PURE__ */ t(Se.Skeleton, { height: e }, n)) }) })), gn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Wc = ae(
  K(function({ children: n }, a) {
    return /* @__PURE__ */ t(Ze, { ref: a, showBar: !1, children: /* @__PURE__ */ t(gn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(Bn, { orientation: "horizontal", children: /* @__PURE__ */ o(gn, { children: [
    /* @__PURE__ */ t(Se.Skeleton, {}),
    /* @__PURE__ */ t(Se.Skeleton, {}),
    /* @__PURE__ */ t(Se.Skeleton, {})
  ] }) })
);
function qo({
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
    Jr,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const jc = se(
  J("WidgetEmptyState", qo)
), fa = K(
  ({ title: e, children: n }, a) => (Qr(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
fa.displayName = "WidgetSection";
const Vc = se(
  J("WidgetSection", fa)
), Uc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = el(), s = window.location.pathname, i = Z(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = Z(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return i ? r : (l && console.error(c), null);
}, Gc = se(
  he(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ze
  )
);
export {
  ac as ActivityItemList,
  vs as ActivityItemListSkeleton,
  Hl as AiPromotionChat,
  Kl as AiPromotionChatProvider,
  oc as ApplicationFrame,
  Wd as AreaChart,
  Cc as AreaChartWidget,
  Nc as AutoGrid,
  Sr as Badge,
  jd as BarChart,
  Ic as BarChartWidget,
  xs as BaseActivityItemList,
  Vd as BaseBanner,
  Is as BaseCelebration,
  Ts as BaseCommunityPost,
  qc as BaseTabs,
  Yc as BreadcrumbSelect,
  Il as Breadcrumbs,
  bt as CalendarEvent,
  _c as CalendarEventList,
  Zc as CardSelectableContainer,
  ll as Carousel,
  Ud as CategoryBarChart,
  zc as CategoryBarSection,
  rc as Celebration,
  ks as CelebrationSkeleton,
  Fc as ChartWidgetEmptyState,
  Xc as Chip,
  Bc as ClockInControls,
  Gd as ComboChart,
  sc as CommunityPost,
  Ps as CommunityPostSkeleton,
  Ks as CompanySelector,
  Xe as Counter,
  Mc as Dashboard,
  cc as DaytimePage,
  Jc as DetailsItem,
  Qc as DetailsItemsList,
  Hd as Dialog,
  Ae as Dropdown,
  nc as EntitySelect,
  ed as F0ActionBar,
  Kd as F0AiBanner,
  An as F0AvatarModule,
  ec as F0Callout,
  td as F0TableOfContent,
  tc as F0VersionHistory,
  nd as F1SearchBox,
  ad as FILE_TYPES,
  rd as FileItem,
  lc as HighlightBanner,
  Dc as IndicatorsList,
  ld as Input,
  sd as Item,
  id as ItemSectionHeader,
  qd as LineChart,
  kc as LineChartWidget,
  hc as Menu,
  od as MobileDropdown,
  Yd as NotesTextEditor,
  Zd as NotesTextEditorPatchTargetNotFoundError,
  Xd as NotesTextEditorSkeleton,
  Jd as NotesTextEditorUnsupportedPatchTypeError,
  cd as NumberInput,
  dc as OmniButton,
  bc as OneApprovalHistory,
  dd as OneCalendar,
  ud as OneCalendarInternal,
  fd as OneDataCollection,
  md as OneDateNavigator,
  Jr as OneEmptyState,
  hd as OnePagination,
  ic as OnePersonListItem,
  Uc as OneRestrictComponent,
  uc as Page,
  Qo as PageHeader,
  Qd as PieChart,
  Sc as PieChartWidget,
  Ai as PrivateBox,
  eu as ProgressBarChart,
  tu as RadarChart,
  Ls as Reactions,
  gd as ResourceHeader,
  gr as RichTextDisplay,
  pd as RichTextEditor,
  Gc as ScrollArea,
  gc as SearchBar,
  bd as SectionHeader,
  He as Select,
  Pr as Shortcut,
  pc as Sidebar,
  fc as SidebarFooter,
  mc as SidebarHeader,
  wn as Spinner,
  yc as Split,
  wc as Stack,
  Lc as SummariesWidget,
  xd as Switch,
  vd as Tabs,
  wd as TabsSkeleton,
  $c as TasksList,
  yd as Textarea,
  Nd as ToggleGroup,
  Cd as ToggleGroupItem,
  ye as Tooltip,
  Rc as TwoColumnsList,
  nu as VerticalBarChart,
  Ac as VerticalBarChartWidget,
  ht as VirtualList,
  Id as WeekStartDay,
  kd as Weekdays,
  Se as Widget,
  Oc as WidgetAvatarsListItem,
  jc as WidgetEmptyState,
  Ec as WidgetHighlightButton,
  Tc as WidgetInboxList,
  fn as WidgetInboxListItem,
  Vc as WidgetSection,
  Pc as WidgetSimpleList,
  vt as WidgetSimpleListItem,
  Wc as WidgetStrip,
  au as _RadarChart,
  Sd as actionBarStatuses,
  Ad as chipVariants,
  Ld as downloadAsCSV,
  Fd as generateCSVContent,
  _d as getGranularityDefinition,
  Ed as getGranularityDefinitions,
  Dd as getGranularitySimpleDefinition,
  Od as granularityDefinitions,
  Td as modules,
  ru as predefinedPresets,
  Pd as rangeSeparator,
  lu as selectSizes,
  et as useAiPromotionChat,
  Rd as useDataCollectionData,
  xc as useDataCollectionItemNavigation,
  vc as useDataCollectionItemNavigationRouteSync,
  zd as useDataCollectionSource,
  Bd as useExportAction,
  $d as useInfiniteScrollPagination,
  Fe as useSidebar
};
