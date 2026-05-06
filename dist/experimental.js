import { a9 as pa, aa as ba, ab as xa, ac as va, ad as Tt, ae as Be, af as wa, O as b, W as ee, P as ve, u as ce, ag as ya, ah as Na, ai as Ca, aj as Ia, ak as Sa, a5 as de, al as ka, am as wt, an as ct, ao as Ue, U as Oe, ap as Aa, aq as La, ar as G, as as Fa, at as _a, M as Te, au as bn, av as Ea, aw as Oa, Q as V, ax as xn, a8 as P, ay as Ne, az as Ta, aA as Da, aB as Pa, aC as Ra, aD as za, aE as ke, aF as vn, aG as Ba, aH as we, aI as Ge, aJ as $a, aK as yt, n as wn, aL as Se, aM as Ma, aN as yn, a6 as re, aO as J, R as Nn, aP as Cn, aQ as Wa, aR as In, aS as ge, a7 as te, aT as ja, aU as Va, aV as Ua, aW as Ga, X as xe, aX as Ze, aY as Ha, aZ as Ka, a_ as qa, a$ as Ya, b0 as Xe, b1 as Sn, b2 as Za, b3 as Xa, b4 as Ja, b5 as He, b6 as Qa, b7 as er, b8 as tr, b9 as nr, ba as ar, bb as rr, bc as lr, bd as sr, be as ir, bf as or, bg as dt, bh as ut, bi as kn, bj as cr, bk as dr, bl as An, bm as ur, bn as fr, T as Je, bo as Nt, bp as Ln, bq as mr, br as Fn, bs as hr, bt as gr, bu as pr, bv as Ee, bw as br, bx as $e, by as Dt, bz as ft, bA as xr, bB as vr, a as wr, c as yr, bC as Nr, bD as _n, bE as Cr, bF as Ir, F as Sr, bG as En, _ as kr, bH as On, bI as Ar, bJ as Pt, bK as Lr, bL as Fr, bM as _r, bN as Er, bO as Tn, bP as Or, bQ as Tr, bR as Dr, bS as Pr, bT as Rr, Y as Dn, bU as zr, bV as Br, bW as Rt, bX as zt, bY as me, bZ as Pn, b_ as Ct, b$ as It, c0 as St, c1 as Rn, c2 as kt, c3 as zn, $ as Bn, c4 as $r, c5 as Mr, c6 as Wr, c7 as jr, c8 as Vr, c9 as Ur, ca as Gr, cb as Hr, cc as Kr, cd as qr, ce as Yr, cf as Bt, cg as $t, ch as Mt, ci as Zr, cj as Xr, ck as Jr, cl as Qr, cm as $n, cn as el, co as tl, cp as nl } from "./F0AiChat-fWc_Z6Gg.js";
import { cK as Zc, cJ as Xc, cs as Jc, cW as Qc, cD as ed, cE as td, cr as nd, cG as ad, ct as rd, d6 as ld, d4 as sd, cu as id, cH as od, cI as cd, cF as dd, cv as ud, cS as fd, cT as md, cX as hd, d2 as gd, d3 as pd, cB as bd, d5 as xd, cC as vd, cw as wd, cM as yd, cL as Nd, cx as Cd, cy as Id, cz as Sd, cU as kd, d7 as Ad, cq as Ld, cV as Fd, cZ as _d, c_ as Ed, cR as Od, cO as Td, cQ as Dd, cN as Pd, cA as Rd, cP as zd, c$ as Bd, d0 as $d, cY as Md, d1 as Wd } from "./F0AiChat-fWc_Z6Gg.js";
import { jsx as t, jsxs as o, Fragment as Q } from "react/jsx-runtime";
import se, { forwardRef as q, useRef as $, useTransition as al, useState as O, useLayoutEffect as Mn, useId as rl, useContext as Qe, createContext as At, useEffect as j, useCallback as H, useMemo as X, Fragment as ll, isValidElement as sl, cloneElement as Wn, Children as jn } from "react";
import { C as il, P as ol, g as Vn, c as cl, F as mt, f as dl, a as ul, u as fl, A as ml, B as hl, L as gl, b as pl, V as bl, d as xl, e as Wt, h as vl, i as wl } from "./index-B8So7TeB.js";
import { l as Vd, m as Ud, j as Gd, n as Hd, s as Kd, D as qd, k as Yd, o as Zd, w as Xd, x as Jd, N as Qd, y as eu, p as tu, r as nu, R as au, q as ru, _ as lu, v as su, t as iu } from "./index-B8So7TeB.js";
const yl = pa("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Un = q(({ className: e, items: n }, a) => /* @__PURE__ */ t(ba, { ref: a, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(xa, {}),
  /* @__PURE__ */ t(va, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Un.displayName = "CollapsedBreadcrumbItem";
const Lt = 50, Nl = 120, Ke = 8;
function Cl(e, n) {
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
function jt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ke;
    default:
      return e[0] + Lt + e[e.length - 1] + Ke;
  }
}
function Il(e, n) {
  return Nl * e + (n ? Lt : 0) + Ke;
}
function Sl(e, n, a = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Il(
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
      minWidth: jt(l)
    };
  const s = Cl(e, l);
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
    minWidth: jt(l)
  };
}
function kl({ breadcrumbs: e, append: n }) {
  const a = $(null), r = $(null), [, l] = al(), [s, i] = O(null), c = (s?.collapsedItems || []).length > 0;
  return Mn(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, p = Array.from(f.children);
      l(() => {
        const g = Sl(
          h,
          e,
          p
        );
        i(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(Tt, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Tt,
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
              Be,
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
        s && s.headItem && /* @__PURE__ */ o(wa, { children: [
          /* @__PURE__ */ t(
            Be,
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
              Un,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              Be,
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
            Be,
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
const Al = ve({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Vt = [
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
], Ll = ({
  spin: e = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, s) => {
  const i = rl(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...p
  } = l;
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(Al({ size: n }), h),
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
            ...p.style
          },
          ...(({ style: g, ...x }) => x)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Vt.map((g) => /* @__PURE__ */ t("clipPath", { id: `${i}-${g.id}`, children: /* @__PURE__ */ t("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: Vt.map((g) => /* @__PURE__ */ t(
              ee.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${g.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? g.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? g.delay : 0,
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
                    delay: e ? g.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${g.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: g.transformOrigin,
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
              g.id
            )) })
          ]
        }
      )
    }
  );
}, Gn = q(Ll), Hn = At(null), Fl = 15, _l = ({ children: e, enabled: n, onShow: a, ...r }) => {
  const [l, s] = O(n), [i, c] = O(!1), [d, f] = O(!0), [u, m] = O(
    Fl
  ), h = $(null), p = (x) => {
    h.current = x;
  }, g = () => {
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
    Hn.Provider,
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
        clear: g,
        setClearFunction: p
      },
      children: e
    }
  );
}, Ce = () => {
};
function et() {
  const e = Qe(Hn);
  return e === null ? {
    enabled: !1,
    setEnabled: Ce,
    open: !1,
    setOpen: Ce,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ce,
    setAutoClearMinutes: Ce,
    clear: Ce,
    setClearFunction: Ce,
    autoClearMinutes: null
  } : e;
}
const Kn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = et(), s = ce(), [i, c] = O(!1);
  return a ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(ya, { children: /* @__PURE__ */ o(Na, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Ca, { asChild: !0, children: /* @__PURE__ */ t(
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
          Ia,
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
              de(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              Sa,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Gn,
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
}, Ut = "one_sidebar_locked", qn = At(void 0);
function Ae() {
  const e = Qe(qn);
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
function El({ children: e }) {
  const { currentPath: n } = wt(), [a, r] = O(!1), [l, s] = O(!1), i = a ? Ue.xl : Ue.md, c = ct(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = O(() => {
    const C = localStorage.getItem(Ut);
    return C !== null ? !!C : !0;
  }), [u, m] = O(!1), [h, p] = O(
    null
  ), g = H(
    ({ isInvokedByUser: C } = {
      isInvokedByUser: !0
    }) => {
      s(C ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = H(
    (C) => {
      c || (C.clientX < 32 && m(!0), C.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = X(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return j(() => {
    m(!1);
  }, [n]), j(() => {
    l && localStorage.setItem(Ut, d ? "1" : "");
  }, [d, l]), j(() => () => {
    p(y);
  }, [y]), /* @__PURE__ */ t(
    qn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: y,
        toggleSidebar: g,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: x, className: "h-screen w-screen", children: e })
    }
  );
}
const Gt = ee.create(G), Ht = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Ol = ({
  isMarked: e,
  onChange: n,
  label: a
}) => {
  const [r, l] = O(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(Oe, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        de()
      ),
      onClick: s,
      "aria-label": a,
      children: e ? /* @__PURE__ */ t(
        Gt,
        {
          size: "sm",
          icon: Aa,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Ht,
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
        Gt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: La,
          className: "outline-none",
          variants: Ht,
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
}, Tl = ({
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
  const [m, h] = O("idle"), [p, g] = O(null), [x, ...y] = p ?? [], [C, E] = O(!1);
  j(() => {
    g(null), h("idle");
  }, [e]);
  const R = H(async () => {
    try {
      h("fetching");
      const D = await a();
      h("idle"), g(D);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Fa,
    {
      open: C,
      onOpenChange: async (D) => {
        E(D), D && p === null && R(), i(D);
      },
      children: [
        /* @__PURE__ */ t(_a, { asChild: !0, children: /* @__PURE__ */ t(
          Te,
          {
            variant: "outline",
            icon: bn,
            hideLabel: !0,
            label: n,
            pressed: C,
            append: f && /* @__PURE__ */ t(Ft, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Ea, { children: /* @__PURE__ */ o(
          Oa,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Rl, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t($l, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(zl, { ...l, buttonUrl: r }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Dl,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((D, _) => /* @__PURE__ */ t(
                    Pl,
                    {
                      ...D,
                      onClick: d
                    },
                    _
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Bl,
                  {
                    ...s,
                    onClick: () => {
                      R();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Ml,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => E(!1)
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
    Ta,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        Ne,
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
              Da,
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
}, Pl = ({
  title: e,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const s = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Pa, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
    Ne,
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
}, Rl = ({
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
        V,
        {
          variant: "outline",
          size: "sm",
          icon: xn,
          label: e,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Yn = ({
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
] }) }), zl = ({
  title: e,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ t(
  Yn,
  {
    title: e,
    description: r,
    icon: /* @__PURE__ */ t(G, { icon: bn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Ne, { href: a, children: /* @__PURE__ */ t(V, { label: n }) })
  }
), Bl = ({
  title: e,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ t(
  Yn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(G, { icon: Ra, size: "lg" }),
    button: /* @__PURE__ */ t(V, { variant: "outline", label: a, onClick: r })
  }
), $l = () => /* @__PURE__ */ t(
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
), Ft = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Ml = ({
  isVisible: e,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, s] = O(e);
  j(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ t(za, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          V,
          {
            variant: "ghost",
            icon: ke,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        il,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ t(
            ol,
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
function Kt({
  icon: e,
  href: n,
  label: a,
  disabled: r
}) {
  const l = $(null);
  return /* @__PURE__ */ t(
    V,
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
function tc({
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
  const { sidebarState: u, toggleSidebar: m } = Ae(), h = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...a
  ], p = n && Object.keys(n).length !== 0, g = l && a.length > 0, x = !l && r.length > 0, y = !l && !!i?.isVisible, C = h[h.length - 1], E = "navigation" in window ? window.navigation : null, R = l && (E ? !!E.canGoBack : window.history.length > 1);
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
                V,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: vn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: b(
                "flex flex-grow items-center gap-2",
                R && "justify-center"
              ),
              children: [
                l && R && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  V,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Ba,
                    onClick: () => window.history.back()
                  }
                ) }),
                R || g ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in C ? /* @__PURE__ */ t(P, { className: "h-4 w-24" }) : C.label }) : /* @__PURE__ */ t(
                  kl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Ol,
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
          !l && p && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(we, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            Ge,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(Ge, { text: n.text, variant: n.variant }) }),
          !l && p && (s || x || y) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Kt,
                {
                  icon: $a,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Kt,
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
              Tl,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            x && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: r.map((D, _) => /* @__PURE__ */ t(Wl, { action: D }, _)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              wn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Kn, {})
          ] })
        ] })
      ]
    }
  );
}
function Wl({ action: e }) {
  const n = $(null), [a, r] = O(!1);
  return "actions" in e ? /* @__PURE__ */ t(Se, { items: e.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ t(
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
    V,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    Ne,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        V,
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
const jl = () => {
  const e = ce();
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
            icon: Ma,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Vl = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const r = $(null);
  j(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, e]);
}, Ul = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = et();
  return Vl({
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
}, Gl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(yn, { size: "small" }) : e.label
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
}, Hl = ({
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
  _l,
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
), Kl = () => {
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
  return e ? /* @__PURE__ */ o(Ul, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      Te,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: ke,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Gn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(Nn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        Gl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(jl, {}) })
  ] }) : null;
}, ql = re(
  J("AiPromotionChat", Kl)
), Yl = re(
  J("AiPromotionChatProvider", Hl)
), Zn = ve({
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
}), qt = {
  positive: In,
  warning: Wa,
  info: Cn
}, Yt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Zl = q(
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
        className: Zn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Yt[s]
                ),
                children: [
                  qt[s] && /* @__PURE__ */ t(G, { icon: qt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    ge,
                    {
                      className: Yt[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ t(
              V,
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
              V,
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
), Xl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Zn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(P, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
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
), Xn = q(
  (e, n) => /* @__PURE__ */ t(Zl, { ref: n, ...e })
), Jl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Xl, { compact: e, variant: n });
Xn.displayName = "F0Callout";
const nc = te(
  re(Xn),
  Jl
);
function Ql({
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
        de("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ t(G, { icon: ja, size: "md", color: "selected" }),
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
function es({
  author: e,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = Va(), s = Ua(l), i = Ga(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        de("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ t(ge, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
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
function ts({
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
        /* @__PURE__ */ t(Ze, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ t(
            Ql,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            es,
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
const ac = re(
  J("F0VersionHistory", ts)
), Jn = q(
  ({ height: e, itemCount: n, itemSize: a, className: r, renderer: l }, s) => {
    const i = se.useRef(null);
    se.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = Ha({
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
Jn.displayName = "VirtualList";
const ht = J("VirtualList", Jn), Qn = ({
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
const ns = ({
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
  const m = e.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), g = (y) => {
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
          xe,
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
            className: b(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              Qn,
              {
                text: e.name,
                search: s,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Sn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: g,
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
            icon: In,
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
  showGroupIcon: p = !1,
  singleSelector: g = !1,
  disabled: x = !1,
  hiddenAvatar: y = !1
}) => {
  const [C, E] = O(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ns,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: i,
        onRemove: c,
        singleSelector: g,
        goToFirst: f,
        goToLast: u,
        disabled: x,
        hiddenAvatar: y
      }
    );
  const R = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && g)
      d(!n);
    else if (L.key === "Enter") {
      if (x) return;
      !l || s ? i(r) : l && c(r);
    } else L.key === "ArrowDown" ? tt(L.currentTarget, f) : L.key === "ArrowUp" && nt(L.currentTarget, u);
  }, D = () => {
    if (C)
      d(!n), E(!1);
    else {
      if (x || g) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const _ = l || s;
  return /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        V,
        {
          hideLabel: !0,
          icon: n ? Ka : qa,
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
            E(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            p && /* @__PURE__ */ t(
              G,
              {
                icon: Ya,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Qn,
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
              Sn,
              {
                checked: _,
                disabled: x,
                onClick: D,
                onKeyDown: R,
                indeterminate: s,
                onPointerDown: (L) => {
                  L.stopPropagation(), E(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", g ? "opacity-0" : "")
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
const Zt = ({
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
        V,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Za,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: b("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Fe = ({ primaryAction: e, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ t(
      V,
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
    Xa,
    {
      items: r,
      value: e.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, as = ({
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
  let p, g, x = d ? {
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
  return x || (x = y, y = void 0), m && u ? (p = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: x,
      secondaryActions: y ? [y] : []
    }
  ), g = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ t(Fe, { primaryAction: x, secondaryActions: [] }), y && (g = /* @__PURE__ */ t(Fe, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    g
  ] }) });
}, rs = ({
  search: e,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: yl, size: "md" }),
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
      icon: Ja,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), lt = 384, st = 36, ls = 37, Xt = 1, Jt = 200, Qt = '[data-avatarname-navigator-element="true"]', ss = ({
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
  onGroupChange: p,
  onToggleExpand: g,
  searchPlaceholder: x,
  selectAllLabel: y,
  clearLabel: C,
  notFoundTitle: E,
  notFoundSubtitle: R,
  className: D,
  actions: _,
  onCreate: L,
  onCreateLabel: W,
  singleSelector: T = !1,
  loading: I = !1,
  disabled: v = !1,
  hiddenAvatar: k = !1
}) => {
  const A = se.useRef(null), U = X(
    () => e ? n.reduce(
      (S, B) => S + (B.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), w = H(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: 0 });
    }, Xt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Qt)
      )[0]?.focus();
    }, Jt);
  }, []), F = H(() => {
    setTimeout(() => {
      A.current?.scrollTo({ top: A.current?.scrollHeight });
    }, Xt), setTimeout(() => {
      const S = Array.from(
        document.querySelectorAll(Qt)
      );
      S[S.length - 1]?.focus();
    }, Jt);
  }, []), z = X(
    () => new Map(h.map((S) => [S.id, S])),
    [h]
  ), K = H(
    (S) => {
      const B = z.get(S.id);
      if (!e)
        return {
          selected: !!B,
          partialSelected: !!B
        };
      const Y = (S.subItems ?? []).filter(
        (Z) => B?.subItems?.some(
          (he) => he.subId === Z.subId
        )
      ), M = (S.subItems?.length ?? 0) === Y.length, ne = !M && Y.length > 0;
      return { selected: M, partialSelected: ne };
    },
    [e, z]
  ), le = H(
    (S) => {
      if (S.index === 0 && L)
        return /* @__PURE__ */ t(
          Zt,
          {
            label: W ?? "",
            onCreate: () => L?.(l),
            goToFirst: w,
            goToLast: F
          }
        );
      const B = L ? S.index - 1 : S.index, Y = n[B], { selected: M, partialSelected: ne } = K(Y);
      return /* @__PURE__ */ t(
        je,
        {
          expanded: Y.expanded ?? !1,
          onExpand: () => g(Y, !0),
          search: l,
          groupView: e,
          entity: Y,
          onSelect: s,
          onRemove: i,
          selected: M,
          partialSelected: ne,
          showGroupIcon: is(a, r),
          singleSelector: T,
          goToFirst: w,
          goToLast: F,
          disabled: v,
          hiddenAvatar: k
        },
        Y.id
      );
    },
    [
      L,
      W,
      v,
      n,
      K,
      w,
      F,
      e,
      a,
      k,
      i,
      s,
      g,
      l,
      r,
      T
    ]
  ), ae = X(() => e ? n.flatMap((S) => {
    const B = Me(
      h ?? [],
      S.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: S.id,
          subName: S.name,
          subAvatar: S.avatar,
          expanded: S.expanded ?? B?.expanded ?? !1,
          subItems: S.subItems,
          subSearchKeys: S.searchKeys
        }
      },
      ...(S.subItems ?? []).map((Y) => ({
        parent: {
          ...S,
          expanded: S.expanded ?? B?.expanded ?? !1
        },
        subItem: Y
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
  })), [e, n, h]), N = H(
    (S) => {
      if (S.index === 0 && L)
        return /* @__PURE__ */ t(
          Zt,
          {
            label: W ?? "",
            onCreate: () => L?.(l),
            goToFirst: w,
            goToLast: F
          }
        );
      const B = L ? S.index - 1 : S.index, Y = ae[B].parent, M = ae[B].subItem;
      if (!Y) {
        const Z = {
          id: M.subId,
          name: M.subName,
          avatar: M.subAvatar,
          subItems: M.subItems,
          expanded: M.expanded,
          searchKeys: M.subSearchKeys
        }, he = Me(
          h,
          Z.id
        ), be = (Z?.subItems ?? []).filter(
          (Le) => he?.subItems?.some(
            (ga) => ga.subId === Le.subId
          )
        ), ze = (Z.subItems?.length ?? 0) === be.length, ha = !ze && be.length > 0;
        return /* @__PURE__ */ t(
          je,
          {
            groupView: !0,
            expanded: Z.expanded ?? !1,
            onExpand: (Le) => g(Z, Le),
            search: l,
            entity: Z,
            onSelect: s,
            onRemove: i,
            selected: ze,
            partialSelected: ha,
            showGroupIcon: a.find((Le) => Le.value === r)?.groupType === "team",
            singleSelector: T,
            goToFirst: w,
            goToLast: F,
            hideLine: B === ae.length - 1,
            disabled: v,
            hiddenAvatar: k
          }
        );
      }
      let ne = !!Me(h, M.subId);
      if (!ne) {
        const Z = Me(
          h,
          Y.id
        );
        ne = !!(Y?.subItems ?? []).filter(
          (be) => Z?.subItems?.some(
            (ze) => ze.subId === be.subId
          )
        ).find((be) => be.subId === M.subId);
      }
      return /* @__PURE__ */ t(
        je,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: M.subId,
            name: M.subName,
            avatar: M.subAvatar,
            searchKeys: M.subSearchKeys
          },
          onSelect: () => {
            d(Y, M);
          },
          onRemove: () => c(Y, M),
          selected: !!ne,
          partialSelected: !1,
          singleSelector: T,
          goToFirst: w,
          goToLast: F,
          isChild: !0,
          hiddenAvatar: k
        }
      );
    },
    [
      ae,
      h,
      l,
      T,
      w,
      F,
      s,
      i,
      a,
      v,
      g,
      r,
      d,
      c,
      k,
      L,
      W
    ]
  ), [ue, pe] = X(() => {
    if (!n.length)
      return [!1, !1];
    let S = 0, B = 0;
    if (!e)
      S = n.length, B = n.reduce(
        (ne, { id: Z }) => ne + (z.has(Z) ? 1 : 0),
        0
      );
    else {
      const ne = new Set(
        [...z.values()].flatMap(
          (Z) => Z.subItems?.map((he) => he.subId) ?? []
        )
      );
      n.forEach((Z) => {
        const he = Z.subItems ?? [];
        S += he.length, B += he.filter(
          (be) => ne.has(be.subId)
        ).length;
      });
    }
    const Y = S > 0 && B === S, M = B > 0;
    return [Y, M];
  }, [n, z, e]), fe = ae.length, De = !T && (y || C), Pe = _ && _.length > 0, Re = !I && (!T && De || Pe);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        T || I ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              T || I ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                rs,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: w,
                  goToLast: F
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                He,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: I,
                  onChange: p,
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
              Re ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              I && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(yn, {}) }),
              !I && !U && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: lt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: E }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: R })
                  ]
                }
              ),
              !I && (!!U || L) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                ht,
                {
                  height: lt,
                  itemCount: fe + (L ? 1 : 0),
                  itemSize: (S) => {
                    if (S === 0 && L) return st;
                    const B = L ? S - 1 : S;
                    return ae[B]?.parent === null ? ls : st;
                  },
                  renderer: N,
                  ref: A
                }
              ) : /* @__PURE__ */ t(
                ht,
                {
                  height: lt,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: st,
                  renderer: le,
                  ref: A
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          as,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: T,
            totalFilteredEntities: U,
            allVisibleSelected: ue,
            anyVisibleSelected: pe,
            selectAllLabel: y,
            clearLabel: C,
            disabled: v,
            actions: _
          }
        )
      ]
    }
  );
}, Me = (e, n) => e.find((a) => a.id === n), is = (e, n) => e.find((a) => a.value === n)?.groupType === "team", os = ({
  entity: e,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Qa,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      er,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: tr, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ t(
      G,
      {
        icon: ke,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(e)
      }
    ),
    text: e.subName,
    deactivated: r
  }
) }), cs = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: a,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = X(() => {
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
            os,
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
}, ds = 500, en = 520, tn = 210, nn = ({
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
  const p = (s ?? en) < ds, g = !c && !i && !p, x = s ?? en, y = g ? x - tn : x;
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
              ss,
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
        g && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: tn + "px"
            },
            children: /* @__PURE__ */ t(
              cs,
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
}, us = ({
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
  maxLength: p,
  loading: g = !1,
  required: x = !1,
  readonly: y = !1,
  append: C,
  size: E = "sm",
  open: R
}) => {
  const D = X(
    () => a.some(
      (T) => T.subItems && T.subItems.length > 0
    ),
    [a]
  ), _ = X(() => D ? a.flatMap(
    (T) => (T.subItems ?? []).map((I) => ({
      parent: T,
      subItem: I
    }))
  ) : a.map((T) => ({
    parent: null,
    subItem: {
      subId: T.id,
      subName: T.name,
      subAvatar: T.avatar,
      subDeactivated: T.deactivated
    }
  })), [D, a]), L = _.length === 0 ? void 0 : _.length === 1 ? _[0].subItem.subName : _.length + " " + n, W = _.length === 1 ? _[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    nr,
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
      loading: g,
      required: x,
      readonly: y,
      size: E,
      avatar: l || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: _[0].subItem.subAvatar,
        deactivated: _[0].subItem.subDeactivated
      },
      append: C ?? /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(ar, { open: R, disabled: r, size: E }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            _.length === 1 && !l || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            ge,
            {
              tag: "span",
              className: _.length === 1 && _[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: _.length === 0 ? e ?? "" : _.length === 1 ? _[0].subItem.subName : `${_.length} ${n}`
            }
          )
        }
      )
    }
  );
}, rc = (e) => {
  const [n, a] = O(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), r = (I) => {
    a(I), e.onOpenChange?.(I);
  };
  j(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = O(e.entities), [i, c] = O(""), [d, f] = rr("", 300), u = X(
    () => e.entities.some(
      (I) => I.subItems && I.subItems.length > 0
    ),
    [e.entities]
  ), m = Qe(lr), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function g(I) {
    if (e.singleSelector) {
      e.onSelect(I), a(!1);
      return;
    }
    const v = e.selectedEntities ?? [], k = l.find((z) => z.id === I.id);
    if (!k)
      return;
    const A = new Set(
      (k.subItems ?? []).map((z) => z.subId)
    ), U = /* @__PURE__ */ new Set([k.id]);
    l.forEach((z) => {
      z.id !== k.id && (z.subItems ?? []).some(
        (le) => A.has(le.subId)
      ) && U.add(z.id);
    });
    const w = [...v];
    function F(z) {
      const K = w.findIndex((le) => le.id === z.id);
      K >= 0 ? w[K] = z : w.push(z);
    }
    U.forEach((z) => {
      const K = l.find((N) => N.id === z);
      if (!K) return;
      const le = K.subItems?.filter(
        (N) => A.has(N.subId)
      ) ?? [], ae = w.findIndex((N) => N.id === z);
      if (ae >= 0) {
        const N = w[ae].subItems ?? [], ue = new Set(N.map((fe) => fe.subId)), pe = [
          ...N,
          ...le.filter((fe) => !ue.has(fe.subId))
        ];
        F({
          ...K,
          subItems: pe
        });
      } else
        F({
          ...K,
          subItems: le
        });
    }), e.onSelect(w);
  }
  function x(I, v) {
    if (e.singleSelector)
      e.onSelect({ ...I, subItems: [{ ...v }] }), a(!1);
    else {
      const k = e.selectedEntities ?? [], A = new Set(k.map((F) => F.id)), U = new Map(
        k.map((F) => [F.id, F.subItems ?? []])
      );
      A.add(I.id), e.entities.forEach((F) => {
        F.subItems?.some(
          (K) => K.subId === v.subId
        ) && A.add(F.id);
      });
      const w = [];
      e.entities.forEach((F) => {
        if (A.has(F.id)) {
          let K = [...U.get(F.id) ?? []];
          F.subItems?.some(
            (N) => N.subId === v.subId
          ) && (K.some(
            (ue) => ue.subId === v.subId
          ) || K.push(v));
          const ae = new Set(
            (F.subItems ?? []).map((N) => N.subId)
          );
          K = K.filter(
            (N) => ae.has(N.subId)
          ), w.push({
            ...F,
            subItems: K
          });
        }
      }), e.onSelect(w);
    }
  }
  function y(I) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let v = [];
    const k = e.selectedEntities ?? [];
    if (u) {
      const A = l.find(
        (w) => w.id === I.id
      );
      if (!A)
        return;
      const U = new Set(
        (A.subItems ?? []).map((w) => w.subId)
      );
      for (const w of k) {
        const F = (w.subItems ?? []).filter(
          (z) => !U.has(z.subId)
        );
        F.length > 0 && v.push({
          ...w,
          subItems: F
        });
      }
    } else
      v = (k ?? []).filter((A) => A.id !== I.id);
    e.onSelect(v);
  }
  function C(I, v) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const k = e.selectedEntities ?? [], A = v.subId, U = [];
    for (const w of k) {
      const F = w.subItems?.filter((z) => z.subId !== A) ?? [];
      F.length > 0 && U.push({
        ...w,
        subItems: F
      });
    }
    e.onSelect(U);
  }
  function E() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const I = e.selectedEntities ?? [];
    let v = [];
    if (u) {
      const k = new Set(
        l.flatMap(
          (A) => (A.subItems ?? []).map((U) => U.subId)
        )
      );
      for (const A of I) {
        const U = (A.subItems ?? []).filter(
          (w) => !k.has(w.subId)
        );
        U.length > 0 && v.push({
          ...A,
          subItems: U
        });
      }
    } else {
      const k = new Set(
        l.map((A) => A.id)
      );
      v = (I ?? []).filter((A) => !k.has(A.id));
    }
    e.onSelect(v);
  }
  function R() {
    const I = [...e.selectedEntities ?? []];
    l.forEach((v) => {
      const k = I.find((A) => A.id === v.id);
      if (!k)
        I.push({
          ...v,
          subItems: v.subItems || []
        });
      else {
        const A = Array.from(
          /* @__PURE__ */ new Set([
            ...k.subItems ?? [],
            ...v.subItems ?? []
          ])
        );
        k.subItems = A;
      }
    }), e.singleSelector || e.onSelect(I);
  }
  const D = (I) => {
    c(I), f(I);
  }, _ = (I, v) => {
    e.onItemExpandedChange(I.id, v), s(
      l.map(
        (k) => k.id === I.id ? { ...k, expanded: !I.expanded } : k
      )
    );
  };
  j(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const v = e.entities.map((k) => {
        const A = fs(k, d), U = k.subItems?.map((w) => ({
          ...w,
          score: qe(
            d,
            w.subSearchKeys ?? [w.subName]
          )
        })).filter((w) => w.score < 1 / 0).sort((w, F) => w.score - F.score);
        return {
          ...k,
          score: A,
          expanded: k.expanded ?? (U?.length ?? 0) > 0,
          subItems: U
        };
      }).filter((k) => k.score < 1 / 0).sort((k, A) => k.score - A.score);
      s(v);
    } else {
      const I = e.entities.map((v) => {
        const k = qe(
          d,
          v.searchKeys ?? [v.name]
        );
        return { ...v, score: k };
      }).filter((v) => v.score < 1 / 0).sort((v, k) => v.score - k.score);
      s(I);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const L = $(null), [W, T] = O(0);
  return Mn(() => {
    const I = () => {
      L.current && T(L.current.offsetWidth);
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: L,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        nn,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: g,
          onRemove: y,
          onSubItemRemove: C,
          onSubItemSelect: x,
          onClear: E,
          onSelectAll: R,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: D,
          onToggleExpand: _,
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
  ) : /* @__PURE__ */ o(sr, { ...e, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ t(
      ir,
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
      or,
      {
        container: p,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          nn,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: g,
            onRemove: y,
            onSubItemRemove: C,
            onSubItemSelect: x,
            onClear: E,
            onSelectAll: R,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: D,
            onToggleExpand: _,
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
function an(e) {
  return gt(e).split(/\s+/).filter((n) => n.length > 0);
}
function qe(e = "", n) {
  const a = an(e);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = gt(r), s = an(r), i = gt(e);
    if (l.includes(i) || a.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function fs(e, n) {
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
const ms = ({
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
  }), u = Vn(n, {
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
}, hs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(P, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(P, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(P, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(P, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(P, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), _t = J(
  "ActivityItem",
  te(ms, hs)
), ea = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), gs = ({
  title: e,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ t(ea, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  _t,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), ps = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(ea, { title: e, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ t(_t.Skeleton, {}, r)) }), Ve = te(gs, ps), bs = 3, xs = ["today", "yesterday", "lastWeek", "lastMonth"], vs = (e) => dr(e, ([n]) => {
  const a = xs.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), pt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ws = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = ce(), i = cl(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = cr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = vs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(se.Fragment, { children: [
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
    n && new Array(bs).fill(null).map((u, m) => /* @__PURE__ */ t(_t.Skeleton, {}, m))
  ] });
}, ys = () => {
  const e = ce();
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
}, lc = J(
  "ActivityItemList",
  te(ws, ys)
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
function Is({
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
        a ? "" : Cs[ur(
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
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                An,
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
function Ss(e) {
  const n = $(null), a = $(), r = H(() => {
    const s = n.current;
    if (!s) return;
    const i = fr.create(s, {
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
const ks = ({
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
  const [m, h] = O(i), p = $(null);
  j(() => {
    h(i);
  }, [i]);
  const g = (D) => {
    h(D), c?.(D);
  }, x = Je(), { canvasRef: y, handleMouseEnter: C, handleMouseLeave: E } = Ss(x), R = Nt({
    emoji: Ns[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    Ne,
    {
      href: e,
      onClick: l,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        de()
      ),
      onMouseEnter: x ? void 0 : C,
      onMouseLeave: x ? void 0 : E,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Is,
          {
            firstName: n,
            lastName: a,
            src: r,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: g,
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
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: R })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(mt, { date: u }) })
        ] })
      ]
    }
  );
}, As = () => /* @__PURE__ */ o(
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
), sc = te(ks, As), ic = ({
  title: e,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(Ln, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(V, { label: a, variant: "outline", onClick: r }) })
] });
function Ls({
  emoji: e,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = O(a), [c, d] = O(n), f = $(null), { fireEmojiConfetti: u } = mr(), m = (g, x) => {
    g.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(x), s || u(x, f);
  }, h = r?.map((g) => g.name).join(", ") || "", p = /* @__PURE__ */ t(
    Fn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (g) => {
        m(g, e);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": hr(e),
      prepend: /* @__PURE__ */ t(Nt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        gr,
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
  return h ? /* @__PURE__ */ t(we, { label: h, children: p }) : p;
}
function Fs({ items: e, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ t(
      V,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(An, { onSelect: n, locale: a }),
    e.map((l) => /* @__PURE__ */ t(
      Ls,
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
const _s = J("Reactions", Fs), Es = ({
  content: e,
  collapsed: n
}) => /* @__PURE__ */ t(
  pr,
  {
    content: e,
    className: b(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), Os = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(P, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(P, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), ta = te(
  Es,
  Os
), rn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((a) => {
      const r = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        Ee,
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
), bt = q(
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
                      icon: xn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(mt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(rn, { tags: c }),
              d && /* @__PURE__ */ t(rn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Ts = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), na = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const a = (e?.split(".")).at(-1);
  return !!a && Ts.has(a);
}, Ds = ({
  title: e,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = dl(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: na(n) ? /* @__PURE__ */ t(
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
      /* @__PURE__ */ t(P, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      bt,
      {
        title: e,
        description: l,
        color: br.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, Ps = () => /* @__PURE__ */ o(
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
), aa = te(Ds, Ps), Rs = ({
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
  actions: p,
  dropdownItems: g,
  noReactionsButton: x = !1
}) => {
  const y = [f.views, f.comments].filter(Boolean).join(" · "), C = !0, E = Vn(r), R = () => {
    i(e);
  }, D = (L) => {
    L.stopPropagation();
  }, _ = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: R,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          $e,
          {
            href: n.url || "#",
            title: _,
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
        ) : /* @__PURE__ */ t(ut, { icon: Dt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Q, { children: [
                  /* @__PURE__ */ t(
                    $e,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: _,
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
                    $e,
                    {
                      href: n.url,
                      title: _,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: _
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ut, { icon: Dt, size: "sm" }) }),
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
                  p?.map((L) => /* @__PURE__ */ t(
                    V,
                    {
                      hideLabel: !L.label,
                      ...L.icon && { icon: L.icon },
                      variant: "outline",
                      size: "md",
                      onClick: L.onClick,
                      label: L.label ?? "",
                      title: L.label ?? ""
                    },
                    L.label
                  )),
                  g?.length && /* @__PURE__ */ t(
                    Se,
                    {
                      items: g,
                      icon: ft,
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
                      ...g ?? []
                    ],
                    icon: ft,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: E }),
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
              s && /* @__PURE__ */ t(ta, { content: s, collapsed: C })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: na(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: D,
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
            /* @__PURE__ */ t(P, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(aa, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: y }),
          !x && /* @__PURE__ */ t(
            _s,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: xr
              }
            }
          )
        ] })
      ]
    }
  );
}, zs = ({
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
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(ta.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(P, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(aa.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(P, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(P, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), oc = te(
  Rs,
  zs
), ra = se.forwardRef(({ person: e, onClick: n, ...a }, r) => {
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
              G,
              {
                icon: Cn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((s, i) => /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(Ee, { ...s }, s.text),
            i < a.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ t(vr, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ t(
              V,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ t(
              V,
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
}), Bs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(P, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(P, { className: "h-4" }),
    /* @__PURE__ */ t(P, { className: "h-4" })
  ] })
] });
ra.displayName = "OnePersonListItem";
const cc = re(
  J(
    "OnePersonListItem",
    te(ra, Bs)
  )
), $s = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ms({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(El, { children: /* @__PURE__ */ t(
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
function Ws({
  children: e,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? wr : l?.enabled ? Yl : ll, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Gs,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: e
    }
  ) });
}
const dc = J(
  "ApplicationFrame",
  Ms
), js = ({ contentId: e }) => {
  const n = ce();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: de(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Vs(e, n, a) {
  return !n && e ? a === "hidden" : n && !e ? a !== "hidden" : !1;
}
function Us(e, n) {
  const { sidebarState: a, toggleSidebar: r } = Ae(), l = $(e);
  j(() => {
    n && Vs(
      e,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, a, r]);
}
function Gs({
  ai: e,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ae(), f = Je(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: p,
    resizable: g
  } = yr(), x = m === "fullscreen", y = m === "canvas", { open: C } = et(), E = g ? p : Cr, R = $(x), D = x && !R.current, _ = !x && R.current, [
    L,
    W
  ] = O(!1);
  j(() => {
    !x && R.current && W(!0), R.current = x;
  }, [x]);
  const T = x || L || _, I = X(() => D ? { duration: 0.15, ease: "easeOut" } : _ ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [D, _]), v = ct(
    `(max-width: ${Ue.xl}px)`,
    { initializeWithValue: !0 }
  ), k = ct(`(max-width: ${Ue.md}px)`, {
    initializeWithValue: !0
  });
  return j(() => {
    d(u);
  }, [u, d]), j(() => {
    d(C);
  }, [C, d]), Us(u, v), /* @__PURE__ */ t(
    Nr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(_n, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
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
              ref: (A) => {
                s === "hidden" ? A?.setAttribute("inert", "") : A?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(js, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            ee.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !k ? E : 0
              },
              transition: { paddingRight: $s },
              children: [
                /* @__PURE__ */ t(
                  ee.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      T ? "overflow-hidden" : "overflow-auto",
                      !u && !C && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      ee.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          T ? "overflow-hidden" : "overflow-auto"
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
                    style: k ? void 0 : { right: E },
                    children: /* @__PURE__ */ t(Ir, {})
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
                        T || y ? "z-20" : "z-0",
                        s === "hidden" && T ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: k || x ? "100%" : E
                    },
                    transition: I,
                    onAnimationComplete: () => {
                      L && W(!1);
                    },
                    children: /* @__PURE__ */ t(Sr, {})
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
const Hs = ve({
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
function la({
  children: e,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Ae();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: Hs({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              V,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: vn,
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
                    ul,
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
            /* @__PURE__ */ t(wn, {}),
            /* @__PURE__ */ t(Kn, {})
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
la.displayName = "DaytimePage";
const uc = re(
  J("DaytimePage", la)
);
function Ks(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: s }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function qs({ label: e, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Se, { items: Ks(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            de()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(G, { icon: En, size: "sm" }),
            a && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const fc = re(
  J("OmniButton", qs)
);
function sa({ children: e, header: n, embedded: a = !1 }) {
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
sa.displayName = "Page";
const mc = re(J("Page", sa));
function Ys({
  companies: e,
  selected: n,
  onChange: a,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = X(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(P, { className: "size-6" }),
    /* @__PURE__ */ t(P, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    ln,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Zs,
    {
      companies: e,
      selected: i,
      onChange: a,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        ln,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Zs = ({
  companies: e,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const s = ce(), [i, c] = O(!1), d = X(
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
            de()
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
}, ln = ({
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
          badge: n ? { icon: On, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(ge, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function hc({
  user: e,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = ce();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Se, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          de("focus-visible:ring-inset")
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
          /* @__PURE__ */ t(ge, { children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ t(we, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        V,
        {
          icon: kn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Ar, { type: "highlight", size: "sm", icon: On }) })
    ] }) })
  ] });
}
function Xs({ isExpanded: e }) {
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
function Js() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Ae(), l = $(null);
  return j(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Fn,
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ t(Xs, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ t(G, { icon: ke, size: "md" }) })
      ]
    }
  );
}
function gc({
  companies: e,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Ys,
      {
        companies: e,
        selected: n,
        onChange: a,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(Js, {})
  ] });
}
function Qs() {
  const [e, n] = O(!1);
  return j(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const ia = At(void 0);
function ei({ children: e }) {
  const [n, a] = O(!1), [r, l] = O(null);
  return /* @__PURE__ */ t(
    ia.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: e
    }
  );
}
function Et() {
  const e = Qe(ia);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const ti = ({
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
] }), ni = ({ item: e }) => {
  const { isActive: n } = wt(), { label: a, icon: r, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    Ne,
    {
      ...l,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        de("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(ti, { item: e, active: s })
    }
  );
}, ai = ({
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
  const f = ce(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = Et(), { isActive: g } = wt(), x = g(e.href, { exact: e.exactMatch }), y = $(!1), [C, E] = O(!1), R = l === 0, D = l === s - 1, _ = s === 1, L = X(() => {
    const A = [];
    return !_ && !R && A.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Lr
    }), !_ && !D && A.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Fr
    }), A.length > 0 && A.push({ type: "separator" }), A.push({
      label: f.favorites.remove,
      onClick: () => r?.(e),
      icon: _r,
      critical: !0
    }), A;
  }, [_, R, D, f, i, l, r, e]), W = () => {
    m(!0), E(!1), p(e.href || null), y.current = !0;
  }, T = () => {
    m(!1), p(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, I = u && h === e.href, v = X(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      C && "bg-f1-background-secondary",
      I && "bg-f1-background-secondary"
    ),
    [x, C, I, d]
  ), k = X(() => /* @__PURE__ */ o(Q, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(li, { tooltip: n, children: /* @__PURE__ */ o(
      Ne,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          I && "pointer-events-none"
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
          ) : e.avatar ? /* @__PURE__ */ t(Er, { size: "xs", avatar: e.avatar }) : null,
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          C && "bg-f1-background-secondary opacity-100",
          I && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Se,
          {
            open: C,
            onOpenChange: E,
            items: L,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: ft, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, x, C, I, L, n]);
  return d ? /* @__PURE__ */ t(
    Tn,
    {
      value: e,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: T,
      className: v,
      whileDrag: {
        scale: 1.05
      },
      children: k
    }
  ) : /* @__PURE__ */ t("div", { className: v, children: k });
}, oa = ({
  title: e,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = O(n), f = Je(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Tr, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          de("focus-visible:ring-inset"),
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
    /* @__PURE__ */ t(Dr, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
  const { isDragging: i, setIsDragging: c } = Et(), d = $(!1), f = Or(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (g) => {
    !i && !d.current && r?.(e, g);
  }, p = /* @__PURE__ */ t(
    oa,
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
          children: e.items.map((g, x) => /* @__PURE__ */ t(ni, { item: g }, x))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Tn,
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
      children: p
    }
  ) : p;
};
function pc({
  tree: e,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = $(null), i = e.filter(
    (g) => g.isSortable === !1
  ), [c, d] = O(
    e.filter((g) => g.isSortable !== !1)
  ), [f, u] = O(0), m = H((g) => {
    d(g);
  }, []), h = H(
    (g) => {
      a?.(g);
    },
    [a]
  ), p = Qs();
  return /* @__PURE__ */ t(ei, { children: /* @__PURE__ */ t(_n, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    ri,
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
      forceUpdate: () => u((g) => g + 1)
    },
    f
  ) }) });
}
function ri({
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
  const u = ce(), { isDragging: m } = Et(), h = e.some((w) => w.isRoot), p = e.filter((w) => !w.isRoot).length > 0, g = n.length > 0, x = $(null), [y, C] = O(i), E = i.length > 0;
  j(() => {
    JSON.stringify(i) !== JSON.stringify(y) && C(i);
  }, [i]);
  const R = (w) => {
    C(w);
  }, D = H(
    (w) => {
      const F = y.filter((z) => z.href !== w.href);
      C(F), c?.(F);
    },
    [y, c]
  ), _ = H(
    (w, F) => {
      if (F < 0 || F >= y.length) return;
      const z = [...y], [K] = z.splice(w, 1);
      z.splice(F, 0, K), C(z), c?.(z);
    },
    [y, c]
  ), [L, W] = O(!1), T = $(null);
  j(() => {
    n.length > 0 && !L && (a([...n]), W(!0));
  }, [n, a, L]), j(() => {
    const w = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", w), () => {
      window.removeEventListener("resize", w), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, n, d]);
  const I = "flex flex-col gap-0.5", v = X(
    () => y.reduce(
      (w, F, z) => (F.label in w || (w[F.label] = []), w[F.label].push(z), w),
      {}
    ),
    [y]
  ), k = X(
    () => E && y.map((w, F) => /* @__PURE__ */ t(
      ai,
      {
        isSortable: !f,
        tooltip: (v[w.label] ?? []).length > 1 ? w.tooltip : void 0,
        item: w,
        dragConstraints: x,
        onRemove: D,
        index: F,
        total: y.length,
        onMove: _,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${w.href}-${w.label}`
    )),
    [
      E,
      y,
      v,
      D,
      _,
      c,
      f
    ]
  ), A = "flex flex-col gap-3", U = X(() => n.map((w) => /* @__PURE__ */ t(
    it,
    {
      category: w,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: n
    },
    w.id
  )), [n, f, r, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => w.isRoot).map((w, F) => /* @__PURE__ */ t(
          it,
          {
            category: w,
            onCollapse: l
          },
          `fixed-${F}`
        )) }),
        E && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(oa, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: x, children: f ? /* @__PURE__ */ t("div", { className: I, children: k }) : /* @__PURE__ */ t(
          Pt,
          {
            axis: "y",
            values: y,
            onReorder: R,
            className: I,
            children: k
          }
        ) }) }) }),
        p && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => !w.isRoot).map((w, F) => /* @__PURE__ */ t(
          it,
          {
            category: w,
            onCollapse: l
          },
          `fixed-${F}`
        )) }),
        g && /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ t("div", { className: A, children: U }) : /* @__PURE__ */ t(
              Pt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: A,
                children: U
              }
            )
          }
        )
      ]
    }
  );
}
const li = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(we, { description: e, children: n }) : n;
function bc({
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
        de()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: Pr, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Rr, { keys: a }) })
      ]
    }
  ) });
}
const sn = ({ position: e }) => /* @__PURE__ */ t(
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
function si({
  header: e,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Ae(), i = Je(), [c, d] = dt({ threshold: 1 }), [f, u] = dt({ threshold: 1 }), m = ce(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, p = () => a ? sl(a) && r ? Wn(
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
            !d && /* @__PURE__ */ t(sn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(sn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const xc = re(si), ii = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, on = {
  approved: {
    icon: Nn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: ke,
    type: "critical",
    size: "sm"
  }
}, oi = {
  icon: En,
  type: "neutral",
  size: "sm"
}, ci = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, di = (e) => e in on ? on[e] : oi;
function cn(e) {
  return ci[e ?? "neutral"] ?? 0;
}
const ui = ({
  title: e,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = ce(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[a], c = X(() => r.map((d) => {
    const f = di(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => cn(f.badge?.type) - cn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(Ge, { text: i, variant: ii[a] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Dn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, fi = ({ steps: e }) => {
  const a = ce().approvals.history, r = e.findIndex((l) => l.status === "pending");
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
          ui,
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
}, vc = re(
  J("OneApprovalHistory", fi)
), mi = {
  records: [],
  type: "flat",
  groups: []
}, dn = () => {
}, xt = (e, n) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : n ?? JSON.stringify(e), hi = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Rt]: n[Rt]
  })),
  groups: e.groups
}), un = (e, n, a) => e.source.idProvider?.(n, a) ?? xt(n, a), gi = (e, n) => {
  const a = e.data.records.every(
    (l, s) => un(e, l, s) === un(n, l, s)
  ), r = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return a && r;
}, pi = (e, n) => e !== null && e.data === n.data && gi(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore, bi = (e, n, a) => e.records.length === n.records.length && e.records.every(
  (r, l) => a(r, l) === a(n.records[l], l)
), xi = (e, n, a) => {
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
}, fn = (e, n) => {
  const a = e.paginationInfo, r = n.paginationInfo;
  return a?.type === "pages" || r?.type === "pages" ? a?.type !== "pages" || r?.type !== "pages" || a.currentPage !== r.currentPage : !1;
}, We = (e) => ({
  data: hi(e.data),
  paginationInfo: e.paginationInfo
});
function wc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: a,
  idProvider: r,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = O(0), [u, m] = O(0), [h, p] = O(0), g = c === "manual" ? i : c === "session" ? d : null, [x, y] = O({
    state: null,
    version: 0
  }), [C, E] = O(null), [R, D] = O(0), _ = $(g), L = $(u), W = $(null), T = $(
    null
  ), I = $(
    null
  ), v = x.state, k = x.version, A = H(() => {
    I.current !== null && (clearTimeout(I.current), I.current = null);
  }, []), U = H(
    (S) => {
      A(), I.current = setTimeout(() => {
        I.current = null;
        const B = W.current;
        !B || B.key !== S || (B.canUseCurrentData = !0, D((Y) => Y + 1));
      }, 0);
    },
    [A]
  ), w = H(
    (S) => {
      y((B) => S === null ? B.state === null ? B : { state: null, version: B.version + 1 } : pi(B.state, S) ? B : { state: S, version: B.version + 1 });
    },
    []
  ), F = v?.data ?? mi, z = H(() => {
    T.current = null, m((S) => S + 1);
  }, []), K = !!(T.current && C && v && !v.isLoading && !v.isLoadingMore && (fn(C, v) || v.data.records.length > C.data.records.length));
  j(() => A, [A]), j(() => {
    if (!v || g == null) {
      W.current = null, T.current = null, A(), E(null), _.current = g, L.current = u;
      return;
    }
    if (L.current !== u) {
      if (v.isLoading || v.isLoadingMore) return;
      L.current = u, W.current = null, T.current = null, A(), E(We(v));
      return;
    }
    const S = _.current !== g;
    if (_.current = g, S) {
      W.current = {
        key: g,
        requestedAtVersion: k,
        canUseCurrentData: !1
      }, U(g);
      return;
    }
    const B = T.current;
    if (B) {
      if (v.isLoading || v.isLoadingMore) {
        B.sawLoading = !0;
        return;
      }
      if (C && (fn(C, v) || v.data.records.length > C.data.records.length)) {
        T.current = null, E(We(v));
        return;
      }
      (B.sawLoading || k > B.requestedAtVersion) && (T.current = null);
    }
    if (v.isLoading || v.isLoadingMore)
      return;
    const Y = W.current?.key === g ? W.current : null;
    if (Y) {
      const M = r ?? v.source.idProvider ?? xt, ne = k > Y.requestedAtVersion, Z = C ? !bi(
        v.data,
        C.data,
        M
      ) : !0;
      if (!Y.canUseCurrentData && !ne && !Z || !Y.canUseCurrentData && ne && !Z)
        return;
      W.current = null, A(), E(We(v));
      return;
    }
    E((M) => {
      if (!M)
        return v.data.records.length === 0 ? M : We(v);
      const ne = r ?? v.source.idProvider ?? xt, Z = xi(
        M.data,
        v.data,
        ne
      );
      return v.data.records.length <= M.data.records.length ? Z === M.data ? M : {
        ...M,
        data: Z
      } : Z === M.data ? M : {
        ...M,
        data: Z
      };
    });
  }, [
    A,
    v,
    k,
    g,
    r,
    u,
    U,
    C,
    R
  ]);
  const le = K ? v?.data ?? F : C?.data ?? F, ae = K ? v?.paginationInfo ?? null : C?.paginationInfo ?? v?.paginationInfo ?? null, N = fl({
    dataSource: v?.source ?? {},
    data: le,
    paginationInfo: ae,
    setPage: v?.setPage ?? dn,
    loadMore: v?.loadMore ?? dn,
    isLoading: !!(v?.isLoading || v?.isLoadingMore),
    idProvider: r,
    itemUrl: l ?? v?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: a
  }), ue = H(() => {
    g == null || C == null || (T.current = {
      requestedAtVersion: k,
      sawLoading: !1
    });
  }, [k, g, C]), pe = H(() => {
    N.hasNext && N.nextItem === null && !N.isNavigating && ue(), N.goToNext();
  }, [N, ue]), fe = H(() => {
    N.hasPrevious && N.previousItem === null && !N.isNavigating && ue(), N.goToPrevious();
  }, [N, ue]), De = H(
    (S) => {
      T.current = null, c === "session" && f((B) => B + 1), N.setActiveItemId(S);
    },
    [c, N]
  ), Pe = H(() => {
    W.current = null, T.current = null, A(), E(null), c === "session" && f((S) => S + 1), p((S) => S + 1), N.setActiveItemId(null);
  }, [A, c, N]), Re = X(() => !N.activeItem || N.activeIndex < 0 ? null : {
    activeItemId: N.activeItemId,
    activeItem: N.activeItem,
    activeItemUrl: N.activeItemUrl,
    currentIndex: N.absoluteIndex ?? N.activeIndex,
    totalCount: N.totalItems ?? N.loadedItemsCount,
    previousItem: N.previousItem,
    nextItem: N.nextItem,
    canGoPrevious: N.hasPrevious && !N.isNavigating,
    canGoNext: N.hasNext && !N.isNavigating,
    goToPrevious: fe,
    goToNext: pe,
    isNavigating: N.isNavigating,
    previousItemUrl: N.previousItemUrl,
    nextItemUrl: N.nextItemUrl
  }, [pe, fe, N]);
  return X(
    () => ({
      ...N,
      goToNext: pe,
      goToPrevious: fe,
      isReady: v !== null,
      controls: Re,
      openItem: De,
      closeItem: Pe,
      resetSnapshot: z,
      [Br]: w,
      [zr]: h
    }),
    [
      N,
      v,
      Re,
      pe,
      fe,
      De,
      Pe,
      h,
      z,
      w
    ]
  );
}
const vi = (e) => e, wi = (e) => String(e), _e = (e, n) => e === n, yi = ({
  routeId: e
}) => e ?? null, yc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: a = vi,
  formatItemId: r = wi,
  onRouteIdChange: l
}) => {
  const [s, i] = O(
    () => yi({ routeId: n })
  ), c = $(null), d = $(void 0), f = $(null), u = $(null), m = $(null), h = $(
    e?.activeItemId ?? null
  ), p = $(e), g = $(
    zt(e)
  ), x = $(/* @__PURE__ */ new Set());
  j(() => {
    const C = p.current !== e;
    p.current = e;
    const E = zt(e), R = E !== void 0 && g.current !== E;
    g.current = E;
    const D = d.current !== (n ?? null);
    if (d.current = n ?? null, D && f.current !== n && (f.current = null), n == null) {
      c.current = null, u.current = null, f.current = null, x.current.clear(), i(null);
      const W = e?.activeItemId ?? null;
      W == null ? m.current = null : _e(m.current, W) || (m.current = W, e?.closeItem());
      return;
    }
    const _ = a(n);
    if (!e) {
      D && i(n);
      return;
    }
    if (x.current.has(n)) {
      if (!_e(e.activeItemId ?? null, _)) {
        f.current = n;
        return;
      }
      x.current.clear(), f.current = null, c.current = n, u.current = null, i(n);
      return;
    }
    f.current !== n && (D && i(n), !(c.current === n && (!C || e.activeItemId != null || R)) && (m.current = null, c.current = n, u.current = _e(
      e.activeItemId ?? null,
      _
    ) ? null : _, e.openItem(_)));
  }, [e, a, n]), j(() => {
    if (n == null) return;
    const C = e?.activeItemId ?? null;
    if (_e(C, h.current)) return;
    if (h.current = C, C == null) {
      if (u.current != null) return;
      u.current = null, x.current.clear(), f.current = n, c.current = null, i(null), l?.(null, null);
      return;
    }
    const E = u.current;
    if (E != null) {
      _e(C, E) && (u.current = null);
      return;
    }
    const R = r(C);
    R !== s && (x.current.add(R), i(R), l?.(R, C));
  }, [
    s,
    r,
    e?.activeItemId,
    l,
    n
  ]);
  const y = n == null ? null : s;
  return {
    activeRouteId: y,
    activeItemId: y == null ? null : e?.activeItemId ?? null,
    controls: y == null ? null : e?.controls ?? null
  };
}, Ot = {
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
}, Ni = ve({
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
      ...Ot
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Ci = se.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(Ni({ gap: a, tileSize: l }), n),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), Ii = ve({
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
}), ca = q(function({
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
  ...g
}, x) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        Ii({
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
      ...g
    }
  );
}), Si = ve({
  base: "flex-row",
  variants: {
    gap: {
      ...Ot
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), ki = se.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, s) {
  return /* @__PURE__ */ t(
    ca,
    {
      className: b(Si({ gap: a, wrap: r }), n),
      ref: s,
      ...l
    }
  );
}), Ai = ve({
  base: "flex-col",
  variants: {
    gap: {
      ...Ot
    }
  },
  defaultVariants: {}
}), Li = q(function({ className: n, gap: a, children: r, ...l }, s) {
  return /* @__PURE__ */ t(
    ca,
    {
      className: b(Ai({ gap: a }), n),
      ref: s,
      ...l,
      children: r
    }
  );
}), Nc = me(
  {
    name: "Stack",
    type: "layout"
  },
  Li
), Cc = me(
  {
    name: "Split",
    type: "layout"
  },
  ki
), Ic = me(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ci
), Fi = ({ children: e }) => {
  const { enabled: n } = Pn();
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
}, _i = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ei = q(function({ header: n, children: a, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Pn();
  j(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (p) => !!p && !(se.isValidElement(p) && p.type === se.Fragment && se.Children.count(p.props.children) === 0), h = () => {
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
              n.title && /* @__PURE__ */ t(St, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(_i, {}),
                /* @__PURE__ */ t(Rn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(we, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: zn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Xe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(Bn, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(Ge, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                $r,
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
            /* @__PURE__ */ t(Fi, { children: /* @__PURE__ */ t(Mr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              V,
              {
                icon: f ? Wr : jr,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(kt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((p, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, g)) }),
          se.Children.toArray(a).filter(m).map((p, g) => /* @__PURE__ */ o(se.Fragment, { children: [
            g > 0 && /* @__PURE__ */ t(Vr, { bare: !0 }),
            p
          ] }, g))
        ] }),
        r && /* @__PURE__ */ t(Ur, { children: /* @__PURE__ */ t(V, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), Oi = ve({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Ti = q(
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
                n?.title ? /* @__PURE__ */ t(St, { children: n.title }) : /* @__PURE__ */ t(P, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Rn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            kt,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && Oi({ height: a })),
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
), Ie = re(
  J("Widget", te(Ei, Ti))
), oe = Object.assign(
  q(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ t(Ie, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ie.Skeleton
  }
), Di = te(
  q(function({ canBeBlurred: n, ...a }, r) {
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
      oe,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ t(ml, { ...s, canBeBlurred: n })
      }
    );
  }),
  oe.Skeleton
), Pi = J(
  "AreaChartWidget",
  Di
), Ri = q(function(n, a) {
  return /* @__PURE__ */ t(
    oe,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ t(hl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), zi = J(
  "BarChartWidget",
  te(Ri, oe.Skeleton)
), Bi = te(
  q(
    function(n, a) {
      return /* @__PURE__ */ t(
        oe,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(gl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  oe.Skeleton
), $i = J(
  "LineChartWidget",
  Bi
), Mi = te(
  q(
    function(n, a) {
      return /* @__PURE__ */ t(
        oe,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(pl, { ...n.chart })
        }
      );
    }
  ),
  oe.Skeleton
), Wi = J(
  "PieChartWidget",
  Mi
), ji = te(
  q(
    function(n, a) {
      return /* @__PURE__ */ t(oe, { ref: a, ...n, chart: null });
    }
  ),
  oe.Skeleton
), Vi = J(
  "SummariesWidget",
  ji
), Ui = te(
  q(
    function(n, a) {
      return /* @__PURE__ */ t(
        oe,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ t(bl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  oe.Skeleton
), Gi = J(
  "VerticalBarChartWidget",
  Ui
), Sc = me(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Pi
), kc = me(
  {
    name: "BarChartWidget",
    type: "info"
  },
  zi
), Ac = me(
  {
    name: "LineChartWidget",
    type: "info"
  },
  $i
), Lc = me(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Wi
), Fc = me(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Gi
), _c = me(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Vi
), Hi = (e, n) => /* @__PURE__ */ o(
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
), Ki = q(Hi), qi = (e, n) => /* @__PURE__ */ o(
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
), Yi = q(qi), Zi = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Xi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Ji = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Qi = {
  "line-chart": "default",
  "bar-chart": "promote"
}, eo = q(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Zi[i], f = Xi[i], u = Ji[i], m = Qi[i];
    return /* @__PURE__ */ o(
      Ct,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(It, { className: "-mt-0.5", children: /* @__PURE__ */ t(St, { children: n }) }),
          /* @__PURE__ */ o(kt, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Ki, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Yi, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ t(
                V,
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
), Ec = re(
  J("ChartWidgetEmptyState", eo)
);
function to(e, n) {
  const a = $(null), r = $(null), [l, s] = O({
    visibleItems: [],
    overflowItems: []
  });
  Gr({
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
      const p = u[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), d = H(
    (u, m) => {
      let h = 0, p = 0;
      for (let g = 0; g < u.length; g++) {
        const x = p + u[g];
        if (x > m + 30) break;
        p = x, p = i(
          p,
          g,
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
    } : (p) => p.visibleItems.length === h && p.overflowItems.length === e.length - h ? p : {
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
const at = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = to(n, l);
  return j(() => {
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
const Oc = ({
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
) : null, no = ({ onClick: e, children: n }) => {
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
function Tc({
  label: e,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ t(no, { onClick: l, children: /* @__PURE__ */ o(
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
const ao = q(
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
), Dc = q(
  function({ items: n }, a) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          ao,
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
), ro = ({
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
function Pc({
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
    ro,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Hr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Kr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Dn,
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
const lo = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
function mn({
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
  return /* @__PURE__ */ o(lo, { onClick: (c) => {
    c.preventDefault(), r?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(Ln, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const so = ({ onClick: e, className: n, children: a }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: a }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: a });
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
  return /* @__PURE__ */ o(so, { onClick: (h) => {
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
      a && /* @__PURE__ */ t(Bn, { ...a }),
      r && /* @__PURE__ */ t(Ee, { ...r }),
      !!l && /* @__PURE__ */ t(Xe, { value: l })
    ] })
  ] });
}
function Rc({
  items: e,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(mn, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    at,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(mn, { ...s, onClick: a }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function zc({
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
const io = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Bc = q(
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
              children: /* @__PURE__ */ t(G, { icon: zn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ t("div", { children: a })
      ] }),
      l.map((i) => /* @__PURE__ */ t(io, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function $c({
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
      xl,
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
const da = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, oo = ({
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
    const u = da(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), g = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${g}` : `${n.overtime} ${g}`;
  })(), f = ye[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, ot = "--:--", co = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: ye.empty
    };
  if (!n)
    return {
      value: 1,
      color: ye.empty
    };
}, uo = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = da(
    n,
    a
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : co(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, x = (h - p) / s;
        return c -= p, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: p / s + x,
            color: ye.overtime
          }
        ] : [
          ...u,
          {
            value: p / s,
            color: ye.overtime
          },
          {
            value: x,
            color: ye[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: ye.empty
  }), f;
}, fo = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = r ? Wt(r) : ot, i = n === void 0 || n > 0 ? ot : l ? Wt(l.to) : ot, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: i,
    time: m
  };
}, ye = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function mo({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = uo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: s, time: i } = fo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(vl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      wl,
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
          qr,
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
function ho({
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
        /* @__PURE__ */ t(G, { icon: Yr })
      ]
    }
  );
}
function Mc({
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
  canShowBreakButton: p = !0,
  canSeeGraph: g = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: C = !0,
  projectSelectorElement: E,
  breakTypeName: R
}) {
  const { status: D, statusText: _, subtitle: L, statusColor: W } = oo({
    data: a,
    labels: r,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: x
  }), T = D === "clocked-out", I = m?.map((N) => ({
    value: N.id,
    label: N.duration ? `${N.name} · ${N.duration}` : N.name,
    description: N.description,
    tag: N.isPaid ? r.paid : r.unpaid
  })) ?? [], [v, k] = O(!1), A = () => {
    if (I.length > 1)
      v || k(!0);
    else {
      const N = I?.[0]?.value;
      u?.(N);
    }
  }, U = (N) => {
    h?.(N), k(!1), u?.(N);
  }, w = T && s.length && !c && i, F = s.find((N) => N.id === l), z = s.map((N) => ({
    value: N.id,
    label: N.name,
    icon: N.icon
  })), K = D === "break", [le, ae] = O(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: _ }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                ee.div,
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
          L && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            V,
            {
              onClick: d,
              label: r.clockIn,
              icon: Bt
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(Q, { children: [
            p && /* @__PURE__ */ t(Q, { children: I.length > 1 && h ? /* @__PURE__ */ t(
              He,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: I,
                onChange: U,
                open: v,
                onOpenChange: k,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  V,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: $t,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              V,
              {
                onClick: A,
                label: r.break,
                variant: "neutral",
                icon: $t,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Mt
              }
            )
          ] }),
          D === "break" && /* @__PURE__ */ o(Q, { children: [
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Mt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              V,
              {
                onClick: d,
                label: r.resume,
                icon: Bt
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ t(
        mo,
        {
          data: a,
          trackedMinutes: e,
          remainingMinutes: x ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: w ? /* @__PURE__ */ o(Q, { children: [
      /* @__PURE__ */ t(
        He,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: z,
          onChange: y,
          open: le,
          onOpenChange: ae,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            ho,
            {
              text: F?.name,
              placeholder: r.selectLocation,
              icon: F?.icon
            }
          ) })
        }
      ),
      C && E
    ] }) : /* @__PURE__ */ o(Q, { children: [
      i && F && /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(Ee, { text: F.name, icon: F.icon }) }),
      C && E,
      K && R && /* @__PURE__ */ t(Ee, { text: R })
    ] }) })
  ] }) });
}
const go = {
  done: Jr,
  "in-progress": Xr,
  todo: Zr
}, po = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function bo({
  task: e,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(e);
  }, s = X(() => {
    if (!r)
      return go[n];
  }, [n, r]);
  return /* @__PURE__ */ t(
    vt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: po[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Qr
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function Wc({
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
    ).map(({ id: u, text: m, badge: h, counter: p }) => ({
      id: u,
      text: m,
      badge: h,
      counter: p,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ t(
    bo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var xo = Object.defineProperty, vo = Object.defineProperties, wo = Object.getOwnPropertyDescriptors, Ye = Object.getOwnPropertySymbols, ua = Object.prototype.hasOwnProperty, fa = Object.prototype.propertyIsEnumerable, hn = (e, n, a) => n in e ? xo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, ie = (e, n) => {
  for (var a in n || (n = {})) ua.call(n, a) && hn(e, a, n[a]);
  if (Ye) for (var a of Ye(n)) fa.call(n, a) && hn(e, a, n[a]);
  return e;
}, rt = (e, n) => vo(e, wo(n)), yo = (e, n) => {
  var a = {};
  for (var r in e) ua.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && Ye) for (var r of Ye(e)) n.indexOf(r) < 0 && fa.call(e, r) && (a[r] = e[r]);
  return a;
}, No = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Co = ({ spotsList: e, usedSpot: n }) => e.some((a) => a !== n && n.left === a.left), Io = ({ position: e, spot: n, stone: a }) => {
  if (e.left > n.left && n.right >= e.left && e.top + a.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let r = ie({}, n);
    return r.right = e.left, r;
  }
  return null;
}, So = ({ position: e, stone: n, spot: a }) => {
  if (e.left + n.width > a.left && e.top >= a.top) {
    if (a.bottom && a.bottom < e.top || a.right < e.left) return a;
    let r = ie({}, a);
    return r.bottom = e.top, r;
  }
  return null;
}, ko = ({ stone: e, position: n, spotsList: a, optimalSpot: r }) => {
  let l = ie({}, r);
  return l.left = n.left + e.width, No(l) || Co({ usedSpot: l, spotsList: a }) ? null : l;
}, Ao = ({ spots: e, position: n, optimalSpot: a, stone: r }) => e.map((l, s, i) => {
  if (l === a) return ko({ stone: r, position: n, optimalSpot: a, spotsList: i });
  let c = Io({ position: n, spot: l, stone: r });
  return c || So({ position: n, stone: r, spot: l }) || l;
});
function Lo(e, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (e(l)) return l;
  }
  return null;
}
var Fo = (e, n) => n.filter(e), _o = (e, n) => [...n].sort(e), Eo = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Oo = (e) => _o(Eo, e), To = ({ availableSpots: e, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, Po = ({ availableSpots: e, stone: n }) => Lo((a) => Do(a, n), e);
function Ro({ stone: e, availableSpots: n, containerSize: a }) {
  let r = Po({ availableSpots: n, stone: e }), l = { left: r.left, top: r.top }, s = To({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: e, containerSize: a }), i = [...n, s], c = Ao({ spots: i, position: l, optimalSpot: r, stone: e });
  return i = [...Fo(Boolean, c)], i = Oo(i), { position: l, availableSpots: i };
}
var zo = ({ stones: e, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return a;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = Ro({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, Bo = (e) => e.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), $o = ({ boxesRefs: e, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = O({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = Bo(e.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let g = zo({ stones: h, containerSize: p });
    f(rt(ie({}, g), { stones: h }));
  }, [a, e, n, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, Mo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Wo = ({ transition: e, transitionDuration: n }) => e ? { transition: Mo(n)[e] } : null, jo = (e) => e ? rt(ie({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Vo = ({ style: e, position: n, transition: a, transitionDuration: r }) => ie(ie(rt(ie({}, e), { position: "absolute" }), jo(n)), Wo({ transition: a, transitionDuration: r }));
function Uo(e, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, l);
    }, n);
  };
}
var Go = () => {
  let [e, n] = O(), a = $(Uo(n, 300));
  return j(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, Ho = (e) => {
  let [n, a] = O(null);
  return j(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) a(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), n;
}, Ko = (e) => {
  var n = e, { children: a, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = yo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = $([]), f = $(null), u = Go(), m = Ho(f), { positions: h, containerHeight: p } = $o({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), g = ie({ minHeight: p ?? 0, position: "relative" }, r);
  return t("div", rt(ie({ ref: f, style: g }, c), { children: jn.map(a, (x, y) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let C = { style: Vo({ style: x.props.style, position: h[y], transition: l, transitionDuration: s }), ref: (E) => d.current[y] = E };
    return Wn(x, ie(ie({}, x.props), C));
  }) }));
};
const qo = { sm: 340, md: 480, lg: 640 }, gn = q(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = qo[a], [s, i] = O(), c = jn.toArray(n), d = $(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Ko, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Yo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], jc = te(gn, () => /* @__PURE__ */ t($n, { children: /* @__PURE__ */ t(gn, { children: Yo.map((e, n) => /* @__PURE__ */ t(Ie.Skeleton, { height: e }, n)) }) })), pn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Vc = te(
  q(function({ children: n }, a) {
    return /* @__PURE__ */ t(Ze, { ref: a, showBar: !1, children: /* @__PURE__ */ t(pn, { children: n }) });
  }),
  () => /* @__PURE__ */ t($n, { orientation: "horizontal", children: /* @__PURE__ */ o(pn, { children: [
    /* @__PURE__ */ t(Ie.Skeleton, {}),
    /* @__PURE__ */ t(Ie.Skeleton, {}),
    /* @__PURE__ */ t(Ie.Skeleton, {})
  ] }) })
);
function Zo({
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
    el,
    {
      title: e,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Uc = re(
  J("WidgetEmptyState", Zo)
), ma = q(
  ({ title: e, children: n }, a) => (tl(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
ma.displayName = "WidgetSection";
const Gc = re(
  J("WidgetSection", ma)
), Hc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = nl(), s = window.location.pathname, i = X(() => n?.length ? n.includes(s) : a?.length ? !a.includes(s) : !0, [s, n, a]), c = X(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [e, n, a]);
  return i ? r : (l && console.error(c), null);
}, Kc = re(
  me(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ze
  )
);
export {
  lc as ActivityItemList,
  ys as ActivityItemListSkeleton,
  ql as AiPromotionChat,
  Yl as AiPromotionChatProvider,
  dc as ApplicationFrame,
  Vd as AreaChart,
  Sc as AreaChartWidget,
  Ic as AutoGrid,
  Ar as Badge,
  Ud as BarChart,
  kc as BarChartWidget,
  ws as BaseActivityItemList,
  Gd as BaseBanner,
  ks as BaseCelebration,
  Rs as BaseCommunityPost,
  Zc as BaseTabs,
  Xc as BreadcrumbSelect,
  kl as Breadcrumbs,
  bt as CalendarEvent,
  Oc as CalendarEventList,
  Jc as CardSelectableContainer,
  il as Carousel,
  Hd as CategoryBarChart,
  $c as CategoryBarSection,
  sc as Celebration,
  As as CelebrationSkeleton,
  Ec as ChartWidgetEmptyState,
  Qc as Chip,
  Mc as ClockInControls,
  Kd as ComboChart,
  oc as CommunityPost,
  zs as CommunityPostSkeleton,
  Ys as CompanySelector,
  Xe as Counter,
  jc as Dashboard,
  uc as DaytimePage,
  ed as DetailsItem,
  td as DetailsItemsList,
  qd as Dialog,
  Se as Dropdown,
  rc as EntitySelect,
  nd as F0ActionBar,
  Yd as F0AiBanner,
  Ln as F0AvatarModule,
  nc as F0Callout,
  ad as F0TableOfContent,
  ac as F0VersionHistory,
  rd as F1SearchBox,
  ld as FILE_TYPES,
  sd as FileItem,
  ic as HighlightBanner,
  Dc as IndicatorsList,
  id as Input,
  od as Item,
  cd as ItemSectionHeader,
  Zd as LineChart,
  Ac as LineChartWidget,
  pc as Menu,
  dd as MobileDropdown,
  Xd as NotesTextEditor,
  Jd as NotesTextEditorPatchTargetNotFoundError,
  Qd as NotesTextEditorSkeleton,
  eu as NotesTextEditorUnsupportedPatchTypeError,
  ud as NumberInput,
  fc as OmniButton,
  vc as OneApprovalHistory,
  fd as OneCalendar,
  md as OneCalendarInternal,
  hd as OneDataCollection,
  gd as OneDateNavigator,
  el as OneEmptyState,
  pd as OnePagination,
  cc as OnePersonListItem,
  Hc as OneRestrictComponent,
  mc as Page,
  tc as PageHeader,
  tu as PieChart,
  Lc as PieChartWidget,
  Fi as PrivateBox,
  nu as ProgressBarChart,
  au as RadarChart,
  _s as Reactions,
  bd as ResourceHeader,
  pr as RichTextDisplay,
  xd as RichTextEditor,
  Kc as ScrollArea,
  bc as SearchBar,
  vd as SectionHeader,
  He as Select,
  Rr as Shortcut,
  xc as Sidebar,
  hc as SidebarFooter,
  gc as SidebarHeader,
  yn as Spinner,
  Cc as Split,
  Nc as Stack,
  _c as SummariesWidget,
  wd as Switch,
  yd as Tabs,
  Nd as TabsSkeleton,
  Wc as TasksList,
  Cd as Textarea,
  Id as ToggleGroup,
  Sd as ToggleGroupItem,
  we as Tooltip,
  Bc as TwoColumnsList,
  ru as VerticalBarChart,
  Fc as VerticalBarChartWidget,
  ht as VirtualList,
  kd as WeekStartDay,
  Ad as Weekdays,
  Ie as Widget,
  Pc as WidgetAvatarsListItem,
  Uc as WidgetEmptyState,
  Tc as WidgetHighlightButton,
  Rc as WidgetInboxList,
  mn as WidgetInboxListItem,
  Gc as WidgetSection,
  zc as WidgetSimpleList,
  vt as WidgetSimpleListItem,
  Vc as WidgetStrip,
  lu as _RadarChart,
  Ld as actionBarStatuses,
  Fd as chipVariants,
  _d as downloadAsCSV,
  Ed as generateCSVContent,
  Od as getGranularityDefinition,
  Td as getGranularityDefinitions,
  Dd as getGranularitySimpleDefinition,
  Pd as granularityDefinitions,
  Rd as modules,
  su as predefinedPresets,
  zd as rangeSeparator,
  iu as selectSizes,
  et as useAiPromotionChat,
  Bd as useDataCollectionData,
  wc as useDataCollectionItemNavigation,
  yc as useDataCollectionItemNavigationRouteSync,
  $d as useDataCollectionSource,
  Md as useExportAction,
  Wd as useInfiniteScrollPagination,
  Ae as useSidebar
};
