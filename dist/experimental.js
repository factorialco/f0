import { a6 as zn, a7 as Pn, a8 as Rn, a9 as $n, aa as Et, ab as ze, ac as Bn, ad as ht, ae as rt, af as We, L as p, R as K, M as ge, u as ie, ag as Wn, ah as Mn, ai as jn, aj as Vn, ak as Gn, a2 as re, al as Hn, Q as ke, am as Un, an as Kn, ao as B, ap as qn, aq as Yn, J as Ee, ar as da, as as Jn, at as Zn, N as M, au as pt, a5 as _, av as ue, aw as Xn, ax as Qn, ay as er, az as tr, aA as ar, aB as Se, aC as ua, aD as nr, aE as xe, aF as Te, aG as rr, aH as gt, k as fa, aI as Ce, aJ as lr, aK as ma, a3 as ae, aL as P, O as ha, aM as pa, aN as sr, aO as bt, aP as he, a4 as ee, aQ as ir, aR as or, aS as cr, aT as dr, T as pe, aU as He, aV as ur, aW as fr, aX as mr, aY as hr, aZ as Ue, a_ as ga, a$ as pr, b0 as gr, b1 as br, b2 as Me, b3 as xr, b4 as vr, b5 as yr, b6 as wr, b7 as Nr, b8 as Cr, b9 as Ir, ba as kr, bb as Sr, bc as ba, bd as xa, be as va, bf as lt, bg as st, bh as ya, bi as Ar, bj as Lr, bk as Fr, bl as Tr, P as Ke, bm as xt, bn as wa, bo as _r, bp as Na, bq as Er, br as Dr, bs as Or, bt as Ie, bu as zr, bv as Pe, bw as Dt, bx as it, by as Pr, bz as Rr, bA as $r, X as Ca, W as Br, bB as Ia, Y as vt, Z as Wr, bC as Mr, U as yt, bD as jr, a as Vr, c as Gr, bE as Hr, bF as ka, bG as Ur, bH as Kr, F as qr, bI as Sa, bJ as Aa, bK as Yr, bL as Ot, bM as Jr, bN as Zr, bO as Xr, bP as Qr, bQ as La, bR as el, bS as tl, bT as al, bU as nl, bV as rl, bW as fe, bX as wt, bY as Nt, bZ as Ct, b_ as Fa, b$ as It, c0 as Ta, c1 as ll, c2 as sl, c3 as il, c4 as ol, c5 as cl, c6 as dl, c7 as ul, c8 as fl, c9 as ml, ca as hl, cb as pl, cc as zt, cd as Pt, ce as Rt, cf as gl, cg as bl, ch as xl, ci as vl, cj as _a, ck as yl, cl as wl, cm as Nl } from "./F0AiChat-CYCUjy-I.js";
import { cw as Ad, cv as Ld, cI as Fd, co as Td, cp as _d, cS as Ed, cq as Dd, cu as Od, cr as zd, cE as Pd, cF as Rd, cJ as $d, cQ as Bd, cR as Wd, cs as Md, cy as jd, cx as Vd, cG as Gd, cn as Hd, cH as Ud, cL as Kd, cM as qd, cD as Yd, cA as Jd, cC as Zd, cz as Xd, ct as Qd, cB as eu, cN as tu, cO as au, cK as nu, cP as ru } from "./F0AiChat-CYCUjy-I.js";
import { jsx as e, jsxs as o, Fragment as H } from "react/jsx-runtime";
import * as _e from "react";
import ne, { forwardRef as E, useRef as V, useTransition as Cl, useState as F, useLayoutEffect as Ea, useContext as kt, createContext as St, useCallback as Q, useMemo as q, useEffect as j, useId as Il, memo as Da, Fragment as kl, isValidElement as Sl, cloneElement as Oa, Children as za } from "react";
import { C as Al, P as Ll, g as Pa, c as Fl, a as Ra, F as ot, f as Tl, b as _l, u as $a, A as El, B as Dl, L as Ol, d as zl, V as Pl, e as Rl, h as $t, i as $l, j as Bl } from "./index-CZlbgDF-.js";
import { m as su, n as iu, k as ou, v as cu, o as du, t as uu, E as fu, l as mu, y as hu, M as pu, I as gu, z as bu, p as xu, G as vu, H as yu, N as wu, J as Nu, q as Cu, s as Iu, R as ku, x as Su, K as Au, S as Lu, T as Fu, r as Tu, _ as _u, D as Eu, w as Du } from "./index-CZlbgDF-.js";
const Wl = zn("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Ba = E(({ className: t, items: a }, n) => /* @__PURE__ */ e(Pn, { ref: n, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(Rn, {}),
  /* @__PURE__ */ e($n, { items: a, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Ba.displayName = "CollapsedBreadcrumbItem";
const At = 50, Ml = 120, je = 8;
function jl(t, a) {
  const n = a.length;
  if (n <= 2) return n;
  const r = a[0];
  let l = t - r - je, s = 0, i = 1;
  for (let c = n - 1; c > 0; c--) {
    const d = a[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < n)
    for (l -= At; l < 0 && i > 1; )
      l += a[s], s++, i--;
  return Math.max(2, i);
}
function Bt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + je;
    default:
      return t[0] + At + t[t.length - 1] + je;
  }
}
function Vl(t, a) {
  return Ml * t + (a ? At : 0) + je;
}
function Gl(t, a, n = []) {
  if (!t) {
    const i = Math.min(a.length, 2);
    return {
      visibleCount: i,
      headItem: a[0] ?? null,
      tailItems: a.slice(a.length - 1),
      collapsedItems: a.slice(1, a.length - 1),
      isOnly: a.length === 1,
      minWidth: Vl(
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
      minWidth: Bt(l)
    };
  const s = jl(t, l);
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
    minWidth: Bt(l)
  };
}
function Hl({ breadcrumbs: t, append: a }) {
  const n = V(null), r = V(null), [, l] = Cl(), [s, i] = F(null), c = (s?.collapsedItems || []).length > 0;
  return Ea(() => {
    const d = n.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = n.current?.clientWidth ?? null, b = Array.from(f.children);
      l(() => {
        const g = Gl(
          h,
          t,
          b
        );
        i(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, a]), !t.length || s && !s.headItem ? /* @__PURE__ */ e(Et, { ref: n, className: "w-full" }) : /* @__PURE__ */ o(
    Et,
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
              ze,
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
            ze,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ e(
              Ba,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ e(
              ze,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? a : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(H, { children: s.tailItems.map((d, f) => /* @__PURE__ */ e(
            ze,
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
const Wt = "one_sidebar_locked", Wa = St(void 0);
function Ae() {
  const t = kt(Wa);
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
function Ul({ children: t }) {
  const { currentPath: a } = ht(), [n, r] = F(!1), [l, s] = F(!1), i = n ? We.xl : We.md, c = rt(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = F(() => {
    const A = localStorage.getItem(Wt);
    return A !== null ? !!A : !0;
  }), [u, m] = F(!1), [h, b] = F(
    null
  ), g = Q(
    ({ isInvokedByUser: A } = {
      isInvokedByUser: !0
    }) => {
      s(A ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = Q(
    (A) => {
      c || (A.clientX < 32 && m(!0), A.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return j(() => {
    m(!1);
  }, [a]), j(() => {
    l && localStorage.setItem(Wt, d ? "1" : "");
  }, [d, l]), j(() => () => {
    b(w);
  }, [w]), /* @__PURE__ */ e(
    Wa.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: g,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: v, className: "h-screen w-screen", children: t })
    }
  );
}
const Kl = ge({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Mt = [
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
], ql = ({
  spin: t = !1,
  size: a = "md",
  background: n,
  hover: r = !1,
  ...l
}, s) => {
  const i = Il(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...b
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(Kl({ size: a }), h),
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
          ...(({ style: g, ...v }) => v)(b),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Mt.map((g) => /* @__PURE__ */ e("clipPath", { id: `${i}-${g.id}`, children: /* @__PURE__ */ e("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${i}-circle)`, children: Mt.map((g) => /* @__PURE__ */ e(
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
}, Ma = E(ql), ja = St(null), Yl = 15, Jl = ({ children: t, enabled: a, onShow: n, ...r }) => {
  const [l, s] = F(a), [i, c] = F(!1), [d, f] = F(!0), [u, m] = F(
    Yl
  ), h = V(null), b = (v) => {
    h.current = v;
  }, g = () => {
    h.current && h.current();
  };
  return j(() => {
    s(a);
  }, [a]), j(() => {
    if (i && n?.(), !i) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [i, n]), /* @__PURE__ */ e(
    ja.Provider,
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
function qe() {
  const t = kt(ja);
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
const Va = ({
  className: t,
  disabled: a
}) => {
  const { enabled: n, setOpen: r, open: l } = qe(), s = ie(), [i, c] = F(!1);
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
            className: p(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              a && "cursor-not-allowed opacity-50",
              re(),
              t
            ),
            disabled: a,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Gn,
              {
                className: p(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Ma,
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
}, jt = K.create(B), Vt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Zl = ({
  isMarked: t,
  onChange: a,
  label: n
}) => {
  const [r, l] = F(!1), s = () => {
    l(!0), a(!t);
  };
  return /* @__PURE__ */ e(ke, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: p(
        "flex h-6 w-6 items-center justify-center rounded",
        re()
      ),
      onClick: s,
      "aria-label": n,
      children: t ? /* @__PURE__ */ e(
        jt,
        {
          size: "sm",
          icon: Un,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Vt,
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
        jt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Kn,
          className: "outline-none",
          variants: Vt,
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
}, Xl = ({
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
  const [m, h] = F("idle"), [b, g] = F(null), [v, ...w] = b ?? [], [A, O] = F(!1);
  j(() => {
    g(null), h("idle");
  }, [t]);
  const $ = Q(async () => {
    try {
      h("fetching");
      const z = await n();
      h("idle"), g(z);
    } catch {
      h("error");
    }
  }, [n]);
  return /* @__PURE__ */ o(
    qn,
    {
      open: A,
      onOpenChange: async (z) => {
        O(z), z && b === null && $(), i(z);
      },
      children: [
        /* @__PURE__ */ e(Yn, { asChild: !0, children: /* @__PURE__ */ e(
          Ee,
          {
            variant: "outline",
            icon: da,
            hideLabel: !0,
            label: a,
            pressed: A,
            append: f && /* @__PURE__ */ e(Lt, { className: "absolute -right-0.5 -top-[1px]" })
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
              /* @__PURE__ */ e(ts, { title: a, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(rs, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && b !== null && b.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(as, { ...l, buttonUrl: r }) }),
                m === "idle" && b !== null && b.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Ql,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  b.length > 1 && /* @__PURE__ */ e(H, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: w.map((z, T) => /* @__PURE__ */ e(
                    es,
                    {
                      ...z,
                      onClick: d
                    },
                    T
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  ns,
                  {
                    ...s,
                    onClick: () => {
                      $();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                ls,
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
}, Ql = ({
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
        ue,
        {
          href: a,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: p(i, "text-f1-foreground no-underline"),
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
              r && /* @__PURE__ */ e(Lt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, es = ({
  title: t,
  href: a,
  updated: n,
  unread: r = !1,
  onClick: l
}) => {
  const s = p("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(er, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ e(
    ue,
    {
      href: a,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: p(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: n })
        ] }),
        r && /* @__PURE__ */ e(Lt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, ts = ({
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
          icon: pt,
          label: t,
          hideLabel: !0,
          onClick: n
        }
      )
    ]
  }
), Ga = ({
  icon: t,
  button: a,
  title: n,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: p(
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
] }) }), as = ({
  title: t,
  buttonText: a,
  buttonUrl: n,
  description: r
}) => /* @__PURE__ */ e(
  Ga,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(B, { icon: da, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(ue, { href: n, children: /* @__PURE__ */ e(M, { label: a }) })
  }
), ns = ({
  title: t,
  description: a,
  buttonText: n,
  onClick: r
}) => /* @__PURE__ */ e(
  Ga,
  {
    title: t,
    description: a,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(B, { icon: tr, size: "lg" }),
    button: /* @__PURE__ */ e(M, { variant: "outline", label: n, onClick: r })
  }
), rs = () => /* @__PURE__ */ e(
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
), Lt = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: p("size-2 rounded bg-f1-background-selected-bold", t)
  }
), ls = ({
  isVisible: t,
  onClose: a,
  crossSelling: n,
  onDropdownClose: r
}) => {
  const [l, s] = F(t);
  j(() => {
    s(t);
  }, [t]);
  const i = () => {
    s(!1), a && a();
  }, c = (d) => {
    s(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(H, { children: [
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
        Al,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: n?.products.map((d) => /* @__PURE__ */ e(
            Ll,
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
function Gt({
  icon: t,
  href: a,
  label: n,
  disabled: r
}) {
  const l = V(null);
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
function Dc({
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
  const { sidebarState: u, toggleSidebar: m } = Ae(), h = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...n
  ], b = a && Object.keys(a).length !== 0, g = n.length > 0, v = !l && r.length > 0, w = !l && !!i?.isVisible, A = h[h.length - 1], O = g ? h[h.length - 2] : null;
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
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
                  icon: ua
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                "flex flex-grow items-center gap-2",
                l && g && "justify-center"
              ),
              children: [
                l && g && O && !("loading" in O) && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(ue, { href: O.href, children: /* @__PURE__ */ e(
                  M,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: nr,
                    onClick: ($) => $.preventDefault()
                  }
                ) }) }),
                l && g ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in A ? /* @__PURE__ */ e(_, { className: "h-4 w-24" }) : A.label }) : /* @__PURE__ */ e(
                  Hl,
                  {
                    breadcrumbs: h,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      Zl,
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
          !l && b && /* @__PURE__ */ e("div", { children: a.tooltip ? /* @__PURE__ */ e(xe, { label: a.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Te,
            {
              text: a.text,
              variant: a.variant,
              additionalAccessibleText: a.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(Te, { text: a.text, variant: a.variant }) }),
          !l && b && (s || v || w) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                Gt,
                {
                  icon: rr,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ e(
                Gt,
                {
                  icon: gt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && v && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (w || v) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            w && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              Xl,
              {
                ...i,
                currentModule: t.name
              }
            ) }),
            v && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map(($, z) => /* @__PURE__ */ e(ss, { action: $ }, z)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              fa,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e(Va, {})
          ] })
        ] })
      ]
    }
  );
}
function ss({ action: t }) {
  const a = V(null), [n, r] = F(!1);
  return "actions" in t ? /* @__PURE__ */ e(Ce, { items: t.actions, open: n, onOpenChange: r, children: /* @__PURE__ */ e(
    Ee,
    {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: n
    }
  ) }) : /* @__PURE__ */ e(
    ue,
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
const is = () => {
  const t = ie();
  return /* @__PURE__ */ o(
    K.div,
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
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ e(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: t.ai.inputPlaceholder,
            className: p(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          Ee,
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
}, os = ({
  autoClearMinutes: t,
  reset: a,
  isOpen: n
}) => {
  const r = V(null);
  j(() => (n ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [a, n, t]);
}, cs = ({ children: t }) => {
  const {
    open: a,
    shouldPlayEntranceAnimation: n,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = qe();
  return os({
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
}, ds = ({ action: t, onClose: a }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(ma, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        Ee,
        {
          label: t.label || "",
          onClick: n,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, us = ({
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
  Jl,
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
), fs = () => {
  const {
    enabled: t,
    greeting: a,
    title: n,
    description: r,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = qe(), d = () => {
    i(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(cs, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      Ee,
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
        /* @__PURE__ */ e(Ma, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: a }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: n })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(ha, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ e(
        ds,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(is, {}) })
  ] }) : null;
}, ms = ae(
  P("AiPromotionChat", fs)
), hs = ae(
  P("AiPromotionChatProvider", us)
), Ha = ge({
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
}), Ht = {
  positive: bt,
  warning: sr,
  info: pa
}, Ut = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, ps = E(
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
        className: Ha({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "flex flex-row items-center gap-2",
                  Ut[s]
                ),
                children: [
                  Ht[s] && /* @__PURE__ */ e(B, { icon: Ht[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    he,
                    {
                      className: Ut[s] || "font-medium",
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
                className: p(
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
), gs = ({
  compact: t,
  variant: a = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Ha({ variant: a }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(_, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
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
), Ua = E(
  (t, a) => /* @__PURE__ */ e(ps, { ref: a, ...t })
), bs = ({ compact: t, variant: a }) => /* @__PURE__ */ e(gs, { compact: t, variant: a });
Ua.displayName = "F0Callout";
const Oc = ee(
  ae(Ua),
  bs
);
function xs({
  title: t,
  isActive: a = !1,
  onClick: n
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        a && "bg-f1-background-tertiary",
        n && "cursor-pointer hover:bg-f1-background-hover",
        re("focus-visible:ring-inset")
      ),
      onClick: n,
      disabled: !n,
      "aria-label": `${t}${a ? " (selected)" : ""}`,
      "aria-pressed": n ? a : void 0,
      children: [
        /* @__PURE__ */ e(B, { icon: ir, size: "md", color: "selected" }),
        /* @__PURE__ */ e(
          he,
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
function vs({
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
      className: p(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        n && "cursor-pointer hover:bg-f1-background-hover",
        re("focus-visible:ring-inset")
      ),
      onClick: n,
      disabled: !n,
      "aria-label": `Version ${i} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": n ? r : void 0,
      children: [
        /* @__PURE__ */ e(he, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ e(
            pe,
            {
              firstName: t.firstName,
              lastName: t.lastName,
              src: t.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(
            he,
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
function ys({
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
          he,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: t
          }
        ),
        /* @__PURE__ */ e(He, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          n && /* @__PURE__ */ e(
            xs,
            {
              title: n.title,
              onClick: n.onClick,
              isActive: r === "current"
            }
          ),
          a.map((l) => /* @__PURE__ */ e(
            vs,
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
const zc = ae(
  P("F0VersionHistory", ys)
), Ka = E(
  ({ height: t, itemCount: a, itemSize: n, className: r, renderer: l }, s) => {
    const i = ne.useRef(null);
    ne.useImperativeHandle(
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
        className: p("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? l(d) : /* @__PURE__ */ e(H, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Ka.displayName = "VirtualList";
const ct = P("VirtualList", Ka), qa = ({
  text: t,
  search: a,
  searchKeys: n = [],
  semiBold: r = !1
}) => {
  if (!a)
    return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(a.toLowerCase()) === -1)
    if (n.find(
      (i) => i.toLowerCase().indexOf(a.toLowerCase().trim()) >= 0
    ))
      a = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${a})`, "gi"), s = t.split(l);
  return /* @__PURE__ */ e("span", { className: p("line-clamp-1", r ? "font-semibold" : ""), children: s.map(
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
function Ye(t, a) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && a?.();
}
function Je(t, a) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && a?.();
}
const ws = ({
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
  const m = t.name.split(" "), h = m[0] || "", b = m.slice(1).join(" "), g = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (a ? r(t) : n(t));
  }, v = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      a ? a && r(t) : n(t);
    } else w.key === "ArrowDown" ? Ye(w.currentTarget, i) : w.key === "ArrowUp" && Je(w.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: p(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        a && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          pe,
          {
            src: t.avatar,
            firstName: h,
            lastName: b,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              qa,
              {
                text: t.name,
                search: s,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          ga,
          {
            "data-avatarname-navigator-element": "true",
            checked: a,
            disabled: f,
            onClick: g,
            onKeyDown: v,
            className: p(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && a && /* @__PURE__ */ e(
          B,
          {
            className: "text-f1-icon-selected",
            icon: bt,
            size: "md"
          }
        )
      ]
    }
  ) });
}, $e = ({
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
  hideLine: h = !1,
  showGroupIcon: b = !1,
  singleSelector: g = !1,
  disabled: v = !1,
  hiddenAvatar: w = !1
}) => {
  const [A, O] = F(!1);
  if (!t)
    return /* @__PURE__ */ e(
      ws,
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
        disabled: v,
        hiddenAvatar: w
      }
    );
  const $ = (x) => {
    if (x.key === " ")
      x.preventDefault(), d(!a);
    else if (x.key === "Enter" && g)
      d(!a);
    else if (x.key === "Enter") {
      if (v) return;
      !l || s ? i(r) : l && c(r);
    } else x.key === "ArrowDown" ? Ye(x.currentTarget, f) : x.key === "ArrowUp" && Je(x.currentTarget, u);
  }, z = () => {
    if (A)
      d(!a), O(!1);
    else {
      if (v || g) return;
      l ? c(r) : i(r);
    }
  };
  if (!r.subItems?.length) return null;
  const T = l || s;
  return /* @__PURE__ */ o(H, { children: [
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
                qa,
                {
                  semiBold: !0,
                  text: r.name,
                  search: n,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(Ue, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              ga,
              {
                checked: T,
                disabled: v,
                onClick: z,
                onKeyDown: $,
                indeterminate: s,
                onPointerDown: (x) => {
                  x.stopPropagation(), O(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: p("ml-auto", g ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !a && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
$e.displayName = "EntitySelectListItem";
const Kt = ({
  label: t,
  onCreate: a,
  goToFirst: n,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Ye(s.currentTarget, n) : s.key === "ArrowUp" && Je(s.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: p(
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
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: p("line-clamp-1"), children: t }) }) })
    ]
  }
) }), Fe = ({ primaryAction: t, secondaryActions: a }) => {
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
}, Ns = ({
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
  let b, g, v = d ? {
    label: a || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, w = f ? {
    label: n || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return v || (v = w, w = void 0), m && u ? (b = /* @__PURE__ */ e(
    Fe,
    {
      primaryAction: v,
      secondaryActions: w ? [w] : []
    }
  ), g = /* @__PURE__ */ e(
    Fe,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? b = /* @__PURE__ */ e(
    Fe,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (b = /* @__PURE__ */ e(Fe, { primaryAction: v, secondaryActions: [] }), w && (g = /* @__PURE__ */ e(Fe, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    b,
    g
  ] }) });
}, Cs = ({
  search: t,
  onSearch: a,
  searchPlaceholder: n,
  disabled: r = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(B, { icon: Wl, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Ye(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Je(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
] }), et = 384, tt = 36, Is = 37, qt = 1, Yt = 200, Jt = '[data-avatarname-navigator-element="true"]', ks = ({
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
  selectedEntities: h = [],
  onGroupChange: b,
  onToggleExpand: g,
  searchPlaceholder: v,
  selectAllLabel: w,
  clearLabel: A,
  notFoundTitle: O,
  notFoundSubtitle: $,
  className: z,
  actions: T,
  onCreate: x,
  onCreateLabel: I,
  singleSelector: y = !1,
  loading: C = !1,
  disabled: R = !1,
  hiddenAvatar: k = !1
}) => {
  const L = ne.useRef(null), W = q(
    () => t ? a.reduce(
      (S, J) => S + (J.subItems?.length ?? 0),
      0
    ) : a.length,
    [a, t]
  ), N = Q(() => {
    setTimeout(() => {
      L.current?.scrollTo({ top: 0 });
    }, qt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Jt)
      )[0]?.focus();
    }, Yt);
  }, []), D = Q(() => {
    setTimeout(() => {
      L.current?.scrollTo({ top: L.current?.scrollHeight });
    }, qt), setTimeout(() => {
      const S = Array.from(
        document.querySelectorAll(Jt)
      );
      S[S.length - 1]?.focus();
    }, Yt);
  }, []), Y = q(
    () => new Map(h.map((S) => [S.id, S])),
    [h]
  ), U = Q(
    (S) => {
      const J = Y.get(S.id);
      if (!t)
        return {
          selected: !!J,
          partialSelected: !!J
        };
      const X = (S.subItems ?? []).filter(
        (te) => J?.subItems?.some(
          (me) => me.subId === te.subId
        )
      ), Z = (S.subItems?.length ?? 0) === X.length, oe = !Z && X.length > 0;
      return { selected: Z, partialSelected: oe };
    },
    [t, Y]
  ), ve = Q(
    (S) => {
      if (S.index === 0 && x)
        return /* @__PURE__ */ e(
          Kt,
          {
            label: I ?? "",
            onCreate: () => x?.(l),
            goToFirst: N,
            goToLast: D
          }
        );
      const J = x ? S.index - 1 : S.index, X = a[J], { selected: Z, partialSelected: oe } = U(X);
      return /* @__PURE__ */ e(
        $e,
        {
          expanded: X.expanded ?? !1,
          onExpand: () => g(X, !0),
          search: l,
          groupView: t,
          entity: X,
          onSelect: s,
          onRemove: i,
          selected: Z,
          partialSelected: oe,
          showGroupIcon: Ss(n, r),
          singleSelector: y,
          goToFirst: N,
          goToLast: D,
          disabled: R,
          hiddenAvatar: k
        },
        X.id
      );
    },
    [
      x,
      I,
      R,
      a,
      U,
      N,
      D,
      t,
      n,
      k,
      i,
      s,
      g,
      l,
      r,
      y
    ]
  ), de = q(() => t ? a.flatMap((S) => {
    const J = Re(
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
          expanded: S.expanded ?? J?.expanded ?? !1,
          subItems: S.subItems,
          subSearchKeys: S.searchKeys
        }
      },
      ...(S.subItems ?? []).map((X) => ({
        parent: {
          ...S,
          expanded: S.expanded ?? J?.expanded ?? !1
        },
        subItem: X
      }))
    ];
  }).filter(
    (S) => (!S.parent || S.parent.expanded) && (!!S.parent || !!S.subItem.subItems && S.subItem.subItems.length > 0)
  ) : a.map((S) => ({
    parent: null,
    subItem: {
      subId: S.id,
      subName: S.name,
      subAvatar: S.avatar,
      subSearchKeys: S.searchKeys
    }
  })), [t, a, h]), G = Q(
    (S) => {
      if (S.index === 0 && x)
        return /* @__PURE__ */ e(
          Kt,
          {
            label: I ?? "",
            onCreate: () => x?.(l),
            goToFirst: N,
            goToLast: D
          }
        );
      const J = x ? S.index - 1 : S.index, X = de[J].parent, Z = de[J].subItem;
      if (!X) {
        const te = {
          id: Z.subId,
          name: Z.subName,
          avatar: Z.subAvatar,
          subItems: Z.subItems,
          expanded: Z.expanded,
          searchKeys: Z.subSearchKeys
        }, me = Re(
          h,
          te.id
        ), be = (te?.subItems ?? []).filter(
          (Le) => me?.subItems?.some(
            (On) => On.subId === Le.subId
          )
        ), Oe = (te.subItems?.length ?? 0) === be.length, Dn = !Oe && be.length > 0;
        return /* @__PURE__ */ e(
          $e,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Le) => g(te, Le),
            search: l,
            entity: te,
            onSelect: s,
            onRemove: i,
            selected: Oe,
            partialSelected: Dn,
            showGroupIcon: n.find((Le) => Le.value === r)?.groupType === "team",
            singleSelector: y,
            goToFirst: N,
            goToLast: D,
            hideLine: J === de.length - 1,
            disabled: R,
            hiddenAvatar: k
          }
        );
      }
      let oe = !!Re(h, Z.subId);
      if (!oe) {
        const te = Re(
          h,
          X.id
        );
        oe = !!(X?.subItems ?? []).filter(
          (be) => te?.subItems?.some(
            (Oe) => Oe.subId === be.subId
          )
        ).find((be) => be.subId === Z.subId);
      }
      return /* @__PURE__ */ e(
        $e,
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
            d(X, Z);
          },
          onRemove: () => c(X, Z),
          selected: !!oe,
          partialSelected: !1,
          singleSelector: y,
          goToFirst: N,
          goToLast: D,
          isChild: !0,
          hiddenAvatar: k
        }
      );
    },
    [
      de,
      h,
      l,
      y,
      N,
      D,
      s,
      i,
      n,
      R,
      g,
      r,
      d,
      c,
      k,
      x,
      I
    ]
  ), [An, Ln] = q(() => {
    if (!a.length)
      return [!1, !1];
    let S = 0, J = 0;
    if (!t)
      S = a.length, J = a.reduce(
        (oe, { id: te }) => oe + (Y.has(te) ? 1 : 0),
        0
      );
    else {
      const oe = new Set(
        [...Y.values()].flatMap(
          (te) => te.subItems?.map((me) => me.subId) ?? []
        )
      );
      a.forEach((te) => {
        const me = te.subItems ?? [];
        S += me.length, J += me.filter(
          (be) => oe.has(be.subId)
        ).length;
      });
    }
    const X = S > 0 && J === S, Z = J > 0;
    return [X, Z];
  }, [a, Y, t]), Fn = de.length, Tn = !y && (w || A), _n = T && T.length > 0, En = !C && (!y && Tn || _n);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "flex w-full flex-col rounded-l-xl border-0",
        y || C ? "rounded-r-xl" : "",
        z
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: p(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              y || C ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Cs,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: N,
                  goToLast: D
                }
              ) }),
              n && n.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Me,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: C,
                  onChange: b,
                  options: n,
                  value: r,
                  className: p(
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
            className: p(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              En ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              C && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(ma, {}) }),
              !C && !W && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: et
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: $ })
                  ]
                }
              ),
              !C && (!!W || x) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                ct,
                {
                  height: et,
                  itemCount: Fn + (x ? 1 : 0),
                  itemSize: (S) => {
                    if (S === 0 && x) return tt;
                    const J = x ? S - 1 : S;
                    return de[J]?.parent === null ? Is : tt;
                  },
                  renderer: G,
                  ref: L
                }
              ) : /* @__PURE__ */ e(
                ct,
                {
                  height: et,
                  itemCount: a.length + (x ? 1 : 0),
                  itemSize: tt,
                  renderer: ve,
                  ref: L
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Ns,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: y,
            totalFilteredEntities: W,
            allVisibleSelected: An,
            anyVisibleSelected: Ln,
            selectAllLabel: w,
            clearLabel: A,
            disabled: R,
            actions: T
          }
        )
      ]
    }
  );
}, Re = (t, a) => t.find((n) => n.id === a), Ss = (t, a) => t.find((n) => n.value === a)?.groupType === "team", As = ({
  entity: t,
  onRemove: a,
  disabled: n = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  xr,
  {
    className: p(
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
) }), Ls = ({
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
      ct,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            As,
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
          ) : /* @__PURE__ */ e(H, {});
        }
      }
    ) })
  ] });
}, Fs = 500, Zt = 520, Xt = 210, Qt = ({
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
  ...h
}) => {
  const b = (s ?? Zt) < Fs, g = !c && !i && !b, v = s ?? Zt, w = g ? v - Xt : v;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "relative overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: v
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "absolute right-0 top-0",
            style: {
              width: Xt + "px"
            },
            children: /* @__PURE__ */ e(
              Ls,
              {
                groupView: t,
                onRemove: a,
                onSubItemRemove: n,
                selectedEntities: r ?? [],
                selectedLabel: l,
                disabled: h.disabled,
                hiddenAvatar: d
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "absolute left-0",
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ e(
              ks,
              {
                ...h,
                groupView: t,
                onRemove: a,
                onSubItemRemove: n,
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
}, Ts = ({
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
  hideLabel: h = !1,
  maxLength: b,
  loading: g = !1,
  required: v = !1,
  readonly: w = !1,
  append: A,
  size: O = "sm",
  open: $
}) => {
  const z = q(
    () => n.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [n]
  ), T = q(() => z ? n.flatMap(
    (y) => (y.subItems ?? []).map((C) => ({
      parent: y,
      subItem: C
    }))
  ) : n.map((y) => ({
    parent: null,
    subItem: {
      subId: y.id,
      subName: y.name,
      subAvatar: y.avatar,
      subDeactivated: y.deactivated
    }
  })), [z, n]), x = T.length === 0 ? void 0 : T.length === 1 ? T[0].subItem.subName : T.length + " " + a, I = T.length === 1 ? T[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    wr,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !x ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: b,
      clearable: !1,
      value: x,
      disabled: r,
      loading: g,
      required: v,
      readonly: w,
      size: O,
      avatar: l || !I ? void 0 : {
        type: "person",
        firstName: I,
        lastName: "",
        src: T[0].subItem.subAvatar,
        deactivated: T[0].subItem.subDeactivated
      },
      append: A ?? /* @__PURE__ */ e(H, { children: /* @__PURE__ */ e(Nr, { open: $, disabled: r, size: O }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: p(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            x && "text-f1-foreground",
            T.length === 1 && !l || c && !x ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ e(
            he,
            {
              tag: "span",
              className: T.length === 1 && T[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: T.length === 0 ? t ?? "" : T.length === 1 ? T[0].subItem.subName : `${T.length} ${a}`
            }
          )
        }
      )
    }
  );
}, Pc = (t) => {
  const [a, n] = F(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (x) => {
    n(x), t.onOpenChange?.(x);
  };
  j(() => {
    t.defaultOpen && a && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, s] = F(t.entities), [i, c] = F(""), [d, f] = Cr("", 300), u = q(
    () => t.entities.some(
      (x) => x.subItems && x.subItems.length > 0
    ),
    [t.entities]
  );
  function m(x) {
    if (t.singleSelector) {
      t.onSelect(x), n(!1);
      return;
    }
    const I = t.selectedEntities ?? [], y = l.find((W) => W.id === x.id);
    if (!y)
      return;
    const C = new Set(
      (y.subItems ?? []).map((W) => W.subId)
    ), R = /* @__PURE__ */ new Set([y.id]);
    l.forEach((W) => {
      W.id !== y.id && (W.subItems ?? []).some(
        (D) => C.has(D.subId)
      ) && R.add(W.id);
    });
    const k = [...I];
    function L(W) {
      const N = k.findIndex((D) => D.id === W.id);
      N >= 0 ? k[N] = W : k.push(W);
    }
    R.forEach((W) => {
      const N = l.find((U) => U.id === W);
      if (!N) return;
      const D = N.subItems?.filter(
        (U) => C.has(U.subId)
      ) ?? [], Y = k.findIndex((U) => U.id === W);
      if (Y >= 0) {
        const U = k[Y].subItems ?? [], ve = new Set(U.map((G) => G.subId)), de = [
          ...U,
          ...D.filter((G) => !ve.has(G.subId))
        ];
        L({
          ...N,
          subItems: de
        });
      } else
        L({
          ...N,
          subItems: D
        });
    }), t.onSelect(k);
  }
  function h(x, I) {
    if (t.singleSelector)
      t.onSelect({ ...x, subItems: [{ ...I }] }), n(!1);
    else {
      const y = t.selectedEntities ?? [], C = new Set(y.map((L) => L.id)), R = new Map(
        y.map((L) => [L.id, L.subItems ?? []])
      );
      C.add(x.id), t.entities.forEach((L) => {
        L.subItems?.some(
          (N) => N.subId === I.subId
        ) && C.add(L.id);
      });
      const k = [];
      t.entities.forEach((L) => {
        if (C.has(L.id)) {
          let N = [...R.get(L.id) ?? []];
          L.subItems?.some(
            (U) => U.subId === I.subId
          ) && (N.some(
            (ve) => ve.subId === I.subId
          ) || N.push(I));
          const Y = new Set(
            (L.subItems ?? []).map((U) => U.subId)
          );
          N = N.filter(
            (U) => Y.has(U.subId)
          ), k.push({
            ...L,
            subItems: N
          });
        }
      }), t.onSelect(k);
    }
  }
  function b(x) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let I = [];
    const y = t.selectedEntities ?? [];
    if (u) {
      const C = l.find(
        (k) => k.id === x.id
      );
      if (!C)
        return;
      const R = new Set(
        (C.subItems ?? []).map((k) => k.subId)
      );
      for (const k of y) {
        const L = (k.subItems ?? []).filter(
          (W) => !R.has(W.subId)
        );
        L.length > 0 && I.push({
          ...k,
          subItems: L
        });
      }
    } else
      I = (y ?? []).filter((C) => C.id !== x.id);
    t.onSelect(I);
  }
  function g(x, I) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const y = t.selectedEntities ?? [], C = I.subId, R = [];
    for (const k of y) {
      const L = k.subItems?.filter((W) => W.subId !== C) ?? [];
      L.length > 0 && R.push({
        ...k,
        subItems: L
      });
    }
    t.onSelect(R);
  }
  function v() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const x = t.selectedEntities ?? [];
    let I = [];
    if (u) {
      const y = new Set(
        l.flatMap(
          (C) => (C.subItems ?? []).map((R) => R.subId)
        )
      );
      for (const C of x) {
        const R = (C.subItems ?? []).filter(
          (k) => !y.has(k.subId)
        );
        R.length > 0 && I.push({
          ...C,
          subItems: R
        });
      }
    } else {
      const y = new Set(
        l.map((C) => C.id)
      );
      I = (x ?? []).filter((C) => !y.has(C.id));
    }
    t.onSelect(I);
  }
  function w() {
    const x = [...t.selectedEntities ?? []];
    l.forEach((I) => {
      const y = x.find((C) => C.id === I.id);
      if (!y)
        x.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const C = Array.from(
          /* @__PURE__ */ new Set([
            ...y.subItems ?? [],
            ...I.subItems ?? []
          ])
        );
        y.subItems = C;
      }
    }), t.singleSelector || t.onSelect(x);
  }
  const A = (x) => {
    c(x), f(x);
  }, O = (x, I) => {
    t.onItemExpandedChange(x.id, I), s(
      l.map(
        (y) => y.id === x.id ? { ...y, expanded: !x.expanded } : y
      )
    );
  };
  j(() => {
    if (!d) {
      s(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const I = t.entities.map((y) => {
        const C = _s(y, d), R = y.subItems?.map((k) => ({
          ...k,
          score: Ve(
            d,
            k.subSearchKeys ?? [k.subName]
          )
        })).filter((k) => k.score < 1 / 0).sort((k, L) => k.score - L.score);
        return {
          ...y,
          score: C,
          expanded: y.expanded ?? (R?.length ?? 0) > 0,
          subItems: R
        };
      }).filter((y) => y.score < 1 / 0).sort((y, C) => y.score - C.score);
      s(I);
    } else {
      const x = t.entities.map((I) => {
        const y = Ve(
          d,
          I.searchKeys ?? [I.name]
        );
        return { ...I, score: y };
      }).filter((I) => I.score < 1 / 0).sort((I, y) => I.score - y.score);
      s(x);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    s
  ]);
  const $ = V(null), [z, T] = F(0);
  return Ea(() => {
    const x = () => {
      $.current && T($.current.offsetWidth);
    };
    return x(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: $,
      className: p(
        "scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        Qt,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: m,
          onRemove: b,
          onSubItemRemove: g,
          onSubItemSelect: h,
          onClear: v,
          onSelectAll: w,
          selectedEntities: t.selectedEntities ?? [],
          search: i,
          onSearch: A,
          onToggleExpand: O,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? z - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(Ir, { ...t, onOpenChange: r, open: a, children: [
    /* @__PURE__ */ e(
      kr,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          Ts,
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
      Sr,
      {
        className: p(
          "scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          Qt,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: m,
            onRemove: b,
            onSubItemRemove: g,
            onSubItemSelect: h,
            onClear: v,
            onSelectAll: w,
            selectedEntities: t.selectedEntities ?? [],
            search: i,
            onSearch: A,
            onToggleExpand: O,
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
function dt(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function ea(t) {
  return dt(t).split(/\s+/).filter((a) => a.length > 0);
}
function Ve(t = "", a) {
  const n = ea(t);
  if (n.length === 0)
    return 1 / 0;
  for (const r of a) {
    const l = dt(r), s = ea(r), i = dt(t);
    if (l.includes(i) || n.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function _s(t, a) {
  const n = Ve(a, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, s) => {
    const i = Ve(
      a,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(n, r);
}
const Ya = ge({
  base: p(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    re()
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
}), Es = _e.forwardRef(({ className: t, variant: a, size: n, ...r }, l) => /* @__PURE__ */ e(
  ba,
  {
    ref: l,
    className: p(Ya({ variant: a, size: n, className: t })),
    ...r
  }
));
Es.displayName = ba.displayName;
const Ja = _e.createContext({
  size: "default",
  variant: "default"
}), Za = _e.forwardRef(({ className: t, variant: a, size: n, children: r, ...l }, s) => /* @__PURE__ */ e(
  xa,
  {
    ref: s,
    className: p("flex items-center justify-center gap-1.5", t),
    ...l,
    children: /* @__PURE__ */ e(Ja.Provider, { value: { variant: a, size: n }, children: r })
  }
));
Za.displayName = xa.displayName;
const Xa = _e.forwardRef(({ className: t, children: a, variant: n, size: r, ...l }, s) => {
  const i = _e.useContext(Ja);
  return /* @__PURE__ */ e(
    va,
    {
      ref: s,
      className: p(
        Ya({
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
Xa.displayName = va.displayName;
const Ds = ({
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
  const { ref: f } = lt({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = Pa(a, {
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
        /* @__PURE__ */ e(st, { icon: l ?? ya }),
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
}, Os = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(_, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(_, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(_, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(_, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(_, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Ft = P(
  "ActivityItem",
  ee(Ds, Os)
), Qa = ({
  title: t,
  children: a
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: a })
] }), zs = ({
  title: t,
  items: a,
  onClickItem: n,
  onItemVisible: r
}) => /* @__PURE__ */ e(Qa, { title: t, children: a.map((l) => /* @__PURE__ */ e(
  Ft,
  {
    ...l,
    onClick: () => n(l.id),
    onVisible: r
  },
  l.id
)) }), Ps = ({
  title: t,
  numItems: a
}) => /* @__PURE__ */ e(Qa, { title: t, children: Array.from({ length: a }).map((n, r) => /* @__PURE__ */ e(Ft.Skeleton, {}, r)) }), Be = ee(zs, Ps), Rs = 3, $s = ["today", "yesterday", "lastWeek", "lastMonth"], Bs = (t) => Lr(t, ([a]) => {
  const n = $s.indexOf(a);
  return n === -1 ? -Number(a) : n - 4e3;
}), ut = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ws = ({
  items: t,
  loadingMoreItems: a = !1,
  onClickItem: n,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = ie(), i = Fl(t, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = Ar((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = Bs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ne.Fragment, { children: [
      /* @__PURE__ */ e(
        Be,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: n,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ e(ut, {})
    ] }, u)),
    a && new Array(Rs).fill(null).map((u, m) => /* @__PURE__ */ e(Ft.Skeleton, {}, m))
  ] });
}, Ms = () => {
  const t = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Be.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(ut, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(ut, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Rc = P(
  "ActivityItemList",
  ee(Ws, Ms)
), js = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Vs = {
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
function Gs({
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
      className: p(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        n ? "" : Vs[Fr(
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
                pe,
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
              className: p(
                "absolute -right-0.5",
                n ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                Ra,
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
function Hs(t) {
  const a = V(null), n = V(), r = Q(() => {
    const s = a.current;
    if (!s) return;
    const i = Tr.create(s, {
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
const Us = ({
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
  const [m, h] = F(i), b = V(null);
  j(() => {
    h(i);
  }, [i]);
  const g = (z) => {
    h(z), c?.(z);
  }, v = Ke(), { canvasRef: w, handleMouseEnter: A, handleMouseLeave: O } = Hs(v), $ = xt({
    emoji: js[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ue,
    {
      href: t,
      onClick: l,
      className: p(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        re()
      ),
      onMouseEnter: v ? void 0 : A,
      onMouseLeave: v ? void 0 : O,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          Gs,
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
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: $ })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(ot, { date: u }) })
        ] })
      ]
    }
  );
}, Ks = () => /* @__PURE__ */ o(
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
), $c = ee(Us, Ks), Bc = ({
  title: t,
  subtitle: a,
  buttonLabel: n,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(wa, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: a })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(M, { label: n, variant: "outline", onClick: r }) })
] });
function qs({
  emoji: t,
  initialCount: a,
  hasReacted: n = !1,
  users: r,
  onInteraction: l
}) {
  const [s, i] = F(n), [c, d] = F(a), f = V(null), { fireEmojiConfetti: u } = _r(), m = (g, v) => {
    g.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(v), s || u(v, f);
  }, h = r?.map((g) => g.name).join(", ") || "", b = /* @__PURE__ */ e(
    Na,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (g) => {
        m(g, t);
      },
      className: p(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Er(t),
      prepend: /* @__PURE__ */ e(xt, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        Dr,
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
  return h ? /* @__PURE__ */ e(xe, { label: h, children: b }) : b;
}
function Ys({ items: t, onInteraction: a, locale: n, action: r }) {
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
    /* @__PURE__ */ e(Ra, { onSelect: a, locale: n }),
    t.map((l) => /* @__PURE__ */ e(
      qs,
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
const Js = P("Reactions", Ys), Zs = ({
  content: t,
  collapsed: a
}) => /* @__PURE__ */ e(
  Or,
  {
    content: t,
    className: p(
      "FactorialOneTextEditor",
      a && "line-clamp-5 break-words"
    )
  }
), Xs = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(_, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(_, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), en = ee(
  Zs,
  Xs
), ta = ({ tags: t, right: a }) => /* @__PURE__ */ e(
  "div",
  {
    className: p(
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
        xe,
        {
          label: n.label,
          description: n.description,
          children: r
        },
        n.label ?? n.description
      ) : r;
    })
  }
), ft = E(
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
  }, h) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !m && /* @__PURE__ */ o(H, { children: [
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
                f && /* @__PURE__ */ o(H, { children: [
                  /* @__PURE__ */ e(ot, { date: f }),
                  /* @__PURE__ */ e(
                    B,
                    {
                      icon: pt,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(ot, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(ta, { tags: c }),
              d && /* @__PURE__ */ e(ta, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Qs = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), tn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const n = (t?.split(".")).at(-1);
  return !!n && Qs.has(n);
}, ei = ({
  title: t,
  mediaUrl: a,
  place: n,
  date: r
}) => {
  let l = Tl(r);
  const s = (i) => {
    i.stopPropagation();
  };
  return n && (l = `${l} · ${n}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    a && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: tn(a) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ e("source", { src: a })
      }
    ) : /* @__PURE__ */ o(H, { children: [
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
      ft,
      {
        title: t,
        description: l,
        color: zr.special.highlight,
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, ti = () => /* @__PURE__ */ o(
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
), an = ee(ei, ti), ai = ({
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
  comment: h,
  actions: b,
  dropdownItems: g,
  noReactionsButton: v = !1
}) => {
  const w = [f.views, f.comments].filter(Boolean).join(" · "), A = !0, O = Pa(r), $ = () => {
    i(t);
  }, z = (x) => {
    x.stopPropagation();
  }, T = a ? `${a.firstName} ${a.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: $,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: a ? /* @__PURE__ */ e(
          Pe,
          {
            href: a.url || "#",
            title: T,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              pe,
              {
                firstName: a.firstName,
                lastName: a.lastName,
                src: a.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(st, { icon: Dt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                a ? /* @__PURE__ */ o(H, { children: [
                  /* @__PURE__ */ e(
                    Pe,
                    {
                      href: a.url,
                      className: "block md:hidden",
                      title: T,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        pe,
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
                    Pe,
                    {
                      href: a.url,
                      title: T,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: T
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(st, { icon: Dt, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: p(
                      "text-f1-foreground-secondary",
                      !a && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ e(
                  Pe,
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
                  b?.map((x) => /* @__PURE__ */ e(
                    M,
                    {
                      hideLabel: !x.label,
                      ...x.icon && { icon: x.icon },
                      variant: "outline",
                      size: "md",
                      onClick: x.onClick,
                      label: x.label ?? "",
                      title: x.label ?? ""
                    },
                    x.label
                  )),
                  g?.length && /* @__PURE__ */ e(
                    Ce,
                    {
                      items: g,
                      icon: it,
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
                      ...g ?? []
                    ],
                    icon: it,
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
                  className: p(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ e(en, { content: s, collapsed: A })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: tn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: z,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(H, { children: [
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
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(an, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: w }),
          !v && /* @__PURE__ */ e(
            Js,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: Pr
              }
            }
          )
        ] })
      ]
    }
  );
}, ni = ({
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
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(en.Skeleton, {}) }),
    a && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(_, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(an.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(_, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(_, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Wc = ee(
  ai,
  ni
), ri = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], li = E(
  function({ daysOfTheWeek: a = ri, activatedDays: n = [] }, r) {
    const l = n.map(
      (s) => `${s}-${a[s]}`
    );
    return /* @__PURE__ */ e(
      Za,
      {
        type: "multiple",
        value: l,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: a.map((s, i) => /* @__PURE__ */ e(
          Xa,
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
), si = 750, ii = ({ text: t, children: a }) => {
  const [n, r] = F(!1);
  j(() => {
    if (n) {
      const s = setTimeout(() => r(!1), si);
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
      className: p(
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
                  icon: Rr,
                  size: "md",
                  "aria-hidden": !0,
                  color: "default",
                  className: p(
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
                  icon: bt,
                  size: "md",
                  "aria-hidden": !0,
                  color: "positive",
                  className: p(
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
}, nn = Da(
  ({ children: t, className: a, ...n }) => /* @__PURE__ */ o(
    ue,
    {
      ...n,
      className: p(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        a
      ),
      children: [
        t,
        /* @__PURE__ */ e("div", { className: "grid", children: /* @__PURE__ */ e(B, { "aria-hidden": !0, icon: pt, size: "md" }) })
      ]
    }
  )
);
nn.displayName = "NavigateAction";
const rn = Da(
  ({ children: t, className: a, href: n, ...r }) => /* @__PURE__ */ o(
    ue,
    {
      ...r,
      target: "_blank",
      href: n,
      rel: "noopener noreferrer",
      className: p(
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
            icon: $r,
            size: "md",
            color: "default"
          }
        ) })
      ]
    }
  )
);
rn.displayName = "OpenLinkAction";
const De = E(
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
          oi,
          {
            action: s,
            className: p("flex items-center gap-1.5 p-1.5", l),
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
De.displayName = "ItemContainer";
const oi = ({
  children: t,
  action: a,
  ...n
}) => {
  const r = a.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ e(ii, { ...a, ...n, children: t });
    case "navigate":
      return /* @__PURE__ */ e(nn, { ...a, ...n, children: t });
    case "open-link":
      return /* @__PURE__ */ e(rn, { ...a, ...n, children: t });
    case "noop":
      return /* @__PURE__ */ e("div", { ...n, children: t });
    default:
      return r;
  }
}, Ze = (t, a) => t && t.type === "copy" ? { type: "copy", text: t.text ?? a } : t, ln = E(
  ({ text: t, icon: a, action: n }, r) => /* @__PURE__ */ e(
    De,
    {
      ref: r,
      text: t,
      leftIcon: a,
      action: Ze(n, t)
    }
  )
);
ln.displayName = "DataList.Item";
const ci = P("DataList.Item", ln), sn = E(
  ({ action: t, avatarUrl: a, firstName: n, lastName: r }, l) => {
    const s = `${n} ${r}`;
    return /* @__PURE__ */ e(
      De,
      {
        ref: l,
        leftIcon: () => /* @__PURE__ */ e(
          pe,
          {
            size: "xs",
            src: a,
            firstName: n,
            lastName: r
          }
        ),
        text: s,
        action: Ze(t, s)
      }
    );
  }
);
sn.displayName = "PersonItem";
const di = P("PersonItem", sn), on = E(
  ({ avatarUrl: t, name: a, action: n }, r) => /* @__PURE__ */ e(
    De,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ e(Ca, { name: a, size: "xs", src: t }),
      text: a,
      action: Ze(n, a)
    }
  )
);
on.displayName = "CompanyItem";
const ui = P("CompanyItem", on), cn = E(
  ({ action: t, name: a }, n) => /* @__PURE__ */ e(
    De,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ e(Br, { name: a, size: "xs" }),
      text: a,
      action: Ze(t, a)
    }
  )
);
cn.displayName = "TeamItem";
const fi = P("TeamItem", cn), dn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ia, { ...t }) })
);
dn.displayName = "DotTagItem";
const mi = P("DotTagItem", dn), un = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(vt, { ...t }) })
);
un.displayName = "AlertTagItem";
const hi = P("AlertTagItem", un), fn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Wr, { ...t }) })
);
fn.displayName = "BalanceTagItem";
const pi = P(
  "BalanceTagItem",
  fn
), mn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Te, { ...t }) })
);
mn.displayName = "StatusTagItem";
const gi = P(
  "StatusTagItem",
  mn
), hn = E(
  ({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Ie, { ...t }) })
);
hn.displayName = "RawTagItem";
const bi = P("RawTagItem", hn);
function xi(t, a) {
  return /* @__PURE__ */ e("li", { ref: a, className: "flex items-start pt-1", children: /* @__PURE__ */ e(Mr, { ...t }) });
}
const pn = E(xi);
pn.displayName = "TagListItem";
const vi = P("TagListItem", pn), gn = E(
  ({ children: t, label: a, isHorizontal: n = !1 }, r) => /* @__PURE__ */ o(
    "div",
    {
      className: p(
        n ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"
      ),
      children: [
        a && /* @__PURE__ */ e(
          "p",
          {
            className: p(
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
gn.displayName = "DataList";
const yi = P("DataList", gn), ce = Object.assign(yi, {
  Item: ci,
  CompanyItem: ui,
  PersonItem: di,
  TeamItem: fi,
  DotTagItem: mi,
  AlertTagItem: hi,
  BalanceTagItem: pi,
  StatusTagItem: gi,
  RawTagItem: bi,
  TagListItem: vi
}), wi = ({ content: t }) => /* @__PURE__ */ o(H, { children: [
  t.type === "weekdays" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(li, { ...t }) }),
  t.type === "person" && /* @__PURE__ */ e(ce.PersonItem, { ...t }),
  t.type === "item" && /* @__PURE__ */ e(ce.Item, { ...t }),
  t.type === "team" && /* @__PURE__ */ e(ce.TeamItem, { ...t }),
  t.type === "company" && /* @__PURE__ */ e(ce.CompanyItem, { ...t }),
  t.type === "dot-tag" && /* @__PURE__ */ e(ce.DotTagItem, { ...t }),
  t.type === "alert-tag" && /* @__PURE__ */ e(ce.AlertTagItem, { ...t }),
  t.type === "balance-tag" && /* @__PURE__ */ e(ce.BalanceTagItem, { ...t }),
  t.type === "status-tag" && /* @__PURE__ */ e(ce.StatusTagItem, { ...t }),
  t.type === "raw-tag" && /* @__PURE__ */ e(ce.RawTagItem, { ...t }),
  t.type === "tag-list" && /* @__PURE__ */ e(ce.TagListItem, { ...t.tagList }),
  t.type === "avatar-list" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(yt, { ...t.avatarList }) })
] }), Ni = E(
  function({ title: a, content: n, isHorizontal: r = !1, spacingAtTheBottom: l }, s) {
    const i = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: p(
          "flex flex-col gap-0.5",
          l && !r && "pb-3",
          r && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"
        ),
        children: /* @__PURE__ */ e(ce, { label: a, isHorizontal: r, children: i.map((c, d) => /* @__PURE__ */ e(wi, { content: c }, d)) })
      }
    );
  }
), Ci = ae(
  P("DetailsItem", Ni)
), Ii = E(
  function({ title: a, tableView: n = !1, details: r, dataTestId: l }, s) {
    return /* @__PURE__ */ e(jr, { dataTestId: l, children: /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-4", children: [
      !!a && /* @__PURE__ */ e("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: a.toLocaleUpperCase() }),
      /* @__PURE__ */ e(
        "div",
        {
          className: p(
            "flex flex-col",
            n ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"
          ),
          children: r?.map((i, c) => /* @__PURE__ */ o(ne.Fragment, { children: [
            /* @__PURE__ */ e(
              Ci,
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
), Mc = P(
  "DetailsItemsList",
  Ii
), bn = ne.forwardRef(({ person: t, onClick: a, ...n }, r) => {
  const l = () => {
    a();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: p(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        n.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ e(
          pe,
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
            n.info && /* @__PURE__ */ e(xe, { label: n.info, children: /* @__PURE__ */ e(
              B,
              {
                icon: pa,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in n && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: n.bottomTags.map((s, i) => /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ e(Ie, { ...s }, s.text),
            i < n.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in n && n.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: n.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in n && n.rightTag && /* @__PURE__ */ e(Ia, { ...n.rightTag }),
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
}), ki = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(_, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(_, { className: "h-4" }),
    /* @__PURE__ */ e(_, { className: "h-4" })
  ] })
] });
bn.displayName = "OnePersonListItem";
const jc = ae(
  P(
    "OnePersonListItem",
    ee(bn, ki)
  )
), Si = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ai({
  children: t,
  sidebar: a,
  banner: n,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(Ul, { children: /* @__PURE__ */ e(
    Li,
    {
      ai: r,
      aiPromotion: l,
      sidebar: a,
      banner: n,
      children: t
    }
  ) });
}
function Li({
  children: t,
  sidebar: a,
  banner: n,
  ai: r,
  aiPromotion: l
}) {
  const s = r?.enabled ? Vr : l?.enabled ? hs : kl, i = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(s, { ...i, children: /* @__PURE__ */ e(
    Ei,
    {
      ai: r,
      aiPromotion: l,
      sidebar: a,
      banner: n,
      children: t
    }
  ) });
}
const Vc = P(
  "ApplicationFrame",
  Ai
), Fi = ({ contentId: t }) => {
  const a = ie();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: re(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: a.actions.skipToContent
    }
  );
};
function Ti(t, a, n) {
  return !a && t ? n === "hidden" : a && !t ? n !== "hidden" : !1;
}
function _i(t, a) {
  const { sidebarState: n, toggleSidebar: r } = Ae(), l = V(t);
  j(() => {
    a && Ti(
      t,
      l.current,
      n
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, a, n, r]);
}
function Ei({
  ai: t,
  aiPromotion: a,
  children: n,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ae(), f = Ke(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: b,
    resizable: g
  } = Gr(), v = m === "fullscreen", w = m === "canvas", { open: A } = qe(), O = g ? b : Ur, $ = V(v), z = v && !$.current, T = !v && $.current, [
    x,
    I
  ] = F(!1);
  j(() => {
    !v && $.current && I(!0), $.current = v;
  }, [v]);
  const y = v || x || T, C = q(() => z ? { duration: 0.15, ease: "easeOut" } : T ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [z, T]), R = rt(
    `(max-width: ${We.xl}px)`,
    { initializeWithValue: !0 }
  ), k = rt(`(max-width: ${We.md}px)`, {
    initializeWithValue: !0
  });
  return j(() => {
    d(u);
  }, [u, d]), j(() => {
    d(A);
  }, [A, d]), _i(u, R), /* @__PURE__ */ e(
    Hr,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(ka, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(ke, { children: s === "unlocked" && /* @__PURE__ */ e(
            K.nav,
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
              ref: (L) => {
                s === "hidden" ? L?.setAttribute("inert", "") : L?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(Fi, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            K.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !k ? O : 0
              },
              transition: { paddingRight: Si },
              children: [
                /* @__PURE__ */ e(
                  K.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: p(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      y ? "overflow-hidden" : "overflow-auto",
                      !u && !A && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ e(
                      K.div,
                      {
                        className: p(
                          "flex max-w-full flex-1",
                          y ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: n
                      }
                    )
                  }
                ),
                t?.enabled && w && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      "pointer-events-none",
                      k ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[15]"
                    ),
                    style: k ? void 0 : { right: O },
                    children: /* @__PURE__ */ e(Kr, {})
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  K.div,
                  {
                    className: p(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      k ? "fixed inset-0 z-[30]" : p(
                        "absolute right-0 top-0 bottom-0",
                        y ? "z-20" : "z-0",
                        s === "hidden" && y ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: k || v ? "100%" : O
                    },
                    transition: C,
                    onAnimationComplete: () => {
                      x && I(!1);
                    },
                    children: /* @__PURE__ */ e(qr, {})
                  }
                )
              ]
            }
          ),
          a?.enabled && /* @__PURE__ */ e(ms, {})
        ] }) })
      ] })
    }
  );
}
const Di = ge({
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
function xn({
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
        /* @__PURE__ */ e("div", { className: Di({ period: n }) }),
        a && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ e(
              M,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: ua,
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
                  a?.onPulseClick ? /* @__PURE__ */ e(
                    _l,
                    {
                      src: a.employeeAvatar,
                      firstName: a.employeeFirstName,
                      lastName: a.employeeLastName,
                      pulse: a.pulse,
                      onPulseClick: a.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    pe,
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
                        className: p(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: a.title
                      }
                    ),
                    a.description && /* @__PURE__ */ e(
                      "p",
                      {
                        className: p(
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
            /* @__PURE__ */ e(fa, {}),
            /* @__PURE__ */ e(Va, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
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
xn.displayName = "DaytimePage";
const Gc = ae(
  P("DaytimePage", xn)
);
function Oi(t) {
  return t.filter((a) => !!a.title).map(({ title: a, description: n, href: r, onClick: l, target: s }) => ({
    label: a,
    description: n,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function zi({ label: t, options: a, hasNewUpdate: n }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ce, { items: Oi(a), children: /* @__PURE__ */ o(
        "button",
        {
          className: p(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            re()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(B, { icon: Sa, size: "sm" }),
            n && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const Hc = ae(
  P("OmniButton", zi)
);
function vn({ children: t, header: a, embedded: n = !1 }) {
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
vn.displayName = "Page";
const Uc = ae(P("Page", vn));
function Pi({
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
    aa,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    Ri,
    {
      companies: t,
      selected: i,
      onChange: n,
      additionalOptions: s,
      children: /* @__PURE__ */ e(
        aa,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Ri = ({
  companies: t,
  selected: a,
  onChange: n,
  children: r,
  additionalOptions: l = []
}) => {
  const s = ie(), [i, c] = F(!1), d = q(
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
    n(u);
  };
  return /* @__PURE__ */ e(
    Me,
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
          className: p(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            re()
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
                children: /* @__PURE__ */ e(B, { icon: gt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, aa = ({
  company: t,
  withNotification: a = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: p(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        Ca,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: a ? { icon: Aa, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(he, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function Kc({
  user: t,
  options: a,
  showActivityButton: n = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ce, { items: a, children: /* @__PURE__ */ o(
      "button",
      {
        className: p(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          re("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ e(
            pe,
            {
              src: t.avatarUrl,
              firstName: t.firstName,
              lastName: t.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ e(he, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    n && /* @__PURE__ */ e(xe, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        M,
        {
          icon: ya,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Yr, { type: "highlight", size: "sm", icon: Aa }) })
    ] }) })
  ] });
}
function $i({ isExpanded: t }) {
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
            className: p(
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
            className: p(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Bi() {
  const { prevSidebarState: t, sidebarState: a, toggleSidebar: n, isSmallScreen: r } = Ae(), l = V(null);
  return j(() => {
    t === "hidden" && a === "locked" && l.current?.focus();
  }, [t, a]), /* @__PURE__ */ o(
    Na,
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
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: !r }), children: /* @__PURE__ */ e($i, { isExpanded: a === "locked" }) }),
        /* @__PURE__ */ e("div", { className: p("hidden", { flex: r }), children: /* @__PURE__ */ e(B, { icon: Se, size: "md" }) })
      ]
    }
  );
}
function qc({
  companies: t,
  selected: a,
  onChange: n,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Pi,
      {
        companies: t,
        selected: a,
        onChange: n,
        isLoading: s,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Bi, {})
  ] });
}
function Wi() {
  const [t, a] = F(!1);
  return j(() => {
    a(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const yn = St(void 0);
function Mi({ children: t }) {
  const [a, n] = F(!1), [r, l] = F(null);
  return /* @__PURE__ */ e(
    yn.Provider,
    {
      value: { isDragging: a, setIsDragging: n, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function Tt() {
  const t = kt(yn);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const ji = ({
  item: t,
  active: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      B,
      {
        icon: t.icon,
        size: "md",
        className: p(
          "transition-colors",
          a ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(Ue, { value: t.badge, size: "sm", type: "bold" })
] }), Vi = ({ item: t }) => {
  const { isActive: a } = ht(), { label: n, icon: r, ...l } = t, s = a(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    ue,
    {
      ...l,
      className: p(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        re("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(ji, { item: t, active: s })
    }
  );
}, Gi = ({
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
  const f = ie(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: b } = Tt(), { isActive: g } = ht(), v = g(t.href, { exact: t.exactMatch }), w = V(!1), [A, O] = F(!1), $ = l === 0, z = l === s - 1, T = s === 1, x = q(() => {
    const L = [];
    return !T && !$ && L.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Jr
    }), !T && !z && L.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Zr
    }), L.length > 0 && L.push({ type: "separator" }), L.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Xr,
      critical: !0
    }), L;
  }, [T, $, z, f, i, l, r, t]), I = () => {
    m(!0), O(!1), b(t.href || null), w.current = !0;
  }, y = () => {
    m(!1), b(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, C = u && h === t.href, R = q(
    () => p(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      A && "bg-f1-background-secondary",
      C && "bg-f1-background-secondary"
    ),
    [v, A, C, d]
  ), k = q(() => /* @__PURE__ */ o(H, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(Ui, { tooltip: a, children: /* @__PURE__ */ o(
      ue,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: p(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          C && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          t.type === "icon" ? /* @__PURE__ */ e(
            B,
            {
              icon: t.icon,
              size: "md",
              className: p(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : t.avatar ? /* @__PURE__ */ e(Qr, { size: "xs", avatar: t.avatar }) : null,
          /* @__PURE__ */ e(
            he,
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
        className: p(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          A && "bg-f1-background-secondary opacity-100",
          C && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ce,
          {
            open: A,
            onOpenChange: O,
            items: x,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(B, { icon: it, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, v, A, C, x, a]);
  return d ? /* @__PURE__ */ e(
    La,
    {
      value: t,
      drag: "y",
      dragConstraints: n,
      dragElastic: 0.1,
      onDragStart: I,
      onDragEnd: y,
      className: R,
      whileDrag: {
        scale: 1.05
      },
      children: k
    }
  ) : /* @__PURE__ */ e("div", { className: R, children: k });
}, wn = ({
  title: t,
  isOpen: a = !0,
  isRoot: n,
  onCollapse: r,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = F(a), f = Ke(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(tl, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          re("focus-visible:ring-inset"),
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
                  icon: gt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e(al, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
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
}, at = ({
  category: t,
  isSortable: a = !1,
  dragConstraints: n,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Tt(), d = V(!1), f = el(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (g) => {
    !i && !d.current && r?.(t, g);
  }, b = /* @__PURE__ */ e(
    wn,
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
          className: p(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: t.items.map((g, v) => /* @__PURE__ */ e(Vi, { item: g }, v))
        }
      )
    }
  );
  return a ? /* @__PURE__ */ e(
    La,
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
function Yc({
  tree: t,
  onCollapse: a,
  onSort: n,
  onFavoritesChange: r,
  favorites: l
}) {
  const s = V(null), i = t.filter(
    (g) => g.isSortable === !1
  ), [c, d] = F(
    t.filter((g) => g.isSortable !== !1)
  ), [f, u] = F(0), m = Q((g) => {
    d(g);
  }, []), h = Q(
    (g) => {
      n?.(g);
    },
    [n]
  ), b = Wi();
  return /* @__PURE__ */ e(Mi, { children: /* @__PURE__ */ e(ka, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    Hi,
    {
      disableDragging: b,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: a,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((g) => g + 1)
    },
    f
  ) }) });
}
function Hi({
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
  const u = ie(), { isDragging: m } = Tt(), h = t.some((N) => N.isRoot), b = t.filter((N) => !N.isRoot).length > 0, g = a.length > 0, v = V(null), [w, A] = F(i), O = i.length > 0;
  j(() => {
    JSON.stringify(i) !== JSON.stringify(w) && A(i);
  }, [i]);
  const $ = (N) => {
    A(N);
  }, z = Q(
    (N) => {
      const D = w.filter((Y) => Y.href !== N.href);
      A(D), c?.(D);
    },
    [w, c]
  ), T = Q(
    (N, D) => {
      if (D < 0 || D >= w.length) return;
      const Y = [...w], [U] = Y.splice(N, 1);
      Y.splice(D, 0, U), A(Y), c?.(Y);
    },
    [w, c]
  ), [x, I] = F(!1), y = V(null);
  j(() => {
    a.length > 0 && !x && (n([...a]), I(!0));
  }, [a, n, x]), j(() => {
    const N = () => {
      y.current !== null && window.clearTimeout(y.current), y.current = window.setTimeout(() => {
        r.current && a.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N), y.current !== null && window.clearTimeout(y.current);
    };
  }, [r, a, d]);
  const C = "flex flex-col gap-0.5", R = q(
    () => w.reduce(
      (N, D, Y) => (D.label in N || (N[D.label] = []), N[D.label].push(Y), N),
      {}
    ),
    [w]
  ), k = q(
    () => O && w.map((N, D) => /* @__PURE__ */ e(
      Gi,
      {
        isSortable: !f,
        tooltip: (R[N.label] ?? []).length > 1 ? N.tooltip : void 0,
        item: N,
        dragConstraints: v,
        onRemove: z,
        index: D,
        total: w.length,
        onMove: T,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${N.href}-${N.label}`
    )),
    [
      O,
      w,
      R,
      z,
      T,
      c,
      f
    ]
  ), L = "flex flex-col gap-3", W = q(() => a.map((N) => /* @__PURE__ */ e(
    at,
    {
      category: N,
      isSortable: !f,
      dragConstraints: r,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: a
    },
    N.id
  )), [a, f, r, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: p(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((N) => N.isRoot).map((N, D) => /* @__PURE__ */ e(
          at,
          {
            category: N,
            onCollapse: l
          },
          `fixed-${D}`
        )) }),
        O && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(wn, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: v, children: f ? /* @__PURE__ */ e("div", { className: C, children: k }) : /* @__PURE__ */ e(
          Ot,
          {
            axis: "y",
            values: w,
            onReorder: $,
            className: C,
            children: k
          }
        ) }) }) }),
        b && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((N) => !N.isRoot).map((N, D) => /* @__PURE__ */ e(
          at,
          {
            category: N,
            onCollapse: l
          },
          `fixed-${D}`
        )) }),
        g && /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: L, children: W }) : /* @__PURE__ */ e(
              Ot,
              {
                axis: "y",
                values: a,
                onReorder: n,
                layoutScroll: !0,
                className: L,
                children: W
              }
            )
          }
        )
      ]
    }
  );
}
const Ui = ({
  tooltip: t,
  children: a
}) => t ? /* @__PURE__ */ e(xe, { description: t, children: a }) : a;
function Jc({
  onClick: t,
  placeholder: a,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: p(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        re()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(B, { icon: nl, size: "md" }),
          /* @__PURE__ */ e("span", { children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(rl, { keys: n }) })
      ]
    }
  ) });
}
const na = ({ position: t }) => /* @__PURE__ */ e(
  K.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: p(
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
function Ki({
  header: t,
  body: a,
  footer: n,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: s } = Ae(), i = Ke(), [c, d] = lt({ threshold: 1 }), [f, u] = lt({ threshold: 1 }), m = ie(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, b = () => n ? Sl(n) && r ? Oa(
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
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        a && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(He, { className: "h-full", children: [
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
            !d && /* @__PURE__ */ e(na, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(na, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: b() })
      ]
    }
  );
}
const Zc = ae(Ki), qi = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, ra = {
  approved: {
    icon: ha,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Se,
    type: "critical",
    size: "sm"
  }
}, Yi = {
  icon: Sa,
  type: "neutral",
  size: "sm"
}, Ji = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, Zi = (t) => t in ra ? ra[t] : Yi;
function la(t) {
  return Ji[t ?? "neutral"] ?? 0;
}
const Xi = ({
  title: t,
  approvalsRequired: a = 1,
  status: n,
  approvers: r
}) => {
  const l = ie(), s = a === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    a.toString()
  ), i = l.approvals.statuses[n], c = q(() => r.map((d) => {
    const f = Zi(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => la(f.badge?.type) - la(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ e(Te, { text: i, variant: qi[n] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(yt, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, Qi = ({ steps: t }) => {
  const n = ie().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: n }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: s + 1 })
          }
        ),
        s !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: t.map((l, s) => /* @__PURE__ */ o(H, { children: [
        /* @__PURE__ */ e(
          Xi,
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
}, Xc = ae(
  P("OneApprovalHistory", Qi)
), _t = {
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
}, eo = ge({
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
      ..._t
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), to = ne.forwardRef(function({ className: a, gap: n, children: r, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ e("div", { className: p("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ e(
    "div",
    {
      className: p(eo({ gap: n, tileSize: l }), a),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), ao = ge({
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
}), Nn = E(function({
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
  height: h,
  width: b,
  ...g
}, v) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        ao({
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
          height: h,
          width: b
        }),
        a
      ),
      ref: v,
      ...g
    }
  );
}), no = ge({
  base: "flex-row",
  variants: {
    gap: {
      ..._t
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), ro = ne.forwardRef(function({ className: a, gap: n, wrap: r, ...l }, s) {
  return /* @__PURE__ */ e(
    Nn,
    {
      className: p(no({ gap: n, wrap: r }), a),
      ref: s,
      ...l
    }
  );
}), lo = ge({
  base: "flex-col",
  variants: {
    gap: {
      ..._t
    }
  },
  defaultVariants: {}
}), so = E(function({ className: a, gap: n, children: r, ...l }, s) {
  return /* @__PURE__ */ e(
    Nn,
    {
      className: p(lo({ gap: n }), a),
      ref: s,
      ...l,
      children: r
    }
  );
}), Qc = fe(
  {
    name: "Stack",
    type: "layout"
  },
  so
), ed = fe(
  {
    name: "Split",
    type: "layout"
  },
  ro
), td = fe(
  {
    name: "AutoGrid",
    type: "layout"
  },
  to
), io = ({ children: t }) => {
  const { enabled: a } = $a();
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
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
}, oo = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), co = E(function({ header: a, children: n, action: r, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = $a();
  j(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (b) => !!b && !(ne.isValidElement(b) && b.type === ne.Fragment && ne.Children.count(b.props.children) === 0), h = () => {
    a?.link?.onClick?.();
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
        a && /* @__PURE__ */ e(Nt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              a.title && /* @__PURE__ */ e(Ct, { className: "truncate", children: a.title }),
              a.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(oo, {}),
                /* @__PURE__ */ e(Fa, { className: "truncate", children: a.subtitle })
              ] }),
              a.info && /* @__PURE__ */ e(xe, { label: a.info, children: /* @__PURE__ */ e(
                B,
                {
                  icon: Ta,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              a.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(Ue, { value: a.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ e(vt, { text: s, level: "critical" }),
              i && /* @__PURE__ */ e(Te, { text: i.text, variant: i.variant }),
              a.link && /* @__PURE__ */ e(
                ll,
                {
                  onClick: h,
                  href: a.link.url,
                  title: a.link.title,
                  icon: a.link.icon
                }
              )
            ] })
          ] }),
          a.comment && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(io, { children: /* @__PURE__ */ e(sl, { children: a.comment }) }),
            !!a.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              M,
              {
                icon: f ? il : ol,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(It, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((b, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: b.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!b.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.prefixUnit }),
              b.value,
              !!b.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: b.postfixUnit })
            ] })
          ] }, g)) }),
          ne.Children.toArray(n).filter(m).map((b, g) => /* @__PURE__ */ o(ne.Fragment, { children: [
            g > 0 && /* @__PURE__ */ e(cl, { bare: !0 }),
            b
          ] }, g))
        ] }),
        r && /* @__PURE__ */ e(dl, { children: /* @__PURE__ */ e(M, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), uo = ge({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), fo = E(
  function({ header: a, height: n }, r) {
    return /* @__PURE__ */ o(
      wt,
      {
        className: p(
          "flex gap-4 border-f1-border-secondary",
          n === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(Nt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                a?.title ? /* @__PURE__ */ e(Ct, { children: a.title }) : /* @__PURE__ */ e(_, { className: "h-4 w-full max-w-16" }),
                a?.subtitle && /* @__PURE__ */ e(Fa, { children: a.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            It,
            {
              "aria-hidden": !0,
              className: p(n !== "full" && uo({ height: n })),
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
  P("Widget", ee(co, fo))
), se = Object.assign(
  E(function({ chart: a, summaries: n, ...r }, l) {
    return /* @__PURE__ */ e(Ne, { ref: l, ...r, summaries: n, children: a && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: a }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), mo = ee(
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
      se,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ e(El, { ...s, canBeBlurred: a })
      }
    );
  }),
  se.Skeleton
), ho = P(
  "AreaChartWidget",
  mo
), po = E(function(a, n) {
  return /* @__PURE__ */ e(
    se,
    {
      ref: n,
      ...a,
      chart: /* @__PURE__ */ e(Dl, { yAxis: { hide: !0 }, ...a.chart })
    }
  );
}), go = P(
  "BarChartWidget",
  ee(po, se.Skeleton)
), bo = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        se,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(Ol, { yAxis: { hide: !0 }, ...a.chart })
        }
      );
    }
  ),
  se.Skeleton
), xo = P(
  "LineChartWidget",
  bo
), vo = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        se,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(zl, { ...a.chart })
        }
      );
    }
  ),
  se.Skeleton
), yo = P(
  "PieChartWidget",
  vo
), wo = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(se, { ref: n, ...a, chart: null });
    }
  ),
  se.Skeleton
), No = P(
  "SummariesWidget",
  wo
), Co = ee(
  E(
    function(a, n) {
      return /* @__PURE__ */ e(
        se,
        {
          ref: n,
          ...a,
          chart: /* @__PURE__ */ e(Pl, { xAxis: { hide: !0 }, ...a.chart })
        }
      );
    }
  ),
  se.Skeleton
), Io = P(
  "VerticalBarChartWidget",
  Co
), ad = fe(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  ho
), nd = fe(
  {
    name: "BarChartWidget",
    type: "info"
  },
  go
), rd = fe(
  {
    name: "LineChartWidget",
    type: "info"
  },
  xo
), ld = fe(
  {
    name: "PieChartWidget",
    type: "info"
  },
  yo
), sd = fe(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Io
), id = fe(
  {
    name: "SummariesWidget",
    type: "info"
  },
  No
), ko = (t, a) => /* @__PURE__ */ o(
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
), So = E(ko), Ao = (t, a) => /* @__PURE__ */ o(
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
), Lo = E(Ao), Fo = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, To = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, _o = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Eo = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Do = E(
  function({ title: a, content: n, buttonLabel: r, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Fo[i], f = To[i], u = _o[i], m = Eo[i];
    return /* @__PURE__ */ o(
      wt,
      {
        className: p(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(Nt, { className: "-mt-0.5", children: /* @__PURE__ */ e(Ct, { children: a }) }),
          /* @__PURE__ */ o(It, { className: p("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: p(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e(So, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ e(Lo, { className: "w-full" })
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
), od = ae(
  P("ChartWidgetEmptyState", Do)
);
function Oo(t, a) {
  const n = V(null), r = V(null), [l, s] = F({
    visibleItems: [],
    overflowItems: []
  });
  ul({
    ref: n,
    onResize: () => {
      f();
    }
  });
  const i = Q(
    (u, m, h) => m < h - 1 ? u + a : u,
    [a]
  ), c = Q(() => {
    if (!r.current) return [];
    const u = r.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const b = u[h].getBoundingClientRect().height;
      m.push(b);
    }
    return m;
  }, []), d = Q(
    (u, m) => {
      let h = 0, b = 0;
      for (let g = 0; g < u.length; g++) {
        const v = b + u[g];
        if (v > m + 30) break;
        b = v, b = i(
          b,
          g,
          u.length
        ), h++;
      }
      return h;
    },
    [i]
  ), f = Q(() => {
    if (!n.current || t.length === 0) return;
    const u = n.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    s(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (b) => b.visibleItems.length === h && b.overflowItems.length === t.length - h ? b : {
      visibleItems: t.slice(0, h),
      overflowItems: t.slice(h)
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
const Xe = function({
  items: a,
  renderListItem: n,
  className: r,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Oo(a, l);
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
Xe.displayName = "VerticalOverflowList";
const cd = ({
  events: t,
  showAllItems: a,
  gap: n = 8,
  minSize: r = 184
}) => t.length ? a ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(ft, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  Xe,
  {
    items: t,
    gap: n,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(ft, { ...l }, l.title)
  }
) : null, zo = ({ onClick: t, children: a }) => {
  const n = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: p(
        n,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: a
    }
  ) : /* @__PURE__ */ e("div", { className: n, tabIndex: 1, children: a });
};
function dd({
  label: t,
  count: a,
  icon: n,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(zo, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: p(
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
const Po = E(
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
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e(B, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: p("flex", r), children: /* @__PURE__ */ e(xt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, n);
  }
), ud = E(
  function({ items: a }, n) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: a.map(({ label: r, content: l, color: s, ...i }) => /* @__PURE__ */ e(
          Po,
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
), Ro = ({
  onClick: t,
  withEmoji: a,
  withPointerCursor: n,
  children: r
}) => {
  const l = p(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "gap-2" : "gap-2.5",
    n ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function fd({
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
    Ro,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(fl, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(ml, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: a }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          yt,
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
const $o = ({ onClick: t, className: a, children: n }) => t ? /* @__PURE__ */ e("a", { className: a, onClick: t, tabIndex: 0, children: n }) : /* @__PURE__ */ e("div", { className: a, tabIndex: -1, children: n });
function sa({
  id: t,
  title: a,
  subtitle: n,
  onClick: r,
  module: l
}) {
  const s = p(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o($o, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: s, children: [
    /* @__PURE__ */ e(wa, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: a }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
const Bo = ({ onClick: t, className: a, children: n }) => t ? /* @__PURE__ */ e("a", { className: a, onClick: t, tabIndex: 0, children: n }) : /* @__PURE__ */ e("div", { className: a, tabIndex: -1, children: n });
function mt({
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
  const u = p(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Bo, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ e(
        B,
        {
          icon: s,
          size: "md",
          className: p("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: a }),
      i && /* @__PURE__ */ e(
        B,
        {
          icon: i,
          size: "md",
          className: p("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      n && /* @__PURE__ */ e(vt, { ...n }),
      r && /* @__PURE__ */ e(Ie, { ...r }),
      !!l && /* @__PURE__ */ e(Ue, { value: l })
    ] })
  ] });
}
function md({
  items: t,
  minSize: a = 184,
  onClickItem: n,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((s) => /* @__PURE__ */ e(sa, { ...s, onClick: n }, s.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      minSize: a,
      renderListItem: (s) => /* @__PURE__ */ e(sa, { ...s, onClick: n }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function hd({
  items: t,
  gap: a,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${n}px` }, children: t.map((s) => /* @__PURE__ */ e(mt, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ e(
    Xe,
    {
      items: t,
      gap: a,
      renderListItem: (s) => /* @__PURE__ */ e(mt, { ...s, onClick: r }),
      minSize: n
    }
  );
}
const Wo = ({ title: t, info: a }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: a })
] }), pd = E(
  function({ title: a, titleValue: n, titleTooltip: r, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      a && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: a }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            xe,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(B, { icon: Ta, size: "sm" })
            }
          ) })
        ] }),
        n && /* @__PURE__ */ e("div", { children: n })
      ] }),
      l.map((i) => /* @__PURE__ */ e(Wo, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function gd({
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
      Rl,
      {
        data: n,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
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
const Cn = (t, a) => ((a ?? 0) < -1 * (t ?? 0) ? -1 * t : a) ?? 0, Mo = ({
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
    const u = Cn(
      n,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), b = Math.floor(m % 60), g = `${h.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return r >= 0 ? `${a.remainingTime} ${g}` : `${a.overtime} ${g}`;
  })(), f = ye[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, nt = "--:--", jo = (t, a) => {
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
}, Vo = ({
  data: t = [],
  trackedMinutes: a,
  remainingMinutes: n = 0
}) => {
  const r = n < 0 && n < -1 * a, l = Cn(
    a,
    n
  ), s = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = r || (l ?? 0) < 0 ? void 0 : jo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, b = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - b) / s;
        return c -= b, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: b / s + v,
            color: ye.overtime
          }
        ] : [
          ...u,
          {
            value: b / s,
            color: ye.overtime
          },
          {
            value: v,
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
}, Go = ({
  data: t = [],
  remainingMinutes: a,
  trackedMinutes: n = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, l = t.at(-1), s = r ? $t(r) : nt, i = a === void 0 || a > 0 ? nt : l ? $t(l.to) : nt, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : n * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function Ho({
  data: t = [],
  trackedMinutes: a = 0,
  remainingMinutes: n
}) {
  const r = Vo({
    data: t,
    trackedMinutes: a,
    remainingMinutes: n
  }), { primaryLabel: l, secondaryLabel: s, time: i } = Go({
    data: t,
    trackedMinutes: a,
    remainingMinutes: n
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e($l, { width: 156, height: 156, children: /* @__PURE__ */ e(
      Bl,
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
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: i }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ e("span", { className: "text-sm font-medium opacity-60", children: s })
    ] })
  ] });
}
function Uo({
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
            className: p(
              "font-medium",
              t ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: t ?? a
          }
        ),
        /* @__PURE__ */ e(B, { icon: pl })
      ]
    }
  );
}
function bd({
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
  onChangeBreakTypeId: h,
  canShowBreakButton: b = !0,
  canSeeGraph: g = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: A = !0,
  projectSelectorElement: O,
  breakTypeName: $
}) {
  const { status: z, statusText: T, subtitle: x, statusColor: I } = Mo({
    data: n,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: a,
    canSeeRemainingTime: v
  }), y = z === "clocked-out", C = m?.map((G) => ({
    value: G.id,
    label: G.duration ? `${G.name} · ${G.duration}` : G.name,
    description: G.description,
    tag: G.isPaid ? r.paid : r.unpaid
  })) ?? [], [R, k] = F(!1), L = () => {
    if (C.length > 1)
      R || k(!0);
    else {
      const G = C?.[0]?.value;
      u?.(G);
    }
  }, W = (G) => {
    h?.(G), k(!1), u?.(G);
  }, N = y && s.length && !c && i, D = s.find((G) => G.id === l), Y = s.map((G) => ({
    value: G.id,
    label: G.name,
    icon: G.icon
  })), U = z === "break", [ve, de] = F(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: T }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                K.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: I
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
                    backgroundColor: I
                  }
                }
              )
            ] })
          ] }),
          x && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: x })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          z === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            M,
            {
              onClick: d,
              label: r.clockIn,
              icon: zt
            }
          ) }),
          z === "clocked-in" && /* @__PURE__ */ o(H, { children: [
            b && /* @__PURE__ */ e(H, { children: C.length > 1 && h ? /* @__PURE__ */ e(
              Me,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: C,
                onChange: W,
                open: R,
                onOpenChange: k,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  M,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Pt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              M,
              {
                onClick: L,
                label: r.break,
                variant: "neutral",
                icon: Pt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              M,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Rt
              }
            )
          ] }),
          z === "break" && /* @__PURE__ */ o(H, { children: [
            /* @__PURE__ */ e(
              M,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Rt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              M,
              {
                onClick: d,
                label: r.resume,
                icon: zt
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ e(
        Ho,
        {
          data: n,
          trackedMinutes: t,
          remainingMinutes: v ? a : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: N ? /* @__PURE__ */ o(H, { children: [
      /* @__PURE__ */ e(
        Me,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: Y,
          onChange: w,
          open: ve,
          onOpenChange: de,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Uo,
            {
              text: D?.name,
              placeholder: r.selectLocation,
              icon: D?.icon
            }
          ) })
        }
      ),
      A && O
    ] }) : /* @__PURE__ */ o(H, { children: [
      i && D && /* @__PURE__ */ e(H, { children: /* @__PURE__ */ e(Ie, { text: D.name, icon: D.icon }) }),
      A && O,
      U && $ && /* @__PURE__ */ e(Ie, { text: $ })
    ] }) })
  ] }) });
}
const Ko = {
  done: xl,
  "in-progress": bl,
  todo: gl
}, qo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function Yo({
  task: t,
  status: a,
  onClick: n,
  hideIcon: r = !1
}) {
  const l = () => {
    n?.(t);
  }, s = q(() => {
    if (!r)
      return Ko[a];
  }, [a, r]);
  return /* @__PURE__ */ e(
    mt,
    {
      id: t.id,
      title: t.text,
      icon: s,
      iconClassName: qo[a],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: vl
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function xd({
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
    ).map(({ id: u, text: m, badge: h, counter: b }) => ({
      id: u,
      text: m,
      badge: h,
      counter: b,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, r).map((d) => /* @__PURE__ */ e(
    Yo,
    {
      task: d,
      status: d.status,
      hideIcon: n,
      onClick: a
    },
    d.id
  )) });
}
var Jo = Object.defineProperty, Zo = Object.defineProperties, Xo = Object.getOwnPropertyDescriptors, Ge = Object.getOwnPropertySymbols, In = Object.prototype.hasOwnProperty, kn = Object.prototype.propertyIsEnumerable, ia = (t, a, n) => a in t ? Jo(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, le = (t, a) => {
  for (var n in a || (a = {})) In.call(a, n) && ia(t, n, a[n]);
  if (Ge) for (var n of Ge(a)) kn.call(a, n) && ia(t, n, a[n]);
  return t;
}, Qe = (t, a) => Zo(t, Xo(a)), Qo = (t, a) => {
  var n = {};
  for (var r in t) In.call(t, r) && a.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Ge) for (var r of Ge(t)) a.indexOf(r) < 0 && kn.call(t, r) && (n[r] = t[r]);
  return n;
}, ec = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, tc = ({ spotsList: t, usedSpot: a }) => t.some((n) => n !== a && a.left === n.left), ac = ({ position: t, spot: a, stone: n }) => {
  if (t.left > a.left && a.right >= t.left && t.top + n.height > a.top) {
    if (a.bottom && a.bottom < t.top) return a;
    let r = le({}, a);
    return r.right = t.left, r;
  }
  return null;
}, nc = ({ position: t, stone: a, spot: n }) => {
  if (t.left + a.width > n.left && t.top >= n.top) {
    if (n.bottom && n.bottom < t.top || n.right < t.left) return n;
    let r = le({}, n);
    return r.bottom = t.top, r;
  }
  return null;
}, rc = ({ stone: t, position: a, spotsList: n, optimalSpot: r }) => {
  let l = le({}, r);
  return l.left = a.left + t.width, ec(l) || tc({ usedSpot: l, spotsList: n }) ? null : l;
}, lc = ({ spots: t, position: a, optimalSpot: n, stone: r }) => t.map((l, s, i) => {
  if (l === n) return rc({ stone: r, position: a, optimalSpot: n, spotsList: i });
  let c = ac({ position: a, spot: l, stone: r });
  return c || nc({ position: a, stone: r, spot: l }) || l;
});
function sc(t, a) {
  for (let n = 0, r = a.length; n < r; n++) {
    let l = a[n];
    if (t(l)) return l;
  }
  return null;
}
var ic = (t, a) => a.filter(t), oc = (t, a) => [...a].sort(t), cc = (t, a) => t.top === a.top ? t.left < a.left ? -1 : 1 : t.top < a.top ? -1 : 1, dc = (t) => oc(cc, t), uc = ({ availableSpots: t, optimalSpot: a, containerSize: n, stone: r }) => {
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
}, fc = (t, a) => {
  let n = t.right - t.left >= a.width;
  if (!t.bottom) return n;
  let r = t.bottom - t.top >= a.height;
  return n && r;
}, mc = ({ availableSpots: t, stone: a }) => sc((n) => fc(n, a), t);
function hc({ stone: t, availableSpots: a, containerSize: n }) {
  let r = mc({ availableSpots: a, stone: t }), l = { left: r.left, top: r.top }, s = uc({ optimalSpot: r, availableSpots: a.filter((d) => d !== r), stone: t, containerSize: n }), i = [...a, s], c = lc({ spots: i, position: l, optimalSpot: r, stone: t });
  return i = [...ic(Boolean, c)], i = dc(i), { position: l, availableSpots: i };
}
var pc = ({ stones: t, containerSize: a }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return n;
  let r = 0, l = [], s = [{ top: 0, left: 0, right: a }];
  for (let i of t) {
    let c = hc({ availableSpots: s, stone: i, containerSize: a }), d = c.position.top + i.height;
    r < d && (r = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: r };
}, gc = (t) => t.reduce((a, n) => {
  if (!n) return a;
  let r = n.getBoundingClientRect();
  return a.push({ width: r.width, height: r.height }), a;
}, []), bc = ({ boxesRefs: t, wrapperRef: a, children: n, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = F({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return j(() => {
    var u, m;
    let h = gc(t.current), b = (m = (u = a.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (b === null) return;
    let g = pc({ stones: h, containerSize: b });
    f(Qe(le({}, g), { stones: h }));
  }, [n, t, a, r, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, xc = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), vc = ({ transition: t, transitionDuration: a }) => t ? { transition: xc(a)[t] } : null, yc = (t) => t ? Qe(le({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, wc = ({ style: t, position: a, transition: n, transitionDuration: r }) => le(le(Qe(le({}, t), { position: "absolute" }), yc(a)), vc({ transition: n, transitionDuration: r }));
function Nc(t, a, n) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, a);
  };
}
var Cc = () => {
  let [t, a] = F(), n = V(Nc(a, 300));
  return j(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, Ic = (t) => {
  let [a, n] = F(null);
  return j(() => {
    let r = new ResizeObserver((l) => {
      for (let s of l) n(s.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), a;
}, kc = (t) => {
  var a = t, { children: n, style: r, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = a, c = Qo(a, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = V([]), f = V(null), u = Cc(), m = Ic(f), { positions: h, containerHeight: b } = bc({ boxesRefs: d, wrapperRef: f, children: n, windowWidth: u, wrapperWidth: m }), g = le({ minHeight: b ?? 0, position: "relative" }, r);
  return e("div", Qe(le({ ref: f, style: g }, c), { children: za.map(n, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let A = { style: wc({ style: v.props.style, position: h[w], transition: l, transitionDuration: s }), ref: (O) => d.current[w] = O };
    return Oa(v, le(le({}, v.props), A));
  }) }));
};
const Sc = { sm: 340, md: 480, lg: 640 }, oa = E(
  function({ children: a, widgetWidth: n = "sm" }, r) {
    const l = Sc[n], [s, i] = F(), c = za.toArray(a), d = V(null);
    return j(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: s === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: a }) : s && s > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(kc, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), Ac = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], vd = ee(oa, () => /* @__PURE__ */ e(_a, { children: /* @__PURE__ */ e(oa, { children: Ac.map((t, a) => /* @__PURE__ */ e(Ne.Skeleton, { height: t }, a)) }) })), ca = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), yd = ee(
  E(function({ children: a }, n) {
    return /* @__PURE__ */ e(He, { ref: n, showBar: !1, children: /* @__PURE__ */ e(ca, { children: a }) });
  }),
  () => /* @__PURE__ */ e(_a, { orientation: "horizontal", children: /* @__PURE__ */ o(ca, { children: [
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {})
  ] }) })
);
function Lc({
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
    yl,
    {
      title: t,
      description: a,
      ...n ? { emoji: n } : { variant: "warning" },
      actions: r
    }
  );
}
const wd = ae(
  P("WidgetEmptyState", Lc)
), Sn = E(
  ({ title: t, children: a }, n) => (wl(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    a
  ] }))
);
Sn.displayName = "WidgetSection";
const Nd = ae(
  P("WidgetSection", Sn)
), Cd = ({
  identifier: t,
  allowedRoutes: a,
  disallowedRoutes: n,
  children: r
}) => {
  const l = Nl(), s = window.location.pathname, i = q(() => a?.length ? a.includes(s) : n?.length ? !n.includes(s) : !0, [s, a, n]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return a && a.length > 0 && (d += ` Allowed routes: ${a.join(", ")}`), n && n.length > 0 && (d += ` Disallowed routes: ${n.join(", ")}`), d;
  }, [t, a, n]);
  return i ? r : (l && console.error(c), null);
}, Id = ae(
  fe(
    {
      name: "ScrollArea",
      type: "layout"
    },
    He
  )
);
export {
  Rc as ActivityItemList,
  Ms as ActivityItemListSkeleton,
  ms as AiPromotionChat,
  hs as AiPromotionChatProvider,
  Vc as ApplicationFrame,
  su as AreaChart,
  ad as AreaChartWidget,
  td as AutoGrid,
  Yr as Badge,
  iu as BarChart,
  nd as BarChartWidget,
  Ws as BaseActivityItemList,
  ou as BaseBanner,
  Us as BaseCelebration,
  ai as BaseCommunityPost,
  Ad as BaseTabs,
  Ld as BreadcrumbSelect,
  Hl as Breadcrumbs,
  ft as CalendarEvent,
  cd as CalendarEventList,
  cu as CardSelectableContainer,
  Al as Carousel,
  du as CategoryBarChart,
  gd as CategoryBarSection,
  $c as Celebration,
  Ks as CelebrationSkeleton,
  od as ChartWidgetEmptyState,
  Fd as Chip,
  bd as ClockInControls,
  uu as ComboChart,
  Wc as CommunityPost,
  ni as CommunityPostSkeleton,
  Pi as CompanySelector,
  Ue as Counter,
  vd as Dashboard,
  Gc as DaytimePage,
  Ci as DetailsItem,
  Mc as DetailsItemsList,
  fu as Dialog,
  Ce as Dropdown,
  Pc as EntitySelect,
  Td as F0ActionBar,
  mu as F0AiBanner,
  wa as F0AvatarModule,
  Oc as F0Callout,
  hu as F0TableOfContent,
  zc as F0VersionHistory,
  _d as F1SearchBox,
  pu as FILE_TYPES,
  Ed as FileItem,
  Bc as HighlightBanner,
  ud as IndicatorsList,
  Dd as Input,
  gu as Item,
  bu as ItemSectionHeader,
  xu as LineChart,
  rd as LineChartWidget,
  Yc as Menu,
  Od as MobileDropdown,
  vu as NotesTextEditor,
  yu as NotesTextEditorPatchTargetNotFoundError,
  wu as NotesTextEditorSkeleton,
  Nu as NotesTextEditorUnsupportedPatchTypeError,
  zd as NumberInput,
  Hc as OmniButton,
  Xc as OneApprovalHistory,
  Pd as OneCalendar,
  Rd as OneCalendarInternal,
  $d as OneDataCollection,
  Bd as OneDateNavigator,
  yl as OneEmptyState,
  Wd as OnePagination,
  jc as OnePersonListItem,
  Cd as OneRestrictComponent,
  Uc as Page,
  Dc as PageHeader,
  Cu as PieChart,
  ld as PieChartWidget,
  io as PrivateBox,
  Iu as ProgressBarChart,
  ku as RadarChart,
  Js as Reactions,
  Su as ResourceHeader,
  Or as RichTextDisplay,
  Au as RichTextEditor,
  Id as ScrollArea,
  Jc as SearchBar,
  Lu as SectionHeader,
  Me as Select,
  rl as Shortcut,
  Zc as Sidebar,
  Kc as SidebarFooter,
  qc as SidebarHeader,
  ma as Spinner,
  ed as Split,
  Qc as Stack,
  id as SummariesWidget,
  Md as Switch,
  jd as Tabs,
  Vd as TabsSkeleton,
  xd as TasksList,
  Fu as Textarea,
  Za as ToggleGroup,
  Xa as ToggleGroupItem,
  xe as Tooltip,
  pd as TwoColumnsList,
  Tu as VerticalBarChart,
  sd as VerticalBarChartWidget,
  ct as VirtualList,
  Gd as WeekStartDay,
  li as Weekdays,
  Ne as Widget,
  fd as WidgetAvatarsListItem,
  wd as WidgetEmptyState,
  dd as WidgetHighlightButton,
  md as WidgetInboxList,
  sa as WidgetInboxListItem,
  Nd as WidgetSection,
  hd as WidgetSimpleList,
  mt as WidgetSimpleListItem,
  yd as WidgetStrip,
  _u as _RadarChart,
  Hd as actionBarStatuses,
  Ud as chipVariants,
  Kd as downloadAsCSV,
  qd as generateCSVContent,
  Yd as getGranularityDefinition,
  Jd as getGranularityDefinitions,
  Zd as getGranularitySimpleDefinition,
  Xd as granularityDefinitions,
  Qd as modules,
  Eu as predefinedPresets,
  eu as rangeSeparator,
  Du as selectSizes,
  qe as useAiPromotionChat,
  tu as useDataCollectionData,
  au as useDataCollectionSource,
  nu as useExportAction,
  ru as useInfiniteScrollPagination,
  Ae as useSidebar
};
