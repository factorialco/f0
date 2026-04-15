import { a6 as zn, a7 as Pn, a8 as Rn, a9 as $n, aa as zt, ab as Re, ac as Bn, ad as xt, ae as ot, af as je, L as h, R as K, M as be, u as oe, ag as Wn, ah as Mn, ai as jn, aj as Vn, ak as Gn, a2 as le, al as Hn, Q as ke, am as Un, an as Kn, ao as B, ap as qn, aq as Yn, J as Oe, ar as ma, as as Jn, at as Zn, N as M, au as vt, a5 as _, av as fe, aw as Xn, ax as Qn, ay as er, az as tr, aA as ar, aB as Se, aC as ha, aD as nr, aE as ve, aF as Ee, aG as rr, aH as yt, k as pa, aI as Ce, aJ as lr, aK as ga, a3 as ae, aL as $, O as ba, aM as xa, aN as sr, aO as wt, aP as pe, a4 as ee, aQ as ir, aR as or, aS as cr, aT as dr, T as ge, aU as Ke, aV as ur, aW as fr, aX as mr, aY as hr, aZ as qe, a_ as va, a$ as pr, b0 as gr, b1 as br, b2 as Ve, b3 as xr, b4 as vr, b5 as yr, b6 as wr, b7 as Nr, b8 as Cr, b9 as Ir, ba as kr, bb as Sr, bc as Ar, bd as ya, be as wa, bf as Na, bg as ct, bh as dt, bi as Ca, bj as Lr, bk as Fr, bl as Tr, bm as _r, P as Ye, bn as Nt, bo as Ia, bp as Er, bq as ka, br as Dr, bs as Or, bt as zr, bu as Ie, bv as Pr, bw as $e, bx as Pt, by as ut, bz as Rr, bA as $r, bB as Br, X as Sa, W as Wr, bC as Aa, Y as Ct, Z as Mr, bD as jr, U as It, bE as Vr, a as Gr, c as Hr, bF as Ur, bG as La, bH as Kr, bI as qr, F as Yr, bJ as Fa, bK as Ta, bL as Jr, bM as Rt, bN as Zr, bO as Xr, bP as Qr, bQ as el, bR as _a, bS as tl, bT as al, bU as nl, bV as rl, bW as ll, bX as me, bY as kt, bZ as St, b_ as At, b$ as Ea, c0 as Lt, c1 as Da, c2 as sl, c3 as il, c4 as ol, c5 as cl, c6 as dl, c7 as ul, c8 as fl, c9 as ml, ca as hl, cb as pl, cc as gl, cd as $t, ce as Bt, cf as Wt, cg as bl, ch as xl, ci as vl, cj as yl, ck as Oa, cl as wl, cm as Nl, cn as Cl } from "./F0AiChat-DXLRzspJ.js";
import { cx as Ld, cw as Fd, cJ as Td, cp as _d, cq as Ed, cT as Dd, cr as Od, cv as zd, cs as Pd, cF as Rd, cG as $d, cK as Bd, cR as Wd, cS as Md, ct as jd, cz as Vd, cy as Gd, cH as Hd, co as Ud, cI as Kd, cM as qd, cN as Yd, cE as Jd, cB as Zd, cD as Xd, cA as Qd, cu as eu, cC as tu, cO as au, cP as nu, cL as ru, cQ as lu } from "./F0AiChat-DXLRzspJ.js";
import { jsx as e, jsxs as o, Fragment as U } from "react/jsx-runtime";
import * as De from "react";
import re, { forwardRef as E, useRef as G, useTransition as Il, useState as T, useLayoutEffect as za, useContext as Je, createContext as Ft, useCallback as Q, useMemo as q, useEffect as j, useId as kl, memo as Pa, Fragment as Sl, isValidElement as Al, cloneElement as Ra, Children as $a } from "react";
import { C as Ll, P as Fl, g as Ba, c as Tl, a as Wa, F as ft, f as _l, b as El, u as Ma, A as Dl, B as Ol, L as zl, d as Pl, V as Rl, e as $l, h as Mt, i as Bl, j as Wl } from "./index-BkJwEWAZ.js";
import { m as iu, n as ou, k as cu, v as du, o as uu, t as fu, E as mu, l as hu, y as pu, M as gu, I as bu, z as xu, p as vu, G as yu, H as wu, N as Nu, J as Cu, q as Iu, s as ku, R as Su, x as Au, K as Lu, S as Fu, T as Tu, r as _u, _ as Eu, D as Du, w as Ou } from "./index-BkJwEWAZ.js";
const Ml = zn("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ja = E(({ className: t, items: a }, n) => /* @__PURE__ */ e(Pn, { ref: n, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(Rn, {}),
  /* @__PURE__ */ e($n, { items: a, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
ja.displayName = "CollapsedBreadcrumbItem";
const Tt = 50, jl = 120, Ge = 8;
function Vl(t, a) {
  const n = a.length;
  if (n <= 2) return n;
  const r = a[0];
  let l = t - r - Ge, s = 0, i = 1;
  for (let c = n - 1; c > 0; c--) {
    const d = a[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < n)
    for (l -= Tt; l < 0 && i > 1; )
      l += a[s], s++, i--;
  return Math.max(2, i);
}
function jt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Ge;
    default:
      return t[0] + Tt + t[t.length - 1] + Ge;
  }
}
function Gl(t, a) {
  return jl * t + (a ? Tt : 0) + Ge;
}
function Hl(t, a, n = []) {
  if (!t) {
    const i = Math.min(a.length, 2);
    return {
      visibleCount: i,
      headItem: a[0] ?? null,
      tailItems: a.slice(a.length - 1),
      collapsedItems: a.slice(1, a.length - 1),
      isOnly: a.length === 1,
      minWidth: Gl(
        i,
        a.length > 2
      )
    };
  }
  const r = a.length <= 2, l = n.map((i) => i.clientWidth);
  if (r)
    return {
      visibleCount: a.length,
      headItem: a[0] ?? null,
      tailItems: a.slice(1),
      collapsedItems: [],
      isOnly: a.length === 1,
      minWidth: jt(l)
    };
  const s = Vl(t, l);
  return {
    visibleCount: s,
    headItem: a[0] || null,
    tailItems: a.slice(
      Math.max(1, a.length - (s - 1))
    ),
    collapsedItems: a.slice(
      1,
      a.length - (s - 1)
    ),
    isOnly: a.length === 1,
    minWidth: jt(l)
  };
}
function Ul({ breadcrumbs: t, append: a }) {
  const n = G(null), r = G(null), [, l] = Il(), [s, i] = T(null), c = (s?.collapsedItems || []).length > 0;
  return za(() => {
    const d = n.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const p = n.current?.clientWidth ?? null, b = Array.from(f.children);
      l(() => {
        const g = Hl(
          p,
          t,
          b
        );
        i(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, a]), !t.length || s && !s.headItem ? /* @__PURE__ */ e(zt, { ref: n, className: "w-full" }) : /* @__PURE__ */ o(
    zt,
    {
      ref: n,
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
              Re,
              {
                item: d,
                isLast: f === t.length - 1,
                isFirst: f === 0,
                children: f === t.length - 1 ? a : void 0
              },
              d.id
            ))
          }
        ),
        s && s.headItem && /* @__PURE__ */ o(Bn, { children: [
          /* @__PURE__ */ e(
            Re,
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
              ja,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ e(
              Re,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? a : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(U, { children: s.tailItems.map((d, f) => /* @__PURE__ */ e(
            Re,
            {
              item: d,
              isLast: f === s.tailItems.length - 1,
              isFirst: !1,
              children: f === s.tailItems.length - 1 ? a : void 0
            },
            d.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${t.at(-1)?.id ?? 0}`
  );
}
const Vt = "one_sidebar_locked", Va = Ft(void 0);
function Ae() {
  const t = Je(Va);
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
function Kl({ children: t }) {
  const { currentPath: a } = xt(), [n, r] = T(!1), [l, s] = T(!1), i = n ? je.xl : je.md, c = ot(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = T(() => {
    const L = localStorage.getItem(Vt);
    return L !== null ? !!L : !0;
  }), [u, m] = T(!1), [p, b] = T(
    null
  ), g = Q(
    ({ isInvokedByUser: L } = {
      isInvokedByUser: !0
    }) => {
      s(L ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), x = Q(
    (L) => {
      c || (L.clientX < 32 && m(!0), L.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return j(() => {
    m(!1);
  }, [a]), j(() => {
    l && localStorage.setItem(Vt, d ? "1" : "");
  }, [d, l]), j(() => () => {
    b(y);
  }, [y]), /* @__PURE__ */ e(
    Va.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: y,
        toggleSidebar: g,
        prevSidebarState: p,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: x, className: "h-screen w-screen", children: t })
    }
  );
}
const ql = be({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Gt = [
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
], Yl = ({
  spin: t = !1,
  size: a = "md",
  background: n,
  hover: r = !1,
  ...l
}, s) => {
  const i = kl(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: p,
    ...b
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(ql({ size: a }), p),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        K.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: s,
          animate: {
            "--gradient-angle": ["0deg", "360deg"]
          },
          transition: n ? void 0 : {
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
          ...(({ style: g, ...x }) => x)(b),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Gt.map((g) => /* @__PURE__ */ e("clipPath", { id: `${i}-${g.id}`, children: /* @__PURE__ */ e("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${i}-circle)`, children: Gt.map((g) => /* @__PURE__ */ e(
              K.foreignObject,
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
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? g.delay : 0,
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
                    delay: t ? g.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${g.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: g.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ e(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "100%",
                      background: n ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
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
}, Ga = E(Yl), Ha = Ft(null), Jl = 15, Zl = ({ children: t, enabled: a, onShow: n, ...r }) => {
  const [l, s] = T(a), [i, c] = T(!1), [d, f] = T(!0), [u, m] = T(
    Jl
  ), p = G(null), b = (x) => {
    p.current = x;
  }, g = () => {
    p.current && p.current();
  };
  return j(() => {
    s(a);
  }, [a]), j(() => {
    if (i && n?.(), !i) {
      const x = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!x);
    }
  }, [i, n]), /* @__PURE__ */ e(
    Ha.Provider,
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
        setClearFunction: b
      },
      children: t
    }
  );
}, we = () => {
};
function Ze() {
  const t = Je(Ha);
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
const Ua = ({
  className: t,
  disabled: a
}) => {
  const { enabled: n, setOpen: r, open: l } = Ze(), s = oe(), [i, c] = T(!1);
  return n ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(Wn, { children: /* @__PURE__ */ o(Mn, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(jn, { asChild: !0, children: /* @__PURE__ */ e(
      K.div,
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
          Vn,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: h(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              a && "cursor-not-allowed opacity-50",
              le(),
              t
            ),
            disabled: a,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Gn,
              {
                className: h(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Ga,
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
    !l && /* @__PURE__ */ e(Hn, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Ht = K.create(B), Ut = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Xl = ({
  isMarked: t,
  onChange: a,
  label: n
}) => {
  const [r, l] = T(!1), s = () => {
    l(!0), a(!t);
  };
  return /* @__PURE__ */ e(ke, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: h(
        "flex h-6 w-6 items-center justify-center rounded",
        le()
      ),
      onClick: s,
      "aria-label": n,
      children: t ? /* @__PURE__ */ e(
        Ht,
        {
          size: "sm",
          icon: Un,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Ut,
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
        Ht,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Kn,
          className: "outline-none",
          variants: Ut,
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
}, Ql = ({
  currentModule: t,
  label: a,
  getUpdates: n,
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
  const [m, p] = T("idle"), [b, g] = T(null), [x, ...y] = b ?? [], [L, O] = T(!1);
  j(() => {
    g(null), p("idle");
  }, [t]);
  const W = Q(async () => {
    try {
      p("fetching");
      const D = await n();
      p("idle"), g(D);
    } catch {
      p("error");
    }
  }, [n]);
  return /* @__PURE__ */ o(
    qn,
    {
      open: L,
      onOpenChange: async (D) => {
        O(D), D && b === null && W(), i(D);
      },
      children: [
        /* @__PURE__ */ e(Yn, { asChild: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            variant: "outline",
            icon: ma,
            hideLabel: !0,
            label: a,
            pressed: L,
            append: f && /* @__PURE__ */ e(_t, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Jn, { children: /* @__PURE__ */ o(
          Zn,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(as, { title: a, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(ls, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && b !== null && b.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(ns, { ...l, buttonUrl: r }) }),
                m === "idle" && b !== null && b.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    es,
                    {
                      ...x,
                      onClick: d
                    }
                  ),
                  b.length > 1 && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: y.map((D, F) => /* @__PURE__ */ e(
                    ts,
                    {
                      ...D,
                      onClick: d
                    },
                    F
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  rs,
                  {
                    ...s,
                    onClick: () => {
                      W();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                ss,
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
}, es = ({
  title: t,
  href: a,
  mediaUrl: n,
  unread: r,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = n?.includes(".mp4");
  return /* @__PURE__ */ e(
    Xn,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        fe,
        {
          href: a,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: h(i, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ e("div", { className: "px-1 pt-1", children: c ? /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              "video",
              {
                src: n,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              Qn,
              {
                fetchPriority: "high",
                src: n,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ e("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ e("h3", { className: "font-medium", children: t }),
                /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: l })
              ] }),
              r && /* @__PURE__ */ e(_t, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, ts = ({
  title: t,
  href: a,
  updated: n,
  unread: r = !1,
  onClick: l
}) => {
  const s = h("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(er, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ e(
    fe,
    {
      href: a,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: h(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: n })
        ] }),
        r && /* @__PURE__ */ e(_t, { className: "mt-1.5" })
      ] })
    }
  ) });
}, as = ({
  title: t,
  url: a,
  onClick: n
}) => /* @__PURE__ */ o(
  "a",
  {
    href: a,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ e("h2", { className: "text-base font-medium", children: t }),
      /* @__PURE__ */ e(
        M,
        {
          variant: "outline",
          size: "sm",
          icon: vt,
          label: t,
          hideLabel: !0,
          onClick: n
        }
      )
    ]
  }
), Ka = ({
  icon: t,
  button: a,
  title: n,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        l
      ),
      children: t
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: n }),
    /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: r })
  ] }),
  a
] }) }), ns = ({
  title: t,
  buttonText: a,
  buttonUrl: n,
  description: r
}) => /* @__PURE__ */ e(
  Ka,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(B, { icon: ma, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(fe, { href: n, children: /* @__PURE__ */ e(M, { label: a }) })
  }
), rs = ({
  title: t,
  description: a,
  buttonText: n,
  onClick: r
}) => /* @__PURE__ */ e(
  Ka,
  {
    title: t,
    description: a,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(B, { icon: tr, size: "lg" }),
    button: /* @__PURE__ */ e(M, { variant: "outline", label: n, onClick: r })
  }
), ls = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(_, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(_, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(_, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(_, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(_, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), _t = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: h("size-2 rounded bg-f1-background-selected-bold", t)
  }
), ss = ({
  isVisible: t,
  onClose: a,
  crossSelling: n,
  onDropdownClose: r
}) => {
  const [l, s] = T(t);
  j(() => {
    s(t);
  }, [t]);
  const i = () => {
    s(!1), a && a();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e(ar, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: n?.sectionTitle }),
        a && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          M,
          {
            variant: "ghost",
            icon: Se,
            size: "sm",
            hideLabel: !0,
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        Ll,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: n?.products.map((d) => /* @__PURE__ */ e(
            Fl,
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
  icon: t,
  href: a,
  label: n,
  disabled: r
}) {
  const l = G(null);
  return /* @__PURE__ */ e(
    M,
    {
      href: a,
      title: n,
      "aria-label": n,
      disabled: r,
      ref: l,
      size: "sm",
      variant: "outline",
      label: n,
      icon: t,
      hideLabel: !0
    }
  );
}
function Oc({
  module: t,
  statusTag: a = void 0,
  breadcrumbs: n = [],
  actions: r = [],
  embedded: l = !1,
  navigation: s,
  productUpdates: i,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ae(), p = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...n
  ], b = a && Object.keys(a).length !== 0, g = n.length > 0, x = !l && r.length > 0, y = !l && !!i?.isVisible, L = p[p.length - 1], O = g ? p[p.length - 2] : null;
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(ke, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            K.div,
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
                  icon: ha
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: h(
                "flex flex-grow items-center gap-2",
                l && g && "justify-center"
              ),
              children: [
                l && g && O && !("loading" in O) && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(fe, { href: O.href, children: /* @__PURE__ */ e(
                  M,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: nr,
                    onClick: (W) => W.preventDefault()
                  }
                ) }) }),
                l && g ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in L ? /* @__PURE__ */ e(_, { className: "h-4 w-24" }) : L.label }) : /* @__PURE__ */ e(
                  Ul,
                  {
                    breadcrumbs: p,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      Xl,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  p[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !l && b && /* @__PURE__ */ e("div", { children: a.tooltip ? /* @__PURE__ */ e(ve, { label: a.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ee,
            {
              text: a.text,
              variant: a.variant,
              additionalAccessibleText: a.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(Ee, { text: a.text, variant: a.variant }) }),
          !l && b && (s || x || y) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                Kt,
                {
                  icon: rr,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ e(
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
          s && x && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (y || x) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            y && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Ql,
              {
                ...i,
                currentModule: t.name
              }
            ) }),
            x && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((W, D) => /* @__PURE__ */ e(is, { action: W }, D)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              pa,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Ua, {})
          ] })
        ] })
      ]
    }
  );
}
function is({ action: t }) {
  const a = G(null), [n, r] = T(!1);
  return "actions" in t ? /* @__PURE__ */ e(Ce, { items: t.actions, open: n, onOpenChange: r, children: /* @__PURE__ */ e(
    Oe,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: n
    }
  ) }) : /* @__PURE__ */ e(
    fe,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: a,
      children: /* @__PURE__ */ e(
        M,
        {
          size: "md",
          variant: "outline",
          label: t.label,
          icon: t.icon,
          hideLabel: !0,
          onClick: (l) => {
            l.preventDefault(), a.current?.click();
          }
        }
      )
    }
  );
}
const os = () => {
  const t = oe();
  return /* @__PURE__ */ o(
    K.div,
    {
      className: h(
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
            className: h(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          Oe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: lr,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, cs = ({
  autoClearMinutes: t,
  reset: a,
  isOpen: n
}) => {
  const r = G(null);
  j(() => (n ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [a, n, t]);
}, ds = ({ children: t }) => {
  const {
    open: a,
    shouldPlayEntranceAnimation: n,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = Ze();
  return cs({
    reset: () => {
    },
    isOpen: a,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(ke, { children: a && /* @__PURE__ */ e(
    K.div,
    {
      "aria-hidden": !a,
      className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
      initial: n ? { opacity: 0, width: 0 } : !1,
      animate: { opacity: 1, width: 360 },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        n && r(!1);
      },
      children: /* @__PURE__ */ e("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ e(
        K.div,
        {
          className: "relative flex h-full w-full flex-col overflow-x-hidden ",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: n ? 0.3 : 0.05,
            ease: "easeOut",
            delay: n ? 0.2 : 0
          },
          children: t
        }
      ) })
    },
    "chat-window"
  ) });
}, us = ({ action: t, onClose: a }) => {
  const n = () => {
    t.onClick(), a();
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
          onClick: n,
          children: t.isLoading ? /* @__PURE__ */ e(ga, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        Oe,
        {
          label: t.label || "",
          onClick: n,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, fs = ({
  enabled: t = !1,
  greeting: a,
  title: n,
  description: r,
  benefits: l,
  actions: s,
  onShow: i,
  onHide: c,
  children: d
}) => /* @__PURE__ */ e(
  Zl,
  {
    enabled: t,
    greeting: a,
    title: n,
    description: r,
    benefits: l,
    actions: s,
    onShow: i,
    onHide: c,
    children: d
  }
), ms = () => {
  const {
    enabled: t,
    greeting: a,
    title: n,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = Ze(), d = () => {
    i(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(ds, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      Oe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Se,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(Ga, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: a }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: n })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(ba, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ e(
        us,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(os, {}) })
  ] }) : null;
}, hs = ae(
  $("AiPromotionChat", ms)
), ps = ae(
  $("AiPromotionChatProvider", fs)
), qa = be({
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
  positive: wt,
  warning: sr,
  info: xa
}, Yt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, gs = E(
  function({ title: a, onClose: n, children: r, actions: l = [], variant: s }, i) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: i,
        className: qa({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "flex flex-row items-center gap-2",
                  Yt[s]
                ),
                children: [
                  qt[s] && /* @__PURE__ */ e(B, { icon: qt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    pe,
                    {
                      className: Yt[s] || "font-medium",
                      children: a
                    }
                  )
                ]
              }
            ),
            n && /* @__PURE__ */ e(
              M,
              {
                variant: "ghost",
                icon: Se,
                size: "sm",
                hideLabel: !0,
                onClick: n,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: h(
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
), bs = ({
  compact: t,
  variant: a = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: qa({ variant: a }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(_, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(_, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(_, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(_, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(_, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(_, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Ya = E(
  (t, a) => /* @__PURE__ */ e(gs, { ref: a, ...t })
), xs = ({ compact: t, variant: a }) => /* @__PURE__ */ e(bs, { compact: t, variant: a });
Ya.displayName = "F0Callout";
const zc = ee(
  ae(Ya),
  xs
);
function vs({
  title: t,
  isActive: a = !1,
  onClick: n
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: h(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        a && "bg-f1-background-tertiary",
        n && "cursor-pointer hover:bg-f1-background-hover",
        le("focus-visible:ring-inset")
      ),
      onClick: n,
      disabled: !n,
      "aria-label": `${t}${a ? " (selected)" : ""}`,
      "aria-pressed": n ? a : void 0,
      children: [
        /* @__PURE__ */ e(B, { icon: ir, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          pe,
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
function ys({
  author: t,
  timestamp: a,
  onClick: n,
  isActive: r
}) {
  const { locale: l } = or(), s = cr(l), i = dr(a, "PPPp", { locale: s }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: h(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        n && "cursor-pointer hover:bg-f1-background-hover",
        le("focus-visible:ring-inset")
      ),
      onClick: n,
      disabled: !n,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": n ? r : void 0,
      children: [
        /* @__PURE__ */ e(pe, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
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
function ws({
  title: t,
  versions: a,
  currentVersion: n,
  activeVersionId: r
}) {
  return /* @__PURE__ */ o(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": t,
      children: [
        /* @__PURE__ */ e(
          pe,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(Ke, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          n && /* @__PURE__ */ e(
            vs,
            {
              title: n.title,
              onClick: n.onClick,
              isActive: r === "current"
            }
          ),
          a.map((l) => /* @__PURE__ */ e(
            ys,
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
const Pc = ae(
  $("F0VersionHistory", ws)
), Ja = E(
  ({ height: t, itemCount: a, itemSize: n, className: r, renderer: l }, s) => {
    const i = re.useRef(null);
    re.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = ur({
      count: a,
      getScrollElement: () => i.current,
      estimateSize: typeof n == "number" ? () => n : n,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        className: h("scrollbar-macos w-full overflow-auto", r),
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
Ja.displayName = "VirtualList";
const mt = $("VirtualList", Ja), Za = ({
  text: t,
  search: a,
  searchKeys: n = [],
  semiBold: r = !1
}) => {
  if (!a)
    return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(a.toLowerCase()) === -1)
    if (n.find(
      (i) => i.toLowerCase().indexOf(a.toLowerCase().trim()) >= 0
    ))
      a = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${a})`, "gi"), s = t.split(l);
  return /* @__PURE__ */ e("span", { className: h("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
    (i, c) => i.toLowerCase() === a.toLowerCase() ? /* @__PURE__ */ e(
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
function Xe(t, a) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && a?.();
}
function Qe(t, a) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && a?.();
}
const Ns = ({
  entity: t,
  selected: a,
  onSelect: n,
  onRemove: r,
  marginLeft: l,
  search: s,
  goToFirst: i,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = t.name.split(" "), p = m[0] || "", b = m.slice(1).join(" "), g = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (a ? r(t) : n(t));
  }, x = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      a ? a && r(t) : n(t);
    } else y.key === "ArrowDown" ? Xe(y.currentTarget, i) : y.key === "ArrowUp" && Qe(y.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: h(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        a && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          ge,
          {
            src: t.avatar,
            firstName: p,
            lastName: b,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              Za,
              {
                text: t.name,
                search: s,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          va,
          {
            "data-avatarname-navigator-element": "true",
            checked: a,
            disabled: f,
            onClick: g,
            onKeyDown: x,
            className: h(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && a && /* @__PURE__ */ e(
          B,
          {
            className: "text-f1-icon-selected",
            icon: wt,
            size: "md"
          }
        )
      ]
    }
  ) });
}, We = ({
  groupView: t,
  expanded: a,
  search: n,
  entity: r,
  selected: l,
  partialSelected: s,
  onSelect: i,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: p = !1,
  showGroupIcon: b = !1,
  singleSelector: g = !1,
  disabled: x = !1,
  hiddenAvatar: y = !1
}) => {
  const [L, O] = T(!1);
  if (!t)
    return /* @__PURE__ */ e(
      Ns,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: n,
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
  const W = (I) => {
    if (I.key === " ")
      I.preventDefault(), d(!a);
    else if (I.key === "Enter" && g)
      d(!a);
    else if (I.key === "Enter") {
      if (x) return;
      !l || s ? i(r) : l && c(r);
    } else I.key === "ArrowDown" ? Xe(I.currentTarget, f) : I.key === "ArrowUp" && Qe(I.currentTarget, u);
  }, D = () => {
    if (L)
      d(!a), O(!1);
    else {
      if (x || g) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const F = l || s;
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        M,
        {
          hideLabel: !0,
          icon: a ? fr : mr,
          onClick: () => d(!a),
          label: a ? "Collapse" : "Expand",
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
            O(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded-[10px] border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            b && /* @__PURE__ */ e(
              B,
              {
                icon: hr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                Za,
                {
                  semiBold: !0,
                  text: r.name,
                  search: n,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(qe, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              va,
              {
                checked: F,
                disabled: x,
                onClick: D,
                onKeyDown: W,
                indeterminate: s,
                onPointerDown: (I) => {
                  I.stopPropagation(), O(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: h("ml-auto", g ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !p && !a && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
We.displayName = "EntitySelectListItem";
const Jt = ({
  label: t,
  onCreate: a,
  goToFirst: n,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Xe(s.currentTarget, n) : s.key === "ArrowUp" && Qe(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: h(
      "flex flex-row flex-wrap items-center gap-1.5 rounded-[10px] border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        M,
        {
          hideLabel: !0,
          label: t,
          onClick: () => a(),
          icon: pr,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: h("line-clamp-1"), children: t }) }) })
    ]
  }
) }), _e = ({ primaryAction: t, secondaryActions: a }) => {
  if (!a || a.length === 0)
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
  const n = [t, ...a ?? []], r = n.map((i) => ({
    label: i.label,
    value: i.label,
    icon: i.icon,
    critical: i.variant === "critical"
  })) || [], l = (i) => {
    const c = n.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = n.every((i) => i.disabled);
  return /* @__PURE__ */ e(
    gr,
    {
      items: r,
      value: t.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, Cs = ({
  actions: t,
  selectAllLabel: a,
  clearLabel: n,
  disabled: r,
  allVisibleSelected: l,
  anyVisibleSelected: s,
  loading: i,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (a || n), m = t && t.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let b, g, x = d ? {
    label: a || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, y = f ? {
    label: n || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return x || (x = y, y = void 0), m && u ? (b = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: x,
      secondaryActions: y ? [y] : []
    }
  ), g = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? b = /* @__PURE__ */ e(
    _e,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (b = /* @__PURE__ */ e(_e, { primaryAction: x, secondaryActions: [] }), y && (g = /* @__PURE__ */ e(_e, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    b,
    g
  ] }) });
}, Is = ({
  search: t,
  onSearch: a,
  searchPlaceholder: n,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(B, { icon: Ml, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: n,
      value: t,
      onChange: (c) => a(c.target.value)
    }
  ),
  t && /* @__PURE__ */ e(
    B,
    {
      icon: br,
      size: "md",
      onClick: () => a(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), rt = 384, lt = 36, ks = 37, Zt = 1, Xt = 200, Qt = '[data-avatarname-navigator-element="true"]', Ss = ({
  groupView: t,
  entities: a,
  groups: n,
  selectedGroup: r,
  search: l,
  onSelect: s,
  onRemove: i,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: p = [],
  onGroupChange: b,
  onToggleExpand: g,
  searchPlaceholder: x,
  selectAllLabel: y,
  clearLabel: L,
  notFoundTitle: O,
  notFoundSubtitle: W,
  className: D,
  actions: F,
  onCreate: I,
  onCreateLabel: Z,
  singleSelector: z = !1,
  loading: w = !1,
  disabled: k = !1,
  hiddenAvatar: N = !1
}) => {
  const S = re.useRef(null), V = q(
    () => t ? a.reduce(
      (A, Y) => A + (Y.subItems?.length ?? 0),
      0
    ) : a.length,
    [a, t]
  ), v = Q(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: 0 });
    }, Zt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Qt)
      )[0]?.focus();
    }, Xt);
  }, []), C = Q(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: S.current?.scrollHeight });
    }, Zt), setTimeout(() => {
      const A = Array.from(
        document.querySelectorAll(Qt)
      );
      A[A.length - 1]?.focus();
    }, Xt);
  }, []), P = q(
    () => new Map(p.map((A) => [A.id, A])),
    [p]
  ), H = Q(
    (A) => {
      const Y = P.get(A.id);
      if (!t)
        return {
          selected: !!Y,
          partialSelected: !!Y
        };
      const X = (A.subItems ?? []).filter(
        (te) => Y?.subItems?.some(
          (he) => he.subId === te.subId
        )
      ), J = (A.subItems?.length ?? 0) === X.length, de = !J && X.length > 0;
      return { selected: J, partialSelected: de };
    },
    [t, P]
  ), ce = Q(
    (A) => {
      if (A.index === 0 && I)
        return /* @__PURE__ */ e(
          Jt,
          {
            label: Z ?? "",
            onCreate: () => I?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const Y = I ? A.index - 1 : A.index, X = a[Y], { selected: J, partialSelected: de } = H(X);
      return /* @__PURE__ */ e(
        We,
        {
          expanded: X.expanded ?? !1,
          onExpand: () => g(X, !0),
          search: l,
          groupView: t,
          entity: X,
          onSelect: s,
          onRemove: i,
          selected: J,
          partialSelected: de,
          showGroupIcon: As(n, r),
          singleSelector: z,
          goToFirst: v,
          goToLast: C,
          disabled: k,
          hiddenAvatar: N
        },
        X.id
      );
    },
    [
      I,
      Z,
      k,
      a,
      H,
      v,
      C,
      t,
      n,
      N,
      i,
      s,
      g,
      l,
      r,
      z
    ]
  ), ne = q(() => t ? a.flatMap((A) => {
    const Y = Be(
      p ?? [],
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
      ...(A.subItems ?? []).map((X) => ({
        parent: {
          ...A,
          expanded: A.expanded ?? Y?.expanded ?? !1
        },
        subItem: X
      }))
    ];
  }).filter(
    (A) => (!A.parent || A.parent.expanded) && (!!A.parent || !!A.subItem.subItems && A.subItem.subItems.length > 0)
  ) : a.map((A) => ({
    parent: null,
    subItem: {
      subId: A.id,
      subName: A.name,
      subAvatar: A.avatar,
      subSearchKeys: A.searchKeys
    }
  })), [t, a, p]), R = Q(
    (A) => {
      if (A.index === 0 && I)
        return /* @__PURE__ */ e(
          Jt,
          {
            label: Z ?? "",
            onCreate: () => I?.(l),
            goToFirst: v,
            goToLast: C
          }
        );
      const Y = I ? A.index - 1 : A.index, X = ne[Y].parent, J = ne[Y].subItem;
      if (!X) {
        const te = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, he = Be(
          p,
          te.id
        ), xe = (te?.subItems ?? []).filter(
          (Te) => he?.subItems?.some(
            (On) => On.subId === Te.subId
          )
        ), Pe = (te.subItems?.length ?? 0) === xe.length, Dn = !Pe && xe.length > 0;
        return /* @__PURE__ */ e(
          We,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Te) => g(te, Te),
            search: l,
            entity: te,
            onSelect: s,
            onRemove: i,
            selected: Pe,
            partialSelected: Dn,
            showGroupIcon: n.find((Te) => Te.value === r)?.groupType === "team",
            singleSelector: z,
            goToFirst: v,
            goToLast: C,
            hideLine: Y === ne.length - 1,
            disabled: k,
            hiddenAvatar: N
          }
        );
      }
      let de = !!Be(p, J.subId);
      if (!de) {
        const te = Be(
          p,
          X.id
        );
        de = !!(X?.subItems ?? []).filter(
          (xe) => te?.subItems?.some(
            (Pe) => Pe.subId === xe.subId
          )
        ).find((xe) => xe.subId === J.subId);
      }
      return /* @__PURE__ */ e(
        We,
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
            d(X, J);
          },
          onRemove: () => c(X, J),
          selected: !!de,
          partialSelected: !1,
          singleSelector: z,
          goToFirst: v,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: N
        }
      );
    },
    [
      ne,
      p,
      l,
      z,
      v,
      C,
      s,
      i,
      n,
      k,
      g,
      r,
      d,
      c,
      N,
      I,
      Z
    ]
  ), [Le, nt] = q(() => {
    if (!a.length)
      return [!1, !1];
    let A = 0, Y = 0;
    if (!t)
      A = a.length, Y = a.reduce(
        (de, { id: te }) => de + (P.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...P.values()].flatMap(
          (te) => te.subItems?.map((he) => he.subId) ?? []
        )
      );
      a.forEach((te) => {
        const he = te.subItems ?? [];
        A += he.length, Y += he.filter(
          (xe) => de.has(xe.subId)
        ).length;
      });
    }
    const X = A > 0 && Y === A, J = Y > 0;
    return [X, J];
  }, [a, P, t]), Fe = ne.length, Tn = !z && (y || L), _n = F && F.length > 0, En = !w && (!z && Tn || _n);
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex w-full flex-col rounded-l-xl border-0",
        z || w ? "rounded-r-xl" : "",
        D
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: h(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              z || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Is,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: x,
                  goToFirst: v,
                  goToLast: C
                }
              ) }),
              n && n.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Ve,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: b,
                  options: n,
                  value: r,
                  className: h(
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
            className: h(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              En ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(ga, {}) }),
              !w && !V && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: rt
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: W })
                  ]
                }
              ),
              !w && (!!V || I) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                mt,
                {
                  height: rt,
                  itemCount: Fe + (I ? 1 : 0),
                  itemSize: (A) => {
                    if (A === 0 && I) return lt;
                    const Y = I ? A - 1 : A;
                    return ne[Y]?.parent === null ? ks : lt;
                  },
                  renderer: R,
                  ref: S
                }
              ) : /* @__PURE__ */ e(
                mt,
                {
                  height: rt,
                  itemCount: a.length + (I ? 1 : 0),
                  itemSize: lt,
                  renderer: ce,
                  ref: S
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Cs,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: z,
            totalFilteredEntities: V,
            allVisibleSelected: Le,
            anyVisibleSelected: nt,
            selectAllLabel: y,
            clearLabel: L,
            disabled: k,
            actions: F
          }
        )
      ]
    }
  );
}, Be = (t, a) => t.find((n) => n.id === a), As = (t, a) => t.find((n) => n.value === a)?.groupType === "team", Ls = ({
  entity: t,
  onRemove: a,
  disabled: n = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  xr,
  {
    className: h(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      vr,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: yr, color: "secondary" } : void 0
      }
    ),
    right: !n && /* @__PURE__ */ e(
      B,
      {
        icon: Se,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => a?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), Fs = ({
  groupView: t,
  onSubItemRemove: a,
  onRemove: n,
  selectedEntities: r,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = q(() => {
    const f = t ? r.flatMap(
      (m) => (m.subItems ?? []).map((p) => ({
        parent: m,
        subItem: p
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
      const p = m.subItem.subId;
      return u.has(p) ? !1 : (u.add(p), !0);
    });
  }, [t, r]), d = c.length;
  return /* @__PURE__ */ o("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ e("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: l && /* @__PURE__ */ o("span", { className: "my-auto text-f1-foreground-secondary", children: [
      d,
      " ",
      l
    ] }) }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ e(
      mt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            Ls,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: s,
              hiddenAvatar: i,
              onRemove: () => u.parent ? a?.(u.parent, u.subItem) : n({
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
}, Ts = 500, ea = 520, ta = 210, aa = ({
  groupView: t,
  onRemove: a,
  onSubItemRemove: n,
  selectedEntities: r,
  selectedLabel: l,
  width: s,
  singleSelector: i = !1,
  loading: c = !1,
  hiddenAvatar: d = !1,
  actions: f,
  onCreate: u,
  onCreateLabel: m,
  ...p
}) => {
  const b = (s ?? ea) < Ts, g = !c && !i && !b, x = s ?? ea, y = g ? x - ta : x;
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
            style: { width: y + 1 + "px" },
            children: /* @__PURE__ */ e(
              Ss,
              {
                ...p,
                groupView: t,
                onRemove: a,
                onSubItemRemove: n,
                selectedEntities: r,
                singleSelector: i,
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
        g && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: ta + "px"
            },
            children: /* @__PURE__ */ e(
              Fs,
              {
                groupView: t,
                onRemove: a,
                onSubItemRemove: n,
                selectedEntities: r ?? [],
                selectedLabel: l,
                disabled: p.disabled,
                hiddenAvatar: d
              }
            )
          }
        )
      ]
    }
  );
}, _s = ({
  placeholder: t,
  selected: a,
  selectedEntities: n,
  disabled: r = !1,
  hiddenAvatar: l = !1,
  label: s,
  labelIcon: i,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: p = !1,
  maxLength: b,
  loading: g = !1,
  required: x = !1,
  readonly: y = !1,
  append: L,
  size: O = "sm",
  open: W
}) => {
  const D = q(
    () => n.some(
      (z) => z.subItems && z.subItems.length > 0
    ),
    [n]
  ), F = q(() => D ? n.flatMap(
    (z) => (z.subItems ?? []).map((w) => ({
      parent: z,
      subItem: w
    }))
  ) : n.map((z) => ({
    parent: null,
    subItem: {
      subId: z.id,
      subName: z.name,
      subAvatar: z.avatar,
      subDeactivated: z.deactivated
    }
  })), [D, n]), I = F.length === 0 ? void 0 : F.length === 1 ? F[0].subItem.subName : F.length + " " + a, Z = F.length === 1 ? F[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    wr,
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
      hideLabel: p,
      maxLength: b,
      clearable: !1,
      value: I,
      disabled: r,
      loading: g,
      required: x,
      readonly: y,
      size: O,
      avatar: l || !Z ? void 0 : {
        type: "person",
        firstName: Z,
        lastName: "",
        src: F[0].subItem.subAvatar,
        deactivated: F[0].subItem.subDeactivated
      },
      append: L ?? /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Nr, { open: W, disabled: r, size: O }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: h(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            I && "text-f1-foreground",
            F.length === 1 && !l || c && !I ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            pe,
            {
              tag: "span",
              className: F.length === 1 && F[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: F.length === 0 ? t ?? "" : F.length === 1 ? F[0].subItem.subName : `${F.length} ${a}`
            }
          )
        }
      )
    }
  );
}, Rc = (t) => {
  const [a, n] = T(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (w) => {
    n(w), t.onOpenChange?.(w);
  };
  j(() => {
    t.defaultOpen && a && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, s] = T(t.entities), [i, c] = T(""), [d, f] = Cr("", 300), u = q(
    () => t.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [t.entities]
  ), m = Je(Ir), b = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function g(w) {
    if (t.singleSelector) {
      t.onSelect(w), n(!1);
      return;
    }
    const k = t.selectedEntities ?? [], N = l.find((P) => P.id === w.id);
    if (!N)
      return;
    const S = new Set(
      (N.subItems ?? []).map((P) => P.subId)
    ), V = /* @__PURE__ */ new Set([N.id]);
    l.forEach((P) => {
      P.id !== N.id && (P.subItems ?? []).some(
        (ce) => S.has(ce.subId)
      ) && V.add(P.id);
    });
    const v = [...k];
    function C(P) {
      const H = v.findIndex((ce) => ce.id === P.id);
      H >= 0 ? v[H] = P : v.push(P);
    }
    V.forEach((P) => {
      const H = l.find((R) => R.id === P);
      if (!H) return;
      const ce = H.subItems?.filter(
        (R) => S.has(R.subId)
      ) ?? [], ne = v.findIndex((R) => R.id === P);
      if (ne >= 0) {
        const R = v[ne].subItems ?? [], Le = new Set(R.map((Fe) => Fe.subId)), nt = [
          ...R,
          ...ce.filter((Fe) => !Le.has(Fe.subId))
        ];
        C({
          ...H,
          subItems: nt
        });
      } else
        C({
          ...H,
          subItems: ce
        });
    }), t.onSelect(v);
  }
  function x(w, k) {
    if (t.singleSelector)
      t.onSelect({ ...w, subItems: [{ ...k }] }), n(!1);
    else {
      const N = t.selectedEntities ?? [], S = new Set(N.map((C) => C.id)), V = new Map(
        N.map((C) => [C.id, C.subItems ?? []])
      );
      S.add(w.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (H) => H.subId === k.subId
        ) && S.add(C.id);
      });
      const v = [];
      t.entities.forEach((C) => {
        if (S.has(C.id)) {
          let H = [...V.get(C.id) ?? []];
          C.subItems?.some(
            (R) => R.subId === k.subId
          ) && (H.some(
            (Le) => Le.subId === k.subId
          ) || H.push(k));
          const ne = new Set(
            (C.subItems ?? []).map((R) => R.subId)
          );
          H = H.filter(
            (R) => ne.has(R.subId)
          ), v.push({
            ...C,
            subItems: H
          });
        }
      }), t.onSelect(v);
    }
  }
  function y(w) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let k = [];
    const N = t.selectedEntities ?? [];
    if (u) {
      const S = l.find(
        (v) => v.id === w.id
      );
      if (!S)
        return;
      const V = new Set(
        (S.subItems ?? []).map((v) => v.subId)
      );
      for (const v of N) {
        const C = (v.subItems ?? []).filter(
          (P) => !V.has(P.subId)
        );
        C.length > 0 && k.push({
          ...v,
          subItems: C
        });
      }
    } else
      k = (N ?? []).filter((S) => S.id !== w.id);
    t.onSelect(k);
  }
  function L(w, k) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const N = t.selectedEntities ?? [], S = k.subId, V = [];
    for (const v of N) {
      const C = v.subItems?.filter((P) => P.subId !== S) ?? [];
      C.length > 0 && V.push({
        ...v,
        subItems: C
      });
    }
    t.onSelect(V);
  }
  function O() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const w = t.selectedEntities ?? [];
    let k = [];
    if (u) {
      const N = new Set(
        l.flatMap(
          (S) => (S.subItems ?? []).map((V) => V.subId)
        )
      );
      for (const S of w) {
        const V = (S.subItems ?? []).filter(
          (v) => !N.has(v.subId)
        );
        V.length > 0 && k.push({
          ...S,
          subItems: V
        });
      }
    } else {
      const N = new Set(
        l.map((S) => S.id)
      );
      k = (w ?? []).filter((S) => !N.has(S.id));
    }
    t.onSelect(k);
  }
  function W() {
    const w = [...t.selectedEntities ?? []];
    l.forEach((k) => {
      const N = w.find((S) => S.id === k.id);
      if (!N)
        w.push({
          ...k,
          subItems: k.subItems || []
        });
      else {
        const S = Array.from(
          /* @__PURE__ */ new Set([
            ...N.subItems ?? [],
            ...k.subItems ?? []
          ])
        );
        N.subItems = S;
      }
    }), t.singleSelector || t.onSelect(w);
  }
  const D = (w) => {
    c(w), f(w);
  }, F = (w, k) => {
    t.onItemExpandedChange(w.id, k), s(
      l.map(
        (N) => N.id === w.id ? { ...N, expanded: !w.expanded } : N
      )
    );
  };
  j(() => {
    if (!d) {
      s(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const k = t.entities.map((N) => {
        const S = Es(N, d), V = N.subItems?.map((v) => ({
          ...v,
          score: He(
            d,
            v.subSearchKeys ?? [v.subName]
          )
        })).filter((v) => v.score < 1 / 0).sort((v, C) => v.score - C.score);
        return {
          ...N,
          score: S,
          expanded: N.expanded ?? (V?.length ?? 0) > 0,
          subItems: V
        };
      }).filter((N) => N.score < 1 / 0).sort((N, S) => N.score - S.score);
      s(k);
    } else {
      const w = t.entities.map((k) => {
        const N = He(
          d,
          k.searchKeys ?? [k.name]
        );
        return { ...k, score: N };
      }).filter((k) => k.score < 1 / 0).sort((k, N) => k.score - N.score);
      s(w);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    s
  ]);
  const I = G(null), [Z, z] = T(0);
  return za(() => {
    const w = () => {
      I.current && z(I.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: I,
      className: h(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        aa,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: g,
          onRemove: y,
          onSubItemRemove: L,
          onSubItemSelect: x,
          onClear: O,
          onSelectAll: W,
          selectedEntities: t.selectedEntities ?? [],
          search: i,
          onSearch: D,
          onToggleExpand: F,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? Z - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(kr, { ...t, onOpenChange: r, open: a, children: [
    /* @__PURE__ */ e(
      Sr,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          _s,
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
            open: a
          }
        )
      }
    ),
    /* @__PURE__ */ e(
      Ar,
      {
        container: b,
        className: h(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          aa,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: g,
            onRemove: y,
            onSubItemRemove: L,
            onSubItemSelect: x,
            onClear: O,
            onSelectAll: W,
            selectedEntities: t.selectedEntities ?? [],
            search: i,
            onSearch: D,
            onToggleExpand: F,
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
function ht(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function na(t) {
  return ht(t).split(/\s+/).filter((a) => a.length > 0);
}
function He(t = "", a) {
  const n = na(t);
  if (n.length === 0)
    return 1 / 0;
  for (const r of a) {
    const l = ht(r), s = na(r), i = ht(t);
    if (l.includes(i) || n.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function Es(t, a) {
  const n = He(a, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, s) => {
    const i = He(
      a,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(n, r);
}
const Xa = be({
  base: h(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    le()
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
}), Ds = De.forwardRef(({ className: t, variant: a, size: n, ...r }, l) => /* @__PURE__ */ e(
  ya,
  {
    ref: l,
    className: h(Xa({ variant: a, size: n, className: t })),
    ...r
  }
));
Ds.displayName = ya.displayName;
const Qa = De.createContext({
  size: "default",
  variant: "default"
}), en = De.forwardRef(({ className: t, variant: a, size: n, children: r, ...l }, s) => /* @__PURE__ */ e(
  wa,
  {
    ref: s,
    className: h("flex items-center justify-center gap-1.5", t),
    ...l,
    children: /* @__PURE__ */ e(Qa.Provider, { value: { variant: a, size: n }, children: r })
  }
));
en.displayName = wa.displayName;
const tn = De.forwardRef(({ className: t, children: a, variant: n, size: r, ...l }, s) => {
  const i = De.useContext(Qa);
  return /* @__PURE__ */ e(
    Na,
    {
      ref: s,
      className: h(
        Xa({
          variant: i.variant || n,
          size: i.size || r
        }),
        t
      ),
      ...l,
      children: a
    }
  );
});
tn.displayName = Na.displayName;
const Os = ({
  id: t,
  createdAt: a,
  title: n,
  description: r,
  icon: l,
  category: s,
  isUnread: i = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = ct({
    threshold: 0.1,
    onChange(p) {
      p && d?.(t);
    }
  }), u = Ba(a, {
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
        /* @__PURE__ */ e(dt, { icon: l ?? Ca }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: n,
              children: n
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
}, zs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(_, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(_, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(_, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(_, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(_, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Et = $(
  "ActivityItem",
  ee(Os, zs)
), an = ({
  title: t,
  children: a
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: a })
] }), Ps = ({
  title: t,
  items: a,
  onClickItem: n,
  onItemVisible: r
}) => /* @__PURE__ */ e(an, { title: t, children: a.map((l) => /* @__PURE__ */ e(
  Et,
  {
    ...l,
    onClick: () => n(l.id),
    onVisible: r
  },
  l.id
)) }), Rs = ({
  title: t,
  numItems: a
}) => /* @__PURE__ */ e(an, { title: t, children: Array.from({ length: a }).map((n, r) => /* @__PURE__ */ e(Et.Skeleton, {}, r)) }), Me = ee(Ps, Rs), $s = 3, Bs = ["today", "yesterday", "lastWeek", "lastMonth"], Ws = (t) => Fr(t, ([a]) => {
  const n = Bs.indexOf(a);
  return n === -1 ? -Number(a) : n - 4e3;
}), pt = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ms = ({
  items: t,
  loadingMoreItems: a = !1,
  onClickItem: n,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = oe(), i = Tl(t, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = Lr((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Ws(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], p) => /* @__PURE__ */ o(re.Fragment, { children: [
      /* @__PURE__ */ e(
        Me,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: n,
          onItemVisible: d
        }
      ),
      p !== f.length - 1 && /* @__PURE__ */ e(pt, {})
    ] }, u)),
    a && new Array($s).fill(null).map((u, m) => /* @__PURE__ */ e(Et.Skeleton, {}, m))
  ] });
}, js = () => {
  const t = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Me.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(pt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(pt, {}),
    /* @__PURE__ */ e(
      Me.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, $c = $(
  "ActivityItemList",
  ee(Ms, js)
), Vs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Gs = {
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
function Hs({
  firstName: t,
  lastName: a,
  src: n,
  canReact: r,
  lastEmojiReaction: l,
  onReactionSelect: s,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        n ? "" : Gs[Tr(
          [t, a].join("")
        )]
      ),
      children: [
        n && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url("${n}")` }
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
                  src: n,
                  firstName: t,
                  lastName: a,
                  size: "2xl"
                }
              )
            }
          ),
          r && /* @__PURE__ */ e(
            "div",
            {
              ref: i,
              className: h(
                "absolute -right-0.5",
                n ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                Wa,
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
function Us(t) {
  const a = G(null), n = G(), r = Q(() => {
    const s = a.current;
    if (!s) return;
    const i = _r.create(s, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    n.current = setInterval(() => {
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
    clearInterval(n.current);
  }, []);
  return { canvasRef: a, handleMouseEnter: r, handleMouseLeave: l };
}
const Ks = ({
  link: t,
  firstName: a,
  lastName: n,
  src: r,
  onClick: l,
  canReact: s = !0,
  lastEmojiReaction: i,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, p] = T(i), b = G(null);
  j(() => {
    p(i);
  }, [i]);
  const g = (D) => {
    p(D), c?.(D);
  }, x = Ye(), { canvasRef: y, handleMouseEnter: L, handleMouseLeave: O } = Us(x), W = Nt({
    emoji: Vs[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    fe,
    {
      href: t,
      onClick: l,
      className: h(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        le()
      ),
      onMouseEnter: x ? void 0 : L,
      onMouseLeave: x ? void 0 : O,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          Hs,
          {
            firstName: a,
            lastName: n,
            src: r,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: g,
            pickerRef: b
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o("div", { className: "truncate font-medium text-f1-foreground", children: [
              a,
              " ",
              n
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ e("span", { className: "truncate", children: f }),
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: W })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(ft, { date: u }) })
        ] })
      ]
    }
  );
}, qs = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(_, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(_, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(_, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Bc = ee(Ks, qs), Wc = ({
  title: t,
  subtitle: a,
  buttonLabel: n,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(Ia, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: a })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(M, { label: n, variant: "outline", onClick: r }) })
] });
function Ys({
  emoji: t,
  initialCount: a,
  hasReacted: n = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = T(n), [c, d] = T(a), f = G(null), { fireEmojiConfetti: u } = Er(), m = (g, x) => {
    g.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(x), s || u(x, f);
  }, p = r?.map((g) => g.name).join(", ") || "", b = /* @__PURE__ */ e(
    ka,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (g) => {
        m(g, t);
      },
      className: h(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Dr(t),
      prepend: /* @__PURE__ */ e(Nt, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        Or,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: h(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return p ? /* @__PURE__ */ e(ve, { label: p, children: b }) : b;
}
function Js({ items: t, onInteraction: a, locale: n, action: r }) {
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
    /* @__PURE__ */ e(Wa, { onSelect: a, locale: n }),
    t.map((l) => /* @__PURE__ */ e(
      Ys,
      {
        emoji: l.emoji,
        initialCount: l.initialCount,
        hasReacted: l.hasReacted,
        users: l.users,
        onInteraction: a
      },
      l.emoji
    ))
  ] });
}
const Zs = $("Reactions", Js), Xs = ({
  content: t,
  collapsed: a
}) => /* @__PURE__ */ e(
  zr,
  {
    content: t,
    className: h(
      "FactorialOneTextEditor",
      a && "line-clamp-5 break-words"
    )
  }
), Qs = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(_, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(_, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), nn = ee(
  Xs,
  Qs
), ra = ({ tags: t, right: a }) => /* @__PURE__ */ e(
  "div",
  {
    className: h(
      "flex flex-1 flex-row items-center gap-1.5",
      a && "justify-end"
    ),
    children: t.map((n) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        Ie,
        {
          icon: n.icon,
          text: n.label ?? (n.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${n.label}: ${n.description}`
        }
      ) });
      return n.label || n.description ? /* @__PURE__ */ e(
        ve,
        {
          label: n.label,
          description: n.description,
          children: r
        },
        n.label ?? n.description
      ) : r;
    })
  }
), gt = E(
  function({
    label: a,
    title: n,
    subtitle: r,
    description: l,
    color: s,
    isPending: i,
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
                !!a && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: a }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  n,
                  !!r && /* @__PURE__ */ e("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(ft, { date: f }),
                  /* @__PURE__ */ e(
                    B,
                    {
                      icon: vt,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(ft, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(ra, { tags: c }),
              d && /* @__PURE__ */ e(ra, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), ei = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), rn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const n = (t?.split(".")).at(-1);
  return !!n && ei.has(n);
}, ti = ({
  title: t,
  mediaUrl: a,
  place: n,
  date: r
}) => {
  let l = _l(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return n && (l = `${l} · ${n}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    a && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: rn(a) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ e("source", { src: a })
      }
    ) : /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: a,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(_, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      gt,
      {
        title: t,
        description: l,
        color: Pr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, ai = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(_, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(_, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(_, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(_, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), ln = ee(ti, ai), ni = ({
  id: t,
  author: a,
  group: n,
  createdAt: r,
  title: l,
  description: s,
  onClick: i,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: p,
  actions: b,
  dropdownItems: g,
  noReactionsButton: x = !1
}) => {
  const y = [f.views, f.comments].filter(Boolean).join(" · "), L = !0, O = Ba(r), W = () => {
    i(t);
  }, D = (I) => {
    I.stopPropagation();
  }, F = a ? `${a.firstName} ${a.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: W,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: a ? /* @__PURE__ */ e(
          $e,
          {
            href: a.url || "#",
            title: F,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              ge,
              {
                firstName: a.firstName,
                lastName: a.lastName,
                src: a.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(dt, { icon: Pt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                a ? /* @__PURE__ */ o(U, { children: [
                  /* @__PURE__ */ e(
                    $e,
                    {
                      href: a.url,
                      className: "block md:hidden",
                      title: F,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        ge,
                        {
                          firstName: a.firstName,
                          lastName: a.lastName,
                          src: a.avatarUrl,
                          size: "xs"
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ e(
                    $e,
                    {
                      href: a.url,
                      title: F,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: F
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(dt, { icon: Pt, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: h(
                      "text-f1-foreground-secondary",
                      !a && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  $e,
                  {
                    onClick: n.onClick,
                    title: n.title,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    href: "#",
                    children: n.title
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ o("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  b?.map((I) => /* @__PURE__ */ e(
                    M,
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
                  g?.length && /* @__PURE__ */ e(
                    Ce,
                    {
                      items: g,
                      icon: ut,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  Ce,
                  {
                    items: [
                      {
                        label: p.label,
                        onClick: p.onClick
                      },
                      ...g ?? []
                    ],
                    icon: ut,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: O }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  className: h(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ e(nn, { content: s, collapsed: L })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: rn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: D,
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
            /* @__PURE__ */ e(_, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(ln, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: y }),
          !x && /* @__PURE__ */ e(
            Zs,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: p.label,
                onClick: p.onClick,
                icon: Rr
              }
            }
          )
        ] })
      ]
    }
  );
}, ri = ({
  withEvent: t,
  withImage: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(_, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(_, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(_, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(_, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(_, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(nn.Skeleton, {}) }),
    a && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(_, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(ln.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(_, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(_, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Mc = ee(
  ni,
  ri
), li = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], si = E(
  function({ daysOfTheWeek: a = li, activatedDays: n = [] }, r) {
    const l = n.map(
      (s) => `${s}-${a[s]}`
    );
    return /* @__PURE__ */ e(
      en,
      {
        type: "multiple",
        value: l,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: a.map((s, i) => /* @__PURE__ */ e(
          tn,
          {
            "aria-label": s,
            value: `${i}-${s}`,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: s[0]
          },
          i
        ))
      }
    );
  }
), ii = 750, oi = ({ text: t, children: a }) => {
  const [n, r] = T(!1);
  j(() => {
    if (n) {
      const s = setTimeout(() => r(!1), ii);
      return () => clearTimeout(s);
    }
  }, [n]);
  const l = async () => {
    try {
      await navigator.clipboard.writeText(t), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      "aria-label": n ? "Copied!" : `Copy ${t}`,
      className: h(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        n ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: l,
      children: [
        a,
        /* @__PURE__ */ e("div", { className: "relative h-5 w-5", children: /* @__PURE__ */ o(ke, { mode: "wait", children: [
          !n && /* @__PURE__ */ e(
            K.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ e(
                B,
                {
                  icon: $r,
                  size: "md",
                  "aria-hidden": !0,
                  color: "default",
                  className: h(
                    "opacity-0 transition-opacity duration-300",
                    !n && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "copy-icon"
          ),
          n && /* @__PURE__ */ e(
            K.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ e(
                B,
                {
                  icon: wt,
                  size: "md",
                  "aria-hidden": !0,
                  color: "positive",
                  className: h(
                    "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                    n && "group-hover:opacity-100 group-focus-visible:opacity-100"
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
}, sn = Pa(
  ({ children: t, className: a, ...n }) => /* @__PURE__ */ o(
    fe,
    {
      ...n,
      className: h(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        a
      ),
      children: [
        t,
        /* @__PURE__ */ e("div", { className: "grid", children: /* @__PURE__ */ e(B, { "aria-hidden": !0, icon: vt, size: "md" }) })
      ]
    }
  )
);
sn.displayName = "NavigateAction";
const on = Pa(
  ({ children: t, className: a, href: n, ...r }) => /* @__PURE__ */ o(
    fe,
    {
      ...r,
      target: "_blank",
      href: n,
      rel: "noopener noreferrer",
      className: h(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        a
      ),
      children: [
        t,
        /* @__PURE__ */ e("div", { className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100", children: /* @__PURE__ */ e(
          B,
          {
            "aria-hidden": !0,
            icon: Br,
            size: "md",
            color: "default"
          }
        ) })
      ]
    }
  )
);
on.displayName = "OpenLinkAction";
const ze = E(
  (t, a) => {
    const {
      text: n,
      leftIcon: r,
      className: l,
      action: s = { type: "noop" }
    } = t;
    return /* @__PURE__ */ e(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: a,
        children: /* @__PURE__ */ o(
          ci,
          {
            action: s,
            className: h("flex items-center gap-1.5 p-1.5", l),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ e(B, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ e("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: n })
            ]
          }
        )
      }
    );
  }
);
ze.displayName = "ItemContainer";
const ci = ({
  children: t,
  action: a,
  ...n
}) => {
  const r = a.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ e(oi, { ...a, ...n, children: t });
    case "navigate":
      return /* @__PURE__ */ e(sn, { ...a, ...n, children: t });
    case "open-link":
      return /* @__PURE__ */ e(on, { ...a, ...n, children: t });
    case "noop":
      return /* @__PURE__ */ e("div", { ...n, children: t });
    default:
      return r;
  }
}, et = (t, a) => t && t.type === "copy" ? { type: "copy", text: t.text ?? a } : t, cn = E(
  ({ text: t, icon: a, action: n }, r) => /* @__PURE__ */ e(
    ze,
    {
      ref: r,
      text: t,
      leftIcon: a,
      action: et(n, t)
    }
  )
);
cn.displayName = "DataList.Item";
const di = $("DataList.Item", cn), dn = E(
  ({ action: t, avatarUrl: a, firstName: n, lastName: r }, l) => {
    const s = `${n} ${r}`;
    return /* @__PURE__ */ e(
      ze,
      {
        ref: l,
        leftIcon: () => /* @__PURE__ */ e(
          ge,
          {
            size: "xs",
            src: a,
            firstName: n,
            lastName: r
          }
        ),
        text: s,
        action: et(t, s)
      }
    );
  }
);
dn.displayName = "PersonItem";
const ui = $("PersonItem", dn), un = E(
  ({ avatarUrl: t, name: a, action: n }, r) => /* @__PURE__ */ e(
    ze,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ e(Sa, { name: a, size: "xs", src: t }),
      text: a,
      action: et(n, a)
    }
  )
);
un.displayName = "CompanyItem";
const fi = $("CompanyItem", un), fn = E(
  ({ action: t, name: a }, n) => /* @__PURE__ */ e(
    ze,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ e(Wr, { name: a, size: "xs" }),
      text: a,
      action: et(t, a)
    }
  )
);
fn.displayName = "TeamItem";
const mi = $("TeamItem", fn), mn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Aa, { ...t }) })
);
mn.displayName = "DotTagItem";
const hi = $("DotTagItem", mn), hn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ct, { ...t }) })
);
hn.displayName = "AlertTagItem";
const pi = $("AlertTagItem", hn), pn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Mr, { ...t }) })
);
pn.displayName = "BalanceTagItem";
const gi = $(
  "BalanceTagItem",
  pn
), gn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ee, { ...t }) })
);
gn.displayName = "StatusTagItem";
const bi = $(
  "StatusTagItem",
  gn
), bn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ie, { ...t }) })
);
bn.displayName = "RawTagItem";
const xi = $("RawTagItem", bn);
function vi(t, a) {
  return /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(jr, { ...t }) });
}
const xn = E(vi);
xn.displayName = "TagListItem";
const yi = $("TagListItem", xn), vn = E(
  ({ children: t, label: a, isHorizontal: n = !1 }, r) => /* @__PURE__ */ o(
    "div",
    {
      className: h(
        n ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"
      ),
      children: [
        a && /* @__PURE__ */ e(
          "p",
          {
            className: h(
              "px-1.5 text-f1-foreground-secondary",
              n ? "mt-2 w-44 xs:px-0" : "mb-0.5"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ e("ul", { className: "flex flex-col justify-center gap-0.5", ref: r, children: t })
      ]
    }
  )
);
vn.displayName = "DataList";
const wi = $("DataList", vn), ue = Object.assign(wi, {
  Item: di,
  CompanyItem: fi,
  PersonItem: ui,
  TeamItem: mi,
  DotTagItem: hi,
  AlertTagItem: pi,
  BalanceTagItem: gi,
  StatusTagItem: bi,
  RawTagItem: xi,
  TagListItem: yi
}), Ni = ({ content: t }) => /* @__PURE__ */ o(U, { children: [
  t.type === "weekdays" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(si, { ...t }) }),
  t.type === "person" && /* @__PURE__ */ e(ue.PersonItem, { ...t }),
  t.type === "item" && /* @__PURE__ */ e(ue.Item, { ...t }),
  t.type === "team" && /* @__PURE__ */ e(ue.TeamItem, { ...t }),
  t.type === "company" && /* @__PURE__ */ e(ue.CompanyItem, { ...t }),
  t.type === "dot-tag" && /* @__PURE__ */ e(ue.DotTagItem, { ...t }),
  t.type === "alert-tag" && /* @__PURE__ */ e(ue.AlertTagItem, { ...t }),
  t.type === "balance-tag" && /* @__PURE__ */ e(ue.BalanceTagItem, { ...t }),
  t.type === "status-tag" && /* @__PURE__ */ e(ue.StatusTagItem, { ...t }),
  t.type === "raw-tag" && /* @__PURE__ */ e(ue.RawTagItem, { ...t }),
  t.type === "tag-list" && /* @__PURE__ */ e(ue.TagListItem, { ...t.tagList }),
  t.type === "avatar-list" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(It, { ...t.avatarList }) })
] }), Ci = E(
  function({ title: a, content: n, isHorizontal: r = !1, spacingAtTheBottom: l }, s) {
    const i = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: h(
          "flex flex-col gap-0.5",
          l && !r && "pb-3",
          r && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"
        ),
        children: /* @__PURE__ */ e(ue, { label: a, isHorizontal: r, children: i.map((c, d) => /* @__PURE__ */ e(Ni, { content: c }, d)) })
      }
    );
  }
), Ii = ae(
  $("DetailsItem", Ci)
), ki = E(
  function({ title: a, tableView: n = !1, details: r, dataTestId: l }, s) {
    return /* @__PURE__ */ e(Vr, { dataTestId: l, children: /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-4", children: [
      !!a && /* @__PURE__ */ e("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: a.toLocaleUpperCase() }),
      /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex flex-col",
            n ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"
          ),
          children: r?.map((i, c) => /* @__PURE__ */ o(re.Fragment, { children: [
            /* @__PURE__ */ e(
              Ii,
              {
                title: i.title,
                content: i.content,
                spacingAtTheBottom: i.spacingAtTheBottom,
                isHorizontal: n
              },
              i.title
            ),
            n && c !== r.length - 1 && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
          ] }, i.title))
        }
      )
    ] }) });
  }
), jc = $(
  "DetailsItemsList",
  ki
), yn = re.forwardRef(({ person: t, onClick: a, ...n }, r) => {
  const l = () => {
    a();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: h(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        n.withPointerCursor && "cursor-pointer"
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
            n.info && /* @__PURE__ */ e(ve, { label: n.info, children: /* @__PURE__ */ e(
              B,
              {
                icon: xa,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in n && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: n.bottomTags.map((s, i) => /* @__PURE__ */ o(U, { children: [
            /* @__PURE__ */ e(Ie, { ...s }, s.text),
            i < n.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in n && n.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: n.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in n && n.rightTag && /* @__PURE__ */ e(Aa, { ...n.rightTag }),
          "actions" in n && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            n.actions?.primary && /* @__PURE__ */ e(
              M,
              {
                variant: "outline",
                onClick: n.actions.primary.onClick,
                label: n.actions.primary.label,
                icon: n.actions.primary.icon
              }
            ),
            n.actions?.secondary && /* @__PURE__ */ e(
              M,
              {
                variant: "outline",
                onClick: n.actions.secondary.onClick,
                label: "Secondary",
                icon: n.actions.secondary.icon,
                hideLabel: !0
              }
            )
          ] })
        ] })
      ]
    }
  );
}), Si = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(_, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(_, { className: "h-4" }),
    /* @__PURE__ */ e(_, { className: "h-4" })
  ] })
] });
yn.displayName = "OnePersonListItem";
const Vc = ae(
  $(
    "OnePersonListItem",
    ee(yn, Si)
  )
), Ai = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Li({
  children: t,
  sidebar: a,
  banner: n,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(Kl, { children: /* @__PURE__ */ e(
    Fi,
    {
      ai: r,
      aiPromotion: l,
      sidebar: a,
      banner: n,
      children: t
    }
  ) });
}
function Fi({
  children: t,
  sidebar: a,
  banner: n,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? Gr : l?.enabled ? ps : Sl, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(s, { ...i, children: /* @__PURE__ */ e(
    Di,
    {
      ai: r,
      aiPromotion: l,
      sidebar: a,
      banner: n,
      children: t
    }
  ) });
}
const Gc = $(
  "ApplicationFrame",
  Li
), Ti = ({ contentId: t }) => {
  const a = oe();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: le(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: a.actions.skipToContent
    }
  );
};
function _i(t, a, n) {
  return !a && t ? n === "hidden" : a && !t ? n !== "hidden" : !1;
}
function Ei(t, a) {
  const { sidebarState: n, toggleSidebar: r } = Ae(), l = G(t);
  j(() => {
    a && _i(
      t,
      l.current,
      n
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, a, n, r]);
}
function Di({
  ai: t,
  aiPromotion: a,
  children: n,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ae(), f = Ye(), {
    open: u,
    visualizationMode: m,
    canvasContent: p,
    chatWidth: b,
    resizable: g
  } = Hr(), x = m === "fullscreen", y = m === "canvas", { open: L } = Ze(), O = g ? b : Kr, W = G(x), D = x && !W.current, F = !x && W.current, [
    I,
    Z
  ] = T(!1);
  j(() => {
    !x && W.current && Z(!0), W.current = x;
  }, [x]);
  const z = x || I || F, w = q(() => D ? { duration: 0.15, ease: "easeOut" } : F ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [D, F]), k = ot(
    `(max-width: ${je.xl}px)`,
    { initializeWithValue: !0 }
  ), N = ot(`(max-width: ${je.md}px)`, {
    initializeWithValue: !0
  });
  return j(() => {
    d(u);
  }, [u, d]), j(() => {
    d(L);
  }, [L, d]), Ei(u, k), /* @__PURE__ */ e(
    Ur,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(La, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(ke, { children: s === "unlocked" && /* @__PURE__ */ e(
            K.nav,
            {
              className: h(
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
              className: h(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (S) => {
                s === "hidden" ? S?.setAttribute("inert", "") : S?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Ti, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            K.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !N ? O : 0
              },
              transition: { paddingRight: Ai },
              children: [
                /* @__PURE__ */ e(
                  K.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: h(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      z ? "overflow-hidden" : "overflow-auto",
                      !u && !L && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ e(
                      K.div,
                      {
                        className: h(
                          "flex max-w-full flex-1",
                          z ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: n
                      }
                    )
                  }
                ),
                t?.enabled && y && p && /* @__PURE__ */ e(
                  "div",
                  {
                    className: h(
                      "pointer-events-none",
                      N ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[15]"
                    ),
                    style: N ? void 0 : { right: O },
                    children: /* @__PURE__ */ e(qr, {})
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  K.div,
                  {
                    className: h(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      N ? "fixed inset-0 z-[30]" : h(
                        "absolute right-0 top-0 bottom-0",
                        z ? "z-20" : "z-0",
                        s === "hidden" && z ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: N || x ? "100%" : O
                    },
                    transition: w,
                    onAnimationComplete: () => {
                      I && Z(!1);
                    },
                    children: /* @__PURE__ */ e(Yr, {})
                  }
                )
              ]
            }
          ),
          a?.enabled && /* @__PURE__ */ e(hs, {})
        ] }) })
      ] })
    }
  );
}
const Oi = be({
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
function wn({
  children: t,
  header: a,
  period: n,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Ae();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: Oi({ period: n }) }),
        a && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ e(
              M,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: ha,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "flex flex-row items-center",
                  i ? "gap-1.5" : "gap-3"
                ),
                children: [
                  a?.onPulseClick ? /* @__PURE__ */ e(
                    El,
                    {
                      src: a.employeeAvatar,
                      firstName: a.employeeFirstName,
                      lastName: a.employeeLastName,
                      pulse: a.pulse,
                      onPulseClick: a.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    ge,
                    {
                      src: a.employeeAvatar,
                      firstName: a.employeeFirstName,
                      lastName: a.employeeLastName,
                      size: i ? "small" : a.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e(
                      "p",
                      {
                        className: h(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: a.title
                      }
                    ),
                    a.description && /* @__PURE__ */ e(
                      "p",
                      {
                        className: h(
                          i ? "text-md" : "text-lg",
                          "text-f1-foreground-secondary"
                        ),
                        children: a.description
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ e(pa, {}),
            /* @__PURE__ */ e(Ua, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
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
wn.displayName = "DaytimePage";
const Hc = ae(
  $("DaytimePage", wn)
);
function zi(t) {
  return t.filter((a) => !!a.title).map(({ title: a, description: n, href: r, onClick: l, target: s }) => ({
    label: a,
    description: n,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Pi({ label: t, options: a, hasNewUpdate: n }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ce, { items: zi(a), children: /* @__PURE__ */ o(
        "button",
        {
          className: h(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            le()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(B, { icon: Fa, size: "sm" }),
            n && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Uc = ae(
  $("OmniButton", Pi)
);
function Nn({ children: t, header: a, embedded: n = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${n ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        a && /* @__PURE__ */ e("div", { className: "flex flex-col", children: a }),
        /* @__PURE__ */ e("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: t })
      ]
    }
  );
}
Nn.displayName = "Page";
const Kc = ae($("Page", Nn));
function Ri({
  companies: t,
  selected: a,
  onChange: n,
  isLoading: r = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = q(
    () => t.find((c) => c.id === a) || t[0],
    [t, a]
  );
  return r ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ e(_, { className: "size-6" }),
    /* @__PURE__ */ e(_, { className: "h-3 w-14" })
  ] }) : t.length + (s?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    la,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    $i,
    {
      companies: t,
      selected: i,
      onChange: n,
      additionalOptions: s,
      children: /* @__PURE__ */ e(
        la,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const $i = ({
  companies: t,
  selected: a,
  onChange: n,
  children: r,
  additionalOptions: l = []
}) => {
  const s = oe(), [i, c] = T(!1), d = q(
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
    const m = l?.find((p) => p.value === u);
    if (m?.onClick) {
      m.onClick();
      return;
    }
    n(u);
  };
  return /* @__PURE__ */ e(
    Ve,
    {
      label: s.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: d,
      value: a.id,
      onChange: f,
      placeholder: s.navigation.sidebar.companySelector.placeholder,
      open: i,
      onOpenChange: c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: h(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            le()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: a?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              K.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(B, { icon: yt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, la = ({
  company: t,
  withNotification: a = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: h(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        Sa,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: a ? { icon: Ta, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(pe, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function qc({
  user: t,
  options: a,
  showActivityButton: n = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = oe();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ce, { items: a, children: /* @__PURE__ */ o(
      "button",
      {
        className: h(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          le("focus-visible:ring-inset")
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
          /* @__PURE__ */ e(pe, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    n && /* @__PURE__ */ e(ve, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        M,
        {
          icon: Ca,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Jr, { type: "highlight", size: "sm", icon: Ta }) })
    ] }) })
  ] });
}
function Bi({ isExpanded: t }) {
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
            className: h(
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
            className: h(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Wi() {
  const { prevSidebarState: t, sidebarState: a, toggleSidebar: n, isSmallScreen: r } = Ae(), l = G(null);
  return j(() => {
    t === "hidden" && a === "locked" && l.current?.focus();
  }, [t, a]), /* @__PURE__ */ o(
    ka,
    {
      variant: "ghost",
      size: "md",
      onClick: () => n(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: l,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ e("div", { className: h("hidden", { flex: !r }), children: /* @__PURE__ */ e(Bi, { isExpanded: a === "locked" }) }),
        /* @__PURE__ */ e("div", { className: h("hidden", { flex: r }), children: /* @__PURE__ */ e(B, { icon: Se, size: "md" }) })
      ]
    }
  );
}
function Yc({
  companies: t,
  selected: a,
  onChange: n,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Ri,
      {
        companies: t,
        selected: a,
        onChange: n,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Wi, {})
  ] });
}
function Mi() {
  const [t, a] = T(!1);
  return j(() => {
    a(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Cn = Ft(void 0);
function ji({ children: t }) {
  const [a, n] = T(!1), [r, l] = T(null);
  return /* @__PURE__ */ e(
    Cn.Provider,
    {
      value: { isDragging: a, setIsDragging: n, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function Dt() {
  const t = Je(Cn);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const Vi = ({
  item: t,
  active: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      B,
      {
        icon: t.icon,
        size: "md",
        className: h(
          "transition-colors",
          a ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(qe, { value: t.badge, size: "sm", type: "bold" })
] }), Gi = ({ item: t }) => {
  const { isActive: a } = xt(), { label: n, icon: r, ...l } = t, s = a(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    fe,
    {
      ...l,
      className: h(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        le("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(Vi, { item: t, active: s })
    }
  );
}, Hi = ({
  item: t,
  tooltip: a,
  dragConstraints: n,
  onRemove: r,
  index: l,
  total: s,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = oe(), { isDragging: u, setIsDragging: m, draggedItemId: p, setDraggedItemId: b } = Dt(), { isActive: g } = xt(), x = g(t.href, { exact: t.exactMatch }), y = G(!1), [L, O] = T(!1), W = l === 0, D = l === s - 1, F = s === 1, I = q(() => {
    const S = [];
    return !F && !W && S.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Zr
    }), !F && !D && S.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Xr
    }), S.length > 0 && S.push({ type: "separator" }), S.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Qr,
      critical: !0
    }), S;
  }, [F, W, D, f, i, l, r, t]), Z = () => {
    m(!0), O(!1), b(t.href || null), y.current = !0;
  }, z = () => {
    m(!1), b(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, w = u && p === t.href, k = q(
    () => h(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      x ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      L && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [x, L, w, d]
  ), N = q(() => /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(Ki, { tooltip: a, children: /* @__PURE__ */ o(
      fe,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: h(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          w && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            B,
            {
              icon: t.icon,
              size: "md",
              className: h(
                "transition-colors",
                x ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(el, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            pe,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!a,
              children: t.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ e(
      "div",
      {
        className: h(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          L && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ce,
          {
            open: L,
            onOpenChange: O,
            items: I,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(B, { icon: ut, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, x, L, w, I, a]);
  return d ? /* @__PURE__ */ e(
    _a,
    {
      value: t,
      drag: "y",
      dragConstraints: n,
      dragElastic: 0.1,
      onDragStart: Z,
      onDragEnd: z,
      className: k,
      whileDrag: {
        scale: 1.05
      },
      children: N
    }
  ) : /* @__PURE__ */ e("div", { className: k, children: N });
}, In = ({
  title: t,
  isOpen: a = !0,
  isRoot: n,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = T(a), f = Ye(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(al, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: h(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          le("focus-visible:ring-inset"),
          n && "hidden"
        ),
        onClick: u,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u();
        },
        children: [
          t,
          /* @__PURE__ */ e(
            K.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                B,
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
    /* @__PURE__ */ e(nl, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
      K.div,
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
}, st = ({
  category: t,
  isSortable: a = !1,
  dragConstraints: n,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Dt(), d = G(!1), f = tl(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, p = (g) => {
    !i && !d.current && r?.(t, g);
  }, b = /* @__PURE__ */ e(
    In,
    {
      title: t.title,
      isOpen: t.isOpen,
      isRoot: t.isRoot,
      onCollapse: p,
      isDragging: i,
      wasDragging: d,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: t.items.map((g, x) => /* @__PURE__ */ e(Gi, { item: g }, x))
        }
      )
    }
  );
  return a ? /* @__PURE__ */ e(
    _a,
    {
      id: t.id,
      value: t,
      dragConstraints: n,
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
      children: b
    }
  ) : b;
};
function Jc({
  tree: t,
  onCollapse: a,
  onSort: n,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = G(null), i = t.filter(
    (g) => g.isSortable === !1
  ), [c, d] = T(
    t.filter((g) => g.isSortable !== !1)
  ), [f, u] = T(0), m = Q((g) => {
    d(g);
  }, []), p = Q(
    (g) => {
      n?.(g);
    },
    [n]
  ), b = Mi();
  return /* @__PURE__ */ e(ji, { children: /* @__PURE__ */ e(La, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Ui,
    {
      disableDragging: b,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: a,
      onDragEnd: p,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((g) => g + 1)
    },
    f
  ) }) });
}
function Ui({
  nonSortableItems: t,
  sortableItems: a,
  setSortableItems: n,
  containerRef: r,
  onCollapse: l,
  onDragEnd: s,
  favorites: i = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = oe(), { isDragging: m } = Dt(), p = t.some((v) => v.isRoot), b = t.filter((v) => !v.isRoot).length > 0, g = a.length > 0, x = G(null), [y, L] = T(i), O = i.length > 0;
  j(() => {
    JSON.stringify(i) !== JSON.stringify(y) && L(i);
  }, [i]);
  const W = (v) => {
    L(v);
  }, D = Q(
    (v) => {
      const C = y.filter((P) => P.href !== v.href);
      L(C), c?.(C);
    },
    [y, c]
  ), F = Q(
    (v, C) => {
      if (C < 0 || C >= y.length) return;
      const P = [...y], [H] = P.splice(v, 1);
      P.splice(C, 0, H), L(P), c?.(P);
    },
    [y, c]
  ), [I, Z] = T(!1), z = G(null);
  j(() => {
    a.length > 0 && !I && (n([...a]), Z(!0));
  }, [a, n, I]), j(() => {
    const v = () => {
      z.current !== null && window.clearTimeout(z.current), z.current = window.setTimeout(() => {
        r.current && a.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v), z.current !== null && window.clearTimeout(z.current);
    };
  }, [r, a, d]);
  const w = "flex flex-col gap-0.5", k = q(
    () => y.reduce(
      (v, C, P) => (C.label in v || (v[C.label] = []), v[C.label].push(P), v),
      {}
    ),
    [y]
  ), N = q(
    () => O && y.map((v, C) => /* @__PURE__ */ e(
      Hi,
      {
        isSortable: !f,
        tooltip: (k[v.label] ?? []).length > 1 ? v.tooltip : void 0,
        item: v,
        dragConstraints: x,
        onRemove: D,
        index: C,
        total: y.length,
        onMove: F,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${v.href}-${v.label}`
    )),
    [
      O,
      y,
      k,
      D,
      F,
      c,
      f
    ]
  ), S = "flex flex-col gap-3", V = q(() => a.map((v) => /* @__PURE__ */ e(
    st,
    {
      category: v,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: a
    },
    v.id
  )), [a, f, r, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        p && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => v.isRoot).map((v, C) => /* @__PURE__ */ e(
          st,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        O && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(In, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: x, children: f ? /* @__PURE__ */ e("div", { className: w, children: N }) : /* @__PURE__ */ e(
          Rt,
          {
            axis: "y",
            values: y,
            onReorder: W,
            className: w,
            children: N
          }
        ) }) }) }),
        b && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((v) => !v.isRoot).map((v, C) => /* @__PURE__ */ e(
          st,
          {
            category: v,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        g && /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: S, children: V }) : /* @__PURE__ */ e(
              Rt,
              {
                axis: "y",
                values: a,
                onReorder: n,
                layoutScroll: !0,
                className: S,
                children: V
              }
            )
          }
        )
      ]
    }
  );
}
const Ki = ({
  tooltip: t,
  children: a
}) => t ? /* @__PURE__ */ e(ve, { description: t, children: a }) : a;
function Zc({
  onClick: t,
  placeholder: a,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: h(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        le()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(B, { icon: rl, size: "md" }),
          /* @__PURE__ */ e("span", { children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(ll, { keys: n }) })
      ]
    }
  ) });
}
const sa = ({ position: t }) => /* @__PURE__ */ e(
  K.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: h(
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
function qi({
  header: t,
  body: a,
  footer: n,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Ae(), i = Ye(), [c, d] = ct({ threshold: 1 }), [f, u] = ct({ threshold: 1 }), m = oe(), p = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, b = () => n ? Al(n) && r ? Ra(
    n,
    {
      onDropdownClick: r
    }
  ) : n : null;
  return /* @__PURE__ */ o(
    K.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: h(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : h(
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
      transition: p,
      children: [
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        a && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ke, { className: "h-full", children: [
            /* @__PURE__ */ e(
              "div",
              {
                ref: c,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ e("div", { className: "w-[var(--ds-sidebar-width)]", children: a }),
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
          /* @__PURE__ */ o(ke, { children: [
            !d && /* @__PURE__ */ e(sa, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(sa, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: b() })
      ]
    }
  );
}
const Xc = ae(qi), Yi = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, ia = {
  approved: {
    icon: ba,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Se,
    type: "critical",
    size: "sm"
  }
}, Ji = {
  icon: Fa,
  type: "neutral",
  size: "sm"
}, Zi = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Xi = (t) => t in ia ? ia[t] : Ji;
function oa(t) {
  return Zi[t ?? "neutral"] ?? 0;
}
const Qi = ({
  title: t,
  approvalsRequired: a = 1,
  status: n,
  approvers: r
}) => {
  const l = oe(), s = a === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    a.toString()
  ), i = l.approvals.statuses[n], c = q(() => r.map((d) => {
    const f = Xi(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => oa(f.badge?.type) - oa(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ e(Ee, { text: i, variant: Yi[n] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(It, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, eo = ({ steps: t }) => {
  const n = oe().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: n }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: s + 1 })
          }
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: t.map((l, s) => /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ e(
          Qi,
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
}, Qc = ae(
  $("OneApprovalHistory", eo)
), Ot = {
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
}, to = be({
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
}), ao = re.forwardRef(function({ className: a, gap: n, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ e("div", { className: h("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ e(
    "div",
    {
      className: h(to({ gap: n, tileSize: l }), a),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), no = be({
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
}), kn = E(function({
  className: a,
  grow: n,
  basis: r,
  shrink: l,
  paddingX: s,
  paddingY: i,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: p,
  width: b,
  ...g
}, x) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        no({
          paddingX: s,
          basis: r,
          paddingY: i,
          grow: n,
          shrink: l,
          inline: c,
          overflow: d,
          maxWidth: f,
          justifyContent: u,
          alignItems: m,
          height: p,
          width: b
        }),
        a
      ),
      ref: x,
      ...g
    }
  );
}), ro = be({
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
}), lo = re.forwardRef(function({ className: a, gap: n, wrap: r, ...l }, s) {
  return /* @__PURE__ */ e(
    kn,
    {
      className: h(ro({ gap: n, wrap: r }), a),
      ref: s,
      ...l
    }
  );
}), so = be({
  base: "flex-col",
  variants: {
    gap: {
      ...Ot
    }
  },
  defaultVariants: {}
}), io = E(function({ className: a, gap: n, children: r, ...l }, s) {
  return /* @__PURE__ */ e(
    kn,
    {
      className: h(so({ gap: n }), a),
      ref: s,
      ...l,
      children: r
    }
  );
}), ed = me(
  {
    name: "Stack",
    type: "layout"
  },
  io
), td = me(
  {
    name: "Split",
    type: "layout"
  },
  lo
), ad = me(
  {
    name: "AutoGrid",
    type: "layout"
  },
  ao
), oo = ({ children: t }) => {
  const { enabled: a } = Ma();
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        a && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": a,
      children: /* @__PURE__ */ e(
        K.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: a ? 0 : 1,
            scale: a ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: t
        }
      )
    }
  );
}, co = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), uo = E(function({ header: a, children: n, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Ma();
  j(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (b) => !!b && !(re.isValidElement(b) && b.type === re.Fragment && re.Children.count(b.props.children) === 0), p = () => {
    a?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    kt,
    {
      className: h(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        a && /* @__PURE__ */ e(St, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              a.title && /* @__PURE__ */ e(At, { className: "truncate", children: a.title }),
              a.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(co, {}),
                /* @__PURE__ */ e(Ea, { className: "truncate", children: a.subtitle })
              ] }),
              a.info && /* @__PURE__ */ e(ve, { label: a.info, children: /* @__PURE__ */ e(
                B,
                {
                  icon: Da,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              a.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(qe, { value: a.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ e(Ct, { text: s, level: "critical" }),
              i && /* @__PURE__ */ e(Ee, { text: i.text, variant: i.variant }),
              a.link && /* @__PURE__ */ e(
                sl,
                {
                  onClick: p,
                  href: a.link.url,
                  title: a.link.title,
                  icon: a.link.icon
                }
              )
            ] })
          ] }),
          a.comment && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(oo, { children: /* @__PURE__ */ e(il, { children: a.comment }) }),
            !!a.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              M,
              {
                icon: f ? ol : cl,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Lt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((b, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: b.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!b.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.prefixUnit }),
              b.value,
              !!b.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.postfixUnit })
            ] })
          ] }, g)) }),
          re.Children.toArray(n).filter(m).map((b, g) => /* @__PURE__ */ o(re.Fragment, { children: [
            g > 0 && /* @__PURE__ */ e(dl, { bare: !0 }),
            b
          ] }, g))
        ] }),
        r && /* @__PURE__ */ e(ul, { children: /* @__PURE__ */ e(M, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), fo = be({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), mo = E(
  function({ header: a, height: n }, r) {
    return /* @__PURE__ */ o(
      kt,
      {
        className: h(
          "flex gap-4 border-f1-border-secondary",
          n === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(St, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                a?.title ? /* @__PURE__ */ e(At, { children: a.title }) : /* @__PURE__ */ e(_, { className: "h-4 w-full max-w-16" }),
                a?.subtitle && /* @__PURE__ */ e(Ea, { children: a.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            Lt,
            {
              "aria-hidden": !0,
              className: h(n !== "full" && fo({ height: n })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ e(
                _,
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
), Ne = ae(
  $("Widget", ee(uo, mo))
), ie = Object.assign(
  E(function({ chart: a, summaries: n, ...r }, l) {
    return /* @__PURE__ */ e(Ne, { ref: l, ...r, summaries: n, children: a && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: a }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), ho = ee(
  E(function({ canBeBlurred: a, ...n }, r) {
    const l = {
      ...n,
      header: {
        ...n.header,
        canBeBlurred: a
      }
    }, s = {
      ...n.chart,
      yAxis: n.chart.yAxis ? { ...n.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      ie,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(Dl, { ...s, canBeBlurred: a })
      }
    );
  }),
  ie.Skeleton
), po = $(
  "AreaChartWidget",
  ho
), go = E(function(a, n) {
  return /* @__PURE__ */ e(
    ie,
    {
      ref: n,
      ...a,
      chart: /* @__PURE__ */ e(Ol, { yAxis: { hide: !0 }, ...a.chart })
    }
  );
}), bo = $(
  "BarChartWidget",
  ee(go, ie.Skeleton)
), xo = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(zl, { yAxis: { hide: !0 }, ...a.chart })
        }
      );
    }
  ),
  ie.Skeleton
), vo = $(
  "LineChartWidget",
  xo
), yo = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(Pl, { ...a.chart })
        }
      );
    }
  ),
  ie.Skeleton
), wo = $(
  "PieChartWidget",
  yo
), No = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(ie, { ref: n, ...a, chart: null });
    }
  ),
  ie.Skeleton
), Co = $(
  "SummariesWidget",
  No
), Io = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        ie,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(Rl, { xAxis: { hide: !0 }, ...a.chart })
        }
      );
    }
  ),
  ie.Skeleton
), ko = $(
  "VerticalBarChartWidget",
  Io
), nd = me(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  po
), rd = me(
  {
    name: "BarChartWidget",
    type: "info"
  },
  bo
), ld = me(
  {
    name: "LineChartWidget",
    type: "info"
  },
  vo
), sd = me(
  {
    name: "PieChartWidget",
    type: "info"
  },
  wo
), id = me(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  ko
), od = me(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Co
), So = (t, a) => /* @__PURE__ */ o(
  "svg",
  {
    width: "366",
    height: "146",
    viewBox: "0 0 366 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: a,
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
), Ao = E(So), Lo = (t, a) => /* @__PURE__ */ o(
  "svg",
  {
    width: "406",
    height: "179",
    viewBox: "0 0 406 179",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: a,
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
), Fo = E(Lo), To = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, _o = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Eo = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Do = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Oo = E(
  function({ title: a, content: n, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = To[i], f = _o[i], u = Eo[i], m = Do[i];
    return /* @__PURE__ */ o(
      kt,
      {
        className: h(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(St, { className: "-mt-0.5", children: /* @__PURE__ */ e(At, { children: a }) }),
          /* @__PURE__ */ o(Lt, { className: h("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: h(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(Ao, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ e(Fo, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: n }),
              r && /* @__PURE__ */ e(
                M,
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
), cd = ae(
  $("ChartWidgetEmptyState", Oo)
);
function zo(t, a) {
  const n = G(null), r = G(null), [l, s] = T({
    visibleItems: [],
    overflowItems: []
  });
  fl({
    ref: n,
    onResize: () => {
      f();
    }
  });
  const i = Q(
    (u, m, p) => m < p - 1 ? u + a : u,
    [a]
  ), c = Q(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let p = 0; p < u.length; p++) {
      const b = u[p].getBoundingClientRect().height;
      m.push(b);
    }
    return m;
  }, []), d = Q(
    (u, m) => {
      let p = 0, b = 0;
      for (let g = 0; g < u.length; g++) {
        const x = b + u[g];
        if (x > m + 30) break;
        b = x, b = i(
          b,
          g,
          u.length
        ), p++;
      }
      return p;
    },
    [i]
  ), f = Q(() => {
    if (!n.current || t.length === 0) return;
    const u = n.current.clientHeight, m = c(), p = d(
      m,
      u
    );
    s(p === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (b) => b.visibleItems.length === p && b.overflowItems.length === t.length - p ? b : {
      visibleItems: t.slice(0, p),
      overflowItems: t.slice(p)
    });
  }, [t, c, d]);
  return j(() => {
    f();
  }, [f]), {
    containerRef: n,
    measurementContainerRef: r,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const tt = function({
  items: a,
  renderListItem: n,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = zo(a, l);
  return j(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: h("relative flex h-full flex-col", r),
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
            children: a.map((u, m) => /* @__PURE__ */ e("div", { "data-testid": "overflow-measurement-item", children: n(u, m, !1) }, `measure-${m}`))
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
                children: n(u, m, !0)
              },
              `item-${m}`
            ))
          }
        )
      ]
    }
  );
};
tt.displayName = "VerticalOverflowList";
const dd = ({
  events: t,
  showAllItems: a,
  gap: n = 8,
  minSize: r = 184
}) => t.length ? a ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(gt, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  tt,
  {
    items: t,
    gap: n,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(gt, { ...l }, l.title)
  }
) : null, Po = ({ onClick: t, children: a }) => {
  const n = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: h(
        n,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: a
    }
  ) : /* @__PURE__ */ e("div", { className: n, tabIndex: 1, children: a });
};
function ud({
  label: t,
  count: a,
  icon: n,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(Po, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: h(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ e(B, { icon: n, size: "md", className: r })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: a })
      ]
    }
  ) });
}
const Ro = E(
  function({ content: a, label: n, color: r, ...l }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
      /* @__PURE__ */ e("p", { className: "text-3xl font-semibold", children: a }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: n,
            children: n
          }
        ),
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: h("flex", r), children: /* @__PURE__ */ e(B, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: h("flex", r), children: /* @__PURE__ */ e(Nt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, n);
  }
), fd = E(
  function({ items: a }, n) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: a.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ e(
          Ro,
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
), $o = ({
  onClick: t,
  withEmoji: a,
  withPointerCursor: n,
  children: r
}) => {
  const l = h(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "gap-2" : "gap-2.5",
    n ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function md({
  id: t,
  title: a,
  subtitle: n,
  avatars: r,
  remainingCount: l,
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    $o,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(ml, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(hl, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: a }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          It,
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
const Bo = ({ onClick: t, className: a, children: n }) => t ? /* @__PURE__ */ e("a", { className: a, onClick: t, tabIndex: 0, children: n }) : /* @__PURE__ */ e("div", { className: a, tabIndex: -1, children: n });
function ca({
  id: t,
  title: a,
  subtitle: n,
  onClick: r,
  module: l
}) {
  const s = h(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Bo, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: s, children: [
    /* @__PURE__ */ e(Ia, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: a }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
const Wo = ({ onClick: t, className: a, children: n }) => t ? /* @__PURE__ */ e("a", { className: a, onClick: t, tabIndex: 0, children: n }) : /* @__PURE__ */ e("div", { className: a, tabIndex: -1, children: n });
function bt({
  id: t,
  title: a,
  alert: n,
  rawTag: r,
  count: l,
  icon: s,
  rightIcon: i,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = h(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Wo, { onClick: (p) => {
    p.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ e(
        B,
        {
          icon: s,
          size: "md",
          className: h("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: a }),
      i && /* @__PURE__ */ e(
        B,
        {
          icon: i,
          size: "md",
          className: h("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      n && /* @__PURE__ */ e(Ct, { ...n }),
      r && /* @__PURE__ */ e(Ie, { ...r }),
      !!l && /* @__PURE__ */ e(qe, { value: l })
    ] })
  ] });
}
function hd({
  items: t,
  minSize: a = 184,
  onClickItem: n,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s) => /* @__PURE__ */ e(ca, { ...s, onClick: n }, s.id)) }) : /* @__PURE__ */ e(
    tt,
    {
      items: t,
      minSize: a,
      renderListItem: (s) => /* @__PURE__ */ e(ca, { ...s, onClick: n }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function pd({
  items: t,
  gap: a,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${n}px` }, children: t.map((s) => /* @__PURE__ */ e(bt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ e(
    tt,
    {
      items: t,
      gap: a,
      renderListItem: (s) => /* @__PURE__ */ e(bt, { ...s, onClick: r }),
      minSize: n
    }
  );
}
const Mo = ({ title: t, info: a }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: a })
] }), gd = E(
  function({ title: a, titleValue: n, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      a && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: a }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            ve,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(B, { icon: Da, size: "sm" })
            }
          ) })
        ] }),
        n && /* @__PURE__ */ e("div", { children: n })
      ] }),
      l.map((i) => /* @__PURE__ */ e(Mo, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function bd({
  title: t,
  subtitle: a,
  data: n,
  helpText: r,
  legend: l = !1,
  hideTooltip: s = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: t }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: a })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      $l,
      {
        data: n,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: h(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: r
      }
    ) })
  ] });
}
const Sn = (t, a) => ((a ?? 0) < -1 * (t ?? 0) ? -1 * t : a) ?? 0, jo = ({
  data: t = [],
  labels: a,
  trackedMinutes: n,
  remainingMinutes: r,
  canSeeRemainingTime: l = !0
}) => {
  const i = t[t.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": a.clockedOut,
    "clocked-in": a.clockedIn,
    break: a.onBreak
  }[i], d = (() => {
    if (!l || r === void 0) return;
    const u = Sn(
      n,
      r
    ), m = Math.abs(u), p = Math.floor(m / 60), b = Math.floor(m % 60), g = `${p.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return r >= 0 ? `${a.remainingTime} ${g}` : `${a.overtime} ${g}`;
  })(), f = ye[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, it = "--:--", Vo = (t, a) => {
  if (t && t > 0)
    return {
      value: t * 60 / a,
      color: ye.empty
    };
  if (!a)
    return {
      value: 1,
      color: ye.empty
    };
}, Go = ({
  data: t = [],
  trackedMinutes: a,
  remainingMinutes: n = 0
}) => {
  const r = n < 0 && n < -1 * a, l = Sn(
    a,
    n
  ), s = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : Vo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const p = (m.to.getTime() - m.from.getTime()) / 1e3, b = m.variant === "clocked-in" ? Math.min(p, c) : 0, x = (p - b) / s;
        return c -= b, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: b / s + x,
            color: ye.overtime
          }
        ] : [
          ...u,
          {
            value: b / s,
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
}, Ho = ({
  data: t = [],
  remainingMinutes: a,
  trackedMinutes: n = 0
}) => {
  const r = t.find((p) => p.variant === "clocked-in")?.from, l = t.at(-1), s = r ? Mt(r) : it, i = a === void 0 || a > 0 ? it : l ? Mt(l.to) : it, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : n * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function Uo({
  data: t = [],
  trackedMinutes: a = 0,
  remainingMinutes: n
}) {
  const r = Go({
    data: t,
    trackedMinutes: a,
    remainingMinutes: n
  }), { primaryLabel: l, secondaryLabel: s, time: i } = Ho({
    data: t,
    trackedMinutes: a,
    remainingMinutes: n
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(Bl, { width: 156, height: 156, children: /* @__PURE__ */ e(
      Wl,
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
          pl,
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
function Ko({
  text: t,
  placeholder: a,
  icon: n,
  onClick: r
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
      onClick: r,
      children: [
        n && /* @__PURE__ */ e(B, { icon: n, className: "text-f1-icon" }),
        /* @__PURE__ */ e(
          "span",
          {
            className: h(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? a
          }
        ),
        /* @__PURE__ */ e(B, { icon: gl })
      ]
    }
  );
}
function xd({
  trackedMinutes: t,
  remainingMinutes: a,
  data: n = [],
  labels: r,
  locationId: l,
  locations: s,
  canShowLocation: i = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: p,
  canShowBreakButton: b = !0,
  canSeeGraph: g = !0,
  canSeeRemainingTime: x = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: L = !0,
  projectSelectorElement: O,
  breakTypeName: W
}) {
  const { status: D, statusText: F, subtitle: I, statusColor: Z } = jo({
    data: n,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: a,
    canSeeRemainingTime: x
  }), z = D === "clocked-out", w = m?.map((R) => ({
    value: R.id,
    label: R.duration ? `${R.name} · ${R.duration}` : R.name,
    description: R.description,
    tag: R.isPaid ? r.paid : r.unpaid
  })) ?? [], [k, N] = T(!1), S = () => {
    if (w.length > 1)
      k || N(!0);
    else {
      const R = w?.[0]?.value;
      u?.(R);
    }
  }, V = (R) => {
    p?.(R), N(!1), u?.(R);
  }, v = z && s.length && !c && i, C = s.find((R) => R.id === l), P = s.map((R) => ({
    value: R.id,
    label: R.name,
    icon: R.icon
  })), H = D === "break", [ce, ne] = T(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: F }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                K.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: Z
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
                    backgroundColor: Z
                  }
                }
              )
            ] })
          ] }),
          I && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: I })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          D === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            M,
            {
              onClick: d,
              label: r.clockIn,
              icon: $t
            }
          ) }),
          D === "clocked-in" && /* @__PURE__ */ o(U, { children: [
            b && /* @__PURE__ */ e(U, { children: w.length > 1 && p ? /* @__PURE__ */ e(
              Ve,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: V,
                open: k,
                onOpenChange: N,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  M,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Bt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              M,
              {
                onClick: S,
                label: r.break,
                variant: "neutral",
                icon: Bt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              M,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Wt
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
                icon: Wt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              M,
              {
                onClick: d,
                label: r.resume,
                icon: $t
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ e(
        Uo,
        {
          data: n,
          trackedMinutes: t,
          remainingMinutes: x ? a : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: v ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ e(
        Ve,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: P,
          onChange: y,
          open: ce,
          onOpenChange: ne,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Ko,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      L && O
    ] }) : /* @__PURE__ */ o(U, { children: [
      i && C && /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(Ie, { text: C.name, icon: C.icon }) }),
      L && O,
      H && W && /* @__PURE__ */ e(Ie, { text: W })
    ] }) })
  ] }) });
}
const qo = {
  done: vl,
  "in-progress": xl,
  todo: bl
}, Yo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Jo({
  task: t,
  status: a,
  onClick: n,
  hideIcon: r = !1
}) {
  const l = () => {
    n?.(t);
  }, s = q(() => {
    if (!r)
      return qo[a];
  }, [a, r]);
  return /* @__PURE__ */ e(
    bt,
    {
      id: t.id,
      title: t.text,
      icon: s,
      iconClassName: Yo[a],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: yl
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function vd({
  tasks: t,
  onClickTask: a,
  hideIcons: n = !1,
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
    ).map(({ id: u, text: m, badge: p, counter: b }) => ({
      id: u,
      text: m,
      badge: p,
      counter: b,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ e(
    Jo,
    {
      task: d,
      status: d.status,
      hideIcon: n,
      onClick: a
    },
    d.id
  )) });
}
var Zo = Object.defineProperty, Xo = Object.defineProperties, Qo = Object.getOwnPropertyDescriptors, Ue = Object.getOwnPropertySymbols, An = Object.prototype.hasOwnProperty, Ln = Object.prototype.propertyIsEnumerable, da = (t, a, n) => a in t ? Zo(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, se = (t, a) => {
  for (var n in a || (a = {})) An.call(a, n) && da(t, n, a[n]);
  if (Ue) for (var n of Ue(a)) Ln.call(a, n) && da(t, n, a[n]);
  return t;
}, at = (t, a) => Xo(t, Qo(a)), ec = (t, a) => {
  var n = {};
  for (var r in t) An.call(t, r) && a.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Ue) for (var r of Ue(t)) a.indexOf(r) < 0 && Ln.call(t, r) && (n[r] = t[r]);
  return n;
}, tc = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, ac = ({ spotsList: t, usedSpot: a }) => t.some((n) => n !== a && a.left === n.left), nc = ({ position: t, spot: a, stone: n }) => {
  if (t.left > a.left && a.right >= t.left && t.top + n.height > a.top) {
    if (a.bottom && a.bottom < t.top) return a;
    let r = se({}, a);
    return r.right = t.left, r;
  }
  return null;
}, rc = ({ position: t, stone: a, spot: n }) => {
  if (t.left + a.width > n.left && t.top >= n.top) {
    if (n.bottom && n.bottom < t.top || n.right < t.left) return n;
    let r = se({}, n);
    return r.bottom = t.top, r;
  }
  return null;
}, lc = ({ stone: t, position: a, spotsList: n, optimalSpot: r }) => {
  let l = se({}, r);
  return l.left = a.left + t.width, tc(l) || ac({ usedSpot: l, spotsList: n }) ? null : l;
}, sc = ({ spots: t, position: a, optimalSpot: n, stone: r }) => t.map((l, s, i) => {
  if (l === n) return lc({ stone: r, position: a, optimalSpot: n, spotsList: i });
  let c = nc({ position: a, spot: l, stone: r });
  return c || rc({ position: a, stone: r, spot: l }) || l;
});
function ic(t, a) {
  for (let n = 0, r = a.length; n < r; n++) {
    let l = a[n];
    if (t(l)) return l;
  }
  return null;
}
var oc = (t, a) => a.filter(t), cc = (t, a) => [...a].sort(t), dc = (t, a) => t.top === a.top ? t.left < a.left ? -1 : 1 : t.top < a.top ? -1 : 1, uc = (t) => cc(dc, t), fc = ({ availableSpots: t, optimalSpot: a, containerSize: n, stone: r }) => {
  let l = { right: n, top: a.top + r.height, left: a.left };
  a.bottom && (l.bottom = a.bottom);
  for (let s = 0, i = t.length; s < i; s += 1) {
    let c = t[s];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, mc = (t, a) => {
  let n = t.right - t.left >= a.width;
  if (!t.bottom) return n;
  let r = t.bottom - t.top >= a.height;
  return n && r;
}, hc = ({ availableSpots: t, stone: a }) => ic((n) => mc(n, a), t);
function pc({ stone: t, availableSpots: a, containerSize: n }) {
  let r = hc({ availableSpots: a, stone: t }), l = { left: r.left, top: r.top }, s = fc({ optimalSpot: r, availableSpots: a.filter((d) => d !== r), stone: t, containerSize: n }), i = [...a, s], c = sc({ spots: i, position: l, optimalSpot: r, stone: t });
  return i = [...oc(Boolean, c)], i = uc(i), { position: l, availableSpots: i };
}
var gc = ({ stones: t, containerSize: a }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return n;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: a }];
  for (let i of t) {
    let c = pc({ availableSpots: s, stone: i, containerSize: a }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, bc = (t) => t.reduce((a, n) => {
  if (!n) return a;
  let r = n.getBoundingClientRect();
  return a.push({ width: r.width, height: r.height }), a;
}, []), xc = ({ boxesRefs: t, wrapperRef: a, children: n, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = T({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let p = bc(t.current), b = (m = (u = a.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (b === null) return;
    let g = gc({ stones: p, containerSize: b });
    f(at(se({}, g), { stones: p }));
  }, [n, t, a, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, vc = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), yc = ({ transition: t, transitionDuration: a }) => t ? { transition: vc(a)[t] } : null, wc = (t) => t ? at(se({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Nc = ({ style: t, position: a, transition: n, transitionDuration: r }) => se(se(at(se({}, t), { position: "absolute" }), wc(a)), yc({ transition: n, transitionDuration: r }));
function Cc(t, a, n) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, a);
  };
}
var Ic = () => {
  let [t, a] = T(), n = G(Cc(a, 300));
  return j(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, kc = (t) => {
  let [a, n] = T(null);
  return j(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) n(s.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), a;
}, Sc = (t) => {
  var a = t, { children: n, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = a, c = ec(a, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = G([]), f = G(null), u = Ic(), m = kc(f), { positions: p, containerHeight: b } = xc({ boxesRefs: d, wrapperRef: f, children: n, windowWidth: u, wrapperWidth: m }), g = se({ minHeight: b ?? 0, position: "relative" }, r);
  return e("div", at(se({ ref: f, style: g }, c), { children: $a.map(n, (x, y) => {
    if (typeof x != "object" || !x || !("type" in x)) return x;
    let L = { style: Nc({ style: x.props.style, position: p[y], transition: l, transitionDuration: s }), ref: (O) => d.current[y] = O };
    return Ra(x, se(se({}, x.props), L));
  }) }));
};
const Ac = { sm: 340, md: 480, lg: 640 }, ua = E(
  function({ children: a, widgetWidth: n = "sm" }, r) {
    const l = Ac[n], [s, i] = T(), c = $a.toArray(a), d = G(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: s === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: a }) : s && s > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(Sc, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), Lc = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], yd = ee(ua, () => /* @__PURE__ */ e(Oa, { children: /* @__PURE__ */ e(ua, { children: Lc.map((t, a) => /* @__PURE__ */ e(Ne.Skeleton, { height: t }, a)) }) })), fa = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), wd = ee(
  E(function({ children: a }, n) {
    return /* @__PURE__ */ e(Ke, { ref: n, showBar: !1, children: /* @__PURE__ */ e(fa, { children: a }) });
  }),
  () => /* @__PURE__ */ e(Oa, { orientation: "horizontal", children: /* @__PURE__ */ o(fa, { children: [
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {})
  ] }) })
);
function Fc({
  title: t,
  description: a,
  emoji: n,
  actions: r
}) {
  if ((r?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ e(
    wl,
    {
      title: t,
      description: a,
      ...n ? { emoji: n } : { variant: "warning" },
      actions: r
    }
  );
}
const Nd = ae(
  $("WidgetEmptyState", Fc)
), Fn = E(
  ({ title: t, children: a }, n) => (Nl(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    a
  ] }))
);
Fn.displayName = "WidgetSection";
const Cd = ae(
  $("WidgetSection", Fn)
), Id = ({
  identifier: t,
  allowedRoutes: a,
  disallowedRoutes: n,
  children: r
}) => {
  const l = Cl(), s = window.location.pathname, i = q(() => a?.length ? a.includes(s) : n?.length ? !n.includes(s) : !0, [s, a, n]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return a && a.length > 0 && (d += ` Allowed routes: ${a.join(", ")}`), n && n.length > 0 && (d += ` Disallowed routes: ${n.join(", ")}`), d;
  }, [t, a, n]);
  return i ? r : (l && console.error(c), null);
}, kd = ae(
  me(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ke
  )
);
export {
  $c as ActivityItemList,
  js as ActivityItemListSkeleton,
  hs as AiPromotionChat,
  ps as AiPromotionChatProvider,
  Gc as ApplicationFrame,
  iu as AreaChart,
  nd as AreaChartWidget,
  ad as AutoGrid,
  Jr as Badge,
  ou as BarChart,
  rd as BarChartWidget,
  Ms as BaseActivityItemList,
  cu as BaseBanner,
  Ks as BaseCelebration,
  ni as BaseCommunityPost,
  Ld as BaseTabs,
  Fd as BreadcrumbSelect,
  Ul as Breadcrumbs,
  gt as CalendarEvent,
  dd as CalendarEventList,
  du as CardSelectableContainer,
  Ll as Carousel,
  uu as CategoryBarChart,
  bd as CategoryBarSection,
  Bc as Celebration,
  qs as CelebrationSkeleton,
  cd as ChartWidgetEmptyState,
  Td as Chip,
  xd as ClockInControls,
  fu as ComboChart,
  Mc as CommunityPost,
  ri as CommunityPostSkeleton,
  Ri as CompanySelector,
  qe as Counter,
  yd as Dashboard,
  Hc as DaytimePage,
  Ii as DetailsItem,
  jc as DetailsItemsList,
  mu as Dialog,
  Ce as Dropdown,
  Rc as EntitySelect,
  _d as F0ActionBar,
  hu as F0AiBanner,
  Ia as F0AvatarModule,
  zc as F0Callout,
  pu as F0TableOfContent,
  Pc as F0VersionHistory,
  Ed as F1SearchBox,
  gu as FILE_TYPES,
  Dd as FileItem,
  Wc as HighlightBanner,
  fd as IndicatorsList,
  Od as Input,
  bu as Item,
  xu as ItemSectionHeader,
  vu as LineChart,
  ld as LineChartWidget,
  Jc as Menu,
  zd as MobileDropdown,
  yu as NotesTextEditor,
  wu as NotesTextEditorPatchTargetNotFoundError,
  Nu as NotesTextEditorSkeleton,
  Cu as NotesTextEditorUnsupportedPatchTypeError,
  Pd as NumberInput,
  Uc as OmniButton,
  Qc as OneApprovalHistory,
  Rd as OneCalendar,
  $d as OneCalendarInternal,
  Bd as OneDataCollection,
  Wd as OneDateNavigator,
  wl as OneEmptyState,
  Md as OnePagination,
  Vc as OnePersonListItem,
  Id as OneRestrictComponent,
  Kc as Page,
  Oc as PageHeader,
  Iu as PieChart,
  sd as PieChartWidget,
  oo as PrivateBox,
  ku as ProgressBarChart,
  Su as RadarChart,
  Zs as Reactions,
  Au as ResourceHeader,
  zr as RichTextDisplay,
  Lu as RichTextEditor,
  kd as ScrollArea,
  Zc as SearchBar,
  Fu as SectionHeader,
  Ve as Select,
  ll as Shortcut,
  Xc as Sidebar,
  qc as SidebarFooter,
  Yc as SidebarHeader,
  ga as Spinner,
  td as Split,
  ed as Stack,
  od as SummariesWidget,
  jd as Switch,
  Vd as Tabs,
  Gd as TabsSkeleton,
  vd as TasksList,
  Tu as Textarea,
  en as ToggleGroup,
  tn as ToggleGroupItem,
  ve as Tooltip,
  gd as TwoColumnsList,
  _u as VerticalBarChart,
  id as VerticalBarChartWidget,
  mt as VirtualList,
  Hd as WeekStartDay,
  si as Weekdays,
  Ne as Widget,
  md as WidgetAvatarsListItem,
  Nd as WidgetEmptyState,
  ud as WidgetHighlightButton,
  hd as WidgetInboxList,
  ca as WidgetInboxListItem,
  Cd as WidgetSection,
  pd as WidgetSimpleList,
  bt as WidgetSimpleListItem,
  wd as WidgetStrip,
  Eu as _RadarChart,
  Ud as actionBarStatuses,
  Kd as chipVariants,
  qd as downloadAsCSV,
  Yd as generateCSVContent,
  Jd as getGranularityDefinition,
  Zd as getGranularityDefinitions,
  Xd as getGranularitySimpleDefinition,
  Qd as granularityDefinitions,
  eu as modules,
  Du as predefinedPresets,
  tu as rangeSeparator,
  Ou as selectSizes,
  Ze as useAiPromotionChat,
  au as useDataCollectionData,
  nu as useDataCollectionSource,
  ru as useExportAction,
  lu as useInfiniteScrollPagination,
  Ae as useSidebar
};
